import {IUser} from '../../Datum/Types/User';
import {PairOfObject} from '../../helper/PairOfObject';
import {AuthorizationDataObject} from './AuthorizationDataObject';

export type AccountObject = {
    id: string,
    service: string,
    provider: string,
    authData: AuthorizationDataObject,
    latestAccountInfo?: IUser,
};

// keyは [provider.domain + id] です。idの重複を避けるためにprovider.domainがかぶせてあります。
export type Accounts = PairOfObject<AccountObject>;
