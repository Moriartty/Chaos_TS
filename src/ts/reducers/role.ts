import { objectAppend } from 'utils/index';
import { _Object } from 'customInterface';
/**
 * 每个容器组件对应一个reducer
 * 这里可以唯一知道新旧状态的地方
 */
const defaultState:_Object = {
    roleList: [],
    roleInfo: {}, // 当前选中的角色
    roleAuth: [], // 包含的菜单ID
    editShow: false,
    editData: {},
    menuTree: [],
    searchParams:{
        selectedRole:'',
        selectedSystem:''
    }
};

export default (state:_Object, action:_Object) => {
    let newState:_Object = {};
    switch (action.type) {
        case 'ROLE_SEARCHPARAMS_CHANGE':
            newState.searchParams = {
                ...state.searchParams,
                ...action.params
            }
            break;
        case 'ROLE_ADD':
            newState.editShow = true;
            newState.editData = {
                isNew: true,
                name: '',
                desc: ''
            };
            break;
        case 'ROLE_EDIT':
            newState.editShow = true;
            const { id, name, desc } = action.data;
            newState.editData = {
                id,
                name,
                desc
            };
            break;
        case 'ROLE_EDIT_CLOSE':
            newState.editShow = false;
            break;
        case 'ROLE_LIST':
            newState.roleList = action.list;
            break;
        case 'ROLE_SELECT':
            newState.roleInfo = action.role;
            break;
        case 'ROLE_MENU_LOADED':
            newState.roleAuth = action.roleAuth;
            break;
        case 'ROLE_MENU_TREE':
            newState.menuTree = action.data;
            break;
        case 'ROLE_MENU_CHK_CHANGE':
            newState.roleAuth = action.roleAuth;
            break;
        case 'ROLE_PAGE_LEAVE':
            return defaultState;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};
