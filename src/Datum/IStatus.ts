import {IReaction} from './IReaction';
import {IReplyTo} from './IReplyTo';
import {IThread} from './IThread';
import {IUser} from './IUser';

export interface IStatus {
    id: string;
    user: IUser;
    date: string;

    text?: string;
    image?: string[];

    hasReaction?: IReaction[];
    hasMention?: IReplyTo | IThread;
}
