import {DataSets} from '../StoredObjectTypes/Service/DataSet/DataSetObject';
import dynamize, {dynaSchemaCreator} from './Dynamizr';
import {PairOfObject} from '../helper/PairOfObject';
import {IReturnedDatumInfo} from '../Unit/IReturnedDatumInfo';

export default class DataSet {
    private readonly _data: PairOfObject<IReturnedDatumInfo>;

    constructor(source: DataSets) {
        this._data = {};
        Object.keys(source).forEach((key) => {
            this._data[key] = dynaSchemaCreator(source[key]);
        });
    }

    public normalize(key: string, data: any): any {
        if (this._data[key]) {
            throw new Error();
        }
        return dynamize(this._data[key], data);
    }
}
