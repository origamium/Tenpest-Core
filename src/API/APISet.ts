/*
* ┌───────────┐
* │無料Javaのダウンロード│
* └───────────┘
*/

import RCP from './RCP';
import Websocket from './Websocket';
import Streaming from './Streaming';
import REST from './REST';

export class APISet {
    private readonly _rest: REST; // REST
    private readonly _stream: Streaming; // HTTP Streaming
    private readonly _ws: Websocket; // WebSocket
    private readonly _rcp: RCP; // Remote Call Procedure

    constructor() {
        // TODO
    }
}
