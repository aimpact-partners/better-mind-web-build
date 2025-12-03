System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0","prosemirror-dropcursor@1.8.2","@tiptap/pm@3.2.0/dropcursor","prosemirror-gapcursor@1.3.2","@tiptap/pm@3.2.0/gapcursor","rope-sequence@1.3.4","prosemirror-history@1.4.1","@tiptap/pm@3.2.0/history"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["prosemirror-dropcursor","1.8.2"],["prosemirror-gapcursor","1.3.2"],["rope-sequence","1.3.4"],["prosemirror-history","1.4.1"],["@tiptap/extensions","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep), dep => dependencies.set('@tiptap/core@3.2.0', dep), dep => dependencies.set('prosemirror-dropcursor@1.8.2', dep), dep => dependencies.set('@tiptap/pm@3.2.0/dropcursor', dep), dep => dependencies.set('prosemirror-gapcursor@1.3.2', dep), dep => dependencies.set('@tiptap/pm@3.2.0/gapcursor', dep), dep => dependencies.set('rope-sequence@1.3.4', dep), dep => dependencies.set('prosemirror-history@1.4.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/history', dep)],
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

// .beyond/uimport/temp/@tiptap/extensions.3.2.0.js
var extensions_3_2_0_exports = {};
__export(extensions_3_2_0_exports, {
  CharacterCount: () => CharacterCount,
  Dropcursor: () => Dropcursor,
  Focus: () => Focus,
  Gapcursor: () => Gapcursor,
  Placeholder: () => Placeholder,
  Selection: () => Selection,
  TrailingNode: () => TrailingNode,
  UndoRedo: () => UndoRedo
});
module.exports = __toCommonJS(extensions_3_2_0_exports);

// node_modules/@tiptap/extensions/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
var import_state = require("@tiptap/pm@3.2.0/state");
var import_core2 = require("@tiptap/core@3.2.0");
var import_dropcursor = require("@tiptap/pm@3.2.0/dropcursor");
var import_core3 = require("@tiptap/core@3.2.0");
var import_state2 = require("@tiptap/pm@3.2.0/state");
var import_view = require("@tiptap/pm@3.2.0/view");
var import_core4 = require("@tiptap/core@3.2.0");
var import_gapcursor = require("@tiptap/pm@3.2.0/gapcursor");
var import_core5 = require("@tiptap/core@3.2.0");
var import_state3 = require("@tiptap/pm@3.2.0/state");
var import_view2 = require("@tiptap/pm@3.2.0/view");
var import_core6 = require("@tiptap/core@3.2.0");
var import_state4 = require("@tiptap/pm@3.2.0/state");
var import_view3 = require("@tiptap/pm@3.2.0/view");
var import_core7 = require("@tiptap/core@3.2.0");
var import_state5 = require("@tiptap/pm@3.2.0/state");
var import_core8 = require("@tiptap/core@3.2.0");
var import_history = require("@tiptap/pm@3.2.0/history");
var CharacterCount = import_core.Extension.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: text => text.length,
      wordCounter: text => text.split(" ").filter(word => word !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = options => {
      const node = (options == null ? void 0 : options.node) || this.editor.state.doc;
      const mode = (options == null ? void 0 : options.mode) || this.options.mode;
      if (mode === "textSize") {
        const text = node.textBetween(0, node.content.size, void 0, " ");
        return this.options.textCounter(text);
      }
      return node.nodeSize;
    };
    this.storage.words = options => {
      const node = (options == null ? void 0 : options.node) || this.editor.state.doc;
      const text = node.textBetween(0, node.content.size, " ", " ");
      return this.options.wordCounter(text);
    };
  },
  addProseMirrorPlugins() {
    let initialEvaluationDone = false;
    return [new import_state.Plugin({
      key: new import_state.PluginKey("characterCount"),
      appendTransaction: (transactions, oldState, newState) => {
        if (initialEvaluationDone) {
          return;
        }
        const limit = this.options.limit;
        if (limit === null || limit === void 0 || limit === 0) {
          initialEvaluationDone = true;
          return;
        }
        const initialContentSize = this.storage.characters({
          node: newState.doc
        });
        if (initialContentSize > limit) {
          const over = initialContentSize - limit;
          const from = 0;
          const to = over;
          console.warn(`[CharacterCount] Initial content exceeded limit of ${limit} characters. Content was automatically trimmed.`);
          const tr = newState.tr.deleteRange(from, to);
          initialEvaluationDone = true;
          return tr;
        }
        initialEvaluationDone = true;
      },
      filterTransaction: (transaction, state) => {
        const limit = this.options.limit;
        if (!transaction.docChanged || limit === 0 || limit === null || limit === void 0) {
          return true;
        }
        const oldSize = this.storage.characters({
          node: state.doc
        });
        const newSize = this.storage.characters({
          node: transaction.doc
        });
        if (newSize <= limit) {
          return true;
        }
        if (oldSize > limit && newSize > limit && newSize <= oldSize) {
          return true;
        }
        if (oldSize > limit && newSize > limit && newSize > oldSize) {
          return false;
        }
        const isPaste = transaction.getMeta("paste");
        if (!isPaste) {
          return false;
        }
        const pos = transaction.selection.$head.pos;
        const over = newSize - limit;
        const from = pos - over;
        const to = pos;
        transaction.deleteRange(from, to);
        const updatedSize = this.storage.characters({
          node: transaction.doc
        });
        if (updatedSize > limit) {
          return false;
        }
        return true;
      }
    })];
  }
});
var Dropcursor = import_core2.Extension.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [(0, import_dropcursor.dropCursor)(this.options)];
  }
});
var Focus = import_core3.Extension.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [new import_state2.Plugin({
      key: new import_state2.PluginKey("focus"),
      props: {
        decorations: ({
          doc,
          selection
        }) => {
          const {
            isEditable,
            isFocused
          } = this.editor;
          const {
            anchor
          } = selection;
          const decorations = [];
          if (!isEditable || !isFocused) {
            return import_view.DecorationSet.create(doc, []);
          }
          let maxLevels = 0;
          if (this.options.mode === "deepest") {
            doc.descendants((node, pos) => {
              if (node.isText) {
                return;
              }
              const isCurrent = anchor >= pos && anchor <= pos + node.nodeSize - 1;
              if (!isCurrent) {
                return false;
              }
              maxLevels += 1;
            });
          }
          let currentLevel = 0;
          doc.descendants((node, pos) => {
            if (node.isText) {
              return false;
            }
            const isCurrent = anchor >= pos && anchor <= pos + node.nodeSize - 1;
            if (!isCurrent) {
              return false;
            }
            currentLevel += 1;
            const outOfScope = this.options.mode === "deepest" && maxLevels - currentLevel > 0 || this.options.mode === "shallowest" && currentLevel > 1;
            if (outOfScope) {
              return this.options.mode === "deepest";
            }
            decorations.push(import_view.Decoration.node(pos, pos + node.nodeSize, {
              class: this.options.className
            }));
          });
          return import_view.DecorationSet.create(doc, decorations);
        }
      }
    })];
  }
});
var Gapcursor = import_core4.Extension.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [(0, import_gapcursor.gapCursor)()];
  },
  extendNodeSchema(extension) {
    var _a;
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    return {
      allowGapCursor: (_a = (0, import_core4.callOrReturn)((0, import_core4.getExtensionField)(extension, "allowGapCursor", context))) != null ? _a : null
    };
  }
});
var Placeholder = import_core5.Extension.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something \u2026",
      showOnlyWhenEditable: true,
      showOnlyCurrent: true,
      includeChildren: false
    };
  },
  addProseMirrorPlugins() {
    return [new import_state3.Plugin({
      key: new import_state3.PluginKey("placeholder"),
      props: {
        decorations: ({
          doc,
          selection
        }) => {
          const active = this.editor.isEditable || !this.options.showOnlyWhenEditable;
          const {
            anchor
          } = selection;
          const decorations = [];
          if (!active) {
            return null;
          }
          const isEmptyDoc = this.editor.isEmpty;
          doc.descendants((node, pos) => {
            const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
            const isEmpty = !node.isLeaf && (0, import_core5.isNodeEmpty)(node);
            if ((hasAnchor || !this.options.showOnlyCurrent) && isEmpty) {
              const classes = [this.options.emptyNodeClass];
              if (isEmptyDoc) {
                classes.push(this.options.emptyEditorClass);
              }
              const decoration = import_view2.Decoration.node(pos, pos + node.nodeSize, {
                class: classes.join(" "),
                "data-placeholder": typeof this.options.placeholder === "function" ? this.options.placeholder({
                  editor: this.editor,
                  node,
                  pos,
                  hasAnchor
                }) : this.options.placeholder
              });
              decorations.push(decoration);
            }
            return this.options.includeChildren;
          });
          return import_view2.DecorationSet.create(doc, decorations);
        }
      }
    })];
  }
});
var Selection = import_core6.Extension.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const {
      editor,
      options
    } = this;
    return [new import_state4.Plugin({
      key: new import_state4.PluginKey("selection"),
      props: {
        decorations(state) {
          if (state.selection.empty || editor.isFocused || !editor.isEditable || (0, import_core6.isNodeSelection)(state.selection) || editor.view.dragging) {
            return null;
          }
          return import_view3.DecorationSet.create(state.doc, [import_view3.Decoration.inline(state.selection.from, state.selection.to, {
            class: options.className
          })]);
        }
      }
    })];
  }
});
function nodeEqualsType({
  types,
  node
}) {
  return node && Array.isArray(types) && types.includes(node.type) || (node == null ? void 0 : node.type) === types;
}
var TrailingNode = import_core7.Extension.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    const plugin = new import_state5.PluginKey(this.name);
    const disabledNodes = Object.entries(this.editor.schema.nodes).map(([, value]) => value).filter(node => (this.options.notAfter || []).concat(this.options.node).includes(node.name));
    return [new import_state5.Plugin({
      key: plugin,
      appendTransaction: (_, __, state) => {
        const {
          doc,
          tr,
          schema
        } = state;
        const shouldInsertNodeAtEnd = plugin.getState(state);
        const endPosition = doc.content.size;
        const type = schema.nodes[this.options.node];
        if (!shouldInsertNodeAtEnd) {
          return;
        }
        return tr.insert(endPosition, type.create());
      },
      state: {
        init: (_, state) => {
          const lastNode = state.tr.doc.lastChild;
          return !nodeEqualsType({
            node: lastNode,
            types: disabledNodes
          });
        },
        apply: (tr, value) => {
          if (!tr.docChanged) {
            return value;
          }
          const lastNode = tr.doc.lastChild;
          return !nodeEqualsType({
            node: lastNode,
            types: disabledNodes
          });
        }
      }
    })];
  }
});
var UndoRedo = import_core8.Extension.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({
        state,
        dispatch
      }) => {
        return (0, import_history.undo)(state, dispatch);
      },
      redo: () => ({
        state,
        dispatch
      }) => {
        return (0, import_history.redo)(state, dispatch);
      }
    };
  },
  addProseMirrorPlugins() {
    return [(0, import_history.history)(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-\u044F": () => this.editor.commands.undo(),
      "Shift-Mod-\u044F": () => this.editor.commands.redo()
    };
  }
});
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9ucy4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbnMvc3JjL2NoYXJhY3Rlci1jb3VudC9jaGFyYWN0ZXItY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb25zL3NyYy9kcm9wLWN1cnNvci9kcm9wLWN1cnNvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbnMvc3JjL2ZvY3VzL2ZvY3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9ucy9zcmMvZ2FwLWN1cnNvci9nYXAtY3Vyc29yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9ucy9zcmMvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb25zL3NyYy9zZWxlY3Rpb24vc2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9ucy9zcmMvdHJhaWxpbmctbm9kZS90cmFpbGluZy1ub2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9ucy9zcmMvdW5kby1yZWRvL3VuZG8tcmVkby50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25zXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNoYXJhY3RlckNvdW50IiwiRHJvcGN1cnNvciIsIkZvY3VzIiwiR2FwY3Vyc29yIiwiUGxhY2Vob2xkZXIiLCJTZWxlY3Rpb24iLCJUcmFpbGluZ05vZGUiLCJVbmRvUmVkbyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfc3RhdGUiLCJpbXBvcnRfY29yZTIiLCJpbXBvcnRfZHJvcGN1cnNvciIsImltcG9ydF9jb3JlMyIsImltcG9ydF9zdGF0ZTIiLCJpbXBvcnRfdmlldyIsImltcG9ydF9jb3JlNCIsImltcG9ydF9nYXBjdXJzb3IiLCJpbXBvcnRfY29yZTUiLCJpbXBvcnRfc3RhdGUzIiwiaW1wb3J0X3ZpZXcyIiwiaW1wb3J0X2NvcmU2IiwiaW1wb3J0X3N0YXRlNCIsImltcG9ydF92aWV3MyIsImltcG9ydF9jb3JlNyIsImltcG9ydF9zdGF0ZTUiLCJpbXBvcnRfY29yZTgiLCJpbXBvcnRfaGlzdG9yeSIsIkV4dGVuc2lvbiIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwibGltaXQiLCJtb2RlIiwidGV4dENvdW50ZXIiLCJ0ZXh0IiwibGVuZ3RoIiwid29yZENvdW50ZXIiLCJzcGxpdCIsImZpbHRlciIsIndvcmQiLCJhZGRTdG9yYWdlIiwiY2hhcmFjdGVycyIsIndvcmRzIiwib25CZWZvcmVDcmVhdGUiLCJzdG9yYWdlIiwib3B0aW9ucyIsIm5vZGUiLCJlZGl0b3IiLCJzdGF0ZSIsImRvYyIsInRleHRCZXR3ZWVuIiwiY29udGVudCIsInNpemUiLCJub2RlU2l6ZSIsImFkZFByb3NlTWlycm9yUGx1Z2lucyIsImluaXRpYWxFdmFsdWF0aW9uRG9uZSIsIlBsdWdpbiIsImtleSIsIlBsdWdpbktleSIsImFwcGVuZFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25zIiwib2xkU3RhdGUiLCJuZXdTdGF0ZSIsImluaXRpYWxDb250ZW50U2l6ZSIsIm92ZXIiLCJmcm9tIiwidG8iLCJjb25zb2xlIiwid2FybiIsInRyIiwiZGVsZXRlUmFuZ2UiLCJmaWx0ZXJUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uIiwiZG9jQ2hhbmdlZCIsIm9sZFNpemUiLCJuZXdTaXplIiwiaXNQYXN0ZSIsImdldE1ldGEiLCJwb3MiLCJzZWxlY3Rpb24iLCIkaGVhZCIsInVwZGF0ZWRTaXplIiwiY29sb3IiLCJ3aWR0aCIsImNsYXNzIiwiZHJvcEN1cnNvciIsImNsYXNzTmFtZSIsInByb3BzIiwiZGVjb3JhdGlvbnMiLCJpc0VkaXRhYmxlIiwiaXNGb2N1c2VkIiwiYW5jaG9yIiwiRGVjb3JhdGlvblNldCIsIm1heExldmVscyIsImRlc2NlbmRhbnRzIiwiaXNUZXh0IiwiaXNDdXJyZW50IiwiY3VycmVudExldmVsIiwib3V0T2ZTY29wZSIsInB1c2giLCJEZWNvcmF0aW9uIiwiZ2FwQ3Vyc29yIiwiZXh0ZW5kTm9kZVNjaGVtYSIsImV4dGVuc2lvbiIsIl9hIiwiY29udGV4dCIsImFsbG93R2FwQ3Vyc29yIiwiY2FsbE9yUmV0dXJuIiwiZ2V0RXh0ZW5zaW9uRmllbGQiLCJlbXB0eUVkaXRvckNsYXNzIiwiZW1wdHlOb2RlQ2xhc3MiLCJwbGFjZWhvbGRlciIsInNob3dPbmx5V2hlbkVkaXRhYmxlIiwic2hvd09ubHlDdXJyZW50IiwiaW5jbHVkZUNoaWxkcmVuIiwiYWN0aXZlIiwiaXNFbXB0eURvYyIsImlzRW1wdHkiLCJoYXNBbmNob3IiLCJpc0xlYWYiLCJpc05vZGVFbXB0eSIsImNsYXNzZXMiLCJkZWNvcmF0aW9uIiwiam9pbiIsImVtcHR5IiwiaXNOb2RlU2VsZWN0aW9uIiwidmlldyIsImRyYWdnaW5nIiwiaW5saW5lIiwibm9kZUVxdWFsc1R5cGUiLCJ0eXBlcyIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwidHlwZSIsIm5vdEFmdGVyIiwicGx1Z2luIiwiZGlzYWJsZWROb2RlcyIsIk9iamVjdCIsImVudHJpZXMiLCJzY2hlbWEiLCJub2RlcyIsIm1hcCIsInZhbHVlIiwiY29uY2F0IiwiXyIsIl9fIiwic2hvdWxkSW5zZXJ0Tm9kZUF0RW5kIiwiZ2V0U3RhdGUiLCJlbmRQb3NpdGlvbiIsImluc2VydCIsImluaXQiLCJsYXN0Tm9kZSIsImxhc3RDaGlsZCIsImFwcGx5IiwiZGVwdGgiLCJuZXdHcm91cERlbGF5IiwiYWRkQ29tbWFuZHMiLCJ1bmRvIiwiZGlzcGF0Y2giLCJyZWRvIiwiaGlzdG9yeSIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiTW9kLXoiLCJjb21tYW5kcyIsIlNoaWZ0LU1vZC16IiwiTW9kLXkiLCJNb2Qt0Y8iLCJT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RjtFQUVBekcsc0JBQUEsRUFBd0I7SUFDdEIsT0FBTyxLQUFDNUIsY0FBQSxDQUFBdUksT0FBQSxFQUFRLEtBQUtwSCxPQUFPLENBQUM7RUFDL0I7RUFFQXFILHFCQUFBLEVBQXVCO0lBQ3JCLE9BQU87TUFDTCxTQUFTQyxDQUFBLEtBQU0sS0FBS3BILE1BQUEsQ0FBT3FILFFBQUEsQ0FBU04sSUFBQSxDQUFLO01BQ3pDLGVBQWVPLENBQUEsS0FBTSxLQUFLdEgsTUFBQSxDQUFPcUgsUUFBQSxDQUFTSixJQUFBLENBQUs7TUFDL0MsU0FBU00sQ0FBQSxLQUFNLEtBQUt2SCxNQUFBLENBQU9xSCxRQUFBLENBQVNKLElBQUEsQ0FBSzs7TUFHekMsY0FBU08sQ0FBQSxLQUFNLEtBQUt4SCxNQUFBLENBQU9xSCxRQUFBLENBQVNOLElBQUEsQ0FBSztNQUN6QyxvQkFBZVUsQ0FBQSxLQUFNLEtBQUt6SCxNQUFBLENBQU9xSCxRQUFBLENBQVNKLElBQUEsQ0FBSztJQUNqRDtFQUNGO0FBQ0YsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=