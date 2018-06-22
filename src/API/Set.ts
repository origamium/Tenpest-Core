/*
* ┌───────────┐
* │無料Javaのダウンロード│
* └───────────┘
*/

import {IAccount} from './Category/IAccount';
import {IChannel} from './Category/IChannel';
import {IContentList} from './Category/IContentList';
import {IDirectMessage} from './Category/IDirectMessage';
import {IUser} from './Category/IUser';

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
