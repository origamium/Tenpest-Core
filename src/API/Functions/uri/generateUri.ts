import qs =  require('query-string');
import {IApiData} from '../../Interfaces/IApiData';
import {IApiValueTemplate} from "../../Interfaces/IApiValueTemplate";

const queryStringify = (queryParameterKeys: string[], value: IApiValueTemplate): string => (
    queryParameterKeys.length ? ('?' + qs.stringify(value)) : ''
);

export default (
    apiUrl: string,
    data: IApiData,
    value: IApiValueTemplate,
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
