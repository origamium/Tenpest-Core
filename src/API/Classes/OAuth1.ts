import * as authSign from 'oauth-sign';
import OAuth from "./OAuth";
import {HttpMethods} from "../Enums/HttpMethods";
import {AuthMethods} from "../Enums/AuthMethods";
import {IApiParameterDefinition} from '../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IApiData} from "../Interfaces/IApiData";
import {IAuthInfo} from "../Interfaces/IAuthInfo";

export default class OAuth1 extends OAuth {
    private static _now(): number {
        return Math.round(+new Date() / 1000);
    }

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
        return [];
    }

    export(): object {
        return {};
    }
}
