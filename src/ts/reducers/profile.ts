import { objectAppend } from 'utils/index';
import { _Object } from 'customInterface';

const defaultState:_Object = {
    roleList:[]
}

export default (state:_Object,action:_Object) => {
    let newState:_Object = {};
    switch(action.type){
        case 'PROFILE_ROLE_LIST_LOAD':
            newState.roleList = action.list;
            break;
        default:return state||defaultState;
    }
    return objectAppend(newState,state);
}