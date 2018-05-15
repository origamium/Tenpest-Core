import generateSignature from '../Functions/signature/generateSignature';
import OAuth from "./OAuth";
import {HttpMethods} from "../Enums/HttpMethods";
import {AuthMethods} from "../Enums/AuthMethods";

export default class OAuth1 extends OAuth {
    constructor() {
        super();

    }

    static _now(): number {
        return Math.round(+new Date()/1000);
    }

    static _signature(httpMethod: HttpMethods): string {

    }

    pinAuthorization(method: AuthMethods): void {

    }

    requestToken(tempToken: string | object): void {

    }

    getAuthorizationData(): object {

    }

    export(): object {

    }
}
