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

// .beyond/uimport/@tiptap/extension-hard-break.3.2.0.js
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

// .beyond/uimport/@tiptap/extension-hard-break.3.2.0.js
var extension_hard_break_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1oYXJkLWJyZWFrLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWhhcmQtYnJlYWsvc3JjL2hhcmQtYnJlYWsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taGFyZC1icmVhay9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2hhcmRfYnJlYWtfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSGFyZEJyZWFrIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9oYXJkX2JyZWFrXzNfMl8wX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiTm9kZSIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwia2VlcE1hcmtzIiwiSFRNTEF0dHJpYnV0ZXMiLCJpbmxpbmUiLCJncm91cCIsInNlbGVjdGFibGUiLCJsaW5lYnJlYWtSZXBsYWNlbWVudCIsInBhcnNlSFRNTCIsInRhZyIsInJlbmRlckhUTUwiLCJtZXJnZUF0dHJpYnV0ZXMiLCJvcHRpb25zIiwicmVuZGVyVGV4dCIsImFkZENvbW1hbmRzIiwic2V0SGFyZEJyZWFrIiwiY29tbWFuZHMiLCJjaGFpbiIsInN0YXRlIiwiZWRpdG9yIiwiZmlyc3QiLCJleGl0Q29kZSIsImNvbW1hbmQiLCJzZWxlY3Rpb24iLCJzdG9yZWRNYXJrcyIsIiRmcm9tIiwicGFyZW50IiwidHlwZSIsInNwZWMiLCJpc29sYXRpbmciLCJzcGxpdHRhYmxlTWFya3MiLCJleHRlbnNpb25NYW5hZ2VyIiwibWFya3MiLCIkdG8iLCJwYXJlbnRPZmZzZXQiLCJpbnNlcnRDb250ZW50IiwidHIiLCJkaXNwYXRjaCIsImZpbHRlcmVkTWFya3MiLCJmaWx0ZXIiLCJtYXJrIiwiaW5jbHVkZXMiLCJlbnN1cmVNYXJrcyIsInJ1biIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLUVudGVyIiwiU2hpZnQtRW50ZXIiLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQ0FBQTtBQUFBQyxRQUFBLENBQUFELGtDQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGtDQUFBOzs7QUNBQSxJQUFBUSxXQUFBLEdBQXNDQyxPQUFBO0FBa0MvQixJQUFNUCxTQUFBLEdBQVlNLFdBQUEsQ0FBQUUsSUFBQSxDQUFLQyxNQUFBLENBQXlCO0VBQ3JEQyxJQUFBLEVBQU07RUFFTkMsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMQyxTQUFBLEVBQVc7TUFDWEMsY0FBQSxFQUFnQixDQUFDO0lBQ25CO0VBQ0Y7RUFFQUMsTUFBQSxFQUFRO0VBRVJDLEtBQUEsRUFBTztFQUVQQyxVQUFBLEVBQVk7RUFFWkMsb0JBQUEsRUFBc0I7RUFFdEJDLFVBQUEsRUFBWTtJQUNWLE9BQU8sQ0FBQztNQUFFQyxHQUFBLEVBQUs7SUFBSyxDQUFDO0VBQ3ZCO0VBRUFDLFdBQVc7SUFBRVA7RUFBZSxHQUFHO0lBQzdCLE9BQU8sQ0FBQyxVQUFNUCxXQUFBLENBQUFlLGVBQUEsRUFBZ0IsS0FBS0MsT0FBQSxDQUFRVCxjQUFBLEVBQWdCQSxjQUFjLENBQUM7RUFDNUU7RUFFQVUsV0FBQSxFQUFhO0lBQ1gsT0FBTztFQUNUO0VBRUFDLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsWUFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFQyxRQUFBO1FBQVVDLEtBQUE7UUFBT0MsS0FBQTtRQUFPQztNQUFPLE1BQU07UUFDdEMsT0FBT0gsUUFBQSxDQUFTSSxLQUFBLENBQU0sQ0FDcEIsTUFBTUosUUFBQSxDQUFTSyxRQUFBLENBQVMsR0FDeEIsTUFDRUwsUUFBQSxDQUFTTSxPQUFBLENBQVEsTUFBTTtVQUNyQixNQUFNO1lBQUVDLFNBQUE7WUFBV0M7VUFBWSxJQUFJTixLQUFBO1VBRW5DLElBQUlLLFNBQUEsQ0FBVUUsS0FBQSxDQUFNQyxNQUFBLENBQU9DLElBQUEsQ0FBS0MsSUFBQSxDQUFLQyxTQUFBLEVBQVc7WUFDOUMsT0FBTztVQUNUO1VBRUEsTUFBTTtZQUFFM0I7VUFBVSxJQUFJLEtBQUtVLE9BQUE7VUFDM0IsTUFBTTtZQUFFa0I7VUFBZ0IsSUFBSVgsTUFBQSxDQUFPWSxnQkFBQTtVQUNuQyxNQUFNQyxLQUFBLEdBQVFSLFdBQUEsSUFBZ0JELFNBQUEsQ0FBVVUsR0FBQSxDQUFJQyxZQUFBLElBQWdCWCxTQUFBLENBQVVFLEtBQUEsQ0FBTU8sS0FBQSxDQUFNO1VBRWxGLE9BQU9mLEtBQUEsQ0FBTSxFQUNWa0IsYUFBQSxDQUFjO1lBQUVSLElBQUEsRUFBTSxLQUFLM0I7VUFBSyxDQUFDLEVBQ2pDc0IsT0FBQSxDQUFRLENBQUM7WUFBRWMsRUFBQTtZQUFJQztVQUFTLE1BQU07WUFDN0IsSUFBSUEsUUFBQSxJQUFZTCxLQUFBLElBQVM5QixTQUFBLEVBQVc7Y0FDbEMsTUFBTW9DLGFBQUEsR0FBZ0JOLEtBQUEsQ0FBTU8sTUFBQSxDQUFPQyxJQUFBLElBQVFWLGVBQUEsQ0FBZ0JXLFFBQUEsQ0FBU0QsSUFBQSxDQUFLYixJQUFBLENBQUszQixJQUFJLENBQUM7Y0FFbkZvQyxFQUFBLENBQUdNLFdBQUEsQ0FBWUosYUFBYTtZQUM5QjtZQUVBLE9BQU87VUFDVCxDQUFDLEVBQ0FLLEdBQUEsQ0FBSTtRQUNULENBQUMsRUFDSjtNQUNIO0lBQ0o7RUFDRjtFQUVBQyxxQkFBQSxFQUF1QjtJQUNyQixPQUFPO01BQ0wsYUFBYUMsQ0FBQSxLQUFNLEtBQUsxQixNQUFBLENBQU9ILFFBQUEsQ0FBU0QsWUFBQSxDQUFhO01BQ3JELGVBQWUrQixDQUFBLEtBQU0sS0FBSzNCLE1BQUEsQ0FBT0gsUUFBQSxDQUFTRCxZQUFBLENBQWE7SUFDekQ7RUFDRjtBQUNGLENBQUM7QUN2R0QsSUFBT2dDLGFBQUEsR0FBUXpELFNBQUE7OztBRkRmLElBQU9FLGtDQUFBLEdBQVF1RCxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==