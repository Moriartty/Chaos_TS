webpackJsonp([11],{

/***/ 1555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = __importDefault(__webpack_require__(256));
var const_1 = __importDefault(__webpack_require__(123));
var api_1 = __webpack_require__(124);
var antd_1 = __webpack_require__(43);
var app_1 = __importDefault(__webpack_require__(75));
var actions = {};
var trackOpts = { baseUrl: api_1.proBaseUrls.baseUrl1 };
/**
 * 加载埋点类型列表(分页)
 * @param pageNo
 * @param pageSize
 * @returns {function(*, *)}
 */
actions.loadTrackType = function (pageNo, pageSize) { return function (dispatch, getState) {
    dispatch({ type: 'TRACK_TYPE_LOADING', loading: true });
    var state = getState()['track'], page = state.trackType_page, params = state.trackType_searchParams;
    var dataParam = {};
    Object.keys(params).forEach(function (o) {
        dataParam['LIKE_' + o] = params[o];
    });
    var pageParam = {
        page: pageNo || page.pageNo,
        size: pageSize || page.pageSize
    };
    return fetch_1.default.post(const_1.default.TRACK_TYPE_GETALL_BYPAGE, { data: dataParam, page: pageParam }, trackOpts).then(function (data) {
        dispatch({ type: 'TRACK_TYPE_LOADING', loading: false });
        dispatch({
            type: 'TRACK_TYPE_LOAD',
            pageNo: pageNo || data.page.currPage,
            pageSize: data.page.size,
            dataCount: data.page.total,
            list: data.data
        });
        dispatch(app_1.default.setSearchParamsInLocalStorage(params, 'TRACK_TYPE_SEARCHPARAM_CHANGE'));
    });
}; };
/**
 * 加载全部trackType数据
 */
actions.loadAllTrackType = function () { return function (dispatch) {
    return fetch_1.default.get(const_1.default.TRACK_TYPE_GETALL, {}, trackOpts).then(function (data) {
        dispatch({ type: 'TRACK_TYPE_ALLDATA', list: data });
    });
}; };
/**
 * 新增或编辑track
 */
actions.addOrEditTrackType = function (data) { return function (dispatch) {
    fetch_1.default.post(const_1.default.TRACK_TYPE_SAVE, data, {}, trackOpts).then(function () {
        antd_1.message.success('操作成功');
        dispatch({ type: 'TRACK_TYPE_EDITMODAL_SHOW', show: false });
        dispatch(actions.loadTrackType());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 删除一个埋点类型
 */
actions.deleteTrack = function (key) { return function (dispatch) {
    fetch_1.default.get(const_1.default.TRACK_TYPE_REMOVE + '/' + key, {}, trackOpts).then(function () {
        antd_1.message.success('操作成功');
        dispatch(actions.loadTrackType());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 批量删除埋点类型
 */
actions.batchDeleteTrack = function (keys) {
    fetch_1.default.get(const_1.default.TRACK_TYPE_BATCHREMOVE, { ids: keys.join(',') }, trackOpts).then(function (data) {
        antd_1.message.success('操作成功');
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
};
/**
 * 加载TrackDemand列表(分页)
 */
actions.loadTrackDemand = function (pageNo, pageSize) { return function (dispatch, getState) {
    dispatch({ type: 'TRACK_DEMAND_LOADING', loading: true });
    var state = getState()['track'], page = state.trackDemand_page, params = state.trackDemand_searchParams;
    var dataParam = {
        'LIKE_name': params['name'],
        'EQ_trackType': params['trackType'],
        'EQ_state': params['viewState']
    };
    // (state.trackDemand_searchParams.viewState===0)?dataParam['EQ_state']=0:'';
    var pageParam = {
        page: pageNo || page.pageNo,
        size: pageSize || page.pageSize
    };
    return fetch_1.default.post(const_1.default.TRACK_DEMAND_GETALL_BYPAGE, { data: dataParam, page: pageParam }, trackOpts).then(function (data) {
        dispatch({ type: 'TRACK_DEMAND_LOADING', loading: false });
        dispatch({
            type: 'TRACK_DEMAND_LOAD',
            pageNo: pageNo || data.page.currPage,
            pageSize: data.page.size,
            dataCount: data.page.total,
            list: data.data
        });
        dispatch(app_1.default.setSearchParamsInLocalStorage(params, 'TRACK_DEMAND_SEARCHPARAM_CHANGE'));
    });
}; };
/**
 * 加载全部trackDemand数据
 */
actions.loadAllTrackDemand = function () { return function (dispatch) {
    return fetch_1.default.get(const_1.default.TRACK_DEMAND_GETALL, {}, trackOpts).then(function (data) {
        dispatch({ type: 'TRACK_DEMAND_ALLDATA', list: data });
    });
}; };
/**
 * 新增或编辑trackDemand
 */
actions.addOrEditTrackDemand = function (data) { return function (dispatch) {
    fetch_1.default.post(const_1.default.TRACK_DEMAND_SAVE, data, trackOpts).then(function () {
        antd_1.message.success('操作成功');
        dispatch({ type: 'TRACK_DEMAND_EDITMODAL_SHOW', show: false });
        dispatch(actions.loadTrackDemand());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 删除一个埋点需求
 */
actions.deleteTrackDemand = function (key) { return function (dispatch) {
    fetch_1.default.get(const_1.default.TRACK_DEMAND_REMOVE + '/' + key, {}, trackOpts).then(function () {
        antd_1.message.success('操作成功');
        dispatch(actions.loadTrackDemand());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 批量删除埋点需求
 */
actions.batchDeleteTrackDemand = function (keys) { return function () {
    fetch_1.default.get(const_1.default.TRACK_DEMAND_BATCHREMOVE, { ids: keys.join(',') }, trackOpts).then(function (data) {
        antd_1.message.success('操作成功');
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 审核埋点需求
 */
actions.verifyTrackDemand = function (state, data) { return function (dispatch) {
    var params = {
        strIds: data.id,
        verifyResult: state,
        verifyMessage: data.verifyMessage
    };
    fetch_1.default.post(const_1.default.TRACK_DEMAND_VERIFY, { map: params }, trackOpts).then(function () {
        dispatch({ type: 'TRACK_DEMAND_VERIFYMODAL_SHOW', show: false });
        dispatch(actions.loadTrackDemand());
        antd_1.message.success('操作成功');
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 加载trackInfo
 */
actions.loadTrackInfo = function (pageNo, pageSize) { return function (dispatch, getState) {
    dispatch({ type: 'TRACK_INFO_LOADING', loading: true });
    var state = getState()['track'], page = state.trackInfo_page, params = state.trackInfo_searchParams;
    var dataParam = {
        'LIKE_eventId': params['eventId'],
        'EQ_eventType': params['eventType'],
        'EQ_trackType': params['trackType']
    };
    var pageParam = {
        page: pageNo || page.pageNo,
        size: pageSize || page.pageSize
    };
    return fetch_1.default.post(const_1.default.TRACK_INFO_GETALL_BYPAGE, { data: dataParam, page: pageParam }, trackOpts).then(function (data) {
        dispatch({ type: 'TRACK_INFO_LOADING', loading: false });
        dispatch({
            type: 'TRACK_INFO_LOAD',
            pageNo: pageNo || data.page.currPage,
            pageSize: data.page.size,
            dataCount: data.page.total,
            list: data.data
        });
        dispatch(app_1.default.setSearchParamsInLocalStorage(params, 'TRACK_INFO_SEARCHPARAM_CHANGE'));
    });
}; };
/**
 * 新增或编辑track
 */
actions.addOrEditTrackInfo = function (data) { return function (dispatch) {
    fetch_1.default.post(const_1.default.TRACK_INFO_SAVE, data, trackOpts).then(function () {
        antd_1.message.success('操作成功');
        dispatch({ type: 'TRACK_INFO_EDITMODAL_SHOW', show: false });
        dispatch(actions.loadTrackInfo());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 删除一个埋点类型
 */
actions.deleteTrackInfo = function (key) { return function (dispatch) {
    fetch_1.default.get(const_1.default.TRACK_INFO_REMOVE + '/' + key, {}).then(function () {
        antd_1.message.success('操作成功');
        dispatch(actions.loadTrackInfo());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 批量删除埋点类型
 */
actions.batchDeleteTrackInfo = function (keys) {
    fetch_1.default.get(const_1.default.TRACK_INFO_BATCHREMOVE, { ids: keys.join(',') }).then(function (data) {
        console.log(data);
        antd_1.message.success('操作成功');
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
};
exports.default = actions;


/***/ }),

/***/ 1557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = __importDefault(__webpack_require__(256));
var const_1 = __importDefault(__webpack_require__(123));
var app_1 = __importDefault(__webpack_require__(75));
var action = {};
/**
 * 加载角色列表
 * @returns {Function}
 */
action.loadList = function () { return function (dispatch) { return fetch_1.default.get(const_1.default.ROLE_ALLDATA_LOAD, {}).then(function (list) {
    dispatch({ type: 'ROLE_LIST', list: list });
}); }; };
/**
 * 加载菜单树状结构数据
 * @returns {Function}
 */
function loadMenuTree(systemId) {
    return function (dispatch, getState) {
        var searchParams = getState().role.searchParams;
        var target = systemId || searchParams.selectedSystem;
        return fetch_1.default.get(const_1.default.MENU_TREE_LOAD, { systemId: target }).then(function (data) {
            var treeData = [
                { oid: '', name: 'menuName_permission', icon: 'am-icon-home', list: [data] }
            ];
            // 递归添加<tr>
            var recursive = function (item) {
                // id统一转化为字符串
                item.id = String(item.oid);
                // 手动添加操作权限
                // if (item.module && menuConfig[item.module].operations) { // 过滤出菜单
                //     item.list = menuConfig[item.module].operations.map((o:_Object) => {
                //         return { id: item.id + '_' + o.key, name: o.name, type: 'OPT' };
                //     });
                // }
                if (item.list && item.list.length) {
                    item.list.forEach(function (o, i, list) {
                        o.level = item.level + 1;
                        o.last = i === list.length - 1; // 是否为当前级别的最后一个
                        o.indents = item.indents.slice(0, -1); // 包含父级菜单的前(n-1)个
                        if (o.level > 1) {
                            // 父菜单的第n个不一定跟子菜单同列的那个相同，这里结合图形看更直观
                            o.indents.push(item.last ? '' : '│');
                        }
                        o.indents.push(o.last ? '└' : '├'); // 该级菜单的最后一个
                        recursive(o);
                    });
                }
            };
            treeData.forEach(function (o, i, list) {
                o.indents = []; // 体现菜单关系的缩进符
                o.level = 0; // 菜单深度级别，从0级开始
                o.last = i === list.length - 1; // 是否为当前级别的最后一个
                recursive(o);
            });
            dispatch({ type: 'ROLE_MENU_TREE', data: treeData });
            dispatch(app_1.default.setSearchParamsInLocalStorage(searchParams, 'ROLE_SEARCHPARAMS_CHANGE'));
        });
    };
}
action.loadMenuTree = loadMenuTree;
/**
 * 选择角色
 * @param role
 * @returns {Function}
 */
function selectRole(role) {
    return function (dispatch) {
        dispatch({ type: 'ROLE_SELECT', role: role });
        return fetch_1.default.get(const_1.default.ROLE_OPERATIONS_LOAD, {
            rid: role.rid
        }).then(function (data) {
            var roleAuth = [];
            // // 只要有一个勾上，则顶级节点（非实际菜单）也得勾上
            // if (data.length) {
            //     roleAuth.push('0');
            //     data.forEach(o => {
            //         roleAuth.push(String(o.menuId));
            //         // 操作类型
            //         if (o.functions) {
            //             roleAuth = roleAuth.concat(o.functions.map((func:any) => `${o.menuId}_${func}`));
            //         }
            //     });
            // }
            if (data.length) {
                // roleAuth.push('0');
                data.forEach(function (o) {
                    roleAuth.push(String(o.oid));
                });
                roleAuth = Array.from(new Set(roleAuth));
            }
            dispatch({ type: 'ROLE_MENU_LOADED', roleAuth: roleAuth });
            dispatch({ type: 'ROLE_SEARCHPARAMS_CHANGE', params: { selectedRole: role.rid } });
        });
    };
}
action.selectRole = selectRole;
/**
 * 更新角色菜单权限
 * @param roleId
 * @param data
 * @returns {Function}
 */
action.updateRoleMenu = function (roleId, data) { return function (dispatch) {
    return fetch_1.default.post(const_1.default.ROLE_OPREATION_ASSIGN, __assign({ rid: roleId }, data));
}; };
/**
 * 添加角色
 * @param data
 * @returns {Function}
 */
function addRole(data) {
    return function (dispatch) {
        return fetch_1.default.post(const_1.default.USER_CREATE, {
            name: data.name,
            desc: data.desc
        });
    };
}
action.addRole = addRole;
/**
 * 更新角色
 * @param data
 * @returns {Function}
 */
function updateRole(data) {
    return function (dispatch) {
        return fetch_1.default.post('/role/update', {
            id: data.id,
            name: data.name,
            desc: data.desc
        });
    };
}
action.updateRole = updateRole;
/**
 * 删除角色
 * @param id
 * @returns {Function}
 */
function deleteRole(id) {
    return function (dispatch) {
        return fetch_1.default.post(const_1.default.USER_REMOVE, id).then(function () {
            // 取消当前选择的角色
            dispatch({ type: 'ROLE_SELECT', role: {} });
            // 重新加载角色列表
            dispatch(action.loadList());
        });
    };
}
action.deleteRole = deleteRole;
exports.default = action;


/***/ }),

/***/ 1558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = __importDefault(__webpack_require__(256));
var const_1 = __importDefault(__webpack_require__(123));
var antd_1 = __webpack_require__(43);
var app_1 = __importDefault(__webpack_require__(75));
var action = {};
/**
 * 获取系统列表
 */
action.loadSystemList = function () { return function (dispatch) {
    return fetch_1.default.get(const_1.default.APP_GETALLSYSTEM, {}).then(function (data) {
        dispatch({ type: 'MENU_SYSTEMLIST_LOAD', systemList: data });
        return data;
    });
}; };
/**
 * 获取菜单列表
 * @returns {Function}
 */
function loadList(id) {
    return function (dispatch, getState) {
        var searchParams = getState().menu.searchParams;
        var targetSystem = id || searchParams.selectedSystem;
        //先加载系统列表，如果不为空，就选择第一个作为默认值,并且没有搜索记录，并加载该系统的目录
        if (!targetSystem) {
            var systemList = getState().menu.systemList;
            targetSystem = systemList[0].oid;
            dispatch({ type: 'MENU_SEARCHPARAMS_CHANGE', params: { selectedSystem: targetSystem } });
        }
        dispatch({ type: 'MENU_LOADING', loading: true });
        return fetch_1.default.get(const_1.default.MENU_TREE_LOAD, { systemId: targetSystem }).then(function (data) {
            var menuList = [];
            var treeData = [
                { name: '(根目录)', list: [data] }
            ];
            // 递归添加<tr>
            function recursive(item) {
                // 忽略根目录那行functionfunction
                if (item.level > 0) {
                    menuList.push(item);
                }
                item.id = item.oid;
                if (item.list && item.list.length) {
                    item.list.forEach(function (o, i, list) {
                        o.level = item.level + 1;
                        o.last = i === list.length - 1; // 是否为当前级别的最后一个
                        o.indents = item.indents.slice(0, -1); // 包含父级菜单的前(n-1)个
                        if (o.level > 1) {
                            // 父菜单的第n个不一定跟子菜单同列的那个相同，这里结合图形看更直观
                            o.indents.push(item.last ? '' : '│');
                        }
                        o.indents.push(o.last ? '└' : '├'); // 该级菜单的最后一个
                        recursive(o);
                    });
                }
            }
            treeData.forEach(function (item, i, list) {
                item.indents = []; // 体现菜单关系的缩进符
                item.level = 0; // 菜单深度级别，从0级开始
                item.last = i === list.length - 1; // 是否为当前级别的最后一个
                item.id = item.oid;
                recursive(item);
            });
            dispatch({ type: 'MENU_LIST', list: menuList });
            dispatch({ type: 'MENU_LOADING' });
            dispatch(app_1.default.setSearchParamsInLocalStorage(searchParams, 'MENU_SEARCHPARAMS_CHANGE'));
        });
    };
}
action.loadList = loadList;
/**
 * 添加菜单
 * @param data
 * @returns {Function}
 */
action.addMenu = function (data) { return function (dispatch) {
    return fetch_1.default.post(const_1.default.MENU_NODE_CREATE, data).then(function (data) {
        dispatch(action.loadList());
        antd_1.message.success('操作成功');
    }).catch(function (err) {
        antd_1.message.success('操作失败');
    });
}; };
/**
 * 更新菜单
 * @param data
 * @returns {Function}
 */
action.updateMenu = function (data) { return function (dispatch) { return fetch_1.default.post('/menu/update', data); }; };
/**
 * 删除菜单
 * @param id
 * @returns {Function}
 */
action.deleteMenu = function (id) { return function (dispatch, getState) {
    var target = getState().menu.list.find(function (o) {
        return o.id == id;
    });
    var deleteSet = [];
    function recursive(item) {
        if (item.list && item.list.length) {
            item.list.forEach(function (o, i, list) {
                deleteSet.push(o.id);
                recursive(o);
            });
        }
    }
    deleteSet.push(target.id);
    recursive(target);
    return fetch_1.default.post(const_1.default.MENU_OPERATION_REMOVE, { oid: id }).then(function () {
        dispatch(action.loadList());
        antd_1.message.success('操作成功');
    }).catch(function (err) {
        antd_1.message.success('操作失败');
    });
}; };
/**
 * 移动菜单
 * @param id
 * @param isUp 是否上移，否则下移
 * @returns {Function}
 */
action.moveMenu = function (id, isUp) { return function (dispatch) { return fetch_1.default.post(isUp ? '/menu/up' : '/menu/down', { id: id }); }; };
exports.default = action;


/***/ }),

/***/ 1559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(0));
var antd_1 = __webpack_require__(43);
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        var _a = this.props, onRefresh = _a.onRefresh, children = _a.children, bodyStyle = _a.bodyStyle;
        return (React.createElement("div", { className: 'toolbar' },
            React.createElement("div", { className: 'left', style: bodyStyle }, children),
            React.createElement("div", { className: 'right' },
                React.createElement(antd_1.Button, { type: 'primary', onClick: onRefresh, icon: 'reload', href: "" }, "\u5237\u65B0"))));
    };
    return Toolbar;
}(React.Component));
exports.default = Toolbar;


/***/ }),

/***/ 1561:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1587);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(176)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./track.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./track.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(175)(false);
// imports


// module
exports.push([module.i, ".ogcContainer {\n  background: #fff;\n  padding: 20px 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__(78);
var app_1 = __importDefault(__webpack_require__(75));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var RegionSelector = /** @class */ (function (_super) {
    __extends(RegionSelector, _super);
    function RegionSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.loadData = function (selectedOptions) {
            var targetOption = selectedOptions[selectedOptions.length - 1];
            targetOption.loading = true;
            var level = _this.props.level;
            var obj = {
                province: { subMethod: 'fetchCityDicList', subCategory: 'city', subLevel: 2 },
                city: { subMethod: 'fetchCountyDicList', subCategory: 'county', subLevel: 3 },
                county: { subMethod: 'fetchPlaceDicList', subCategory: 'place', subLevel: 4 }
            };
            var subObj = obj[targetOption.category];
            if (subObj) {
                app_1.default[subObj.subMethod](targetOption.value).then(function (list) {
                    targetOption.loading = false;
                    targetOption.children = list.map(function (o) { return ({
                        category: subObj.subCategory,
                        value: o.id,
                        label: o.name,
                        isLeaf: level === subObj.subLevel // 是否只选到当前级
                    }); });
                    _this.setState({
                        options: _this.state.options.slice()
                    });
                });
            }
        };
        var value = props.value, level = props.level, provinceDicList = props.provinceDicList;
        if (value && value.length > 1 && value[0] && value[1]) { // 只有选择第二级以下时才需要预加载第二个列表以下
            _this.state = { options: [] };
            var actions = [app_1.default.fetchCityDicList(value[0])];
            if (value[2]) {
                actions.push(app_1.default.fetchCountyDicList(value[1]));
            }
            // 本来有初始选项的
            Promise.all(actions).then(function (resultList) {
                _this.setState({
                    options: provinceDicList.map(function (o) { return ({
                        category: 'province',
                        value: o.id,
                        label: o.name,
                        isLeaf: level === 1,
                        children: value[0] === o.id && resultList[0].map(function (city) { return ({
                            category: 'city',
                            value: city.id,
                            label: city.name,
                            isLeaf: level === 2,
                            children: value[1] === city.id && resultList[1] && resultList[1].map(function (county) { return ({
                                category: 'county',
                                value: county.id,
                                label: county.name,
                                isLeaf: level === 3,
                                children: value[2] === county.id && resultList[2] && resultList[2].map(function (place) { return ({
                                    category: 'place',
                                    value: place.id,
                                    label: place.name,
                                    isLeaf: level === 4
                                }); })
                            }); })
                        }); })
                    }); })
                });
            });
        }
        else {
            _this.state = {
                options: provinceDicList.map(function (o) { return ({ category: 'province', value: o.id, label: o.name, isLeaf: level === 1 }); })
            };
        }
        return _this;
    }
    RegionSelector.prototype.render = function () {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        return React.createElement(antd_1.Cascader, { placeholder: "\u8BF7\u9009\u62E9\u5730\u533A", value: value, onChange: function () { return onChange(); }, options: this.state.options, loadData: this.loadData, changeOnSelect: true });
    };
    RegionSelector.defaultProps = {
        level: 3
    };
    return RegionSelector;
}(React.Component));
var RegionSelectorComp = react_redux_1.connect(function (state) {
    return { provinceDicList: state.app.provinceDicList };
})(RegionSelector);
exports.default = RegionSelectorComp;


/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var evan_you_1 = __importDefault(__webpack_require__(860));
exports.EvanYou = evan_you_1.default;
var ExFormItem_1 = __importDefault(__webpack_require__(858));
exports.ExFormItem = ExFormItem_1.default;
var ExModal_1 = __importDefault(__webpack_require__(857));
exports.ExModal = ExModal_1.default;
var ExNotification_1 = __importDefault(__webpack_require__(257));
exports.ExNotification = ExNotification_1.default;
var ExTable_1 = __importDefault(__webpack_require__(859));
exports.ExTable = ExTable_1.default;
var LocaleToggle_1 = __importDefault(__webpack_require__(258));
exports.LocaleToggle = LocaleToggle_1.default;
var Overlay_1 = __importDefault(__webpack_require__(861));
exports.Overlay = Overlay_1.default;
var PotentialError_1 = __importDefault(__webpack_require__(125));
exports.PotentialError = PotentialError_1.default;
var RegionSelector_1 = __importDefault(__webpack_require__(535));
exports.RegionSelector = RegionSelector_1.default;
var CircleBtn_1 = __importDefault(__webpack_require__(864));
exports.CircleBtn = CircleBtn_1.default;


/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
function ExModal(props) {
    return (React.createElement(antd_1.Modal, __assign({ maskClosable: false, destroyOnClose: !props.storeOnClose }, props), props.children));
}
exports.default = ExModal;


/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = __webpack_require__(43);
var RegionSelector_1 = __importDefault(__webpack_require__(535));
var moment_1 = __importDefault(__webpack_require__(3));
var index_1 = __webpack_require__(28);
var FormItem = antd_1.Form.Item;
var RadioGroup = antd_1.Radio.Group;
var index_2 = __webpack_require__(28);
var React = __importStar(__webpack_require__(0));
var formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
var InputFile = /** @class */ (function (_super) {
    __extends(InputFile, _super);
    function InputFile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.change = function (e) {
            var _a = _this.props, multiple = _a.multiple, onChange = _a.onChange;
            onChange(multiple ? Array.prototype.slice.call(e.target.files) : e.target.files[0]);
        };
        return _this;
    }
    InputFile.prototype.render = function () {
        var _a = this.props, value = _a.value, text = _a.text, accept = _a.accept, multiple = _a.multiple;
        return (React.createElement("label", { className: "ant-btn", style: { paddingTop: 4, paddingBottom: 5, height: 'auto', textAlign: 'left' } },
            React.createElement("div", null,
                value ? (multiple ? value.map(function (file, i) { return React.createElement("div", { key: i },
                    React.createElement(antd_1.Icon, { type: "paper-clip" }),
                    " ",
                    file.name); }) : React.createElement("div", null,
                    React.createElement(antd_1.Icon, { type: "paper-clip" }),
                    " ",
                    value.name))
                    : React.createElement("div", null,
                        React.createElement(antd_1.Icon, { type: "paper-clip" }),
                        " ",
                        text || '选择文件',
                        multiple ? '（可多选）' : ''),
                React.createElement("input", { type: "file", accept: accept, multiple: multiple, onChange: this.change, style: { display: 'none' } }))));
    };
    return InputFile;
}(React.PureComponent));
function ExFormItem(props) {
    var getFieldDecorator = props.getFieldDecorator, type = props.type, label = props.label, help = props.help, name = props.name, style = props.style, initialValue = props.initialValue, required = props.required, placeholder = props.placeholder, extraRules = props.extraRules, preList = props.list, _a = props.onChange, onChange = _a === void 0 ? function () { } : _a, withEmpty = props.withEmpty, rows = props.rows, _b = props.disabled, disabled = _b === void 0 ? false : _b;
    var component;
    var rules = [{ required: required, message: label + "\u5FC5\u586B\uFF01" }];
    if (extraRules) {
        rules = rules.concat(extraRules);
    }
    var valuePropName = 'value';
    var trigger = 'onChange';
    var list = [];
    //防止原数据被篡改
    index_2.objectAppend(list, preList);
    if (type === 'select' && withEmpty) {
        var index = list.findIndex(function (o) { return o.id === ''; });
        if (index > -1)
            list.splice(index, 1);
        list.unshift({ id: '', name: '不限' });
    }
    switch (type) {
        case 'select':
            component = (React.createElement(antd_1.Select, { placeholder: placeholder || '请选择', mode: props.mode, showSearch: props.showSearch, onChange: function () { return onChange(); }, allowClear: !props.noClear, optionFilterProp: "children", disabled: disabled }, index_1.isEmpty(list) ? '' : list.map(function (o, i) {
                return React.createElement(antd_1.Select.Option, { disabled: o.disabled, key: i, value: o.id, title: o.name }, props.renderName ? props.renderName(o) : o.name);
            })));
            break;
        case 'radio':
            var RadioOption_1 = props.button ? antd_1.Radio.Button : antd_1.Radio;
            component = (React.createElement(RadioGroup, { onChange: function () { return onChange(); }, disabled: disabled }, list.map(function (o, i) {
                return React.createElement(RadioOption_1, { key: i, value: o.id }, o.name);
            })));
            break;
        case 'textarea':
            component = React.createElement(antd_1.Input.TextArea, { placeholder: placeholder, rows: rows });
            break;
        case 'switch':
            var onText = props.onText, offText = props.offText;
            component = React.createElement(antd_1.Switch, { checkedChildren: onText, unCheckedChildren: offText });
            valuePropName = 'checked';
            break;
        case 'date':
            if (initialValue) {
                initialValue = moment_1.default(initialValue, 'YYYY-MM-DD');
            }
            component = React.createElement(antd_1.DatePicker, { showTime: props.showTime, format: props.showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD', disabledDate: props.disabledDate });
            break;
        case 'date-range':
            var format_1 = 'YYYY-MM-DD';
            var mode = 'date';
            if (props.mode === 'month') {
                trigger = 'onPanelChange';
                format_1 = 'YYYY-MM';
                mode = 'month';
            }
            // 如果传字符串则需要格式化
            if (initialValue && initialValue[0] && typeof initialValue[0] === 'string') {
                initialValue = initialValue.map(function (strValue) { return moment_1.default(strValue, format_1); });
            }
            component = React.createElement(antd_1.DatePicker.RangePicker, { mode: [mode, mode], format: format_1 });
            break;
        case 'hidden':
            return getFieldDecorator(name, {
                initialValue: initialValue
            })(React.createElement(antd_1.Input, { type: "hidden" }));
        case 'static':
            // 不作处理，跳过
            break;
        case 'region':
            component = React.createElement(RegionSelector_1.default, { level: props.level });
            if (required) {
                rules.push({
                    type: 'array',
                    min: props.min || 3,
                    message: '区域须填完整！'
                });
            }
            break;
        case 'file':
            component = React.createElement(InputFile, { text: props.text, accept: props.accept, multiple: props.multiple });
            break;
        case 'custom':
            return React.createElement(FormItem, __assign({}, formItemLayout, { label: label, style: style }), props.children);
        default:
            component = React.createElement(antd_1.Input, { type: type, placeholder: placeholder, min: props.min, max: props.max, step: props.step, onChange: function () { return onChange(); }, onWheel: function (e) { e.preventDefault(); }, addonAfter: props.addonAfter });
            break;
    }
    return (React.createElement(FormItem, __assign({}, formItemLayout, { label: label, help: help, style: style }), type === 'static' ? React.createElement("span", null, initialValue) : getFieldDecorator(name, {
        initialValue: initialValue,
        trigger: trigger,
        valuePropName: valuePropName,
        rules: rules
    })(component)));
}
exports.default = ExFormItem;


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
function ExTable(props) {
    var columns = props.columns, scrollX = props.scrollX, scrollY = props.scrollY, pageNo = props.pageNo, pageSize = props.pageSize, dataCount = props.dataCount, onPageChange = props.onPageChange, onPageSizeChange = props.onPageSizeChange, tableSize = props.tableSize;
    // 不传dataCount时则不分页
    var paginationOptions;
    if (dataCount) {
        paginationOptions = {
            showSizeChanger: true,
            showQuickJumper: true,
            pageSize: pageSize,
            current: pageNo,
            total: dataCount,
            showTotal: function (total, range) { return "\u5F53\u524D\u663E\u793A " + range[0] + "-" + range[1] + "\uFF0C\u5171 " + total + " \u6761\u8BB0\u5F55"; }
        };
        if (onPageChange) {
            paginationOptions.onChange = onPageChange;
            paginationOptions.onShowSizeChange = onPageSizeChange;
        }
    }
    return (React.createElement(antd_1.Table, __assign({ rowKey: "id", pagination: paginationOptions, 
        // 设置了scrollY可以使表头固定，但会使表头与表格内容不对齐，奇怪！
        // scroll={{x:scrollX||Math.max(columns.reduce((a, b) => {
        //     return {width:(a.width||100)+(b.width||100)}; //默认宽度，防止被挤到一块
        // }).width, 1200), y:scrollY}}
        size: tableSize || 'middle' }, props)));
}
exports.default = ExTable;
function EditableCell(props) {
    var editable = props.editable, type = props.type, value = props.value, addonBefore = props.addonBefore, formatter = props.formatter, min = props.min, step = props.step, onChange = props.onChange;
    return (React.createElement("div", null, editable
        ? React.createElement(antd_1.Input, { style: { margin: '-5px 0' }, type: type, min: min, step: step, addonBefore: addonBefore, value: value, onChange: function (e) { return onChange(e.target.value); } })
        : formatter ? formatter(value) : value));
}
exports.EditableCell = EditableCell;


/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(0));
var pr = window.devicePixelRatio || 1, w = window.innerWidth - 5, h = window.innerHeight - 5, q, r = 0, u = Math.PI * 2, v = Math.cos, dist = 90;
var EvanYou = /** @class */ (function (_super) {
    __extends(EvanYou, _super);
    function EvanYou(props) {
        var _this = _super.call(this, props) || this;
        _this.getY = function (y) {
            var result = y + (Math.random() * 2 - 1.1) * dist;
            return (result > h || result < 0) ? _this.getY(y) : result;
        };
        _this.rePaint = function () {
            _this.ctx.clearRect(0, 0, w, h);
            q = [{ x: 0, y: h * 0.7 + dist }, { x: 0, y: h * 0.7 - dist }];
            while (q[1].x < w + dist)
                _this.draw(q[0], q[1]);
        };
        _this.draw = function (point1, point2) {
            _this.ctx.beginPath();
            _this.ctx.moveTo(point1.x, point1.y);
            _this.ctx.lineTo(point2.x, point2.y);
            var k = point2.x + (Math.random() * 2 - 0.25) * dist, n = _this.getY(point2.y);
            _this.ctx.lineTo(k, n);
            _this.ctx.closePath();
            r -= u / -50;
            // ctx.fillStyle = '#000'
            _this.ctx.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16);
            _this.ctx.fill();
            q[0] = q[1];
            q[1] = { x: k, y: n };
        };
        return _this;
    }
    EvanYou.prototype.componentDidMount = function () {
        this._canvas = document.getElementsByTagName('canvas')[0],
            this.ctx = this._canvas.getContext('2d');
        this._canvas.width = w * pr;
        this._canvas.height = h * pr;
        this.ctx.scale(pr, pr);
        this.ctx.globalAlpha = 0.6;
        // document.onclick = (e)=>{
        //     this.rePaint
        // };
        document.ontouchstart = this.rePaint;
        this.rePaint();
    };
    EvanYou.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("canvas", { id: "canvas", style: { position: 'absolute' } })));
    };
    return EvanYou;
}(React.PureComponent));
exports.default = EvanYou;


/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * React v16 createPortal的简单应用
 */
var React = __importStar(__webpack_require__(0));
var ReactDOM = __importStar(__webpack_require__(10));
__webpack_require__(862);
// interface _Overlay extends React.Component{
//     container:any
// }
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay(props) {
        var _this = _super.call(this, props) || this;
        _this.container = document.createElement('div');
        document.body.appendChild(_this.container);
        return _this;
    }
    Overlay.prototype.componentWillMount = function () {
        document.body.style.overflow = 'hidden';
        // $(document.body).css('overflow','hidden')
    };
    Overlay.prototype.componentWillUnmount = function () {
        // $(document.body).css('overflow','auto')
        document.body.style.overflow = 'auto';
        document.body.removeChild(this.container);
    };
    Overlay.prototype.render = function () {
        var _a = this.props.style, width = _a.width, height = _a.height;
        var marginLeft = width === '100%' ? -document.body.clientWidth / 2 : -width / 2, marginTop = height === '100%' ? -document.body.clientHeight / 2 : -height / 2;
        return ReactDOM.createPortal(React.createElement("div", { className: 'overlay', style: __assign({}, this.props.style, { marginLeft: marginLeft, marginTop: marginTop }) },
            React.createElement("div", { className: 'overlay-top' },
                React.createElement("span", { className: 'overlay-close', onClick: this.props.onClose, style: this.props.overlayCloseStyle }, "\u00D7")),
            React.createElement("div", { className: 'overlay-content' }, this.props.children)), this.container);
    };
    return Overlay;
}(React.Component));
exports.default = Overlay;


/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(863);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(176)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?minimize!../../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./overLay.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?minimize!../../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./overLay.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(175)(false);
// imports


// module
exports.push([module.i, ".overlay {\n  box-sizing: border-box;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  outline: rgba(0, 0, 0, 0.5) solid 9999px;\n  z-index: 100;\n}\n.overlay .overlay-top {\n  height: 100px;\n  width: 100%;\n}\n.overlay .overlay-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.overlay .overlay-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #fff;\n  text-align: center;\n  cursor: pointer;\n  height: 80px;\n  width: 100px;\n  font-size: 60px;\n}\n.overlay .overlay-close:hover {\n  transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var CircleBtn = /** @class */ (function (_super) {
    __extends(CircleBtn, _super);
    function CircleBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleBtn.prototype.render = function () {
        var _a = this.props, title = _a.title, icon = _a.icon, onClick = _a.onClick;
        return (React.createElement(antd_1.Button, { title: title, shape: "circle", icon: icon, size: "small", onClick: function () { return onClick(); }, className: "margin-left-sm" }));
    };
    return CircleBtn;
}(React.PureComponent));
exports.default = CircleBtn;


/***/ })

});