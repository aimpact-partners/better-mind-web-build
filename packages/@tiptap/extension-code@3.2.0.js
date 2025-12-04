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

// .beyond/uimport/@tiptap/extension-code.3.2.0.js
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

// .beyond/uimport/@tiptap/extension-code.3.2.0.js
var extension_code_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1jb2RlLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWNvZGUvc3JjL2NvZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tY29kZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2NvZGVfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ29kZSIsImRlZmF1bHQiLCJleHRlbnNpb25fY29kZV8zXzJfMF9kZWZhdWx0IiwiaW5wdXRSZWdleCIsInBhc3RlUmVnZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiTWFyayIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwiSFRNTEF0dHJpYnV0ZXMiLCJleGNsdWRlcyIsImNvZGUiLCJleGl0YWJsZSIsInBhcnNlSFRNTCIsInRhZyIsInJlbmRlckhUTUwiLCJtZXJnZUF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWRkQ29tbWFuZHMiLCJzZXRDb2RlIiwiY29tbWFuZHMiLCJzZXRNYXJrIiwidG9nZ2xlQ29kZSIsInRvZ2dsZU1hcmsiLCJ1bnNldENvZGUiLCJ1bnNldE1hcmsiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsIk1vZC1lIiwiZWRpdG9yIiwiYWRkSW5wdXRSdWxlcyIsIm1hcmtJbnB1dFJ1bGUiLCJmaW5kIiwidHlwZSIsImFkZFBhc3RlUnVsZXMiLCJtYXJrUGFzdGVSdWxlIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsNEJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsNEJBQUE7OztBQ0FBLElBQUFVLFdBQUEsR0FBb0VDLE9BQUE7QUF1QzdELElBQU1OLFVBQUEsR0FBYTtBQUtuQixJQUFNQyxVQUFBLEdBQWE7QUFNbkIsSUFBTUosSUFBQSxHQUFPUSxXQUFBLENBQUFFLElBQUEsQ0FBS0MsTUFBQSxDQUFvQjtFQUMzQ0MsSUFBQSxFQUFNO0VBRU5DLFdBQUEsRUFBYTtJQUNYLE9BQU87TUFDTEMsY0FBQSxFQUFnQixDQUFDO0lBQ25CO0VBQ0Y7RUFFQUMsUUFBQSxFQUFVO0VBRVZDLElBQUEsRUFBTTtFQUVOQyxRQUFBLEVBQVU7RUFFVkMsVUFBQSxFQUFZO0lBQ1YsT0FBTyxDQUFDO01BQUVDLEdBQUEsRUFBSztJQUFPLENBQUM7RUFDekI7RUFFQUMsV0FBVztJQUFFTjtFQUFlLEdBQUc7SUFDN0IsT0FBTyxDQUFDLFlBQVFOLFdBQUEsQ0FBQWEsZUFBQSxFQUFnQixLQUFLQyxPQUFBLENBQVFSLGNBQUEsRUFBZ0JBLGNBQWMsR0FBRyxDQUFDO0VBQ2pGO0VBRUFTLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsT0FBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFQztNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTQyxPQUFBLENBQVEsS0FBS2QsSUFBSTtNQUNuQztNQUNGZSxVQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVGO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNHLFVBQUEsQ0FBVyxLQUFLaEIsSUFBSTtNQUN0QztNQUNGaUIsU0FBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFSjtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTSyxTQUFBLENBQVUsS0FBS2xCLElBQUk7TUFDckM7SUFDSjtFQUNGO0VBRUFtQixxQkFBQSxFQUF1QjtJQUNyQixPQUFPO01BQ0wsU0FBU0MsQ0FBQSxLQUFNLEtBQUtDLE1BQUEsQ0FBT1IsUUFBQSxDQUFTRSxVQUFBLENBQVc7SUFDakQ7RUFDRjtFQUVBTyxjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0wxQixXQUFBLENBQUEyQixhQUFBLEVBQWM7TUFDWkMsSUFBQSxFQUFNakMsVUFBQTtNQUNOa0MsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxFQUNIO0VBQ0Y7RUFFQUMsY0FBQSxFQUFnQjtJQUNkLE9BQU8sQyxJQUNMOUIsV0FBQSxDQUFBK0IsYUFBQSxFQUFjO01BQ1pILElBQUEsRUFBTWhDLFVBQUE7TUFDTmlDLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRUFDSDtFQUNGO0FBQ0YsQ0FBQztBQ2hIRCxJQUFPRyxhQUFBLEdBQVF4QyxJQUFBOzs7QUZEZixJQUFPRSw0QkFBQSxHQUFRc0MsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=