import {OAuthVersion} from '../../Enums/OAuthVersion';
import {UnknownAuthorizationMethod} from '../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../Interfaces/IAuthInfo';
import {IAuthorizedApiData} from '../../Interfaces/IAuthorizedApiData';
import {IAPIKey, IToken} from '../../Interfaces/IKeys';
import {AuthorizationUnitObject} from '../../StoredObjectTypes/Service/ApiSet/AuthorizationUnitObject';
import OAuth1 from './OAuth1';
import OAuth2 from './OAuth2';

export default class Authorization {
    private readonly oauth: OAuth1 | OAuth2;
    private readonly info: IAuthInfo;

    constructor(source: AuthorizationUnitObject, apiKey: IAPIKey) {
        this.info = {
            apiKey,
            oauthVersion: source.oauthVersion,
            authMethod: source.authMethod,
            signMethod: source.signMethod,
            signSpace: source.signSpace,
            scope: source.scope ? source.scope.reduce((p, c): string => p + ' ' + c, '') : undefined,
        };

        switch (this.info.oauthVersion) {
            case OAuthVersion.OAuth1:
                this.oauth = new OAuth1();
                break;
            case OAuthVersion.OAuth2:
                this.oauth = new OAuth2();
                break;
            default:
                throw UnknownAuthorizationMethod;
        }
    }

    public getAuthorizationData(token: IToken, apiData: IApiData, payload: IApiPayload): IAuthorizedApiData {
        return this.oauth.getAuthorizationData(this.info, token, apiData, payload);
    }
}
