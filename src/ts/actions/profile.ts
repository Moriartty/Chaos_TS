import Fetch from 'utils/fetch';
import { _Object } from 'customInterface';
let action:_Object = {};

/**
 * 更新基本信息
 * @param data
 * @returns {Function}
 */
action.update = (data:any) => (dispatch:any) => Fetch.post('/profile/update', data);

/**
 * 更新密码
 * @param data
 * @returns {Function}
 */
action.updatePassword = (data:any) => (dispatch:any) => Fetch.post('/profile/update-password', data);

/**
 * 加载角色列表
 * @returns {Function}
 */
action.loadRoleList = () => (dispatch:any) => Fetch.get('/role').then((list:any) => {
    dispatch({ type: 'PROFILE_ROLE_LIST_LOAD', list: list });
});

export default action;
