export type AuthorizationDataObject = {
    token: string,
    tokenSecret?: string,
    refreshToken?: string,
    tokenAcquisitionDate?: number, // unix time
    tokenExpireDate?: number, // unix time
};
