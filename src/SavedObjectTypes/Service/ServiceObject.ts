import {PairOfObject} from '../../helper/PairOfObject';
import {DataSets} from './DataSet/DataSetObject';
import {ApiSetObject} from './ApiSet/ApiSetObject';

export type ServiceObject = {
    serviceName: string, // is equal key
    apiSet: ApiSetObject,
    dataSet: DataSets,
    uiSet: object, // TODO
};

// key is Service Name. e.g. 'twitter', 'slack', 'mastodon'.
export type Services = PairOfObject<ServiceObject>;
