import {normalize, schema} from 'normalizr';
import transformer from './Functions/transformer';
import {IReturnedDatumInfo} from '../Unit/IReturnedDatumInfo';

export default (schemaData: IReturnedDatumInfo, data: any) => (
    transformer(
        schemaData,
        normalize(
            schemaData.targetParameterName ? data[schemaData.targetParameterName] : data,
            schemaData.normalizrSchema),
    )
);
