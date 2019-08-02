webpackJsonp([0],{

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = __importDefault(__webpack_require__(256));
var const_1 = __importDefault(__webpack_require__(123));
var action = {};
/**
 * 加载组织数据
 * @returns {Function}
 */
action.loadOrgData = function () { return function (dispatch) { return fetch_1.default.get('/org/tree').then(function (data) {
    var listData = []; // 列状
    var treeData = data;
    // 递归计算附加属性
    var recursive = function (item) {
        listData.push(item);
        if (item.list && item.list.length) {
            item.list.forEach(function (o, i, list) {
                o.parentId = item.id;
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
        o.indents = []; // 体现关系的缩进符
        o.level = 0; // 深度级别，从0级开始
        o.last = i === list.length - 1; // 是否为当前级别的最后一个
        recursive(o);
    });
    dispatch({ type: 'USER_ORG_DATA', data: treeData, listData: listData });
    return treeData;
}); }; };
/**
 * 添加组织
 * @param data
 * @returns {Function}
 */
function addOrg(data) {
    return function (dispatch) {
        return fetch_1.default.post('/org/create', {
            parentId: data.parentId,
            name: data.name
        });
    };
}
action.addOrg = addOrg;
/**
 * 更新组织
 * @param data
 * @returns {Function}
 */
function updateOrg(data) {
    return function (dispatch) {
        return fetch_1.default.post('/org/update', {
            id: data.id,
            parentId: data.parentId,
            name: data.name
        });
    };
}
action.updateOrg = updateOrg;
/**
 * 删除组织
 * @param id
 * @returns {Function}
 */
function deleteOrg(id) {
    return function (dispatch) {
        return fetch_1.default.post('/org/delete', {
            id: id
        });
    };
}
action.deleteOrg = deleteOrg;
/**
 * 选择一个组织
 * @param id
 * @returns {Function}
 */
function selectOrg(id) {
    return function (dispatch) {
        dispatch({ type: 'USER_ORG_SELECT', id: id });
        return dispatch(loadUserPage(id, 1));
    };
}
action.selectOrg = selectOrg;
/**
 * 加载用户分页列表
 * @param orgId
 * @param pageNo
 * @returns {Function}
 */
function loadUserPage(orgId, pageNo) {
    if (pageNo === void 0) { pageNo = 1; }
    return function (dispatch, getState) {
        dispatch({ type: 'USER_LOADING', loading: true });
        var state = getState().user;
        var params = state.searchParams;
        var page = state.page;
        return fetch_1.default.get(const_1.default.USER_ALLDATA_LOAD, {
            currentPage: pageNo || page.pageNo,
            pageSize: page.pageSize,
        }).then(function (data) {
            dispatch({
                type: 'USER_PAGE_LOAD',
                pageNo: data.currentPage,
                pageSize: data.pageSize,
                dataCount: data.totalDataCount,
                // list: data.data.map((user:_Object) => {
                //     user.role = user.roles.map((role:_Object) => role.roleCode);
                //     user.role = user.role.join(',');
                //     return user;
                // })
                list: data.list
            });
            dispatch({ type: 'USER_LOADING' });
        });
    };
}
action.loadUserPage = loadUserPage;
/**
 * 加载指定用户信息
 * @param id
 * @returns {Function}
 */
function loadUserInfo(id) {
    return function (dispatch) {
        return fetch_1.default.get('/user/info', {
            id: id
        }).then(function (data) {
            // 组织
            if (!data.org) {
                data.org = '公司';
            }
            // 角色
            var roleNames = [];
            data.roleIds = data.roles.map(function (o) {
                roleNames.push(o.roleCode);
                return o.id;
            });
            data.role = roleNames.join(',');
            delete data.roles;
            dispatch({ type: 'USER_INFO_LOAD', data: data });
        });
    };
}
action.loadUserInfo = loadUserInfo;
/**
 * 添加用户
 * @param data
 * @returns {Function}
 */
function addUser(data) {
    return function (dispatch) {
        if (!data.password) {
            data.password = '123456';
        }
        return fetch_1.default.ost('/user/create', data);
    };
}
action.addUser = addUser;
/**
 * 更新用户
 * @param data
 * @returns {Function}
 */
function updateUser(data, addRids, delRids) {
    return function (dispatch) {
        return Promise.all([
            fetch_1.default.post(const_1.default.USER_UPDATEINFO, data),
            fetch_1.default.post(const_1.default.USER_ROLE_ASSIGN, { uid: data.uid, addRids: addRids, delRids: delRids })
        ]).then(function () {
        });
    };
}
action.updateUser = updateUser;
/**
 * 设为离职
 * @param id
 * @returns {Function}
 */
function dismissUser(id) {
    return function (dispatch) {
        return fetch_1.default.post('/user/dismiss', {
            id: id
        });
    };
}
action.dismissUser = dismissUser;
/**
 * 重置密码
 * @param id
 * @returns {Function}
 */
function resetPassword(id) {
    return function (dispatch) {
        return fetch_1.default.post('/user/password-reset', {
            id: id,
            password: '123456'
        });
    };
}
action.resetPassword = resetPassword;
exports.default = action;


/***/ }),

/***/ 1586:
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
var react_redux_1 = __webpack_require__(77);
var user_1 = __importDefault(__webpack_require__(1570));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var OrgTree = /** @class */ (function (_super) {
    __extends(OrgTree, _super);
    function OrgTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 折叠/展开
     * @param e
     */
    OrgTree.prototype.collapse = function (e) {
        e.stopPropagation();
        var $this = $(e.currentTarget);
        var $subList = $this.closest('.node-name').next('ul');
        if ($subList.is(':visible')) {
            $this.html('<i class="anticon anticon-plus-square-o">' +
                '<svg viewBox="64 64 896 896" class="" data-icon="plus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>' +
                '</i>');
            $subList.slideUp('fast');
        }
        else {
            $this.html('<i class="anticon anticon-minus-square-o">' +
                '<svg viewBox="64 64 896 896" class="" data-icon="minus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>' +
                '</i>');
            $subList.slideDown('fast');
        }
    };
    /**
     * 渲染每行
     * @param item
     * @returns {XML}
     */
    OrgTree.prototype.renderItem = function (item) {
        var _this = this;
        var list = item.list;
        var _a = this.props, operations = _a.operations, orgSelectedId = _a.orgSelectedId, onDelete = _a.onDelete, onSelect = _a.onSelect, onEdit = _a.onEdit;
        return (React.createElement("li", { key: item.index },
            React.createElement("div", { onClick: onSelect.bind(this, item.id), className: 'no-select node-name' + (orgSelectedId == item.id ? ' selected' : '') },
                item.indents.map(function (indent, index) {
                    return (React.createElement("span", { key: index, className: "indent" }, index == (item.indents.length - 1) && list && list.length ? (React.createElement("a", { onClick: _this.collapse.bind(_this), className: "cursor-pointer collapse" },
                        React.createElement(antd_1.Icon, { type: "minus-square-o" }))) : indent));
                }),
                React.createElement("span", null, item.name),
                item.level > 0 && (React.createElement("div", { className: "actions", onClick: function (e) { e.stopPropagation(); } },
                    operations.include('UPDATE') && React.createElement("a", { href: "javascript:;", onClick: onEdit.bind(this, item) },
                        React.createElement(antd_1.Icon, { type: "edit" }),
                        " "),
                    operations.include('DELETE') && (React.createElement(antd_1.Popconfirm, { placement: "right", title: "\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u7EC4\u7EC7\u5417\uFF1F", onConfirm: onDelete.bind(this, item.id) },
                        React.createElement("a", { href: "javascript:;", className: "text-danger margin-left-xs" },
                            React.createElement(antd_1.Icon, { type: "delete" }),
                            " ")))))),
            list && list.length > 0 && (React.createElement("ul", { className: "unstyled" }, list.map(function (o, i) {
                o.index = i;
                return _this.renderItem(o);
            })))));
    };
    OrgTree.prototype.render = function () {
        var _this = this;
        var _a = this.props, userSearchKey = _a.userSearchKey, orgData = _a.orgData;
        return (React.createElement("div", { className: "user-org padding-right-sm" },
            React.createElement("ul", { className: "unstyled" }, orgData.map(function (o, i) {
                o.index = i;
                return _this.renderItem(o);
            })),
            userSearchKey && React.createElement("div", { className: "cover" })));
    };
    return OrgTree;
}(React.Component));
var OrgTreeComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/user'].functions;
    var _a = state.user, userSearchKey = _a.userSearchKey, orgData = _a.orgData, orgSelectedId = _a.orgSelectedId;
    return { operations: operations, userSearchKey: userSearchKey, orgData: orgData, orgSelectedId: orgSelectedId };
}, function (dispatch) { return ({
    /**
     * 选择组织
     * @param id
     */
    onSelect: function (id) {
        dispatch(user_1.default.selectOrg(id));
    },
    /**
     * 编辑
     * @param item
     */
    onEdit: function (item) {
        dispatch({ type: 'USER_ORG_EDIT', data: item });
    },
    /**
     * 删除
     * @param id
     */
    onDelete: function (id) {
        dispatch(user_1.default.deleteOrg(id)).then(function () {
            // 重新加载列表
            dispatch(user_1.default.loadOrgData());
        });
    }
}); })(OrgTree);
exports.default = OrgTreeComp;


/***/ }),

/***/ 1587:
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
var react_redux_1 = __webpack_require__(77);
var user_1 = __importDefault(__webpack_require__(1570));
var ExTable_1 = __importDefault(__webpack_require__(873));
var React = __importStar(__webpack_require__(0));
var antd_1 = __webpack_require__(43);
var react_intl_1 = __webpack_require__(160);
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        var operations = props.operations, onUserInfoShow = props.onUserInfoShow, onEdit = props.onEdit;
        _this.columns = [
            { title: '账号', dataIndex: 'username' },
            { title: '姓名', dataIndex: 'name' },
            { title: '性别', dataIndex: 'sex' },
            { title: '邮箱', dataIndex: 'email' },
            { title: '手机', dataIndex: 'phone' },
            { title: '角色', dataIndex: 'roles', render: function (value, data) {
                    return value.map(function (o) { return o.name; }).join(',');
                } },
            { title: '组织', dataIndex: 'org' },
            { title: '操作', render: function (value, data) {
                    var actions = [];
                    actions.push(React.createElement("a", { key: "b1", onClick: onUserInfoShow.bind(_this, data) },
                        React.createElement(react_intl_1.FormattedMessage, { id: 'user_operation_view' })));
                    if (operations.include('user_operation_modify')) {
                        actions.push(React.createElement("a", { key: "b2", onClick: onEdit.bind(_this, data) },
                            React.createElement(react_intl_1.FormattedMessage, { id: 'user_operation_modify' })));
                    }
                    return React.createElement("div", null, actions.joinItem(function (i) { return React.createElement(antd_1.Divider, { key: i, type: "vertical" }); }));
                } }
        ];
        return _this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var _a = this.props, loading = _a.loading, list = _a.userPageList, pageNo = _a.pageNo, dataCount = _a.dataCount, pageSize = _a.pageSize, searchParams = _a.searchParams, onRowClick = _a.onRowClick, onPageChange = _a.onPageChange, onPageSizeChange = _a.onPageSizeChange;
        var paginationOptions = { pageSize: pageSize, pageNo: pageNo, dataCount: dataCount, onPageChange: onPageChange, onPageSizeChange: onPageSizeChange };
        return (React.createElement(ExTable_1.default, __assign({}, paginationOptions, { loading: loading, columns: this.columns, rowKey: 'uid', onRow: function (record) { return ({ onClick: onRowClick.bind(_this, record.id) }); }, dataSource: list })));
    };
    return Table;
}(React.Component));
var TableComp = react_redux_1.connect(function (state) {
    var _a = state['user'], userPageList = _a.userPageList, page = _a.page, searchParams = _a.searchParams, loading = _a.loading;
    return __assign({ userPageList: userPageList }, page, { searchParams: searchParams, loading: loading });
}, function (dispatch) { return ({
    onPageSizeChange: function (current, pageSize) {
        dispatch({ type: 'USER_SEARCH_PARAMS', params: { pageSize: pageSize } });
        dispatch(user_1.default.loadUserPage(undefined, current));
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange: function (pageNo) {
        dispatch(user_1.default.loadUserPage(undefined, pageNo));
    },
    /**
     * 点击每行用户信息
     * @param id
     */
    onRowClick: function (id) {
        dispatch({ type: 'USER_INFO_SHOW', show: true });
        dispatch(user_1.default.loadUserInfo(id));
    },
}); })(Table);
exports.default = TableComp;


/***/ }),

/***/ 1588:
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
var react_redux_1 = __webpack_require__(77);
var user_1 = __importDefault(__webpack_require__(1570));
var ExModal_1 = __importDefault(__webpack_require__(871));
var ExFormItem_1 = __importDefault(__webpack_require__(872));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var EditForm = antd_1.Form.create()(function (props) {
    var data = props.data, orgList = props.orgList, form = props.form;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(ExFormItem_1.default, { label: "\u4E0A\u7EA7\u7EC4\u7EC7", type: "select", name: "parentId", initialValue: data.parentId || 0, list: [{ id: 0, name: '（根节点）' }].concat(orgList.map(function (o) { return ({ id: o.id, name: o.indents.join(' ') + ' ' + o.name }); })), placeholder: "\u8BF7\u9009\u62E9", required: true, getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { label: "\u7EC4\u7EC7\u540D\u79F0", name: "name", initialValue: data.name, required: true, getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { type: "hidden", name: "id", initialValue: data.id, getFieldDecorator: getFieldDecorator })));
});
var OrgEditModal = /** @class */ (function (_super) {
    __extends(OrgEditModal, _super);
    function OrgEditModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSave = function () {
            var form = _this.form;
            form.validateFields(function (err, data) {
                if (err) {
                    return;
                }
                _this.props.onSubmit.call(_this, data);
                form.resetFields();
                _this.props.onClose();
            });
        };
        _this.saveFormRef = function (form) {
            _this.form = form;
        };
        return _this;
    }
    OrgEditModal.prototype.render = function () {
        var _a = this.props, orgEditShow = _a.orgEditShow, data = _a.orgEditData, orgList = _a.orgList, onClose = _a.onClose;
        return (React.createElement(ExModal_1.default, { visible: orgEditShow, title: (data.id > 0 ? '修改' : '新增') + "\u7EC4\u7EC7\u4FE1\u606F", onCancel: onClose, onOk: this.handleSave },
            React.createElement(EditForm, { ref: this.saveFormRef, orgList: orgList, data: data })));
    };
    return OrgEditModal;
}(React.Component));
var OrgEditModalComp = react_redux_1.connect(function (state) {
    var _a = state['user'], orgEditShow = _a.orgEditShow, orgEditData = _a.orgEditData, orgList = _a.orgList;
    return { orgEditShow: orgEditShow, orgEditData: orgEditData, orgList: orgList };
}, function (dispatch) { return ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit: function (data) {
        var _this = this;
        data.parentId = data.parentId == 0 ? '' : data.parentId;
        if (data.id > 0) {
            dispatch(user_1.default.updateOrg(data)).then(function () {
                _this.props.onClose();
                // 重新加载列表
                dispatch(user_1.default.loadOrgData());
            });
        }
        else {
            dispatch(user_1.default.addOrg(data)).then(function () {
                _this.props.onClose();
                // 重新加载列表
                dispatch(user_1.default.loadOrgData());
            });
        }
    },
    /**
     * 关闭
     */
    onClose: function () {
        dispatch({ type: 'USER_ORG_EDIT_CLOSE' });
    }
}); })(OrgEditModal);
exports.default = OrgEditModalComp;


/***/ }),

/***/ 1589:
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
var react_redux_1 = __webpack_require__(77);
var user_1 = __importDefault(__webpack_require__(1570));
var ExModal_1 = __importDefault(__webpack_require__(871));
var ExFormItem_1 = __importDefault(__webpack_require__(872));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var index_1 = __webpack_require__(29);
var EditForm = antd_1.Form.create()(function (props) {
    var data = props.data, orgList = props.orgList, roleList = props.roleList, form = props.form;
    var getFieldDecorator = form.getFieldDecorator;
    var roles = !index_1.isEmpty(data.roles) ? data.roles.map(function (o) { return o.rid; }) : [];
    return (React.createElement(antd_1.Form, null,
        data.uid > 0 ? (React.createElement(ExFormItem_1.default, { label: "\u8D26\u53F7", type: "static", initialValue: data.username })) : (React.createElement(ExFormItem_1.default, { label: "\u8D26\u53F7", name: "username", initialValue: data.username, required: true, getFieldDecorator: getFieldDecorator })),
        React.createElement(ExFormItem_1.default, { label: "\u624B\u673A\u53F7", name: "phone", initialValue: data.phone, placeholder: "\u8F93\u516511\u4F4D\u624B\u673A\u53F7\u7801", getFieldDecorator: getFieldDecorator }),
        !data.id && (React.createElement(ExFormItem_1.default, { label: "\u767B\u5F55\u5BC6\u7801", name: "password", initialValue: data.password, placeholder: "\u4E0D\u586B\u5219\u9ED8\u8BA4\u4E3A\uFF1A123456", getFieldDecorator: getFieldDecorator })),
        React.createElement(ExFormItem_1.default, { label: "\u59D3\u540D", name: "name", initialValue: data.name, getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { label: "\u89D2\u8272", type: "select", mode: "multiple", name: "roles", initialValue: roles, list: roleList.map(function (o) { return ({ id: o.rid, name: o.name }); }), placeholder: "\u8BF7\u9009\u62E9", required: true, getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { label: "\u90AE\u7BB1", type: "email", name: "email", initialValue: data.email, getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { type: "hidden", name: "uid", initialValue: data.uid, getFieldDecorator: getFieldDecorator })));
});
var UserEditModal = /** @class */ (function (_super) {
    __extends(UserEditModal, _super);
    function UserEditModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSave = function () {
            var form = _this.form;
            form.validateFields(function (err, data) {
                if (err) {
                    return;
                }
                _this.props.onSubmit.call(_this, data);
            });
        };
        _this.saveFormRef = function (form) {
            _this.form = form;
        };
        return _this;
    }
    UserEditModal.prototype.render = function () {
        var _a = this.props, userEditShow = _a.userEditShow, data = _a.userEditData, orgList = _a.orgList, roleList = _a.roleList, onClose = _a.onClose;
        return (React.createElement(ExModal_1.default, { visible: userEditShow, title: (data.id > 0 ? '修改' : '新增') + "\u7528\u6237\u4FE1\u606F", onCancel: onClose, onOk: this.handleSave },
            React.createElement(EditForm, { ref: this.saveFormRef, orgList: orgList, roleList: roleList, data: data })));
    };
    return UserEditModal;
}(React.Component));
var UserEditModalComp = react_redux_1.connect(function (state) {
    var _a = state['user'], userEditShow = _a.userEditShow, userEditData = _a.userEditData, orgList = _a.orgList;
    return { userEditShow: userEditShow, userEditData: userEditData, orgList: orgList, roleList: state.role.roleList };
}, function (dispatch) { return ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit: function (data) {
        var _this = this;
        // data.isPic=data.isPic?1:0;
        // data.roleIds = data.roleIds.join(',');
        var preRoles = this.props.userEditData.roles.map(function (o) { return o.rid; });
        var intersection = index_1.getIntersection(data.roles, preRoles);
        var addRids = index_1.getAddition(data.roles, intersection);
        var delRids = index_1.getReduction(preRoles, intersection);
        if (data.uid > 0) {
            dispatch(user_1.default.updateUser(data, addRids, delRids)).then(function () {
                _this.props.onClose();
                // 重新加载列表
                dispatch(user_1.default.selectOrg(data.orgId));
            });
        }
        else {
            dispatch(user_1.default.addUser(data)).then(function () {
                _this.props.onClose();
                // 重新加载列表
                dispatch(user_1.default.selectOrg(data.orgId));
            });
        }
    },
    /**
     * 关闭
     */
    onClose: function () {
        dispatch({ type: 'USER_EDIT_CLOSE' });
    }
}); })(UserEditModal);
exports.default = UserEditModalComp;


/***/ }),

/***/ 1590:
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
var react_redux_1 = __webpack_require__(77);
var user_1 = __importDefault(__webpack_require__(1570));
var ExModal_1 = __importDefault(__webpack_require__(871));
var antd_1 = __webpack_require__(43);
var react_intl_1 = __webpack_require__(160);
var defaultAvatar = __webpack_require__(1591);
var React = __importStar(__webpack_require__(0));
var utils_1 = __webpack_require__(29);
var DetailModal = /** @class */ (function (_super) {
    __extends(DetailModal, _super);
    function DetailModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailModal.prototype.render = function () {
        var _a = this.props, operations = _a.operations, info = _a.userInfoData, userInfoShow = _a.userInfoShow, onEdit = _a.onEdit, onDismiss = _a.onDismiss, onPasswordReset = _a.onPasswordReset, onClose = _a.onClose;
        var roles = !utils_1.isEmpty(info) ? info.roles.map(function (o) { return o.name; }) : [];
        return (React.createElement(ExModal_1.default, { className: "user-info", visible: userInfoShow, footer: null, onCancel: onClose },
            React.createElement("div", { className: "hd" },
                React.createElement(antd_1.Avatar, { shape: "square", src: defaultAvatar }),
                React.createElement("div", { className: "hd-content" },
                    React.createElement("strong", { className: "text-xl" }, info.name),
                    React.createElement(antd_1.Tag, { color: "cyan", style: { marginLeft: 8 } }, roles.join(',')),
                    React.createElement("div", null,
                        "Email\uFF1A",
                        React.createElement("span", null, info.email),
                        " "),
                    React.createElement("div", null,
                        "\u624B\u673A\uFF1A",
                        React.createElement("span", null, info.phone),
                        " "),
                    React.createElement("div", null,
                        "\u6240\u5C5E\u7EC4\u7EC7\uFF1A",
                        React.createElement("span", null, info.org),
                        " "))),
            React.createElement("div", { className: "bd" },
                React.createElement("ul", { className: "unstyled detail-list" },
                    React.createElement("li", null,
                        React.createElement("label", null, "\u90AE\u7BB1\uFF1A"),
                        info.email),
                    React.createElement("li", null,
                        React.createElement("label", null, "\u751F\u65E5\uFF1A"),
                        info.birthday),
                    React.createElement("li", null,
                        React.createElement("label", null, "\u7C4D\u8D2F\uFF1A"),
                        info.nativePlace),
                    React.createElement("li", null,
                        React.createElement("label", null, "\u4E0A\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A"),
                        info.lastLogin),
                    React.createElement("li", null,
                        React.createElement("label", null, "\u521B\u5EFA\u65F6\u95F4\uFF1A"),
                        info.createTime)),
                React.createElement("div", { className: "margin-top" },
                    operations.include('UPDATE') && React.createElement(antd_1.Button, { onClick: onEdit.bind(this, info), type: "primary", icon: "edit" },
                        React.createElement(react_intl_1.FormattedMessage, { id: 'common_operation_modify' })),
                    operations.include('RESET') && (React.createElement(antd_1.Popconfirm, { title: "\u786E\u5B9A\u8981\u91CD\u7F6E\u8BE5\u7528\u6237\u5BC6\u7801\u5417\uFF1F\uFF08\u91CD\u7F6E\u6210\u529F\u521D\u59CB\u5BC6\u7801\u4E3A\uFF1A123456\uFF09", onConfirm: onPasswordReset.bind(this, info.id) },
                        React.createElement(antd_1.Button, { icon: "lock", className: "margin-left" },
                            React.createElement(react_intl_1.FormattedMessage, { id: 'user_operation_reset' })))),
                    operations.include('LEAVE') && (React.createElement(antd_1.Popconfirm, { title: "\u786E\u5B9A\u8981\u628A\u8BE5\u7528\u6237\u8BBE\u4E3A\u79BB\u804C\u5417\uFF1F", onConfirm: onDismiss.bind(this, info.id, info.orgId) },
                        React.createElement(antd_1.Button, { type: "danger", icon: "warning", className: "margin-left" },
                            React.createElement(react_intl_1.FormattedMessage, { id: 'user_operation_leave' }))))))));
    };
    return DetailModal;
}(React.Component));
var DetailModalComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/user'].functions;
    var _a = state.user, userInfoData = _a.userInfoData, userInfoShow = _a.userInfoShow;
    return { operations: operations, userInfoData: userInfoData, userInfoShow: userInfoShow };
}, function (dispatch) { return ({
    /**
     * 编辑
     * @param item
     */
    onEdit: function (item) {
        this.props.onClose();
        dispatch({ type: 'USER_EDIT', data: item });
    },
    /**
     * 设为离职
     * @param id
     * @param orgId
     */
    onDismiss: function (id, orgId) {
        this.props.onClose();
        dispatch(user_1.default.dismissUser(id)).then(function () {
            // 重新加载列表
            dispatch(user_1.default.selectOrg(orgId));
        });
    },
    /**
     * 密码重置
     * @param id
     */
    onPasswordReset: function (id) {
        dispatch(user_1.default.resetPassword(id)).then(function () {
            antd_1.message.success('密码重置成功！');
        });
    },
    /**
     * 关闭
     */
    onClose: function () {
        dispatch({ type: 'USER_INFO_SHOW', show: false });
    }
}); })(DetailModal);
exports.default = DetailModalComp;


/***/ }),

/***/ 1591:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEOAQ4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDtaKKK9ix5gUUUUWAKKKKLAFFFFFgCiiiiwBRRRRYAoooosAUd6KO9FgNTRf8AWzf7tbFY+i/62b/drYrkq/Ezoh8IUUUVmWFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHJ0UlFd5yC0UlFAC0UlFAC0UlFAC0UlFAC0UlFAC0UlFAC5FGanhsbq4I8qCQg9wDitCLw1fOMt5afUk1DqQjuylCT6Eejf62b/drYNMsNBntGkLyRncOMZq82nyjONprknOLlozohCSWqKlFSNbyp1RvyqPB7ipuhhRRRTAKKKKACiiigAooooAKKKKACiiigAooooA5KikorvOQWikooELRSUUALRSUUALRSUUWGLR9OvanRRPNIEjUsx4AArrdK0GK02zT4ebHQ9BWdWqqa1LhTc9jI0/w9cXZDzfu4v1NdHaaPZ2eDHFlv7zcmo9V1yy0eHdPIN+MrGOprhNU8Z6hfgxwf6NFnqjfMR71zqNWs9NjdunTPRLnUbOxUm4nSPHYnmsmXxposZwszuf9mM15g8jysWkYuT1LEk0VtHBRXxMyeKb+FHpB8daX/cnP/Aamj8a6M/3pJIz7xn+leZ0VTwdMlYmZ7Da6tY3uPs9yjk9uhqxJBHKPmXn1FeMKSjZViD6jitrTPFOo6b8rSfaI8Y2ysT+VYzwbWsGaxxKekj0CayZMmM5A7d6pkEHnrUukeI7LVlVVcRT/APPJzyfp61oT20cwyMBvUVzczg7TRtZSV4mVRTnRo3KsMEU2tCbBRRRQAUUUUAFFFFABRRRQAUUUUAcjRRRXoHGFFFFAgooooAKKKKAClAZmAUEk9AKTit7w5pxlmF3IMouQv1qKkuSLbKhFykkamiaUllCJpFzO4ySeo9qo+JvFUekKbe3+e7YceiD1+tW/EmupouneZyZpPljX39a8klnkuJmmmcvI5yzHua58PRdWXPPY3rVVTXLEmuLue8mM1xK8sh6s3WmCogacDXp2srI4m7u5JmnA1HmlBoES5pQajBpwNIY/NJTc0uaVgJI5HhlWSJ2R1OQynkfSu88M+KvteyyvmxNjCyk/e+vvXn+aTJBBBIYdCO1Z1aMakddzSnUcGe0zwLOhHRvWskgqxUjkcVW8Ka//AGnbfZ7hv9KjGfqtbF9DuXzFHI615VnTlyyO+6nG6KGaM0lFaEC5ozSUUgFzRmkooAXNGaSigBc0ZpKKAORooor0DjCiiigAooooAKKKKAHRoXkRV6swArvbWGOwsFi4CRrlifzNcnoMAn1JSeRGNxrZ8W35sPDl04J3SARr9T/9bNcdd881BHVRXLFyPOvE2rNqutTOHzDG+2MA8Y9axwemfSogT3//AF07NerCCjFJHDKXM7kuaXNRA07NNoklzS5qLNOzSsMl3UoNRA07NKwEuaM1GDSg0gH5ozTM0uaYFzTtQk02/iuovvIeRnqK9fgmjurVJUIKSLkfQ14mT+nNej+Br5rjSZLdzloHwMntgf4Vw42ndKaOvCzs+U05U8uVl9KZVu+TDhh361Urki7q5u9woooqhBRRRQAUUUUAFFFFAHIUUUV6BxXCiiikFwooooC4UUUDmgdzo/C0fNxJ34X/AD+VZXxHuStna2+fvvuIrb8MYFrIe+RXK/Ecn7ZaL22f41ywV8SdL0onEg0uajB4pc16lzhJN1G6o80oNMRKGpd1RZpQ1AE26nbqg3Uu6gCYNShqhDUoNFhkwal3VDupQ1S0BLu7HvXV+ArgpqssP/PVeB7jNchurofBbEeJrf0w2f8Avk1lXX7tmlF/vEemXgzDn0NUK0Lr/j3P1rPryKex6E9woooqyAooooAKKKKACiiigDj6KKK9E4gooooAKKKKACiiigDpfC8n7udD2Kn8OawPiTAdtlOOx2n9a0vDk3l37IejripPHlp9p8NSyAfNAwk/DNcafJiEzq+KieTg8CjNJzz9aTNeocI8GlBpgNLmgB+aUGmZpc07gPBpQaZmlzRcQ/NANMzSg0wH5oBpmaUGgCQGup8BwmXXDIP+WaE/mDXJ56/SvQfh5ZlbW7uyMbnCKfXA/wDr1z4qSjSZtQV6iOyuyfJ69TVGrV23RfeqgryYbHdPcWiiirJCiiigAooooAKKKKAOPopKK9E4haKSigBaKSigBaKSigCa2mMFzHKP4WGfpXazxRahYyQvgxzRkH8RXCd66Xw/eh4PsrE70yVPqK5cVB8vMjooS3izyjU7B9M1OezfrE20H1HaqlemeOvD7XtsNQtUBni/1n+0vr+leZjFdlCoqkVbcxqw5ZAKWkFLWxiKKcKbTqAAUopBSimIWgUUtNAFFFGOKGwJI4nmlWKNdzscAV7PpFgml6ZDaoB8ijcR3bHJrjPA+hF5Bqlwv7sZWNff1rup5dqY/iNeVjKvPJQid+Gp8q5mV523Sn0qOiisUrFsKKKKYBRRRSAKKKKACiiigDj6KKK9E4gooooAKKKKACiiigAqW3ne2nWZD8y/rUVHFJq6swWjudvaXcd7brIApyPmU9q4Dxb4Se2ka+09C8JxvjA+6fWtKyv5bGXfGflJG5exrrLS8gvod0ZJ/vKetcTUqEuaOx1pqrGz3PDT7/SgV6Vr3ge3u8z6aFhmIyUJ+VjXA32nXWnTGK7haMjuTkH8a9ClXhV2OWdKUWVRSiilArbQy0AUooANLg0adwCilA9qmtrSa8mEVvGZHP8ACKbaSuCV9iDp1rpfDXhiXVZ1nuFeO0XDBiPvnPQVsaH4HCFZ9Uwx4IhU4/76rs0WK3iCRqEjXooGK4MRjFblgdVKg/ikOVI7eIKihEX7qgcCqsjl2yaWSQyew9KZXFCNtXudMnfRBRRRVkhRRRQAUUUUAFFFFABRRRQBx1FFFegcQUUUUAFFFFABRRRQAUUUUWuAVJDPJbyh43KsPQ01I3kfYiFiewFa1r4fnlAaZwg7gDms6k4RXvFwhNvQvWOvRTYS5xE3r2NaUsFteQ4ljjmRv7yg1Wg0izgA/dB29W5qxNc2tmn76aGBe29wv868+bi3+7udsE0rTZzt74F025Zmgkltyeynisif4eXAy0N4j+zJiuw/tqwKbo5w6noVOQai/t+1zgLIffito1cQtjOUKTOJ/wCEE1MNgGIj14/xqzD8Prpj+9uo0Hsua6/+3LXH8f5Un9u22cbXq3iMQyVSorqY9p4B0+Ehp55ZyP4SABXSWtjbWUYS2gjiAGOFGfzqFdXs2GTIF/3jipoL21u1Bt7mKbP9xw38q56k6sviubRVNfCPeULwOTUDMWOSfwqyY1Pbk1E0LDofwqYSghyUiKig5U4ozWpmFFGaM0AFFGaM0AFFGaM0AFFGaM0AFFGaM0AcbzRzRRXoHEHNHNFFABzRzRRQAc0c0UoBY4AyT0AoEJ9a0dP0mW8Ku2Vh9e5q/pmigBZ7oHPUIav6nq1no1mZrqVY0A4QcE/QVy1a9/dgdVOjpzSJrWygsoyIU246k/1rD1nxtpWks0Icz3KjOyMZH4muC8QeNL/WGaKHNta5OAjEMw9zXMeuc5P41VLBuTvUZFTFcukDqNT+IGs3u5Ld0toj2RRn8a5eWaW4kZ5pHZm5JJ60mKQj0rtjThFWSOWU5S3Z3/h6VZtFgI/hyv41qY9a4nw7qwsbg28x/cOc5PY12ysHRWB3AjII6VnKNmXF3QvFKPwpKUHHP61BWhDeusNjPI3ACMM/hXm8UkkbBkYqeowcYro/EmsRyj7HbPkA5dga5wVrGOmpnOT6HS6b431mx2o8y3EQ42yKOntiu30jxxpmolIp91tOePmHyk+xH9a8lpwrOphadT1Kp4icD30BZEyMFcZyOQfxqF4ivK8ivJ9E8U3+jMFU+fBj/VSMf0r07SNcsdagEltKC+PnjP3gfpXBUozpa9DvhVhU9Saip5IgeVFQe1SpJg4tBRRRVCCiiigAooooAKKKKAON5o5oor0DiDmjmiigA5o5oozQAc+hNdJo+lCJRPcLlyMqPSquh6f5rLdS/cHCj3q74h12DQtNa4lOZmBESY+8f8K461RuXJE6aUFFc8iPxF4ltvD1rvcCSduEiB5z7j0ryDU9VvNXumnvJmc9gei+wpmo6jcapfyXdy5aRzk8cL7Cqvauyhh1TV3uc1as5vTYKKKK6DAQ0lKaQ0AIRxmut8JPcyrNulYwx4ARvXnpXJH+hrvvDlr9m0lGP3pT5h/KpqPQqG5rVz/ima6gto2glZIjkOF69q6Cs/W7cXGj3C45C7h+HNYQ0Zq9jz/OSSeuacKZ3569DThXSYElOpgNOFIB4qxaXlxY3Cz2spikU53Dv9ar0Ck0mrMa0d0eteGfFEWtxeTIPLu0ALAnhvcVvSIrDcBzXhttcy2lwk8DlJU+6w/z0r1rw34hj12y3EbblMCRPw6j8jXmYmg6b5o7HoUKymuWRo+1FSzJxuFQCsoyUjSSaHUUlFUIWikooAWikooA42ijNGa9A4goozRmgAqzYWjXlyqKDtHzMfQVVzXVaJaCCzEpHzyAE/Ssq1Tkia0Yc0i7LPb6daNLIyxxRjkmvFPEOuza9qbTyECJSVjXPQZrq/iRrh3Lo0LfKMPL9fSvPM80YOjZc76k4qrryIfmjNMzSg13HKOzRmm5ozQA4mkpM0maAJ7aI3FxHEOrMK9MiQRQpGOAqhcVw/ha3MuriRh8sYJ/Gu5z/hWNQ1gh1IyhlKnkEEEfhSZozwfpWa3LbPONRg+y6jPF2Vzj3Garg1v+Lrby7yO5HSXIP4Y/xrnQea6I7GL3JgacDUINPBpkkoNOBqIGnA0gJM1d0nU5tJ1GK7hJ+VssueGHcVn5pc0nHmTTBS5Xc9z06/h1PT4rqEgrIuSP7p7ilddhPpXnngPWvsl+1hM2IZ8bB6N6V6VKu5e5PvXj1IOlUt0PVhNVIX6laikoqhC0UlFAC0UlFAHG0UlFegcQtFJRQBZsYftF7FH2LZNdbd3Men2Etw+AkEZOPpzWJ4cgBnlmPOwDFZ3xJ1FrTQ47ZDhrhyD9MEH+dcVX95VUDrp+5Tcjy++vZb+9lupjmSQ5PPtioAaYKXNeslZWPMvd3HZpc0zNGadguPzSZpMmjJosFxc0Z6D1pMmgKXYKOp4pMZ2vhO38vTWnI+aRjg+1dATVaxthaWUUA6IMVYrnk7s2johc0A0lFIZj+J7Y3GlF16wtvrhAa9QmiE8EkTdHUrXmMqGKZ4z1U4ram9LGc9NQzTwaizTgcVZBMDTg1Qg04GkBNmjNMBpQaAJYpGilSVCQ6MGUg9CDXt2jaiNV0mC7XGXXDAeo4rw3J/GvRvhxqG+2n09iSUYuvPY//XrixsLx5l0OrCztLlOxkG1zTalnHRvzqGuKDujsluLRSUVRItFJRQBxtFJRXoHHYWkNFFAjqtBiCWG7GN7fpXnXxKvjPrsdpni3X/0IA16hp6COwgA7qD+deLeMpvO8Wagf7shT8uK5MKuau2+h0Yj3aSRhjoPpS5ptAr1LnBYdRzSUCi4WFyaXNJRTELmtHQrX7Xq8CkZVDvI+lZvp9a6vwfbY+0XJXqAqn86mT0Gtzq6KM0Vzm4UUUUAHcVwXia38jWGZRhZVVh+X/wBau9zjmuc8X2wexjuFHzRuFz7VcHZkyV0caDTqZSg1vYxJBTgaYDS5pBckBp2aiBpwNIZJn3rpPAt19n8UwjOFlRkP5Z/pXMZq/o1wbbV7aUHkOB+fFRUV4NF03aaZ7nKMofaqufSrbYKtiqnSvFpnqT7hzRzRRWpAc0c0UUAcbRSUV3nILQOTSUCgS3O4tuLOH2jX+QrwrxK27xPqTHvcP/OvdYD/AKJF/wBcx/KvB/ER/wCKj1H/AK+H/nXNgv4jN8X8CM3NLk02jJr0jhHZNGabmjNAD8mjJpuaM07hYfnHPpXomh24ttHt17su4/jXnGeK7Pw1q/2mIWcxHmIPkPqKzqXaKhozpN1GaZu70bqxNbD80Zpm6jdQFh+aqalbi90+a37sOPY1YzWH4h1j7FbtbwnFw/H+6PWmldiexxRJyc9c4ozTc5J9TyaAa6bmFh+acGqLNKDQFiUNTt1Qg07NAiXNT2bEXkJH98VUDVYsjm9h/wB8fzqZL3WVHdM9/Q5iU+qiqx6mrCcQqP8AZH8qrE8mvEhuz1pbIWikoqyBaKSigDjqKKK9A5AooooEtzuIP+PSL/rmP5V4N4i/5GPUf+vh/wCde8Qf8ekX/XMfyrwbxF/yMeo/9fD/AM65sF8bN8V8CM3NJmiivROEXJoyaSigYZpc0lFMQuakhmeCZJYzhlOQaiopAei6TqianaLKMK44Zc/rV7NedaVfyadfLIoyG4ZfUV6CjbkVum4AgegrCaszaLuSZo3U3NITgVIyvqOoRafatNIckD5Rnqa8+urqS7uHnlJLsfy9qua3qMl9fMp4jiJVVrMxit4KyMpO4ufSlBptANUSOzSg0zNKDRcB4NKDTAaUGmKw/NWLI/6bB/viqoNWLL/j9h/3xQ/hY1uj6DX/AFS/7tVSeTVpf9Uv+7VQ9TXhx3Z609kLRSUVZAtFJRQB/9k="

/***/ }),

/***/ 1592:
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
var react_redux_1 = __webpack_require__(77);
var user_1 = __importDefault(__webpack_require__(1570));
var antd_1 = __webpack_require__(43);
var react_intl_1 = __webpack_require__(160);
var React = __importStar(__webpack_require__(0));
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (e) {
            _this.setState({ searchKey: e.target.value });
        };
        _this.handleClear = function () {
            _this.setState({ searchKey: '' });
            // this.props.onSearch.call(this, '');
        };
        _this.state = {
            searchKey: ''
        };
        return _this;
    }
    Toolbar.prototype.render = function () {
        var _a = this.props, operations = _a.operations, orgSelectedId = _a.orgSelectedId, onOrgAdd = _a.onOrgAdd, onUserAdd = _a.onUserAdd, onSearch = _a.onSearch;
        var searchKey = this.state.searchKey;
        var suffix = searchKey && React.createElement(antd_1.Icon, { key: "1", type: "close-circle", onClick: this.handleClear, style: { color: '#ddd', marginRight: 5 } });
        return (React.createElement("div", { className: "toolbar" },
            operations.include('user_operation_add') && (React.createElement("div", null,
                React.createElement(antd_1.Button, { type: "primary", onClick: function () { return onOrgAdd(); }, icon: "usergroup-add", disabled: orgSelectedId == -1 },
                    React.createElement(react_intl_1.FormattedMessage, { id: 'user_operation_addOrg' })),
                React.createElement(antd_1.Button, { type: "primary", onClick: function () { return onUserAdd(); }, icon: "user-add", className: "margin-left", disabled: orgSelectedId == -1 },
                    React.createElement(react_intl_1.FormattedMessage, { id: 'user_operation_addStaff' })))),
            React.createElement(antd_1.Input.Search, { placeholder: "\u8F93\u5165\u59D3\u540D\u6216\u89D2\u8272\u641C\u7D22\u5458\u5DE5", value: searchKey, onChange: this.handleChange, onSearch: onSearch.bind(this), style: { maxWidth: 300 }, suffix: suffix, enterButton: true })));
    };
    return Toolbar;
}(React.Component));
var ToolbarComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/user'].functions;
    var orgSelectedId = state.user.orgSelectedId;
    return { operations: operations, orgSelectedId: orgSelectedId };
}, function (dispatch) { return ({
    /**
     * 添加组织
     */
    onOrgAdd: function () {
        dispatch({ type: 'USER_ORG_ADD' });
    },
    /**
     * 添加用户
     */
    onUserAdd: function () {
        dispatch({ type: 'USER_ADD' });
    },
    /**
     * 模糊搜索
     * @param value
     */
    onSearch: function (value) {
        dispatch({ type: 'USER_SEARCH', value: value });
        dispatch(user_1.default.loadUserPage(this.props.orgSelectedId, 1));
    }
}); })(Toolbar);
exports.default = ToolbarComp;


/***/ }),

/***/ 1593:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1594);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./user.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./user.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(175)(false);
// imports


// module
exports.push([module.i, ".user {\n  background: #fff;\n  padding: 20px 10px;\n}\n.user .block-right {\n  margin-left: 200px;\n}\n.user .block-right .header {\n  position: relative;\n}\n.user .block-right .header .desc {\n  margin-right: 100px;\n}\n.user .block-right .header .actions {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.user .clear {\n  font-size: 14px;\n  top: 5px;\n  left: -30px;\n  z-index: 10;\n  position: absolute;\n  width: 30px;\n  color: #bbb;\n  text-align: center;\n}\n.user-info {\n  font-size: 14px;\n}\n.user-info .hd {\n  position: relative;\n}\n.user-info .hd .ant-avatar {\n  width: 72px;\n  height: 72px;\n  float: left;\n}\n.user-info .hd-content {\n  margin-left: 80px;\n}\n.user-info .detail-list > li {\n  padding: 6px 0;\n  border-bottom: 1px dashed #CCC;\n}\n.user-info .detail-list > li label {\n  color: #888;\n  font-weight: normal;\n  margin-bottom: 0;\n}\n.user-org {\n  width: 200px;\n  overflow: auto;\n  position: relative;\n  font-size: 14px;\n}\n.user-org li {\n  border-top: 1px dashed #ccc;\n}\n.user-org .node-name {\n  position: relative;\n  line-height: 2;\n  padding-left: 10px;\n}\n.user-org .node-name .actions {\n  position: absolute;\n  top: 0;\n  right: 3px;\n  display: none;\n}\n.user-org .node-name:hover {\n  background: #f2f6f9;\n}\n.user-org .node-name:hover .actions {\n  display: block;\n}\n.user-org .node-name.selected {\n  background: #D3E6F5;\n  color: #5b9bd1;\n}\n.user-org .indent {\n  display: inline-block;\n  width: 20px;\n  text-align: right;\n  margin-right: 3px;\n  color: #aaa;\n}\n.user-org .indent a {\n  color: #aaa;\n}\n.user-org .cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n  background: rgba(255, 255, 255, 0.6);\n}\n", ""]);

// exports


/***/ }),

/***/ 883:
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
var react_redux_1 = __webpack_require__(77);
var user_1 = __importDefault(__webpack_require__(1570));
var role_1 = __importDefault(__webpack_require__(1571));
var OrgTree_1 = __importDefault(__webpack_require__(1586));
var Table_1 = __importDefault(__webpack_require__(1587));
var OrgEditModal_1 = __importDefault(__webpack_require__(1588));
var UserEditModal_1 = __importDefault(__webpack_require__(1589));
var DetailModal_1 = __importDefault(__webpack_require__(1590));
var Toolbar_1 = __importDefault(__webpack_require__(1592));
var React = __importStar(__webpack_require__(0));
__webpack_require__(1593);
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.componentWillMount = function () {
        this.props.init();
    };
    User.prototype.componentWillUnmount = function () {
        this.props.onLeave();
    };
    User.prototype.render = function () {
        var _a = this.props, onEdit = _a.onEdit, onUserInfoShow = _a.onUserInfoShow, operations = _a.operations;
        return (React.createElement("div", { className: "user" },
            React.createElement(OrgEditModal_1.default, null),
            React.createElement(UserEditModal_1.default, null),
            React.createElement(DetailModal_1.default, null),
            React.createElement(Toolbar_1.default, null),
            React.createElement("div", { className: "display-flex" },
                React.createElement(OrgTree_1.default, null),
                React.createElement("div", { className: "flex-grow-1" },
                    React.createElement(Table_1.default, { onEdit: onEdit, onUserInfoShow: onUserInfoShow, operations: operations })))));
    };
    return User;
}(React.Component));
var UserComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/user'].functions;
    return { operations: operations };
}, function (dispatch) { return ({
    init: function () {
        // 加载组织树
        dispatch(user_1.default.loadOrgData()).then(function (treeData) {
            // 默认选择第一个组织
            dispatch(user_1.default.selectOrg(treeData[0].id));
        });
        // 加载角色列表
        dispatch(role_1.default.loadList());
    },
    onLeave: function () {
        dispatch({ type: 'USER_PAGE_LEAVE' });
    },
    onEdit: function (data, e) {
        e.stopPropagation();
        dispatch({ type: 'USER_EDIT', data: data });
    },
    onUserInfoShow: function (data, e) {
        e.stopPropagation();
        dispatch({ type: 'USER_INFO_LOAD', data: data });
        dispatch({ type: 'USER_INFO_SHOW', show: true });
    }
}); })(User);
module.exports = UserComp;


/***/ })

});