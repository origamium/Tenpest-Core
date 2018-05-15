import * as authSign from 'oauth-sign';
import OAuth from "./OAuth";
import {HttpMethods} from "../Enums/HttpMethods";
import {AuthMethods} from "../Enums/AuthMethods";
import {IOAuth1Parameters} from "../Interfaces/IOAuth1Parameters";
import {IApiParameter} from '../Interfaces/IApiParameter';
import {IApiValue} from '../Interfaces/IApiValue';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import {SignSpace} from '../Enums/SignSpace';

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

    public getAuthorizationData(signatureSpace: SignSpace, key: IAPIKey, token: IToken, complement: object): [IApiParameter, IApiValue] {
        return [];
    }

    export(): object {
        return {};
    }
}
