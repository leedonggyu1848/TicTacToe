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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameManager_1 = __webpack_require__(/*! ./renderable/GameManager */ \"./renderable/GameManager.ts\");\r\nvar GameBoardLayout_1 = __webpack_require__(/*! ./renderable/layout/GameBoardLayout */ \"./renderable/layout/GameBoardLayout.ts\");\r\nvar GameInfoLayout_1 = __webpack_require__(/*! ./renderable/layout/GameInfoLayout */ \"./renderable/layout/GameInfoLayout.ts\");\r\nvar StoneManager_1 = __webpack_require__(/*! ./renderable/StoneManager */ \"./renderable/StoneManager.ts\");\r\nvar App = /** @class */ (function () {\r\n    function App($ref, height, width) {\r\n        var _this = this;\r\n        this.handleRequestFrame = null;\r\n        this.onMouseDown = function (e) {\r\n            e.preventDefault();\r\n            e.stopPropagation();\r\n            //왼쪽 클릭\r\n            if (e.button == 0) {\r\n                if (e.target !== _this.$canvas) {\r\n                    return;\r\n                }\r\n                _this.stoneManager.getMouseEvent(e);\r\n                _this.handleRequestFrame = window.requestAnimationFrame(_this.frameFunction);\r\n            }\r\n        };\r\n        this.onEnterFrame = function () {\r\n            _this.gameManager.update();\r\n            _this.stoneManager.update();\r\n            _this.gameManager.render(_this.context);\r\n            _this.stoneManager.render(_this.context);\r\n            if (_this.stoneManager.winJudgment != -1) {\r\n                console.log(_this.stoneManager.winJudgment);\r\n                _this.pause();\r\n            }\r\n        };\r\n        if (!width) {\r\n            width = height * 2;\r\n        }\r\n        this.$ref = $ref;\r\n        this.$canvas = document.createElement('canvas');\r\n        this.width = width;\r\n        this.height = height;\r\n        this.$canvas.width = width;\r\n        this.$canvas.height = height;\r\n        this.context = this.$canvas.getContext('2d');\r\n        this.$ref.appendChild(this.$canvas);\r\n        this.gameManager = new GameManager_1.default(width, height);\r\n        this.stoneManager = new StoneManager_1.default(this.gameManager.getGameStartPosition(), this.gameManager.getGameEndPosition());\r\n    }\r\n    App.prototype.play = function () {\r\n        window.addEventListener(\"mousedown\", this.onMouseDown);\r\n        this.gameManager.reset();\r\n        this.stoneManager.reset();\r\n        this.gameManager.addEntity(new GameBoardLayout_1.default(this.gameManager.getGameStartPosition(), this.gameManager.getGameEndPosition()));\r\n        this.gameManager.addEntity(new GameInfoLayout_1.default(this.gameManager.getInfoStartPosition(), this.gameManager.getInfoEndPosition()));\r\n        this.frameFunction = this.onEnterFrame;\r\n        this.handleRequestFrame = window.requestAnimationFrame(this.frameFunction);\r\n    };\r\n    App.prototype.pause = function () {\r\n        this.frameFunction = function () { };\r\n    };\r\n    return App;\r\n}());\r\nexports[\"default\"] = App;\r\n\n\n//# sourceURL=webpack:///./App.ts?");

/***/ }),

/***/ "./helper/DrawHelper.ts":
/*!******************************!*\
  !*** ./helper/DrawHelper.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ./Vector */ \"./helper/Vector.ts\");\r\nvar DrawHelper = /** @class */ (function () {\r\n    function DrawHelper() {\r\n        this.lineWidth = 5;\r\n        if (!DrawHelper.instance)\r\n            DrawHelper.instance = this;\r\n    }\r\n    DrawHelper.line = function (ctx, start, end) {\r\n        ctx.beginPath();\r\n        ctx.moveTo(start.x, start.y);\r\n        ctx.lineTo(end.x, end.y);\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        ctx.stroke();\r\n    };\r\n    DrawHelper.rect = function (ctx, start, end) {\r\n        ctx.beginPath();\r\n        ctx.rect(start.x, start.y, end.x - start.x, end.y - start.y);\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        ctx.stroke();\r\n    };\r\n    DrawHelper.circle = function (ctx, pos, radius) {\r\n        ctx.beginPath();\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);\r\n        ctx.stroke();\r\n    };\r\n    DrawHelper.cross = function (ctx, pos, radius) {\r\n        var basis = new Vector_1.default(radius * Math.cos(Math.PI / 4), radius * Math.sin(Math.PI / 4));\r\n        var dirs = [[1, 1], [-1, 1], [1, -1], [-1, -1]];\r\n        ctx.beginPath();\r\n        ctx.lineWidth = DrawHelper.instance.lineWidth;\r\n        for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {\r\n            var dir = dirs_1[_i];\r\n            ctx.moveTo(pos.x, pos.y);\r\n            ctx.lineTo(pos.x + (basis.x * dir[0]), pos.y + (basis.y * dir[1]));\r\n            ctx.stroke();\r\n        }\r\n    };\r\n    DrawHelper.instance = new DrawHelper();\r\n    return DrawHelper;\r\n}());\r\nexports[\"default\"] = DrawHelper;\r\n\n\n//# sourceURL=webpack:///./helper/DrawHelper.ts?");

/***/ }),

/***/ "./helper/Vector.ts":
/*!**************************!*\
  !*** ./helper/Vector.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//all methods are pure function\r\nvar Vector = /** @class */ (function () {\r\n    function Vector(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Vector.prototype.minus = function (v) {\r\n        return new Vector(this.x - v.x, this.y - v.y);\r\n    };\r\n    Vector.prototype.plus = function (v) {\r\n        return new Vector(this.x + v.x, this.y + v.y);\r\n    };\r\n    Vector.prototype.mul = function (n) {\r\n        return new Vector(this.x * n, this.y * n);\r\n    };\r\n    return Vector;\r\n}());\r\nexports[\"default\"] = Vector;\r\n\n\n//# sourceURL=webpack:///./helper/Vector.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar App_1 = __webpack_require__(/*! ./App */ \"./App.ts\");\r\nwindow.addEventListener('load', function () {\r\n    var game = new App_1.default(document.body, window.innerHeight / 2);\r\n    game.play();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./renderable/GameManager.ts":
/*!***********************************!*\
  !*** ./renderable/GameManager.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ../helper/Vector */ \"./helper/Vector.ts\");\r\nvar GameManager = /** @class */ (function () {\r\n    function GameManager(width, height) {\r\n        var _this = this;\r\n        this.offset = 10;\r\n        this.offsetVector = new Vector_1.default(this.offset, this.offset);\r\n        this.update = function () {\r\n            for (var i = 0; i < _this.entities.length; ++i) {\r\n                _this.entities[i].update();\r\n            }\r\n        };\r\n        this.render = function (context) {\r\n            context.beginPath();\r\n            context.fillStyle = 'rgba(255, 255, 255)';\r\n            context.fillRect(0, 0, context.canvas.width, context.canvas.height);\r\n            context.fill();\r\n            for (var i = 0; i < _this.entities.length; ++i) {\r\n                _this.entities[i].render(context);\r\n            }\r\n        };\r\n        this.entities = [];\r\n        this.gameStartPosition = new Vector_1.default(0, 0);\r\n        this.gameEndPosition = new Vector_1.default(height, height);\r\n        this.infoStartPosition = new Vector_1.default(height, 0);\r\n        this.infoEndPosition = new Vector_1.default(height + (width - height) / 2, height);\r\n        this.width = width;\r\n        this.height = height;\r\n    }\r\n    GameManager.prototype.setOffset = function (offset) {\r\n        this.offset = offset;\r\n        this.offsetVector = new Vector_1.default(this.offset, this.offset);\r\n    };\r\n    GameManager.prototype.getGameStartPosition = function () {\r\n        return this.gameStartPosition.plus(this.offsetVector);\r\n    };\r\n    GameManager.prototype.getGameEndPosition = function () {\r\n        return this.gameEndPosition.minus(this.offsetVector);\r\n    };\r\n    GameManager.prototype.getInfoStartPosition = function () {\r\n        return this.infoStartPosition.plus(this.offsetVector);\r\n    };\r\n    GameManager.prototype.getInfoEndPosition = function () {\r\n        return this.infoEndPosition.minus(this.offsetVector);\r\n    };\r\n    GameManager.prototype.addEntity = function (entity) {\r\n        this.entities.push(entity);\r\n    };\r\n    GameManager.prototype.removeEntity = function (entity) {\r\n        var entityIndex = this.entities.indexOf(entity);\r\n        if (entityIndex > -1) {\r\n            this.entities.splice(entityIndex, 1);\r\n        }\r\n    };\r\n    GameManager.prototype.reset = function () {\r\n        this.entities = [];\r\n    };\r\n    return GameManager;\r\n}());\r\nexports[\"default\"] = GameManager;\r\n\n\n//# sourceURL=webpack:///./renderable/GameManager.ts?");

/***/ }),

/***/ "./renderable/StoneManager.ts":
/*!************************************!*\
  !*** ./renderable/StoneManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ../helper/Vector */ \"./helper/Vector.ts\");\r\nvar Circle_1 = __webpack_require__(/*! ./shape/Circle */ \"./renderable/shape/Circle.ts\");\r\nvar CrossMark_1 = __webpack_require__(/*! ./shape/CrossMark */ \"./renderable/shape/CrossMark.ts\");\r\nvar StoneManager = /** @class */ (function () {\r\n    function StoneManager(start, end) {\r\n        var _this = this;\r\n        this.positiveType = Circle_1.default;\r\n        this.getMouseEvent = function (e) {\r\n            _this.nextPlacement = new Vector_1.default(e.clientX, e.clientY);\r\n        };\r\n        this.start = start;\r\n        this.end = end;\r\n        new Vector_1.default((this.end.x - this.start.x) / 3, (this.end.y - this.start.y) / 3);\r\n        this.blockSize = new Vector_1.default((end.x - start.x) / 3, (end.y - start.y) / 3);\r\n        this.reset();\r\n    }\r\n    StoneManager.prototype.updateWinJudgment = function () {\r\n        var positiveType = this.positiveType;\r\n        var t;\r\n        function isSameType() {\r\n            var elms = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                elms[_i] = arguments[_i];\r\n            }\r\n            if (elms.length == 0 || elms[0] == null) {\r\n                return -1;\r\n            }\r\n            var cur = elms[0] instanceof positiveType;\r\n            for (var i = 1; i < elms.length; ++i) {\r\n                if (!elms[i]) {\r\n                    return -1;\r\n                }\r\n                if (cur != (elms[i] instanceof positiveType)) {\r\n                    return -1;\r\n                }\r\n            }\r\n            return Number(cur);\r\n        }\r\n        for (var i = 0; i < 3; ++i) {\r\n            if ((t = isSameType(this.stones[i][0], this.stones[i][1], this.stones[i][2])) != -1 ||\r\n                (t = isSameType(this.stones[0][i], this.stones[1][i], this.stones[2][i])) != -1) {\r\n                this.winJudgment = t;\r\n                return;\r\n            }\r\n        }\r\n        if ((t = isSameType(this.stones[0][0], this.stones[1][1], this.stones[2][2])) != -1 ||\r\n            (t = isSameType(this.stones[0][2], this.stones[1][1], this.stones[2][0])) != -1) {\r\n            this.winJudgment = t;\r\n            return;\r\n        }\r\n        for (var i = 0; i < 3; ++i) {\r\n            for (var j = 0; j < 3; ++j) {\r\n                if (this.stones[i][j] === null) {\r\n                    return;\r\n                }\r\n            }\r\n        }\r\n        this.winJudgment = 2;\r\n    };\r\n    StoneManager.prototype.update = function () {\r\n        if (this.nextPlacement) {\r\n            var x = Math.floor(this.nextPlacement.x / this.blockSize.x);\r\n            var y = Math.floor(this.nextPlacement.y / this.blockSize.y);\r\n            if (x < 3 && y < 3 && this.stones[y][x] === null) {\r\n                this.addStone(x, y, this.currentTrun);\r\n                this.currentTrun = !this.currentTrun;\r\n                this.updateWinJudgment();\r\n            }\r\n        }\r\n        this.nextPlacement = null;\r\n    };\r\n    StoneManager.prototype.render = function (context) {\r\n        for (var i = 0; i < 3; ++i) {\r\n            for (var j = 0; j < 3; ++j) {\r\n                if (this.stones[i][j]) {\r\n                    this.stones[i][j].render(context);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    StoneManager.prototype.addStone = function (x, y, turn) {\r\n        var offset = new Vector_1.default(this.blockSize.x * x + this.blockSize.x / 2, this.blockSize.y * y + this.blockSize.y / 2);\r\n        if (turn) {\r\n            this.stones[y][x] = new Circle_1.default(this.start.plus(offset), Math.min(this.blockSize.x / 2, this.blockSize.y / 2) - 10);\r\n        }\r\n        else {\r\n            this.stones[y][x] = new CrossMark_1.default(this.start.plus(offset), Math.min(this.blockSize.x / 2, this.blockSize.y / 2) - 10);\r\n        }\r\n    };\r\n    StoneManager.prototype.reset = function () {\r\n        this.stones = new Array(3);\r\n        for (var i = 0; i < 3; ++i) {\r\n            this.stones[i] = new Array(3).fill(null);\r\n        }\r\n        this.currentTrun = false;\r\n        this.winJudgment = -1;\r\n    };\r\n    return StoneManager;\r\n}());\r\nexports[\"default\"] = StoneManager;\r\n\n\n//# sourceURL=webpack:///./renderable/StoneManager.ts?");

/***/ }),

/***/ "./renderable/layout/GameBoardLayout.ts":
/*!**********************************************!*\
  !*** ./renderable/layout/GameBoardLayout.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ../../helper/DrawHelper */ \"./helper/DrawHelper.ts\");\r\nvar Vector_1 = __webpack_require__(/*! ../../helper/Vector */ \"./helper/Vector.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./renderable/layout/Layout.ts\");\r\nvar Outline = /** @class */ (function (_super) {\r\n    __extends(Outline, _super);\r\n    function Outline(start, end) {\r\n        var _this = _super.call(this, start, end) || this;\r\n        _this.update = function () {\r\n        };\r\n        _this.render = function (context) {\r\n            DrawHelper_1.default.rect(context, _this.startPosition, _this.endPosition);\r\n            for (var i = 1; i < 3; ++i) {\r\n                DrawHelper_1.default.line(context, new Vector_1.default(_this.startPosition.x, _this.startPosition.y + i * (_this.height / 3)), new Vector_1.default(_this.endPosition.x, _this.startPosition.y + i * (_this.height / 3)));\r\n                DrawHelper_1.default.line(context, new Vector_1.default(_this.startPosition.x + i * (_this.width / 3), _this.startPosition.y), new Vector_1.default(_this.startPosition.x + i * (_this.width / 3), _this.endPosition.y));\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    return Outline;\r\n}(Layout_1.default));\r\nexports[\"default\"] = Outline;\r\n\n\n//# sourceURL=webpack:///./renderable/layout/GameBoardLayout.ts?");

/***/ }),

/***/ "./renderable/layout/GameInfoLayout.ts":
/*!*********************************************!*\
  !*** ./renderable/layout/GameInfoLayout.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ../../helper/DrawHelper */ \"./helper/DrawHelper.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./renderable/layout/Layout.ts\");\r\nvar GameInfo = /** @class */ (function (_super) {\r\n    __extends(GameInfo, _super);\r\n    function GameInfo(start, end) {\r\n        return _super.call(this, start, end) || this;\r\n    }\r\n    GameInfo.prototype.update = function () {\r\n    };\r\n    GameInfo.prototype.render = function (context) {\r\n        DrawHelper_1.default.rect(context, this.startPosition, this.endPosition);\r\n    };\r\n    return GameInfo;\r\n}(Layout_1.default));\r\nexports[\"default\"] = GameInfo;\r\n\n\n//# sourceURL=webpack:///./renderable/layout/GameInfoLayout.ts?");

/***/ }),

/***/ "./renderable/layout/Layout.ts":
/*!*************************************!*\
  !*** ./renderable/layout/Layout.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Layout = /** @class */ (function () {\r\n    function Layout(start, end) {\r\n        this.startPosition = start;\r\n        this.endPosition = end;\r\n        this.height = end.y - start.y;\r\n        this.width = end.x - start.x;\r\n    }\r\n    Layout.prototype.update = function () {\r\n    };\r\n    Layout.prototype.render = function (context) {\r\n    };\r\n    return Layout;\r\n}());\r\nexports[\"default\"] = Layout;\r\n\n\n//# sourceURL=webpack:///./renderable/layout/Layout.ts?");

/***/ }),

/***/ "./renderable/shape/Circle.ts":
/*!************************************!*\
  !*** ./renderable/shape/Circle.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ../../helper/DrawHelper */ \"./helper/DrawHelper.ts\");\r\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./renderable/shape/Shape.ts\");\r\nvar Circle = /** @class */ (function (_super) {\r\n    __extends(Circle, _super);\r\n    function Circle(pos, radius) {\r\n        var _this = _super.call(this, pos) || this;\r\n        _this.radius = radius || 100;\r\n        return _this;\r\n    }\r\n    Circle.prototype.update = function () {\r\n    };\r\n    Circle.prototype.render = function (context) {\r\n        DrawHelper_1.default.circle(context, this.pos, this.radius);\r\n    };\r\n    return Circle;\r\n}(Shape_1.default));\r\nexports[\"default\"] = Circle;\r\n\n\n//# sourceURL=webpack:///./renderable/shape/Circle.ts?");

/***/ }),

/***/ "./renderable/shape/CrossMark.ts":
/*!***************************************!*\
  !*** ./renderable/shape/CrossMark.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ../../helper/DrawHelper */ \"./helper/DrawHelper.ts\");\r\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./renderable/shape/Shape.ts\");\r\nvar CrossMark = /** @class */ (function (_super) {\r\n    __extends(CrossMark, _super);\r\n    function CrossMark(pos, radius) {\r\n        var _this = _super.call(this, pos) || this;\r\n        _this.radius = radius || 100;\r\n        return _this;\r\n    }\r\n    CrossMark.prototype.update = function () {\r\n    };\r\n    CrossMark.prototype.render = function (context) {\r\n        DrawHelper_1.default.cross(context, this.pos, this.radius);\r\n    };\r\n    return CrossMark;\r\n}(Shape_1.default));\r\nexports[\"default\"] = CrossMark;\r\n\n\n//# sourceURL=webpack:///./renderable/shape/CrossMark.ts?");

/***/ }),

/***/ "./renderable/shape/Shape.ts":
/*!***********************************!*\
  !*** ./renderable/shape/Shape.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Shape = /** @class */ (function () {\r\n    function Shape(pos) {\r\n        this.pos = pos;\r\n    }\r\n    Shape.prototype.update = function () {\r\n    };\r\n    Shape.prototype.render = function (context) {\r\n    };\r\n    return Shape;\r\n}());\r\nexports[\"default\"] = Shape;\r\n\n\n//# sourceURL=webpack:///./renderable/shape/Shape.ts?");

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