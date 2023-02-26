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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/add-project.svg */ "./src/assets/add-project.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! assets/add.svg */ "./src/assets/add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! assets/delete.svg */ "./src/assets/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400,500,700);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray2: slategrey;\n    --offwhite2: whitesmoke;\n\n    --darkBackground: #1f2937;\n    --offwhite: #f9faf8;\n    --lightGray: #e5e7eb;\n    --blue: #3882f6;\n    --darkBlue: #1f2937;\n    --darkGreen: #15803d;\n\n    --skyBlue: #38bdf8;\n    --indigo: #05050788;\n    --indigoBrighter: #45455f88;\n    --red: #dc2626;\n    --green: #16a34a;\n    --lightGreen: #4ade80;\n    --lightSlate: #e2e8f0;\n    --medSlate: #94a3b8;\n    --darkSlate: #475569;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    color: var(--darkBlue);\n    /* font-family: 'Roboto'; */\n    font-family: Helvetica;\n    font-weight: 400;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n/* ============================ Generic ============================ */\n/* ================================================================= */\n\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    font-size: 14px;\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n    border-bottom: 1px solid #a9a9a9aa;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n/* ========== Project Group ========== */\n.project-group {\n    border-radius: 5px;\n    /* border: 1px dotted lightcoral; */\n    padding: 5px;\n\n    display: flex;\n    flex-direction: column;\n}\n.project-group>* {\n    border-radius: 5px;\n    /* background-color: #ff800044; */\n    padding: 2px;\n}\n\n/* ========== Project Container ========== */\n.project-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"icon .. title\";\n}\n.project-container>.icon {\n    grid-area: icon;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-color: var(--skyBlue);\n    width: 20px;\n    height: 20px;\n}\n.project-container>.title {\n    grid-area: title;\n    font-weight: 700;\n}\n.project-container[data-selected=\"true\"],\n.task-container[data-selected=\"true\"] {\n    background-color: lightgray;\n}\n.project-container>.title:hover,\n.task-container>.title:hover\n{\n    filter: brightness(3.5);\n}\n\n/* ========== Task Container ========== */\n.task-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"checkbox .. title\";\n}\n/* .sidebar .task-container>* {border: 1px dotted darkblue;} */\n.task-container>.title {\n    grid-area: title;\n    align-self: center;\n}\n.task-container>.checkbox {\n    grid-area: checkbox;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-color: var(--indigo);\n    width: 20px;\n    height: 20px;\n}\n.task-container>.checkbox[data-checked=\"true\"] {\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.task-container>.checkbox:hover {\n    background-color: var(--indigoBrighter);\n}\n\n/* ========== Bottom, New Project ========== */\n.sidebar>.bot {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n}\n.button-container {\n    height: min-content;\n    border-radius: 5px;\n    border: 2px solid #0000;\n\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n#new-project-form>.icon {\n    padding: 0;\n\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-color: var(--green);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n.button-container:hover {border-color: var(--darkGreen);}\n.button-container:active {background-color: rgba(164, 164, 54, 0.248);}\n.button-container:hover>.icon {background-color: var(--lightGreen);}\n.button-container>.text {white-space: nowrap; padding-right: 4px;}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 50px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}\n.card {\n    padding: 20px 0;\n    border-top: 2px solid lightgray;\n\n    /* background-color: rgba(173, 216, 230, 0.216); */\n    height: min-content;\n}\n.card:first-of-type {border-top: none;}\n/* ======================== Project Display ======================== */\n.project-display-container {\n    display: flex;\n    flex-direction: column;\n}\n.project-display-container>.project-title {\n    font-size: 24px;\n    font-weight: 700;\n}\n#new-task-form {width: min-content;}\n#new-task-form>.icon {\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-color: var(--green);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n\n/* ========================= Task Display ========================== */\n.task-display-container {\n    display: grid;\n    grid-template-rows: repeat(min-content, 5);\n    grid-template-areas:\n        \"title\"\n        \"desc\"\n        \"dueDate\"\n        \"prio\"\n        \"delete\";\n}\n\n.task-display-container>.task-title {\n    grid-area: title;\n    font-size: 24px;\n    font-weight: 700;\n}\n#delete-task {\n    grid-area: delete;\n    width: min-content;\n}\n#delete-task>.icon {\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-color: var(--red);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n#delete-task:hover {border-color: var(--red);}\n\n/* ========================= Project Form ========================== */\ninput {\n    border: none;\n    outline: 0;\n    padding: 5px;\n    border-radius: 4px;\n    background: var(--lightSlate);\n    color: var(--darkSlate);\n    box-shadow: 3px 3px 6px rgba(0,0,0,.05) inset;\n    margin-bottom: 30px;\n}\ninput::placeholder {\n    color: var(--medSlate);\n}\n\n#create-new-project {width: min-content;}\n#create-new-project>.icon {\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-color: var(--green);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n#create-new-project:hover {border-color: var(--green);}\n\n/* =========================== Task Form =========================== */\n.task-form-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n}\n.task-form-container>* {\n    grid-column: 1 / 2;\n}\n#task-title,\n#task-desc {\n    grid-column: span 2;\n}\n#task-due-date {color: var(--medSlate);}\n\n#create-new-task {width: min-content;}\n#create-new-task>.icon {\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-color: var(--green);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n#create-new-task:hover {border-color: var(--green);}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --header: dodgerblue;\n    --accent: orange;\n    --lightGray2: slategrey;\n    --offwhite2: whitesmoke;\n\n    --darkBackground: #1f2937;\n    --offwhite: #f9faf8;\n    --lightGray: #e5e7eb;\n    --blue: #3882f6;\n    --darkBlue: #1f2937;\n    --darkGreen: #15803d;\n\n    --skyBlue: #38bdf8;\n    --indigo: #05050788;\n    --indigoBrighter: #45455f88;\n    --red: #dc2626;\n    --green: #16a34a;\n    --lightGreen: #4ade80;\n    --lightSlate: #e2e8f0;\n    --medSlate: #94a3b8;\n    --darkSlate: #475569;\n}\n\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,400,500,700\");\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    margin: 0 0;\n\n    color: var(--darkBlue);\n    /* font-family: 'Roboto'; */\n    font-family: Helvetica;\n    font-weight: 400;\n    font-size: 16px;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 15fr;\n    grid-template-areas: \"header header\" \"sidebar main\";\n}\n/* ============================ Generic ============================ */\n/* ================================================================= */\n\n\n/* ============================= Header ============================ */\n/* ================================================================= */\n.header {\n    background-color: var(--header);\n    padding: 5px;\n    color: white;\n\n    grid-area: header;\n    box-shadow: 0px 4px 4px #0003;\n    z-index: 2;\n}\n\n/* ============================ Sidebar ============================ */\n/* ================================================================= */\n\n.sidebar {\n    grid-area: sidebar;\n\n    font-size: 14px;\n    background-color: var(--lightGray);\n    box-shadow: 4px 4px 4px #0003;\n    z-index: 1;\n\n    display: grid;\n    grid-template-rows: 15fr 1fr;\n}\n.sidebar>.list {\n    /* border: 1px dotted yellowgreen; */\n    padding: 15px;\n    border-bottom: 1px solid #a9a9a9aa;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n/* ========== Project Group ========== */\n.project-group {\n    border-radius: 5px;\n    /* border: 1px dotted lightcoral; */\n    padding: 5px;\n\n    display: flex;\n    flex-direction: column;\n}\n.project-group>* {\n    border-radius: 5px;\n    /* background-color: #ff800044; */\n    padding: 2px;\n}\n\n/* ========== Project Container ========== */\n.project-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"icon .. title\";\n}\n.project-container>.icon {\n    grid-area: icon;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url('assets/project.svg');\n    mask-image: url('assets/project.svg');\n    background-color: var(--skyBlue);\n    width: 20px;\n    height: 20px;\n}\n.project-container>.title {\n    grid-area: title;\n    font-weight: 700;\n}\n.project-container[data-selected=\"true\"],\n.task-container[data-selected=\"true\"] {\n    background-color: lightgray;\n}\n.project-container>.title:hover,\n.task-container>.title:hover\n{\n    filter: brightness(3.5);\n}\n\n/* ========== Task Container ========== */\n.task-container {\n    display: grid;\n    grid-template-columns: 20px 5px 1fr;\n    grid-template-areas: \"checkbox .. title\";\n}\n/* .sidebar .task-container>* {border: 1px dotted darkblue;} */\n.task-container>.title {\n    grid-area: title;\n    align-self: center;\n}\n.task-container>.checkbox {\n    grid-area: checkbox;\n\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url('assets/checkbox-unchecked.svg');\n    mask-image: url('assets/checkbox-unchecked.svg');\n    background-color: var(--indigo);\n    width: 20px;\n    height: 20px;\n}\n.task-container>.checkbox[data-checked=\"true\"] {\n    -webkit-mask-image: url('assets/checkbox-checked.svg');\n    mask-image: url('assets/checkbox-checked.svg');\n}\n.task-container>.checkbox:hover {\n    background-color: var(--indigoBrighter);\n}\n\n/* ========== Bottom, New Project ========== */\n.sidebar>.bot {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n}\n.button-container {\n    height: min-content;\n    border-radius: 5px;\n    border: 2px solid #0000;\n\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n#new-project-form>.icon {\n    padding: 0;\n\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url('assets/add-project.svg');\n    mask-image: url('assets/add-project.svg');\n    background-color: var(--green);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n.button-container:hover {border-color: var(--darkGreen);}\n.button-container:active {background-color: rgba(164, 164, 54, 0.248);}\n.button-container:hover>.icon {background-color: var(--lightGreen);}\n.button-container>.text {white-space: nowrap; padding-right: 4px;}\n\n/* ============================ Content ============================ */\n/* ================================================================= */\ndiv#content {\n    background-color: var(--offwhite);\n    padding: 50px;\n\n    grid-area: main;\n\n    display: flex;\n    flex-direction: column;\n}\ndiv#content>.button {\n    margin: 20px 0 0 0;\n}\n.card {\n    padding: 20px 0;\n    border-top: 2px solid lightgray;\n\n    /* background-color: rgba(173, 216, 230, 0.216); */\n    height: min-content;\n}\n.card:first-of-type {border-top: none;}\n/* ======================== Project Display ======================== */\n.project-display-container {\n    display: flex;\n    flex-direction: column;\n}\n.project-display-container>.project-title {\n    font-size: 24px;\n    font-weight: 700;\n}\n#new-task-form {width: min-content;}\n#new-task-form>.icon {\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url('assets/add.svg');\n    mask-image: url('assets/add.svg');\n    background-color: var(--green);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n\n/* ========================= Task Display ========================== */\n.task-display-container {\n    display: grid;\n    grid-template-rows: repeat(min-content, 5);\n    grid-template-areas:\n        \"title\"\n        \"desc\"\n        \"dueDate\"\n        \"prio\"\n        \"delete\";\n}\n\n.task-display-container>.task-title {\n    grid-area: title;\n    font-size: 24px;\n    font-weight: 700;\n}\n#delete-task {\n    grid-area: delete;\n    width: min-content;\n}\n#delete-task>.icon {\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url('assets/delete.svg');\n    mask-image: url('assets/delete.svg');\n    background-color: var(--red);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n#delete-task:hover {border-color: var(--red);}\n\n/* ========================= Project Form ========================== */\ninput {\n    border: none;\n    outline: 0;\n    padding: 5px;\n    border-radius: 4px;\n    background: var(--lightSlate);\n    color: var(--darkSlate);\n    box-shadow: 3px 3px 6px rgba(0,0,0,.05) inset;\n    margin-bottom: 30px;\n}\ninput::placeholder {\n    color: var(--medSlate);\n}\n\n#create-new-project {width: min-content;}\n#create-new-project>.icon {\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url('assets/add.svg');\n    mask-image: url('assets/add.svg');\n    background-color: var(--green);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n#create-new-project:hover {border-color: var(--green);}\n\n/* =========================== Task Form =========================== */\n.task-form-container {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n}\n.task-form-container>* {\n    grid-column: 1 / 2;\n}\n#task-title,\n#task-desc {\n    grid-column: span 2;\n}\n#task-due-date {color: var(--medSlate);}\n\n#create-new-task {width: min-content;}\n#create-new-task>.icon {\n    -webkit-mask-size: contain;\n    mask-size: contain;\n    -webkit-mask-image: url('assets/add.svg');\n    mask-image: url('assets/add.svg');\n    background-color: var(--green);\n    background-repeat: no-repeat;\n    width: 20px;\n    height: 20px;\n}\n#create-new-task:hover {border-color: var(--green);}\n\n"],"sourceRoot":""}]);
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
    const inputNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'text', 'project-title', 'Project Title');
    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonContainer(containerNode, 'create-new-project', 'Add Project');

    buttonNode.addEventListener('click', () => {
        this.projectManager.createProject(inputNode.value || 'Default Project Title');
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.createProjectDisplay = function(project) {
    let containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['project-display-container']);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['card', 'project-title'], 'Project: ' + project.name);

    // DOM.createDiv(containerNode, null, 'Tasks: ');
    for (let task of project.taskList) {
        _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['card'], task.title);
    }

    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonContainer(containerNode, 'new-task-form', 'New Task');
    buttonNode.addEventListener('click', () => {
        this.changeState('taskForm', project);
    });
}

ContentManager.prototype.createTaskForm = function(project) {
    let containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['task-form-container']);
    let titleNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'text', 'task-title', 'Task Title');
    let descNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'text', 'task-desc', 'Task Description');
    let dueDateNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'date', 'task-due-date', 'Task Due Date');
    let prioNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createLabeledInput(containerNode, 'number', 'task-prio', 'Task Priority');
    prioNode.setAttribute('max', '10');
    prioNode.setAttribute('min', '1');


    const buttonNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonContainer(containerNode, 'create-new-task', 'Add Task');

    buttonNode.addEventListener('click', () => {
        project.createTask(titleNode.value, descNode.value, dueDateNode.value, prioNode.value);
        this.updateSidebar();
        this.changeState('empty');
    });
}

ContentManager.prototype.createTaskDisplay = function(task) {
    let containerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(this.node, ['task-display-container']);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['task-title', 'card'], 'Task: ' + task.title);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['task-desc', 'card'], task.desc);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['task-due-date', 'card'], 'Due Date: ' + task.dueDate);
    _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(containerNode, ['task-prio', 'card'], 'Priority: ' + task.prio);
    // TODO: css classes

    // Delete Button
    const deleteButton = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createButtonContainer(containerNode, 'delete-task', 'Delete');
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
        let projectTitleNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(projectContainerNode, ['title'], project.name);

        projectContainerNode.dataset.selected = project.selected;

        projectTitleNode.addEventListener('click', () => {
            project.select();
            this.updateSidebar();
            this.changeState('projectDisplay', project);
        });

        for (let task of project.taskList) {
            let taskContainerNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(projectGroupNode, ['task-container']);
            let taskNode = _dom_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv(taskContainerNode, ['title'], task.title);
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
    let inputNode = this.createNode(parentNode, 'input');
    inputNode.type = inputType;
    inputNode.id = id;
    inputNode.setAttribute('placeholder', textContent);
    return inputNode;
}

DOM.createButton = function(parentNode, id, classList, textContent) {
    let mergedClassList = (classList) ? ['button', ...classList] : ['button'];
    let node = this.createDiv(parentNode, mergedClassList, textContent);
    node.id = id;
    return node;
}
DOM.createButtonContainer = function(parentNode, id, textContent) {
    let containerNode = this.createDiv(parentNode, ['button-container'], null);
    containerNode.id = id;
    let iconNode = this.createDiv(containerNode, ['icon'], null);
    let textNode = this.createDiv(containerNode, ['text'], textContent);
    return containerNode;
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
    this.prio = prio || 1;
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

/***/ "./src/assets/add-project.svg":
/*!************************************!*\
  !*** ./src/assets/add-project.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add-project.svg";

/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add.svg";

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

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete.svg";

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


document.getElementById('new-project-form').addEventListener('click', () => {
    contentManager.changeState('projectForm');
});



// INITIAL VALUES
projectManager.createProject('Daily Errands');
projectManager.projectList[0].createTask('Buy Groceries', 'Pick up groceries from the store.', null, 6);
projectManager.projectList[0].createTask('Wash Dishes', 'Wash today\'s dishes.', null, 4);
projectManager.projectList[0].createTask('Walk Dog', 'Walk the dog for 15 minutes.', null, 7);
projectManager.createProject('Monthly Tasks');
projectManager.projectList[1].createTask('Pay Bills', 'Pay credit card and electric bills.', null, 10);
projectManager.projectList[1].createTask('Change Bulbs', 'Change light bulbs that are fused.',null, 5);

contentManager.changeState('empty');
contentManager.updateSidebar();

// START AT FIRST PROJECT DISPLAY
// let project = projectManager.projectList[0];
// project.select();
// let task = projectManager.projectList[0].taskList[0];
// task.select();
contentManager.updateSidebar();
contentManager.changeState('taskForm', projectManager.projectList[0]);
// contentManager.changeState('taskDisplay', task);
// contentManager.changeState('projectDisplay', project);


// DEBUG
console.log(projectManager, contentManager)

// TODO: add dates

// TODO: add GoTo icon
// TODO: add links to tasks in project display

// TODO: sidebar scrollbar
// TODO: collapseable projects

// TODO: Default 'project' to show high priority
// TODO: Default 'project' to show due soon

// TODO: search bar
// TODO: search results content page w/ links
// TODO: form validation

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sd0JBQXdCLHlCQUF5Qix5QkFBeUIsc0NBQXNDLGFBQWEsYUFBYSxNQUFNLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxNQUFNLHdCQUF3QixhQUFhLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSx3QkFBd0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFVBQVUsTUFBTSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0seUJBQXlCLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyx3QkFBd0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSx5QkFBeUIsYUFBYSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLHlCQUF5Qix5QkFBeUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxtREFBbUQsMkJBQTJCLHVCQUF1Qiw4QkFBOEIsOEJBQThCLGtDQUFrQywwQkFBMEIsMkJBQTJCLHNCQUFzQiwwQkFBMEIsMkJBQTJCLDJCQUEyQiwwQkFBMEIsa0NBQWtDLHFCQUFxQix1QkFBdUIsNEJBQTRCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLEdBQUcsdUdBQXVHLFVBQVUsbUJBQW1CLG9CQUFvQixrQkFBa0IsK0JBQStCLGdDQUFnQywrQkFBK0IsdUJBQXVCLHNCQUFzQixzQkFBc0IscUNBQXFDLG1DQUFtQyw4REFBOEQsR0FBRyxtVEFBbVQsc0NBQXNDLG1CQUFtQixtQkFBbUIsMEJBQTBCLG9DQUFvQyxpQkFBaUIsR0FBRyxrS0FBa0sseUJBQXlCLHdCQUF3Qix5Q0FBeUMsb0NBQW9DLGlCQUFpQixzQkFBc0IsbUNBQW1DLEdBQUcsa0JBQWtCLHlDQUF5QyxzQkFBc0IseUNBQXlDLHNCQUFzQiw2QkFBNkIsZ0JBQWdCLEdBQUcsK0RBQStELHlCQUF5Qix3Q0FBd0MscUJBQXFCLHNCQUFzQiw2QkFBNkIsR0FBRyxvQkFBb0IseUJBQXlCLHNDQUFzQyxxQkFBcUIsR0FBRyx1RUFBdUUsb0JBQW9CLDBDQUEwQyw2Q0FBNkMsR0FBRyw0QkFBNEIsc0JBQXNCLGlDQUFpQyx1QkFBdUIsb0RBQW9ELDRDQUE0Qyx1Q0FBdUMsa0JBQWtCLG1CQUFtQixHQUFHLDZCQUE2Qix1QkFBdUIsdUJBQXVCLEdBQUcsd0ZBQXdGLGtDQUFrQyxHQUFHLG1FQUFtRSw4QkFBOEIsR0FBRyxpRUFBaUUsb0JBQW9CLDBDQUEwQyxpREFBaUQsR0FBRyxpQ0FBaUMsOEJBQThCLDRCQUE0Qix1QkFBdUIseUJBQXlCLEdBQUcsNkJBQTZCLDBCQUEwQixpQ0FBaUMsdUJBQXVCLCtEQUErRCx1REFBdUQsc0NBQXNDLGtCQUFrQixtQkFBbUIsR0FBRyxvREFBb0QsNkRBQTZELHFEQUFxRCxHQUFHLG1DQUFtQyw4Q0FBOEMsR0FBRyxvRUFBb0Usb0JBQW9CLDBCQUEwQixzQkFBc0IsR0FBRyxxQkFBcUIsMEJBQTBCLHlCQUF5Qiw4QkFBOEIsc0JBQXNCLDBCQUEwQixlQUFlLEdBQUcsMkJBQTJCLGlCQUFpQixtQ0FBbUMseUJBQXlCLHdEQUF3RCxnREFBZ0QscUNBQXFDLG1DQUFtQyxrQkFBa0IsbUJBQW1CLEdBQUcsMkJBQTJCLGdDQUFnQyw0QkFBNEIsNkNBQTZDLGlDQUFpQyxxQ0FBcUMsMkJBQTJCLHFCQUFxQixvQkFBb0IsbUtBQW1LLHdDQUF3QyxvQkFBb0Isd0JBQXdCLHNCQUFzQiw2QkFBNkIsR0FBRyx1QkFBdUIseUJBQXlCLEdBQUcsU0FBUyxzQkFBc0Isc0NBQXNDLHlEQUF5RCw0QkFBNEIsR0FBRyx1QkFBdUIsa0JBQWtCLHVHQUF1RyxvQkFBb0IsNkJBQTZCLEdBQUcsNkNBQTZDLHNCQUFzQix1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLHdCQUF3QixpQ0FBaUMseUJBQXlCLGdEQUFnRCx3Q0FBd0MscUNBQXFDLG1DQUFtQyxrQkFBa0IsbUJBQW1CLEdBQUcsc0dBQXNHLG9CQUFvQixpREFBaUQsMkhBQTJILEdBQUcseUNBQXlDLHVCQUF1QixzQkFBc0IsdUJBQXVCLEdBQUcsZ0JBQWdCLHdCQUF3Qix5QkFBeUIsR0FBRyxzQkFBc0IsaUNBQWlDLHlCQUF5QixtREFBbUQsMkNBQTJDLG1DQUFtQyxtQ0FBbUMsa0JBQWtCLG1CQUFtQixHQUFHLHNCQUFzQiwwQkFBMEIsb0ZBQW9GLG1CQUFtQixpQkFBaUIsbUJBQW1CLHlCQUF5QixvQ0FBb0MsOEJBQThCLG9EQUFvRCwwQkFBMEIsR0FBRyxzQkFBc0IsNkJBQTZCLEdBQUcseUJBQXlCLG9CQUFvQiw2QkFBNkIsaUNBQWlDLHlCQUF5QixnREFBZ0Qsd0NBQXdDLHFDQUFxQyxtQ0FBbUMsa0JBQWtCLG1CQUFtQixHQUFHLDZCQUE2Qiw0QkFBNEIsbUdBQW1HLG9CQUFvQiw2Q0FBNkMsR0FBRywwQkFBMEIseUJBQXlCLEdBQUcsNEJBQTRCLDBCQUEwQixHQUFHLGtCQUFrQix3QkFBd0Isc0JBQXNCLG9CQUFvQiwwQkFBMEIsaUNBQWlDLHlCQUF5QixnREFBZ0Qsd0NBQXdDLHFDQUFxQyxtQ0FBbUMsa0JBQWtCLG1CQUFtQixHQUFHLDBCQUEwQiw0QkFBNEIsdUJBQXVCO0FBQ3YrbUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNyQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmMkI7O0FBRVo7QUFDZix1QkFBdUI7QUFDdkIsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0Esc0RBQXNEO0FBQ3RELGdFQUFnRTtBQUNoRSxvREFBb0Q7QUFDcEQsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix5REFBYTtBQUNyQyxzQkFBc0Isa0VBQXNCO0FBQzVDLHVCQUF1QixxRUFBeUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLElBQUkseURBQWE7O0FBRWpCO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCOztBQUVBLHVCQUF1QixxRUFBeUI7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHdCQUF3Qix5REFBYTtBQUNyQyxvQkFBb0Isa0VBQXNCO0FBQzFDLG1CQUFtQixrRUFBc0I7QUFDekMsc0JBQXNCLGtFQUFzQjtBQUM1QyxtQkFBbUIsa0VBQXNCO0FBQ3pDO0FBQ0E7OztBQUdBLHVCQUF1QixxRUFBeUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esd0JBQXdCLHlEQUFhO0FBQ3JDLElBQUkseURBQWE7QUFDakIsSUFBSSx5REFBYTtBQUNqQixJQUFJLHlEQUFhO0FBQ2pCLElBQUkseURBQWE7QUFDakI7O0FBRUE7QUFDQSx5QkFBeUIscUVBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSx5REFBYTs7QUFFakI7QUFDQSwrQkFBK0IseURBQWE7O0FBRTVDLG1DQUFtQyx5REFBYTtBQUNoRCw4QkFBOEIseURBQWE7QUFDM0MsK0JBQStCLHlEQUFhOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxvQ0FBb0MseURBQWE7QUFDakQsMkJBQTJCLHlEQUFhO0FBQ3hDLG1DQUFtQyx5REFBYTs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNXOztBQUVkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjs7QUFFcEI7O0FBRTBDO0FBQ0E7O0FBRTFDLDJCQUEyQixtREFBYztBQUN6QywyQkFBMkIsbURBQWM7OztBQUd6QztBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL3Byb2plY3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2NoZWNrYm94LXVuY2hlY2tlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJhc3NldHMvY2hlY2tib3gtY2hlY2tlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJhc3NldHMvYWRkLXByb2plY3Quc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2FkZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDB8Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1oZWFkZXI6IGRvZGdlcmJsdWU7XFxuICAgIC0tYWNjZW50OiBvcmFuZ2U7XFxuICAgIC0tbGlnaHRHcmF5Mjogc2xhdGVncmV5O1xcbiAgICAtLW9mZndoaXRlMjogd2hpdGVzbW9rZTtcXG5cXG4gICAgLS1kYXJrQmFja2dyb3VuZDogIzFmMjkzNztcXG4gICAgLS1vZmZ3aGl0ZTogI2Y5ZmFmODtcXG4gICAgLS1saWdodEdyYXk6ICNlNWU3ZWI7XFxuICAgIC0tYmx1ZTogIzM4ODJmNjtcXG4gICAgLS1kYXJrQmx1ZTogIzFmMjkzNztcXG4gICAgLS1kYXJrR3JlZW46ICMxNTgwM2Q7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDc4ODtcXG4gICAgLS1pbmRpZ29CcmlnaHRlcjogIzQ1NDU1Zjg4O1xcbiAgICAtLXJlZDogI2RjMjYyNjtcXG4gICAgLS1ncmVlbjogIzE2YTM0YTtcXG4gICAgLS1saWdodEdyZWVuOiAjNGFkZTgwO1xcbiAgICAtLWxpZ2h0U2xhdGU6ICNlMmU4ZjA7XFxuICAgIC0tbWVkU2xhdGU6ICM5NGEzYjg7XFxuICAgIC0tZGFya1NsYXRlOiAjNDc1NTY5O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgMDtcXG5cXG4gICAgY29sb3I6IHZhcigtLWRhcmtCbHVlKTtcXG4gICAgLyogZm9udC1mYW1pbHk6ICdSb2JvdG8nOyAqL1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJzaWRlYmFyIG1haW5cXFwiO1xcbn1cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEdlbmVyaWMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVhZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXIpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4ICMwMDAzO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNpZGViYXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmF5KTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTVmciAxZnI7XFxufVxcbi5zaWRlYmFyPi5saXN0IHtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIHllbGxvd2dyZWVuOyAqL1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E5YTlhOWFhO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi8qID09PT09PT09PT0gUHJvamVjdCBHcm91cCA9PT09PT09PT09ICovXFxuLnByb2plY3QtZ3JvdXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCBsaWdodGNvcmFsOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0LWdyb3VwPioge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjgwMDA0NDsgKi9cXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFByb2plY3QgQ29udGFpbmVyID09PT09PT09PT0gKi9cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImljb24gLi4gdGl0bGVcXFwiO1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+Lmljb24ge1xcbiAgICBncmlkLWFyZWE6IGljb247XFxuXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3lCbHVlKTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuLnByb2plY3QtY29udGFpbmVyPi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0sXFxuLnRhc2stY29udGFpbmVyW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuLnByb2plY3QtY29udGFpbmVyPi50aXRsZTpob3ZlcixcXG4udGFzay1jb250YWluZXI+LnRpdGxlOmhvdmVyXFxue1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMy41KTtcXG59XFxuXFxuLyogPT09PT09PT09PSBUYXNrIENvbnRhaW5lciA9PT09PT09PT09ICovXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCAuLiB0aXRsZVxcXCI7XFxufVxcbi8qIC5zaWRlYmFyIC50YXNrLWNvbnRhaW5lcj4qIHtib3JkZXI6IDFweCBkb3R0ZWQgZGFya2JsdWU7fSAqL1xcbi50YXNrLWNvbnRhaW5lcj4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi50YXNrLWNvbnRhaW5lcj4uY2hlY2tib3gge1xcbiAgICBncmlkLWFyZWE6IGNoZWNrYm94O1xcblxcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XFxuICAgIG1hc2stc2l6ZTogY292ZXI7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveFtkYXRhLWNoZWNrZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnb0JyaWdodGVyKTtcXG59XFxuXFxuLyogPT09PT09PT09PSBCb3R0b20sIE5ldyBQcm9qZWN0ID09PT09PT09PT0gKi9cXG4uc2lkZWJhcj4uYm90IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4jbmV3LXByb2plY3QtZm9ybT4uaWNvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4uYnV0dG9uLWNvbnRhaW5lcjpob3ZlciB7Ym9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrR3JlZW4pO31cXG4uYnV0dG9uLWNvbnRhaW5lcjphY3RpdmUge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMTY0LCAxNjQsIDU0LCAwLjI0OCk7fVxcbi5idXR0b24tY29udGFpbmVyOmhvdmVyPi5pY29uIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyZWVuKTt9XFxuLmJ1dHRvbi1jb250YWluZXI+LnRleHQge3doaXRlLXNwYWNlOiBub3dyYXA7IHBhZGRpbmctcmlnaHQ6IDRweDt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDb250ZW50ID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmRpdiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcblxcbiAgICBncmlkLWFyZWE6IG1haW47XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmRpdiNjb250ZW50Pi5idXR0b24ge1xcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XFxufVxcbi5jYXJkIHtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuMjE2KTsgKi9cXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7Ym9yZGVyLXRvcDogbm9uZTt9XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09IFByb2plY3QgRGlzcGxheSA9PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ucHJvamVjdC1kaXNwbGF5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wcm9qZWN0LWRpc3BsYXktY29udGFpbmVyPi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jbmV3LXRhc2stZm9ybSB7d2lkdGg6IG1pbi1jb250ZW50O31cXG4jbmV3LXRhc2stZm9ybT4uaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09IFRhc2sgRGlzcGxheSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi50YXNrLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQobWluLWNvbnRlbnQsIDUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInRpdGxlXFxcIlxcbiAgICAgICAgXFxcImRlc2NcXFwiXFxuICAgICAgICBcXFwiZHVlRGF0ZVxcXCJcXG4gICAgICAgIFxcXCJwcmlvXFxcIlxcbiAgICAgICAgXFxcImRlbGV0ZVxcXCI7XFxufVxcblxcbi50YXNrLWRpc3BsYXktY29udGFpbmVyPi50YXNrLXRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZGVsZXRlLXRhc2sge1xcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG4jZGVsZXRlLXRhc2s+Lmljb24ge1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbiNkZWxldGUtdGFzazpob3ZlciB7Ym9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09IFByb2plY3QgRm9ybSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRTbGF0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrU2xhdGUpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDZweCByZ2JhKDAsMCwwLC4wNSkgaW5zZXQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWRTbGF0ZSk7XFxufVxcblxcbiNjcmVhdGUtbmV3LXByb2plY3Qge3dpZHRoOiBtaW4tY29udGVudDt9XFxuI2NyZWF0ZS1uZXctcHJvamVjdD4uaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4jY3JlYXRlLW5ldy1wcm9qZWN0OmhvdmVyIHtib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09IFRhc2sgRm9ybSA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4udGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG4udGFzay1mb3JtLWNvbnRhaW5lcj4qIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG4jdGFzay10aXRsZSxcXG4jdGFzay1kZXNjIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuI3Rhc2stZHVlLWRhdGUge2NvbG9yOiB2YXIoLS1tZWRTbGF0ZSk7fVxcblxcbiNjcmVhdGUtbmV3LXRhc2sge3dpZHRoOiBtaW4tY29udGVudDt9XFxuI2NyZWF0ZS1uZXctdGFzaz4uaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4jY3JlYXRlLW5ldy10YXNrOmhvdmVyIHtib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTt9XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHVCQUF1Qjs7SUFFdkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7O0lBRXBCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXOztJQUVYLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlOztJQUVmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLG1EQUFtRDtBQUN2RDtBQUNBLHNFQUFzRTtBQUN0RSxzRUFBc0U7OztBQUd0RSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixZQUFZOztJQUVaLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBLHNFQUFzRTtBQUN0RSxzRUFBc0U7O0FBRXRFO0lBQ0ksa0JBQWtCOztJQUVsQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixVQUFVOztJ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LFlBQVk7QUFDaEI7QUFDQSxvQkFBb0Isd0JBQXdCLENBQUM7O0FBRTdDLHNFQUFzRTtBQUN0RTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxxQkFBcUIsa0JBQWtCLENBQUM7QUFDeEM7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDJEQUF5QztJQUN6QyxtREFBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBLDJCQUEyQiwwQkFBMEIsQ0FBQzs7QUFFdEQsc0VBQXNFO0FBQ3RFO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBQ0EsZ0JBQWdCLHNCQUFzQixDQUFDOztBQUV2QyxrQkFBa0Isa0JBQWtCLENBQUM7QUFDckM7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDJEQUF5QztJQUN6QyxtREFBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBLHdCQUF3QiwwQkFBMEIsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0taGVhZGVyOiBkb2RnZXJibHVlO1xcbiAgICAtLWFjY2VudDogb3JhbmdlO1xcbiAgICAtLWxpZ2h0R3JheTI6IHNsYXRlZ3JleTtcXG4gICAgLS1vZmZ3aGl0ZTI6IHdoaXRlc21va2U7XFxuXFxuICAgIC0tZGFya0JhY2tncm91bmQ6ICMxZjI5Mzc7XFxuICAgIC0tb2Zmd2hpdGU6ICNmOWZhZjg7XFxuICAgIC0tbGlnaHRHcmF5OiAjZTVlN2ViO1xcbiAgICAtLWJsdWU6ICMzODgyZjY7XFxuICAgIC0tZGFya0JsdWU6ICMxZjI5Mzc7XFxuICAgIC0tZGFya0dyZWVuOiAjMTU4MDNkO1xcblxcbiAgICAtLXNreUJsdWU6ICMzOGJkZjg7XFxuICAgIC0taW5kaWdvOiAjMDUwNTA3ODg7XFxuICAgIC0taW5kaWdvQnJpZ2h0ZXI6ICM0NTQ1NWY4ODtcXG4gICAgLS1yZWQ6ICNkYzI2MjY7XFxuICAgIC0tZ3JlZW46ICMxNmEzNGE7XFxuICAgIC0tbGlnaHRHcmVlbjogIzRhZGU4MDtcXG4gICAgLS1saWdodFNsYXRlOiAjZTJlOGYwO1xcbiAgICAtLW1lZFNsYXRlOiAjOTRhM2I4O1xcbiAgICAtLWRhcmtTbGF0ZTogIzQ3NTU2OTtcXG59XFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDB8Um9ib3RvOjMwMCw0MDAsNTAwLDcwMFxcXCIpO1xcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCAwO1xcblxcbiAgICBjb2xvcjogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAvKiBmb250LWZhbWlseTogJ1JvYm90byc7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcInNpZGViYXIgbWFpblxcXCI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gR2VuZXJpYyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIZWFkZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2lkZWJhciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyYXkpO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNWZyIDFmcjtcXG59XFxuLnNpZGViYXI+Lmxpc3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgeWVsbG93Z3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTlhOWE5YWE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLyogPT09PT09PT09PSBQcm9qZWN0IEdyb3VwID09PT09PT09PT0gKi9cXG4ucHJvamVjdC1ncm91cCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Y29yYWw7ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2plY3QtZ3JvdXA+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmODAwMDQ0OyAqL1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi8qID09PT09PT09PT0gUHJvamVjdCBDb250YWluZXIgPT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaWNvbiAuLiB0aXRsZVxcXCI7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4uaWNvbiB7XFxuICAgIGdyaWQtYXJlYTogaWNvbjtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcbiAgICBtYXNrLXNpemU6IGNvdmVyO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3Byb2plY3Quc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL3Byb2plY3Quc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreUJsdWUpO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+LnRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnByb2plY3QtY29udGFpbmVyW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSxcXG4udGFzay1jb250YWluZXJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+LnRpdGxlOmhvdmVyLFxcbi50YXNrLWNvbnRhaW5lcj4udGl0bGU6aG92ZXJcXG57XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygzLjUpO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFRhc2sgQ29udGFpbmVyID09PT09PT09PT0gKi9cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNoZWNrYm94IC4uIHRpdGxlXFxcIjtcXG59XFxuLyogLnNpZGViYXIgLnRhc2stY29udGFpbmVyPioge2JvcmRlcjogMXB4IGRvdHRlZCBkYXJrYmx1ZTt9ICovXFxuLnRhc2stY29udGFpbmVyPi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxuXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9jaGVja2JveC11bmNoZWNrZWQuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2NoZWNrYm94LXVuY2hlY2tlZC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvKTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveFtkYXRhLWNoZWNrZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvY2hlY2tib3gtY2hlY2tlZC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvY2hlY2tib3gtY2hlY2tlZC5zdmcnKTtcXG59XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZGlnb0JyaWdodGVyKTtcXG59XFxuXFxuLyogPT09PT09PT09PSBCb3R0b20sIE5ldyBQcm9qZWN0ID09PT09PT09PT0gKi9cXG4uc2lkZWJhcj4uYm90IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4jbmV3LXByb2plY3QtZm9ybT4uaWNvbiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvYWRkLXByb2plY3Quc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2FkZC1wcm9qZWN0LnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5idXR0b24tY29udGFpbmVyOmhvdmVyIHtib3JkZXItY29sb3I6IHZhcigtLWRhcmtHcmVlbik7fVxcbi5idXR0b24tY29udGFpbmVyOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjQsIDE2NCwgNTQsIDAuMjQ4KTt9XFxuLmJ1dHRvbi1jb250YWluZXI6aG92ZXI+Lmljb24ge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JlZW4pO31cXG4uYnV0dG9uLWNvbnRhaW5lcj4udGV4dCB7d2hpdGUtc3BhY2U6IG5vd3JhcDsgcGFkZGluZy1yaWdodDogNHB4O31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IENvbnRlbnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuZGl2I2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZGl2I2NvbnRlbnQ+LmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcXG59XFxuLmNhcmQge1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC4yMTYpOyAqL1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG4uY2FyZDpmaXJzdC1vZi10eXBlIHtib3JkZXItdG9wOiBub25lO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gUHJvamVjdCBEaXNwbGF5ID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2plY3QtZGlzcGxheS1jb250YWluZXI+LnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNuZXctdGFzay1mb3JtIHt3aWR0aDogbWluLWNvbnRlbnQ7fVxcbiNuZXctdGFzay1mb3JtPi5pY29uIHtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9hZGQuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2FkZC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09IFRhc2sgRGlzcGxheSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi50YXNrLWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQobWluLWNvbnRlbnQsIDUpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInRpdGxlXFxcIlxcbiAgICAgICAgXFxcImRlc2NcXFwiXFxuICAgICAgICBcXFwiZHVlRGF0ZVxcXCJcXG4gICAgICAgIFxcXCJwcmlvXFxcIlxcbiAgICAgICAgXFxcImRlbGV0ZVxcXCI7XFxufVxcblxcbi50YXNrLWRpc3BsYXktY29udGFpbmVyPi50YXNrLXRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZGVsZXRlLXRhc2sge1xcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG4jZGVsZXRlLXRhc2s+Lmljb24ge1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2RlbGV0ZS5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvZGVsZXRlLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4jZGVsZXRlLXRhc2s6aG92ZXIge2JvcmRlci1jb2xvcjogdmFyKC0tcmVkKTt9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PSBQcm9qZWN0IEZvcm0gPT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0U2xhdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya1NsYXRlKTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggcmdiYSgwLDAsMCwuMDUpIGluc2V0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWVkU2xhdGUpO1xcbn1cXG5cXG4jY3JlYXRlLW5ldy1wcm9qZWN0IHt3aWR0aDogbWluLWNvbnRlbnQ7fVxcbiNjcmVhdGUtbmV3LXByb2plY3Q+Lmljb24ge1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2FkZC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvYWRkLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbiNjcmVhdGUtbmV3LXByb2plY3Q6aG92ZXIge2JvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gVGFzayBGb3JtID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxufVxcbi50YXNrLWZvcm0tY29udGFpbmVyPioge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcbiN0YXNrLXRpdGxlLFxcbiN0YXNrLWRlc2Mge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4jdGFzay1kdWUtZGF0ZSB7Y29sb3I6IHZhcigtLW1lZFNsYXRlKTt9XFxuXFxuI2NyZWF0ZS1uZXctdGFzayB7d2lkdGg6IG1pbi1jb250ZW50O31cXG4jY3JlYXRlLW5ldy10YXNrPi5pY29uIHtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9hZGQuc3ZnJyk7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2FkZC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4jY3JlYXRlLW5ldy10YXNrOmhvdmVyIHtib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTt9XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBET00gZnJvbSAnLi9kb20uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50TWFuYWdlcihwcm9qZWN0TWFuYWdlcikge1xuICAgIHRoaXMuc3RhdGUgPSBudWxsOyAvLyBlbXB0eSwgcHJvamVjdEZvcm0sIHByb2plY3REaXNwbGF5LCB0YXNrRm9ybSwgdGFza0Rpc3BsYXlcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAvLyBtb3ZlIHRvIGlucHV0P1xuICAgIHRoaXMuc2lkZWJhck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICAgIHRoaXMucHJvamVjdE1hbmFnZXIgPSBwcm9qZWN0TWFuYWdlcjtcbn1cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uKG5ld1N0YXRlLCBpdGVtKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IG5ld1N0YXRlIHx8IGl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICB0aGlzLnVwZGF0ZShpdGVtKTtcbiAgICB9XG59XG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZyBhZnRlciBjaGFuZ2luZyBzdGF0ZSB0byAnLCB0aGlzLnN0YXRlKTtcbiAgICBET00uY2xlYXJOb2RlKHRoaXMubm9kZSk7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgJ3Byb2plY3RGb3JtJzogdGhpcy5jcmVhdGVQcm9qZWN0Rm9ybSgpOyBicmVhaztcbiAgICAgICAgY2FzZSAncHJvamVjdERpc3BsYXknOiB0aGlzLmNyZWF0ZVByb2plY3REaXNwbGF5KGl0ZW0pOyBicmVhaztcbiAgICAgICAgY2FzZSAndGFza0Zvcm0nOiB0aGlzLmNyZWF0ZVRhc2tGb3JtKGl0ZW0pOyBicmVhaztcbiAgICAgICAgY2FzZSAndGFza0Rpc3BsYXknOiB0aGlzLmNyZWF0ZVRhc2tEaXNwbGF5KGl0ZW0pOyBicmVhaztcbiAgICAgICAgY2FzZSAnZW1wdHknOiBicmVhaztcbiAgICB9XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVQcm9qZWN0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIFsncHJvamVjdC1mb3JtLWNvbnRhaW5lciddKTtcbiAgICBjb25zdCBpbnB1dE5vZGUgPSBET00uY3JlYXRlTGFiZWxlZElucHV0KGNvbnRhaW5lck5vZGUsICd0ZXh0JywgJ3Byb2plY3QtdGl0bGUnLCAnUHJvamVjdCBUaXRsZScpO1xuICAgIGNvbnN0IGJ1dHRvbk5vZGUgPSBET00uY3JlYXRlQnV0dG9uQ29udGFpbmVyKGNvbnRhaW5lck5vZGUsICdjcmVhdGUtbmV3LXByb2plY3QnLCAnQWRkIFByb2plY3QnKTtcblxuICAgIGJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChpbnB1dE5vZGUudmFsdWUgfHwgJ0RlZmF1bHQgUHJvamVjdCBUaXRsZScpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcbiAgICB9KTtcbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3REaXNwbGF5ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGxldCBjb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIFsncHJvamVjdC1kaXNwbGF5LWNvbnRhaW5lciddKTtcbiAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnY2FyZCcsICdwcm9qZWN0LXRpdGxlJ10sICdQcm9qZWN0OiAnICsgcHJvamVjdC5uYW1lKTtcblxuICAgIC8vIERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgbnVsbCwgJ1Rhc2tzOiAnKTtcbiAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2NhcmQnXSwgdGFzay50aXRsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b25Db250YWluZXIoY29udGFpbmVyTm9kZSwgJ25ldy10YXNrLWZvcm0nLCAnTmV3IFRhc2snKTtcbiAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCd0YXNrRm9ybScsIHByb2plY3QpO1xuICAgIH0pO1xufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlVGFza0Zvcm0gPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgbGV0IGNvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgWyd0YXNrLWZvcm0tY29udGFpbmVyJ10pO1xuICAgIGxldCB0aXRsZU5vZGUgPSBET00uY3JlYXRlTGFiZWxlZElucHV0KGNvbnRhaW5lck5vZGUsICd0ZXh0JywgJ3Rhc2stdGl0bGUnLCAnVGFzayBUaXRsZScpO1xuICAgIGxldCBkZXNjTm9kZSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQoY29udGFpbmVyTm9kZSwgJ3RleHQnLCAndGFzay1kZXNjJywgJ1Rhc2sgRGVzY3JpcHRpb24nKTtcbiAgICBsZXQgZHVlRGF0ZU5vZGUgPSBET00uY3JlYXRlTGFiZWxlZElucHV0KGNvbnRhaW5lck5vZGUsICdkYXRlJywgJ3Rhc2stZHVlLWRhdGUnLCAnVGFzayBEdWUgRGF0ZScpO1xuICAgIGxldCBwcmlvTm9kZSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQoY29udGFpbmVyTm9kZSwgJ251bWJlcicsICd0YXNrLXByaW8nLCAnVGFzayBQcmlvcml0eScpO1xuICAgIHByaW9Ob2RlLnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwJyk7XG4gICAgcHJpb05vZGUuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xuXG5cbiAgICBjb25zdCBidXR0b25Ob2RlID0gRE9NLmNyZWF0ZUJ1dHRvbkNvbnRhaW5lcihjb250YWluZXJOb2RlLCAnY3JlYXRlLW5ldy10YXNrJywgJ0FkZCBUYXNrJyk7XG5cbiAgICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmNyZWF0ZVRhc2sodGl0bGVOb2RlLnZhbHVlLCBkZXNjTm9kZS52YWx1ZSwgZHVlRGF0ZU5vZGUudmFsdWUsIHByaW9Ob2RlLnZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2VtcHR5Jyk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVUYXNrRGlzcGxheSA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICBsZXQgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ3Rhc2stZGlzcGxheS1jb250YWluZXInXSk7XG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ3Rhc2stdGl0bGUnLCAnY2FyZCddLCAnVGFzazogJyArIHRhc2sudGl0bGUpO1xuICAgIERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWyd0YXNrLWRlc2MnLCAnY2FyZCddLCB0YXNrLmRlc2MpO1xuICAgIERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWyd0YXNrLWR1ZS1kYXRlJywgJ2NhcmQnXSwgJ0R1ZSBEYXRlOiAnICsgdGFzay5kdWVEYXRlKTtcbiAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsndGFzay1wcmlvJywgJ2NhcmQnXSwgJ1ByaW9yaXR5OiAnICsgdGFzay5wcmlvKTtcbiAgICAvLyBUT0RPOiBjc3MgY2xhc3Nlc1xuXG4gICAgLy8gRGVsZXRlIEJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IERPTS5jcmVhdGVCdXR0b25Db250YWluZXIoY29udGFpbmVyTm9kZSwgJ2RlbGV0ZS10YXNrJywgJ0RlbGV0ZScpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFzay5kZWxldGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2VtcHR5Jyk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTaWRlYmFyID0gZnVuY3Rpb24oKSB7XG4gICAgRE9NLmNsZWFyTm9kZSh0aGlzLnNpZGViYXJOb2RlKTtcblxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdCkge1xuICAgICAgICBsZXQgcHJvamVjdEdyb3VwTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5zaWRlYmFyTm9kZSwgWydwcm9qZWN0LWdyb3VwJ10pO1xuXG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYocHJvamVjdEdyb3VwTm9kZSwgWydwcm9qZWN0LWNvbnRhaW5lciddKTtcbiAgICAgICAgbGV0IHByb2plY3RJY29uTm9kZSA9IERPTS5jcmVhdGVEaXYocHJvamVjdENvbnRhaW5lck5vZGUsIFsnaWNvbiddKTtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZU5vZGUgPSBET00uY3JlYXRlRGl2KHByb2plY3RDb250YWluZXJOb2RlLCBbJ3RpdGxlJ10sIHByb2plY3QubmFtZSk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lck5vZGUuZGF0YXNldC5zZWxlY3RlZCA9IHByb2plY3Quc2VsZWN0ZWQ7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3Quc2VsZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Byb2plY3REaXNwbGF5JywgcHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICAgICAgbGV0IHRhc2tDb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdihwcm9qZWN0R3JvdXBOb2RlLCBbJ3Rhc2stY29udGFpbmVyJ10pO1xuICAgICAgICAgICAgbGV0IHRhc2tOb2RlID0gRE9NLmNyZWF0ZURpdih0YXNrQ29udGFpbmVyTm9kZSwgWyd0aXRsZSddLCB0YXNrLnRpdGxlKTtcbiAgICAgICAgICAgIGxldCB0YXNrQ2hlY2tib3hOb2RlID0gRE9NLmNyZWF0ZURpdih0YXNrQ29udGFpbmVyTm9kZSwgWydjaGVja2JveCddKTtcblxuICAgICAgICAgICAgdGFza0NoZWNrYm94Tm9kZS5kYXRhc2V0LmNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyTm9kZS5kYXRhc2V0LnNlbGVjdGVkID0gdGFzay5zZWxlY3RlZDtcblxuICAgICAgICAgICAgdGFza0NoZWNrYm94Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSAhdGFzay5jaGVja2VkO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXNrTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLnNlbGVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Rhc2tEaXNwbGF5JywgdGFzayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJjb25zdCBET00gPSB7fTtcblxuRE9NLmNsZWFyTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB3aGlsZShub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5ET00uY3JlYXRlTm9kZSA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIHRhZywgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmIChjbGFzc0xpc3QpXG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjbGFzc0xpc3QpXG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuRE9NLmNyZWF0ZURpdiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgIHJldHVybiB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2RpdicsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpXG59XG5cbkRPTS5jcmVhdGVMYWJlbGVkSW5wdXQgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBpbnB1dFR5cGUsIGlkLCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBpbnB1dE5vZGUgPSB0aGlzLmNyZWF0ZU5vZGUocGFyZW50Tm9kZSwgJ2lucHV0Jyk7XG4gICAgaW5wdXROb2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgaW5wdXROb2RlLmlkID0gaWQ7XG4gICAgaW5wdXROb2RlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCB0ZXh0Q29udGVudCk7XG4gICAgcmV0dXJuIGlucHV0Tm9kZTtcbn1cblxuRE9NLmNyZWF0ZUJ1dHRvbiA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGlkLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IG1lcmdlZENsYXNzTGlzdCA9IChjbGFzc0xpc3QpID8gWydidXR0b24nLCAuLi5jbGFzc0xpc3RdIDogWydidXR0b24nXTtcbiAgICBsZXQgbm9kZSA9IHRoaXMuY3JlYXRlRGl2KHBhcmVudE5vZGUsIG1lcmdlZENsYXNzTGlzdCwgdGV4dENvbnRlbnQpO1xuICAgIG5vZGUuaWQgPSBpZDtcbiAgICByZXR1cm4gbm9kZTtcbn1cbkRPTS5jcmVhdGVCdXR0b25Db250YWluZXIgPSBmdW5jdGlvbihwYXJlbnROb2RlLCBpZCwgdGV4dENvbnRlbnQpIHtcbiAgICBsZXQgY29udGFpbmVyTm9kZSA9IHRoaXMuY3JlYXRlRGl2KHBhcmVudE5vZGUsIFsnYnV0dG9uLWNvbnRhaW5lciddLCBudWxsKTtcbiAgICBjb250YWluZXJOb2RlLmlkID0gaWQ7XG4gICAgbGV0IGljb25Ob2RlID0gdGhpcy5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydpY29uJ10sIG51bGwpO1xuICAgIGxldCB0ZXh0Tm9kZSA9IHRoaXMuY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsndGV4dCddLCB0ZXh0Q29udGVudCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lck5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TWFuYWdlcigpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBudWxsO1xufVxuUHJvamVjdE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIG5ldyBwcm9qZWN0IHdpdGggbmFtZTogJywgbmFtZSk7XG4gICAgLy8gU2V0IGluZGV4IHRvIGN1cnJlbnQgcHJvamVjdExpc3QgbGVuZ3RoXG4gICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKG5ldyBQcm9qZWN0KHRoaXMsIG5hbWUsIHRoaXMucHJvamVjdExpc3QubGVuZ3RoKSk7XG59XG5Qcm9qZWN0TWFuYWdlci5wcm90b3R5cGUuc2VsZWN0UHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgcHJvamVjdCAjJywgcHJvamVjdC5pbmRleCk7XG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0LmluZGV4O1xufVxuUHJvamVjdE1hbmFnZXIucHJvdG90eXBlLmNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RMaXN0KSB7XG4gICAgICAgIHByb2plY3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgICAgICB0YXNrLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBQcm9qZWN0KG1hbmFnZXIsIG5hbWUsIGluZGV4KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTsgICAvLyBUT0RPOiBjb252ZXJ0IG5hbWUgdG8gdGl0bGVcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZFRhc2sgPSBudWxsO1xuXG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xufVxuUHJvamVjdC5wcm90b3R5cGUuY3JlYXRlVGFzayA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSB7XG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKG5ldyBUYXNrKHRoaXMsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSk7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCB0YXNrICMnLCB0aGlzLnNlbGVjdGVkVGFzayk7XG4gICAgdGhpcy5zZWxlY3RlZFRhc2sgPSB0YXNrLmluZGV4O1xufVxuUHJvamVjdC5wcm90b3R5cGUuYWRkU3RhcnRpbmdUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZGluZyBkZWZhdWx0IHN0YXJ0aW5nIHRhc2tzLi4uJyk7XG4gICAgdGhpcy50YXNrbGlzdC5wdXNoKG5ldyBUYXNrKCkpO1xufVxuUHJvamVjdC5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYW5hZ2VyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5kZWxldGVUYXNrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudGFza0xpc3RbaV0uaW5kZXggPSBpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlIHx8ICdwbGFjZWhvbGRlciB0aXRsZSc7XG4gICAgdGhpcy5kZXNjID0gZGVzYyB8fCAncGxhY2Vob2xkZXIgZGVzY3JpcHRpb24nO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUgfHwgJzAxLzAxLzIwMjMnO1xuICAgIHRoaXMucHJpbyA9IHByaW8gfHwgMTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIC8vIFNldCBpbmRleCB0byBjdXJyZW50IHRhc2tMaXN0IGxlbmd0aFxuICAgIHRoaXMuaW5kZXggPSBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDtcbn1cblRhc2sucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJvamVjdC5tYW5hZ2VyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG59XG5UYXNrLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnByb2plY3QuZGVsZXRlVGFzayh0aGlzLmluZGV4KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jb25zb2xlLmxvZygnSGVsbG8sIFdvcmxkIScpO1xuXG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBDb250ZW50TWFuYWdlciBmcm9tICcuL2NvbnRlbnQuanMnO1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xuY29uc3QgY29udGVudE1hbmFnZXIgPSBuZXcgQ29udGVudE1hbmFnZXIocHJvamVjdE1hbmFnZXIpO1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudE1hbmFnZXIuY2hhbmdlU3RhdGUoJ3Byb2plY3RGb3JtJyk7XG59KTtcblxuXG5cbi8vIElOSVRJQUwgVkFMVUVTXG5wcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KCdEYWlseSBFcnJhbmRzJyk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXS5jcmVhdGVUYXNrKCdCdXkgR3JvY2VyaWVzJywgJ1BpY2sgdXAgZ3JvY2VyaWVzIGZyb20gdGhlIHN0b3JlLicsIG51bGwsIDYpO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF0uY3JlYXRlVGFzaygnV2FzaCBEaXNoZXMnLCAnV2FzaCB0b2RheVxcJ3MgZGlzaGVzLicsIG51bGwsIDQpO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF0uY3JlYXRlVGFzaygnV2FsayBEb2cnLCAnV2FsayB0aGUgZG9nIGZvciAxNSBtaW51dGVzLicsIG51bGwsIDcpO1xucHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdCgnTW9udGhseSBUYXNrcycpO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMV0uY3JlYXRlVGFzaygnUGF5IEJpbGxzJywgJ1BheSBjcmVkaXQgY2FyZCBhbmQgZWxlY3RyaWMgYmlsbHMuJywgbnVsbCwgMTApO1xucHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMV0uY3JlYXRlVGFzaygnQ2hhbmdlIEJ1bGJzJywgJ0NoYW5nZSBsaWdodCBidWxicyB0aGF0IGFyZSBmdXNlZC4nLG51bGwsIDUpO1xuXG5jb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcbmNvbnRlbnRNYW5hZ2VyLnVwZGF0ZVNpZGViYXIoKTtcblxuLy8gU1RBUlQgQVQgRklSU1QgUFJPSkVDVCBESVNQTEFZXG4vLyBsZXQgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0WzBdO1xuLy8gcHJvamVjdC5zZWxlY3QoKTtcbi8vIGxldCB0YXNrID0gcHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF0udGFza0xpc3RbMF07XG4vLyB0YXNrLnNlbGVjdCgpO1xuY29udGVudE1hbmFnZXIudXBkYXRlU2lkZWJhcigpO1xuY29udGVudE1hbmFnZXIuY2hhbmdlU3RhdGUoJ3Rhc2tGb3JtJywgcHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF0pO1xuLy8gY29udGVudE1hbmFnZXIuY2hhbmdlU3RhdGUoJ3Rhc2tEaXNwbGF5JywgdGFzayk7XG4vLyBjb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgncHJvamVjdERpc3BsYXknLCBwcm9qZWN0KTtcblxuXG4vLyBERUJVR1xuY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIsIGNvbnRlbnRNYW5hZ2VyKVxuXG4vLyBUT0RPOiBhZGQgZGF0ZXNcblxuLy8gVE9ETzogYWRkIEdvVG8gaWNvblxuLy8gVE9ETzogYWRkIGxpbmtzIHRvIHRhc2tzIGluIHByb2plY3QgZGlzcGxheVxuXG4vLyBUT0RPOiBzaWRlYmFyIHNjcm9sbGJhclxuLy8gVE9ETzogY29sbGFwc2VhYmxlIHByb2plY3RzXG5cbi8vIFRPRE86IERlZmF1bHQgJ3Byb2plY3QnIHRvIHNob3cgaGlnaCBwcmlvcml0eVxuLy8gVE9ETzogRGVmYXVsdCAncHJvamVjdCcgdG8gc2hvdyBkdWUgc29vblxuXG4vLyBUT0RPOiBzZWFyY2ggYmFyXG4vLyBUT0RPOiBzZWFyY2ggcmVzdWx0cyBjb250ZW50IHBhZ2Ugdy8gbGlua3Ncbi8vIFRPRE86IGZvcm0gdmFsaWRhdGlvblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9