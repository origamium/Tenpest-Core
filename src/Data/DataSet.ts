import {DataSets} from '../StoredObjectTypes/Service/DataSet/DataSetObject';
import dynamize, {dynaSchemaCreator} from './Dynamizr';
import {PairOfObject} from '../helper/PairOfObject';
import {IReturnedDatumInfo} from '../Unit/IReturnedDatumInfo';
import {UnexpectedDataKey} from '../Exception/Exceptions';

export default class DataSet {
    private readonly _receivedDataInfo: PairOfObject<IReturnedDatumInfo>;

    constructor(source: DataSets) {
        this._receivedDataInfo = {};
        Object.keys(source).forEach((key) => {
            this._receivedDataInfo[key] = dynaSchemaCreator(source[key]);
        });
    }

    public normalize(key: string, data: any): any {
        if (this._receivedDataInfo[key]) {
            throw UnexpectedDataKey;
        }
        return dynamize(this._receivedDataInfo[key], data);
    }
}
