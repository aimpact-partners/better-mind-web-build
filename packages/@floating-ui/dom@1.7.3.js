System.register(["@floating-ui/utils@0.2.10","@floating-ui/core@1.7.3","@floating-ui/utils@0.2.10/dom"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.10"],["@floating-ui/core","1.7.3"],["@floating-ui/dom","1.7.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@floating-ui/utils@0.2.10', dep), dep => dependencies.set('@floating-ui/core@1.7.3', dep), dep => dependencies.set('@floating-ui/utils@0.2.10/dom', dep)],
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

// .beyond/uimport/temp/@floating-ui/dom.1.7.3.js
var dom_1_7_3_exports = {};
__export(dom_1_7_3_exports, {
  arrow: () => arrow,
  autoPlacement: () => autoPlacement,
  autoUpdate: () => autoUpdate,
  computePosition: () => computePosition,
  detectOverflow: () => detectOverflow,
  flip: () => flip,
  getOverflowAncestors: () => import_dom2.getOverflowAncestors,
  hide: () => hide,
  inline: () => inline,
  limitShift: () => limitShift,
  offset: () => offset,
  platform: () => platform,
  shift: () => shift,
  size: () => size
});
module.exports = __toCommonJS(dom_1_7_3_exports);

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
var import_core = require("@floating-ui/core@1.7.3");
var import_utils = require("@floating-ui/utils@0.2.10");
var import_dom = require("@floating-ui/utils@0.2.10/dom");
var import_dom2 = require("@floating-ui/utils@0.2.10/dom");
function getCssDimensions(element) {
  const css = (0, import_dom.getComputedStyle)(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = (0, import_dom.isHTMLElement)(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = (0, import_utils.round)(width) !== offsetWidth || (0, import_utils.round)(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !(0, import_dom.isElement)(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!(0, import_dom.isHTMLElement)(domElement)) {
    return (0, import_utils.createCoords)(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? (0, import_utils.round)(rect.width) : rect.width) / width;
  let y = ($ ? (0, import_utils.round)(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */(0, import_utils.createCoords)(0);
function getVisualOffsets(element) {
  const win = (0, import_dom.getWindow)(element);
  if (!(0, import_dom.isWebKit)() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, import_dom.getWindow)(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = (0, import_utils.createCoords)(1);
  if (includeScale) {
    if (offsetParent) {
      if ((0, import_dom.isElement)(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, import_utils.createCoords)(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = (0, import_dom.getWindow)(domElement);
    const offsetWin = offsetParent && (0, import_dom.isElement)(offsetParent) ? (0, import_dom.getWindow)(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = (0, import_dom.getFrameElement)(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = (0, import_dom.getComputedStyle)(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = (0, import_dom.getWindow)(currentIFrame);
      currentIFrame = (0, import_dom.getFrameElement)(currentWin);
    }
  }
  return (0, import_core.rectToClientRect)({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = (0, import_dom.getNodeScroll)(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect((0, import_dom.getDocumentElement)(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = (0, import_dom.getDocumentElement)(offsetParent);
  const topLayer = elements ? (0, import_dom.isTopLayer)(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = (0, import_utils.createCoords)(1);
  const offsets = (0, import_utils.createCoords)(0);
  const isOffsetParentAnElement = (0, import_dom.isHTMLElement)(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, import_dom.getNodeName)(offsetParent) !== "body" || (0, import_dom.isOverflowElement)(documentElement)) {
      scroll = (0, import_dom.getNodeScroll)(offsetParent);
    }
    if ((0, import_dom.isHTMLElement)(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : (0, import_utils.createCoords)(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = (0, import_dom.getDocumentElement)(element);
  const scroll = (0, import_dom.getNodeScroll)(element);
  const body = element.ownerDocument.body;
  const width = (0, import_utils.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = (0, import_utils.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if ((0, import_dom.getComputedStyle)(body).direction === "rtl") {
    x += (0, import_utils.max)(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = (0, import_dom.getWindow)(element);
  const html = (0, import_dom.getDocumentElement)(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = (0, import_dom.isWebKit)();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
var absoluteOrFixed = /* @__PURE__ */new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = (0, import_dom.isHTMLElement)(element) ? getScale(element) : (0, import_utils.createCoords)(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect((0, import_dom.getDocumentElement)(element));
  } else if ((0, import_dom.isElement)(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return (0, import_core.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = (0, import_dom.getParentNode)(element);
  if (parentNode === stopNode || !(0, import_dom.isElement)(parentNode) || (0, import_dom.isLastTraversableNode)(parentNode)) {
    return false;
  }
  return (0, import_dom.getComputedStyle)(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = (0, import_dom.getOverflowAncestors)(element, [], false).filter(el => (0, import_dom.isElement)(el) && (0, import_dom.getNodeName)(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = (0, import_dom.getComputedStyle)(element).position === "fixed";
  let currentNode = elementIsFixed ? (0, import_dom.getParentNode)(element) : element;
  while ((0, import_dom.isElement)(currentNode) && !(0, import_dom.isLastTraversableNode)(currentNode)) {
    const computedStyle = (0, import_dom.getComputedStyle)(currentNode);
    const currentNodeIsContaining = (0, import_dom.isContainingBlock)(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, import_dom.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = (0, import_dom.getParentNode)(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? (0, import_dom.isTopLayer)(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = (0, import_utils.max)(rect.top, accRect.top);
    accRect.right = (0, import_utils.min)(rect.right, accRect.right);
    accRect.bottom = (0, import_utils.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, import_utils.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = (0, import_dom.isHTMLElement)(offsetParent);
  const documentElement = (0, import_dom.getDocumentElement)(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = (0, import_utils.createCoords)(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, import_dom.getNodeName)(offsetParent) !== "body" || (0, import_dom.isOverflowElement)(documentElement)) {
      scroll = (0, import_dom.getNodeScroll)(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, import_utils.createCoords)(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return (0, import_dom.getComputedStyle)(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!(0, import_dom.isHTMLElement)(element) || (0, import_dom.getComputedStyle)(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if ((0, import_dom.getDocumentElement)(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = (0, import_dom.getWindow)(element);
  if ((0, import_dom.isTopLayer)(element)) {
    return win;
  }
  if (!(0, import_dom.isHTMLElement)(element)) {
    let svgOffsetParent = (0, import_dom.getParentNode)(element);
    while (svgOffsetParent && !(0, import_dom.isLastTraversableNode)(svgOffsetParent)) {
      if ((0, import_dom.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = (0, import_dom.getParentNode)(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && (0, import_dom.isTableElement)(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (0, import_dom.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0, import_dom.isContainingBlock)(offsetParent)) {
    return win;
  }
  return offsetParent || (0, import_dom.getContainingBlock)(element) || win;
}
var getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return (0, import_dom.getComputedStyle)(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: import_dom.getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: import_dom.isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = (0, import_dom.getDocumentElement)(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = (0, import_utils.floor)(top);
    const insetRight = (0, import_utils.floor)(root.clientWidth - (left + width));
    const insetBottom = (0, import_utils.floor)(root.clientHeight - (top + height));
    const insetLeft = (0, import_utils.floor)(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: (0, import_utils.max)(0, (0, import_utils.min)(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? (0, import_dom.getOverflowAncestors)(referenceEl) : []), ...(0, import_dom.getOverflowAncestors)(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var detectOverflow = import_core.detectOverflow;
var offset = import_core.offset;
var autoPlacement = import_core.autoPlacement;
var shift = import_core.shift;
var flip = import_core.flip;
var size = import_core.size;
var hide = import_core.hide;
var arrow = import_core.arrow;
var inline = import_core.inline;
var limitShift = import_core.limitShift;
var computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return (0, import_core.computePosition)(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmbG9hdGluZy11aS9kb20uMS43LjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL2RvbS9kaXN0L2Zsb2F0aW5nLXVpLmRvbS5tanMiXSwibmFtZXMiOlsiZG9tXzFfN18zX2V4cG9ydHMiLCJfX2V4cG9ydCIsImFycm93IiwiYXV0b1BsYWNlbWVudCIsImF1dG9VcGRhdGUiLCJjb21wdXRlUG9zaXRpb24iLCJkZXRlY3RPdmVyZmxvdyIsImZsaXAiLCJnZXRPdmVyZmxvd0FuY2VzdG9ycyIsImltcG9ydF9kb20yIiwiaGlkZSIsImlubGluZSIsImxpbWl0U2hpZnQiLCJvZmZzZXQiLCJwbGF0Zm9ybSIsInNoaWZ0Iiwic2l6ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfdXRpbHMiLCJpbXBvcnRfZG9tIiwiZ2V0Q3NzRGltZW5zaW9ucyIsImVsZW1lbnQiLCJjc3MiLCJnZXRDb21wdXRlZFN0eWxlIiwid2lkdGgiLCJwYXJzZUZsb2F0IiwiaGVpZ2h0IiwiaGFzT2Zmc2V0IiwiaXNIVE1MRWxlbWVudCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0Iiwic2hvdWxkRmFsbGJhY2siLCJyb3VuZCIsIiQiLCJ1bndyYXBFbGVtZW50IiwiaXNFbGVtZW50IiwiY29udGV4dEVsZW1lbnQiLCJnZXRTY2FsZSIsImRvbUVsZW1lbnQiLCJjcmVhdGVDb29yZHMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsInkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIm5vT2Zmc2V0cyIsImdldFZpc3VhbE9mZnNldHMiLCJ3aW4iLCJnZXRXaW5kb3ciLCJpc1dlYktpdCIsInZpc3VhbFZpZXdwb3J0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInNob3VsZEFkZFZpc3VhbE9mZnNldHMiLCJpc0ZpeGVkIiwiZmxvYXRpbmdPZmZzZXRQYXJlbnQiLCJpbmNsdWRlU2NhbGUiLCJpc0ZpeGVkU3RyYXRlZ3kiLCJvZmZzZXRQYXJlbnQiLCJjbGllbnRSZWN0Iiwic2NhbGUiLCJ2aXN1YWxPZmZzZXRzIiwibGVmdCIsInRvcCIsIm9mZnNldFdpbiIsImN1cnJlbnRXaW4iLCJjdXJyZW50SUZyYW1lIiwiZ2V0RnJhbWVFbGVtZW50IiwiaWZyYW1lU2NhbGUiLCJpZnJhbWVSZWN0IiwiY2xpZW50TGVmdCIsInBhZGRpbmdMZWZ0IiwiY2xpZW50VG9wIiwicGFkZGluZ1RvcCIsInJlY3RUb0NsaWVudFJlY3QiLCJnZXRXaW5kb3dTY3JvbGxCYXJYIiwibGVmdFNjcm9sbCIsImdldE5vZGVTY3JvbGwiLCJzY3JvbGxMZWZ0IiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwiZ2V0SFRNTE9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbCIsImlnbm9yZVNjcm9sbGJhclgiLCJodG1sUmVjdCIsInNjcm9sbFRvcCIsImNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0IiwiX3JlZiIsImVsZW1lbnRzIiwic3RyYXRlZ3kiLCJ0b3BMYXllciIsImlzVG9wTGF5ZXIiLCJmbG9hdGluZyIsIm9mZnNldHMiLCJpc09mZnNldFBhcmVudEFuRWxlbWVudCIsImdldE5vZGVOYW1lIiwiaXNPdmVyZmxvd0VsZW1lbnQiLCJvZmZzZXRSZWN0IiwiaHRtbE9mZnNldCIsImdldENsaWVudFJlY3RzIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RG9jdW1lbnRSZWN0IiwiaHRtbCIsImJvZHkiLCJvd25lckRvY3VtZW50IiwibWF4Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImRpcmVjdGlvbiIsImdldFZpZXdwb3J0UmVjdCIsInZpc3VhbFZpZXdwb3J0QmFzZWQiLCJhYnNvbHV0ZU9yRml4ZWQiLCJTZXQiLCJnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdCIsImdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvciIsImNsaXBwaW5nQW5jZXN0b3IiLCJoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IiLCJzdG9wTm9kZSIsInBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiaXNMYXN0VHJhdmVyc2FibGVOb2RlIiwicG9zaXRpb24iLCJnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnMiLCJjYWNoZSIsImNhY2hlZFJlc3VsdCIsImdldCIsInJlc3VsdCIsImZpbHRlciIsImVsIiwiY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUiLCJlbGVtZW50SXNGaXhlZCIsImN1cnJlbnROb2RlIiwiY29tcHV0ZWRTdHlsZSIsImN1cnJlbnROb2RlSXNDb250YWluaW5nIiwiaXNDb250YWluaW5nQmxvY2siLCJzaG91bGREcm9wQ3VycmVudE5vZGUiLCJoYXMiLCJhbmNlc3RvciIsInNldCIsImdldENsaXBwaW5nUmVjdCIsImJvdW5kYXJ5Iiwicm9vdEJvdW5kYXJ5IiwiZWxlbWVudENsaXBwaW5nQW5jZXN0b3JzIiwiX2MiLCJjb25jYXQiLCJjbGlwcGluZ0FuY2VzdG9ycyIsImZpcnN0Q2xpcHBpbmdBbmNlc3RvciIsImNsaXBwaW5nUmVjdCIsInJlZHVjZSIsImFjY1JlY3QiLCJyaWdodCIsIm1pbiIsImJvdHRvbSIsImdldERpbWVuc2lvbnMiLCJnZXRSZWN0UmVsYXRpdmVUb09mZnNldFBhcmVudCIsInNldExlZnRSVExTY3JvbGxiYXJPZmZzZXQiLCJpc1N0YXRpY1Bvc2l0aW9uZWQiLCJnZXRUcnVlT2Zmc2V0UGFyZW50IiwicG9seWZpbGwiLCJyYXdPZmZzZXRQYXJlbnQiLCJnZXRPZmZzZXRQYXJlbnQiLCJzdmdPZmZzZXRQYXJlbnQiLCJpc1RhYmxlRWxlbWVudCIsImdldENvbnRhaW5pbmdCbG9jayIsImdldEVsZW1lbnRSZWN0cyIsImRhdGEiLCJnZXRPZmZzZXRQYXJlbnRGbiIsImdldERpbWVuc2lvbnNGbiIsImZsb2F0aW5nRGltZW5zaW9ucyIsInJlZmVyZW5jZSIsImlzUlRMIiwicmVjdHNBcmVFcXVhbCIsImEiLCJiIiwib2JzZXJ2ZU1vdmUiLCJvbk1vdmUiLCJpbyIsInRpbWVvdXRJZCIsInJvb3QiLCJjbGVhbnVwIiwiX2lvIiwiY2xlYXJUaW1lb3V0IiwiZGlzY29ubmVjdCIsInJlZnJlc2giLCJza2lwIiwidGhyZXNob2xkIiwiZWxlbWVudFJlY3RGb3JSb290TWFyZ2luIiwiaW5zZXRUb3AiLCJmbG9vciIsImluc2V0UmlnaHQiLCJpbnNldEJvdHRvbSIsImluc2V0TGVmdCIsInJvb3RNYXJnaW4iLCJvcHRpb25zIiwiaXNGaXJzdFVwZGF0ZSIsImhhbmRsZU9ic2VydmUiLCJlbnRyaWVzIiwicmF0aW8iLCJpbnRlcnNlY3Rpb25SYXRpbyIsInNldFRpbWVvdXQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9lIiwib2JzZXJ2ZSIsInVwZGF0ZSIsImFuY2VzdG9yU2Nyb2xsIiwiYW5jZXN0b3JSZXNpemUiLCJlbGVtZW50UmVzaXplIiwiUmVzaXplT2JzZXJ2ZXIiLCJsYXlvdXRTaGlmdCIsImFuaW1hdGlvbkZyYW1lIiwicmVmZXJlbmNlRWwiLCJhbmNlc3RvcnMiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJjbGVhbnVwSW8iLCJyZW9ic2VydmVGcmFtZSIsInJlc2l6ZU9ic2VydmVyIiwiZmlyc3RFbnRyeSIsInRhcmdldCIsInVub2JzZXJ2ZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3Jlc2l6ZU9ic2VydmVyIiwiZnJhbWVJZCIsInByZXZSZWZSZWN0IiwiZnJhbWVMb29wIiwibmV4dFJlZlJlY3QiLCJfcmVzaXplT2JzZXJ2ZXIyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1hcCIsIm1lcmdlZE9wdGlvbnMiLCJwbGF0Zm9ybVdpdGhDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QzlCO0VBQ0Y7QUFDRjtBQVVBLElBQU1sTyxjQUFBLEdBQWlCYyxXQUFBLENBQUFkLGNBQUE7QUFTdkIsSUFBTU8sTUFBQSxHQUFTTyxXQUFBLENBQUFQLE1BQUE7QUFRZixJQUFNVixhQUFBLEdBQWdCaUIsV0FBQSxDQUFBakIsYUFBQTtBQU90QixJQUFNWSxLQUFBLEdBQVFLLFdBQUEsQ0FBQUwsS0FBQTtBQVFkLElBQU1SLElBQUEsR0FBT2EsV0FBQSxDQUFBYixJQUFBO0FBUWIsSUFBTVMsSUFBQSxHQUFPSSxXQUFBLENBQUFKLElBQUE7QUFPYixJQUFNTixJQUFBLEdBQU9VLFdBQUEsQ0FBQVYsSUFBQTtBQU9iLElBQU1SLEtBQUEsR0FBUWtCLFdBQUEsQ0FBQWxCLEtBQUE7QUFPZCxJQUFNUyxNQUFBLEdBQVNTLFdBQUEsQ0FBQVQsTUFBQTtBQUtmLElBQU1DLFVBQUEsR0FBYVEsV0FBQSxDQUFBUixVQUFBO0FBTW5CLElBQU1QLGVBQUEsR0FBa0JBLENBQUM0SyxTQUFBLEVBQVdoRixRQUFBLEVBQVV3RyxPQUFBLEtBQVk7RUFJeEQsTUFBTXRFLEtBQUEsR0FBUSxtQkFBSTJHLEdBQUEsQ0FBSTtFQUN0QixNQUFNQyxhQUFBLEdBQWdCO0lBQ3BCak8sUUFBQTtJQUNBLEdBQUcyTDtFQUNMO0VBQ0EsTUFBTXVDLGlCQUFBLEdBQW9CO0lBQ3hCLEdBQUdELGFBQUEsQ0FBY2pPLFFBQUE7SUFDakJ5SSxFQUFBLEVBQUlwQjtFQUNOO0VBQ0EsV0FBTy9HLFdBQUEsQ0FBQWYsZUFBQSxFQUFrQjRLLFNBQUEsRUFBV2hGLFFBQUEsRUFBVTtJQUM1QyxHQUFHOEksYUFBQTtJQUNIak8sUUFBQSxFQUFVa087RUFDWixDQUFDO0FBQ0giLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9