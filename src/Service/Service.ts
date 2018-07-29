import {APISet} from '../API/APISet';
import DataSet from '../Data/DataSet';
import {AuthorizationUnitObject} from '../StoredObjectTypes/Service/ApiSet/AuthorizationUnitObject';
import {ServiceObject} from '../StoredObjectTypes/Service/ServiceObject';

export default class Service {
    private readonly _serviceName: string;
    private readonly _apiSet: APISet;
    private readonly _dataSet: DataSet; // TODO

    constructor(source: ServiceObject) {
        this._serviceName = source.serviceName;
        this._apiSet = new APISet(source.apiSet);
        this._dataSet = new DataSet(source.dataSet);
    }
}
