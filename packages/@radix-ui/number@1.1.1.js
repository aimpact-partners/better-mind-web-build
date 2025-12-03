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

// .beyond/uimport/temp/@radix-ui/number.1.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9udW1iZXIuMS4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL251bWJlci9zcmMvbnVtYmVyLnRzIl0sIm5hbWVzIjpbIm51bWJlcl8xXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJjbGFtcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsb0JBQUE7OztBQ0FBLFNBQVNFLE1BQU1JLEtBQUEsRUFBZSxDQUFDQyxHQUFBLEVBQUtDLEdBQUcsR0FBNkI7RUFDbEUsT0FBT0MsSUFBQSxDQUFLRixHQUFBLENBQUlDLEdBQUEsRUFBS0MsSUFBQSxDQUFLRCxHQUFBLENBQUlELEdBQUEsRUFBS0QsS0FBSyxDQUFDO0FBQzNDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==