"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _handySvg = require("handy-svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var UserProfile = function UserProfile(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "user-information"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "user-information-text"
  }, props.username ? " ".concat(props.username, " ") : "User"), /*#__PURE__*/_react.default.createElement("div", {
    className: 'user_information_button'
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "59",
    height: "59",
    viewBox: "0 0 59 59",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "29.5",
    cy: "29.5",
    r: "29.5",
    fill: "#D9D9D9"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: 'user-information-bell'
  }, /*#__PURE__*/_react.default.createElement(_handySvg.HandySvg, {
    src: '/bell.svg',
    width: 32,
    height: 32
  })));
};
var _default = UserProfile;
exports.default = _default;