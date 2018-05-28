import {SignMethod} from "../Enums/SignMethod";
import {IAPIKey, IToken} from "./IKeys";
import {SignSpace} from "../Enums/SignSpace";
import {OAuthVersion} from "../Enums/OAuthVersion";

export interface IAuthInfo {
    apiKey: IAPIKey;
    oauthVersion: OAuthVersion;
    token: IToken | null;
    signMethod: SignMethod;
    signSpace: SignSpace;
}
