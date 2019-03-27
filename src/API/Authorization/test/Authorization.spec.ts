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

describe('OAuth1(header)', () => {
    it('getAuthorizationData method', () => {
        const target = OAuth1Instances.query.getAuthorizationData(TD.DummyToken, TD.blank, {});
        expect(Object.keys(target.definition)).toEqual(Object.keys(target.payload));
    })
});

describe('OAuth1(query)', () => {
    it('getAuthorizationData method', () => {
        const target = OAuth1Instances.query.getAuthorizationData(TD.DummyToken, TD.blank, {});
        expect(Object.keys(target.definition)).toEqual(Object.keys(target.payload));
    })
});

describe('OAuth2(header)', () => {
    it('getAuthorizationData method', () => {
        const target = OAuth2Instances.header.getAuthorizationData(TD.DummyToken, TD.blank, {});
        expect(Object.keys(target.definition)).toEqual(Object.keys(target.payload));
    })
});

describe('OAuth2(query)', () => {
    it('getAuthorizationData method', () => {
        const target = OAuth2Instances.query.getAuthorizationData(TD.DummyToken, TD.blank, {});
        expect(Object.keys(target.definition)).toEqual(Object.keys(target.payload));
    })
});

