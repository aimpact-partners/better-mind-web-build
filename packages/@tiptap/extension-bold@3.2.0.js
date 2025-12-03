System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0","@tiptap/core@3.2.0/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["@tiptap/extension-bold","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep), dep => dependencies.set('@tiptap/core@3.2.0', dep), dep => dependencies.set('@tiptap/core@3.2.0/jsx-runtime', dep)],
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

// .beyond/uimport/temp/@tiptap/extension-bold.3.2.0.js
var extension_bold_3_2_0_exports = {};
__export(extension_bold_3_2_0_exports, {
  Bold: () => Bold,
  default: () => extension_bold_3_2_0_default,
  starInputRegex: () => starInputRegex,
  starPasteRegex: () => starPasteRegex,
  underscoreInputRegex: () => underscoreInputRegex,
  underscorePasteRegex: () => underscorePasteRegex
});
module.exports = __toCommonJS(extension_bold_3_2_0_exports);

// node_modules/@tiptap/extension-bold/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
var import_jsx_runtime = require("@tiptap/core@3.2.0/jsx-runtime");
var starInputRegex = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
var starPasteRegex = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
var underscoreInputRegex = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
var underscorePasteRegex = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
var Bold = import_core.Mark.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "strong"
    }, {
      tag: "b",
      getAttrs: node => node.style.fontWeight !== "normal" && null
    }, {
      style: "font-weight=400",
      clearMark: mark => mark.type.name === this.name
    }, {
      style: "font-weight",
      getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)("strong", {
      ...(0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes),
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("slot", {})
    });
  },
  addCommands() {
    return {
      setBold: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleBold: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetBold: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [(0, import_core.markInputRule)({
      find: starInputRegex,
      type: this.type
    }), (0, import_core.markInputRule)({
      find: underscoreInputRegex,
      type: this.type
    })];
  },
  addPasteRules() {
    return [(0, import_core.markPasteRule)({
      find: starPasteRegex,
      type: this.type
    }), (0, import_core.markPasteRule)({
      find: underscorePasteRegex,
      type: this.type
    })];
  }
});
var index_default = Bold;

// .beyond/uimport/temp/@tiptap/extension-bold.3.2.0.js
var extension_bold_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWJvbGQuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tYm9sZC9zcmMvYm9sZC50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tYm9sZC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2JvbGRfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQm9sZCIsImRlZmF1bHQiLCJleHRlbnNpb25fYm9sZF8zXzJfMF9kZWZhdWx0Iiwic3RhcklucHV0UmVnZXgiLCJzdGFyUGFzdGVSZWdleCIsInVuZGVyc2NvcmVJbnB1dFJlZ2V4IiwidW5kZXJzY29yZVBhc3RlUmVnZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiaW1wb3J0X2pzeF9ydW50aW1lIiwiTWFyayIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwiSFRNTEF0dHJpYnV0ZXMiLCJwYXJzZUhUTUwiLCJ0YWciLCJnZXRBdHRycyIsIm5vZGUiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJjbGVhck1hcmsiLCJtYXJrIiwidHlwZSIsInZhbHVlIiwidGVzdCIsInJlbmRlckhUTUwiLCJqc3giLCJtZXJnZUF0dHJpYnV0ZXMiLCJvcHRpb25zIiwiY2hpbGRyZW4iLCJhZGRDb21tYW5kcyIsInNldEJvbGQiLCJjb21tYW5kcyIsInNldE1hcmsiLCJ0b2dnbGVCb2xkIiwidG9nZ2xlTWFyayIsInVuc2V0Qm9sZCIsInVuc2V0TWFyayIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLWIiLCJlZGl0b3IiLCJNb2QtQiIsImFkZElucHV0UnVsZXMiLCJtYXJrSW5wdXRSdWxlIiwiZmluZCIsImFkZFBhc3RlUnVsZXMiLCJtYXJrUGFzdGVSdWxlIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsNEJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVgsNEJBQUE7OztBQ0NBLElBQUFZLFdBQUEsR0FBb0VDLE9BQUE7QUFzRjVELElBQUFDLGtCQUFBLEdBQUFELE9BQUE7QUFyREQsSUFBTVIsY0FBQSxHQUFpQjtBQUt2QixJQUFNQyxjQUFBLEdBQWlCO0FBS3ZCLElBQU1DLG9CQUFBLEdBQXVCO0FBSzdCLElBQU1DLG9CQUFBLEdBQXVCO0FBTTdCLElBQU1OLElBQUEsR0FBT1UsV0FBQSxDQUFBRyxJQUFBLENBQUtDLE1BQUEsQ0FBb0I7RUFDM0NDLElBQUEsRUFBTTtFQUVOQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLGNBQUEsRUFBZ0IsQ0FBQztJQUNuQjtFQUNGO0VBRUFDLFVBQUEsRUFBWTtJQUNWLE9BQU8sQ0FDTDtNQUNFQyxHQUFBLEVBQUs7SUFDUCxHQUNBO01BQ0VBLEdBQUEsRUFBSztNQUNMQyxRQUFBLEVBQVVDLElBQUEsSUFBU0EsSUFBQSxDQUFxQkMsS0FBQSxDQUFNQyxVQUFBLEtBQWUsWUFBWTtJQUMzRSxHQUNBO01BQ0VELEtBQUEsRUFBTztNQUNQRSxTQUFBLEVBQVdDLElBQUEsSUFBUUEsSUFBQSxDQUFLQyxJQUFBLENBQUtYLElBQUEsS0FBUyxLQUFLQTtJQUM3QyxHQUNBO01BQ0VPLEtBQUEsRUFBTztNQUNQRixRQUFBLEVBQVVPLEtBQUEsSUFBUyw0QkFBNEJDLElBQUEsQ0FBS0QsS0FBZSxLQUFLO0lBQzFFLEVBQ0Y7RUFDRjtFQUVBRSxXQUFXO0lBQUVaO0VBQWUsR0FBRztJQUM3QixPQUNFLG1CQUFBTCxrQkFBQSxDQUFBa0IsR0FBQSxFQUFDO01BQVEsT0FBR3BCLFdBQUEsQ0FBQXFCLGVBQUEsRUFBZ0IsS0FBS0MsT0FBQSxDQUFRZixjQUFBLEVBQWdCQSxjQUFjO01BQ3JFZ0IsUUFBQSxxQkFBQXJCLGtCQUFBLENBQUFrQixHQUFBLEVBQUMsVUFBSztJQUFBLENBQ1I7RUFFSjtFQUVBSSxZQUFBLEVBQWM7SUFDWixPQUFPO01BQ0xDLE9BQUEsRUFDRUEsQ0FBQSxLQUNBLENBQUM7UUFBRUM7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0MsT0FBQSxDQUFRLEtBQUt0QixJQUFJO01BQ25DO01BQ0Z1QixVQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUVGO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNHLFVBQUEsQ0FBVyxLQUFLeEIsSUFBSTtNQUN0QztNQUNGeUIsU0FBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFSjtNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTSyxTQUFBLENBQVUsS0FBSzFCLElBQUk7TUFDckM7SUFDSjtFQUNGO0VBRUEyQixxQkFBQSxFQUF1QjtJQUNyQixPQUFPO01BQ0wsU0FBU0MsQ0FBQSxLQUFNLEtBQUtDLE1BQUEsQ0FBT1IsUUFBQSxDQUFTRSxVQUFBLENBQVc7TUFDL0MsU0FBU08sQ0FBQSxLQUFNLEtBQUtELE1BQUEsQ0FBT1IsUUFBQSxDQUFTRSxVQUFBLENBQVc7SUFDakQ7RUFDRjtFQUVBUSxjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0xwQyxXQUFBLENBQUFxQyxhQUFBLEVBQWM7TUFDWkMsSUFBQSxFQUFNN0MsY0FBQTtNQUNOdUIsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxHLElBQ0RoQixXQUFBLENBQUFxQyxhQUFBLEVBQWM7TUFDWkMsSUFBQSxFQUFNM0Msb0JBQUE7TUFDTnFCLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRUFDSDtFQUNGO0VBRUF1QixjQUFBLEVBQWdCO0lBQ2QsT0FBTyxDLElBQ0x2QyxXQUFBLENBQUF3QyxhQUFBLEVBQWM7TUFDWkYsSUFBQSxFQUFNNUMsY0FBQTtNQUNOc0IsSUFBQSxFQUFNLEtBQUtBO0lBQ2IsQ0FBQyxHLElBQ0RoQixXQUFBLENBQUF3QyxhQUFBLEVBQWM7TUFDWkYsSUFBQSxFQUFNMUMsb0JBQUE7TUFDTm9CLElBQUEsRUFBTSxLQUFLQTtJQUNiLENBQUMsRUFDSDtFQUNGO0FBQ0YsQ0FBQztBQzVJRCxJQUFPeUIsYUFBQSxHQUFRbkQsSUFBQTs7O0FGRGYsSUFBT0UsNEJBQUEsR0FBUWlELGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9