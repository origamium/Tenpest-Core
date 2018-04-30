import getParameterKeys from './getParameterKeys';
import {ApiData} from "../ApiData";
import {ApiParameterType, ApiParameter} from "../ApiParameter";
import {HttpMethods} from "../HttpMethods";
import {MultipleSandWitchParameterNotAllowed} from "../Exceptions";

const blank = {
    path: '/path/to',
    parameter: {
    },
    method: HttpMethods.GET,
    return: ''
};

const sandwitch_param: ApiParameter = {
    yuru: {
        required: true,
        type: ApiParameterType.SandWitch,
    }
};

const sandwitch_err: ApiParameter = {
    yuru: {
        required: true,
        type: ApiParameterType.SandWitch,
    },
    yuri: {
        required: false,
        type: ApiParameterType.SandWitch
    }
};

const sample1: ApiParameter = {
    yuru: {
        required: true,
        type: ApiParameterType.SandWitch
    },
    yuri: {
        required: true,
        type: ApiParameterType.Header
    },
    oomuro: {
        required: false,
        type: ApiParameterType.Query
    },
    sakurako: {
        required: false,
        type: ApiParameterType.Query
    },
    yoshikawa: {
        required: true,
        type: ApiParameterType.Query
    },
    chinatsu: {
        required: false,
        type: ApiParameterType.Header
    }
};

test('getParameterKeys method ', () => {
    expect(getParameterKeys(blank))
        .toEqual({
            key: [],
            required: [],
            header: [],
            sandwitch: null,
            query: [],
        });
    expect(getParameterKeys(Object.assign({}, blank, {parameter: sandwitch_param})))
        .toEqual({
            key: ['yuru'],
            required: ['yuru'],
            header: [],
            sandwitch: 'yuru',
            query: []
        });
    expect(() => getParameterKeys(Object.assign({}, blank, {parameter: sandwitch_err})))
        .toThrow(MultipleSandWitchParameterNotAllowed.message);
    expect(getParameterKeys(Object.assign({}, blank, {parameter: sample1})))
        .toEqual({
            key: ['yuru', 'yuri', 'oomuro', 'sakurako', 'yoshikawa', 'chinatsu'],
            required: ['yuru', 'yuri', 'yoshikawa'],
            header: ['yuri', 'chinatsu'],
            sandwitch: 'yuru',
            query: ['oomuro', 'sakurako', 'yoshikawa']
        });

});
