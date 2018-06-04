import {AuthMethods} from '../Enums/AuthMethods';
import {IApiData} from '../Interfaces/IApiData';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IAuthInfo} from '../Interfaces/IAuthInfo';

export default abstract class OAuth {
    public abstract authorization(method: AuthMethods): void;
    public abstract requestToken(tempToken: string | object): void;
    public abstract getAuthorizationData(authInfo: IAuthInfo, apiData: IApiData, payload: IApiPayload)
        : [IApiData, IApiPayload] ;
}
