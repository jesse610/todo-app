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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applicationLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicationLogic */ "./src/applicationLogic.js");
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domLogic */ "./src/domLogic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_domLogic__WEBPACK_IMPORTED_MODULE_1__.displayProjects)()
;(0,_domLogic__WEBPACK_IMPORTED_MODULE_1__.displayTasks)()
;(0,_domLogic__WEBPACK_IMPORTED_MODULE_1__.displayTaskForm)()
;(0,_domLogic__WEBPACK_IMPORTED_MODULE_1__.addProject)()
// displayRemoveProjectBtns()
console.log(_applicationLogic__WEBPACK_IMPORTED_MODULE_0__.projects)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxnREFBZ0QsK0JBQStCLEtBQUssY0FBYyxxQkFBcUIsS0FBSyxlQUFlLHNCQUFzQix5Q0FBeUMscUJBQXFCLEtBQUssa0JBQWtCLCtCQUErQixLQUFLLGdCQUFnQiw4QkFBOEIsS0FBSyxtQkFBbUI7QUFDdmpCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDM0IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwQkFBMEIscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MseURBQXlEO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQzhIO0FBQzFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUVBQW9CLENBQUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFRLENBQUMsbUVBQW9CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWE7QUFDakIsZ0JBQWdCLHVEQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0V0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdNO0FBQzlFO0FBQzlGO0FBQ3BCO0FBQ0EsMERBQWU7QUFDZix3REFBWTtBQUNaLDJEQUFlO0FBQ2Ysc0RBQVU7QUFDVjtBQUNBLFlBQVksdURBQVEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwMy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwMy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9zcmMvYXBwbGljYXRpb25Mb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcDMvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwMy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcDMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwMy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogODB2aDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgcmVkO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOmJlZm9yZSwgKjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0TG9nZ2VyIH0gZnJvbSBcIi4vZG9tTG9naWNcIlxyXG5cclxuXHJcbmxldCBjdXJyZW50QWN0aXZlUHJvamVjdCA9ICdERUZBVUxUJ1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSB7XHJcbiAgICAnREVGQVVMVCcgOiBbXSxcclxufVxyXG5cclxuLy8gdG9kbyBmYWN0b3J5IGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIFRvZG9JdGVtICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG59XHJcblxyXG4vLyBjcmVhdGVzIG5ldyBwcm9qZWN0IGFycmF5XHJcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgIHByb2plY3ROYW1lID0gY2hhbmdlVG9VcHBlckNhc2UocHJvamVjdE5hbWUpXHJcbiAgICBsZXQgcHJvamVjdE5hbWVzID0gY3VycmVudFByb2plY3RzKClcclxuICAgIGlmKHByb2plY3ROYW1lcy5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpXHJcbiAgICB7XHJcbiAgICAgICAgcHJvamVjdExvZ2dlcignUHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3RzIScpXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdE5hbWVdID0gW11cclxuICAgICAgICByZXR1cm4gcHJvamVjdHNcclxuICAgIH1cclxufVxyXG5cclxuLy8gY2hhbmdlcyB0ZXh0IHRvIHVwcGVyY2FzZVxyXG5jb25zdCBjaGFuZ2VUb1VwcGVyQ2FzZSA9ICh0ZXh0KSA9PiB7XHJcbiAgICByZXR1cm4gdGV4dC50b1VwcGVyQ2FzZSgpXHJcbn1cclxuXHJcbi8vIGNyZWF0ZXMgdG9kbyBpdGVtIGJ5IGNhbGxpbmcgZmFjdG9yeSBmdW5jdGlvbiBhbmQgcHVzaGVzIHRvIGN1cnJlbnQgYXJyYXlcclxuY29uc3QgY3JlYXRlVG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcclxuICAgIHB1c2hUb2RvSXRlbSh0b2RvKVxyXG4gICAgY29uc29sZS5sb2codG9kbylcclxuICAgIHJldHVybiB0b2RvXHJcbn1cclxuXHJcbi8vIHB1c2hlcyB0b2RvIGl0ZW0gaW50byBjdXJyZW50IGFjdGl2ZSBwcm9qZWN0XHJcbmNvbnN0IHB1c2hUb2RvSXRlbSA9ICh0b2RvSXRlbSkgPT4ge1xyXG4gICAgcHJvamVjdHNbY3VycmVudEFjdGl2ZVByb2plY3RdLnB1c2godG9kb0l0ZW0pXHJcbn1cclxuXHJcbi8vIHJldHVybnMgbGlzdCBvZiBjdXJyZW50IHByb2plY3QgbmFtZXNcclxuY29uc3QgY3VycmVudFByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2plY3ROYW1lc0FyciA9IFtdXHJcbiAgICBmb3IgKGNvbnN0IG5hbWVzIGluIHByb2plY3RzKSBcclxuICAgIHtcclxuICAgICAgICBwcm9qZWN0TmFtZXNBcnIucHVzaChuYW1lcy50b1VwcGVyQ2FzZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9qZWN0TmFtZXNBcnJcclxufVxyXG5cclxuLy8gc2V0cyBjdXJyZW50IHByb2plY3RcclxuY29uc3Qgc2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSA9ICdERUZBVUxUJykgPT4ge1xyXG4gICAgcHJvamVjdE5hbWUgPSBjaGFuZ2VUb1VwcGVyQ2FzZShwcm9qZWN0TmFtZSlcclxuICAgIGNvbnN0IHByb2plY3RzID0gY3VycmVudFByb2plY3RzKClcclxuXHJcbiAgICBpZiAocHJvamVjdHMuaW5jbHVkZXMocHJvamVjdE5hbWUpKVxyXG4gICAge1xyXG4gICAgICAgIGN1cnJlbnRBY3RpdmVQcm9qZWN0ID0gcHJvamVjdE5hbWVcclxuICAgICAgICByZXR1cm4gYCR7bG9nZ2VyKGBTZXQgcHJvamVjdCB0bzogJHtjdXJyZW50QWN0aXZlUHJvamVjdH1gKX1gXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3QgbmFtZSBkb2VzIG5vdCBleGlzdCEnKVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyByZW1vdmVzIHByb2plY3QgZnJvbSBwcm9qZWN0IG9iamVjdFxyXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QgPSBjaGFuZ2VUb1VwcGVyQ2FzZShwcm9qZWN0KVxyXG4gICAgaWYgKHByb2plY3QgPT0gcHJvamVjdHNbcHJvamVjdF0pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcignQ2Fubm90IGRlbGV0ZSBkZWZhdWx0IHByb2plY3QhJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHByb2plY3ROYW1lcyA9IGN1cnJlbnRQcm9qZWN0cygpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZXMpXHJcblxyXG4gICAgaWYgKHByb2plY3ROYW1lcy5pbmNsdWRlcyhwcm9qZWN0KSlcclxuICAgIHtcclxuICAgICAgICBpZihwcm9qZWN0ID09IGN1cnJlbnRBY3RpdmVQcm9qZWN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0UHJvamVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1twcm9qZWN0XVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBsb2dnZXIoJ0Nhbm5vdCByZW1vdmUgYSBwcm9qZWN0IHRoYXQgZG9lcyBub3QgZXhpc3QhJylcclxuICAgIH1cclxufVxyXG5cclxuLy8gTG9ncyBtZXNzYWdlIHRvIGNvbnNvbGVcclxuY29uc3QgbG9nZ2VyID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcbn1cclxuXHJcbi8vIHJlbW92ZXMgdG9kbyBpdGVtXHJcbmNvbnN0IHJlbW92ZVRvZG9JdGVtID0gKHByb2plY3QgPSBjdXJyZW50QWN0aXZlUHJvamVjdCwgdG9kb0l0ZW0pID0+IHtcclxuICAgIGlmICh0b2RvSXRlbSA8IDAgfHwgdG9kb0l0ZW0gPiBwcm9qZWN0c1twcm9qZWN0XS5sZW5ndGggLSAxKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBsb2dnZXIoJ1RvZG8gaXRlbSBkb2VzIG5vdCBleGlzdCEnKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHByb2plY3RzW3Byb2plY3RdLnNwbGljZSh0b2RvSXRlbSwgMSlcclxuICAgICAgICByZXR1cm4gcHJvamVjdHNbcHJvamVjdF1cclxuICAgIH1cclxufVxyXG5cclxuLy8gZWRpdHMgdG9kbyBkdWUgZGF0ZVxyXG5jb25zdCBlZGl0RHVlRGF0ZSA9ICh0b2RvSXRlbSwgbmV3RGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2N1cnJlbnRBY3RpdmVQcm9qZWN0XVxyXG4gICAgaWYgKHRvZG9JdGVtIDwgMCB8fCB0b2RvSXRlbSA+IHByb2plY3QubGVuZ3RoIC0gMSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyKCdUb2RvIGl0ZW0gZG9lcyBub3QgZXhpc3QhJylcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdFt0b2RvSXRlbV0uZHVlRGF0ZSA9IG5ld0RhdGVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZWRpdFRpdGxlID0gKHRvZG9JdGVtLCBuZXdUaXRsZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2N1cnJlbnRBY3RpdmVQcm9qZWN0XVxyXG4gICAgaWYgKHRvZG9JdGVtIDwgMCB8fCB0b2RvSXRlbSA+IHByb2plY3QubGVuZ3RoIC0gMSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyKCdUb2RvIGl0ZW0gZG9lcyBub3QgZXhpc3QhJylcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdFt0b2RvSXRlbV0udGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBlZGl0RGVzY3JpcHRpb24gPSAodG9kb0l0ZW0sIG5ld0Rlc2MpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tjdXJyZW50QWN0aXZlUHJvamVjdF1cclxuICAgIGlmICh0b2RvSXRlbSA8IDAgfHwgdG9kb0l0ZW0gPiBwcm9qZWN0Lmxlbmd0aCAtIDEpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcignVG9kbyBpdGVtIGRvZXMgbm90IGV4aXN0IScpXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RbdG9kb0l0ZW1dLmRlc2NyaXB0aW9uID0gbmV3RGVzY1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBlZGl0UHJpb3JpdHkgPSAodG9kb0l0ZW0sIG5ld1ByaW9yaXR5KSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbY3VycmVudEFjdGl2ZVByb2plY3RdXHJcbiAgICBpZiAodG9kb0l0ZW0gPCAwIHx8IHRvZG9JdGVtID4gcHJvamVjdC5sZW5ndGggLSAxKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBsb2dnZXIoJ1RvZG8gaXRlbSBkb2VzIG5vdCBleGlzdCEnKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0W3RvZG9JdGVtXS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChvbGRQcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpID0+IHtcclxuICAgIGxldCBwID0gY3VycmVudFByb2plY3RzKClcclxuICAgIGlmIChvbGRQcm9qZWN0TmFtZSA9PSAnREVGQVVMVCcpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2dlcignQ2Fubm90IGNoYW5nZSBkZWZhdWx0IHByb2plY3QhJylcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFwLmluY2x1ZGVzKG9sZFByb2plY3ROYW1lKSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyKCdQcm9qZWN0IGRvZXMgbm90IGV4aXN0IHRvIGNoYW5nZSBuYW1lIScpXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwLmluY2x1ZGVzKG5ld1Byb2plY3ROYW1lKSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbG9nZ2VyKCdOZXcgcHJvamVjdCBuYW1lIGFscmVhZHkgZXhpc3RzIScpXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZGVsZXRlIE9iamVjdC5hc3NpZ24ocHJvamVjdHMsIHtbbmV3UHJvamVjdE5hbWVdOiBwcm9qZWN0c1tvbGRQcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpXX0pW29sZFByb2plY3ROYW1lXVxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0c1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgcHJvamVjdHMsXHJcbiAgICByZW1vdmVQcm9qZWN0LFxyXG4gICAgY3JlYXRlUHJvamVjdCxcclxuICAgIGNyZWF0ZVRvZG9JdGVtLFxyXG4gICAgc2V0UHJvamVjdCxcclxuICAgIHJlbW92ZVRvZG9JdGVtLFxyXG4gICAgZWRpdER1ZURhdGUsIFxyXG4gICAgZWRpdFRpdGxlLFxyXG4gICAgZWRpdERlc2NyaXB0aW9uLFxyXG4gICAgZWRpdFByaW9yaXR5LFxyXG4gICAgZWRpdFByb2plY3ROYW1lLCBcclxuICAgIGN1cnJlbnRBY3RpdmVQcm9qZWN0XHJcbn0iLCJcclxuaW1wb3J0IHsgcHJvamVjdHMsIGN1cnJlbnRBY3RpdmVQcm9qZWN0LCBzZXRQcm9qZWN0LCBjcmVhdGVUb2RvSXRlbSwgY3JlYXRlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL2FwcGxpY2F0aW9uTG9naWNcIjtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbi8vIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcclxuLy8gICAgIGxldCBwcm9qZWN0VWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pdGVtcycpXHJcbi8vICAgICBjb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lciA+IGRpdiA+IGgyJylcclxuLy8gICAgIHByb2plY3RVbC50ZXh0Q29udGVudCA9ICcnXHJcbi8vICAgICBmb3IoY29uc3QgbmFtZXMgaW4gcHJvamVjdHMpIHtcclxuLy8gICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbi8vICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuLy8gICAgICAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJylcclxuLy8gICAgICAgICBsaS5hcHBlbmQoYSlcclxuLy8gICAgICAgICBhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpXHJcbi8vICAgICAgICAgLy8gd29ya3MgYnV0IG1heWJlIG5vdCB0aGUgYmVzdFxyXG4vLyAgICAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgc2V0UHJvamVjdChhLnRleHRDb250ZW50KVxyXG4vLyAgICAgICAgICAgICBkaXNwbGF5VGFza3MoKVxyXG4vLyAgICAgICAgICAgICB1cGRhdGVUYXNrSGVhZGluZygpXHJcbi8vICAgICAgICAgICAgIGhpZGVBZGRUYXNrQnV0dG9uKGZhbHNlKVxyXG4vLyAgICAgICAgICAgICBoaWRlQWRkVGFza0Zvcm0odHJ1ZSlcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIGEudGV4dENvbnRlbnQgPSBuYW1lc1xyXG4vLyAgICAgICAgIHByb2plY3RVbC5hcHBlbmRDaGlsZChsaSlcclxuLy8gICAgICAgICBkaXNwbGF5UmVtb3ZlUHJvamVjdEJ0bnMoKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdFVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaXRlbXMnKVxyXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXIgPiBkaXYgPiBoMicpXHJcbiAgICBwcm9qZWN0VWwudGV4dENvbnRlbnQgPSAnJ1xyXG5cclxuICAgIGZvciAoY29uc3QgbmFtZXMgaW4gcHJvamVjdHMpIHtcclxuICAgICAgICBsZXQgbGkgPSBjcmVhdGVQcm9qZWN0TGlzdEl0ZW0obmFtZXMpXHJcbiAgICAgICAgcHJvamVjdFVsLmFwcGVuZENoaWxkKGxpKVxyXG4gICAgfVxyXG4gICAgZGlzcGxheVJlbW92ZVByb2plY3RCdG5zKClcclxufVxyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdExpc3RJdGVtID0gKG5hbWUpID0+IHtcclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsZXQgYSA9IGNyZWF0ZVByb2plY3RMaW5rKG5hbWUpO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoYSlcclxuICAgIHJldHVybiBsaVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0TGluayA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpXHJcbiAgICBhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpXHJcbiAgICBhLnRleHRDb250ZW50ID0gbmFtZVxyXG4gICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBoYW5kbGVQcm9qZWN0TGlua0NsaWNrKGEudGV4dENvbnRlbnQpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGFcclxufVxyXG5cclxuY29uc3QgaGFuZGxlUHJvamVjdExpbmtDbGljayA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgc2V0UHJvamVjdChwcm9qZWN0TmFtZSlcclxuICAgIGRpc3BsYXlUYXNrcygpXHJcbiAgICB1cGRhdGVUYXNrSGVhZGluZygpXHJcbiAgICBoaWRlQWRkVGFza0J1dHRvbihmYWxzZSlcclxuICAgIGhpZGVBZGRUYXNrRm9ybSh0cnVlKVxyXG59XHJcblxyXG5jb25zdCBoaWRlQWRkVGFza0J1dHRvbiA9ICh0ZikgPT4ge1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKVxyXG4gICAgYWRkVGFza0J0bi5oaWRkZW4gPSB0ZlxyXG59XHJcblxyXG5jb25zdCBoaWRlQWRkVGFza0Zvcm0gPSAodGYpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJylcclxuXHJcbiAgICBpZihmb3JtICE9IG51bGwgJiYgdGYgPT0gdHJ1ZSlcclxuICAgIHtcclxuICAgICAgICBmb3JtLnJlbW92ZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVRhc2tIZWFkaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXIgPiBkaXYgPiBoMicpXHJcbiAgICBoMi50ZXh0Q29udGVudCA9ICBgVGFza3M6ICR7Y3VycmVudEFjdGl2ZVByb2plY3R9YFxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSBwcm9qZWN0c1tjdXJyZW50QWN0aXZlUHJvamVjdF1cclxuICAgIGNvbnN0IHRhc2tJdGVtc1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staXRlbXMnKVxyXG4gICAgdGFza0l0ZW1zVWwudGV4dENvbnRlbnQgPSAnJ1xyXG4gICBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VG9kb3MubGVuZ3RoOyBpKyspIFxyXG4gICAge1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlcyBpbiBwcm9qZWN0VG9kb3NbaV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gcHJvamVjdFRvZG9zW2ldW3ZhbHVlc11cclxuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3BhbilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFza0l0ZW1zVWwuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHdvcmtpbmcgb24gdGhpcyBcclxuY29uc3QgZGlzcGxheVRhc2tGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKVxyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNyZWF0ZVRhc2tGb3JtKClcclxuICAgICAgICBoaWRlQWRkVGFza0J1dHRvbih0cnVlKVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgY3JlYXRlVGFza0Zvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICBmb3JtLmFjdGlvbiA9ICcjJ1xyXG4gICAgZm9ybS5pZCA9ICd0YXNrLWZvcm0nXHJcbiAgICBcclxuICAgIC8vIGNyZWF0ZXMgdGl0bGUgaW5wdXRcclxuICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGlucHV0MS50eXBlID0gJ3RleHQnXHJcbiAgICBpbnB1dDEubmFtZSA9ICd0aXRsZSdcclxuICAgIGlucHV0MS5wbGFjZWhvbGRlciA9ICdUaXRsZSdcclxuICAgIGlucHV0MS5hdXRvY29tcGxldGUgPSBcIm9mZlwiXHJcbiAgICBpbnB1dDEuaWQgPSAndGl0bGUnXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0MSlcclxuXHJcbiAgICAvLyBjcmVhdGVzIGRlc2NyaXB0aW9uIGlucHV0XHJcbiAgICBjb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBpbnB1dDIudHlwZSA9ICd0ZXh0J1xyXG4gICAgaW5wdXQyLm5hbWUgPSAnZGVzY3JpcHRpb24nXHJcbiAgICBpbnB1dDIucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nXHJcbiAgICBpbnB1dDIuYXV0b2NvbXBsZXRlID0gXCJvZmZcIlxyXG4gICAgaW5wdXQyLmlkID0gJ2Rlc2NyaXB0aW9uJ1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dDIpXHJcblxyXG4gICAgLy8gY3JlYXRlcyBkYXRlIGlucHV0XHJcbiAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBpbnB1dDMudHlwZSA9ICdkYXRlJ1xyXG4gICAgaW5wdXQzLm5hbWUgPSAnZGVhZGxpbmUnXHJcbiAgICBpbnB1dDMuaWQgPSAnZGVhZGxpbmUnXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0MylcclxuXHJcbiAgICAvLyBjcmVhdGVzIHNlbGVjdCBcclxuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXHJcbiAgICBzZWxlY3QubmFtZSA9ICdwcmlvcml0eSdcclxuICAgIHNlbGVjdC5pZCA9ICdwcmlvcml0eSdcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KVxyXG5cclxuICAgIC8vIGNyZWF0ZXMgZGlzYWJsZWQgb3B0aW9uXHJcbiAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgIG9wdGlvbjEuc2VsZWN0ZWQgPSB0cnVlXHJcbiAgICBvcHRpb24xLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdDaG9vc2UgcHJpb3JpdHknXHJcbiAgICBvcHRpb24xLmlkID0gJ2RlZmF1bHQnXHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uMSlcclxuXHJcbiAgICAvLyBjcmVhdGVzIGxvdyBvcHRpb25cclxuICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgb3B0aW9uMi52YWx1ZSA9ICdsb3cnXHJcbiAgICBvcHRpb24yLnRleHRDb250ZW50ID0gJ0xvdydcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24yKVxyXG5cclxuICAgIC8vIGNyZWF0ZXMgbWVkaXVtIG9wdGlvblxyXG4gICAgY29uc3Qgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICBvcHRpb24zLnZhbHVlID0gJ21lZGl1bSdcclxuICAgIG9wdGlvbjMudGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbjMpXHJcblxyXG4gICAgLy8gY3JlYXRlcyBtZWRpdW0gb3B0aW9uXHJcbiAgICBjb25zdCBvcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgIG9wdGlvbjQudmFsdWUgPSAnaGlnaCdcclxuICAgIG9wdGlvbjQudGV4dENvbnRlbnQgPSAnSGlnaCdcclxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb240KVxyXG5cclxuXHJcbiAgICAvLyBjcmVhdGVzIHN1Ym1pdCBidXR0b25cclxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnXHJcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIHRhc2snXHJcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblRhc2tGb3JtU3VibWl0KVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXHJcblxyXG4gICAgLy8gYXBwZW5kcyBmb3JtIHRvIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJylcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxyXG59XHJcblxyXG4vLyBjcmVhdGVzIHRvZG8gaXRlbVxyXG5jb25zdCBvblRhc2tGb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcclxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcclxuICAgIGxldCBkZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWFkbGluZScpXHJcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKVxyXG5cclxuICAgIGxldCBmb3JtRXJyb3JzID0gY2hlY2tGb3JtVmFsdWVzKHRpdGxlLCBkZXNjLCBkZWFkbGluZSwgcHJpb3JpdHkpXHJcbiAgICBpZiAoIWZvcm1FcnJvcnMpXHJcbiAgICB7XHJcbiAgICAgICAgY3JlYXRlVG9kb0l0ZW0odGl0bGUudmFsdWUsIGRlc2MudmFsdWUsIGRlYWRsaW5lLnZhbHVlLCBwcmlvcml0eS52YWx1ZSlcclxuICAgICAgICBkaXNwbGF5VGFza3MoKVxyXG4gICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgaGlkZUFkZFRhc2tCdXR0b24oZmFsc2UpXHJcbiAgICAgICAgaGlkZUFkZFRhc2tGb3JtKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNoZWNrcyBmb3JtIGZvciBhbnkgaW52YWxpZCBpbnB1dHNcclxuY29uc3QgY2hlY2tGb3JtVmFsdWVzID0gKHRpdGxlLCBkZXNjLCBkZWFkbGluZSwgcHJpb3JpdHkpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSBmYWxzZVxyXG5cclxuICAgIGlmICh0aXRsZS52YWx1ZSA9PSAnJykgXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxyXG4gICAgICAgIGVycm9ycyA9IHRydWVcclxuICAgIH0gXHJcbiAgICBcclxuICAgIGlmIChkZXNjLnZhbHVlID09ICcnKVxyXG4gICAge1xyXG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZXJyb3InKVxyXG4gICAgICAgIGVycm9ycyA9IHRydWVcclxuICAgIH0gXHJcbiAgICBcclxuICAgIGlmIChkZWFkbGluZS52YWx1ZSA9PSAnJylcclxuICAgIHtcclxuICAgICAgICBkZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXHJcbiAgICAgICAgZXJyb3JzID0gdHJ1ZVxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgaWYgKHByaW9yaXR5LnZhbHVlID09ICdDaG9vc2UgcHJpb3JpdHknKSBcclxuICAgIHtcclxuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXHJcbiAgICAgICAgZXJyb3JzID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcnNcclxufVxyXG5cclxuXHJcbi8vIHJlc2V0cyBmb3JtIHZhbHVlcyBhZnRlciBzdWJtaXRcclxuY29uc3QgcmVzZXRGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKVxyXG4gICAgZm9ybS5yZXNldCgpXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpXHJcbiAgICBwcmlvcml0eS5zZWxlY3RlZEluZGV4ID0gMFxyXG59XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKVxyXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3QtbmFtZS1pbnB1dCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHByb2plY3RJbnB1dHMubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdEZvcm0oKVxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVByb2plY3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFza0l0ZW1zVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pdGVtcycpXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgZm9ybS5pZCA9ICdwcm9qZWN0LW5hbWUtZm9ybSdcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgIGlucHV0Lm5hbWUgPSAncHJvamVjdCdcclxuICAgIGlucHV0LmlkID0gJ3Byb2plY3QtbmFtZS1pbnB1dCdcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcblxyXG4gICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgaW5wdXQyLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgaW5wdXQyLmhpZGRlbiA9IHRydWVcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQyKVxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgb25Qcm9qZWN0U3VibWl0KGUpXHJcbiAgICB9KVxyXG5cclxuICAgIHRhc2tJdGVtc1VJLmFwcGVuZENoaWxkKGZvcm0pXHJcbiAgICBpbnB1dC5mb2N1cygpXHJcblxyXG4gICAgLy8gcmVtb3ZlcyBpbnB1dCBpZiBub3QgY2xpY2tlZCBvbiBcclxuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lLWlucHV0JylcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFmb3JtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgZXZlbnQudGFyZ2V0ICE9PSBpbnB1dEZpZWxkKSB7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQucmVtb3ZlKClcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmUoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IG9uUHJvamVjdFN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGluZycpXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUtaW5wdXQnKVxyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgc3Bhbi5pZCA9ICdlcnJvci1tZXNzYWdlJ1xyXG4gICAgcHJvamVjdEhlYWRpbmcuYXBwZW5kQ2hpbGQoc3BhbilcclxuXHJcbiAgICBpZiAocHJvamVjdE5hbWUudmFsdWUgPT0gJycpXHJcbiAgICB7XHJcbiAgICAgICAgcHJvamVjdExvZ2dlcignRXJyb3IhIFByb2plY3QgbmFtZSBjYW5ub3QgYmUgZW1wdHknKVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lLnZhbHVlKVxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpXHJcbiAgICAgICAgZGlzcGxheVByb2plY3RzKClcclxuICAgIH1cclxufVxyXG5cclxuLy8gZGlzcGxheXMgZXJyb3IgbWVzc2FnZSBmb3IgbmV3IHByb2plY3RzIHRoYXQgYXJlIG1hZGVcclxuY29uc3QgcHJvamVjdExvZ2dlciA9ICh0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3ItbWVzc2FnZScpXHJcbiAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSB0ZXh0XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnJlbW92ZSgpXHJcbiAgICB9LCAzMDAwKVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5UmVtb3ZlUHJvamVjdEJ0bnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwbGF5ZWRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWl0ZW1zID4gbGknKVxyXG4gICAgZGlzcGxheWVkUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRleHRDb250ZW50KVxyXG4gICAgICAgIGlmIChwcm9qZWN0LnRleHRDb250ZW50ICE9ICdERUZBVUxUJyAmJiBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpID09PSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWRkUmVtb3ZlUHJvamVjdEJ0bihwcm9qZWN0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGFkZFJlbW92ZVByb2plY3RCdG4gPSAocHJvamVjdCkgPT4ge1xyXG4gICAgbGV0IGRlbGV0ZUJ0biA9IGNyZWF0ZVJlbW92ZVByb2plY3RCdG4oKVxyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVCdG4pXHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgY3JlYXRlUmVtb3ZlUHJvamVjdEJ0biA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUnXHJcbiAgICBkZWxldGVCdG4udHlwZSA9ICdidXR0b24nXHJcbiAgICByZXR1cm4gZGVsZXRlQnRuXHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgbGV0IHByb2plY3ROYW1lID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCdhJylcclxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUudGV4dENvbnRlbnQpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxuICAgIGRpc3BsYXlQcm9qZWN0cygpXHJcbiAgICBkaXNwbGF5VGFza3MoKVxyXG4gICAgdXBkYXRlVGFza0hlYWRpbmcoKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZGlzcGxheVByb2plY3RzLFxyXG4gICAgZGlzcGxheVRhc2tzLFxyXG4gICAgZGlzcGxheVRhc2tGb3JtLFxyXG4gICAgYWRkUHJvamVjdCxcclxuICAgIHByb2plY3RMb2dnZXIsXHJcbiAgICBkaXNwbGF5UmVtb3ZlUHJvamVjdEJ0bnNcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtLCBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0cywgc2V0UHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgcmVtb3ZlVG9kb0l0ZW0sIGVkaXREdWVEYXRlLCBlZGl0VGl0bGUsIGVkaXREZXNjcmlwdGlvbiwgZWRpdFByaW9yaXR5LCBlZGl0UHJvamVjdE5hbWUgfSBmcm9tIFwiLi9hcHBsaWNhdGlvbkxvZ2ljXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cywgZGlzcGxheVRhc2tzLCBkaXNwbGF5VGFza0Zvcm0sIGFkZFByb2plY3QsIGRpc3BsYXlSZW1vdmVQcm9qZWN0QnRucyB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5kaXNwbGF5UHJvamVjdHMoKVxyXG5kaXNwbGF5VGFza3MoKVxyXG5kaXNwbGF5VGFza0Zvcm0oKVxyXG5hZGRQcm9qZWN0KClcclxuLy8gZGlzcGxheVJlbW92ZVByb2plY3RCdG5zKClcclxuY29uc29sZS5sb2cocHJvamVjdHMpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9