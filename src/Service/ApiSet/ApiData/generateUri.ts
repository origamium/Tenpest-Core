import {ApiData} from "./ApiData";
import qs =  require('query-string');
import {ApiParameterType} from "./ApiParameter";

export interface ApiTemplateValue {
    [key: string]: string //  : parameter data.
}

export default (apiurl: string, data: ApiData): Function => {
    const parameterKeys = Object.keys(data.parameter);
    const requiredParameterKeys = parameterKeys.filter((key: string) => (data.parameter[key].required));

    const sandWitchedParameterKeys = parameterKeys.filter((key: string) => (data.parameter[key].type === ApiParameterType.SandWitch));
    let sandWitchedParameterKey: string | null = null;
    if(sandWitchedParameterKeys.length > 1){
        throw new Error('Multiple SandWitched parameter is not allowed.');
    }else if(sandWitchedParameterKeys.length == 1){
        sandWitchedParameterKey = sandWitchedParameterKeys[0];
    }

    return (value: ApiTemplateValue = {}): string => {
        const valueKeys = Object.keys(value);
        if(requiredParameterKeys.filter((key: string) => valueKeys.includes(key)).length !== requiredParameterKeys.length) {
            throw new Error('Required parameter not found.');
        }

        if(valueKeys.map((item) => parameterKeys.includes(item)).includes(false)){
            throw new Error('Contains not defined parameters.')
        }

        let r = apiurl + data.path;
        if(!sandWitchedParameterKey){
            return r + ((valueKeys.length > 0) ? ('?' + qs.stringify(value)) : '');
        }else{
            r += '/' + sandWitchedParameterKey + '/' + value[sandWitchedParameterKey];
            valueKeys.splice(valueKeys.indexOf(sandWitchedParameterKey), 1);
            delete value[sandWitchedParameterKey];
            return r + ((valueKeys.length > 0) ? ('?' + qs.stringify(value)) : '');
        }
    }
}
