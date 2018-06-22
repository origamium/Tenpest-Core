import { normalize } from 'normalizr';
import transformer from './Functions/transformer';
import { IDynaSchema } from './Interfaces/IDynaSchema';

export default (schemaData: IDynaSchema , data: any) => (
    transformer(schemaData, normalize(data, schemaData.normalizrSchema))
);
