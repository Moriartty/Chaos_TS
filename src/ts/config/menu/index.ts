import systemConfig from './systemConfig';
import contentMgr from './contentMgr';
import {_Object} from 'customInterface';

const menu:_Object = {
    // ...systemConfig,
    // ...contentMgr,
    // home: {
    //     name: 'menuName_home',
    //     icon: 'home',
    //     operations: [
    //         { key: 'SEARCH', name: 'logView_operation_search' }
    //     ],
    //     page: (cb) => { require.ensure([], require => { cb(require('pages/Home')); }, 'home'); }
    // },
    // report: {
    //     name: 'menuName_report',
    //     icon: 'bar-chart',
    //     operations: [
    //         { key: 'SEARCH', name: 'logView_operation_search' }
    //     ],
    //     page: (cb) => { require.ensure([], require => { cb(require('pages/Report')); }, 'report'); }
    // },
    // profile: {
    //     name: 'menuName_profile',
    //     icon: 'user',
    //     operations: [
    //         { key: 'SEARCH', name: 'logView_operation_search' }
    //     ],
    //     page: (cb) => { require.ensure([], require => { cb(require('pages/Profile')); }, 'profile'); }
    // }
}

export default menu;
