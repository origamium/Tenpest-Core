import {AuthMethods} from '../../../Enums/AuthMethods';
import {IApiData} from '../../../Interfaces/IApiData';
import {IApiPayload} from '../../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../../Interfaces/IAuthInfo';
import {IAuthorizedApiData} from '../../../Interfaces/IAuthorizedApiData';
import {IAPIKey, IToken} from '../../../Interfaces/IKeys';

export default abstract class OAuth {
    // optional: step 0
    public requestAuthToken?(apiData: IApiData, apiKey: IAPIKey, redirect_uri: string)
        : IAuthorizedApiData & {requiredPayload?: object};

    // required: step 1
    public abstract authorizeUri(
        apiData: IApiData,
        apiKey: IAPIKey,
        redirect_uri: string,
        method: AuthMethods,
        optional?: {
            scope?: string[],
            authToken?: IToken,
        }): IAuthorizedApiData & {requiredPayload?: object};

    // required: step 2
    public abstract requestToken(
        apiData: IApiData,
        apiKey: IAPIKey,
        code: string,
        redirect_uri: string,
        optional?: {
            scope?: string[],
            authToken?: IToken,
        }): IAuthorizedApiData;

    // optional: step 3
    public refreshToken?(apiData: IApiData, apiKey: IAPIKey, code: IToken, redirect_uri: string)
        : IAuthorizedApiData;

    public abstract getAuthorizationData(authInfo: IAuthInfo, apiData: IApiData, payload: IApiPayload)
        : IAuthorizedApiData;
}
