import {Accounts} from './Account/AccountObject';
import {Services} from './Service/ServiceObject';
import {Providers} from './Provider/ProviderObject';

export type RootObject = {
    accounts: Accounts,
    services: Services,
    providers: Providers,
};
