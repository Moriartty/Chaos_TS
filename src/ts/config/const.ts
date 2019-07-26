export default {
    APP_LOGIN:'/login',
    APP_LOGOUT:'/logout',
    APP_ISEXPIRATION:'/isExpiration',
    APP_REFRESHTOKEN:'/refreshToken',
    TRACK_TYPE_GETALL:'/event/trackType/all',
    TRACK_TYPE_GETALL_BYPAGE:'/event/trackType/find',
    TRACK_TYPE_BATCHREMOVE:'/event/trackType/batchRemove',
    TRACK_TYPE_REMOVE:'/event/trackType/remove',
    TRACK_TYPE_SAVE:'/event/trackType/save',
    TRACK_DEMAND_GETALL:'/event/trackDemand/all',
    TRACK_DEMAND_GETALL_BYPAGE:'/event/trackDemand/find',
    TRACK_DEMAND_BATCHREMOVE:'/event/trackDemand/batchRemove',
    TRACK_DEMAND_REMOVE:'/event/trackDemand/remove',
    TRACK_DEMAND_SAVE:'/event/trackDemand/save',
    TRACK_DEMAND_VERIFY:'/event/trackDemand/verifyData',
    TRACK_INFO_GETALL:'/event/trackInfo/all',
    TRACK_INFO_GETALL_BYPAGE:'/event/trackInfo/find',
    TRACK_INFO_BATCHREMOVE:'/event/trackInfo/batchRemove',
    TRACK_INFO_REMOVE:'/event/trackInfo/remove',
    TRACK_INFO_SAVE:'/event/trackInfo/save',
    FIELDTRANS_GETALL:'/translate/loadTranslate',
    FIELDTRANS_CREATE:'/translate/createTranslate',
    FIELDTRANS_BATCH_CREATE:'/translate/multipleCreateTranslates',
    FIELDTRANS_MODIFY:'/translate/modifyTranslate',
    FIELDTRANS_REMOVE:'/translate/removeTranslate',
    FIELDTRANS_BATCHREMOVE:'/translate/multipleRemoveTranslates',

}

const menuTypes = [{id:1,name:'系统'},{ id: 2, name: '目录' }, { id: 3, name: '菜单' },{id:4,name:'操作'}];

export {menuTypes}