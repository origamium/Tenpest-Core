/* tslint:disable */

import DataSet from './DataSet';
import Twitter from '../DefaultSupport/Twitter';
import * as data from '../testdata/twitter/home_timeline.json';
const instance = new DataSet(Twitter.service.dataSet);

test('dummy', () => {
    console.log(instance.normalize('statusList', data));
    expect('dummy').toBe('dummy');
});
