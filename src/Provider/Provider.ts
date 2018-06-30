import { IAPIKey } from '../Authorization/Interfaces/IKeys';

export default class Provider {
    private _baseUrl: string; // https://slack.com/api/, https://api.twitter.com/, https://mstdn.jp/api/v1/ ...
    private readonly _domain: string; // mstdn.jp, pawoo.net...
    private _apiKey: IAPIKey;

    constructor(baseUrl: string, domain: string, apikey: IAPIKey) {
        this._baseUrl = baseUrl;
        this._domain = domain;
        this._apiKey = apikey;
    }
}
