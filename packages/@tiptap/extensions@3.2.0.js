System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0","prosemirror-dropcursor@1.8.2","@tiptap/pm@3.12.0/dropcursor","prosemirror-gapcursor@1.3.2","@tiptap/pm@3.12.0/gapcursor","rope-sequence@1.3.4","prosemirror-history@1.4.1","@tiptap/pm@3.12.0/history"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["prosemirror-dropcursor","1.8.2"],["prosemirror-gapcursor","1.3.2"],["rope-sequence","1.3.4"],["prosemirror-history","1.4.1"],["@tiptap/extensions","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep), dep => dependencies.set('@tiptap/core@3.12.0', dep), dep => dependencies.set('prosemirror-dropcursor@1.8.2', dep), dep => dependencies.set('@tiptap/pm@3.12.0/dropcursor', dep), dep => dependencies.set('prosemirror-gapcursor@1.3.2', dep), dep => dependencies.set('@tiptap/pm@3.12.0/gapcursor', dep), dep => dependencies.set('rope-sequence@1.3.4', dep), dep => dependencies.set('prosemirror-history@1.4.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/history', dep)],
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

// .beyond/uimport/@tiptap/extensions.3.2.0.js
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
var import_core = require("@tiptap/core@3.12.0");
var import_state = require("@tiptap/pm@3.12.0/state");
var import_core2 = require("@tiptap/core@3.12.0");
var import_dropcursor = require("@tiptap/pm@3.12.0/dropcursor");
var import_core3 = require("@tiptap/core@3.12.0");
var import_state2 = require("@tiptap/pm@3.12.0/state");
var import_view = require("@tiptap/pm@3.12.0/view");
var import_core4 = require("@tiptap/core@3.12.0");
var import_gapcursor = require("@tiptap/pm@3.12.0/gapcursor");
var import_core5 = require("@tiptap/core@3.12.0");
var import_state3 = require("@tiptap/pm@3.12.0/state");
var import_view2 = require("@tiptap/pm@3.12.0/view");
var import_core6 = require("@tiptap/core@3.12.0");
var import_state4 = require("@tiptap/pm@3.12.0/state");
var import_view3 = require("@tiptap/pm@3.12.0/view");
var import_core7 = require("@tiptap/core@3.12.0");
var import_state5 = require("@tiptap/pm@3.12.0/state");
var import_core8 = require("@tiptap/core@3.12.0");
var import_history = require("@tiptap/pm@3.12.0/history");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbnMuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb25zL3NyYy9jaGFyYWN0ZXItY291bnQvY2hhcmFjdGVyLWNvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9ucy9zcmMvZHJvcC1jdXJzb3IvZHJvcC1jdXJzb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb25zL3NyYy9mb2N1cy9mb2N1cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbnMvc3JjL2dhcC1jdXJzb3IvZ2FwLWN1cnNvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbnMvc3JjL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9ucy9zcmMvc2VsZWN0aW9uL3NlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbnMvc3JjL3RyYWlsaW5nLW5vZGUvdHJhaWxpbmctbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbnMvc3JjL3VuZG8tcmVkby91bmRvLXJlZG8udHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uc18zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJDaGFyYWN0ZXJDb3VudCIsIkRyb3BjdXJzb3IiLCJGb2N1cyIsIkdhcGN1cnNvciIsIlBsYWNlaG9sZGVyIiwiU2VsZWN0aW9uIiwiVHJhaWxpbmdOb2RlIiwiVW5kb1JlZG8iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiaW1wb3J0X3N0YXRlIiwiaW1wb3J0X2NvcmUyIiwiaW1wb3J0X2Ryb3BjdXJzb3IiLCJpbXBvcnRfY29yZTMiLCJpbXBvcnRfc3RhdGUyIiwiaW1wb3J0X3ZpZXciLCJpbXBvcnRfY29yZTQiLCJpbXBvcnRfZ2FwY3Vyc29yIiwiaW1wb3J0X2NvcmU1IiwiaW1wb3J0X3N0YXRlMyIsImltcG9ydF92aWV3MiIsImltcG9ydF9jb3JlNiIsImltcG9ydF9zdGF0ZTQiLCJpbXBvcnRfdmlldzMiLCJpbXBvcnRfY29yZTciLCJpbXBvcnRfc3RhdGU1IiwiaW1wb3J0X2NvcmU4IiwiaW1wb3J0X2hpc3RvcnkiLCJFeHRlbnNpb24iLCJjcmVhdGUiLCJuYW1lIiwiYWRkT3B0aW9ucyIsImxpbWl0IiwibW9kZSIsInRleHRDb3VudGVyIiwidGV4dCIsImxlbmd0aCIsIndvcmRDb3VudGVyIiwic3BsaXQiLCJmaWx0ZXIiLCJ3b3JkIiwiYWRkU3RvcmFnZSIsImNoYXJhY3RlcnMiLCJ3b3JkcyIsIm9uQmVmb3JlQ3JlYXRlIiwic3RvcmFnZSIsIm9wdGlvbnMiLCJub2RlIiwiZWRpdG9yIiwic3RhdGUiLCJkb2MiLCJ0ZXh0QmV0d2VlbiIsImNvbnRlbnQiLCJzaXplIiwibm9kZVNpemUiLCJhZGRQcm9zZU1pcnJvclBsdWdpbnMiLCJpbml0aWFsRXZhbHVhdGlvbkRvbmUiLCJQbHVnaW4iLCJrZXkiLCJQbHVnaW5LZXkiLCJhcHBlbmRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9ucyIsIm9sZFN0YXRlIiwibmV3U3RhdGUiLCJpbml0aWFsQ29udGVudFNpemUiLCJvdmVyIiwiZnJvbSIsInRvIiwiY29uc29sZSIsIndhcm4iLCJ0ciIsImRlbGV0ZVJhbmdlIiwiZmlsdGVyVHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbiIsImRvY0NoYW5nZWQiLCJvbGRTaXplIiwibmV3U2l6ZSIsImlzUGFzdGUiLCJnZXRNZXRhIiwicG9zIiwic2VsZWN0aW9uIiwiJGhlYWQiLCJ1cGRhdGVkU2l6ZSIsImNvbG9yIiwid2lkdGgiLCJjbGFzcyIsImRyb3BDdXJzb3IiLCJjbGFzc05hbWUiLCJwcm9wcyIsImRlY29yYXRpb25zIiwiaXNFZGl0YWJsZSIsImlzRm9jdXNlZCIsImFuY2hvciIsIkRlY29yYXRpb25TZXQiLCJtYXhMZXZlbHMiLCJkZXNjZW5kYW50cyIsImlzVGV4dCIsImlzQ3VycmVudCIsImN1cnJlbnRMZXZlbCIsIm91dE9mU2NvcGUiLCJwdXNoIiwiRGVjb3JhdGlvbiIsImdhcEN1cnNvciIsImV4dGVuZE5vZGVTY2hlbWEiLCJleHRlbnNpb24iLCJfYSIsImNvbnRleHQiLCJhbGxvd0dhcEN1cnNvciIsImNhbGxPclJldHVybiIsImdldEV4dGVuc2lvbkZpZWxkIiwiZW1wdHlFZGl0b3JDbGFzcyIsImVtcHR5Tm9kZUNsYXNzIiwicGxhY2Vob2xkZXIiLCJzaG93T25seVdoZW5FZGl0YWJsZSIsInNob3dPbmx5Q3VycmVudCIsImluY2x1ZGVDaGlsZHJlbiIsImFjdGl2ZSIsImlzRW1wdHlEb2MiLCJpc0VtcHR5IiwiaGFzQW5jaG9yIiwiaXNMZWFmIiwiaXNOb2RlRW1wdHkiLCJjbGFzc2VzIiwiZGVjb3JhdGlvbiIsImpvaW4iLCJlbXB0eSIsImlzTm9kZVNlbGVjdGlvbiIsInZpZXciLCJkcmFnZ2luZyIsImlubGluZSIsIm5vZGVFcXVhbHNUeXBlIiwidHlwZXMiLCJBcnJheSIsImlzQXJyYXkiLCJpbmNsdWRlcyIsInR5cGUiLCJub3RBZnRlciIsInBsdWdpbiIsImRpc2FibGVkTm9kZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwic2NoZW1hIiwibm9kZXMiLCJtYXAiLCJ2YWx1ZSIsImNvbmNhdCIsIl8iLCJfXyIsInNob3VsZEluc2VydE5vZGVBdEVuZCIsImdldFN0YXRlIiwiZW5kUG9zaXRpb24iLCJpbnNlcnQiLCJpbml0IiwibGFzdE5vZGUiLCJsYXN0Q2hpbGQiLCJhcHBseSIsImRlcHRoIiwibmV3R3JvdXBEZWxheSIsImFkZENvbW1hbmRzIiwidW5kbyIsImRpc3BhdGNoIiwicmVkbyIsImhpc3RvcnkiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsIk1vZC16IiwiY29tbWFuZHMiLCJTaGlmdC1Nb2QteiIsIk1vZC15IiwiTW9kLdGPIiwiU2hpZnQt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QXpHLHNCQUFBLEVBQXdCO0lBQ3RCLE9BQU8sS0FBQzVCLGNBQUEsQ0FBQXVJLE9BQUEsRUFBUSxLQUFLcEgsT0FBTyxDQUFDO0VBQy9CO0VBRUFxSCxxQkFBQSxFQUF1QjtJQUNyQixPQUFPO01BQ0wsU0FBU0MsQ0FBQSxLQUFNLEtBQUtwSCxNQUFBLENBQU9xSCxRQUFBLENBQVNOLElBQUEsQ0FBSztNQUN6QyxlQUFlTyxDQUFBLEtBQU0sS0FBS3RILE1BQUEsQ0FBT3FILFFBQUEsQ0FBU0osSUFBQSxDQUFLO01BQy9DLFNBQVNNLENBQUEsS0FBTSxLQUFLdkgsTUFBQSxDQUFPcUgsUUFBQSxDQUFTSixJQUFBLENBQUs7O01BR3pDLGNBQVNPLENBQUEsS0FBTSxLQUFLeEgsTUFBQSxDQUFPcUgsUUFBQSxDQUFTTixJQUFBLENBQUs7TUFDekMsb0JBQWVVLENBQUEsS0FBTSxLQUFLekgsTUFBQSxDQUFPcUgsUUFBQSxDQUFTSixJQUFBLENBQUs7SUFDakQ7RUFDRjtBQUNGLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9