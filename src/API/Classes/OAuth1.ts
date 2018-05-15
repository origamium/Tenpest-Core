import * as authSign from 'oauth-sign';
import OAuth from "./OAuth";
import {HttpMethods} from "../Enums/HttpMethods";
import {AuthMethods} from "../Enums/AuthMethods";
import {IOAuth1Parameters} from "../Interfaces/IOAuth1Parameters";

export default class OAuth1 extends OAuth {
    constructor() {
        super();
    }

    static _now(): number {
        return Math.round(+new Date()/1000);
    }

    static _signature(
        httpMethod: HttpMethods,
        baseUrl: string,
        parameter: IOAuth1Parameters,
        queryParameter: object,
        consumerSecretKey: string,
        tokenSecret: string = '',) : string {
        return encodeURIComponent(authSign.sign(
            parameter.oauth_signature_method,
            httpMethod,
            baseUrl,
            {...parameter, ...queryParameter},
            consumerSecretKey,
            tokenSecret,
        ));
    }

    pinAuthorization(method: AuthMethods): void {

    }

    requestToken(tempToken: string | object): void {

    }

    getAuthorizationData(): object {
        return {};
    }

    export(): object {
        return {};
    }
}
