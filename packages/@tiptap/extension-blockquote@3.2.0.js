System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0","@tiptap/core@3.12.0/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-blockquote","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep), dep => dependencies.set('@tiptap/core@3.12.0', dep), dep => dependencies.set('@tiptap/core@3.12.0/jsx-runtime', dep)],
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

// .beyond/uimport/temp/@tiptap/extension-blockquote.3.2.0.js
var extension_blockquote_3_2_0_exports = {};
__export(extension_blockquote_3_2_0_exports, {
  Blockquote: () => Blockquote,
  default: () => extension_blockquote_3_2_0_default,
  inputRegex: () => inputRegex
});
module.exports = __toCommonJS(extension_blockquote_3_2_0_exports);

// node_modules/@tiptap/extension-blockquote/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var import_jsx_runtime = require("@tiptap/core@3.12.0/jsx-runtime");
var inputRegex = /^\s*>\s$/;
var Blockquote = import_core.Node.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: true,
  parseHTML() {
    return [{
      tag: "blockquote"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)("blockquote", {
      ...(0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes),
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("slot", {})
    });
  },
  addCommands() {
    return {
      setBlockquote: () => ({
        commands
      }) => {
        return commands.wrapIn(this.name);
      },
      toggleBlockquote: () => ({
        commands
      }) => {
        return commands.toggleWrap(this.name);
      },
      unsetBlockquote: () => ({
        commands
      }) => {
        return commands.lift(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [(0, import_core.wrappingInputRule)({
      find: inputRegex,
      type: this.type
    })];
  }
});
var index_default = Blockquote;

// .beyond/uimport/temp/@tiptap/extension-blockquote.3.2.0.js
var extension_blockquote_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWJsb2NrcXVvdGUuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tYmxvY2txdW90ZS9zcmMvYmxvY2txdW90ZS50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tYmxvY2txdW90ZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2Jsb2NrcXVvdGVfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQmxvY2txdW90ZSIsImRlZmF1bHQiLCJleHRlbnNpb25fYmxvY2txdW90ZV8zXzJfMF9kZWZhdWx0IiwiaW5wdXRSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJIVE1MQXR0cmlidXRlcyIsImNvbnRlbnQiLCJncm91cCIsImRlZmluaW5nIiwicGFyc2VIVE1MIiwidGFnIiwicmVuZGVySFRNTCIsImpzeCIsIm1lcmdlQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJjaGlsZHJlbiIsImFkZENvbW1hbmRzIiwic2V0QmxvY2txdW90ZSIsImNvbW1hbmRzIiwid3JhcEluIiwidG9nZ2xlQmxvY2txdW90ZSIsInRvZ2dsZVdyYXAiLCJ1bnNldEJsb2NrcXVvdGUiLCJsaWZ0IiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJNb2QtU2hpZnQtYiIsImVkaXRvciIsImFkZElucHV0UnVsZXMiLCJ3cmFwcGluZ0lucHV0UnVsZSIsImZpbmQiLCJ0eXBlIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQ0FBQTtFQUFBRSxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsa0NBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsa0NBQUE7OztBQ0NBLElBQUFTLFdBQUEsR0FBeURDLE9BQUE7QUE2RGpELElBQUFDLGtCQUFBLEdBQUFELE9BQUE7QUE1QkQsSUFBTUwsVUFBQSxHQUFhO0FBTW5CLElBQU1ILFVBQUEsR0FBYU8sV0FBQSxDQUFBRyxJQUFBLENBQUtDLE1BQUEsQ0FBMEI7RUFDdkRDLElBQUEsRUFBTTtFQUVOQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLGNBQUEsRUFBZ0IsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLE9BQUEsRUFBUztFQUVUQyxLQUFBLEVBQU87RUFFUEMsUUFBQSxFQUFVO0VBRVZDLFVBQUEsRUFBWTtJQUNWLE9BQU8sQ0FBQztNQUFFQyxHQUFBLEVBQUs7SUFBYSxDQUFDO0VBQy9CO0VBRUFDLFdBQVc7SUFBRU47RUFBZSxHQUFHO0lBQzdCLE9BQ0UsbUJBQUFMLGtCQUFBLENBQUFZLEdBQUEsRUFBQztNQUFZLE9BQUdkLFdBQUEsQ0FBQWUsZUFBQSxFQUFnQixLQUFLQyxPQUFBLENBQVFULGNBQUEsRUFBZ0JBLGNBQWM7TUFDekVVLFFBQUEscUJBQUFmLGtCQUFBLENBQUFZLEdBQUEsRUFBQyxVQUFLO0lBQUEsQ0FDUjtFQUVKO0VBRUFJLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsYUFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFQztNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTQyxNQUFBLENBQU8sS0FBS2hCLElBQUk7TUFDbEM7TUFDRmlCLGdCQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVGO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNHLFVBQUEsQ0FBVyxLQUFLbEIsSUFBSTtNQUN0QztNQUNGbUIsZUFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFSjtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTSyxJQUFBLENBQUssS0FBS3BCLElBQUk7TUFDaEM7SUFDSjtFQUNGO0VBRUFxQixxQkFBQSxFQUF1QjtJQUNyQixPQUFPO01BQ0wsZUFBZUMsQ0FBQSxLQUFNLEtBQUtDLE1BQUEsQ0FBT1IsUUFBQSxDQUFTRSxnQkFBQSxDQUFpQjtJQUM3RDtFQUNGO0VBRUFPLGNBQUEsRUFBZ0I7SUFDZCxPQUFPLEMsSUFDTDdCLFdBQUEsQ0FBQThCLGlCQUFBLEVBQWtCO01BQ2hCQyxJQUFBLEVBQU1uQyxVQUFBO01BQ05vQyxJQUFBLEVBQU0sS0FBS0E7SUFDYixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QUNqR0QsSUFBT0MsYUFBQSxHQUFReEMsVUFBQTs7O0FGRGYsSUFBT0Usa0NBQUEsR0FBUXNDLGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9