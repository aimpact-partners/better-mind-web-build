System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["swiper","10.3.1"]]);
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

// .beyond/uimport/temp/swiper.10.3.1.js
var swiper_10_3_1_exports = {};
__export(swiper_10_3_1_exports, {
  Swiper: () => Swiper,
  default: () => swiper_10_3_1_default
});
module.exports = __toCommonJS(swiper_10_3_1_exports);

// node_modules/swiper/shared/ssr-window.esm.mjs
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === "undefined") target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}

// node_modules/swiper/shared/utils.mjs
function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {}
    try {
      delete object[key];
    } catch (e) {}
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle2(el) {
  const window2 = getWindow();
  let style;
  if (window2.getComputedStyle) {
    style = window2.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = "x";
  }
  const window2 = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle2(el);
  if (window2.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform.split(", ").map(a => a.replace(",", ".")).join(", ");
    }
    transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }
  if (axis === "x") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject2(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
  if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend2() {
  const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend2(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window2 = getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = "none";
  window2.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? "next" : "prev";
  const isOutOfBound = (current, target) => {
    return dir === "next" && current >= target || dir === "prev" && current <= target;
  };
  const animate = () => {
    time = (/* @__PURE__ */new Date()).getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.scrollSnapType = "";
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window2.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = "";
  }
  return [...element.children].filter(el => el.matches(selector));
}
function createElement(tag, classes2) {
  if (classes2 === void 0) {
    classes2 = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes2) ? classes2 : [classes2]));
  return el;
}
function elementOffset(el) {
  const window2 = getWindow();
  const document2 = getDocument();
  const box = el.getBoundingClientRect();
  const body = document2.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
  const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling;
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling;
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window2 = getWindow();
  return window2.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return void 0;
}
function elementParents(el, selector) {
  const parents = [];
  let parent = el.parentElement;
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener("transitionend", fireCallBack);
  }
  if (callback) {
    el.addEventListener("transitionend", fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window2 = getWindow();
  if (includeMargins) {
    return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
  }
  return el.offsetWidth;
}

// node_modules/swiper/shared/swiper-core.mjs
var support;
function calcSupport() {
  const window2 = getWindow();
  const document2 = getDocument();
  return {
    smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
    touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}
var deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support2 = getSupport();
  const window2 = getWindow();
  const platform = window2.navigator.platform;
  const ua = userAgent || window2.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window2.screen.width;
  const screenHeight = window2.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === "Win32";
  let macos = platform === "MacIntel";
  const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, "13_0_0"];
    macos = false;
  }
  if (android && !windows) {
    device.os = "android";
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = "ios";
    device.ios = true;
  }
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
var browser;
function calcBrowser() {
  const window2 = getWindow();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window2.navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
  }
  if (isSafari()) {
    const ua = String(window2.navigator.userAgent);
    if (ua.includes("Version/")) {
      const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("beforeResize");
    emit("resize");
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window2.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window2.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit("orientationchange");
  };
  on("init", () => {
    if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
      createObserver();
      return;
    }
    window2.addEventListener("resize", resizeHandler);
    window2.addEventListener("orientationchange", orientationChangeHandler);
  });
  on("destroy", () => {
    removeObserver();
    window2.removeEventListener("resize", resizeHandler);
    window2.removeEventListener("orientationchange", orientationChangeHandler);
  });
}
function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window2 = getWindow();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit("observerUpdate", mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate2() {
        emit("observerUpdate", mutations[0]);
      };
      if (window2.requestAnimationFrame) {
        window2.requestAnimationFrame(observerUpdate);
      } else {
        window2.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === "undefined" ? true : options.attributes,
      childList: typeof options.childList === "undefined" ? true : options.childList,
      characterData: typeof options.characterData === "undefined" ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on("init", init);
  on("destroy", destroy);
}
var eventsEmitter = {
  on(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    events2.split(" ").forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events2, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    function onceHandler() {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events2, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== "function") return self;
    const method = priority ? "unshift" : "push";
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events2, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events2.split(" ").forEach(event => {
      if (typeof handler === "undefined") {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      events2 = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events2 = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }
  width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
  height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    return {
      "width": "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      "marginRight": "marginBottom"
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === "function") {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === "function") {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === "undefined") {
    return;
  }
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = "";
    } else {
      slideEl.style.marginRight = "";
    }
    slideEl.style.marginBottom = "";
    slideEl.style.marginTop = "";
  });
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide2;
    if (slides[i]) slide2 = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide2, slidesLength, getDirectionLabel);
    }
    if (slides[i] && elementStyle(slide2, "display") === "none") continue;
    if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel("width")] = ``;
      }
      const slideStyles = getComputedStyle(slide2);
      const currentTransform = slide2.style.transform;
      const currentWebKitTransform = slide2.style.webkitTransform;
      if (currentTransform) {
        slide2.style.transform = "none";
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = "none";
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
      } else {
        const width = getDirectionPropertyValue(slideStyles, "width");
        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
        const boxSizing = slideStyles.getPropertyValue("box-sizing");
        if (boxSizing && boxSizing === "border-box") {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide2;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide2.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide2.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit("slidesLengthChange");
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit("snapGridLengthChange");
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit("slidesGridLengthChange");
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === "number") {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide2 => {
        activeSlides.push(slide2);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== "undefined") {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}
function updateSlidesProgress(translate2) {
  if (translate2 === void 0) {
    translate2 = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
  let offsetCenter = -translate2;
  if (rtl) offsetCenter = translate2;
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
  } else if (typeof spaceBetween === "string") {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide2 = slides[i];
    let slideOffset = slide2.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide2.progress = rtl ? -slideProgress : slideProgress;
    slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}
function updateProgress(translate2) {
  const swiper = this;
  if (typeof translate2 === "undefined") {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate2 - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate2);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
  if (isBeginning && !wasBeginning) {
    swiper.emit("reachBeginning toEdge");
  }
  if (isEnd && !wasEnd) {
    swiper.emit("reachEnd toEdge");
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit("fromEdge");
  }
  swiper.emit("progress", progress);
}
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = selector => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    activeSlide.classList.add(params.slideActiveClass);
    let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}
var processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
var unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute("loading");
};
var preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};
function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== "undefined") {
      if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate2 >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex2 = aIndex - swiper.virtual.slidesBefore;
    if (realIndex2 < 0) {
      realIndex2 = swiper.virtual.slides.length + realIndex2;
    }
    if (realIndex2 >= swiper.virtual.slides.length) {
      realIndex2 -= swiper.virtual.slides.length;
    }
    return realIndex2;
  };
  if (typeof activeIndex === "undefined") {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate2) >= 0) {
    snapIndex = snapGrid.indexOf(translate2);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit("activeIndexChange");
  swiper.emit("snapIndexChange");
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit("realIndexChange");
    }
    swiper.emit("slideChange");
  }
}
function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide2 = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide2) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide2) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide2 && slideFound) {
    swiper.clickedSlide = slide2;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = void 0;
    swiper.clickedIndex = void 0;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};
function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? "x" : "y";
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate: translate2,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate2 : translate2;
  }
  if (params.cssMode) {
    return translate2;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
function setTranslate(translate2, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate2 : translate2;
  } else {
    y = translate2;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate2);
  }
  swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
  return -this.snapGrid[0];
}
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
  if (translate2 === void 0) {
    translate2 = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate2 = swiper.minTranslate();
  const maxTranslate2 = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;else newTranslate = translate2;
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: -newTranslate,
        behavior: "smooth"
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionEnd");
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit("beforeTransitionStart", speed, internal);
      swiper.emit("transitionStart");
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit("transitionEnd");
          }
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}
var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};
function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
  }
  swiper.emit("setTransition", duration, byController);
}
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";else if (activeIndex < previousIndex) dir = "prev";else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === "reset") {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "Start"
  });
}
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: "End"
  });
}
var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate2 = -snapGrid[snapIndex];
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate2 * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit("beforeSlideChangeStart");
  }
  swiper.updateProgress(translate2);
  let direction;
  if (slideIndex > activeIndex) direction = "next";else if (slideIndex < activeIndex) direction = "prev";else direction = "reset";
  if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== "slide") {
      swiper.setTranslate(translate2);
    }
    if (direction !== "reset") {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate2 : -translate2;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = "none";
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        });
      } else {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = "";
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? "left" : "top"
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? "left" : "top"]: t,
        behavior: "smooth"
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate2);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit("beforeTransitionStart", speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "next"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: "prev"
    });
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate2);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== "undefined") {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate2 >= swiper.snapGrid[snapIndex]) {
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};
function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute("data-swiper-slide-index", index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? void 0 : "next"
  });
}
function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo: slideTo2 = true,
    direction,
    setTranslate: setTranslate2,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit("beforeLoopFix");
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
    return;
  }
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo2) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        if (setTranslate2) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === "undefined") {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate2) {
            swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
      });
    }
  }
  swiper.emit("loopFix");
}
function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute("data-swiper-slide-index");
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};
function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = "move";
  el.style.cursor = moving ? "grabbing" : "grab";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}
var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === getDocument() || el === getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  const window2 = getWindow();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;
  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: void 0,
    startMoving: void 0
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = void 0;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === "SELECT") {
      data.isTouched = false;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
    document2.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit("touchStart", e);
}
function onTouchMove(event) {
  const document2 = getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document2.activeElement) {
    if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit("touchMove", e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === "undefined") {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit("touchMoveOpposite", e);
  }
  if (typeof data.startMoving === "undefined") {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? "prev" : "next";
  swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.swipeDirection === "next" && swiper.allowSlideNext || swiper.swipeDirection === "prev" && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent("transitionend", {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit("sliderFirstMove", e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit("sliderMove", e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: "prev",
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: "next",
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }
  if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  swiper.updateProgress(data.currentTranslate);
  swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(event.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === "mouse") return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit("touchEnd", e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit("tap click", e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit("doubleTap doubleClick", e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === "next") {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === "prev") {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}
var dummyEventAttached = false;
function dummyEventListener() {}
var events = (swiper, method) => {
  const document2 = getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
  const swiperMethod = method;
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerout", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerleave", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("contextmenu", swiper.onTouchEnd, {
    passive: true
  });
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]("click", swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]("scroll", swiper.onScroll);
  }
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
  } else {
    swiper[swiperMethod]("observerUpdate", onResize, true);
  }
  el[domMethod]("load", swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document2 = getDocument();
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  if (!dummyEventAttached) {
    document2.addEventListener("touchstart", dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, "on");
}
function detachEvents() {
  const swiper = this;
  events(swiper, "off");
}
var events$1 = {
  attachEvents,
  detachEvents
};
var isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints2 = params.breakpoints;
  if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
  const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  ["navigation", "pagination", "scrollbar"].forEach(prop => {
    if (typeof breakpointParams[prop] === "undefined") return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  extend2(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit("_beforeBreakpoint", breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints2, base, containerEl) {
  if (base === void 0) {
    base = "window";
  }
  if (!breakpoints2 || base === "container" && !containerEl) return void 0;
  let breakpoint = false;
  const window2 = getWindow();
  const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints2).map(point => {
    if (typeof point === "string" && point.indexOf("@") === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === "window") {
      if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || "max";
}
var breakpoints = {
  setBreakpoint,
  getBreakpoint
};
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === "object") {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === "string") {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  const suffixes = prepareClasses(["initialized", params.direction, {
    "free-mode": swiper.params.freeMode && params.freeMode.enabled
  }, {
    "autoheight": params.autoHeight
  }, {
    "rtl": rtl
  }, {
    "grid": params.grid && params.grid.rows > 1
  }, {
    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
  }, {
    "android": device.android
  }, {
    "ios": device.ios
  }, {
    "css-mode": params.cssMode
  }, {
    "centered": params.cssMode && params.centeredSlides
  }, {
    "watch-progress": params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}
function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}
var classes = {
  addClasses,
  removeClasses
};
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? "lock" : "unlock");
  }
}
var checkOverflow$1 = {
  checkOverflow
};
var defaults = {
  init: true,
  direction: "horizontal",
  oneWayMovement: false,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== "object" || moduleParams === null) {
      extend2(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && "enabled" in moduleParams)) {
      extend2(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    extend2(allModulesParams, obj);
  };
}
var prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
var extendedDefaults = {};
var Swiper = class _Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = extend2({}, params);
    if (el && !params.el) params.el = el;
    const document2 = getDocument();
    if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document2.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = extend2({}, params, {
          el: containerEl
        });
        swipers.push(new _Swiper(newParams));
      });
      return swipers;
    }
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });
    const swiperParams = extend2({}, defaults, allModulesParams);
    swiper.params = extend2({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = extend2({}, swiper.params);
    swiper.passedParams = extend2({}, params);
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit("_swiper");
    if (swiper.params.init) {
      swiper.init();
    }
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit("enable");
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit("disable");
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(" ").filter(className => {
      return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit("_containerClasses", cls.join(" "));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return "";
    return slideEl.className.split(" ").filter(className => {
      return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(" ");
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit("_slideClass", slideEl, classNames);
    });
    swiper.emit("_slideClasses", updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = "current";
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === "number") return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      if (view === "current") {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate2() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate2();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate2();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit("update");
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
    }
    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === "vertical") {
        slideEl.style.width = "";
      } else {
        slideEl.style.height = "";
      }
    });
    swiper.emit("changeDirection");
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
    swiper.rtl = direction === "rtl";
    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "rtl";
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = "ltr";
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;
    let el = element || swiper.params.el;
    if (typeof el === "string") {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement("div", swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
      rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
      wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit("beforeInit");
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.addClasses();
    swiper.updateSize();
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }
    if (swiper.params.loop) {
      swiper.loopCreate();
    }
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener("load", e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);
    swiper.initialized = true;
    preload(swiper);
    swiper.emit("init");
    swiper.emit("afterInit");
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === "undefined" || swiper.destroyed) {
      return null;
    }
    swiper.emit("beforeDestroy");
    swiper.initialized = false;
    swiper.detachEvents();
    if (params.loop) {
      swiper.loopDestroy();
    }
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute("style");
      wrapperEl.removeAttribute("style");
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute("style");
          slideEl.removeAttribute("data-swiper-slide-index");
        });
      }
    }
    swiper.emit("destroy");
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    extend2(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
    const modules = _Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module2) {
    if (Array.isArray(module2)) {
      module2.forEach(m => _Swiper.installModule(m));
      return _Swiper;
    }
    _Swiper.installModule(module2);
    return _Swiper;
  }
};
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

// .beyond/uimport/temp/swiper.10.3.1.js
var swiper_10_3_1_default = Swiper;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3N3aXBlci4xMC4zLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zd2lwZXItY29yZS5tanMiXSwibmFtZXMiOlsic3dpcGVyXzEwXzNfMV9leHBvcnRzIiwiX19leHBvcnQiLCJTd2lwZXIiLCJkZWZhdWx0Iiwic3dpcGVyXzEwXzNfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImlzT2JqZWN0Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJleHRlbmQiLCJ0YXJnZXQiLCJzcmMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImxlbmd0aCIsInNzckRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJub2RlTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJzdHlsZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudE5TIiwiaW1wb3J0Tm9kZSIsImxvY2F0aW9uIiwiaGFzaCIsImhvc3QiLCJob3N0bmFtZSIsImhyZWYiLCJvcmlnaW4iLCJwYXRobmFtZSIsInByb3RvY29sIiwic2VhcmNoIiwiZ2V0RG9jdW1lbnQiLCJkb2MiLCJkb2N1bWVudCIsInNzcldpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJnbyIsImJhY2siLCJDdXN0b21FdmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiSW1hZ2UiLCJEYXRlIiwic2NyZWVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1hdGNoTWVkaWEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJnZXRXaW5kb3ciLCJ3aW4iLCJ3aW5kb3ciLCJkZWxldGVQcm9wcyIsIm9iamVjdCIsImUiLCJuZXh0VGljayIsImRlbGF5Iiwibm93IiwiZ2V0Q29tcHV0ZWRTdHlsZTIiLCJlbCIsIndpbmRvdzIiLCJjdXJyZW50U3R5bGUiLCJnZXRUcmFuc2xhdGUiLCJheGlzIiwibWF0cml4IiwiY3VyVHJhbnNmb3JtIiwidHJhbnNmb3JtTWF0cml4IiwiY3VyU3R5bGUiLCJXZWJLaXRDU1NNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJ3ZWJraXRUcmFuc2Zvcm0iLCJzcGxpdCIsIm1hcCIsImEiLCJyZXBsYWNlIiwiam9pbiIsIk1velRyYW5zZm9ybSIsIk9UcmFuc2Zvcm0iLCJNc1RyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidG9TdHJpbmciLCJtNDEiLCJwYXJzZUZsb2F0IiwibTQyIiwiaXNPYmplY3QyIiwibyIsInByb3RvdHlwZSIsImNhbGwiLCJzbGljZSIsImlzTm9kZSIsIm5vZGUiLCJIVE1MRWxlbWVudCIsIm5vZGVUeXBlIiwiZXh0ZW5kMiIsInRvIiwiYXJndW1lbnRzIiwibm9FeHRlbmQiLCJpIiwibmV4dFNvdXJjZSIsImtleXNBcnJheSIsImZpbHRlciIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJsZW4iLCJuZXh0S2V5IiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJfX3N3aXBlcl9fIiwic2V0Q1NTUHJvcGVydHkiLCJ2YXJOYW1lIiwidmFyVmFsdWUiLCJzZXRQcm9wZXJ0eSIsImFuaW1hdGVDU1NNb2RlU2Nyb2xsIiwiX3JlZiIsInN3aXBlciIsInRhcmdldFBvc2l0aW9uIiwic2lkZSIsInN0YXJ0UG9zaXRpb24iLCJ0cmFuc2xhdGUiLCJzdGFydFRpbWUiLCJ0aW1lIiwiZHVyYXRpb24iLCJwYXJhbXMiLCJzcGVlZCIsIndyYXBwZXJFbCIsInNjcm9sbFNuYXBUeXBlIiwiY3NzTW9kZUZyYW1lSUQiLCJkaXIiLCJpc091dE9mQm91bmQiLCJjdXJyZW50IiwiYW5pbWF0ZSIsImdldFRpbWUiLCJwcm9ncmVzcyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJlYXNlUHJvZ3Jlc3MiLCJjb3MiLCJQSSIsImN1cnJlbnRQb3NpdGlvbiIsInNjcm9sbFRvIiwib3ZlcmZsb3ciLCJnZXRTbGlkZVRyYW5zZm9ybUVsIiwic2xpZGVFbCIsInNoYWRvd1Jvb3QiLCJlbGVtZW50Q2hpbGRyZW4iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJtYXRjaGVzIiwidGFnIiwiY2xhc3NlczIiLCJjbGFzc0xpc3QiLCJhZGQiLCJBcnJheSIsImlzQXJyYXkiLCJlbGVtZW50T2Zmc2V0IiwiZG9jdW1lbnQyIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInNjcm9sbFRvcCIsInNjcm9sbFkiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsWCIsInRvcCIsImxlZnQiLCJlbGVtZW50UHJldkFsbCIsInByZXZFbHMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwicHJldiIsInB1c2giLCJlbGVtZW50TmV4dEFsbCIsIm5leHRFbHMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJuZXh0IiwiZWxlbWVudFN0eWxlIiwicHJvcCIsImVsZW1lbnRJbmRleCIsImNoaWxkIiwicHJldmlvdXNTaWJsaW5nIiwiZWxlbWVudFBhcmVudHMiLCJwYXJlbnRzIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsImVsZW1lbnRUcmFuc2l0aW9uRW5kIiwiZmlyZUNhbGxCYWNrIiwiZWxlbWVudE91dGVyU2l6ZSIsInNpemUiLCJpbmNsdWRlTWFyZ2lucyIsIm9mZnNldFdpZHRoIiwic3VwcG9ydCIsImNhbGNTdXBwb3J0Iiwic21vb3RoU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwiZ2V0U3VwcG9ydCIsImRldmljZUNhY2hlZCIsImNhbGNEZXZpY2UiLCJfdGVtcCIsInN1cHBvcnQyIiwicGxhdGZvcm0iLCJ1YSIsImRldmljZSIsImlvcyIsImFuZHJvaWQiLCJzY3JlZW5XaWR0aCIsIndpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaGVpZ2h0IiwibWF0Y2giLCJpcGFkIiwiaXBvZCIsImlwaG9uZSIsIndpbmRvd3MiLCJtYWNvcyIsImlQYWRTY3JlZW5zIiwib3MiLCJnZXREZXZpY2UiLCJvdmVycmlkZXMiLCJicm93c2VyIiwiY2FsY0Jyb3dzZXIiLCJuZWVkUGVyc3BlY3RpdmVGaXgiLCJpc1NhZmFyaSIsInRvTG93ZXJDYXNlIiwiU3RyaW5nIiwiaW5jbHVkZXMiLCJtYWpvciIsIm1pbm9yIiwibnVtIiwiTnVtYmVyIiwiaXNXZWJWaWV3IiwidGVzdCIsImdldEJyb3dzZXIiLCJSZXNpemUiLCJvbiIsImVtaXQiLCJvYnNlcnZlciIsImFuaW1hdGlvbkZyYW1lIiwicmVzaXplSGFuZGxlciIsImRlc3Ryb3llZCIsImluaXRpYWxpemVkIiwiY3JlYXRlT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIl9yZWYyIiwiY29udGVudEJveFNpemUiLCJjb250ZW50UmVjdCIsImlubGluZVNpemUiLCJibG9ja1NpemUiLCJvYnNlcnZlIiwicmVtb3ZlT2JzZXJ2ZXIiLCJ1bm9ic2VydmUiLCJvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIiLCJyZXNpemVPYnNlcnZlciIsIk9ic2VydmVyIiwiZXh0ZW5kUGFyYW1zIiwib2JzZXJ2ZXJzIiwiYXR0YWNoIiwib3B0aW9ucyIsIk9ic2VydmVyRnVuYyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJraXRNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiX19wcmV2ZW50T2JzZXJ2ZXJfXyIsIm9ic2VydmVyVXBkYXRlIiwib2JzZXJ2ZXJVcGRhdGUyIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJpbml0Iiwib2JzZXJ2ZVBhcmVudHMiLCJjb250YWluZXJQYXJlbnRzIiwiaG9zdEVsIiwib2JzZXJ2ZVNsaWRlQ2hpbGRyZW4iLCJkZXN0cm95IiwiZGlzY29ubmVjdCIsInNwbGljZSIsImV2ZW50c0VtaXR0ZXIiLCJldmVudHMyIiwiaGFuZGxlciIsInByaW9yaXR5Iiwic2VsZiIsImV2ZW50c0xpc3RlbmVycyIsIm1ldGhvZCIsImV2ZW50Iiwib25jZSIsIm9uY2VIYW5kbGVyIiwib2ZmIiwiX19lbWl0dGVyUHJveHkiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJhcHBseSIsIm9uQW55IiwiZXZlbnRzQW55TGlzdGVuZXJzIiwib2ZmQW55IiwiaW5kZXgiLCJldmVudEhhbmRsZXIiLCJkYXRhIiwiY29udGV4dCIsIl9sZW4yIiwiX2tleTIiLCJldmVudHMiLCJ1bnNoaWZ0IiwiZXZlbnRzQXJyYXkiLCJ1cGRhdGVTaXplIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpc0hvcml6b250YWwiLCJpc1ZlcnRpY2FsIiwicGFyc2VJbnQiLCJpc05hTiIsImFzc2lnbiIsInVwZGF0ZVNsaWRlcyIsImdldERpcmVjdGlvbkxhYmVsIiwicHJvcGVydHkiLCJnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlIiwibGFiZWwiLCJzbGlkZXNFbCIsInN3aXBlclNpemUiLCJydGxUcmFuc2xhdGUiLCJydGwiLCJ3cm9uZ1JUTCIsImlzVmlydHVhbCIsInZpcnR1YWwiLCJlbmFibGVkIiwicHJldmlvdXNTbGlkZXNMZW5ndGgiLCJzbGlkZXMiLCJzbGlkZUNsYXNzIiwic2xpZGVzTGVuZ3RoIiwic25hcEdyaWQiLCJzbGlkZXNHcmlkIiwic2xpZGVzU2l6ZXNHcmlkIiwib2Zmc2V0QmVmb3JlIiwic2xpZGVzT2Zmc2V0QmVmb3JlIiwib2Zmc2V0QWZ0ZXIiLCJzbGlkZXNPZmZzZXRBZnRlciIsInByZXZpb3VzU25hcEdyaWRMZW5ndGgiLCJwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGgiLCJzcGFjZUJldHdlZW4iLCJzbGlkZVBvc2l0aW9uIiwicHJldlNsaWRlU2l6ZSIsInZpcnR1YWxTaXplIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiY2VudGVyZWRTbGlkZXMiLCJjc3NNb2RlIiwiZ3JpZEVuYWJsZWQiLCJncmlkIiwicm93cyIsImluaXRTbGlkZXMiLCJzbGlkZVNpemUiLCJzaG91bGRSZXNldFNsaWRlU2l6ZSIsInNsaWRlc1BlclZpZXciLCJicmVha3BvaW50cyIsInNsaWRlMiIsInVwZGF0ZVNsaWRlIiwic2xpZGVTdHlsZXMiLCJjdXJyZW50VHJhbnNmb3JtIiwiY3VycmVudFdlYktpdFRyYW5zZm9ybSIsInJvdW5kTGVuZ3RocyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwiZmxvb3IiLCJzd2lwZXJTbGlkZVNpemUiLCJhYnMiLCJzbGlkZXNQZXJHcm91cCIsInNsaWRlc1Blckdyb3VwU2tpcCIsImVmZmVjdCIsInNldFdyYXBwZXJTaXplIiwidXBkYXRlV3JhcHBlclNpemUiLCJuZXdTbGlkZXNHcmlkIiwic2xpZGVzR3JpZEl0ZW0iLCJsb29wIiwiZ3JvdXBzIiwiY2VpbCIsInNsaWRlc0JlZm9yZSIsInNsaWRlc0FmdGVyIiwiZ3JvdXBTaXplIiwiXyIsInNsaWRlSW5kZXgiLCJjZW50ZXJlZFNsaWRlc0JvdW5kcyIsImFsbFNsaWRlc1NpemUiLCJzbGlkZVNpemVWYWx1ZSIsIm1heFNuYXAiLCJzbmFwIiwiY2VudGVySW5zdWZmaWNpZW50U2xpZGVzIiwiYWxsU2xpZGVzT2Zmc2V0Iiwic25hcEluZGV4IiwiYWRkVG9TbmFwR3JpZCIsImFkZFRvU2xpZGVzR3JpZCIsInYiLCJ3YXRjaE92ZXJmbG93IiwiY2hlY2tPdmVyZmxvdyIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJ1cGRhdGVTbGlkZXNPZmZzZXQiLCJiYWNrRmFjZUhpZGRlbkNsYXNzIiwiY29udGFpbmVyTW9kaWZpZXJDbGFzcyIsImhhc0NsYXNzQmFja2ZhY2VDbGFzc0FkZGVkIiwiY29udGFpbnMiLCJtYXhCYWNrZmFjZUhpZGRlblNsaWRlcyIsInJlbW92ZSIsInVwZGF0ZUF1dG9IZWlnaHQiLCJhY3RpdmVTbGlkZXMiLCJzZXRUcmFuc2l0aW9uIiwiZ2V0U2xpZGVCeUluZGV4IiwiZ2V0U2xpZGVJbmRleEJ5RGF0YSIsInZpc2libGVTbGlkZXMiLCJhY3RpdmVJbmRleCIsIm9mZnNldEhlaWdodCIsIm1pbnVzT2Zmc2V0IiwiaXNFbGVtZW50Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInN3aXBlclNsaWRlT2Zmc2V0IiwiY3NzT3ZlcmZsb3dBZGp1c3RtZW50IiwidXBkYXRlU2xpZGVzUHJvZ3Jlc3MiLCJ0cmFuc2xhdGUyIiwib2Zmc2V0Q2VudGVyIiwic2xpZGVWaXNpYmxlQ2xhc3MiLCJ2aXNpYmxlU2xpZGVzSW5kZXhlcyIsInNsaWRlT2Zmc2V0Iiwic2xpZGVQcm9ncmVzcyIsIm1pblRyYW5zbGF0ZSIsIm9yaWdpbmFsU2xpZGVQcm9ncmVzcyIsInNsaWRlQmVmb3JlIiwic2xpZGVBZnRlciIsImlzVmlzaWJsZSIsIm9yaWdpbmFsUHJvZ3Jlc3MiLCJ1cGRhdGVQcm9ncmVzcyIsIm11bHRpcGxpZXIiLCJ0cmFuc2xhdGVzRGlmZiIsIm1heFRyYW5zbGF0ZSIsImlzQmVnaW5uaW5nIiwiaXNFbmQiLCJwcm9ncmVzc0xvb3AiLCJ3YXNCZWdpbm5pbmciLCJ3YXNFbmQiLCJpc0JlZ2lubmluZ1JvdW5kZWQiLCJpc0VuZFJvdW5kZWQiLCJmaXJzdFNsaWRlSW5kZXgiLCJsYXN0U2xpZGVJbmRleCIsImZpcnN0U2xpZGVUcmFuc2xhdGUiLCJsYXN0U2xpZGVUcmFuc2xhdGUiLCJ0cmFuc2xhdGVNYXgiLCJ0cmFuc2xhdGVBYnMiLCJhdXRvSGVpZ2h0IiwidXBkYXRlU2xpZGVzQ2xhc3NlcyIsImdldEZpbHRlcmVkU2xpZGUiLCJzbGlkZUFjdGl2ZUNsYXNzIiwic2xpZGVOZXh0Q2xhc3MiLCJzbGlkZVByZXZDbGFzcyIsImFjdGl2ZVNsaWRlIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiZW1pdFNsaWRlc0NsYXNzZXMiLCJwcm9jZXNzTGF6eVByZWxvYWRlciIsImltYWdlRWwiLCJzbGlkZVNlbGVjdG9yIiwiY2xvc2VzdCIsImxhenlFbCIsImxhenlQcmVsb2FkZXJDbGFzcyIsInVubGF6eSIsInJlbW92ZUF0dHJpYnV0ZSIsInByZWxvYWQiLCJhbW91bnQiLCJsYXp5UHJlbG9hZFByZXZOZXh0Iiwic2xpZGVzUGVyVmlld0R5bmFtaWMiLCJhY3RpdmVDb2x1bW4iLCJwcmVsb2FkQ29sdW1ucyIsImZyb20iLCJjb2x1bW4iLCJzbGlkZUluZGV4TGFzdEluVmlldyIsInJld2luZCIsInJlYWxJbmRleCIsImdldEFjdGl2ZUluZGV4QnlUcmFuc2xhdGUiLCJub3JtYWxpemVTbGlkZUluZGV4IiwidXBkYXRlQWN0aXZlSW5kZXgiLCJuZXdBY3RpdmVJbmRleCIsInByZXZpb3VzSW5kZXgiLCJwcmV2aW91c1JlYWxJbmRleCIsInByZXZpb3VzU25hcEluZGV4IiwiZ2V0VmlydHVhbFJlYWxJbmRleCIsImFJbmRleCIsInJlYWxJbmRleDIiLCJza2lwIiwiZ2V0QXR0cmlidXRlIiwicnVuQ2FsbGJhY2tzT25Jbml0IiwidXBkYXRlQ2xpY2tlZFNsaWRlIiwicGF0aCIsInBhdGhFbCIsInNsaWRlRm91bmQiLCJjbGlja2VkU2xpZGUiLCJjbGlja2VkSW5kZXgiLCJzbGlkZVRvQ2xpY2tlZFNsaWRlIiwidXBkYXRlIiwiZ2V0U3dpcGVyVHJhbnNsYXRlIiwidmlydHVhbFRyYW5zbGF0ZSIsImN1cnJlbnRUcmFuc2xhdGUiLCJzZXRUcmFuc2xhdGUiLCJieUNvbnRyb2xsZXIiLCJ4IiwieSIsInoiLCJwcmV2aW91c1RyYW5zbGF0ZSIsIm5ld1Byb2dyZXNzIiwidHJhbnNsYXRlVG8iLCJydW5DYWxsYmFja3MiLCJ0cmFuc2xhdGVCb3VuZHMiLCJpbnRlcm5hbCIsImFuaW1hdGluZyIsInByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbiIsIm1pblRyYW5zbGF0ZTIiLCJtYXhUcmFuc2xhdGUyIiwibmV3VHJhbnNsYXRlIiwiaXNIIiwiYmVoYXZpb3IiLCJvblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQiLCJ0cmFuc2l0aW9uRW5kMiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsInRyYW5zaXRpb25FbWl0IiwiZGlyZWN0aW9uIiwic3RlcCIsInRyYW5zaXRpb25TdGFydCIsInRyYW5zaXRpb25FbmQiLCJ0cmFuc2l0aW9uIiwic2xpZGVUbyIsImluaXRpYWwiLCJub3JtYWxpemVkVHJhbnNsYXRlIiwibm9ybWFsaXplZEdyaWQiLCJub3JtYWxpemVkR3JpZE5leHQiLCJhbGxvd1NsaWRlTmV4dCIsImFsbG93U2xpZGVQcmV2IiwidCIsIl9pbW1lZGlhdGVWaXJ0dWFsIiwiX2Nzc01vZGVWaXJ0dWFsSW5pdGlhbFNldCIsImluaXRpYWxTbGlkZSIsIm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kIiwic2xpZGVUb0xvb3AiLCJpbmRleEFzTnVtYmVyIiwibmV3SW5kZXgiLCJzbGlkZU5leHQiLCJwZXJHcm91cCIsInNsaWRlc1Blckdyb3VwQXV0byIsImluY3JlbWVudCIsImxvb3BQcmV2ZW50c1NsaWRpbmciLCJsb29wRml4IiwiX2NsaWVudExlZnQiLCJzbGlkZVByZXYiLCJub3JtYWxpemUiLCJ2YWwiLCJub3JtYWxpemVkU25hcEdyaWQiLCJwcmV2U25hcCIsInByZXZTbmFwSW5kZXgiLCJwcmV2SW5kZXgiLCJsYXN0SW5kZXgiLCJzbGlkZVJlc2V0Iiwic2xpZGVUb0Nsb3Nlc3QiLCJ0aHJlc2hvbGQiLCJjdXJyZW50U25hcCIsIm5leHRTbmFwIiwic2xpZGVUb0luZGV4IiwibG9vcGVkU2xpZGVzIiwiZ2V0U2xpZGVJbmRleCIsInNsaWRlIiwibG9vcENyZWF0ZSIsInNsaWRlUmVhbEluZGV4Iiwic2xpZGVUbzIiLCJzZXRUcmFuc2xhdGUyIiwiYWN0aXZlU2xpZGVJbmRleCIsImJ5TW91c2V3aGVlbCIsInByZXBlbmRTbGlkZXNJbmRleGVzIiwiYXBwZW5kU2xpZGVzSW5kZXhlcyIsImlzTmV4dCIsImlzUHJldiIsInNsaWRlc1ByZXBlbmRlZCIsInNsaWRlc0FwcGVuZGVkIiwic3dpcGVyTG9vcE1vdmVET00iLCJwcmVwZW5kIiwiYXBwZW5kIiwicmVjYWxjU2xpZGVzIiwiY3VycmVudFNsaWRlVHJhbnNsYXRlIiwibmV3U2xpZGVUcmFuc2xhdGUiLCJkaWZmIiwidG91Y2hlcyIsInRvdWNoRXZlbnRzRGF0YSIsImNvbnRyb2xsZXIiLCJjb250cm9sIiwibG9vcFBhcmFtcyIsImMiLCJsb29wRGVzdHJveSIsIm5ld1NsaWRlc09yZGVyIiwic3dpcGVyU2xpZGVJbmRleCIsInNldEdyYWJDdXJzb3IiLCJtb3ZpbmciLCJzaW11bGF0ZVRvdWNoIiwiaXNMb2NrZWQiLCJ0b3VjaEV2ZW50c1RhcmdldCIsImN1cnNvciIsInVuc2V0R3JhYkN1cnNvciIsImdyYWJDdXJzb3IiLCJjbG9zZXN0RWxlbWVudCIsImJhc2UiLCJfX2Nsb3Nlc3RGcm9tIiwiYXNzaWduZWRTbG90IiwiZm91bmQiLCJnZXRSb290Tm9kZSIsIm9uVG91Y2hTdGFydCIsImV2Q2FjaGUiLCJwb2ludGVyVHlwZSIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXRFbCIsIndoaWNoIiwiYnV0dG9uIiwiaXNUb3VjaGVkIiwiaXNNb3ZlZCIsInN3aXBpbmdDbGFzc0hhc1ZhbHVlIiwibm9Td2lwaW5nQ2xhc3MiLCJldmVudFBhdGgiLCJjb21wb3NlZFBhdGgiLCJub1N3aXBpbmdTZWxlY3RvciIsImlzVGFyZ2V0U2hhZG93Iiwibm9Td2lwaW5nIiwiYWxsb3dDbGljayIsInN3aXBlSGFuZGxlciIsImN1cnJlbnRYIiwicGFnZVgiLCJjdXJyZW50WSIsInBhZ2VZIiwic3RhcnRYIiwic3RhcnRZIiwiZWRnZVN3aXBlRGV0ZWN0aW9uIiwiaU9TRWRnZVN3aXBlRGV0ZWN0aW9uIiwiZWRnZVN3aXBlVGhyZXNob2xkIiwiaU9TRWRnZVN3aXBlVGhyZXNob2xkIiwiaW5uZXJXaWR0aCIsInByZXZlbnREZWZhdWx0IiwiYWxsb3dUb3VjaENhbGxiYWNrcyIsImlzU2Nyb2xsaW5nIiwic3RhcnRNb3ZpbmciLCJ0b3VjaFN0YXJ0VGltZSIsInN3aXBlRGlyZWN0aW9uIiwiYWxsb3dUaHJlc2hvbGRNb3ZlIiwiZm9jdXNhYmxlRWxlbWVudHMiLCJzaG91bGRQcmV2ZW50RGVmYXVsdCIsImFsbG93VG91Y2hNb3ZlIiwidG91Y2hTdGFydFByZXZlbnREZWZhdWx0IiwidG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImZyZWVNb2RlIiwib25Ub3VjaE1vdmUiLCJwb2ludGVySW5kZXgiLCJmaW5kSW5kZXgiLCJjYWNoZWRFdiIsInBvaW50ZXJJZCIsInRhcmdldFRvdWNoIiwicHJldmVudGVkQnlOZXN0ZWRTd2lwZXIiLCJwcmV2WCIsInByZXZZIiwidG91Y2hSZWxlYXNlT25FZGdlcyIsInRhcmdldFRvdWNoZXMiLCJkaWZmWCIsImRpZmZZIiwic3FydCIsInRvdWNoQW5nbGUiLCJhdGFuMiIsInpvb20iLCJjYW5jZWxhYmxlIiwidG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uIiwibmVzdGVkIiwic3RvcFByb3BhZ2F0aW9uIiwidG91Y2hlc0RpZmYiLCJwcmV2aW91c1giLCJwcmV2aW91c1kiLCJvbmVXYXlNb3ZlbWVudCIsInRvdWNoUmF0aW8iLCJwcmV2VG91Y2hlc0RpcmVjdGlvbiIsInRvdWNoZXNEaXJlY3Rpb24iLCJpc0xvb3AiLCJhbGxvd0xvb3BGaXgiLCJzdGFydFRyYW5zbGF0ZSIsImV2dCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50IiwiYWxsb3dNb21lbnR1bUJvdW5jZSIsImxvb3BGaXhlZCIsImRpc2FibGVQYXJlbnRTd2lwZXIiLCJyZXNpc3RhbmNlUmF0aW8iLCJyZXNpc3RhbmNlIiwiZm9sbG93RmluZ2VyIiwib25Ub3VjaEVuZCIsInR5cGUiLCJwcm9jZWVkIiwidG91Y2hFbmRUaW1lIiwidGltZURpZmYiLCJwYXRoVHJlZSIsImxhc3RDbGlja1RpbWUiLCJjdXJyZW50UG9zIiwic3RvcEluZGV4IiwiaW5jcmVtZW50MiIsInJld2luZEZpcnN0SW5kZXgiLCJyZXdpbmRMYXN0SW5kZXgiLCJyYXRpbyIsImxvbmdTd2lwZXNNcyIsImxvbmdTd2lwZXMiLCJsb25nU3dpcGVzUmF0aW8iLCJzaG9ydFN3aXBlcyIsImlzTmF2QnV0dG9uVGFyZ2V0IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm9uUmVzaXplIiwic2V0QnJlYWtwb2ludCIsImlzVmlydHVhbExvb3AiLCJhdXRvcGxheSIsInJ1bm5pbmciLCJwYXVzZWQiLCJyZXNpemVUaW1lb3V0IiwicmVzdW1lIiwib25DbGljayIsInByZXZlbnRDbGlja3MiLCJwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJvblNjcm9sbCIsIm9uTG9hZCIsImR1bW15RXZlbnRBdHRhY2hlZCIsImR1bW15RXZlbnRMaXN0ZW5lciIsImNhcHR1cmUiLCJkb21NZXRob2QiLCJzd2lwZXJNZXRob2QiLCJwYXNzaXZlIiwidXBkYXRlT25XaW5kb3dSZXNpemUiLCJhdHRhY2hFdmVudHMiLCJiaW5kIiwiZGV0YWNoRXZlbnRzIiwiZXZlbnRzJDEiLCJpc0dyaWRFbmFibGVkIiwiYnJlYWtwb2ludHMyIiwiYnJlYWtwb2ludCIsImdldEJyZWFrcG9pbnQiLCJicmVha3BvaW50c0Jhc2UiLCJjdXJyZW50QnJlYWtwb2ludCIsImJyZWFrcG9pbnRPbmx5UGFyYW1zIiwiYnJlYWtwb2ludFBhcmFtcyIsIm9yaWdpbmFsUGFyYW1zIiwid2FzTXVsdGlSb3ciLCJpc011bHRpUm93Iiwid2FzRW5hYmxlZCIsImVtaXRDb250YWluZXJDbGFzc2VzIiwiZmlsbCIsIndhc01vZHVsZUVuYWJsZWQiLCJpc01vZHVsZUVuYWJsZWQiLCJkaXNhYmxlIiwiZW5hYmxlIiwiZGlyZWN0aW9uQ2hhbmdlZCIsIm5lZWRzUmVMb29wIiwid2FzTG9vcCIsImNoYW5nZURpcmVjdGlvbiIsImlzRW5hYmxlZCIsImhhc0xvb3AiLCJjb250YWluZXJFbCIsImN1cnJlbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInBvaW50cyIsInBvaW50IiwibWluUmF0aW8iLCJzdWJzdHIiLCJ2YWx1ZSIsInNvcnQiLCJiIiwicHJlcGFyZUNsYXNzZXMiLCJwcmVmaXgiLCJyZXN1bHRDbGFzc2VzIiwiaXRlbSIsImNsYXNzTmFtZXMiLCJhZGRDbGFzc2VzIiwic3VmZml4ZXMiLCJyZW1vdmVDbGFzc2VzIiwiY2xhc3NlcyIsIndhc0xvY2tlZCIsImxhc3RTbGlkZVJpZ2h0RWRnZSIsImNoZWNrT3ZlcmZsb3ckMSIsImRlZmF1bHRzIiwiY3JlYXRlRWxlbWVudHMiLCJ1cmwiLCJ1bmlxdWVOYXZFbGVtZW50cyIsInBhc3NpdmVMaXN0ZW5lcnMiLCJ3cmFwcGVyQ2xhc3MiLCJfZW1pdENsYXNzZXMiLCJtb2R1bGVFeHRlbmRQYXJhbXMiLCJhbGxNb2R1bGVzUGFyYW1zIiwibW9kdWxlUGFyYW1OYW1lIiwibW9kdWxlUGFyYW1zIiwiYXV0byIsInByb3RvdHlwZXMiLCJleHRlbmRlZERlZmF1bHRzIiwiX1N3aXBlciIsInN3aXBlcnMiLCJuZXdQYXJhbXMiLCJtb2R1bGVzIiwiX19tb2R1bGVzX18iLCJtb2QiLCJzd2lwZXJQYXJhbXMiLCJwYXNzZWRQYXJhbXMiLCJldmVudE5hbWUiLCJ2ZWxvY2l0eSIsInRydW5jIiwiY2xpY2tUaW1lb3V0IiwidmVsb2NpdGllcyIsImltYWdlc1RvTG9hZCIsImltYWdlc0xvYWRlZCIsInNldFByb2dyZXNzIiwiY2xzIiwiY2xhc3NOYW1lIiwiZ2V0U2xpZGVDbGFzc2VzIiwidXBkYXRlcyIsInZpZXciLCJleGFjdCIsInNwdiIsImJyZWFrTG9vcCIsInNsaWRlSW5WaWV3IiwiY29tcGxldGUiLCJ0cmFuc2xhdGVWYWx1ZSIsInRyYW5zbGF0ZWQiLCJuZXdEaXJlY3Rpb24iLCJuZWVkVXBkYXRlIiwiY3VycmVudERpcmVjdGlvbiIsImNoYW5nZUxhbmd1YWdlRGlyZWN0aW9uIiwibW91bnQiLCJtb3VudGVkIiwicGFyZW50Tm9kZSIsImdldFdyYXBwZXJTZWxlY3RvciIsInRyaW0iLCJnZXRXcmFwcGVyIiwicmVzIiwic2xpZGVTbG90cyIsImxhenlFbGVtZW50cyIsImRlbGV0ZUluc3RhbmNlIiwiY2xlYW5TdHlsZXMiLCJleHRlbmREZWZhdWx0cyIsIm5ld0RlZmF1bHRzIiwiaW5zdGFsbE1vZHVsZSIsInVzZSIsIm1vZHVsZTIiLCJtIiwicHJvdG90eXBlR3JvdXAiLCJwcm90b01ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxxQkFBQTs7O0FDWUEsU0FBU1EsU0FBU0MsR0FBQSxFQUFLO0VBQ3JCLE9BQU9BLEdBQUEsS0FBUSxRQUFRLE9BQU9BLEdBQUEsS0FBUSxZQUFZLGlCQUFpQkEsR0FBQSxJQUFPQSxHQUFBLENBQUlDLFdBQUEsS0FBZ0JDLE1BQUE7QUFDaEc7QUFDQSxTQUFTQyxPQUFPQyxNQUFBLEVBQVFDLEdBQUEsRUFBSztFQUMzQixJQUFJRCxNQUFBLEtBQVcsUUFBUTtJQUNyQkEsTUFBQSxHQUFTLENBQUM7RUFDWjtFQUNBLElBQUlDLEdBQUEsS0FBUSxRQUFRO0lBQ2xCQSxHQUFBLEdBQU0sQ0FBQztFQUNUO0VB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TTtJQUNwQjtJQUNBQSxNQUFBLENBQU8rSCxTQUFBLEdBQVk7SUFDbkIsT0FBTztFQUNUO0VBQ0EsT0FBTzhsQixlQUFlQyxXQUFBLEVBQWE7SUFDakNwdkIsT0FBQSxDQUFPdXNCLGdCQUFBLEVBQWtCNkMsV0FBVztFQUN0QztFQUNBLFdBQVc3QyxpQkFBQSxFQUFtQjtJQUM1QixPQUFPQSxnQkFBQTtFQUNUO0VBQ0EsV0FBV2IsU0FBQSxFQUFXO0lBQ3BCLE9BQU9BLFFBQUE7RUFDVDtFQUNBLE9BQU8yRCxjQUFjeEMsR0FBQSxFQUFLO0lBQ3hCLElBQUksQ0FBQ0wsT0FBQSxDQUFPL3NCLFNBQUEsQ0FBVW10QixXQUFBLEVBQWFKLE9BQUEsQ0FBTy9zQixTQUFBLENBQVVtdEIsV0FBQSxHQUFjLEVBQUM7SUFDbkUsTUFBTUQsT0FBQSxHQUFVSCxPQUFBLENBQU8vc0IsU0FBQSxDQUFVbXRCLFdBQUE7SUFDakMsSUFBSSxPQUFPQyxHQUFBLEtBQVEsY0FBY0YsT0FBQSxDQUFRbnNCLE9BQUEsQ0FBUXFzQixHQUFHLElBQUksR0FBRztNQUN6REYsT0FBQSxDQUFRNW5CLElBQUEsQ0FBSzhuQixHQUFHO0lBQ2xCO0VBQ0Y7RUFDQSxPQUFPeUMsSUFBSUMsT0FBQSxFQUFRO0lBQ2pCLElBQUkxckIsS0FBQSxDQUFNQyxPQUFBLENBQVF5ckIsT0FBTSxHQUFHO01BQ3pCQSxPQUFBLENBQU8zMUIsT0FBQSxDQUFRNDFCLENBQUEsSUFBS2hELE9BQUEsQ0FBTzZDLGFBQUEsQ0FBY0csQ0FBQyxDQUFDO01BQzNDLE9BQU9oRCxPQUFBO0lBQ1Q7SUFDQUEsT0FBQSxDQUFPNkMsYUFBQSxDQUFjRSxPQUFNO0lBQzNCLE9BQU8vQyxPQUFBO0VBQ1Q7QUFDRjtBQUNBanpCLE1BQUEsQ0FBT0ksSUFBQSxDQUFLMnlCLFVBQVUsRUFBRTF5QixPQUFBLENBQVE2MUIsY0FBQSxJQUFrQjtFQUNoRGwyQixNQUFBLENBQU9JLElBQUEsQ0FBSzJ5QixVQUFBLENBQVdtRCxjQUFjLENBQUMsRUFBRTcxQixPQUFBLENBQVE4MUIsV0FBQSxJQUFlO0lBQzdENTJCLE1BQUEsQ0FBTzJHLFNBQUEsQ0FBVWl3QixXQUFXLElBQUlwRCxVQUFBLENBQVdtRCxjQUFjLEVBQUVDLFdBQVc7RUFDeEUsQ0FBQztBQUNILENBQUM7QUFDRDUyQixNQUFBLENBQU93MkIsR0FBQSxDQUFJLENBQUN2bUIsTUFBQSxFQUFRdUIsUUFBUSxDQUFDOzs7QUh4akg3QixJQUFPdFIscUJBQUEsR0FBUUYsTUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=