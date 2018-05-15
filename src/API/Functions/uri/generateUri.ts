import qs =  require('query-string');
import {IApiData} from '../../Interfaces/IApiData';
import {IApiValue} from "../../Interfaces/IApiValue";

const queryStringify = (queryParameterKeys: string[], value: IApiValue): string => (
    queryParameterKeys.length ? ('?' + qs.stringify(value)) : ''
);

export default (
    apiUrl: string,
    data: IApiData,
    value: IApiValue,
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
