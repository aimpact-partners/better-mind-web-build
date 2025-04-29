System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["js-confetti","0.12.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/js-confetti.0.12.0.js
var js_confetti_0_12_0_exports = {};
__export(js_confetti_0_12_0_exports, {
  default: () => js_confetti_0_12_0_default
});
module.exports = __toCommonJS(js_confetti_0_12_0_exports);

// node_modules/js-confetti/dist/es/index.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function normalizeComputedStyleValue(string) {
  return +string.replace(/px/, "");
}
function fixDPR(canvas) {
  var dpr = window.devicePixelRatio;
  var computedStyles = getComputedStyle(canvas);
  var width = normalizeComputedStyleValue(computedStyles.getPropertyValue("width"));
  var height = normalizeComputedStyleValue(computedStyles.getPropertyValue("height"));
  canvas.setAttribute("width", (width * dpr).toString());
  canvas.setAttribute("height", (height * dpr).toString());
}
function generateRandomNumber(min, max) {
  var fractionDigits = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);
}
function generateRandomArrayElement(arr) {
  return arr[generateRandomNumber(0, arr.length)];
}
var FREE_FALLING_OBJECT_ACCELERATION = 125e-5;
var MIN_DRAG_FORCE_COEFFICIENT = 5e-4;
var MAX_DRAG_FORCE_COEFFICIENT = 9e-4;
var ROTATION_SLOWDOWN_ACCELERATION = 1e-5;
var INITIAL_SHAPE_RADIUS = 6;
var INITIAL_EMOJI_SIZE = 80;
var MIN_INITIAL_CONFETTI_SPEED = 0.9;
var MAX_INITIAL_CONFETTI_SPEED = 1.7;
var MIN_FINAL_X_CONFETTI_SPEED = 0.2;
var MAX_FINAL_X_CONFETTI_SPEED = 0.6;
var MIN_INITIAL_ROTATION_SPEED = 0.03;
var MAX_INITIAL_ROTATION_SPEED = 0.07;
var MIN_CONFETTI_ANGLE = 15;
var MAX_CONFETTI_ANGLE = 82;
var MAX_CONFETTI_POSITION_SHIFT = 150;
var SHAPE_VISIBILITY_TRESHOLD = 100;
var DEFAULT_CONFETTI_NUMBER = 250;
var DEFAULT_EMOJIS_NUMBER = 40;
var DEFAULT_CONFETTI_COLORS = ["#fcf403", "#62fc03", "#f4fc03", "#03e7fc", "#03fca5", "#a503fc", "#fc03ad", "#fc03c2"];
function getWindowWidthCoefficient(canvasWidth) {
  var HD_SCREEN_WIDTH = 1920;
  return Math.log(canvasWidth) / Math.log(HD_SCREEN_WIDTH);
}
var ConfettiShape = /* @__PURE__ */function () {
  function ConfettiShape2(args) {
    _classCallCheck(this, ConfettiShape2);
    var initialPosition = args.initialPosition,
      direction = args.direction,
      confettiRadius = args.confettiRadius,
      confettiColors = args.confettiColors,
      emojis = args.emojis,
      emojiSize = args.emojiSize,
      canvasWidth = args.canvasWidth;
    var randomConfettiSpeed = generateRandomNumber(MIN_INITIAL_CONFETTI_SPEED, MAX_INITIAL_CONFETTI_SPEED, 3);
    var initialSpeed = randomConfettiSpeed * getWindowWidthCoefficient(canvasWidth);
    this.confettiSpeed = {
      x: initialSpeed,
      y: initialSpeed
    };
    this.finalConfettiSpeedX = generateRandomNumber(MIN_FINAL_X_CONFETTI_SPEED, MAX_FINAL_X_CONFETTI_SPEED, 3);
    this.rotationSpeed = emojis.length ? 0.01 : generateRandomNumber(MIN_INITIAL_ROTATION_SPEED, MAX_INITIAL_ROTATION_SPEED, 3) * getWindowWidthCoefficient(canvasWidth);
    this.dragForceCoefficient = generateRandomNumber(MIN_DRAG_FORCE_COEFFICIENT, MAX_DRAG_FORCE_COEFFICIENT, 6);
    this.radius = {
      x: confettiRadius,
      y: confettiRadius
    };
    this.initialRadius = confettiRadius;
    this.rotationAngle = direction === "left" ? generateRandomNumber(0, 0.2, 3) : generateRandomNumber(-0.2, 0, 3);
    this.emojiSize = emojiSize;
    this.emojiRotationAngle = generateRandomNumber(0, 2 * Math.PI);
    this.radiusYUpdateDirection = "down";
    var angle = direction === "left" ? generateRandomNumber(MAX_CONFETTI_ANGLE, MIN_CONFETTI_ANGLE) * Math.PI / 180 : generateRandomNumber(-MIN_CONFETTI_ANGLE, -MAX_CONFETTI_ANGLE) * Math.PI / 180;
    this.absCos = Math.abs(Math.cos(angle));
    this.absSin = Math.abs(Math.sin(angle));
    var positionShift = generateRandomNumber(-MAX_CONFETTI_POSITION_SHIFT, 0);
    var shiftedInitialPosition = {
      x: initialPosition.x + (direction === "left" ? -positionShift : positionShift) * this.absCos,
      y: initialPosition.y - positionShift * this.absSin
    };
    this.currentPosition = Object.assign({}, shiftedInitialPosition);
    this.initialPosition = Object.assign({}, shiftedInitialPosition);
    this.color = emojis.length ? null : generateRandomArrayElement(confettiColors);
    this.emoji = emojis.length ? generateRandomArrayElement(emojis) : null;
    this.createdAt = new Date().getTime();
    this.direction = direction;
  }
  _createClass(ConfettiShape2, [{
    key: "draw",
    value: function draw(canvasContext) {
      var currentPosition = this.currentPosition,
        radius = this.radius,
        color = this.color,
        emoji = this.emoji,
        rotationAngle = this.rotationAngle,
        emojiRotationAngle = this.emojiRotationAngle,
        emojiSize = this.emojiSize;
      var dpr = window.devicePixelRatio;
      if (color) {
        canvasContext.fillStyle = color;
        canvasContext.beginPath();
        canvasContext.ellipse(currentPosition.x * dpr, currentPosition.y * dpr, radius.x * dpr, radius.y * dpr, rotationAngle, 0, 2 * Math.PI);
        canvasContext.fill();
      } else if (emoji) {
        canvasContext.font = "".concat(emojiSize, "px serif");
        canvasContext.save();
        canvasContext.translate(dpr * currentPosition.x, dpr * currentPosition.y);
        canvasContext.rotate(emojiRotationAngle);
        canvasContext.textAlign = "center";
        canvasContext.fillText(emoji, 0, 0);
        canvasContext.restore();
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition(iterationTimeDelta, currentTime) {
      var confettiSpeed = this.confettiSpeed,
        dragForceCoefficient = this.dragForceCoefficient,
        finalConfettiSpeedX = this.finalConfettiSpeedX,
        radiusYUpdateDirection = this.radiusYUpdateDirection,
        rotationSpeed = this.rotationSpeed,
        createdAt = this.createdAt,
        direction = this.direction;
      var timeDeltaSinceCreation = currentTime - createdAt;
      if (confettiSpeed.x > finalConfettiSpeedX) this.confettiSpeed.x -= dragForceCoefficient * iterationTimeDelta;
      this.currentPosition.x += confettiSpeed.x * (direction === "left" ? -this.absCos : this.absCos) * iterationTimeDelta;
      this.currentPosition.y = this.initialPosition.y - confettiSpeed.y * this.absSin * timeDeltaSinceCreation + FREE_FALLING_OBJECT_ACCELERATION * Math.pow(timeDeltaSinceCreation, 2) / 2;
      this.rotationSpeed -= this.emoji ? 1e-4 : ROTATION_SLOWDOWN_ACCELERATION * iterationTimeDelta;
      if (this.rotationSpeed < 0) this.rotationSpeed = 0;
      if (this.emoji) {
        this.emojiRotationAngle += this.rotationSpeed * iterationTimeDelta % (2 * Math.PI);
        return;
      }
      if (radiusYUpdateDirection === "down") {
        this.radius.y -= iterationTimeDelta * rotationSpeed;
        if (this.radius.y <= 0) {
          this.radius.y = 0;
          this.radiusYUpdateDirection = "up";
        }
      } else {
        this.radius.y += iterationTimeDelta * rotationSpeed;
        if (this.radius.y >= this.initialRadius) {
          this.radius.y = this.initialRadius;
          this.radiusYUpdateDirection = "down";
        }
      }
    }
  }, {
    key: "getIsVisibleOnCanvas",
    value: function getIsVisibleOnCanvas(canvasHeight) {
      return this.currentPosition.y < canvasHeight + SHAPE_VISIBILITY_TRESHOLD;
    }
  }]);
  return ConfettiShape2;
}();
function createCanvas() {
  var canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.zIndex = "1000";
  canvas.style.pointerEvents = "none";
  document.body.appendChild(canvas);
  return canvas;
}
function normalizeConfettiConfig(confettiConfig) {
  var _confettiConfig$confe = confettiConfig.confettiRadius,
    confettiRadius = _confettiConfig$confe === void 0 ? INITIAL_SHAPE_RADIUS : _confettiConfig$confe,
    _confettiConfig$confe2 = confettiConfig.confettiNumber,
    confettiNumber = _confettiConfig$confe2 === void 0 ? confettiConfig.confettiesNumber || (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER) : _confettiConfig$confe2,
    _confettiConfig$confe3 = confettiConfig.confettiColors,
    confettiColors = _confettiConfig$confe3 === void 0 ? DEFAULT_CONFETTI_COLORS : _confettiConfig$confe3,
    _confettiConfig$emoji = confettiConfig.emojis,
    emojis = _confettiConfig$emoji === void 0 ? confettiConfig.emojies || [] : _confettiConfig$emoji,
    _confettiConfig$emoji2 = confettiConfig.emojiSize,
    emojiSize = _confettiConfig$emoji2 === void 0 ? INITIAL_EMOJI_SIZE : _confettiConfig$emoji2;
  if (confettiConfig.emojies) console.error("emojies argument is deprecated, please use emojis instead");
  if (confettiConfig.confettiesNumber) console.error("confettiesNumber argument is deprecated, please use confettiNumber instead");
  return {
    confettiRadius,
    confettiNumber,
    confettiColors,
    emojis,
    emojiSize
  };
}
var ConfettiBatch = /* @__PURE__ */function () {
  function ConfettiBatch2(canvasContext) {
    var _this = this;
    _classCallCheck(this, ConfettiBatch2);
    this.canvasContext = canvasContext;
    this.shapes = [];
    this.promise = new Promise(function (completionCallback) {
      return _this.resolvePromise = completionCallback;
    });
  }
  _createClass(ConfettiBatch2, [{
    key: "getBatchCompletePromise",
    value: function getBatchCompletePromise() {
      return this.promise;
    }
  }, {
    key: "addShapes",
    value: function addShapes() {
      var _this$shapes;
      (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);
    }
  }, {
    key: "complete",
    value: function complete() {
      var _a;
      if (this.shapes.length) {
        return false;
      }
      (_a = this.resolvePromise) === null || _a === void 0 ? void 0 : _a.call(this);
      return true;
    }
  }, {
    key: "processShapes",
    value: function processShapes(time, canvasHeight, cleanupInvisibleShapes) {
      var _this2 = this;
      var timeDelta = time.timeDelta,
        currentTime = time.currentTime;
      this.shapes = this.shapes.filter(function (shape) {
        shape.updatePosition(timeDelta, currentTime);
        shape.draw(_this2.canvasContext);
        if (!cleanupInvisibleShapes) {
          return true;
        }
        return shape.getIsVisibleOnCanvas(canvasHeight);
      });
    }
  }]);
  return ConfettiBatch2;
}();
var JSConfetti = /* @__PURE__ */function () {
  function JSConfetti2() {
    var jsConfettiConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, JSConfetti2);
    this.activeConfettiBatches = [];
    this.canvas = jsConfettiConfig.canvas || createCanvas();
    this.canvasContext = this.canvas.getContext("2d");
    this.requestAnimationFrameRequested = false;
    this.lastUpdated = new Date().getTime();
    this.iterationIndex = 0;
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }
  _createClass(JSConfetti2, [{
    key: "loop",
    value: function loop() {
      this.requestAnimationFrameRequested = false;
      fixDPR(this.canvas);
      var currentTime = new Date().getTime();
      var timeDelta = currentTime - this.lastUpdated;
      var canvasHeight = this.canvas.offsetHeight;
      var cleanupInvisibleShapes = this.iterationIndex % 10 === 0;
      this.activeConfettiBatches = this.activeConfettiBatches.filter(function (batch) {
        batch.processShapes({
          timeDelta,
          currentTime
        }, canvasHeight, cleanupInvisibleShapes);
        if (!cleanupInvisibleShapes) {
          return true;
        }
        return !batch.complete();
      });
      this.iterationIndex++;
      this.queueAnimationFrameIfNeeded(currentTime);
    }
  }, {
    key: "queueAnimationFrameIfNeeded",
    value: function queueAnimationFrameIfNeeded(currentTime) {
      if (this.requestAnimationFrameRequested) {
        return;
      }
      if (this.activeConfettiBatches.length < 1) {
        return;
      }
      this.requestAnimationFrameRequested = true;
      this.lastUpdated = currentTime || new Date().getTime();
      requestAnimationFrame(this.loop);
    }
  }, {
    key: "addConfetti",
    value: function addConfetti() {
      var confettiConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var _normalizeConfettiCon = normalizeConfettiConfig(confettiConfig),
        confettiRadius = _normalizeConfettiCon.confettiRadius,
        confettiNumber = _normalizeConfettiCon.confettiNumber,
        confettiColors = _normalizeConfettiCon.confettiColors,
        emojis = _normalizeConfettiCon.emojis,
        emojiSize = _normalizeConfettiCon.emojiSize;
      var canvasRect = this.canvas.getBoundingClientRect();
      var canvasWidth = canvasRect.width;
      var canvasHeight = canvasRect.height;
      var yPosition = canvasHeight * 5 / 7;
      var leftConfettiPosition = {
        x: 0,
        y: yPosition
      };
      var rightConfettiPosition = {
        x: canvasWidth,
        y: yPosition
      };
      var confettiGroup = new ConfettiBatch(this.canvasContext);
      for (var i = 0; i < confettiNumber / 2; i++) {
        var confettiOnTheRight = new ConfettiShape({
          initialPosition: leftConfettiPosition,
          direction: "right",
          confettiRadius,
          confettiColors,
          confettiNumber,
          emojis,
          emojiSize,
          canvasWidth
        });
        var confettiOnTheLeft = new ConfettiShape({
          initialPosition: rightConfettiPosition,
          direction: "left",
          confettiRadius,
          confettiColors,
          confettiNumber,
          emojis,
          emojiSize,
          canvasWidth
        });
        confettiGroup.addShapes(confettiOnTheRight, confettiOnTheLeft);
      }
      this.activeConfettiBatches.push(confettiGroup);
      this.queueAnimationFrameIfNeeded();
      return confettiGroup.getBatchCompletePromise();
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.activeConfettiBatches = [];
    }
  }, {
    key: "destroyCanvas",
    value: function destroyCanvas() {
      this.canvas.remove();
    }
  }]);
  return JSConfetti2;
}();
var es_default = JSConfetti;

// .beyond/uimport/temp/js-confetti.0.12.0.js
var js_confetti_0_12_0_default = es_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2pzLWNvbmZldHRpLjAuMTIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9qcy1jb25mZXR0aS9kaXN0L2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbImpzX2NvbmZldHRpXzBfMTJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwianNfY29uZmV0dGlfMF8xMl8wX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwibm9ybWFsaXplQ29tcHV0ZWRTdHlsZVZhbHVlIiwic3RyaW5nIiwicmVwbGFjZSIsImZpeERQUiIsImNhbnZhcyIsImRwciIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJjb21wdXRlZFN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJ3aWR0aCIsImdldFByb3BlcnR5VmFsdWUiLCJoZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImdlbmVyYXRlUmFuZG9tTnVtYmVyIiwibWluIiwibWF4IiwiZnJhY3Rpb25EaWdpdHMiLCJhcmd1bWVudHMiLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJwb3ciLCJnZW5lcmF0ZVJhbmRvbUFycmF5RWxlbWVudCIsImFyciIsIkZSRUVfRkFMTElOR19PQkpFQ1RfQUNDRUxFUkFUSU9OIiwiTUlOX0RSQUdfRk9SQ0VfQ09FRkZJQ0lFTlQiLCJNQVhfRFJBR19GT1JDRV9DT0VGRklDSUVOVCIsIlJPVEFUSU9OX1NMT1dET1dOX0FDQ0VMRVJBVElPTiIsIklOSVRJQUxfU0hBUEVfUkFESVVTIiwiSU5JVElBTF9FTU9KSV9TSVpFIiwiTUlOX0lOSVRJQUxfQ09ORkVUVElfU1BFRUQiLCJNQVhfSU5JVElBTF9DT05GRVRUSV9TUEVFRCIsIk1JTl9GSU5BTF9YX0NPTkZFVFRJX1NQRUVEIiwiTUFYX0ZJTkFMX1hfQ09ORkVUVElfU1BFRUQiLCJNSU5fSU5JVElBTF9ST1RBVElPTl9TUEVFRCIsIk1BWF9JTklUSUFMX1JPVEFUSU9OX1NQRUVEIiwiTUlOX0NPTkZFVFRJX0FOR0xFIiwiTUFYX0NPTkZFVFRJX0FOR0xFIiwiTUFYX0NPTkZFVFRJX1BPU0lUSU9OX1NISUZUIiwiU0hBUEVfVklTSUJJTElUWV9UUkVTSE9MRCIsIkRFRkFVTFRfQ09ORkVUVElfTlVNQkVSIiwiREVGQVVMVF9FTU9KSVNfTlVNQkVSIiwiREVGQVVMVF9DT05GRVRUSV9DT0xPUlMiLCJnZXRXaW5kb3dXaWR0aENvZWZmaWNpZW50IiwiY2FudmFzV2lkdGgiLCJIRF9TQ1JFRU5fV0lEVEgiLCJsb2ciLCJDb25mZXR0aVNoYXBlIiwiQ29uZmV0dGlTaGFwZTIiLCJhcmdzIiwiaW5pdGlhbFBvc2l0aW9uIiwiZGlyZWN0aW9uIiwiY29uZmV0dGlSYWRpdXMiLCJjb25mZXR0aUNvbG9ycyIsImVtb2ppcyIsImVtb2ppU2l6ZSIsInJhbmRvbUNvbmZldHRpU3BlZWQiLCJpbml0aWFsU3BlZWQiLCJjb25mZXR0aVNwZWVkIiwieCIsInkiLCJmaW5hbENvbmZldHRpU3BlZWRYIiwicm90YXRpb25TcGVlZCIsImRyYWdGb3JjZUNvZWZmaWNpZW50IiwicmFkaXVzIiwiaW5pdGlhbFJhZGl1cyIsInJvdGF0aW9uQW5nbGUiLCJlbW9qaVJvdGF0aW9uQW5nbGUiLCJQSSIsInJhZGl1c1lVcGRhdGVEaXJlY3Rpb24iLCJhbmdsZSIsImFic0NvcyIsImFicyIsImNvcyIsImFic1NpbiIsInNpbiIsInBvc2l0aW9uU2hpZnQiLCJzaGlmdGVkSW5pdGlhbFBvc2l0aW9uIiwiY3VycmVudFBvc2l0aW9uIiwiYXNzaWduIiwiY29sb3IiLCJlbW9qaSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJnZXRUaW1lIiwidmFsdWUiLCJkcmF3IiwiY2FudmFzQ29udGV4dCIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJmaWxsIiwiZm9udCIsImNvbmNhdCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInJlc3RvcmUiLCJ1cGRhdGVQb3NpdGlvbiIsIml0ZXJhdGlvblRpbWVEZWx0YSIsImN1cnJlbnRUaW1lIiwidGltZURlbHRhU2luY2VDcmVhdGlvbiIsImdldElzVmlzaWJsZU9uQ2FudmFzIiwiY2FudmFzSGVpZ2h0IiwiY3JlYXRlQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJwb2ludGVyRXZlbnRzIiwiYm9keSIsImFwcGVuZENoaWxkIiwibm9ybWFsaXplQ29uZmV0dGlDb25maWciLCJjb25mZXR0aUNvbmZpZyIsIl9jb25mZXR0aUNvbmZpZyRjb25mZSIsIl9jb25mZXR0aUNvbmZpZyRjb25mZTIiLCJjb25mZXR0aU51bWJlciIsImNvbmZldHRpZXNOdW1iZXIiLCJfY29uZmV0dGlDb25maWckY29uZmUzIiwiX2NvbmZldHRpQ29uZmlnJGVtb2ppIiwiZW1vamllcyIsIl9jb25mZXR0aUNvbmZpZyRlbW9qaTIiLCJjb25zb2xlIiwiZXJyb3IiLCJDb25mZXR0aUJhdGNoIiwiQ29uZmV0dGlCYXRjaDIiLCJfdGhpcyIsInNoYXBlcyIsInByb21pc2UiLCJQcm9taXNlIiwiY29tcGxldGlvbkNhbGxiYWNrIiwicmVzb2x2ZVByb21pc2UiLCJnZXRCYXRjaENvbXBsZXRlUHJvbWlzZSIsImFkZFNoYXBlcyIsIl90aGlzJHNoYXBlcyIsInB1c2giLCJhcHBseSIsImNvbXBsZXRlIiwiX2EiLCJjYWxsIiwicHJvY2Vzc1NoYXBlcyIsInRpbWUiLCJjbGVhbnVwSW52aXNpYmxlU2hhcGVzIiwiX3RoaXMyIiwidGltZURlbHRhIiwiZmlsdGVyIiwic2hhcGUiLCJKU0NvbmZldHRpIiwiSlNDb25mZXR0aTIiLCJqc0NvbmZldHRpQ29uZmlnIiwiYWN0aXZlQ29uZmV0dGlCYXRjaGVzIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZVJlcXVlc3RlZCIsImxhc3RVcGRhdGVkIiwiaXRlcmF0aW9uSW5kZXgiLCJsb29wIiwiYmluZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9mZnNldEhlaWdodCIsImJhdGNoIiwicXVldWVBbmltYXRpb25GcmFtZUlmTmVlZGVkIiwiYWRkQ29uZmV0dGkiLCJfbm9ybWFsaXplQ29uZmV0dGlDb24iLCJjYW52YXNSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieVBvc2l0aW9uIiwibGVmdENvbmZldHRpUG9zaXRpb24iLCJyaWdodENvbmZldHRpUG9zaXRpb24iLCJjb25mZXR0aUdyb3VwIiwiY29uZmV0dGlPblRoZVJpZ2h0IiwiY29uZmV0dGlPblRoZUxlZnQiLCJjbGVhckNhbnZhcyIsImRlc3Ryb3lDYW52YXMiLCJyZW1vdmUiLCJlc19kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwwQkFBQTtBQUFBQyxRQUFBLENBQUFELDBCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDBCQUFBOzs7QUNBQSxTQUFTTyxnQkFBZ0JDLFFBQUEsRUFBVUMsV0FBQSxFQUFhO0VBQzlDLElBQUksRUFBRUQsUUFBQSxZQUFvQkMsV0FBQSxHQUFjO0lBQ3RDLE1BQU0sSUFBSUMsU0FBQSxDQUFVLG1DQUFtQztFQUN6RDtBQUNGO0FBRUEsU0FBU0Ms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LHFCQUFBO1VBQ2pCekgsU0FBQSxFQUFXO1VBQ1hDLGNBQUE7VUFDQUMsY0FBQTtVQUNBb0UsY0FBQTtVQUNBbkUsTUFBQTtVQUNBQyxTQUFBO1VBQ0FYO1FBQ0YsQ0FBQztRQUNEaUksYUFBQSxDQUFjbkMsU0FBQSxDQUFVb0Msa0JBQUEsRUFBb0JDLGlCQUFpQjtNQUMvRDtNQUVBLEtBQUtwQixxQkFBQSxDQUFzQmYsSUFBQSxDQUFLaUMsYUFBYTtNQUM3QyxLQUFLUiwyQkFBQSxDQUE0QjtNQUNqQyxPQUFPUSxhQUFBLENBQWNwQyx1QkFBQSxDQUF3QjtJQUMvQztFQUNGLEdBQUc7SUFDRGpKLEdBQUEsRUFBSztJQUNMNkYsS0FBQSxFQUFPLFNBQVMyRixZQUFBLEVBQWM7TUFDNUIsS0FBS3JCLHFCQUFBLEdBQXdCLEVBQUM7SUFDaEM7RUFDRixHQUFHO0lBQ0RuSyxHQUFBLEVBQUs7SUFDTDZGLEtBQUEsRUFBTyxTQUFTNEYsY0FBQSxFQUFnQjtNQUM5QixLQUFLaEwsTUFBQSxDQUFPaUwsTUFBQSxDQUFPO0lBQ3JCO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsT0FBT3pCLFdBQUE7QUFDVCxFQUFFO0FBRUYsSUFBTzBCLFVBQUEsR0FBUTNCLFVBQUE7OztBRGphZixJQUFPbkwsMEJBQUEsR0FBUThNLFVBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=