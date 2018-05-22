import OAuth from "./OAuth";
import {AuthMethods} from "../Enums/AuthMethods";
import {IApiParameterDefinition} from '../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import {SignSpace} from '../Enums/SignSpace';
import {IApiData} from "../Interfaces/IApiData";
import {IAuthInfo} from "../Interfaces/IAuthInfo";
import {ApiParameterMethods} from "../Enums/ApiParameterMethods";

export default class OAuth2 extends OAuth {
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
        if(authInfo.token) {
            switch (authInfo.signSpace){
                case SignSpace.Header:
                    key = 'Authorization';
                    template = Object.assign({}, template,
                        { [key]: {required: true, type: ApiParameterMethods.Header} });
                    value = Object.assign({}, payload,
                        { [key]: 'Bearer ' + authInfo.token.Token });
                    break;
                case SignSpace.Query:
                    key = 'access_token';
                    template = Object.assign({}, template,
                        { [key] : {required: true, type: ApiParameterMethods.Query} });
                    value = Object.assign({}, payload,
                        { [key] : authInfo.token.Token });
                    break;
                default:
                    throw new Error('wooo');
            }
        }

        return [Object.assign({}, apiData, {parameter: template}), value];
    }

    public export(): object {
        return {};
    }
}
