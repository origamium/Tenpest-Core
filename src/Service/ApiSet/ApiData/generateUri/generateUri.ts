import qs =  require('query-string');
import {IApiData} from '../IApiData';

export interface ApiTemplateValue {
    [key: string]: string; //  : parameter data.
}

const queryStringify = (queryParameterKeys: string[], value: ApiTemplateValue): string => (
    queryParameterKeys.length ? ('?' + qs.stringify(value)) : ''
);

export default (
    apiUrl: string,
    data: IApiData,
    value: ApiTemplateValue,
    sandWitchedParameterKey: string | null = null,
    queryParameterKeys: string[] = []): string => {
        let r = apiUrl + data.path;
        if (sandWitchedParameterKey) {
            r += '/' + sandWitchedParameterKey + '/' + value[sandWitchedParameterKey];
            delete value[sandWitchedParameterKey];
            r += queryStringify(queryParameterKeys, value);
        } else {
            r += queryStringify(queryParameterKeys, value);
        }
        return r;
    };
