import {OAuthVersion} from "../Enums/OAuthVersion";
import {IAPIKey, IToken} from "./IKeys";

export interface IAuthorization {
    oauthVersion: OAuthVersion;
    key: IAPIKey;
    token: IToken | null;
}
