import * as Exceptions from '../../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {ApiParameterMethods} from "../../Enums/ApiParameterMethods";

export interface parameterKeysObject {
    key: string[];
    required: string[];
    header: string[];
    sandwitch: string | null;
    query: string[];
}

export default (data: IApiData): parameterKeysObject => {
    const parameters = Object.keys(data.parameter); const sandWitchedParameterKey: string | null = null;
    const sandwitches = parameters.filter((key: string) => data.parameter[key].type === ApiParameterMethods.SandWitch);

    let sandwitch: string | null = null;
    if (sandwitches.length > 1) {
        throw Exceptions.MultipleSandWitchParameterNotAllowed;
    } else if (sandwitches.length === 1) {
        sandwitch = sandwitches[0];
    }

    return {
        key: parameters,
        required: parameters.filter((key: string) => data.parameter[key].required),
        header: parameters.filter((key: string) => data.parameter[key].type === ApiParameterMethods.Header),
        sandwitch,
        query: parameters.filter((key: string) => data.parameter[key].type === ApiParameterMethods.Query),
    };
};
