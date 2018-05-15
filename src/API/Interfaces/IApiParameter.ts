import {ApiParameterMethods} from "../Enums/ApiParameterMethods";


export interface IApiParameter {
    [key: string]: {
        required: boolean,
        type: ApiParameterMethods,
    };
}
