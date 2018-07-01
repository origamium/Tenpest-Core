import {PairOfObject} from '../../PairOfObject';
import {SchemaObject} from './SchemaObject';

export type DataSetObject = {
    target: string,
    schema: SchemaObject,
};

export type DataSets = PairOfObject<DataSetObject>;
