import * as authSign from 'oauth-sign';
import {HttpMethods} from '../../../Enums/HttpMethods';
import {ISignatureParameter} from '../../../Interfaces/ISignatureParameter';
import {OAuthVersion} from "../../../Enums/OAuthVersion";

export default (
    authMethod: OAuthVersion,
    httpMethod: HttpMethods,
    baseUrl: string,
    parameter: ISignatureParameter,
    queryParameter: object,
    consumerSecretKey: string,
    tokenSecret: string = '',
): string => {
    const OAuthSignature = encodeURIComponent(authSign.sign(
        parameter.oauth_signature_method,
        httpMethod,
        baseUrl,
        {...parameter, ...queryParameter},
        consumerSecretKey,
        tokenSecret,
    ));
    const TokenName = authMethod === OAuthVersion.OAuth1 ? 'OAuth ' : 'Bearer ';
    const OAuthHeaderObject = {...parameter, oauth_signature: OAuthSignature}; // oh any...
    return TokenName + Object.keys(OAuthHeaderObject)
        .map((key: string) => (key + '=\'' + OAuthHeaderObject[key] + '\''))
        .join(',');
};
