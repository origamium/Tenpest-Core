import {OAuthSignType} from '../Enums/OAuthSignType';

export interface ISignatureParameter {
    oauth_consumer_key: string;
    oauth_token?: string;
    oauth_signature_method: OAuthSignType;
    oauth_timestamp: string | number;
    oauth_nonce: string;
    oauth_version: string;
}
