/* tslint:disable */

import Authorization from './Authorization';
import {OAuthVersion} from '../../../Enums/OAuthVersion';
import {SignMethod} from '../../../Enums/SignMethod';
import {SignSpace} from '../../../Enums/SignSpace';
import {IAPIKey, IToken} from '../../../Interfaces/IKeys';
import {IApiData} from '../../../Interfaces/IApiData';
import {HttpMethods} from '../../../Enums/HttpMethods';
import {IApiParameterDefinition} from '../../../Interfaces/IApiParameterDefinition';
import {ApiParameterMethods} from '../../../Enums/ApiParameterMethods';

const blank: IApiData = {
    baseUri: 'https://example.com',
    path: '/path/to',
    parameter: {},
    method: HttpMethods.GET,
    return: null,
};

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

test('OAuth2 getOAuthorization method test', () => {
    // OAuth
    const test1_blank_param: IApiParameterDefinition = { Authorization: {required: true, type: ApiParameterMethods.Header} };
    expect(OAuth2Instances.header.hasToken.getAuthorizationData(blank, {}))
        .toEqual([Object.assign({}, blank, {parameter: {...test1_blank_param}}), {Authorization: 'Bearer ' + DummyToken.Token}]);
    expect(OAuth2Instances.header.hasntToken.getAuthorizationData(blank, {}))
        .toEqual([blank, {}]);

    const test2_blank_param: IApiParameterDefinition = { access_token: {required: true, type: ApiParameterMethods.Query} };
    expect(OAuth2Instances.query.hasToken.getAuthorizationData(blank, {}))
        .toEqual([Object.assign({}, blank, {parameter: {...test2_blank_param}}),{access_token: DummyToken.Token}]);
    expect(OAuth2Instances.query.hasntToken.getAuthorizationData(blank, {}))
        .toEqual([blank, {}]);
});
