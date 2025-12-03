System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["use-sync-external-store","1.5.0"]]);
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

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";

    (function () {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = true, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState({
          inst: {
            value,
            getSnapshot
          }
        });
        var inst = cachedValue[0].inst,
          forceUpdate = cachedValue[1];
        useLayoutEffect(function () {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          checkIfSnapshotChanged(inst) && forceUpdate({
            inst
          });
        }, [subscribe, value, getSnapshot]);
        useEffect(function () {
          checkIfSnapshotChanged(inst) && forceUpdate({
            inst
          });
          return subscribe(function () {
            checkIfSnapshotChanged(inst) && forceUpdate({
              inst
            });
          });
        }, [subscribe]);
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require("react@18.3.1"),
        objectIs = "function" === typeof Object.is ? Object.is : is,
        useState = React.useState,
        useEffect = React.useEffect,
        useLayoutEffect = React.useLayoutEffect,
        useDebugValue = React.useDebugValue,
        didWarnOld18Alpha = false,
        didWarnUncachedGetSnapshot = false,
        shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// .beyond/uimport/temp/use-sync-external-store/shim.1.5.0.js
var shim_1_5_0_exports = {};
__export(shim_1_5_0_exports, {
  default: () => shim_1_5_0_default
});
module.exports = __toCommonJS(shim_1_5_0_exports);
__reExport(shim_1_5_0_exports, __toESM(require_shim()), module.exports);
var import_shim = __toESM(require_shim());
var shim_1_5_0_default = import_shim.default;
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL2luZGV4LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS4xLjUuMC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX3VzZV9zeW5jX2V4dGVybmFsX3N0b3JlX3NoaW1fZGV2ZWxvcG1lbnQiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzIiwiZXhwb3J0cyIsImlzIiwieCIsInkiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyIiwic3Vic2NyaWJlIiwiZ2V0U25hcHNob3QiLCJkaWRXYXJuT2xkMThBbHBoYSIsIlJlYWN0Iiwic3RhcnRUcmFuc2l0aW9uIiwiY29uc29sZSIsImVycm9yIiwidmFsdWUiLCJkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCIsImNhY2hlZFZhbHVlIiwib2JqZWN0SXMiLCJ1c2VTdGF0ZSIsImluc3QiLCJmb3JjZVVwZGF0ZSIsInVzZUxheW91dEVmZmVjdCIsImNoZWNrSWZTbmFwc2hvdENoYW5nZWQiLCJ1c2VFZmZlY3QiLCJ1c2VEZWJ1Z1ZhbHVlIiwibGF0ZXN0R2V0U25hcHNob3QiLCJuZXh0VmFsdWUiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxIiwiX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwicmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0IiwiRXJyb3IiLCJyZXF1aXJlIiwiT2JqZWN0Iiwic2hpbSIsIndpbmRvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwicmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AiLCJyZXF1aXJlX3NoaW0iLCJub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcyIsIm1vZHVsZTIiLCJzaGltXzFfNV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJzaGltXzFfNV8wX2RlZmF1bHQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3JlRXhwb3J0IiwiX190b0VTTSIsImltcG9ydF9zaGltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdEQUFBLEdBQUFDLFVBQUE7RUFBQSxzRkFBQUMsQ0FBQUMsT0FBQTtJQUFBOztJQVdBLENBQ0csWUFBWTtNQUNYLFNBQVNDLEdBQUdDLENBQUEsRUFBR0MsQ0FBQSxFQUFHO1FBQ2hCLE9BQVFELENBQUEsS0FBTUMsQ0FBQSxLQUFNLE1BQU1ELENBQUEsSUFBSyxJQUFJQSxDQUFBLEtBQU0sSUFBSUMsQ0FBQSxLQUFRRCxDQUFBLEtBQU1BLENBQUEsSUFBS0MsQ0FBQSxLQUFNQSxDQUFBO01BQ3hFO01BQ0EsU0FBU0MsdUJBQXVCQyxTQUFBLEVBQVdDLFdBQUEsRUFBYTtRQUN0REMsaUJBQUEsSUFDRSxXQUFXQyxLQUFBLENBQU1DLGVBQUEsS0FDZkYsaUJBQUEsR0FBb0IsTUFDdEJHLE9BQUEsQ0FBUUMsS0FBQSxDQUNOLGdNQUNGO1FBQ0YsSUFBSUMsS0FBQSxHQUFRTixXQUFBLENBQVk7UUFDeEIsSUFBSSxDQUFDTywwQkFBQSxFQUE0QjtVQUMvQixJQUFJQyxXQUFBLEdBQWNSLFdBQUEsQ0FBWTtVQUM5QlMsUUFBQSxDQUFTSCxLQUFBLEVBQU9FLFdBQVcsTUFDeEJKLE9BQUEsQ0FBUUMsS0FBQSxDQUNQLHNFQUNGLEdBQ0NFLDBCQUFBLEdBQTZCO1FBQ2xDO1FBQ0FDLFdBQUEsR0FBY0UsUUFBQSxDQUFTO1VBQ3JCQyxJQUFBLEVBQU07WUFBRUwsS0FBQTtZQUFjTjtVQUF5QjtRQUNqRCxDQUFDO1FBQ0QsSUFBSVcsSUFBQSxHQUFPSCxXQUFBLENBQVksQ0FBQyxFQUFFRyxJQUFBO1VBQ3hCQyxXQUFBLEdBQWNKLFdBQUEsQ0FBWSxDQUFDO1FBQzdCSyxlQUFBLENBQ0UsWUFBWTtVQUNWRixJQUFBLENBQUtMLEtBQUEsR0FBUUEsS0FBQTtVQUNiSyxJQUFBLENBQUtYLFdBQUEsR0FBY0EsV0FBQTtVQUNuQmMsc0JBQUEsQ0FBdUJILElBQUksS0FBS0MsV0FBQSxDQUFZO1lBQUVEO1VBQVcsQ0FBQztRQUM1RCxHQUNBLENBQUNaLFNBQUEsRUFBV08sS0FBQSxFQUFPTixXQUFXLENBQ2hDO1FBQ0FlLFNBQUEsQ0FDRSxZQUFZO1VBQ1ZELHNCQUFBLENBQXVCSCxJQUFJLEtBQUtDLFdBQUEsQ0FBWTtZQUFFRDtVQUFXLENBQUM7VUFDMUQsT0FBT1osU0FBQSxDQUFVLFlBQVk7WUFDM0JlLHNCQUFBLENBQXVCSCxJQUFJLEtBQUtDLFdBQUEsQ0FBWTtjQUFFRDtZQUFXLENBQUM7VUFDNUQsQ0FBQztRQUNILEdBQ0EsQ0FBQ1osU0FBUyxDQUNaO1FBQ0FpQixhQUFBLENBQWNWLEtBQUs7UUFDbkIsT0FBT0EsS0FBQTtNQUNUO01BQ0EsU0FBU1EsdUJBQXVCSCxJQUFBLEVBQU07UUFDcEMsSUFBSU0saUJBQUEsR0FBb0JOLElBQUEsQ0FBS1gsV0FBQTtRQUM3QlcsSUFBQSxHQUFPQSxJQUFBLENBQUtMLEtBQUE7UUFDWixJQUFJO1VBQ0YsSUFBSVksU0FBQSxHQUFZRCxpQkFBQSxDQUFrQjtVQUNsQyxPQUFPLENBQUNSLFFBQUEsQ0FBU0UsSUFBQSxFQUFNTyxTQUFTO1FBQ2xDLFNBQVNiLEtBQUEsRUFBTztVQUNkLE9BQU87UUFDVDtNQUNGO01BQ0EsU0FBU2MsdUJBQXVCcEIsU0FBQSxFQUFXQyxXQUFBLEVBQWE7UUFDdEQsT0FBT0EsV0FBQSxDQUFZO01BQ3JCO01BQ0EsZ0JBQWdCLE9BQU9vQiw4QkFBQSxJQUNyQixlQUNFLE9BQU9BLDhCQUFBLENBQStCQywyQkFBQSxJQUN4Q0QsOEJBQUEsQ0FBK0JDLDJCQUFBLENBQTRCQyxLQUFBLENBQU0sQ0FBQztNQUNwRSxJQUFJcEIsS0FBQSxHQUFRcUIsT0FBQSxDQUFRLGNBQU87UUFDekJkLFFBQUEsR0FBVyxlQUFlLE9BQU9lLE1BQUEsQ0FBTzdCLEVBQUEsR0FBSzZCLE1BQUEsQ0FBTzdCLEVBQUEsR0FBS0EsRUFBQTtRQUN6RGUsUUFBQSxHQUFXUixLQUFBLENBQU1RLFFBQUE7UUFDakJLLFNBQUEsR0FBWWIsS0FBQSxDQUFNYSxTQUFBO1FBQ2xCRixlQUFBLEdBQWtCWCxLQUFBLENBQU1XLGVBQUE7UUFDeEJHLGFBQUEsR0FBZ0JkLEtBQUEsQ0FBTWMsYUFBQTtRQUN0QmYsaUJBQUEsR0FBb0I7UUFDcEJNLDBCQUFBLEdBQTZCO1FBQzdCa0IsSUFBQSxHQUNFLGdCQUFnQixPQUFPQyxNQUFBLElBQ3ZCLGdCQUFnQixPQUFPQSxNQUFBLENBQU9DLFFBQUEsSUFDOUIsZ0JBQWdCLE9BQU9ELE1BQUEsQ0FBT0MsUUFBQSxDQUFTQyxhQUFBLEdBQ25DVCxzQkFBQSxHQUNBckIsc0JBQUE7TUFDUkosT0FBQSxDQUFRbUMsb0JBQUEsR0FDTixXQUFXM0IsS0FBQSxDQUFNMkIsb0JBQUEsR0FBdUIzQixLQUFBLENBQU0yQixvQkFBQSxHQUF1QkosSUFBQTtNQUN2RSxnQkFBZ0IsT0FBT0wsOEJBQUEsSUFDckIsZUFDRSxPQUFPQSw4QkFBQSxDQUErQlUsMEJBQUEsSUFDeENWLDhCQUFBLENBQStCVSwwQkFBQSxDQUEyQlIsS0FBQSxDQUFNLENBQUM7SUFDckUsR0FBRztFQUFBO0FBQUE7OztBQzlGTCxJQUFBUyxZQUFBLEdBQUF2QyxVQUFBO0VBQUEsb0RBQUF3QyxDQUFBdEMsT0FBQSxFQUFBdUMsT0FBQTtJQUFBOztJQUVBLElBQUksT0FBdUM7TUFDekNBLE9BQUEsQ0FBT3ZDLE9BQUEsR0FBVTtJQUNuQixPQUFPO01BQ0x1QyxPQUFBLENBQU92QyxPQUFBLEdBQVVILGdEQUFBO0lBQ25CO0VBQUE7QUFBQTs7O0FDTkEsSUFBQTJDLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBNUMsT0FBQSxHQUFBNkMsWUFBQSxDQUFBTCxrQkFBQTtBQUFBTSxVQUFBLENBQUFOLGtCQUFBLEVBQWNPLE9BQUEsQ0FBQVYsWUFBQSxLQUFkTyxNQUFBLENBQUE1QyxPQUFBO0FBRUEsSUFBQWdELFdBQUEsR0FBcUJELE9BQUEsQ0FBQVYsWUFBQTtBQUNyQixJQUFPTSxrQkFBQSxHQUFRSyxXQUFBLENBQUFOLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9