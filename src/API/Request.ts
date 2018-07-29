import {AxiosRequestConfig} from 'axios';
import {IApiData} from '../Interfaces/IApiData';
import {IApiParameterDefinition} from '../Interfaces/IApiParameterDefinition';
import {IApiPayload} from '../Interfaces/IApiPayload';
import {IAuthorizedApiData} from '../Interfaces/IAuthorizedApiData';

export default class Request {
    public static createUri(): string {
        return '';
    }

    public static createQueryParameter(): object {
        return {};
    }

    public static createHeader(): object {
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
