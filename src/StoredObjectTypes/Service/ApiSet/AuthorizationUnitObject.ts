import {AuthorizeMethod} from '../../../Enums/AuthorizeMethod';
import {OAuthVersion} from '../../../Enums/OAuthVersion';
import {SignMethod} from '../../../Enums/SignMethod';
import {SignSpace} from '../../../Enums/SignSpace';

export type AuthorizationUnitObject = {
    oauthVersion: OAuthVersion, // required
    authMethod: AuthorizeMethod, // required
    signMethod: SignMethod, // required
    signSpace: SignSpace, // required
    scope?: string[], // required
    redirectUrl: string, // required
    requestAuthorizeTokenPath?: string,
    requestAuthorizePagePath: string, // required
    requestAccessTokenPath: string, // required
    requestTokenRefreshPath?: string,
};
