"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firebase = require("firebase");

var NewChatComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NewChatComponent, _React$Component);

  function NewChatComponent() {
    var _this;

    _classCallCheck(this, NewChatComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewChatComponent).call(this));

    _defineProperty(_assertThisInitialized(_this), "userTyping", function (type, e) {
      switch (type) {
        case 'username':
          _this.setState({
            username: e.target.value
          });

          break;

        case 'message':
          _this.setState({
            message: e.target.value
          });

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "submitNewChat",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(e) {
        var userExists, chatExists;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return _this.userExists();

              case 3:
                userExists = _context.sent;

                if (!userExists) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return _this.chatExists();

              case 7:
                chatExists = _context.sent;
                chatExists ? _this.goToChat() : _this.createChat();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "createChat", function () {
      _this.props.newChatSubmitFn({
        sendTo: _this.state.username,
        message: _this.state.message
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToChat", function () {
      return _this.props.goToChatFn(_this.buildDocKey(), _this.state.message);
    });

    _defineProperty(_assertThisInitialized(_this), "buildDocKey", function () {
      return [firebase.auth().currentUser.email, _this.state.username].sort().join(':');
    });

    _defineProperty(_assertThisInitialized(_this), "chatExists",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var docKey, chat;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              docKey = _this.buildDocKey();
              _context2.next = 3;
              return firebase.firestore().collection('chats').doc(docKey).get();

            case 3:
              chat = _context2.sent;
              console.log(chat.exists);
              return _context2.abrupt("return", chat.exists);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "userExists",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var usersSnapshot, exists;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return firebase.firestore().collection('users').get();

            case 2:
              usersSnapshot = _context3.sent;
              exists = usersSnapshot.docs.map(function (_doc) {
                return _doc.data().email;
              }).includes(_this.state.username);
              return _context3.abrupt("return", exists);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    _this.state = {
      username: null,
      message: null
    };
    return _this;
  }

  _createClass(NewChatComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return _react.default.createElement("main", {
        className: classes.main
      }, _react.default.createElement(_core.CssBaseline, null), _react.default.createElement(_core.Paper, {
        className: classes.paper
      }, _react.default.createElement(_core.Typography, {
        component: "h1",
        variant: "h5"
      }, "Send A Message!"), _react.default.createElement("form", {
        className: classes.form,
        onSubmit: function onSubmit(e) {
          return _this2.submitNewChat(e);
        }
      }, _react.default.createElement(_core.FormControl, {
        fullWidth: true
      }, _react.default.createElement(_core.InputLabel, {
        htmlFor: "new-chat-username"
      }, "Enter your Friend's Email"), _react.default.createElement(_core.Input, {
        required: true,
        className: classes.input,
        autoFocus: true,
        onChange: function onChange(e) {
          return _this2.userTyping('username', e);
        },
        id: "new-chat-username"
      })), _react.default.createElement(_core.FormControl, {
        fullWidth: true
      }, _react.default.createElement(_core.InputLabel, {
        htmlFor: "new-chat-message"
      }, "Enter your Message"), _react.default.createElement(_core.Input, {
        required: true,
        className: classes.input,
        onChange: function onChange(e) {
          return _this2.userTyping('message', e);
        },
        id: "new-chat-message"
      })), _react.default.createElement(_core.Button, {
        fullWidth: true,
        className: classes.submit,
        variant: "contained",
        color: "primary",
        type: "submit"
      }))));
    }
  }]);

  return NewChatComponent;
}(_react.default.Component);

var _default = (0, _core.withStyles)(_index.default)(NewChatComponent);

exports.default = _default;

//# sourceMappingURL=newChat.js.map