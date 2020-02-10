"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouterDom = require("react-router-dom");

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _CssBaseline = _interopRequireDefault(require("@material-ui/core/CssBaseline"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

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

var firebase = require("firebase");

var LoginComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginComponent, _React$Component);

  function LoginComponent() {
    var _this;

    _classCallCheck(this, LoginComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginComponent).call(this));

    _defineProperty(_assertThisInitialized(_this), "userTyping", function (type, e) {
      switch (type) {
        case 'email':
          _this.setState({
            email: e.target.value
          });

          break;

        case 'password':
          _this.setState({
            password: e.target.value
          });

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "submitLogin", function (e) {
      e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(_this.state.email, _this.state.password).then(function () {
        _this.props.history.push('/dashboard');
      }, function (err) {
        _this.setState({
          serverError: true
        });

        console.log('Error logging in: ', err);
      });
    });

    _this.state = {
      email: null,
      password: null,
      serverError: ''
    };
    return _this;
  }

  _createClass(LoginComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return _react.default.createElement("main", {
        className: classes.main
      }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_Paper.default, {
        className: classes.paper
      }, _react.default.createElement(_Typography.default, {
        component: "h1",
        variant: "h5"
      }, "Log In!"), _react.default.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.submitLogin(e);
        },
        className: classes.form
      }, _react.default.createElement(_FormControl.default, {
        required: true,
        fullWidth: true,
        margin: "normal"
      }, _react.default.createElement(_InputLabel.default, {
        htmlFor: "login-email-input"
      }, "Enter Your Email"), _react.default.createElement(_Input.default, {
        autoComplete: "email",
        autoFocus: true,
        id: "login-email-input",
        onChange: function onChange(e) {
          return _this2.userTyping('email', e);
        }
      })), _react.default.createElement(_FormControl.default, {
        required: true,
        fullWidth: true,
        margin: "normal"
      }, _react.default.createElement(_InputLabel.default, {
        htmlFor: "login-password-input"
      }, "Enter Your Password"), _react.default.createElement(_Input.default, {
        type: "password",
        autoComplete: "password",
        id: "login-password-input",
        onChange: function onChange(e) {
          return _this2.userTyping('password', e);
        }
      })), _react.default.createElement(_Button.default, {
        type: "submit",
        fullWidth: true,
        variant: "contained",
        color: "primary",
        className: classes.submit
      }, "LOG IN")), this.state.serverError ? _react.default.createElement(_Typography.default, {
        className: classes.errorText,
        component: "h5",
        variant: "h6"
      }, "Incorrect Login Information") : null, _react.default.createElement("h5", {
        className: classes.noAccountHeader
      }, "Don't Have An Account?"), _react.default.createElement(_reactRouterDom.Link, {
        className: classes.signUpLink,
        to: "/signup"
      }, "Sign Up!"))) // </div>
      ;
    }
  }]);

  return LoginComponent;
}(_react.default.Component);

var _default = (0, _withStyles.default)(_styles.default)(LoginComponent);

exports.default = _default;

//# sourceMappingURL=login.js.map