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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameManager_1 = __webpack_require__(/*! ./renderable/GameManager */ \"./renderable/GameManager.ts\");\r\nvar App = /** @class */ (function () {\r\n    function App($ref, height, width) {\r\n        var _this = this;\r\n        this.handleRequestFrame = null;\r\n        this.onMouseDown = function (e) {\r\n            e.preventDefault();\r\n            e.stopPropagation();\r\n            //왼쪽 클릭\r\n            if (e.button == 0) {\r\n                if (e.target !== _this.$canvas) {\r\n                    return;\r\n                }\r\n                _this.gameManager.getMouseEvent(e);\r\n                _this.handleRequestFrame = window.requestAnimationFrame(_this.frameFunction);\r\n            }\r\n        };\r\n        this.onEnterFrame = function () {\r\n            _this.gameManager.update();\r\n            _this.gameManager.render(_this.context);\r\n        };\r\n        if (!width) {\r\n            width = height * 2;\r\n        }\r\n        this.$ref = $ref;\r\n        this.$canvas = document.createElement('canvas');\r\n        this.width = width;\r\n        this.height = height;\r\n        this.$canvas.width = width;\r\n        this.$canvas.height = height;\r\n        this.context = this.$canvas.getContext('2d');\r\n        this.$ref.appendChild(this.$canvas);\r\n        this.gameManager = new GameManager_1.default(width, height);\r\n    }\r\n    App.prototype.play = function () {\r\n        window.addEventListener(\"mousedown\", this.onMouseDown);\r\n        this.gameManager.reset();\r\n        this.frameFunction = this.onEnterFrame;\r\n        this.handleRequestFrame = window.requestAnimationFrame(this.frameFunction);\r\n    };\r\n    App.prototype.pause = function () {\r\n        this.frameFunction = function () { };\r\n    };\r\n    return App;\r\n}());\r\nexports[\"default\"] = App;\r\n\n\n//# sourceURL=webpack:///./App.ts?");

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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//all methods are pure function\r\nvar Vector = /** @class */ (function () {\r\n    function Vector(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    Vector.minus = function (v1, v2) {\r\n        return new Vector(v1.x - v2.x, v1.y - v2.y);\r\n    };\r\n    Vector.plus = function (v1, v2) {\r\n        return new Vector(v1.x + v2.x, v1.y + v2.y);\r\n    };\r\n    Vector.prototype.minus = function (v) {\r\n        return new Vector(this.x - v.x, this.y - v.y);\r\n    };\r\n    Vector.prototype.plus = function (v) {\r\n        return new Vector(this.x + v.x, this.y + v.y);\r\n    };\r\n    Vector.prototype.mul = function (n) {\r\n        return new Vector(this.x * n, this.y * n);\r\n    };\r\n    Vector.prototype.div = function (n) {\r\n        return new Vector(this.x / n, this.y / n);\r\n    };\r\n    return Vector;\r\n}());\r\nexports[\"default\"] = Vector;\r\n\n\n//# sourceURL=webpack:///./helper/Vector.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar App_1 = __webpack_require__(/*! ./App */ \"./App.ts\");\r\nwindow.addEventListener('load', function () {\r\n    var game = new App_1.default(document.body, window.innerHeight / 2);\r\n    game.play();\r\n});\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./renderable/Entity/Entity.ts":
/*!*************************************!*\
  !*** ./renderable/Entity/Entity.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Entity = /** @class */ (function () {\r\n    function Entity(renderingInfo) {\r\n        this.renderingInfo = renderingInfo;\r\n    }\r\n    return Entity;\r\n}());\r\nexports[\"default\"] = Entity;\r\n\n\n//# sourceURL=webpack:///./renderable/Entity/Entity.ts?");

/***/ }),

/***/ "./renderable/Entity/RenderingInfo.ts":
/*!********************************************!*\
  !*** ./renderable/Entity/RenderingInfo.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar RenderingInfo = /** @class */ (function () {\r\n    function RenderingInfo(start, end) {\r\n        this.start = start;\r\n        this.end = end;\r\n    }\r\n    RenderingInfo.prototype.getHeight = function () {\r\n        return this.end.y - this.start.y;\r\n    };\r\n    RenderingInfo.prototype.getWidth = function () {\r\n        return this.end.x - this.start.x;\r\n    };\r\n    return RenderingInfo;\r\n}());\r\nexports[\"default\"] = RenderingInfo;\r\n\n\n//# sourceURL=webpack:///./renderable/Entity/RenderingInfo.ts?");

/***/ }),

/***/ "./renderable/Entity/ScoreEntity.ts":
/*!******************************************!*\
  !*** ./renderable/Entity/ScoreEntity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Entity_1 = __webpack_require__(/*! ./Entity */ \"./renderable/Entity/Entity.ts\");\r\nvar ScoreEntity = /** @class */ (function (_super) {\r\n    __extends(ScoreEntity, _super);\r\n    function ScoreEntity() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ScoreEntity.prototype.update = function () {\r\n    };\r\n    ScoreEntity.prototype.render = function (context) {\r\n    };\r\n    ScoreEntity.prototype.reset = function () {\r\n    };\r\n    return ScoreEntity;\r\n}(Entity_1.default));\r\nexports[\"default\"] = ScoreEntity;\r\n\n\n//# sourceURL=webpack:///./renderable/Entity/ScoreEntity.ts?");

/***/ }),

/***/ "./renderable/Entity/StoneEntity.ts":
/*!******************************************!*\
  !*** ./renderable/Entity/StoneEntity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ../../helper/Vector */ \"./helper/Vector.ts\");\r\nvar Entity_1 = __webpack_require__(/*! ./Entity */ \"./renderable/Entity/Entity.ts\");\r\nvar Circle_1 = __webpack_require__(/*! ../shape/Circle */ \"./renderable/shape/Circle.ts\");\r\nvar CrossMark_1 = __webpack_require__(/*! ../shape/CrossMark */ \"./renderable/shape/CrossMark.ts\");\r\nvar StoneEntity = /** @class */ (function (_super) {\r\n    __extends(StoneEntity, _super);\r\n    function StoneEntity(renderingInfo) {\r\n        var _this = _super.call(this, renderingInfo) || this;\r\n        _this.positiveType = Circle_1.default;\r\n        _this.negativeType = CrossMark_1.default;\r\n        _this.blockSize = Vector_1.default.minus(_this.renderingInfo.end, _this.renderingInfo.start).div(3);\r\n        _this.reset();\r\n        return _this;\r\n    }\r\n    StoneEntity.prototype.update = function () {\r\n        if (this.currentPlacement !== null) {\r\n            if (this.currentPlacement.x < 3 &&\r\n                this.currentPlacement.y < 3 &&\r\n                this.stones[this.currentPlacement.y][this.currentPlacement.x] === null) {\r\n                this.placeStone(new Vector_1.default(this.currentPlacement.x, this.currentPlacement.y), this.currentTurn);\r\n                this.currentTurn = !this.currentTurn;\r\n            }\r\n        }\r\n        this.currentPlacement = null;\r\n    };\r\n    StoneEntity.prototype.render = function (context) {\r\n        for (var i = 0; i < 3; ++i) {\r\n            for (var j = 0; j < 3; ++j) {\r\n                if (this.stones[i][j]) {\r\n                    this.stones[i][j].render(context);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    StoneEntity.prototype.placeStone = function (pos, turn) {\r\n        var offset = new Vector_1.default(this.blockSize.x * pos.x, this.blockSize.y * pos.y);\r\n        var start = Vector_1.default.plus(this.renderingInfo.start, offset);\r\n        var end = Vector_1.default.plus(start, this.blockSize);\r\n        this.stones[pos.y][pos.x] = (turn ?\r\n            new this.positiveType(start, end) :\r\n            new this.negativeType(start, end));\r\n    };\r\n    StoneEntity.prototype.getMousePosition = function (pos) {\r\n        var x = Math.floor(pos.x / this.blockSize.x);\r\n        var y = Math.floor(pos.y / this.blockSize.y);\r\n        this.currentPlacement = new Vector_1.default(x, y);\r\n    };\r\n    StoneEntity.prototype.reset = function () {\r\n        this.currentPlacement = null;\r\n        this.currentTurn = false;\r\n        this.stones = new Array(3);\r\n        for (var i = 0; i < 3; ++i) {\r\n            this.stones[i] = new Array(3).fill(null);\r\n        }\r\n    };\r\n    return StoneEntity;\r\n}(Entity_1.default));\r\nexports[\"default\"] = StoneEntity;\r\n\n\n//# sourceURL=webpack:///./renderable/Entity/StoneEntity.ts?");

/***/ }),

/***/ "./renderable/GameComponent.ts":
/*!*************************************!*\
  !*** ./renderable/GameComponent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameComponent = /** @class */ (function () {\r\n    function GameComponent(renderingInfo, layout, entity) {\r\n        this.renderingInfo = renderingInfo;\r\n        this.layout = layout;\r\n        this.entity = entity;\r\n    }\r\n    GameComponent.prototype.render = function (context) {\r\n        this.layout.render(context);\r\n        this.entity.render(context);\r\n    };\r\n    GameComponent.prototype.update = function () {\r\n        this.layout.update();\r\n        this.entity.update();\r\n    };\r\n    GameComponent.prototype.reset = function () {\r\n        this.entity.reset();\r\n    };\r\n    ;\r\n    return GameComponent;\r\n}());\r\nexports[\"default\"] = GameComponent;\r\n\n\n//# sourceURL=webpack:///./renderable/GameComponent.ts?");

/***/ }),

/***/ "./renderable/GameManager.ts":
/*!***********************************!*\
  !*** ./renderable/GameManager.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ../helper/Vector */ \"./helper/Vector.ts\");\r\nvar StoneComponent_1 = __webpack_require__(/*! ./StoneComponent */ \"./renderable/StoneComponent.ts\");\r\nvar RenderingInfo_1 = __webpack_require__(/*! ./Entity/RenderingInfo */ \"./renderable/Entity/RenderingInfo.ts\");\r\nvar ScoreComponent_1 = __webpack_require__(/*! ./ScoreComponent */ \"./renderable/ScoreComponent.ts\");\r\nvar GameManager = /** @class */ (function () {\r\n    function GameManager(width, height, offset) {\r\n        var _this = this;\r\n        this.getMouseEvent = function (e) {\r\n            _this.stoneComponent.getMouseEvent(e);\r\n        };\r\n        this.update = function () {\r\n            _this.stoneComponent.update();\r\n            _this.scoreComponent.update();\r\n        };\r\n        this.render = function (context) {\r\n            context.beginPath();\r\n            context.fillStyle = 'rgba(255, 255, 255)';\r\n            context.fillRect(0, 0, context.canvas.width, context.canvas.height);\r\n            context.fill();\r\n            _this.stoneComponent.render(context);\r\n            _this.scoreComponent.render(context);\r\n        };\r\n        this.reset = function () {\r\n            _this.stoneComponent.reset();\r\n            _this.scoreComponent.reset();\r\n        };\r\n        this.offset = offset || 10;\r\n        this.offsetVector = new Vector_1.default(this.offset, this.offset);\r\n        this.gameRenderingInfo = new RenderingInfo_1.default(new Vector_1.default(0, 0), new Vector_1.default(height, height));\r\n        this.scoreRenderingInfo = new RenderingInfo_1.default(new Vector_1.default(height, 0), new Vector_1.default(height + (width - height) / 2, height));\r\n        this.width = width;\r\n        this.height = height;\r\n        this.stoneComponent = new StoneComponent_1.default(this.applyOffsetTo(this.gameRenderingInfo));\r\n        this.scoreComponent = new ScoreComponent_1.default(this.applyOffsetTo(this.scoreRenderingInfo));\r\n    }\r\n    GameManager.prototype.applyOffsetTo = function (info) {\r\n        return new RenderingInfo_1.default(info.start.plus(this.offsetVector), info.end.minus(this.offsetVector));\r\n    };\r\n    return GameManager;\r\n}());\r\nexports[\"default\"] = GameManager;\r\n\n\n//# sourceURL=webpack:///./renderable/GameManager.ts?");

/***/ }),

/***/ "./renderable/ScoreComponent.ts":
/*!**************************************!*\
  !*** ./renderable/ScoreComponent.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameComponent_1 = __webpack_require__(/*! ./GameComponent */ \"./renderable/GameComponent.ts\");\r\nvar GameScoreLayout_1 = __webpack_require__(/*! ./layout/GameScoreLayout */ \"./renderable/layout/GameScoreLayout.ts\");\r\nvar ScoreEntity_1 = __webpack_require__(/*! ./Entity/ScoreEntity */ \"./renderable/Entity/ScoreEntity.ts\");\r\nvar ScoreComponent = /** @class */ (function (_super) {\r\n    __extends(ScoreComponent, _super);\r\n    function ScoreComponent(renderingInfo) {\r\n        return _super.call(this, renderingInfo, new GameScoreLayout_1.default(renderingInfo), new ScoreEntity_1.default(renderingInfo)) || this;\r\n    }\r\n    return ScoreComponent;\r\n}(GameComponent_1.default));\r\nexports[\"default\"] = ScoreComponent;\r\n\n\n//# sourceURL=webpack:///./renderable/ScoreComponent.ts?");

/***/ }),

/***/ "./renderable/StoneComponent.ts":
/*!**************************************!*\
  !*** ./renderable/StoneComponent.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ../helper/Vector */ \"./helper/Vector.ts\");\r\nvar GameComponent_1 = __webpack_require__(/*! ./GameComponent */ \"./renderable/GameComponent.ts\");\r\nvar GameBoardLayout_1 = __webpack_require__(/*! ./layout/GameBoardLayout */ \"./renderable/layout/GameBoardLayout.ts\");\r\nvar StoneEntity_1 = __webpack_require__(/*! ./Entity/StoneEntity */ \"./renderable/Entity/StoneEntity.ts\");\r\nvar StoneComponent = /** @class */ (function (_super) {\r\n    __extends(StoneComponent, _super);\r\n    function StoneComponent(renderingInfo) {\r\n        var _this = _super.call(this, renderingInfo, new GameBoardLayout_1.default(renderingInfo), new StoneEntity_1.default(renderingInfo)) || this;\r\n        _this.getMouseEvent = function (e) {\r\n            _this.stoneEntity.getMousePosition(new Vector_1.default(e.clientX, e.clientY));\r\n        };\r\n        _this.stoneEntity = _this.entity;\r\n        _this.reset();\r\n        return _this;\r\n    }\r\n    StoneComponent.prototype.updateWinJudgment = function () {\r\n        var t;\r\n        var stones = this.entity.stones;\r\n        function isSameType() {\r\n            var elms = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                elms[_i] = arguments[_i];\r\n            }\r\n            if (elms.length == 0 || elms[0] == null) {\r\n                return -1;\r\n            }\r\n            var cur = elms[0] instanceof this.stoneEntity.positiveType;\r\n            for (var i = 1; i < elms.length; ++i) {\r\n                if (!elms[i]) {\r\n                    return -1;\r\n                }\r\n                if (cur != (elms[i] instanceof this.stoneEntity.positiveType)) {\r\n                    return -1;\r\n                }\r\n            }\r\n            return Number(cur);\r\n        }\r\n        for (var i = 0; i < 3; ++i) {\r\n            if ((t = isSameType(stones[i][0], stones[i][1], stones[i][2])) != -1 ||\r\n                (t = isSameType(stones[0][i], stones[1][i], stones[2][i])) != -1) {\r\n                this.winJudgment = t;\r\n                return;\r\n            }\r\n        }\r\n        if ((t = isSameType(stones[0][0], stones[1][1], stones[2][2])) != -1 ||\r\n            (t = isSameType(stones[0][2], stones[1][1], stones[2][0])) != -1) {\r\n            this.winJudgment = t;\r\n            return;\r\n        }\r\n        for (var i = 0; i < 3; ++i) {\r\n            for (var j = 0; j < 3; ++j) {\r\n                if (stones[i][j] === null) {\r\n                    return;\r\n                }\r\n            }\r\n        }\r\n        this.winJudgment = 2;\r\n    };\r\n    StoneComponent.prototype.reset = function () {\r\n        this.winJudgment = -1;\r\n        _super.prototype.reset.call(this);\r\n    };\r\n    return StoneComponent;\r\n}(GameComponent_1.default));\r\nexports[\"default\"] = StoneComponent;\r\n\n\n//# sourceURL=webpack:///./renderable/StoneComponent.ts?");

/***/ }),

/***/ "./renderable/layout/GameBoardLayout.ts":
/*!**********************************************!*\
  !*** ./renderable/layout/GameBoardLayout.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ../../helper/Vector */ \"./helper/Vector.ts\");\r\nvar DrawHelper_1 = __webpack_require__(/*! ../../helper/DrawHelper */ \"./helper/DrawHelper.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./renderable/layout/Layout.ts\");\r\nvar Outline = /** @class */ (function (_super) {\r\n    __extends(Outline, _super);\r\n    function Outline(renderingInfo) {\r\n        var _this = _super.call(this, renderingInfo) || this;\r\n        _this.render = function (context) {\r\n            DrawHelper_1.default.rect(context, _this.renderingInfo.start, _this.renderingInfo.end);\r\n            for (var i = 1; i < 3; ++i) {\r\n                DrawHelper_1.default.line(context, new Vector_1.default(_this.renderingInfo.start.x, _this.renderingInfo.start.y + i * (_this.renderingInfo.getHeight() / 3)), new Vector_1.default(_this.renderingInfo.end.x, _this.renderingInfo.start.y + i * (_this.renderingInfo.getHeight() / 3)));\r\n                DrawHelper_1.default.line(context, new Vector_1.default(_this.renderingInfo.start.x + i * (_this.renderingInfo.getWidth() / 3), _this.renderingInfo.start.y), new Vector_1.default(_this.renderingInfo.start.x + i * (_this.renderingInfo.getWidth() / 3), _this.renderingInfo.end.y));\r\n            }\r\n        };\r\n        return _this;\r\n    }\r\n    return Outline;\r\n}(Layout_1.default));\r\nexports[\"default\"] = Outline;\r\n\n\n//# sourceURL=webpack:///./renderable/layout/GameBoardLayout.ts?");

/***/ }),

/***/ "./renderable/layout/GameScoreLayout.ts":
/*!**********************************************!*\
  !*** ./renderable/layout/GameScoreLayout.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ../../helper/DrawHelper */ \"./helper/DrawHelper.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./Layout */ \"./renderable/layout/Layout.ts\");\r\nvar GameScoreLayout = /** @class */ (function (_super) {\r\n    __extends(GameScoreLayout, _super);\r\n    function GameScoreLayout(renderingInfo) {\r\n        return _super.call(this, renderingInfo) || this;\r\n    }\r\n    GameScoreLayout.prototype.render = function (context) {\r\n        DrawHelper_1.default.rect(context, this.renderingInfo.start, this.renderingInfo.end);\r\n    };\r\n    return GameScoreLayout;\r\n}(Layout_1.default));\r\nexports[\"default\"] = GameScoreLayout;\r\n\n\n//# sourceURL=webpack:///./renderable/layout/GameScoreLayout.ts?");

/***/ }),

/***/ "./renderable/layout/Layout.ts":
/*!*************************************!*\
  !*** ./renderable/layout/Layout.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Layout = /** @class */ (function () {\r\n    function Layout(renderingInfo) {\r\n        this.renderingInfo = renderingInfo;\r\n    }\r\n    Layout.prototype.update = function () { };\r\n    Layout.prototype.reset = function () { };\r\n    return Layout;\r\n}());\r\nexports[\"default\"] = Layout;\r\n\n\n//# sourceURL=webpack:///./renderable/layout/Layout.ts?");

/***/ }),

/***/ "./renderable/shape/Circle.ts":
/*!************************************!*\
  !*** ./renderable/shape/Circle.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ../../helper/DrawHelper */ \"./helper/DrawHelper.ts\");\r\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./renderable/shape/Shape.ts\");\r\nvar Circle = /** @class */ (function (_super) {\r\n    __extends(Circle, _super);\r\n    function Circle(start, end, radiusRate) {\r\n        var _this = _super.call(this, start, end) || this;\r\n        radiusRate = radiusRate || 0.4;\r\n        _this.radius = Math.min(_this.getWidth(), _this.getHeight()) * radiusRate;\r\n        return _this;\r\n    }\r\n    Circle.prototype.render = function (context) {\r\n        DrawHelper_1.default.circle(context, this.getCenter(), this.radius);\r\n    };\r\n    return Circle;\r\n}(Shape_1.default));\r\nexports[\"default\"] = Circle;\r\n\n\n//# sourceURL=webpack:///./renderable/shape/Circle.ts?");

/***/ }),

/***/ "./renderable/shape/CrossMark.ts":
/*!***************************************!*\
  !*** ./renderable/shape/CrossMark.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar DrawHelper_1 = __webpack_require__(/*! ../../helper/DrawHelper */ \"./helper/DrawHelper.ts\");\r\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./renderable/shape/Shape.ts\");\r\nvar CrossMark = /** @class */ (function (_super) {\r\n    __extends(CrossMark, _super);\r\n    function CrossMark(start, end, radiusRate) {\r\n        var _this = _super.call(this, start, end) || this;\r\n        radiusRate = radiusRate || 0.5;\r\n        _this.radius = Math.min(_this.getWidth(), _this.getHeight()) * radiusRate;\r\n        return _this;\r\n    }\r\n    CrossMark.prototype.render = function (context) {\r\n        DrawHelper_1.default.cross(context, this.getCenter(), this.radius);\r\n    };\r\n    return CrossMark;\r\n}(Shape_1.default));\r\nexports[\"default\"] = CrossMark;\r\n\n\n//# sourceURL=webpack:///./renderable/shape/CrossMark.ts?");

/***/ }),

/***/ "./renderable/shape/Shape.ts":
/*!***********************************!*\
  !*** ./renderable/shape/Shape.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Vector_1 = __webpack_require__(/*! ../../helper/Vector */ \"./helper/Vector.ts\");\r\nvar RenderingInfo_1 = __webpack_require__(/*! ../Entity/RenderingInfo */ \"./renderable/Entity/RenderingInfo.ts\");\r\nvar Shape = /** @class */ (function () {\r\n    function Shape(start, end) {\r\n        this.renderingInfo = new RenderingInfo_1.default(start, end);\r\n    }\r\n    Shape.prototype.getCenter = function () {\r\n        var block = Vector_1.default.minus(this.renderingInfo.end, this.renderingInfo.start);\r\n        return Vector_1.default.plus(block.div(2), this.renderingInfo.start);\r\n    };\r\n    Shape.prototype.getHeight = function () {\r\n        return this.renderingInfo.getHeight();\r\n    };\r\n    Shape.prototype.getWidth = function () {\r\n        return this.renderingInfo.getWidth();\r\n    };\r\n    Shape.prototype.update = function () { };\r\n    Shape.prototype.render = function (context) { };\r\n    return Shape;\r\n}());\r\nexports[\"default\"] = Shape;\r\n\n\n//# sourceURL=webpack:///./renderable/shape/Shape.ts?");

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