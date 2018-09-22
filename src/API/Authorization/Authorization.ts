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
import OAuth from './OAuth';

export default class Authorization {
    private readonly info: IAuthInfo;
    private readonly auth: OAuth;
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
                this.auth = OAuth1;
                break;
            case OAuthVersion.OAuth2:
                this.auth = OAuth2;
                break;
            default:
                throw UnknownAuthorizationMethod;
        }
    }

    public getAuthorizationData(token: IToken, apiData: IApiData, payload: IApiPayload): ICombinedParameterData {
        return this.auth.getAuthorizationData(this.info, token, apiData, payload);
    }
}
