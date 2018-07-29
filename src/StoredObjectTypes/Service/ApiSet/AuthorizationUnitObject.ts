import {AuthorizeMethod} from '../../../Enums/AuthorizeMethod';
import {OAuthVersion} from '../../../Enums/OAuthVersion';

export type AuthorizationUnitObject = {
    oauthVersion: OAuthVersion
    authMethod: AuthorizeMethod,
    scope?: string[],
    redirectUrl: string,
    requestAuthorizeTokenPath?: string,
    requestAuthorizePagePath: string, // required
    requestAccessTokenPath: string, // required
    requestTokenRefreshPath?: string,
};
