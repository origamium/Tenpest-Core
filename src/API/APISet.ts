/*
* ┌───────────┐
* │無料Javaのダウンロード│
* └───────────┘
*/

import {ApiSetObject} from '../StoredObjectTypes/Service/ApiSet/ApiSetObject';
// import Streaming from './Streaming';
import REST from './REST';
// import RCP from './RCP';
import Websocket from './Websocket';

export class APISet {
    private readonly _rest: REST; // REST
    private readonly _ws?: Websocket; // WebSocket
    // private readonly _stream?: Streaming; // HTTP Streaming // TODO
    // private readonly _rcp?: RCP; // Remote Call Procedure // TODO

    constructor(source: ApiSetObject) {
        this._rest = new REST(source.rest);
        // this._stream = source.streaming ? new Streaming(source.streaming) : undefined;
        this._ws = source.rtc ? new Websocket(source.rtc) : undefined;
        //  this._rcp = source.rcp ? new RCP(source.rcp) : undefined;
    }

    get rest(): REST {
        return this._rest;
    }

    get ws(): Websocket {
        if (this._ws) {
            return this._ws;
        }
        throw new Error('RTC(Real Time Connection) API set is not defined.');
    }
}
