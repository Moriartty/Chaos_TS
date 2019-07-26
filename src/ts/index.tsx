// import * as React from "react";
// import * as ReactDOM from "react-dom";

// import { Hello } from "components/Hello";

// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("container")
// );


import * as React from 'react';
import { Provider, connect } from 'react-redux';

// import { LocaleProvider} from 'antd';
// // 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale-provider/zh_CN';

// react 国际化
import zhCN from 'config/language/zhCN';
import enUS from 'config/language/enUS';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as intl from 'intl';
import * as zh from 'react-intl/locale-data/zh';
// react-intl语言包
import * as en from 'react-intl/locale-data/en';
// 需要放入本地数据库

import store from 'appStore';
import App from 'components/App';
import MasterPage from 'components/App/MasterPage';
import appAction from 'actions/app';
//引入自定义类型
import {RootProps,_Object} from 'customInterface';

// 加载全局样式
import 'less/app.less';

import 'utils/polyfill';
// SVG字体
import 'utils/iconfont';
const ReactDOM = require('react-dom');// react-intl语言包
//en,zh都是对象数组，需要做下转换
const EN:_Object = en,ZH:_Object = zh;
addLocaleData([...EN.default, ...ZH.default]);

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

function chooseLocale (lang:string) {
    switch (lang.split('-')[0]) {
    case 'en':
        return enUS;
    case 'zh':
        return zhCN;
    default:
        return zhCN;
    }
}

class Root extends React.Component<RootProps> {
    render () {
        const lang = this.props.locale;
        this.props.loadLang();
        return (
            <IntlProvider key={lang} locale={lang} messages={chooseLocale(lang)}>
                <Provider store={this.props.store}>
                    <App>
                        <MasterPage/>
                    </App>
                </Provider>
            </IntlProvider>
        );
    }
}
const RootComponent = connect((state:any) => {
    const { locale } = state.app;
    return { locale };
}, dispatch=>({
    loadLang(){
        dispatch(appAction.loadUserInfo());
    }
}))(Root);

ReactDOM.render(
    <RootComponent store={store}/>
    ,
    document.getElementById('container')
);
