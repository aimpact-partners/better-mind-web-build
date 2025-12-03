System.register(["@floating-ui/utils@0.2.10"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.10"],["@floating-ui/core","1.7.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@floating-ui/utils@0.2.10', dep)],
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

// .beyond/uimport/temp/@floating-ui/core.1.7.3.js
var core_1_7_3_exports = {};
__export(core_1_7_3_exports, {
  arrow: () => arrow,
  autoPlacement: () => autoPlacement,
  computePosition: () => computePosition,
  detectOverflow: () => detectOverflow,
  flip: () => flip,
  hide: () => hide,
  inline: () => inline,
  limitShift: () => limitShift,
  offset: () => offset,
  rectToClientRect: () => import_utils2.rectToClientRect,
  shift: () => shift,
  size: () => size
});
module.exports = __toCommonJS(core_1_7_3_exports);

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var import_utils = require("@floating-ui/utils@0.2.10");
var import_utils2 = require("@floating-ui/utils@0.2.10");
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = (0, import_utils.getSideAxis)(placement);
  const alignmentAxis = (0, import_utils.getAlignmentAxis)(placement);
  const alignLength = (0, import_utils.getAxisLength)(alignmentAxis);
  const side = (0, import_utils.getSide)(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch ((0, import_utils.getAlignment)(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = (0, import_utils.evaluate)(options, state);
  const paddingObject = (0, import_utils.getPaddingObject)(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = (0, import_utils.rectToClientRect)(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = (0, import_utils.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = options => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = (0, import_utils.evaluate)(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = (0, import_utils.getPaddingObject)(padding);
    const coords = {
      x,
      y
    };
    const axis = (0, import_utils.getAlignmentAxis)(placement);
    const length = (0, import_utils.getAxisLength)(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = (0, import_utils.min)(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = (0, import_utils.min)(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = (0, import_utils.clamp)(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && (0, import_utils.getAlignment)(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => (0, import_utils.getAlignment)(placement) === alignment), ...allowedPlacements.filter(placement => (0, import_utils.getAlignment)(placement) !== alignment)] : allowedPlacements.filter(placement => (0, import_utils.getSide)(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return (0, import_utils.getAlignment)(placement) === alignment || (autoAlignment ? (0, import_utils.getOppositeAlignmentPlacement)(placement) !== placement : false);
    }
    return true;
  });
}
var autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = import_utils.placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      const placements$1 = alignment !== void 0 || allowedPlacements === import_utils.placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = (0, import_utils.getAlignmentSides)(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[(0, import_utils.getSide)(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment2 = (0, import_utils.getAlignment)(d.placement);
        return [d.placement, alignment2 && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      (0, import_utils.getAlignment)(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
var flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = (0, import_utils.getSide)(placement);
      const initialSideAxis = (0, import_utils.getSideAxis)(initialPlacement);
      const isBasePlacement = (0, import_utils.getSide)(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [(0, import_utils.getOppositePlacement)(initialPlacement)] : (0, import_utils.getExpandedPlacements)(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...(0, import_utils.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = (0, import_utils.getAlignmentSides)(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every(side2 => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== (0, import_utils.getSideAxis)(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => (0, import_utils.getSideAxis)(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit":
              {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = (0, import_utils.getSideAxis)(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow2 => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return import_utils.sides.some(side => overflow[side] >= 0);
}
var hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      switch (strategy) {
        case "referenceHidden":
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: "reference"
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case "escaped":
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};
function getBoundingRect(rects) {
  const minX = (0, import_utils.min)(...rects.map(rect => rect.left));
  const minY = (0, import_utils.min)(...rects.map(rect => rect.top));
  const maxX = (0, import_utils.max)(...rects.map(rect => rect.right));
  const maxY = (0, import_utils.max)(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => (0, import_utils.rectToClientRect)(getBoundingRect(rect)));
}
var inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      const {
        padding = 2,
        x,
        y
      } = (0, import_utils.evaluate)(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = (0, import_utils.rectToClientRect)(getBoundingRect(nativeClientRects));
      const paddingObject = (0, import_utils.getPaddingObject)(padding);
      function getBoundingClientRect() {
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }
        if (clientRects.length >= 2) {
          if ((0, import_utils.getSideAxis)(placement) === "y") {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = (0, import_utils.getSide)(placement) === "top";
            const top2 = firstRect.top;
            const bottom2 = lastRect.bottom;
            const left2 = isTop ? firstRect.left : lastRect.left;
            const right2 = isTop ? firstRect.right : lastRect.right;
            const width2 = right2 - left2;
            const height2 = bottom2 - top2;
            return {
              top: top2,
              bottom: bottom2,
              left: left2,
              right: right2,
              width: width2,
              height: height2,
              x: left2,
              y: top2
            };
          }
          const isLeftSide = (0, import_utils.getSide)(placement) === "left";
          const maxRight = (0, import_utils.max)(...clientRects.map(rect => rect.right));
          const minLeft = (0, import_utils.min)(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};
var originSides = /* @__PURE__ */new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = (0, import_utils.getSide)(placement);
  const alignment = (0, import_utils.getAlignment)(placement);
  const isVertical = (0, import_utils.getSideAxis)(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = (0, import_utils.evaluate)(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = (0, import_utils.getSideAxis)((0, import_utils.getSide)(placement));
      const mainAxis = (0, import_utils.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = (0, import_utils.clamp)(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = (0, import_utils.clamp)(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = (0, import_utils.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = (0, import_utils.getSideAxis)(placement);
      const mainAxis = (0, import_utils.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = (0, import_utils.evaluate)(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has((0, import_utils.getSide)(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = (0, import_utils.getSide)(placement);
      const alignment = (0, import_utils.getAlignment)(placement);
      const isYAxis = (0, import_utils.getSideAxis)(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = (0, import_utils.min)(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = (0, import_utils.min)(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = (0, import_utils.max)(overflow.left, 0);
        const xMax = (0, import_utils.max)(overflow.right, 0);
        const yMin = (0, import_utils.max)(overflow.top, 0);
        const yMax = (0, import_utils.max)(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, import_utils.max)(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, import_utils.max)(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmbG9hdGluZy11aS9jb3JlLjEuNy4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9jb3JlL2Rpc3QvZmxvYXRpbmctdWkuY29yZS5tanMiXSwibmFtZXMiOlsiY29yZV8xXzdfM19leHBvcnRzIiwiX19leHBvcnQiLCJhcnJvdyIsImF1dG9QbGFjZW1lbnQiLCJjb21wdXRlUG9zaXRpb24iLCJkZXRlY3RPdmVyZmxvdyIsImZsaXAiLCJoaWRlIiwiaW5saW5lIiwibGltaXRTaGlmdCIsIm9mZnNldCIsInJlY3RUb0NsaWVudFJlY3QiLCJpbXBvcnRfdXRpbHMyIiwic2hpZnQiLCJzaXplIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF91dGlscyIsInJlcXVpcmUiLCJjb21wdXRlQ29vcmRzRnJvbVBsYWNlbWVudCIsIl9yZWYiLCJwbGFjZW1lbnQiLCJydGwiLCJyZWZlcmVuY2UiLCJmbG9hdGluZyIsInNpZGVBeGlzIiwiZ2V0U2lkZUF4aXMiLCJhbGlnbm1lbnRBeGlzIiwiZ2V0QWxpZ25tZW50QXhpcyIsImFsaWduTGVuZ3RoIiwiZ2V0QXhpc0xlbmd0aCIsInNpZGUiLCJnZXRTaWRlIiwiaXNWZXJ0aWNhbCIsImNvbW1vblgiLCJ4Iiwid2lkdGgiLCJjb21tb25ZIiwieSIsImhlaWdodCIsImNvbW1vbkFsaWduIiwiY29vcmRzIiwiZ2V0QWxpZ25tZW50IiwiY29uZmlnIiwic3RyYXRlZ3kiLCJtaWRkbGV3YXJlIiwicGxhdGZvcm0iLCJ2YWxpZE1pZGRsZXdhcmUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiaXNSVEwiLCJyZWN0cyIsImdldEVsZW1lbnRSZWN0cyIsInN0YXRlZnVsUGxhY2VtZW50IiwibWlkZGxld2FyZURhdGEiLCJyZXNldENvdW50IiwiaSIsImxlbmd0aCIsIm5hbWUiLCJmbiIsIm5leHRYIiwibmV4dFkiLCJkYXRhIiwicmVzZXQiLCJpbml0aWFsUGxhY2VtZW50IiwiZWxlbWVudHMiLCJzdGF0ZSIsIm9wdGlvbnMiLCJfYXdhaXQkcGxhdGZvcm0kaXNFbGUiLCJib3VuZGFyeSIsInJvb3RCb3VuZGFyeSIsImVsZW1lbnRDb250ZXh0IiwiYWx0Qm91bmRhcnkiLCJwYWRkaW5nIiwiZXZhbHVhdGUiLCJwYWRkaW5nT2JqZWN0IiwiZ2V0UGFkZGluZ09iamVjdCIsImFsdENvbnRleHQiLCJlbGVtZW50IiwiY2xpcHBpbmdDbGllbnRSZWN0IiwiZ2V0Q2xpcHBpbmdSZWN0IiwiaXNFbGVtZW50IiwiY29udGV4dEVsZW1lbnQiLCJnZXREb2N1bWVudEVsZW1lbnQiLCJyZWN0Iiwib2Zmc2V0UGFyZW50IiwiZ2V0T2Zmc2V0UGFyZW50Iiwib2Zmc2V0U2NhbGUiLCJnZXRTY2FsZSIsImVsZW1lbnRDbGllbnRSZWN0IiwiY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJheGlzIiwiYXJyb3dEaW1lbnNpb25zIiwiZ2V0RGltZW5zaW9ucyIsImlzWUF4aXMiLCJtaW5Qcm9wIiwibWF4UHJvcCIsImNsaWVudFByb3AiLCJlbmREaWZmIiwic3RhcnREaWZmIiwiYXJyb3dPZmZzZXRQYXJlbnQiLCJjbGllbnRTaXplIiwiY2VudGVyVG9SZWZlcmVuY2UiLCJsYXJnZXN0UG9zc2libGVQYWRkaW5nIiwibWluUGFkZGluZyIsIm1pbiIsIm1heFBhZGRpbmciLCJtaW4kMSIsIm1heDIiLCJjZW50ZXIiLCJvZmZzZXQyIiwiY2xhbXAiLCJzaG91bGRBZGRPZmZzZXQiLCJhbGlnbm1lbnRPZmZzZXQiLCJjZW50ZXJPZmZzZXQiLCJnZXRQbGFjZW1lbnRMaXN0IiwiYWxpZ25tZW50IiwiYXV0b0FsaWdubWVudCIsImFsbG93ZWRQbGFjZW1lbnRzIiwiYWxsb3dlZFBsYWNlbWVudHNTb3J0ZWRCeUFsaWdubWVudCIsImdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50IiwiX21pZGRsZXdhcmVEYXRhJGF1dG9QIiwiX21pZGRsZXdhcmVEYXRhJGF1dG9QMiIsIl9wbGFjZW1lbnRzVGhhdEZpdE9uRSIsImNyb3NzQXhpcyIsInBsYWNlbWVudHMiLCJkZXRlY3RPdmVyZmxvd09wdGlvbnMiLCJwbGFjZW1lbnRzJDEiLCJvdmVyZmxvdyIsImN1cnJlbnRJbmRleCIsImluZGV4IiwiY3VycmVudFBsYWNlbWVudCIsImFsaWdubWVudFNpZGVzIiwiZ2V0QWxpZ25tZW50U2lkZXMiLCJjdXJyZW50T3ZlcmZsb3dzIiwiYWxsT3ZlcmZsb3dzIiwib3ZlcmZsb3dzIiwibmV4dFBsYWNlbWVudCIsInBsYWNlbWVudHNTb3J0ZWRCeU1vc3RTcGFjZSIsIm1hcCIsImQiLCJhbGlnbm1lbnQyIiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJ2Iiwic29ydCIsImEiLCJiIiwicGxhY2VtZW50c1RoYXRGaXRPbkVhY2hTaWRlIiwiZXZlcnkiLCJyZXNldFBsYWNlbWVudCIsIl9taWRkbGV3YXJlRGF0YSRhcnJvdyIsIl9taWRkbGV3YXJlRGF0YSRmbGlwIiwibWFpbkF4aXMiLCJjaGVja01haW5BeGlzIiwiY2hlY2tDcm9zc0F4aXMiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCJmYWxsYmFja1N0cmF0ZWd5IiwiZmFsbGJhY2tBeGlzU2lkZURpcmVjdGlvbiIsImZsaXBBbGlnbm1lbnQiLCJpbml0aWFsU2lkZUF4aXMiLCJpc0Jhc2VQbGFjZW1lbnQiLCJnZXRPcHBvc2l0ZVBsYWNlbWVudCIsImdldEV4cGFuZGVkUGxhY2VtZW50cyIsImhhc0ZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24iLCJwdXNoIiwiZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyIsInBsYWNlbWVudHMyIiwib3ZlcmZsb3dzRGF0YSIsInNpZGVzMiIsInNpZGUyIiwiX21pZGRsZXdhcmVEYXRhJGZsaXAyIiwiX292ZXJmbG93c0RhdGEkZmlsdGVyIiwibmV4dEluZGV4IiwiaWdub3JlQ3Jvc3NBeGlzT3ZlcmZsb3ciLCJfb3ZlcmZsb3dzRGF0YSRmaWx0ZXIyIiwicGxhY2VtZW50MiIsImN1cnJlbnRTaWRlQXhpcyIsIm92ZXJmbG93MiIsImdldFNpZGVPZmZzZXRzIiwiaXNBbnlTaWRlRnVsbHlDbGlwcGVkIiwic2lkZXMiLCJzb21lIiwib2Zmc2V0cyIsInJlZmVyZW5jZUhpZGRlbk9mZnNldHMiLCJyZWZlcmVuY2VIaWRkZW4iLCJlc2NhcGVkT2Zmc2V0cyIsImVzY2FwZWQiLCJnZXRCb3VuZGluZ1JlY3QiLCJtaW5YIiwibWluWSIsIm1heFgiLCJtYXgiLCJtYXhZIiwiZ2V0UmVjdHNCeUxpbmUiLCJzb3J0ZWRSZWN0cyIsImdyb3VwcyIsInByZXZSZWN0IiwibmF0aXZlQ2xpZW50UmVjdHMiLCJBcnJheSIsImZyb20iLCJnZXRDbGllbnRSZWN0cyIsImNsaWVudFJlY3RzIiwiZmFsbGJhY2siLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmaW5kIiwiZmlyc3RSZWN0IiwibGFzdFJlY3QiLCJpc1RvcCIsInRvcDIiLCJib3R0b20yIiwibGVmdDIiLCJyaWdodDIiLCJ3aWR0aDIiLCJoZWlnaHQyIiwiaXNMZWZ0U2lkZSIsIm1heFJpZ2h0IiwibWluTGVmdCIsIm1lYXN1cmVSZWN0cyIsInJlc2V0UmVjdHMiLCJvcmlnaW5TaWRlcyIsIlNldCIsImNvbnZlcnRWYWx1ZVRvQ29vcmRzIiwibWFpbkF4aXNNdWx0aSIsImhhcyIsImNyb3NzQXhpc011bHRpIiwicmF3VmFsdWUiLCJfbWlkZGxld2FyZURhdGEkb2Zmc2UiLCJkaWZmQ29vcmRzIiwibGltaXRlciIsIngyIiwieTIiLCJnZXRPcHBvc2l0ZUF4aXMiLCJtYWluQXhpc0Nvb3JkIiwiY3Jvc3NBeGlzQ29vcmQiLCJtaW5TaWRlIiwibWF4U2lkZSIsIm1pbjIiLCJsaW1pdGVkQ29vcmRzIiwiZW5hYmxlZCIsInJhd09mZnNldCIsImNvbXB1dGVkT2Zmc2V0IiwibGVuIiwibGltaXRNaW4iLCJsaW1pdE1heCIsIl9taWRkbGV3YXJlRGF0YSRvZmZzZTIiLCJpc09yaWdpblNpZGUiLCJfc3RhdGUkbWlkZGxld2FyZURhdGEiLCJfc3RhdGUkbWlkZGxld2FyZURhdGEyIiwiYXBwbHkiLCJoZWlnaHRTaWRlIiwid2lkdGhTaWRlIiwibWF4aW11bUNsaXBwaW5nSGVpZ2h0IiwibWF4aW11bUNsaXBwaW5nV2lkdGgiLCJvdmVyZmxvd0F2YWlsYWJsZUhlaWdodCIsIm92ZXJmbG93QXZhaWxhYmxlV2lkdGgiLCJub1NoaWZ0IiwiYXZhaWxhYmxlSGVpZ2h0IiwiYXZhaWxhYmxlV2lkdGgiLCJ4TWluIiwieE1heCIsInlNaW4iLCJ5TWF4IiwibmV4dERpbWVuc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQyxhQUFBLENBQUFELGdCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFqQixrQkFBQTs7O0FDQUEsSUFBQWtCLFlBQUEsR0FBaVRDLE9BQUE7QUFD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