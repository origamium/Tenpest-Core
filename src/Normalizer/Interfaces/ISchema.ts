import { schemaTypes } from '../Enums/schemaTypes';

export interface IDefinedSchema {
    target?: string;
    schema: ISchema;
}

export interface ISchema {
    name: string;
    type: schemaTypes;
    idAttribute?: string;
    definition?: IRecursiveSchema;
}

export interface IRecursiveSchema {
    [key: string]: ISchema;
}
