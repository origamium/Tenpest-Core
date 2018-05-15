import OAuth from "./OAuth";
import {AuthMethods} from "../Enums/AuthMethods";
import {IApiParameter} from '../Interfaces/IApiParameter';
import {IApiValue} from '../Interfaces/IApiValue';

export default class OAuth2 extends OAuth {
    constructor() {
        super();

    }

    public authorization(method: AuthMethods): void {

    }

    public requestToken(tempToken: string | object): void {

    }

    public getAuthorizationData(): [IApiParameter, IApiValue] {
        return {};
    }

    public export(): object {
        return {};
    }
}
