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

// .beyond/uimport/use-sync-external-store/shim.1.5.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL2luZGV4LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0uMS41LjAuanMiXSwibmFtZXMiOlsicmVxdWlyZV91c2Vfc3luY19leHRlcm5hbF9zdG9yZV9zaGltX2RldmVsb3BtZW50IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcyIsImV4cG9ydHMiLCJpcyIsIngiLCJ5IiwidXNlU3luY0V4dGVybmFsU3RvcmUkMiIsInN1YnNjcmliZSIsImdldFNuYXBzaG90IiwiZGlkV2Fybk9sZDE4QWxwaGEiLCJSZWFjdCIsInN0YXJ0VHJhbnNpdGlvbiIsImNvbnNvbGUiLCJlcnJvciIsInZhbHVlIiwiZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QiLCJjYWNoZWRWYWx1ZSIsIm9iamVjdElzIiwidXNlU3RhdGUiLCJpbnN0IiwiZm9yY2VVcGRhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJjaGVja0lmU25hcHNob3RDaGFuZ2VkIiwidXNlRWZmZWN0IiwidXNlRGVidWdWYWx1ZSIsImxhdGVzdEdldFNuYXBzaG90IiwibmV4dFZhbHVlIiwidXNlU3luY0V4dGVybmFsU3RvcmUkMSIsIl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCIsIkVycm9yIiwicmVxdWlyZSIsIk9iamVjdCIsInNoaW0iLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wIiwicmVxdWlyZV9zaGltIiwibm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vaW5kZXguanMiLCJtb2R1bGUyIiwic2hpbV8xXzVfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0Iiwic2hpbV8xXzVfMF9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfc2hpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnREFBQSxHQUFBQyxVQUFBO0VBQUEsc0ZBQUFDLENBQUFDLE9BQUE7SUFBQTs7SUFXQSxDQUNHLFlBQVk7TUFDWCxTQUFTQyxHQUFHQyxDQUFBLEVBQUdDLENBQUEsRUFBRztRQUNoQixPQUFRRCxDQUFBLEtBQU1DLENBQUEsS0FBTSxNQUFNRCxDQUFBLElBQUssSUFBSUEsQ0FBQSxLQUFNLElBQUlDLENBQUEsS0FBUUQsQ0FBQSxLQUFNQSxDQUFBLElBQUtDLENBQUEsS0FBTUEsQ0FBQTtNQUN4RTtNQUNBLFNBQVNDLHVCQUF1QkMsU0FBQSxFQUFXQyxXQUFBLEVBQWE7UUFDdERDLGlCQUFBLElBQ0UsV0FBV0MsS0FBQSxDQUFNQyxlQUFBLEtBQ2ZGLGlCQUFBLEdBQW9CLE1BQ3RCRyxPQUFBLENBQVFDLEtBQUEsQ0FDTixnTUFDRjtRQUNGLElBQUlDLEtBQUEsR0FBUU4sV0FBQSxDQUFZO1FBQ3hCLElBQUksQ0FBQ08sMEJBQUEsRUFBNEI7VUFDL0IsSUFBSUMsV0FBQSxHQUFjUixXQUFBLENBQVk7VUFDOUJTLFFBQUEsQ0FBU0gsS0FBQSxFQUFPRSxXQUFXLE1BQ3hCSixPQUFBLENBQVFDLEtBQUEsQ0FDUCxzRUFDRixHQUNDRSwwQkFBQSxHQUE2QjtRQUNsQztRQUNBQyxXQUFBLEdBQWNFLFFBQUEsQ0FBUztVQUNyQkMsSUFBQSxFQUFNO1lBQUVMLEtBQUE7WUFBY047VUFBeUI7UUFDakQsQ0FBQztRQUNELElBQUlXLElBQUEsR0FBT0gsV0FBQSxDQUFZLENBQUMsRUFBRUcsSUFBQTtVQUN4QkMsV0FBQSxHQUFjSixXQUFBLENBQVksQ0FBQztRQUM3QkssZUFBQSxDQUNFLFlBQVk7VUFDVkYsSUFBQSxDQUFLTCxLQUFBLEdBQVFBLEtBQUE7VUFDYkssSUFBQSxDQUFLWCxXQUFBLEdBQWNBLFdBQUE7VUFDbkJjLHNCQUFBLENBQXVCSCxJQUFJLEtBQUtDLFdBQUEsQ0FBWTtZQUFFRDtVQUFXLENBQUM7UUFDNUQsR0FDQSxDQUFDWixTQUFBLEVBQVdPLEtBQUEsRUFBT04sV0FBVyxDQUNoQztRQUNBZSxTQUFBLENBQ0UsWUFBWTtVQUNWRCxzQkFBQSxDQUF1QkgsSUFBSSxLQUFLQyxXQUFBLENBQVk7WUFBRUQ7VUFBVyxDQUFDO1VBQzFELE9BQU9aLFNBQUEsQ0FBVSxZQUFZO1lBQzNCZSxzQkFBQSxDQUF1QkgsSUFBSSxLQUFLQyxXQUFBLENBQVk7Y0FBRUQ7WUFBVyxDQUFDO1VBQzVELENBQUM7UUFDSCxHQUNBLENBQUNaLFNBQVMsQ0FDWjtRQUNBaUIsYUFBQSxDQUFjVixLQUFLO1FBQ25CLE9BQU9BLEtBQUE7TUFDVDtNQUNBLFNBQVNRLHVCQUF1QkgsSUFBQSxFQUFNO1FBQ3BDLElBQUlNLGlCQUFBLEdBQW9CTixJQUFBLENBQUtYLFdBQUE7UUFDN0JXLElBQUEsR0FBT0EsSUFBQSxDQUFLTCxLQUFBO1FBQ1osSUFBSTtVQUNGLElBQUlZLFNBQUEsR0FBWUQsaUJBQUEsQ0FBa0I7VUFDbEMsT0FBTyxDQUFDUixRQUFBLENBQVNFLElBQUEsRUFBTU8sU0FBUztRQUNsQyxTQUFTYixLQUFBLEVBQU87VUFDZCxPQUFPO1FBQ1Q7TUFDRjtNQUNBLFNBQVNjLHVCQUF1QnBCLFNBQUEsRUFBV0MsV0FBQSxFQUFhO1FBQ3RELE9BQU9BLFdBQUEsQ0FBWTtNQUNyQjtNQUNBLGdCQUFnQixPQUFPb0IsOEJBQUEsSUFDckIsZUFDRSxPQUFPQSw4QkFBQSxDQUErQkMsMkJBQUEsSUFDeENELDhCQUFBLENBQStCQywyQkFBQSxDQUE0QkMsS0FBQSxDQUFNLENBQUM7TUFDcEUsSUFBSXBCLEtBQUEsR0FBUXFCLE9BQUEsQ0FBUSxjQUFPO1FBQ3pCZCxRQUFBLEdBQVcsZUFBZSxPQUFPZSxNQUFBLENBQU83QixFQUFBLEdBQUs2QixNQUFBLENBQU83QixFQUFBLEdBQUtBLEVBQUE7UUFDekRlLFFBQUEsR0FBV1IsS0FBQSxDQUFNUSxRQUFBO1FBQ2pCSyxTQUFBLEdBQVliLEtBQUEsQ0FBTWEsU0FBQTtRQUNsQkYsZUFBQSxHQUFrQlgsS0FBQSxDQUFNVyxlQUFBO1FBQ3hCRyxhQUFBLEdBQWdCZCxLQUFBLENBQU1jLGFBQUE7UUFDdEJmLGlCQUFBLEdBQW9CO1FBQ3BCTSwwQkFBQSxHQUE2QjtRQUM3QmtCLElBQUEsR0FDRSxnQkFBZ0IsT0FBT0MsTUFBQSxJQUN2QixnQkFBZ0IsT0FBT0EsTUFBQSxDQUFPQyxRQUFBLElBQzlCLGdCQUFnQixPQUFPRCxNQUFBLENBQU9DLFFBQUEsQ0FBU0MsYUFBQSxHQUNuQ1Qsc0JBQUEsR0FDQXJCLHNCQUFBO01BQ1JKLE9BQUEsQ0FBUW1DLG9CQUFBLEdBQ04sV0FBVzNCLEtBQUEsQ0FBTTJCLG9CQUFBLEdBQXVCM0IsS0FBQSxDQUFNMkIsb0JBQUEsR0FBdUJKLElBQUE7TUFDdkUsZ0JBQWdCLE9BQU9MLDhCQUFBLElBQ3JCLGVBQ0UsT0FBT0EsOEJBQUEsQ0FBK0JVLDBCQUFBLElBQ3hDViw4QkFBQSxDQUErQlUsMEJBQUEsQ0FBMkJSLEtBQUEsQ0FBTSxDQUFDO0lBQ3JFLEdBQUc7RUFBQTtBQUFBOzs7QUM5RkwsSUFBQVMsWUFBQSxHQUFBdkMsVUFBQTtFQUFBLG9EQUFBd0MsQ0FBQXRDLE9BQUEsRUFBQXVDLE9BQUE7SUFBQTs7SUFFQSxJQUFJLE9BQXVDO01BQ3pDQSxPQUFBLENBQU92QyxPQUFBLEdBQVU7SUFDbkIsT0FBTztNQUNMdUMsT0FBQSxDQUFPdkMsT0FBQSxHQUFVSCxnREFBQTtJQUNuQjtFQUFBO0FBQUE7OztBQ05BLElBQUEyQyxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQTVDLE9BQUEsR0FBQTZDLFlBQUEsQ0FBQUwsa0JBQUE7QUFBQU0sVUFBQSxDQUFBTixrQkFBQSxFQUFjTyxPQUFBLENBQUFWLFlBQUEsS0FBZE8sTUFBQSxDQUFBNUMsT0FBQTtBQUVBLElBQUFnRCxXQUFBLEdBQXFCRCxPQUFBLENBQUFWLFlBQUE7QUFDckIsSUFBT00sa0JBQUEsR0FBUUssV0FBQSxDQUFBTixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==