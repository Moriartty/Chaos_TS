import {objectAppend} from '../utils';
import { _Object } from 'customInterface';

const defaultState:_Object = {
    loading:false,
    data:[],
};

export default (state:_Object,action:_Object) => {
    let newState:_Object = {};
    switch(action.type){
        case 'TAGS_LOADING':
            newState.loading = action.loading;
            break;
        case 'TAGS_LOAD':
            newState.data = action.data;
            break;
        default : return state||defaultState;
    }
    return objectAppend(newState,state);
}
