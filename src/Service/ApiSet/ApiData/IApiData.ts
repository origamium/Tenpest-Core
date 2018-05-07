import {IApiParameter} from './IApiParameter';
import {HttpMethods} from './HttpMethods';
import {IReturnedDatumInfo} from './returnedDatum';

export interface IApiData {
    path: string;
    parameter: IApiParameter;
    method: HttpMethods;
    return: IReturnedDatumInfo | null;
}
