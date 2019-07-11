import * as React from 'react';
import {message} from 'antd';
import menuConfig from 'config/menu';
import * as NProgress from 'nprogress';
import config,{proBaseUrl} from 'config/api';
import Fetch from '../utils/fetch';
import {setCookieWithScope,setCookie,delCookieWithScope, getCookie} from '../utils/cookies';
import {_Object} from 'customInterface';
import { isEmpty } from 'utils/index';

const Err403 = (cb:Function) => { require.ensure([], require => { cb(require('pages/Error/403')); }); };
let action:_Object = {};



/**
 * 切换语言
 */
action.toggleLocale = (newLocale:string) => (dispatch:any) => {
    dispatch({ type: 'APP_TOGGLE_LOCALE', locale: newLocale });
};
/**
 * 获取指定region数据
 */
// action.loadRegion = (coun,tag,props) => dispatch => {
//     const country = coun?coun:'world';
//     if(country){
//         ajax.raw('get','/json/'+country+'.json',{},location.host?'http://'+location.host:proBaseUrl).then(json=>{
//             dispatch({type:tag,...props,mapJsonData: json})
//         })
//     }
// }

/**
 * 点点菜单链接加载页面
 * @param module
 */
action.loadTabPage = (module:string) => (dispatch:any, getState:any) => {
    const state = getState().app;
    const menu = state.menuObj[module];
    const panes = state.panes;
    const index = panes.findIndex((o:_Object) => o.key === module);
    localStorage.setItem('chaos_activeTab',module);

    if (~index) {
        // 已经存在，直接激活
        dispatch({ type: 'APP_TAB_SWITCH', key: module });
    } else {
        // 新添加页面
        NProgress.done().start();
        if (menu) {
            menu.page((component:any) => {
                NProgress.done();
                dispatch({ type: 'APP_TAB_CHANGE',
                    panes: panes.concat([{
                        title: menu.name,
                        key: module,
                        icon: menu.icon,
                        component: React.createElement(component)
                    }]),
                    key: module });
            });
        } else {
            // 403
            Err403((component:any) => {
                NProgress.done();
                dispatch({ type: 'APP_TAB_CHANGE',
                    panes: panes.concat([{
                        title: `403(${module})`,
                        key: module,
                        icon: 'warning',
                        component: React.createElement(component)
                    }]),
                    key: module });
            });
        }
    }

    // module === 'home' && dispatch({ type: 'APP_ENTRY_MENU_SET' });
};

/**
 * 点非菜单链接加载页面
 * */
action.loadLinkPage = (module:string) => (dispatch:any, getState:any) => {
    const state = getState().app;
    const panes = state.panes;
    const index = panes.findIndex((o:_Object) => o.key === module);
    if (~index) {
        // 已经存在，直接激活
        dispatch({ type: 'APP_TAB_SWITCH', key: module });
    } else {
        const menu = menuConfig[module];
        menu.page((component:any) => {
            NProgress.done();
            dispatch({ type: 'APP_TAB_CHANGE',
                panes: panes.concat([{
                    title: menu.name,
                    key: module,
                    icon: menu.icon,
                    component: React.createElement(component)
                }]),
                key: module });
        });
    }
};

/**
 * 加载常用入口列表
 * @returns {Function}
 */
action.loadEntryMenu = () => (dispatch:any, getState:any) => Fetch.get('/home/entry').then((list:Array<any>) => {
    const menuObj = getState().app.menuObj;
    dispatch({ type: 'APP_ENTRY_MENU_LOAD',
        data: [
            {
                no: 'entry',
                name: 'menuName_entry',
                list: list.map(module => menuObj[module])
            }
        ] });
});

/**
 *注册
 * @param username
 * @param password
 * @returns {*}
 */

action.register = (username:string,password:string) => {
    Fetch.post('/register',{username,password},{baseUrl:config.accountBaseUrl}).then((data:any)=>{
        message.success('注册成功');
        return data;
    }).catch((err:any)=>{
        message.error(err.error.message);
    })
}


/**
 * 登录
 * @param loginName
 * @param password
 * @param autoLogin
 * @returns {Function}
 */
action.login = (loginName:string, password:string, autoLogin:number) => (dispatch:any) => {
    return Fetch.post('/login', {
        username: loginName,
        password: password,
        auto: autoLogin ? 1 : 0
    },{
        baseUrl: config.accountBaseUrl
    }).then((json:_Object) => {
        if(!isEmpty(json)){
            setCookieWithScope('access_token',json.accessToken);
            setCookieWithScope('refresh_token',json.refreshToken);
        }
        return json;
    });
};

/**
 * 退出
 * @returns {Function}
 */
action.logout = () => (dispatch:any) => {
    delCookieWithScope('access_token');
    delCookieWithScope('refresh_token');
    dispatch({ type: 'APP_LOGOUT' });
    return Promise.resolve();
}
/**
 * 判断access_token是否过期
 */
action.isExpiration = () => (dispatch:any) => Fetch.get('/isExpiration',{},{
    baseUrl:config.accountBaseUrl,
    tokenType:'refresh_token',
    withCookie:true
}).then((json:any)=>{
    return json;
}).catch((err:any)=>{
    return Promise.reject(err);
});

/**
 * 加载用户信息
 */
action.loadUserInfo = () => (dispatch:any) => Fetch.get('/profile').then((data:any) => {
    dispatch({ type: 'APP_SET_USER_INFO', info: data });
    return data;
});

/**
 * 加载用户菜单信息
 * @returns {Function}
 */
action.loadUserMenu = (reloadOnly:boolean) => (dispatch:any) => 
    Fetch.get('/menu/user').then((data:_Object|Array<any>) => {
    // console.log(data);
    // url -> obj


    let obj:_Object = {
        // 固定菜单页面
        home: menuConfig.home,
        profile: menuConfig.profile,
        avatar: menuConfig.avatar,
        password: menuConfig.password
    };
    /**
     * 递归设置每个菜单的级别码
     * @param item
     * @param no 如三级目录级别码：011
     */
    function recursive (item:_Object, no:number|string) {
        if (item.list) {
            item.list.forEach((o:_Object, i:number) => {
                const num = no + '>' + i.toString();
                o.no = num;
                const menu = menuConfig[o.module];
                if (menu) {
                    o.page = menu.page;
                    o.icon = menu.icon;
                    if (!o.functions) {
                        o.functions = [];
                    }
                    obj[o.module] = o;
                }
                recursive(o, num);
            });
        }
    }
    data.forEach((item:_Object, i:number) => {
        const no = '>' + i.toString();
        item.no = no;
        const menu = menuConfig[item.module];
        if (menu) {
            item.page = menu.page;
            item.icon = menu.icon;
            if (!item.functions) {
                item.functions = [];
            }
            obj[item.module] = item;
        }
        recursive(item, no);
    });

    dispatch({
        type: 'APP_SET_MENU',
        data,
        obj
    });
    let module = '';
    if(localStorage.getItem('chaos_activeTab')&&localStorage.getItem('chaos_activeTab')!='null')
        module = localStorage.getItem('chaos_activeTab');
    else
        module = 'home';
    // const module = localStorage.getItem('activeTab')||'home';
    if (!reloadOnly) {
        // 默认打开首页
        // dispatch(action.loadTabPage('home'));
        dispatch(action.loadTabPage(module));
    }

    return data;
});

/**
 * 获取当前日期信息
 */
action.loadDataInfo = () => (dispatch:any) => Fetch.get('/common/current-date').then((info:any) => {
    dispatch({ type: 'APP_DATE_INFO', info });
});

export default action;