import { objectAppend } from '../utils';
import { _Object } from 'customInterface';

const defaultState:_Object = {
    trackType_loading: false,
    trackType_page: {
        pageNo: 1,
        pageSize: 10,
        dataCount: 0
    },
    trackType_searchParams: {
        name:'',
        trackId:''
    },
    trackType_editData:{
        id:'',
        eventTypeCode:'',
        eventId:'',
        param:'',
        paramDescribe:'',
        demandId:''
    },
    trackType_editModalShow:false,
    trackType_editModalLoading:false,
    trackType_list: [],
    trackType_allData:[],


    trackDemand_loading: false,
    trackDemand_page: {
        pageNo: 1,
        pageSize: 10,
        dataCount: 0
    },
    trackDemand_searchParams: {
        name:'',
        trackType:'',
        viewState:'',//0-未审核,1-审核通过,2-审核不通过,3-重新审核,4-已指派,5-已完成
    },
    trackDemand_editData:{
        id:'',
        name:'',
        trackId:''
    },
    trackDemand_editModalShow:false,
    trackDemand_editModalLoading:false,
    trackDemand_addInfoData:{
        id:'',
        eventId:'',
        trackId:''
    },
    trackDemand_addInfoModalShow:false,
    trackDemand_addInfoModalLoading:false,
    trackDemand_verifyModalShow:false,
    trackDemand_list: [],
    trackDemand_allData:[],


    trackInfo_loading: false,
    trackInfo_page: {
        pageNo: 1,
        pageSize: 10,
        dataCount: 0
    },
    trackInfo_searchParams: {
        eventId:'',
        eventType:'',
        trackType:''
    },
    trackInfo_editData:{
        id:'',
        eventId:'',
        trackId:''
    },
    trackInfo_editModalShow:false,
    trackInfo_editModalLoading:false,
    trackInfo_list: [],

    verifyStates:[
        {state:0,stateMsg:'未审核',tagColor:'#40a9ff'},
        {state:1,stateMsg:'审核通过',tagColor:'#73d13d'},
        {state:2,stateMsg:'审核不通过',tagColor:'#ff4d4f'},
        {state:3,stateMsg:'重新审核',tagColor:'#ffa940'},
        {state:4,stateMsg:'已指派',tagColor:'#13c2c2'},
        {state:5,stateMsg:'已完成',tagColor:'#bfbfbf'},
    ],
    eventTypeCodes:[
        {id:0,name:'TctDataHubConstants.TYPE_RECORD_BY_TIME'},
        {id:1,name:'TctDataHubConstants.TYPE_RECORD_BY_DATE'},
    ]
};

export default (state:any, action:_Object) => {
    let newState:_Object = {};
    switch (action.type) {
        case 'TRACK_TYPE_LOADING':
            newState.trackType_loading = action.loading;
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
        case 'TRACK_TYPE_ALLDATA':
            newState.trackType_allData = action.list;
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

        case 'TRACK_DEMAND_VIEWSTATE_CHANGE':
            newState.trackDemand_searchParams = {
                ...state.trackDemand_searchParams,
                viewState:action.state
            };
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
        case 'TRACK_DEMAND_ALLDATA':
            newState.trackDemand_allData = action.list;
            break;
        case 'TRACK_DEMAND_VERIFYMODAL_SHOW':
            newState.trackDemand_verifyModalShow = action.show;
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
        case 'TRACK_DEMAND_ADDINFOMODAL_SHOW':
            newState.trackDemand_addInfoModalShow = action.show;
            break;
        case 'TRACK_DEMAND_ADDINFOMODAL_LOADING':
            newState.trackDemand_addInfoModalLoading = action.loading;
            break;
        case 'TRACK_DEMAND_ADDINFOMODAL_DATA':
            newState.trackDemand_addInfoData = action.data;
            break;
        case 'TRACK_DEMAND_ADDINFOMODAL_RESET':
            newState.trackDemand_addInfoData = defaultState.trackDemand_addInfoData;
            break;
    


        case 'TRACK_INFO_LOADING':
            newState.trackInfo_loading = action.loading;
            break;
        case 'TRACK_INFO_SEARCHPARAM':
            newState.trackInfo_searchParams = action.params;
            break;
        case 'TRACK_INFO_SEARCHPARAM_CHANGE':
            newState.trackInfo_searchParams = action.params;
            break;
        case 'TRACK_INFO_LOAD':
            newState.trackInfo_page = {
                pageNo: action.pageNo,
                pageSize: action.pageSize,
                dataCount: action.dataCount
            };
            newState.trackInfo_list = action.list;
            break;
        case 'TRACK_INFO_EDITMODAL_SHOW':
            newState.trackInfo_editModalShow = action.show;
            break;
        case 'TRACK_INFO_EDITMODAL_LOADING':
            newState.trackInfo_editModalLoading = action.loading;
            break;
        case 'TRACK_INFO_EDITMODAL_DATA':
            newState.trackInfo_editData = action.data;
            break;
        case 'TRACK_INFO_EDITMODAL_RESET':
            newState.trackInfo_editData = defaultState.trackInfo_editData;
            break;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};