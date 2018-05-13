import {SignType} from "../Enums/SignType";

export interface IOAuth1Parameters {
    oauth_consumer_key: string;
    oauth_token?: string;
    oauth_signature_method: SignType;
    oauth_timestamp: string | number;
    oauth_nonce: string;
    oauth_version: string;
}
