import {normalize} from 'normalizr';
import {IReturnedDatumInfo} from '../../Unit/IReturnedDatumInfo';
import transformer from './Functions/transformer';

export default (schemaData: IReturnedDatumInfo, data: any) => (
    transformer(
        schemaData,
        normalize(
            schemaData.targetParameterName ? data[schemaData.targetParameterName] : data,
            schemaData.normalizrSchema),
    )
);
