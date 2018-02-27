# think-eolinker-apishop
基于thinkJS的eolinker的官方商店API拓展。

此拓展依赖**superagent**

### 安装

```bash
cnpm install superagent --save
cnpm install think-eolinker-apishop --save
```

### 启用

`src/config/extend.js` or `src/config/moduleName/extend.js`

```js
const eolink = require('think-eolinker-apishop');
module.exports = [
    eolink(think)
];
```


### 配置eolinker官方apiKey
`src/config/config.js` or `src/config/moduleName/config.js`,因为apiKey为私密信息，一般都是在环境变量配置文件里，自行调整
```js
module.exports = {
    eolinker: {
    	//如果官方没有改变host，那么可以忽略，如果要配置，后面请加斜杠
        host: 'https://api.apishop.net/',
        apiKey: 'eolinker官方apishop中的apiKey'
    }
};
```

### 使用
`src/controller/控制器.js` or `src/controller/moduleName/控制器.js`
```js
async indexAction() {
    const resData = await this.eoApi('Get24Jieqi');
    return this.json(resData);
}
```

### API
```js
this.eoApi(type, opts);
```

#### type

type代表接口类型，目前支持如下：

- queryIPInfo   // 中英数_验证码识别


- recognizeVerifyCodeComplicate     // 中英数_验证码识别    
   

- recognizeVerifyCodeSimple // 英数_验证码识别


- recognizeSimpleCode   // 简单验证码识别


- queryAddrByAreaCode   // 区号查询


- queryRoutes   // 公交、地铁路线规划


- getStandardWeightTable    // 标准体重计算器


- getExpressInfo    // 快递物流查询


- queryChineseWords // 汉语词典


- queryChineseWord  // 新华字典


- queryPolygonPOI   // POI检索


- convertChineseToCode  // 标准中文电码查询


- getLeftTicket // 火车票查询


- queryHoliday  // 节假日查询


- queryCalendar // 万年历查询


- getExchangeByCurrency // 汇率查询


- get24Jieqi    // 二十四节气查询


- getOilPriceToday  // 全国油价查询


- exchangeLatLngByAddr  // 经纬度地址转换


- get15DaysWeatherByArea    // 全国天气预报


- examGetQuestions  // 驾考题库


- postcodeGetQuestions  // 邮编查询


- postcodeGetAddrs  // 中国省市区查询


- getLocationByPhoneNum // 手机号归属地查询

- sendSms // 短信服务

type的值是有规律的，一般都为接口的path后面的最后一个单词，个别接口后面的单词是一样的，那么再加上前面的单词组装成驼峰，例如下面：

查询IP的接口：
`common/ip/queryIPInfo` 那么后面的 `queryIPInfo` 就是type值。

驾考题库和邮编查询两个接口：
`transport/exam/getQuestions`和`common/postcode/getQuestions`，后面都叫`getQuestions`，那么这两个type则分别为：
`examGetQuestions`和`postcodeetQuestions`

像上面这种类型的目前有如下：

- examGetQuestions
- postcodeGetQuestions
- postcodeGetAddrs
- sendSms


其他的均为path的最后一个单词。

如果eolinker官方更新了API，这里面没有的话，您可以提pull request，也可以留言给我，补上，当调用不存在的类型时，会抛出异常提示。

#### opts

此值为一个对象，对象的属性就是eolinker官方API接口中的参数，看官方文档即可。