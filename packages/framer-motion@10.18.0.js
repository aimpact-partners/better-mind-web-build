System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["framer-motion","10.18.0"],["@emotion/memoize","0.7.4"],["@emotion/is-prop-valid","0.8.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.cjs.js
var require_memoize_browser_cjs = __commonJS({
  "node_modules/framer-motion/node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function memoize(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === void 0) cache[arg] = fn(arg);
        return cache[arg];
      };
    }
    exports.default = memoize;
  }
});

// node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js
var require_is_prop_valid_browser_cjs = __commonJS({
  "node_modules/framer-motion/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var memoize = _interopDefault(require_memoize_browser_cjs());
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var index = memoize(function (prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    });
    exports.default = index;
  }
});

// .beyond/uimport/framer-motion.10.18.0.js
var framer_motion_10_18_0_exports = {};
__export(framer_motion_10_18_0_exports, {
  AnimatePresence: () => AnimatePresence,
  AnimateSharedLayout: () => AnimateSharedLayout,
  DeprecatedLayoutGroupContext: () => DeprecatedLayoutGroupContext,
  DragControls: () => DragControls,
  FlatTree: () => FlatTree,
  LayoutGroup: () => LayoutGroup,
  LayoutGroupContext: () => LayoutGroupContext,
  LazyMotion: () => LazyMotion,
  MotionConfig: () => MotionConfig,
  MotionConfigContext: () => MotionConfigContext,
  MotionContext: () => MotionContext,
  MotionGlobalConfig: () => MotionGlobalConfig,
  MotionValue: () => MotionValue,
  PresenceContext: () => PresenceContext,
  Reorder: () => Reorder,
  SwitchLayoutGroupContext: () => SwitchLayoutGroupContext,
  VisualElement: () => VisualElement,
  addPointerEvent: () => addPointerEvent,
  addPointerInfo: () => addPointerInfo,
  addScaleCorrector: () => addScaleCorrector,
  animate: () => animate,
  animateValue: () => animateValue,
  animateVisualElement: () => animateVisualElement,
  animationControls: () => animationControls,
  animations: () => animations,
  anticipate: () => anticipate,
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  buildTransform: () => buildTransform,
  calcLength: () => calcLength,
  cancelFrame: () => cancelFrame,
  cancelSync: () => cancelSync,
  checkTargetForNewValues: () => checkTargetForNewValues,
  circIn: () => circIn,
  circInOut: () => circInOut,
  circOut: () => circOut,
  clamp: () => clamp,
  color: () => color,
  complex: () => complex,
  createBox: () => createBox,
  createDomMotionComponent: () => createDomMotionComponent,
  createMotionComponent: () => createMotionComponent,
  createScopedAnimate: () => createScopedAnimate,
  cubicBezier: () => cubicBezier,
  delay: () => delay,
  disableInstantTransitions: () => disableInstantTransitions,
  distance: () => distance,
  distance2D: () => distance2D,
  domAnimation: () => domAnimation,
  domMax: () => domMax,
  easeIn: () => easeIn,
  easeInOut: () => easeInOut,
  easeOut: () => easeOut,
  filterProps: () => filterProps,
  frame: () => frame,
  frameData: () => frameData,
  inView: () => inView,
  interpolate: () => interpolate,
  invariant: () => invariant,
  isBrowser: () => isBrowser,
  isDragActive: () => isDragActive,
  isMotionComponent: () => isMotionComponent,
  isMotionValue: () => isMotionValue,
  isValidMotionProp: () => isValidMotionProp,
  m: () => m,
  makeUseVisualState: () => makeUseVisualState,
  mirrorEasing: () => mirrorEasing,
  mix: () => mix,
  motion: () => motion,
  motionValue: () => motionValue,
  optimizedAppearDataAttribute: () => optimizedAppearDataAttribute,
  pipe: () => pipe,
  progress: () => progress,
  px: () => px,
  resolveMotionValue: () => resolveMotionValue,
  reverseEasing: () => reverseEasing,
  scroll: () => scroll,
  scrollInfo: () => scrollInfo,
  spring: () => spring,
  stagger: () => stagger,
  startOptimizedAppearAnimation: () => startOptimizedAppearAnimation,
  steps: () => steps,
  sync: () => sync,
  transform: () => transform,
  unwrapMotionComponent: () => unwrapMotionComponent,
  useAnimate: () => useAnimate,
  useAnimation: () => useAnimation,
  useAnimationControls: () => useAnimationControls,
  useAnimationFrame: () => useAnimationFrame,
  useCycle: () => useCycle,
  useDeprecatedAnimatedState: () => useAnimatedState,
  useDeprecatedInvertedScale: () => useInvertedScale,
  useDomEvent: () => useDomEvent,
  useDragControls: () => useDragControls,
  useElementScroll: () => useElementScroll,
  useForceUpdate: () => useForceUpdate,
  useInView: () => useInView,
  useInstantLayoutTransition: () => useInstantLayoutTransition,
  useInstantTransition: () => useInstantTransition,
  useIsPresent: () => useIsPresent,
  useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect,
  useMotionTemplate: () => useMotionTemplate,
  useMotionValue: () => useMotionValue,
  useMotionValueEvent: () => useMotionValueEvent,
  usePresence: () => usePresence,
  useReducedMotion: () => useReducedMotion,
  useReducedMotionConfig: () => useReducedMotionConfig,
  useResetProjection: () => useResetProjection,
  useScroll: () => useScroll,
  useSpring: () => useSpring,
  useTime: () => useTime,
  useTransform: () => useTransform,
  useUnmountEffect: () => useUnmountEffect,
  useVelocity: () => useVelocity,
  useViewportScroll: () => useViewportScroll,
  useWillChange: () => useWillChange,
  visualElementStore: () => visualElementStore,
  warning: () => warning,
  wrap: () => wrap
});
module.exports = __toCommonJS(framer_motion_10_18_0_exports);

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react = require("react@18.3.1");
var MotionConfigContext = (0, import_react.createContext)({
  transformPagePoint: p => p,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react2 = require("react@18.3.1");
var MotionContext = (0, import_react2.createContext)({});

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react3 = require("react@18.3.1");
var PresenceContext = (0, import_react3.createContext)(null);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof document !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react4 = require("react@18.3.1");
var useIsomorphicLayoutEffect = isBrowser ? import_react4.useLayoutEffect : import_react4.useEffect;

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react5 = require("react@18.3.1");
var LazyContext = (0, import_react5.createContext)({
  strict: false
});

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = str => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react6 = require("react@18.3.1");
function useVisualElement(Component2, visualState, props, createVisualElement2) {
  const {
    visualElement: parent
  } = (0, import_react6.useContext)(MotionContext);
  const lazyContext = (0, import_react6.useContext)(LazyContext);
  const presenceContext = (0, import_react6.useContext)(PresenceContext);
  const reducedMotionConfig = (0, import_react6.useContext)(MotionConfigContext).reducedMotion;
  const visualElementRef = (0, import_react6.useRef)();
  createVisualElement2 = createVisualElement2 || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement2) {
    visualElementRef.current = createVisualElement2(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  (0, import_react6.useInsertionEffect)(() => {
    visualElement && visualElement.update(props, presenceContext);
  });
  const wantsHandoff = (0, import_react6.useRef)(Boolean(props[optimizedAppearDataAttribute] && !window.HandoffComplete));
  useIsomorphicLayoutEffect(() => {
    if (!visualElement) return;
    visualElement.render();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  (0, import_react6.useEffect)(() => {
    if (!visualElement) return;
    visualElement.updateFeatures();
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      wantsHandoff.current = false;
      window.HandoffComplete = true;
    }
  });
  return visualElement;
}

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react7 = require("react@18.3.1");
function useMotionRef(visualState, visualElement, externalRef) {
  return (0, import_react7.useCallback)(instance => {
    instance && visualState.mount && visualState.mount(instance);
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement]);
}

// node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
var variantProps = ["initial", ...variantPriorityOrder];

// node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some(name => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const {
      initial,
      animate: animate2
    } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react8 = require("react@18.3.1");
function useCreateMotionContext(props) {
  const {
    initial,
    animate: animate2
  } = getCurrentTreeVariants(props, (0, import_react8.useContext)(MotionContext));
  return (0, import_react8.useMemo)(() => ({
    initial,
    animate: animate2
  }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: props => featureProps[key].some(name => !!props[name])
  };
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react9 = require("react@18.3.1");
var LayoutGroupContext = (0, import_react9.createContext)({});

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react10 = require("react@18.3.1");
var SwitchLayoutGroupContext = (0, import_react10.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react11 = require("react@18.3.1");
function createMotionComponent({
  preloadedFeatures: preloadedFeatures2,
  createVisualElement: createVisualElement2,
  useRender,
  useVisualState: useVisualState2,
  Component: Component2
}) {
  preloadedFeatures2 && loadFeatures(preloadedFeatures2);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...(0, import_react11.useContext)(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const {
      isStatic
    } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState2(props, isStatic);
    if (!isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement2);
      const initialLayoutGroupConfig = (0, import_react11.useContext)(SwitchLayoutGroupContext);
      const isStrict = (0, import_react11.useContext)(LazyContext).strict;
      if (context.visualElement) {
        MeasureLayout2 = context.visualElement.loadFeatures(configAndProps, isStrict, preloadedFeatures2, initialLayoutGroupConfig);
      }
    }
    return React.createElement(MotionContext.Provider, {
      value: context
    }, MeasureLayout2 && context.visualElement ? React.createElement(MeasureLayout2, {
      visualElement: context.visualElement,
      ...configAndProps
    }) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement));
  }
  const ForwardRefComponent = (0, import_react11.forwardRef)(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component2;
  return ForwardRefComponent;
}
function useLayoutId({
  layoutId
}) {
  const layoutGroupId = (0, import_react11.useContext)(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
function createMotionProxy(createConfig) {
  function custom(Component2, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component2, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  const componentCache = /* @__PURE__ */new Map();
  return new Proxy(custom, {
    get: (_target, key) => {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (typeof Component2 !== "string" || Component2.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component2) > -1 || /[A-Z]/.test(Component2)) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
var transformProps = new Set(transformPropOrder);

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, {
  layout: layout2,
  layoutId
}) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = value => Boolean(value && value.getVelocity);

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(transform2, {
  enableHardwareAcceleration = true,
  allowTransformNone = true
}, transformIsDefault, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    if (transform2[key] !== void 0) {
      const transformName = translateAlias[key] || key;
      transformString += `${transformName}(${transform2[key]}) `;
    }
  }
  if (enableHardwareAcceleration && !transform2.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = token => key => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = checkStringStartsWith("--");
var isCSSVariableToken = checkStringStartsWith("var(--");
var cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = (min, max, v) => Math.min(Math.max(v, min), max);

// node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: v => typeof v === "number",
  parse: parseFloat,
  transform: v => v
};
var alpha = {
  ...number,
  transform: v => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/framer-motion/dist/es/value/types/utils.mjs
var sanitize = v => Math.round(v * 1e5) / 1e5;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

// node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = unit => ({
  test: v => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: v => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: v => percent.parse(v) / 100,
  transform: v => percent.transform(v * 100)
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const {
    style,
    vars,
    transform: transform2,
    transformOrigin
  } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  let transformIsNone = true;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    }
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      hasTransform2 = true;
      transform2[key] = valueAsType;
      if (!transformIsNone) continue;
      if (value !== (valueType.default || 0)) transformIsNone = false;
    } else if (key.startsWith("origin")) {
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const {
      originX = "50%",
      originY = "50%",
      originZ = 0
    } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react12 = require("react@18.3.1");
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({
  transformTemplate
}, visualState, isStatic) {
  return (0, import_react12.useMemo)(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, {
      enableHardwareAcceleration: !isStatic
    }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
  const htmlProps = {};
  const style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = key => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp) return;
  shouldForward = key => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require_is_prop_valid_browser_cjs().default);
} catch (_a) {}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object") continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys2.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  ...latest
}, options, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state, latest, options, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const {
    attrs,
    style,
    dimensions
  } = state;
  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0) attrs.x = attrX;
  if (attrY !== void 0) attrs.y = attrY;
  if (attrScale !== void 0) attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = tag => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react13 = require("react@18.3.1");
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = (0, import_react13.useMemo)(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, {
      enableHardwareAcceleration: false
    }, isSVGTag(Component2), props.transformTemplate);
    return {
      ...state.attrs,
      style: {
        ...state.style
      }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = {
      ...rawStyles,
      ...visualProps.style
    };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react14 = require("react@18.3.1");
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component2, props, ref, {
    latestValues
  }, isStatic) => {
    const useVisualProps = isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
    const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps);
    const elementProps = {
      ...filteredProps,
      ...visualProps,
      ref
    };
    const {
      children
    } = props;
    const renderedChildren = (0, import_react14.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react14.createElement)(Component2, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, {
  style,
  vars
}, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps) {
  const {
    style
  } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react15 = require("react@18.3.1");
function useConstant(init) {
  const ref = (0, import_react15.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = v => {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = v => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = v => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react16 = require("react@18.3.1");
function makeState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3,
  createRenderState,
  onMount
}, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = instance => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = config => (props, isStatic) => {
  const context = (0, import_react16.useContext)(MotionContext);
  const presenceContext = (0, import_react16.useContext)(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let {
    initial,
    animate: animate2
  } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0) initial = context.initial;
    if (animate2 === void 0) animate2 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(definition => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      const {
        transitionEnd,
        transition,
        ...target
      } = resolved;
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd) values[key] = transitionEnd[key];
    });
  }
  return values;
}

// node_modules/framer-motion/dist/es/utils/noop.mjs
var noop = any => any;

// node_modules/framer-motion/dist/es/frameloop/render-step.mjs
var Queue = class {
  constructor() {
    this.order = [];
    this.scheduled = /* @__PURE__ */new Set();
  }
  add(process2) {
    if (!this.scheduled.has(process2)) {
      this.scheduled.add(process2);
      this.order.push(process2);
      return true;
    }
  }
  remove(process2) {
    const index = this.order.indexOf(process2);
    if (index !== -1) {
      this.order.splice(index, 1);
      this.scheduled.delete(process2);
    }
  }
  clear() {
    this.order.length = 0;
    this.scheduled.clear();
  }
};
function createRenderStep(runNextFrame) {
  let thisFrame = new Queue();
  let nextFrame = new Queue();
  let numToRun = 0;
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive) toKeepAlive.add(callback);
      if (queue.add(callback) && addToCurrentFrame && isProcessing) {
        numToRun = thisFrame.order.length;
      }
      return callback;
    },
    cancel: callback => {
      nextFrame.remove(callback);
      toKeepAlive.delete(callback);
    },
    process: frameData2 => {
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      nextFrame.clear();
      numToRun = thisFrame.order.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = thisFrame.order[i];
          callback(frameData2);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
          }
        }
      }
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = ["prepare", "read", "update", "preRender", "render", "postRender"];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const steps2 = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(() => runNextFrame = true);
    return acc;
  }, {});
  const processStep = stepId => steps2[stepId].process(state);
  const processBatch = () => {
    const timestamp = performance.now();
    runNextFrame = false;
    state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    state.timestamp = timestamp;
    state.isProcessing = true;
    stepsOrder.forEach(processStep);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps2[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame) wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = process2 => stepsOrder.forEach(key => steps2[key].cancel(process2));
  return {
    schedule,
    cancel,
    state,
    steps: steps2
  };
}

// node_modules/framer-motion/dist/es/frameloop/frame.mjs
var {
  schedule: frame,
  cancel: cancelFrame,
  state: frameData,
  steps
} = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, {
      renderState,
      latestValues
    }) => {
      frame.read(() => {
        try {
          renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
        } catch (e) {
          renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      });
      frame.render(() => {
        buildSVGAttrs(renderState, latestValues, {
          enableHardwareAcceleration: false
        }, isSVGTag(instance.tagName), props.transformTemplate);
        renderSVG(instance, renderState);
      });
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component2, {
  forwardMotionProps = false
}, preloadedFeatures2, createVisualElement2) {
  const baseConfig = isSVGComponent(Component2) ? svgMotionConfig : htmlMotionConfig;
  return {
    ...baseConfig,
    preloadedFeatures: preloadedFeatures2,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement: createVisualElement2,
    Component: Component2
  };
}

// node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = {
  passive: true
}) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

// node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
var isPrimaryPointer = event => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event, pointType = "page") {
  return {
    point: {
      x: event[pointType + "X"],
      y: event[pointType + "Y"]
    }
  };
}
var addPointerInfo = handler => {
  return event => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => v => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal) openHorizontal();
      if (openVertical) openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock) return true;
  openGestureLock();
  return false;
}

// node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {}
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function addHoverEvent(node, isActive) {
  const eventName = "pointer" + (isActive ? "enter" : "leave");
  const callbackName = "onHover" + (isActive ? "Start" : "End");
  const handleEvent = (event, info) => {
    if (event.pointerType === "touch" || isDragActive()) return;
    const props = node.getProps();
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", isActive);
    }
    if (props[callbackName]) {
      frame.update(() => props[callbackName](event, info));
    }
  };
  return addPointerEvent(node.current, eventName, handleEvent, {
    passive: !node.getProps()[callbackName]
  });
}
var HoverGesture = class extends Feature {
  mount() {
    this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/framer-motion/dist/es/gestures/press.mjs
function fireSyntheticPointerEvent(name, handler) {
  if (!handler) return;
  const syntheticPointerEvent = new PointerEvent("pointer" + name);
  handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removeStartListeners = noop;
    this.removeEndListeners = noop;
    this.removeAccessibleListeners = noop;
    this.startPointerPress = (startEvent, startInfo) => {
      if (this.isPressing) return;
      this.removeEndListeners();
      const props = this.node.getProps();
      const endPointerPress = (endEvent, endInfo) => {
        if (!this.checkPressEnd()) return;
        const {
          onTap,
          onTapCancel,
          globalTapTarget
        } = this.node.getProps();
        frame.update(() => {
          !globalTapTarget && !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
        });
      };
      const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, {
        passive: !(props.onTap || props["onPointerUp"])
      });
      const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), {
        passive: !(props.onTapCancel || props["onPointerCancel"])
      });
      this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
      this.startPress(startEvent, startInfo);
    };
    this.startAccessiblePress = () => {
      const handleKeydown = keydownEvent => {
        if (keydownEvent.key !== "Enter" || this.isPressing) return;
        const handleKeyup = keyupEvent => {
          if (keyupEvent.key !== "Enter" || !this.checkPressEnd()) return;
          fireSyntheticPointerEvent("up", (event, info) => {
            const {
              onTap
            } = this.node.getProps();
            if (onTap) {
              frame.update(() => onTap(event, info));
            }
          });
        };
        this.removeEndListeners();
        this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
        fireSyntheticPointerEvent("down", (event, info) => {
          this.startPress(event, info);
        });
      };
      const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
      const handleBlur = () => {
        if (!this.isPressing) return;
        fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
      };
      const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
      this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    };
  }
  startPress(event, info) {
    this.isPressing = true;
    const {
      onTapStart,
      whileTap
    } = this.node.getProps();
    if (whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", true);
    }
    if (onTapStart) {
      frame.update(() => onTapStart(event, info));
    }
  }
  checkPressEnd() {
    this.removeEndListeners();
    this.isPressing = false;
    const props = this.node.getProps();
    if (props.whileTap && this.node.animationState) {
      this.node.animationState.setActive("whileTap", false);
    }
    return !isDragActive();
  }
  cancelPress(event, info) {
    if (!this.checkPressEnd()) return;
    const {
      onTapCancel
    } = this.node.getProps();
    if (onTapCancel) {
      frame.update(() => onTapCancel(event, info));
    }
  }
  mount() {
    const props = this.node.getProps();
    const removePointerListener = addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(props.onTapStart || props["onPointerStart"])
    });
    const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
  }
  unmount() {
    this.removeStartListeners();
    this.removeEndListeners();
    this.removeAccessibleListeners();
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */new WeakMap();
var observers = /* @__PURE__ */new WeakMap();
var fireObserverCallback = entry => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = entries => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({
  root,
  ...options
}) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
      root,
      ...options
    });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const {
      viewport = {}
    } = this.node.getProps();
    const {
      root,
      margin: rootMargin,
      amount = "some",
      once
    } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = entry => {
      const {
        isIntersecting
      } = entry;
      if (this.isInView === isIntersecting) return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const {
        onViewportEnter,
        onViewportLeave
      } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined") return;
    const {
      props,
      prevProps
    } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {}
};
function hasViewportOptionChanged({
  viewport = {}
}, {
  viewport: prevViewport = {}
} = {}) {
  return name => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  const prevLength = prev.length;
  if (prevLength !== next.length) return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function getCurrent(visualElement) {
  const current = {};
  visualElement.values.forEach((value, key) => current[key] = value.get());
  return current;
}
function getVelocity(visualElement) {
  const velocity = {};
  visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

// node_modules/framer-motion/dist/es/utils/errors.mjs
var warning = noop;
var invariant = noop;
if (true) {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = seconds => seconds * 1e3;
var millisecondsToSeconds = milliseconds => milliseconds / 1e3;

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = easing => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function isWaapiSupportedEasing(easing) {
  return Boolean(!easing || typeof easing === "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing) {
  if (!easing) return void 0;
  return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
function animateStyle(element, valueName, keyframes2, {
  delay: delay2 = 0,
  duration,
  repeat = 0,
  repeatType = "loop",
  ease: ease2,
  times
} = {}) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times) keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2);
  if (Array.isArray(easing)) keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
function getFinalKeyframe(keyframes2, {
  repeat,
  repeatType = "loop"
}) {
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : keyframes2.length - 1;
  return keyframes2[index];
}

// node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return noop;
  const getTForX = aX => binarySubdivide(aX, 0, 1, mX1, mX2);
  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = cubicBezier(0.42, 0, 1, 1);
var easeOut = cubicBezier(0, 0, 0.58, 1);
var easeInOut = cubicBezier(0.42, 0, 0.58, 1);

// node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = ease2 => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = easing => p => 1 - easing(1 - p);

// node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = p => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);

// node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);

// node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = p => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// node_modules/framer-motion/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = definition => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => v => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => v => {
  if (!isString(v)) return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = v => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: v => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({
    red,
    green,
    blue,
    alpha: alpha$1 = 1
  }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({
    hue,
    saturation,
    lightness,
    alpha: alpha$1 = 1
  }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
  test: v => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: v => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: v => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/framer-motion/dist/es/utils/mix.mjs
var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;

// node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({
  hue,
  saturation,
  lightness,
  alpha: alpha2
}) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/framer-motion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = v => colorTypes.find(type => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  invariant(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  const blended = {
    ...fromRGBA
  };
  return v => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/framer-motion/dist/es/value/types/complex/index.mjs
function test(v) {
  var _a, _b;
  return isNaN(v) && isString(v) && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var cssVarTokeniser = {
  regex: cssVariableRegex,
  countKey: "Vars",
  token: "${v}",
  parse: noop
};
var colorTokeniser = {
  regex: colorRegex,
  countKey: "Colors",
  token: "${c}",
  parse: color.parse
};
var numberTokeniser = {
  regex: floatRegex,
  countKey: "Numbers",
  token: "${n}",
  parse: number.parse
};
function tokenise(info, {
  regex,
  countKey,
  token,
  parse
}) {
  const matches = info.tokenised.match(regex);
  if (!matches) return;
  info["num" + countKey] = matches.length;
  info.tokenised = info.tokenised.replace(regex, token);
  info.values.push(...matches.map(parse));
}
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const info = {
    value: originalValue,
    tokenised: originalValue,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  if (info.value.includes("var(--")) tokenise(info, cssVarTokeniser);
  tokenise(info, colorTokeniser);
  tokenise(info, numberTokeniser);
  return info;
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const {
    values,
    numColors,
    numVars,
    tokenised
  } = analyseComplexValue(source);
  const numValues = values.length;
  return v => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      if (i < numVars) {
        output = output.replace(cssVarTokeniser.token, v[i]);
      } else if (i < numVars + numColors) {
        output = output.replace(colorTokeniser.token, color.transform(v[i]));
      } else {
        output = output.replace(numberTokeniser.token, sanitize(v[i]));
      }
    }
    return output;
  };
}
var convertNumbersToZero = v => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/framer-motion/dist/es/utils/mix-complex.mjs
var mixImmediate = (origin, target) => p => `${p > 0 ? target : origin}`;
function getMixer(origin, target) {
  if (typeof origin === "number") {
    return v => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return origin.startsWith("var(") ? mixImmediate(origin, target) : mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return v => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = {
    ...origin,
    ...target
  };
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return v => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.numVars === targetStats.numVars && originStats.numColors === targetStats.numColors && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.values, targetStats.values), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return mixImmediate(origin, target);
  }
};

// node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/framer-motion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => p => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    return color.test(v) ? mixColor : mixComplex;
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
  return mixNumber;
}
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, {
  clamp: isClamp = true,
  ease: ease2,
  mixer
} = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  if (inputLength === 1) return () => output[0];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = v => {
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1]) break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? v => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mix(min, 1, offsetProgress));
  }
}

// node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map(o => o * duration);
}

// node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({
  duration = 300,
  keyframes: keyframeValues,
  times,
  ease: ease2 = "easeInOut"
}) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: t => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({
  duration = 800,
  bounce = 0.25,
  velocity = 0,
  mass = 1
}) {
  let envelope;
  let derivative;
  warning(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = undampedFreq2 => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = undampedFreq2 => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some(key => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = {
      ...springOptions,
      ...derived,
      mass: 1
    };
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring({
  keyframes: keyframes2,
  restDelta,
  restSpeed,
  ...options
}) {
  const origin = keyframes2[0];
  const target = keyframes2[keyframes2.length - 1];
  const state = {
    done: false,
    value: origin
  };
  const {
    stiffness,
    damping,
    mass,
    duration,
    velocity,
    isResolvedFromDuration
  } = getSpringOptions({
    ...options,
    velocity: -millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
  restDelta || (restDelta = isGranularScale ? 5e-3 : 0.5);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = t => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  return {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: t => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = initialVelocity;
        if (t !== 0) {
          if (dampingRatio < 1) {
            currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
          } else {
            currentVelocity = 0;
          }
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    }
  };
}

// node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia({
  keyframes: keyframes2,
  velocity = 0,
  power = 0.8,
  timeConstant = 325,
  bounceDamping = 10,
  bounceStiffness = 500,
  modifyTarget,
  min,
  max,
  restDelta = 0.5,
  restSpeed
}) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = v => min !== void 0 && v < min || max !== void 0 && v > max;
  const nearestBoundary = v => {
    if (min === void 0) return max;
    if (max === void 0) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - origin;
  const calcDelta = t => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = t => target + calcDelta(t);
  const applyFriction = t => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = t => {
    if (!isOutOfBounds(state.value)) return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: t => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t > timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

// node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs
var frameloopDriver = update => {
  const passTimestamp = ({
    timestamp
  }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    now: () => frameData.isProcessing ? frameData.timestamp : performance.now()
  };
};

// node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

// node_modules/framer-motion/dist/es/animation/animators/js/index.mjs
var types = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function animateValue({
  autoplay = true,
  delay: delay2 = 0,
  driver = frameloopDriver,
  keyframes: keyframes$1,
  type = "keyframes",
  repeat = 0,
  repeatDelay = 0,
  repeatType = "loop",
  onPlay,
  onStop,
  onComplete,
  onUpdate,
  ...options
}) {
  let speed = 1;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  const updateFinishedPromise = () => {
    currentFinishedPromise = new Promise(resolve => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let animationDriver;
  const generatorFactory = types[type] || keyframes;
  let mapNumbersToKeyframes;
  if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
    if (true) {
      invariant(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
    }
    mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
      clamp: false
    });
    keyframes$1 = [0, 100];
  }
  const generator = generatorFactory({
    ...options,
    keyframes: keyframes$1
  });
  let mirroredGenerator;
  if (repeatType === "mirror") {
    mirroredGenerator = generatorFactory({
      ...options,
      keyframes: [...keyframes$1].reverse(),
      velocity: -(options.velocity || 0)
    });
  }
  let playState = "idle";
  let holdTime = null;
  let startTime = null;
  let cancelTime = null;
  if (generator.calculatedDuration === null && repeat) {
    generator.calculatedDuration = calcGeneratorDuration(generator);
  }
  const {
    calculatedDuration
  } = generator;
  let resolvedDuration = Infinity;
  let totalDuration = Infinity;
  if (calculatedDuration !== null) {
    resolvedDuration = calculatedDuration + repeatDelay;
    totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
  }
  let currentTime = 0;
  const tick = timestamp => {
    if (startTime === null) return;
    if (speed > 0) startTime = Math.min(startTime, timestamp);
    if (speed < 0) startTime = Math.min(timestamp - totalDuration / speed, startTime);
    if (holdTime !== null) {
      currentTime = holdTime;
    } else {
      currentTime = Math.round(timestamp - startTime) * speed;
    }
    const timeWithoutDelay = currentTime - delay2 * (speed >= 0 ? 1 : -1);
    const isInDelayPhase = speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    currentTime = Math.max(timeWithoutDelay, 0);
    if (playState === "finished" && holdTime === null) {
      currentTime = totalDuration;
    }
    let elapsed = currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    const state = isInDelayPhase ? {
      done: false,
      value: keyframes$1[0]
    } : frameGenerator.next(elapsed);
    if (mapNumbersToKeyframes) {
      state.value = mapNumbersToKeyframes(state.value);
    }
    let {
      done
    } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = speed >= 0 ? currentTime >= totalDuration : currentTime <= 0;
    }
    const isAnimationFinished = holdTime === null && (playState === "finished" || playState === "running" && done);
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      finish();
    }
    return state;
  };
  const stopAnimationDriver = () => {
    animationDriver && animationDriver.stop();
    animationDriver = void 0;
  };
  const cancel = () => {
    playState = "idle";
    stopAnimationDriver();
    resolveFinishedPromise();
    updateFinishedPromise();
    startTime = cancelTime = null;
  };
  const finish = () => {
    playState = "finished";
    onComplete && onComplete();
    stopAnimationDriver();
    resolveFinishedPromise();
  };
  const play = () => {
    if (hasStopped) return;
    if (!animationDriver) animationDriver = driver(tick);
    const now = animationDriver.now();
    onPlay && onPlay();
    if (holdTime !== null) {
      startTime = now - holdTime;
    } else if (!startTime || playState === "finished") {
      startTime = now;
    }
    if (playState === "finished") {
      updateFinishedPromise();
    }
    cancelTime = startTime;
    holdTime = null;
    playState = "running";
    animationDriver.start();
  };
  if (autoplay) {
    play();
  }
  const controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    get time() {
      return millisecondsToSeconds(currentTime);
    },
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      currentTime = newTime;
      if (holdTime !== null || !animationDriver || speed === 0) {
        holdTime = newTime;
      } else {
        startTime = animationDriver.now() - newTime / speed;
      }
    },
    get duration() {
      const duration = generator.calculatedDuration === null ? calcGeneratorDuration(generator) : generator.calculatedDuration;
      return millisecondsToSeconds(duration);
    },
    get speed() {
      return speed;
    },
    set speed(newSpeed) {
      if (newSpeed === speed || !animationDriver) return;
      speed = newSpeed;
      controls.time = millisecondsToSeconds(currentTime);
    },
    get state() {
      return playState;
    },
    play,
    pause: () => {
      playState = "paused";
      holdTime = currentTime;
    },
    stop: () => {
      hasStopped = true;
      if (playState === "idle") return;
      playState = "idle";
      onStop && onStop();
      cancel();
    },
    cancel: () => {
      if (cancelTime !== null) tick(cancelTime);
      cancel();
    },
    complete: () => {
      playState = "finished";
    },
    sample: elapsed => {
      startTime = 0;
      return tick(elapsed);
    }
  };
  return controls;
}

// node_modules/framer-motion/dist/es/utils/memo.mjs
function memo(callback) {
  let result;
  return () => {
    if (result === void 0) result = callback();
    return result;
  };
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs
var supportsWaapi = memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
var acceleratedValues = /* @__PURE__ */new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
var sampleDelta = 10;
var maxDuration2 = 2e4;
var requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" || valueName === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, {
  onUpdate,
  onComplete,
  ...options
}) {
  const canAccelerateAnimation = supportsWaapi() && acceleratedValues.has(valueName) && !options.repeatDelay && options.repeatType !== "mirror" && options.damping !== 0 && options.type !== "inertia";
  if (!canAccelerateAnimation) return false;
  let hasStopped = false;
  let resolveFinishedPromise;
  let currentFinishedPromise;
  let pendingCancel = false;
  const updateFinishedPromise = () => {
    currentFinishedPromise = new Promise(resolve => {
      resolveFinishedPromise = resolve;
    });
  };
  updateFinishedPromise();
  let {
    keyframes: keyframes2,
    duration = 300,
    ease: ease2,
    times
  } = options;
  if (requiresPregeneratedKeyframes(valueName, options)) {
    const sampleAnimation = animateValue({
      ...options,
      repeat: 0,
      delay: 0
    });
    let state = {
      done: false,
      value: keyframes2[0]
    };
    const pregeneratedKeyframes = [];
    let t = 0;
    while (!state.done && t < maxDuration2) {
      state = sampleAnimation.sample(t);
      pregeneratedKeyframes.push(state.value);
      t += sampleDelta;
    }
    times = void 0;
    keyframes2 = pregeneratedKeyframes;
    duration = t - sampleDelta;
    ease2 = "linear";
  }
  const animation = animateStyle(value.owner.current, valueName, keyframes2, {
    ...options,
    duration,
    ease: ease2,
    times
  });
  const cancelAnimation = () => {
    pendingCancel = false;
    animation.cancel();
  };
  const safeCancel = () => {
    pendingCancel = true;
    frame.update(cancelAnimation);
    resolveFinishedPromise();
    updateFinishedPromise();
  };
  animation.onfinish = () => {
    if (pendingCancel) return;
    value.set(getFinalKeyframe(keyframes2, options));
    onComplete && onComplete();
    safeCancel();
  };
  const controls = {
    then(resolve, reject) {
      return currentFinishedPromise.then(resolve, reject);
    },
    attachTimeline(timeline) {
      animation.timeline = timeline;
      animation.onfinish = null;
      return noop;
    },
    get time() {
      return millisecondsToSeconds(animation.currentTime || 0);
    },
    set time(newTime) {
      animation.currentTime = secondsToMilliseconds(newTime);
    },
    get speed() {
      return animation.playbackRate;
    },
    set speed(newSpeed) {
      animation.playbackRate = newSpeed;
    },
    get duration() {
      return millisecondsToSeconds(duration);
    },
    play: () => {
      if (hasStopped) return;
      animation.play();
      cancelFrame(cancelAnimation);
    },
    pause: () => animation.pause(),
    stop: () => {
      hasStopped = true;
      if (animation.playState === "idle") return;
      const {
        currentTime
      } = animation;
      if (currentTime) {
        const sampleAnimation = animateValue({
          ...options,
          autoplay: false
        });
        value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
      }
      safeCancel();
    },
    complete: () => {
      if (pendingCancel) return;
      animation.finish();
    },
    cancel: safeCancel
  };
  return controls;
}

// node_modules/framer-motion/dist/es/animation/animators/instant.mjs
function createInstantAnimation({
  keyframes: keyframes2,
  delay: delay2,
  onUpdate,
  onComplete
}) {
  const setValue = () => {
    onUpdate && onUpdate(keyframes2[keyframes2.length - 1]);
    onComplete && onComplete();
    return {
      time: 0,
      speed: 1,
      duration: 0,
      play: noop,
      pause: noop,
      stop: noop,
      then: resolve => {
        resolve();
        return Promise.resolve();
      },
      cancel: noop,
      complete: noop
    };
  };
  return delay2 ? animateValue({
    keyframes: [0, 1],
    duration: 0,
    delay: delay2,
    onComplete: setValue
  }) : setValue();
}

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = target => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, {
  keyframes: keyframes2
}) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (key, value) => {
  if (key === "zIndex") return false;
  if (typeof value === "number" || Array.isArray(value)) return true;
  if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow") return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2) return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value) defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = {
  ...complex,
  getAnimatableNone: v => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = key => defaultValueTypes[key];

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter) defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = v => /^0[^.\s]+$/.test(v);

// node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  }
}

// node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs
function getKeyframes(value, valueName, target, transition) {
  const isTargetAnimatable = isAnimatable(valueName, target);
  let keyframes2;
  if (Array.isArray(target)) {
    keyframes2 = [...target];
  } else {
    keyframes2 = [null, target];
  }
  const defaultOrigin = transition.from !== void 0 ? transition.from : value.get();
  let animatableTemplateValue = void 0;
  const noneKeyframeIndexes = [];
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] === null) {
      keyframes2[i] = i === 0 ? defaultOrigin : keyframes2[i - 1];
    }
    if (isNone(keyframes2[i])) {
      noneKeyframeIndexes.push(i);
    }
    if (typeof keyframes2[i] === "string" && keyframes2[i] !== "none" && keyframes2[i] !== "0") {
      animatableTemplateValue = keyframes2[i];
    }
  }
  if (isTargetAnimatable && noneKeyframeIndexes.length && animatableTemplateValue) {
    for (let i = 0; i < noneKeyframeIndexes.length; i++) {
      const index = noneKeyframeIndexes[i];
      keyframes2[index] = getAnimatableNone2(valueName, animatableTemplateValue);
    }
  }
  return keyframes2;
}

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined({
  when,
  delay: _delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  repeat,
  repeatType,
  repeatDelay,
  from,
  elapsed,
  ...transition
}) {
  return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}

// node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
  skipAnimations: false
};

// node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (valueName, value, target, transition = {}) => {
  return onComplete => {
    const valueTransition = getValueTransition(transition, valueName) || {};
    const delay2 = valueTransition.delay || transition.delay || 0;
    let {
      elapsed = 0
    } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay2);
    const keyframes2 = getKeyframes(value, valueName, target, valueTransition);
    const originKeyframe = keyframes2[0];
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
    const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    let options = {
      keyframes: keyframes2,
      velocity: value.getVelocity(),
      ease: "easeOut",
      ...valueTransition,
      delay: -elapsed,
      onUpdate: v => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      }
    };
    if (!isTransitionDefined(valueTransition)) {
      options = {
        ...options,
        ...getDefaultTransition(valueName, options)
      };
    }
    if (options.duration) {
      options.duration = secondsToMilliseconds(options.duration);
    }
    if (options.repeatDelay) {
      options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
    }
    if (!isOriginAnimatable || !isTargetAnimatable || instantAnimationState.current || valueTransition.type === false || MotionGlobalConfig.skipAnimations) {
      return createInstantAnimation(instantAnimationState.current ? {
        ...options,
        delay: 0
      } : options);
    }
    if (!transition.isHandoff && value.owner && value.owner.current instanceof HTMLElement && !value.owner.getProps().onUpdate) {
      const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
      if (acceleratedAnimation) return acceleratedAnimation;
    }
    return animateValue(options);
  };
};

// node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = v => /^\-?\d*\.?\d+$/.test(v);

// node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}
function moveItem([...arr], fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(endIndex, 0, item);
  }
  return arr;
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions) return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message)) return;
  console.warn(message);
  if (element) console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = value => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  constructor(init, options = {}) {
    this.version = "10.18.0";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.canTrackVelocity = false;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      this.prev = this.current;
      this.current = v;
      const {
        delta,
        timestamp
      } = frameData;
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        frame.postRender(this.scheduleVelocityCheck);
      }
      if (this.prev !== this.current && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (this.events.velocityChange) {
        this.events.velocityChange.notify(this.getVelocity());
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.scheduleVelocityCheck = () => frame.postRender(this.velocityCheck);
    this.velocityCheck = ({
      timestamp
    }) => {
      if (timestamp !== this.lastUpdated) {
        this.prev = this.current;
        if (this.events.velocityChange) {
          this.events.velocityChange.notify(this.getVelocity());
        }
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
    this.owner = options.owner;
  }
  onChange(subscription) {
    if (true) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = prev;
    this.timeDelta = delta;
  }
  jump(v) {
    this.updateAndNotify(v);
    this.prev = v;
    this.stop();
    if (this.stopPassiveEffect) this.stopPassiveEffect();
  }
  get() {
    if (collectMotionValues.current) {
      collectMotionValues.current.push(this);
    }
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(startAnimation) {
    this.stop();
    return new Promise(resolve => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = v => type => type.test(v);

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: v => v === "auto",
  parse: v => v
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = v => dimensionValueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = v => valueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let {
    transitionEnd = {},
    transition = {},
    ...target
  } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
  target = {
    ...target,
    ...transitionEnd
  };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function setVariants(visualElement, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach(key => {
    const variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    if (visualElement.variantChildren) {
      visualElement.variantChildren.forEach(child => {
        setVariants(child, variantLabels);
      });
    }
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b;
  const newValueKeys = Object.keys(target).filter(key => !visualElement.hasValue(key));
  const numNewValues = newValueKeys.length;
  if (!numNewValues) return;
  for (let i = 0; i < numNewValues; i++) {
    const key = newValueKeys[i];
    const targetValue = target[key];
    let value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null) continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement.addValue(key, motionValue(value, {
      owner: visualElement
    }));
    if (origin[key] === void 0) {
      origin[key] = value;
    }
    if (value !== null) visualElement.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition) return;
  const valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
  const origin = {};
  for (const key in target) {
    const transitionOrigin = getOriginFromTransition(key, transition);
    if (transitionOrigin !== void 0) {
      origin[key] = transitionOrigin;
    } else {
      const value = visualElement.getValue(key);
      if (value) {
        origin[key] = value.get();
      }
    }
  }
  return origin;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function shouldBlockAnimation({
  protectedKeys,
  needsAnimating
}, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function hasKeyframesChanged(value, target) {
  const current = value.get();
  if (Array.isArray(target)) {
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== current) return true;
    }
  } else {
    return current !== target;
  }
}
function animateTarget(visualElement, definition, {
  delay: delay2 = 0,
  transitionOverride,
  type
} = {}) {
  let {
    transition = visualElement.getDefaultTransition(),
    transitionEnd,
    ...target
  } = visualElement.makeTargetAnimatable(definition);
  const willChange = visualElement.getValue("willChange");
  if (transitionOverride) transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key);
    const valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      elapsed: 0,
      ...getValueTransition(transition || {}, key)
    };
    if (window.HandoffAppearAnimations) {
      const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
      if (appearId) {
        const elapsed = window.HandoffAppearAnimations(appearId, key, value, frame);
        if (elapsed !== null) {
          valueTransition.elapsed = elapsed;
          valueTransition.isHandoff = true;
        }
      }
    }
    let canSkip = !valueTransition.isHandoff && !hasKeyframesChanged(value, valueTarget);
    if (valueTransition.type === "spring" && (value.getVelocity() || valueTransition.velocity)) {
      canSkip = false;
    }
    if (value.animation) {
      canSkip = false;
    }
    if (canSkip) continue;
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? {
      type: false
    } : valueTransition));
    const animation = value.animation;
    if (isWillChangeMotionValue(willChange)) {
      willChange.add(key);
      animation.then(() => willChange.remove(key));
    }
    animations2.push(animation);
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, options.custom);
  let {
    transition = visualElement.getDefaultTransition() || {}
  } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const {
      delayChildren = 0,
      staggerChildren,
      staggerDirection
    } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const {
    when
  } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map(variant => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => visualElement.notify("AnimationComplete", definition));
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return animations2 => Promise.all(animations2.map(({
    animation,
    options
  }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate2 = animateList(visualElement);
  const state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition);
    if (resolved) {
      const {
        transition,
        transitionEnd,
        ...target
      } = resolved;
      acc = {
        ...acc,
        ...target,
        ...transitionEnd
      };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement);
  }
  function animateChanges(options, changedActiveType) {
    const props = visualElement.getProps();
    const context = visualElement.getVariantContext(true) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = {
        ...encounteredKeys
      };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false) resolvedValues = {};
      const {
        prevResolvedValues = {}
      } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = key => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key)) continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = {
          ...encounteredKeys,
          ...resolvedValues
        };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && (!isInherited || handledRemovedValues)) {
        animations2.push(...definitionList.map(animation => ({
          animation,
          options: {
            type,
            ...options
          }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach(key => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation[key] = fallbackTarget;
        }
      });
      animations2.push({
        animation: fallbackAnimation
      });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive) return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(child => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(options, type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const {
      animate: animate2
    } = this.node.getProps();
    this.unmount();
    if (isAnimationControls(animate2)) {
      this.unmount = animate2.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const {
      animate: animate2
    } = this.node.getProps();
    const {
      animate: prevAnimate
    } = this.node.prevProps || {};
    if (animate2 !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: isPresent2,
      onExitComplete,
      custom
    } = this.node.presenceContext;
    const {
      isPresent: prevIsPresent
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent2 === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent2, {
      custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom
    });
    if (onExitComplete && !isPresent2) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const {
      register
    } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var PanSession = class {
  constructor(event, handlers, {
    transformPagePoint,
    contextWindow,
    dragSnapToOrigin = false
  } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      const {
        point: point3
      } = info2;
      const {
        timestamp: timestamp2
      } = frameData;
      this.history.push({
        ...point3,
        timestamp: timestamp2
      });
      const {
        onStart,
        onMove
      } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const {
        onEnd,
        onSessionEnd,
        resumeAnimation
      } = this.handlers;
      if (this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event)) return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const {
      point: point2
    } = initialInfo;
    const {
      timestamp
    } = frameData;
    this.history = [{
      ...point2,
      timestamp
    }];
    const {
      onSessionStart
    } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? {
    point: transformPagePoint(info.point)
  } : info;
}
function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getPanInfo({
  point: point2
}, history) {
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }
  const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale)) delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point2, {
  min,
  max
}, elastic) {
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mix(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mix(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, {
  top,
  left,
  bottom,
  right
}) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return {
    min,
    max
  };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({
  min: 0,
  max: 0
});
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({
  top,
  left,
  right,
  bottom
}) {
  return {
    x: {
      min: left,
      max: right
    },
    y: {
      min: top,
      max: bottom
    }
  };
}
function convertBoxToBoundingBox({
  x,
  y
}) {
  return {
    top: y.min,
    right: x.max,
    bottom: y.max,
    left: x.min
  };
}
function transformBoxPoints(point2, transformPoint2) {
  if (!transformPoint2) return point2;
  const topLeft = transformPoint2({
    x: point2.left,
    y: point2.top
  });
  const bottomRight = transformPoint2({
    x: point2.right,
    y: point2.bottom
  });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({
  scale: scale2,
  scaleX,
  scaleY
}) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point2, scale2, originPoint) {
  const distanceFromOrigin = point2 - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, boxScale, originPoint);
  }
  return scalePoint(point2, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, {
  x,
  y
}) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength) return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const instance = node.instance;
    if (instance && instance.style && instance.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  treeScale.x = snapToDefault(treeScale.x);
  treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale2) {
  if (Number.isInteger(scale2)) return scale2;
  return scale2 > 1.0000000000001 || scale2 < 0.999999999999 ? scale2 : 1;
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
  const axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  const originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform2) {
  transformAxis(box.x, transform2, xKeys);
  transformAxis(box.y, transform2, yKeys);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const {
    scroll: scroll2
  } = rootProjectionNode2;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.offset.x);
    translateAxis(viewportBox.y, scroll2.offset.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({
  current
}) => {
  return current ? current.ownerDocument.defaultView : null;
};

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, {
    snapToCursor = false
  } = {}) {
    const {
      presenceContext
    } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false) return;
    const onSessionStart = event => {
      const {
        dragSnapToOrigin: dragSnapToOrigin2
      } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      const {
        drag: drag2,
        dragPropagation,
        onDragStart
      } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openGlobalLock) this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag2);
        if (!this.openGlobalLock) return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis(axis => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const {
            projection
          } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      const {
        animationState
      } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      const {
        dragPropagation,
        dragDirectionLock,
        onDirectionLock,
        onDrag
      } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock) return;
      const {
        offset
      } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    const resumeAnimation = () => eachAxis(axis => {
      var _a;
      return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
    });
    const {
      dragSnapToOrigin
    } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging) return;
    const {
      velocity
    } = info;
    this.startAnimation(velocity);
    const {
      onDragEnd
    } = this.getProps();
    if (onDragEnd) {
      frame.update(() => onDragEnd(event, info));
    }
  }
  cancel() {
    this.isDragging = false;
    const {
      projection,
      animationState
    } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = void 0;
    const {
      dragPropagation
    } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset) {
    const {
      drag: drag2
    } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection)) return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const {
      dragConstraints,
      dragElastic
    } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(axis => {
        if (this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const {
      dragConstraints: constraints,
      onMeasureDragConstraints
    } = this.getProps();
    if (!constraints || !isRefObject(constraints)) return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const {
      projection
    } = this.visualElement;
    if (!projection || !projection.layout) return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const {
      drag: drag2,
      dragMomentum,
      dragElastic,
      dragTransition,
      dragSnapToOrigin,
      onDragTransitionEnd
    } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis(axis => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin) transition = {
        min: 0,
        max: 0
      };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition));
  }
  stopAnimation() {
    eachAxis(axis => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis(axis => {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
    });
  }
  getAnimationState(axis) {
    var _a;
    return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
  }
  getAxisMotionValue(axis) {
    const dragKey = "_drag" + axis.toUpperCase();
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point2) {
    eachAxis(axis => {
      const {
        drag: drag2
      } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection)) return;
      const {
        projection
      } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const {
          min,
          max
        } = projection.layout.layoutBox[axis];
        axisValue.set(point2[axis] - mix(min, max, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: drag2,
      dragConstraints
    } = this.getProps();
    const {
      projection
    } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
    this.stopAnimation();
    const boxProgress = {
      x: 0,
      y: 0
    };
    eachAxis(axis => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({
          min: latest,
          max: latest
        }, this.constraints[axis]);
      }
    });
    const {
      transformTemplate
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(axis => {
      if (!shouldDrag(axis, drag2, null)) return;
      const axisValue = this.getAxisMotionValue(axis);
      const {
        min,
        max
      } = this.constraints[axis];
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", event => {
      const {
        drag: drag2,
        dragListener = true
      } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const {
        dragConstraints
      } = this.getProps();
      if (isRefObject(dragConstraints)) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const {
      projection
    } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({
      delta,
      hasLayoutChanged
    }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis(axis => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2) return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const {
      drag: drag2 = false,
      dragDirectionLock = false,
      dragPropagation = false,
      dragConstraints = false,
      dragElastic = defaultElastic,
      dragMomentum = true
    } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const {
      dragControls
    } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = handler => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info));
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart,
      onPanStart,
      onPan,
      onPanEnd
    } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.update(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", event => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
};

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react17 = require("react@18.3.1");
function usePresence() {
  const context = (0, import_react17.useContext)(PresenceContext);
  if (context === null) return [true, null];
  const {
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  const id4 = (0, import_react17.useId)();
  (0, import_react17.useEffect)(() => register(id4), []);
  const safeToRemove = () => onExitComplete && onExitComplete(id4);
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent((0, import_react17.useContext)(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min) return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target) return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, {
    treeScale,
    projectionDelta
  }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5) return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_react18 = __toESM(require("react@18.3.1"), 0);
var MeasureLayoutWithContext = class extends import_react18.default.Component {
  componentDidMount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup,
      layoutId
    } = this.props;
    const {
      projection
    } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group) layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const {
      layoutDependency,
      visualElement,
      drag: drag2,
      isPresent: isPresent2
    } = this.props;
    const projection = visualElement.projection;
    if (!projection) return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const {
      projection
    } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      queueMicrotask(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup: promoteContext
    } = this.props;
    const {
      projection
    } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const {
      safeToRemove
    } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent2, safeToRemove] = usePresence();
  const layoutGroup = (0, import_react18.useContext)(LayoutGroupContext);
  return import_react18.default.createElement(MeasureLayoutWithContext, {
    ...props,
    layoutGroup,
    switchLayoutGroup: (0, import_react18.useContext)(SwitchLayoutGroupContext),
    isPresent: isPresent2,
    safeToRemove
  });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = value => typeof value === "string" ? parseFloat(value) : value;
var isPx = value => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(0, lead.opacity !== void 0 ? lead.opacity : 1, easeCrossfadeIn(progress2));
    target.opacityExit = mix(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mix(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return p => {
    if (p < min) return 0;
    if (p > max) return 1;
    return easing(progress(min, max, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number") return;
  let originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis) originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys2, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
  return a.x.min === b.x.min && a.x.max === b.x.max && a.y.min === b.y.min && a.y.max === b.y.max;
}
function boxEqualsRounded(a, b) {
  return Math.round(a.x.min) === Math.round(b.x.min) && Math.round(a.x.max) === Math.round(b.x.max) && Math.round(a.y.min) === Math.round(b.y.min) && Math.round(a.y.max) === Math.round(b.y.max);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex(member => node === member);
    if (indexOfNode === 0) return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead) return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const {
        crossfade
      } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach(node => {
      const {
        options,
        resumingFrom
      } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach(node => {
      node.instance && node.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform2 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  if (xTranslate || yTranslate) {
    transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const {
      rotate,
      rotateX,
      rotateY
    } = latestTransform;
    if (rotate) transform2 += `rotate(${rotate}deg) `;
    if (rotateX) transform2 += `rotateX(${rotateX}deg) `;
    if (rotateY) transform2 += `rotateY(${rotateY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform2 || "none";
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = performance.now();
  const checkElapsed = ({
    timestamp
  }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}

// node_modules/framer-motion/dist/es/debug/record.mjs
function record(data) {
  if (window.MotionDebug) {
    window.MotionDebug.record(data);
  }
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

// node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var transformAxes = ["", "X", "Y", "Z"];
var hiddenVisibility = {
  visibility: "hidden"
};
var animationTarget = 1e3;
var id2 = 0;
var projectionFrameData = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function createProjectionNode({
  attachResizeListener,
  defaultParent,
  measureScroll,
  checkIsScrollRoot,
  resetTransform
}) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id2++;
      this.animationId = 0;
      this.children = /* @__PURE__ */new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = /* @__PURE__ */new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        projectionFrameData.totalNodes = projectionFrameData.resolvedTargetDeltas = projectionFrameData.recalculatedProjection = 0;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        record(projectionFrameData);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this) this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const {
        layoutId,
        layout: layout2,
        visualElement
      } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (isLayoutDirty && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({
          delta,
          hasLayoutChanged,
          hasRelativeTargetChanged,
          layout: newLayout
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const {
            onLayoutAnimationStart,
            onLayoutAnimationComplete
          } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      cancelFrame(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      if (this.isUpdateBlocked()) return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const {
        visualElement
      } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const {
        layoutId,
        layout: layout2
      } = this.options;
      if (layoutId === void 0 && !layout2) return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      }
      this.isUpdating = false;
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      const now = performance.now();
      frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp);
      frameData.timestamp = now;
      frameData.isProcessing = true;
      steps.update.process(frameData);
      steps.preRender.process(frameData);
      steps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        queueMicrotask(() => this.update());
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (this.snapshot || !this.instance) return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance) return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement
      } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot: checkIsScrollRoot(this.instance),
          offset: measureScroll(this.instance)
        };
      }
    }
    resetTransform() {
      if (!resetTransform) return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return createBox();
      const box = visualElement.measureViewportBox();
      const {
        scroll: scroll2
      } = this.root;
      if (scroll2) {
        translateAxis(box.x, scroll2.offset.x);
        translateAxis(box.y, scroll2.offset.y);
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const {
          scroll: scroll2,
          options
        } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (scroll2.isRoot) {
            copyBoxInto(boxWithoutScroll, box);
            const {
              scroll: rootScroll
            } = this.root;
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll2.offset.x);
          translateAxis(boxWithoutScroll.y, scroll2.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues)) continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance) continue;
        if (!hasTransform(node.latestValues)) continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent) return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget);
      if (canSkip) return;
      const {
        layout: layout2,
        layoutId
      } = this.options;
      if (!this.layout || !(layout2 || layoutId)) return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta) return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      projectionFrameData.resolvedTargetDeltas++;
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip) return;
      const {
        layout: layout2,
        layoutId
      } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId)) return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
      }
      const {
        target
      } = lead;
      if (!target) {
        if (this.projectionTransform) {
          this.projectionDelta = createDelta();
          this.projectionTransform = "none";
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      const prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      projectionFrameData.recalculatedProjection++;
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      this.options.scheduleRender && this.options.scheduleRender();
      if (notifyAll2) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = {
        ...this.latestValues
      };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = latest => {
        const progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget) prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: latest => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let {
        targetWithTransforms,
        target,
        layout: layout2,
        latestValues
      } = lead;
      if (!targetWithTransforms || !target || !layout2) return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const {
        layoutId
      } = this.options;
      if (layoutId) return this.root.sharedNodes.get(layoutId);
    }
    promote({
      needsReset,
      transition,
      preserveFollowOpacity
    } = {}) {
      const stack = this.getStack();
      if (stack) stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition) this.setOptions({
        transition
      });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetRotation() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return;
      let hasRotate = false;
      const {
        latestValues
      } = visualElement;
      if (latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ) {
        hasRotate = true;
      }
      if (!hasRotate) return;
      const resetValues = {};
      for (let i = 0; i < transformAxes.length; i++) {
        const key = "rotate" + transformAxes[i];
        if (latestValues[key]) {
          resetValues[key] = latestValues[key];
          visualElement.setStaticValue(key, 0);
        }
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp) {
      var _a, _b;
      if (!this.instance || this.isSVG) return void 0;
      if (!this.isVisible) {
        return hiddenVisibility;
      }
      const styles = {
        visibility: ""
      };
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const {
        x,
        y
      } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0) continue;
        const {
          correct,
          applyTo
        } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach(node => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const {
      layoutBox: layout2,
      measuredBox: measuredLayout
    } = node.layout;
    const {
      animationType
    } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const {
          snapshot: parentSnapshot,
          layout: parentLayout
        } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    const {
      onExitComplete
    } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  projectionFrameData.totalNodes++;
  if (!node.parent) return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const {
    visualElement
  } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mix(from.min, to.min, p);
  output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
var userAgentContains = string => typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify2) => addDomEvent(ref, "resize", notify2),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: instance => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({
        layoutScroll: true
      });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: instance => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match) return [,];
  const [, token, fallback] = match;
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token) return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  } else if (isCSSVariableToken(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement, {
  ...target
}, transitionEnd) {
  const element = visualElement.current;
  if (!(element instanceof Element)) return {
    target,
    transitionEnd
  };
  if (transitionEnd) {
    transitionEnd = {
      ...transitionEnd
    };
  }
  visualElement.values.forEach(value => {
    const current = value.get();
    if (!isCSSVariableToken(current)) return;
    const resolved = getVariableValue(current, element);
    if (resolved) value.set(resolved);
  });
  for (const key in target) {
    const current = target[key];
    if (!isCSSVariableToken(current)) continue;
    const resolved = getVariableValue(current, element);
    if (!resolved) continue;
    target[key] = resolved;
    if (!transitionEnd) transitionEnd = {};
    if (transitionEnd[key] === void 0) {
      transitionEnd[key] = current;
    }
  }
  return {
    target,
    transitionEnd
  };
}

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]);
var isPositionalKey = key => positionalKeys.has(key);
var hasPositionalKey = target => {
  return Object.keys(target).some(isPositionalKey);
};
var isNumOrPxType = v => v === number || v === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, {
  transform: transform2
}) => {
  if (transform2 === "none" || !transform2) return 0;
  const matrix3d = transform2.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform2.match(/^matrix\((.+)\)$/);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter(key => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach(key => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length) visualElement.render();
  return removedTransforms;
}
var positionalValues = {
  width: ({
    x
  }, {
    paddingLeft = "0",
    paddingRight = "0"
  }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({
    y
  }, {
    paddingTop = "0",
    paddingBottom = "0"
  }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, {
    top
  }) => parseFloat(top),
  left: (_bbox, {
    left
  }) => parseFloat(left),
  bottom: ({
    y
  }, {
    top
  }) => parseFloat(top) + (y.max - y.min),
  right: ({
    x
  }, {
    left
  }) => parseFloat(left) + (x.max - x.min),
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
var convertChangedValueTypes = (target, visualElement, changedKeys) => {
  const originBbox = visualElement.measureViewportBox();
  const element = visualElement.current;
  const elementComputedStyle = getComputedStyle(element);
  const {
    display
  } = elementComputedStyle;
  const origin = {};
  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach(key => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement.render();
  const targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach(key => {
    const value = visualElement.getValue(key);
    value && value.jump(origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
  target = {
    ...target
  };
  transitionEnd = {
    ...transitionEnd
  };
  const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  let removedTransformValues = [];
  let hasAttemptedToRemoveTransformValues = false;
  const changedValueTypeKeys = [];
  targetPositionalKeys.forEach(key => {
    const value = visualElement.getValue(key);
    if (!visualElement.hasValue(key)) return;
    let from = origin[key];
    let fromType = findDimensionValueType(from);
    const to = target[key];
    let toType;
    if (isKeyframesTarget(to)) {
      const numKeyframes = to.length;
      const fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (let i = fromIndex; i < numKeyframes; i++) {
        if (to[i] === null) break;
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        const current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        value.jump(to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(([key, value]) => {
        visualElement.getValue(key).set(value);
      });
    }
    visualElement.render();
    if (isBrowser && scrollY !== null) {
      window.scrollTo({
        top: scrollY
      });
    }
    return {
      target: convertedTarget,
      transitionEnd
    };
  } else {
    return {
      target,
      transitionEnd
    };
  }
};
function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : {
    target,
    transitionEnd
  };
}

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = (visualElement, target, origin, transitionEnd) => {
  const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement, target, origin, transitionEnd);
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = {
  current: null
};
var hasReducedMotionListener = {
  current: false
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser) return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  const {
    willChange
  } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      if (true) {
        warnOnce(nextValue.version === "10.18.0", `Attempting to mix Framer Motion versions ${nextValue.version} with 10.18.0 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, {
        owner: element
      }));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, {
          owner: element
        }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0) element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */new WeakMap();

// node_modules/framer-motion/dist/es/render/VisualElement.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
var numVariantProps = variantProps.length;
var VisualElement = class {
  constructor({
    parent,
    props,
    presenceContext,
    reducedMotionConfig,
    visualState
  }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */new Map();
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current) return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.scheduleRender = () => frame.render(this.render, false, true);
    const {
      latestValues,
      renderState
    } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = {
      ...latestValues
    };
    this.initialValues = props.initial ? {
      ...latestValues
    } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const {
      willChange,
      ...initialMotionValues
    } = this.scrapeMotionValuesFromProps(props, {});
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  scrapeMotionValuesFromProps(_props, _prevProps) {
    return {};
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (true) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent) this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach(remove => remove());
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      this.features[key].unmount();
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", latestValue => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.update(this.notifyUpdate, false, true);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures({
    children,
    ...renderedProps
  }, isStrict, preloadedFeatures2, initialLayoutGroupConfig) {
    let ProjectionNodeConstructor;
    let MeasureLayout2;
    if (preloadedFeatures2 && isStrict) {
      const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      renderedProps.ignoreStrict ? warning(false, strictMessage) : invariant(false, strictMessage);
    }
    for (let i = 0; i < numFeatures; i++) {
      const name = featureNames[i];
      const {
        isEnabled,
        Feature: FeatureConstructor,
        ProjectionNode,
        MeasureLayout: MeasureLayoutComponent
      } = featureDefinitions[name];
      if (ProjectionNode) ProjectionNodeConstructor = ProjectionNode;
      if (isEnabled(renderedProps)) {
        if (!this.features[name] && FeatureConstructor) {
          this.features[name] = new FeatureConstructor(this);
        }
        if (MeasureLayoutComponent) {
          MeasureLayout2 = MeasureLayoutComponent;
        }
      }
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
      const {
        layoutId,
        layout: layout2,
        drag: drag2,
        dragConstraints,
        layoutScroll,
        layoutRoot
      } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout: layout2,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof layout2 === "string" ? layout2 : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll,
        layoutRoot
      });
    }
    return MeasureLayout2;
  }
  updateFeatures() {
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature.isMounted) {
        feature.update();
      } else {
        feature.mount();
        feature.isMounted = true;
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  makeTargetAnimatable(target, canMutate = true) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listener = props["on" + key];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
  }
  getProps() {
    return this.props;
  }
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(startAtParent = false) {
    if (startAtParent) {
      return this.parent ? this.parent.getVariantContext() : void 0;
    }
    if (!this.isControllingVariants) {
      const context2 = this.parent ? this.parent.getVariantContext() || {} : {};
      if (this.props.initial !== void 0) {
        context2.initial = this.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = this.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  addValue(key, value) {
    if (value !== this.values.get(key)) {
      this.removeValue(key);
      this.bindToMotionValue(key, value);
    }
    this.values.set(key, value);
    this.latestValues[key] = value.get();
  }
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue, {
        owner: this
      });
      this.addValue(key, value);
    }
    return value;
  }
  readValue(key) {
    var _a;
    return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
  }
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  getBaseTarget(key) {
    var _a;
    const {
      initial
    } = this.props;
    const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key] : void 0;
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target)) return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
};

// node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, {
    vars,
    style
  }) {
    delete vars[key];
    delete style[key];
  }
  makeTargetAnimatableFromInstance({
    transition,
    transitionEnd,
    ...target
  }, {
    transformValues
  }, isMounted) {
    let origin = getOrigin(target, transition || {}, this);
    if (transformValues) {
      if (transitionEnd) transitionEnd = transformValues(transitionEnd);
      if (target) target = transformValues(target);
      if (origin) origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(this, target, origin);
      const parsed = parseDomVariant(this, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return {
      transition,
      transitionEnd,
      ...target
    };
  }
};

// node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, {
    transformPagePoint
  }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps(props, prevProps);
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const {
      children
    } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", latest => {
        if (this.current) this.current.textContent = `${latest}`;
      });
    }
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
};

// node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props, prevProps) {
    return scrapeMotionValuesFromProps2(props, prevProps);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component2, options) => {
  return isSVGComponent(Component2) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    enableHardwareAcceleration: true
  });
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
var preloadedFeatures = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};
var motion = /* @__PURE__ */createMotionProxy((Component2, config) => createDomMotionConfig(Component2, config, preloadedFeatures, createDomVisualElement));
function createDomMotionComponent(key) {
  return createMotionComponent(createDomMotionConfig(key, {
    forwardMotionProps: false
  }, preloadedFeatures, createDomVisualElement));
}

// node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs
var m = createMotionProxy(createDomMotionConfig);

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react19 = require("react@18.3.1");
function useIsMounted() {
  const isMounted = (0, import_react19.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react20 = require("react@18.3.1");
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = (0, import_react20.useState)(0);
  const forceRender = (0, import_react20.useCallback)(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = (0, import_react20.useCallback)(() => frame.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var React2 = __toESM(require("react@18.3.1"), 0);
var import_react21 = require("react@18.3.1");
var PopChildMeasure = class extends React2.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function PopChild({
  children,
  isPresent: isPresent2
}) {
  const id4 = (0, import_react21.useId)();
  const ref = (0, import_react21.useRef)(null);
  const size = (0, import_react21.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  (0, import_react21.useInsertionEffect)(() => {
    const {
      width,
      height,
      top,
      left
    } = size.current;
    if (isPresent2 || !ref.current || !width || !height) return;
    ref.current.dataset.motionPopId = id4;
    const style = document.createElement("style");
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id4}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent2]);
  return React2.createElement(PopChildMeasure, {
    isPresent: isPresent2,
    childRef: ref,
    sizeRef: size
  }, React2.cloneElement(children, {
    ref
  }));
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var React3 = __toESM(require("react@18.3.1"), 0);
var import_react22 = require("react@18.3.1");
var PresenceChild = ({
  children,
  initial,
  isPresent: isPresent2,
  onExitComplete,
  custom,
  presenceAffectsLayout,
  mode
}) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id4 = (0, import_react22.useId)();
  const context = (0, import_react22.useMemo)(() => ({
    id: id4,
    initial,
    isPresent: isPresent2,
    custom,
    onExitComplete: childId => {
      presenceChildren.set(childId, true);
      for (const isComplete of presenceChildren.values()) {
        if (!isComplete) return;
      }
      onExitComplete && onExitComplete();
    },
    register: childId => {
      presenceChildren.set(childId, false);
      return () => presenceChildren.delete(childId);
    }
  }), presenceAffectsLayout ? void 0 : [isPresent2]);
  (0, import_react22.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  React3.useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent2]);
  if (mode === "popLayout") {
    children = React3.createElement(PopChild, {
      isPresent: isPresent2
    }, children);
  }
  return React3.createElement(PresenceContext.Provider, {
    value: context
  }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */new Map();
}

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react23 = require("react@18.3.1");
function useUnmountEffect(callback) {
  return (0, import_react23.useEffect)(() => () => callback(), []);
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var React4 = __toESM(require("react@18.3.1"), 0);
var import_react24 = require("react@18.3.1");
var getChildKey = child => child.key || "";
function updateChildLookup(children, allChildren) {
  children.forEach(child => {
    const key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  const filtered = [];
  import_react24.Children.forEach(children, child => {
    if ((0, import_react24.isValidElement)(child)) filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = ({
  children,
  custom,
  initial = true,
  onExitComplete,
  exitBeforeEnter,
  presenceAffectsLayout = true,
  mode = "sync"
}) => {
  invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
  const forceRender = (0, import_react24.useContext)(LayoutGroupContext).forceRender || useForceUpdate()[0];
  const isMounted = useIsMounted();
  const filteredChildren = onlyElements(children);
  let childrenToRender = filteredChildren;
  const exitingChildren = (0, import_react24.useRef)(/* @__PURE__ */new Map()).current;
  const presentChildren = (0, import_react24.useRef)(childrenToRender);
  const allChildren = (0, import_react24.useRef)(/* @__PURE__ */new Map()).current;
  const isInitialRender = (0, import_react24.useRef)(true);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(() => {
    isInitialRender.current = true;
    allChildren.clear();
    exitingChildren.clear();
  });
  if (isInitialRender.current) {
    return React4.createElement(React4.Fragment, null, childrenToRender.map(child => React4.createElement(PresenceChild, {
      key: getChildKey(child),
      isPresent: true,
      initial: initial ? void 0 : false,
      presenceAffectsLayout,
      mode
    }, child)));
  }
  childrenToRender = [...childrenToRender];
  const presentKeys = presentChildren.current.map(getChildKey);
  const targetKeys = filteredChildren.map(getChildKey);
  const numPresent = presentKeys.length;
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
      exitingChildren.set(key, void 0);
    }
  }
  if (mode === "wait" && exitingChildren.size) {
    childrenToRender = [];
  }
  exitingChildren.forEach((component, key) => {
    if (targetKeys.indexOf(key) !== -1) return;
    const child = allChildren.get(key);
    if (!child) return;
    const insertionIndex = presentKeys.indexOf(key);
    let exitingComponent = component;
    if (!exitingComponent) {
      const onExit = () => {
        exitingChildren.delete(key);
        const leftOverKeys = Array.from(allChildren.keys()).filter(childKey => !targetKeys.includes(childKey));
        leftOverKeys.forEach(leftOverKey => allChildren.delete(leftOverKey));
        presentChildren.current = filteredChildren.filter(presentChild => {
          const presentChildKey = getChildKey(presentChild);
          return presentChildKey === key || leftOverKeys.includes(presentChildKey);
        });
        if (!exitingChildren.size) {
          if (isMounted.current === false) return;
          forceRender();
          onExitComplete && onExitComplete();
        }
      };
      exitingComponent = React4.createElement(PresenceChild, {
        key: getChildKey(child),
        isPresent: false,
        onExitComplete: onExit,
        custom,
        presenceAffectsLayout,
        mode
      }, child);
      exitingChildren.set(key, exitingComponent);
    }
    childrenToRender.splice(insertionIndex, 0, exitingComponent);
  });
  childrenToRender = childrenToRender.map(child => {
    const key = child.key;
    return exitingChildren.has(key) ? child : React4.createElement(PresenceChild, {
      key: getChildKey(child),
      isPresent: true,
      presenceAffectsLayout,
      mode
    }, child);
  });
  if (mode === "wait" && childrenToRender.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  return React4.createElement(React4.Fragment, null, exitingChildren.size ? childrenToRender : childrenToRender.map(child => (0, import_react24.cloneElement)(child)));
};

// node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var React5 = __toESM(require("react@18.3.1"), 0);
var import_react25 = require("react@18.3.1");
function MotionConfig({
  children,
  isValidProp,
  ...config
}) {
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = {
    ...(0, import_react25.useContext)(MotionConfigContext),
    ...config
  };
  config.isStatic = useConstant(() => config.isStatic);
  const context = (0, import_react25.useMemo)(() => config, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
  return React5.createElement(MotionConfigContext.Provider, {
    value: context
  }, children);
}

// node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
var React6 = __toESM(require("react@18.3.1"), 0);
var import_react26 = require("react@18.3.1");
function LazyMotion({
  children,
  features,
  strict = false
}) {
  const [, setIsLoaded] = (0, import_react26.useState)(!isLazyBundle(features));
  const loadedRenderer = (0, import_react26.useRef)(void 0);
  if (!isLazyBundle(features)) {
    const {
      renderer,
      ...loadedFeatures
    } = features;
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }
  (0, import_react26.useEffect)(() => {
    if (isLazyBundle(features)) {
      features().then(({
        renderer,
        ...loadedFeatures
      }) => {
        loadFeatures(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return React6.createElement(LazyContext.Provider, {
    value: {
      renderer: loadedRenderer.current,
      strict
    }
  }, children);
}
function isLazyBundle(features) {
  return typeof features === "function";
}

// node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var import_react27 = require("react@18.3.1");
var DeprecatedLayoutGroupContext = (0, import_react27.createContext)(null);

// node_modules/framer-motion/dist/es/projection/node/group.mjs
var notify = node => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
  const nodes = /* @__PURE__ */new Set();
  const subscriptions = /* @__PURE__ */new WeakMap();
  const dirtyAll = () => nodes.forEach(notify);
  return {
    add: node => {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: node => {
      nodes.delete(node);
      const unsubscribe = subscriptions.get(node);
      if (unsubscribe) {
        unsubscribe();
        subscriptions.delete(node);
      }
      dirtyAll();
    },
    dirty: dirtyAll
  };
}

// node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var React7 = __toESM(require("react@18.3.1"), 0);
var import_react28 = require("react@18.3.1");
var shouldInheritGroup = inherit => inherit === true;
var shouldInheritId = inherit => shouldInheritGroup(inherit === true) || inherit === "id";
var LayoutGroup = ({
  children,
  id: id4,
  inherit = true
}) => {
  const layoutGroupContext = (0, import_react28.useContext)(LayoutGroupContext);
  const deprecatedLayoutGroupContext = (0, import_react28.useContext)(DeprecatedLayoutGroupContext);
  const [forceRender, key] = useForceUpdate();
  const context = (0, import_react28.useRef)(null);
  const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
  if (context.current === null) {
    if (shouldInheritId(inherit) && upstreamId) {
      id4 = id4 ? upstreamId + "-" + id4 : upstreamId;
    }
    context.current = {
      id: id4,
      group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
    };
  }
  const memoizedContext = (0, import_react28.useMemo)(() => ({
    ...context.current,
    forceRender
  }), [key]);
  return React7.createElement(LayoutGroupContext.Provider, {
    value: memoizedContext
  }, children);
};

// node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var import_react29 = require("react@18.3.1");
var ReorderContext = (0, import_react29.createContext)(null);

// node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order, value, offset, velocity) {
  if (!velocity) return order;
  const index = order.findIndex(item2 => item2.value === value);
  if (index === -1) return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem) return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mix(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}

// node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
var React8 = __toESM(require("react@18.3.1"), 0);
var import_react30 = require("react@18.3.1");
function ReorderGroup({
  children,
  as = "ul",
  axis = "y",
  onReorder,
  values,
  ...props
}, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const order = [];
  const isReordering = (0, import_react30.useRef)(false);
  invariant(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout2) => {
      const idx = order.findIndex(entry => value === entry.value);
      if (idx !== -1) {
        order[idx].layout = layout2[axis];
      } else {
        order.push({
          value,
          layout: layout2[axis]
        });
      }
      order.sort(compareMin);
    },
    updateOrder: (item, offset, velocity) => {
      if (isReordering.current) return;
      const newOrder = checkReorder(order, item, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter(value => values.indexOf(value) !== -1));
      }
    }
  };
  (0, import_react30.useEffect)(() => {
    isReordering.current = false;
  });
  return React8.createElement(Component2, {
    ...props,
    ref: externalRef,
    ignoreStrict: true
  }, React8.createElement(ReorderContext.Provider, {
    value: context
  }, children));
}
var Group = (0, import_react30.forwardRef)(ReorderGroup);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}

// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var import_react31 = require("react@18.3.1");
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const {
    isStatic
  } = (0, import_react31.useContext)(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = (0, import_react31.useState)(initial);
    (0, import_react31.useEffect)(() => value.on("change", setLatest), []);
  }
  return value;
}

// node_modules/framer-motion/dist/es/utils/transform.mjs
var isCustomValueType = v => {
  return v && typeof v === "object" && v.mix;
};
var getMixer2 = v => isCustomValueType(v) ? v.mix : void 0;
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, {
    mixer: getMixer2(outputRange[0]),
    ...options
  });
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.update(updateValue, false, true);
    const subscriptions = values.map(v => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach(unsubscribe => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}

// node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}

// node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
var React9 = __toESM(require("react@18.3.1"), 0);
var import_react32 = require("react@18.3.1");
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItem({
  children,
  style = {},
  value,
  as = "li",
  onDrag,
  layout: layout2 = true,
  ...props
}, externalRef) {
  const Component2 = useConstant(() => motion(as));
  const context = (0, import_react32.useContext)(ReorderContext);
  const point2 = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point2.x, point2.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  invariant(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const {
    axis,
    registerItem,
    updateOrder
  } = context;
  return React9.createElement(Component2, {
    drag: axis,
    ...props,
    dragSnapToOrigin: true,
    style: {
      ...style,
      x: point2.x,
      y: point2.y,
      zIndex
    },
    layout: layout2,
    onDrag: (event, gesturePoint) => {
      const {
        velocity
      } = gesturePoint;
      velocity[axis] && updateOrder(value, point2[axis].get(), velocity[axis]);
      onDrag && onDrag(event, gesturePoint);
    },
    onLayoutMeasure: measured => registerItem(value, measured),
    ref: externalRef,
    ignoreStrict: true
  }, children);
}
var Item = (0, import_react32.forwardRef)(ReorderItem);

// node_modules/framer-motion/dist/es/components/Reorder/index.mjs
var Reorder = {
  Group,
  Item
};

// node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};

// node_modules/framer-motion/dist/es/render/dom/features-max.mjs
var domMax = {
  ...domAnimation,
  ...drag,
  ...layout
};

// node_modules/framer-motion/dist/es/value/use-motion-template.mjs
function useMotionTemplate(fragments, ...values) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value) {
        output += isMotionValue(value) ? value.get() : value;
      }
    }
    return output;
  }
  return useCombineMotionValues(values.filter(isMotionValue), buildValue);
}

// node_modules/framer-motion/dist/es/value/use-spring.mjs
var import_react33 = require("react@18.3.1");
function useSpring(source, config = {}) {
  const {
    isStatic
  } = (0, import_react33.useContext)(MotionConfigContext);
  const activeSpringAnimation = (0, import_react33.useRef)(null);
  const value = useMotionValue(isMotionValue(source) ? source.get() : source);
  const stopAnimation2 = () => {
    if (activeSpringAnimation.current) {
      activeSpringAnimation.current.stop();
    }
  };
  (0, import_react33.useInsertionEffect)(() => {
    return value.attach((v, set) => {
      if (isStatic) return set(v);
      stopAnimation2();
      activeSpringAnimation.current = animateValue({
        keyframes: [value.get(), v],
        velocity: value.getVelocity(),
        type: "spring",
        restDelta: 1e-3,
        restSpeed: 0.01,
        ...config,
        onUpdate: set
      });
      if (!frameData.isProcessing) {
        const delta = performance.now() - frameData.timestamp;
        if (delta < 30) {
          activeSpringAnimation.current.time = millisecondsToSeconds(delta);
        }
      }
      return value.get();
    }, stopAnimation2);
  }, [JSON.stringify(config)]);
  useIsomorphicLayoutEffect(() => {
    if (isMotionValue(source)) {
      return source.on("change", v => value.set(parseFloat(v)));
    }
  }, [value]);
  return value;
}

// node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var import_react34 = require("react@18.3.1");
function useMotionValueEvent(value, event, callback) {
  (0, import_react34.useInsertionEffect)(() => value.on(event, callback), [value, event, callback]);
}

// node_modules/framer-motion/dist/es/value/use-velocity.mjs
function useVelocity(value) {
  const velocity = useMotionValue(value.getVelocity());
  useMotionValueEvent(value, "velocityChange", newVelocity => {
    velocity.set(newVelocity);
  });
  return velocity;
}

// node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs
function resolveElements(elements, scope, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    let root = document;
    if (scope) {
      invariant(Boolean(scope.current), "Scope provided, but no element detected.");
      root = scope.current;
    }
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = root.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = root.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */new WeakMap();
var observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const {
      inlineSize,
      blockSize
    } = borderBoxSize[0];
    return {
      width: inlineSize,
      height: blockSize
    };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({
  target,
  contentRect,
  borderBoxSize
}) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach(handler => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined") return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer) createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach(element => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach(element => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach(callback => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler) createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = void 0;
    }
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/index.mjs
function resize(a, b) {
  return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
var maxElapsed2 = 50;
var createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
var keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const {
    length,
    position
  } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element["scroll" + position];
  axis.scrollLength = element["scroll" + length] - element["client" + length];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed2 ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
  const inset = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current.tagName === "svg") {
      const svgBoundingBox = current.getBoundingClientRect();
      current = current.parentElement;
      const parentBoundingBox = current.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current instanceof SVGGraphicsElement) {
      const {
        x,
        y
      } = current.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current.parentNode;
      }
      current = svg;
    } else {
      break;
    }
  }
  return inset;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var ScrollOffset = {
  Enter: [[0, 1], [1, 1]],
  Exit: [[0, 0], [1, 0]],
  Any: [[1, 0], [0, 1]],
  All: [[0, 0], [1, 1]]
};

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (namedEdges[edge] !== void 0) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber2 = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber2;
    } else if (edge.endsWith("%")) {
      edge = asNumber2 / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber2 / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber2 / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber2;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var defaultOffset2 = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset2;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
var point = {
  x: 0,
  y: 0
};
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
    width: target.clientWidth,
    height: target.clientHeight
  };
}
function resolveOffsets(container, info, options) {
  let {
    offset: offsetDefinition = ScrollOffset.All
  } = options;
  const {
    target = container,
    axis = "y"
  } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? {
    width: container.scrollWidth,
    height: container.scrollHeight
  } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset(offsetDefinition));
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = info[axis].interpolate(info[axis].current);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
  if (true) {
    if (container && target && target !== container) {
      warnOnce(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
    }
  }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: () => measure(element, options.target, info),
    update: time => {
      updateScrollInfo(element, info, time);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}

// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var scrollListeners = /* @__PURE__ */new WeakMap();
var resizeListeners = /* @__PURE__ */new WeakMap();
var onScrollHandlers = /* @__PURE__ */new WeakMap();
var getEventTarget = element => element === document.documentElement ? window : element;
function scrollInfo(onScroll, {
  container = document.documentElement,
  ...options
} = {}) {
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers) handler.measure();
    };
    const updateAll = () => {
      for (const handler of containerHandlers) {
        handler.update(frameData.timestamp);
      }
    };
    const notifyAll2 = () => {
      for (const handler of containerHandlers) handler.notify();
    };
    const listener2 = () => {
      frame.read(measureAll, false, true);
      frame.read(updateAll, false, true);
      frame.update(notifyAll2, false, true);
    };
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2, {
      passive: true
    });
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2, {
      passive: true
    });
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    var _a;
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers) return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size) return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
      window.removeEventListener("resize", scrollListener);
    }
  };
}

// node_modules/framer-motion/dist/es/value/use-scroll.mjs
var import_react35 = require("react@18.3.1");
function refWarning(name, ref) {
  warning(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
var createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
function useScroll({
  container,
  target,
  layoutEffect = true,
  ...options
} = {}) {
  const values = useConstant(createScrollMotionValues);
  const useLifecycleEffect = layoutEffect ? useIsomorphicLayoutEffect : import_react35.useEffect;
  useLifecycleEffect(() => {
    refWarning("target", target);
    refWarning("container", container);
    return scrollInfo(({
      x,
      y
    }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: (container === null || container === void 0 ? void 0 : container.current) || void 0,
      target: (target === null || target === void 0 ? void 0 : target.current) || void 0
    });
  }, [container, target, JSON.stringify(options.offset)]);
  return values;
}

// node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs
function useElementScroll(ref) {
  if (true) {
    warnOnce(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
  }
  return useScroll({
    container: ref
  });
}

// node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs
function useViewportScroll() {
  if (true) {
    warnOnce(false, "useViewportScroll is deprecated. Convert to useScroll().");
  }
  return useScroll();
}

// node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
var import_react36 = require("react@18.3.1");
function useAnimationFrame(callback) {
  const initialTimestamp = (0, import_react36.useRef)(0);
  const {
    isStatic
  } = (0, import_react36.useContext)(MotionConfigContext);
  (0, import_react36.useEffect)(() => {
    if (isStatic) return;
    const provideTimeSinceStart = ({
      timestamp,
      delta
    }) => {
      if (!initialTimestamp.current) initialTimestamp.current = timestamp;
      callback(timestamp - initialTimestamp.current, delta);
    };
    frame.update(provideTimeSinceStart, true);
    return () => cancelFrame(provideTimeSinceStart);
  }, [callback]);
}

// node_modules/framer-motion/dist/es/value/use-time.mjs
function useTime() {
  const time = useMotionValue(0);
  useAnimationFrame(t => time.set(t));
  return time;
}

// node_modules/framer-motion/dist/es/value/use-will-change/index.mjs
var WillChangeMotionValue = class extends MotionValue {
  constructor() {
    super(...arguments);
    this.members = [];
    this.transforms = /* @__PURE__ */new Set();
  }
  add(name) {
    let memberName;
    if (transformProps.has(name)) {
      this.transforms.add(name);
      memberName = "transform";
    } else if (!name.startsWith("origin") && !isCSSVariableName(name) && name !== "willChange") {
      memberName = camelToDash(name);
    }
    if (memberName) {
      addUniqueItem(this.members, memberName);
      this.update();
    }
  }
  remove(name) {
    if (transformProps.has(name)) {
      this.transforms.delete(name);
      if (!this.transforms.size) {
        removeItem(this.members, "transform");
      }
    } else {
      removeItem(this.members, camelToDash(name));
    }
    this.update();
  }
  update() {
    this.set(this.members.length ? this.members.join(", ") : "auto");
  }
};
function useWillChange() {
  return useConstant(() => new WillChangeMotionValue("auto"));
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react37 = require("react@18.3.1");
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = (0, import_react37.useState)(prefersReducedMotion.current);
  if (true) {
    warnOnce(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
  }
  return shouldReduceMotion;
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
var import_react38 = require("react@18.3.1");
function useReducedMotionConfig() {
  const reducedMotionPreference = useReducedMotion();
  const {
    reducedMotion
  } = (0, import_react38.useContext)(MotionConfigContext);
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs
function stopAnimation(visualElement) {
  visualElement.values.forEach(value => value.stop());
}
function animationControls() {
  let hasMounted = false;
  const subscribers = /* @__PURE__ */new Set();
  const controls = {
    subscribe(visualElement) {
      subscribers.add(visualElement);
      return () => void subscribers.delete(visualElement);
    },
    start(definition, transitionOverride) {
      invariant(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      const animations2 = [];
      subscribers.forEach(visualElement => {
        animations2.push(animateVisualElement(visualElement, definition, {
          transitionOverride
        }));
      });
      return Promise.all(animations2);
    },
    set(definition) {
      invariant(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach(visualElement => {
        setValues(visualElement, definition);
      });
    },
    stop() {
      subscribers.forEach(visualElement => {
        stopAnimation(visualElement);
      });
    },
    mount() {
      hasMounted = true;
      return () => {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const {
      currentTime
    } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress2 = percentage / 100;
    if (prevProgress !== progress2) {
      update(progress2);
    }
    prevProgress = progress2;
  };
  frame.update(onFrame, true);
  return () => cancelFrame(onFrame);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/supports.mjs
var supportsScrollTimeline = memo(() => window.ScrollTimeline !== void 0);

// node_modules/framer-motion/dist/es/animation/GroupPlaybackControls.mjs
var GroupPlaybackControls = class {
  constructor(animations2) {
    this.animations = animations2.filter(Boolean);
  }
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline) {
    const cancelAll = this.animations.map(animation => {
      if (supportsScrollTimeline() && animation.attachTimeline) {
        animation.attachTimeline(timeline);
      } else {
        animation.pause();
        return observeTimeline(progress2 => {
          animation.time = animation.duration * progress2;
        }, timeline);
      }
    });
    return () => {
      cancelAll.forEach((cancelTimeline, i) => {
        if (cancelTimeline) cancelTimeline();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time) {
    this.setAll("time", time);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get duration() {
    let max = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max = Math.max(max, this.animations[i].duration);
    }
    return max;
  }
  runAll(methodName) {
    this.animations.forEach(controls => controls[methodName]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  stop() {
    this.runAll("stop");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};

// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes2) {
  return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
}

// node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function createVisualElement(element) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  };
  const node = isSVGElement(element) ? new SVGVisualElement(options, {
    enableHardwareAcceleration: false
  }) : new HTMLVisualElement(options, {
    enableHardwareAcceleration: true
  });
  node.mount(element);
  visualElementStore.set(element, node);
}

// node_modules/framer-motion/dist/es/easing/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale2 = 100) {
  const generator = spring({
    keyframes: [0, scale2],
    ...options
  });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: progress2 => generator.next(duration * progress2).value / scale2,
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function calcNextTime(current, next, prev, labels) {
  var _a;
  if (typeof next === "number") {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
  }
}

// node_modules/framer-motion/dist/es/utils/wrap.mjs
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes2.length; i++) {
    sequence.push({
      value: keyframes2[i],
      at: mix(startTime, endTime, offset[i]),
      easing: getEasingForSegment(easing, i)
    });
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null) return 1;
    if (b.value === null) return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var defaultSegmentEasing = "easeInOut";
function createAnimationsFromSequence(sequence, {
  defaultTransition = {},
  ...sequenceTransition
} = {}, scope) {
  const defaultDuration = defaultTransition.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */new Map();
  const sequences = /* @__PURE__ */new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < sequence.length; i++) {
    const segment = sequence[i];
    if (typeof segment === "string") {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    let [subject, keyframes2, transition = {}] = segment;
    if (transition.at !== void 0) {
      currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
    }
    let maxDuration3 = 0;
    const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numElements = 0) => {
      const valueKeyframesAsList = keyframesAsList(valueKeyframes);
      const {
        delay: delay2 = 0,
        times = defaultOffset(valueKeyframesAsList),
        type = "keyframes",
        ...remainingTransition
      } = valueTransition;
      let {
        ease: ease2 = defaultTransition.ease || "easeOut",
        duration
      } = valueTransition;
      const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numElements) : delay2;
      const numKeyframes = valueKeyframesAsList.length;
      if (numKeyframes <= 2 && type === "spring") {
        let absoluteDelta = 100;
        if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
          const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
          absoluteDelta = Math.abs(delta);
        }
        const springTransition = {
          ...remainingTransition
        };
        if (duration !== void 0) {
          springTransition.duration = secondsToMilliseconds(duration);
        }
        const springEasing = createGeneratorEasing(springTransition, absoluteDelta);
        ease2 = springEasing.ease;
        duration = springEasing.duration;
      }
      duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
      const startTime = currentTime + calculatedDelay;
      const targetTime = startTime + duration;
      if (times.length === 1 && times[0] === 0) {
        times[1] = 1;
      }
      const remainder = times.length - valueKeyframesAsList.length;
      remainder > 0 && fillOffset(times, remainder);
      valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
      addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
      maxDuration3 = Math.max(calculatedDelay + duration, maxDuration3);
      totalDuration = Math.max(targetTime, totalDuration);
    };
    if (isMotionValue(subject)) {
      const subjectSequence = getSubjectSequence(subject, sequences);
      resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
    } else {
      const elements = resolveElements(subject, scope, elementCache);
      const numElements = elements.length;
      for (let elementIndex = 0; elementIndex < numElements; elementIndex++) {
        keyframes2 = keyframes2;
        transition = transition;
        const element = elements[elementIndex];
        const subjectSequence = getSubjectSequence(element, sequences);
        for (const key in keyframes2) {
          resolveValueSequence(keyframes2[key], getValueTransition2(transition, key), getValueSequence(key, subjectSequence), elementIndex, numElements);
        }
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration3;
  }
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes2 = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const {
          at,
          value,
          easing
        } = valueSequence[i];
        keyframes2.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes2.unshift(keyframes2[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes2.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes2;
      definition.transition[key] = {
        ...defaultTransition,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name]) sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes2) {
  return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
}
function getValueTransition2(transition, key) {
  return transition[key] ? {
    ...transition,
    ...transition[key]
  } : {
    ...transition
  };
}
var isNumber = keyframe => typeof keyframe === "number";
var isNumberKeyframesArray = keyframes2 => keyframes2.every(isNumber);

// node_modules/framer-motion/dist/es/animation/animate.mjs
function animateElements(elementOrSelector, keyframes2, options, scope) {
  const elements = resolveElements(elementOrSelector, scope);
  const numElements = elements.length;
  invariant(Boolean(numElements), "No valid element provided.");
  const animations2 = [];
  for (let i = 0; i < numElements; i++) {
    const element = elements[i];
    if (!visualElementStore.has(element)) {
      createVisualElement(element);
    }
    const visualElement = visualElementStore.get(element);
    const transition = {
      ...options
    };
    if (typeof transition.delay === "function") {
      transition.delay = transition.delay(i, numElements);
    }
    animations2.push(...animateTarget(visualElement, {
      ...keyframes2,
      transition
    }, {}));
  }
  return new GroupPlaybackControls(animations2);
}
var isSequence = value => Array.isArray(value) && Array.isArray(value[0]);
function animateSequence(sequence, options, scope) {
  const animations2 = [];
  const animationDefinitions = createAnimationsFromSequence(sequence, options, scope);
  animationDefinitions.forEach(({
    keyframes: keyframes2,
    transition
  }, subject) => {
    let animation;
    if (isMotionValue(subject)) {
      animation = animateSingleValue(subject, keyframes2.default, transition.default);
    } else {
      animation = animateElements(subject, keyframes2, transition);
    }
    animations2.push(animation);
  });
  return new GroupPlaybackControls(animations2);
}
var createScopedAnimate = scope => {
  function scopedAnimate(valueOrElementOrSequence, keyframes2, options) {
    let animation;
    if (isSequence(valueOrElementOrSequence)) {
      animation = animateSequence(valueOrElementOrSequence, keyframes2, scope);
    } else if (isDOMKeyframes(keyframes2)) {
      animation = animateElements(valueOrElementOrSequence, keyframes2, options, scope);
    } else {
      animation = animateSingleValue(valueOrElementOrSequence, keyframes2, options);
    }
    if (scope) {
      scope.animations.push(animation);
    }
    return animation;
  }
  return scopedAnimate;
};
var animate = createScopedAnimate();

// node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs
function useAnimate() {
  const scope = useConstant(() => ({
    current: null,
    animations: []
  }));
  const animate2 = useConstant(() => createScopedAnimate(scope));
  useUnmountEffect(() => {
    scope.animations.forEach(animation => animation.stop());
  });
  return [scope, animate2];
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
var useAnimation = useAnimationControls;

// node_modules/framer-motion/dist/es/utils/use-cycle.mjs
var import_react39 = require("react@18.3.1");
function useCycle(...items) {
  const index = (0, import_react39.useRef)(0);
  const [item, setItem] = (0, import_react39.useState)(items[index.current]);
  const runCycle = (0, import_react39.useCallback)(next => {
    index.current = typeof next !== "number" ? wrap(0, items.length, index.current + 1) : next;
    setItem(items[index.current]);
  }, [items.length, ...items]);
  return [item, runCycle];
}

// node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
var thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, {
  root,
  margin: rootMargin,
  amount = "some"
} = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */new WeakMap();
  const onIntersectionChange = entries => {
    entries.forEach(entry => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd)) return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (onEnd) {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach(element => observer2.observe(element));
  return () => observer2.disconnect();
}

// node_modules/framer-motion/dist/es/utils/use-in-view.mjs
var import_react40 = require("react@18.3.1");
function useInView(ref, {
  root,
  margin,
  amount,
  once = false
} = {}) {
  const [isInView, setInView] = (0, import_react40.useState)(false);
  (0, import_react40.useEffect)(() => {
    if (!ref.current || once && isInView) return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}

// node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var DragControls = class {
  constructor() {
    this.componentControls = /* @__PURE__ */new Set();
  }
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  start(event, options) {
    this.componentControls.forEach(controls => {
      controls.start(event.nativeEvent || event, options);
    });
  }
};
var createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
var import_react41 = require("react@18.3.1");
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react41.useEffect)(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs
function isMotionComponent(component) {
  return component !== null && typeof component === "object" && motionComponentSymbol in component;
}

// node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs
function unwrapMotionComponent(component) {
  if (isMotionComponent(component)) {
    return component[motionComponentSymbol];
  }
  return void 0;
}

// node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs
function useInstantLayoutTransition() {
  return startTransition;
}
function startTransition(callback) {
  if (!rootProjectionNode.current) return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  callback && callback();
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
var import_react42 = require("react@18.3.1");
function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();
  const unlockOnFrameRef = (0, import_react42.useRef)();
  (0, import_react42.useEffect)(() => {
    frame.postRender(() => frame.postRender(() => {
      if (forcedRenderCount !== unlockOnFrameRef.current) return;
      instantAnimationState.current = false;
    }));
  }, [forcedRenderCount]);
  return callback => {
    startInstantLayoutTransition(() => {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
      unlockOnFrameRef.current = forcedRenderCount + 1;
    });
  };
}
function disableInstantTransitions() {
  instantAnimationState.current = false;
}

// node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
var React10 = __toESM(require("react@18.3.1"), 0);
function useResetProjection() {
  const reset = React10.useCallback(() => {
    const root = rootProjectionNode.current;
    if (!root) return;
    root.resetTree();
  }, []);
  return reset;
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs
var appearStoreId = (id4, value) => `${id4}: ${value}`;

// node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs
var appearAnimationStore = /* @__PURE__ */new Map();

// node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs
var handoffFrameTime;
function handoffOptimizedAppearAnimation(elementId, valueName, _value, _frame) {
  const optimisedValueName = transformProps.has(valueName) ? "transform" : valueName;
  const storeId = appearStoreId(elementId, optimisedValueName);
  const optimisedAnimation = appearAnimationStore.get(storeId);
  if (!optimisedAnimation) {
    return null;
  }
  const {
    animation,
    startTime
  } = optimisedAnimation;
  const cancelAnimation = () => {
    appearAnimationStore.delete(storeId);
    try {
      animation.cancel();
    } catch (error) {}
  };
  if (startTime === null || window.HandoffComplete) {
    cancelAnimation();
    return null;
  } else {
    if (handoffFrameTime === void 0) {
      handoffFrameTime = performance.now();
    }
    return handoffFrameTime - startTime || 0;
  }
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs
var startFrameTime;
var readyAnimation;
function startOptimizedAppearAnimation(element, name, keyframes2, options, onReady) {
  if (window.HandoffComplete) {
    window.HandoffAppearAnimations = void 0;
    return;
  }
  const id4 = element.dataset[optimizedAppearDataId];
  if (!id4) return;
  window.HandoffAppearAnimations = handoffOptimizedAppearAnimation;
  const storeId = appearStoreId(id4, name);
  if (!readyAnimation) {
    readyAnimation = animateStyle(element, name, [keyframes2[0], keyframes2[0]], {
      duration: 1e4,
      ease: "linear"
    });
    appearAnimationStore.set(storeId, {
      animation: readyAnimation,
      startTime: null
    });
  }
  const startAnimation = () => {
    readyAnimation.cancel();
    const appearAnimation = animateStyle(element, name, keyframes2, options);
    if (startFrameTime === void 0) {
      startFrameTime = performance.now();
    }
    appearAnimation.startTime = startFrameTime;
    appearAnimationStore.set(storeId, {
      animation: appearAnimation,
      startTime: startFrameTime
    });
    if (onReady) onReady(appearAnimation);
  };
  if (readyAnimation.ready) {
    readyAnimation.ready.then(startAnimation).catch(noop);
  } else {
    startAnimation();
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs
var import_react43 = require("react@18.3.1");
var createObject = () => ({});
var StateVisualElement = class extends VisualElement {
  build() {}
  measureInstanceViewportBox() {
    return createBox();
  }
  resetTransform() {}
  restoreTransform() {}
  removeValueFromRenderState() {}
  renderInstance() {}
  scrapeMotionValuesFromProps() {
    return createObject();
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  }
  sortInstanceNodePosition() {
    return 0;
  }
  makeTargetAnimatableFromInstance({
    transition,
    transitionEnd,
    ...target
  }) {
    const origin = getOrigin(target, transition || {}, this);
    checkTargetForNewValues(this, target, origin);
    return {
      transition,
      transitionEnd,
      ...target
    };
  }
};
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
function useAnimatedState(initialState) {
  const [animationState, setAnimationState] = (0, import_react43.useState)(initialState);
  const visualState = useVisualState({}, false);
  const element = useConstant(() => {
    return new StateVisualElement({
      props: {},
      visualState,
      presenceContext: null
    }, {
      initialState
    });
  });
  (0, import_react43.useEffect)(() => {
    element.mount({});
    return () => element.unmount();
  }, [element]);
  (0, import_react43.useEffect)(() => {
    element.update({
      onUpdate: v => {
        setAnimationState({
          ...v
        });
      }
    }, null);
  }, [setAnimationState, element]);
  const startAnimation = useConstant(() => animationDefinition => {
    return animateVisualElement(element, animationDefinition);
  });
  return [animationState, startAnimation];
}

// node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
var import_react44 = require("react@18.3.1");
var maxScale = 1e5;
var invertScale = scale2 => scale2 > 1e-3 ? 1 / scale2 : maxScale;
var hasWarned = false;
function useInvertedScale(scale2) {
  let parentScaleX = useMotionValue(1);
  let parentScaleY = useMotionValue(1);
  const {
    visualElement
  } = (0, import_react44.useContext)(MotionContext);
  invariant(!!(scale2 || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  warning(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;
  if (scale2) {
    parentScaleX = scale2.scaleX || parentScaleX;
    parentScaleY = scale2.scaleY || parentScaleY;
  } else if (visualElement) {
    parentScaleX = visualElement.getValue("scaleX", 1);
    parentScaleY = visualElement.getValue("scaleY", 1);
  }
  const scaleX = useTransform(parentScaleX, invertScale);
  const scaleY = useTransform(parentScaleY, invertScale);
  return {
    scaleX,
    scaleY
  };
}

// node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
var React11 = __toESM(require("react@18.3.1"), 0);
var id3 = 0;
var AnimateSharedLayout = ({
  children
}) => {
  React11.useEffect(() => {
    invariant(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
  }, []);
  return React11.createElement(LayoutGroup, {
    id: useConstant(() => `asl-${id3++}`)
  }, children);
};

// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function scrollTimelineFallback({
  source,
  axis = "y"
}) {
  const currentTime = {
    value: 0
  };
  const cancel = scrollInfo(info => {
    currentTime.value = info[axis].progress * 100;
  }, {
    container: source,
    axis
  });
  return {
    currentTime,
    cancel
  };
}
var timelineCache = /* @__PURE__ */new Map();
function getTimeline({
  source = document.documentElement,
  axis = "y"
} = {}) {
  if (!timelineCache.has(source)) {
    timelineCache.set(source, {});
  }
  const elementCache = timelineCache.get(source);
  if (!elementCache[axis]) {
    elementCache[axis] = supportsScrollTimeline() ? new ScrollTimeline({
      source,
      axis
    }) : scrollTimelineFallback({
      source,
      axis
    });
  }
  return elementCache[axis];
}
function scroll(onScroll, options) {
  const timeline = getTimeline(options);
  if (typeof onScroll === "function") {
    return observeTimeline(onScroll, timeline);
  } else {
    return onScroll.attachTimeline(timeline);
  }
}

// node_modules/framer-motion/dist/es/animation/utils/stagger.mjs
function getOriginIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function stagger(duration = 0.1, {
  startDelay = 0,
  from = 0,
  ease: ease2
} = {}) {
  return (i, total) => {
    const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
    const distance2 = Math.abs(fromIndex - i);
    let delay2 = duration * distance2;
    if (ease2) {
      const maxDelay = total * duration;
      const easingFunction = easingDefinitionToFunction(ease2);
      delay2 = easingFunction(delay2 / maxDelay) * maxDelay;
    }
    return startDelay + delay2;
  };
}

// node_modules/framer-motion/dist/es/frameloop/index-legacy.mjs
var sync = frame;
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = process2 => cancelFrame(process2);
  return acc;
}, {});
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9mcmFtZXItbW90aW9uLjEwLjE4LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29uZmlnQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvUHJlc2VuY2VDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtYnJvd3Nlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pc29tb3JwaGljLWVmZmVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF6eUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2NhbWVsLXRvLWRhc2gubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9kYXRhLWlkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLXJlZi1vYmplY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLW1vdGlvbi1yZWYubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvaXMtdmFyaWFudC1sYWJlbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1hbmltYXRpb24tY29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvdmFyaWFudC1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy1jb250cm9sbGluZy12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9jcmVhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZGVmaW5pdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvbG9hZC1mZWF0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Td2l0Y2hMYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvc3ltYm9sLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9tb3Rpb24tcHJveHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2xvd2VyY2FzZS1lbGVtZW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtc3ZnLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWNvcnJlY3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvaXMtZm9yY2VkLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3V0aWxzL2lzLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXRyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtY3NzLXZhcmlhYmxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9nZXQtYXMtdHlwZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2NsYW1wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy91bml0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1pbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL251bWJlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXN0eWxlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2NyZWF0ZS1yZW5kZXItc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdmFsaWQtcHJvcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvZmlsdGVyLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy90cmFuc2Zvcm0tb3JpZ2luLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9wYXRoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9idWlsZC1hdHRycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvaXMtc3ZnLXRhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXNlLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91c2UtcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jYW1lbC1jYXNlLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvc2NyYXBlLW1vdGlvbi12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvcmVzb2x2ZS12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1jb25zdGFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1rZXlmcmFtZXMtdGFyZ2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVzb2x2ZS12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3V0aWxzL3Jlc29sdmUtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS12aXN1YWwtc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9ub29wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL3JlbmRlci1zdGVwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL2JhdGNoZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9jb25maWctbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9jcmVhdGUtY29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2FkZC1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvdXRpbHMvaXMtcHJpbWFyeS1wb2ludGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2V2ZW50LWluZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvYWRkLXBvaW50ZXItZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9waXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9sb2NrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL0ZlYXR1cmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9ob3Zlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2ZvY3VzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvdXRpbHMvaXMtbm9kZS1vci1jaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L29ic2VydmVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9nZXN0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3NoYWxsb3ctY29tcGFyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLWR5bmFtaWMtdmFyaWFudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9lcnJvcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90aW1lLWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW5zdGFudC10cmFuc2l0aW9uLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2lzLWJlemllci1kZWZpbml0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS9lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS91dGlscy9nZXQtZmluYWwta2V5ZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY3ViaWMtYmV6aWVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2Vhc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtZWFzaW5nLWFycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL21vZGlmaWVycy9taXJyb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL3JldmVyc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY2lyYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9iYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2FudGljaXBhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvbWFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9yZ2JhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaHNsYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaHNsYS10by1yZ2JhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4LWNvbG9yLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29tcGxleC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC1jb21wbGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcHJvZ3Jlc3MubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pbnRlcnBvbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZmlsbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZGVmYXVsdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL2tleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3ZlbG9jaXR5LXBlci1zZWNvbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy91dGlscy92ZWxvY2l0eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3NwcmluZy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvaW5lcnRpYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvanMvZHJpdmVyLWZyYW1lbG9vcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL2NhbGMtZHVyYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL2pzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWVtby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvY3JlYXRlLWFjY2VsZXJhdGVkLWFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvaW5zdGFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9kZWZhdWx0LXRyYW5zaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb21wbGV4L2ZpbHRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZGVmYXVsdHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2FuaW1hdGFibGUtbm9uZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLXplcm8tdmFsdWUtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLW5vbmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMva2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL3RyYW5zaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvR2xvYmFsQ29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXdpbGwtY2hhbmdlL2lzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtbnVtZXJpY2FsLXN0cmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2FycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvc3Vic2NyaXB0aW9uLW1hbmFnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93YXJuLW9uY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdGVzdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1hdXRvLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kaW1lbnNpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL3NldHRlcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC12YXJpYW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvYW5pbWF0aW9uLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb24vZXhpdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGlzdGFuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9wYW4vUGFuU2Vzc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtY2FsYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvdXRpbHMvY29uc3RyYWludHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L21vZGVscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXRpbHMvZWFjaC1heGlzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9oYXMtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1hcHBseS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXRpbHMvbWVhc3VyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2dldC1jb250ZXh0LXdpbmRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9wYW4vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS91c2UtcHJlc2VuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1ib3JkZXItcmFkaXVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtYm94LXNoYWRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQvTWVhc3VyZUxheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vYW5pbWF0aW9uL21peC12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2NvcHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLXJlbW92ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3NoYXJlZC9zdGFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9jb21wYXJlLWJ5LWRlcHRoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2ZsYXQtdHJlZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2RlbGF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZGVidWcvcmVjb3JkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1zdmctZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3NpbmdsZS12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9jcmVhdGUtcHJvamVjdGlvbi1ub2RlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL0RvY3VtZW50UHJvamVjdGlvbk5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvSFRNTFByb2plY3Rpb25Ob2RlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2RyYWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2Nzcy12YXJpYWJsZXMtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvdW5pdC1jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9wYXJzZS1kb20tdmFyaWFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3N0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdG9yZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9WaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9ET01WaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvSFRNTFZpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL1NWR1Zpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL21vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vbW90aW9uLW1pbmltYWwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaXMtbW91bnRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1mb3JjZS11cGRhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9Qb3BDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1ByZXNlbmNlQ2hpbGQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtdW5tb3VudC1lZmZlY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvTW90aW9uQ29uZmlnL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXp5TW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9EZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXlvdXRHcm91cC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvUmVvcmRlckNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvdXRpbHMvY2hlY2stcmVvcmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9Hcm91cC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tYmluZS12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tcHV0ZWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0l0ZW0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2ZlYXR1cmVzLWFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtbWF4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLW1vdGlvbi10ZW1wbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zcHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtbW90aW9uLXZhbHVlLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9yZXNvbHZlLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9oYW5kbGUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS13aW5kb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luc2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9wcmVzZXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9lZGdlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9vZmZzZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb24tc2Nyb2xsLWhhbmRsZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC90cmFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLWVsZW1lbnQtc2Nyb2xsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvc2Nyb2xsL3VzZS12aWV3cG9ydC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtYW5pbWF0aW9uLWZyYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi91c2UtcmVkdWNlZC1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi91c2UtcmVkdWNlZC1tb3Rpb24tY29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL2FuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29ic2VydmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9zdXBwb3J0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9Hcm91cFBsYXliYWNrQ29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtZG9tLWtleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9jcmVhdGUtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvY3JlYXRlLWdlbmVyYXRvci1lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvY2FsYy10aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvd3JhcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9nZXQtZWFzaW5nLWZvci1zZWdtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL2VkaXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvc29ydC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS9jcmVhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWN5Y2xlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbi12aWV3Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91c2UtZHJhZy1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy91c2UtZG9tLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL2lzLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdW53cmFwLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3VzZS1pbnN0YW50LWxheW91dC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluc3RhbnQtdHJhbnNpdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXNlLXJlc2V0LXByb2plY3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9zdG9yZS1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvaGFuZG9mZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0YXJ0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlZC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1pbnZlcnRlZC1zY2FsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVNoYXJlZExheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL3N0YWdnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvaW5kZXgtbGVnYWN5Lm1qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX21lbW9pemVfYnJvd3Nlcl9janMiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuY2pzLmpzIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJtZW1vaXplIiwiZm4iLCJjYWNoZSIsImFyZyIsImRlZmF1bHQiLCJyZXF1aXJlX2lzX3Byb3BfdmFsaWRfYnJvd3Nlcl9janMiLCJub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2lzLXByb3AtdmFsaWQuYnJvd3Nlci5janMuanMiLCJfaW50ZXJvcERlZmF1bHQiLCJleCIsInJlYWN0UHJvcHNSZWdleCIsImluZGV4IiwicHJvcCIsInRlc3QiLCJjaGFyQ29kZUF0IiwiZnJhbWVyX21vdGlvbl8xMF8xOF8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVTaGFyZWRMYXlvdXQiLCJEZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0IiwiRHJhZ0NvbnRyb2xzIiwiRmxhdFRyZWUiLCJMYXlvdXRHcm91cCIsIkxheW91dEdyb3VwQ29udGV4dCIsIkxhenlNb3Rpb24iLCJNb3Rpb25Db25maWciLCJNb3Rpb25Db25maWdDb250ZXh0IiwiTW90aW9uQ29udGV4dCIsIk1vdGlvbkdsb2JhbENvbmZpZyIsIk1vdGlvblZhbHVlIiwiUHJlc2VuY2VDb250ZXh0IiwiUmVvcmRlciIsIlN3aXRjaExheW91dEdyb3VwQ29udGV4dCIsIlZpc3VhbEVsZW1lbnQiLCJhZGRQb2ludGVyRXZlbnQiLCJhZGRQb2ludGVySW5mbyIsImFkZFNjYWxlQ29ycmVjdG9yIiwiYW5pbWF0ZSIsImFuaW1hdGVWYWx1ZSIsImFuaW1hdGVWaXN1YWxFbGVtZW50IiwiYW5pbWF0aW9uQ29udHJvbHMiLCJhbmltYXRpb25zIiwiYW50aWNpcGF0ZSIsImJhY2tJbiIsImJhY2tJbk91dCIsImJhY2tPdXQiLCJidWlsZFRyYW5zZm9ybSIsImNhbGNMZW5ndGgiLCJjYW5jZWxGcmFtZSIsImNhbmNlbFN5bmMiLCJjaGVja1RhcmdldEZvck5ld1ZhbHVlcyIsImNpcmNJbiIsImNpcmNJbk91dCIsImNpcmNPdXQiLCJjbGFtcCIsImNvbG9yIiwiY29tcGxleCIsImNyZWF0ZUJveCIsImNyZWF0ZURvbU1vdGlvbkNvbXBvbmVudCIsImNyZWF0ZU1vdGlvbkNvbXBvbmVudCIsImNyZWF0ZVNjb3BlZEFuaW1hdGUiLCJjdWJpY0JlemllciIsImRlbGF5IiwiZGlzYWJsZUluc3RhbnRUcmFuc2l0aW9ucyIsImRpc3RhbmNlIiwiZGlzdGFuY2UyRCIsImRvbUFuaW1hdGlvbiIsImRvbU1heCIsImVhc2VJbiIsImVhc2VJbk91dCIsImVhc2VPdXQiLCJmaWx0ZXJQcm9wcyIsImZyYW1lIiwiZnJhbWVEYXRhIiwiaW5WaWV3IiwiaW50ZXJwb2xhdGUiLCJpbnZhcmlhbnQiLCJpc0Jyb3dzZXIiLCJpc0RyYWdBY3RpdmUiLCJpc01vdGlvbkNvbXBvbmVudCIsImlzTW90aW9uVmFsdWUiLCJpc1ZhbGlkTW90aW9uUHJvcCIsIm0iLCJtYWtlVXNlVmlzdWFsU3RhdGUiLCJtaXJyb3JFYXNpbmciLCJtaXgiLCJtb3Rpb24iLCJtb3Rpb25WYWx1ZSIsIm9wdGltaXplZEFwcGVhckRhdGFBdHRyaWJ1dGUiLCJwaXBlIiwicHJvZ3Jlc3MiLCJweCIsInJlc29sdmVNb3Rpb25WYWx1ZSIsInJldmVyc2VFYXNpbmciLCJzY3JvbGwiLCJzY3JvbGxJbmZvIiwic3ByaW5nIiwic3RhZ2dlciIsInN0YXJ0T3B0aW1pemVkQXBwZWFyQW5pbWF0aW9uIiwic3RlcHMiLCJzeW5jIiwidHJhbnNmb3JtIiwidW53cmFwTW90aW9uQ29tcG9uZW50IiwidXNlQW5pbWF0ZSIsInVzZUFuaW1hdGlvbiIsInVzZUFuaW1hdGlvbkNvbnRyb2xzIiwidXNlQW5pbWF0aW9uRnJhbWUiLCJ1c2VDeWNsZSIsInVzZURlcHJlY2F0ZWRBbmltYXRlZFN0YXRlIiwidXNlQW5pbWF0ZWRTdGF0ZSIsInVzZURlcHJlY2F0ZWRJbnZlcnRlZFNjYWxlIiwidXNlSW52ZXJ0ZWRTY2FsZSIsInVzZURvbUV2ZW50IiwidXNlRHJhZ0NvbnRyb2xzIiwidXNlRWxlbWVudFNjcm9sbCIsInVzZUZvcmNlVXBkYXRlIiwidXNlSW5WaWV3IiwidXNlSW5zdGFudExheW91dFRyYW5zaXRpb24iLCJ1c2VJbnN0YW50VHJhbnNpdGlvbiIsInVzZUlzUHJlc2VudCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ1c2VNb3Rpb25UZW1wbGF0ZSIsInVzZU1vdGlvblZhbHVlIiwidXNlTW90aW9uVmFsdWVFdmVudCIsInVzZVByZXNlbmNlIiwidXNlUmVkdWNlZE1vdGlvbiIsInVzZVJlZHVjZWRNb3Rpb25Db25maWciLCJ1c2VSZXNldFByb2plY3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VTcHJpbmciLCJ1c2VUaW1lIiwidXNlVHJhbnNmb3JtIiwidXNlVW5tb3VudEVmZmVjdCIsInVzZVZlbG9jaXR5IiwidXNlVmlld3BvcnRTY3JvbGwiLCJ1c2VXaWxsQ2hhbmdlIiwidmlzdWFsRWxlbWVudFN0b3JlIiwid2FybmluZyIsIndyYXAiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcmVhY3QiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsInRyYW5zZm9ybVBhZ2VQb2ludCIsInAiLCJpc1N0YXRpYyIsInJlZHVjZWRNb3Rpb24iLCJpbXBvcnRfcmVhY3QyIiwiaW1wb3J0X3JlYWN0MyIsImRvY3VtZW50IiwiaW1wb3J0X3JlYWN0NCIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsImltcG9ydF9yZWFjdDUiLCJMYXp5Q29udGV4dCIsInN0cmljdCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwib3B0aW1pemVkQXBwZWFyRGF0YUlkIiwiaW1wb3J0X3JlYWN0NiIsInVzZVZpc3VhbEVsZW1lbnQiLCJDb21wb25lbnQyIiwidmlzdWFsU3RhdGUiLCJwcm9wcyIsImNyZWF0ZVZpc3VhbEVsZW1lbnQyIiwidmlzdWFsRWxlbWVudCIsInBhcmVudCIsInVzZUNvbnRleHQiLCJsYXp5Q29udGV4dCIsInByZXNlbmNlQ29udGV4dCIsInJlZHVjZWRNb3Rpb25Db25maWciLCJ2aXN1YWxFbGVtZW50UmVmIiwidXNlUmVmIiwicmVuZGVyZXIiLCJjdXJyZW50IiwiYmxvY2tJbml0aWFsQW5pbWF0aW9uIiwiaW5pdGlhbCIsInVzZUluc2VydGlvbkVmZmVjdCIsInVwZGF0ZSIsIndhbnRzSGFuZG9mZiIsIkJvb2xlYW4iLCJ3aW5kb3ciLCJIYW5kb2ZmQ29tcGxldGUiLCJyZW5kZXIiLCJhbmltYXRpb25TdGF0ZSIsImFuaW1hdGVDaGFuZ2VzIiwidXBkYXRlRmVhdHVyZXMiLCJpc1JlZk9iamVjdCIsInJlZiIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImltcG9ydF9yZWFjdDciLCJ1c2VNb3Rpb25SZWYiLCJleHRlcm5hbFJlZiIsInVzZUNhbGxiYWNrIiwiaW5zdGFuY2UiLCJtb3VudCIsInVubW91bnQiLCJpc1ZhcmlhbnRMYWJlbCIsInYiLCJBcnJheSIsImlzQXJyYXkiLCJpc0FuaW1hdGlvbkNvbnRyb2xzIiwic3RhcnQiLCJ2YXJpYW50UHJpb3JpdHlPcmRlciIsInZhcmlhbnRQcm9wcyIsImlzQ29udHJvbGxpbmdWYXJpYW50cyIsInNvbWUiLCJuYW1lIiwiaXNWYXJpYW50Tm9kZSIsInZhcmlhbnRzIiwiZ2V0Q3VycmVudFRyZWVWYXJpYW50cyIsImNvbnRleHQiLCJhbmltYXRlMiIsImluaGVyaXQiLCJpbXBvcnRfcmVhY3Q4IiwidXNlQ3JlYXRlTW90aW9uQ29udGV4dCIsInVzZU1lbW8iLCJ2YXJpYW50TGFiZWxzQXNEZXBlbmRlbmN5Iiwiam9pbiIsImZlYXR1cmVQcm9wcyIsImFuaW1hdGlvbiIsImV4aXQiLCJkcmFnIiwiZm9jdXMiLCJob3ZlciIsInRhcCIsInBhbiIsImxheW91dCIsImZlYXR1cmVEZWZpbml0aW9ucyIsImtleSIsImlzRW5hYmxlZCIsImxvYWRGZWF0dXJlcyIsImZlYXR1cmVzIiwiaW1wb3J0X3JlYWN0OSIsImltcG9ydF9yZWFjdDEwIiwibW90aW9uQ29tcG9uZW50U3ltYm9sIiwiU3ltYm9sIiwiZm9yIiwiUmVhY3QiLCJfX3RvRVNNIiwiaW1wb3J0X3JlYWN0MTEiLCJwcmVsb2FkZWRGZWF0dXJlcyIsInByZWxvYWRlZEZlYXR1cmVzMiIsImNyZWF0ZVZpc3VhbEVsZW1lbnQiLCJ1c2VSZW5kZXIiLCJ1c2VWaXN1YWxTdGF0ZSIsInVzZVZpc3VhbFN0YXRlMiIsIkNvbXBvbmVudCIsIk1vdGlvbkNvbXBvbmVudCIsIk1lYXN1cmVMYXlvdXQyIiwiY29uZmlnQW5kUHJvcHMiLCJsYXlvdXRJZCIsInVzZUxheW91dElkIiwiaW5pdGlhbExheW91dEdyb3VwQ29uZmlnIiwiaXNTdHJpY3QiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJGb3J3YXJkUmVmQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsImxheW91dEdyb3VwSWQiLCJpZCIsImNyZWF0ZU1vdGlvblByb3h5IiwiY3JlYXRlQ29uZmlnIiwiY3VzdG9tIiwiY3VzdG9tTW90aW9uQ29tcG9uZW50Q29uZmlnIiwiUHJveHkiLCJjb21wb25lbnRDYWNoZSIsIk1hcCIsImdldCIsIl90YXJnZXQiLCJoYXMiLCJzZXQiLCJsb3dlcmNhc2VTVkdFbGVtZW50cyIsImlzU1ZHQ29tcG9uZW50IiwiaW5jbHVkZXMiLCJpbmRleE9mIiwic2NhbGVDb3JyZWN0b3JzIiwiY29ycmVjdG9ycyIsImFzc2lnbiIsInRyYW5zZm9ybVByb3BPcmRlciIsInRyYW5zZm9ybVByb3BzIiwiU2V0IiwiaXNGb3JjZWRNb3Rpb25WYWx1ZSIsImxheW91dDIiLCJzdGFydHNXaXRoIiwiZ2V0VmVsb2NpdHkiLCJ0cmFuc2xhdGVBbGlhcyIsIngiLCJ5IiwieiIsInRyYW5zZm9ybVBlcnNwZWN0aXZlIiwibnVtVHJhbnNmb3JtcyIsImxlbmd0aCIsInRyYW5zZm9ybTIiLCJlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiIsImFsbG93VHJhbnNmb3JtTm9uZSIsInRyYW5zZm9ybUlzRGVmYXVsdCIsInRyYW5zZm9ybVRlbXBsYXRlIiwidHJhbnNmb3JtU3RyaW5nIiwiaSIsInRyYW5zZm9ybU5hbWUiLCJ0cmltIiwiY2hlY2tTdHJpbmdTdGFydHNXaXRoIiwidG9rZW4iLCJpc0NTU1ZhcmlhYmxlTmFtZSIsImlzQ1NTVmFyaWFibGVUb2tlbiIsImNzc1ZhcmlhYmxlUmVnZXgiLCJnZXRWYWx1ZUFzVHlwZSIsInR5cGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwibnVtYmVyIiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiYWxwaGEiLCJzY2FsZSIsInNhbml0aXplIiwicm91bmQiLCJmbG9hdFJlZ2V4IiwiY29sb3JSZWdleCIsInNpbmdsZUNvbG9yUmVnZXgiLCJpc1N0cmluZyIsImNyZWF0ZVVuaXRUeXBlIiwidW5pdCIsImVuZHNXaXRoIiwic3BsaXQiLCJkZWdyZWVzIiwicGVyY2VudCIsInZoIiwidnciLCJwcm9ncmVzc1BlcmNlbnRhZ2UiLCJpbnQiLCJudW1iZXJWYWx1ZVR5cGVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJhZGl1cyIsInJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsIndpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJzaXplIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJyb3RhdGUiLCJyb3RhdGVYIiwicm90YXRlWSIsInJvdGF0ZVoiLCJzY2FsZVgiLCJzY2FsZVkiLCJzY2FsZVoiLCJza2V3Iiwic2tld1giLCJza2V3WSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwidHJhbnNsYXRlWiIsInBlcnNwZWN0aXZlIiwib3BhY2l0eSIsIm9yaWdpblgiLCJvcmlnaW5ZIiwib3JpZ2luWiIsInpJbmRleCIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlT3BhY2l0eSIsIm51bU9jdGF2ZXMiLCJidWlsZEhUTUxTdHlsZXMiLCJzdGF0ZSIsImxhdGVzdFZhbHVlcyIsIm9wdGlvbnMiLCJzdHlsZSIsInZhcnMiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJoYXNUcmFuc2Zvcm0yIiwiaGFzVHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtSXNOb25lIiwidmFsdWVUeXBlIiwidmFsdWVBc1R5cGUiLCJjcmVhdGVIdG1sUmVuZGVyU3RhdGUiLCJpbXBvcnRfcmVhY3QxMiIsImNvcHlSYXdWYWx1ZXNPbmx5IiwidGFyZ2V0Iiwic291cmNlIiwidXNlSW5pdGlhbE1vdGlvblZhbHVlcyIsInVzZVN0eWxlIiwic3R5bGVQcm9wIiwidHJhbnNmb3JtVmFsdWVzIiwidXNlSFRNTFByb3BzIiwiaHRtbFByb3BzIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ2dhYmxlIiwidXNlclNlbGVjdCIsIldlYmtpdFVzZXJTZWxlY3QiLCJXZWJraXRUb3VjaENhbGxvdXQiLCJ0b3VjaEFjdGlvbiIsInRhYkluZGV4Iiwib25UYXAiLCJvblRhcFN0YXJ0Iiwid2hpbGVUYXAiLCJ2YWxpZE1vdGlvblByb3BzIiwic2hvdWxkRm9yd2FyZCIsImxvYWRFeHRlcm5hbElzVmFsaWRQcm9wIiwiaXNWYWxpZFByb3AiLCJfYSIsImlzRG9tIiwiZm9yd2FyZE1vdGlvblByb3BzIiwiZmlsdGVyZWRQcm9wcyIsInZhbHVlcyIsImNhbGNPcmlnaW4iLCJvcmlnaW4iLCJvZmZzZXQiLCJjYWxjU1ZHVHJhbnNmb3JtT3JpZ2luIiwiZGltZW5zaW9ucyIsInB4T3JpZ2luWCIsInB4T3JpZ2luWSIsImRhc2hLZXlzIiwiYXJyYXkiLCJjYW1lbEtleXMiLCJidWlsZFNWR1BhdGgiLCJhdHRycyIsInNwYWNpbmciLCJ1c2VEYXNoQ2FzZSIsInBhdGhMZW5ndGgiLCJrZXlzMiIsInBhdGhTcGFjaW5nIiwiYnVpbGRTVkdBdHRycyIsImF0dHJYIiwiYXR0clkiLCJhdHRyU2NhbGUiLCJwYXRoT2Zmc2V0IiwibGF0ZXN0IiwiaXNTVkdUYWcyIiwidmlld0JveCIsImNyZWF0ZVN2Z1JlbmRlclN0YXRlIiwiaXNTVkdUYWciLCJ0YWciLCJpbXBvcnRfcmVhY3QxMyIsInVzZVNWR1Byb3BzIiwiX2lzU3RhdGljIiwidmlzdWFsUHJvcHMiLCJyYXdTdHlsZXMiLCJpbXBvcnRfcmVhY3QxNCIsImNyZWF0ZVVzZVJlbmRlciIsInVzZVZpc3VhbFByb3BzIiwiZWxlbWVudFByb3BzIiwiY2hpbGRyZW4iLCJyZW5kZXJlZENoaWxkcmVuIiwicmVuZGVySFRNTCIsImVsZW1lbnQiLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvblN0eWxlcyIsInNldFByb3BlcnR5IiwiY2FtZWxDYXNlQXR0cmlidXRlcyIsInJlbmRlclNWRyIsInJlbmRlclN0YXRlIiwiX3N0eWxlUHJvcCIsInNldEF0dHJpYnV0ZSIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wcyIsInByZXZQcm9wcyIsIm5ld1ZhbHVlcyIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wczIiLCJ0YXJnZXRLZXkiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsInJlc29sdmVWYXJpYW50RnJvbVByb3BzIiwiZGVmaW5pdGlvbiIsImN1cnJlbnRWYWx1ZXMiLCJjdXJyZW50VmVsb2NpdHkiLCJpbXBvcnRfcmVhY3QxNSIsInVzZUNvbnN0YW50IiwiaW5pdCIsImlzS2V5ZnJhbWVzVGFyZ2V0IiwiaXNDdXN0b21WYWx1ZSIsInRvVmFsdWUiLCJyZXNvbHZlRmluYWxWYWx1ZUluS2V5ZnJhbWVzIiwidW53cmFwcGVkVmFsdWUiLCJpbXBvcnRfcmVhY3QxNiIsIm1ha2VTdGF0ZSIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wczMiLCJjcmVhdGVSZW5kZXJTdGF0ZSIsIm9uTW91bnQiLCJtYWtlTGF0ZXN0VmFsdWVzIiwiY29uZmlnIiwibWFrZSIsInNjcmFwZU1vdGlvblZhbHVlcyIsIm1vdGlvblZhbHVlcyIsImlzQ29udHJvbGxpbmdWYXJpYW50cyQxIiwiaXNWYXJpYW50Tm9kZSQxIiwiaXNJbml0aWFsQW5pbWF0aW9uQmxvY2tlZCIsInZhcmlhbnRUb1NldCIsImxpc3QiLCJmb3JFYWNoIiwicmVzb2x2ZWQiLCJ0cmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbiIsInZhbHVlVGFyZ2V0Iiwibm9vcCIsImFueSIsIlF1ZXVlIiwiY29uc3RydWN0b3IiLCJvcmRlciIsInNjaGVkdWxlZCIsImFkZCIsInByb2Nlc3MyIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImRlbGV0ZSIsImNsZWFyIiwiY3JlYXRlUmVuZGVyU3RlcCIsInJ1bk5leHRGcmFtZSIsInRoaXNGcmFtZSIsIm5leHRGcmFtZSIsIm51bVRvUnVuIiwiaXNQcm9jZXNzaW5nIiwiZmx1c2hOZXh0RnJhbWUiLCJ0b0tlZXBBbGl2ZSIsIldlYWtTZXQiLCJzdGVwIiwic2NoZWR1bGUiLCJjYWxsYmFjayIsImtlZXBBbGl2ZSIsImltbWVkaWF0ZSIsImFkZFRvQ3VycmVudEZyYW1lIiwicXVldWUiLCJjYW5jZWwiLCJwcm9jZXNzIiwiZnJhbWVEYXRhMiIsInN0ZXBzT3JkZXIiLCJtYXhFbGFwc2VkIiwiY3JlYXRlUmVuZGVyQmF0Y2hlciIsInNjaGVkdWxlTmV4dEJhdGNoIiwiYWxsb3dLZWVwQWxpdmUiLCJ1c2VEZWZhdWx0RWxhcHNlZCIsImRlbHRhIiwidGltZXN0YW1wIiwic3RlcHMyIiwicmVkdWNlIiwiYWNjIiwicHJvY2Vzc1N0ZXAiLCJzdGVwSWQiLCJwcm9jZXNzQmF0Y2giLCJwZXJmb3JtYW5jZSIsIm5vdyIsIndha2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdmdNb3Rpb25Db25maWciLCJyZWFkIiwiZ2V0QkJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImUiLCJ0YWdOYW1lIiwiaHRtbE1vdGlvbkNvbmZpZyIsImNyZWF0ZURvbU1vdGlvbkNvbmZpZyIsImJhc2VDb25maWciLCJhZGREb21FdmVudCIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJwYXNzaXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc1ByaW1hcnlQb2ludGVyIiwiZXZlbnQiLCJwb2ludGVyVHlwZSIsImJ1dHRvbiIsImlzUHJpbWFyeSIsImV4dHJhY3RFdmVudEluZm8iLCJwb2ludFR5cGUiLCJwb2ludCIsImNvbWJpbmVGdW5jdGlvbnMiLCJhIiwiYiIsInRyYW5zZm9ybWVycyIsImNyZWF0ZUxvY2siLCJsb2NrIiwib3BlbkxvY2siLCJnbG9iYWxIb3Jpem9udGFsTG9jayIsImdsb2JhbFZlcnRpY2FsTG9jayIsImdldEdsb2JhbExvY2siLCJkcmFnMiIsIm9wZW5Ib3Jpem9udGFsIiwib3BlblZlcnRpY2FsIiwib3Blbkdlc3R1cmVMb2NrIiwiRmVhdHVyZSIsIm5vZGUiLCJpc01vdW50ZWQiLCJhZGRIb3ZlckV2ZW50IiwiaXNBY3RpdmUiLCJjYWxsYmFja05hbWUiLCJoYW5kbGVFdmVudCIsImluZm8iLCJnZXRQcm9wcyIsIndoaWxlSG92ZXIiLCJzZXRBY3RpdmUiLCJIb3Zlckdlc3R1cmUiLCJGb2N1c0dlc3R1cmUiLCJhcmd1bWVudHMiLCJvbkZvY3VzIiwiaXNGb2N1c1Zpc2libGUiLCJtYXRjaGVzIiwib25CbHVyIiwiaXNOb2RlT3JDaGlsZCIsImNoaWxkIiwicGFyZW50RWxlbWVudCIsImZpcmVTeW50aGV0aWNQb2ludGVyRXZlbnQiLCJzeW50aGV0aWNQb2ludGVyRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJQcmVzc0dlc3R1cmUiLCJyZW1vdmVTdGFydExpc3RlbmVycyIsInJlbW92ZUVuZExpc3RlbmVycyIsInJlbW92ZUFjY2Vzc2libGVMaXN0ZW5lcnMiLCJzdGFydFBvaW50ZXJQcmVzcyIsInN0YXJ0RXZlbnQiLCJzdGFydEluZm8iLCJpc1ByZXNzaW5nIiwiZW5kUG9pbnRlclByZXNzIiwiZW5kRXZlbnQiLCJlbmRJbmZvIiwiY2hlY2tQcmVzc0VuZCIsIm9uVGFwQ2FuY2VsIiwiZ2xvYmFsVGFwVGFyZ2V0IiwicmVtb3ZlUG9pbnRlclVwTGlzdGVuZXIiLCJyZW1vdmVQb2ludGVyQ2FuY2VsTGlzdGVuZXIiLCJjYW5jZWxFdmVudCIsImNhbmNlbEluZm8iLCJjYW5jZWxQcmVzcyIsInN0YXJ0UHJlc3MiLCJzdGFydEFjY2Vzc2libGVQcmVzcyIsImhhbmRsZUtleWRvd24iLCJrZXlkb3duRXZlbnQiLCJoYW5kbGVLZXl1cCIsImtleXVwRXZlbnQiLCJyZW1vdmVLZXlkb3duTGlzdGVuZXIiLCJoYW5kbGVCbHVyIiwicmVtb3ZlQmx1ckxpc3RlbmVyIiwicmVtb3ZlUG9pbnRlckxpc3RlbmVyIiwicmVtb3ZlRm9jdXNMaXN0ZW5lciIsIm9ic2VydmVyQ2FsbGJhY2tzIiwiV2Vha01hcCIsIm9ic2VydmVycyIsImZpcmVPYnNlcnZlckNhbGxiYWNrIiwiZW50cnkiLCJmaXJlQWxsT2JzZXJ2ZXJDYWxsYmFja3MiLCJlbnRyaWVzIiwiaW5pdEludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsImxvb2t1cFJvb3QiLCJyb290T2JzZXJ2ZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZUludGVyc2VjdGlvbiIsInJvb3RJbnRlcmVzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwidGhyZXNob2xkTmFtZXMiLCJhbGwiLCJJblZpZXdGZWF0dXJlIiwiaGFzRW50ZXJlZFZpZXciLCJpc0luVmlldyIsInN0YXJ0T2JzZXJ2ZXIiLCJ2aWV3cG9ydCIsInJvb3RNYXJnaW4iLCJhbW91bnQiLCJvbmNlIiwidGhyZXNob2xkIiwib25JbnRlcnNlY3Rpb25VcGRhdGUiLCJpc0ludGVyc2VjdGluZyIsIm9uVmlld3BvcnRFbnRlciIsIm9uVmlld3BvcnRMZWF2ZSIsImhhc09wdGlvbnNDaGFuZ2VkIiwiaGFzVmlld3BvcnRPcHRpb25DaGFuZ2VkIiwicHJldlZpZXdwb3J0IiwiZ2VzdHVyZUFuaW1hdGlvbnMiLCJzaGFsbG93Q29tcGFyZSIsIm5leHQiLCJwcmV2IiwicHJldkxlbmd0aCIsImdldEN1cnJlbnQiLCJ2ZWxvY2l0eSIsInJlc29sdmVWYXJpYW50IiwiY2hlY2siLCJtZXNzYWdlIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsInNlY29uZHNUb01pbGxpc2Vjb25kcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHNUb1NlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJpbnN0YW50QW5pbWF0aW9uU3RhdGUiLCJpc0JlemllckRlZmluaXRpb24iLCJlYXNpbmciLCJpc1dhYXBpU3VwcG9ydGVkRWFzaW5nIiwic3VwcG9ydGVkV2FhcGlFYXNpbmciLCJldmVyeSIsImN1YmljQmV6aWVyQXNTdHJpbmciLCJjIiwiZCIsImxpbmVhciIsImVhc2UiLCJtYXBFYXNpbmdUb05hdGl2ZUVhc2luZyIsIm1hcCIsImFuaW1hdGVTdHlsZSIsInZhbHVlTmFtZSIsImtleWZyYW1lczIiLCJkZWxheTIiLCJkdXJhdGlvbiIsInJlcGVhdCIsInJlcGVhdFR5cGUiLCJlYXNlMiIsInRpbWVzIiwia2V5ZnJhbWVPcHRpb25zIiwiZmlsbCIsIml0ZXJhdGlvbnMiLCJkaXJlY3Rpb24iLCJnZXRGaW5hbEtleWZyYW1lIiwiY2FsY0JlemllciIsInQiLCJhMSIsImEyIiwic3ViZGl2aXNpb25QcmVjaXNpb24iLCJzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMiLCJiaW5hcnlTdWJkaXZpZGUiLCJsb3dlckJvdW5kIiwidXBwZXJCb3VuZCIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJhYnMiLCJtWTEiLCJtWTIiLCJnZXRURm9yWCIsImFYIiwiaXNFYXNpbmdBcnJheSIsInNpbiIsImFjb3MiLCJwb3ciLCJlYXNpbmdMb29rdXAiLCJlYXNpbmdEZWZpbml0aW9uVG9GdW5jdGlvbiIsIngxIiwieTEiLCJ4MiIsInkyIiwiaXNDb2xvclN0cmluZyIsInRlc3RQcm9wIiwic3BsaXRDb2xvciIsImFOYW1lIiwiYk5hbWUiLCJjTmFtZSIsImFscGhhMiIsIm1hdGNoIiwiY2xhbXBSZ2JVbml0IiwicmdiVW5pdCIsInJnYmEiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSQxIiwicGFyc2VIZXgiLCJyIiwiZyIsInBhcnNlSW50IiwiaGV4IiwiaHNsYSIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJmcm9tIiwidG8iLCJwcm9ncmVzczIiLCJodWVUb1JnYiIsInEiLCJoc2xhVG9SZ2JhIiwibWl4TGluZWFyQ29sb3IiLCJmcm9tRXhwbyIsInNxcnQiLCJjb2xvclR5cGVzIiwiZ2V0Q29sb3JUeXBlIiwiZmluZCIsImFzUkdCQSIsImNvbG9yMiIsIm1vZGVsIiwibWl4Q29sb3IiLCJmcm9tUkdCQSIsInRvUkdCQSIsImJsZW5kZWQiLCJfYiIsImlzTmFOIiwiY3NzVmFyVG9rZW5pc2VyIiwicmVnZXgiLCJjb3VudEtleSIsImNvbG9yVG9rZW5pc2VyIiwibnVtYmVyVG9rZW5pc2VyIiwidG9rZW5pc2UiLCJ0b2tlbmlzZWQiLCJhbmFseXNlQ29tcGxleFZhbHVlIiwib3JpZ2luYWxWYWx1ZSIsInRvU3RyaW5nIiwibnVtVmFycyIsIm51bUNvbG9ycyIsIm51bU51bWJlcnMiLCJwYXJzZUNvbXBsZXhWYWx1ZSIsImNyZWF0ZVRyYW5zZm9ybWVyIiwibnVtVmFsdWVzIiwib3V0cHV0IiwiY29udmVydE51bWJlcnNUb1plcm8iLCJnZXRBbmltYXRhYmxlTm9uZSIsInBhcnNlZCIsInRyYW5zZm9ybWVyIiwibWl4SW1tZWRpYXRlIiwiZ2V0TWl4ZXIiLCJtaXhDb21wbGV4IiwibWl4QXJyYXkiLCJibGVuZFZhbHVlIiwiZnJvbVRoaXMiLCJtaXhPYmplY3QiLCJ0ZW1wbGF0ZSIsIm9yaWdpblN0YXRzIiwidGFyZ2V0U3RhdHMiLCJjYW5JbnRlcnBvbGF0ZSIsInRvRnJvbURpZmZlcmVuY2UiLCJtaXhOdW1iZXIiLCJkZXRlY3RNaXhlckZhY3RvcnkiLCJjcmVhdGVNaXhlcnMiLCJjdXN0b21NaXhlciIsIm1peGVycyIsIm1peGVyRmFjdG9yeSIsIm51bU1peGVycyIsIm1peGVyIiwiZWFzaW5nRnVuY3Rpb24iLCJpbnB1dCIsImlzQ2xhbXAiLCJpbnB1dExlbmd0aCIsInJldmVyc2UiLCJpbnRlcnBvbGF0b3IiLCJwcm9ncmVzc0luUmFuZ2UiLCJmaWxsT2Zmc2V0IiwicmVtYWluaW5nIiwib2Zmc2V0UHJvZ3Jlc3MiLCJkZWZhdWx0T2Zmc2V0IiwiYXJyIiwiY29udmVydE9mZnNldFRvVGltZXMiLCJvIiwiZGVmYXVsdEVhc2luZyIsImtleWZyYW1lcyIsImtleWZyYW1lVmFsdWVzIiwiZWFzaW5nRnVuY3Rpb25zIiwiZG9uZSIsImFic29sdXRlVGltZXMiLCJtYXBUaW1lVG9LZXlmcmFtZSIsImNhbGN1bGF0ZWREdXJhdGlvbiIsInZlbG9jaXR5UGVyU2Vjb25kIiwiZnJhbWVEdXJhdGlvbiIsInZlbG9jaXR5U2FtcGxlRHVyYXRpb24iLCJjYWxjR2VuZXJhdG9yVmVsb2NpdHkiLCJyZXNvbHZlVmFsdWUiLCJwcmV2VCIsInNhZmVNaW4iLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwibWluRGFtcGluZyIsIm1heERhbXBpbmciLCJmaW5kU3ByaW5nIiwiYm91bmNlIiwibWFzcyIsImVudmVsb3BlIiwiZGVyaXZhdGl2ZSIsImRhbXBpbmdSYXRpbyIsInVuZGFtcGVkRnJlcTIiLCJleHBvbmVudGlhbERlY2F5IiwiY2FsY0FuZ3VsYXJGcmVxIiwiZXhwIiwiZiIsImZhY3RvciIsImluaXRpYWxHdWVzcyIsInVuZGFtcGVkRnJlcSIsImFwcHJveGltYXRlUm9vdCIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJyb290SXRlcmF0aW9ucyIsInJlc3VsdCIsImR1cmF0aW9uS2V5cyIsInBoeXNpY3NLZXlzIiwiaXNTcHJpbmdUeXBlIiwiZ2V0U3ByaW5nT3B0aW9ucyIsInNwcmluZ09wdGlvbnMiLCJpc1Jlc29sdmVkRnJvbUR1cmF0aW9uIiwiZGVyaXZlZCIsInJlc3REZWx0YSIsInJlc3RTcGVlZCIsImluaXRpYWxWZWxvY2l0eSIsImluaXRpYWxEZWx0YSIsInVuZGFtcGVkQW5ndWxhckZyZXEiLCJpc0dyYW51bGFyU2NhbGUiLCJyZXNvbHZlU3ByaW5nIiwiYW5ndWxhckZyZXEiLCJjb3MiLCJkYW1wZWRBbmd1bGFyRnJlcSIsImZyZXFGb3JUIiwic2luaCIsImNvc2giLCJpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQiLCJpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkIiwiaW5lcnRpYSIsInBvd2VyIiwidGltZUNvbnN0YW50IiwiYm91bmNlRGFtcGluZyIsImJvdW5jZVN0aWZmbmVzcyIsIm1vZGlmeVRhcmdldCIsImlzT3V0T2ZCb3VuZHMiLCJuZWFyZXN0Qm91bmRhcnkiLCJhbXBsaXR1ZGUiLCJpZGVhbCIsImNhbGNEZWx0YSIsImNhbGNMYXRlc3QiLCJhcHBseUZyaWN0aW9uIiwidGltZVJlYWNoZWRCb3VuZGFyeSIsInNwcmluZyQxIiwiY2hlY2tDYXRjaEJvdW5kYXJ5IiwiaGFzVXBkYXRlZEZyYW1lIiwiZnJhbWVsb29wRHJpdmVyIiwicGFzc1RpbWVzdGFtcCIsInN0b3AiLCJtYXhHZW5lcmF0b3JEdXJhdGlvbiIsImNhbGNHZW5lcmF0b3JEdXJhdGlvbiIsImdlbmVyYXRvciIsInRpbWVTdGVwIiwiSW5maW5pdHkiLCJ0eXBlcyIsImRlY2F5IiwidHdlZW4iLCJhdXRvcGxheSIsImRyaXZlciIsImtleWZyYW1lcyQxIiwicmVwZWF0RGVsYXkiLCJvblBsYXkiLCJvblN0b3AiLCJvbkNvbXBsZXRlIiwib25VcGRhdGUiLCJzcGVlZCIsImhhc1N0b3BwZWQiLCJyZXNvbHZlRmluaXNoZWRQcm9taXNlIiwiY3VycmVudEZpbmlzaGVkUHJvbWlzZSIsInVwZGF0ZUZpbmlzaGVkUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uRHJpdmVyIiwiZ2VuZXJhdG9yRmFjdG9yeSIsIm1hcE51bWJlcnNUb0tleWZyYW1lcyIsIm1pcnJvcmVkR2VuZXJhdG9yIiwicGxheVN0YXRlIiwiaG9sZFRpbWUiLCJzdGFydFRpbWUiLCJjYW5jZWxUaW1lIiwicmVzb2x2ZWREdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJjdXJyZW50VGltZSIsInRpY2siLCJ0aW1lV2l0aG91dERlbGF5IiwiaXNJbkRlbGF5UGhhc2UiLCJlbGFwc2VkIiwiZnJhbWVHZW5lcmF0b3IiLCJjdXJyZW50SXRlcmF0aW9uIiwiZmxvb3IiLCJpdGVyYXRpb25Qcm9ncmVzcyIsImlzT2RkSXRlcmF0aW9uIiwiaXNBbmltYXRpb25GaW5pc2hlZCIsImZpbmlzaCIsInN0b3BBbmltYXRpb25Ecml2ZXIiLCJwbGF5IiwiY29udHJvbHMiLCJ0aGVuIiwicmVqZWN0IiwidGltZSIsIm5ld1RpbWUiLCJuZXdTcGVlZCIsInBhdXNlIiwiY29tcGxldGUiLCJzYW1wbGUiLCJtZW1vIiwic3VwcG9ydHNXYWFwaSIsIkVsZW1lbnQiLCJhY2NlbGVyYXRlZFZhbHVlcyIsInNhbXBsZURlbHRhIiwibWF4RHVyYXRpb24yIiwicmVxdWlyZXNQcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJjcmVhdGVBY2NlbGVyYXRlZEFuaW1hdGlvbiIsImNhbkFjY2VsZXJhdGVBbmltYXRpb24iLCJwZW5kaW5nQ2FuY2VsIiwic2FtcGxlQW5pbWF0aW9uIiwicHJlZ2VuZXJhdGVkS2V5ZnJhbWVzIiwib3duZXIiLCJjYW5jZWxBbmltYXRpb24iLCJzYWZlQ2FuY2VsIiwib25maW5pc2giLCJhdHRhY2hUaW1lbGluZSIsInRpbWVsaW5lIiwicGxheWJhY2tSYXRlIiwic2V0V2l0aFZlbG9jaXR5IiwiY3JlYXRlSW5zdGFudEFuaW1hdGlvbiIsInNldFZhbHVlIiwidW5kZXJEYW1wZWRTcHJpbmciLCJjcml0aWNhbGx5RGFtcGVkU3ByaW5nIiwia2V5ZnJhbWVzVHJhbnNpdGlvbiIsImdldERlZmF1bHRUcmFuc2l0aW9uIiwidmFsdWVLZXkiLCJpc0FuaW1hdGFibGUiLCJtYXhEZWZhdWx0cyIsImFwcGx5RGVmYXVsdEZpbHRlciIsInNsaWNlIiwibnVtYmVyMiIsImRlZmF1bHRWYWx1ZSIsImZ1bmN0aW9uUmVnZXgiLCJmaWx0ZXIiLCJmdW5jdGlvbnMiLCJkZWZhdWx0VmFsdWVUeXBlcyIsImJhY2tncm91bmRDb2xvciIsIm91dGxpbmVDb2xvciIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJXZWJraXRGaWx0ZXIiLCJnZXREZWZhdWx0VmFsdWVUeXBlIiwiZ2V0QW5pbWF0YWJsZU5vbmUyIiwiZGVmYXVsdFZhbHVlVHlwZSIsImlzWmVyb1ZhbHVlU3RyaW5nIiwiaXNOb25lIiwiZ2V0S2V5ZnJhbWVzIiwiaXNUYXJnZXRBbmltYXRhYmxlIiwiZGVmYXVsdE9yaWdpbiIsImFuaW1hdGFibGVUZW1wbGF0ZVZhbHVlIiwibm9uZUtleWZyYW1lSW5kZXhlcyIsImlzVHJhbnNpdGlvbkRlZmluZWQiLCJ3aGVuIiwiX2RlbGF5IiwiZGVsYXlDaGlsZHJlbiIsInN0YWdnZXJDaGlsZHJlbiIsInN0YWdnZXJEaXJlY3Rpb24iLCJrZXlzIiwiZ2V0VmFsdWVUcmFuc2l0aW9uIiwic2tpcEFuaW1hdGlvbnMiLCJhbmltYXRlTW90aW9uVmFsdWUiLCJ2YWx1ZVRyYW5zaXRpb24iLCJvcmlnaW5LZXlmcmFtZSIsInRhcmdldEtleWZyYW1lIiwiaXNPcmlnaW5BbmltYXRhYmxlIiwiaXNIYW5kb2ZmIiwiSFRNTEVsZW1lbnQiLCJhY2NlbGVyYXRlZEFuaW1hdGlvbiIsImlzV2lsbENoYW5nZU1vdGlvblZhbHVlIiwiaXNOdW1lcmljYWxTdHJpbmciLCJhZGRVbmlxdWVJdGVtIiwiaXRlbSIsInJlbW92ZUl0ZW0iLCJtb3ZlSXRlbSIsImZyb21JbmRleCIsInRvSW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJTdWJzY3JpcHRpb25NYW5hZ2VyIiwic3Vic2NyaXB0aW9ucyIsIm5vdGlmeSIsIm51bVN1YnNjcmlwdGlvbnMiLCJnZXRTaXplIiwid2FybmVkIiwid2Fybk9uY2UiLCJjb25kaXRpb24iLCJpc0Zsb2F0IiwiY29sbGVjdE1vdGlvblZhbHVlcyIsInZlcnNpb24iLCJ0aW1lRGVsdGEiLCJsYXN0VXBkYXRlZCIsImNhblRyYWNrVmVsb2NpdHkiLCJldmVudHMiLCJ1cGRhdGVBbmROb3RpZnkiLCJwb3N0UmVuZGVyIiwic2NoZWR1bGVWZWxvY2l0eUNoZWNrIiwiY2hhbmdlIiwidmVsb2NpdHlDaGFuZ2UiLCJyZW5kZXJSZXF1ZXN0IiwidmVsb2NpdHlDaGVjayIsImhhc0FuaW1hdGVkIiwib25DaGFuZ2UiLCJzdWJzY3JpcHRpb24iLCJvbiIsInVuc3Vic2NyaWJlIiwiY2xlYXJMaXN0ZW5lcnMiLCJldmVudE1hbmFnZXJzIiwiYXR0YWNoIiwicGFzc2l2ZUVmZmVjdCIsInN0b3BQYXNzaXZlRWZmZWN0IiwianVtcCIsImdldFByZXZpb3VzIiwic3RhcnRBbmltYXRpb24iLCJhbmltYXRpb25TdGFydCIsImFuaW1hdGlvbkNvbXBsZXRlIiwiY2xlYXJBbmltYXRpb24iLCJhbmltYXRpb25DYW5jZWwiLCJpc0FuaW1hdGluZyIsImRlc3Ryb3kiLCJ0ZXN0VmFsdWVUeXBlIiwiYXV0byIsImRpbWVuc2lvblZhbHVlVHlwZXMiLCJmaW5kRGltZW5zaW9uVmFsdWVUeXBlIiwidmFsdWVUeXBlcyIsImZpbmRWYWx1ZVR5cGUiLCJzZXRNb3Rpb25WYWx1ZSIsImhhc1ZhbHVlIiwiZ2V0VmFsdWUiLCJhZGRWYWx1ZSIsInNldFRhcmdldCIsIm1ha2VUYXJnZXRBbmltYXRhYmxlIiwic2V0VmFyaWFudHMiLCJ2YXJpYW50TGFiZWxzIiwicmV2ZXJzZWRMYWJlbHMiLCJ2YXJpYW50IiwiZ2V0VmFyaWFudCIsInZhcmlhbnRDaGlsZHJlbiIsInNldFZhbHVlcyIsIm5ld1ZhbHVlS2V5cyIsIm51bU5ld1ZhbHVlcyIsInRhcmdldFZhbHVlIiwicmVhZFZhbHVlIiwic2V0QmFzZVRhcmdldCIsImdldE9yaWdpbkZyb21UcmFuc2l0aW9uIiwiZ2V0T3JpZ2luIiwidHJhbnNpdGlvbk9yaWdpbiIsInNob3VsZEJsb2NrQW5pbWF0aW9uIiwicHJvdGVjdGVkS2V5cyIsIm5lZWRzQW5pbWF0aW5nIiwic2hvdWxkQmxvY2siLCJoYXNLZXlmcmFtZXNDaGFuZ2VkIiwiYW5pbWF0ZVRhcmdldCIsInRyYW5zaXRpb25PdmVycmlkZSIsIndpbGxDaGFuZ2UiLCJhbmltYXRpb25zMiIsImFuaW1hdGlvblR5cGVTdGF0ZSIsImdldFN0YXRlIiwiSGFuZG9mZkFwcGVhckFuaW1hdGlvbnMiLCJhcHBlYXJJZCIsImNhblNraXAiLCJzaG91bGRSZWR1Y2VNb3Rpb24iLCJhbmltYXRlVmFyaWFudCIsImdldEFuaW1hdGlvbiIsImdldENoaWxkQW5pbWF0aW9ucyIsImZvcndhcmREZWxheSIsImFuaW1hdGVDaGlsZHJlbiIsImZpcnN0IiwibGFzdCIsIm1heFN0YWdnZXJEdXJhdGlvbiIsImdlbmVyYXRlU3RhZ2dlckR1cmF0aW9uIiwic29ydCIsInNvcnRCeVRyZWVPcmRlciIsInNvcnROb2RlUG9zaXRpb24iLCJyZXNvbHZlZERlZmluaXRpb24iLCJyZXZlcnNlUHJpb3JpdHlPcmRlciIsIm51bUFuaW1hdGlvblR5cGVzIiwiYW5pbWF0ZUxpc3QiLCJjcmVhdGVBbmltYXRpb25TdGF0ZSIsImNyZWF0ZVN0YXRlIiwiaXNJbml0aWFsUmVuZGVyIiwiYnVpbGRSZXNvbHZlZFR5cGVWYWx1ZXMiLCJzZXRBbmltYXRlRnVuY3Rpb24iLCJtYWtlQW5pbWF0b3IiLCJjaGFuZ2VkQWN0aXZlVHlwZSIsImdldFZhcmlhbnRDb250ZXh0IiwicmVtb3ZlZEtleXMiLCJlbmNvdW50ZXJlZEtleXMiLCJyZW1vdmVkVmFyaWFudEluZGV4IiwidHlwZVN0YXRlIiwicHJvcElzVmFyaWFudCIsImFjdGl2ZURlbHRhIiwiaXNJbmhlcml0ZWQiLCJtYW51YWxseUFuaW1hdGVPbk1vdW50IiwicHJldlByb3AiLCJ2YXJpYW50RGlkQ2hhbmdlIiwiY2hlY2tWYXJpYW50c0RpZENoYW5nZSIsInNob3VsZEFuaW1hdGVUeXBlIiwiaGFuZGxlZFJlbW92ZWRWYWx1ZXMiLCJkZWZpbml0aW9uTGlzdCIsInJlc29sdmVkVmFsdWVzIiwicHJldlJlc29sdmVkVmFsdWVzIiwiYWxsS2V5cyIsIm1hcmtUb0FuaW1hdGUiLCJ2YWx1ZUhhc0NoYW5nZWQiLCJmYWxsYmFja0FuaW1hdGlvbiIsImZhbGxiYWNrVGFyZ2V0IiwiZ2V0QmFzZVRhcmdldCIsInNob3VsZEFuaW1hdGUiLCJfYTIiLCJjcmVhdGVUeXBlU3RhdGUiLCJ3aGlsZUluVmlldyIsIndoaWxlRHJhZyIsIndoaWxlRm9jdXMiLCJBbmltYXRpb25GZWF0dXJlIiwidXBkYXRlQW5pbWF0aW9uQ29udHJvbHNTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJwcmV2QW5pbWF0ZSIsIkV4aXRBbmltYXRpb25GZWF0dXJlIiwiaXNQcmVzZW50IiwiaXNQcmVzZW50MiIsIm9uRXhpdENvbXBsZXRlIiwicHJldklzUHJlc2VudCIsInByZXZQcmVzZW5jZUNvbnRleHQiLCJleGl0QW5pbWF0aW9uIiwicmVnaXN0ZXIiLCJ4RGVsdGEiLCJ5RGVsdGEiLCJQYW5TZXNzaW9uIiwiaGFuZGxlcnMiLCJjb250ZXh0V2luZG93IiwiZHJhZ1NuYXBUb09yaWdpbiIsImxhc3RNb3ZlRXZlbnQiLCJsYXN0TW92ZUV2ZW50SW5mbyIsInVwZGF0ZVBvaW50IiwiaW5mbzIiLCJnZXRQYW5JbmZvIiwiaGlzdG9yeSIsImlzUGFuU3RhcnRlZCIsImlzRGlzdGFuY2VQYXN0VGhyZXNob2xkIiwicG9pbnQzIiwidGltZXN0YW1wMiIsIm9uU3RhcnQiLCJvbk1vdmUiLCJoYW5kbGVQb2ludGVyTW92ZSIsImV2ZW50MiIsInRyYW5zZm9ybVBvaW50IiwiaGFuZGxlUG9pbnRlclVwIiwiZW5kIiwib25FbmQiLCJvblNlc3Npb25FbmQiLCJyZXN1bWVBbmltYXRpb24iLCJwYW5JbmZvIiwiaW5pdGlhbEluZm8iLCJwb2ludDIiLCJvblNlc3Npb25TdGFydCIsInJlbW92ZUxpc3RlbmVycyIsInVwZGF0ZUhhbmRsZXJzIiwic3VidHJhY3RQb2ludCIsImxhc3REZXZpY2VQb2ludCIsInN0YXJ0RGV2aWNlUG9pbnQiLCJnZXRWZWxvY2l0eTIiLCJ0aW1lc3RhbXBlZFBvaW50IiwibGFzdFBvaW50IiwiYXhpcyIsImlzTmVhciIsIm1heERpc3RhbmNlIiwiY2FsY0F4aXNEZWx0YSIsIm9yaWdpblBvaW50IiwidHJhbnNsYXRlIiwiY2FsY0JveERlbHRhIiwiY2FsY1JlbGF0aXZlQXhpcyIsInJlbGF0aXZlIiwiY2FsY1JlbGF0aXZlQm94IiwiY2FsY1JlbGF0aXZlQXhpc1Bvc2l0aW9uIiwiY2FsY1JlbGF0aXZlUG9zaXRpb24iLCJhcHBseUNvbnN0cmFpbnRzIiwiZWxhc3RpYyIsImNhbGNSZWxhdGl2ZUF4aXNDb25zdHJhaW50cyIsImNhbGNSZWxhdGl2ZUNvbnN0cmFpbnRzIiwibGF5b3V0Qm94IiwiY2FsY1ZpZXdwb3J0QXhpc0NvbnN0cmFpbnRzIiwibGF5b3V0QXhpcyIsImNvbnN0cmFpbnRzQXhpcyIsImNhbGNWaWV3cG9ydENvbnN0cmFpbnRzIiwiY29uc3RyYWludHNCb3giLCJjYWxjT3JpZ2luMiIsInNvdXJjZUxlbmd0aCIsInRhcmdldExlbmd0aCIsInJlYmFzZUF4aXNDb25zdHJhaW50cyIsImNvbnN0cmFpbnRzIiwicmVsYXRpdmVDb25zdHJhaW50cyIsImRlZmF1bHRFbGFzdGljIiwicmVzb2x2ZURyYWdFbGFzdGljIiwiZHJhZ0VsYXN0aWMiLCJyZXNvbHZlQXhpc0VsYXN0aWMiLCJtaW5MYWJlbCIsIm1heExhYmVsIiwicmVzb2x2ZVBvaW50RWxhc3RpYyIsImxhYmVsIiwiY3JlYXRlQXhpc0RlbHRhIiwiY3JlYXRlRGVsdGEiLCJjcmVhdGVBeGlzIiwiZWFjaEF4aXMiLCJjb252ZXJ0Qm91bmRpbmdCb3hUb0JveCIsImNvbnZlcnRCb3hUb0JvdW5kaW5nQm94IiwidHJhbnNmb3JtQm94UG9pbnRzIiwidHJhbnNmb3JtUG9pbnQyIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwiaXNJZGVudGl0eVNjYWxlIiwic2NhbGUyIiwiaGFzU2NhbGUiLCJoYXNUcmFuc2Zvcm0iLCJoYXMyRFRyYW5zbGF0ZSIsImlzMkRUcmFuc2xhdGUiLCJzY2FsZVBvaW50IiwiZGlzdGFuY2VGcm9tT3JpZ2luIiwic2NhbGVkIiwiYXBwbHlQb2ludERlbHRhIiwiYm94U2NhbGUiLCJhcHBseUF4aXNEZWx0YSIsImFwcGx5Qm94RGVsdGEiLCJib3giLCJhcHBseVRyZWVEZWx0YXMiLCJ0cmVlU2NhbGUiLCJ0cmVlUGF0aCIsImlzU2hhcmVkVHJhbnNpdGlvbiIsInRyZWVMZW5ndGgiLCJwcm9qZWN0aW9uRGVsdGEiLCJkaXNwbGF5IiwibGF5b3V0U2Nyb2xsIiwidHJhbnNmb3JtQm94Iiwic25hcFRvRGVmYXVsdCIsIk51bWJlciIsImlzSW50ZWdlciIsInRyYW5zbGF0ZUF4aXMiLCJkaXN0YW5jZTIiLCJ0cmFuc2Zvcm1BeGlzIiwidHJhbnNmb3JtcyIsInNjYWxlS2V5Iiwib3JpZ2luS2V5IiwiYXhpc09yaWdpbiIsInhLZXlzIiwieUtleXMiLCJtZWFzdXJlVmlld3BvcnRCb3giLCJtZWFzdXJlUGFnZUJveCIsInJvb3RQcm9qZWN0aW9uTm9kZTIiLCJ2aWV3cG9ydEJveCIsInNjcm9sbDIiLCJnZXRDb250ZXh0V2luZG93Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZWxlbWVudERyYWdDb250cm9scyIsIlZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMiLCJvcGVuR2xvYmFsTG9jayIsImlzRHJhZ2dpbmciLCJjdXJyZW50RGlyZWN0aW9uIiwiaGFzTXV0YXRlZENvbnN0cmFpbnRzIiwib3JpZ2luRXZlbnQiLCJzbmFwVG9DdXJzb3IiLCJkcmFnU25hcFRvT3JpZ2luMiIsInBhdXNlQW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbiIsImRyYWdQcm9wYWdhdGlvbiIsIm9uRHJhZ1N0YXJ0IiwicmVzb2x2ZUNvbnN0cmFpbnRzIiwiaXNBbmltYXRpb25CbG9ja2VkIiwiZ2V0QXhpc01vdGlvblZhbHVlIiwibWVhc3VyZWRBeGlzIiwiZHJhZ0RpcmVjdGlvbkxvY2siLCJvbkRpcmVjdGlvbkxvY2siLCJvbkRyYWciLCJnZXRDdXJyZW50RGlyZWN0aW9uIiwidXBkYXRlQXhpcyIsImdldEFuaW1hdGlvblN0YXRlIiwicGFuU2Vzc2lvbiIsImdldFRyYW5zZm9ybVBhZ2VQb2ludCIsIm9uRHJhZ0VuZCIsIl9wb2ludCIsInNob3VsZERyYWciLCJheGlzVmFsdWUiLCJkcmFnQ29uc3RyYWludHMiLCJtZWFzdXJlIiwicHJldkNvbnN0cmFpbnRzIiwicmVzb2x2ZVJlZkNvbnN0cmFpbnRzIiwib25NZWFzdXJlRHJhZ0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHNFbGVtZW50IiwibWVhc3VyZWRDb25zdHJhaW50cyIsInVzZXJDb25zdHJhaW50cyIsImRyYWdNb21lbnR1bSIsImRyYWdUcmFuc2l0aW9uIiwib25EcmFnVHJhbnNpdGlvbkVuZCIsIm1vbWVudHVtQW5pbWF0aW9ucyIsImluZXJ0aWEyIiwic3RhcnRBeGlzVmFsdWVBbmltYXRpb24iLCJkcmFnS2V5IiwiZXh0ZXJuYWxNb3Rpb25WYWx1ZSIsInNjYWxlUG9zaXRpb25XaXRoaW5Db25zdHJhaW50cyIsImJveFByb2dyZXNzIiwidXBkYXRlU2Nyb2xsIiwidXBkYXRlTGF5b3V0IiwiYWRkTGlzdGVuZXJzIiwic3RvcFBvaW50ZXJMaXN0ZW5lciIsIm1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJzdG9wTWVhc3VyZUxheW91dExpc3RlbmVyIiwic3RvcFJlc2l6ZUxpc3RlbmVyIiwic3RvcExheW91dFVwZGF0ZUxpc3RlbmVyIiwiaGFzTGF5b3V0Q2hhbmdlZCIsIm1vdGlvblZhbHVlMiIsImxvY2tUaHJlc2hvbGQiLCJEcmFnR2VzdHVyZSIsInJlbW92ZUdyb3VwQ29udHJvbHMiLCJkcmFnQ29udHJvbHMiLCJhc3luY0hhbmRsZXIiLCJQYW5HZXN0dXJlIiwicmVtb3ZlUG9pbnRlckRvd25MaXN0ZW5lciIsIm9uUG9pbnRlckRvd24iLCJwb2ludGVyRG93bkV2ZW50Iiwic2Vzc2lvbiIsImNyZWF0ZVBhbkhhbmRsZXJzIiwib25QYW5TZXNzaW9uU3RhcnQiLCJvblBhblN0YXJ0Iiwib25QYW4iLCJvblBhbkVuZCIsImltcG9ydF9yZWFjdDE3IiwiaWQ0IiwidXNlSWQiLCJzYWZlVG9SZW1vdmUiLCJnbG9iYWxQcm9qZWN0aW9uU3RhdGUiLCJoYXNBbmltYXRlZFNpbmNlUmVzaXplIiwiaGFzRXZlclVwZGF0ZWQiLCJwaXhlbHNUb1BlcmNlbnQiLCJwaXhlbHMiLCJjb3JyZWN0Qm9yZGVyUmFkaXVzIiwiY29ycmVjdCIsImNvcnJlY3RCb3hTaGFkb3ciLCJvcmlnaW5hbCIsInNoYWRvdyIsInhTY2FsZSIsInlTY2FsZSIsImF2ZXJhZ2VTY2FsZSIsImltcG9ydF9yZWFjdDE4IiwiTWVhc3VyZUxheW91dFdpdGhDb250ZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJsYXlvdXRHcm91cCIsInN3aXRjaExheW91dEdyb3VwIiwiZGVmYXVsdFNjYWxlQ29ycmVjdG9ycyIsImdyb3VwIiwiZGlkVXBkYXRlIiwic2V0T3B0aW9ucyIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwibGF5b3V0RGVwZW5kZW5jeSIsIndpbGxVcGRhdGUiLCJwcm9tb3RlIiwicmVsZWdhdGUiLCJzdGFjayIsImdldFN0YWNrIiwibWVtYmVycyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInF1ZXVlTWljcm90YXNrIiwiY3VycmVudEFuaW1hdGlvbiIsImlzTGVhZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicHJvbW90ZUNvbnRleHQiLCJzY2hlZHVsZUNoZWNrQWZ0ZXJVbm1vdW50IiwiZGVyZWdpc3RlciIsIk1lYXN1cmVMYXlvdXQiLCJhcHBseVRvIiwiYm94U2hhZG93IiwiYm9yZGVycyIsIm51bUJvcmRlcnMiLCJhc051bWJlciIsImlzUHgiLCJtaXhWYWx1ZXMiLCJmb2xsb3ciLCJsZWFkIiwic2hvdWxkQ3Jvc3NmYWRlT3BhY2l0eSIsImlzT25seU1lbWJlciIsImVhc2VDcm9zc2ZhZGVJbiIsIm9wYWNpdHlFeGl0IiwiZWFzZUNyb3NzZmFkZU91dCIsImJvcmRlckxhYmVsIiwiZm9sbG93UmFkaXVzIiwiZ2V0UmFkaXVzIiwibGVhZFJhZGl1cyIsImNhbk1peCIsInJhZGl1c05hbWUiLCJjb21wcmVzcyIsImNvcHlBeGlzSW50byIsIm9yaWdpbkF4aXMiLCJjb3B5Qm94SW50byIsIm9yaWdpbkJveCIsInJlbW92ZVBvaW50RGVsdGEiLCJyZW1vdmVBeGlzRGVsdGEiLCJzb3VyY2VBeGlzIiwicmVsYXRpdmVQcm9ncmVzcyIsInJlbW92ZUF4aXNUcmFuc2Zvcm1zIiwieEtleXMyIiwieUtleXMyIiwicmVtb3ZlQm94VHJhbnNmb3JtcyIsInNvdXJjZUJveCIsImlzQXhpc0RlbHRhWmVybyIsImlzRGVsdGFaZXJvIiwiYm94RXF1YWxzIiwiYm94RXF1YWxzUm91bmRlZCIsImFzcGVjdFJhdGlvIiwiTm9kZVN0YWNrIiwic2NoZWR1bGVSZW5kZXIiLCJwcmV2TGVhZCIsImluZGV4T2ZOb2RlIiwiZmluZEluZGV4IiwibWVtYmVyIiwicHJlc2VydmVGb2xsb3dPcGFjaXR5Iiwic2hvdyIsInJlc3VtZUZyb20iLCJwcmVzZXJ2ZU9wYWNpdHkiLCJzbmFwc2hvdCIsImFuaW1hdGlvblZhbHVlcyIsImlzVXBkYXRpbmciLCJpc0xheW91dERpcnR5IiwiY3Jvc3NmYWRlIiwiaGlkZSIsImV4aXRBbmltYXRpb25Db21wbGV0ZSIsInJlc3VtaW5nRnJvbSIsInJlbW92ZUxlYWRTbmFwc2hvdCIsImJ1aWxkUHJvamVjdGlvblRyYW5zZm9ybSIsImxhdGVzdFRyYW5zZm9ybSIsInhUcmFuc2xhdGUiLCJ5VHJhbnNsYXRlIiwiZWxlbWVudFNjYWxlWCIsImVsZW1lbnRTY2FsZVkiLCJjb21wYXJlQnlEZXB0aCIsImRlcHRoIiwiaXNEaXJ0eSIsInRpbWVvdXQiLCJjaGVja0VsYXBzZWQiLCJyZWNvcmQiLCJkYXRhIiwiTW90aW9uRGVidWciLCJpc1NWR0VsZW1lbnQiLCJTVkdFbGVtZW50IiwiYW5pbWF0ZVNpbmdsZVZhbHVlIiwibW90aW9uVmFsdWUkMSIsInRyYW5zZm9ybUF4ZXMiLCJoaWRkZW5WaXNpYmlsaXR5IiwidmlzaWJpbGl0eSIsImFuaW1hdGlvblRhcmdldCIsImlkMiIsInByb2plY3Rpb25GcmFtZURhdGEiLCJ0b3RhbE5vZGVzIiwicmVzb2x2ZWRUYXJnZXREZWx0YXMiLCJyZWNhbGN1bGF0ZWRQcm9qZWN0aW9uIiwiY3JlYXRlUHJvamVjdGlvbk5vZGUiLCJhdHRhY2hSZXNpemVMaXN0ZW5lciIsImRlZmF1bHRQYXJlbnQiLCJtZWFzdXJlU2Nyb2xsIiwiY2hlY2tJc1Njcm9sbFJvb3QiLCJyZXNldFRyYW5zZm9ybSIsIlByb2plY3Rpb25Ob2RlIiwiYW5pbWF0aW9uSWQiLCJpc1RyZWVBbmltYXRpbmciLCJpc1Byb2plY3Rpb25EaXJ0eSIsImlzU2hhcmVkUHJvamVjdGlvbkRpcnR5IiwiaXNUcmFuc2Zvcm1EaXJ0eSIsInVwZGF0ZU1hbnVhbGx5QmxvY2tlZCIsInVwZGF0ZUJsb2NrZWRCeVJlc2l6ZSIsImlzU1ZHIiwibmVlZHNSZXNldCIsInNob3VsZFJlc2V0VHJhbnNmb3JtIiwiZXZlbnRIYW5kbGVycyIsImhhc1RyZWVBbmltYXRlZCIsInVwZGF0ZVNjaGVkdWxlZCIsInByb2plY3Rpb25VcGRhdGVTY2hlZHVsZWQiLCJjaGVja1VwZGF0ZUZhaWxlZCIsImNsZWFyQWxsU25hcHNob3RzIiwidXBkYXRlUHJvamVjdGlvbiIsIm5vZGVzIiwicHJvcGFnYXRlRGlydHlOb2RlcyIsInJlc29sdmVUYXJnZXREZWx0YSIsImNhbGNQcm9qZWN0aW9uIiwiY2xlYW5EaXJ0eU5vZGVzIiwiaGFzUHJvamVjdGVkIiwiaXNWaXNpYmxlIiwiYW5pbWF0aW9uUHJvZ3Jlc3MiLCJzaGFyZWROb2RlcyIsInBhdGgiLCJub3RpZnlMaXN0ZW5lcnMiLCJhcmdzIiwic3Vic2NyaXB0aW9uTWFuYWdlciIsImhhc0xpc3RlbmVycyIsImNhbmNlbERlbGF5IiwicmVzaXplVW5ibG9ja1VwZGF0ZSIsImZpbmlzaEFuaW1hdGlvbiIsInJlZ2lzdGVyU2hhcmVkTm9kZSIsImhhc1JlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsIm5ld0xheW91dCIsImlzVHJlZUFuaW1hdGlvbkJsb2NrZWQiLCJyZWxhdGl2ZVRhcmdldCIsImxheW91dFRyYW5zaXRpb24iLCJkZWZhdWx0TGF5b3V0VHJhbnNpdGlvbiIsIm9uTGF5b3V0QW5pbWF0aW9uU3RhcnQiLCJvbkxheW91dEFuaW1hdGlvbkNvbXBsZXRlIiwidGFyZ2V0Q2hhbmdlZCIsInRhcmdldExheW91dCIsImhhc09ubHlSZWxhdGl2ZVRhcmdldENoYW5nZWQiLCJsYXlvdXRSb290Iiwic2V0QW5pbWF0aW9uT3JpZ2luIiwiYW5pbWF0aW9uT3B0aW9ucyIsImJsb2NrVXBkYXRlIiwidW5ibG9ja1VwZGF0ZSIsImlzVXBkYXRlQmxvY2tlZCIsInN0YXJ0VXBkYXRlIiwicmVzZXRSb3RhdGlvbiIsImdldFRyYW5zZm9ybVRlbXBsYXRlIiwic2hvdWxkTm90aWZ5TGlzdGVuZXJzIiwicHJldlRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ1cGRhdGVTbmFwc2hvdCIsInVwZGF0ZVdhc0Jsb2NrZWQiLCJjbGVhck1lYXN1cmVtZW50cyIsImNsZWFySXNMYXlvdXREaXJ0eSIsInJlc2V0VHJhbnNmb3JtU3R5bGUiLCJub3RpZnlMYXlvdXRVcGRhdGUiLCJwcmVSZW5kZXIiLCJjbGVhclNuYXBzaG90IiwicmVtb3ZlTGVhZFNuYXBzaG90cyIsInNjaGVkdWxlVXBkYXRlUHJvamVjdGlvbiIsImFsd2F5c01lYXN1cmVMYXlvdXQiLCJwcmV2TGF5b3V0IiwibGF5b3V0Q29ycmVjdGVkIiwicGhhc2UiLCJuZWVkc01lYXN1cmVtZW50IiwiaXNSb290IiwiaXNSZXNldFJlcXVlc3RlZCIsImhhc1Byb2plY3Rpb24iLCJ0cmFuc2Zvcm1UZW1wbGF0ZVZhbHVlIiwidHJhbnNmb3JtVGVtcGxhdGVIYXNDaGFuZ2VkIiwicmVtb3ZlVHJhbnNmb3JtIiwicGFnZUJveCIsInJlbW92ZUVsZW1lbnRTY3JvbGwiLCJyb3VuZEJveCIsIm1lYXN1cmVkQm94IiwiYm94V2l0aG91dFNjcm9sbCIsInJvb3RTY3JvbGwiLCJhcHBseVRyYW5zZm9ybSIsInRyYW5zZm9ybU9ubHkiLCJ3aXRoVHJhbnNmb3JtcyIsImJveFdpdGhvdXRUcmFuc2Zvcm0iLCJub2RlQm94Iiwic2V0VGFyZ2V0RGVsdGEiLCJ0YXJnZXREZWx0YSIsImZvcmNlUmVsYXRpdmVQYXJlbnRUb1Jlc29sdmVUYXJnZXQiLCJyZWxhdGl2ZVBhcmVudCIsInJlc29sdmVkUmVsYXRpdmVUYXJnZXRBdCIsImZvcmNlUmVjYWxjdWxhdGlvbiIsImdldExlYWQiLCJpc1NoYXJlZCIsImF0dGVtcHRUb1Jlc29sdmVSZWxhdGl2ZVRhcmdldCIsImdldENsb3Nlc3RQcm9qZWN0aW5nUGFyZW50IiwicmVsYXRpdmVUYXJnZXRPcmlnaW4iLCJ0YXJnZXRXaXRoVHJhbnNmb3JtcyIsImlzUHJvamVjdGluZyIsInBlbmRpbmdBbmltYXRpb24iLCJwcmV2VHJlZVNjYWxlWCIsInByZXZUcmVlU2NhbGVZIiwicHJvamVjdGlvblRyYW5zZm9ybSIsInByb2plY3Rpb25EZWx0YVdpdGhUcmFuc2Zvcm0iLCJwcmV2UHJvamVjdGlvblRyYW5zZm9ybSIsIm5vdGlmeUFsbDIiLCJzbmFwc2hvdExhdGVzdFZhbHVlcyIsIm1peGVkVmFsdWVzIiwicmVsYXRpdmVMYXlvdXQiLCJzbmFwc2hvdFNvdXJjZSIsImxheW91dFNvdXJjZSIsImlzU2hhcmVkTGF5b3V0QW5pbWF0aW9uIiwiaGFzT3BhY2l0eUNyb3NzZmFkZSIsInByZXZSZWxhdGl2ZVRhcmdldCIsIm1peFRhcmdldERlbHRhIiwibWl4QXhpc0RlbHRhIiwibWl4Qm94IiwiY29tcGxldGVBbmltYXRpb24iLCJhcHBseVRyYW5zZm9ybXNUb1RhcmdldCIsInNob3VsZEFuaW1hdGVQb3NpdGlvbk9ubHkiLCJhbmltYXRpb25UeXBlIiwieExlbmd0aCIsInlMZW5ndGgiLCJpbml0aWFsUHJvbW90aW9uQ29uZmlnIiwic2hvdWxkUHJlc2VydmVGb2xsb3dPcGFjaXR5IiwiZ2V0UHJldkxlYWQiLCJoYXNSb3RhdGUiLCJyZXNldFZhbHVlcyIsInNldFN0YXRpY1ZhbHVlIiwic3R5bGVzIiwicG9pbnRlckV2ZW50cyIsImVtcHR5U3R5bGVzIiwidmFsdWVzVG9SZW5kZXIiLCJjb3JyZWN0ZWQiLCJudW0iLCJyZXNldFRyZWUiLCJtZWFzdXJlZExheW91dCIsImF4aXNTbmFwc2hvdCIsImxheW91dERlbHRhIiwidmlzdWFsRGVsdGEiLCJwYXJlbnRTbmFwc2hvdCIsInBhcmVudExheW91dCIsInJlbGF0aXZlU25hcHNob3QiLCJvbkJlZm9yZUxheW91dE1lYXN1cmUiLCJtaXhBeGlzIiwidXNlckFnZW50Q29udGFpbnMiLCJzdHJpbmciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJyb3VuZFBvaW50Iiwicm91bmRBeGlzIiwiRG9jdW1lbnRQcm9qZWN0aW9uTm9kZSIsIm5vdGlmeTIiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxMZWZ0IiwiYm9keSIsInNjcm9sbFRvcCIsInJvb3RQcm9qZWN0aW9uTm9kZSIsIkhUTUxQcm9qZWN0aW9uTm9kZSIsImRvY3VtZW50Tm9kZSIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsInNwbGl0Q1NTVmFyaWFibGVSZWdleCIsInBhcnNlQ1NTVmFyaWFibGUiLCJleGVjIiwiZmFsbGJhY2siLCJtYXhEZXB0aCIsImdldFZhcmlhYmxlVmFsdWUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJpbW1lZCIsInJlc29sdmVDU1NWYXJpYWJsZXMiLCJwb3NpdGlvbmFsS2V5cyIsImlzUG9zaXRpb25hbEtleSIsImhhc1Bvc2l0aW9uYWxLZXkiLCJpc051bU9yUHhUeXBlIiwiZ2V0UG9zRnJvbU1hdHJpeCIsIm1hdHJpeCIsInBvcyIsImdldFRyYW5zbGF0ZUZyb21NYXRyaXgiLCJwb3MyIiwicG9zMyIsIl9iYm94IiwibWF0cml4M2QiLCJ0cmFuc2Zvcm1LZXlzIiwibm9uVHJhbnNsYXRpb25hbFRyYW5zZm9ybUtleXMiLCJyZW1vdmVOb25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtIiwicmVtb3ZlZFRyYW5zZm9ybXMiLCJwb3NpdGlvbmFsVmFsdWVzIiwiY29udmVydENoYW5nZWRWYWx1ZVR5cGVzIiwiY2hhbmdlZEtleXMiLCJvcmlnaW5CYm94IiwiZWxlbWVudENvbXB1dGVkU3R5bGUiLCJ0YXJnZXRCYm94IiwiY2hlY2tBbmRDb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMiLCJ0YXJnZXRQb3NpdGlvbmFsS2V5cyIsInJlbW92ZWRUcmFuc2Zvcm1WYWx1ZXMiLCJoYXNBdHRlbXB0ZWRUb1JlbW92ZVRyYW5zZm9ybVZhbHVlcyIsImNoYW5nZWRWYWx1ZVR5cGVLZXlzIiwiZnJvbVR5cGUiLCJ0b1R5cGUiLCJudW1LZXlmcmFtZXMiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJjb252ZXJ0ZWRUYXJnZXQiLCJzY3JvbGxUbyIsInVuaXRDb252ZXJzaW9uIiwicGFyc2VEb21WYXJpYW50IiwicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJoYXNSZWR1Y2VkTW90aW9uTGlzdGVuZXIiLCJpbml0UHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJtYXRjaE1lZGlhIiwibW90aW9uTWVkaWFRdWVyeSIsInNldFJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlcyIsImFkZExpc3RlbmVyIiwidXBkYXRlTW90aW9uVmFsdWVzRnJvbVByb3BzIiwibmV4dFZhbHVlIiwicHJldlZhbHVlIiwiZXhpc3RpbmdWYWx1ZSIsImxhdGVzdFZhbHVlIiwiZ2V0U3RhdGljVmFsdWUiLCJyZW1vdmVWYWx1ZSIsImZlYXR1cmVOYW1lcyIsIm51bUZlYXR1cmVzIiwicHJvcEV2ZW50SGFuZGxlcnMiLCJudW1WYXJpYW50UHJvcHMiLCJ2YWx1ZVN1YnNjcmlwdGlvbnMiLCJwcmV2TW90aW9uVmFsdWVzIiwicHJvcEV2ZW50U3Vic2NyaXB0aW9ucyIsIm5vdGlmeVVwZGF0ZSIsInRyaWdnZXJCdWlsZCIsInJlbmRlckluc3RhbmNlIiwiYmFzZVRhcmdldCIsImluaXRpYWxWYWx1ZXMiLCJpbml0aWFsTW90aW9uVmFsdWVzIiwiX3Byb3BzIiwiX3ByZXZQcm9wcyIsInJlbW92ZUZyb21WYXJpYW50VHJlZSIsImFkZFZhcmlhbnRDaGlsZCIsImJpbmRUb01vdGlvblZhbHVlIiwidmFsdWVJc1RyYW5zZm9ybSIsInJlbW92ZU9uQ2hhbmdlIiwicmVtb3ZlT25SZW5kZXJSZXF1ZXN0Iiwib3RoZXIiLCJzb3J0SW5zdGFuY2VOb2RlUG9zaXRpb24iLCJyZW5kZXJlZFByb3BzIiwiUHJvamVjdGlvbk5vZGVDb25zdHJ1Y3RvciIsInN0cmljdE1lc3NhZ2UiLCJpZ25vcmVTdHJpY3QiLCJGZWF0dXJlQ29uc3RydWN0b3IiLCJNZWFzdXJlTGF5b3V0Q29tcG9uZW50IiwiZmVhdHVyZSIsImJ1aWxkIiwibWVhc3VyZUluc3RhbmNlVmlld3BvcnRCb3giLCJjYW5NdXRhdGUiLCJtYWtlVGFyZ2V0QW5pbWF0YWJsZUZyb21JbnN0YW5jZSIsImxpc3RlbmVyIiwiaGFuZGxlQ2hpbGRNb3Rpb25WYWx1ZSIsImdldENsb3Nlc3RWYXJpYW50Tm9kZSIsInN0YXJ0QXRQYXJlbnQiLCJjb250ZXh0MiIsImNsb3Nlc3RWYXJpYW50Tm9kZSIsInJlbW92ZVZhbHVlRnJvbVJlbmRlclN0YXRlIiwiZ2V0QmFzZVRhcmdldEZyb21Qcm9wcyIsInJlYWRWYWx1ZUZyb21JbnN0YW5jZSIsInZhbHVlRnJvbUluaXRpYWwiLCJET01WaXN1YWxFbGVtZW50IiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJnZXRDb21wdXRlZFN0eWxlMiIsIkhUTUxWaXN1YWxFbGVtZW50IiwiZGVmYXVsdFR5cGUiLCJjb21wdXRlZFN0eWxlIiwiY2hpbGRTdWJzY3JpcHRpb24iLCJ0ZXh0Q29udGVudCIsIlNWR1Zpc3VhbEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJjcmVhdGVEb21WaXN1YWxFbGVtZW50IiwiaW1wb3J0X3JlYWN0MTkiLCJ1c2VJc01vdW50ZWQiLCJpbXBvcnRfcmVhY3QyMCIsImZvcmNlZFJlbmRlckNvdW50Iiwic2V0Rm9yY2VkUmVuZGVyQ291bnQiLCJ1c2VTdGF0ZSIsImZvcmNlUmVuZGVyIiwiZGVmZXJyZWRGb3JjZVJlbmRlciIsIlJlYWN0MiIsImltcG9ydF9yZWFjdDIxIiwiUG9wQ2hpbGRNZWFzdXJlIiwiY2hpbGRSZWYiLCJzaXplUmVmIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiUG9wQ2hpbGQiLCJkYXRhc2V0IiwibW90aW9uUG9wSWQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZW1vdmVDaGlsZCIsImNsb25lRWxlbWVudCIsIlJlYWN0MyIsImltcG9ydF9yZWFjdDIyIiwiUHJlc2VuY2VDaGlsZCIsInByZXNlbmNlQWZmZWN0c0xheW91dCIsIm1vZGUiLCJwcmVzZW5jZUNoaWxkcmVuIiwibmV3Q2hpbGRyZW5NYXAiLCJjaGlsZElkIiwiaXNDb21wbGV0ZSIsIl8iLCJpbXBvcnRfcmVhY3QyMyIsIlJlYWN0NCIsImltcG9ydF9yZWFjdDI0IiwiZ2V0Q2hpbGRLZXkiLCJ1cGRhdGVDaGlsZExvb2t1cCIsImFsbENoaWxkcmVuIiwib25seUVsZW1lbnRzIiwiZmlsdGVyZWQiLCJDaGlsZHJlbiIsImlzVmFsaWRFbGVtZW50IiwiZXhpdEJlZm9yZUVudGVyIiwiZmlsdGVyZWRDaGlsZHJlbiIsImNoaWxkcmVuVG9SZW5kZXIiLCJleGl0aW5nQ2hpbGRyZW4iLCJwcmVzZW50Q2hpbGRyZW4iLCJGcmFnbWVudCIsInByZXNlbnRLZXlzIiwidGFyZ2V0S2V5cyIsIm51bVByZXNlbnQiLCJjb21wb25lbnQiLCJpbnNlcnRpb25JbmRleCIsImV4aXRpbmdDb21wb25lbnQiLCJvbkV4aXQiLCJsZWZ0T3ZlcktleXMiLCJjaGlsZEtleSIsImxlZnRPdmVyS2V5IiwicHJlc2VudENoaWxkIiwicHJlc2VudENoaWxkS2V5IiwiUmVhY3Q1IiwiaW1wb3J0X3JlYWN0MjUiLCJSZWFjdDYiLCJpbXBvcnRfcmVhY3QyNiIsInNldElzTG9hZGVkIiwiaXNMYXp5QnVuZGxlIiwibG9hZGVkUmVuZGVyZXIiLCJsb2FkZWRGZWF0dXJlcyIsImltcG9ydF9yZWFjdDI3Iiwibm9kZUdyb3VwIiwiZGlydHlBbGwiLCJkaXJ0eSIsIlJlYWN0NyIsImltcG9ydF9yZWFjdDI4Iiwic2hvdWxkSW5oZXJpdEdyb3VwIiwic2hvdWxkSW5oZXJpdElkIiwibGF5b3V0R3JvdXBDb250ZXh0IiwiZGVwcmVjYXRlZExheW91dEdyb3VwQ29udGV4dCIsInVwc3RyZWFtSWQiLCJtZW1vaXplZENvbnRleHQiLCJpbXBvcnRfcmVhY3QyOSIsIlJlb3JkZXJDb250ZXh0IiwiY2hlY2tSZW9yZGVyIiwiaXRlbTIiLCJuZXh0T2Zmc2V0IiwibmV4dEl0ZW0iLCJuZXh0TGF5b3V0IiwibmV4dEl0ZW1DZW50ZXIiLCJSZWFjdDgiLCJpbXBvcnRfcmVhY3QzMCIsIlJlb3JkZXJHcm91cCIsImFzIiwib25SZW9yZGVyIiwiaXNSZW9yZGVyaW5nIiwicmVnaXN0ZXJJdGVtIiwiaWR4IiwiY29tcGFyZU1pbiIsInVwZGF0ZU9yZGVyIiwibmV3T3JkZXIiLCJHcm91cCIsImltcG9ydF9yZWFjdDMxIiwic2V0TGF0ZXN0IiwiaXNDdXN0b21WYWx1ZVR5cGUiLCJnZXRNaXhlcjIiLCJ1c2VJbW1lZGlhdGUiLCJhcmdPZmZzZXQiLCJpbnB1dFZhbHVlIiwiaW5wdXRSYW5nZSIsIm91dHB1dFJhbmdlIiwidXNlQ29tYmluZU1vdGlvblZhbHVlcyIsImNvbWJpbmVWYWx1ZXMiLCJ1cGRhdGVWYWx1ZSIsInNjaGVkdWxlVXBkYXRlIiwidXNlQ29tcHV0ZWQiLCJjb21wdXRlIiwiaW5wdXRSYW5nZU9yVHJhbnNmb3JtZXIiLCJ1c2VMaXN0VHJhbnNmb3JtIiwiUmVhY3Q5IiwiaW1wb3J0X3JlYWN0MzIiLCJ1c2VEZWZhdWx0TW90aW9uVmFsdWUiLCJSZW9yZGVySXRlbSIsImxhdGVzdFgiLCJsYXRlc3RZIiwiZ2VzdHVyZVBvaW50Iiwib25MYXlvdXRNZWFzdXJlIiwibWVhc3VyZWQiLCJJdGVtIiwiZnJhZ21lbnRzIiwibnVtRnJhZ21lbnRzIiwiYnVpbGRWYWx1ZSIsImltcG9ydF9yZWFjdDMzIiwiYWN0aXZlU3ByaW5nQW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbjIiLCJpbXBvcnRfcmVhY3QzNCIsIm5ld1ZlbG9jaXR5IiwicmVzb2x2ZUVsZW1lbnRzIiwiZWxlbWVudHMiLCJzY29wZSIsInNlbGVjdG9yQ2FjaGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVzaXplSGFuZGxlcnMiLCJvYnNlcnZlciIsImdldEVsZW1lbnRTaXplIiwiYm9yZGVyQm94U2l6ZSIsImlubGluZVNpemUiLCJibG9ja1NpemUiLCJub3RpZnlUYXJnZXQiLCJjb250ZW50UmVjdCIsImNvbnRlbnRTaXplIiwibm90aWZ5QWxsIiwiY3JlYXRlUmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsInJlc2l6ZUVsZW1lbnQiLCJlbGVtZW50SGFuZGxlcnMiLCJ3aW5kb3dDYWxsYmFja3MiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiY3JlYXRlV2luZG93UmVzaXplSGFuZGxlciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlc2l6ZVdpbmRvdyIsInJlc2l6ZSIsIm1heEVsYXBzZWQyIiwiY3JlYXRlQXhpc0luZm8iLCJzY3JvbGxMZW5ndGgiLCJ0YXJnZXRPZmZzZXQiLCJjb250YWluZXJMZW5ndGgiLCJjcmVhdGVTY3JvbGxJbmZvIiwidXBkYXRlQXhpc0luZm8iLCJheGlzTmFtZSIsInByZXZUaW1lIiwidXBkYXRlU2Nyb2xsSW5mbyIsImNhbGNJbnNldCIsImNvbnRhaW5lciIsImluc2V0Iiwib2Zmc2V0UGFyZW50Iiwic3ZnQm91bmRpbmdCb3giLCJwYXJlbnRCb3VuZGluZ0JveCIsIlNWR0dyYXBoaWNzRWxlbWVudCIsInN2ZyIsInBhcmVudE5vZGUiLCJTY3JvbGxPZmZzZXQiLCJFbnRlciIsIkV4aXQiLCJBbnkiLCJBbGwiLCJuYW1lZEVkZ2VzIiwiY2VudGVyIiwicmVzb2x2ZUVkZ2UiLCJlZGdlIiwiYXNOdW1iZXIyIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkZWZhdWx0T2Zmc2V0MiIsInJlc29sdmVPZmZzZXQiLCJ0YXJnZXRJbnNldCIsIm9mZnNldERlZmluaXRpb24iLCJ0YXJnZXRQb2ludCIsImNvbnRhaW5lclBvaW50IiwiZ2V0VGFyZ2V0U2l6ZSIsInJlc29sdmVPZmZzZXRzIiwibGVuZ3RoTGFiZWwiLCJ0YXJnZXRTaXplIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJjb250YWluZXJTaXplIiwiaGFzQ2hhbmdlZCIsIm51bU9mZnNldHMiLCJpbnRlcnBvbGF0b3JPZmZzZXRzIiwiY3JlYXRlT25TY3JvbGxIYW5kbGVyIiwib25TY3JvbGwiLCJzY3JvbGxMaXN0ZW5lcnMiLCJyZXNpemVMaXN0ZW5lcnMiLCJvblNjcm9sbEhhbmRsZXJzIiwiZ2V0RXZlbnRUYXJnZXQiLCJjb250YWluZXJIYW5kbGVycyIsImNvbnRhaW5lckhhbmRsZXIiLCJtZWFzdXJlQWxsIiwidXBkYXRlQWxsIiwibGlzdGVuZXIyIiwiY3VycmVudEhhbmRsZXJzIiwic2Nyb2xsTGlzdGVuZXIiLCJpbXBvcnRfcmVhY3QzNSIsInJlZldhcm5pbmciLCJjcmVhdGVTY3JvbGxNb3Rpb25WYWx1ZXMiLCJzY3JvbGxYIiwic2Nyb2xsWFByb2dyZXNzIiwic2Nyb2xsWVByb2dyZXNzIiwibGF5b3V0RWZmZWN0IiwidXNlTGlmZWN5Y2xlRWZmZWN0IiwiaW1wb3J0X3JlYWN0MzYiLCJpbml0aWFsVGltZXN0YW1wIiwicHJvdmlkZVRpbWVTaW5jZVN0YXJ0IiwiV2lsbENoYW5nZU1vdGlvblZhbHVlIiwibWVtYmVyTmFtZSIsImltcG9ydF9yZWFjdDM3IiwiaW1wb3J0X3JlYWN0MzgiLCJyZWR1Y2VkTW90aW9uUHJlZmVyZW5jZSIsImhhc01vdW50ZWQiLCJzdWJzY3JpYmVycyIsIm9ic2VydmVUaW1lbGluZSIsInByZXZQcm9ncmVzcyIsIm9uRnJhbWUiLCJwZXJjZW50YWdlIiwic3VwcG9ydHNTY3JvbGxUaW1lbGluZSIsIlNjcm9sbFRpbWVsaW5lIiwiR3JvdXBQbGF5YmFja0NvbnRyb2xzIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJjYXRjaCIsImdldEFsbCIsInByb3BOYW1lIiwic2V0QWxsIiwibmV3VmFsdWUiLCJjYW5jZWxBbGwiLCJjYW5jZWxUaW1lbGluZSIsInJ1bkFsbCIsIm1ldGhvZE5hbWUiLCJpc0RPTUtleWZyYW1lcyIsImNyZWF0ZUdlbmVyYXRvckVhc2luZyIsImNhbGNOZXh0VGltZSIsImxhYmVscyIsInJhbmdlU2l6ZSIsImdldEVhc2luZ0ZvclNlZ21lbnQiLCJlcmFzZUtleWZyYW1lcyIsInNlcXVlbmNlIiwiZW5kVGltZSIsImtleWZyYW1lIiwiYXQiLCJhZGRLZXlmcmFtZXMiLCJjb21wYXJlQnlUaW1lIiwiZGVmYXVsdFNlZ21lbnRFYXNpbmciLCJjcmVhdGVBbmltYXRpb25zRnJvbVNlcXVlbmNlIiwiZGVmYXVsdFRyYW5zaXRpb24iLCJzZXF1ZW5jZVRyYW5zaXRpb24iLCJkZWZhdWx0RHVyYXRpb24iLCJhbmltYXRpb25EZWZpbml0aW9ucyIsInNlcXVlbmNlcyIsImVsZW1lbnRDYWNoZSIsInRpbWVMYWJlbHMiLCJzZWdtZW50Iiwic3ViamVjdCIsIm1heER1cmF0aW9uMyIsInJlc29sdmVWYWx1ZVNlcXVlbmNlIiwidmFsdWVLZXlmcmFtZXMiLCJ2YWx1ZVNlcXVlbmNlIiwiZWxlbWVudEluZGV4IiwibnVtRWxlbWVudHMiLCJ2YWx1ZUtleWZyYW1lc0FzTGlzdCIsImtleWZyYW1lc0FzTGlzdCIsInJlbWFpbmluZ1RyYW5zaXRpb24iLCJjYWxjdWxhdGVkRGVsYXkiLCJhYnNvbHV0ZURlbHRhIiwiaXNOdW1iZXJLZXlmcmFtZXNBcnJheSIsInNwcmluZ1RyYW5zaXRpb24iLCJzcHJpbmdFYXNpbmciLCJ0YXJnZXRUaW1lIiwicmVtYWluZGVyIiwidW5zaGlmdCIsInN1YmplY3RTZXF1ZW5jZSIsImdldFN1YmplY3RTZXF1ZW5jZSIsImdldFZhbHVlU2VxdWVuY2UiLCJnZXRWYWx1ZVRyYW5zaXRpb24yIiwidmFsdWVTZXF1ZW5jZXMiLCJ2YWx1ZU9mZnNldCIsInZhbHVlRWFzaW5nIiwiaXNOdW1iZXIiLCJhbmltYXRlRWxlbWVudHMiLCJlbGVtZW50T3JTZWxlY3RvciIsImlzU2VxdWVuY2UiLCJhbmltYXRlU2VxdWVuY2UiLCJzY29wZWRBbmltYXRlIiwidmFsdWVPckVsZW1lbnRPclNlcXVlbmNlIiwiaW1wb3J0X3JlYWN0MzkiLCJpdGVtcyIsInNldEl0ZW0iLCJydW5DeWNsZSIsInRocmVzaG9sZHMiLCJhY3RpdmVJbnRlcnNlY3Rpb25zIiwib25JbnRlcnNlY3Rpb25DaGFuZ2UiLCJuZXdPbkVuZCIsIm9ic2VydmVyMiIsImRpc2Nvbm5lY3QiLCJpbXBvcnRfcmVhY3Q0MCIsInNldEluVmlldyIsIm9uRW50ZXIiLCJjb21wb25lbnRDb250cm9scyIsIm5hdGl2ZUV2ZW50IiwiY3JlYXRlRHJhZ0NvbnRyb2xzIiwiaW1wb3J0X3JlYWN0NDEiLCJzdGFydFRyYW5zaXRpb24iLCJpbXBvcnRfcmVhY3Q0MiIsImZvcmNlVXBkYXRlIiwic3RhcnRJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVubG9ja09uRnJhbWVSZWYiLCJSZWFjdDEwIiwicmVzZXQiLCJhcHBlYXJTdG9yZUlkIiwiYXBwZWFyQW5pbWF0aW9uU3RvcmUiLCJoYW5kb2ZmRnJhbWVUaW1lIiwiaGFuZG9mZk9wdGltaXplZEFwcGVhckFuaW1hdGlvbiIsImVsZW1lbnRJZCIsIl92YWx1ZSIsIl9mcmFtZSIsIm9wdGltaXNlZFZhbHVlTmFtZSIsInN0b3JlSWQiLCJvcHRpbWlzZWRBbmltYXRpb24iLCJlcnJvciIsInN0YXJ0RnJhbWVUaW1lIiwicmVhZHlBbmltYXRpb24iLCJvblJlYWR5IiwiYXBwZWFyQW5pbWF0aW9uIiwicmVhZHkiLCJpbXBvcnRfcmVhY3Q0MyIsImNyZWF0ZU9iamVjdCIsIlN0YXRlVmlzdWFsRWxlbWVudCIsInJlc3RvcmVUcmFuc2Zvcm0iLCJfc3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXRBbmltYXRpb25TdGF0ZSIsImFuaW1hdGlvbkRlZmluaXRpb24iLCJpbXBvcnRfcmVhY3Q0NCIsIm1heFNjYWxlIiwiaW52ZXJ0U2NhbGUiLCJoYXNXYXJuZWQiLCJwYXJlbnRTY2FsZVgiLCJwYXJlbnRTY2FsZVkiLCJSZWFjdDExIiwiaWQzIiwic2Nyb2xsVGltZWxpbmVGYWxsYmFjayIsInRpbWVsaW5lQ2FjaGUiLCJnZXRUaW1lbGluZSIsImdldE9yaWdpbkluZGV4IiwidG90YWwiLCJsYXN0SW5kZXgiLCJzdGFydERlbGF5Iiwi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QUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JB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LENBQVNoaEMsY0FBQSxDQUFlQyxRQUFRO0VBQzNDO0FBQ0o7OztBQy9CQSxTQUFTaXJDLGVBQWV0NUMsSUFBQSxFQUFNdTVDLEtBQUEsRUFBTztFQUNqQyxJQUFJdjVDLElBQUEsS0FBUyxTQUFTO0lBQ2xCLE9BQU87RUFDWCxPQUNLO0lBQ0QsTUFBTXc1QyxTQUFBLEdBQVlELEtBQUEsR0FBUTtJQUMxQixPQUFPdjVDLElBQUEsS0FBUyxTQUFTdzVDLFNBQUEsR0FBWUEsU0FBQSxHQUFZO0VBQ3JEO0FBQ0o7QUFDQSxTQUFTbGxFLFFBQVE0bkIsUUFBQSxHQUFXLEtBQUs7RUFBRXU5QyxVQUFBLEdBQWE7RUFBR3o1QyxJQUFBLEdBQU87RUFBR3JFLElBQUEsRUFBQVU7QUFBSyxJQUFJLENBQUMsR0FBRztFQUN0RSxPQUFPLENBQUNoYixDQUFBLEVBQUdrNEQsS0FBQSxLQUFVO0lBQ2pCLE1BQU1wbkMsU0FBQSxHQUFZLE9BQU9uUyxJQUFBLEtBQVMsV0FBV0EsSUFBQSxHQUFPczVDLGNBQUEsQ0FBZXQ1QyxJQUFBLEVBQU11NUMsS0FBSztJQUM5RSxNQUFNOTJCLFNBQUEsR0FBV3hnQyxJQUFBLENBQUt3YixHQUFBLENBQUkwVSxTQUFBLEdBQVk5d0IsQ0FBQztJQUN2QyxJQUFJNGEsTUFBQSxHQUFRQyxRQUFBLEdBQVd1bUIsU0FBQTtJQUN2QixJQUFJcG1CLEtBQUEsRUFBTTtNQUNOLE1BQU1xOUMsUUFBQSxHQUFXSCxLQUFBLEdBQVFyOUMsUUFBQTtNQUN6QixNQUFNNEgsY0FBQSxHQUFpQjNGLDBCQUFBLENBQTJCOUIsS0FBSTtNQUN0REosTUFBQSxHQUFRNkgsY0FBQSxDQUFlN0gsTUFBQSxHQUFReTlDLFFBQVEsSUFBSUEsUUFBQTtJQUMvQztJQUNBLE9BQU9ELFVBQUEsR0FBYXg5QyxNQUFBO0VBQ3hCO0FBQ0o7OztBQ2ZBLElBQU14bkIsSUFBQSxHQUFPNUIsS0FBQTtBQU1iLElBQU12QixVQUFBLEdBQWF5ZixVQUFBLENBQVdTLE1BQUEsQ0FBTyxDQUFDQyxHQUFBLEVBQUsxVSxHQUFBLEtBQVE7RUFDL0MwVSxHQUFBLENBQUkxVSxHQUFBLElBQVF1UyxRQUFBLElBQVlqZSxXQUFBLENBQVlpZSxRQUFPO0VBQzNDLE9BQU9tQyxHQUFBO0FBQ1gsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9