import {PairOfObject} from '../../helper/PairOfObject';

export type ProviderObject = {
    providerName: string,
    domain: string, // domain must be equal key
    baseUrl: string,
    apiKey: string,
    apiSecret: string,
};

// key is domain. e.g. 'twitter.com', 'slack.com'
export type Providers = PairOfObject<ProviderObject>;