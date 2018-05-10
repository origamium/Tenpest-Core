import * as authSign from 'oauth-sign';
import {HttpMethods} from '../Types/Enums/HttpMethods';
import {ISignatureParameter} from '../Types/Interfaces/ISignatureParameter';

export default (
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
    const OAuthHeaderObject: any = {...parameter, oauth_signature: OAuthSignature}; // oh any...
    return 'OAuth ' + Object.keys(OAuthHeaderObject)
        .map((key: string) => (key + '=\'' + OAuthHeaderObject[key] + '\''))
        .join(',');
};
