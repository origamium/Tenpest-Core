import Exportable from '../helper/Exportable';
import {ServiceObject} from '../SavedObjectTypes/Service/ServiceObject';
import {APISet} from '../API/APISet';

export default class Service extends Exportable {
    private readonly _serviceName: string;
    private readonly _apiSet: APISet;
    private readonly _dataSet: object; // TODO
    private readonly _uiSet: object; // TODO

    constructor(source: ServiceObject) {
        super();

    }

    public export(): ServiceObject {
        return {

        };
    }
}
