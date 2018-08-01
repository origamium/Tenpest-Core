import {AxiosRequestConfig} from 'axios';
import {ApiParameterMethods} from '../../Enums/ApiParameterMethods';
import * as Exceptions from '../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiParameterDefinition} from '../../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {ICombinedParameterData} from '../../Interfaces/ICombinedParameterData';

interface IParameterKeysObject {
    key: string[];
    required: string[];
    header: string[];
    sandwitch: string | null;
    query: string[];
}

export default class Request {

    public static getParameterClassifier(parameter: IApiParameterDefinition): IParameterKeysObject {
        const parameters = Object.keys(parameter);
        const sandwitches = parameters.filter((key) => parameter[key].type === ApiParameterMethods.SandWitch);

        let sandwitch: string | null = null;
        if (sandwitches.length > 1) {
            throw Exceptions.MultipleSandWitchParameterNotAllowed;
        } else if (sandwitches.length === 1) {
            sandwitch = sandwitches[0];
        }

        return {
            key: parameters,
            required: parameters.filter((key: string) => parameter[key].required),
            header: parameters.filter((key: string) => parameter[key].type === ApiParameterMethods.Header),
            sandwitch,
            query: parameters.filter((key: string) => parameter[key].type === ApiParameterMethods.Query),
        };
    }

    public static parameterChecker(parameters: ICombinedParameterData, keys: IParameterKeysObject): boolean {
        const payloadKeys = Object.keys(parameters.payload);

        for (const payloadKeyIndex in payloadKeys) {
            if (!keys.key.includes(payloadKeys[payloadKeyIndex])) {
                return false;
            }
        }

        for (const requiredKey in keys.required) {
            if (!payloadKeys.includes(keys.required[requiredKey])) {
                return false;
            }
        }

        return true;
    }

    public static createUri(data: IApiData, parameters: ICombinedParameterData, keys: IParameterKeysObject): string {
        return data.baseUri + data.path + (keys.sandwitch ? '/' + parameters.payload[keys.sandwitch] : '');
    }

    public static createQueryParameterObject(parameters: ICombinedParameterData, keys: IParameterKeysObject): object {
        return keys.query
            .filter((key) => parameters.payload[key])
            .reduce((prev, currKey) => ({
                ...prev,
                ...{currKey: parameters.payload[currKey]},
            }), {});
    }

    public static createHeaderObject(parameters: ICombinedParameterData, keys: IParameterKeysObject): object {
        return keys.header
            .filter((key) => parameters.payload[key])
            .reduce((prev, currKey) => ({
                ...prev,
                ...{currKey: parameters.payload[currKey]},
            }), {});
    }

    public static createRequest(data: IApiData, payload: IApiPayload, cert?: ICombinedParameterData)
        : AxiosRequestConfig {

        let combinedParameter: ICombinedParameterData = {
            definition: data.parameter,
            payload,
        };
        if (cert) {
            combinedParameter = {
                definition: {...combinedParameter.definition, ...cert.definition},
                payload: {...combinedParameter.payload, ...cert.payload},
            };
        }

        const classifiedKey: IParameterKeysObject = this.getParameterClassifier(combinedParameter.definition);
        if (this.parameterChecker(combinedParameter, classifiedKey)) {
            throw new Error('');
        }

        return {
            url: this.createUri(data, combinedParameter, classifiedKey),
            method: data.method,
            headers: this.createHeaderObject(combinedParameter, classifiedKey),
            params: this.createQueryParameterObject(combinedParameter, classifiedKey),
        };
    }
}
