import generateUri, {ApiTemplateValue} from './generateUri/generateUri';
import {ApiData} from "./ApiData";
import {ApiParameterType} from "./ApiParameter";

export default (apiUrl: string, data: ApiData) => {
    const parameterKeys = Object.keys(data.parameter);
    const requiredParameterKeys = parameterKeys.filter((key: string) => data.parameter[key].required);
    const headerParameterKeys = parameterKeys.filter((key: string) => data.parameter[key].type === ApiParameterType.Header);
    const sandWitchedParameterKeys = parameterKeys.filter((key: string) => data.parameter[key].type === ApiParameterType.SandWitch);
    const queryParameterKeys = parameterKeys.filter((key: string) => data.parameter[key].type === ApiParameterType.Query);

    let sandWitchedParameterKey: string | null = null;
    if(sandWitchedParameterKeys.length > 1){
        throw new Error('Multiple SandWitched parameter is not allowed.');
    }else if(sandWitchedParameterKeys.length === 1){
        sandWitchedParameterKey = sandWitchedParameterKeys[0];
    }

    return (value: ApiTemplateValue = {}): Request => {
        const valueKeys = Object.keys(value);
        if(requiredParameterKeys.filter((key: string) => valueKeys.includes(key)).length !== requiredParameterKeys.length) {
            throw new Error('Required parameter not found.');
        }

        if(valueKeys.map((item) => parameterKeys.includes(item)).includes(false)){
            throw new Error('Contains not defined parameters.')
        }

        let Header = new Headers();
        headerParameterKeys
            .filter((key: string) => valueKeys.includes(key))
            .forEach((key: string) => {
                Header.append(key, value[key]);
                delete value[key];
            });

        const Init = {
            method: data.method,
            headers: Header
        };
        return new Request(generateUri(apiUrl, data, value, sandWitchedParameterKey, queryParameterKeys), Init);
    }
}
