export default {
    APP_LOGIN:'/login',
    APP_ISEXPIRATION:'/isExpiration',
    APP_REFRESHTOKEN:'/refreshToken',
    TRACK_TYPE_GETALL:'/event/trackType/find',
    TRACK_TYPE_BATCHREMOVE:'/event/trackType/batchRemove',
    TRACK_TYPE_REMOVE:'/event/trackType/remove',
    TRACK_TYPE_SAVE:'/event/trackType/save',
    TRACK_DEMAND_GETALL:'/event/trackDemand/find',
    TRACK_DEMAND_BATCHREMOVE:'/event/trackDemand/batchRemove',
    TRACK_DEMAND_REMOVE:'/event/trackDemand/remove',
    TRACK_DEMAND_SAVE:'/event/trackDemand/save',
    TRACK_DEMAND_VERIFY:'/event/trackDemand/verifyData'

}

const menuTypes = [{id:1,name:'系统'},{ id: 2, name: '目录' }, { id: 3, name: '菜单' },{id:4,name:'操作'}];

export {menuTypes}