import {APISet} from '../API/APISet';
import {ServiceObject} from '../SavedObjectTypes/Service/ServiceObject';

export default class Service {
    private readonly _serviceName: string;
    private readonly _apiSet: APISet;
    private readonly _dataSet: DataSet; // TODO
    private readonly _uiSet: object; // TODO

    constructor(source: ServiceObject) {
        this._serviceName = source.serviceName;
        this._apiSet = new APISet(source.apiSet);
        this._dataSet = new DataSet(source.dataSet);
        this._uiSet = undefined;
    }
}
