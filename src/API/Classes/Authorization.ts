import {IAuthorization} from '../Interfaces/IAuthorization';
import {OAuthVersion} from '../Enums/OAuthVersion';
import {OAuthSignatureSpace} from '../Enums/OAuthSignatureSpace';
import {SignType} from '../Enums/SignType';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import OAuth1 from "./OAuth1";
import OAuth2 from "./OAuth2";
import {UnknownAuthorizationMethod} from "../../Exception/Exceptions";
import {IApiParameter} from "../Interfaces/IApiParameter";

export default class Authorization implements IAuthorization {
    readonly oauth: OAuth1 | OAuth2;
    readonly oauthVersion: OAuthVersion;
    readonly oauthSignatureSpace: OAuthSignatureSpace;
    readonly signMethod: SignType;
    readonly key: IAPIKey;
    token: IToken | null;

    constructor(version, signatureSpace, signMethod, key, token = null){
        this.oauthVersion = version;
        this.oauthSignatureSpace = signatureSpace;
        this.signMethod = signMethod;
        this.key = key;
        this.token = token;

        switch (this.oauthVersion){
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

    getAuthorizationData(): IApiParameter {
    }
}
