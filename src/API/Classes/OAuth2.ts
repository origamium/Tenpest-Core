import OAuth from "./OAuth";
import {AuthMethods} from "../Enums/AuthMethods";
import {IApiParameterDefinition} from '../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import {SignSpace} from '../Enums/SignSpace';
import {IApiData} from "../Interfaces/IApiData";
import {IAuthInfo} from "../Interfaces/IAuthInfo";

export default class OAuth2 extends OAuth {
    constructor() {
        super();

    }

    public authorization(method: AuthMethods): void {

    }

    public requestToken(tempToken: string | object): void {

    }

    public getAuthorizationData(authInfo: IAuthInfo, apiData: IApiData, payload: IApiPayload): [IApiPayload, IApiData] {
        let value: IApiPayload;
        if(authInfo.token) {
            switch (authInfo.signSpace){
                case SignSpace.Header:
                    value = { Authorization: 'Bearer ' + authInfo.token.Token };
                    break;
                case SignSpace.Query:
                    value = { access_token : authInfo.token.Token };
                    break;
                default:
                    throw new Error('wooo');
            }
        }

        return [];
    }

    public export(): object {
        return {};
    }
}
