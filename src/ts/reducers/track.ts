import { objectAppend } from '../utils';
import { _Object } from 'customInterface';

const defaultState:_Object = {
    trackType_loading: false,
    trackType_page: {
        pageNo: 1,
        pageSize: 20,
        dataCount: 0
    },
    trackType_searchParams: {
        title:''
    },
    trackType_editData:{
        id:'',
        name:'',
        trackId:''
    },
    trackType_editModalShow:false,
    trackType_editModalLoading:false,
    trackType_list: [],


    trackDemand_loading: false,
    trackDemand_page: {
        pageNo: 1,
        pageSize: 20,
        dataCount: 0
    },
    trackDemand_searchParams: {
        title:''
    },
    trackDemand_editData:{
        id:'',
        name:'',
        trackId:''
    },
    trackDemand_editModalShow:false,
    trackDemand_editModalLoading:false,
    trackDemand_list: []
};

export default (state:any, action:_Object) => {
    let newState:_Object = {};
    switch (action.type) {
        case 'TRACK_TYPE_LOADING':
            newState.trackType_loading = action.loading;
            break;
        case 'TRACK_TYPE_SEARCHPARAM':
            newState.trackType_searchParams = action.params;
            break;
        case 'TRACK_TYPE_SEARCHPARAM_CHANGE':
            newState.trackType_searchParams = action.params;
            break;
        case 'TRACK_TYPE_LOAD':
            newState.trackType_page = {
                pageNo: action.pageNo,
                pageSize: action.pageSize,
                dataCount: action.dataCount
            };
            newState.trackType_list = action.list;
            break;
        case 'TRACK_TYPE_EDITMODAL_SHOW':
            newState.trackType_editModalShow = action.show;
            break;
        case 'TRACK_TYPE_EDITMODAL_LOADING':
            newState.trackType_editModalLoading = action.loading;
            break;
        case 'TRACK_TYPE_EDITMODAL_DATA':
            newState.trackType_editData = action.data;
            break;
        case 'TRACK_TYPE_EDITMODAL_RESET':
            newState.trackType_editData = defaultState.trackType_editData;
            break;


        case 'TRACK_DEMAND_LOADING':
            newState.trackDemand_loading = action.loading;
            break;
        case 'TRACK_DEMAND_SEARCHPARAM':
            newState.trackDemand_searchParams = action.params;
            break;
        case 'TRACK_DEMAND_SEARCHPARAM_CHANGE':
            newState.trackDemand_searchParams = action.params;
            break;
        case 'TRACK_DEMAND_LOAD':
            newState.trackDemand_page = {
                pageNo: action.pageNo,
                pageSize: action.pageSize,
                dataCount: action.dataCount
            };
            newState.trackDemand_list = action.list;
            break;
        case 'TRACK_DEMAND_EDITMODAL_SHOW':
            newState.trackDemand_editModalShow = action.show;
            break;
        case 'TRACK_DEMAND_EDITMODAL_LOADING':
            newState.trackDemand_editModalLoading = action.loading;
            break;
        case 'TRACK_DEMAND_EDITMODAL_DATA':
            newState.trackDemand_editData = action.data;
            break;
        case 'TRACK_DEMAND_EDITMODAL_RESET':
            newState.trackDemand_editData = defaultState.trackDemand_editData;
            break;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};