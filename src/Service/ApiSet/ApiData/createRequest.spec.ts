import createRequest from './createRequest';
import {ApiParameterType} from "./ApiParameter";

const targetUrl = 'https://example.com';

const blank = {
    path: '/path/to',
    parameter: {},
    return: ''
};

test('parameter not defined and no parameter, its be basic url.', () => {
    expect(createRequest(targetUrl,{}, blank)()).toBe(targetUrl+blank.path);
    expect(createRequest(targetUrl,{}, blank)({})).toBe(targetUrl+blank.path);
});

test('parameter not defined and parameter exists must be throw exception', () => {
    expect(() => createRequest(targetUrl, {}, blank)({oh: 'no'})).toThrow('Contains not defined parameters.');
});


const req = {
    path: '/path/to',
    parameter: {
        'superdry': {
            required: true,
            type: ApiParameterType.Query,
        }
    },
    return: ''
};

test('required parameter defined and correctly providing parameter', () => {
    expect(createRequest(targetUrl, {}, req)({superdry: 'sinasai'})).toBe(targetUrl+'/path/to?superdry=sinasai');
    expect(createRequest(targetUrl, {}, req)({'superdry': 'しなさい'})).toBe(targetUrl+'/path/to?superdry=%E3%81%97%E3%81%AA%E3%81%95%E3%81%84');
});

test('required parameter defined and not providing parameter must be throw exception', () => {
    expect(() => createRequest(targetUrl, {}, req)()).toThrow('Required parameter not found.');
    expect(() => createRequest(targetUrl, {}, req)({})).toThrow('Required parameter not found.');
});


const sandWitch = {
    path: '/path/to',
    parameter: {
        'oomuro': {
            required: true,
            type: ApiParameterType.SandWitch,
        }
    },
    return: ''
};

test('Requied SandWitch parameter defined and correctly providing parameter', () => {
    expect(createRequest(targetUrl, {}, sandWitch)({oomuro: 'sakurako'})).toBe(targetUrl+'/path/to/oomuro/sakurako')
});

const sandWitch_multiparam = {
    path: '/path/to',
    parameter: {
        'oomuro': {
            required: true,
            type: ApiParameterType.SandWitch,
        },
        'yuru': {
            required: false,
            type: ApiParameterType.Query,
        }
    },
    return: ''
};

test('Requied SandWitch and Query parameter defined and correctly providing parameter', () => {
    expect(createRequest(targetUrl, {}, sandWitch_multiparam)({oomuro: 'sakurako'})).toBe(targetUrl+'/path/to/oomuro/sakurako');
    expect(createRequest(targetUrl, {}, sandWitch_multiparam)({oomuro: 'sakurako', yuru: 'yuri'})).toBe(targetUrl+'/path/to/oomuro/sakurako?yuru=yuri');
});

const multiparam = {
    path: '/path/to',
    parameter: {
        'oomuro': {
            required: false,
            type: ApiParameterType.Query,
        },
        'yuru': {
            required: false,
            type: ApiParameterType.Query,
        },
        'seikatu': {
            required: false,
            type: ApiParameterType.Query,
        },
    },
    return: ''
};

test('multiple not required parameter', () => {
    expect(createRequest(targetUrl, {}, multiparam)({
        oomuro: 'sakurako'
    })).toBe(targetUrl+'/path/to?oomuro=sakurako');
    expect(createRequest(targetUrl, {}, multiparam)({
        oomuro: 'sakurako',
        yuru: 'yuri'
    })).toBe(targetUrl+'/path/to?oomuro=sakurako&yuru=yuri');
    expect(createRequest(targetUrl, {}, multiparam)({
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
            type: ApiParameterType.SandWitch,
        },
        'yuru': {
            required: false,
            type: ApiParameterType.SandWitch,
        }
    },
    return: ''
};

test('Multiple SandWitch parameter not allowed', () => {
    expect(() => createRequest(targetUrl, {}, multisandwitch_err)).toThrow('Multiple SandWitched parameter is not allowed.');
});
