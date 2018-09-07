import {ApiParameterMethods} from '../Enums/ApiParameterMethods';
import {AuthorizeMethod} from '../Enums/AuthorizeMethod';
import {HttpMethods} from '../Enums/HttpMethods';
import {OAuthVersion} from '../Enums/OAuthVersion';
import {schemaTypes} from '../Enums/schemaTypes';
import {SignMethod} from '../Enums/SignMethod';
import {SignSpace} from '../Enums/SignSpace';
import {ProviderObject} from '../StoredObjectTypes/Provider/ProviderObject';
import {ApiSetObject} from '../StoredObjectTypes/Service/ApiSet/ApiSetObject';
import {DataSets} from '../StoredObjectTypes/Service/DataSet/DataSetObject';
import {ServiceObject} from '../StoredObjectTypes/Service/ServiceObject';

const serviceKey = 'Twitter';

const apiSet: ApiSetObject = {
    authorization: {
        oauthVersion: OAuthVersion.OAuth1,
        authMethod: AuthorizeMethod.PIN,
        signMethod: SignMethod.hmac,
        signSpace: SignSpace.Header,
        redirectUrl: 'https://google.com',
        requestAuthorizeTokenPath: 'oauth/request_token',
        requestAuthorizePagePath: 'oauth/authorize',
        requestAccessTokenPath: 'oauth/access_token',
    },
    rest: {
        updateStatus: {
            path: 'statuses/update',
            httpMethod: HttpMethods.POST,
            parameterDefinition: {
                status: {
                    required: true,
                    type: ApiParameterMethods.Query,
                },
                in_reply_to_status_id: {
                    required: false,
                    type: ApiParameterMethods.Query,
                },
            },
            returnedDataKey: 'status',
        },
        homeTimeline: {
            path: 'statuses/home_timeline',
            httpMethod: HttpMethods.GET,
            parameterDefinition: {},
            returnedDataKey: 'statusList',
        },
        mentionsTimeline: {
            path: 'statuses/mentions_timeline',
            httpMethod: HttpMethods.GET,
            parameterDefinition: {},
            returnedDataKey: 'statusList',
        },
    },
};

const dataSet: DataSets = {
    status: {
        key: 'status',
        schema: {
            name: 'contents',
            type: schemaTypes.Entity,
            idAttribute: 'id_str',
            transform: {
                id: 'id_str',
                date: 'created_at',
                content: {
                    text: 'text',
                    entity: 'entities',
                },
            },
        },
    },
    statusList: {
        key: 'status',
        schema: {
            name: 'contents',
            type: schemaTypes.Array,
            idAttribute: 'id_str',
            transform: {
                id: 'id_str',
                date: 'created_at',
                content: {
                    text: 'text',
                    entity: 'entities',
                },
            },
            definition: {
                user: {
                    name: 'users',
                    type: schemaTypes.Entity,
                    idAttribute: 'id_str',
                    transform: {
                        id: 'id_str',
                        screen_name: 'screen_name',
                        display_name: 'name',
                        icon: 'profile_image_url_https',
                        header: 'profile_background_image_url_https',
                        bio: 'description',
                    },
                },
            },
        },
    },
    user: {
        key: 'user',
        schema: {
            name: 'user',
            type: schemaTypes.Entity,
            idAttribute: 'id_str',
            transform: {
                id: 'id_str',
            },
        },
    },
};

const service: ServiceObject = {
    serviceName: serviceKey,
    apiSet,
    dataSet,
};

const provider: ProviderObject = {
    serviceKey,
    providerName: 'twitter.com',
    baseUrl: 'https://twitter.com/',
    domain: 'twitter.com',
    apiKey: '',
    apiSecret: '',
};

export default {
    service,
    provider,
};
