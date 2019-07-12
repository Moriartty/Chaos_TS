import { objectAppend } from '../utils';

const defaultState = {
    availableSystem:[]
};

export default (state, action) => {
    let newState = {};
    switch (action.type) {
        case 'HOME_AVAILABLE_SYSTEM':
            newState.availableSystem = action.list;
            break;
        default:return state || defaultState;
    }
    return objectAppend(newState, state);
};


