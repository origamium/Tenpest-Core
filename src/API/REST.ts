import {PairOfObject} from '../helper/PairOfObject';
import {RestApiUnits} from '../SavedObjectTypes/Service/ApiSet/RestApiUnitObject';
import RESTElement from './RESTElement';

export default class REST {
    private readonly _apis: PairOfObject<RESTElement>;

    constructor(source: RestApiUnits) {
        this._apis = {};
        Object.keys(source).forEach((key) => {
            this._apis[key] = new RESTElement(source[key]);
        });
    }
}
