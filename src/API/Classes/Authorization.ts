import {OAuthVersion} from '../Enums/OAuthVersion';
import {SignSpace} from '../Enums/SignSpace';
import {SignType} from '../Enums/SignType';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import OAuth1 from "./OAuth1";
import OAuth2 from "./OAuth2";
import {UnknownAuthorizationMethod} from "../../Exception/Exceptions";
import {IApiParameter} from "../Interfaces/IApiParameter";
import {IApiValue} from '../Interfaces/IApiValue';

export default class Authorization {
    readonly oauth: OAuth1 | OAuth2;
    readonly oauthVersion: OAuthVersion;
    readonly oauthSignatureSpace: SignSpace;
    readonly signMethod: SignType;
    readonly key: IAPIKey;
    token: IToken | null;

    constructor(version, signatureSpace, signMethod, key, token = null) {
        this.oauthVersion = version;
        this.oauthSignatureSpace = signatureSpace;
        this.signMethod = signMethod;
        this.key = key;
        this.token = token;

        switch (this.oauthVersion) {
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

    public getAuthorizationData(): [IApiParameter, IApiValue] {
        return this.oauth.getAuthorizationData(this.oauthSignatureSpace, this.key, this.token);
    }
}
