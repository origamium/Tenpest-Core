/*
* ┌───────────┐
* │無料Javaのダウンロード│
* └───────────┘
*/

import {IChannel} from './Category/IChannel';
import {IUser} from './Category/IUser';
import {IDirectMessage} from './Category/IDirectMessage';
import {IAccount} from './Category/IAccount';
import {IContentList} from './Category/IContentList';

export class Set {
    private readonly _authorization: object; // TODO
    private readonly _account?: IAccount;
    private readonly _user?: IUser;
    private readonly _channel?: IChannel;
    private readonly _contentList?: IContentList;
    private readonly _directMessage?: IDirectMessage;

    constructor() {
        // TODO
    }

    public get availableCategoryKeys(): string[] {
        return Object.keys(Object.assign(this));
    }
}
