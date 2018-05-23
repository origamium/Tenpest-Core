import {OAuthVersion} from '../Enums/OAuthVersion';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import OAuth1 from './OAuth1';
import OAuth2 from './OAuth2';
import {UnknownAuthorizationMethod} from '../../Exception/Exceptions';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IAuthInfo} from '../Interfaces/IAuthInfo';
import {IApiData} from '../Interfaces/IApiData';
import {SignMethod} from '../Enums/SignMethod';
import {SignSpace} from '../Enums/SignSpace';

export default class Authorization {
    private oauth: OAuth1 | OAuth2;
    private info: IAuthInfo;

    constructor(
        version: OAuthVersion,
        signMethod: SignMethod,
        signatureSpace: SignSpace,
        key: IAPIKey,
        token: IToken | null = null,
    ) {
        this.info = {
            apiKey: key,
            token: token,
            signSpace: signatureSpace,
            signMethod: signMethod,
            oauthVersion: version,
        };

        switch (this.info.oauthVersion) {
            case OAuthVersion.OAuth1:
                this.oauth = new OAuth1();
                break;
            case OAuthVersion.OAuth2:
                this.oauth = new OAuth2();
                break;
            default:
                throw UnknownAuthorizationMethod;
        }
    }

    public updateToken(token: IToken) {
        this.info.token = token;
    }

    public getAuthorizationData(apiData: IApiData, payload: IApiPayload): [IApiData, IApiPayload] {
        return this.oauth.getAuthorizationData(this.info, apiData, payload);
    }
}
