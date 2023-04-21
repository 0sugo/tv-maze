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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  height: 100%;\\n  width: 100%;\\n  overflow-x: hidden;\\n  line-height: 1.5;\\n  letter-spacing: 0.03em;\\n  font-family: 'Bebas Neue', cursive;\\n}\\n\\n/* popup */\\n.popup {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 1;\\n}\\n\\n.close-btn {\\n  cursor: pointer;\\n}\\n\\n.popup-content {\\n  background-color: #fff;\\n  width: 90%;\\n  height: 90%;\\n  border-radius: 10px;\\n  padding: 3%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.popup-body {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  height: 99%;\\n}\\n\\n.popup-image {\\n  height: 35%;\\n  border: 1px solid red;\\n  width: auto;\\n}\\n\\n.popup-image img {\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.popup-header h5 {\\n  text-align: center;\\n  margin: 10% 0%;\\n  border: 1px solid green;\\n}\\n\\n.popup-info {\\n  width: 90%;\\n  padding: 0%;\\n  border: 1px solid black;\\n}\\n\\n.feature-list {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n  margin: 0%;\\n  padding: 1%;\\n}\\n\\n.feature-item {\\n  width: 49%;\\n  text-decoration: none;\\n  list-style: none;\\n  font-size: 12px;\\n}\\n\\n.comments {\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 4%;\\n  width: 90%;\\n  height: 45% !important;\\n}\\n\\n.comments h6 {\\n  margin: 0%;\\n  text-align: center;\\n  box-sizing: border-box;\\n}\\n\\n.add-comment form {\\n  border: 1px solid blue;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 2%;\\n  margin-left: 0%;\\n  height: 100% !important;\\n}\\n\\nform input {\\n  padding: 3%;\\n  margin: 2%;\\n  border-radius: 5px;\\n  -webkit-border-radius: 5px;\\n  -moz-border-radius: 5px;\\n  -ms-border-radius: 5px;\\n  -o-border-radius: 5px;\\n}\\n\\n.all-comments {\\n  border: 1px solid purple;\\n  width: 60%;\\n  height: 100% !important;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.all-comments p {\\n  margin: 0%;\\n  padding: 2%;\\n}\\n\\n/* movies section */\\n.shows {\\n  width: 70%;\\n  min-height: 100%;\\n  margin: 1rem auto 3rem auto;\\n  display: grid;\\n  margin-bottom: 1rem;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 1rem;\\n}\\n\\n.show-card {\\n  border: 1px solid #000;\\n  color: #000;\\n  padding: 6px;\\n}\\n\\n.show-img {\\n  width: 100%;\\n  height: 70%;\\n  object-fit: contain;\\n}\\n\\n.title-likebtn {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.likes-count {\\n  display: flex;\\n  justify-content: flex-end;\\n  font-size: 1rem;\\n  font-weight: 700;\\n}\\n\\n.comment-btn {\\n  background-color: #fff;\\n  padding: 6px;\\n  width: 90%;\\n  margin: 0 5% 0 5%;\\n  box-shadow: 3px 3px #000;\\n  border: 1px solid #000;\\n}\\n\\n.likebtn {\\n  width: 20px;\\n  height: 20px;\\n}\\n\\n.title-likeBtn {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n/* footer */\\nfooter {\\n  margin-top: 1rem;\\n  height: 100px;\\n  width: 100%;\\n  background-color: #000;\\n  color: #fff;\\n  padding: 3rem;\\n  text-align: center;\\n}\\n\\na {\\n  color: #000;\\n  text-decoration: none;\\n  font-size: 1.4rem;\\n  margin-right: 12px;\\n}\\n\\na:nth-child(1) {\\n  text-decoration: underline;\\n}\\n\\n.navbar {\\n  display: flex;\\n  align-items: center;\\n  padding: 12px 32px;\\n}\\n\\n.logo {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  width: 100px;\\n  height: 100px;\\n  border-radius: 50%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tv-maze/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tv-maze/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://tv-maze/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tv-maze/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tv-maze/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tv-maze/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tv-maze/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tv-maze/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tv-maze/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tv-maze/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tv-maze/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayShows.js */ \"./src/modules/displayShows.js\");\n\n\n\n(0,_modules_displayShows_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://tv-maze/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = async (elements, array) => {\n  setTimeout(() => {\n    elements.innerHTML = `Comments ${array.childElementCount}`;\n  }, 100);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n\n//# sourceURL=webpack://tv-maze/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/displayPopup.js":
/*!*************************************!*\
  !*** ./src/modules/displayPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showComments.js */ \"./src/modules/showComments.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n// import fetchShows from './modules/displayShows.js';\n\n\n\nconst endPoint = 'https://api.tvmaze.com/shows';\nconst popUP = document.querySelector('.here');\nconst commentP = document.createElement('ul');\nconst h62 = document.createElement('h6');\n\nasync function getShows(fixedId) {\n  await fetch(endPoint, {\n\n  })\n    .then((response) => response.json())\n    .then((data) => {\n      const popupDiv = document.createElement('div');\n      popupDiv.className = 'popup';\n\n      const popupContentDiv = document.createElement('div');\n      popupContentDiv.className = 'popup-content';\n\n      const span = document.createElement('span');\n      span.className = 'close-btn';\n      span.innerHTML = '&times;';\n      popupContentDiv.append(span);\n      span.addEventListener('click', () => {\n        popUP.innerHTML = '';\n      });\n\n      const popupBody = document.createElement('div');\n      popupBody.className = 'popup-body';\n\n      const popupImage = document.createElement('div');\n      popupImage.className = 'popup-image';\n      popupImage.id = `${data[fixedId].id}`;\n      popupBody.append(popupImage);\n\n      const showImage = document.createElement('img');\n      showImage.src = `${data[fixedId].image.original}`;\n      popupImage.append(showImage);\n\n      const popupHeader = document.createElement('div');\n      popupHeader.className = 'popup-header';\n\n      const h5 = document.createElement('h5');\n      h5.textContent = `${data[fixedId].name}`;\n      popupHeader.append(h5);\n\n      const popupInfo = document.createElement('div');\n      popupInfo.className = 'popup-info';\n\n      const featureList = document.createElement('ul');\n      featureList.className = 'feature-list';\n\n      const itemGenre = document.createElement('li');\n      itemGenre.textContent = `Genres:${data[fixedId].genres}`;\n\n      const itemRating = document.createElement('li');\n      itemRating.textContent = `Rating:${data[fixedId].rating.average}`;\n\n      const itemLanguage = document.createElement('li');\n      itemLanguage.textContent = `Language:${data[fixedId].language}`;\n\n      const itemPremiered = document.createElement('li');\n      itemPremiered.textContent = `Premiered:${data[fixedId].premiered}`;\n\n      featureList.append(itemGenre, itemRating, itemLanguage, itemPremiered);\n      popupInfo.append(featureList);\n      popupBody.append(popupInfo);\n\n      const comments = document.createElement('div');\n      comments.className = 'comment';\n\n      const addComment = document.createElement('div');\n      addComment.className = 'add-comment';\n\n      const form = document.createElement('form');\n      form.addEventListener('submit', (e) => {\n        commentP.innerHTML = '';\n        e.preventDefault();\n        const desiredName = document.getElementById('named').value;\n        const desiredInsights = document.getElementById('insight').value;\n        const involvementUrl2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LR60RRSADfy5uTrj8R5e/comments';\n        const involvementUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LR60RRSADfy5uTrj8R5e/comments?item_id=${data[fixedId].name}`;\n\n        fetch(involvementUrl2, {\n          method: 'POST',\n          headers: {\n            'content-Type': 'application/json',\n          },\n          body: JSON.stringify({\n\n            item_id: `${data[fixedId].name}`,\n            username: desiredName,\n            comment: desiredInsights,\n\n          }),\n\n        });\n        setTimeout(async () => {\n          const response = await fetch(involvementUrl);\n          const data2 = await response.json();\n          const ctr = document.getElementById('ctr');\n\n          (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ctr, commentP);\n\n          data2.forEach((element) => {\n            const p = document.createElement('li');\n\n            p.textContent += element.creation_date;\n            p.textContent += ' ';\n            p.textContent += element.username;\n            p.textContent += ':';\n            p.textContent += element.comment;\n            commentP.append(p);\n            document.getElementById('insight').value = '';\n            document.getElementById('named').value = '';\n          });\n        }, 600);\n      });\n\n      const h6 = document.createElement('h6');\n      h6.textContent = 'Add comment';\n      form.append(h6);\n\n      const nameInput = document.createElement('input');\n      nameInput.type = 'text';\n      nameInput.placeholder = 'name';\n      nameInput.id = 'named';\n\n      const insightInput = document.createElement('input');\n      insightInput.type = 'text';\n      insightInput.placeholder = 'Your insights';\n      insightInput.id = 'insight';\n\n      const submitInput = document.createElement('input');\n      submitInput.type = 'submit';\n      submitInput.value = 'comment';\n      form.append(nameInput, insightInput, submitInput);\n      addComment.append(form);\n      comments.append(addComment);\n\n      const allComments = document.createElement('div');\n      allComments.className = 'all-comments';\n\n      h62.id = 'ctr';\n      allComments.append(h62);\n\n      (0,_showComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${data[fixedId].name}`, commentP);\n\n      allComments.append(commentP);\n      comments.append(allComments);\n\n      popupBody.append(comments);\n      popupContentDiv.append(popupBody);\n      popupDiv.append(popupContentDiv);\n      popUP.append(popupDiv);\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n\n//# sourceURL=webpack://tv-maze/./src/modules/displayPopup.js?");

/***/ }),

/***/ "./src/modules/displayShows.js":
/*!*************************************!*\
  !*** ./src/modules/displayShows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_like_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/like.svg */ \"./src/images/like.svg\");\n/* harmony import */ var _displayPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayPopup.js */ \"./src/modules/displayPopup.js\");\n/* harmony import */ var _showLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showLikes.js */ \"./src/modules/showLikes.js\");\n/* harmony import */ var _showsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showsCounter.js */ \"./src/modules/showsCounter.js\");\n\n\n\n\n\nconst url = 'https://api.tvmaze.com/shows';\nconst involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LR60RRSADfy5uTrj8R5e/likes';\nconst showsSection = document.getElementById('allShows');\n\nconst fetchShows = async () => {\n  showsSection.innerHTML = '';\n\n  const response = await fetch(url);\n  const data = await response.json();\n\n  for (let i = 0; i < 6; i += 1) {\n    const div = document.createElement('div');\n    div.className = 'show-card';\n\n    const showImg = document.createElement('img');\n    showImg.src = `${data[i].image.original}`;\n    showImg.className = 'show-img';\n    showImg.alt = `${data[i].name}`;\n    div.append(showImg);\n\n    const h5 = document.createElement('h5');\n\n    const showDiv = document.createElement('div');\n    showDiv.className = 'title-likebtn';\n    const h4 = document.createElement('h4');\n    h4.textContent = `${data[i].name}`;\n    const likeImg = document.createElement('img');\n    likeImg.className = 'likebtn';\n    likeImg.src = `${_images_like_svg__WEBPACK_IMPORTED_MODULE_0__}`;\n    likeImg.style.cursor = 'pointer';\n    likeImg.addEventListener('click', async () => {\n      h5.innerHTML = '';\n      fetch(involvementUrl, {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n        body: JSON.stringify({\n          item_id: `${data[i].name}`,\n        }),\n      });\n      setTimeout(async () => {\n        const response = await fetch(involvementUrl);\n        const result = await response.json();\n        result.forEach((el) => {\n          if (el.item_id === `${data[i].name}`) {\n            const countOfLikes = el.likes;\n            if (countOfLikes === 1) {\n              h5.innerHTML = `${countOfLikes} like`;\n            } else if (countOfLikes === 1) {\n              h5.innerHTML = '0 likes';\n            } else {\n              h5.innerHTML = `${countOfLikes} likes`;\n            }\n          }\n        });\n      }, 600);\n    });\n\n    showDiv.append(h4);\n    showDiv.append(likeImg);\n    div.append(showDiv);\n\n    (0,_showLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`${data[i].name}`, h5);\n    h5.className = 'likes-count';\n    div.append(h5);\n\n    const commentButton = document.createElement('button');\n    commentButton.setAttribute('id', `${data[i].id}`);\n    commentButton.className = 'comment-btn';\n    commentButton.textContent = 'Comments';\n    div.append(commentButton);\n    commentButton.addEventListener('click', () => {\n      const fixedId = `${data[i].id - 1}`;\n      (0,_displayPopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fixedId);\n    });\n\n    showsSection.append(div);\n    (0,_showsCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchShows);\n\n\n//# sourceURL=webpack://tv-maze/./src/modules/displayShows.js?");

/***/ }),

/***/ "./src/modules/showComments.js":
/*!*************************************!*\
  !*** ./src/modules/showComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchComments = async (item1, insertP) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LR60RRSADfy5uTrj8R5e/comments?item_id=${item1}`);\n  const result = await response.json();\n\n  result.forEach((element) => {\n    const p = document.createElement('li');\n\n    p.textContent += element.creation_date;\n    p.textContent += ' ';\n    p.textContent += element.username;\n    p.textContent += ':';\n    p.textContent += element.comment;\n    insertP.append(p);\n  });\n  setTimeout(() => {\n    const counter = insertP.childElementCount;\n    const ctr = document.querySelector('#ctr');\n    ctr.innerHTML = `Comments ${counter}`;\n  }, 1);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);\n\n\n//# sourceURL=webpack://tv-maze/./src/modules/showComments.js?");

/***/ }),

/***/ "./src/modules/showLikes.js":
/*!**********************************!*\
  !*** ./src/modules/showLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LR60RRSADfy5uTrj8R5e/likes';\n\nconst fetchLikes = async (name, h5Tag) => {\n  try {\n    const response = await fetch(url);\n    const result = await response.json();\n    result.forEach((el) => {\n      if (el.item_id === name) {\n        const countOfLikes = el.likes;\n        if (countOfLikes === 1) {\n          h5Tag.innerHTML = `${countOfLikes} like`;\n        } else if (countOfLikes === 0) {\n          h5Tag.innerHTML = '0 likes';\n        } else {\n          h5Tag.innerHTML = `${countOfLikes} likes`;\n        }\n      }\n    });\n  } catch (error) {\n    throw new Error(error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\n\n//# sourceURL=webpack://tv-maze/./src/modules/showLikes.js?");

/***/ }),

/***/ "./src/modules/showsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/showsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countTag = document.getElementById('shows-count');\n\nif (countTag !== null) {\n  countTag.innerHTML = '';\n}\n\nconst getShowsCount = async () => {\n  const shows = document.getElementsByClassName('show-card');\n\n  if (countTag !== null) {\n    countTag.innerHTML = `(${shows.length})`;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShowsCount);\n\n\n//# sourceURL=webpack://tv-maze/./src/modules/showsCounter.js?");

/***/ }),

/***/ "./src/images/like.svg":
/*!*****************************!*\
  !*** ./src/images/like.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"876f98e831191e7d3134.svg\";\n\n//# sourceURL=webpack://tv-maze/./src/images/like.svg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7815f3d7635150218cbd.png\";\n\n//# sourceURL=webpack://tv-maze/./src/images/logo.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;