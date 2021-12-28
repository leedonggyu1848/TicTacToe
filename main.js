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

/***/ "./Circle.ts":
/*!*******************!*\
  !*** ./Circle.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ./DrawHelper */ \"./DrawHelper.ts\");\r\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./Shape.ts\");\r\nvar Circle = /** @class */ (function (_super) {\r\n    __extends(Circle, _super);\r\n    function Circle(pos, radius) {\r\n        var _this = _super.call(this, pos) || this;\r\n        _this.radius = radius || 100;\r\n        return _this;\r\n    }\r\n    Circle.prototype.update = function () {\r\n    };\r\n    Circle.prototype.render = function (context) {\r\n        DrawHelper_1.default.circle(context, this.pos, this.radius);\r\n    };\r\n    return Circle;\r\n}(Shape_1.default));\r\nexports[\"default\"] = Circle;\r\n\n\n//# sourceURL=webpack:///./Circle.ts?");

/***/ }),

/***/ "./CrossMark.ts":
/*!**********************!*\
  !*** ./CrossMark.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ./DrawHelper */ \"./DrawHelper.ts\");\r\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./Shape.ts\");\r\nvar CrossMark = /** @class */ (function (_super) {\r\n    __extends(CrossMark, _super);\r\n    function CrossMark(pos, radius) {\r\n        var _this = _super.call(this, pos) || this;\r\n        _this.radius = radius || 100;\r\n        return _this;\r\n    }\r\n    CrossMark.prototype.update = function () {\r\n    };\r\n    CrossMark.prototype.render = function (context) {\r\n        DrawHelper_1.default.cross(context, this.pos, this.radius);\r\n    };\r\n    return CrossMark;\r\n}(Shape_1.default));\r\nexports[\"default\"] = CrossMark;\r\n\n\n//# sourceURL=webpack:///./CrossMark.ts?");

/***/ }),

/***/ "./DrawHelper.ts":
/*!***********************!*\
  !*** ./DrawHelper.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ./Vector */ \"./Vector.ts\");\r\nvar DrawHelper = /** @class */ (function () {\r\n    function DrawHelper() {\r\n        this.lineWidth = 5;\r\n        if (!DrawHelper.instance)\r\n            DrawHelper.instance = this;\r\n    }\r\n    DrawHelper.line = function (ctx, start, end) {\r\n        ctx.beginPath();\r\n        ctx.moveTo(start.x, start.y);\r\n        ctx.lineTo(end.x, end.y);\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        ctx.stroke();\r\n    };\r\n    DrawHelper.rect = function (ctx, start, end) {\r\n        ctx.beginPath();\r\n        ctx.rect(start.x, start.y, end.x - start.x, end.y - start.y);\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        ctx.stroke();\r\n    };\r\n    DrawHelper.circle = function (ctx, pos, radius) {\r\n        ctx.beginPath();\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);\r\n        ctx.stroke();\r\n    };\r\n    DrawHelper.cross = function (ctx, pos, radius) {\r\n        var basis = new Vector_1.default(radius * Math.cos(Math.PI / 4), radius * Math.sin(Math.PI / 4));\r\n        var dirs = [[1, 1], [-1, 1], [1, -1], [-1, -1]];\r\n        ctx.beginPath();\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {\r\n            var dir = dirs_1[_i];\r\n            ctx.moveTo(pos.x, pos.y);\r\n            ctx.lineTo(pos.x + (basis.x * dir[0]), pos.y + (basis.y * dir[1]));\r\n            ctx.stroke();\r\n        }\r\n    };\r\n    DrawHelper.instance = new DrawHelper();\r\n    return DrawHelper;\r\n}());\r\nexports[\"default\"] = DrawHelper;\r\n\n\n//# sourceURL=webpack:///./DrawHelper.ts?");

/***/ }),

/***/ "./GameManager.ts":
/*!************************!*\
  !*** ./GameManager.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ./Vector */ \"./Vector.ts\");\r\nvar Outline_1 = __webpack_require__(/*! ./Outline */ \"./Outline.ts\");\r\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./Circle.ts\");\r\nvar CrossMark_1 = __webpack_require__(/*! ./CrossMark */ \"./CrossMark.ts\");\r\nvar GameManager = /** @class */ (function () {\r\n    function GameManager(width, height) {\r\n        var _this = this;\r\n        this.offset = 10;\r\n        this.update = function () {\r\n            for (var i = 0; i < _this.entities.length; ++i) {\r\n                _this.entities[i].update();\r\n            }\r\n        };\r\n        this.render = function (context) {\r\n            for (var i = 0; i < _this.entities.length; ++i) {\r\n                _this.entities[i].render(context);\r\n            }\r\n        };\r\n        this.entities = [];\r\n        this.start = new Vector_1.default(0, 0);\r\n        this.end = new Vector_1.default(width, height);\r\n        this.entities.push(new Outline_1.default(this.getStart(), this.getEnd()));\r\n        this.width = width;\r\n        this.height = height;\r\n        //test\r\n        var blockSize = this.getBlockSize();\r\n        var basis = new Vector_1.default(blockSize.x / 2, blockSize.y / 2);\r\n        this.entities.push(new Circle_1.default(this.getStart().plus(basis), Math.min(blockSize.x / 2, blockSize.y / 2) - 10));\r\n        this.entities.push(new CrossMark_1.default(this.getStart().plus(basis), Math.min(blockSize.x / 2, blockSize.y / 2) - 10));\r\n    }\r\n    GameManager.prototype.setOffset = function (offset) {\r\n        this.offset = offset;\r\n    };\r\n    GameManager.prototype.getStart = function () {\r\n        return this.start.plus(new Vector_1.default(this.offset, this.offset));\r\n    };\r\n    GameManager.prototype.getEnd = function () {\r\n        return this.end.minus(new Vector_1.default(this.offset, this.offset));\r\n    };\r\n    GameManager.prototype.getWidth = function () {\r\n        return this.width - this.offset * 2;\r\n    };\r\n    GameManager.prototype.getHeight = function () {\r\n        return this.height - this.offset * 2;\r\n    };\r\n    GameManager.prototype.getBlockSize = function () {\r\n        return new Vector_1.default(this.getWidth() / 3, this.getHeight() / 3);\r\n    };\r\n    GameManager.prototype.addEntity = function (entity) {\r\n        this.entities.push(entity);\r\n    };\r\n    GameManager.prototype.removeEntity = function (entity) {\r\n        var entityIndex = this.entities.indexOf(entity);\r\n        if (entityIndex > -1) {\r\n            this.entities.splice(entityIndex, 1);\r\n        }\r\n    };\r\n    return GameManager;\r\n}());\r\nexports[\"default\"] = GameManager;\r\n\n\n//# sourceURL=webpack:///./GameManager.ts?");

/***/ }),

/***/ "./Outline.ts":
/*!********************!*\
  !*** ./Outline.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ./DrawHelper */ \"./DrawHelper.ts\");\r\nvar Vector_1 = __webpack_require__(/*! ./Vector */ \"./Vector.ts\");\r\nvar Outline = /** @class */ (function () {\r\n    function Outline(start, end) {\r\n        var _this = this;\r\n        this.update = function () {\r\n        };\r\n        this.render = function (context) {\r\n            DrawHelper_1.default.rect(context, _this.start, _this.end);\r\n            for (var i = 1; i < 3; ++i) {\r\n                DrawHelper_1.default.line(context, new Vector_1.default(_this.start.x, _this.start.y + i * (_this.height / 3)), new Vector_1.default(_this.end.x, _this.start.y + i * (_this.height / 3)));\r\n                DrawHelper_1.default.line(context, new Vector_1.default(_this.start.x + i * (_this.width / 3), _this.start.y), new Vector_1.default(_this.start.x + i * (_this.width / 3), _this.end.y));\r\n            }\r\n        };\r\n        this.start = start;\r\n        this.end = end;\r\n        this.height = end.y - start.y;\r\n        this.width = end.x - start.x;\r\n    }\r\n    return Outline;\r\n}());\r\nexports[\"default\"] = Outline;\r\n\n\n//# sourceURL=webpack:///./Outline.ts?");

/***/ }),

/***/ "./Shape.ts":
/*!******************!*\
  !*** ./Shape.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Shape = /** @class */ (function () {\r\n    function Shape(pos) {\r\n        this.pos = pos;\r\n    }\r\n    Shape.prototype.update = function () {\r\n    };\r\n    Shape.prototype.render = function (context) {\r\n    };\r\n    return Shape;\r\n}());\r\nexports[\"default\"] = Shape;\r\n\n\n//# sourceURL=webpack:///./Shape.ts?");

/***/ }),

/***/ "./Vector.ts":
/*!*******************!*\
  !*** ./Vector.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//all methods are pure function\r\nvar Vector = /** @class */ (function () {\r\n    function Vector(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Vector.prototype.minus = function (v) {\r\n        return new Vector(this.x - v.x, this.y - v.y);\r\n    };\r\n    Vector.prototype.plus = function (v) {\r\n        return new Vector(this.x + v.x, this.y + v.y);\r\n    };\r\n    Vector.prototype.mul = function (n) {\r\n        return new Vector(this.x * n, this.y * n);\r\n    };\r\n    return Vector;\r\n}());\r\nexports[\"default\"] = Vector;\r\n\n\n//# sourceURL=webpack:///./Vector.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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