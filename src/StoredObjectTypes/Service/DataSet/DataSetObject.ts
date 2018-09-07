import {PairOfObject} from '../../../helper/PairOfObject';
import {SchemaObject} from './SchemaObject';

export type DataSetObject = {
    key: string,
    targetDataKey?: string,
    extendErrorKey?: string,
    schema: SchemaObject,
};

export type DataSets = PairOfObject<DataSetObject>;
