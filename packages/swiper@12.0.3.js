System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["swiper","12.0.3"]]);
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

// .beyond/uimport/swiper.12.0.3.js
var swiper_12_0_3_exports = {};
__export(swiper_12_0_3_exports, {
  Swiper: () => Swiper,
  default: () => swiper_12_0_3_default
});
module.exports = __toCommonJS(swiper_12_0_3_exports);

// node_modules/swiper/shared/ssr-window.esm.mjs
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
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
function classesToTokens(classes2 = "") {
  return classes2.trim().split(" ").filter(c => !!c.trim());
}
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
function nextTick(callback, delay = 0) {
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
function getTranslate(el, axis = "x") {
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
function extend2(...args) {
  const to = Object(args[0]);
  const noExtend = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
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
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
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
function elementChildren(element, selector = "") {
  const window2 = getWindow();
  const children = [...element.children];
  if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter(el => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
  }
}
function elementIsChildOf(el, parent) {
  const window2 = getWindow();
  let isChild = parent.contains(el);
  if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {}
}
function createElement(tag, classes2 = []) {
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes2) ? classes2 : classesToTokens(classes2)));
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
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
  return v => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 1e-3;
    }
    return v;
  };
}
function setInnerHTML(el, html = "") {
  if (typeof trustedTypes !== "undefined") {
    el.innerHTML = trustedTypes.createPolicy("html", {
      createHTML: s => s
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
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
function calcDevice({
  userAgent
} = {}) {
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
  let ipad = ua.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
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
function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}
var browser;
function calcBrowser() {
  const window2 = getWindow();
  const device = getDevice();
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
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}
function Resize({
  swiper,
  on,
  emit
}) {
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
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
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
function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window2 = getWindow();
  const attach = (target, options = {}) => {
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
      childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
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
    function onceHandler(...args) {
      self.off(events2, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
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
  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events2;
    let data;
    let context;
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
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
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
  const swiperSize = swiper.size - offsetBefore - offsetAfter;
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
  swiper.virtualSize = -spaceBetween - offsetBefore - offsetAfter;
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
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== "undefined";
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide2 = slides[i];
    if (slide2) {
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (elementStyle(slide2, "display") === "none") continue;
    }
    if (isVirtual && params.slidesPerView === "auto") {
      if (params.virtual.slidesPerViewAutoSlideSize) {
        slideSize = params.virtual.slidesPerViewAutoSlideSize;
      }
      if (slideSize && slide2) {
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        slide2.style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    } else if (params.slidesPerView === "auto") {
      if (shouldResetSlideSize) {
        slide2.style[swiper.getDirectionLabel("width")] = ``;
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
      if (slide2) {
        slide2.style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
      }
    }
    if (slide2) {
      slide2.swiperSlideSize = slideSize;
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
    wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
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
    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
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
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
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
    const offsetSize = (offsetBefore || 0) + (offsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
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
  swiper.emit("slidesUpdated");
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
var toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate2 = this && this.translate || 0) {
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
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide2);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
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
var toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
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
    if (gridEnabled) {
      activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
      nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
      prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
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
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit("snapIndexChange");
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
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
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
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
function translateTo(translate2 = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
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
          swiper.animating = false;
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
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = "next";else if (activeIndex < previousIndex) dir = "prev";else dir = "reset";
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === "reset") {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === "next") {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
function transitionStart(runCallbacks = true, direction) {
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
function transitionEnd(runCallbacks = true, direction) {
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
function slideTo(index = 0, speed, runCallbacks = true, internal, initial) {
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
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
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
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
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
  const browser2 = getBrowser();
  const isSafari = browser2.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
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
function slideToLoop(index = 0, speed, runCallbacks = true, internal) {
  if (typeof index === "string") {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides,
        slidesOffsetBefore,
        slidesOffsetAfter
      } = swiper.params;
      const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === "auto") {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (bothDirections && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (bothDirections) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && bothDirections && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = bothDirections ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === "next" ? swiper.realIndex : void 0
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find(slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}
function slideNext(speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
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
function slidePrev(speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
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
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== "undefined") {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
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
function slideReset(speed, runCallbacks = true, internal) {
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === "undefined") {
    speed = swiper.params.speed;
  }
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
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
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
function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute("data-swiper-slide-index", index);
    });
  };
  const clearBlankSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach(el => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    }
    initSlides();
  } else {
    initSlides();
  }
  const bothDirections = params.centeredSlides || !!params.slidesOffsetBefore || !!params.slidesOffsetAfter;
  swiper.loopFix({
    slideRealIndex,
    direction: bothDirections ? void 0 : "next",
    initial
  });
}
function loopFix({
  slideRealIndex,
  slideTo: slideTo2 = true,
  direction,
  setTranslate: setTranslate2,
  activeSlideIndex,
  initial,
  byController,
  byMousewheel
} = {}) {
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
  const {
    centeredSlides,
    slidesOffsetBefore,
    slidesOffsetAfter,
    initialSlide
  } = params;
  const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo2) {
      if (!bothDirections && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (bothDirections && swiper.snapIndex < params.slidesPerView) {
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
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === "auto") {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (bothDirections && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = bothDirections ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
  } else if (gridEnabled && params.grid.fill === "row") {
    showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !bothDirections;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === "undefined") {
    activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === "next" || !direction;
  const isPrev = direction === "prev" || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (bothDirections && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
          if (slides[i2].column === colIndexToPrepend) prependSlidesIndexes.push(i2);
        }
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide2, slideIndex) => {
          if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === "auto") {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide2, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
    });
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
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate2) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate2) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
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
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
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
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
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
function closestElement(selector, base = this) {
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
function preventEdgeSwipe(swiper, event, startX) {
  const window2 = getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === "prevent") {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document2 = getDocument();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === "pointerdown") {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === "touchstart") {
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === "wrapper") {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ("which" in e && e.which === 3) return;
  if ("button" in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
  const eventPath = e.composedPath ? e.composedPath() : e.path;
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
  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
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
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
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
  if (e.type === "pointermove") {
    if (data.touchId !== null) return;
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === "touchmove") {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    return;
  }
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
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
    document2.activeElement.blur();
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
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
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
  if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
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
  const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
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
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
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
  (/* @__PURE__ */new Date()).getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
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
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
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
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
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
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
  if (!isTouchEvent) {
    if (data.touchId !== null) return;
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
    const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === "mouse") return;
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
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
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
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment2] !== "undefined") {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment2] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
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
function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = "auto";
  }
}
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
  if (!el || typeof el === "string") return;
  document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]("touchstart", swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]("pointerdown", swiper.onTouchStart, {
    passive: false
  });
  document2[domMethod]("touchmove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("pointermove", swiper.onTouchMove, {
    passive: false,
    capture
  });
  document2[domMethod]("touchend", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointerup", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("pointercancel", swiper.onTouchEnd, {
    passive: true
  });
  document2[domMethod]("touchcancel", swiper.onTouchEnd, {
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
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
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
  const document2 = getDocument();
  const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
  const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
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
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
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
function getBreakpoint(breakpoints2, base = "window", containerEl) {
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
  if (!el || typeof el === "string") return;
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
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: "swiper",
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
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
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
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
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
  return function extendParams(obj = {}) {
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
  constructor(...args) {
    let el;
    let params;
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
        pointerId: null,
        touchId: null
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
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
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
    return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === "column") {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === "row") {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
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
  slidesPerViewDynamic(view = "current", exact = false) {
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
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
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
  changeDirection(newDirection, needUpdate = true) {
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
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
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
      swiper.loopCreate(void 0, true);
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
  destroy(deleteInstance = true, cleanStyles = true) {
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
      if (el && typeof el !== "string") {
        el.removeAttribute("style");
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute("style");
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
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
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.swiper = null;
      }
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

// .beyond/uimport/swiper.12.0.3.js
var swiper_12_0_3_default = Swiper;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zd2lwZXIuMTIuMC4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3NyLXdpbmRvdy5lc20ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvc3dpcGVyLWNvcmUubWpzIl0sIm5hbWVzIjpbInN3aXBlcl8xMl8wXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU3dpcGVyIiwiZGVmYXVsdCIsInN3aXBlcl8xMl8wXzNfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpc09iamVjdCIsIm9iaiIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwiZXh0ZW5kIiwidGFyZ2V0Iiwic3JjIiwibm9FeHRlbmQiLCJrZXlzIiwiZmlsdGVyIiwia2V5IiwiaW5kZXhPZiIsImZvckVhY2giLCJsZW5ndGgiLCJzc3JEb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwibm9kZU5hbWUiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwic3R5bGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnROUyIsImltcG9ydE5vZGUiLCJsb2NhdGlvbiIsImhhc2giLCJob3N0IiwiaG9zdG5hbWUiLCJocmVmIiwib3JpZ2luIiwicGF0aG5hbWUiLCJwcm90b2NvbCIsInNlYXJjaCIsImdldERvY3VtZW50IiwiZG9jIiwiZG9jdW1lbnQiLCJzc3JXaW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZ28iLCJiYWNrIiwiQ3VzdG9tRXZlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIkltYWdlIiwiRGF0ZSIsInNjcmVlbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYXRjaE1lZGlhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiZ2V0V2luZG93Iiwid2luIiwid2luZG93IiwiY2xhc3Nlc1RvVG9rZW5zIiwiY2xhc3NlczIiLCJ0cmltIiwic3BsaXQiLCJjIiwiZGVsZXRlUHJvcHMiLCJvYmplY3QiLCJlIiwibmV4dFRpY2siLCJkZWxheSIsIm5vdyIsImdldENvbXB1dGVkU3R5bGUyIiwiZWwiLCJ3aW5kb3cyIiwiY3VycmVudFN0eWxlIiwiZ2V0VHJhbnNsYXRlIiwiYXhpcyIsIm1hdHJpeCIsImN1clRyYW5zZm9ybSIsInRyYW5zZm9ybU1hdHJpeCIsImN1clN0eWxlIiwiV2ViS2l0Q1NTTWF0cml4IiwidHJhbnNmb3JtIiwid2Via2l0VHJhbnNmb3JtIiwibWFwIiwiYSIsInJlcGxhY2UiLCJqb2luIiwiTW96VHJhbnNmb3JtIiwiT1RyYW5zZm9ybSIsIk1zVHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJ0b1N0cmluZyIsIm00MSIsInBhcnNlRmxvYXQiLCJtNDIiLCJpc09iamVjdDIiLCJvIiwicHJvdG90eXBlIiwiY2FsbCIsInNsaWNlIiwiaXNOb2RlIiwibm9kZSIsIkhUTUxFbGVtZW50Iiwibm9kZVR5cGUiLCJleHRlbmQyIiwiYXJncyIsInRvIiwiaSIsIm5leHRTb3VyY2UiLCJrZXlzQXJyYXkiLCJuZXh0SW5kZXgiLCJsZW4iLCJuZXh0S2V5IiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJfX3N3aXBlcl9fIiwic2V0Q1NTUHJvcGVydHkiLCJ2YXJOYW1lIiwidmFyVmFsdWUiLCJzZXRQcm9wZXJ0eSIsImFuaW1hdGVDU1NNb2RlU2Nyb2xsIiwic3dpcGVyIiwidGFyZ2V0UG9zaXRpb24iLCJzaWRlIiwic3RhcnRQb3NpdGlvbiIsInRyYW5zbGF0ZSIsInN0YXJ0VGltZSIsInRpbWUiLCJkdXJhdGlvbiIsInBhcmFtcyIsInNwZWVkIiwid3JhcHBlckVsIiwic2Nyb2xsU25hcFR5cGUiLCJjc3NNb2RlRnJhbWVJRCIsImRpciIsImlzT3V0T2ZCb3VuZCIsImN1cnJlbnQiLCJhbmltYXRlIiwiZ2V0VGltZSIsInByb2dyZXNzIiwiTWF0aCIsIm1heCIsIm1pbiIsImVhc2VQcm9ncmVzcyIsImNvcyIsIlBJIiwiY3VycmVudFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJvdmVyZmxvdyIsImdldFNsaWRlVHJhbnNmb3JtRWwiLCJzbGlkZUVsIiwic2hhZG93Um9vdCIsImVsZW1lbnRDaGlsZHJlbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsIkhUTUxTbG90RWxlbWVudCIsInB1c2giLCJhc3NpZ25lZEVsZW1lbnRzIiwibWF0Y2hlcyIsImVsZW1lbnRJc0NoaWxkT2ZTbG90Iiwic2xvdCIsImVsZW1lbnRzUXVldWUiLCJlbGVtZW50VG9DaGVjayIsInNoaWZ0IiwiZWxlbWVudElzQ2hpbGRPZiIsInBhcmVudCIsImlzQ2hpbGQiLCJjb250YWlucyIsImluY2x1ZGVzIiwic2hvd1dhcm5pbmciLCJ0ZXh0IiwiY29uc29sZSIsIndhcm4iLCJlcnIiLCJ0YWciLCJjbGFzc0xpc3QiLCJhZGQiLCJBcnJheSIsImlzQXJyYXkiLCJlbGVtZW50T2Zmc2V0IiwiZG9jdW1lbnQyIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInNjcm9sbFRvcCIsInNjcm9sbFkiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsWCIsInRvcCIsImxlZnQiLCJlbGVtZW50UHJldkFsbCIsInByZXZFbHMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwicHJldiIsImVsZW1lbnROZXh0QWxsIiwibmV4dEVscyIsIm5leHRFbGVtZW50U2libGluZyIsIm5leHQiLCJlbGVtZW50U3R5bGUiLCJwcm9wIiwiZWxlbWVudEluZGV4IiwiY2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJlbGVtZW50UGFyZW50cyIsInBhcmVudHMiLCJwYXJlbnRFbGVtZW50IiwiZWxlbWVudFRyYW5zaXRpb25FbmQiLCJmaXJlQ2FsbEJhY2siLCJlbGVtZW50T3V0ZXJTaXplIiwic2l6ZSIsImluY2x1ZGVNYXJnaW5zIiwib2Zmc2V0V2lkdGgiLCJtYWtlRWxlbWVudHNBcnJheSIsImdldFJvdGF0ZUZpeCIsInYiLCJhYnMiLCJicm93c2VyIiwibmVlZDNkRml4Iiwic2V0SW5uZXJIVE1MIiwiaHRtbCIsInRydXN0ZWRUeXBlcyIsImlubmVySFRNTCIsImNyZWF0ZVBvbGljeSIsImNyZWF0ZUhUTUwiLCJzIiwic3VwcG9ydCIsImNhbGNTdXBwb3J0Iiwic21vb3RoU2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwidG91Y2giLCJEb2N1bWVudFRvdWNoIiwiZ2V0U3VwcG9ydCIsImRldmljZUNhY2hlZCIsImNhbGNEZXZpY2UiLCJzdXBwb3J0MiIsInBsYXRmb3JtIiwidWEiLCJkZXZpY2UiLCJpb3MiLCJhbmRyb2lkIiwic2NyZWVuV2lkdGgiLCJ3aWR0aCIsInNjcmVlbkhlaWdodCIsImhlaWdodCIsIm1hdGNoIiwiaXBhZCIsImlwb2QiLCJpcGhvbmUiLCJ3aW5kb3dzIiwibWFjb3MiLCJpUGFkU2NyZWVucyIsIm9zIiwiZ2V0RGV2aWNlIiwib3ZlcnJpZGVzIiwiY2FsY0Jyb3dzZXIiLCJuZWVkUGVyc3BlY3RpdmVGaXgiLCJpc1NhZmFyaSIsInRvTG93ZXJDYXNlIiwiU3RyaW5nIiwibWFqb3IiLCJtaW5vciIsIm51bSIsIk51bWJlciIsImlzV2ViVmlldyIsInRlc3QiLCJpc1NhZmFyaUJyb3dzZXIiLCJnZXRCcm93c2VyIiwiUmVzaXplIiwib24iLCJlbWl0Iiwib2JzZXJ2ZXIiLCJhbmltYXRpb25GcmFtZSIsInJlc2l6ZUhhbmRsZXIiLCJkZXN0cm95ZWQiLCJpbml0aWFsaXplZCIsImNyZWF0ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJjb250ZW50Qm94U2l6ZSIsImNvbnRlbnRSZWN0IiwiaW5saW5lU2l6ZSIsImJsb2NrU2l6ZSIsIm9ic2VydmUiLCJyZW1vdmVPYnNlcnZlciIsInVub2JzZXJ2ZSIsIm9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlciIsInJlc2l6ZU9ic2VydmVyIiwiT2JzZXJ2ZXIiLCJleHRlbmRQYXJhbXMiLCJvYnNlcnZlcnMiLCJhdHRhY2giLCJvcHRpb25zIiwiT2JzZXJ2ZXJGdW5jIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYmtpdE11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJfX3ByZXZlbnRPYnNlcnZlcl9fIiwib2JzZXJ2ZXJVcGRhdGUiLCJvYnNlcnZlclVwZGF0ZTIiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0IiwiaXNFbGVtZW50IiwiY2hhcmFjdGVyRGF0YSIsImluaXQiLCJvYnNlcnZlUGFyZW50cyIsImNvbnRhaW5lclBhcmVudHMiLCJob3N0RWwiLCJvYnNlcnZlU2xpZGVDaGlsZHJlbiIsImRlc3Ryb3kiLCJkaXNjb25uZWN0Iiwic3BsaWNlIiwiZXZlbnRzRW1pdHRlciIsImV2ZW50czIiLCJoYW5kbGVyIiwicHJpb3JpdHkiLCJzZWxmIiwiZXZlbnRzTGlzdGVuZXJzIiwibWV0aG9kIiwiZXZlbnQiLCJvbmNlIiwib25jZUhhbmRsZXIiLCJvZmYiLCJfX2VtaXR0ZXJQcm94eSIsImFwcGx5Iiwib25BbnkiLCJldmVudHNBbnlMaXN0ZW5lcnMiLCJvZmZBbnkiLCJpbmRleCIsImV2ZW50SGFuZGxlciIsImRhdGEiLCJjb250ZXh0IiwiZXZlbnRzIiwidW5zaGlmdCIsImV2ZW50c0FycmF5IiwidXBkYXRlU2l6ZSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaXNIb3Jpem9udGFsIiwiaXNWZXJ0aWNhbCIsInBhcnNlSW50IiwiaXNOYU4iLCJhc3NpZ24iLCJ1cGRhdGVTbGlkZXMiLCJnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlIiwibGFiZWwiLCJnZXREaXJlY3Rpb25MYWJlbCIsInNsaWRlc0VsIiwicnRsVHJhbnNsYXRlIiwicnRsIiwid3JvbmdSVEwiLCJpc1ZpcnR1YWwiLCJ2aXJ0dWFsIiwiZW5hYmxlZCIsInByZXZpb3VzU2xpZGVzTGVuZ3RoIiwic2xpZGVzIiwic2xpZGVDbGFzcyIsInNsaWRlc0xlbmd0aCIsInNuYXBHcmlkIiwic2xpZGVzR3JpZCIsInNsaWRlc1NpemVzR3JpZCIsIm9mZnNldEJlZm9yZSIsInNsaWRlc09mZnNldEJlZm9yZSIsIm9mZnNldEFmdGVyIiwic2xpZGVzT2Zmc2V0QWZ0ZXIiLCJwcmV2aW91c1NuYXBHcmlkTGVuZ3RoIiwicHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoIiwic3dpcGVyU2l6ZSIsInNwYWNlQmV0d2VlbiIsInNsaWRlUG9zaXRpb24iLCJwcmV2U2xpZGVTaXplIiwidmlydHVhbFNpemUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJjZW50ZXJlZFNsaWRlcyIsImNzc01vZGUiLCJncmlkRW5hYmxlZCIsImdyaWQiLCJyb3dzIiwiaW5pdFNsaWRlcyIsInVuc2V0U2xpZGVzIiwic2xpZGVTaXplIiwic2hvdWxkUmVzZXRTbGlkZVNpemUiLCJzbGlkZXNQZXJWaWV3IiwiYnJlYWtwb2ludHMiLCJzbGlkZTIiLCJ1cGRhdGVTbGlkZSIsInNsaWRlc1BlclZpZXdBdXRvU2xpZGVTaXplIiwicm91bmRMZW5ndGhzIiwiZmxvb3IiLCJzbGlkZVN0eWxlcyIsImN1cnJlbnRUcmFuc2Zvcm0iLCJjdXJyZW50V2ViS2l0VHJhbnNmb3JtIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3hTaXppbmciLCJzd2lwZXJTbGlkZVNpemUiLCJzbGlkZXNQZXJHcm91cCIsInNsaWRlc1Blckdyb3VwU2tpcCIsImVmZmVjdCIsInNldFdyYXBwZXJTaXplIiwidXBkYXRlV3JhcHBlclNpemUiLCJuZXdTbGlkZXNHcmlkIiwic2xpZGVzR3JpZEl0ZW0iLCJsb29wIiwiZ3JvdXBzIiwiY2VpbCIsInNsaWRlc0JlZm9yZSIsInNsaWRlc0FmdGVyIiwiZ3JvdXBTaXplIiwiXyIsInNsaWRlSW5kZXgiLCJjZW50ZXJlZFNsaWRlc0JvdW5kcyIsImFsbFNsaWRlc1NpemUiLCJzbGlkZVNpemVWYWx1ZSIsIm1heFNuYXAiLCJzbmFwIiwiY2VudGVySW5zdWZmaWNpZW50U2xpZGVzIiwib2Zmc2V0U2l6ZSIsImFsbFNsaWRlc09mZnNldCIsInNuYXBJbmRleCIsImFkZFRvU25hcEdyaWQiLCJhZGRUb1NsaWRlc0dyaWQiLCJ3YXRjaE92ZXJmbG93IiwiY2hlY2tPdmVyZmxvdyIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJ1cGRhdGVTbGlkZXNPZmZzZXQiLCJiYWNrRmFjZUhpZGRlbkNsYXNzIiwiY29udGFpbmVyTW9kaWZpZXJDbGFzcyIsImhhc0NsYXNzQmFja2ZhY2VDbGFzc0FkZGVkIiwibWF4QmFja2ZhY2VIaWRkZW5TbGlkZXMiLCJyZW1vdmUiLCJ1cGRhdGVBdXRvSGVpZ2h0IiwiYWN0aXZlU2xpZGVzIiwic2V0VHJhbnNpdGlvbiIsImdldFNsaWRlQnlJbmRleCIsImdldFNsaWRlSW5kZXhCeURhdGEiLCJ2aXNpYmxlU2xpZGVzIiwiYWN0aXZlSW5kZXgiLCJvZmZzZXRIZWlnaHQiLCJtaW51c09mZnNldCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzd2lwZXJTbGlkZU9mZnNldCIsImNzc092ZXJmbG93QWRqdXN0bWVudCIsInRvZ2dsZVNsaWRlQ2xhc3NlcyQxIiwiY29uZGl0aW9uIiwiY2xhc3NOYW1lIiwidXBkYXRlU2xpZGVzUHJvZ3Jlc3MiLCJ0cmFuc2xhdGUyIiwib2Zmc2V0Q2VudGVyIiwidmlzaWJsZVNsaWRlc0luZGV4ZXMiLCJzbGlkZU9mZnNldCIsInNsaWRlUHJvZ3Jlc3MiLCJtaW5UcmFuc2xhdGUiLCJvcmlnaW5hbFNsaWRlUHJvZ3Jlc3MiLCJzbGlkZUJlZm9yZSIsInNsaWRlQWZ0ZXIiLCJpc0Z1bGx5VmlzaWJsZSIsImlzVmlzaWJsZSIsInNsaWRlVmlzaWJsZUNsYXNzIiwic2xpZGVGdWxseVZpc2libGVDbGFzcyIsIm9yaWdpbmFsUHJvZ3Jlc3MiLCJ1cGRhdGVQcm9ncmVzcyIsIm11bHRpcGxpZXIiLCJ0cmFuc2xhdGVzRGlmZiIsIm1heFRyYW5zbGF0ZSIsImlzQmVnaW5uaW5nIiwiaXNFbmQiLCJwcm9ncmVzc0xvb3AiLCJ3YXNCZWdpbm5pbmciLCJ3YXNFbmQiLCJpc0JlZ2lubmluZ1JvdW5kZWQiLCJpc0VuZFJvdW5kZWQiLCJmaXJzdFNsaWRlSW5kZXgiLCJsYXN0U2xpZGVJbmRleCIsImZpcnN0U2xpZGVUcmFuc2xhdGUiLCJsYXN0U2xpZGVUcmFuc2xhdGUiLCJ0cmFuc2xhdGVNYXgiLCJ0cmFuc2xhdGVBYnMiLCJhdXRvSGVpZ2h0IiwidG9nZ2xlU2xpZGVDbGFzc2VzIiwidXBkYXRlU2xpZGVzQ2xhc3NlcyIsImdldEZpbHRlcmVkU2xpZGUiLCJhY3RpdmVTbGlkZSIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsImZpbmQiLCJjb2x1bW4iLCJzbGlkZUFjdGl2ZUNsYXNzIiwic2xpZGVOZXh0Q2xhc3MiLCJzbGlkZVByZXZDbGFzcyIsImVtaXRTbGlkZXNDbGFzc2VzIiwicHJvY2Vzc0xhenlQcmVsb2FkZXIiLCJpbWFnZUVsIiwic2xpZGVTZWxlY3RvciIsImNsb3Nlc3QiLCJsYXp5RWwiLCJsYXp5UHJlbG9hZGVyQ2xhc3MiLCJ1bmxhenkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcmVsb2FkIiwiYW1vdW50IiwibGF6eVByZWxvYWRQcmV2TmV4dCIsInNsaWRlc1BlclZpZXdEeW5hbWljIiwiYWN0aXZlQ29sdW1uIiwicHJlbG9hZENvbHVtbnMiLCJmcm9tIiwic2xpZGVJbmRleExhc3RJblZpZXciLCJyZXdpbmQiLCJyZWFsSW5kZXgiLCJnZXRBY3RpdmVJbmRleEJ5VHJhbnNsYXRlIiwibm9ybWFsaXplU2xpZGVJbmRleCIsInVwZGF0ZUFjdGl2ZUluZGV4IiwibmV3QWN0aXZlSW5kZXgiLCJwcmV2aW91c0luZGV4IiwicHJldmlvdXNSZWFsSW5kZXgiLCJwcmV2aW91c1NuYXBJbmRleCIsImdldFZpcnR1YWxSZWFsSW5kZXgiLCJhSW5kZXgiLCJyZWFsSW5kZXgyIiwic2tpcCIsImZpcnN0U2xpZGVJbkNvbHVtbiIsImFjdGl2ZVNsaWRlSW5kZXgiLCJnZXRBdHRyaWJ1dGUiLCJydW5DYWxsYmFja3NPbkluaXQiLCJ1cGRhdGVDbGlja2VkU2xpZGUiLCJwYXRoIiwicGF0aEVsIiwic2xpZGVGb3VuZCIsImNsaWNrZWRTbGlkZSIsImNsaWNrZWRJbmRleCIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJ1cGRhdGUiLCJnZXRTd2lwZXJUcmFuc2xhdGUiLCJ2aXJ0dWFsVHJhbnNsYXRlIiwiY3VycmVudFRyYW5zbGF0ZSIsInNldFRyYW5zbGF0ZSIsImJ5Q29udHJvbGxlciIsIngiLCJ5IiwieiIsInByZXZpb3VzVHJhbnNsYXRlIiwibmV3UHJvZ3Jlc3MiLCJ0cmFuc2xhdGVUbyIsInJ1bkNhbGxiYWNrcyIsInRyYW5zbGF0ZUJvdW5kcyIsImludGVybmFsIiwiYW5pbWF0aW5nIiwicHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uIiwibWluVHJhbnNsYXRlMiIsIm1heFRyYW5zbGF0ZTIiLCJuZXdUcmFuc2xhdGUiLCJpc0giLCJiZWhhdmlvciIsIm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCIsInRyYW5zaXRpb25FbmQyIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwidHJhbnNpdGlvbkVtaXQiLCJkaXJlY3Rpb24iLCJzdGVwIiwidHJhbnNpdGlvblN0YXJ0IiwidHJhbnNpdGlvbkVuZCIsInRyYW5zaXRpb24iLCJzbGlkZVRvIiwiaW5pdGlhbCIsIm5vcm1hbGl6ZWRUcmFuc2xhdGUiLCJub3JtYWxpemVkR3JpZCIsIm5vcm1hbGl6ZWRHcmlkTmV4dCIsImFsbG93U2xpZGVOZXh0IiwiYWxsb3dTbGlkZVByZXYiLCJpc0luaXRpYWxWaXJ0dWFsIiwidCIsIl9pbW1lZGlhdGVWaXJ0dWFsIiwiX2Nzc01vZGVWaXJ0dWFsSW5pdGlhbFNldCIsImluaXRpYWxTbGlkZSIsImJyb3dzZXIyIiwib25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQiLCJzbGlkZVRvTG9vcCIsImluZGV4QXNOdW1iZXIiLCJuZXdJbmRleCIsInRhcmdldFNsaWRlSW5kZXgiLCJjb2xzIiwiYm90aERpcmVjdGlvbnMiLCJuZWVkTG9vcEZpeCIsImxvb3BGaXgiLCJzbGlkZVJlYWxJbmRleCIsInNsaWRlTmV4dCIsInBlckdyb3VwIiwic2xpZGVzUGVyR3JvdXBBdXRvIiwiaW5jcmVtZW50IiwibG9vcFByZXZlbnRzU2xpZGluZyIsIl9jbGllbnRMZWZ0Iiwic2xpZGVQcmV2Iiwibm9ybWFsaXplIiwidmFsIiwibm9ybWFsaXplZFNuYXBHcmlkIiwiaXNGcmVlTW9kZSIsImZyZWVNb2RlIiwicHJldlNuYXAiLCJwcmV2U25hcEluZGV4IiwicHJldkluZGV4IiwibGFzdEluZGV4Iiwic2xpZGVSZXNldCIsInNsaWRlVG9DbG9zZXN0IiwidGhyZXNob2xkIiwiY3VycmVudFNuYXAiLCJuZXh0U25hcCIsInNsaWRlVG9JbmRleCIsImdldFNsaWRlSW5kZXhXaGVuR3JpZCIsImlzR3JpZCIsImdldFNsaWRlSW5kZXgiLCJzbGlkZSIsImxvb3BDcmVhdGUiLCJjbGVhckJsYW5rU2xpZGVzIiwic2xpZGVCbGFua0NsYXNzIiwicmVjYWxjU2xpZGVzIiwibG9vcEFkZEJsYW5rU2xpZGVzIiwic2hvdWxkRmlsbEdyb3VwIiwic2hvdWxkRmlsbEdyaWQiLCJhZGRCbGFua1NsaWRlcyIsImFtb3VudE9mU2xpZGVzIiwiYXBwZW5kIiwic2xpZGVzVG9BZGQiLCJzbGlkZVRvMiIsInNldFRyYW5zbGF0ZTIiLCJieU1vdXNld2hlZWwiLCJsb29wZWRTbGlkZXMiLCJsb29wQWRkaXRpb25hbFNsaWRlcyIsImZpbGwiLCJwcmVwZW5kU2xpZGVzSW5kZXhlcyIsImFwcGVuZFNsaWRlc0luZGV4ZXMiLCJpc0luaXRpYWxPdmVyZmxvdyIsImlzTmV4dCIsImlzUHJldiIsInNsaWRlc1ByZXBlbmRlZCIsInNsaWRlc0FwcGVuZGVkIiwiYWN0aXZlQ29sSW5kZXgiLCJhY3RpdmVDb2xJbmRleFdpdGhTaGlmdCIsImNvbEluZGV4VG9QcmVwZW5kIiwiaTIiLCJzd2lwZXJMb29wTW92ZURPTSIsInByZXBlbmQiLCJjdXJyZW50U2xpZGVUcmFuc2xhdGUiLCJuZXdTbGlkZVRyYW5zbGF0ZSIsImRpZmYiLCJ0b3VjaEV2ZW50c0RhdGEiLCJzdGFydFRyYW5zbGF0ZSIsImNvbnRyb2xsZXIiLCJjb250cm9sIiwibG9vcFBhcmFtcyIsImxvb3BEZXN0cm95IiwibmV3U2xpZGVzT3JkZXIiLCJzd2lwZXJTbGlkZUluZGV4Iiwic2V0R3JhYkN1cnNvciIsIm1vdmluZyIsInNpbXVsYXRlVG91Y2giLCJpc0xvY2tlZCIsInRvdWNoRXZlbnRzVGFyZ2V0IiwiY3Vyc29yIiwidW5zZXRHcmFiQ3Vyc29yIiwiZ3JhYkN1cnNvciIsImNsb3Nlc3RFbGVtZW50IiwiYmFzZSIsIl9fY2xvc2VzdEZyb20iLCJhc3NpZ25lZFNsb3QiLCJmb3VuZCIsImdldFJvb3ROb2RlIiwicHJldmVudEVkZ2VTd2lwZSIsInN0YXJ0WCIsImVkZ2VTd2lwZURldGVjdGlvbiIsImVkZ2VTd2lwZVRocmVzaG9sZCIsImlubmVyV2lkdGgiLCJwcmV2ZW50RGVmYXVsdCIsIm9uVG91Y2hTdGFydCIsIm9yaWdpbmFsRXZlbnQiLCJ0eXBlIiwicG9pbnRlcklkIiwidGFyZ2V0VG91Y2hlcyIsInRvdWNoSWQiLCJpZGVudGlmaWVyIiwicGFnZVgiLCJ0b3VjaGVzIiwicG9pbnRlclR5cGUiLCJ0YXJnZXRFbCIsIndoaWNoIiwiYnV0dG9uIiwiaXNUb3VjaGVkIiwiaXNNb3ZlZCIsInN3aXBpbmdDbGFzc0hhc1ZhbHVlIiwibm9Td2lwaW5nQ2xhc3MiLCJldmVudFBhdGgiLCJjb21wb3NlZFBhdGgiLCJub1N3aXBpbmdTZWxlY3RvciIsImlzVGFyZ2V0U2hhZG93Iiwibm9Td2lwaW5nIiwiYWxsb3dDbGljayIsInN3aXBlSGFuZGxlciIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJwYWdlWSIsInN0YXJ0WSIsImFsbG93VG91Y2hDYWxsYmFja3MiLCJpc1Njcm9sbGluZyIsInN0YXJ0TW92aW5nIiwidG91Y2hTdGFydFRpbWUiLCJzd2lwZURpcmVjdGlvbiIsImFsbG93VGhyZXNob2xkTW92ZSIsImZvY3VzYWJsZUVsZW1lbnRzIiwic2hvdWxkUHJldmVudERlZmF1bHQiLCJhbGxvd1RvdWNoTW92ZSIsInRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdCIsInRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0IiwiaXNDb250ZW50RWRpdGFibGUiLCJvblRvdWNoTW92ZSIsInRhcmdldFRvdWNoIiwiY2hhbmdlZFRvdWNoZXMiLCJwcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciIsInRvdWNoUmVsZWFzZU9uRWRnZXMiLCJwcmV2aW91c1giLCJwcmV2aW91c1kiLCJkaWZmWCIsImRpZmZZIiwic3FydCIsInRvdWNoQW5nbGUiLCJhdGFuMiIsInByZXZlbnRUb3VjaE1vdmVGcm9tUG9pbnRlck1vdmUiLCJjYW5jZWxhYmxlIiwidG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uIiwibmVzdGVkIiwic3RvcFByb3BhZ2F0aW9uIiwidG91Y2hlc0RpZmYiLCJvbmVXYXlNb3ZlbWVudCIsInRvdWNoUmF0aW8iLCJwcmV2VG91Y2hlc0RpcmVjdGlvbiIsInRvdWNoZXNEaXJlY3Rpb24iLCJpc0xvb3AiLCJhbGxvd0xvb3BGaXgiLCJldnQiLCJidWJibGVzIiwiZGV0YWlsIiwiYnlTd2lwZXJUb3VjaE1vdmUiLCJkaXNwYXRjaEV2ZW50IiwiYWxsb3dNb21lbnR1bUJvdW5jZSIsImxvb3BGaXhlZCIsIl9sb29wU3dhcFJlc2V0IiwibG9vcFN3YXBSZXNldCIsImRpc2FibGVQYXJlbnRTd2lwZXIiLCJyZXNpc3RhbmNlUmF0aW8iLCJyZXNpc3RhbmNlIiwiZm9sbG93RmluZ2VyIiwib25Ub3VjaEVuZCIsImlzVG91Y2hFdmVudCIsInByb2NlZWQiLCJ0b3VjaEVuZFRpbWUiLCJ0aW1lRGlmZiIsInBhdGhUcmVlIiwibGFzdENsaWNrVGltZSIsImN1cnJlbnRQb3MiLCJzd2lwZVRvTGFzdCIsInN0b3BJbmRleCIsImluY3JlbWVudDIiLCJyZXdpbmRGaXJzdEluZGV4IiwicmV3aW5kTGFzdEluZGV4IiwicmF0aW8iLCJsb25nU3dpcGVzTXMiLCJsb25nU3dpcGVzIiwibG9uZ1N3aXBlc1JhdGlvIiwic2hvcnRTd2lwZXMiLCJpc05hdkJ1dHRvblRhcmdldCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJvblJlc2l6ZSIsInNldEJyZWFrcG9pbnQiLCJpc1ZpcnR1YWxMb29wIiwiYXV0b3BsYXkiLCJydW5uaW5nIiwicGF1c2VkIiwicmVzaXplVGltZW91dCIsInJlc3VtZSIsIm9uQ2xpY2siLCJwcmV2ZW50Q2xpY2tzIiwicHJldmVudENsaWNrc1Byb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwib25TY3JvbGwiLCJvbkxvYWQiLCJvbkRvY3VtZW50VG91Y2hTdGFydCIsImRvY3VtZW50VG91Y2hIYW5kbGVyUHJvY2VlZGVkIiwidG91Y2hBY3Rpb24iLCJjYXB0dXJlIiwiZG9tTWV0aG9kIiwic3dpcGVyTWV0aG9kIiwicGFzc2l2ZSIsInVwZGF0ZU9uV2luZG93UmVzaXplIiwiYXR0YWNoRXZlbnRzIiwiYmluZCIsImRldGFjaEV2ZW50cyIsImV2ZW50cyQxIiwiaXNHcmlkRW5hYmxlZCIsImJyZWFrcG9pbnRzMiIsImJyZWFrcG9pbnRzQmFzZSIsImJyZWFrcG9pbnRDb250YWluZXIiLCJicmVha3BvaW50IiwiZ2V0QnJlYWtwb2ludCIsImN1cnJlbnRCcmVha3BvaW50IiwiYnJlYWtwb2ludE9ubHlQYXJhbXMiLCJicmVha3BvaW50UGFyYW1zIiwib3JpZ2luYWxQYXJhbXMiLCJ3YXNNdWx0aVJvdyIsImlzTXVsdGlSb3ciLCJ3YXNHcmFiQ3Vyc29yIiwiaXNHcmFiQ3Vyc29yIiwid2FzRW5hYmxlZCIsImVtaXRDb250YWluZXJDbGFzc2VzIiwid2FzTW9kdWxlRW5hYmxlZCIsImlzTW9kdWxlRW5hYmxlZCIsImRpc2FibGUiLCJlbmFibGUiLCJkaXJlY3Rpb25DaGFuZ2VkIiwibmVlZHNSZUxvb3AiLCJ3YXNMb29wIiwiY2hhbmdlRGlyZWN0aW9uIiwiaXNFbmFibGVkIiwiaGFzTG9vcCIsImNvbnRhaW5lckVsIiwiY3VycmVudEhlaWdodCIsImlubmVySGVpZ2h0IiwicG9pbnRzIiwicG9pbnQiLCJtaW5SYXRpbyIsInN1YnN0ciIsInZhbHVlIiwic29ydCIsImIiLCJwcmVwYXJlQ2xhc3NlcyIsInByZWZpeCIsInJlc3VsdENsYXNzZXMiLCJpdGVtIiwiY2xhc3NOYW1lcyIsImFkZENsYXNzZXMiLCJzdWZmaXhlcyIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc2VzIiwid2FzTG9ja2VkIiwibGFzdFNsaWRlUmlnaHRFZGdlIiwiY2hlY2tPdmVyZmxvdyQxIiwiZGVmYXVsdHMiLCJzd2lwZXJFbGVtZW50Tm9kZU5hbWUiLCJjcmVhdGVFbGVtZW50cyIsImV2ZW50c1ByZWZpeCIsInVybCIsInVuaXF1ZU5hdkVsZW1lbnRzIiwicGFzc2l2ZUxpc3RlbmVycyIsIndyYXBwZXJDbGFzcyIsIl9lbWl0Q2xhc3NlcyIsIm1vZHVsZUV4dGVuZFBhcmFtcyIsImFsbE1vZHVsZXNQYXJhbXMiLCJtb2R1bGVQYXJhbU5hbWUiLCJtb2R1bGVQYXJhbXMiLCJhdXRvIiwicHJvdG90eXBlcyIsImV4dGVuZGVkRGVmYXVsdHMiLCJfU3dpcGVyIiwic3dpcGVycyIsIm5ld1BhcmFtcyIsIm1vZHVsZXMiLCJfX21vZHVsZXNfXyIsIm1vZCIsInN3aXBlclBhcmFtcyIsInBhc3NlZFBhcmFtcyIsImV2ZW50TmFtZSIsInZlbG9jaXR5IiwidHJ1bmMiLCJjbGlja1RpbWVvdXQiLCJ2ZWxvY2l0aWVzIiwiaW1hZ2VzVG9Mb2FkIiwiaW1hZ2VzTG9hZGVkIiwicHJvcGVydHkiLCJzZXRQcm9ncmVzcyIsImNscyIsImdldFNsaWRlQ2xhc3NlcyIsInVwZGF0ZXMiLCJ2aWV3IiwiZXhhY3QiLCJzcHYiLCJicmVha0xvb3AiLCJzbGlkZUluVmlldyIsImNvbXBsZXRlIiwidHJhbnNsYXRlVmFsdWUiLCJ0cmFuc2xhdGVkIiwibmV3RGlyZWN0aW9uIiwibmVlZFVwZGF0ZSIsImN1cnJlbnREaXJlY3Rpb24iLCJjaGFuZ2VMYW5ndWFnZURpcmVjdGlvbiIsIm1vdW50IiwibW91bnRlZCIsInBhcmVudE5vZGUiLCJ0b1VwcGVyQ2FzZSIsImdldFdyYXBwZXJTZWxlY3RvciIsImdldFdyYXBwZXIiLCJyZXMiLCJzbGlkZVNsb3RzIiwibGF6eUVsZW1lbnRzIiwiZGVsZXRlSW5zdGFuY2UiLCJjbGVhblN0eWxlcyIsImV4dGVuZERlZmF1bHRzIiwibmV3RGVmYXVsdHMiLCJpbnN0YWxsTW9kdWxlIiwidXNlIiwibW9kdWxlMiIsIm0iLCJwcm90b3R5cGVHcm91cCIsInByb3RvTWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxRQUFBLENBQUFELHFCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLHFCQUFBOzs7QUNZQSxTQUFTUSxTQUFTQyxHQUFBLEVBQUs7RUFDckIsT0FBT0EsR0FBQSxLQUFRLFFBQVEsT0FBT0EsR0FBQSxLQUFRLFlBQVksaUJBQWlCQSxHQUFBLElBQU9BLEdBQUEsQ0FBSUMsV0FBQSxLQUFnQkMsTUFBQTtBQUNoRztBQUNBLFNB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QUFBLEtBQW1CLE9BQU87TUFDNUIsSUFBSXB4QixNQUFBLENBQU9uRCxFQUFBLElBQU0sT0FBT21ELE1BQUEsQ0FBT25ELEVBQUEsS0FBTyxVQUFVO1FBQzlDbUQsTUFBQSxDQUFPbkQsRUFBQSxDQUFHbUQsTUFBQSxHQUFTO01BQ3JCO01BQ0ExRCxXQUFBLENBQVkwRCxNQUFNO0lBQ3BCO0lBQ0FBLE1BQUEsQ0FBT3lKLFNBQUEsR0FBWTtJQUNuQixPQUFPO0VBQ1Q7RUFDQSxPQUFPNm5CLGVBQWVDLFdBQUEsRUFBYTtJQUNqQ3p5QixPQUFBLENBQU80dkIsZ0JBQUEsRUFBa0I2QyxXQUFXO0VBQ3RDO0VBQ0EsV0FBVzdDLGlCQUFBLEVBQW1CO0lBQzVCLE9BQU9BLGdCQUFBO0VBQ1Q7RUFDQSxXQUFXZixTQUFBLEVBQVc7SUFDcEIsT0FBT0EsUUFBQTtFQUNUO0VBQ0EsT0FBTzZELGNBQWN4QyxHQUFBLEVBQUs7SUFDeEIsSUFBSSxDQUFDTCxPQUFBLENBQU9wd0IsU0FBQSxDQUFVd3dCLFdBQUEsRUFBYUosT0FBQSxDQUFPcHdCLFNBQUEsQ0FBVXd3QixXQUFBLEdBQWMsRUFBQztJQUNuRSxNQUFNRCxPQUFBLEdBQVVILE9BQUEsQ0FBT3B3QixTQUFBLENBQVV3d0IsV0FBQTtJQUNqQyxJQUFJLE9BQU9DLEdBQUEsS0FBUSxjQUFjRixPQUFBLENBQVF4MkIsT0FBQSxDQUFRMDJCLEdBQUcsSUFBSSxHQUFHO01BQ3pERixPQUFBLENBQVEzc0IsSUFBQSxDQUFLNnNCLEdBQUc7SUFDbEI7RUFDRjtFQUNBLE9BQU95QyxJQUFJQyxPQUFBLEVBQVE7SUFDakIsSUFBSWx1QixLQUFBLENBQU1DLE9BQUEsQ0FBUWl1QixPQUFNLEdBQUc7TUFDekJBLE9BQUEsQ0FBT241QixPQUFBLENBQVFvNUIsQ0FBQSxJQUFLaEQsT0FBQSxDQUFPNkMsYUFBQSxDQUFjRyxDQUFDLENBQUM7TUFDM0MsT0FBT2hELE9BQUE7SUFDVDtJQUNBQSxPQUFBLENBQU82QyxhQUFBLENBQWNFLE9BQU07SUFDM0IsT0FBTy9DLE9BQUE7RUFDVDtBQUNGO0FBQ0E3MkIsTUFBQSxDQUFPSyxJQUFBLENBQUtzMkIsVUFBVSxFQUFFbDJCLE9BQUEsQ0FBUXE1QixjQUFBLElBQWtCO0VBQ2hEOTVCLE1BQUEsQ0FBT0ssSUFBQSxDQUFLczJCLFVBQUEsQ0FBV21ELGNBQWMsQ0FBQyxFQUFFcjVCLE9BQUEsQ0FBUXM1QixXQUFBLElBQWU7SUFDN0R4NkIsTUFBQSxDQUFPa0gsU0FBQSxDQUFVc3pCLFdBQVcsSUFBSXBELFVBQUEsQ0FBV21ELGNBQWMsRUFBRUMsV0FBVztFQUN4RSxDQUFDO0FBQ0gsQ0FBQztBQUNEeDZCLE1BQUEsQ0FBT282QixHQUFBLENBQUksQ0FBQ3RvQixNQUFBLEVBQVFzQixRQUFRLENBQUM7OztBSDF4SDdCLElBQU9sVCxxQkFBQSxHQUFRRixNQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==