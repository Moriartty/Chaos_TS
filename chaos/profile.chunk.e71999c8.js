webpackJsonp([9],{

/***/ 1611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = __importDefault(__webpack_require__(256));
var action = {};
/**
 * 更新基本信息
 * @param data
 * @returns {Function}
 */
action.update = function (data) { return function (dispatch) { return fetch_1.default.post('/profile/update', data); }; };
/**
 * 更新密码
 * @param data
 * @returns {Function}
 */
action.updatePassword = function (data) { return function (dispatch) { return fetch_1.default.post('/profile/update-password', data); }; };
/**
 * 加载角色列表
 * @returns {Function}
 */
action.loadRoleList = function () { return function (dispatch) { return fetch_1.default.get('/role').then(function (list) {
    dispatch({ type: 'PROFILE_ROLE_LIST_LOAD', list: list });
}); }; };
exports.default = action;


/***/ }),

/***/ 889:
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
var app_1 = __importDefault(__webpack_require__(78));
var profile_1 = __importDefault(__webpack_require__(1611));
var antd_1 = __webpack_require__(43);
var index_1 = __webpack_require__(870);
var React = __importStar(__webpack_require__(0));
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: false
        };
        _this.submit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, data) {
                if (err) {
                    return;
                }
                data.birthday = data.birthday.format('YYYY-MM-DD');
                _this.props.onSubmit.call(_this, data);
            });
        };
        return _this;
    }
    Profile.prototype.componentDidMount = function () {
        this.props.init();
    };
    Profile.prototype.render = function () {
        var _a = this.props, info = _a.userInfo, form = _a.form, roleList = _a.roleList;
        var getFieldDecorator = form.getFieldDecorator;
        return (React.createElement(antd_1.Form, { onSubmit: this.submit },
            React.createElement("fieldset", null,
                React.createElement("legend", null,
                    React.createElement(antd_1.Icon, { type: "tag-o" }),
                    " \u57FA\u672C\u4FE1\u606F"),
                React.createElement("div", { style: { maxWidth: 800 } },
                    React.createElement(index_1.ExFormItem, { label: "\u59D3\u540D", type: "static", initialValue: info.name }),
                    React.createElement(index_1.ExFormItem, { label: "\u6027\u522B", type: "radio", name: "sex", initialValue: info.sex, list: [{ id: '男', name: '男' }, { id: '女', name: '女' }], getFieldDecorator: getFieldDecorator }),
                    React.createElement(index_1.ExFormItem, { label: "\u751F\u65E5", type: "date", name: "birthday", initialValue: info.birthday, getFieldDecorator: getFieldDecorator }),
                    React.createElement(index_1.ExFormItem, { label: "\u7C4D\u8D2F", name: "nativePlace", initialValue: info.nativePlace, getFieldDecorator: getFieldDecorator }),
                    React.createElement(index_1.ExFormItem, { label: "\u7EC4\u7EC7", type: "static", initialValue: info.org }),
                    React.createElement(index_1.ExFormItem, { label: "\u4E0A\u6B21\u767B\u5F55\u65F6\u95F4", type: "static", initialValue: info.lastLogin }),
                    React.createElement(index_1.ExFormItem, { label: "\u6CE8\u518C\u65F6\u95F4", type: "static", initialValue: info.createTime }),
                    React.createElement(index_1.ExFormItem, { label: "\u7528\u6237\u89D2\u8272", type: 'select', name: 'role', list: roleList, getFieldDecorator: getFieldDecorator }))),
            React.createElement("fieldset", null,
                React.createElement("legend", null,
                    React.createElement(antd_1.Icon, { type: "tag-o" }),
                    " \u8054\u7CFB\u65B9\u5F0F"),
                React.createElement("div", { style: { maxWidth: 800 } },
                    React.createElement(index_1.ExFormItem, { label: "\u90AE\u7BB1", name: "email", initialValue: info.email, getFieldDecorator: getFieldDecorator }),
                    React.createElement(index_1.ExFormItem, { label: "\u7535\u8BDD", name: "phone", initialValue: info.phone, required: true, getFieldDecorator: getFieldDecorator }),
                    React.createElement(index_1.ExFormItem, { label: "\u5EA7\u673A", name: "tel", initialValue: info.tel, getFieldDecorator: getFieldDecorator }),
                    React.createElement(index_1.ExFormItem, { label: "\u4F4F\u5740", type: "textarea", name: "address", initialValue: info.address, getFieldDecorator: getFieldDecorator }))),
            React.createElement("hr", null),
            React.createElement("div", { style: { maxWidth: 800, marginTop: 24 } },
                React.createElement(antd_1.Row, null,
                    React.createElement(antd_1.Col, { span: 18, offset: 6 },
                        React.createElement(antd_1.Button, { type: "primary", htmlType: "submit", icon: "save", size: "large", loading: this.state.loading }, "\u4FDD\u5B58"))))));
    };
    return Profile;
}(React.Component));
var ProfileComp = react_redux_1.connect(function (state) {
    var userInfo = state.app.userInfo;
    var roleList = state.profile.roleList;
    return { userInfo: userInfo, roleList: roleList };
}, function (dispatch) { return ({
    init: function () {
        dispatch(profile_1.default.loadRoleList());
    },
    /**
     * 提交保存
     * @param data
     */
    onSubmit: function (data) {
        var _this = this;
        this.setState({ loading: true });
        dispatch(profile_1.default.update(data)).then(function () {
            antd_1.message.success('保存成功!');
            _this.setState({ loading: false });
            dispatch(app_1.default.loadUserInfo());
        });
    }
}); })(antd_1.Form.create()(Profile));
module.exports = ProfileComp;


/***/ })

});