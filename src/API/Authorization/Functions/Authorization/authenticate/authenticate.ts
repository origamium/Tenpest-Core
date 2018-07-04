import {UnknownAuthorizationMethod, UnknownOAuthSignatureSpace} from '../../../../../Exception/Exceptions';
import {OAuthVersion} from '../../../Enums/OAuthVersion';
import {SignSpace} from '../../../Enums/SignSpace';
import {IApiPayload} from '../../../Interfaces/IApiPayload';
import {IAuthorization} from '../../../Interfaces/IAuthorization';
import generateOAuthHeaderString from '../oauthHeaderString/generateOAuthHeaderString';

// in OAuth1.0, Headerstring is 'Authorization: OAuth ~'
// in OAuth2.0, Headerstring is  'Authorization: Bearer ~'

export default (
    authenticate: IAuthorization,
    payload: IApiPayload,
): any => {
    const result = {};

    switch (authenticate.oauthSignatureSpace) {
        case SignSpace.Query:
            break;
        case SignSpace.Header:

            break;
        default:
            throw UnknownOAuthSignatureSpace;
    }
    return result;
};
