import {OAuthVersion} from '../../Enums/OAuthVersion';
import {UnknownAuthorizationMethod} from '../../Exception/Exceptions';
import {IApiData} from '../../Interfaces/IApiData';
import {IApiPayload} from '../../Interfaces/IApiPayload';
import {IAuthInfo} from '../../Interfaces/IAuthInfo';
import {ICombinedParameterData} from '../../Interfaces/ICombinedParameterData';
import {IAPIKey, IToken} from '../../Interfaces/IKeys';
import {AuthorizationUnitObject} from '../../StoredObjectTypes/Service/ApiSet/AuthorizationUnitObject';
import OAuth1 from './OAuth1';
import OAuth2 from './OAuth2';

export default class Authorization {
    private readonly info: IAuthInfo;
    public auth: OAuth1 | OAuth2;

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
                this.auth = new OAuth1();
                break;
            case OAuthVersion.OAuth2:
                this.auth = new OAuth2();
                break;
            default:
                throw UnknownAuthorizationMethod;
        }
    }

    public getAuthorizationData(api: IApiData, token: IToken, payload: IApiPayload): ICombinedParameterData {
        return this.auth.getAuthorizationData(api, this.info, token, payload);
    }
}
