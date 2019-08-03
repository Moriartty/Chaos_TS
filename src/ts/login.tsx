/**
 * Created by user on 18-10-20.
 */
import * as React from 'react';
import { Provider, connect } from 'react-redux';

// react 国际化
// import zhCN from 'config/language/zhCN';
// import enUS from 'config/language/enUS';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as intl from 'intl';
import * as zh from 'react-intl/locale-data/zh';
// react-intl语言包
import * as en from 'react-intl/locale-data/en';

// 需要放入本地数据库
import store from 'appStore';
import App from 'components/App';
import appAction from 'actions/app';
//引入自定义类型
import {RootProps, _Object} from 'customInterface';

// 加载全局样式
import 'less/app.less';

import 'utils/polyfill';
import { isEmpty } from './utils';

const ReactDOM = require('react-dom');// react-intl语言包
//en,zh都是对象数组，需要做下转换
const EN:_Object = en,ZH:_Object = zh;
addLocaleData([...EN.default, ...ZH.default]);
// SVG字体
// import 'utils/iconfont';

const Login = require('pages/Login');

// function chooseLocale (lang:string) {
//     switch (lang.split('-')[0]) {
//     case 'en':
//         return enUS;
//     case 'zh':
//         return zhCN;
//     default:
//         return zhCN;
//     }
// }

/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
// window.onerror = function (msg, url, row, col, error) {
//    console.error('onerror 错误信息 ↙');
//    console.log({
//        msg,  url,  row, col, error
//    });
// };

class Root extends React.Component<RootProps> {
    componentDidMount(){
        this.props.init();
    }
    render () {
        const {locale:lang,langs} = this.props;
        return (
            !isEmpty(langs)?
            <IntlProvider key={lang} locale={lang} messages={langs}>
                <Provider store={this.props.store}>
                    <App>
                        <Login/>
                    </App>
                </Provider>
            </IntlProvider>:''
        );
    }
}
const RootComponent = connect((state:any) => {
    const { locale,langs } = state.app;
    return { locale,langs };
}, dispatch=>({
    init(){
        dispatch(appAction.toggleLocale());
    }
}))(Root);

ReactDOM.render(
    <RootComponent store={store}/>
    ,
    document.getElementById('container')
);