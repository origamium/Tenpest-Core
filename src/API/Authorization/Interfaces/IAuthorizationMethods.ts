import {OAuthVersion} from "../Types/OAuthVersion";
import {AuthMethods} from "../Types/AuthMethods";

export interface IAuthorizationMethods {
    version: OAuthVersion;
    method: AuthMethods;
};
