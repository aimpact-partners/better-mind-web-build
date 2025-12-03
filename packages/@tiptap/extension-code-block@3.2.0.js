System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-code-block","3.2.0"]]);
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

// .beyond/uimport/temp/@tiptap/extension-code-block.3.2.0.js
var extension_code_block_3_2_0_exports = {};
__export(extension_code_block_3_2_0_exports, {
  CodeBlock: () => CodeBlock,
  backtickInputRegex: () => backtickInputRegex,
  default: () => extension_code_block_3_2_0_default,
  tildeInputRegex: () => tildeInputRegex
});
module.exports = __toCommonJS(extension_code_block_3_2_0_exports);

// node_modules/@tiptap/extension-code-block/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var import_state = require("@tiptap/pm@3.12.0/state");
var backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
var tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
var CodeBlock = import_core.Node.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: true,
      exitOnArrowDown: true,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: element => {
          var _a;
          const {
            languageClassPrefix
          } = this.options;
          const classNames = [...(((_a = element.firstElementChild) == null ? void 0 : _a.classList) || [])];
          const languages = classNames.filter(className => className.startsWith(languageClassPrefix)).map(className => className.replace(languageClassPrefix, ""));
          const language = languages[0];
          if (!language) {
            return null;
          }
          return language;
        },
        rendered: false
      }
    };
  },
  parseHTML() {
    return [{
      tag: "pre",
      preserveWhitespace: "full"
    }];
  },
  renderHTML({
    node,
    HTMLAttributes
  }) {
    return ["pre", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), ["code", {
      class: node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null
    }, 0]];
  },
  addCommands() {
    return {
      setCodeBlock: attributes => ({
        commands
      }) => {
        return commands.setNode(this.name, attributes);
      },
      toggleCodeBlock: attributes => ({
        commands
      }) => {
        return commands.toggleNode(this.name, "paragraph", attributes);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const {
          empty,
          $anchor
        } = this.editor.state.selection;
        const isAtStart = $anchor.pos === 1;
        if (!empty || $anchor.parent.type.name !== this.name) {
          return false;
        }
        if (isAtStart || !$anchor.parent.textContent.length) {
          return this.editor.commands.clearNodes();
        }
        return false;
      },
      // exit node on triple enter
      Enter: ({
        editor
      }) => {
        if (!this.options.exitOnTripleEnter) {
          return false;
        }
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");
        if (!isAtEnd || !endsWithDoubleNewline) {
          return false;
        }
        return editor.chain().command(({
          tr
        }) => {
          tr.delete($from.pos - 2, $from.pos);
          return true;
        }).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({
        editor
      }) => {
        if (!this.options.exitOnArrowDown) {
          return false;
        }
        const {
          state
        } = editor;
        const {
          selection,
          doc
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        if (!isAtEnd) {
          return false;
        }
        const after = $from.after();
        if (after === void 0) {
          return false;
        }
        const nodeAfter = doc.nodeAt(after);
        if (nodeAfter) {
          return editor.commands.command(({
            tr
          }) => {
            tr.setSelection(import_state.Selection.near(doc.resolve(after)));
            return true;
          });
        }
        return editor.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [(0, import_core.textblockTypeInputRule)({
      find: backtickInputRegex,
      type: this.type,
      getAttributes: match => ({
        language: match[1]
      })
    }), (0, import_core.textblockTypeInputRule)({
      find: tildeInputRegex,
      type: this.type,
      getAttributes: match => ({
        language: match[1]
      })
    })];
  },
  addProseMirrorPlugins() {
    return [
    // this plugin creates a code block for pasted content from VS Code
    // we can also detect the copied code language
    new import_state.Plugin({
      key: new import_state.PluginKey("codeBlockVSCodeHandler"),
      props: {
        handlePaste: (view, event) => {
          if (!event.clipboardData) {
            return false;
          }
          if (this.editor.isActive(this.type.name)) {
            return false;
          }
          const text = event.clipboardData.getData("text/plain");
          const vscode = event.clipboardData.getData("vscode-editor-data");
          const vscodeData = vscode ? JSON.parse(vscode) : void 0;
          const language = vscodeData == null ? void 0 : vscodeData.mode;
          if (!text || !language) {
            return false;
          }
          const {
            tr,
            schema
          } = view.state;
          const textNode = schema.text(text.replace(/\r\n?/g, "\n"));
          tr.replaceSelectionWith(this.type.create({
            language
          }, textNode));
          if (tr.selection.$from.parent.type !== this.type) {
            tr.setSelection(import_state.TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
          }
          tr.setMeta("paste", true);
          view.dispatch(tr);
          return true;
        }
      }
    })];
  }
});
var index_default = CodeBlock;

// .beyond/uimport/temp/@tiptap/extension-code-block.3.2.0.js
var extension_code_block_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWNvZGUtYmxvY2suMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tY29kZS1ibG9jay9zcmMvY29kZS1ibG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1jb2RlLWJsb2NrL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25fY29kZV9ibG9ja18zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJDb2RlQmxvY2siLCJiYWNrdGlja0lucHV0UmVnZXgiLCJkZWZhdWx0IiwiZXh0ZW5zaW9uX2NvZGVfYmxvY2tfM18yXzBfZGVmYXVsdCIsInRpbGRlSW5wdXRSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfc3RhdGUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJsYW5ndWFnZUNsYXNzUHJlZml4IiwiZXhpdE9uVHJpcGxlRW50ZXIiLCJleGl0T25BcnJvd0Rvd24iLCJkZWZhdWx0TGFuZ3VhZ2UiLCJIVE1MQXR0cmlidXRlcyIsImNvbnRlbnQiLCJtYXJrcyIsImdyb3VwIiwiY29kZSIsImRlZmluaW5nIiwiYWRkQXR0cmlidXRlcyIsImxhbmd1YWdlIiwib3B0aW9ucyIsInBhcnNlSFRNTCIsImVsZW1lbnQiLCJfYSIsImNsYXNzTmFtZXMiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsYXNzTGlzdCIsImxhbmd1YWdlcyIsImZpbHRlciIsImNsYXNzTmFtZSIsInN0YXJ0c1dpdGgiLCJtYXAiLCJyZXBsYWNlIiwicmVuZGVyZWQiLCJ0YWciLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJyZW5kZXJIVE1MIiwibm9kZSIsIm1lcmdlQXR0cmlidXRlcyIsImNsYXNzIiwiYXR0cnMiLCJhZGRDb21tYW5kcyIsInNldENvZGVCbG9jayIsImF0dHJpYnV0ZXMiLCJjb21tYW5kcyIsInNldE5vZGUiLCJ0b2dnbGVDb2RlQmxvY2siLCJ0b2dnbGVOb2RlIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJNb2QtQWx0LWMiLCJlZGl0b3IiLCJCYWNrc3BhY2UiLCJlbXB0eSIsIiRhbmNob3IiLCJzdGF0ZSIsInNlbGVjdGlvbiIsImlzQXRTdGFydCIsInBvcyIsInBhcmVudCIsInR5cGUiLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsImNsZWFyTm9kZXMiLCJFbnRlciIsIiRmcm9tIiwiaXNBdEVuZCIsInBhcmVudE9mZnNldCIsIm5vZGVTaXplIiwiZW5kc1dpdGhEb3VibGVOZXdsaW5lIiwiZW5kc1dpdGgiLCJjaGFpbiIsImNvbW1hbmQiLCJ0ciIsImRlbGV0ZSIsImV4aXRDb2RlIiwicnVuIiwiQXJyb3dEb3duIiwiZG9jIiwiYWZ0ZXIiLCJub2RlQWZ0ZXIiLCJub2RlQXQiLCJzZXRTZWxlY3Rpb24iLCJTZWxlY3Rpb24iLCJuZWFyIiwicmVzb2x2ZSIsImFkZElucHV0UnVsZXMiLCJ0ZXh0YmxvY2tUeXBlSW5wdXRSdWxlIiwiZmluZCIsImdldEF0dHJpYnV0ZXMiLCJtYXRjaCIsImFkZFByb3NlTWlycm9yUGx1Z2lucyIsIlBsdWdpbiIsImtleSIsIlBsdWdpbktleSIsInByb3BzIiwiaGFuZGxlUGFzdGUiLCJ2aWV3IiwiZXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiaXNBY3RpdmUiLCJ0ZXh0IiwiZ2V0RGF0YSIsInZzY29kZSIsInZzY29kZURhdGEiLCJKU09OIiwicGFyc2UiLCJtb2RlIiwic2NoZW1hIiwidGV4dE5vZGUiLCJyZXBsYWNlU2VsZWN0aW9uV2l0aCIsIlRleHRTZWxlY3Rpb24iLCJNYXRoIiwibWF4IiwiZnJvbSIsInNldE1ldGEiLCJkaXNwYXRjaCIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtDQUFB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QU87VUFDVDtVQUVBLE1BQU04RixJQUFBLEdBQU9ILEtBQUEsQ0FBTUMsYUFBQSxDQUFjRyxPQUFBLENBQVEsWUFBWTtVQUNyRCxNQUFNQyxNQUFBLEdBQVNMLEtBQUEsQ0FBTUMsYUFBQSxDQUFjRyxPQUFBLENBQVEsb0JBQW9CO1VBQy9ELE1BQU1FLFVBQUEsR0FBYUQsTUFBQSxHQUFTRSxJQUFBLENBQUtDLEtBQUEsQ0FBTUgsTUFBTSxJQUFJO1VBQ2pELE1BQU1uRixRQUFBLEdBQVdvRixVQUFBLG9CQUFBQSxVQUFBLENBQVlHLElBQUE7VUFFN0IsSUFBSSxDQUFDTixJQUFBLElBQVEsQ0FBQ2pGLFFBQUEsRUFBVTtZQUN0QixPQUFPO1VBQ1Q7VUFFQSxNQUFNO1lBQUVxRCxFQUFBO1lBQUltQztVQUFPLElBQUlYLElBQUEsQ0FBSzFDLEtBQUE7VUFLNUIsTUFBTXNELFFBQUEsR0FBV0QsTUFBQSxDQUFPUCxJQUFBLENBQUtBLElBQUEsQ0FBS3BFLE9BQUEsQ0FBUSxVQUFVLElBQUksQ0FBQztVQUl6RHdDLEVBQUEsQ0FBR3FDLG9CQUFBLENBQXFCLEtBQUtsRCxJQUFBLENBQUt0RCxNQUFBLENBQU87WUFBRWM7VUFBUyxHQUFHeUYsUUFBUSxDQUFDO1VBRWhFLElBQUlwQyxFQUFBLENBQUdqQixTQUFBLENBQVVTLEtBQUEsQ0FBTU4sTUFBQSxDQUFPQyxJQUFBLEtBQVMsS0FBS0EsSUFBQSxFQUFNO1lBRWhEYSxFQUFBLENBQUdTLFlBQUEsQ0FBYTlFLFlBQUEsQ0FBQTJHLGFBQUEsQ0FBYzNCLElBQUEsQ0FBS1gsRUFBQSxDQUFHSyxHQUFBLENBQUlPLE9BQUEsQ0FBUTJCLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUd4QyxFQUFBLENBQUdqQixTQUFBLENBQVUwRCxJQUFBLEdBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN4RjtVQUtBekMsRUFBQSxDQUFHMEMsT0FBQSxDQUFRLFNBQVMsSUFBSTtVQUV4QmxCLElBQUEsQ0FBS21CLFFBQUEsQ0FBUzNDLEVBQUU7VUFFaEIsT0FBTztRQUNUO01BQ0Y7SUFDRixDQUFDLEVBQ0g7RUFDRjtBQUNGLENBQUM7QUN4VEQsSUFBTzRDLGFBQUEsR0FBUTNILFNBQUE7OztBRkRmLElBQU9HLGtDQUFBLEdBQVF3SCxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==