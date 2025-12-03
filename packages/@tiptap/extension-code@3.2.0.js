System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-code","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep), dep => dependencies.set('@tiptap/core@3.12.0', dep)],
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

// .beyond/uimport/temp/@tiptap/extension-code.3.2.0.js
var extension_code_3_2_0_exports = {};
__export(extension_code_3_2_0_exports, {
  Code: () => Code,
  default: () => extension_code_3_2_0_default,
  inputRegex: () => inputRegex,
  pasteRegex: () => pasteRegex
});
module.exports = __toCommonJS(extension_code_3_2_0_exports);

// node_modules/@tiptap/extension-code/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var inputRegex = /(^|[^`])`([^`]+)`(?!`)/;
var pasteRegex = /(^|[^`])`([^`]+)`(?!`)/g;
var Code = import_core.Mark.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: true,
  exitable: true,
  parseHTML() {
    return [{
      tag: "code"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["code", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setCode: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleCode: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetCode: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [(0, import_core.markInputRule)({
      find: inputRegex,
      type: this.type
    })];
  },
  addPasteRules() {
    return [(0, import_core.markPasteRule)({
      find: pasteRegex,
      type: this.type
    })];
  }
});
var index_default = Code;

// .beyond/uimport/temp/@tiptap/extension-code.3.2.0.js
var extension_code_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWNvZGUuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tY29kZS9zcmMvY29kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1jb2RlL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25fY29kZV8zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJDb2RlIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9jb2RlXzNfMl8wX2RlZmF1bHQiLCJpbnB1dFJlZ2V4IiwicGFzdGVSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJNYXJrIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJIVE1MQXR0cmlidXRlcyIsImV4Y2x1ZGVzIiwiY29kZSIsImV4aXRhYmxlIiwicGFyc2VIVE1MIiwidGFnIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhZGRDb21tYW5kcyIsInNldENvZGUiLCJjb21tYW5kcyIsInNldE1hcmsiLCJ0b2dnbGVDb2RlIiwidG9nZ2xlTWFyayIsInVuc2V0Q29kZSIsInVuc2V0TWFyayIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLWUiLCJlZGl0b3IiLCJhZGRJbnB1dFJ1bGVzIiwibWFya0lucHV0UnVsZSIsImZpbmQiLCJ0eXBlIiwiYWRkUGFzdGVSdWxlcyIsIm1hcmtQYXN0ZVJ1bGUiLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw0QkFBQTtBQUFBQyxRQUFBLENBQUFELDRCQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyw0QkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCw0QkFBQTs7O0FDQUEsSUFBQVUsV0FBQSxHQUFvRUMsT0FBQTtBQXVDN0QsSUFBTU4sVUFBQSxHQUFhO0FBS25CLElBQU1DLFVBQUEsR0FBYTtBQU1uQixJQUFNSixJQUFBLEdBQU9RLFdBQUEsQ0FBQUUsSUFBQSxDQUFLQyxNQUFBLENBQW9CO0VBQzNDQyxJQUFBLEVBQU07RUFFTkMsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxRQUFBLEVBQVU7RUFFVkMsSUFBQSxFQUFNO0VBRU5DLFFBQUEsRUFBVTtFQUVWQyxVQUFBLEVBQVk7SUFDVixPQUFPLENBQUM7TUFBRUMsR0FBQSxFQUFLO0lBQU8sQ0FBQztFQUN6QjtFQUVBQyxXQUFXO0lBQUVOO0VBQWUsR0FBRztJQUM3QixPQUFPLENBQUMsWUFBUU4sV0FBQSxDQUFBYSxlQUFBLEVBQWdCLEtBQUtDLE9BQUEsQ0FBUVIsY0FBQSxFQUFnQkEsY0FBYyxHQUFHLENBQUM7RUFDakY7RUFFQVMsWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMQyxPQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVDO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNDLE9BQUEsQ0FBUSxLQUFLZCxJQUFJO01BQ25DO01BQ0ZlLFVBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUY7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0csVUFBQSxDQUFXLEtBQUtoQixJQUFJO01BQ3RDO01BQ0ZpQixTQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVKO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNLLFNBQUEsQ0FBVSxLQUFLbEIsSUFBSTtNQUNyQztJQUNKO0VBQ0Y7RUFFQW1CLHFCQUFBLEVBQXVCO0lBQ3JCLE9BQU87TUFDTCxTQUFTQyxDQUFBLEtBQU0sS0FBS0MsTUFBQSxDQUFPUixRQUFBLENBQVNFLFVBQUEsQ0FBVztJQUNqRDtFQUNGO0VBRUFPLGNBQUEsRUFBZ0I7SUFDZCxPQUFPLEMsSUFDTDFCLFdBQUEsQ0FBQTJCLGFBQUEsRUFBYztNQUNaQyxJQUFBLEVBQU1qQyxVQUFBO01BQ05rQyxJQUFBLEVBQU0sS0FBS0E7SUFDYixDQUFDLEVBQ0g7RUFDRjtFQUVBQyxjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0w5QixXQUFBLENBQUErQixhQUFBLEVBQWM7TUFDWkgsSUFBQSxFQUFNaEMsVUFBQTtNQUNOaUMsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxFQUNIO0VBQ0Y7QUFDRixDQUFDO0FDaEhELElBQU9HLGFBQUEsR0FBUXhDLElBQUE7OztBRkRmLElBQU9FLDRCQUFBLEdBQVFzQyxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==