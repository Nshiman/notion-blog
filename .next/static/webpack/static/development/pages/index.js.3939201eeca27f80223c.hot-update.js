webpackHotUpdate('static/development/pages/index.js', {
  /***/ './src/pages/index.tsx':
    /*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./src/components/header.tsx");\n/* harmony import */ var _styles_shared_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/shared.module.css */ "./src/styles/shared.module.css");\n/* harmony import */ var _styles_shared_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_shared_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = "/home/rollcake-debian/notion-blog/src/pages/index.tsx";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n//import Link from \'next/link\'\n\n\n/* harmony default export */ __webpack_exports__["default"] = (function () {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    titlePre: "Home",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }), __jsx("div", {\n    className: _styles_shared_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx("h1", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, "Comet Stone.")), __jsx("div", {\n    className: contactStyles.avatar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx("img", {\n    src: "/avatar.png",\n    alt: "avatar with letters JJ",\n    height: 60,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }), __jsx("div", {\n    className: _styles_shared_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }), __jsx("h2", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, "\\u69D8\\u3005\\u306A\\u845B\\u85E4\\u306E\\u4E2D\\u3067\\u751F\\u304D\\u3066\\u3044\\u304F\\u306E\\u3060\\u3002"), __jsx("div", {\n    className: "explanation",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx("h3", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, "About\\u3000"), __jsx("p", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, "\\u305D\\u3046\\u3044\\u3046\\u3053\\u3068\\u3067\\u3059\\u3088"))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsic2hhcmVkU3R5bGVzIiwibGF5b3V0IiwiY29udGFjdFN0eWxlcyIsImF2YXRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFHZTtBQUFBLFNBQ2IsbUVBQ0UsTUFBQywwREFBRDtBQUFRLFlBQVEsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUEsZ0VBQVksQ0FBQ0MsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FGRixFQUtFO0FBQUssYUFBUyxFQUFFQyxhQUFhLENBQUNDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLE9BQUcsRUFBQyx3QkFBM0I7QUFBb0QsVUFBTSxFQUFFLEVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdBO0FBQUssYUFBUyxFQUFFSCxnRUFBWSxDQUFDQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEEsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQUpGLEVBTUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBRkYsQ0FORixDQUxGLENBRGE7QUFBQSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBFeHRMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvZXh0LWxpbmsnXG5pbXBvcnQgRmVhdHVyZXMgZnJvbSAnLi4vY29tcG9uZW50cy9mZWF0dXJlcydcbmltcG9ydCBHaXRIdWIgZnJvbSAnLi4vY29tcG9uZW50cy9zdmdzL2dpdGh1YidcbmltcG9ydCBzaGFyZWRTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3NoYXJlZC5tb2R1bGUuY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPD5cbiAgICA8SGVhZGVyIHRpdGxlUHJlPVwiSG9tZVwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e3NoYXJlZFN0eWxlcy5sYXlvdXR9PlxuICAgICAgPGgxPkNvbWV0IFN0b25lLjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFjdFN0eWxlcy5hdmF0YXJ9PlxuICAgICAgPGltZyBzcmM9XCIvYXZhdGFyLnBuZ1wiIGFsdD1cImF2YXRhciB3aXRoIGxldHRlcnMgSkpcIiBoZWlnaHQ9ezYwfSAvPlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzaGFyZWRTdHlsZXMubGF5b3V0fT48L2Rpdj5cbiAgICAgIDxoMj7mp5jjgIXjgarokZvol6Tjga7kuK3jgafnlJ/jgY3jgabjgYTjgY/jga7jgaDjgII8L2gyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhbmF0aW9uXCI+XG4gICAgICAgIDxoMz5BYm91dOOAgDwvaDM+XG4gICAgICAgIDxwPuOBneOBhuOBhOOBhuOBk+OBqOOBp+OBmeOCiDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n'
      )

      /***/
    },
})
