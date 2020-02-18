module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./pages/blablaterms.js":
/*!******************************!*\
  !*** ./pages/blablaterms.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_views_Terms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/views/Terms */ "./src/views/Terms/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_src_views_Terms__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/CustomBodyOfMonth/CustomBodyOfMonth.js":
/*!***************************************************************!*\
  !*** ./src/components/CustomBodyOfMonth/CustomBodyOfMonth.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_EventAvailable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/EventAvailable */ "@material-ui/icons/EventAvailable");
/* harmony import */ var _material_ui_icons_EventAvailable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EventAvailable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "@material-ui/icons/CalendarToday");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_EventBusy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/EventBusy */ "@material-ui/icons/EventBusy");
/* harmony import */ var _material_ui_icons_EventBusy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EventBusy__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\CustomBodyOfMonth\\CustomBodyOfMonth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const STATUS = {
  BUSY: "busy",
  EMPTY: "empty",
  RESERVATION: "reservation",
  HOLIDAY: "holiday",
  UNDEFINED: "undefined"
};
const empty = STATUS.EMPTY;
const busy = STATUS.BUSY;
const holiday = STATUS.HOLIDAY;

class CustomBodyOfMonth extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      showDetails: this.props.showDetails //Tutaj jest do poprawy architektura TODO

    });
  }

  render() {
    const {
      classes,
      place,
      status
    } = this.props;
    const classNameMain = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.main, {
      [classes.busy]: status === STATUS.BUSY,
      [classes.holiday]: status === STATUS.HOLIDAY,
      [classes.emptyContainer]: status === STATUS.EMPTY || STATUS.UNDEFINED
    });

    const getView = status => {
      switch (status) {
        case busy:
          return __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.info, classes.infoBusy),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          }, place);

        case empty:
          return __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.info, classes.infoEmpty),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, "BRAK");

        case holiday:
          return __jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.info, classes.infoHoliday),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, "Wakacje");
      }
    };

    const getIcon = status => {
      switch (status) {
        case STATUS.BUSY:
          return __jsx(_material_ui_icons_EventAvailable__WEBPACK_IMPORTED_MODULE_4___default.a, {
            classes: {
              root: classes.icon
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          });

        case STATUS.EMPTY:
          return __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_5___default.a, {
            classes: {
              root: classes.icon
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          });

        case STATUS.HOLIDAY:
          return __jsx(_material_ui_icons_EventBusy__WEBPACK_IMPORTED_MODULE_6___default.a, {
            classes: {
              root: classes.icon
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          });
      }
    };

    function toggleDetails(item) {
      alert(item);
      this.setState((state, props) => {
        return {
          showDetails: !state.showDetails
        };
      });
    }

    const getDetails = () => __jsx("div", {
      className: classes.rowInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, this.props.status === busy && __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, this.props.hotel && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "p",
      className: classes.details,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "hotel: "), this.props.hotel), this.props.information && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "p",
      className: classes.details,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "informacje dodatkowe: "), this.props.information)));

    return __jsx("div", {
      className: classNameMain // onClick={() => {
      //   toggleDetails(this.props.day)
      // }}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: classes.rowContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("div", {
      className: classes.detailsMainContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("div", {
      className: classes.termIconContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, getIcon(this.props.status), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "span",
      className: classes.day,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, this.props.day)), getDetails(), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "p",
      className: classes.details,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, this.props.description)), __jsx("div", {
      className: classes.statusContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, getView(this.props.status))), this.props.children);
  }

}

CustomBodyOfMonth.defaultProps = {
  description: '',
  hotel: '',
  place: '',
  information: ''
};
CustomBodyOfMonth.displayName = 'CustomBodyOfMonth';
/* harmony default export */ __webpack_exports__["default"] = (CustomBodyOfMonth);

/***/ }),

/***/ "./src/components/CustomBodyOfMonth/CustomBodyOfMonth.style.js":
/*!*********************************************************************!*\
  !*** ./src/components/CustomBodyOfMonth/CustomBodyOfMonth.style.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomBodyOfMonth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomBodyOfMonth */ "./src/components/CustomBodyOfMonth/CustomBodyOfMonth.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




const styles = theme => ({
  main: {
    fontSize: '1.2rem',
    padding: '0.35rem',
    border: 'solid #ddd 0.001rem'
  },
  number: {
    color: '#aeaeae',
    paddingRight: '0.5rem',
    fontSize: '1.5rem'
  },
  day: {// padding: '0 0.5rem',
  },
  busy: {
    backgroundColor: 'rgba(77,184,74,0.43)'
  },
  emptyContainer: {},
  holiday: {
    backgroundColor: '#5bc0de',
    color: 'white'
  },
  infoEmpty: {
    backgroundColor: '#ff747e'
  },
  info: {
    fontSize: '0.9rem',
    borderRadius: '0.5rem',
    padding: '0.1rem 0.4rem',
    // float: 'right',
    textAlign: 'right',
    [theme.breakpoints.up('sm')]: {
      marginRight: '1rem'
    }
  },
  infoBusy: {
    backgroundColor: '#55c7bd'
  },
  infoHoliday: {
    backgroundColor: 'white',
    color: 'black'
  },
  details: {
    fontSize: '0.7rem',
    margin: '0.2rem'
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailsMainContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  statusContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowInfo: {
    fontSize: '0.7rem'
  },
  icon: {
    fontSize: '1.2rem',
    marginRight: '0.2rem'
  },
  termIconContainer: {
    display: 'flex',
    alignItems: 'center'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_CustomBodyOfMonth__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/CustomBodyOfMonth/index.js":
/*!***************************************************!*\
  !*** ./src/components/CustomBodyOfMonth/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomBodyOfMonth_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomBodyOfMonth.style */ "./src/components/CustomBodyOfMonth/CustomBodyOfMonth.style.js");

/* harmony default export */ __webpack_exports__["default"] = (_CustomBodyOfMonth_style__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Months/Months.js":
/*!*****************************************!*\
  !*** ./src/components/Months/Months.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomBodyOfMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CustomBodyOfMonth */ "./src/components/CustomBodyOfMonth/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CalendarViewDay */ "@material-ui/icons/CalendarViewDay");
/* harmony import */ var _material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\Months\\Months.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Months = props => {
  const {
    classes,
    table
  } = props;

  const getMonthsDays = days => days.map(day => __jsx(_CustomBodyOfMonth__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: day.day
  }, day, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })));

  const getMonths = months => months.map(month => __jsx("li", {
    key: month.name,
    className: classes.dayContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    className: classes.monthName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_4___default.a, {
    classes: {
      root: classes.icon
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), month.name), getMonthsDays(month.days)));

  return __jsx("ul", {
    className: classes.monthContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Months__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Months */ "./src/components/Months/Months.js");


const styles = {
  monthName: {
    fontSize: '2rem',
    backgroundColor: '#c6c6c6'
  },
  monthContainer: {
    margin: 0,
    textDecoration: 'none',
    padding: 0
  },
  dayContainer: {
    marginTop: '1rem',
    listStyle: 'none'
  },
  icon: {
    margin: '0 1rem'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_Months__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/Months/index.js":
/*!****************************************!*\
  !*** ./src/components/Months/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Months_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Months.style */ "./src/components/Months/Months.style.js");

/* harmony default export */ __webpack_exports__["default"] = (_Months_style__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: SONGS_IMAGES, IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, LOGO, LOGO_ON_THE_FLOWERS, LOVERS, BRIDE, SMILE, MUSIC, INFO_ICON, LEAF, FACEBOOK_PAGE, LUBLIN_MAP, VIDEO_CARD_IMAGE, PHOTO_CARD_IMAGE, MAX_PAGE_WIDTH, LINKS, MENU_ITEMS, MENU_ITEM_WIDTH, COLORS, FACEBOOK, FACEBOOK_URL, RAFAL_CIESIELCZUK_LINKED_IN, MARGIN_TOP_UNDER_MENU, SCREEN_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SONGS_IMAGES", function() { return SONGS_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_1", function() { return IMAGE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_2", function() { return IMAGE_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_3", function() { return IMAGE_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_4", function() { return IMAGE_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO", function() { return LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGO_ON_THE_FLOWERS", function() { return LOGO_ON_THE_FLOWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOVERS", function() { return LOVERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRIDE", function() { return BRIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMILE", function() { return SMILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSIC", function() { return MUSIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_ICON", function() { return INFO_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAF", function() { return LEAF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACEBOOK_PAGE", function() { return FACEBOOK_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LUBLIN_MAP", function() { return LUBLIN_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_CARD_IMAGE", function() { return VIDEO_CARD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTO_CARD_IMAGE", function() { return PHOTO_CARD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_PAGE_WIDTH", function() { return MAX_PAGE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINKS", function() { return LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEM_WIDTH", function() { return MENU_ITEM_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACEBOOK", function() { return FACEBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACEBOOK_URL", function() { return FACEBOOK_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RAFAL_CIESIELCZUK_LINKED_IN", function() { return RAFAL_CIESIELCZUK_LINKED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARGIN_TOP_UNDER_MENU", function() { return MARGIN_TOP_UNDER_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_SIZE", function() { return SCREEN_SIZE; });
/* harmony import */ var _static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/image/photo_1.png */ "./static/image/photo_1.png");
/* harmony import */ var _static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/image/photo_2_small.jpg */ "./static/image/photo_2_small.jpg");
/* harmony import */ var _static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/image/photo_3_small.jpg */ "./static/image/photo_3_small.jpg");
/* harmony import */ var _static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/image/photo_4_small.jpg */ "./static/image/photo_4_small.jpg");
/* harmony import */ var _static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_image_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/image/logo.png */ "./static/image/logo.png");
/* harmony import */ var _static_image_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_image_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_image_LogoWKwiatach_342x300_nowe_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/image/LogoWKwiatach_342x300_nowe.png */ "./static/image/LogoWKwiatach_342x300_nowe.png");
/* harmony import */ var _static_image_LogoWKwiatach_342x300_nowe_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_image_LogoWKwiatach_342x300_nowe_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_image_lovers_small_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/image/lovers_small.png */ "./static/image/lovers_small.png");
/* harmony import */ var _static_image_lovers_small_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_image_lovers_small_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_image_icons_bride_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/image/icons/bride.svg */ "./static/image/icons/bride.svg");
/* harmony import */ var _static_image_icons_bride_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_bride_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_image_icons_smile_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/image/icons/smile.svg */ "./static/image/icons/smile.svg");
/* harmony import */ var _static_image_icons_smile_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_smile_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_image_icons_music_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/image/icons/music.svg */ "./static/image/icons/music.svg");
/* harmony import */ var _static_image_icons_music_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_music_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_image_icons_info_icon_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/image/icons/info_icon.svg */ "./static/image/icons/info_icon.svg");
/* harmony import */ var _static_image_icons_info_icon_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_info_icon_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_image_icons_leaf_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/image/icons/leaf.svg */ "./static/image/icons/leaf.svg");
/* harmony import */ var _static_image_icons_leaf_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_leaf_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_image_icons_facebookPage_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/image/icons/facebookPage.svg */ "./static/image/icons/facebookPage.svg");
/* harmony import */ var _static_image_icons_facebookPage_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_facebookPage_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_image_WojLubelskie_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/image/WojLubelskie.jpg */ "./static/image/WojLubelskie.jpg");
/* harmony import */ var _static_image_WojLubelskie_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_image_WojLubelskie_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_image_GalleryCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/image/GalleryCardPhoto.jpeg */ "./static/image/GalleryCardPhoto.jpeg");
/* harmony import */ var _static_image_GalleryCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_image_GalleryCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_image_videoCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../static/image/videoCardPhoto.jpeg */ "./static/image/videoCardPhoto.jpeg");
/* harmony import */ var _static_image_videoCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_image_videoCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/image/songsImages/poparzeniKawaTrzy.jpg */ "./static/image/songsImages/poparzeniKawaTrzy.jpg");
/* harmony import */ var _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../static/image/songsImages/marcus.jpg */ "./static/image/songsImages/marcus.jpg");
/* harmony import */ var _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/image/songsImages/powerPLay.jpg */ "./static/image/songsImages/powerPLay.jpg");
/* harmony import */ var _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/image/songsImages/urszula.jpg */ "./static/image/songsImages/urszula.jpg");
/* harmony import */ var _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../static/image/songsImages/dajToGlosniej.jpg */ "./static/image/songsImages/dajToGlosniej.jpg");
/* harmony import */ var _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/image/songsImages/fanatic.jpg */ "./static/image/songsImages/fanatic.jpg");
/* harmony import */ var _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/image/songsImages/defaultSongImage.jpg */ "./static/image/songsImages/defaultSongImage.jpg");
/* harmony import */ var _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/image/songsImages/lombard.jpg */ "./static/image/songsImages/lombard.jpg");
/* harmony import */ var _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../static/image/songsImages/czadoman.jpg */ "./static/image/songsImages/czadoman.jpg");
/* harmony import */ var _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../static/image/songsImages/buble.jpg */ "./static/image/songsImages/buble.jpg");
/* harmony import */ var _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_25__);















 //==============Songs images===============











const SONGS_IMAGES = {
  DefaultSongImage: _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_22___default.a,
  DAJ_TO_GLOSNIEJ: _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
  marcus: _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
  powerPLay: _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
  poparzeniKawaTrzy: _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
  urszula: _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
  Fanatic: _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
  lombard: _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
  czadoman: _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
  buble: _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_25___default.a
};
const IMAGE_1 = _static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0___default.a;
const IMAGE_2 = _static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1___default.a;
const IMAGE_3 = _static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2___default.a;
const IMAGE_4 = _static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3___default.a;
const LOGO = _static_image_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a;
const LOGO_ON_THE_FLOWERS = _static_image_LogoWKwiatach_342x300_nowe_png__WEBPACK_IMPORTED_MODULE_5___default.a;
const LOVERS = _static_image_lovers_small_png__WEBPACK_IMPORTED_MODULE_6___default.a;
const BRIDE = _static_image_icons_bride_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
const SMILE = _static_image_icons_smile_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
const MUSIC = _static_image_icons_music_svg__WEBPACK_IMPORTED_MODULE_9___default.a;
const INFO_ICON = _static_image_icons_info_icon_svg__WEBPACK_IMPORTED_MODULE_10___default.a;
const LEAF = _static_image_icons_leaf_svg__WEBPACK_IMPORTED_MODULE_11___default.a;
const FACEBOOK_PAGE = _static_image_icons_facebookPage_svg__WEBPACK_IMPORTED_MODULE_12___default.a;
const LUBLIN_MAP = _static_image_WojLubelskie_jpg__WEBPACK_IMPORTED_MODULE_13___default.a;
const VIDEO_CARD_IMAGE = _static_image_videoCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_15___default.a;
const PHOTO_CARD_IMAGE = _static_image_GalleryCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_14___default.a;
const MAX_PAGE_WIDTH = '80rem';
const HOME = 'Home';
const PHOTO = 'Zdjęcia';
const MEDIA = 'Media';
const DEMO = 'Demo';
const OFERTA = 'Oferta';
const KONTAKT = 'Kontakt';
const KALENDARZ = 'Kalendarz';
const LINKS = {
  HOME: {
    HREF: './',
    AS: './'
  },
  DEMO: {
    HREF: './demo',
    AS: './demo'
  },
  CONTACT: {
    HREF: './contact',
    AS: './contact'
  },
  MEDIA: {
    HREF: './media',
    AS: './media'
  },
  TERMS: {
    HREF: './terminy',
    AS: './terminy'
  }
};
const MENU_ITEMS = [{
  name: HOME,
  link: LINKS.HOME.HREF,
  as: LINKS.HOME.AS
}, {
  name: DEMO,
  link: LINKS.DEMO.HREF,
  as: LINKS.DEMO.AS
}, // {name: PHOTO, link: './photo'},
// {name: MEDIA, link: LINKS.MEDIA},
// {name: OFERTA, link: './oferta'},
// {name: KALENDARZ, link: './kalendarz'},
{
  name: KONTAKT,
  link: LINKS.CONTACT.HREF,
  as: LINKS.CONTACT.AS
}];
const MENU_ITEM_WIDTH = 20;
const COLORS = {
  grey: {
    light: '#F2F2F2',
    medium: '#F5F5F5',
    dark: '#CFCFCF',
    grey_1: '#91919117'
  },
  red: {
    main: '#b41616',
    medium: '#a81b1b'
  },
  blue: {
    main: '#3B5897'
  }
};
const FACEBOOK = '/static/image/facebook_logo.svg';
const FACEBOOK_URL = 'https://www.facebook.com/Zesp%C3%B3%C5%82-ARTO-203075696487749/';
const RAFAL_CIESIELCZUK_LINKED_IN = 'https://www.linkedin.com/in/rafa%C5%82-ciesielczuk-33578391/';
const MARGIN_TOP_UNDER_MENU = '4rem';
const SCREEN_SIZE = {
  POINT_750: 750
};

/***/ }),

/***/ "./src/termsJSON/terminy2020.json":
/*!****************************************!*\
  !*** ./src/termsJSON/terminy2020.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Styczeń\",\"days\":[{\"day\":\"04.01.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.01.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.01.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.01.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Luty\",\"days\":[{\"day\":\"01.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"08.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"15.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"22.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"29.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Marzec\",\"days\":[{\"day\":\"07.03.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"14.03.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"21.03.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"28.03.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Kwiecień\",\"days\":[{\"day\":\"04.04.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.04.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.04.2020\",\"free\":true,\"place\":\"Tyszowce\",\"hotel\":\"Orfeusz\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\"},{\"day\":\"25.04.2020\",\"free\":true,\"place\":\"Zamość\",\"hotel\":\"Hotel Koronny\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"Zamość\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"16.00\"}]},{\"name\":\"Maj\",\"days\":[{\"day\":\"01.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"02.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"03.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"09.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"16.05.2020\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"Gniecki\",\"address\":\"ul. kolejowa\",\"status\":\"busy\"},{\"day\":\"23.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"30.05.2020\",\"free\":false,\"place\":\"Krasnobród\",\"hotel\":\"Karczma Zacisze\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"}]},{\"name\":\"Czerwiec\",\"days\":[{\"day\":\"06.06.2020\",\"free\":false,\"place\":\"Bogucin\",\"hotel\":\"Dwór Bogucin\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"11.06.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.06.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.06.2020\",\"free\":false,\"place\":\"Rozłopy (kolo Szczebrzeszyna)\",\"hotel\":\"Kamienny Zajazd\",\"address\":\"ul. Rozłopy 20\",\"status\":\"busy\"},{\"day\":\"27.06.2020\",\"free\":false,\"place\":\"Chełm\",\"hotel\":\"Dom weselny JAMBA\",\"address\":\"\",\"status\":\"busy\"}]},{\"name\":\"Lipiec\",\"days\":[{\"day\":\"04.07.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.07.2020\",\"free\":false,\"place\":\"Tomaszow Lub.\",\"hotel\":\"Zacisze\",\"address\":\"\",\"status\":\"busy\"},{\"day\":\"18.07.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.07.2020\",\"free\":false,\"place\":\"Zamość\",\"hotel\":\"Koronny\",\"address\":\"\",\"status\":\"busy\"}]},{\"name\":\"Sierpien\",\"days\":[{\"day\":\"01.08.2020\",\"free\":false,\"place\":\"Różaniec Pierwszy\",\"hotel\":\"Zajazd \\\"Gospoda\\\" \",\"address\":\"Różaniec Pierwszy 99A\",\"status\":\"busy\"},{\"day\":\"08.08.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"15.08.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"22.08.2020\",\"free\":false,\"place\":\"Wojciechów\",\"hotel\":\"Dom weselny \\\"Czerniecówka\\\"\",\"address\":\"\",\"status\":\"busy\"},{\"day\":\"29.08.2020\",\"free\":true,\"place\":\"Boruń\",\"hotel\":\"Dom weselny \\\"Sylwia\\\"\",\"status\":\"busy\"}]},{\"name\":\"Wrzesień\",\"days\":[{\"day\":\"05.09.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.09.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.09.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.09.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Październik\",\"days\":[{\"day\":\"03.10.2020\",\"free\":false,\"place\":\"Wysokie\",\"hotel\":\"Zajazd \\\"Alfred\\\"\",\"address\":\"\",\"status\":\"busy\"},{\"day\":\"10.10.2020\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"U Chłopa\",\"address\":\"\",\"status\":\"busy\"},{\"day\":\"17.10.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"24.10.2020\",\"free\":false,\"place\":\"Tyszowce\",\"hotel\":\"Szewska Pasja (sala na dole)\",\"address\":\"\",\"status\":\"busy\"},{\"day\":\"31.10.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Listopad\",\"days\":[{\"day\":\"07.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"14.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"21.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"28.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"id\":5,\"day\":\"31.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Grudzień\",\"days\":[{\"day\":\"05.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]}]");

/***/ }),

/***/ "./src/termsJSON/terminy2021.json":
/*!****************************************!*\
  !*** ./src/termsJSON/terminy2021.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Styczeń\",\"days\":[{\"day\":\"02.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"09.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"16.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"23.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"30.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Luty\",\"days\":[{\"day\":\"06.02.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.02.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.02.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"27.02.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Marzec\",\"days\":[{\"day\":\"06.03.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.03.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.03.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"27.03.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Kwiecień\",\"days\":[{\"day\":\"03.04.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"03.04.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"17.04.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"24.04.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Maj\",\"days\":[{\"day\":\"01.05.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"08.05.2021\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"Gniecki\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"15.05.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"22.05.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"29.05.2021\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"Gniecki\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"}]},{\"name\":\"Czerwiec\",\"days\":[{\"day\":\"05.06.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.06.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.06.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.06.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Lipiec\",\"days\":[{\"day\":\"03.07.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"10.07.2021\",\"free\":false,\"place\":\"Pawłów\",\"hotel\":\"Regent\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"17.07.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"24.07.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"31.07.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Sierpien\",\"days\":[{\"day\":\"07.08.2021\",\"free\":false,\"place\":\"Mircze\",\"hotel\":\"Jaśko\",\"weekDay\":6,\"status\":\"busy\",\"information\":\"Nie będzie Rafała i Darii --> wesele Patrycji Sz.\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"14.08.2021\",\"free\":false,\"place\":\"ZOSTAWIć WOLNY KONIECZNIE\",\"hotel\":\"\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"21.08.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"28.08.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Wrzesień\",\"days\":[{\"day\":\"04.09.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.09.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.09.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.09.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Październik\",\"days\":[{\"day\":\"02.10.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"09.10.2021\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"Gniecki\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"16.10.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"23.10.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"30.10.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Listopad\",\"days\":[{\"day\":\"06.11.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.11.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.11.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"27.11.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Grudzień\",\"days\":[{\"day\":\"04.12.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.12.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.12.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.12.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]}]");

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\views\\Terms\\TabPanel\\TabPanel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const TabPanel = props => {
  const {
    children,
    value,
    index,
    classes
  } = props,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "value", "index", "classes"]);

  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), value === index && __jsx("div", {
    className: classes.tabContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPanel */ "./src/views/Terms/TabPanel/TabPanel.js");



const styles = theme => ({
  tabContainer: {
    paddingTop: '2rem'
  }
});

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _termsJSON_terminy2020__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../termsJSON/terminy2020 */ "./src/termsJSON/terminy2020.json");
var _termsJSON_terminy2020__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../termsJSON/terminy2020 */ "./src/termsJSON/terminy2020.json", 1);
/* harmony import */ var _termsJSON_terminy2021__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../termsJSON/terminy2021 */ "./src/termsJSON/terminy2021.json");
var _termsJSON_terminy2021__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../termsJSON/terminy2021 */ "./src/termsJSON/terminy2021.json", 1);
/* harmony import */ var _components_Months__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Months */ "./src/components/Months/index.js");
/* harmony import */ var _TabPanel_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TabPanel/index */ "./src/views/Terms/TabPanel/index.js");


var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\views\\Terms\\Terms.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









const YEAR_2020_TITLE_TEXT = "2020";
const YEAR_2021_TITLE_TEXT = "2021";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

class Terms extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {
      value: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "handleChange", (event, newValue) => {
      this.setState({
        value: newValue
      });
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      value
    } = this.state;
    return __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      position: "fixed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
      value: value,
      onChange: this.handleChange,
      "aria-label": "simple tabs example",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      label: YEAR_2020_TITLE_TEXT
    }, a11yProps(0), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      label: YEAR_2021_TITLE_TEXT
    }, a11yProps(1), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })))), __jsx(_TabPanel_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: value,
      index: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_components_Months__WEBPACK_IMPORTED_MODULE_9__["default"], {
      table: _termsJSON_terminy2020__WEBPACK_IMPORTED_MODULE_7__,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx(_TabPanel_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
      value: value,
      index: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_components_Months__WEBPACK_IMPORTED_MODULE_9__["default"], {
      table: _termsJSON_terminy2021__WEBPACK_IMPORTED_MODULE_8__,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })));
  }

}

;
Terms.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
Terms.displayName = 'Terms';
/* harmony default export */ __webpack_exports__["default"] = (Terms);

/***/ }),

/***/ "./src/views/Terms/Terms.style.js":
/*!****************************************!*\
  !*** ./src/views/Terms/Terms.style.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Terms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Terms */ "./src/views/Terms/Terms.js");



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0
  },
  tabContainer: {
    paddingTop: '2rem'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_Terms__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/views/Terms/index.js":
/*!**********************************!*\
  !*** ./src/views/Terms/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Terms_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Terms.style */ "./src/views/Terms/Terms.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Terms_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./static/image/GalleryCardPhoto.jpeg":
/*!********************************************!*\
  !*** ./static/image/GalleryCardPhoto.jpeg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/GalleryCardPhoto.jpeg";

/***/ }),

/***/ "./static/image/LogoWKwiatach_342x300_nowe.png":
/*!*****************************************************!*\
  !*** ./static/image/LogoWKwiatach_342x300_nowe.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/LogoWKwiatach_342x300_nowe.png";

/***/ }),

/***/ "./static/image/WojLubelskie.jpg":
/*!***************************************!*\
  !*** ./static/image/WojLubelskie.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/WojLubelskie.jpg";

/***/ }),

/***/ "./static/image/icons/bride.svg":
/*!**************************************!*\
  !*** ./static/image/icons/bride.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/bride.svg";

/***/ }),

/***/ "./static/image/icons/facebookPage.svg":
/*!*********************************************!*\
  !*** ./static/image/icons/facebookPage.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/facebookPage.svg";

/***/ }),

/***/ "./static/image/icons/info_icon.svg":
/*!******************************************!*\
  !*** ./static/image/icons/info_icon.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/info_icon.svg";

/***/ }),

/***/ "./static/image/icons/leaf.svg":
/*!*************************************!*\
  !*** ./static/image/icons/leaf.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/leaf.svg";

/***/ }),

/***/ "./static/image/icons/music.svg":
/*!**************************************!*\
  !*** ./static/image/icons/music.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/music.svg";

/***/ }),

/***/ "./static/image/icons/smile.svg":
/*!**************************************!*\
  !*** ./static/image/icons/smile.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/smile.svg";

/***/ }),

/***/ "./static/image/logo.png":
/*!*******************************!*\
  !*** ./static/image/logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/logo.png";

/***/ }),

/***/ "./static/image/lovers_small.png":
/*!***************************************!*\
  !*** ./static/image/lovers_small.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/lovers_small.png";

/***/ }),

/***/ "./static/image/photo_1.png":
/*!**********************************!*\
  !*** ./static/image/photo_1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_1.png";

/***/ }),

/***/ "./static/image/photo_2_small.jpg":
/*!****************************************!*\
  !*** ./static/image/photo_2_small.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_2_small.jpg";

/***/ }),

/***/ "./static/image/photo_3_small.jpg":
/*!****************************************!*\
  !*** ./static/image/photo_3_small.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_3_small.jpg";

/***/ }),

/***/ "./static/image/photo_4_small.jpg":
/*!****************************************!*\
  !*** ./static/image/photo_4_small.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_4_small.jpg";

/***/ }),

/***/ "./static/image/songsImages/buble.jpg":
/*!********************************************!*\
  !*** ./static/image/songsImages/buble.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/buble.jpg";

/***/ }),

/***/ "./static/image/songsImages/czadoman.jpg":
/*!***********************************************!*\
  !*** ./static/image/songsImages/czadoman.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/czadoman.jpg";

/***/ }),

/***/ "./static/image/songsImages/dajToGlosniej.jpg":
/*!****************************************************!*\
  !*** ./static/image/songsImages/dajToGlosniej.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/dajToGlosniej.jpg";

/***/ }),

/***/ "./static/image/songsImages/defaultSongImage.jpg":
/*!*******************************************************!*\
  !*** ./static/image/songsImages/defaultSongImage.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/defaultSongImage.jpg";

/***/ }),

/***/ "./static/image/songsImages/fanatic.jpg":
/*!**********************************************!*\
  !*** ./static/image/songsImages/fanatic.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/fanatic.jpg";

/***/ }),

/***/ "./static/image/songsImages/lombard.jpg":
/*!**********************************************!*\
  !*** ./static/image/songsImages/lombard.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/lombard.jpg";

/***/ }),

/***/ "./static/image/songsImages/marcus.jpg":
/*!*********************************************!*\
  !*** ./static/image/songsImages/marcus.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/marcus.jpg";

/***/ }),

/***/ "./static/image/songsImages/poparzeniKawaTrzy.jpg":
/*!********************************************************!*\
  !*** ./static/image/songsImages/poparzeniKawaTrzy.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/poparzeniKawaTrzy.jpg";

/***/ }),

/***/ "./static/image/songsImages/powerPLay.jpg":
/*!************************************************!*\
  !*** ./static/image/songsImages/powerPLay.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/powerPLay.jpg";

/***/ }),

/***/ "./static/image/songsImages/urszula.jpg":
/*!**********************************************!*\
  !*** ./static/image/songsImages/urszula.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/urszula.jpg";

/***/ }),

/***/ "./static/image/videoCardPhoto.jpeg":
/*!******************************************!*\
  !*** ./static/image/videoCardPhoto.jpeg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/videoCardPhoto.jpeg";

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/blablaterms.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\IT_projects_Edu-Lab\www.zespolarto.pl\pages\blablaterms.js */"./pages/blablaterms.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/CalendarToday":
/*!***************************************************!*\
  !*** external "@material-ui/icons/CalendarToday" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CalendarToday");

/***/ }),

/***/ "@material-ui/icons/CalendarViewDay":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/CalendarViewDay" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CalendarViewDay");

/***/ }),

/***/ "@material-ui/icons/EventAvailable":
/*!****************************************************!*\
  !*** external "@material-ui/icons/EventAvailable" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EventAvailable");

/***/ }),

/***/ "@material-ui/icons/EventBusy":
/*!***********************************************!*\
  !*** external "@material-ui/icons/EventBusy" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EventBusy");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=blablaterms.js.map