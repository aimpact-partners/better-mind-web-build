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

// .beyond/uimport/swiper/modules.10.3.1.js
var modules_10_3_1_exports = {};
__export(modules_10_3_1_exports, {
  A11y: () => A11y,
  Autoplay: () => Autoplay,
  Controller: () => Controller,
  EffectCards: () => EffectCards,
  EffectCoverflow: () => EffectCoverflow,
  EffectCreative: () => EffectCreative,
  EffectCube: () => EffectCube,
  EffectFade: () => EffectFade,
  EffectFlip: () => EffectFlip,
  FreeMode: () => freeMode,
  Grid: () => Grid,
  HashNavigation: () => HashNavigation,
  History: () => History,
  Keyboard: () => Keyboard,
  Manipulation: () => Manipulation,
  Mousewheel: () => Mousewheel,
  Navigation: () => Navigation,
  Pagination: () => Pagination,
  Parallax: () => Parallax,
  Scrollbar: () => Scrollbar,
  Thumbs: () => Thumb,
  Virtual: () => Virtual,
  Zoom: () => Zoom
});
module.exports = __toCommonJS(modules_10_3_1_exports);

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
function getComputedStyle(el) {
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
  const curStyle = getComputedStyle(el);
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
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
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

// node_modules/swiper/modules/virtual.mjs
function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document2 = getDocument();
  swiper.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document2.createElement("div");
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === "string") {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = createElement("swiper-slide");
    } else {
      slideEl = createElement("div", swiper.params.slideClass);
    }
    slideEl.setAttribute("data-swiper-slide-index", index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = "right";else offsetProp = swiper.isHorizontal() ? "left" : "top";
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit("virtualUpdate");
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit("virtualUpdate");
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit("virtualUpdate");
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === "undefined" || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide2(slides) {
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide2(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
        if (cachedElIndex) {
          cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide2(slidesIndexes) {
    if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides2() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on("beforeInit", () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === "undefined") {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute("data-swiper-slide-index", slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update();
  });
  on("setTranslate", () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on("init update resize", () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide: appendSlide2,
    prependSlide: prependSlide2,
    removeSlide: removeSlide2,
    removeAllSlides: removeAllSlides2,
    update
  });
}

// node_modules/swiper/modules/keyboard.mjs
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  const window2 = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event2) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return void 0;
    }
    if (document2.activeElement && document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea")) {
      return void 0;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return void 0;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window2.innerWidth;
      const windowHeight = window2.innerHeight;
      const swiperOffset = elementOffset(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue;
          inView = true;
        }
      }
      if (!inView) return void 0;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit("keyPress", kc);
    return void 0;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document2.addEventListener("keydown", handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document2.removeEventListener("keydown", handle);
    swiper.keyboard.enabled = false;
  }
  on("init", () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on("destroy", () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

// node_modules/swiper/modules/mousewheel.mjs
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit("scroll", newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit("scroll", newEvent.raw);
    }
    lastScrollTime = new window2.Date().getTime();
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  }
  function handle(event2) {
    let e = event2;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? "next" : "prev",
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          clearTimeout(timeout);
          timeout = void 0;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!timeout) {
            timeout = nextTick(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) emit("scroll", e);
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]("mouseenter", handleMouseEnter);
    targetEl[method]("mouseleave", handleMouseLeave);
    targetEl[method]("wheel", handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener("wheel", handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events("addEventListener");
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events("removeEventListener");
    swiper.mousewheel.enabled = false;
    return true;
  }
  on("init", () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on("destroy", () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

// node_modules/swiper/shared/create-element-if-not-defined.mjs
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}

// node_modules/swiper/modules/navigation.mjs
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function getEl(el) {
    let res;
    if (el && typeof el === "string" && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === "string") res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res) return el;
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      }
    });
  }
  function update() {
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit("navigationPrev");
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit("navigationNext");
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(" "));
      }
    };
    nextEl.forEach(el => initButton(el, "next"));
    prevEl.forEach(el => initButton(el, "prev"));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
    };
    nextEl.forEach(el => destroyButton(el, "next"));
    prevEl.forEach(el => destroyButton(el, "prev"));
  }
  on("init", () => {
    if (swiper.params.navigation.enabled === false) {
      disable();
    } else {
      init();
      update();
    }
  });
  on("toEdge fromEdge lock unlock", () => {
    update();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on("click", (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}

// node_modules/swiper/shared/classes-to-selector.mjs
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = "";
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}

// node_modules/swiper/modules/pagination.mjs
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const realIndex = swiper.realIndex;
      const newSlideIndex = swiper.getSlideIndexByData(index);
      const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
      const loopFix = dir => {
        const indexBeforeLoopFix = swiper.activeIndex;
        swiper.loopFix({
          direction: dir,
          activeSlideIndex: newSlideIndex,
          slideTo: false
        });
        const indexAfterFix = swiper.activeIndex;
        if (indexBeforeLoopFix === indexAfterFix) {
          swiper.slideToLoop(realIndex, 0, false, true);
        }
      };
      if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
        loopFix(newSlideIndex > currentSlideIndex ? "next" : "prev");
      } else if (swiper.params.centeredSlides) {
        const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (newSlideIndex < Math.floor(slidesPerView / 2)) {
          loopFix("prev");
        }
      }
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          } else if (swiper.isElement) {
            bullet.setAttribute("part", "bullet");
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0) emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== "custom") {
        subEl.innerHTML = paginationHTML || "";
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.filter(subEl => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(...(params.clickableClass || "").split(" "));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || "").split(" "));
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update();
    }
  });
  on("snapIndexChange", () => {
    update();
  });
  on("snapGridLengthChange", () => {
    render();
    update();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}

// node_modules/swiper/modules/scrollbar.mjs
function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document2 = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = "";
    dragEl.style.height = "";
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === "auto") {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = "100ms";
    dragEl.style.transitionDuration = "100ms";
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = "0ms";
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "none";
    }
    emit("scrollbarDragStart", e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = "0ms";
    el.style.transitionDuration = "0ms";
    dragEl.style.transitionDuration = "0ms";
    emit("scrollbarDragMove", e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style["scroll-snap-type"] = "";
      wrapperEl.style.transitionDuration = "";
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = "400ms";
      }, 1e3);
    }
    emit("scrollbarDragEnd", e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
    target[eventMethod]("pointerdown", onDragStart, activeListener);
    document2[eventMethod]("pointermove", onDragMove, activeListener);
    document2[eventMethod]("pointerup", onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events("on");
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events("off");
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = document2.querySelectorAll(params.el);
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
      if (!dragEl) {
        dragEl = createElement("div", swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }
    disableDraggable();
  }
  on("init", () => {
    if (swiper.params.scrollbar.enabled === false) {
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on("update resize observerUpdate lock unlock", () => {
    updateSize();
  });
  on("setTranslate", () => {
    setTranslate();
  });
  on("setTransition", (_s, duration) => {
    setTransition(duration);
  });
  on("enable disable", () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? "remove" : "add"](swiper.params.scrollbar.lockClass);
    }
  });
  on("destroy", () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}

// node_modules/swiper/modules/parallax.mjs
function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute("data-swiper-parallax") || "0";
    let x = el.getAttribute("data-swiper-parallax-x");
    let y = el.getAttribute("data-swiper-parallax-y");
    const scale = el.getAttribute("data-swiper-parallax-scale");
    const opacity = el.getAttribute("data-swiper-parallax-opacity");
    const rotate = el.getAttribute("data-swiper-parallax-rotate");
    if (x || y) {
      x = x || "0";
      y = y || "0";
    } else if (swiper.isHorizontal()) {
      x = p;
      y = "0";
    } else {
      y = p;
      x = "0";
    }
    if (x.indexOf("%") >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf("%") >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== "undefined" && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== "undefined" && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== "undefined" && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = elementChildren(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...elementChildren(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on("beforeInit", () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on("init", () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on("setTranslate", () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on("setTransition", (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}

// node_modules/swiper/modules/zoom.mjs
function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  };
  const image = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, "scale", {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit("zoomChange", value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function onGestureStart(e) {
    if (e.pointerType === "mouse") {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = void 0;
        return;
      }
      gesture.maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = "0ms";
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === "mouse" && e.type === "pointerout") return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = void 0;
    }
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event2 = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event2.pageX;
    image.touchesStart.y = event2.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !gesture.slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth;
      image.height = gesture.imageEl.offsetHeight;
      image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
      image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = "0ms";
    }
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = void 0;
      gesture.imageEl = void 0;
      gesture.imageWrapEl = void 0;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = "hidden";
      swiper.wrapperEl.style.touchAction = "none";
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === "undefined" && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === "number" ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = void 0;
      touchY = void 0;
    }
    zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
    currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = elementOffset(gesture.slideEl).left + window2.scrollX;
      offsetY = elementOffset(gesture.slideEl).top + window2.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth;
      imageHeight = gesture.imageEl.offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = "300ms";
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = "300ms";
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = void 0;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = "";
      swiper.wrapperEl.style.touchAction = "";
    }
    zoom.scale = 1;
    currentScale = 1;
    gesture.imageWrapEl.style.transitionDuration = "300ms";
    gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
    gesture.imageEl.style.transitionDuration = "300ms";
    gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = void 0;
    gesture.originX = 0;
    gesture.originY = 0;
  }
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      zoomOut();
    } else {
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
    ["pointerup", "pointercancel", "pointerout"].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });
    swiper.wrapperEl.addEventListener("pointermove", onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
    ["pointerup", "pointercancel", "pointerout"].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });
    swiper.wrapperEl.removeEventListener("pointermove", onTouchMove, activeListenerWithCapture);
  }
  on("init", () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on("destroy", () => {
    disable();
  });
  on("touchStart", (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on("touchEnd", (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on("doubleTap", (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on("transitionEnd", () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on("slideChange", () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

// node_modules/swiper/modules/controller.mjs
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: void 0,
      inverse: false,
      by: "slide"
    }
  });
  swiper.controller = {
    control: void 0
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === "slide") {
        getInterpolateFunction(c);
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === "container") {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }
        elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = void 0;
      delete swiper.controller.spline;
    }
  }
  on("beforeInit", () => {
    if (typeof window !== "undefined" && (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper) {
        swiper.controller.control = controlElement.swiper;
      } else if (controlElement) {
        const onControllerSwiper = e => {
          swiper.controller.control = e.detail[0];
          swiper.update();
          controlElement.removeEventListener("init", onControllerSwiper);
        };
        controlElement.addEventListener("init", onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on("update", () => {
    removeSpline();
  });
  on("resize", () => {
    removeSpline();
  });
  on("observerUpdate", () => {
    removeSpline();
  });
  on("setTranslate", (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on("setTransition", (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}

// node_modules/swiper/modules/a11y.mjs
function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = "";
    notification.innerHTML = message;
  }
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("tabIndex", "0");
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("tabIndex", "-1");
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("role", role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("aria-roledescription", description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("aria-controls", controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("aria-label", label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("id", id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("aria-live", live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("aria-disabled", true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute("aria-disabled", false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, "button");
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
        }
      }
      if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute("aria-current", "true");
      } else {
        bulletEl.removeAttribute("aria-current");
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== "BUTTON") {
      addElRole(el, "button");
      el.addEventListener("keydown", onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);
    initSlides();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.addEventListener("keydown", onEnterOrSpaceKey);
      });
    }
    swiper.el.addEventListener("focus", handleFocus, true);
    swiper.el.addEventListener("pointerdown", handlePointerDown, true);
    swiper.el.addEventListener("pointerup", handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener("keydown", onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener("keydown", onEnterOrSpaceKey));
    }
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.removeEventListener("keydown", onEnterOrSpaceKey);
      });
    }
    swiper.el.removeEventListener("focus", handleFocus, true);
    swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
    swiper.el.removeEventListener("pointerup", handlePointerUp, true);
  }
  on("beforeInit", () => {
    liveRegion = createElement("span", swiper.params.a11y.notificationClass);
    liveRegion.setAttribute("aria-live", "assertive");
    liveRegion.setAttribute("aria-atomic", "true");
  });
  on("afterInit", () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on("fromEdge toEdge afterInit lock unlock", () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on("paginationUpdate", () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on("destroy", () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

// node_modules/swiper/modules/history.mjs
function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: "",
      replaceState: false,
      key: "slides",
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  };
  const getPathValues = urlOverride => {
    const window2 = getWindow();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window2.location;
    }
    const pathArray = location.pathname.slice(1).split("/").filter(part => part !== "");
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window2 = getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window2.location;
    }
    const slide = swiper.slides[index];
    let value = slugify(slide.getAttribute("data-history"));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ""}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ""}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window2.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window2.history.replaceState({
        value
      }, null, value);
    } else {
      window2.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute("data-history"));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window2 = getWindow();
    if (!swiper.params.history) return;
    if (!window2.history || !window2.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window2.addEventListener("popstate", setHistoryPopState);
    }
  };
  const destroy = () => {
    const window2 = getWindow();
    if (!swiper.params.history.replaceState) {
      window2.removeEventListener("popstate", setHistoryPopState);
    }
  };
  on("init", () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on("destroy", () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on("transitionEnd _freeModeNoMomentumRelease", () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on("slideChange", () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

// node_modules/swiper/modules/hash-navigation.mjs
function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document2 = getDocument();
  const window2 = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute("data-hash") === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
          return index;
        }
        return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit("hashChange");
    const newHash = document2.location.hash.replace("#", "");
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
    if (swiper.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
      window2.history.replaceState(null, null, `#${activeSlideHash}` || "");
      emit("hashSet");
    } else {
      document2.location.hash = activeSlideHash || "";
      emit("hashSet");
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document2.location.hash.replace("#", "");
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window2.addEventListener("hashchange", onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window2.removeEventListener("hashchange", onHashChange);
    }
  };
  on("init", () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on("destroy", () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on("transitionEnd _freeModeNoMomentumRelease", () => {
    if (initialized) {
      setHash();
    }
  });
  on("slideChange", () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

// node_modules/swiper/modules/autoplay.mjs
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime;
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains("swiper-slide-active"))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== "mouse") return;
    pausedByInteraction = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== "mouse") return;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener("pointerenter", onPointerEnter);
    swiper.el.removeEventListener("pointerleave", onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      autoplayStartTime = new Date().getTime();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}

// node_modules/swiper/modules/thumbs.mjs
function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (isObject2(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on("tap", onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
      }
      if (useOffset) {
        newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
      }
    }
  }
  on("beforeInit", () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
      const document2 = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener("init", onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener("init", onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on("slideChange update resize observerUpdate", () => {
    update();
  });
  on("setTransition", (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on("beforeDestroy", () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}

// node_modules/swiper/modules/free-mode.mjs
function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "startX" : "startY"],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
      time: now()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1e3 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once("transitionEnd", () => {
          swiper.loopFix();
        });
      }
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        elementTransitionEnd(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit("momentumBounce");
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit("_freeModeNoMomentumRelease");
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit("_freeModeNoMomentumRelease");
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}

// node_modules/swiper/modules/grid.mjs
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slidesLength => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== "auto" && fill === "row") {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === "row" && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === "column") {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style[getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && `${spaceBetween}px` : "";
  };
  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on("init", onInit);
  on("update", onUpdate);
  swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}

// node_modules/swiper/modules/manipulation.mjs
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === "string") {
      const tempDOM = document.createElement("div");
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = "";
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === "string") {
      const tempDOM = document.createElement("div");
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = "";
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}
function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === "object" && "length" in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}
function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}

// node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(shadowEl => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

// node_modules/swiper/shared/effect-target.mjs
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}

// node_modules/swiper/shared/effect-virtual-transition-end.mjs
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

// node_modules/swiper/modules/effect-fade.mjs
function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "fade",
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-cube.mjs
function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "left" : "top"}`.split(" "));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = createElement("div", `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}`.split(" "));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector(".swiper-cube-shadow");
        if (!cubeShadowEl) {
          cubeShadowEl = createElement("div", "swiper-cube-shadow");
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style["-webkit-transform-origin"] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
    wrapperEl.style.setProperty("--swiper-cube-translate-z", `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector(".swiper-cube-shadow");
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  effectInit({
    effect: "cube",
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}

// node_modules/swiper/shared/create-shadow.mjs
function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  if (!shadowEl) {
    shadowEl = createElement("div", shadowClass.split(" "));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}

// node_modules/swiper/modules/effect-flip.mjs
function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
    if (!shadowBefore) {
      shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
    }
    if (!shadowAfter) {
      shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "flip",
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-coverflow.mjs
function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
      if (Math.abs(translateX) < 1e-3) translateX = 0;
      if (Math.abs(translateY) < 1e-3) translateY = 0;
      if (Math.abs(translateZ) < 1e-3) translateZ = 0;
      if (Math.abs(rotateY) < 1e-3) rotateY = 0;
      if (Math.abs(rotateX) < 1e-3) rotateX = 0;
      if (Math.abs(scale) < 1e-3) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
        let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
        if (!shadowBeforeEl) {
          shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
        }
        if (!shadowAfterEl) {
          shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  effectInit({
    effect: "coverflow",
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}

// node_modules/swiper/modules/effect-creative.mjs
function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === "string") return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(", ");
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl && data.shadow) {
          shadowEl = createShadow("creative", slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: "creative",
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// node_modules/swiper/modules/effect-cards.mjs
function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      if (params.slideShadows) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl) {
          shadowEl = createShadow("cards", slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zd2lwZXIvbW9kdWxlcy4xMC4zLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9zc3Itd2luZG93LmVzbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvdmlydHVhbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMva2V5Ym9hcmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL21vdXNld2hlZWwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvY3JlYXRlLWVsZW1lbnQtaWYtbm90LWRlZmluZWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL25hdmlnYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvY2xhc3Nlcy10by1zZWxlY3Rvci5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvcGFnaW5hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvc2Nyb2xsYmFyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9wYXJhbGxheC5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvem9vbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvY29udHJvbGxlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvYTExeS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvaGlzdG9yeS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvaGFzaC1uYXZpZ2F0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9hdXRvcGxheS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvdGh1bWJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9mcmVlLW1vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2dyaWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL21hbmlwdWxhdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9lZmZlY3QtaW5pdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9lZmZlY3QtdGFyZ2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2VmZmVjdC12aXJ0dWFsLXRyYW5zaXRpb24tZW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtZmFkZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZWZmZWN0LWN1YmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvY3JlYXRlLXNoYWRvdy5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZWZmZWN0LWZsaXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1jb3ZlcmZsb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1jcmVhdGl2ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZWZmZWN0LWNhcmRzLm1qcyJdLCJuYW1lcyI6WyJtb2R1bGVzXzEwXzNfMV9leHBvcnRzIiwiX19leHBvcnQiLCJBMTF5IiwiQXV0b3BsYXkiLCJDb250cm9sbGVyIiwiRWZmZWN0Q2FyZHMiLCJFZmZlY3RDb3ZlcmZsb3ciLCJFZmZlY3RDcmVhdGl2ZSIsIkVmZmVjdEN1YmUiLCJFZmZlY3RGYWRlIiwiRWZmZWN0RmxpcCIsIkZyZWVNb2RlIiwiZnJlZU1vZGUiLCJHcmlkIiwiSGFzaE5hdmlnYXRpb24iLCJIaXN0b3J5IiwiS2V5Ym9hcmQiLCJNYW5pcHVsYXRpb24iLCJNb3VzZXdoZWVsIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJQYXJhbGxheCIsIlNjcm9sbGJhciIsIlRodW1icyIsIlRodW1iIiwiVmlydHVhbCIsIlpvb20iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaXNPYmplY3QiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsImV4dGVuZCIsInRhcmdldCIsInNyYyIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwibGVuZ3RoIiwic3NyRG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhY3RpdmVFbGVtZW50IiwiYmx1ciIsIm5vZGVOYW1lIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsInN0eWxlIiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVFbGVtZW50TlMiLCJpbXBvcnROb2RlIiwibG9jYXRpb24iLCJoYXNoIiwiaG9zdCIsImhvc3RuYW1lIiwiaHJlZiIsIm9yaWdpbiIsInBhdGhuYW1lIiwicHJvdG9jb2wiLCJzZWFyY2giLCJnZXREb2N1bWVudCIsImRvYyIsImRvY3VtZW50Iiwic3NyV2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImdvIiwiYmFjayIsIkN1c3RvbUV2ZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJJbWFnZSIsIkRhdGUiLCJzY3JlZW4iLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibWF0Y2hNZWRpYSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsImdldFdpbmRvdyIsIndpbiIsIndpbmRvdyIsImRlbGV0ZVByb3BzIiwib2JqZWN0IiwiZSIsIm5leHRUaWNrIiwiZGVsYXkiLCJub3ciLCJlbCIsIndpbmRvdzIiLCJjdXJyZW50U3R5bGUiLCJnZXRUcmFuc2xhdGUiLCJheGlzIiwibWF0cml4IiwiY3VyVHJhbnNmb3JtIiwidHJhbnNmb3JtTWF0cml4IiwiY3VyU3R5bGUiLCJXZWJLaXRDU1NNYXRyaXgiLCJ0cmFuc2Zvcm0iLCJ3ZWJraXRUcmFuc2Zvcm0iLCJzcGxpdCIsIm1hcCIsImEiLCJyZXBsYWNlIiwiam9pbiIsIk1velRyYW5zZm9ybSIsIk9UcmFuc2Zvcm0iLCJNc1RyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidG9TdHJpbmciLCJtNDEiLCJwYXJzZUZsb2F0IiwibTQyIiwiaXNPYmplY3QyIiwibyIsInByb3RvdHlwZSIsImNhbGwiLCJzbGljZSIsImlzTm9kZSIsIm5vZGUiLCJIVE1MRWxlbWVudCIsIm5vZGVUeXBlIiwiZXh0ZW5kMiIsInRvIiwiYXJndW1lbnRzIiwibm9FeHRlbmQiLCJpIiwibmV4dFNvdXJjZSIsImtleXNBcnJheSIsImZpbHRlciIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJsZW4iLCJuZXh0S2V5IiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJfX3N3aXBlcl9fIiwic2V0Q1NTUHJvcGVydHkiLCJ2YXJOYW1lIiwidmFyVmFsdWUiLCJzZXRQcm9wZXJ0eSIsImFuaW1hdGVDU1NNb2RlU2Nyb2xsIiwiX3JlZiIsInN3aXBlciIsInRhcmdldFBvc2l0aW9uIiwic2lkZSIsInN0YXJ0UG9zaXRpb24iLCJ0cmFuc2xhdGUiLCJzdGFydFRpbWUiLCJ0aW1lIiwiZHVyYXRpb24iLCJwYXJhbXMiLCJzcGVlZCIsIndyYXBwZXJFbCIsInNjcm9sbFNuYXBUeXBlIiwiY3NzTW9kZUZyYW1lSUQiLCJkaXIiLCJpc091dE9mQm91bmQiLCJjdXJyZW50IiwiYW5pbWF0ZSIsImdldFRpbWUiLCJwcm9ncmVzcyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJlYXNlUHJvZ3Jlc3MiLCJjb3MiLCJQSSIsImN1cnJlbnRQb3NpdGlvbiIsInNjcm9sbFRvIiwib3ZlcmZsb3ciLCJnZXRTbGlkZVRyYW5zZm9ybUVsIiwic2xpZGVFbCIsInNoYWRvd1Jvb3QiLCJlbGVtZW50Q2hpbGRyZW4iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJtYXRjaGVzIiwidGFnIiwiY2xhc3NlcyIsImNsYXNzTGlzdCIsImFkZCIsIkFycmF5IiwiaXNBcnJheSIsImVsZW1lbnRPZmZzZXQiLCJkb2N1bWVudDIiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsWSIsInNjcm9sbExlZnQiLCJzY3JvbGxYIiwidG9wIiwibGVmdCIsImVsZW1lbnRQcmV2QWxsIiwicHJldkVscyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwcmV2IiwicHVzaCIsImVsZW1lbnROZXh0QWxsIiwibmV4dEVscyIsIm5leHRFbGVtZW50U2libGluZyIsIm5leHQiLCJlbGVtZW50U3R5bGUiLCJwcm9wIiwiZWxlbWVudEluZGV4IiwiY2hpbGQiLCJwcmV2aW91c1NpYmxpbmciLCJlbGVtZW50UGFyZW50cyIsInBhcmVudHMiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZWxlbWVudFRyYW5zaXRpb25FbmQiLCJmaXJlQ2FsbEJhY2siLCJlbGVtZW50T3V0ZXJTaXplIiwic2l6ZSIsImluY2x1ZGVNYXJnaW5zIiwib2Zmc2V0V2lkdGgiLCJleHRlbmRQYXJhbXMiLCJvbiIsImVtaXQiLCJ2aXJ0dWFsIiwiZW5hYmxlZCIsInNsaWRlcyIsImNhY2hlIiwicmVuZGVyU2xpZGUiLCJyZW5kZXJFeHRlcm5hbCIsInJlbmRlckV4dGVybmFsVXBkYXRlIiwiYWRkU2xpZGVzQmVmb3JlIiwiYWRkU2xpZGVzQWZ0ZXIiLCJjc3NNb2RlVGltZW91dCIsImZyb20iLCJvZmZzZXQiLCJzbGlkZXNHcmlkIiwidGVtcERPTSIsInNsaWRlIiwiaW5kZXgiLCJpbm5lckhUTUwiLCJpc0VsZW1lbnQiLCJzbGlkZUNsYXNzIiwidXBkYXRlIiwiZm9yY2UiLCJzbGlkZXNQZXJWaWV3Iiwic2xpZGVzUGVyR3JvdXAiLCJjZW50ZXJlZFNsaWRlcyIsImxvb3AiLCJpc0xvb3AiLCJwcmV2aW91c0Zyb20iLCJwcmV2aW91c1RvIiwicHJldmlvdXNTbGlkZXNHcmlkIiwicHJldmlvdXNPZmZzZXQiLCJjc3NNb2RlIiwidXBkYXRlQWN0aXZlSW5kZXgiLCJhY3RpdmVJbmRleCIsIm9mZnNldFByb3AiLCJydGxUcmFuc2xhdGUiLCJpc0hvcml6b250YWwiLCJzbGlkZXNBZnRlciIsInNsaWRlc0JlZm9yZSIsImZsb29yIiwiYXNzaWduIiwib25SZW5kZXJlZCIsInVwZGF0ZVNsaWRlcyIsInVwZGF0ZVByb2dyZXNzIiwidXBkYXRlU2xpZGVzQ2xhc3NlcyIsImFicyIsImNzc092ZXJmbG93QWRqdXN0bWVudCIsImdldFNsaWRlcyIsInNsaWRlc1RvUmVuZGVyIiwicHJlcGVuZEluZGV4ZXMiLCJhcHBlbmRJbmRleGVzIiwiZ2V0U2xpZGVJbmRleCIsInNsaWRlSW5kZXgiLCJyZW1vdmUiLCJsb29wRnJvbSIsImxvb3BUbyIsInNsaWRlc0VsIiwiYXBwZW5kIiwicHJlcGVuZCIsInNvcnQiLCJiIiwiYXBwZW5kU2xpZGUyIiwicHJlcGVuZFNsaWRlMiIsIm5ld0FjdGl2ZUluZGV4IiwibnVtYmVyT2ZOZXdTbGlkZXMiLCJ1bnNoaWZ0IiwibmV3Q2FjaGUiLCJjYWNoZWRJbmRleCIsImNhY2hlZEVsIiwiY2FjaGVkRWxJbmRleCIsImdldEF0dHJpYnV0ZSIsInBhcnNlSW50Iiwic2xpZGVUbyIsInJlbW92ZVNsaWRlMiIsInNsaWRlc0luZGV4ZXMiLCJzcGxpY2UiLCJyZW1vdmVBbGxTbGlkZXMyIiwiZG9tU2xpZGVzQXNzaWduZWQiLCJwYXNzZWRQYXJhbXMiLCJjbGFzc05hbWVzIiwiY29udGFpbmVyTW9kaWZpZXJDbGFzcyIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJvcmlnaW5hbFBhcmFtcyIsIl9pbW1lZGlhdGVWaXJ0dWFsIiwidmlydHVhbFNpemUiLCJhcHBlbmRTbGlkZSIsInByZXBlbmRTbGlkZSIsInJlbW92ZVNsaWRlIiwicmVtb3ZlQWxsU2xpZGVzIiwia2V5Ym9hcmQiLCJvbmx5SW5WaWV3cG9ydCIsInBhZ2VVcERvd24iLCJoYW5kbGUiLCJldmVudDIiLCJydGwiLCJvcmlnaW5hbEV2ZW50Iiwia2MiLCJrZXlDb2RlIiwiY2hhckNvZGUiLCJpc1BhZ2VVcCIsImlzUGFnZURvd24iLCJpc0Fycm93TGVmdCIsImlzQXJyb3dSaWdodCIsImlzQXJyb3dVcCIsImlzQXJyb3dEb3duIiwiYWxsb3dTbGlkZU5leHQiLCJpc1ZlcnRpY2FsIiwiYWxsb3dTbGlkZVByZXYiLCJzaGlmdEtleSIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5IiwidG9Mb3dlckNhc2UiLCJpblZpZXciLCJzbGlkZUFjdGl2ZUNsYXNzIiwic3dpcGVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInN3aXBlckhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0Iiwic3dpcGVyT2Zmc2V0Iiwic3dpcGVyQ29vcmQiLCJwb2ludCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJzbGlkZU5leHQiLCJzbGlkZVByZXYiLCJlbmFibGUiLCJkaXNhYmxlIiwibW91c2V3aGVlbCIsInJlbGVhc2VPbkVkZ2VzIiwiaW52ZXJ0IiwiZm9yY2VUb0F4aXMiLCJzZW5zaXRpdml0eSIsImV2ZW50c1RhcmdldCIsInRocmVzaG9sZERlbHRhIiwidGhyZXNob2xkVGltZSIsIm5vTW91c2V3aGVlbENsYXNzIiwidGltZW91dCIsImxhc3RTY3JvbGxUaW1lIiwibGFzdEV2ZW50QmVmb3JlU25hcCIsInJlY2VudFdoZWVsRXZlbnRzIiwibm9ybWFsaXplIiwiUElYRUxfU1RFUCIsIkxJTkVfSEVJR0hUIiwiUEFHRV9IRUlHSFQiLCJzWCIsInNZIiwicFgiLCJwWSIsImRldGFpbCIsIndoZWVsRGVsdGEiLCJ3aGVlbERlbHRhWSIsIndoZWVsRGVsdGFYIiwiSE9SSVpPTlRBTF9BWElTIiwiZGVsdGFZIiwiZGVsdGFYIiwiZGVsdGFNb2RlIiwic3BpblgiLCJzcGluWSIsInBpeGVsWCIsInBpeGVsWSIsImhhbmRsZU1vdXNlRW50ZXIiLCJtb3VzZUVudGVyZWQiLCJoYW5kbGVNb3VzZUxlYXZlIiwiYW5pbWF0ZVNsaWRlciIsIm5ld0V2ZW50IiwiZGVsdGEiLCJkaXJlY3Rpb24iLCJpc0VuZCIsImFuaW1hdGluZyIsInJhdyIsImlzQmVnaW5uaW5nIiwicmVsZWFzZVNjcm9sbCIsImRpc2FibGVQYXJlbnRTd2lwZXIiLCJjbG9zZXN0IiwidGFyZ2V0RWwiLCJ0YXJnZXRFbENvbnRhaW5zVGFyZ2V0IiwiY29udGFpbnMiLCJydGxGYWN0b3IiLCJkYXRhIiwicG9zaXRpb25zIiwibWluVHJhbnNsYXRlIiwibWF4VHJhbnNsYXRlIiwibmVzdGVkIiwic3RvcFByb3BhZ2F0aW9uIiwic2lnbiIsInNoaWZ0IiwicHJldkV2ZW50IiwiaWdub3JlV2hlZWxFdmVudHMiLCJwb3NpdGlvbiIsIndhc0JlZ2lubmluZyIsIndhc0VuZCIsInNldFRyYW5zaXRpb24iLCJzZXRUcmFuc2xhdGUiLCJsb29wRml4IiwiYnlNb3VzZXdoZWVsIiwic3RpY2t5IiwiZmlyc3RFdmVudCIsInNuYXBUb1RocmVzaG9sZCIsInNsaWRlVG9DbG9zZXN0IiwiYXV0b3BsYXkiLCJhdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uIiwic3RvcCIsImV2ZW50cyIsIm1ldGhvZCIsImV2ZW50IiwiY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCIsImNoZWNrUHJvcHMiLCJjcmVhdGVFbGVtZW50cyIsImF1dG8iLCJjbGFzc05hbWUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiaGlkZU9uQ2xpY2siLCJkaXNhYmxlZENsYXNzIiwiaGlkZGVuQ2xhc3MiLCJsb2NrQ2xhc3MiLCJuYXZpZ2F0aW9uRGlzYWJsZWRDbGFzcyIsIm1ha2VFbGVtZW50c0FycmF5IiwiZ2V0RWwiLCJyZXMiLCJ1bmlxdWVOYXZFbGVtZW50cyIsInRvZ2dsZUVsIiwiZGlzYWJsZWQiLCJzdWJFbCIsInRhZ05hbWUiLCJ3YXRjaE92ZXJmbG93IiwiaXNMb2NrZWQiLCJyZXdpbmQiLCJvblByZXZDbGljayIsIm9uTmV4dENsaWNrIiwiaW5pdCIsImluaXRCdXR0b24iLCJkZXN0cm95IiwiZGVzdHJveUJ1dHRvbiIsIl9zIiwiaW5jbHVkZXMiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiaXNIaWRkZW4iLCJ0b2dnbGUiLCJjbGFzc2VzVG9TZWxlY3RvciIsInRyaW0iLCJwZngiLCJidWxsZXRFbGVtZW50IiwicmVuZGVyQnVsbGV0IiwicmVuZGVyUHJvZ3Jlc3NiYXIiLCJyZW5kZXJGcmFjdGlvbiIsInJlbmRlckN1c3RvbSIsInByb2dyZXNzYmFyT3Bwb3NpdGUiLCJ0eXBlIiwiZHluYW1pY0J1bGxldHMiLCJkeW5hbWljTWFpbkJ1bGxldHMiLCJmb3JtYXRGcmFjdGlvbkN1cnJlbnQiLCJudW1iZXIiLCJmb3JtYXRGcmFjdGlvblRvdGFsIiwiYnVsbGV0Q2xhc3MiLCJidWxsZXRBY3RpdmVDbGFzcyIsIm1vZGlmaWVyQ2xhc3MiLCJjdXJyZW50Q2xhc3MiLCJ0b3RhbENsYXNzIiwicHJvZ3Jlc3NiYXJGaWxsQ2xhc3MiLCJwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3MiLCJjbGlja2FibGVDbGFzcyIsImhvcml6b250YWxDbGFzcyIsInZlcnRpY2FsQ2xhc3MiLCJwYWdpbmF0aW9uRGlzYWJsZWRDbGFzcyIsImJ1bGxldHMiLCJidWxsZXRTaXplIiwiZHluYW1pY0J1bGxldEluZGV4IiwiaXNQYWdpbmF0aW9uRGlzYWJsZWQiLCJzZXRTaWRlQnVsbGV0cyIsImJ1bGxldEVsIiwib25CdWxsZXRDbGljayIsInJlYWxJbmRleCIsIm5ld1NsaWRlSW5kZXgiLCJnZXRTbGlkZUluZGV4QnlEYXRhIiwiY3VycmVudFNsaWRlSW5kZXgiLCJpbmRleEJlZm9yZUxvb3BGaXgiLCJhY3RpdmVTbGlkZUluZGV4IiwiaW5kZXhBZnRlckZpeCIsInNsaWRlVG9Mb29wIiwibG9vcGVkU2xpZGVzIiwic2xpZGVzUGVyVmlld0R5bmFtaWMiLCJjZWlsIiwicHJldmlvdXNJbmRleCIsInNsaWRlc0xlbmd0aCIsInRvdGFsIiwic25hcEdyaWQiLCJwcmV2aW91c1JlYWxJbmRleCIsInNuYXBJbmRleCIsInByZXZpb3VzU25hcEluZGV4IiwiZmlyc3RJbmRleCIsImxhc3RJbmRleCIsIm1pZEluZGV4IiwiY2xhc3Nlc1RvUmVtb3ZlIiwic3VmZml4IiwicyIsImZsYXQiLCJidWxsZXQiLCJidWxsZXRJbmRleCIsImZpcnN0RGlzcGxheWVkQnVsbGV0IiwibGFzdERpc3BsYXllZEJ1bGxldCIsImR5bmFtaWNCdWxsZXRzTGVuZ3RoIiwiYnVsbGV0c09mZnNldCIsInN1YkVsSW5kZXgiLCJmcmFjdGlvbkVsIiwidGV4dENvbnRlbnQiLCJ0b3RhbEVsIiwicHJvZ3Jlc3NiYXJEaXJlY3Rpb24iLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsInByb2dyZXNzRWwiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJyZW5kZXIiLCJwYWdpbmF0aW9uSFRNTCIsIm51bWJlck9mQnVsbGV0cyIsImlzVG91Y2hlZCIsImRyYWdUaW1lb3V0IiwiZHJhZ1N0YXJ0UG9zIiwiZHJhZ1NpemUiLCJ0cmFja1NpemUiLCJkaXZpZGVyIiwic2Nyb2xsYmFyIiwiaGlkZSIsImRyYWdnYWJsZSIsInNuYXBPblJlbGVhc2UiLCJkcmFnQ2xhc3MiLCJzY3JvbGxiYXJEaXNhYmxlZENsYXNzIiwiZHJhZ0VsIiwicHJvZ3Jlc3NMb29wIiwibmV3U2l6ZSIsIm5ld1BvcyIsIndpZHRoIiwiaGVpZ2h0Iiwib3BhY2l0eSIsInVwZGF0ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzbGlkZXNPZmZzZXRCZWZvcmUiLCJkaXNwbGF5IiwiZ2V0UG9pbnRlclBvc2l0aW9uIiwiY2xpZW50WCIsImNsaWVudFkiLCJzZXREcmFnUG9zaXRpb24iLCJwb3NpdGlvblJhdGlvIiwib25EcmFnU3RhcnQiLCJvbkRyYWdNb3ZlIiwib25EcmFnRW5kIiwiYWN0aXZlTGlzdGVuZXIiLCJwYXNzaXZlTGlzdGVuZXJzIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJwYXNzaXZlTGlzdGVuZXIiLCJldmVudE1ldGhvZCIsImVuYWJsZURyYWdnYWJsZSIsImRpc2FibGVEcmFnZ2FibGUiLCJzd2lwZXJFbCIsInBhcmFsbGF4IiwiZWxlbWVudHNTZWxlY3RvciIsInNldFRyYW5zZm9ybSIsInAiLCJ4IiwieSIsInJvdGF0ZSIsImN1cnJlbnRPcGFjaXR5IiwiY3VycmVudFNjYWxlIiwiY3VycmVudFJvdGF0ZSIsImVsZW1lbnRzIiwiaG9zdEVsIiwic2xpZGVQcm9ncmVzcyIsInBhcmFsbGF4RWwiLCJwYXJhbGxheER1cmF0aW9uIiwiX3N3aXBlciIsInpvb20iLCJtYXhSYXRpbyIsIm1pblJhdGlvIiwiY29udGFpbmVyQ2xhc3MiLCJ6b29tZWRTbGlkZUNsYXNzIiwiaXNTY2FsaW5nIiwiZmFrZUdlc3R1cmVUb3VjaGVkIiwiZmFrZUdlc3R1cmVNb3ZlZCIsImV2Q2FjaGUiLCJnZXN0dXJlIiwib3JpZ2luWCIsIm9yaWdpblkiLCJzbGlkZVdpZHRoIiwic2xpZGVIZWlnaHQiLCJpbWFnZUVsIiwiaW1hZ2VXcmFwRWwiLCJpbWFnZSIsImlzTW92ZWQiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsInN0YXJ0WCIsInN0YXJ0WSIsInRvdWNoZXNTdGFydCIsInRvdWNoZXNDdXJyZW50IiwidmVsb2NpdHkiLCJwcmV2UG9zaXRpb25YIiwicHJldlBvc2l0aW9uWSIsInByZXZUaW1lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsImdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMiLCJ4MSIsInBhZ2VYIiwieTEiLCJwYWdlWSIsIngyIiwieTIiLCJkaXN0YW5jZSIsInNxcnQiLCJnZXRTY2FsZU9yaWdpbiIsImdldFNsaWRlU2VsZWN0b3IiLCJldmVudFdpdGhpblNsaWRlIiwic2xpZGVTZWxlY3RvciIsImV2ZW50V2l0aGluWm9vbUNvbnRhaW5lciIsImNvbnRhaW5lckVsIiwib25HZXN0dXJlU3RhcnQiLCJwb2ludGVyVHlwZSIsInNjYWxlU3RhcnQiLCJvbkdlc3R1cmVDaGFuZ2UiLCJwb2ludGVySW5kZXgiLCJmaW5kSW5kZXgiLCJjYWNoZWRFdiIsInBvaW50ZXJJZCIsInNjYWxlTW92ZSIsIm9uR2VzdHVyZUVuZCIsIm9uVG91Y2hTdGFydCIsImRldmljZSIsImFuZHJvaWQiLCJjYW5jZWxhYmxlIiwib25Ub3VjaE1vdmUiLCJzY2FsZWRXaWR0aCIsInNjYWxlZEhlaWdodCIsInRvdWNoZXNEaWZmIiwiYWxsb3dDbGljayIsInNjYWxlUmF0aW8iLCJvblRvdWNoRW5kIiwibW9tZW50dW1EdXJhdGlvblgiLCJtb21lbnR1bUR1cmF0aW9uWSIsIm1vbWVudHVtRGlzdGFuY2VYIiwibmV3UG9zaXRpb25YIiwibW9tZW50dW1EaXN0YW5jZVkiLCJuZXdQb3NpdGlvblkiLCJtb21lbnR1bUR1cmF0aW9uIiwib25UcmFuc2l0aW9uRW5kIiwiem9vbUluIiwidG91Y2hBY3Rpb24iLCJ0b3VjaFgiLCJ0b3VjaFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImRpZmZYIiwiZGlmZlkiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInRyYW5zbGF0ZU1pblgiLCJ0cmFuc2xhdGVNaW5ZIiwidHJhbnNsYXRlTWF4WCIsInRyYW5zbGF0ZU1heFkiLCJmb3JjZVpvb21SYXRpbyIsInpvb21PdXQiLCJ6b29tVG9nZ2xlIiwiZ2V0TGlzdGVuZXJzIiwiYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSIsImV2ZW50TmFtZSIsImluIiwib3V0IiwiY29udHJvbGxlciIsImNvbnRyb2wiLCJpbnZlcnNlIiwiYnkiLCJMaW5lYXJTcGxpbmUiLCJiaW5hcnlTZWFyY2giLCJtYXhJbmRleCIsIm1pbkluZGV4IiwiZ3Vlc3MiLCJhcnJheSIsInZhbCIsImkxIiwiaTMiLCJpbnRlcnBvbGF0ZSIsImdldEludGVycG9sYXRlRnVuY3Rpb24iLCJjIiwic3BsaW5lIiwiX3QiLCJieUNvbnRyb2xsZXIiLCJjb250cm9sbGVkIiwibXVsdGlwbGllciIsImNvbnRyb2xsZWRUcmFuc2xhdGUiLCJTd2lwZXIiLCJzZXRDb250cm9sbGVkVHJhbnNsYXRlIiwiZGVzdHJveWVkIiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsInNldENvbnRyb2xsZWRUcmFuc2l0aW9uIiwidHJhbnNpdGlvblN0YXJ0IiwiYXV0b0hlaWdodCIsInVwZGF0ZUF1dG9IZWlnaHQiLCJ0cmFuc2l0aW9uRW5kIiwicmVtb3ZlU3BsaW5lIiwiY29udHJvbEVsZW1lbnQiLCJvbkNvbnRyb2xsZXJTd2lwZXIiLCJhMTF5Iiwibm90aWZpY2F0aW9uQ2xhc3MiLCJwcmV2U2xpZGVNZXNzYWdlIiwibmV4dFNsaWRlTWVzc2FnZSIsImZpcnN0U2xpZGVNZXNzYWdlIiwibGFzdFNsaWRlTWVzc2FnZSIsInBhZ2luYXRpb25CdWxsZXRNZXNzYWdlIiwic2xpZGVMYWJlbE1lc3NhZ2UiLCJjb250YWluZXJNZXNzYWdlIiwiY29udGFpbmVyUm9sZURlc2NyaXB0aW9uTWVzc2FnZSIsIml0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlIiwic2xpZGVSb2xlIiwiY2xpY2tlZCIsImxpdmVSZWdpb24iLCJub3RpZnkiLCJtZXNzYWdlIiwibm90aWZpY2F0aW9uIiwiZ2V0UmFuZG9tTnVtYmVyIiwicmFuZG9tQ2hhciIsInJvdW5kIiwicmFuZG9tIiwicmVwZWF0IiwibWFrZUVsRm9jdXNhYmxlIiwibWFrZUVsTm90Rm9jdXNhYmxlIiwiYWRkRWxSb2xlIiwicm9sZSIsImFkZEVsUm9sZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJhZGRFbENvbnRyb2xzIiwiY29udHJvbHMiLCJhZGRFbExhYmVsIiwibGFiZWwiLCJhZGRFbElkIiwiYWRkRWxMaXZlIiwibGl2ZSIsImRpc2FibGVFbCIsImVuYWJsZUVsIiwib25FbnRlck9yU3BhY2VLZXkiLCJjbGljayIsInVwZGF0ZU5hdmlnYXRpb24iLCJoYXNQYWdpbmF0aW9uIiwiaGFzQ2xpY2thYmxlUGFnaW5hdGlvbiIsInVwZGF0ZVBhZ2luYXRpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbml0TmF2RWwiLCJ3cmFwcGVySWQiLCJoYW5kbGVQb2ludGVyRG93biIsImhhbmRsZVBvaW50ZXJVcCIsImhhbmRsZUZvY3VzIiwiaXNBY3RpdmUiLCJpc1Zpc2libGUiLCJ2aXNpYmxlU2xpZGVzIiwic291cmNlQ2FwYWJpbGl0aWVzIiwiZmlyZXNUb3VjaEV2ZW50cyIsImluaXRTbGlkZXMiLCJhcmlhTGFiZWxNZXNzYWdlIiwicGFnaW5hdGlvbkVsIiwicm9vdCIsImtlZXBRdWVyeSIsImluaXRpYWxpemVkIiwicGF0aHMiLCJzbHVnaWZ5IiwidGV4dCIsImdldFBhdGhWYWx1ZXMiLCJ1cmxPdmVycmlkZSIsIlVSTCIsInBhdGhBcnJheSIsInBhcnQiLCJzZXRIaXN0b3J5IiwidXJsIiwiY3VycmVudFN0YXRlIiwic3RhdGUiLCJzY3JvbGxUb1NsaWRlIiwicnVuQ2FsbGJhY2tzIiwic2xpZGVIaXN0b3J5Iiwic2V0SGlzdG9yeVBvcFN0YXRlIiwiaGFzaE5hdmlnYXRpb24iLCJydW5DYWxsYmFja3NPbkluaXQiLCJ3YXRjaFN0YXRlIiwic2xpZGVXaXRoSGFzaCIsIm9uSGFzaENoYW5nZSIsIm5ld0hhc2giLCJhY3RpdmVTbGlkZUVsIiwiYWN0aXZlU2xpZGVIYXNoIiwibmV3SW5kZXgiLCJzZXRIYXNoIiwicnVubmluZyIsInBhdXNlZCIsInRpbWVMZWZ0Iiwid2FpdEZvclRyYW5zaXRpb24iLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInN0b3BPbkxhc3RTbGlkZSIsInJldmVyc2VEaXJlY3Rpb24iLCJwYXVzZU9uTW91c2VFbnRlciIsInJhZiIsImF1dG9wbGF5RGVsYXlUb3RhbCIsImF1dG9wbGF5RGVsYXlDdXJyZW50IiwiYXV0b3BsYXlUaW1lTGVmdCIsImF1dG9wbGF5U3RhcnRUaW1lIiwid2FzUGF1c2VkIiwicGF1c2VkQnlUb3VjaCIsInRvdWNoU3RhcnRUaW1lb3V0Iiwic2xpZGVDaGFuZ2VkIiwicGF1c2VkQnlJbnRlcmFjdGlvbiIsInJlc3VtZSIsImNhbGNUaW1lTGVmdCIsImdldFNsaWRlRGVsYXkiLCJjdXJyZW50U2xpZGVEZWxheSIsInJ1biIsImRlbGF5Rm9yY2UiLCJwcm9jZWVkIiwic3RhcnQiLCJwYXVzZSIsImludGVybmFsIiwicmVzZXQiLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJ2aXNpYmlsaXR5U3RhdGUiLCJvblBvaW50ZXJFbnRlciIsIm9uUG9pbnRlckxlYXZlIiwiYXR0YWNoTW91c2VFdmVudHMiLCJkZXRhY2hNb3VzZUV2ZW50cyIsImF0dGFjaERvY3VtZW50RXZlbnRzIiwiZGV0YWNoRG9jdW1lbnRFdmVudHMiLCJ0aHVtYnMiLCJtdWx0aXBsZUFjdGl2ZVRodW1icyIsImF1dG9TY3JvbGxPZmZzZXQiLCJzbGlkZVRodW1iQWN0aXZlQ2xhc3MiLCJ0aHVtYnNDb250YWluZXJDbGFzcyIsInN3aXBlckNyZWF0ZWQiLCJvblRodW1iQ2xpY2siLCJ0aHVtYnNTd2lwZXIiLCJjbGlja2VkSW5kZXgiLCJjbGlja2VkU2xpZGUiLCJzbGlkZVRvSW5kZXgiLCJ0aHVtYnNQYXJhbXMiLCJTd2lwZXJDbGFzcyIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJ0aHVtYnNTd2lwZXJQYXJhbXMiLCJpbml0aWFsIiwidGh1bWJzVG9BY3RpdmF0ZSIsInRodW1iQWN0aXZlQ2xhc3MiLCJ1c2VPZmZzZXQiLCJjdXJyZW50VGh1bWJzSW5kZXgiLCJuZXdUaHVtYnNJbmRleCIsIm5ld1RodW1ic1NsaWRlIiwidmlzaWJsZVNsaWRlc0luZGV4ZXMiLCJnZXRUaHVtYnNFbGVtZW50QW5kSW5pdCIsInRodW1ic0VsZW1lbnQiLCJvblRodW1ic1N3aXBlciIsIndhdGNoRm9yVGh1bWJzVG9BcHBlYXIiLCJvbmNlIiwibW9tZW50dW0iLCJtb21lbnR1bVJhdGlvIiwibW9tZW50dW1Cb3VuY2UiLCJtb21lbnR1bUJvdW5jZVJhdGlvIiwibW9tZW50dW1WZWxvY2l0eVJhdGlvIiwibWluaW11bVZlbG9jaXR5IiwidG91Y2hFdmVudHNEYXRhIiwidmVsb2NpdGllcyIsImN1cnJlbnRQb3MiLCJ0b3VjaGVzIiwidG91Y2hTdGFydFRpbWUiLCJfcmVmMiIsInRvdWNoRW5kVGltZSIsInRpbWVEaWZmIiwibGFzdE1vdmVFdmVudCIsInBvcCIsInZlbG9jaXR5RXZlbnQiLCJtb21lbnR1bURpc3RhbmNlIiwibmV3UG9zaXRpb24iLCJkb0JvdW5jZSIsImFmdGVyQm91bmNlUG9zaXRpb24iLCJib3VuY2VBbW91bnQiLCJuZWVkc0xvb3BGaXgiLCJhbGxvd01vbWVudHVtQm91bmNlIiwibmV4dFNsaWRlIiwiaiIsInN3aXBlRGlyZWN0aW9uIiwibW92ZURpc3RhbmNlIiwiY3VycmVudFNsaWRlU2l6ZSIsInNsaWRlc1NpemVzR3JpZCIsImxvbmdTd2lwZXNNcyIsImdyaWQiLCJyb3dzIiwiZmlsbCIsInNsaWRlc051bWJlckV2ZW5Ub1Jvd3MiLCJzbGlkZXNQZXJSb3ciLCJudW1GdWxsQ29sdW1ucyIsIndhc011bHRpUm93IiwiZ2V0U3BhY2VCZXR3ZWVuIiwic3BhY2VCZXR3ZWVuIiwidXBkYXRlU2xpZGUiLCJnZXREaXJlY3Rpb25MYWJlbCIsIm5ld1NsaWRlT3JkZXJJbmRleCIsImNvbHVtbiIsInJvdyIsImdyb3VwSW5kZXgiLCJzbGlkZUluZGV4SW5Hcm91cCIsImNvbHVtbnNJbkdyb3VwIiwib3JkZXIiLCJ1cGRhdGVXcmFwcGVyU2l6ZSIsInNsaWRlU2l6ZSIsInJvdW5kTGVuZ3RocyIsIm5ld1NsaWRlc0dyaWQiLCJzbGlkZXNHcmlkSXRlbSIsIm9uSW5pdCIsIm9uVXBkYXRlIiwiaXNNdWx0aVJvdyIsImVtaXRDb250YWluZXJDbGFzc2VzIiwibG9vcERlc3Ryb3kiLCJhcHBlbmRFbGVtZW50IiwicmVjYWxjU2xpZGVzIiwibG9vcENyZWF0ZSIsIm9ic2VydmVyIiwicHJlcGVuZEVsZW1lbnQiLCJhZGRTbGlkZSIsImFjdGl2ZUluZGV4QnVmZmVyIiwiYmFzZUxlbmd0aCIsInNsaWRlc0J1ZmZlciIsImN1cnJlbnRTbGlkZSIsImluZGV4VG9SZW1vdmUiLCJiaW5kIiwiZWZmZWN0SW5pdCIsImVmZmVjdCIsIm92ZXJ3cml0ZVBhcmFtcyIsInBlcnNwZWN0aXZlIiwicmVjcmVhdGVTaGFkb3dzIiwiZ2V0RWZmZWN0UGFyYW1zIiwib3ZlcndyaXRlUGFyYW1zUmVzdWx0Iiwic2xpZGVTaGFkb3dzIiwic2hhZG93RWwiLCJyZXF1aXJlVXBkYXRlT25WaXJ0dWFsIiwiZWZmZWN0VGFyZ2V0IiwiZWZmZWN0UGFyYW1zIiwidHJhbnNmb3JtRWwiLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJlZmZlY3RWaXJ0dWFsVHJhbnNpdGlvbkVuZCIsInRyYW5zZm9ybUVsZW1lbnRzIiwiYWxsU2xpZGVzIiwiZ2V0U2xpZGUiLCJwYXJlbnROb2RlIiwidmlydHVhbFRyYW5zbGF0ZSIsImV2ZW50VHJpZ2dlcmVkIiwidHJhbnNpdGlvbkVuZFRhcmdldCIsImV2dCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50IiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsInN3aXBlclNsaWRlT2Zmc2V0IiwidHgiLCJ0eSIsInNsaWRlT3BhY2l0eSIsImN1YmVFZmZlY3QiLCJzaGFkb3ciLCJzaGFkb3dPZmZzZXQiLCJzaGFkb3dTY2FsZSIsImNyZWF0ZVNsaWRlU2hhZG93cyIsInNoYWRvd0JlZm9yZSIsInNoYWRvd0FmdGVyIiwic3dpcGVyU2l6ZSIsImJyb3dzZXIiLCJpc1ZpcnR1YWwiLCJ3cmFwcGVyUm90YXRlIiwiY3ViZVNoYWRvd0VsIiwic2xpZGVBbmdsZSIsInR6IiwidHJhbnNmb3JtT3JpZ2luIiwic2hhZG93QW5nbGUiLCJzaW4iLCJzY2FsZTEiLCJzY2FsZTIiLCJ6RmFjdG9yIiwiaXNTYWZhcmkiLCJpc1dlYlZpZXciLCJuZWVkUGVyc3BlY3RpdmVGaXgiLCJyZXNpc3RhbmNlUmF0aW8iLCJjcmVhdGVTaGFkb3ciLCJzaGFkb3dDbGFzcyIsInNoYWRvd0NvbnRhaW5lciIsImZsaXBFZmZlY3QiLCJsaW1pdFJvdGF0aW9uIiwicm90YXRlWSIsInJvdGF0ZVgiLCJ6SW5kZXgiLCJjb3ZlcmZsb3dFZmZlY3QiLCJzdHJldGNoIiwiZGVwdGgiLCJtb2RpZmllciIsImNlbnRlciIsInNsaWRlT2Zmc2V0IiwiY2VudGVyT2Zmc2V0Iiwib2Zmc2V0TXVsdGlwbGllciIsInRyYW5zbGF0ZVoiLCJzbGlkZVRyYW5zZm9ybSIsInNoYWRvd0JlZm9yZUVsIiwic2hhZG93QWZ0ZXJFbCIsImNyZWF0aXZlRWZmZWN0IiwibGltaXRQcm9ncmVzcyIsInNoYWRvd1BlclByb2dyZXNzIiwicHJvZ3Jlc3NNdWx0aXBsaWVyIiwiZ2V0VHJhbnNsYXRlVmFsdWUiLCJpc0NlbnRlcmVkU2xpZGVzIiwibWFyZ2luIiwib3JpZ2luYWxQcm9ncmVzcyIsInQiLCJyIiwiY3VzdG9tIiwidHJhbnNsYXRlU3RyaW5nIiwicm90YXRlU3RyaW5nIiwic2NhbGVTdHJpbmciLCJvcGFjaXR5U3RyaW5nIiwic2hhZG93T3BhY2l0eSIsImNhcmRzRWZmZWN0IiwicGVyU2xpZGVSb3RhdGUiLCJwZXJTbGlkZU9mZnNldCIsInN0YXJ0VHJhbnNsYXRlIiwiY3VycmVudFRyYW5zbGF0ZSIsInRYIiwidFkiLCJ0WiIsInRYQWRkIiwiaXNTd2lwZVRvTmV4dCIsImlzU3dpcGVUb1ByZXYiLCJzdWJQcm9ncmVzcyIsInByZXZZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFBQTtBQUFBQyxRQUFBLENBQUFELHNCQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUE3QixzQkFBQTs7O0FDWUEsU0FBUzhCLFNBQVNDLEdBQUEsRUFBSztFQUNyQixPQUFPQSxHQUFBLEtBQVEsUUFBUSxPQUFPQSxH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