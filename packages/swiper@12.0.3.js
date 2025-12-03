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

// .beyond/uimport/temp/swiper.12.0.3.js
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

// .beyond/uimport/temp/swiper.12.0.3.js
var swiper_12_0_3_default = Swiper;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3N3aXBlci4xMi4wLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zd2lwZXItY29yZS5tanMiXSwibmFtZXMiOlsic3dpcGVyXzEyXzBfM19leHBvcnRzIiwiX19leHBvcnQiLCJTd2lwZXIiLCJkZWZhdWx0Iiwic3dpcGVyXzEyXzBfM19kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImlzT2JqZWN0Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJleHRlbmQiLCJ0YXJnZXQiLCJzcmMiLCJub0V4dGVuZCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJpbmRleE9mIiwiZm9yRWFjaCIsImxlbmd0aCIsInNzckRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJub2RlTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJzdHlsZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudE5TIiwiaW1wb3J0Tm9kZSIsImxvY2F0aW9uIiwiaGFzaCIsImhvc3QiLCJob3N0bmFtZSIsImhyZWYiLCJvcmlnaW4iLCJwYXRobmFtZSIsInByb3RvY29sIiwic2VhcmNoIiwiZ2V0RG9jdW1lbnQiLCJkb2MiLCJkb2N1bWVudCIsInNzcldpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJnbyIsImJhY2siLCJDdXN0b21FdmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiSW1hZ2UiLCJEYXRlIiwic2NyZWVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1hdGNoTWVkaWEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJnZXRXaW5kb3ciLCJ3aW4iLCJ3aW5kb3ciLCJjbGFzc2VzVG9Ub2tlbnMiLCJjbGFzc2VzMiIsInRyaW0iLCJzcGxpdCIsImMiLCJkZWxldGVQcm9wcyIsIm9iamVjdCIsImUiLCJuZXh0VGljayIsImRlbGF5Iiwibm93IiwiZ2V0Q29tcHV0ZWRTdHlsZTIiLCJlbCIsIndpbmRvdzIiLCJjdXJyZW50U3R5bGUiLCJnZXRUcmFuc2xhdGUiLCJheGlzIiwibWF0cml4IiwiY3VyVHJhbnNmb3JtIiwidHJhbnNmb3JtTWF0cml4IiwiY3VyU3R5bGUiLCJXZWJLaXRDU1NNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtYXAiLCJhIiwicmVwbGFjZSIsImpvaW4iLCJNb3pUcmFuc2Zvcm0iLCJPVHJhbnNmb3JtIiwiTXNUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRvU3RyaW5nIiwibTQxIiwicGFyc2VGbG9hdCIsIm00MiIsImlzT2JqZWN0MiIsIm8iLCJwcm90b3R5cGUiLCJjYWxsIiwic2xpY2UiLCJpc05vZGUiLCJub2RlIiwiSFRNTEVsZW1lbnQiLCJub2RlVHlwZSIsImV4dGVuZDIiLCJhcmdzIiwidG8iLCJpIiwibmV4dFNvdXJjZSIsImtleXNBcnJheSIsIm5leHRJbmRleCIsImxlbiIsIm5leHRLZXkiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsIl9fc3dpcGVyX18iLCJzZXRDU1NQcm9wZXJ0eSIsInZhck5hbWUiLCJ2YXJWYWx1ZSIsInNldFByb3BlcnR5IiwiYW5pbWF0ZUNTU01vZGVTY3JvbGwiLCJzd2lwZXIiLCJ0YXJnZXRQb3NpdGlvbiIsInNpZGUiLCJzdGFydFBvc2l0aW9uIiwidHJhbnNsYXRlIiwic3RhcnRUaW1lIiwidGltZSIsImR1cmF0aW9uIiwicGFyYW1zIiwic3BlZWQiLCJ3cmFwcGVyRWwiLCJzY3JvbGxTbmFwVHlwZSIsImNzc01vZGVGcmFtZUlEIiwiZGlyIiwiaXNPdXRPZkJvdW5kIiwiY3VycmVudCIsImFuaW1hdGUiLCJnZXRUaW1lIiwicHJvZ3Jlc3MiLCJNYXRoIiwibWF4IiwibWluIiwiZWFzZVByb2dyZXNzIiwiY29zIiwiUEkiLCJjdXJyZW50UG9zaXRpb24iLCJzY3JvbGxUbyIsIm92ZXJmbG93IiwiZ2V0U2xpZGVUcmFuc2Zvcm1FbCIsInNsaWRlRWwiLCJzaGFkb3dSb290IiwiZWxlbWVudENoaWxkcmVuIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiSFRNTFNsb3RFbGVtZW50IiwicHVzaCIsImFzc2lnbmVkRWxlbWVudHMiLCJtYXRjaGVzIiwiZWxlbWVudElzQ2hpbGRPZlNsb3QiLCJzbG90IiwiZWxlbWVudHNRdWV1ZSIsImVsZW1lbnRUb0NoZWNrIiwic2hpZnQiLCJlbGVtZW50SXNDaGlsZE9mIiwicGFyZW50IiwiaXNDaGlsZCIsImNvbnRhaW5zIiwiaW5jbHVkZXMiLCJzaG93V2FybmluZyIsInRleHQiLCJjb25zb2xlIiwid2FybiIsImVyciIsInRhZyIsImNsYXNzTGlzdCIsImFkZCIsIkFycmF5IiwiaXNBcnJheSIsImVsZW1lbnRPZmZzZXQiLCJkb2N1bWVudDIiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsWSIsInNjcm9sbExlZnQiLCJzY3JvbGxYIiwidG9wIiwibGVmdCIsImVsZW1lbnRQcmV2QWxsIiwicHJldkVscyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwcmV2IiwiZWxlbWVudE5leHRBbGwiLCJuZXh0RWxzIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibmV4dCIsImVsZW1lbnRTdHlsZSIsInByb3AiLCJlbGVtZW50SW5kZXgiLCJjaGlsZCIsInByZXZpb3VzU2libGluZyIsImVsZW1lbnRQYXJlbnRzIiwicGFyZW50cyIsInBhcmVudEVsZW1lbnQiLCJlbGVtZW50VHJhbnNpdGlvbkVuZCIsImZpcmVDYWxsQmFjayIsImVsZW1lbnRPdXRlclNpemUiLCJzaXplIiwiaW5jbHVkZU1hcmdpbnMiLCJvZmZzZXRXaWR0aCIsIm1ha2VFbGVtZW50c0FycmF5IiwiZ2V0Um90YXRlRml4IiwidiIsImFicyIsImJyb3dzZXIiLCJuZWVkM2RGaXgiLCJzZXRJbm5lckhUTUwiLCJodG1sIiwidHJ1c3RlZFR5cGVzIiwiaW5uZXJIVE1MIiwiY3JlYXRlUG9saWN5IiwiY3JlYXRlSFRNTCIsInMiLCJzdXBwb3J0IiwiY2FsY1N1cHBvcnQiLCJzbW9vdGhTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJ0b3VjaCIsIkRvY3VtZW50VG91Y2giLCJnZXRTdXBwb3J0IiwiZGV2aWNlQ2FjaGVkIiwiY2FsY0RldmljZSIsInN1cHBvcnQyIiwicGxhdGZvcm0iLCJ1YSIsImRldmljZSIsImlvcyIsImFuZHJvaWQiLCJzY3JlZW5XaWR0aCIsIndpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaGVpZ2h0IiwibWF0Y2giLCJpcGFkIiwiaXBvZCIsImlwaG9uZSIsIndpbmRvd3MiLCJtYWNvcyIsImlQYWRTY3JlZW5zIiwib3MiLCJnZXREZXZpY2UiLCJvdmVycmlkZXMiLCJjYWxjQnJvd3NlciIsIm5lZWRQZXJzcGVjdGl2ZUZpeCIsImlzU2FmYXJpIiwidG9Mb3dlckNhc2UiLCJTdHJpbmciLCJtYWpvciIsIm1pbm9yIiwibnVtIiwiTnVtYmVyIiwiaXNXZWJWaWV3IiwidGVzdCIsImlzU2FmYXJpQnJvd3NlciIsImdldEJyb3dzZXIiLCJSZXNpemUiLCJvbiIsImVtaXQiLCJvYnNlcnZlciIsImFuaW1hdGlvbkZyYW1lIiwicmVzaXplSGFuZGxlciIsImRlc3Ryb3llZCIsImluaXRpYWxpemVkIiwiY3JlYXRlT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsImNvbnRlbnRCb3hTaXplIiwiY29udGVudFJlY3QiLCJpbmxpbmVTaXplIiwiYmxvY2tTaXplIiwib2JzZXJ2ZSIsInJlbW92ZU9ic2VydmVyIiwidW5vYnNlcnZlIiwib3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyIiwicmVzaXplT2JzZXJ2ZXIiLCJPYnNlcnZlciIsImV4dGVuZFBhcmFtcyIsIm9ic2VydmVycyIsImF0dGFjaCIsIm9wdGlvbnMiLCJPYnNlcnZlckZ1bmMiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2Via2l0TXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIl9fcHJldmVudE9ic2VydmVyX18iLCJvYnNlcnZlclVwZGF0ZSIsIm9ic2VydmVyVXBkYXRlMiIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJpc0VsZW1lbnQiLCJjaGFyYWN0ZXJEYXRhIiwiaW5pdCIsIm9ic2VydmVQYXJlbnRzIiwiY29udGFpbmVyUGFyZW50cyIsImhvc3RFbCIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwiZGVzdHJveSIsImRpc2Nvbm5lY3QiLCJzcGxpY2UiLCJldmVudHNFbWl0dGVyIiwiZXZlbnRzMiIsImhhbmRsZXIiLCJwcmlvcml0eSIsInNlbGYiLCJldmVudHNMaXN0ZW5lcnMiLCJtZXRob2QiLCJldmVudCIsIm9uY2UiLCJvbmNlSGFuZGxlciIsIm9mZiIsIl9fZW1pdHRlclByb3h5IiwiYXBwbHkiLCJvbkFueSIsImV2ZW50c0FueUxpc3RlbmVycyIsIm9mZkFueSIsImluZGV4IiwiZXZlbnRIYW5kbGVyIiwiZGF0YSIsImNvbnRleHQiLCJldmVudHMiLCJ1bnNoaWZ0IiwiZXZlbnRzQXJyYXkiLCJ1cGRhdGVTaXplIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJpc0hvcml6b250YWwiLCJpc1ZlcnRpY2FsIiwicGFyc2VJbnQiLCJpc05hTiIsImFzc2lnbiIsInVwZGF0ZVNsaWRlcyIsImdldERpcmVjdGlvblByb3BlcnR5VmFsdWUiLCJsYWJlbCIsImdldERpcmVjdGlvbkxhYmVsIiwic2xpZGVzRWwiLCJydGxUcmFuc2xhdGUiLCJydGwiLCJ3cm9uZ1JUTCIsImlzVmlydHVhbCIsInZpcnR1YWwiLCJlbmFibGVkIiwicHJldmlvdXNTbGlkZXNMZW5ndGgiLCJzbGlkZXMiLCJzbGlkZUNsYXNzIiwic2xpZGVzTGVuZ3RoIiwic25hcEdyaWQiLCJzbGlkZXNHcmlkIiwic2xpZGVzU2l6ZXNHcmlkIiwib2Zmc2V0QmVmb3JlIiwic2xpZGVzT2Zmc2V0QmVmb3JlIiwib2Zmc2V0QWZ0ZXIiLCJzbGlkZXNPZmZzZXRBZnRlciIsInByZXZpb3VzU25hcEdyaWRMZW5ndGgiLCJwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGgiLCJzd2lwZXJTaXplIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVQb3NpdGlvbiIsInByZXZTbGlkZVNpemUiLCJ2aXJ0dWFsU2l6ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImNlbnRlcmVkU2xpZGVzIiwiY3NzTW9kZSIsImdyaWRFbmFibGVkIiwiZ3JpZCIsInJvd3MiLCJpbml0U2xpZGVzIiwidW5zZXRTbGlkZXMiLCJzbGlkZVNpemUiLCJzaG91bGRSZXNldFNsaWRlU2l6ZSIsInNsaWRlc1BlclZpZXciLCJicmVha3BvaW50cyIsInNsaWRlMiIsInVwZGF0ZVNsaWRlIiwic2xpZGVzUGVyVmlld0F1dG9TbGlkZVNpemUiLCJyb3VuZExlbmd0aHMiLCJmbG9vciIsInNsaWRlU3R5bGVzIiwiY3VycmVudFRyYW5zZm9ybSIsImN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJveFNpemluZyIsInN3aXBlclNsaWRlU2l6ZSIsInNsaWRlc1Blckdyb3VwIiwic2xpZGVzUGVyR3JvdXBTa2lwIiwiZWZmZWN0Iiwic2V0V3JhcHBlclNpemUiLCJ1cGRhdGVXcmFwcGVyU2l6ZSIsIm5ld1NsaWRlc0dyaWQiLCJzbGlkZXNHcmlkSXRlbSIsImxvb3AiLCJncm91cHMiLCJjZWlsIiwic2xpZGVzQmVmb3JlIiwic2xpZGVzQWZ0ZXIiLCJncm91cFNpemUiLCJfIiwic2xpZGVJbmRleCIsImNlbnRlcmVkU2xpZGVzQm91bmRzIiwiYWxsU2xpZGVzU2l6ZSIsInNsaWRlU2l6ZVZhbHVlIiwibWF4U25hcCIsInNuYXAiLCJjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMiLCJvZmZzZXRTaXplIiwiYWxsU2xpZGVzT2Zmc2V0Iiwic25hcEluZGV4IiwiYWRkVG9TbmFwR3JpZCIsImFkZFRvU2xpZGVzR3JpZCIsIndhdGNoT3ZlcmZsb3ciLCJjaGVja092ZXJmbG93Iiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInVwZGF0ZVNsaWRlc09mZnNldCIsImJhY2tGYWNlSGlkZGVuQ2xhc3MiLCJjb250YWluZXJNb2RpZmllckNsYXNzIiwiaGFzQ2xhc3NCYWNrZmFjZUNsYXNzQWRkZWQiLCJtYXhCYWNrZmFjZUhpZGRlblNsaWRlcyIsInJlbW92ZSIsInVwZGF0ZUF1dG9IZWlnaHQiLCJhY3RpdmVTbGlkZXMiLCJzZXRUcmFuc2l0aW9uIiwiZ2V0U2xpZGVCeUluZGV4IiwiZ2V0U2xpZGVJbmRleEJ5RGF0YSIsInZpc2libGVTbGlkZXMiLCJhY3RpdmVJbmRleCIsIm9mZnNldEhlaWdodCIsIm1pbnVzT2Zmc2V0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInN3aXBlclNsaWRlT2Zmc2V0IiwiY3NzT3ZlcmZsb3dBZGp1c3RtZW50IiwidG9nZ2xlU2xpZGVDbGFzc2VzJDEiLCJjb25kaXRpb24iLCJjbGFzc05hbWUiLCJ1cGRhdGVTbGlkZXNQcm9ncmVzcyIsInRyYW5zbGF0ZTIiLCJvZmZzZXRDZW50ZXIiLCJ2aXNpYmxlU2xpZGVzSW5kZXhlcyIsInNsaWRlT2Zmc2V0Iiwic2xpZGVQcm9ncmVzcyIsIm1pblRyYW5zbGF0ZSIsIm9yaWdpbmFsU2xpZGVQcm9ncmVzcyIsInNsaWRlQmVmb3JlIiwic2xpZGVBZnRlciIsImlzRnVsbHlWaXNpYmxlIiwiaXNWaXNpYmxlIiwic2xpZGVWaXNpYmxlQ2xhc3MiLCJzbGlkZUZ1bGx5VmlzaWJsZUNsYXNzIiwib3JpZ2luYWxQcm9ncmVzcyIsInVwZGF0ZVByb2dyZXNzIiwibXVsdGlwbGllciIsInRyYW5zbGF0ZXNEaWZmIiwibWF4VHJhbnNsYXRlIiwiaXNCZWdpbm5pbmciLCJpc0VuZCIsInByb2dyZXNzTG9vcCIsIndhc0JlZ2lubmluZyIsIndhc0VuZCIsImlzQmVnaW5uaW5nUm91bmRlZCIsImlzRW5kUm91bmRlZCIsImZpcnN0U2xpZGVJbmRleCIsImxhc3RTbGlkZUluZGV4IiwiZmlyc3RTbGlkZVRyYW5zbGF0ZSIsImxhc3RTbGlkZVRyYW5zbGF0ZSIsInRyYW5zbGF0ZU1heCIsInRyYW5zbGF0ZUFicyIsImF1dG9IZWlnaHQiLCJ0b2dnbGVTbGlkZUNsYXNzZXMiLCJ1cGRhdGVTbGlkZXNDbGFzc2VzIiwiZ2V0RmlsdGVyZWRTbGlkZSIsImFjdGl2ZVNsaWRlIiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwiZmluZCIsImNvbHVtbiIsInNsaWRlQWN0aXZlQ2xhc3MiLCJzbGlkZU5leHRDbGFzcyIsInNsaWRlUHJldkNsYXNzIiwiZW1pdFNsaWRlc0NsYXNzZXMiLCJwcm9jZXNzTGF6eVByZWxvYWRlciIsImltYWdlRWwiLCJzbGlkZVNlbGVjdG9yIiwiY2xvc2VzdCIsImxhenlFbCIsImxhenlQcmVsb2FkZXJDbGFzcyIsInVubGF6eSIsInJlbW92ZUF0dHJpYnV0ZSIsInByZWxvYWQiLCJhbW91bnQiLCJsYXp5UHJlbG9hZFByZXZOZXh0Iiwic2xpZGVzUGVyVmlld0R5bmFtaWMiLCJhY3RpdmVDb2x1bW4iLCJwcmVsb2FkQ29sdW1ucyIsImZyb20iLCJzbGlkZUluZGV4TGFzdEluVmlldyIsInJld2luZCIsInJlYWxJbmRleCIsImdldEFjdGl2ZUluZGV4QnlUcmFuc2xhdGUiLCJub3JtYWxpemVTbGlkZUluZGV4IiwidXBkYXRlQWN0aXZlSW5kZXgiLCJuZXdBY3RpdmVJbmRleCIsInByZXZpb3VzSW5kZXgiLCJwcmV2aW91c1JlYWxJbmRleCIsInByZXZpb3VzU25hcEluZGV4IiwiZ2V0VmlydHVhbFJlYWxJbmRleCIsImFJbmRleCIsInJlYWxJbmRleDIiLCJza2lwIiwiZmlyc3RTbGlkZUluQ29sdW1uIiwiYWN0aXZlU2xpZGVJbmRleCIsImdldEF0dHJpYnV0ZSIsInJ1bkNhbGxiYWNrc09uSW5pdCIsInVwZGF0ZUNsaWNrZWRTbGlkZSIsInBhdGgiLCJwYXRoRWwiLCJzbGlkZUZvdW5kIiwiY2xpY2tlZFNsaWRlIiwiY2xpY2tlZEluZGV4Iiwic2xpZGVUb0NsaWNrZWRTbGlkZSIsInVwZGF0ZSIsImdldFN3aXBlclRyYW5zbGF0ZSIsInZpcnR1YWxUcmFuc2xhdGUiLCJjdXJyZW50VHJhbnNsYXRlIiwic2V0VHJhbnNsYXRlIiwiYnlDb250cm9sbGVyIiwieCIsInkiLCJ6IiwicHJldmlvdXNUcmFuc2xhdGUiLCJuZXdQcm9ncmVzcyIsInRyYW5zbGF0ZVRvIiwicnVuQ2FsbGJhY2tzIiwidHJhbnNsYXRlQm91bmRzIiwiaW50ZXJuYWwiLCJhbmltYXRpbmciLCJwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24iLCJtaW5UcmFuc2xhdGUyIiwibWF4VHJhbnNsYXRlMiIsIm5ld1RyYW5zbGF0ZSIsImlzSCIsImJlaGF2aW9yIiwib25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbkVuZDIiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJ0cmFuc2l0aW9uRW1pdCIsImRpcmVjdGlvbiIsInN0ZXAiLCJ0cmFuc2l0aW9uU3RhcnQiLCJ0cmFuc2l0aW9uRW5kIiwidHJhbnNpdGlvbiIsInNsaWRlVG8iLCJpbml0aWFsIiwibm9ybWFsaXplZFRyYW5zbGF0ZSIsIm5vcm1hbGl6ZWRHcmlkIiwibm9ybWFsaXplZEdyaWROZXh0IiwiYWxsb3dTbGlkZU5leHQiLCJhbGxvd1NsaWRlUHJldiIsImlzSW5pdGlhbFZpcnR1YWwiLCJ0IiwiX2ltbWVkaWF0ZVZpcnR1YWwiLCJfY3NzTW9kZVZpcnR1YWxJbml0aWFsU2V0IiwiaW5pdGlhbFNsaWRlIiwiYnJvd3NlcjIiLCJvblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCIsInNsaWRlVG9Mb29wIiwiaW5kZXhBc051bWJlciIsIm5ld0luZGV4IiwidGFyZ2V0U2xpZGVJbmRleCIsImNvbHMiLCJib3RoRGlyZWN0aW9ucyIsIm5lZWRMb29wRml4IiwibG9vcEZpeCIsInNsaWRlUmVhbEluZGV4Iiwic2xpZGVOZXh0IiwicGVyR3JvdXAiLCJzbGlkZXNQZXJHcm91cEF1dG8iLCJpbmNyZW1lbnQiLCJsb29wUHJldmVudHNTbGlkaW5nIiwiX2NsaWVudExlZnQiLCJzbGlkZVByZXYiLCJub3JtYWxpemUiLCJ2YWwiLCJub3JtYWxpemVkU25hcEdyaWQiLCJpc0ZyZWVNb2RlIiwiZnJlZU1vZGUiLCJwcmV2U25hcCIsInByZXZTbmFwSW5kZXgiLCJwcmV2SW5kZXgiLCJsYXN0SW5kZXgiLCJzbGlkZVJlc2V0Iiwic2xpZGVUb0Nsb3Nlc3QiLCJ0aHJlc2hvbGQiLCJjdXJyZW50U25hcCIsIm5leHRTbmFwIiwic2xpZGVUb0luZGV4IiwiZ2V0U2xpZGVJbmRleFdoZW5HcmlkIiwiaXNHcmlkIiwiZ2V0U2xpZGVJbmRleCIsInNsaWRlIiwibG9vcENyZWF0ZSIsImNsZWFyQmxhbmtTbGlkZXMiLCJzbGlkZUJsYW5rQ2xhc3MiLCJyZWNhbGNTbGlkZXMiLCJsb29wQWRkQmxhbmtTbGlkZXMiLCJzaG91bGRGaWxsR3JvdXAiLCJzaG91bGRGaWxsR3JpZCIsImFkZEJsYW5rU2xpZGVzIiwiYW1vdW50T2ZTbGlkZXMiLCJhcHBlbmQiLCJzbGlkZXNUb0FkZCIsInNsaWRlVG8yIiwic2V0VHJhbnNsYXRlMiIsImJ5TW91c2V3aGVlbCIsImxvb3BlZFNsaWRlcyIsImxvb3BBZGRpdGlvbmFsU2xpZGVzIiwiZmlsbCIsInByZXBlbmRTbGlkZXNJbmRleGVzIiwiYXBwZW5kU2xpZGVzSW5kZXhlcyIsImlzSW5pdGlhbE92ZXJmbG93IiwiaXNOZXh0IiwiaXNQcmV2Iiwic2xpZGVzUHJlcGVuZGVkIiwic2xpZGVzQXBwZW5kZWQiLCJhY3RpdmVDb2xJbmRleCIsImFjdGl2ZUNvbEluZGV4V2l0aFNoaWZ0IiwiY29sSW5kZXhUb1ByZXBlbmQiLCJpMiIsInN3aXBlckxvb3BNb3ZlRE9NIiwicHJlcGVuZCIsImN1cnJlbnRTbGlkZVRyYW5zbGF0ZSIsIm5ld1NsaWRlVHJhbnNsYXRlIiwiZGlmZiIsInRvdWNoRXZlbnRzRGF0YSIsInN0YXJ0VHJhbnNsYXRlIiwiY29udHJvbGxlciIsImNvbnRyb2wiLCJsb29wUGFyYW1zIiwibG9vcERlc3Ryb3kiLCJuZXdTbGlkZXNPcmRlciIsInN3aXBlclNsaWRlSW5kZXgiLCJzZXRHcmFiQ3Vyc29yIiwibW92aW5nIiwic2ltdWxhdGVUb3VjaCIsImlzTG9ja2VkIiwidG91Y2hFdmVudHNUYXJnZXQiLCJjdXJzb3IiLCJ1bnNldEdyYWJDdXJzb3IiLCJncmFiQ3Vyc29yIiwiY2xvc2VzdEVsZW1lbnQiLCJiYXNlIiwiX19jbG9zZXN0RnJvbSIsImFzc2lnbmVkU2xvdCIsImZvdW5kIiwiZ2V0Um9vdE5vZGUiLCJwcmV2ZW50RWRnZVN3aXBlIiwic3RhcnRYIiwiZWRnZVN3aXBlRGV0ZWN0aW9uIiwiZWRnZVN3aXBlVGhyZXNob2xkIiwiaW5uZXJXaWR0aCIsInByZXZlbnREZWZhdWx0Iiwib25Ub3VjaFN0YXJ0Iiwib3JpZ2luYWxFdmVudCIsInR5cGUiLCJwb2ludGVySWQiLCJ0YXJnZXRUb3VjaGVzIiwidG91Y2hJZCIsImlkZW50aWZpZXIiLCJwYWdlWCIsInRvdWNoZXMiLCJwb2ludGVyVHlwZSIsInRhcmdldEVsIiwid2hpY2giLCJidXR0b24iLCJpc1RvdWNoZWQiLCJpc01vdmVkIiwic3dpcGluZ0NsYXNzSGFzVmFsdWUiLCJub1N3aXBpbmdDbGFzcyIsImV2ZW50UGF0aCIsImNvbXBvc2VkUGF0aCIsIm5vU3dpcGluZ1NlbGVjdG9yIiwiaXNUYXJnZXRTaGFkb3ciLCJub1N3aXBpbmciLCJhbGxvd0NsaWNrIiwic3dpcGVIYW5kbGVyIiwiY3VycmVudFgiLCJjdXJyZW50WSIsInBhZ2VZIiwic3RhcnRZIiwiYWxsb3dUb3VjaENhbGxiYWNrcyIsImlzU2Nyb2xsaW5nIiwic3RhcnRNb3ZpbmciLCJ0b3VjaFN0YXJ0VGltZSIsInN3aXBlRGlyZWN0aW9uIiwiYWxsb3dUaHJlc2hvbGRNb3ZlIiwiZm9jdXNhYmxlRWxlbWVudHMiLCJzaG91bGRQcmV2ZW50RGVmYXVsdCIsImFsbG93VG91Y2hNb3ZlIiwidG91Y2hTdGFydFByZXZlbnREZWZhdWx0IiwidG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQiLCJpc0NvbnRlbnRFZGl0YWJsZSIsIm9uVG91Y2hNb3ZlIiwidGFyZ2V0VG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsInByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyIiwidG91Y2hSZWxlYXNlT25FZGdlcyIsInByZXZpb3VzWCIsInByZXZpb3VzWSIsImRpZmZYIiwiZGlmZlkiLCJzcXJ0IiwidG91Y2hBbmdsZSIsImF0YW4yIiwicHJldmVudFRvdWNoTW92ZUZyb21Qb2ludGVyTW92ZSIsImNhbmNlbGFibGUiLCJ0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24iLCJuZXN0ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b3VjaGVzRGlmZiIsIm9uZVdheU1vdmVtZW50IiwidG91Y2hSYXRpbyIsInByZXZUb3VjaGVzRGlyZWN0aW9uIiwidG91Y2hlc0RpcmVjdGlvbiIsImlzTG9vcCIsImFsbG93TG9vcEZpeCIsImV2dCIsImJ1YmJsZXMiLCJkZXRhaWwiLCJieVN3aXBlclRvdWNoTW92ZSIsImRpc3BhdGNoRXZlbnQiLCJhbGxvd01vbWVudHVtQm91bmNlIiwibG9vcEZpeGVkIiwiX2xvb3BTd2FwUmVzZXQiLCJsb29wU3dhcFJlc2V0IiwiZGlzYWJsZVBhcmVudFN3aXBlciIsInJlc2lzdGFuY2VSYXRpbyIsInJlc2lzdGFuY2UiLCJmb2xsb3dGaW5nZXIiLCJvblRvdWNoRW5kIiwiaXNUb3VjaEV2ZW50IiwicHJvY2VlZCIsInRvdWNoRW5kVGltZSIsInRpbWVEaWZmIiwicGF0aFRyZWUiLCJsYXN0Q2xpY2tUaW1lIiwiY3VycmVudFBvcyIsInN3aXBlVG9MYXN0Iiwic3RvcEluZGV4IiwiaW5jcmVtZW50MiIsInJld2luZEZpcnN0SW5kZXgiLCJyZXdpbmRMYXN0SW5kZXgiLCJyYXRpbyIsImxvbmdTd2lwZXNNcyIsImxvbmdTd2lwZXMiLCJsb25nU3dpcGVzUmF0aW8iLCJzaG9ydFN3aXBlcyIsImlzTmF2QnV0dG9uVGFyZ2V0IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIm9uUmVzaXplIiwic2V0QnJlYWtwb2ludCIsImlzVmlydHVhbExvb3AiLCJhdXRvcGxheSIsInJ1bm5pbmciLCJwYXVzZWQiLCJyZXNpemVUaW1lb3V0IiwicmVzdW1lIiwib25DbGljayIsInByZXZlbnRDbGlja3MiLCJwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJvblNjcm9sbCIsIm9uTG9hZCIsIm9uRG9jdW1lbnRUb3VjaFN0YXJ0IiwiZG9jdW1lbnRUb3VjaEhhbmRsZXJQcm9jZWVkZWQiLCJ0b3VjaEFjdGlvbiIsImNhcHR1cmUiLCJkb21NZXRob2QiLCJzd2lwZXJNZXRob2QiLCJwYXNzaXZlIiwidXBkYXRlT25XaW5kb3dSZXNpemUiLCJhdHRhY2hFdmVudHMiLCJiaW5kIiwiZGV0YWNoRXZlbnRzIiwiZXZlbnRzJDEiLCJpc0dyaWRFbmFibGVkIiwiYnJlYWtwb2ludHMyIiwiYnJlYWtwb2ludHNCYXNlIiwiYnJlYWtwb2ludENvbnRhaW5lciIsImJyZWFrcG9pbnQiLCJnZXRCcmVha3BvaW50IiwiY3VycmVudEJyZWFrcG9pbnQiLCJicmVha3BvaW50T25seVBhcmFtcyIsImJyZWFrcG9pbnRQYXJhbXMiLCJvcmlnaW5hbFBhcmFtcyIsIndhc011bHRpUm93IiwiaXNNdWx0aVJvdyIsIndhc0dyYWJDdXJzb3IiLCJpc0dyYWJDdXJzb3IiLCJ3YXNFbmFibGVkIiwiZW1pdENvbnRhaW5lckNsYXNzZXMiLCJ3YXNNb2R1bGVFbmFibGVkIiwiaXNNb2R1bGVFbmFibGVkIiwiZGlzYWJsZSIsImVuYWJsZSIsImRpcmVjdGlvbkNoYW5nZWQiLCJuZWVkc1JlTG9vcCIsIndhc0xvb3AiLCJjaGFuZ2VEaXJlY3Rpb24iLCJpc0VuYWJsZWQiLCJoYXNMb29wIiwiY29udGFpbmVyRWwiLCJjdXJyZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwb2ludHMiLCJwb2ludCIsIm1pblJhdGlvIiwic3Vic3RyIiwidmFsdWUiLCJzb3J0IiwiYiIsInByZXBhcmVDbGFzc2VzIiwicHJlZml4IiwicmVzdWx0Q2xhc3NlcyIsIml0ZW0iLCJjbGFzc05hbWVzIiwiYWRkQ2xhc3NlcyIsInN1ZmZpeGVzIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzZXMiLCJ3YXNMb2NrZWQiLCJsYXN0U2xpZGVSaWdodEVkZ2UiLCJjaGVja092ZXJmbG93JDEiLCJkZWZhdWx0cyIsInN3aXBlckVsZW1lbnROb2RlTmFtZSIsImNyZWF0ZUVsZW1lbnRzIiwiZXZlbnRzUHJlZml4IiwidXJsIiwidW5pcXVlTmF2RWxlbWVudHMiLCJwYXNzaXZlTGlzdGVuZXJzIiwid3JhcHBlckNsYXNzIiwiX2VtaXRDbGFzc2VzIiwibW9kdWxlRXh0ZW5kUGFyYW1zIiwiYWxsTW9kdWxlc1BhcmFtcyIsIm1vZHVsZVBhcmFtTmFtZSIsIm1vZHVsZVBhcmFtcyIsImF1dG8iLCJwcm90b3R5cGVzIiwiZXh0ZW5kZWREZWZhdWx0cyIsIl9Td2lwZXIiLCJzd2lwZXJzIiwibmV3UGFyYW1zIiwibW9kdWxlcyIsIl9fbW9kdWxlc19fIiwibW9kIiwic3dpcGVyUGFyYW1zIiwicGFzc2VkUGFyYW1zIiwiZXZlbnROYW1lIiwidmVsb2NpdHkiLCJ0cnVuYyIsImNsaWNrVGltZW91dCIsInZlbG9jaXRpZXMiLCJpbWFnZXNUb0xvYWQiLCJpbWFnZXNMb2FkZWQiLCJwcm9wZXJ0eSIsInNldFByb2dyZXNzIiwiY2xzIiwiZ2V0U2xpZGVDbGFzc2VzIiwidXBkYXRlcyIsInZpZXciLCJleGFjdCIsInNwdiIsImJyZWFrTG9vcCIsInNsaWRlSW5WaWV3IiwiY29tcGxldGUiLCJ0cmFuc2xhdGVWYWx1ZSIsInRyYW5zbGF0ZWQiLCJuZXdEaXJlY3Rpb24iLCJuZWVkVXBkYXRlIiwiY3VycmVudERpcmVjdGlvbiIsImNoYW5nZUxhbmd1YWdlRGlyZWN0aW9uIiwibW91bnQiLCJtb3VudGVkIiwicGFyZW50Tm9kZSIsInRvVXBwZXJDYXNlIiwiZ2V0V3JhcHBlclNlbGVjdG9yIiwiZ2V0V3JhcHBlciIsInJlcyIsInNsaWRlU2xvdHMiLCJsYXp5RWxlbWVudHMiLCJkZWxldGVJbnN0YW5jZSIsImNsZWFuU3R5bGVzIiwiZXh0ZW5kRGVmYXVsdHMiLCJuZXdEZWZhdWx0cyIsImluc3RhbGxNb2R1bGUiLCJ1c2UiLCJtb2R1bGUyIiwibSIsInByb3RvdHlwZUdyb3VwIiwicHJvdG9NZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAscUJBQUE7OztBQ1lBLFNBQVNRLFNBQVNDLEdBQUEsRUFBSztFQUNyQixPQUFPQSxHQUFBLEtBQVEsUUFBUSxPQUFPQSxHQUFBLEtBQVEsWUFBWSxpQkFBaUJBLEdBQUEsSUFBT0EsR0FBQSxDQUFJQyxXQUFBLEtBQWdCQyxNQUFBO0FBQ2hHO0FB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SWlDLGNBQUEsS0FBbUIsT0FBTztNQUM1QixJQUFJcHhCLE1BQUEsQ0FBT25ELEVBQUEsSUFBTSxPQUFPbUQsTUFBQSxDQUFPbkQsRUFBQSxLQUFPLFVBQVU7UUFDOUNtRCxNQUFBLENBQU9uRCxFQUFBLENBQUdtRCxNQUFBLEdBQVM7TUFDckI7TUFDQTFELFdBQUEsQ0FBWTBELE1BQU07SUFDcEI7SUFDQUEsTUFBQSxDQUFPeUosU0FBQSxHQUFZO0lBQ25CLE9BQU87RUFDVDtFQUNBLE9BQU82bkIsZUFBZUMsV0FBQSxFQUFhO0lBQ2pDenlCLE9BQUEsQ0FBTzR2QixnQkFBQSxFQUFrQjZDLFdBQVc7RUFDdEM7RUFDQSxXQUFXN0MsaUJBQUEsRUFBbUI7SUFDNUIsT0FBT0EsZ0JBQUE7RUFDVDtFQUNBLFdBQVdmLFNBQUEsRUFBVztJQUNwQixPQUFPQSxRQUFBO0VBQ1Q7RUFDQSxPQUFPNkQsY0FBY3hDLEdBQUEsRUFBSztJQUN4QixJQUFJLENBQUNMLE9BQUEsQ0FBT3B3QixTQUFBLENBQVV3d0IsV0FBQSxFQUFhSixPQUFBLENBQU9wd0IsU0FBQSxDQUFVd3dCLFdBQUEsR0FBYyxFQUFDO0lBQ25FLE1BQU1ELE9BQUEsR0FBVUgsT0FBQSxDQUFPcHdCLFNBQUEsQ0FBVXd3QixXQUFBO0lBQ2pDLElBQUksT0FBT0MsR0FBQSxLQUFRLGNBQWNGLE9BQUEsQ0FBUXgyQixPQUFBLENBQVEwMkIsR0FBRyxJQUFJLEdBQUc7TUFDekRGLE9BQUEsQ0FBUTNzQixJQUFBLENBQUs2c0IsR0FBRztJQUNsQjtFQUNGO0VBQ0EsT0FBT3lDLElBQUlDLE9BQUEsRUFBUTtJQUNqQixJQUFJbHVCLEtBQUEsQ0FBTUMsT0FBQSxDQUFRaXVCLE9BQU0sR0FBRztNQUN6QkEsT0FBQSxDQUFPbjVCLE9BQUEsQ0FBUW81QixDQUFBLElBQUtoRCxPQUFBLENBQU82QyxhQUFBLENBQWNHLENBQUMsQ0FBQztNQUMzQyxPQUFPaEQsT0FBQTtJQUNUO0lBQ0FBLE9BQUEsQ0FBTzZDLGFBQUEsQ0FBY0UsT0FBTTtJQUMzQixPQUFPL0MsT0FBQTtFQUNUO0FBQ0Y7QUFDQTcyQixNQUFBLENBQU9LLElBQUEsQ0FBS3MyQixVQUFVLEVBQUVsMkIsT0FBQSxDQUFRcTVCLGNBQUEsSUFBa0I7RUFDaEQ5NUIsTUFBQSxDQUFPSyxJQUFBLENBQUtzMkIsVUFBQSxDQUFXbUQsY0FBYyxDQUFDLEVBQUVyNUIsT0FBQSxDQUFRczVCLFdBQUEsSUFBZTtJQUM3RHg2QixNQUFBLENBQU9rSCxTQUFBLENBQVVzekIsV0FBVyxJQUFJcEQsVUFBQSxDQUFXbUQsY0FBYyxFQUFFQyxXQUFXO0VBQ3hFLENBQUM7QUFDSCxDQUFDO0FBQ0R4NkIsTUFBQSxDQUFPbzZCLEdBQUEsQ0FBSSxDQUFDdG9CLE1BQUEsRUFBUXNCLFFBQVEsQ0FBQzs7O0FIMXhIN0IsSUFBT2xULHFCQUFBLEdBQVFGLE1BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9