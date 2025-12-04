System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@radix-ui/number","1.1.1"]]);
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@radix-ui/number.1.1.1.js
var number_1_1_1_exports = {};
__export(number_1_1_1_exports, {
  clamp: () => clamp
});
module.exports = __toCommonJS(number_1_1_1_exports);

// node_modules/@radix-ui/number/dist/index.mjs
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvbnVtYmVyLjEuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9udW1iZXIvc3JjL251bWJlci50cyJdLCJuYW1lcyI6WyJudW1iZXJfMV8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY2xhbXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLG9CQUFBOzs7QUNBQSxTQUFTRSxNQUFNSSxLQUFBLEVBQWUsQ0FBQ0MsR0FBQSxFQUFLQyxHQUFHLEdBQTZCO0VBQ2xFLE9BQU9DLElBQUEsQ0FBS0YsR0FBQSxDQUFJQyxHQUFBLEVBQUtDLElBQUEsQ0FBS0QsR0FBQSxDQUFJRCxHQUFBLEVBQUtELEtBQUssQ0FBQztBQUMzQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=