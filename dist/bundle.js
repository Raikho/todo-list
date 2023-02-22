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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray: slategrey;\n    --offwhite: whitesmoke;\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    background-color: gray;\n    color: black;\n    font-family: verdana;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.list>.project-group {\n    border-radius: 5px;\n    background-color:#ffff004f;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.project-group>* {\n    border-radius: 5px;\n    background-color: #ff80006e;\n    padding: 3px;\n}\n.project-group>.project {font-weight: 700;}\n.sidebar>.new {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,2BAA2B;AAC/B;AACA;IACI,2BAA2B;AAC/B;AACA,gBAAgB,wBAAwB,CAAC;AACzC,cAAc,2BAA2B,CAAC;AAC1C;IACI,YAAY;IACZ,aAAa;IACb,WAAW;;IAEX,sBAAsB;IACtB,YAAY;IACZ,oBAAoB;IACpB,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,mDAAmD;AACvD;;AAEA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,+BAA+B;IAC/B,YAAY;IACZ,YAAY;;IAEZ,iBAAiB;IACjB,6BAA6B;IAC7B,UAAU;AACd;;AAEA,sEAAsE;AACtE,sEAAsE;;AAEtE;IACI,kBAAkB;;IAElB,kCAAkC;IAClC,6BAA6B;IAC7B,UAAU;;IAEV,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,oCAAoC;IACpC,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,YAAY;AAChB;AACA,yBAAyB,gBAAgB,CAAC;AAC1C;IACI,+BAA+B;IAC/B,eAAe;IACf,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;AACvB;;AAEA,sEAAsE;AACtE,sEAAsE;AACtE;IACI,iCAAiC;IACjC,aAAa;;IAEb,eAAe;;IAEf,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray: slategrey;\n    --offwhite: whitesmoke;\n}\n\n.button {\n    padding: 4px 12px;\n    border-radius: 4px;\n    background-color: #daa52088;\n}\n.button:hover {\n    background-color: goldenrod;\n}\n.button:active {background-color: orange;}\n.button.back {background-color: #ff450088;}\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    background-color: gray;\n    color: black;\n    font-family: verdana;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.list>.project-group {\n    border-radius: 5px;\n    background-color:#ffff004f;\n    padding: 10px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.project-group>* {\n    border-radius: 5px;\n    background-color: #ff80006e;\n    padding: 3px;\n}\n.project-group>.project {font-weight: 700;}\n.sidebar>.new {\n    /* border: 1px dotted orange; */\n    padding: 0 15px;\n    border-top: 1px solid #a9a9a9aa;\n    display: flex;\n    align-items: center;\n}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 15px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}"],"sourceRoot":""}]);
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
ContentManager.prototype.changeState = function(newState) {
    console.log('changing state to ', newState);
    if (this.state !== newState) {
        this.state = newState;
        this.update();
    }
}
ContentManager.prototype.update = function() {
    console.log('updating after changing state to ', this.state);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.node);

    switch (this.state) {
        case 'projectForm':
            this.createProjectForm();
            break;
        case 'projectDisplay':
            this.createProjectDisplay();
            break;
        case 'taskForm':
            this.createTaskForm();
            break;
        case 'taskDisplay':
            this.createTaskDisplay();
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

ContentManager.prototype.createProjectDisplay = function() {
    console.log('creating new project display page...');

    // TODO: Display current tasks

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm');
    });
}

ContentManager.prototype.createTaskForm = function() {
    console.log('creating new task form...');

    let [_, titleNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'text', 'task-title', 'Task Title');

    let [__, descNode] = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(this.node, 'text', 'task-desc', 'Task Description');

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButton(this.node, 'create-new-task', null, 'Create New Task');

    buttonNode.addEventListener('click', () => {
        console.log('creating a new task with name: ', titleNode.value);

        const currProject = this.projectManager.projectList[this.projectManager.selectedProject];
        currProject.createTask(titleNode.value);
        console.log(currProject);

        this.updateSidebar();

        // TODO: change state: task display
    });
}

ContentManager.prototype.createTaskDisplay = function() {
    console.log('creating new task display page...');

    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, null, 'insert title of task here');
}

ContentManager.prototype.updateSidebar = function() {
    console.log('updating sidebar...');
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearNode(this.sidebarNode);

    for (let project of this.projectManager.projectList) {
        let groupNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.sidebarNode, ['project-group']);
        let projectNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(groupNode, ['project'], project.name);
        projectNode.addEventListener('click', () => {
            this.projectManager.selectProject(project);
            this.changeState('projectDisplay');
        });

        for (let task of project.taskList) {
            let taskNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(groupNode, ['task'], task.title);
            taskNode.addEventListener('click', () => {
                // TODO: add selected task functionality
                this.changeState('taskDisplay');
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
    this.projectList.push(new Project(name, this.projectList.length));
}
ProjectManager.prototype.selectProject = function(project) {
    console.log('selected project #', project.index);
    this.selectedProject = project.index;
}

function Project(name, index) {
    this.name = name;
    this.taskList = [];
    this.selectedTask = null;

    this.index = index;
}
Project.prototype.createTask = function(title) {
    // Set index to current taskList length
    this.taskList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, this.taskList.length));
}
Project.prototype.selectTask = function(task) {
    console.log('selected task #', this.selectedTask);
    this.selectedTask = task.index;
}
Project.prototype.addStartingTask = function() {
    console.log('adding default starting tasks...');
    this.tasklist.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"]());
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
function Task(title, index) {
    this.taskNum = 'placeholder num';
    this.title = title || 'placeholder title';
    this.desc = 'placeholder description';
    this.dueDate = 'placeholder due date';
    this.prio = 'placeholder priority';

    this.index = index;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9COztBQUVwQjs7QUFFMEM7QUFDQTs7QUFFMUMsMkJBQTJCLG1EQUFjO0FBQ3pDLDJCQUEyQixtREFBYzs7QUFFekM7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyOiBkb2RnZXJibHVlO1xcbiAgICAtLWFjY2VudDogb3JhbmdlO1xcbiAgICAtLWxpZ2h0R3JheTogc2xhdGVncmV5O1xcbiAgICAtLW9mZndoaXRlOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhYTUyMDg4O1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcbn1cXG4uYnV0dG9uOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO31cXG4uYnV0dG9uLmJhY2sge2JhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA4ODt9XFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcInNpZGViYXIgbWFpblxcXCI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlYWRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaWRlYmFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyYXkpO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNWZyIDFmcjtcXG59XFxuLnNpZGViYXI+Lmxpc3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgeWVsbG93Z3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuLmxpc3Q+LnByb2plY3QtZ3JvdXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmYwMDRmO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbi5wcm9qZWN0LWdyb3VwPioge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgwMDA2ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbn1cXG4ucHJvamVjdC1ncm91cD4ucHJvamVjdCB7Zm9udC13ZWlnaHQ6IDcwMDt9XFxuLnNpZGViYXI+Lm5ldyB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBvcmFuZ2U7ICovXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhOWE5YTlhYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDb250ZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmRpdiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBncmlkLWFyZWE6IG1haW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmRpdiNjb250ZW50Pi5idXR0b24ge1xcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0EsZ0JBQWdCLHdCQUF3QixDQUFDO0FBQ3pDLGNBQWMsMkJBQTJCLENBQUM7QUFDMUM7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixtREFBbUQ7QUFDdkQ7O0FBRUEsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTs7SUFFWixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQSxzRUFBc0U7QUFDdEUsc0VBQXNFOztBQUV0RTtJQUNJLGtCQUFrQjs7SUFFbEIsa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixVQUFVOztJQUVWLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBLHlCQUF5QixnQkFBZ0IsQ0FBQztBQUMxQztJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUEsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhOztJQUViLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1oZWFkZXI6IGRvZGdlcmJsdWU7XFxuICAgIC0tYWNjZW50OiBvcmFuZ2U7XFxuICAgIC0tbGlnaHRHcmF5OiBzbGF0ZWdyZXk7XFxuICAgIC0tb2Zmd2hpdGU6IHdoaXRlc21va2U7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFhNTIwODg7XFxufVxcbi5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcbi5idXR0b246YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7fVxcbi5idXR0b24uYmFjayB7YmFja2dyb3VuZC1jb2xvcjogI2ZmNDUwMDg4O31cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogdmVyZGFuYTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwic2lkZWJhciBtYWluXFxcIjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVhZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4ICMwMDAzO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNpZGViYXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JheSk7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1ZnIgMWZyO1xcbn1cXG4uc2lkZWJhcj4ubGlzdCB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCB5ZWxsb3dncmVlbjsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4ubGlzdD4ucHJvamVjdC1ncm91cCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZjAwNGY7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuLnByb2plY3QtZ3JvdXA+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODAwMDZlO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxufVxcbi5wcm9qZWN0LWdyb3VwPi5wcm9qZWN0IHtmb250LXdlaWdodDogNzAwO31cXG4uc2lkZWJhcj4ubmV3IHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIG9yYW5nZTsgKi9cXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2E5YTlhOWFhO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IENvbnRlbnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuZGl2I2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZGl2I2NvbnRlbnQ+LmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRNYW5hZ2VyKHByb2plY3RNYW5hZ2VyKSB7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7IC8vIGVtcHR5LCBwcm9qZWN0Rm9ybSwgcHJvamVjdERpc3BsYXksIHRhc2tGb3JtLCB0YXNrRGlzcGxheVxuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IC8vIG1vdmUgdG8gaW5wdXQ/XG4gICAgdGhpcy5zaWRlYmFyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgdGhpcy5wcm9qZWN0TWFuYWdlciA9IHByb2plY3RNYW5hZ2VyO1xufVxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24obmV3U3RhdGUpIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdpbmcgc3RhdGUgdG8gJywgbmV3U3RhdGUpO1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBuZXdTdGF0ZSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxufVxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBhZnRlciBjaGFuZ2luZyBzdGF0ZSB0byAnLCB0aGlzLnN0YXRlKTtcbiAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG5cbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY2FzZSAncHJvamVjdEZvcm0nOlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb2plY3REaXNwbGF5JzpcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdERpc3BsYXkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0YXNrRm9ybSc6XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRhc2tGb3JtKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGFza0Rpc3BsYXknOlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUYXNrRGlzcGxheSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VtcHR5JzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3RGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIG5ldyBwcm9qZWN0IGZvcm0uLi4nKTtcblxuICAgIGNvbnN0IFtfLCBpbnB1dE5vZGVdID0gRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dCh0aGlzLm5vZGUsICd0ZXh0JywgJ3Byb2plY3QtdGl0bGUnLCAnUHJvamVjdCBUaXRsZScpO1xuXG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b24odGhpcy5ub2RlLCAnY3JlYXRlLW5ldy1wcm9qZWN0JywgbnVsbCwgJ0NyZWF0ZSBOZXcgUHJvamVjdCcpO1xuXG4gICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGEgbmV3IHByb2plY3Qgd2l0aCBuYW1lOiAnLCBpbnB1dE5vZGUudmFsdWUpO1xuXG4gICAgICAgIHRoaXMucHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChpbnB1dE5vZGUudmFsdWUgfHwgJ0RlZmF1bHQgUHJvamVjdCBUaXRsZScpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2VtcHR5Jyk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVQcm9qZWN0RGlzcGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBuZXcgcHJvamVjdCBkaXNwbGF5IHBhZ2UuLi4nKTtcblxuICAgIC8vIFRPRE86IERpc3BsYXkgY3VycmVudCB0YXNrc1xuXG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b24odGhpcy5ub2RlLCAnY3JlYXRlLW5ldy10YXNrJywgbnVsbCwgJ0NyZWF0ZSBOZXcgVGFzaycpO1xuXG4gICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgndGFza0Zvcm0nKTtcbiAgICB9KTtcbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVRhc2tGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIG5ldyB0YXNrIGZvcm0uLi4nKTtcblxuICAgIGxldCBbXywgdGl0bGVOb2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQodGhpcy5ub2RlLCAndGV4dCcsICd0YXNrLXRpdGxlJywgJ1Rhc2sgVGl0bGUnKTtcblxuICAgIGxldCBbX18sIGRlc2NOb2RlXSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQodGhpcy5ub2RlLCAndGV4dCcsICd0YXNrLWRlc2MnLCAnVGFzayBEZXNjcmlwdGlvbicpO1xuXG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b24odGhpcy5ub2RlLCAnY3JlYXRlLW5ldy10YXNrJywgbnVsbCwgJ0NyZWF0ZSBOZXcgVGFzaycpO1xuXG4gICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGEgbmV3IHRhc2sgd2l0aCBuYW1lOiAnLCB0aXRsZU5vZGUudmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJQcm9qZWN0ID0gdGhpcy5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFt0aGlzLnByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdF07XG4gICAgICAgIGN1cnJQcm9qZWN0LmNyZWF0ZVRhc2sodGl0bGVOb2RlLnZhbHVlKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VyclByb2plY3QpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuXG4gICAgICAgIC8vIFRPRE86IGNoYW5nZSBzdGF0ZTogdGFzayBkaXNwbGF5XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVUYXNrRGlzcGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBuZXcgdGFzayBkaXNwbGF5IHBhZ2UuLi4nKTtcblxuICAgIERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBudWxsLCAnaW5zZXJ0IHRpdGxlIG9mIHRhc2sgaGVyZScpO1xufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUudXBkYXRlU2lkZWJhciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBzaWRlYmFyLi4uJyk7XG4gICAgRE9NLmNsZWFyTm9kZSh0aGlzLnNpZGViYXJOb2RlKTtcblxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdCkge1xuICAgICAgICBsZXQgZ3JvdXBOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLnNpZGViYXJOb2RlLCBbJ3Byb2plY3QtZ3JvdXAnXSk7XG4gICAgICAgIGxldCBwcm9qZWN0Tm9kZSA9IERPTS5jcmVhdGVEaXYoZ3JvdXBOb2RlLCBbJ3Byb2plY3QnXSwgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgcHJvamVjdE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RNYW5hZ2VyLnNlbGVjdFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdwcm9qZWN0RGlzcGxheScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgICAgIGxldCB0YXNrTm9kZSA9IERPTS5jcmVhdGVEaXYoZ3JvdXBOb2RlLCBbJ3Rhc2snXSwgdGFzay50aXRsZSk7XG4gICAgICAgICAgICB0YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZGQgc2VsZWN0ZWQgdGFzayBmdW5jdGlvbmFsaXR5XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgndGFza0Rpc3BsYXknKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiY29uc3QgRE9NID0ge307XG5cbkRPTS5jbGVhck5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgd2hpbGUobm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuRE9NLmNyZWF0ZU5vZGUgPSBmdW5jdGlvbihwYXJlbnROb2RlLCB0YWcsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAoY2xhc3NMaXN0KVxuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY2xhc3NMaXN0KVxuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbkRPTS5jcmVhdGVEaXYgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICByZXR1cm4gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdkaXYnLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KVxufVxuXG5ET00uY3JlYXRlTGFiZWxlZElucHV0ID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgaW5wdXRUeXBlLCBpZCwgdGV4dENvbnRlbnQpIHtcbiAgICBsZXQgbGFiZWxOb2RlID0gdGhpcy5jcmVhdGVOb2RlKHBhcmVudE5vZGUsICdsYWJlbCcsIG51bGwsIHRleHRDb250ZW50KTtcbiAgICBsYWJlbE5vZGUuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG4gICAgbGV0IGlucHV0Tm9kZSA9IHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnaW5wdXQnKTtcbiAgICBpbnB1dE5vZGUudHlwZSA9IGlucHV0VHlwZTtcbiAgICBpbnB1dE5vZGUuaWQgPSBpZDtcbiAgICByZXR1cm4gW2xhYmVsTm9kZSwgaW5wdXROb2RlXTtcbn1cblxuRE9NLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGlkLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IG1lcmdlZENsYXNzTGlzdCA9IChjbGFzc0xpc3QpID8gWydidXR0b24nLCAuLi5jbGFzc0xpc3RdIDogWydidXR0b24nXTtcbiAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlRGl2KHBhcmVudE5vZGUsIG1lcmdlZENsYXNzTGlzdCwgdGV4dENvbnRlbnQpO1xuICAgIG5vZGUuaWQgPSBpZDtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNYW5hZ2VyKCkge1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG59XG5Qcm9qZWN0TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAvLyBTZXQgaW5kZXggdG8gY3VycmVudCBwcm9qZWN0TGlzdCBsZW5ndGhcbiAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QobmFtZSwgdGhpcy5wcm9qZWN0TGlzdC5sZW5ndGgpKTtcbn1cblByb2plY3RNYW5hZ2VyLnByb3RvdHlwZS5zZWxlY3RQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBwcm9qZWN0ICMnLCBwcm9qZWN0LmluZGV4KTtcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3QuaW5kZXg7XG59XG5cbmZ1bmN0aW9uIFByb2plY3QobmFtZSwgaW5kZXgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkVGFzayA9IG51bGw7XG5cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5jcmVhdGVUYXNrID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICAvLyBTZXQgaW5kZXggdG8gY3VycmVudCB0YXNrTGlzdCBsZW5ndGhcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2gobmV3IFRhc2sodGl0bGUsIHRoaXMudGFza0xpc3QubGVuZ3RoKSk7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCB0YXNrICMnLCB0aGlzLnNlbGVjdGVkVGFzayk7XG4gICAgdGhpcy5zZWxlY3RlZFRhc2sgPSB0YXNrLmluZGV4O1xufVxuUHJvamVjdC5wcm90b3R5cGUuYWRkU3RhcnRpbmdUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZGluZyBkZWZhdWx0IHN0YXJ0aW5nIHRhc2tzLi4uJyk7XG4gICAgdGhpcy50YXNrbGlzdC5wdXNoKG5ldyBUYXNrKCkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2sodGl0bGUsIGluZGV4KSB7XG4gICAgdGhpcy50YXNrTnVtID0gJ3BsYWNlaG9sZGVyIG51bSc7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlIHx8ICdwbGFjZWhvbGRlciB0aXRsZSc7XG4gICAgdGhpcy5kZXNjID0gJ3BsYWNlaG9sZGVyIGRlc2NyaXB0aW9uJztcbiAgICB0aGlzLmR1ZURhdGUgPSAncGxhY2Vob2xkZXIgZHVlIGRhdGUnO1xuICAgIHRoaXMucHJpbyA9ICdwbGFjZWhvbGRlciBwcmlvcml0eSc7XG5cbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc29sZS5sb2coJ0hlbGxvLCBXb3JsZCEnKTtcblxuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgQ29udGVudE1hbmFnZXIgZnJvbSAnLi9jb250ZW50LmpzJztcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcbmNvbnN0IGNvbnRlbnRNYW5hZ2VyID0gbmV3IENvbnRlbnRNYW5hZ2VyKHByb2plY3RNYW5hZ2VyKTtcblxuY29udGVudE1hbmFnZXIuY2hhbmdlU3RhdGUoJ2VtcHR5Jyk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVQcm9qZWN0Rm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRlbnRNYW5hZ2VyLmNoYW5nZVN0YXRlKCdwcm9qZWN0Rm9ybScpO1xufSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLCBjb250ZW50TWFuYWdlcilcblxuXG5cblxuLy8gVE9ETzogcmVvcmdhbml6ZSB0YXNrIGNvZGUgbG9jYXRpb25cbi8vIFRPRE86IGFkZCBpY29uc1xuLy8gVE9ETzogYWRkIHN1Ym1pdCBmb3JtIGJ1dHRvblxuLy8gVE9ETzogZm9ybSB2YWxpZGF0aW9uXG4vLyBUT0RPOiBzdHlsZSBmb3JtXG4vLyBUT0RPOiBhZGQgYWJpbGl0eSB0byBjbGljayB0YXNrc1xuLy8gVE9ETzogcGFzcyBub2RlIHRvIERPTVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9