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

/***/ "./App.ts":
/*!****************!*\
  !*** ./App.ts ***!
  \****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameManager_1 = __webpack_require__(/*! ./GameManager */ \"./GameManager.ts\");\r\nvar App = /** @class */ (function () {\r\n    function App($ref, height, width) {\r\n        var _this = this;\r\n        this.handleRequestFrame = null;\r\n        this.onEnterFrame = function () {\r\n            _this.gameManager.update();\r\n            _this.gameManager.render(_this.context);\r\n        };\r\n        if (!width) {\r\n            width = height;\r\n        }\r\n        this.$ref = $ref;\r\n        this.$canvas = document.createElement('canvas');\r\n        this.width = width;\r\n        this.height = height;\r\n        this.$canvas.width = width;\r\n        this.$canvas.height = height;\r\n        this.context = this.$canvas.getContext('2d');\r\n        this.$ref.appendChild(this.$canvas);\r\n        this.gameManager = new GameManager_1.default(width, height);\r\n    }\r\n    App.prototype.play = function () {\r\n        this.handleRequestFrame = window.requestAnimationFrame(this.onEnterFrame);\r\n    };\r\n    return App;\r\n}());\r\nexports[\"default\"] = App;\r\n\n\n//# sourceURL=webpack:///./App.ts?");

/***/ }),

/***/ "./DrawHelper.ts":
/*!***********************!*\
  !*** ./DrawHelper.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper = /** @class */ (function () {\r\n    function DrawHelper() {\r\n        this.lineWidth = 5;\r\n        if (!DrawHelper.instance)\r\n            DrawHelper.instance = this;\r\n    }\r\n    DrawHelper.line = function (ctx, start, end) {\r\n        console.log(start, end);\r\n        ctx.beginPath();\r\n        ctx.moveTo(start.x, start.y);\r\n        ctx.lineTo(end.x, end.y);\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        ctx.stroke();\r\n    };\r\n    DrawHelper.rect = function (ctx, start, end) {\r\n        console.log(start, end);\r\n        ctx.rect(start.x, start.y, end.x - start.x, end.y - start.y);\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        ctx.stroke();\r\n    };\r\n    DrawHelper.instance = new DrawHelper();\r\n    return DrawHelper;\r\n}());\r\nexports[\"default\"] = DrawHelper;\r\n\n\n//# sourceURL=webpack:///./DrawHelper.ts?");

/***/ }),

/***/ "./GameManager.ts":
/*!************************!*\
  !*** ./GameManager.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ./Vector */ \"./Vector.ts\");\r\nvar Outline_1 = __webpack_require__(/*! ./Outline */ \"./Outline.ts\");\r\nvar GameManager = /** @class */ (function () {\r\n    function GameManager(width, height) {\r\n        var _this = this;\r\n        this.offset = 10;\r\n        this.update = function () {\r\n            for (var i = 0; i < _this.entities.length; ++i) {\r\n                _this.entities[i].update();\r\n            }\r\n        };\r\n        this.render = function (context) {\r\n            for (var i = 0; i < _this.entities.length; ++i) {\r\n                _this.entities[i].render(context);\r\n            }\r\n        };\r\n        this.entities = [];\r\n        this.start = new Vector_1.default(0, 0);\r\n        this.end = new Vector_1.default(width, height);\r\n        this.entities.push(new Outline_1.default(this.getStart(), this.getEnd()));\r\n    }\r\n    GameManager.prototype.setOffset = function (offset) {\r\n        this.offset = offset;\r\n    };\r\n    GameManager.prototype.getStart = function () {\r\n        return this.start.plus(new Vector_1.default(this.offset, this.offset));\r\n    };\r\n    GameManager.prototype.getEnd = function () {\r\n        return this.end.minus(new Vector_1.default(this.offset, this.offset));\r\n    };\r\n    GameManager.prototype.addEntity = function (entity) {\r\n        this.entities.push(entity);\r\n    };\r\n    GameManager.prototype.removeEntity = function (entity) {\r\n        var entityIndex = this.entities.indexOf(entity);\r\n        if (entityIndex > -1) {\r\n            this.entities.splice(entityIndex, 1);\r\n        }\r\n    };\r\n    return GameManager;\r\n}());\r\nexports[\"default\"] = GameManager;\r\n\n\n//# sourceURL=webpack:///./GameManager.ts?");

/***/ }),

/***/ "./Outline.ts":
/*!********************!*\
  !*** ./Outline.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ./DrawHelper */ \"./DrawHelper.ts\");\r\nvar Vector_1 = __webpack_require__(/*! ./Vector */ \"./Vector.ts\");\r\nvar Outline = /** @class */ (function () {\r\n    function Outline(start, end) {\r\n        var _this = this;\r\n        this.update = function () {\r\n        };\r\n        this.render = function (context) {\r\n            DrawHelper_1.default.rect(context, _this.start, _this.end);\r\n            for (var i = 1; i < 3; ++i) {\r\n                DrawHelper_1.default.line(context, new Vector_1.default(_this.start.x, _this.start.y + i * (_this.height / 3)), new Vector_1.default(_this.end.x, _this.start.y + i * (_this.height / 3)));\r\n                DrawHelper_1.default.line(context, new Vector_1.default(_this.start.x + i * (_this.width / 3), _this.start.y), new Vector_1.default(_this.start.x + i * (_this.width / 3), _this.end.y));\r\n            }\r\n        };\r\n        this.start = start;\r\n        this.end = end;\r\n        this.height = end.y - start.y;\r\n        this.width = end.x - start.x;\r\n    }\r\n    return Outline;\r\n}());\r\nexports[\"default\"] = Outline;\r\n\n\n//# sourceURL=webpack:///./Outline.ts?");

/***/ }),

/***/ "./Vector.ts":
/*!*******************!*\
  !*** ./Vector.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector = /** @class */ (function () {\r\n    function Vector(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Vector.prototype.setX = function (x) {\r\n        this.x = x;\r\n        return this;\r\n    };\r\n    Vector.prototype.setY = function (y) {\r\n        this.y = y;\r\n        return this;\r\n    };\r\n    Vector.prototype.minus = function (v) {\r\n        return new Vector(this.x - v.x, this.y - v.y);\r\n    };\r\n    Vector.prototype.plus = function (v) {\r\n        return new Vector(this.x + v.x, this.y + v.y);\r\n    };\r\n    return Vector;\r\n}());\r\nexports[\"default\"] = Vector;\r\n\n\n//# sourceURL=webpack:///./Vector.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar App_1 = __webpack_require__(/*! ./App */ \"./App.ts\");\r\nwindow.addEventListener('load', function () {\r\n    var game = new App_1.default(document.body, window.innerHeight / 2);\r\n    game.play();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;