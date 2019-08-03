import CONST from './const';
import { _Object } from 'customInterface';
const proAccountBaseUrl = 'https://www.test-teye.com/sso';//个人测试用帐号系统后端：服务器
const devAccountBaseUrl = 'https://www.test-teye.com/sso';//个人测试用帐号系统后端：本地
const proBaseUrl = 'http://18.139.226.56:8080';
const devBaseUrl:string = 'http://18.139.226.56:8080';
const proBaseUrls = {
    baseUrl1:'http://18.139.226.56:8080'
}

interface conf {
    baseUrl?:string,
    accountBaseUrl?:string
}

export default (function () {
    let config:conf = {};
    switch(process.env.NODE_ENV){
        case 'production':
            config.baseUrl = proBaseUrl ;
            config.accountBaseUrl = proAccountBaseUrl;
            break;
        case 'development':
            config.baseUrl = devBaseUrl ;
            config.accountBaseUrl = devAccountBaseUrl;
            break;
        default:
            config.baseUrl = 'http://' + location.host + '/' + process.env.NODE_ENV.split('_')[1];
            config.accountBaseUrl = 'http://' + location.host + '/' + process.env.NODE_ENV.split('_')[1];
    }
    return config;
})();

const resourceBaseUrl = 'http://18.222.66.96'

const apiTest:Array<string> = [];
let temp:_Object = CONST;
Object.keys(CONST).forEach(o=>{
    apiTest.push(temp[o])
})

export {
    apiTest,
    resourceBaseUrl,
    proBaseUrl,
    devBaseUrl,
    proBaseUrls,
    proAccountBaseUrl,
    devAccountBaseUrl
}
