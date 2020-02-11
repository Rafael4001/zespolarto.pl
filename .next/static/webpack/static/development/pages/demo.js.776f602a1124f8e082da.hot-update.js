webpackHotUpdate("static\\development\\pages\\demo.js",{

/***/ "./src/components/PlayerCustomized/PlayerCustomized.style.js":
/*!*******************************************************************!*\
  !*** ./src/components/PlayerCustomized/PlayerCustomized.style.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _PlayerCustomized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayerCustomized */ "./src/components/PlayerCustomized/PlayerCustomized.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");





var styles = function styles(theme) {
  return {
    mainContainer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'flex',
      flexDirection: 'column',
      marginTop: '1rem',
      marginBottom: '1rem'
    }, theme.breakpoints.up('sm'), {
      marginTop: '2rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '1rem'
    }),
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
    songImageContainer: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: '10rem',
      width: '15rem'
    }, theme.breakpoints.up('sm'), {
      width: 'auto',
      maxWidth: '30rem',
      height: 'auto',
      maxHeight: '30rem'
    }),
    trackList: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: '80vh'
    }, theme.breakpoints.up('sm'), {
      overflowY: 'auto',
      height: 'inherit'
    }),
    actualImage: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: '10rem'
    }, theme.breakpoints.up('sm'), {
      height: '20rem'
    }),
    albumImageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: "solid 1px ".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"].grey.dark),
      padding: '1rem'
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
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(_PlayerCustomized__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

})
//# sourceMappingURL=demo.js.776f602a1124f8e082da.hot-update.js.map