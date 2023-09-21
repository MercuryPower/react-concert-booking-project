"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _arrow = require("../assets/arrow1.svg");
var _Ticket = _interopRequireDefault(require("./Ticket"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TicketsInformation = function TicketsInformation(_ref) {
  var concertPerformers = _ref.concertPerformers,
    currentCity = _ref.currentCity,
    concertPlace = _ref.concertPlace;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: 'tickets-place-block'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'choose-performer-button'
  }, /*#__PURE__*/_react.default.createElement("h1", null, concertPerformers), /*#__PURE__*/_react.default.createElement(_arrow.ReactComponent, {
    className: '',
    width: 70,
    height: 70
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: 'tickets-title-block'
  }, /*#__PURE__*/_react.default.createElement("h2", null, "\u0411\u0438\u043B\u0435\u0442\u044B")), /*#__PURE__*/_react.default.createElement(_Ticket.default, {
    currentCity: currentCity,
    concertPerformers: concertPerformers,
    concertPlace: concertPlace
  }));
};
var _default = TicketsInformation;
exports.default = _default;