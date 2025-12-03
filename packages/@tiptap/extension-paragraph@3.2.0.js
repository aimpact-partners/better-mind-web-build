System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["@tiptap/extension-paragraph","3.2.0"]]);
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

// .beyond/uimport/temp/@tiptap/extension-paragraph.3.2.0.js
var extension_paragraph_3_2_0_exports = {};
__export(extension_paragraph_3_2_0_exports, {
  Paragraph: () => Paragraph,
  default: () => extension_paragraph_3_2_0_default
});
module.exports = __toCommonJS(extension_paragraph_3_2_0_exports);

// node_modules/@tiptap/extension-paragraph/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
var Paragraph = import_core.Node.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{
      tag: "p"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["p", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({
        commands
      }) => {
        return commands.setNode(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
});
var index_default = Paragraph;

// .beyond/uimport/temp/@tiptap/extension-paragraph.3.2.0.js
var extension_paragraph_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLXBhcmFncmFwaC4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1wYXJhZ3JhcGgvc3JjL3BhcmFncmFwaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1wYXJhZ3JhcGgvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9wYXJhZ3JhcGhfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUGFyYWdyYXBoIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9wYXJhZ3JhcGhfM18yXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsInByaW9yaXR5IiwiYWRkT3B0aW9ucyIsIkhUTUxBdHRyaWJ1dGVzIiwiZ3JvdXAiLCJjb250ZW50IiwicGFyc2VIVE1MIiwidGFnIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhZGRDb21tYW5kcyIsInNldFBhcmFncmFwaCIsImNvbW1hbmRzIiwic2V0Tm9kZSIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLUFsdC0wIiwiZWRpdG9yIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxpQ0FBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxpQ0FBQTs7O0FDQUEsSUFBQVEsV0FBQSxHQUFzQ0MsT0FBQTtBQTJCL0IsSUFBTVAsU0FBQSxHQUFZTSxXQUFBLENBQUFFLElBQUEsQ0FBS0MsTUFBQSxDQUF5QjtFQUNyREMsSUFBQSxFQUFNO0VBRU5DLFFBQUEsRUFBVTtFQUVWQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLGNBQUEsRUFBZ0IsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLEtBQUEsRUFBTztFQUVQQyxPQUFBLEVBQVM7RUFFVEMsVUFBQSxFQUFZO0lBQ1YsT0FBTyxDQUFDO01BQUVDLEdBQUEsRUFBSztJQUFJLENBQUM7RUFDdEI7RUFFQUMsV0FBVztJQUFFTDtFQUFlLEdBQUc7SUFDN0IsT0FBTyxDQUFDLFNBQUtQLFdBQUEsQ0FBQWEsZUFBQSxFQUFnQixLQUFLQyxPQUFBLENBQVFQLGNBQUEsRUFBZ0JBLGNBQWMsR0FBRyxDQUFDO0VBQzlFO0VBRUFRLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsWUFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFQztNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTQyxPQUFBLENBQVEsS0FBS2QsSUFBSTtNQUNuQztJQUNKO0VBQ0Y7RUFFQWUscUJBQUEsRUFBdUI7SUFDckIsT0FBTztNQUNMLGFBQWFDLENBQUEsS0FBTSxLQUFLQyxNQUFBLENBQU9KLFFBQUEsQ0FBU0QsWUFBQSxDQUFhO0lBQ3ZEO0VBQ0Y7QUFDRixDQUFDO0FDN0RELElBQU9NLGFBQUEsR0FBUTVCLFNBQUE7OztBRkRmLElBQU9FLGlDQUFBLEdBQVEwQixhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==