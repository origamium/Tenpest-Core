import {UnknownOAuthSignatureSpace} from '../../Exception/Exceptions';
import {ApiParameterMethods} from '../Enums/ApiParameterMethods';
import {AuthMethods} from '../Enums/AuthMethods';
import {SignSpace} from '../Enums/SignSpace';
import {IApiData} from '../Interfaces/IApiData';
import {IApiParameterDefinition} from '../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IAuthInfo} from '../Interfaces/IAuthInfo';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import OAuth from './OAuth';

export default class OAuth2 extends OAuth {
    constructor() {
        super();

    }

    public authorization(method: AuthMethods): void {

    }

    public requestToken(tempToken: string | object): void {

    }

    public getAuthorizationData(authInfo: IAuthInfo, apiData: IApiData, payload: IApiPayload): [IApiData, IApiPayload] {
        const template: IApiParameterDefinition = Object.assign({}, apiData.parameter);
        const value: IApiPayload = Object.assign({}, payload);
        let key: string = '';
        if (authInfo.token) {
            switch (authInfo.signSpace) {
                case SignSpace.Header:
                    key = 'Authorization';
                    template[key] = {required: true, type: ApiParameterMethods.Header};
                    value[key] = 'Bearer ' + authInfo.token.Token;
                    break;
                case SignSpace.Query:
                    key = 'access_token';
                    template[key] = {required: true, type: ApiParameterMethods.Query};
                    value[key] = authInfo.token.Token;
                    break;
                default:
                    throw UnknownOAuthSignatureSpace;
            }
        }

        return [Object.assign({}, apiData, {parameter: template}), value];
    }

    public export(): object {
        return {};
    }
}
