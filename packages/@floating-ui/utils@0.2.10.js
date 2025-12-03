System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.10"]]);
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

// .beyond/uimport/temp/@floating-ui/utils.0.2.10.js
var utils_0_2_10_exports = {};
__export(utils_0_2_10_exports, {
  alignments: () => alignments,
  clamp: () => clamp,
  createCoords: () => createCoords,
  evaluate: () => evaluate,
  expandPaddingObject: () => expandPaddingObject,
  floor: () => floor,
  getAlignment: () => getAlignment,
  getAlignmentAxis: () => getAlignmentAxis,
  getAlignmentSides: () => getAlignmentSides,
  getAxisLength: () => getAxisLength,
  getExpandedPlacements: () => getExpandedPlacements,
  getOppositeAlignmentPlacement: () => getOppositeAlignmentPlacement,
  getOppositeAxis: () => getOppositeAxis,
  getOppositeAxisPlacements: () => getOppositeAxisPlacements,
  getOppositePlacement: () => getOppositePlacement,
  getPaddingObject: () => getPaddingObject,
  getSide: () => getSide,
  getSideAxis: () => getSideAxis,
  max: () => max,
  min: () => min,
  placements: () => placements,
  rectToClientRect: () => rectToClientRect,
  round: () => round,
  sides: () => sides
});
module.exports = __toCommonJS(utils_0_2_10_exports);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = /* @__PURE__ */sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = v => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmbG9hdGluZy11aS91dGlscy4wLjIuMTAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3V0aWxzL2Rpc3QvZmxvYXRpbmctdWkudXRpbHMubWpzIl0sIm5hbWVzIjpbInV0aWxzXzBfMl8xMF9leHBvcnRzIiwiX19leHBvcnQiLCJhbGlnbm1lbnRzIiwiY2xhbXAiLCJjcmVhdGVDb29yZHMiLCJldmFsdWF0ZSIsImV4cGFuZFBhZGRpbmdPYmplY3QiLCJmbG9vciIsImdldEFsaWdubWVudCIsImdldEFsaWdubWVudEF4aXMiLCJnZXRBbGlnbm1lbnRTaWRlcyIsImdldEF4aXNMZW5ndGgiLCJnZXRFeHBhbmRlZFBsYWNlbWVudHMiLCJnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudCIsImdldE9wcG9zaXRlQXhpcyIsImdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMiLCJnZXRPcHBvc2l0ZVBsYWNlbWVudCIsImdldFBhZGRpbmdPYmplY3QiLCJnZXRTaWRlIiwiZ2V0U2lkZUF4aXMiLCJtYXgiLCJtaW4iLCJwbGFjZW1lbnRzIiwicmVjdFRvQ2xpZW50UmVjdCIsInJvdW5kIiwic2lkZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwicmVkdWNlIiwiYWNjIiwic2lkZSIsImNvbmNhdCIsIk1hdGgiLCJ2IiwieCIsInkiLCJvcHBvc2l0ZVNpZGVNYXAiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJvcHBvc2l0ZUFsaWdubWVudE1hcCIsInN0YXJ0IiwiZW5kIiwidmFsdWUiLCJwYXJhbSIsInBsYWNlbWVudCIsInNwbGl0IiwiYXhpcyIsInlBeGlzU2lkZXMiLCJTZXQiLCJoYXMiLCJyZWN0cyIsInJ0bCIsImFsaWdubWVudCIsImFsaWdubWVudEF4aXMiLCJsZW5ndGgiLCJtYWluQWxpZ25tZW50U2lkZSIsInJlZmVyZW5jZSIsImZsb2F0aW5nIiwib3Bwb3NpdGVQbGFjZW1lbnQiLCJyZXBsYWNlIiwibHJQbGFjZW1lbnQiLCJybFBsYWNlbWVudCIsInRiUGxhY2VtZW50IiwiYnRQbGFjZW1lbnQiLCJnZXRTaWRlTGlzdCIsImlzU3RhcnQiLCJmbGlwQWxpZ25tZW50IiwiZGlyZWN0aW9uIiwibGlzdCIsIm1hcCIsInBhZGRpbmciLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyw2QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDZCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLEdBQUEsRUFBQUEs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LE9BQU9BLE9BQUEsS0FBWSxXQUFXbkUsbUJBQUEsQ0FBb0JtRSxPQUFPLElBQUk7SUFDbEVoQyxHQUFBLEVBQUtnQyxPQUFBO0lBQ0xsQyxLQUFBLEVBQU9rQyxPQUFBO0lBQ1BqQyxNQUFBLEVBQVFpQyxPQUFBO0lBQ1JuQyxJQUFBLEVBQU1tQztFQUNSO0FBQ0Y7QUFDQSxTQUFTbEQsaUJBQWlCbUQsSUFBQSxFQUFNO0VBQzlCLE1BQU07SUFDSnZDLENBQUE7SUFDQUMsQ0FBQTtJQUNBdUMsS0FBQTtJQUNBQztFQUNGLElBQUlGLElBQUE7RUFDSixPQUFPO0lBQ0xDLEtBQUE7SUFDQUMsTUFBQTtJQUNBbkMsR0FBQSxFQUFLTCxDQUFBO0lBQ0xFLElBQUEsRUFBTUgsQ0FBQTtJQUNOSSxLQUFBLEVBQU9KLENBQUEsR0FBSXdDLEtBQUE7SUFDWG5DLE1BQUEsRUFBUUosQ0FBQSxHQUFJd0MsTUFBQTtJQUNaekMsQ0FBQTtJQUNBQztFQUNGO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9