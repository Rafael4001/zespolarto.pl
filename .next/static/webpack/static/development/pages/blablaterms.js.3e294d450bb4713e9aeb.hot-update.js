webpackHotUpdate("static\\development\\pages\\blablaterms.js",{

/***/ "./src/components/CustomBodyOfMonth/CustomBodyOfMonth.js":
/*!***************************************************************!*\
  !*** ./src/components/CustomBodyOfMonth/CustomBodyOfMonth.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_EventAvailable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/EventAvailable */ "./node_modules/@material-ui/icons/EventAvailable.js");
/* harmony import */ var _material_ui_icons_EventAvailable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EventAvailable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "./node_modules/@material-ui/icons/CalendarToday.js");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_EventBusy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/EventBusy */ "./node_modules/@material-ui/icons/EventBusy.js");
/* harmony import */ var _material_ui_icons_EventBusy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EventBusy__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\CustomBodyOfMonth\\CustomBodyOfMonth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;






var empty = STATUS.EMPTY;
var busy = STATUS.BUSY;
var holiday = STATUS.HOLIDAY;

var CustomBodyOfMonth =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomBodyOfMonth, _Component);

  function CustomBodyOfMonth() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomBodyOfMonth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomBodyOfMonth)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showDetails: _this.props.showDetails //Tutaj jest do poprawy architektura TODO

    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomBodyOfMonth, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          place = _this$props.place,
          status = _this$props.status;
      var classNameMain = classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.main, (_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames, classes.busy, status === STATUS.BUSY), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames, classes.holiday, status === STATUS.HOLIDAY), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames, classes.emptyContainer, status === STATUS.EMPTY || STATUS.UNDEFINED), _classNames));

      var getView = function getView(status) {
        switch (status) {
          case busy:
            return __jsx("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.info, classes.infoBusy),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            }, place);

          case empty:
            return __jsx("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.info, classes.infoEmpty),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }, "BRAK");

          case holiday:
            return __jsx("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.info, classes.infoHoliday),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, "Wakacje");
        }
      };

      var getIcon = function getIcon(status) {
        switch (status) {
          case STATUS.BUSY:
            return __jsx(_material_ui_icons_EventAvailable__WEBPACK_IMPORTED_MODULE_10___default.a, {
              classes: {
                root: classes.icon
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            });

          case STATUS.EMPTY:
            return __jsx(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_11___default.a, {
              classes: {
                root: classes.icon
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            });

          case STATUS.HOLIDAY:
            return __jsx(_material_ui_icons_EventBusy__WEBPACK_IMPORTED_MODULE_12___default.a, {
              classes: {
                root: classes.icon
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            });
        }
      };

      function toggleDetails(item) {
        alert(item);
        this.setState(function (state, props) {
          return {
            showDetails: !state.showDetails
          };
        });
      }

      var getDetails = function getDetails() {
        return __jsx("div", {
          className: classes.rowInfo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, (_this2.props.status === STATUS.BUSY || _this2.props.status === STATUS.HOLIDAY) && __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, _this2.props.hotel && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "p",
          className: classes.details,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, "hotel: "), _this2.props.hotel), _this2.props.information && __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          type: "p",
          className: classes.details,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "informacje dodatkowe: "), _this2.props.information)));
      };

      return __jsx("div", {
        className: classNameMain // onClick={() => {
        //   toggleDetails(this.props.day)
        // }}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        className: classes.rowContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("div", {
        className: classes.detailsMainContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        className: classes.termIconContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, getIcon(this.props.status), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "span",
        className: classes.day,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.props.day)), getDetails(), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "p",
        className: classes.details,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.props.description)), __jsx("div", {
        className: classes.statusContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, getView(this.props.status))), this.props.children);
    }
  }]);

  return CustomBodyOfMonth;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

CustomBodyOfMonth.defaultProps = {
  description: '',
  hotel: '',
  place: '',
  information: ''
};
CustomBodyOfMonth.displayName = 'CustomBodyOfMonth';
/* harmony default export */ __webpack_exports__["default"] = (CustomBodyOfMonth);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomBodyOfMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CustomBodyOfMonth */ "./src/components/CustomBodyOfMonth/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CalendarViewDay */ "./node_modules/@material-ui/icons/CalendarViewDay.js");
/* harmony import */ var _material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\Months\\Months.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var STATUS = {
  BUSY: "busy",
  EMPTY: "empty",
  RESERVATION: "reservation",
  HOLIDAY: "holiday",
  UNDEFINED: "undefined"
};

var Months = function Months(props) {
  var classes = props.classes,
      table = props.table;
  console.log('table', table);

  var getMonthsDays = function getMonthsDays(days) {
    return days.map(function (day) {
      return __jsx(_CustomBodyOfMonth__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: day.day
      }, day, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }));
    });
  };

  var getMonths = function getMonths(months) {
    return months.map(function (month) {
      console.log('month', month);

      var isBusy = function isBusy(value) {
        return value.status === STATUS.EMPTY;
      };

      var ileWeselWMies = month.days.filter(isBusy);
      console.log('month', month.days);
      return __jsx("li", {
        key: month.name,
        className: classes.dayContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
        className: classes.monthName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(_material_ui_icons_CalendarViewDay__WEBPACK_IMPORTED_MODULE_4___default.a, {
        classes: {
          root: classes.icon
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), month.name), getMonthsDays(month.days));
    });
  };

  return __jsx("ul", {
    className: classes.monthContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, getMonths(table));
};

Months.defaultProps = {};
Months.displayName = 'Months';
/* harmony default export */ __webpack_exports__["default"] = (Months);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: SONGS_IMAGES, IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, LOGO, LOGO_ON_THE_FLOWERS, LOVERS, BRIDE, SMILE, MUSIC, INFO_ICON, LEAF, FACEBOOK_PAGE, LUBLIN_MAP, VIDEO_CARD_IMAGE, PHOTO_CARD_IMAGE, MAX_PAGE_WIDTH, LINKS, MENU_ITEMS, MENU_ITEM_WIDTH, COLORS, FACEBOOK, FACEBOOK_URL, RAFAL_CIESIELCZUK_LINKED_IN, MARGIN_TOP_UNDER_MENU, SCREEN_SIZE, STATUS */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
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
/* harmony import */ var _static_image_songsImages_abba_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/image/songsImages/abba.jpg */ "./static/image/songsImages/abba.jpg");
/* harmony import */ var _static_image_songsImages_abba_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_abba_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_image_songsImages_afterParty_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../static/image/songsImages/afterParty.jpg */ "./static/image/songsImages/afterParty.jpg");
/* harmony import */ var _static_image_songsImages_afterParty_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_afterParty_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_image_songsImages_akcent_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/image/songsImages/akcent.jpg */ "./static/image/songsImages/akcent.jpg");
/* harmony import */ var _static_image_songsImages_akcent_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_akcent_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_image_songsImages_aniaWyszkoni_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/image/songsImages/aniaWyszkoni.jpg */ "./static/image/songsImages/aniaWyszkoni.jpg");
/* harmony import */ var _static_image_songsImages_aniaWyszkoni_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_aniaWyszkoni_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_image_songsImages_boys_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../static/image/songsImages/boys.jpg */ "./static/image/songsImages/boys.jpg");
/* harmony import */ var _static_image_songsImages_boys_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_boys_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_image_songsImages_brathanki_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/image/songsImages/brathanki.jpg */ "./static/image/songsImages/brathanki.jpg");
/* harmony import */ var _static_image_songsImages_brathanki_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_brathanki_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/image/songsImages/buble.jpg */ "./static/image/songsImages/buble.jpg");
/* harmony import */ var _static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_buble_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_image_songsImages_budkaSuflera_jpeg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/image/songsImages/budkaSuflera.jpeg */ "./static/image/songsImages/budkaSuflera.jpeg");
/* harmony import */ var _static_image_songsImages_budkaSuflera_jpeg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_budkaSuflera_jpeg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../static/image/songsImages/czadoman.jpg */ "./static/image/songsImages/czadoman.jpg");
/* harmony import */ var _static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_czadoman_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../static/image/songsImages/dajToGlosniej.jpg */ "./static/image/songsImages/dajToGlosniej.jpg");
/* harmony import */ var _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../static/image/songsImages/defaultSongImage.jpg */ "./static/image/songsImages/defaultSongImage.jpg");
/* harmony import */ var _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _static_image_songsImages_electricLightOrchestra_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../static/image/songsImages/electricLightOrchestra.jpg */ "./static/image/songsImages/electricLightOrchestra.jpg");
/* harmony import */ var _static_image_songsImages_electricLightOrchestra_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_electricLightOrchestra_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _static_image_songsImages_elenaGheorghe_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../static/image/songsImages/elenaGheorghe.jpg */ "./static/image/songsImages/elenaGheorghe.jpg");
/* harmony import */ var _static_image_songsImages_elenaGheorghe_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_elenaGheorghe_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _static_image_songsImages_enej_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../static/image/songsImages/enej.jpg */ "./static/image/songsImages/enej.jpg");
/* harmony import */ var _static_image_songsImages_enej_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_enej_jpg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../static/image/songsImages/fanatic.jpg */ "./static/image/songsImages/fanatic.jpg");
/* harmony import */ var _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _static_image_songsImages_freakyBoys_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../static/image/songsImages/freakyBoys.jpg */ "./static/image/songsImages/freakyBoys.jpg");
/* harmony import */ var _static_image_songsImages_freakyBoys_jpg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_freakyBoys_jpg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _static_image_songsImages_irenaJarocka_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../static/image/songsImages/irenaJarocka.jpg */ "./static/image/songsImages/irenaJarocka.jpg");
/* harmony import */ var _static_image_songsImages_irenaJarocka_jpg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_irenaJarocka_jpg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _static_image_songsImages_jerzyPolomski_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../static/image/songsImages/jerzyPolomski.jpg */ "./static/image/songsImages/jerzyPolomski.jpg");
/* harmony import */ var _static_image_songsImages_jerzyPolomski_jpg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_jerzyPolomski_jpg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _static_image_songsImages_karinaStanek_jpg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../static/image/songsImages/karinaStanek.jpg */ "./static/image/songsImages/karinaStanek.jpg");
/* harmony import */ var _static_image_songsImages_karinaStanek_jpg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_karinaStanek_jpg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _static_image_songsImages_krzysztofKrawczyk_jpg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../static/image/songsImages/krzysztofKrawczyk.jpg */ "./static/image/songsImages/krzysztofKrawczyk.jpg");
/* harmony import */ var _static_image_songsImages_krzysztofKrawczyk_jpg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_krzysztofKrawczyk_jpg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _static_image_songsImages_lobuzy_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../static/image/songsImages/lobuzy.jpg */ "./static/image/songsImages/lobuzy.jpg");
/* harmony import */ var _static_image_songsImages_lobuzy_jpg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_lobuzy_jpg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../static/image/songsImages/lombard.jpg */ "./static/image/songsImages/lombard.jpg");
/* harmony import */ var _static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_lombard_jpg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../static/image/songsImages/marcus.jpg */ "./static/image/songsImages/marcus.jpg");
/* harmony import */ var _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _static_image_songsImages_marylaRodowicz_jpg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../static/image/songsImages/marylaRodowicz.jpg */ "./static/image/songsImages/marylaRodowicz.jpg");
/* harmony import */ var _static_image_songsImages_marylaRodowicz_jpg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_marylaRodowicz_jpg__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _static_image_songsImages_masters_jpg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../static/image/songsImages/masters.jpg */ "./static/image/songsImages/masters.jpg");
/* harmony import */ var _static_image_songsImages_masters_jpg__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_masters_jpg__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _static_image_songsImages_mig_jpg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../static/image/songsImages/mig.jpg */ "./static/image/songsImages/mig.jpg");
/* harmony import */ var _static_image_songsImages_mig_jpg__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_mig_jpg__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _static_image_songsImages_pawelDomagala_jpg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../static/image/songsImages/pawelDomagala.jpg */ "./static/image/songsImages/pawelDomagala.jpg");
/* harmony import */ var _static_image_songsImages_pawelDomagala_jpg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_pawelDomagala_jpg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _static_image_songsImages_perfect_jpg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../static/image/songsImages/perfect.jpg */ "./static/image/songsImages/perfect.jpg");
/* harmony import */ var _static_image_songsImages_perfect_jpg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_perfect_jpg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _static_image_songsImages_piekniIMlodzi_jpg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../static/image/songsImages/piekniIMlodzi.jpg */ "./static/image/songsImages/piekniIMlodzi.jpg");
/* harmony import */ var _static_image_songsImages_piekniIMlodzi_jpg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_piekniIMlodzi_jpg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _static_image_songsImages_piersi_jpg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../static/image/songsImages/piersi.jpg */ "./static/image/songsImages/piersi.jpg");
/* harmony import */ var _static_image_songsImages_piersi_jpg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_piersi_jpg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../static/image/songsImages/poparzeniKawaTrzy.jpg */ "./static/image/songsImages/poparzeniKawaTrzy.jpg");
/* harmony import */ var _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../static/image/songsImages/powerPLay.jpg */ "./static/image/songsImages/powerPLay.jpg");
/* harmony import */ var _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _static_image_songsImages_ronnieFerrari_jpg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../static/image/songsImages/ronnieFerrari.jpg */ "./static/image/songsImages/ronnieFerrari.jpg");
/* harmony import */ var _static_image_songsImages_ronnieFerrari_jpg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_ronnieFerrari_jpg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _static_image_songsImages_skaldowie_jpg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../static/image/songsImages/skaldowie.jpg */ "./static/image/songsImages/skaldowie.jpg");
/* harmony import */ var _static_image_songsImages_skaldowie_jpg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_skaldowie_jpg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _static_image_songsImages_slawomir_jpg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../static/image/songsImages/slawomir.jpg */ "./static/image/songsImages/slawomir.jpg");
/* harmony import */ var _static_image_songsImages_slawomir_jpg__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_slawomir_jpg__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _static_image_songsImages_topGirls_jpg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../static/image/songsImages/topGirls.jpg */ "./static/image/songsImages/topGirls.jpg");
/* harmony import */ var _static_image_songsImages_topGirls_jpg__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_topGirls_jpg__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../static/image/songsImages/urszula.jpg */ "./static/image/songsImages/urszula.jpg");
/* harmony import */ var _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _static_image_songsImages_veegas_jpg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../static/image/songsImages/veegas.jpg */ "./static/image/songsImages/veegas.jpg");
/* harmony import */ var _static_image_songsImages_veegas_jpg__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_veegas_jpg__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _static_image_songsImages_wilki_jpg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../static/image/songsImages/wilki.jpg */ "./static/image/songsImages/wilki.jpg");
/* harmony import */ var _static_image_songsImages_wilki_jpg__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_wilki_jpg__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _static_image_songsImages_wojciechGasowski_jpg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../static/image/songsImages/wojciechGasowski.jpg */ "./static/image/songsImages/wojciechGasowski.jpg");
/* harmony import */ var _static_image_songsImages_wojciechGasowski_jpg__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_wojciechGasowski_jpg__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _static_image_songsImages_zbigniewWodecki_jpg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../static/image/songsImages/zbigniewWodecki.jpg */ "./static/image/songsImages/zbigniewWodecki.jpg");
/* harmony import */ var _static_image_songsImages_zbigniewWodecki_jpg__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_static_image_songsImages_zbigniewWodecki_jpg__WEBPACK_IMPORTED_MODULE_56__);















 //==============Songs images===============










































var SONGS_IMAGES = {
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
var IMAGE_1 = _static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0___default.a;
var IMAGE_2 = _static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1___default.a;
var IMAGE_3 = _static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2___default.a;
var IMAGE_4 = _static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3___default.a;
var LOGO = _static_image_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a;
var LOGO_ON_THE_FLOWERS = _static_image_LogoWKwiatach_342x300_nowe_png__WEBPACK_IMPORTED_MODULE_5___default.a;
var LOVERS = _static_image_lovers_small_png__WEBPACK_IMPORTED_MODULE_6___default.a;
var BRIDE = _static_image_icons_bride_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
var SMILE = _static_image_icons_smile_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
var MUSIC = _static_image_icons_music_svg__WEBPACK_IMPORTED_MODULE_9___default.a;
var INFO_ICON = _static_image_icons_info_icon_svg__WEBPACK_IMPORTED_MODULE_10___default.a;
var LEAF = _static_image_icons_leaf_svg__WEBPACK_IMPORTED_MODULE_11___default.a;
var FACEBOOK_PAGE = _static_image_icons_facebookPage_svg__WEBPACK_IMPORTED_MODULE_12___default.a;
var LUBLIN_MAP = _static_image_WojLubelskie_jpg__WEBPACK_IMPORTED_MODULE_13___default.a;
var VIDEO_CARD_IMAGE = _static_image_videoCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_15___default.a;
var PHOTO_CARD_IMAGE = _static_image_GalleryCardPhoto_jpeg__WEBPACK_IMPORTED_MODULE_14___default.a;
var MAX_PAGE_WIDTH = '80rem';
var HOME = 'Home';
var PHOTO = 'Zdjęcia';
var MEDIA = 'Media';
var DEMO = 'Demo';
var OFERTA = 'Oferta';
var KONTAKT = 'Kontakt';
var KALENDARZ = 'Kalendarz';
var LINKS = {
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
var MENU_ITEMS = [{
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
var MENU_ITEM_WIDTH = 20;
var COLORS = {
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
var FACEBOOK = '/static/image/facebook_logo.svg';
var FACEBOOK_URL = 'https://www.facebook.com/Zesp%C3%B3%C5%82-ARTO-203075696487749/';
var RAFAL_CIESIELCZUK_LINKED_IN = 'https://www.linkedin.com/in/rafa%C5%82-ciesielczuk-33578391/';
var MARGIN_TOP_UNDER_MENU = '4rem';
var SCREEN_SIZE = {
  POINT_750: 750
};
var STATUS = {
  BUSY: "busy",
  EMPTY: "empty",
  RESERVATION: "reservation",
  HOLIDAY: "holiday",
  UNDEFINED: "undefined"
};

/***/ })

})
//# sourceMappingURL=blablaterms.js.3e294d450bb4713e9aeb.hot-update.js.map