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

/*
 * Authorizationクラスは認証に関する一貫したデータの入出力と管理を行います。すべてのメソッドはAPIとの通信に必要なデータの生成のみを行い、通信を行いません。
 * OAuth1, 2のみをサポートしています。
 */

export default class Authorization {
    private readonly info: IAuthInfo;
    private readonly auth: any;

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

    public getAuthorizationData(token: IToken, apiData: IApiData, payload: IApiPayload): ICombinedParameterData {
        return this.auth.getAuthorizationData(this.info, token, apiData, payload);
    }
}
