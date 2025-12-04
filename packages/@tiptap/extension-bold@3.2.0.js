System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0","@tiptap/core@3.12.0/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-bold","3.2.0"]]);
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

// .beyond/uimport/@tiptap/extension-bold.3.2.0.js
var extension_bold_3_2_0_exports = {};
__export(extension_bold_3_2_0_exports, {
  Bold: () => Bold,
  default: () => extension_bold_3_2_0_default,
  starInputRegex: () => starInputRegex,
  starPasteRegex: () => starPasteRegex,
  underscoreInputRegex: () => underscoreInputRegex,
  underscorePasteRegex: () => underscorePasteRegex
});
module.exports = __toCommonJS(extension_bold_3_2_0_exports);

// node_modules/@tiptap/extension-bold/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var import_jsx_runtime = require("@tiptap/core@3.12.0/jsx-runtime");
var starInputRegex = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
var starPasteRegex = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
var underscoreInputRegex = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
var underscorePasteRegex = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
var Bold = import_core.Mark.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "strong"
    }, {
      tag: "b",
      getAttrs: node => node.style.fontWeight !== "normal" && null
    }, {
      style: "font-weight=400",
      clearMark: mark => mark.type.name === this.name
    }, {
      style: "font-weight",
      getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)("strong", {
      ...(0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes),
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("slot", {})
    });
  },
  addCommands() {
    return {
      setBold: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleBold: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetBold: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
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
var index_default = Bold;

// .beyond/uimport/@tiptap/extension-bold.3.2.0.js
var extension_bold_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1ib2xkLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWJvbGQvc3JjL2JvbGQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWJvbGQvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9ib2xkXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJvbGQiLCJkZWZhdWx0IiwiZXh0ZW5zaW9uX2JvbGRfM18yXzBfZGVmYXVsdCIsInN0YXJJbnB1dFJlZ2V4Iiwic3RhclBhc3RlUmVnZXgiLCJ1bmRlcnNjb3JlSW5wdXRSZWdleCIsInVuZGVyc2NvcmVQYXN0ZVJlZ2V4IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9jb3JlIiwicmVxdWlyZSIsImltcG9ydF9qc3hfcnVudGltZSIsIk1hcmsiLCJjcmVhdGUiLCJuYW1lIiwiYWRkT3B0aW9ucyIsIkhUTUxBdHRyaWJ1dGVzIiwicGFyc2VIVE1MIiwidGFnIiwiZ2V0QXR0cnMiLCJub2RlIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiY2xlYXJNYXJrIiwibWFyayIsInR5cGUiLCJ2YWx1ZSIsInRlc3QiLCJyZW5kZXJIVE1MIiwianN4IiwibWVyZ2VBdHRyaWJ1dGVzIiwib3B0aW9ucyIsImNoaWxkcmVuIiwiYWRkQ29tbWFuZHMiLCJzZXRCb2xkIiwiY29tbWFuZHMiLCJzZXRNYXJrIiwidG9nZ2xlQm9sZCIsInRvZ2dsZU1hcmsiLCJ1bnNldEJvbGQiLCJ1bnNldE1hcmsiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsIk1vZC1iIiwiZWRpdG9yIiwiTW9kLUIiLCJhZGRJbnB1dFJ1bGVzIiwibWFya0lucHV0UnVsZSIsImZpbmQiLCJhZGRQYXN0ZVJ1bGVzIiwibWFya1Bhc3RlUnVsZSIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDRCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNEJBQUE7RUFBQUUsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLDRCQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFYLDRCQUFBOzs7QUNDQSxJQUFBWSxXQUFBLEdBQW9FQyxPQUFBO0FBc0Y1RCxJQUFBQyxrQkFBQSxHQUFBRCxPQUFBO0FBckRELElBQU1SLGNBQUEsR0FBaUI7QUFLdkIsSUFBTUMsY0FBQSxHQUFpQjtBQUt2QixJQUFNQyxvQkFBQSxHQUF1QjtBQUs3QixJQUFNQyxvQkFBQSxHQUF1QjtBQU03QixJQUFNTixJQUFBLEdBQU9VLFdBQUEsQ0FBQUcsSUFBQSxDQUFLQyxNQUFBLENBQW9CO0VBQzNDQyxJQUFBLEVBQU07RUFFTkMsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxVQUFBLEVBQVk7SUFDVixPQUFPLENBQ0w7TUFDRUMsR0FBQSxFQUFLO0lBQ1AsR0FDQTtNQUNFQSxHQUFBLEVBQUs7TUFDTEMsUUFBQSxFQUFVQyxJQUFBLElBQVNBLElBQUEsQ0FBcUJDLEtBQUEsQ0FBTUMsVUFBQSxLQUFlLFlBQVk7SUFDM0UsR0FDQTtNQUNFRCxLQUFBLEVBQU87TUFDUEUsU0FBQSxFQUFXQyxJQUFBLElBQVFBLElBQUEsQ0FBS0MsSUFBQSxDQUFLWCxJQUFBLEtBQVMsS0FBS0E7SUFDN0MsR0FDQTtNQUNFTyxLQUFBLEVBQU87TUFDUEYsUUFBQSxFQUFVTyxLQUFBLElBQVMsNEJBQTRCQyxJQUFBLENBQUtELEtBQWUsS0FBSztJQUMxRSxFQUNGO0VBQ0Y7RUFFQUUsV0FBVztJQUFFWjtFQUFlLEdBQUc7SUFDN0IsT0FDRSxtQkFBQUwsa0JBQUEsQ0FBQWtCLEdBQUEsRUFBQztNQUFRLE9BQUdwQixXQUFBLENBQUFxQixlQUFBLEVBQWdCLEtBQUtDLE9BQUEsQ0FBUWYsY0FBQSxFQUFnQkEsY0FBYztNQUNyRWdCLFFBQUEscUJBQUFyQixrQkFBQSxDQUFBa0IsR0FBQSxFQUFDLFVBQUs7SUFBQSxDQUNSO0VBRUo7RUFFQUksWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMQyxPQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVDO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNDLE9BQUEsQ0FBUSxLQUFLdEIsSUFBSTtNQUNuQztNQUNGdUIsVUFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFRjtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTRyxVQUFBLENBQVcsS0FBS3hCLElBQUk7TUFDdEM7TUFDRnlCLFNBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUo7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0ssU0FBQSxDQUFVLEtBQUsxQixJQUFJO01BQ3JDO0lBQ0o7RUFDRjtFQUVBMkIscUJBQUEsRUFBdUI7SUFDckIsT0FBTztNQUNMLFNBQVNDLENBQUEsS0FBTSxLQUFLQyxNQUFBLENBQU9SLFFBQUEsQ0FBU0UsVUFBQSxDQUFXO01BQy9DLFNBQVNPLENBQUEsS0FBTSxLQUFLRCxNQUFBLENBQU9SLFFBQUEsQ0FBU0UsVUFBQSxDQUFXO0lBQ2pEO0VBQ0Y7RUFFQVEsY0FBQSxFQUFnQjtJQUNkLE9BQU8sQyxJQUNMcEMsV0FBQSxDQUFBcUMsYUFBQSxFQUFjO01BQ1pDLElBQUEsRUFBTTdDLGNBQUE7TUFDTnVCLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRyxJQUNEaEIsV0FBQSxDQUFBcUMsYUFBQSxFQUFjO01BQ1pDLElBQUEsRUFBTTNDLG9CQUFBO01BQ05xQixJQUFBLEVBQU0sS0FBS0E7SUFDYixDQUFDLEVBQ0g7RUFDRjtFQUVBdUIsY0FBQSxFQUFnQjtJQUNkLE9BQU8sQyxJQUNMdkMsV0FBQSxDQUFBd0MsYUFBQSxFQUFjO01BQ1pGLElBQUEsRUFBTTVDLGNBQUE7TUFDTnNCLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRyxJQUNEaEIsV0FBQSxDQUFBd0MsYUFBQSxFQUFjO01BQ1pGLElBQUEsRUFBTTFDLG9CQUFBO01BQ05vQixJQUFBLEVBQU0sS0FBS0E7SUFDYixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QUM1SUQsSUFBT3lCLGFBQUEsR0FBUW5ELElBQUE7OztBRkRmLElBQU9FLDRCQUFBLEdBQVFpRCxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==