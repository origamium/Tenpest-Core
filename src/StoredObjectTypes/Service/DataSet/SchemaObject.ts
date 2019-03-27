import {schemaTypes} from '../../../Enums/schemaTypes';
import {PairOfObject} from '../../../helper/PairOfObject';
import {ITransform} from '../../../Data/Dynamizr/Interfaces/ITransform';

export type SchemaObjectElement = {
    name: string, // equal key
    type: schemaTypes,
    idAttribute: string,
    transform: ITransform,
    definition?: PairOfObject<SchemaObject>,
};

export type SchemaObject = SchemaObjectElement;
