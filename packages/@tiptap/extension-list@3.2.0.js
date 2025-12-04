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

// .beyond/uimport/@tiptap/extension-list.3.2.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1saXN0LjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2J1bGxldC1saXN0L2J1bGxldC1saXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2l0ZW0vbGlzdC1pdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0LWtleW1hcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saXN0L3NyYy9rZXltYXAvbGlzdEhlbHBlcnMvZmluZExpc3RJdGVtUG9zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0SGVscGVycy9nZXROZXh0TGlzdERlcHRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0SGVscGVycy9oYW5kbGVCYWNrc3BhY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3RIZWxwZXJzL2xpc3RJdGVtSGFzU3ViTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saXN0L3NyYy9rZXltYXAvbGlzdEhlbHBlcnMvaGFuZGxlRGVsZXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tpdC9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saXN0L3NyYy9vcmRlcmVkLWxpc3Qvb3JkZXJlZC1saXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL3Rhc2staXRlbS90YXNrLWl0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMvdGFzay1saXN0L3Rhc2stbGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saXN0L3NyYy9rZXltYXAvbGlzdEhlbHBlcnMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3RIZWxwZXJzL2hhc0xpc3RCZWZvcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGlzdC9zcmMva2V5bWFwL2xpc3RIZWxwZXJzL2hhc0xpc3RJdGVtQmVmb3JlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0SGVscGVycy9uZXh0TGlzdElzRGVlcGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0SGVscGVycy9uZXh0TGlzdElzSGlnaGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpc3Qvc3JjL2tleW1hcC9saXN0SGVscGVycy9oYXNMaXN0SXRlbUFmdGVyLnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9saXN0XzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJ1bGxldExpc3QiLCJMaXN0SXRlbSIsIkxpc3RLZXltYXAiLCJMaXN0S2l0IiwiT3JkZXJlZExpc3QiLCJUYXNrSXRlbSIsIlRhc2tMaXN0IiwiYnVsbGV0TGlzdElucHV0UmVnZXgiLCJpbnB1dFJlZ2V4IiwibGlzdEhlbHBlcnMiLCJsaXN0SGVscGVyc19leHBvcnRzIiwib3JkZXJlZExpc3RJbnB1dFJlZ2V4IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9jb3JlIiwicmVxdWlyZSIsImltcG9ydF9jb3JlMiIsImltcG9ydF9jb3JlMyIsImltcG9ydF9jb3JlNCIsImltcG9ydF9jb3JlNSIsImltcG9ydF9jb3JlNiIsImltcG9ydF9jb3JlNyIsImltcG9ydF9jb3JlOCIsImltcG9ydF9jb3JlOSIsImltcG9ydF9jb3JlMTAiLCJpbXBvcnRfY29yZTExIiwiaW1wb3J0X2NvcmUxMiIsIkxpc3RJdGVtTmFtZSIsIlRleHRTdHlsZU5hbWUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJpdGVtVHlwZU5hbWUiLCJIVE1MQXR0cmlidXRlcyIsImtlZXBNYXJrcyIsImtlZXBBdHRyaWJ1dGVzIiwiZ3JvdXAiLCJjb250ZW50Iiwib3B0aW9ucyIsInBhcnNlSFRNTCIsInRhZyIsInJlbmRlckhUTUwiLCJtZXJnZUF0dHJpYnV0ZXMiLCJhZGRDb21tYW5kcyIsInRvZ2dsZUJ1bGxldExpc3QiLCJjb21tYW5kcyIsImNoYWluIiwidG9nZ2xlTGlzdCIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJlZGl0b3IiLCJnZXRBdHRyaWJ1dGVzIiwicnVuIiwiYWRkS2V5Ym9hcmRTaG9ydGN1dHMiLCJNb2QtU2hpZnQtOCIsImFkZElucHV0UnVsZXMiLCJpbnB1dFJ1bGUiLCJ3cmFwcGluZ0lucHV0UnVsZSIsImZpbmQiLCJ0eXBlIiwiYnVsbGV0TGlzdFR5cGVOYW1lIiwib3JkZXJlZExpc3RUeXBlTmFtZSIsImRlZmluaW5nIiwiRW50ZXIiLCJzcGxpdExpc3RJdGVtIiwiVGFiIiwic2lua0xpc3RJdGVtIiwiU2hpZnQtVGFiIiwibGlmdExpc3RJdGVtIiwiX19leHBvcnQyIiwiZmluZExpc3RJdGVtUG9zIiwiZ2V0TmV4dExpc3REZXB0aCIsImhhbmRsZUJhY2tzcGFjZSIsImhhbmRsZURlbGV0ZSIsImhhc0xpc3RCZWZvcmUiLCJoYXNMaXN0SXRlbUFmdGVyIiwiaGFzTGlzdEl0ZW1CZWZvcmUiLCJsaXN0SXRlbUhhc1N1Ykxpc3QiLCJuZXh0TGlzdElzRGVlcGVyIiwibmV4dExpc3RJc0hpZ2hlciIsInR5cGVPck5hbWUiLCJzdGF0ZSIsIiRmcm9tIiwic2VsZWN0aW9uIiwibm9kZVR5cGUiLCJnZXROb2RlVHlwZSIsInNjaGVtYSIsImN1cnJlbnROb2RlIiwiY3VycmVudERlcHRoIiwiZGVwdGgiLCJjdXJyZW50UG9zIiwicG9zIiwidGFyZ2V0RGVwdGgiLCJub2RlIiwiJHBvcyIsImRvYyIsInJlc29sdmUiLCJsaXN0SXRlbVBvcyIsImdldE5vZGVBdFBvc2l0aW9uIiwiZWRpdG9yU3RhdGUiLCJwYXJlbnRMaXN0VHlwZXMiLCIkYW5jaG9yIiwicHJldmlvdXNOb2RlUG9zIiwiTWF0aCIsIm1heCIsInByZXZpb3VzTm9kZSIsImluY2x1ZGVzIiwiX2EiLCIkdGFyZ2V0UG9zIiwiaW5kZXgiLCJub2RlQmVmb3JlIiwiaGFzU3ViTGlzdCIsImRlc2NlbmRhbnRzIiwiY2hpbGQiLCJ1bmRvSW5wdXRSdWxlIiwiZnJvbSIsInRvIiwiaXNOb2RlQWN0aXZlIiwiJGxpc3RQb3MiLCJiZWZvcmUiLCJsaXN0RGVzY2VuZGFudHMiLCJwdXNoIiwibGFzdEl0ZW0iLCJhdCIsIiRsYXN0SXRlbVBvcyIsInN0YXJ0IiwiY3V0IiwiZW5kIiwiam9pbkZvcndhcmQiLCJpc0F0U3RhcnRPZk5vZGUiLCIkcHJldiIsInByZXZOb2RlIiwicHJldmlvdXNMaXN0SXRlbUhhc1N1Ykxpc3QiLCJqb2luSXRlbUJhY2t3YXJkIiwibGlzdERlcHRoIiwiaXNBdEVuZE9mTm9kZSIsIiR0byIsImVtcHR5Iiwic2FtZVBhcmVudCIsImZvY3VzIiwibGlmdCIsImpvaW5CYWNrd2FyZCIsImpvaW5JdGVtRm9yd2FyZCIsInBhcmVudE9mZnNldCIsInBhcmVudCIsImNoaWxkQ291bnQiLCJub2RlQWZ0ZXIiLCJFeHRlbnNpb24iLCJsaXN0VHlwZXMiLCJpdGVtTmFtZSIsIndyYXBwZXJOYW1lcyIsIkRlbGV0ZSIsImhhbmRsZWQiLCJmb3JFYWNoIiwibm9kZXMiLCJNb2QtRGVsZXRlIiwiQmFja3NwYWNlIiwiTW9kLUJhY2tzcGFjZSIsIkxpc3RJdGVtTmFtZTIiLCJUZXh0U3R5bGVOYW1lMiIsImFkZEF0dHJpYnV0ZXMiLCJkZWZhdWx0IiwiZWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiYXR0cmlidXRlc1dpdGhvdXRTdGFydCIsInRvZ2dsZU9yZGVyZWRMaXN0IiwiTW9kLVNoaWZ0LTciLCJtYXRjaCIsImpvaW5QcmVkaWNhdGUiLCJhdHRycyIsIm5lc3RlZCIsInRhc2tMaXN0VHlwZU5hbWUiLCJhMTF5IiwiY2hlY2tlZCIsImtlZXBPblNwbGl0IiwiZGF0YUNoZWNrZWQiLCJhdHRyaWJ1dGVzIiwicHJpb3JpdHkiLCJzaG9ydGN1dHMiLCJhZGROb2RlVmlldyIsImdldFBvcyIsImxpc3RJdGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hlY2tib3hXcmFwcGVyIiwiY2hlY2tib3hTdHlsZXIiLCJjaGVja2JveCIsInVwZGF0ZUExMVkiLCJfYiIsImFyaWFMYWJlbCIsImNoZWNrYm94TGFiZWwiLCJjYWxsIiwidGV4dENvbnRlbnQiLCJjb250ZW50RWRpdGFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlzRWRpdGFibGUiLCJvblJlYWRPbmx5Q2hlY2tlZCIsInRhcmdldCIsInNjcm9sbEludG9WaWV3IiwiY29tbWFuZCIsInRyIiwicG9zaXRpb24iLCJub2RlQXQiLCJzZXROb2RlTWFya3VwIiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwiZGF0YXNldCIsImFwcGVuZCIsImRvbSIsImNvbnRlbnRET00iLCJ1cGRhdGUiLCJ1cGRhdGVkTm9kZSIsImxlbmd0aCIsInRvZ2dsZVRhc2tMaXN0IiwiTW9kLVNoaWZ0LTkiLCJhZGRFeHRlbnNpb25zIiwiZXh0ZW5zaW9ucyIsImJ1bGxldExpc3QiLCJjb25maWd1cmUiLCJsaXN0S2V5bWFwIiwib3JkZXJlZExpc3QiLCJ0YXNrSXRlbSIsInRhc2tMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q1osT0FBTztNQUNMZ0wsY0FBQSxFQUNFQSxDQUFBLEtBQ0EsQ0FBQztRQUFFOUs7TUFBUyxNQUFNO1FBQ2hCLE9BQU9BLFFBQUEsQ0FBU0UsVUFBQSxDQUFXLEtBQUtqQixJQUFBLEVBQU0sS0FBS1EsT0FBQSxDQUFRTixZQUFZO01BQ2pFO0lBQ0o7RUFDRjtFQUVBb0IscUJBQUEsRUFBdUI7SUFDckIsT0FBTztNQUNMLGVBQWV3SyxDQUFBLEtBQU0sS0FBSzNLLE1BQUEsQ0FBT0osUUFBQSxDQUFTOEssY0FBQSxDQUFlO0lBQzNEO0VBQ0Y7QUFDRixDQUFDO0FIOUJNLElBQU0xTixPQUFBLEdBQVVxQixZQUFBLENBQUE0SCxTQUFBLENBQVVySCxNQUFBLENBQXVCO0VBQ3REQyxJQUFBLEVBQU07RUFFTitMLGNBQUEsRUFBZ0I7SUFDZCxNQUFNQyxVQUFBLEdBQWEsRUFBQztJQUVwQixJQUFJLEtBQUt4TCxPQUFBLENBQVF5TCxVQUFBLEtBQWUsT0FBTztNQUNyQ0QsVUFBQSxDQUFXdEcsSUFBQSxDQUFLMUgsVUFBQSxDQUFXa08sU0FBQSxDQUFVLEtBQUsxTCxPQUFBLENBQVF5TCxVQUFVLENBQUM7SUFDL0Q7SUFFQSxJQUFJLEtBQUt6TCxPQUFBLENBQVFnSixRQUFBLEtBQWEsT0FBTztNQUNuQ3dDLFVBQUEsQ0FBV3RHLElBQUEsQ0FBS3pILFFBQUEsQ0FBU2lPLFNBQUEsQ0FBVSxLQUFLMUwsT0FBQSxDQUFRZ0osUUFBUSxDQUFDO0lBQzNEO0lBRUEsSUFBSSxLQUFLaEosT0FBQSxDQUFRMkwsVUFBQSxLQUFlLE9BQU87TUFDckNILFVBQUEsQ0FBV3RHLElBQUEsQ0FBS3hILFVBQUEsQ0FBV2dPLFNBQUEsQ0FBVSxLQUFLMUwsT0FBQSxDQUFRMkwsVUFBVSxDQUFDO0lBQy9EO0lBRUEsSUFBSSxLQUFLM0wsT0FBQSxDQUFRNEwsV0FBQSxLQUFnQixPQUFPO01BQ3RDSixVQUFBLENBQVd0RyxJQUFBLENBQUt0SCxXQUFBLENBQVk4TixTQUFBLENBQVUsS0FBSzFMLE9BQUEsQ0FBUTRMLFdBQVcsQ0FBQztJQUNqRTtJQUVBLElBQUksS0FBSzVMLE9BQUEsQ0FBUTZMLFFBQUEsS0FBYSxPQUFPO01BQ25DTCxVQUFBLENBQVd0RyxJQUFBLENBQUtySCxRQUFBLENBQVM2TixTQUFBLENBQVUsS0FBSzFMLE9BQUEsQ0FBUTZMLFFBQVEsQ0FBQztJQUMzRDtJQUVBLElBQUksS0FBSzdMLE9BQUEsQ0FBUThMLFFBQUEsS0FBYSxPQUFPO01BQ25DTixVQUFBLENBQVd0RyxJQUFBLENBQUtwSCxRQUFBLENBQVM0TixTQUFBLENBQVUsS0FBSzFMLE9BQUEsQ0FBUThMLFFBQVEsQ0FBQztJQUMzRDtJQUVBLE9BQU9OLFVBQUE7RUFDVDtBQUNGLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9