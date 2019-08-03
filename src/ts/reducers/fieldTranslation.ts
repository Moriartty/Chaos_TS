import { objectAppend } from '../utils';
import { _Object } from 'customInterface';

const defaultState:_Object = {
    loading:false,
    systemList:[],
    searchParams:{
        strKey:'',
        strVal:'',
        systemId:'',
        language:''
    },
    list:[],
    page:{
        pageNo: 1,
        pageSize: 10,
        dataCount: 0
    },
    editModalShow:false,
    editModalLoading:false,
    editData:{
        strKey:'',
        strVal:'',
        systemId:'',
        language:''
    }
}

export default (state:any,action:_Object) => {
    let newState:_Object = {};
    switch(action.type){
        case 'FIELDTRANS_LOADING':
            newState.loading = action.loading;
            break;
        case 'FIELDTRANS_SYSTEMLIST_LOAD':
            newState.systemList = action.list;
            break;
        case 'FIELDTRANS_SEARCHPARAMS_CHANGE':
            newState.searchParams = action.params;
            break;
        case 'FIELDTRANS_DATA_LOAD':
            newState.page = {
                pageNo: action.pageNo,
                pageSize: action.pageSize,
                dataCount: action.dataCount
            };
            newState.list = action.list;
            break;
        case 'FIELDTRANS_EDITMODAL_SHOW':
            newState.editModalShow = action.show;
            break;
        case 'FIELDTRANS_EDITMODAL_LOADING':
            newState.editModalLoading = action.loading;
            break;
        case 'FIELDTRANS_EDITMODAL_DATA':
            newState.editData = action.data;
            break;
        case 'FIELDTRANS_EDITMODAL_RESET':
            newState.editData = defaultState.editData;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
} 