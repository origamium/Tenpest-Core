import { IAPIKey } from '../Authorization/Interfaces/IKeys';
import Exportable from '../helper/Exportable';

export default class Provider extends Exportable {
    private _baseUrl: string; // https://slack.com/api/, https://api.twitter.com/, https://mstdn.jp/api/v1/ ...
    private readonly _domain: string; // mstdn.jp, pawoo.net...
    private _apiKey: IAPIKey;

    constructor(baseUrl: string, domain: string, apikey: IAPIKey) {
        super();
        this._baseUrl = baseUrl;
        this._domain = domain;
        this._apiKey = apikey;
    }

    public export() {
        return {};
    }
}
