import {schemaTypes} from '../Enums/schemaTypes';
import {ITransform} from './ITransform';

export interface ISchema {
    target?: string;
    errorCheckParam?: string;
    schema: ISchemaElement;
}

export interface IRecursiveSchema {
    [key: string]: ISchemaElement;
}

export interface ISchemaElement {
    name: string;
    type: schemaTypes;
    transform: ITransform;
    idAttribute?: string;
    definition?: IRecursiveSchema;
}
