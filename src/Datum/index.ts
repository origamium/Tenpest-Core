import {IEvent, EventProperties} from './Event';
import {IReaction, ReactionProperties} from './Reaction';
import {IUser, UserProperties} from './User';
import {IReplyTo, ReplyToProperties} from './ReplyTo';
import {IThread, ThreadProperties} from './Thread';
import {IStatus, StatusProperties} from './Status';

export interface IDataType {
    user: IUser;
    status: IStatus;
    event: IEvent;
    thread: IThread;
    replyTo: IReplyTo;
    reaction: IReaction;
}

export const DataProperties = {
    user: UserProperties,
    status: StatusProperties,
    event: EventProperties,
    thread: ThreadProperties,
    replyTo: ReplyToProperties,
    reaction: ReactionProperties,
};
