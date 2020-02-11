webpackHotUpdate("static\\development\\pages\\blablaterms.js",{

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
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "./node_modules/@material-ui/icons/CalendarToday.js");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_4__);

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
          lineNumber: 12
        },
        __self: this
      }));
    });
  };

  var getMonths = function getMonths(months) {
    return months.map(function (month) {
      return __jsx("li", {
        key: month.name,
        className: classes.dayContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        className: classes.monthName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_4___default.a, {
        classes: {
          root: classes.icon
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), month.name), getMonthsDays(month.days));
    });
  };

  return __jsx("ul", {
    className: classes.monthContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, getMonths(table), __jsx(Table, {
    className: classes.table,
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(TableHead, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(TableRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Dessert (100g serving)"), __jsx(TableCell, {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Calories"), __jsx(TableCell, {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Fat\xA0(g)"), __jsx(TableCell, {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Carbs\xA0(g)"), __jsx(TableCell, {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Protein\xA0(g)"))), __jsx(TableBody, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, rows.map(function (row) {
    return __jsx(TableRow, {
      key: row.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(TableCell, {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, row.name), __jsx(TableCell, {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, row.calories), __jsx(TableCell, {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, row.fat), __jsx(TableCell, {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, row.carbs), __jsx(TableCell, {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, row.protein));
  }))));
};

Months.defaultProps = {};
Months.displayName = 'Months';
/* harmony default export */ __webpack_exports__["default"] = (Months);

/***/ })

})
//# sourceMappingURL=blablaterms.js.e939f23d1084a8682bbe.hot-update.js.map