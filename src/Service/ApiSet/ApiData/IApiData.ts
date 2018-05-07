import {HttpMethods} from './HttpMethods';
import {IApiParameter} from './IApiParameter';
import {IReturnedDatumInfo} from './returnedDatum';

export interface IApiData {
    path: string;
    parameter: IApiParameter;
    method: HttpMethods;
    return: IReturnedDatumInfo | null;
}
