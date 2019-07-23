
import Fetch from '../utils/fetch';
import { _Object } from 'customInterface';
import API from 'config/const';
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
 * 保存编辑
 * @param data
 * @returns {function(*)}
 */
actions.editItem = (data:any) => (dispatch:any) => {
    dispatch({type:'TRACK_EDITMODAL_LOADING',loading:true});
    Fetch.post('/track',data).then((data:any)=>{
        dispatch({type:'TRACK_EDITMODAL_LOADING',loading:false});
        dispatch({type:'TRACK_EDITMODAL_SHOW',show:false});
    })
};

export default actions;
