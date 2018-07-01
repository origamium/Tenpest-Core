import {schemaTypes} from '../../../Dynamizr/Enums/schemaTypes';
import {PairOfObject} from '../../PairOfObject';

export type SchemaObjectElement = {
    name: string,
    type: schemaTypes,
    idAttribute: string,
    transform: object,
    definition?: PairOfObject<SchemaObject>,
};

export type SchemaObject = PairOfObject<SchemaObjectElement>;
