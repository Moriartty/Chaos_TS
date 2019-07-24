
import Fetch from '../utils/fetch';
import { _Object } from 'customInterface';
import API from 'config/const';
import {message} from 'antd';
let actions:_Object = {};

/**
 * 加载列表
 * @param pageNo
 * @param pageSize
 * @returns {function(*, *)}
 */
actions.loadList = (pageNo:number, pageSize:number) => (dispatch:any, getState:any) => {
    dispatch({ type: 'TRACK_LOADING', loading: true });
    const state = getState()['track'],page = state.page,params = state.searchParams;
    const dataParam = {};
    const pageParam = {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }
    return Fetch.post(API.TRACK_TYPE_GETALL,{data:dataParam,page:pageParam} ).then((data:any) => {
        dispatch({ type: 'TRACK_LOADING', loading: false });
        dispatch({
            type: 'TRACK_LOAD',
            pageNo: pageNo || data.page.currPage,
            pageSize: data.page.size,
            dataCount: data.page.total,
            list: data.data
        });
    });
};


/**
 * 新增或编辑track
 */
actions.addOrEditTrackType = (data:_Object) => (dispatch:any) => {
    Fetch.post(API.TRACK_TYPE_SAVE,data).then(()=>{
        message.success('操作成功');
        dispatch({type:'TRACK_EDITMODAL_SHOW',show:false})
        dispatch(actions.loadList())
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
        dispatch(actions.loadList())
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

export default actions;
