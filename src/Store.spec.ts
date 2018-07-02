/* tslint:disable */
import Store from './Store';
import twitterData from './DefaultSupport/Twitter';

let store = new Store();
test('はい', () => {
    expect(store._load(twitterData)).toBe(0);
});
