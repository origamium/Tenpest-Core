import {PairOfObject} from '../../../helper/PairOfObject';
import {HttpMethods} from '../../../Enums/HttpMethods';
import {ParameterDefinition} from './ParameterDefinition';

export type RestApiUnitObject = {
    path: string,
    httpMethod: HttpMethods,
    parameterDefinition: ParameterDefinition,
    returnedDataKey: string, // related SchemaObject.
    errorKey?: string, // use SchemaObject
};

export type RestApiUnits = PairOfObject<RestApiUnitObject>;
