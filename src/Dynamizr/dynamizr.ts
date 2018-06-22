import {normalize, schema} from 'normalizr';
import transformer from './Functions/transformer';
import { IDynaSchema } from './Interfaces/IDynaSchema';

export default (schemaData: IDynaSchema, data: any) => (
    transformer(
        schemaData,
        normalize(
            schemaData.target ? data[schemaData.target] : data,
            schemaData.normalizrSchema),
    )
);
