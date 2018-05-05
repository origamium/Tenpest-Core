import {ApiParameter} from './ApiParameter';
import {HttpMethods} from './HttpMethods';
import {ReturnedDatumInfo} from './returnedDatum';

export interface ApiData {
    path: string;
    parameter: ApiParameter;
    method: HttpMethods;
    return: ReturnedDatumInfo | null;
}
