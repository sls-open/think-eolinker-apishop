module.exports = {
    // IP地址查询
    queryIPInfo: {
        path: 'common/ip/queryIPInfo',
        params: {
            ip: ''
        }
    },
    // 中英数_验证码识别
    recognizeVerifyCodeComplicate: {
        path: 'common/checkcode/recognizeVerifyCodeComplicate'
    },
    // 英数_验证码识别
    recognizeVerifyCodeSimple: {
        path: 'common/checkcode/recognizeVerifyCodeSimple'
    },
    // 简单验证码识别
    recognizeSimpleCode: {
        path: 'common/checkcode/recognizeSimpleCode'
    },
    // 区号查询
    queryAddrByAreaCode: {
        path: 'common/postcode/queryAddrByAreaCode'
    },
    // 公交、地铁路线规划
    queryRoutes: {
        path: 'common/direction/queryRoutes'
    },
    // 标准体重计算器
    getStandardWeightTable: {
        path: 'common/BMI/getStandardWeightTable'
    },
    // 快递物流查询
    getExpressInfo: {
        path: 'common/express/getExpressInfo'
    },
    // 汉语词典
    queryChineseWords: {
        path: 'common/dictionary/queryChineseWords'
    },
    // 新华字典
    queryChineseWord: {
        path: 'common/dictionary/queryChineseWord'
    },
    // POI检索
    queryPolygonPOI: {
        path: 'common/POI/queryPolygonPOI'
    },
    // 标准中文电码查询
    convertChineseToCode: {
        path: 'common/code/convertChineseToCode'
    },
    // 火车票查询
    getLeftTicket: {
        path: 'common/train/getLeftTicket'
    },
    // 节假日查询
    queryHoliday: {
        path: 'common/calendar/queryHoliday'
    },
    // 万年历查询
    queryCalendar: {
        path: 'common/calendar/queryCalendar'
    },
    // 汇率查询
    getExchangeByCurrency: {
        path: 'common/exchange/getExchangeByCurrency'
    },
    // 二十四节气查询
    get24Jieqi: {
        path: 'common/jieqi/Get24Jieqi'
    },
    // 全国油价查询
    getOilPriceToday: {
        path: 'common/oil/getOilPriceToday'
    },
    // 经纬度地址转换
    exchangeLatLngByAddr: {
        path: 'common/exchange/exchangeLatLngByAddr'
    },
    // 全国天气预报
    get15DaysWeatherByArea: {
        path: 'common/weather/get15DaysWeatherByArea'
    },
    // 驾考题库
    examGetQuestions: {
        path: 'transport/exam/getQuestions'
    },
    // 邮编查询
    postcodeGetQuestions: {
        path: 'common/postcode/getQuestions'
    },
    // 中国省市区查询
    postcodeGetAddrs: {
        path: 'common/postcode/getAddrs'
    },
    // 手机号归属地查询
    getLocationByPhoneNum: {
        path: 'communication/phone/getLocationByPhoneNum'
    },
    // 短信服务
    sendSms: {
        path: 'communication/sms/send'
    }
};