import { objectAppend } from 'utils/index';
import { _Object } from 'customInterface';
/**
 * 每个容器组件对应一个reducer
 * 这里可以唯一知道新旧状态的地方
 */
const defaultState:_Object = {
    loading: false,
    searchParams: {}, // 当前查询参数
    page:{
        pageNo:1,
        pageSize:10,
        dataCount:''
    },
    roleList:[],
    orgData: [],
    orgList: [], // orgData的列表形式
    orgSelectedId: -1,
    orgEditShow: false,
    orgEditData: {},
    // userSearching:false, //当前是否为搜索状态
    userSearchKey: '',
    userPageNo: 1,
    userPageCount: 1,
    dataCount: 0,
    userPageList: [],
    userInfoShow: false,
    userInfoData: {},
    userEditShow: false,
    userEditData: {}
};

export default (state:_Object, action:_Object) => {
    let newState:_Object = {};
    switch (action.type) {
    case 'USER_LOADING':
        newState.loading = action.loading;
        break;
    case 'USER_SEARCH_PARAMS':
        newState.searchParams = action.params;
        break;
    case 'USER_ROLE_DATA':
        newState.roleList = action.list;
        break;
    case 'USER_ORG_DATA':
        newState.orgData = action.data;
        newState.orgList = action.listData;
        break;
    case 'USER_ORG_SELECT':
        newState.orgSelectedId = action.id;
        break;
    case 'USER_ORG_ADD':
        newState.orgEditShow = true;
        newState.orgEditData = {};
        break;
    case 'USER_ORG_EDIT':
        newState.orgEditShow = true;
        const { id, name, parentId } = action.data;
        newState.orgEditData = {
            id,
            name,
            parentId
        };
        break;
    case 'USER_ORG_EDIT_CLOSE':
        newState.orgEditShow = false;
        break;
    case 'USER_SEARCH':
        newState.userSearchKey = action.value;
        break;
    case 'USER_PAGE_LOAD':
        // newState.userPageNo = action.no;
        // newState.userPageCount = action.count;
        // newState.dataCount = action.dataCount;
        newState.page = {
            pageNo: action.pageNo,
            pageSize: action.pageSize,
            dataCount: action.dataCount
        }
        newState.userPageList = action.list;
        break;
    case 'USER_INFO_SHOW':
        newState.userInfoShow = action.show;
        break;
    case 'USER_INFO_LOAD':
        newState.userInfoData = action.data;
        break;
    case 'USER_ADD':
        newState.userEditShow = true;
        newState.userEditData = {
            isNew: true,
            username: '',
            password: '',
            name: '',
            roleIds: [],
            no: '',
            orgId: state.orgSelectedId,
            email: '',
            phone: ''
        };
        break;
    case 'USER_EDIT':
        (() => {
            newState.userEditShow = true;
            const { uid, name, username, roleIds, no, orgId, email, phone } = action.data;
            newState.userEditData = { uid, name, username, roleIds, no, orgId, email, phone };
        })();
        break;
    case 'USER_EDIT_CLOSE':
        newState.userEditShow = false;
        break;
    case 'USER_PAGE_LEAVE':
        return defaultState;
    default:return state || defaultState;
    }
    return objectAppend(newState, state);
};
