import {AuthMethods} from '../../../Authorization/Enums/AuthMethods';
import {OAuthVersion} from '../../../Authorization/Enums/OAuthVersion';

export type AuthorizationUnitObject = {
    oauthVersion: OAuthVersion
    authMethod: AuthMethods,
    scope?: string[],
    redirectUrl: string,
    requestAuthorizeToken?: string,
    requestAuthorizePagePath: string,
    requestAccessTokenPath: string,
    requestTokenRefreshPath?: string,
};
