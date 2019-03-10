export interface IAPIKey {
    ApiKey: string;
    ApiSecretKey?: string; // if "IAuthInfo.official" was available, ApiSecretKey may be undefined, "
}

export interface IToken {
    Token: string;
    TokenSecret?: string; // in oauth2.0, TokenSecret is undefined.
}
