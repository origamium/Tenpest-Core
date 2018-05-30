import {Unit} from '../Unit';

export interface IContentList {
    getContentList: Unit;
    getContentDetail?: Unit;

    getPinnedContent?: Unit;

    postContent: Unit;
    patchContent?: Unit;
    deleteContent?: Unit;

    postContentRepeat?: Unit;
    deleteContentRepeat?: Unit;

    postContentFavorite?: Unit;
    deleteContentFavorite?: Unit;

    postContentPin?: Unit;
    deleteContentPin?: Unit;

    postContentReaction?: Unit;
    deleteContentReaction?: Unit;
}
