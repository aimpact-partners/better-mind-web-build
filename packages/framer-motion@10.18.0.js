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

// .beyond/uimport/temp/framer-motion.10.18.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2ZyYW1lci1tb3Rpb24uMTAuMTguMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db25maWdDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9QcmVzZW5jZUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1icm93c2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWlzb21vcnBoaWMtZWZmZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9MYXp5Q29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY2FtZWwtdG8tZGFzaC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL2RhdGEtaWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtcmVmLW9iamVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91c2UtbW90aW9uLXJlZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy12YXJpYW50LWxhYmVsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy92YXJpYW50LXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2lzLWNvbnRyb2xsaW5nLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9kZWZpbml0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sb2FkLWZlYXR1cmVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9MYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L1N3aXRjaExheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9zeW1ib2wubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL21vdGlvbi1wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvbG93ZXJjYXNlLWVsZW1lbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1zdmctY29tcG9uZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtY29ycmVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9pcy1mb3JjZWQtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvaXMtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvYnVpbGQtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1jc3MtdmFyaWFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2dldC1hcy10eXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvY2xhbXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL3VuaXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90eXBlLWludC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvbnVtYmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvYnVpbGQtc3R5bGVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3VzZS1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy92YWxpZC1wcm9wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9maWx0ZXItcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3RyYW5zZm9ybS1vcmlnaW4ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3BhdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2J1aWxkLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jcmVhdGUtcmVuZGVyLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9pcy1zdmctdGFnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3VzZS1yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2NhbWVsLWNhc2UtYXR0cnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3JlbmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3NjcmFwZS1tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWNvbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWtleWZyYW1lcy10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZXNvbHZlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvcmVzb2x2ZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL25vb3AubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvcmVuZGVyLXN0ZXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvYmF0Y2hlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9mcmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvY29uZmlnLW1vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2NyZWF0ZS1jb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvYWRkLWRvbS1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy91dGlscy9pcy1wcmltYXJ5LXBvaW50ZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvZXZlbnQtaW5mby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy9hZGQtcG9pbnRlci1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3BpcGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3V0aWxzL2xvY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvRmVhdHVyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2hvdmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZm9jdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy91dGlscy9pcy1ub2RlLW9yLWNoaWxkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvcHJlc3MubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvdmlld3BvcnQvb2JzZXJ2ZXJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2dlc3R1cmVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvc2hhbGxvdy1jb21wYXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL3Jlc29sdmUtZHluYW1pYy12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2Vycm9ycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3RpbWUtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbnN0YW50LXRyYW5zaXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtYmV6aWVyLWRlZmluaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2Vhc2luZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL3V0aWxzL2dldC1maW5hbC1rZXlmcmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9jdWJpYy1iZXppZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvZWFzZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9pcy1lYXNpbmctYXJyYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL21pcnJvci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9tb2RpZmllcnMvcmV2ZXJzZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9jaXJjLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2JhY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvYW50aWNpcGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9tYXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL3JnYmEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9oZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9oc2xhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9oc2xhLXRvLXJnYmEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgtY29sb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb21wbGV4L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4LWNvbXBsZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9wcm9ncmVzcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2ludGVycG9sYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9maWxsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9kZWZhdWx0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy90aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMva2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdmVsb2NpdHktcGVyLXNlY29uZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL3ZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2ZpbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9zcHJpbmcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9pbmVydGlhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9qcy9kcml2ZXItZnJhbWVsb29wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvdXRpbHMvY2FsYy1kdXJhdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvanMvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9tZW1vLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS9jcmVhdGUtYWNjZWxlcmF0ZWQtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9pbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2RlZmF1bHQtdHJhbnNpdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtYW5pbWF0YWJsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbXBsZXgvZmlsdGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kZWZhdWx0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvYW5pbWF0YWJsZS1ub25lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtemVyby12YWx1ZS1zdHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtbm9uZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9rZXlmcmFtZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvdHJhbnNpdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9HbG9iYWxDb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy9tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1udW1lcmljYWwtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvYXJyYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9zdWJzY3JpcHRpb24tbWFuYWdlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3dhcm4tb25jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90ZXN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90eXBlLWF1dG8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2ZpbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvc2V0dGVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXRhcmdldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXZhcmlhbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9hbmltYXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvYW5pbWF0aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9leGl0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9kaXN0YW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9QYW5TZXNzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1jYWxjLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9jb25zdHJhaW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvbW9kZWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9lYWNoLWF4aXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2NvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL2hhcy10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLWFwcGx5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9tZWFzdXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZ2V0LWNvbnRleHQtd2luZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9WaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL3VzZS1wcmVzZW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWJvcmRlci1yYWRpdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1ib3gtc2hhZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xheW91dC9NZWFzdXJlTGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9hbmltYXRpb24vbWl4LXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvY29weS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtcmVtb3ZlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc2hhcmVkL3N0YWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2NvbXBhcmUtYnktZGVwdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvZmxhdC10cmVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGVsYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9kZWJ1Zy9yZWNvcmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2lzLXN2Zy1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvc2luZ2xlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2NyZWF0ZS1wcm9qZWN0aW9uLW5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvRG9jdW1lbnRQcm9qZWN0aW9uTm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9IVE1MUHJvamVjdGlvbk5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZHJhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY3NzLXZhcmlhYmxlcy1jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy91bml0LWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL3BhcnNlLWRvbS12YXJpYW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL1Zpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL0RPTVZpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9IVE1MVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvU1ZHVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vY3JlYXRlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9tb3Rpb24tbWluaW1hbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pcy1tb3VudGVkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWZvcmNlLXVwZGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1BvcENoaWxkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlUHJlc2VuY2UvUHJlc2VuY2VDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS11bm1vdW50LWVmZmVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9Nb3Rpb25Db25maWcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0xhenlNb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L0RlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvZ3JvdXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0xheW91dEdyb3VwL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9SZW9yZGVyQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci91dGlscy9jaGVjay1yZW9yZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1jb21iaW5lLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1jb21wdXRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvSXRlbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9mZWF0dXJlcy1tYXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtbW90aW9uLXRlbXBsYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNwcmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1tb3Rpb24tdmFsdWUtZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdmVsb2NpdHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL3Jlc29sdmUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9yZXNpemUvaGFuZGxlLXdpbmRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvaW5mby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29mZnNldHMvaW5zZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL3ByZXNldHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2VkZ2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL29mZnNldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29mZnNldHMvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vbi1zY3JvbGwtaGFuZGxlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL3RyYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3Njcm9sbC91c2UtZWxlbWVudC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLXZpZXdwb3J0LXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1hbmltYXRpb24tZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS13aWxsLWNoYW5nZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3VzZS1yZWR1Y2VkLW1vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3VzZS1yZWR1Y2VkLW1vdGlvbi1jb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvYW5pbWF0aW9uLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2JzZXJ2ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL3N1cHBvcnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL0dyb3VwUGxheWJhY2tDb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1kb20ta2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9jcmVhdGUtZ2VuZXJhdG9yLWVhc2luZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS91dGlscy9jYWxjLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93cmFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2dldC1lYXNpbmctZm9yLXNlZ21lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvZWRpdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS91dGlscy9zb3J0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtY3ljbGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZpZXdwb3J0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluLXZpZXcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3VzZS1kcmFnLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL3VzZS1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvaXMtbW90aW9uLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91bndyYXAtbW90aW9uLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXNlLWluc3RhbnQtbGF5b3V0LXRyYW5zaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW5zdGFudC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91c2UtcmVzZXQtcHJvamVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLWlkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvc3RvcmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9oYW5kb2ZmLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvc3RhcnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvdXNlLWFuaW1hdGVkLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLWludmVydGVkLXNjYWxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlU2hhcmVkTGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvc3RhZ2dlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9pbmRleC1sZWdhY3kubWpzIl0sIm5hbWVzIjpbInJlcXVpcmVfbWVtb2l6ZV9icm93c2VyX2NqcyIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5janMuanMiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIm1lbW9pemUiLCJmbiIsImNhY2hlIiwiYXJnIiwiZGVmYXVsdCIsInJlcXVpcmVfaXNfcHJvcF92YWxpZF9icm93c2VyX2NqcyIsIm5vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIl9pbnRlcm9wRGVmYXVsdCIsImV4IiwicmVhY3RQcm9wc1JlZ2V4IiwiaW5kZXgiLCJwcm9wIiwidGVzdCIsImNoYXJDb2RlQXQiLCJmcmFtZXJfbW90aW9uXzEwXzE4XzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZVNoYXJlZExheW91dCIsIkRlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQiLCJEcmFnQ29udHJvbHMiLCJGbGF0VHJlZSIsIkxheW91dEdyb3VwIiwiTGF5b3V0R3JvdXBDb250ZXh0IiwiTGF6eU1vdGlvbiIsIk1vdGlvbkNvbmZpZyIsIk1vdGlvbkNvbmZpZ0NvbnRleHQiLCJNb3Rpb25Db250ZXh0IiwiTW90aW9uR2xvYmFsQ29uZmlnIiwiTW90aW9uVmFsdWUiLCJQcmVzZW5jZUNvbnRleHQiLCJSZW9yZGVyIiwiU3dpdGNoTGF5b3V0R3JvdXBDb250ZXh0IiwiVmlzdWFsRWxlbWVudCIsImFkZFBvaW50ZXJFdmVudCIsImFkZFBvaW50ZXJJbmZvIiwiYWRkU2NhbGVDb3JyZWN0b3IiLCJhbmltYXRlIiwiYW5pbWF0ZVZhbHVlIiwiYW5pbWF0ZVZpc3VhbEVsZW1lbnQiLCJhbmltYXRpb25Db250cm9scyIsImFuaW1hdGlvbnMiLCJhbnRpY2lwYXRlIiwiYmFja0luIiwiYmFja0luT3V0IiwiYmFja091dCIsImJ1aWxkVHJhbnNmb3JtIiwiY2FsY0xlbmd0aCIsImNhbmNlbEZyYW1lIiwiY2FuY2VsU3luYyIsImNoZWNrVGFyZ2V0Rm9yTmV3VmFsdWVzIiwiY2lyY0luIiwiY2lyY0luT3V0IiwiY2lyY091dCIsImNsYW1wIiwiY29sb3IiLCJjb21wbGV4IiwiY3JlYXRlQm94IiwiY3JlYXRlRG9tTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlU2NvcGVkQW5pbWF0ZSIsImN1YmljQmV6aWVyIiwiZGVsYXkiLCJkaXNhYmxlSW5zdGFudFRyYW5zaXRpb25zIiwiZGlzdGFuY2UiLCJkaXN0YW5jZTJEIiwiZG9tQW5pbWF0aW9uIiwiZG9tTWF4IiwiZWFzZUluIiwiZWFzZUluT3V0IiwiZWFzZU91dCIsImZpbHRlclByb3BzIiwiZnJhbWUiLCJmcmFtZURhdGEiLCJpblZpZXciLCJpbnRlcnBvbGF0ZSIsImludmFyaWFudCIsImlzQnJvd3NlciIsImlzRHJhZ0FjdGl2ZSIsImlzTW90aW9uQ29tcG9uZW50IiwiaXNNb3Rpb25WYWx1ZSIsImlzVmFsaWRNb3Rpb25Qcm9wIiwibSIsIm1ha2VVc2VWaXN1YWxTdGF0ZSIsIm1pcnJvckVhc2luZyIsIm1peCIsIm1vdGlvbiIsIm1vdGlvblZhbHVlIiwib3B0aW1pemVkQXBwZWFyRGF0YUF0dHJpYnV0ZSIsInBpcGUiLCJwcm9ncmVzcyIsInB4IiwicmVzb2x2ZU1vdGlvblZhbHVlIiwicmV2ZXJzZUVhc2luZyIsInNjcm9sbCIsInNjcm9sbEluZm8iLCJzcHJpbmciLCJzdGFnZ2VyIiwic3RhcnRPcHRpbWl6ZWRBcHBlYXJBbmltYXRpb24iLCJzdGVwcyIsInN5bmMiLCJ0cmFuc2Zvcm0iLCJ1bndyYXBNb3Rpb25Db21wb25lbnQiLCJ1c2VBbmltYXRlIiwidXNlQW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uQ29udHJvbHMiLCJ1c2VBbmltYXRpb25GcmFtZSIsInVzZUN5Y2xlIiwidXNlRGVwcmVjYXRlZEFuaW1hdGVkU3RhdGUiLCJ1c2VBbmltYXRlZFN0YXRlIiwidXNlRGVwcmVjYXRlZEludmVydGVkU2NhbGUiLCJ1c2VJbnZlcnRlZFNjYWxlIiwidXNlRG9tRXZlbnQiLCJ1c2VEcmFnQ29udHJvbHMiLCJ1c2VFbGVtZW50U2Nyb2xsIiwidXNlRm9yY2VVcGRhdGUiLCJ1c2VJblZpZXciLCJ1c2VJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVzZUluc3RhbnRUcmFuc2l0aW9uIiwidXNlSXNQcmVzZW50IiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsInVzZU1vdGlvblRlbXBsYXRlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VNb3Rpb25WYWx1ZUV2ZW50IiwidXNlUHJlc2VuY2UiLCJ1c2VSZWR1Y2VkTW90aW9uIiwidXNlUmVkdWNlZE1vdGlvbkNvbmZpZyIsInVzZVJlc2V0UHJvamVjdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsInVzZVRpbWUiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VVbm1vdW50RWZmZWN0IiwidXNlVmVsb2NpdHkiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVdpbGxDaGFuZ2UiLCJ2aXN1YWxFbGVtZW50U3RvcmUiLCJ3YXJuaW5nIiwid3JhcCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yZWFjdCIsInJlcXVpcmUiLCJjcmVhdGVDb250ZXh0IiwidHJhbnNmb3JtUGFnZVBvaW50IiwicCIsImlzU3RhdGljIiwicmVkdWNlZE1vdGlvbiIsImltcG9ydF9yZWFjdDIiLCJpbXBvcnRfcmVhY3QzIiwiZG9jdW1lbnQiLCJpbXBvcnRfcmVhY3Q0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiaW1wb3J0X3JlYWN0NSIsIkxhenlDb250ZXh0Iiwic3RyaWN0IiwiY2FtZWxUb0Rhc2giLCJzdHIiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJvcHRpbWl6ZWRBcHBlYXJEYXRhSWQiLCJpbXBvcnRfcmVhY3Q2IiwidXNlVmlzdWFsRWxlbWVudCIsIkNvbXBvbmVudDIiLCJ2aXN1YWxTdGF0ZSIsInByb3BzIiwiY3JlYXRlVmlzdWFsRWxlbWVudDIiLCJ2aXN1YWxFbGVtZW50IiwicGFyZW50IiwidXNlQ29udGV4dCIsImxhenlDb250ZXh0IiwicHJlc2VuY2VDb250ZXh0IiwicmVkdWNlZE1vdGlvbkNvbmZpZyIsInZpc3VhbEVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJyZW5kZXJlciIsImN1cnJlbnQiLCJibG9ja0luaXRpYWxBbmltYXRpb24iLCJpbml0aWFsIiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwidXBkYXRlIiwid2FudHNIYW5kb2ZmIiwiQm9vbGVhbiIsIndpbmRvdyIsIkhhbmRvZmZDb21wbGV0ZSIsInJlbmRlciIsImFuaW1hdGlvblN0YXRlIiwiYW5pbWF0ZUNoYW5nZXMiLCJ1cGRhdGVGZWF0dXJlcyIsImlzUmVmT2JqZWN0IiwicmVmIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW1wb3J0X3JlYWN0NyIsInVzZU1vdGlvblJlZiIsImV4dGVybmFsUmVmIiwidXNlQ2FsbGJhY2siLCJpbnN0YW5jZSIsIm1vdW50IiwidW5tb3VudCIsImlzVmFyaWFudExhYmVsIiwidiIsIkFycmF5IiwiaXNBcnJheSIsImlzQW5pbWF0aW9uQ29udHJvbHMiLCJzdGFydCIsInZhcmlhbnRQcmlvcml0eU9yZGVyIiwidmFyaWFudFByb3BzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzIiwic29tZSIsIm5hbWUiLCJpc1ZhcmlhbnROb2RlIiwidmFyaWFudHMiLCJnZXRDdXJyZW50VHJlZVZhcmlhbnRzIiwiY29udGV4dCIsImFuaW1hdGUyIiwiaW5oZXJpdCIsImltcG9ydF9yZWFjdDgiLCJ1c2VDcmVhdGVNb3Rpb25Db250ZXh0IiwidXNlTWVtbyIsInZhcmlhbnRMYWJlbHNBc0RlcGVuZGVuY3kiLCJqb2luIiwiZmVhdHVyZVByb3BzIiwiYW5pbWF0aW9uIiwiZXhpdCIsImRyYWciLCJmb2N1cyIsImhvdmVyIiwidGFwIiwicGFuIiwibGF5b3V0IiwiZmVhdHVyZURlZmluaXRpb25zIiwia2V5IiwiaXNFbmFibGVkIiwibG9hZEZlYXR1cmVzIiwiZmVhdHVyZXMiLCJpbXBvcnRfcmVhY3Q5IiwiaW1wb3J0X3JlYWN0MTAiLCJtb3Rpb25Db21wb25lbnRTeW1ib2wiLCJTeW1ib2wiLCJmb3IiLCJSZWFjdCIsIl9fdG9FU00iLCJpbXBvcnRfcmVhY3QxMSIsInByZWxvYWRlZEZlYXR1cmVzIiwicHJlbG9hZGVkRmVhdHVyZXMyIiwiY3JlYXRlVmlzdWFsRWxlbWVudCIsInVzZVJlbmRlciIsInVzZVZpc3VhbFN0YXRlIiwidXNlVmlzdWFsU3RhdGUyIiwiQ29tcG9uZW50IiwiTW90aW9uQ29tcG9uZW50IiwiTWVhc3VyZUxheW91dDIiLCJjb25maWdBbmRQcm9wcyIsImxheW91dElkIiwidXNlTGF5b3V0SWQiLCJpbml0aWFsTGF5b3V0R3JvdXBDb25maWciLCJpc1N0cmljdCIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkZvcndhcmRSZWZDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwibGF5b3V0R3JvdXBJZCIsImlkIiwiY3JlYXRlTW90aW9uUHJveHkiLCJjcmVhdGVDb25maWciLCJjdXN0b20iLCJjdXN0b21Nb3Rpb25Db21wb25lbnRDb25maWciLCJQcm94eSIsImNvbXBvbmVudENhY2hlIiwiTWFwIiwiZ2V0IiwiX3RhcmdldCIsImhhcyIsInNldCIsImxvd2VyY2FzZVNWR0VsZW1lbnRzIiwiaXNTVkdDb21wb25lbnQiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJzY2FsZUNvcnJlY3RvcnMiLCJjb3JyZWN0b3JzIiwiYXNzaWduIiwidHJhbnNmb3JtUHJvcE9yZGVyIiwidHJhbnNmb3JtUHJvcHMiLCJTZXQiLCJpc0ZvcmNlZE1vdGlvblZhbHVlIiwibGF5b3V0MiIsInN0YXJ0c1dpdGgiLCJnZXRWZWxvY2l0eSIsInRyYW5zbGF0ZUFsaWFzIiwieCIsInkiLCJ6IiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJudW1UcmFuc2Zvcm1zIiwibGVuZ3RoIiwidHJhbnNmb3JtMiIsImVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIiwiYWxsb3dUcmFuc2Zvcm1Ob25lIiwidHJhbnNmb3JtSXNEZWZhdWx0IiwidHJhbnNmb3JtVGVtcGxhdGUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJpIiwidHJhbnNmb3JtTmFtZSIsInRyaW0iLCJjaGVja1N0cmluZ1N0YXJ0c1dpdGgiLCJ0b2tlbiIsImlzQ1NTVmFyaWFibGVOYW1lIiwiaXNDU1NWYXJpYWJsZVRva2VuIiwiY3NzVmFyaWFibGVSZWdleCIsImdldFZhbHVlQXNUeXBlIiwidHlwZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJudW1iZXIiLCJwYXJzZSIsInBhcnNlRmxvYXQiLCJhbHBoYSIsInNjYWxlIiwic2FuaXRpemUiLCJyb3VuZCIsImZsb2F0UmVnZXgiLCJjb2xvclJlZ2V4Iiwic2luZ2xlQ29sb3JSZWdleCIsImlzU3RyaW5nIiwiY3JlYXRlVW5pdFR5cGUiLCJ1bml0IiwiZW5kc1dpdGgiLCJzcGxpdCIsImRlZ3JlZXMiLCJwZXJjZW50IiwidmgiLCJ2dyIsInByb2dyZXNzUGVyY2VudGFnZSIsImludCIsIm51bWJlclZhbHVlVHlwZXMiLCJib3JkZXJXaWR0aCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwid2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsInNpemUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNrZXciLCJza2V3WCIsInNrZXdZIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwicGVyc3BlY3RpdmUiLCJvcGFjaXR5Iiwib3JpZ2luWCIsIm9yaWdpblkiLCJvcmlnaW5aIiwiekluZGV4IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VPcGFjaXR5IiwibnVtT2N0YXZlcyIsImJ1aWxkSFRNTFN0eWxlcyIsInN0YXRlIiwibGF0ZXN0VmFsdWVzIiwib3B0aW9ucyIsInN0eWxlIiwidmFycyIsInRyYW5zZm9ybU9yaWdpbiIsImhhc1RyYW5zZm9ybTIiLCJoYXNUcmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm1Jc05vbmUiLCJ2YWx1ZVR5cGUiLCJ2YWx1ZUFzVHlwZSIsImNyZWF0ZUh0bWxSZW5kZXJTdGF0ZSIsImltcG9ydF9yZWFjdDEyIiwiY29weVJhd1ZhbHVlc09ubHkiLCJ0YXJnZXQiLCJzb3VyY2UiLCJ1c2VJbml0aWFsTW90aW9uVmFsdWVzIiwidXNlU3R5bGUiLCJzdHlsZVByb3AiLCJ0cmFuc2Zvcm1WYWx1ZXMiLCJ1c2VIVE1MUHJvcHMiLCJodG1sUHJvcHMiLCJkcmFnTGlzdGVuZXIiLCJkcmFnZ2FibGUiLCJ1c2VyU2VsZWN0IiwiV2Via2l0VXNlclNlbGVjdCIsIldlYmtpdFRvdWNoQ2FsbG91dCIsInRvdWNoQWN0aW9uIiwidGFiSW5kZXgiLCJvblRhcCIsIm9uVGFwU3RhcnQiLCJ3aGlsZVRhcCIsInZhbGlkTW90aW9uUHJvcHMiLCJzaG91bGRGb3J3YXJkIiwibG9hZEV4dGVybmFsSXNWYWxpZFByb3AiLCJpc1ZhbGlkUHJvcCIsIl9hIiwiaXNEb20iLCJmb3J3YXJkTW90aW9uUHJvcHMiLCJmaWx0ZXJlZFByb3BzIiwidmFsdWVzIiwiY2FsY09yaWdpbiIsIm9yaWdpbiIsIm9mZnNldCIsImNhbGNTVkdUcmFuc2Zvcm1PcmlnaW4iLCJkaW1lbnNpb25zIiwicHhPcmlnaW5YIiwicHhPcmlnaW5ZIiwiZGFzaEtleXMiLCJhcnJheSIsImNhbWVsS2V5cyIsImJ1aWxkU1ZHUGF0aCIsImF0dHJzIiwic3BhY2luZyIsInVzZURhc2hDYXNlIiwicGF0aExlbmd0aCIsImtleXMyIiwicGF0aFNwYWNpbmciLCJidWlsZFNWR0F0dHJzIiwiYXR0clgiLCJhdHRyWSIsImF0dHJTY2FsZSIsInBhdGhPZmZzZXQiLCJsYXRlc3QiLCJpc1NWR1RhZzIiLCJ2aWV3Qm94IiwiY3JlYXRlU3ZnUmVuZGVyU3RhdGUiLCJpc1NWR1RhZyIsInRhZyIsImltcG9ydF9yZWFjdDEzIiwidXNlU1ZHUHJvcHMiLCJfaXNTdGF0aWMiLCJ2aXN1YWxQcm9wcyIsInJhd1N0eWxlcyIsImltcG9ydF9yZWFjdDE0IiwiY3JlYXRlVXNlUmVuZGVyIiwidXNlVmlzdWFsUHJvcHMiLCJlbGVtZW50UHJvcHMiLCJjaGlsZHJlbiIsInJlbmRlcmVkQ2hpbGRyZW4iLCJyZW5kZXJIVE1MIiwiZWxlbWVudCIsInByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uU3R5bGVzIiwic2V0UHJvcGVydHkiLCJjYW1lbENhc2VBdHRyaWJ1dGVzIiwicmVuZGVyU1ZHIiwicmVuZGVyU3RhdGUiLCJfc3R5bGVQcm9wIiwic2V0QXR0cmlidXRlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzIiwicHJldlByb3BzIiwibmV3VmFsdWVzIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMiIsInRhcmdldEtleSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicmVzb2x2ZVZhcmlhbnRGcm9tUHJvcHMiLCJkZWZpbml0aW9uIiwiY3VycmVudFZhbHVlcyIsImN1cnJlbnRWZWxvY2l0eSIsImltcG9ydF9yZWFjdDE1IiwidXNlQ29uc3RhbnQiLCJpbml0IiwiaXNLZXlmcmFtZXNUYXJnZXQiLCJpc0N1c3RvbVZhbHVlIiwidG9WYWx1ZSIsInJlc29sdmVGaW5hbFZhbHVlSW5LZXlmcmFtZXMiLCJ1bndyYXBwZWRWYWx1ZSIsImltcG9ydF9yZWFjdDE2IiwibWFrZVN0YXRlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMyIsImNyZWF0ZVJlbmRlclN0YXRlIiwib25Nb3VudCIsIm1ha2VMYXRlc3RWYWx1ZXMiLCJjb25maWciLCJtYWtlIiwic2NyYXBlTW90aW9uVmFsdWVzIiwibW90aW9uVmFsdWVzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzJDEiLCJpc1ZhcmlhbnROb2RlJDEiLCJpc0luaXRpYWxBbmltYXRpb25CbG9ja2VkIiwidmFyaWFudFRvU2V0IiwibGlzdCIsImZvckVhY2giLCJyZXNvbHZlZCIsInRyYW5zaXRpb25FbmQiLCJ0cmFuc2l0aW9uIiwidmFsdWVUYXJnZXQiLCJub29wIiwiYW55IiwiUXVldWUiLCJjb25zdHJ1Y3RvciIsIm9yZGVyIiwic2NoZWR1bGVkIiwiYWRkIiwicHJvY2VzczIiLCJwdXNoIiwicmVtb3ZlIiwic3BsaWNlIiwiZGVsZXRlIiwiY2xlYXIiLCJjcmVhdGVSZW5kZXJTdGVwIiwicnVuTmV4dEZyYW1lIiwidGhpc0ZyYW1lIiwibmV4dEZyYW1lIiwibnVtVG9SdW4iLCJpc1Byb2Nlc3NpbmciLCJmbHVzaE5leHRGcmFtZSIsInRvS2VlcEFsaXZlIiwiV2Vha1NldCIsInN0ZXAiLCJzY2hlZHVsZSIsImNhbGxiYWNrIiwia2VlcEFsaXZlIiwiaW1tZWRpYXRlIiwiYWRkVG9DdXJyZW50RnJhbWUiLCJxdWV1ZSIsImNhbmNlbCIsInByb2Nlc3MiLCJmcmFtZURhdGEyIiwic3RlcHNPcmRlciIsIm1heEVsYXBzZWQiLCJjcmVhdGVSZW5kZXJCYXRjaGVyIiwic2NoZWR1bGVOZXh0QmF0Y2giLCJhbGxvd0tlZXBBbGl2ZSIsInVzZURlZmF1bHRFbGFwc2VkIiwiZGVsdGEiLCJ0aW1lc3RhbXAiLCJzdGVwczIiLCJyZWR1Y2UiLCJhY2MiLCJwcm9jZXNzU3RlcCIsInN0ZXBJZCIsInByb2Nlc3NCYXRjaCIsInBlcmZvcm1hbmNlIiwibm93Iiwid2FrZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN2Z01vdGlvbkNvbmZpZyIsInJlYWQiLCJnZXRCQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZSIsInRhZ05hbWUiLCJodG1sTW90aW9uQ29uZmlnIiwiY3JlYXRlRG9tTW90aW9uQ29uZmlnIiwiYmFzZUNvbmZpZyIsImFkZERvbUV2ZW50IiwiZXZlbnROYW1lIiwiaGFuZGxlciIsInBhc3NpdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzUHJpbWFyeVBvaW50ZXIiLCJldmVudCIsInBvaW50ZXJUeXBlIiwiYnV0dG9uIiwiaXNQcmltYXJ5IiwiZXh0cmFjdEV2ZW50SW5mbyIsInBvaW50VHlwZSIsInBvaW50IiwiY29tYmluZUZ1bmN0aW9ucyIsImEiLCJiIiwidHJhbnNmb3JtZXJzIiwiY3JlYXRlTG9jayIsImxvY2siLCJvcGVuTG9jayIsImdsb2JhbEhvcml6b250YWxMb2NrIiwiZ2xvYmFsVmVydGljYWxMb2NrIiwiZ2V0R2xvYmFsTG9jayIsImRyYWcyIiwib3Blbkhvcml6b250YWwiLCJvcGVuVmVydGljYWwiLCJvcGVuR2VzdHVyZUxvY2siLCJGZWF0dXJlIiwibm9kZSIsImlzTW91bnRlZCIsImFkZEhvdmVyRXZlbnQiLCJpc0FjdGl2ZSIsImNhbGxiYWNrTmFtZSIsImhhbmRsZUV2ZW50IiwiaW5mbyIsImdldFByb3BzIiwid2hpbGVIb3ZlciIsInNldEFjdGl2ZSIsIkhvdmVyR2VzdHVyZSIsIkZvY3VzR2VzdHVyZSIsImFyZ3VtZW50cyIsIm9uRm9jdXMiLCJpc0ZvY3VzVmlzaWJsZSIsIm1hdGNoZXMiLCJvbkJsdXIiLCJpc05vZGVPckNoaWxkIiwiY2hpbGQiLCJwYXJlbnRFbGVtZW50IiwiZmlyZVN5bnRoZXRpY1BvaW50ZXJFdmVudCIsInN5bnRoZXRpY1BvaW50ZXJFdmVudCIsIlBvaW50ZXJFdmVudCIsIlByZXNzR2VzdHVyZSIsInJlbW92ZVN0YXJ0TGlzdGVuZXJzIiwicmVtb3ZlRW5kTGlzdGVuZXJzIiwicmVtb3ZlQWNjZXNzaWJsZUxpc3RlbmVycyIsInN0YXJ0UG9pbnRlclByZXNzIiwic3RhcnRFdmVudCIsInN0YXJ0SW5mbyIsImlzUHJlc3NpbmciLCJlbmRQb2ludGVyUHJlc3MiLCJlbmRFdmVudCIsImVuZEluZm8iLCJjaGVja1ByZXNzRW5kIiwib25UYXBDYW5jZWwiLCJnbG9iYWxUYXBUYXJnZXQiLCJyZW1vdmVQb2ludGVyVXBMaXN0ZW5lciIsInJlbW92ZVBvaW50ZXJDYW5jZWxMaXN0ZW5lciIsImNhbmNlbEV2ZW50IiwiY2FuY2VsSW5mbyIsImNhbmNlbFByZXNzIiwic3RhcnRQcmVzcyIsInN0YXJ0QWNjZXNzaWJsZVByZXNzIiwiaGFuZGxlS2V5ZG93biIsImtleWRvd25FdmVudCIsImhhbmRsZUtleXVwIiwia2V5dXBFdmVudCIsInJlbW92ZUtleWRvd25MaXN0ZW5lciIsImhhbmRsZUJsdXIiLCJyZW1vdmVCbHVyTGlzdGVuZXIiLCJyZW1vdmVQb2ludGVyTGlzdGVuZXIiLCJyZW1vdmVGb2N1c0xpc3RlbmVyIiwib2JzZXJ2ZXJDYWxsYmFja3MiLCJXZWFrTWFwIiwib2JzZXJ2ZXJzIiwiZmlyZU9ic2VydmVyQ2FsbGJhY2siLCJlbnRyeSIsImZpcmVBbGxPYnNlcnZlckNhbGxiYWNrcyIsImVudHJpZXMiLCJpbml0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJyb290IiwibG9va3VwUm9vdCIsInJvb3RPYnNlcnZlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlSW50ZXJzZWN0aW9uIiwicm9vdEludGVyZXNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGROYW1lcyIsImFsbCIsIkluVmlld0ZlYXR1cmUiLCJoYXNFbnRlcmVkVmlldyIsImlzSW5WaWV3Iiwic3RhcnRPYnNlcnZlciIsInZpZXdwb3J0Iiwicm9vdE1hcmdpbiIsImFtb3VudCIsIm9uY2UiLCJ0aHJlc2hvbGQiLCJvbkludGVyc2VjdGlvblVwZGF0ZSIsImlzSW50ZXJzZWN0aW5nIiwib25WaWV3cG9ydEVudGVyIiwib25WaWV3cG9ydExlYXZlIiwiaGFzT3B0aW9uc0NoYW5nZWQiLCJoYXNWaWV3cG9ydE9wdGlvbkNoYW5nZWQiLCJwcmV2Vmlld3BvcnQiLCJnZXN0dXJlQW5pbWF0aW9ucyIsInNoYWxsb3dDb21wYXJlIiwibmV4dCIsInByZXYiLCJwcmV2TGVuZ3RoIiwiZ2V0Q3VycmVudCIsInZlbG9jaXR5IiwicmVzb2x2ZVZhcmlhbnQiLCJjaGVjayIsIm1lc3NhZ2UiLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwic2Vjb25kc1RvTWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kc1RvU2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsImluc3RhbnRBbmltYXRpb25TdGF0ZSIsImlzQmV6aWVyRGVmaW5pdGlvbiIsImVhc2luZyIsImlzV2FhcGlTdXBwb3J0ZWRFYXNpbmciLCJzdXBwb3J0ZWRXYWFwaUVhc2luZyIsImV2ZXJ5IiwiY3ViaWNCZXppZXJBc1N0cmluZyIsImMiLCJkIiwibGluZWFyIiwiZWFzZSIsIm1hcEVhc2luZ1RvTmF0aXZlRWFzaW5nIiwibWFwIiwiYW5pbWF0ZVN0eWxlIiwidmFsdWVOYW1lIiwia2V5ZnJhbWVzMiIsImRlbGF5MiIsImR1cmF0aW9uIiwicmVwZWF0IiwicmVwZWF0VHlwZSIsImVhc2UyIiwidGltZXMiLCJrZXlmcmFtZU9wdGlvbnMiLCJmaWxsIiwiaXRlcmF0aW9ucyIsImRpcmVjdGlvbiIsImdldEZpbmFsS2V5ZnJhbWUiLCJjYWxjQmV6aWVyIiwidCIsImExIiwiYTIiLCJzdWJkaXZpc2lvblByZWNpc2lvbiIsInN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyIsImJpbmFyeVN1YmRpdmlkZSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwibVgxIiwibVgyIiwiY3VycmVudFgiLCJjdXJyZW50VCIsImFicyIsIm1ZMSIsIm1ZMiIsImdldFRGb3JYIiwiYVgiLCJpc0Vhc2luZ0FycmF5Iiwic2luIiwiYWNvcyIsInBvdyIsImVhc2luZ0xvb2t1cCIsImVhc2luZ0RlZmluaXRpb25Ub0Z1bmN0aW9uIiwieDEiLCJ5MSIsIngyIiwieTIiLCJpc0NvbG9yU3RyaW5nIiwidGVzdFByb3AiLCJzcGxpdENvbG9yIiwiYU5hbWUiLCJiTmFtZSIsImNOYW1lIiwiYWxwaGEyIiwibWF0Y2giLCJjbGFtcFJnYlVuaXQiLCJyZ2JVbml0IiwicmdiYSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhJDEiLCJwYXJzZUhleCIsInIiLCJnIiwicGFyc2VJbnQiLCJoZXgiLCJoc2xhIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImZyb20iLCJ0byIsInByb2dyZXNzMiIsImh1ZVRvUmdiIiwicSIsImhzbGFUb1JnYmEiLCJtaXhMaW5lYXJDb2xvciIsImZyb21FeHBvIiwic3FydCIsImNvbG9yVHlwZXMiLCJnZXRDb2xvclR5cGUiLCJmaW5kIiwiYXNSR0JBIiwiY29sb3IyIiwibW9kZWwiLCJtaXhDb2xvciIsImZyb21SR0JBIiwidG9SR0JBIiwiYmxlbmRlZCIsIl9iIiwiaXNOYU4iLCJjc3NWYXJUb2tlbmlzZXIiLCJyZWdleCIsImNvdW50S2V5IiwiY29sb3JUb2tlbmlzZXIiLCJudW1iZXJUb2tlbmlzZXIiLCJ0b2tlbmlzZSIsInRva2VuaXNlZCIsImFuYWx5c2VDb21wbGV4VmFsdWUiLCJvcmlnaW5hbFZhbHVlIiwidG9TdHJpbmciLCJudW1WYXJzIiwibnVtQ29sb3JzIiwibnVtTnVtYmVycyIsInBhcnNlQ29tcGxleFZhbHVlIiwiY3JlYXRlVHJhbnNmb3JtZXIiLCJudW1WYWx1ZXMiLCJvdXRwdXQiLCJjb252ZXJ0TnVtYmVyc1RvWmVybyIsImdldEFuaW1hdGFibGVOb25lIiwicGFyc2VkIiwidHJhbnNmb3JtZXIiLCJtaXhJbW1lZGlhdGUiLCJnZXRNaXhlciIsIm1peENvbXBsZXgiLCJtaXhBcnJheSIsImJsZW5kVmFsdWUiLCJmcm9tVGhpcyIsIm1peE9iamVjdCIsInRlbXBsYXRlIiwib3JpZ2luU3RhdHMiLCJ0YXJnZXRTdGF0cyIsImNhbkludGVycG9sYXRlIiwidG9Gcm9tRGlmZmVyZW5jZSIsIm1peE51bWJlciIsImRldGVjdE1peGVyRmFjdG9yeSIsImNyZWF0ZU1peGVycyIsImN1c3RvbU1peGVyIiwibWl4ZXJzIiwibWl4ZXJGYWN0b3J5IiwibnVtTWl4ZXJzIiwibWl4ZXIiLCJlYXNpbmdGdW5jdGlvbiIsImlucHV0IiwiaXNDbGFtcCIsImlucHV0TGVuZ3RoIiwicmV2ZXJzZSIsImludGVycG9sYXRvciIsInByb2dyZXNzSW5SYW5nZSIsImZpbGxPZmZzZXQiLCJyZW1haW5pbmciLCJvZmZzZXRQcm9ncmVzcyIsImRlZmF1bHRPZmZzZXQiLCJhcnIiLCJjb252ZXJ0T2Zmc2V0VG9UaW1lcyIsIm8iLCJkZWZhdWx0RWFzaW5nIiwia2V5ZnJhbWVzIiwia2V5ZnJhbWVWYWx1ZXMiLCJlYXNpbmdGdW5jdGlvbnMiLCJkb25lIiwiYWJzb2x1dGVUaW1lcyIsIm1hcFRpbWVUb0tleWZyYW1lIiwiY2FsY3VsYXRlZER1cmF0aW9uIiwidmVsb2NpdHlQZXJTZWNvbmQiLCJmcmFtZUR1cmF0aW9uIiwidmVsb2NpdHlTYW1wbGVEdXJhdGlvbiIsImNhbGNHZW5lcmF0b3JWZWxvY2l0eSIsInJlc29sdmVWYWx1ZSIsInByZXZUIiwic2FmZU1pbiIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJtaW5EYW1waW5nIiwibWF4RGFtcGluZyIsImZpbmRTcHJpbmciLCJib3VuY2UiLCJtYXNzIiwiZW52ZWxvcGUiLCJkZXJpdmF0aXZlIiwiZGFtcGluZ1JhdGlvIiwidW5kYW1wZWRGcmVxMiIsImV4cG9uZW50aWFsRGVjYXkiLCJjYWxjQW5ndWxhckZyZXEiLCJleHAiLCJmIiwiZmFjdG9yIiwiaW5pdGlhbEd1ZXNzIiwidW5kYW1wZWRGcmVxIiwiYXBwcm94aW1hdGVSb290Iiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInJvb3RJdGVyYXRpb25zIiwicmVzdWx0IiwiZHVyYXRpb25LZXlzIiwicGh5c2ljc0tleXMiLCJpc1NwcmluZ1R5cGUiLCJnZXRTcHJpbmdPcHRpb25zIiwic3ByaW5nT3B0aW9ucyIsImlzUmVzb2x2ZWRGcm9tRHVyYXRpb24iLCJkZXJpdmVkIiwicmVzdERlbHRhIiwicmVzdFNwZWVkIiwiaW5pdGlhbFZlbG9jaXR5IiwiaW5pdGlhbERlbHRhIiwidW5kYW1wZWRBbmd1bGFyRnJlcSIsImlzR3JhbnVsYXJTY2FsZSIsInJlc29sdmVTcHJpbmciLCJhbmd1bGFyRnJlcSIsImNvcyIsImRhbXBlZEFuZ3VsYXJGcmVxIiwiZnJlcUZvclQiLCJzaW5oIiwiY29zaCIsImlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCIsImlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJpbmVydGlhIiwicG93ZXIiLCJ0aW1lQ29uc3RhbnQiLCJib3VuY2VEYW1waW5nIiwiYm91bmNlU3RpZmZuZXNzIiwibW9kaWZ5VGFyZ2V0IiwiaXNPdXRPZkJvdW5kcyIsIm5lYXJlc3RCb3VuZGFyeSIsImFtcGxpdHVkZSIsImlkZWFsIiwiY2FsY0RlbHRhIiwiY2FsY0xhdGVzdCIsImFwcGx5RnJpY3Rpb24iLCJ0aW1lUmVhY2hlZEJvdW5kYXJ5Iiwic3ByaW5nJDEiLCJjaGVja0NhdGNoQm91bmRhcnkiLCJoYXNVcGRhdGVkRnJhbWUiLCJmcmFtZWxvb3BEcml2ZXIiLCJwYXNzVGltZXN0YW1wIiwic3RvcCIsIm1heEdlbmVyYXRvckR1cmF0aW9uIiwiY2FsY0dlbmVyYXRvckR1cmF0aW9uIiwiZ2VuZXJhdG9yIiwidGltZVN0ZXAiLCJJbmZpbml0eSIsInR5cGVzIiwiZGVjYXkiLCJ0d2VlbiIsImF1dG9wbGF5IiwiZHJpdmVyIiwia2V5ZnJhbWVzJDEiLCJyZXBlYXREZWxheSIsIm9uUGxheSIsIm9uU3RvcCIsIm9uQ29tcGxldGUiLCJvblVwZGF0ZSIsInNwZWVkIiwiaGFzU3RvcHBlZCIsInJlc29sdmVGaW5pc2hlZFByb21pc2UiLCJjdXJyZW50RmluaXNoZWRQcm9taXNlIiwidXBkYXRlRmluaXNoZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25Ecml2ZXIiLCJnZW5lcmF0b3JGYWN0b3J5IiwibWFwTnVtYmVyc1RvS2V5ZnJhbWVzIiwibWlycm9yZWRHZW5lcmF0b3IiLCJwbGF5U3RhdGUiLCJob2xkVGltZSIsInN0YXJ0VGltZSIsImNhbmNlbFRpbWUiLCJyZXNvbHZlZER1cmF0aW9uIiwidG90YWxEdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwidGljayIsInRpbWVXaXRob3V0RGVsYXkiLCJpc0luRGVsYXlQaGFzZSIsImVsYXBzZWQiLCJmcmFtZUdlbmVyYXRvciIsImN1cnJlbnRJdGVyYXRpb24iLCJmbG9vciIsIml0ZXJhdGlvblByb2dyZXNzIiwiaXNPZGRJdGVyYXRpb24iLCJpc0FuaW1hdGlvbkZpbmlzaGVkIiwiZmluaXNoIiwic3RvcEFuaW1hdGlvbkRyaXZlciIsInBsYXkiLCJjb250cm9scyIsInRoZW4iLCJyZWplY3QiLCJ0aW1lIiwibmV3VGltZSIsIm5ld1NwZWVkIiwicGF1c2UiLCJjb21wbGV0ZSIsInNhbXBsZSIsIm1lbW8iLCJzdXBwb3J0c1dhYXBpIiwiRWxlbWVudCIsImFjY2VsZXJhdGVkVmFsdWVzIiwic2FtcGxlRGVsdGEiLCJtYXhEdXJhdGlvbjIiLCJyZXF1aXJlc1ByZWdlbmVyYXRlZEtleWZyYW1lcyIsImNyZWF0ZUFjY2VsZXJhdGVkQW5pbWF0aW9uIiwiY2FuQWNjZWxlcmF0ZUFuaW1hdGlvbiIsInBlbmRpbmdDYW5jZWwiLCJzYW1wbGVBbmltYXRpb24iLCJwcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJvd25lciIsImNhbmNlbEFuaW1hdGlvbiIsInNhZmVDYW5jZWwiLCJvbmZpbmlzaCIsImF0dGFjaFRpbWVsaW5lIiwidGltZWxpbmUiLCJwbGF5YmFja1JhdGUiLCJzZXRXaXRoVmVsb2NpdHkiLCJjcmVhdGVJbnN0YW50QW5pbWF0aW9uIiwic2V0VmFsdWUiLCJ1bmRlckRhbXBlZFNwcmluZyIsImNyaXRpY2FsbHlEYW1wZWRTcHJpbmciLCJrZXlmcmFtZXNUcmFuc2l0aW9uIiwiZ2V0RGVmYXVsdFRyYW5zaXRpb24iLCJ2YWx1ZUtleSIsImlzQW5pbWF0YWJsZSIsIm1heERlZmF1bHRzIiwiYXBwbHlEZWZhdWx0RmlsdGVyIiwic2xpY2UiLCJudW1iZXIyIiwiZGVmYXVsdFZhbHVlIiwiZnVuY3Rpb25SZWdleCIsImZpbHRlciIsImZ1bmN0aW9ucyIsImRlZmF1bHRWYWx1ZVR5cGVzIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwic3Ryb2tlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJUb3BDb2xvciIsImJvcmRlclJpZ2h0Q29sb3IiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckxlZnRDb2xvciIsIldlYmtpdEZpbHRlciIsImdldERlZmF1bHRWYWx1ZVR5cGUiLCJnZXRBbmltYXRhYmxlTm9uZTIiLCJkZWZhdWx0VmFsdWVUeXBlIiwiaXNaZXJvVmFsdWVTdHJpbmciLCJpc05vbmUiLCJnZXRLZXlmcmFtZXMiLCJpc1RhcmdldEFuaW1hdGFibGUiLCJkZWZhdWx0T3JpZ2luIiwiYW5pbWF0YWJsZVRlbXBsYXRlVmFsdWUiLCJub25lS2V5ZnJhbWVJbmRleGVzIiwiaXNUcmFuc2l0aW9uRGVmaW5lZCIsIndoZW4iLCJfZGVsYXkiLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwic3RhZ2dlckRpcmVjdGlvbiIsImtleXMiLCJnZXRWYWx1ZVRyYW5zaXRpb24iLCJza2lwQW5pbWF0aW9ucyIsImFuaW1hdGVNb3Rpb25WYWx1ZSIsInZhbHVlVHJhbnNpdGlvbiIsIm9yaWdpbktleWZyYW1lIiwidGFyZ2V0S2V5ZnJhbWUiLCJpc09yaWdpbkFuaW1hdGFibGUiLCJpc0hhbmRvZmYiLCJIVE1MRWxlbWVudCIsImFjY2VsZXJhdGVkQW5pbWF0aW9uIiwiaXNXaWxsQ2hhbmdlTW90aW9uVmFsdWUiLCJpc051bWVyaWNhbFN0cmluZyIsImFkZFVuaXF1ZUl0ZW0iLCJpdGVtIiwicmVtb3ZlSXRlbSIsIm1vdmVJdGVtIiwiZnJvbUluZGV4IiwidG9JbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIlN1YnNjcmlwdGlvbk1hbmFnZXIiLCJzdWJzY3JpcHRpb25zIiwibm90aWZ5IiwibnVtU3Vic2NyaXB0aW9ucyIsImdldFNpemUiLCJ3YXJuZWQiLCJ3YXJuT25jZSIsImNvbmRpdGlvbiIsImlzRmxvYXQiLCJjb2xsZWN0TW90aW9uVmFsdWVzIiwidmVyc2lvbiIsInRpbWVEZWx0YSIsImxhc3RVcGRhdGVkIiwiY2FuVHJhY2tWZWxvY2l0eSIsImV2ZW50cyIsInVwZGF0ZUFuZE5vdGlmeSIsInBvc3RSZW5kZXIiLCJzY2hlZHVsZVZlbG9jaXR5Q2hlY2siLCJjaGFuZ2UiLCJ2ZWxvY2l0eUNoYW5nZSIsInJlbmRlclJlcXVlc3QiLCJ2ZWxvY2l0eUNoZWNrIiwiaGFzQW5pbWF0ZWQiLCJvbkNoYW5nZSIsInN1YnNjcmlwdGlvbiIsIm9uIiwidW5zdWJzY3JpYmUiLCJjbGVhckxpc3RlbmVycyIsImV2ZW50TWFuYWdlcnMiLCJhdHRhY2giLCJwYXNzaXZlRWZmZWN0Iiwic3RvcFBhc3NpdmVFZmZlY3QiLCJqdW1wIiwiZ2V0UHJldmlvdXMiLCJzdGFydEFuaW1hdGlvbiIsImFuaW1hdGlvblN0YXJ0IiwiYW5pbWF0aW9uQ29tcGxldGUiLCJjbGVhckFuaW1hdGlvbiIsImFuaW1hdGlvbkNhbmNlbCIsImlzQW5pbWF0aW5nIiwiZGVzdHJveSIsInRlc3RWYWx1ZVR5cGUiLCJhdXRvIiwiZGltZW5zaW9uVmFsdWVUeXBlcyIsImZpbmREaW1lbnNpb25WYWx1ZVR5cGUiLCJ2YWx1ZVR5cGVzIiwiZmluZFZhbHVlVHlwZSIsInNldE1vdGlvblZhbHVlIiwiaGFzVmFsdWUiLCJnZXRWYWx1ZSIsImFkZFZhbHVlIiwic2V0VGFyZ2V0IiwibWFrZVRhcmdldEFuaW1hdGFibGUiLCJzZXRWYXJpYW50cyIsInZhcmlhbnRMYWJlbHMiLCJyZXZlcnNlZExhYmVscyIsInZhcmlhbnQiLCJnZXRWYXJpYW50IiwidmFyaWFudENoaWxkcmVuIiwic2V0VmFsdWVzIiwibmV3VmFsdWVLZXlzIiwibnVtTmV3VmFsdWVzIiwidGFyZ2V0VmFsdWUiLCJyZWFkVmFsdWUiLCJzZXRCYXNlVGFyZ2V0IiwiZ2V0T3JpZ2luRnJvbVRyYW5zaXRpb24iLCJnZXRPcmlnaW4iLCJ0cmFuc2l0aW9uT3JpZ2luIiwic2hvdWxkQmxvY2tBbmltYXRpb24iLCJwcm90ZWN0ZWRLZXlzIiwibmVlZHNBbmltYXRpbmciLCJzaG91bGRCbG9jayIsImhhc0tleWZyYW1lc0NoYW5nZWQiLCJhbmltYXRlVGFyZ2V0IiwidHJhbnNpdGlvbk92ZXJyaWRlIiwid2lsbENoYW5nZSIsImFuaW1hdGlvbnMyIiwiYW5pbWF0aW9uVHlwZVN0YXRlIiwiZ2V0U3RhdGUiLCJIYW5kb2ZmQXBwZWFyQW5pbWF0aW9ucyIsImFwcGVhcklkIiwiY2FuU2tpcCIsInNob3VsZFJlZHVjZU1vdGlvbiIsImFuaW1hdGVWYXJpYW50IiwiZ2V0QW5pbWF0aW9uIiwiZ2V0Q2hpbGRBbmltYXRpb25zIiwiZm9yd2FyZERlbGF5IiwiYW5pbWF0ZUNoaWxkcmVuIiwiZmlyc3QiLCJsYXN0IiwibWF4U3RhZ2dlckR1cmF0aW9uIiwiZ2VuZXJhdGVTdGFnZ2VyRHVyYXRpb24iLCJzb3J0Iiwic29ydEJ5VHJlZU9yZGVyIiwic29ydE5vZGVQb3NpdGlvbiIsInJlc29sdmVkRGVmaW5pdGlvbiIsInJldmVyc2VQcmlvcml0eU9yZGVyIiwibnVtQW5pbWF0aW9uVHlwZXMiLCJhbmltYXRlTGlzdCIsImNyZWF0ZUFuaW1hdGlvblN0YXRlIiwiY3JlYXRlU3RhdGUiLCJpc0luaXRpYWxSZW5kZXIiLCJidWlsZFJlc29sdmVkVHlwZVZhbHVlcyIsInNldEFuaW1hdGVGdW5jdGlvbiIsIm1ha2VBbmltYXRvciIsImNoYW5nZWRBY3RpdmVUeXBlIiwiZ2V0VmFyaWFudENvbnRleHQiLCJyZW1vdmVkS2V5cyIsImVuY291bnRlcmVkS2V5cyIsInJlbW92ZWRWYXJpYW50SW5kZXgiLCJ0eXBlU3RhdGUiLCJwcm9wSXNWYXJpYW50IiwiYWN0aXZlRGVsdGEiLCJpc0luaGVyaXRlZCIsIm1hbnVhbGx5QW5pbWF0ZU9uTW91bnQiLCJwcmV2UHJvcCIsInZhcmlhbnREaWRDaGFuZ2UiLCJjaGVja1ZhcmlhbnRzRGlkQ2hhbmdlIiwic2hvdWxkQW5pbWF0ZVR5cGUiLCJoYW5kbGVkUmVtb3ZlZFZhbHVlcyIsImRlZmluaXRpb25MaXN0IiwicmVzb2x2ZWRWYWx1ZXMiLCJwcmV2UmVzb2x2ZWRWYWx1ZXMiLCJhbGxLZXlzIiwibWFya1RvQW5pbWF0ZSIsInZhbHVlSGFzQ2hhbmdlZCIsImZhbGxiYWNrQW5pbWF0aW9uIiwiZmFsbGJhY2tUYXJnZXQiLCJnZXRCYXNlVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZSIsIl9hMiIsImNyZWF0ZVR5cGVTdGF0ZSIsIndoaWxlSW5WaWV3Iiwid2hpbGVEcmFnIiwid2hpbGVGb2N1cyIsIkFuaW1hdGlvbkZlYXR1cmUiLCJ1cGRhdGVBbmltYXRpb25Db250cm9sc1N1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsInByZXZBbmltYXRlIiwiRXhpdEFuaW1hdGlvbkZlYXR1cmUiLCJpc1ByZXNlbnQiLCJpc1ByZXNlbnQyIiwib25FeGl0Q29tcGxldGUiLCJwcmV2SXNQcmVzZW50IiwicHJldlByZXNlbmNlQ29udGV4dCIsImV4aXRBbmltYXRpb24iLCJyZWdpc3RlciIsInhEZWx0YSIsInlEZWx0YSIsIlBhblNlc3Npb24iLCJoYW5kbGVycyIsImNvbnRleHRXaW5kb3ciLCJkcmFnU25hcFRvT3JpZ2luIiwibGFzdE1vdmVFdmVudCIsImxhc3RNb3ZlRXZlbnRJbmZvIiwidXBkYXRlUG9pbnQiLCJpbmZvMiIsImdldFBhbkluZm8iLCJoaXN0b3J5IiwiaXNQYW5TdGFydGVkIiwiaXNEaXN0YW5jZVBhc3RUaHJlc2hvbGQiLCJwb2ludDMiLCJ0aW1lc3RhbXAyIiwib25TdGFydCIsIm9uTW92ZSIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiZXZlbnQyIiwidHJhbnNmb3JtUG9pbnQiLCJoYW5kbGVQb2ludGVyVXAiLCJlbmQiLCJvbkVuZCIsIm9uU2Vzc2lvbkVuZCIsInJlc3VtZUFuaW1hdGlvbiIsInBhbkluZm8iLCJpbml0aWFsSW5mbyIsInBvaW50MiIsIm9uU2Vzc2lvblN0YXJ0IiwicmVtb3ZlTGlzdGVuZXJzIiwidXBkYXRlSGFuZGxlcnMiLCJzdWJ0cmFjdFBvaW50IiwibGFzdERldmljZVBvaW50Iiwic3RhcnREZXZpY2VQb2ludCIsImdldFZlbG9jaXR5MiIsInRpbWVzdGFtcGVkUG9pbnQiLCJsYXN0UG9pbnQiLCJheGlzIiwiaXNOZWFyIiwibWF4RGlzdGFuY2UiLCJjYWxjQXhpc0RlbHRhIiwib3JpZ2luUG9pbnQiLCJ0cmFuc2xhdGUiLCJjYWxjQm94RGVsdGEiLCJjYWxjUmVsYXRpdmVBeGlzIiwicmVsYXRpdmUiLCJjYWxjUmVsYXRpdmVCb3giLCJjYWxjUmVsYXRpdmVBeGlzUG9zaXRpb24iLCJjYWxjUmVsYXRpdmVQb3NpdGlvbiIsImFwcGx5Q29uc3RyYWludHMiLCJlbGFzdGljIiwiY2FsY1JlbGF0aXZlQXhpc0NvbnN0cmFpbnRzIiwiY2FsY1JlbGF0aXZlQ29uc3RyYWludHMiLCJsYXlvdXRCb3giLCJjYWxjVmlld3BvcnRBeGlzQ29uc3RyYWludHMiLCJsYXlvdXRBeGlzIiwiY29uc3RyYWludHNBeGlzIiwiY2FsY1ZpZXdwb3J0Q29uc3RyYWludHMiLCJjb25zdHJhaW50c0JveCIsImNhbGNPcmlnaW4yIiwic291cmNlTGVuZ3RoIiwidGFyZ2V0TGVuZ3RoIiwicmViYXNlQXhpc0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHMiLCJyZWxhdGl2ZUNvbnN0cmFpbnRzIiwiZGVmYXVsdEVsYXN0aWMiLCJyZXNvbHZlRHJhZ0VsYXN0aWMiLCJkcmFnRWxhc3RpYyIsInJlc29sdmVBeGlzRWxhc3RpYyIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJyZXNvbHZlUG9pbnRFbGFzdGljIiwibGFiZWwiLCJjcmVhdGVBeGlzRGVsdGEiLCJjcmVhdGVEZWx0YSIsImNyZWF0ZUF4aXMiLCJlYWNoQXhpcyIsImNvbnZlcnRCb3VuZGluZ0JveFRvQm94IiwiY29udmVydEJveFRvQm91bmRpbmdCb3giLCJ0cmFuc2Zvcm1Cb3hQb2ludHMiLCJ0cmFuc2Zvcm1Qb2ludDIiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJpc0lkZW50aXR5U2NhbGUiLCJzY2FsZTIiLCJoYXNTY2FsZSIsImhhc1RyYW5zZm9ybSIsImhhczJEVHJhbnNsYXRlIiwiaXMyRFRyYW5zbGF0ZSIsInNjYWxlUG9pbnQiLCJkaXN0YW5jZUZyb21PcmlnaW4iLCJzY2FsZWQiLCJhcHBseVBvaW50RGVsdGEiLCJib3hTY2FsZSIsImFwcGx5QXhpc0RlbHRhIiwiYXBwbHlCb3hEZWx0YSIsImJveCIsImFwcGx5VHJlZURlbHRhcyIsInRyZWVTY2FsZSIsInRyZWVQYXRoIiwiaXNTaGFyZWRUcmFuc2l0aW9uIiwidHJlZUxlbmd0aCIsInByb2plY3Rpb25EZWx0YSIsImRpc3BsYXkiLCJsYXlvdXRTY3JvbGwiLCJ0cmFuc2Zvcm1Cb3giLCJzbmFwVG9EZWZhdWx0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidHJhbnNsYXRlQXhpcyIsImRpc3RhbmNlMiIsInRyYW5zZm9ybUF4aXMiLCJ0cmFuc2Zvcm1zIiwic2NhbGVLZXkiLCJvcmlnaW5LZXkiLCJheGlzT3JpZ2luIiwieEtleXMiLCJ5S2V5cyIsIm1lYXN1cmVWaWV3cG9ydEJveCIsIm1lYXN1cmVQYWdlQm94Iiwicm9vdFByb2plY3Rpb25Ob2RlMiIsInZpZXdwb3J0Qm94Iiwic2Nyb2xsMiIsImdldENvbnRleHRXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJlbGVtZW50RHJhZ0NvbnRyb2xzIiwiVmlzdWFsRWxlbWVudERyYWdDb250cm9scyIsIm9wZW5HbG9iYWxMb2NrIiwiaXNEcmFnZ2luZyIsImN1cnJlbnREaXJlY3Rpb24iLCJoYXNNdXRhdGVkQ29uc3RyYWludHMiLCJvcmlnaW5FdmVudCIsInNuYXBUb0N1cnNvciIsImRyYWdTbmFwVG9PcmlnaW4yIiwicGF1c2VBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uIiwiZHJhZ1Byb3BhZ2F0aW9uIiwib25EcmFnU3RhcnQiLCJyZXNvbHZlQ29uc3RyYWludHMiLCJpc0FuaW1hdGlvbkJsb2NrZWQiLCJnZXRBeGlzTW90aW9uVmFsdWUiLCJtZWFzdXJlZEF4aXMiLCJkcmFnRGlyZWN0aW9uTG9jayIsIm9uRGlyZWN0aW9uTG9jayIsIm9uRHJhZyIsImdldEN1cnJlbnREaXJlY3Rpb24iLCJ1cGRhdGVBeGlzIiwiZ2V0QW5pbWF0aW9uU3RhdGUiLCJwYW5TZXNzaW9uIiwiZ2V0VHJhbnNmb3JtUGFnZVBvaW50Iiwib25EcmFnRW5kIiwiX3BvaW50Iiwic2hvdWxkRHJhZyIsImF4aXNWYWx1ZSIsImRyYWdDb25zdHJhaW50cyIsIm1lYXN1cmUiLCJwcmV2Q29uc3RyYWludHMiLCJyZXNvbHZlUmVmQ29uc3RyYWludHMiLCJvbk1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJjb25zdHJhaW50c0VsZW1lbnQiLCJtZWFzdXJlZENvbnN0cmFpbnRzIiwidXNlckNvbnN0cmFpbnRzIiwiZHJhZ01vbWVudHVtIiwiZHJhZ1RyYW5zaXRpb24iLCJvbkRyYWdUcmFuc2l0aW9uRW5kIiwibW9tZW50dW1BbmltYXRpb25zIiwiaW5lcnRpYTIiLCJzdGFydEF4aXNWYWx1ZUFuaW1hdGlvbiIsImRyYWdLZXkiLCJleHRlcm5hbE1vdGlvblZhbHVlIiwic2NhbGVQb3NpdGlvbldpdGhpbkNvbnN0cmFpbnRzIiwiYm94UHJvZ3Jlc3MiLCJ1cGRhdGVTY3JvbGwiLCJ1cGRhdGVMYXlvdXQiLCJhZGRMaXN0ZW5lcnMiLCJzdG9wUG9pbnRlckxpc3RlbmVyIiwibWVhc3VyZURyYWdDb25zdHJhaW50cyIsInN0b3BNZWFzdXJlTGF5b3V0TGlzdGVuZXIiLCJzdG9wUmVzaXplTGlzdGVuZXIiLCJzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIiLCJoYXNMYXlvdXRDaGFuZ2VkIiwibW90aW9uVmFsdWUyIiwibG9ja1RocmVzaG9sZCIsIkRyYWdHZXN0dXJlIiwicmVtb3ZlR3JvdXBDb250cm9scyIsImRyYWdDb250cm9scyIsImFzeW5jSGFuZGxlciIsIlBhbkdlc3R1cmUiLCJyZW1vdmVQb2ludGVyRG93bkxpc3RlbmVyIiwib25Qb2ludGVyRG93biIsInBvaW50ZXJEb3duRXZlbnQiLCJzZXNzaW9uIiwiY3JlYXRlUGFuSGFuZGxlcnMiLCJvblBhblNlc3Npb25TdGFydCIsIm9uUGFuU3RhcnQiLCJvblBhbiIsIm9uUGFuRW5kIiwiaW1wb3J0X3JlYWN0MTciLCJpZDQiLCJ1c2VJZCIsInNhZmVUb1JlbW92ZSIsImdsb2JhbFByb2plY3Rpb25TdGF0ZSIsImhhc0FuaW1hdGVkU2luY2VSZXNpemUiLCJoYXNFdmVyVXBkYXRlZCIsInBpeGVsc1RvUGVyY2VudCIsInBpeGVscyIsImNvcnJlY3RCb3JkZXJSYWRpdXMiLCJjb3JyZWN0IiwiY29ycmVjdEJveFNoYWRvdyIsIm9yaWdpbmFsIiwic2hhZG93IiwieFNjYWxlIiwieVNjYWxlIiwiYXZlcmFnZVNjYWxlIiwiaW1wb3J0X3JlYWN0MTgiLCJNZWFzdXJlTGF5b3V0V2l0aENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImxheW91dEdyb3VwIiwic3dpdGNoTGF5b3V0R3JvdXAiLCJkZWZhdWx0U2NhbGVDb3JyZWN0b3JzIiwiZ3JvdXAiLCJkaWRVcGRhdGUiLCJzZXRPcHRpb25zIiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJsYXlvdXREZXBlbmRlbmN5Iiwid2lsbFVwZGF0ZSIsInByb21vdGUiLCJyZWxlZ2F0ZSIsInN0YWNrIiwiZ2V0U3RhY2siLCJtZW1iZXJzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicXVldWVNaWNyb3Rhc2siLCJjdXJyZW50QW5pbWF0aW9uIiwiaXNMZWFkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJwcm9tb3RlQ29udGV4dCIsInNjaGVkdWxlQ2hlY2tBZnRlclVubW91bnQiLCJkZXJlZ2lzdGVyIiwiTWVhc3VyZUxheW91dCIsImFwcGx5VG8iLCJib3hTaGFkb3ciLCJib3JkZXJzIiwibnVtQm9yZGVycyIsImFzTnVtYmVyIiwiaXNQeCIsIm1peFZhbHVlcyIsImZvbGxvdyIsImxlYWQiLCJzaG91bGRDcm9zc2ZhZGVPcGFjaXR5IiwiaXNPbmx5TWVtYmVyIiwiZWFzZUNyb3NzZmFkZUluIiwib3BhY2l0eUV4aXQiLCJlYXNlQ3Jvc3NmYWRlT3V0IiwiYm9yZGVyTGFiZWwiLCJmb2xsb3dSYWRpdXMiLCJnZXRSYWRpdXMiLCJsZWFkUmFkaXVzIiwiY2FuTWl4IiwicmFkaXVzTmFtZSIsImNvbXByZXNzIiwiY29weUF4aXNJbnRvIiwib3JpZ2luQXhpcyIsImNvcHlCb3hJbnRvIiwib3JpZ2luQm94IiwicmVtb3ZlUG9pbnREZWx0YSIsInJlbW92ZUF4aXNEZWx0YSIsInNvdXJjZUF4aXMiLCJyZWxhdGl2ZVByb2dyZXNzIiwicmVtb3ZlQXhpc1RyYW5zZm9ybXMiLCJ4S2V5czIiLCJ5S2V5czIiLCJyZW1vdmVCb3hUcmFuc2Zvcm1zIiwic291cmNlQm94IiwiaXNBeGlzRGVsdGFaZXJvIiwiaXNEZWx0YVplcm8iLCJib3hFcXVhbHMiLCJib3hFcXVhbHNSb3VuZGVkIiwiYXNwZWN0UmF0aW8iLCJOb2RlU3RhY2siLCJzY2hlZHVsZVJlbmRlciIsInByZXZMZWFkIiwiaW5kZXhPZk5vZGUiLCJmaW5kSW5kZXgiLCJtZW1iZXIiLCJwcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJzaG93IiwicmVzdW1lRnJvbSIsInByZXNlcnZlT3BhY2l0eSIsInNuYXBzaG90IiwiYW5pbWF0aW9uVmFsdWVzIiwiaXNVcGRhdGluZyIsImlzTGF5b3V0RGlydHkiLCJjcm9zc2ZhZGUiLCJoaWRlIiwiZXhpdEFuaW1hdGlvbkNvbXBsZXRlIiwicmVzdW1pbmdGcm9tIiwicmVtb3ZlTGVhZFNuYXBzaG90IiwiYnVpbGRQcm9qZWN0aW9uVHJhbnNmb3JtIiwibGF0ZXN0VHJhbnNmb3JtIiwieFRyYW5zbGF0ZSIsInlUcmFuc2xhdGUiLCJlbGVtZW50U2NhbGVYIiwiZWxlbWVudFNjYWxlWSIsImNvbXBhcmVCeURlcHRoIiwiZGVwdGgiLCJpc0RpcnR5IiwidGltZW91dCIsImNoZWNrRWxhcHNlZCIsInJlY29yZCIsImRhdGEiLCJNb3Rpb25EZWJ1ZyIsImlzU1ZHRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJhbmltYXRlU2luZ2xlVmFsdWUiLCJtb3Rpb25WYWx1ZSQxIiwidHJhbnNmb3JtQXhlcyIsImhpZGRlblZpc2liaWxpdHkiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uVGFyZ2V0IiwiaWQyIiwicHJvamVjdGlvbkZyYW1lRGF0YSIsInRvdGFsTm9kZXMiLCJyZXNvbHZlZFRhcmdldERlbHRhcyIsInJlY2FsY3VsYXRlZFByb2plY3Rpb24iLCJjcmVhdGVQcm9qZWN0aW9uTm9kZSIsImF0dGFjaFJlc2l6ZUxpc3RlbmVyIiwiZGVmYXVsdFBhcmVudCIsIm1lYXN1cmVTY3JvbGwiLCJjaGVja0lzU2Nyb2xsUm9vdCIsInJlc2V0VHJhbnNmb3JtIiwiUHJvamVjdGlvbk5vZGUiLCJhbmltYXRpb25JZCIsImlzVHJlZUFuaW1hdGluZyIsImlzUHJvamVjdGlvbkRpcnR5IiwiaXNTaGFyZWRQcm9qZWN0aW9uRGlydHkiLCJpc1RyYW5zZm9ybURpcnR5IiwidXBkYXRlTWFudWFsbHlCbG9ja2VkIiwidXBkYXRlQmxvY2tlZEJ5UmVzaXplIiwiaXNTVkciLCJuZWVkc1Jlc2V0Iiwic2hvdWxkUmVzZXRUcmFuc2Zvcm0iLCJldmVudEhhbmRsZXJzIiwiaGFzVHJlZUFuaW1hdGVkIiwidXBkYXRlU2NoZWR1bGVkIiwicHJvamVjdGlvblVwZGF0ZVNjaGVkdWxlZCIsImNoZWNrVXBkYXRlRmFpbGVkIiwiY2xlYXJBbGxTbmFwc2hvdHMiLCJ1cGRhdGVQcm9qZWN0aW9uIiwibm9kZXMiLCJwcm9wYWdhdGVEaXJ0eU5vZGVzIiwicmVzb2x2ZVRhcmdldERlbHRhIiwiY2FsY1Byb2plY3Rpb24iLCJjbGVhbkRpcnR5Tm9kZXMiLCJoYXNQcm9qZWN0ZWQiLCJpc1Zpc2libGUiLCJhbmltYXRpb25Qcm9ncmVzcyIsInNoYXJlZE5vZGVzIiwicGF0aCIsIm5vdGlmeUxpc3RlbmVycyIsImFyZ3MiLCJzdWJzY3JpcHRpb25NYW5hZ2VyIiwiaGFzTGlzdGVuZXJzIiwiY2FuY2VsRGVsYXkiLCJyZXNpemVVbmJsb2NrVXBkYXRlIiwiZmluaXNoQW5pbWF0aW9uIiwicmVnaXN0ZXJTaGFyZWROb2RlIiwiaGFzUmVsYXRpdmVUYXJnZXRDaGFuZ2VkIiwibmV3TGF5b3V0IiwiaXNUcmVlQW5pbWF0aW9uQmxvY2tlZCIsInJlbGF0aXZlVGFyZ2V0IiwibGF5b3V0VHJhbnNpdGlvbiIsImRlZmF1bHRMYXlvdXRUcmFuc2l0aW9uIiwib25MYXlvdXRBbmltYXRpb25TdGFydCIsIm9uTGF5b3V0QW5pbWF0aW9uQ29tcGxldGUiLCJ0YXJnZXRDaGFuZ2VkIiwidGFyZ2V0TGF5b3V0IiwiaGFzT25seVJlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsImxheW91dFJvb3QiLCJzZXRBbmltYXRpb25PcmlnaW4iLCJhbmltYXRpb25PcHRpb25zIiwiYmxvY2tVcGRhdGUiLCJ1bmJsb2NrVXBkYXRlIiwiaXNVcGRhdGVCbG9ja2VkIiwic3RhcnRVcGRhdGUiLCJyZXNldFJvdGF0aW9uIiwiZ2V0VHJhbnNmb3JtVGVtcGxhdGUiLCJzaG91bGROb3RpZnlMaXN0ZW5lcnMiLCJwcmV2VHJhbnNmb3JtVGVtcGxhdGVWYWx1ZSIsInVwZGF0ZVNuYXBzaG90IiwidXBkYXRlV2FzQmxvY2tlZCIsImNsZWFyTWVhc3VyZW1lbnRzIiwiY2xlYXJJc0xheW91dERpcnR5IiwicmVzZXRUcmFuc2Zvcm1TdHlsZSIsIm5vdGlmeUxheW91dFVwZGF0ZSIsInByZVJlbmRlciIsImNsZWFyU25hcHNob3QiLCJyZW1vdmVMZWFkU25hcHNob3RzIiwic2NoZWR1bGVVcGRhdGVQcm9qZWN0aW9uIiwiYWx3YXlzTWVhc3VyZUxheW91dCIsInByZXZMYXlvdXQiLCJsYXlvdXRDb3JyZWN0ZWQiLCJwaGFzZSIsIm5lZWRzTWVhc3VyZW1lbnQiLCJpc1Jvb3QiLCJpc1Jlc2V0UmVxdWVzdGVkIiwiaGFzUHJvamVjdGlvbiIsInRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ0cmFuc2Zvcm1UZW1wbGF0ZUhhc0NoYW5nZWQiLCJyZW1vdmVUcmFuc2Zvcm0iLCJwYWdlQm94IiwicmVtb3ZlRWxlbWVudFNjcm9sbCIsInJvdW5kQm94IiwibWVhc3VyZWRCb3giLCJib3hXaXRob3V0U2Nyb2xsIiwicm9vdFNjcm9sbCIsImFwcGx5VHJhbnNmb3JtIiwidHJhbnNmb3JtT25seSIsIndpdGhUcmFuc2Zvcm1zIiwiYm94V2l0aG91dFRyYW5zZm9ybSIsIm5vZGVCb3giLCJzZXRUYXJnZXREZWx0YSIsInRhcmdldERlbHRhIiwiZm9yY2VSZWxhdGl2ZVBhcmVudFRvUmVzb2x2ZVRhcmdldCIsInJlbGF0aXZlUGFyZW50IiwicmVzb2x2ZWRSZWxhdGl2ZVRhcmdldEF0IiwiZm9yY2VSZWNhbGN1bGF0aW9uIiwiZ2V0TGVhZCIsImlzU2hhcmVkIiwiYXR0ZW1wdFRvUmVzb2x2ZVJlbGF0aXZlVGFyZ2V0IiwiZ2V0Q2xvc2VzdFByb2plY3RpbmdQYXJlbnQiLCJyZWxhdGl2ZVRhcmdldE9yaWdpbiIsInRhcmdldFdpdGhUcmFuc2Zvcm1zIiwiaXNQcm9qZWN0aW5nIiwicGVuZGluZ0FuaW1hdGlvbiIsInByZXZUcmVlU2NhbGVYIiwicHJldlRyZWVTY2FsZVkiLCJwcm9qZWN0aW9uVHJhbnNmb3JtIiwicHJvamVjdGlvbkRlbHRhV2l0aFRyYW5zZm9ybSIsInByZXZQcm9qZWN0aW9uVHJhbnNmb3JtIiwibm90aWZ5QWxsMiIsInNuYXBzaG90TGF0ZXN0VmFsdWVzIiwibWl4ZWRWYWx1ZXMiLCJyZWxhdGl2ZUxheW91dCIsInNuYXBzaG90U291cmNlIiwibGF5b3V0U291cmNlIiwiaXNTaGFyZWRMYXlvdXRBbmltYXRpb24iLCJoYXNPcGFjaXR5Q3Jvc3NmYWRlIiwicHJldlJlbGF0aXZlVGFyZ2V0IiwibWl4VGFyZ2V0RGVsdGEiLCJtaXhBeGlzRGVsdGEiLCJtaXhCb3giLCJjb21wbGV0ZUFuaW1hdGlvbiIsImFwcGx5VHJhbnNmb3Jtc1RvVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZVBvc2l0aW9uT25seSIsImFuaW1hdGlvblR5cGUiLCJ4TGVuZ3RoIiwieUxlbmd0aCIsImluaXRpYWxQcm9tb3Rpb25Db25maWciLCJzaG91bGRQcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJnZXRQcmV2TGVhZCIsImhhc1JvdGF0ZSIsInJlc2V0VmFsdWVzIiwic2V0U3RhdGljVmFsdWUiLCJzdHlsZXMiLCJwb2ludGVyRXZlbnRzIiwiZW1wdHlTdHlsZXMiLCJ2YWx1ZXNUb1JlbmRlciIsImNvcnJlY3RlZCIsIm51bSIsInJlc2V0VHJlZSIsIm1lYXN1cmVkTGF5b3V0IiwiYXhpc1NuYXBzaG90IiwibGF5b3V0RGVsdGEiLCJ2aXN1YWxEZWx0YSIsInBhcmVudFNuYXBzaG90IiwicGFyZW50TGF5b3V0IiwicmVsYXRpdmVTbmFwc2hvdCIsIm9uQmVmb3JlTGF5b3V0TWVhc3VyZSIsIm1peEF4aXMiLCJ1c2VyQWdlbnRDb250YWlucyIsInN0cmluZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInJvdW5kUG9pbnQiLCJyb3VuZEF4aXMiLCJEb2N1bWVudFByb2plY3Rpb25Ob2RlIiwibm90aWZ5MiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbExlZnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwicm9vdFByb2plY3Rpb25Ob2RlIiwiSFRNTFByb2plY3Rpb25Ob2RlIiwiZG9jdW1lbnROb2RlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwic3BsaXRDU1NWYXJpYWJsZVJlZ2V4IiwicGFyc2VDU1NWYXJpYWJsZSIsImV4ZWMiLCJmYWxsYmFjayIsIm1heERlcHRoIiwiZ2V0VmFyaWFibGVWYWx1ZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltbWVkIiwicmVzb2x2ZUNTU1ZhcmlhYmxlcyIsInBvc2l0aW9uYWxLZXlzIiwiaXNQb3NpdGlvbmFsS2V5IiwiaGFzUG9zaXRpb25hbEtleSIsImlzTnVtT3JQeFR5cGUiLCJnZXRQb3NGcm9tTWF0cml4IiwibWF0cml4IiwicG9zIiwiZ2V0VHJhbnNsYXRlRnJvbU1hdHJpeCIsInBvczIiLCJwb3MzIiwiX2Jib3giLCJtYXRyaXgzZCIsInRyYW5zZm9ybUtleXMiLCJub25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtS2V5cyIsInJlbW92ZU5vblRyYW5zbGF0aW9uYWxUcmFuc2Zvcm0iLCJyZW1vdmVkVHJhbnNmb3JtcyIsInBvc2l0aW9uYWxWYWx1ZXMiLCJjb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMiLCJjaGFuZ2VkS2V5cyIsIm9yaWdpbkJib3giLCJlbGVtZW50Q29tcHV0ZWRTdHlsZSIsInRhcmdldEJib3giLCJjaGVja0FuZENvbnZlcnRDaGFuZ2VkVmFsdWVUeXBlcyIsInRhcmdldFBvc2l0aW9uYWxLZXlzIiwicmVtb3ZlZFRyYW5zZm9ybVZhbHVlcyIsImhhc0F0dGVtcHRlZFRvUmVtb3ZlVHJhbnNmb3JtVmFsdWVzIiwiY2hhbmdlZFZhbHVlVHlwZUtleXMiLCJmcm9tVHlwZSIsInRvVHlwZSIsIm51bUtleWZyYW1lcyIsInNjcm9sbFkiLCJwYWdlWU9mZnNldCIsImNvbnZlcnRlZFRhcmdldCIsInNjcm9sbFRvIiwidW5pdENvbnZlcnNpb24iLCJwYXJzZURvbVZhcmlhbnQiLCJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsImhhc1JlZHVjZWRNb3Rpb25MaXN0ZW5lciIsImluaXRQcmVmZXJzUmVkdWNlZE1vdGlvbiIsIm1hdGNoTWVkaWEiLCJtb3Rpb25NZWRpYVF1ZXJ5Iiwic2V0UmVkdWNlZE1vdGlvblByZWZlcmVuY2VzIiwiYWRkTGlzdGVuZXIiLCJ1cGRhdGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMiLCJuZXh0VmFsdWUiLCJwcmV2VmFsdWUiLCJleGlzdGluZ1ZhbHVlIiwibGF0ZXN0VmFsdWUiLCJnZXRTdGF0aWNWYWx1ZSIsInJlbW92ZVZhbHVlIiwiZmVhdHVyZU5hbWVzIiwibnVtRmVhdHVyZXMiLCJwcm9wRXZlbnRIYW5kbGVycyIsIm51bVZhcmlhbnRQcm9wcyIsInZhbHVlU3Vic2NyaXB0aW9ucyIsInByZXZNb3Rpb25WYWx1ZXMiLCJwcm9wRXZlbnRTdWJzY3JpcHRpb25zIiwibm90aWZ5VXBkYXRlIiwidHJpZ2dlckJ1aWxkIiwicmVuZGVySW5zdGFuY2UiLCJiYXNlVGFyZ2V0IiwiaW5pdGlhbFZhbHVlcyIsImluaXRpYWxNb3Rpb25WYWx1ZXMiLCJfcHJvcHMiLCJfcHJldlByb3BzIiwicmVtb3ZlRnJvbVZhcmlhbnRUcmVlIiwiYWRkVmFyaWFudENoaWxkIiwiYmluZFRvTW90aW9uVmFsdWUiLCJ2YWx1ZUlzVHJhbnNmb3JtIiwicmVtb3ZlT25DaGFuZ2UiLCJyZW1vdmVPblJlbmRlclJlcXVlc3QiLCJvdGhlciIsInNvcnRJbnN0YW5jZU5vZGVQb3NpdGlvbiIsInJlbmRlcmVkUHJvcHMiLCJQcm9qZWN0aW9uTm9kZUNvbnN0cnVjdG9yIiwic3RyaWN0TWVzc2FnZSIsImlnbm9yZVN0cmljdCIsIkZlYXR1cmVDb25zdHJ1Y3RvciIsIk1lYXN1cmVMYXlvdXRDb21wb25lbnQiLCJmZWF0dXJlIiwiYnVpbGQiLCJtZWFzdXJlSW5zdGFuY2VWaWV3cG9ydEJveCIsImNhbk11dGF0ZSIsIm1ha2VUYXJnZXRBbmltYXRhYmxlRnJvbUluc3RhbmNlIiwibGlzdGVuZXIiLCJoYW5kbGVDaGlsZE1vdGlvblZhbHVlIiwiZ2V0Q2xvc2VzdFZhcmlhbnROb2RlIiwic3RhcnRBdFBhcmVudCIsImNvbnRleHQyIiwiY2xvc2VzdFZhcmlhbnROb2RlIiwicmVtb3ZlVmFsdWVGcm9tUmVuZGVyU3RhdGUiLCJnZXRCYXNlVGFyZ2V0RnJvbVByb3BzIiwicmVhZFZhbHVlRnJvbUluc3RhbmNlIiwidmFsdWVGcm9tSW5pdGlhbCIsIkRPTVZpc3VhbEVsZW1lbnQiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImdldENvbXB1dGVkU3R5bGUyIiwiSFRNTFZpc3VhbEVsZW1lbnQiLCJkZWZhdWx0VHlwZSIsImNvbXB1dGVkU3R5bGUiLCJjaGlsZFN1YnNjcmlwdGlvbiIsInRleHRDb250ZW50IiwiU1ZHVmlzdWFsRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImNyZWF0ZURvbVZpc3VhbEVsZW1lbnQiLCJpbXBvcnRfcmVhY3QxOSIsInVzZUlzTW91bnRlZCIsImltcG9ydF9yZWFjdDIwIiwiZm9yY2VkUmVuZGVyQ291bnQiLCJzZXRGb3JjZWRSZW5kZXJDb3VudCIsInVzZVN0YXRlIiwiZm9yY2VSZW5kZXIiLCJkZWZlcnJlZEZvcmNlUmVuZGVyIiwiUmVhY3QyIiwiaW1wb3J0X3JlYWN0MjEiLCJQb3BDaGlsZE1lYXN1cmUiLCJjaGlsZFJlZiIsInNpemVSZWYiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJQb3BDaGlsZCIsImRhdGFzZXQiLCJtb3Rpb25Qb3BJZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInJlbW92ZUNoaWxkIiwiY2xvbmVFbGVtZW50IiwiUmVhY3QzIiwiaW1wb3J0X3JlYWN0MjIiLCJQcmVzZW5jZUNoaWxkIiwicHJlc2VuY2VBZmZlY3RzTGF5b3V0IiwibW9kZSIsInByZXNlbmNlQ2hpbGRyZW4iLCJuZXdDaGlsZHJlbk1hcCIsImNoaWxkSWQiLCJpc0NvbXBsZXRlIiwiXyIsImltcG9ydF9yZWFjdDIzIiwiUmVhY3Q0IiwiaW1wb3J0X3JlYWN0MjQiLCJnZXRDaGlsZEtleSIsInVwZGF0ZUNoaWxkTG9va3VwIiwiYWxsQ2hpbGRyZW4iLCJvbmx5RWxlbWVudHMiLCJmaWx0ZXJlZCIsIkNoaWxkcmVuIiwiaXNWYWxpZEVsZW1lbnQiLCJleGl0QmVmb3JlRW50ZXIiLCJmaWx0ZXJlZENoaWxkcmVuIiwiY2hpbGRyZW5Ub1JlbmRlciIsImV4aXRpbmdDaGlsZHJlbiIsInByZXNlbnRDaGlsZHJlbiIsIkZyYWdtZW50IiwicHJlc2VudEtleXMiLCJ0YXJnZXRLZXlzIiwibnVtUHJlc2VudCIsImNvbXBvbmVudCIsImluc2VydGlvbkluZGV4IiwiZXhpdGluZ0NvbXBvbmVudCIsIm9uRXhpdCIsImxlZnRPdmVyS2V5cyIsImNoaWxkS2V5IiwibGVmdE92ZXJLZXkiLCJwcmVzZW50Q2hpbGQiLCJwcmVzZW50Q2hpbGRLZXkiLCJSZWFjdDUiLCJpbXBvcnRfcmVhY3QyNSIsIlJlYWN0NiIsImltcG9ydF9yZWFjdDI2Iiwic2V0SXNMb2FkZWQiLCJpc0xhenlCdW5kbGUiLCJsb2FkZWRSZW5kZXJlciIsImxvYWRlZEZlYXR1cmVzIiwiaW1wb3J0X3JlYWN0MjciLCJub2RlR3JvdXAiLCJkaXJ0eUFsbCIsImRpcnR5IiwiUmVhY3Q3IiwiaW1wb3J0X3JlYWN0MjgiLCJzaG91bGRJbmhlcml0R3JvdXAiLCJzaG91bGRJbmhlcml0SWQiLCJsYXlvdXRHcm91cENvbnRleHQiLCJkZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0IiwidXBzdHJlYW1JZCIsIm1lbW9pemVkQ29udGV4dCIsImltcG9ydF9yZWFjdDI5IiwiUmVvcmRlckNvbnRleHQiLCJjaGVja1Jlb3JkZXIiLCJpdGVtMiIsIm5leHRPZmZzZXQiLCJuZXh0SXRlbSIsIm5leHRMYXlvdXQiLCJuZXh0SXRlbUNlbnRlciIsIlJlYWN0OCIsImltcG9ydF9yZWFjdDMwIiwiUmVvcmRlckdyb3VwIiwiYXMiLCJvblJlb3JkZXIiLCJpc1Jlb3JkZXJpbmciLCJyZWdpc3Rlckl0ZW0iLCJpZHgiLCJjb21wYXJlTWluIiwidXBkYXRlT3JkZXIiLCJuZXdPcmRlciIsIkdyb3VwIiwiaW1wb3J0X3JlYWN0MzEiLCJzZXRMYXRlc3QiLCJpc0N1c3RvbVZhbHVlVHlwZSIsImdldE1peGVyMiIsInVzZUltbWVkaWF0ZSIsImFyZ09mZnNldCIsImlucHV0VmFsdWUiLCJpbnB1dFJhbmdlIiwib3V0cHV0UmFuZ2UiLCJ1c2VDb21iaW5lTW90aW9uVmFsdWVzIiwiY29tYmluZVZhbHVlcyIsInVwZGF0ZVZhbHVlIiwic2NoZWR1bGVVcGRhdGUiLCJ1c2VDb21wdXRlZCIsImNvbXB1dGUiLCJpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lciIsInVzZUxpc3RUcmFuc2Zvcm0iLCJSZWFjdDkiLCJpbXBvcnRfcmVhY3QzMiIsInVzZURlZmF1bHRNb3Rpb25WYWx1ZSIsIlJlb3JkZXJJdGVtIiwibGF0ZXN0WCIsImxhdGVzdFkiLCJnZXN0dXJlUG9pbnQiLCJvbkxheW91dE1lYXN1cmUiLCJtZWFzdXJlZCIsIkl0ZW0iLCJmcmFnbWVudHMiLCJudW1GcmFnbWVudHMiLCJidWlsZFZhbHVlIiwiaW1wb3J0X3JlYWN0MzMiLCJhY3RpdmVTcHJpbmdBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uMiIsImltcG9ydF9yZWFjdDM0IiwibmV3VmVsb2NpdHkiLCJyZXNvbHZlRWxlbWVudHMiLCJlbGVtZW50cyIsInNjb3BlIiwic2VsZWN0b3JDYWNoZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNpemVIYW5kbGVycyIsIm9ic2VydmVyIiwiZ2V0RWxlbWVudFNpemUiLCJib3JkZXJCb3hTaXplIiwiaW5saW5lU2l6ZSIsImJsb2NrU2l6ZSIsIm5vdGlmeVRhcmdldCIsImNvbnRlbnRSZWN0IiwiY29udGVudFNpemUiLCJub3RpZnlBbGwiLCJjcmVhdGVSZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwicmVzaXplRWxlbWVudCIsImVsZW1lbnRIYW5kbGVycyIsIndpbmRvd0NhbGxiYWNrcyIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJjcmVhdGVXaW5kb3dSZXNpemVIYW5kbGVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVzaXplV2luZG93IiwicmVzaXplIiwibWF4RWxhcHNlZDIiLCJjcmVhdGVBeGlzSW5mbyIsInNjcm9sbExlbmd0aCIsInRhcmdldE9mZnNldCIsImNvbnRhaW5lckxlbmd0aCIsImNyZWF0ZVNjcm9sbEluZm8iLCJ1cGRhdGVBeGlzSW5mbyIsImF4aXNOYW1lIiwicHJldlRpbWUiLCJ1cGRhdGVTY3JvbGxJbmZvIiwiY2FsY0luc2V0IiwiY29udGFpbmVyIiwiaW5zZXQiLCJvZmZzZXRQYXJlbnQiLCJzdmdCb3VuZGluZ0JveCIsInBhcmVudEJvdW5kaW5nQm94IiwiU1ZHR3JhcGhpY3NFbGVtZW50Iiwic3ZnIiwicGFyZW50Tm9kZSIsIlNjcm9sbE9mZnNldCIsIkVudGVyIiwiRXhpdCIsIkFueSIsIkFsbCIsIm5hbWVkRWRnZXMiLCJjZW50ZXIiLCJyZXNvbHZlRWRnZSIsImVkZ2UiLCJhc051bWJlcjIiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImRlZmF1bHRPZmZzZXQyIiwicmVzb2x2ZU9mZnNldCIsInRhcmdldEluc2V0Iiwib2Zmc2V0RGVmaW5pdGlvbiIsInRhcmdldFBvaW50IiwiY29udGFpbmVyUG9pbnQiLCJnZXRUYXJnZXRTaXplIiwicmVzb2x2ZU9mZnNldHMiLCJsZW5ndGhMYWJlbCIsInRhcmdldFNpemUiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsImNvbnRhaW5lclNpemUiLCJoYXNDaGFuZ2VkIiwibnVtT2Zmc2V0cyIsImludGVycG9sYXRvck9mZnNldHMiLCJjcmVhdGVPblNjcm9sbEhhbmRsZXIiLCJvblNjcm9sbCIsInNjcm9sbExpc3RlbmVycyIsInJlc2l6ZUxpc3RlbmVycyIsIm9uU2Nyb2xsSGFuZGxlcnMiLCJnZXRFdmVudFRhcmdldCIsImNvbnRhaW5lckhhbmRsZXJzIiwiY29udGFpbmVySGFuZGxlciIsIm1lYXN1cmVBbGwiLCJ1cGRhdGVBbGwiLCJsaXN0ZW5lcjIiLCJjdXJyZW50SGFuZGxlcnMiLCJzY3JvbGxMaXN0ZW5lciIsImltcG9ydF9yZWFjdDM1IiwicmVmV2FybmluZyIsImNyZWF0ZVNjcm9sbE1vdGlvblZhbHVlcyIsInNjcm9sbFgiLCJzY3JvbGxYUHJvZ3Jlc3MiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJsYXlvdXRFZmZlY3QiLCJ1c2VMaWZlY3ljbGVFZmZlY3QiLCJpbXBvcnRfcmVhY3QzNiIsImluaXRpYWxUaW1lc3RhbXAiLCJwcm92aWRlVGltZVNpbmNlU3RhcnQiLCJXaWxsQ2hhbmdlTW90aW9uVmFsdWUiLCJtZW1iZXJOYW1lIiwiaW1wb3J0X3JlYWN0MzciLCJpbXBvcnRfcmVhY3QzOCIsInJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlIiwiaGFzTW91bnRlZCIsInN1YnNjcmliZXJzIiwib2JzZXJ2ZVRpbWVsaW5lIiwicHJldlByb2dyZXNzIiwib25GcmFtZSIsInBlcmNlbnRhZ2UiLCJzdXBwb3J0c1Njcm9sbFRpbWVsaW5lIiwiU2Nyb2xsVGltZWxpbmUiLCJHcm91cFBsYXliYWNrQ29udHJvbHMiLCJvblJlc29sdmUiLCJvblJlamVjdCIsImNhdGNoIiwiZ2V0QWxsIiwicHJvcE5hbWUiLCJzZXRBbGwiLCJuZXdWYWx1ZSIsImNhbmNlbEFsbCIsImNhbmNlbFRpbWVsaW5lIiwicnVuQWxsIiwibWV0aG9kTmFtZSIsImlzRE9NS2V5ZnJhbWVzIiwiY3JlYXRlR2VuZXJhdG9yRWFzaW5nIiwiY2FsY05leHRUaW1lIiwibGFiZWxzIiwicmFuZ2VTaXplIiwiZ2V0RWFzaW5nRm9yU2VnbWVudCIsImVyYXNlS2V5ZnJhbWVzIiwic2VxdWVuY2UiLCJlbmRUaW1lIiwia2V5ZnJhbWUiLCJhdCIsImFkZEtleWZyYW1lcyIsImNvbXBhcmVCeVRpbWUiLCJkZWZhdWx0U2VnbWVudEVhc2luZyIsImNyZWF0ZUFuaW1hdGlvbnNGcm9tU2VxdWVuY2UiLCJkZWZhdWx0VHJhbnNpdGlvbiIsInNlcXVlbmNlVHJhbnNpdGlvbiIsImRlZmF1bHREdXJhdGlvbiIsImFuaW1hdGlvbkRlZmluaXRpb25zIiwic2VxdWVuY2VzIiwiZWxlbWVudENhY2hlIiwidGltZUxhYmVscyIsInNlZ21lbnQiLCJzdWJqZWN0IiwibWF4RHVyYXRpb24zIiwicmVzb2x2ZVZhbHVlU2VxdWVuY2UiLCJ2YWx1ZUtleWZyYW1lcyIsInZhbHVlU2VxdWVuY2UiLCJlbGVtZW50SW5kZXgiLCJudW1FbGVtZW50cyIsInZhbHVlS2V5ZnJhbWVzQXNMaXN0Iiwia2V5ZnJhbWVzQXNMaXN0IiwicmVtYWluaW5nVHJhbnNpdGlvbiIsImNhbGN1bGF0ZWREZWxheSIsImFic29sdXRlRGVsdGEiLCJpc051bWJlcktleWZyYW1lc0FycmF5Iiwic3ByaW5nVHJhbnNpdGlvbiIsInNwcmluZ0Vhc2luZyIsInRhcmdldFRpbWUiLCJyZW1haW5kZXIiLCJ1bnNoaWZ0Iiwic3ViamVjdFNlcXVlbmNlIiwiZ2V0U3ViamVjdFNlcXVlbmNlIiwiZ2V0VmFsdWVTZXF1ZW5jZSIsImdldFZhbHVlVHJhbnNpdGlvbjIiLCJ2YWx1ZVNlcXVlbmNlcyIsInZhbHVlT2Zmc2V0IiwidmFsdWVFYXNpbmciLCJpc051bWJlciIsImFuaW1hdGVFbGVtZW50cyIsImVsZW1lbnRPclNlbGVjdG9yIiwiaXNTZXF1ZW5jZSIsImFuaW1hdGVTZXF1ZW5jZSIsInNjb3BlZEFuaW1hdGUiLCJ2YWx1ZU9yRWxlbWVudE9yU2VxdWVuY2UiLCJpbXBvcnRfcmVhY3QzOSIsIml0ZW1zIiwic2V0SXRlbSIsInJ1bkN5Y2xlIiwidGhyZXNob2xkcyIsImFjdGl2ZUludGVyc2VjdGlvbnMiLCJvbkludGVyc2VjdGlvbkNoYW5nZSIsIm5ld09uRW5kIiwib2JzZXJ2ZXIyIiwiZGlzY29ubmVjdCIsImltcG9ydF9yZWFjdDQwIiwic2V0SW5WaWV3Iiwib25FbnRlciIsImNvbXBvbmVudENvbnRyb2xzIiwibmF0aXZlRXZlbnQiLCJjcmVhdGVEcmFnQ29udHJvbHMiLCJpbXBvcnRfcmVhY3Q0MSIsInN0YXJ0VHJhbnNpdGlvbiIsImltcG9ydF9yZWFjdDQyIiwiZm9yY2VVcGRhdGUiLCJzdGFydEluc3RhbnRMYXlvdXRUcmFuc2l0aW9uIiwidW5sb2NrT25GcmFtZVJlZiIsIlJlYWN0MTAiLCJyZXNldCIsImFwcGVhclN0b3JlSWQiLCJhcHBlYXJBbmltYXRpb25TdG9yZSIsImhhbmRvZmZGcmFtZVRpbWUiLCJoYW5kb2ZmT3B0aW1pemVkQXBwZWFyQW5pbWF0aW9uIiwiZWxlbWVudElkIiwiX3ZhbHVlIiwiX2ZyYW1lIiwib3B0aW1pc2VkVmFsdWVOYW1lIiwic3RvcmVJZCIsIm9wdGltaXNlZEFuaW1hdGlvbiIsImVycm9yIiwic3RhcnRGcmFtZVRpbWUiLCJyZWFkeUFuaW1hdGlvbiIsIm9uUmVhZHkiLCJhcHBlYXJBbmltYXRpb24iLCJyZWFkeSIsImltcG9ydF9yZWFjdDQzIiwiY3JlYXRlT2JqZWN0IiwiU3RhdGVWaXN1YWxFbGVtZW50IiwicmVzdG9yZVRyYW5zZm9ybSIsIl9zdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNldEFuaW1hdGlvblN0YXRlIiwiYW5pbWF0aW9uRGVmaW5pdGlvbiIsImltcG9ydF9yZWFjdDQ0IiwibWF4U2NhbGUiLCJpbnZlcnRTY2FsZSIsImhhc1dhcm5lZCIsInBhcmVudFNjYWxlWCIsInBhcmVudFNjYWxlWSIsIlJlYWN0MTEiLCJpZDMiLCJzY3JvbGxUaW1lbGluZUZhbGxiYWNrIiwidGltZWxpbmVDYWNoZSIsImdldFRpbWVsaW5lIiwiZ2V0T3JpZ2luSW5kZXgiLCJ0b3RhbCIsImxhc3RJbmRleCIsInN0YXJ0RGVs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QTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyx3QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHdCQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxDQUFBLEVBQUFBLENBQUEsS0FBQUEsQ0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLDRCQUFBLEVBQUFBLENBQUEsS0FBQUEsNEJBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFBLEVBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFB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LFFBQUEsQ0FBU2hoQyxjQUFBLENBQWVDLFFBQVE7RUFDM0M7QUFDSjs7O0FDL0JBLFNBQVNpckMsZUFBZXQ1QyxJQUFBLEVBQU11NUMsS0FBQSxFQUFPO0VBQ2pDLElBQUl2NUMsSUFBQSxLQUFTLFNBQVM7SUFDbEIsT0FBTztFQUNYLE9BQ0s7SUFDRCxNQUFNdzVDLFNBQUEsR0FBWUQsS0FBQSxHQUFRO0lBQzFCLE9BQU92NUMsSUFBQSxLQUFTLFNBQVN3NUMsU0FBQSxHQUFZQSxTQUFBLEdBQVk7RUFDckQ7QUFDSjtBQUNBLFNBQVNsbEUsUUFBUTRuQixRQUFBLEdBQVcsS0FBSztFQUFFdTlDLFVBQUEsR0FBYTtFQUFHejVDLElBQUEsR0FBTztFQUFHckUsSUFBQSxFQUFBVTtBQUFLLElBQUksQ0FBQyxHQUFHO0VBQ3RFLE9BQU8sQ0FBQ2hiLENBQUEsRUFBR2s0RCxLQUFBLEtBQVU7SUFDakIsTUFBTXBuQyxTQUFBLEdBQVksT0FBT25TLElBQUEsS0FBUyxXQUFXQSxJQUFBLEdBQU9zNUMsY0FBQSxDQUFldDVDLElBQUEsRUFBTXU1QyxLQUFLO0lBQzlFLE1BQU05MkIsU0FBQSxHQUFXeGdDLElBQUEsQ0FBS3diLEdBQUEsQ0FBSTBVLFNBQUEsR0FBWTl3QixDQUFDO0lBQ3ZDLElBQUk0YSxNQUFBLEdBQVFDLFFBQUEsR0FBV3VtQixTQUFBO0lBQ3ZCLElBQUlwbUIsS0FBQSxFQUFNO01BQ04sTUFBTXE5QyxRQUFBLEdBQVdILEtBQUEsR0FBUXI5QyxRQUFBO01BQ3pCLE1BQU00SCxjQUFBLEdBQWlCM0YsMEJBQUEsQ0FBMkI5QixLQUFJO01BQ3RESixNQUFBLEdBQVE2SCxjQUFBLENBQWU3SCxNQUFBLEdBQVF5OUMsUUFBUSxJQUFJQSxRQUFBO0lBQy9DO0lBQ0EsT0FBT0QsVUFBQSxHQUFheDlDLE1BQUE7RUFDeEI7QUFDSjs7O0FDZkEsSUFBTXhuQixJQUFBLEdBQU81QixLQUFBO0FBTWIsSUFBTXZCLFVBQUEsR0FBYXlmLFVBQUEsQ0FBV1MsTUFBQSxDQUFPLENBQUNDLEdBQUEsRUFBSzFVLEdBQUEsS0FBUTtFQUMvQzBVLEdBQUEsQ0FBSTFVLEdBQUEsSUFBUXVTLFFBQUEsSUFBWWplLFdBQUEsQ0FBWWllLFFBQU87RUFDM0MsT0FBT21DLEdBQUE7QUFDWCxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==