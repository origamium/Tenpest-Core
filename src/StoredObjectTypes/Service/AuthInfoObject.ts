import {OAuthVersion} from '../../Enums/OAuthVersion';
import {SignMethod} from '../../Enums/SignMethod';
import {SignSpace} from '../../Enums/SignSpace';
import {AuthMethods} from '../../Enums/AuthMethods';

export type AuthInfoObject = {
    authMethod: OAuthVersion,
    signMethod: SignMethod,
    signSpace: SignSpace,
    certMethod: AuthMethods,
};
