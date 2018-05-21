import {ApiParameterMethods} from "../Enums/ApiParameterMethods";

export interface IApiParameterDefinition {
    [key: string]: {
        required: boolean,
        type: ApiParameterMethods,
    };
}
