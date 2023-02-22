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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray: slategrey;\n    --offwhite: whitesmoke;\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    background-color: gray;\n    color: black;\n    font-family: verdana;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.list>.project-group {\n    border-radius: 5px;\n    background-color:#ffff004f;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.project-group>* {\n    border-radius: 5px;\n    background-color: #ff80006e;\n    padding: 3px;\n}\n.project-group>*[data-selected=\"true\"] {\n    color: darkred;\n}\n.project-group>.project {font-weight: 700;}\n.sidebar>.new {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA,gBAAgB,wBAAwB,CAAC;AACzC,cAAc,2BAA2B,CAAC;AAC1C;IACI,YAAY;IACZ,aAAa;IACb,WAAW;;IAEX,sBAAsB;IACtB,YAAY;IACZ,oBAAoB;IACpB,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,mDAAmD;AACvD;;AAEA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,+BAA+B;IAC/B,YAAY;IACZ,YAAY;;IAEZ,iBAAiB;IACjB,6BAA6B;IAC7B,UAAU;AACd;;AAEA,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,kBAAkB;;IAElB,kCAAkC;IAClC,6BAA6B;IAC7B,UAAU;;IAEV,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,oCAAoC;IACpC,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,YAAY;AAChB;AACA;IACI,cAAc;AAClB;AACA,yBAAyB,gBAAgB,CAAC;AAC1C;IACI,+BAA+B;IAC/B,eAAe;IACf,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;AACvB;;AAEA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,iCAAiC;IACjC,aAAa;;IAEb,eAAe;;IAEf,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray: slategrey;\n    --offwhite: whitesmoke;\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    background-color: gray;\n    color: black;\n    font-family: verdana;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.list>.project-group {\n    border-radius: 5px;\n    background-color:#ffff004f;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.project-group>* {\n    border-radius: 5px;\n    background-color: #ff80006e;\n    padding: 3px;\n}\n.project-group>*[data-selected=\"true\"] {\n    color: darkred;\n}\n.project-group>.project {font-weight: 700;}\n.sidebar>.new {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}"],"sourceRoot":""}]);
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
    console.log('changing state to ', newState);
    if (this.state !== newState || item !== null) {
        this.state = newState;
        this.update(item);
    }
}
ContentManager.prototype.update = function(item) {
    console.log('updating after changing state to ', this.state);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);

    switch (this.state) {
        case 'projectForm':
            this.createProjectForm();
            break;
        case 'projectDisplay':
            this.createProjectDisplay(item);
            break;
        case 'taskForm':
            this.createTaskForm(item);
            break;
        case 'taskDisplay':
            this.createTaskDisplay(item);
            break;
        case 'empty':
            break;
    }
}

ContentManager.prototype.createProjectForm = function() {
    console.log('creating new project form...');

    const [_, inputNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'text', 'project-title', 'Project Title');

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-project', null, 'Create New Project');

    buttonNode.addEventListener('click', () => {
        console.log('creating a new project with name: ', inputNode.value);

        this.projectManager.createProject(inputNode.value || 'Default Project Title');

        this.updateSidebar();

        this.changeState('empty');
    });
}

ContentManager.prototype.createProjectDisplay = function(project) {
    console.log('creating new project display page...');

    // TODO: Display current tasks
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, 'Project Title: ' + project.name);
    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm', project);
    });
}

ContentManager.prototype.createTaskForm = function(project) {
    console.log('creating new task form...');

    let [_, titleNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'text', 'task-title', 'Task Title');
    let [__, descNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'text', 'task-desc', 'Task Description');
    let [___, dueDateNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'date', 'task-due-date', 'Task Due Date');
    let [____, prioNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'number', 'task-prio', 'Task Priority');

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        console.log('creating a new task with name: ', titleNode.value);

        project.createTask(titleNode.value, descNode.value, dueDateNode.value, prioNode.value);
        console.log(project);

        this.updateSidebar();
    });
}

ContentManager.prototype.createTaskDisplay = function(task) {
    console.log('creating new task display page...');

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
    console.log('updating sidebar...');
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.sidebarNode);

    for (let project of this.projectManager.projectList) {
        let groupNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.sidebarNode, ['project-group']);
        let projectNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(groupNode, ['project'], project.name + ' : ' + project.index);

        projectNode.dataset.selected = project.selected;

        projectNode.addEventListener('click', () => {
            project.select();
            this.updateSidebar();
            this.changeState('projectDisplay', project);
        });

        for (let task of project.taskList) {
            let taskNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(groupNode, ['task'], task.title + " : " + task.index);

            taskNode.dataset.selected = task.selected;

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
    this.name = name;
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

contentManager.changeState('empty');

document.getElementById('createProjectForm').addEventListener('click', () => {
    contentManager.changeState('projectForm');
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3REZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FvQjs7QUFFcEI7O0FBRTBDO0FBQ0E7O0FBRTFDLDJCQUEyQixtREFBYztBQUN6QywyQkFBMkIsbURBQWM7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlcjogZG9kZ2VyYmx1ZTtcXG4gICAgLS1hY2NlbnQ6IG9yYW5nZTtcXG4gICAgLS1saWdodEdyYXk6IHNsYXRlZ3JleTtcXG4gICAgLS1vZmZ3aGl0ZTogd2hpdGVzbW9rZTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWE1MjA4ODtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuLmJ1dHRvbjphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTt9XFxuLmJ1dHRvbi5iYWNrIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAwODg7fVxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIZWFkZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2lkZWJhciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmF5KTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTVmciAxZnI7XFxufVxcbi5zaWRlYmFyPi5saXN0IHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIHllbGxvd2dyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbi5saXN0Pi5wcm9qZWN0LWdyb3VwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmMDA0ZjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4ucHJvamVjdC1ncm91cD4qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDAwNmU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG59XFxuLnByb2plY3QtZ3JvdXA+KltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuLnByb2plY3QtZ3JvdXA+LnByb2plY3Qge2ZvbnQtd2VpZ2h0OiA3MDA7fVxcbi5zaWRlYmFyPi5uZXcge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgb3JhbmdlOyAqL1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTlhOWE5YWE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29udGVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5kaXYjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5kaXYjY29udGVudD4uYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBLGdCQUFnQix3QkFBd0IsQ0FBQztBQUN6QyxjQUFjLDJCQUEyQixDQUFDO0FBQzFDO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXOztJQUVYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsbURBQW1EO0FBQ3ZEOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFlBQVk7O0lBRVosaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUEsc0VBQXNFO0FBQ3RFLHNFQUFzRTs7QUFFdEU7SUFDSSxrQkFBa0I7O0lBRWxCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsVUFBVTs7SUFFVixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQSx5QkFBeUIsZ0JBQWdCLENBQUM7QUFDMUM7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTs7SUFFYixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyOiBkb2RnZXJibHVlO1xcbiAgICAtLWFjY2VudDogb3JhbmdlO1xcbiAgICAtLWxpZ2h0R3JheTogc2xhdGVncmV5O1xcbiAgICAtLW9mZndoaXRlOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhYTUyMDg4O1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbn1cXG4uYnV0dG9uOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO31cXG4uYnV0dG9uLmJhY2sge2JhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA4ODt9XFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcInNpZGViYXIgbWFpblxcXCI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlYWRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaWRlYmFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyYXkpO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNWZyIDFmcjtcXG59XFxuLnNpZGViYXI+Lmxpc3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgeWVsbG93Z3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuLmxpc3Q+LnByb2plY3QtZ3JvdXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmYwMDRmO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbi5wcm9qZWN0LWdyb3VwPioge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgwMDA2ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG4ucHJvamVjdC1ncm91cD4qW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG4ucHJvamVjdC1ncm91cD4ucHJvamVjdCB7Zm9udC13ZWlnaHQ6IDcwMDt9XFxuLnNpZGViYXI+Lm5ldyB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBvcmFuZ2U7ICovXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhOWE5YTlhYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDb250ZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmRpdiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBncmlkLWFyZWE6IG1haW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmRpdiNjb250ZW50Pi5idXR0b24ge1xcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBET00gZnJvbSAnLi9kb20uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50TWFuYWdlcihwcm9qZWN0TWFuYWdlcikge1xuICAgIHRoaXMuc3RhdGUgPSBudWxsOyAvLyBlbXB0eSwgcHJvamVjdEZvcm0sIHByb2plY3REaXNwbGF5LCB0YXNrRm9ybSwgdGFza0Rpc3BsYXlcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAvLyBtb3ZlIHRvIGlucHV0P1xuICAgIHRoaXMuc2lkZWJhck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICAgIHRoaXMucHJvamVjdE1hbmFnZXIgPSBwcm9qZWN0TWFuYWdlcjtcbn1cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKG5ld1N0YXRlLCBpdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ2NoYW5naW5nIHN0YXRlIHRvICcsIG5ld1N0YXRlKTtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gbmV3U3RhdGUgfHwgaXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMudXBkYXRlKGl0ZW0pO1xuICAgIH1cbn1cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGFmdGVyIGNoYW5naW5nIHN0YXRlIHRvICcsIHRoaXMuc3RhdGUpO1xuICAgIERPTS5jbGVhck5vZGUodGhpcy5ub2RlKTtcblxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlICdwcm9qZWN0Rm9ybSc6XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3RGb3JtKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdERpc3BsYXknOlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0RGlzcGxheShpdGVtKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0YXNrRm9ybSc6XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRhc2tGb3JtKGl0ZW0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Rhc2tEaXNwbGF5JzpcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFza0Rpc3BsYXkoaXRlbSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW1wdHknOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlUHJvamVjdEZvcm0gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgbmV3IHByb2plY3QgZm9ybS4uLicpO1xuXG4gICAgY29uc3QgW18sIGlucHV0Tm9kZV0gPSBET00uY3JlYXRlTGFiZWxlZElucHV0KHRoaXMubm9kZSwgJ3RleHQnLCAncHJvamVjdC10aXRsZScsICdQcm9qZWN0IFRpdGxlJyk7XG5cbiAgICBjb25zdCBidXR0b25Ob2RlID0gRE9NLmNyZWF0ZUJ1dHRvbih0aGlzLm5vZGUsICdjcmVhdGUtbmV3LXByb2plY3QnLCBudWxsLCAnQ3JlYXRlIE5ldyBQcm9qZWN0Jyk7XG5cbiAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBuZXcgcHJvamVjdCB3aXRoIG5hbWU6ICcsIGlucHV0Tm9kZS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KGlucHV0Tm9kZS52YWx1ZSB8fCAnRGVmYXVsdCBQcm9qZWN0IFRpdGxlJyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcbiAgICB9KTtcbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3REaXNwbGF5ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBuZXcgcHJvamVjdCBkaXNwbGF5IHBhZ2UuLi4nKTtcblxuICAgIC8vIFRPRE86IERpc3BsYXkgY3VycmVudCB0YXNrc1xuICAgIERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBudWxsLCAnUHJvamVjdCBUaXRsZTogJyArIHByb2plY3QubmFtZSk7XG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b24odGhpcy5ub2RlLCAnY3JlYXRlLW5ldy10YXNrJywgbnVsbCwgJ0NyZWF0ZSBOZXcgVGFzaycpO1xuXG4gICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgndGFza0Zvcm0nLCBwcm9qZWN0KTtcbiAgICB9KTtcbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVRhc2tGb3JtID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBuZXcgdGFzayBmb3JtLi4uJyk7XG5cbiAgICBsZXQgW18sIHRpdGxlTm9kZV0gPSBET00uY3JlYXRlTGFiZWxlZElucHV0KHRoaXMubm9kZSwgJ3RleHQnLCAndGFzay10aXRsZScsICdUYXNrIFRpdGxlJyk7XG4gICAgbGV0IFtfXywgZGVzY05vZGVdID0gRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dCh0aGlzLm5vZGUsICd0ZXh0JywgJ3Rhc2stZGVzYycsICdUYXNrIERlc2NyaXB0aW9uJyk7XG4gICAgbGV0IFtfX18sIGR1ZURhdGVOb2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQodGhpcy5ub2RlLCAnZGF0ZScsICd0YXNrLWR1ZS1kYXRlJywgJ1Rhc2sgRHVlIERhdGUnKTtcbiAgICBsZXQgW19fX18sIHByaW9Ob2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQodGhpcy5ub2RlLCAnbnVtYmVyJywgJ3Rhc2stcHJpbycsICdUYXNrIFByaW9yaXR5Jyk7XG5cbiAgICBjb25zdCBidXR0b25Ob2RlID0gRE9NLmNyZWF0ZUJ1dHRvbih0aGlzLm5vZGUsICdjcmVhdGUtbmV3LXRhc2snLCBudWxsLCAnQ3JlYXRlIE5ldyBUYXNrJyk7XG5cbiAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBuZXcgdGFzayB3aXRoIG5hbWU6ICcsIHRpdGxlTm9kZS52YWx1ZSk7XG5cbiAgICAgICAgcHJvamVjdC5jcmVhdGVUYXNrKHRpdGxlTm9kZS52YWx1ZSwgZGVzY05vZGUudmFsdWUsIGR1ZURhdGVOb2RlLnZhbHVlLCBwcmlvTm9kZS52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgIH0pO1xufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlVGFza0Rpc3BsYXkgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIG5ldyB0YXNrIGRpc3BsYXkgcGFnZS4uLicpO1xuXG4gICAgRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIG51bGwsICdUaXRsZTogJyArIHRhc2sudGl0bGUpO1xuICAgIERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBudWxsLCAnRGVzY3JpcHRpb246ICcgKyB0YXNrLmRlc2MpO1xuICAgIERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBudWxsLCAnRHVlIERhdGU6ICcgKyB0YXNrLmR1ZURhdGUpO1xuICAgIERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBudWxsLCAnUHJpb3JpdHk6ICcgKyB0YXNrLnByaW8pO1xuICAgIC8vIFRPRE86IGNzcyBjbGFzc2VzXG5cbiAgICAvLyBEZWxldGUgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gRE9NLmNyZWF0ZUJ1dHRvbih0aGlzLm5vZGUsICdkZWxldGUtdGFzaycsIG51bGwsICdEZWxldGUgVGFzaycpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFzay5kZWxldGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2VtcHR5Jyk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTaWRlYmFyID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIHNpZGViYXIuLi4nKTtcbiAgICBET00uY2xlYXJOb2RlKHRoaXMuc2lkZWJhck5vZGUpO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0KSB7XG4gICAgICAgIGxldCBncm91cE5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMuc2lkZWJhck5vZGUsIFsncHJvamVjdC1ncm91cCddKTtcbiAgICAgICAgbGV0IHByb2plY3ROb2RlID0gRE9NLmNyZWF0ZURpdihncm91cE5vZGUsIFsncHJvamVjdCddLCBwcm9qZWN0Lm5hbWUgKyAnIDogJyArIHByb2plY3QuaW5kZXgpO1xuXG4gICAgICAgIHByb2plY3ROb2RlLmRhdGFzZXQuc2VsZWN0ZWQgPSBwcm9qZWN0LnNlbGVjdGVkO1xuXG4gICAgICAgIHByb2plY3ROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncHJvamVjdERpc3BsYXknLCBwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgICAgICBsZXQgdGFza05vZGUgPSBET00uY3JlYXRlRGl2KGdyb3VwTm9kZSwgWyd0YXNrJ10sIHRhc2sudGl0bGUgKyBcIiA6IFwiICsgdGFzay5pbmRleCk7XG5cbiAgICAgICAgICAgIHRhc2tOb2RlLmRhdGFzZXQuc2VsZWN0ZWQgPSB0YXNrLnNlbGVjdGVkO1xuXG4gICAgICAgICAgICB0YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Rhc2tEaXNwbGF5JywgdGFzayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IERPTSA9IHt9O1xuXG5ET00uY2xlYXJOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIHdoaWxlKG5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbkRPTS5jcmVhdGVOb2RlID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgdGFnLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGNsYXNzTGlzdClcbiAgICAgICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzTGlzdClcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5ET00uY3JlYXRlRGl2ID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnZGl2JywgY2xhc3NMaXN0LCB0ZXh0Q29udGVudClcbn1cblxuRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dCA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGlucHV0VHlwZSwgaWQsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IGxhYmVsTm9kZSA9IHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnbGFiZWwnLCBudWxsLCB0ZXh0Q29udGVudCk7XG4gICAgbGFiZWxOb2RlLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuICAgIGxldCBpbnB1dE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2lucHV0Jyk7XG4gICAgaW5wdXROb2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgaW5wdXROb2RlLmlkID0gaWQ7XG4gICAgcmV0dXJuIFtsYWJlbE5vZGUsIGlucHV0Tm9kZV07XG59XG5cbkRPTS5jcmVhdGVCdXR0b24gPSBmdW5jdGlvbihwYXJlbnROb2RlLCBpZCwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBtZXJnZWRDbGFzc0xpc3QgPSAoY2xhc3NMaXN0KSA/IFsnYnV0dG9uJywgLi4uY2xhc3NMaXN0XSA6IFsnYnV0dG9uJ107XG4gICAgbGV0IG5vZGUgPSB0aGlzLmNyZWF0ZURpdihwYXJlbnROb2RlLCBtZXJnZWRDbGFzc0xpc3QsIHRleHRDb250ZW50KTtcbiAgICBub2RlLmlkID0gaWQ7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TWFuYWdlcigpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBudWxsO1xufVxuUHJvamVjdE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgLy8gU2V0IGluZGV4IHRvIGN1cnJlbnQgcHJvamVjdExpc3QgbGVuZ3RoXG4gICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KHRoaXMsIG5hbWUsIHRoaXMucHJvamVjdExpc3QubGVuZ3RoKSk7XG59XG5Qcm9qZWN0TWFuYWdlci5wcm90b3R5cGUuc2VsZWN0UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgcHJvamVjdCAjJywgcHJvamVjdC5pbmRleCk7XG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0LmluZGV4O1xufVxuUHJvamVjdE1hbmFnZXIucHJvdG90eXBlLmNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RMaXN0KSB7XG4gICAgICAgIHByb2plY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgICAgICB0YXNrLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBQcm9qZWN0KG1hbmFnZXIsIG5hbWUsIGluZGV4KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZFRhc2sgPSBudWxsO1xuXG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xufVxuUHJvamVjdC5wcm90b3R5cGUuY3JlYXRlVGFzayA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSB7XG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKG5ldyBUYXNrKHRoaXMsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSk7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCB0YXNrICMnLCB0aGlzLnNlbGVjdGVkVGFzayk7XG4gICAgdGhpcy5zZWxlY3RlZFRhc2sgPSB0YXNrLmluZGV4O1xufVxuUHJvamVjdC5wcm90b3R5cGUuYWRkU3RhcnRpbmdUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZGluZyBkZWZhdWx0IHN0YXJ0aW5nIHRhc2tzLi4uJyk7XG4gICAgdGhpcy50YXNrbGlzdC5wdXNoKG5ldyBUYXNrKCkpO1xufVxuUHJvamVjdC5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYW5hZ2VyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5kZWxldGVUYXNrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3RbaV0uaW5kZXggPSBpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlIHx8ICdwbGFjZWhvbGRlciB0aXRsZSc7XG4gICAgdGhpcy5kZXNjID0gZGVzYyB8fCAncGxhY2Vob2xkZXIgZGVzY3JpcHRpb24nO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUgfHwgJzAxLzAxLzIwMjMnO1xuICAgIHRoaXMucHJpbyA9IHByaW8gfHwgMDtcblxuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIC8vIFNldCBpbmRleCB0byBjdXJyZW50IHRhc2tMaXN0IGxlbmd0aFxuICAgIHRoaXMuaW5kZXggPSBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDtcbn1cblRhc2sucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJvamVjdC5tYW5hZ2VyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG59XG5UYXNrLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnByb2plY3QuZGVsZXRlVGFzayh0aGlzLmluZGV4KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jb25zb2xlLmxvZygnSGVsbG8sIFdvcmxkIScpO1xuXG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBDb250ZW50TWFuYWdlciBmcm9tICcuL2NvbnRlbnQuanMnO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xuY29uc3QgY29udGVudE1hbmFnZXIgPSBuZXcgQ29udGVudE1hbmFnZXIocHJvamVjdE1hbmFnZXIpO1xuXG5jb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVByb2plY3RGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudE1hbmFnZXIuY2hhbmdlU3RhdGUoJ3Byb2plY3RGb3JtJyk7XG59KTtcblxuY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIsIGNvbnRlbnRNYW5hZ2VyKVxuXG5cblxuXG4vLyBUT0RPOiByZW9yZ2FuaXplIHRhc2sgY29kZSBsb2NhdGlvblxuLy8gVE9ETzogYWRkIGljb25zXG4vLyBUT0RPOiBhZGQgc3VibWl0IGZvcm0gYnV0dG9uXG4vLyBUT0RPOiBmb3JtIHZhbGlkYXRpb25cbi8vIFRPRE86IHN0eWxlIGZvcm1cbi8vIFRPRE86IGFkZCBhYmlsaXR5IHRvIGNsaWNrIHRhc2tzXG4vLyBUT0RPOiBwYXNzIG5vZGUgdG8gRE9NXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=