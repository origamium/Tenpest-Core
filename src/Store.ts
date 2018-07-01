import Provider from './Provider/Provider';
import Service from './Service/Service';
import Account from './Account/Account';

export default class Store {
    private Providers: Provider[];
    private Services: Service[];
    private Accounts: Account[];

    constructor() {
        this.Providers = [];
        this.Services = [];
        this.Accounts = [];
    }

    public messageHandler() {
    }

    private _loadData() {
    }
}
