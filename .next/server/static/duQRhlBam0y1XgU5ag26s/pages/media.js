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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+E/a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/fanatic.jpg";

/***/ }),

/***/ "+o2R":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/smile.svg";

/***/ }),

/***/ "/+Qe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/zbigniewWodecki.jpg";

/***/ }),

/***/ "//k9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/irenaJarocka.jpg";

/***/ }),

/***/ "/1p2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/enej.jpg";

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

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

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ "0F/j":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "1Aa9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/brathanki.jpg";

/***/ }),

/***/ "1hRU":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/veegas.jpg";

/***/ }),

/***/ "2+ul":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/dajToGlosniej.jpg";

/***/ }),

/***/ "2UgA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/buble.jpg";

/***/ }),

/***/ "2wBK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/electricLightOrchestra.jpg";

/***/ }),

/***/ "31Yn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "3zEN":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/poparzeniKawaTrzy.jpg";

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4PQo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/boys.jpg";

/***/ }),

/***/ "4XLu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/powerPLay.jpg";

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CaRH");


/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _WeakMap = __webpack_require__("G4HQ");

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

/***/ "69IJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/krzysztofKrawczyk.jpg";

/***/ }),

/***/ "7VOf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/WojLubelskie.jpg";

/***/ }),

/***/ "8X2W":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/perfect.jpg";

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "CaRH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/PageWrapper/index.js + 9 modules
var PageWrapper = __webpack_require__("GPKm");

// EXTERNAL MODULE: ./src/components/Footer/Footer.style.js + 1 modules
var Footer_style = __webpack_require__("QIqi");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__("X7BR");

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/Film-PhotoChoice/Film-PhotoChoice.js
var __jsx = external_react_default.a.createElement;






class Film_PhotoChoice_FilmPhotoChoice extends external_react_["Component"] {
  render() {
    const {
      classes
    } = this.props;
    return __jsx("div", null, __jsx("div", {
      className: classes.mediaHeader
    }, __jsx(Typography_default.a, {
      classes: {
        root: classes.textHeader
      }
    }, "Tutaj ukryli\u015Bmy nasze wspomnienia... "), __jsx("img", {
      src: constants["h" /* LEAF */],
      alt: 'leaf',
      className: classes.leaf_icon
    })), __jsx("div", {
      className: classes.mainContainer
    }, __jsx("div", {
      className: external_classnames_default()(classes.mediaBookmark)
    }, __jsx(link_default.a, {
      href: './'
    }, __jsx("div", {
      className: external_classnames_default()(classes.mediaCard)
    }, __jsx("div", null, __jsx("img", {
      src: constants["v" /* VIDEO_CARD_IMAGE */],
      alt: 'photo_video',
      className: this.props.classes.photoCard
    })), __jsx("div", {
      className: classes.textContainer
    }, __jsx(Typography_default.a, {
      classes: {
        root: classes.text
      }
    }, "FILMY"), __jsx("div", {
      className: classes.quotationContainer
    }, __jsx(Typography_default.a, {
      classes: {
        root: classes.quotation
      }
    }, "\"Jeden moment potrafi zmieni\u0107 ca\u0142e \u017Cycie.\""), __jsx(Typography_default.a, {
      classes: {
        root: classes.author
      }
    }, "-Anonim"))))), __jsx(link_default.a, {
      href: './'
    }, __jsx("div", {
      className: classes.positionRelative
    }, __jsx("div", {
      className: external_classnames_default()(classes.mediaCard)
    }, __jsx("div", null, __jsx("img", {
      src: constants["p" /* PHOTO_CARD_IMAGE */],
      alt: 'photo_video',
      className: this.props.classes.photoCard
    })), __jsx("div", {
      className: classes.textContainer
    }, __jsx(Typography_default.a, {
      classes: {
        root: classes.text
      }
    }, "ZDJ\u0118CIA"), __jsx("div", {
      className: classes.quotationContainer
    }, __jsx(Typography_default.a, {
      classes: {
        root: classes.quotation
      }
    }, "\"Patrz oczyma, fotografuj sercem\""), __jsx(Typography_default.a, {
      classes: {
        root: classes.author
      }
    }, "-Dawid duChemin")))))))));
  }

}

Film_PhotoChoice_FilmPhotoChoice.defaultProps = {};
Film_PhotoChoice_FilmPhotoChoice.displayName = 'Film-PhotoChoice';
/* harmony default export */ var Film_PhotoChoice = (Film_PhotoChoice_FilmPhotoChoice);
// CONCATENATED MODULE: ./src/components/Film-PhotoChoice/Film-PhotoChoice.style.js



const radiusCorner = '1.5rem';

const styles = theme => ({
  mediaHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem 0 0 0',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  textHeader: {
    fontSize: '2.5rem',
    fontWeight: 300,
    fontFamily: 'Parisienne',
    textAlign: 'center'
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    gridGap: '1rem',
    [theme.breakpoints.up('sm')]: {}
  },
  mediaBookmark: {
    display: 'flex',
    padding: '1rem 0',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  positionRelative: {
    position: 'relative',
    height: '30rem'
  },
  positionAbsolute: {
    position: 'absolute',
    transition: 'all .3s ease',
    top: 0,
    filter: 'opacity(1)',
    '&:hover': {
      top: `-0.3rem`,
      filter: 'opacity(0.7)'
    }
  },
  mediaCard: {
    width: '18rem',
    height: '25rem',
    border: `solid ${constants["a" /* COLORS */].grey.dark} 1px`,
    borderRadius: `${radiusCorner} ${radiusCorner} 0 0`,
    fontSize: '2rem',
    textAlign: 'center',
    margin: '2rem 0',
    fontFamily: 'Parisienne',
    '&:hover': {
      backgroundColor: `${constants["a" /* COLORS */].grey.light}`
    },
    [theme.breakpoints.up('sm')]: {
      width: '22rem',
      height: '25rem',
      margin: '2rem'
    }
  },
  photoCard: {
    width: '100%',
    borderRadius: `${radiusCorner} ${radiusCorner} 0 0`
  },
  textContainer: {
    padding: '0.5rem'
  },
  text: {
    fontSize: '1.2rem',
    fontWeight: 300,
    fontFamily: '\'Baskervville\',serif'
  },
  quotationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  quotation: {
    fontSize: '1.8rem',
    fontFamily: 'Parisienne'
  },
  author: {
    fontSize: '1rem',
    fontFamily: 'Parisienne'
  },
  leaf_icon: {
    width: '2.3rem',
    margin: '1rem 0 0 1rem ',
    [theme.breakpoints.up('md')]: {
      margin: '0 0 0 1rem '
    }
  }
});

/* harmony default export */ var Film_PhotoChoice_style = (Object(styles_["withStyles"])(styles)(Film_PhotoChoice));
// CONCATENATED MODULE: ./src/components/Film-PhotoChoice/index.js

// CONCATENATED MODULE: ./src/views/Media/Media.js
var Media_jsx = external_react_default.a.createElement;





const Media = props => Media_jsx(PageWrapper["a" /* default */], null, Media_jsx(Film_PhotoChoice_style, null), Media_jsx(Footer_style["a" /* default */], null));

Media.displayName = 'Media';
/* harmony default export */ var Media_Media = (Media);
// CONCATENATED MODULE: ./src/views/Media/Media.style.js


const Media_style_styles = {
  mainContainer: {}
};
/* harmony default export */ var Media_style = (Object(styles_["withStyles"])(Media_style_styles)(Media_Media));
// CONCATENATED MODULE: ./src/views/Media/index.js

// CONCATENATED MODULE: ./pages/media.js

/* harmony default export */ var media = __webpack_exports__["default"] = (Media_style);

/***/ }),

/***/ "EG94":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/defaultSongImage.jpg";

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "GPKm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/MenuItem/MenuItem.js
var __jsx = external_react_default.a.createElement;




class MenuItem_MenuItem extends external_react_["Component"] {
  render() {
    const {
      classes,
      title,
      href,
      onClick,
      as
    } = this.props;
    return __jsx(link_default.a, {
      href: href,
      as: as
    }, __jsx("button", {
      className: classes.mainContainer,
      onClick: onClick
    }, __jsx(Typography_default.a, {
      className: classes.text
    }, title)));
  }

}

MenuItem_MenuItem.defaultProps = {};
MenuItem_MenuItem.displayName = 'MenuItem';
/* harmony default export */ var components_MenuItem_MenuItem = (MenuItem_MenuItem);
// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__("X7BR");

// CONCATENATED MODULE: ./src/components/MenuItem/MenuItem.style.js




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
    borderBottom: `solid 1px ${constants["a" /* COLORS */].grey.light}`,
    outline: 'none',
    '&:hover': {
      transition: '0.7s',
      color: constants["a" /* COLORS */].red.main,
      borderBottom: `solid 1px ${constants["a" /* COLORS */].red.main}`,
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

/* harmony default export */ var MenuItem_style = (Object(styles_["withStyles"])(styles)(components_MenuItem_MenuItem));
// CONCATENATED MODULE: ./src/components/MenuItem/index.js

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__("31Yn");
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);

// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__("mf1M");
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__("jD8W");
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);

// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__("xmQw");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// CONCATENATED MODULE: ./src/components/MenuComponent/MenuBurger/MenuBurger.js

var MenuBurger_jsx = external_react_default.a.createElement;










 //TODO to trzeba poprawic bo sie wiesza

const useStyles = Object(styles_["makeStyles"])(theme => ({
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

const getMenuItems = () => constants["o" /* MENU_ITEMS */].map(({
  name,
  link,
  as
}) => MenuBurger_jsx(MenuItem_style, {
  key: name,
  title: name,
  href: link,
  as: as
}));

function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = external_react_default.a.useState(false);
  const anchorRef = external_react_default.a.useRef(null);

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


  const prevOpen = external_react_default.a.useRef(open);
  external_react_default.a.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return MenuBurger_jsx("div", {
    className: classes.root
  }, MenuBurger_jsx("div", null, MenuBurger_jsx(Button_default.a, {
    ref: anchorRef,
    "aria-controls": open ? 'menu-list-grow' : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    className: classes.buttonBurgerMenu
  }, MenuBurger_jsx(Menu_default.a, null))), MenuBurger_jsx(Popper_default.a, {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, ({
    TransitionProps,
    placement
  }) => MenuBurger_jsx(Grow_default.a, Object(esm_extends["a" /* default */])({}, TransitionProps, {
    style: {
      transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
    }
  }), MenuBurger_jsx(Paper_default.a, null, MenuBurger_jsx(ClickAwayListener_default.a, {
    onClickAway: handleClose
  }, MenuBurger_jsx(MenuList_default.a, {
    autoFocusItem: open,
    id: "menu-list-grow",
    onKeyDown: handleListKeyDown
  }, getMenuItems()))))));
}
// CONCATENATED MODULE: ./src/components/MenuComponent/MenuBurger/index.js

// CONCATENATED MODULE: ./src/components/MenuComponent/MenuComponent.js

var MenuComponent_jsx = external_react_default.a.createElement;






class MenuComponent_MenuComponent extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "getMenuItems", () => constants["o" /* MENU_ITEMS */].map(({
      name,
      link,
      as
    }) => MenuComponent_jsx(MenuItem_style, {
      key: name,
      title: name,
      href: link,
      as: as
    })));

    Object(defineProperty["a" /* default */])(this, "getMobileMenu", () => {
      return MenuComponent_jsx("div", {
        className: this.props.classes.menuMobile
      }, MenuComponent_jsx(link_default.a, {
        href: './'
      }, MenuComponent_jsx("div", {
        className: this.props.classes.logoMobileContainer
      }, MenuComponent_jsx("img", {
        src: constants["j" /* LOGO_ON_THE_FLOWERS */],
        alt: 'photo 1',
        className: this.props.classes.logoMobile
      }))), MenuComponent_jsx(MenuListComposition, null));
    });

    Object(defineProperty["a" /* default */])(this, "getWebMenu", () => MenuComponent_jsx("div", {
      className: this.props.classes.mainContainer
    }, MenuComponent_jsx(link_default.a, {
      href: './'
    }, MenuComponent_jsx("div", {
      className: this.props.classes.photoContainer
    }, MenuComponent_jsx("img", {
      src: constants["j" /* LOGO_ON_THE_FLOWERS */],
      alt: 'photo 1',
      className: this.props.classes.photo
    }))), MenuComponent_jsx("div", {
      className: this.props.classes.menuContainer
    }, this.getMenuItems())));
  }

  render() {
    const {
      classes
    } = this.props;
    return MenuComponent_jsx("div", null, MenuComponent_jsx("div", {
      className: classes.menuWeb
    }, this.getWebMenu()), MenuComponent_jsx("div", {
      className: classes.menuMobile
    }, this.getMobileMenu()));
  }

}

MenuComponent_MenuComponent.defaultProps = {};
MenuComponent_MenuComponent.displayName = 'MenuComponent';
/* harmony default export */ var components_MenuComponent_MenuComponent = (MenuComponent_MenuComponent);
// CONCATENATED MODULE: ./src/components/MenuComponent/MenuComponent.style.js




const MenuComponent_style_styles = theme => ({
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
    color: `${constants["a" /* COLORS */].red.main}`
  }
});

/* harmony default export */ var MenuComponent_style = (Object(styles_["withStyles"])(MenuComponent_style_styles)(components_MenuComponent_MenuComponent));
// CONCATENATED MODULE: ./src/components/PageWrapper/PageWrapper.js
var PageWrapper_jsx = external_react_default.a.createElement;



const PageWrapper = ({
  classes,
  children
}) => PageWrapper_jsx("div", {
  className: classes.pageWrapperOuter
}, PageWrapper_jsx("div", {
  className: classes.menuHomepage
}, PageWrapper_jsx(MenuComponent_style, null)), PageWrapper_jsx("div", {
  className: classes.pageWrapperInner
}, children));

PageWrapper.displayName = 'PageWrapper';
/* harmony default export */ var PageWrapper_PageWrapper = (PageWrapper);
// CONCATENATED MODULE: ./src/components/PageWrapper/PageWrapper.style.js




const PageWrapper_style_styles = theme => ({
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
    maxWidth: constants["n" /* MAX_PAGE_WIDTH */],
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#FFF'
    }
  }
});

/* harmony default export */ var PageWrapper_style = (Object(styles_["withStyles"])(PageWrapper_style_styles)(PageWrapper_PageWrapper));
// CONCATENATED MODULE: ./src/components/PageWrapper/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return PageWrapper_style; });


/***/ }),

/***/ "GonH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/marcus.jpg";

/***/ }),

/***/ "HeQM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/piekniIMlodzi.jpg";

/***/ }),

/***/ "HhjJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/freakyBoys.jpg";

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KdvR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/urszula.jpg";

/***/ }),

/***/ "LSYQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_2_small.jpg";

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "NkBn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/facebookPage.svg";

/***/ }),

/***/ "NpQ6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/masters.jpg";

/***/ }),

/***/ "OcS8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/music.svg";

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "PHgW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/topGirls.jpg";

/***/ }),

/***/ "PpS+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/GalleryCardPhoto.jpeg";

/***/ }),

/***/ "Pt2k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/budkaSuflera.jpeg";

/***/ }),

/***/ "QIqi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/icons/Phone"
var Phone_ = __webpack_require__("lgrB");
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);

// EXTERNAL MODULE: external "@material-ui/icons/MailOutline"
var MailOutline_ = __webpack_require__("YeUX");
var MailOutline_default = /*#__PURE__*/__webpack_require__.n(MailOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/Facebook"
var Facebook_ = __webpack_require__("0F/j");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__("X7BR");

// CONCATENATED MODULE: ./src/components/Footer/Footer.js
var __jsx = external_react_default.a.createElement;









class Footer_Footer extends external_react_["Component"] {
  render() {
    const {
      classes
    } = this.props;
    return __jsx("div", {
      className: classes.footerContainer
    }, __jsx("div", {
      className: classes.mainContainer
    }, __jsx("div", {
      className: classes.logoContainer
    }, __jsx(link_default.a, {
      href: constants["i" /* LINKS */].HOME.HREF
    }, __jsx("a", null, __jsx("img", {
      src: constants["j" /* LOGO_ON_THE_FLOWERS */],
      alt: 'logo zespolu Arto',
      className: classes.iconArto
    })))), __jsx("div", {
      className: classes.contactContainer
    }, __jsx(link_default.a, {
      href: constants["i" /* LINKS */].CONTACT.HREF
    }, __jsx("a", {
      className: classes.contactTextContainer
    }, __jsx("img", {
      src: constants["g" /* INFO_ICON */],
      alt: 'Bride',
      className: classes.info_icon
    }), __jsx(Typography_default.a, null, "KONTAKT")))), __jsx("div", {
      className: external_classnames_default()(classes.phoneContainer, classes.marginBottomContainer)
    }, __jsx(Typography_default.a, {
      className: classes.phoneText
    }, "e-mail"), __jsx(MailOutline_default.a, {
      className: classes.PhoneIcon
    }), __jsx("a", {
      className: classes.phoneText,
      href: "mailto:zespolarto@gmail.com?subject = Feedback&body = Message"
    }, "zespolarto@gmail.com")), __jsx("div", null, __jsx("div", {
      className: external_classnames_default()(classes.phoneContainer, classes.marginBottomContainer)
    }, __jsx(Typography_default.a, {
      className: classes.phoneText
    }, "Rafa\u0142"), __jsx(Phone_default.a, {
      className: classes.PhoneIcon
    }), __jsx("a", {
      className: classes.phoneText,
      href: "tel:+48661204475"
    }, "661 204 475")), __jsx("div", {
      className: classes.phoneContainer
    }, __jsx(Typography_default.a, {
      className: classes.phoneText
    }, "Adrian"), __jsx(Phone_default.a, {
      className: classes.PhoneIcon
    }), __jsx("a", {
      className: classes.phoneText,
      href: "tel:+48796642598"
    }, "796 642 598"))), __jsx("div", {
      className: classes.socialMediaContainer
    }, __jsx("a", {
      href: constants["b" /* FACEBOOK_URL */],
      target: '_blank',
      className: classes.socialLink
    }, __jsx(Facebook_default.a, {
      className: classes.facebookIcon
    })))), __jsx("a", {
      className: classes.rightsContainer,
      href: constants["q" /* RAFAL_CIESIELCZUK_LINKED_IN */],
      target: '_blank'
    }, "R.C. \xA9 2020 All rights reserved"), __jsx("div", {
      className: classes.iconMessageContainer
    }, __jsx("div", {
      className: classes.iconMessage
    }, "Icons made by ", __jsx("a", {
      href: "https://www.flaticon.com/authors/freepik",
      title: "Freepik"
    }, "Freepik"), " from ", __jsx("a", {
      href: "https://www.flaticon.com/",
      title: "Flaticon"
    }, "www.flaticon.com"))));
  }

}

Footer_Footer.defaultProps = {};
Footer_Footer.displayName = 'ContactContainer';
/* harmony default export */ var components_Footer_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/components/Footer/Footer.style.js




const styles = theme => ({
  footerContainer: {
    backgroundColor: `${constants["a" /* COLORS */].red.medium}`,
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
    [theme.breakpoints.down(constants["r" /* SCREEN_SIZE */].POINT_750)]: {
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
      color: `${constants["a" /* COLORS */].blue.main}`
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

/* harmony default export */ var Footer_style = __webpack_exports__["a"] = (Object(styles_["withStyles"])(styles)(components_Footer_Footer));

/***/ }),

/***/ "R8uW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/lovers_small.png";

/***/ }),

/***/ "RAQB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/czadoman.jpg";

/***/ }),

/***/ "Rd2R":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/skaldowie.jpg";

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "US5F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/wojciechGasowski.jpg";

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Vacu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/ronnieFerrari.jpg";

/***/ }),

/***/ "WaC5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/mig.jpg";

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X7BR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SONGS_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IMAGE_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IMAGE_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return IMAGE_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return IMAGE_4; });
/* unused harmony export LOGO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOGO_ON_THE_FLOWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOVERS; });
/* unused harmony export BRIDE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SMILE; });
/* unused harmony export MUSIC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return INFO_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LEAF; });
/* unused harmony export FACEBOOK_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LUBLIN_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return VIDEO_CARD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PHOTO_CARD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return MAX_PAGE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MENU_ITEMS; });
/* unused harmony export MENU_ITEM_WIDTH */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
/* unused harmony export FACEBOOK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FACEBOOK_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return RAFAL_CIESIELCZUK_LINKED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MARGIN_TOP_UNDER_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SCREEN_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return STATUS; });
/* harmony import */ var _static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fdMl");
/* harmony import */ var _static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LSYQ");
/* harmony import */ var _static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xYJu");
/* harmony import */ var _static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oYCP");
/* harmony import */ var _static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_image_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("egv4");
/* harmony import */ var _static_image_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_image_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_image_LogoWKwiatach_342x300_nowe_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hpry");
/* harmony import */ var _static_image_LogoWKwiatach_342x300_nowe_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_image_LogoWKwiatach_342x300_nowe_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_image_lovers_small_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("R8uW");
/* harmony import */ var _static_image_lovers_small_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_image_lovers_small_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_image_icons_bride_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("jzL8");
/* harmony import */ var _static_image_icons_bride_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_bride_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_image_icons_smile_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("+o2R");
/* harmony import */ var _static_image_icons_smile_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_smile_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_image_icons_music_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("OcS8");
/* harmony import */ var _static_image_icons_music_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_music_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_image_icons_info_icon_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("i72G");
/* harmony import */ var _static_image_icons_info_icon_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_info_icon_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_image_icons_leaf_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("vVQ9");
/* harmony import */ var _static_image_icons_leaf_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_leaf_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_image_icons_facebookPage_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("NkBn");
/* harmony import */ var _static_image_icons_facebookPage_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_image_icons_facebookPage_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_image_WojLubelskie_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("7VOf");
/* harmony import */ var _static_image_WojLubelskie_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_image_WojLubelskie_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_image_GalleryCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("PpS+");
/* harmony import */ var _static_image_GalleryCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_image_GalleryCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_image_videoCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("d5NE");
/* harmony import */ var _static_image_videoCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_image_videoCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_image_songsImages_abba_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("klPJ");
/* harmony import */ var _static_image_songsImages_abba_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_abba_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_image_songsImages_afterParty_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("tI24");
/* harmony import */ var _static_image_songsImages_afterParty_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_afterParty_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_image_songsImages_akcent_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("ngGI");
/* harmony import */ var _static_image_songsImages_akcent_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_akcent_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_image_songsImages_aniaWyszkoni_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("wEF3");
/* harmony import */ var _static_image_songsImages_aniaWyszkoni_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_aniaWyszkoni_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_image_songsImages_boys_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("4PQo");
/* harmony import */ var _static_image_songsImages_boys_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_boys_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_image_songsImages_brathanki_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("1Aa9");
/* harmony import */ var _static_image_songsImages_brathanki_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_brathanki_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("2UgA");
/* harmony import */ var _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_image_songsImages_budkaSuflera_jpeg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("Pt2k");
/* harmony import */ var _static_image_songsImages_budkaSuflera_jpeg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_budkaSuflera_jpeg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("RAQB");
/* harmony import */ var _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("2+ul");
/* harmony import */ var _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("EG94");
/* harmony import */ var _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _static_image_songsImages_electricLightOrchestra_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("2wBK");
/* harmony import */ var _static_image_songsImages_electricLightOrchestra_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_electricLightOrchestra_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _static_image_songsImages_elenaGheorghe_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("mC7h");
/* harmony import */ var _static_image_songsImages_elenaGheorghe_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_elenaGheorghe_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _static_image_songsImages_enej_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("/1p2");
/* harmony import */ var _static_image_songsImages_enej_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_enej_jpg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("+E/a");
/* harmony import */ var _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _static_image_songsImages_freakyBoys_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("HhjJ");
/* harmony import */ var _static_image_songsImages_freakyBoys_jpg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_freakyBoys_jpg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _static_image_songsImages_irenaJarocka_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("//k9");
/* harmony import */ var _static_image_songsImages_irenaJarocka_jpg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_irenaJarocka_jpg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _static_image_songsImages_jerzyPolomski_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("a8vF");
/* harmony import */ var _static_image_songsImages_jerzyPolomski_jpg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_jerzyPolomski_jpg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _static_image_songsImages_karinaStanek_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("XcUG");
/* harmony import */ var _static_image_songsImages_karinaStanek_jpg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_karinaStanek_jpg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _static_image_songsImages_krzysztofKrawczyk_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("69IJ");
/* harmony import */ var _static_image_songsImages_krzysztofKrawczyk_jpg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_krzysztofKrawczyk_jpg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _static_image_songsImages_lobuzy_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("YUY/");
/* harmony import */ var _static_image_songsImages_lobuzy_jpg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_lobuzy_jpg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("bsFk");
/* harmony import */ var _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("GonH");
/* harmony import */ var _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _static_image_songsImages_marylaRodowicz_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("tUtQ");
/* harmony import */ var _static_image_songsImages_marylaRodowicz_jpg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_marylaRodowicz_jpg__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _static_image_songsImages_masters_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("NpQ6");
/* harmony import */ var _static_image_songsImages_masters_jpg__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_masters_jpg__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _static_image_songsImages_mig_jpg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("WaC5");
/* harmony import */ var _static_image_songsImages_mig_jpg__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_mig_jpg__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _static_image_songsImages_pawelDomagala_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("eJVZ");
/* harmony import */ var _static_image_songsImages_pawelDomagala_jpg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_pawelDomagala_jpg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _static_image_songsImages_perfect_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("8X2W");
/* harmony import */ var _static_image_songsImages_perfect_jpg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_perfect_jpg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _static_image_songsImages_piekniIMlodzi_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("HeQM");
/* harmony import */ var _static_image_songsImages_piekniIMlodzi_jpg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_piekniIMlodzi_jpg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _static_image_songsImages_piersi_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("jq/c");
/* harmony import */ var _static_image_songsImages_piersi_jpg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_piersi_jpg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("3zEN");
/* harmony import */ var _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("4XLu");
/* harmony import */ var _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _static_image_songsImages_ronnieFerrari_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("Vacu");
/* harmony import */ var _static_image_songsImages_ronnieFerrari_jpg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_ronnieFerrari_jpg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _static_image_songsImages_skaldowie_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("Rd2R");
/* harmony import */ var _static_image_songsImages_skaldowie_jpg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_skaldowie_jpg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _static_image_songsImages_slawomir_jpg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("yCjF");
/* harmony import */ var _static_image_songsImages_slawomir_jpg__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_slawomir_jpg__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _static_image_songsImages_topGirls_jpg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("PHgW");
/* harmony import */ var _static_image_songsImages_topGirls_jpg__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_topGirls_jpg__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__("KdvR");
/* harmony import */ var _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _static_image_songsImages_veegas_jpg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__("1hRU");
/* harmony import */ var _static_image_songsImages_veegas_jpg__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_veegas_jpg__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _static_image_songsImages_wilki_jpg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__("vZrh");
/* harmony import */ var _static_image_songsImages_wilki_jpg__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_wilki_jpg__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _static_image_songsImages_wojciechGasowski_jpg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__("US5F");
/* harmony import */ var _static_image_songsImages_wojciechGasowski_jpg__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_wojciechGasowski_jpg__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _static_image_songsImages_zbigniewWodecki_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__("/+Qe");
/* harmony import */ var _static_image_songsImages_zbigniewWodecki_jpg__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_zbigniewWodecki_jpg__WEBPACK_IMPORTED_MODULE_56__);















 //==============Songs images===============










































const SONGS_IMAGES = {
  abba: _static_image_songsImages_abba_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
  afterParty: _static_image_songsImages_afterParty_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
  akcent: _static_image_songsImages_akcent_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
  aniaWyszkoni: _static_image_songsImages_aniaWyszkoni_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
  boys: _static_image_songsImages_boys_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
  budkaSuflera: _static_image_songsImages_budkaSuflera_jpeg__WEBPACK_IMPORTED_MODULE_23___default.a,
  brathanki: _static_image_songsImages_brathanki_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
  buble: _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_22___default.a,
  czadoman: _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
  DAJ_TO_GLOSNIEJ: _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_25___default.a,
  DefaultSongImage: _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_26___default.a,
  electricLightOrchestra: _static_image_songsImages_electricLightOrchestra_jpg__WEBPACK_IMPORTED_MODULE_27___default.a,
  elenaGheorghe: _static_image_songsImages_elenaGheorghe_jpg__WEBPACK_IMPORTED_MODULE_28___default.a,
  enej: _static_image_songsImages_enej_jpg__WEBPACK_IMPORTED_MODULE_29___default.a,
  Fanatic: _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_30___default.a,
  freakyBoys: _static_image_songsImages_freakyBoys_jpg__WEBPACK_IMPORTED_MODULE_31___default.a,
  irenaJarocka: _static_image_songsImages_irenaJarocka_jpg__WEBPACK_IMPORTED_MODULE_32___default.a,
  jerzyPolomski: _static_image_songsImages_jerzyPolomski_jpg__WEBPACK_IMPORTED_MODULE_33___default.a,
  karinaStanek: _static_image_songsImages_karinaStanek_jpg__WEBPACK_IMPORTED_MODULE_34___default.a,
  krzysztofKrawczyk: _static_image_songsImages_krzysztofKrawczyk_jpg__WEBPACK_IMPORTED_MODULE_35___default.a,
  lobuzy: _static_image_songsImages_lobuzy_jpg__WEBPACK_IMPORTED_MODULE_36___default.a,
  lombard: _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_37___default.a,
  marcus: _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_38___default.a,
  marylaRodowicz: _static_image_songsImages_marylaRodowicz_jpg__WEBPACK_IMPORTED_MODULE_39___default.a,
  masters: _static_image_songsImages_masters_jpg__WEBPACK_IMPORTED_MODULE_40___default.a,
  mig: _static_image_songsImages_mig_jpg__WEBPACK_IMPORTED_MODULE_41___default.a,
  pawelDomagala: _static_image_songsImages_pawelDomagala_jpg__WEBPACK_IMPORTED_MODULE_42___default.a,
  perfect: _static_image_songsImages_perfect_jpg__WEBPACK_IMPORTED_MODULE_43___default.a,
  piekniIMlodzi: _static_image_songsImages_piekniIMlodzi_jpg__WEBPACK_IMPORTED_MODULE_44___default.a,
  piersi: _static_image_songsImages_piersi_jpg__WEBPACK_IMPORTED_MODULE_45___default.a,
  poparzeniKawaTrzy: _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_46___default.a,
  powerPLay: _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_47___default.a,
  ronnieFerrari: _static_image_songsImages_ronnieFerrari_jpg__WEBPACK_IMPORTED_MODULE_48___default.a,
  skaldowie: _static_image_songsImages_skaldowie_jpg__WEBPACK_IMPORTED_MODULE_49___default.a,
  slawomir: _static_image_songsImages_slawomir_jpg__WEBPACK_IMPORTED_MODULE_50___default.a,
  topGirls: _static_image_songsImages_topGirls_jpg__WEBPACK_IMPORTED_MODULE_51___default.a,
  urszula: _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_52___default.a,
  veegas: _static_image_songsImages_veegas_jpg__WEBPACK_IMPORTED_MODULE_53___default.a,
  wilki: _static_image_songsImages_wilki_jpg__WEBPACK_IMPORTED_MODULE_54___default.a,
  wojciechGasowski: _static_image_songsImages_wojciechGasowski_jpg__WEBPACK_IMPORTED_MODULE_55___default.a,
  zbigniewWodecki: _static_image_songsImages_zbigniewWodecki_jpg__WEBPACK_IMPORTED_MODULE_56___default.a
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
const STATUS = {
  BUSY: "busy",
  EMPTY: "empty",
  RESERVATION: "reservation",
  HOLIDAY: "holiday",
  UNDEFINED: "undefined"
};

/***/ }),

/***/ "XcUG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/karinaStanek.jpg";

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "YUY/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/lobuzy.jpg";

/***/ }),

/***/ "YeUX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MailOutline");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "a8vF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/jerzyPolomski.jpg";

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bsFk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/lombard.jpg";

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");
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

    if (false) {}

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

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "d5NE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/videoCardPhoto.jpeg";

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "eJVZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/pawelDomagala.jpg";

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "egv4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/logo.png";

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const is_dynamic_1 = __webpack_require__("/jkW");

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

      if (false) {}

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
        if (false) {}

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

          if (false) {} else {
            console.error(error);
          }

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

        if (false) {} // @ts-ignore pathname is always defined


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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

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
    (self.__HAS_SPR || "production" !== 'production') && Component.__NEXT_SPR) {
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

/***/ "fdMl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_1.png";

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hpry":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/LogoWKwiatach_342x300_nowe.png";

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "i72G":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/info_icon.svg";

/***/ }),

/***/ "jD8W":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "jq/c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/piersi.jpg";

/***/ }),

/***/ "jzL8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/bride.svg";

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
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

/***/ "klPJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/abba.jpg";

/***/ }),

/***/ "lgrB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "mC7h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/elenaGheorghe.jpg";

/***/ }),

/***/ "mf1M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

exports.RouterContext = _routerContext.RouterContext;

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "ngGI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/akcent.jpg";

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oYCP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_4_small.jpg";

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tI24":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/afterParty.jpg";

/***/ }),

/***/ "tUtQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/marylaRodowicz.jpg";

/***/ }),

/***/ "vVQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/leaf.svg";

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vZrh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/wilki.jpg";

/***/ }),

/***/ "wEF3":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/aniaWyszkoni.jpg";

/***/ }),

/***/ "xYJu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_3_small.jpg";

/***/ }),

/***/ "xmQw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "yCjF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/slawomir.jpg";

/***/ })

/******/ });