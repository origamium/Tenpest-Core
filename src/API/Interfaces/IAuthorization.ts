import {OAuthVersion} from "../Enums/OAuthVersion";
import {AuthMethods} from "../Enums/AuthMethods";

export interface IAuthorization {
    oauthVersion: OAuthVersion;
    oauthMethod: AuthMethods;
}
