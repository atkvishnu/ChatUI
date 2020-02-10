"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _chatList = _interopRequireDefault(require("../chatlist/chatList"));

var _core = require("@material-ui/core");

var _styles = _interopRequireDefault(require("./styles"));

var _chatview = _interopRequireDefault(require("../chatview/chatview"));

var _chatTextBox = _interopRequireDefault(require("../chattextbox/chatTextBox"));

var _newChat = _interopRequireDefault(require("../newchat/newChat"));

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

var DashboardComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashboardComponent, _React$Component);

  function DashboardComponent() {
    var _this;

    _classCallCheck(this, DashboardComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashboardComponent).call(this));

    _defineProperty(_assertThisInitialized(_this), "signOut", function () {
      return firebase.auth().signOut();
    });

    _defineProperty(_assertThisInitialized(_this), "selectChat",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(chatIndex) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.setState({
                  selectedChat: chatIndex,
                  newChatFormVisible: false
                });

              case 2:
                _this.messageRead();

              case 3:
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

    _defineProperty(_assertThisInitialized(_this), "submitMessage", function (msg) {
      var docKey = _this.buildDocKey(_this.state.chats[_this.state.selectedChat].users.filter(function (_usr) {
        return _usr !== _this.state.email;
      })[0]);

      firebase.firestore().collection('chats').doc(docKey).update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: _this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        receiverHasRead: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "buildDocKey", function (friend) {
      return [_this.state.email, friend].sort().join(":");
    });

    _defineProperty(_assertThisInitialized(_this), "newChatBtnClicked", function () {
      return _this.setState({
        newChatFormVisible: true,
        selectedChat: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "messageRead", function () {
      var docKey = _this.buildDocKey(_this.state.chats[_this.state.selectedChat].users.filter(function (_usr) {
        return _usr !== _this.state.email;
      })[0]);

      if (_this.clickedChatWhereNotSender(_this.state.selectedChat)) {
        firebase.firestore().collection('chats').doc(docKey).update({
          receiverHasRead: true
        });
      } else {
        console.log('Clicked message were the user was the sender!');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "goToChat",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(docKey, msg) {
        var usersInChat, chat;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                usersInChat = docKey.split(':');
                chat = _this.state.chats.find(function (_chat) {
                  return usersInChat.every(function (_user) {
                    return _chat.users.includes(_user);
                  });
                });

                _this.setState({
                  newChatFormVisible: false
                });

                _context2.next = 5;
                return _this.selectChat(_this.state.chats.indexOf(chat));

              case 5:
                _this.submitMessage(msg);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "newChatSubmit",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(chatObj) {
        var docKey;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                docKey = _this.buildDocKey(chatObj.sendTo);
                _context3.next = 3;
                return firebase.firestore().collection('chats').doc(docKey).set({
                  receiverHasRead: false,
                  users: [_this.state.email, chatObj.sendTo],
                  messages: [{
                    message: chatObj.message,
                    sender: _this.state.email
                  }]
                });

              case 3:
                _this.setState({
                  newChatFormVisible: false
                });

                _this.selectChat(_this.state.chats.length - 1);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "clickedChatWhereNotSender", function (chatIndex) {
      return _this.state.chats[chatIndex].messages[_this.state.chats[chatIndex].messages.length - 1] !== _this.state.email;
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      firebase.auth().onAuthStateChanged(
      /*#__PURE__*/
      function () {
        var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(_usr) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (_usr) {
                    _context5.next = 4;
                    break;
                  }

                  _this.props.history.push('/login');

                  _context5.next = 6;
                  break;

                case 4:
                  _context5.next = 6;
                  return firebase.firestore().collection('chats').where('users', 'array-contains', _usr.email).onSnapshot(
                  /*#__PURE__*/
                  function () {
                    var _ref5 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee4(res) {
                      var chats;
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              chats = res.docs.map(function (_doc) {
                                return _doc.data();
                              });
                              _context4.next = 3;
                              return _this.setState({
                                email: _usr.email,
                                chats: chats
                              });

                            case 3:
                              console.log(_this.state);

                            case 4:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));

                    return function (_x6) {
                      return _ref5.apply(this, arguments);
                    };
                  }());

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref4.apply(this, arguments);
        };
      }());
    });

    _this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    };
    return _this;
  }

  _createClass(DashboardComponent, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      if (this.state.email) {
        return _react.default.createElement("div", {
          className: "dashboard-container",
          id: "dashboard-container"
        }, _react.default.createElement(_chatList.default, {
          history: this.props.history,
          userEmail: this.state.email,
          selectChatFn: this.selectChat,
          chats: this.state.chats,
          selectedChatIndex: this.state.selectedChat,
          newChatBtnFn: this.newChatBtnClicked
        }), this.state.newChatFormVisible ? null : _react.default.createElement(_chatview.default, {
          user: this.state.email,
          chat: this.state.chats[this.state.selectedChat]
        }), this.state.selectedChat !== null && !this.state.newChatFormVisible ? _react.default.createElement(_chatTextBox.default, {
          userClickedInputFn: this.messageRead,
          submitMessageFn: this.submitMessage
        }) : null, this.state.newChatFormVisible ? _react.default.createElement(_newChat.default, {
          goToChatFn: this.goToChat,
          newChatSubmitFn: this.newChatSubmit
        }) : null, _react.default.createElement(_core.Button, {
          onClick: this.signOut,
          className: classes.signOutBtn
        }, "Sign Out"));
      } else {
        return _react.default.createElement("div", null, "LOADING....");
      }
    }
  }]);

  return DashboardComponent;
}(_react.default.Component);

var _default = (0, _core.withStyles)(_styles.default)(DashboardComponent);

exports.default = _default;

//# sourceMappingURL=dashboard.js.map