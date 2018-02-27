const eps = {
    eoApi: require('./request')
};

module.exports = function (think) {
    if (!think || !think.config || typeof think.config !== 'function') {
        throw Error('请把think对象传进来');
    }

    let eolinkerConfig = think.config('eolinker');

    if (!eolinkerConfig) {
        throw Error('请配置eolinker参数');
    }

    if (!eolinkerConfig.apiKey) {
        throw Error('请配置eolinker.apiKey参数');
    }

    if (!eolinkerConfig.host) {
        eolinkerConfig.host = 'https://api.apishop.net/';
        think.config('eolinker', eolinkerConfig);
    }

    return {
        controller: eps,
        context: eps,
        logic: eps,
        service: eps
    };
}