
export enum ReplyToProperties {
    id = 'id',
    targetId = 'targetId',
    targetUserId = 'targetUserId',
    sourceUserId = 'sourceUserId',
}

export interface IReplyTo {
    [ReplyToProperties.id]: string;
    [ReplyToProperties.targetId]: string;
    [ReplyToProperties.targetUserId]?: string;
    [ReplyToProperties.sourceUserId]?: string;
}
