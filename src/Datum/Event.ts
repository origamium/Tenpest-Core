import {IStatus} from './Status';

export enum EventProperties {
    id = 'id',
    eventName = 'eventName',
    sourceUser = 'sourceUser',
    target = 'target',
}

export interface IEvent {
    [EventProperties.id]: string;
    [EventProperties.eventName]: string; // e.g. 'Liked', 'Favourite', 'Followed'.
    [EventProperties.sourceUser]: string;
    [EventProperties.target]?: IStatus;
}
