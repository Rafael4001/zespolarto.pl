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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7yu2");


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

/***/ "3zEN":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/poparzeniKawaTrzy.jpg";

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4PQo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/boys.jpg";

/***/ }),

/***/ "4XLu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/powerPLay.jpg";

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "69IJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/krzysztofKrawczyk.jpg";

/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "7Iui":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CalendarViewDay");

/***/ }),

/***/ "7VOf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/WojLubelskie.jpg";

/***/ }),

/***/ "7yu2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: ./src/termsJSON/terminy2020.json
var terminy2020 = __webpack_require__("rPL3");

// EXTERNAL MODULE: ./src/termsJSON/terminy2021.json
var terminy2021 = __webpack_require__("Yq4p");

// EXTERNAL MODULE: ./src/termsJSON/terminy2022.json
var terminy2022 = __webpack_require__("auUu");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/icons/EventAvailable"
var EventAvailable_ = __webpack_require__("ccHV");
var EventAvailable_default = /*#__PURE__*/__webpack_require__.n(EventAvailable_);

// EXTERNAL MODULE: external "@material-ui/icons/CalendarToday"
var CalendarToday_ = __webpack_require__("pk2j");
var CalendarToday_default = /*#__PURE__*/__webpack_require__.n(CalendarToday_);

// EXTERNAL MODULE: external "@material-ui/icons/EventBusy"
var EventBusy_ = __webpack_require__("kFLM");
var EventBusy_default = /*#__PURE__*/__webpack_require__.n(EventBusy_);

// EXTERNAL MODULE: ./src/constants.js
var constants = __webpack_require__("X7BR");

// CONCATENATED MODULE: ./src/components/CustomBodyOfMonth/CustomBodyOfMonth.js
var __jsx = external_react_default.a.createElement;








const CustomBodyOfMonth = props => {
  const {
    classes,
    day,
    description,
    hotel,
    information,
    place,
    status,
    weddingHour
  } = props;
  const classNameMain = external_classnames_default()(classes.main, {
    [classes.busy]: status === constants["u" /* STATUS */].BUSY,
    [classes.holiday]: status === constants["u" /* STATUS */].HOLIDAY,
    [classes.emptyContainer]: status === constants["u" /* STATUS */].EMPTY || constants["u" /* STATUS */].UNDEFINED
  });

  const getView = status => {
    switch (status) {
      case constants["u" /* STATUS */].BUSY:
        return __jsx("div", {
          className: external_classnames_default()(classes.info, classes.infoBusy)
        }, place);

      case constants["u" /* STATUS */].HOLIDAY:
        return __jsx("div", {
          className: external_classnames_default()(classes.info, classes.infoHoliday)
        }, "Wakacje");
    }
  };

  const getIcon = status => {
    switch (status) {
      case constants["u" /* STATUS */].BUSY:
        return __jsx(EventAvailable_default.a, {
          classes: {
            root: classes.icon
          }
        });

      case constants["u" /* STATUS */].EMPTY:
        return __jsx(CalendarToday_default.a, {
          classes: {
            root: classes.icon
          }
        });

      case constants["u" /* STATUS */].HOLIDAY:
        return __jsx(EventBusy_default.a, {
          classes: {
            root: classes.icon
          }
        });
    }
  };

  const getDetails = () => __jsx("div", {
    className: classes.rowInfo
  }, (status === constants["u" /* STATUS */].BUSY || status === constants["u" /* STATUS */].HOLIDAY) && __jsx("div", null, hotel && __jsx(Typography_default.a, {
    type: "p",
    className: classes.details
  }, __jsx("strong", null, "hotel: "), hotel), information && __jsx(Typography_default.a, {
    type: "p",
    className: classes.details
  }, __jsx("strong", null, "informacje dodatkowe: "), information), weddingHour && __jsx(Typography_default.a, {
    type: "p",
    className: classes.details
  }, __jsx("strong", null, "godz. slubu: "), weddingHour)));

  return __jsx("div", {
    className: classNameMain
  }, __jsx("div", {
    className: classes.rowContainer
  }, __jsx("div", {
    className: classes.detailsMainContainer
  }, __jsx("div", {
    className: classes.termIconContainer
  }, getIcon(status), __jsx(Typography_default.a, {
    type: "span",
    className: classes.day
  }, day)), getDetails(), __jsx(Typography_default.a, {
    type: "p",
    className: classes.details
  }, description)), __jsx("div", {
    className: classes.statusContainer
  }, getView(status))));
};

CustomBodyOfMonth.defaultProps = {
  day: '',
  description: '',
  hotel: '',
  information: '',
  place: '',
  status: '',
  weddingHour: ''
};
CustomBodyOfMonth.displayName = 'CustomBodyOfMonth';
/* harmony default export */ var CustomBodyOfMonth_CustomBodyOfMonth = (CustomBodyOfMonth);
// CONCATENATED MODULE: ./src/components/CustomBodyOfMonth/CustomBodyOfMonth.style.js




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

/* harmony default export */ var CustomBodyOfMonth_style = (Object(styles_["withStyles"])(styles)(CustomBodyOfMonth_CustomBodyOfMonth));
// CONCATENATED MODULE: ./src/components/CustomBodyOfMonth/index.js

/* harmony default export */ var components_CustomBodyOfMonth = (CustomBodyOfMonth_style);
// EXTERNAL MODULE: external "@material-ui/icons/CalendarViewDay"
var CalendarViewDay_ = __webpack_require__("7Iui");
var CalendarViewDay_default = /*#__PURE__*/__webpack_require__.n(CalendarViewDay_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./src/components/Months/Months.js

var Months_jsx = external_react_default.a.createElement;






const howMuchTermsWithStatus = (element, status) => {
  return element.status === status;
};

const Months = props => {
  const {
    classes,
    table,
    weddingAmount
  } = props;

  const getMonthsDays = days => days.map(day => Months_jsx(components_CustomBodyOfMonth, Object(esm_extends["a" /* default */])({
    key: day.day
  }, day)));

  const getMonths = months => months.map((month, id) => {
    const weddingsAmount = month.days.filter(function (element) {
      return howMuchTermsWithStatus(element, constants["u" /* STATUS */].BUSY);
    });
    return Months_jsx("li", {
      key: month.name,
      className: classes.dayContainer
    }, Months_jsx("div", {
      className: classes.monthNameContainer
    }, Months_jsx(core_["Typography"], {
      className: classes.monthNumber
    }, id + 1, " "), Months_jsx(CalendarViewDay_default.a, {
      classes: {
        root: classes.icon
      }
    }), Months_jsx(core_["Typography"], {
      className: classes.monthName
    }, month.name, " "), Months_jsx(core_["Typography"], {
      className: classes.weddingsAmount
    }, " (", weddingsAmount.length, ")")), getMonthsDays(month.days));
  });

  return Months_jsx("ul", {
    className: classes.monthContainer
  }, "Ilo\u015B\u0107 wesel: ", weddingAmount, getMonths(table));
};

Months.defaultProps = {
  weddingAmount: 0
};
Months.displayName = 'Months';
/* harmony default export */ var Months_Months = (Months);
// CONCATENATED MODULE: ./src/components/Months/Months.style.js


const Months_style_styles = {
  monthNameContainer: {
    display: 'flex',
    alignItems: 'baseline',
    backgroundColor: '#c6c6c6'
  },
  monthName: {
    fontSize: '2rem'
  },
  monthNumber: {
    fontSize: '2rem',
    marginLeft: '1rem',
    color: "#FFF"
  },
  monthContainer: {
    margin: '1rem 0',
    textDecoration: 'none',
    padding: 0
  },
  weddingsAmount: {
    fontSize: '1rem',
    color: '#56595c',
    marginLeft: '0.5rem'
  },
  dayContainer: {
    marginTop: '1rem',
    listStyle: 'none'
  },
  icon: {
    margin: '0 1rem'
  }
};
/* harmony default export */ var Months_style = (Object(styles_["withStyles"])(Months_style_styles)(Months_Months));
// CONCATENATED MODULE: ./src/components/Months/index.js

/* harmony default export */ var components_Months = (Months_style);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./src/views/Terms/TabPanel/TabPanel.js


var TabPanel_jsx = external_react_default.a.createElement;



const TabPanel = props => {
  const {
    children,
    value,
    index,
    classes
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index", "classes"]);

  return TabPanel_jsx(Typography_default.a, Object(esm_extends["a" /* default */])({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other), value === index && TabPanel_jsx("div", {
    className: classes.tabContainer
  }, children));
};

TabPanel.displayName = 'TabPanel';
/* harmony default export */ var TabPanel_TabPanel = (TabPanel);
// CONCATENATED MODULE: ./src/views/Terms/TabPanel/TabPanel.style.js



const TabPanel_style_styles = theme => ({
  tabContainer: {
    paddingTop: '2rem'
  }
});

/* harmony default export */ var TabPanel_style = (Object(styles_["withStyles"])(TabPanel_style_styles)(TabPanel_TabPanel));
// CONCATENATED MODULE: ./src/views/Terms/TabPanel/index.js

// CONCATENATED MODULE: ./src/views/Terms/Terms.js


var Terms_jsx = external_react_default.a.createElement;










const YEAR_2020_TITLE_TEXT = "2020";
const YEAR_2021_TITLE_TEXT = "2021";
const YEAR_2022_TITLE_TEXT = "2022";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const Terms_howMuchTermsWithStatus = (element, status) => {
  return element.status === status;
};

class Terms_Terms extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      value: 0
    });

    Object(defineProperty["a" /* default */])(this, "handleChange", (event, newValue) => {
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
    const years = [{
      name: YEAR_2020_TITLE_TEXT,
      details: terminy2020
    }, {
      name: YEAR_2021_TITLE_TEXT,
      details: terminy2021
    }, {
      name: YEAR_2022_TITLE_TEXT,
      details: terminy2022
    }];

    const getWeddingsYearAmount = yearDetails => {
      let allweeddings = 0;
      yearDetails.map(month => {
        const weddingsAmount = month.days.filter(function (element) {
          return Terms_howMuchTermsWithStatus(element, constants["u" /* STATUS */].BUSY);
        });
        allweeddings = allweeddings + weddingsAmount.length;
      });
      return allweeddings;
    };

    return Terms_jsx("div", {
      className: classes.root
    }, Terms_jsx(AppBar_default.a, {
      position: "fixed"
    }, Terms_jsx(Tabs_default.a, {
      value: value,
      onChange: this.handleChange,
      "aria-label": "simple tabs example"
    }, years.map((year, id) => {
      const label = `${year.name}`;
      return Terms_jsx(Tab_default.a, Object(esm_extends["a" /* default */])({
        key: year.name,
        label: label
      }, a11yProps(id)));
    }))), years.map((year, id) => {
      const weddingAmount = getWeddingsYearAmount(year.details);
      return Terms_jsx(TabPanel_style, {
        key: id,
        value: value,
        index: id
      }, Terms_jsx(components_Months, {
        table: year.details,
        weddingAmount: weddingAmount
      }));
    }));
  }

}

;
Terms_Terms.displayName = 'Terms';
/* harmony default export */ var views_Terms_Terms = (Terms_Terms);
// CONCATENATED MODULE: ./src/views/Terms/Terms.style.js



const Terms_style_styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0
  },
  tabContainer: {
    paddingTop: '2rem'
  }
});

/* harmony default export */ var Terms_style = (Object(styles_["withStyles"])(Terms_style_styles)(views_Terms_Terms));
// CONCATENATED MODULE: ./src/views/Terms/index.js

// CONCATENATED MODULE: ./pages/blablaterms.js

/* harmony default export */ var blablaterms = __webpack_exports__["default"] = (Terms_style);

/***/ }),

/***/ "8X2W":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/perfect.jpg";

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "EG94":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/defaultSongImage.jpg";

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KdvR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/urszula.jpg";

/***/ }),

/***/ "LSYQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_2_small.jpg";

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

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

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

/***/ "YUY/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/lobuzy.jpg";

/***/ }),

/***/ "Yq4p":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Styczeń\",\"days\":[{\"day\":\"02.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"09.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"16.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"23.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"30.01.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Luty\",\"days\":[{\"day\":\"06.02.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.02.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.02.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"27.02.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Marzec\",\"days\":[{\"day\":\"06.03.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.03.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.03.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"27.03.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Kwiecień\",\"days\":[{\"day\":\"03.04.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"10.04.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"17.04.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"24.04.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Maj\",\"days\":[{\"day\":\"01.05.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"08.05.2021\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"Gniecki\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"15.05.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"22.05.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"29.05.2021\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"Gniecki\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"}]},{\"name\":\"Czerwiec\",\"days\":[{\"day\":\"05.06.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.06.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.06.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.06.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Lipiec\",\"days\":[{\"day\":\"03.07.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"10.07.2021\",\"free\":false,\"place\":\"Pawłów\",\"hotel\":\"Regent\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"17.07.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"24.07.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"31.07.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Sierpien\",\"days\":[{\"day\":\"07.08.2021\",\"free\":false,\"place\":\"Mircze\",\"hotel\":\"Jaśko\",\"weekDay\":6,\"status\":\"busy\",\"information\":\"Nie będzie Rafała i Darii\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"14.08.2021\",\"free\":false,\"place\":\"\",\"hotel\":\"\",\"weekDay\":6,\"status\":\"holiday\",\"information\":\"zostawić koniecznie wolne\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"21.08.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"28.08.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Wrzesień\",\"days\":[{\"day\":\"04.09.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.09.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.09.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.09.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Październik\",\"days\":[{\"day\":\"02.10.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"09.10.2021\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"Gniecki\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"16.10.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"23.10.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"30.10.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Listopad\",\"days\":[{\"day\":\"06.11.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.11.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.11.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"27.11.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Grudzień\",\"days\":[{\"day\":\"04.12.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.12.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.12.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.12.2021\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]}]");

/***/ }),

/***/ "a8vF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/jerzyPolomski.jpg";

/***/ }),

/***/ "auUu":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Styczeń\",\"days\":[{\"day\":\"01.01.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"08.01.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"15.01.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"22.01.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"29.01.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Luty\",\"days\":[{\"day\":\"05.02.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.02.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.02.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.02.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Marzec\",\"days\":[{\"day\":\"05.03.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.03.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.03.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.03.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Kwiecień\",\"days\":[{\"day\":\"02.04.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"09.04.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"16.04.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"23.04.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"30.04.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Maj\",\"days\":[{\"day\":\"07.05.2022\",\"free\":false,\"place\":\"Bogucin\",\"hotel\":\"Dom weselny \\\"Kapama\\\"\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"yes\",\"blessingTime\":\"14.30\",\"weddingHour\":\"15.00\"},{\"day\":\"14.05.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"21.05.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"28.05.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Czerwiec\",\"days\":[{\"day\":\"04.06.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.06.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.06.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.06.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Lipiec\",\"days\":[{\"day\":\"02.07.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"09.07.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"16.07.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"23.07.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"30.07.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Sierpień\",\"days\":[{\"day\":\"06.08.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.08.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.08.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"27.08.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Wrzesień\",\"days\":[{\"day\":\"03.09.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"10.09.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"17.09.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"24.09.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Październik\",\"days\":[{\"day\":\"01.10.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"08.10.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"15.10.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"22.10.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"29.10.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Listopad\",\"days\":[{\"day\":\"05.11.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.11.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.11.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.11.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Grudzień\",\"days\":[{\"day\":\"03.12.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"10.12.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"17.12.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"24.12.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"31.12.2022\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]}]");

/***/ }),

/***/ "bsFk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/lombard.jpg";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ccHV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EventAvailable");

/***/ }),

/***/ "d5NE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/videoCardPhoto.jpeg";

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eJVZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/pawelDomagala.jpg";

/***/ }),

/***/ "egv4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/logo.png";

/***/ }),

/***/ "fdMl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_1.png";

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hpry":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/LogoWKwiatach_342x300_nowe.png";

/***/ }),

/***/ "i72G":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/info_icon.svg";

/***/ }),

/***/ "jq/c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/piersi.jpg";

/***/ }),

/***/ "jzL8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/icons/bride.svg";

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kFLM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EventBusy");

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

/***/ "mC7h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/elenaGheorghe.jpg";

/***/ }),

/***/ "ngGI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/akcent.jpg";

/***/ }),

/***/ "oYCP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/photo_4_small.jpg";

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pk2j":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CalendarToday");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rPL3":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Styczeń\",\"days\":[{\"day\":\"04.01.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.01.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.01.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.01.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Luty\",\"days\":[{\"day\":\"01.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"08.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"15.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"22.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"29.02.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Marzec\",\"days\":[{\"day\":\"07.03.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"14.03.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"21.03.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"28.03.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Kwiecień\",\"days\":[{\"day\":\"04.04.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.04.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"18.04.2020\",\"free\":true,\"place\":\"Tyszowce\",\"hotel\":\"Orfeusz\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\"},{\"day\":\"25.04.2020\",\"free\":true,\"place\":\"Zamość\",\"hotel\":\"Hotel Koronny\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"Zamość\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"16.00\"}]},{\"name\":\"Maj\",\"days\":[{\"day\":\"01.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"02.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"03.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"holiday\"},{\"day\":\"09.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"16.05.2020\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"Gniecki\",\"address\":\"ul. kolejowa\",\"status\":\"busy\"},{\"day\":\"23.05.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"30.05.2020\",\"free\":false,\"place\":\"Krasnobród\",\"hotel\":\"Karczma Zacisze\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"}]},{\"name\":\"Czerwiec\",\"days\":[{\"day\":\"06.06.2020\",\"free\":false,\"place\":\"Bogucin\",\"hotel\":\"Dwór Bogucin\",\"weekDay\":6,\"status\":\"busy\",\"blessing\":\"noInfo\",\"blessingTime\":\"noInfo\",\"weddingHour\":\"noInfo\"},{\"day\":\"11.06.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"13.06.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"20.06.2020\",\"free\":false,\"place\":\"Rozłopy (kolo Szczebrzeszyna)\",\"hotel\":\"Kamienny Zajazd\",\"address\":\"ul. Rozłopy 20\",\"status\":\"busy\"},{\"day\":\"27.06.2020\",\"free\":false,\"place\":\"Chełm\",\"hotel\":\"Dom weselny JAMBA\",\"address\":\"\",\"status\":\"busy\"}]},{\"name\":\"Lipiec\",\"days\":[{\"day\":\"04.07.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"11.07.2020\",\"free\":false,\"place\":\"Tomaszow Lub.\",\"hotel\":\"Zacisze\",\"address\":\"\",\"status\":\"busy\"},{\"day\":\"18.07.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"25.07.2020\",\"free\":false,\"place\":\"Zamość\",\"hotel\":\"Koronny\",\"address\":\"\",\"status\":\"busy\"}]},{\"name\":\"Sierpien\",\"days\":[{\"day\":\"01.08.2020\",\"free\":false,\"place\":\"Różaniec Pierwszy\",\"hotel\":\"Zajazd \\\"Gospoda\\\" \",\"address\":\"Różaniec Pierwszy 99A\",\"status\":\"busy\"},{\"day\":\"08.08.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"15.08.2020\",\"free\":true,\"status\":\"empty\"},{\"day\":\"22.08.2020\",\"free\":true,\"status\":\"empty\"},{\"day\":\"29.08.2020\",\"free\":true,\"place\":\"Boruń\",\"hotel\":\"Dom weselny \\\"Sylwia\\\"\",\"status\":\"busy\"}]},{\"name\":\"Wrzesień\",\"days\":[{\"day\":\"05.09.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.09.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.09.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.09.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Październik\",\"days\":[{\"day\":\"03.10.2020\",\"free\":false,\"place\":\"Wysokie\",\"hotel\":\"Zajazd \\\"Alfred\\\"\",\"address\":\"\",\"status\":\"busy\"},{\"day\":\"10.10.2020\",\"free\":false,\"place\":\"Hrubieszów\",\"hotel\":\"U Chłopa\",\"address\":\"\",\"status\":\"busy\"},{\"day\":\"17.10.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"24.10.2020\",\"free\":false,\"place\":\"Tyszowce\",\"hotel\":\"Szewska Pasja (sala na dole)\",\"address\":\"\",\"status\":\"busy\",\"information\":\"Szupek musi byc koniecznie na tym weselu-->p.młoda z Werbkowic\"},{\"day\":\"31.10.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Listopad\",\"days\":[{\"day\":\"07.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"14.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"21.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"28.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"id\":5,\"day\":\"31.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]},{\"name\":\"Grudzień\",\"days\":[{\"day\":\"05.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"12.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"19.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"},{\"day\":\"26.11.2020\",\"free\":true,\"place\":\"\",\"hotel\":\"\",\"status\":\"empty\"}]}]");

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

/***/ "yCjF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/slawomir.jpg";

/***/ })

/******/ });