import * as React from 'react';
import {message} from 'antd';
import menuConfig from 'config/menu';
import * as NProgress from 'nprogress';
import config,{proBaseUrl} from 'config/api';
import Fetch from 'utils/fetch';
import {setCookieWithScope,setCookie,delCookieWithScope, getCookie,delCookie} from '../utils/cookies';
import {_Object} from 'customInterface';
import { isEmpty } from 'utils/index';
import API from 'config/const';

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
 * 将当前模块的最新查询条件保存到localstorage中
 */
action.setSearchParamsInLocalStorage = (searchParams:_Object,reduceAction:string) => () => {
    localStorage.setItem('chaos_last_searchParams',JSON.stringify(searchParams));
    localStorage.setItem('chaos_last_search_reduceAction',reduceAction);
}
/**
 * 将上次用户在某个模块的查询条件获取出来
 */
action.getSearchParamsFromLocalStorage = () => (dispatch:any) => {
    const searchParams = localStorage.getItem('chaos_last_searchParams');
    const reduceAction = localStorage.getItem('chaos_last_search_reduceAction');
    if(reduceAction){
        dispatch({type:reduceAction,params:JSON.parse(searchParams)});
    }
    return new Promise((resolve)=>{
        resolve(searchParams?JSON.parse(searchParams):undefined)
    });
}

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
action.login = (loginName:string, password:string, section:string,autoLogin:number) => (dispatch:any) => {
    return Fetch.post(API.APP_LOGIN, {
        loginName: loginName,
        loginPwd: password,
        section:section,
        auto: autoLogin ? 1 : 0
    },{
        // baseUrl: config.accountBaseUrl
    }).then((json:_Object) => {
        if(!isEmpty(json)){
            setCookie('access_token',json.accessToken);
            setCookie('refresh_token',json.refreshToken);
        }
        return json;
    });
};

/**
 * 退出
 * @returns {Function}
 */
action.logout = () => (dispatch:any) => {
    return Fetch.post(API.APP_LOGOUT,{},{
        tokenType:'refresh_token',
        withCookie:true
    }).then(()=>{
        delCookie('access_token');
        delCookie('refresh_token');
        dispatch({ type: 'APP_LOGOUT' });
        return Promise.resolve();
    }).catch((err:any)=>{
        return Promise.reject(err);
    })
}
/**
 * 判断access_token是否过期
 */
action.isExpiration = () => (dispatch:any) => 
    Fetch.get(API.APP_ISEXPIRATION,{},{
        // baseUrl:config.accountBaseUrl,
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
 * 加载用户指定系统下的所有操作权限列表
 */
action.loadUserAuth = () => (dispatch:any) => Fetch.get('/user/auth').then((data:any)=>{
    dispatch({type:'APP_SET_USER_AUTHLIST',list:data});
})

/**
 * 加载用户菜单信息
 * @returns {Function}
 */
action.loadUserMenu = (reloadOnly:boolean) => (dispatch:any) => {
    Promise.all([Fetch.get('/role/auth'),Fetch.get('/menu/user')]).then((data:Array<any>)=>{
        const roleAuth = data[0];
        let userMenu = data[1];
        dispatch({type:'APP_SET_USER_AUTHLIST',list:roleAuth});
        //这里可以固定某些菜单页面
        let obj:_Object = {};
        function recursive (item:_Object, no:number|string) {
            if (item.list) {
                item.list.forEach((o:_Object, i:number) => {
                    const num = no + '>' + i.toString();
                    o.no = num;
                    o.id = o.oid;
                    const menu = menuConfig[o.module];
                    if (menu) {
                        o.page = menu.page;
                        o.icon = menu.icon;
                        o.functions = roleAuth.findAll(o.oid,'pid').map((k:_Object)=>k.name);
                        obj[o.module] = o;
                    }
                    recursive(o, num);
                });
            }
        }
        userMenu.forEach((item:_Object, i:number) => {
            const no = '>' + i.toString();
            item.no = no;
            item.id = item.oid;
            const menu = menuConfig[item.module];
            if (menu) {
                item.page = menu.page;
                item.icon = menu.icon;
                item.functions = roleAuth.findAll(item.oid,'pid').map((k:_Object)=>k.name);
                obj[item.module] = item;
            }
            recursive(item, no);
        });
        dispatch({
            type: 'APP_SET_MENU',
            data:userMenu,
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
    
        return userMenu;
    })
};

/**
 * 获取当前日期信息
 */
action.loadDataInfo = () => (dispatch:any) => Fetch.get('/common/current-date').then((info:any) => {
    dispatch({ type: 'APP_DATE_INFO', info });
});

export default action;