import {AuthorizationUnitObject} from './AuthorizationUnitObject';
import {RestApiUnits} from './RestApiUnitObject';

export type ApiSetObject = {
    authorization: AuthorizationUnitObject,
    rest: RestApiUnits,
    streaming?: object, // HTTP Streaming API. // TODO
    rtc?: object, // real-time connection. // TODO
    rcp?: object, // remote call procedure api. // TODO
};
