import {AuthorizeMethod} from '../Enums/AuthorizeMethod';
import {OAuthVersion} from '../Enums/OAuthVersion';
import {SignMethod} from '../Enums/SignMethod';
import {SignSpace} from '../Enums/SignSpace';
import {IAPIKey} from './IKeys';

export interface IAuthInfo {
    apiKey: IAPIKey;
    oauthVersion: OAuthVersion;
    authMethod: AuthorizeMethod;
    signMethod: SignMethod;
    signSpace: SignSpace;
    scope?: string;
}
