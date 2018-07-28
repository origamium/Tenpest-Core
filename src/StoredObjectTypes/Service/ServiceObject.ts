import {PairOfObject} from '../../helper/PairOfObject';
import {ApiSetObject} from './ApiSet/ApiSetObject';
import {DataSets} from './DataSet/DataSetObject';
import {OAuthVersion} from '../../Enums/OAuthVersion';
import {SignMethod} from '../../Enums/SignMethod';
import {SignSpace} from '../../Enums/SignSpace';
import {AuthMethods} from '../../Enums/AuthMethods';

export type ServiceObject = {
    serviceName: string, // is equal key
    apiSet: ApiSetObject,
    dataSet: DataSets,

    authMethod: OAuthVersion,
    signMethod: SignMethod,
    signSpace: SignSpace,
    certMethod: AuthMethods,
};

// key is Service Name. e.g. 'twitter', 'slack', 'mastodon'.
export type Services = PairOfObject<ServiceObject>;
