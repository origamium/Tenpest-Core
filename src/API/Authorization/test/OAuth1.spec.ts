/* tslint:disable */
import OAuth1 from '../OAuth1';
import {IApiData} from '../../../Interfaces/IApiData';
import {HttpMethods} from '../../../Enums/HttpMethods';
import {IAPIKey} from '../../../Interfaces/IKeys';
import {ApiParameterMethods} from '../../../Enums/ApiParameterMethods';
import {IAuthInfo} from '../../../Interfaces/IAuthInfo';
import {OAuthVersion} from '../../../Enums/OAuthVersion';
import {AuthorizeMethod} from '../../../Enums/AuthorizeMethod';
import {SignMethod} from '../../../Enums/SignMethod';
import {SignSpace} from '../../../Enums/SignSpace';

const auth = new OAuth1();


const apikey: IAPIKey = {
    ApiKey: "qweoiruouwtqiuoiequioqreuqowirueioqurioe",
    ApiSecretKey: "rjti4qojeioqjfiojio240ut0943085904809528038502"
}

const authData_header: IAuthInfo = {
    apiKey: apikey,
    oauthVersion: OAuthVersion.OAuth1,
    authMethod: AuthorizeMethod.Callback,
    signMethod: SignMethod.hmac,
    signSpace: SignSpace.Header
}

const apidata_header: IApiData = {
    baseUri: "https://example.com/",
    path: "yeah/good",
    parameter: {},
    method: HttpMethods.GET,
    return: null
};
const authData_query: IAuthInfo = {
    apiKey: apikey,
    oauthVersion: OAuthVersion.OAuth1,
    authMethod: AuthorizeMethod.Callback,
    signMethod: SignMethod.hmac,
    signSpace: SignSpace.Query
}

const apidata_query: IApiData = {
    baseUri: "https://example.com/",
    path: "yeah/good",
    parameter: {},
    method: HttpMethods.GET,
    return: null
};

describe("OAuth1 authentication test", () => {
    it("01: request auth token", () => {
        const target = auth.requestAuthToken(apidata_header, authData_header, "https://google.com")
        console.log(target.definition)
        expect(Object.keys(target.definition)).toEqual(["Authorization"])
        console.log(target.payload["Authorization"])
    })

    it("02: create authorize uri", () => {
        expect(0).toEqual(0)

    })
})
