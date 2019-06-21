webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/examples.js":
/*!********************************!*\
  !*** ./components/examples.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock */ "./components/clock.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter */ "./components/counter.js");
var _jsxFileName = "/Users/xuwenliu/Desktop/ts/react-next/redux/my-next-redux/components/examples.js";





function Examples(_ref) {
  var lastUpdate = _ref.lastUpdate,
      light = _ref.light;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_clock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lastUpdate: lastUpdate,
    light: light,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

function mapStateToProps(state) {
  var lastUpdate = state.lastUpdate,
      light = state.light;
  return {
    lastUpdate: lastUpdate,
    light: light
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Examples));

/***/ })

})
//# sourceMappingURL=index.js.dcfb8886f73c1a85fcba.hot-update.js.map