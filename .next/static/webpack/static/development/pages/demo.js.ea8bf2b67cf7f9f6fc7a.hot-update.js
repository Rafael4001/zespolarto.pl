webpackHotUpdate("static\\development\\pages\\demo.js",{

/***/ "./src/components/TrackContainer/TrackContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/TrackContainer/TrackContainer.js ***!
  \*********************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-media-player */ "./node_modules/react-media-player/lib/react-media-player.js");
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_media_player__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/PlayCircleFilled */ "./node_modules/@material-ui/icons/PlayCircleFilled.js");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/PauseCircleFilled */ "./node_modules/@material-ui/icons/PauseCircleFilled.js");
/* harmony import */ var _material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");







var _jsxFileName = "C:\\IT_projects_Edu-Lab\\www.zespolarto.pl\\src\\components\\TrackContainer\\TrackContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;










var TrackContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TrackContainer, _Component);

  function TrackContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TrackContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TrackContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "_handlePlayPause", function () {
      _this.props.media.playPause();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handlePlayClick", function () {
      _this.props.onClickPlay();

      _this.props.media.play();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TrackContainer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref) {
      var media = _ref.media;
      return this.props.media.isPlaying !== media.isPlaying;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          track = _this$props.track,
          actualPlayingTrackMp3Name = _this$props.actualPlayingTrackMp3Name,
          media = _this$props.media;
      console.log('media', media);
      var trackImage = track.imgSrc ? track.imgSrc : _constants__WEBPACK_IMPORTED_MODULE_14__["SONGS_IMAGES"].DefaultSongImage;
      return __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(classes.mainContainer, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, classes.activeBackground, actualPlayingTrackMp3Name === track.mp3Name)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: classes.songImage,
        onClick: this.handlePlayClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_15__["default"], {
        imgSrc: trackImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), actualPlayingTrackMp3Name === track.mp3Name && media.isPlaying ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.myButton,
        key: track.mp3Name,
        onClick: media.pause,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.buttonIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.myButton,
        key: track.mp3Name,
        onClick: this.handlePlayClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.buttonIcon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("div", {
        className: classes.trackName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, track.name), __jsx("div", {
        className: classes.trackArtistText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "(", track.artist && " - ".concat(track.artist), ")")));
    }
  }]);

  return TrackContainer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

TrackContainer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  track: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  actualPlayingTrackMp3Name: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
TrackContainer.displayName = 'TrackContainer';
/* harmony default export */ __webpack_exports__["default"] = (Object(react_media_player__WEBPACK_IMPORTED_MODULE_10__["withMediaProps"])(TrackContainer));

/***/ })

})
//# sourceMappingURL=demo.js.ea8bf2b67cf7f9f6fc7a.hot-update.js.map