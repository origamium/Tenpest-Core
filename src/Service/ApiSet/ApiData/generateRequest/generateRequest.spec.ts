import generateRequest from './generateRequest';
import {HttpMethods} from "../HttpMethods";
import {ApiParameterType} from "../ApiParameter";
import * as puppeteer from 'puppeteer';
declare const global: {__BROWSER__ : puppeteer.Browser};

const targetUrl = 'https://example.com';

const sandWitch_multiparam = {
    path: '/path/to',
    parameter: {
        'oomuro': {
            required: true,
            type: ApiParameterType.SandWitch,
        },
        'yuru': {
            required: false,
            type: ApiParameterType.Query,
        }
    },
    method: HttpMethods.GET,
    return: ''
};

const timeout = 5000;
describe('generateRequest', () => {
    let page: puppeteer.Page;

    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
    });

    afterAll(async () => {
        await page.close();
    });

    it('Define sandwitch parameter', async () => {
        await expect(1).toBe(1);
    })
});
