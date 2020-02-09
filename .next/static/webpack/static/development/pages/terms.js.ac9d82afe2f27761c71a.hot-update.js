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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

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
          lineNumber: 10
        },
        __self: this
      }));
    });
  };

  var getMonths = function getMonths(months) {
    return months.map(function (month) {
      return __jsx("li", {
        key: month.id,
        className: classes.monthContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        className: classes.monthName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, month.name), getMonthsDays(month.days));
    });
  };

  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, getMonths(table));
};

Months.defaultProps = {};
Months.displayName = 'Months';
/* harmony default export */ __webpack_exports__["default"] = (Months);

/***/ }),

/***/ "./src/components/Months/Months.style.js":
/*!***********************************************!*\
  !*** ./src/components/Months/Months.style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Months__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Months */ "./src/components/Months/Months.js");


var styles = {
  // '&:li': {
  //   textDecoration: 'none',
  monthName: {
    color: 'red',
    fontSize: '2rem'
  },
  monthContainer: {
    color: 'red',
    fontSize: '2rem'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_Months__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

})
//# sourceMappingURL=terms.js.ac9d82afe2f27761c71a.hot-update.js.map