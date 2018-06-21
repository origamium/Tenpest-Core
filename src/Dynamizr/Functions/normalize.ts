import { schema, normalize } from 'normalizr';
import { schemaTypes } from '../Enums/schemaTypes';
import { ISchemaElement, ISchema, IRecursiveSchema } from '../Interfaces/ISchema';
import { UnsupportedSchemaType } from '../Exceptions';

const entityCreator = (schemaData: ISchemaElement) => (
    new schema.Entity(
        schemaData.name,
        schemaData.definition ?
            normalizer(schemaData.definition) : {},
        schemaData.idAttribute ?
            {idAttribute: schemaData.idAttribute} : {},
    )
);

const schemaCreator = (schemaData: ISchemaElement, key?: string) => {
    switch(schemaData.type) {
        case schemaTypes.Entity:
            return entityCreator(schemaData);
        case schemaTypes.Array:
            return new schema.Array(entityCreator(schemaData));
        default:
            throw UnsupportedSchemaType;
    }
};

const normalizer = (schemaData: IRecursiveSchema) => (
    Object.keys(schemaData).map(key => ({
        name: key,
        schema: schemaCreator(schemaData[key], key),
    })).reduce((accu, curr) => ({
        ...accu,
        [curr.name]: curr.schema,
    }), {})
);

export default (schemaData: ISchema, data: any): object => (
    normalize(
        schemaData.target ? data[schemaData.target] : data,
        schemaCreator(schemaData.schema))
);
