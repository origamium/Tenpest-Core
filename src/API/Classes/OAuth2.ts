import OAuth from "./OAuth";
import {AuthMethods} from "../Enums/AuthMethods";
import {IApiParameter} from '../Interfaces/IApiParameter';
import {IApiValue} from '../Interfaces/IApiValue';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import {SignSpace} from '../Enums/SignSpace';

export default class OAuth2 extends OAuth {
    constructor() {
        super();

    }

    public authorization(method: AuthMethods): void {

    }

    public requestToken(tempToken: string | object): void {

    }

    public getAuthorizationData(signatureSpace: SignSpace, key: IAPIKey, token: IToken): [IApiParameter, IApiValue] {
        const Value = {
            [signatureSpace]: token.Token,
        };
        return [];
    }

    public export(): object {
        return {};
    }
}
