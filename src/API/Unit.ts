import {IReturnedDatumInfo} from '../Service/ApiSet/ApiData/IReturnedDatumInfo';
import {IApiParameterDefinition} from '../Authorization/Interfaces/IApiParameterDefinition';

export class Unit {
    private readonly _path: string;
    private readonly _returnDatum: IReturnedDatumInfo;
    private readonly _parameter: IApiParameterDefinition;

    get path(): string {
        return this._path;
    }

    get returnDatum(): IReturnedDatumInfo {
        return this._returnDatum;
    }

    get parameter(): IApiParameterDefinition {
        return this._parameter;
    }

    constructor(path: string, returnDatum: IReturnedDatumInfo, parameter: IApiParameterDefinition) {
        this._path = path;
        this._returnDatum = returnDatum;
        this._parameter = parameter;
    }
}
