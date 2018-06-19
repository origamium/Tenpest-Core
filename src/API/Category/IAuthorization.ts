import {Unit} from '../Unit';

export interface IAuthorization {
    requestAuthorizationToken?: Unit;
    authorizeUri: Unit;
    requestToken: Unit;
    refreshToken?: Unit;
}
