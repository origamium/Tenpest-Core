import {HttpMethods} from '../Enums/HttpMethods';
import {IApiParameter} from './IApiParameter';
import {IReturnedDatumInfo} from '../../../Service/ApiSet/ApiData/returnedDatum';

export interface IApiData {
    path: string;
    parameter: IApiParameter;
    method: HttpMethods;
    return: IReturnedDatumInfo | null;
}
