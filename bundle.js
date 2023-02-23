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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/task.svg */ "./src/assets/task.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! assets/checkbox-unchecked.svg */ "./src/assets/checkbox-unchecked.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/checkbox-checked.svg */ "./src/assets/checkbox-checked.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray: slategrey;\n    --offwhite: whitesmoke;\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    background-color: gray;\n    color: black;\n    font-family: verdana;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n/* ========== Project Group ========== */\n.project-group {\n    border-radius: 5px;\n    background-color:#ffff0022;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.project-group>* {\n    border-radius: 5px;\n    background-color: #ff800044;\n    padding: 3px;\n}\n\n/* ========== Project Container ========== */\n.project-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"icon .. title\";\n}\n.project-container>.icon {\n    grid-area: icon;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n}\n.project-container>.title {\n    grid-area: title;\n    font-weight: 700;\n}\n.project-container>.title[data-selected=\"true\"],\n.task-container>.title[data-selected=\"true\"] {\n    color: darkred;\n}\n\n/* ========== Task Container ========== */\n.task-container {\n    display: grid;\n    grid-template-columns: 20px 20px 5px 1fr 20px;\n    grid-template-areas: \".. icon .. title checkbox\";\n}\n/* .sidebar .task-container>* {border: 1px dotted darkblue;} */\n.task-container>.icon {\n    grid-area: icon;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: 15px;\n    background-position: center;\n}\n.task-container>.title {grid-area: title;}\n.task-container>.checkbox {\n    grid-area: checkbox;\n    background-size: 20px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n}\n.task-container>.checkbox[data-checked=\"true\"] {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n/* ========== Bottom, New Project ========== */\n.sidebar>.bot {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA,gBAAgB,wBAAwB,CAAC;AACzC,cAAc,2BAA2B,CAAC;AAC1C;IACI,YAAY;IACZ,aAAa;IACb,WAAW;;IAEX,sBAAsB;IACtB,YAAY;IACZ,oBAAoB;IACpB,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,mDAAmD;AACvD;;AAEA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,+BAA+B;IAC/B,YAAY;IACZ,YAAY;;IAEZ,iBAAiB;IACjB,6BAA6B;IAC7B,UAAU;AACd;;AAEA,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,kBAAkB;;IAElB,kCAAkC;IAClC,6BAA6B;IAC7B,UAAU;;IAEV,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,oCAAoC;IACpC,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,wCAAwC;AACxC;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA,4CAA4C;AAC5C;IACI,aAAa;IACb,mCAAmC;IACnC,oCAAoC;AACxC;AACA;IACI,eAAe;IACf,yDAA2C;IAC3C,4BAA4B;AAChC;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;;IAEI,cAAc;AAClB;;AAEA,yCAAyC;AACzC;IACI,aAAa;IACb,6CAA6C;IAC7C,gDAAgD;AACpD;AACA,8DAA8D;AAC9D;IACI,eAAe;IACf,yDAAwC;IACxC,4BAA4B;IAC5B,qBAAqB;IACrB,2BAA2B;AAC/B;AACA,wBAAwB,gBAAgB,CAAC;AACzC;IACI,mBAAmB;IACnB,qBAAqB;IACrB,yDAAsD;IACtD,4BAA4B;AAChC;AACA;IACI,yDAAoD;AACxD;AACA,8CAA8C;AAC9C;IACI,+BAA+B;IAC/B,eAAe;IACf,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;AACvB;;AAEA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,iCAAiC;IACjC,aAAa;;IAEb,eAAe;;IAEf,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray: slategrey;\n    --offwhite: whitesmoke;\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    background-color: gray;\n    color: black;\n    font-family: verdana;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n/* ========== Project Group ========== */\n.project-group {\n    border-radius: 5px;\n    background-color:#ffff0022;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.project-group>* {\n    border-radius: 5px;\n    background-color: #ff800044;\n    padding: 3px;\n}\n\n/* ========== Project Container ========== */\n.project-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"icon .. title\";\n}\n.project-container>.icon {\n    grid-area: icon;\n    background-image: url('assets/project.svg');\n    background-repeat: no-repeat;\n}\n.project-container>.title {\n    grid-area: title;\n    font-weight: 700;\n}\n.project-container>.title[data-selected=\"true\"],\n.task-container>.title[data-selected=\"true\"] {\n    color: darkred;\n}\n\n/* ========== Task Container ========== */\n.task-container {\n    display: grid;\n    grid-template-columns: 20px 20px 5px 1fr 20px;\n    grid-template-areas: \".. icon .. title checkbox\";\n}\n/* .sidebar .task-container>* {border: 1px dotted darkblue;} */\n.task-container>.icon {\n    grid-area: icon;\n    background-image: url('assets/task.svg');\n    background-repeat: no-repeat;\n    background-size: 15px;\n    background-position: center;\n}\n.task-container>.title {grid-area: title;}\n.task-container>.checkbox {\n    grid-area: checkbox;\n    background-size: 20px;\n    background-image: url('assets/checkbox-unchecked.svg');\n    background-repeat: no-repeat;\n}\n.task-container>.checkbox[data-checked=\"true\"] {\n    background-image: url('assets/checkbox-checked.svg');\n}\n/* ========== Bottom, New Project ========== */\n.sidebar>.bot {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}"],"sourceRoot":""}]);
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
    const [_, inputNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'text', 'project-title', 'Project Title');
    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-project', null, 'Create New Project');

    buttonNode.addEventListener('click', () => {
        this.projectManager.createProject(inputNode.value || 'Default Project Title');
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.createProjectDisplay = function(project) {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, 'Project Title: ' + project.name);

    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, 'Tasks: ');
    for (let task of project.taskList) {
        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, task.title);
    }

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-task', null, 'Create New Task');
    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm', project);
    });
}

ContentManager.prototype.createTaskForm = function(project) {
    let [_, titleNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'text', 'task-title', 'Task Title');
    let [__, descNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'text', 'task-desc', 'Task Description');
    let [___, dueDateNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'date', 'task-due-date', 'Task Due Date');
    let [____, prioNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'number', 'task-prio', 'Task Priority');

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        project.createTask(titleNode.value, descNode.value, dueDateNode.value, prioNode.value);
        this.updateSidebar();
    });
}

ContentManager.prototype.createTaskDisplay = function(task) {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, 'Title: ' + task.title);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, 'Description: ' + task.desc);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, 'Due Date: ' + task.dueDate);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, 'Priority: ' + task.prio);
    // TODO: css classes

    // Delete Button
    const deleteButton = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'delete-task', null, 'Delete Task');
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

        projectTitleNode.dataset.selected = project.selected;

        projectTitleNode.addEventListener('click', () => {
            project.select();
            this.updateSidebar();
            this.changeState('projectDisplay', project);
        });

        for (let task of project.taskList) {
            let taskContainerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(projectGroupNode, ['task-container']);
            let taskIconNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(taskContainerNode, ['icon']);
            let taskNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(taskContainerNode, ['title'], task.title + " #" + task.index);
            let taskCheckboxNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(taskContainerNode, ['checkbox']);

            taskCheckboxNode.dataset.checked = task.checked;
            taskNode.dataset.selected = task.selected;

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

/***/ }),

/***/ "./src/assets/task.svg":
/*!*****************************!*\
  !*** ./src/assets/task.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "task.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7O0FBRXBCOztBQUUwQztBQUNBOztBQUUxQywyQkFBMkIsbURBQWM7QUFDekMsMkJBQTJCLG1EQUFjOzs7QUFHekM7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9wcm9qZWN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImFzc2V0cy90YXNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImFzc2V0cy9jaGVja2JveC11bmNoZWNrZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NoZWNrYm94LWNoZWNrZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlcjogZG9kZ2VyYmx1ZTtcXG4gICAgLS1hY2NlbnQ6IG9yYW5nZTtcXG4gICAgLS1saWdodEdyYXk6IHNsYXRlZ3JleTtcXG4gICAgLS1vZmZ3aGl0ZTogd2hpdGVzbW9rZTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWE1MjA4ODtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuLmJ1dHRvbjphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTt9XFxuLmJ1dHRvbi5iYWNrIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAwODg7fVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIZWFkZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2lkZWJhciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmF5KTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTVmciAxZnI7XFxufVxcbi5zaWRlYmFyPi5saXN0IHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIHllbGxvd2dyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi8qID09PT09PT09PT0gUHJvamVjdCBHcm91cCA9PT09PT09PT09ICovXFxuLnByb2plY3QtZ3JvdXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmYwMDIyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbi5wcm9qZWN0LWdyb3VwPioge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgwMDA0NDtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFByb2plY3QgQ29udGFpbmVyID09PT09PT09PT0gKi9cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImljb24gLi4gdGl0bGVcXFwiO1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+Lmljb24ge1xcbiAgICBncmlkLWFyZWE6IGljb247XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+LnRpdGxlW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSxcXG4udGFzay1jb250YWluZXI+LnRpdGxlW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFRhc2sgQ29udGFpbmVyID09PT09PT09PT0gKi9cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMjBweCA1cHggMWZyIDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuLiBpY29uIC4uIHRpdGxlIGNoZWNrYm94XFxcIjtcXG59XFxuLyogLnNpZGViYXIgLnRhc2stY29udGFpbmVyPioge2JvcmRlcjogMXB4IGRvdHRlZCBkYXJrYmx1ZTt9ICovXFxuLnRhc2stY29udGFpbmVyPi5pY29uIHtcXG4gICAgZ3JpZC1hcmVhOiBpY29uO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLnRhc2stY29udGFpbmVyPi50aXRsZSB7Z3JpZC1hcmVhOiB0aXRsZTt9XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveFtkYXRhLWNoZWNrZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcbi8qID09PT09PT09PT0gQm90dG9tLCBOZXcgUHJvamVjdCA9PT09PT09PT09ICovXFxuLnNpZGViYXI+LmJvdCB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBvcmFuZ2U7ICovXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhOWE5YTlhYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDb250ZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmRpdiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBncmlkLWFyZWE6IG1haW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmRpdiNjb250ZW50Pi5idXR0b24ge1xcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0EsZ0JBQWdCLHdCQUF3QixDQUFDO0FBQ3pDLGNBQWMsMkJBQTJCLENBQUM7QUFDMUM7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixtREFBbUQ7QUFDdkQ7O0FBRUEsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTs7SUFFWixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQSxzRUFBc0U7QUFDdEUsc0VBQXNFOztBQUV0RTtJQUNJLGtCQUFrQjs7SUFFbEIsa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixVQUFVOztJQUVWLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBLHdDQUF3QztBQUN4QztJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBLDRDQUE0QztBQUM1QztJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseURBQTJDO0lBQzNDLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QyxnREFBZ0Q7QUFDcEQ7QUFDQSw4REFBOEQ7QUFDOUQ7SUFDSSxlQUFlO0lBQ2YseURBQXdDO0lBQ3hDLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9CO0FBQ0Esd0JBQXdCLGdCQUFnQixDQUFDO0FBQ3pDO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5REFBc0Q7SUFDdEQsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5REFBb0Q7QUFDeEQ7QUFDQSw4Q0FBOEM7QUFDOUM7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTs7SUFFYixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyOiBkb2RnZXJibHVlO1xcbiAgICAtLWFjY2VudDogb3JhbmdlO1xcbiAgICAtLWxpZ2h0R3JheTogc2xhdGVncmV5O1xcbiAgICAtLW9mZndoaXRlOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhYTUyMDg4O1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbn1cXG4uYnV0dG9uOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO31cXG4uYnV0dG9uLmJhY2sge2JhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA4ODt9XFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcInNpZGViYXIgbWFpblxcXCI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlYWRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaWRlYmFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyYXkpO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNWZyIDFmcjtcXG59XFxuLnNpZGViYXI+Lmxpc3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgeWVsbG93Z3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLyogPT09PT09PT09PSBQcm9qZWN0IEdyb3VwID09PT09PT09PT0gKi9cXG4ucHJvamVjdC1ncm91cCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZjAwMjI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuLnByb2plY3QtZ3JvdXA+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODAwMDQ0O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi8qID09PT09PT09PT0gUHJvamVjdCBDb250YWluZXIgPT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaWNvbiAuLiB0aXRsZVxcXCI7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4uaWNvbiB7XFxuICAgIGdyaWQtYXJlYTogaWNvbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvcHJvamVjdC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLnByb2plY3QtY29udGFpbmVyPi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4udGl0bGVbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdLFxcbi50YXNrLWNvbnRhaW5lcj4udGl0bGVbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi8qID09PT09PT09PT0gVGFzayBDb250YWluZXIgPT09PT09PT09PSAqL1xcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAyMHB4IDVweCAxZnIgMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4uIGljb24gLi4gdGl0bGUgY2hlY2tib3hcXFwiO1xcbn1cXG4vKiAuc2lkZWJhciAudGFzay1jb250YWluZXI+KiB7Ym9yZGVyOiAxcHggZG90dGVkIGRhcmtibHVlO30gKi9cXG4udGFzay1jb250YWluZXI+Lmljb24ge1xcbiAgICBncmlkLWFyZWE6IGljb247XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL3Rhc2suc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4udGFzay1jb250YWluZXI+LnRpdGxlIHtncmlkLWFyZWE6IHRpdGxlO31cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9jaGVja2JveC11bmNoZWNrZWQuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi50YXNrLWNvbnRhaW5lcj4uY2hlY2tib3hbZGF0YS1jaGVja2VkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9jaGVja2JveC1jaGVja2VkLnN2ZycpO1xcbn1cXG4vKiA9PT09PT09PT09IEJvdHRvbSwgTmV3IFByb2plY3QgPT09PT09PT09PSAqL1xcbi5zaWRlYmFyPi5ib3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgb3JhbmdlOyAqL1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTlhOWE5YWE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29udGVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5kaXYjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5kaXYjY29udGVudD4uYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRNYW5hZ2VyKHByb2plY3RNYW5hZ2VyKSB7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7IC8vIGVtcHR5LCBwcm9qZWN0Rm9ybSwgcHJvamVjdERpc3BsYXksIHRhc2tGb3JtLCB0YXNrRGlzcGxheVxuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IC8vIG1vdmUgdG8gaW5wdXQ/XG4gICAgdGhpcy5zaWRlYmFyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgdGhpcy5wcm9qZWN0TWFuYWdlciA9IHByb2plY3RNYW5hZ2VyO1xufVxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24obmV3U3RhdGUsIGl0ZW0pIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gbmV3U3RhdGUgfHwgaXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMudXBkYXRlKGl0ZW0pO1xuICAgIH1cbn1cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGFmdGVyIGNoYW5naW5nIHN0YXRlIHRvICcsIHRoaXMuc3RhdGUpO1xuICAgIERPTS5jbGVhck5vZGUodGhpcy5ub2RlKTtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY2FzZSAncHJvamVjdEZvcm0nOiB0aGlzLmNyZWF0ZVByb2plY3RGb3JtKCk7IGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0RGlzcGxheSc6IHRoaXMuY3JlYXRlUHJvamVjdERpc3BsYXkoaXRlbSk7IGJyZWFrO1xuICAgICAgICBjYXNlICd0YXNrRm9ybSc6IHRoaXMuY3JlYXRlVGFza0Zvcm0oaXRlbSk7IGJyZWFrO1xuICAgICAgICBjYXNlICd0YXNrRGlzcGxheSc6IHRoaXMuY3JlYXRlVGFza0Rpc3BsYXkoaXRlbSk7IGJyZWFrO1xuICAgICAgICBjYXNlICdlbXB0eSc6IGJyZWFrO1xuICAgIH1cbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3RGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgW18sIGlucHV0Tm9kZV0gPSBET00uY3JlYXRlTGFiZWxlZElucHV0KHRoaXMubm9kZSwgJ3RleHQnLCAncHJvamVjdC10aXRsZScsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b24odGhpcy5ub2RlLCAnY3JlYXRlLW5ldy1wcm9qZWN0JywgbnVsbCwgJ0NyZWF0ZSBOZXcgUHJvamVjdCcpO1xuXG4gICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KGlucHV0Tm9kZS52YWx1ZSB8fCAnRGVmYXVsdCBQcm9qZWN0IFRpdGxlJyk7XG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdlbXB0eScpO1xuICAgIH0pO1xufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlUHJvamVjdERpc3BsYXkgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIG51bGwsICdQcm9qZWN0IFRpdGxlOiAnICsgcHJvamVjdC5uYW1lKTtcblxuICAgIERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBudWxsLCAnVGFza3M6ICcpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgbnVsbCwgdGFzay50aXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b24odGhpcy5ub2RlLCAnY3JlYXRlLW5ldy10YXNrJywgbnVsbCwgJ0NyZWF0ZSBOZXcgVGFzaycpO1xuICAgIGJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Rhc2tGb3JtJywgcHJvamVjdCk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVUYXNrRm9ybSA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBsZXQgW18sIHRpdGxlTm9kZV0gPSBET00uY3JlYXRlTGFiZWxlZElucHV0KHRoaXMubm9kZSwgJ3RleHQnLCAndGFzay10aXRsZScsICdUYXNrIFRpdGxlJyk7XG4gICAgbGV0IFtfXywgZGVzY05vZGVdID0gRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dCh0aGlzLm5vZGUsICd0ZXh0JywgJ3Rhc2stZGVzYycsICdUYXNrIERlc2NyaXB0aW9uJyk7XG4gICAgbGV0IFtfX18sIGR1ZURhdGVOb2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQodGhpcy5ub2RlLCAnZGF0ZScsICd0YXNrLWR1ZS1kYXRlJywgJ1Rhc2sgRHVlIERhdGUnKTtcbiAgICBsZXQgW19fX18sIHByaW9Ob2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQodGhpcy5ub2RlLCAnbnVtYmVyJywgJ3Rhc2stcHJpbycsICdUYXNrIFByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBidXR0b25Ob2RlID0gRE9NLmNyZWF0ZUJ1dHRvbih0aGlzLm5vZGUsICdjcmVhdGUtbmV3LXRhc2snLCBudWxsLCAnQ3JlYXRlIE5ldyBUYXNrJyk7XG5cbiAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRhc2sodGl0bGVOb2RlLnZhbHVlLCBkZXNjTm9kZS52YWx1ZSwgZHVlRGF0ZU5vZGUudmFsdWUsIHByaW9Ob2RlLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVUYXNrRGlzcGxheSA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgbnVsbCwgJ1RpdGxlOiAnICsgdGFzay50aXRsZSk7XG4gICAgRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIG51bGwsICdEZXNjcmlwdGlvbjogJyArIHRhc2suZGVzYyk7XG4gICAgRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIG51bGwsICdEdWUgRGF0ZTogJyArIHRhc2suZHVlRGF0ZSk7XG4gICAgRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIG51bGwsICdQcmlvcml0eTogJyArIHRhc2sucHJpbyk7XG4gICAgLy8gVE9ETzogY3NzIGNsYXNzZXNcblxuICAgIC8vIERlbGV0ZSBCdXR0b25cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBET00uY3JlYXRlQnV0dG9uKHRoaXMubm9kZSwgJ2RlbGV0ZS10YXNrJywgbnVsbCwgJ0RlbGV0ZSBUYXNrJyk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrLmRlbGV0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcbiAgICB9KTtcbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVNpZGViYXIgPSBmdW5jdGlvbigpIHtcbiAgICBET00uY2xlYXJOb2RlKHRoaXMuc2lkZWJhck5vZGUpO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0KSB7XG4gICAgICAgIGxldCBwcm9qZWN0R3JvdXBOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLnNpZGViYXJOb2RlLCBbJ3Byb2plY3QtZ3JvdXAnXSk7XG5cbiAgICAgICAgbGV0IHByb2plY3RDb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdihwcm9qZWN0R3JvdXBOb2RlLCBbJ3Byb2plY3QtY29udGFpbmVyJ10pO1xuICAgICAgICBsZXQgcHJvamVjdEljb25Ob2RlID0gRE9NLmNyZWF0ZURpdihwcm9qZWN0Q29udGFpbmVyTm9kZSwgWydpY29uJ10pO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlTm9kZSA9IERPTS5jcmVhdGVEaXYocHJvamVjdENvbnRhaW5lck5vZGUsIFsndGl0bGUnXSwgcHJvamVjdC5uYW1lICsgJyAjJyArIHByb2plY3QuaW5kZXgpO1xuXG4gICAgICAgIHByb2plY3RUaXRsZU5vZGUuZGF0YXNldC5zZWxlY3RlZCA9IHByb2plY3Quc2VsZWN0ZWQ7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2VsZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Byb2plY3REaXNwbGF5JywgcHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgbGV0IHRhc2tDb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdihwcm9qZWN0R3JvdXBOb2RlLCBbJ3Rhc2stY29udGFpbmVyJ10pO1xuICAgICAgICAgICAgbGV0IHRhc2tJY29uTm9kZSA9IERPTS5jcmVhdGVEaXYodGFza0NvbnRhaW5lck5vZGUsIFsnaWNvbiddKTtcbiAgICAgICAgICAgIGxldCB0YXNrTm9kZSA9IERPTS5jcmVhdGVEaXYodGFza0NvbnRhaW5lck5vZGUsIFsndGl0bGUnXSwgdGFzay50aXRsZSArIFwiICNcIiArIHRhc2suaW5kZXgpO1xuICAgICAgICAgICAgbGV0IHRhc2tDaGVja2JveE5vZGUgPSBET00uY3JlYXRlRGl2KHRhc2tDb250YWluZXJOb2RlLCBbJ2NoZWNrYm94J10pO1xuXG4gICAgICAgICAgICB0YXNrQ2hlY2tib3hOb2RlLmRhdGFzZXQuY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgICAgICAgICAgIHRhc2tOb2RlLmRhdGFzZXQuc2VsZWN0ZWQgPSB0YXNrLnNlbGVjdGVkO1xuXG4gICAgICAgICAgICB0YXNrQ2hlY2tib3hOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2suY2hlY2tlZCA9ICF0YXNrLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2suc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgndGFza0Rpc3BsYXknLCB0YXNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImNvbnN0IERPTSA9IHt9O1xuXG5ET00uY2xlYXJOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIHdoaWxlKG5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbkRPTS5jcmVhdGVOb2RlID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgdGFnLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGNsYXNzTGlzdClcbiAgICAgICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzTGlzdClcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5ET00uY3JlYXRlRGl2ID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnZGl2JywgY2xhc3NMaXN0LCB0ZXh0Q29udGVudClcbn1cblxuRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dCA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGlucHV0VHlwZSwgaWQsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IGxhYmVsTm9kZSA9IHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnbGFiZWwnLCBudWxsLCB0ZXh0Q29udGVudCk7XG4gICAgbGFiZWxOb2RlLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuICAgIGxldCBpbnB1dE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2lucHV0Jyk7XG4gICAgaW5wdXROb2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgaW5wdXROb2RlLmlkID0gaWQ7XG4gICAgcmV0dXJuIFtsYWJlbE5vZGUsIGlucHV0Tm9kZV07XG59XG5cbkRPTS5jcmVhdGVCdXR0b24gPSBmdW5jdGlvbihwYXJlbnROb2RlLCBpZCwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBtZXJnZWRDbGFzc0xpc3QgPSAoY2xhc3NMaXN0KSA/IFsnYnV0dG9uJywgLi4uY2xhc3NMaXN0XSA6IFsnYnV0dG9uJ107XG4gICAgbGV0IG5vZGUgPSB0aGlzLmNyZWF0ZURpdihwYXJlbnROb2RlLCBtZXJnZWRDbGFzc0xpc3QsIHRleHRDb250ZW50KTtcbiAgICBub2RlLmlkID0gaWQ7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TWFuYWdlcigpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBudWxsO1xufVxuUHJvamVjdE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIG5ldyBwcm9qZWN0IHdpdGggbmFtZTogJywgbmFtZSk7XG4gICAgLy8gU2V0IGluZGV4IHRvIGN1cnJlbnQgcHJvamVjdExpc3QgbGVuZ3RoXG4gICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KHRoaXMsIG5hbWUsIHRoaXMucHJvamVjdExpc3QubGVuZ3RoKSk7XG59XG5Qcm9qZWN0TWFuYWdlci5wcm90b3R5cGUuc2VsZWN0UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgcHJvamVjdCAjJywgcHJvamVjdC5pbmRleCk7XG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0LmluZGV4O1xufVxuUHJvamVjdE1hbmFnZXIucHJvdG90eXBlLmNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RMaXN0KSB7XG4gICAgICAgIHByb2plY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgICAgICB0YXNrLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBQcm9qZWN0KG1hbmFnZXIsIG5hbWUsIGluZGV4KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTsgICAvLyBUT0RPOiBjb252ZXJ0IG5hbWUgdG8gdGl0bGVcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZFRhc2sgPSBudWxsO1xuXG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xufVxuUHJvamVjdC5wcm90b3R5cGUuY3JlYXRlVGFzayA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSB7XG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKG5ldyBUYXNrKHRoaXMsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSk7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCB0YXNrICMnLCB0aGlzLnNlbGVjdGVkVGFzayk7XG4gICAgdGhpcy5zZWxlY3RlZFRhc2sgPSB0YXNrLmluZGV4O1xufVxuUHJvamVjdC5wcm90b3R5cGUuYWRkU3RhcnRpbmdUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZGluZyBkZWZhdWx0IHN0YXJ0aW5nIHRhc2tzLi4uJyk7XG4gICAgdGhpcy50YXNrbGlzdC5wdXNoKG5ldyBUYXNrKCkpO1xufVxuUHJvamVjdC5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYW5hZ2VyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5kZWxldGVUYXNrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3RbaV0uaW5kZXggPSBpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlIHx8ICdwbGFjZWhvbGRlciB0aXRsZSc7XG4gICAgdGhpcy5kZXNjID0gZGVzYyB8fCAncGxhY2Vob2xkZXIgZGVzY3JpcHRpb24nO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUgfHwgJzAxLzAxLzIwMjMnO1xuICAgIHRoaXMucHJpbyA9IHByaW8gfHwgMDtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIC8vIFNldCBpbmRleCB0byBjdXJyZW50IHRhc2tMaXN0IGxlbmd0aFxuICAgIHRoaXMuaW5kZXggPSBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDtcbn1cblRhc2sucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJvamVjdC5tYW5hZ2VyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG59XG5UYXNrLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnByb2plY3QuZGVsZXRlVGFzayh0aGlzLmluZGV4KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jb25zb2xlLmxvZygnSGVsbG8sIFdvcmxkIScpO1xuXG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBDb250ZW50TWFuYWdlciBmcm9tICcuL2NvbnRlbnQuanMnO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xuY29uc3QgY29udGVudE1hbmFnZXIgPSBuZXcgQ29udGVudE1hbmFnZXIocHJvamVjdE1hbmFnZXIpO1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgncHJvamVjdEZvcm0nKTtcbn0pO1xuXG5cblxuLy8gSU5JVElBTCBWQUxVRVNcbnByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QoJ01haW4gUHJvamVjdCcpO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF0uY3JlYXRlVGFzaygnRmlyc3QgVGFzaycpO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF0uY3JlYXRlVGFzaygnU2Vjb25kIFRhc2snKTtcbnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0WzBdLmNyZWF0ZVRhc2soJ1RoaXJkIFRhc2snKTtcbnByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QoJ1NlY29uZGFyeSBQcm9qZWN0Jyk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFsxXS5jcmVhdGVUYXNrKCdGaXJzdCBUYXNrJyk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFsxXS5jcmVhdGVUYXNrKCdTZWNvbmQgVGFzaycpO1xuXG5jb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcbmNvbnRlbnRNYW5hZ2VyLnVwZGF0ZVNpZGViYXIoKTtcblxuLy8gREVCVUdcbmNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLCBjb250ZW50TWFuYWdlcilcblxuLy8gVE9ETzogcmVvcmdhbml6ZSB0YXNrIGNvZGUgbG9jYXRpb25cbi8vIFRPRE86IGFkZCBpY29uc1xuLy8gVE9ETzogYWRkIHN1Ym1pdCBmb3JtIGJ1dHRvblxuLy8gVE9ETzogZm9ybSB2YWxpZGF0aW9uXG4vLyBUT0RPOiBzdHlsZSBmb3JtXG4vLyBUT0RPOiBhZGQgYWJpbGl0eSB0byBjbGljayB0YXNrc1xuLy8gVE9ETzogcGFzcyBub2RlIHRvIERPTVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9