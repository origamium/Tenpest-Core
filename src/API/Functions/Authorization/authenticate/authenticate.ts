import {IAuthorization} from "../../../Interfaces/IAuthorization";
import {IApiValueTemplate} from "../../../Interfaces/IApiValueTemplate";
import {OAuthVersion} from "../../../Enums/OAuthVersion";
import {OAuthSignatureSpace} from "../../../Enums/OAuthSignatureSpace";
import {UnknownOAuthSignatureSpace, UnknownAuthorizationMethod} from "../../../../Exception/Exceptions";
import generateOAuthHeaderString from '../oauthHeaderString/generateOAuthHeaderString';

// in OAuth1.0, Headerstring is 'Authorization: OAuth ~'
// in OAuth2.0, Headerstring is  'Authorization: Bearer ~'

export default (
    authenticate: IAuthorization,
    payload: IApiValueTemplate
): any => {
    let result = {};

    switch (authenticate.oauthSignatureSpace){
        case OAuthSignatureSpace.URI:
            break;
        case OAuthSignatureSpace.Header:

            break;
        default:
            throw UnknownOAuthSignatureSpace;
    }
    return result;
}

