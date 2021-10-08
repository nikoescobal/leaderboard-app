/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const fetchGame = async (data) => {\n  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {\n    method: 'post',\n    headers: {\n      'Accept': 'application/json, text/plain, */*',\n      'Content-Type': 'application/json'\n    },\n    // mode: 'cors',\n    body: JSON.stringify({\n      name: 'Kill the enemy'\n    })\n  }).then(res => res.json())\n  const dataString = res.result.split(' ')[3];\n\n\n  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${dataString}/scores`, {\n    method: 'post',\n    headers: {\n      'Accept': 'application/json, text/plain, */*',\n      'Content-Type': 'application/json'\n    },\n    // mode: 'cors',\n    body: JSON.stringify(data)\n  }).then(res => res.json()).then(dat => console.log(dat))\n\n}\n\nfetchGame(data)\n\n//# sourceURL=webpack://js-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;