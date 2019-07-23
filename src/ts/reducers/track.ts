import { objectAppend } from '../utils';
import { _Object } from 'customInterface';

const defaultState:_Object = {
    loading: false,
    page: {
        pageNo: 1,
        pageSize: 20,
        dataCount: 0
    },
    searchParams: {
        title:''
    },
    editData:{
        id:'',
        name:'',
        trackId:''
    },
    editModalShow:false,
    editModalLoading:false,
    list: []
};

export default (state:any, action:_Object) => {
    let newState:_Object = {};
    switch (action.type) {
        case 'TRACK_LOADING':
            newState.loading = action.loading;
            break;
        case 'TRACK_SEARCHPARAM':
            newState.searchParams = action.params;
            break;
        case 'TRACK_SEARCHPARAM_CHANGE':
            console.log(action.params);
            newState.searchParams = action.params;
            break;
        case 'TRACK_LOAD':
            newState.page = {
                pageNo: action.pageNo,
                pageSize: action.pageSize,
                dataCount: action.dataCount
            };
            newState.list = action.list;
            break;
        case 'TRACK_EDITMODAL_SHOW':
            newState.editModalShow = action.show;
            break;
        case 'TRACK_EDITMODAL_LOADING':
            newState.editModalLoading = action.loading;
            break;
        case 'TRACK_EDITMODAL_DATA':
            newState.editData = action.data;
            break;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};