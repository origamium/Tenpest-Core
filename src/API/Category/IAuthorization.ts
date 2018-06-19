import {Unit} from '../../Unit/Unit';

export interface IAuthorization {
    requestAuthorizationToken?: Unit;
    authorizeUri: Unit;
    requestToken: Unit;
    refreshToken?: Unit;
}
