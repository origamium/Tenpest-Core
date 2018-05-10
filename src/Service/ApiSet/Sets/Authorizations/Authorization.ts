import {IApiData} from '../../../../Request/Types/Interfaces/IApiData';

export interface IPinBasedOAuth {
    request_token: IApiData;
    authorize: IApiData;
    access_token: IApiData;
}

export interface ICallbackBasedOauth {
    authorize: IApiData;
    request_access: IApiData;
}
