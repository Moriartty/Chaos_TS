import { _Object } from 'customInterface';
import Fetch from 'utils/fetch';
import API from 'config/const';
import { message } from 'antd';
import appAction from 'actions/app';

let action:_Object = {};

/**
 * 获取系统列表
 */
action.loadSystemList = () => (dispatch:any) => {
    return Fetch.get(API.APP_GETALLSYSTEM,{}).then((data:Array<_Object>)=>{
        dispatch({type:'MENU_SYSTEMLIST_LOAD',systemList:data});
        return data;
    })
}

/**
 * 获取菜单列表
 * @returns {Function}
 */
function loadList (id:number) {
    return (dispatch:any,getState:any) => {
        const searchParams = getState().menu.searchParams;
        let targetSystem = id||searchParams.selectedSystem;
        //先加载系统列表，如果不为空，就选择第一个作为默认值,并且没有搜索记录，并加载该系统的目录
        if(!targetSystem){
            const systemList = getState().menu.systemList;
            targetSystem = systemList[0].oid
            dispatch({type:'MENU_SEARCHPARAMS_CHANGE',params:{selectedSystem:targetSystem}});
        }

        dispatch({ type: 'MENU_LOADING', loading: true });
        return Fetch.get(API.MENU_TREE_LOAD,{systemId:targetSystem}).then((data:any) => {
           
            let menuList:Array<any> = [];
            let treeData = [
                { name: '(根目录)', list: [data] }
            ];

            // 递归添加<tr>
            function recursive (item:any) {
                // 忽略根目录那行functionfunction
                if (item.level > 0) {
                    menuList.push(item);
                }
                item.id = item.oid;
                if (item.list && item.list.length) {
                    item.list.forEach(function (o:_Object, i:number, list:Array<any>) {
                        o.level = item.level + 1;
                        o.last = i === list.length - 1; // 是否为当前级别的最后一个
                        o.indents = item.indents.slice(0, -1); // 包含父级菜单的前(n-1)个
                        if (o.level > 1) {
                            // 父菜单的第n个不一定跟子菜单同列的那个相同，这里结合图形看更直观
                            o.indents.push(item.last ? '' : '│');
                        }
                        o.indents.push(o.last ? '└' : '├'); // 该级菜单的最后一个
                        recursive(o);
                    });
                }
            }

            treeData.forEach((item:_Object, i, list) => {
                item.indents = []; // 体现菜单关系的缩进符
                item.level = 0; // 菜单深度级别，从0级开始
                item.last = i === list.length - 1; // 是否为当前级别的最后一个
                item.id = item.oid;
                recursive(item);
            });
            dispatch({ type: 'MENU_LIST', list: menuList });
            dispatch({ type: 'MENU_LOADING' });
            dispatch(appAction.setSearchParamsInLocalStorage(searchParams,'MENU_SEARCHPARAMS_CHANGE'));
        });
    };
}
action.loadList = loadList;

/**
 * 添加菜单
 * @param data
 * @returns {Function}
 */
action.addMenu = (data:any) => (dispatch:any) => {
    return Fetch.post(API.MENU_NODE_CREATE, data).then((data:any)=>{
        dispatch(action.loadSystemList());
        dispatch(action.loadList())
        message.success('操作成功');
    }).catch((err:any)=>{
        message.success('操作失败');
    });
}

/**
 * 更新菜单
 * @param data
 * @returns {Function}
 */
action.updateMenu = (data:any) => (dispatch:any) => {
    return Fetch.post(API.MENU_NODE_UPDATE,data).then(()=>{
        dispatch(action.loadSystemList());
        dispatch(action.loadList());
    }).catch((err:any)=>{

    })
}

/**
 * 删除菜单
 * @param id
 * @returns {Function}
 */
action.deleteMenu = (id:any) => (dispatch:any,getState:any) => {
    let target = getState().menu.list.find((o:_Object)=>{
        return o.id == id;
    });
    let deleteSet:Array<_Object> = [];
    function recursive (item:any) {
        if (item.list && item.list.length) {
            item.list.forEach(function (o:_Object, i:number, list:Array<any>) {
                deleteSet.push(o);
                recursive(o);
            });
        }
    }
    deleteSet.push(target);
    recursive(target);
    //需要按type从高到低排序
    deleteSet.sort((o1:_Object,o2:_Object)=>{
        return o2.type-o1.type;
    })

    return Fetch.post(API.MENU_OPERATION_REMOVE, {oids:deleteSet.map((o:_Object)=>{return o.id}).join(',')} ).then(()=>{
        target.type==1&&dispatch({type:'MENU_SEARCHPARAMS_CHANGE',params:{selectedSystem:null}});
        dispatch(action.loadSystemList());
        dispatch(action.loadList())
        message.success('操作成功');
    }).catch((err:any)=>{
        message.success('操作失败');
    });

}

/**
 * 移动菜单
 * @param id
 * @param isUp 是否上移，否则下移
 * @returns {Function}
 */
action.moveMenu = (id:any, isUp:boolean) => (dispatch:any) => Fetch.post(isUp ? '/menu/up' : '/menu/down', { id });

export default action;
