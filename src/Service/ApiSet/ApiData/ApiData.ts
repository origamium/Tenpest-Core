import {ApiParameter} from "./ApiParameter";
import {HttpMethods} from "./HttpMethods";

export interface ApiData {
    path: string;
    parameter: ApiParameter;
    method: HttpMethods;
    return: string;
}
