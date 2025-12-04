System.register(["@floating-ui/utils@0.2.10","@floating-ui/core@1.7.3","@floating-ui/utils@0.2.10/dom","@floating-ui/dom@1.7.3","react@18.3.1","scheduler@0.23.2","react-dom@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.10"],["@floating-ui/core","1.7.3"],["@floating-ui/dom","1.7.3"],["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@floating-ui/react-dom","2.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@floating-ui/utils@0.2.10', dep), dep => dependencies.set('@floating-ui/core@1.7.3', dep), dep => dependencies.set('@floating-ui/utils@0.2.10/dom', dep), dep => dependencies.set('@floating-ui/dom@1.7.3', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep)],
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

// .beyond/uimport/@floating-ui/react-dom.2.1.5.js
var react_dom_2_1_5_exports = {};
__export(react_dom_2_1_5_exports, {
  arrow: () => arrow,
  autoPlacement: () => autoPlacement,
  autoUpdate: () => import_dom2.autoUpdate,
  computePosition: () => import_dom2.computePosition,
  detectOverflow: () => import_dom2.detectOverflow,
  flip: () => flip,
  getOverflowAncestors: () => import_dom2.getOverflowAncestors,
  hide: () => hide,
  inline: () => inline,
  limitShift: () => limitShift,
  offset: () => offset,
  platform: () => import_dom2.platform,
  shift: () => shift,
  size: () => size,
  useFloating: () => useFloating
});
module.exports = __toCommonJS(react_dom_2_1_5_exports);

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var import_dom = require("@floating-ui/dom@1.7.3");
var import_dom2 = require("@floating-ui/dom@1.7.3");
var React = __toESM(require("react@18.3.1"), 0);
var import_react = require("react@18.3.1");
var ReactDOM = __toESM(require("react-dom@18.3.1"), 0);
var isClient = typeof document !== "undefined";
var noop = function noop2() {};
var index = isClient ? import_react.useLayoutEffect : noop;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    (0, import_dom.computePosition)(referenceRef.current, floatingRef.current, config).then(data2 => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data2 => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return (0, import_dom.arrow)({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return (0, import_dom.arrow)({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset = (options, deps) => ({
  ...(0, import_dom.offset)(options),
  options: [options, deps]
});
var shift = (options, deps) => ({
  ...(0, import_dom.shift)(options),
  options: [options, deps]
});
var limitShift = (options, deps) => ({
  ...(0, import_dom.limitShift)(options),
  options: [options, deps]
});
var flip = (options, deps) => ({
  ...(0, import_dom.flip)(options),
  options: [options, deps]
});
var size = (options, deps) => ({
  ...(0, import_dom.size)(options),
  options: [options, deps]
});
var autoPlacement = (options, deps) => ({
  ...(0, import_dom.autoPlacement)(options),
  options: [options, deps]
});
var hide = (options, deps) => ({
  ...(0, import_dom.hide)(options),
  options: [options, deps]
});
var inline = (options, deps) => ({
  ...(0, import_dom.inline)(options),
  options: [options, deps]
});
var arrow = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmxvYXRpbmctdWkvcmVhY3QtZG9tLjIuMS41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9yZWFjdC1kb20vZGlzdC9mbG9hdGluZy11aS5yZWFjdC1kb20ubWpzIl0sIm5hbWVzIjpbInJlYWN0X2RvbV8yXzFfNV9leHBvcnRzIiwiX19leHBvcnQiLCJhcnJvdyIsImF1dG9QbGFjZW1lbnQiLCJhdXRvVXBkYXRlIiwiaW1wb3J0X2RvbTIiLCJjb21wdXRlUG9zaXRpb24iLCJkZXRlY3RPdmVyZmxvdyIsImZsaXAiLCJnZXRPdmVyZmxvd0FuY2VzdG9ycyIsImhpZGUiLCJpbmxpbmUiLCJsaW1pdFNoaWZ0Iiwib2Zmc2V0IiwicGxhdGZvcm0iLCJzaGlmdCIsInNpemUiLCJ1c2VGbG9hdGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZG9tIiwicmVxdWlyZSIsIlJlYWN0IiwiX190b0VTTSIsImltcG9ydF9yZWFjdCIsIlJlYWN0RE9NIiwiaXNDbGllbnQiLCJkb2N1bWVudCIsIm5vb3AiLCJub29wMiIsImluZGV4IiwidXNlTGF5b3V0RWZmZWN0IiwiZGVlcEVxdWFsIiwiYSIsImIiLCJ0b1N0cmluZyIsImxlbmd0aCIsImkiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwia2V5IiwiJCR0eXBlb2YiLCJnZXREUFIiLCJlbGVtZW50Iiwid2luZG93Iiwid2luIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInJvdW5kQnlEUFIiLCJ2YWx1ZSIsImRwciIsIk1hdGgiLCJyb3VuZCIsInVzZUxhdGVzdFJlZiIsInJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJvcHRpb25zIiwicGxhY2VtZW50Iiwic3RyYXRlZ3kiLCJtaWRkbGV3YXJlIiwicGxhdGZvcm0yIiwiZWxlbWVudHMiLCJyZWZlcmVuY2UiLCJleHRlcm5hbFJlZmVyZW5jZSIsImZsb2F0aW5nIiwiZXh0ZXJuYWxGbG9hdGluZyIsInRyYW5zZm9ybSIsIndoaWxlRWxlbWVudHNNb3VudGVkIiwib3BlbiIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ4IiwieSIsIm1pZGRsZXdhcmVEYXRhIiwiaXNQb3NpdGlvbmVkIiwibGF0ZXN0TWlkZGxld2FyZSIsInNldExhdGVzdE1pZGRsZXdhcmUiLCJfcmVmZXJlbmNlIiwiX3NldFJlZmVyZW5jZSIsIl9mbG9hdGluZyIsIl9zZXRGbG9hdGluZyIsInNldFJlZmVyZW5jZSIsInVzZUNhbGxiYWNrIiwibm9kZSIsInJlZmVyZW5jZVJlZiIsInNldEZsb2F0aW5nIiwiZmxvYXRpbmdSZWYiLCJyZWZlcmVuY2VFbCIsImZsb2F0aW5nRWwiLCJkYXRhUmVmIiwiaGFzV2hpbGVFbGVtZW50c01vdW50ZWQiLCJ3aGlsZUVsZW1lbnRzTW91bnRlZFJlZiIsInBsYXRmb3JtUmVmIiwib3BlblJlZiIsInVwZGF0ZSIsImNvbmZpZyIsInRoZW4iLCJkYXRhMiIsImZ1bGxEYXRhIiwiaXNNb3VudGVkUmVmIiwiZmx1c2hTeW5jIiwicmVmcyIsInVzZU1lbW8iLCJmbG9hdGluZ1N0eWxlcyIsImluaXRpYWxTdHlsZXMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJ3aWxsQ2hhbmdlIiwiYXJyb3ckMSIsImlzUmVmIiwibmFtZSIsImZuIiwic3RhdGUiLCJwYWRkaW5nIiwiZGVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx1QkFBQTtBQUFBQyxRQUFBLENBQUFELHVCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBLENBQUFELFVBQUE7RUFB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akJBLE9BQUEsRUFBUyxDQUFDQSxPQUFBLEVBQVM0RCxJQUFJO0FBQ3pCO0FBUUEsSUFBTXhILGFBQUEsR0FBZ0JBLENBQUM0RCxPQUFBLEVBQVM0RCxJQUFBLE1BQVU7RUFDeEMsT0FBR3RHLFVBQUEsQ0FBQWxCLGFBQUEsRUFBZ0I0RCxPQUFPO0VBQzFCQSxPQUFBLEVBQVMsQ0FBQ0EsT0FBQSxFQUFTNEQsSUFBSTtBQUN6QjtBQU9BLElBQU1qSCxJQUFBLEdBQU9BLENBQUNxRCxPQUFBLEVBQVM0RCxJQUFBLE1BQVU7RUFDL0IsT0FBR3RHLFVBQUEsQ0FBQVgsSUFBQSxFQUFPcUQsT0FBTztFQUNqQkEsT0FBQSxFQUFTLENBQUNBLE9BQUEsRUFBUzRELElBQUk7QUFDekI7QUFPQSxJQUFNaEgsTUFBQSxHQUFTQSxDQUFDb0QsT0FBQSxFQUFTNEQsSUFBQSxNQUFVO0VBQ2pDLE9BQUd0RyxVQUFBLENBQUFWLE1BQUEsRUFBU29ELE9BQU87RUFDbkJBLE9BQUEsRUFBUyxDQUFDQSxPQUFBLEVBQVM0RCxJQUFJO0FBQ3pCO0FBUUEsSUFBTXpILEtBQUEsR0FBUUEsQ0FBQzZELE9BQUEsRUFBUzRELElBQUEsTUFBVTtFQUNoQyxHQUFHTixPQUFBLENBQVF0RCxPQUFPO0VBQ2xCQSxPQUFBLEVBQVMsQ0FBQ0EsT0FBQSxFQUFTNEQsSUFBSTtBQUN6QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=