export default abstract class OAuth {
    abstract pinAuthorization(): void;
    abstract requestToken(tempToken: string | object): void;
    abstract getAuthorizationData(): object;

    abstract export(): void;
}
