import {IUser} from '@data';
import {AccountObject} from '../StoredObjectTypes/Account/AccountObject';
import AuthorizationData from './AuthorizationData';

export default class Account {
    private readonly _id: string;
    private readonly _serviceName: string;
    private readonly _providerName: string;
    private _authData?: AuthorizationData;

    private _latestUserData?: IUser;

    constructor(source: AccountObject) {
        this._id = source.id;
        this._serviceName = source.service;
        this._providerName = source.provider;
        this._authData = source.authData ? new AuthorizationData(source.authData) : undefined;
        this._latestUserData = source.latestAccountInfo;
    }

    public updateUserData(source: IUser) {
        this._latestUserData = source;
    }
}
