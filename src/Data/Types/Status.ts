import {IReaction} from './Reaction';
import {IReplyTo} from './ReplyTo';
import {IThread} from './Thread';
import {IUser} from './User';

export enum StatusProperties {
    id = 'id',
    user = 'user',
    date = 'date',
    text = 'text',
    image = 'image',
    hasReaction = 'hasReaction',
    hasMention = 'hasMention',
}

export interface IStatus {
    [StatusProperties.id]: string;
    [StatusProperties.user]: IUser;
    [StatusProperties.date]: string;

    [StatusProperties.text]?: string;
    [StatusProperties.image]?: string[];

    [StatusProperties.hasReaction]?: IReaction[];
    [StatusProperties.hasMention]?: IReplyTo | IThread;
}
