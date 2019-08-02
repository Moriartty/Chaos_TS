webpackJsonp([2],{

/***/ 1576:
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
var role_1 = __importDefault(__webpack_require__(1571));
var ExModal_1 = __importDefault(__webpack_require__(871));
var ExFormItem_1 = __importDefault(__webpack_require__(872));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var EditForm = antd_1.Form.create()(function (props) {
    var data = props.data, form = props.form;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(ExFormItem_1.default, { label: "\u540D\u79F0", name: "name", initialValue: data.name, placeholder: "\u8F93\u5165\u540D\u79F0", required: true, getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { label: "\u63CF\u8FF0", type: "textarea", name: "desc", initialValue: data.desc, placeholder: "\u8F93\u5165\u5BF9\u89D2\u8272\u7684\u63CF\u8FF0...", required: true, getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { type: "hidden", name: "id", initialValue: data.id, getFieldDecorator: getFieldDecorator })));
});
var EditModal = /** @class */ (function (_super) {
    __extends(EditModal, _super);
    function EditModal() {
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
    EditModal.prototype.render = function () {
        var _a = this.props, editShow = _a.editShow, _b = _a.editData, data = _b === void 0 ? {} : _b, onClose = _a.onClose;
        return (React.createElement(ExModal_1.default, { visible: editShow, title: (data.id > 0 ? '修改' : '新增') + "\u89D2\u8272\u4FE1\u606F", onCancel: onClose, onOk: this.handleSave },
            React.createElement(EditForm, { ref: this.saveFormRef, data: data })));
    };
    return EditModal;
}(React.Component));
var EditModalComp = react_redux_1.connect(function (state) {
    var _a = state.role, editShow = _a.editShow, editData = _a.editData;
    return { editShow: editShow, editData: editData };
}, function (dispatch) { return ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit: function (data) {
        var _this = this;
        if (data.id > 0) {
            dispatch(role_1.default.updateRole(data)).then(function () {
                _this.props.onClose();
                antd_1.message.success('更新成功！');
                // 重新加载列表
                dispatch(role_1.default.loadList());
            });
        }
        else {
            dispatch(role_1.default.addRole(data)).then(function () {
                _this.props.onClose();
                antd_1.message.success('添加成功！');
                // 重新加载列表
                dispatch(role_1.default.loadList());
            });
        }
        dispatch({ type: 'ROLE_SELECT', role: data });
    },
    /**
     * 关闭
     */
    onClose: function () {
        dispatch({ type: 'ROLE_EDIT_CLOSE' });
    }
}); })(EditModal);
exports.default = EditModalComp;


/***/ }),

/***/ 1577:
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
var role_1 = __importDefault(__webpack_require__(1571));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var RoleList = /** @class */ (function (_super) {
    __extends(RoleList, _super);
    function RoleList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.roleObj = {};
        _this.handleClick = function (e) {
            var item = _this.roleObj[e.key];
            _this.props.onSelected(item);
        };
        return _this;
    }
    RoleList.prototype.render = function () {
        var _this = this;
        var list = this.props.roleList;
        return (React.createElement("div", null, list.length ? (React.createElement(antd_1.Menu, { onClick: this.handleClick }, list.map(function (o) {
            _this.roleObj[o.rid] = o;
            return (React.createElement(antd_1.Menu.Item, { key: o.rid },
                React.createElement(antd_1.Icon, { type: "solution" }),
                o.name));
        }))) : (React.createElement("p", { className: "text-center" }, "\u8FD8\u6CA1\u6709\u89D2\u8272\uFF01"))));
    };
    return RoleList;
}(React.Component));
var RoleListComp = react_redux_1.connect(function (state) {
    var roleList = state.role.roleList;
    return { roleList: roleList };
}, function (dispatch) { return ({
    /**
     * 选择某个角色
     * @param role
     */
    onSelected: function (role) {
        dispatch(role_1.default.selectRole(role));
    }
}); })(RoleList);
exports.default = RoleListComp;


/***/ }),

/***/ 1578:
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
var role_1 = __importDefault(__webpack_require__(1571));
var antd_1 = __webpack_require__(43);
var react_intl_1 = __webpack_require__(160);
var React = __importStar(__webpack_require__(0));
var index_1 = __webpack_require__(29);
var levelColors = ['#eb2f96', '#fa8c16', '#13c2c2', '#2f54eb', '#fa541c'];
var RoleMenu = /** @class */ (function (_super) {
    __extends(RoleMenu, _super);
    function RoleMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            roleAuth: props.roleAuth.concat()
        };
        return _this;
    }
    RoleMenu.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        //新props不同于旧props时需要更新state
        if (nextProps.roleAuth.length === this.props.roleAuth.length) {
            var flag_1 = true;
            nextProps.roleAuth.forEach(function (o) {
                if (_this.props.roleAuth.indexOf(o) < 0)
                    flag_1 = false;
            });
            !flag_1 && this.setState({ roleAuth: nextProps.roleAuth.concat() });
        }
        else {
            this.setState({ roleAuth: nextProps.roleAuth.concat() });
        }
    };
    /**
     * 折叠/展开
     * @param e
     */
    RoleMenu.prototype.collapse = function (e) {
        var $this = $(e.currentTarget);
        var $subList = $this.closest('.menu-name').next('ul');
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
     * 勾选复选框
     * @param e
     */
    RoleMenu.prototype.handleCheckChange = function (e) {
        var roleAuth = this.state.roleAuth.concat();
        var t = e.currentTarget;
        var $this = $(t);
        var changedMenuIds = [t.value]; // 有改变的菜单
        // 下级联动（一次性选择）
        $this.closest('.menu-name').next('ul').find('input').each(function (i, chk) {
            changedMenuIds.push(chk.value);
        });
        // 上级联动（逐层遍历判断）
        var recursive = function ($chk, checked) {
            var $parentChk = $chk.closest('ul').prev('.menu-name').find('input');
            if ($parentChk.length) {
                // 判断当前级所有复选框，如果全部没勾则父节点不勾，否则父节点打勾
                if (checked) {
                    var parentId = $parentChk.val();
                    if (!~roleAuth.indexOf(parentId)) {
                        changedMenuIds.push(parentId);
                    }
                    // 有一个勾上的话其他兄弟节点就没必要遍历了
                    recursive($parentChk, true);
                }
                else {
                    var hasCheck = false;
                    $chk.closest('li').siblings('li').find('input').each(function (i, chk) {
                        if (chk.checked) {
                            hasCheck = true;
                            return false;
                        }
                    });
                    if (!hasCheck) {
                        changedMenuIds.push($parentChk.val());
                    }
                    recursive($parentChk, hasCheck);
                }
            }
        };
        recursive($this, t.checked);
        if (t.checked) {
            roleAuth = roleAuth.concat(changedMenuIds);
        }
        else {
            changedMenuIds.forEach(function (menuId) {
                var i = roleAuth.indexOf(menuId);
                if (~i) {
                    roleAuth.splice(i, 1);
                }
            });
        }
        // this.props.onCheckChange(roleAuth);
        this.setState({ roleAuth: roleAuth });
    };
    /**
     * 渲染子节点
     * @param item
     * @returns {XML}
     */
    RoleMenu.prototype.renderItem = function (item) {
        var _this = this;
        var indents = item.indents;
        var list = item.list;
        var roleMenuIds = this.state.roleAuth;
        return (React.createElement("li", { key: item.index },
            React.createElement("div", { className: "no-select menu-name" },
                indents.map(function (indent, index) {
                    return (React.createElement("span", { key: index, className: "indent" }, index === (indents.length - 1) && list && list.length ? (React.createElement("a", { onClick: _this.collapse.bind(_this), className: "cursor-pointer collapse" },
                        React.createElement(antd_1.Icon, { type: "minus-square-o" }))) : indent));
                }),
                React.createElement("label", { className: "cursor-pointer" },
                    React.createElement("input", { type: "checkbox", checked: index_1.hasChildInTree(item, roleMenuIds), 
                        //因为后端只需要记录操作的变化，所以为了方便筛选，这里我们只为type==4的赋值value
                        value: item.type == 4 ? item.id : '', onChange: this.handleCheckChange.bind(this) }),
                    React.createElement("span", { style: { color: item.type == '4' ? '#666' : levelColors[indents.length] } },
                        React.createElement(react_intl_1.FormattedMessage, { id: item.name })))),
            list && list.length > 0 && (React.createElement("ul", { className: "unstyled" }, list.map(function (o, i) {
                o.index = i;
                return _this.renderItem(o);
            })))));
    };
    RoleMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, operations = _a.operations, menuTree = _a.menuTree, roleInfo = _a.roleInfo, onSave = _a.onSave;
        var roleAuth = this.state.roleAuth;
        return (React.createElement("div", { className: "role-menu" },
            React.createElement("ul", { className: "unstyled" }, menuTree.map(function (o, i) {
                o.index = i;
                return _this.renderItem(o);
            })),
            operations.indexOf('role_operation_modify') >= 0 && (React.createElement(antd_1.Button, { type: "primary", icon: "save", className: "save", onClick: onSave.bind(this, roleInfo.rid, roleAuth, this.props.roleAuth) }, "\u4FDD\u5B58"))));
    };
    return RoleMenu;
}(React.Component));
var RoleMenuComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/role'].functions;
    var _a = state.role, menuTree = _a.menuTree, roleInfo = _a.roleInfo;
    return { operations: operations, menuTree: menuTree, roleInfo: roleInfo };
}, function (dispatch) { return ({
    /**
     * 保存
     * @param roleId
     * @param roleAuth
     */
    onSave: function (roleId, roleAuth, preRoleAuth) {
        // 格式转化
        // let obj:_Object = {}; // {6:[], 9:["CREATE","UPDATE"]}
        // roleAuth.forEach((id:any) => {
        //     // eslint-disable-next-line
        //     if (id != '0') { // 排除手动添加的
        //         const index = id.indexOf('_');
        //         if (~index) {
        //             // 操作权限类型
        //             const menuId = id.slice(0, index);
        //             if (!obj[menuId]) {
        //                 obj[menuId] = [];
        //             }
        //             obj[menuId].push(id.slice(index + 1));
        //         } else {
        //             if (!obj[id]) {
        //                 obj[id] = [];
        //             }
        //         }
        //     }
        // });
        // // 对象转数组
        // let data = [];
        // for (let menuId in obj) {
        //     data.push({
        //         menuId: menuId,
        //         functions: obj[menuId].length ? obj[menuId] : undefined
        //     });
        // }
        // console.log(data);
        // dispatch(action.updateRoleMenu(roleId, data)).then(() => {
        //     message.success('权限更改成功！');
        // });
        var curRoleAuth = roleAuth.filter(function (item) { return item; });
        // const intersection = curRoleAuth.filter(item=>preRoleAuth.indexOf(item)>-1);
        // const addOids = curRoleAuth.filter(item=>!intersection.some(i=>item===i));
        // const delOids = preRoleAuth.filter(item=>!intersection.some(i=>item===i));
        var intersection = index_1.getIntersection(curRoleAuth, preRoleAuth);
        var addOids = index_1.getAddition(curRoleAuth, intersection);
        var delOids = index_1.getReduction(preRoleAuth, intersection);
        var params = {
            addOids: addOids, delOids: delOids
        };
        dispatch(role_1.default.updateRoleMenu(roleId, params)).then(function () {
            antd_1.message.success('权限更改成功！');
        });
    }
}); })(RoleMenu);
exports.default = RoleMenuComp;


/***/ }),

/***/ 1579:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1580);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./role.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./role.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(175)(false);
// imports


// module
exports.push([module.i, ".page-component {\n  background: #fff;\n  padding: 20px 10px;\n  min-height: 400px;\n}\n.role-left {\n  width: 200px;\n  float: left;\n}\n.role-right {\n  margin-left: 200px;\n  padding: 0 10px;\n}\n.role-right .header {\n  position: relative;\n  border-bottom: 1px solid #E8E8E8;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.role-right .header .desc {\n  margin-right: 80px;\n  display: inline;\n}\n.role-right .actions {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.role-menu {\n  position: relative;\n}\n.role-menu label {\n  font-weight: normal;\n  margin: 0;\n}\n.role-menu label input {\n  position: relative;\n  top: 2px;\n  right: -1px;\n}\n.role-menu .indent {\n  display: inline-block;\n  width: 30px;\n  text-align: right;\n  margin-right: 3px;\n}\n.role-menu .save {\n  position: fixed;\n  bottom: 40px;\n  right: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 880:
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
var role_1 = __importDefault(__webpack_require__(1571));
var menu_1 = __importDefault(__webpack_require__(1572));
var app_1 = __importDefault(__webpack_require__(78));
var antd_1 = __webpack_require__(43);
var EditModal_1 = __importDefault(__webpack_require__(1576));
var RoleList_1 = __importDefault(__webpack_require__(1577));
var RoleMenu_1 = __importDefault(__webpack_require__(1578));
var react_intl_1 = __webpack_require__(160);
var React = __importStar(__webpack_require__(0));
__webpack_require__(1579);
var Option = antd_1.Select.Option;
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Role.prototype.componentWillMount = function () {
        this.props.init();
    };
    Role.prototype.componentWillUnmount = function () {
        this.props.onLeave();
    };
    Role.prototype.render = function () {
        var _a = this.props, operations = _a.operations, role = _a.roleInfo, onAdd = _a.onAdd, onEdit = _a.onEdit, onDelete = _a.onDelete, roleAuth = _a.roleAuth, systemList = _a.systemList, onSelectedSystemChanged = _a.onSelectedSystemChanged;
        var selectedSystem = this.props.searchParams.selectedSystem;
        return (React.createElement("div", { className: "page-component" },
            React.createElement(EditModal_1.default, null),
            React.createElement("div", { className: "role-left" },
                operations.indexOf('role_operation_add') >= 0 && (React.createElement("div", { className: "text-center" },
                    React.createElement(antd_1.Button, { onClick: function () { return onAdd(); }, type: "primary", icon: "plus" },
                        React.createElement(react_intl_1.FormattedMessage, { id: 'role_operation_add' })))),
                React.createElement(RoleList_1.default, null)),
            role.rid ? (React.createElement("div", { className: "role-right" },
                React.createElement("div", { className: "header" },
                    React.createElement(antd_1.Select, { value: selectedSystem, style: { marginRight: 20, width: 100 }, onChange: onSelectedSystemChanged }, systemList.map(function (o) {
                        return React.createElement(Option, { value: o.oid, key: o.oid },
                            React.createElement(react_intl_1.FormattedMessage, { id: o.name }));
                    })),
                    React.createElement("div", { className: "desc" },
                        React.createElement("span", { className: "am-badge" }, "\u89D2\u8272\u63CF\u8FF0"),
                        "\uFF1A",
                        role.desc),
                    !['系统管理员'].include(role.name) && (React.createElement("div", { className: "actions" },
                        operations.indexOf('role_operation_modify') >= 0 && React.createElement(antd_1.Button, { ghost: true, size: "small", shape: "circle", onClick: onEdit.bind(this, role), icon: "edit", type: "primary", className: "margin-right-sm" }),
                        operations.indexOf('role_operation_delete') >= 0 && (React.createElement(antd_1.Popconfirm, { placement: "left", title: "\u786E\u5B9A\u5220\u9664\u8BE5\u89D2\u8272\uFF1F", onConfirm: onDelete.bind(this, role.id) },
                            React.createElement(antd_1.Button, { ghost: true, size: "small", shape: "circle", icon: "delete", type: "danger" })))))),
                React.createElement(RoleMenu_1.default, { roleAuth: roleAuth }))) : (React.createElement("div", { className: "role-right" },
                React.createElement("h1", { className: "text-center", style: { lineHeight: 10 } },
                    React.createElement(antd_1.Icon, { type: "arrow-left" }),
                    " ",
                    React.createElement(react_intl_1.FormattedMessage, { id: 'textName_systemConfig_role_msg1' }))))));
    };
    return Role;
}(React.Component));
var RoleComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/role'].functions;
    var systemList = state.menu.systemList;
    var _a = state.role, roleInfo = _a.roleInfo, roleAuth = _a.roleAuth, searchParams = _a.searchParams;
    return { operations: operations, roleInfo: roleInfo, roleAuth: roleAuth, systemList: systemList, searchParams: searchParams };
}, function (dispatch) { return ({
    init: function () {
        dispatch(app_1.default.getSearchParamsFromLocalStorage()).then(function () {
            dispatch(role_1.default.loadList());
            dispatch(role_1.default.loadMenuTree());
            dispatch(menu_1.default.loadSystemList());
        });
    },
    onSelectedSystemChanged: function (id) {
        dispatch({ type: 'ROLE_SEARCHPARAMS_CHANGE', params: { selectedSystem: id } });
        dispatch(role_1.default.loadMenuTree(id));
    },
    onLeave: function () {
        dispatch({ type: 'ROLE_PAGE_LEAVE' });
    },
    /**
     * 添加角色
     */
    onAdd: function () {
        dispatch({ type: 'ROLE_ADD' });
    },
    /**
     * 修改角色
     * @param item
     */
    onEdit: function (item) {
        dispatch({ type: 'ROLE_EDIT', data: item });
    },
    /**
     * 删除角色
     * @param id
     */
    onDelete: function (id) {
        dispatch(role_1.default.deleteRole(id));
    }
}); })(Role);
module.exports = RoleComp;


/***/ })

});