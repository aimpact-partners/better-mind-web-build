System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["detect-node-es","1.1.0"]]);
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

// .beyond/uimport/temp/detect-node-es.1.1.0.js
var detect_node_es_1_1_0_exports = {};
__export(detect_node_es_1_1_0_exports, {
  isNode: () => isNode
});
module.exports = __toCommonJS(detect_node_es_1_1_0_exports);

// node_modules/detect-node-es/esm/browser.js
var isNode = false;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2RldGVjdC1ub2RlLWVzLjEuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RldGVjdC1ub2RlLWVzL2VzbS9icm93c2VyLmpzIl0sIm5hbWVzIjpbImRldGVjdF9ub2RlX2VzXzFfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImlzTm9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDRCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNEJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsNEJBQUE7OztBQ0FPLElBQU1FLE1BQUEsR0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=