import OAuth from "./OAuth";
import {AuthMethods} from "../Enums/AuthMethods";

export default class OAuth2 extends OAuth {
    constructor() {
        super();

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
