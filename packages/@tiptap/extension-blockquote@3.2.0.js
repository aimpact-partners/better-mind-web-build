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

// .beyond/uimport/@tiptap/extension-blockquote.3.2.0.js
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

// .beyond/uimport/@tiptap/extension-blockquote.3.2.0.js
var extension_blockquote_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1ibG9ja3F1b3RlLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWJsb2NrcXVvdGUvc3JjL2Jsb2NrcXVvdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWJsb2NrcXVvdGUvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9ibG9ja3F1b3RlXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJsb2NrcXVvdGUiLCJkZWZhdWx0IiwiZXh0ZW5zaW9uX2Jsb2NrcXVvdGVfM18yXzBfZGVmYXVsdCIsImlucHV0UmVnZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiaW1wb3J0X2pzeF9ydW50aW1lIiwiTm9kZSIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwiSFRNTEF0dHJpYnV0ZXMiLCJjb250ZW50IiwiZ3JvdXAiLCJkZWZpbmluZyIsInBhcnNlSFRNTCIsInRhZyIsInJlbmRlckhUTUwiLCJqc3giLCJtZXJnZUF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiY2hpbGRyZW4iLCJhZGRDb21tYW5kcyIsInNldEJsb2NrcXVvdGUiLCJjb21tYW5kcyIsIndyYXBJbiIsInRvZ2dsZUJsb2NrcXVvdGUiLCJ0b2dnbGVXcmFwIiwidW5zZXRCbG9ja3F1b3RlIiwibGlmdCIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLVNoaWZ0LWIiLCJlZGl0b3IiLCJhZGRJbnB1dFJ1bGVzIiwid3JhcHBpbmdJbnB1dFJ1bGUiLCJmaW5kIiwidHlwZSIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0NBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLGtDQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLGtDQUFBOzs7QUNDQSxJQUFBUyxXQUFBLEdBQXlEQyxPQUFBO0FBNkRqRCxJQUFBQyxrQkFBQSxHQUFBRCxPQUFBO0FBNUJELElBQU1MLFVBQUEsR0FBYTtBQU1uQixJQUFNSCxVQUFBLEdBQWFPLFdBQUEsQ0FBQUcsSUFBQSxDQUFLQyxNQUFBLENBQTBCO0VBQ3ZEQyxJQUFBLEVBQU07RUFFTkMsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxPQUFBLEVBQVM7RUFFVEMsS0FBQSxFQUFPO0VBRVBDLFFBQUEsRUFBVTtFQUVWQyxVQUFBLEVBQVk7SUFDVixPQUFPLENBQUM7TUFBRUMsR0FBQSxFQUFLO0lBQWEsQ0FBQztFQUMvQjtFQUVBQyxXQUFXO0lBQUVOO0VBQWUsR0FBRztJQUM3QixPQUNFLG1CQUFBTCxrQkFBQSxDQUFBWSxHQUFBLEVBQUM7TUFBWSxPQUFHZCxXQUFBLENBQUFlLGVBQUEsRUFBZ0IsS0FBS0MsT0FBQSxDQUFRVCxjQUFBLEVBQWdCQSxjQUFjO01BQ3pFVSxRQUFBLHFCQUFBZixrQkFBQSxDQUFBWSxHQUFBLEVBQUMsVUFBSztJQUFBLENBQ1I7RUFFSjtFQUVBSSxZQUFBLEVBQWM7SUFDWixPQUFPO01BQ0xDLGFBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUM7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0MsTUFBQSxDQUFPLEtBQUtoQixJQUFJO01BQ2xDO01BQ0ZpQixnQkFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFRjtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTRyxVQUFBLENBQVcsS0FBS2xCLElBQUk7TUFDdEM7TUFDRm1CLGVBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUo7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0ssSUFBQSxDQUFLLEtBQUtwQixJQUFJO01BQ2hDO0lBQ0o7RUFDRjtFQUVBcUIscUJBQUEsRUFBdUI7SUFDckIsT0FBTztNQUNMLGVBQWVDLENBQUEsS0FBTSxLQUFLQyxNQUFBLENBQU9SLFFBQUEsQ0FBU0UsZ0JBQUEsQ0FBaUI7SUFDN0Q7RUFDRjtFQUVBTyxjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0w3QixXQUFBLENBQUE4QixpQkFBQSxFQUFrQjtNQUNoQkMsSUFBQSxFQUFNbkMsVUFBQTtNQUNOb0MsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxFQUNIO0VBQ0Y7QUFDRixDQUFDO0FDakdELElBQU9DLGFBQUEsR0FBUXhDLFVBQUE7OztBRkRmLElBQU9FLGtDQUFBLEdBQVFzQyxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==