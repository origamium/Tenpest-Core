import {RestApiUnits} from './RestApiUnitObject';
import {AuthorizationUnitObject} from './AuthorizationUnitObject';

export type ApiSetObject = {
    authorization: AuthorizationUnitObject,
    rest: RestApiUnits,
    rtc?: object, // real-time connection. // TODO
};
