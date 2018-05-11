import * as Exceptions from '../../../Exception/Exceptions';
import generateUri from '../uri/generateUri';
import {IApiData} from '../../Interfaces/IApiData';
import getParameterKey, {parameterKeysObject} from '../parameterKeys/getParameterKeys';
import {IApiValueTemplate} from "../../Interfaces/IApiValueTemplate";

export default (apiUrl: string, data: IApiData): Function => {
    const parameterKeys: parameterKeysObject = getParameterKey(data);
    return (value: IApiValueTemplate = {}): Request => {
        const valueKeys = Object.keys(value);
        if (parameterKeys.required.filter((key: string) => valueKeys.includes(key)).length !== parameterKeys.required.length) {
            throw Exceptions.RequiredParameterNotFound;
        }

        if (valueKeys.map((item) => parameterKeys.key.includes(item)).includes(false)) {
            throw Exceptions.NotDefinedParameterFound;
        }

        const Header = new Headers();
        parameterKeys.header
            .filter((key: string) => valueKeys.includes(key))
            .forEach((key: string) => {
                Header.append(key, value[key]);
                delete value[key];
            });

        const Init = {
            method: data.method,
            headers: Header,
        };
        return new Request(generateUri(apiUrl, data, value, parameterKeys.sandwitch, parameterKeys.query), Init);
    };
};
