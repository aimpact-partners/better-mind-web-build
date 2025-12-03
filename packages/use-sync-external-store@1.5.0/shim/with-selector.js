System.register(["react@18.3.1","use-sync-external-store@1.5.0/shim"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["use-sync-external-store","1.5.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('use-sync-external-store@1.5.0/shim', dep)],
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
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

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";

    (function () {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require("react@18.3.1"),
        shim = require("use-sync-external-store@1.5.0/shim"),
        objectIs = "function" === typeof Object.is ? Object.is : is,
        useSyncExternalStore = shim.useSyncExternalStore,
        useRef = React.useRef,
        useEffect = React.useEffect,
        useMemo = React.useMemo,
        useDebugValue = React.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function (subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
          var inst = {
            hasValue: false,
            value: null
          };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function () {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
          }
          var hasMemo = false,
            memoizedSnapshot,
            memoizedSelection,
            maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [function () {
            return memoizedSelector(getSnapshot());
          }, null === maybeGetServerSnapshot ? void 0 : function () {
            return memoizedSelector(maybeGetServerSnapshot());
          }];
        }, [getSnapshot, getServerSnapshot, selector, isEqual]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function () {
          inst.hasValue = true;
          inst.value = value;
        }, [value]);
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_with_selector_development();
    }
  }
});

// .beyond/uimport/temp/use-sync-external-store/shim/with-selector.1.5.0.js
var with_selector_1_5_0_exports = {};
__export(with_selector_1_5_0_exports, {
  default: () => with_selector_1_5_0_default
});
module.exports = __toCommonJS(with_selector_1_5_0_exports);
__reExport(with_selector_1_5_0_exports, __toESM(require_with_selector()), module.exports);
var import_with_selector = __toESM(require_with_selector());
var with_selector_1_5_0_default = import_with_selector.default;
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vd2l0aC1zZWxlY3Rvci5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vd2l0aC1zZWxlY3Rvci4xLjUuMC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX3dpdGhfc2VsZWN0b3JfZGV2ZWxvcG1lbnQiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanMiLCJleHBvcnRzIiwiaXMiLCJ4IiwieSIsIl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCIsIkVycm9yIiwiUmVhY3QiLCJyZXF1aXJlIiwic2hpbSIsIm9iamVjdElzIiwiT2JqZWN0IiwidXNlU3luY0V4dGVybmFsU3RvcmUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlRGVidWdWYWx1ZSIsInVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIiwic3Vic2NyaWJlIiwiZ2V0U25hcHNob3QiLCJnZXRTZXJ2ZXJTbmFwc2hvdCIsInNlbGVjdG9yIiwiaXNFcXVhbCIsImluc3RSZWYiLCJjdXJyZW50IiwiaW5zdCIsImhhc1ZhbHVlIiwidmFsdWUiLCJtZW1vaXplZFNlbGVjdG9yIiwibmV4dFNuYXBzaG90IiwiaGFzTWVtbyIsIm1lbW9pemVkU25hcHNob3QiLCJjdXJyZW50U2VsZWN0aW9uIiwibWVtb2l6ZWRTZWxlY3Rpb24iLCJuZXh0U2VsZWN0aW9uIiwibWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wIiwicmVxdWlyZV93aXRoX3NlbGVjdG9yIiwibm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vd2l0aC1zZWxlY3Rvci5qcyIsIm1vZHVsZTIiLCJ3aXRoX3NlbGVjdG9yXzFfNV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ3aXRoX3NlbGVjdG9yXzFfNV8wX2RlZmF1bHQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImltcG9ydF93aXRoX3NlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGlDQUFBLEdBQUFDLFVBQUE7RUFBQSxvR0FBQUMsQ0FBQUMsT0FBQTtJQUFBOztJQVdBLENBQ0csWUFBWTtNQUNYLFNBQVNDLEdBQUdDLENBQUEsRUFBR0MsQ0FBQSxFQUFHO1FBQ2hCLE9BQVFELENBQUEsS0FBTUMsQ0FBQSxLQUFNLE1BQU1ELENBQUEsSUFBSyxJQUFJQSxDQUFBLEtBQU0sSUFBSUMsQ0FBQSxLQUFRRCxDQUFBLEtBQU1BLENBQUEsSUFBS0MsQ0FBQSxLQUFNQSxDQUFBO01BQ3hFO01BQ0EsZ0JBQWdCLE9BQU9DLDhCQUFBLElBQ3JCLGVBQ0UsT0FBT0EsOEJBQUEsQ0FBK0JDLDJCQUFBLElBQ3hDRCw4QkFBQSxDQUErQkMsMkJBQUEsQ0FBNEJDLEtBQUEsQ0FBTSxDQUFDO01BQ3BFLElBQUlDLEtBQUEsR0FBUUMsT0FBQSxDQUFRLGNBQU87UUFDekJDLElBQUEsR0FBT0QsT0FBQSxDQUFRLG9DQUE4QjtRQUM3Q0UsUUFBQSxHQUFXLGVBQWUsT0FBT0MsTUFBQSxDQUFPVixFQUFBLEdBQUtVLE1BQUEsQ0FBT1YsRUFBQSxHQUFLQSxFQUFBO1FBQ3pEVyxvQkFBQSxHQUF1QkgsSUFBQSxDQUFL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QUFBdkMsVUFBQTtFQUFBLDREQUFBd0MsQ0FBQXRDLE9BQUEsRUFBQXVDLE9BQUE7SUFBQTs7SUFFQSxJQUFJLE9BQXVDO01BQ3pDQSxPQUFBLENBQU92QyxPQUFBLEdBQVU7SUFDbkIsT0FBTztNQUNMdUMsT0FBQSxDQUFPdkMsT0FBQSxHQUFVSCxpQ0FBQTtJQUNuQjtFQUFBO0FBQUE7OztBQ05BLElBQUEyQywyQkFBQTtBQUFBQyxRQUFBLENBQUFELDJCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQTVDLE9BQUEsR0FBQTZDLFlBQUEsQ0FBQUwsMkJBQUE7QUFBQU0sVUFBQSxDQUFBTiwyQkFBQSxFQUFjTyxPQUFBLENBQUFWLHFCQUFBLEtBQWRPLE1BQUEsQ0FBQTVDLE9BQUE7QUFFQSxJQUFBZ0Qsb0JBQUEsR0FBcUJELE9BQUEsQ0FBQVYscUJBQUE7QUFDckIsSUFBT00sMkJBQUEsR0FBUUssb0JBQUEsQ0FBQU4sT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=