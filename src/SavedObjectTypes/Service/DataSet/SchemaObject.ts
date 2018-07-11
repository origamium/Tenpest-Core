import {schemaTypes} from '../../../Dynamizr/Enums/schemaTypes';
import {PairOfObject} from '../../../helper/PairOfObject';

export type SchemaObjectElement = {
    name: string, // equal key
    type: schemaTypes,
    idAttribute: string,
    transform: object,
    definition?: PairOfObject<SchemaObject>,
};

export type SchemaObject = PairOfObject<SchemaObjectElement>;
