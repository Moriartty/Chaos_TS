
import Fetch from '../utils/fetch';
import { _Object } from 'customInterface';
import API from 'config/const';
import {message} from 'antd';
import appAction from 'actions/app'
let actions:_Object = {};

/**
 * 加载列表
 * @param pageNo
 * @param pageSize
 * @returns {function(*, *)}
 */
actions.loadTrackType = (pageNo:number, pageSize:number) => (dispatch:any, getState:any) => {
    dispatch({ type: 'TRACK_TYPE_LOADING', loading: true });
    const state = getState()['track'],page = state.trackType_page,params = state.trackType_searchParams;
    const dataParam = {};
    const pageParam = {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }
    return Fetch.post(API.TRACK_TYPE_GETALL,{data:dataParam,page:pageParam} ).then((data:any) => {
        dispatch({ type: 'TRACK_TYPE_LOADING', loading: false });
        dispatch({
            type: 'TRACK_TYPE_LOAD',
            pageNo: pageNo || data.page.currPage,
            pageSize: data.page.size,
            dataCount: data.page.total,
            list: data.data
        });
        dispatch(appAction.setSearchParamsInLocalStorage(params,'TRACK_TYPE_SEARCHPARAM_CHANGE'));
    });
};


/**
 * 新增或编辑track
 */
actions.addOrEditTrackType = (data:_Object) => (dispatch:any) => {
    Fetch.post(API.TRACK_TYPE_SAVE,data).then(()=>{
        message.success('操作成功');
        dispatch({type:'TRACK_TYPE_EDITMODAL_SHOW',show:false})
        dispatch(actions.loadTrackType())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

/**
 * 删除一个埋点类型
 */
actions.deleteTrack = (key:number) => (dispatch:any) => {
    Fetch.get(API.TRACK_TYPE_REMOVE+'/'+key,{}).then(()=>{
        message.success('操作成功');
        dispatch(actions.loadTrackType())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}
/**
 * 批量删除埋点类型
 */
actions.batchDeleteTrack = (keys:Array<number>) => {
    Fetch.get(API.TRACK_TYPE_BATCHREMOVE,{ids:keys.join(',')}).then((data:any)=>{
        console.log(data);
        message.success('操作成功');
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

/**
 * 加载TrackDemand列表
 */
actions.loadTrackDemand = (pageNo:number, pageSize:number) => (dispatch:any, getState:any) => {
    dispatch({ type: 'TRACK_DEMAND_LOADING', loading: true });
    const state = getState()['track'],page = state.trackDemand_page,params = state.trackDemand_searchParams;
    const dataParam:_Object = {};
    (~~state.trackDemand_searchParams.viewState===1)?dataParam['EQ_state']=0:'';
    const pageParam = {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }
    return Fetch.post(API.TRACK_DEMAND_GETALL,{data:dataParam,page:pageParam} ).then((data:any) => {
        dispatch({ type: 'TRACK_DEMAND_LOADING', loading: false });
        dispatch({
            type: 'TRACK_DEMAND_LOAD',
            pageNo: pageNo || data.page.currPage,
            pageSize: data.page.size,
            dataCount: data.page.total,
            list: data.data
        });
        dispatch(appAction.setSearchParamsInLocalStorage(params,'TRACK_DEMAND_SEARCHPARAM_CHANGE'));
    });
};
/**
 * 新增或编辑trackDemand
 */
actions.addOrEditTrackDemand = (data:_Object) => (dispatch:any) => {
    Fetch.post(API.TRACK_DEMAND_SAVE,data).then(()=>{
        message.success('操作成功');
        dispatch({type:'TRACK_DEMAND_EDITMODAL_SHOW',show:false})
        dispatch(actions.loadTrackDemand())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

/**
 * 删除一个埋点需求
 */
actions.deleteTrackDemand = (key:number) => (dispatch:any) => {
    Fetch.get(API.TRACK_DEMAND_REMOVE+'/'+key,{}).then(()=>{
        message.success('操作成功');
        dispatch(actions.loadTrackDemand())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}
/**
 * 批量删除埋点需求
 */
actions.batchDeleteTrackDemand = (keys:Array<number>) => () => {
    Fetch.get(API.TRACK_DEMAND_BATCHREMOVE,{ids:keys.join(',')}).then((data:any)=>{
        message.success('操作成功');
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

actions.verifyTrackDemand = (state:number,data:_Object) => (dispatch:any) => {
    const params = {
        strIds:data.id,
        verifyResult:state,
        verifyMessage:data.verifyMessage
    }
    Fetch.post(API.TRACK_DEMAND_VERIFY,{map:params}).then(()=>{
        dispatch({type:'TRACK_DEMAND_VERIFYMODAL_SHOW',show:false});
        dispatch(actions.loadTrackDemand());
        message.success('操作成功');
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

export default actions;
