import {HttpMethods} from '../Enums/HttpMethods';
import {IApiParameter} from './IApiParameter';
import {IReturnedDatumInfo} from '../../Service/ApiSet/ApiData/IReturnedDatumInfo';

export interface IApiData {
    baseUri: string;
    path: string;
    parameter: IApiParameter;
    method: HttpMethods;
    return: IReturnedDatumInfo | null;
}
