import {IApiParameterDefinition} from './IApiParameterDefinition';
import {IApiPayload} from './IApiPayload';

export interface ICombinedParameterData {
    definition: IApiParameterDefinition;
    payload: IApiPayload;
}
