import qs =  require('query-string');
import {IApiData} from '../../../../Interfaces/IApiData';
import {IApiPayload} from '../../../../Interfaces/IApiPayload';

const queryStringify = (queryParameterKeys: string[], value: IApiPayload): string => (
    queryParameterKeys.length ? ('?' + qs.stringify(value)) : ''
);

export default (
    apiUrl: string,
    data: IApiData,
    value: IApiPayload,
    sandWitchedParameterKey: string | null = null,
    queryParameterKeys: string[] = []): string => {
        let r = apiUrl + data.path;
        if (sandWitchedParameterKey) {
            r += '/' + sandWitchedParameterKey + '/' + value[sandWitchedParameterKey];
            delete value[sandWitchedParameterKey];
        }
        r += queryStringify(queryParameterKeys, value);
        return r;
    };
