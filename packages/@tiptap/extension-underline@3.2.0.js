System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["@tiptap/extension-underline","3.2.0"]]);
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

// .beyond/uimport/temp/@tiptap/extension-underline.3.2.0.js
var extension_underline_3_2_0_exports = {};
__export(extension_underline_3_2_0_exports, {
  Underline: () => Underline,
  default: () => extension_underline_3_2_0_default
});
module.exports = __toCommonJS(extension_underline_3_2_0_exports);

// node_modules/@tiptap/extension-underline/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
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

// .beyond/uimport/temp/@tiptap/extension-underline.3.2.0.js
var extension_underline_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLXVuZGVybGluZS4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi11bmRlcmxpbmUvc3JjL3VuZGVybGluZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi11bmRlcmxpbmUvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl91bmRlcmxpbmVfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiVW5kZXJsaW5lIiwiZGVmYXVsdCIsImV4dGVuc2lvbl91bmRlcmxpbmVfM18yXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJNYXJrIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJIVE1MQXR0cmlidXRlcyIsInBhcnNlSFRNTCIsInRhZyIsInN0eWxlIiwiY29uc3VtaW5nIiwiZ2V0QXR0cnMiLCJpbmNsdWRlcyIsInJlbmRlckhUTUwiLCJtZXJnZUF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWRkQ29tbWFuZHMiLCJzZXRVbmRlcmxpbmUiLCJjb21tYW5kcyIsInNldE1hcmsiLCJ0b2dnbGVVbmRlcmxpbmUiLCJ0b2dnbGVNYXJrIiwidW5zZXRVbmRlcmxpbmUiLCJ1bnNldE1hcmsiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsIk1vZC11IiwiZWRpdG9yIiwiTW9kLVUiLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxpQ0FBQTtBQUFBQyxRQUFBLENBQUFELGlDQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGlDQUFBOzs7QUNBQSxJQUFBUSxXQUFBLEdBQXNDQyxPQUFBO0FBcUMvQixJQUFNUCxTQUFBLEdBQVlNLFdBQUEsQ0FBQUUsSUFBQSxDQUFLQyxNQUFBLENBQXlCO0VBQ3JEQyxJQUFBLEVBQU07RUFFTkMsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxVQUFBLEVBQVk7SUFDVixPQUFPLENBQ0w7TUFDRUMsR0FBQSxFQUFLO0lBQ1AsR0FDQTtNQUNFQyxLQUFBLEVBQU87TUFDUEMsU0FBQSxFQUFXO01BQ1hDLFFBQUEsRUFBVUYsS0FBQSxJQUFXQSxLQUFBLENBQWlCRyxRQUFBLENBQVMsV0FBVyxJQUFJLENBQUMsSUFBSTtJQUNyRSxFQUNGO0VBQ0Y7RUFFQUMsV0FBVztJQUFFUDtFQUFlLEdBQUc7SUFDN0IsT0FBTyxDQUFDLFNBQUtOLFdBQUEsQ0FBQWMsZUFBQSxFQUFnQixLQUFLQyxPQUFBLENBQVFULGNBQUEsRUFBZ0JBLGNBQWMsR0FBRyxDQUFDO0VBQzlFO0VBRUFVLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsWUFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFQztNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTQyxPQUFBLENBQVEsS0FBS2YsSUFBSTtNQUNuQztNQUNGZ0IsZUFBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFRjtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTRyxVQUFBLENBQVcsS0FBS2pCLElBQUk7TUFDdEM7TUFDRmtCLGNBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUo7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0ssU0FBQSxDQUFVLEtBQUtuQixJQUFJO01BQ3JDO0lBQ0o7RUFDRjtFQUVBb0IscUJBQUEsRUFBdUI7SUFDckIsT0FBTztNQUNMLFNBQVNDLENBQUEsS0FBTSxLQUFLQyxNQUFBLENBQU9SLFFBQUEsQ0FBU0UsZUFBQSxDQUFnQjtNQUNwRCxTQUFTTyxDQUFBLEtBQU0sS0FBS0QsTUFBQSxDQUFPUixRQUFBLENBQVNFLGVBQUEsQ0FBZ0I7SUFDdEQ7RUFDRjtBQUNGLENBQUM7QUNyRkQsSUFBT1EsYUFBQSxHQUFRbEMsU0FBQTs7O0FGRGYsSUFBT0UsaUNBQUEsR0FBUWdDLGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9