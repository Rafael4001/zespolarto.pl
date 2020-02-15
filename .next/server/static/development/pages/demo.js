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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextType = _router.RouterContext;
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/demo.js":
/*!***********************!*\
  !*** ./pages/demo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_views_Demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/views/Demo */ "./src/views/Demo/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_src_views_Demo__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Phone */ "@material-ui/icons/Phone");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MailOutline */ "@material-ui/icons/MailOutline");
/* harmony import */ var _material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "@material-ui/icons/Facebook");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      classes
    } = this.props;
    return __jsx("div", {
      className: classes.footerContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: classes.mainContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: classes.logoContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: _constants__WEBPACK_IMPORTED_MODULE_8__["LINKS"].HOME,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: _constants__WEBPACK_IMPORTED_MODULE_8__["LOGO_ON_THE_FLOWERS"],
      alt: 'logo zespolu Arto',
      className: classes.iconArto,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })))), __jsx("div", {
      className: classes.contactContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: _constants__WEBPACK_IMPORTED_MODULE_8__["LINKS"].CONTACT,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      className: classes.contactTextContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("img", {
      src: _constants__WEBPACK_IMPORTED_MODULE_8__["INFO_ICON"],
      alt: 'Bride',
      className: classes.info_icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "KONTAKT")))), __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.phoneContainer, classes.marginBottomContainer),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.phoneText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "e-mail"), __jsx(_material_ui_icons_MailOutline__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.PhoneIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("a", {
      className: classes.phoneText,
      href: "mailto:zespolarto@gmail.com?subject = Feedback&body = Message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "zespolarto@gmail.com")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.phoneContainer, classes.marginBottomContainer),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.phoneText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Rafa\u0142"), __jsx(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.PhoneIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx("a", {
      className: classes.phoneText,
      href: "tel:+48661204475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "661 204 475")), __jsx("div", {
      className: classes.phoneContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.phoneText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Adrian"), __jsx(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: classes.PhoneIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx("a", {
      className: classes.phoneText,
      href: "tel:+48796642598",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "796 642 598"))), __jsx("div", {
      className: classes.socialMediaContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      href: _constants__WEBPACK_IMPORTED_MODULE_8__["FACEBOOK_URL"],
      target: '_blank',
      className: classes.socialLink,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.facebookIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })))), __jsx("a", {
      className: classes.rightsContainer,
      href: _constants__WEBPACK_IMPORTED_MODULE_8__["RAFAL_CIESIELCZUK_LINKED_IN"],
      target: '_blank',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "R.C. \xA9 2020 All rights reserved"), __jsx("div", {
      className: classes.iconMessageContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: classes.iconMessage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Icons made by ", __jsx("a", {
      href: "https://www.flaticon.com/authors/freepik",
      title: "Freepik",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Freepik"), " from ", __jsx("a", {
      href: "https://www.flaticon.com/",
      title: "Flaticon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "www.flaticon.com"))));
  }

}

Footer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
Footer.defaultProps = {};
Footer.displayName = 'ContactContainer';
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/Footer.style.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/Footer.style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




const styles = theme => ({
  footerContainer: {
    backgroundColor: `${_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].red.medium}`,
    padding: '1rem 1rem 0.2rem 1rem ',
    [theme.breakpoints.up('md')]: {
      padding: '0.4rem'
    }
  },
  mainContainer: {
    '& a': {
      textDecoration: 'none',
      color: `#FFF`
    },
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1rem',
    [theme.breakpoints.down(_constants__WEBPACK_IMPORTED_MODULE_2__["SCREEN_SIZE"].POINT_750)]: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '1rem',
      justifyItems: 'center'
    }
  },
  socialMediaContainer: {
    padding: '0 1rem'
  },
  facebookIcon: {
    fontSize: '3rem'
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    '& a': {
      textDecoration: 'none',
      color: `${_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].blue.main}`
    }
  },
  contactTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  contactContainer: {
    // fontFamily: 'Poppins',
    display: 'flex',
    alignItems: 'center'
  },
  iconFacebook: {
    width: '1.8rem',
    height: '1.8rem'
  },
  info_icon: {
    width: '1.8rem',
    marginRight: '0.3rem'
  },
  logoContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  iconArto: {
    width: '5rem',
    borderRadius: '100%'
  },
  rightsContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 100,
    color: '#FFF',
    textDecoration: 'none'
  },
  phoneContainer: {
    display: 'grid',
    gridGap: '1rem 0',
    gridTemplateColumns: '3.5rem 2rem 1fr'
  },
  phoneText: {
    fontSize: '1.1rem',
    color: '#FFF',
    letterSpacing: '0.05rem'
  },
  PhoneIcon: {
    color: '#FFF'
  },
  marginBottomContainer: {
    marginBottom: '0.4rem'
  },
  iconMessageContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  iconMessage: {
    padding: 0,
    fontSize: '6px',
    color: `#FFF`,
    '& a': {
      textDecoration: 'none',
      color: `#FFF`
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/Image/Image.js":
/*!***************************************!*\
  !*** ./src/components/Image/Image.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\Image\\Image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Image = props => {
  const {
    imgSrc,
    classes
  } = props;
  return __jsx("img", {
    src: imgSrc,
    alt: 'photo 1',
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.image, props.className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  });
};

Image.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  imgSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
Image.displayName = 'Image';
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/components/Image/Image.style.js":
/*!*********************************************!*\
  !*** ./src/components/Image/Image.style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./src/components/Image/Image.js");



const styles = theme => ({
  mainContainer: {
    width: '20rem'
  },
  image: {
    width: '100%'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_Image__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/Image/index.js":
/*!***************************************!*\
  !*** ./src/components/Image/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.style */ "./src/components/Image/Image.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Image_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/MenuComponent/MenuBurger/MenuBurger.js":
/*!***************************************************************!*\
  !*** ./src/components/MenuComponent/MenuBurger/MenuBurger.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuListComposition; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _MenuItem_MenuItem_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../MenuItem/MenuItem.style */ "./src/components/MenuItem/MenuItem.style.js");

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\MenuComponent\\MenuBurger\\MenuBurger.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










 //TODO to trzeba poprawic bo sie wiesza

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  buttonBurgerMenu: {
    height: '4rem',
    margin: '1rem',
    width: 'auto',
    boxShadow: `1px 0 5px 1px rgb(0,0,0,0.2)`,
    borderRadius: '100%'
  }
}));

const getMenuItems = () => _constants__WEBPACK_IMPORTED_MODULE_10__["MENU_ITEMS"].map(({
  name,
  link,
  as
}) => __jsx(_MenuItem_MenuItem_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
  key: name,
  title: name,
  href: link,
  as: as,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}));

function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const anchorRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  } // return focus to the button when we transitioned from !open -> open


  const prevOpen = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(open);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ref: anchorRef,
    "aria-controls": open ? 'menu-list-grow' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    className: classes.buttonBurgerMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))), __jsx(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6___default.a, {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, ({
    TransitionProps,
    placement
  }) => __jsx(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
    style: {
      transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClickAway: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7___default.a, {
    autoFocusItem: open,
    id: "menu-list-grow",
    onKeyDown: handleListKeyDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, getMenuItems()))))));
}

/***/ }),

/***/ "./src/components/MenuComponent/MenuBurger/index.js":
/*!**********************************************************!*\
  !*** ./src/components/MenuComponent/MenuBurger/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuBurger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBurger */ "./src/components/MenuComponent/MenuBurger/MenuBurger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuBurger__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/MenuComponent/MenuComponent.js":
/*!*******************************************************!*\
  !*** ./src/components/MenuComponent/MenuComponent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuItem */ "./src/components/MenuItem/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MenuBurger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuBurger */ "./src/components/MenuComponent/MenuBurger/index.js");

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\MenuComponent\\MenuComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class MenuComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getMenuItems", () => _constants__WEBPACK_IMPORTED_MODULE_4__["MENU_ITEMS"].map(({
      name,
      link,
      as
    }) => __jsx(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: name,
      title: name,
      href: link,
      as: as,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getMobileMenu", () => {
      return __jsx("div", {
        className: this.props.classes.menuMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: './',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("div", {
        className: this.props.classes.logoMobileContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("img", {
        src: _constants__WEBPACK_IMPORTED_MODULE_4__["LOGO_ON_THE_FLOWERS"],
        alt: 'photo 1',
        className: this.props.classes.logoMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }))), __jsx(_MenuBurger__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getWebMenu", () => __jsx("div", {
      className: this.props.classes.mainContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: './',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: this.props.classes.photoContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("img", {
      src: _constants__WEBPACK_IMPORTED_MODULE_4__["LOGO_ON_THE_FLOWERS"],
      alt: 'photo 1',
      className: this.props.classes.photo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))), __jsx("div", {
      className: this.props.classes.menuContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, this.getMenuItems())));
  }

  render() {
    const {
      classes
    } = this.props;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("div", {
      className: classes.menuWeb,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, this.getWebMenu()), __jsx("div", {
      className: classes.menuMobile,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, this.getMobileMenu()));
  }

}

MenuComponent.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
MenuComponent.defaultProps = {};
MenuComponent.displayName = 'MenuComponent';
/* harmony default export */ __webpack_exports__["default"] = (MenuComponent);

/***/ }),

/***/ "./src/components/MenuComponent/MenuComponent.style.js":
/*!*************************************************************!*\
  !*** ./src/components/MenuComponent/MenuComponent.style.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuComponent */ "./src/components/MenuComponent/MenuComponent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




const styles = theme => ({
  mainContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: `0 3px 6px -6px #000`,
    margin: '0 0 0.1rem 0'
  },
  menuContainer: {
    display: 'flex',
    margin: '0 2rem 0 0'
  },
  photoContainer: {
    display: 'flex',
    padding: '0.2rem 2rem',
    justifyContent: 'center',
    '&:hover': {
      transition: '0.3s',
      transform: 'scale(1.04)'
    }
  },
  logoMobileContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  photo: {
    width: '6rem'
  },
  logoMobile: {
    width: '3rem',
    height: '3rem',
    margin: '1rem',
    borderRadius: '100%'
  },
  menuWeb: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  burgerButtonIcon: {
    height: '2rem',
    width: '2rem',
    color: `${_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].red.main}`
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_MenuComponent__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/MenuItem/MenuItem.js":
/*!*********************************************!*\
  !*** ./src/components/MenuItem/MenuItem.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\MenuItem\\MenuItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class MenuItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      classes,
      title,
      href,
      onClick,
      as
    } = this.props;
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: href,
      as: as,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("button", {
      className: classes.mainContainer,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, title)));
  }

}

MenuItem.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
MenuItem.defaultProps = {};
MenuItem.displayName = 'MenuItem';
/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./src/components/MenuItem/MenuItem.style.js":
/*!***************************************************!*\
  !*** ./src/components/MenuItem/MenuItem.style.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/MenuItem/MenuItem.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




const styles = theme => ({
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 1rem'
    },
    height: '3rem',
    border: 'none',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    margin: '0.2rem 0.2rem',
    borderBottom: `solid 1px ${_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].grey.light}`,
    outline: 'none',
    '&:hover': {
      transition: '0.7s',
      color: _constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].red.main,
      borderBottom: `solid 1px ${_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].red.main}`,
      outline: 'none'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  text: {
    fontSize: '1.3rem',
    fontWeight: 300,
    fontFamily: '\'Baskervville\',serif',
    '&:focus': {
      outline: 'none'
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/MenuItem/index.js":
/*!******************************************!*\
  !*** ./src/components/MenuItem/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItem_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItem.style */ "./src/components/MenuItem/MenuItem.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuItem_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/PageWrapper/PageWrapper.js":
/*!***************************************************!*\
  !*** ./src/components/PageWrapper/PageWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuComponent_MenuComponent_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuComponent/MenuComponent.style */ "./src/components/MenuComponent/MenuComponent.style.js");
var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\PageWrapper\\PageWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PageWrapper = ({
  classes,
  children
}) => __jsx("div", {
  className: classes.pageWrapperOuter,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: classes.menuHomepage,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_MenuComponent_MenuComponent_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})), __jsx("div", {
  className: classes.pageWrapperInner,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, children));

PageWrapper.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
PageWrapper.displayName = 'PageWrapper';
/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./src/components/PageWrapper/PageWrapper.style.js":
/*!*********************************************************!*\
  !*** ./src/components/PageWrapper/PageWrapper.style.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageWrapper */ "./src/components/PageWrapper/PageWrapper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




const styles = theme => ({
  pageWrapperOuter: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    paddingTop: '6rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3rem'
    }
  },
  pageWrapperInner: {
    width: '100%',
    maxWidth: '80rem',
    margin: '0 auto'
  },
  menuHomepage: {
    position: 'fixed',
    top: '0rem',
    zIndex: 10000,
    width: '100%',
    maxWidth: _constants__WEBPACK_IMPORTED_MODULE_2__["MAX_PAGE_WIDTH"],
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#FFF'
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_PageWrapper__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/PageWrapper/index.js":
/*!*********************************************!*\
  !*** ./src/components/PageWrapper/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageWrapper_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageWrapper.style */ "./src/components/PageWrapper/PageWrapper.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageWrapper_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/PlayerCustomized/PlayerCustomized.js":
/*!*************************************************************!*\
  !*** ./src/components/PlayerCustomized/PlayerCustomized.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-media-player */ "react-media-player");
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_media_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mp3Player_withMediaProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mp3Player/withMediaProps */ "./src/mp3Player/withMediaProps.js");
/* harmony import */ var _TrackContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TrackContainer */ "./src/components/TrackContainer/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/VolumeUp */ "@material-ui/icons/VolumeUp");
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Album__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Album */ "@material-ui/icons/Album");
/* harmony import */ var _material_ui_icons_Album__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Album__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _trackList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../trackList */ "./src/trackList.js");

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\PlayerCustomized\\PlayerCustomized.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const {
  CurrentTime,
  // Progress,
  SeekBar,
  Duration,
  Volume,
  // Fullscreen,
  MuteUnmute // autoplay,
  // isPlaying

} = react_media_player__WEBPACK_IMPORTED_MODULE_2__["controls"];

class Panner {
  constructor({
    source,
    audioContext,
    panningAmount = 0
  }) {
    this._source = source;
    this._audioContext = audioContext;
    this._initialPanningAmount = panningAmount;
  }

  connect() {
    this._splitter = this._audioContext.createChannelSplitter(2);
    this._gainLeft = this._audioContext.createGain();
    this._gainRight = this._audioContext.createGain();
    this._merger = this._audioContext.createChannelMerger(2);

    this._source.connect(this._splitter, 0, 0);

    this._splitter.connect(this._gainLeft, 0);

    this._splitter.connect(this._gainRight, 1);

    this._gainLeft.connect(this._merger, 0, 0);

    this._gainRight.connect(this._merger, 0, 1);

    return this._merger;
  }

  setPosition(amount) {
    this._gainLeft.gain.value = amount <= 0 ? 1 : 1 - amount;
    this._gainRight.gain.value = amount >= 0 ? 1 : 1 + amount;
  }

}

const tracks = _trackList__WEBPACK_IMPORTED_MODULE_10__["TRACK_LIST"];

class PlayerCustomized extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      actualPlayingTrackMp3Name: tracks[0].mp3Name,
      autoplay: false,
      isPlaying: false,
      actualSongImage: '',
      actualSongName: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_connectSource", (source, audioContext) => {
      this.panner = new Panner({
        source,
        audioContext
      });
      return this.panner.connect();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "trackList", () => tracks.map(track => {
      return __jsx(_TrackContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: track.name,
        track: track,
        actualPlayingTrackMp3Name: this.state.actualPlayingTrackMp3Name,
        onClickPlay: () => {
          return this.setState({
            actualPlayingTrackMp3Name: track.mp3Name,
            actualSongName: track.name,
            autoplay: true,
            isPlaying: true,
            actualSongImage: track.imgSrc ? track.imgSrc : _constants__WEBPACK_IMPORTED_MODULE_5__["SONGS_IMAGES"].DefaultSongImage
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      });
    }));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showWhatSongIsPlaying", song => {
      return song.mp3Name === this.state.actualPlayingTrackMp3Name;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "playNextSong", () => {
      const actualSongIndex = tracks.findIndex(this.showWhatSongIsPlaying);
      const newSongIndex = actualSongIndex + 1;
      const nextSong = tracks[newSongIndex];
      this.setState({
        actualPlayingTrackMp3Name: nextSong.mp3Name,
        actualSongName: nextSong.name,
        autoplay: true,
        isPlaying: true,
        actualSongImage: nextSong.imgSrc ? nextSong.imgSrc : _constants__WEBPACK_IMPORTED_MODULE_5__["SONGS_IMAGES"].DefaultSongImage
      });
    });
  }

  componentDidMount() {
    this.setState({
      actualSongImage: tracks[0].imgSrc
    });
  }

  render() {
    const {
      classes
    } = this.props;
    return __jsx(react_media_player__WEBPACK_IMPORTED_MODULE_2__["Media"], {
      ref: c => this.media = c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("div", {
      className: classes.mainContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("div", {
      className: classes.albumImageContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("div", {
      className: classes.songImageContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
      imgSrc: this.state.actualSongImage,
      className: classes.actualImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, this.state.actualSongName ? this.state.actualSongName : 'Wybierz utwor'), __jsx(_mp3Player_withMediaProps__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), __jsx("div", {
      className: classes.seekBarContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("div", {
      className: classes.playerTime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx(CurrentTime, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }), "/", __jsx(Duration, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })), __jsx("div", {
      className: classes.seekBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx(SeekBar, {
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }))), __jsx("div", {
      className: classes.actualSongPlayer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx(react_media_player__WEBPACK_IMPORTED_MODULE_2__["Player"], {
      ref: c => this._player = c,
      src: `/mp3/${this.state.actualPlayingTrackMp3Name}.mp3`,
      connectSource: this._connectSource,
      useAudioObject: true,
      autoPlay: this.state.autoplay,
      isPlaying: this.state.isPlaying,
      onEnded: this.playNextSong,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }))), __jsx("div", {
      className: classes.trackList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, this.trackList())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PlayerCustomized);

/***/ }),

/***/ "./src/components/PlayerCustomized/PlayerCustomized.style.js":
/*!*******************************************************************!*\
  !*** ./src/components/PlayerCustomized/PlayerCustomized.style.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlayerCustomized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerCustomized */ "./src/components/PlayerCustomized/PlayerCustomized.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");




const styles = theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    marginBottom: '1rem',
    [theme.breakpoints.up('sm')]: {
      marginTop: '2rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '1rem'
    }
  },
  main: {
    backgroundColor: '#f5f5f5',
    width: '80%',
    trackListStyle: {
      listStyleType: 'none'
    },
    trackListItem: {
      textDecoration: 'none',
      margin: '2rem'
    }
  },
  volumeContainer: {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  volume: {
    width: 50
  },
  volumeText: {
    marginRight: '1rem'
  },
  actualSongPlayer: {
    display: 'grid',
    gridTemplateColumns: '5rem 6rem 1fr 1fr',
    alignItems: 'center'
  },
  playerToolsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.2rem'
  },
  playerTime: {
    display: 'flex',
    flexDirection: 'row'
  },
  songImageContainer: {
    height: '10rem',
    width: '15rem',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      maxWidth: '30rem',
      height: 'auto',
      maxHeight: '30rem'
    }
  },
  trackList: {
    [theme.breakpoints.up('sm')]: {
      overflowY: 'auto',
      height: '80vh'
    }
  },
  actualImage: {
    height: '10rem',
    [theme.breakpoints.up('sm')]: {
      height: '20rem'
    }
  },
  albumImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    [theme.breakpoints.up('sm')]: {
      border: `solid 1px ${_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].grey.dark}`
    }
  },
  seekBarContainer: {
    width: '100%',
    maxWidth: '30rem',
    display: 'grid',
    gridTemplateColumns: '4rem auto',
    gridGap: '1rem'
  },
  seekBar: {
    width: '100%'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_PlayerCustomized__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/PlayerCustomized/index.js":
/*!**************************************************!*\
  !*** ./src/components/PlayerCustomized/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlayerCustomized_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerCustomized.style */ "./src/components/PlayerCustomized/PlayerCustomized.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PlayerCustomized_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/TrackContainer/TrackContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/TrackContainer/TrackContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-media-player */ "react-media-player");
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_media_player__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PlayCircleFilled */ "@material-ui/icons/PlayCircleFilled");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PauseCircleFilled */ "@material-ui/icons/PauseCircleFilled");
/* harmony import */ var _material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\TrackContainer\\TrackContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










class TrackContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_handlePlayPause", () => {
      this.props.media.playPause();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handlePlayClick", () => {
      this.props.onClickPlay();
      this.props.media.play();
    });
  }

  shouldComponentUpdate({
    media
  }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }

  render() {
    const {
      classes,
      track,
      actualPlayingTrackMp3Name,
      media
    } = this.props;
    const trackImage = track.imgSrc ? track.imgSrc : _constants__WEBPACK_IMPORTED_MODULE_8__["SONGS_IMAGES"].DefaultSongImage;
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.mainContainer, {
        [classes.activeBackground]: actualPlayingTrackMp3Name === track.name
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: classes.songImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {
      imgSrc: trackImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), actualPlayingTrackMp3Name === track.mp3Name && media.isPlaying ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.myButton,
      key: track.mp3Name,
      onClick: media.pause,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.buttonIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.myButton,
      key: track.mp3Name,
      onClick: this.handlePlayClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.buttonIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("div", {
      className: classes.trackName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, track.name), __jsx("div", {
      className: classes.trackArtistText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "(", track.artist && ` - ${track.artist}`, ")")));
  }

}

TrackContainer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  track: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  actualPlayingTrackMp3Name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
TrackContainer.displayName = 'TrackContainer';
/* harmony default export */ __webpack_exports__["default"] = (Object(react_media_player__WEBPACK_IMPORTED_MODULE_4__["withMediaProps"])(TrackContainer));

/***/ }),

/***/ "./src/components/TrackContainer/TrackContainer.style.js":
/*!***************************************************************!*\
  !*** ./src/components/TrackContainer/TrackContainer.style.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TrackContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrackContainer */ "./src/components/TrackContainer/TrackContainer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");



const styles = {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.1rem',
    padding: '0.1rem',
    backgroundColor: `${_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].red.medium}`,
    color: "#FFF"
  },
  myButton: {
    width: '1rem',
    padding: '0.1rem'
  },
  buttonIcon: {
    fontSize: '2rem',
    color: '#FFF'
  },
  songImage: {
    width: '3rem',
    height: '3rem'
  },
  activeBackground: {// backgroundColor: 'yellow',  //TODO naprawic tutaj BUGa z odtwarzaczem
  },
  trackName: {
    fontSize: '1.1rem'
  },
  trackArtistText: {
    fontSize: '0.8rem',
    color: _constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"].grey.dark
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_TrackContainer__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/TrackContainer/index.js":
/*!************************************************!*\
  !*** ./src/components/TrackContainer/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TrackContainer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrackContainer.style */ "./src/components/TrackContainer/TrackContainer.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TrackContainer_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var _static_image_songsImages_Naydis_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/image/songsImages/Naydis.jpg */ "./static/image/songsImages/Naydis.jpg");
/* harmony import */ var _static_image_songsImages_Naydis_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_Naydis_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../static/image/songsImages/poparzeniKawaTrzy.jpg */ "./static/image/songsImages/poparzeniKawaTrzy.jpg");
/* harmony import */ var _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/image/songsImages/marcus.jpg */ "./static/image/songsImages/marcus.jpg");
/* harmony import */ var _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/image/songsImages/powerPLay.jpg */ "./static/image/songsImages/powerPLay.jpg");
/* harmony import */ var _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../static/image/songsImages/urszula.jpg */ "./static/image/songsImages/urszula.jpg");
/* harmony import */ var _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/image/songsImages/dajToGlosniej.jpg */ "./static/image/songsImages/dajToGlosniej.jpg");
/* harmony import */ var _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/image/songsImages/fanatic.jpg */ "./static/image/songsImages/fanatic.jpg");
/* harmony import */ var _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/image/songsImages/defaultSongImage.jpg */ "./static/image/songsImages/defaultSongImage.jpg");
/* harmony import */ var _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../static/image/songsImages/lombard.jpg */ "./static/image/songsImages/lombard.jpg");
/* harmony import */ var _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../static/image/songsImages/czadoman.jpg */ "./static/image/songsImages/czadoman.jpg");
/* harmony import */ var _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../static/image/songsImages/buble.jpg */ "./static/image/songsImages/buble.jpg");
/* harmony import */ var _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_26__);















 //==============Songs images===============












const SONGS_IMAGES = {
  DefaultSongImage: _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
  DAJ_TO_GLOSNIEJ: _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
  marcus: _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
  Naydis: _static_image_songsImages_Naydis_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
  powerPLay: _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
  poparzeniKawaTrzy: _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
  urszula: _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
  Fanatic: _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_22___default.a,
  lombard: _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
  czadoman: _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_25___default.a,
  buble: _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_26___default.a
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

/***/ "./src/mp3Player/withMediaProps.js":
/*!*****************************************!*\
  !*** ./src/mp3Player/withMediaProps.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-media-player */ "react-media-player");
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_media_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_motion_ui_pack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-motion-ui-pack */ "react-motion-ui-pack");
/* harmony import */ var react_motion_ui_pack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_motion_ui_pack__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\mp3Player\\withMediaProps.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class ScaleX extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(react_motion_ui_pack__WEBPACK_IMPORTED_MODULE_3___default.a, {
      component: "g",
      enter: {
        scaleX: 1
      },
      leave: {
        scaleX: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, this.props.children);
  }

}

class PlayPause extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_handlePlayPause", () => {
      this.props.media.playPause();
    });
  }

  render() {
    const {
      media: {
        isPlaying
      },
      className
    } = this.props;
    return __jsx("svg", {
      role: "button",
      width: "100px",
      height: "36px",
      viewBox: "0 0 36 36",
      className: className,
      onClick: this._handlePlayPause,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("circle", {
      fill: "#373D3F",
      cx: "18",
      cy: "18",
      r: "18",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), __jsx(ScaleX, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, isPlaying && __jsx("g", {
      key: "pause",
      style: {
        transformOrigin: '0% 50%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("rect", {
      x: "12",
      y: "11",
      fill: "#CDD7DB",
      width: "4",
      height: "14",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("rect", {
      x: "20",
      y: "11",
      fill: "#CDD7DB",
      width: "4",
      height: "14",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }))), __jsx(ScaleX, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, !isPlaying && __jsx("polygon", {
      key: "play",
      fill: "#CDD7DB",
      points: "14,11 26,18 14,25",
      style: {
        transformOrigin: '100% 50%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_media_player__WEBPACK_IMPORTED_MODULE_2__["withMediaProps"])(PlayPause));

/***/ }),

/***/ "./src/trackList.js":
/*!**************************!*\
  !*** ./src/trackList.js ***!
  \**************************/
/*! exports provided: TRACK_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACK_LIST", function() { return TRACK_LIST; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

const TRACK_LIST = [{
  name: 'Do Tańca Kawałek',
  mp3Name: 'do_tanca_kawalek',
  artist: 'Poparzeni kawą trzy',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].poparzeniKawaTrzy
}, {
  name: 'Kici Kici miał',
  mp3Name: 'kici_kici_mial',
  artist: 'Marcus',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].marcus
}, {
  name: 'Konik na biegunach',
  mp3Name: 'konik_na_biegunach',
  artist: 'Urszula',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].urszula
}, {
  name: 'Weź nie pytaj',
  mp3Name: 'WezNiePytaj',
  artist: 'Paweł Domagała' // imgSrc: SONGS_IMAGES.urszula,

}, {
  name: 'Mama ostrzegała',
  mp3Name: 'mama_ostrzegala',
  artist: 'Daj to głośniej',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].DAJ_TO_GLOSNIEJ
}, {
  name: 'Miła ma',
  mp3Name: 'mila_ma',
  artist: 'Power Play',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].powerPLay
}, {
  name: 'Miłość w Zakopanem',
  mp3Name: 'milosc_w_zakopanem',
  artist: 'Sławomir' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Ona by tak chciała',
  mp3Name: 'ona_by_tak_chciala',
  artist: 'Ronnie Ferrari' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Remedium',
  mp3Name: 'remedium',
  artist: 'Maryla Rodowicz' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Sway',
  mp3Name: 'sway',
  artist: 'Michael Buble',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].buble
}, {
  name: 'Bananowa Agnieszka',
  mp3Name: 'bananowa_agnieszka',
  artist: 'After Party' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Autostop',
  mp3Name: 'autoStop',
  artist: 'Karin Stanek' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Bałkanica',
  mp3Name: 'balkanica',
  artist: 'Piersi' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Małgośka',
  mp3Name: 'Malgoska',
  artist: 'Maryla Rodowicz' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: 'Baśka',
  mp3Name: 'Baska',
  artist: 'Wilki' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: "Przekorny Los",
  mp3Name: 'PrzekornyLos',
  artist: 'Akcent' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}, {
  name: 'Byłaś dla mnie wszystkim',
  mp3Name: 'BylasDlaMnieWszystkim',
  artist: 'Poparzeni kawą trzy',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].poparzeniKawaTrzy
}, {
  name: 'Co tu się dzieje',
  mp3Name: 'CoTuSieDzieje',
  artist: 'Power Play',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].powerPLay
}, {
  name: 'Cała sala śpiewa z nami',
  mp3Name: 'CalaSala',
  artist: 'Jerzy Połomski'
}, {
  name: 'Chałupy welcome to',
  mp3Name: 'ChalupyWelcomeTo',
  artist: 'Zbigniew Wodecki'
}, {
  name: 'Co ma być to będzie',
  mp3Name: 'CoMaBycToBedzie',
  artist: 'Power Play',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].powerPLay
}, {
  name: 'Czarownica',
  mp3Name: 'Czarownica',
  artist: 'Fanatic',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].Fanatic
}, {
  name: 'Czy ten Pan i Pani',
  mp3Name: 'CzyTenPanIPani',
  artist: 'Ania Wyszkoni'
}, {
  name: 'Kochaj mnie',
  mp3Name: 'KochajMnie',
  artist: 'Power Play',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].powerPLay
}, {
  name: 'Do białego rana',
  mp3Name: 'DoBialegoRana',
  artist: 'Freaky Boys'
}, {
  name: 'Honey Honey',
  mp3Name: 'HoneyHoney',
  artist: 'Abba'
}, {
  name: 'Hula ula',
  mp3Name: 'HulaHula',
  artist: 'Marcus',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].marcus
}, {
  name: 'Jaki piękny świat',
  mp3Name: 'JakiPieknySwiat',
  artist: 'Boys' // imgSrc: SONGS_IMAGES.marcus,

}, {
  name: 'Kawiarenki',
  mp3Name: 'Kawiarenki',
  artist: 'Irena Jarocka' // imgSrc: SONGS_IMAGES.marcus,

}, {
  name: 'Bukiet róż',
  mp3Name: 'BukietRoz',
  artist: 'Veegas' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Za tobą pójdę jak ba bal',
  mp3Name: 'ZaTobaPojdeJakNaBal',
  artist: 'Krzysztof Krawczyk' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: 'Łobuz',
  mp3Name: 'Lobuz',
  artist: 'Boys' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: 'Lubisz to',
  mp3Name: 'LubiszTo',
  artist: 'Power Play',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].powerPLay
}, {
  name: "Mamma mia He's italiano",
  mp3Name: 'MammaMiaHisItaliano',
  artist: 'Elena Gheorghe' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: "Rock&Roll",
  mp3Name: 'Rock&Roll',
  artist: 'Electric Light Orchestra' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}, {
  name: "Mazureczka",
  mp3Name: 'Mazureczka',
  artist: 'Masters' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: "Miod malina",
  mp3Name: 'MiodMalina',
  artist: 'MIG' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: "Mleczko",
  mp3Name: 'Mleczko',
  artist: 'Energy Girls' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: "Najpiękne",
  mp3Name: 'Najpiekne',
  artist: 'Power Play',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].powerPLay
}, {
  name: "Nie chce spać",
  mp3Name: 'NieChceSpac',
  artist: 'Enej' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: "Nie płacz Ewka",
  mp3Name: 'NiePlaczEwka',
  artist: 'Perfect' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: "Niech żyje bal",
  mp3Name: 'NiechZyjeBal',
  artist: 'Maryla Rodowicz' // imgSrc: SONGS_IMAGES.powerPLay,

}, {
  name: "Okrutna zła i podła",
  mp3Name: 'OkrutnaZlaIPodla',
  artist: 'Poparzeni kawą trzy',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].poparzeniKawaTrzy
}, {
  name: "Ona czuje we mnie piniądz",
  mp3Name: 'OnaCzujeWeMniePiniadz',
  artist: 'Łobuzy' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}, {
  name: "Ona jest taka cudowna",
  mp3Name: 'OnaJestTakaCudowna',
  artist: 'Piękni i młodzi' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}, {
  name: "Piąty bieg",
  mp3Name: 'PiatyBieg',
  artist: 'Budka suflera' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}, {
  name: "Prywatki",
  mp3Name: 'Prywatki',
  artist: 'Piotr Gąsowski' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}, {
  name: "Prześliczna wiolączelistka",
  mp3Name: 'PrzeslicznaWiolaczelistka',
  artist: 'Skaldowie' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}, {
  name: "Przeżyj to sam",
  mp3Name: 'PrzezyjToSam',
  artist: 'Lombard',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].lombard
}, {
  name: "Ruda tańczy jak szalona",
  mp3Name: 'RudaTanczyJakSzalona',
  artist: 'Czadoman',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_0__["SONGS_IMAGES"].czadoman
}, {
  name: "W kinie w Lublinie",
  mp3Name: 'WKinieWLublinie',
  artist: 'Brathanki' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}, {
  name: "Waterloo",
  mp3Name: 'Waterloo',
  artist: 'Abba' // imgSrc: SONGS_IMAGES.poparzeniKawaTrzy,

}];

/***/ }),

/***/ "./src/views/Demo/Demo.js":
/*!********************************!*\
  !*** ./src/views/Demo/Demo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageWrapper */ "./src/components/PageWrapper/index.js");
/* harmony import */ var _components_PlayerCustomized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PlayerCustomized */ "./src/components/PlayerCustomized/index.js");
/* harmony import */ var _components_Footer_Footer_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer/Footer.style */ "./src/components/Footer/Footer.style.js");
var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\views\\Demo\\Demo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Demo = props => __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_components_PlayerCustomized__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_components_Footer_Footer_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}));

Demo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
Demo.displayName = 'Demo';
/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./src/views/Demo/Demo.style.js":
/*!**************************************!*\
  !*** ./src/views/Demo/Demo.style.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo */ "./src/views/Demo/Demo.js");



const styles = theme => ({});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(_Demo__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/views/Demo/index.js":
/*!*********************************!*\
  !*** ./src/views/Demo/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Demo_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demo.style */ "./src/views/Demo/Demo.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Demo_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./static/image/songsImages/Naydis.jpg":
/*!*********************************************!*\
  !*** ./static/image/songsImages/Naydis.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/Naydis.jpg";

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
/*!*****************************!*\
  !*** multi ./pages/demo.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\IT_projects_Edu-Lab\www.zespolarto.pl\pages\demo.js */"./pages/demo.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

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

/***/ "@material-ui/icons/Album":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Album" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Album");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "@material-ui/icons/MailOutline":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MailOutline" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MailOutline");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/PauseCircleFilled":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/PauseCircleFilled" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PauseCircleFilled");

/***/ }),

/***/ "@material-ui/icons/Phone":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Phone" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "@material-ui/icons/PlayCircleFilled":
/*!******************************************************!*\
  !*** external "@material-ui/icons/PlayCircleFilled" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayCircleFilled");

/***/ }),

/***/ "@material-ui/icons/VolumeUp":
/*!**********************************************!*\
  !*** external "@material-ui/icons/VolumeUp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VolumeUp");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-media-player":
/*!*************************************!*\
  !*** external "react-media-player" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-media-player");

/***/ }),

/***/ "react-motion-ui-pack":
/*!***************************************!*\
  !*** external "react-motion-ui-pack" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-motion-ui-pack");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=demo.js.map