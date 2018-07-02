import {PairOfObject} from '../../helper/PairOfObject';
import {AuthorizationDataObject} from './AuthorizationDataObject';

export type AccountObject = {
    id: string,
    service: string,
    provider: string,
    authData: AuthorizationDataObject,
};

// keyは [provider.domain + id] です。idの重複を避けるためにprovider.domainがかぶせてあります。
export type Accounts = PairOfObject<AccountObject>;
