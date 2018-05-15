import {IAuthorization} from '../Interfaces/IAuthorization';
import {OAuthVersion} from '../Enums/OAuthVersion';
import {OAuthSignatureSpace} from '../Enums/OAuthSignatureSpace';
import {SignType} from '../Enums/SignType';
import {IAPIKey, IToken} from '../Interfaces/IKeys';

export default class Authorization implements IAuthorization {
    protected readonly oauthVersion: OAuthVersion;
    protected readonly oauthSignatureSpace: OAuthSignatureSpace;
    protected readonly signMethod: SignType;
    protected readonly key: IAPIKey;
    protected token: IToken | null;

    constructor(version, signatureSpace, signMethod, key, token = null){
        this.oauthVersion = version;
        this.oauthSignatureSpace = signatureSpace;
        this.signMethod = signMethod;
        this.key = key;
        this.token = token;
    }
}
