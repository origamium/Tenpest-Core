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
    requestAuthToken?(apiData: IApiData, authInfo: IAuthInfo)
        : ICombinedParameterData & {requiredPayload?: object};

    // required: step 1. Generate Authorization url
     authorizeUri(apiData: IApiData, authInfo: IAuthInfo, method: AuthorizeMethod, option?: optionObject)
         : {uri: string, method: AuthorizeMethod};

    // required: step 2
    // "verifier" is also known as "PIN"
    requestToken(apiData: IApiData, authInfo: IAuthInfo, verifier: string, option?: optionObject)
        : ICombinedParameterData;

    // TODO: code だったり token だったりしているのなんとかしよう
    // optional: step 3
    refreshToken?(apiData: IApiData, authInfo: IAuthInfo, code: IToken)
        : ICombinedParameterData;

    // required: autohorized data
    getAuthorizationData(apiData: IApiData, authInfo: IAuthInfo, token: IToken, payload: IApiPayload)
        : ICombinedParameterData;
}
