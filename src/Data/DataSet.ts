import {UnexpectedDataKey} from '../Exception/Exceptions';
import {PairOfObject} from '../helper/PairOfObject';
import {IReturnedDatumInfo} from '../Interfaces/IReturnedDatumInfo';
import {DataSets} from '../StoredObjectTypes/Service/DataSet/DataSetObject';
import dynamize, {dynaSchemaCreator} from './Dynamizr';

export default class DataSet {
    private readonly _receivedDataInfo: PairOfObject<IReturnedDatumInfo>;

    constructor(source: DataSets) {
        this._receivedDataInfo = {};
        for (const key in source) {
            if (key) {
                this._receivedDataInfo[key] = dynaSchemaCreator(source[key]);
            }
        }
    }

    public normalize(key: string, data: any): any {
        if (!this._receivedDataInfo[key]) {
            throw UnexpectedDataKey;
        }
        return dynamize(this._receivedDataInfo[key], data);
    }
}
