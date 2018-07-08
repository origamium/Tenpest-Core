import Exportable from '../helper/Exportable';
import {ServiceObject} from '../SavedObjectTypes/Service/ServiceObject';
import {APISet} from '../API/APISet';

export default class Service {
    private readonly _serviceName: string;
    private readonly _apiSet: APISet;
    private readonly _dataSet: object; // TODO
    private readonly _uiSet: object; // TODO

    constructor(source: ServiceObject) {
        this._serviceName = source.serviceName;
        this._apiSet = new APISet(source.apiSet);
        this._dataSet = undefined;
        this._uiSet = undefined;
    }
}
