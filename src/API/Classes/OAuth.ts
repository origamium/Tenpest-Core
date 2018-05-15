import {AuthMethods} from "../Enums/AuthMethods";

export default abstract class OAuth {
    abstract pinAuthorization(method: AuthMethods): void;
    abstract requestToken(tempToken: string | object): void;
    abstract getAuthorizationData(): object;

    abstract export(): object;
}
