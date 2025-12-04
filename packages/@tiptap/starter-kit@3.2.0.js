System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0","@tiptap/core@3.12.0/jsx-runtime","@tiptap/extension-blockquote@3.2.0","@tiptap/extension-bold@3.2.0","@tiptap/extension-code@3.2.0","@tiptap/extension-code-block@3.2.0","@tiptap/extension-document@3.2.0","@tiptap/extension-hard-break@3.2.0","@tiptap/extension-heading@3.2.0","@tiptap/extension-horizontal-rule@3.2.0","@tiptap/extension-italic@3.2.0","linkifyjs@4.3.2","@tiptap/extension-link@3.2.0","@tiptap/extension-list@3.2.0","@tiptap/extension-paragraph@3.2.0","@tiptap/extension-strike@3.2.0","@tiptap/extension-text@3.2.0","@tiptap/extension-underline@3.2.0","prosemirror-dropcursor@1.8.2","@tiptap/pm@3.12.0/dropcursor","prosemirror-gapcursor@1.3.2","@tiptap/pm@3.12.0/gapcursor","rope-sequence@1.3.4","prosemirror-history@1.4.1","@tiptap/pm@3.12.0/history","@tiptap/extensions@3.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-blockquote","3.2.0"],["@tiptap/extension-bold","3.2.0"],["@tiptap/extension-code","3.2.0"],["@tiptap/extension-code-block","3.2.0"],["@tiptap/extension-document","3.2.0"],["@tiptap/extension-hard-break","3.2.0"],["@tiptap/extension-heading","3.2.0"],["@tiptap/extension-horizontal-rule","3.2.0"],["@tiptap/extension-italic","3.2.0"],["linkifyjs","4.3.2"],["@tiptap/extension-link","3.2.0"],["@tiptap/extension-list","3.2.0"],["@tiptap/extension-paragraph","3.2.0"],["@tiptap/extension-strike","3.2.0"],["@tiptap/extension-text","3.2.0"],["@tiptap/extension-underline","3.2.0"],["prosemirror-dropcursor","1.8.2"],["prosemirror-gapcursor","1.3.2"],["rope-sequence","1.3.4"],["prosemirror-history","1.4.1"],["@tiptap/extensions","3.2.0"],["@tiptap/starter-kit","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep), dep => dependencies.set('@tiptap/core@3.12.0', dep), dep => dependencies.set('@tiptap/core@3.12.0/jsx-runtime', dep), dep => dependencies.set('@tiptap/extension-blockquote@3.2.0', dep), dep => dependencies.set('@tiptap/extension-bold@3.2.0', dep), dep => dependencies.set('@tiptap/extension-code@3.2.0', dep), dep => dependencies.set('@tiptap/extension-code-block@3.2.0', dep), dep => dependencies.set('@tiptap/extension-document@3.2.0', dep), dep => dependencies.set('@tiptap/extension-hard-break@3.2.0', dep), dep => dependencies.set('@tiptap/extension-heading@3.2.0', dep), dep => dependencies.set('@tiptap/extension-horizontal-rule@3.2.0', dep), dep => dependencies.set('@tiptap/extension-italic@3.2.0', dep), dep => dependencies.set('linkifyjs@4.3.2', dep), dep => dependencies.set('@tiptap/extension-link@3.2.0', dep), dep => dependencies.set('@tiptap/extension-list@3.2.0', dep), dep => dependencies.set('@tiptap/extension-paragraph@3.2.0', dep), dep => dependencies.set('@tiptap/extension-strike@3.2.0', dep), dep => dependencies.set('@tiptap/extension-text@3.2.0', dep), dep => dependencies.set('@tiptap/extension-underline@3.2.0', dep), dep => dependencies.set('prosemirror-dropcursor@1.8.2', dep), dep => dependencies.set('@tiptap/pm@3.12.0/dropcursor', dep), dep => dependencies.set('prosemirror-gapcursor@1.3.2', dep), dep => dependencies.set('@tiptap/pm@3.12.0/gapcursor', dep), dep => dependencies.set('rope-sequence@1.3.4', dep), dep => dependencies.set('prosemirror-history@1.4.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/history', dep), dep => dependencies.set('@tiptap/extensions@3.2.0', dep)],
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

// .beyond/uimport/@tiptap/starter-kit.3.2.0.js
var starter_kit_3_2_0_exports = {};
__export(starter_kit_3_2_0_exports, {
  StarterKit: () => StarterKit,
  default: () => starter_kit_3_2_0_default
});
module.exports = __toCommonJS(starter_kit_3_2_0_exports);

// node_modules/@tiptap/starter-kit/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var import_extension_blockquote = require("@tiptap/extension-blockquote@3.2.0");
var import_extension_bold = require("@tiptap/extension-bold@3.2.0");
var import_extension_code = require("@tiptap/extension-code@3.2.0");
var import_extension_code_block = require("@tiptap/extension-code-block@3.2.0");
var import_extension_document = require("@tiptap/extension-document@3.2.0");
var import_extension_hard_break = require("@tiptap/extension-hard-break@3.2.0");
var import_extension_heading = require("@tiptap/extension-heading@3.2.0");
var import_extension_horizontal_rule = require("@tiptap/extension-horizontal-rule@3.2.0");
var import_extension_italic = require("@tiptap/extension-italic@3.2.0");
var import_extension_link = require("@tiptap/extension-link@3.2.0");
var import_extension_list = require("@tiptap/extension-list@3.2.0");
var import_extension_paragraph = require("@tiptap/extension-paragraph@3.2.0");
var import_extension_strike = require("@tiptap/extension-strike@3.2.0");
var import_extension_text = require("@tiptap/extension-text@3.2.0");
var import_extension_underline = require("@tiptap/extension-underline@3.2.0");
var import_extensions = require("@tiptap/extensions@3.2.0");
var StarterKit = import_core.Extension.create({
  name: "starterKit",
  addExtensions() {
    var _a, _b, _c, _d;
    const extensions = [];
    if (this.options.bold !== false) {
      extensions.push(import_extension_bold.Bold.configure(this.options.bold));
    }
    if (this.options.blockquote !== false) {
      extensions.push(import_extension_blockquote.Blockquote.configure(this.options.blockquote));
    }
    if (this.options.bulletList !== false) {
      extensions.push(import_extension_list.BulletList.configure(this.options.bulletList));
    }
    if (this.options.code !== false) {
      extensions.push(import_extension_code.Code.configure(this.options.code));
    }
    if (this.options.codeBlock !== false) {
      extensions.push(import_extension_code_block.CodeBlock.configure(this.options.codeBlock));
    }
    if (this.options.document !== false) {
      extensions.push(import_extension_document.Document.configure(this.options.document));
    }
    if (this.options.dropcursor !== false) {
      extensions.push(import_extensions.Dropcursor.configure(this.options.dropcursor));
    }
    if (this.options.gapcursor !== false) {
      extensions.push(import_extensions.Gapcursor.configure(this.options.gapcursor));
    }
    if (this.options.hardBreak !== false) {
      extensions.push(import_extension_hard_break.HardBreak.configure(this.options.hardBreak));
    }
    if (this.options.heading !== false) {
      extensions.push(import_extension_heading.Heading.configure(this.options.heading));
    }
    if (this.options.undoRedo !== false) {
      extensions.push(import_extensions.UndoRedo.configure(this.options.undoRedo));
    }
    if (this.options.horizontalRule !== false) {
      extensions.push(import_extension_horizontal_rule.HorizontalRule.configure(this.options.horizontalRule));
    }
    if (this.options.italic !== false) {
      extensions.push(import_extension_italic.Italic.configure(this.options.italic));
    }
    if (this.options.listItem !== false) {
      extensions.push(import_extension_list.ListItem.configure(this.options.listItem));
    }
    if (this.options.listKeymap !== false) {
      extensions.push(import_extension_list.ListKeymap.configure((_a = this.options) == null ? void 0 : _a.listKeymap));
    }
    if (this.options.link !== false) {
      extensions.push(import_extension_link.Link.configure((_b = this.options) == null ? void 0 : _b.link));
    }
    if (this.options.orderedList !== false) {
      extensions.push(import_extension_list.OrderedList.configure(this.options.orderedList));
    }
    if (this.options.paragraph !== false) {
      extensions.push(import_extension_paragraph.Paragraph.configure(this.options.paragraph));
    }
    if (this.options.strike !== false) {
      extensions.push(import_extension_strike.Strike.configure(this.options.strike));
    }
    if (this.options.text !== false) {
      extensions.push(import_extension_text.Text.configure(this.options.text));
    }
    if (this.options.underline !== false) {
      extensions.push(import_extension_underline.Underline.configure((_c = this.options) == null ? void 0 : _c.underline));
    }
    if (this.options.trailingNode !== false) {
      extensions.push(import_extensions.TrailingNode.configure((_d = this.options) == null ? void 0 : _d.trailingNode));
    }
    return extensions;
  }
});
var index_default = StarterKit;

// .beyond/uimport/@tiptap/starter-kit.3.2.0.js
var starter_kit_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL3N0YXJ0ZXIta2l0LjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvc3RhcnRlci1raXQvc3JjL3N0YXJ0ZXIta2l0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvc3RhcnRlci1raXQvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbInN0YXJ0ZXJfa2l0XzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlN0YXJ0ZXJLaXQiLCJkZWZhdWx0Iiwic3RhcnRlcl9raXRfM18yXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfZXh0ZW5zaW9uX2Jsb2NrcXVvdGUiLCJpbXBvcnRfZXh0ZW5zaW9uX2JvbGQiLCJpbXBvcnRfZXh0ZW5zaW9uX2NvZGUiLCJpbXBvcnRfZXh0ZW5zaW9uX2NvZGVfYmxvY2siLCJpbXBvcnRfZXh0ZW5zaW9uX2RvY3VtZW50IiwiaW1wb3J0X2V4dGVuc2lvbl9oYXJkX2JyZWFrIiwiaW1wb3J0X2V4dGVuc2lvbl9oZWFkaW5nIiwiaW1wb3J0X2V4dGVuc2lvbl9ob3Jpem9udGFsX3J1bGUiLCJpbXBvcnRfZXh0ZW5zaW9uX2l0YWxpYyIsImltcG9ydF9leHRlbnNpb25fbGluayIsImltcG9ydF9leHRlbnNpb25fbGlzdCIsImltcG9ydF9leHRlbnNpb25fcGFyYWdyYXBoIiwiaW1wb3J0X2V4dGVuc2lvbl9zdHJpa2UiLCJpbXBvcnRfZXh0ZW5zaW9uX3RleHQiLCJpbXBvcnRfZXh0ZW5zaW9uX3VuZGVybGluZSIsImltcG9ydF9leHRlbnNpb25zIiwiRXh0ZW5zaW9uIiwiY3JlYXRlIiwibmFtZSIsImFkZEV4dGVuc2lvbnMiLCJfYSIsIl9iIiwiX2MiLCJfZCIsImV4dGVuc2lvbnMiLCJvcHRpb25zIiwiYm9sZCIsInB1c2giLCJCb2xkIiwiY29uZmlndXJlIiwiYmxvY2txdW90ZSIsIkJsb2NrcXVvdGUiLCJidWxsZXRMaXN0IiwiQnVsbGV0TGlzdCIsImNvZGUiLCJDb2RlIiwiY29kZUJsb2NrIiwiQ29kZUJsb2NrIiwiZG9jdW1lbnQiLCJEb2N1bWVudCIsImRyb3BjdXJzb3IiLCJEcm9wY3Vyc29yIiwiZ2FwY3Vyc29yIiwiR2FwY3Vyc29yIiwiaGFyZEJyZWFrIiwiSGFyZEJyZWFrIiwiaGVhZGluZyIsIkhlYWRpbmciLCJ1bmRvUmVkbyIsIlVuZG9SZWRvIiwiaG9yaXpvbnRhbFJ1bGUiLCJIb3Jpem9udGFsUnVsZSIsIml0YWxpYyIsIkl0YWxpYyIsImxpc3RJdGVtIiwiTGlzdEl0ZW0iLCJsaXN0S2V5bWFwIiwiTGlzdEtleW1hcCIsImxpbmsiLCJMaW5rIiwib3JkZXJlZExpc3QiLCJPcmRlcmVkTGlzdCIsInBhcmFncmFwaCIsIlBhcmFncmFwaCIsInN0cmlrZSIsIlN0cmlrZSIsInRleHQiLCJUZXh0IiwidW5kZXJsaW5lIiwiVW5kZXJsaW5lIiwidHJhaWxpbmdOb2RlIiwiVHJhaWxpbmdOb2RlIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEseUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx5QkFBQTtFQUFBRSxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCx5QkFBQTs7O0FDQUEsSUFBQVEsV0FBQSxHQUEwQkMsT0FBQTtBQUUxQixJQUFBQywyQkFBQSxHQUEyQkQsT0FBQTtBQUUzQixJQUFBRSxxQkFBQSxHQUFxQkYsT0FBQTtBQUVyQixJQUFBRyxxQkFBQSxHQUFxQkgsT0FBQTtBQUVyQixJQUFBSSwyQkFBQSxHQUEwQkosT0FBQTtBQUMxQixJQUFBSyx5QkFBQSxHQUF5QkwsT0FBQTtBQUV6QixJQUFBTSwyQkFBQSxHQUEwQk4sT0FB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LENBQUFrRCxJQUFBLENBQUs5QixTQUFBLEVBQVVSLEVBQUEsUUFBS0ksT0FBQSxLQUFMLGdCQUFBSixFQUFBLENBQWNxQyxJQUFJLENBQUM7SUFDcEQ7SUFFQSxJQUFJLEtBQUtqQyxPQUFBLENBQVFtQyxXQUFBLEtBQWdCLE9BQU87TUFDdENwQyxVQUFBLENBQVdHLElBQUEsQ0FBS2pCLHFCQUFBLENBQUFtRCxXQUFBLENBQVloQyxTQUFBLENBQVUsS0FBS0osT0FBQSxDQUFRbUMsV0FBVyxDQUFDO0lBQ2pFO0lBRUEsSUFBSSxLQUFLbkMsT0FBQSxDQUFRcUMsU0FBQSxLQUFjLE9BQU87TUFDcEN0QyxVQUFBLENBQVdHLElBQUEsQ0FBS2hCLDBCQUFBLENBQUFvRCxTQUFBLENBQVVsQyxTQUFBLENBQVUsS0FBS0osT0FBQSxDQUFRcUMsU0FBUyxDQUFDO0lBQzdEO0lBRUEsSUFBSSxLQUFLckMsT0FBQSxDQUFRdUMsTUFBQSxLQUFXLE9BQU87TUFDakN4QyxVQUFBLENBQVdHLElBQUEsQ0FBS2YsdUJBQUEsQ0FBQXFELE1BQUEsQ0FBT3BDLFNBQUEsQ0FBVSxLQUFLSixPQUFBLENBQVF1QyxNQUFNLENBQUM7SUFDdkQ7SUFFQSxJQUFJLEtBQUt2QyxPQUFBLENBQVF5QyxJQUFBLEtBQVMsT0FBTztNQUMvQjFDLFVBQUEsQ0FBV0csSUFBQSxDQUFLZCxxQkFBQSxDQUFBc0QsSUFBQSxDQUFLdEMsU0FBQSxDQUFVLEtBQUtKLE9BQUEsQ0FBUXlDLElBQUksQ0FBQztJQUNuRDtJQUVBLElBQUksS0FBS3pDLE9BQUEsQ0FBUTJDLFNBQUEsS0FBYyxPQUFPO01BQ3BDNUMsVUFBQSxDQUFXRyxJQUFBLENBQUtiLDBCQUFBLENBQUF1RCxTQUFBLENBQVV4QyxTQUFBLEVBQVVQLEVBQUEsUUFBS0csT0FBQSxLQUFMLGdCQUFBSCxFQUFBLENBQWM4QyxTQUFTLENBQUM7SUFDOUQ7SUFFQSxJQUFJLEtBQUszQyxPQUFBLENBQVE2QyxZQUFBLEtBQWlCLE9BQU87TUFDdkM5QyxVQUFBLENBQVdHLElBQUEsQ0FBS1osaUJBQUEsQ0FBQXdELFlBQUEsQ0FBYTFDLFNBQUEsRUFBVU4sRUFBQSxRQUFLRSxPQUFBLEtBQUwsZ0JBQUFGLEVBQUEsQ0FBYytDLFlBQVksQ0FBQztJQUNwRTtJQUVBLE9BQU85QyxVQUFBO0VBQ1Q7QUFDRixDQUFDO0FDdFFELElBQU9nRCxhQUFBLEdBQVFoRixVQUFBOzs7QUZGZixJQUFPRSx5QkFBQSxHQUFROEUsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=