"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _index2 = _interopRequireDefault(require("./index"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _NotificationImportant = _interopRequireDefault(require("@material-ui/icons/NotificationImportant"));

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

var ChatListComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChatListComponent, _React$Component);

  function ChatListComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChatListComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChatListComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "userIsSender", function (chat) {
      return chat.messages[chat.messages.length - 1].sender === _this.props.userEmail;
    });

    _defineProperty(_assertThisInitialized(_this), "newChat", function () {
      _this.props.newChatBtnFn();
    });

    _defineProperty(_assertThisInitialized(_this), "selectChat", function (index) {
      _this.props.selectChatFn(index);
    });

    return _this;
  }

  _createClass(ChatListComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      if (this.props.chats.length > 0) {
        return _react.default.createElement("div", {
          className: classes.root
        }, _react.default.createElement(_Button.default, {
          variant: "contained",
          fullWidth: true,
          color: "primary",
          onClick: this.newChat,
          className: classes.newChatBtn
        }, "New Message"), _react.default.createElement(_List.default, null, this.props.chats.map(function (_chat, _index) {
          return _react.default.createElement("div", {
            key: _index
          }, _react.default.createElement(_ListItem.default, {
            onClick: function onClick() {
              return _this2.selectChat(_index);
            },
            className: classes.listItem,
            selected: _this2.props.selectedChatIndex === _index,
            alignItems: "flex-start"
          }, _react.default.createElement(_ListItemAvatar.default, null, _react.default.createElement(_Avatar.default, {
            alt: "Remy Sharp"
          }, _chat.users.filter(function (_user) {
            return _user !== _this2.props.userEmail;
          })[0].split("")[0])), _react.default.createElement(_ListItemText.default, {
            primary: _chat.users.filter(function (_user) {
              return _user !== _this2.props.userEmail;
            })[0],
            secondary: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Typography.default, {
              component: "span",
              color: "textPrimary"
            }, _chat.messages[_chat.messages.length - 1].message.substring(0, 30) + " ..."))
          }), _chat.receiverHasRead === false && !_this2.userIsSender(_chat) ? _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_NotificationImportant.default, {
            className: classes.unreadMessage
          })) : null), _react.default.createElement(_Divider.default, null));
        })));
      } else {
        return _react.default.createElement("div", {
          className: classes.root
        }, _react.default.createElement(_Button.default, {
          variant: "contained",
          fullWidth: true,
          color: "primary",
          onClick: this.newChat,
          className: classes.newChatBtn
        }, "New Message"), _react.default.createElement(_List.default, null));
      }
    }
  }]);

  return ChatListComponent;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(_index2.default)(ChatListComponent);

exports.default = _default;

//# sourceMappingURL=chatList.js.map