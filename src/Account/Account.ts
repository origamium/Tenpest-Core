import AuthorizationData from './AuthorizationData';

export default class Account {
    private readonly _id: string;
    private readonly _serviceName: string;
    private readonly _providerName: string;
    private _authData?: AuthorizationData;

    constructor(id: string, serviceName: string, providerName: string, authData?: object) {
        this._id = id;
        this._serviceName = serviceName;
        this._providerName = providerName;
        authData ? this._authData = new AuthorizationData(authData) : this._authData = undefined;
    }
}
