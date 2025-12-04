System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-italic","3.2.0"]]);
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

// .beyond/uimport/@tiptap/extension-italic.3.2.0.js
var extension_italic_3_2_0_exports = {};
__export(extension_italic_3_2_0_exports, {
  Italic: () => Italic,
  default: () => extension_italic_3_2_0_default,
  starInputRegex: () => starInputRegex,
  starPasteRegex: () => starPasteRegex,
  underscoreInputRegex: () => underscoreInputRegex,
  underscorePasteRegex: () => underscorePasteRegex
});
module.exports = __toCommonJS(extension_italic_3_2_0_exports);

// node_modules/@tiptap/extension-italic/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var starInputRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/;
var starPasteRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g;
var underscoreInputRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/;
var underscorePasteRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
var Italic = import_core.Mark.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "em"
    }, {
      tag: "i",
      getAttrs: node => node.style.fontStyle !== "normal" && null
    }, {
      style: "font-style=normal",
      clearMark: mark => mark.type.name === this.name
    }, {
      style: "font-style=italic"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["em", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleItalic: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetItalic: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [(0, import_core.markInputRule)({
      find: starInputRegex,
      type: this.type
    }), (0, import_core.markInputRule)({
      find: underscoreInputRegex,
      type: this.type
    })];
  },
  addPasteRules() {
    return [(0, import_core.markPasteRule)({
      find: starPasteRegex,
      type: this.type
    }), (0, import_core.markPasteRule)({
      find: underscorePasteRegex,
      type: this.type
    })];
  }
});
var index_default = Italic;

// .beyond/uimport/@tiptap/extension-italic.3.2.0.js
var extension_italic_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1pdGFsaWMuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taXRhbGljL3NyYy9pdGFsaWMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taXRhbGljL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25faXRhbGljXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkl0YWxpYyIsImRlZmF1bHQiLCJleHRlbnNpb25faXRhbGljXzNfMl8wX2RlZmF1bHQiLCJzdGFySW5wdXRSZWdleCIsInN0YXJQYXN0ZVJlZ2V4IiwidW5kZXJzY29yZUlucHV0UmVnZXgiLCJ1bmRlcnNjb3JlUGFzdGVSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJNYXJrIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJIVE1MQXR0cmlidXRlcyIsInBhcnNlSFRNTCIsInRhZyIsImdldEF0dHJzIiwibm9kZSIsInN0eWxlIiwiZm9udFN0eWxlIiwiY2xlYXJNYXJrIiwibWFyayIsInR5cGUiLCJyZW5kZXJIVE1MIiwibWVyZ2VBdHRyaWJ1dGVzIiwib3B0aW9ucyIsImFkZENvbW1hbmRzIiwic2V0SXRhbGljIiwiY29tbWFuZHMiLCJzZXRNYXJrIiwidG9nZ2xlSXRhbGljIiwidG9nZ2xlTWFyayIsInVuc2V0SXRhbGljIiwidW5zZXRNYXJrIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJNb2QtaSIsImVkaXRvciIsIk1vZC1JIiwiYWRkSW5wdXRSdWxlcyIsIm1hcmtJbnB1dFJ1bGUiLCJmaW5kIiwiYWRkUGFzdGVSdWxlcyIsIm1hcmtQYXN0ZVJ1bGUiLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyw4QkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWCw4QkFBQTs7O0FDQUEsSUFBQVksV0FBQSxHQUFvRUMsT0FBQTtBQW9DN0QsSUFBTVIsY0FBQSxHQUFpQjtBQUt2QixJQUFNQyxjQUFBLEdBQWlCO0FBS3ZCLElBQU1DLG9CQUFBLEdBQXVCO0FBSzdCLElBQU1DLG9CQUFBLEdBQXVCO0FBTTdCLElBQU1OLE1BQUEsR0FBU1UsV0FBQSxDQUFBRSxJQUFBLENBQUtDLE1BQUEsQ0FBc0I7RUFDL0NDLElBQUEsRUFBTTtFQUVOQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLGNBQUEsRUFBZ0IsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFVBQUEsRUFBWTtJQUNWLE9BQU8sQ0FDTDtNQUNFQyxHQUFBLEVBQUs7SUFDUCxHQUNBO01BQ0VBLEdBQUEsRUFBSztNQUNMQyxRQUFBLEVBQVVDLElBQUEsSUFBU0EsSUFBQSxDQUFxQkMsS0FBQSxDQUFNQyxTQUFBLEtBQWMsWUFBWTtJQUMxRSxHQUNBO01BQ0VELEtBQUEsRUFBTztNQUNQRSxTQUFBLEVBQVdDLElBQUEsSUFBUUEsSUFBQSxDQUFLQyxJQUFBLENBQUtYLElBQUEsS0FBUyxLQUFLQTtJQUM3QyxHQUNBO01BQ0VPLEtBQUEsRUFBTztJQUNULEVBQ0Y7RUFDRjtFQUVBSyxXQUFXO0lBQUVWO0VBQWUsR0FBRztJQUM3QixPQUFPLENBQUMsVUFBTU4sV0FBQSxDQUFBaUIsZUFBQSxFQUFnQixLQUFLQyxPQUFBLENBQVFaLGNBQUEsRUFBZ0JBLGNBQWMsR0FBRyxDQUFDO0VBQy9FO0VBRUFhLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsU0FBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFQztNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTQyxPQUFBLENBQVEsS0FBS2xCLElBQUk7TUFDbkM7TUFDRm1CLFlBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUY7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0csVUFBQSxDQUFXLEtBQUtwQixJQUFJO01BQ3RDO01BQ0ZxQixXQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVKO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNLLFNBQUEsQ0FBVSxLQUFLdEIsSUFBSTtNQUNyQztJQUNKO0VBQ0Y7RUFFQXVCLHFCQUFBLEVBQXVCO0lBQ3JCLE9BQU87TUFDTCxTQUFTQyxDQUFBLEtBQU0sS0FBS0MsTUFBQSxDQUFPUixRQUFBLENBQVNFLFlBQUEsQ0FBYTtNQUNqRCxTQUFTTyxDQUFBLEtBQU0sS0FBS0QsTUFBQSxDQUFPUixRQUFBLENBQVNFLFlBQUEsQ0FBYTtJQUNuRDtFQUNGO0VBRUFRLGNBQUEsRUFBZ0I7SUFDZCxPQUFPLEMsSUFDTC9CLFdBQUEsQ0FBQWdDLGFBQUEsRUFBYztNQUNaQyxJQUFBLEVBQU14QyxjQUFBO01BQ05zQixJQUFBLEVBQU0sS0FBS0E7SUFDYixDQUFDLEcsSUFDRGYsV0FBQSxDQUFBZ0MsYUFBQSxFQUFjO01BQ1pDLElBQUEsRUFBTXRDLG9CQUFBO01BQ05vQixJQUFBLEVBQU0sS0FBS0E7SUFDYixDQUFDLEVBQ0g7RUFDRjtFQUVBbUIsY0FBQSxFQUFnQjtJQUNkLE9BQU8sQyxJQUNMbEMsV0FBQSxDQUFBbUMsYUFBQSxFQUFjO01BQ1pGLElBQUEsRUFBTXZDLGNBQUE7TUFDTnFCLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRyxJQUNEZixXQUFBLENBQUFtQyxhQUFBLEVBQWM7TUFDWkYsSUFBQSxFQUFNckMsb0JBQUE7TUFDTm1CLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRUFDSDtFQUNGO0FBQ0YsQ0FBQztBQ3pJRCxJQUFPcUIsYUFBQSxHQUFROUMsTUFBQTs7O0FGRGYsSUFBT0UsOEJBQUEsR0FBUTRDLGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9