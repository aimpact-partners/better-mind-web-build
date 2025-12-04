System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-horizontal-rule","3.2.0"]]);
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

// .beyond/uimport/@tiptap/extension-horizontal-rule.3.2.0.js
var extension_horizontal_rule_3_2_0_exports = {};
__export(extension_horizontal_rule_3_2_0_exports, {
  HorizontalRule: () => HorizontalRule,
  default: () => extension_horizontal_rule_3_2_0_default
});
module.exports = __toCommonJS(extension_horizontal_rule_3_2_0_exports);

// node_modules/@tiptap/extension-horizontal-rule/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var import_state = require("@tiptap/pm@3.12.0/state");
var HorizontalRule = import_core.Node.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{
      tag: "hr"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["hr", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({
        chain,
        state
      }) => {
        if (!(0, import_core.canInsertNode)(state, state.schema.nodes[this.name])) {
          return false;
        }
        const {
          selection
        } = state;
        const {
          $to: $originTo
        } = selection;
        const currentChain = chain();
        if ((0, import_core.isNodeSelection)(selection)) {
          currentChain.insertContentAt($originTo.pos, {
            type: this.name
          });
        } else {
          currentChain.insertContent({
            type: this.name
          });
        }
        return currentChain.command(({
          tr,
          dispatch
        }) => {
          var _a;
          if (dispatch) {
            const {
              $to
            } = tr.selection;
            const posAfter = $to.end();
            if ($to.nodeAfter) {
              if ($to.nodeAfter.isTextblock) {
                tr.setSelection(import_state.TextSelection.create(tr.doc, $to.pos + 1));
              } else if ($to.nodeAfter.isBlock) {
                tr.setSelection(import_state.NodeSelection.create(tr.doc, $to.pos));
              } else {
                tr.setSelection(import_state.TextSelection.create(tr.doc, $to.pos));
              }
            } else {
              const node = (_a = $to.parent.type.contentMatch.defaultType) == null ? void 0 : _a.create();
              if (node) {
                tr.insert(posAfter, node);
                tr.setSelection(import_state.TextSelection.create(tr.doc, posAfter + 1));
              }
            }
            tr.scrollIntoView();
          }
          return true;
        }).run();
      }
    };
  },
  addInputRules() {
    return [(0, import_core.nodeInputRule)({
      find: /^(?:---|—-|___\s|\*\*\*\s)$/,
      type: this.type
    })];
  }
});
var index_default = HorizontalRule;

// .beyond/uimport/@tiptap/extension-horizontal-rule.3.2.0.js
var extension_horizontal_rule_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1ob3Jpem9udGFsLXJ1bGUuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taG9yaXpvbnRhbC1ydWxlL3NyYy9ob3Jpem9udGFsLXJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taG9yaXpvbnRhbC1ydWxlL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25faG9yaXpvbnRhbF9ydWxlXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkhvcml6b250YWxSdWxlIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9ob3Jpem9udGFsX3J1bGVfM18yXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfc3RhdGUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJIVE1MQXR0cmlidXRlcyIsImdyb3VwIiwicGFyc2VIVE1MIiwidGFnIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhZGRDb21tYW5kcyIsInNldEhvcml6b250YWxSdWxlIiwiY2hhaW4iLCJzdGF0ZSIsImNhbkluc2VydE5vZGUiLCJzY2hlbWEiLCJub2RlcyIsInNlbGVjdGlvbiIsIiR0byIsIiRvcmlnaW5UbyIsImN1cnJlbnRDaGFpbiIsImlzTm9kZVNlbGVjdGlvbiIsImluc2VydENvbnRlbnRBdCIsInBvcyIsInR5cGUiLCJpbnNlcnRDb250ZW50IiwiY29tbWFuZCIsInRyIiwiZGlzcGF0Y2giLCJfYSIsInBvc0FmdGVyIiwiZW5kIiwibm9kZUFmdGVyIiwiaXNUZXh0YmxvY2siLCJzZXRTZWxlY3Rpb24iLCJUZXh0U2VsZWN0aW9uIiwiZG9jIiwiaXNCbG9jayIsIk5vZGVTZWxlY3Rpb24iLCJub2RlIiwicGFyZW50IiwiY29udGVudE1hdGNoIiwiZGVmYXVsdFR5cGUiLCJpbnNlcnQiLCJzY3JvbGxJbnRvVmlldyIsInJ1biIsImFkZElucHV0UnVsZXMiLCJub2RlSW5wdXRSdWxlIiwiZmluZCIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHVDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsdUNBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsdUNBQUE7OztBQ0FBLElBQUFRLFdBQUEsR0FBcUZDLE9BQUE7QUFDckYsSUFBQUMsWUFBQSxHQUE2Q0QsT0FBQTtBQTJCdEMsSUFBTVAsY0FBQSxHQUFpQk0sV0FBQSxDQUFBRyxJQUFBLENBQUtDLE1BQUEsQ0FBOEI7RUFDL0RDLElBQUEsRUFBTTtFQUVOQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLGNBQUEsRUFBZ0IsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLEtBQUEsRUFBTztFQUVQQyxVQUFBLEVBQVk7SUFDVixPQUFPLENBQUM7TUFBRUMsR0FBQSxFQUFLO0lBQUssQ0FBQztFQUN2QjtFQUVBQyxXQUFXO0lBQUVKO0VBQWUsR0FBRztJQUM3QixPQUFPLENBQUMsVUFBTVAsV0FBQSxDQUFBWSxlQUFBLEVBQWdCLEtBQUtDLE9BQUEsQ0FBUU4sY0FBQSxFQUFnQkEsY0FBYyxDQUFDO0VBQzVFO0VBRUFPLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsaUJBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUMsS0FBQTtRQUFPQztNQUFNLE1BQU07UUFFcEIsSUFBSSxLQUFDakIsV0FBQSxDQUFBa0IsYUFBQSxFQUFjRCxLQUFBLEVBQU9BLEtBQUEsQ0FBTUUsTUFBQSxDQUFPQyxLQUFBLENBQU0sS0FBS2YsSUFBSSxDQUFDLEdBQUc7VUFDeEQsT0FBTztRQUNUO1FBRUEsTUFBTTtVQUFFZ0I7UUFBVSxJQUFJSixLQUFBO1FBQ3RCLE1BQU07VUFBRUssR0FBQSxFQUFLQztRQUFVLElBQUlGLFNBQUE7UUFFM0IsTUFBTUcsWUFBQSxHQUFlUixLQUFBLENBQU07UUFFM0IsUUFBSWhCLFdBQUEsQ0FBQXlCLGVBQUEsRUFBZ0JKLFNBQVMsR0FBRztVQUM5QkcsWUFBQSxDQUFhRSxlQUFBLENBQWdCSCxTQUFBLENBQVVJLEdBQUEsRUFBSztZQUMxQ0MsSUFBQSxFQUFNLEtBQUt2QjtVQUNiLENBQUM7UUFDSCxPQUFPO1VBQ0xtQixZQUFBLENBQWFLLGFBQUEsQ0FBYztZQUFFRCxJQUFBLEVBQU0sS0FBS3ZCO1VBQUssQ0FBQztRQUNoRDtRQUVBLE9BQ0VtQixZQUFBLENBRUdNLE9BQUEsQ0FBUSxDQUFDO1VBQUVDLEVBQUE7VUFBSUM7UUFBUyxNQUFNO1VBekU3QyxJQUFBQyxFQUFBO1VBMEVnQixJQUFJRCxRQUFBLEVBQVU7WUFDWixNQUFNO2NBQUVWO1lBQUksSUFBSVMsRUFBQSxDQUFHVixTQUFBO1lBQ25CLE1BQU1hLFFBQUEsR0FBV1osR0FBQSxDQUFJYSxHQUFBLENBQUk7WUFFekIsSUFBSWIsR0FBQSxDQUFJYyxTQUFBLEVBQVc7Y0FDakIsSUFBSWQsR0FBQSxDQUFJYyxTQUFBLENBQVVDLFdBQUEsRUFBYTtnQkFDN0JOLEVBQUEsQ0FBR08sWUFBQSxDQUFhcEMsWUFBQSxDQUFBcUMsYUFBQSxDQUFjbkMsTUFBQSxDQUFPMkIsRUFBQSxDQUFHUyxHQUFBLEVBQUtsQixHQUFBLENBQUlLLEdBQUEsR0FBTSxDQUFDLENBQUM7Y0FDM0QsV0FBV0wsR0FBQSxDQUFJYyxTQUFBLENBQVVLLE9BQUEsRUFBUztnQkFDaENWLEVBQUEsQ0FBR08sWUFBQSxDQUFhcEMsWUFBQSxDQUFBd0MsYUFBQSxDQUFjdEMsTUFBQSxDQUFPMkIsRUFBQSxDQUFHUyxHQUFBLEVBQUtsQixHQUFBLENBQUlLLEdBQUcsQ0FBQztjQUN2RCxPQUFPO2dCQUNMSSxFQUFBLENBQUdPLFlBQUEsQ0FBYXBDLFlBQUEsQ0FBQXFDLGFBQUEsQ0FBY25DLE1BQUEsQ0FBTzJCLEVBQUEsQ0FBR1MsR0FBQSxFQUFLbEIsR0FBQSxDQUFJSyxHQUFHLENBQUM7Y0FDdkQ7WUFDRixPQUFPO2NBRUwsTUFBTWdCLElBQUEsSUFBT1YsRUFBQSxHQUFBWCxHQUFBLENBQUlzQixNQUFBLENBQU9oQixJQUFBLENBQUtpQixZQUFBLENBQWFDLFdBQUEsS0FBN0IsZ0JBQUFiLEVBQUEsQ0FBMEM3QixNQUFBO2NBRXZELElBQUl1QyxJQUFBLEVBQU07Z0JBQ1JaLEVBQUEsQ0FBR2dCLE1BQUEsQ0FBT2IsUUFBQSxFQUFVUyxJQUFJO2dCQUN4QlosRUFBQSxDQUFHTyxZQUFBLENBQWFwQyxZQUFBLENBQUFxQyxhQUFBLENBQWNuQyxNQUFBLENBQU8yQixFQUFBLENBQUdTLEdBQUEsRUFBS04sUUFBQSxHQUFXLENBQUMsQ0FBQztjQUM1RDtZQUNGO1lBRUFILEVBQUEsQ0FBR2lCLGNBQUEsQ0FBZTtVQUNwQjtVQUVBLE9BQU87UUFDVCxDQUFDLEVBQ0FDLEdBQUEsQ0FBSTtNQUVYO0lBQ0o7RUFDRjtFQUVBQyxjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0xsRCxXQUFBLENBQUFtRCxhQUFBLEVBQWM7TUFDWkMsSUFBQSxFQUFNO01BQ054QixJQUFBLEVBQU0sS0FBS0E7SUFDYixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QUMvR0QsSUFBT3lCLGFBQUEsR0FBUTNELGNBQUE7OztBRkRmLElBQU9FLHVDQUFBLEdBQVF5RCxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==