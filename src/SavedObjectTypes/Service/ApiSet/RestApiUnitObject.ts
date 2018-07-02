import {PairOfObject} from '../../PairOfObject';
import {HttpMethods} from '../../../Authorization/Enums/HttpMethods';

export type RestApiUnitObject = {
    path: string,
    httpMethod: HttpMethods,
    parameterDefinition: object, // TODO
    returnedDataKey: string, // related with SchemaObject
    errorKey: string, // related with SchemaObject
};

export type RestApiUnits = PairOfObject<RestApiUnitObject>;
