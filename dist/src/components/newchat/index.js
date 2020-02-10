"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    main: _defineProperty({
      width: 'auto',
      display: 'block',
      // Fix IE 11 issue.
      marginLeft: theme.spacing() * 3,
      marginRight: theme.spacing() * 3
    }, theme.breakpoints.up(400 + theme.spacing() * 3 * 2), {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    paper: {
      padding: "".concat(theme.spacing() * 2, "px ").concat(theme.spacing() * 3, "px ").concat(theme.spacing() * 3, "px"),
      position: 'absolute',
      width: '350px',
      top: '50px',
      left: 'calc(50% + 150px - 175px)'
    },
    input: {},
    form: {
      width: '100%',
      marginTop: theme.spacing()
    },
    submit: {
      marginTop: theme.spacing() * 3
    },
    errorText: {
      color: 'red',
      textAlign: 'center'
    }
  };
};

var _default = styles;
exports.default = _default;

//# sourceMappingURL=index.js.map