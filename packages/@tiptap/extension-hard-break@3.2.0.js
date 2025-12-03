System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-hard-break","3.2.0"]]);
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

// .beyond/uimport/temp/@tiptap/extension-hard-break.3.2.0.js
var extension_hard_break_3_2_0_exports = {};
__export(extension_hard_break_3_2_0_exports, {
  HardBreak: () => HardBreak,
  default: () => extension_hard_break_3_2_0_default
});
module.exports = __toCommonJS(extension_hard_break_3_2_0_exports);

// node_modules/@tiptap/extension-hard-break/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var HardBreak = import_core.Node.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: true,
      HTMLAttributes: {}
    };
  },
  inline: true,
  group: "inline",
  selectable: false,
  linebreakReplacement: true,
  parseHTML() {
    return [{
      tag: "br"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["br", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes)];
  },
  renderText() {
    return "\n";
  },
  addCommands() {
    return {
      setHardBreak: () => ({
        commands,
        chain,
        state,
        editor
      }) => {
        return commands.first([() => commands.exitCode(), () => commands.command(() => {
          const {
            selection,
            storedMarks
          } = state;
          if (selection.$from.parent.type.spec.isolating) {
            return false;
          }
          const {
            keepMarks
          } = this.options;
          const {
            splittableMarks
          } = editor.extensionManager;
          const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
          return chain().insertContent({
            type: this.name
          }).command(({
            tr,
            dispatch
          }) => {
            if (dispatch && marks && keepMarks) {
              const filteredMarks = marks.filter(mark => splittableMarks.includes(mark.type.name));
              tr.ensureMarks(filteredMarks);
            }
            return true;
          }).run();
        })]);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
});
var index_default = HardBreak;

// .beyond/uimport/temp/@tiptap/extension-hard-break.3.2.0.js
var extension_hard_break_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWhhcmQtYnJlYWsuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taGFyZC1icmVhay9zcmMvaGFyZC1icmVhay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1oYXJkLWJyZWFrL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25faGFyZF9icmVha18zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJIYXJkQnJlYWsiLCJkZWZhdWx0IiwiZXh0ZW5zaW9uX2hhcmRfYnJlYWtfM18yXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJrZWVwTWFya3MiLCJIVE1MQXR0cmlidXRlcyIsImlubGluZSIsImdyb3VwIiwic2VsZWN0YWJsZSIsImxpbmVicmVha1JlcGxhY2VtZW50IiwicGFyc2VIVE1MIiwidGFnIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJyZW5kZXJUZXh0IiwiYWRkQ29tbWFuZHMiLCJzZXRIYXJkQnJlYWsiLCJjb21tYW5kcyIsImNoYWluIiwic3RhdGUiLCJlZGl0b3IiLCJmaXJzdCIsImV4aXRDb2RlIiwiY29tbWFuZCIsInNlbGVjdGlvbiIsInN0b3JlZE1hcmtzIiwiJGZyb20iLCJwYXJlbnQiLCJ0eXBlIiwic3BlYyIsImlzb2xhdGluZyIsInNwbGl0dGFibGVNYXJrcyIsImV4dGVuc2lvbk1hbmFnZXIiLCJtYXJrcyIsIiR0byIsInBhcmVudE9mZnNldCIsImluc2VydENvbnRlbnQiLCJ0ciIsImRpc3BhdGNoIiwiZmlsdGVyZWRNYXJrcyIsImZpbHRlciIsIm1hcmsiLCJpbmNsdWRlcyIsImVuc3VyZU1hcmtzIiwicnVuIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJNb2QtRW50ZXIiLCJTaGlmdC1FbnRlciIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0NBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsa0NBQUE7OztBQ0FBLElBQUFRLFdBQUEsR0FBc0NDLE9BQUE7QUFrQy9CLElBQU1QLFNBQUEsR0FBWU0sV0FBQSxDQUFBRSxJQUFBLENBQUtDLE1BQUEsQ0FBeUI7RUFDckRDLElBQUEsRUFBTTtFQUVOQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLFNBQUEsRUFBVztNQUNYQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxNQUFBLEVBQVE7RUFFUkMsS0FBQSxFQUFPO0VBRVBDLFVBQUEsRUFBWTtFQUVaQyxvQkFBQSxFQUFzQjtFQUV0QkMsVUFBQSxFQUFZO0lBQ1YsT0FBTyxDQUFDO01BQUVDLEdBQUEsRUFBSztJQUFLLENBQUM7RUFDdkI7RUFFQUMsV0FBVztJQUFFUDtFQUFlLEdBQUc7SUFDN0IsT0FBTyxDQUFDLFVBQU1QLFdBQUEsQ0FBQWUsZUFBQSxFQUFnQixLQUFLQyxPQUFBLENBQVFULGNBQUEsRUFBZ0JBLGNBQWMsQ0FBQztFQUM1RTtFQUVBVSxXQUFBLEVBQWE7SUFDWCxPQUFPO0VBQ1Q7RUFFQUMsWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMQyxZQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVDLFFBQUE7UUFBVUMsS0FBQTtRQUFPQyxLQUFBO1FBQU9DO01BQU8sTUFBTTtRQUN0QyxPQUFPSCxRQUFBLENBQVNJLEtBQUEsQ0FBTSxDQUNwQixNQUFNSixRQUFBLENBQVNLLFFBQUEsQ0FBUyxHQUN4QixNQUNFTCxRQUFBLENBQVNNLE9BQUEsQ0FBUSxNQUFNO1VBQ3JCLE1BQU07WUFBRUMsU0FBQTtZQUFXQztVQUFZLElBQUlOLEtBQUE7VUFFbkMsSUFBSUssU0FBQSxDQUFVRSxLQUFBLENBQU1DLE1BQUEsQ0FBT0MsSUFBQSxDQUFLQyxJQUFBLENBQUtDLFNBQUEsRUFBVztZQUM5QyxPQUFPO1VBQ1Q7VUFFQSxNQUFNO1lBQUUzQjtVQUFVLElBQUksS0FBS1UsT0FBQTtVQUMzQixNQUFNO1lBQUVrQjtVQUFnQixJQUFJWCxNQUFBLENBQU9ZLGdCQUFBO1VBQ25DLE1BQU1DLEtBQUEsR0FBUVIsV0FBQSxJQUFnQkQsU0FBQSxDQUFVVSxHQUFBLENBQUlDLFlBQUEsSUFBZ0JYLFNBQUEsQ0FBVUUsS0FBQSxDQUFNTyxLQUFBLENBQU07VUFFbEYsT0FBT2YsS0FBQSxDQUFNLEVBQ1ZrQixhQUFBLENBQWM7WUFBRVIsSUFBQSxFQUFNLEtBQUszQjtVQUFLLENBQUMsRUFDakNzQixPQUFBLENBQVEsQ0FBQztZQUFFYyxFQUFBO1lBQUlDO1VBQVMsTUFBTTtZQUM3QixJQUFJQSxRQUFBLElBQVlMLEtBQUEsSUFBUzlCLFNBQUEsRUFBVztjQUNsQyxNQUFNb0MsYUFBQSxHQUFnQk4sS0FBQSxDQUFNTyxNQUFBLENBQU9DLElBQUEsSUFBUVYsZUFBQSxDQUFnQlcsUUFBQSxDQUFTRCxJQUFBLENBQUtiLElBQUEsQ0FBSzNCLElBQUksQ0FBQztjQUVuRm9DLEVBQUEsQ0FBR00sV0FBQSxDQUFZSixhQUFhO1lBQzlCO1lBRUEsT0FBTztVQUNULENBQUMsRUFDQUssR0FBQSxDQUFJO1FBQ1QsQ0FBQyxFQUNKO01BQ0g7SUFDSjtFQUNGO0VBRUFDLHFCQUFBLEVBQXVCO0lBQ3JCLE9BQU87TUFDTCxhQUFhQyxDQUFBLEtBQU0sS0FBSzFCLE1BQUEsQ0FBT0gsUUFBQSxDQUFTRCxZQUFBLENBQWE7TUFDckQsZUFBZStCLENBQUEsS0FBTSxLQUFLM0IsTUFBQSxDQUFPSCxRQUFBLENBQVNELFlBQUEsQ0FBYTtJQUN6RDtFQUNGO0FBQ0YsQ0FBQztBQ3ZHRCxJQUFPZ0MsYUFBQSxHQUFRekQsU0FBQTs7O0FGRGYsSUFBT0Usa0NBQUEsR0FBUXVELGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9