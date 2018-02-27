/**
 * eolinker官方API接口封装
 * @param type  接口类型
 * @param data  接口参数
 * @returns {PromiseLike<T> | Promise<T>}
 */
module.exports = function (type, data = {}) {

    // 请求库
    const request = require('superagent');

    // 读取配置的eolinker参数
    const api = this.config('eolinker');

    // 读取配置所有支持的接口类型
    const configs = require('./config');

    // 检测调用的接口是否支持
    if(!configs[type]){
        throw Error(`没有找到 ${type} 相关的接口，请联系作者或自己添加pull request`);
    }

    // 请求接口并返回响应信息
    return request.get(`${api.host}${config.path}`).query(Object.assign({
        apiKey: api.apiKey
    }, data)).then(res => JSON.parse(res.text));

}