/* tslint:disable */
import {MultipleSandWitchParameterNotAllowed} from '../../../../Exception/Exceptions';
import {HttpMethods} from '../../../../Enums/HttpMethods';
import {IApiParameterDefinition} from '../../../../Interfaces/IApiParameterDefinition';
import getParameterKeys from './getParameterKeys';
import {ApiParameterMethods} from '../../../../Enums/ApiParameterMethods';
import {IApiData} from '../../../../Interfaces/IApiData';

const blank: IApiData = {
    baseUri: '',
    path: '/path/to',
    parameter: {
    },
    method: HttpMethods.GET,
    return: null,
};

const sandwitch_param: IApiParameterDefinition = {
    yuru: {
        required: true,
        type: ApiParameterMethods.SandWitch,
    },
};

const sandwitch_err: IApiParameterDefinition = {
    yuru: {
        required: true,
        type: ApiParameterMethods.SandWitch,
    },
    yuri: {
        required: false,
        type: ApiParameterMethods.SandWitch,
    },
};

const sample1: IApiParameterDefinition = {
    yuru: {
        required: true,
        type: ApiParameterMethods.SandWitch,
    },
    yuri: {
        required: true,
        type: ApiParameterMethods.Header,
    },
    oomuro: {
        required: false,
        type: ApiParameterMethods.Query,
    },
    sakurako: {
        required: false,
        type: ApiParameterMethods.Query,
    },
    yoshikawa: {
        required: true,
        type: ApiParameterMethods.Query,
    },
    chinatsu: {
        required: false,
        type: ApiParameterMethods.Header,
    },
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
            query: [],
        });
    expect(() => getParameterKeys(Object.assign({}, blank, {parameter: sandwitch_err})))
        .toThrow(MultipleSandWitchParameterNotAllowed.message);
    expect(getParameterKeys(Object.assign({}, blank, {parameter: sample1})))
        .toEqual({
            key: ['yuru', 'yuri', 'oomuro', 'sakurako', 'yoshikawa', 'chinatsu'],
            required: ['yuru', 'yuri', 'yoshikawa'],
            header: ['yuri', 'chinatsu'],
            sandwitch: 'yuru',
            query: ['oomuro', 'sakurako', 'yoshikawa'],
        });

});
