import {AxiosRequestConfig} from 'axios';
import {ApiParameterMethods} from '../../Enums/ApiParameterMethods';
import * as Exceptions from '../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiParameterDefinition} from '../../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthorizedApiData} from '../../Interfaces/IAuthorizedApiData';

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

    public static createUri(): string { // TODO
        return '';
    }

    public static createQueryParameter(): object { // TODO
        return {};
    }

    public static createHeader(): object { // TODO
        return {};
    }


    public static createRequest(data: IApiData, payload: IApiPayload, cert?: IAuthorizedApiData): AxiosRequestConfig {
        let combinedParameter = {
            definition: data.parameter,
            payload,
        };
        if (cert) {
            combinedParameter = {
                definition: {...combinedParameter.definition, ...cert.definition},
                payload: {...combinedParameter.payload, ...cert.payload},
            };
        }

        return {
            url: this.createUri(), // TODO
            method: data.method,
            headers: this.createHeader(), // TODO
            params: this.createQueryParameter(), // TODO
        };
    }
}
