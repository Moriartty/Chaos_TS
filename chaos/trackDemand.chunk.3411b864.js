webpackJsonp([1],{

/***/ 1605:
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
        var _a = this.props, loading = _a.loading, list = _a.list, pageNo = _a.pageNo, dataCount = _a.dataCount, searchParams = _a.searchParams, onPageChange = _a.onPageChange, onPageSizeChange = _a.onPageSizeChange, isBatchDelState = _a.isBatchDelState, verifyStates = _a.verifyStates, operations = _a.operations;
        var selectedRowKeys = this.state.selectedRowKeys;
        var paginationOptions = { pageNo: pageNo, pageSize: searchParams.pageSize, dataCount: dataCount, onPageChange: onPageChange, onPageSizeChange: onPageSizeChange };
        var rowSelection;
        this.columns = [
            { title: 'name', dataIndex: 'name' },
            { title: 'state', dataIndex: 'state', render: function (data) {
                    var verifyInfo = verifyStates.find(function (o) { return o.state == data; });
                    return React.createElement(antd_1.Tag, { color: verifyInfo.tagColor }, verifyInfo.stateMsg);
                } },
            { title: 'testPath', dataIndex: 'testPath' },
            { title: 'trackType', dataIndex: 'trackType' },
            { title: 'description', dataIndex: 'description' },
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
                    var _opt = [];
                    if (~~data.state === 0 && operations.indexOf('trackDemand_operation_verify') > -1)
                        _opt.push(React.createElement("a", { href: "javascript:;", key: 'verify', onClick: _this.props.handleVerify.bind(_this, data) },
                            React.createElement(react_intl_1.FormattedMessage, { id: "trackDemand_operation_verify" })));
                    if (~~data.state === 0 && operations.indexOf('trackDemand_operation_modify') > -1)
                        _opt.push(React.createElement("a", { href: "javascript:;", key: 'modify', onClick: _this.props.handleEdit.bind(_this, data) },
                            React.createElement(react_intl_1.FormattedMessage, { id: "trackDemand_operation_modify" })));
                    if (~~data.state === 1 && operations.indexOf('trackDemand_operation_addInfo') > -1)
                        _opt.push(React.createElement("a", { href: "javascript:;", key: 'addInfo', onClick: _this.props.handleAddInfo.bind(_this, data.id) },
                            React.createElement(react_intl_1.FormattedMessage, { id: "trackDemand_operation_addInfo" })));
                    return (React.createElement("span", null, _opt.joinItem(function (i) { return React.createElement(antd_1.Divider, { key: i, type: "vertical" }); })));
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
    var operations = state.app.menuObj['track/trackDemand'].functions;
    var _a = state['track'], loading = _a.trackDemand_loading, list = _a.trackDemand_list, page = _a.trackDemand_page, searchParams = _a.trackDemand_searchParams, verifyStates = _a.verifyStates;
    return __assign({ loading: loading, list: list }, page, { searchParams: searchParams, verifyStates: verifyStates, operations: operations });
}, function (dispatch) { return ({
    onPageSizeChange: function (pageSize) {
        dispatch({ type: 'TRACK_DEMAND_SEARCHPARAM', params: { pageSize: pageSize } });
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange: function (pageNo) {
        dispatch(track_1.default.loadTrackDemand(pageNo));
    },
    handleVerify: function (data, e) {
        e.stopPropagation();
        dispatch({ type: 'TRACK_DEMAND_VERIFYMODAL_SHOW', show: true });
        dispatch({ type: 'TRACK_DEMAND_EDITMODAL_DATA', data: data });
    },
    handleEdit: function (data, e) {
        e.stopPropagation();
        dispatch({ type: 'TRACK_DEMAND_EDITMODAL_SHOW', show: true });
        dispatch({ type: 'TRACK_DEMAND_EDITMODAL_DATA', data: data });
    },
    handleDelete: function (id) {
        dispatch(track_1.default.deleteTrackDemand(id));
    },
    handleAddInfo: function (demandId, e) {
        e.stopPropagation();
        dispatch({ type: 'TRACK_DEMAND_ADDINFOMODAL_SHOW', show: true });
        dispatch({ type: 'TRACK_DEMAND_ADDINFOMODAL_DATA', data: { demandId: demandId } });
    },
    onBatch: function (keys) {
        dispatch(track_1.default.batchDeleteTrackDemand(keys));
    }
}); }, null, { withRef: true })(Table);
exports.default = TableComp;


/***/ }),

/***/ 1606:
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
            trackType: antd_1.Form.createFormField({ value: params.trackType }),
            viewState: antd_1.Form.createFormField({ value: params.viewState })
        };
    }
})(function (props) {
    var form = props.form, trackType_allData = props.trackType_allData, verifyStates = props.verifyStates;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(ExFormItem_1.default, { label: 'Name', name: 'name', getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { type: 'select', list: trackType_allData.map(function (o) { return ({ id: o.trackId, name: o.name }); }), label: 'TrackType', name: 'trackType', getFieldDecorator: getFieldDecorator }),
        React.createElement(ExFormItem_1.default, { type: 'select', list: verifyStates.map(function (o) { return ({ id: o.state, name: o.stateMsg }); }), label: 'ViewState', name: 'viewState', getFieldDecorator: getFieldDecorator })));
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
        var _a = this.props, show = _a.show, onClose = _a.onClose, searchParams = _a.searchParams, trackType_allData = _a.trackType_allData, verifyStates = _a.verifyStates;
        return (React.createElement(ExModal_1.default, { visible: show, title: '查询条件', onCancel: onClose, onOk: this.handleSave },
            React.createElement(SearchForm, { ref: this.saveFormRef, searchParams: searchParams, trackType_allData: trackType_allData, verifyStates: verifyStates })));
    };
    return SearchModal;
}(React.Component));
var SearchModalComp = react_redux_1.connect(function (state) {
    var _a = state['track'], searchParams = _a.trackDemand_searchParams, trackType_allData = _a.trackType_allData, verifyStates = _a.verifyStates;
    return { searchParams: searchParams, trackType_allData: trackType_allData, verifyStates: verifyStates };
}, null)(SearchModal);
exports.default = SearchModalComp;


/***/ }),

/***/ 1607:
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
            // state:Form.createFormField({value:params.state}),
            testPath: antd_1.Form.createFormField({ value: params.testPath }),
            trackType: antd_1.Form.createFormField({ value: params.trackType }),
            description: antd_1.Form.createFormField({ value: params.description })
        };
    }
})(function (props) {
    var form = props.form, trackType_allData = props.trackType_allData;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(index_1.ExFormItem, { type: 'hidden', name: 'id', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { name: 'name', label: 'name', getFieldDecorator: getFieldDecorator, required: true }),
        React.createElement(index_1.ExFormItem, { name: 'trackType', label: 'trackType', type: 'select', list: trackType_allData.map(function (o) { return ({ id: o.trackId, name: o.name }); }), getFieldDecorator: getFieldDecorator, required: true }),
        React.createElement(index_1.ExFormItem, { name: 'testPath', label: 'testPath', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { name: 'description', label: 'description', getFieldDecorator: getFieldDecorator })));
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
        var _a = this.props, show = _a.show, onClose = _a.onClose, editData = _a.editData, loading = _a.loading, trackType_allData = _a.trackType_allData;
        return (React.createElement(index_1.ExModal, { visible: show, confirmLoading: loading, title: editData.id ? 'Edit' : 'Add', onCancel: onClose, onOk: this.handleSave },
            React.createElement(EditForm, { ref: this.saveFormRef, editData: editData, onChange: this.fieldsOnChange, trackType_allData: trackType_allData })));
    };
    return EditModal;
}(React.Component));
var EditModalComp = react_redux_1.connect(function (state) {
    var _a = state['track'], show = _a.trackDemand_editModalShow, editData = _a.trackDemand_editData, editModalLoading = _a.trackDemand_editModalLoading, trackType_allData = _a.trackType_allData;
    return { show: show, editData: editData, loading: editModalLoading, trackType_allData: trackType_allData };
}, function (dispatch) { return ({
    onSubmit: function (data) {
        dispatch(track_1.default.addOrEditTrackDemand(data));
    },
    onClose: function () {
        dispatch({ type: 'TRACK_DEMAND_EDITMODAL_SHOW', show: false });
    }
}); })(EditModal);
exports.default = EditModalComp;


/***/ }),

/***/ 1608:
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
var VerifyForm = antd_1.Form.create()(function (props) {
    var form = props.form;
    var _a = props.editData, id = _a.id, name = _a.name, trackType = _a.trackType, testPath = _a.testPath, description = _a.description;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(index_1.ExFormItem, { type: 'hidden', name: 'id', getFieldDecorator: getFieldDecorator, initialValue: id }),
        React.createElement(index_1.ExFormItem, { type: 'static', name: 'name', label: 'name', getFieldDecorator: getFieldDecorator, initialValue: name }),
        React.createElement(index_1.ExFormItem, { name: 'trackType', label: 'trackType', type: 'static', getFieldDecorator: getFieldDecorator, initialValue: trackType }),
        React.createElement(index_1.ExFormItem, { type: 'static', name: 'testPath', label: 'testPath', getFieldDecorator: getFieldDecorator, initialValue: testPath }),
        React.createElement(index_1.ExFormItem, { type: 'static', name: 'description', label: 'description', getFieldDecorator: getFieldDecorator, initialValue: description }),
        React.createElement(index_1.ExFormItem, { type: 'textarea', name: 'verifyMessage', label: 'verifyMessage', getFieldDecorator: getFieldDecorator })));
});
var VerifyModal = /** @class */ (function (_super) {
    __extends(VerifyModal, _super);
    function VerifyModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldsOnChange = function (props, changeFields) {
            var newData = __assign({}, props, changeFields);
        };
        _this.saveFormRef = function (form) {
            _this.form = form;
        };
        _this.handleReview = function (state) {
            var form = _this.form;
            form.validateFields(function (err, data) {
                if (err) {
                    return;
                }
                _this.props.onSubmit(state, data);
            });
        };
        return _this;
    }
    VerifyModal.prototype.render = function () {
        var _a = this.props, show = _a.show, onClose = _a.onClose, editData = _a.editData, loading = _a.loading;
        return (React.createElement(index_1.ExModal, { visible: show, confirmLoading: loading, title: 'Verify', onCancel: onClose, footer: [
                React.createElement(antd_1.Button, { key: "back", onClick: this.handleReview.bind(this, 2) }, "\u9A73\u56DE"),
                React.createElement(antd_1.Button, { key: "submit", type: "primary", loading: loading, onClick: this.handleReview.bind(this, 1) }, "\u901A\u8FC7"),
            ] },
            React.createElement(VerifyForm, { ref: this.saveFormRef, editData: editData, onChange: this.fieldsOnChange })));
    };
    return VerifyModal;
}(React.Component));
var VerifyModalComp = react_redux_1.connect(function (state) {
    var _a = state['track'], show = _a.trackDemand_verifyModalShow, editData = _a.trackDemand_editData;
    return { show: show, editData: editData };
}, function (dispatch) { return ({
    onSubmit: function (state, data) {
        dispatch(track_1.default.verifyTrackDemand(state, data));
    },
    onClose: function () {
        dispatch({ type: 'TRACK_DEMAND_VERIFYMODAL_SHOW', show: false });
    }
}); })(VerifyModal);
exports.default = VerifyModalComp;


/***/ }),

/***/ 1609:
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
        // props.onChange(props.addInfoData,changed[0]);
    },
    mapPropsToFields: function (props) {
        var addInfoData = props.addInfoData, eventTypeCodes = props.eventTypeCodes;
        var eventTypeCode = eventTypeCodes.find(function (o) { return o.name == addInfoData.eventType; });
        return {
            id: antd_1.Form.createFormField({ value: addInfoData.id }),
            eventId: antd_1.Form.createFormField({ value: addInfoData.eventId }),
            eventTypeCode: antd_1.Form.createFormField({ value: eventTypeCode ? eventTypeCode.id : '' }),
            param: antd_1.Form.createFormField({ value: addInfoData.param }),
            paramDescribe: antd_1.Form.createFormField({ value: addInfoData.paramDescribe }),
            demandId: antd_1.Form.createFormField({ value: addInfoData.demandId }),
        };
    }
})(function (props) {
    var form = props.form, eventTypeCodes = props.eventTypeCodes, trackDemand_allData = props.trackDemand_allData;
    var getFieldDecorator = form.getFieldDecorator;
    return (React.createElement(antd_1.Form, null,
        React.createElement(index_1.ExFormItem, { type: 'hidden', name: 'id', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { name: 'eventId', label: 'eventId', getFieldDecorator: getFieldDecorator, required: true }),
        React.createElement(index_1.ExFormItem, { type: 'select', list: eventTypeCodes, name: 'eventTypeCode', label: 'eventTypeCode', getFieldDecorator: getFieldDecorator, required: true }),
        React.createElement(index_1.ExFormItem, { type: 'select', list: trackDemand_allData, showSearch: true, name: 'demandId', label: 'demandId', getFieldDecorator: getFieldDecorator, required: true }),
        React.createElement(index_1.ExFormItem, { type: 'textarea', name: 'paramDescribe', label: 'paramDescribe', getFieldDecorator: getFieldDecorator }),
        React.createElement(index_1.ExFormItem, { type: 'textarea', name: 'param', label: 'param', getFieldDecorator: getFieldDecorator })));
});
var AddInfoModal = /** @class */ (function (_super) {
    __extends(AddInfoModal, _super);
    function AddInfoModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSave = function () {
            var form = _this.form;
            form.validateFields(function (err, data) {
                if (err) {
                    return;
                }
                data.trackType = _this.props.trackDemand_allData.find(function (o) {
                    return o.id = data.demandId;
                }).trackType;
                _this.props.onSubmit(data);
                _this.props.onClose();
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
    AddInfoModal.prototype.render = function () {
        var _a = this.props, show = _a.show, onClose = _a.onClose, addInfoData = _a.addInfoData, loading = _a.loading, eventTypeCodes = _a.eventTypeCodes, trackDemand_allData = _a.trackDemand_allData;
        return (React.createElement(index_1.ExModal, { visible: show, confirmLoading: loading, title: 'Add Info', onCancel: onClose, onOk: this.handleSave, width: 600 },
            React.createElement(EditForm, { ref: this.saveFormRef, addInfoData: addInfoData, onChange: this.fieldsOnChange, eventTypeCodes: eventTypeCodes, trackDemand_allData: trackDemand_allData })));
    };
    return AddInfoModal;
}(React.Component));
var AddInfoModalComp = react_redux_1.connect(function (state) {
    var _a = state['track'], show = _a.trackDemand_addInfoModalShow, addInfoData = _a.trackDemand_addInfoData, addInfoModalLoading = _a.trackDemand_addInfoModalLoading, eventTypeCodes = _a.eventTypeCodes, trackDemand_allData = _a.trackDemand_allData;
    return { show: show, addInfoData: addInfoData, loading: addInfoModalLoading, eventTypeCodes: eventTypeCodes, trackDemand_allData: trackDemand_allData };
}, function (dispatch) { return ({
    onSubmit: function (data) {
        dispatch(track_1.default.addOrEditTrackInfo(data));
    },
    onClose: function () {
        dispatch({ type: 'TRACK_DEMAND_ADDINFOMODAL_SHOW', show: false });
    }
}); })(AddInfoModal);
exports.default = AddInfoModalComp;


/***/ }),

/***/ 887:
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
var Table_1 = __importDefault(__webpack_require__(1605));
var Toolbar_1 = __importDefault(__webpack_require__(1573));
var SearchModal_1 = __importDefault(__webpack_require__(1606));
var antd_1 = __webpack_require__(43);
var EditModal_1 = __importDefault(__webpack_require__(1607));
var VerifyModal_1 = __importDefault(__webpack_require__(1608));
var addInfoModal_1 = __importDefault(__webpack_require__(1609));
var React = __importStar(__webpack_require__(0));
__webpack_require__(1575);
var TrackDemandMgr = /** @class */ (function (_super) {
    __extends(TrackDemandMgr, _super);
    function TrackDemandMgr(props) {
        var _this = _super.call(this, props) || this;
        _this.onCancelBatchDel = function () {
            _this.setState({ isBatchDelState: false });
            _this.table.current.wrappedInstance.onCancel();
        };
        _this.onConfirmBatchDel = function () {
            _this.setState({ isBatchDelState: false });
            _this.table.current.wrappedInstance.onBatchDel();
        };
        _this.handleToggle = function () {
            _this.props.onViewStateChange((_this.props.viewState !== 0) ? 0 : null);
        };
        _this.state = {
            showSearchModal: false,
            isBatchDelState: false,
        };
        _this.table = React.createRef();
        return _this;
    }
    TrackDemandMgr.prototype.componentDidMount = function () {
        this.props.init();
    };
    TrackDemandMgr.prototype.render = function () {
        var _this = this;
        var _a = this.props, onRefresh = _a.onRefresh, onSearch = _a.onSearch, viewState = _a.viewState;
        return (React.createElement("div", { className: 'trackDemadContainer' },
            React.createElement(Toolbar_1.default, { onRefresh: onRefresh }, this.state.isBatchDelState ? (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Button, { onClick: this.onCancelBatchDel }, "\u53D6\u6D88"),
                React.createElement(antd_1.Button, { onClick: this.onConfirmBatchDel, type: 'primary', style: { marginLeft: 20 } }, "\u786E\u5B9A\u5220\u9664"))) : (React.createElement(React.Fragment, null,
                React.createElement(antd_1.Button, { onClick: function () { _this.setState({ showSearchModal: true }); }, icon: 'search' }, "\u67E5\u8BE2"),
                React.createElement(antd_1.Button, { onClick: function () { return _this.props.onAdd(); }, icon: 'plus' }, "\u65B0\u589E"),
                React.createElement(antd_1.Button, { type: 'primary', onClick: this.handleToggle, style: { marginLeft: 20 } }, viewState === 0 ? '返回普通查看' : '查看我的待审核')))),
            React.createElement(EditModal_1.default, null),
            React.createElement(VerifyModal_1.default, null),
            React.createElement(addInfoModal_1.default, null),
            React.createElement(SearchModal_1.default, { show: this.state.showSearchModal, onSearch: onSearch, onClose: function () { _this.setState({ showSearchModal: false }); } }),
            React.createElement(Table_1.default, { isBatchDelState: this.state.isBatchDelState, ref: this.table })));
    };
    return TrackDemandMgr;
}(React.Component));
var TrackDemandMgrComp = react_redux_1.connect(function (state) {
    var viewState = state['track'].trackDemand_searchParams.viewState;
    return { viewState: viewState };
}, function (dispatch) { return ({
    /**
     * page数据初始化加载
     */
    init: function () {
        dispatch(app_1.default.getSearchParamsFromLocalStorage()).then(function () {
            dispatch(track_1.default.loadAllTrackType());
            dispatch(track_1.default.loadTrackDemand());
            dispatch(track_1.default.loadAllTrackDemand());
        });
    },
    /**
     * 点击刷新或操作
     */
    onRefresh: function () {
        dispatch(track_1.default.loadTrackDemand());
    },
    /**
     * 查询
     * @param params
     */
    onSearch: function (params) {
        dispatch({ type: 'TRACK_DEMAND_SEARCHPARAM_CHANGE', params: params });
        dispatch(track_1.default.loadTrackDemand(1));
    },
    onAdd: function () {
        dispatch({ type: 'TRACK_DEMAND_EDITMODAL_SHOW', show: true });
        dispatch({ type: 'TRACK_DEMAND_EDITMODAL_RESET' });
    },
    onViewStateChange: function (state) {
        dispatch({ type: 'TRACK_DEMAND_VIEWSTATE_CHANGE', state: state });
        dispatch(track_1.default.loadTrackDemand());
    }
}); })(TrackDemandMgr);
module.exports = TrackDemandMgrComp;


/***/ })

});