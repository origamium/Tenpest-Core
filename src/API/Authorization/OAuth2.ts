import {ApiParameterMethods} from '../../Enums/ApiParameterMethods';
import {AuthorizeMethod} from '../../Enums/AuthorizeMethod';
import {SignSpace} from '../../Enums/SignSpace';
import {UnknownOAuthSignatureSpace} from '../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiParameterDefinition} from '../../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../Interfaces/IAuthInfo';
import {IToken} from '../../Interfaces/IKeys';
import OAuth from './OAuth';
import {IAuthorizedApiData} from '../../Interfaces/IAuthorizedApiData';

export default class OAuth2 extends OAuth {
    constructor() {
        super();

    }

    public authorization(method: AuthorizeMethod): void {

    }

    public requestToken(tempToken: string | object): void {

    }

    public getAuthorizationData(authInfo: IAuthInfo, token: IToken, apiData: IApiData, payload: IApiPayload): IAuthorizedApiData {
        const template: IApiParameterDefinition = Object.assign({}, apiData.parameter);
        const value: IApiPayload = Object.assign({}, payload);
        let key: string = '';
        if (token) {
            switch (authInfo.signSpace) {
                case SignSpace.Header:
                    key = 'Authorization';
                    template[key] = {required: true, type: ApiParameterMethods.Header};
                    value[key] = 'Bearer ' + token.Token;
                    break;
                case SignSpace.Query:
                    key = 'access_token';
                    template[key] = {required: true, type: ApiParameterMethods.Query};
                    value[key] = token.Token;
                    break;
                default:
                    throw UnknownOAuthSignatureSpace;
            }
        }

        return {
            apiData: Object.assign({}, apiData, {parameter: template}),
            payload: value,
        };
    }
}
