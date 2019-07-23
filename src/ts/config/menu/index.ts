import systemConfig from './systemConfig';
import track from './track';
import {_Object} from 'customInterface';

const menu:_Object = {
    ...systemConfig,
    ...track,
    home: {
        name: 'menuName_home',
        icon: 'home',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/Home')); },null, 'home'); }
    },
    profile: {
        name: 'menuName_profile',
        icon: 'user',
        operations: [
            { key: 'SEARCH', name: 'logView_operation_search' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/Profile')); },null, 'profile'); }
    }
}

export default menu;
