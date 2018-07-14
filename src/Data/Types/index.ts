import {EventProperties, IEvent} from './Event';
import {IReaction, ReactionProperties} from './Reaction';
import {IReplyTo, ReplyToProperties} from './ReplyTo';
import {IStatus, StatusProperties} from './Status';
import {IThread, ThreadProperties} from './Thread';
import {IUser, UserProperties} from './User';

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

export type Data = keyof IDataType;
