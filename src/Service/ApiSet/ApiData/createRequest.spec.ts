import createRequestUri from './createRequestUri';
import {ApiPayloadType} from "./ApiParameter";

const targetUrl = 'https://example.com';

const blank = {
    path: '/path/to',
    parameter: {},
    return: ''
};

test('parameter not defined and no parameter, its be basic url.', () => {
    expect(createRequestUri(targetUrl,{}, blank)()).toBe(targetUrl+blank.path);
    expect(createRequestUri(targetUrl,{}, blank)({})).toBe(targetUrl+blank.path);
});

test('parameter not defined and parameter exists must be throw exception', () => {
    expect(() => createRequestUri(targetUrl, {}, blank)({oh: 'no'})).toThrow('Contains not defined parameters.');
});


const req = {
    path: '/path/to',
    parameter: {
        'superdry': {
            required: true,
            type: ApiPayloadType.Query,
        }
    },
    return: ''
};

test('required parameter defined and correctly providing parameter', () => {
    expect(createRequestUri(targetUrl, {}, req)({superdry: 'sinasai'})).toBe(targetUrl+'/path/to?superdry=sinasai');
    expect(createRequestUri(targetUrl, {}, req)({'superdry': 'しなさい'})).toBe(targetUrl+'/path/to?superdry=%E3%81%97%E3%81%AA%E3%81%95%E3%81%84');
});

test('required parameter defined and not providing parameter must be throw exception', () => {
    expect(() => createRequestUri(targetUrl, {}, req)()).toThrow('Required parameter not found.');
    expect(() => createRequestUri(targetUrl, {}, req)({})).toThrow('Required parameter not found.');
});


const sandWitch = {
    path: '/path/to',
    parameter: {
        'oomuro': {
            required: true,
            type: ApiPayloadType.SandWitch,
        }
    },
    return: ''
};

test('Requied SandWitch parameter defined and correctly providing parameter', () => {
    expect(createRequestUri(targetUrl, {}, sandWitch)({oomuro: 'sakurako'})).toBe(targetUrl+'/path/to/oomuro/sakurako')
});

const sandWitch_multiparam = {
    path: '/path/to',
    parameter: {
        'oomuro': {
            required: true,
            type: ApiPayloadType.SandWitch,
        },
        'yuru': {
            required: false,
            type: ApiPayloadType.Query,
        }
    },
    return: ''
};

test('Requied SandWitch and Query parameter defined and correctly providing parameter', () => {
    expect(createRequestUri(targetUrl, {}, sandWitch_multiparam)({oomuro: 'sakurako'})).toBe(targetUrl+'/path/to/oomuro/sakurako');
    expect(createRequestUri(targetUrl, {}, sandWitch_multiparam)({oomuro: 'sakurako', yuru: 'yuri'})).toBe(targetUrl+'/path/to/oomuro/sakurako?yuru=yuri');
});

const multiparam = {
    path: '/path/to',
    parameter: {
        'oomuro': {
            required: false,
            type: ApiPayloadType.Query,
        },
        'yuru': {
            required: false,
            type: ApiPayloadType.Query,
        },
        'seikatu': {
            required: false,
            type: ApiPayloadType.Query,
        },
    },
    return: ''
};

test('multiple not required parameter', () => {
    expect(createRequestUri(targetUrl, {}, multiparam)({
        oomuro: 'sakurako'
    })).toBe(targetUrl+'/path/to?oomuro=sakurako');
    expect(createRequestUri(targetUrl, {}, multiparam)({
        oomuro: 'sakurako',
        yuru: 'yuri'
    })).toBe(targetUrl+'/path/to?oomuro=sakurako&yuru=yuri');
    expect(createRequestUri(targetUrl, {}, multiparam)({
        yuru: 'yuri',
        'seikatu': 'hogo',
        oomuro: 'sakurako',
    })).toBe(targetUrl+'/path/to?oomuro=sakurako&seikatu=hogo&yuru=yuri'); //謎
});

const multisandwitch_err = {
    path: '/path/to',
    parameter: {
        'oomuro': {
            required: true,
            type: ApiPayloadType.SandWitch,
        },
        'yuru': {
            required: false,
            type: ApiPayloadType.SandWitch,
        }
    },
    return: ''
};

test('Multiple SandWitch parameter not allowed', () => {
    expect(() => createRequestUri(targetUrl, {}, multisandwitch_err)).toThrow('Multiple SandWitched parameter is not allowed.');
});
