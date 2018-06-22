import { schema } from 'normalizr';
import { schemaTypes } from '../Enums/schemaTypes';
import { ISchemaElement, ISchema, IRecursiveSchema } from '../Interfaces/ISchema';
import { UnsupportedSchemaType } from '../Exceptions';
import {IDynaSchema} from '../Interfaces/IDynaSchema';

// --- normalizr schema creator ----
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
// --- end of normalizr schema creator ---

// --- transform ---
const pickupTransformAttr = (schemaData: ISchemaElement, root = {}) => {
    if (schemaData.definition) {
        Object.keys(schemaData.definition)
            .forEach(key => pickupTransformAttr(schemaData.definition[key], root));
    }
    return Object.assign(root, { [schemaData.name]: schemaData.transform });
};
