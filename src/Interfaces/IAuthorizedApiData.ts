import {IApiParameterDefinition} from './IApiParameterDefinition';
import {IApiPayload} from './IApiPayload';

export interface IAuthorizedApiData {
    definition: IApiParameterDefinition;
    payload: IApiPayload;
}
