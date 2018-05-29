export interface IAPIKey {
    ApiKey: string;
    ApiSecretKey: string;
}

export interface IToken {
    Token: string;
    TokenSecret?: string; // in oauth2.0, TokenSecret is undefined.
}
