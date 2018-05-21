import {AuthMethods} from '../Enums/AuthMethods';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IApiData} from "../Interfaces/IApiData";
import {IAuthInfo} from "../Interfaces/IAuthInfo";

export default abstract class OAuth {
    public abstract authorization(method: AuthMethods): void;
    public abstract requestToken(tempToken: string | object): void;
    public abstract getAuthorizationData(authInfo: IAuthInfo, apiData: IApiData, payload: IApiPayload)
        : [IApiPayload, IApiData] ;

    public abstract export(): object;
}
