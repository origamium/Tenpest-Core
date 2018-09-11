/* tslint:disable */

import DataSet from './DataSet';
import Twitter from '../DefaultSupport/Twitter';
import * as data from '../testdata/twitter/home_timeline.json';
const instance = new DataSet(Twitter.service.dataSet);

describe('dynamizr working tests', () => {
    test('exactly data normalize', () => {
        const result = instance.normalize('statusList', data);
        expect(result.entities).toHaveProperty('users');
        expect(result.entities).toHaveProperty('contents');
        expect(result.result).toEqual(['240558470661799936', '240556426106372096', '240539141056638977']);
    });
});


