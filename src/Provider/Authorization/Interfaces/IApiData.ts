import {HttpMethods} from '../../../Enums/HttpMethods';
import {IReturnedDatumInfo} from '../../../Unit/IReturnedDatumInfo';
import {IApiParameterDefinition} from './IApiParameterDefinition';

export interface IApiData {
    baseUri: string;
    path: string;
    parameter: IApiParameterDefinition;
    method: HttpMethods;
    return: IReturnedDatumInfo | null;
}
