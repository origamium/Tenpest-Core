import {IAuthorization} from "../../../Interfaces/IAuthorization";
import {IApiValueTemplate} from "../../../Interfaces/IApiValueTemplate";
import {OAuthVersion} from "../../../Enums/OAuthVersion";

export default (
    authenticate: IAuthorization,
    payload: IApiValueTemplate
) => {
    switch (authenticate.oauthVersion){
        case OAuthVersion.OAuth1:
        case OAuthVersion.OAuth2:
            return 0; //dummy
        default:
            throw new Error('oauth version error.');
    }
}
