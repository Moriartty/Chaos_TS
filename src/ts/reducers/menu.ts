import { objectAppend } from 'utils/index';
import { _Object } from 'customInterface';
/**
 * 每个容器组件对应一个reducer
 * 这里可以唯一知道新旧状态的地方
 */
const defaultState:_Object = {
    loading: false,
    list: [],
    editShow: false,
    editData: {
        display: 1,
        module: "",
        name: "",
        oid: '',
        pid: '',
        type: ""
    },
    systemList:[],
    systemEditModalShow:false,
    systemEditData:{
        oid:'',
        pid:0,
        systemName:''
    }
};

export default (state:_Object, action:_Object) => {
    let newState:_Object = {};
    switch (action.type) {
        case 'MENU_SYSTEMLIST_LOAD':
            newState.systemList = action.systemList;
            break;
        case 'MENU_LOADING':
            newState.loading = action.loading;
            break;
        case 'MENU_SYSTEMEDITMODAL_ADD':
            newState.systemEditModalShow = true;
            newState.systemEditData = defaultState.systemEditData;
            break;
        case 'MENU_SYSTEMEDITMODAL_EDIT':
            newState.systemEditModalShow = true;
            newState.systemEditData = action.data;
            break;
        case 'MENU_SYSTEMEDITMODAL_CLOSE':
            newState.systemEditModalShow = false;
            break;
        case 'MENU_LIST':
            newState.list = action.list;
            break;
        case 'MENU_ADD':
            newState.editShow = true;
            newState.editData = {
                pid: action.pid,//当前点击的item的oid作为新建item的pid
                type: action._type, // 1系统，2目录，3菜单，4操作
                module: '',
                name: '',
                display: 1,
            };
            break;
        case 'MENU_EDIT':
            newState.editShow = true;
            const { oid, module, name, display, pid,type } = action.data;
            newState.editData = {
                pid,
                type, // 1系统，2目录，3菜单，4操作
                oid,
                module,
                name,
                display,
            };
            break;
        case 'MENU_EDIT_CLOSE':
            newState.editShow = false;
            break;
        case 'MENU_PAGE_LEAVE':
            return defaultState;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};
