import {ApiData} from "../ApiData/ApiData";

export interface pinBasedOAuth{
    request_token: ApiData;
    authorize: ApiData;
    access_token: ApiData;
}

export interface callbackBasedOauth{
    authorize: ApiData;
    request_access: ApiData;
}
