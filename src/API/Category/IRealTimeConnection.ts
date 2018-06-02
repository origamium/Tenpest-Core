import {Unit} from '../Unit';

export interface IRealTimeConnection {
    WebSocket?: Unit;
    Streaming?: Unit;
    WebHook?: Unit; // 実装予定なし
}
