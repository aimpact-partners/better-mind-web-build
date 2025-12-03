System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["@tiptap/extension-document","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep), dep => dependencies.set('@tiptap/core@3.2.0', dep)],
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

// .beyond/uimport/temp/@tiptap/extension-document.3.2.0.js
var extension_document_3_2_0_exports = {};
__export(extension_document_3_2_0_exports, {
  Document: () => Document,
  default: () => extension_document_3_2_0_default
});
module.exports = __toCommonJS(extension_document_3_2_0_exports);

// node_modules/@tiptap/extension-document/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
var Document = import_core.Node.create({
  name: "doc",
  topNode: true,
  content: "block+"
});
var index_default = Document;

// .beyond/uimport/temp/@tiptap/extension-document.3.2.0.js
var extension_document_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWRvY3VtZW50LjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWRvY3VtZW50L3NyYy9kb2N1bWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1kb2N1bWVudC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2RvY3VtZW50XzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkRvY3VtZW50IiwiZGVmYXVsdCIsImV4dGVuc2lvbl9kb2N1bWVudF8zXzJfMF9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9jb3JlIiwicmVxdWlyZSIsIk5vZGUiLCJjcmVhdGUiLCJuYW1lIiwidG9wTm9kZSIsImNvbnRlbnQiLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQ0FBQTtBQUFBQyxRQUFBLENBQUFELGdDQUFBO0VBQUFFLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGdDQUFBOzs7QUNBQSxJQUFBUSxXQUFBLEdBQXFCQyxPQUFBO0FBTWQsSUFBTVAsUUFBQSxHQUFXTSxXQUFBLENBQUFFLElBQUEsQ0FBS0MsTUFBQSxDQUFPO0VBQ2xDQyxJQUFBLEVBQU07RUFDTkMsT0FBQSxFQUFTO0VBQ1RDLE9BQUEsRUFBUztBQUNYLENBQUM7QUNORCxJQUFPQyxhQUFBLEdBQVFiLFFBQUE7OztBRkRmLElBQU9FLGdDQUFBLEdBQVFXLGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9