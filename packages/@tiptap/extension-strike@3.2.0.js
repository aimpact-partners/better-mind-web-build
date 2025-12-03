System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-strike","3.2.0"]]);
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

// .beyond/uimport/temp/@tiptap/extension-strike.3.2.0.js
var extension_strike_3_2_0_exports = {};
__export(extension_strike_3_2_0_exports, {
  Strike: () => Strike,
  default: () => extension_strike_3_2_0_default,
  inputRegex: () => inputRegex,
  pasteRegex: () => pasteRegex
});
module.exports = __toCommonJS(extension_strike_3_2_0_exports);

// node_modules/@tiptap/extension-strike/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var inputRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
var pasteRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
var Strike = import_core.Mark.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "s"
    }, {
      tag: "del"
    }, {
      tag: "strike"
    }, {
      style: "text-decoration",
      consuming: false,
      getAttrs: style => style.includes("line-through") ? {} : false
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["s", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleStrike: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetStrike: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [(0, import_core.markInputRule)({
      find: inputRegex,
      type: this.type
    })];
  },
  addPasteRules() {
    return [(0, import_core.markPasteRule)({
      find: pasteRegex,
      type: this.type
    })];
  }
});
var index_default = Strike;

// .beyond/uimport/temp/@tiptap/extension-strike.3.2.0.js
var extension_strike_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLXN0cmlrZS4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1zdHJpa2Uvc3JjL3N0cmlrZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1zdHJpa2Uvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9zdHJpa2VfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU3RyaWtlIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9zdHJpa2VfM18yXzBfZGVmYXVsdCIsImlucHV0UmVnZXgiLCJwYXN0ZVJlZ2V4IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9jb3JlIiwicmVxdWlyZSIsIk1hcmsiLCJjcmVhdGUiLCJuYW1lIiwiYWRkT3B0aW9ucyIsIkhUTUxBdHRyaWJ1dGVzIiwicGFyc2VIVE1MIiwidGFnIiwic3R5bGUiLCJjb25zdW1pbmciLCJnZXRBdHRycyIsImluY2x1ZGVzIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsIm9wdGlvbnMiLCJhZGRDb21tYW5kcyIsInNldFN0cmlrZSIsImNvbW1hbmRzIiwic2V0TWFyayIsInRvZ2dsZVN0cmlrZSIsInRvZ2dsZU1hcmsiLCJ1bnNldFN0cmlrZSIsInVuc2V0TWFyayIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLVNoaWZ0LXMiLCJlZGl0b3IiLCJhZGRJbnB1dFJ1bGVzIiwibWFya0lucHV0UnVsZSIsImZpbmQiLCJ0eXBlIiwiYWRkUGFzdGVSdWxlcyIsIm1hcmtQYXN0ZVJ1bGUiLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyw4QkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCw4QkFBQTs7O0FDQUEsSUFBQVUsV0FBQSxHQUFvRUMsT0FBQTtBQW9DN0QsSUFBTU4sVUFBQSxHQUFhO0FBS25CLElBQU1DLFVBQUEsR0FBYTtBQU1uQixJQUFNSixNQUFBLEdBQVNRLFdBQUEsQ0FBQUUsSUFBQSxDQUFLQyxNQUFBLENBQXNCO0VBQy9DQyxJQUFBLEVBQU07RUFFTkMsV0FBQSxFQUFhO0lBQ1gsT0FBTztNQUNMQyxjQUFBLEVBQWdCLENBQUM7SUFDbkI7RUFDRjtFQUVBQyxVQUFBLEVBQVk7SUFDVixPQUFPLENBQ0w7TUFDRUMsR0FBQSxFQUFLO0lBQ1AsR0FDQTtNQUNFQSxHQUFBLEVBQUs7SUFDUCxHQUNBO01BQ0VBLEdBQUEsRUFBSztJQUNQLEdBQ0E7TUFDRUMsS0FBQSxFQUFPO01BQ1BDLFNBQUEsRUFBVztNQUNYQyxRQUFBLEVBQVVGLEtBQUEsSUFBV0EsS0FBQSxDQUFpQkcsUUFBQSxDQUFTLGNBQWMsSUFBSSxDQUFDLElBQUk7SUFDeEUsRUFDRjtFQUNGO0VBRUFDLFdBQVc7SUFBRVA7RUFBZSxHQUFHO0lBQzdCLE9BQU8sQ0FBQyxTQUFLTixXQUFBLENBQUFjLGVBQUEsRUFBZ0IsS0FBS0MsT0FBQSxDQUFRVCxjQUFBLEVBQWdCQSxjQUFjLEdBQUcsQ0FBQztFQUM5RTtFQUVBVSxZQUFBLEVBQWM7SUFDWixPQUFPO01BQ0xDLFNBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUM7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0MsT0FBQSxDQUFRLEtBQUtmLElBQUk7TUFDbkM7TUFDRmdCLFlBQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUY7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0csVUFBQSxDQUFXLEtBQUtqQixJQUFJO01BQ3RDO01BQ0ZrQixXQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVKO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNLLFNBQUEsQ0FBVSxLQUFLbkIsSUFBSTtNQUNyQztJQUNKO0VBQ0Y7RUFFQW9CLHFCQUFBLEVBQXVCO0lBQ3JCLE9BQU87TUFDTCxlQUFlQyxDQUFBLEtBQU0sS0FBS0MsTUFBQSxDQUFPUixRQUFBLENBQVNFLFlBQUEsQ0FBYTtJQUN6RDtFQUNGO0VBRUFPLGNBQUEsRUFBZ0I7SUFDZCxPQUFPLEMsSUFDTDNCLFdBQUEsQ0FBQTRCLGFBQUEsRUFBYztNQUNaQyxJQUFBLEVBQU1sQyxVQUFBO01BQ05tQyxJQUFBLEVBQU0sS0FBS0E7SUFDYixDQUFDLEVBQ0g7RUFDRjtFQUVBQyxjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0wvQixXQUFBLENBQUFnQyxhQUFBLEVBQWM7TUFDWkgsSUFBQSxFQUFNakMsVUFBQTtNQUNOa0MsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxFQUNIO0VBQ0Y7QUFDRixDQUFDO0FDdEhELElBQU9HLGFBQUEsR0FBUXpDLE1BQUE7OztBRkRmLElBQU9FLDhCQUFBLEdBQVF1QyxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==