import {ApiData} from "../../ApiData/ApiData";

export interface IPinBasedOAuth {
    request_token: ApiData;
    authorize: ApiData;
    access_token: ApiData;
}

export interface ICallbackBasedOauth {
    authorize: ApiData;
    request_access: ApiData;
}
