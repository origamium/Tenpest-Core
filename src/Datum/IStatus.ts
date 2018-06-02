import {IReaction} from './IReaction';
import {IUser} from './IUser';
import {IReplyTo} from './IReplyTo';
import {IThread} from './IThread';

export interface IStatus {
    id: string;
    user: IUser;
    date: string;

    text?: string;
    image?: string[];

    hasReaction?: IReaction[];
    hasMention?: IReplyTo | IThread;
}
