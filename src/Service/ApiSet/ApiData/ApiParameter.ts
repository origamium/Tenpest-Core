
// SandWich Payload type is only one. Multiple SandWich Payload is not allowed. it's will throw exception.
export enum ApiPayloadType {
    Query = "Query", // i.e. value=supervalue
    SandWitch = "SandWitch", // i.e. /user/[:id]
}

export interface ApiParameter {
    [key: string] : {
        required: boolean,
        type: ApiPayloadType.Query | ApiPayloadType.SandWitch,
    }
}
