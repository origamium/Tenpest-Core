/* tslint:disable */

import Authorization from './Authorization';
import {OAuthVersion} from '../Enums/OAuthVersion';
import {SignMethod} from '../Enums/SignMethod';
import {SignSpace} from '../Enums/SignSpace';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import {IApiData} from '../Interfaces/IApiData';
import {HttpMethods} from '../Enums/HttpMethods';

const DummyApiKey: IAPIKey = {
    ApiKey: 'qwerty',
    ApiSecretKey: 'ywmg',
};

const DummyToken: IToken = {
    Token: 'foooooooooo',
};

const DummyTokenHasSecretToken: IToken = {
    Token: 'ippon_manzoku_bar',
    TokenSecret: 'kusanagi_tsuyoshi',
};

// OAuth1
const OAuth1Instances = {
    header: {
        hasToken: new Authorization(OAuthVersion.OAuth1, SignMethod.hmac, SignSpace.Header, DummyApiKey, DummyToken),
        hasntToken: new Authorization(OAuthVersion.OAuth1, SignMethod.hmac, SignSpace.Header, DummyApiKey),
    },
    query: {
        hasToken: new Authorization(OAuthVersion.OAuth1, SignMethod.hmac, SignSpace.Query, DummyApiKey, DummyToken),
        hasntToken: new Authorization(OAuthVersion.OAuth1, SignMethod.hmac, SignSpace.Query, DummyApiKey),
    },
};

const OAuth2Instances = {
    header: {
        hasToken: new Authorization(OAuthVersion.OAuth2, SignMethod.plain, SignSpace.Header, DummyApiKey, DummyToken),
        hasntToken: new Authorization(OAuthVersion.OAuth2, SignMethod.plain, SignSpace.Header, DummyApiKey),
    },
    query: {
        hasToken: new Authorization(OAuthVersion.OAuth2, SignMethod.plain, SignSpace.Query, DummyApiKey, DummyToken),
        hasntToken: new Authorization(OAuthVersion.OAuth2, SignMethod.plain, SignSpace.Query, DummyApiKey),
    },
};

const blank: IApiData = {
    baseUri: 'https://example.com',
    path: '/path/to',
    parameter: {},
    method: HttpMethods.GET,
    return: null,
};


test('OAuth getOAuthorization method test', () => {
    expect(OAuth2Instances.header.hasToken.getAuthorizationData(blank, {})[1]).toEqual({Authorization: 'Bearer ' + DummyToken.Token});
});
