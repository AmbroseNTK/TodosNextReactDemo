webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./hooks/todos.hook.js":
/*!*****************************!*\
  !*** ./hooks/todos.hook.js ***!
  \*****************************/
/*! exports provided: useTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTodos", function() { return useTodos; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storage_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.hook */ "./hooks/storage.hook.js");





var DB_NAME = "todos-next-demo-db";
function useTodos() {
  var initTaskList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      taskList = _useState[0],
      setTaskList = _useState[1];

  var _useLocalStorage = Object(_storage_hook__WEBPACK_IMPORTED_MODULE_4__["default"])(DB_NAME),
      _useLocalStorage2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useLocalStorage, 2),
      data = _useLocalStorage2[0],
      saveChanged = _useLocalStorage2[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  function jsonToArray(json) {
    var result = [];

    var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(json);

    for (var i = 0; i < keys.length; i++) {
      result.push(json[keys[i]]);
    }

    return result;
  }

  function arrayToJson(array) {
    var json = {};

    for (var i = 0; i < array.length; i++) {
      json[i] = array[i];
    }

    return json;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (data.data != undefined && !isLoaded) {
      console.log(data);
      setTaskList(jsonToArray(data.data));
      setIsLoaded(true);
    }

    if (isLoaded) {
      saveChanged({
        data: arrayToJson(taskList)
      });
    }
  }, [taskList]);

  function change(tasks) {
    setTaskList(tasks);
  }

  function addTask(task) {
    change([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(taskList), [task]));
  }

  function removeTask(pos) {
    var removed = [];

    for (var i = 0; i < taskList.length; i++) {
      if (i != pos) {
        removed.push(taskList[i]);
      }
    }

    change([].concat(removed));
  }

  function editTask(pos, handle) {
    var updated = taskList;
    updated[pos] = handle(updated[pos]);
    change(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(updated));
  }

  return [taskList, addTask, editTask, removeTask];
}

/***/ })

})
//# sourceMappingURL=index.js.18e11906ef207d821ed3.hot-update.js.map