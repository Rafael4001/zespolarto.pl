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
            lineNumber: 166
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
          lineNumber: 195
        },
        __self: this
      }, __jsx("div", {
        className: classes.mainContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx("div", {
        className: classes.albumImageContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("div", {
        className: classes.songImageContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_14__["default"], {
        imgSrc: this.state.actualSongImage,
        className: classes.actualImage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Typography"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, this.state.actualSongName ? this.state.actualSongName : 'Wybierz utwor'), __jsx(_mp3Player_withMediaProps__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), __jsx("div", {
        className: classes.seekBarContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx("div", {
        className: classes.playerTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, __jsx(CurrentTime, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), "/", __jsx(Duration, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })), __jsx("div", {
        className: classes.seekBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, __jsx(SeekBar, {
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }))), __jsx("div", {
        className: classes.actualSongPlayer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
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
          lineNumber: 216
        },
        __self: this
      }))), __jsx("div", {
        className: classes.trackList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, this.trackList())));
    }
  }]);

  return PlayerCustomized;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PlayerCustomized);

/***/ })

})
//# sourceMappingURL=demo.js.3b95217fdebe4e1e2eaa.hot-update.js.map