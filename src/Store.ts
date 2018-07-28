import Account from './Account/Account';
import {PairOfObject} from './helper/PairOfObject';
import Provider from './Provider/Provider';
import {RootObject} from './StoredObjectTypes/RootObject';
import Service from './Service/Service';

export default class Store {
    private providers: PairOfObject<Provider> = {};
    private services: PairOfObject<Service> = {};
    private accounts: PairOfObject<Account> = {};

    public requestLoadData() {
        // TODO
    }

    public _load(loadedObject: RootObject): boolean {
        /*
        * 今の所、DefaultSupportをloadedObjectに渡してテストしていますが、
        * DefaultSupportを読み込んでからJSONファイルを読む形に直してください。
        */
        let loadIsSuccessed = true;

        Object.keys(loadedObject.services).forEach((serviceKey) => {
            try {
                this.services[serviceKey] = new Service(loadedObject.services[serviceKey]);

                Object.keys(loadedObject.providers)
                    .filter((providerKey) => serviceKey === loadedObject.providers[providerKey].serviceKey)
                    .forEach((providerKey) => {
                    try {
                        this.providers[providerKey] = new Provider(loadedObject.providers[providerKey]);
                    } catch (e) {
                        console.error('failed load provider object.');
                        console.error(e.toString());
                        loadIsSuccessed = false;
                    }
                });
            } catch (e) {
                console.error('failed load service object.');
                console.error(e.toString());
                loadIsSuccessed = false;
            }
        });

        Object.keys(loadedObject.accounts).forEach((key) => {
            try {
                this.accounts[key] = new Account(loadedObject.accounts[key]);
            } catch (e) {
                console.error('failed load account object.');
                console.error(e.toString());
                loadIsSuccessed = false;
            }
        });

        return loadIsSuccessed;
    }
}
