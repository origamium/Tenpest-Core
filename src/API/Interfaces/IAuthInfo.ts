import {OAuthVersion} from '../Enums/OAuthVersion';
import {SignMethod} from '../Enums/SignMethod';
import {SignSpace} from '../Enums/SignSpace';
import {IAPIKey, IToken} from './IKeys';

export interface IAuthInfo {
    apiKey: IAPIKey;
    oauthVersion: OAuthVersion;
    token: IToken | null;
    signMethod: SignMethod;
    signSpace: SignSpace;
}
