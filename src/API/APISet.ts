/*
* ┌───────────┐
* │無料Javaのダウンロード│
* └───────────┘
*/

import {ApiSetObject} from '../StoredObjectTypes/Service/ApiSet/ApiSetObject';
import REST from './REST/REST';

export class APISet {
    private readonly _rest: REST; // REST
    // private readonly _ws?: WebSocket; // WebSocket
    // private readonly _stream?: Streaming; // HTTP Streaming // TODO
    // private readonly _rcp?: RCP; // Remote Call Procedure // TODO

    constructor(source: ApiSetObject) {
        this._rest = new REST(source.rest);
        // this._stream = source.streaming ? new Streaming(source.streaming) : undefined;
        // this._ws = source.rtc ? new WebSocket(source.rtc) : undefined;
        //  this._rcp = source.rcp ? new RCP(source.rcp) : undefined;
    }

    get rest(): REST {
        return this._rest;
    }
}
