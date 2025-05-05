System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["ws","8.17.1"]]);
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/ws/browser.js
var require_browser = __commonJS({
  "node_modules/ws/browser.js"(exports, module2) {
    "use strict";

    module2.exports = function () {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  }
});

// .beyond/uimport/temp/ws.8.17.1.js
var ws_8_17_1_exports = {};
__export(ws_8_17_1_exports, {
  default: () => ws_8_17_1_default
});
module.exports = __toCommonJS(ws_8_17_1_exports);
__reExport(ws_8_17_1_exports, __toESM(require_browser()), module.exports);
var import_ws = __toESM(require_browser());
var ws_8_17_1_default = import_ws.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy93cy9icm93c2VyLmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvd3MuOC4xNy4xLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfYnJvd3NlciIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvd3MvYnJvd3Nlci5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwiRXJyb3IiLCJ3c184XzE3XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIndzXzhfMTdfMV9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQUEsR0FBQUMsVUFBQTtFQUFBLDRCQUFBQyxDQUFBQyxPQUFBLEVBQUFDLE9BQUE7SUFBQTs7SUFFQUEsT0FBQSxDQUFPRCxPQUFBLEdBQVUsWUFBWTtNQUMzQixNQUFNLElBQUlFLEtBQUEsQ0FDUix1RkFFRjtJQUNGO0VBQUE7QUFBQTs7O0FDUEEsSUFBQUMsaUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxpQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFQLE9BQUEsR0FBQVEsWUFBQSxDQUFBTCxpQkFBQTtBQUFBTSxVQUFBLENBQUFOLGlCQUFBLEVBQWNPLE9BQUEsQ0FBQWIsZUFBQSxLQUFkVSxNQUFBLENBQUFQLE9BQUE7QUFFQSxJQUFBVyxTQUFBLEdBQXFCRCxPQUFBLENBQUFiLGVBQUE7QUFDckIsSUFBT1MsaUJBQUEsR0FBUUssU0FBQSxDQUFBTixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==