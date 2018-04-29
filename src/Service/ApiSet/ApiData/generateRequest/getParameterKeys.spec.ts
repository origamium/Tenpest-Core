import getParameterKeys from './getParameterKeys';
import {ApiData} from "../ApiData";
import {ApiParameterType, ApiParameter} from "../ApiParameter";
import {HttpMethods} from "../HttpMethods";

const blank = {
    path: '/path/to',
    parameter: {
    },
    method: HttpMethods.GET,
    return: ''
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
});
