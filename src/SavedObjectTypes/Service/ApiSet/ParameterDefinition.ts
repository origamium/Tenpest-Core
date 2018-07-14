import {PairOfObject} from '../../../helper/PairOfObject';
import {ApiParameterMethods} from '../../../Enums/ApiParameterMethods';

export type ParameterDefinitionObject = {
    required: boolean,
    type: ApiParameterMethods,
};

export type ParameterDefinition = PairOfObject<ParameterDefinitionObject>;
