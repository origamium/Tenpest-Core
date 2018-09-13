import Exportable from '../helper/Exportable';
import {AuthorizationDataObject} from '../StoredObjectTypes/Account/AuthorizationDataObject';

export default class AuthorizationData extends Exportable {
    private _token: string;
    private _tokenSecret?: string;

    private _refreshTokenObject?: {
        refreshToken: string,
        tokenAcquisitionDate: Date,
        tokenExpireDate: Date,
    };
    private _tokenIsExprired?: boolean;

    constructor(source: AuthorizationDataObject) {
        super();
        this._token = source.token;
        this._tokenSecret = source.tokenSecret;
        if (source.refreshTokenObject) {
            this._refreshTokenObject = {
                refreshToken: source.refreshTokenObject.refreshToken,
                tokenAcquisitionDate: new Date(source.refreshTokenObject.tokenAcquisitionDate),
                tokenExpireDate: new Date(source.refreshTokenObject.tokenExpireDate),
            };
            this._tokenIsExprired =  source.refreshTokenObject.tokenExpireDate <= Date.now();
        }
    }

    public export(): AuthorizationDataObject {
        return {
            token: this._token,
            tokenSecret: this._tokenSecret,
            refreshTokenObject: this._refreshTokenObject ? {
                refreshToken: this._refreshTokenObject.refreshToken,
                tokenAcquisitionDate: this._refreshTokenObject.tokenAcquisitionDate.getTime(),
                tokenExpireDate: this._refreshTokenObject.tokenExpireDate.getTime(),
            } : undefined,
        };
    }
}
