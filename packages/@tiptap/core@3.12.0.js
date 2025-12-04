System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep)],
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

// .beyond/uimport/@tiptap/core.3.12.0.js
var core_3_12_0_exports = {};
__export(core_3_12_0_exports, {
  CommandManager: () => CommandManager,
  Editor: () => Editor,
  Extendable: () => Extendable,
  Extension: () => Extension,
  Fragment: () => Fragment6,
  InputRule: () => InputRule,
  MappablePosition: () => MappablePosition,
  Mark: () => Mark,
  MarkView: () => MarkView,
  Node: () => Node3,
  NodePos: () => NodePos,
  NodeView: () => NodeView,
  PasteRule: () => PasteRule,
  ResizableNodeView: () => ResizableNodeView,
  ResizableNodeview: () => ResizableNodeview,
  Tracker: () => Tracker,
  callOrReturn: () => callOrReturn,
  canInsertNode: () => canInsertNode,
  combineTransactionSteps: () => combineTransactionSteps,
  commands: () => commands_exports,
  createAtomBlockMarkdownSpec: () => createAtomBlockMarkdownSpec,
  createBlockMarkdownSpec: () => createBlockMarkdownSpec,
  createChainableState: () => createChainableState,
  createDocument: () => createDocument,
  createElement: () => h,
  createInlineMarkdownSpec: () => createInlineMarkdownSpec,
  createMappablePosition: () => createMappablePosition,
  createNodeFromContent: () => createNodeFromContent,
  createStyleTag: () => createStyleTag,
  defaultBlockAt: () => defaultBlockAt,
  deleteProps: () => deleteProps,
  elementFromString: () => elementFromString,
  escapeForRegEx: () => escapeForRegEx,
  extensions: () => extensions_exports,
  findChildren: () => findChildren,
  findChildrenInRange: () => findChildrenInRange,
  findDuplicates: () => findDuplicates,
  findParentNode: () => findParentNode,
  findParentNodeClosestToPos: () => findParentNodeClosestToPos,
  flattenExtensions: () => flattenExtensions,
  fromString: () => fromString,
  generateHTML: () => generateHTML,
  generateJSON: () => generateJSON,
  generateText: () => generateText,
  getAttributes: () => getAttributes,
  getAttributesFromExtensions: () => getAttributesFromExtensions,
  getChangedRanges: () => getChangedRanges,
  getDebugJSON: () => getDebugJSON,
  getExtensionField: () => getExtensionField,
  getHTMLFromFragment: () => getHTMLFromFragment,
  getMarkAttributes: () => getMarkAttributes,
  getMarkRange: () => getMarkRange,
  getMarkType: () => getMarkType,
  getMarksBetween: () => getMarksBetween,
  getNodeAtPosition: () => getNodeAtPosition,
  getNodeAttributes: () => getNodeAttributes,
  getNodeType: () => getNodeType,
  getRenderedAttributes: () => getRenderedAttributes,
  getSchema: () => getSchema,
  getSchemaByResolvedExtensions: () => getSchemaByResolvedExtensions,
  getSchemaTypeByName: () => getSchemaTypeByName,
  getSchemaTypeNameByName: () => getSchemaTypeNameByName,
  getSplittedAttributes: () => getSplittedAttributes,
  getText: () => getText,
  getTextBetween: () => getTextBetween,
  getTextContentFromNodes: () => getTextContentFromNodes,
  getTextSerializersFromSchema: () => getTextSerializersFromSchema,
  getUpdatedPosition: () => getUpdatedPosition,
  h: () => h,
  injectExtensionAttributesToParseRule: () => injectExtensionAttributesToParseRule,
  inputRulesPlugin: () => inputRulesPlugin,
  isActive: () => isActive,
  isAndroid: () => isAndroid,
  isAtEndOfNode: () => isAtEndOfNode,
  isAtStartOfNode: () => isAtStartOfNode,
  isEmptyObject: () => isEmptyObject,
  isExtensionRulesEnabled: () => isExtensionRulesEnabled,
  isFunction: () => isFunction,
  isList: () => isList,
  isMacOS: () => isMacOS,
  isMarkActive: () => isMarkActive,
  isNodeActive: () => isNodeActive,
  isNodeEmpty: () => isNodeEmpty,
  isNodeSelection: () => isNodeSelection,
  isNumber: () => isNumber,
  isPlainObject: () => isPlainObject,
  isRegExp: () => isRegExp,
  isString: () => isString,
  isTextSelection: () => isTextSelection,
  isiOS: () => isiOS,
  markInputRule: () => markInputRule,
  markPasteRule: () => markPasteRule,
  markdown: () => markdown_exports,
  mergeAttributes: () => mergeAttributes,
  mergeDeep: () => mergeDeep,
  minMax: () => minMax,
  nodeInputRule: () => nodeInputRule,
  nodePasteRule: () => nodePasteRule,
  objectIncludes: () => objectIncludes,
  parseAttributes: () => parseAttributes,
  parseIndentedBlocks: () => parseIndentedBlocks,
  pasteRulesPlugin: () => pasteRulesPlugin,
  posToDOMRect: () => posToDOMRect,
  removeDuplicates: () => removeDuplicates,
  renderNestedMarkdownContent: () => renderNestedMarkdownContent,
  resolveExtensions: () => resolveExtensions,
  resolveFocusPosition: () => resolveFocusPosition,
  rewriteUnknownContent: () => rewriteUnknownContent,
  selectionToInsertionEnd: () => selectionToInsertionEnd,
  serializeAttributes: () => serializeAttributes,
  sortExtensions: () => sortExtensions,
  splitExtensions: () => splitExtensions,
  textInputRule: () => textInputRule,
  textPasteRule: () => textPasteRule,
  textblockTypeInputRule: () => textblockTypeInputRule,
  updateMarkViewAttributes: () => updateMarkViewAttributes,
  wrappingInputRule: () => wrappingInputRule
});
module.exports = __toCommonJS(core_3_12_0_exports);

// node_modules/@tiptap/core/dist/index.js
var import_transform = require("@tiptap/pm@3.12.0/transform");
var import_commands = require("@tiptap/pm@3.12.0/commands");
var import_state = require("@tiptap/pm@3.12.0/state");
var import_commands2 = require("@tiptap/pm@3.12.0/commands");
var import_commands3 = require("@tiptap/pm@3.12.0/commands");
var import_state2 = require("@tiptap/pm@3.12.0/state");
var import_state3 = require("@tiptap/pm@3.12.0/state");
var import_state4 = require("@tiptap/pm@3.12.0/state");
var import_model = require("@tiptap/pm@3.12.0/model");
var import_model2 = require("@tiptap/pm@3.12.0/model");
var import_state5 = require("@tiptap/pm@3.12.0/state");
var import_transform2 = require("@tiptap/pm@3.12.0/transform");
var import_commands4 = require("@tiptap/pm@3.12.0/commands");
var import_transform3 = require("@tiptap/pm@3.12.0/transform");
var import_transform4 = require("@tiptap/pm@3.12.0/transform");
var import_commands5 = require("@tiptap/pm@3.12.0/commands");
var import_commands6 = require("@tiptap/pm@3.12.0/commands");
var import_commands7 = require("@tiptap/pm@3.12.0/commands");
var import_commands8 = require("@tiptap/pm@3.12.0/commands");
var import_schema_list = require("@tiptap/pm@3.12.0/schema-list");
var import_commands9 = require("@tiptap/pm@3.12.0/commands");
var import_state6 = require("@tiptap/pm@3.12.0/state");
var import_commands10 = require("@tiptap/pm@3.12.0/commands");
var import_commands11 = require("@tiptap/pm@3.12.0/commands");
var import_commands12 = require("@tiptap/pm@3.12.0/commands");
var import_commands13 = require("@tiptap/pm@3.12.0/commands");
var import_commands14 = require("@tiptap/pm@3.12.0/commands");
var import_transform5 = require("@tiptap/pm@3.12.0/transform");
var import_model3 = require("@tiptap/pm@3.12.0/model");
var import_model4 = require("@tiptap/pm@3.12.0/model");
var import_model5 = require("@tiptap/pm@3.12.0/model");
var import_model6 = require("@tiptap/pm@3.12.0/model");
var import_model7 = require("@tiptap/pm@3.12.0/model");
var import_state7 = require("@tiptap/pm@3.12.0/state");
var import_commands15 = require("@tiptap/pm@3.12.0/commands");
var import_state8 = require("@tiptap/pm@3.12.0/state");
var import_state9 = require("@tiptap/pm@3.12.0/state");
var import_schema_list2 = require("@tiptap/pm@3.12.0/schema-list");
var import_state10 = require("@tiptap/pm@3.12.0/state");
var import_transform6 = require("@tiptap/pm@3.12.0/transform");
var import_model8 = require("@tiptap/pm@3.12.0/model");
var import_state11 = require("@tiptap/pm@3.12.0/state");
var import_transform7 = require("@tiptap/pm@3.12.0/transform");
var import_transform8 = require("@tiptap/pm@3.12.0/transform");
var import_commands16 = require("@tiptap/pm@3.12.0/commands");
var import_schema_list3 = require("@tiptap/pm@3.12.0/schema-list");
var import_state12 = require("@tiptap/pm@3.12.0/state");
var import_view = require("@tiptap/pm@3.12.0/view");
var import_keymap = require("@tiptap/pm@3.12.0/keymap");
var import_model9 = require("@tiptap/pm@3.12.0/model");
var import_state13 = require("@tiptap/pm@3.12.0/state");
var import_model10 = require("@tiptap/pm@3.12.0/model");
var import_state14 = require("@tiptap/pm@3.12.0/state");
var import_state15 = require("@tiptap/pm@3.12.0/state");
var import_transform9 = require("@tiptap/pm@3.12.0/transform");
var import_state16 = require("@tiptap/pm@3.12.0/state");
var import_state17 = require("@tiptap/pm@3.12.0/state");
var import_state18 = require("@tiptap/pm@3.12.0/state");
var import_state19 = require("@tiptap/pm@3.12.0/state");
var import_state20 = require("@tiptap/pm@3.12.0/state");
var import_state21 = require("@tiptap/pm@3.12.0/state");
var import_state22 = require("@tiptap/pm@3.12.0/state");
var import_transform10 = require("@tiptap/pm@3.12.0/transform");
var import_state23 = require("@tiptap/pm@3.12.0/state");
var import_state24 = require("@tiptap/pm@3.12.0/state");
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all) __defProp2(target, name, {
    get: all[name],
    enumerable: true
  });
};
function createChainableState(config) {
  const {
    state,
    transaction
  } = config;
  let {
    selection
  } = transaction;
  let {
    doc
  } = transaction;
  let {
    storedMarks
  } = transaction;
  return {
    ...state,
    apply: state.apply.bind(state),
    applyTransaction: state.applyTransaction.bind(state),
    plugins: state.plugins,
    schema: state.schema,
    reconfigure: state.reconfigure.bind(state),
    toJSON: state.toJSON.bind(state),
    get storedMarks() {
      return storedMarks;
    },
    get selection() {
      return selection;
    },
    get doc() {
      return doc;
    },
    get tr() {
      selection = transaction.selection;
      doc = transaction.doc;
      storedMarks = transaction.storedMarks;
      return transaction;
    }
  };
}
var CommandManager = class {
  constructor(props) {
    this.editor = props.editor;
    this.rawCommands = this.editor.extensionManager.commands;
    this.customState = props.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const {
      tr
    } = state;
    const props = this.buildProps(tr);
    return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      const method = (...args) => {
        const callback = command2(...args)(props);
        if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
          view.dispatch(tr);
        }
        return callback;
      };
      return [name, method];
    }));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(startTr, shouldDispatch = true) {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const callbacks = [];
    const hasStartTransaction = !!startTr;
    const tr = startTr || state.tr;
    const run3 = () => {
      if (!hasStartTransaction && shouldDispatch && !tr.getMeta("preventDispatch") && !this.hasCustomState) {
        view.dispatch(tr);
      }
      return callbacks.every(callback => callback === true);
    };
    const chain = {
      ...Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
        const chainedCommand = (...args) => {
          const props = this.buildProps(tr, shouldDispatch);
          const callback = command2(...args)(props);
          callbacks.push(callback);
          return chain;
        };
        return [name, chainedCommand];
      })),
      run: run3
    };
    return chain;
  }
  createCan(startTr) {
    const {
      rawCommands,
      state
    } = this;
    const dispatch = false;
    const tr = startTr || state.tr;
    const props = this.buildProps(tr, dispatch);
    const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
      return [name, (...args) => command2(...args)({
        ...props,
        dispatch: void 0
      })];
    }));
    return {
      ...formattedCommands,
      chain: () => this.createChain(tr, dispatch)
    };
  }
  buildProps(tr, shouldDispatch = true) {
    const {
      rawCommands,
      editor,
      state
    } = this;
    const {
      view
    } = editor;
    const props = {
      tr,
      editor,
      view,
      state: createChainableState({
        state,
        transaction: tr
      }),
      dispatch: shouldDispatch ? () => void 0 : void 0,
      chain: () => this.createChain(tr, shouldDispatch),
      can: () => this.createCan(tr),
      get commands() {
        return Object.fromEntries(Object.entries(rawCommands).map(([name, command2]) => {
          return [name, (...args) => command2(...args)(props)];
        }));
      }
    };
    return props;
  }
};
var commands_exports = {};
__export2(commands_exports, {
  blur: () => blur,
  clearContent: () => clearContent,
  clearNodes: () => clearNodes,
  command: () => command,
  createParagraphNear: () => createParagraphNear,
  cut: () => cut,
  deleteCurrentNode: () => deleteCurrentNode,
  deleteNode: () => deleteNode,
  deleteRange: () => deleteRange,
  deleteSelection: () => deleteSelection,
  enter: () => enter,
  exitCode: () => exitCode,
  extendMarkRange: () => extendMarkRange,
  first: () => first,
  focus: () => focus,
  forEach: () => forEach,
  insertContent: () => insertContent,
  insertContentAt: () => insertContentAt,
  joinBackward: () => joinBackward,
  joinDown: () => joinDown,
  joinForward: () => joinForward,
  joinItemBackward: () => joinItemBackward,
  joinItemForward: () => joinItemForward,
  joinTextblockBackward: () => joinTextblockBackward,
  joinTextblockForward: () => joinTextblockForward,
  joinUp: () => joinUp,
  keyboardShortcut: () => keyboardShortcut,
  lift: () => lift,
  liftEmptyBlock: () => liftEmptyBlock,
  liftListItem: () => liftListItem,
  newlineInCode: () => newlineInCode,
  resetAttributes: () => resetAttributes,
  scrollIntoView: () => scrollIntoView,
  selectAll: () => selectAll,
  selectNodeBackward: () => selectNodeBackward,
  selectNodeForward: () => selectNodeForward,
  selectParentNode: () => selectParentNode,
  selectTextblockEnd: () => selectTextblockEnd,
  selectTextblockStart: () => selectTextblockStart,
  setContent: () => setContent,
  setMark: () => setMark,
  setMeta: () => setMeta,
  setNode: () => setNode,
  setNodeSelection: () => setNodeSelection,
  setTextDirection: () => setTextDirection,
  setTextSelection: () => setTextSelection,
  sinkListItem: () => sinkListItem,
  splitBlock: () => splitBlock,
  splitListItem: () => splitListItem,
  toggleList: () => toggleList,
  toggleMark: () => toggleMark,
  toggleNode: () => toggleNode,
  toggleWrap: () => toggleWrap,
  undoInputRule: () => undoInputRule,
  unsetAllMarks: () => unsetAllMarks,
  unsetMark: () => unsetMark,
  unsetTextDirection: () => unsetTextDirection,
  updateAttributes: () => updateAttributes,
  wrapIn: () => wrapIn,
  wrapInList: () => wrapInList
});
var blur = () => ({
  editor,
  view
}) => {
  requestAnimationFrame(() => {
    var _a;
    if (!editor.isDestroyed) {
      ;
      view.dom.blur();
      (_a = window == null ? void 0 : window.getSelection()) == null ? void 0 : _a.removeAllRanges();
    }
  });
  return true;
};
var clearContent = (emitUpdate = true) => ({
  commands
}) => {
  return commands.setContent("", {
    emitUpdate
  });
};
var clearNodes = () => ({
  state,
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    ranges
  } = selection;
  if (!dispatch) {
    return true;
  }
  ranges.forEach(({
    $from,
    $to
  }) => {
    state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (node.type.isText) {
        return;
      }
      const {
        doc,
        mapping
      } = tr;
      const $mappedFrom = doc.resolve(mapping.map(pos));
      const $mappedTo = doc.resolve(mapping.map(pos + node.nodeSize));
      const nodeRange = $mappedFrom.blockRange($mappedTo);
      if (!nodeRange) {
        return;
      }
      const targetLiftDepth = (0, import_transform.liftTarget)(nodeRange);
      if (node.type.isTextblock) {
        const {
          defaultType
        } = $mappedFrom.parent.contentMatchAt($mappedFrom.index());
        tr.setNodeMarkup(nodeRange.start, defaultType);
      }
      if (targetLiftDepth || targetLiftDepth === 0) {
        tr.lift(nodeRange, targetLiftDepth);
      }
    });
  });
  return true;
};
var command = fn => props => {
  return fn(props);
};
var createParagraphNear = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands.createParagraphNear)(state, dispatch);
};
var cut = (originRange, targetPos) => ({
  editor,
  tr
}) => {
  const {
    state
  } = editor;
  const contentSlice = state.doc.slice(originRange.from, originRange.to);
  tr.deleteRange(originRange.from, originRange.to);
  const newPos = tr.mapping.map(targetPos);
  tr.insert(newPos, contentSlice.content);
  tr.setSelection(new import_state.TextSelection(tr.doc.resolve(Math.max(newPos - 1, 0))));
  return true;
};
var deleteCurrentNode = () => ({
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const currentNode = selection.$anchor.node();
  if (currentNode.content.size > 0) {
    return false;
  }
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (node.type === currentNode.type) {
      if (dispatch) {
        const from = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
function getNodeType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.nodes[nameOrType]) {
      throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.nodes[nameOrType];
  }
  return nameOrType;
}
var deleteNode = typeOrName => ({
  tr,
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  const $pos = tr.selection.$anchor;
  for (let depth = $pos.depth; depth > 0; depth -= 1) {
    const node = $pos.node(depth);
    if (node.type === type) {
      if (dispatch) {
        const from = $pos.before(depth);
        const to = $pos.after(depth);
        tr.delete(from, to).scrollIntoView();
      }
      return true;
    }
  }
  return false;
};
var deleteRange = range => ({
  tr,
  dispatch
}) => {
  const {
    from,
    to
  } = range;
  if (dispatch) {
    tr.delete(from, to);
  }
  return true;
};
var deleteSelection = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands2.deleteSelection)(state, dispatch);
};
var enter = () => ({
  commands
}) => {
  return commands.keyboardShortcut("Enter");
};
var exitCode = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands3.exitCode)(state, dispatch);
};
function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}
function objectIncludes(object1, object2, options = {
  strict: true
}) {
  const keys = Object.keys(object2);
  if (!keys.length) {
    return true;
  }
  return keys.every(key => {
    if (options.strict) {
      return object2[key] === object1[key];
    }
    if (isRegExp(object2[key])) {
      return object2[key].test(object1[key]);
    }
    return object2[key] === object1[key];
  });
}
function findMarkInSet(marks, type, attributes = {}) {
  return marks.find(item => {
    return item.type === type && objectIncludes(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(attributes).map(k => [k, item.attrs[k]])), attributes);
  });
}
function isMarkInSet(marks, type, attributes = {}) {
  return !!findMarkInSet(marks, type, attributes);
}
function getMarkRange($pos, type, attributes) {
  var _a;
  if (!$pos || !type) {
    return;
  }
  let start = $pos.parent.childAfter($pos.parentOffset);
  if (!start.node || !start.node.marks.some(mark2 => mark2.type === type)) {
    start = $pos.parent.childBefore($pos.parentOffset);
  }
  if (!start.node || !start.node.marks.some(mark2 => mark2.type === type)) {
    return;
  }
  attributes = attributes || ((_a = start.node.marks[0]) == null ? void 0 : _a.attrs);
  const mark = findMarkInSet([...start.node.marks], type, attributes);
  if (!mark) {
    return;
  }
  let startIndex = start.index;
  let startPos = $pos.start() + start.offset;
  let endIndex = startIndex + 1;
  let endPos = startPos + start.node.nodeSize;
  while (startIndex > 0 && isMarkInSet([...$pos.parent.child(startIndex - 1).marks], type, attributes)) {
    startIndex -= 1;
    startPos -= $pos.parent.child(startIndex).nodeSize;
  }
  while (endIndex < $pos.parent.childCount && isMarkInSet([...$pos.parent.child(endIndex).marks], type, attributes)) {
    endPos += $pos.parent.child(endIndex).nodeSize;
    endIndex += 1;
  }
  return {
    from: startPos,
    to: endPos
  };
}
function getMarkType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.marks[nameOrType]) {
      throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.marks[nameOrType];
  }
  return nameOrType;
}
var extendMarkRange = (typeOrName, attributes = {}) => ({
  tr,
  state,
  dispatch
}) => {
  const type = getMarkType(typeOrName, state.schema);
  const {
    doc,
    selection
  } = tr;
  const {
    $from,
    from,
    to
  } = selection;
  if (dispatch) {
    const range = getMarkRange($from, type, attributes);
    if (range && range.from <= from && range.to >= to) {
      const newSelection = import_state2.TextSelection.create(doc, range.from, range.to);
      tr.setSelection(newSelection);
    }
  }
  return true;
};
var first = commands => props => {
  const items = typeof commands === "function" ? commands(props) : commands;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i](props)) {
      return true;
    }
  }
  return false;
};
function isTextSelection(value) {
  return value instanceof import_state3.TextSelection;
}
function minMax(value = 0, min = 0, max = 0) {
  return Math.min(Math.max(value, min), max);
}
function resolveFocusPosition(doc, position = null) {
  if (!position) {
    return null;
  }
  const selectionAtStart = import_state4.Selection.atStart(doc);
  const selectionAtEnd = import_state4.Selection.atEnd(doc);
  if (position === "start" || position === true) {
    return selectionAtStart;
  }
  if (position === "end") {
    return selectionAtEnd;
  }
  const minPos = selectionAtStart.from;
  const maxPos = selectionAtEnd.to;
  if (position === "all") {
    return import_state4.TextSelection.create(doc, minMax(0, minPos, maxPos), minMax(doc.content.size, minPos, maxPos));
  }
  return import_state4.TextSelection.create(doc, minMax(position, minPos, maxPos), minMax(position, minPos, maxPos));
}
function isAndroid() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function isiOS() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var focus = (position = null, options = {}) => ({
  editor,
  view,
  tr,
  dispatch
}) => {
  options = {
    scrollIntoView: true,
    ...options
  };
  const delayedFocus = () => {
    if (isiOS() || isAndroid()) {
      ;
      view.dom.focus();
    }
    requestAnimationFrame(() => {
      if (!editor.isDestroyed) {
        view.focus();
        if (options == null ? void 0 : options.scrollIntoView) {
          editor.commands.scrollIntoView();
        }
      }
    });
  };
  if (view.hasFocus() && position === null || position === false) {
    return true;
  }
  if (dispatch && position === null && !isTextSelection(editor.state.selection)) {
    delayedFocus();
    return true;
  }
  const selection = resolveFocusPosition(tr.doc, position) || editor.state.selection;
  const isSameSelection = editor.state.selection.eq(selection);
  if (dispatch) {
    if (!isSameSelection) {
      tr.setSelection(selection);
    }
    if (isSameSelection && tr.storedMarks) {
      tr.setStoredMarks(tr.storedMarks);
    }
    delayedFocus();
  }
  return true;
};
var forEach = (items, fn) => props => {
  return items.every((item, index) => fn(item, {
    ...props,
    index
  }));
};
var insertContent = (value, options) => ({
  tr,
  commands
}) => {
  return commands.insertContentAt({
    from: tr.selection.from,
    to: tr.selection.to
  }, value, options);
};
var removeWhitespaces = node => {
  const children = node.childNodes;
  for (let i = children.length - 1; i >= 0; i -= 1) {
    const child = children[i];
    if (child.nodeType === 3 && child.nodeValue && /^(\n\s\s|\n)$/.test(child.nodeValue)) {
      node.removeChild(child);
    } else if (child.nodeType === 1) {
      removeWhitespaces(child);
    }
  }
  return node;
};
function elementFromString(value) {
  if (typeof window === "undefined") {
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  }
  const wrappedValue = `<body>${value}</body>`;
  const html = new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
  return removeWhitespaces(html);
}
function createNodeFromContent(content, schema, options) {
  if (content instanceof import_model2.Node || content instanceof import_model2.Fragment) {
    return content;
  }
  options = {
    slice: true,
    parseOptions: {},
    ...options
  };
  const isJSONContent = typeof content === "object" && content !== null;
  const isTextContent = typeof content === "string";
  if (isJSONContent) {
    try {
      const isArrayContent = Array.isArray(content) && content.length > 0;
      if (isArrayContent) {
        return import_model2.Fragment.fromArray(content.map(item => schema.nodeFromJSON(item)));
      }
      const node = schema.nodeFromJSON(content);
      if (options.errorOnInvalidContent) {
        node.check();
      }
      return node;
    } catch (error) {
      if (options.errorOnInvalidContent) {
        throw new Error("[tiptap error]: Invalid JSON content", {
          cause: error
        });
      }
      console.warn("[tiptap warn]: Invalid content.", "Passed value:", content, "Error:", error);
      return createNodeFromContent("", schema, options);
    }
  }
  if (isTextContent) {
    if (options.errorOnInvalidContent) {
      let hasInvalidContent = false;
      let invalidContent = "";
      const contentCheckSchema = new import_model2.Schema({
        topNode: schema.spec.topNode,
        marks: schema.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: schema.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [{
              tag: "*",
              getAttrs: e => {
                hasInvalidContent = true;
                invalidContent = typeof e === "string" ? e : e.outerHTML;
                return null;
              }
            }]
          }
        })
      });
      if (options.slice) {
        import_model2.DOMParser.fromSchema(contentCheckSchema).parseSlice(elementFromString(content), options.parseOptions);
      } else {
        import_model2.DOMParser.fromSchema(contentCheckSchema).parse(elementFromString(content), options.parseOptions);
      }
      if (options.errorOnInvalidContent && hasInvalidContent) {
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${invalidContent}`)
        });
      }
    }
    const parser = import_model2.DOMParser.fromSchema(schema);
    if (options.slice) {
      return parser.parseSlice(elementFromString(content), options.parseOptions).content;
    }
    return parser.parse(elementFromString(content), options.parseOptions);
  }
  return createNodeFromContent("", schema, options);
}
function selectionToInsertionEnd(tr, startLen, bias) {
  const last = tr.steps.length - 1;
  if (last < startLen) {
    return;
  }
  const step = tr.steps[last];
  if (!(step instanceof import_transform2.ReplaceStep || step instanceof import_transform2.ReplaceAroundStep)) {
    return;
  }
  const map = tr.mapping.maps[last];
  let end = 0;
  map.forEach((_from, _to, _newFrom, newTo) => {
    if (end === 0) {
      end = newTo;
    }
  });
  tr.setSelection(import_state5.Selection.near(tr.doc.resolve(end), bias));
}
var isFragment = nodeOrFragment => {
  return !("type" in nodeOrFragment);
};
var insertContentAt = (position, value, options) => ({
  tr,
  dispatch,
  editor
}) => {
  var _a;
  if (dispatch) {
    options = {
      parseOptions: editor.options.parseOptions,
      updateSelection: true,
      applyInputRules: false,
      applyPasteRules: false,
      ...options
    };
    let content;
    const emitContentError = error => {
      editor.emit("contentError", {
        editor,
        error,
        disableCollaboration: () => {
          if ("collaboration" in editor.storage && typeof editor.storage.collaboration === "object" && editor.storage.collaboration) {
            ;
            editor.storage.collaboration.isDisabled = true;
          }
        }
      });
    };
    const parseOptions = {
      preserveWhitespace: "full",
      ...options.parseOptions
    };
    if (!options.errorOnInvalidContent && !editor.options.enableContentCheck && editor.options.emitContentError) {
      try {
        createNodeFromContent(value, editor.schema, {
          parseOptions,
          errorOnInvalidContent: true
        });
      } catch (e) {
        emitContentError(e);
      }
    }
    try {
      content = createNodeFromContent(value, editor.schema, {
        parseOptions,
        errorOnInvalidContent: (_a = options.errorOnInvalidContent) != null ? _a : editor.options.enableContentCheck
      });
    } catch (e) {
      emitContentError(e);
      return false;
    }
    let {
      from,
      to
    } = typeof position === "number" ? {
      from: position,
      to: position
    } : {
      from: position.from,
      to: position.to
    };
    let isOnlyTextContent = true;
    let isOnlyBlockContent = true;
    const nodes = isFragment(content) ? content : [content];
    nodes.forEach(node => {
      node.check();
      isOnlyTextContent = isOnlyTextContent ? node.isText && node.marks.length === 0 : false;
      isOnlyBlockContent = isOnlyBlockContent ? node.isBlock : false;
    });
    if (from === to && isOnlyBlockContent) {
      const {
        parent
      } = tr.doc.resolve(from);
      const isEmptyTextBlock = parent.isTextblock && !parent.type.spec.code && !parent.childCount;
      if (isEmptyTextBlock) {
        from -= 1;
        to += 1;
      }
    }
    let newContent;
    if (isOnlyTextContent) {
      if (Array.isArray(value)) {
        newContent = value.map(v => v.text || "").join("");
      } else if (value instanceof import_model.Fragment) {
        let text = "";
        value.forEach(node => {
          if (node.text) {
            text += node.text;
          }
        });
        newContent = text;
      } else if (typeof value === "object" && !!value && !!value.text) {
        newContent = value.text;
      } else {
        newContent = value;
      }
      tr.insertText(newContent, from, to);
    } else {
      newContent = content;
      const $from = tr.doc.resolve(from);
      const $fromNode = $from.node();
      const fromSelectionAtStart = $from.parentOffset === 0;
      const isTextSelection2 = $fromNode.isText || $fromNode.isTextblock;
      const hasContent = $fromNode.content.size > 0;
      if (fromSelectionAtStart && isTextSelection2 && hasContent) {
        from = Math.max(0, from - 1);
      }
      tr.replaceWith(from, to, newContent);
    }
    if (options.updateSelection) {
      selectionToInsertionEnd(tr, tr.steps.length - 1, -1);
    }
    if (options.applyInputRules) {
      tr.setMeta("applyInputRules", {
        from,
        text: newContent
      });
    }
    if (options.applyPasteRules) {
      tr.setMeta("applyPasteRules", {
        from,
        text: newContent
      });
    }
  }
  return true;
};
var joinUp = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands4.joinUp)(state, dispatch);
};
var joinDown = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands4.joinDown)(state, dispatch);
};
var joinBackward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands4.joinBackward)(state, dispatch);
};
var joinForward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands4.joinForward)(state, dispatch);
};
var joinItemBackward = () => ({
  state,
  dispatch,
  tr
}) => {
  try {
    const point = (0, import_transform3.joinPoint)(state.doc, state.selection.$from.pos, -1);
    if (point === null || point === void 0) {
      return false;
    }
    tr.join(point, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch {
    return false;
  }
};
var joinItemForward = () => ({
  state,
  dispatch,
  tr
}) => {
  try {
    const point = (0, import_transform4.joinPoint)(state.doc, state.selection.$from.pos, 1);
    if (point === null || point === void 0) {
      return false;
    }
    tr.join(point, 2);
    if (dispatch) {
      dispatch(tr);
    }
    return true;
  } catch {
    return false;
  }
};
var joinTextblockBackward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands5.joinTextblockBackward)(state, dispatch);
};
var joinTextblockForward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands6.joinTextblockForward)(state, dispatch);
};
function isMacOS() {
  return typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
}
function normalizeKeyName(name) {
  const parts = name.split(/-(?!$)/);
  let result = parts[parts.length - 1];
  if (result === "Space") {
    result = " ";
  }
  let alt;
  let ctrl;
  let shift;
  let meta;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) {
      meta = true;
    } else if (/^a(lt)?$/i.test(mod)) {
      alt = true;
    } else if (/^(c|ctrl|control)$/i.test(mod)) {
      ctrl = true;
    } else if (/^s(hift)?$/i.test(mod)) {
      shift = true;
    } else if (/^mod$/i.test(mod)) {
      if (isiOS() || isMacOS()) {
        meta = true;
      } else {
        ctrl = true;
      }
    } else {
      throw new Error(`Unrecognized modifier name: ${mod}`);
    }
  }
  if (alt) {
    result = `Alt-${result}`;
  }
  if (ctrl) {
    result = `Ctrl-${result}`;
  }
  if (meta) {
    result = `Meta-${result}`;
  }
  if (shift) {
    result = `Shift-${result}`;
  }
  return result;
}
var keyboardShortcut = name => ({
  editor,
  view,
  tr,
  dispatch
}) => {
  const keys = normalizeKeyName(name).split(/-(?!$)/);
  const key = keys.find(item => !["Alt", "Ctrl", "Meta", "Shift"].includes(item));
  const event = new KeyboardEvent("keydown", {
    key: key === "Space" ? " " : key,
    altKey: keys.includes("Alt"),
    ctrlKey: keys.includes("Ctrl"),
    metaKey: keys.includes("Meta"),
    shiftKey: keys.includes("Shift"),
    bubbles: true,
    cancelable: true
  });
  const capturedTransaction = editor.captureTransaction(() => {
    view.someProp("handleKeyDown", f => f(view, event));
  });
  capturedTransaction == null ? void 0 : capturedTransaction.steps.forEach(step => {
    const newStep = step.map(tr.mapping);
    if (newStep && dispatch) {
      tr.maybeStep(newStep);
    }
  });
  return true;
};
function isNodeActive(state, typeOrName, attributes = {}) {
  const {
    from,
    to,
    empty
  } = state.selection;
  const type = typeOrName ? getNodeType(typeOrName, state.schema) : null;
  const nodeRanges = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    if (node.isText) {
      return;
    }
    const relativeFrom = Math.max(from, pos);
    const relativeTo = Math.min(to, pos + node.nodeSize);
    nodeRanges.push({
      node,
      from: relativeFrom,
      to: relativeTo
    });
  });
  const selectionRange = to - from;
  const matchedNodeRanges = nodeRanges.filter(nodeRange => {
    if (!type) {
      return true;
    }
    return type.name === nodeRange.node.type.name;
  }).filter(nodeRange => objectIncludes(nodeRange.node.attrs, attributes, {
    strict: false
  }));
  if (empty) {
    return !!matchedNodeRanges.length;
  }
  const range = matchedNodeRanges.reduce((sum, nodeRange) => sum + nodeRange.to - nodeRange.from, 0);
  return range >= selectionRange;
}
var lift = (typeOrName, attributes = {}) => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (!isActive2) {
    return false;
  }
  return (0, import_commands7.lift)(state, dispatch);
};
var liftEmptyBlock = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands8.liftEmptyBlock)(state, dispatch);
};
var liftListItem = typeOrName => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  return (0, import_schema_list.liftListItem)(type)(state, dispatch);
};
var newlineInCode = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands9.newlineInCode)(state, dispatch);
};
function getSchemaTypeNameByName(name, schema) {
  if (schema.nodes[name]) {
    return "node";
  }
  if (schema.marks[name]) {
    return "mark";
  }
  return null;
}
function deleteProps(obj, propOrProps) {
  const props = typeof propOrProps === "string" ? [propOrProps] : propOrProps;
  return Object.keys(obj).reduce((newObj, prop) => {
    if (!props.includes(prop)) {
      newObj[prop] = obj[prop];
    }
    return newObj;
  }, {});
}
var resetAttributes = (typeOrName, attributes) => ({
  tr,
  state,
  dispatch
}) => {
  let nodeType = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  let canReset = false;
  tr.selection.ranges.forEach(range => {
    state.doc.nodesBetween(range.$from.pos, range.$to.pos, (node, pos) => {
      if (nodeType && nodeType === node.type) {
        canReset = true;
        if (dispatch) {
          tr.setNodeMarkup(pos, void 0, deleteProps(node.attrs, attributes));
        }
      }
      if (markType && node.marks.length) {
        node.marks.forEach(mark => {
          if (markType === mark.type) {
            canReset = true;
            if (dispatch) {
              tr.addMark(pos, pos + node.nodeSize, markType.create(deleteProps(mark.attrs, attributes)));
            }
          }
        });
      }
    });
  });
  return canReset;
};
var scrollIntoView = () => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    tr.scrollIntoView();
  }
  return true;
};
var selectAll = () => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const selection = new import_state6.AllSelection(tr.doc);
    tr.setSelection(selection);
  }
  return true;
};
var selectNodeBackward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands10.selectNodeBackward)(state, dispatch);
};
var selectNodeForward = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands11.selectNodeForward)(state, dispatch);
};
var selectParentNode = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands12.selectParentNode)(state, dispatch);
};
var selectTextblockEnd = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands13.selectTextblockEnd)(state, dispatch);
};
var selectTextblockStart = () => ({
  state,
  dispatch
}) => {
  return (0, import_commands14.selectTextblockStart)(state, dispatch);
};
function createDocument(content, schema, parseOptions = {}, options = {}) {
  return createNodeFromContent(content, schema, {
    slice: false,
    parseOptions,
    errorOnInvalidContent: options.errorOnInvalidContent
  });
}
var setContent = (content, {
  errorOnInvalidContent,
  emitUpdate = true,
  parseOptions = {}
} = {}) => ({
  editor,
  tr,
  dispatch,
  commands
}) => {
  const {
    doc
  } = tr;
  if (parseOptions.preserveWhitespace !== "full") {
    const document2 = createDocument(content, editor.schema, parseOptions, {
      errorOnInvalidContent: errorOnInvalidContent != null ? errorOnInvalidContent : editor.options.enableContentCheck
    });
    if (dispatch) {
      tr.replaceWith(0, doc.content.size, document2).setMeta("preventUpdate", !emitUpdate);
    }
    return true;
  }
  if (dispatch) {
    tr.setMeta("preventUpdate", !emitUpdate);
  }
  return commands.insertContentAt({
    from: 0,
    to: doc.content.size
  }, content, {
    parseOptions,
    errorOnInvalidContent: errorOnInvalidContent != null ? errorOnInvalidContent : editor.options.enableContentCheck
  });
};
function getMarkAttributes(state, typeOrName) {
  const type = getMarkType(typeOrName, state.schema);
  const {
    from,
    to,
    empty
  } = state.selection;
  const marks = [];
  if (empty) {
    if (state.storedMarks) {
      marks.push(...state.storedMarks);
    }
    marks.push(...state.selection.$head.marks());
  } else {
    state.doc.nodesBetween(from, to, node => {
      marks.push(...node.marks);
    });
  }
  const mark = marks.find(markItem => markItem.type.name === type.name);
  if (!mark) {
    return {};
  }
  return {
    ...mark.attrs
  };
}
function combineTransactionSteps(oldDoc, transactions) {
  const transform = new import_transform5.Transform(oldDoc);
  transactions.forEach(transaction => {
    transaction.steps.forEach(step => {
      transform.step(step);
    });
  });
  return transform;
}
function defaultBlockAt(match) {
  for (let i = 0; i < match.edgeCount; i += 1) {
    const {
      type
    } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) {
      return type;
    }
  }
  return null;
}
function findChildren(node, predicate) {
  const nodesWithPos = [];
  node.descendants((child, pos) => {
    if (predicate(child)) {
      nodesWithPos.push({
        node: child,
        pos
      });
    }
  });
  return nodesWithPos;
}
function findChildrenInRange(node, range, predicate) {
  const nodesWithPos = [];
  node.nodesBetween(range.from, range.to, (child, pos) => {
    if (predicate(child)) {
      nodesWithPos.push({
        node: child,
        pos
      });
    }
  });
  return nodesWithPos;
}
function findParentNodeClosestToPos($pos, predicate) {
  for (let i = $pos.depth; i > 0; i -= 1) {
    const node = $pos.node(i);
    if (predicate(node)) {
      return {
        pos: i > 0 ? $pos.before(i) : 0,
        start: $pos.start(i),
        depth: i,
        node
      };
    }
  }
}
function findParentNode(predicate) {
  return selection => findParentNodeClosestToPos(selection.$from, predicate);
}
function getExtensionField(extension, field, context) {
  if (extension.config[field] === void 0 && extension.parent) {
    return getExtensionField(extension.parent, field, context);
  }
  if (typeof extension.config[field] === "function") {
    const value = extension.config[field].bind({
      ...context,
      parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
    });
    return value;
  }
  return extension.config[field];
}
function flattenExtensions(extensions) {
  return extensions.map(extension => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const addExtensions = getExtensionField(extension, "addExtensions", context);
    if (addExtensions) {
      return [extension, ...flattenExtensions(addExtensions())];
    }
    return extension;
  }).flat(10);
}
function getHTMLFromFragment(fragment, schema) {
  const documentFragment = import_model4.DOMSerializer.fromSchema(schema).serializeFragment(fragment);
  const temporaryDocument = document.implementation.createHTMLDocument();
  const container = temporaryDocument.createElement("div");
  container.appendChild(documentFragment);
  return container.innerHTML;
}
function isFunction(value) {
  return typeof value === "function";
}
function callOrReturn(value, context = void 0, ...props) {
  if (isFunction(value)) {
    if (context) {
      return value.bind(context)(...props);
    }
    return value(...props);
  }
  return value;
}
function isEmptyObject(value = {}) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}
function splitExtensions(extensions) {
  const baseExtensions = extensions.filter(extension => extension.type === "extension");
  const nodeExtensions = extensions.filter(extension => extension.type === "node");
  const markExtensions = extensions.filter(extension => extension.type === "mark");
  return {
    baseExtensions,
    nodeExtensions,
    markExtensions
  };
}
function getAttributesFromExtensions(extensions) {
  const extensionAttributes = [];
  const {
    nodeExtensions,
    markExtensions
  } = splitExtensions(extensions);
  const nodeAndMarkExtensions = [...nodeExtensions, ...markExtensions];
  const defaultAttribute = {
    default: null,
    validate: void 0,
    rendered: true,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: true,
    isRequired: false
  };
  extensions.forEach(extension => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      extensions: nodeAndMarkExtensions
    };
    const addGlobalAttributes = getExtensionField(extension, "addGlobalAttributes", context);
    if (!addGlobalAttributes) {
      return;
    }
    const globalAttributes = addGlobalAttributes();
    globalAttributes.forEach(globalAttribute => {
      globalAttribute.types.forEach(type => {
        Object.entries(globalAttribute.attributes).forEach(([name, attribute]) => {
          extensionAttributes.push({
            type,
            name,
            attribute: {
              ...defaultAttribute,
              ...attribute
            }
          });
        });
      });
    });
  });
  nodeAndMarkExtensions.forEach(extension => {
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage
    };
    const addAttributes = getExtensionField(extension, "addAttributes", context);
    if (!addAttributes) {
      return;
    }
    const attributes = addAttributes();
    Object.entries(attributes).forEach(([name, attribute]) => {
      const mergedAttr = {
        ...defaultAttribute,
        ...attribute
      };
      if (typeof (mergedAttr == null ? void 0 : mergedAttr.default) === "function") {
        mergedAttr.default = mergedAttr.default();
      }
      if ((mergedAttr == null ? void 0 : mergedAttr.isRequired) && (mergedAttr == null ? void 0 : mergedAttr.default) === void 0) {
        delete mergedAttr.default;
      }
      extensionAttributes.push({
        type: extension.name,
        name,
        attribute: mergedAttr
      });
    });
  });
  return extensionAttributes;
}
function mergeAttributes(...objects) {
  return objects.filter(item => !!item).reduce((items, item) => {
    const mergedAttributes = {
      ...items
    };
    Object.entries(item).forEach(([key, value]) => {
      const exists = mergedAttributes[key];
      if (!exists) {
        mergedAttributes[key] = value;
        return;
      }
      if (key === "class") {
        const valueClasses = value ? String(value).split(" ") : [];
        const existingClasses = mergedAttributes[key] ? mergedAttributes[key].split(" ") : [];
        const insertClasses = valueClasses.filter(valueClass => !existingClasses.includes(valueClass));
        mergedAttributes[key] = [...existingClasses, ...insertClasses].join(" ");
      } else if (key === "style") {
        const newStyles = value ? value.split(";").map(style2 => style2.trim()).filter(Boolean) : [];
        const existingStyles = mergedAttributes[key] ? mergedAttributes[key].split(";").map(style2 => style2.trim()).filter(Boolean) : [];
        const styleMap = /* @__PURE__ */new Map();
        existingStyles.forEach(style2 => {
          const [property, val] = style2.split(":").map(part => part.trim());
          styleMap.set(property, val);
        });
        newStyles.forEach(style2 => {
          const [property, val] = style2.split(":").map(part => part.trim());
          styleMap.set(property, val);
        });
        mergedAttributes[key] = Array.from(styleMap.entries()).map(([property, val]) => `${property}: ${val}`).join("; ");
      } else {
        mergedAttributes[key] = value;
      }
    });
    return mergedAttributes;
  }, {});
}
function getRenderedAttributes(nodeOrMark, extensionAttributes) {
  return extensionAttributes.filter(attribute => attribute.type === nodeOrMark.type.name).filter(item => item.attribute.rendered).map(item => {
    if (!item.attribute.renderHTML) {
      return {
        [item.name]: nodeOrMark.attrs[item.name]
      };
    }
    return item.attribute.renderHTML(nodeOrMark.attrs) || {};
  }).reduce((attributes, attribute) => mergeAttributes(attributes, attribute), {});
}
function fromString(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (value.match(/^[+-]?(?:\d*\.)?\d+$/)) {
    return Number(value);
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  return value;
}
function injectExtensionAttributesToParseRule(parseRule, extensionAttributes) {
  if ("style" in parseRule) {
    return parseRule;
  }
  return {
    ...parseRule,
    getAttrs: node => {
      const oldAttributes = parseRule.getAttrs ? parseRule.getAttrs(node) : parseRule.attrs;
      if (oldAttributes === false) {
        return false;
      }
      const newAttributes = extensionAttributes.reduce((items, item) => {
        const value = item.attribute.parseHTML ? item.attribute.parseHTML(node) : fromString(node.getAttribute(item.name));
        if (value === null || value === void 0) {
          return items;
        }
        return {
          ...items,
          [item.name]: value
        };
      }, {});
      return {
        ...oldAttributes,
        ...newAttributes
      };
    }
  };
}
function cleanUpSchemaItem(data) {
  return Object.fromEntries(
  // @ts-ignore
  Object.entries(data).filter(([key, value]) => {
    if (key === "attrs" && isEmptyObject(value)) {
      return false;
    }
    return value !== null && value !== void 0;
  }));
}
function buildAttributeSpec(extensionAttribute) {
  var _a, _b;
  const spec = {};
  if (!((_a = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _a.isRequired) && "default" in ((extensionAttribute == null ? void 0 : extensionAttribute.attribute) || {})) {
    spec.default = extensionAttribute.attribute.default;
  }
  if (((_b = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _b.validate) !== void 0) {
    spec.validate = extensionAttribute.attribute.validate;
  }
  return [extensionAttribute.name, spec];
}
function getSchemaByResolvedExtensions(extensions, editor) {
  var _a;
  const allAttributes = getAttributesFromExtensions(extensions);
  const {
    nodeExtensions,
    markExtensions
  } = splitExtensions(extensions);
  const topNode = (_a = nodeExtensions.find(extension => getExtensionField(extension, "topNode"))) == null ? void 0 : _a.name;
  const nodes = Object.fromEntries(nodeExtensions.map(extension => {
    const extensionAttributes = allAttributes.filter(attribute => attribute.type === extension.name);
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      editor
    };
    const extraNodeFields = extensions.reduce((fields, e) => {
      const extendNodeSchema = getExtensionField(e, "extendNodeSchema", context);
      return {
        ...fields,
        ...(extendNodeSchema ? extendNodeSchema(extension) : {})
      };
    }, {});
    const schema = cleanUpSchemaItem({
      ...extraNodeFields,
      content: callOrReturn(getExtensionField(extension, "content", context)),
      marks: callOrReturn(getExtensionField(extension, "marks", context)),
      group: callOrReturn(getExtensionField(extension, "group", context)),
      inline: callOrReturn(getExtensionField(extension, "inline", context)),
      atom: callOrReturn(getExtensionField(extension, "atom", context)),
      selectable: callOrReturn(getExtensionField(extension, "selectable", context)),
      draggable: callOrReturn(getExtensionField(extension, "draggable", context)),
      code: callOrReturn(getExtensionField(extension, "code", context)),
      whitespace: callOrReturn(getExtensionField(extension, "whitespace", context)),
      linebreakReplacement: callOrReturn(getExtensionField(extension, "linebreakReplacement", context)),
      defining: callOrReturn(getExtensionField(extension, "defining", context)),
      isolating: callOrReturn(getExtensionField(extension, "isolating", context)),
      attrs: Object.fromEntries(extensionAttributes.map(buildAttributeSpec))
    });
    const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
    if (parseHTML) {
      schema.parseDOM = parseHTML.map(parseRule => injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
    }
    const renderHTML = getExtensionField(extension, "renderHTML", context);
    if (renderHTML) {
      schema.toDOM = node => renderHTML({
        node,
        HTMLAttributes: getRenderedAttributes(node, extensionAttributes)
      });
    }
    const renderText = getExtensionField(extension, "renderText", context);
    if (renderText) {
      schema.toText = renderText;
    }
    return [extension.name, schema];
  }));
  const marks = Object.fromEntries(markExtensions.map(extension => {
    const extensionAttributes = allAttributes.filter(attribute => attribute.type === extension.name);
    const context = {
      name: extension.name,
      options: extension.options,
      storage: extension.storage,
      editor
    };
    const extraMarkFields = extensions.reduce((fields, e) => {
      const extendMarkSchema = getExtensionField(e, "extendMarkSchema", context);
      return {
        ...fields,
        ...(extendMarkSchema ? extendMarkSchema(extension) : {})
      };
    }, {});
    const schema = cleanUpSchemaItem({
      ...extraMarkFields,
      inclusive: callOrReturn(getExtensionField(extension, "inclusive", context)),
      excludes: callOrReturn(getExtensionField(extension, "excludes", context)),
      group: callOrReturn(getExtensionField(extension, "group", context)),
      spanning: callOrReturn(getExtensionField(extension, "spanning", context)),
      code: callOrReturn(getExtensionField(extension, "code", context)),
      attrs: Object.fromEntries(extensionAttributes.map(buildAttributeSpec))
    });
    const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
    if (parseHTML) {
      schema.parseDOM = parseHTML.map(parseRule => injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
    }
    const renderHTML = getExtensionField(extension, "renderHTML", context);
    if (renderHTML) {
      schema.toDOM = mark => renderHTML({
        mark,
        HTMLAttributes: getRenderedAttributes(mark, extensionAttributes)
      });
    }
    return [extension.name, schema];
  }));
  return new import_model5.Schema({
    topNode,
    nodes,
    marks
  });
}
function findDuplicates(items) {
  const filtered = items.filter((el, index) => items.indexOf(el) !== index);
  return Array.from(new Set(filtered));
}
function sortExtensions(extensions) {
  const defaultPriority = 100;
  return extensions.sort((a, b) => {
    const priorityA = getExtensionField(a, "priority") || defaultPriority;
    const priorityB = getExtensionField(b, "priority") || defaultPriority;
    if (priorityA > priorityB) {
      return -1;
    }
    if (priorityA < priorityB) {
      return 1;
    }
    return 0;
  });
}
function resolveExtensions(extensions) {
  const resolvedExtensions = sortExtensions(flattenExtensions(extensions));
  const duplicatedNames = findDuplicates(resolvedExtensions.map(extension => extension.name));
  if (duplicatedNames.length) {
    console.warn(`[tiptap warn]: Duplicate extension names found: [${duplicatedNames.map(item => `'${item}'`).join(", ")}]. This can lead to issues.`);
  }
  return resolvedExtensions;
}
function getSchema(extensions, editor) {
  const resolvedExtensions = resolveExtensions(extensions);
  return getSchemaByResolvedExtensions(resolvedExtensions, editor);
}
function generateHTML(doc, extensions) {
  const schema = getSchema(extensions);
  const contentNode = import_model3.Node.fromJSON(schema, doc);
  return getHTMLFromFragment(contentNode.content, schema);
}
function generateJSON(html, extensions) {
  const schema = getSchema(extensions);
  const dom = elementFromString(html);
  return import_model6.DOMParser.fromSchema(schema).parse(dom).toJSON();
}
function getTextBetween(startNode, range, options) {
  const {
    from,
    to
  } = range;
  const {
    blockSeparator = "\n\n",
    textSerializers = {}
  } = options || {};
  let text = "";
  startNode.nodesBetween(from, to, (node, pos, parent, index) => {
    var _a;
    if (node.isBlock && pos > from) {
      text += blockSeparator;
    }
    const textSerializer = textSerializers == null ? void 0 : textSerializers[node.type.name];
    if (textSerializer) {
      if (parent) {
        text += textSerializer({
          node,
          pos,
          parent,
          index,
          range
        });
      }
      return false;
    }
    if (node.isText) {
      text += (_a = node == null ? void 0 : node.text) == null ? void 0 : _a.slice(Math.max(from, pos) - pos, to - pos);
    }
  });
  return text;
}
function getText(node, options) {
  const range = {
    from: 0,
    to: node.content.size
  };
  return getTextBetween(node, range, options);
}
function getTextSerializersFromSchema(schema) {
  return Object.fromEntries(Object.entries(schema.nodes).filter(([, node]) => node.spec.toText).map(([name, node]) => [name, node.spec.toText]));
}
function generateText(doc, extensions, options) {
  const {
    blockSeparator = "\n\n",
    textSerializers = {}
  } = options || {};
  const schema = getSchema(extensions);
  const contentNode = import_model7.Node.fromJSON(schema, doc);
  return getText(contentNode, {
    blockSeparator,
    textSerializers: {
      ...getTextSerializersFromSchema(schema),
      ...textSerializers
    }
  });
}
function getNodeAttributes(state, typeOrName) {
  const type = getNodeType(typeOrName, state.schema);
  const {
    from,
    to
  } = state.selection;
  const nodes = [];
  state.doc.nodesBetween(from, to, node2 => {
    nodes.push(node2);
  });
  const node = nodes.reverse().find(nodeItem => nodeItem.type.name === type.name);
  if (!node) {
    return {};
  }
  return {
    ...node.attrs
  };
}
function getAttributes(state, typeOrName) {
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (schemaType === "node") {
    return getNodeAttributes(state, typeOrName);
  }
  if (schemaType === "mark") {
    return getMarkAttributes(state, typeOrName);
  }
  return {};
}
function removeDuplicates(array, by = JSON.stringify) {
  const seen = {};
  return array.filter(item => {
    const key = by(item);
    return Object.prototype.hasOwnProperty.call(seen, key) ? false : seen[key] = true;
  });
}
function simplifyChangedRanges(changes) {
  const uniqueChanges = removeDuplicates(changes);
  return uniqueChanges.length === 1 ? uniqueChanges : uniqueChanges.filter((change, index) => {
    const rest = uniqueChanges.filter((_, i) => i !== index);
    return !rest.some(otherChange => {
      return change.oldRange.from >= otherChange.oldRange.from && change.oldRange.to <= otherChange.oldRange.to && change.newRange.from >= otherChange.newRange.from && change.newRange.to <= otherChange.newRange.to;
    });
  });
}
function getChangedRanges(transform) {
  const {
    mapping,
    steps
  } = transform;
  const changes = [];
  mapping.maps.forEach((stepMap, index) => {
    const ranges = [];
    if (!stepMap.ranges.length) {
      const {
        from,
        to
      } = steps[index];
      if (from === void 0 || to === void 0) {
        return;
      }
      ranges.push({
        from,
        to
      });
    } else {
      stepMap.forEach((from, to) => {
        ranges.push({
          from,
          to
        });
      });
    }
    ranges.forEach(({
      from,
      to
    }) => {
      const newStart = mapping.slice(index).map(from, -1);
      const newEnd = mapping.slice(index).map(to);
      const oldStart = mapping.invert().map(newStart, -1);
      const oldEnd = mapping.invert().map(newEnd);
      changes.push({
        oldRange: {
          from: oldStart,
          to: oldEnd
        },
        newRange: {
          from: newStart,
          to: newEnd
        }
      });
    });
  });
  return simplifyChangedRanges(changes);
}
function getDebugJSON(node, startOffset = 0) {
  const isTopNode = node.type === node.type.schema.topNodeType;
  const increment = isTopNode ? 0 : 1;
  const from = startOffset;
  const to = from + node.nodeSize;
  const marks = node.marks.map(mark => {
    const output2 = {
      type: mark.type.name
    };
    if (Object.keys(mark.attrs).length) {
      output2.attrs = {
        ...mark.attrs
      };
    }
    return output2;
  });
  const attrs = {
    ...node.attrs
  };
  const output = {
    type: node.type.name,
    from,
    to
  };
  if (Object.keys(attrs).length) {
    output.attrs = attrs;
  }
  if (marks.length) {
    output.marks = marks;
  }
  if (node.content.childCount) {
    output.content = [];
    node.forEach((child, offset) => {
      var _a;
      (_a = output.content) == null ? void 0 : _a.push(getDebugJSON(child, startOffset + offset + increment));
    });
  }
  if (node.text) {
    output.text = node.text;
  }
  return output;
}
function getMarksBetween(from, to, doc) {
  const marks = [];
  if (from === to) {
    doc.resolve(from).marks().forEach(mark => {
      const $pos = doc.resolve(from);
      const range = getMarkRange($pos, mark.type);
      if (!range) {
        return;
      }
      marks.push({
        mark,
        ...range
      });
    });
  } else {
    doc.nodesBetween(from, to, (node, pos) => {
      if (!node || (node == null ? void 0 : node.nodeSize) === void 0) {
        return;
      }
      marks.push(...node.marks.map(mark => ({
        from: pos,
        to: pos + node.nodeSize,
        mark
      })));
    });
  }
  return marks;
}
var getNodeAtPosition = (state, typeOrName, pos, maxDepth = 20) => {
  const $pos = state.doc.resolve(pos);
  let currentDepth = maxDepth;
  let node = null;
  while (currentDepth > 0 && node === null) {
    const currentNode = $pos.node(currentDepth);
    if ((currentNode == null ? void 0 : currentNode.type.name) === typeOrName) {
      node = currentNode;
    } else {
      currentDepth -= 1;
    }
  }
  return [node, currentDepth];
};
function getSchemaTypeByName(name, schema) {
  return schema.nodes[name] || schema.marks[name] || null;
}
function getSplittedAttributes(extensionAttributes, typeName, attributes) {
  return Object.fromEntries(Object.entries(attributes).filter(([name]) => {
    const extensionAttribute = extensionAttributes.find(item => {
      return item.type === typeName && item.name === name;
    });
    if (!extensionAttribute) {
      return false;
    }
    return extensionAttribute.attribute.keepOnSplit;
  }));
}
var getTextContentFromNodes = ($from, maxMatch = 500) => {
  let textBefore = "";
  const sliceEndPos = $from.parentOffset;
  $from.parent.nodesBetween(Math.max(0, sliceEndPos - maxMatch), sliceEndPos, (node, pos, parent, index) => {
    var _a, _b;
    const chunk = ((_b = (_a = node.type.spec).toText) == null ? void 0 : _b.call(_a, {
      node,
      pos,
      parent,
      index
    })) || node.textContent || "%leaf%";
    textBefore += node.isAtom && !node.isText ? chunk : chunk.slice(0, Math.max(0, sliceEndPos - pos));
  });
  return textBefore;
};
function isMarkActive(state, typeOrName, attributes = {}) {
  const {
    empty,
    ranges
  } = state.selection;
  const type = typeOrName ? getMarkType(typeOrName, state.schema) : null;
  if (empty) {
    return !!(state.storedMarks || state.selection.$from.marks()).filter(mark => {
      if (!type) {
        return true;
      }
      return type.name === mark.type.name;
    }).find(mark => objectIncludes(mark.attrs, attributes, {
      strict: false
    }));
  }
  let selectionRange = 0;
  const markRanges = [];
  ranges.forEach(({
    $from,
    $to
  }) => {
    const from = $from.pos;
    const to = $to.pos;
    state.doc.nodesBetween(from, to, (node, pos) => {
      if (!node.isText && !node.marks.length) {
        return;
      }
      const relativeFrom = Math.max(from, pos);
      const relativeTo = Math.min(to, pos + node.nodeSize);
      const range2 = relativeTo - relativeFrom;
      selectionRange += range2;
      markRanges.push(...node.marks.map(mark => ({
        mark,
        from: relativeFrom,
        to: relativeTo
      })));
    });
  });
  if (selectionRange === 0) {
    return false;
  }
  const matchedRange = markRanges.filter(markRange => {
    if (!type) {
      return true;
    }
    return type.name === markRange.mark.type.name;
  }).filter(markRange => objectIncludes(markRange.mark.attrs, attributes, {
    strict: false
  })).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
  const excludedRange = markRanges.filter(markRange => {
    if (!type) {
      return true;
    }
    return markRange.mark.type !== type && markRange.mark.type.excludes(type);
  }).reduce((sum, markRange) => sum + markRange.to - markRange.from, 0);
  const range = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
  return range >= selectionRange;
}
function isActive(state, name, attributes = {}) {
  if (!name) {
    return isNodeActive(state, null, attributes) || isMarkActive(state, null, attributes);
  }
  const schemaType = getSchemaTypeNameByName(name, state.schema);
  if (schemaType === "node") {
    return isNodeActive(state, name, attributes);
  }
  if (schemaType === "mark") {
    return isMarkActive(state, name, attributes);
  }
  return false;
}
var isAtEndOfNode = (state, nodeType) => {
  const {
    $from,
    $to,
    $anchor
  } = state.selection;
  if (nodeType) {
    const parentNode = findParentNode(node => node.type.name === nodeType)(state.selection);
    if (!parentNode) {
      return false;
    }
    const $parentPos = state.doc.resolve(parentNode.pos + 1);
    if ($anchor.pos + 1 === $parentPos.end()) {
      return true;
    }
    return false;
  }
  if ($to.parentOffset < $to.parent.nodeSize - 2 || $from.pos !== $to.pos) {
    return false;
  }
  return true;
};
var isAtStartOfNode = state => {
  const {
    $from,
    $to
  } = state.selection;
  if ($from.parentOffset > 0 || $from.pos !== $to.pos) {
    return false;
  }
  return true;
};
function isExtensionRulesEnabled(extension, enabled) {
  if (Array.isArray(enabled)) {
    return enabled.some(enabledExtension => {
      const name = typeof enabledExtension === "string" ? enabledExtension : enabledExtension.name;
      return name === extension.name;
    });
  }
  return enabled;
}
function isList(name, extensions) {
  const {
    nodeExtensions
  } = splitExtensions(extensions);
  const extension = nodeExtensions.find(item => item.name === name);
  if (!extension) {
    return false;
  }
  const context = {
    name: extension.name,
    options: extension.options,
    storage: extension.storage
  };
  const group = callOrReturn(getExtensionField(extension, "group", context));
  if (typeof group !== "string") {
    return false;
  }
  return group.split(" ").includes("list");
}
function isNodeEmpty(node, {
  checkChildren = true,
  ignoreWhitespace = false
} = {}) {
  var _a;
  if (ignoreWhitespace) {
    if (node.type.name === "hardBreak") {
      return true;
    }
    if (node.isText) {
      return /^\s*$/m.test((_a = node.text) != null ? _a : "");
    }
  }
  if (node.isText) {
    return !node.text;
  }
  if (node.isAtom || node.isLeaf) {
    return false;
  }
  if (node.content.childCount === 0) {
    return true;
  }
  if (checkChildren) {
    let isContentEmpty = true;
    node.content.forEach(childNode => {
      if (isContentEmpty === false) {
        return;
      }
      if (!isNodeEmpty(childNode, {
        ignoreWhitespace,
        checkChildren
      })) {
        isContentEmpty = false;
      }
    });
    return isContentEmpty;
  }
  return false;
}
function isNodeSelection(value) {
  return value instanceof import_state7.NodeSelection;
}
var MappablePosition = class _MappablePosition {
  constructor(position) {
    this.position = position;
  }
  /**
   * Creates a MappablePosition from a JSON object.
   */
  static fromJSON(json) {
    return new _MappablePosition(json.position);
  }
  /**
   * Converts the MappablePosition to a JSON object.
   */
  toJSON() {
    return {
      position: this.position
    };
  }
};
function getUpdatedPosition(position, transaction) {
  const mapResult = transaction.mapping.mapResult(position.position);
  return {
    position: new MappablePosition(mapResult.pos),
    mapResult
  };
}
function createMappablePosition(position) {
  return new MappablePosition(position);
}
function posToDOMRect(view, from, to) {
  const minPos = 0;
  const maxPos = view.state.doc.content.size;
  const resolvedFrom = minMax(from, minPos, maxPos);
  const resolvedEnd = minMax(to, minPos, maxPos);
  const start = view.coordsAtPos(resolvedFrom);
  const end = view.coordsAtPos(resolvedEnd, -1);
  const top = Math.min(start.top, end.top);
  const bottom = Math.max(start.bottom, end.bottom);
  const left = Math.min(start.left, end.left);
  const right = Math.max(start.right, end.right);
  const width = right - left;
  const height = bottom - top;
  const x = left;
  const y = top;
  const data = {
    top,
    bottom,
    left,
    right,
    width,
    height,
    x,
    y
  };
  return {
    ...data,
    toJSON: () => data
  };
}
function rewriteUnknownContentInner({
  json,
  validMarks,
  validNodes,
  options,
  rewrittenContent = []
}) {
  if (json.marks && Array.isArray(json.marks)) {
    json.marks = json.marks.filter(mark => {
      const name = typeof mark === "string" ? mark : mark.type;
      if (validMarks.has(name)) {
        return true;
      }
      rewrittenContent.push({
        original: JSON.parse(JSON.stringify(mark)),
        unsupported: name
      });
      return false;
    });
  }
  if (json.content && Array.isArray(json.content)) {
    json.content = json.content.map(value => rewriteUnknownContentInner({
      json: value,
      validMarks,
      validNodes,
      options,
      rewrittenContent
    }).json).filter(a => a !== null && a !== void 0);
  }
  if (json.type && !validNodes.has(json.type)) {
    rewrittenContent.push({
      original: JSON.parse(JSON.stringify(json)),
      unsupported: json.type
    });
    if (json.content && Array.isArray(json.content) && (options == null ? void 0 : options.fallbackToParagraph) !== false) {
      json.type = "paragraph";
      return {
        json,
        rewrittenContent
      };
    }
    return {
      json: null,
      rewrittenContent
    };
  }
  return {
    json,
    rewrittenContent
  };
}
function rewriteUnknownContent(json, schema, options) {
  return rewriteUnknownContentInner({
    json,
    validNodes: new Set(Object.keys(schema.nodes)),
    validMarks: new Set(Object.keys(schema.marks)),
    options
  });
}
function canSetMark(state, tr, newMarkType) {
  var _a;
  const {
    selection
  } = tr;
  let cursor = null;
  if (isTextSelection(selection)) {
    cursor = selection.$cursor;
  }
  if (cursor) {
    const currentMarks = (_a = state.storedMarks) != null ? _a : cursor.marks();
    const parentAllowsMarkType = cursor.parent.type.allowsMarkType(newMarkType);
    return parentAllowsMarkType && (!!newMarkType.isInSet(currentMarks) || !currentMarks.some(mark => mark.type.excludes(newMarkType)));
  }
  const {
    ranges
  } = selection;
  return ranges.some(({
    $from,
    $to
  }) => {
    let someNodeSupportsMark = $from.depth === 0 ? state.doc.inlineContent && state.doc.type.allowsMarkType(newMarkType) : false;
    state.doc.nodesBetween($from.pos, $to.pos, (node, _pos, parent) => {
      if (someNodeSupportsMark) {
        return false;
      }
      if (node.isInline) {
        const parentAllowsMarkType = !parent || parent.type.allowsMarkType(newMarkType);
        const currentMarksAllowMarkType = !!newMarkType.isInSet(node.marks) || !node.marks.some(otherMark => otherMark.type.excludes(newMarkType));
        someNodeSupportsMark = parentAllowsMarkType && currentMarksAllowMarkType;
      }
      return !someNodeSupportsMark;
    });
    return someNodeSupportsMark;
  });
}
var setMark = (typeOrName, attributes = {}) => ({
  tr,
  state,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    empty,
    ranges
  } = selection;
  const type = getMarkType(typeOrName, state.schema);
  if (dispatch) {
    if (empty) {
      const oldAttributes = getMarkAttributes(state, type);
      tr.addStoredMark(type.create({
        ...oldAttributes,
        ...attributes
      }));
    } else {
      ranges.forEach(range => {
        const from = range.$from.pos;
        const to = range.$to.pos;
        state.doc.nodesBetween(from, to, (node, pos) => {
          const trimmedFrom = Math.max(pos, from);
          const trimmedTo = Math.min(pos + node.nodeSize, to);
          const someHasMark = node.marks.find(mark => mark.type === type);
          if (someHasMark) {
            node.marks.forEach(mark => {
              if (type === mark.type) {
                tr.addMark(trimmedFrom, trimmedTo, type.create({
                  ...mark.attrs,
                  ...attributes
                }));
              }
            });
          } else {
            tr.addMark(trimmedFrom, trimmedTo, type.create(attributes));
          }
        });
      });
    }
  }
  return canSetMark(state, tr, type);
};
var setMeta = (key, value) => ({
  tr
}) => {
  tr.setMeta(key, value);
  return true;
};
var setNode = (typeOrName, attributes = {}) => ({
  state,
  dispatch,
  chain
}) => {
  const type = getNodeType(typeOrName, state.schema);
  let attributesToCopy;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    attributesToCopy = state.selection.$anchor.parent.attrs;
  }
  if (!type.isTextblock) {
    console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
    return false;
  }
  return chain().command(({
    commands
  }) => {
    const canSetBlock = (0, import_commands15.setBlockType)(type, {
      ...attributesToCopy,
      ...attributes
    })(state);
    if (canSetBlock) {
      return true;
    }
    return commands.clearNodes();
  }).command(({
    state: updatedState
  }) => {
    return (0, import_commands15.setBlockType)(type, {
      ...attributesToCopy,
      ...attributes
    })(updatedState, dispatch);
  }).run();
};
var setNodeSelection = position => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const {
      doc
    } = tr;
    const from = minMax(position, 0, doc.content.size);
    const selection = import_state8.NodeSelection.create(doc, from);
    tr.setSelection(selection);
  }
  return true;
};
var setTextDirection = (direction, position) => ({
  tr,
  state,
  dispatch
}) => {
  const {
    selection
  } = state;
  let from;
  let to;
  if (typeof position === "number") {
    from = position;
    to = position;
  } else if (position && "from" in position && "to" in position) {
    from = position.from;
    to = position.to;
  } else {
    from = selection.from;
    to = selection.to;
  }
  if (dispatch) {
    tr.doc.nodesBetween(from, to, (node, pos) => {
      if (node.isText) {
        return;
      }
      tr.setNodeMarkup(pos, void 0, {
        ...node.attrs,
        dir: direction
      });
    });
  }
  return true;
};
var setTextSelection = position => ({
  tr,
  dispatch
}) => {
  if (dispatch) {
    const {
      doc
    } = tr;
    const {
      from,
      to
    } = typeof position === "number" ? {
      from: position,
      to: position
    } : position;
    const minPos = import_state9.TextSelection.atStart(doc).from;
    const maxPos = import_state9.TextSelection.atEnd(doc).to;
    const resolvedFrom = minMax(from, minPos, maxPos);
    const resolvedEnd = minMax(to, minPos, maxPos);
    const selection = import_state9.TextSelection.create(doc, resolvedFrom, resolvedEnd);
    tr.setSelection(selection);
  }
  return true;
};
var sinkListItem = typeOrName => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  return (0, import_schema_list2.sinkListItem)(type)(state, dispatch);
};
function ensureMarks(state, splittableMarks) {
  const marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
  if (marks) {
    const filteredMarks = marks.filter(mark => splittableMarks == null ? void 0 : splittableMarks.includes(mark.type.name));
    state.tr.ensureMarks(filteredMarks);
  }
}
var splitBlock = ({
  keepMarks = true
} = {}) => ({
  tr,
  state,
  dispatch,
  editor
}) => {
  const {
    selection,
    doc
  } = tr;
  const {
    $from,
    $to
  } = selection;
  const extensionAttributes = editor.extensionManager.attributes;
  const newAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
  if (selection instanceof import_state10.NodeSelection && selection.node.isBlock) {
    if (!$from.parentOffset || !(0, import_transform6.canSplit)(doc, $from.pos)) {
      return false;
    }
    if (dispatch) {
      if (keepMarks) {
        ensureMarks(state, editor.extensionManager.splittableMarks);
      }
      tr.split($from.pos).scrollIntoView();
    }
    return true;
  }
  if (!$from.parent.isBlock) {
    return false;
  }
  const atEnd = $to.parentOffset === $to.parent.content.size;
  const deflt = $from.depth === 0 ? void 0 : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1)));
  let types = atEnd && deflt ? [{
    type: deflt,
    attrs: newAttributes
  }] : void 0;
  let can = (0, import_transform6.canSplit)(tr.doc, tr.mapping.map($from.pos), 1, types);
  if (!types && !can && (0, import_transform6.canSplit)(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [{
    type: deflt
  }] : void 0)) {
    can = true;
    types = deflt ? [{
      type: deflt,
      attrs: newAttributes
    }] : void 0;
  }
  if (dispatch) {
    if (can) {
      if (selection instanceof import_state10.TextSelection) {
        tr.deleteSelection();
      }
      tr.split(tr.mapping.map($from.pos), 1, types);
      if (deflt && !atEnd && !$from.parentOffset && $from.parent.type !== deflt) {
        const first2 = tr.mapping.map($from.before());
        const $first = tr.doc.resolve(first2);
        if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
          tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
        }
      }
    }
    if (keepMarks) {
      ensureMarks(state, editor.extensionManager.splittableMarks);
    }
    tr.scrollIntoView();
  }
  return can;
};
var splitListItem = (typeOrName, overrideAttrs = {}) => ({
  tr,
  state,
  dispatch,
  editor
}) => {
  var _a;
  const type = getNodeType(typeOrName, state.schema);
  const {
    $from,
    $to
  } = state.selection;
  const node = state.selection.node;
  if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
    return false;
  }
  const grandParent = $from.node(-1);
  if (grandParent.type !== type) {
    return false;
  }
  const extensionAttributes = editor.extensionManager.attributes;
  if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
    if ($from.depth === 2 || $from.node(-3).type !== type || $from.index(-2) !== $from.node(-2).childCount - 1) {
      return false;
    }
    if (dispatch) {
      let wrap = import_model8.Fragment.empty;
      const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
      for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1) {
        wrap = import_model8.Fragment.from($from.node(d).copy(wrap));
      }
      const depthAfter =
      // eslint-disable-next-line no-nested-ternary
      $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
      const newNextTypeAttributes2 = {
        ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
        ...overrideAttrs
      };
      const nextType2 = ((_a = type.contentMatch.defaultType) == null ? void 0 : _a.createAndFill(newNextTypeAttributes2)) || void 0;
      wrap = wrap.append(import_model8.Fragment.from(type.createAndFill(null, nextType2) || void 0));
      const start = $from.before($from.depth - (depthBefore - 1));
      tr.replace(start, $from.after(-depthAfter), new import_model8.Slice(wrap, 4 - depthBefore, 0));
      let sel = -1;
      tr.doc.nodesBetween(start, tr.doc.content.size, (n, pos) => {
        if (sel > -1) {
          return false;
        }
        if (n.isTextblock && n.content.size === 0) {
          sel = pos + 1;
        }
      });
      if (sel > -1) {
        tr.setSelection(import_state11.TextSelection.near(tr.doc.resolve(sel)));
      }
      tr.scrollIntoView();
    }
    return true;
  }
  const nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
  const newTypeAttributes = {
    ...getSplittedAttributes(extensionAttributes, grandParent.type.name, grandParent.attrs),
    ...overrideAttrs
  };
  const newNextTypeAttributes = {
    ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
    ...overrideAttrs
  };
  tr.delete($from.pos, $to.pos);
  const types = nextType ? [{
    type,
    attrs: newTypeAttributes
  }, {
    type: nextType,
    attrs: newNextTypeAttributes
  }] : [{
    type,
    attrs: newTypeAttributes
  }];
  if (!(0, import_transform7.canSplit)(tr.doc, $from.pos, 2)) {
    return false;
  }
  if (dispatch) {
    const {
      selection,
      storedMarks
    } = state;
    const {
      splittableMarks
    } = editor.extensionManager;
    const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
    tr.split($from.pos, 2, types).scrollIntoView();
    if (!marks || !dispatch) {
      return true;
    }
    const filteredMarks = marks.filter(mark => splittableMarks.includes(mark.type.name));
    tr.ensureMarks(filteredMarks);
  }
  return true;
};
var joinListBackwards = (tr, listType) => {
  const list = findParentNode(node => node.type === listType)(tr.selection);
  if (!list) {
    return true;
  }
  const before = tr.doc.resolve(Math.max(0, list.pos - 1)).before(list.depth);
  if (before === void 0) {
    return true;
  }
  const nodeBefore = tr.doc.nodeAt(before);
  const canJoinBackwards = list.node.type === (nodeBefore == null ? void 0 : nodeBefore.type) && (0, import_transform8.canJoin)(tr.doc, list.pos);
  if (!canJoinBackwards) {
    return true;
  }
  tr.join(list.pos);
  return true;
};
var joinListForwards = (tr, listType) => {
  const list = findParentNode(node => node.type === listType)(tr.selection);
  if (!list) {
    return true;
  }
  const after = tr.doc.resolve(list.start).after(list.depth);
  if (after === void 0) {
    return true;
  }
  const nodeAfter = tr.doc.nodeAt(after);
  const canJoinForwards = list.node.type === (nodeAfter == null ? void 0 : nodeAfter.type) && (0, import_transform8.canJoin)(tr.doc, after);
  if (!canJoinForwards) {
    return true;
  }
  tr.join(after);
  return true;
};
var toggleList = (listTypeOrName, itemTypeOrName, keepMarks, attributes = {}) => ({
  editor,
  tr,
  state,
  dispatch,
  chain,
  commands,
  can
}) => {
  const {
    extensions,
    splittableMarks
  } = editor.extensionManager;
  const listType = getNodeType(listTypeOrName, state.schema);
  const itemType = getNodeType(itemTypeOrName, state.schema);
  const {
    selection,
    storedMarks
  } = state;
  const {
    $from,
    $to
  } = selection;
  const range = $from.blockRange($to);
  const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
  if (!range) {
    return false;
  }
  const parentList = findParentNode(node => isList(node.type.name, extensions))(selection);
  if (range.depth >= 1 && parentList && range.depth - parentList.depth <= 1) {
    if (parentList.node.type === listType) {
      return commands.liftListItem(itemType);
    }
    if (isList(parentList.node.type.name, extensions) && listType.validContent(parentList.node.content) && dispatch) {
      return chain().command(() => {
        tr.setNodeMarkup(parentList.pos, listType);
        return true;
      }).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
    }
  }
  if (!keepMarks || !marks || !dispatch) {
    return chain().command(() => {
      const canWrapInList = can().wrapInList(listType, attributes);
      if (canWrapInList) {
        return true;
      }
      return commands.clearNodes();
    }).wrapInList(listType, attributes).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
  }
  return chain().command(() => {
    const canWrapInList = can().wrapInList(listType, attributes);
    const filteredMarks = marks.filter(mark => splittableMarks.includes(mark.type.name));
    tr.ensureMarks(filteredMarks);
    if (canWrapInList) {
      return true;
    }
    return commands.clearNodes();
  }).wrapInList(listType, attributes).command(() => joinListBackwards(tr, listType)).command(() => joinListForwards(tr, listType)).run();
};
var toggleMark = (typeOrName, attributes = {}, options = {}) => ({
  state,
  commands
}) => {
  const {
    extendEmptyMarkRange = false
  } = options;
  const type = getMarkType(typeOrName, state.schema);
  const isActive2 = isMarkActive(state, type, attributes);
  if (isActive2) {
    return commands.unsetMark(type, {
      extendEmptyMarkRange
    });
  }
  return commands.setMark(type, attributes);
};
var toggleNode = (typeOrName, toggleTypeOrName, attributes = {}) => ({
  state,
  commands
}) => {
  const type = getNodeType(typeOrName, state.schema);
  const toggleType = getNodeType(toggleTypeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  let attributesToCopy;
  if (state.selection.$anchor.sameParent(state.selection.$head)) {
    attributesToCopy = state.selection.$anchor.parent.attrs;
  }
  if (isActive2) {
    return commands.setNode(toggleType, attributesToCopy);
  }
  return commands.setNode(type, {
    ...attributesToCopy,
    ...attributes
  });
};
var toggleWrap = (typeOrName, attributes = {}) => ({
  state,
  commands
}) => {
  const type = getNodeType(typeOrName, state.schema);
  const isActive2 = isNodeActive(state, type, attributes);
  if (isActive2) {
    return commands.lift(type);
  }
  return commands.wrapIn(type, attributes);
};
var undoInputRule = () => ({
  state,
  dispatch
}) => {
  const plugins = state.plugins;
  for (let i = 0; i < plugins.length; i += 1) {
    const plugin = plugins[i];
    let undoable;
    if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
      if (dispatch) {
        const tr = state.tr;
        const toUndo = undoable.transform;
        for (let j = toUndo.steps.length - 1; j >= 0; j -= 1) {
          tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
        }
        if (undoable.text) {
          const marks = tr.doc.resolve(undoable.from).marks();
          tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
        } else {
          tr.delete(undoable.from, undoable.to);
        }
      }
      return true;
    }
  }
  return false;
};
var unsetAllMarks = () => ({
  tr,
  dispatch
}) => {
  const {
    selection
  } = tr;
  const {
    empty,
    ranges
  } = selection;
  if (empty) {
    return true;
  }
  if (dispatch) {
    ranges.forEach(range => {
      tr.removeMark(range.$from.pos, range.$to.pos);
    });
  }
  return true;
};
var unsetMark = (typeOrName, options = {}) => ({
  tr,
  state,
  dispatch
}) => {
  var _a;
  const {
    extendEmptyMarkRange = false
  } = options;
  const {
    selection
  } = tr;
  const type = getMarkType(typeOrName, state.schema);
  const {
    $from,
    empty,
    ranges
  } = selection;
  if (!dispatch) {
    return true;
  }
  if (empty && extendEmptyMarkRange) {
    let {
      from,
      to
    } = selection;
    const attrs = (_a = $from.marks().find(mark => mark.type === type)) == null ? void 0 : _a.attrs;
    const range = getMarkRange($from, type, attrs);
    if (range) {
      from = range.from;
      to = range.to;
    }
    tr.removeMark(from, to, type);
  } else {
    ranges.forEach(range => {
      tr.removeMark(range.$from.pos, range.$to.pos, type);
    });
  }
  tr.removeStoredMark(type);
  return true;
};
var unsetTextDirection = position => ({
  tr,
  state,
  dispatch
}) => {
  const {
    selection
  } = state;
  let from;
  let to;
  if (typeof position === "number") {
    from = position;
    to = position;
  } else if (position && "from" in position && "to" in position) {
    from = position.from;
    to = position.to;
  } else {
    from = selection.from;
    to = selection.to;
  }
  if (dispatch) {
    tr.doc.nodesBetween(from, to, (node, pos) => {
      if (node.isText) {
        return;
      }
      const newAttrs = {
        ...node.attrs
      };
      delete newAttrs.dir;
      tr.setNodeMarkup(pos, void 0, newAttrs);
    });
  }
  return true;
};
var updateAttributes = (typeOrName, attributes = {}) => ({
  tr,
  state,
  dispatch
}) => {
  let nodeType = null;
  let markType = null;
  const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
  if (!schemaType) {
    return false;
  }
  if (schemaType === "node") {
    nodeType = getNodeType(typeOrName, state.schema);
  }
  if (schemaType === "mark") {
    markType = getMarkType(typeOrName, state.schema);
  }
  let canUpdate = false;
  tr.selection.ranges.forEach(range => {
    const from = range.$from.pos;
    const to = range.$to.pos;
    let lastPos;
    let lastNode;
    let trimmedFrom;
    let trimmedTo;
    if (tr.selection.empty) {
      state.doc.nodesBetween(from, to, (node, pos) => {
        if (nodeType && nodeType === node.type) {
          canUpdate = true;
          trimmedFrom = Math.max(pos, from);
          trimmedTo = Math.min(pos + node.nodeSize, to);
          lastPos = pos;
          lastNode = node;
        }
      });
    } else {
      state.doc.nodesBetween(from, to, (node, pos) => {
        if (pos < from && nodeType && nodeType === node.type) {
          canUpdate = true;
          trimmedFrom = Math.max(pos, from);
          trimmedTo = Math.min(pos + node.nodeSize, to);
          lastPos = pos;
          lastNode = node;
        }
        if (pos >= from && pos <= to) {
          if (nodeType && nodeType === node.type) {
            canUpdate = true;
            if (dispatch) {
              tr.setNodeMarkup(pos, void 0, {
                ...node.attrs,
                ...attributes
              });
            }
          }
          if (markType && node.marks.length) {
            node.marks.forEach(mark => {
              if (markType === mark.type) {
                canUpdate = true;
                if (dispatch) {
                  const trimmedFrom2 = Math.max(pos, from);
                  const trimmedTo2 = Math.min(pos + node.nodeSize, to);
                  tr.addMark(trimmedFrom2, trimmedTo2, markType.create({
                    ...mark.attrs,
                    ...attributes
                  }));
                }
              }
            });
          }
        }
      });
    }
    if (lastNode) {
      if (lastPos !== void 0 && dispatch) {
        tr.setNodeMarkup(lastPos, void 0, {
          ...lastNode.attrs,
          ...attributes
        });
      }
      if (markType && lastNode.marks.length) {
        lastNode.marks.forEach(mark => {
          if (markType === mark.type && dispatch) {
            tr.addMark(trimmedFrom, trimmedTo, markType.create({
              ...mark.attrs,
              ...attributes
            }));
          }
        });
      }
    }
  });
  return canUpdate;
};
var wrapIn = (typeOrName, attributes = {}) => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  return (0, import_commands16.wrapIn)(type, attributes)(state, dispatch);
};
var wrapInList = (typeOrName, attributes = {}) => ({
  state,
  dispatch
}) => {
  const type = getNodeType(typeOrName, state.schema);
  return (0, import_schema_list3.wrapInList)(type, attributes)(state, dispatch);
};
var EventEmitter = class {
  constructor() {
    this.callbacks = {};
  }
  on(event, fn) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(fn);
    return this;
  }
  emit(event, ...args) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      callbacks.forEach(callback => callback.apply(this, args));
    }
    return this;
  }
  off(event, fn) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      if (fn) {
        this.callbacks[event] = callbacks.filter(callback => callback !== fn);
      } else {
        delete this.callbacks[event];
      }
    }
    return this;
  }
  once(event, fn) {
    const onceFn = (...args) => {
      this.off(event, onceFn);
      fn.apply(this, args);
    };
    return this.on(event, onceFn);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
};
var InputRule = class {
  constructor(config) {
    var _a;
    this.find = config.find;
    this.handler = config.handler;
    this.undoable = (_a = config.undoable) != null ? _a : true;
  }
};
var inputRuleMatcherHandler = (text, find) => {
  if (isRegExp(find)) {
    return find.exec(text);
  }
  const inputRuleMatch = find(text);
  if (!inputRuleMatch) {
    return null;
  }
  const result = [inputRuleMatch.text];
  result.index = inputRuleMatch.index;
  result.input = text;
  result.data = inputRuleMatch.data;
  if (inputRuleMatch.replaceWith) {
    if (!inputRuleMatch.text.includes(inputRuleMatch.replaceWith)) {
      console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');
    }
    result.push(inputRuleMatch.replaceWith);
  }
  return result;
};
function run(config) {
  var _a;
  const {
    editor,
    from,
    to,
    text,
    rules,
    plugin
  } = config;
  const {
    view
  } = editor;
  if (view.composing) {
    return false;
  }
  const $from = view.state.doc.resolve(from);
  if (
  // check for code node
  $from.parent.type.spec.code ||
  // check for code mark
  !!((_a = $from.nodeBefore || $from.nodeAfter) == null ? void 0 : _a.marks.find(mark => mark.type.spec.code))) {
    return false;
  }
  let matched = false;
  const textBefore = getTextContentFromNodes($from) + text;
  rules.forEach(rule => {
    if (matched) {
      return;
    }
    const match = inputRuleMatcherHandler(textBefore, rule.find);
    if (!match) {
      return;
    }
    const tr = view.state.tr;
    const state = createChainableState({
      state: view.state,
      transaction: tr
    });
    const range = {
      from: from - (match[0].length - text.length),
      to
    };
    const {
      commands,
      chain,
      can
    } = new CommandManager({
      editor,
      state
    });
    const handler = rule.handler({
      state,
      range,
      match,
      commands,
      chain,
      can
    });
    if (handler === null || !tr.steps.length) {
      return;
    }
    if (rule.undoable) {
      tr.setMeta(plugin, {
        transform: tr,
        from,
        to,
        text
      });
    }
    view.dispatch(tr);
    matched = true;
  });
  return matched;
}
function inputRulesPlugin(props) {
  const {
    editor,
    rules
  } = props;
  const plugin = new import_state13.Plugin({
    state: {
      init() {
        return null;
      },
      apply(tr, prev, state) {
        const stored = tr.getMeta(plugin);
        if (stored) {
          return stored;
        }
        const simulatedInputMeta = tr.getMeta("applyInputRules");
        const isSimulatedInput = !!simulatedInputMeta;
        if (isSimulatedInput) {
          setTimeout(() => {
            let {
              text
            } = simulatedInputMeta;
            if (typeof text === "string") {
              text = text;
            } else {
              text = getHTMLFromFragment(import_model9.Fragment.from(text), state.schema);
            }
            const {
              from
            } = simulatedInputMeta;
            const to = from + text.length;
            run({
              editor,
              from,
              to,
              text,
              rules,
              plugin
            });
          });
        }
        return tr.selectionSet || tr.docChanged ? null : prev;
      }
    },
    props: {
      handleTextInput(view, from, to, text) {
        return run({
          editor,
          from,
          to,
          text,
          rules,
          plugin
        });
      },
      handleDOMEvents: {
        compositionend: view => {
          setTimeout(() => {
            const {
              $cursor
            } = view.state.selection;
            if ($cursor) {
              run({
                editor,
                from: $cursor.pos,
                to: $cursor.pos,
                text: "",
                rules,
                plugin
              });
            }
          });
          return false;
        }
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(view, event) {
        if (event.key !== "Enter") {
          return false;
        }
        const {
          $cursor
        } = view.state.selection;
        if ($cursor) {
          return run({
            editor,
            from: $cursor.pos,
            to: $cursor.pos,
            text: "\n",
            rules,
            plugin
          });
        }
        return false;
      }
    },
    // @ts-ignore
    isInputRules: true
  });
  return plugin;
}
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
function isPlainObject(value) {
  if (getType(value) !== "Object") {
    return false;
  }
  return value.constructor === Object && Object.getPrototypeOf(value) === Object.prototype;
}
function mergeDeep(target, source) {
  const output = {
    ...target
  };
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (isPlainObject(source[key]) && isPlainObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
var Extendable = class {
  constructor(config = {}) {
    this.type = "extendable";
    this.parent = null;
    this.child = null;
    this.name = "";
    this.config = {
      name: this.name
    };
    this.config = {
      ...this.config,
      ...config
    };
    this.name = this.config.name;
  }
  get options() {
    return {
      ...(callOrReturn(getExtensionField(this, "addOptions", {
        name: this.name
      })) || {})
    };
  }
  get storage() {
    return {
      ...(callOrReturn(getExtensionField(this, "addStorage", {
        name: this.name,
        options: this.options
      })) || {})
    };
  }
  configure(options = {}) {
    const extension = this.extend({
      ...this.config,
      addOptions: () => {
        return mergeDeep(this.options, options);
      }
    });
    extension.name = this.name;
    extension.parent = this.parent;
    return extension;
  }
  extend(extendedConfig = {}) {
    const extension = new this.constructor({
      ...this.config,
      ...extendedConfig
    });
    extension.parent = this;
    this.child = extension;
    extension.name = "name" in extendedConfig ? extendedConfig.name : extension.parent.name;
    return extension;
  }
};
var Mark = class _Mark extends Extendable {
  constructor() {
    super(...arguments);
    this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(config = {}) {
    const resolvedConfig = typeof config === "function" ? config() : config;
    return new _Mark(resolvedConfig);
  }
  static handleExit({
    editor,
    mark
  }) {
    const {
      tr
    } = editor.state;
    const currentPos = editor.state.selection.$from;
    const isAtEnd = currentPos.pos === currentPos.end();
    if (isAtEnd) {
      const currentMarks = currentPos.marks();
      const isInMark = !!currentMarks.find(m => (m == null ? void 0 : m.type.name) === mark.name);
      if (!isInMark) {
        return false;
      }
      const removeMark = currentMarks.find(m => (m == null ? void 0 : m.type.name) === mark.name);
      if (removeMark) {
        tr.removeStoredMark(removeMark);
      }
      tr.insertText(" ", currentPos.pos);
      editor.view.dispatch(tr);
      return true;
    }
    return false;
  }
  configure(options) {
    return super.configure(options);
  }
  extend(extendedConfig) {
    const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
    return super.extend(resolvedConfig);
  }
};
function isNumber(value) {
  return typeof value === "number";
}
var PasteRule = class {
  constructor(config) {
    this.find = config.find;
    this.handler = config.handler;
  }
};
var pasteRuleMatcherHandler = (text, find, event) => {
  if (isRegExp(find)) {
    return [...text.matchAll(find)];
  }
  const matches = find(text, event);
  if (!matches) {
    return [];
  }
  return matches.map(pasteRuleMatch => {
    const result = [pasteRuleMatch.text];
    result.index = pasteRuleMatch.index;
    result.input = text;
    result.data = pasteRuleMatch.data;
    if (pasteRuleMatch.replaceWith) {
      if (!pasteRuleMatch.text.includes(pasteRuleMatch.replaceWith)) {
        console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');
      }
      result.push(pasteRuleMatch.replaceWith);
    }
    return result;
  });
};
function run2(config) {
  const {
    editor,
    state,
    from,
    to,
    rule,
    pasteEvent,
    dropEvent
  } = config;
  const {
    commands,
    chain,
    can
  } = new CommandManager({
    editor,
    state
  });
  const handlers = [];
  state.doc.nodesBetween(from, to, (node, pos) => {
    var _a, _b, _c, _d, _e;
    if (((_b = (_a = node.type) == null ? void 0 : _a.spec) == null ? void 0 : _b.code) || !(node.isText || node.isTextblock || node.isInline)) {
      return;
    }
    const contentSize = (_e = (_d = (_c = node.content) == null ? void 0 : _c.size) != null ? _d : node.nodeSize) != null ? _e : 0;
    const resolvedFrom = Math.max(from, pos);
    const resolvedTo = Math.min(to, pos + contentSize);
    if (resolvedFrom >= resolvedTo) {
      return;
    }
    const textToMatch = node.isText ? node.text || "" : node.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "\uFFFC");
    const matches = pasteRuleMatcherHandler(textToMatch, rule.find, pasteEvent);
    matches.forEach(match => {
      if (match.index === void 0) {
        return;
      }
      const start = resolvedFrom + match.index + 1;
      const end = start + match[0].length;
      const range = {
        from: state.tr.mapping.map(start),
        to: state.tr.mapping.map(end)
      };
      const handler = rule.handler({
        state,
        range,
        match,
        commands,
        chain,
        can,
        pasteEvent,
        dropEvent
      });
      handlers.push(handler);
    });
  });
  const success = handlers.every(handler => handler !== null);
  return success;
}
var tiptapDragFromOtherEditor = null;
var createClipboardPasteEvent = text => {
  var _a;
  const event = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  (_a = event.clipboardData) == null ? void 0 : _a.setData("text/html", text);
  return event;
};
function pasteRulesPlugin(props) {
  const {
    editor,
    rules
  } = props;
  let dragSourceElement = null;
  let isPastedFromProseMirror = false;
  let isDroppedFromProseMirror = false;
  let pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
  let dropEvent;
  try {
    dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
  } catch {
    dropEvent = null;
  }
  const processEvent = ({
    state,
    from,
    to,
    rule,
    pasteEvt
  }) => {
    const tr = state.tr;
    const chainableState = createChainableState({
      state,
      transaction: tr
    });
    const handler = run2({
      editor,
      state: chainableState,
      from: Math.max(from - 1, 0),
      to: to.b - 1,
      rule,
      pasteEvent: pasteEvt,
      dropEvent
    });
    if (!handler || !tr.steps.length) {
      return;
    }
    try {
      dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
    } catch {
      dropEvent = null;
    }
    pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
    return tr;
  };
  const plugins = rules.map(rule => {
    return new import_state14.Plugin({
      // we register a global drag handler to track the current drag source element
      view(view) {
        const handleDragstart = event => {
          var _a;
          dragSourceElement = ((_a = view.dom.parentElement) == null ? void 0 : _a.contains(event.target)) ? view.dom.parentElement : null;
          if (dragSourceElement) {
            tiptapDragFromOtherEditor = editor;
          }
        };
        const handleDragend = () => {
          if (tiptapDragFromOtherEditor) {
            tiptapDragFromOtherEditor = null;
          }
        };
        window.addEventListener("dragstart", handleDragstart);
        window.addEventListener("dragend", handleDragend);
        return {
          destroy() {
            window.removeEventListener("dragstart", handleDragstart);
            window.removeEventListener("dragend", handleDragend);
          }
        };
      },
      props: {
        handleDOMEvents: {
          drop: (view, event) => {
            isDroppedFromProseMirror = dragSourceElement === view.dom.parentElement;
            dropEvent = event;
            if (!isDroppedFromProseMirror) {
              const dragFromOtherEditor = tiptapDragFromOtherEditor;
              if (dragFromOtherEditor == null ? void 0 : dragFromOtherEditor.isEditable) {
                setTimeout(() => {
                  const selection = dragFromOtherEditor.state.selection;
                  if (selection) {
                    dragFromOtherEditor.commands.deleteRange({
                      from: selection.from,
                      to: selection.to
                    });
                  }
                }, 10);
              }
            }
            return false;
          },
          paste: (_view, event) => {
            var _a;
            const html = (_a = event.clipboardData) == null ? void 0 : _a.getData("text/html");
            pasteEvent = event;
            isPastedFromProseMirror = !!(html == null ? void 0 : html.includes("data-pm-slice"));
            return false;
          }
        }
      },
      appendTransaction: (transactions, oldState, state) => {
        const transaction = transactions[0];
        const isPaste = transaction.getMeta("uiEvent") === "paste" && !isPastedFromProseMirror;
        const isDrop = transaction.getMeta("uiEvent") === "drop" && !isDroppedFromProseMirror;
        const simulatedPasteMeta = transaction.getMeta("applyPasteRules");
        const isSimulatedPaste = !!simulatedPasteMeta;
        if (!isPaste && !isDrop && !isSimulatedPaste) {
          return;
        }
        if (isSimulatedPaste) {
          let {
            text
          } = simulatedPasteMeta;
          if (typeof text === "string") {
            text = text;
          } else {
            text = getHTMLFromFragment(import_model10.Fragment.from(text), state.schema);
          }
          const {
            from: from2
          } = simulatedPasteMeta;
          const to2 = from2 + text.length;
          const pasteEvt = createClipboardPasteEvent(text);
          return processEvent({
            rule,
            state,
            from: from2,
            to: {
              b: to2
            },
            pasteEvt
          });
        }
        const from = oldState.doc.content.findDiffStart(state.doc.content);
        const to = oldState.doc.content.findDiffEnd(state.doc.content);
        if (!isNumber(from) || !to || from === to.b) {
          return;
        }
        return processEvent({
          rule,
          state,
          from,
          to,
          pasteEvt: pasteEvent
        });
      }
    });
  });
  return plugins;
}
var ExtensionManager = class {
  constructor(extensions, editor) {
    this.splittableMarks = [];
    this.editor = editor;
    this.baseExtensions = extensions;
    this.extensions = resolveExtensions(extensions);
    this.schema = getSchemaByResolvedExtensions(this.extensions, editor);
    this.setupExtensions();
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((commands, extension) => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor: this.editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      const addCommands = getExtensionField(extension, "addCommands", context);
      if (!addCommands) {
        return commands;
      }
      return {
        ...commands,
        ...addCommands()
      };
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const {
      editor
    } = this;
    const extensions = sortExtensions([...this.extensions].reverse());
    const allPlugins = extensions.flatMap(extension => {
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      const plugins = [];
      const addKeyboardShortcuts = getExtensionField(extension, "addKeyboardShortcuts", context);
      let defaultBindings = {};
      if (extension.type === "mark" && getExtensionField(extension, "exitable", context)) {
        defaultBindings.ArrowRight = () => Mark.handleExit({
          editor,
          mark: extension
        });
      }
      if (addKeyboardShortcuts) {
        const bindings = Object.fromEntries(Object.entries(addKeyboardShortcuts()).map(([shortcut, method]) => {
          return [shortcut, () => method({
            editor
          })];
        }));
        defaultBindings = {
          ...defaultBindings,
          ...bindings
        };
      }
      const keyMapPlugin = (0, import_keymap.keymap)(defaultBindings);
      plugins.push(keyMapPlugin);
      const addInputRules = getExtensionField(extension, "addInputRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enableInputRules) && addInputRules) {
        const rules = addInputRules();
        if (rules && rules.length) {
          const inputResult = inputRulesPlugin({
            editor,
            rules
          });
          const inputPlugins = Array.isArray(inputResult) ? inputResult : [inputResult];
          plugins.push(...inputPlugins);
        }
      }
      const addPasteRules = getExtensionField(extension, "addPasteRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enablePasteRules) && addPasteRules) {
        const rules = addPasteRules();
        if (rules && rules.length) {
          const pasteRules = pasteRulesPlugin({
            editor,
            rules
          });
          plugins.push(...pasteRules);
        }
      }
      const addProseMirrorPlugins = getExtensionField(extension, "addProseMirrorPlugins", context);
      if (addProseMirrorPlugins) {
        const proseMirrorPlugins = addProseMirrorPlugins();
        plugins.push(...proseMirrorPlugins);
      }
      return plugins;
    });
    return allPlugins;
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return getAttributesFromExtensions(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const {
      editor
    } = this;
    const {
      nodeExtensions
    } = splitExtensions(this.extensions);
    return Object.fromEntries(nodeExtensions.filter(extension => !!getExtensionField(extension, "addNodeView")).map(extension => {
      const extensionAttributes = this.attributes.filter(attribute => attribute.type === extension.name);
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor,
        type: getNodeType(extension.name, this.schema)
      };
      const addNodeView = getExtensionField(extension, "addNodeView", context);
      if (!addNodeView) {
        return [];
      }
      const nodeViewResult = addNodeView();
      if (!nodeViewResult) {
        return [];
      }
      const nodeview = (node, view, getPos, decorations, innerDecorations) => {
        const HTMLAttributes = getRenderedAttributes(node, extensionAttributes);
        return nodeViewResult({
          // pass-through
          node,
          view,
          getPos,
          decorations,
          innerDecorations,
          // tiptap-specific
          editor,
          extension,
          HTMLAttributes
        });
      };
      return [extension.name, nodeview];
    }));
  }
  get markViews() {
    const {
      editor
    } = this;
    const {
      markExtensions
    } = splitExtensions(this.extensions);
    return Object.fromEntries(markExtensions.filter(extension => !!getExtensionField(extension, "addMarkView")).map(extension => {
      const extensionAttributes = this.attributes.filter(attribute => attribute.type === extension.name);
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor,
        type: getMarkType(extension.name, this.schema)
      };
      const addMarkView = getExtensionField(extension, "addMarkView", context);
      if (!addMarkView) {
        return [];
      }
      const markView = (mark, view, inline) => {
        const HTMLAttributes = getRenderedAttributes(mark, extensionAttributes);
        return addMarkView()({
          // pass-through
          mark,
          view,
          inline,
          // tiptap-specific
          editor,
          extension,
          HTMLAttributes,
          updateAttributes: attrs => {
            updateMarkViewAttributes(mark, editor, attrs);
          }
        });
      };
      return [extension.name, markView];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    const extensions = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(extensions.map(extension => [extension.name, extension.storage]));
    extensions.forEach(extension => {
      var _a;
      const context = {
        name: extension.name,
        options: extension.options,
        storage: this.editor.extensionStorage[extension.name],
        editor: this.editor,
        type: getSchemaTypeByName(extension.name, this.schema)
      };
      if (extension.type === "mark") {
        const keepOnSplit = (_a = callOrReturn(getExtensionField(extension, "keepOnSplit", context))) != null ? _a : true;
        if (keepOnSplit) {
          this.splittableMarks.push(extension.name);
        }
      }
      const onBeforeCreate = getExtensionField(extension, "onBeforeCreate", context);
      const onCreate = getExtensionField(extension, "onCreate", context);
      const onUpdate = getExtensionField(extension, "onUpdate", context);
      const onSelectionUpdate = getExtensionField(extension, "onSelectionUpdate", context);
      const onTransaction = getExtensionField(extension, "onTransaction", context);
      const onFocus = getExtensionField(extension, "onFocus", context);
      const onBlur = getExtensionField(extension, "onBlur", context);
      const onDestroy = getExtensionField(extension, "onDestroy", context);
      if (onBeforeCreate) {
        this.editor.on("beforeCreate", onBeforeCreate);
      }
      if (onCreate) {
        this.editor.on("create", onCreate);
      }
      if (onUpdate) {
        this.editor.on("update", onUpdate);
      }
      if (onSelectionUpdate) {
        this.editor.on("selectionUpdate", onSelectionUpdate);
      }
      if (onTransaction) {
        this.editor.on("transaction", onTransaction);
      }
      if (onFocus) {
        this.editor.on("focus", onFocus);
      }
      if (onBlur) {
        this.editor.on("blur", onBlur);
      }
      if (onDestroy) {
        this.editor.on("destroy", onDestroy);
      }
    });
  }
};
ExtensionManager.resolve = resolveExtensions;
ExtensionManager.sort = sortExtensions;
ExtensionManager.flatten = flattenExtensions;
var extensions_exports = {};
__export2(extensions_exports, {
  ClipboardTextSerializer: () => ClipboardTextSerializer,
  Commands: () => Commands,
  Delete: () => Delete,
  Drop: () => Drop,
  Editable: () => Editable,
  FocusEvents: () => FocusEvents,
  Keymap: () => Keymap,
  Paste: () => Paste,
  Tabindex: () => Tabindex,
  TextDirection: () => TextDirection,
  focusEventsPluginKey: () => focusEventsPluginKey
});
var Extension = class _Extension extends Extendable {
  constructor() {
    super(...arguments);
    this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(config = {}) {
    const resolvedConfig = typeof config === "function" ? config() : config;
    return new _Extension(resolvedConfig);
  }
  configure(options) {
    return super.configure(options);
  }
  extend(extendedConfig) {
    const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
    return super.extend(resolvedConfig);
  }
};
var ClipboardTextSerializer = Extension.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [new import_state15.Plugin({
      key: new import_state15.PluginKey("clipboardTextSerializer"),
      props: {
        clipboardTextSerializer: () => {
          const {
            editor
          } = this;
          const {
            state,
            schema
          } = editor;
          const {
            doc,
            selection
          } = state;
          const {
            ranges
          } = selection;
          const from = Math.min(...ranges.map(range2 => range2.$from.pos));
          const to = Math.max(...ranges.map(range2 => range2.$to.pos));
          const textSerializers = getTextSerializersFromSchema(schema);
          const range = {
            from,
            to
          };
          return getTextBetween(doc, range, {
            ...(this.options.blockSeparator !== void 0 ? {
              blockSeparator: this.options.blockSeparator
            } : {}),
            textSerializers
          });
        }
      }
    })];
  }
});
var Commands = Extension.create({
  name: "commands",
  addCommands() {
    return {
      ...commands_exports
    };
  }
});
var Delete = Extension.create({
  name: "delete",
  onUpdate({
    transaction,
    appendedTransactions
  }) {
    var _a, _b, _c;
    const callback = () => {
      var _a2, _b2, _c2, _d;
      if ((_d = (_c2 = (_b2 = (_a2 = this.editor.options.coreExtensionOptions) == null ? void 0 : _a2.delete) == null ? void 0 : _b2.filterTransaction) == null ? void 0 : _c2.call(_b2, transaction)) != null ? _d : transaction.getMeta("y-sync$")) {
        return;
      }
      const nextTransaction = combineTransactionSteps(transaction.before, [transaction, ...appendedTransactions]);
      const changes = getChangedRanges(nextTransaction);
      changes.forEach(change => {
        if (nextTransaction.mapping.mapResult(change.oldRange.from).deletedAfter && nextTransaction.mapping.mapResult(change.oldRange.to).deletedBefore) {
          nextTransaction.before.nodesBetween(change.oldRange.from, change.oldRange.to, (node, from) => {
            const to = from + node.nodeSize - 2;
            const isFullyWithinRange = change.oldRange.from <= from && to <= change.oldRange.to;
            this.editor.emit("delete", {
              type: "node",
              node,
              from,
              to,
              newFrom: nextTransaction.mapping.map(from),
              newTo: nextTransaction.mapping.map(to),
              deletedRange: change.oldRange,
              newRange: change.newRange,
              partial: !isFullyWithinRange,
              editor: this.editor,
              transaction,
              combinedTransform: nextTransaction
            });
          });
        }
      });
      const mapping = nextTransaction.mapping;
      nextTransaction.steps.forEach((step, index) => {
        var _a3, _b3;
        if (step instanceof import_transform9.RemoveMarkStep) {
          const newStart = mapping.slice(index).map(step.from, -1);
          const newEnd = mapping.slice(index).map(step.to);
          const oldStart = mapping.invert().map(newStart, -1);
          const oldEnd = mapping.invert().map(newEnd);
          const foundBeforeMark = (_a3 = nextTransaction.doc.nodeAt(newStart - 1)) == null ? void 0 : _a3.marks.some(mark => mark.eq(step.mark));
          const foundAfterMark = (_b3 = nextTransaction.doc.nodeAt(newEnd)) == null ? void 0 : _b3.marks.some(mark => mark.eq(step.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: step.mark,
            from: step.from,
            to: step.to,
            deletedRange: {
              from: oldStart,
              to: oldEnd
            },
            newRange: {
              from: newStart,
              to: newEnd
            },
            partial: Boolean(foundAfterMark || foundBeforeMark),
            editor: this.editor,
            transaction,
            combinedTransform: nextTransaction
          });
        }
      });
    };
    if ((_c = (_b = (_a = this.editor.options.coreExtensionOptions) == null ? void 0 : _a.delete) == null ? void 0 : _b.async) != null ? _c : true) {
      setTimeout(callback, 0);
    } else {
      callback();
    }
  }
});
var Drop = Extension.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [new import_state16.Plugin({
      key: new import_state16.PluginKey("tiptapDrop"),
      props: {
        handleDrop: (_, e, slice, moved) => {
          this.editor.emit("drop", {
            editor: this.editor,
            event: e,
            slice,
            moved
          });
        }
      }
    })];
  }
});
var Editable = Extension.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [new import_state17.Plugin({
      key: new import_state17.PluginKey("editable"),
      props: {
        editable: () => this.editor.options.editable
      }
    })];
  }
});
var focusEventsPluginKey = new import_state18.PluginKey("focusEvents");
var FocusEvents = Extension.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const {
      editor
    } = this;
    return [new import_state18.Plugin({
      key: focusEventsPluginKey,
      props: {
        handleDOMEvents: {
          focus: (view, event) => {
            editor.isFocused = true;
            const transaction = editor.state.tr.setMeta("focus", {
              event
            }).setMeta("addToHistory", false);
            view.dispatch(transaction);
            return false;
          },
          blur: (view, event) => {
            editor.isFocused = false;
            const transaction = editor.state.tr.setMeta("blur", {
              event
            }).setMeta("addToHistory", false);
            view.dispatch(transaction);
            return false;
          }
        }
      }
    })];
  }
});
var Keymap = Extension.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const handleBackspace = () => this.editor.commands.first(({
      commands
    }) => [() => commands.undoInputRule(),
    // maybe convert first text block node to default node
    () => commands.command(({
      tr
    }) => {
      const {
        selection,
        doc
      } = tr;
      const {
        empty,
        $anchor
      } = selection;
      const {
        pos,
        parent
      } = $anchor;
      const $parentPos = $anchor.parent.isTextblock && pos > 0 ? tr.doc.resolve(pos - 1) : $anchor;
      const parentIsIsolating = $parentPos.parent.type.spec.isolating;
      const parentPos = $anchor.pos - $anchor.parentOffset;
      const isAtStart = parentIsIsolating && $parentPos.parent.childCount === 1 ? parentPos === $anchor.pos : import_state19.Selection.atStart(doc).from === pos;
      if (!empty || !parent.type.isTextblock || parent.textContent.length || !isAtStart || isAtStart && $anchor.parent.type.name === "paragraph") {
        return false;
      }
      return commands.clearNodes();
    }), () => commands.deleteSelection(), () => commands.joinBackward(), () => commands.selectNodeBackward()]);
    const handleDelete = () => this.editor.commands.first(({
      commands
    }) => [() => commands.deleteSelection(), () => commands.deleteCurrentNode(), () => commands.joinForward(), () => commands.selectNodeForward()]);
    const handleEnter = () => this.editor.commands.first(({
      commands
    }) => [() => commands.newlineInCode(), () => commands.createParagraphNear(), () => commands.liftEmptyBlock(), () => commands.splitBlock()]);
    const baseKeymap = {
      Enter: handleEnter,
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: handleBackspace,
      "Mod-Backspace": handleBackspace,
      "Shift-Backspace": handleBackspace,
      Delete: handleDelete,
      "Mod-Delete": handleDelete,
      "Mod-a": () => this.editor.commands.selectAll()
    };
    const pcKeymap = {
      ...baseKeymap
    };
    const macKeymap = {
      ...baseKeymap,
      "Ctrl-h": handleBackspace,
      "Alt-Backspace": handleBackspace,
      "Ctrl-d": handleDelete,
      "Ctrl-Alt-Backspace": handleDelete,
      "Alt-Delete": handleDelete,
      "Alt-d": handleDelete,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    if (isiOS() || isMacOS()) {
      return macKeymap;
    }
    return pcKeymap;
  },
  addProseMirrorPlugins() {
    return [
    // With this plugin we check if the whole document was selected and deleted.
    // In this case we will additionally call `clearNodes()` to convert e.g. a heading
    // to a paragraph if necessary.
    // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
    // with many other commands.
    new import_state19.Plugin({
      key: new import_state19.PluginKey("clearDocument"),
      appendTransaction: (transactions, oldState, newState) => {
        if (transactions.some(tr2 => tr2.getMeta("composition"))) {
          return;
        }
        const docChanges = transactions.some(transaction => transaction.docChanged) && !oldState.doc.eq(newState.doc);
        const ignoreTr = transactions.some(transaction => transaction.getMeta("preventClearDocument"));
        if (!docChanges || ignoreTr) {
          return;
        }
        const {
          empty,
          from,
          to
        } = oldState.selection;
        const allFrom = import_state19.Selection.atStart(oldState.doc).from;
        const allEnd = import_state19.Selection.atEnd(oldState.doc).to;
        const allWasSelected = from === allFrom && to === allEnd;
        if (empty || !allWasSelected) {
          return;
        }
        const isEmpty = isNodeEmpty(newState.doc);
        if (!isEmpty) {
          return;
        }
        const tr = newState.tr;
        const state = createChainableState({
          state: newState,
          transaction: tr
        });
        const {
          commands
        } = new CommandManager({
          editor: this.editor,
          state
        });
        commands.clearNodes();
        if (!tr.steps.length) {
          return;
        }
        return tr;
      }
    })];
  }
});
var Paste = Extension.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [new import_state20.Plugin({
      key: new import_state20.PluginKey("tiptapPaste"),
      props: {
        handlePaste: (_view, e, slice) => {
          this.editor.emit("paste", {
            editor: this.editor,
            event: e,
            slice
          });
        }
      }
    })];
  }
});
var Tabindex = Extension.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [new import_state21.Plugin({
      key: new import_state21.PluginKey("tabindex"),
      props: {
        attributes: () => this.editor.isEditable ? {
          tabindex: "0"
        } : {}
      }
    })];
  }
});
var TextDirection = Extension.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction) {
      return [];
    }
    const {
      nodeExtensions
    } = splitExtensions(this.extensions);
    return [{
      types: nodeExtensions.filter(extension => extension.name !== "text").map(extension => extension.name),
      attributes: {
        dir: {
          default: this.options.direction,
          parseHTML: element => {
            const dir = element.getAttribute("dir");
            if (dir && (dir === "ltr" || dir === "rtl" || dir === "auto")) {
              return dir;
            }
            return this.options.direction;
          },
          renderHTML: attributes => {
            if (!attributes.dir) {
              return {};
            }
            return {
              dir: attributes.dir
            };
          }
        }
      }
    }];
  },
  addProseMirrorPlugins() {
    return [new import_state22.Plugin({
      key: new import_state22.PluginKey("textDirection"),
      props: {
        attributes: () => {
          const direction = this.options.direction;
          if (!direction) {
            return {};
          }
          return {
            dir: direction
          };
        }
      }
    })];
  }
});
var NodePos = class _NodePos {
  constructor(pos, editor, isBlock = false, node = null) {
    this.currentNode = null;
    this.actualDepth = null;
    this.isBlock = isBlock;
    this.resolvedPos = pos;
    this.editor = editor;
    this.currentNode = node;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var _a;
    return (_a = this.actualDepth) != null ? _a : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(content) {
    let from = this.from;
    let to = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      from = this.from + 1;
      to = this.to - 1;
    }
    this.editor.commands.insertContentAt({
      from,
      to
    }, content);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    if (this.isBlock) {
      return this.pos;
    }
    return this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    if (this.isBlock) {
      return this.pos + this.size;
    }
    return this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0) {
      return null;
    }
    const parentPos = this.resolvedPos.start(this.resolvedPos.depth - 1);
    const $pos = this.resolvedPos.doc.resolve(parentPos);
    return new _NodePos($pos, this.editor);
  }
  get before() {
    let $pos = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    if ($pos.depth !== this.depth) {
      $pos = this.resolvedPos.doc.resolve(this.from - 3);
    }
    return new _NodePos($pos, this.editor);
  }
  get after() {
    let $pos = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    if ($pos.depth !== this.depth) {
      $pos = this.resolvedPos.doc.resolve(this.to + 3);
    }
    return new _NodePos($pos, this.editor);
  }
  get children() {
    const children = [];
    this.node.content.forEach((node, offset) => {
      const isBlock = node.isBlock && !node.isTextblock;
      const isNonTextAtom = node.isAtom && !node.isText;
      const targetPos = this.pos + offset + (isNonTextAtom ? 0 : 1);
      if (targetPos < 0 || targetPos > this.resolvedPos.doc.nodeSize - 2) {
        return;
      }
      const $pos = this.resolvedPos.doc.resolve(targetPos);
      if (!isBlock && $pos.depth <= this.depth) {
        return;
      }
      const childNodePos = new _NodePos($pos, this.editor, isBlock, isBlock ? node : null);
      if (isBlock) {
        childNodePos.actualDepth = this.depth + 1;
      }
      children.push(new _NodePos($pos, this.editor, isBlock, isBlock ? node : null));
    });
    return children;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const children = this.children;
    return children[children.length - 1] || null;
  }
  closest(selector, attributes = {}) {
    let node = null;
    let currentNode = this.parent;
    while (currentNode && !node) {
      if (currentNode.node.type.name === selector) {
        if (Object.keys(attributes).length > 0) {
          const nodeAttributes = currentNode.node.attrs;
          const attrKeys = Object.keys(attributes);
          for (let index = 0; index < attrKeys.length; index += 1) {
            const key = attrKeys[index];
            if (nodeAttributes[key] !== attributes[key]) {
              break;
            }
          }
        } else {
          node = currentNode;
        }
      }
      currentNode = currentNode.parent;
    }
    return node;
  }
  querySelector(selector, attributes = {}) {
    return this.querySelectorAll(selector, attributes, true)[0] || null;
  }
  querySelectorAll(selector, attributes = {}, firstItemOnly = false) {
    let nodes = [];
    if (!this.children || this.children.length === 0) {
      return nodes;
    }
    const attrKeys = Object.keys(attributes);
    this.children.forEach(childPos => {
      if (firstItemOnly && nodes.length > 0) {
        return;
      }
      if (childPos.node.type.name === selector) {
        const doesAllAttributesMatch = attrKeys.every(key => attributes[key] === childPos.node.attrs[key]);
        if (doesAllAttributesMatch) {
          nodes.push(childPos);
        }
      }
      if (firstItemOnly && nodes.length > 0) {
        return;
      }
      nodes = nodes.concat(childPos.querySelectorAll(selector, attributes, firstItemOnly));
    });
    return nodes;
  }
  setAttribute(attributes) {
    const {
      tr
    } = this.editor.state;
    tr.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...attributes
    });
    this.editor.view.dispatch(tr);
  }
};
var style = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function createStyleTag(style2, nonce, suffix) {
  const tiptapStyleTag = document.querySelector(`style[data-tiptap-style${suffix ? `-${suffix}` : ""}]`);
  if (tiptapStyleTag !== null) {
    return tiptapStyleTag;
  }
  const styleNode = document.createElement("style");
  if (nonce) {
    styleNode.setAttribute("nonce", nonce);
  }
  styleNode.setAttribute(`data-tiptap-style${suffix ? `-${suffix}` : ""}`, "");
  styleNode.innerHTML = style2;
  document.getElementsByTagName("head")[0].appendChild(styleNode);
  return styleNode;
}
var Editor = class extends EventEmitter {
  constructor(options = {}) {
    super();
    this.css = null;
    this.className = "tiptap";
    this.editorView = null;
    this.isFocused = false;
    this.isInitialized = false;
    this.extensionStorage = {};
    this.instanceId = Math.random().toString(36).slice(2, 9);
    this.options = {
      element: typeof document !== "undefined" ? document.createElement("div") : null,
      content: "",
      injectCSS: true,
      injectNonce: void 0,
      extensions: [],
      autofocus: false,
      editable: true,
      textDirection: void 0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: true,
      enablePasteRules: true,
      enableCoreExtensions: true,
      enableContentCheck: false,
      emitContentError: false,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onMount: () => null,
      onUnmount: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({
        error
      }) => {
        throw error;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null
    };
    this.isCapturingTransaction = false;
    this.capturedTransaction = null;
    this.utils = {
      getUpdatedPosition,
      createMappablePosition
    };
    this.setOptions(options);
    this.createExtensionManager();
    this.createCommandManager();
    this.createSchema();
    this.on("beforeCreate", this.options.onBeforeCreate);
    this.emit("beforeCreate", {
      editor: this
    });
    this.on("mount", this.options.onMount);
    this.on("unmount", this.options.onUnmount);
    this.on("contentError", this.options.onContentError);
    this.on("create", this.options.onCreate);
    this.on("update", this.options.onUpdate);
    this.on("selectionUpdate", this.options.onSelectionUpdate);
    this.on("transaction", this.options.onTransaction);
    this.on("focus", this.options.onFocus);
    this.on("blur", this.options.onBlur);
    this.on("destroy", this.options.onDestroy);
    this.on("drop", ({
      event,
      slice,
      moved
    }) => this.options.onDrop(event, slice, moved));
    this.on("paste", ({
      event,
      slice
    }) => this.options.onPaste(event, slice));
    this.on("delete", this.options.onDelete);
    const initialDoc = this.createDoc();
    const selection = resolveFocusPosition(initialDoc, this.options.autofocus);
    this.editorState = import_state12.EditorState.create({
      doc: initialDoc,
      schema: this.schema,
      selection: selection || void 0
    });
    if (this.options.element) {
      this.mount(this.options.element);
    }
  }
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
  mount(el) {
    if (typeof document === "undefined") {
      throw new Error(`[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.`);
    }
    this.createView(el);
    this.emit("mount", {
      editor: this
    });
    if (this.css && !document.head.contains(this.css)) {
      document.head.appendChild(this.css);
    }
    window.setTimeout(() => {
      if (this.isDestroyed) {
        return;
      }
      if (this.options.autofocus !== false && this.options.autofocus !== null) {
        this.commands.focus(this.options.autofocus);
      }
      this.emit("create", {
        editor: this
      });
      this.isInitialized = true;
    }, 0);
  }
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
  unmount() {
    if (this.editorView) {
      const dom = this.editorView.dom;
      if (dom == null ? void 0 : dom.editor) {
        delete dom.editor;
      }
      this.editorView.destroy();
    }
    this.editorView = null;
    this.isInitialized = false;
    if (this.css && !document.querySelectorAll(`.${this.className}`).length) {
      try {
        if (typeof this.css.remove === "function") {
          this.css.remove();
        } else if (this.css.parentNode) {
          this.css.parentNode.removeChild(this.css);
        }
      } catch (error) {
        console.warn("Failed to remove CSS element:", error);
      }
    }
    this.css = null;
    this.emit("unmount", {
      editor: this
    });
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    if (this.options.injectCSS && typeof document !== "undefined") {
      this.css = createStyleTag(style, this.options.injectNonce);
    }
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(options = {}) {
    this.options = {
      ...this.options,
      ...options
    };
    if (!this.editorView || !this.state || this.isDestroyed) {
      return;
    }
    if (this.options.editorProps) {
      this.view.setProps(this.options.editorProps);
    }
    this.view.updateState(this.state);
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(editable, emitUpdate = true) {
    this.setOptions({
      editable
    });
    if (emitUpdate) {
      this.emit("update", {
        editor: this,
        transaction: this.state.tr,
        appendedTransactions: []
      });
    }
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get view() {
    if (this.editorView) {
      return this.editorView;
    }
    return new Proxy({
      state: this.editorState,
      updateState: state => {
        this.editorState = state;
      },
      dispatch: tr => {
        this.dispatchTransaction(tr);
      },
      // Stub some commonly accessed properties to prevent errors
      composing: false,
      dragging: null,
      editable: true,
      isDestroyed: false
    }, {
      get: (obj, key) => {
        if (this.editorView) {
          return this.editorView[key];
        }
        if (key === "state") {
          return this.editorState;
        }
        if (key in obj) {
          return Reflect.get(obj, key);
        }
        throw new Error(`[tiptap error]: The editor view is not available. Cannot access view['${key}']. The editor may not be mounted yet.`);
      }
    });
  }
  /**
   * Returns the editor state.
   */
  get state() {
    if (this.editorView) {
      this.editorState = this.view.state;
    }
    return this.editorState;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(plugin, handlePlugins) {
    const plugins = isFunction(handlePlugins) ? handlePlugins(plugin, [...this.state.plugins]) : [...this.state.plugins, plugin];
    const state = this.state.reconfigure({
      plugins
    });
    this.view.updateState(state);
    return state;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(nameOrPluginKeyToRemove) {
    if (this.isDestroyed) {
      return void 0;
    }
    const prevPlugins = this.state.plugins;
    let plugins = prevPlugins;
    [].concat(nameOrPluginKeyToRemove).forEach(nameOrPluginKey => {
      const name = typeof nameOrPluginKey === "string" ? `${nameOrPluginKey}$` : nameOrPluginKey.key;
      plugins = plugins.filter(plugin => !plugin.key.startsWith(name));
    });
    if (prevPlugins.length === plugins.length) {
      return void 0;
    }
    const state = this.state.reconfigure({
      plugins
    });
    this.view.updateState(state);
    return state;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var _a, _b;
    const coreExtensions = this.options.enableCoreExtensions ? [Editable, ClipboardTextSerializer.configure({
      blockSeparator: (_b = (_a = this.options.coreExtensionOptions) == null ? void 0 : _a.clipboardTextSerializer) == null ? void 0 : _b.blockSeparator
    }), Commands, FocusEvents, Keymap, Tabindex, Drop, Paste, Delete, TextDirection.configure({
      direction: this.options.textDirection
    })].filter(ext => {
      if (typeof this.options.enableCoreExtensions === "object") {
        return this.options.enableCoreExtensions[ext.name] !== false;
      }
      return true;
    }) : [];
    const allExtensions = [...coreExtensions, ...this.options.extensions].filter(extension => {
      return ["extension", "node", "mark"].includes(extension == null ? void 0 : extension.type);
    });
    this.extensionManager = new ExtensionManager(allExtensions, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new CommandManager({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates the initial document.
   */
  createDoc() {
    let doc;
    try {
      doc = createDocument(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (e) {
      if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) {
        throw e;
      }
      this.emit("contentError", {
        editor: this,
        error: e,
        disableCollaboration: () => {
          if ("collaboration" in this.storage && typeof this.storage.collaboration === "object" && this.storage.collaboration) {
            ;
            this.storage.collaboration.isDisabled = true;
          }
          this.options.extensions = this.options.extensions.filter(extension => extension.name !== "collaboration");
          this.createExtensionManager();
        }
      });
      doc = createDocument(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: false
      });
    }
    return doc;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView(element) {
    var _a;
    this.editorView = new import_view.EditorView(element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...((_a = this.options.editorProps) == null ? void 0 : _a.attributes)
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: this.editorState,
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
    const newState = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(newState);
    this.prependClass();
    this.injectCSS();
    const dom = this.view.dom;
    dom.editor = this;
  }
  /**
   * Creates all node and mark views.
   */
  createNodeViews() {
    if (this.view.isDestroyed) {
      return;
    }
    this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `${this.className} ${this.view.dom.className}`;
  }
  captureTransaction(fn) {
    this.isCapturingTransaction = true;
    fn();
    this.isCapturingTransaction = false;
    const tr = this.capturedTransaction;
    this.capturedTransaction = null;
    return tr;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(transaction) {
    if (this.view.isDestroyed) {
      return;
    }
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = transaction;
        return;
      }
      transaction.steps.forEach(step => {
        var _a;
        return (_a = this.capturedTransaction) == null ? void 0 : _a.step(step);
      });
      return;
    }
    const {
      state,
      transactions
    } = this.state.applyTransaction(transaction);
    const selectionHasChanged = !this.state.selection.eq(state.selection);
    const rootTrWasApplied = transactions.includes(transaction);
    const prevState = this.state;
    this.emit("beforeTransaction", {
      editor: this,
      transaction,
      nextState: state
    });
    if (!rootTrWasApplied) {
      return;
    }
    this.view.updateState(state);
    this.emit("transaction", {
      editor: this,
      transaction,
      appendedTransactions: transactions.slice(1)
    });
    if (selectionHasChanged) {
      this.emit("selectionUpdate", {
        editor: this,
        transaction
      });
    }
    const mostRecentFocusTr = transactions.findLast(tr => tr.getMeta("focus") || tr.getMeta("blur"));
    const focus2 = mostRecentFocusTr == null ? void 0 : mostRecentFocusTr.getMeta("focus");
    const blur2 = mostRecentFocusTr == null ? void 0 : mostRecentFocusTr.getMeta("blur");
    if (focus2) {
      this.emit("focus", {
        editor: this,
        event: focus2.event,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        transaction: mostRecentFocusTr
      });
    }
    if (blur2) {
      this.emit("blur", {
        editor: this,
        event: blur2.event,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        transaction: mostRecentFocusTr
      });
    }
    if (transaction.getMeta("preventUpdate") || !transactions.some(tr => tr.docChanged) || prevState.doc.eq(state.doc)) {
      return;
    }
    this.emit("update", {
      editor: this,
      transaction,
      appendedTransactions: transactions.slice(1)
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(nameOrType) {
    return getAttributes(this.state, nameOrType);
  }
  isActive(nameOrAttributes, attributesOrUndefined) {
    const name = typeof nameOrAttributes === "string" ? nameOrAttributes : null;
    const attributes = typeof nameOrAttributes === "string" ? attributesOrUndefined : nameOrAttributes;
    return isActive(this.state, name, attributes);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return getHTMLFromFragment(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(options) {
    const {
      blockSeparator = "\n\n",
      textSerializers = {}
    } = options || {};
    return getText(this.state.doc, {
      blockSeparator,
      textSerializers: {
        ...getTextSerializersFromSchema(this.schema),
        ...textSerializers
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return isNodeEmpty(this.state.doc);
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy");
    this.unmount();
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var _a, _b;
    return (_b = (_a = this.editorView) == null ? void 0 : _a.isDestroyed) != null ? _b : true;
  }
  $node(selector, attributes) {
    var _a;
    return ((_a = this.$doc) == null ? void 0 : _a.querySelector(selector, attributes)) || null;
  }
  $nodes(selector, attributes) {
    var _a;
    return ((_a = this.$doc) == null ? void 0 : _a.querySelectorAll(selector, attributes)) || null;
  }
  $pos(pos) {
    const $pos = this.state.doc.resolve(pos);
    return new NodePos($pos, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function markInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match);
      if (attributes === false || attributes === null) {
        return null;
      }
      const {
        tr
      } = state;
      const captureGroup = match[match.length - 1];
      const fullMatch = match[0];
      if (captureGroup) {
        const startSpaces = fullMatch.search(/\S/);
        const textStart = range.from + fullMatch.indexOf(captureGroup);
        const textEnd = textStart + captureGroup.length;
        const excludedMarks = getMarksBetween(range.from, range.to, state.doc).filter(item => {
          const excluded = item.mark.type.excluded;
          return excluded.find(type => type === config.type && type !== item.mark.type);
        }).filter(item => item.to > textStart);
        if (excludedMarks.length) {
          return null;
        }
        if (textEnd < range.to) {
          tr.delete(textEnd, range.to);
        }
        if (textStart > range.from) {
          tr.delete(range.from + startSpaces, textStart);
        }
        const markEnd = range.from + startSpaces + captureGroup.length;
        tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
        tr.removeStoredMark(config.type);
      }
    },
    undoable: config.undoable
  });
}
function nodeInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      const {
        tr
      } = state;
      const start = range.from;
      let end = range.to;
      const newNode = config.type.create(attributes);
      if (match[1]) {
        const offset = match[0].lastIndexOf(match[1]);
        let matchStart = start + offset;
        if (matchStart > end) {
          matchStart = end;
        } else {
          end = matchStart + match[1].length;
        }
        const lastChar = match[0][match[0].length - 1];
        tr.insertText(lastChar, start + match[0].length - 1);
        tr.replaceWith(matchStart, end, newNode);
      } else if (match[0]) {
        const insertionStart = config.type.isInline ? start : start - 1;
        tr.insert(insertionStart, config.type.create(attributes)).delete(tr.mapping.map(start), tr.mapping.map(end));
      }
      tr.scrollIntoView();
    },
    undoable: config.undoable
  });
}
function textblockTypeInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      const $start = state.doc.resolve(range.from);
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), config.type)) {
        return null;
      }
      state.tr.delete(range.from, range.to).setBlockType(range.from, range.from, config.type, attributes);
    },
    undoable: config.undoable
  });
}
function textInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      let insert = config.replace;
      let start = range.from;
      const end = range.to;
      if (match[1]) {
        const offset = match[0].lastIndexOf(match[1]);
        insert += match[0].slice(offset + match[1].length);
        start += offset;
        const cutOff = start - end;
        if (cutOff > 0) {
          insert = match[0].slice(offset - cutOff, offset) + insert;
          start = end;
        }
      }
      state.tr.insertText(insert, start, end);
    },
    undoable: config.undoable
  });
}
function wrappingInputRule(config) {
  return new InputRule({
    find: config.find,
    handler: ({
      state,
      range,
      match,
      chain
    }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
      const tr = state.tr.delete(range.from, range.to);
      const $start = tr.doc.resolve(range.from);
      const blockRange = $start.blockRange();
      const wrapping = blockRange && (0, import_transform10.findWrapping)(blockRange, config.type, attributes);
      if (!wrapping) {
        return null;
      }
      tr.wrap(blockRange, wrapping);
      if (config.keepMarks && config.editor) {
        const {
          selection,
          storedMarks
        } = state;
        const {
          splittableMarks
        } = config.editor.extensionManager;
        const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
        if (marks) {
          const filteredMarks = marks.filter(mark => splittableMarks.includes(mark.type.name));
          tr.ensureMarks(filteredMarks);
        }
      }
      if (config.keepAttributes) {
        const nodeType = config.type.name === "bulletList" || config.type.name === "orderedList" ? "listItem" : "taskList";
        chain().updateAttributes(nodeType, attributes).run();
      }
      const before = tr.doc.resolve(range.from - 1).nodeBefore;
      if (before && before.type === config.type && (0, import_transform10.canJoin)(tr.doc, range.from - 1) && (!config.joinPredicate || config.joinPredicate(match, before))) {
        tr.join(range.from - 1);
      }
    },
    undoable: config.undoable
  });
}
function Fragment6(props) {
  return props.children;
}
var h = (tag, attributes) => {
  if (tag === "slot") {
    return 0;
  }
  if (tag instanceof Function) {
    return tag(attributes);
  }
  const {
    children,
    ...rest
  } = attributes != null ? attributes : {};
  if (tag === "svg") {
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  }
  return [tag, rest, children];
};
var isTouchEvent = e => {
  return "touches" in e;
};
var ResizableNodeView = class {
  /**
   * Creates a new ResizableNodeView instance.
   *
   * The constructor sets up the resize handles, applies initial sizing from
   * node attributes, and configures all resize behavior options.
   *
   * @param options - Configuration options for the resizable node view
   */
  constructor(options) {
    this.directions = ["bottom-left", "bottom-right", "top-left", "top-right"];
    this.minSize = {
      height: 8,
      width: 8
    };
    this.preserveAspectRatio = false;
    this.classNames = {
      container: "",
      wrapper: "",
      handle: "",
      resizing: ""
    };
    this.initialWidth = 0;
    this.initialHeight = 0;
    this.aspectRatio = 1;
    this.isResizing = false;
    this.activeHandle = null;
    this.startX = 0;
    this.startY = 0;
    this.startWidth = 0;
    this.startHeight = 0;
    this.isShiftKeyPressed = false;
    this.handleMouseMove = event => {
      if (!this.isResizing || !this.activeHandle) {
        return;
      }
      const deltaX = event.clientX - this.startX;
      const deltaY = event.clientY - this.startY;
      this.handleResize(deltaX, deltaY);
    };
    this.handleTouchMove = event => {
      if (!this.isResizing || !this.activeHandle) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const deltaX = touch.clientX - this.startX;
      const deltaY = touch.clientY - this.startY;
      this.handleResize(deltaX, deltaY);
    };
    this.handleMouseUp = () => {
      if (!this.isResizing) {
        return;
      }
      const finalWidth = this.element.offsetWidth;
      const finalHeight = this.element.offsetHeight;
      this.onCommit(finalWidth, finalHeight);
      this.isResizing = false;
      this.activeHandle = null;
      this.container.dataset.resizeState = "false";
      if (this.classNames.resizing) {
        this.container.classList.remove(this.classNames.resizing);
      }
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);
    };
    this.handleKeyDown = event => {
      if (event.key === "Shift") {
        this.isShiftKeyPressed = true;
      }
    };
    this.handleKeyUp = event => {
      if (event.key === "Shift") {
        this.isShiftKeyPressed = false;
      }
    };
    var _a, _b, _c, _d, _e;
    this.node = options.node;
    this.element = options.element;
    this.contentElement = options.contentElement;
    this.getPos = options.getPos;
    this.onResize = options.onResize;
    this.onCommit = options.onCommit;
    this.onUpdate = options.onUpdate;
    if ((_a = options.options) == null ? void 0 : _a.min) {
      this.minSize = {
        ...this.minSize,
        ...options.options.min
      };
    }
    if ((_b = options.options) == null ? void 0 : _b.max) {
      this.maxSize = options.options.max;
    }
    if ((_c = options == null ? void 0 : options.options) == null ? void 0 : _c.directions) {
      this.directions = options.options.directions;
    }
    if ((_d = options.options) == null ? void 0 : _d.preserveAspectRatio) {
      this.preserveAspectRatio = options.options.preserveAspectRatio;
    }
    if ((_e = options.options) == null ? void 0 : _e.className) {
      this.classNames = {
        container: options.options.className.container || "",
        wrapper: options.options.className.wrapper || "",
        handle: options.options.className.handle || "",
        resizing: options.options.className.resizing || ""
      };
    }
    this.wrapper = this.createWrapper();
    this.container = this.createContainer();
    this.applyInitialSize();
    this.attachHandles();
  }
  /**
   * Returns the top-level DOM node that should be placed in the editor.
   *
   * This is required by the ProseMirror NodeView interface. The container
   * includes the wrapper, handles, and the actual content element.
   *
   * @returns The container element to be inserted into the editor
   */
  get dom() {
    return this.container;
  }
  get contentDOM() {
    return this.contentElement;
  }
  /**
   * Called when the node's content or attributes change.
   *
   * Updates the internal node reference. If a custom `onUpdate` callback
   * was provided, it will be called to handle additional update logic.
   *
   * @param node - The new/updated node
   * @param decorations - Node decorations
   * @param innerDecorations - Inner decorations
   * @returns `false` if the node type has changed (requires full rebuild), otherwise the result of `onUpdate` or `true`
   */
  update(node, decorations, innerDecorations) {
    if (node.type !== this.node.type) {
      return false;
    }
    this.node = node;
    if (this.onUpdate) {
      return this.onUpdate(node, decorations, innerDecorations);
    }
    return true;
  }
  /**
   * Cleanup method called when the node view is being removed.
   *
   * Removes all event listeners to prevent memory leaks. This is required
   * by the ProseMirror NodeView interface. If a resize is active when
   * destroy is called, it will be properly cancelled.
   */
  destroy() {
    if (this.isResizing) {
      this.container.dataset.resizeState = "false";
      if (this.classNames.resizing) {
        this.container.classList.remove(this.classNames.resizing);
      }
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);
      this.isResizing = false;
      this.activeHandle = null;
    }
    this.container.remove();
  }
  /**
   * Creates the outer container element.
   *
   * The container is the top-level element returned by the NodeView and
   * wraps the entire resizable node. It's set up with flexbox to handle
   * alignment and includes data attributes for styling and identification.
   *
   * @returns The container element
   */
  createContainer() {
    const element = document.createElement("div");
    element.dataset.resizeContainer = "";
    element.dataset.node = this.node.type.name;
    element.style.display = "flex";
    element.style.justifyContent = "flex-start";
    element.style.alignItems = "flex-start";
    if (this.classNames.container) {
      element.className = this.classNames.container;
    }
    element.appendChild(this.wrapper);
    return element;
  }
  /**
   * Creates the wrapper element that contains the content and handles.
   *
   * The wrapper uses relative positioning so that resize handles can be
   * positioned absolutely within it. This is the direct parent of the
   * content element being made resizable.
   *
   * @returns The wrapper element
   */
  createWrapper() {
    const element = document.createElement("div");
    element.style.position = "relative";
    element.style.display = "block";
    element.dataset.resizeWrapper = "";
    if (this.classNames.wrapper) {
      element.className = this.classNames.wrapper;
    }
    element.appendChild(this.element);
    return element;
  }
  /**
   * Creates a resize handle element for a specific direction.
   *
   * Each handle is absolutely positioned and includes a data attribute
   * identifying its direction for styling purposes.
   *
   * @param direction - The resize direction for this handle
   * @returns The handle element
   */
  createHandle(direction) {
    const handle = document.createElement("div");
    handle.dataset.resizeHandle = direction;
    handle.style.position = "absolute";
    if (this.classNames.handle) {
      handle.className = this.classNames.handle;
    }
    return handle;
  }
  /**
   * Positions a handle element according to its direction.
   *
   * Corner handles (e.g., 'top-left') are positioned at the intersection
   * of two edges. Edge handles (e.g., 'top') span the full width or height.
   *
   * @param handle - The handle element to position
   * @param direction - The direction determining the position
   */
  positionHandle(handle, direction) {
    const isTop = direction.includes("top");
    const isBottom = direction.includes("bottom");
    const isLeft = direction.includes("left");
    const isRight = direction.includes("right");
    if (isTop) {
      handle.style.top = "0";
    }
    if (isBottom) {
      handle.style.bottom = "0";
    }
    if (isLeft) {
      handle.style.left = "0";
    }
    if (isRight) {
      handle.style.right = "0";
    }
    if (direction === "top" || direction === "bottom") {
      handle.style.left = "0";
      handle.style.right = "0";
    }
    if (direction === "left" || direction === "right") {
      handle.style.top = "0";
      handle.style.bottom = "0";
    }
  }
  /**
   * Creates and attaches all resize handles to the wrapper.
   *
   * Iterates through the configured directions, creates a handle for each,
   * positions it, attaches the mousedown listener, and appends it to the DOM.
   */
  attachHandles() {
    this.directions.forEach(direction => {
      const handle = this.createHandle(direction);
      this.positionHandle(handle, direction);
      handle.addEventListener("mousedown", event => this.handleResizeStart(event, direction));
      handle.addEventListener("touchstart", event => this.handleResizeStart(event, direction));
      this.wrapper.appendChild(handle);
    });
  }
  /**
   * Applies initial sizing from node attributes to the element.
   *
   * If width/height attributes exist on the node, they're applied to the element.
   * Otherwise, the element's natural/current dimensions are measured. The aspect
   * ratio is calculated for later use in aspect-ratio-preserving resizes.
   */
  applyInitialSize() {
    const width = this.node.attrs.width;
    const height = this.node.attrs.height;
    if (width) {
      this.element.style.width = `${width}px`;
      this.initialWidth = width;
    } else {
      this.initialWidth = this.element.offsetWidth;
    }
    if (height) {
      this.element.style.height = `${height}px`;
      this.initialHeight = height;
    } else {
      this.initialHeight = this.element.offsetHeight;
    }
    if (this.initialWidth > 0 && this.initialHeight > 0) {
      this.aspectRatio = this.initialWidth / this.initialHeight;
    }
  }
  /**
   * Initiates a resize operation when a handle is clicked.
   *
   * Captures the starting mouse position and element dimensions, sets up
   * the resize state, adds the resizing class and state attribute, and
   * attaches document-level listeners for mouse movement and keyboard input.
   *
   * @param event - The mouse down event
   * @param direction - The direction of the handle being dragged
   */
  handleResizeStart(event, direction) {
    event.preventDefault();
    event.stopPropagation();
    this.isResizing = true;
    this.activeHandle = direction;
    if (isTouchEvent(event)) {
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    } else {
      this.startX = event.clientX;
      this.startY = event.clientY;
    }
    this.startWidth = this.element.offsetWidth;
    this.startHeight = this.element.offsetHeight;
    if (this.startWidth > 0 && this.startHeight > 0) {
      this.aspectRatio = this.startWidth / this.startHeight;
    }
    const pos = this.getPos();
    if (pos !== void 0) {}
    this.container.dataset.resizeState = "true";
    if (this.classNames.resizing) {
      this.container.classList.add(this.classNames.resizing);
    }
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("touchmove", this.handleTouchMove);
    document.addEventListener("mouseup", this.handleMouseUp);
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  handleResize(deltaX, deltaY) {
    if (!this.activeHandle) {
      return;
    }
    const shouldPreserveAspectRatio = this.preserveAspectRatio || this.isShiftKeyPressed;
    const {
      width,
      height
    } = this.calculateNewDimensions(this.activeHandle, deltaX, deltaY);
    const constrained = this.applyConstraints(width, height, shouldPreserveAspectRatio);
    this.element.style.width = `${constrained.width}px`;
    this.element.style.height = `${constrained.height}px`;
    if (this.onResize) {
      this.onResize(constrained.width, constrained.height);
    }
  }
  /**
   * Calculates new dimensions based on mouse delta and resize direction.
   *
   * Takes the starting dimensions and applies the mouse movement delta
   * according to the handle direction. For corner handles, both dimensions
   * are affected. For edge handles, only one dimension changes. If aspect
   * ratio should be preserved, delegates to applyAspectRatio.
   *
   * @param direction - The active resize handle direction
   * @param deltaX - Horizontal mouse movement since resize start
   * @param deltaY - Vertical mouse movement since resize start
   * @returns The calculated width and height
   */
  calculateNewDimensions(direction, deltaX, deltaY) {
    let newWidth = this.startWidth;
    let newHeight = this.startHeight;
    const isRight = direction.includes("right");
    const isLeft = direction.includes("left");
    const isBottom = direction.includes("bottom");
    const isTop = direction.includes("top");
    if (isRight) {
      newWidth = this.startWidth + deltaX;
    } else if (isLeft) {
      newWidth = this.startWidth - deltaX;
    }
    if (isBottom) {
      newHeight = this.startHeight + deltaY;
    } else if (isTop) {
      newHeight = this.startHeight - deltaY;
    }
    if (direction === "right" || direction === "left") {
      newWidth = this.startWidth + (isRight ? deltaX : -deltaX);
    }
    if (direction === "top" || direction === "bottom") {
      newHeight = this.startHeight + (isBottom ? deltaY : -deltaY);
    }
    const shouldPreserveAspectRatio = this.preserveAspectRatio || this.isShiftKeyPressed;
    if (shouldPreserveAspectRatio) {
      return this.applyAspectRatio(newWidth, newHeight, direction);
    }
    return {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Applies min/max constraints to dimensions.
   *
   * When aspect ratio is NOT preserved, constraints are applied independently
   * to width and height. When aspect ratio IS preserved, constraints are
   * applied while maintaining the aspect ratio—if one dimension hits a limit,
   * the other is recalculated proportionally.
   *
   * This ensures that aspect ratio is never broken when constrained.
   *
   * @param width - The unconstrained width
   * @param height - The unconstrained height
   * @param preserveAspectRatio - Whether to maintain aspect ratio while constraining
   * @returns The constrained dimensions
   */
  applyConstraints(width, height, preserveAspectRatio) {
    var _a, _b, _c, _d;
    if (!preserveAspectRatio) {
      let constrainedWidth2 = Math.max(this.minSize.width, width);
      let constrainedHeight2 = Math.max(this.minSize.height, height);
      if ((_a = this.maxSize) == null ? void 0 : _a.width) {
        constrainedWidth2 = Math.min(this.maxSize.width, constrainedWidth2);
      }
      if ((_b = this.maxSize) == null ? void 0 : _b.height) {
        constrainedHeight2 = Math.min(this.maxSize.height, constrainedHeight2);
      }
      return {
        width: constrainedWidth2,
        height: constrainedHeight2
      };
    }
    let constrainedWidth = width;
    let constrainedHeight = height;
    if (constrainedWidth < this.minSize.width) {
      constrainedWidth = this.minSize.width;
      constrainedHeight = constrainedWidth / this.aspectRatio;
    }
    if (constrainedHeight < this.minSize.height) {
      constrainedHeight = this.minSize.height;
      constrainedWidth = constrainedHeight * this.aspectRatio;
    }
    if (((_c = this.maxSize) == null ? void 0 : _c.width) && constrainedWidth > this.maxSize.width) {
      constrainedWidth = this.maxSize.width;
      constrainedHeight = constrainedWidth / this.aspectRatio;
    }
    if (((_d = this.maxSize) == null ? void 0 : _d.height) && constrainedHeight > this.maxSize.height) {
      constrainedHeight = this.maxSize.height;
      constrainedWidth = constrainedHeight * this.aspectRatio;
    }
    return {
      width: constrainedWidth,
      height: constrainedHeight
    };
  }
  /**
   * Adjusts dimensions to maintain the original aspect ratio.
   *
   * For horizontal handles (left/right), uses width as the primary dimension
   * and calculates height from it. For vertical handles (top/bottom), uses
   * height as primary and calculates width. For corner handles, uses width
   * as the primary dimension.
   *
   * @param width - The new width
   * @param height - The new height
   * @param direction - The active resize direction
   * @returns Dimensions adjusted to preserve aspect ratio
   */
  applyAspectRatio(width, height, direction) {
    const isHorizontal = direction === "left" || direction === "right";
    const isVertical = direction === "top" || direction === "bottom";
    if (isHorizontal) {
      return {
        width,
        height: width / this.aspectRatio
      };
    }
    if (isVertical) {
      return {
        width: height * this.aspectRatio,
        height
      };
    }
    return {
      width,
      height: width / this.aspectRatio
    };
  }
};
var ResizableNodeview = ResizableNodeView;
function canInsertNode(state, nodeType) {
  const {
    selection
  } = state;
  const {
    $from
  } = selection;
  if (selection instanceof import_state23.NodeSelection) {
    const index = $from.index();
    const parent = $from.parent;
    return parent.canReplaceWith(index, index + 1, nodeType);
  }
  let depth = $from.depth;
  while (depth >= 0) {
    const index = $from.index(depth);
    const parent = $from.node(depth);
    const match = parent.contentMatchAt(index);
    if (match.matchType(nodeType)) {
      return true;
    }
    depth -= 1;
  }
  return false;
}
function escapeForRegEx(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function isString(value) {
  return typeof value === "string";
}
var markdown_exports = {};
__export2(markdown_exports, {
  createAtomBlockMarkdownSpec: () => createAtomBlockMarkdownSpec,
  createBlockMarkdownSpec: () => createBlockMarkdownSpec,
  createInlineMarkdownSpec: () => createInlineMarkdownSpec,
  parseAttributes: () => parseAttributes,
  parseIndentedBlocks: () => parseIndentedBlocks,
  renderNestedMarkdownContent: () => renderNestedMarkdownContent,
  serializeAttributes: () => serializeAttributes
});
function parseAttributes(attrString) {
  if (!(attrString == null ? void 0 : attrString.trim())) {
    return {};
  }
  const attributes = {};
  const quotedStrings = [];
  const tempString = attrString.replace(/["']([^"']*)["']/g, match => {
    quotedStrings.push(match);
    return `__QUOTED_${quotedStrings.length - 1}__`;
  });
  const classMatches = tempString.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (classMatches) {
    const classes = classMatches.map(match => match.trim().slice(1));
    attributes.class = classes.join(" ");
  }
  const idMatch = tempString.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  if (idMatch) {
    attributes.id = idMatch[1];
  }
  const kvRegex = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  const kvMatches = Array.from(tempString.matchAll(kvRegex));
  kvMatches.forEach(([, key, quotedRef]) => {
    var _a;
    const quotedIndex = parseInt(((_a = quotedRef.match(/__QUOTED_(\d+)__/)) == null ? void 0 : _a[1]) || "0", 10);
    const quotedValue = quotedStrings[quotedIndex];
    if (quotedValue) {
      attributes[key] = quotedValue.slice(1, -1);
    }
  });
  const cleanString = tempString.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  if (cleanString) {
    const booleanAttrs = cleanString.split(/\s+/).filter(Boolean);
    booleanAttrs.forEach(attr => {
      if (attr.match(/^[a-zA-Z][\w-]*$/)) {
        attributes[attr] = true;
      }
    });
  }
  return attributes;
}
function serializeAttributes(attributes) {
  if (!attributes || Object.keys(attributes).length === 0) {
    return "";
  }
  const parts = [];
  if (attributes.class) {
    const classes = String(attributes.class).split(/\s+/).filter(Boolean);
    classes.forEach(cls => parts.push(`.${cls}`));
  }
  if (attributes.id) {
    parts.push(`#${attributes.id}`);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "class" || key === "id") {
      return;
    }
    if (value === true) {
      parts.push(key);
    } else if (value !== false && value != null) {
      parts.push(`${key}="${String(value)}"`);
    }
  });
  return parts.join(" ");
}
function createAtomBlockMarkdownSpec(options) {
  const {
    nodeName,
    name: markdownName,
    parseAttributes: parseAttributes2 = parseAttributes,
    serializeAttributes: serializeAttributes2 = serializeAttributes,
    defaultAttributes = {},
    requiredAttributes = [],
    allowedAttributes
  } = options;
  const blockName = markdownName || nodeName;
  const filterAttributes = attrs => {
    if (!allowedAttributes) {
      return attrs;
    }
    const filtered = {};
    allowedAttributes.forEach(key => {
      if (key in attrs) {
        filtered[key] = attrs[key];
      }
    });
    return filtered;
  };
  return {
    parseMarkdown: (token, h2) => {
      const attrs = {
        ...defaultAttributes,
        ...token.attributes
      };
      return h2.createNode(nodeName, attrs, []);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "block",
      start(src) {
        var _a;
        const regex = new RegExp(`^:::${blockName}(?:\\s|$)`, "m");
        const index = (_a = src.match(regex)) == null ? void 0 : _a.index;
        return index !== void 0 ? index : -1;
      },
      tokenize(src, _tokens, _lexer) {
        const regex = new RegExp(`^:::${blockName}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`);
        const match = src.match(regex);
        if (!match) {
          return void 0;
        }
        const attrString = match[1] || "";
        const attributes = parseAttributes2(attrString);
        const missingRequired = requiredAttributes.find(required => !(required in attributes));
        if (missingRequired) {
          return void 0;
        }
        return {
          type: nodeName,
          raw: match[0],
          attributes
        };
      }
    },
    renderMarkdown: node => {
      const filteredAttrs = filterAttributes(node.attrs || {});
      const attrs = serializeAttributes2(filteredAttrs);
      const attrString = attrs ? ` {${attrs}}` : "";
      return `:::${blockName}${attrString} :::`;
    }
  };
}
function createBlockMarkdownSpec(options) {
  const {
    nodeName,
    name: markdownName,
    getContent,
    parseAttributes: parseAttributes2 = parseAttributes,
    serializeAttributes: serializeAttributes2 = serializeAttributes,
    defaultAttributes = {},
    content = "block",
    allowedAttributes
  } = options;
  const blockName = markdownName || nodeName;
  const filterAttributes = attrs => {
    if (!allowedAttributes) {
      return attrs;
    }
    const filtered = {};
    allowedAttributes.forEach(key => {
      if (key in attrs) {
        filtered[key] = attrs[key];
      }
    });
    return filtered;
  };
  return {
    parseMarkdown: (token, h2) => {
      let nodeContent;
      if (getContent) {
        const contentResult = getContent(token);
        nodeContent = typeof contentResult === "string" ? [{
          type: "text",
          text: contentResult
        }] : contentResult;
      } else if (content === "block") {
        nodeContent = h2.parseChildren(token.tokens || []);
      } else {
        nodeContent = h2.parseInline(token.tokens || []);
      }
      const attrs = {
        ...defaultAttributes,
        ...token.attributes
      };
      return h2.createNode(nodeName, attrs, nodeContent);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "block",
      start(src) {
        var _a;
        const regex = new RegExp(`^:::${blockName}`, "m");
        const index = (_a = src.match(regex)) == null ? void 0 : _a.index;
        return index !== void 0 ? index : -1;
      },
      tokenize(src, _tokens, lexer) {
        var _a;
        const openingRegex = new RegExp(`^:::${blockName}(?:\\s+\\{([^}]*)\\})?\\s*\\n`);
        const openingMatch = src.match(openingRegex);
        if (!openingMatch) {
          return void 0;
        }
        const [openingTag, attrString = ""] = openingMatch;
        const attributes = parseAttributes2(attrString);
        let level = 1;
        const position = openingTag.length;
        let matchedContent = "";
        const blockPattern = /^:::([\w-]*)(\s.*)?/gm;
        const remaining = src.slice(position);
        blockPattern.lastIndex = 0;
        for (;;) {
          const match = blockPattern.exec(remaining);
          if (match === null) {
            break;
          }
          const matchPos = match.index;
          const blockType = match[1];
          if ((_a = match[2]) == null ? void 0 : _a.endsWith(":::")) {
            continue;
          }
          if (blockType) {
            level += 1;
          } else {
            level -= 1;
            if (level === 0) {
              const rawContent = remaining.slice(0, matchPos);
              matchedContent = rawContent.trim();
              const fullMatch = src.slice(0, position + matchPos + match[0].length);
              let contentTokens = [];
              if (matchedContent) {
                if (content === "block") {
                  contentTokens = lexer.blockTokens(rawContent);
                  contentTokens.forEach(token => {
                    if (token.text && (!token.tokens || token.tokens.length === 0)) {
                      token.tokens = lexer.inlineTokens(token.text);
                    }
                  });
                  while (contentTokens.length > 0) {
                    const lastToken = contentTokens[contentTokens.length - 1];
                    if (lastToken.type === "paragraph" && (!lastToken.text || lastToken.text.trim() === "")) {
                      contentTokens.pop();
                    } else {
                      break;
                    }
                  }
                } else {
                  contentTokens = lexer.inlineTokens(matchedContent);
                }
              }
              return {
                type: nodeName,
                raw: fullMatch,
                attributes,
                content: matchedContent,
                tokens: contentTokens
              };
            }
          }
        }
        return void 0;
      }
    },
    renderMarkdown: (node, h2) => {
      const filteredAttrs = filterAttributes(node.attrs || {});
      const attrs = serializeAttributes2(filteredAttrs);
      const attrString = attrs ? ` {${attrs}}` : "";
      const renderedContent = h2.renderChildren(node.content || [], "\n\n");
      return `:::${blockName}${attrString}

${renderedContent}

:::`;
    }
  };
}
function parseShortcodeAttributes(attrString) {
  if (!attrString.trim()) {
    return {};
  }
  const attributes = {};
  const regex = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let match = regex.exec(attrString);
  while (match !== null) {
    const [, key, doubleQuoted, singleQuoted] = match;
    attributes[key] = doubleQuoted || singleQuoted;
    match = regex.exec(attrString);
  }
  return attributes;
}
function serializeShortcodeAttributes(attrs) {
  return Object.entries(attrs).filter(([, value]) => value !== void 0 && value !== null).map(([key, value]) => `${key}="${value}"`).join(" ");
}
function createInlineMarkdownSpec(options) {
  const {
    nodeName,
    name: shortcodeName,
    getContent,
    parseAttributes: parseAttributes2 = parseShortcodeAttributes,
    serializeAttributes: serializeAttributes2 = serializeShortcodeAttributes,
    defaultAttributes = {},
    selfClosing = false,
    allowedAttributes
  } = options;
  const shortcode = shortcodeName || nodeName;
  const filterAttributes = attrs => {
    if (!allowedAttributes) {
      return attrs;
    }
    const filtered = {};
    allowedAttributes.forEach(key => {
      if (key in attrs) {
        filtered[key] = attrs[key];
      }
    });
    return filtered;
  };
  const escapedShortcode = shortcode.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (token, h2) => {
      const attrs = {
        ...defaultAttributes,
        ...token.attributes
      };
      if (selfClosing) {
        return h2.createNode(nodeName, attrs);
      }
      const content = getContent ? getContent(token) : token.content || "";
      if (content) {
        return h2.createNode(nodeName, attrs, [h2.createTextNode(content)]);
      }
      return h2.createNode(nodeName, attrs, []);
    },
    markdownTokenizer: {
      name: nodeName,
      level: "inline",
      start(src) {
        const startPattern = selfClosing ? new RegExp(`\\[${escapedShortcode}\\s*[^\\]]*\\]`) : new RegExp(`\\[${escapedShortcode}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${escapedShortcode}\\]`);
        const match = src.match(startPattern);
        const index = match == null ? void 0 : match.index;
        return index !== void 0 ? index : -1;
      },
      tokenize(src, _tokens, _lexer) {
        const tokenPattern = selfClosing ? new RegExp(`^\\[${escapedShortcode}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${escapedShortcode}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${escapedShortcode}\\]`);
        const match = src.match(tokenPattern);
        if (!match) {
          return void 0;
        }
        let content = "";
        let attrString = "";
        if (selfClosing) {
          const [, attrs] = match;
          attrString = attrs;
        } else {
          const [, attrs, contentMatch] = match;
          attrString = attrs;
          content = contentMatch || "";
        }
        const attributes = parseAttributes2(attrString.trim());
        return {
          type: nodeName,
          raw: match[0],
          content: content.trim(),
          attributes
        };
      }
    },
    renderMarkdown: node => {
      let content = "";
      if (getContent) {
        content = getContent(node);
      } else if (node.content && node.content.length > 0) {
        content = node.content.filter(child => child.type === "text").map(child => child.text).join("");
      }
      const filteredAttrs = filterAttributes(node.attrs || {});
      const attrs = serializeAttributes2(filteredAttrs);
      const attrString = attrs ? ` ${attrs}` : "";
      if (selfClosing) {
        return `[${shortcode}${attrString}]`;
      }
      return `[${shortcode}${attrString}]${content}[/${shortcode}]`;
    }
  };
}
function parseIndentedBlocks(src, config, lexer) {
  var _a, _b, _c, _d;
  const lines = src.split("\n");
  const items = [];
  let totalRaw = "";
  let i = 0;
  const baseIndentSize = config.baseIndentSize || 2;
  while (i < lines.length) {
    const currentLine = lines[i];
    const itemMatch = currentLine.match(config.itemPattern);
    if (!itemMatch) {
      if (items.length > 0) {
        break;
      } else if (currentLine.trim() === "") {
        i += 1;
        totalRaw = `${totalRaw}${currentLine}
`;
        continue;
      } else {
        return void 0;
      }
    }
    const itemData = config.extractItemData(itemMatch);
    const {
      indentLevel,
      mainContent
    } = itemData;
    totalRaw = `${totalRaw}${currentLine}
`;
    const itemContent = [mainContent];
    i += 1;
    while (i < lines.length) {
      const nextLine = lines[i];
      if (nextLine.trim() === "") {
        const nextNonEmptyIndex = lines.slice(i + 1).findIndex(l => l.trim() !== "");
        if (nextNonEmptyIndex === -1) {
          break;
        }
        const nextNonEmpty = lines[i + 1 + nextNonEmptyIndex];
        const nextIndent2 = ((_b = (_a = nextNonEmpty.match(/^(\s*)/)) == null ? void 0 : _a[1]) == null ? void 0 : _b.length) || 0;
        if (nextIndent2 > indentLevel) {
          itemContent.push(nextLine);
          totalRaw = `${totalRaw}${nextLine}
`;
          i += 1;
          continue;
        } else {
          break;
        }
      }
      const nextIndent = ((_d = (_c = nextLine.match(/^(\s*)/)) == null ? void 0 : _c[1]) == null ? void 0 : _d.length) || 0;
      if (nextIndent > indentLevel) {
        itemContent.push(nextLine);
        totalRaw = `${totalRaw}${nextLine}
`;
        i += 1;
      } else {
        break;
      }
    }
    let nestedTokens;
    const nestedContent = itemContent.slice(1);
    if (nestedContent.length > 0) {
      const dedentedNested = nestedContent.map(nestedLine => nestedLine.slice(indentLevel + baseIndentSize)).join("\n");
      if (dedentedNested.trim()) {
        if (config.customNestedParser) {
          nestedTokens = config.customNestedParser(dedentedNested);
        } else {
          nestedTokens = lexer.blockTokens(dedentedNested);
        }
      }
    }
    const token = config.createToken(itemData, nestedTokens);
    items.push(token);
  }
  if (items.length === 0) {
    return void 0;
  }
  return {
    items,
    raw: totalRaw
  };
}
function renderNestedMarkdownContent(node, h2, prefixOrGenerator, ctx) {
  if (!node || !Array.isArray(node.content)) {
    return "";
  }
  const prefix = typeof prefixOrGenerator === "function" ? prefixOrGenerator(ctx) : prefixOrGenerator;
  const [content, ...children] = node.content;
  const mainContent = h2.renderChildren([content]);
  const output = [`${prefix}${mainContent}`];
  if (children && children.length > 0) {
    children.forEach(child => {
      const childContent = h2.renderChildren([child]);
      if (childContent) {
        const indentedChild = childContent.split("\n").map(line => line ? h2.indent(line) : "").join("\n");
        output.push(indentedChild);
      }
    });
  }
  return output.join("\n");
}
function updateMarkViewAttributes(checkMark, editor, attrs = {}) {
  const {
    state
  } = editor;
  const {
    doc,
    tr
  } = state;
  const thisMark = checkMark;
  doc.descendants((node, pos) => {
    const from = tr.mapping.map(pos);
    const to = tr.mapping.map(pos) + node.nodeSize;
    let foundMark = null;
    node.marks.forEach(mark => {
      if (mark !== thisMark) {
        return false;
      }
      foundMark = mark;
    });
    if (!foundMark) {
      return;
    }
    let needsUpdate = false;
    Object.keys(attrs).forEach(k => {
      if (attrs[k] !== foundMark.attrs[k]) {
        needsUpdate = true;
      }
    });
    if (needsUpdate) {
      const updatedMark = checkMark.type.create({
        ...checkMark.attrs,
        ...attrs
      });
      tr.removeMark(from, to, checkMark.type);
      tr.addMark(from, to, updatedMark);
    }
  });
  if (tr.docChanged) {
    editor.view.dispatch(tr);
  }
}
var MarkView = class {
  constructor(component, props, options) {
    this.component = component;
    this.editor = props.editor;
    this.options = {
      ...options
    };
    this.mark = props.mark;
    this.HTMLAttributes = props.HTMLAttributes;
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  /**
   * Update the attributes of the mark in the document.
   * @param attrs The attributes to update.
   */
  updateAttributes(attrs, checkMark) {
    updateMarkViewAttributes(checkMark || this.mark, this.editor, attrs);
  }
  ignoreMutation(mutation) {
    if (!this.dom || !this.contentDOM) {
      return true;
    }
    if (typeof this.options.ignoreMutation === "function") {
      return this.options.ignoreMutation({
        mutation
      });
    }
    if (mutation.type === "selection") {
      return false;
    }
    if (this.dom.contains(mutation.target) && mutation.type === "childList" && (isiOS() || isAndroid()) && this.editor.isFocused) {
      const changedNodes = [...Array.from(mutation.addedNodes), ...Array.from(mutation.removedNodes)];
      if (changedNodes.every(node => node.isContentEditable)) {
        return false;
      }
    }
    if (this.contentDOM === mutation.target && mutation.type === "attributes") {
      return true;
    }
    if (this.contentDOM.contains(mutation.target)) {
      return false;
    }
    return true;
  }
};
var Node3 = class _Node extends Extendable {
  constructor() {
    super(...arguments);
    this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(config = {}) {
    const resolvedConfig = typeof config === "function" ? config() : config;
    return new _Node(resolvedConfig);
  }
  configure(options) {
    return super.configure(options);
  }
  extend(extendedConfig) {
    const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
    return super.extend(resolvedConfig);
  }
};
var NodeView = class {
  constructor(component, props, options) {
    this.isDragging = false;
    this.component = component;
    this.editor = props.editor;
    this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...options
    };
    this.extension = props.extension;
    this.node = props.node;
    this.decorations = props.decorations;
    this.innerDecorations = props.innerDecorations;
    this.view = props.view;
    this.HTMLAttributes = props.HTMLAttributes;
    this.getPos = props.getPos;
    this.mount();
  }
  mount() {
    return;
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(event) {
    var _a, _b, _c, _d, _e, _f, _g;
    const {
      view
    } = this.editor;
    const target = event.target;
    const dragHandle = target.nodeType === 3 ? (_a = target.parentElement) == null ? void 0 : _a.closest("[data-drag-handle]") : target.closest("[data-drag-handle]");
    if (!this.dom || ((_b = this.contentDOM) == null ? void 0 : _b.contains(target)) || !dragHandle) {
      return;
    }
    let x = 0;
    let y = 0;
    if (this.dom !== dragHandle) {
      const domBox = this.dom.getBoundingClientRect();
      const handleBox = dragHandle.getBoundingClientRect();
      const offsetX = (_d = event.offsetX) != null ? _d : (_c = event.nativeEvent) == null ? void 0 : _c.offsetX;
      const offsetY = (_f = event.offsetY) != null ? _f : (_e = event.nativeEvent) == null ? void 0 : _e.offsetY;
      x = handleBox.x - domBox.x + offsetX;
      y = handleBox.y - domBox.y + offsetY;
    }
    const clonedNode = this.dom.cloneNode(true);
    try {
      const domBox = this.dom.getBoundingClientRect();
      clonedNode.style.width = `${Math.round(domBox.width)}px`;
      clonedNode.style.height = `${Math.round(domBox.height)}px`;
      clonedNode.style.boxSizing = "border-box";
      clonedNode.style.pointerEvents = "none";
    } catch {}
    let dragImageWrapper = null;
    try {
      dragImageWrapper = document.createElement("div");
      dragImageWrapper.style.position = "absolute";
      dragImageWrapper.style.top = "-9999px";
      dragImageWrapper.style.left = "-9999px";
      dragImageWrapper.style.pointerEvents = "none";
      dragImageWrapper.appendChild(clonedNode);
      document.body.appendChild(dragImageWrapper);
      (_g = event.dataTransfer) == null ? void 0 : _g.setDragImage(clonedNode, x, y);
    } finally {
      if (dragImageWrapper) {
        setTimeout(() => {
          try {
            dragImageWrapper == null ? void 0 : dragImageWrapper.remove();
          } catch {}
        }, 0);
      }
    }
    const pos = this.getPos();
    if (typeof pos !== "number") {
      return;
    }
    const selection = import_state24.NodeSelection.create(view.state.doc, pos);
    const transaction = view.state.tr.setSelection(selection);
    view.dispatch(transaction);
  }
  stopEvent(event) {
    var _a;
    if (!this.dom) {
      return false;
    }
    if (typeof this.options.stopEvent === "function") {
      return this.options.stopEvent({
        event
      });
    }
    const target = event.target;
    const isInElement = this.dom.contains(target) && !((_a = this.contentDOM) == null ? void 0 : _a.contains(target));
    if (!isInElement) {
      return false;
    }
    const isDragEvent = event.type.startsWith("drag");
    const isDropEvent = event.type === "drop";
    const isInput = ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(target.tagName) || target.isContentEditable;
    if (isInput && !isDropEvent && !isDragEvent) {
      return true;
    }
    const {
      isEditable
    } = this.editor;
    const {
      isDragging
    } = this;
    const isDraggable = !!this.node.type.spec.draggable;
    const isSelectable = import_state24.NodeSelection.isSelectable(this.node);
    const isCopyEvent = event.type === "copy";
    const isPasteEvent = event.type === "paste";
    const isCutEvent = event.type === "cut";
    const isClickEvent = event.type === "mousedown";
    if (!isDraggable && isSelectable && isDragEvent && event.target === this.dom) {
      event.preventDefault();
    }
    if (isDraggable && isDragEvent && !isDragging && event.target === this.dom) {
      event.preventDefault();
      return false;
    }
    if (isDraggable && isEditable && !isDragging && isClickEvent) {
      const dragHandle = target.closest("[data-drag-handle]");
      const isValidDragHandle = dragHandle && (this.dom === dragHandle || this.dom.contains(dragHandle));
      if (isValidDragHandle) {
        this.isDragging = true;
        document.addEventListener("dragend", () => {
          this.isDragging = false;
        }, {
          once: true
        });
        document.addEventListener("drop", () => {
          this.isDragging = false;
        }, {
          once: true
        });
        document.addEventListener("mouseup", () => {
          this.isDragging = false;
        }, {
          once: true
        });
      }
    }
    if (isDragging || isDropEvent || isCopyEvent || isPasteEvent || isCutEvent || isClickEvent && isSelectable) {
      return false;
    }
    return true;
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(mutation) {
    if (!this.dom || !this.contentDOM) {
      return true;
    }
    if (typeof this.options.ignoreMutation === "function") {
      return this.options.ignoreMutation({
        mutation
      });
    }
    if (this.node.isLeaf || this.node.isAtom) {
      return true;
    }
    if (mutation.type === "selection") {
      return false;
    }
    if (this.dom.contains(mutation.target) && mutation.type === "childList" && (isiOS() || isAndroid()) && this.editor.isFocused) {
      const changedNodes = [...Array.from(mutation.addedNodes), ...Array.from(mutation.removedNodes)];
      if (changedNodes.every(node => node.isContentEditable)) {
        return false;
      }
    }
    if (this.contentDOM === mutation.target && mutation.type === "attributes") {
      return true;
    }
    if (this.contentDOM.contains(mutation.target)) {
      return false;
    }
    return true;
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(attributes) {
    this.editor.commands.command(({
      tr
    }) => {
      const pos = this.getPos();
      if (typeof pos !== "number") {
        return false;
      }
      tr.setNodeMarkup(pos, void 0, {
        ...this.node.attrs,
        ...attributes
      });
      return true;
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const from = this.getPos();
    if (typeof from !== "number") {
      return;
    }
    const to = from + this.node.nodeSize;
    this.editor.commands.deleteRange({
      from,
      to
    });
  }
};
function markPasteRule(config) {
  return new PasteRule({
    find: config.find,
    handler: ({
      state,
      range,
      match,
      pasteEvent
    }) => {
      const attributes = callOrReturn(config.getAttributes, void 0, match, pasteEvent);
      if (attributes === false || attributes === null) {
        return null;
      }
      const {
        tr
      } = state;
      const captureGroup = match[match.length - 1];
      const fullMatch = match[0];
      let markEnd = range.to;
      if (captureGroup) {
        const startSpaces = fullMatch.search(/\S/);
        const textStart = range.from + fullMatch.indexOf(captureGroup);
        const textEnd = textStart + captureGroup.length;
        const excludedMarks = getMarksBetween(range.from, range.to, state.doc).filter(item => {
          const excluded = item.mark.type.excluded;
          return excluded.find(type => type === config.type && type !== item.mark.type);
        }).filter(item => item.to > textStart);
        if (excludedMarks.length) {
          return null;
        }
        if (textEnd < range.to) {
          tr.delete(textEnd, range.to);
        }
        if (textStart > range.from) {
          tr.delete(range.from + startSpaces, textStart);
        }
        markEnd = range.from + startSpaces + captureGroup.length;
        tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
        tr.removeStoredMark(config.type);
      }
    }
  });
}
function nodePasteRule(config) {
  return new PasteRule({
    find: config.find,
    handler({
      match,
      chain,
      range,
      pasteEvent
    }) {
      const attributes = callOrReturn(config.getAttributes, void 0, match, pasteEvent);
      const content = callOrReturn(config.getContent, void 0, attributes);
      if (attributes === false || attributes === null) {
        return null;
      }
      const node = {
        type: config.type.name,
        attrs: attributes
      };
      if (content) {
        node.content = content;
      }
      if (match.input) {
        chain().deleteRange(range).insertContentAt(range.from, node);
      }
    }
  });
}
function textPasteRule(config) {
  return new PasteRule({
    find: config.find,
    handler: ({
      state,
      range,
      match
    }) => {
      let insert = config.replace;
      let start = range.from;
      const end = range.to;
      if (match[1]) {
        const offset = match[0].lastIndexOf(match[1]);
        insert += match[0].slice(offset + match[1].length);
        start += offset;
        const cutOff = start - end;
        if (cutOff > 0) {
          insert = match[0].slice(offset - cutOff, offset) + insert;
          start = end;
        }
      }
      state.tr.insertText(insert, start, end);
    }
  });
}
var Tracker = class {
  constructor(transaction) {
    this.transaction = transaction;
    this.currentStep = this.transaction.steps.length;
  }
  map(position) {
    let deleted = false;
    const mappedPosition = this.transaction.steps.slice(this.currentStep).reduce((newPosition, step) => {
      const mapResult = step.getMap().mapResult(newPosition);
      if (mapResult.deleted) {
        deleted = true;
      }
      return mapResult.pos;
    }, position);
    return {
      position: mappedPosition,
      deleted
    };
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2NvcmUuMy4xMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY2xlYXJOb2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NyZWF0ZVBhcmFncmFwaE5lYXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9leGl0Q29kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2V4dGVuZE1hcmtSYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNUZXh0U2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9yZXNvbHZlRm9jdXNQb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luc2VydENvbnRlbnRBdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvY3JlYXRlTm9kZUZyb21Db250ZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zZWxlY3Rpb25Ub0luc2VydGlvbkVuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luSXRlbUJhY2t3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pbkl0ZW1Gb3J3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pblRleHRibG9ja0JhY2t3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pblRleHRibG9ja0ZvcndhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9saWZ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbGlmdEVtcHR5QmxvY2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9saWZ0TGlzdEl0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9uZXdsaW5lSW5Db2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2VsZWN0QWxsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2VsZWN0Tm9kZUJhY2t3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2VsZWN0Tm9kZUZvcndhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RQYXJlbnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2VsZWN0VGV4dGJsb2NrRW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2VsZWN0VGV4dGJsb2NrU3RhcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NvbWJpbmVUcmFuc2FjdGlvblN0ZXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZW5lcmF0ZUhUTUwudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEhUTUxGcm9tRnJhZ21lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYUJ5UmVzb2x2ZWRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZW5lcmF0ZUpTT04udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlVGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNOb2RlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE5vZGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRUZXh0U2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2lua0xpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc3BsaXRCbG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NwbGl0TGlzdEl0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVMaXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvd3JhcEluLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvd3JhcEluTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0VkaXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuc2lvbk1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9JbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9QYXN0ZVJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2NsaXBib2FyZFRleHRTZXJpYWxpemVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9kZWxldGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2Ryb3AudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2VkaXRhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9mb2N1c0V2ZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMva2V5bWFwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9wYXN0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvdGFiaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL3RleHREaXJlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9pbnB1dFJ1bGVzL3dyYXBwaW5nSW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2Nhbkluc2VydE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9Ob2RlVmlldy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvY3JlYXRlQ2hhaW5hYmxlU3RhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9Db21tYW5kTWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvYmx1ci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NsZWFyQ29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NvbW1hbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVDdXJyZW50Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0Tm9kZVR5cGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9lbnRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1JlZ0V4cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9vYmplY3RJbmNsdWRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya1JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrVHlwZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZpcnN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21pbk1heC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc0FuZHJvaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNpT1MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9mb2N1cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZvckVhY2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9pbnNlcnRDb250ZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2VsZW1lbnRGcm9tU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzTWFjT1MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9rZXlib2FyZFNob3J0Y3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYVR5cGVOYW1lQnlOYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2RlbGV0ZVByb3BzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvcmVzZXRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2Nyb2xsSW50b1ZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NyZWF0ZURvY3VtZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Q29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya0F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2RlZmF1bHRCbG9ja0F0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9maW5kQ2hpbGRyZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRDaGlsZHJlbkluUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRQYXJlbnROb2RlQ2xvc2VzdFRvUG9zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9maW5kUGFyZW50Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0RXh0ZW5zaW9uRmllbGQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZsYXR0ZW5FeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzRnVuY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvY2FsbE9yUmV0dXJuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzRW1wdHlPYmplY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3NwbGl0RXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0QXR0cmlidXRlc0Zyb21FeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21lcmdlQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0UmVuZGVyZWRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2Zyb21TdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2luamVjdEV4dGVuc2lvbkF0dHJpYnV0ZXNUb1BhcnNlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9maW5kRHVwbGljYXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvc29ydEV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Jlc29sdmVFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTY2hlbWEudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHRCZXR3ZWVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0U2VyaWFsaXplcnNGcm9tU2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0QXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9yZW1vdmVEdXBsaWNhdGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRDaGFuZ2VkUmFuZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXREZWJ1Z0pTT04udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtzQmV0d2Vlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0Tm9kZUF0UG9zaXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYVR5cGVCeU5hbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNwbGl0dGVkQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dENvbnRlbnRGcm9tTm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTWFya0FjdGl2ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQXRFbmRPZk5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQXRTdGFydE9mTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNFeHRlbnNpb25SdWxlc0VuYWJsZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNOb2RlRW1wdHkudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL01hcHBhYmxlUG9zaXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Bvc1RvRE9NUmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcmV3cml0ZVVua25vd25Db250ZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0TWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE1ldGEudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRUZXh0RGlyZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlTWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZU5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVXcmFwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdW5kb0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Vuc2V0QWxsTWFya3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bnNldE1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bnNldFRleHREaXJlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91cGRhdGVBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvRXZlbnRFbWl0dGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzUGxhaW5PYmplY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWVyZ2VEZWVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvRXh0ZW5kYWJsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL01hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNOdW1iZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvRXh0ZW5zaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9jb21tYW5kcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGVQb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9zdHlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jcmVhdGVTdHlsZVRhZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvbWFya0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvbm9kZUlucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvdGV4dGJsb2NrVHlwZUlucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvdGV4dElucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2pzeC1ydW50aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvbGliL1Jlc2l6YWJsZU5vZGVWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2VzY2FwZUZvclJlZ0V4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21hcmtkb3duL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21hcmtkb3duL2F0dHJpYnV0ZVV0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21hcmtkb3duL2NyZWF0ZUF0b21CbG9ja01hcmtkb3duU3BlYy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tYXJrZG93bi9jcmVhdGVCbG9ja01hcmtkb3duU3BlYy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tYXJrZG93bi9jcmVhdGVJbmxpbmVNYXJrZG93blNwZWMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWFya2Rvd24vcGFyc2VJbmRlbnRlZEJsb2Nrcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tYXJrZG93bi9yZW5kZXJOZXN0ZWRNYXJrZG93bkNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9NYXJrVmlldy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9wYXN0ZVJ1bGVzL21hcmtQYXN0ZVJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9wYXN0ZVJ1bGVzL25vZGVQYXN0ZVJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9wYXN0ZVJ1bGVzL3RleHRQYXN0ZVJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9UcmFja2VyLnRzIl0sIm5hbWVzIjpbImNvcmVfM18xMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNvbW1hbmRNYW5hZ2VyIiwiRWRpdG9yIiwiRXh0ZW5kYWJsZSIsIkV4dGVuc2lvbiIsIkZyYWdtZW50IiwiRnJhZ21lbnQ2IiwiSW5wdXRSdWxlIiwiTWFwcGFibGVQb3NpdGlvbiIsIk1hcmsiLCJNYXJrVmlldyIsIk5vZGUiLCJOb2RlMyIsIk5vZGVQb3MiLCJOb2RlVmlldyIsIlBhc3RlUnVsZSIsIlJlc2l6YWJsZU5vZGVWaWV3IiwiUmVzaXphYmxlTm9kZXZpZXciLCJUcmFja2VyIiwiY2FsbE9yUmV0dXJuIiwiY2FuSW5zZXJ0Tm9kZSIsImNvbWJpbmVUcmFuc2FjdGlvblN0ZXBzIiwiY29tbWFuZHMiLCJjb21tYW5kc19leHBvcnRzIiwiY3JlYXRlQXRvbUJsb2NrTWFya2Rvd25TcGVjIiwiY3JlYXRlQmxvY2tNYXJrZG93blNwZWMiLCJjcmVhdGVDaGFpbmFibGVTdGF0ZSIsImNyZWF0ZURvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImgiLCJjcmVhdGVJbmxpbmVNYXJrZG93blNwZWMiLCJjcmVhdGVNYXBwYWJsZVBvc2l0aW9uIiwiY3JlYXRlTm9kZUZyb21Db250ZW50IiwiY3JlYXRlU3R5bGVUYWciLCJkZWZhdWx0QmxvY2tBdCIsImRlbGV0ZVByb3BzIiwiZWxlbWVudEZyb21TdHJpbmciLCJlc2NhcGVGb3JSZWdFeCIsImV4dGVuc2lvbnMiLCJleHRlbnNpb25zX2V4cG9ydHMiLCJmaW5kQ2hpbGRyZW4iLCJmaW5kQ2hpbGRyZW5JblJhbmdlIiwiZmluZER1cGxpY2F0ZXMiLCJmaW5kUGFyZW50Tm9kZSIsImZpbmRQYXJlbnROb2RlQ2xvc2VzdFRvUG9zIiwiZmxhdHRlbkV4dGVuc2lvbnMiLCJmcm9tU3RyaW5nIiwiZ2VuZXJhdGVIVE1MIiwiZ2VuZXJhdGVKU09OIiwiZ2VuZXJhdGVUZXh0IiwiZ2V0QXR0cmlidXRlcyIsImdldEF0dHJpYnV0ZXNGcm9tRXh0ZW5zaW9ucyIsImdldENoYW5nZWRSYW5nZXMiLCJnZXREZWJ1Z0pTT04iLCJnZXRFeHRlbnNpb25GaWVsZCIsImdldEhUTUxGcm9tRnJhZ21lbnQiLCJnZXRNYXJrQXR0cmlidXRlcyIsImdldE1hcmtSYW5nZSIsImdldE1hcmtUeXBlIiwiZ2V0TWFya3NCZXR3ZWVuIiwiZ2V0Tm9kZUF0UG9zaXRpb24iLCJnZXROb2RlQXR0cmlidXRlcyIsImdldE5vZGVUeXBlIiwiZ2V0UmVuZGVyZWRBdHRyaWJ1dGVzIiwiZ2V0U2NoZW1hIiwiZ2V0U2NoZW1hQnlSZXNvbHZlZEV4dGVuc2lvbnMiLCJnZXRTY2hlbWFUeXBlQnlOYW1lIiwiZ2V0U2NoZW1hVHlwZU5hbWVCeU5hbWUiLCJnZXRTcGxpdHRlZEF0dHJpYnV0ZXMiLCJnZXRUZXh0IiwiZ2V0VGV4dEJldHdlZW4iLCJnZXRUZXh0Q29udGVudEZyb21Ob2RlcyIsImdldFRleHRTZXJpYWxpemVyc0Zyb21TY2hlbWEiLCJnZXRVcGRhdGVkUG9zaXRpb24iLCJpbmplY3RFeHRlbnNpb25BdHRyaWJ1dGVzVG9QYXJzZVJ1bGUiLCJpbnB1dFJ1bGVzUGx1Z2luIiwiaXNBY3RpdmUiLCJpc0FuZHJvaWQiLCJpc0F0RW5kT2ZOb2RlIiwiaXNBdFN0YXJ0T2ZOb2RlIiwiaXNFbXB0eU9iamVjdCIsImlzRXh0ZW5zaW9uUnVsZXNFbmFibGVkIiwiaXNGdW5jdGlvbiIsImlzTGlzdCIsImlzTWFjT1MiLCJpc01hcmtBY3RpdmUiLCJpc05vZGVBY3RpdmUiLCJpc05vZGVFbXB0eSIsImlzTm9kZVNlbGVjdGlvbiIsImlzTnVtYmVyIiwiaXNQbGFpbk9iamVjdCIsImlzUmVnRXhwIiwiaXNTdHJpbmciLCJpc1RleHRTZWxlY3Rpb24iLCJpc2lPUyIsIm1hcmtJbnB1dFJ1bGUiLCJtYXJrUGFzdGVSdWxlIiwibWFya2Rvd24iLCJtYXJrZG93bl9leHBvcnRzIiwibWVyZ2VBdHRyaWJ1dGVzIiwibWVyZ2VEZWVwIiwibWluTWF4Iiwibm9kZUlucHV0UnVsZSIsIm5vZGVQYXN0ZVJ1bGUiLCJvYmplY3RJbmNsdWRlcyIsInBhcnNlQXR0cmlidXRlcyIsInBhcnNlSW5kZW50ZWRCbG9ja3MiLCJwYXN0ZVJ1bGVzUGx1Z2luIiwicG9zVG9ET01SZWN0IiwicmVtb3ZlRHVwbGljYXRlcyIsInJlbmRlck5lc3RlZE1hcmtkb3duQ29udGVudCIsInJlc29sdmVFeHRlbnNpb25zIiwicmVzb2x2ZUZvY3VzUG9zaXRpb24iLCJyZXdyaXRlVW5rbm93bkNvbnRlbnQiLCJzZWxlY3Rpb25Ub0luc2VydGlvbkVuZCIsInNlcmlhbGl6ZUF0dHJpYnV0ZXMiLCJzb3J0RXh0ZW5zaW9ucyIsInNwbGl0RXh0ZW5zaW9ucyIsInRleHRJbnB1dFJ1bGUiLCJ0ZXh0UGFzdGVSdWxlIiwidGV4dGJsb2NrVHlwZUlucHV0UnVsZSIsInVwZGF0ZU1hcmtWaWV3QXR0cmlidXRlcyIsIndyYXBwaW5nSW5wdXRSdWxlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF90cmFuc2Zvcm0iLCJyZXF1aXJlIiwiaW1wb3J0X2NvbW1hbmRzIiwiaW1wb3J0X3N0YXRlIiwiaW1wb3J0X2NvbW1hbmRzMiIsImltcG9ydF9jb21tYW5kczMiLCJpbXBvcnRfc3RhdGUyIiwiaW1wb3J0X3N0YXRlMyIsImltcG9ydF9zdGF0ZTQiLCJpbXBvcnRfbW9kZWwiLCJpbXBvcnRfbW9kZWwyIiwiaW1wb3J0X3N0YXRlNSIsImltcG9ydF90cmFuc2Zvcm0yIiwiaW1wb3J0X2NvbW1hbmRzNCIsImltcG9ydF90cmFuc2Zvcm0zIiwiaW1wb3J0X3RyYW5zZm9ybTQiLCJpbXBvcnRfY29tbWFuZHM1IiwiaW1wb3J0X2NvbW1hbmRzNiIsImltcG9ydF9jb21tYW5kczciLCJpbXBvcnRfY29tbWFuZHM4IiwiaW1wb3J0X3NjaGVtYV9saXN0IiwiaW1wb3J0X2NvbW1hbmRzOSIsImltcG9ydF9zdGF0ZTYiLCJpbXBvcnRfY29tbWFuZHMxMCIsImltcG9ydF9jb21tYW5kczExIiwiaW1wb3J0X2NvbW1hbmRzMTIiLCJpbXBvcnRfY29tbWFuZHMxMyIsImltcG9ydF9jb21tYW5kczE0IiwiaW1wb3J0X3RyYW5zZm9ybTUiLCJpbXBvcnRfbW9kZWwzIiwiaW1wb3J0X21vZGVsNCIsImltcG9ydF9tb2RlbDUiLCJpbXBvcnRfbW9kZWw2IiwiaW1wb3J0X21vZGVsNyIsImltcG9ydF9zdGF0ZTciLCJpbXBvcnRfY29tbWFuZHMxNSIsImltcG9ydF9zdGF0ZTgiLCJpbXBvcnRfc3RhdGU5IiwiaW1wb3J0X3NjaGVtYV9saXN0MiIsImltcG9ydF9zdGF0ZTEwIiwiaW1wb3J0X3RyYW5zZm9ybTYiLCJpbXBvcnRfbW9kZWw4IiwiaW1wb3J0X3N0YXRlMTEiLCJpbXBvcnRfdHJhbnNmb3JtNyIsImltcG9ydF90cmFuc2Zvcm04IiwiaW1wb3J0X2NvbW1hbmRzMTYiLCJpbXBvcnRfc2NoZW1hX2xpc3QzIiwiaW1wb3J0X3N0YXRlMTIiLCJpbXBvcnRfdmlldyIsImltcG9ydF9rZXltYXAiLCJpbXBvcnRfbW9kZWw5IiwiaW1wb3J0X3N0YXRlMTMiLCJpbXBvcnRfbW9kZWwxMCIsImltcG9ydF9zdGF0ZTE0IiwiaW1wb3J0X3N0YXRlMTUiLCJpbXBvcnRfdHJhbnNmb3JtOSIsImltcG9ydF9zdGF0ZTE2IiwiaW1wb3J0X3N0YXRlMTciLCJpbXBvcnRfc3RhdGUxOCIsImltcG9ydF9zdGF0ZTE5IiwiaW1wb3J0X3N0YXRlMjAiLCJpbXBvcnRfc3RhdGUyMSIsImltcG9ydF9zdGF0ZTIyIiwiaW1wb3J0X3RyYW5zZm9ybTEwIiwiaW1wb3J0X3N0YXRlMjMiLCJpbXBvcnRfc3RhdGUyNCIsImNvbmZpZyIsInN0YXRlIiwidHJhbnNhY3Rpb24iLCJzZWxlY3Rpb24iLCJkb2MiLCJzdG9yZWRNYXJrcyIsImFwcGx5IiwiYmluZCIsImFwcGx5VHJhbnNhY3Rpb24iLCJwbHVnaW5zIiwic2NoZW1hIiwicmVjb25maWd1cmUiLCJ0b0pTT04iLCJ0ciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlZGl0b3IiLCJyYXdDb21tYW5kcyIsImV4dGVuc2lvbk1hbmFnZXIiLCJjdXN0b21TdGF0ZSIsImhhc0N1c3RvbVN0YXRlIiwidmlldyIsImJ1aWxkUHJvcHMiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJuYW1lIiwiY29tbWFuZDIiLCJtZXRob2QiLCJhcmdzIiwiY2FsbGJhY2siLCJnZXRNZXRhIiwiZGlzcGF0Y2giLCJjaGFpbiIsImNyZWF0ZUNoYWluIiwiY2FuIiwiY3JlYXRlQ2FuIiwic3RhcnRUciIsInNob3VsZERpc3BhdGNoIiwiY2FsbGJhY2tzIiwiaGFzU3RhcnRUcmFuc2FjdGlvbiIsInJ1bjMiLCJydW4iLCJldmVyeSIsImNoYWluZWRDb21tYW5kIiwicHVzaCIsImZvcm1hdHRlZENvbW1hbmRzIiwiX19leHBvcnQyIiwiYmx1ciIsImNsZWFyQ29udGVudCIsImNsZWFyTm9kZXMiLCJjb21tYW5kIiwiY3JlYXRlUGFyYWdyYXBoTmVhciIsImN1dCIsImRlbGV0ZUN1cnJlbnROb2RlIiwiZGVsZXRlTm9kZSIsImRlbGV0ZVJhbmdlIiwiZGVsZXRlU2VsZWN0aW9uIiwiZW50ZXIiLCJleGl0Q29kZSIsImV4dGVuZE1hcmtSYW5nZSIsImZpcnN0IiwiZm9jdXMiLCJmb3JFYWNoIiwiaW5zZXJ0Q29udGVudCIsImluc2VydENvbnRlbnRBdCIsImpvaW5CYWNrd2FyZCIsImpvaW5Eb3duIiwiam9pbkZvcndhcmQiLCJqb2luSXRlbUJhY2t3YXJkIiwiam9pbkl0ZW1Gb3J3YXJkIiwiam9pblRleHRibG9ja0JhY2t3YXJkIiwiam9pblRleHRibG9ja0ZvcndhcmQiLCJqb2luVXAiLCJrZXlib2FyZFNob3J0Y3V0IiwibGlmdCIsImxpZnRFbXB0eUJsb2NrIiwibGlmdExpc3RJdGVtIiwibmV3bGluZUluQ29kZSIsInJlc2V0QXR0cmlidXRlcyIsInNjcm9sbEludG9WaWV3Iiwic2VsZWN0QWxsIiwic2VsZWN0Tm9kZUJhY2t3YXJkIiwic2VsZWN0Tm9kZUZvcndhcmQiLCJzZWxlY3RQYXJlbnROb2RlIiwic2VsZWN0VGV4dGJsb2NrRW5kIiwic2VsZWN0VGV4dGJsb2NrU3RhcnQiLCJzZXRDb250ZW50Iiwic2V0TWFyayIsInNldE1ldGEiLCJzZXROb2RlIiwic2V0Tm9kZVNlbGVjdGlvbiIsInNldFRleHREaXJlY3Rpb24iLCJzZXRUZXh0U2VsZWN0aW9uIiwic2lua0xpc3RJdGVtIiwic3BsaXRCbG9jayIsInNwbGl0TGlzdEl0ZW0iLCJ0b2dnbGVMaXN0IiwidG9nZ2xlTWFyayIsInRvZ2dsZU5vZGUiLCJ0b2dnbGVXcmFwIiwidW5kb0lucHV0UnVsZSIsInVuc2V0QWxsTWFya3MiLCJ1bnNldE1hcmsiLCJ1bnNldFRleHREaXJlY3Rpb24iLCJ1cGRhdGVBdHRyaWJ1dGVzIiwid3JhcEluIiwid3JhcEluTGlzdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9hIiwiaXNEZXN0cm95ZWQiLCJkb20iLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJlbWl0VXBkYXRlIiwicmFuZ2VzIiwiJGZyb20iLCIkdG8iLCJub2Rlc0JldHdlZW4iLCJwb3MiLCJub2RlIiwidHlwZSIsImlzVGV4dCIsIm1hcHBpbmciLCIkbWFwcGVkRnJvbSIsInJlc29sdmUiLCIkbWFwcGVkVG8iLCJub2RlU2l6ZSIsIm5vZGVSYW5nZSIsImJsb2NrUmFuZ2UiLCJ0YXJnZXRMaWZ0RGVwdGgiLCJsaWZ0VGFyZ2V0IiwiaXNUZXh0YmxvY2siLCJkZWZhdWx0VHlwZSIsInBhcmVudCIsImNvbnRlbnRNYXRjaEF0IiwiaW5kZXgiLCJzZXROb2RlTWFya3VwIiwic3RhcnQiLCJmbiIsIm9yaWdpblJhbmdlIiwidGFyZ2V0UG9zIiwiY29udGVudFNsaWNlIiwic2xpY2UiLCJmcm9tIiwidG8iLCJuZXdQb3MiLCJpbnNlcnQiLCJjb250ZW50Iiwic2V0U2VsZWN0aW9uIiwiVGV4dFNlbGVjdGlvbiIsIk1hdGgiLCJtYXgiLCJjdXJyZW50Tm9kZSIsIiRhbmNob3IiLCJzaXplIiwiJHBvcyIsImRlcHRoIiwiYmVmb3JlIiwiYWZ0ZXIiLCJkZWxldGUiLCJuYW1lT3JUeXBlIiwibm9kZXMiLCJFcnJvciIsInR5cGVPck5hbWUiLCJyYW5nZSIsInZhbHVlIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwib2JqZWN0MSIsIm9iamVjdDIiLCJvcHRpb25zIiwic3RyaWN0Iiwia2V5cyIsImxlbmd0aCIsImtleSIsInRlc3QiLCJmaW5kTWFya0luU2V0IiwibWFya3MiLCJhdHRyaWJ1dGVzIiwiZmluZCIsIml0ZW0iLCJrIiwiYXR0cnMiLCJpc01hcmtJblNldCIsImNoaWxkQWZ0ZXIiLCJwYXJlbnRPZmZzZXQiLCJzb21lIiwibWFyazIiLCJjaGlsZEJlZm9yZSIsIm1hcmsiLCJzdGFydEluZGV4Iiwic3RhcnRQb3MiLCJvZmZzZXQiLCJlbmRJbmRleCIsImVuZFBvcyIsImNoaWxkIiwiY2hpbGRDb3VudCIsIm5ld1NlbGVjdGlvbiIsImNyZWF0ZSIsIml0ZW1zIiwiaSIsIm1pbiIsInBvc2l0aW9uIiwic2VsZWN0aW9uQXRTdGFydCIsIlNlbGVjdGlvbiIsImF0U3RhcnQiLCJzZWxlY3Rpb25BdEVuZCIsImF0RW5kIiwibWluUG9zIiwibWF4UG9zIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsImRvY3VtZW50IiwiZGVsYXllZEZvY3VzIiwiaGFzRm9jdXMiLCJpc1NhbWVTZWxlY3Rpb24iLCJlcSIsInNldFN0b3JlZE1hcmtzIiwicmVtb3ZlV2hpdGVzcGFjZXMiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJub2RlVHlwZSIsIm5vZGVWYWx1ZSIsInJlbW92ZUNoaWxkIiwid3JhcHBlZFZhbHVlIiwiaHRtbCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJwYXJzZU9wdGlvbnMiLCJpc0pTT05Db250ZW50IiwiaXNUZXh0Q29udGVudCIsImlzQXJyYXlDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiZnJvbUFycmF5Iiwibm9kZUZyb21KU09OIiwiZXJyb3JPbkludmFsaWRDb250ZW50IiwiY2hlY2siLCJlcnJvciIsImNhdXNlIiwiY29uc29sZSIsIndhcm4iLCJoYXNJbnZhbGlkQ29udGVudCIsImludmFsaWRDb250ZW50IiwiY29udGVudENoZWNrU2NoZW1hIiwiU2NoZW1hIiwidG9wTm9kZSIsInNwZWMiLCJhcHBlbmQiLCJfX3RpcHRhcF9fcHJpdmF0ZV9fdW5rbm93bl9fY2F0Y2hfX2FsbF9fbm9kZSIsImdyb3VwIiwicGFyc2VET00iLCJ0YWciLCJnZXRBdHRycyIsImUiLCJvdXRlckhUTUwiLCJmcm9tU2NoZW1hIiwicGFyc2VTbGljZSIsInBhcnNlIiwicGFyc2VyIiwic3RhcnRMZW4iLCJiaWFzIiwibGFzdCIsInN0ZXBzIiwic3RlcCIsIlJlcGxhY2VTdGVwIiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCJtYXBzIiwiZW5kIiwiX2Zyb20iLCJfdG8iLCJfbmV3RnJvbSIsIm5ld1RvIiwibmVhciIsImlzRnJhZ21lbnQiLCJub2RlT3JGcmFnbWVudCIsInVwZGF0ZVNlbGVjdGlvbiIsImFwcGx5SW5wdXRSdWxlcyIsImFwcGx5UGFzdGVSdWxlcyIsImVtaXRDb250ZW50RXJyb3IiLCJlbWl0IiwiZGlzYWJsZUNvbGxhYm9yYXRpb24iLCJzdG9yYWdlIiwiY29sbGFib3JhdGlvbiIsImlzRGlzYWJsZWQiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJlbmFibGVDb250ZW50Q2hlY2siLCJpc09ubHlUZXh0Q29udGVudCIsImlzT25seUJsb2NrQ29udGVudCIsImlzQmxvY2siLCJpc0VtcHR5VGV4dEJsb2NrIiwiY29kZSIsIm5ld0NvbnRlbnQiLCJ2IiwidGV4dCIsImpvaW4iLCJpbnNlcnRUZXh0IiwiJGZyb21Ob2RlIiwiZnJvbVNlbGVjdGlvbkF0U3RhcnQiLCJpc1RleHRTZWxlY3Rpb24yIiwiaGFzQ29udGVudCIsInJlcGxhY2VXaXRoIiwicG9pbnQiLCJqb2luUG9pbnQiLCJub3JtYWxpemVLZXlOYW1lIiwicGFydHMiLCJzcGxpdCIsInJlc3VsdCIsImFsdCIsImN0cmwiLCJzaGlmdCIsIm1ldGEiLCJtb2QiLCJldmVudCIsIktleWJvYXJkRXZlbnQiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjYXB0dXJlZFRyYW5zYWN0aW9uIiwiY2FwdHVyZVRyYW5zYWN0aW9uIiwic29tZVByb3AiLCJmIiwibmV3U3RlcCIsIm1heWJlU3RlcCIsImVtcHR5Iiwibm9kZVJhbmdlcyIsInJlbGF0aXZlRnJvbSIsInJlbGF0aXZlVG8iLCJzZWxlY3Rpb25SYW5nZSIsIm1hdGNoZWROb2RlUmFuZ2VzIiwiZmlsdGVyIiwicmVkdWNlIiwic3VtIiwiaXNBY3RpdmUyIiwib2JqIiwicHJvcE9yUHJvcHMiLCJuZXdPYmoiLCJwcm9wIiwibWFya1R5cGUiLCJzY2hlbWFUeXBlIiwiY2FuUmVzZXQiLCJhZGRNYXJrIiwiQWxsU2VsZWN0aW9uIiwiZG9jdW1lbnQyIiwiJGhlYWQiLCJtYXJrSXRlbSIsIm9sZERvYyIsInRyYW5zYWN0aW9ucyIsInRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsIm1hdGNoIiwiZWRnZUNvdW50IiwiZWRnZSIsImhhc1JlcXVpcmVkQXR0cnMiLCJwcmVkaWNhdGUiLCJub2Rlc1dpdGhQb3MiLCJkZXNjZW5kYW50cyIsImV4dGVuc2lvbiIsImZpZWxkIiwiY29udGV4dCIsImFkZEV4dGVuc2lvbnMiLCJmbGF0IiwiZnJhZ21lbnQiLCJkb2N1bWVudEZyYWdtZW50IiwiRE9NU2VyaWFsaXplciIsInNlcmlhbGl6ZUZyYWdtZW50IiwidGVtcG9yYXJ5RG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiYmFzZUV4dGVuc2lvbnMiLCJub2RlRXh0ZW5zaW9ucyIsIm1hcmtFeHRlbnNpb25zIiwiZXh0ZW5zaW9uQXR0cmlidXRlcyIsIm5vZGVBbmRNYXJrRXh0ZW5zaW9ucyIsImRlZmF1bHRBdHRyaWJ1dGUiLCJkZWZhdWx0IiwidmFsaWRhdGUiLCJyZW5kZXJlZCIsInJlbmRlckhUTUwiLCJwYXJzZUhUTUwiLCJrZWVwT25TcGxpdCIsImlzUmVxdWlyZWQiLCJhZGRHbG9iYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlcyIsImdsb2JhbEF0dHJpYnV0ZSIsInR5cGVzIiwiYXR0cmlidXRlIiwiYWRkQXR0cmlidXRlcyIsIm1lcmdlZEF0dHIiLCJvYmplY3RzIiwibWVyZ2VkQXR0cmlidXRlcyIsImV4aXN0cyIsInZhbHVlQ2xhc3NlcyIsIlN0cmluZyIsImV4aXN0aW5nQ2xhc3NlcyIsImluc2VydENsYXNzZXMiLCJ2YWx1ZUNsYXNzIiwibmV3U3R5bGVzIiwic3R5bGUyIiwidHJpbSIsIkJvb2xlYW4iLCJleGlzdGluZ1N0eWxlcyIsInN0eWxlTWFwIiwiTWFwIiwicHJvcGVydHkiLCJ2YWwiLCJwYXJ0Iiwic2V0Iiwibm9kZU9yTWFyayIsIk51bWJlciIsInBhcnNlUnVsZSIsIm9sZEF0dHJpYnV0ZXMiLCJuZXdBdHRyaWJ1dGVzIiwiZ2V0QXR0cmlidXRlIiwiY2xlYW5VcFNjaGVtYUl0ZW0iLCJkYXRhIiwiYnVpbGRBdHRyaWJ1dGVTcGVjIiwiZXh0ZW5zaW9uQXR0cmlidXRlIiwiX2IiLCJhbGxBdHRyaWJ1dGVzIiwiZXh0cmFOb2RlRmllbGRzIiwiZmllbGRzIiwiZXh0ZW5kTm9kZVNjaGVtYSIsImlubGluZSIsImF0b20iLCJzZWxlY3RhYmxlIiwiZHJhZ2dhYmxlIiwid2hpdGVzcGFjZSIsImxpbmVicmVha1JlcGxhY2VtZW50IiwiZGVmaW5pbmciLCJpc29sYXRpbmciLCJ0b0RPTSIsIkhUTUxBdHRyaWJ1dGVzIiwicmVuZGVyVGV4dCIsInRvVGV4dCIsImV4dHJhTWFya0ZpZWxkcyIsImV4dGVuZE1hcmtTY2hlbWEiLCJpbmNsdXNpdmUiLCJleGNsdWRlcyIsInNwYW5uaW5nIiwiZmlsdGVyZWQiLCJlbCIsImluZGV4T2YiLCJTZXQiLCJkZWZhdWx0UHJpb3JpdHkiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eUEiLCJwcmlvcml0eUIiLCJyZXNvbHZlZEV4dGVuc2lvbnMiLCJkdXBsaWNhdGVkTmFtZXMiLCJjb250ZW50Tm9kZSIsImZyb21KU09OIiwic3RhcnROb2RlIiwiYmxvY2tTZXBhcmF0b3IiLCJ0ZXh0U2VyaWFsaXplcnMiLCJ0ZXh0U2VyaWFsaXplciIsIm5vZGUyIiwicmV2ZXJzZSIsIm5vZGVJdGVtIiwiYXJyYXkiLCJieSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWVuIiwiaGFzT3duUHJvcGVydHkiLCJzaW1wbGlmeUNoYW5nZWRSYW5nZXMiLCJjaGFuZ2VzIiwidW5pcXVlQ2hhbmdlcyIsImNoYW5nZSIsInJlc3QiLCJfIiwib3RoZXJDaGFuZ2UiLCJvbGRSYW5nZSIsIm5ld1JhbmdlIiwic3RlcE1hcCIsIm5ld1N0YXJ0IiwibmV3RW5kIiwib2xkU3RhcnQiLCJpbnZlcnQiLCJvbGRFbmQiLCJzdGFydE9mZnNldCIsImlzVG9wTm9kZSIsInRvcE5vZGVUeXBlIiwiaW5jcmVtZW50Iiwib3V0cHV0MiIsIm91dHB1dCIsIm1heERlcHRoIiwiY3VycmVudERlcHRoIiwidHlwZU5hbWUiLCJtYXhNYXRjaCIsInRleHRCZWZvcmUiLCJzbGljZUVuZFBvcyIsImNodW5rIiwidGV4dENvbnRlbnQiLCJpc0F0b20iLCJtYXJrUmFuZ2VzIiwicmFuZ2UyIiwibWF0Y2hlZFJhbmdlIiwibWFya1JhbmdlIiwiZXhjbHVkZWRSYW5nZSIsInBhcmVudE5vZGUiLCIkcGFyZW50UG9zIiwiZW5hYmxlZCIsImVuYWJsZWRFeHRlbnNpb24iLCJjaGVja0NoaWxkcmVuIiwiaWdub3JlV2hpdGVzcGFjZSIsImlzTGVhZiIsImlzQ29udGVudEVtcHR5IiwiY2hpbGROb2RlIiwiTm9kZVNlbGVjdGlvbiIsIl9NYXBwYWJsZVBvc2l0aW9uIiwianNvbiIsIm1hcFJlc3VsdCIsInJlc29sdmVkRnJvbSIsInJlc29sdmVkRW5kIiwiY29vcmRzQXRQb3MiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicmV3cml0ZVVua25vd25Db250ZW50SW5uZXIiLCJ2YWxpZE1hcmtzIiwidmFsaWROb2RlcyIsInJld3JpdHRlbkNvbnRlbnQiLCJoYXMiLCJvcmlnaW5hbCIsInVuc3VwcG9ydGVkIiwiZmFsbGJhY2tUb1BhcmFncmFwaCIsImNhblNldE1hcmsiLCJuZXdNYXJrVHlwZSIsImN1cnNvciIsIiRjdXJzb3IiLCJjdXJyZW50TWFya3MiLCJwYXJlbnRBbGxvd3NNYXJrVHlwZSIsImFsbG93c01hcmtUeXBlIiwiaXNJblNldCIsInNvbWVOb2RlU3VwcG9ydHNNYXJrIiwiaW5saW5lQ29udGVudCIsIl9wb3MiLCJpc0lubGluZSIsImN1cnJlbnRNYXJrc0FsbG93TWFya1R5cGUiLCJvdGhlck1hcmsiLCJhZGRTdG9yZWRNYXJrIiwidHJpbW1lZEZyb20iLCJ0cmltbWVkVG8iLCJzb21lSGFzTWFyayIsImF0dHJpYnV0ZXNUb0NvcHkiLCJzYW1lUGFyZW50IiwiY2FuU2V0QmxvY2siLCJzZXRCbG9ja1R5cGUiLCJ1cGRhdGVkU3RhdGUiLCJkaXJlY3Rpb24iLCJkaXIiLCJlbnN1cmVNYXJrcyIsInNwbGl0dGFibGVNYXJrcyIsImZpbHRlcmVkTWFya3MiLCJrZWVwTWFya3MiLCJjYW5TcGxpdCIsImRlZmx0IiwiaW5kZXhBZnRlciIsImZpcnN0MiIsIiRmaXJzdCIsImNhblJlcGxhY2VXaXRoIiwib3ZlcnJpZGVBdHRycyIsImdyYW5kUGFyZW50Iiwid3JhcCIsImRlcHRoQmVmb3JlIiwiZCIsImNvcHkiLCJkZXB0aEFmdGVyIiwibmV3TmV4dFR5cGVBdHRyaWJ1dGVzMiIsIm5leHRUeXBlMiIsImNvbnRlbnRNYXRjaCIsImNyZWF0ZUFuZEZpbGwiLCJyZXBsYWNlIiwiU2xpY2UiLCJzZWwiLCJuIiwibmV4dFR5cGUiLCJuZXdUeXBlQXR0cmlidXRlcyIsIm5ld05leHRUeXBlQXR0cmlidXRlcyIsImpvaW5MaXN0QmFja3dhcmRzIiwibGlzdFR5cGUiLCJsaXN0Iiwibm9kZUJlZm9yZSIsIm5vZGVBdCIsImNhbkpvaW5CYWNrd2FyZHMiLCJjYW5Kb2luIiwiam9pbkxpc3RGb3J3YXJkcyIsIm5vZGVBZnRlciIsImNhbkpvaW5Gb3J3YXJkcyIsImxpc3RUeXBlT3JOYW1lIiwiaXRlbVR5cGVPck5hbWUiLCJpdGVtVHlwZSIsInBhcmVudExpc3QiLCJ2YWxpZENvbnRlbnQiLCJjYW5XcmFwSW5MaXN0IiwiZXh0ZW5kRW1wdHlNYXJrUmFuZ2UiLCJ0b2dnbGVUeXBlT3JOYW1lIiwidG9nZ2xlVHlwZSIsInBsdWdpbiIsInVuZG9hYmxlIiwiaXNJbnB1dFJ1bGVzIiwiZ2V0U3RhdGUiLCJ0b1VuZG8iLCJqIiwiZG9jcyIsInJlbW92ZU1hcmsiLCJyZW1vdmVTdG9yZWRNYXJrIiwibmV3QXR0cnMiLCJjYW5VcGRhdGUiLCJsYXN0UG9zIiwibGFzdE5vZGUiLCJ0cmltbWVkRnJvbTIiLCJ0cmltbWVkVG8yIiwiRXZlbnRFbWl0dGVyIiwib24iLCJvZmYiLCJvbmNlIiwib25jZUZuIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiaGFuZGxlciIsImlucHV0UnVsZU1hdGNoZXJIYW5kbGVyIiwiZXhlYyIsImlucHV0UnVsZU1hdGNoIiwiaW5wdXQiLCJydWxlcyIsImNvbXBvc2luZyIsIm1hdGNoZWQiLCJydWxlIiwiUGx1Z2luIiwiaW5pdCIsInByZXYiLCJzdG9yZWQiLCJzaW11bGF0ZWRJbnB1dE1ldGEiLCJpc1NpbXVsYXRlZElucHV0Iiwic2V0VGltZW91dCIsInNlbGVjdGlvblNldCIsImRvY0NoYW5nZWQiLCJoYW5kbGVUZXh0SW5wdXQiLCJoYW5kbGVET01FdmVudHMiLCJjb21wb3NpdGlvbmVuZCIsImhhbmRsZUtleURvd24iLCJnZXRUeXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJ0YXJnZXQiLCJzb3VyY2UiLCJjb25maWd1cmUiLCJleHRlbmQiLCJhZGRPcHRpb25zIiwiZXh0ZW5kZWRDb25maWciLCJfTWFyayIsImFyZ3VtZW50cyIsInJlc29sdmVkQ29uZmlnIiwiaGFuZGxlRXhpdCIsImN1cnJlbnRQb3MiLCJpc0F0RW5kIiwiaXNJbk1hcmsiLCJtIiwicGFzdGVSdWxlTWF0Y2hlckhhbmRsZXIiLCJtYXRjaEFsbCIsIm1hdGNoZXMiLCJwYXN0ZVJ1bGVNYXRjaCIsInJ1bjIiLCJwYXN0ZUV2ZW50IiwiZHJvcEV2ZW50IiwiaGFuZGxlcnMiLCJfYyIsIl9kIiwiX2UiLCJjb250ZW50U2l6ZSIsInJlc29sdmVkVG8iLCJ0ZXh0VG9NYXRjaCIsInRleHRCZXR3ZWVuIiwic3VjY2VzcyIsInRpcHRhcERyYWdGcm9tT3RoZXJFZGl0b3IiLCJjcmVhdGVDbGlwYm9hcmRQYXN0ZUV2ZW50IiwiQ2xpcGJvYXJkRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiRGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImRyYWdTb3VyY2VFbGVtZW50IiwiaXNQYXN0ZWRGcm9tUHJvc2VNaXJyb3IiLCJpc0Ryb3BwZWRGcm9tUHJvc2VNaXJyb3IiLCJEcmFnRXZlbnQiLCJwcm9jZXNzRXZlbnQiLCJwYXN0ZUV2dCIsImNoYWluYWJsZVN0YXRlIiwiaGFuZGxlRHJhZ3N0YXJ0IiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiaGFuZGxlRHJhZ2VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3AiLCJkcmFnRnJvbU90aGVyRWRpdG9yIiwiaXNFZGl0YWJsZSIsInBhc3RlIiwiX3ZpZXciLCJnZXREYXRhIiwiYXBwZW5kVHJhbnNhY3Rpb24iLCJvbGRTdGF0ZSIsImlzUGFzdGUiLCJpc0Ryb3AiLCJzaW11bGF0ZWRQYXN0ZU1ldGEiLCJpc1NpbXVsYXRlZFBhc3RlIiwiZnJvbTIiLCJ0bzIiLCJmaW5kRGlmZlN0YXJ0IiwiZmluZERpZmZFbmQiLCJFeHRlbnNpb25NYW5hZ2VyIiwic2V0dXBFeHRlbnNpb25zIiwiZXh0ZW5zaW9uU3RvcmFnZSIsImFkZENvbW1hbmRzIiwiYWxsUGx1Z2lucyIsImZsYXRNYXAiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsImRlZmF1bHRCaW5kaW5ncyIsIkFycm93UmlnaHQiLCJiaW5kaW5ncyIsInNob3J0Y3V0Iiwia2V5TWFwUGx1Z2luIiwia2V5bWFwIiwiYWRkSW5wdXRSdWxlcyIsImVuYWJsZUlucHV0UnVsZXMiLCJpbnB1dFJlc3VsdCIsImlucHV0UGx1Z2lucyIsImFkZFBhc3RlUnVsZXMiLCJlbmFibGVQYXN0ZVJ1bGVzIiwicGFzdGVSdWxlcyIsImFkZFByb3NlTWlycm9yUGx1Z2lucyIsInByb3NlTWlycm9yUGx1Z2lucyIsIm5vZGVWaWV3cyIsImFkZE5vZGVWaWV3Iiwibm9kZVZpZXdSZXN1bHQiLCJub2RldmlldyIsImdldFBvcyIsImRlY29yYXRpb25zIiwiaW5uZXJEZWNvcmF0aW9ucyIsIm1hcmtWaWV3cyIsImFkZE1hcmtWaWV3IiwibWFya1ZpZXciLCJvbkJlZm9yZUNyZWF0ZSIsIm9uQ3JlYXRlIiwib25VcGRhdGUiLCJvblNlbGVjdGlvblVwZGF0ZSIsIm9uVHJhbnNhY3Rpb24iLCJvbkZvY3VzIiwib25CbHVyIiwib25EZXN0cm95IiwiZmxhdHRlbiIsIkNsaXBib2FyZFRleHRTZXJpYWxpemVyIiwiQ29tbWFuZHMiLCJEZWxldGUiLCJEcm9wIiwiRWRpdGFibGUiLCJGb2N1c0V2ZW50cyIsIktleW1hcCIsIlBhc3RlIiwiVGFiaW5kZXgiLCJUZXh0RGlyZWN0aW9uIiwiZm9jdXNFdmVudHNQbHVnaW5LZXkiLCJfRXh0ZW5zaW9uIiwiUGx1Z2luS2V5IiwiY2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIiLCJhcHBlbmRlZFRyYW5zYWN0aW9ucyIsIl9hMiIsIl9iMiIsIl9jMiIsImNvcmVFeHRlbnNpb25PcHRpb25zIiwiZmlsdGVyVHJhbnNhY3Rpb24iLCJuZXh0VHJhbnNhY3Rpb24iLCJkZWxldGVkQWZ0ZXIiLCJkZWxldGVkQmVmb3JlIiwiaXNGdWxseVdpdGhpblJhbmdlIiwibmV3RnJvbSIsImRlbGV0ZWRSYW5nZSIsInBhcnRpYWwiLCJjb21iaW5lZFRyYW5zZm9ybSIsIl9hMyIsIl9iMyIsIlJlbW92ZU1hcmtTdGVwIiwiZm91bmRCZWZvcmVNYXJrIiwiZm91bmRBZnRlck1hcmsiLCJhc3luYyIsImhhbmRsZURyb3AiLCJtb3ZlZCIsImVkaXRhYmxlIiwiaXNGb2N1c2VkIiwiaGFuZGxlQmFja3NwYWNlIiwicGFyZW50SXNJc29sYXRpbmciLCJwYXJlbnRQb3MiLCJpc0F0U3RhcnQiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVFbnRlciIsImJhc2VLZXltYXAiLCJFbnRlciIsIk1vZC1FbnRlciIsIkJhY2tzcGFjZSIsIk1vZC1hIiwicGNLZXltYXAiLCJtYWNLZXltYXAiLCJDdHJsLWEiLCJDdHJsLWUiLCJuZXdTdGF0ZSIsInRyMiIsImRvY0NoYW5nZXMiLCJpZ25vcmVUciIsImFsbEZyb20iLCJhbGxFbmQiLCJhbGxXYXNTZWxlY3RlZCIsImlzRW1wdHkiLCJoYW5kbGVQYXN0ZSIsInRhYmluZGV4IiwiZWxlbWVudCIsIl9Ob2RlUG9zIiwiYWN0dWFsRGVwdGgiLCJyZXNvbHZlZFBvcyIsImRvbUF0UG9zIiwiaXNOb25UZXh0QXRvbSIsImNoaWxkTm9kZVBvcyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJjbG9zZXN0Iiwic2VsZWN0b3IiLCJub2RlQXR0cmlidXRlcyIsImF0dHJLZXlzIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEl0ZW1Pbmx5IiwiY2hpbGRQb3MiLCJkb2VzQWxsQXR0cmlidXRlc01hdGNoIiwiY29uY2F0Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJub25jZSIsInN1ZmZpeCIsInRpcHRhcFN0eWxlVGFnIiwic3R5bGVOb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjc3MiLCJjbGFzc05hbWUiLCJlZGl0b3JWaWV3IiwiaXNJbml0aWFsaXplZCIsImluc3RhbmNlSWQiLCJyYW5kb20iLCJpbmplY3RDU1MiLCJpbmplY3ROb25jZSIsImF1dG9mb2N1cyIsInRleHREaXJlY3Rpb24iLCJlZGl0b3JQcm9wcyIsImVuYWJsZUNvcmVFeHRlbnNpb25zIiwib25Nb3VudCIsIm9uVW5tb3VudCIsIm9uQ29udGVudEVycm9yIiwib25QYXN0ZSIsIm9uRHJvcCIsIm9uRGVsZXRlIiwiaXNDYXB0dXJpbmdUcmFuc2FjdGlvbiIsInV0aWxzIiwic2V0T3B0aW9ucyIsImNyZWF0ZUV4dGVuc2lvbk1hbmFnZXIiLCJjcmVhdGVDb21tYW5kTWFuYWdlciIsImNyZWF0ZVNjaGVtYSIsImluaXRpYWxEb2MiLCJjcmVhdGVEb2MiLCJlZGl0b3JTdGF0ZSIsIkVkaXRvclN0YXRlIiwibW91bnQiLCJjcmVhdGVWaWV3IiwiaGVhZCIsInVubW91bnQiLCJyZW1vdmUiLCJjb21tYW5kTWFuYWdlciIsInNldFByb3BzIiwidXBkYXRlU3RhdGUiLCJzZXRFZGl0YWJsZSIsIlByb3h5IiwiZGlzcGF0Y2hUcmFuc2FjdGlvbiIsImRyYWdnaW5nIiwiZ2V0IiwiUmVmbGVjdCIsInJlZ2lzdGVyUGx1Z2luIiwiaGFuZGxlUGx1Z2lucyIsInVucmVnaXN0ZXJQbHVnaW4iLCJuYW1lT3JQbHVnaW5LZXlUb1JlbW92ZSIsInByZXZQbHVnaW5zIiwibmFtZU9yUGx1Z2luS2V5Iiwic3RhcnRzV2l0aCIsImNvcmVFeHRlbnNpb25zIiwiZXh0IiwiYWxsRXh0ZW5zaW9ucyIsIm1lc3NhZ2UiLCJFZGl0b3JWaWV3Iiwicm9sZSIsInByZXBlbmRDbGFzcyIsImNyZWF0ZU5vZGVWaWV3cyIsInNlbGVjdGlvbkhhc0NoYW5nZWQiLCJyb290VHJXYXNBcHBsaWVkIiwicHJldlN0YXRlIiwibmV4dFN0YXRlIiwibW9zdFJlY2VudEZvY3VzVHIiLCJmaW5kTGFzdCIsImZvY3VzMiIsImJsdXIyIiwibmFtZU9yQXR0cmlidXRlcyIsImF0dHJpYnV0ZXNPclVuZGVmaW5lZCIsImdldEpTT04iLCJnZXRIVE1MIiwiJG5vZGUiLCIkZG9jIiwiJG5vZGVzIiwiY2FwdHVyZUdyb3VwIiwiZnVsbE1hdGNoIiwic3RhcnRTcGFjZXMiLCJzZWFyY2giLCJ0ZXh0U3RhcnQiLCJ0ZXh0RW5kIiwiZXhjbHVkZWRNYXJrcyIsImV4Y2x1ZGVkIiwibWFya0VuZCIsIm5ld05vZGUiLCJsYXN0SW5kZXhPZiIsIm1hdGNoU3RhcnQiLCJsYXN0Q2hhciIsImluc2VydGlvblN0YXJ0IiwiJHN0YXJ0IiwiY3V0T2ZmIiwid3JhcHBpbmciLCJmaW5kV3JhcHBpbmciLCJrZWVwQXR0cmlidXRlcyIsImpvaW5QcmVkaWNhdGUiLCJGdW5jdGlvbiIsImlzVG91Y2hFdmVudCIsImRpcmVjdGlvbnMiLCJtaW5TaXplIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsImNsYXNzTmFtZXMiLCJ3cmFwcGVyIiwiaGFuZGxlIiwicmVzaXppbmciLCJpbml0aWFsV2lkdGgiLCJpbml0aWFsSGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJpc1Jlc2l6aW5nIiwiYWN0aXZlSGFuZGxlIiwic3RhcnRYIiwic3RhcnRZIiwic3RhcnRXaWR0aCIsInN0YXJ0SGVpZ2h0IiwiaXNTaGlmdEtleVByZXNzZWQiLCJoYW5kbGVNb3VzZU1vdmUiLCJkZWx0YVgiLCJjbGllbnRYIiwiZGVsdGFZIiwiY2xpZW50WSIsImhhbmRsZVJlc2l6ZSIsImhhbmRsZVRvdWNoTW92ZSIsInRvdWNoIiwidG91Y2hlcyIsImhhbmRsZU1vdXNlVXAiLCJmaW5hbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJmaW5hbEhlaWdodCIsIm9mZnNldEhlaWdodCIsIm9uQ29tbWl0IiwiZGF0YXNldCIsInJlc2l6ZVN0YXRlIiwiY2xhc3NMaXN0IiwiaGFuZGxlS2V5VXAiLCJjb250ZW50RWxlbWVudCIsIm9uUmVzaXplIiwibWF4U2l6ZSIsImNyZWF0ZVdyYXBwZXIiLCJjcmVhdGVDb250YWluZXIiLCJhcHBseUluaXRpYWxTaXplIiwiYXR0YWNoSGFuZGxlcyIsImNvbnRlbnRET00iLCJ1cGRhdGUiLCJyZXNpemVDb250YWluZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicmVzaXplV3JhcHBlciIsImNyZWF0ZUhhbmRsZSIsInJlc2l6ZUhhbmRsZSIsInBvc2l0aW9uSGFuZGxlIiwiaXNUb3AiLCJpc0JvdHRvbSIsImlzTGVmdCIsImlzUmlnaHQiLCJoYW5kbGVSZXNpemVTdGFydCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWRkIiwic2hvdWxkUHJlc2VydmVBc3BlY3RSYXRpbyIsImNhbGN1bGF0ZU5ld0RpbWVuc2lvbnMiLCJjb25zdHJhaW5lZCIsImFwcGx5Q29uc3RyYWludHMiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsImFwcGx5QXNwZWN0UmF0aW8iLCJjb25zdHJhaW5lZFdpZHRoMiIsImNvbnN0cmFpbmVkSGVpZ2h0MiIsImNvbnN0cmFpbmVkV2lkdGgiLCJjb25zdHJhaW5lZEhlaWdodCIsImlzSG9yaXpvbnRhbCIsImlzVmVydGljYWwiLCJtYXRjaFR5cGUiLCJzdHJpbmciLCJhdHRyU3RyaW5nIiwicXVvdGVkU3RyaW5ncyIsInRlbXBTdHJpbmciLCJjbGFzc01hdGNoZXMiLCJjbGFzc2VzIiwiY2xhc3MiLCJpZE1hdGNoIiwiaWQiLCJrdlJlZ2V4Iiwia3ZNYXRjaGVzIiwicXVvdGVkUmVmIiwicXVvdGVkSW5kZXgiLCJwYXJzZUludCIsInF1b3RlZFZhbHVlIiwiY2xlYW5TdHJpbmciLCJib29sZWFuQXR0cnMiLCJhdHRyIiwiY2xzIiwibm9kZU5hbWUiLCJtYXJrZG93bk5hbWUiLCJwYXJzZUF0dHJpYnV0ZXMyIiwic2VyaWFsaXplQXR0cmlidXRlczIiLCJkZWZhdWx0QXR0cmlidXRlcyIsInJlcXVpcmVkQXR0cmlidXRlcyIsImFsbG93ZWRBdHRyaWJ1dGVzIiwiYmxvY2tOYW1lIiwiZmlsdGVyQXR0cmlidXRlcyIsInBhcnNlTWFya2Rvd24iLCJ0b2tlbiIsImgyIiwiY3JlYXRlTm9kZSIsIm1hcmtkb3duVG9rZW5pemVyIiwibGV2ZWwiLCJzcmMiLCJyZWdleCIsIlJlZ0V4cCIsInRva2VuaXplIiwiX3Rva2VucyIsIl9sZXhlciIsIm1pc3NpbmdSZXF1aXJlZCIsInJlcXVpcmVkIiwicmF3IiwicmVuZGVyTWFya2Rvd24iLCJmaWx0ZXJlZEF0dHJzIiwiZ2V0Q29udGVudCIsIm5vZGVDb250ZW50IiwiY29udGVudFJlc3VsdCIsInBhcnNlQ2hpbGRyZW4iLCJ0b2tlbnMiLCJwYXJzZUlubGluZSIsImxleGVyIiwib3BlbmluZ1JlZ2V4Iiwib3BlbmluZ01hdGNoIiwib3BlbmluZ1RhZyIsIm1hdGNoZWRDb250ZW50IiwiYmxvY2tQYXR0ZXJuIiwicmVtYWluaW5nIiwibGFzdEluZGV4IiwibWF0Y2hQb3MiLCJibG9ja1R5cGUiLCJlbmRzV2l0aCIsInJhd0NvbnRlbnQiLCJjb250ZW50VG9rZW5zIiwiYmxvY2tUb2tlbnMiLCJpbmxpbmVUb2tlbnMiLCJsYXN0VG9rZW4iLCJwb3AiLCJyZW5kZXJlZENvbnRlbnQiLCJyZW5kZXJDaGlsZHJlbiIsInBhcnNlU2hvcnRjb2RlQXR0cmlidXRlcyIsImRvdWJsZVF1b3RlZCIsInNpbmdsZVF1b3RlZCIsInNlcmlhbGl6ZVNob3J0Y29kZUF0dHJpYnV0ZXMiLCJzaG9ydGNvZGVOYW1lIiwic2VsZkNsb3NpbmciLCJzaG9ydGNvZGUiLCJlc2NhcGVkU2hvcnRjb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJzdGFydFBhdHRlcm4iLCJ0b2tlblBhdHRlcm4iLCJsaW5lcyIsInRvdGFsUmF3IiwiYmFzZUluZGVudFNpemUiLCJjdXJyZW50TGluZSIsIml0ZW1NYXRjaCIsIml0ZW1QYXR0ZXJuIiwiaXRlbURhdGEiLCJleHRyYWN0SXRlbURhdGEiLCJpbmRlbnRMZXZlbCIsIm1haW5Db250ZW50IiwiaXRlbUNvbnRlbnQiLCJuZXh0TGluZSIsIm5leHROb25FbXB0eUluZGV4IiwiZmluZEluZGV4IiwibCIsIm5leHROb25FbXB0eSIsIm5leHRJbmRlbnQyIiwibmV4dEluZGVudCIsIm5lc3RlZFRva2VucyIsIm5lc3RlZENvbnRlbnQiLCJkZWRlbnRlZE5lc3RlZCIsIm5lc3RlZExpbmUiLCJjdXN0b21OZXN0ZWRQYXJzZXIiLCJjcmVhdGVUb2tlbiIsInByZWZpeE9yR2VuZXJhdG9yIiwiY3R4IiwicHJlZml4IiwiY2hpbGRDb250ZW50IiwiaW5kZW50ZWRDaGlsZCIsImxpbmUiLCJpbmRlbnQiLCJjaGVja01hcmsiLCJ0aGlzTWFyayIsImZvdW5kTWFyayIsIm5lZWRzVXBkYXRlIiwidXBkYXRlZE1hcmsiLCJjb21wb25lbnQiLCJpZ25vcmVNdXRhdGlvbiIsIm11dGF0aW9uIiwiY2hhbmdlZE5vZGVzIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImlzQ29udGVudEVkaXRhYmxlIiwiX05vZGUiLCJpc0RyYWdnaW5nIiwic3RvcEV2ZW50Iiwib25EcmFnU3RhcnQiLCJfZiIsIl9nIiwiZHJhZ0hhbmRsZSIsImRvbUJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZUJveCIsIm9mZnNldFgiLCJuYXRpdmVFdmVudCIsIm9mZnNldFkiLCJjbG9uZWROb2RlIiwiY2xvbmVOb2RlIiwicm91bmQiLCJib3hTaXppbmciLCJwb2ludGVyRXZlbnRzIiwiZHJhZ0ltYWdlV3JhcHBlciIsImRhdGFUcmFuc2ZlciIsInNldERyYWdJbWFnZSIsImlzSW5FbGVtZW50IiwiaXNEcmFnRXZlbnQiLCJpc0Ryb3BFdmVudCIsImlzSW5wdXQiLCJ0YWdOYW1lIiwiaXNEcmFnZ2FibGUiLCJpc1NlbGVjdGFibGUiLCJpc0NvcHlFdmVudCIsImlzUGFzdGVFdmVudCIsImlzQ3V0RXZlbnQiLCJpc0NsaWNrRXZlbnQiLCJpc1ZhbGlkRHJhZ0hhbmRsZSIsImN1cnJlbnRTdGVwIiwiZGVsZXRlZCIsIm1hcHBlZFBvc2l0aW9uIiwibmV3UG9zaXRpb24iLCJnZXRNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsS0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsMkJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwyQkFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFDLENBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsa0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQywwQkFBQSxFQUFBQSxDQUFBLEtBQUFBLDBCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsMkJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwyQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLDZCQUFBLEVBQUFBLENBQUEsS0FBQUEsNkJBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQTVDLENBQUEsRUFBQUEsQ0FBQSxLQUFBQSxDQUFBO0VBQUE2QyxvQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLG9DQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsMkJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwyQkFBQTtFQUFBQyxpQkFB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S0FBQUEsZ0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGFB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aUM7SUFDbkMsSUFBSXE5QixPQUFBLEdBQVU7SUFFZCxNQUFNQyxjQUFBLEdBQWlCLEtBQUtscUMsV0FBQSxDQUFZNFEsS0FBQSxDQUFNN0gsS0FBQSxDQUFNLEtBQUtpaEMsV0FBVyxFQUFFNzBCLE1BQUEsQ0FBTyxDQUFDZzFCLFdBQUEsRUFBYXQ1QixJQUFBLEtBQVM7TUFDbEcsTUFBTWdRLFNBQUEsR0FBWWhRLElBQUEsQ0FBS3U1QixNQUFBLENBQU8sRUFBRXZwQixTQUFBLENBQVVzcEIsV0FBVztNQUVyRCxJQUFJdHBCLFNBQUEsQ0FBVW9wQixPQUFBLEVBQVM7UUFDckJBLE9BQUEsR0FBVTtNQUNaO01BRUEsT0FBT3BwQixTQUFBLENBQVV0WixHQUFBO0lBQ25CLEdBQUdxRixRQUFRO0lBRVgsT0FBTztNQUNMQSxRQUFBLEVBQVVzOUIsY0FBQTtNQUNWRDtJQUNGO0VBQ0Y7QUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=