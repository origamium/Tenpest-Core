import {AuthMethods} from "../Enums/AuthMethods";
import {IApiParameter} from '../Interfaces/IApiParameter';
import {IApiValue} from '../Interfaces/IApiValue';

export default abstract class OAuth {
    public abstract authorization(method: AuthMethods): void;
    public abstract requestToken(tempToken: string | object): void;
    public abstract getAuthorizationData(): [IApiParameter, IApiValue];

    public abstract export(): object;
}
