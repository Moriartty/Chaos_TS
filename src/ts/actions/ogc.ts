
import Fetch from '../utils/fetch';
import { _Object } from 'customInterface';
let actions:_Object = {};

/**
 * 加载OGC列表
 * @param pageNo
 * @param pageSize
 * @returns {function(*, *)}
 */
actions.loadList = (pageNo:number, pageSize:number) => (dispatch:any, getState:any) => {
    dispatch({ type: 'OGC_LOADING', loading: true });
    const state = getState()['ogc'];
    const page = state.page;
    const params = state.searchParams;

    return Fetch.get('/ogc', {
        pageNo: pageNo || page.pageNo,
        pageSize: pageSize || page.pageSize
    }).then((data:any) => {
        dispatch({ type: 'OGC_LOADING', loading: false });
        dispatch({
            type: 'OGC_LOAD',
            pageNo: pageNo || data.pageNo,
            pageSize: data.pageSize,
            dataCount: data.totalCount,
            list: data.result
        });
    });
};
/**
 * 保存编辑
 * @param data
 * @returns {function(*)}
 */
actions.editItem = (data:any) => (dispatch:any) => {
    dispatch({type:'OGC_EDITMODAL_LOADING',loading:true});
    Fetch.post('/ogc',data).then((data:any)=>{
        dispatch({type:'OGC_EDITMODAL_LOADING',loading:false});
        dispatch({type:'OGC_EDITMODAL_SHOW',show:false});
    })
};

export default actions;
