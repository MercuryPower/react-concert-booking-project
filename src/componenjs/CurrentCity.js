"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CurrentCity = function CurrentCity(_ref) {
  var city = _ref.city;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'current-city'
  }, city);
};
var _default = CurrentCity;
exports.default = _default;