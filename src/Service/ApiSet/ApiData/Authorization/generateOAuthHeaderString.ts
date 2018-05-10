import * as authSign from 'oauth-sign';
import {SignType} from './SignType';
import {HttpMethods} from '../HttpMethods';
import {ISignatureParameter} from './ISignatureParameter';

export default (
    signMethod: SignType,
    httpMethod: HttpMethods,
    baseUrl: string,
    parameter: ISignatureParameter,
    queryParameter: object,
    consumerSecretKey: string,
    tokenSecret: string = '',
): string => {
    const OAuthSignature = encodeURIComponent(authSign.sign(
        signMethod,
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
