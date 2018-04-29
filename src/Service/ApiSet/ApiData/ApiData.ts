import {ApiParameter} from "./ApiParameter";

export interface ApiData {
    path: string;
    parameter: ApiParameter;
    method: "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "CONNECT" |"PATCH";
    return: string;
}
