export default {
    'track/trackInfo': {
        name: 'menuName_track_trackInfo',
        icon: 'bars',
        operations: [
            { name: 'trackInfo_operation_view' },
            { name: 'trackInfo_operation_add' },
            { name: 'trackInfo_operation_modify' },
            { name: 'trackInfo_operation_delete' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/Track/TrackInfoMgr')); } , null , 'trackInfo'); }
    },
    'track/trackType': {
        name: 'menuName_track_trackType',
        icon: 'bars',
        operations: [
            { name: 'trackType_operation_view' },
            { name: 'trackType_operation_add' },
            { name: 'trackType_operation_modify' },
            { name: 'trackType_operation_delete' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/Track/TrackTypeMgr')); } , null , 'trackType'); }
    },
    'track/trackDemand': {
        name: 'menuName_track_trackDemand',
        icon: 'bars',
        operations: [
            { name: 'trackDemand_operation_view' },
            { name: 'trackDemand_operation_add' },
            { name: 'trackDemand_operation_modify' },
            { name: 'trackDemand_operation_delete' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/Track/TrackDemandMgr')); } , null , 'trackDemand'); }
    },
}