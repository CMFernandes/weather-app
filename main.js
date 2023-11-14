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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeatherUI: () => (/* binding */ displayWeatherUI)\n/* harmony export */ });\nfunction displayWeatherUI(weather){\n    const location = document.querySelector(\".location\");\n    location.textContent = `${weather.city},${weather.country}`;\n\n    const icon = document.querySelector(\".icon\");\n    icon.src = weather.weatherIcon;\n\n    const currentTemp =  document.querySelector(\".current-temp\");\n    currentTemp.textContent = `${weather.todayTemp}ºC`;\n\n    const weatherText = document.querySelector(\".weather-text\");\n    weatherText.textContent = weather.weatherText;\n\n    const feelsLike = document.querySelector(\".feels-like\");\n    feelsLike.textContent = `Feels ${weather.todayFeels}ºC`;\n\n    const humidity = document.querySelector(\"#humidity\");\n    humidity.textContent = `${weather.humidity}%`;\n\n    const windSpeed = document.querySelector(\"#wind-speed\");\n    windSpeed.textContent = `${weather.windSpeed}km/h`;\n\n    const uv = document.querySelector(\"#uv\");\n    uv.textContent = weather.uv;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nfunction getLocation(){\n    const locationInput = document.querySelector(\"#location-input\");\n    const location = locationInput.value\n    ;(0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location)\n    locationInput.value = \"\";\n}\n\nconst searchBtn = document.querySelector(\"#search-btn\")\nsearchBtn.addEventListener('click', getLocation)\n\n;(0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(\"lisboa\")\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nasync function getWeatherData(location) {\n    try {\n        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4229da1fa8634657a15151120230811&q=${location}&aqi=no`);\n        const weather = await response.json();\n        const processedWeather = processWeather(weather);\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayWeatherUI)(processedWeather);\n    } catch (error) {\n        console.error(\"Error fetching weather data:\", error);\n    }\n}\n\nfunction processWeather(weather) {\n    return {\n        country: weather.location.country,\n        city: weather.location.name,\n        weatherText: weather.current.condition.text,\n        weatherIcon: weather.current.condition.icon,\n        todayTemp: weather.current.temp_c,\n        humidity: weather.current.humidity,\n        todayFeels: weather.current.feelslike_c,\n        windSpeed: weather.current.wind_kph,\n        maxTemp: weather.forecast.forecastday[0].day.maxtemp_c,\n        minTemp: weather.forecast.forecastday[0].day.mintemp_c,\n        uv: weather.forecast.forecastday[0].day.uv\n    }    \n}\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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