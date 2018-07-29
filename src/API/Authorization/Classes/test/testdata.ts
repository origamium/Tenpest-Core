import {ApiParameterMethods} from '../../../../Enums/ApiParameterMethods';
import {AuthorizeMethod} from '../../../../Enums/AuthorizeMethod';
import {HttpMethods} from '../../../../Enums/HttpMethods';
import {OAuthVersion} from '../../../../Enums/OAuthVersion';
import {SignMethod} from '../../../../Enums/SignMethod';
import {SignSpace} from '../../../../Enums/SignSpace';
import {PairOfObject} from '../../../../helper/PairOfObject';
import {IApiData} from '../../../../Interfaces/IApiData';
import {IApiParameterDefinition} from '../../../../Interfaces/IApiParameterDefinition';
import {IAPIKey, IToken} from '../../../../Interfaces/IKeys';
import {AuthorizationUnitObject} from '../../../../StoredObjectTypes/Service/ApiSet/AuthorizationUnitObject';

export const DummyApiKey: IAPIKey = {
    ApiKey: 'qwerty',
    ApiSecretKey: 'ywmg',
};

export const DummyToken: IToken = {
    Token: 'foooooooooo',
};

export const DummyTokenHasSecretToken: IToken = {
    Token: 'ippon_manzoku_bar',
    TokenSecret: 'kusanagi_tsuyoshi',
};

export const blank: IApiData = {
    baseUri: 'https://example.com',
    path: '/path/to',
    parameter: {},
    method: HttpMethods.GET,
    return: null,
};

export const test1_blank_param: IApiParameterDefinition = {
    Authorization: {
        required: true,
        type: ApiParameterMethods.Header,
    },
};

export const oauth1data: PairOfObject<AuthorizationUnitObject> = {
    pin_hmac_header: {
        oauthVersion: OAuthVersion.OAuth1,
        authMethod: AuthorizeMethod.PIN,
        signMethod: SignMethod.hmac,
        signSpace: SignSpace.Header,
        redirectUrl: 'oob',
        requestAuthorizeTokenPath: 'oauth/request_token',
        requestAuthorizePagePath: 'oauth/authorize',
        requestAccessTokenPath: 'oauth/access_token',
    },
    pin_hmac_query: {
        oauthVersion: OAuthVersion.OAuth1,
        authMethod: AuthorizeMethod.PIN,
        signMethod: SignMethod.hmac,
        signSpace: SignSpace.Query,
        redirectUrl: 'oob',
        requestAuthorizeTokenPath: 'oauth/request_token',
        requestAuthorizePagePath: 'oauth/authorize',
        requestAccessTokenPath: 'oauth/access_token',
    },
};

export const oauth2data: PairOfObject<AuthorizationUnitObject> = {
    pin_plain_header: {
        oauthVersion: OAuthVersion.OAuth2,
        authMethod: AuthorizeMethod.Callback,
        signMethod: SignMethod.plain,
        signSpace: SignSpace.Header,
        redirectUrl: 'https://google.com',
        requestAuthorizePagePath: 'oauth/authorize',
        requestAccessTokenPath: 'oauth/access_token',
    },
    pin_plain_query: {
        oauthVersion: OAuthVersion.OAuth2,
        authMethod: AuthorizeMethod.Callback,
        signMethod: SignMethod.plain,
        signSpace: SignSpace.Query,
        redirectUrl: 'https://google.com',
        requestAuthorizePagePath: 'oauth/authorize',
        requestAccessTokenPath: 'oauth/access_token',
    },
};
