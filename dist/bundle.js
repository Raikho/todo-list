/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/project.svg */ "./src/assets/project.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/checkbox-unchecked.svg */ "./src/assets/checkbox-unchecked.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/checkbox-checked.svg */ "./src/assets/checkbox-checked.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400,500,700);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray2: slategrey;\n    --offwhite2: whitesmoke;\n\n    --darkBackground: #1f2937;\n    --offwhite: #f9faf8;\n    --lightGray: #e5e7eb;\n    --blue: #3882f6;\n    --darkBlue: #1f2937;\n\n    --skyBlue: #38bdf8;\n    --indigo: #05050788;\n    --indigoBrighter: #45455f88;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    color: var(--darkBlue);\n    /* font-family: 'Roboto'; */\n    font-family: Helvetica;\n    font-weight: 400;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    font-size: 14px;\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n/* ========== Project Group ========== */\n.project-group {\n    border-radius: 5px;\n    /* border: 1px dotted lightcoral; */\n    padding: 5px;\n\n    display: flex;\n    flex-direction: column;\n}\n.project-group>* {\n    border-radius: 5px;\n    /* background-color: #ff800044; */\n    padding: 2px;\n}\n\n/* ========== Project Container ========== */\n.project-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"icon .. title\";\n}\n.project-container>.icon {\n    grid-area: icon;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-color: var(--skyBlue);\n    width: 20px;\n    height: 20px;\n}\n.project-container>.title {\n    grid-area: title;\n    font-weight: 700;\n}\n.project-container[data-selected=\"true\"],\n.task-container[data-selected=\"true\"] {\n    background-color: lightgray;\n}\n.project-container>.title:hover,\n.task-container>.title:hover\n{\n    filter: brightness(3.5);\n}\n\n/* ========== Task Container ========== */\n.task-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"checkbox .. title\";\n}\n/* .sidebar .task-container>* {border: 1px dotted darkblue;} */\n.task-container>.title {\n    grid-area: title;\n    align-self: center;\n}\n.task-container>.checkbox {\n    grid-area: checkbox;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-color: var(--indigo);\n    width: 20px;\n    height: 20px;\n}\n.task-container>.checkbox[data-checked=\"true\"] {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.task-container>.checkbox:hover {\n    background-color: var(--indigoBrighter);\n}\n\n/* ========== Bottom, New Project ========== */\n.sidebar>.bot {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}\n/* ========================= Task Display ========================== */\n.card {\n    padding: 20px 0;\n    border-top: 2px solid lightgray;\n\n    /* background-color: rgba(173, 216, 230, 0.216); */\n    height: min-content;\n}\n.card:first-of-type {\n    border-top: none;\n}\n.task-display-container {\n    padding: 40px;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(min-content, 5);\n    grid-template-areas:\n        \"title\"\n        \"desc\"\n        \"dueDate\"\n        \"prio\"\n        \"delete\";\n}\n\n.task-display-container>.task-title {\n    grid-area: title;\n    font-size: 24px;\n    font-weight: 700;\n}\n#delete-task {\n    grid-area: delete;\n    background-color: lightcoral;\n    width: min-content;\n    padding: 8px 24px;\n}\n#delete-task:hover {filter: brightness(1.1);}\n/* ========================= Project Display ========================== */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;;IAEvB,yBAAyB;IACzB,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,mBAAmB;;IAEnB,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAIA;IACI,YAAY;IACZ,aAAa;IACb,WAAW;;IAEX,sBAAsB;IACtB,2BAA2B;IAC3B,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,mDAAmD;AACvD;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA,gBAAgB,wBAAwB,CAAC;AACzC,cAAc,2BAA2B,CAAC;;AAE1C,sEAAsE;AACtE,sEAAsE;AACtE;IACI,+BAA+B;IAC/B,YAAY;IACZ,YAAY;;IAEZ,iBAAiB;IACjB,6BAA6B;IAC7B,UAAU;AACd;;AAEA,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,kBAAkB;;IAElB,eAAe;IACf,kCAAkC;IAClC,6BAA6B;IAC7B,UAAU;;IAEV,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,oCAAoC;IACpC,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,wCAAwC;AACxC;IACI,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;;IAEZ,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;AAChB;;AAEA,4CAA4C;AAC5C;IACI,aAAa;IACb,mCAAmC;IACnC,oCAAoC;AACxC;AACA;IACI,eAAe;;IAEf,wBAAwB;IACxB,gBAAgB;IAChB,2DAA6C;IAC7C,mDAAqC;IACrC,gCAAgC;IAChC,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;;IAEI,2BAA2B;AAC/B;AACA;;;IAGI,uBAAuB;AAC3B;;AAEA,yCAAyC;AACzC;IACI,aAAa;IACb,mCAAmC;IACnC,wCAAwC;AAC5C;AACA,8DAA8D;AAC9D;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,mBAAmB;;IAEnB,wBAAwB;IACxB,gBAAgB;IAChB,2DAAwD;IACxD,mDAAgD;IAChD,+BAA+B;IAC/B,WAAW;IACX,YAAY;AAChB;AACA;IACI,2DAAsD;IACtD,mDAA8C;AAClD;AACA;IACI,uCAAuC;AAC3C;;AAEA,8CAA8C;AAC9C;IACI,+BAA+B;IAC/B,eAAe;IACf,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;AACvB;;AAEA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,iCAAiC;IACjC,aAAa;;IAEb,eAAe;;IAEf,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA,sEAAsE;AACtE;IACI,eAAe;IACf,+BAA+B;;IAE/B,kDAAkD;IAClD,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;;IAEb,aAAa;IACb,0BAA0B;IAC1B,0CAA0C;IAC1C;;;;;gBAKY;AAChB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,kBAAkB;IAClB,iBAAiB;AACrB;AACA,oBAAoB,uBAAuB,CAAC;AAC5C,yEAAyE","sourcesContent":[":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray2: slategrey;\n    --offwhite2: whitesmoke;\n\n    --darkBackground: #1f2937;\n    --offwhite: #f9faf8;\n    --lightGray: #e5e7eb;\n    --blue: #3882f6;\n    --darkBlue: #1f2937;\n\n    --skyBlue: #38bdf8;\n    --indigo: #05050788;\n    --indigoBrighter: #45455f88;\n}\n\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400,500,700\");\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    color: var(--darkBlue);\n    /* font-family: 'Roboto'; */\n    font-family: Helvetica;\n    font-weight: 400;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    font-size: 14px;\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n/* ========== Project Group ========== */\n.project-group {\n    border-radius: 5px;\n    /* border: 1px dotted lightcoral; */\n    padding: 5px;\n\n    display: flex;\n    flex-direction: column;\n}\n.project-group>* {\n    border-radius: 5px;\n    /* background-color: #ff800044; */\n    padding: 2px;\n}\n\n/* ========== Project Container ========== */\n.project-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"icon .. title\";\n}\n.project-container>.icon {\n    grid-area: icon;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url('assets/project.svg');\n    mask-image: url('assets/project.svg');\n    background-color: var(--skyBlue);\n    width: 20px;\n    height: 20px;\n}\n.project-container>.title {\n    grid-area: title;\n    font-weight: 700;\n}\n.project-container[data-selected=\"true\"],\n.task-container[data-selected=\"true\"] {\n    background-color: lightgray;\n}\n.project-container>.title:hover,\n.task-container>.title:hover\n{\n    filter: brightness(3.5);\n}\n\n/* ========== Task Container ========== */\n.task-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"checkbox .. title\";\n}\n/* .sidebar .task-container>* {border: 1px dotted darkblue;} */\n.task-container>.title {\n    grid-area: title;\n    align-self: center;\n}\n.task-container>.checkbox {\n    grid-area: checkbox;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url('assets/checkbox-unchecked.svg');\n    mask-image: url('assets/checkbox-unchecked.svg');\n    background-color: var(--indigo);\n    width: 20px;\n    height: 20px;\n}\n.task-container>.checkbox[data-checked=\"true\"] {\n    -webkit-mask-image: url('assets/checkbox-checked.svg');\n    mask-image: url('assets/checkbox-checked.svg');\n}\n.task-container>.checkbox:hover {\n    background-color: var(--indigoBrighter);\n}\n\n/* ========== Bottom, New Project ========== */\n.sidebar>.bot {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}\n/* ========================= Task Display ========================== */\n.card {\n    padding: 20px 0;\n    border-top: 2px solid lightgray;\n\n    /* background-color: rgba(173, 216, 230, 0.216); */\n    height: min-content;\n}\n.card:first-of-type {\n    border-top: none;\n}\n.task-display-container {\n    padding: 40px;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(min-content, 5);\n    grid-template-areas:\n        \"title\"\n        \"desc\"\n        \"dueDate\"\n        \"prio\"\n        \"delete\";\n}\n\n.task-display-container>.task-title {\n    grid-area: title;\n    font-size: 24px;\n    font-weight: 700;\n}\n#delete-task {\n    grid-area: delete;\n    background-color: lightcoral;\n    width: min-content;\n    padding: 8px 24px;\n}\n#delete-task:hover {filter: brightness(1.1);}\n/* ========================= Project Display ========================== */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentManager)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


function ContentManager(projectManager) {
    this.state = null; // empty, projectForm, projectDisplay, taskForm, taskDisplay
    this.node = document.getElementById('content'); // move to input?
    this.sidebarNode = document.querySelector('.list');
    this.projectManager = projectManager;
}
ContentManager.prototype.changeState = function(newState, item) {
    if (this.state !== newState || item !== null) {
        this.state = newState;
        this.update(item);
    }
}
ContentManager.prototype.update = function(item) {
    console.log('updating after changing state to ', this.state);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);
    switch (this.state) {
        case 'projectForm': this.createProjectForm(); break;
        case 'projectDisplay': this.createProjectDisplay(item); break;
        case 'taskForm': this.createTaskForm(item); break;
        case 'taskDisplay': this.createTaskDisplay(item); break;
        case 'empty': break;
    }
}

ContentManager.prototype.createProjectForm = function() {
    let containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['project-form-container']);
    const [_, inputNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'text', 'project-title', 'Project Title');
    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(containerNode, 'create-new-project', null, 'Create New Project');

    buttonNode.addEventListener('click', () => {
        this.projectManager.createProject(inputNode.value || 'Default Project Title');
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.createProjectDisplay = function(project) {
    let containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['project-display-container']);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['card'], 'Project Title: ' + project.name);

    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, null, 'Tasks: ');
    for (let task of project.taskList) {
        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, null, task.title);
    }

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-task', null, 'Create New Task');
    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm', project);
    });
}

ContentManager.prototype.createTaskForm = function(project) {
    let containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['task-form-container']);
    let [_, titleNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'text', 'task-title', 'Task Title');
    let [__, descNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'text', 'task-desc', 'Task Description');
    let [___, dueDateNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'date', 'task-due-date', 'Task Due Date');
    let [____, prioNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'number', 'task-prio', 'Task Priority');

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(containerNode, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        project.createTask(titleNode.value, descNode.value, dueDateNode.value, prioNode.value);
        this.updateSidebar();
    });
}

ContentManager.prototype.createTaskDisplay = function(task) {
    let containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['task-display-container']);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['task-title', 'card'], 'Title: ' + task.title);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['task-desc', 'card'], 'Description: ' + task.desc);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['task-due-date', 'card'], 'Due Date: ' + task.dueDate);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['task-prio', 'card'], 'Priority: ' + task.prio);
    // TODO: css classes

    // Delete Button
    const deleteButton = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(containerNode, 'delete-task', null, 'Delete Task');
    deleteButton.addEventListener('click', () => {
        task.delete();
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.updateSidebar = function() {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.sidebarNode);

    for (let project of this.projectManager.projectList) {
        let projectGroupNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.sidebarNode, ['project-group']);

        let projectContainerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(projectGroupNode, ['project-container']);
        let projectIconNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(projectContainerNode, ['icon']);
        let projectTitleNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(projectContainerNode, ['title'], project.name + ' #' + project.index);

        projectContainerNode.dataset.selected = project.selected;

        projectTitleNode.addEventListener('click', () => {
            project.select();
            this.updateSidebar();
            this.changeState('projectDisplay', project);
        });

        for (let task of project.taskList) {
            let taskContainerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(projectGroupNode, ['task-container']);
            let taskNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(taskContainerNode, ['title'], task.title + " #" + task.index);
            let taskCheckboxNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(taskContainerNode, ['checkbox']);

            taskCheckboxNode.dataset.checked = task.checked;
            taskContainerNode.dataset.selected = task.selected;

            taskCheckboxNode.addEventListener('click', () => {
                task.checked = !task.checked;
                this.updateSidebar();
            });
            taskNode.addEventListener('click', () => {
                task.select();
                this.updateSidebar();
                this.changeState('taskDisplay', task);
            });
        }
    }
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOM = {};

DOM.clearNode = function(node) {
    while(node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}

DOM.createNode = function(parentNode, tag, classList, textContent) {
    let node = document.createElement(tag);
    if (classList)
        for (let cls of classList)
            node.classList.add(cls);
    node.textContent = textContent;
    parentNode.appendChild(node);
    return node;
}

DOM.createDiv = function(parentNode, classList, textContent) {
   return this.createNode(parentNode, 'div', classList, textContent)
}

DOM.createLabeledInput = function(parentNode, inputType, id, textContent) {
    let labelNode = this.createNode(parentNode, 'label', null, textContent);
    labelNode.setAttribute('for', id);
    let inputNode = this.createNode(parentNode, 'input');
    inputNode.type = inputType;
    inputNode.id = id;
    return [labelNode, inputNode];
}

DOM.createButton = function(parentNode, id, classList, textContent) {
    let mergedClassList = (classList) ? ['button', ...classList] : ['button'];
    let node = this.createDiv(parentNode, mergedClassList, textContent);
    node.id = id;
    return node;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectManager)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");


function ProjectManager() {
    this.projectList = [];
    this.selectedProject = null;
}
ProjectManager.prototype.createProject = function(name) {
    console.log('creating new project with name: ', name);
    // Set index to current projectList length
    this.projectList.push(new Project(this, name, this.projectList.length));
}
ProjectManager.prototype.selectProject = function(project) {
    console.log('selected project #', project.index);
    this.selectedProject = project.index;
}
ProjectManager.prototype.clearSelection = function() {
    for (let project of this.projectList) {
        project.selected = false;
        for (let task of project.taskList) {
            task.selected = false;
        }
    }
}



function Project(manager, name, index) {
    this.name = name;   // TODO: convert name to title
    this.taskList = [];
    this.selectedTask = null;

    this.manager = manager;
    this.selected = false;
    this.index = index;
}
Project.prototype.createTask = function(title, desc, dueDate, prio) {
    this.taskList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](this, title, desc, dueDate, prio));
}
Project.prototype.selectTask = function(task) {
    console.log('selected task #', this.selectedTask);
    this.selectedTask = task.index;
}
Project.prototype.addStartingTask = function() {
    console.log('adding default starting tasks...');
    this.tasklist.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
}
Project.prototype.select = function() {
    this.manager.clearSelection();
    this.selected = true;
}
Project.prototype.deleteTask = function(index) {
    this.taskList.splice(index, 1);
    for (let i = 0; i < this.taskList.length; i++) {
        this.taskList[i].index = i;
    }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function Task(project, title, desc, dueDate, prio) {
    this.title = title || 'placeholder title';
    this.desc = desc || 'placeholder description';
    this.dueDate = dueDate || '01/01/2023';
    this.prio = prio || 0;
    this.checked = false;

    this.selected = false;
    this.project = project;
    // Set index to current taskList length
    this.index = project.taskList.length;
}
Task.prototype.select = function() {
    this.project.manager.clearSelection();
    this.selected = true;
}
Task.prototype.delete = function() {
    this.project.deleteTask(this.index);
}

/***/ }),

/***/ "./src/assets/checkbox-checked.svg":
/*!*****************************************!*\
  !*** ./src/assets/checkbox-checked.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "checkbox-checked.svg";

/***/ }),

/***/ "./src/assets/checkbox-unchecked.svg":
/*!*******************************************!*\
  !*** ./src/assets/checkbox-unchecked.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "checkbox-unchecked.svg";

/***/ }),

/***/ "./src/assets/project.svg":
/*!********************************!*\
  !*** ./src/assets/project.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "project.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ "./src/content.js");


console.log('Hello, World!');




const projectManager = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const contentManager = new _content_js__WEBPACK_IMPORTED_MODULE_2__["default"](projectManager);


document.getElementById('new-project-button').addEventListener('click', () => {
    contentManager.changeState('projectForm');
});



// INITIAL VALUES
projectManager.createProject('Main Project');
projectManager.projectList[0].createTask('First Task');
projectManager.projectList[0].createTask('Second Task');
projectManager.projectList[0].createTask('Third Task');
projectManager.createProject('Secondary Project');
projectManager.projectList[1].createTask('First Task');
projectManager.projectList[1].createTask('Second Task');

contentManager.changeState('empty');
contentManager.updateSidebar();

// START AT FIRST TASK DISPLAY
let task = projectManager.projectList[0].taskList[0];
task.select();
contentManager.updateSidebar();
contentManager.changeState('taskDisplay', task);


// DEBUG
console.log(projectManager, contentManager)

// TODO: reorganize task code location
// TODO: add icons
// TODO: add submit form button
// TODO: form validation
// TODO: style form
// TODO: add ability to click tasks
// TODO: pass node to DOM

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9COztBQUVwQjs7QUFFMEM7QUFDQTs7QUFFMUMsMkJBQTJCLG1EQUFjO0FBQ3pDLDJCQUEyQixtREFBYzs7O0FBR3pDO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvcHJvamVjdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvY2hlY2tib3gtdW5jaGVja2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImFzc2V0cy9jaGVja2JveC1jaGVja2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDB8Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1oZWFkZXI6IGRvZGdlcmJsdWU7XFxuICAgIC0tYWNjZW50OiBvcmFuZ2U7XFxuICAgIC0tbGlnaHRHcmF5Mjogc2xhdGVncmV5O1xcbiAgICAtLW9mZndoaXRlMjogd2hpdGVzbW9rZTtcXG5cXG4gICAgLS1kYXJrQmFja2dyb3VuZDogIzFmMjkzNztcXG4gICAgLS1vZmZ3aGl0ZTogI2Y5ZmFmODtcXG4gICAgLS1saWdodEdyYXk6ICNlNWU3ZWI7XFxuICAgIC0tYmx1ZTogIzM4ODJmNjtcXG4gICAgLS1kYXJrQmx1ZTogIzFmMjkzNztcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwNzg4O1xcbiAgICAtLWluZGlnb0JyaWdodGVyOiAjNDU0NTVmODg7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCAwO1xcblxcbiAgICBjb2xvcjogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAvKiBmb250LWZhbWlseTogJ1JvYm90byc7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcInNpZGViYXIgbWFpblxcXCI7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFhNTIwODg7XFxufVxcbi5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcbi5idXR0b246YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxcbi5idXR0b24uYmFjayB7YmFja2dyb3VuZC1jb2xvcjogI2ZmNDUwMDg4O31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIZWFkZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2lkZWJhciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyYXkpO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNWZyIDFmcjtcXG59XFxuLnNpZGViYXI+Lmxpc3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgeWVsbG93Z3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLyogPT09PT09PT09PSBQcm9qZWN0IEdyb3VwID09PT09PT09PT0gKi9cXG4ucHJvamVjdC1ncm91cCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Y29yYWw7ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2plY3QtZ3JvdXA+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmODAwMDQ0OyAqL1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi8qID09PT09PT09PT0gUHJvamVjdCBDb250YWluZXIgPT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaWNvbiAuLiB0aXRsZVxcXCI7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4uaWNvbiB7XFxuICAgIGdyaWQtYXJlYTogaWNvbjtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcbiAgICBtYXNrLXNpemU6IGNvdmVyO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreUJsdWUpO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+LnRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnByb2plY3QtY29udGFpbmVyW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSxcXG4udGFzay1jb250YWluZXJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+LnRpdGxlOmhvdmVyLFxcbi50YXNrLWNvbnRhaW5lcj4udGl0bGU6aG92ZXJcXG57XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygzLjUpO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFRhc2sgQ29udGFpbmVyID09PT09PT09PT0gKi9cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNoZWNrYm94IC4uIHRpdGxlXFxcIjtcXG59XFxuLyogLnNpZGViYXIgLnRhc2stY29udGFpbmVyPioge2JvcmRlcjogMXB4IGRvdHRlZCBkYXJrYmx1ZTt9ICovXFxuLnRhc2stY29udGFpbmVyPi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxuXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94W2RhdGEtY2hlY2tlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvQnJpZ2h0ZXIpO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IEJvdHRvbSwgTmV3IFByb2plY3QgPT09PT09PT09PSAqL1xcbi5zaWRlYmFyPi5ib3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgb3JhbmdlOyAqL1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTlhOWE5YWE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29udGVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5kaXYjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5kaXYjY29udGVudD4uYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09IFRhc2sgRGlzcGxheSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5jYXJkIHtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuMjE2KTsgKi9cXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcbi50YXNrLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KG1pbi1jb250ZW50LCA1KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgICAgIFxcXCJkZXNjXFxcIlxcbiAgICAgICAgXFxcImR1ZURhdGVcXFwiXFxuICAgICAgICBcXFwicHJpb1xcXCJcXG4gICAgICAgIFxcXCJkZWxldGVcXFwiO1xcbn1cXG5cXG4udGFzay1kaXNwbGF5LWNvbnRhaW5lcj4udGFzay10aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2RlbGV0ZS10YXNrIHtcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxufVxcbiNkZWxldGUtdGFzazpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gUHJvamVjdCBEaXNwbGF5ID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHVCQUF1Qjs7SUFFdkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBSUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBLGdCQUFnQix3QkFBd0IsQ0FBQztBQUN6QyxjQUFjLDJCQUEyQixDQUFDOztBQUUxQyxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixZQUFZOztJQUVaLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7O0FBRXRFO0lBQ0ksa0JBQWtCOztJQUVsQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixVQUFVOztJQUVWLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBLHdDQUF3QztBQUN4QztJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGVBQWU7O0lBRWYsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQiwyREFBNkM7SUFDN0MsbURBQXFDO0lBQ3JDLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLDJCQUEyQjtBQUMvQjtBQUNBOzs7SUFHSSx1QkFBdUI7QUFDM0I7O0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx3Q0FBd0M7QUFDNUM7QUFDQSw4REFBOEQ7QUFDOUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsMkRBQXdEO0lBQ3hELG1EQUFnRDtJQUNoRCwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJEQUFzRDtJQUN0RCxtREFBOEM7QUFDbEQ7QUFDQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQSw4Q0FBOEM7QUFDOUM7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTs7SUFFYixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLHNFQUFzRTtBQUN0RTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7O0lBRS9CLGtEQUFrRDtJQUNsRCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTs7SUFFYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDBDQUEwQztJQUMxQzs7Ozs7Z0JBS1k7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0Esb0JBQW9CLHVCQUF1QixDQUFDO0FBQzVDLHlFQUF5RVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyOiBkb2RnZXJibHVlO1xcbiAgICAtLWFjY2VudDogb3JhbmdlO1xcbiAgICAtLWxpZ2h0R3JheTI6IHNsYXRlZ3JleTtcXG4gICAgLS1vZmZ3aGl0ZTI6IHdoaXRlc21va2U7XFxuXFxuICAgIC0tZGFya0JhY2tncm91bmQ6ICMxZjI5Mzc7XFxuICAgIC0tb2Zmd2hpdGU6ICNmOWZhZjg7XFxuICAgIC0tbGlnaHRHcmF5OiAjZTVlN2ViO1xcbiAgICAtLWJsdWU6ICMzODgyZjY7XFxuICAgIC0tZGFya0JsdWU6ICMxZjI5Mzc7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDc4ODtcXG4gICAgLS1pbmRpZ29CcmlnaHRlcjogIzQ1NDU1Zjg4O1xcbn1cXG5cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMHxSb2JvdG86MzAwLDQwMCw1MDAsNzAwXFxcIik7XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvJzsgKi9cXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwic2lkZWJhciBtYWluXFxcIjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWE1MjA4ODtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuLmJ1dHRvbjphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTt9XFxuLmJ1dHRvbi5iYWNrIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAwODg7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlYWRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaWRlYmFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JheSk7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1ZnIgMWZyO1xcbn1cXG4uc2lkZWJhcj4ubGlzdCB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCB5ZWxsb3dncmVlbjsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFByb2plY3QgR3JvdXAgPT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWdyb3VwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRjb3JhbDsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdC1ncm91cD4qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDAwNDQ7ICovXFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLyogPT09PT09PT09PSBQcm9qZWN0IENvbnRhaW5lciA9PT09PT09PT09ICovXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpY29uIC4uIHRpdGxlXFxcIjtcXG59XFxuLnByb2plY3QtY29udGFpbmVyPi5pY29uIHtcXG4gICAgZ3JpZC1hcmVhOiBpY29uO1xcblxcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XFxuICAgIG1hc2stc2l6ZTogY292ZXI7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvcHJvamVjdC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvcHJvamVjdC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5Qmx1ZSk7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucHJvamVjdC1jb250YWluZXJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdLFxcbi50YXNrLWNvbnRhaW5lcltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4udGl0bGU6aG92ZXIsXFxuLnRhc2stY29udGFpbmVyPi50aXRsZTpob3ZlclxcbntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDMuNSk7XFxufVxcblxcbi8qID09PT09PT09PT0gVGFzayBDb250YWluZXIgPT09PT09PT09PSAqL1xcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggLi4gdGl0bGVcXFwiO1xcbn1cXG4vKiAuc2lkZWJhciAudGFzay1jb250YWluZXI+KiB7Ym9yZGVyOiAxcHggZG90dGVkIGRhcmtibHVlO30gKi9cXG4udGFzay1jb250YWluZXI+LnRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcbiAgICBtYXNrLXNpemU6IGNvdmVyO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2NoZWNrYm94LXVuY2hlY2tlZC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvY2hlY2tib3gtdW5jaGVja2VkLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94W2RhdGEtY2hlY2tlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9jaGVja2JveC1jaGVja2VkLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9jaGVja2JveC1jaGVja2VkLnN2ZycpO1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvQnJpZ2h0ZXIpO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IEJvdHRvbSwgTmV3IFByb2plY3QgPT09PT09PT09PSAqL1xcbi5zaWRlYmFyPi5ib3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgb3JhbmdlOyAqL1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTlhOWE5YWE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29udGVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5kaXYjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5kaXYjY29udGVudD4uYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09IFRhc2sgRGlzcGxheSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5jYXJkIHtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuMjE2KTsgKi9cXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcbi50YXNrLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNDBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KG1pbi1jb250ZW50LCA1KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJ0aXRsZVxcXCJcXG4gICAgICAgIFxcXCJkZXNjXFxcIlxcbiAgICAgICAgXFxcImR1ZURhdGVcXFwiXFxuICAgICAgICBcXFwicHJpb1xcXCJcXG4gICAgICAgIFxcXCJkZWxldGVcXFwiO1xcbn1cXG5cXG4udGFzay1kaXNwbGF5LWNvbnRhaW5lcj4udGFzay10aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2RlbGV0ZS10YXNrIHtcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XFxufVxcbiNkZWxldGUtdGFzazpob3ZlciB7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gUHJvamVjdCBEaXNwbGF5ID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBET00gZnJvbSAnLi9kb20uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50TWFuYWdlcihwcm9qZWN0TWFuYWdlcikge1xuICAgIHRoaXMuc3RhdGUgPSBudWxsOyAvLyBlbXB0eSwgcHJvamVjdEZvcm0sIHByb2plY3REaXNwbGF5LCB0YXNrRm9ybSwgdGFza0Rpc3BsYXlcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAvLyBtb3ZlIHRvIGlucHV0P1xuICAgIHRoaXMuc2lkZWJhck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICAgIHRoaXMucHJvamVjdE1hbmFnZXIgPSBwcm9qZWN0TWFuYWdlcjtcbn1cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKG5ld1N0YXRlLCBpdGVtKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IG5ld1N0YXRlIHx8IGl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB0aGlzLnVwZGF0ZShpdGVtKTtcbiAgICB9XG59XG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBhZnRlciBjaGFuZ2luZyBzdGF0ZSB0byAnLCB0aGlzLnN0YXRlKTtcbiAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ3Byb2plY3RGb3JtJzogdGhpcy5jcmVhdGVQcm9qZWN0Rm9ybSgpOyBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdERpc3BsYXknOiB0aGlzLmNyZWF0ZVByb2plY3REaXNwbGF5KGl0ZW0pOyBicmVhaztcbiAgICAgICAgY2FzZSAndGFza0Zvcm0nOiB0aGlzLmNyZWF0ZVRhc2tGb3JtKGl0ZW0pOyBicmVhaztcbiAgICAgICAgY2FzZSAndGFza0Rpc3BsYXknOiB0aGlzLmNyZWF0ZVRhc2tEaXNwbGF5KGl0ZW0pOyBicmVhaztcbiAgICAgICAgY2FzZSAnZW1wdHknOiBicmVhaztcbiAgICB9XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIFsncHJvamVjdC1mb3JtLWNvbnRhaW5lciddKTtcbiAgICBjb25zdCBbXywgaW5wdXROb2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQoY29udGFpbmVyTm9kZSwgJ3RleHQnLCAncHJvamVjdC10aXRsZScsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b24oY29udGFpbmVyTm9kZSwgJ2NyZWF0ZS1uZXctcHJvamVjdCcsIG51bGwsICdDcmVhdGUgTmV3IFByb2plY3QnKTtcblxuICAgIGJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChpbnB1dE5vZGUudmFsdWUgfHwgJ0RlZmF1bHQgUHJvamVjdCBUaXRsZScpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcbiAgICB9KTtcbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3REaXNwbGF5ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGxldCBjb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIFsncHJvamVjdC1kaXNwbGF5LWNvbnRhaW5lciddKTtcbiAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnY2FyZCddLCAnUHJvamVjdCBUaXRsZTogJyArIHByb2plY3QubmFtZSk7XG5cbiAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIG51bGwsICdUYXNrczogJyk7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgIERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgbnVsbCwgdGFzay50aXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b24odGhpcy5ub2RlLCAnY3JlYXRlLW5ldy10YXNrJywgbnVsbCwgJ0NyZWF0ZSBOZXcgVGFzaycpO1xuICAgIGJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Rhc2tGb3JtJywgcHJvamVjdCk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVUYXNrRm9ybSA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBsZXQgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ3Rhc2stZm9ybS1jb250YWluZXInXSk7XG4gICAgbGV0IFtfLCB0aXRsZU5vZGVdID0gRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dChjb250YWluZXJOb2RlLCAndGV4dCcsICd0YXNrLXRpdGxlJywgJ1Rhc2sgVGl0bGUnKTtcbiAgICBsZXQgW19fLCBkZXNjTm9kZV0gPSBET00uY3JlYXRlTGFiZWxlZElucHV0KGNvbnRhaW5lck5vZGUsICd0ZXh0JywgJ3Rhc2stZGVzYycsICdUYXNrIERlc2NyaXB0aW9uJyk7XG4gICAgbGV0IFtfX18sIGR1ZURhdGVOb2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQoY29udGFpbmVyTm9kZSwgJ2RhdGUnLCAndGFzay1kdWUtZGF0ZScsICdUYXNrIER1ZSBEYXRlJyk7XG4gICAgbGV0IFtfX19fLCBwcmlvTm9kZV0gPSBET00uY3JlYXRlTGFiZWxlZElucHV0KGNvbnRhaW5lck5vZGUsICdudW1iZXInLCAndGFzay1wcmlvJywgJ1Rhc2sgUHJpb3JpdHknKTtcblxuICAgIGNvbnN0IGJ1dHRvbk5vZGUgPSBET00uY3JlYXRlQnV0dG9uKGNvbnRhaW5lck5vZGUsICdjcmVhdGUtbmV3LXRhc2snLCBudWxsLCAnQ3JlYXRlIE5ldyBUYXNrJyk7XG5cbiAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRhc2sodGl0bGVOb2RlLnZhbHVlLCBkZXNjTm9kZS52YWx1ZSwgZHVlRGF0ZU5vZGUudmFsdWUsIHByaW9Ob2RlLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVUYXNrRGlzcGxheSA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICBsZXQgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ3Rhc2stZGlzcGxheS1jb250YWluZXInXSk7XG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ3Rhc2stdGl0bGUnLCAnY2FyZCddLCAnVGl0bGU6ICcgKyB0YXNrLnRpdGxlKTtcbiAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsndGFzay1kZXNjJywgJ2NhcmQnXSwgJ0Rlc2NyaXB0aW9uOiAnICsgdGFzay5kZXNjKTtcbiAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsndGFzay1kdWUtZGF0ZScsICdjYXJkJ10sICdEdWUgRGF0ZTogJyArIHRhc2suZHVlRGF0ZSk7XG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ3Rhc2stcHJpbycsICdjYXJkJ10sICdQcmlvcml0eTogJyArIHRhc2sucHJpbyk7XG4gICAgLy8gVE9ETzogY3NzIGNsYXNzZXNcblxuICAgIC8vIERlbGV0ZSBCdXR0b25cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBET00uY3JlYXRlQnV0dG9uKGNvbnRhaW5lck5vZGUsICdkZWxldGUtdGFzaycsIG51bGwsICdEZWxldGUgVGFzaycpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFzay5kZWxldGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2VtcHR5Jyk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTaWRlYmFyID0gZnVuY3Rpb24oKSB7XG4gICAgRE9NLmNsZWFyTm9kZSh0aGlzLnNpZGViYXJOb2RlKTtcblxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdCkge1xuICAgICAgICBsZXQgcHJvamVjdEdyb3VwTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5zaWRlYmFyTm9kZSwgWydwcm9qZWN0LWdyb3VwJ10pO1xuXG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYocHJvamVjdEdyb3VwTm9kZSwgWydwcm9qZWN0LWNvbnRhaW5lciddKTtcbiAgICAgICAgbGV0IHByb2plY3RJY29uTm9kZSA9IERPTS5jcmVhdGVEaXYocHJvamVjdENvbnRhaW5lck5vZGUsIFsnaWNvbiddKTtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZU5vZGUgPSBET00uY3JlYXRlRGl2KHByb2plY3RDb250YWluZXJOb2RlLCBbJ3RpdGxlJ10sIHByb2plY3QubmFtZSArICcgIycgKyBwcm9qZWN0LmluZGV4KTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyTm9kZS5kYXRhc2V0LnNlbGVjdGVkID0gcHJvamVjdC5zZWxlY3RlZDtcblxuICAgICAgICBwcm9qZWN0VGl0bGVOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncHJvamVjdERpc3BsYXknLCBwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgICAgICBsZXQgdGFza0NvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHByb2plY3RHcm91cE5vZGUsIFsndGFzay1jb250YWluZXInXSk7XG4gICAgICAgICAgICBsZXQgdGFza05vZGUgPSBET00uY3JlYXRlRGl2KHRhc2tDb250YWluZXJOb2RlLCBbJ3RpdGxlJ10sIHRhc2sudGl0bGUgKyBcIiAjXCIgKyB0YXNrLmluZGV4KTtcbiAgICAgICAgICAgIGxldCB0YXNrQ2hlY2tib3hOb2RlID0gRE9NLmNyZWF0ZURpdih0YXNrQ29udGFpbmVyTm9kZSwgWydjaGVja2JveCddKTtcblxuICAgICAgICAgICAgdGFza0NoZWNrYm94Tm9kZS5kYXRhc2V0LmNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyTm9kZS5kYXRhc2V0LnNlbGVjdGVkID0gdGFzay5zZWxlY3RlZDtcblxuICAgICAgICAgICAgdGFza0NoZWNrYm94Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSAhdGFzay5jaGVja2VkO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Rhc2tEaXNwbGF5JywgdGFzayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJjb25zdCBET00gPSB7fTtcblxuRE9NLmNsZWFyTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB3aGlsZShub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5ET00uY3JlYXRlTm9kZSA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIHRhZywgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChjbGFzc0xpc3QpXG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0xpc3QpXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuRE9NLmNyZWF0ZURpdiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2RpdicsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpXG59XG5cbkRPTS5jcmVhdGVMYWJlbGVkSW5wdXQgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBpbnB1dFR5cGUsIGlkLCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBsYWJlbE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2xhYmVsJywgbnVsbCwgdGV4dENvbnRlbnQpO1xuICAgIGxhYmVsTm9kZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcbiAgICBsZXQgaW5wdXROb2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdpbnB1dCcpO1xuICAgIGlucHV0Tm9kZS50eXBlID0gaW5wdXRUeXBlO1xuICAgIGlucHV0Tm9kZS5pZCA9IGlkO1xuICAgIHJldHVybiBbbGFiZWxOb2RlLCBpbnB1dE5vZGVdO1xufVxuXG5ET00uY3JlYXRlQnV0dG9uID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgaWQsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgICBsZXQgbWVyZ2VkQ2xhc3NMaXN0ID0gKGNsYXNzTGlzdCkgPyBbJ2J1dHRvbicsIC4uLmNsYXNzTGlzdF0gOiBbJ2J1dHRvbiddO1xuICAgIGxldCBub2RlID0gdGhpcy5jcmVhdGVEaXYocGFyZW50Tm9kZSwgbWVyZ2VkQ2xhc3NMaXN0LCB0ZXh0Q29udGVudCk7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBET007IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1hbmFnZXIoKSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcbn1cblByb2plY3RNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBuZXcgcHJvamVjdCB3aXRoIG5hbWU6ICcsIG5hbWUpO1xuICAgIC8vIFNldCBpbmRleCB0byBjdXJyZW50IHByb2plY3RMaXN0IGxlbmd0aFxuICAgIHRoaXMucHJvamVjdExpc3QucHVzaChuZXcgUHJvamVjdCh0aGlzLCBuYW1lLCB0aGlzLnByb2plY3RMaXN0Lmxlbmd0aCkpO1xufVxuUHJvamVjdE1hbmFnZXIucHJvdG90eXBlLnNlbGVjdFByb2plY3QgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIHByb2plY3QgIycsIHByb2plY3QuaW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdC5pbmRleDtcbn1cblByb2plY3RNYW5hZ2VyLnByb3RvdHlwZS5jbGVhclNlbGVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0TGlzdCkge1xuICAgICAgICBwcm9qZWN0LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgdGFzay5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gUHJvamVjdChtYW5hZ2VyLCBuYW1lLCBpbmRleCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7ICAgLy8gVE9ETzogY29udmVydCBuYW1lIHRvIHRpdGxlXG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRUYXNrID0gbnVsbDtcblxuICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbn1cblByb2plY3QucHJvdG90eXBlLmNyZWF0ZVRhc2sgPSBmdW5jdGlvbih0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpbykge1xuICAgIHRoaXMudGFza0xpc3QucHVzaChuZXcgVGFzayh0aGlzLCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpbykpO1xufVxuUHJvamVjdC5wcm90b3R5cGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgdGFzayAjJywgdGhpcy5zZWxlY3RlZFRhc2spO1xuICAgIHRoaXMuc2VsZWN0ZWRUYXNrID0gdGFzay5pbmRleDtcbn1cblByb2plY3QucHJvdG90eXBlLmFkZFN0YXJ0aW5nVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdhZGRpbmcgZGVmYXVsdCBzdGFydGluZyB0YXNrcy4uLicpO1xuICAgIHRoaXMudGFza2xpc3QucHVzaChuZXcgVGFzaygpKTtcbn1cblByb2plY3QucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWFuYWdlci5jbGVhclNlbGVjdGlvbigpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xufVxuUHJvamVjdC5wcm90b3R5cGUuZGVsZXRlVGFzayA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdGhpcy50YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnRhc2tMaXN0W2ldLmluZGV4ID0gaTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpbykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZSB8fCAncGxhY2Vob2xkZXIgdGl0bGUnO1xuICAgIHRoaXMuZGVzYyA9IGRlc2MgfHwgJ3BsYWNlaG9sZGVyIGRlc2NyaXB0aW9uJztcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlIHx8ICcwMS8wMS8yMDIzJztcbiAgICB0aGlzLnByaW8gPSBwcmlvIHx8IDA7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAvLyBTZXQgaW5kZXggdG8gY3VycmVudCB0YXNrTGlzdCBsZW5ndGhcbiAgICB0aGlzLmluZGV4ID0gcHJvamVjdC50YXNrTGlzdC5sZW5ndGg7XG59XG5UYXNrLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnByb2plY3QubWFuYWdlci5jbGVhclNlbGVjdGlvbigpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xufVxuVGFzay5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9qZWN0LmRlbGV0ZVRhc2sodGhpcy5pbmRleCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc29sZS5sb2coJ0hlbGxvLCBXb3JsZCEnKTtcblxuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgQ29udGVudE1hbmFnZXIgZnJvbSAnLi9jb250ZW50LmpzJztcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcbmNvbnN0IGNvbnRlbnRNYW5hZ2VyID0gbmV3IENvbnRlbnRNYW5hZ2VyKHByb2plY3RNYW5hZ2VyKTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudE1hbmFnZXIuY2hhbmdlU3RhdGUoJ3Byb2plY3RGb3JtJyk7XG59KTtcblxuXG5cbi8vIElOSVRJQUwgVkFMVUVTXG5wcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KCdNYWluIFByb2plY3QnKTtcbnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0WzBdLmNyZWF0ZVRhc2soJ0ZpcnN0IFRhc2snKTtcbnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0WzBdLmNyZWF0ZVRhc2soJ1NlY29uZCBUYXNrJyk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXS5jcmVhdGVUYXNrKCdUaGlyZCBUYXNrJyk7XG5wcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KCdTZWNvbmRhcnkgUHJvamVjdCcpO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMV0uY3JlYXRlVGFzaygnRmlyc3QgVGFzaycpO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMV0uY3JlYXRlVGFzaygnU2Vjb25kIFRhc2snKTtcblxuY29udGVudE1hbmFnZXIuY2hhbmdlU3RhdGUoJ2VtcHR5Jyk7XG5jb250ZW50TWFuYWdlci51cGRhdGVTaWRlYmFyKCk7XG5cbi8vIFNUQVJUIEFUIEZJUlNUIFRBU0sgRElTUExBWVxubGV0IHRhc2sgPSBwcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXS50YXNrTGlzdFswXTtcbnRhc2suc2VsZWN0KCk7XG5jb250ZW50TWFuYWdlci51cGRhdGVTaWRlYmFyKCk7XG5jb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgndGFza0Rpc3BsYXknLCB0YXNrKTtcblxuXG4vLyBERUJVR1xuY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIsIGNvbnRlbnRNYW5hZ2VyKVxuXG4vLyBUT0RPOiByZW9yZ2FuaXplIHRhc2sgY29kZSBsb2NhdGlvblxuLy8gVE9ETzogYWRkIGljb25zXG4vLyBUT0RPOiBhZGQgc3VibWl0IGZvcm0gYnV0dG9uXG4vLyBUT0RPOiBmb3JtIHZhbGlkYXRpb25cbi8vIFRPRE86IHN0eWxlIGZvcm1cbi8vIFRPRE86IGFkZCBhYmlsaXR5IHRvIGNsaWNrIHRhc2tzXG4vLyBUT0RPOiBwYXNzIG5vZGUgdG8gRE9NXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=