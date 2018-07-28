import {HttpMethods} from '../Enums/HttpMethods';
import {IApiParameterDefinition} from './IApiParameterDefinition';
import {IReturnedDatumInfo} from './IReturnedDatumInfo';

export interface IApiData {
    baseUri: string;
    path: string;
    parameter: IApiParameterDefinition;
    method: HttpMethods;
    return: IReturnedDatumInfo | null;
}
