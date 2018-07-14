import {ApiParameterMethods} from '../../../Enums/ApiParameterMethods';
import {PairOfObject} from '../../../helper/PairOfObject';

export type ParameterDefinitionObject = {
    required: boolean,
    type: ApiParameterMethods,
};

export type ParameterDefinition = PairOfObject<ParameterDefinitionObject>;
