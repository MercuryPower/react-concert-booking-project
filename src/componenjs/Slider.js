"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _arrow = require("../assets/arrow1.svg");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Slider = function Slider(_ref) {
  var concertImages = _ref.concertImages,
    concertPerformers = _ref.concertPerformers,
    concertNames = _ref.concertNames,
    city = _ref.city,
    concertDates = _ref.concertDates;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(concertNames[0]),
    _useState4 = _slicedToArray(_useState3, 2),
    currentName = _useState4[0],
    setCurrentName = _useState4[1];
  return /*#__PURE__*/_react.default.createElement("section", {
    className: 'slider-section'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'section-container'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'concert-info'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'concert-performer-block'
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: 'concert-performer concert-double-name'
  }, concertPerformers), /*#__PURE__*/_react.default.createElement("h1", {
    className: 'concert-performer'
  }, concertPerformers)), /*#__PURE__*/_react.default.createElement("div", {
    className: 'concert-name-block'
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: 'concert-name concert-double-name2'
  }, concertNames), /*#__PURE__*/_react.default.createElement("h1", {
    className: 'concert-name'
  }, concertNames))), /*#__PURE__*/_react.default.createElement("div", {
    className: 'city-info'
  }, /*#__PURE__*/_react.default.createElement("h2", null, city)), /*#__PURE__*/_react.default.createElement("div", {
    className: 'date-info'
  }, /*#__PURE__*/_react.default.createElement("h3", null, concertDates)), /*#__PURE__*/_react.default.createElement("div", {
    className: 'buy-ticket-slider-block'
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: 'buy-ticket-slider-button'
  }, "BUY TICKETS")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_arrow.ReactComponent, {
    className: 'slider-arrow-prev',
    width: 50,
    height: 50
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_arrow.ReactComponent, {
    className: 'slider-arrow-next',
    width: 50,
    height: 50
  }))));
};
var _default = Slider;
exports.default = _default;