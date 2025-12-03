System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-layout-effect","1.1.1"]]);
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

// .beyond/uimport/temp/@radix-ui/react-use-layout-effect.1.1.1.js
var react_use_layout_effect_1_1_1_exports = {};
__export(react_use_layout_effect_1_1_1_exports, {
  useLayoutEffect: () => useLayoutEffect2
});
module.exports = __toCommonJS(react_use_layout_effect_1_1_1_exports);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var useLayoutEffect2 = globalThis?.document ? React.useLayoutEffect : () => {};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2UtbGF5b3V0LWVmZmVjdC4xLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWxheW91dC1lZmZlY3Qvc3JjL3VzZS1sYXlvdXQtZWZmZWN0LnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2VfbGF5b3V0X2VmZmVjdF8xXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQ0FBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixxQ0FBQTs7O0FDQUEsSUFBQU8sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBU3ZCLElBQU1OLGdCQUFBLEdBQWtCTyxVQUFBLEVBQVlDLFFBQUEsR0FBaUJKLEtBQUEsQ0FBQUwsZUFBQSxHQUFrQixNQUFNLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9