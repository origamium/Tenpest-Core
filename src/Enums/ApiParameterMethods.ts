// SandWich Payload type is only one. Multiple SandWich Payload is not allowed. it's will throw exception.
export enum ApiParameterMethods {
    Header = 'Header',
    Query = 'Query', // i.e. value=supervalue
    SandWitch = 'SandWitch', // i.e. /user/[:id]
}
