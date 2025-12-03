System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-list","3.2.0"]]);
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

// .beyond/uimport/temp/@tiptap/extension-list.3.2.0.js
var extension_list_3_2_0_exports = {};
__export(extension_list_3_2_0_exports, {
  BulletList: () => BulletList,
  ListItem: () => ListItem,
  ListKeymap: () => ListKeymap,
  ListKit: () => ListKit,
  OrderedList: () => OrderedList,
  TaskItem: () => TaskItem,
  TaskList: () => TaskList,
  bulletListInputRegex: () => bulletListInputRegex,
  inputRegex: () => inputRegex,
  listHelpers: () => listHelpers_exports,
  orderedListInputRegex: () => orderedListInputRegex
});
module.exports = __toCommonJS(extension_list_3_2_0_exports);

// node_modules/@tiptap/extension-list/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var import_core2 = require("@tiptap/core@3.12.0");
var import_core3 = require("@tiptap/core@3.12.0");
var import_core4 = require("@tiptap/core@3.12.0");
var import_core5 = require("@tiptap/core@3.12.0");
var import_core6 = require("@tiptap/core@3.12.0");
var import_core7 = require("@tiptap/core@3.12.0");
var import_core8 = require("@tiptap/core@3.12.0");
var import_core9 = require("@tiptap/core@3.12.0");
var import_core10 = require("@tiptap/core@3.12.0");
var import_core11 = require("@tiptap/core@3.12.0");
var import_core12 = require("@tiptap/core@3.12.0");
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all) __defProp2(target, name, {
    get: all[name],
    enumerable: true
  });
};
var ListItemName = "listItem";
var TextStyleName = "textStyle";
var bulletListInputRegex = /^\s*([-+*])\s$/;
var BulletList = import_core.Node.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{
      tag: "ul"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["ul", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({
        commands,
        chain
      }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName, this.editor.getAttributes(TextStyleName)).run();
        }
        return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let inputRule = (0, import_core.wrappingInputRule)({
      find: bulletListInputRegex,
      type: this.type
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = (0, import_core.wrappingInputRule)({
        find: bulletListInputRegex,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: () => {
          return this.editor.getAttributes(TextStyleName);
        },
        editor: this.editor
      });
    }
    return [inputRule];
  }
});
var ListItem = import_core2.Node.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: true,
  parseHTML() {
    return [{
      tag: "li"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["li", (0, import_core2.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
});
var listHelpers_exports = {};
__export2(listHelpers_exports, {
  findListItemPos: () => findListItemPos,
  getNextListDepth: () => getNextListDepth,
  handleBackspace: () => handleBackspace,
  handleDelete: () => handleDelete,
  hasListBefore: () => hasListBefore,
  hasListItemAfter: () => hasListItemAfter,
  hasListItemBefore: () => hasListItemBefore,
  listItemHasSubList: () => listItemHasSubList,
  nextListIsDeeper: () => nextListIsDeeper,
  nextListIsHigher: () => nextListIsHigher
});
var findListItemPos = (typeOrName, state) => {
  const {
    $from
  } = state.selection;
  const nodeType = (0, import_core4.getNodeType)(typeOrName, state.schema);
  let currentNode = null;
  let currentDepth = $from.depth;
  let currentPos = $from.pos;
  let targetDepth = null;
  while (currentDepth > 0 && targetDepth === null) {
    currentNode = $from.node(currentDepth);
    if (currentNode.type === nodeType) {
      targetDepth = currentDepth;
    } else {
      currentDepth -= 1;
      currentPos -= 1;
    }
  }
  if (targetDepth === null) {
    return null;
  }
  return {
    $pos: state.doc.resolve(currentPos),
    depth: targetDepth
  };
};
var getNextListDepth = (typeOrName, state) => {
  const listItemPos = findListItemPos(typeOrName, state);
  if (!listItemPos) {
    return false;
  }
  const [, depth] = (0, import_core5.getNodeAtPosition)(state, typeOrName, listItemPos.$pos.pos + 4);
  return depth;
};
var hasListBefore = (editorState, name, parentListTypes) => {
  const {
    $anchor
  } = editorState.selection;
  const previousNodePos = Math.max(0, $anchor.pos - 2);
  const previousNode = editorState.doc.resolve(previousNodePos).node();
  if (!previousNode || !parentListTypes.includes(previousNode.type.name)) {
    return false;
  }
  return true;
};
var hasListItemBefore = (typeOrName, state) => {
  var _a;
  const {
    $anchor
  } = state.selection;
  const $targetPos = state.doc.resolve($anchor.pos - 2);
  if ($targetPos.index() === 0) {
    return false;
  }
  if (((_a = $targetPos.nodeBefore) == null ? void 0 : _a.type.name) !== typeOrName) {
    return false;
  }
  return true;
};
var listItemHasSubList = (typeOrName, state, node) => {
  if (!node) {
    return false;
  }
  const nodeType = (0, import_core7.getNodeType)(typeOrName, state.schema);
  let hasSubList = false;
  node.descendants(child => {
    if (child.type === nodeType) {
      hasSubList = true;
    }
  });
  return hasSubList;
};
var handleBackspace = (editor, name, parentListTypes) => {
  if (editor.commands.undoInputRule()) {
    return true;
  }
  if (editor.state.selection.from !== editor.state.selection.to) {
    return false;
  }
  if (!(0, import_core6.isNodeActive)(editor.state, name) && hasListBefore(editor.state, name, parentListTypes)) {
    const {
      $anchor
    } = editor.state.selection;
    const $listPos = editor.state.doc.resolve($anchor.before() - 1);
    const listDescendants = [];
    $listPos.node().descendants((node, pos) => {
      if (node.type.name === name) {
        listDescendants.push({
          node,
          pos
        });
      }
    });
    const lastItem = listDescendants.at(-1);
    if (!lastItem) {
      return false;
    }
    const $lastItemPos = editor.state.doc.resolve($listPos.start() + lastItem.pos + 1);
    return editor.chain().cut({
      from: $anchor.start() - 1,
      to: $anchor.end() + 1
    }, $lastItemPos.end()).joinForward().run();
  }
  if (!(0, import_core6.isNodeActive)(editor.state, name)) {
    return false;
  }
  if (!(0, import_core6.isAtStartOfNode)(editor.state)) {
    return false;
  }
  const listItemPos = findListItemPos(name, editor.state);
  if (!listItemPos) {
    return false;
  }
  const $prev = editor.state.doc.resolve(listItemPos.$pos.pos - 2);
  const prevNode = $prev.node(listItemPos.depth);
  const previousListItemHasSubList = listItemHasSubList(name, editor.state, prevNode);
  if (hasListItemBefore(name, editor.state) && !previousListItemHasSubList) {
    return editor.commands.joinItemBackward();
  }
  return editor.chain().liftListItem(name).run();
};
var nextListIsDeeper = (typeOrName, state) => {
  const listDepth = getNextListDepth(typeOrName, state);
  const listItemPos = findListItemPos(typeOrName, state);
  if (!listItemPos || !listDepth) {
    return false;
  }
  if (listDepth > listItemPos.depth) {
    return true;
  }
  return false;
};
var nextListIsHigher = (typeOrName, state) => {
  const listDepth = getNextListDepth(typeOrName, state);
  const listItemPos = findListItemPos(typeOrName, state);
  if (!listItemPos || !listDepth) {
    return false;
  }
  if (listDepth < listItemPos.depth) {
    return true;
  }
  return false;
};
var handleDelete = (editor, name) => {
  if (!(0, import_core8.isNodeActive)(editor.state, name)) {
    return false;
  }
  if (!(0, import_core8.isAtEndOfNode)(editor.state, name)) {
    return false;
  }
  const {
    selection
  } = editor.state;
  const {
    $from,
    $to
  } = selection;
  if (!selection.empty && $from.sameParent($to)) {
    return false;
  }
  if (nextListIsDeeper(name, editor.state)) {
    return editor.chain().focus(editor.state.selection.from + 4).lift(name).joinBackward().run();
  }
  if (nextListIsHigher(name, editor.state)) {
    return editor.chain().joinForward().joinBackward().run();
  }
  return editor.commands.joinItemForward();
};
var hasListItemAfter = (typeOrName, state) => {
  var _a;
  const {
    $anchor
  } = state.selection;
  const $targetPos = state.doc.resolve($anchor.pos - $anchor.parentOffset - 2);
  if ($targetPos.index() === $targetPos.parent.childCount - 1) {
    return false;
  }
  if (((_a = $targetPos.nodeAfter) == null ? void 0 : _a.type.name) !== typeOrName) {
    return false;
  }
  return true;
};
var ListKeymap = import_core3.Extension.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [{
        itemName: "listItem",
        wrapperNames: ["bulletList", "orderedList"]
      }, {
        itemName: "taskItem",
        wrapperNames: ["taskList"]
      }]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({
        editor
      }) => {
        let handled = false;
        this.options.listTypes.forEach(({
          itemName
        }) => {
          if (editor.state.schema.nodes[itemName] === void 0) {
            return;
          }
          if (handleDelete(editor, itemName)) {
            handled = true;
          }
        });
        return handled;
      },
      "Mod-Delete": ({
        editor
      }) => {
        let handled = false;
        this.options.listTypes.forEach(({
          itemName
        }) => {
          if (editor.state.schema.nodes[itemName] === void 0) {
            return;
          }
          if (handleDelete(editor, itemName)) {
            handled = true;
          }
        });
        return handled;
      },
      Backspace: ({
        editor
      }) => {
        let handled = false;
        this.options.listTypes.forEach(({
          itemName,
          wrapperNames
        }) => {
          if (editor.state.schema.nodes[itemName] === void 0) {
            return;
          }
          if (handleBackspace(editor, itemName, wrapperNames)) {
            handled = true;
          }
        });
        return handled;
      },
      "Mod-Backspace": ({
        editor
      }) => {
        let handled = false;
        this.options.listTypes.forEach(({
          itemName,
          wrapperNames
        }) => {
          if (editor.state.schema.nodes[itemName] === void 0) {
            return;
          }
          if (handleBackspace(editor, itemName, wrapperNames)) {
            handled = true;
          }
        });
        return handled;
      }
    };
  }
});
var ListItemName2 = "listItem";
var TextStyleName2 = "textStyle";
var orderedListInputRegex = /^(\d+)\.\s$/;
var OrderedList = import_core10.Node.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: element => {
          return element.hasAttribute("start") ? parseInt(element.getAttribute("start") || "", 10) : 1;
        }
      },
      type: {
        default: null,
        parseHTML: element => element.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [{
      tag: "ol"
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    const {
      start,
      ...attributesWithoutStart
    } = HTMLAttributes;
    return start === 1 ? ["ol", (0, import_core10.mergeAttributes)(this.options.HTMLAttributes, attributesWithoutStart), 0] : ["ol", (0, import_core10.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({
        commands,
        chain
      }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName2, this.editor.getAttributes(TextStyleName2)).run();
        }
        return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let inputRule = (0, import_core10.wrappingInputRule)({
      find: orderedListInputRegex,
      type: this.type,
      getAttributes: match => ({
        start: +match[1]
      }),
      joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1]
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = (0, import_core10.wrappingInputRule)({
        find: orderedListInputRegex,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: match => ({
          start: +match[1],
          ...this.editor.getAttributes(TextStyleName2)
        }),
        joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1],
        editor: this.editor
      });
    }
    return [inputRule];
  }
});
var inputRegex = /^\s*(\[([( |x])?\])\s$/;
var TaskItem = import_core11.Node.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: false,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: true,
  addAttributes() {
    return {
      checked: {
        default: false,
        keepOnSplit: false,
        parseHTML: element => {
          const dataChecked = element.getAttribute("data-checked");
          return dataChecked === "" || dataChecked === "true";
        },
        renderHTML: attributes => ({
          "data-checked": attributes.checked
        })
      }
    };
  },
  parseHTML() {
    return [{
      tag: `li[data-type="${this.name}"]`,
      priority: 51
    }];
  },
  renderHTML({
    node,
    HTMLAttributes
  }) {
    return ["li", (0, import_core11.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes, {
      "data-type": this.name
    }), ["label", ["input", {
      type: "checkbox",
      checked: node.attrs.checked ? "checked" : null
    }], ["span"]], ["div", 0]];
  },
  addKeyboardShortcuts() {
    const shortcuts = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    if (!this.options.nested) {
      return shortcuts;
    }
    return {
      ...shortcuts,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    };
  },
  addNodeView() {
    return ({
      node,
      HTMLAttributes,
      getPos,
      editor
    }) => {
      const listItem = document.createElement("li");
      const checkboxWrapper = document.createElement("label");
      const checkboxStyler = document.createElement("span");
      const checkbox = document.createElement("input");
      const content = document.createElement("div");
      const updateA11Y = currentNode => {
        var _a, _b;
        checkbox.ariaLabel = ((_b = (_a = this.options.a11y) == null ? void 0 : _a.checkboxLabel) == null ? void 0 : _b.call(_a, currentNode, checkbox.checked)) || `Task item checkbox for ${currentNode.textContent || "empty task item"}`;
      };
      updateA11Y(node);
      checkboxWrapper.contentEditable = "false";
      checkbox.type = "checkbox";
      checkbox.addEventListener("mousedown", event => event.preventDefault());
      checkbox.addEventListener("change", event => {
        if (!editor.isEditable && !this.options.onReadOnlyChecked) {
          checkbox.checked = !checkbox.checked;
          return;
        }
        const {
          checked
        } = event.target;
        if (editor.isEditable && typeof getPos === "function") {
          editor.chain().focus(void 0, {
            scrollIntoView: false
          }).command(({
            tr
          }) => {
            const position = getPos();
            if (typeof position !== "number") {
              return false;
            }
            const currentNode = tr.doc.nodeAt(position);
            tr.setNodeMarkup(position, void 0, {
              ...(currentNode == null ? void 0 : currentNode.attrs),
              checked
            });
            return true;
          }).run();
        }
        if (!editor.isEditable && this.options.onReadOnlyChecked) {
          if (!this.options.onReadOnlyChecked(node, checked)) {
            checkbox.checked = !checkbox.checked;
          }
        }
      });
      Object.entries(this.options.HTMLAttributes).forEach(([key, value]) => {
        listItem.setAttribute(key, value);
      });
      listItem.dataset.checked = node.attrs.checked;
      checkbox.checked = node.attrs.checked;
      checkboxWrapper.append(checkbox, checkboxStyler);
      listItem.append(checkboxWrapper, content);
      Object.entries(HTMLAttributes).forEach(([key, value]) => {
        listItem.setAttribute(key, value);
      });
      return {
        dom: listItem,
        contentDOM: content,
        update: updatedNode => {
          if (updatedNode.type !== this.type) {
            return false;
          }
          listItem.dataset.checked = updatedNode.attrs.checked;
          checkbox.checked = updatedNode.attrs.checked;
          updateA11Y(updatedNode);
          return true;
        }
      };
    };
  },
  addInputRules() {
    return [(0, import_core11.wrappingInputRule)({
      find: inputRegex,
      type: this.type,
      getAttributes: match => ({
        checked: match[match.length - 1] === "x"
      })
    })];
  }
});
var TaskList = import_core12.Node.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{
      tag: `ul[data-type="${this.name}"]`,
      priority: 51
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["ul", (0, import_core12.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes, {
      "data-type": this.name
    }), 0];
  },
  addCommands() {
    return {
      toggleTaskList: () => ({
        commands
      }) => {
        return commands.toggleList(this.name, this.options.itemTypeName);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
var ListKit = import_core9.Extension.create({
  name: "listKit",
  addExtensions() {
    const extensions = [];
    if (this.options.bulletList !== false) {
      extensions.push(BulletList.configure(this.options.bulletList));
    }
    if (this.options.listItem !== false) {
      extensions.push(ListItem.configure(this.options.listItem));
    }
    if (this.options.listKeymap !== false) {
      extensions.push(ListKeymap.configure(this.options.listKeymap));
    }
    if (this.options.orderedList !== false) {
      extensions.push(OrderedList.configure(this.options.orderedList));
    }
    if (this.options.taskItem !== false) {
      extensions.push(TaskItem.configure(this.options.taskItem));
    }
    if (this.options.taskList !== false) {
      extensions.push(TaskList.configure(this.options.taskList));
    }
    return extensions;
  }
});
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3QuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMvYnVsbGV0LWxpc3QvYnVsbGV0LWxpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMvaXRlbS9saXN0LWl0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3Qta2V5bWFwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0SGVscGVycy9maW5kTGlzdEl0ZW1Qb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3RIZWxwZXJzL2dldE5leHRMaXN0RGVwdGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3RIZWxwZXJzL2hhbmRsZUJhY2tzcGFjZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saXN0L3NyYy9rZXltYXAvbGlzdEhlbHBlcnMvbGlzdEl0ZW1IYXNTdWJMaXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0SGVscGVycy9oYW5kbGVEZWxldGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2l0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL29yZGVyZWQtbGlzdC9vcmRlcmVkLWxpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMvdGFzay1pdGVtL3Rhc2staXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saXN0L3NyYy90YXNrLWxpc3QvdGFzay1saXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0SGVscGVycy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saXN0L3NyYy9rZXltYXAvbGlzdEhlbHBlcnMvaGFzTGlzdEJlZm9yZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saXN0L3NyYy9rZXltYXAvbGlzdEhlbHBlcnMvaGFzTGlzdEl0ZW1CZWZvcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3RIZWxwZXJzL25leHRMaXN0SXNEZWVwZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3RIZWxwZXJzL25leHRMaXN0SXNIaWdoZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3RIZWxwZXJzL2hhc0xpc3RJdGVtQWZ0ZXIudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2xpc3RfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQnVsbGV0TGlzdCIsIkxpc3RJdGVtIiwiTGlzdEtleW1hcCIsIkxpc3RLaXQiLCJPcmRlcmVkTGlzdCIsIlRhc2tJdGVtIiwiVGFza0xpc3QiLCJidWxsZXRMaXN0SW5wdXRSZWdleCIsImlucHV0UmVnZXgiLCJsaXN0SGVscGVycyIsImxpc3RIZWxwZXJzX2V4cG9ydHMiLCJvcmRlcmVkTGlzdElucHV0UmVnZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiaW1wb3J0X2NvcmUyIiwiaW1wb3J0X2NvcmUzIiwiaW1wb3J0X2NvcmU0IiwiaW1wb3J0X2NvcmU1IiwiaW1wb3J0X2NvcmU2IiwiaW1wb3J0X2NvcmU3IiwiaW1wb3J0X2NvcmU4IiwiaW1wb3J0X2NvcmU5IiwiaW1wb3J0X2NvcmUxMCIsImltcG9ydF9jb3JlMTEiLCJpbXBvcnRfY29yZTEyIiwiTGlzdEl0ZW1OYW1lIiwiVGV4dFN0eWxlTmFtZSIsIk5vZGUiLCJjcmVhdGUiLCJuYW1lIiwiYWRkT3B0aW9ucyIsIml0ZW1UeXBlTmFtZSIsIkhUTUxBdHRyaWJ1dGVzIiwia2VlcE1hcmtzIiwia2VlcEF0dHJpYnV0ZXMiLCJncm91cCIsImNvbnRlbnQiLCJvcHRpb25zIiwicGFyc2VIVE1MIiwidGFnIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsImFkZENvbW1hbmRzIiwidG9nZ2xlQnVsbGV0TGlzdCIsImNvbW1hbmRzIiwiY2hhaW4iLCJ0b2dnbGVMaXN0IiwidXBkYXRlQXR0cmlidXRlcyIsImVkaXRvciIsImdldEF0dHJpYnV0ZXMiLCJydW4iLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsIk1vZC1TaGlmdC04IiwiYWRkSW5wdXRSdWxlcyIsImlucHV0UnVsZSIsIndyYXBwaW5nSW5wdXRSdWxlIiwiZmluZCIsInR5cGUiLCJidWxsZXRMaXN0VHlwZU5hbWUiLCJvcmRlcmVkTGlzdFR5cGVOYW1lIiwiZGVmaW5pbmciLCJFbnRlciIsInNwbGl0TGlzdEl0ZW0iLCJUYWIiLCJzaW5rTGlzdEl0ZW0iLCJTaGlmdC1UYWIiLCJsaWZ0TGlzdEl0ZW0iLCJfX2V4cG9ydDIiLCJmaW5kTGlzdEl0ZW1Qb3MiLCJnZXROZXh0TGlzdERlcHRoIiwiaGFuZGxlQmFja3NwYWNlIiwiaGFuZGxlRGVsZXRlIiwiaGFzTGlzdEJlZm9yZSIsImhhc0xpc3RJdGVtQWZ0ZXIiLCJoYXNMaXN0SXRlbUJlZm9yZSIsImxpc3RJdGVtSGFzU3ViTGlzdCIsIm5leHRMaXN0SXNEZWVwZXIiLCJuZXh0TGlzdElzSGlnaGVyIiwidHlwZU9yTmFtZSIsInN0YXRlIiwiJGZyb20iLCJzZWxlY3Rpb24iLCJub2RlVHlwZSIsImdldE5vZGVUeXBlIiwic2NoZW1hIiwiY3VycmVudE5vZGUiLCJjdXJyZW50RGVwdGgiLCJkZXB0aCIsImN1cnJlbnRQb3MiLCJwb3MiLCJ0YXJnZXREZXB0aCIsIm5vZGUiLCIkcG9zIiwiZG9jIiwicmVzb2x2ZSIsImxpc3RJdGVtUG9zIiwiZ2V0Tm9kZUF0UG9zaXRpb24iLCJlZGl0b3JTdGF0ZSIsInBhcmVudExpc3RUeXBlcyIsIiRhbmNob3IiLCJwcmV2aW91c05vZGVQb3MiLCJNYXRoIiwibWF4IiwicHJldmlvdXNOb2RlIiwiaW5jbHVkZXMiLCJfYSIsIiR0YXJnZXRQb3MiLCJpbmRleCIsIm5vZGVCZWZvcmUiLCJoYXNTdWJMaXN0IiwiZGVzY2VuZGFudHMiLCJjaGlsZCIsInVuZG9JbnB1dFJ1bGUiLCJmcm9tIiwidG8iLCJpc05vZGVBY3RpdmUiLCIkbGlzdFBvcyIsImJlZm9yZSIsImxpc3REZXNjZW5kYW50cyIsInB1c2giLCJsYXN0SXRlbSIsImF0IiwiJGxhc3RJdGVtUG9zIiwic3RhcnQiLCJjdXQiLCJlbmQiLCJqb2luRm9yd2FyZCIsImlzQXRTdGFydE9mTm9kZSIsIiRwcmV2IiwicHJldk5vZGUiLCJwcmV2aW91c0xpc3RJdGVtSGFzU3ViTGlzdCIsImpvaW5JdGVtQmFja3dhcmQiLCJsaXN0RGVwdGgiLCJpc0F0RW5kT2ZOb2RlIiwiJHRvIiwiZW1wdHkiLCJzYW1lUGFyZW50IiwiZm9jdXMiLCJsaWZ0Iiwiam9pbkJhY2t3YXJkIiwiam9pbkl0ZW1Gb3J3YXJkIiwicGFyZW50T2Zmc2V0IiwicGFyZW50IiwiY2hpbGRDb3VudCIsIm5vZGVBZnRlciIsIkV4dGVuc2lvbiIsImxpc3RUeXBlcyIsIml0ZW1OYW1lIiwid3JhcHBlck5hbWVzIiwiRGVsZXRlIiwiaGFuZGxlZCIsImZvckVhY2giLCJub2RlcyIsIk1vZC1EZWxldGUiLCJCYWNrc3BhY2UiLCJNb2QtQmFja3NwYWNlIiwiTGlzdEl0ZW1OYW1lMiIsIlRleHRTdHlsZU5hbWUyIiwiYWRkQXR0cmlidXRlcyIsImRlZmF1bHQiLCJlbGVtZW50IiwiaGFzQXR0cmlidXRlIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzV2l0aG91dFN0YXJ0IiwidG9nZ2xlT3JkZXJlZExpc3QiLCJNb2QtU2hpZnQtNyIsIm1hdGNoIiwiam9pblByZWRpY2F0ZSIsImF0dHJzIiwibmVzdGVkIiwidGFza0xpc3RUeXBlTmFtZSIsImExMXkiLCJjaGVja2VkIiwia2VlcE9uU3BsaXQiLCJkYXRhQ2hlY2tlZCIsImF0dHJpYnV0ZXMiLCJwcmlvcml0eSIsInNob3J0Y3V0cyIsImFkZE5vZGVWaWV3IiwiZ2V0UG9zIiwibGlzdEl0ZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGVja2JveFdyYXBwZXIiLCJjaGVja2JveFN0eWxlciIsImNoZWNrYm94IiwidXBkYXRlQTExWSIsIl9iIiwiYXJpYUxhYmVsIiwiY2hlY2tib3hMYWJlbCIsImNhbGwiLCJ0ZXh0Q29udGVudCIsImNvbnRlbnRFZGl0YWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNFZGl0YWJsZSIsIm9uUmVhZE9ubHlDaGVja2VkIiwidGFyZ2V0Iiwic2Nyb2xsSW50b1ZpZXciLCJjb21tYW5kIiwidHIiLCJwb3NpdGlvbiIsIm5vZGVBdCIsInNldE5vZGVNYXJrdXAiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJkYXRhc2V0IiwiYXBwZW5kIiwiZG9tIiwiY29udGVudERPTSIsInVwZGF0ZSIsInVwZGF0ZWROb2RlIiwibGVuZ3RoIiwidG9nZ2xlVGFza0xpc3QiLCJNb2QtU2hpZnQtOSIsImFkZEV4dGVuc2lvbnMiLCJleHRlbnNpb25zIiwiYnVsbGV0TGlzdCIsImNvbmZpZ3VyZSIsImxpc3RLZXltYXAiLCJvcmRlcmVkTGlzdCIsInRhc2tJdGVtIiwidGFza0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWM7SUFDWixPQUFPO01BQ0xnTCxjQUFBLEVBQ0VBLENBQUEsS0FDQSxDQUFDO1FBQUU5SztNQUFTLE1BQU07UUFDaEIsT0FBT0EsUUFBQSxDQUFTRSxVQUFBLENBQVcsS0FBS2pCLElBQUEsRUFBTSxLQUFLUSxPQUFBLENBQVFOLFlBQVk7TUFDakU7SUFDSjtFQUNGO0VBRUFvQixxQkFBQSxFQUF1QjtJQUNyQixPQUFPO01BQ0wsZUFBZXdLLENBQUEsS0FBTSxLQUFLM0ssTUFBQSxDQUFPSixRQUFBLENBQVM4SyxjQUFBLENBQWU7SUFDM0Q7RUFDRjtBQUNGLENBQUM7QUg5Qk0sSUFBTTFOLE9BQUEsR0FBVXFCLFlBQUEsQ0FBQTRILFNBQUEsQ0FBVXJILE1BQUEsQ0FBdUI7RUFDdERDLElBQUEsRUFBTTtFQUVOK0wsY0FBQSxFQUFnQjtJQUNkLE1BQU1DLFVBQUEsR0FBYSxFQUFDO0lBRXBCLElBQUksS0FBS3hMLE9BQUEsQ0FBUXlMLFVBQUEsS0FBZSxPQUFPO01BQ3JDRCxVQUFBLENBQVd0RyxJQUFBLENBQUsxSCxVQUFBLENBQVdrTyxTQUFBLENBQVUsS0FBSzFMLE9BQUEsQ0FBUXlMLFVBQVUsQ0FBQztJQUMvRDtJQUVBLElBQUksS0FBS3pMLE9BQUEsQ0FBUWdKLFFBQUEsS0FBYSxPQUFPO01BQ25Dd0MsVUFBQSxDQUFXdEcsSUFBQSxDQUFLekgsUUFBQSxDQUFTaU8sU0FBQSxDQUFVLEtBQUsxTCxPQUFBLENBQVFnSixRQUFRLENBQUM7SUFDM0Q7SUFFQSxJQUFJLEtBQUtoSixPQUFBLENBQVEyTCxVQUFBLEtBQWUsT0FBTztNQUNyQ0gsVUFBQSxDQUFXdEcsSUFBQSxDQUFLeEgsVUFBQSxDQUFXZ08sU0FBQSxDQUFVLEtBQUsxTCxPQUFBLENBQVEyTCxVQUFVLENBQUM7SUFDL0Q7SUFFQSxJQUFJLEtBQUszTCxPQUFBLENBQVE0TCxXQUFBLEtBQWdCLE9BQU87TUFDdENKLFVBQUEsQ0FBV3RHLElBQUEsQ0FBS3RILFdBQUEsQ0FBWThOLFNBQUEsQ0FBVSxLQUFLMUwsT0FBQSxDQUFRNEwsV0FBVyxDQUFDO0lBQ2pFO0lBRUEsSUFBSSxLQUFLNUwsT0FBQSxDQUFRNkwsUUFBQSxLQUFhLE9BQU87TUFDbkNMLFVBQUEsQ0FBV3RHLElBQUEsQ0FBS3JILFFBQUEsQ0FBUzZOLFNBQUEsQ0FBVSxLQUFLMUwsT0FBQSxDQUFRNkwsUUFBUSxDQUFDO0lBQzNEO0lBRUEsSUFBSSxLQUFLN0wsT0FBQSxDQUFROEwsUUFBQSxLQUFhLE9BQU87TUFDbkNOLFVBQUEsQ0FBV3RHLElBQUEsQ0FBS3BILFFBQUEsQ0FBUzROLFNBQUEsQ0FBVSxLQUFLMUwsT0FBQSxDQUFROEwsUUFBUSxDQUFDO0lBQzNEO0lBRUEsT0FBT04sVUFBQTtFQUNUO0FBQ0YsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=