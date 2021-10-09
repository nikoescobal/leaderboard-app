/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ refreshScores)\n/* harmony export */ });\n/* harmony import */ var _scoresAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoresAPI.js */ \"./src/scoresAPI.js\");\n\n\nfunction clearScores(parentContainer) {\n  parentContainer.querySelectorAll('*').forEach((child) => child.remove());\n}\n\nfunction displayScores(data, parentContainer) {\n  let score = '';\n  data.forEach((el) => {\n    score += `<p>${el.user}: ${el.score}</p>`;\n  });\n\n  parentContainer.insertAdjacentHTML('afterbegin', score);\n}\n\nasync function refreshScores() {\n  const scoreBoard = document.getElementById('scoreboard');\n  clearScores(scoreBoard);\n  let scores = await (0,_scoresAPI_js__WEBPACK_IMPORTED_MODULE_0__.getScores)();\n  scores = scores.result.sort((a, b) => a.score - b.score);\n  scores = scores.slice(0, 10);\n\n  displayScores(scores, scoreBoard);\n}\n\n//# sourceURL=webpack://js-template/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scoresAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoresAPI.js */ \"./src/scoresAPI.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\n\n\nconst username = document.getElementById('username');\nconst score = document.getElementById('score');\nconst submit = document.getElementById('submit');\n\nwindow.onload = _helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\ndocument.getElementById('refresh').addEventListener('click', async () => {\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nsubmit.addEventListener('click', async () => {\n  await (0,_scoresAPI_js__WEBPACK_IMPORTED_MODULE_0__.postScore)(username.value, score.value);\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack://js-template/./src/index.js?");

/***/ }),

/***/ "./src/scoresAPI.js":
/*!**************************!*\
  !*** ./src/scoresAPI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postScore\": () => (/* binding */ postScore),\n/* harmony export */   \"getScores\": () => (/* binding */ getScores)\n/* harmony export */ });\nconst postScore = async (name, score) => {\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tv1zYAf6WtGRuAGhGsuk/scores', {\n    method: 'post',\n    headers: {\n      Accept: 'application/json, text/plain, */*',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      user: name,\n      score,\n    }),\n  }).then((res) => res.json()).then((data) => data);\n};\n\nconst getScores = async () => {\n  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tv1zYAf6WtGRuAGhGsuk/scores');\n  const data = await response.json();\n  return data;\n};\n\n//# sourceURL=webpack://js-template/./src/scoresAPI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;