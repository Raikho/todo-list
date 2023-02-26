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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sd0JBQXdCLHlCQUF5Qix5QkFBeUIsc0NBQXNDLGFBQWEsYUFBYSxNQUFNLFlBQVksWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxhQUFhLGFBQWEsYUFBYSxNQUFNLHdCQUF3QixhQUFhLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSx3QkFBd0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFVBQVUsTUFBTSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0seUJBQXlCLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyx3QkFBd0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSx5QkFBeUIsYUFBYSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLHlCQUF5Qix5QkFBeUIsTUFBTSxZQUFZ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akY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjs7QUFFcEI7O0FBRTBDO0FBQ0E7O0FBRTFDLDJCQUEyQixtREFBYztBQUN6QywyQkFBMkIsbURBQWM7OztBQUd6QztBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvcHJvamVjdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJhc3NldHMvY2hlY2tib3gtdW5jaGVja2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImFzc2V0cy9jaGVja2JveC1jaGVja2VkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImFzc2V0cy9hZGQtcHJvamVjdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvYWRkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcImFzc2V0cy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMHxSb2JvdG86MzAwLDQwMCw1MDAsNzAwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWhlYWRlcjogZG9kZ2VyYmx1ZTtcXG4gICAgLS1hY2NlbnQ6IG9yYW5nZTtcXG4gICAgLS1saWdodEdyYXkyOiBzbGF0ZWdyZXk7XFxuICAgIC0tb2Zmd2hpdGUyOiB3aGl0ZXNtb2tlO1xcblxcbiAgICAtLWRhcmtCYWNrZ3JvdW5kOiAjMWYyOTM3O1xcbiAgICAtLW9mZndoaXRlOiAjZjlmYWY4O1xcbiAgICAtLWxpZ2h0R3JheTogI2U1ZTdlYjtcXG4gICAgLS1ibHVlOiAjMzg4MmY2O1xcbiAgICAtLWRhcmtCbHVlOiAjMWYyOTM3O1xcbiAgICAtLWRhcmtHcmVlbjogIzE1ODAzZDtcXG5cXG4gICAgLS1za3lCbHVlOiAjMzhiZGY4O1xcbiAgICAtLWluZGlnbzogIzA1MDUwNzg4O1xcbiAgICAtLWluZGlnb0JyaWdodGVyOiAjNDU0NTVmODg7XFxuICAgIC0tcmVkOiAjZGMyNjI2O1xcbiAgICAtLWdyZWVuOiAjMTZhMzRhO1xcbiAgICAtLWxpZ2h0R3JlZW46ICM0YWRlODA7XFxuICAgIC0tbGlnaHRTbGF0ZTogI2UyZThmMDtcXG4gICAgLS1tZWRTbGF0ZTogIzk0YTNiODtcXG4gICAgLS1kYXJrU2xhdGU6ICM0NzU1Njk7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCAwO1xcblxcbiAgICBjb2xvcjogdmFyKC0tZGFya0JsdWUpO1xcbiAgICAvKiBmb250LWZhbWlseTogJ1JvYm90byc7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcInNpZGViYXIgbWFpblxcXCI7XFxufVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gR2VuZXJpYyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIZWFkZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggIzAwMDM7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2lkZWJhciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodEdyYXkpO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNWZyIDFmcjtcXG59XFxuLnNpZGViYXI+Lmxpc3Qge1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgeWVsbG93Z3JlZW47ICovXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTlhOWE5YWE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLyogPT09PT09PT09PSBQcm9qZWN0IEdyb3VwID09PT09PT09PT0gKi9cXG4ucHJvamVjdC1ncm91cCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIGxpZ2h0Y29yYWw7ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2plY3QtZ3JvdXA+KiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmODAwMDQ0OyAqL1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi8qID09PT09PT09PT0gUHJvamVjdCBDb250YWluZXIgPT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaWNvbiAuLiB0aXRsZVxcXCI7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4uaWNvbiB7XFxuICAgIGdyaWQtYXJlYTogaWNvbjtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcbiAgICBtYXNrLXNpemU6IGNvdmVyO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreUJsdWUpO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+LnRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnByb2plY3QtY29udGFpbmVyW2RhdGEtc2VsZWN0ZWQ9XFxcInRydWVcXFwiXSxcXG4udGFzay1jb250YWluZXJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG4ucHJvamVjdC1jb250YWluZXI+LnRpdGxlOmhvdmVyLFxcbi50YXNrLWNvbnRhaW5lcj4udGl0bGU6aG92ZXJcXG57XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygzLjUpO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFRhc2sgQ29udGFpbmVyID09PT09PT09PT0gKi9cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggNXB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNoZWNrYm94IC4uIHRpdGxlXFxcIjtcXG59XFxuLyogLnNpZGViYXIgLnRhc2stY29udGFpbmVyPioge2JvcmRlcjogMXB4IGRvdHRlZCBkYXJrYmx1ZTt9ICovXFxuLnRhc2stY29udGFpbmVyPi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnRhc2stY29udGFpbmVyPi5jaGVja2JveCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxuXFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgbWFzay1zaXplOiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94W2RhdGEtY2hlY2tlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvQnJpZ2h0ZXIpO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IEJvdHRvbSwgTmV3IFByb2plY3QgPT09PT09PT09PSAqL1xcbi5zaWRlYmFyPi5ib3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbiNuZXctcHJvamVjdC1mb3JtPi5pY29uIHtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5idXR0b24tY29udGFpbmVyOmhvdmVyIHtib3JkZXItY29sb3I6IHZhcigtLWRhcmtHcmVlbik7fVxcbi5idXR0b24tY29udGFpbmVyOmFjdGl2ZSB7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjQsIDE2NCwgNTQsIDAuMjQ4KTt9XFxuLmJ1dHRvbi1jb250YWluZXI6aG92ZXI+Lmljb24ge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JlZW4pO31cXG4uYnV0dG9uLWNvbnRhaW5lcj4udGV4dCB7d2hpdGUtc3BhY2U6IG5vd3JhcDsgcGFkZGluZy1yaWdodDogNHB4O31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IENvbnRlbnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuZGl2I2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuZGl2I2NvbnRlbnQ+LmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcXG59XFxuLmNhcmQge1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMTYsIDIzMCwgMC4yMTYpOyAqL1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG4uY2FyZDpmaXJzdC1vZi10eXBlIHtib3JkZXItdG9wOiBub25lO31cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT0gUHJvamVjdCBEaXNwbGF5ID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWRpc3BsYXktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2plY3QtZGlzcGxheS1jb250YWluZXI+LnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNuZXctdGFzay1mb3JtIHt3aWR0aDogbWluLWNvbnRlbnQ7fVxcbiNuZXctdGFzay1mb3JtPi5pY29uIHtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gVGFzayBEaXNwbGF5ID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnRhc2stZGlzcGxheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChtaW4tY29udGVudCwgNSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwidGl0bGVcXFwiXFxuICAgICAgICBcXFwiZGVzY1xcXCJcXG4gICAgICAgIFxcXCJkdWVEYXRlXFxcIlxcbiAgICAgICAgXFxcInByaW9cXFwiXFxuICAgICAgICBcXFwiZGVsZXRlXFxcIjtcXG59XFxuXFxuLnRhc2stZGlzcGxheS1jb250YWluZXI+LnRhc2stdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNkZWxldGUtdGFzayB7XFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbiNkZWxldGUtdGFzaz4uaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuI2RlbGV0ZS10YXNrOmhvdmVyIHtib3JkZXItY29sb3I6IHZhcigtLXJlZCk7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gUHJvamVjdCBGb3JtID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodFNsYXRlKTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtTbGF0ZSk7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNnB4IHJnYmEoMCwwLDAsLjA1KSBpbnNldDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1lZFNsYXRlKTtcXG59XFxuXFxuI2NyZWF0ZS1uZXctcHJvamVjdCB7d2lkdGg6IG1pbi1jb250ZW50O31cXG4jY3JlYXRlLW5ldy1wcm9qZWN0Pi5pY29uIHtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbiNjcmVhdGUtbmV3LXByb2plY3Q6aG92ZXIge2JvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gVGFzayBGb3JtID09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxufVxcbi50YXNrLWZvcm0tY29udGFpbmVyPioge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcbiN0YXNrLXRpdGxlLFxcbiN0YXNrLWRlc2Mge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4jdGFzay1kdWUtZGF0ZSB7Y29sb3I6IHZhcigtLW1lZFNsYXRlKTt9XFxuXFxuI2NyZWF0ZS1uZXctdGFzayB7d2lkdGg6IG1pbi1jb250ZW50O31cXG4jY3JlYXRlLW5ldy10YXNrPi5pY29uIHtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbiNjcmVhdGUtbmV3LXRhc2s6aG92ZXIge2JvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO31cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsdUJBQXVCOztJQUV2Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjs7SUFFcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBSUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7O0lBRVgsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsbURBQW1EO0FBQ3ZEO0FBQ0Esc0VBQXNFO0FBQ3RFLHNFQUFzRTs7O0FBR3RFLHNFQUFzRTtBQUN0RSxzRUFBc0U7QUFDdEU7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFlBQVk7O0lBRVosaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUEsc0VBQXNFO0FBQ3RFLHNFQUFzRTs7QUFFdEU7SUFDSSxrQkFBa0I7O0lBRWxCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCLFVBQVU7O0lBRVYsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixrQ0FBa0M7O0lBRWxDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBLHdDQUF3QztBQUN4QztJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGVBQWU7O0lBRWYsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQiwyREFBNkM7SUFDN0MsbURBQXFDO0lBQ3JDLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLDJCQUEyQjtBQUMvQjtBQUNBOzs7SUFHSSx1QkFBdUI7QUFDM0I7O0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx3Q0FBd0M7QUFDNUM7QUFDQSw4REFBOEQ7QUFDOUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsMkRBQXdEO0lBQ3hELG1EQUFnRDtJQUNoRCwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJEQUFzRDtJQUN0RCxtREFBOEM7QUFDbEQ7QUFDQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQSw4Q0FBOEM7QUFDOUM7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCOztJQUV2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjtBQUNBO0lBQ0ksVUFBVTs7SUFFViwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDJEQUFpRDtJQUNqRCxtREFBeUM7SUFDekMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBLHlCQUF5Qiw4QkFBOEIsQ0FBQztBQUN4RCwwQkFBMEIsMkNBQTJDLENBQUM7QUFDdEUsK0JBQStCLG1DQUFtQyxDQUFDO0FBQ25FLHlCQUF5QixtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQzs7QUFFakUsc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhOztJQUViLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsK0JBQStCOztJQUUvQixrREFBa0Q7SUFDbEQsbUJBQW1CO0FBQ3ZCO0FBQ0EscUJBQXFCLGdCQUFnQixDQUFDO0FBQ3RDLHNFQUFzRTtBQUN0RTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQSxnQkFBZ0Isa0JBQWtCLENBQUM7QUFDbkM7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDJEQUF5QztJQUN6QyxtREFBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSxzRUFBc0U7QUFDdEU7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDOzs7OztnQkFLWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDJEQUE0QztJQUM1QyxtREFBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBLG9CQUFvQix3QkFBd0IsQ0FBQzs7QUFFN0Msc0VBQXNFO0FBQ3RFO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBLHFCQUFxQixrQkFBa0IsQ0FBQztBQUN4QztJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsMkRBQXlDO0lBQ3pDLG1EQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0EsMkJBQTJCLDBCQUEwQixDQUFDOztBQUV0RCxzRUFBc0U7QUFDdEU7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQSxnQkFBZ0Isc0JBQXNCLENBQUM7O0FBRXZDLGtCQUFrQixrQkFBa0IsQ0FBQztBQUNyQztJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsMkRBQXlDO0lBQ3pDLG1EQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0Esd0JBQXdCLDBCQUEwQixDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1oZWFkZXI6IGRvZGdlcmJsdWU7XFxuICAgIC0tYWNjZW50OiBvcmFuZ2U7XFxuICAgIC0tbGlnaHRHcmF5Mjogc2xhdGVncmV5O1xcbiAgICAtLW9mZndoaXRlMjogd2hpdGVzbW9rZTtcXG5cXG4gICAgLS1kYXJrQmFja2dyb3VuZDogIzFmMjkzNztcXG4gICAgLS1vZmZ3aGl0ZTogI2Y5ZmFmODtcXG4gICAgLS1saWdodEdyYXk6ICNlNWU3ZWI7XFxuICAgIC0tYmx1ZTogIzM4ODJmNjtcXG4gICAgLS1kYXJrQmx1ZTogIzFmMjkzNztcXG4gICAgLS1kYXJrR3JlZW46ICMxNTgwM2Q7XFxuXFxuICAgIC0tc2t5Qmx1ZTogIzM4YmRmODtcXG4gICAgLS1pbmRpZ286ICMwNTA1MDc4ODtcXG4gICAgLS1pbmRpZ29CcmlnaHRlcjogIzQ1NDU1Zjg4O1xcbiAgICAtLXJlZDogI2RjMjYyNjtcXG4gICAgLS1ncmVlbjogIzE2YTM0YTtcXG4gICAgLS1saWdodEdyZWVuOiAjNGFkZTgwO1xcbiAgICAtLWxpZ2h0U2xhdGU6ICNlMmU4ZjA7XFxuICAgIC0tbWVkU2xhdGU6ICM5NGEzYjg7XFxuICAgIC0tZGFya1NsYXRlOiAjNDc1NTY5O1xcbn1cXG5cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMHxSb2JvdG86MzAwLDQwMCw1MDAsNzAwXFxcIik7XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIDA7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUm9ib3RvJzsgKi9cXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwic2lkZWJhciBtYWluXFxcIjtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBHZW5lcmljID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhlYWRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAjMDAwMztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaWRlYmFyID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0R3JheSk7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICMwMDAzO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1ZnIgMWZyO1xcbn1cXG4uc2lkZWJhcj4ubGlzdCB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGRvdHRlZCB5ZWxsb3dncmVlbjsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhOWE5YTlhYTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiA9PT09PT09PT09IFByb2plY3QgR3JvdXAgPT09PT09PT09PSAqL1xcbi5wcm9qZWN0LWdyb3VwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBkb3R0ZWQgbGlnaHRjb3JhbDsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdC1ncm91cD4qIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MDAwNDQ7ICovXFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLyogPT09PT09PT09PSBQcm9qZWN0IENvbnRhaW5lciA9PT09PT09PT09ICovXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDVweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpY29uIC4uIHRpdGxlXFxcIjtcXG59XFxuLnByb2plY3QtY29udGFpbmVyPi5pY29uIHtcXG4gICAgZ3JpZC1hcmVhOiBpY29uO1xcblxcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XFxuICAgIG1hc2stc2l6ZTogY292ZXI7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvcHJvamVjdC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvcHJvamVjdC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5Qmx1ZSk7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4ucHJvamVjdC1jb250YWluZXJbZGF0YS1zZWxlY3RlZD1cXFwidHJ1ZVxcXCJdLFxcbi50YXNrLWNvbnRhaW5lcltkYXRhLXNlbGVjdGVkPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcj4udGl0bGU6aG92ZXIsXFxuLnRhc2stY29udGFpbmVyPi50aXRsZTpob3ZlclxcbntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDMuNSk7XFxufVxcblxcbi8qID09PT09PT09PT0gVGFzayBDb250YWluZXIgPT09PT09PT09PSAqL1xcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCA1cHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggLi4gdGl0bGVcXFwiO1xcbn1cXG4vKiAuc2lkZWJhciAudGFzay1jb250YWluZXI+KiB7Ym9yZGVyOiAxcHggZG90dGVkIGRhcmtibHVlO30gKi9cXG4udGFzay1jb250YWluZXI+LnRpdGxlIHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvdmVyO1xcbiAgICBtYXNrLXNpemU6IGNvdmVyO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2NoZWNrYm94LXVuY2hlY2tlZC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvY2hlY2tib3gtdW5jaGVja2VkLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmRpZ28pO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94W2RhdGEtY2hlY2tlZD1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9jaGVja2JveC1jaGVja2VkLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9jaGVja2JveC1jaGVja2VkLnN2ZycpO1xcbn1cXG4udGFzay1jb250YWluZXI+LmNoZWNrYm94OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5kaWdvQnJpZ2h0ZXIpO1xcbn1cXG5cXG4vKiA9PT09PT09PT09IEJvdHRvbSwgTmV3IFByb2plY3QgPT09PT09PT09PSAqL1xcbi5zaWRlYmFyPi5ib3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbiNuZXctcHJvamVjdC1mb3JtPi5pY29uIHtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9hZGQtcHJvamVjdC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvYWRkLXByb2plY3Quc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuLmJ1dHRvbi1jb250YWluZXI6aG92ZXIge2JvcmRlci1jb2xvcjogdmFyKC0tZGFya0dyZWVuKTt9XFxuLmJ1dHRvbi1jb250YWluZXI6YWN0aXZlIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NCwgMTY0LCA1NCwgMC4yNDgpO31cXG4uYnV0dG9uLWNvbnRhaW5lcjpob3Zlcj4uaWNvbiB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRHcmVlbik7fVxcbi5idXR0b24tY29udGFpbmVyPi50ZXh0IHt3aGl0ZS1zcGFjZTogbm93cmFwOyBwYWRkaW5nLXJpZ2h0OiA0cHg7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ29udGVudCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5kaXYjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gICAgcGFkZGluZzogNTBweDtcXG5cXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5kaXYjY29udGVudD4uYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xcbn1cXG4uY2FyZCB7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjIxNik7ICovXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcbi5jYXJkOmZpcnN0LW9mLXR5cGUge2JvcmRlci10b3A6IG5vbmU7fVxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PSBQcm9qZWN0IERpc3BsYXkgPT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnByb2plY3QtZGlzcGxheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ucHJvamVjdC1kaXNwbGF5LWNvbnRhaW5lcj4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI25ldy10YXNrLWZvcm0ge3dpZHRoOiBtaW4tY29udGVudDt9XFxuI25ldy10YXNrLWZvcm0+Lmljb24ge1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2FkZC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvYWRkLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gVGFzayBEaXNwbGF5ID09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnRhc2stZGlzcGxheS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChtaW4tY29udGVudCwgNSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwidGl0bGVcXFwiXFxuICAgICAgICBcXFwiZGVzY1xcXCJcXG4gICAgICAgIFxcXCJkdWVEYXRlXFxcIlxcbiAgICAgICAgXFxcInByaW9cXFwiXFxuICAgICAgICBcXFwiZGVsZXRlXFxcIjtcXG59XFxuXFxuLnRhc2stZGlzcGxheS1jb250YWluZXI+LnRhc2stdGl0bGUge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNkZWxldGUtdGFzayB7XFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcbiNkZWxldGUtdGFzaz4uaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvZGVsZXRlLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9kZWxldGUuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbiNkZWxldGUtdGFzazpob3ZlciB7Ym9yZGVyLWNvbG9yOiB2YXIoLS1yZWQpO31cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09IFByb2plY3QgRm9ybSA9PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRTbGF0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrU2xhdGUpO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDZweCByZ2JhKDAsMCwwLC4wNSkgaW5zZXQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tZWRTbGF0ZSk7XFxufVxcblxcbiNjcmVhdGUtbmV3LXByb2plY3Qge3dpZHRoOiBtaW4tY29udGVudDt9XFxuI2NyZWF0ZS1uZXctcHJvamVjdD4uaWNvbiB7XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdhc3NldHMvYWRkLnN2ZycpO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2Fzc2V0cy9hZGQuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuI2NyZWF0ZS1uZXctcHJvamVjdDpob3ZlciB7Ym9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7fVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PSBUYXNrIEZvcm0gPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnRhc2stZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuLnRhc2stZm9ybS1jb250YWluZXI+KiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuI3Rhc2stdGl0bGUsXFxuI3Rhc2stZGVzYyB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcbiN0YXNrLWR1ZS1kYXRlIHtjb2xvcjogdmFyKC0tbWVkU2xhdGUpO31cXG5cXG4jY3JlYXRlLW5ldy10YXNrIHt3aWR0aDogbWluLWNvbnRlbnQ7fVxcbiNjcmVhdGUtbmV3LXRhc2s+Lmljb24ge1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnYXNzZXRzL2FkZC5zdmcnKTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdhc3NldHMvYWRkLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbiNjcmVhdGUtbmV3LXRhc2s6aG92ZXIge2JvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO31cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IERPTSBmcm9tICcuL2RvbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRNYW5hZ2VyKHByb2plY3RNYW5hZ2VyKSB7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7IC8vIGVtcHR5LCBwcm9qZWN0Rm9ybSwgcHJvamVjdERpc3BsYXksIHRhc2tGb3JtLCB0YXNrRGlzcGxheVxuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IC8vIG1vdmUgdG8gaW5wdXQ/XG4gICAgdGhpcy5zaWRlYmFyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgdGhpcy5wcm9qZWN0TWFuYWdlciA9IHByb2plY3RNYW5hZ2VyO1xufVxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24obmV3U3RhdGUsIGl0ZW0pIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gbmV3U3RhdGUgfHwgaXRlbSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHRoaXMudXBkYXRlKGl0ZW0pO1xuICAgIH1cbn1cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGFmdGVyIGNoYW5naW5nIHN0YXRlIHRvICcsIHRoaXMuc3RhdGUpO1xuICAgIERPTS5jbGVhck5vZGUodGhpcy5ub2RlKTtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgY2FzZSAncHJvamVjdEZvcm0nOiB0aGlzLmNyZWF0ZVByb2plY3RGb3JtKCk7IGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9qZWN0RGlzcGxheSc6IHRoaXMuY3JlYXRlUHJvamVjdERpc3BsYXkoaXRlbSk7IGJyZWFrO1xuICAgICAgICBjYXNlICd0YXNrRm9ybSc6IHRoaXMuY3JlYXRlVGFza0Zvcm0oaXRlbSk7IGJyZWFrO1xuICAgICAgICBjYXNlICd0YXNrRGlzcGxheSc6IHRoaXMuY3JlYXRlVGFza0Rpc3BsYXkoaXRlbSk7IGJyZWFrO1xuICAgICAgICBjYXNlICdlbXB0eSc6IGJyZWFrO1xuICAgIH1cbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVByb2plY3RGb3JtID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgWydwcm9qZWN0LWZvcm0tY29udGFpbmVyJ10pO1xuICAgIGNvbnN0IGlucHV0Tm9kZSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQoY29udGFpbmVyTm9kZSwgJ3RleHQnLCAncHJvamVjdC10aXRsZScsICdQcm9qZWN0IFRpdGxlJyk7XG4gICAgY29uc3QgYnV0dG9uTm9kZSA9IERPTS5jcmVhdGVCdXR0b25Db250YWluZXIoY29udGFpbmVyTm9kZSwgJ2NyZWF0ZS1uZXctcHJvamVjdCcsICdBZGQgUHJvamVjdCcpO1xuXG4gICAgYnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KGlucHV0Tm9kZS52YWx1ZSB8fCAnRGVmYXVsdCBQcm9qZWN0IFRpdGxlJyk7XG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdlbXB0eScpO1xuICAgIH0pO1xufVxuXG5Db250ZW50TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlUHJvamVjdERpc3BsYXkgPSBmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgbGV0IGNvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHRoaXMubm9kZSwgWydwcm9qZWN0LWRpc3BsYXktY29udGFpbmVyJ10pO1xuICAgIERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWydjYXJkJywgJ3Byb2plY3QtdGl0bGUnXSwgJ1Byb2plY3Q6ICcgKyBwcm9qZWN0Lm5hbWUpO1xuXG4gICAgLy8gRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBudWxsLCAnVGFza3M6ICcpO1xuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrTGlzdCkge1xuICAgICAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsnY2FyZCddLCB0YXNrLnRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b25Ob2RlID0gRE9NLmNyZWF0ZUJ1dHRvbkNvbnRhaW5lcihjb250YWluZXJOb2RlLCAnbmV3LXRhc2stZm9ybScsICdOZXcgVGFzaycpO1xuICAgIGJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3Rhc2tGb3JtJywgcHJvamVjdCk7XG4gICAgfSk7XG59XG5cbkNvbnRlbnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVUYXNrRm9ybSA9IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICBsZXQgY29udGFpbmVyTm9kZSA9IERPTS5jcmVhdGVEaXYodGhpcy5ub2RlLCBbJ3Rhc2stZm9ybS1jb250YWluZXInXSk7XG4gICAgbGV0IHRpdGxlTm9kZSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQoY29udGFpbmVyTm9kZSwgJ3RleHQnLCAndGFzay10aXRsZScsICdUYXNrIFRpdGxlJyk7XG4gICAgbGV0IGRlc2NOb2RlID0gRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dChjb250YWluZXJOb2RlLCAndGV4dCcsICd0YXNrLWRlc2MnLCAnVGFzayBEZXNjcmlwdGlvbicpO1xuICAgIGxldCBkdWVEYXRlTm9kZSA9IERPTS5jcmVhdGVMYWJlbGVkSW5wdXQoY29udGFpbmVyTm9kZSwgJ2RhdGUnLCAndGFzay1kdWUtZGF0ZScsICdUYXNrIER1ZSBEYXRlJyk7XG4gICAgbGV0IHByaW9Ob2RlID0gRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dChjb250YWluZXJOb2RlLCAnbnVtYmVyJywgJ3Rhc2stcHJpbycsICdUYXNrIFByaW9yaXR5Jyk7XG4gICAgcHJpb05vZGUuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAnKTtcbiAgICBwcmlvTm9kZS5zZXRBdHRyaWJ1dGUoJ21pbicsICcxJyk7XG5cblxuICAgIGNvbnN0IGJ1dHRvbk5vZGUgPSBET00uY3JlYXRlQnV0dG9uQ29udGFpbmVyKGNvbnRhaW5lck5vZGUsICdjcmVhdGUtbmV3LXRhc2snLCAnQWRkIFRhc2snKTtcblxuICAgIGJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QuY3JlYXRlVGFzayh0aXRsZU5vZGUudmFsdWUsIGRlc2NOb2RlLnZhbHVlLCBkdWVEYXRlTm9kZS52YWx1ZSwgcHJpb05vZGUudmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcbiAgICB9KTtcbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZVRhc2tEaXNwbGF5ID0gZnVuY3Rpb24odGFzaykge1xuICAgIGxldCBjb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLm5vZGUsIFsndGFzay1kaXNwbGF5LWNvbnRhaW5lciddKTtcbiAgICBET00uY3JlYXRlRGl2KGNvbnRhaW5lck5vZGUsIFsndGFzay10aXRsZScsICdjYXJkJ10sICdUYXNrOiAnICsgdGFzay50aXRsZSk7XG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ3Rhc2stZGVzYycsICdjYXJkJ10sIHRhc2suZGVzYyk7XG4gICAgRE9NLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ3Rhc2stZHVlLWRhdGUnLCAnY2FyZCddLCAnRHVlIERhdGU6ICcgKyB0YXNrLmR1ZURhdGUpO1xuICAgIERPTS5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWyd0YXNrLXByaW8nLCAnY2FyZCddLCAnUHJpb3JpdHk6ICcgKyB0YXNrLnByaW8pO1xuICAgIC8vIFRPRE86IGNzcyBjbGFzc2VzXG5cbiAgICAvLyBEZWxldGUgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gRE9NLmNyZWF0ZUJ1dHRvbkNvbnRhaW5lcihjb250YWluZXJOb2RlLCAnZGVsZXRlLXRhc2snLCAnRGVsZXRlJyk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrLmRlbGV0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnZW1wdHknKTtcbiAgICB9KTtcbn1cblxuQ29udGVudE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVNpZGViYXIgPSBmdW5jdGlvbigpIHtcbiAgICBET00uY2xlYXJOb2RlKHRoaXMuc2lkZWJhck5vZGUpO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0KSB7XG4gICAgICAgIGxldCBwcm9qZWN0R3JvdXBOb2RlID0gRE9NLmNyZWF0ZURpdih0aGlzLnNpZGViYXJOb2RlLCBbJ3Byb2plY3QtZ3JvdXAnXSk7XG5cbiAgICAgICAgbGV0IHByb2plY3RDb250YWluZXJOb2RlID0gRE9NLmNyZWF0ZURpdihwcm9qZWN0R3JvdXBOb2RlLCBbJ3Byb2plY3QtY29udGFpbmVyJ10pO1xuICAgICAgICBsZXQgcHJvamVjdEljb25Ob2RlID0gRE9NLmNyZWF0ZURpdihwcm9qZWN0Q29udGFpbmVyTm9kZSwgWydpY29uJ10pO1xuICAgICAgICBsZXQgcHJvamVjdFRpdGxlTm9kZSA9IERPTS5jcmVhdGVEaXYocHJvamVjdENvbnRhaW5lck5vZGUsIFsndGl0bGUnXSwgcHJvamVjdC5uYW1lKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyTm9kZS5kYXRhc2V0LnNlbGVjdGVkID0gcHJvamVjdC5zZWxlY3RlZDtcblxuICAgICAgICBwcm9qZWN0VGl0bGVOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2lkZWJhcigpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncHJvamVjdERpc3BsYXknLCBwcm9qZWN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tMaXN0KSB7XG4gICAgICAgICAgICBsZXQgdGFza0NvbnRhaW5lck5vZGUgPSBET00uY3JlYXRlRGl2KHByb2plY3RHcm91cE5vZGUsIFsndGFzay1jb250YWluZXInXSk7XG4gICAgICAgICAgICBsZXQgdGFza05vZGUgPSBET00uY3JlYXRlRGl2KHRhc2tDb250YWluZXJOb2RlLCBbJ3RpdGxlJ10sIHRhc2sudGl0bGUpO1xuICAgICAgICAgICAgbGV0IHRhc2tDaGVja2JveE5vZGUgPSBET00uY3JlYXRlRGl2KHRhc2tDb250YWluZXJOb2RlLCBbJ2NoZWNrYm94J10pO1xuXG4gICAgICAgICAgICB0YXNrQ2hlY2tib3hOb2RlLmRhdGFzZXQuY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJOb2RlLmRhdGFzZXQuc2VsZWN0ZWQgPSB0YXNrLnNlbGVjdGVkO1xuXG4gICAgICAgICAgICB0YXNrQ2hlY2tib3hOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2suY2hlY2tlZCA9ICF0YXNrLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2tOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2suc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgndGFza0Rpc3BsYXknLCB0YXNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSIsImNvbnN0IERPTSA9IHt9O1xuXG5ET00uY2xlYXJOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgIHdoaWxlKG5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbkRPTS5jcmVhdGVOb2RlID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgdGFnLCBjbGFzc0xpc3QsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGNsYXNzTGlzdClcbiAgICAgICAgZm9yIChsZXQgY2xzIG9mIGNsYXNzTGlzdClcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5ET00uY3JlYXRlRGl2ID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgY2xhc3NMaXN0LCB0ZXh0Q29udGVudCkge1xuICAgcmV0dXJuIHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnZGl2JywgY2xhc3NMaXN0LCB0ZXh0Q29udGVudClcbn1cblxuRE9NLmNyZWF0ZUxhYmVsZWRJbnB1dCA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGlucHV0VHlwZSwgaWQsIHRleHRDb250ZW50KSB7XG4gICAgbGV0IGlucHV0Tm9kZSA9IHRoaXMuY3JlYXRlTm9kZShwYXJlbnROb2RlLCAnaW5wdXQnKTtcbiAgICBpbnB1dE5vZGUudHlwZSA9IGlucHV0VHlwZTtcbiAgICBpbnB1dE5vZGUuaWQgPSBpZDtcbiAgICBpbnB1dE5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHRleHRDb250ZW50KTtcbiAgICByZXR1cm4gaW5wdXROb2RlO1xufVxuXG5ET00uY3JlYXRlQnV0dG9uID0gZnVuY3Rpb24ocGFyZW50Tm9kZSwgaWQsIGNsYXNzTGlzdCwgdGV4dENvbnRlbnQpIHtcbiAgICBsZXQgbWVyZ2VkQ2xhc3NMaXN0ID0gKGNsYXNzTGlzdCkgPyBbJ2J1dHRvbicsIC4uLmNsYXNzTGlzdF0gOiBbJ2J1dHRvbiddO1xuICAgIGxldCBub2RlID0gdGhpcy5jcmVhdGVEaXYocGFyZW50Tm9kZSwgbWVyZ2VkQ2xhc3NMaXN0LCB0ZXh0Q29udGVudCk7XG4gICAgbm9kZS5pZCA9IGlkO1xuICAgIHJldHVybiBub2RlO1xufVxuRE9NLmNyZWF0ZUJ1dHRvbkNvbnRhaW5lciA9IGZ1bmN0aW9uKHBhcmVudE5vZGUsIGlkLCB0ZXh0Q29udGVudCkge1xuICAgIGxldCBjb250YWluZXJOb2RlID0gdGhpcy5jcmVhdGVEaXYocGFyZW50Tm9kZSwgWydidXR0b24tY29udGFpbmVyJ10sIG51bGwpO1xuICAgIGNvbnRhaW5lck5vZGUuaWQgPSBpZDtcbiAgICBsZXQgaWNvbk5vZGUgPSB0aGlzLmNyZWF0ZURpdihjb250YWluZXJOb2RlLCBbJ2ljb24nXSwgbnVsbCk7XG4gICAgbGV0IHRleHROb2RlID0gdGhpcy5jcmVhdGVEaXYoY29udGFpbmVyTm9kZSwgWyd0ZXh0J10sIHRleHRDb250ZW50KTtcbiAgICByZXR1cm4gY29udGFpbmVyTm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNYW5hZ2VyKCkge1xuICAgIHRoaXMucHJvamVjdExpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG59XG5Qcm9qZWN0TWFuYWdlci5wcm90b3R5cGUuY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgbmV3IHByb2plY3Qgd2l0aCBuYW1lOiAnLCBuYW1lKTtcbiAgICAvLyBTZXQgaW5kZXggdG8gY3VycmVudCBwcm9qZWN0TGlzdCBsZW5ndGhcbiAgICB0aGlzLnByb2plY3RMaXN0LnB1c2gobmV3IFByb2plY3QodGhpcywgbmFtZSwgdGhpcy5wcm9qZWN0TGlzdC5sZW5ndGgpKTtcbn1cblByb2plY3RNYW5hZ2VyLnByb3RvdHlwZS5zZWxlY3RQcm9qZWN0ID0gZnVuY3Rpb24ocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBwcm9qZWN0ICMnLCBwcm9qZWN0LmluZGV4KTtcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3QuaW5kZXg7XG59XG5Qcm9qZWN0TWFuYWdlci5wcm90b3R5cGUuY2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMucHJvamVjdExpc3QpIHtcbiAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza0xpc3QpIHtcbiAgICAgICAgICAgIHRhc2suc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIFByb2plY3QobWFuYWdlciwgbmFtZSwgaW5kZXgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lOyAgIC8vIFRPRE86IGNvbnZlcnQgbmFtZSB0byB0aXRsZVxuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkVGFzayA9IG51bGw7XG5cbiAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5jcmVhdGVUYXNrID0gZnVuY3Rpb24odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pIHtcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2gobmV3IFRhc2sodGhpcywgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pKTtcbn1cblByb2plY3QucHJvdG90eXBlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIHRhc2sgIycsIHRoaXMuc2VsZWN0ZWRUYXNrKTtcbiAgICB0aGlzLnNlbGVjdGVkVGFzayA9IHRhc2suaW5kZXg7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRTdGFydGluZ1Rhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnYWRkaW5nIGRlZmF1bHQgc3RhcnRpbmcgdGFza3MuLi4nKTtcbiAgICB0aGlzLnRhc2tsaXN0LnB1c2gobmV3IFRhc2soKSk7XG59XG5Qcm9qZWN0LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1hbmFnZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbn1cblByb2plY3QucHJvdG90eXBlLmRlbGV0ZVRhc2sgPSBmdW5jdGlvbihpbmRleCkge1xuICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdFtpXS5pbmRleCA9IGk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2socHJvamVjdCwgdGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW8pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUgfHwgJ3BsYWNlaG9sZGVyIHRpdGxlJztcbiAgICB0aGlzLmRlc2MgPSBkZXNjIHx8ICdwbGFjZWhvbGRlciBkZXNjcmlwdGlvbic7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZSB8fCAnMDEvMDEvMjAyMyc7XG4gICAgdGhpcy5wcmlvID0gcHJpbyB8fCAxO1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgLy8gU2V0IGluZGV4IHRvIGN1cnJlbnQgdGFza0xpc3QgbGVuZ3RoXG4gICAgdGhpcy5pbmRleCA9IHByb2plY3QudGFza0xpc3QubGVuZ3RoO1xufVxuVGFzay5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9qZWN0Lm1hbmFnZXIuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbn1cblRhc2sucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucHJvamVjdC5kZWxldGVUYXNrKHRoaXMuaW5kZXgpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnNvbGUubG9nKCdIZWxsbywgV29ybGQhJyk7XG5cbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IENvbnRlbnRNYW5hZ2VyIGZyb20gJy4vY29udGVudC5qcyc7XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XG5jb25zdCBjb250ZW50TWFuYWdlciA9IG5ldyBDb250ZW50TWFuYWdlcihwcm9qZWN0TWFuYWdlcik7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgncHJvamVjdEZvcm0nKTtcbn0pO1xuXG5cblxuLy8gSU5JVElBTCBWQUxVRVNcbnByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QoJ0RhaWx5IEVycmFuZHMnKTtcbnByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0WzBdLmNyZWF0ZVRhc2soJ0J1eSBHcm9jZXJpZXMnLCAnUGljayB1cCBncm9jZXJpZXMgZnJvbSB0aGUgc3RvcmUuJywgbnVsbCwgNik7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXS5jcmVhdGVUYXNrKCdXYXNoIERpc2hlcycsICdXYXNoIHRvZGF5XFwncyBkaXNoZXMuJywgbnVsbCwgNCk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXS5jcmVhdGVUYXNrKCdXYWxrIERvZycsICdXYWxrIHRoZSBkb2cgZm9yIDE1IG1pbnV0ZXMuJywgbnVsbCwgNyk7XG5wcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KCdNb250aGx5IFRhc2tzJyk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFsxXS5jcmVhdGVUYXNrKCdQYXkgQmlsbHMnLCAnUGF5IGNyZWRpdCBjYXJkIGFuZCBlbGVjdHJpYyBiaWxscy4nLCBudWxsLCAxMCk7XG5wcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFsxXS5jcmVhdGVUYXNrKCdDaGFuZ2UgQnVsYnMnLCAnQ2hhbmdlIGxpZ2h0IGJ1bGJzIHRoYXQgYXJlIGZ1c2VkLicsbnVsbCwgNSk7XG5cbmNvbnRlbnRNYW5hZ2VyLmNoYW5nZVN0YXRlKCdlbXB0eScpO1xuY29udGVudE1hbmFnZXIudXBkYXRlU2lkZWJhcigpO1xuXG4vLyBTVEFSVCBBVCBGSVJTVCBQUk9KRUNUIERJU1BMQVlcbi8vIGxldCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIucHJvamVjdExpc3RbMF07XG4vLyBwcm9qZWN0LnNlbGVjdCgpO1xuLy8gbGV0IHRhc2sgPSBwcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXS50YXNrTGlzdFswXTtcbi8vIHRhc2suc2VsZWN0KCk7XG5jb250ZW50TWFuYWdlci51cGRhdGVTaWRlYmFyKCk7XG5jb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgndGFza0Zvcm0nLCBwcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdFswXSk7XG4vLyBjb250ZW50TWFuYWdlci5jaGFuZ2VTdGF0ZSgndGFza0Rpc3BsYXknLCB0YXNrKTtcbi8vIGNvbnRlbnRNYW5hZ2VyLmNoYW5nZVN0YXRlKCdwcm9qZWN0RGlzcGxheScsIHByb2plY3QpO1xuXG5cbi8vIERFQlVHXG5jb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlciwgY29udGVudE1hbmFnZXIpXG5cbi8vIFRPRE86IHJlb3JnYW5pemUgdGFzayBjb2RlIGxvY2F0aW9uXG4vLyBUT0RPOiBhZGQgaWNvbnNcbi8vIFRPRE86IGFkZCBzdWJtaXQgZm9ybSBidXR0b25cbi8vIFRPRE86IGZvcm0gdmFsaWRhdGlvblxuLy8gVE9ETzogc3R5bGUgZm9ybVxuLy8gVE9ETzogYWRkIGFiaWxpdHkgdG8gY2xpY2sgdGFza3Ncbi8vIFRPRE86IHBhc3Mgbm9kZSB0byBET01cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==