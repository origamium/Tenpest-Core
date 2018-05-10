import * as authSign from 'oauth-sign';
import generateOAuthHeaderString from './generateOAuthHeaderString';
import {OAuthSignType} from '../Types/Enums/OAuthSignType';
import {HttpMethods} from '../Types/Enums/HttpMethods';
import {ISignatureParameter} from '../Types/Interfaces/ISignatureParameter';

const parameter1: ISignatureParameter = {
    oauth_consumer_key: '123456789abcde',
    oauth_signature_method: OAuthSignType.hmac,
    oauth_timestamp: Math.floor(Date.now() / 1000),
    oauth_nonce: 'qwertyuiop',
    oauth_version: '1.0',
};
const queryParameter1 = {
    // nothing!
};

const queryParameter2 = {
    statuses: '千住大橋彩花二郎',
};

const queryParameter3 = {
    statuses: encodeURIComponent('千住大橋彩花二郎'), // Percent Encoding
};

const httpMethod = HttpMethods.GET,
    baseUrl = 'https://api.twitter.com/verify_credentials.json',
    consumerSecretKey = 'JackDorseyIsWatchingYouSince2007',
    tokenSecret = 'LoveLoveIsIllegalContents';

test('generateOAuthHeaderString method', () => {
    expect(generateOAuthHeaderString(
        httpMethod,
        baseUrl,
        parameter1,
        queryParameter1,
        consumerSecretKey,
        tokenSecret,
    )).toContain('oauth_signature');

    expect(
        generateOAuthHeaderString(httpMethod, baseUrl, parameter1, queryParameter1, consumerSecretKey, ''))
        .toEqual(
        generateOAuthHeaderString(httpMethod, baseUrl, parameter1, queryParameter1, consumerSecretKey));

    expect(generateOAuthHeaderString(
        httpMethod,
        baseUrl,
        parameter1,
        queryParameter2,
        consumerSecretKey,
        tokenSecret))
        .not.toEqual(
            generateOAuthHeaderString(
            httpMethod,
            baseUrl,
            parameter1,
            queryParameter3,
            consumerSecretKey,
            tokenSecret));
});
