System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-underline","3.2.0"]]);
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

// .beyond/uimport/@tiptap/extension-underline.3.2.0.js
var extension_underline_3_2_0_exports = {};
__export(extension_underline_3_2_0_exports, {
  Underline: () => Underline,
  default: () => extension_underline_3_2_0_default
});
module.exports = __toCommonJS(extension_underline_3_2_0_exports);

// node_modules/@tiptap/extension-underline/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var Underline = import_core.Mark.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "u"
    }, {
      style: "text-decoration",
      consuming: false,
      getAttrs: style => style.includes("underline") ? {} : false
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["u", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleUnderline: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetUnderline: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
});
var index_default = Underline;

// .beyond/uimport/@tiptap/extension-underline.3.2.0.js
var extension_underline_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi11bmRlcmxpbmUuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tdW5kZXJsaW5lL3NyYy91bmRlcmxpbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tdW5kZXJsaW5lL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25fdW5kZXJsaW5lXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlVuZGVybGluZSIsImRlZmF1bHQiLCJleHRlbnNpb25fdW5kZXJsaW5lXzNfMl8wX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiTWFyayIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwiSFRNTEF0dHJpYnV0ZXMiLCJwYXJzZUhUTUwiLCJ0YWciLCJzdHlsZSIsImNvbnN1bWluZyIsImdldEF0dHJzIiwiaW5jbHVkZXMiLCJyZW5kZXJIVE1MIiwibWVyZ2VBdHRyaWJ1dGVzIiwib3B0aW9ucyIsImFkZENvbW1hbmRzIiwic2V0VW5kZXJsaW5lIiwiY29tbWFuZHMiLCJzZXRNYXJrIiwidG9nZ2xlVW5kZXJsaW5lIiwidG9nZ2xlTWFyayIsInVuc2V0VW5kZXJsaW5lIiwidW5zZXRNYXJrIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJNb2QtdSIsImVkaXRvciIsIk1vZC1VIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxpQ0FBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxpQ0FBQTs7O0FDQUEsSUFBQVEsV0FBQSxHQUFzQ0MsT0FBQTtBQXFDL0IsSUFBTVAsU0FBQSxHQUFZTSxXQUFBLENBQUFFLElBQUEsQ0FBS0MsTUFBQSxDQUF5QjtFQUNyREMsSUFBQSxFQUFNO0VBRU5DLFdBQUEsRUFBYTtJQUNYLE9BQU87TUFDTEMsY0FBQSxFQUFnQixDQUFDO0lBQ25CO0VBQ0Y7RUFFQUMsVUFBQSxFQUFZO0lBQ1YsT0FBTyxDQUNMO01BQ0VDLEdBQUEsRUFBSztJQUNQLEdBQ0E7TUFDRUMsS0FBQSxFQUFPO01BQ1BDLFNBQUEsRUFBVztNQUNYQyxRQUFBLEVBQVVGLEtBQUEsSUFBV0EsS0FBQSxDQUFpQkcsUUFBQSxDQUFTLFdBQVcsSUFBSSxDQUFDLElBQUk7SUFDckUsRUFDRjtFQUNGO0VBRUFDLFdBQVc7SUFBRVA7RUFBZSxHQUFHO0lBQzdCLE9BQU8sQ0FBQyxTQUFLTixXQUFBLENBQUFjLGVBQUEsRUFBZ0IsS0FBS0MsT0FBQSxDQUFRVCxjQUFBLEVBQWdCQSxjQUFjLEdBQUcsQ0FBQztFQUM5RTtFQUVBVSxZQUFBLEVBQWM7SUFDWixPQUFPO01BQ0xDLFlBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUM7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0MsT0FBQSxDQUFRLEtBQUtmLElBQUk7TUFDbkM7TUFDRmdCLGVBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUY7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0csVUFBQSxDQUFXLEtBQUtqQixJQUFJO01BQ3RDO01BQ0ZrQixjQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVKO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNLLFNBQUEsQ0FBVSxLQUFLbkIsSUFBSTtNQUNyQztJQUNKO0VBQ0Y7RUFFQW9CLHFCQUFBLEVBQXVCO0lBQ3JCLE9BQU87TUFDTCxTQUFTQyxDQUFBLEtBQU0sS0FBS0MsTUFBQSxDQUFPUixRQUFBLENBQVNFLGVBQUEsQ0FBZ0I7TUFDcEQsU0FBU08sQ0FBQSxLQUFNLEtBQUtELE1BQUEsQ0FBT1IsUUFBQSxDQUFTRSxlQUFBLENBQWdCO0lBQ3REO0VBQ0Y7QUFDRixDQUFDO0FDckZELElBQU9RLGFBQUEsR0FBUWxDLFNBQUE7OztBRkRmLElBQU9FLGlDQUFBLEdBQVFnQyxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==