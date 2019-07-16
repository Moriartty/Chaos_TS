import { objectAppend } from '../utils';
import { _Object } from 'customInterface';

const defaultState:_Object = {
    availableSystem:[]
};

export default (state:_Object, action:_Object) => {
    let newState:_Object = {};
    switch (action.type) {
        case 'HOME_AVAILABLE_SYSTEM':
            newState.availableSystem = action.list;
            break;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};


