import {AuthorizeMethod} from '../../Enums/AuthorizeMethod';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../Interfaces/IAuthInfo';
import {ICombinedParameterData} from '../../Interfaces/ICombinedParameterData';
import {IAPIKey, IToken} from '../../Interfaces/IKeys';

export type optionObject = {
    scope?: string[],
    authToken: IToken,
};

export default interface IOAuth {
    // optional: step 0
    requestAuthToken?(apiData: IApiData, apiKey: IAPIKey, redirect_uri: string)
        : ICombinedParameterData & {requiredPayload?: object};

    // required: step 1
     authorizeUri(apiData: IApiData, apiKey: IAPIKey, redirect_uri: string, method: AuthorizeMethod, option?: optionObject)
         : ICombinedParameterData & {requiredPayload?: object};

    // required: step 2
    requestToken(apiData: IApiData, apiKey: IAPIKey, code: string, redirect_uri: string, option?: optionObject)
        : ICombinedParameterData;

    // optional: step 3
    refreshToken?(apiData: IApiData, apiKey: IAPIKey, code: IToken, redirect_uri: string)
        : ICombinedParameterData;

    // required: autohorized data
    getAuthorizationData(authInfo: IAuthInfo, token: IToken,  apiData: IApiData, payload: IApiPayload)
        : ICombinedParameterData;
}
