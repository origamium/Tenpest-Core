import {HttpMethods} from '../../Enums/HttpMethods';
import {ApiParameterType} from '../../Interfaces/IApiParameter';
import generateUri from './generateUri';

const targetUrl = 'https://example.com';

const blank = {
    path: '/path/to',
    parameter: {},
    method: HttpMethods.GET,
    return: null,
};

test('Generate basic url', () => {
    expect(generateUri(targetUrl, blank, {})).toBe(targetUrl + blank.path);
});

const req = {
    path: '/path/to',
    parameter: {
        superdry: {
            required: true,
            type: ApiParameterType.Query,
        },
    },
    method: HttpMethods.GET,
    return: null,
};

test('Define required parameter', () => {
    expect(generateUri(targetUrl, req, {superdry: 'kyokudokansou'}, null, ['superdry']))
        .toBe(targetUrl + '/path/to?superdry=kyokudokansou');
});

const sandWitch = {
    path: '/path/to',
    parameter: {
        oomuro: {
            required: true,
            type: ApiParameterType.SandWitch,
        },
    },
    method: HttpMethods.GET,
    return: null,
};

test('Define sandwitch parameter', () => {
    expect(generateUri(targetUrl, sandWitch, {oomuro: 'sakurako'}, 'oomuro'))
        .toBe(targetUrl + '/path/to/oomuro/sakurako');
});

const sandWitch_multiparam = {
    path: '/path/to',
    parameter: {
        oomuro: {
            required: true,
            type: ApiParameterType.SandWitch,
        },
        yuru: {
            required: false,
            type: ApiParameterType.Query,
        },
    },
    method: HttpMethods.GET,
    return: null,
};

test('Defined requied SandWitch and Query parameter', () => {
    expect(generateUri(targetUrl, sandWitch_multiparam, {oomuro: 'sakurako', yuru: 'yuri'}, 'oomuro', ['yuru']))
        .toBe(targetUrl + '/path/to/oomuro/sakurako?yuru=yuri');
});

const multiparam = {
    path: '/path/to',
    parameter: {
        oomuro: {
            required: false,
            type: ApiParameterType.Query,
        },
        yuru: {
            required: false,
            type: ApiParameterType.Query,
        },
        seikatu: {
            required: false,
            type: ApiParameterType.Query,
        },
    },
    method: HttpMethods.GET,
    return: null,
};

test('multiple not required parameter', () => {
    expect(generateUri(targetUrl, multiparam, {oomuro: 'sakurako', yuru: 'yuri', seikatu: 'hogo'}, null, ['yuru', 'oomuro', 'seikatu']))
        .toBe(targetUrl + '/path/to?oomuro=sakurako&seikatu=hogo&yuru=yuri');
});
