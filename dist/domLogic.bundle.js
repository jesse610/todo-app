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
___CSS_LOADER_EXPORT___.push([module.id, `*, *:before, *:after {
    box-sizing: border-box;
}

body {
    height: 80vh;
}

.main {
    display: grid;
    grid-template-columns: 300px 1fr;
    height: 100%;
}

.sidebar {
    border: 1px dotted red;
}

.error {
    border: 1px solid red;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["*, *:before, *:after {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 80vh;\r\n}\r\n\r\n.main {\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    height: 100%;\r\n}\r\n\r\n.sidebar {\r\n    border: 1px dotted red;\r\n}\r\n\r\n.error {\r\n    border: 1px solid red;\r\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/applicationLogic.js":
/*!*********************************!*\
  !*** ./src/applicationLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem),
/* harmony export */   currentActiveProject: () => (/* binding */ currentActiveProject),
/* harmony export */   editDescription: () => (/* binding */ editDescription),
/* harmony export */   editDueDate: () => (/* binding */ editDueDate),
/* harmony export */   editPriority: () => (/* binding */ editPriority),
/* harmony export */   editProjectName: () => (/* binding */ editProjectName),
/* harmony export */   editTitle: () => (/* binding */ editTitle),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   removeTodoItem: () => (/* binding */ removeTodoItem),
/* harmony export */   setProject: () => (/* binding */ setProject)
/* harmony export */ });
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domLogic */ "./src/domLogic.js");



let currentActiveProject = 'DEFAULT'

const projects = {
    'DEFAULT' : [],
}

// todo factory function
function TodoItem (title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
}

// creates new project array
const createProject = (projectName) => {
    projectName = changeToUpperCase(projectName)
    let projectNames = currentProjects()
    if(projectNames.includes(projectName))
    {
        (0,_domLogic__WEBPACK_IMPORTED_MODULE_0__.projectLogger)('Project name already exists!')
    }
    else
    {
        projects[projectName] = []
        return projects
    }
}

// changes text to uppercase
const changeToUpperCase = (text) => {
    return text.toUpperCase()
}

// creates todo item by calling factory function and pushes to current array
const createTodoItem = (title, description, dueDate, priority) => {
    let todo = new TodoItem(title, description, dueDate, priority)
    pushTodoItem(todo)
    console.log(todo)
    return todo
}

// pushes todo item into current active project
const pushTodoItem = (todoItem) => {
    projects[currentActiveProject].push(todoItem)
}

// returns list of current project names
const currentProjects = () => {
    let projectNamesArr = []
    for (const names in projects) 
    {
        projectNamesArr.push(names.toUpperCase())
    }

    return projectNamesArr
}

// sets current project
const setProject = (projectName = 'DEFAULT') => {
    projectName = changeToUpperCase(projectName)
    const projects = currentProjects()

    if (projects.includes(projectName))
    {
        currentActiveProject = projectName
        return `${logger(`Set project to: ${currentActiveProject}`)}`
    }
    else
    {
        console.log('Project name does not exist!')
    }
}

// removes project from project object
const removeProject = (project) => {
    project = changeToUpperCase(project)
    if (project == projects[project])
    {
        return logger('Cannot delete default project!')
    }
    
    let projectNames = currentProjects()
    console.log(projectNames)

    if (projectNames.includes(project))
    {
        if(project == currentActiveProject)
        {
            setProject()
        }
        delete projects[project]
    }
    else
    {
        return logger('Cannot remove a project that does not exist!')
    }
}

// Logs message to console
const logger = (message) => {
    console.log(message)
}

// removes todo item
const removeTodoItem = (project = currentActiveProject, todoItem) => {
    if (todoItem < 0 || todoItem > projects[project].length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        projects[project].splice(todoItem, 1)
        return projects[project]
    }
}

// edits todo due date
const editDueDate = (todoItem, newDate) => {
    const project = projects[currentActiveProject]
    if (todoItem < 0 || todoItem > project.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        return project[todoItem].dueDate = newDate
    }
}

const editTitle = (todoItem, newTitle) => {
    const project = projects[currentActiveProject]
    if (todoItem < 0 || todoItem > project.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        return project[todoItem].title = newTitle
    }
}

const editDescription = (todoItem, newDesc) => {
    const project = projects[currentActiveProject]
    if (todoItem < 0 || todoItem > project.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        return project[todoItem].description = newDesc
    }
}

const editPriority = (todoItem, newPriority) => {
    const project = projects[currentActiveProject]
    if (todoItem < 0 || todoItem > project.length - 1)
    {
        return logger('Todo item does not exist!')
    }
    else
    {
        return project[todoItem].priority = newPriority
    }
}

const editProjectName = (oldProjectName, newProjectName) => {
    let p = currentProjects()
    if (oldProjectName == 'DEFAULT')
    {
        return logger('Cannot change default project!')
    }
    else if (!p.includes(oldProjectName))
    {
        return logger('Project does not exist to change name!')
    }
    else if (p.includes(newProjectName))
    {
        return logger('New project name already exists!')
    }
    else
    {
        delete Object.assign(projects, {[newProjectName]: projects[oldProjectName.toUpperCase()]})[oldProjectName]
        return projects
    }
}



/***/ }),

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   displayRemoveProjectBtns: () => (/* binding */ displayRemoveProjectBtns),
/* harmony export */   displayTaskForm: () => (/* binding */ displayTaskForm),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   projectLogger: () => (/* binding */ projectLogger)
/* harmony export */ });
/* harmony import */ var _applicationLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicationLogic */ "./src/applicationLogic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// const displayProjects = () => {
//     let projectUl = document.querySelector('.project-items')
//     const h2 = document.querySelector('.task-container > div > h2')
//     projectUl.textContent = ''
//     for(const names in projects) {
//         let li = document.createElement('li')
//         let a = document.createElement('a')
//         a.setAttribute('href', '#')
//         li.append(a)
//         a.setAttribute('class', 'project')
//         // works but maybe not the best
//         a.addEventListener('click', function() {
//             setProject(a.textContent)
//             displayTasks()
//             updateTaskHeading()
//             hideAddTaskButton(false)
//             hideAddTaskForm(true)
//         })
//         a.textContent = names
//         projectUl.appendChild(li)
//         displayRemoveProjectBtns()
//     }
// }

const displayProjects = () => {
    let projectUl = document.querySelector('.project-items')
    const h2 = document.querySelector('.task-container > div > h2')
    projectUl.textContent = ''

    for (const names in _applicationLogic__WEBPACK_IMPORTED_MODULE_0__.projects) {
        let li = createProjectListItem(names)
        projectUl.appendChild(li)
    }
    displayRemoveProjectBtns()
}

const createProjectListItem = (name) => {
    let li = document.createElement('li');
    let a = createProjectLink(name);
    li.appendChild(a)
    return li
}

const createProjectLink = (name) => {
    let a = document.createElement('a')
    a.setAttribute('href', '#')
    a.setAttribute('class', 'project')
    a.textContent = name
    a.addEventListener('click', () => {
        handleProjectLinkClick(a.textContent)
    })
    return a
}

const handleProjectLinkClick = (projectName) => {
    ;(0,_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.setProject)(projectName)
    displayTasks()
    updateTaskHeading()
    hideAddTaskButton(false)
    hideAddTaskForm(true)
}

const hideAddTaskButton = (tf) => {
    const addTaskBtn = document.querySelector('#add-task-btn')
    addTaskBtn.hidden = tf
}

const hideAddTaskForm = (tf) => {
    const form = document.querySelector('#task-form')

    if(form != null && tf == true)
    {
        form.remove()
    }
}

const updateTaskHeading = () => {
    const h2 = document.querySelector('.task-container > div > h2')
    h2.textContent =  `Tasks: ${_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.currentActiveProject}`
}

const displayTasks = () => {
    const projectTodos = _applicationLogic__WEBPACK_IMPORTED_MODULE_0__.projects[_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.currentActiveProject]
    const taskItemsUl = document.querySelector('.task-items')
    taskItemsUl.textContent = ''
   
    for(let i = 0; i < projectTodos.length; i++) 
    {
        let li = document.createElement('li')
        for (const values in projectTodos[i])
        {
            let span = document.createElement('span')
            span.textContent = projectTodos[i][values]
            li.appendChild(span)
        }
        taskItemsUl.appendChild(li)
    }
}

// working on this 
const displayTaskForm = () => {
    const addTaskBtn = document.querySelector('#add-task-btn')
    addTaskBtn.addEventListener('click', function() {
        createTaskForm()
        hideAddTaskButton(true)
    })
}

const createTaskForm = () => {
    const form = document.createElement('form')
    form.action = '#'
    form.id = 'task-form'
    
    // creates title input
    const input1 = document.createElement('input')
    input1.type = 'text'
    input1.name = 'title'
    input1.placeholder = 'Title'
    input1.autocomplete = "off"
    input1.id = 'title'
    form.appendChild(input1)

    // creates description input
    const input2 = document.createElement('input')
    input2.type = 'text'
    input2.name = 'description'
    input2.placeholder = 'Description'
    input2.autocomplete = "off"
    input2.id = 'description'
    form.appendChild(input2)

    // creates date input
    const input3 = document.createElement('input')
    input3.type = 'date'
    input3.name = 'deadline'
    input3.id = 'deadline'
    form.appendChild(input3)

    // creates select 
    const select = document.createElement('select')
    select.name = 'priority'
    select.id = 'priority'
    form.appendChild(select)

    // creates disabled option
    const option1 = document.createElement('option')
    option1.selected = true
    option1.disabled = true
    option1.textContent = 'Choose priority'
    option1.id = 'default'
    select.appendChild(option1)

    // creates low option
    const option2 = document.createElement('option')
    option2.value = 'low'
    option2.textContent = 'Low'
    select.appendChild(option2)

    // creates medium option
    const option3 = document.createElement('option')
    option3.value = 'medium'
    option3.textContent = 'Medium'
    select.appendChild(option3)

    // creates medium option
    const option4 = document.createElement('option')
    option4.value = 'high'
    option4.textContent = 'High'
    select.appendChild(option4)


    // creates submit button
    const submitBtn = document.createElement('button')
    submitBtn.type = 'submit'
    submitBtn.textContent = 'Create task'
    submitBtn.addEventListener('click', onTaskFormSubmit)
    form.appendChild(submitBtn)

    // appends form to container
    const container = document.querySelector('.form-container')
    container.appendChild(form)
}

// creates todo item
const onTaskFormSubmit = (e) => {
    e.preventDefault()
    let title = document.querySelector('#title')
    let desc = document.querySelector('#description')
    let deadline = document.querySelector('#deadline')
    let priority = document.querySelector('#priority')

    let formErrors = checkFormValues(title, desc, deadline, priority)
    if (!formErrors)
    {
        (0,_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)(title.value, desc.value, deadline.value, priority.value)
        displayTasks()
        resetForm()
        hideAddTaskButton(false)
        hideAddTaskForm(true)
        console.log(_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.projects)
    }
}

// checks form for any invalid inputs
const checkFormValues = (title, desc, deadline, priority) => {
    let errors = false

    if (title.value == '') 
    {
        title.classList.add('error')
        errors = true
    } 
    
    if (desc.value == '')
    {
        desc.classList.add('error')
        errors = true
    } 
    
    if (deadline.value == '')
    {
        deadline.classList.add('error')
        errors = true
    } 
    
    if (priority.value == 'Choose priority') 
    {
        priority.classList.add('error')
        errors = true
    }

    return errors
}


// resets form values after submit
const resetForm = () => {
    const form = document.querySelector('#task-form')
    form.reset()
    const priority = document.querySelector('#priority')
    priority.selectedIndex = 0
}

const addProject = () => {
    const addProjectBtn = document.querySelector('#add-project-btn')
    addProjectBtn.addEventListener('click', function(e) {
        const projectInputs = document.querySelectorAll('#project-name-input')
        
        if (projectInputs.length == 0)
        {
            displayProjectForm()
            e.stopPropagation()
        }
    })
}

const displayProjectForm = () => {
    const taskItemsUI = document.querySelector('.project-items')

    const form = document.createElement('form')
    form.id = 'project-name-form'

    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'project'
    input.id = 'project-name-input'
    form.appendChild(input)

    const input2 = document.createElement('input')
    input2.type = 'submit'
    input2.hidden = true
    form.appendChild(input2)
    form.addEventListener('submit', function(e) {
        onProjectSubmit(e)
    })

    taskItemsUI.appendChild(form)
    input.focus()

    // removes input if not clicked on 
    const inputField = document.querySelector('#project-name-input')

    document.addEventListener('click', function(event) {
        if (!form.contains(event.target) && event.target !== inputField) {
            inputField.remove()
            form.remove()
        }
    })
}

const onProjectSubmit = (e) => {
    e.preventDefault()
    const projectHeading = document.querySelector('.project-heading')
    const projectName = document.querySelector('#project-name-input')
    const span = document.createElement('span')
    span.id = 'error-message'
    projectHeading.appendChild(span)

    if (projectName.value == '')
    {
        projectLogger('Error! Project name cannot be empty')
    }
    else
    {
        console.log(projectName.value)
        ;(0,_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectName.value)
        displayProjects()
    }
}

// displays error message for new projects that are made
const projectLogger = (text) => {
    const errorMessage = document.querySelector('#error-message')
    errorMessage.textContent = text

    setTimeout(() => {
        errorMessage.remove()
    }, 3000)
}

const displayRemoveProjectBtns = () => {
    const displayedProjects = document.querySelectorAll('.project-items > li')
    displayedProjects.forEach(project => {
        console.log(project.textContent)
        if (project.textContent != 'DEFAULT' && project.querySelector('button') === null)
        {
            addRemoveProjectBtn(project)
        }
    })
}

const addRemoveProjectBtn = (project) => {
    let deleteBtn = createRemoveProjectBtn()
    project.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
        deleteProject(project)
    })
}

const createRemoveProjectBtn = (project) => {
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Remove'
    deleteBtn.type = 'button'
    return deleteBtn
}

const deleteProject = (project) => {
    let projectName = project.querySelector('a')
    ;(0,_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.removeProject)(projectName.textContent)
    console.log(_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.projects)
    displayProjects()
    displayTasks()
    updateTaskHeading()
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domLogic.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tTG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxnREFBZ0QsK0JBQStCLEtBQUssY0FBYyxxQkFBcUIsS0FBSyxlQUFlLHNCQUFzQix5Q0FBeUMscUJBQXFCLEtBQUssa0JBQWtCLCtCQUErQixLQUFLLGdCQUFnQiw4QkFBOEIsS0FBSyxtQkFBbUI7QUFDdmpCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDM0IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQkFBMEIscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MseURBQXlEO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQzhIO0FBQzFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUVBQW9CLENBQUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFRLENBQUMsbUVBQW9CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWE7QUFDakIsZ0JBQWdCLHVEQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0V0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwMy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vc3JjL2FwcGxpY2F0aW9uTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vc3JjL2RvbUxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tYXBwMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcDMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcDMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcDMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwMy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tYXBwMy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHJlZDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdExvZ2dlciB9IGZyb20gXCIuL2RvbUxvZ2ljXCJcclxuXHJcblxyXG5sZXQgY3VycmVudEFjdGl2ZVByb2plY3QgPSAnREVGQVVMVCdcclxuXHJcbmNvbnN0IHByb2plY3RzID0ge1xyXG4gICAgJ0RFRkFVTFQnIDogW10sXHJcbn1cclxuXHJcbi8vIHRvZG8gZmFjdG9yeSBmdW5jdGlvblxyXG5mdW5jdGlvbiBUb2RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxufVxyXG5cclxuLy8gY3JlYXRlcyBuZXcgcHJvamVjdCBhcnJheVxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICBwcm9qZWN0TmFtZSA9IGNoYW5nZVRvVXBwZXJDYXNlKHByb2plY3ROYW1lKVxyXG4gICAgbGV0IHByb2plY3ROYW1lcyA9IGN1cnJlbnRQcm9qZWN0cygpXHJcbiAgICBpZihwcm9qZWN0TmFtZXMuaW5jbHVkZXMocHJvamVjdE5hbWUpKVxyXG4gICAge1xyXG4gICAgICAgIHByb2plY3RMb2dnZXIoJ1Byb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0cyEnKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHByb2plY3RzW3Byb2plY3ROYW1lXSA9IFtdXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNoYW5nZXMgdGV4dCB0byB1cHBlcmNhc2VcclxuY29uc3QgY2hhbmdlVG9VcHBlckNhc2UgPSAodGV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKVxyXG59XHJcblxyXG4vLyBjcmVhdGVzIHRvZG8gaXRlbSBieSBjYWxsaW5nIGZhY3RvcnkgZnVuY3Rpb24gYW5kIHB1c2hlcyB0byBjdXJyZW50IGFycmF5XHJcbmNvbnN0IGNyZWF0ZVRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgIGxldCB0b2RvID0gbmV3IFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXHJcbiAgICBwdXNoVG9kb0l0ZW0odG9kbylcclxuICAgIGNvbnNvbGUubG9nKHRvZG8pXHJcbiAgICByZXR1cm4gdG9kb1xyXG59XHJcblxyXG4vLyBwdXNoZXMgdG9kbyBpdGVtIGludG8gY3VycmVudCBhY3RpdmUgcHJvamVjdFxyXG5jb25zdCBwdXNoVG9kb0l0ZW0gPSAodG9kb0l0ZW0pID0+IHtcclxuICAgIHByb2plY3RzW2N1cnJlbnRBY3RpdmVQcm9qZWN0XS5wdXNoKHRvZG9JdGVtKVxyXG59XHJcblxyXG4vLyByZXR1cm5zIGxpc3Qgb2YgY3VycmVudCBwcm9qZWN0IG5hbWVzXHJcbmNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGxldCBwcm9qZWN0TmFtZXNBcnIgPSBbXVxyXG4gICAgZm9yIChjb25zdCBuYW1lcyBpbiBwcm9qZWN0cykgXHJcbiAgICB7XHJcbiAgICAgICAgcHJvamVjdE5hbWVzQXJyLnB1c2gobmFtZXMudG9VcHBlckNhc2UoKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvamVjdE5hbWVzQXJyXHJcbn1cclxuXHJcbi8vIHNldHMgY3VycmVudCBwcm9qZWN0XHJcbmNvbnN0IHNldFByb2plY3QgPSAocHJvamVjdE5hbWUgPSAnREVGQVVMVCcpID0+IHtcclxuICAgIHByb2plY3ROYW1lID0gY2hhbmdlVG9VcHBlckNhc2UocHJvamVjdE5hbWUpXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGN1cnJlbnRQcm9qZWN0cygpXHJcblxyXG4gICAgaWYgKHByb2plY3RzLmluY2x1ZGVzKHByb2plY3ROYW1lKSlcclxuICAgIHtcclxuICAgICAgICBjdXJyZW50QWN0aXZlUHJvamVjdCA9IHByb2plY3ROYW1lXHJcbiAgICAgICAgcmV0dXJuIGAke2xvZ2dlcihgU2V0IHByb2plY3QgdG86ICR7Y3VycmVudEFjdGl2ZVByb2plY3R9YCl9YFxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0IG5hbWUgZG9lcyBub3QgZXhpc3QhJylcclxuICAgIH1cclxufVxyXG5cclxuLy8gcmVtb3ZlcyBwcm9qZWN0IGZyb20gcHJvamVjdCBvYmplY3RcclxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0ID0gY2hhbmdlVG9VcHBlckNhc2UocHJvamVjdClcclxuICAgIGlmIChwcm9qZWN0ID09IHByb2plY3RzW3Byb2plY3RdKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBsb2dnZXIoJ0Nhbm5vdCBkZWxldGUgZGVmYXVsdCBwcm9qZWN0IScpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0TmFtZXMgPSBjdXJyZW50UHJvamVjdHMoKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVzKVxyXG5cclxuICAgIGlmIChwcm9qZWN0TmFtZXMuaW5jbHVkZXMocHJvamVjdCkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYocHJvamVjdCA9PSBjdXJyZW50QWN0aXZlUHJvamVjdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFByb2plY3QoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdF1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyKCdDYW5ub3QgcmVtb3ZlIGEgcHJvamVjdCB0aGF0IGRvZXMgbm90IGV4aXN0IScpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIExvZ3MgbWVzc2FnZSB0byBjb25zb2xlXHJcbmNvbnN0IGxvZ2dlciA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxyXG59XHJcblxyXG4vLyByZW1vdmVzIHRvZG8gaXRlbVxyXG5jb25zdCByZW1vdmVUb2RvSXRlbSA9IChwcm9qZWN0ID0gY3VycmVudEFjdGl2ZVByb2plY3QsIHRvZG9JdGVtKSA9PiB7XHJcbiAgICBpZiAodG9kb0l0ZW0gPCAwIHx8IHRvZG9JdGVtID4gcHJvamVjdHNbcHJvamVjdF0ubGVuZ3RoIC0gMSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyKCdUb2RvIGl0ZW0gZG9lcyBub3QgZXhpc3QhJylcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBwcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UodG9kb0l0ZW0sIDEpXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW3Byb2plY3RdXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGVkaXRzIHRvZG8gZHVlIGRhdGVcclxuY29uc3QgZWRpdER1ZURhdGUgPSAodG9kb0l0ZW0sIG5ld0RhdGUpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tjdXJyZW50QWN0aXZlUHJvamVjdF1cclxuICAgIGlmICh0b2RvSXRlbSA8IDAgfHwgdG9kb0l0ZW0gPiBwcm9qZWN0Lmxlbmd0aCAtIDEpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcignVG9kbyBpdGVtIGRvZXMgbm90IGV4aXN0IScpXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RbdG9kb0l0ZW1dLmR1ZURhdGUgPSBuZXdEYXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGVkaXRUaXRsZSA9ICh0b2RvSXRlbSwgbmV3VGl0bGUpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tjdXJyZW50QWN0aXZlUHJvamVjdF1cclxuICAgIGlmICh0b2RvSXRlbSA8IDAgfHwgdG9kb0l0ZW0gPiBwcm9qZWN0Lmxlbmd0aCAtIDEpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcignVG9kbyBpdGVtIGRvZXMgbm90IGV4aXN0IScpXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RbdG9kb0l0ZW1dLnRpdGxlID0gbmV3VGl0bGVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZWRpdERlc2NyaXB0aW9uID0gKHRvZG9JdGVtLCBuZXdEZXNjKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbY3VycmVudEFjdGl2ZVByb2plY3RdXHJcbiAgICBpZiAodG9kb0l0ZW0gPCAwIHx8IHRvZG9JdGVtID4gcHJvamVjdC5sZW5ndGggLSAxKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBsb2dnZXIoJ1RvZG8gaXRlbSBkb2VzIG5vdCBleGlzdCEnKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0W3RvZG9JdGVtXS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZWRpdFByaW9yaXR5ID0gKHRvZG9JdGVtLCBuZXdQcmlvcml0eSkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2N1cnJlbnRBY3RpdmVQcm9qZWN0XVxyXG4gICAgaWYgKHRvZG9JdGVtIDwgMCB8fCB0b2RvSXRlbSA+IHByb2plY3QubGVuZ3RoIC0gMSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyKCdUb2RvIGl0ZW0gZG9lcyBub3QgZXhpc3QhJylcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdFt0b2RvSXRlbV0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBlZGl0UHJvamVjdE5hbWUgPSAob2xkUHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lKSA9PiB7XHJcbiAgICBsZXQgcCA9IGN1cnJlbnRQcm9qZWN0cygpXHJcbiAgICBpZiAob2xkUHJvamVjdE5hbWUgPT0gJ0RFRkFVTFQnKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBsb2dnZXIoJ0Nhbm5vdCBjaGFuZ2UgZGVmYXVsdCBwcm9qZWN0IScpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghcC5pbmNsdWRlcyhvbGRQcm9qZWN0TmFtZSkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcignUHJvamVjdCBkb2VzIG5vdCBleGlzdCB0byBjaGFuZ2UgbmFtZSEnKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocC5pbmNsdWRlcyhuZXdQcm9qZWN0TmFtZSkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcignTmV3IHByb2plY3QgbmFtZSBhbHJlYWR5IGV4aXN0cyEnKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGRlbGV0ZSBPYmplY3QuYXNzaWduKHByb2plY3RzLCB7W25ld1Byb2plY3ROYW1lXTogcHJvamVjdHNbb2xkUHJvamVjdE5hbWUudG9VcHBlckNhc2UoKV19KVtvbGRQcm9qZWN0TmFtZV1cclxuICAgICAgICByZXR1cm4gcHJvamVjdHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHByb2plY3RzLFxyXG4gICAgcmVtb3ZlUHJvamVjdCxcclxuICAgIGNyZWF0ZVByb2plY3QsXHJcbiAgICBjcmVhdGVUb2RvSXRlbSxcclxuICAgIHNldFByb2plY3QsXHJcbiAgICByZW1vdmVUb2RvSXRlbSxcclxuICAgIGVkaXREdWVEYXRlLCBcclxuICAgIGVkaXRUaXRsZSxcclxuICAgIGVkaXREZXNjcmlwdGlvbixcclxuICAgIGVkaXRQcmlvcml0eSxcclxuICAgIGVkaXRQcm9qZWN0TmFtZSwgXHJcbiAgICBjdXJyZW50QWN0aXZlUHJvamVjdFxyXG59IiwiXHJcbmltcG9ydCB7IHByb2plY3RzLCBjdXJyZW50QWN0aXZlUHJvamVjdCwgc2V0UHJvamVjdCwgY3JlYXRlVG9kb0l0ZW0sIGNyZWF0ZVByb2plY3QsIHJlbW92ZVByb2plY3QgfSBmcm9tIFwiLi9hcHBsaWNhdGlvbkxvZ2ljXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG4vLyBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XHJcbi8vICAgICBsZXQgcHJvamVjdFVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaXRlbXMnKVxyXG4vLyAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXIgPiBkaXYgPiBoMicpXHJcbi8vICAgICBwcm9qZWN0VWwudGV4dENvbnRlbnQgPSAnJ1xyXG4vLyAgICAgZm9yKGNvbnN0IG5hbWVzIGluIHByb2plY3RzKSB7XHJcbi8vICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4vLyAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbi8vICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpXHJcbi8vICAgICAgICAgbGkuYXBwZW5kKGEpXHJcbi8vICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKVxyXG4vLyAgICAgICAgIC8vIHdvcmtzIGJ1dCBtYXliZSBub3QgdGhlIGJlc3RcclxuLy8gICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIHNldFByb2plY3QoYS50ZXh0Q29udGVudClcclxuLy8gICAgICAgICAgICAgZGlzcGxheVRhc2tzKClcclxuLy8gICAgICAgICAgICAgdXBkYXRlVGFza0hlYWRpbmcoKVxyXG4vLyAgICAgICAgICAgICBoaWRlQWRkVGFza0J1dHRvbihmYWxzZSlcclxuLy8gICAgICAgICAgICAgaGlkZUFkZFRhc2tGb3JtKHRydWUpXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICBhLnRleHRDb250ZW50ID0gbmFtZXNcclxuLy8gICAgICAgICBwcm9qZWN0VWwuYXBwZW5kQ2hpbGQobGkpXHJcbi8vICAgICAgICAgZGlzcGxheVJlbW92ZVByb2plY3RCdG5zKClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2plY3RVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWl0ZW1zJylcclxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyID4gZGl2ID4gaDInKVxyXG4gICAgcHJvamVjdFVsLnRleHRDb250ZW50ID0gJydcclxuXHJcbiAgICBmb3IgKGNvbnN0IG5hbWVzIGluIHByb2plY3RzKSB7XHJcbiAgICAgICAgbGV0IGxpID0gY3JlYXRlUHJvamVjdExpc3RJdGVtKG5hbWVzKVxyXG4gICAgICAgIHByb2plY3RVbC5hcHBlbmRDaGlsZChsaSlcclxuICAgIH1cclxuICAgIGRpc3BsYXlSZW1vdmVQcm9qZWN0QnRucygpXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RMaXN0SXRlbSA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGV0IGEgPSBjcmVhdGVQcm9qZWN0TGluayhuYW1lKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGEpXHJcbiAgICByZXR1cm4gbGlcclxufVxyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdExpbmsgPSAobmFtZSkgPT4ge1xyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKVxyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKVxyXG4gICAgYS50ZXh0Q29udGVudCA9IG5hbWVcclxuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaGFuZGxlUHJvamVjdExpbmtDbGljayhhLnRleHRDb250ZW50KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBhXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVByb2plY3RMaW5rQ2xpY2sgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgIHNldFByb2plY3QocHJvamVjdE5hbWUpXHJcbiAgICBkaXNwbGF5VGFza3MoKVxyXG4gICAgdXBkYXRlVGFza0hlYWRpbmcoKVxyXG4gICAgaGlkZUFkZFRhc2tCdXR0b24oZmFsc2UpXHJcbiAgICBoaWRlQWRkVGFza0Zvcm0odHJ1ZSlcclxufVxyXG5cclxuY29uc3QgaGlkZUFkZFRhc2tCdXR0b24gPSAodGYpID0+IHtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJylcclxuICAgIGFkZFRhc2tCdG4uaGlkZGVuID0gdGZcclxufVxyXG5cclxuY29uc3QgaGlkZUFkZFRhc2tGb3JtID0gKHRmKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpXHJcblxyXG4gICAgaWYoZm9ybSAhPSBudWxsICYmIHRmID09IHRydWUpXHJcbiAgICB7XHJcbiAgICAgICAgZm9ybS5yZW1vdmUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVUYXNrSGVhZGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyID4gZGl2ID4gaDInKVxyXG4gICAgaDIudGV4dENvbnRlbnQgPSAgYFRhc2tzOiAke2N1cnJlbnRBY3RpdmVQcm9qZWN0fWBcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdFRvZG9zID0gcHJvamVjdHNbY3VycmVudEFjdGl2ZVByb2plY3RdXHJcbiAgICBjb25zdCB0YXNrSXRlbXNVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWl0ZW1zJylcclxuICAgIHRhc2tJdGVtc1VsLnRleHRDb250ZW50ID0gJydcclxuICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRvZG9zLmxlbmd0aDsgaSsrKSBcclxuICAgIHtcclxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgZm9yIChjb25zdCB2YWx1ZXMgaW4gcHJvamVjdFRvZG9zW2ldKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHByb2plY3RUb2Rvc1tpXVt2YWx1ZXNdXHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2tJdGVtc1VsLmFwcGVuZENoaWxkKGxpKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyB3b3JraW5nIG9uIHRoaXMgXHJcbmNvbnN0IGRpc3BsYXlUYXNrRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJylcclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjcmVhdGVUYXNrRm9ybSgpXHJcbiAgICAgICAgaGlkZUFkZFRhc2tCdXR0b24odHJ1ZSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRhc2tGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgZm9ybS5hY3Rpb24gPSAnIydcclxuICAgIGZvcm0uaWQgPSAndGFzay1mb3JtJ1xyXG4gICAgXHJcbiAgICAvLyBjcmVhdGVzIHRpdGxlIGlucHV0XHJcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBpbnB1dDEudHlwZSA9ICd0ZXh0J1xyXG4gICAgaW5wdXQxLm5hbWUgPSAndGl0bGUnXHJcbiAgICBpbnB1dDEucGxhY2Vob2xkZXIgPSAnVGl0bGUnXHJcbiAgICBpbnB1dDEuYXV0b2NvbXBsZXRlID0gXCJvZmZcIlxyXG4gICAgaW5wdXQxLmlkID0gJ3RpdGxlJ1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dDEpXHJcblxyXG4gICAgLy8gY3JlYXRlcyBkZXNjcmlwdGlvbiBpbnB1dFxyXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgaW5wdXQyLnR5cGUgPSAndGV4dCdcclxuICAgIGlucHV0Mi5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgaW5wdXQyLnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJ1xyXG4gICAgaW5wdXQyLmF1dG9jb21wbGV0ZSA9IFwib2ZmXCJcclxuICAgIGlucHV0Mi5pZCA9ICdkZXNjcmlwdGlvbidcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQyKVxyXG5cclxuICAgIC8vIGNyZWF0ZXMgZGF0ZSBpbnB1dFxyXG4gICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgaW5wdXQzLnR5cGUgPSAnZGF0ZSdcclxuICAgIGlucHV0My5uYW1lID0gJ2RlYWRsaW5lJ1xyXG4gICAgaW5wdXQzLmlkID0gJ2RlYWRsaW5lJ1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dDMpXHJcblxyXG4gICAgLy8gY3JlYXRlcyBzZWxlY3QgXHJcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgc2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknXHJcbiAgICBzZWxlY3QuaWQgPSAncHJpb3JpdHknXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdClcclxuXHJcbiAgICAvLyBjcmVhdGVzIGRpc2FibGVkIG9wdGlvblxyXG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICBvcHRpb24xLnNlbGVjdGVkID0gdHJ1ZVxyXG4gICAgb3B0aW9uMS5kaXNhYmxlZCA9IHRydWVcclxuICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHByaW9yaXR5J1xyXG4gICAgb3B0aW9uMS5pZCA9ICdkZWZhdWx0J1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbjEpXHJcblxyXG4gICAgLy8gY3JlYXRlcyBsb3cgb3B0aW9uXHJcbiAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgIG9wdGlvbjIudmFsdWUgPSAnbG93J1xyXG4gICAgb3B0aW9uMi50ZXh0Q29udGVudCA9ICdMb3cnXHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMilcclxuXHJcbiAgICAvLyBjcmVhdGVzIG1lZGl1bSBvcHRpb25cclxuICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgb3B0aW9uMy52YWx1ZSA9ICdtZWRpdW0nXHJcbiAgICBvcHRpb24zLnRleHRDb250ZW50ID0gJ01lZGl1bSdcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24zKVxyXG5cclxuICAgIC8vIGNyZWF0ZXMgbWVkaXVtIG9wdGlvblxyXG4gICAgY29uc3Qgb3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICBvcHRpb240LnZhbHVlID0gJ2hpZ2gnXHJcbiAgICBvcHRpb240LnRleHRDb250ZW50ID0gJ0hpZ2gnXHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uNClcclxuXHJcblxyXG4gICAgLy8gY3JlYXRlcyBzdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSB0YXNrJ1xyXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25UYXNrRm9ybVN1Ym1pdClcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxyXG5cclxuICAgIC8vIGFwcGVuZHMgZm9ybSB0byBjb250YWluZXJcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcclxufVxyXG5cclxuLy8gY3JlYXRlcyB0b2RvIGl0ZW1cclxuY29uc3Qgb25UYXNrRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXHJcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpXHJcbiAgICBsZXQgZGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVhZGxpbmUnKVxyXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JylcclxuXHJcbiAgICBsZXQgZm9ybUVycm9ycyA9IGNoZWNrRm9ybVZhbHVlcyh0aXRsZSwgZGVzYywgZGVhZGxpbmUsIHByaW9yaXR5KVxyXG4gICAgaWYgKCFmb3JtRXJyb3JzKVxyXG4gICAge1xyXG4gICAgICAgIGNyZWF0ZVRvZG9JdGVtKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkZWFkbGluZS52YWx1ZSwgcHJpb3JpdHkudmFsdWUpXHJcbiAgICAgICAgZGlzcGxheVRhc2tzKClcclxuICAgICAgICByZXNldEZvcm0oKVxyXG4gICAgICAgIGhpZGVBZGRUYXNrQnV0dG9uKGZhbHNlKVxyXG4gICAgICAgIGhpZGVBZGRUYXNrRm9ybSh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjaGVja3MgZm9ybSBmb3IgYW55IGludmFsaWQgaW5wdXRzXHJcbmNvbnN0IGNoZWNrRm9ybVZhbHVlcyA9ICh0aXRsZSwgZGVzYywgZGVhZGxpbmUsIHByaW9yaXR5KSA9PiB7XHJcbiAgICBsZXQgZXJyb3JzID0gZmFsc2VcclxuXHJcbiAgICBpZiAodGl0bGUudmFsdWUgPT0gJycpIFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcclxuICAgICAgICBlcnJvcnMgPSB0cnVlXHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBpZiAoZGVzYy52YWx1ZSA9PSAnJylcclxuICAgIHtcclxuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcclxuICAgICAgICBlcnJvcnMgPSB0cnVlXHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBpZiAoZGVhZGxpbmUudmFsdWUgPT0gJycpXHJcbiAgICB7XHJcbiAgICAgICAgZGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxyXG4gICAgICAgIGVycm9ycyA9IHRydWVcclxuICAgIH0gXHJcbiAgICBcclxuICAgIGlmIChwcmlvcml0eS52YWx1ZSA9PSAnQ2hvb3NlIHByaW9yaXR5JykgXHJcbiAgICB7XHJcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxyXG4gICAgICAgIGVycm9ycyA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3JzXHJcbn1cclxuXHJcblxyXG4vLyByZXNldHMgZm9ybSB2YWx1ZXMgYWZ0ZXIgc3VibWl0XHJcbmNvbnN0IHJlc2V0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJylcclxuICAgIGZvcm0ucmVzZXQoKVxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKVxyXG4gICAgcHJpb3JpdHkuc2VsZWN0ZWRJbmRleCA9IDBcclxufVxyXG5cclxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtYnRuJylcclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwcm9qZWN0SW5wdXRzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlzcGxheVByb2plY3RGb3JtKClcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tJdGVtc1VJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaXRlbXMnKVxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIGZvcm0uaWQgPSAncHJvamVjdC1uYW1lLWZvcm0nXHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICBpbnB1dC5uYW1lID0gJ3Byb2plY3QnXHJcbiAgICBpbnB1dC5pZCA9ICdwcm9qZWN0LW5hbWUtaW5wdXQnXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxyXG5cclxuICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGlucHV0Mi50eXBlID0gJ3N1Ym1pdCdcclxuICAgIGlucHV0Mi5oaWRkZW4gPSB0cnVlXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0MilcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIG9uUHJvamVjdFN1Ym1pdChlKVxyXG4gICAgfSlcclxuXHJcbiAgICB0YXNrSXRlbXNVSS5hcHBlbmRDaGlsZChmb3JtKVxyXG4gICAgaW5wdXQuZm9jdXMoKVxyXG5cclxuICAgIC8vIHJlbW92ZXMgaW5wdXQgaWYgbm90IGNsaWNrZWQgb24gXHJcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZS1pbnB1dCcpXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmICghZm9ybS5jb250YWlucyhldmVudC50YXJnZXQpICYmIGV2ZW50LnRhcmdldCAhPT0gaW5wdXRGaWVsZCkge1xyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBvblByb2plY3RTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRpbmcnKVxyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWlucHV0JylcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIHNwYW4uaWQgPSAnZXJyb3ItbWVzc2FnZSdcclxuICAgIHByb2plY3RIZWFkaW5nLmFwcGVuZENoaWxkKHNwYW4pXHJcblxyXG4gICAgaWYgKHByb2plY3ROYW1lLnZhbHVlID09ICcnKVxyXG4gICAge1xyXG4gICAgICAgIHByb2plY3RMb2dnZXIoJ0Vycm9yISBQcm9qZWN0IG5hbWUgY2Fubm90IGJlIGVtcHR5JylcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZS52YWx1ZSlcclxuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKVxyXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGRpc3BsYXlzIGVycm9yIG1lc3NhZ2UgZm9yIG5ldyBwcm9qZWN0cyB0aGF0IGFyZSBtYWRlXHJcbmNvbnN0IHByb2plY3RMb2dnZXIgPSAodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLW1lc3NhZ2UnKVxyXG4gICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gdGV4dFxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS5yZW1vdmUoKVxyXG4gICAgfSwgMzAwMClcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVJlbW92ZVByb2plY3RCdG5zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGxheWVkUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtcyA+IGxpJylcclxuICAgIGRpc3BsYXllZFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50ZXh0Q29udGVudClcclxuICAgICAgICBpZiAocHJvamVjdC50ZXh0Q29udGVudCAhPSAnREVGQVVMVCcgJiYgcHJvamVjdC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSA9PT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFkZFJlbW92ZVByb2plY3RCdG4ocHJvamVjdClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBhZGRSZW1vdmVQcm9qZWN0QnRuID0gKHByb2plY3QpID0+IHtcclxuICAgIGxldCBkZWxldGVCdG4gPSBjcmVhdGVSZW1vdmVQcm9qZWN0QnRuKClcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKVxyXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdClcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVJlbW92ZVByb2plY3RCdG4gPSAocHJvamVjdCkgPT4ge1xyXG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlJ1xyXG4gICAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJ1xyXG4gICAgcmV0dXJuIGRlbGV0ZUJ0blxyXG59XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3QucXVlcnlTZWxlY3RvcignYScpXHJcbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lLnRleHRDb250ZW50KVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxyXG4gICAgZGlzcGxheVRhc2tzKClcclxuICAgIHVwZGF0ZVRhc2tIZWFkaW5nKClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRpc3BsYXlQcm9qZWN0cyxcclxuICAgIGRpc3BsYXlUYXNrcyxcclxuICAgIGRpc3BsYXlUYXNrRm9ybSxcclxuICAgIGFkZFByb2plY3QsXHJcbiAgICBwcm9qZWN0TG9nZ2VyLFxyXG4gICAgZGlzcGxheVJlbW92ZVByb2plY3RCdG5zXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kb21Mb2dpYy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==