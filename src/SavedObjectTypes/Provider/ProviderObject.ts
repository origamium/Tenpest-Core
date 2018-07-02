import {PairOfObject} from '../../helper/PairOfObject';

export type ProviderObject = {
    serviceName: string,
    domain: string, // domain must be equal key
    apiKey: string,
    apiSecret: string,
};

// key is domain. e.g. 'twitter.com', 'slack.com'
export type Providers = PairOfObject<ProviderObject>;
