webpackHotUpdate("static\\development\\pages\\blablaterms.js",{

/***/ "./src/views/Terms/TabPanel/TabPanel.js":
/*!**********************************************!*\
  !*** ./src/views/Terms/TabPanel/TabPanel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\views\\Terms\\TabPanel\\TabPanel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var TabPanel = function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      classes = props.classes,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "value", "index", "classes"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), value === index && __jsx("div", {
    className: classes.tabContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children));
};

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};
TabPanel.displayName = 'TabPanel';
/* harmony default export */ __webpack_exports__["default"] = (TabPanel);

/***/ }),

/***/ "./src/views/Terms/TabPanel/TabPanel.style.js":
/*!****************************************************!*\
  !*** ./src/views/Terms/TabPanel/TabPanel.style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPanel */ "./src/views/Terms/TabPanel/TabPanel.js");



var styles = function styles(theme) {
  return {
    tabContainer: {
      paddingTop: '2rem'
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_TabPanel__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/views/Terms/TabPanel/index.js":
/*!*******************************************!*\
  !*** ./src/views/Terms/TabPanel/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabPanel_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabPanel.style */ "./src/views/Terms/TabPanel/TabPanel.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TabPanel_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/views/Terms/Terms.js":
/*!**********************************!*\
  !*** ./src/views/Terms/Terms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _termsJSON_terminy2020__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../termsJSON/terminy2020 */ "./src/termsJSON/terminy2020.json");
var _termsJSON_terminy2020__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../termsJSON/terminy2020 */ "./src/termsJSON/terminy2020.json", 1);
/* harmony import */ var _termsJSON_terminy2021__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../termsJSON/terminy2021 */ "./src/termsJSON/terminy2021.json");
var _termsJSON_terminy2021__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../termsJSON/terminy2021 */ "./src/termsJSON/terminy2021.json", 1);
/* harmony import */ var _components_Months__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/Months */ "./src/components/Months/index.js");
/* harmony import */ var _TabPanel_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./TabPanel/index */ "./src/views/Terms/TabPanel/index.js");








var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\views\\Terms\\Terms.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;











var YEAR_2020_TITLE_TEXT = "2020";
var YEAR_2021_TITLE_TEXT = "2021"; // function TabPanel(props) {
//   const {children, value, index,classes, ...other} = props;
//
//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <div className={classes.tabContainer}>{children}</div>}
//     </Typography>
//   );
// }
// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
}

var Terms =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Terms, _Component);

  function Terms() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Terms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Terms)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      value: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (event, newValue) {
      _this.setState({
        value: newValue
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Terms, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var value = this.state.value;
      return __jsx("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        position: "fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: value,
        onChange: this.handleChange,
        "aria-label": "simple tabs example",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        label: YEAR_2020_TITLE_TEXT
      }, a11yProps(0), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        label: YEAR_2021_TITLE_TEXT
      }, a11yProps(1), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })))), __jsx(_TabPanel_index__WEBPACK_IMPORTED_MODULE_18__["default"], {
        value: value,
        index: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(_components_Months__WEBPACK_IMPORTED_MODULE_17__["default"], {
        table: _termsJSON_terminy2020__WEBPACK_IMPORTED_MODULE_15__,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), __jsx(_TabPanel_index__WEBPACK_IMPORTED_MODULE_18__["default"], {
        value: value,
        index: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(_components_Months__WEBPACK_IMPORTED_MODULE_17__["default"], {
        table: _termsJSON_terminy2021__WEBPACK_IMPORTED_MODULE_16__,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })));
    }
  }]);

  return Terms;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

;
Terms.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
};
Terms.displayName = 'Terms';
/* harmony default export */ __webpack_exports__["default"] = (Terms);

/***/ })

})
//# sourceMappingURL=blablaterms.js.7d54d3babffb5ffe9aeb.hot-update.js.map