import { schema, normalize } from 'normalizr';
import { schemaTypes } from '../Enums/schemaTypes';
import { ISchemaElement, ISchema, IRecursiveSchema } from '../Interfaces/ISchema';
import { UnsupportedSchemaType } from '../Exceptions';

const entityCreator = (schemaData: ISchemaElement) => (
    new schema.Entity(
        schemaData.name,
        schemaData.definition ?
            reCreateSchema(schemaData.definition) : {},
        schemaData.idAttribute ?
            {idAttribute: schemaData.idAttribute} : {},
    )
);

const reCreateSchema = (schemaData: IRecursiveSchema) => (
    Object.keys(schemaData).map(key => ({
        name: key,
        schema: schemaCreator(schemaData[key]),
    })).reduce((accu, curr) => ({
        ...accu,
        [curr.name]: curr.schema,
    }), {})
);

const schemaCreator = (schemaData: ISchemaElement): any => {
    switch(schemaData.type) {
        case schemaTypes.Entity:
            return entityCreator(schemaData);
        case schemaTypes.Array:
            return new schema.Array(entityCreator(schemaData));
        default:
            throw UnsupportedSchemaType;
    }
};

export default schemaCreator;
