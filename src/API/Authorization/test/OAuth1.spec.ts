/* tslint:disable */
import OAuth1 from '../OAuth1';
import {IApiData} from '../../../Interfaces/IApiData';
import {HttpMethods} from '../../../Enums/HttpMethods';
import {IAPIKey} from '../../../Interfaces/IKeys';

const auth = new OAuth1();

const apidata: IApiData = {
    baseUri: "https://example.com/",
    path: "yeah/good",
    parameter: {},
    method: HttpMethods.GET,
    return: null
};

const apikey: IAPIKey = {
    ApiKey: "qweoiruouwtqiuoiequioqreuqowirueioqurioe",
    ApiSecretKey: "rjti4qojeioqjfiojio240ut0943085904809528038502"
}

describe("OAuth1", () => {
    it("request auth token", () => {
        const target = auth.requestAuthToken(apidata, apikey, "https://google.com")
        console.log(target);
        expect(target).toEqual(0)
    })
})
