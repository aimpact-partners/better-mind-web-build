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

// .beyond/uimport/@tiptap/extension-strike.3.2.0.js
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

// .beyond/uimport/@tiptap/extension-strike.3.2.0.js
var extension_strike_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1zdHJpa2UuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tc3RyaWtlL3NyYy9zdHJpa2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tc3RyaWtlL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25fc3RyaWtlXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlN0cmlrZSIsImRlZmF1bHQiLCJleHRlbnNpb25fc3RyaWtlXzNfMl8wX2RlZmF1bHQiLCJpbnB1dFJlZ2V4IiwicGFzdGVSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJNYXJrIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJIVE1MQXR0cmlidXRlcyIsInBhcnNlSFRNTCIsInRhZyIsInN0eWxlIiwiY29uc3VtaW5nIiwiZ2V0QXR0cnMiLCJpbmNsdWRlcyIsInJlbmRlckhUTUwiLCJtZXJnZUF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiYWRkQ29tbWFuZHMiLCJzZXRTdHJpa2UiLCJjb21tYW5kcyIsInNldE1hcmsiLCJ0b2dnbGVTdHJpa2UiLCJ0b2dnbGVNYXJrIiwidW5zZXRTdHJpa2UiLCJ1bnNldE1hcmsiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsIk1vZC1TaGlmdC1zIiwiZWRpdG9yIiwiYWRkSW5wdXRSdWxlcyIsIm1hcmtJbnB1dFJ1bGUiLCJmaW5kIiwidHlwZSIsImFkZFBhc3RlUnVsZXMiLCJtYXJrUGFzdGVSdWxlIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsOEJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsOEJBQUE7OztBQ0FBLElBQUFVLFdBQUEsR0FBb0VDLE9BQUE7QUFvQzdELElBQU1OLFVBQUEsR0FBYTtBQUtuQixJQUFNQyxVQUFBLEdBQWE7QUFNbkIsSUFBTUosTUFBQSxHQUFTUSxXQUFBLENBQUFFLElBQUEsQ0FBS0MsTUFBQSxDQUFzQjtFQUMvQ0MsSUFBQSxFQUFNO0VBRU5DLFdBQUEsRUFBYTtJQUNYLE9BQU87TUFDTEMsY0FBQSxFQUFnQixDQUFDO0lBQ25CO0VBQ0Y7RUFFQUMsVUFBQSxFQUFZO0lBQ1YsT0FBTyxDQUNMO01BQ0VDLEdBQUEsRUFBSztJQUNQLEdBQ0E7TUFDRUEsR0FBQSxFQUFLO0lBQ1AsR0FDQTtNQUNFQSxHQUFBLEVBQUs7SUFDUCxHQUNBO01BQ0VDLEtBQUEsRUFBTztNQUNQQyxTQUFBLEVBQVc7TUFDWEMsUUFBQSxFQUFVRixLQUFBLElBQVdBLEtBQUEsQ0FBaUJHLFFBQUEsQ0FBUyxjQUFjLElBQUksQ0FBQyxJQUFJO0lBQ3hFLEVBQ0Y7RUFDRjtFQUVBQyxXQUFXO0lBQUVQO0VBQWUsR0FBRztJQUM3QixPQUFPLENBQUMsU0FBS04sV0FBQSxDQUFBYyxlQUFBLEVBQWdCLEtBQUtDLE9BQUEsQ0FBUVQsY0FBQSxFQUFnQkEsY0FBYyxHQUFHLENBQUM7RUFDOUU7RUFFQVUsWUFBQSxFQUFjO0lBQ1osT0FBTztNQUNMQyxTQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVDO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNDLE9BQUEsQ0FBUSxLQUFLZixJQUFJO01BQ25DO01BQ0ZnQixZQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVGO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNHLFVBQUEsQ0FBVyxLQUFLakIsSUFBSTtNQUN0QztNQUNGa0IsV0FBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFSjtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTSyxTQUFBLENBQVUsS0FBS25CLElBQUk7TUFDckM7SUFDSjtFQUNGO0VBRUFvQixxQkFBQSxFQUF1QjtJQUNyQixPQUFPO01BQ0wsZUFBZUMsQ0FBQSxLQUFNLEtBQUtDLE1BQUEsQ0FBT1IsUUFBQSxDQUFTRSxZQUFBLENBQWE7SUFDekQ7RUFDRjtFQUVBTyxjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0wzQixXQUFBLENBQUE0QixhQUFBLEVBQWM7TUFDWkMsSUFBQSxFQUFNbEMsVUFBQTtNQUNObUMsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxFQUNIO0VBQ0Y7RUFFQUMsY0FBQSxFQUFnQjtJQUNkLE9BQU8sQyxJQUNML0IsV0FBQSxDQUFBZ0MsYUFBQSxFQUFjO01BQ1pILElBQUEsRUFBTWpDLFVBQUE7TUFDTmtDLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRUFDSDtFQUNGO0FBQ0YsQ0FBQztBQ3RIRCxJQUFPRyxhQUFBLEdBQVF6QyxNQUFBOzs7QUZEZixJQUFPRSw4QkFBQSxHQUFRdUMsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=