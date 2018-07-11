import {PairOfObject} from '../../../helper/PairOfObject';
import {ApiParameterMethods} from '../../../Provider/Authorization/Enums/ApiParameterMethods';

export type ParameterDefinitionObject = {
    required: boolean,
    type: ApiParameterMethods,
};

export type ParameterDefinition = PairOfObject<ParameterDefinitionObject>;
