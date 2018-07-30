import {AuthorizeMethod} from '../../Enums/AuthorizeMethod';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../Interfaces/IAuthInfo';
import {ICombinedParameterData} from '../../Interfaces/ICombinedParameterData';
import {IAPIKey, IToken} from '../../Interfaces/IKeys';

export default abstract class OAuth {
    // optional: step 0
    public requestAuthToken?(apiData: IApiData, apiKey: IAPIKey, redirect_uri: string)
        : ICombinedParameterData & {requiredPayload?: object};

    // required: step 1
    public abstract authorizeUri(
        apiData: IApiData,
        apiKey: IAPIKey,
        redirect_uri: string,
        method: AuthorizeMethod,
        optional?: {
            scope?: string[],
            authToken?: IToken,
        }): ICombinedParameterData & {requiredPayload?: object};

    // required: step 2
    public abstract requestToken(
        apiData: IApiData,
        apiKey: IAPIKey,
        code: string,
        redirect_uri: string,
        optional?: {
            scope?: string[],
            authToken?: IToken,
        }): ICombinedParameterData;

    // optional: step 3
    public refreshToken?(apiData: IApiData, apiKey: IAPIKey, code: IToken, redirect_uri: string)
        : ICombinedParameterData;

    public abstract getAuthorizationData(authInfo: IAuthInfo, token: IToken,  apiData: IApiData, payload: IApiPayload)
        : ICombinedParameterData;
}
