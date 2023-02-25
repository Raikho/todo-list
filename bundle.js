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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray2: slategrey;\n    --offwhite2: whitesmoke;\n\n    --darkBackground: #1f2937;\n    --offwhite: #f9faf8;\n    --lightGray: #e5e7eb;\n    --blue: #3882f6;\n    --darkBlue: #1f2937;\n\n    --skyBlue: #38bdf8;\n    --indigo: #05050788;\n    --indigoBrighter: #45455f88;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    color: var(--darkBlue);\n    /* font-family: 'Roboto'; */\n    font-family: Helvetica;\n    font-weight: 400;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    font-size: 14px;\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n/* ========== Project Group ========== */\n.project-group {\n    border-radius: 5px;\n    /* border: 1px dotted lightcoral; */\n    padding: 5px;\n\n    display: flex;\n    flex-direction: column;\n}\n.project-group>* {\n    border-radius: 5px;\n    /* background-color: #ff800044; */\n    padding: 2px;\n}\n\n/* ========== Project Container ========== */\n.project-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"icon .. title\";\n}\n.project-container>.icon {\n    grid-area: icon;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-color: var(--skyBlue);\n    width: 20px;\n    height: 20px;\n}\n.project-container>.title {\n    grid-area: title;\n    font-weight: 700;\n}\n.project-container[data-selected=\"true\"],\n.task-container[data-selected=\"true\"] {\n    background-color: lightgray;\n}\n.project-container>.title:hover,\n.task-container>.title:hover\n{\n    filter: brightness(3.5);\n}\n\n/* ========== Task Container ========== */\n.task-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"checkbox .. title\";\n}\n/* .sidebar .task-container>* {border: 1px dotted darkblue;} */\n.task-container>.title {\n    grid-area: title;\n    align-self: center;\n}\n.task-container>.checkbox {\n    grid-area: checkbox;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-color: var(--indigo);\n    width: 20px;\n    height: 20px;\n}\n.task-container>.checkbox[data-checked=\"true\"] {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.task-container>.checkbox:hover {\n    background-color: var(--indigoBrighter);\n}\n\n/* ========== Bottom, New Project ========== */\n.sidebar>.bot {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}\n/* ========================= Task Display ========================== */\n.card {\n    padding: 10px;\n    border-bottom: 2px solid lightgray;\n\n    /* background-color: rgba(173, 216, 230, 0.216); */\n}\n.task-display-container {\n    padding: 20px;\n    /* margin-right: 20%; */\n\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 4fr 1fr 1fr;\n    grid-template-areas:\n        \"title\"\n        \"desc\"\n        \"dueDate\"\n        \"prio\"\n        \"delete\";\n    gap: 20px;\n}\n\n.task-display-container>.task-title {\n    grid-area: title;\n    font-size: 24px;\n    font-weight: 700;\n}\n#delete-task {\n    grid-area: delete;\n    background-color: lightcoral;\n    width: min-content;\n    padding: 8px 24px;\n}\n#delete-task:hover {filter: brightness(1.1);}\n/* ========================= Project Display ========================== */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,uBAAuB;IACvB,uBAAuB;;IAEvB,yBAAyB;IACzB,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;IACf,mBAAmB;;IAEnB,kBAAkB;IAClB,mBAAmB;IACnB,2BAA2B;AAC/B;;AAIA;IACI,YAAY;IACZ,aAAa;IACb,WAAW;;IAEX,sBAAsB;IACtB,2BAA2B;IAC3B,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,mDAAmD;AACvD;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA,gBAAgB,wBAAwB,CAAC;AACzC,cAAc,2BAA2B,CAAC;;AAE1C,sEAAsE;AACtE,sEAAsE;AACtE;IACI,+BAA+B;IAC/B,YAAY;IACZ,YAAY;;IAEZ,iBAAiB;IACjB,6BAA6B;IAC7B,UAAU;AACd;;AAEA,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,kBAAkB;;IAElB,eAAe;IACf,kCAAkC;IAClC,6BAA6B;IAC7B,UAAU;;IAEV,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,oCAAoC;IACpC,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,wCAAwC;AACxC;IACI,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;;IAEZ,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;AAChB;;AAEA,4CAA4C;AAC5C;IACI,aAAa;IACb,mCAAmC;IACnC,oCAAoC;AACxC;AACA;IACI,eAAe;;IAEf,wBAAwB;IACxB,gBAAgB;IAChB,2DAA6C;IAC7C,mDAAqC;IACrC,gCAAgC;IAChC,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;;IAEI,2BAA2B;AAC/B;AACA;;;IAGI,uBAAuB;AAC3B;;AAEA,yCAAyC;AACzC;IACI,aAAa;IACb,mCAAmC;IACnC,wCAAwC;AAC5C;AACA,8DAA8D;AAC9D;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,mBAAmB;;IAEnB,wBAAwB;IACxB,gBAAgB;IAChB,2DAAwD;IACxD,mDAAgD;IAChD,+BAA+B;IAC/B,WAAW;IACX,YAAY;AAChB;AACA;IACI,2DAAsD;IACtD,mDAA8C;AAClD;AACA;IACI,uCAAuC;AAC3C;;AAEA,8CAA8C;AAC9C;IACI,+BAA+B;IAC/B,eAAe;IACf,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;AACvB;;AAEA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,iCAAiC;IACjC,aAAa;;IAEb,eAAe;;IAEf,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB;AACA,sEAAsE;AACtE;IACI,aAAa;IACb,kCAAkC;;IAElC,kDAAkD;AACtD;AACA;IACI,aAAa;IACb,uBAAuB;;IAEvB,aAAa;IACb,0BAA0B;IAC1B,mCAAmC;IACnC;;;;;gBAKY;IACZ,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,kBAAkB;IAClB,iBAAiB;AACrB;AACA,oBAAoB,uBAAuB,CAAC;AAC5C,yEAAyE","sourcesContent":[":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray2: slategrey;\n    --offwhite2: whitesmoke;\n\n    --darkBackground: #1f2937;\n    --offwhite: #f9faf8;\n    --lightGray: #e5e7eb;\n    --blue: #3882f6;\n    --darkBlue: #1f2937;\n\n    --skyBlue: #38bdf8;\n    --indigo: #05050788;\n    --indigoBrighter: #45455f88;\n}\n\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400,500,700\");\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    color: var(--darkBlue);\n    /* font-family: 'Roboto'; */\n    font-family: Helvetica;\n    font-weight: 400;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    font-size: 14px;\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n/* ========== Project Group ========== */\n.project-group {\n    border-radius: 5px;\n    /* border: 1px dotted lightcoral; */\n    padding: 5px;\n\n    display: flex;\n    flex-direction: column;\n}\n.project-group>* {\n    border-radius: 5px;\n    /* background-color: #ff800044; */\n    padding: 2px;\n}\n\n/* ========== Project Container ========== */\n.project-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"icon .. title\";\n}\n.project-container>.icon {\n    grid-area: icon;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url('assets/project.svg');\n    mask-image: url('assets/project.svg');\n    background-color: var(--skyBlue);\n    width: 20px;\n    height: 20px;\n}\n.project-container>.title {\n    grid-area: title;\n    font-weight: 700;\n}\n.project-container[data-selected=\"true\"],\n.task-container[data-selected=\"true\"] {\n    background-color: lightgray;\n}\n.project-container>.title:hover,\n.task-container>.title:hover\n{\n    filter: brightness(3.5);\n}\n\n/* ========== Task Container ========== */\n.task-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"checkbox .. title\";\n}\n/* .sidebar .task-container>* {border: 1px dotted darkblue;} */\n.task-container>.title {\n    grid-area: title;\n    align-self: center;\n}\n.task-container>.checkbox {\n    grid-area: checkbox;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url('assets/checkbox-unchecked.svg');\n    mask-image: url('assets/checkbox-unchecked.svg');\n    background-color: var(--indigo);\n    width: 20px;\n    height: 20px;\n}\n.task-container>.checkbox[data-checked=\"true\"] {\n    -webkit-mask-image: url('assets/checkbox-checked.svg');\n    mask-image: url('assets/checkbox-checked.svg');\n}\n.task-container>.checkbox:hover {\n    background-color: var(--indigoBrighter);\n}\n\n/* ========== Bottom, New Project ========== */\n.sidebar>.bot {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}\n/* ========================= Task Display ========================== */\n.card {\n    padding: 10px;\n    border-bottom: 2px solid lightgray;\n\n    /* background-color: rgba(173, 216, 230, 0.216); */\n}\n.task-display-container {\n    padding: 20px;\n    /* margin-right: 20%; */\n\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr 4fr 1fr 1fr;\n    grid-template-areas:\n        \"title\"\n        \"desc\"\n        \"dueDate\"\n        \"prio\"\n        \"delete\";\n    gap: 20px;\n}\n\n.task-display-container>.task-title {\n    grid-area: title;\n    font-size: 24px;\n    font-weight: 700;\n}\n#delete-task {\n    grid-area: delete;\n    background-color: lightcoral;\n    width: min-content;\n    padding: 8px 24px;\n}\n#delete-task:hover {filter: brightness(1.1);}\n/* ========================= Project Display ========================== */"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXFDO0FBQ2pGLDRDQUE0Qyx5SUFBZ0Q7QUFDNUYsNENBQTRDLHFJQUE4QztBQUMxRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlJQUF5STtBQUN6SSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCwyQkFBMkIsdUJBQXVCLDhCQUE4Qiw4QkFBOEIsa0NBQWtDLDBCQUEwQiwyQkFBMkIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsMEJBQTBCLGtDQUFrQyxHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQixrQkFBa0IsK0JBQStCLGdDQUFnQywrQkFBK0IsdUJBQXVCLHNCQUFzQixzQkFBc0IscUNBQXFDLG1DQUFtQyw4REFBOEQsR0FBRyxhQUFhLHdCQUF3Qix5QkFBeUIsa0NBQWtDLEdBQUcsaUJBQWlCLGtDQUFrQyxHQUFHLGtCQUFrQiwwQkFBMEIsZ0JBQWdCLDZCQUE2QiwrSkFBK0osc0NBQXNDLG1CQUFtQixtQkFBbUIsMEJBQTBCLG9DQUFvQyxpQkFBaUIsR0FBRyxrS0FBa0sseUJBQXlCLHdCQUF3Qix5Q0FBeUMsb0NBQW9DLGlCQUFpQixzQkFBc0IsbUNBQW1DLEdBQUcsa0JBQWtCLHlDQUF5QyxzQkFBc0Isc0JBQXNCLDZCQUE2QixnQkFBZ0IsR0FBRywrREFBK0QseUJBQXlCLHdDQUF3QyxxQkFBcUIsc0JBQXNCLDZCQUE2QixHQUFHLG9CQUFvQix5QkFBeUIsc0NBQXNDLHFCQUFxQixHQUFHLHVFQUF1RSxvQkFBb0IsMENBQTBDLDZDQUE2QyxHQUFHLDRCQUE0QixzQkFBc0IsaUNBQWlDLHVCQUF1QiwwRUFBMEUsa0VBQWtFLHVDQUF1QyxrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLHVCQUF1Qix1QkFBdUIsR0FBRyx3RkFBd0Ysa0NBQWtDLEdBQUcsbUVBQW1FLDhCQUE4QixHQUFHLGlFQUFpRSxvQkFBb0IsMENBQTBDLGlEQUFpRCxHQUFHLGlDQUFpQyw4QkFBOEIsNEJBQTRCLHVCQUF1Qix5QkFBeUIsR0FBRyw2QkFBNkIsMEJBQTBCLGlDQUFpQyx1QkFBdUIsMEVBQTBFLGtFQUFrRSxzQ0FBc0Msa0JBQWtCLG1CQUFtQixHQUFHLG9EQUFvRCwwRUFBMEUsa0VBQWtFLEdBQUcsbUNBQW1DLDhDQUE4QyxHQUFHLG9FQUFvRSxvQ0FBb0Msd0JBQXdCLHNDQUFzQyxvQkFBb0IsMEJBQTBCLEdBQUcsbUtBQW1LLHdDQUF3QyxvQkFBb0Isd0JBQXdCLHNCQUFzQiw2QkFBNkIsR0FBRyx1QkFBdUIseUJBQXlCLEdBQUcsa0ZBQWtGLG9CQUFvQix5Q0FBeUMseURBQXlELEtBQUssMkJBQTJCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLGlDQUFpQywwQ0FBMEMsMkhBQTJILGdCQUFnQixHQUFHLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLGdCQUFnQix3QkFBd0IsbUNBQW1DLHlCQUF5Qix3QkFBd0IsR0FBRyxzQkFBc0IseUJBQXlCLG1GQUFtRixnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLHdCQUF3Qix3QkFBd0IsYUFBYSxhQUFhLE1BQU0sWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLGNBQWMsTUFBTSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLGFBQWEsTUFBTSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sVUFBVSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxVQUFVLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSx3QkFBd0Isd0NBQXdDLDJCQUEyQix1QkFBdUIsOEJBQThCLDhCQUE4QixrQ0FBa0MsMEJBQTBCLDJCQUEyQixzQkFBc0IsMEJBQTBCLDJCQUEyQiwwQkFBMEIsa0NBQWtDLEdBQUcsdUdBQXVHLFVBQVUsbUJBQW1CLG9CQUFvQixrQkFBa0IsK0JBQStCLGdDQUFnQywrQkFBK0IsdUJBQXVCLHNCQUFzQixzQkFBc0IscUNBQXFDLG1DQUFtQyw4REFBOEQsR0FBRyxhQUFhLHdCQUF3Qix5QkFBeUIsa0NBQWtDLEdBQUcsaUJBQWlCLGtDQUFrQyxHQUFHLGtCQUFrQiwwQkFBMEIsZ0JBQWdCLDZCQUE2QiwrSkFBK0osc0NBQXNDLG1CQUFtQixtQkFBbUIsMEJBQTBCLG9DQUFvQyxpQkFBaUIsR0FBRyxrS0FBa0sseUJBQXlCLHdCQUF3Qix5Q0FBeUMsb0NBQW9DLGlCQUFpQixzQkFBc0IsbUNBQW1DLEdBQUcsa0JBQWtCLHlDQUF5QyxzQkFBc0Isc0JBQXNCLDZCQUE2QixnQkFBZ0IsR0FBRywrREFBK0QseUJBQXlCLHdDQUF3QyxxQkFBcUIsc0JBQXNCLDZCQUE2QixHQUFHLG9CQUFvQix5QkFBeUIsc0NBQXNDLHFCQUFxQixHQUFHLHVFQUF1RSxvQkFBb0IsMENBQTBDLDZDQUE2QyxHQUFHLDRCQUE0QixzQkFBc0IsaUNBQWlDLHVCQUF1QixvREFBb0QsNENBQTRDLHVDQUF1QyxrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLHVCQUF1Qix1QkFBdUIsR0FBRyx3RkFBd0Ysa0NBQWtDLEdBQUcsbUVBQW1FLDhCQUE4QixHQUFHLGlFQUFpRSxvQkFBb0IsMENBQTBDLGlEQUFpRCxHQUFHLGlDQUFpQyw4QkFBOEIsNEJBQTRCLHVCQUF1Qix5QkFBeUIsR0FBRyw2QkFBNkIsMEJBQTBCLGlDQUFpQyx1QkFBdUIsK0RBQStELHVEQUF1RCxzQ0FBc0Msa0JBQWtCLG1CQUFtQixHQUFHLG9EQUFvRCw2REFBNkQscURBQXFELEdBQUcsbUNBQW1DLDhDQUE4QyxHQUFHLG9FQUFvRSxvQ0FBb0Msd0JBQXdCLHNDQUFzQyxvQkFBb0IsMEJBQTBCLEdBQUcsbUtBQW1LLHdDQUF3QyxvQkFBb0Isd0JBQXdCLHNCQUFzQiw2QkFBNkIsR0FBRyx1QkFBdUIseUJBQXlCLEdBQUcsa0ZBQWtGLG9CQUFvQix5Q0FBeUMseURBQXlELEtBQUssMkJBQTJCLG9CQUFvQiw0QkFBNEIsd0JBQXdCLGlDQUFpQywwQ0FBMEMsMkhBQTJILGdCQUFnQixHQUFHLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLGdCQUFnQix3QkFBd0IsbUNBQW1DLHlCQUF5Qix3QkFBd0IsR0FBRyxzQkFBc0IseUJBQXlCLCtGQUErRjtBQUN6MVk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNmMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQjs7QUFFWjtBQUNmLHVCQUF1QjtBQUN2QixvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWE7QUFDakI7QUFDQSxzREFBc0Q7QUFDdEQsZ0VBQWdFO0FBQ2hFLG9EQUFvRDtBQUNwRCwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLDJCQUEyQixrRUFBc0I7QUFDakQsdUJBQXVCLDREQUFnQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx3QkFBd0IseURBQWE7QUFDckMsSUFBSSx5REFBYTs7QUFFakIsSUFBSSx5REFBYTtBQUNqQjtBQUNBLFFBQVEseURBQWE7QUFDckI7O0FBRUEsdUJBQXVCLDREQUFnQjtBQUN2QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLHlCQUF5QixrRUFBc0I7QUFDL0MseUJBQXlCLGtFQUFzQjtBQUMvQyw2QkFBNkIsa0VBQXNCO0FBQ25ELDJCQUEyQixrRUFBc0I7O0FBRWpELHVCQUF1Qiw0REFBZ0I7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHdCQUF3Qix5REFBYTtBQUNyQyxJQUFJLHlEQUFhO0FBQ2pCLElBQUkseURBQWE7QUFDakIsSUFBSSx5REFBYTtBQUNqQixJQUFJLHlEQUFhO0FBQ2pCOztBQUVBO0FBQ0EseUJBQXlCLDREQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUkseURBQWE7O0FBRWpCO0FBQ0EsK0JBQStCLHlEQUFhOztBQUU1QyxtQ0FBbUMseURBQWE7QUFDaEQsOEJBQThCLHlEQUFhO0FBQzNDLCtCQUErQix5REFBYTs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0Esb0NBQW9DLHlEQUFhO0FBQ2pELDJCQUEyQix5REFBYTtBQUN4QyxtQ0FBbUMseURBQWE7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ3RDVzs7QUFFZDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7O0FBRXBCOztBQUUwQztBQUNBOztBQUUxQywyQkFBMkIsbURBQWM7QUFDekMsMkJBQTJCLG1EQUFjOzs7QUFHekM7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9wcm9qZWN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy9jaGVja2JveC11bmNoZWNrZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NoZWNrYm94LWNoZWNrZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMHxSb2JvdG86MzAwLDQwMCw1MDAsNzAwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlcjogZG9kZ2VyYmx1ZTtcXG4gICAgLS1hY2NlbnQ6IG9yYW5nZTtcXG4gICAgLS1saWdodEdyYXkyOiBzbGF0ZWdyZXk7XFxuICAgIC0tb2Zmd2hpdGUyOiB3aGl0ZXNtb2tlO1xcblxcbiAgICAtLWRhcmtCYWNrZ3JvdW5kOiAjMWYyOTM3O1xcbiAgICAtLW9mZndoaXRlOiAjZjlmYWY4O1xcbiAgICAtLWxpZ2h0R3JheTogI2U1ZTdlYjtcXG4gICAgLS1ibHVlOiAjMzg4MmY2O1xcbiAgICAtLWRhcmtCbHVlOiAjMWYyOTM3O1xcblxcbiAgICAtLXNreUJsdWU6ICMzOGJkZjg7XFxuICAgIC0taW5kaWdvOiAjMDUwNTA3ODg7XFxuICAgIC0taW5kaWdvQnJpZ2h0ZXI6ICM0NTQ1NWY4ODtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvJzsgKi9cXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwic2lkZWJhciBtYWluXFxcIjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWE1MjA4ODtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuLmJ1dHRvbjphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTt9XFxuLmJ1dHRvbi5iYWNrIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAwODg7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlYWRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaWRlYmFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JheSk7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1ZnIgMWZyO1xcbn1cXG4uc2lkZWJhcj4ubGlzdCB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCB5ZWxsb3dncmVlbjsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFByb2plY3QgR3JvdXAgPT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWdyb3VwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRjb3JhbDsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdC1ncm91cD4qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDAwNDQ7ICovXFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLyogPT09PT09PT09PSBQcm9qZWN0IENvbnRhaW5lciA9PT09PT09PT09ICovXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpY29uIC4uIHRpdGxlXFxcIjtcXG59XFxuLnByb2plY3QtY29udGFpbmVyPi5pY29uIHtcXG4gICAgZ3JpZC1hcmVhOiBpY29uO1xcblxcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XFxuICAgIG1hc2stc2l6ZTogY292ZXI7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5Qmx1ZSk7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucHJvamVjdC1jb250YWluZXJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdLFxcbi50YXNrLWNvbnRhaW5lcltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4udGl0bGU6aG92ZXIsXFxuLnRhc2stY29udGFpbmVyPi50aXRsZTpob3ZlclxcbntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDMuNSk7XFxufVxcblxcbi8qID09PT09PT09PT0gVGFzayBDb250YWluZXIgPT09PT09PT09PSAqL1xcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggLi4gdGl0bGVcXFwiO1xcbn1cXG4vKiAuc2lkZWJhciAudGFzay1jb250YWluZXI+KiB7Ym9yZGVyOiAxcHggZG90dGVkIGRhcmtibHVlO30gKi9cXG4udGFzay1jb250YWluZXI+LnRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcbiAgICBtYXNrLXNpemU6IGNvdmVyO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi50YXNrLWNvbnRhaW5lcj4uY2hlY2tib3hbZGF0YS1jaGVja2VkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcbi50YXNrLWNvbnRhaW5lcj4uY2hlY2tib3g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ29CcmlnaHRlcik7XFxufVxcblxcbi8qID09PT09PT09PT0gQm90dG9tLCBOZXcgUHJvamVjdCA9PT09PT09PT09ICovXFxuLnNpZGViYXI+LmJvdCB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBvcmFuZ2U7ICovXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhOWE5YTlhYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDb250ZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmRpdiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBncmlkLWFyZWE6IG1haW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmRpdiNjb250ZW50Pi5idXR0b24ge1xcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gVGFzayBEaXNwbGF5ID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmNhcmQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuMjE2KTsgKi9cXG59XFxuLnRhc2stZGlzcGxheS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwJTsgKi9cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDRmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInRpdGxlXFxcIlxcbiAgICAgICAgXFxcImRlc2NcXFwiXFxuICAgICAgICBcXFwiZHVlRGF0ZVxcXCJcXG4gICAgICAgIFxcXCJwcmlvXFxcIlxcbiAgICAgICAgXFxcImRlbGV0ZVxcXCI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2stZGlzcGxheS1jb250YWluZXI+LnRhc2stdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNkZWxldGUtdGFzayB7XFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbn1cXG4jZGVsZXRlLXRhc2s6aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09IFByb2plY3QgRGlzcGxheSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0lBRXZCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXOztJQUVYLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlOztJQUVmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQSxnQkFBZ0Isd0JBQXdCLENBQUM7QUFDekMsY0FBYywyQkFBMkIsQ0FBQzs7QUFFMUMsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTs7SUFFWixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQSxzRUFBc0U7QUFDdEUsc0VBQXNFOztBQUV0RTtJQUNJLGtCQUFrQjs7SUFFbEIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsVUFBVTs7SUFFVixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBLDRDQUE0QztBQUM1QztJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxlQUFlOztJQUVmLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsMkRBQTZDO0lBQzdDLG1EQUFxQztJQUNyQyxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSwyQkFBMkI7QUFDL0I7QUFDQTs7O0lBR0ksdUJBQXVCO0FBQzNCOztBQUVBLHlDQUF5QztBQUN6QztJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsd0NBQXdDO0FBQzVDO0FBQ0EsOERBQThEO0FBQzlEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1COztJQUVuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLDJEQUF3RDtJQUN4RCxtREFBZ0Q7SUFDaEQsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyREFBc0Q7SUFDdEQsbURBQThDO0FBQ2xEO0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7O0lBRWIsZUFBZTs7SUFFZixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSxzRUFBc0U7QUFDdEU7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDOztJQUVsQyxrREFBa0Q7QUFDdEQ7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7O0lBRXZCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DOzs7OztnQkFLWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQSxvQkFBb0IsdUJBQXVCLENBQUM7QUFDNUMseUVBQXlFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1oZWFkZXI6IGRvZGdlcmJsdWU7XFxuICAgIC0tYWNjZW50OiBvcmFuZ2U7XFxuICAgIC0tbGlnaHRHcmF5Mjogc2xhdGVncmV5O1xcbiAgICAtLW9mZndoaXRlMjogd2hpdGVzbW9rZTtcXG5cXG4gICAgLS1kYXJrQmFja2dyb3VuZDogIzFmMjkzNztcXG4gICAgLS1vZmZ3aGl0ZTogI2Y5ZmFmODtcXG4gICAgLS1saWdodEdyYXk6ICNlNWU3ZWI7XFxuICAgIC0tYmx1ZTogIzM4ODJmNjtcXG4gICAgLS1kYXJrQmx1ZTogIzFmMjkzNztcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwNzg4O1xcbiAgICAtLWluZGlnb0JyaWdodGVyOiAjNDU0NTVmODg7XFxufVxcblxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwfFJvYm90bzozMDAsNDAwLDUwMCw3MDBcXFwiKTtcXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLWRhcmtCbHVlKTtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8nOyAqL1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhYTUyMDg4O1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbn1cXG4uYnV0dG9uOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO31cXG4uYnV0dG9uLmJhY2sge2JhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA4ODt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVhZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4ICMwMDAzO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNpZGViYXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmF5KTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTVmciAxZnI7XFxufVxcbi5zaWRlYmFyPi5saXN0IHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIHllbGxvd2dyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi8qID09PT09PT09PT0gUHJvamVjdCBHcm91cCA9PT09PT09PT09ICovXFxuLnByb2plY3QtZ3JvdXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGNvcmFsOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0LWdyb3VwPioge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjgwMDA0NDsgKi9cXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFByb2plY3QgQ29udGFpbmVyID09PT09PT09PT0gKi9cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImljb24gLi4gdGl0bGVcXFwiO1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+Lmljb24ge1xcbiAgICBncmlkLWFyZWE6IGljb247XFxuXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9wcm9qZWN0LnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9wcm9qZWN0LnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3lCbHVlKTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuLnByb2plY3QtY29udGFpbmVyPi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0sXFxuLnRhc2stY29udGFpbmVyW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuLnByb2plY3QtY29udGFpbmVyPi50aXRsZTpob3ZlcixcXG4udGFzay1jb250YWluZXI+LnRpdGxlOmhvdmVyXFxue1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMy41KTtcXG59XFxuXFxuLyogPT09PT09PT09PSBUYXNrIENvbnRhaW5lciA9PT09PT09PT09ICovXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCAuLiB0aXRsZVxcXCI7XFxufVxcbi8qIC5zaWRlYmFyIC50YXNrLWNvbnRhaW5lcj4qIHtib3JkZXI6IDFweCBkb3R0ZWQgZGFya2JsdWU7fSAqL1xcbi50YXNrLWNvbnRhaW5lcj4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrLWNvbnRhaW5lcj4uY2hlY2tib3gge1xcbiAgICBncmlkLWFyZWE6IGNoZWNrYm94O1xcblxcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XFxuICAgIG1hc2stc2l6ZTogY292ZXI7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvY2hlY2tib3gtdW5jaGVja2VkLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9jaGVja2JveC11bmNoZWNrZWQuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnbyk7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi50YXNrLWNvbnRhaW5lcj4uY2hlY2tib3hbZGF0YS1jaGVja2VkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2NoZWNrYm94LWNoZWNrZWQuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2NoZWNrYm94LWNoZWNrZWQuc3ZnJyk7XFxufVxcbi50YXNrLWNvbnRhaW5lcj4uY2hlY2tib3g6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ29CcmlnaHRlcik7XFxufVxcblxcbi8qID09PT09PT09PT0gQm90dG9tLCBOZXcgUHJvamVjdCA9PT09PT09PT09ICovXFxuLnNpZGViYXI+LmJvdCB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBvcmFuZ2U7ICovXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhOWE5YTlhYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDb250ZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmRpdiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBncmlkLWFyZWE6IG1haW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmRpdiNjb250ZW50Pi5idXR0b24ge1xcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gVGFzayBEaXNwbGF5ID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmNhcmQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuMjE2KTsgKi9cXG59XFxuLnRhc2stZGlzcGxheS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwJTsgKi9cXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDRmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInRpdGxlXFxcIlxcbiAgICAgICAgXFxcImRlc2NcXFwiXFxuICAgICAgICBcXFwiZHVlRGF0ZVxcXCJcXG4gICAgICAgIFxcXCJwcmlvXFxcIlxcbiAgICAgICAgXFxcImRlbGV0ZVxcXCI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRhc2stZGlzcGxheS1jb250YWluZXI+LnRhc2stdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNkZWxldGUtdGFzayB7XFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xcbn1cXG4jZGVsZXRlLXRhc2s6aG92ZXIge2ZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09IFByb2plY3QgRGlzcGxheSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRE9NIGZyb20gJy4vZG9tLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudE1hbmFnZXIocHJvamVjdE1hbmFnZXIpIHtcbiAgICB0aGlzLnN0YXRlID0gbnVsbDsgLy8gZW1wdHksIHByb2plY3RGb3JtLCBwcm9qZWN0RGlzcGxheSwgdGFza0Zvcm0sIHRhc2tEaXNwbGF5XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTsgLy8gbW92ZSB0byBpbnB1dD9cbiAgICB0aGlzLnNpZGViYXJOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbiAgICB0aGlzLnByb2plY3RNYW5hZ2VyID0gcHJvamVjdE1hbmFnZXI7XG59XG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbihuZXdTdGF0ZSwgaXRlbSkge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBuZXdTdGF0ZSB8fCBpdGVtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoaXRlbSk7XG4gICAgfVxufVxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBjb25zb2xlLmxvZygndXBkYXRpbmcgYWZ0ZXIgY2hhbmdpbmcgc3RhdGUgdG8gJywgdGhpcy5zdGF0ZSk7XG4gICAgRE9NLmNsZWFyTm9kZSh0aGlzLm5vZGUpO1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlICdwcm9qZWN0Rm9ybSc6IHRoaXMuY3JlYXRlUHJvamVjdEZvcm0oKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb2plY3REaXNwbGF5JzogdGhpcy5jcmVhdGVQcm9qZWN0RGlzcGxheShpdGVtKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Rhc2tGb3JtJzogdGhpcy5jcmVhdGVUYXNrRm9ybShpdGVtKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Rhc2tEaXNwbGF5JzogdGhpcy5jcmVhdGVUYXNrRGlzcGxheShpdGVtKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VtcHR5JzogYnJlYWs7XG4gICAgfVxufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlUHJvamVjdEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ3Byb2plY3QtZm9ybS1jb250YWluZXInXSk7XG4gICAgY29uc3QgW18sIGlucHV0Tm9kZV0gPSBET00uY3JlYXRlTGFiZWxlZElucHV0KGNvbnRhaW5lck5vZGUsICd0ZXh0JywgJ3Byb2plY3QtdGl0bGUnLCAnUHJvamVjdCBUaXRsZScpO1xuICAgIGNvbnN0IGJ1dHRvbk5vZGUgPSBET00uY3JlYXRlQnV0dG9uKGNvbnRhaW5lck5vZGUsICdjcmVhdGUtbmV3LXByb2plY3QnLCBudWxsLCAnQ3JlYXRlIE5ldyBQcm9qZWN0Jyk7XG5cbiAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QoaW5wdXROb2RlLnZhbHVlIHx8ICdEZWZhdWx0IFByb2plY3QgVGl0bGUnKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2VtcHR5Jyk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVQcm9qZWN0RGlzcGxheSA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBsZXQgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ3Byb2plY3QtZGlzcGxheS1jb250YWluZXInXSk7XG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2NhcmQnXSwgJ1Byb2plY3QgVGl0bGU6ICcgKyBwcm9qZWN0Lm5hbWUpO1xuXG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBudWxsLCAnVGFza3M6ICcpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIG51bGwsIHRhc2sudGl0bGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbk5vZGUgPSBET00uY3JlYXRlQnV0dG9uKHRoaXMubm9kZSwgJ2NyZWF0ZS1uZXctdGFzaycsIG51bGwsICdDcmVhdGUgTmV3IFRhc2snKTtcbiAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCd0YXNrRm9ybScsIHByb2plY3QpO1xuICAgIH0pO1xufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlVGFza0Zvcm0gPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgbGV0IGNvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgWyd0YXNrLWZvcm0tY29udGFpbmVyJ10pO1xuICAgIGxldCBbXywgdGl0bGVOb2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQoY29udGFpbmVyTm9kZSwgJ3RleHQnLCAndGFzay10aXRsZScsICdUYXNrIFRpdGxlJyk7XG4gICAgbGV0IFtfXywgZGVzY05vZGVdID0gRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dChjb250YWluZXJOb2RlLCAndGV4dCcsICd0YXNrLWRlc2MnLCAnVGFzayBEZXNjcmlwdGlvbicpO1xuICAgIGxldCBbX19fLCBkdWVEYXRlTm9kZV0gPSBET00uY3JlYXRlTGFiZWxlZElucHV0KGNvbnRhaW5lck5vZGUsICdkYXRlJywgJ3Rhc2stZHVlLWRhdGUnLCAnVGFzayBEdWUgRGF0ZScpO1xuICAgIGxldCBbX19fXywgcHJpb05vZGVdID0gRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dChjb250YWluZXJOb2RlLCAnbnVtYmVyJywgJ3Rhc2stcHJpbycsICdUYXNrIFByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBidXR0b25Ob2RlID0gRE9NLmNyZWF0ZUJ1dHRvbihjb250YWluZXJOb2RlLCAnY3JlYXRlLW5ldy10YXNrJywgbnVsbCwgJ0NyZWF0ZSBOZXcgVGFzaycpO1xuXG4gICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC5jcmVhdGVUYXNrKHRpdGxlTm9kZS52YWx1ZSwgZGVzY05vZGUudmFsdWUsIGR1ZURhdGVOb2RlLnZhbHVlLCBwcmlvTm9kZS52YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgIH0pO1xufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlVGFza0Rpc3BsYXkgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgbGV0IGNvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgWyd0YXNrLWRpc3BsYXktY29udGFpbmVyJ10pO1xuICAgIERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWyd0YXNrLXRpdGxlJywgJ2NhcmQnXSwgJ1RpdGxlOiAnICsgdGFzay50aXRsZSk7XG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ3Rhc2stZGVzYycsICdjYXJkJ10sICdEZXNjcmlwdGlvbjogJyArIHRhc2suZGVzYyk7XG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ3Rhc2stZHVlLWRhdGUnLCAnY2FyZCddLCAnRHVlIERhdGU6ICcgKyB0YXNrLmR1ZURhdGUpO1xuICAgIERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWyd0YXNrLXByaW8nLCAnY2FyZCddLCAnUHJpb3JpdHk6ICcgKyB0YXNrLnByaW8pO1xuICAgIC8vIFRPRE86IGNzcyBjbGFzc2VzXG5cbiAgICAvLyBEZWxldGUgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gRE9NLmNyZWF0ZUJ1dHRvbihjb250YWluZXJOb2RlLCAnZGVsZXRlLXRhc2snLCBudWxsLCAnRGVsZXRlIFRhc2snKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2suZGVsZXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdlbXB0eScpO1xuICAgIH0pO1xufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUudXBkYXRlU2lkZWJhciA9IGZ1bmN0aW9uKCkge1xuICAgIERPTS5jbGVhck5vZGUodGhpcy5zaWRlYmFyTm9kZSk7XG5cbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3QpIHtcbiAgICAgICAgbGV0IHByb2plY3RHcm91cE5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMuc2lkZWJhck5vZGUsIFsncHJvamVjdC1ncm91cCddKTtcblxuICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHByb2plY3RHcm91cE5vZGUsIFsncHJvamVjdC1jb250YWluZXInXSk7XG4gICAgICAgIGxldCBwcm9qZWN0SWNvbk5vZGUgPSBET00uY3JlYXRlRGl2KHByb2plY3RDb250YWluZXJOb2RlLCBbJ2ljb24nXSk7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGVOb2RlID0gRE9NLmNyZWF0ZURpdihwcm9qZWN0Q29udGFpbmVyTm9kZSwgWyd0aXRsZSddLCBwcm9qZWN0Lm5hbWUgKyAnICMnICsgcHJvamVjdC5pbmRleCk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lck5vZGUuZGF0YXNldC5zZWxlY3RlZCA9IHByb2plY3Quc2VsZWN0ZWQ7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2VsZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Byb2plY3REaXNwbGF5JywgcHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgbGV0IHRhc2tDb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdihwcm9qZWN0R3JvdXBOb2RlLCBbJ3Rhc2stY29udGFpbmVyJ10pO1xuICAgICAgICAgICAgbGV0IHRhc2tOb2RlID0gRE9NLmNyZWF0ZURpdih0YXNrQ29udGFpbmVyTm9kZSwgWyd0aXRsZSddLCB0YXNrLnRpdGxlICsgXCIgI1wiICsgdGFzay5pbmRleCk7XG4gICAgICAgICAgICBsZXQgdGFza0NoZWNrYm94Tm9kZSA9IERPTS5jcmVhdGVEaXYodGFza0NvbnRhaW5lck5vZGUsIFsnY2hlY2tib3gnXSk7XG5cbiAgICAgICAgICAgIHRhc2tDaGVja2JveE5vZGUuZGF0YXNldC5jaGVja2VkID0gdGFzay5jaGVja2VkO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lck5vZGUuZGF0YXNldC5zZWxlY3RlZCA9IHRhc2suc2VsZWN0ZWQ7XG5cbiAgICAgICAgICAgIHRhc2tDaGVja2JveE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFzay5jaGVja2VkID0gIXRhc2suY2hlY2tlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFza05vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFzay5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCd0YXNrRGlzcGxheScsIHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiY29uc3QgRE9NID0ge307XG5cbkRPTS5jbGVhck5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgd2hpbGUobm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuRE9NLmNyZWF0ZU5vZGUgPSBmdW5jdGlvbihwYXJlbnROb2RlLCB0YWcsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoY2xhc3NMaXN0KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NMaXN0KVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbkRPTS5jcmVhdGVEaXYgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdkaXYnLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KVxufVxuXG5ET00uY3JlYXRlTGFiZWxlZElucHV0ID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgaW5wdXRUeXBlLCBpZCwgdGV4dENvbnRlbnQpIHtcbiAgICBsZXQgbGFiZWxOb2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdsYWJlbCcsIG51bGwsIHRleHRDb250ZW50KTtcbiAgICBsYWJlbE5vZGUuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG4gICAgbGV0IGlucHV0Tm9kZSA9IHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnaW5wdXQnKTtcbiAgICBpbnB1dE5vZGUudHlwZSA9IGlucHV0VHlwZTtcbiAgICBpbnB1dE5vZGUuaWQgPSBpZDtcbiAgICByZXR1cm4gW2xhYmVsTm9kZSwgaW5wdXROb2RlXTtcbn1cblxuRE9NLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGlkLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IG1lcmdlZENsYXNzTGlzdCA9IChjbGFzc0xpc3QpID8gWydidXR0b24nLCAuLi5jbGFzc0xpc3RdIDogWydidXR0b24nXTtcbiAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlRGl2KHBhcmVudE5vZGUsIG1lcmdlZENsYXNzTGlzdCwgdGV4dENvbnRlbnQpO1xuICAgIG5vZGUuaWQgPSBpZDtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNYW5hZ2VyKCkge1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG59XG5Qcm9qZWN0TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgbmV3IHByb2plY3Qgd2l0aCBuYW1lOiAnLCBuYW1lKTtcbiAgICAvLyBTZXQgaW5kZXggdG8gY3VycmVudCBwcm9qZWN0TGlzdCBsZW5ndGhcbiAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QodGhpcywgbmFtZSwgdGhpcy5wcm9qZWN0TGlzdC5sZW5ndGgpKTtcbn1cblByb2plY3RNYW5hZ2VyLnByb3RvdHlwZS5zZWxlY3RQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBwcm9qZWN0ICMnLCBwcm9qZWN0LmluZGV4KTtcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3QuaW5kZXg7XG59XG5Qcm9qZWN0TWFuYWdlci5wcm90b3R5cGUuY2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdExpc3QpIHtcbiAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgICAgIHRhc2suc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIFByb2plY3QobWFuYWdlciwgbmFtZSwgaW5kZXgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lOyAgIC8vIFRPRE86IGNvbnZlcnQgbmFtZSB0byB0aXRsZVxuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkVGFzayA9IG51bGw7XG5cbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5jcmVhdGVUYXNrID0gZnVuY3Rpb24odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pIHtcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2gobmV3IFRhc2sodGhpcywgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pKTtcbn1cblByb2plY3QucHJvdG90eXBlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIHRhc2sgIycsIHRoaXMuc2VsZWN0ZWRUYXNrKTtcbiAgICB0aGlzLnNlbGVjdGVkVGFzayA9IHRhc2suaW5kZXg7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRTdGFydGluZ1Rhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnYWRkaW5nIGRlZmF1bHQgc3RhcnRpbmcgdGFza3MuLi4nKTtcbiAgICB0aGlzLnRhc2tsaXN0LnB1c2gobmV3IFRhc2soKSk7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1hbmFnZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbn1cblByb2plY3QucHJvdG90eXBlLmRlbGV0ZVRhc2sgPSBmdW5jdGlvbihpbmRleCkge1xuICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5pbmRleCA9IGk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2socHJvamVjdCwgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUgfHwgJ3BsYWNlaG9sZGVyIHRpdGxlJztcbiAgICB0aGlzLmRlc2MgPSBkZXNjIHx8ICdwbGFjZWhvbGRlciBkZXNjcmlwdGlvbic7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZSB8fCAnMDEvMDEvMjAyMyc7XG4gICAgdGhpcy5wcmlvID0gcHJpbyB8fCAwO1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgLy8gU2V0IGluZGV4IHRvIGN1cnJlbnQgdGFza0xpc3QgbGVuZ3RoXG4gICAgdGhpcy5pbmRleCA9IHByb2plY3QudGFza0xpc3QubGVuZ3RoO1xufVxuVGFzay5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9qZWN0Lm1hbmFnZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbn1cblRhc2sucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJvamVjdC5kZWxldGVUYXNrKHRoaXMuaW5kZXgpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnNvbGUubG9nKCdIZWxsbywgV29ybGQhJyk7XG5cbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IENvbnRlbnRNYW5hZ2VyIGZyb20gJy4vY29udGVudC5qcyc7XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XG5jb25zdCBjb250ZW50TWFuYWdlciA9IG5ldyBDb250ZW50TWFuYWdlcihwcm9qZWN0TWFuYWdlcik7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnRNYW5hZ2VyLmNoYW5nZVN0YXRlKCdwcm9qZWN0Rm9ybScpO1xufSk7XG5cblxuXG4vLyBJTklUSUFMIFZBTFVFU1xucHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdCgnTWFpbiBQcm9qZWN0Jyk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXS5jcmVhdGVUYXNrKCdGaXJzdCBUYXNrJyk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXS5jcmVhdGVUYXNrKCdTZWNvbmQgVGFzaycpO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF0uY3JlYXRlVGFzaygnVGhpcmQgVGFzaycpO1xucHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdCgnU2Vjb25kYXJ5IFByb2plY3QnKTtcbnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0WzFdLmNyZWF0ZVRhc2soJ0ZpcnN0IFRhc2snKTtcbnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0WzFdLmNyZWF0ZVRhc2soJ1NlY29uZCBUYXNrJyk7XG5cbmNvbnRlbnRNYW5hZ2VyLmNoYW5nZVN0YXRlKCdlbXB0eScpO1xuY29udGVudE1hbmFnZXIudXBkYXRlU2lkZWJhcigpO1xuXG4vLyBTVEFSVCBBVCBGSVJTVCBUQVNLIERJU1BMQVlcbmxldCB0YXNrID0gcHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF0udGFza0xpc3RbMF07XG50YXNrLnNlbGVjdCgpO1xuY29udGVudE1hbmFnZXIudXBkYXRlU2lkZWJhcigpO1xuY29udGVudE1hbmFnZXIuY2hhbmdlU3RhdGUoJ3Rhc2tEaXNwbGF5JywgdGFzayk7XG5cblxuLy8gREVCVUdcbmNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLCBjb250ZW50TWFuYWdlcilcblxuLy8gVE9ETzogcmVvcmdhbml6ZSB0YXNrIGNvZGUgbG9jYXRpb25cbi8vIFRPRE86IGFkZCBpY29uc1xuLy8gVE9ETzogYWRkIHN1Ym1pdCBmb3JtIGJ1dHRvblxuLy8gVE9ETzogZm9ybSB2YWxpZGF0aW9uXG4vLyBUT0RPOiBzdHlsZSBmb3JtXG4vLyBUT0RPOiBhZGQgYWJpbGl0eSB0byBjbGljayB0YXNrc1xuLy8gVE9ETzogcGFzcyBub2RlIHRvIERPTVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9