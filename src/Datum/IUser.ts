export interface IUser {
    id: string;

    screenName?: string;
    providerDomain?: string;
    displayName?: string;

    avatarImage?: string;
    headerImage?: string;

    introduction?: string;
    location?: string;
    userWebPageUrl?: string;

    pinnedObject?: object[];
}
