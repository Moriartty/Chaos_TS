webpackJsonp([3],{

/***/ 1581:
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
var menu_1 = __importDefault(__webpack_require__(1572));
var antd_1 = __webpack_require__(43);
var index_1 = __webpack_require__(870);
var react_intl_1 = __webpack_require__(160);
var React = __importStar(__webpack_require__(0));
var const_1 = __webpack_require__(123);
var EditForm = antd_1.Form.create({
    //监听fields变化
    onFieldsChange: function (props, changedFields) {
        var changed = Object.keys(changedFields).map(function (o) {
            var obj = new Object();
            obj[o] = changedFields[o].value;
            return obj;
        });
        props.onChange(changed[0]);
    }
})(function (props) {
    var data = props.data, list = props.list, form = props.form, intl = props.intl, type = props.type;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(index_1.ExFormItem, { label: "\u4E0A\u7EA7\u76EE\u5F55", type: "select", name: "pid", initialValue: data.pid || 0, 
            //只筛选比当前层级高的
            list: list.filter(function (o) { return o.type < type; }).map(function (o) { return ({
                id: o.oid,
                name: o.indents.join(' ') + intl.formatMessage({ id: o.name })
            }); }), required: true, 
            //操作不允许移动
            disabled: !data.oid || data.type == 4, getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { label: "\u7C7B\u578B", type: "radio", button: true, name: "type", initialValue: type, list: (function () {
                //只有叶子模块可以新增操作
                if (~~data.type === 4)
                    return const_1.menuTypes.filter(function (o) { return o.id >= data.type; });
                else
                    return const_1.menuTypes.filter(function (o) { return o.id >= data.type && o.id < 4; });
            })(), required: true, disabled: data.oid ? true : false, getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { label: "\u540D\u79F0", name: "name", initialValue: data.name, placeholder: "\u540D\u79F0", required: true, getFieldDecorator: getFieldDecorator }),
        //module字段一旦填写就不能再修改，这和前端加载页面有关，不要轻易动
        type === 3 && (React.createElement(index_1.ExFormItem, { label: "\u83DC\u5355\u6807\u7B7E", name: "module", initialValue: data.module, disabled: data.oid, placeholder: "\u8BF7\u586B\u5199", required: true, getFieldDecorator: getFieldDecorator })),
        //当item为操作类型时，需要填写url
        type === 4 && (React.createElement(index_1.ExFormItem, { type: 'textarea', label: 'Urls', name: 'urls', initialValue: data.urls, placeholder: '\u8BF7\u586B\u5199\u8BE5\u64CD\u4F5C\u5BF9\u5E94\u7684url', getFieldDecorator: getFieldDecorator })),
        React.createElement(index_1.ExFormItem, { label: "\u72B6\u6001", type: "switch", name: "display", initialValue: data.display === 1, onText: "\u663E\u793A", offText: "\u9690\u85CF", required: true, getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { type: "hidden", name: "oid", initialValue: data.oid, getFieldDecorator: getFieldDecorator })));
});
var EditModal = /** @class */ (function (_super) {
    __extends(EditModal, _super);
    function EditModal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSave = function () {
            var form = _this.form;
            form.validateFields(function (err, data) {
                if (err) {
                    return;
                }
                data.display = data.display ? 1 : 0;
                _this.props.onSubmit.call(_this, data);
            });
        };
        _this.saveFormRef = function (form) {
            _this.form = form;
        };
        /**
         * type改变时，state做相应变化
         */
        _this.fieldsOnChange = function (changeFields) {
            if (changeFields.hasOwnProperty('type'))
                _this.setState({ type: changeFields['type'] });
        };
        _this.state = {
            type: parseInt(props.editData.type)
        };
        return _this;
    }
    EditModal.prototype.componentWillReceiveProps = function (nextProps) {
        var newType = parseInt(nextProps.editData.type);
        if (newType !== this.state.type)
            this.setState({ type: newType });
    };
    EditModal.prototype.render = function () {
        var _a = this.props, _b = _a.editShow, editShow = _b === void 0 ? false : _b, data = _a.editData, list = _a.list, onClose = _a.onClose, intl = _a.intl;
        return (React.createElement(index_1.ExModal, { visible: editShow, title: (data.oid > 0 ? '修改' : '新增') + "\u83DC\u5355\u4FE1\u606F", onCancel: onClose, onOk: this.handleSave },
            React.createElement(EditForm, { ref: this.saveFormRef, data: data, type: this.state.type, list: list, intl: intl, onChange: this.fieldsOnChange })));
    };
    return EditModal;
}(React.Component));
var EditModalComp = react_redux_1.connect(function (state) {
    var _a = state.menu, editShow = _a.editShow, editData = _a.editData, list = _a.list;
    return { editShow: editShow, editData: editData, list: list };
}, function (dispatch) { return ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit: function (data) {
        var _this = this;
        if (data.oid) {
            dispatch(menu_1.default.updateMenu(data)).then(function () {
                _this.props.onClose();
            });
        }
        else {
            dispatch(menu_1.default.addMenu(data)).then(function () {
                _this.props.onClose();
            });
        }
    },
    /**
     * 关闭
     */
    onClose: function () {
        dispatch({ type: 'MENU_EDIT_CLOSE' });
    }
}); })(EditModal);
exports.default = react_intl_1.injectIntl(EditModalComp);


/***/ }),

/***/ 1582:
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(77);
var index_1 = __webpack_require__(870);
var antd_1 = __webpack_require__(43);
var menu_1 = __importDefault(__webpack_require__(1572));
var EditForm = antd_1.Form.create({
    mapPropsToFields: function (props) {
        var params = props.data;
        return {
            oid: antd_1.Form.createFormField({ value: params.oid }),
            pid: antd_1.Form.createFormField({ value: null }),
            name: antd_1.Form.createFormField({ value: params.systemName })
        };
    }
})(function (props) {
    var form = props.form;
    var getFieldDecorator = form.getFieldDecorator, getFieldValue = form.getFieldValue;
    return (React.createElement(antd_1.Form, null,
        React.createElement(index_1.ExFormItem, { type: 'hidden', name: 'oid', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { type: 'hidden', name: 'pid', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { label: 'SystemName', name: 'name', getFieldDecorator: getFieldDecorator })));
});
var EditSystemModal = /** @class */ (function (_super) {
    __extends(EditSystemModal, _super);
    function EditSystemModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSave = function () {
            var form = _this.form;
            form.validateFields(function (err, data) {
                if (err) {
                    return;
                }
                data.type = 1;
                data.display = 1;
                _this.props.onSubmit.call(_this, data);
            });
        };
        _this.saveFormRef = function (form) {
            _this.form = form;
        };
        return _this;
    }
    EditSystemModal.prototype.render = function () {
        var _a = this.props, _b = _a.show, show = _b === void 0 ? false : _b, data = _a.data, onClose = _a.onClose;
        return (React.createElement(index_1.ExModal, { visible: show, title: (data.id > 0 ? '修改' : '新增') + "\u7CFB\u7EDF\u4FE1\u606F", onCancel: onClose, onOk: this.handleSave },
            React.createElement(EditForm, { ref: this.saveFormRef, data: data })));
    };
    return EditSystemModal;
}(React.Component));
var EditSystemModalComp = react_redux_1.connect(function (state) {
    var _a = state['menu'], show = _a.systemEditModalShow, data = _a.systemEditData;
    return { show: show, data: data };
}, function (dispatch) { return ({
    onSubmit: function (data) {
        var _this = this;
        dispatch(menu_1.default.addMenu(data)).then(function () {
            _this.props.onClose();
        });
    },
    onClose: function () {
        dispatch({ type: 'MENU_SYSTEMEDITMODAL_CLOSE' });
    }
}); })(EditSystemModal);
exports.default = EditSystemModalComp;


/***/ }),

/***/ 1583:
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
var menu_1 = __importDefault(__webpack_require__(1572));
var ExTable_1 = __importDefault(__webpack_require__(873));
var antd_1 = __webpack_require__(43);
var index_1 = __webpack_require__(870);
var react_intl_1 = __webpack_require__(160);
var React = __importStar(__webpack_require__(0));
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, operations = _a.operations, onMove = _a.onMove, onSubAdd = _a.onSubAdd, onSubEdit = _a.onSubEdit, onDelete = _a.onDelete;
        _this.columns = [
            { title: '根菜单',
                dataIndex: 'name',
                render: function (value, data) { return (React.createElement("div", null,
                    data.indents.map(function (indent, i) { return React.createElement("span", { key: i, className: "indent" }, indent); }),
                    React.createElement(antd_1.Tag, { color: ['purple', 'blue', 'cyan', 'green'][data.indents.length - 1], style: { marginLeft: 8 } },
                        React.createElement(react_intl_1.FormattedMessage, { id: value })),
                    data.type != '4' && React.createElement(index_1.CircleBtn, { title: "\u6DFB\u52A0\u5B50\u83DC\u5355", icon: "plus", onClick: onSubAdd.bind(_this, data) }))); }
            },
            { title: '菜单标签', dataIndex: 'module', render: function (value) { return value && React.createElement(antd_1.Tag, { color: "geekblue" }, value); } },
            { title: '状态', dataIndex: 'display', render: function (value) { return value === 1 ? React.createElement(antd_1.Badge, { status: "success", text: "\u663E\u793A" }) : React.createElement(antd_1.Badge, { status: "default", text: "\u9690\u85CF" }); } }
        ];
        if (operations.include('menu_operation_update', 'menu_operation_delete')) {
            _this.columns.push({
                title: '操作',
                render: function (value, data) {
                    var actions = [];
                    if (operations.include('menu_operation_update')) {
                        actions.push(React.createElement("a", { key: "b1", onClick: onSubEdit.bind(_this, data) },
                            React.createElement(react_intl_1.FormattedMessage, { id: 'menu_operation_edit' })));
                    }
                    if (operations.include('menu_operation_delete')) {
                        actions.push(React.createElement(antd_1.Popconfirm, { key: "b2", placement: "left", title: "\u786E\u5B9A\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F\uFF08\u5176\u5B50\u83DC\u5355\u5C06\u4E00\u5E76\u5220\u9664\uFF01\uFF09", onConfirm: onDelete.bind(_this, data.id) },
                            React.createElement("a", null,
                                React.createElement(react_intl_1.FormattedMessage, { id: 'menu_operation_delete' }))));
                    }
                    return React.createElement("div", null, actions.joinItem(function (i) { return React.createElement(antd_1.Divider, { key: i, type: "vertical" }); }));
                }
            });
        }
        return _this;
    }
    Table.prototype.render = function () {
        var _a = this.props, loading = _a.loading, list = _a.list;
        return (React.createElement(ExTable_1.default, { loading: loading, columns: this.columns, dataSource: list, rowKey: 'oid' }));
    };
    return Table;
}(React.Component));
var TableComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/menu'].functions;
    var _a = state.menu, list = _a.list, loading = _a.loading;
    return { operations: operations, list: list, loading: loading };
}, function (dispatch) { return ({
    /**
     * 删除菜单
     * @param id
     */
    onDelete: function (id) {
        dispatch(menu_1.default.deleteMenu(id));
    },
    /**
     * 菜单排序
     * @param id
     * @param isUp
     */
    onMove: function (id, isUp) {
        dispatch(menu_1.default.moveMenu(id, isUp)).then(function () {
            dispatch(menu_1.default.loadList());
        });
    }
}); })(Table);
exports.default = TableComp;


/***/ }),

/***/ 1584:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1585);
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
		module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./menu.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/less-loader/dist/cjs.js?{\"javascriptEnabled\":true}!./menu.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(175)(false);
// imports


// module
exports.push([module.i, ".menu .indent {\n  display: inline-block;\n  width: 20px;\n  text-align: right;\n  margin-right: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ 882:
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
var menu_1 = __importDefault(__webpack_require__(1572));
var app_1 = __importDefault(__webpack_require__(78));
var EditModal_1 = __importDefault(__webpack_require__(1581));
var EditSystemModal_1 = __importDefault(__webpack_require__(1582));
// import Toolbar from './Toolbar';
var Toolbar_1 = __importDefault(__webpack_require__(1573));
var Table_1 = __importDefault(__webpack_require__(1583));
var React = __importStar(__webpack_require__(0));
__webpack_require__(1584);
var antd_1 = __webpack_require__(43);
var react_intl_1 = __webpack_require__(160);
var Option = antd_1.Select.Option;
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        return _super.call(this, props) || this;
    }
    Menu.prototype.componentDidMount = function () {
        this.props.init();
    };
    Menu.prototype.componentWillUnmount = function () {
        this.props.onLeave();
    };
    // handleChange = (value:any) => {
    //     this.setState({selectedSystem:value},()=>{
    //         this.props.onLoad(this.state.selectedSystem)
    //     });
    // }
    /**
     * 给外界改变state的钩子函数
     */
    // changeState = (newState:CompState) => {
    //     this.setState(newState);
    // };
    Menu.prototype.render = function () {
        var _a = this.props, onAdd = _a.onAdd, onEdit = _a.onEdit, onAddSystem = _a.onAddSystem, onRefresh = _a.onRefresh, operations = _a.operations, systemList = _a.systemList, onSelectedSystemChanged = _a.onSelectedSystemChanged;
        var selectedSystem = this.props.searchParams.selectedSystem;
        return (React.createElement("div", { className: "page-component menu" },
            React.createElement(EditModal_1.default, null),
            React.createElement(EditSystemModal_1.default, null),
            React.createElement(Toolbar_1.default, { onRefresh: onRefresh },
                React.createElement("div", { className: "toolbar" },
                    React.createElement(antd_1.Select, { value: selectedSystem, style: { marginRight: 20, width: 100 }, onChange: onSelectedSystemChanged }, systemList.map(function (o) {
                        return React.createElement(Option, { value: o.oid, key: o.oid },
                            React.createElement(react_intl_1.FormattedMessage, { id: o.name }));
                    })),
                    operations.indexOf('menu_operation_add') >= 0 && React.createElement(antd_1.Button, { type: "primary", onClick: onAddSystem.bind(this, 0), icon: "plus" },
                        React.createElement(react_intl_1.FormattedMessage, { id: 'menu_operation_add' })))),
            React.createElement(Table_1.default, { onSubAdd: onAdd, onSubEdit: onEdit })));
    };
    return Menu;
}(React.Component));
var MenuComponent = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/menu'].functions;
    var _a = state['menu'], systemList = _a.systemList, searchParams = _a.searchParams;
    return { operations: operations, systemList: systemList, searchParams: searchParams };
}, function (dispatch) { return ({
    init: function () {
        dispatch(app_1.default.getSearchParamsFromLocalStorage()).then(function () {
            dispatch(menu_1.default.loadSystemList()).then(function (data) {
                dispatch(menu_1.default.loadList());
            });
        });
    },
    onSelectedSystemChanged: function (id) {
        dispatch({ type: 'MENU_SEARCHPARAMS_CHANGE', params: { selectedSystem: id } });
        dispatch(menu_1.default.loadList(id));
    },
    onLeave: function () {
        dispatch({ type: 'MENU_PAGE_LEAVE' });
    },
    /**
     * 添加系统
     * @param parentId
     */
    onAddSystem: function (parentId) {
        // dispatch({ type: 'MENU_ADD', parentId: parentId });
        dispatch({ type: 'MENU_SYSTEMEDITMODAL_ADD' });
    },
    /**
     * 添加菜单
     */
    onAdd: function (data) {
        var pid = data.oid, _type = parseInt(data.type || 1) + 1; //默认当前level的下一级
        dispatch({ type: 'MENU_ADD', pid: pid, _type: _type });
    },
    /**
     *
     * @param data 编辑菜单
     */
    onEdit: function (data) {
        dispatch({ type: 'MENU_EDIT', data: data });
    },
    /**
     * 更新菜单缓存
     */
    onRefresh: function () {
        dispatch(app_1.default.loadUserMenu(true));
    }
}); })(Menu);
module.exports = MenuComponent;


/***/ })

});