import {OAuthVersion} from "../Enums/OAuthVersion";
import {IAPIKey, IToken} from "./IKeys";
import {SignType} from "../Enums/SignType";
import {OAuthSignatureSpace} from "../Enums/OAuthSignatureSpace";
import OAuth1 from "../Classes/OAuth1";
import OAuth2 from "../Classes/OAuth2";

export interface IAuthorization {
    readonly oauth: OAuth1 | OAuth2;
    readonly oauthVersion: OAuthVersion;
    readonly oauthSignatureSpace: OAuthSignatureSpace;
    readonly signMethod: SignType;
    readonly key: IAPIKey;
    token: IToken | null;
}
