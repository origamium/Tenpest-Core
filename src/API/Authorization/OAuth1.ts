// @ts-ignore
import * as authSign from 'oauth-sign';
import {ApiParameterMethods} from '../../Enums/ApiParameterMethods';
import {AuthorizeMethod} from '../../Enums/AuthorizeMethod';
import {SignSpace} from '../../Enums/SignSpace';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiParameterDefinition} from '../../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../Interfaces/IAuthInfo';
import {ICombinedParameterData} from '../../Interfaces/ICombinedParameterData';
import {IAPIKey, IToken} from '../../Interfaces/IKeys';
import OAuth from './OAuth';
import {UnknownOAuthSignatureSpace} from '../../Exception/Exceptions';

export default class OAuth1 implements OAuth {
    private static readonly nonce: string = 'superdry';

    private static _now(): string {
        return Math.round(+new Date() / 1000).toString();
    }

    private static _signature(authInfo: IAuthInfo, token: IToken | undefined, apiData: IApiData, payload: IApiPayload, timestamp: string): string {
        const signParameter = {
            oauth_consumer_key: authInfo.apiKey.ApiKey,
            oauth_token: token ? token.Token : '',
            oauth_signature_method: authInfo.signMethod,
            oauth_timestamp: timestamp,
            oauth_nonce: OAuth1.nonce,
            oauth_version: authInfo.oauthVersion,
        };
        return authSign.sign(
            authInfo.signMethod,
            apiData.method,
            apiData.baseUri + apiData.path,
            {...signParameter, ...payload},
            authInfo.apiKey.ApiSecretKey,
            token ? token.TokenSecret : '',
        );
    }

    private static _authorization(authInfo: IAuthInfo, token: IToken | undefined, apiData: IApiData, payload: IApiPayload): ICombinedParameterData  {
        const timestamp = OAuth1._now();

        const authPayload: any = Object.assign({}, {
            oauth_consumer_key: authInfo.apiKey.ApiKey,
            oauth_signature_method: authInfo.signMethod,
            oauth_timestamp: timestamp,
            oauth_nonce: OAuth1.nonce,
            oauth_version: authInfo.oauthVersion,
        }, token ? { oauth_token: token.Token } : {});

        authPayload.oauth_signature = OAuth1._signature(authInfo, token, apiData, payload, timestamp);

        switch (authInfo.signSpace) {
            case SignSpace.Header:
                return {
                    definition: {
                        Authorization: { required: true, type: ApiParameterMethods.Header }
                    },
                    payload: {
                        Authorization: `OAuth oauth_consumer_key="${authPayload.oauth_consumer_key}",`
                            + (authPayload.oauth_token ? `oauth_token="${authPayload.oauth_token},` : ``)
                            + `oauth_signature_method="${authPayload.oauth_signature_method}",`
                            + `oauth_timestamp="${authPayload.oauth_timestamp}",`
                            + `oauth_nonce="${authPayload.oauth_nonce}",`
                            + `oauth_version="${authPayload.oauth_version}",`
                            + `oauth_signature="${encodeURIComponent(authPayload.oauth_signature)}"`
                    }
                }

            case SignSpace.Query:
                const required = {required: true, type: ApiParameterMethods.Query};
                const definition = {
                        oauth_consumer_key: required,
                        oauth_token: {required: false, type: ApiParameterMethods.Query},
                        oauth_signature_method: required,
                        oauth_timestamp: required,
                        oauth_nonce: required,
                        oauth_version: required,
                        oauth_signature: required,
                    };

                return {
                    definition: {...definition, ...apiData.parameter},
                    payload: {...authPayload, ...payload},
                }

            default:
                throw UnknownOAuthSignatureSpace;
        }
    }

    public requestAuthToken(apiData: IApiData, authInfo: IAuthInfo, redirect_uri?: string)
        : ICombinedParameterData & {requiredPayload?: object} {
        const template: IApiParameterDefinition = apiData.parameter;
        const value: IApiPayload = {};

        const callbackKey = 'oauth_callback';
        if (authInfo.callback) {
            value[callbackKey] = authInfo.callback;
        }

        const authorizationData = OAuth1._authorization(authInfo, undefined, apiData, value)

        return {
            definition: {...authorizationData.definition, ...template},
            payload: {...authorizationData.payload, ...value},
        };
    }

    public authorizeUri(apiData: IApiData, apiKey: IAPIKey, method: AuthorizeMethod, optional?: { scope?: string[], authToken?: IToken })
        : {uri: string, method: AuthorizeMethod} {
        const uri: string = apiData.baseUri + apiData.path;
        const parameters: string[] = [];

        if (!optional || !optional.authToken || !optional.authToken.Token) {
            throw new Error('OAuth1 required optional.authToken.Token');
        }

        parameters.push('oauth_token=' + optional.authToken.Token);

        return {
            uri: uri + '?' + encodeURIComponent(parameters.reduce((accm, curr) => (accm + '&' + curr), '')),
            method,
        };
    }

    public requestToken(apiData: IApiData, authInfo: IAuthInfo, verifier: string, optional?: { scope?: string[], authToken?: IToken })
        : ICombinedParameterData {
        const template: IApiParameterDefinition = apiData.parameter;
        const value: IApiPayload = {
            oauth_verifier: verifier,
        };

        const authorizationData = OAuth1._authorization(authInfo, undefined, apiData, value)

        return {
            definition: {...authorizationData.definition, ...template},
            payload: {...authorizationData.payload, ...value},
        };
    }

    // TODO: refreshToken

    public getAuthorizationData(apiData: IApiData, authInfo: IAuthInfo, token: IToken, payload: IApiPayload)
        : ICombinedParameterData {
        const authorizationData = OAuth1._authorization(authInfo, token, apiData, payload)

        return {
            definition: {...authorizationData.definition, ...apiData.parameter},
            payload: {...authorizationData.payload, ...payload},
        };
    }
}
