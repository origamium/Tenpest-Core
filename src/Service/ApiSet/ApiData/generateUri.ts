import {ApiData} from "./ApiData";
import qs =  require('query-string');

export interface ApiTemplateValue {
    [key: string]: string //  : parameter data.
}

const queryStringify = (queryParameterKeys: Array<string>, value: ApiTemplateValue): string => (
    queryParameterKeys.length ? ('?' + qs.stringify(value)) : ''
);

export default (
    apiurl: string,
    data: ApiData,
    value: ApiTemplateValue,
    sandWitchedParameterKey: string | null = null,
    queryParameterKeys: Array<string> = []): string =>
    {
        let r = apiurl + data.path;
        if(sandWitchedParameterKey) {
            r += '/' + sandWitchedParameterKey + '/' + value[sandWitchedParameterKey]
            delete value[sandWitchedParameterKey];
            r += queryStringify(queryParameterKeys, value)
        }else{
            r += queryStringify(queryParameterKeys, value)
        }
        return r;
    }
