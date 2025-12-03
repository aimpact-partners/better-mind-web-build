System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0","@tiptap/extension-list@3.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-list","3.2.0"],["@tiptap/extension-task-item","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep), dep => dependencies.set('@tiptap/core@3.12.0', dep), dep => dependencies.set('@tiptap/extension-list@3.2.0', dep)],
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

// .beyond/uimport/temp/@tiptap/extension-task-item.3.2.0.js
var extension_task_item_3_2_0_exports = {};
__export(extension_task_item_3_2_0_exports, {
  TaskItem: () => import_extension_list2.TaskItem,
  default: () => extension_task_item_3_2_0_default
});
module.exports = __toCommonJS(extension_task_item_3_2_0_exports);

// node_modules/@tiptap/extension-task-item/dist/index.js
var import_extension_list = require("@tiptap/extension-list@3.2.0");
var import_extension_list2 = require("@tiptap/extension-list@3.2.0");
var index_default = import_extension_list.TaskItem;

// .beyond/uimport/temp/@tiptap/extension-task-item.3.2.0.js
var extension_task_item_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLXRhc2staXRlbS4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi10YXNrLWl0ZW0vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl90YXNrX2l0ZW1fM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiVGFza0l0ZW0iLCJpbXBvcnRfZXh0ZW5zaW9uX2xpc3QyIiwiZGVmYXVsdCIsImV4dGVuc2lvbl90YXNrX2l0ZW1fM18yXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZXh0ZW5zaW9uX2xpc3QiLCJyZXF1aXJlIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxpQ0FBQTtFQUFBRSxRQUFBLEVBQUFBLENBQUEsS0FBQUMsc0JBQUEsQ0FBQUQsUUFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUixpQ0FBQTs7O0FDQUEsSUFBQVMscUJBQUEsR0FBeUJDLE9BQUE7QUFHekIsSUFBQVAsc0JBQUEsR0FBeUJPLE9BQUE7QUFFekIsSUFBT0MsYUFBQSxHQUFRRixxQkFBQSxDQUFBUCxRQUFBOzs7QURGZixJQUFPRyxpQ0FBQSxHQUFRTSxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==