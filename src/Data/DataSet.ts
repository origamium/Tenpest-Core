import {DataSets} from '../SavedObjectTypes/Service/DataSet/DataSetObject';
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

    get data(): PairOfObject<IReturnedDatumInfo> {
        return this._data;
    }

    public normalize(key: string, data: any): any { // TODO:  return value is not any....
        if (this._data[key]) {
            throw new Error();
        }
        return dynamize(this._data[key], data);
    }
}
