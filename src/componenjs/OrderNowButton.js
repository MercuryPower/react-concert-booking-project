"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _handySvg = require("handy-svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var OrderNowButton = function OrderNowButton() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "order-now-ticket-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'order-now-ticket-button'
  }, /*#__PURE__*/_react.default.createElement(_handySvg.HandySvg, {
    src: '/ticketsNow.svg',
    width: 59,
    height: 59
  })), /*#__PURE__*/_react.default.createElement("h4", {
    style: {
      cursor: "pointer"
    }
  }, "Order Now"));
};
var _default = OrderNowButton;
exports.default = _default;