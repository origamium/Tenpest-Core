export type AuthorizationDataObject = {
    token: string,
    tokenSecret?: string,
    refreshTokenObject?: RefreshTokenObject,
};

export type RefreshTokenObject = {
    refreshToken: string,
    tokenAcquisitionDate: number, //unix time
    tokenExpireDate: number; // unix time
}
