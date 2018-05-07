import * as puppeteer from 'puppeteer';
import * as Exceptions from '../Exceptions';
import generateUri from '../generateUri/generateUri';
import {HttpMethods} from '../HttpMethods';
import {IApiData} from '../IApiData';
import generateRequest from './generateRequest';

declare const global: { __BROWSER__: puppeteer.Browser };

const blank: IApiData = {
    path: '/path/to',
    parameter: {
    },
    method: HttpMethods.GET,
    return: null,
};

const timeout = 5000;

describe('generateRequest', () => {
    let page: puppeteer.Page;
    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto('./generateRequestSpec.html');
    }, timeout);

    afterAll(async () => {
        await page.close();
    });

    it('test test', async () => {
        const text = await page.evaluate((args) => {
            return 0;
        }, {
            data: blank,
        });
        console.log(text);
        expect(1).toBe(1);
    });
});
