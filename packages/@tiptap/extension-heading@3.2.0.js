System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["@tiptap/extension-heading","3.2.0"]]);
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

// .beyond/uimport/temp/@tiptap/extension-heading.3.2.0.js
var extension_heading_3_2_0_exports = {};
__export(extension_heading_3_2_0_exports, {
  Heading: () => Heading,
  default: () => extension_heading_3_2_0_default
});
module.exports = __toCommonJS(extension_heading_3_2_0_exports);

// node_modules/@tiptap/extension-heading/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
var Heading = import_core.Node.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: true,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: false
      }
    };
  },
  parseHTML() {
    return this.options.levels.map(level => ({
      tag: `h${level}`,
      attrs: {
        level
      }
    }));
  },
  renderHTML({
    node,
    HTMLAttributes
  }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);
    const level = hasLevel ? node.attrs.level : this.options.levels[0];
    return [`h${level}`, (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setHeading: attributes => ({
        commands
      }) => {
        if (!this.options.levels.includes(attributes.level)) {
          return false;
        }
        return commands.setNode(this.name, attributes);
      },
      toggleHeading: attributes => ({
        commands
      }) => {
        if (!this.options.levels.includes(attributes.level)) {
          return false;
        }
        return commands.toggleNode(this.name, "paragraph", attributes);
      }
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((items, level) => ({
      ...items,
      ...{
        [`Mod-Alt-${level}`]: () => this.editor.commands.toggleHeading({
          level
        })
      }
    }), {});
  },
  addInputRules() {
    return this.options.levels.map(level => {
      return (0, import_core.textblockTypeInputRule)({
        find: new RegExp(`^(#{${Math.min(...this.options.levels)},${level}})\\s$`),
        type: this.type,
        getAttributes: {
          level
        }
      });
    });
  }
});
var index_default = Heading;

// .beyond/uimport/temp/@tiptap/extension-heading.3.2.0.js
var extension_heading_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWhlYWRpbmcuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taGVhZGluZy9zcmMvaGVhZGluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1oZWFkaW5nL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25faGVhZGluZ18zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJIZWFkaW5nIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9oZWFkaW5nXzNfMl8wX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiTm9kZSIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwibGV2ZWxzIiwiSFRNTEF0dHJpYnV0ZXMiLCJjb250ZW50IiwiZ3JvdXAiLCJkZWZpbmluZyIsImFkZEF0dHJpYnV0ZXMiLCJsZXZlbCIsInJlbmRlcmVkIiwicGFyc2VIVE1MIiwib3B0aW9ucyIsIm1hcCIsInRhZyIsImF0dHJzIiwicmVuZGVySFRNTCIsIm5vZGUiLCJoYXNMZXZlbCIsImluY2x1ZGVzIiwibWVyZ2VBdHRyaWJ1dGVzIiwiYWRkQ29tbWFuZHMiLCJzZXRIZWFkaW5nIiwiYXR0cmlidXRlcyIsImNvbW1hbmRzIiwic2V0Tm9kZSIsInRvZ2dsZUhlYWRpbmciLCJ0b2dnbGVOb2RlIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJyZWR1Y2UiLCJpdGVtcyIsImVkaXRvciIsImFkZElucHV0UnVsZXMiLCJ0ZXh0YmxvY2tUeXBlSW5wdXRSdWxlIiwiZmluZCIsIlJlZ0V4cCIsIk1hdGgiLCJtaW4iLCJ0eXBlIiwiZ2V0QXR0cmlidXRlcyIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsK0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsK0JBQUE7OztBQ0FBLElBQUFRLFdBQUEsR0FBOERDLE9BQUE7QUE4Q3ZELElBQU1QLE9BQUEsR0FBVU0sV0FBQSxDQUFBRSxJQUFBLENBQUtDLE1BQUEsQ0FBdUI7RUFDakRDLElBQUEsRUFBTTtFQUVOQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLE1BQUEsRUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO01BQ3pCQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxPQUFBLEVBQVM7RUFFVEMsS0FBQSxFQUFPO0VBRVBDLFFBQUEsRUFBVTtFQUVWQyxjQUFBLEVBQWdCO0lBQ2QsT0FBTztNQUNMQyxLQUFBLEVBQU87UUFDTGpCLE9BQUEsRUFBUztRQUNUa0IsUUFBQSxFQUFVO01BQ1o7SUFDRjtFQUNGO0VBRUFDLFVBQUEsRUFBWTtJQUNWLE9BQU8sS0FBS0MsT0FBQSxDQUFRVCxNQUFBLENBQU9VLEdBQUEsQ0FBS0osS0FBQSxLQUFrQjtNQUNoREssR0FBQSxFQUFLLElBQUlMLEtBQUs7TUFDZE0sS0FBQSxFQUFPO1FBQUVOO01BQU07SUFDakIsRUFBRTtFQUNKO0VBRUFPLFdBQVc7SUFBRUMsSUFBQTtJQUFNYjtFQUFlLEdBQUc7SUFDbkMsTUFBTWMsUUFBQSxHQUFXLEtBQUtOLE9BQUEsQ0FBUVQsTUFBQSxDQUFPZ0IsUUFBQSxDQUFTRixJQUFBLENBQUtGLEtBQUEsQ0FBTU4sS0FBSztJQUM5RCxNQUFNQSxLQUFBLEdBQVFTLFFBQUEsR0FBV0QsSUFBQSxDQUFLRixLQUFBLENBQU1OLEtBQUEsR0FBUSxLQUFLRyxPQUFBLENBQVFULE1BQUEsQ0FBTyxDQUFDO0lBRWpFLE9BQU8sQ0FBQyxJQUFJTSxLQUFLLFFBQUlaLFdBQUEsQ0FBQXVCLGVBQUEsRUFBZ0IsS0FBS1IsT0FBQSxDQUFRUixjQUFBLEVBQWdCQSxjQUFjLEdBQUcsQ0FBQztFQUN0RjtFQUVBaUIsWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMQyxVQUFBLEVBQ0VDLFVBQUEsSUFDQSxDQUFDO1FBQUVDO01BQVMsTUFBTTtRQUNoQixJQUFJLENBQUMsS0FBS1osT0FBQSxDQUFRVCxNQUFBLENBQU9nQixRQUFBLENBQVNJLFVBQUEsQ0FBV2QsS0FBSyxHQUFHO1VBQ25ELE9BQU87UUFDVDtRQUVBLE9BQU9lLFFBQUEsQ0FBU0MsT0FBQSxDQUFRLEtBQUt4QixJQUFBLEVBQU1zQixVQUFVO01BQy9DO01BQ0ZHLGFBQUEsRUFDRUgsVUFBQSxJQUNBLENBQUM7UUFBRUM7TUFBUyxNQUFNO1FBQ2hCLElBQUksQ0FBQyxLQUFLWixPQUFBLENBQVFULE1BQUEsQ0FBT2dCLFFBQUEsQ0FBU0ksVUFBQSxDQUFXZCxLQUFLLEdBQUc7VUFDbkQsT0FBTztRQUNUO1FBRUEsT0FBT2UsUUFBQSxDQUFTRyxVQUFBLENBQVcsS0FBSzFCLElBQUEsRUFBTSxhQUFhc0IsVUFBVTtNQUMvRDtJQUNKO0VBQ0Y7RUFFQUsscUJBQUEsRUFBdUI7SUFDckIsT0FBTyxLQUFLaEIsT0FBQSxDQUFRVCxNQUFBLENBQU8wQixNQUFBLENBQ3pCLENBQUNDLEtBQUEsRUFBT3JCLEtBQUEsTUFBVztNQUNqQixHQUFHcUIsS0FBQTtNQUNILEdBQUc7UUFDRCxDQUFDLFdBQVdyQixLQUFLLEVBQUUsR0FBRyxNQUFNLEtBQUtzQixNQUFBLENBQU9QLFFBQUEsQ0FBU0UsYUFBQSxDQUFjO1VBQUVqQjtRQUFNLENBQUM7TUFDMUU7SUFDRixJQUNBLENBQUMsQ0FDSDtFQUNGO0VBRUF1QixjQUFBLEVBQWdCO0lBQ2QsT0FBTyxLQUFLcEIsT0FBQSxDQUFRVCxNQUFBLENBQU9VLEdBQUEsQ0FBSUosS0FBQSxJQUFTO01BQ3RDLFdBQU9aLFdBQUEsQ0FBQW9DLHNCQUFBLEVBQXVCO1FBQzVCQyxJQUFBLEVBQU0sSUFBSUMsTUFBQSxDQUFPLE9BQU9DLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUcsS0FBS3pCLE9BQUEsQ0FBUVQsTUFBTSxDQUFDLElBQUlNLEtBQUssUUFBUTtRQUN6RTZCLElBQUEsRUFBTSxLQUFLQSxJQUFBO1FBQ1hDLGFBQUEsRUFBZTtVQUNiOUI7UUFDRjtNQUNGLENBQUM7SUFDSCxDQUFDO0VBQ0g7QUFDRixDQUFDO0FDL0hELElBQU8rQixhQUFBLEdBQVFqRCxPQUFBOzs7QUZEZixJQUFPRSwrQkFBQSxHQUFRK0MsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=