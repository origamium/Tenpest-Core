import {OAuthDataTo} from '../Enums/OAuthDataTo';
import {OAuthMethod} from '../Enums/OAuthMethod';
import {OAuthVersion} from '../Enums/OAuthVersion';

export interface IAuthorizationData {
    OAuthVersion: OAuthVersion;
    method: OAuthMethod;
    dataTo: OAuthDataTo;
}
