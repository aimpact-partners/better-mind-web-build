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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
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
    }
    /* Z+1 */);
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
  },
  /**
   * Only pass a new ref callback to React if we've received a visual element
   * factory. Otherwise we'll be mounting/remounting every time externalRef
   * or other dependencies change.
   */
  [visualElement]);
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
        MeasureLayout2 = context.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        configAndProps, isStrict, preloadedFeatures2, initialLayoutGroupConfig);
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
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
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
  if (
  /**
   * If it's not a string, it's a custom React component. Currently we only support
   * HTML custom React components.
   */
  typeof Component2 !== "string" ||
  /**
  * If it contains a dash, the element is a custom HTML webcomponent.
  */
  Component2.includes("-")) {
    return false;
  } else if (
  /**
   * If it's in our list of lowercase SVG tags, it's an SVG component
   */
  lowercaseSVGElements.indexOf(Component2) > -1 ||
  /**
  * If it contains a capital letter, it's an SVG component
  */
  /[A-Z]/.test(Component2)) {
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
  // Border props
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
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
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
  // Transform props
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
  // Misc
  zIndex: int,
  // SVG
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
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) ||
    // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
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
  // This is object creation, which we try to avoid per-frame.
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
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive) toKeepAlive.add(callback);
      if (queue.add(callback) && addToCurrentFrame && isProcessing) {
        numToRun = thisFrame.order.length;
      }
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: callback => {
      nextFrame.remove(callback);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
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
  const absoluteTimes = convertOffsetToTimes(
  // Only use the provided offsets if they're the correct length
  // TODO Maybe we should warn here if there's a length mismatch
  times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
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
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
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
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
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
  if (typeof value === "string" && (
  // It's animatable if we have a string
  complex.test(value) || value === "0") &&
  // And it contains numbers and/or colors
  !value.startsWith("url(")) {
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
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
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
    if (
    /**
     * If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    !transition.isHandoff && value.owner && value.owner.current instanceof HTMLElement &&
    /**
    * If we're outputting values to onUpdate then we can't use WAAPI as there's
    * no way to read the value from WAAPI every frame.
    */
    !value.owner.getProps().onUpdate) {
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
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
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
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
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
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
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
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v) {
    this.updateAndNotify(v);
    this.prev = v;
    this.stop();
    if (this.stopPassiveEffect) this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    if (collectMotionValues.current) {
      collectMotionValues.current.push(this);
    }
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ?
    // These casts could be avoided if parseFloat would be typed better
    velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
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
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
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
      if (
      // If it isn't active and hasn't *just* been set as inactive
      !typeState.isActive && activeDelta === null ||
      // If we didn't and don't have any defined prop for this animation type
      !prop && !typeState.prevProp ||
      // Or if the prop doesn't define an animation
      isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange ||
      // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant ||
      // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
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
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
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
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
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
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
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
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
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
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
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
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
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
    target.opacity = mix(0,
    // TODO Reinstate this if only child
    lead.opacity !== void 0 ? lead.opacity : 1, easeCrossfadeIn(progress2));
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
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
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
    /**
     * Lifecycles
     */
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
    // only on the root
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
    // Note: currently only running on root node
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
    /**
     * Update measurements
     */
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
    // Only run on root
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
  // Dimensions
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
  // Transform
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
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
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
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
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
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(target, canMutate = true) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
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
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
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
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    if (value !== this.values.get(key)) {
      this.removeValue(key);
      this.bindToMotionValue(key, value);
    }
    this.values.set(key, value);
    this.latestValues[key] = value.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
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
  /**
   * Check whether we have a motion value for this key
   */
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
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key) {
    var _a;
    return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
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
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
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
  }),
  /**
   * If the presence of a child affects the layout of the components around it,
   * we want to make a new context value to ensure they get re-rendered
   * so they can detect that layout change.
   */
  presenceAffectsLayout ? void 0 : [isPresent2]);
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
          return (
            // filter out the node exiting
            presentChildKey === key ||
            // filter out the leftover children
            leftOverKeys.includes(presentChildKey)
          );
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
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
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
  },
  // The array will change on each call, but by putting items.length at
  // the front of this array, we guarantee the dependency comparison will match up
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [items.length, ...items]);
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
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  /**
   * Start a drag gesture on every `motion` component that has this set of drag controls
   * passed into it via the `dragControls` prop.
   *
   * ```jsx
   * dragControls.start(e, {
   *   snapToCursor: true
   * })
   * ```
   *
   * @param event - PointerEvent
   * @param options - Options
   *
   * @public
   */
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
    readyAnimation = animateStyle(element, name, [keyframes2[0], keyframes2[0]],
    /**
     * 10 secs is basically just a super-safe duration to give Chrome
     * long enough to get the animation ready.
     */
    {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC9mcmFtZXItbW90aW9uLjEwLjE4LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29uZmlnQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvUHJlc2VuY2VDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtYnJvd3Nlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pc29tb3JwaGljLWVmZmVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF6eUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2NhbWVsLXRvLWRhc2gubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9kYXRhLWlkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLXJlZi1vYmplY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLW1vdGlvbi1yZWYubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvaXMtdmFyaWFudC1sYWJlbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1hbmltYXRpb24tY29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvdmFyaWFudC1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy1jb250cm9sbGluZy12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9jcmVhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZGVmaW5pdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvbG9hZC1mZWF0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Td2l0Y2hMYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvc3ltYm9sLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9tb3Rpb24tcHJveHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2xvd2VyY2FzZS1lbGVtZW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtc3ZnLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWNvcnJlY3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvaXMtZm9yY2VkLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3V0aWxzL2lzLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXRyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtY3NzLXZhcmlhYmxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9nZXQtYXMtdHlwZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2NsYW1wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy91bml0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1pbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL251bWJlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXN0eWxlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2NyZWF0ZS1yZW5kZXItc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdmFsaWQtcHJvcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvZmlsdGVyLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy90cmFuc2Zvcm0tb3JpZ2luLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9wYXRoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9idWlsZC1hdHRycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvaXMtc3ZnLXRhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXNlLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91c2UtcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jYW1lbC1jYXNlLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvc2NyYXBlLW1vdGlvbi12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvcmVzb2x2ZS12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1jb25zdGFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1rZXlmcmFtZXMtdGFyZ2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVzb2x2ZS12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3V0aWxzL3Jlc29sdmUtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS12aXN1YWwtc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9ub29wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL3JlbmRlci1zdGVwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL2JhdGNoZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9jb25maWctbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9jcmVhdGUtY29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2FkZC1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvdXRpbHMvaXMtcHJpbWFyeS1wb2ludGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2V2ZW50LWluZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvYWRkLXBvaW50ZXItZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9waXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9sb2NrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL0ZlYXR1cmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9ob3Zlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2ZvY3VzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvdXRpbHMvaXMtbm9kZS1vci1jaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L29ic2VydmVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9nZXN0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3NoYWxsb3ctY29tcGFyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLWR5bmFtaWMtdmFyaWFudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9lcnJvcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90aW1lLWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW5zdGFudC10cmFuc2l0aW9uLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2lzLWJlemllci1kZWZpbml0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS9lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS91dGlscy9nZXQtZmluYWwta2V5ZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY3ViaWMtYmV6aWVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2Vhc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtZWFzaW5nLWFycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL21vZGlmaWVycy9taXJyb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL3JldmVyc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY2lyYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9iYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2FudGljaXBhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvbWFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9yZ2JhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaHNsYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaHNsYS10by1yZ2JhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4LWNvbG9yLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29tcGxleC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC1jb21wbGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcHJvZ3Jlc3MubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pbnRlcnBvbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZmlsbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZGVmYXVsdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL2tleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3ZlbG9jaXR5LXBlci1zZWNvbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy91dGlscy92ZWxvY2l0eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3NwcmluZy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvaW5lcnRpYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvanMvZHJpdmVyLWZyYW1lbG9vcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL2NhbGMtZHVyYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL2pzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWVtby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvY3JlYXRlLWFjY2VsZXJhdGVkLWFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvaW5zdGFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9kZWZhdWx0LXRyYW5zaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb21wbGV4L2ZpbHRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZGVmYXVsdHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2FuaW1hdGFibGUtbm9uZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLXplcm8tdmFsdWUtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLW5vbmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMva2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL3RyYW5zaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvR2xvYmFsQ29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXdpbGwtY2hhbmdlL2lzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtbnVtZXJpY2FsLXN0cmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2FycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvc3Vic2NyaXB0aW9uLW1hbmFnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93YXJuLW9uY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdGVzdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1hdXRvLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kaW1lbnNpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL3NldHRlcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC12YXJpYW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvYW5pbWF0aW9uLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb24vZXhpdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGlzdGFuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9wYW4vUGFuU2Vzc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtY2FsYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvdXRpbHMvY29uc3RyYWludHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L21vZGVscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXRpbHMvZWFjaC1heGlzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9oYXMtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1hcHBseS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXRpbHMvbWVhc3VyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2dldC1jb250ZXh0LXdpbmRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9wYW4vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS91c2UtcHJlc2VuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1ib3JkZXItcmFkaXVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtYm94LXNoYWRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQvTWVhc3VyZUxheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vYW5pbWF0aW9uL21peC12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2NvcHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLXJlbW92ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3NoYXJlZC9zdGFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9jb21wYXJlLWJ5LWRlcHRoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2ZsYXQtdHJlZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2RlbGF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZGVidWcvcmVjb3JkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1zdmctZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3NpbmdsZS12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9jcmVhdGUtcHJvamVjdGlvbi1ub2RlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL0RvY3VtZW50UHJvamVjdGlvbk5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvSFRNTFByb2plY3Rpb25Ob2RlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2RyYWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2Nzcy12YXJpYWJsZXMtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvdW5pdC1jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9wYXJzZS1kb20tdmFyaWFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3N0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdG9yZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9WaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9ET01WaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvSFRNTFZpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL1NWR1Zpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL21vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vbW90aW9uLW1pbmltYWwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaXMtbW91bnRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1mb3JjZS11cGRhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9Qb3BDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1ByZXNlbmNlQ2hpbGQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtdW5tb3VudC1lZmZlY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvTW90aW9uQ29uZmlnL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXp5TW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9EZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXlvdXRHcm91cC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvUmVvcmRlckNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvdXRpbHMvY2hlY2stcmVvcmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9Hcm91cC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tYmluZS12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tcHV0ZWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0l0ZW0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2ZlYXR1cmVzLWFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtbWF4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLW1vdGlvbi10ZW1wbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zcHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtbW90aW9uLXZhbHVlLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9yZXNvbHZlLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9oYW5kbGUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS13aW5kb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luc2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9wcmVzZXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9lZGdlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9vZmZzZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb24tc2Nyb2xsLWhhbmRsZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC90cmFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLWVsZW1lbnQtc2Nyb2xsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvc2Nyb2xsL3VzZS12aWV3cG9ydC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtYW5pbWF0aW9uLWZyYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi91c2UtcmVkdWNlZC1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi91c2UtcmVkdWNlZC1tb3Rpb24tY29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL2FuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29ic2VydmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9zdXBwb3J0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9Hcm91cFBsYXliYWNrQ29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtZG9tLWtleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9jcmVhdGUtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvY3JlYXRlLWdlbmVyYXRvci1lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvY2FsYy10aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvd3JhcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9nZXQtZWFzaW5nLWZvci1zZWdtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL2VkaXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvc29ydC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS9jcmVhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWN5Y2xlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbi12aWV3Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91c2UtZHJhZy1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy91c2UtZG9tLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL2lzLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdW53cmFwLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3VzZS1pbnN0YW50LWxheW91dC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluc3RhbnQtdHJhbnNpdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXNlLXJlc2V0LXByb2plY3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9zdG9yZS1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvaGFuZG9mZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0YXJ0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlZC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1pbnZlcnRlZC1zY2FsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVNoYXJlZExheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL3N0YWdnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvaW5kZXgtbGVnYWN5Lm1qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX21lbW9pemVfYnJvd3Nlcl9janMiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuY2pzLmpzIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJtZW1vaXplIiwiZm4iLCJjYWNoZSIsImFyZyIsImRlZmF1bHQiLCJyZXF1aXJlX2lzX3Byb3BfdmFsaWRfYnJvd3Nlcl9janMiLCJub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2lzLXByb3AtdmFsaWQuYnJvd3Nlci5janMuanMiLCJfaW50ZXJvcERlZmF1bHQiLCJleCIsInJlYWN0UHJvcHNSZWdleCIsImluZGV4IiwicHJvcCIsInRlc3QiLCJjaGFyQ29kZUF0IiwiZnJhbWVyX21vdGlvbl8xMF8xOF8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVTaGFyZWRMYXlvdXQiLCJEZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0IiwiRHJhZ0NvbnRyb2xzIiwiRmxhdFRyZWUiLCJMYXlvdXRHcm91cCIsIkxheW91dEdyb3VwQ29udGV4dCIsIkxhenlNb3Rpb24iLCJNb3Rpb25Db25maWciLCJNb3Rpb25Db25maWdDb250ZXh0IiwiTW90aW9uQ29udGV4dCIsIk1vdGlvbkdsb2JhbENvbmZpZyIsIk1vdGlvblZhbHVlIiwiUHJlc2VuY2VDb250ZXh0IiwiUmVvcmRlciIsIlN3aXRjaExheW91dEdyb3VwQ29udGV4dCIsIlZpc3VhbEVsZW1lbnQiLCJhZGRQb2ludGVyRXZlbnQiLCJhZGRQb2ludGVySW5mbyIsImFkZFNjYWxlQ29ycmVjdG9yIiwiYW5pbWF0ZSIsImFuaW1hdGVWYWx1ZSIsImFuaW1hdGVWaXN1YWxFbGVtZW50IiwiYW5pbWF0aW9uQ29udHJvbHMiLCJhbmltYXRpb25zIiwiYW50aWNpcGF0ZSIsImJhY2tJbiIsImJhY2tJbk91dCIsImJhY2tPdXQiLCJidWlsZFRyYW5zZm9ybSIsImNhbGNMZW5ndGgiLCJjYW5jZWxGcmFtZSIsImNhbmNlbFN5bmMiLCJjaGVja1RhcmdldEZvck5ld1ZhbHVlcyIsImNpcmNJbiIsImNpcmNJbk91dCIsImNpcmNPdXQiLCJjbGFtcCIsImNvbG9yIiwiY29tcGxleCIsImNyZWF0ZUJveCIsImNyZWF0ZURvbU1vdGlvbkNvbXBvbmVudCIsImNyZWF0ZU1vdGlvbkNvbXBvbmVudCIsImNyZWF0ZVNjb3BlZEFuaW1hdGUiLCJjdWJpY0JlemllciIsImRlbGF5IiwiZGlzYWJsZUluc3RhbnRUcmFuc2l0aW9ucyIsImRpc3RhbmNlIiwiZGlzdGFuY2UyRCIsImRvbUFuaW1hdGlvbiIsImRvbU1heCIsImVhc2VJbiIsImVhc2VJbk91dCIsImVhc2VPdXQiLCJmaWx0ZXJQcm9wcyIsImZyYW1lIiwiZnJhbWVEYXRhIiwiaW5WaWV3IiwiaW50ZXJwb2xhdGUiLCJpbnZhcmlhbnQiLCJpc0Jyb3dzZXIiLCJpc0RyYWdBY3RpdmUiLCJpc01vdGlvbkNvbXBvbmVudCIsImlzTW90aW9uVmFsdWUiLCJpc1ZhbGlkTW90aW9uUHJvcCIsIm0iLCJtYWtlVXNlVmlzdWFsU3RhdGUiLCJtaXJyb3JFYXNpbmciLCJtaXgiLCJtb3Rpb24iLCJtb3Rpb25WYWx1ZSIsIm9wdGltaXplZEFwcGVhckRhdGFBdHRyaWJ1dGUiLCJwaXBlIiwicHJvZ3Jlc3MiLCJweCIsInJlc29sdmVNb3Rpb25WYWx1ZSIsInJldmVyc2VFYXNpbmciLCJzY3JvbGwiLCJzY3JvbGxJbmZvIiwic3ByaW5nIiwic3RhZ2dlciIsInN0YXJ0T3B0aW1pemVkQXBwZWFyQW5pbWF0aW9uIiwic3RlcHMiLCJzeW5jIiwidHJhbnNmb3JtIiwidW53cmFwTW90aW9uQ29tcG9uZW50IiwidXNlQW5pbWF0ZSIsInVzZUFuaW1hdGlvbiIsInVzZUFuaW1hdGlvbkNvbnRyb2xzIiwidXNlQW5pbWF0aW9uRnJhbWUiLCJ1c2VDeWNsZSIsInVzZURlcHJlY2F0ZWRBbmltYXRlZFN0YXRlIiwidXNlQW5pbWF0ZWRTdGF0ZSIsInVzZURlcHJlY2F0ZWRJbnZlcnRlZFNjYWxlIiwidXNlSW52ZXJ0ZWRTY2FsZSIsInVzZURvbUV2ZW50IiwidXNlRHJhZ0NvbnRyb2xzIiwidXNlRWxlbWVudFNjcm9sbCIsInVzZUZvcmNlVXBkYXRlIiwidXNlSW5WaWV3IiwidXNlSW5zdGFudExheW91dFRyYW5zaXRpb24iLCJ1c2VJbnN0YW50VHJhbnNpdGlvbiIsInVzZUlzUHJlc2VudCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ1c2VNb3Rpb25UZW1wbGF0ZSIsInVzZU1vdGlvblZhbHVlIiwidXNlTW90aW9uVmFsdWVFdmVudCIsInVzZVByZXNlbmNlIiwidXNlUmVkdWNlZE1vdGlvbiIsInVzZVJlZHVjZWRNb3Rpb25Db25maWciLCJ1c2VSZXNldFByb2plY3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VTcHJpbmciLCJ1c2VUaW1lIiwidXNlVHJhbnNmb3JtIiwidXNlVW5tb3VudEVmZmVjdCIsInVzZVZlbG9jaXR5IiwidXNlVmlld3BvcnRTY3JvbGwiLCJ1c2VXaWxsQ2hhbmdlIiwidmlzdWFsRWxlbWVudFN0b3JlIiwid2FybmluZyIsIndyYXAiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcmVhY3QiLCJyZXF1aXJlIiwiY3JlYXRlQ29udGV4dCIsInRyYW5zZm9ybVBhZ2VQb2ludCIsInAiLCJpc1N0YXRpYyIsInJlZHVjZWRNb3Rpb24iLCJpbXBvcnRfcmVhY3QyIiwiaW1wb3J0X3JlYWN0MyIsImRvY3VtZW50IiwiaW1wb3J0X3JlYWN0NCIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsImltcG9ydF9yZWFjdDUiLCJMYXp5Q29udGV4dCIsInN0cmljdCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwib3B0aW1pemVkQXBwZWFyRGF0YUlkIiwiaW1wb3J0X3JlYWN0NiIsInVzZVZpc3VhbEVsZW1lbnQiLCJDb21wb25lbnQyIiwidmlzdWFsU3RhdGUiLCJwcm9wcyIsImNyZWF0ZVZpc3VhbEVsZW1lbnQyIiwidmlzdWFsRWxlbWVudCIsInBhcmVudCIsInVzZUNvbnRleHQiLCJsYXp5Q29udGV4dCIsInByZXNlbmNlQ29udGV4dCIsInJlZHVjZWRNb3Rpb25Db25maWciLCJ2aXN1YWxFbGVtZW50UmVmIiwidXNlUmVmIiwicmVuZGVyZXIiLCJjdXJyZW50IiwiYmxvY2tJbml0aWFsQW5pbWF0aW9uIiwiaW5pdGlhbCIsInVzZUluc2VydGlvbkVmZmVjdCIsInVwZGF0ZSIsIndhbnRzSGFuZG9mZiIsIkJvb2xlYW4iLCJ3aW5kb3ciLCJIYW5kb2ZmQ29tcGxldGUiLCJyZW5kZXIiLCJhbmltYXRpb25TdGF0ZSIsImFuaW1hdGVDaGFuZ2VzIiwidXBkYXRlRmVhdHVyZXMiLCJpc1JlZk9iamVjdCIsInJlZiIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImltcG9ydF9yZWFjdDciLCJ1c2VNb3Rpb25SZWYiLCJleHRlcm5hbFJlZiIsInVzZUNhbGxiYWNrIiwiaW5zdGFuY2UiLCJtb3VudCIsInVubW91bnQiLCJpc1ZhcmlhbnRMYWJlbCIsInYiLCJBcnJheSIsImlzQXJyYXkiLCJpc0FuaW1hdGlvbkNvbnRyb2xzIiwic3RhcnQiLCJ2YXJpYW50UHJpb3JpdHlPcmRlciIsInZhcmlhbnRQcm9wcyIsImlzQ29udHJvbGxpbmdWYXJpYW50cyIsInNvbWUiLCJuYW1lIiwiaXNWYXJpYW50Tm9kZSIsInZhcmlhbnRzIiwiZ2V0Q3VycmVudFRyZWVWYXJpYW50cyIsImNvbnRleHQiLCJhbmltYXRlMiIsImluaGVyaXQiLCJpbXBvcnRfcmVhY3Q4IiwidXNlQ3JlYXRlTW90aW9uQ29udGV4dCIsInVzZU1lbW8iLCJ2YXJpYW50TGFiZWxzQXNEZXBlbmRlbmN5Iiwiam9pbiIsImZlYXR1cmVQcm9wcyIsImFuaW1hdGlvbiIsImV4aXQiLCJkcmFnIiwiZm9jdXMiLCJob3ZlciIsInRhcCIsInBhbiIsImxheW91dCIsImZlYXR1cmVEZWZpbml0aW9ucyIsImtleSIsImlzRW5hYmxlZCIsImxvYWRGZWF0dXJlcyIsImZlYXR1cmVzIiwiaW1wb3J0X3JlYWN0OSIsImltcG9ydF9yZWFjdDEwIiwibW90aW9uQ29tcG9uZW50U3ltYm9sIiwiU3ltYm9sIiwiZm9yIiwiUmVhY3QiLCJfX3RvRVNNIiwiaW1wb3J0X3JlYWN0MTEiLCJwcmVsb2FkZWRGZWF0dXJlcyIsInByZWxvYWRlZEZlYXR1cmVzMiIsImNyZWF0ZVZpc3VhbEVsZW1lbnQiLCJ1c2VSZW5kZXIiLCJ1c2VWaXN1YWxTdGF0ZSIsInVzZVZpc3VhbFN0YXRlMiIsIkNvbXBvbmVudCIsIk1vdGlvbkNvbXBvbmVudCIsIk1lYXN1cmVMYXlvdXQyIiwiY29uZmlnQW5kUHJvcHMiLCJsYXlvdXRJZCIsInVzZUxheW91dElkIiwiaW5pdGlhbExheW91dEdyb3VwQ29uZmlnIiwiaXNTdHJpY3QiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJGb3J3YXJkUmVmQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsImxheW91dEdyb3VwSWQiLCJpZCIsImNyZWF0ZU1vdGlvblByb3h5IiwiY3JlYXRlQ29uZmlnIiwiY3VzdG9tIiwiY3VzdG9tTW90aW9uQ29tcG9uZW50Q29uZmlnIiwiUHJveHkiLCJjb21wb25lbnRDYWNoZSIsIk1hcCIsImdldCIsIl90YXJnZXQiLCJoYXMiLCJzZXQiLCJsb3dlcmNhc2VTVkdFbGVtZW50cyIsImlzU1ZHQ29tcG9uZW50IiwiaW5jbHVkZXMiLCJpbmRleE9mIiwic2NhbGVDb3JyZWN0b3JzIiwiY29ycmVjdG9ycyIsImFzc2lnbiIsInRyYW5zZm9ybVByb3BPcmRlciIsInRyYW5zZm9ybVByb3BzIiwiU2V0IiwiaXNGb3JjZWRNb3Rpb25WYWx1ZSIsImxheW91dDIiLCJzdGFydHNXaXRoIiwiZ2V0VmVsb2NpdHkiLCJ0cmFuc2xhdGVBbGlhcyIsIngiLCJ5IiwieiIsInRyYW5zZm9ybVBlcnNwZWN0aXZlIiwibnVtVHJhbnNmb3JtcyIsImxlbmd0aCIsInRyYW5zZm9ybTIiLCJlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiIsImFsbG93VHJhbnNmb3JtTm9uZSIsInRyYW5zZm9ybUlzRGVmYXVsdCIsInRyYW5zZm9ybVRlbXBsYXRlIiwidHJhbnNmb3JtU3RyaW5nIiwiaSIsInRyYW5zZm9ybU5hbWUiLCJ0cmltIiwiY2hlY2tTdHJpbmdTdGFydHNXaXRoIiwidG9rZW4iLCJpc0NTU1ZhcmlhYmxlTmFtZSIsImlzQ1NTVmFyaWFibGVUb2tlbiIsImNzc1ZhcmlhYmxlUmVnZXgiLCJnZXRWYWx1ZUFzVHlwZSIsInR5cGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwibnVtYmVyIiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiYWxwaGEiLCJzY2FsZSIsInNhbml0aXplIiwicm91bmQiLCJmbG9hdFJlZ2V4IiwiY29sb3JSZWdleCIsInNpbmdsZUNvbG9yUmVnZXgiLCJpc1N0cmluZyIsImNyZWF0ZVVuaXRUeXBlIiwidW5pdCIsImVuZHNXaXRoIiwic3BsaXQiLCJkZWdyZWVzIiwicGVyY2VudCIsInZoIiwidnciLCJwcm9ncmVzc1BlcmNlbnRhZ2UiLCJpbnQiLCJudW1iZXJWYWx1ZVR5cGVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJhZGl1cyIsInJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsIndpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJzaXplIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJyb3RhdGUiLCJyb3RhdGVYIiwicm90YXRlWSIsInJvdGF0ZVoiLCJzY2FsZVgiLCJzY2FsZVkiLCJzY2FsZVoiLCJza2V3Iiwic2tld1giLCJza2V3WSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwidHJhbnNsYXRlWiIsInBlcnNwZWN0aXZlIiwib3BhY2l0eSIsIm9yaWdpblgiLCJvcmlnaW5ZIiwib3JpZ2luWiIsInpJbmRleCIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlT3BhY2l0eSIsIm51bU9jdGF2ZXMiLCJidWlsZEhUTUxTdHlsZXMiLCJzdGF0ZSIsImxhdGVzdFZhbHVlcyIsIm9wdGlvbnMiLCJzdHlsZSIsInZhcnMiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJoYXNUcmFuc2Zvcm0yIiwiaGFzVHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtSXNOb25lIiwidmFsdWVUeXBlIiwidmFsdWVBc1R5cGUiLCJjcmVhdGVIdG1sUmVuZGVyU3RhdGUiLCJpbXBvcnRfcmVhY3QxMiIsImNvcHlSYXdWYWx1ZXNPbmx5IiwidGFyZ2V0Iiwic291cmNlIiwidXNlSW5pdGlhbE1vdGlvblZhbHVlcyIsInVzZVN0eWxlIiwic3R5bGVQcm9wIiwidHJhbnNmb3JtVmFsdWVzIiwidXNlSFRNTFByb3BzIiwiaHRtbFByb3BzIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ2dhYmxlIiwidXNlclNlbGVjdCIsIldlYmtpdFVzZXJTZWxlY3QiLCJXZWJraXRUb3VjaENhbGxvdXQiLCJ0b3VjaEFjdGlvbiIsInRhYkluZGV4Iiwib25UYXAiLCJvblRhcFN0YXJ0Iiwid2hpbGVUYXAiLCJ2YWxpZE1vdGlvblByb3BzIiwic2hvdWxkRm9yd2FyZCIsImxvYWRFeHRlcm5hbElzVmFsaWRQcm9wIiwiaXNWYWxpZFByb3AiLCJfYSIsImlzRG9tIiwiZm9yd2FyZE1vdGlvblByb3BzIiwiZmlsdGVyZWRQcm9wcyIsInZhbHVlcyIsImNhbGNPcmlnaW4iLCJvcmlnaW4iLCJvZmZzZXQiLCJjYWxjU1ZHVHJhbnNmb3JtT3JpZ2luIiwiZGltZW5zaW9ucyIsInB4T3JpZ2luWCIsInB4T3JpZ2luWSIsImRhc2hLZXlzIiwiYXJyYXkiLCJjYW1lbEtleXMiLCJidWlsZFNWR1BhdGgiLCJhdHRycyIsInNwYWNpbmciLCJ1c2VEYXNoQ2FzZSIsInBhdGhMZW5ndGgiLCJrZXlzMiIsInBhdGhTcGFjaW5nIiwiYnVpbGRTVkdBdHRycyIsImF0dHJYIiwiYXR0clkiLCJhdHRyU2NhbGUiLCJwYXRoT2Zmc2V0IiwibGF0ZXN0IiwiaXNTVkdUYWcyIiwidmlld0JveCIsImNyZWF0ZVN2Z1JlbmRlclN0YXRlIiwiaXNTVkdUYWciLCJ0YWciLCJpbXBvcnRfcmVhY3QxMyIsInVzZVNWR1Byb3BzIiwiX2lzU3RhdGljIiwidmlzdWFsUHJvcHMiLCJyYXdTdHlsZXMiLCJpbXBvcnRfcmVhY3QxNCIsImNyZWF0ZVVzZVJlbmRlciIsInVzZVZpc3VhbFByb3BzIiwiZWxlbWVudFByb3BzIiwiY2hpbGRyZW4iLCJyZW5kZXJlZENoaWxkcmVuIiwicmVuZGVySFRNTCIsImVsZW1lbnQiLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvblN0eWxlcyIsInNldFByb3BlcnR5IiwiY2FtZWxDYXNlQXR0cmlidXRlcyIsInJlbmRlclNWRyIsInJlbmRlclN0YXRlIiwiX3N0eWxlUHJvcCIsInNldEF0dHJpYnV0ZSIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wcyIsInByZXZQcm9wcyIsIm5ld1ZhbHVlcyIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wczIiLCJ0YXJnZXRLZXkiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsInJlc29sdmVWYXJpYW50RnJvbVByb3BzIiwiZGVmaW5pdGlvbiIsImN1cnJlbnRWYWx1ZXMiLCJjdXJyZW50VmVsb2NpdHkiLCJpbXBvcnRfcmVhY3QxNSIsInVzZUNvbnN0YW50IiwiaW5pdCIsImlzS2V5ZnJhbWVzVGFyZ2V0IiwiaXNDdXN0b21WYWx1ZSIsInRvVmFsdWUiLCJyZXNvbHZlRmluYWxWYWx1ZUluS2V5ZnJhbWVzIiwidW53cmFwcGVkVmFsdWUiLCJpbXBvcnRfcmVhY3QxNiIsIm1ha2VTdGF0ZSIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wczMiLCJjcmVhdGVSZW5kZXJTdGF0ZSIsIm9uTW91bnQiLCJtYWtlTGF0ZXN0VmFsdWVzIiwiY29uZmlnIiwibWFrZSIsInNjcmFwZU1vdGlvblZhbHVlcyIsIm1vdGlvblZhbHVlcyIsImlzQ29udHJvbGxpbmdWYXJpYW50cyQxIiwiaXNWYXJpYW50Tm9kZSQxIiwiaXNJbml0aWFsQW5pbWF0aW9uQmxvY2tlZCIsInZhcmlhbnRUb1NldCIsImxpc3QiLCJmb3JFYWNoIiwicmVzb2x2ZWQiLCJ0cmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbiIsInZhbHVlVGFyZ2V0Iiwibm9vcCIsImFueSIsIlF1ZXVlIiwiY29uc3RydWN0b3IiLCJvcmRlciIsInNjaGVkdWxlZCIsImFkZCIsInByb2Nlc3MyIiwicHVzaCIsInJlbW92ZSIsInNwbGljZSIsImRlbGV0ZSIsImNsZWFyIiwiY3JlYXRlUmVuZGVyU3RlcCIsInJ1bk5leHRGcmFtZSIsInRoaXNGcmFtZSIsIm5leHRGcmFtZSIsIm51bVRvUnVuIiwiaXNQcm9jZXNzaW5nIiwiZmx1c2hOZXh0RnJhbWUiLCJ0b0tlZXBBbGl2ZSIsIldlYWtTZXQiLCJzdGVwIiwic2NoZWR1bGUiLCJjYWxsYmFjayIsImtlZXBBbGl2ZSIsImltbWVkaWF0ZSIsImFkZFRvQ3VycmVudEZyYW1lIiwicXVldWUiLCJjYW5jZWwiLCJwcm9jZXNzIiwiZnJhbWVEYXRhMiIsInN0ZXBzT3JkZXIiLCJtYXhFbGFwc2VkIiwiY3JlYXRlUmVuZGVyQmF0Y2hlciIsInNjaGVkdWxlTmV4dEJhdGNoIiwiYWxsb3dLZWVwQWxpdmUiLCJ1c2VEZWZhdWx0RWxhcHNlZCIsImRlbHRhIiwidGltZXN0YW1wIiwic3RlcHMyIiwicmVkdWNlIiwiYWNjIiwicHJvY2Vzc1N0ZXAiLCJzdGVwSWQiLCJwcm9jZXNzQmF0Y2giLCJwZXJmb3JtYW5jZSIsIm5vdyIsIndha2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdmdNb3Rpb25Db25maWciLCJyZWFkIiwiZ2V0QkJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImUiLCJ0YWdOYW1lIiwiaHRtbE1vdGlvbkNvbmZpZyIsImNyZWF0ZURvbU1vdGlvbkNvbmZpZyIsImJhc2VDb25maWciLCJhZGREb21FdmVudCIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJwYXNzaXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc1ByaW1hcnlQb2ludGVyIiwiZXZlbnQiLCJwb2ludGVyVHlwZSIsImJ1dHRvbiIsImlzUHJpbWFyeSIsImV4dHJhY3RFdmVudEluZm8iLCJwb2ludFR5cGUiLCJwb2ludCIsImNvbWJpbmVGdW5jdGlvbnMiLCJhIiwiYiIsInRyYW5zZm9ybWVycyIsImNyZWF0ZUxvY2siLCJsb2NrIiwib3BlbkxvY2siLCJnbG9iYWxIb3Jpem9udGFsTG9jayIsImdsb2JhbFZlcnRpY2FsTG9jayIsImdldEdsb2JhbExvY2siLCJkcmFnMiIsIm9wZW5Ib3Jpem9udGFsIiwib3BlblZlcnRpY2FsIiwib3Blbkdlc3R1cmVMb2NrIiwiRmVhdHVyZSIsIm5vZGUiLCJpc01vdW50ZWQiLCJhZGRIb3ZlckV2ZW50IiwiaXNBY3RpdmUiLCJjYWxsYmFja05hbWUiLCJoYW5kbGVFdmVudCIsImluZm8iLCJnZXRQcm9wcyIsIndoaWxlSG92ZXIiLCJzZXRBY3RpdmUiLCJIb3Zlckdlc3R1cmUiLCJGb2N1c0dlc3R1cmUiLCJhcmd1bWVudHMiLCJvbkZvY3VzIiwiaXNGb2N1c1Zpc2libGUiLCJtYXRjaGVzIiwib25CbHVyIiwiaXNOb2RlT3JDaGlsZCIsImNoaWxkIiwicGFyZW50RWxlbWVudCIsImZpcmVTeW50aGV0aWNQb2ludGVyRXZlbnQiLCJzeW50aGV0aWNQb2ludGVyRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJQcmVzc0dlc3R1cmUiLCJyZW1vdmVTdGFydExpc3RlbmVycyIsInJlbW92ZUVuZExpc3RlbmVycyIsInJlbW92ZUFjY2Vzc2libGVMaXN0ZW5lcnMiLCJzdGFydFBvaW50ZXJQcmVzcyIsInN0YXJ0RXZlbnQiLCJzdGFydEluZm8iLCJpc1ByZXNzaW5nIiwiZW5kUG9pbnRlclByZXNzIiwiZW5kRXZlbnQiLCJlbmRJbmZvIiwiY2hlY2tQcmVzc0VuZCIsIm9uVGFwQ2FuY2VsIiwiZ2xvYmFsVGFwVGFyZ2V0IiwicmVtb3ZlUG9pbnRlclVwTGlzdGVuZXIiLCJyZW1vdmVQb2ludGVyQ2FuY2VsTGlzdGVuZXIiLCJjYW5jZWxFdmVudCIsImNhbmNlbEluZm8iLCJjYW5jZWxQcmVzcyIsInN0YXJ0UHJlc3MiLCJzdGFydEFjY2Vzc2libGVQcmVzcyIsImhhbmRsZUtleWRvd24iLCJrZXlkb3duRXZlbnQiLCJoYW5kbGVLZXl1cCIsImtleXVwRXZlbnQiLCJyZW1vdmVLZXlkb3duTGlzdGVuZXIiLCJoYW5kbGVCbHVyIiwicmVtb3ZlQmx1ckxpc3RlbmVyIiwicmVtb3ZlUG9pbnRlckxpc3RlbmVyIiwicmVtb3ZlRm9jdXNMaXN0ZW5lciIsIm9ic2VydmVyQ2FsbGJhY2tzIiwiV2Vha01hcCIsIm9ic2VydmVycyIsImZpcmVPYnNlcnZlckNhbGxiYWNrIiwiZW50cnkiLCJmaXJlQWxsT2JzZXJ2ZXJDYWxsYmFja3MiLCJlbnRyaWVzIiwiaW5pdEludGVyc2VjdGlvbk9ic2VydmVyIiwicm9vdCIsImxvb2t1cFJvb3QiLCJyb290T2JzZXJ2ZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZUludGVyc2VjdGlvbiIsInJvb3RJbnRlcmVzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwidGhyZXNob2xkTmFtZXMiLCJhbGwiLCJJblZpZXdGZWF0dXJlIiwiaGFzRW50ZXJlZFZpZXciLCJpc0luVmlldyIsInN0YXJ0T2JzZXJ2ZXIiLCJ2aWV3cG9ydCIsInJvb3RNYXJnaW4iLCJhbW91bnQiLCJvbmNlIiwidGhyZXNob2xkIiwib25JbnRlcnNlY3Rpb25VcGRhdGUiLCJpc0ludGVyc2VjdGluZyIsIm9uVmlld3BvcnRFbnRlciIsIm9uVmlld3BvcnRMZWF2ZSIsImhhc09wdGlvbnNDaGFuZ2VkIiwiaGFzVmlld3BvcnRPcHRpb25DaGFuZ2VkIiwicHJldlZpZXdwb3J0IiwiZ2VzdHVyZUFuaW1hdGlvbnMiLCJzaGFsbG93Q29tcGFyZSIsIm5leHQiLCJwcmV2IiwicHJldkxlbmd0aCIsImdldEN1cnJlbnQiLCJ2ZWxvY2l0eSIsInJlc29sdmVWYXJpYW50IiwiY2hlY2siLCJtZXNzYWdlIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsInNlY29uZHNUb01pbGxpc2Vjb25kcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHNUb1NlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJpbnN0YW50QW5pbWF0aW9uU3RhdGUiLCJpc0JlemllckRlZmluaXRpb24iLCJlYXNpbmciLCJpc1dhYXBpU3VwcG9ydGVkRWFzaW5nIiwic3VwcG9ydGVkV2FhcGlFYXNpbmciLCJldmVyeSIsImN1YmljQmV6aWVyQXNTdHJpbmciLCJjIiwiZCIsImxpbmVhciIsImVhc2UiLCJtYXBFYXNpbmdUb05hdGl2ZUVhc2luZyIsIm1hcCIsImFuaW1hdGVTdHlsZSIsInZhbHVlTmFtZSIsImtleWZyYW1lczIiLCJkZWxheTIiLCJkdXJhdGlvbiIsInJlcGVhdCIsInJlcGVhdFR5cGUiLCJlYXNlMiIsInRpbWVzIiwia2V5ZnJhbWVPcHRpb25zIiwiZmlsbCIsIml0ZXJhdGlvbnMiLCJkaXJlY3Rpb24iLCJnZXRGaW5hbEtleWZyYW1lIiwiY2FsY0JlemllciIsInQiLCJhMSIsImEyIiwic3ViZGl2aXNpb25QcmVjaXNpb24iLCJzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMiLCJiaW5hcnlTdWJkaXZpZGUiLCJsb3dlckJvdW5kIiwidXBwZXJCb3VuZCIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJhYnMiLCJtWTEiLCJtWTIiLCJnZXRURm9yWCIsImFYIiwiaXNFYXNpbmdBcnJheSIsInNpbiIsImFjb3MiLCJwb3ciLCJlYXNpbmdMb29rdXAiLCJlYXNpbmdEZWZpbml0aW9uVG9GdW5jdGlvbiIsIngxIiwieTEiLCJ4MiIsInkyIiwiaXNDb2xvclN0cmluZyIsInRlc3RQcm9wIiwic3BsaXRDb2xvciIsImFOYW1lIiwiYk5hbWUiLCJjTmFtZSIsImFscGhhMiIsIm1hdGNoIiwiY2xhbXBSZ2JVbml0IiwicmdiVW5pdCIsInJnYmEiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSQxIiwicGFyc2VIZXgiLCJyIiwiZyIsInBhcnNlSW50IiwiaGV4IiwiaHNsYSIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJmcm9tIiwidG8iLCJwcm9ncmVzczIiLCJodWVUb1JnYiIsInEiLCJoc2xhVG9SZ2JhIiwibWl4TGluZWFyQ29sb3IiLCJmcm9tRXhwbyIsInNxcnQiLCJjb2xvclR5cGVzIiwiZ2V0Q29sb3JUeXBlIiwiZmluZCIsImFzUkdCQSIsImNvbG9yMiIsIm1vZGVsIiwibWl4Q29sb3IiLCJmcm9tUkdCQSIsInRvUkdCQSIsImJsZW5kZWQiLCJfYiIsImlzTmFOIiwiY3NzVmFyVG9rZW5pc2VyIiwicmVnZXgiLCJjb3VudEtleSIsImNvbG9yVG9rZW5pc2VyIiwibnVtYmVyVG9rZW5pc2VyIiwidG9rZW5pc2UiLCJ0b2tlbmlzZWQiLCJhbmFseXNlQ29tcGxleFZhbHVlIiwib3JpZ2luYWxWYWx1ZSIsInRvU3RyaW5nIiwibnVtVmFycyIsIm51bUNvbG9ycyIsIm51bU51bWJlcnMiLCJwYXJzZUNvbXBsZXhWYWx1ZSIsImNyZWF0ZVRyYW5zZm9ybWVyIiwibnVtVmFsdWVzIiwib3V0cHV0IiwiY29udmVydE51bWJlcnNUb1plcm8iLCJnZXRBbmltYXRhYmxlTm9uZSIsInBhcnNlZCIsInRyYW5zZm9ybWVyIiwibWl4SW1tZWRpYXRlIiwiZ2V0TWl4ZXIiLCJtaXhDb21wbGV4IiwibWl4QXJyYXkiLCJibGVuZFZhbHVlIiwiZnJvbVRoaXMiLCJtaXhPYmplY3QiLCJ0ZW1wbGF0ZSIsIm9yaWdpblN0YXRzIiwidGFyZ2V0U3RhdHMiLCJjYW5JbnRlcnBvbGF0ZSIsInRvRnJvbURpZmZlcmVuY2UiLCJtaXhOdW1iZXIiLCJkZXRlY3RNaXhlckZhY3RvcnkiLCJjcmVhdGVNaXhlcnMiLCJjdXN0b21NaXhlciIsIm1peGVycyIsIm1peGVyRmFjdG9yeSIsIm51bU1peGVycyIsIm1peGVyIiwiZWFzaW5nRnVuY3Rpb24iLCJpbnB1dCIsImlzQ2xhbXAiLCJpbnB1dExlbmd0aCIsInJldmVyc2UiLCJpbnRlcnBvbGF0b3IiLCJwcm9ncmVzc0luUmFuZ2UiLCJmaWxsT2Zmc2V0IiwicmVtYWluaW5nIiwib2Zmc2V0UHJvZ3Jlc3MiLCJkZWZhdWx0T2Zmc2V0IiwiYXJyIiwiY29udmVydE9mZnNldFRvVGltZXMiLCJvIiwiZGVmYXVsdEVhc2luZyIsImtleWZyYW1lcyIsImtleWZyYW1lVmFsdWVzIiwiZWFzaW5nRnVuY3Rpb25zIiwiZG9uZSIsImFic29sdXRlVGltZXMiLCJtYXBUaW1lVG9LZXlmcmFtZSIsImNhbGN1bGF0ZWREdXJhdGlvbiIsInZlbG9jaXR5UGVyU2Vjb25kIiwiZnJhbWVEdXJhdGlvbiIsInZlbG9jaXR5U2FtcGxlRHVyYXRpb24iLCJjYWxjR2VuZXJhdG9yVmVsb2NpdHkiLCJyZXNvbHZlVmFsdWUiLCJwcmV2VCIsInNhZmVNaW4iLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwibWluRGFtcGluZyIsIm1heERhbXBpbmciLCJmaW5kU3ByaW5nIiwiYm91bmNlIiwibWFzcyIsImVudmVsb3BlIiwiZGVyaXZhdGl2ZSIsImRhbXBpbmdSYXRpbyIsInVuZGFtcGVkRnJlcTIiLCJleHBvbmVudGlhbERlY2F5IiwiY2FsY0FuZ3VsYXJGcmVxIiwiZXhwIiwiZiIsImZhY3RvciIsImluaXRpYWxHdWVzcyIsInVuZGFtcGVkRnJlcSIsImFwcHJveGltYXRlUm9vdCIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJyb290SXRlcmF0aW9ucyIsInJlc3VsdCIsImR1cmF0aW9uS2V5cyIsInBoeXNpY3NLZXlzIiwiaXNTcHJpbmdUeXBlIiwiZ2V0U3ByaW5nT3B0aW9ucyIsInNwcmluZ09wdGlvbnMiLCJpc1Jlc29sdmVkRnJvbUR1cmF0aW9uIiwiZGVyaXZlZCIsInJlc3REZWx0YSIsInJlc3RTcGVlZCIsImluaXRpYWxWZWxvY2l0eSIsImluaXRpYWxEZWx0YSIsInVuZGFtcGVkQW5ndWxhckZyZXEiLCJpc0dyYW51bGFyU2NhbGUiLCJyZXNvbHZlU3ByaW5nIiwiYW5ndWxhckZyZXEiLCJjb3MiLCJkYW1wZWRBbmd1bGFyRnJlcSIsImZyZXFGb3JUIiwic2luaCIsImNvc2giLCJpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQiLCJpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkIiwiaW5lcnRpYSIsInBvd2VyIiwidGltZUNvbnN0YW50IiwiYm91bmNlRGFtcGluZyIsImJvdW5jZVN0aWZmbmVzcyIsIm1vZGlmeVRhcmdldCIsImlzT3V0T2ZCb3VuZHMiLCJuZWFyZXN0Qm91bmRhcnkiLCJhbXBsaXR1ZGUiLCJpZGVhbCIsImNhbGNEZWx0YSIsImNhbGNMYXRlc3QiLCJhcHBseUZyaWN0aW9uIiwidGltZVJlYWNoZWRCb3VuZGFyeSIsInNwcmluZyQxIiwiY2hlY2tDYXRjaEJvdW5kYXJ5IiwiaGFzVXBkYXRlZEZyYW1lIiwiZnJhbWVsb29wRHJpdmVyIiwicGFzc1RpbWVzdGFtcCIsInN0b3AiLCJtYXhHZW5lcmF0b3JEdXJhdGlvbiIsImNhbGNHZW5lcmF0b3JEdXJhdGlvbiIsImdlbmVyYXRvciIsInRpbWVTdGVwIiwiSW5maW5pdHkiLCJ0eXBlcyIsImRlY2F5IiwidHdlZW4iLCJhdXRvcGxheSIsImRyaXZlciIsImtleWZyYW1lcyQxIiwicmVwZWF0RGVsYXkiLCJvblBsYXkiLCJvblN0b3AiLCJvbkNvbXBsZXRlIiwib25VcGRhdGUiLCJzcGVlZCIsImhhc1N0b3BwZWQiLCJyZXNvbHZlRmluaXNoZWRQcm9taXNlIiwiY3VycmVudEZpbmlzaGVkUHJvbWlzZSIsInVwZGF0ZUZpbmlzaGVkUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uRHJpdmVyIiwiZ2VuZXJhdG9yRmFjdG9yeSIsIm1hcE51bWJlcnNUb0tleWZyYW1lcyIsIm1pcnJvcmVkR2VuZXJhdG9yIiwicGxheVN0YXRlIiwiaG9sZFRpbWUiLCJzdGFydFRpbWUiLCJjYW5jZWxUaW1lIiwicmVzb2x2ZWREdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJjdXJyZW50VGltZSIsInRpY2siLCJ0aW1lV2l0aG91dERlbGF5IiwiaXNJbkRlbGF5UGhhc2UiLCJlbGFwc2VkIiwiZnJhbWVHZW5lcmF0b3IiLCJjdXJyZW50SXRlcmF0aW9uIiwiZmxvb3IiLCJpdGVyYXRpb25Qcm9ncmVzcyIsImlzT2RkSXRlcmF0aW9uIiwiaXNBbmltYXRpb25GaW5pc2hlZCIsImZpbmlzaCIsInN0b3BBbmltYXRpb25Ecml2ZXIiLCJwbGF5IiwiY29udHJvbHMiLCJ0aGVuIiwicmVqZWN0IiwidGltZSIsIm5ld1RpbWUiLCJuZXdTcGVlZCIsInBhdXNlIiwiY29tcGxldGUiLCJzYW1wbGUiLCJtZW1vIiwic3VwcG9ydHNXYWFwaSIsIkVsZW1lbnQiLCJhY2NlbGVyYXRlZFZhbHVlcyIsInNhbXBsZURlbHRhIiwibWF4RHVyYXRpb24yIiwicmVxdWlyZXNQcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJjcmVhdGVBY2NlbGVyYXRlZEFuaW1hdGlvbiIsImNhbkFjY2VsZXJhdGVBbmltYXRpb24iLCJwZW5kaW5nQ2FuY2VsIiwic2FtcGxlQW5pbWF0aW9uIiwicHJlZ2VuZXJhdGVkS2V5ZnJhbWVzIiwib3duZXIiLCJjYW5jZWxBbmltYXRpb24iLCJzYWZlQ2FuY2VsIiwib25maW5pc2giLCJhdHRhY2hUaW1lbGluZSIsInRpbWVsaW5lIiwicGxheWJhY2tSYXRlIiwic2V0V2l0aFZlbG9jaXR5IiwiY3JlYXRlSW5zdGFudEFuaW1hdGlvbiIsInNldFZhbHVlIiwidW5kZXJEYW1wZWRTcHJpbmciLCJjcml0aWNhbGx5RGFtcGVkU3ByaW5nIiwia2V5ZnJhbWVzVHJhbnNpdGlvbiIsImdldERlZmF1bHRUcmFuc2l0aW9uIiwidmFsdWVLZXkiLCJpc0FuaW1hdGFibGUiLCJtYXhEZWZhdWx0cyIsImFwcGx5RGVmYXVsdEZpbHRlciIsInNsaWNlIiwibnVtYmVyMiIsImRlZmF1bHRWYWx1ZSIsImZ1bmN0aW9uUmVnZXgiLCJmaWx0ZXIiLCJmdW5jdGlvbnMiLCJkZWZhdWx0VmFsdWVUeXBlcyIsImJhY2tncm91bmRDb2xvciIsIm91dGxpbmVDb2xvciIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJXZWJraXRGaWx0ZXIiLCJnZXREZWZhdWx0VmFsdWVUeXBlIiwiZ2V0QW5pbWF0YWJsZU5vbmUyIiwiZGVmYXVsdFZhbHVlVHlwZSIsImlzWmVyb1ZhbHVlU3RyaW5nIiwiaXNOb25lIiwiZ2V0S2V5ZnJhbWVzIiwiaXNUYXJnZXRBbmltYXRhYmxlIiwiZGVmYXVsdE9yaWdpbiIsImFuaW1hdGFibGVUZW1wbGF0ZVZhbHVlIiwibm9uZUtleWZyYW1lSW5kZXhlcyIsImlzVHJhbnNpdGlvbkRlZmluZWQiLCJ3aGVuIiwiX2RlbGF5IiwiZGVsYXlDaGlsZHJlbiIsInN0YWdnZXJDaGlsZHJlbiIsInN0YWdnZXJEaXJlY3Rpb24iLCJrZXlzIiwiZ2V0VmFsdWVUcmFuc2l0aW9uIiwic2tpcEFuaW1hdGlvbnMiLCJhbmltYXRlTW90aW9uVmFsdWUiLCJ2YWx1ZVRyYW5zaXRpb24iLCJvcmlnaW5LZXlmcmFtZSIsInRhcmdldEtleWZyYW1lIiwiaXNPcmlnaW5BbmltYXRhYmxlIiwiaXNIYW5kb2ZmIiwiSFRNTEVsZW1lbnQiLCJhY2NlbGVyYXRlZEFuaW1hdGlvbiIsImlzV2lsbENoYW5nZU1vdGlvblZhbHVlIiwiaXNOdW1lcmljYWxTdHJpbmciLCJhZGRVbmlxdWVJdGVtIiwiaXRlbSIsInJlbW92ZUl0ZW0iLCJtb3ZlSXRlbSIsImZyb21JbmRleCIsInRvSW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJTdWJzY3JpcHRpb25NYW5hZ2VyIiwic3Vic2NyaXB0aW9ucyIsIm5vdGlmeSIsIm51bVN1YnNjcmlwdGlvbnMiLCJnZXRTaXplIiwid2FybmVkIiwid2Fybk9uY2UiLCJjb25kaXRpb24iLCJpc0Zsb2F0IiwiY29sbGVjdE1vdGlvblZhbHVlcyIsInZlcnNpb24iLCJ0aW1lRGVsdGEiLCJsYXN0VXBkYXRlZCIsImNhblRyYWNrVmVsb2NpdHkiLCJldmVudHMiLCJ1cGRhdGVBbmROb3RpZnkiLCJwb3N0UmVuZGVyIiwic2NoZWR1bGVWZWxvY2l0eUNoZWNrIiwiY2hhbmdlIiwidmVsb2NpdHlDaGFuZ2UiLCJyZW5kZXJSZXF1ZXN0IiwidmVsb2NpdHlDaGVjayIsImhhc0FuaW1hdGVkIiwib25DaGFuZ2UiLCJzdWJzY3JpcHRpb24iLCJvbiIsInVuc3Vic2NyaWJlIiwiY2xlYXJMaXN0ZW5lcnMiLCJldmVudE1hbmFnZXJzIiwiYXR0YWNoIiwicGFzc2l2ZUVmZmVjdCIsInN0b3BQYXNzaXZlRWZmZWN0IiwianVtcCIsImdldFByZXZpb3VzIiwic3RhcnRBbmltYXRpb24iLCJhbmltYXRpb25TdGFydCIsImFuaW1hdGlvbkNvbXBsZXRlIiwiY2xlYXJBbmltYXRpb24iLCJhbmltYXRpb25DYW5jZWwiLCJpc0FuaW1hdGluZyIsImRlc3Ryb3kiLCJ0ZXN0VmFsdWVUeXBlIiwiYXV0byIsImRpbWVuc2lvblZhbHVlVHlwZXMiLCJmaW5kRGltZW5zaW9uVmFsdWVUeXBlIiwidmFsdWVUeXBlcyIsImZpbmRWYWx1ZVR5cGUiLCJzZXRNb3Rpb25WYWx1ZSIsImhhc1ZhbHVlIiwiZ2V0VmFsdWUiLCJhZGRWYWx1ZSIsInNldFRhcmdldCIsIm1ha2VUYXJnZXRBbmltYXRhYmxlIiwic2V0VmFyaWFudHMiLCJ2YXJpYW50TGFiZWxzIiwicmV2ZXJzZWRMYWJlbHMiLCJ2YXJpYW50IiwiZ2V0VmFyaWFudCIsInZhcmlhbnRDaGlsZHJlbiIsInNldFZhbHVlcyIsIm5ld1ZhbHVlS2V5cyIsIm51bU5ld1ZhbHVlcyIsInRhcmdldFZhbHVlIiwicmVhZFZhbHVlIiwic2V0QmFzZVRhcmdldCIsImdldE9yaWdpbkZyb21UcmFuc2l0aW9uIiwiZ2V0T3JpZ2luIiwidHJhbnNpdGlvbk9yaWdpbiIsInNob3VsZEJsb2NrQW5pbWF0aW9uIiwicHJvdGVjdGVkS2V5cyIsIm5lZWRzQW5pbWF0aW5nIiwic2hvdWxkQmxvY2siLCJoYXNLZXlmcmFtZXNDaGFuZ2VkIiwiYW5pbWF0ZVRhcmdldCIsInRyYW5zaXRpb25PdmVycmlkZSIsIndpbGxDaGFuZ2UiLCJhbmltYXRpb25zMiIsImFuaW1hdGlvblR5cGVTdGF0ZSIsImdldFN0YXRlIiwiSGFuZG9mZkFwcGVhckFuaW1hdGlvbnMiLCJhcHBlYXJJZCIsImNhblNraXAiLCJzaG91bGRSZWR1Y2VNb3Rpb24iLCJhbmltYXRlVmFyaWFudCIsImdldEFuaW1hdGlvbiIsImdldENoaWxkQW5pbWF0aW9ucyIsImZvcndhcmREZWxheSIsImFuaW1hdGVDaGlsZHJlbiIsImZpcnN0IiwibGFzdCIsIm1heFN0YWdnZXJEdXJhdGlvbiIsImdlbmVyYXRlU3RhZ2dlckR1cmF0aW9uIiwic29ydCIsInNvcnRCeVRyZWVPcmRlciIsInNvcnROb2RlUG9zaXRpb24iLCJyZXNvbHZlZERlZmluaXRpb24iLCJyZXZlcnNlUHJpb3JpdHlPcmRlciIsIm51bUFuaW1hdGlvblR5cGVzIiwiYW5pbWF0ZUxpc3QiLCJjcmVhdGVBbmltYXRpb25TdGF0ZSIsImNyZWF0ZVN0YXRlIiwiaXNJbml0aWFsUmVuZGVyIiwiYnVpbGRSZXNvbHZlZFR5cGVWYWx1ZXMiLCJzZXRBbmltYXRlRnVuY3Rpb24iLCJtYWtlQW5pbWF0b3IiLCJjaGFuZ2VkQWN0aXZlVHlwZSIsImdldFZhcmlhbnRDb250ZXh0IiwicmVtb3ZlZEtleXMiLCJlbmNvdW50ZXJlZEtleXMiLCJyZW1vdmVkVmFyaWFudEluZGV4IiwidHlwZVN0YXRlIiwicHJvcElzVmFyaWFudCIsImFjdGl2ZURlbHRhIiwiaXNJbmhlcml0ZWQiLCJtYW51YWxseUFuaW1hdGVPbk1vdW50IiwicHJldlByb3AiLCJ2YXJpYW50RGlkQ2hhbmdlIiwiY2hlY2tWYXJpYW50c0RpZENoYW5nZSIsInNob3VsZEFuaW1hdGVUeXBlIiwiaGFuZGxlZFJlbW92ZWRWYWx1ZXMiLCJkZWZpbml0aW9uTGlzdCIsInJlc29sdmVkVmFsdWVzIiwicHJldlJlc29sdmVkVmFsdWVzIiwiYWxsS2V5cyIsIm1hcmtUb0FuaW1hdGUiLCJ2YWx1ZUhhc0NoYW5nZWQiLCJmYWxsYmFja0FuaW1hdGlvbiIsImZhbGxiYWNrVGFyZ2V0IiwiZ2V0QmFzZVRhcmdldCIsInNob3VsZEFuaW1hdGUiLCJfYTIiLCJjcmVhdGVUeXBlU3RhdGUiLCJ3aGlsZUluVmlldyIsIndoaWxlRHJhZyIsIndoaWxlRm9jdXMiLCJBbmltYXRpb25GZWF0dXJlIiwidXBkYXRlQW5pbWF0aW9uQ29udHJvbHNTdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJwcmV2QW5pbWF0ZSIsIkV4aXRBbmltYXRpb25GZWF0dXJlIiwiaXNQcmVzZW50IiwiaXNQcmVzZW50MiIsIm9uRXhpdENvbXBsZXRlIiwicHJldklzUHJlc2VudCIsInByZXZQcmVzZW5jZUNvbnRleHQiLCJleGl0QW5pbWF0aW9uIiwicmVnaXN0ZXIiLCJ4RGVsdGEiLCJ5RGVsdGEiLCJQYW5TZXNzaW9uIiwiaGFuZGxlcnMiLCJjb250ZXh0V2luZG93IiwiZHJhZ1NuYXBUb09yaWdpbiIsImxhc3RNb3ZlRXZlbnQiLCJsYXN0TW92ZUV2ZW50SW5mbyIsInVwZGF0ZVBvaW50IiwiaW5mbzIiLCJnZXRQYW5JbmZvIiwiaGlzdG9yeSIsImlzUGFuU3RhcnRlZCIsImlzRGlzdGFuY2VQYXN0VGhyZXNob2xkIiwicG9pbnQzIiwidGltZXN0YW1wMiIsIm9uU3RhcnQiLCJvbk1vdmUiLCJoYW5kbGVQb2ludGVyTW92ZSIsImV2ZW50MiIsInRyYW5zZm9ybVBvaW50IiwiaGFuZGxlUG9pbnRlclVwIiwiZW5kIiwib25FbmQiLCJvblNlc3Npb25FbmQiLCJyZXN1bWVBbmltYXRpb24iLCJwYW5JbmZvIiwiaW5pdGlhbEluZm8iLCJwb2ludDIiLCJvblNlc3Npb25TdGFydCIsInJlbW92ZUxpc3RlbmVycyIsInVwZGF0ZUhhbmRsZXJzIiwic3VidHJhY3RQb2ludCIsImxhc3REZXZpY2VQb2ludCIsInN0YXJ0RGV2aWNlUG9pbnQiLCJnZXRWZWxvY2l0eTIiLCJ0aW1lc3RhbXBlZFBvaW50IiwibGFzdFBvaW50IiwiYXhpcyIsImlzTmVhciIsIm1heERpc3RhbmNlIiwiY2FsY0F4aXNEZWx0YSIsIm9yaWdpblBvaW50IiwidHJhbnNsYXRlIiwiY2FsY0JveERlbHRhIiwiY2FsY1JlbGF0aXZlQXhpcyIsInJlbGF0aXZlIiwiY2FsY1JlbGF0aXZlQm94IiwiY2FsY1JlbGF0aXZlQXhpc1Bvc2l0aW9uIiwiY2FsY1JlbGF0aXZlUG9zaXRpb24iLCJhcHBseUNvbnN0cmFpbnRzIiwiZWxhc3RpYyIsImNhbGNSZWxhdGl2ZUF4aXNDb25zdHJhaW50cyIsImNhbGNSZWxhdGl2ZUNvbnN0cmFpbnRzIiwibGF5b3V0Qm94IiwiY2FsY1ZpZXdwb3J0QXhpc0NvbnN0cmFpbnRzIiwibGF5b3V0QXhpcyIsImNvbnN0cmFpbnRzQXhpcyIsImNhbGNWaWV3cG9ydENvbnN0cmFpbnRzIiwiY29uc3RyYWludHNCb3giLCJjYWxjT3JpZ2luMiIsInNvdXJjZUxlbmd0aCIsInRhcmdldExlbmd0aCIsInJlYmFzZUF4aXNDb25zdHJhaW50cyIsImNvbnN0cmFpbnRzIiwicmVsYXRpdmVDb25zdHJhaW50cyIsImRlZmF1bHRFbGFzdGljIiwicmVzb2x2ZURyYWdFbGFzdGljIiwiZHJhZ0VsYXN0aWMiLCJyZXNvbHZlQXhpc0VsYXN0aWMiLCJtaW5MYWJlbCIsIm1heExhYmVsIiwicmVzb2x2ZVBvaW50RWxhc3RpYyIsImxhYmVsIiwiY3JlYXRlQXhpc0RlbHRhIiwiY3JlYXRlRGVsdGEiLCJjcmVhdGVBeGlzIiwiZWFjaEF4aXMiLCJjb252ZXJ0Qm91bmRpbmdCb3hUb0JveCIsImNvbnZlcnRCb3hUb0JvdW5kaW5nQm94IiwidHJhbnNmb3JtQm94UG9pbnRzIiwidHJhbnNmb3JtUG9pbnQyIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwiaXNJZGVudGl0eVNjYWxlIiwic2NhbGUyIiwiaGFzU2NhbGUiLCJoYXNUcmFuc2Zvcm0iLCJoYXMyRFRyYW5zbGF0ZSIsImlzMkRUcmFuc2xhdGUiLCJzY2FsZVBvaW50IiwiZGlzdGFuY2VGcm9tT3JpZ2luIiwic2NhbGVkIiwiYXBwbHlQb2ludERlbHRhIiwiYm94U2NhbGUiLCJhcHBseUF4aXNEZWx0YSIsImFwcGx5Qm94RGVsdGEiLCJib3giLCJhcHBseVRyZWVEZWx0YXMiLCJ0cmVlU2NhbGUiLCJ0cmVlUGF0aCIsImlzU2hhcmVkVHJhbnNpdGlvbiIsInRyZWVMZW5ndGgiLCJwcm9qZWN0aW9uRGVsdGEiLCJkaXNwbGF5IiwibGF5b3V0U2Nyb2xsIiwidHJhbnNmb3JtQm94Iiwic25hcFRvRGVmYXVsdCIsIk51bWJlciIsImlzSW50ZWdlciIsInRyYW5zbGF0ZUF4aXMiLCJkaXN0YW5jZTIiLCJ0cmFuc2Zvcm1BeGlzIiwidHJhbnNmb3JtcyIsInNjYWxlS2V5Iiwib3JpZ2luS2V5IiwiYXhpc09yaWdpbiIsInhLZXlzIiwieUtleXMiLCJtZWFzdXJlVmlld3BvcnRCb3giLCJtZWFzdXJlUGFnZUJveCIsInJvb3RQcm9qZWN0aW9uTm9kZTIiLCJ2aWV3cG9ydEJveCIsInNjcm9sbDIiLCJnZXRDb250ZXh0V2luZG93Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZWxlbWVudERyYWdDb250cm9scyIsIlZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMiLCJvcGVuR2xvYmFsTG9jayIsImlzRHJhZ2dpbmciLCJjdXJyZW50RGlyZWN0aW9uIiwiaGFzTXV0YXRlZENvbnN0cmFpbnRzIiwib3JpZ2luRXZlbnQiLCJzbmFwVG9DdXJzb3IiLCJkcmFnU25hcFRvT3JpZ2luMiIsInBhdXNlQW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbiIsImRyYWdQcm9wYWdhdGlvbiIsIm9uRHJhZ1N0YXJ0IiwicmVzb2x2ZUNvbnN0cmFpbnRzIiwiaXNBbmltYXRpb25CbG9ja2VkIiwiZ2V0QXhpc01vdGlvblZhbHVlIiwibWVhc3VyZWRBeGlzIiwiZHJhZ0RpcmVjdGlvbkxvY2siLCJvbkRpcmVjdGlvbkxvY2siLCJvbkRyYWciLCJnZXRDdXJyZW50RGlyZWN0aW9uIiwidXBkYXRlQXhpcyIsImdldEFuaW1hdGlvblN0YXRlIiwicGFuU2Vzc2lvbiIsImdldFRyYW5zZm9ybVBhZ2VQb2ludCIsIm9uRHJhZ0VuZCIsIl9wb2ludCIsInNob3VsZERyYWciLCJheGlzVmFsdWUiLCJkcmFnQ29uc3RyYWludHMiLCJtZWFzdXJlIiwicHJldkNvbnN0cmFpbnRzIiwicmVzb2x2ZVJlZkNvbnN0cmFpbnRzIiwib25NZWFzdXJlRHJhZ0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHNFbGVtZW50IiwibWVhc3VyZWRDb25zdHJhaW50cyIsInVzZXJDb25zdHJhaW50cyIsImRyYWdNb21lbnR1bSIsImRyYWdUcmFuc2l0aW9uIiwib25EcmFnVHJhbnNpdGlvbkVuZCIsIm1vbWVudHVtQW5pbWF0aW9ucyIsImluZXJ0aWEyIiwic3RhcnRBeGlzVmFsdWVBbmltYXRpb24iLCJkcmFnS2V5IiwiZXh0ZXJuYWxNb3Rpb25WYWx1ZSIsInNjYWxlUG9zaXRpb25XaXRoaW5Db25zdHJhaW50cyIsImJveFByb2dyZXNzIiwidXBkYXRlU2Nyb2xsIiwidXBkYXRlTGF5b3V0IiwiYWRkTGlzdGVuZXJzIiwic3RvcFBvaW50ZXJMaXN0ZW5lciIsIm1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJzdG9wTWVhc3VyZUxheW91dExpc3RlbmVyIiwic3RvcFJlc2l6ZUxpc3RlbmVyIiwic3RvcExheW91dFVwZGF0ZUxpc3RlbmVyIiwiaGFzTGF5b3V0Q2hhbmdlZCIsIm1vdGlvblZhbHVlMiIsImxvY2tUaHJlc2hvbGQiLCJEcmFnR2VzdHVyZSIsInJlbW92ZUdyb3VwQ29udHJvbHMiLCJkcmFnQ29udHJvbHMiLCJhc3luY0hhbmRsZXIiLCJQYW5HZXN0dXJlIiwicmVtb3ZlUG9pbnRlckRvd25MaXN0ZW5lciIsIm9uUG9pbnRlckRvd24iLCJwb2ludGVyRG93bkV2ZW50Iiwic2Vzc2lvbiIsImNyZWF0ZVBhbkhhbmRsZXJzIiwib25QYW5TZXNzaW9uU3RhcnQiLCJvblBhblN0YXJ0Iiwib25QYW4iLCJvblBhbkVuZCIsImltcG9ydF9yZWFjdDE3IiwiaWQ0IiwidXNlSWQiLCJzYWZlVG9SZW1vdmUiLCJnbG9iYWxQcm9qZWN0aW9uU3RhdGUiLCJoYXNBbmltYXRlZFNpbmNlUmVzaXplIiwiaGFzRXZlclVwZGF0ZWQiLCJwaXhlbHNUb1BlcmNlbnQiLCJwaXhlbHMiLCJjb3JyZWN0Qm9yZGVyUmFkaXVzIiwiY29ycmVjdCIsImNvcnJlY3RCb3hTaGFkb3ciLCJvcmlnaW5hbCIsInNoYWRvdyIsInhTY2FsZSIsInlTY2FsZSIsImF2ZXJhZ2VTY2FsZSIsImltcG9ydF9yZWFjdDE4IiwiTWVhc3VyZUxheW91dFdpdGhDb250ZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJsYXlvdXRHcm91cCIsInN3aXRjaExheW91dEdyb3VwIiwiZGVmYXVsdFNjYWxlQ29ycmVjdG9ycyIsImdyb3VwIiwiZGlkVXBkYXRlIiwic2V0T3B0aW9ucyIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwibGF5b3V0RGVwZW5kZW5jeSIsIndpbGxVcGRhdGUiLCJwcm9tb3RlIiwicmVsZWdhdGUiLCJzdGFjayIsImdldFN0YWNrIiwibWVtYmVycyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInF1ZXVlTWljcm90YXNrIiwiY3VycmVudEFuaW1hdGlvbiIsImlzTGVhZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicHJvbW90ZUNvbnRleHQiLCJzY2hlZHVsZUNoZWNrQWZ0ZXJVbm1vdW50IiwiZGVyZWdpc3RlciIsIk1lYXN1cmVMYXlvdXQiLCJhcHBseVRvIiwiYm94U2hhZG93IiwiYm9yZGVycyIsIm51bUJvcmRlcnMiLCJhc051bWJlciIsImlzUHgiLCJtaXhWYWx1ZXMiLCJmb2xsb3ciLCJsZWFkIiwic2hvdWxkQ3Jvc3NmYWRlT3BhY2l0eSIsImlzT25seU1lbWJlciIsImVhc2VDcm9zc2ZhZGVJbiIsIm9wYWNpdHlFeGl0IiwiZWFzZUNyb3NzZmFkZU91dCIsImJvcmRlckxhYmVsIiwiZm9sbG93UmFkaXVzIiwiZ2V0UmFkaXVzIiwibGVhZFJhZGl1cyIsImNhbk1peCIsInJhZGl1c05hbWUiLCJjb21wcmVzcyIsImNvcHlBeGlzSW50byIsIm9yaWdpbkF4aXMiLCJjb3B5Qm94SW50byIsIm9yaWdpbkJveCIsInJlbW92ZVBvaW50RGVsdGEiLCJyZW1vdmVBeGlzRGVsdGEiLCJzb3VyY2VBeGlzIiwicmVsYXRpdmVQcm9ncmVzcyIsInJlbW92ZUF4aXNUcmFuc2Zvcm1zIiwieEtleXMyIiwieUtleXMyIiwicmVtb3ZlQm94VHJhbnNmb3JtcyIsInNvdXJjZUJveCIsImlzQXhpc0RlbHRhWmVybyIsImlzRGVsdGFaZXJvIiwiYm94RXF1YWxzIiwiYm94RXF1YWxzUm91bmRlZCIsImFzcGVjdFJhdGlvIiwiTm9kZVN0YWNrIiwic2NoZWR1bGVSZW5kZXIiLCJwcmV2TGVhZCIsImluZGV4T2ZOb2RlIiwiZmluZEluZGV4IiwibWVtYmVyIiwicHJlc2VydmVGb2xsb3dPcGFjaXR5Iiwic2hvdyIsInJlc3VtZUZyb20iLCJwcmVzZXJ2ZU9wYWNpdHkiLCJzbmFwc2hvdCIsImFuaW1hdGlvblZhbHVlcyIsImlzVXBkYXRpbmciLCJpc0xheW91dERpcnR5IiwiY3Jvc3NmYWRlIiwiaGlkZSIsImV4aXRBbmltYXRpb25Db21wbGV0ZSIsInJlc3VtaW5nRnJvbSIsInJlbW92ZUxlYWRTbmFwc2hvdCIsImJ1aWxkUHJvamVjdGlvblRyYW5zZm9ybSIsImxhdGVzdFRyYW5zZm9ybSIsInhUcmFuc2xhdGUiLCJ5VHJhbnNsYXRlIiwiZWxlbWVudFNjYWxlWCIsImVsZW1lbnRTY2FsZVkiLCJjb21wYXJlQnlEZXB0aCIsImRlcHRoIiwiaXNEaXJ0eSIsInRpbWVvdXQiLCJjaGVja0VsYXBzZWQiLCJyZWNvcmQiLCJkYXRhIiwiTW90aW9uRGVidWciLCJpc1NWR0VsZW1lbnQiLCJTVkdFbGVtZW50IiwiYW5pbWF0ZVNpbmdsZVZhbHVlIiwibW90aW9uVmFsdWUkMSIsInRyYW5zZm9ybUF4ZXMiLCJoaWRkZW5WaXNpYmlsaXR5IiwidmlzaWJpbGl0eSIsImFuaW1hdGlvblRhcmdldCIsImlkMiIsInByb2plY3Rpb25GcmFtZURhdGEiLCJ0b3RhbE5vZGVzIiwicmVzb2x2ZWRUYXJnZXREZWx0YXMiLCJyZWNhbGN1bGF0ZWRQcm9qZWN0aW9uIiwiY3JlYXRlUHJvamVjdGlvbk5vZGUiLCJhdHRhY2hSZXNpemVMaXN0ZW5lciIsImRlZmF1bHRQYXJlbnQiLCJtZWFzdXJlU2Nyb2xsIiwiY2hlY2tJc1Njcm9sbFJvb3QiLCJyZXNldFRyYW5zZm9ybSIsIlByb2plY3Rpb25Ob2RlIiwiYW5pbWF0aW9uSWQiLCJpc1RyZWVBbmltYXRpbmciLCJpc1Byb2plY3Rpb25EaXJ0eSIsImlzU2hhcmVkUHJvamVjdGlvbkRpcnR5IiwiaXNUcmFuc2Zvcm1EaXJ0eSIsInVwZGF0ZU1hbnVhbGx5QmxvY2tlZCIsInVwZGF0ZUJsb2NrZWRCeVJlc2l6ZSIsImlzU1ZHIiwibmVlZHNSZXNldCIsInNob3VsZFJlc2V0VHJhbnNmb3JtIiwiZXZlbnRIYW5kbGVycyIsImhhc1RyZWVBbmltYXRlZCIsInVwZGF0ZVNjaGVkdWxlZCIsInByb2plY3Rpb25VcGRhdGVTY2hlZHVsZWQiLCJjaGVja1VwZGF0ZUZhaWxlZCIsImNsZWFyQWxsU25hcHNob3RzIiwidXBkYXRlUHJvamVjdGlvbiIsIm5vZGVzIiwicHJvcGFnYXRlRGlydHlOb2RlcyIsInJlc29sdmVUYXJnZXREZWx0YSIsImNhbGNQcm9qZWN0aW9uIiwiY2xlYW5EaXJ0eU5vZGVzIiwiaGFzUHJvamVjdGVkIiwiaXNWaXNpYmxlIiwiYW5pbWF0aW9uUHJvZ3Jlc3MiLCJzaGFyZWROb2RlcyIsInBhdGgiLCJub3RpZnlMaXN0ZW5lcnMiLCJhcmdzIiwic3Vic2NyaXB0aW9uTWFuYWdlciIsImhhc0xpc3RlbmVycyIsImNhbmNlbERlbGF5IiwicmVzaXplVW5ibG9ja1VwZGF0ZSIsImZpbmlzaEFuaW1hdGlvbiIsInJlZ2lzdGVyU2hhcmVkTm9kZSIsImhhc1JlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsIm5ld0xheW91dCIsImlzVHJlZUFuaW1hdGlvbkJsb2NrZWQiLCJyZWxhdGl2ZVRhcmdldCIsImxheW91dFRyYW5zaXRpb24iLCJkZWZhdWx0TGF5b3V0VHJhbnNpdGlvbiIsIm9uTGF5b3V0QW5pbWF0aW9uU3RhcnQiLCJvbkxheW91dEFuaW1hdGlvbkNvbXBsZXRlIiwidGFyZ2V0Q2hhbmdlZCIsInRhcmdldExheW91dCIsImhhc09ubHlSZWxhdGl2ZVRhcmdldENoYW5nZWQiLCJsYXlvdXRSb290Iiwic2V0QW5pbWF0aW9uT3JpZ2luIiwiYW5pbWF0aW9uT3B0aW9ucyIsImJsb2NrVXBkYXRlIiwidW5ibG9ja1VwZGF0ZSIsImlzVXBkYXRlQmxvY2tlZCIsInN0YXJ0VXBkYXRlIiwicmVzZXRSb3RhdGlvbiIsImdldFRyYW5zZm9ybVRlbXBsYXRlIiwic2hvdWxkTm90aWZ5TGlzdGVuZXJzIiwicHJldlRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ1cGRhdGVTbmFwc2hvdCIsInVwZGF0ZVdhc0Jsb2NrZWQiLCJjbGVhck1lYXN1cmVtZW50cyIsImNsZWFySXNMYXlvdXREaXJ0eSIsInJlc2V0VHJhbnNmb3JtU3R5bGUiLCJub3RpZnlMYXlvdXRVcGRhdGUiLCJwcmVSZW5kZXIiLCJjbGVhclNuYXBzaG90IiwicmVtb3ZlTGVhZFNuYXBzaG90cyIsInNjaGVkdWxlVXBkYXRlUHJvamVjdGlvbiIsImFsd2F5c01lYXN1cmVMYXlvdXQiLCJwcmV2TGF5b3V0IiwibGF5b3V0Q29ycmVjdGVkIiwicGhhc2UiLCJuZWVkc01lYXN1cmVtZW50IiwiaXNSb290IiwiaXNSZXNldFJlcXVlc3RlZCIsImhhc1Byb2plY3Rpb24iLCJ0cmFuc2Zvcm1UZW1wbGF0ZVZhbHVlIiwidHJhbnNmb3JtVGVtcGxhdGVIYXNDaGFuZ2VkIiwicmVtb3ZlVHJhbnNmb3JtIiwicGFnZUJveCIsInJlbW92ZUVsZW1lbnRTY3JvbGwiLCJyb3VuZEJveCIsIm1lYXN1cmVkQm94IiwiYm94V2l0aG91dFNjcm9sbCIsInJvb3RTY3JvbGwiLCJhcHBseVRyYW5zZm9ybSIsInRyYW5zZm9ybU9ubHkiLCJ3aXRoVHJhbnNmb3JtcyIsImJveFdpdGhvdXRUcmFuc2Zvcm0iLCJub2RlQm94Iiwic2V0VGFyZ2V0RGVsdGEiLCJ0YXJnZXREZWx0YSIsImZvcmNlUmVsYXRpdmVQYXJlbnRUb1Jlc29sdmVUYXJnZXQiLCJyZWxhdGl2ZVBhcmVudCIsInJlc29sdmVkUmVsYXRpdmVUYXJnZXRBdCIsImZvcmNlUmVjYWxjdWxhdGlvbiIsImdldExlYWQiLCJpc1NoYXJlZCIsImF0dGVtcHRUb1Jlc29sdmVSZWxhdGl2ZVRhcmdldCIsImdldENsb3Nlc3RQcm9qZWN0aW5nUGFyZW50IiwicmVsYXRpdmVUYXJnZXRPcmlnaW4iLCJ0YXJnZXRXaXRoVHJhbnNmb3JtcyIsImlzUHJvamVjdGluZyIsInBlbmRpbmdBbmltYXRpb24iLCJwcmV2VHJlZVNjYWxlWCIsInByZXZUcmVlU2NhbGVZIiwicHJvamVjdGlvblRyYW5zZm9ybSIsInByb2plY3Rpb25EZWx0YVdpdGhUcmFuc2Zvcm0iLCJwcmV2UHJvamVjdGlvblRyYW5zZm9ybSIsIm5vdGlmeUFsbDIiLCJzbmFwc2hvdExhdGVzdFZhbHVlcyIsIm1peGVkVmFsdWVzIiwicmVsYXRpdmVMYXlvdXQiLCJzbmFwc2hvdFNvdXJjZSIsImxheW91dFNvdXJjZSIsImlzU2hhcmVkTGF5b3V0QW5pbWF0aW9uIiwiaGFzT3BhY2l0eUNyb3NzZmFkZSIsInByZXZSZWxhdGl2ZVRhcmdldCIsIm1peFRhcmdldERlbHRhIiwibWl4QXhpc0RlbHRhIiwibWl4Qm94IiwiY29tcGxldGVBbmltYXRpb24iLCJhcHBseVRyYW5zZm9ybXNUb1RhcmdldCIsInNob3VsZEFuaW1hdGVQb3NpdGlvbk9ubHkiLCJhbmltYXRpb25UeXBlIiwieExlbmd0aCIsInlMZW5ndGgiLCJpbml0aWFsUHJvbW90aW9uQ29uZmlnIiwic2hvdWxkUHJlc2VydmVGb2xsb3dPcGFjaXR5IiwiZ2V0UHJldkxlYWQiLCJoYXNSb3RhdGUiLCJyZXNldFZhbHVlcyIsInNldFN0YXRpY1ZhbHVlIiwic3R5bGVzIiwicG9pbnRlckV2ZW50cyIsImVtcHR5U3R5bGVzIiwidmFsdWVzVG9SZW5kZXIiLCJjb3JyZWN0ZWQiLCJudW0iLCJyZXNldFRyZWUiLCJtZWFzdXJlZExheW91dCIsImF4aXNTbmFwc2hvdCIsImxheW91dERlbHRhIiwidmlzdWFsRGVsdGEiLCJwYXJlbnRTbmFwc2hvdCIsInBhcmVudExheW91dCIsInJlbGF0aXZlU25hcHNob3QiLCJvbkJlZm9yZUxheW91dE1lYXN1cmUiLCJtaXhBeGlzIiwidXNlckFnZW50Q29udGFpbnMiLCJzdHJpbmciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJyb3VuZFBvaW50Iiwicm91bmRBeGlzIiwiRG9jdW1lbnRQcm9qZWN0aW9uTm9kZSIsIm5vdGlmeTIiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxMZWZ0IiwiYm9keSIsInNjcm9sbFRvcCIsInJvb3RQcm9qZWN0aW9uTm9kZSIsIkhUTUxQcm9qZWN0aW9uTm9kZSIsImRvY3VtZW50Tm9kZSIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsInNwbGl0Q1NTVmFyaWFibGVSZWdleCIsInBhcnNlQ1NTVmFyaWFibGUiLCJleGVjIiwiZmFsbGJhY2siLCJtYXhEZXB0aCIsImdldFZhcmlhYmxlVmFsdWUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJpbW1lZCIsInJlc29sdmVDU1NWYXJpYWJsZXMiLCJwb3NpdGlvbmFsS2V5cyIsImlzUG9zaXRpb25hbEtleSIsImhhc1Bvc2l0aW9uYWxLZXkiLCJpc051bU9yUHhUeXBlIiwiZ2V0UG9zRnJvbU1hdHJpeCIsIm1hdHJpeCIsInBvcyIsImdldFRyYW5zbGF0ZUZyb21NYXRyaXgiLCJwb3MyIiwicG9zMyIsIl9iYm94IiwibWF0cml4M2QiLCJ0cmFuc2Zvcm1LZXlzIiwibm9uVHJhbnNsYXRpb25hbFRyYW5zZm9ybUtleXMiLCJyZW1vdmVOb25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtIiwicmVtb3ZlZFRyYW5zZm9ybXMiLCJwb3NpdGlvbmFsVmFsdWVzIiwiY29udmVydENoYW5nZWRWYWx1ZVR5cGVzIiwiY2hhbmdlZEtleXMiLCJvcmlnaW5CYm94IiwiZWxlbWVudENvbXB1dGVkU3R5bGUiLCJ0YXJnZXRCYm94IiwiY2hlY2tBbmRDb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMiLCJ0YXJnZXRQb3NpdGlvbmFsS2V5cyIsInJlbW92ZWRUcmFuc2Zvcm1WYWx1ZXMiLCJoYXNBdHRlbXB0ZWRUb1JlbW92ZVRyYW5zZm9ybVZhbHVlcyIsImNoYW5nZWRWYWx1ZVR5cGVLZXlzIiwiZnJvbVR5cGUiLCJ0b1R5cGUiLCJudW1LZXlmcmFtZXMiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJjb252ZXJ0ZWRUYXJnZXQiLCJzY3JvbGxUbyIsInVuaXRDb252ZXJzaW9uIiwicGFyc2VEb21WYXJpYW50IiwicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJoYXNSZWR1Y2VkTW90aW9uTGlzdGVuZXIiLCJpbml0UHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJtYXRjaE1lZGlhIiwibW90aW9uTWVkaWFRdWVyeSIsInNldFJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlcyIsImFkZExpc3RlbmVyIiwidXBkYXRlTW90aW9uVmFsdWVzRnJvbVByb3BzIiwibmV4dFZhbHVlIiwicHJldlZhbHVlIiwiZXhpc3RpbmdWYWx1ZSIsImxhdGVzdFZhbHVlIiwiZ2V0U3RhdGljVmFsdWUiLCJyZW1vdmVWYWx1ZSIsImZlYXR1cmVOYW1lcyIsIm51bUZlYXR1cmVzIiwicHJvcEV2ZW50SGFuZGxlcnMiLCJudW1WYXJpYW50UHJvcHMiLCJ2YWx1ZVN1YnNjcmlwdGlvbnMiLCJwcmV2TW90aW9uVmFsdWVzIiwicHJvcEV2ZW50U3Vic2NyaXB0aW9ucyIsIm5vdGlmeVVwZGF0ZSIsInRyaWdnZXJCdWlsZCIsInJlbmRlckluc3RhbmNlIiwiYmFzZVRhcmdldCIsImluaXRpYWxWYWx1ZXMiLCJpbml0aWFsTW90aW9uVmFsdWVzIiwiX3Byb3BzIiwiX3ByZXZQcm9wcyIsInJlbW92ZUZyb21WYXJpYW50VHJlZSIsImFkZFZhcmlhbnRDaGlsZCIsImJpbmRUb01vdGlvblZhbHVlIiwidmFsdWVJc1RyYW5zZm9ybSIsInJlbW92ZU9uQ2hhbmdlIiwicmVtb3ZlT25SZW5kZXJSZXF1ZXN0Iiwib3RoZXIiLCJzb3J0SW5zdGFuY2VOb2RlUG9zaXRpb24iLCJyZW5kZXJlZFByb3BzIiwiUHJvamVjdGlvbk5vZGVDb25zdHJ1Y3RvciIsInN0cmljdE1lc3NhZ2UiLCJpZ25vcmVTdHJpY3QiLCJGZWF0dXJlQ29uc3RydWN0b3IiLCJNZWFzdXJlTGF5b3V0Q29tcG9uZW50IiwiZmVhdHVyZSIsImJ1aWxkIiwibWVhc3VyZUluc3RhbmNlVmlld3BvcnRCb3giLCJjYW5NdXRhdGUiLCJtYWtlVGFyZ2V0QW5pbWF0YWJsZUZyb21JbnN0YW5jZSIsImxpc3RlbmVyIiwiaGFuZGxlQ2hpbGRNb3Rpb25WYWx1ZSIsImdldENsb3Nlc3RWYXJpYW50Tm9kZSIsInN0YXJ0QXRQYXJlbnQiLCJjb250ZXh0MiIsImNsb3Nlc3RWYXJpYW50Tm9kZSIsInJlbW92ZVZhbHVlRnJvbVJlbmRlclN0YXRlIiwiZ2V0QmFzZVRhcmdldEZyb21Qcm9wcyIsInJlYWRWYWx1ZUZyb21JbnN0YW5jZSIsInZhbHVlRnJvbUluaXRpYWwiLCJET01WaXN1YWxFbGVtZW50IiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJnZXRDb21wdXRlZFN0eWxlMiIsIkhUTUxWaXN1YWxFbGVtZW50IiwiZGVmYXVsdFR5cGUiLCJjb21wdXRlZFN0eWxlIiwiY2hpbGRTdWJzY3JpcHRpb24iLCJ0ZXh0Q29udGVudCIsIlNWR1Zpc3VhbEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJjcmVhdGVEb21WaXN1YWxFbGVtZW50IiwiaW1wb3J0X3JlYWN0MTkiLCJ1c2VJc01vdW50ZWQiLCJpbXBvcnRfcmVhY3QyMCIsImZvcmNlZFJlbmRlckNvdW50Iiwic2V0Rm9yY2VkUmVuZGVyQ291bnQiLCJ1c2VTdGF0ZSIsImZvcmNlUmVuZGVyIiwiZGVmZXJyZWRGb3JjZVJlbmRlciIsIlJlYWN0MiIsImltcG9ydF9yZWFjdDIxIiwiUG9wQ2hpbGRNZWFzdXJlIiwiY2hpbGRSZWYiLCJzaXplUmVmIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwiUG9wQ2hpbGQiLCJkYXRhc2V0IiwibW90aW9uUG9wSWQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZW1vdmVDaGlsZCIsImNsb25lRWxlbWVudCIsIlJlYWN0MyIsImltcG9ydF9yZWFjdDIyIiwiUHJlc2VuY2VDaGlsZCIsInByZXNlbmNlQWZmZWN0c0xheW91dCIsIm1vZGUiLCJwcmVzZW5jZUNoaWxkcmVuIiwibmV3Q2hpbGRyZW5NYXAiLCJjaGlsZElkIiwiaXNDb21wbGV0ZSIsIl8iLCJpbXBvcnRfcmVhY3QyMyIsIlJlYWN0NCIsImltcG9ydF9yZWFjdDI0IiwiZ2V0Q2hpbGRLZXkiLCJ1cGRhdGVDaGlsZExvb2t1cCIsImFsbENoaWxkcmVuIiwib25seUVsZW1lbnRzIiwiZmlsdGVyZWQiLCJDaGlsZHJlbiIsImlzVmFsaWRFbGVtZW50IiwiZXhpdEJlZm9yZUVudGVyIiwiZmlsdGVyZWRDaGlsZHJlbiIsImNoaWxkcmVuVG9SZW5kZXIiLCJleGl0aW5nQ2hpbGRyZW4iLCJwcmVzZW50Q2hpbGRyZW4iLCJGcmFnbWVudCIsInByZXNlbnRLZXlzIiwidGFyZ2V0S2V5cyIsIm51bVByZXNlbnQiLCJjb21wb25lbnQiLCJpbnNlcnRpb25JbmRleCIsImV4aXRpbmdDb21wb25lbnQiLCJvbkV4aXQiLCJsZWZ0T3ZlcktleXMiLCJjaGlsZEtleSIsImxlZnRPdmVyS2V5IiwicHJlc2VudENoaWxkIiwicHJlc2VudENoaWxkS2V5IiwiUmVhY3Q1IiwiaW1wb3J0X3JlYWN0MjUiLCJSZWFjdDYiLCJpbXBvcnRfcmVhY3QyNiIsInNldElzTG9hZGVkIiwiaXNMYXp5QnVuZGxlIiwibG9hZGVkUmVuZGVyZXIiLCJsb2FkZWRGZWF0dXJlcyIsImltcG9ydF9yZWFjdDI3Iiwibm9kZUdyb3VwIiwiZGlydHlBbGwiLCJkaXJ0eSIsIlJlYWN0NyIsImltcG9ydF9yZWFjdDI4Iiwic2hvdWxkSW5oZXJpdEdyb3VwIiwic2hvdWxkSW5oZXJpdElkIiwibGF5b3V0R3JvdXBDb250ZXh0IiwiZGVwcmVjYXRlZExheW91dEdyb3VwQ29udGV4dCIsInVwc3RyZWFtSWQiLCJtZW1vaXplZENvbnRleHQiLCJpbXBvcnRfcmVhY3QyOSIsIlJlb3JkZXJDb250ZXh0IiwiY2hlY2tSZW9yZGVyIiwiaXRlbTIiLCJuZXh0T2Zmc2V0IiwibmV4dEl0ZW0iLCJuZXh0TGF5b3V0IiwibmV4dEl0ZW1DZW50ZXIiLCJSZWFjdDgiLCJpbXBvcnRfcmVhY3QzMCIsIlJlb3JkZXJHcm91cCIsImFzIiwib25SZW9yZGVyIiwiaXNSZW9yZGVyaW5nIiwicmVnaXN0ZXJJdGVtIiwiaWR4IiwiY29tcGFyZU1pbiIsInVwZGF0ZU9yZGVyIiwibmV3T3JkZXIiLCJHcm91cCIsImltcG9ydF9yZWFjdDMxIiwic2V0TGF0ZXN0IiwiaXNDdXN0b21WYWx1ZVR5cGUiLCJnZXRNaXhlcjIiLCJ1c2VJbW1lZGlhdGUiLCJhcmdPZmZzZXQiLCJpbnB1dFZhbHVlIiwiaW5wdXRSYW5nZSIsIm91dHB1dFJhbmdlIiwidXNlQ29tYmluZU1vdGlvblZhbHVlcyIsImNvbWJpbmVWYWx1ZXMiLCJ1cGRhdGVWYWx1ZSIsInNjaGVkdWxlVXBkYXRlIiwidXNlQ29tcHV0ZWQiLCJjb21wdXRlIiwiaW5wdXRSYW5nZU9yVHJhbnNmb3JtZXIiLCJ1c2VMaXN0VHJhbnNmb3JtIiwiUmVhY3Q5IiwiaW1wb3J0X3JlYWN0MzIiLCJ1c2VEZWZhdWx0TW90aW9uVmFsdWUiLCJSZW9yZGVySXRlbSIsImxhdGVzdFgiLCJsYXRlc3RZIiwiZ2VzdHVyZVBvaW50Iiwib25MYXlvdXRNZWFzdXJlIiwibWVhc3VyZWQiLCJJdGVtIiwiZnJhZ21lbnRzIiwibnVtRnJhZ21lbnRzIiwiYnVpbGRWYWx1ZSIsImltcG9ydF9yZWFjdDMzIiwiYWN0aXZlU3ByaW5nQW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbjIiLCJpbXBvcnRfcmVhY3QzNCIsIm5ld1ZlbG9jaXR5IiwicmVzb2x2ZUVsZW1lbnRzIiwiZWxlbWVudHMiLCJzY29wZSIsInNlbGVjdG9yQ2FjaGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVzaXplSGFuZGxlcnMiLCJvYnNlcnZlciIsImdldEVsZW1lbnRTaXplIiwiYm9yZGVyQm94U2l6ZSIsImlubGluZVNpemUiLCJibG9ja1NpemUiLCJub3RpZnlUYXJnZXQiLCJjb250ZW50UmVjdCIsImNvbnRlbnRTaXplIiwibm90aWZ5QWxsIiwiY3JlYXRlUmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsInJlc2l6ZUVsZW1lbnQiLCJlbGVtZW50SGFuZGxlcnMiLCJ3aW5kb3dDYWxsYmFja3MiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiY3JlYXRlV2luZG93UmVzaXplSGFuZGxlciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlc2l6ZVdpbmRvdyIsInJlc2l6ZSIsIm1heEVsYXBzZWQyIiwiY3JlYXRlQXhpc0luZm8iLCJzY3JvbGxMZW5ndGgiLCJ0YXJnZXRPZmZzZXQiLCJjb250YWluZXJMZW5ndGgiLCJjcmVhdGVTY3JvbGxJbmZvIiwidXBkYXRlQXhpc0luZm8iLCJheGlzTmFtZSIsInByZXZUaW1lIiwidXBkYXRlU2Nyb2xsSW5mbyIsImNhbGNJbnNldCIsImNvbnRhaW5lciIsImluc2V0Iiwib2Zmc2V0UGFyZW50Iiwic3ZnQm91bmRpbmdCb3giLCJwYXJlbnRCb3VuZGluZ0JveCIsIlNWR0dyYXBoaWNzRWxlbWVudCIsInN2ZyIsInBhcmVudE5vZGUiLCJTY3JvbGxPZmZzZXQiLCJFbnRlciIsIkV4aXQiLCJBbnkiLCJBbGwiLCJuYW1lZEVkZ2VzIiwiY2VudGVyIiwicmVzb2x2ZUVkZ2UiLCJlZGdlIiwiYXNOdW1iZXIyIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkZWZhdWx0T2Zmc2V0MiIsInJlc29sdmVPZmZzZXQiLCJ0YXJnZXRJbnNldCIsIm9mZnNldERlZmluaXRpb24iLCJ0YXJnZXRQb2ludCIsImNvbnRhaW5lclBvaW50IiwiZ2V0VGFyZ2V0U2l6ZSIsInJlc29sdmVPZmZzZXRzIiwibGVuZ3RoTGFiZWwiLCJ0YXJnZXRTaXplIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJjb250YWluZXJTaXplIiwiaGFzQ2hhbmdlZCIsIm51bU9mZnNldHMiLCJpbnRlcnBvbGF0b3JPZmZzZXRzIiwiY3JlYXRlT25TY3JvbGxIYW5kbGVyIiwib25TY3JvbGwiLCJzY3JvbGxMaXN0ZW5lcnMiLCJyZXNpemVMaXN0ZW5lcnMiLCJvblNjcm9sbEhhbmRsZXJzIiwiZ2V0RXZlbnRUYXJnZXQiLCJjb250YWluZXJIYW5kbGVycyIsImNvbnRhaW5lckhhbmRsZXIiLCJtZWFzdXJlQWxsIiwidXBkYXRlQWxsIiwibGlzdGVuZXIyIiwiY3VycmVudEhhbmRsZXJzIiwic2Nyb2xsTGlzdGVuZXIiLCJpbXBvcnRfcmVhY3QzNSIsInJlZldhcm5pbmciLCJjcmVhdGVTY3JvbGxNb3Rpb25WYWx1ZXMiLCJzY3JvbGxYIiwic2Nyb2xsWFByb2dyZXNzIiwic2Nyb2xsWVByb2dyZXNzIiwibGF5b3V0RWZmZWN0IiwidXNlTGlmZWN5Y2xlRWZmZWN0IiwiaW1wb3J0X3JlYWN0MzYiLCJpbml0aWFsVGltZXN0YW1wIiwicHJvdmlkZVRpbWVTaW5jZVN0YXJ0IiwiV2lsbENoYW5nZU1vdGlvblZhbHVlIiwibWVtYmVyTmFtZSIsImltcG9ydF9yZWFjdDM3IiwiaW1wb3J0X3JlYWN0MzgiLCJyZWR1Y2VkTW90aW9uUHJlZmVyZW5jZSIsImhhc01vdW50ZWQiLCJzdWJzY3JpYmVycyIsIm9ic2VydmVUaW1lbGluZSIsInByZXZQcm9ncmVzcyIsIm9uRnJhbWUiLCJwZXJjZW50YWdlIiwic3VwcG9ydHNTY3JvbGxUaW1lbGluZSIsIlNjcm9sbFRpbWVsaW5lIiwiR3JvdXBQbGF5YmFja0NvbnRyb2xzIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJjYXRjaCIsImdldEFsbCIsInByb3BOYW1lIiwic2V0QWxsIiwibmV3VmFsdWUiLCJjYW5jZWxBbGwiLCJjYW5jZWxUaW1lbGluZSIsInJ1bkFsbCIsIm1ldGhvZE5hbWUiLCJpc0RPTUtleWZyYW1lcyIsImNyZWF0ZUdlbmVyYXRvckVhc2luZyIsImNhbGNOZXh0VGltZSIsImxhYmVscyIsInJhbmdlU2l6ZSIsImdldEVhc2luZ0ZvclNlZ21lbnQiLCJlcmFzZUtleWZyYW1lcyIsInNlcXVlbmNlIiwiZW5kVGltZSIsImtleWZyYW1lIiwiYXQiLCJhZGRLZXlmcmFtZXMiLCJjb21wYXJlQnlUaW1lIiwiZGVmYXVsdFNlZ21lbnRFYXNpbmciLCJjcmVhdGVBbmltYXRpb25zRnJvbVNlcXVlbmNlIiwiZGVmYXVsdFRyYW5zaXRpb24iLCJzZXF1ZW5jZVRyYW5zaXRpb24iLCJkZWZhdWx0RHVyYXRpb24iLCJhbmltYXRpb25EZWZpbml0aW9ucyIsInNlcXVlbmNlcyIsImVsZW1lbnRDYWNoZSIsInRpbWVMYWJlbHMiLCJzZWdtZW50Iiwic3ViamVjdCIsIm1heER1cmF0aW9uMyIsInJlc29sdmVWYWx1ZVNlcXVlbmNlIiwidmFsdWVLZXlmcmFtZXMiLCJ2YWx1ZVNlcXVlbmNlIiwiZWxlbWVudEluZGV4IiwibnVtRWxlbWVudHMiLCJ2YWx1ZUtleWZyYW1lc0FzTGlzdCIsImtleWZyYW1lc0FzTGlzdCIsInJlbWFpbmluZ1RyYW5zaXRpb24iLCJjYWxjdWxhdGVkRGVsYXkiLCJhYnNvbHV0ZURlbHRhIiwiaXNOdW1iZXJLZXlmcmFtZXNBcnJheSIsInNwcmluZ1RyYW5zaXRpb24iLCJzcHJpbmdFYXNpbmciLCJ0YXJnZXRUaW1lIiwicmVtYWluZGVyIiwidW5zaGlmdCIsInN1YmplY3RTZXF1ZW5jZSIsImdldFN1YmplY3RTZXF1ZW5jZSIsImdldFZhbHVlU2VxdWVuY2UiLCJnZXRWYWx1ZVRyYW5zaXRpb24yIiwidmFsdWVTZXF1ZW5jZXMiLCJ2YWx1ZU9mZnNldCIsInZhbHVlRWFzaW5nIiwiaXNOdW1iZXIiLCJhbmltYXRlRWxlbWVudHMiLCJlbGVtZW50T3JTZWxlY3RvciIsImlzU2VxdWVuY2UiLCJhbmltYXRlU2VxdWVuY2UiLCJzY29wZWRBbmltYXRlIiwidmFsdWVPckVsZW1lbnRPclNlcXVlbmNlIiwiaW1wb3J0X3JlYWN0MzkiLCJpdGVtcyIsInNldEl0ZW0iLCJydW5DeWNsZSIsInRocmVzaG9sZHMiLCJhY3RpdmVJbnRlcnNlY3Rpb25zIiwib25JbnRlcnNlY3Rpb25DaGFuZ2UiLCJuZXdPbkVuZCIsIm9ic2VydmVyMiIsImRpc2Nvbm5lY3QiLCJpbXBvcnRfcmVhY3Q0MCIsInNldEluVmlldyIsIm9uRW50ZXIiLCJjb21wb25lbnRDb250cm9scyIsIm5hdGl2ZUV2ZW50IiwiY3JlYXRlRHJhZ0NvbnRyb2xzIiwiaW1wb3J0X3JlYWN0NDEiLCJzdGFydFRyYW5zaXRpb24iLCJpbXBvcnRfcmVhY3Q0MiIsImZvcmNlVXBkYXRlIiwic3RhcnRJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVubG9ja09uRnJhbWVSZWYiLCJSZWFjdDEwIiwicmVzZXQiLCJhcHBlYXJTdG9yZUlkIiwiYXBwZWFyQW5pbWF0aW9uU3RvcmUiLCJoYW5kb2ZmRnJhbWVUaW1lIiwiaGFuZG9mZk9wdGltaXplZEFwcGVhckFuaW1hdGlvbiIsImVsZW1lbnRJZCIsIl92YWx1ZSIsIl9mcmFtZSIsIm9wdGltaXNlZFZhbHVlTmFtZSIsInN0b3JlSWQiLCJvcHRpbWlzZWRBbmltYXRpb24iLCJlcnJvciIsInN0YXJ0RnJhbWVUaW1lIiwicmVhZHlBbmltYXRpb24iLCJvblJlYWR5IiwiYXBwZWFyQW5pbWF0aW9uIiwicmVhZHkiLCJpbXBvcnRfcmVhY3Q0MyIsImNyZWF0ZU9iamVjdCIsIlN0YXRlVmlzdWFsRWxlbWVudCIsInJlc3RvcmVUcmFuc2Zvcm0iLCJfc3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXRBbmltYXRpb25TdGF0ZSIsImFuaW1hdGlvbkRlZmluaXRpb24iLCJpbXBvcnRfcmVhY3Q0NCIsIm1heFNjYWxlIiwiaW52ZXJ0U2NhbGUiLCJoYXNXYXJuZWQiLCJwYXJlbnRTY2FsZVgiLCJwYXJlbnRTY2FsZVkiLCJSZWFjdDExIiwiaWQzIiwic2Nyb2xsVGltZWxpbmVGYWxsYmFjayIsInRpbWVsaW5lQ2FjaGUiLCJnZXRUaW1lbGluZSIsImdldE9yaWdpbkluZGV4IiwidG90YWwiLCJsYXN0SW5kZXgiLCJzdGFydERlbGF5Iiwi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QSxLQUFBQSxZQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLHdCQUFBLEVBQUFBLENBQUEsS0FBQUEsd0JBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLENBQUEsRUFBQUEsQ0FBQSxLQUFBQSxDQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsNEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSw0QkFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxFQUFBLEVBQUFBLENBQUEsS0FBQUEsRUFBQTtFQUFBQyxrQkFBQSxFQUFB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Q0FBdUI7TUFBRXZ4RCxNQUFBO01BQVFvMkI7SUFBSyxDQUFDO0VBQ2pEO0VBQ0EsT0FBT3cxQixZQUFBLENBQWF4MUIsSUFBSTtBQUM1QjtBQUNBLFNBQVM3cEMsT0FBT2k3RCxRQUFBLEVBQVVyb0QsT0FBQSxFQUFTO0VBQy9CLE1BQU1zbkIsUUFBQSxHQUFXZ3JDLFdBQUEsQ0FBWXR5RCxPQUFPO0VBQ3BDLElBQUksT0FBT3FvRCxRQUFBLEtBQWEsWUFBWTtJQUNoQyxPQUFPOEIsZUFBQSxDQUFnQjlCLFFBQUEsRUFBVS9nQyxRQUFRO0VBQzdDLE9BQ0s7SUFDRCxPQUFPK2dDLFFBQUEsQ0FBU2hoQyxjQUFBLENBQWVDLFFBQVE7RUFDM0M7QUFDSjs7O0FDL0JBLFNBQVNpckMsZUFBZXQ1QyxJQUFBLEVBQU11NUMsS0FBQSxFQUFPO0VBQ2pDLElBQUl2NUMsSUFBQSxLQUFTLFNBQVM7SUFDbEIsT0FBTztFQUNYLE9BQ0s7SUFDRCxNQUFNdzVDLFNBQUEsR0FBWUQsS0FBQSxHQUFRO0lBQzFCLE9BQU92NUMsSUFBQSxLQUFTLFNBQVN3NUMsU0FBQSxHQUFZQSxTQUFBLEdBQVk7RUFDckQ7QUFDSjtBQUNBLFNBQVNsbEUsUUFBUTRuQixRQUFBLEdBQVcsS0FBSztFQUFFdTlDLFVBQUEsR0FBYTtFQUFHejVDLElBQUEsR0FBTztFQUFHckUsSUFBQSxFQUFBVTtBQUFLLElBQUksQ0FBQyxHQUFHO0VBQ3RFLE9BQU8sQ0FBQ2hiLENBQUEsRUFBR2s0RCxLQUFBLEtBQVU7SUFDakIsTUFBTXBuQyxTQUFBLEdBQVksT0FBT25TLElBQUEsS0FBUyxXQUFXQSxJQUFBLEdBQU9zNUMsY0FBQSxDQUFldDVDLElBQUEsRUFBTXU1QyxLQUFLO0lBQzlFLE1BQU05MkIsU0FBQSxHQUFXeGdDLElBQUEsQ0FBS3diLEdBQUEsQ0FBSTBVLFNBQUEsR0FBWTl3QixDQUFDO0lBQ3ZDLElBQUk0YSxNQUFBLEdBQVFDLFFBQUEsR0FBV3VtQixTQUFBO0lBQ3ZCLElBQUlwbUIsS0FBQSxFQUFNO01BQ04sTUFBTXE5QyxRQUFBLEdBQVdILEtBQUEsR0FBUXI5QyxRQUFBO01BQ3pCLE1BQU00SCxjQUFBLEdBQWlCM0YsMEJBQUEsQ0FBMkI5QixLQUFJO01BQ3RESixNQUFBLEdBQVE2SCxjQUFBLENBQWU3SCxNQUFBLEdBQVF5OUMsUUFBUSxJQUFJQSxRQUFBO0lBQy9DO0lBQ0EsT0FBT0QsVUFBQSxHQUFheDlDLE1BQUE7RUFDeEI7QUFDSjs7O0FDZkEsSUFBTXhuQixJQUFBLEdBQU81QixLQUFBO0FBTWIsSUFBTXZCLFVBQUEsR0FBYXlmLFVBQUEsQ0FBV1MsTUFBQSxDQUFPLENBQUNDLEdBQUEsRUFBSzFVLEdBQUEsS0FBUTtFQUMvQzBVLEdBQUEsQ0FBSTFVLEdBQUcsSUFBS3VTLFFBQUEsSUFBWWplLFdBQUEsQ0FBWWllLFFBQU87RUFDM0MsT0FBT21DLEdBQUE7QUFDWCxHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=