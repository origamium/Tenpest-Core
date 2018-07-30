/* tslint:disable */
import Authorization from '../Authorization';
import * as TD from './testdata';

const OAuth1Instances = {
    header: new Authorization(TD.oauth1data.pin_hmac_header, TD.DummyApiKey),
    query: new Authorization(TD.oauth1data.pin_hmac_query, TD.DummyApiKey),
};
const OAuth2Instances = {
    header: new Authorization(TD.oauth2data.pin_plain_header, TD.DummyApiKey),
    query: new Authorization(TD.oauth2data.pin_plain_query, TD.DummyApiKey),
};

test('OAuth1 getOAuthorization method test', () => {

    expect('dummy').toEqual('dummy');

    //expect(OAuth1Instances.header.getAuthorizationData(TD.DummyToken, TD.blank, {})).toBe(0);
    //expect(OAuth1Instances.query.getAuthorizationData(TD.DummyToken, TD.blank, {})).toBe(0);
});


test('OAuth2 getOAuthorization method test', () => {

    expect('dummy').toEqual('dummy');

    //expect(OAuth2Instances.header.getAuthorizationData(TD.DummyToken, TD.blank, {})).toBe(0);
    //expect(OAuth2Instances.query.getAuthorizationData(TD.DummyToken, TD.blank, {})).toBe(0);
});
