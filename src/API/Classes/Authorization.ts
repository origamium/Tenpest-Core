import {IAuthorization} from "../Interfaces/IAuthorization";
import {OAuthVersion} from "../Enums/OAuthVersion";
import {OAuthSignatureSpace} from "../Enums/OAuthSignatureSpace";
import {SignType} from "../Enums/SignType";
import {IAPIKey, IToken} from "../Interfaces/IKeys";

export default class Authorization implements IAuthorization{
    readonly oauthVersion: OAuthVersion;
    readonly oauthSignatureSpace: OAuthSignatureSpace;
    readonly signMethod: SignType;
    readonly key: IAPIKey;
    token: IToken | null;

    constructor(version, signatureSpace, signMethod, key, token = null){
        this.oauthVersion = version;
        this.oauthSignatureSpace = signatureSpace;
        this.signMethod = signMethod;
        this.key = key;
        this.token = token;
    }
}
