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

// .beyond/uimport/@tiptap/extension-code-block.3.2.0.js
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

// .beyond/uimport/@tiptap/extension-code-block.3.2.0.js
var extension_code_block_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1jb2RlLWJsb2NrLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWNvZGUtYmxvY2svc3JjL2NvZGUtYmxvY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tY29kZS1ibG9jay9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2NvZGVfYmxvY2tfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ29kZUJsb2NrIiwiYmFja3RpY2tJbnB1dFJlZ2V4IiwiZGVmYXVsdCIsImV4dGVuc2lvbl9jb2RlX2Jsb2NrXzNfMl8wX2RlZmF1bHQiLCJ0aWxkZUlucHV0UmVnZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiaW1wb3J0X3N0YXRlIiwiTm9kZSIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwibGFuZ3VhZ2VDbGFzc1ByZWZpeCIsImV4aXRPblRyaXBsZUVudGVyIiwiZXhpdE9uQXJyb3dEb3duIiwiZGVmYXVsdExhbmd1YWdlIiwiSFRNTEF0dHJpYnV0ZXMiLCJjb250ZW50IiwibWFya3MiLCJncm91cCIsImNvZGUiLCJkZWZpbmluZyIsImFkZEF0dHJpYnV0ZXMiLCJsYW5ndWFnZSIsIm9wdGlvbnMiLCJwYXJzZUhUTUwiLCJlbGVtZW50IiwiX2EiLCJjbGFzc05hbWVzIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbGFzc0xpc3QiLCJsYW5ndWFnZXMiLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJzdGFydHNXaXRoIiwibWFwIiwicmVwbGFjZSIsInJlbmRlcmVkIiwidGFnIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwicmVuZGVySFRNTCIsIm5vZGUiLCJtZXJnZUF0dHJpYnV0ZXMiLCJjbGFzcyIsImF0dHJzIiwiYWRkQ29tbWFuZHMiLCJzZXRDb2RlQmxvY2siLCJhdHRyaWJ1dGVzIiwiY29tbWFuZHMiLCJzZXROb2RlIiwidG9nZ2xlQ29kZUJsb2NrIiwidG9nZ2xlTm9kZSIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLUFsdC1jIiwiZWRpdG9yIiwiQmFja3NwYWNlIiwiZW1wdHkiLCIkYW5jaG9yIiwic3RhdGUiLCJzZWxlY3Rpb24iLCJpc0F0U3RhcnQiLCJwb3MiLCJwYXJlbnQiLCJ0eXBlIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJjbGVhck5vZGVzIiwiRW50ZXIiLCIkZnJvbSIsImlzQXRFbmQiLCJwYXJlbnRPZmZzZXQiLCJub2RlU2l6ZSIsImVuZHNXaXRoRG91YmxlTmV3bGluZSIsImVuZHNXaXRoIiwiY2hhaW4iLCJjb21tYW5kIiwidHIiLCJkZWxldGUiLCJleGl0Q29kZSIsInJ1biIsIkFycm93RG93biIsImRvYyIsImFmdGVyIiwibm9kZUFmdGVyIiwibm9kZUF0Iiwic2V0U2VsZWN0aW9uIiwiU2VsZWN0aW9uIiwibmVhciIsInJlc29sdmUiLCJhZGRJbnB1dFJ1bGVzIiwidGV4dGJsb2NrVHlwZUlucHV0UnVsZSIsImZpbmQiLCJnZXRBdHRyaWJ1dGVzIiwibWF0Y2giLCJhZGRQcm9zZU1pcnJvclBsdWdpbnMiLCJQbHVnaW4iLCJrZXkiLCJQbHVnaW5LZXkiLCJwcm9wcyIsImhhbmRsZVBhc3RlIiwidmlldyIsImV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsImlzQWN0aXZlIiwidGV4dCIsImdldERhdGEiLCJ2c2NvZGUiLCJ2c2NvZGVEYXRhIiwiSlNPTiIsInBhcnNlIiwibW9kZSIsInNjaGVtYSIsInRleHROb2RlIiwicmVwbGFjZVNlbGVjdGlvbldpdGgiLCJUZXh0U2VsZWN0aW9uIiwiTWF0aCIsIm1heCIsImZyb20iLCJzZXRNZXRhIiwiZGlzcGF0Y2giLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQ0FBQTtBQUFB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Q1Q7VUFFQSxNQUFNOEYsSUFBQSxHQUFPSCxLQUFBLENBQU1DLGFBQUEsQ0FBY0csT0FBQSxDQUFRLFlBQVk7VUFDckQsTUFBTUMsTUFBQSxHQUFTTCxLQUFBLENBQU1DLGFBQUEsQ0FBY0csT0FBQSxDQUFRLG9CQUFvQjtVQUMvRCxNQUFNRSxVQUFBLEdBQWFELE1BQUEsR0FBU0UsSUFBQSxDQUFLQyxLQUFBLENBQU1ILE1BQU0sSUFBSTtVQUNqRCxNQUFNbkYsUUFBQSxHQUFXb0YsVUFBQSxvQkFBQUEsVUFBQSxDQUFZRyxJQUFBO1VBRTdCLElBQUksQ0FBQ04sSUFBQSxJQUFRLENBQUNqRixRQUFBLEVBQVU7WUFDdEIsT0FBTztVQUNUO1VBRUEsTUFBTTtZQUFFcUQsRUFBQTtZQUFJbUM7VUFBTyxJQUFJWCxJQUFBLENBQUsxQyxLQUFBO1VBSzVCLE1BQU1zRCxRQUFBLEdBQVdELE1BQUEsQ0FBT1AsSUFBQSxDQUFLQSxJQUFBLENBQUtwRSxPQUFBLENBQVEsVUFBVSxJQUFJLENBQUM7VUFJekR3QyxFQUFBLENBQUdxQyxvQkFBQSxDQUFxQixLQUFLbEQsSUFBQSxDQUFLdEQsTUFBQSxDQUFPO1lBQUVjO1VBQVMsR0FBR3lGLFFBQVEsQ0FBQztVQUVoRSxJQUFJcEMsRUFBQSxDQUFHakIsU0FBQSxDQUFVUyxLQUFBLENBQU1OLE1BQUEsQ0FBT0MsSUFBQSxLQUFTLEtBQUtBLElBQUEsRUFBTTtZQUVoRGEsRUFBQSxDQUFHUyxZQUFBLENBQWE5RSxZQUFBLENBQUEyRyxhQUFBLENBQWMzQixJQUFBLENBQUtYLEVBQUEsQ0FBR0ssR0FBQSxDQUFJTyxPQUFBLENBQVEyQixJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHeEMsRUFBQSxDQUFHakIsU0FBQSxDQUFVMEQsSUFBQSxHQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDeEY7VUFLQXpDLEVBQUEsQ0FBRzBDLE9BQUEsQ0FBUSxTQUFTLElBQUk7VUFFeEJsQixJQUFBLENBQUttQixRQUFBLENBQVMzQyxFQUFFO1VBRWhCLE9BQU87UUFDVDtNQUNGO0lBQ0YsQ0FBQyxFQUNIO0VBQ0Y7QUFDRixDQUFDO0FDeFRELElBQU80QyxhQUFBLEdBQVEzSCxTQUFBOzs7QUZEZixJQUFPRyxrQ0FBQSxHQUFRd0gsYUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=