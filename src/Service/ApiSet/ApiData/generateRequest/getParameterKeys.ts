import {IApiData} from "../IApiData";
import {ApiParameterType} from "../IApiParameter";
import * as Exceptions from "../Exceptions";

export interface parameterKeysObject {
    key: Array<string>;
    required: Array<string>;
    header: Array<string>;
    sandwitch: string | null;
    query: Array<string>;
}

export default (data: IApiData): parameterKeysObject => {
    const parameters = Object.keys(data.parameter);let sandWitchedParameterKey: string | null = null;
    const sandwitches = parameters.filter((key: string) => data.parameter[key].type === ApiParameterType.SandWitch)

    let sandwitch: string | null = null;
    if(sandwitches.length > 1){
        throw Exceptions.MultipleSandWitchParameterNotAllowed;
    }else if(sandwitches.length === 1){
        sandwitch = sandwitches[0];
    }

    return {
        key: parameters,
        required: parameters.filter((key: string) => data.parameter[key].required),
        header: parameters.filter((key: string) => data.parameter[key].type === ApiParameterType.Header),
        sandwitch,
        query: parameters.filter((key: string) => data.parameter[key].type === ApiParameterType.Query)
    }
}
