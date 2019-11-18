webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./hooks/storage.hook.js":
/*!*******************************!*\
  !*** ./hooks/storage.hook.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLocalStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(databaseName) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isLoaded) {
      var rawData = localStorage.getItem(databaseName);
      console.log(rawData);

      if (rawData != null) {
        try {
          setData(JSON.parse(rawData));
        } catch (_unused) {
          setData({});
        }

        setIsLoaded(true);
      }
    }
  }, [data]);
  return [data, setData, isLoaded];
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false

})
//# sourceMappingURL=index.js.10c4c792fc6b30658518.hot-update.js.map