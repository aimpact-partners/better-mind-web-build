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

// .beyond/uimport/temp/@tiptap/extension-italic.3.2.0.js
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

// .beyond/uimport/temp/@tiptap/extension-italic.3.2.0.js
var extension_italic_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWl0YWxpYy4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1pdGFsaWMvc3JjL2l0YWxpYy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1pdGFsaWMvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9pdGFsaWNfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSXRhbGljIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9pdGFsaWNfM18yXzBfZGVmYXVsdCIsInN0YXJJbnB1dFJlZ2V4Iiwic3RhclBhc3RlUmVnZXgiLCJ1bmRlcnNjb3JlSW5wdXRSZWdleCIsInVuZGVyc2NvcmVQYXN0ZVJlZ2V4IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9jb3JlIiwicmVxdWlyZSIsIk1hcmsiLCJjcmVhdGUiLCJuYW1lIiwiYWRkT3B0aW9ucyIsIkhUTUxBdHRyaWJ1dGVzIiwicGFyc2VIVE1MIiwidGFnIiwiZ2V0QXR0cnMiLCJub2RlIiwic3R5bGUiLCJmb250U3R5bGUiLCJjbGVhck1hcmsiLCJtYXJrIiwidHlwZSIsInJlbmRlckhUTUwiLCJtZXJnZUF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWRkQ29tbWFuZHMiLCJzZXRJdGFsaWMiLCJjb21tYW5kcyIsInNldE1hcmsiLCJ0b2dnbGVJdGFsaWMiLCJ0b2dnbGVNYXJrIiwidW5zZXRJdGFsaWMiLCJ1bnNldE1hcmsiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsIk1vZC1pIiwiZWRpdG9yIiwiTW9kLUkiLCJhZGRJbnB1dFJ1bGVzIiwibWFya0lucHV0UnVsZSIsImZpbmQiLCJhZGRQYXN0ZVJ1bGVzIiwibWFya1Bhc3RlUnVsZSIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLDhCQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFYLDhCQUFBOzs7QUNBQSxJQUFBWSxXQUFBLEdBQW9FQyxPQUFBO0FBb0M3RCxJQUFNUixjQUFBLEdBQWlCO0FBS3ZCLElBQU1DLGNBQUEsR0FBaUI7QUFLdkIsSUFBTUMsb0JBQUEsR0FBdUI7QUFLN0IsSUFBTUMsb0JBQUEsR0FBdUI7QUFNN0IsSUFBTU4sTUFBQSxHQUFTVSxXQUFBLENBQUFFLElBQUEsQ0FBS0MsTUFBQSxDQUFzQjtFQUMvQ0MsSUFBQSxFQUFNO0VBRU5DLFdBQUEsRUFBYTtJQUNYLE9BQU87TUFDTEMsY0FBQSxFQUFnQixDQUFDO0lBQ25CO0VBQ0Y7RUFFQUMsVUFBQSxFQUFZO0lBQ1YsT0FBTyxDQUNMO01BQ0VDLEdBQUEsRUFBSztJQUNQLEdBQ0E7TUFDRUEsR0FBQSxFQUFLO01BQ0xDLFFBQUEsRUFBVUMsSUFBQSxJQUFTQSxJQUFBLENBQXFCQyxLQUFBLENBQU1DLFNBQUEsS0FBYyxZQUFZO0lBQzFFLEdBQ0E7TUFDRUQsS0FBQSxFQUFPO01BQ1BFLFNBQUEsRUFBV0MsSUFBQSxJQUFRQSxJQUFBLENBQUtDLElBQUEsQ0FBS1gsSUFBQSxLQUFTLEtBQUtBO0lBQzdDLEdBQ0E7TUFDRU8sS0FBQSxFQUFPO0lBQ1QsRUFDRjtFQUNGO0VBRUFLLFdBQVc7SUFBRVY7RUFBZSxHQUFHO0lBQzdCLE9BQU8sQ0FBQyxVQUFNTixXQUFBLENBQUFpQixlQUFBLEVBQWdCLEtBQUtDLE9BQUEsQ0FBUVosY0FBQSxFQUFnQkEsY0FBYyxHQUFHLENBQUM7RUFDL0U7RUFFQWEsWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMQyxTQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVDO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNDLE9BQUEsQ0FBUSxLQUFLbEIsSUFBSTtNQUNuQztNQUNGbUIsWUFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFRjtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTRyxVQUFBLENBQVcsS0FBS3BCLElBQUk7TUFDdEM7TUFDRnFCLFdBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUo7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0ssU0FBQSxDQUFVLEtBQUt0QixJQUFJO01BQ3JDO0lBQ0o7RUFDRjtFQUVBdUIscUJBQUEsRUFBdUI7SUFDckIsT0FBTztNQUNMLFNBQVNDLENBQUEsS0FBTSxLQUFLQyxNQUFBLENBQU9SLFFBQUEsQ0FBU0UsWUFBQSxDQUFhO01BQ2pELFNBQVNPLENBQUEsS0FBTSxLQUFLRCxNQUFBLENBQU9SLFFBQUEsQ0FBU0UsWUFBQSxDQUFhO0lBQ25EO0VBQ0Y7RUFFQVEsY0FBQSxFQUFnQjtJQUNkLE9BQU8sQyxJQUNML0IsV0FBQSxDQUFBZ0MsYUFBQSxFQUFjO01BQ1pDLElBQUEsRUFBTXhDLGNBQUE7TUFDTnNCLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRyxJQUNEZixXQUFBLENBQUFnQyxhQUFBLEVBQWM7TUFDWkMsSUFBQSxFQUFNdEMsb0JBQUE7TUFDTm9CLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRUFDSDtFQUNGO0VBRUFtQixjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0xsQyxXQUFBLENBQUFtQyxhQUFBLEVBQWM7TUFDWkYsSUFBQSxFQUFNdkMsY0FBQTtNQUNOcUIsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxHLElBQ0RmLFdBQUEsQ0FBQW1DLGFBQUEsRUFBYztNQUNaRixJQUFBLEVBQU1yQyxvQkFBQTtNQUNObUIsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxFQUNIO0VBQ0Y7QUFDRixDQUFDO0FDeklELElBQU9xQixhQUFBLEdBQVE5QyxNQUFBOzs7QUZEZixJQUFPRSw4QkFBQSxHQUFRNEMsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=