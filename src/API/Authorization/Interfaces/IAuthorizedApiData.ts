import { IApiData } from './IApiData';
import { IApiPayload } from './IApiPayload';

export interface IAuthorizedApiData {
    apiData: IApiData;
    payload: IApiPayload;
}
