export default class AuthorizationData {
    private _token: string;

    private _tokenSecret?: string;

    private _refreshToken?: string;
    private _tokenAcquisitionTime?: string;
    private _tokenExpire?: string;
    private _tokenIsExprired?: boolean;

    constructor(authData: any) { // TODO: DO NOT ANY
        this._token = authData.token;
        this._tokenSecret = authData.tokenSecret;
    }
}
