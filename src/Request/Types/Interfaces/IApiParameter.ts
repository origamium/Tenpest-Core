import {ApiParameterType} from '../Enums/ApiParameterType';

export interface IApiParameter {
    [key: string]: {
        required: boolean,
        type: ApiParameterType,
    };
}
