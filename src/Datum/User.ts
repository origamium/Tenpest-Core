
export enum UserProperties {
    id = 'id',
    screenName = 'screenName',
    displayName = 'displayName',
    providerDomain = 'providerDomain',
    avatarImage = 'avatarImage',
    headerImage = 'headerImage',
    introduction = 'introduction',
    location = 'location',
    userWebPageUrl = 'userWebPageUrl',
    pinnedObject = 'pinnedObject',
}

export interface IUser {
    [UserProperties.id]: string;

    [UserProperties.screenName]?: string;
    [UserProperties.displayName]?: string;
    [UserProperties.providerDomain]?: string;

    [UserProperties.avatarImage]?: string;
    [UserProperties.headerImage]?: string;

    [UserProperties.introduction]?: string;
    [UserProperties.location]?: string;
    [UserProperties.userWebPageUrl]?: string;

    [UserProperties.pinnedObject]?: object[];
}
