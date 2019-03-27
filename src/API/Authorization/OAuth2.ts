import {ApiParameterMethods} from '../../Enums/ApiParameterMethods';
import {AuthorizeMethod} from '../../Enums/AuthorizeMethod';
import {SignSpace} from '../../Enums/SignSpace';
import {UnknownOAuthSignatureSpace} from '../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiParameterDefinition} from '../../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../Interfaces/IAuthInfo';
import {IAPIKey, IToken} from '../../Interfaces/IKeys';
import OAuth, {optionObject} from './OAuth';
import {ICombinedParameterData} from '../../Interfaces/ICombinedParameterData';

export default class OAuth2 implements OAuth {
    private scopeToString(scope: string[]) {
        return 'scope=' + scope.reduce((accm, curr) => (accm + '+' + curr), '');
    }

    public authorizeUri(apiData: IApiData, apiKey: IAPIKey, method: AuthorizeMethod, option?: optionObject)
        : {uri: string, method: AuthorizeMethod} {
        const uri = apiData.baseUri + apiData.path;
        const parameters = [];
        if (option && option.scope) {
            parameters.push(this.scopeToString(option.scope));
        }

        return {
            uri: uri + '?' + encodeURIComponent(parameters.reduce((accm, curr) => (accm + '&' + curr), '')),
            method,
        };
    }

    public requestToken(apiData: IApiData, authInfo: IAuthInfo, verifier: string, option?: optionObject)
        : ICombinedParameterData {
        const template: IApiParameterDefinition = apiData.parameter;
        if (!authInfo.apiKey.ApiSecretKey) { throw new Error('api secret key is undefined') }

        const value: IApiPayload = {
            client_id: authInfo.apiKey.ApiKey,
            client_secret: authInfo.apiKey.ApiSecretKey,
            ...(authInfo.callback ? {redirect_uri: authInfo.callback} : {}),
            code: verifier
        };

        return {
            definition: template,
            payload: value,
        };
    }

    // TODO: refreshToken

    public getAuthorizationData(apiData: IApiData, authInfo: IAuthInfo, token: IToken, payload: IApiPayload)
        : ICombinedParameterData {
        const template: IApiParameterDefinition = {};
        const value: IApiPayload = {};
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
            definition: template,
            payload: value,
        };
    }
}
