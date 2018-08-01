/* tslint:disable */

import {IApiData} from '../../Interfaces/IApiData';
import {HttpMethods} from '../../Enums/HttpMethods';
import {IApiParameterDefinition} from '../../Interfaces/IApiParameterDefinition';
import {ApiParameterMethods} from '../../Enums/ApiParameterMethods';

import Request from './Request';
import {MultipleSandWitchParameterNotAllowed} from '../../Exception/Exceptions';
import {ICombinedParameterData} from '../../Interfaces/ICombinedParameterData';

const blank: IApiData = {
    baseUri: 'https://example.com',
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
    expect(Request.getParameterClassifier(blank.parameter))
        .toEqual({
            key: [],
            required: [],
            header: [],
            sandwitch: null,
            query: [],
        });

    expect(Request.getParameterClassifier({...blank.parameter, ...sandwitch_param}))
        .toEqual({
            key: ['yuru'],
            required: ['yuru'],
            header: [],
            sandwitch: 'yuru',
            query: [],
        });

    expect(() => Request.getParameterClassifier({...blank.parameter, ...sandwitch_err}))
        .toThrow(MultipleSandWitchParameterNotAllowed.message);

    expect(Request.getParameterClassifier(Object.assign({...blank.parameter,  ...sample1})))
        .toEqual({
            key: ['yuru', 'yuri', 'oomuro', 'sakurako', 'yoshikawa', 'chinatsu'],
            required: ['yuru', 'yuri', 'yoshikawa'],
            header: ['yuri', 'chinatsu'],
            sandwitch: 'yuru',
            query: ['oomuro', 'sakurako', 'yoshikawa'],
        });
});

const blankCombinedParameter: ICombinedParameterData = {
    definition: {},
    payload: {}
};

const errorParameter: ICombinedParameterData = {
    definition: sample1,
    payload: {},
};

const goodParameter: ICombinedParameterData = {
    definition: sample1,
    payload: {yuru: 'yuri', yuri: 'yuru', yoshikawa: 'chinatsu'},
};

const unknownPayload: ICombinedParameterData = {
    definition: sample1,
    payload: {yuru: 'yuri', yuri: 'yuru', yoshikawa: 'chinatsu', donald: 'trump'},
}

test('parameterRequireChecker method', () => {
    expect(Request.parameterChecker(blankCombinedParameter, Request.getParameterClassifier(blankCombinedParameter.definition)))
        .toEqual(true);

    expect(Request.parameterChecker(errorParameter, Request.getParameterClassifier(errorParameter.definition)))
        .toEqual(false);

    expect(Request.parameterChecker(goodParameter, Request.getParameterClassifier(goodParameter.definition)))
        .toEqual(true);

    expect(Request.parameterChecker(unknownPayload, Request.getParameterClassifier(unknownPayload.definition)))
        .toEqual(false);
});


const sandWitchUriParam: ICombinedParameterData = {
    definition: sandwitch_param,
    payload: {yuru: 'yuri~~~~~~~'}
};

const sandWitchParamIncludingExtendParam: ICombinedParameterData = {
    definition: {yuru: {...sandwitch_param.yuru, extendPath: '/followers'}},
    payload: {yuru: 'yuri'}
};

const sample1CombinedParameters: ICombinedParameterData = {
    definition: sample1,
    payload: {
        yuru:'komeri',
        yuri:'power',
        yoshikawa: 'furyroad',
    }
};

test('createUrl method', () => {
    expect(Request.createUri(blank, blankCombinedParameter, Request.getParameterClassifier(blankCombinedParameter.definition)))
        .toEqual(blank.baseUri + blank.path);

    expect(Request.createUri(blank, sandWitchUriParam, Request.getParameterClassifier(sandWitchUriParam.definition)))
        .toEqual(blank.baseUri + blank.path + '/' + sandWitchUriParam.payload.yuru);

    expect(Request.createUri(blank, sandWitchParamIncludingExtendParam, Request.getParameterClassifier(sandWitchParamIncludingExtendParam.definition)))
        .toEqual(blank.baseUri + blank.path + '/' + sandWitchParamIncludingExtendParam.payload.yuru + sandWitchParamIncludingExtendParam.definition.yuru.extendPath);

    expect(Request.createUri(blank, sample1CombinedParameters, Request.getParameterClassifier(sample1CombinedParameters.definition)))
        .toEqual(blank.baseUri + blank.path + '/' + sample1CombinedParameters.payload.yuru);
});


test('createHeaderObject method', () => {
   expect(Request.createHeaderObject(blankCombinedParameter, Request.getParameterClassifier(blankCombinedParameter.definition)))
       .toEqual({});
   //だるい: TODO
});

test('createQueryParameterObject method', () => {
    expect(Request.createQueryParameterObject(blankCombinedParameter, Request.getParameterClassifier(blankCombinedParameter.definition)))
        .toEqual({});
    //だるい: TODO
});
