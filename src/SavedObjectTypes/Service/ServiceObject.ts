import {PairOfObject} from '../PairOfObject';

export type ServiceObject = {
    serviceName: string, // is equal key
    apiSet: object,
    dataSet: object,
};

// key is Service Name. e.g. 'twitter', 'slack', 'mastodon'.
export type Services = PairOfObject<ServiceObject>;
