System.register(["w3c-keyname@2.2.8","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","prosemirror-keymap@1.2.3","prosemirror-view@1.40.1","prosemirror-gapcursor@1.3.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["w3c-keyname","2.2.8"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-keymap","1.2.3"],["prosemirror-view","1.40.1"],["prosemirror-gapcursor","1.3.2"],["@tiptap/pm","3.12.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('prosemirror-gapcursor@1.3.2', dep)],
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

// .beyond/uimport/temp/@tiptap/pm/gapcursor.3.12.0.js
var gapcursor_3_12_0_exports = {};
module.exports = __toCommonJS(gapcursor_3_12_0_exports);

// node_modules/@tiptap/pm/dist/gapcursor/index.js
var gapcursor_exports = {};
__reExport(gapcursor_exports, require("prosemirror-gapcursor@1.3.2"));

// .beyond/uimport/temp/@tiptap/pm/gapcursor.3.12.0.js
__reExport(gapcursor_3_12_0_exports, gapcursor_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvcG0vZ2FwY3Vyc29yLjMuMTIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3BtL2Rpc3QvZ2FwY3Vyc29yL2luZGV4LmpzIl0sIm5hbWVzIjpbImdhcGN1cnNvcl8zXzEyXzBfZXhwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJnYXBjdXJzb3JfZXhwb3J0cyIsIl9fcmVFeHBvcnQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUgsd0JBQUE7OztBQ0FBLElBQUFJLGlCQUFBO0FBQ0FDLFVBQUEsQ0FBQUQsaUJBQUEsRUFBY0UsT0FBQTs7O0FERGRELFVBQUEsQ0FBQUwsd0JBQUEsRUFBY0ksaUJBQUEsRUFBZEgsTUFBQSxDQUFBQyxPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==