webpackHotUpdate("static\\development\\pages\\terms.js",{

/***/ "./src/components/Months/Months.js":
/*!*****************************************!*\
  !*** ./src/components/Months/Months.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomBodyOfMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CustomBodyOfMonth */ "./src/components/CustomBodyOfMonth/index.js");

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\arto_WWW\\www.arto.boo.pl\\src\\components\\Months\\Months.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Months = function Months(props) {
  var classes = props.classes,
      table = props.table;

  var getMonthsDays = function getMonthsDays(days) {
    return days.map(function (day) {
      return __jsx(_CustomBodyOfMonth__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: day.day
      }, day, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    });
  };

  var getMonths = function getMonths(months) {
    return months.map(function (month) {
      return __jsx("li", {
        key: month.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        id: month.id,
        name: month.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("div", {
        className: classes.monthName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, month.name), getMonthsDays(month.days)));
    });
  };

  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, getMonths(table));
};

Months.defaultProps = {};
Months.displayName = 'Months';
/* harmony default export */ __webpack_exports__["default"] = (Months);

/***/ })

})
//# sourceMappingURL=terms.js.0968d4d3d1f03c54ad98.hot-update.js.map