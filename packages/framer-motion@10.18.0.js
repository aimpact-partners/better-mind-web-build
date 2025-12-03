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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmNqcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2ZyYW1lci1tb3Rpb24uMTAuMTguMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db25maWdDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9QcmVzZW5jZUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1icm93c2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWlzb21vcnBoaWMtZWZmZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9MYXp5Q29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY2FtZWwtdG8tZGFzaC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL2RhdGEtaWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtcmVmLW9iamVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91c2UtbW90aW9uLXJlZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy12YXJpYW50LWxhYmVsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy92YXJpYW50LXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2lzLWNvbnRyb2xsaW5nLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9kZWZpbml0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sb2FkLWZlYXR1cmVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9MYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L1N3aXRjaExheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9zeW1ib2wubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL21vdGlvbi1wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvbG93ZXJjYXNlLWVsZW1lbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1zdmctY29tcG9uZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtY29ycmVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9pcy1mb3JjZWQtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvaXMtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvYnVpbGQtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1jc3MtdmFyaWFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2dldC1hcy10eXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvY2xhbXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL3VuaXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90eXBlLWludC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvbnVtYmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvYnVpbGQtc3R5bGVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3VzZS1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy92YWxpZC1wcm9wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9maWx0ZXItcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3RyYW5zZm9ybS1vcmlnaW4ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3BhdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2J1aWxkLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jcmVhdGUtcmVuZGVyLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9pcy1zdmctdGFnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3VzZS1yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2NhbWVsLWNhc2UtYXR0cnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3JlbmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3NjcmFwZS1tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWNvbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWtleWZyYW1lcy10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZXNvbHZlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvcmVzb2x2ZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL25vb3AubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvcmVuZGVyLXN0ZXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvYmF0Y2hlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9mcmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvY29uZmlnLW1vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2NyZWF0ZS1jb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvYWRkLWRvbS1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy91dGlscy9pcy1wcmltYXJ5LXBvaW50ZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvZXZlbnQtaW5mby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy9hZGQtcG9pbnRlci1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3BpcGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3V0aWxzL2xvY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvRmVhdHVyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2hvdmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZm9jdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy91dGlscy9pcy1ub2RlLW9yLWNoaWxkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvcHJlc3MubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvdmlld3BvcnQvb2JzZXJ2ZXJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2dlc3R1cmVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvc2hhbGxvdy1jb21wYXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL3Jlc29sdmUtZHluYW1pYy12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2Vycm9ycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3RpbWUtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbnN0YW50LXRyYW5zaXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtYmV6aWVyLWRlZmluaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2Vhc2luZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL3V0aWxzL2dldC1maW5hbC1rZXlmcmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9jdWJpYy1iZXppZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvZWFzZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9pcy1lYXNpbmctYXJyYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL21pcnJvci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9tb2RpZmllcnMvcmV2ZXJzZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9jaXJjLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2JhY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvYW50aWNpcGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9tYXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL3JnYmEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9oZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9oc2xhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9oc2xhLXRvLXJnYmEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgtY29sb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb21wbGV4L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4LWNvbXBsZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9wcm9ncmVzcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2ludGVycG9sYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9maWxsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9kZWZhdWx0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy90aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMva2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdmVsb2NpdHktcGVyLXNlY29uZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL3ZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2ZpbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9zcHJpbmcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9pbmVydGlhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9qcy9kcml2ZXItZnJhbWVsb29wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvdXRpbHMvY2FsYy1kdXJhdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvanMvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9tZW1vLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS9jcmVhdGUtYWNjZWxlcmF0ZWQtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9pbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2RlZmF1bHQtdHJhbnNpdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtYW5pbWF0YWJsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbXBsZXgvZmlsdGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kZWZhdWx0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvYW5pbWF0YWJsZS1ub25lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtemVyby12YWx1ZS1zdHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtbm9uZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9rZXlmcmFtZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvdHJhbnNpdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9HbG9iYWxDb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy9tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1udW1lcmljYWwtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvYXJyYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9zdWJzY3JpcHRpb24tbWFuYWdlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3dhcm4tb25jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90ZXN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90eXBlLWF1dG8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2ZpbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvc2V0dGVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXRhcmdldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXZhcmlhbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9hbmltYXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvYW5pbWF0aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9leGl0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9kaXN0YW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9QYW5TZXNzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1jYWxjLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9jb25zdHJhaW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvbW9kZWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9lYWNoLWF4aXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2NvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL2hhcy10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLWFwcGx5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9tZWFzdXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZ2V0LWNvbnRleHQtd2luZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9WaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL3VzZS1wcmVzZW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWJvcmRlci1yYWRpdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1ib3gtc2hhZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xheW91dC9NZWFzdXJlTGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9hbmltYXRpb24vbWl4LXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvY29weS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtcmVtb3ZlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc2hhcmVkL3N0YWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2NvbXBhcmUtYnktZGVwdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvZmxhdC10cmVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGVsYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9kZWJ1Zy9yZWNvcmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2lzLXN2Zy1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvc2luZ2xlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2NyZWF0ZS1wcm9qZWN0aW9uLW5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvRG9jdW1lbnRQcm9qZWN0aW9uTm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9IVE1MUHJvamVjdGlvbk5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZHJhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY3NzLXZhcmlhYmxlcy1jb252ZXJzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy91bml0LWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL3BhcnNlLWRvbS12YXJpYW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL1Zpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL0RPTVZpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9IVE1MVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvU1ZHVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vY3JlYXRlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9tb3Rpb24tbWluaW1hbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pcy1tb3VudGVkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWZvcmNlLXVwZGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1BvcENoaWxkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlUHJlc2VuY2UvUHJlc2VuY2VDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS11bm1vdW50LWVmZmVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9Nb3Rpb25Db25maWcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0xhenlNb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L0RlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvZ3JvdXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0xheW91dEdyb3VwL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9SZW9yZGVyQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci91dGlscy9jaGVjay1yZW9yZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1jb21iaW5lLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1jb21wdXRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvSXRlbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9mZWF0dXJlcy1tYXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtbW90aW9uLXRlbXBsYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNwcmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1tb3Rpb24tdmFsdWUtZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdmVsb2NpdHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL3Jlc29sdmUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9yZXNpemUvaGFuZGxlLXdpbmRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvaW5mby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29mZnNldHMvaW5zZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL3ByZXNldHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2VkZ2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL29mZnNldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29mZnNldHMvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vbi1zY3JvbGwtaGFuZGxlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL3RyYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3Njcm9sbC91c2UtZWxlbWVudC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLXZpZXdwb3J0LXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1hbmltYXRpb24tZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS13aWxsLWNoYW5nZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3VzZS1yZWR1Y2VkLW1vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3VzZS1yZWR1Y2VkLW1vdGlvbi1jb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvYW5pbWF0aW9uLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2JzZXJ2ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL3N1cHBvcnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL0dyb3VwUGxheWJhY2tDb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1kb20ta2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9jcmVhdGUtZ2VuZXJhdG9yLWVhc2luZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS91dGlscy9jYWxjLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93cmFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2dldC1lYXNpbmctZm9yLXNlZ21lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvZWRpdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS91dGlscy9zb3J0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtY3ljbGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZpZXdwb3J0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluLXZpZXcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3VzZS1kcmFnLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL3VzZS1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvaXMtbW90aW9uLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91bndyYXAtbW90aW9uLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXNlLWluc3RhbnQtbGF5b3V0LXRyYW5zaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW5zdGFudC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91c2UtcmVzZXQtcHJvamVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLWlkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvc3RvcmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9oYW5kb2ZmLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvc3RhcnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvdXNlLWFuaW1hdGVkLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLWludmVydGVkLXNjYWxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlU2hhcmVkTGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvc3RhZ2dlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9pbmRleC1sZWdhY3kubWpzIl0sIm5hbWVzIjpbInJlcXVpcmVfbWVtb2l6ZV9icm93c2VyX2NqcyIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5janMuanMiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIm1lbW9pemUiLCJmbiIsImNhY2hlIiwiYXJnIiwiZGVmYXVsdCIsInJlcXVpcmVfaXNfcHJvcF92YWxpZF9icm93c2VyX2NqcyIsIm5vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmNqcy5qcyIsIl9pbnRlcm9wRGVmYXVsdCIsImV4IiwicmVhY3RQcm9wc1JlZ2V4IiwiaW5kZXgiLCJwcm9wIiwidGVzdCIsImNoYXJDb2RlQXQiLCJmcmFtZXJfbW90aW9uXzEwXzE4XzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZVNoYXJlZExheW91dCIsIkRlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQiLCJEcmFnQ29udHJvbHMiLCJGbGF0VHJlZSIsIkxheW91dEdyb3VwIiwiTGF5b3V0R3JvdXBDb250ZXh0IiwiTGF6eU1vdGlvbiIsIk1vdGlvbkNvbmZpZyIsIk1vdGlvbkNvbmZpZ0NvbnRleHQiLCJNb3Rpb25Db250ZXh0IiwiTW90aW9uR2xvYmFsQ29uZmlnIiwiTW90aW9uVmFsdWUiLCJQcmVzZW5jZUNvbnRleHQiLCJSZW9yZGVyIiwiU3dpdGNoTGF5b3V0R3JvdXBDb250ZXh0IiwiVmlzdWFsRWxlbWVudCIsImFkZFBvaW50ZXJFdmVudCIsImFkZFBvaW50ZXJJbmZvIiwiYWRkU2NhbGVDb3JyZWN0b3IiLCJhbmltYXRlIiwiYW5pbWF0ZVZhbHVlIiwiYW5pbWF0ZVZpc3VhbEVsZW1lbnQiLCJhbmltYXRpb25Db250cm9scyIsImFuaW1hdGlvbnMiLCJhbnRpY2lwYXRlIiwiYmFja0luIiwiYmFja0luT3V0IiwiYmFja091dCIsImJ1aWxkVHJhbnNmb3JtIiwiY2FsY0xlbmd0aCIsImNhbmNlbEZyYW1lIiwiY2FuY2VsU3luYyIsImNoZWNrVGFyZ2V0Rm9yTmV3VmFsdWVzIiwiY2lyY0luIiwiY2lyY0luT3V0IiwiY2lyY091dCIsImNsYW1wIiwiY29sb3IiLCJjb21wbGV4IiwiY3JlYXRlQm94IiwiY3JlYXRlRG9tTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlU2NvcGVkQW5pbWF0ZSIsImN1YmljQmV6aWVyIiwiZGVsYXkiLCJkaXNhYmxlSW5zdGFudFRyYW5zaXRpb25zIiwiZGlzdGFuY2UiLCJkaXN0YW5jZTJEIiwiZG9tQW5pbWF0aW9uIiwiZG9tTWF4IiwiZWFzZUluIiwiZWFzZUluT3V0IiwiZWFzZU91dCIsImZpbHRlclByb3BzIiwiZnJhbWUiLCJmcmFtZURhdGEiLCJpblZpZXciLCJpbnRlcnBvbGF0ZSIsImludmFyaWFudCIsImlzQnJvd3NlciIsImlzRHJhZ0FjdGl2ZSIsImlzTW90aW9uQ29tcG9uZW50IiwiaXNNb3Rpb25WYWx1ZSIsImlzVmFsaWRNb3Rpb25Qcm9wIiwibSIsIm1ha2VVc2VWaXN1YWxTdGF0ZSIsIm1pcnJvckVhc2luZyIsIm1peCIsIm1vdGlvbiIsIm1vdGlvblZhbHVlIiwib3B0aW1pemVkQXBwZWFyRGF0YUF0dHJpYnV0ZSIsInBpcGUiLCJwcm9ncmVzcyIsInB4IiwicmVzb2x2ZU1vdGlvblZhbHVlIiwicmV2ZXJzZUVhc2luZyIsInNjcm9sbCIsInNjcm9sbEluZm8iLCJzcHJpbmciLCJzdGFnZ2VyIiwic3RhcnRPcHRpbWl6ZWRBcHBlYXJBbmltYXRpb24iLCJzdGVwcyIsInN5bmMiLCJ0cmFuc2Zvcm0iLCJ1bndyYXBNb3Rpb25Db21wb25lbnQiLCJ1c2VBbmltYXRlIiwidXNlQW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uQ29udHJvbHMiLCJ1c2VBbmltYXRpb25GcmFtZSIsInVzZUN5Y2xlIiwidXNlRGVwcmVjYXRlZEFuaW1hdGVkU3RhdGUiLCJ1c2VBbmltYXRlZFN0YXRlIiwidXNlRGVwcmVjYXRlZEludmVydGVkU2NhbGUiLCJ1c2VJbnZlcnRlZFNjYWxlIiwidXNlRG9tRXZlbnQiLCJ1c2VEcmFnQ29udHJvbHMiLCJ1c2VFbGVtZW50U2Nyb2xsIiwidXNlRm9yY2VVcGRhdGUiLCJ1c2VJblZpZXciLCJ1c2VJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVzZUluc3RhbnRUcmFuc2l0aW9uIiwidXNlSXNQcmVzZW50IiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsInVzZU1vdGlvblRlbXBsYXRlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VNb3Rpb25WYWx1ZUV2ZW50IiwidXNlUHJlc2VuY2UiLCJ1c2VSZWR1Y2VkTW90aW9uIiwidXNlUmVkdWNlZE1vdGlvbkNvbmZpZyIsInVzZVJlc2V0UHJvamVjdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsInVzZVRpbWUiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VVbm1vdW50RWZmZWN0IiwidXNlVmVsb2NpdHkiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVdpbGxDaGFuZ2UiLCJ2aXN1YWxFbGVtZW50U3RvcmUiLCJ3YXJuaW5nIiwid3JhcCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yZWFjdCIsInJlcXVpcmUiLCJjcmVhdGVDb250ZXh0IiwidHJhbnNmb3JtUGFnZVBvaW50IiwicCIsImlzU3RhdGljIiwicmVkdWNlZE1vdGlvbiIsImltcG9ydF9yZWFjdDIiLCJpbXBvcnRfcmVhY3QzIiwiZG9jdW1lbnQiLCJpbXBvcnRfcmVhY3Q0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiaW1wb3J0X3JlYWN0NSIsIkxhenlDb250ZXh0Iiwic3RyaWN0IiwiY2FtZWxUb0Rhc2giLCJzdHIiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJvcHRpbWl6ZWRBcHBlYXJEYXRhSWQiLCJpbXBvcnRfcmVhY3Q2IiwidXNlVmlzdWFsRWxlbWVudCIsIkNvbXBvbmVudDIiLCJ2aXN1YWxTdGF0ZSIsInByb3BzIiwiY3JlYXRlVmlzdWFsRWxlbWVudDIiLCJ2aXN1YWxFbGVtZW50IiwicGFyZW50IiwidXNlQ29udGV4dCIsImxhenlDb250ZXh0IiwicHJlc2VuY2VDb250ZXh0IiwicmVkdWNlZE1vdGlvbkNvbmZpZyIsInZpc3VhbEVsZW1lbnRSZWYiLCJ1c2VSZWYiLCJyZW5kZXJlciIsImN1cnJlbnQiLCJibG9ja0luaXRpYWxBbmltYXRpb24iLCJpbml0aWFsIiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwidXBkYXRlIiwid2FudHNIYW5kb2ZmIiwiQm9vbGVhbiIsIndpbmRvdyIsIkhhbmRvZmZDb21wbGV0ZSIsInJlbmRlciIsImFuaW1hdGlvblN0YXRlIiwiYW5pbWF0ZUNoYW5nZXMiLCJ1cGRhdGVGZWF0dXJlcyIsImlzUmVmT2JqZWN0IiwicmVmIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW1wb3J0X3JlYWN0NyIsInVzZU1vdGlvblJlZiIsImV4dGVybmFsUmVmIiwidXNlQ2FsbGJhY2siLCJpbnN0YW5jZSIsIm1vdW50IiwidW5tb3VudCIsImlzVmFyaWFudExhYmVsIiwidiIsIkFycmF5IiwiaXNBcnJheSIsImlzQW5pbWF0aW9uQ29udHJvbHMiLCJzdGFydCIsInZhcmlhbnRQcmlvcml0eU9yZGVyIiwidmFyaWFudFByb3BzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzIiwic29tZSIsIm5hbWUiLCJpc1ZhcmlhbnROb2RlIiwidmFyaWFudHMiLCJnZXRDdXJyZW50VHJlZVZhcmlhbnRzIiwiY29udGV4dCIsImFuaW1hdGUyIiwiaW5oZXJpdCIsImltcG9ydF9yZWFjdDgiLCJ1c2VDcmVhdGVNb3Rpb25Db250ZXh0IiwidXNlTWVtbyIsInZhcmlhbnRMYWJlbHNBc0RlcGVuZGVuY3kiLCJqb2luIiwiZmVhdHVyZVByb3BzIiwiYW5pbWF0aW9uIiwiZXhpdCIsImRyYWciLCJmb2N1cyIsImhvdmVyIiwidGFwIiwicGFuIiwibGF5b3V0IiwiZmVhdHVyZURlZmluaXRpb25zIiwia2V5IiwiaXNFbmFibGVkIiwibG9hZEZlYXR1cmVzIiwiZmVhdHVyZXMiLCJpbXBvcnRfcmVhY3Q5IiwiaW1wb3J0X3JlYWN0MTAiLCJtb3Rpb25Db21wb25lbnRTeW1ib2wiLCJTeW1ib2wiLCJmb3IiLCJSZWFjdCIsIl9fdG9FU00iLCJpbXBvcnRfcmVhY3QxMSIsInByZWxvYWRlZEZlYXR1cmVzIiwicHJlbG9hZGVkRmVhdHVyZXMyIiwiY3JlYXRlVmlzdWFsRWxlbWVudCIsInVzZVJlbmRlciIsInVzZVZpc3VhbFN0YXRlIiwidXNlVmlzdWFsU3RhdGUyIiwiQ29tcG9uZW50IiwiTW90aW9uQ29tcG9uZW50IiwiTWVhc3VyZUxheW91dDIiLCJjb25maWdBbmRQcm9wcyIsImxheW91dElkIiwidXNlTGF5b3V0SWQiLCJpbml0aWFsTGF5b3V0R3JvdXBDb25maWciLCJpc1N0cmljdCIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkZvcndhcmRSZWZDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwibGF5b3V0R3JvdXBJZCIsImlkIiwiY3JlYXRlTW90aW9uUHJveHkiLCJjcmVhdGVDb25maWciLCJjdXN0b20iLCJjdXN0b21Nb3Rpb25Db21wb25lbnRDb25maWciLCJQcm94eSIsImNvbXBvbmVudENhY2hlIiwiTWFwIiwiZ2V0IiwiX3RhcmdldCIsImhhcyIsInNldCIsImxvd2VyY2FzZVNWR0VsZW1lbnRzIiwiaXNTVkdDb21wb25lbnQiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJzY2FsZUNvcnJlY3RvcnMiLCJjb3JyZWN0b3JzIiwiYXNzaWduIiwidHJhbnNmb3JtUHJvcE9yZGVyIiwidHJhbnNmb3JtUHJvcHMiLCJTZXQiLCJpc0ZvcmNlZE1vdGlvblZhbHVlIiwibGF5b3V0MiIsInN0YXJ0c1dpdGgiLCJnZXRWZWxvY2l0eSIsInRyYW5zbGF0ZUFsaWFzIiwieCIsInkiLCJ6IiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJudW1UcmFuc2Zvcm1zIiwibGVuZ3RoIiwidHJhbnNmb3JtMiIsImVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIiwiYWxsb3dUcmFuc2Zvcm1Ob25lIiwidHJhbnNmb3JtSXNEZWZhdWx0IiwidHJhbnNmb3JtVGVtcGxhdGUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJpIiwidHJhbnNmb3JtTmFtZSIsInRyaW0iLCJjaGVja1N0cmluZ1N0YXJ0c1dpdGgiLCJ0b2tlbiIsImlzQ1NTVmFyaWFibGVOYW1lIiwiaXNDU1NWYXJpYWJsZVRva2VuIiwiY3NzVmFyaWFibGVSZWdleCIsImdldFZhbHVlQXNUeXBlIiwidHlwZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJudW1iZXIiLCJwYXJzZSIsInBhcnNlRmxvYXQiLCJhbHBoYSIsInNjYWxlIiwic2FuaXRpemUiLCJyb3VuZCIsImZsb2F0UmVnZXgiLCJjb2xvclJlZ2V4Iiwic2luZ2xlQ29sb3JSZWdleCIsImlzU3RyaW5nIiwiY3JlYXRlVW5pdFR5cGUiLCJ1bml0IiwiZW5kc1dpdGgiLCJzcGxpdCIsImRlZ3JlZXMiLCJwZXJjZW50IiwidmgiLCJ2dyIsInByb2dyZXNzUGVyY2VudGFnZSIsImludCIsIm51bWJlclZhbHVlVHlwZXMiLCJib3JkZXJXaWR0aCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwid2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsInNpemUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNrZXciLCJza2V3WCIsInNrZXdZIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwicGVyc3BlY3RpdmUiLCJvcGFjaXR5Iiwib3JpZ2luWCIsIm9yaWdpblkiLCJvcmlnaW5aIiwiekluZGV4IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VPcGFjaXR5IiwibnVtT2N0YXZlcyIsImJ1aWxkSFRNTFN0eWxlcyIsInN0YXRlIiwibGF0ZXN0VmFsdWVzIiwib3B0aW9ucyIsInN0eWxlIiwidmFycyIsInRyYW5zZm9ybU9yaWdpbiIsImhhc1RyYW5zZm9ybTIiLCJoYXNUcmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm1Jc05vbmUiLCJ2YWx1ZVR5cGUiLCJ2YWx1ZUFzVHlwZSIsImNyZWF0ZUh0bWxSZW5kZXJTdGF0ZSIsImltcG9ydF9yZWFjdDEyIiwiY29weVJhd1ZhbHVlc09ubHkiLCJ0YXJnZXQiLCJzb3VyY2UiLCJ1c2VJbml0aWFsTW90aW9uVmFsdWVzIiwidXNlU3R5bGUiLCJzdHlsZVByb3AiLCJ0cmFuc2Zvcm1WYWx1ZXMiLCJ1c2VIVE1MUHJvcHMiLCJodG1sUHJvcHMiLCJkcmFnTGlzdGVuZXIiLCJkcmFnZ2FibGUiLCJ1c2VyU2VsZWN0IiwiV2Via2l0VXNlclNlbGVjdCIsIldlYmtpdFRvdWNoQ2FsbG91dCIsInRvdWNoQWN0aW9uIiwidGFiSW5kZXgiLCJvblRhcCIsIm9uVGFwU3RhcnQiLCJ3aGlsZVRhcCIsInZhbGlkTW90aW9uUHJvcHMiLCJzaG91bGRGb3J3YXJkIiwibG9hZEV4dGVybmFsSXNWYWxpZFByb3AiLCJpc1ZhbGlkUHJvcCIsIl9hIiwiaXNEb20iLCJmb3J3YXJkTW90aW9uUHJvcHMiLCJmaWx0ZXJlZFByb3BzIiwidmFsdWVzIiwiY2FsY09yaWdpbiIsIm9yaWdpbiIsIm9mZnNldCIsImNhbGNTVkdUcmFuc2Zvcm1PcmlnaW4iLCJkaW1lbnNpb25zIiwicHhPcmlnaW5YIiwicHhPcmlnaW5ZIiwiZGFzaEtleXMiLCJhcnJheSIsImNhbWVsS2V5cyIsImJ1aWxkU1ZHUGF0aCIsImF0dHJzIiwic3BhY2luZyIsInVzZURhc2hDYXNlIiwicGF0aExlbmd0aCIsImtleXMyIiwicGF0aFNwYWNpbmciLCJidWlsZFNWR0F0dHJzIiwiYXR0clgiLCJhdHRyWSIsImF0dHJTY2FsZSIsInBhdGhPZmZzZXQiLCJsYXRlc3QiLCJpc1NWR1RhZzIiLCJ2aWV3Qm94IiwiY3JlYXRlU3ZnUmVuZGVyU3RhdGUiLCJpc1NWR1RhZyIsInRhZyIsImltcG9ydF9yZWFjdDEzIiwidXNlU1ZHUHJvcHMiLCJfaXNTdGF0aWMiLCJ2aXN1YWxQcm9wcyIsInJhd1N0eWxlcyIsImltcG9ydF9yZWFjdDE0IiwiY3JlYXRlVXNlUmVuZGVyIiwidXNlVmlzdWFsUHJvcHMiLCJlbGVtZW50UHJvcHMiLCJjaGlsZHJlbiIsInJlbmRlcmVkQ2hpbGRyZW4iLCJyZW5kZXJIVE1MIiwiZWxlbWVudCIsInByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uU3R5bGVzIiwic2V0UHJvcGVydHkiLCJjYW1lbENhc2VBdHRyaWJ1dGVzIiwicmVuZGVyU1ZHIiwicmVuZGVyU3RhdGUiLCJfc3R5bGVQcm9wIiwic2V0QXR0cmlidXRlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzIiwicHJldlByb3BzIiwibmV3VmFsdWVzIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMiIsInRhcmdldEtleSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicmVzb2x2ZVZhcmlhbnRGcm9tUHJvcHMiLCJkZWZpbml0aW9uIiwiY3VycmVudFZhbHVlcyIsImN1cnJlbnRWZWxvY2l0eSIsImltcG9ydF9yZWFjdDE1IiwidXNlQ29uc3RhbnQiLCJpbml0IiwiaXNLZXlmcmFtZXNUYXJnZXQiLCJpc0N1c3RvbVZhbHVlIiwidG9WYWx1ZSIsInJlc29sdmVGaW5hbFZhbHVlSW5LZXlmcmFtZXMiLCJ1bndyYXBwZWRWYWx1ZSIsImltcG9ydF9yZWFjdDE2IiwibWFrZVN0YXRlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMyIsImNyZWF0ZVJlbmRlclN0YXRlIiwib25Nb3VudCIsIm1ha2VMYXRlc3RWYWx1ZXMiLCJjb25maWciLCJtYWtlIiwic2NyYXBlTW90aW9uVmFsdWVzIiwibW90aW9uVmFsdWVzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzJDEiLCJpc1ZhcmlhbnROb2RlJDEiLCJpc0luaXRpYWxBbmltYXRpb25CbG9ja2VkIiwidmFyaWFudFRvU2V0IiwibGlzdCIsImZvckVhY2giLCJyZXNvbHZlZCIsInRyYW5zaXRpb25FbmQiLCJ0cmFuc2l0aW9uIiwidmFsdWVUYXJnZXQiLCJub29wIiwiYW55IiwiUXVldWUiLCJjb25zdHJ1Y3RvciIsIm9yZGVyIiwic2NoZWR1bGVkIiwiYWRkIiwicHJvY2VzczIiLCJwdXNoIiwicmVtb3ZlIiwic3BsaWNlIiwiZGVsZXRlIiwiY2xlYXIiLCJjcmVhdGVSZW5kZXJTdGVwIiwicnVuTmV4dEZyYW1lIiwidGhpc0ZyYW1lIiwibmV4dEZyYW1lIiwibnVtVG9SdW4iLCJpc1Byb2Nlc3NpbmciLCJmbHVzaE5leHRGcmFtZSIsInRvS2VlcEFsaXZlIiwiV2Vha1NldCIsInN0ZXAiLCJzY2hlZHVsZSIsImNhbGxiYWNrIiwia2VlcEFsaXZlIiwiaW1tZWRpYXRlIiwiYWRkVG9DdXJyZW50RnJhbWUiLCJxdWV1ZSIsImNhbmNlbCIsInByb2Nlc3MiLCJmcmFtZURhdGEyIiwic3RlcHNPcmRlciIsIm1heEVsYXBzZWQiLCJjcmVhdGVSZW5kZXJCYXRjaGVyIiwic2NoZWR1bGVOZXh0QmF0Y2giLCJhbGxvd0tlZXBBbGl2ZSIsInVzZURlZmF1bHRFbGFwc2VkIiwiZGVsdGEiLCJ0aW1lc3RhbXAiLCJzdGVwczIiLCJyZWR1Y2UiLCJhY2MiLCJwcm9jZXNzU3RlcCIsInN0ZXBJZCIsInByb2Nlc3NCYXRjaCIsInBlcmZvcm1hbmNlIiwibm93Iiwid2FrZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN2Z01vdGlvbkNvbmZpZyIsInJlYWQiLCJnZXRCQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZSIsInRhZ05hbWUiLCJodG1sTW90aW9uQ29uZmlnIiwiY3JlYXRlRG9tTW90aW9uQ29uZmlnIiwiYmFzZUNvbmZpZyIsImFkZERvbUV2ZW50IiwiZXZlbnROYW1lIiwiaGFuZGxlciIsInBhc3NpdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzUHJpbWFyeVBvaW50ZXIiLCJldmVudCIsInBvaW50ZXJUeXBlIiwiYnV0dG9uIiwiaXNQcmltYXJ5IiwiZXh0cmFjdEV2ZW50SW5mbyIsInBvaW50VHlwZSIsInBvaW50IiwiY29tYmluZUZ1bmN0aW9ucyIsImEiLCJiIiwidHJhbnNmb3JtZXJzIiwiY3JlYXRlTG9jayIsImxvY2siLCJvcGVuTG9jayIsImdsb2JhbEhvcml6b250YWxMb2NrIiwiZ2xvYmFsVmVydGljYWxMb2NrIiwiZ2V0R2xvYmFsTG9jayIsImRyYWcyIiwib3Blbkhvcml6b250YWwiLCJvcGVuVmVydGljYWwiLCJvcGVuR2VzdHVyZUxvY2siLCJGZWF0dXJlIiwibm9kZSIsImlzTW91bnRlZCIsImFkZEhvdmVyRXZlbnQiLCJpc0FjdGl2ZSIsImNhbGxiYWNrTmFtZSIsImhhbmRsZUV2ZW50IiwiaW5mbyIsImdldFByb3BzIiwid2hpbGVIb3ZlciIsInNldEFjdGl2ZSIsIkhvdmVyR2VzdHVyZSIsIkZvY3VzR2VzdHVyZSIsImFyZ3VtZW50cyIsIm9uRm9jdXMiLCJpc0ZvY3VzVmlzaWJsZSIsIm1hdGNoZXMiLCJvbkJsdXIiLCJpc05vZGVPckNoaWxkIiwiY2hpbGQiLCJwYXJlbnRFbGVtZW50IiwiZmlyZVN5bnRoZXRpY1BvaW50ZXJFdmVudCIsInN5bnRoZXRpY1BvaW50ZXJFdmVudCIsIlBvaW50ZXJFdmVudCIsIlByZXNzR2VzdHVyZSIsInJlbW92ZVN0YXJ0TGlzdGVuZXJzIiwicmVtb3ZlRW5kTGlzdGVuZXJzIiwicmVtb3ZlQWNjZXNzaWJsZUxpc3RlbmVycyIsInN0YXJ0UG9pbnRlclByZXNzIiwic3RhcnRFdmVudCIsInN0YXJ0SW5mbyIsImlzUHJlc3NpbmciLCJlbmRQb2ludGVyUHJlc3MiLCJlbmRFdmVudCIsImVuZEluZm8iLCJjaGVja1ByZXNzRW5kIiwib25UYXBDYW5jZWwiLCJnbG9iYWxUYXBUYXJnZXQiLCJyZW1vdmVQb2ludGVyVXBMaXN0ZW5lciIsInJlbW92ZVBvaW50ZXJDYW5jZWxMaXN0ZW5lciIsImNhbmNlbEV2ZW50IiwiY2FuY2VsSW5mbyIsImNhbmNlbFByZXNzIiwic3RhcnRQcmVzcyIsInN0YXJ0QWNjZXNzaWJsZVByZXNzIiwiaGFuZGxlS2V5ZG93biIsImtleWRvd25FdmVudCIsImhhbmRsZUtleXVwIiwia2V5dXBFdmVudCIsInJlbW92ZUtleWRvd25MaXN0ZW5lciIsImhhbmRsZUJsdXIiLCJyZW1vdmVCbHVyTGlzdGVuZXIiLCJyZW1vdmVQb2ludGVyTGlzdGVuZXIiLCJyZW1vdmVGb2N1c0xpc3RlbmVyIiwib2JzZXJ2ZXJDYWxsYmFja3MiLCJXZWFrTWFwIiwib2JzZXJ2ZXJzIiwiZmlyZU9ic2VydmVyQ2FsbGJhY2siLCJlbnRyeSIsImZpcmVBbGxPYnNlcnZlckNhbGxiYWNrcyIsImVudHJpZXMiLCJpbml0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJyb290IiwibG9va3VwUm9vdCIsInJvb3RPYnNlcnZlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlSW50ZXJzZWN0aW9uIiwicm9vdEludGVyZXNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGROYW1lcyIsImFsbCIsIkluVmlld0ZlYXR1cmUiLCJoYXNFbnRlcmVkVmlldyIsImlzSW5WaWV3Iiwic3RhcnRPYnNlcnZlciIsInZpZXdwb3J0Iiwicm9vdE1hcmdpbiIsImFtb3VudCIsIm9uY2UiLCJ0aHJlc2hvbGQiLCJvbkludGVyc2VjdGlvblVwZGF0ZSIsImlzSW50ZXJzZWN0aW5nIiwib25WaWV3cG9ydEVudGVyIiwib25WaWV3cG9ydExlYXZlIiwiaGFzT3B0aW9uc0NoYW5nZWQiLCJoYXNWaWV3cG9ydE9wdGlvbkNoYW5nZWQiLCJwcmV2Vmlld3BvcnQiLCJnZXN0dXJlQW5pbWF0aW9ucyIsInNoYWxsb3dDb21wYXJlIiwibmV4dCIsInByZXYiLCJwcmV2TGVuZ3RoIiwiZ2V0Q3VycmVudCIsInZlbG9jaXR5IiwicmVzb2x2ZVZhcmlhbnQiLCJjaGVjayIsIm1lc3NhZ2UiLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwic2Vjb25kc1RvTWlsbGlzZWNvbmRzIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kc1RvU2Vjb25kcyIsIm1pbGxpc2Vjb25kcyIsImluc3RhbnRBbmltYXRpb25TdGF0ZSIsImlzQmV6aWVyRGVmaW5pdGlvbiIsImVhc2luZyIsImlzV2FhcGlTdXBwb3J0ZWRFYXNpbmciLCJzdXBwb3J0ZWRXYWFwaUVhc2luZyIsImV2ZXJ5IiwiY3ViaWNCZXppZXJBc1N0cmluZyIsImMiLCJkIiwibGluZWFyIiwiZWFzZSIsIm1hcEVhc2luZ1RvTmF0aXZlRWFzaW5nIiwibWFwIiwiYW5pbWF0ZVN0eWxlIiwidmFsdWVOYW1lIiwia2V5ZnJhbWVzMiIsImRlbGF5MiIsImR1cmF0aW9uIiwicmVwZWF0IiwicmVwZWF0VHlwZSIsImVhc2UyIiwidGltZXMiLCJrZXlmcmFtZU9wdGlvbnMiLCJmaWxsIiwiaXRlcmF0aW9ucyIsImRpcmVjdGlvbiIsImdldEZpbmFsS2V5ZnJhbWUiLCJjYWxjQmV6aWVyIiwidCIsImExIiwiYTIiLCJzdWJkaXZpc2lvblByZWNpc2lvbiIsInN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyIsImJpbmFyeVN1YmRpdmlkZSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwibVgxIiwibVgyIiwiY3VycmVudFgiLCJjdXJyZW50VCIsImFicyIsIm1ZMSIsIm1ZMiIsImdldFRGb3JYIiwiYVgiLCJpc0Vhc2luZ0FycmF5Iiwic2luIiwiYWNvcyIsInBvdyIsImVhc2luZ0xvb2t1cCIsImVhc2luZ0RlZmluaXRpb25Ub0Z1bmN0aW9uIiwieDEiLCJ5MSIsIngyIiwieTIiLCJpc0NvbG9yU3RyaW5nIiwidGVzdFByb3AiLCJzcGxpdENvbG9yIiwiYU5hbWUiLCJiTmFtZSIsImNOYW1lIiwiYWxwaGEyIiwibWF0Y2giLCJjbGFtcFJnYlVuaXQiLCJyZ2JVbml0IiwicmdiYSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhJDEiLCJwYXJzZUhleCIsInIiLCJnIiwicGFyc2VJbnQiLCJoZXgiLCJoc2xhIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImZyb20iLCJ0byIsInByb2dyZXNzMiIsImh1ZVRvUmdiIiwicSIsImhzbGFUb1JnYmEiLCJtaXhMaW5lYXJDb2xvciIsImZyb21FeHBvIiwic3FydCIsImNvbG9yVHlwZXMiLCJnZXRDb2xvclR5cGUiLCJmaW5kIiwiYXNSR0JBIiwiY29sb3IyIiwibW9kZWwiLCJtaXhDb2xvciIsImZyb21SR0JBIiwidG9SR0JBIiwiYmxlbmRlZCIsIl9iIiwiaXNOYU4iLCJjc3NWYXJUb2tlbmlzZXIiLCJyZWdleCIsImNvdW50S2V5IiwiY29sb3JUb2tlbmlzZXIiLCJudW1iZXJUb2tlbmlzZXIiLCJ0b2tlbmlzZSIsInRva2VuaXNlZCIsImFuYWx5c2VDb21wbGV4VmFsdWUiLCJvcmlnaW5hbFZhbHVlIiwidG9TdHJpbmciLCJudW1WYXJzIiwibnVtQ29sb3JzIiwibnVtTnVtYmVycyIsInBhcnNlQ29tcGxleFZhbHVlIiwiY3JlYXRlVHJhbnNmb3JtZXIiLCJudW1WYWx1ZXMiLCJvdXRwdXQiLCJjb252ZXJ0TnVtYmVyc1RvWmVybyIsImdldEFuaW1hdGFibGVOb25lIiwicGFyc2VkIiwidHJhbnNmb3JtZXIiLCJtaXhJbW1lZGlhdGUiLCJnZXRNaXhlciIsIm1peENvbXBsZXgiLCJtaXhBcnJheSIsImJsZW5kVmFsdWUiLCJmcm9tVGhpcyIsIm1peE9iamVjdCIsInRlbXBsYXRlIiwib3JpZ2luU3RhdHMiLCJ0YXJnZXRTdGF0cyIsImNhbkludGVycG9sYXRlIiwidG9Gcm9tRGlmZmVyZW5jZSIsIm1peE51bWJlciIsImRldGVjdE1peGVyRmFjdG9yeSIsImNyZWF0ZU1peGVycyIsImN1c3RvbU1peGVyIiwibWl4ZXJzIiwibWl4ZXJGYWN0b3J5IiwibnVtTWl4ZXJzIiwibWl4ZXIiLCJlYXNpbmdGdW5jdGlvbiIsImlucHV0IiwiaXNDbGFtcCIsImlucHV0TGVuZ3RoIiwicmV2ZXJzZSIsImludGVycG9sYXRvciIsInByb2dyZXNzSW5SYW5nZSIsImZpbGxPZmZzZXQiLCJyZW1haW5pbmciLCJvZmZzZXRQcm9ncmVzcyIsImRlZmF1bHRPZmZzZXQiLCJhcnIiLCJjb252ZXJ0T2Zmc2V0VG9UaW1lcyIsIm8iLCJkZWZhdWx0RWFzaW5nIiwia2V5ZnJhbWVzIiwia2V5ZnJhbWVWYWx1ZXMiLCJlYXNpbmdGdW5jdGlvbnMiLCJkb25lIiwiYWJzb2x1dGVUaW1lcyIsIm1hcFRpbWVUb0tleWZyYW1lIiwiY2FsY3VsYXRlZER1cmF0aW9uIiwidmVsb2NpdHlQZXJTZWNvbmQiLCJmcmFtZUR1cmF0aW9uIiwidmVsb2NpdHlTYW1wbGVEdXJhdGlvbiIsImNhbGNHZW5lcmF0b3JWZWxvY2l0eSIsInJlc29sdmVWYWx1ZSIsInByZXZUIiwic2FmZU1pbiIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJtaW5EYW1waW5nIiwibWF4RGFtcGluZyIsImZpbmRTcHJpbmciLCJib3VuY2UiLCJtYXNzIiwiZW52ZWxvcGUiLCJkZXJpdmF0aXZlIiwiZGFtcGluZ1JhdGlvIiwidW5kYW1wZWRGcmVxMiIsImV4cG9uZW50aWFsRGVjYXkiLCJjYWxjQW5ndWxhckZyZXEiLCJleHAiLCJmIiwiZmFjdG9yIiwiaW5pdGlhbEd1ZXNzIiwidW5kYW1wZWRGcmVxIiwiYXBwcm94aW1hdGVSb290Iiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInJvb3RJdGVyYXRpb25zIiwicmVzdWx0IiwiZHVyYXRpb25LZXlzIiwicGh5c2ljc0tleXMiLCJpc1NwcmluZ1R5cGUiLCJnZXRTcHJpbmdPcHRpb25zIiwic3ByaW5nT3B0aW9ucyIsImlzUmVzb2x2ZWRGcm9tRHVyYXRpb24iLCJkZXJpdmVkIiwicmVzdERlbHRhIiwicmVzdFNwZWVkIiwiaW5pdGlhbFZlbG9jaXR5IiwiaW5pdGlhbERlbHRhIiwidW5kYW1wZWRBbmd1bGFyRnJlcSIsImlzR3JhbnVsYXJTY2FsZSIsInJlc29sdmVTcHJpbmciLCJhbmd1bGFyRnJlcSIsImNvcyIsImRhbXBlZEFuZ3VsYXJGcmVxIiwiZnJlcUZvclQiLCJzaW5oIiwiY29zaCIsImlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCIsImlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJpbmVydGlhIiwicG93ZXIiLCJ0aW1lQ29uc3RhbnQiLCJib3VuY2VEYW1waW5nIiwiYm91bmNlU3RpZmZuZXNzIiwibW9kaWZ5VGFyZ2V0IiwiaXNPdXRPZkJvdW5kcyIsIm5lYXJlc3RCb3VuZGFyeSIsImFtcGxpdHVkZSIsImlkZWFsIiwiY2FsY0RlbHRhIiwiY2FsY0xhdGVzdCIsImFwcGx5RnJpY3Rpb24iLCJ0aW1lUmVhY2hlZEJvdW5kYXJ5Iiwic3ByaW5nJDEiLCJjaGVja0NhdGNoQm91bmRhcnkiLCJoYXNVcGRhdGVkRnJhbWUiLCJmcmFtZWxvb3BEcml2ZXIiLCJwYXNzVGltZXN0YW1wIiwic3RvcCIsIm1heEdlbmVyYXRvckR1cmF0aW9uIiwiY2FsY0dlbmVyYXRvckR1cmF0aW9uIiwiZ2VuZXJhdG9yIiwidGltZVN0ZXAiLCJJbmZpbml0eSIsInR5cGVzIiwiZGVjYXkiLCJ0d2VlbiIsImF1dG9wbGF5IiwiZHJpdmVyIiwia2V5ZnJhbWVzJDEiLCJyZXBlYXREZWxheSIsIm9uUGxheSIsIm9uU3RvcCIsIm9uQ29tcGxldGUiLCJvblVwZGF0ZSIsInNwZWVkIiwiaGFzU3RvcHBlZCIsInJlc29sdmVGaW5pc2hlZFByb21pc2UiLCJjdXJyZW50RmluaXNoZWRQcm9taXNlIiwidXBkYXRlRmluaXNoZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25Ecml2ZXIiLCJnZW5lcmF0b3JGYWN0b3J5IiwibWFwTnVtYmVyc1RvS2V5ZnJhbWVzIiwibWlycm9yZWRHZW5lcmF0b3IiLCJwbGF5U3RhdGUiLCJob2xkVGltZSIsInN0YXJ0VGltZSIsImNhbmNlbFRpbWUiLCJyZXNvbHZlZER1cmF0aW9uIiwidG90YWxEdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwidGljayIsInRpbWVXaXRob3V0RGVsYXkiLCJpc0luRGVsYXlQaGFzZSIsImVsYXBzZWQiLCJmcmFtZUdlbmVyYXRvciIsImN1cnJlbnRJdGVyYXRpb24iLCJmbG9vciIsIml0ZXJhdGlvblByb2dyZXNzIiwiaXNPZGRJdGVyYXRpb24iLCJpc0FuaW1hdGlvbkZpbmlzaGVkIiwiZmluaXNoIiwic3RvcEFuaW1hdGlvbkRyaXZlciIsInBsYXkiLCJjb250cm9scyIsInRoZW4iLCJyZWplY3QiLCJ0aW1lIiwibmV3VGltZSIsIm5ld1NwZWVkIiwicGF1c2UiLCJjb21wbGV0ZSIsInNhbXBsZSIsIm1lbW8iLCJzdXBwb3J0c1dhYXBpIiwiRWxlbWVudCIsImFjY2VsZXJhdGVkVmFsdWVzIiwic2FtcGxlRGVsdGEiLCJtYXhEdXJhdGlvbjIiLCJyZXF1aXJlc1ByZWdlbmVyYXRlZEtleWZyYW1lcyIsImNyZWF0ZUFjY2VsZXJhdGVkQW5pbWF0aW9uIiwiY2FuQWNjZWxlcmF0ZUFuaW1hdGlvbiIsInBlbmRpbmdDYW5jZWwiLCJzYW1wbGVBbmltYXRpb24iLCJwcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJvd25lciIsImNhbmNlbEFuaW1hdGlvbiIsInNhZmVDYW5jZWwiLCJvbmZpbmlzaCIsImF0dGFjaFRpbWVsaW5lIiwidGltZWxpbmUiLCJwbGF5YmFja1JhdGUiLCJzZXRXaXRoVmVsb2NpdHkiLCJjcmVhdGVJbnN0YW50QW5pbWF0aW9uIiwic2V0VmFsdWUiLCJ1bmRlckRhbXBlZFNwcmluZyIsImNyaXRpY2FsbHlEYW1wZWRTcHJpbmciLCJrZXlmcmFtZXNUcmFuc2l0aW9uIiwiZ2V0RGVmYXVsdFRyYW5zaXRpb24iLCJ2YWx1ZUtleSIsImlzQW5pbWF0YWJsZSIsIm1heERlZmF1bHRzIiwiYXBwbHlEZWZhdWx0RmlsdGVyIiwic2xpY2UiLCJudW1iZXIyIiwiZGVmYXVsdFZhbHVlIiwiZnVuY3Rpb25SZWdleCIsImZpbHRlciIsImZ1bmN0aW9ucyIsImRlZmF1bHRWYWx1ZVR5cGVzIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwic3Ryb2tlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJUb3BDb2xvciIsImJvcmRlclJpZ2h0Q29sb3IiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckxlZnRDb2xvciIsIldlYmtpdEZpbHRlciIsImdldERlZmF1bHRWYWx1ZVR5cGUiLCJnZXRBbmltYXRhYmxlTm9uZTIiLCJkZWZhdWx0VmFsdWVUeXBlIiwiaXNaZXJvVmFsdWVTdHJpbmciLCJpc05vbmUiLCJnZXRLZXlmcmFtZXMiLCJpc1RhcmdldEFuaW1hdGFibGUiLCJkZWZhdWx0T3JpZ2luIiwiYW5pbWF0YWJsZVRlbXBsYXRlVmFsdWUiLCJub25lS2V5ZnJhbWVJbmRleGVzIiwiaXNUcmFuc2l0aW9uRGVmaW5lZCIsIndoZW4iLCJfZGVsYXkiLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwic3RhZ2dlckRpcmVjdGlvbiIsImtleXMiLCJnZXRWYWx1ZVRyYW5zaXRpb24iLCJza2lwQW5pbWF0aW9ucyIsImFuaW1hdGVNb3Rpb25WYWx1ZSIsInZhbHVlVHJhbnNpdGlvbiIsIm9yaWdpbktleWZyYW1lIiwidGFyZ2V0S2V5ZnJhbWUiLCJpc09yaWdpbkFuaW1hdGFibGUiLCJpc0hhbmRvZmYiLCJIVE1MRWxlbWVudCIsImFjY2VsZXJhdGVkQW5pbWF0aW9uIiwiaXNXaWxsQ2hhbmdlTW90aW9uVmFsdWUiLCJpc051bWVyaWNhbFN0cmluZyIsImFkZFVuaXF1ZUl0ZW0iLCJpdGVtIiwicmVtb3ZlSXRlbSIsIm1vdmVJdGVtIiwiZnJvbUluZGV4IiwidG9JbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIlN1YnNjcmlwdGlvbk1hbmFnZXIiLCJzdWJzY3JpcHRpb25zIiwibm90aWZ5IiwibnVtU3Vic2NyaXB0aW9ucyIsImdldFNpemUiLCJ3YXJuZWQiLCJ3YXJuT25jZSIsImNvbmRpdGlvbiIsImlzRmxvYXQiLCJjb2xsZWN0TW90aW9uVmFsdWVzIiwidmVyc2lvbiIsInRpbWVEZWx0YSIsImxhc3RVcGRhdGVkIiwiY2FuVHJhY2tWZWxvY2l0eSIsImV2ZW50cyIsInVwZGF0ZUFuZE5vdGlmeSIsInBvc3RSZW5kZXIiLCJzY2hlZHVsZVZlbG9jaXR5Q2hlY2siLCJjaGFuZ2UiLCJ2ZWxvY2l0eUNoYW5nZSIsInJlbmRlclJlcXVlc3QiLCJ2ZWxvY2l0eUNoZWNrIiwiaGFzQW5pbWF0ZWQiLCJvbkNoYW5nZSIsInN1YnNjcmlwdGlvbiIsIm9uIiwidW5zdWJzY3JpYmUiLCJjbGVhckxpc3RlbmVycyIsImV2ZW50TWFuYWdlcnMiLCJhdHRhY2giLCJwYXNzaXZlRWZmZWN0Iiwic3RvcFBhc3NpdmVFZmZlY3QiLCJqdW1wIiwiZ2V0UHJldmlvdXMiLCJzdGFydEFuaW1hdGlvbiIsImFuaW1hdGlvblN0YXJ0IiwiYW5pbWF0aW9uQ29tcGxldGUiLCJjbGVhckFuaW1hdGlvbiIsImFuaW1hdGlvbkNhbmNlbCIsImlzQW5pbWF0aW5nIiwiZGVzdHJveSIsInRlc3RWYWx1ZVR5cGUiLCJhdXRvIiwiZGltZW5zaW9uVmFsdWVUeXBlcyIsImZpbmREaW1lbnNpb25WYWx1ZVR5cGUiLCJ2YWx1ZVR5cGVzIiwiZmluZFZhbHVlVHlwZSIsInNldE1vdGlvblZhbHVlIiwiaGFzVmFsdWUiLCJnZXRWYWx1ZSIsImFkZFZhbHVlIiwic2V0VGFyZ2V0IiwibWFrZVRhcmdldEFuaW1hdGFibGUiLCJzZXRWYXJpYW50cyIsInZhcmlhbnRMYWJlbHMiLCJyZXZlcnNlZExhYmVscyIsInZhcmlhbnQiLCJnZXRWYXJpYW50IiwidmFyaWFudENoaWxkcmVuIiwic2V0VmFsdWVzIiwibmV3VmFsdWVLZXlzIiwibnVtTmV3VmFsdWVzIiwidGFyZ2V0VmFsdWUiLCJyZWFkVmFsdWUiLCJzZXRCYXNlVGFyZ2V0IiwiZ2V0T3JpZ2luRnJvbVRyYW5zaXRpb24iLCJnZXRPcmlnaW4iLCJ0cmFuc2l0aW9uT3JpZ2luIiwic2hvdWxkQmxvY2tBbmltYXRpb24iLCJwcm90ZWN0ZWRLZXlzIiwibmVlZHNBbmltYXRpbmciLCJzaG91bGRCbG9jayIsImhhc0tleWZyYW1lc0NoYW5nZWQiLCJhbmltYXRlVGFyZ2V0IiwidHJhbnNpdGlvbk92ZXJyaWRlIiwid2lsbENoYW5nZSIsImFuaW1hdGlvbnMyIiwiYW5pbWF0aW9uVHlwZVN0YXRlIiwiZ2V0U3RhdGUiLCJIYW5kb2ZmQXBwZWFyQW5pbWF0aW9ucyIsImFwcGVhcklkIiwiY2FuU2tpcCIsInNob3VsZFJlZHVjZU1vdGlvbiIsImFuaW1hdGVWYXJpYW50IiwiZ2V0QW5pbWF0aW9uIiwiZ2V0Q2hpbGRBbmltYXRpb25zIiwiZm9yd2FyZERlbGF5IiwiYW5pbWF0ZUNoaWxkcmVuIiwiZmlyc3QiLCJsYXN0IiwibWF4U3RhZ2dlckR1cmF0aW9uIiwiZ2VuZXJhdGVTdGFnZ2VyRHVyYXRpb24iLCJzb3J0Iiwic29ydEJ5VHJlZU9yZGVyIiwic29ydE5vZGVQb3NpdGlvbiIsInJlc29sdmVkRGVmaW5pdGlvbiIsInJldmVyc2VQcmlvcml0eU9yZGVyIiwibnVtQW5pbWF0aW9uVHlwZXMiLCJhbmltYXRlTGlzdCIsImNyZWF0ZUFuaW1hdGlvblN0YXRlIiwiY3JlYXRlU3RhdGUiLCJpc0luaXRpYWxSZW5kZXIiLCJidWlsZFJlc29sdmVkVHlwZVZhbHVlcyIsInNldEFuaW1hdGVGdW5jdGlvbiIsIm1ha2VBbmltYXRvciIsImNoYW5nZWRBY3RpdmVUeXBlIiwiZ2V0VmFyaWFudENvbnRleHQiLCJyZW1vdmVkS2V5cyIsImVuY291bnRlcmVkS2V5cyIsInJlbW92ZWRWYXJpYW50SW5kZXgiLCJ0eXBlU3RhdGUiLCJwcm9wSXNWYXJpYW50IiwiYWN0aXZlRGVsdGEiLCJpc0luaGVyaXRlZCIsIm1hbnVhbGx5QW5pbWF0ZU9uTW91bnQiLCJwcmV2UHJvcCIsInZhcmlhbnREaWRDaGFuZ2UiLCJjaGVja1ZhcmlhbnRzRGlkQ2hhbmdlIiwic2hvdWxkQW5pbWF0ZVR5cGUiLCJoYW5kbGVkUmVtb3ZlZFZhbHVlcyIsImRlZmluaXRpb25MaXN0IiwicmVzb2x2ZWRWYWx1ZXMiLCJwcmV2UmVzb2x2ZWRWYWx1ZXMiLCJhbGxLZXlzIiwibWFya1RvQW5pbWF0ZSIsInZhbHVlSGFzQ2hhbmdlZCIsImZhbGxiYWNrQW5pbWF0aW9uIiwiZmFsbGJhY2tUYXJnZXQiLCJnZXRCYXNlVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZSIsIl9hMiIsImNyZWF0ZVR5cGVTdGF0ZSIsIndoaWxlSW5WaWV3Iiwid2hpbGVEcmFnIiwid2hpbGVGb2N1cyIsIkFuaW1hdGlvbkZlYXR1cmUiLCJ1cGRhdGVBbmltYXRpb25Db250cm9sc1N1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsInByZXZBbmltYXRlIiwiRXhpdEFuaW1hdGlvbkZlYXR1cmUiLCJpc1ByZXNlbnQiLCJpc1ByZXNlbnQyIiwib25FeGl0Q29tcGxldGUiLCJwcmV2SXNQcmVzZW50IiwicHJldlByZXNlbmNlQ29udGV4dCIsImV4aXRBbmltYXRpb24iLCJyZWdpc3RlciIsInhEZWx0YSIsInlEZWx0YSIsIlBhblNlc3Npb24iLCJoYW5kbGVycyIsImNvbnRleHRXaW5kb3ciLCJkcmFnU25hcFRvT3JpZ2luIiwibGFzdE1vdmVFdmVudCIsImxhc3RNb3ZlRXZlbnRJbmZvIiwidXBkYXRlUG9pbnQiLCJpbmZvMiIsImdldFBhbkluZm8iLCJoaXN0b3J5IiwiaXNQYW5TdGFydGVkIiwiaXNEaXN0YW5jZVBhc3RUaHJlc2hvbGQiLCJwb2ludDMiLCJ0aW1lc3RhbXAyIiwib25TdGFydCIsIm9uTW92ZSIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiZXZlbnQyIiwidHJhbnNmb3JtUG9pbnQiLCJoYW5kbGVQb2ludGVyVXAiLCJlbmQiLCJvbkVuZCIsIm9uU2Vzc2lvbkVuZCIsInJlc3VtZUFuaW1hdGlvbiIsInBhbkluZm8iLCJpbml0aWFsSW5mbyIsInBvaW50MiIsIm9uU2Vzc2lvblN0YXJ0IiwicmVtb3ZlTGlzdGVuZXJzIiwidXBkYXRlSGFuZGxlcnMiLCJzdWJ0cmFjdFBvaW50IiwibGFzdERldmljZVBvaW50Iiwic3RhcnREZXZpY2VQb2ludCIsImdldFZlbG9jaXR5MiIsInRpbWVzdGFtcGVkUG9pbnQiLCJsYXN0UG9pbnQiLCJheGlzIiwiaXNOZWFyIiwibWF4RGlzdGFuY2UiLCJjYWxjQXhpc0RlbHRhIiwib3JpZ2luUG9pbnQiLCJ0cmFuc2xhdGUiLCJjYWxjQm94RGVsdGEiLCJjYWxjUmVsYXRpdmVBeGlzIiwicmVsYXRpdmUiLCJjYWxjUmVsYXRpdmVCb3giLCJjYWxjUmVsYXRpdmVBeGlzUG9zaXRpb24iLCJjYWxjUmVsYXRpdmVQb3NpdGlvbiIsImFwcGx5Q29uc3RyYWludHMiLCJlbGFzdGljIiwiY2FsY1JlbGF0aXZlQXhpc0NvbnN0cmFpbnRzIiwiY2FsY1JlbGF0aXZlQ29uc3RyYWludHMiLCJsYXlvdXRCb3giLCJjYWxjVmlld3BvcnRBeGlzQ29uc3RyYWludHMiLCJsYXlvdXRBeGlzIiwiY29uc3RyYWludHNBeGlzIiwiY2FsY1ZpZXdwb3J0Q29uc3RyYWludHMiLCJjb25zdHJhaW50c0JveCIsImNhbGNPcmlnaW4yIiwic291cmNlTGVuZ3RoIiwidGFyZ2V0TGVuZ3RoIiwicmViYXNlQXhpc0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHMiLCJyZWxhdGl2ZUNvbnN0cmFpbnRzIiwiZGVmYXVsdEVsYXN0aWMiLCJyZXNvbHZlRHJhZ0VsYXN0aWMiLCJkcmFnRWxhc3RpYyIsInJlc29sdmVBeGlzRWxhc3RpYyIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJyZXNvbHZlUG9pbnRFbGFzdGljIiwibGFiZWwiLCJjcmVhdGVBeGlzRGVsdGEiLCJjcmVhdGVEZWx0YSIsImNyZWF0ZUF4aXMiLCJlYWNoQXhpcyIsImNvbnZlcnRCb3VuZGluZ0JveFRvQm94IiwiY29udmVydEJveFRvQm91bmRpbmdCb3giLCJ0cmFuc2Zvcm1Cb3hQb2ludHMiLCJ0cmFuc2Zvcm1Qb2ludDIiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJpc0lkZW50aXR5U2NhbGUiLCJzY2FsZTIiLCJoYXNTY2FsZSIsImhhc1RyYW5zZm9ybSIsImhhczJEVHJhbnNsYXRlIiwiaXMyRFRyYW5zbGF0ZSIsInNjYWxlUG9pbnQiLCJkaXN0YW5jZUZyb21PcmlnaW4iLCJzY2FsZWQiLCJhcHBseVBvaW50RGVsdGEiLCJib3hTY2FsZSIsImFwcGx5QXhpc0RlbHRhIiwiYXBwbHlCb3hEZWx0YSIsImJveCIsImFwcGx5VHJlZURlbHRhcyIsInRyZWVTY2FsZSIsInRyZWVQYXRoIiwiaXNTaGFyZWRUcmFuc2l0aW9uIiwidHJlZUxlbmd0aCIsInByb2plY3Rpb25EZWx0YSIsImRpc3BsYXkiLCJsYXlvdXRTY3JvbGwiLCJ0cmFuc2Zvcm1Cb3giLCJzbmFwVG9EZWZhdWx0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidHJhbnNsYXRlQXhpcyIsImRpc3RhbmNlMiIsInRyYW5zZm9ybUF4aXMiLCJ0cmFuc2Zvcm1zIiwic2NhbGVLZXkiLCJvcmlnaW5LZXkiLCJheGlzT3JpZ2luIiwieEtleXMiLCJ5S2V5cyIsIm1lYXN1cmVWaWV3cG9ydEJveCIsIm1lYXN1cmVQYWdlQm94Iiwicm9vdFByb2plY3Rpb25Ob2RlMiIsInZpZXdwb3J0Qm94Iiwic2Nyb2xsMiIsImdldENvbnRleHRXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJlbGVtZW50RHJhZ0NvbnRyb2xzIiwiVmlzdWFsRWxlbWVudERyYWdDb250cm9scyIsIm9wZW5HbG9iYWxMb2NrIiwiaXNEcmFnZ2luZyIsImN1cnJlbnREaXJlY3Rpb24iLCJoYXNNdXRhdGVkQ29uc3RyYWludHMiLCJvcmlnaW5FdmVudCIsInNuYXBUb0N1cnNvciIsImRyYWdTbmFwVG9PcmlnaW4yIiwicGF1c2VBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uIiwiZHJhZ1Byb3BhZ2F0aW9uIiwib25EcmFnU3RhcnQiLCJyZXNvbHZlQ29uc3RyYWludHMiLCJpc0FuaW1hdGlvbkJsb2NrZWQiLCJnZXRBeGlzTW90aW9uVmFsdWUiLCJtZWFzdXJlZEF4aXMiLCJkcmFnRGlyZWN0aW9uTG9jayIsIm9uRGlyZWN0aW9uTG9jayIsIm9uRHJhZyIsImdldEN1cnJlbnREaXJlY3Rpb24iLCJ1cGRhdGVBeGlzIiwiZ2V0QW5pbWF0aW9uU3RhdGUiLCJwYW5TZXNzaW9uIiwiZ2V0VHJhbnNmb3JtUGFnZVBvaW50Iiwib25EcmFnRW5kIiwiX3BvaW50Iiwic2hvdWxkRHJhZyIsImF4aXNWYWx1ZSIsImRyYWdDb25zdHJhaW50cyIsIm1lYXN1cmUiLCJwcmV2Q29uc3RyYWludHMiLCJyZXNvbHZlUmVmQ29uc3RyYWludHMiLCJvbk1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJjb25zdHJhaW50c0VsZW1lbnQiLCJtZWFzdXJlZENvbnN0cmFpbnRzIiwidXNlckNvbnN0cmFpbnRzIiwiZHJhZ01vbWVudHVtIiwiZHJhZ1RyYW5zaXRpb24iLCJvbkRyYWdUcmFuc2l0aW9uRW5kIiwibW9tZW50dW1BbmltYXRpb25zIiwiaW5lcnRpYTIiLCJzdGFydEF4aXNWYWx1ZUFuaW1hdGlvbiIsImRyYWdLZXkiLCJleHRlcm5hbE1vdGlvblZhbHVlIiwic2NhbGVQb3NpdGlvbldpdGhpbkNvbnN0cmFpbnRzIiwiYm94UHJvZ3Jlc3MiLCJ1cGRhdGVTY3JvbGwiLCJ1cGRhdGVMYXlvdXQiLCJhZGRMaXN0ZW5lcnMiLCJzdG9wUG9pbnRlckxpc3RlbmVyIiwibWVhc3VyZURyYWdDb25zdHJhaW50cyIsInN0b3BNZWFzdXJlTGF5b3V0TGlzdGVuZXIiLCJzdG9wUmVzaXplTGlzdGVuZXIiLCJzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIiLCJoYXNMYXlvdXRDaGFuZ2VkIiwibW90aW9uVmFsdWUyIiwibG9ja1RocmVzaG9sZCIsIkRyYWdHZXN0dXJlIiwicmVtb3ZlR3JvdXBDb250cm9scyIsImRyYWdDb250cm9scyIsImFzeW5jSGFuZGxlciIsIlBhbkdlc3R1cmUiLCJyZW1vdmVQb2ludGVyRG93bkxpc3RlbmVyIiwib25Qb2ludGVyRG93biIsInBvaW50ZXJEb3duRXZlbnQiLCJzZXNzaW9uIiwiY3JlYXRlUGFuSGFuZGxlcnMiLCJvblBhblNlc3Npb25TdGFydCIsIm9uUGFuU3RhcnQiLCJvblBhbiIsIm9uUGFuRW5kIiwiaW1wb3J0X3JlYWN0MTciLCJpZDQiLCJ1c2VJZCIsInNhZmVUb1JlbW92ZSIsImdsb2JhbFByb2plY3Rpb25TdGF0ZSIsImhhc0FuaW1hdGVkU2luY2VSZXNpemUiLCJoYXNFdmVyVXBkYXRlZCIsInBpeGVsc1RvUGVyY2VudCIsInBpeGVscyIsImNvcnJlY3RCb3JkZXJSYWRpdXMiLCJjb3JyZWN0IiwiY29ycmVjdEJveFNoYWRvdyIsIm9yaWdpbmFsIiwic2hhZG93IiwieFNjYWxlIiwieVNjYWxlIiwiYXZlcmFnZVNjYWxlIiwiaW1wb3J0X3JlYWN0MTgiLCJNZWFzdXJlTGF5b3V0V2l0aENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImxheW91dEdyb3VwIiwic3dpdGNoTGF5b3V0R3JvdXAiLCJkZWZhdWx0U2NhbGVDb3JyZWN0b3JzIiwiZ3JvdXAiLCJkaWRVcGRhdGUiLCJzZXRPcHRpb25zIiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJsYXlvdXREZXBlbmRlbmN5Iiwid2lsbFVwZGF0ZSIsInByb21vdGUiLCJyZWxlZ2F0ZSIsInN0YWNrIiwiZ2V0U3RhY2siLCJtZW1iZXJzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicXVldWVNaWNyb3Rhc2siLCJjdXJyZW50QW5pbWF0aW9uIiwiaXNMZWFkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJwcm9tb3RlQ29udGV4dCIsInNjaGVkdWxlQ2hlY2tBZnRlclVubW91bnQiLCJkZXJlZ2lzdGVyIiwiTWVhc3VyZUxheW91dCIsImFwcGx5VG8iLCJib3hTaGFkb3ciLCJib3JkZXJzIiwibnVtQm9yZGVycyIsImFzTnVtYmVyIiwiaXNQeCIsIm1peFZhbHVlcyIsImZvbGxvdyIsImxlYWQiLCJzaG91bGRDcm9zc2ZhZGVPcGFjaXR5IiwiaXNPbmx5TWVtYmVyIiwiZWFzZUNyb3NzZmFkZUluIiwib3BhY2l0eUV4aXQiLCJlYXNlQ3Jvc3NmYWRlT3V0IiwiYm9yZGVyTGFiZWwiLCJmb2xsb3dSYWRpdXMiLCJnZXRSYWRpdXMiLCJsZWFkUmFkaXVzIiwiY2FuTWl4IiwicmFkaXVzTmFtZSIsImNvbXByZXNzIiwiY29weUF4aXNJbnRvIiwib3JpZ2luQXhpcyIsImNvcHlCb3hJbnRvIiwib3JpZ2luQm94IiwicmVtb3ZlUG9pbnREZWx0YSIsInJlbW92ZUF4aXNEZWx0YSIsInNvdXJjZUF4aXMiLCJyZWxhdGl2ZVByb2dyZXNzIiwicmVtb3ZlQXhpc1RyYW5zZm9ybXMiLCJ4S2V5czIiLCJ5S2V5czIiLCJyZW1vdmVCb3hUcmFuc2Zvcm1zIiwic291cmNlQm94IiwiaXNBeGlzRGVsdGFaZXJvIiwiaXNEZWx0YVplcm8iLCJib3hFcXVhbHMiLCJib3hFcXVhbHNSb3VuZGVkIiwiYXNwZWN0UmF0aW8iLCJOb2RlU3RhY2siLCJzY2hlZHVsZVJlbmRlciIsInByZXZMZWFkIiwiaW5kZXhPZk5vZGUiLCJmaW5kSW5kZXgiLCJtZW1iZXIiLCJwcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJzaG93IiwicmVzdW1lRnJvbSIsInByZXNlcnZlT3BhY2l0eSIsInNuYXBzaG90IiwiYW5pbWF0aW9uVmFsdWVzIiwiaXNVcGRhdGluZyIsImlzTGF5b3V0RGlydHkiLCJjcm9zc2ZhZGUiLCJoaWRlIiwiZXhpdEFuaW1hdGlvbkNvbXBsZXRlIiwicmVzdW1pbmdGcm9tIiwicmVtb3ZlTGVhZFNuYXBzaG90IiwiYnVpbGRQcm9qZWN0aW9uVHJhbnNmb3JtIiwibGF0ZXN0VHJhbnNmb3JtIiwieFRyYW5zbGF0ZSIsInlUcmFuc2xhdGUiLCJlbGVtZW50U2NhbGVYIiwiZWxlbWVudFNjYWxlWSIsImNvbXBhcmVCeURlcHRoIiwiZGVwdGgiLCJpc0RpcnR5IiwidGltZW91dCIsImNoZWNrRWxhcHNlZCIsInJlY29yZCIsImRhdGEiLCJNb3Rpb25EZWJ1ZyIsImlzU1ZHRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJhbmltYXRlU2luZ2xlVmFsdWUiLCJtb3Rpb25WYWx1ZSQxIiwidHJhbnNmb3JtQXhlcyIsImhpZGRlblZpc2liaWxpdHkiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uVGFyZ2V0IiwiaWQyIiwicHJvamVjdGlvbkZyYW1lRGF0YSIsInRvdGFsTm9kZXMiLCJyZXNvbHZlZFRhcmdldERlbHRhcyIsInJlY2FsY3VsYXRlZFByb2plY3Rpb24iLCJjcmVhdGVQcm9qZWN0aW9uTm9kZSIsImF0dGFjaFJlc2l6ZUxpc3RlbmVyIiwiZGVmYXVsdFBhcmVudCIsIm1lYXN1cmVTY3JvbGwiLCJjaGVja0lzU2Nyb2xsUm9vdCIsInJlc2V0VHJhbnNmb3JtIiwiUHJvamVjdGlvbk5vZGUiLCJhbmltYXRpb25JZCIsImlzVHJlZUFuaW1hdGluZyIsImlzUHJvamVjdGlvbkRpcnR5IiwiaXNTaGFyZWRQcm9qZWN0aW9uRGlydHkiLCJpc1RyYW5zZm9ybURpcnR5IiwidXBkYXRlTWFudWFsbHlCbG9ja2VkIiwidXBkYXRlQmxvY2tlZEJ5UmVzaXplIiwiaXNTVkciLCJuZWVkc1Jlc2V0Iiwic2hvdWxkUmVzZXRUcmFuc2Zvcm0iLCJldmVudEhhbmRsZXJzIiwiaGFzVHJlZUFuaW1hdGVkIiwidXBkYXRlU2NoZWR1bGVkIiwicHJvamVjdGlvblVwZGF0ZVNjaGVkdWxlZCIsImNoZWNrVXBkYXRlRmFpbGVkIiwiY2xlYXJBbGxTbmFwc2hvdHMiLCJ1cGRhdGVQcm9qZWN0aW9uIiwibm9kZXMiLCJwcm9wYWdhdGVEaXJ0eU5vZGVzIiwicmVzb2x2ZVRhcmdldERlbHRhIiwiY2FsY1Byb2plY3Rpb24iLCJjbGVhbkRpcnR5Tm9kZXMiLCJoYXNQcm9qZWN0ZWQiLCJpc1Zpc2libGUiLCJhbmltYXRpb25Qcm9ncmVzcyIsInNoYXJlZE5vZGVzIiwicGF0aCIsIm5vdGlmeUxpc3RlbmVycyIsImFyZ3MiLCJzdWJzY3JpcHRpb25NYW5hZ2VyIiwiaGFzTGlzdGVuZXJzIiwiY2FuY2VsRGVsYXkiLCJyZXNpemVVbmJsb2NrVXBkYXRlIiwiZmluaXNoQW5pbWF0aW9uIiwicmVnaXN0ZXJTaGFyZWROb2RlIiwiaGFzUmVsYXRpdmVUYXJnZXRDaGFuZ2VkIiwibmV3TGF5b3V0IiwiaXNUcmVlQW5pbWF0aW9uQmxvY2tlZCIsInJlbGF0aXZlVGFyZ2V0IiwibGF5b3V0VHJhbnNpdGlvbiIsImRlZmF1bHRMYXlvdXRUcmFuc2l0aW9uIiwib25MYXlvdXRBbmltYXRpb25TdGFydCIsIm9uTGF5b3V0QW5pbWF0aW9uQ29tcGxldGUiLCJ0YXJnZXRDaGFuZ2VkIiwidGFyZ2V0TGF5b3V0IiwiaGFzT25seVJlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsImxheW91dFJvb3QiLCJzZXRBbmltYXRpb25PcmlnaW4iLCJhbmltYXRpb25PcHRpb25zIiwiYmxvY2tVcGRhdGUiLCJ1bmJsb2NrVXBkYXRlIiwiaXNVcGRhdGVCbG9ja2VkIiwic3RhcnRVcGRhdGUiLCJyZXNldFJvdGF0aW9uIiwiZ2V0VHJhbnNmb3JtVGVtcGxhdGUiLCJzaG91bGROb3RpZnlMaXN0ZW5lcnMiLCJwcmV2VHJhbnNmb3JtVGVtcGxhdGVWYWx1ZSIsInVwZGF0ZVNuYXBzaG90IiwidXBkYXRlV2FzQmxvY2tlZCIsImNsZWFyTWVhc3VyZW1lbnRzIiwiY2xlYXJJc0xheW91dERpcnR5IiwicmVzZXRUcmFuc2Zvcm1TdHlsZSIsIm5vdGlmeUxheW91dFVwZGF0ZSIsInByZVJlbmRlciIsImNsZWFyU25hcHNob3QiLCJyZW1vdmVMZWFkU25hcHNob3RzIiwic2NoZWR1bGVVcGRhdGVQcm9qZWN0aW9uIiwiYWx3YXlzTWVhc3VyZUxheW91dCIsInByZXZMYXlvdXQiLCJsYXlvdXRDb3JyZWN0ZWQiLCJwaGFzZSIsIm5lZWRzTWVhc3VyZW1lbnQiLCJpc1Jvb3QiLCJpc1Jlc2V0UmVxdWVzdGVkIiwiaGFzUHJvamVjdGlvbiIsInRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ0cmFuc2Zvcm1UZW1wbGF0ZUhhc0NoYW5nZWQiLCJyZW1vdmVUcmFuc2Zvcm0iLCJwYWdlQm94IiwicmVtb3ZlRWxlbWVudFNjcm9sbCIsInJvdW5kQm94IiwibWVhc3VyZWRCb3giLCJib3hXaXRob3V0U2Nyb2xsIiwicm9vdFNjcm9sbCIsImFwcGx5VHJhbnNmb3JtIiwidHJhbnNmb3JtT25seSIsIndpdGhUcmFuc2Zvcm1zIiwiYm94V2l0aG91dFRyYW5zZm9ybSIsIm5vZGVCb3giLCJzZXRUYXJnZXREZWx0YSIsInRhcmdldERlbHRhIiwiZm9yY2VSZWxhdGl2ZVBhcmVudFRvUmVzb2x2ZVRhcmdldCIsInJlbGF0aXZlUGFyZW50IiwicmVzb2x2ZWRSZWxhdGl2ZVRhcmdldEF0IiwiZm9yY2VSZWNhbGN1bGF0aW9uIiwiZ2V0TGVhZCIsImlzU2hhcmVkIiwiYXR0ZW1wdFRvUmVzb2x2ZVJlbGF0aXZlVGFyZ2V0IiwiZ2V0Q2xvc2VzdFByb2plY3RpbmdQYXJlbnQiLCJyZWxhdGl2ZVRhcmdldE9yaWdpbiIsInRhcmdldFdpdGhUcmFuc2Zvcm1zIiwiaXNQcm9qZWN0aW5nIiwicGVuZGluZ0FuaW1hdGlvbiIsInByZXZUcmVlU2NhbGVYIiwicHJldlRyZWVTY2FsZVkiLCJwcm9qZWN0aW9uVHJhbnNmb3JtIiwicHJvamVjdGlvbkRlbHRhV2l0aFRyYW5zZm9ybSIsInByZXZQcm9qZWN0aW9uVHJhbnNmb3JtIiwibm90aWZ5QWxsMiIsInNuYXBzaG90TGF0ZXN0VmFsdWVzIiwibWl4ZWRWYWx1ZXMiLCJyZWxhdGl2ZUxheW91dCIsInNuYXBzaG90U291cmNlIiwibGF5b3V0U291cmNlIiwiaXNTaGFyZWRMYXlvdXRBbmltYXRpb24iLCJoYXNPcGFjaXR5Q3Jvc3NmYWRlIiwicHJldlJlbGF0aXZlVGFyZ2V0IiwibWl4VGFyZ2V0RGVsdGEiLCJtaXhBeGlzRGVsdGEiLCJtaXhCb3giLCJjb21wbGV0ZUFuaW1hdGlvbiIsImFwcGx5VHJhbnNmb3Jtc1RvVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZVBvc2l0aW9uT25seSIsImFuaW1hdGlvblR5cGUiLCJ4TGVuZ3RoIiwieUxlbmd0aCIsImluaXRpYWxQcm9tb3Rpb25Db25maWciLCJzaG91bGRQcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJnZXRQcmV2TGVhZCIsImhhc1JvdGF0ZSIsInJlc2V0VmFsdWVzIiwic2V0U3RhdGljVmFsdWUiLCJzdHlsZXMiLCJwb2ludGVyRXZlbnRzIiwiZW1wdHlTdHlsZXMiLCJ2YWx1ZXNUb1JlbmRlciIsImNvcnJlY3RlZCIsIm51bSIsInJlc2V0VHJlZSIsIm1lYXN1cmVkTGF5b3V0IiwiYXhpc1NuYXBzaG90IiwibGF5b3V0RGVsdGEiLCJ2aXN1YWxEZWx0YSIsInBhcmVudFNuYXBzaG90IiwicGFyZW50TGF5b3V0IiwicmVsYXRpdmVTbmFwc2hvdCIsIm9uQmVmb3JlTGF5b3V0TWVhc3VyZSIsIm1peEF4aXMiLCJ1c2VyQWdlbnRDb250YWlucyIsInN0cmluZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInJvdW5kUG9pbnQiLCJyb3VuZEF4aXMiLCJEb2N1bWVudFByb2plY3Rpb25Ob2RlIiwibm90aWZ5MiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbExlZnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwicm9vdFByb2plY3Rpb25Ob2RlIiwiSFRNTFByb2plY3Rpb25Ob2RlIiwiZG9jdW1lbnROb2RlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBvc2l0aW9uIiwic3BsaXRDU1NWYXJpYWJsZVJlZ2V4IiwicGFyc2VDU1NWYXJpYWJsZSIsImV4ZWMiLCJmYWxsYmFjayIsIm1heERlcHRoIiwiZ2V0VmFyaWFibGVWYWx1ZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltbWVkIiwicmVzb2x2ZUNTU1ZhcmlhYmxlcyIsInBvc2l0aW9uYWxLZXlzIiwiaXNQb3NpdGlvbmFsS2V5IiwiaGFzUG9zaXRpb25hbEtleSIsImlzTnVtT3JQeFR5cGUiLCJnZXRQb3NGcm9tTWF0cml4IiwibWF0cml4IiwicG9zIiwiZ2V0VHJhbnNsYXRlRnJvbU1hdHJpeCIsInBvczIiLCJwb3MzIiwiX2Jib3giLCJtYXRyaXgzZCIsInRyYW5zZm9ybUtleXMiLCJub25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtS2V5cyIsInJlbW92ZU5vblRyYW5zbGF0aW9uYWxUcmFuc2Zvcm0iLCJyZW1vdmVkVHJhbnNmb3JtcyIsInBvc2l0aW9uYWxWYWx1ZXMiLCJjb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMiLCJjaGFuZ2VkS2V5cyIsIm9yaWdpbkJib3giLCJlbGVtZW50Q29tcHV0ZWRTdHlsZSIsInRhcmdldEJib3giLCJjaGVja0FuZENvbnZlcnRDaGFuZ2VkVmFsdWVUeXBlcyIsInRhcmdldFBvc2l0aW9uYWxLZXlzIiwicmVtb3ZlZFRyYW5zZm9ybVZhbHVlcyIsImhhc0F0dGVtcHRlZFRvUmVtb3ZlVHJhbnNmb3JtVmFsdWVzIiwiY2hhbmdlZFZhbHVlVHlwZUtleXMiLCJmcm9tVHlwZSIsInRvVHlwZSIsIm51bUtleWZyYW1lcyIsInNjcm9sbFkiLCJwYWdlWU9mZnNldCIsImNvbnZlcnRlZFRhcmdldCIsInNjcm9sbFRvIiwidW5pdENvbnZlcnNpb24iLCJwYXJzZURvbVZhcmlhbnQiLCJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsImhhc1JlZHVjZWRNb3Rpb25MaXN0ZW5lciIsImluaXRQcmVmZXJzUmVkdWNlZE1vdGlvbiIsIm1hdGNoTWVkaWEiLCJtb3Rpb25NZWRpYVF1ZXJ5Iiwic2V0UmVkdWNlZE1vdGlvblByZWZlcmVuY2VzIiwiYWRkTGlzdGVuZXIiLCJ1cGRhdGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMiLCJuZXh0VmFsdWUiLCJwcmV2VmFsdWUiLCJleGlzdGluZ1ZhbHVlIiwibGF0ZXN0VmFsdWUiLCJnZXRTdGF0aWNWYWx1ZSIsInJlbW92ZVZhbHVlIiwiZmVhdHVyZU5hbWVzIiwibnVtRmVhdHVyZXMiLCJwcm9wRXZlbnRIYW5kbGVycyIsIm51bVZhcmlhbnRQcm9wcyIsInZhbHVlU3Vic2NyaXB0aW9ucyIsInByZXZNb3Rpb25WYWx1ZXMiLCJwcm9wRXZlbnRTdWJzY3JpcHRpb25zIiwibm90aWZ5VXBkYXRlIiwidHJpZ2dlckJ1aWxkIiwicmVuZGVySW5zdGFuY2UiLCJiYXNlVGFyZ2V0IiwiaW5pdGlhbFZhbHVlcyIsImluaXRpYWxNb3Rpb25WYWx1ZXMiLCJfcHJvcHMiLCJfcHJldlByb3BzIiwicmVtb3ZlRnJvbVZhcmlhbnRUcmVlIiwiYWRkVmFyaWFudENoaWxkIiwiYmluZFRvTW90aW9uVmFsdWUiLCJ2YWx1ZUlzVHJhbnNmb3JtIiwicmVtb3ZlT25DaGFuZ2UiLCJyZW1vdmVPblJlbmRlclJlcXVlc3QiLCJvdGhlciIsInNvcnRJbnN0YW5jZU5vZGVQb3NpdGlvbiIsInJlbmRlcmVkUHJvcHMiLCJQcm9qZWN0aW9uTm9kZUNvbnN0cnVjdG9yIiwic3RyaWN0TWVzc2FnZSIsImlnbm9yZVN0cmljdCIsIkZlYXR1cmVDb25zdHJ1Y3RvciIsIk1lYXN1cmVMYXlvdXRDb21wb25lbnQiLCJmZWF0dXJlIiwiYnVpbGQiLCJtZWFzdXJlSW5zdGFuY2VWaWV3cG9ydEJveCIsImNhbk11dGF0ZSIsIm1ha2VUYXJnZXRBbmltYXRhYmxlRnJvbUluc3RhbmNlIiwibGlzdGVuZXIiLCJoYW5kbGVDaGlsZE1vdGlvblZhbHVlIiwiZ2V0Q2xvc2VzdFZhcmlhbnROb2RlIiwic3RhcnRBdFBhcmVudCIsImNvbnRleHQyIiwiY2xvc2VzdFZhcmlhbnROb2RlIiwicmVtb3ZlVmFsdWVGcm9tUmVuZGVyU3RhdGUiLCJnZXRCYXNlVGFyZ2V0RnJvbVByb3BzIiwicmVhZFZhbHVlRnJvbUluc3RhbmNlIiwidmFsdWVGcm9tSW5pdGlhbCIsIkRPTVZpc3VhbEVsZW1lbnQiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImdldENvbXB1dGVkU3R5bGUyIiwiSFRNTFZpc3VhbEVsZW1lbnQiLCJkZWZhdWx0VHlwZSIsImNvbXB1dGVkU3R5bGUiLCJjaGlsZFN1YnNjcmlwdGlvbiIsInRleHRDb250ZW50IiwiU1ZHVmlzdWFsRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImNyZWF0ZURvbVZpc3VhbEVsZW1lbnQiLCJpbXBvcnRfcmVhY3QxOSIsInVzZUlzTW91bnRlZCIsImltcG9ydF9yZWFjdDIwIiwiZm9yY2VkUmVuZGVyQ291bnQiLCJzZXRGb3JjZWRSZW5kZXJDb3VudCIsInVzZVN0YXRlIiwiZm9yY2VSZW5kZXIiLCJkZWZlcnJlZEZvcmNlUmVuZGVyIiwiUmVhY3QyIiwiaW1wb3J0X3JlYWN0MjEiLCJQb3BDaGlsZE1lYXN1cmUiLCJjaGlsZFJlZiIsInNpemVSZWYiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJQb3BDaGlsZCIsImRhdGFzZXQiLCJtb3Rpb25Qb3BJZCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInJlbW92ZUNoaWxkIiwiY2xvbmVFbGVtZW50IiwiUmVhY3QzIiwiaW1wb3J0X3JlYWN0MjIiLCJQcmVzZW5jZUNoaWxkIiwicHJlc2VuY2VBZmZlY3RzTGF5b3V0IiwibW9kZSIsInByZXNlbmNlQ2hpbGRyZW4iLCJuZXdDaGlsZHJlbk1hcCIsImNoaWxkSWQiLCJpc0NvbXBsZXRlIiwiXyIsImltcG9ydF9yZWFjdDIzIiwiUmVhY3Q0IiwiaW1wb3J0X3JlYWN0MjQiLCJnZXRDaGlsZEtleSIsInVwZGF0ZUNoaWxkTG9va3VwIiwiYWxsQ2hpbGRyZW4iLCJvbmx5RWxlbWVudHMiLCJmaWx0ZXJlZCIsIkNoaWxkcmVuIiwiaXNWYWxpZEVsZW1lbnQiLCJleGl0QmVmb3JlRW50ZXIiLCJmaWx0ZXJlZENoaWxkcmVuIiwiY2hpbGRyZW5Ub1JlbmRlciIsImV4aXRpbmdDaGlsZHJlbiIsInByZXNlbnRDaGlsZHJlbiIsIkZyYWdtZW50IiwicHJlc2VudEtleXMiLCJ0YXJnZXRLZXlzIiwibnVtUHJlc2VudCIsImNvbXBvbmVudCIsImluc2VydGlvbkluZGV4IiwiZXhpdGluZ0NvbXBvbmVudCIsIm9uRXhpdCIsImxlZnRPdmVyS2V5cyIsImNoaWxkS2V5IiwibGVmdE92ZXJLZXkiLCJwcmVzZW50Q2hpbGQiLCJwcmVzZW50Q2hpbGRLZXkiLCJSZWFjdDUiLCJpbXBvcnRfcmVhY3QyNSIsIlJlYWN0NiIsImltcG9ydF9yZWFjdDI2Iiwic2V0SXNMb2FkZWQiLCJpc0xhenlCdW5kbGUiLCJsb2FkZWRSZW5kZXJlciIsImxvYWRlZEZlYXR1cmVzIiwiaW1wb3J0X3JlYWN0MjciLCJub2RlR3JvdXAiLCJkaXJ0eUFsbCIsImRpcnR5IiwiUmVhY3Q3IiwiaW1wb3J0X3JlYWN0MjgiLCJzaG91bGRJbmhlcml0R3JvdXAiLCJzaG91bGRJbmhlcml0SWQiLCJsYXlvdXRHcm91cENvbnRleHQiLCJkZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0IiwidXBzdHJlYW1JZCIsIm1lbW9pemVkQ29udGV4dCIsImltcG9ydF9yZWFjdDI5IiwiUmVvcmRlckNvbnRleHQiLCJjaGVja1Jlb3JkZXIiLCJpdGVtMiIsIm5leHRPZmZzZXQiLCJuZXh0SXRlbSIsIm5leHRMYXlvdXQiLCJuZXh0SXRlbUNlbnRlciIsIlJlYWN0OCIsImltcG9ydF9yZWFjdDMwIiwiUmVvcmRlckdyb3VwIiwiYXMiLCJvblJlb3JkZXIiLCJpc1Jlb3JkZXJpbmciLCJyZWdpc3Rlckl0ZW0iLCJpZHgiLCJjb21wYXJlTWluIiwidXBkYXRlT3JkZXIiLCJuZXdPcmRlciIsIkdyb3VwIiwiaW1wb3J0X3JlYWN0MzEiLCJzZXRMYXRlc3QiLCJpc0N1c3RvbVZhbHVlVHlwZSIsImdldE1peGVyMiIsInVzZUltbWVkaWF0ZSIsImFyZ09mZnNldCIsImlucHV0VmFsdWUiLCJpbnB1dFJhbmdlIiwib3V0cHV0UmFuZ2UiLCJ1c2VDb21iaW5lTW90aW9uVmFsdWVzIiwiY29tYmluZVZhbHVlcyIsInVwZGF0ZVZhbHVlIiwic2NoZWR1bGVVcGRhdGUiLCJ1c2VDb21wdXRlZCIsImNvbXB1dGUiLCJpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lciIsInVzZUxpc3RUcmFuc2Zvcm0iLCJSZWFjdDkiLCJpbXBvcnRfcmVhY3QzMiIsInVzZURlZmF1bHRNb3Rpb25WYWx1ZSIsIlJlb3JkZXJJdGVtIiwibGF0ZXN0WCIsImxhdGVzdFkiLCJnZXN0dXJlUG9pbnQiLCJvbkxheW91dE1lYXN1cmUiLCJtZWFzdXJlZCIsIkl0ZW0iLCJmcmFnbWVudHMiLCJudW1GcmFnbWVudHMiLCJidWlsZFZhbHVlIiwiaW1wb3J0X3JlYWN0MzMiLCJhY3RpdmVTcHJpbmdBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uMiIsImltcG9ydF9yZWFjdDM0IiwibmV3VmVsb2NpdHkiLCJyZXNvbHZlRWxlbWVudHMiLCJlbGVtZW50cyIsInNjb3BlIiwic2VsZWN0b3JDYWNoZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXNpemVIYW5kbGVycyIsIm9ic2VydmVyIiwiZ2V0RWxlbWVudFNpemUiLCJib3JkZXJCb3hTaXplIiwiaW5saW5lU2l6ZSIsImJsb2NrU2l6ZSIsIm5vdGlmeVRhcmdldCIsImNvbnRlbnRSZWN0IiwiY29udGVudFNpemUiLCJub3RpZnlBbGwiLCJjcmVhdGVSZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwicmVzaXplRWxlbWVudCIsImVsZW1lbnRIYW5kbGVycyIsIndpbmRvd0NhbGxiYWNrcyIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJjcmVhdGVXaW5kb3dSZXNpemVIYW5kbGVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVzaXplV2luZG93IiwicmVzaXplIiwibWF4RWxhcHNlZDIiLCJjcmVhdGVBeGlzSW5mbyIsInNjcm9sbExlbmd0aCIsInRhcmdldE9mZnNldCIsImNvbnRhaW5lckxlbmd0aCIsImNyZWF0ZVNjcm9sbEluZm8iLCJ1cGRhdGVBeGlzSW5mbyIsImF4aXNOYW1lIiwicHJldlRpbWUiLCJ1cGRhdGVTY3JvbGxJbmZvIiwiY2FsY0luc2V0IiwiY29udGFpbmVyIiwiaW5zZXQiLCJvZmZzZXRQYXJlbnQiLCJzdmdCb3VuZGluZ0JveCIsInBhcmVudEJvdW5kaW5nQm94IiwiU1ZHR3JhcGhpY3NFbGVtZW50Iiwic3ZnIiwicGFyZW50Tm9kZSIsIlNjcm9sbE9mZnNldCIsIkVudGVyIiwiRXhpdCIsIkFueSIsIkFsbCIsIm5hbWVkRWRnZXMiLCJjZW50ZXIiLCJyZXNvbHZlRWRnZSIsImVkZ2UiLCJhc051bWJlcjIiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImRlZmF1bHRPZmZzZXQyIiwicmVzb2x2ZU9mZnNldCIsInRhcmdldEluc2V0Iiwib2Zmc2V0RGVmaW5pdGlvbiIsInRhcmdldFBvaW50IiwiY29udGFpbmVyUG9pbnQiLCJnZXRUYXJnZXRTaXplIiwicmVzb2x2ZU9mZnNldHMiLCJsZW5ndGhMYWJlbCIsInRhcmdldFNpemUiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsImNvbnRhaW5lclNpemUiLCJoYXNDaGFuZ2VkIiwibnVtT2Zmc2V0cyIsImludGVycG9sYXRvck9mZnNldHMiLCJjcmVhdGVPblNjcm9sbEhhbmRsZXIiLCJvblNjcm9sbCIsInNjcm9sbExpc3RlbmVycyIsInJlc2l6ZUxpc3RlbmVycyIsIm9uU2Nyb2xsSGFuZGxlcnMiLCJnZXRFdmVudFRhcmdldCIsImNvbnRhaW5lckhhbmRsZXJzIiwiY29udGFpbmVySGFuZGxlciIsIm1lYXN1cmVBbGwiLCJ1cGRhdGVBbGwiLCJsaXN0ZW5lcjIiLCJjdXJyZW50SGFuZGxlcnMiLCJzY3JvbGxMaXN0ZW5lciIsImltcG9ydF9yZWFjdDM1IiwicmVmV2FybmluZyIsImNyZWF0ZVNjcm9sbE1vdGlvblZhbHVlcyIsInNjcm9sbFgiLCJzY3JvbGxYUHJvZ3Jlc3MiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJsYXlvdXRFZmZlY3QiLCJ1c2VMaWZlY3ljbGVFZmZlY3QiLCJpbXBvcnRfcmVhY3QzNiIsImluaXRpYWxUaW1lc3RhbXAiLCJwcm92aWRlVGltZVNpbmNlU3RhcnQiLCJXaWxsQ2hhbmdlTW90aW9uVmFsdWUiLCJtZW1iZXJOYW1lIiwiaW1wb3J0X3JlYWN0MzciLCJpbXBvcnRfcmVhY3QzOCIsInJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlIiwiaGFzTW91bnRlZCIsInN1YnNjcmliZXJzIiwib2JzZXJ2ZVRpbWVsaW5lIiwicHJldlByb2dyZXNzIiwib25GcmFtZSIsInBlcmNlbnRhZ2UiLCJzdXBwb3J0c1Njcm9sbFRpbWVsaW5lIiwiU2Nyb2xsVGltZWxpbmUiLCJHcm91cFBsYXliYWNrQ29udHJvbHMiLCJvblJlc29sdmUiLCJvblJlamVjdCIsImNhdGNoIiwiZ2V0QWxsIiwicHJvcE5hbWUiLCJzZXRBbGwiLCJuZXdWYWx1ZSIsImNhbmNlbEFsbCIsImNhbmNlbFRpbWVsaW5lIiwicnVuQWxsIiwibWV0aG9kTmFtZSIsImlzRE9NS2V5ZnJhbWVzIiwiY3JlYXRlR2VuZXJhdG9yRWFzaW5nIiwiY2FsY05leHRUaW1lIiwibGFiZWxzIiwicmFuZ2VTaXplIiwiZ2V0RWFzaW5nRm9yU2VnbWVudCIsImVyYXNlS2V5ZnJhbWVzIiwic2VxdWVuY2UiLCJlbmRUaW1lIiwia2V5ZnJhbWUiLCJhdCIsImFkZEtleWZyYW1lcyIsImNvbXBhcmVCeVRpbWUiLCJkZWZhdWx0U2VnbWVudEVhc2luZyIsImNyZWF0ZUFuaW1hdGlvbnNGcm9tU2VxdWVuY2UiLCJkZWZhdWx0VHJhbnNpdGlvbiIsInNlcXVlbmNlVHJhbnNpdGlvbiIsImRlZmF1bHREdXJhdGlvbiIsImFuaW1hdGlvbkRlZmluaXRpb25zIiwic2VxdWVuY2VzIiwiZWxlbWVudENhY2hlIiwidGltZUxhYmVscyIsInNlZ21lbnQiLCJzdWJqZWN0IiwibWF4RHVyYXRpb24zIiwicmVzb2x2ZVZhbHVlU2VxdWVuY2UiLCJ2YWx1ZUtleWZyYW1lcyIsInZhbHVlU2VxdWVuY2UiLCJlbGVtZW50SW5kZXgiLCJudW1FbGVtZW50cyIsInZhbHVlS2V5ZnJhbWVzQXNMaXN0Iiwia2V5ZnJhbWVzQXNMaXN0IiwicmVtYWluaW5nVHJhbnNpdGlvbiIsImNhbGN1bGF0ZWREZWxheSIsImFic29sdXRlRGVsdGEiLCJpc051bWJlcktleWZyYW1lc0FycmF5Iiwic3ByaW5nVHJhbnNpdGlvbiIsInNwcmluZ0Vhc2luZyIsInRhcmdldFRpbWUiLCJyZW1haW5kZXIiLCJ1bnNoaWZ0Iiwic3ViamVjdFNlcXVlbmNlIiwiZ2V0U3ViamVjdFNlcXVlbmNlIiwiZ2V0VmFsdWVTZXF1ZW5jZSIsImdldFZhbHVlVHJhbnNpdGlvbjIiLCJ2YWx1ZVNlcXVlbmNlcyIsInZhbHVlT2Zmc2V0IiwidmFsdWVFYXNpbmciLCJpc051bWJlciIsImFuaW1hdGVFbGVtZW50cyIsImVsZW1lbnRPclNlbGVjdG9yIiwiaXNTZXF1ZW5jZSIsImFuaW1hdGVTZXF1ZW5jZSIsInNjb3BlZEFuaW1hdGUiLCJ2YWx1ZU9yRWxlbWVudE9yU2VxdWVuY2UiLCJpbXBvcnRfcmVhY3QzOSIsIml0ZW1zIiwic2V0SXRlbSIsInJ1bkN5Y2xlIiwidGhyZXNob2xkcyIsImFjdGl2ZUludGVyc2VjdGlvbnMiLCJvbkludGVyc2VjdGlvbkNoYW5nZSIsIm5ld09uRW5kIiwib2JzZXJ2ZXIyIiwiZGlzY29ubmVjdCIsImltcG9ydF9yZWFjdDQwIiwic2V0SW5WaWV3Iiwib25FbnRlciIsImNvbXBvbmVudENvbnRyb2xzIiwibmF0aXZlRXZlbnQiLCJjcmVhdGVEcmFnQ29udHJvbHMiLCJpbXBvcnRfcmVhY3Q0MSIsInN0YXJ0VHJhbnNpdGlvbiIsImltcG9ydF9yZWFjdDQyIiwiZm9yY2VVcGRhdGUiLCJzdGFydEluc3RhbnRMYXlvdXRUcmFuc2l0aW9uIiwidW5sb2NrT25GcmFtZVJlZiIsIlJlYWN0MTAiLCJyZXNldCIsImFwcGVhclN0b3JlSWQiLCJhcHBlYXJBbmltYXRpb25TdG9yZSIsImhhbmRvZmZGcmFtZVRpbWUiLCJoYW5kb2ZmT3B0aW1pemVkQXBwZWFyQW5pbWF0aW9uIiwiZWxlbWVudElkIiwiX3ZhbHVlIiwiX2ZyYW1lIiwib3B0aW1pc2VkVmFsdWVOYW1lIiwic3RvcmVJZCIsIm9wdGltaXNlZEFuaW1hdGlvbiIsImVycm9yIiwic3RhcnRGcmFtZVRpbWUiLCJyZWFkeUFuaW1hdGlvbiIsIm9uUmVhZHkiLCJhcHBlYXJBbmltYXRpb24iLCJyZWFkeSIsImltcG9ydF9yZWFjdDQzIiwiY3JlYXRlT2JqZWN0IiwiU3RhdGVWaXN1YWxFbGVtZW50IiwicmVzdG9yZVRyYW5zZm9ybSIsIl9zdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNldEFuaW1hdGlvblN0YXRlIiwiYW5pbWF0aW9uRGVmaW5pdGlvbiIsImltcG9ydF9yZWFjdDQ0IiwibWF4U2NhbGUiLCJpbnZlcnRTY2FsZSIsImhhc1dhcm5lZCIsInBhcmVudFNjYWxlWCIsInBhcmVudFNjYWxlWSIsIlJlYWN0MTEiLCJpZDMiLCJzY3JvbGxUaW1lbGluZUZhbGxiYWNrIiwidGltZWxpbmVDYWNoZSIsImdldFRpbWVsaW5lIiwiZ2V0T3JpZ2luSW5kZXgiLCJ0b3RhbCIsImxhc3RJbmRleCIsInN0YXJ0RGVs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QSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLGtCQUFB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LFFBQUEsR0FBV0gsS0FBQSxHQUFRcjlDLFFBQUE7TUFDekIsTUFBTTRILGNBQUEsR0FBaUIzRiwwQkFBQSxDQUEyQjlCLEtBQUk7TUFDdERKLE1BQUEsR0FBUTZILGNBQUEsQ0FBZTdILE1BQUEsR0FBUXk5QyxRQUFRLElBQUlBLFFBQUE7SUFDL0M7SUFDQSxPQUFPRCxVQUFBLEdBQWF4OUMsTUFBQTtFQUN4QjtBQUNKOzs7QUNmQSxJQUFNeG5CLElBQUEsR0FBTzVCLEtBQUE7QUFNYixJQUFNdkIsVUFBQSxHQUFheWYsVUFBQSxDQUFXUyxNQUFBLENBQU8sQ0FBQ0MsR0FBQSxFQUFLMVUsR0FBQSxLQUFRO0VBQy9DMFUsR0FBQSxDQUFJMVUsR0FBRyxJQUFLdVMsUUFBQSxJQUFZamUsV0FBQSxDQUFZaWUsUUFBTztFQUMzQyxPQUFPbUMsR0FBQTtBQUNYLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==