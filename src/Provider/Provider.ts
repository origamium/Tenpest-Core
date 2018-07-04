import { IAPIKey } from '../API/Authorization/Interfaces/IKeys';
import {ProviderObject} from '../SavedObjectTypes/Provider/ProviderObject';

export default class Provider {
    private readonly _name: string;
    private readonly _baseUrl: string; // https://slack.com/api/, https://api.twitter.com/, https://mstdn.jp/api/v1/ ...
    private readonly _domain: string; // mstdn.jp, pawoo.net...
    private readonly _apiKey: IAPIKey;

    constructor(source: ProviderObject) {
        this._name = source.providerName;
        this._baseUrl = source.baseUrl;
        this._domain = source.domain;
        this._apiKey = {
            ApiKey: source.apiKey,
            ApiSecretKey: source.apiSecret,
        };
    }
}
