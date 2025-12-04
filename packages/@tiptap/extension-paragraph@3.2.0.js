System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-paragraph","3.2.0"]]);
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

// .beyond/uimport/@tiptap/extension-paragraph.3.2.0.js
var extension_paragraph_3_2_0_exports = {};
__export(extension_paragraph_3_2_0_exports, {
  Paragraph: () => Paragraph,
  default: () => extension_paragraph_3_2_0_default
});
module.exports = __toCommonJS(extension_paragraph_3_2_0_exports);

// node_modules/@tiptap/extension-paragraph/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
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

// .beyond/uimport/@tiptap/extension-paragraph.3.2.0.js
var extension_paragraph_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1wYXJhZ3JhcGguMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tcGFyYWdyYXBoL3NyYy9wYXJhZ3JhcGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tcGFyYWdyYXBoL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25fcGFyYWdyYXBoXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlBhcmFncmFwaCIsImRlZmF1bHQiLCJleHRlbnNpb25fcGFyYWdyYXBoXzNfMl8wX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiTm9kZSIsImNyZWF0ZSIsIm5hbWUiLCJwcmlvcml0eSIsImFkZE9wdGlvbnMiLCJIVE1MQXR0cmlidXRlcyIsImdyb3VwIiwiY29udGVudCIsInBhcnNlSFRNTCIsInRhZyIsInJlbmRlckhUTUwiLCJtZXJnZUF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWRkQ29tbWFuZHMiLCJzZXRQYXJhZ3JhcGgiLCJjb21tYW5kcyIsInNldE5vZGUiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsIk1vZC1BbHQtMCIsImVkaXRvciIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGlDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsaUNBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsaUNBQUE7OztBQ0FBLElBQUFRLFdBQUEsR0FBc0NDLE9BQUE7QUEyQi9CLElBQU1QLFNBQUEsR0FBWU0sV0FBQSxDQUFBRSxJQUFBLENBQUtDLE1BQUEsQ0FBeUI7RUFDckRDLElBQUEsRUFBTTtFQUVOQyxRQUFBLEVBQVU7RUFFVkMsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxLQUFBLEVBQU87RUFFUEMsT0FBQSxFQUFTO0VBRVRDLFVBQUEsRUFBWTtJQUNWLE9BQU8sQ0FBQztNQUFFQyxHQUFBLEVBQUs7SUFBSSxDQUFDO0VBQ3RCO0VBRUFDLFdBQVc7SUFBRUw7RUFBZSxHQUFHO0lBQzdCLE9BQU8sQ0FBQyxTQUFLUCxXQUFBLENBQUFhLGVBQUEsRUFBZ0IsS0FBS0MsT0FBQSxDQUFRUCxjQUFBLEVBQWdCQSxjQUFjLEdBQUcsQ0FBQztFQUM5RTtFQUVBUSxZQUFBLEVBQWM7SUFDWixPQUFPO01BQ0xDLFlBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUM7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0MsT0FBQSxDQUFRLEtBQUtkLElBQUk7TUFDbkM7SUFDSjtFQUNGO0VBRUFlLHFCQUFBLEVBQXVCO0lBQ3JCLE9BQU87TUFDTCxhQUFhQyxDQUFBLEtBQU0sS0FBS0MsTUFBQSxDQUFPSixRQUFBLENBQVNELFlBQUEsQ0FBYTtJQUN2RDtFQUNGO0FBQ0YsQ0FBQztBQzdERCxJQUFPTSxhQUFBLEdBQVE1QixTQUFBOzs7QUZEZixJQUFPRSxpQ0FBQSxHQUFRMEIsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=