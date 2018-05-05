import 'whatwg-fetch';
import * as puppeteer from 'puppeteer';
import generateRequest from './generateRequest';
import {ApiData} from "../ApiData";
import {HttpMethods} from "../HttpMethods";
import * as Exceptions from '../Exceptions';
import generateUri from "../generateUri/generateUri";

declare const global: { __BROWSER__: puppeteer.Browser };

const blank = {
    path: '/path/to',
    parameter: {
    },
    method: HttpMethods.GET,
    return: ''
};

const timeout = 5000;

describe('generateRequest', () => {
    let page: puppeteer.Page;
    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto('https://google.com');
    }, timeout);

    afterAll(async () => {
        await page.close();
    });

    it('test test', async () => {
        let text = await page.evaluate((args) => {
            const generateUri_1 = {
                default: new Function(args.innerFunc)
            };
            const test = new Function(args.testFunc);
            const result = test(args.url, args.data);
            return result instanceof Function;
        }, {
            testFunc: generateRequest.toString(),
            innerFunc: generateUri.toString(),
            url: 'https://example.com',
            data: blank
        });
        console.log(text);
        expect(1).toBe(1);
    });
});
