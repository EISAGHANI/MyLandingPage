/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/languageDetector.js":
/*!*********************************!*\
  !*** ./lib/languageDetector.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-language-detector */ \"next-language-detector\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_language_detector__WEBPACK_IMPORTED_MODULE_0__]);\nnext_language_detector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_language_detector__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale),\n  supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales)\n}));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbGFuZ3VhZ2VEZXRlY3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQSxrRUFBZ0IsQ0FBQztFQUM5QkUsV0FBVyxFQUFFRCxnRkFEaUI7RUFFOUJJLGFBQWEsRUFBRUosMEVBQTBCSztBQUZYLENBQUQsQ0FBL0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGljYWwtdGhlbWUvLi9saWIvbGFuZ3VhZ2VEZXRlY3Rvci5qcz84MmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsYW5ndWFnZURldGVjdG9yIGZyb20gJ25leHQtbGFuZ3VhZ2UtZGV0ZWN0b3InO1xuaW1wb3J0IGkxOG5leHRDb25maWcgZnJvbSAnLi4vbmV4dC1pMThuZXh0LmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlRGV0ZWN0b3Ioe1xuICBmYWxsYmFja0xuZzogaTE4bmV4dENvbmZpZy5pMThuLmRlZmF1bHRMb2NhbGUsXG4gIHN1cHBvcnRlZExuZ3M6IGkxOG5leHRDb25maWcuaTE4bi5sb2NhbGVzLFxufSk7XG4iXSwibmFtZXMiOlsibGFuZ3VhZ2VEZXRlY3RvciIsImkxOG5leHRDb25maWciLCJmYWxsYmFja0xuZyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwic3VwcG9ydGVkTG5ncyIsImxvY2FsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/languageDetector.js\n");

/***/ }),

/***/ "./lib/redirect.js":
/*!*************************!*\
  !*** ./lib/redirect.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Redirect\": () => (/* binding */ Redirect),\n/* harmony export */   \"getRedirect\": () => (/* binding */ getRedirect),\n/* harmony export */   \"useRedirect\": () => (/* binding */ useRedirect)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languageDetector */ \"./lib/languageDetector.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_languageDetector__WEBPACK_IMPORTED_MODULE_2__]);\n_languageDetector__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst useRedirect = go => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const to = go || router.asPath; // language detection\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const detectedLng = _languageDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].detect();\n\n    if (to.startsWith('/' + detectedLng) && router.route === '/404') {\n      // prevent endless loop\n      router.replace('/' + detectedLng + router.route);\n      return;\n    }\n\n    _languageDetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cache(detectedLng);\n    router.replace('/' + detectedLng + to);\n  });\n  return null;\n};\nconst Redirect = () => {\n  useRedirect();\n  return null;\n}; // eslint-disable-next-line react/display-name\n\nconst getRedirect = to => () => {\n  useRedirect(to);\n  return null;\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVkaXJlY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNRyxXQUFXLEdBQUlDLEVBQUQsSUFBUTtFQUNqQyxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCO0VBQ0EsTUFBTUssRUFBRSxHQUFHRixFQUFFLElBQUlDLE1BQU0sQ0FBQ0UsTUFBeEIsQ0FGaUMsQ0FJakM7O0VBQ0FQLGdEQUFTLENBQUMsTUFBTTtJQUNkLE1BQU1RLFdBQVcsR0FBR04sZ0VBQUEsRUFBcEI7O0lBQ0EsSUFBSUksRUFBRSxDQUFDSSxVQUFILENBQWMsTUFBTUYsV0FBcEIsS0FBb0NILE1BQU0sQ0FBQ00sS0FBUCxLQUFpQixNQUF6RCxFQUFpRTtNQUFFO01BQ2pFTixNQUFNLENBQUNPLE9BQVAsQ0FBZSxNQUFNSixXQUFOLEdBQW9CSCxNQUFNLENBQUNNLEtBQTFDO01BQ0E7SUFDRDs7SUFFRFQsK0RBQUEsQ0FBdUJNLFdBQXZCO0lBQ0FILE1BQU0sQ0FBQ08sT0FBUCxDQUFlLE1BQU1KLFdBQU4sR0FBb0JGLEVBQW5DO0VBQ0QsQ0FUUSxDQUFUO0VBV0EsT0FBTyxJQUFQO0FBQ0QsQ0FqQk07QUFtQkEsTUFBTVEsUUFBUSxHQUFHLE1BQU07RUFDNUJYLFdBQVc7RUFDWCxPQUFPLElBQVA7QUFDRCxDQUhNLEVBS1A7O0FBQ08sTUFBTVksV0FBVyxHQUFJVCxFQUFELElBQVEsTUFBTTtFQUN2Q0gsV0FBVyxDQUFDRyxFQUFELENBQVg7RUFDQSxPQUFPLElBQVA7QUFDRCxDQUhNLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpY2FsLXRoZW1lLy4vbGliL3JlZGlyZWN0LmpzPzgzZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGxhbmd1YWdlRGV0ZWN0b3IgZnJvbSAnLi9sYW5ndWFnZURldGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IHVzZVJlZGlyZWN0ID0gKGdvKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0byA9IGdvIHx8IHJvdXRlci5hc1BhdGg7XG5cbiAgLy8gbGFuZ3VhZ2UgZGV0ZWN0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGV0ZWN0ZWRMbmcgPSBsYW5ndWFnZURldGVjdG9yLmRldGVjdCgpO1xuICAgIGlmICh0by5zdGFydHNXaXRoKCcvJyArIGRldGVjdGVkTG5nKSAmJiByb3V0ZXIucm91dGUgPT09ICcvNDA0JykgeyAvLyBwcmV2ZW50IGVuZGxlc3MgbG9vcFxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nICsgZGV0ZWN0ZWRMbmcgKyByb3V0ZXIucm91dGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxhbmd1YWdlRGV0ZWN0b3IuY2FjaGUoZGV0ZWN0ZWRMbmcpO1xuICAgIHJvdXRlci5yZXBsYWNlKCcvJyArIGRldGVjdGVkTG5nICsgdG8pO1xuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBSZWRpcmVjdCA9ICgpID0+IHtcbiAgdXNlUmVkaXJlY3QoKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG5leHBvcnQgY29uc3QgZ2V0UmVkaXJlY3QgPSAodG8pID0+ICgpID0+IHtcbiAgdXNlUmVkaXJlY3QodG8pO1xuICByZXR1cm4gbnVsbDtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwibGFuZ3VhZ2VEZXRlY3RvciIsInVzZVJlZGlyZWN0IiwiZ28iLCJyb3V0ZXIiLCJ0byIsImFzUGF0aCIsImRldGVjdGVkTG5nIiwiZGV0ZWN0Iiwic3RhcnRzV2l0aCIsInJvdXRlIiwicmVwbGFjZSIsImNhY2hlIiwiUmVkaXJlY3QiLCJnZXRSZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/redirect.js\n");

/***/ }),

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = {\n  i18n: {\n    defaultLocale: 'de',\n    locales: ['en', 'de'],\n    fallbackLng: 'de'\n  },\n  ssg: true // Set to true for Static Site Generation (SSG)\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsImZhbGxiYWNrTG5nIiwic3NnIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpY2FsLXRoZW1lLy4vbmV4dC1pMThuZXh0LmNvbmZpZy5qcz8xY2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBpMThuOiB7XG4gICAgZGVmYXVsdExvY2FsZTogJ2RlJyxcbiAgICBsb2NhbGVzOiBbJ2VuJywgJ2RlJ10sXG4gICAgZmFsbGJhY2tMbmc6ICdkZScsXG4gIH0sXG4gIHNzZzogdHJ1ZSAvLyBTZXQgdG8gdHJ1ZSBmb3IgU3RhdGljIFNpdGUgR2VuZXJhdGlvbiAoU1NHKVxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtFQUNmQyxJQUFJLEVBQUU7SUFDSkMsYUFBYSxFQUFFLElBRFg7SUFFSkMsT0FBTyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGTDtJQUdKQyxXQUFXLEVBQUU7RUFIVCxDQURTO0VBTWZDLEdBQUcsRUFBRSxJQU5VLENBTUw7O0FBTkssQ0FBakIifQ==\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/redirect */ \"./lib/redirect.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_redirect__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_redirect__WEBPACK_IMPORTED_MODULE_0__.Redirect);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsaUVBQWVBLG1EQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpY2FsLXRoZW1lLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gJy4uL2xpYi9yZWRpcmVjdCc7XG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdDtcbiJdLCJuYW1lcyI6WyJSZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "next-language-detector":
/*!*****************************************!*\
  !*** external "next-language-detector" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();