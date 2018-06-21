import { schemaTypes } from '../Enums/schemaTypes';

export interface ITransform {
    [key: string]: string | ITransform | Array<ITransform>;
}

export interface ISchema {
    target?: string;
    schema: ISchemaElement;
}

export interface IRecursiveSchema{
    [key: string]: ISchemaElement;
}

export interface ISchemaElement {
    name: string;
    type: schemaTypes;
    transform: ITransform;
    idAttribute?: string;
    definition?: IRecursiveSchema;
}
