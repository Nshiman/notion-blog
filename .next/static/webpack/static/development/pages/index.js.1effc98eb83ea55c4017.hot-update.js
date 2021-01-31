webpackHotUpdate('static/development/pages/index.js', {
  /***/ './src/components/header.tsx':
    /*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ext_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ext-link */ "./src/components/ext-link.tsx");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/header.module.css */ "./src/styles/header.module.css");\n/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = "/home/rollcake-debian/notion-blog/src/components/header.tsx",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar navItems = [{\n  label: \'Home\',\n  page: \'/\'\n}, {\n  label: \'Blog\',\n  page: \'/blog\'\n}, {\n  label: \'Contact\',\n  page: \'/contact\'\n}];\nvar ogImageUrl = \'https://notion-blog.now.sh/og-image.png\';\n/* harmony default export */ __webpack_exports__["default"] = (_s(function (_ref) {\n  _s();\n\n  var _ref$titlePre = _ref.titlePre,\n      titlePre = _ref$titlePre === void 0 ? \'\' : _ref$titlePre;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),\n      pathname = _useRouter.pathname;\n\n  return __jsx("header", {\n    className: _styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx("title", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, titlePre ? "".concat(titlePre, " |") : \'\', " Comet Stone."), __jsx("meta", {\n    name: "description",\n    content: "This site introduces Eveil\'s illustrations.",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    name: "og:title",\n    content: "Comet Stone",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    property: "og:image",\n    content: ogImageUrl,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    name: "twitter:site",\n    content: "@EveilPaint",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    name: "twitter:card",\n    content: "summary_large_image",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx("meta", {\n    name: "twitter:image",\n    content: ogImageUrl,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx("ul", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, navItems.map(function (_ref2) {\n    var label = _ref2.label,\n        page = _ref2.page,\n        link = _ref2.link;\n    return __jsx("li", {\n      key: label,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, page ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: page,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }, __jsx("a", {\n      className: pathname === page ? \'active\' : undefined,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }\n    }, label)) : __jsx(_ext_link__WEBPACK_IMPORTED_MODULE_3__["default"], {\n      href: link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }, label));\n  })));\n}, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4PzA0ZGMiXSwibmFtZXMiOlsibmF2SXRlbXMiLCJsYWJlbCIsInBhZ2UiLCJvZ0ltYWdlVXJsIiwidGl0bGVQcmUiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0eWxlcyIsImhlYWRlciIsIm1hcCIsImxpbmsiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUEyRCxHQUFHLENBQ2xFO0FBQUVDLE9BQUssRUFBRSxNQUFUO0FBQWlCQyxNQUFJLEVBQUU7QUFBdkIsQ0FEa0UsRUFFbEU7QUFBRUQsT0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUksRUFBRTtBQUF2QixDQUZrRSxFQUdsRTtBQUFFRCxPQUFLLEVBQUUsU0FBVDtBQUFvQkMsTUFBSSxFQUFFO0FBQTFCLENBSGtFLENBQXBFO0FBTUEsSUFBTUMsVUFBVSxHQUFHLHlDQUFuQjtBQUVlLGtGQUF1QjtBQUFBOztBQUFBLDJCQUFwQkMsUUFBb0I7QUFBQSxNQUFwQkEsUUFBb0IsOEJBQVQsRUFBUzs7QUFBQSxtQkFDZkMsNkRBQVMsRUFETTtBQUFBLE1BQzVCQyxRQUQ0QixjQUM1QkEsUUFENEI7O0FBR3BDLFNBQ0U7QUFBUSxhQUFTLEVBQUVDLGdFQUFNLENBQUNDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFKLFFBQVEsYUFBTUEsUUFBTixVQUFxQixFQUFyQyxrQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxXQUFPLEVBQUMsNkNBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBTUU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsYUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVELFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLGFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBMEIsV0FBTyxFQUFDLHFCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLFdBQU8sRUFBRUEsVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFFBQVEsQ0FBQ1MsR0FBVCxDQUFhO0FBQUEsUUFBR1IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsUUFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsUUFBZ0JRLElBQWhCLFNBQWdCQSxJQUFoQjtBQUFBLFdBQ1o7QUFBSSxTQUFHLEVBQUVULEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyxJQUFJLEdBQ0gsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUEsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUVJLFFBQVEsS0FBS0osSUFBYixHQUFvQixRQUFwQixHQUErQlMsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVixLQURILENBREYsQ0FERyxHQU9ILE1BQUMsaURBQUQ7QUFBUyxVQUFJLEVBQUVTLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQlQsS0FBdEIsQ0FSSixDQURZO0FBQUEsR0FBYixDQURILENBYkYsQ0FERjtBQStCRCxDQWxDRDtBQUFBLFVBQ3VCSSxxREFEdkI7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRXh0TGluayBmcm9tICcuL2V4dC1saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIubW9kdWxlLmNzcydcblxuY29uc3QgbmF2SXRlbXM6IHsgbGFiZWw6IHN0cmluZzsgcGFnZT86IHN0cmluZzsgbGluaz86IHN0cmluZyB9W10gPSBbXG4gIHsgbGFiZWw6ICdIb21lJywgcGFnZTogJy8nIH0sXG4gIHsgbGFiZWw6ICdCbG9nJywgcGFnZTogJy9ibG9nJyB9LFxuICB7IGxhYmVsOiAnQ29udGFjdCcsIHBhZ2U6ICcvY29udGFjdCcgfSxcbl1cblxuY29uc3Qgb2dJbWFnZVVybCA9ICdodHRwczovL25vdGlvbi1ibG9nLm5vdy5zaC9vZy1pbWFnZS5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlUHJlID0gJycgfSkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGVQcmUgPyBgJHt0aXRsZVByZX0gfGAgOiAnJ30gQ29tZXQgU3RvbmUuPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJUaGlzIHNpdGUgaW50cm9kdWNlcyBFdmVpbCdzIGlsbHVzdHJhdGlvbnMuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkNvbWV0IFN0b25lXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQEV2ZWlsUGFpbnRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e29nSW1hZ2VVcmx9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8dWw+XG4gICAgICAgIHtuYXZJdGVtcy5tYXAoKHsgbGFiZWwsIHBhZ2UsIGxpbmsgfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgIHtwYWdlID8gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwYWdlfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSBwYWdlID8gJ2FjdGl2ZScgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEV4dExpbmsgaHJlZj17bGlua30+e2xhYmVsfTwvRXh0TGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header.tsx\n'
      )

      /***/
    },
})
