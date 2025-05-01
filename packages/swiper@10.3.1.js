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

// .beyond/uimport/swiper.10.3.1.js
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
    time = new Date().getTime();
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
  width: null,
  height: null,
  preventInteractionOnTransition: false,
  userAgent: null,
  url: null,
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  autoHeight: false,
  setWrapperSize: false,
  virtualTranslate: false,
  effect: "slide",
  breakpoints: void 0,
  breakpointsBase: "window",
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  watchOverflow: true,
  roundLengths: false,
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
  uniqueNavElements: true,
  resistance: true,
  resistanceRatio: 0.85,
  watchSlidesProgress: false,
  grabCursor: false,
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  rewind: false,
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  noSwiping: true,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  containerModifierClass: "swiper-",
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  runCallbacksOnInit: true,
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
var Swiper = class {
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
        swipers.push(new Swiper(newParams));
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
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return swiper.params.direction === "horizontal";
      },
      isVertical() {
        return swiper.params.direction === "vertical";
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: true,
      isEnd: false,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: swiper.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      allowClick: true,
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
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
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === "function" && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module2) {
    if (Array.isArray(module2)) {
      module2.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module2);
    return Swiper;
  }
};
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);

// .beyond/uimport/swiper.10.3.1.js
var swiper_10_3_1_default = Swiper;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zd2lwZXIuMTAuMy4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3dpcGVyLWNvcmUubWpzIl0sIm5hbWVzIjpbInN3aXBlcl8xMF8zXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU3dpcGVyIiwiZGVmYXVsdCIsInN3aXBlcl8xMF8zXzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpc09iamVjdCIsIm9iaiIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiZXh0ZW5kIiwidGFyZ2V0Iiwic3JjIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJsZW5ndGgiLCJzc3JEb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsImltcG9ydE5vZGUiLCJsb2NhdGlvbiIsImhhc2giLCJob3N0IiwiaG9zdG5hbWUiLCJocmVmIiwib3JpZ2luIiwicGF0aG5hbWUiLCJwcm90b2NvbCIsInNlYXJjaCIsImdldERvY3VtZW50IiwiZG9jIiwiZG9jdW1lbnQiLCJzc3JXaW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZ28iLCJiYWNrIiwiQ3VzdG9tRXZlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIkltYWdlIiwiRGF0ZSIsInNjcmVlbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYXRjaE1lZGlhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiZ2V0V2luZG93Iiwid2luIiwid2luZG93IiwiZGVsZXRlUHJvcHMiLCJvYmplY3QiLCJlIiwibmV4dFRpY2siLCJkZWxheSIsIm5vdyIsImdldENvbXB1dGVkU3R5bGUyIiwiZWwiLCJ3aW5kb3cyIiwiY3VycmVudFN0eWxlIiwiZ2V0VHJhbnNsYXRlIiwiYXhpcyIsIm1hdHJpeCIsImN1clRyYW5zZm9ybSIsInRyYW5zZm9ybU1hdHJpeCIsImN1clN0eWxlIiwiV2ViS2l0Q1NTTWF0cml4IiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwic3BsaXQiLCJtYXAiLCJhIiwicmVwbGFjZSIsImpvaW4iLCJNb3pUcmFuc2Zvcm0iLCJPVHJhbnNmb3JtIiwiTXNUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRvU3RyaW5nIiwibTQxIiwicGFyc2VGbG9hdCIsIm00MiIsImlzT2JqZWN0MiIsIm8iLCJwcm90b3R5cGUiLCJjYWxsIiwic2xpY2UiLCJpc05vZGUiLCJub2RlIiwiSFRNTEVsZW1lbnQiLCJub2RlVHlwZSIsImV4dGVuZDIiLCJ0byIsImFyZ3VtZW50cyIsIm5vRXh0ZW5kIiwiaSIsIm5leHRTb3VyY2UiLCJrZXlzQXJyYXkiLCJmaWx0ZXIiLCJpbmRleE9mIiwibmV4dEluZGV4IiwibGVuIiwibmV4dEtleSIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiX19zd2lwZXJfXyIsInNldENTU1Byb3BlcnR5IiwidmFyTmFtZSIsInZhclZhbHVlIiwic2V0UHJvcGVydHkiLCJhbmltYXRlQ1NTTW9kZVNjcm9sbCIsIl9yZWYiLCJzd2lwZXIiLCJ0YXJnZXRQb3NpdGlvbiIsInNpZGUiLCJzdGFydFBvc2l0aW9uIiwidHJhbnNsYXRlIiwic3RhcnRUaW1lIiwidGltZSIsImR1cmF0aW9uIiwicGFyYW1zIiwic3BlZWQiLCJ3cmFwcGVyRWwiLCJzY3JvbGxTbmFwVHlwZSIsImNzc01vZGVGcmFtZUlEIiwiZGlyIiwiaXNPdXRPZkJvdW5kIiwiY3VycmVudCIsImFuaW1hdGUiLCJnZXRUaW1lIiwicHJvZ3Jlc3MiLCJNYXRoIiwibWF4IiwibWluIiwiZWFzZVByb2dyZXNzIiwiY29zIiwiUEkiLCJjdXJyZW50UG9zaXRpb24iLCJzY3JvbGxUbyIsIm92ZXJmbG93IiwiZ2V0U2xpZGVUcmFuc2Zvcm1FbCIsInNsaWRlRWwiLCJzaGFkb3dSb290IiwiZWxlbWVudENoaWxkcmVuIiwiZWxlbWVudCIsInNlbGVjdG9yIiwibWF0Y2hlcyIsInRhZyIsImNsYXNzZXMyIiwiY2xhc3NMaXN0IiwiYWRkIiwiQXJyYXkiLCJpc0FycmF5IiwiZWxlbWVudE9mZnNldCIsImRvY3VtZW50MiIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxZIiwic2Nyb2xsTGVmdCIsInNjcm9sbFgiLCJ0b3AiLCJsZWZ0IiwiZWxlbWVudFByZXZBbGwiLCJwcmV2RWxzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInByZXYiLCJwdXNoIiwiZWxlbWVudE5leHRBbGwiLCJuZXh0RWxzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibmV4dCIsImVsZW1lbnRTdHlsZSIsInByb3AiLCJlbGVtZW50SW5kZXgiLCJjaGlsZCIsInByZXZpb3VzU2libGluZyIsImVsZW1lbnRQYXJlbnRzIiwicGFyZW50cyIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJlbGVtZW50VHJhbnNpdGlvbkVuZCIsImZpcmVDYWxsQmFjayIsImVsZW1lbnRPdXRlclNpemUiLCJzaXplIiwiaW5jbHVkZU1hcmdpbnMiLCJvZmZzZXRXaWR0aCIsInN1cHBvcnQiLCJjYWxjU3VwcG9ydCIsInNtb290aFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsInRvdWNoIiwiRG9jdW1lbnRUb3VjaCIsImdldFN1cHBvcnQiLCJkZXZpY2VDYWNoZWQiLCJjYWxjRGV2aWNlIiwiX3RlbXAiLCJzdXBwb3J0MiIsInBsYXRmb3JtIiwidWEiLCJkZXZpY2UiLCJpb3MiLCJhbmRyb2lkIiwic2NyZWVuV2lkdGgiLCJ3aWR0aCIsInNjcmVlbkhlaWdodCIsImhlaWdodCIsIm1hdGNoIiwiaXBhZCIsImlwb2QiLCJpcGhvbmUiLCJ3aW5kb3dzIiwibWFjb3MiLCJpUGFkU2NyZWVucyIsIm9zIiwiZ2V0RGV2aWNlIiwib3ZlcnJpZGVzIiwiYnJvd3NlciIsImNhbGNCcm93c2VyIiwibmVlZFBlcnNwZWN0aXZlRml4IiwiaXNTYWZhcmkiLCJ0b0xvd2VyQ2FzZSIsIlN0cmluZyIsImluY2x1ZGVzIiwibWFqb3IiLCJtaW5vciIsIm51bSIsIk51bWJlciIsImlzV2ViVmlldyIsInRlc3QiLCJnZXRCcm93c2VyIiwiUmVzaXplIiwib24iLCJlbWl0Iiwib2JzZXJ2ZXIiLCJhbmltYXRpb25GcmFtZSIsInJlc2l6ZUhhbmRsZXIiLCJkZXN0cm95ZWQiLCJpbml0aWFsaXplZCIsImNyZWF0ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJfcmVmMiIsImNvbnRlbnRCb3hTaXplIiwiY29udGVudFJlY3QiLCJpbmxpbmVTaXplIiwiYmxvY2tTaXplIiwib2JzZXJ2ZSIsInJlbW92ZU9ic2VydmVyIiwidW5vYnNlcnZlIiwib3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyIiwicmVzaXplT2JzZXJ2ZXIiLCJPYnNlcnZlciIsImV4dGVuZFBhcmFtcyIsIm9ic2VydmVycyIsImF0dGFjaCIsIm9wdGlvbnMiLCJPYnNlcnZlckZ1bmMiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2Via2l0TXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIl9fcHJldmVudE9ic2VydmVyX18iLCJvYnNlcnZlclVwZGF0ZSIsIm9ic2VydmVyVXBkYXRlMiIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwiaW5pdCIsIm9ic2VydmVQYXJlbnRzIiwiY29udGFpbmVyUGFyZW50cyIsImhvc3RFbCIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwiZGVzdHJveSIsImRpc2Nvbm5lY3QiLCJzcGxpY2UiLCJldmVudHNFbWl0dGVyIiwiZXZlbnRzMiIsImhhbmRsZXIiLCJwcmlvcml0eSIsInNlbGYiLCJldmVudHNMaXN0ZW5lcnMiLCJtZXRob2QiLCJldmVudCIsIm9uY2UiLCJvbmNlSGFuZGxlciIsIm9mZiIsIl9fZW1pdHRlclByb3h5IiwiX2xlbiIsImFyZ3MiLCJfa2V5IiwiYXBwbHkiLCJvbkFueSIsImV2ZW50c0FueUxpc3RlbmVycyIsIm9mZkFueSIsImluZGV4IiwiZXZlbnRIYW5kbGVyIiwiZGF0YSIsImNvbnRleHQiLCJfbGVuMiIsIl9rZXkyIiwiZXZlbnRzIiwidW5zaGlmdCIsImV2ZW50c0FycmF5IiwidXBkYXRlU2l6ZSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaXNIb3Jpem9udGFsIiwiaXNWZXJ0aWNhbCIsInBhcnNlSW50IiwiaXNOYU4iLCJhc3NpZ24iLCJ1cGRhdGVTbGlkZXMiLCJnZXREaXJlY3Rpb25MYWJlbCIsInByb3BlcnR5IiwiZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZSIsImxhYmVsIiwic2xpZGVzRWwiLCJzd2lwZXJTaXplIiwicnRsVHJhbnNsYXRlIiwicnRsIiwid3JvbmdSVEwiLCJpc1ZpcnR1YWwiLCJ2aXJ0dWFsIiwiZW5hYmxlZCIsInByZXZpb3VzU2xpZGVzTGVuZ3RoIiwic2xpZGVzIiwic2xpZGVDbGFzcyIsInNsaWRlc0xlbmd0aCIsInNuYXBHcmlkIiwic2xpZGVzR3JpZCIsInNsaWRlc1NpemVzR3JpZCIsIm9mZnNldEJlZm9yZSIsInNsaWRlc09mZnNldEJlZm9yZSIsIm9mZnNldEFmdGVyIiwic2xpZGVzT2Zmc2V0QWZ0ZXIiLCJwcmV2aW91c1NuYXBHcmlkTGVuZ3RoIiwicHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVQb3NpdGlvbiIsInByZXZTbGlkZVNpemUiLCJ2aXJ0dWFsU2l6ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImNlbnRlcmVkU2xpZGVzIiwiY3NzTW9kZSIsImdyaWRFbmFibGVkIiwiZ3JpZCIsInJvd3MiLCJpbml0U2xpZGVzIiwic2xpZGVTaXplIiwic2hvdWxkUmVzZXRTbGlkZVNpemUiLCJzbGlkZXNQZXJWaWV3IiwiYnJlYWtwb2ludHMiLCJzbGlkZTIiLCJ1cGRhdGVTbGlkZSIsInNsaWRlU3R5bGVzIiwiY3VycmVudFRyYW5zZm9ybSIsImN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0iLCJyb3VuZExlbmd0aHMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJveFNpemluZyIsImZsb29yIiwic3dpcGVyU2xpZGVTaXplIiwiYWJzIiwic2xpZGVzUGVyR3JvdXAiLCJzbGlkZXNQZXJHcm91cFNraXAiLCJlZmZlY3QiLCJzZXRXcmFwcGVyU2l6ZSIsInVwZGF0ZVdyYXBwZXJTaXplIiwibmV3U2xpZGVzR3JpZCIsInNsaWRlc0dyaWRJdGVtIiwibG9vcCIsImdyb3VwcyIsImNlaWwiLCJzbGlkZXNCZWZvcmUiLCJzbGlkZXNBZnRlciIsImdyb3VwU2l6ZSIsIl8iLCJzbGlkZUluZGV4IiwiY2VudGVyZWRTbGlkZXNCb3VuZHMiLCJhbGxTbGlkZXNTaXplIiwic2xpZGVTaXplVmFsdWUiLCJtYXhTbmFwIiwic25hcCIsImNlbnRlckluc3VmZmljaWVudFNsaWRlcyIsImFsbFNsaWRlc09mZnNldCIsInNuYXBJbmRleCIsImFkZFRvU25hcEdyaWQiLCJhZGRUb1NsaWRlc0dyaWQiLCJ2Iiwid2F0Y2hPdmVyZmxvdyIsImNoZWNrT3ZlcmZsb3ciLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwidXBkYXRlU2xpZGVzT2Zmc2V0IiwiYmFja0ZhY2VIaWRkZW5DbGFzcyIsImNvbnRhaW5lck1vZGlmaWVyQ2xhc3MiLCJoYXNDbGFzc0JhY2tmYWNlQ2xhc3NBZGRlZCIsImNvbnRhaW5zIiwibWF4QmFja2ZhY2VIaWRkZW5TbGlkZXMiLCJyZW1vdmUiLCJ1cGRhdGVBdXRvSGVpZ2h0IiwiYWN0aXZlU2xpZGVzIiwic2V0VHJhbnNpdGlvbiIsImdldFNsaWRlQnlJbmRleCIsImdldFNsaWRlSW5kZXhCeURhdGEiLCJ2aXNpYmxlU2xpZGVzIiwiYWN0aXZlSW5kZXgiLCJvZmZzZXRIZWlnaHQiLCJtaW51c09mZnNldCIsImlzRWxlbWVudCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzd2lwZXJTbGlkZU9mZnNldCIsImNzc092ZXJmbG93QWRqdXN0bWVudCIsInVwZGF0ZVNsaWRlc1Byb2dyZXNzIiwidHJhbnNsYXRlMiIsIm9mZnNldENlbnRlciIsInNsaWRlVmlzaWJsZUNsYXNzIiwidmlzaWJsZVNsaWRlc0luZGV4ZXMiLCJzbGlkZU9mZnNldCIsInNsaWRlUHJvZ3Jlc3MiLCJtaW5UcmFuc2xhdGUiLCJvcmlnaW5hbFNsaWRlUHJvZ3Jlc3MiLCJzbGlkZUJlZm9yZSIsInNsaWRlQWZ0ZXIiLCJpc1Zpc2libGUiLCJvcmlnaW5hbFByb2dyZXNzIiwidXBkYXRlUHJvZ3Jlc3MiLCJtdWx0aXBsaWVyIiwidHJhbnNsYXRlc0RpZmYiLCJtYXhUcmFuc2xhdGUiLCJpc0JlZ2lubmluZyIsImlzRW5kIiwicHJvZ3Jlc3NMb29wIiwid2FzQmVnaW5uaW5nIiwid2FzRW5kIiwiaXNCZWdpbm5pbmdSb3VuZGVkIiwiaXNFbmRSb3VuZGVkIiwiZmlyc3RTbGlkZUluZGV4IiwibGFzdFNsaWRlSW5kZXgiLCJmaXJzdFNsaWRlVHJhbnNsYXRlIiwibGFzdFNsaWRlVHJhbnNsYXRlIiwidHJhbnNsYXRlTWF4IiwidHJhbnNsYXRlQWJzIiwiYXV0b0hlaWdodCIsInVwZGF0ZVNsaWRlc0NsYXNzZXMiLCJnZXRGaWx0ZXJlZFNsaWRlIiwic2xpZGVBY3RpdmVDbGFzcyIsInNsaWRlTmV4dENsYXNzIiwic2xpZGVQcmV2Q2xhc3MiLCJhY3RpdmVTbGlkZSIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsImVtaXRTbGlkZXNDbGFzc2VzIiwicHJvY2Vzc0xhenlQcmVsb2FkZXIiLCJpbWFnZUVsIiwic2xpZGVTZWxlY3RvciIsImNsb3Nlc3QiLCJsYXp5RWwiLCJsYXp5UHJlbG9hZGVyQ2xhc3MiLCJ1bmxhenkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcmVsb2FkIiwiYW1vdW50IiwibGF6eVByZWxvYWRQcmV2TmV4dCIsInNsaWRlc1BlclZpZXdEeW5hbWljIiwiYWN0aXZlQ29sdW1uIiwicHJlbG9hZENvbHVtbnMiLCJmcm9tIiwiY29sdW1uIiwic2xpZGVJbmRleExhc3RJblZpZXciLCJyZXdpbmQiLCJyZWFsSW5kZXgiLCJnZXRBY3RpdmVJbmRleEJ5VHJhbnNsYXRlIiwibm9ybWFsaXplU2xpZGVJbmRleCIsInVwZGF0ZUFjdGl2ZUluZGV4IiwibmV3QWN0aXZlSW5kZXgiLCJwcmV2aW91c0luZGV4IiwicHJldmlvdXNSZWFsSW5kZXgiLCJwcmV2aW91c1NuYXBJbmRleCIsImdldFZpcnR1YWxSZWFsSW5kZXgiLCJhSW5kZXgiLCJyZWFsSW5kZXgyIiwic2tpcCIsImdldEF0dHJpYnV0ZSIsInJ1bkNhbGxiYWNrc09uSW5pdCIsInVwZGF0ZUNsaWNrZWRTbGlkZSIsInBhdGgiLCJwYXRoRWwiLCJzbGlkZUZvdW5kIiwiY2xpY2tlZFNsaWRlIiwiY2xpY2tlZEluZGV4Iiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsInVwZGF0ZSIsImdldFN3aXBlclRyYW5zbGF0ZSIsInZpcnR1YWxUcmFuc2xhdGUiLCJjdXJyZW50VHJhbnNsYXRlIiwic2V0VHJhbnNsYXRlIiwiYnlDb250cm9sbGVyIiwieCIsInkiLCJ6IiwicHJldmlvdXNUcmFuc2xhdGUiLCJuZXdQcm9ncmVzcyIsInRyYW5zbGF0ZVRvIiwicnVuQ2FsbGJhY2tzIiwidHJhbnNsYXRlQm91bmRzIiwiaW50ZXJuYWwiLCJhbmltYXRpbmciLCJwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24iLCJtaW5UcmFuc2xhdGUyIiwibWF4VHJhbnNsYXRlMiIsIm5ld1RyYW5zbGF0ZSIsImlzSCIsImJlaGF2aW9yIiwib25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbkVuZDIiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJ0cmFuc2l0aW9uRW1pdCIsImRpcmVjdGlvbiIsInN0ZXAiLCJ0cmFuc2l0aW9uU3RhcnQiLCJ0cmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbiIsInNsaWRlVG8iLCJpbml0aWFsIiwibm9ybWFsaXplZFRyYW5zbGF0ZSIsIm5vcm1hbGl6ZWRHcmlkIiwibm9ybWFsaXplZEdyaWROZXh0IiwiYWxsb3dTbGlkZU5leHQiLCJhbGxvd1NsaWRlUHJldiIsInQiLCJfaW1tZWRpYXRlVmlydHVhbCIsIl9jc3NNb2RlVmlydHVhbEluaXRpYWxTZXQiLCJpbml0aWFsU2xpZGUiLCJvblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCIsInNsaWRlVG9Mb29wIiwiaW5kZXhBc051bWJlciIsIm5ld0luZGV4Iiwic2xpZGVOZXh0IiwicGVyR3JvdXAiLCJzbGlkZXNQZXJHcm91cEF1dG8iLCJpbmNyZW1lbnQiLCJsb29wUHJldmVudHNTbGlkaW5nIiwibG9vcEZpeCIsIl9jbGllbnRMZWZ0Iiwic2xpZGVQcmV2Iiwibm9ybWFsaXplIiwidmFsIiwibm9ybWFsaXplZFNuYXBHcmlkIiwicHJldlNuYXAiLCJwcmV2U25hcEluZGV4IiwicHJldkluZGV4IiwibGFzdEluZGV4Iiwic2xpZGVSZXNldCIsInNsaWRlVG9DbG9zZXN0IiwidGhyZXNob2xkIiwiY3VycmVudFNuYXAiLCJuZXh0U25hcCIsInNsaWRlVG9JbmRleCIsImxvb3BlZFNsaWRlcyIsImdldFNsaWRlSW5kZXgiLCJzbGlkZSIsImxvb3BDcmVhdGUiLCJzbGlkZVJlYWxJbmRleCIsInNsaWRlVG8yIiwic2V0VHJhbnNsYXRlMiIsImFjdGl2ZVNsaWRlSW5kZXgiLCJieU1vdXNld2hlZWwiLCJwcmVwZW5kU2xpZGVzSW5kZXhlcyIsImFwcGVuZFNsaWRlc0luZGV4ZXMiLCJpc05leHQiLCJpc1ByZXYiLCJzbGlkZXNQcmVwZW5kZWQiLCJzbGlkZXNBcHBlbmRlZCIsInN3aXBlckxvb3BNb3ZlRE9NIiwicHJlcGVuZCIsImFwcGVuZCIsInJlY2FsY1NsaWRlcyIsImN1cnJlbnRTbGlkZVRyYW5zbGF0ZSIsIm5ld1NsaWRlVHJhbnNsYXRlIiwiZGlmZiIsInRvdWNoZXMiLCJ0b3VjaEV2ZW50c0RhdGEiLCJjb250cm9sbGVyIiwiY29udHJvbCIsImxvb3BQYXJhbXMiLCJjIiwibG9vcERlc3Ryb3kiLCJuZXdTbGlkZXNPcmRlciIsInN3aXBlclNsaWRlSW5kZXgiLCJzZXRHcmFiQ3Vyc29yIiwibW92aW5nIiwic2ltdWxhdGVUb3VjaCIsImlzTG9ja2VkIiwidG91Y2hFdmVudHNUYXJnZXQiLCJjdXJzb3IiLCJ1bnNldEdyYWJDdXJzb3IiLCJncmFiQ3Vyc29yIiwiY2xvc2VzdEVsZW1lbnQiLCJiYXNlIiwiX19jbG9zZXN0RnJvbSIsImFzc2lnbmVkU2xvdCIsImZvdW5kIiwiZ2V0Um9vdE5vZGUiLCJvblRvdWNoU3RhcnQiLCJldkNhY2hlIiwicG9pbnRlclR5cGUiLCJvcmlnaW5hbEV2ZW50IiwidGFyZ2V0RWwiLCJ3aGljaCIsImJ1dHRvbiIsImlzVG91Y2hlZCIsImlzTW92ZWQiLCJzd2lwaW5nQ2xhc3NIYXNWYWx1ZSIsIm5vU3dpcGluZ0NsYXNzIiwiZXZlbnRQYXRoIiwiY29tcG9zZWRQYXRoIiwibm9Td2lwaW5nU2VsZWN0b3IiLCJpc1RhcmdldFNoYWRvdyIsIm5vU3dpcGluZyIsImFsbG93Q2xpY2siLCJzd2lwZUhhbmRsZXIiLCJjdXJyZW50WCIsInBhZ2VYIiwiY3VycmVudFkiLCJwYWdlWSIsInN0YXJ0WCIsInN0YXJ0WSIsImVkZ2VTd2lwZURldGVjdGlvbiIsImlPU0VkZ2VTd2lwZURldGVjdGlvbiIsImVkZ2VTd2lwZVRocmVzaG9sZCIsImlPU0VkZ2VTd2lwZVRocmVzaG9sZCIsImlubmVyV2lkdGgiLCJwcmV2ZW50RGVmYXVsdCIsImFsbG93VG91Y2hDYWxsYmFja3MiLCJpc1Njcm9sbGluZyIsInN0YXJ0TW92aW5nIiwidG91Y2hTdGFydFRpbWUiLCJzd2lwZURpcmVjdGlvbiIsImFsbG93VGhyZXNob2xkTW92ZSIsImZvY3VzYWJsZUVsZW1lbnRzIiwic2hvdWxkUHJldmVudERlZmF1bHQiLCJhbGxvd1RvdWNoTW92ZSIsInRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdCIsInRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IiwiaXNDb250ZW50RWRpdGFibGUiLCJmcmVlTW9kZSIsIm9uVG91Y2hNb3ZlIiwicG9pbnRlckluZGV4IiwiZmluZEluZGV4IiwiY2FjaGVkRXYiLCJwb2ludGVySWQiLCJ0YXJnZXRUb3VjaCIsInByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyIiwicHJldlgiLCJwcmV2WSIsInRvdWNoUmVsZWFzZU9uRWRnZXMiLCJ0YXJnZXRUb3VjaGVzIiwiZGlmZlgiLCJkaWZmWSIsInNxcnQiLCJ0b3VjaEFuZ2xlIiwiYXRhbjIiLCJ6b29tIiwiY2FuY2VsYWJsZSIsInRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiIsIm5lc3RlZCIsInN0b3BQcm9wYWdhdGlvbiIsInRvdWNoZXNEaWZmIiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwib25lV2F5TW92ZW1lbnQiLCJ0b3VjaFJhdGlvIiwicHJldlRvdWNoZXNEaXJlY3Rpb24iLCJ0b3VjaGVzRGlyZWN0aW9uIiwiaXNMb29wIiwiYWxsb3dMb29wRml4Iiwic3RhcnRUcmFuc2xhdGUiLCJldnQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsImFsbG93TW9tZW50dW1Cb3VuY2UiLCJsb29wRml4ZWQiLCJkaXNhYmxlUGFyZW50U3dpcGVyIiwicmVzaXN0YW5jZVJhdGlvIiwicmVzaXN0YW5jZSIsImZvbGxvd0ZpbmdlciIsIm9uVG91Y2hFbmQiLCJ0eXBlIiwicHJvY2VlZCIsInRvdWNoRW5kVGltZSIsInRpbWVEaWZmIiwicGF0aFRyZWUiLCJsYXN0Q2xpY2tUaW1lIiwiY3VycmVudFBvcyIsInN0b3BJbmRleCIsImluY3JlbWVudDIiLCJyZXdpbmRGaXJzdEluZGV4IiwicmV3aW5kTGFzdEluZGV4IiwicmF0aW8iLCJsb25nU3dpcGVzTXMiLCJsb25nU3dpcGVzIiwibG9uZ1N3aXBlc1JhdGlvIiwic2hvcnRTd2lwZXMiLCJpc05hdkJ1dHRvblRhcmdldCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJvblJlc2l6ZSIsInNldEJyZWFrcG9pbnQiLCJpc1ZpcnR1YWxMb29wIiwiYXV0b3BsYXkiLCJydW5uaW5nIiwicGF1c2VkIiwicmVzaXplVGltZW91dCIsInJlc3VtZSIsIm9uQ2xpY2siLCJwcmV2ZW50Q2xpY2tzIiwicHJldmVudENsaWNrc1Byb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwib25TY3JvbGwiLCJvbkxvYWQiLCJkdW1teUV2ZW50QXR0YWNoZWQiLCJkdW1teUV2ZW50TGlzdGVuZXIiLCJjYXB0dXJlIiwiZG9tTWV0aG9kIiwic3dpcGVyTWV0aG9kIiwicGFzc2l2ZSIsInVwZGF0ZU9uV2luZG93UmVzaXplIiwiYXR0YWNoRXZlbnRzIiwiYmluZCIsImRldGFjaEV2ZW50cyIsImV2ZW50cyQxIiwiaXNHcmlkRW5hYmxlZCIsImJyZWFrcG9pbnRzMiIsImJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50IiwiYnJlYWtwb2ludHNCYXNlIiwiY3VycmVudEJyZWFrcG9pbnQiLCJicmVha3BvaW50T25seVBhcmFtcyIsImJyZWFrcG9pbnRQYXJhbXMiLCJvcmlnaW5hbFBhcmFtcyIsIndhc011bHRpUm93IiwiaXNNdWx0aVJvdyIsIndhc0VuYWJsZWQiLCJlbWl0Q29udGFpbmVyQ2xhc3NlcyIsImZpbGwiLCJ3YXNNb2R1bGVFbmFibGVkIiwiaXNNb2R1bGVFbmFibGVkIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpcmVjdGlvbkNoYW5nZWQiLCJuZWVkc1JlTG9vcCIsIndhc0xvb3AiLCJjaGFuZ2VEaXJlY3Rpb24iLCJpc0VuYWJsZWQiLCJoYXNMb29wIiwiY29udGFpbmVyRWwiLCJjdXJyZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwb2ludHMiLCJwb2ludCIsIm1pblJhdGlvIiwic3Vic3RyIiwidmFsdWUiLCJzb3J0IiwiYiIsInByZXBhcmVDbGFzc2VzIiwicHJlZml4IiwicmVzdWx0Q2xhc3NlcyIsIml0ZW0iLCJjbGFzc05hbWVzIiwiYWRkQ2xhc3NlcyIsInN1ZmZpeGVzIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzZXMiLCJ3YXNMb2NrZWQiLCJsYXN0U2xpZGVSaWdodEVkZ2UiLCJjaGVja092ZXJmbG93JDEiLCJkZWZhdWx0cyIsImNyZWF0ZUVsZW1lbnRzIiwidXJsIiwidW5pcXVlTmF2RWxlbWVudHMiLCJwYXNzaXZlTGlzdGVuZXJzIiwid3JhcHBlckNsYXNzIiwiX2VtaXRDbGFzc2VzIiwibW9kdWxlRXh0ZW5kUGFyYW1zIiwiYWxsTW9kdWxlc1BhcmFtcyIsIm1vZHVsZVBhcmFtTmFtZSIsIm1vZHVsZVBhcmFtcyIsImF1dG8iLCJwcm90b3R5cGVzIiwiZXh0ZW5kZWREZWZhdWx0cyIsInN3aXBlcnMiLCJuZXdQYXJhbXMiLCJtb2R1bGVzIiwiX19tb2R1bGVzX18iLCJtb2QiLCJzd2lwZXJQYXJhbXMiLCJwYXNzZWRQYXJhbXMiLCJldmVudE5hbWUiLCJ2ZWxvY2l0eSIsInRydW5jIiwiY2xpY2tUaW1lb3V0IiwidmVsb2NpdGllcyIsImltYWdlc1RvTG9hZCIsImltYWdlc0xvYWRlZCIsInNldFByb2dyZXNzIiwiY2xzIiwiY2xhc3NOYW1lIiwiZ2V0U2xpZGVDbGFzc2VzIiwidXBkYXRlcyIsInZpZXciLCJleGFjdCIsInNwdiIsImJyZWFrTG9vcCIsInNsaWRlSW5WaWV3IiwiY29tcGxldGUiLCJ0cmFuc2xhdGVWYWx1ZSIsInRyYW5zbGF0ZWQiLCJuZXdEaXJlY3Rpb24iLCJuZWVkVXBkYXRlIiwiY3VycmVudERpcmVjdGlvbiIsImNoYW5nZUxhbmd1YWdlRGlyZWN0aW9uIiwibW91bnQiLCJtb3VudGVkIiwicGFyZW50Tm9kZSIsImdldFdyYXBwZXJTZWxlY3RvciIsInRyaW0iLCJnZXRXcmFwcGVyIiwicmVzIiwic2xpZGVTbG90cyIsImxhenlFbGVtZW50cyIsImRlbGV0ZUluc3RhbmNlIiwiY2xlYW5TdHlsZXMiLCJleHRlbmREZWZhdWx0cyIsIm5ld0RlZmF1bHRzIiwiaW5zdGFsbE1vZHVsZSIsInVzZSIsIm1vZHVsZTIiLCJtIiwicHJvdG90eXBlR3JvdXAiLCJwcm90b01ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxxQkFBQTs7O0FDWUEsU0FBU1EsU0FBU0MsR0FBQSxFQUFLO0VBQ3JCLE9BQU9BLEdBQUEsS0FBUSxRQUFRLE9BQU9BLEdBQUEsS0FBUSxZQUFZLGlCQUFpQkEsR0FBQSxJQUFPQSxHQUFBLENBQUlDLFdBQUEsS0FBZ0JDLE1BQUE7QUFDaEc7QUFDQSxTQUFTQyxPQUFPQyxNQUFBLEVBQVFDLEdBQUEsRUFBSztFQUMzQixJQUFJRCxNQUFBLEtBQVcsUUFBUTtJQUNyQkEsTUFBQSxHQUFTLENBQUM7RUFDWjtFQUNBLElBQUlDLEdBQUEsS0FBUSxRQUFRO0lBQ2xCQSxHQUFBLEdBQU0sQ0FBQztFQUNUO0VBQ0FILE1BQUEsQ0FBT0ks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Q0FBQSxJQUFLejJCLE1BQUEsQ0FBT3MyQixhQUFBLENBQWNHLENBQUMsQ0FBQztNQUMzQyxPQUFPejJCLE1BQUE7SUFDVDtJQUNBQSxNQUFBLENBQU9zMkIsYUFBQSxDQUFjRSxPQUFNO0lBQzNCLE9BQU94MkIsTUFBQTtFQUNUO0FBQ0Y7QUFDQVMsTUFBQSxDQUFPSSxJQUFBLENBQUsyeUIsVUFBVSxFQUFFMXlCLE9BQUEsQ0FBUTQxQixjQUFBLElBQWtCO0VBQ2hEajJCLE1BQUEsQ0FBT0ksSUFBQSxDQUFLMnlCLFVBQUEsQ0FBV2tELGNBQUEsQ0FBZSxFQUFFNTFCLE9BQUEsQ0FBUTYxQixXQUFBLElBQWU7SUFDN0QzMkIsTUFBQSxDQUFPMkcsU0FBQSxDQUFVZ3dCLFdBQUEsSUFBZW5ELFVBQUEsQ0FBV2tELGNBQUEsRUFBZ0JDLFdBQUE7RUFDN0QsQ0FBQztBQUNILENBQUM7QUFDRDMyQixNQUFBLENBQU91MkIsR0FBQSxDQUFJLENBQUN0bUIsTUFBQSxFQUFRdUIsUUFBUSxDQUFDOzs7QUh4akg3QixJQUFPdFIscUJBQUEsR0FBUUYsTUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==