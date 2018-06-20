import { schema, normalize } from 'normalizr';
import { schemaTypes } from '../Enums/schemaTypes';
import { IDefinedSchema, ISchema, IRecursiveSchema } from '../Interfaces/ISchema';
import { UnsupportedSchemaType } from '../Exceptions';

const schemaCreator = (schemaData: ISchema, key?: string) => {
    switch(schemaData.type) {
        case schemaTypes.Entity:
            return new schema.Entity(
                key ? key : schemaData.name,
                schemaData.definition ?
                    recursiveNormalizer(schemaData.definition) : {},
                schemaData.idAttribute ?
                    {idAttribute: schemaData.idAttribute} : {},
            );
        case schemaTypes.Array:
            return new schema.Array(
                new schema.Entity(
                    key ? key : schemaData.name,
                    schemaData.definition ?
                        recursiveNormalizer(schemaData.definition) : {},
                    schemaData.idAttribute ?
                        {idAttribute: schemaData.idAttribute} : {},
                ),
            );
        default:
            throw UnsupportedSchemaType;
    }
};

const recursiveNormalizer = (schemaData: IRecursiveSchema) => (
    Object.keys(schemaData).map((key) => ({
        name: schemaData[key].name,
        schema: schemaCreator(schemaData[key], key),
    })).reduce((acc, curr) => ({
        ...acc,
        [curr.name]: curr.schema,
    }), {})
);

export default (schemaData: IDefinedSchema, data: any): object => {
    const target = schemaData.target ? data[schemaData.target] : data;
    return normalize(target, schemaCreator(schemaData.schema));
};
