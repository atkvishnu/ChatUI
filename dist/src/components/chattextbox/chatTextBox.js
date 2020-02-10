"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Send = _interopRequireDefault(require("@material-ui/icons/Send"));

var _index = _interopRequireDefault(require("./index"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChatTextBoxComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChatTextBoxComponent, _React$Component);

  function ChatTextBoxComponent() {
    var _this;

    _classCallCheck(this, ChatTextBoxComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChatTextBoxComponent).call(this));

    _defineProperty(_assertThisInitialized(_this), "userTyping", function (e) {
      e.keyCode === 13 ? _this.submitMessage() : _this.setState({
        chatText: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "messageValid", function (txt) {
      return txt && txt.replace(/\s/g, '').length;
    });

    _defineProperty(_assertThisInitialized(_this), "userClickedInput", function () {
      return _this.props.messageReadFn();
    });

    _defineProperty(_assertThisInitialized(_this), "submitMessage", function () {
      if (_this.messageValid(_this.state.chatText)) {
        _this.props.submitMessageFn(_this.state.chatText);

        document.getElementById('chattextbox').value = '';
      }
    });

    _this.state = {
      chatText: ''
    };
    return _this;
  }

  _createClass(ChatTextBoxComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: classes.chatTextBoxContainer
      }, _react.default.createElement(_TextField.default, {
        placeholder: "Type your message...",
        onKeyUp: function onKeyUp(e) {
          return _this2.userTyping(e);
        },
        id: "chattextbox",
        className: classes.chatTextBox,
        onFocus: this.userClickedInput
      }), _react.default.createElement(_Send.default, {
        onClick: this.submitMessage,
        className: classes.sendBtn
      }));
    }
  }]);

  return ChatTextBoxComponent;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(_index.default)(ChatTextBoxComponent);

exports.default = _default;

//# sourceMappingURL=chatTextBox.js.map