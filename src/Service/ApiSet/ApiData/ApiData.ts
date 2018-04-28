import {ApiParameter} from "./ApiParameter";

export interface ApiData {
    path: string;
    payload: ApiParameter;
    return: string;
}
