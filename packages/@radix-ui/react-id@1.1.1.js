System.register(["react@18.3.1","@radix-ui/react-use-layout-effect@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-id","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep)],
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

// .beyond/uimport/@radix-ui/react-id.1.1.1.js
var react_id_1_1_1_exports = {};
__export(react_id_1_1_1_exports, {
  useId: () => useId
});
module.exports = __toCommonJS(react_id_1_1_1_exports);

// node_modules/@radix-ui/react-id/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var useReactId = React[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React.useState(useReactId());
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (!deterministicId) setId(reactId => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtaWQuMS4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWlkL3NyYy9pZC50c3giXSwibmFtZXMiOlsicmVhY3RfaWRfMV8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwidXNlSWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9yZWFjdF91c2VfbGF5b3V0X2VmZmVjdCIsInVzZVJlYWN0SWQiLCJ0cmltIiwidG9TdHJpbmciLCJjb3VudCIsImRldGVybWluaXN0aWNJZCIsImlkIiwic2V0SWQiLCJ1c2VTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsInJlYWN0SWQiLCJTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxzQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxzQkFBQTs7O0FDQUEsSUFBQU0sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLDhCQUFBLEdBQWdDRCxPQUFBO0FBR2hDLElBQU1FLFVBQUEsR0FBY0osS0FBQSxDQUFjLFVBQVVLLElBQUEsQ0FBSyxFQUFFQyxRQUFBLENBQVMsQ0FBQyxNQUFNLE1BQU07QUFDekUsSUFBSUMsS0FBQSxHQUFRO0FBRVosU0FBU1gsTUFBTVksZUFBQSxFQUFrQztFQUMvQyxNQUFNLENBQUNDLEVBQUEsRUFBSUMsS0FBSyxJQUFVVixLQUFBLENBQUFXLFFBQUEsQ0FBNkJQLFVBQUEsQ0FBVyxDQUFDO0VBRW5FLElBQUFELDhCQUFBLENBQUFTLGVBQUEsRUFBZ0IsTUFBTTtJQUNwQixJQUFJLENBQUNKLGVBQUEsRUFBaUJFLEtBQUEsQ0FBT0csT0FBQSxJQUFZQSxPQUFBLElBQVdDLE1BQUEsQ0FBT1AsS0FBQSxFQUFPLENBQUM7RUFDckUsR0FBRyxDQUFDQyxlQUFlLENBQUM7RUFDcEIsT0FBT0EsZUFBQSxLQUFvQkMsRUFBQSxHQUFLLFNBQVNBLEVBQUUsS0FBSztBQUNsRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=