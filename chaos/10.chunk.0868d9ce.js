webpackJsonp([10],{

/***/ 867:
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
var ExModal_1 = __importDefault(__webpack_require__(857));
var antd_1 = __webpack_require__(43);
var React = __importStar(__webpack_require__(0));
var Err50x = /** @class */ (function (_super) {
    __extends(Err50x, _super);
    function Err50x() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.returnHome = function () {
            localStorage.setItem('chaos_activeTab', 'home');
            location.href = '';
        };
        return _this;
    }
    Err50x.prototype.render = function () {
        return (React.createElement(ExModal_1.default, { footer: null, visible: true, closable: false, style: { height: '50hv', textAlign: 'center', top: 0, paddingBottom: 0 }, width: "100%" },
            React.createElement("div", { style: { height: window.innerHeight - 48, paddingTop: 100 } },
                React.createElement(antd_1.Icon, { type: "disconnect", style: { fontSize: 180 } }),
                React.createElement("h1", { style: { margin: 10 } }, "O~ooh! \u670D\u52A1\u5668\u65AD\u7EBF\u4E86\uFF01"),
                React.createElement("p", { style: { color: '#999' } }, "\u8BF7\u7A0D\u540E\u518D\u5237\u65B0\u9875\u9762"),
                React.createElement(antd_1.Button, { type: "primary", icon: "sync", href: window.location.href }, "\u5237\u65B0"),
                React.createElement(antd_1.Button, { type: "primary", icon: "sync", onClick: this.returnHome, style: { marginLeft: 20 } }, "\u8FD4\u56DEHome"))));
    };
    return Err50x;
}(React.PureComponent));
module.exports = Err50x;


/***/ })

});