import {OAuthVersion} from "../Types/OAuthVersion";
import {AuthMethods} from "../Types/AuthMethods";

export interface IAuthorization {
    oauthVersion: OAuthVersion;
    oauthMethod: AuthMethods;
}
