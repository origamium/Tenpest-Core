import {OAuthVersion} from "../Enums/OAuthVersion";
import {IAPIKey, IToken} from "./IKeys";
import {SignType} from "../Enums/SignType";
import {OAuthSignatureSpace} from "../Enums/OAuthSignatureSpace";

export interface IAuthorization {
    oauthVersion: OAuthVersion;
    oauthSignatureSpace: OAuthSignatureSpace;
    signMethod: SignType;
    key: IAPIKey;
    token: IToken | null;
}
