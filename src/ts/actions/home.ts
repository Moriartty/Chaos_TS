import Fetch from '../utils/fetch';
import { _Object } from 'customInterface';

let actions:_Object = {};

actions.loadAllSystem = (userId:number) => (dispatch:any) => {
    return Fetch.get('/getAvailableSystemByUser',{}).then((data:any)=>{
        dispatch({type:'HOME_AVAILABLE_SYSTEM',list:data})
    })
}

export default actions;
