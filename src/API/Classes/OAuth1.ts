import generateSignature from '../Functions/signature/generateSignature';
import OAuth from "./OAuth";

export default class OAuth1 extends OAuth {
    static _now(): number {
        return Math.round(+new Date()/1000);
    }

    private _signature(): string {

    }
}
