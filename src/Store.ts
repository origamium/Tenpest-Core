import Account from './Account/Account';
import {PairOfObject} from './helper/PairOfObject';
import Provider from './Provider/Provider';
import Service from './Service/Service';
import {RootObject} from './StoredObjectTypes/RootObject';

export default class Store {
    private providers: PairOfObject<Provider> = {};
    private services: PairOfObject<Service> = {};
    private accounts: PairOfObject<Account> = {};

    public requestLoadData() {
        // TODO
    }

    public _defaultLoad(loadedObject: RootObject) {

    }

    public _load(loadedObject: RootObject) {

    }
}
