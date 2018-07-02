import {PairOfObject} from '../PairOfObject';
import {DataSets} from './DataSet/DataSetObject';
import {ApiSets} from './ApiSet/ApiSetObject';

export type ServiceObject = {
    serviceName: string, // is equal key
    apiSet: ApiSets,
    dataSet: DataSets,
};

// key is Service Name. e.g. 'twitter', 'slack', 'mastodon'.
export type Services = PairOfObject<ServiceObject>;
