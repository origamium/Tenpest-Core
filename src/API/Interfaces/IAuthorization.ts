import {OAuthVersion} from "../Enums/OAuthVersion";
import {IAPIKey, IToken} from "./IKeys";
import {SignType} from "../Enums/SignType";
import {OAuthSignatureSpace} from "../Enums/OAuthSignatureSpace";

export interface IAuthorization {
    readonly oauthVersion: OAuthVersion;
    readonly oauthSignatureSpace: OAuthSignatureSpace;
    readonly signMethod: SignType;
    readonly key: IAPIKey;
    token: IToken | null;
}
