System.register(["rope-sequence@1.3.4","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","prosemirror-history@1.4.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["rope-sequence","1.3.4"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-history","1.4.1"],["@tiptap/pm","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('rope-sequence@1.3.4', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-history@1.4.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@tiptap/pm/history.3.2.0.js
var history_3_2_0_exports = {};
module.exports = __toCommonJS(history_3_2_0_exports);

// node_modules/@tiptap/pm/dist/history/index.js
var history_exports = {};
__reExport(history_exports, require("prosemirror-history@1.4.1"));

// .beyond/uimport/temp/@tiptap/pm/history.3.2.0.js
__reExport(history_3_2_0_exports, history_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvcG0vaGlzdG9yeS4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3BtL2Rpc3QvaGlzdG9yeS9pbmRleC5qcyJdLCJuYW1lcyI6WyJoaXN0b3J5XzNfMl8wX2V4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaGlzdG9yeV9leHBvcnRzIiwiX19yZUV4cG9ydCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBSCxxQkFBQTs7O0FDQUEsSUFBQUksZUFBQTtBQUNBQyxVQUFBLENBQUFELGVBQUEsRUFBY0UsT0FBQTs7O0FERGRELFVBQUEsQ0FBQUwscUJBQUEsRUFBY0ksZUFBQSxFQUFkSCxNQUFBLENBQUFDLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9