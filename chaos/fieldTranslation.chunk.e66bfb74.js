webpackJsonp([4],{

/***/ 1574:
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
var app_1 = __importDefault(__webpack_require__(78));
var const_1 = __importDefault(__webpack_require__(123));
var antd_1 = __webpack_require__(43);
var actions = {};
/**
 * 获取系统列表
 */
actions.loadSystemList = function () { return function (dispatch) {
    return fetch_1.default.get('/menu/systems').then(function (data) {
        dispatch({ type: 'FIELDTRANS_SYSTEMLIST_LOAD', list: data });
        return data;
    });
}; };
/**
 * 加载翻译字段数据
 */
actions.loadFieldsData = function (pageNo, pageSize) { return function (dispatch, getState) {
    dispatch({ type: 'FIELDTRANS_LOADING', loading: true });
    var state = getState().fieldTranslation;
    var searchParams = state.searchParams;
    var page = state.page;
    var params = __assign({}, searchParams, { pageNo: pageNo || page.pageNo, sizeNo: pageSize || page.pageSize });
    fetch_1.default.get(const_1.default.FIELDTRANS_GETALL, params).then(function (data) {
        dispatch({ type: 'FIELDTRANS_LOADING', loading: false });
        dispatch({
            type: 'FIELDTRANS_DATA_LOAD',
            pageNo: pageNo || data.page.currPage,
            pageSize: data.page.size,
            dataCount: data.page.total,
            list: data.data
        });
        dispatch(app_1.default.setSearchParamsInLocalStorage(params, 'FIELDTRANS_SEARCHPARAM_CHANGE'));
    });
}; };
/**
 * 新增trackDemand
 */
actions.create = function (data) { return function (dispatch) {
    fetch_1.default.post(const_1.default.FIELDTRANS_CREATE, data).then(function () {
        antd_1.message.success('操作成功');
        dispatch({ type: 'FIELDTRANS_EDITMODAL_SHOW', show: false });
        dispatch(actions.loadFieldsData());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 批量新增
 */
actions.batchCreate = function (data) { return function (dispatch) {
    fetch_1.default.post(const_1.default.FIELDTRANS_BATCH_CREATE, data).then(function () {
        antd_1.message.success('操作成功');
        dispatch({ type: 'FIELDTRANS_EDITMODAL_SHOW', show: false });
        dispatch(actions.loadFieldsData());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 编辑trackDemand
 */
actions.edit = function (data) { return function (dispatch) {
    fetch_1.default.post(const_1.default.FIELDTRANS_MODIFY, data).then(function () {
        antd_1.message.success('操作成功');
        dispatch({ type: 'FIELDTRANS_EDITMODAL_SHOW', show: false });
        dispatch(actions.loadFieldsData());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 删除一个埋点需求
 */
actions.delete = function (key) { return function (dispatch) {
    fetch_1.default.get(const_1.default.FIELDTRANS_REMOVE + '/' + key, {}).then(function () {
        antd_1.message.success('操作成功');
        dispatch(actions.loadFieldsData());
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
/**
 * 批量删除埋点需求
 */
actions.batchDelete = function (keys) { return function () {
    fetch_1.default.get(const_1.default.FIELDTRANS_BATCHREMOVE, { ids: keys.join(',') }).then(function (data) {
        antd_1.message.success('操作成功');
    }).catch(function (err) {
        antd_1.message.warn('操作失败');
    });
}; };
exports.default = actions;


/***/ }),

/***/ 1595:
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
var index_1 = __webpack_require__(870);
var react_redux_1 = __webpack_require__(77);
var fieldTranslation_1 = __importDefault(__webpack_require__(1574));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var react_intl_1 = __webpack_require__(160);
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        _this.onSelectChange = function (selectedRowKeys) {
            _this.setState({ selectedRowKeys: selectedRowKeys });
        };
        _this.onBatchDel = function () {
            _this.props.onBatch(_this.state.selectedRowKeys);
        };
        _this.onCancel = function () {
            _this.setState({ selectedRowKeys: [] });
        };
        _this.state = {
            selectedRowKeys: []
        };
        return _this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var _a = this.props, loading = _a.loading, list = _a.list, pageNo = _a.pageNo, dataCount = _a.dataCount, searchParams = _a.searchParams, onPageChange = _a.onPageChange, onPageSizeChange = _a.onPageSizeChange, isBatchDelState = _a.isBatchDelState, operations = _a.operations;
        var selectedRowKeys = this.state.selectedRowKeys;
        var paginationOptions = { pageNo: pageNo, pageSize: searchParams.pageSize, dataCount: dataCount, onPageChange: onPageChange, onPageSizeChange: onPageSizeChange };
        var rowSelection;
        this.columns = [
            { title: 'strKey', dataIndex: 'strKey' },
            { title: 'strVal', dataIndex: 'strVal' },
            { title: 'system', dataIndex: 'systemId' },
            { title: 'language', dataIndex: 'language' },
        ];
        if (isBatchDelState) {
            rowSelection = {
                selectedRowKeys: selectedRowKeys,
                onChange: this.onSelectChange,
            };
        }
        else {
            this.columns.push({
                title: 'Action', dataIndex: '', key: '', render: function (data) {
                    return (React.createElement("span", null,
                        operations.indexOf('fieldTranslation_operation_modify') > -1 &&
                            React.createElement("a", { href: 'javascript:;', onClick: _this.props.handleEdit.bind(_this, data) },
                                React.createElement(react_intl_1.FormattedMessage, { id: 'fieldTranslation_operation_modify' })),
                        operations.indexOf('fieldTranslation_operation_delete') > -1 &&
                            React.createElement(React.Fragment, null,
                                React.createElement(antd_1.Divider, { type: 'vertical' }),
                                React.createElement(antd_1.Popconfirm, { title: '确认删除？', onConfirm: function (e) { e.stopPropagation(); _this.props.handleDelete(data.id); }, onCancel: function (e) { return e.stopPropagation(); } },
                                    React.createElement("a", { href: 'javascript:;', onClick: function (e) { e.stopPropagation(); } },
                                        React.createElement(react_intl_1.FormattedMessage, { id: 'fieldTranslation_operation_delete' }))))));
                }
            });
        }
        return (React.createElement(index_1.ExTable, __assign({}, paginationOptions, { loading: loading, columns: this.columns, rowKey: 'id', rowSelection: rowSelection, dataSource: list, expandRowByClick: true, expandedRowRender: function (record) {
                return (React.createElement(React.Fragment, null, _this.columns.slice(0, _this.columns.length - 1).map(function (o) {
                    return React.createElement("p", { className: o.title, key: o.title },
                        React.createElement("b", null, o.title),
                        " : ",
                        record[o.title]);
                })));
            } })));
    };
    return Table;
}(React.Component));
//这里有一个需要注意的问题，关于HOC组件使用ref无法获得真实组件的问题，添加withRef
var TableComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/fieldTranslation'].functions;
    var _a = state['fieldTranslation'], loading = _a.loading, list = _a.list, page = _a.page, searchParams = _a.searchParams;
    return __assign({ loading: loading, list: list }, page, { searchParams: searchParams, operations: operations });
}, function (dispatch) { return ({
    onPageSizeChange: function (pageSize) {
        dispatch({ type: 'FIELDTRANS_SEARCHPARAM', params: { pageSize: pageSize } });
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange: function (pageNo) {
        dispatch(fieldTranslation_1.default.loadFieldsData(pageNo));
    },
    handleEdit: function (data, e) {
        e.stopPropagation();
        dispatch({ type: 'FIELDTRANS_EDITMODAL_SHOW', show: true });
        dispatch({ type: 'FIELDTRANS_EDITMODAL_DATA', data: data });
    },
    handleDelete: function (id) {
        dispatch(fieldTranslation_1.default.delete(id));
    },
    onBatch: function (keys) {
        dispatch(fieldTranslation_1.default.batchDelete(keys));
    }
}); }, null, { withRef: true })(Table);
exports.default = TableComp;


/***/ }),

/***/ 1596:
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
var ExFormItem_1 = __importDefault(__webpack_require__(872));
var ExModal_1 = __importDefault(__webpack_require__(871));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var SearchForm = antd_1.Form.create({
    mapPropsToFields: function (props) {
        var params = props.searchParams;
        return {
            strKey: antd_1.Form.createFormField({ value: params.strKey }),
            strVal: antd_1.Form.createFormField({ value: params.strVal }),
            systemId: antd_1.Form.createFormField({ value: params.systemId }),
            language: antd_1.Form.createFormField({ value: params.language })
        };
    }
})(function (props) {
    var form = props.form;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(ExFormItem_1.default, { label: 'strKey', name: 'strKey', getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { label: 'strVal', name: 'strVal', getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { label: 'system', name: 'systemId', getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { label: 'language', name: 'language', getFieldDecorator: getFieldDecorator })));
});
var SearchModal = /** @class */ (function (_super) {
    __extends(SearchModal, _super);
    function SearchModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSave = function () {
            var form = _this.form;
            form.validateFields(function (err, data) {
                if (err) {
                    return;
                }
                _this.props.onSearch(data);
                _this.props.onClose();
            });
        };
        _this.saveFormRef = function (form) {
            _this.form = form;
        };
        return _this;
    }
    SearchModal.prototype.render = function () {
        var _a = this.props, show = _a.show, onClose = _a.onClose, searchParams = _a.searchParams;
        return (React.createElement(ExModal_1.default, { visible: show, title: '查询条件', onCancel: onClose, onOk: this.handleSave },
            React.createElement(SearchForm, { ref: this.saveFormRef, searchParams: searchParams })));
    };
    return SearchModal;
}(React.Component));
var SearchModalComp = react_redux_1.connect(function (state) {
    var searchParams = state['fieldTranslation'].searchParams;
    return { searchParams: searchParams };
}, null)(SearchModal);
exports.default = SearchModalComp;


/***/ }),

/***/ 1597:
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
var index_1 = __webpack_require__(870);
var antd_1 = __webpack_require__(43);
var fieldTranslation_1 = __importDefault(__webpack_require__(1574));
var React = __importStar(__webpack_require__(0));
var EditForm = antd_1.Form.create({
    onFieldsChange: function (props, changeFields) {
        var changed = Object.keys(changeFields).map(function (o) {
            var obj = new Object();
            obj[o] = changeFields[o].value;
            return obj;
        });
        // props.onChange(props.editData,changed[0]);
    },
    mapPropsToFields: function (props) {
        var params = props.editData;
        var str = JSON.stringify({ strKey: params.strKey, strVal: params.strVal });
        return {
            id: antd_1.Form.createFormField({ value: params.id }),
            str: antd_1.Form.createFormField({ value: str }),
            systemId: antd_1.Form.createFormField({ value: params.systemId }),
            language: antd_1.Form.createFormField({ value: params.language })
        };
    }
})(function (props) {
    var form = props.form, systemList = props.systemList, langList = props.langList;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(index_1.ExFormItem, { type: 'hidden', name: 'id', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { type: 'textarea', label: 'str', name: 'str', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { type: 'select', list: systemList.map(function (o) {
                return {
                    id: o.oid,
                    name: o.name
                };
            }), label: 'system', name: 'systemId', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { type: 'select', list: langList, label: 'language', name: 'language', getFieldDecorator: getFieldDecorator })));
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
                _this.props.onSubmit(data);
            });
        };
        _this.fieldsOnChange = function (props, changeFields) {
            var newData = __assign({}, props, changeFields);
        };
        _this.saveFormRef = function (form) {
            _this.form = form;
        };
        return _this;
    }
    EditModal.prototype.render = function () {
        var _a = this.props, show = _a.editModalShow, onClose = _a.onClose, editData = _a.editData, loading = _a.editModalLoading, systemList = _a.systemList, langList = _a.langList;
        console.log(this.props);
        return (React.createElement(index_1.ExModal, { visible: show, confirmLoading: loading, title: editData.id ? 'Edit' : 'Add', onCancel: onClose, onOk: this.handleSave },
            React.createElement(EditForm, { ref: this.saveFormRef, editData: editData, systemList: systemList, langList: langList, onChange: this.fieldsOnChange })));
    };
    return EditModal;
}(React.Component));
var EditModalComp = react_redux_1.connect(function (state) {
    var _a = state['fieldTranslation'], editModalShow = _a.editModalShow, editData = _a.editData, editModalLoading = _a.editModalLoading, systemList = _a.systemList, langList = _a.langList;
    return { editModalShow: editModalShow, editData: editData, editModalLoading: editModalLoading, systemList: systemList, langList: langList };
}, function (dispatch) { return ({
    onSubmit: function (data) {
        var str = JSON.parse(data.str);
        if (Object.keys(str).length > 1) {
            var arr_1 = [];
            Object.keys(str).forEach(function (o) {
                arr_1.push({
                    systemId: data.systemId,
                    language: data.language,
                    strKey: o,
                    strVal: str[o]
                });
            });
            dispatch(fieldTranslation_1.default.batchCreate(data));
        }
        else {
            dispatch(fieldTranslation_1.default.create({
                systemId: data.systemId,
                language: data.language,
                strKey: Object.keys(str)[0],
                strVal: str[Object.keys(str)[0]]
            }));
        }
    },
    onClose: function () {
        dispatch({ type: 'FIELDTRANS_EDITMODAL_SHOW', show: false });
    }
}); })(EditModal);
exports.default = EditModalComp;


/***/ }),

/***/ 884:
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
var fieldTranslation_1 = __importDefault(__webpack_require__(1574));
var app_1 = __importDefault(__webpack_require__(78));
var react_redux_1 = __webpack_require__(77);
// import Toolbar from './Toolbar';
var Table_1 = __importDefault(__webpack_require__(1595));
var Toolbar_1 = __importDefault(__webpack_require__(1573));
var SearchModal_1 = __importDefault(__webpack_require__(1596));
var antd_1 = __webpack_require__(43);
var EditModal_1 = __importDefault(__webpack_require__(1597));
var react_intl_1 = __webpack_require__(160);
var React = __importStar(__webpack_require__(0));
var FieldTranslation = /** @class */ (function (_super) {
    __extends(FieldTranslation, _super);
    function FieldTranslation(props) {
        var _this = _super.call(this, props) || this;
        _this.onCancelBatchDel = function () {
            _this.setState({ isBatchDelState: false });
            _this.table.current.wrappedInstance.onCancel();
        };
        _this.onConfirmBatchDel = function () {
            _this.setState({ isBatchDelState: false });
            _this.table.current.wrappedInstance.onBatchDel();
        };
        _this.state = {
            showSearchModal: false,
            isBatchDelState: false
        };
        _this.table = React.createRef();
        return _this;
    }
    FieldTranslation.prototype.componentDidMount = function () {
        this.props.init();
    };
    FieldTranslation.prototype.render = function () {
        var _this = this;
        var _a = this.props, onRefresh = _a.onRefresh, onSearch = _a.onSearch, operations = _a.operations;
        return (React.createElement("div", { className: 'fieldTranslationContainer' },
            React.createElement(Toolbar_1.default, { onRefresh: onRefresh }, this.state.isBatchDelState ? (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Button, { onClick: this.onCancelBatchDel }, "\u53D6\u6D88"),
                React.createElement(antd_1.Button, { onClick: this.onConfirmBatchDel, type: 'primary', style: { marginLeft: 20 } }, "\u786E\u5B9A\u5220\u9664"))) : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Button, { onClick: function () { _this.setState({ showSearchModal: true }); }, icon: 'search' }, "\u67E5\u8BE2"),
                operations.indexOf('fieldTranslation_operation_add') > -1 &&
                    React.createElement(antd_1.Button, { onClick: function () { return _this.props.onAdd(); }, style: { marginLeft: 20 }, icon: 'plus' },
                        React.createElement(react_intl_1.FormattedMessage, { id: 'fieldTranslation_operation_add' })),
                operations.indexOf('fieldTranslation_operation_delete') > -1 &&
                    React.createElement(antd_1.Button, { type: 'primary', style: { marginLeft: 20 }, onClick: function () { return _this.setState({ isBatchDelState: true }); }, icon: 'delete' },
                        React.createElement(react_intl_1.FormattedMessage, { id: 'fieldTranslation_operation_batchDelete' }))))),
            React.createElement(EditModal_1.default, null),
            React.createElement(SearchModal_1.default, { show: this.state.showSearchModal, onSearch: onSearch, onClose: function () { _this.setState({ showSearchModal: false }); } }),
            React.createElement(Table_1.default, { isBatchDelState: this.state.isBatchDelState, ref: this.table })));
    };
    return FieldTranslation;
}(React.Component));
var FieldTranslationComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['systemConfig/fieldTranslation'].functions;
    return { operations: operations };
}, function (dispatch) { return ({
    /**
     * page数据初始化加载
     */
    init: function () {
        dispatch(app_1.default.getSearchParamsFromLocalStorage()).then(function () {
            dispatch(fieldTranslation_1.default.loadSystemList());
            dispatch(fieldTranslation_1.default.loadFieldsData());
        });
    },
    /**
     * 点击刷新或操作
     */
    onRefresh: function () {
        dispatch(fieldTranslation_1.default.loadFieldsData());
    },
    /**
     * 查询
     * @param params
     */
    onSearch: function (params) {
        dispatch({ type: 'FIELDTRANS_SEARCHPARAM_CHANGE', params: params });
        dispatch(fieldTranslation_1.default.loadFieldsData(1));
    },
    onAdd: function () {
        dispatch({ type: 'FIELDTRANS_EDITMODAL_SHOW', show: true });
        dispatch({ type: 'FIELDTRANS_EDITMODAL_RESET' });
    }
}); })(FieldTranslation);
module.exports = FieldTranslationComp;


/***/ })

});