import * as authSign from 'oauth-sign';
import {SignType} from "./SignType";
import {HttpMethods} from "../HttpMethods";
import {ISignatureParameter} from "./ISignatureParameter";

export default (
    signMethod: SignType,
    httpMethod: HttpMethods,
    baseUrl: string,
    parameter: ISignatureParameter,
    queryParameter: Object,
    consumerSecretKey: string,
    tokenSecret: string = ''
): string => {
    const oauth_signature = encodeURIComponent(authSign.sign(
        signMethod,
        httpMethod,
        baseUrl,
        {...parameter, ...queryParameter},
        consumerSecretKey,
        tokenSecret
    ));
    const OAuthHeaderObject: Object = {...parameter, oauth_signature: oauth_signature};
    return 'OAuth ' + Object.keys(OAuthHeaderObject)
        .map((key: string) => (key + '="' + OAuthHeaderObject[key] + '"'))
        .join(',');
}
