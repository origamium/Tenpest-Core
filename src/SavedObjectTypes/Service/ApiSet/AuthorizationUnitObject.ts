import {AuthMethods} from '../../../Provider/Authorization/Enums/AuthMethods';
import {OAuthVersion} from '../../../Provider/Authorization/Enums/OAuthVersion';

export type AuthorizationUnitObject = {
    oauthVersion: OAuthVersion
    authMethod: AuthMethods,
    scope?: string[],
    redirectUrl: string,
    requestAuthorizeTokenPath?: string,
    requestAuthorizePagePath: string, // required
    requestAccessTokenPath: string, // required
    requestTokenRefreshPath?: string,
};
