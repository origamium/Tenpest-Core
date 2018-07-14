import {HttpMethods} from '../Authorization/Enums/HttpMethods';
import {IApiParameterDefinition} from '../Authorization/Interfaces/IApiParameterDefinition';
import {dynaSchemaCreator} from '../Dynamizr';
import {IReturnedDatumInfo} from './IReturnedDatumInfo';

export class Unit {
    private readonly _path: string;
    private readonly _httpMethod: HttpMethods;
    private readonly _returnDatum: IReturnedDatumInfo;
    private readonly _parameter: IApiParameterDefinition;
    private readonly _interaction: undefined; // TODO

    get path(): string {
        return this._path;
    }

    get httpMethod(): HttpMethods {
        return this._httpMethod;
    }

    get returnDatum(): IReturnedDatumInfo {
        return this._returnDatum;
    }

    get parameter(): IApiParameterDefinition {
        return this._parameter;
    }

    constructor(path: string, httpMethod: HttpMethods, returnDatum: any, parameter: IApiParameterDefinition) {
        this._path = path;
        this._httpMethod = httpMethod;
        this._returnDatum = dynaSchemaCreator(returnDatum);
        this._parameter = parameter;
    }
}
