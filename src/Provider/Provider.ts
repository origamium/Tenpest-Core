import Authorization from '../API/Authorization/Authorization';
import { IAPIKey } from '../Interfaces/IKeys';
import { ProviderObject } from '../StoredObjectTypes/Provider/ProviderObject';
import { ServiceObject } from '../StoredObjectTypes/Service/ServiceObject';

export default class Provider {
    private readonly _name: string;
    private readonly _baseUrl: string; // https://slack.com/api/, https://api.twitter.com/, https://mstdn.jp/api/v1/ ...
    private readonly _domain: string; // mstdn.jp, pawoo.net...
    private readonly _apiKey: IAPIKey;
    private readonly _auth: Authorization;

    constructor(serviceSource: ServiceObject, providerSource: ProviderObject) {
        this._name = providerSource.providerName;
        this._baseUrl = providerSource.baseUrl;
        this._domain = providerSource.domain;
        this._apiKey = {
            ApiKey: providerSource.apiKey,
            ApiSecretKey: providerSource.apiSecret,
        };

        this._auth = new Authorization(serviceSource.apiSet.authorization, this._apiKey);
    }
}
