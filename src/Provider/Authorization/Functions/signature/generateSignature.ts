import * as authSign from 'oauth-sign';
import {HttpMethods} from '../../../../Enums/HttpMethods';
import {OAuthVersion} from '../../../../Enums/OAuthVersion';
import {IOAuth1Parameters} from '../../Interfaces/IOAuth1Parameters';

export default (
    authMethod: OAuthVersion,
    httpMethod: HttpMethods,
    baseUrl: string,
    parameter: IOAuth1Parameters,
    queryParameter: object,
    consumerSecretKey: string,
    tokenSecret: string = '',
): string => (
    encodeURIComponent(authSign.sign(
        parameter.oauth_signature_method,
        httpMethod,
        baseUrl,
        {...parameter, ...queryParameter},
        consumerSecretKey,
        tokenSecret,
    ))
);
