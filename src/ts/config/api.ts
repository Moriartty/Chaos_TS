const proAccountBaseUrl = 'https://www.test-teye.com/sso';//个人测试用帐号系统后端：服务器
const devAccountBaseUrl = 'https://www.test-teye.com/sso';//个人测试用帐号系统后端：本地
const proBaseUrl = location.host;
const devBaseUrl:string = location.host;

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

const apiTest = [
    '/getAllData',
    '/postPerfData',
    '/report/com.tct.camera/getAppPMActiveInfo',
    '/report/retention',
    '/report/hotevent',
    '/report/com.tct.camera/appUserActiveInfo',
    '/report/getAppDistribution',
    '/report/getDeviceNumber',
    '/report/getAndroidVersion',
    '/report/com.tclhz.gallery/getAppVersionList',
    '/report/device-report/getDeviceActiveOfDay',
    '/report/userEngagement',
    '/report/index/getPainSpotList',
    '/report/getAppList',
    '/report/getActivityCount',
];

export {
    apiTest,
    resourceBaseUrl,
    proBaseUrl,
    devBaseUrl,
    proAccountBaseUrl,
    devAccountBaseUrl
}
