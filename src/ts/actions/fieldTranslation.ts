import { _Object } from "customInterface";
import Fetch from 'utils/fetch';
import appAction from 'actions/app';
import API from 'config/const';
import {message} from 'antd';

let actions:_Object = {};

/**
 * 获取系统列表
 */
actions.loadSystemList = () => (dispatch:any) => {
    return Fetch.get(API.APP_GETALLSYSTEM).then((data:Array<_Object>)=>{
        dispatch({type:'FIELDTRANS_SYSTEMLIST_LOAD',list:data});
        return data;
    })
}

/**
 * 加载翻译字段数据
 */
actions.loadFieldsData = (pageNo:number,pageSize:number) => (dispatch:any,getState:any) => {
    dispatch({type:'FIELDTRANS_LOADING',loading:true});
    const state = getState().fieldTranslation;
    const searchParams = state.searchParams;
    const page = state.page;
    let params = {
        ...searchParams,
        currentPage: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }
    Fetch.get(API.FIELDTRANS_GETALL,params).then((data:any)=>{
        dispatch({ type: 'FIELDTRANS_LOADING', loading: false });
        dispatch({
            type: 'FIELDTRANS_DATA_LOAD',
            pageNo: pageNo || data.currentPage,
            pageSize: data.pageSize,
            dataCount: data.totalDataCount,
            list: data.list
        });
        dispatch(appAction.setSearchParamsInLocalStorage(params,'FIELDTRANS_SEARCHPARAMS_CHANGE'));
    })
}

/**
 * 新增trackDemand
 */
actions.create = (data:_Object) => (dispatch:any) => {
    Fetch.post(API.FIELDTRANS_CREATE,data).then(()=>{
        message.success('操作成功');
        dispatch({type:'FIELDTRANS_EDITMODAL_SHOW',show:false})
        dispatch(actions.loadFieldsData())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}
/**
 * 批量新增
 */
actions.batchCreate = (data:_Object) => (dispatch:any) => {
    Fetch.post(API.FIELDTRANS_BATCH_CREATE,data).then(()=>{
        message.success('操作成功');
        dispatch({type:'FIELDTRANS_EDITMODAL_SHOW',show:false})
        dispatch(actions.loadFieldsData())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}


actions.edit = (data:_Object) => (dispatch:any) => {
    Fetch.post(API.FIELDTRANS_MODIFY,data).then(()=>{
        message.success('操作成功');
        dispatch({type:'FIELDTRANS_EDITMODAL_SHOW',show:false})
        dispatch(actions.loadFieldsData())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

/**
 * 删除一个埋点需求
 */
actions.delete = (key:number) => (dispatch:any) => {
    Fetch.get(API.FIELDTRANS_REMOVE+'/'+key,{}).then(()=>{
        message.success('操作成功');
        dispatch(actions.loadFieldsData())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}
/**
 * 批量删除埋点需求
 */
actions.batchDelete = (keys:Array<number>) => () => {
    Fetch.get(API.FIELDTRANS_BATCHREMOVE,{ids:keys.join(',')}).then((data:any)=>{
        message.success('操作成功');
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

export default actions;