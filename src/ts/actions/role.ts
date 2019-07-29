
import Fetch from 'utils/fetch';
import API from 'config/const';
import appAction from 'actions/app';
import { _Object } from 'customInterface';
let action:_Object = {};

/**
 * 加载角色列表
 * @returns {Function}
 */
action.loadList = () => (dispatch:any) => Fetch.get(API.ROLE_ALLDATA_LOAD,{}).then((list:any) => {
    dispatch({ type: 'ROLE_LIST', list: list });
});

/**
 * 加载菜单树状结构数据
 * @returns {Function}
 */
function loadMenuTree (systemId:number) {
    return (dispatch:any,getState:any) => {
        const searchParams = getState().role.searchParams;
        const target = systemId||searchParams.selectedSystem;
        return Fetch.get(API.MENU_TREE_LOAD,{systemId:target}).then((data:any) => {
            let treeData = [
                { oid: '', name: 'menuName_permission', icon: 'am-icon-home', list: [data] }
            ];
            // 递归添加<tr>
            const recursive = function (item:_Object) {
                // id统一转化为字符串
                item.id = String(item.oid);
                // 手动添加操作权限
                // if (item.module && menuConfig[item.module].operations) { // 过滤出菜单
                //     item.list = menuConfig[item.module].operations.map((o:_Object) => {
                //         return { id: item.id + '_' + o.key, name: o.name, type: 'OPT' };
                //     });
                // }

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
            };
            treeData.forEach(function (o:_Object, i, list) {
                o.indents = []; // 体现菜单关系的缩进符
                o.level = 0; // 菜单深度级别，从0级开始
                o.last = i === list.length - 1; // 是否为当前级别的最后一个
                recursive(o);
            });

            dispatch({ type: 'ROLE_MENU_TREE', data: treeData });
            dispatch(appAction.setSearchParamsInLocalStorage(searchParams,'ROLE_SEARCHPARAMS_CHANGE'));
        });
    };
}
action.loadMenuTree = loadMenuTree;

/**
 * 选择角色
 * @param role
 * @returns {Function}
 */
function selectRole (role:_Object) {
    return (dispatch:any) => {
        dispatch({ type: 'ROLE_SELECT', role: role });
        return Fetch.get(API.ROLE_OPERATIONS_LOAD, {
            rid: role.rid
        }).then((data:Array<any>) => {
            let roleAuth:Array<any> = [];
            // // 只要有一个勾上，则顶级节点（非实际菜单）也得勾上
            // if (data.length) {
            //     roleAuth.push('0');

            //     data.forEach(o => {
            //         roleAuth.push(String(o.menuId));

            //         // 操作类型
            //         if (o.functions) {
            //             roleAuth = roleAuth.concat(o.functions.map((func:any) => `${o.menuId}_${func}`));
            //         }
            //     });
            // }
            if(data.length){
                // roleAuth.push('0');
                data.forEach((o:_Object)=>{
                    roleAuth.push(String(o.oid));
                })
                roleAuth = Array.from(new Set(roleAuth));
            }
            dispatch({ type: 'ROLE_MENU_LOADED', roleAuth });
            dispatch({ type: 'ROLE_SEARCHPARAMS_CHANGE',params:{selectedRole:role.rid}})
        });
    };
}
action.selectRole = selectRole;

/**
 * 更新角色菜单权限
 * @param roleId
 * @param data
 * @returns {Function}
 */
action.updateRoleMenu = (roleId:number,data:any) => (dispatch:any) => {
    return Fetch.post(API.ROLE_OPREATION_ASSIGN, {
        rid: roleId,
        ...data
    });
}
/**
 * 添加角色
 * @param data
 * @returns {Function}
 */
function addRole (data:_Object) {
    return (dispatch:any) => {
        return Fetch.post('/role/create', {
            name: data.name,
            desc: data.desc
        });
    };
}
action.addRole = addRole;

/**
 * 更新角色
 * @param data
 * @returns {Function}
 */
function updateRole (data:_Object) {
    return (dispatch:any) => {
        return Fetch.post('/role/update', {
            id: data.id,
            name: data.name,
            desc: data.desc
        });
    };
}
action.updateRole = updateRole;

/**
 * 删除角色
 * @param id
 * @returns {Function}
 */
function deleteRole (id:number|string) {
    return (dispatch:any) => {
        return Fetch.post('/role/delete', {
            id: id
        }).then(() => {
            // 取消当前选择的角色
            dispatch({ type: 'ROLE_SELECT', role: {} });

            // 重新加载角色列表
            dispatch(action.loadList());
        });
    };
}
action.deleteRole = deleteRole;

export default action;
