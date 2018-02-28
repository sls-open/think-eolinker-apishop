declare module 'thinkjs' {
    interface Think extends ThinkEoApi.EoApiExtend {
    }

    interface Context extends ThinkEoApi.EoApiExtend {
    }

    interface Controller extends ThinkEoApi.EoApiExtend {
    }

    interface Service extends ThinkEoApi.EoApiExtend {
    }

    interface Logic extends ThinkEoApi.EoApiExtend {
    }
}

declare namespace ThinkEoApi {
    interface EoApiExtend {
        eoApi(type: string, data: object): Promise<any>;
    }
}

export = EoApi;