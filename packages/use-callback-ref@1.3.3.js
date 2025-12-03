System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["use-callback-ref","1.3.3"],["react","18.3.1"]]);
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

// .beyond/uimport/temp/use-callback-ref.1.3.3.js
var use_callback_ref_1_3_3_exports = {};
__export(use_callback_ref_1_3_3_exports, {
  assignRef: () => assignRef,
  createCallbackRef: () => createCallbackRef,
  mergeRefs: () => mergeRefs,
  refToCallback: () => refToCallback,
  transformRef: () => transformRef,
  useCallbackRef: () => useCallbackRef,
  useMergeRefs: () => useMergeRefs,
  useRefToCallback: () => useRefToCallback,
  useTransformRef: () => useTransformRef
});
module.exports = __toCommonJS(use_callback_ref_1_3_3_exports);

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = require("react@18.3.1");
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react.useState)(function () {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/createRef.js
function createCallbackRef(callback) {
  var current = null;
  return {
    get current() {
      return current;
    },
    set current(value) {
      var last = current;
      if (last !== value) {
        current = value;
        callback(value, last);
      }
    }
  };
}

// node_modules/use-callback-ref/dist/es2015/mergeRef.js
function mergeRefs(refs) {
  return createCallbackRef(function (newValue) {
    return refs.forEach(function (ref) {
      return assignRef(ref, newValue);
    });
  });
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require("react@18.3.1"));
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function (newValue) {
    return refs.forEach(function (ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function () {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function (ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function (ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-callback-ref/dist/es2015/useTransformRef.js
function useTransformRef(ref, transformer) {
  return useCallbackRef(null, function (value) {
    return assignRef(ref, transformer(value));
  });
}

// node_modules/use-callback-ref/dist/es2015/transformRef.js
function transformRef(ref, transformer) {
  return createCallbackRef(function (value) {
    return assignRef(ref, transformer(value));
  });
}

// node_modules/use-callback-ref/dist/es2015/refToCallback.js
function refToCallback(ref) {
  return function (newValue) {
    if (typeof ref === "function") {
      ref(newValue);
    } else if (ref) {
      ref.current = newValue;
    }
  };
}
var nullCallback = function () {
  return null;
};
var weakMem = /* @__PURE__ */new WeakMap();
var weakMemoize = function (ref) {
  var usedRef = ref || nullCallback;
  var storedRef = weakMem.get(usedRef);
  if (storedRef) {
    return storedRef;
  }
  var cb = refToCallback(usedRef);
  weakMem.set(usedRef, cb);
  return cb;
};
function useRefToCallback(ref) {
  return weakMemoize(ref);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3VzZS1jYWxsYmFjay1yZWYuMS4zLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9hc3NpZ25SZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VSZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9jcmVhdGVSZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9tZXJnZVJlZi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3VzZU1lcmdlUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdXNlVHJhbnNmb3JtUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdHJhbnNmb3JtUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvcmVmVG9DYWxsYmFjay5qcyJdLCJuYW1lcyI6WyJ1c2VfY2FsbGJhY2tfcmVmXzFfM18zX2V4cG9ydHMiLCJfX2V4cG9ydCIsImFzc2lnblJlZiIsImNyZWF0ZUNhbGxiYWNrUmVmIiwibWVyZ2VSZWZzIiwicmVmVG9DYWxsYmFjayIsInRyYW5zZm9ybVJlZiIsInVzZUNhbGxiYWNrUmVmIiwidXNlTWVyZ2VSZWZzIiwidXNlUmVmVG9DYWxsYmFjayIsInVzZVRyYW5zZm9ybVJlZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJyZWYiLCJ2YWx1ZSIsImN1cnJlbnQiLCJpbXBvcnRfcmVhY3QiLCJyZXF1aXJlIiwiaW5pdGlhbFZhbHVlIiwiY2FsbGJhY2siLCJ1c2VTdGF0ZSIsImZhY2FkZSIsImxhc3QiLCJyZWZzIiwibmV3VmFsdWUiLCJmb3JFYWNoIiwiUmVhY3QiLCJfX3RvRVNNIiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsIndpbmRvdyIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsImN1cnJlbnRWYWx1ZXMiLCJXZWFrTWFwIiwiZGVmYXVsdFZhbHVlIiwiY2FsbGJhY2tSZWYiLCJvbGRWYWx1ZSIsImdldCIsInByZXZSZWZzXzEiLCJTZXQiLCJuZXh0UmVmc18xIiwiY3VycmVudF8xIiwiaGFzIiwic2V0IiwidHJhbnNmb3JtZXIiLCJudWxsQ2FsbGJhY2siLCJ3ZWFrTWVtIiwid2Vha01lbW9pemUiLCJ1c2VkUmVmIiwic3RvcmVkUmVmIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWIsOEJBQUE7OztBQ2FPLFNBQVNFLFVBQVVZLEdBQUEsRUFBS0MsS0FBQSxFQUFPO0VBQ2xDLElBQUksT0FBT0QsR0FBQSxLQUFRLFlBQVk7SUFDM0JBLEdBQUEsQ0FBSUMsS0FBSztFQUNiLFdBQ1NELEdBQUEsRUFBSztJQUNWQSxHQUFB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Q0FBV2YsT0FBQSxDQUFRLFVBQVVaLEdBQUEsRUFBSztRQUM5QixJQUFJLENBQUN5QixVQUFBLENBQVdJLEdBQUEsQ0FBSTdCLEdBQUcsR0FBRztVQUN0QlosU0FBQSxDQUFVWSxHQUFBLEVBQUs0QixTQUFTO1FBQzVCO01BQ0osQ0FBQztJQUNMO0lBQ0FULGFBQUEsQ0FBY1csR0FBQSxDQUFJUixXQUFBLEVBQWFaLElBQUk7RUFDdkMsR0FBRyxDQUFDQSxJQUFJLENBQUM7RUFDVCxPQUFPWSxXQUFBO0FBQ1g7OztBQzdCTyxTQUFTMUIsZ0JBQWdCSSxHQUFBLEVBQUsrQixXQUFBLEVBQWE7RUFDOUMsT0FBT3RDLGNBQUEsQ0FBZSxNQUFNLFVBQVVRLEtBQUEsRUFBTztJQUFFLE9BQU9iLFNBQUEsQ0FBVVksR0FBQSxFQUFLK0IsV0FBQSxDQUFZOUIsS0FBSyxDQUFDO0VBQUcsQ0FBQztBQUMvRjs7O0FDTk8sU0FBU1QsYUFBYVEsR0FBQSxFQUFLK0IsV0FBQSxFQUFhO0VBQzNDLE9BQU8xQyxpQkFBQSxDQUFrQixVQUFVWSxLQUFBLEVBQU87SUFBRSxPQUFPYixTQUFBLENBQVVZLEdBQUEsRUFBSytCLFdBQUEsQ0FBWTlCLEtBQUssQ0FBQztFQUFHLENBQUM7QUFDNUY7OztBQ1JPLFNBQVNWLGNBQWNTLEdBQUEsRUFBSztFQUMvQixPQUFPLFVBQVVXLFFBQUEsRUFBVTtJQUN2QixJQUFJLE9BQU9YLEdBQUEsS0FBUSxZQUFZO01BQzNCQSxHQUFBLENBQUlXLFFBQVE7SUFDaEIsV0FDU1gsR0FBQSxFQUFLO01BQ1ZBLEdBQUEsQ0FBSUUsT0FBQSxHQUFVUyxRQUFBO0lBQ2xCO0VBQ0o7QUFDSjtBQUNBLElBQUlxQixZQUFBLEdBQWUsU0FBQUEsQ0FBQSxFQUFZO0VBQUUsT0FBTztBQUFNO0FBRzlDLElBQUlDLE9BQUEsR0FBVSxtQkFBSWIsT0FBQSxDQUFRO0FBQzFCLElBQUljLFdBQUEsR0FBYyxTQUFBQSxDQUFVbEMsR0FBQSxFQUFLO0VBQzdCLElBQUltQyxPQUFBLEdBQVVuQyxHQUFBLElBQU9nQyxZQUFBO0VBQ3JCLElBQUlJLFNBQUEsR0FBWUgsT0FBQSxDQUFRVCxHQUFBLENBQUlXLE9BQU87RUFDbkMsSUFBSUMsU0FBQSxFQUFXO0lBQ1gsT0FBT0EsU0FBQTtFQUNYO0VBQ0EsSUFBSUMsRUFBQSxHQUFLOUMsYUFBQSxDQUFjNEMsT0FBTztFQUM5QkYsT0FBQSxDQUFRSCxHQUFBLENBQUlLLE9BQUEsRUFBU0UsRUFBRTtFQUN2QixPQUFPQSxFQUFBO0FBQ1g7QUFpQk8sU0FBUzFDLGlCQUFpQkssR0FBQSxFQUFLO0VBQ2xDLE9BQU9rQyxXQUFBLENBQVlsQyxHQUFHO0FBQzFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==