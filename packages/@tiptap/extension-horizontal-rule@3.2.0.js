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

// .beyond/uimport/temp/@tiptap/extension-horizontal-rule.3.2.0.js
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

// .beyond/uimport/temp/@tiptap/extension-horizontal-rule.3.2.0.js
var extension_horizontal_rule_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWhvcml6b250YWwtcnVsZS4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1ob3Jpem9udGFsLXJ1bGUvc3JjL2hvcml6b250YWwtcnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1ob3Jpem9udGFsLXJ1bGUvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9ob3Jpem9udGFsX3J1bGVfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSG9yaXpvbnRhbFJ1bGUiLCJkZWZhdWx0IiwiZXh0ZW5zaW9uX2hvcml6b250YWxfcnVsZV8zXzJfMF9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9jb3JlIiwicmVxdWlyZSIsImltcG9ydF9zdGF0ZSIsIk5vZGUiLCJjcmVhdGUiLCJuYW1lIiwiYWRkT3B0aW9ucyIsIkhUTUxBdHRyaWJ1dGVzIiwiZ3JvdXAiLCJwYXJzZUhUTUwiLCJ0YWciLCJyZW5kZXJIVE1MIiwibWVyZ2VBdHRyaWJ1dGVzIiwib3B0aW9ucyIsImFkZENvbW1hbmRzIiwic2V0SG9yaXpvbnRhbFJ1bGUiLCJjaGFpbiIsInN0YXRlIiwiY2FuSW5zZXJ0Tm9kZSIsInNjaGVtYSIsIm5vZGVzIiwic2VsZWN0aW9uIiwiJHRvIiwiJG9yaWdpblRvIiwiY3VycmVudENoYWluIiwiaXNOb2RlU2VsZWN0aW9uIiwiaW5zZXJ0Q29udGVudEF0IiwicG9zIiwidHlwZSIsImluc2VydENvbnRlbnQiLCJjb21tYW5kIiwidHIiLCJkaXNwYXRjaCIsIl9hIiwicG9zQWZ0ZXIiLCJlbmQiLCJub2RlQWZ0ZXIiLCJpc1RleHRibG9jayIsInNldFNlbGVjdGlvbiIsIlRleHRTZWxlY3Rpb24iLCJkb2MiLCJpc0Jsb2NrIiwiTm9kZVNlbGVjdGlvbiIsIm5vZGUiLCJwYXJlbnQiLCJjb250ZW50TWF0Y2giLCJkZWZhdWx0VHlwZSIsImluc2VydCIsInNjcm9sbEludG9WaWV3IiwicnVuIiwiYWRkSW5wdXRSdWxlcyIsIm5vZGVJbnB1dFJ1bGUiLCJmaW5kIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUNBQUE7QUFBQUMsUUFBQSxDQUFBRCx1Q0FBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCx1Q0FBQTs7O0FDQUEsSUFBQVEsV0FBQSxHQUFxRkMsT0FBQTtBQUNyRixJQUFBQyxZQUFBLEdBQTZDRCxPQUFBO0FBMkJ0QyxJQUFNUCxjQUFBLEdBQWlCTSxXQUFBLENBQUFHLElBQUEsQ0FBS0MsTUFBQSxDQUE4QjtFQUMvREMsSUFBQSxFQUFNO0VBRU5DLFdBQUEsRUFBYTtJQUNYLE9BQU87TUFDTEMsY0FBQSxFQUFnQixDQUFDO0lBQ25CO0VBQ0Y7RUFFQUMsS0FBQSxFQUFPO0VBRVBDLFVBQUEsRUFBWTtJQUNWLE9BQU8sQ0FBQztNQUFFQyxHQUFBLEVBQUs7SUFBSyxDQUFDO0VBQ3ZCO0VBRUFDLFdBQVc7SUFBRUo7RUFBZSxHQUFHO0lBQzdCLE9BQU8sQ0FBQyxVQUFNUCxXQUFBLENBQUFZLGVBQUEsRUFBZ0IsS0FBS0MsT0FBQSxDQUFRTixjQUFBLEVBQWdCQSxjQUFjLENBQUM7RUFDNUU7RUFFQU8sWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMQyxpQkFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFQyxLQUFBO1FBQU9DO01BQU0sTUFBTTtRQUVwQixJQUFJLEtBQUNqQixXQUFBLENBQUFrQixhQUFBLEVBQWNELEtBQUEsRUFBT0EsS0FBQSxDQUFNRSxNQUFBLENBQU9DLEtBQUEsQ0FBTSxLQUFLZixJQUFJLENBQUMsR0FBRztVQUN4RCxPQUFPO1FBQ1Q7UUFFQSxNQUFNO1VBQUVnQjtRQUFVLElBQUlKLEtBQUE7UUFDdEIsTUFBTTtVQUFFSyxHQUFBLEVBQUtDO1FBQVUsSUFBSUYsU0FBQTtRQUUzQixNQUFNRyxZQUFBLEdBQWVSLEtBQUEsQ0FBTTtRQUUzQixRQUFJaEIsV0FBQSxDQUFBeUIsZUFBQSxFQUFnQkosU0FBUyxHQUFHO1VBQzlCRyxZQUFBLENBQWFFLGVBQUEsQ0FBZ0JILFNBQUEsQ0FBVUksR0FBQSxFQUFLO1lBQzFDQyxJQUFBLEVBQU0sS0FBS3ZCO1VBQ2IsQ0FBQztRQUNILE9BQU87VUFDTG1CLFlBQUEsQ0FBYUssYUFBQSxDQUFjO1lBQUVELElBQUEsRUFBTSxLQUFLdkI7VUFBSyxDQUFDO1FBQ2hEO1FBRUEsT0FDRW1CLFlBQUEsQ0FFR00sT0FBQSxDQUFRLENBQUM7VUFBRUMsRUFBQTtVQUFJQztRQUFTLE1BQU07VUF6RTdDLElBQUFDLEVBQUE7VUEwRWdCLElBQUlELFFBQUEsRUFBVTtZQUNaLE1BQU07Y0FBRVY7WUFBSSxJQUFJUyxFQUFBLENBQUdWLFNBQUE7WUFDbkIsTUFBTWEsUUFBQSxHQUFXWixHQUFBLENBQUlhLEdBQUEsQ0FBSTtZQUV6QixJQUFJYixHQUFBLENBQUljLFNBQUEsRUFBVztjQUNqQixJQUFJZCxHQUFBLENBQUljLFNBQUEsQ0FBVUMsV0FBQSxFQUFhO2dCQUM3Qk4sRUFBQSxDQUFHTyxZQUFBLENBQWFwQyxZQUFBLENBQUFxQyxhQUFBLENBQWNuQyxNQUFBLENBQU8yQixFQUFBLENBQUdTLEdBQUEsRUFBS2xCLEdBQUEsQ0FBSUssR0FBQSxHQUFNLENBQUMsQ0FBQztjQUMzRCxXQUFXTCxHQUFBLENBQUljLFNBQUEsQ0FBVUssT0FBQSxFQUFTO2dCQUNoQ1YsRUFBQSxDQUFHTyxZQUFBLENBQWFwQyxZQUFBLENBQUF3QyxhQUFBLENBQWN0QyxNQUFBLENBQU8yQixFQUFBLENBQUdTLEdBQUEsRUFBS2xCLEdBQUEsQ0FBSUssR0FBRyxDQUFDO2NBQ3ZELE9BQU87Z0JBQ0xJLEVBQUEsQ0FBR08sWUFBQSxDQUFhcEMsWUFBQSxDQUFBcUMsYUFBQSxDQUFjbkMsTUFBQSxDQUFPMkIsRUFBQSxDQUFHUyxHQUFBLEVBQUtsQixHQUFBLENBQUlLLEdBQUcsQ0FBQztjQUN2RDtZQUNGLE9BQU87Y0FFTCxNQUFNZ0IsSUFBQSxJQUFPVixFQUFBLEdBQUFYLEdBQUEsQ0FBSXNCLE1BQUEsQ0FBT2hCLElBQUEsQ0FBS2lCLFlBQUEsQ0FBYUMsV0FBQSxLQUE3QixnQkFBQWIsRUFBQSxDQUEwQzdCLE1BQUE7Y0FFdkQsSUFBSXVDLElBQUEsRUFBTTtnQkFDUlosRUFBQSxDQUFHZ0IsTUFBQSxDQUFPYixRQUFBLEVBQVVTLElBQUk7Z0JBQ3hCWixFQUFBLENBQUdPLFlBQUEsQ0FBYXBDLFlBQUEsQ0FBQXFDLGFBQUEsQ0FBY25DLE1BQUEsQ0FBTzJCLEVBQUEsQ0FBR1MsR0FBQSxFQUFLTixRQUFBLEdBQVcsQ0FBQyxDQUFDO2NBQzVEO1lBQ0Y7WUFFQUgsRUFBQSxDQUFHaUIsY0FBQSxDQUFlO1VBQ3BCO1VBRUEsT0FBTztRQUNULENBQUMsRUFDQUMsR0FBQSxDQUFJO01BRVg7SUFDSjtFQUNGO0VBRUFDLGNBQUEsRUFBZ0I7SUFDZCxPQUFPLEMsSUFDTGxELFdBQUEsQ0FBQW1ELGFBQUEsRUFBYztNQUNaQyxJQUFBLEVBQU07TUFDTnhCLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRUFDSDtFQUNGO0FBQ0YsQ0FBQztBQy9HRCxJQUFPeUIsYUFBQSxHQUFRM0QsY0FBQTs7O0FGRGYsSUFBT0UsdUNBQUEsR0FBUXlELGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9