webpackHotUpdate("static\\development\\pages\\demo.js",{

/***/ "./src/components/PlayerCustomized/PlayerCustomized.js":
/*!*************************************************************!*\
  !*** ./src/components/PlayerCustomized/PlayerCustomized.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-media-player */ "./node_modules/react-media-player/lib/react-media-player.js");
/* harmony import */ var react_media_player__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_media_player__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mp3Player_withMediaProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mp3Player/withMediaProps */ "./src/mp3Player/withMediaProps.js");
/* harmony import */ var _TrackContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TrackContainer */ "./src/components/TrackContainer/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/VolumeUp */ "./node_modules/@material-ui/icons/VolumeUp.js");
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Album__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Album */ "./node_modules/@material-ui/icons/Album.js");
/* harmony import */ var _material_ui_icons_Album__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Album__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Image */ "./src/components/Image/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");







var _jsxFileName = "C:\\IT_projects_Edu-Lab\\arto_WWW\\www.arto.boo.pl\\src\\components\\PlayerCustomized\\PlayerCustomized.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var CurrentTime = react_media_player__WEBPACK_IMPORTED_MODULE_8__["controls"].CurrentTime,
    SeekBar = react_media_player__WEBPACK_IMPORTED_MODULE_8__["controls"].SeekBar,
    Duration = react_media_player__WEBPACK_IMPORTED_MODULE_8__["controls"].Duration,
    Volume = react_media_player__WEBPACK_IMPORTED_MODULE_8__["controls"].Volume,
    MuteUnmute = react_media_player__WEBPACK_IMPORTED_MODULE_8__["controls"].MuteUnmute;

var Panner =
/*#__PURE__*/
function () {
  function Panner(_ref) {
    var source = _ref.source,
        audioContext = _ref.audioContext,
        _ref$panningAmount = _ref.panningAmount,
        panningAmount = _ref$panningAmount === void 0 ? 0 : _ref$panningAmount;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Panner);

    this._source = source;
    this._audioContext = audioContext;
    this._initialPanningAmount = panningAmount;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Panner, [{
    key: "connect",
    value: function connect() {
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
  }, {
    key: "setPosition",
    value: function setPosition(amount) {
      this._gainLeft.gain.value = amount <= 0 ? 1 : 1 - amount;
      this._gainRight.gain.value = amount >= 0 ? 1 : 1 + amount;
    }
  }]);

  return Panner;
}();

var tracks = [{
  name: 'Do Tańca Kawałek',
  mp3Name: 'do_tanca_kawalek',
  artist: 'Poparzeni kawą trzy',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].poparzeniKawaTrzy
}, {
  name: 'Kici Kici miał',
  mp3Name: 'kici_kici_mial',
  artist: 'Marcus',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].marcus
}, {
  name: 'Konik na biegunach',
  mp3Name: 'konik_na_biegunach',
  artist: 'Urszula',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].urszula
}, {
  name: 'Mama ostrzegała',
  mp3Name: 'mama_ostrzegala',
  artist: 'Daj to głośniej',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].dajToGlosniej
}, {
  name: 'Miła ma',
  mp3Name: 'mila_ma',
  artist: 'Power Play',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].powerPLay
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
  artist: 'Michael Buble' // imgSrc: SONGS_IMAGES.Naydis,

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
  name: 'Baśka',
  mp3Name: 'Baska',
  artist: 'Wilki' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Bukiet róż',
  mp3Name: 'BukietRoz',
  artist: 'Veegas' // imgSrc: SONGS_IMAGES.Naydis,

}, {
  name: 'Byłaś dla mnie wszystkim',
  mp3Name: 'BylasDlaMnieWszystkim',
  artist: 'Poparzeni kawą trzy',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].poparzeniKawaTrzy
}, {
  name: 'Co tu się dzieje',
  mp3Name: 'CoTuSieDzieje',
  artist: 'PowerPlay',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].powerPLay
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
  artist: 'PowerPlay',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].powerPLay
}, {
  name: 'Czarownica',
  mp3Name: 'Czarownica',
  artist: 'Fanatic',
  imgSrc: _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].Fanatic
}];

var PlayerCustomized =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(PlayerCustomized, _Component);

  function PlayerCustomized() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PlayerCustomized);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(PlayerCustomized)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      actualPlayingTrackMp3Name: tracks[0].mp3Name,
      autoplay: false,
      isPlaying: false,
      actualSongImage: '',
      actualSongName: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_connectSource", function (source, audioContext) {
      _this.panner = new Panner({
        source: source,
        audioContext: audioContext
      });
      return _this.panner.connect();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "trackList", function () {
      return tracks.map(function (track) {
        return __jsx(_TrackContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: track.name,
          track: track,
          actualPlayingTrackMp3Name: _this.state.actualPlayingTrackMp3Name,
          onClickPlay: function onClickPlay() {
            return _this.setState({
              actualPlayingTrackMp3Name: track.mp3Name,
              actualSongName: track.name,
              autoplay: true,
              isPlaying: true,
              actualSongImage: track.imgSrc ? track.imgSrc : _constants__WEBPACK_IMPORTED_MODULE_11__["SONGS_IMAGES"].DefaultSongImage
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "playNextSong", function () {
      console.log('wlaczam kolejny numer');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PlayerCustomized, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        actualSongImage: tracks[0].imgSrc
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return __jsx(react_media_player__WEBPACK_IMPORTED_MODULE_8__["Media"], {
        ref: function ref(c) {
          return _this2.media = c;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("div", {
        className: classes.mainContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, __jsx("div", {
        className: classes.albumImageContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, __jsx("div", {
        className: classes.songImageContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_14__["default"], {
        imgSrc: this.state.actualSongImage,
        className: classes.actualImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Typography"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, this.state.actualSongName ? this.state.actualSongName : 'Wybierz utwor'), __jsx(_mp3Player_withMediaProps__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }), __jsx("div", {
        className: classes.seekBarContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, __jsx("div", {
        className: classes.playerTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, __jsx(CurrentTime, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), "/", __jsx(Duration, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      })), __jsx("div", {
        className: classes.seekBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, __jsx(SeekBar, {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }))), __jsx("div", {
        className: classes.actualSongPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, __jsx(react_media_player__WEBPACK_IMPORTED_MODULE_8__["Player"], {
        ref: function ref(c) {
          return _this2._player = c;
        },
        src: "/mp3/".concat(this.state.actualPlayingTrackMp3Name, ".mp3"),
        connectSource: this._connectSource,
        useAudioObject: true,
        autoPlay: this.state.autoplay,
        isPlaying: this.state.isPlaying,
        onEnded: this.playNextSong,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }))), __jsx("div", {
        className: classes.trackList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, this.trackList())));
    }
  }]);

  return PlayerCustomized;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PlayerCustomized);

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
/* harmony import */ var _static_image_LogoWKwiatach_342x300_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/image/LogoWKwiatach_342x300.png */ "./static/image/LogoWKwiatach_342x300.png");
/* harmony import */ var _static_image_LogoWKwiatach_342x300_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_image_LogoWKwiatach_342x300_png__WEBPACK_IMPORTED_MODULE_5__);
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
























var SONGS_IMAGES = {
  DefaultSongImage: _static_image_songsImages_defaultSongImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
  dajToGlosniej: _static_image_songsImages_dajToGlosniej_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
  marcus: _static_image_songsImages_marcus_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
  Naydis: _static_image_songsImages_Naydis_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
  powerPLay: _static_image_songsImages_powerPLay_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
  poparzeniKawaTrzy: _static_image_songsImages_poparzeniKawaTrzy_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
  urszula: _static_image_songsImages_urszula_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
  Fanatic: _static_image_songsImages_fanatic_jpg__WEBPACK_IMPORTED_MODULE_22___default.a
};
var IMAGE_1 = _static_image_photo_1_png__WEBPACK_IMPORTED_MODULE_0___default.a;
var IMAGE_2 = _static_image_photo_2_small_jpg__WEBPACK_IMPORTED_MODULE_1___default.a;
var IMAGE_3 = _static_image_photo_3_small_jpg__WEBPACK_IMPORTED_MODULE_2___default.a;
var IMAGE_4 = _static_image_photo_4_small_jpg__WEBPACK_IMPORTED_MODULE_3___default.a;
var LOGO = _static_image_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a;
var LOGO_ON_THE_FLOWERS = _static_image_LogoWKwiatach_342x300_png__WEBPACK_IMPORTED_MODULE_5___default.a;
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

/***/ }),

/***/ "./static/image/songsImages/fanatic.jpg":
/*!**********************************************!*\
  !*** ./static/image/songsImages/fanatic.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/image/songsImages/fanatic.jpg";

/***/ })

})
//# sourceMappingURL=demo.js.bbe6d6b087af516baf61.hot-update.js.map