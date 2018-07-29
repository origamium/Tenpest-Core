import {PairOfObject} from '../../helper/PairOfObject';
import {ApiSetObject} from './ApiSet/ApiSetObject';
import {DataSets} from './DataSet/DataSetObject';
import {AuthInfoObject} from './AuthInfoObject';

export type ServiceObject = {
    serviceName: string, // is equal key
    apiSet: ApiSetObject,
    dataSet: DataSets,
    authInfo: AuthInfoObject,
};

// key is Service Name. e.g. 'twitter', 'slack', 'mastodon'.
export type Services = PairOfObject<ServiceObject>;
