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

// .beyond/uimport/use-sync-external-store/shim/with-selector.1.5.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vd2l0aC1zZWxlY3Rvci5qcyIsIi4uLy5iZXlvbmQvdWltcG9ydC91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3IuMS41LjAuanMiXSwibmFtZXMiOlsicmVxdWlyZV93aXRoX3NlbGVjdG9yX2RldmVsb3BtZW50IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwiZXhwb3J0cyIsImlzIiwieCIsInkiLCJfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJyZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQiLCJFcnJvciIsIlJlYWN0IiwicmVxdWlyZSIsInNoaW0iLCJvYmplY3RJcyIsIk9iamVjdCIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZURlYnVnVmFsdWUiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciIsInN1YnNjcmliZSIsImdldFNuYXBzaG90IiwiZ2V0U2VydmVyU25hcHNob3QiLCJzZWxlY3RvciIsImlzRXF1YWwiLCJpbnN0UmVmIiwiY3VycmVudCIsImluc3QiLCJoYXNWYWx1ZSIsInZhbHVlIiwibWVtb2l6ZWRTZWxlY3RvciIsIm5leHRTbmFwc2hvdCIsImhhc01lbW8iLCJtZW1vaXplZFNuYXBzaG90IiwiY3VycmVudFNlbGVjdGlvbiIsIm1lbW9pemVkU2VsZWN0aW9uIiwibmV4dFNlbGVjdGlvbiIsIm1heWJlR2V0U2VydmVyU25hcHNob3QiLCJyZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCIsInJlcXVpcmVfd2l0aF9zZWxlY3RvciIsIm5vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3IuanMiLCJtb2R1bGUyIiwid2l0aF9zZWxlY3Rvcl8xXzVfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0Iiwid2l0aF9zZWxlY3Rvcl8xXzVfMF9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfd2l0aF9zZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxpQ0FBQSxHQUFBQyxVQUFBO0VBQUEsb0dBQUFDLENBQUFDLE9BQUE7SUFBQTs7SUFXQSxDQUNHLFlBQVk7TUFDWCxTQUFTQyxHQUFHQyxDQUFBLEVBQUdDLENBQUEsRUFBRztRQUNoQixPQUFRRCxDQUFBLEtBQU1DLENBQUEsS0FBTSxNQUFNRCxDQUFBLElBQUssSUFBSUEsQ0FBQSxLQUFNLElBQUlDLENBQUEsS0FBUUQsQ0FBQSxLQUFNQSxDQUFBLElBQUtDLENBQUEsS0FBTUEsQ0FBQTtNQUN4RTtNQUNBLGdCQUFnQixPQUFPQyw4QkFBQSxJQUNyQixlQUNFLE9BQU9BLDhCQUFBLENBQStCQywyQkFBQSxJQUN4Q0QsOEJBQUEsQ0FBK0JDLDJCQUFBLENBQTRCQyxLQUFBLENBQU0sQ0FBQztNQUNwRSxJQUFJQyxLQUFBLEdBQVFDLE9BQUEsQ0FBUSxjQUFPO1FBQ3pCQyxJQUFBLEdBQU9ELE9BQUEsQ0FBUSxvQ0FBOEI7UUFDN0NFLFFBQUEsR0FBVyxlQUFlLE9BQU9DLE1BQUEsQ0FBT1YsRUFBQSxHQUFLVSxNQUFBLENBQU9WLEVBQUEsR0FBS0EsRUFBQTtRQUN6RFcsb0JBQUEsR0FBdUJILElBQUEsQ0FBS0csb0JB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LFVBQUE7RUFBQSw0REFBQXdDLENBQUF0QyxPQUFBLEVBQUF1QyxPQUFBO0lBQUE7O0lBRUEsSUFBSSxPQUF1QztNQUN6Q0EsT0FBQSxDQUFPdkMsT0FBQSxHQUFVO0lBQ25CLE9BQU87TUFDTHVDLE9BQUEsQ0FBT3ZDLE9BQUEsR0FBVUgsaUNBQUE7SUFDbkI7RUFBQTtBQUFBOzs7QUNOQSxJQUFBMkMsMkJBQUE7QUFBQUMsUUFBQSxDQUFBRCwyQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUE1QyxPQUFBLEdBQUE2QyxZQUFBLENBQUFMLDJCQUFBO0FBQUFNLFVBQUEsQ0FBQU4sMkJBQUEsRUFBY08sT0FBQSxDQUFBVixxQkFBQSxLQUFkTyxNQUFBLENBQUE1QyxPQUFBO0FBRUEsSUFBQWdELG9CQUFBLEdBQXFCRCxPQUFBLENBQUFWLHFCQUFBO0FBQ3JCLElBQU9NLDJCQUFBLEdBQVFLLG9CQUFBLENBQUFOLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9