import {normalize} from 'normalizr';
import {IReturnedDatumInfo} from '../../Interfaces/IReturnedDatumInfo';
import transformer from './Functions/transformer';

export default (schemaData: IReturnedDatumInfo, data: any) => {
    return transformer(
        schemaData,
        normalize(
            schemaData.targetParameterName ? data[schemaData.targetParameterName] : data,
            schemaData.normalizrSchema),
    );
};
