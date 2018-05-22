import {SignType} from "../Enums/SignType";
import {IAPIKey, IToken} from "./IKeys";
import {SignSpace} from "../Enums/SignSpace";
import {OAuthVersion} from "../Enums/OAuthVersion";

export interface IAuthInfo {
    apiKey: IAPIKey;
    oauthVersion: OAuthVersion;
    token: IToken | null;
    signMethod: SignType | null;
    signSpace: SignSpace;
}