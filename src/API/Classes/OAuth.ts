import {AuthMethods} from '../Enums/AuthMethods';
import {IApiParameter} from '../Interfaces/IApiParameter';
import {IApiValue} from '../Interfaces/IApiValue';
import {IAPIKey, IToken} from '../Interfaces/IKeys';
import {SignSpace} from '../Enums/SignSpace';

export default abstract class OAuth {
    public abstract authorization(method: AuthMethods): void;
    public abstract requestToken(tempToken: string | object): void;
    public abstract getAuthorizationData(signatureSpace: SignSpace, key: IAPIKey, token: IToken, complement?: object)
        : [IApiParameter, IApiValue];

    public abstract export(): object;
}
