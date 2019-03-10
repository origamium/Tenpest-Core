// @ts-ignore
import * as authSign from 'oauth-sign';
import {ApiParameterMethods} from '../../Enums/ApiParameterMethods';
import {AuthorizeMethod} from '../../Enums/AuthorizeMethod';
import {SignSpace} from '../../Enums/SignSpace';
import {UnknownOAuthSignatureSpace} from '../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiParameterDefinition} from '../../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../Interfaces/IAuthInfo';
import {ICombinedParameterData} from '../../Interfaces/ICombinedParameterData';
import {IAPIKey, IToken} from '../../Interfaces/IKeys';
import OAuth from './OAuth';

const authProps = {
    oauth_consumer_key: 'oauth_consumer_key',
    oauth_token: 'oauth_token',
    oauth_signature_method: 'oauth_signature_method',
    oauth_timestamp: 'oauth_timestamp',
    oauth_nonce: 'oauth_nonce',
    oauth_version: 'oauth_version',
    oauth_signature: 'oauth_signature',
};

export default class OAuth1 implements OAuth {
    private static readonly nonce: string = 'superdry';

    private static _now(): string {
        return Math.round(+new Date() / 1000).toString();
    }

    private static _signature(authInfo: IAuthInfo, token: IToken, apiData: IApiData, payload: IApiPayload, timestamp: string): string {
        const signParameter = {
            oauth_consumer_key: authInfo.apiKey.ApiKey,
            oauth_token: token ? token.Token : '',
            oauth_signature_method: authInfo.signMethod,
            oauth_timestamp: timestamp,
            oauth_nonce: OAuth1.nonce,
            oauth_version: authInfo.oauthVersion,
        };
        return encodeURIComponent(authSign.sign(
            authInfo.signMethod,
            apiData.method,
            apiData.baseUri + apiData.path,
            {...signParameter, ...payload},
            authInfo.apiKey.ApiSecretKey,
            token ? token.TokenSecret : '',
        ));
    }

    private static _headerstring(key: string, value: string): string {
        return key + '="' + value + '"';
    }

    public requestAuthToken(apiData: IApiData, apiKey: IAPIKey, redirect_uri: string)
        : ICombinedParameterData & {requiredPayload?: object} {
        const template: IApiParameterDefinition = apiData.parameter;
        const value: IApiPayload = {};

        const callbackKey = 'oauth_callback';
        if (!template[callbackKey]) {
            throw new Error('oauth_callback is not defined in ApiData.parameter');
        }
        value[callbackKey] = redirect_uri;

        const consumerKey = 'oauth_consumer_key';
        if (!template[consumerKey]) {
            throw new Error('oauth_consumer_key is not available in ApiData.parameter');
        }
        value[consumerKey] = apiKey.ApiKey;

        return {
            definition: template,
            payload: value,
        };
    }

    public authorizeUri(apiData: IApiData, apiKey: IAPIKey, redirect_uri: string, method: AuthorizeMethod, optional?: { scope?: string[], authToken?: IToken })
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

    public requestToken(apiData: IApiData, apiKey: IAPIKey, redirect_uri: string, verifier: string, optional?: { scope?: string[], authToken?: IToken })
        : ICombinedParameterData {
        const template: IApiParameterDefinition = apiData.parameter;
        const value: IApiPayload = {};

        const consumerKey = 'oauth_consumer_key';
        if (!template[consumerKey]) {
            throw new Error(consumerKey + ' is not available in ApiData.parameter');
        }
        value[consumerKey] = apiKey.ApiKey;

        return {
            definition: template,
            payload: value,
        };
    }

    // TODO: refreshToken

    public getAuthorizationData( authInfo: IAuthInfo, token: IToken, apiData: IApiData, payload: IApiPayload)
        : ICombinedParameterData {
        const template: IApiParameterDefinition = {};
        const value: IApiPayload = {};

        const timestamp = OAuth1._now();
        const signature = OAuth1._signature(authInfo, token, apiData, payload, timestamp);
        const nonce = OAuth1.nonce;

        if (token) {
            switch (authInfo.signSpace) {
                case SignSpace.Header:
                    const key = 'Authorization';
                    template[key] = { required: true, type: ApiParameterMethods.Header };
                    value[key] = 'OAuth ' +
                        OAuth1._headerstring(authProps.oauth_consumer_key, authInfo.apiKey.ApiKey) + ',' +
                        OAuth1._headerstring(authProps.oauth_token, token.Token) + ',' +
                        OAuth1._headerstring(authProps.oauth_signature_method, authInfo.signMethod) + ',' +
                        OAuth1._headerstring(authProps.oauth_timestamp, timestamp) + ',' +
                        OAuth1._headerstring(authProps.oauth_nonce, nonce) + ',' +
                        OAuth1._headerstring(authProps.oauth_version, authInfo.oauthVersion) + ',' +
                        OAuth1._headerstring(authProps.oauth_signature, signature);
                    break;
                case SignSpace.Query:
                    const authParamDefault = {required: true, type: ApiParameterMethods.Query};
                    Object.keys(authProps).forEach((v) => {
                        template[v] = {...authParamDefault};
                    });
                    value[authProps.oauth_consumer_key] = authInfo.apiKey.ApiKey;
                    value[authProps.oauth_token] = token.Token;
                    value[authProps.oauth_signature_method] = authInfo.signMethod;
                    value[authProps.oauth_timestamp] = timestamp;
                    value[authProps.oauth_nonce] = nonce;
                    value[authProps.oauth_version] = authInfo.oauthVersion;
                    value[authProps.oauth_signature] = signature;
                    break;
                default:
                    throw UnknownOAuthSignatureSpace;
            }
        }

        return {
            definition: template,
            payload: value,
        };
    }
}
