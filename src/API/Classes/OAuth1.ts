import generateSignature from '../Functions/signature/generateSignature';

export default class OAuth1 {
    static _now(): number {
        return Math.round(+new Date()/1000);
    }

    private _signature(): string {

    }
}
