import {IAuthorization} from "../../../Interfaces/IAuthorization";
import {IApiValue} from "../../../Interfaces/IApiValue";
import {OAuthVersion} from "../../../Enums/OAuthVersion";
import {SignSpace} from "../../../Enums/SignSpace";
import {UnknownOAuthSignatureSpace, UnknownAuthorizationMethod} from "../../../../Exception/Exceptions";
import generateOAuthHeaderString from '../oauthHeaderString/generateOAuthHeaderString';

// in OAuth1.0, Headerstring is 'Authorization: OAuth ~'
// in OAuth2.0, Headerstring is  'Authorization: Bearer ~'

export default (
    authenticate: IAuthorization,
    payload: IApiValue
): any => {
    let result = {};

    switch (authenticate.oauthSignatureSpace){
        case SignSpace.Query:
            break;
        case SignSpace.Header:

            break;
        default:
            throw UnknownOAuthSignatureSpace;
    }
    return result;
}

