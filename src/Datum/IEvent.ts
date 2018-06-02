import {IStatus} from './IStatus';

export interface IEvent {
    id: string;
    eventName: string; // e.g. 'Liked', 'Favourite', 'Followed'.
    sourceUser: string;
    target?: IStatus;
}
