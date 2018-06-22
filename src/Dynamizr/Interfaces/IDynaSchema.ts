import { Schema } from 'normalizr';

export interface IDynaSchema {
    normalizrSchema: Schema;
    transformerSchema: object;
}
