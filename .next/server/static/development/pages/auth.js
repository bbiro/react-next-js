module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/barni/React/react-next-js/components/User.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nconst user = props => __jsx(\"div\", {\n  className: \"jsx-3102058913\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }\n}, __jsx(\"h1\", {\n  className: \"jsx-3102058913\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }\n}, props.name), __jsx(\"p\", {\n  className: \"jsx-3102058913\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, \"Age: \", props.age), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"3102058913\",\n  __self: undefined\n}, \"div.jsx-3102058913{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJuaS9SZWFjdC9yZWFjdC1uZXh0LWpzL2NvbXBvbmVudHMvVXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNZ0IsQUFHK0Isc0JBQ0ksMEJBQ2IsYUFDSyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2Jhcm5pL1JlYWN0L3JlYWN0LW5leHQtanMvY29tcG9uZW50cy9Vc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlciA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT57cHJvcHMubmFtZX08L2gxPlxuICAgIDxwPkFnZToge3Byb3BzLmFnZX08L3A+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4ICNjY2M7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcjtcbiJdfQ== */\\n/*@ sourceURL=/Users/barni/React/react-next-js/components/User.js */\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanM/NTY1OCJdLCJuYW1lcyI6WyJ1c2VyIiwicHJvcHMiLCJuYW1lIiwiYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFLQSxLQUFLLENBQUNDLElBQVgsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFTRCxLQUFLLENBQUNFLEdBQWYsQ0FGRjtBQUFBO0FBQUE7QUFBQSxxK0JBREY7O0FBZWVILG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vc2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlciA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT57cHJvcHMubmFtZX08L2gxPlxuICAgIDxwPkFnZToge3Byb3BzLmFnZX08L3A+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgZGl2IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4ICNjY2M7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/User */ \"./components/User.js\");\nvar _jsxFileName = \"/Users/barni/React/react-next-js/pages/auth/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst authIndexPage = props => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"The auth Page of \", props.appName, \" \"), __jsx(_components_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: \"Max\",\n    age: \"28\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }));\n};\n\nauthIndexPage.getInitialProps = context => {\n  console.log(context);\n  const promise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve({\n        appName: 'Super App'\n      });\n    }, 1000);\n  });\n  return promise;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authIndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2luZGV4LmpzPzZjNTUiXSwibmFtZXMiOlsiYXV0aEluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUMvQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFzQkEsS0FBSyxDQUFDQyxPQUE1QixNQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLFFBQUksRUFBQyxLQUFYO0FBQWlCLE9BQUcsRUFBQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBUEQ7O0FBU0FGLGFBQWEsQ0FBQ0csZUFBZCxHQUFpQ0MsT0FBRCxJQUFhO0FBQzNDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLFFBQU1HLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9DQyxjQUFVLENBQUMsTUFBTTtBQUNmRixhQUFPLENBQUM7QUFDTlAsZUFBTyxFQUFFO0FBREgsT0FBRCxDQUFQO0FBR0QsS0FKUyxFQUlQLElBSk8sQ0FBVjtBQUtELEdBTmUsQ0FBaEI7QUFPQSxTQUFPSyxPQUFQO0FBQ0QsQ0FWRDs7QUFZZVAsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlcic7XG5cbmNvbnN0IGF1dGhJbmRleFBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRoZSBhdXRoIFBhZ2Ugb2Yge3Byb3BzLmFwcE5hbWV9IDwvaDE+XG4gICAgICA8VXNlciBuYW1lPSdNYXgnIGFnZT0nMjgnIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5hdXRoSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIGFwcE5hbWU6ICdTdXBlciBBcHAnLFxuICAgICAgfSk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/index.js\n");

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/auth/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/barni/React/react-next-js/pages/auth/index.js */"./pages/auth/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });