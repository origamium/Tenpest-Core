import {SignType} from "../Types/SignType";

export interface ISignatureParameter {
    oauth_consumer_key: string;
    oauth_token?: string;
    oauth_signature_method: SignType;
    oauth_timestamp: string | number;
    oauth_nonce: string;
    oauth_version: string;
}
