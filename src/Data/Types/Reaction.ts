// TODO: 画像・アイコン・絵文字どうしようか…

export enum ReactionProperties {
    id = 'id',
    name = 'name',
    reacted = 'reacted',
    reactionAmout = 'reactionAmout',
}

export interface IReaction {
    [ReactionProperties.id]?: string;
    [ReactionProperties.name]: string;
    [ReactionProperties.reacted]: boolean;
    [ReactionProperties.reactionAmout]: number;
}
