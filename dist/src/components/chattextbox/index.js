"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var styles = function styles(theme) {
  return {
    sendBtn: {
      color: 'blue',
      cursor: 'pointer',
      '&:hover': {
        color: 'gray'
      }
    },
    chatTextBoxContainer: {
      position: 'absolute',
      bottom: '15px',
      left: '315px',
      boxSizing: 'border-box',
      overflow: 'auto',
      width: 'calc(100% - 300px - 50px)'
    },
    chatTextBox: {
      width: 'calc(100% - 25px)'
    }
  };
};

var _default = styles;
exports.default = _default;

//# sourceMappingURL=index.js.map