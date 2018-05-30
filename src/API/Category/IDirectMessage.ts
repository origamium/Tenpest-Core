import {Unit} from '../Unit';

export interface IDirectMessage {
    // getDMChannel ,getDMHistory CAN NOT COEXISTENCE. Use register one or the other.
    getDMChannel?: Unit;
    getDMHistory?: Unit;

    postMessage?: Unit;
    patchMessage?: Unit;
    deleteMessage?: Unit;
}
