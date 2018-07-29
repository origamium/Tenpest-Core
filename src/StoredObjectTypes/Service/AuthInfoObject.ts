import {OAuthVersion} from '../../Enums/OAuthVersion';
import {SignMethod} from '../../Enums/SignMethod';
import {SignSpace} from '../../Enums/SignSpace';
import {AuthorizeMethod} from '../../Enums/AuthorizeMethod';

export type AuthInfoObject = {
    oauthVersion: OAuthVersion,
    authMethod: AuthorizeMethod,
    signMethod: SignMethod,
    signSpace: SignSpace,
};
