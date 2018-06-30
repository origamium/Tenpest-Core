import {DataProperties} from '../Datum';

export default {
    Service: {
        serviceName: 'Twitter',
        apiSet: {},
        dataSet: {
            status: {
                target: 'status',
                schema: {
                    name: 'contents',
                    type: 'Array',
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
                            type: 'Entity',
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
        },
    },
    Provider: {
        baseUrl: 'https://twitter.com/',
        domain: 'twitter.com',
        apiKey: undefined,
        apiSecret: undefined,
    },
};
