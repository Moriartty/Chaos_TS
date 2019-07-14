import Fetch from 'utils/fetch';
import { _Object } from 'customInterface';

let actions:_Object = {};

actions.loadAllTags = () => (dispatch:any) => {
    dispatch({type:'TAGS_LOADING',loading:true});
    return Fetch.get('/tags').then((data:any)=>{
        dispatch({type:'TAGS_LOAD',data:data});
        dispatch({type:'TAGS_LOADING',loading:false});
    })
};

export default actions;
