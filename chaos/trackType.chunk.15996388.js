webpackJsonp([5],{

/***/ 1602:
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
var track_1 = __importDefault(__webpack_require__(1569));
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
            { title: 'name', dataIndex: 'name' },
            { title: 'trackId', dataIndex: 'trackId' },
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
                        operations.indexOf('trackType_operation_modify') > -1 &&
                            React.createElement("a", { href: 'javascript:;', onClick: _this.props.handleEdit.bind(_this, data) },
                                React.createElement(react_intl_1.FormattedMessage, { id: 'trackType_operation_modify' })),
                        operations.indexOf('trackType_operation_delete') > -1 &&
                            React.createElement(React.Fragment, null,
                                React.createElement(antd_1.Divider, { type: 'vertical' }),
                                React.createElement(antd_1.Popconfirm, { title: '确认删除？', onConfirm: function (e) { e.stopPropagation(); _this.props.handleDelete(data.id); }, onCancel: function (e) { return e.stopPropagation(); } },
                                    React.createElement("a", { href: 'javascript:;', onClick: function (e) { e.stopPropagation(); } },
                                        React.createElement(react_intl_1.FormattedMessage, { id: 'trackType_operation_delete' }))))));
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
    var operations = state.app.menuObj['track/trackType'].functions;
    var _a = state['track'], loading = _a.trackType_loading, list = _a.trackType_list, page = _a.trackType_page, searchParams = _a.trackType_searchParams;
    return __assign({ loading: loading, list: list }, page, { searchParams: searchParams, operations: operations });
}, function (dispatch) { return ({
    onPageSizeChange: function (pageSize) {
        dispatch({ type: 'TRACK_TYPE_SEARCHPARAM_CHANGE', params: { pageSize: pageSize } });
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange: function (pageNo) {
        dispatch(track_1.default.loadTrackType(pageNo));
    },
    handleEdit: function (data, e) {
        e.stopPropagation();
        dispatch({ type: 'TRACK_TYPE_EDITMODAL_SHOW', show: true });
        dispatch({ type: 'TRACK_TYPE_EDITMODAL_DATA', data: data });
    },
    handleDelete: function (id) {
        dispatch(track_1.default.deleteTrack(id));
    },
    onBatch: function (keys) {
        dispatch(track_1.default.batchDeleteTrack(keys));
    }
}); }, null, { withRef: true })(Table);
exports.default = TableComp;


/***/ }),

/***/ 1603:
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
            name: antd_1.Form.createFormField({ value: params.name }),
            trackId: antd_1.Form.createFormField({ value: params.trackId })
        };
    }
})(function (props) {
    var form = props.form;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(ExFormItem_1.default, { label: 'Name', name: 'name', getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { label: 'TrackId', name: 'trackId', getFieldDecorator: getFieldDecorator })));
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
    var searchParams = state['track'].trackType_searchParams;
    return { searchParams: searchParams };
}, null)(SearchModal);
exports.default = SearchModalComp;


/***/ }),

/***/ 1604:
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
var track_1 = __importDefault(__webpack_require__(1569));
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
        return {
            id: antd_1.Form.createFormField({ value: params.id }),
            name: antd_1.Form.createFormField({ value: params.name }),
            trackId: antd_1.Form.createFormField({ value: params.trackId })
        };
    }
})(function (props) {
    var form = props.form;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(index_1.ExFormItem, { type: 'hidden', name: 'id', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { name: 'name', label: 'name', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { name: 'trackId', label: 'trackId', getFieldDecorator: getFieldDecorator })));
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
        var _a = this.props, show = _a.show, onClose = _a.onClose, editData = _a.editData, loading = _a.loading;
        return (React.createElement(index_1.ExModal, { visible: show, confirmLoading: loading, title: editData.id ? 'Edit' : 'Add', onCancel: onClose, onOk: this.handleSave },
            React.createElement(EditForm, { ref: this.saveFormRef, editData: editData, onChange: this.fieldsOnChange })));
    };
    return EditModal;
}(React.Component));
var EditModalComp = react_redux_1.connect(function (state) {
    var _a = state['track'], show = _a.trackType_editModalShow, editData = _a.trackType_editData, editModalLoading = _a.trackType_editModalLoading;
    return { show: show, editData: editData, loading: editModalLoading };
}, function (dispatch) { return ({
    onSubmit: function (data) {
        dispatch(track_1.default.addOrEditTrackType(data));
    },
    onClose: function () {
        dispatch({ type: 'TRACK_TYPE_EDITMODAL_SHOW', show: false });
    }
}); })(EditModal);
exports.default = EditModalComp;


/***/ }),

/***/ 886:
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
var track_1 = __importDefault(__webpack_require__(1569));
var app_1 = __importDefault(__webpack_require__(78));
var react_redux_1 = __webpack_require__(77);
// import Toolbar from './Toolbar';
var Table_1 = __importDefault(__webpack_require__(1602));
var Toolbar_1 = __importDefault(__webpack_require__(1573));
var SearchModal_1 = __importDefault(__webpack_require__(1603));
var antd_1 = __webpack_require__(43);
var EditModal_1 = __importDefault(__webpack_require__(1604));
var react_intl_1 = __webpack_require__(160);
var React = __importStar(__webpack_require__(0));
__webpack_require__(1575);
var TrackTypeMgr = /** @class */ (function (_super) {
    __extends(TrackTypeMgr, _super);
    function TrackTypeMgr(props) {
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
    TrackTypeMgr.prototype.componentDidMount = function () {
        this.props.init();
    };
    TrackTypeMgr.prototype.render = function () {
        var _this = this;
        var _a = this.props, onRefresh = _a.onRefresh, onSearch = _a.onSearch, operations = _a.operations;
        return (React.createElement("div", { className: 'trackTypeContainer' },
            React.createElement(Toolbar_1.default, { onRefresh: onRefresh }, this.state.isBatchDelState ? (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Button, { onClick: this.onCancelBatchDel }, "\u53D6\u6D88"),
                React.createElement(antd_1.Button, { onClick: this.onConfirmBatchDel, type: 'primary', style: { marginLeft: 20 } }, "\u786E\u5B9A\u5220\u9664"))) : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Button, { onClick: function () { _this.setState({ showSearchModal: true }); }, icon: 'search' }, "\u67E5\u8BE2"),
                operations.indexOf('trackType_operation_add') > -1 &&
                    React.createElement(antd_1.Button, { onClick: function () { return _this.props.onAdd(); }, style: { marginLeft: 20 }, icon: 'plus' },
                        React.createElement(react_intl_1.FormattedMessage, { id: 'trackType_operation_add' })),
                operations.indexOf('trackType_operation_delete') > -1 &&
                    React.createElement(antd_1.Button, { type: 'primary', style: { marginLeft: 20 }, onClick: function () { return _this.setState({ isBatchDelState: true }); }, icon: 'delete' },
                        React.createElement(react_intl_1.FormattedMessage, { id: 'trackType_operation_batchDelete' }))))),
            React.createElement(EditModal_1.default, null),
            React.createElement(SearchModal_1.default, { show: this.state.showSearchModal, onSearch: onSearch, onClose: function () { _this.setState({ showSearchModal: false }); } }),
            React.createElement(Table_1.default, { isBatchDelState: this.state.isBatchDelState, ref: this.table })));
    };
    return TrackTypeMgr;
}(React.Component));
var TrackTypeMgrComp = react_redux_1.connect(function (state) {
    var operations = state.app.menuObj['track/trackType'].functions;
    return { operations: operations };
}, function (dispatch) { return ({
    /**
     * page数据初始化加载
     */
    init: function () {
        dispatch(app_1.default.getSearchParamsFromLocalStorage()).then(function () {
            dispatch(track_1.default.loadTrackType());
        });
    },
    /**
     * 点击刷新或操作
     */
    onRefresh: function () {
        dispatch(track_1.default.loadTrackType());
    },
    /**
     * 查询
     * @param params
     */
    onSearch: function (params) {
        dispatch({ type: 'TRACK_TYPE_SEARCHPARAM_CHANGE', params: params });
        dispatch(track_1.default.loadTrackType(1));
    },
    onAdd: function () {
        dispatch({ type: 'TRACK_TYPE_EDITMODAL_SHOW', show: true });
        dispatch({ type: 'TRACK_TYPE_EDITMODAL_RESET' });
    }
}); })(TrackTypeMgr);
module.exports = TrackTypeMgrComp;


/***/ })

});