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

// .beyond/uimport/js-confetti.0.12.0.js
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
    this.createdAt = (/* @__PURE__ */new Date()).getTime();
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
    this.lastUpdated = (/* @__PURE__ */new Date()).getTime();
    this.iterationIndex = 0;
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }
  _createClass(JSConfetti2, [{
    key: "loop",
    value: function loop() {
      this.requestAnimationFrameRequested = false;
      fixDPR(this.canvas);
      var currentTime = (/* @__PURE__ */new Date()).getTime();
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
      this.lastUpdated = currentTime || (/* @__PURE__ */new Date()).getTime();
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

// .beyond/uimport/js-confetti.0.12.0.js
var js_confetti_0_12_0_default = es_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9qcy1jb25mZXR0aS4wLjEyLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvanMtY29uZmV0dGkvZGlzdC9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJqc19jb25mZXR0aV8wXzEyXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImpzX2NvbmZldHRpXzBfMTJfMF9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIm5vcm1hbGl6ZUNvbXB1dGVkU3R5bGVWYWx1ZSIsInN0cmluZyIsInJlcGxhY2UiLCJmaXhEUFIiLCJjYW52YXMiLCJkcHIiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwiY29tcHV0ZWRTdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwid2lkdGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwidG9TdHJpbmciLCJnZW5lcmF0ZVJhbmRvbU51bWJlciIsIm1pbiIsIm1heCIsImZyYWN0aW9uRGlnaXRzIiwiYXJndW1lbnRzIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwicG93IiwiZ2VuZXJhdGVSYW5kb21BcnJheUVsZW1lbnQiLCJhcnIiLCJGUkVFX0ZBTExJTkdfT0JKRUNUX0FDQ0VMRVJBVElPTiIsIk1JTl9EUkFHX0ZPUkNFX0NPRUZGSUNJRU5UIiwiTUFYX0RSQUdfRk9SQ0VfQ09FRkZJQ0lFTlQiLCJST1RBVElPTl9TTE9XRE9XTl9BQ0NFTEVSQVRJT04iLCJJTklUSUFMX1NIQVBFX1JBRElVUyIsIklOSVRJQUxfRU1PSklfU0laRSIsIk1JTl9JTklUSUFMX0NPTkZFVFRJX1NQRUVEIiwiTUFYX0lOSVRJQUxfQ09ORkVUVElfU1BFRUQiLCJNSU5fRklOQUxfWF9DT05GRVRUSV9TUEVFRCIsIk1BWF9GSU5BTF9YX0NPTkZFVFRJX1NQRUVEIiwiTUlOX0lOSVRJQUxfUk9UQVRJT05fU1BFRUQiLCJNQVhfSU5JVElBTF9ST1RBVElPTl9TUEVFRCIsIk1JTl9DT05GRVRUSV9BTkdMRSIsIk1BWF9DT05GRVRUSV9BTkdMRSIsIk1BWF9DT05GRVRUSV9QT1NJVElPTl9TSElGVCIsIlNIQVBFX1ZJU0lCSUxJVFlfVFJFU0hPTEQiLCJERUZBVUxUX0NPTkZFVFRJX05VTUJFUiIsIkRFRkFVTFRfRU1PSklTX05VTUJFUiIsIkRFRkFVTFRfQ09ORkVUVElfQ09MT1JTIiwiZ2V0V2luZG93V2lkdGhDb2VmZmljaWVudCIsImNhbnZhc1dpZHRoIiwiSERfU0NSRUVOX1dJRFRIIiwibG9nIiwiQ29uZmV0dGlTaGFwZSIsIkNvbmZldHRpU2hhcGUyIiwiYXJncyIsImluaXRpYWxQb3NpdGlvbiIsImRpcmVjdGlvbiIsImNvbmZldHRpUmFkaXVzIiwiY29uZmV0dGlDb2xvcnMiLCJlbW9qaXMiLCJlbW9qaVNpemUiLCJyYW5kb21Db25mZXR0aVNwZWVkIiwiaW5pdGlhbFNwZWVkIiwiY29uZmV0dGlTcGVlZCIsIngiLCJ5IiwiZmluYWxDb25mZXR0aVNwZWVkWCIsInJvdGF0aW9uU3BlZWQiLCJkcmFnRm9yY2VDb2VmZmljaWVudCIsInJhZGl1cyIsImluaXRpYWxSYWRpdXMiLCJyb3RhdGlvbkFuZ2xlIiwiZW1vamlSb3RhdGlvbkFuZ2xlIiwiUEkiLCJyYWRpdXNZVXBkYXRlRGlyZWN0aW9uIiwiYW5nbGUiLCJhYnNDb3MiLCJhYnMiLCJjb3MiLCJhYnNTaW4iLCJzaW4iLCJwb3NpdGlvblNoaWZ0Iiwic2hpZnRlZEluaXRpYWxQb3NpdGlvbiIsImN1cnJlbnRQb3NpdGlvbiIsImFzc2lnbiIsImNvbG9yIiwiZW1vamkiLCJjcmVhdGVkQXQiLCJEYXRlIiwiZ2V0VGltZSIsInZhbHVlIiwiZHJhdyIsImNhbnZhc0NvbnRleHQiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJlbGxpcHNlIiwiZmlsbCIsImZvbnQiLCJjb25jYXQiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJyZXN0b3JlIiwidXBkYXRlUG9zaXRpb24iLCJpdGVyYXRpb25UaW1lRGVsdGEiLCJjdXJyZW50VGltZSIsInRpbWVEZWx0YVNpbmNlQ3JlYXRpb24iLCJnZXRJc1Zpc2libGVPbkNhbnZhcyIsImNhbnZhc0hlaWdodCIsImNyZWF0ZUNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm5vcm1hbGl6ZUNvbmZldHRpQ29uZmlnIiwiY29uZmV0dGlDb25maWciLCJfY29uZmV0dGlDb25maWckY29uZmUiLCJfY29uZmV0dGlDb25maWckY29uZmUyIiwiY29uZmV0dGlOdW1iZXIiLCJjb25mZXR0aWVzTnVtYmVyIiwiX2NvbmZldHRpQ29uZmlnJGNvbmZlMyIsIl9jb25mZXR0aUNvbmZpZyRlbW9qaSIsImVtb2ppZXMiLCJfY29uZmV0dGlDb25maWckZW1vamkyIiwiY29uc29sZSIsImVycm9yIiwiQ29uZmV0dGlCYXRjaCIsIkNvbmZldHRpQmF0Y2gyIiwiX3RoaXMiLCJzaGFwZXMiLCJwcm9taXNlIiwiUHJvbWlzZSIsImNvbXBsZXRpb25DYWxsYmFjayIsInJlc29sdmVQcm9taXNlIiwiZ2V0QmF0Y2hDb21wbGV0ZVByb21pc2UiLCJhZGRTaGFwZXMiLCJfdGhpcyRzaGFwZXMiLCJwdXNoIiwiYXBwbHkiLCJjb21wbGV0ZSIsIl9hIiwiY2FsbCIsInByb2Nlc3NTaGFwZXMiLCJ0aW1lIiwiY2xlYW51cEludmlzaWJsZVNoYXBlcyIsIl90aGlzMiIsInRpbWVEZWx0YSIsImZpbHRlciIsInNoYXBlIiwiSlNDb25mZXR0aSIsIkpTQ29uZmV0dGkyIiwianNDb25mZXR0aUNvbmZpZyIsImFjdGl2ZUNvbmZldHRpQmF0Y2hlcyIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVSZXF1ZXN0ZWQiLCJsYXN0VXBkYXRlZCIsIml0ZXJhdGlvbkluZGV4IiwibG9vcCIsImJpbmQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvZmZzZXRIZWlnaHQiLCJiYXRjaCIsInF1ZXVlQW5pbWF0aW9uRnJhbWVJZk5lZWRlZCIsImFkZENvbmZldHRpIiwiX25vcm1hbGl6ZUNvbmZldHRpQ29uIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInlQb3NpdGlvbiIsImxlZnRDb25mZXR0aVBvc2l0aW9uIiwicmlnaHRDb25mZXR0aVBvc2l0aW9uIiwiY29uZmV0dGlHcm91cCIsImNvbmZldHRpT25UaGVSaWdodCIsImNvbmZldHRpT25UaGVMZWZ0IiwiY2xlYXJDYW52YXMiLCJkZXN0cm95Q2FudmFzIiwicmVtb3ZlIiwiZXNfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMEJBQUE7QUFBQUMsUUFBQSxDQUFBRCwwQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwwQkFBQTs7O0FDQUEsU0FBU08sZ0JBQWdCQyxRQUFBLEVBQVVDLFdBQUEsRUFBYTtFQUM5QyxJQUFJLEVBQUVELFFBQUEsWUFBb0JDLFdBQUEsR0FBYztJQUN0QyxNQUFNLElBQUlDLFNBQUEsQ0FBVSxtQ0FBbUM7RUFDekQ7QUFDRjtBQUVBLFNBQVNDLGtCQUFr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QUloSSxhQUFBLENBQWM7VUFDeENHLGVBQUEsRUFBaUIwSCxxQkFBQTtVQUNqQnpILFNBQUEsRUFBVztVQUNYQyxjQUFBO1VBQ0FDLGNBQUE7VUFDQW9FLGNBQUE7VUFDQW5FLE1BQUE7VUFDQUMsU0FBQTtVQUNBWDtRQUNGLENBQUM7UUFDRGlJLGFBQUEsQ0FBY25DLFNBQUEsQ0FBVW9DLGtCQUFBLEVBQW9CQyxpQkFBaUI7TUFDL0Q7TUFFQSxLQUFLcEIscUJBQUEsQ0FBc0JmLElBQUEsQ0FBS2lDLGFBQWE7TUFDN0MsS0FBS1IsMkJBQUEsQ0FBNEI7TUFDakMsT0FBT1EsYUFBQSxDQUFjcEMsdUJBQUEsQ0FBd0I7SUFDL0M7RUFDRixHQUFHO0lBQ0RqSixHQUFBLEVBQUs7SUFDTDZGLEtBQUEsRUFBTyxTQUFTMkYsWUFBQSxFQUFjO01BQzVCLEtBQUtyQixxQkFBQSxHQUF3QixFQUFDO0lBQ2hDO0VBQ0YsR0FBRztJQUNEbkssR0FBQSxFQUFLO0lBQ0w2RixLQUFBLEVBQU8sU0FBUzRGLGNBQUEsRUFBZ0I7TUFDOUIsS0FBS2hMLE1BQUEsQ0FBT2lMLE1BQUEsQ0FBTztJQUNyQjtFQUNGLENBQUMsQ0FBQztFQUVGLE9BQU96QixXQUFBO0FBQ1QsRUFBRTtBQUVGLElBQU8wQixVQUFBLEdBQVEzQixVQUFBOzs7QURqYWYsSUFBT25MLDBCQUFBLEdBQVE4TSxVQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==