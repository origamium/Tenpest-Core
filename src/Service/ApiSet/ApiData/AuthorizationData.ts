export enum AuthType {
    OAuth = 'OAuth',
    OAuth2 = 'OAuth2',
}

export enum AuthMethod {
    PIN = 'PIN',
    Callback = 'Callback',
}

export interface AuthorizatioData {
    type: AuthType.OAuth | AuthType.OAuth2;
    method: AuthMethod.PIN | AuthMethod.Callback;
}
