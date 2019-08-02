
import Fetch from '../utils/fetch';
import { _Object } from 'customInterface';
import API from 'config/const';
import {message} from 'antd';
import appAction from 'actions/app'
let actions:_Object = {};

/**
 * 加载埋点类型列表(分页)
 * @param pageNo
 * @param pageSize
 * @returns {function(*, *)}
 */
actions.loadTrackType = (pageNo:number, pageSize:number) => (dispatch:any, getState:any) => {
    dispatch({ type: 'TRACK_TYPE_LOADING', loading: true });
    const state = getState()['track'],page = state.trackType_page,params = state.trackType_searchParams;
    let dataParam:_Object = {}
    Object.keys(params).forEach((o:string)=>{
        dataParam['LIKE_'+o] = params[o];
    })
    const pageParam = {
        page: pageNo || page.pageNo,
        size: pageSize || page.pageSize
    }
    return Fetch.post(API.TRACK_TYPE_GETALL_BYPAGE,{data:dataParam,page:pageParam} ).then((data:any) => {
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
 * 加载全部trackType数据
 */
actions.loadAllTrackType = () => (dispatch:any) => {
    return Fetch.get(API.TRACK_TYPE_GETALL,{}).then((data:Array<_Object>)=>{
        dispatch({type:'TRACK_TYPE_ALLDATA',list:data});
    })
}


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
        message.success('操作成功');
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

/**
 * 加载TrackDemand列表(分页)
 */
actions.loadTrackDemand = (pageNo:number, pageSize:number) => (dispatch:any, getState:any) => {
    dispatch({ type: 'TRACK_DEMAND_LOADING', loading: true });
    const state = getState()['track'],page = state.trackDemand_page,params = state.trackDemand_searchParams;
    let dataParam:_Object = {
        'LIKE_name':params['name'],
        'EQ_trackType':params['trackType'],
        'EQ_state':params['viewState']
    };
    // (state.trackDemand_searchParams.viewState===0)?dataParam['EQ_state']=0:'';
    const pageParam = {
        page: pageNo || page.pageNo,
        size: pageSize || page.pageSize
    }
    return Fetch.post(API.TRACK_DEMAND_GETALL_BYPAGE,{data:dataParam,page:pageParam} ).then((data:any) => {
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
 * 加载全部trackDemand数据
 */
actions.loadAllTrackDemand = () => (dispatch:any) => {
    return Fetch.get(API.TRACK_DEMAND_GETALL,{}).then((data:Array<_Object>)=>{
        dispatch({type:'TRACK_DEMAND_ALLDATA',list:data});
    })
}

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
/**
 * 审核埋点需求
 */
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

/**
 * 加载trackInfo
 */
actions.loadTrackInfo = (pageNo:number, pageSize:number) => (dispatch:any, getState:any) => {
    dispatch({ type: 'TRACK_INFO_LOADING', loading: true });
    const state = getState()['track'],page = state.trackInfo_page,params = state.trackInfo_searchParams;
    let dataParam:_Object = {
        'LIKE_eventId':params['eventId'],
        'EQ_eventType':params['eventType'],
        'EQ_trackType':params['trackType']
    };
    // Object.keys(params).forEach((o:string)=>{
    //     dataParam['EQ_'+o] = params[o];
    // });
    const pageParam = {
        page: pageNo || page.pageNo,
        size: pageSize || page.pageSize
    }
    return Fetch.post(API.TRACK_INFO_GETALL_BYPAGE,{data:dataParam,page:pageParam} ).then((data:any) => {
        dispatch({ type: 'TRACK_INFO_LOADING', loading: false });
        dispatch({
            type: 'TRACK_INFO_LOAD',
            pageNo: pageNo || data.page.currPage,
            pageSize: data.page.size,
            dataCount: data.page.total,
            list: data.data
        });
        dispatch(appAction.setSearchParamsInLocalStorage(params,'TRACK_INFO_SEARCHPARAM_CHANGE'));
    });
};

/**
 * 新增或编辑track
 */
actions.addOrEditTrackInfo = (data:_Object) => (dispatch:any) => {
    Fetch.post(API.TRACK_INFO_SAVE,data).then(()=>{
        message.success('操作成功');
        dispatch({type:'TRACK_INFO_EDITMODAL_SHOW',show:false})
        dispatch(actions.loadTrackInfo())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}

/**
 * 删除一个埋点类型
 */
actions.deleteTrackInfo = (key:number) => (dispatch:any) => {
    Fetch.get(API.TRACK_INFO_REMOVE+'/'+key,{}).then(()=>{
        message.success('操作成功');
        dispatch(actions.loadTrackInfo())
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}
/**
 * 批量删除埋点类型
 */
actions.batchDeleteTrackInfo = (keys:Array<number>) => {
    Fetch.get(API.TRACK_INFO_BATCHREMOVE,{ids:keys.join(',')}).then((data:any)=>{
        console.log(data);
        message.success('操作成功');
    }).catch((err:any)=>{
        message.warn('操作失败');
    })
}


export default actions;
