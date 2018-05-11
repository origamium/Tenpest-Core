import * as Exceptions from '../../../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {ApiParameterType} from '../../Interfaces/IApiParameter';

export interface parameterKeysObject {
    key: string[];
    required: string[];
    header: string[];
    sandwitch: string | null;
    query: string[];
}

export default (data: IApiData): parameterKeysObject => {
    const parameters = Object.keys(data.parameter); const sandWitchedParameterKey: string | null = null;
    const sandwitches = parameters.filter((key: string) => data.parameter[key].type === ApiParameterType.SandWitch);

    let sandwitch: string | null = null;
    if (sandwitches.length > 1) {
        throw Exceptions.MultipleSandWitchParameterNotAllowed;
    } else if (sandwitches.length === 1) {
        sandwitch = sandwitches[0];
    }

    return {
        key: parameters,
        required: parameters.filter((key: string) => data.parameter[key].required),
        header: parameters.filter((key: string) => data.parameter[key].type === ApiParameterType.Header),
        sandwitch,
        query: parameters.filter((key: string) => data.parameter[key].type === ApiParameterType.Query),
    };
};
