import * as authSign from 'oauth-sign';
import OAuth from './OAuth';
import {AuthMethods} from '../Enums/AuthMethods';
import {IApiParameterDefinition} from '../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IApiData} from '../Interfaces/IApiData';
import {IAuthInfo} from '../Interfaces/IAuthInfo';
import {SignSpace} from '../Enums/SignSpace';
import {ApiParameterMethods} from '../Enums/ApiParameterMethods';
import {UnknownOAuthSignatureSpace} from '../../Exception/Exceptions';

export default class OAuth1 extends OAuth {
    private static _now(): string {
        return Math.round(+new Date() / 1000).toString();
    }

    private static _signature(authInfo: IAuthInfo, apiData: IApiData, payload: IApiPayload, timestamp: string): string {
        const signParameter = {
            oauth_consumer_key: authInfo.apiKey.ApiKey,
            oauth_token: authInfo.token ? authInfo.token.Token : '',
            oauth_signature_method: authInfo.signMethod,
            oauth_timestamp: timestamp,
            oauth_nonce: 'superdrysinasai2018',
            oauth_version: authInfo.oauthVersion,
        };
        return encodeURIComponent(authSign.sign(
            authInfo.signMethod,
            apiData.method,
            apiData.baseUri + apiData.path,
            {...signParameter, ...payload},
            authInfo.apiKey.ApiSecretKey,
            authInfo.token ? authInfo.token.TokenSecret : '',
        ));
    }

    private static _headerstring(key: string, value: string): string {
        return key + '="' + value + '"';
    }

    constructor() {
        super();
    }

    public authorization(method: AuthMethods): void {

    }

    public requestToken(tempToken: string | object): void {

    }

    public getAuthorizationData(authInfo: IAuthInfo, apiData: IApiData, payload: IApiPayload): [IApiData, IApiPayload] {
        let template: IApiParameterDefinition = Object.assign({}, apiData.parameter);
        let value: IApiPayload = Object.assign({}, payload);

        const signature = OAuth1._signature(authInfo, apiData, payload);

        // TODO
        if(authInfo.token){
            switch (authInfo.signSpace) {
                case SignSpace.Header:
                    break;
                case SignSpace.Query:
                    break;
                default:
                    throw UnknownOAuthSignatureSpace;
            }
        }

        return [Object.assign({}, apiData, {parameter: template}), value];
    }

    public export(): object {
        return {};
    }
}
