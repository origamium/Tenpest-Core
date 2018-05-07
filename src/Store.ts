import Provider from './Provider/Provider';

export default class Store {
    public ProviderList: Provider[];

    constructor() {
        this.ProviderList = [];
    }

    public messageHandler(e: Event) {
        console.log('message received.');
        console.log(e);
        postMessage(['okay', 'lets', 'time', 'to', 'move']);
    }

    private _loadingData() {

    }
}
