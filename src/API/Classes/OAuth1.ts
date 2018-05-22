import * as authSign from 'oauth-sign';
import OAuth from "./OAuth";
import {HttpMethods} from "../Enums/HttpMethods";
import {AuthMethods} from "../Enums/AuthMethods";
import {IApiParameterDefinition} from '../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IApiData} from "../Interfaces/IApiData";
import {IAuthInfo} from "../Interfaces/IAuthInfo";
import {SignSpace} from "../Enums/SignSpace";

export default class OAuth1 extends OAuth {
    private static _now(): number {
        return Math.round(+new Date() / 1000);
    }

    // TODO
    private static _signature(
        httpMethod: HttpMethods,
        baseUrl: string,
        parameter: IOAuth1Parameters,
        queryParameter: object,
        consumerSecretKey: string,
        tokenSecret: string = ''): string {
        return encodeURIComponent(authSign.sign(
            parameter.oauth_signature_method,
            httpMethod,
            baseUrl,
            {...parameter, ...queryParameter},
            consumerSecretKey,
            tokenSecret,
        ));
    }

    constructor() {
        super();
    }

    public authorization(method: AuthMethods): void {

    }

    public requestToken(tempToken: string | object): void {

    }

    public getAuthorizationData(authInfo: IAuthInfo, apiData: IApiData, payload: IApiPayload): [IApiData, IApiPayload] {
        let template: IApiParameterDefinition = apiData.parameter;
        let value: IApiPayload = payload;
        let key: string | null = null;

        // TODO
        if(authInfo.token){
            switch (authInfo.signSpace) {
                case SignSpace.Header:
                    break;
                case SignSpace.Query:
                    break;
                default:
                    throw new Error('wooo');
            }
        }

        return [Object.assign({}, apiData, {parameter: template}), value];
    }

    export(): object {
        return {};
    }
}
