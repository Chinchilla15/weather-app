/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic */ "./src/modules/logic.js");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");\n\n\n\nconst form = document.getElementById("search-form");\nconst input = document.getElementById("location-search");\nconst fahrenButton = document.getElementById("fahren-button");\nconst celsiusButton = document.getElementById("celsius-button");\ncelsiusButton.style.setProperty("background", "var(--blue-color)");\n\nlet currentLocation = "San Salvador";\n\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getData)(currentLocation);\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getForecast)(currentLocation);\n\ninput.addEventListener("input", () => {\n  if (input.validity.tooShort) {\n    input.setCustomValidity("Location must have 3 or more characters");\n  } else if (/\\d/.test(input.value)) {\n    input.setCustomValidity("Invalid input: Numers are not allowed");\n  } else {\n    input.setCustomValidity("");\n  }\n  input.reportValidity();\n});\n\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getData)(input.value);\n  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getForecast)(input.value);\n  currentLocation = input.value;\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.toggleTemperatureButton)(celsiusButton, fahrenButton, "var(--blue-color)");\n});\n\nfahrenButton.addEventListener("click", (e) => {\n  e.preventDefault();\n  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getData)(currentLocation, true);\n  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getForecast)(currentLocation, true);\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.toggleTemperatureButton)(fahrenButton, celsiusButton, "var(--red-color)");\n});\n\ncelsiusButton.addEventListener("click", (e) => {\n  e.preventDefault();\n  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getData)(currentLocation, false);\n  (0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.getForecast)(currentLocation, false);\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.toggleTemperatureButton)(celsiusButton, fahrenButton, "var(--blue-color)");\n});\n\n\n//# sourceURL=webpack://project-name-here/./src/index.js?',
        );

        /***/
      },

    /***/ "./src/modules/dom.js":
      /*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   iconMap: () => (/* binding */ iconMap),\n/* harmony export */   showDataCurrent: () => (/* binding */ showDataCurrent),\n/* harmony export */   showDataForecast: () => (/* binding */ showDataForecast),\n/* harmony export */   toggleTemperatureButton: () => (/* binding */ toggleTemperatureButton)\n/* harmony export */ });\n/* eslint-disable prefer-destructuring */\n// DOM elements for current day\nconst locationName = document.getElementById("location-name");\nconst condition = document.getElementById("condition-0");\nconst temp = document.getElementById("temp");\nconst feelsLike = document.getElementById("feels-like");\nconst humidity = document.getElementById("humidity");\nconst wind = document.getElementById("wind");\nconst precipitation = document.getElementById("precipitation");\nconst uvIndex = document.getElementById("uv-index");\nconst minTemp0 = document.getElementById("min-temp-0");\nconst maxTemp0 = document.getElementById("max-temp-0");\nconst weatherIcon0 = document.getElementById("weather-icon-0");\n\n// DOM elements for forecast\nconst weatherIcon1 = document.getElementById("weather-icon-1");\nconst weatherIcon2 = document.getElementById("weather-icon-2");\nconst condition1 = document.getElementById("condition-1");\nconst minTemp1 = document.getElementById("min-temp-1");\nconst maxTemp1 = document.getElementById("max-temp-1");\nconst condition2 = document.getElementById("condition-2");\nconst minTemp2 = document.getElementById("min-temp-2");\nconst maxTemp2 = document.getElementById("max-temp-2");\n\nconst tempImg = document.getElementById("temp-img");\nconst feelsLikeImg = document.getElementById("feels-like-img");\n\nfunction showDataCurrent(data) {\n  weatherIcon0.src = `./images/${data.iconFileName}`;\n  locationName.innerHTML = `${data.name}, ${data.country}`;\n  condition.innerHTML = data.condition;\n  temp.innerHTML = data.temperatureData;\n  feelsLike.innerHTML = data.feelsLike;\n  humidity.innerHTML = data.humidity;\n  wind.innerHTML = data.windKph;\n  precipitation.innerHTML = data.precipMm;\n  uvIndex.innerHTML = data.uv;\n  tempImg.src = `./images/${data.temperatureUnit}.svg`;\n  feelsLikeImg.src = `./images/thermometer-${data.temperatureUnit}.svg`;\n}\n\nfunction showDataForecast(data) {\n  minTemp0.innerHTML = data.mintemp[0];\n  maxTemp0.innerHTML = data.maxtemp[0];\n  weatherIcon1.src = `./images/${data.iconFileName[1]}`;\n  condition1.innerHTML = data.condition[1];\n  minTemp1.innerHTML = data.mintemp[1];\n  maxTemp1.innerHTML = data.maxtemp[1];\n  weatherIcon2.src = `./images/${data.iconFileName[2]}`;\n  condition2.innerHTML = data.condition[2];\n  minTemp2.innerHTML = data.mintemp[2];\n  maxTemp2.innerHTML = data.maxtemp[2];\n}\n\nconst iconMap = {\n  1000: "clear-day.svg", // Sunny / Clear\n  1003: "partly-cloudy-day.svg", // Partly cloudy\n  1006: "cloudy.svg", // Cloudy\n  1009: "overcast.svg", // Overcast\n  1030: "overcast-day.svg", // Mist\n  1063: "rain.svg", // Patchy rain possible\n  1066: "snowflake.svg", // Patchy snow possible\n  1069: "snowflake.svg", // Patchy sleet possible\n  1072: "drizzle.svg", // Patchy freezing drizzle possible\n  1087: "thunderstorms-rain.svg", // Thundery outbreaks possible\n  1114: "snowflake.svg", // Blowing snow\n  1117: "snowflake.svg", // Blizzard\n  1135: "overcast-day.svg", // Fog\n  1147: "overcast-day.svg", // Freezing fog\n  1150: "drizzle.svg", // Patchy light drizzle\n  1153: "drizzle.svg", // Light drizzle\n  1168: "drizzle.svg", // Freezing drizzle\n  1171: "drizzle.svg", // Heavy freezing drizzle\n  1180: "rain.svg", // Patchy light rain\n  1183: "rain.svg", // Light rain\n  1186: "rain.svg", // Moderate rain at times\n  1189: "rain.svg", // Moderate rain\n  1192: "rain.svg", // Heavy rain at times\n  1195: "rain.svg", // Heavy rain\n  1198: "drizzle.svg", // Light freezing rain\n  1201: "rain.svg", // Moderate or heavy freezing rain\n  1204: "snowflake.svg", // Light sleet\n  1207: "snowflake.svg", // Moderate or heavy sleet\n  1210: "snowflake.svg", // Patchy light snow\n  1213: "snowflake.svg", // Light snow\n  1216: "snowflake.svg", // Patchy moderate snow\n  1219: "snowflake.svg", // Moderate snow\n  1222: "snowflake.svg", // Patchy heavy snow\n  1225: "snowflake.svg", // Heavy snow\n  1237: "snowflake.svg", // Ice pellets\n  1240: "rain.svg", // Light rain shower\n  1243: "rain.svg", // Moderate or heavy rain shower\n  1246: "rain.svg", // Torrential rain shower\n  1249: "snowflake.svg", // Light sleet showers\n  1252: "snowflake.svg", // Moderate or heavy sleet showers\n  1255: "snowflake.svg", // Light snow showers\n  1258: "snowflake.svg", // Moderate or heavy snow showers\n  1261: "snowflake.svg", // Light showers of ice pellets\n  1264: "snowflake.svg", // Moderate or heavy showers of ice pellets\n  1273: "thunderstorms-rain.svg", // Patchy light rain with thunder\n  1276: "thunderstorms-rain.svg", // Moderate or heavy rain with thunder\n  1279: "thunderstorms.svg", // Patchy light snow with thunder\n  1282: "thunderstorms.svg", // Moderate or heavy snow with thunder\n  // Default for missing or unmatched codes\n  default: "not-available.svg",\n};\n\nfunction toggleTemperatureButton(activeButton, inactiveButton, activeColor) {\n  inactiveButton.classList.remove("active-button");\n  inactiveButton.style.removeProperty("background");\n\n  activeButton.classList.add("active-button");\n  activeButton.style.setProperty("background", activeColor);\n}\n\n\n\n\n//# sourceURL=webpack://project-name-here/./src/modules/dom.js?',
        );

        /***/
      },

    /***/ "./src/modules/logic.js":
      /*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   getForecast: () => (/* binding */ getForecast)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");\n\n\nconst ApiKey = "59d1ace8b6504eab8cf182808240702";\n\nfunction getIconByCode(code) {\n  return _dom__WEBPACK_IMPORTED_MODULE_0__.iconMap[code] || _dom__WEBPACK_IMPORTED_MODULE_0__.iconMap.default;\n}\n\nfunction processData(data, displayF) {\n  const temperatureUnit = displayF ? "fahrenheit" : "celsius";\n  const dataObject = {\n    temperatureData: displayF ? data.current.temp_f : data.current.temp_c,\n    feelsLike: displayF ? data.current.feelslike_f : data.current.feelslike_c,\n    humidity: data.current.humidity,\n    windKph: data.current.wind_kph,\n    name: data.location.name,\n    country: data.location.country,\n    condition: data.current.condition.text,\n    uv: data.current.uv,\n    precipMm: data.current.precip_mm,\n    precipInch: data.current.precip_in,\n    iconFileName: getIconByCode(data.current.condition.code),\n    temperatureUnit,\n  };\n\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showDataCurrent)(dataObject);\n}\n\nfunction processForecastData(data, displayF) {\n  const temperatureUnit = displayF ? "fahrenheit" : "celsius";\n  const forecastDataObject = {\n    maxtemp: data.forecast.forecastday.map((day) =>\n      displayF ? day.day.maxtemp_f : day.day.maxtemp_c,\n    ),\n    mintemp: data.forecast.forecastday.map((day) =>\n      displayF ? day.day.mintemp_f : day.day.mintemp_c,\n    ),\n    condition: data.forecast.forecastday.map((day) => day.day.condition.text),\n    temperatureUnit,\n    iconFileName: data.forecast.forecastday.map((day) =>\n      getIconByCode(day.day.condition.code),\n    ),\n  };\n\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showDataForecast)(forecastDataObject);\n}\n\nasync function getData(location, displayF = false) {\n  const inputLocation = document.getElementById("location-search");\n  try {\n    const response = await fetch(\n      `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${location}`,\n      { mode: "cors" },\n    );\n    const weatherData = await response.json();\n    processData(weatherData, displayF);\n  } catch {\n    inputLocation.setCustomValidity("Invalid location. Please try again.");\n    inputLocation.reportValidity();\n  }\n}\n\nasync function getForecast(location, displayF = false) {\n  const inputLocation = document.getElementById("location-search");\n  try {\n    const response = await fetch(\n      `https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${location}&days=3`,\n      { mode: "cors" },\n    );\n    const forecastData = await response.json();\n    processForecastData(forecastData, displayF);\n  } catch {\n    inputLocation.setCustomValidity("Invalid location. Please try again.");\n    inputLocation.reportValidity();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://project-name-here/./src/modules/logic.js?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
