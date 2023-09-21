"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Slider = require("./Slider");
var _TicketsInformation = require("./TicketsInformation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Ticket = function Ticket(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'tickets-buy-block'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'tickets-buy-button'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'city-club-year-info'
  }, /*#__PURE__*/_react.default.createElement("div", null, new Date().getFullYear()), /*#__PURE__*/_react.default.createElement("div", null, props.currentCity)), /*#__PURE__*/_react.default.createElement("button", null, "Buy")));
};
var _default = Ticket;
exports.default = _default;