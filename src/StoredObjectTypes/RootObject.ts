import {Accounts} from './Account/AccountObject';
import {Providers} from './Provider/ProviderObject';
import {Services} from './Service/ServiceObject';

export type RootObject = {
    accounts: Accounts,
    services: Services,
    providers: Providers,
};
