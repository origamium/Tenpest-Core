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
    public authorizeUri(apiData: IApiData, apiKey: IAPIKey, redirect_uri: string, method: AuthorizeMethod, option?: optionObject)
        : {uri: string, method: AuthorizeMethod} {
        const uri = apiData.baseUri + apiData.path;
        const parameters = [];
        if (option) {
            if (option.scope) {
                parameters.push('scope=' + option.scope.reduce((accm, curr) => (accm + '+' + curr), ''));
            }
        }

        return {
            uri: uri + '?' + encodeURIComponent(parameters.reduce((accm, curr) => (accm + '&' + curr), '')),
            method,
        };
    }

    public requestToken(apiData: IApiData, apiKey: IAPIKey, code: string, redirect_uri: string, verifier: string, option?: optionObject)
        : ICombinedParameterData {
        const template: IApiParameterDefinition = {};
        const value: IApiPayload = {};

        return {
            definition: template,
            payload: value,
        };
    }

    // TODO: refreshToken

    public getAuthorizationData(authInfo: IAuthInfo, token: IToken, apiData: IApiData, payload: IApiPayload)
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
