import Fetch from '../utils/fetch';
import { _Object } from 'customInterface';
import API from 'config/const';
import {getCookie} from 'utils/cookies';

let actions:_Object = {};

actions.loadAllSystem = (userId:number) => (dispatch:any) => {
    const uid = getCookie('chaos_uid');
    return Fetch.get(API.MENU_SYSTEM_LOAD_BY_USER,{uid:uid}).then((data:any)=>{
        dispatch({type:'HOME_AVAILABLE_SYSTEM',list:data})
    })
}

export default actions;
