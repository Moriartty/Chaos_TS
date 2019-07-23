/**
 * 每个模块对应一个reducer
 */
import { combineReducers } from 'redux';
import app from './app';
import role from './role';
import menu from './menu';
import user from './user';
import home from './home';
import tags from './tags';
import profile from './profile';
import track from './track';

export default combineReducers({
    app,
    role,
    menu,
    user,
    home,
    tags,
    profile,
    track
});
