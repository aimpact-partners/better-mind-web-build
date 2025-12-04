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

// .beyond/uimport/use-callback-ref.1.3.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC91c2UtY2FsbGJhY2stcmVmLjEuMy4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvYXNzaWduUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdXNlUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvY3JlYXRlUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvbWVyZ2VSZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VNZXJnZVJlZi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3VzZVRyYW5zZm9ybVJlZi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3RyYW5zZm9ybVJlZi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3JlZlRvQ2FsbGJhY2suanMiXSwibmFtZXMiOlsidXNlX2NhbGxiYWNrX3JlZl8xXzNfM19leHBvcnRzIiwiX19leHBvcnQiLCJhc3NpZ25SZWYiLCJjcmVhdGVDYWxsYmFja1JlZiIsIm1lcmdlUmVmcyIsInJlZlRvQ2FsbGJhY2siLCJ0cmFuc2Zvcm1SZWYiLCJ1c2VDYWxsYmFja1JlZiIsInVzZU1lcmdlUmVmcyIsInVzZVJlZlRvQ2FsbGJhY2siLCJ1c2VUcmFuc2Zvcm1SZWYiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwicmVmIiwidmFsdWUiLCJjdXJyZW50IiwiaW1wb3J0X3JlYWN0IiwicmVxdWlyZSIsImluaXRpYWxWYWx1ZSIsImNhbGxiYWNrIiwidXNlU3RhdGUiLCJmYWNhZGUiLCJsYXN0IiwicmVmcyIsIm5ld1ZhbHVlIiwiZm9yRWFjaCIsIlJlYWN0IiwiX190b0VTTSIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ3aW5kb3ciLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJjdXJyZW50VmFsdWVzIiwiV2Vha01hcCIsImRlZmF1bHRWYWx1ZSIsImNhbGxiYWNrUmVmIiwib2xkVmFsdWUiLCJnZXQiLCJwcmV2UmVmc18xIiwiU2V0IiwibmV4dFJlZnNfMSIsImN1cnJlbnRfMSIsImhhcyIsInNldCIsInRyYW5zZm9ybWVyIiwibnVsbENhbGxiYWNrIiwid2Vha01lbSIsIndlYWtNZW1vaXplIiwidXNlZFJlZiIsInN0b3JlZFJlZiIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFiLDhCQUFBOzs7QUNhTyxTQUFTRSxVQUFVWSxHQUFBLEVBQUtDLEtBQUEsRUFBTztFQUNsQyxJQUFJLE9BQU9ELEdBQUEsS0FBUSxZQUFZO0lBQzNCQSxHQUFBLENBQUlDLEtBQUs7RUFDYixXQUNTRCxHQUFBLEVBQUs7SUFDVkEsR0FBQSxDQUFJ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LE9BQUEsQ0FBUSxVQUFVWixHQUFBLEVBQUs7UUFDOUIsSUFBSSxDQUFDeUIsVUFBQSxDQUFXSSxHQUFBLENBQUk3QixHQUFHLEdBQUc7VUFDdEJaLFNBQUEsQ0FBVVksR0FBQSxFQUFLNEIsU0FBUztRQUM1QjtNQUNKLENBQUM7SUFDTDtJQUNBVCxhQUFBLENBQWNXLEdBQUEsQ0FBSVIsV0FBQSxFQUFhWixJQUFJO0VBQ3ZDLEdBQUcsQ0FBQ0EsSUFBSSxDQUFDO0VBQ1QsT0FBT1ksV0FBQTtBQUNYOzs7QUM3Qk8sU0FBUzFCLGdCQUFnQkksR0FBQSxFQUFLK0IsV0FBQSxFQUFhO0VBQzlDLE9BQU90QyxjQUFBLENBQWUsTUFBTSxVQUFVUSxLQUFBLEVBQU87SUFBRSxPQUFPYixTQUFBLENBQVVZLEdBQUEsRUFBSytCLFdBQUEsQ0FBWTlCLEtBQUssQ0FBQztFQUFHLENBQUM7QUFDL0Y7OztBQ05PLFNBQVNULGFBQWFRLEdBQUEsRUFBSytCLFdBQUEsRUFBYTtFQUMzQyxPQUFPMUMsaUJBQUEsQ0FBa0IsVUFBVVksS0FBQSxFQUFPO0lBQUUsT0FBT2IsU0FBQSxDQUFVWSxHQUFBLEVBQUsrQixXQUFBLENBQVk5QixLQUFLLENBQUM7RUFBRyxDQUFDO0FBQzVGOzs7QUNSTyxTQUFTVixjQUFjUyxHQUFBLEVBQUs7RUFDL0IsT0FBTyxVQUFVVyxRQUFBLEVBQVU7SUFDdkIsSUFBSSxPQUFPWCxHQUFBLEtBQVEsWUFBWTtNQUMzQkEsR0FBQSxDQUFJVyxRQUFRO0lBQ2hCLFdBQ1NYLEdBQUEsRUFBSztNQUNWQSxHQUFBLENBQUlFLE9BQUEsR0FBVVMsUUFBQTtJQUNsQjtFQUNKO0FBQ0o7QUFDQSxJQUFJcUIsWUFBQSxHQUFlLFNBQUFBLENBQUEsRUFBWTtFQUFFLE9BQU87QUFBTTtBQUc5QyxJQUFJQyxPQUFBLEdBQVUsbUJBQUliLE9BQUEsQ0FBUTtBQUMxQixJQUFJYyxXQUFBLEdBQWMsU0FBQUEsQ0FBVWxDLEdBQUEsRUFBSztFQUM3QixJQUFJbUMsT0FBQSxHQUFVbkMsR0FBQSxJQUFPZ0MsWUFBQTtFQUNyQixJQUFJSSxTQUFBLEdBQVlILE9BQUEsQ0FBUVQsR0FBQSxDQUFJVyxPQUFPO0VBQ25DLElBQUlDLFNBQUEsRUFBVztJQUNYLE9BQU9BLFNBQUE7RUFDWDtFQUNBLElBQUlDLEVBQUEsR0FBSzlDLGFBQUEsQ0FBYzRDLE9BQU87RUFDOUJGLE9BQUEsQ0FBUUgsR0FBQSxDQUFJSyxPQUFBLEVBQVNFLEVBQUU7RUFDdkIsT0FBT0EsRUFBQTtBQUNYO0FBaUJPLFNBQVMxQyxpQkFBaUJLLEdBQUEsRUFBSztFQUNsQyxPQUFPa0MsV0FBQSxDQUFZbEMsR0FBRztBQUMxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=