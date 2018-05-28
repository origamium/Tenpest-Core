import * as authSign from 'oauth-sign';
import {UnknownAuthorizationMethod} from '../../../../Exception/Exceptions';
import {HttpMethods} from '../../../Enums/HttpMethods';
import {OAuthVersion} from '../../../Enums/OAuthVersion';
import {IOAuth1Parameters} from '../../../Interfaces/IOAuth1Parameters';

export default (
    authMethod: OAuthVersion,
    httpMethod: HttpMethods,
    baseUrl: string,
    parameter: IOAuth1Parameters,
    queryParameter: object,
    consumerSecretKey: string,
    tokenSecret: string = '',
): string => {
    switch (authMethod) {
        case OAuthVersion.OAuth1:
            const OAuthSignature = encodeURIComponent(authSign.sign(
                parameter.oauth_signature_method,
                httpMethod,
                baseUrl,
                {...parameter, ...queryParameter},
                consumerSecretKey,
                tokenSecret,
            ));
            const OAuthHeaderObject = {...parameter, oauth_signature: OAuthSignature}; // oh any...
            return 'OAuth ' + Object.keys(OAuthHeaderObject)
                .map((key: string) => (key + '=\'' + OAuthHeaderObject[key] + '\''))
                .join(',');
        case OAuthVersion.OAuth2:
            return 'Bearer ' + tokenSecret;
        default:
            throw UnknownAuthorizationMethod;
    }
};
