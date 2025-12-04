System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-heading","3.2.0"]]);
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

// .beyond/uimport/@tiptap/extension-heading.3.2.0.js
var extension_heading_3_2_0_exports = {};
__export(extension_heading_3_2_0_exports, {
  Heading: () => Heading,
  default: () => extension_heading_3_2_0_default
});
module.exports = __toCommonJS(extension_heading_3_2_0_exports);

// node_modules/@tiptap/extension-heading/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
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

// .beyond/uimport/@tiptap/extension-heading.3.2.0.js
var extension_heading_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1oZWFkaW5nLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWhlYWRpbmcvc3JjL2hlYWRpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taGVhZGluZy9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2hlYWRpbmdfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSGVhZGluZyIsImRlZmF1bHQiLCJleHRlbnNpb25faGVhZGluZ18zXzJfMF9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9jb3JlIiwicmVxdWlyZSIsIk5vZGUiLCJjcmVhdGUiLCJuYW1lIiwiYWRkT3B0aW9ucyIsImxldmVscyIsIkhUTUxBdHRyaWJ1dGVzIiwiY29udGVudCIsImdyb3VwIiwiZGVmaW5pbmciLCJhZGRBdHRyaWJ1dGVzIiwibGV2ZWwiLCJyZW5kZXJlZCIsInBhcnNlSFRNTCIsIm9wdGlvbnMiLCJtYXAiLCJ0YWciLCJhdHRycyIsInJlbmRlckhUTUwiLCJub2RlIiwiaGFzTGV2ZWwiLCJpbmNsdWRlcyIsIm1lcmdlQXR0cmlidXRlcyIsImFkZENvbW1hbmRzIiwic2V0SGVhZGluZyIsImF0dHJpYnV0ZXMiLCJjb21tYW5kcyIsInNldE5vZGUiLCJ0b2dnbGVIZWFkaW5nIiwidG9nZ2xlTm9kZSIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwicmVkdWNlIiwiaXRlbXMiLCJlZGl0b3IiLCJhZGRJbnB1dFJ1bGVzIiwidGV4dGJsb2NrVHlwZUlucHV0UnVsZSIsImZpbmQiLCJSZWdFeHAiLCJNYXRoIiwibWluIiwidHlwZSIsImdldEF0dHJpYnV0ZXMiLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwrQkFBQTtBQUFBQyxRQUFBLENBQUFELCtCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLCtCQUFBOzs7QUNBQSxJQUFBUSxXQUFBLEdBQThEQyxPQUFBO0FBOEN2RCxJQUFNUCxPQUFBLEdBQVVNLFdBQUEsQ0FBQUUsSUFBQSxDQUFLQyxNQUFBLENBQXVCO0VBQ2pEQyxJQUFBLEVBQU07RUFFTkMsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMQyxNQUFBLEVBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztNQUN6QkMsY0FBQSxFQUFnQixDQUFDO0lBQ25CO0VBQ0Y7RUFFQUMsT0FBQSxFQUFTO0VBRVRDLEtBQUEsRUFBTztFQUVQQyxRQUFBLEVBQVU7RUFFVkMsY0FBQSxFQUFnQjtJQUNkLE9BQU87TUFDTEMsS0FBQSxFQUFPO1FBQ0xqQixPQUFBLEVBQVM7UUFDVGtCLFFBQUEsRUFBVTtNQUNaO0lBQ0Y7RUFDRjtFQUVBQyxVQUFBLEVBQVk7SUFDVixPQUFPLEtBQUtDLE9BQUEsQ0FBUVQsTUFBQSxDQUFPVSxHQUFBLENBQUtKLEtBQUEsS0FBa0I7TUFDaERLLEdBQUEsRUFBSyxJQUFJTCxLQUFLO01BQ2RNLEtBQUEsRUFBTztRQUFFTjtNQUFNO0lBQ2pCLEVBQUU7RUFDSjtFQUVBTyxXQUFXO0lBQUVDLElBQUE7SUFBTWI7RUFBZSxHQUFHO0lBQ25DLE1BQU1jLFFBQUEsR0FBVyxLQUFLTixPQUFBLENBQVFULE1BQUEsQ0FBT2dCLFFBQUEsQ0FBU0YsSUFBQSxDQUFLRixLQUFBLENBQU1OLEtBQUs7SUFDOUQsTUFBTUEsS0FBQSxHQUFRUyxRQUFBLEdBQVdELElBQUEsQ0FBS0YsS0FBQSxDQUFNTixLQUFBLEdBQVEsS0FBS0csT0FBQSxDQUFRVCxNQUFBLENBQU8sQ0FBQztJQUVqRSxPQUFPLENBQUMsSUFBSU0sS0FBSyxRQUFJWixXQUFBLENBQUF1QixlQUFBLEVBQWdCLEtBQUtSLE9BQUEsQ0FBUVIsY0FBQSxFQUFnQkEsY0FBYyxHQUFHLENBQUM7RUFDdEY7RUFFQWlCLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsVUFBQSxFQUNFQyxVQUFBLElBQ0EsQ0FBQztRQUFFQztNQUFTLE1BQU07UUFDaEIsSUFBSSxDQUFDLEtBQUtaLE9BQUEsQ0FBUVQsTUFBQSxDQUFPZ0IsUUFBQSxDQUFTSSxVQUFBLENBQVdkLEtBQUssR0FBRztVQUNuRCxPQUFPO1FBQ1Q7UUFFQSxPQUFPZSxRQUFBLENBQVNDLE9BQUEsQ0FBUSxLQUFLeEIsSUFBQSxFQUFNc0IsVUFBVTtNQUMvQztNQUNGRyxhQUFBLEVBQ0VILFVBQUEsSUFDQSxDQUFDO1FBQUVDO01BQVMsTUFBTTtRQUNoQixJQUFJLENBQUMsS0FBS1osT0FBQSxDQUFRVCxNQUFBLENBQU9nQixRQUFBLENBQVNJLFVBQUEsQ0FBV2QsS0FBSyxHQUFHO1VBQ25ELE9BQU87UUFDVDtRQUVBLE9BQU9lLFFBQUEsQ0FBU0csVUFBQSxDQUFXLEtBQUsxQixJQUFBLEVBQU0sYUFBYXNCLFVBQVU7TUFDL0Q7SUFDSjtFQUNGO0VBRUFLLHFCQUFBLEVBQXVCO0lBQ3JCLE9BQU8sS0FBS2hCLE9BQUEsQ0FBUVQsTUFBQSxDQUFPMEIsTUFBQSxDQUN6QixDQUFDQyxLQUFBLEVBQU9yQixLQUFBLE1BQVc7TUFDakIsR0FBR3FCLEtBQUE7TUFDSCxHQUFHO1FBQ0QsQ0FBQyxXQUFXckIsS0FBSyxFQUFFLEdBQUcsTUFBTSxLQUFLc0IsTUFBQSxDQUFPUCxRQUFBLENBQVNFLGFBQUEsQ0FBYztVQUFFakI7UUFBTSxDQUFDO01BQzFFO0lBQ0YsSUFDQSxDQUFDLENBQ0g7RUFDRjtFQUVBdUIsY0FBQSxFQUFnQjtJQUNkLE9BQU8sS0FBS3BCLE9BQUEsQ0FBUVQsTUFBQSxDQUFPVSxHQUFBLENBQUlKLEtBQUEsSUFBUztNQUN0QyxXQUFPWixXQUFBLENBQUFvQyxzQkFBQSxFQUF1QjtRQUM1QkMsSUFBQSxFQUFNLElBQUlDLE1BQUEsQ0FBTyxPQUFPQyxJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHLEtBQUt6QixPQUFBLENBQVFULE1BQU0sQ0FBQyxJQUFJTSxLQUFLLFFBQVE7UUFDekU2QixJQUFBLEVBQU0sS0FBS0EsSUFBQTtRQUNYQyxhQUFBLEVBQWU7VUFDYjlCO1FBQ0Y7TUFDRixDQUFDO0lBQ0gsQ0FBQztFQUNIO0FBQ0YsQ0FBQztBQy9IRCxJQUFPK0IsYUFBQSxHQUFRakQsT0FBQTs7O0FGRGYsSUFBT0UsK0JBQUEsR0FBUStDLGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9