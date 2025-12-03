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

// .beyond/uimport/temp/@tiptap/core.3.12.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvY29yZS4zLjEyLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jbGVhck5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY3JlYXRlUGFyYWdyYXBoTmVhci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2N1dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZVNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2V4aXRDb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZXh0ZW5kTWFya1JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc1RleHRTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Jlc29sdmVGb2N1c1Bvc2l0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvaW5zZXJ0Q29udGVudEF0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVOb2RlRnJvbUNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3NlbGVjdGlvblRvSW5zZXJ0aW9uRW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5JdGVtQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luSXRlbUZvcndhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luVGV4dGJsb2NrQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luVGV4dGJsb2NrRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9saWZ0RW1wdHlCbG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnRMaXN0SXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL25ld2xpbmVJbkNvZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RBbGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3ROb2RlQmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3ROb2RlRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFBhcmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RUZXh0YmxvY2tFbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZWxlY3RUZXh0YmxvY2tTdGFydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvY29tYmluZVRyYW5zYWN0aW9uU3RlcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlSFRNTC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0SFRNTEZyb21GcmFnbWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hQnlSZXNvbHZlZEV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlSlNPTi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2VuZXJhdGVUZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Tm9kZVNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldFRleHRTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zaW5rTGlzdEl0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zcGxpdEJsb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc3BsaXRMaXN0SXRlbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZUxpc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy93cmFwSW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy93cmFwSW5MaXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvRWRpdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvRXh0ZW5zaW9uTWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL1Bhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvY2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2RlbGV0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZHJvcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZWRpdGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2ZvY3VzRXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9rZXltYXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL3Bhc3RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy90YWJpbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvdGV4dERpcmVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvd3JhcHBpbmdJbnB1dFJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvY2FuSW5zZXJ0Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGVWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVDaGFpbmFibGVTdGF0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0NvbW1hbmRNYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9ibHVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY2xlYXJDb250ZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY29tbWFuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZUN1cnJlbnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlVHlwZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZU5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVSYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2VudGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzUmVnRXhwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL29iamVjdEluY2x1ZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtUeXBlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZmlyc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWluTWF4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzQW5kcm9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc2lPUy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2ZvY3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZm9yRWFjaC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luc2VydENvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZWxlbWVudEZyb21TdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNNYWNPUy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2tleWJvYXJkU2hvcnRjdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTm9kZUFjdGl2ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hVHlwZU5hbWVCeU5hbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZGVsZXRlUHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9yZXNldEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zY3JvbGxJbnRvVmlldy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvY3JlYXRlRG9jdW1lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRDb250ZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZGVmYXVsdEJsb2NrQXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRDaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZENoaWxkcmVuSW5SYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZFBhcmVudE5vZGVDbG9zZXN0VG9Qb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2ZpbmRQYXJlbnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRFeHRlbnNpb25GaWVsZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmxhdHRlbkV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNGdW5jdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jYWxsT3JSZXR1cm4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNFbXB0eU9iamVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvc3BsaXRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRBdHRyaWJ1dGVzRnJvbUV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWVyZ2VBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRSZW5kZXJlZEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZnJvbVN0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaW5qZWN0RXh0ZW5zaW9uQXR0cmlidXRlc1RvUGFyc2VSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2ZpbmREdXBsaWNhdGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zb3J0RXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcmVzb2x2ZUV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dEJldHdlZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHRTZXJpYWxpemVyc0Zyb21TY2hlbWEudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE5vZGVBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL3JlbW92ZUR1cGxpY2F0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldENoYW5nZWRSYW5nZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldERlYnVnSlNPTi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya3NCZXR3ZWVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlQXRQb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hVHlwZUJ5TmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U3BsaXR0ZWRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0Q29udGVudEZyb21Ob2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNNYXJrQWN0aXZlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0FjdGl2ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNBdEVuZE9mTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNBdFN0YXJ0T2ZOb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc0V4dGVuc2lvblJ1bGVzRW5hYmxlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNMaXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVFbXB0eS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvTWFwcGFibGVQb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcG9zVG9ET01SZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9yZXdyaXRlVW5rbm93bkNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRNYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0TWV0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldFRleHREaXJlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVNYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZVdyYXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bmRvSW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdW5zZXRBbGxNYXJrcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Vuc2V0TWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Vuc2V0VGV4dERpcmVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3VwZGF0ZUF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FdmVudEVtaXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNQbGFpbk9iamVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tZXJnZURlZXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbmRhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc051bWJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FeHRlbnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2NvbW1hbmRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTm9kZVBvcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3N0eWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2NyZWF0ZVN0eWxlVGFnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaW5wdXRSdWxlcy9tYXJrSW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaW5wdXRSdWxlcy9ub2RlSW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaW5wdXRSdWxlcy90ZXh0YmxvY2tUeXBlSW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaW5wdXRSdWxlcy90ZXh0SW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvanN4LXJ1bnRpbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9saWIvUmVzaXphYmxlTm9kZVZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZXNjYXBlRm9yUmVnRXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNTdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWFya2Rvd24vaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWFya2Rvd24vYXR0cmlidXRlVXRpbHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWFya2Rvd24vY3JlYXRlQXRvbUJsb2NrTWFya2Rvd25TcGVjLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21hcmtkb3duL2NyZWF0ZUJsb2NrTWFya2Rvd25TcGVjLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21hcmtkb3duL2NyZWF0ZUlubGluZU1hcmtkb3duU3BlYy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tYXJrZG93bi9wYXJzZUluZGVudGVkQmxvY2tzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21hcmtkb3duL3JlbmRlck5lc3RlZE1hcmtkb3duQ29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL01hcmtWaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvbWFya1Bhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvbm9kZVBhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3Bhc3RlUnVsZXMvdGV4dFBhc3RlUnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL1RyYWNrZXIudHMiXSwibmFtZXMiOlsiY29yZV8zXzEyXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ29tbWFuZE1hbmFnZXIiLCJFZGl0b3IiLCJFeHRlbmRhYmxlIiwiRXh0ZW5zaW9uIiwiRnJhZ21lbnQiLCJGcmFnbWVudDYiLCJJbnB1dFJ1bGUiLCJNYXBwYWJsZVBvc2l0aW9uIiwiTWFyayIsIk1hcmtWaWV3IiwiTm9kZSIsIk5vZGUzIiwiTm9kZVBvcyIsIk5vZGVWaWV3IiwiUGFzdGVSdWxlIiwiUmVzaXphYmxlTm9kZVZpZXciLCJSZXNpemFibGVOb2RldmlldyIsIlRyYWNrZXIiLCJjYWxsT3JSZXR1cm4iLCJjYW5JbnNlcnROb2RlIiwiY29tYmluZVRyYW5zYWN0aW9uU3RlcHMiLCJjb21tYW5kcyIsImNvbW1hbmRzX2V4cG9ydHMiLCJjcmVhdGVBdG9tQmxvY2tNYXJrZG93blNwZWMiLCJjcmVhdGVCbG9ja01hcmtkb3duU3BlYyIsImNyZWF0ZUNoYWluYWJsZVN0YXRlIiwiY3JlYXRlRG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaCIsImNyZWF0ZUlubGluZU1hcmtkb3duU3BlYyIsImNyZWF0ZU1hcHBhYmxlUG9zaXRpb24iLCJjcmVhdGVOb2RlRnJvbUNvbnRlbnQiLCJjcmVhdGVTdHlsZVRhZyIsImRlZmF1bHRCbG9ja0F0IiwiZGVsZXRlUHJvcHMiLCJlbGVtZW50RnJvbVN0cmluZyIsImVzY2FwZUZvclJlZ0V4IiwiZXh0ZW5zaW9ucyIsImV4dGVuc2lvbnNfZXhwb3J0cyIsImZpbmRDaGlsZHJlbiIsImZpbmRDaGlsZHJlbkluUmFuZ2UiLCJmaW5kRHVwbGljYXRlcyIsImZpbmRQYXJlbnROb2RlIiwiZmluZFBhcmVudE5vZGVDbG9zZXN0VG9Qb3MiLCJmbGF0dGVuRXh0ZW5zaW9ucyIsImZyb21TdHJpbmciLCJnZW5lcmF0ZUhUTUwiLCJnZW5lcmF0ZUpTT04iLCJnZW5lcmF0ZVRleHQiLCJnZXRBdHRyaWJ1dGVzIiwiZ2V0QXR0cmlidXRlc0Zyb21FeHRlbnNpb25zIiwiZ2V0Q2hhbmdlZFJhbmdlcyIsImdldERlYnVnSlNPTiIsImdldEV4dGVuc2lvbkZpZWxkIiwiZ2V0SFRNTEZyb21GcmFnbWVudCIsImdldE1hcmtBdHRyaWJ1dGVzIiwiZ2V0TWFya1JhbmdlIiwiZ2V0TWFya1R5cGUiLCJnZXRNYXJrc0JldHdlZW4iLCJnZXROb2RlQXRQb3NpdGlvbiIsImdldE5vZGVBdHRyaWJ1dGVzIiwiZ2V0Tm9kZVR5cGUiLCJnZXRSZW5kZXJlZEF0dHJpYnV0ZXMiLCJnZXRTY2hlbWEiLCJnZXRTY2hlbWFCeVJlc29sdmVkRXh0ZW5zaW9ucyIsImdldFNjaGVtYVR5cGVCeU5hbWUiLCJnZXRTY2hlbWFUeXBlTmFtZUJ5TmFtZSIsImdldFNwbGl0dGVkQXR0cmlidXRlcyIsImdldFRleHQiLCJnZXRUZXh0QmV0d2VlbiIsImdldFRleHRDb250ZW50RnJvbU5vZGVzIiwiZ2V0VGV4dFNlcmlhbGl6ZXJzRnJvbVNjaGVtYSIsImdldFVwZGF0ZWRQb3NpdGlvbiIsImluamVjdEV4dGVuc2lvbkF0dHJpYnV0ZXNUb1BhcnNlUnVsZSIsImlucHV0UnVsZXNQbHVnaW4iLCJpc0FjdGl2ZSIsImlzQW5kcm9pZCIsImlzQXRFbmRPZk5vZGUiLCJpc0F0U3RhcnRPZk5vZGUiLCJpc0VtcHR5T2JqZWN0IiwiaXNFeHRlbnNpb25SdWxlc0VuYWJsZWQiLCJpc0Z1bmN0aW9uIiwiaXNMaXN0IiwiaXNNYWNPUyIsImlzTWFya0FjdGl2ZSIsImlzTm9kZUFjdGl2ZSIsImlzTm9kZUVtcHR5IiwiaXNOb2RlU2VsZWN0aW9uIiwiaXNOdW1iZXIiLCJpc1BsYWluT2JqZWN0IiwiaXNSZWdFeHAiLCJpc1N0cmluZyIsImlzVGV4dFNlbGVjdGlvbiIsImlzaU9TIiwibWFya0lucHV0UnVsZSIsIm1hcmtQYXN0ZVJ1bGUiLCJtYXJrZG93biIsIm1hcmtkb3duX2V4cG9ydHMiLCJtZXJnZUF0dHJpYnV0ZXMiLCJtZXJnZURlZXAiLCJtaW5NYXgiLCJub2RlSW5wdXRSdWxlIiwibm9kZVBhc3RlUnVsZSIsIm9iamVjdEluY2x1ZGVzIiwicGFyc2VBdHRyaWJ1dGVzIiwicGFyc2VJbmRlbnRlZEJsb2NrcyIsInBhc3RlUnVsZXNQbHVnaW4iLCJwb3NUb0RPTVJlY3QiLCJyZW1vdmVEdXBsaWNhdGVzIiwicmVuZGVyTmVzdGVkTWFya2Rvd25Db250ZW50IiwicmVzb2x2ZUV4dGVuc2lvbnMiLCJyZXNvbHZlRm9jdXNQb3NpdGlvbiIsInJld3JpdGVVbmtub3duQ29udGVudCIsInNlbGVjdGlvblRvSW5zZXJ0aW9uRW5kIiwic2VyaWFsaXplQXR0cmlidXRlcyIsInNvcnRFeHRlbnNpb25zIiwic3BsaXRFeHRlbnNpb25zIiwidGV4dElucHV0UnVsZSIsInRleHRQYXN0ZVJ1bGUiLCJ0ZXh0YmxvY2tUeXBlSW5wdXRSdWxlIiwidXBkYXRlTWFya1ZpZXdBdHRyaWJ1dGVzIiwid3JhcHBpbmdJbnB1dFJ1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3RyYW5zZm9ybSIsInJlcXVpcmUiLCJpbXBvcnRfY29tbWFuZHMiLCJpbXBvcnRfc3RhdGUiLCJpbXBvcnRfY29tbWFuZHMyIiwiaW1wb3J0X2NvbW1hbmRzMyIsImltcG9ydF9zdGF0ZTIiLCJpbXBvcnRfc3RhdGUzIiwiaW1wb3J0X3N0YXRlNCIsImltcG9ydF9tb2RlbCIsImltcG9ydF9tb2RlbDIiLCJpbXBvcnRfc3RhdGU1IiwiaW1wb3J0X3RyYW5zZm9ybTIiLCJpbXBvcnRfY29tbWFuZHM0IiwiaW1wb3J0X3RyYW5zZm9ybTMiLCJpbXBvcnRfdHJhbnNmb3JtNCIsImltcG9ydF9jb21tYW5kczUiLCJpbXBvcnRfY29tbWFuZHM2IiwiaW1wb3J0X2NvbW1hbmRzNyIsImltcG9ydF9jb21tYW5kczgiLCJpbXBvcnRfc2NoZW1hX2xpc3QiLCJpbXBvcnRfY29tbWFuZHM5IiwiaW1wb3J0X3N0YXRlNiIsImltcG9ydF9jb21tYW5kczEwIiwiaW1wb3J0X2NvbW1hbmRzMTEiLCJpbXBvcnRfY29tbWFuZHMxMiIsImltcG9ydF9jb21tYW5kczEzIiwiaW1wb3J0X2NvbW1hbmRzMTQiLCJpbXBvcnRfdHJhbnNmb3JtNSIsImltcG9ydF9tb2RlbDMiLCJpbXBvcnRfbW9kZWw0IiwiaW1wb3J0X21vZGVsNSIsImltcG9ydF9tb2RlbDYiLCJpbXBvcnRfbW9kZWw3IiwiaW1wb3J0X3N0YXRlNyIsImltcG9ydF9jb21tYW5kczE1IiwiaW1wb3J0X3N0YXRlOCIsImltcG9ydF9zdGF0ZTkiLCJpbXBvcnRfc2NoZW1hX2xpc3QyIiwiaW1wb3J0X3N0YXRlMTAiLCJpbXBvcnRfdHJhbnNmb3JtNiIsImltcG9ydF9tb2RlbDgiLCJpbXBvcnRfc3RhdGUxMSIsImltcG9ydF90cmFuc2Zvcm03IiwiaW1wb3J0X3RyYW5zZm9ybTgiLCJpbXBvcnRfY29tbWFuZHMxNiIsImltcG9ydF9zY2hlbWFfbGlzdDMiLCJpbXBvcnRfc3RhdGUxMiIsImltcG9ydF92aWV3IiwiaW1wb3J0X2tleW1hcCIsImltcG9ydF9tb2RlbDkiLCJpbXBvcnRfc3RhdGUxMyIsImltcG9ydF9tb2RlbDEwIiwiaW1wb3J0X3N0YXRlMTQiLCJpbXBvcnRfc3RhdGUxNSIsImltcG9ydF90cmFuc2Zvcm05IiwiaW1wb3J0X3N0YXRlMTYiLCJpbXBvcnRfc3RhdGUxNyIsImltcG9ydF9zdGF0ZTE4IiwiaW1wb3J0X3N0YXRlMTkiLCJpbXBvcnRfc3RhdGUyMCIsImltcG9ydF9zdGF0ZTIxIiwiaW1wb3J0X3N0YXRlMjIiLCJpbXBvcnRfdHJhbnNmb3JtMTAiLCJpbXBvcnRfc3RhdGUyMyIsImltcG9ydF9zdGF0ZTI0IiwiY29uZmlnIiwic3RhdGUiLCJ0cmFuc2FjdGlvbiIsInNlbGVjdGlvbiIsImRvYyIsInN0b3JlZE1hcmtzIiwiYXBwbHkiLCJiaW5kIiwiYXBwbHlUcmFuc2FjdGlvbiIsInBsdWdpbnMiLCJzY2hlbWEiLCJyZWNvbmZpZ3VyZSIsInRvSlNPTiIsInRyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImVkaXRvciIsInJhd0NvbW1hbmRzIiwiZXh0ZW5zaW9uTWFuYWdlciIsImN1c3RvbVN0YXRlIiwiaGFzQ3VzdG9tU3RhdGUiLCJ2aWV3IiwiYnVpbGRQcm9wcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJjb21tYW5kMiIsIm1ldGhvZCIsImFyZ3MiLCJjYWxsYmFjayIsImdldE1ldGEiLCJkaXNwYXRjaCIsImNoYWluIiwiY3JlYXRlQ2hhaW4iLCJjYW4iLCJjcmVhdGVDYW4iLCJzdGFydFRyIiwic2hvdWxkRGlzcGF0Y2giLCJjYWxsYmFja3MiLCJoYXNTdGFydFRyYW5zYWN0aW9uIiwicnVuMyIsInJ1biIsImV2ZXJ5IiwiY2hhaW5lZENvbW1hbmQiLCJwdXNoIiwiZm9ybWF0dGVkQ29tbWFuZHMiLCJfX2V4cG9ydDIiLCJibHVyIiwiY2xlYXJDb250ZW50IiwiY2xlYXJOb2RlcyIsImNvbW1hbmQiLCJjcmVhdGVQYXJhZ3JhcGhOZWFyIiwiY3V0IiwiZGVsZXRlQ3VycmVudE5vZGUiLCJkZWxldGVOb2RlIiwiZGVsZXRlUmFuZ2UiLCJkZWxldGVTZWxlY3Rpb24iLCJlbnRlciIsImV4aXRDb2RlIiwiZXh0ZW5kTWFya1JhbmdlIiwiZmlyc3QiLCJmb2N1cyIsImZvckVhY2giLCJpbnNlcnRDb250ZW50IiwiaW5zZXJ0Q29udGVudEF0Iiwiam9pbkJhY2t3YXJkIiwiam9pbkRvd24iLCJqb2luRm9yd2FyZCIsImpvaW5JdGVtQmFja3dhcmQiLCJqb2luSXRlbUZvcndhcmQiLCJqb2luVGV4dGJsb2NrQmFja3dhcmQiLCJqb2luVGV4dGJsb2NrRm9yd2FyZCIsImpvaW5VcCIsImtleWJvYXJkU2hvcnRjdXQiLCJsaWZ0IiwibGlmdEVtcHR5QmxvY2siLCJsaWZ0TGlzdEl0ZW0iLCJuZXdsaW5lSW5Db2RlIiwicmVzZXRBdHRyaWJ1dGVzIiwic2Nyb2xsSW50b1ZpZXciLCJzZWxlY3RBbGwiLCJzZWxlY3ROb2RlQmFja3dhcmQiLCJzZWxlY3ROb2RlRm9yd2FyZCIsInNlbGVjdFBhcmVudE5vZGUiLCJzZWxlY3RUZXh0YmxvY2tFbmQiLCJzZWxlY3RUZXh0YmxvY2tTdGFydCIsInNldENvbnRlbnQiLCJzZXRNYXJrIiwic2V0TWV0YSIsInNldE5vZGUiLCJzZXROb2RlU2VsZWN0aW9uIiwic2V0VGV4dERpcmVjdGlvbiIsInNldFRleHRTZWxlY3Rpb24iLCJzaW5rTGlzdEl0ZW0iLCJzcGxpdEJsb2NrIiwic3BsaXRMaXN0SXRlbSIsInRvZ2dsZUxpc3QiLCJ0b2dnbGVNYXJrIiwidG9nZ2xlTm9kZSIsInRvZ2dsZVdyYXAiLCJ1bmRvSW5wdXRSdWxlIiwidW5zZXRBbGxNYXJrcyIsInVuc2V0TWFyayIsInVuc2V0VGV4dERpcmVjdGlvbiIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJ3cmFwSW4iLCJ3cmFwSW5MaXN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX2EiLCJpc0Rlc3Ryb3llZCIsImRvbSIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImVtaXRVcGRhdGUiLCJyYW5nZXMiLCIkZnJvbSIsIiR0byIsIm5vZGVzQmV0d2VlbiIsInBvcyIsIm5vZGUiLCJ0eXBlIiwiaXNUZXh0IiwibWFwcGluZyIsIiRtYXBwZWRGcm9tIiwicmVzb2x2ZSIsIiRtYXBwZWRUbyIsIm5vZGVTaXplIiwibm9kZVJhbmdlIiwiYmxvY2tSYW5nZSIsInRhcmdldExpZnREZXB0aCIsImxpZnRUYXJnZXQiLCJpc1RleHRibG9jayIsImRlZmF1bHRUeXBlIiwicGFyZW50IiwiY29udGVudE1hdGNoQXQiLCJpbmRleCIsInNldE5vZGVNYXJrdXAiLCJzdGFydCIsImZuIiwib3JpZ2luUmFuZ2UiLCJ0YXJnZXRQb3MiLCJjb250ZW50U2xpY2UiLCJzbGljZSIsImZyb20iLCJ0byIsIm5ld1BvcyIsImluc2VydCIsImNvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJUZXh0U2VsZWN0aW9uIiwiTWF0aCIsIm1heCIsImN1cnJlbnROb2RlIiwiJGFuY2hvciIsInNpemUiLCIkcG9zIiwiZGVwdGgiLCJiZWZvcmUiLCJhZnRlciIsImRlbGV0ZSIsIm5hbWVPclR5cGUiLCJub2RlcyIsIkVycm9yIiwidHlwZU9yTmFtZSIsInJhbmdlIiwidmFsdWUiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJvYmplY3QxIiwib2JqZWN0MiIsIm9wdGlvbnMiLCJzdHJpY3QiLCJrZXlzIiwibGVuZ3RoIiwia2V5IiwidGVzdCIsImZpbmRNYXJrSW5TZXQiLCJtYXJrcyIsImF0dHJpYnV0ZXMiLCJmaW5kIiwiaXRlbSIsImsiLCJhdHRycyIsImlzTWFya0luU2V0IiwiY2hpbGRBZnRlciIsInBhcmVudE9mZnNldCIsInNvbWUiLCJtYXJrMiIsImNoaWxkQmVmb3JlIiwibWFyayIsInN0YXJ0SW5kZXgiLCJzdGFydFBvcyIsIm9mZnNldCIsImVuZEluZGV4IiwiZW5kUG9zIiwiY2hpbGQiLCJjaGlsZENvdW50IiwibmV3U2VsZWN0aW9uIiwiY3JlYXRlIiwiaXRlbXMiLCJpIiwibWluIiwicG9zaXRpb24iLCJzZWxlY3Rpb25BdFN0YXJ0IiwiU2VsZWN0aW9uIiwiYXRTdGFydCIsInNlbGVjdGlvbkF0RW5kIiwiYXRFbmQiLCJtaW5Qb3MiLCJtYXhQb3MiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsInVzZXJBZ2VudCIsImluY2x1ZGVzIiwiZG9jdW1lbnQiLCJkZWxheWVkRm9jdXMiLCJoYXNGb2N1cyIsImlzU2FtZVNlbGVjdGlvbiIsImVxIiwic2V0U3RvcmVkTWFya3MiLCJyZW1vdmVXaGl0ZXNwYWNlcyIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsIm5vZGVUeXBlIiwibm9kZVZhbHVlIiwicmVtb3ZlQ2hpbGQiLCJ3cmFwcGVkVmFsdWUiLCJodG1sIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsInBhcnNlT3B0aW9ucyIsImlzSlNPTkNvbnRlbnQiLCJpc1RleHRDb250ZW50IiwiaXNBcnJheUNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJmcm9tQXJyYXkiLCJub2RlRnJvbUpTT04iLCJlcnJvck9uSW52YWxpZENvbnRlbnQiLCJjaGVjayIsImVycm9yIiwiY2F1c2UiLCJjb25zb2xlIiwid2FybiIsImhhc0ludmFsaWRDb250ZW50IiwiaW52YWxpZENvbnRlbnQiLCJjb250ZW50Q2hlY2tTY2hlbWEiLCJTY2hlbWEiLCJ0b3BOb2RlIiwic3BlYyIsImFwcGVuZCIsIl9fdGlwdGFwX19wcml2YXRlX191bmtub3duX19jYXRjaF9fYWxsX19ub2RlIiwiZ3JvdXAiLCJwYXJzZURPTSIsInRhZyIsImdldEF0dHJzIiwiZSIsIm91dGVySFRNTCIsImZyb21TY2hlbWEiLCJwYXJzZVNsaWNlIiwicGFyc2UiLCJwYXJzZXIiLCJzdGFydExlbiIsImJpYXMiLCJsYXN0Iiwic3RlcHMiLCJzdGVwIiwiUmVwbGFjZVN0ZXAiLCJSZXBsYWNlQXJvdW5kU3RlcCIsIm1hcHMiLCJlbmQiLCJfZnJvbSIsIl90byIsIl9uZXdGcm9tIiwibmV3VG8iLCJuZWFyIiwiaXNGcmFnbWVudCIsIm5vZGVPckZyYWdtZW50IiwidXBkYXRlU2VsZWN0aW9uIiwiYXBwbHlJbnB1dFJ1bGVzIiwiYXBwbHlQYXN0ZVJ1bGVzIiwiZW1pdENvbnRlbnRFcnJvciIsImVtaXQiLCJkaXNhYmxlQ29sbGFib3JhdGlvbiIsInN0b3JhZ2UiLCJjb2xsYWJvcmF0aW9uIiwiaXNEaXNhYmxlZCIsInByZXNlcnZlV2hpdGVzcGFjZSIsImVuYWJsZUNvbnRlbnRDaGVjayIsImlzT25seVRleHRDb250ZW50IiwiaXNPbmx5QmxvY2tDb250ZW50IiwiaXNCbG9jayIsImlzRW1wdHlUZXh0QmxvY2siLCJjb2RlIiwibmV3Q29udGVudCIsInYiLCJ0ZXh0Iiwiam9pbiIsImluc2VydFRleHQiLCIkZnJvbU5vZGUiLCJmcm9tU2VsZWN0aW9uQXRTdGFydCIsImlzVGV4dFNlbGVjdGlvbjIiLCJoYXNDb250ZW50IiwicmVwbGFjZVdpdGgiLCJwb2ludCIsImpvaW5Qb2ludCIsIm5vcm1hbGl6ZUtleU5hbWUiLCJwYXJ0cyIsInNwbGl0IiwicmVzdWx0IiwiYWx0IiwiY3RybCIsInNoaWZ0IiwibWV0YSIsIm1vZCIsImV2ZW50IiwiS2V5Ym9hcmRFdmVudCIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNhcHR1cmVkVHJhbnNhY3Rpb24iLCJjYXB0dXJlVHJhbnNhY3Rpb24iLCJzb21lUHJvcCIsImYiLCJuZXdTdGVwIiwibWF5YmVTdGVwIiwiZW1wdHkiLCJub2RlUmFuZ2VzIiwicmVsYXRpdmVGcm9tIiwicmVsYXRpdmVUbyIsInNlbGVjdGlvblJhbmdlIiwibWF0Y2hlZE5vZGVSYW5nZXMiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJzdW0iLCJpc0FjdGl2ZTIiLCJvYmoiLCJwcm9wT3JQcm9wcyIsIm5ld09iaiIsInByb3AiLCJtYXJrVHlwZSIsInNjaGVtYVR5cGUiLCJjYW5SZXNldCIsImFkZE1hcmsiLCJBbGxTZWxlY3Rpb24iLCJkb2N1bWVudDIiLCIkaGVhZCIsIm1hcmtJdGVtIiwib2xkRG9jIiwidHJhbnNhY3Rpb25zIiwidHJhbnNmb3JtIiwiVHJhbnNmb3JtIiwibWF0Y2giLCJlZGdlQ291bnQiLCJlZGdlIiwiaGFzUmVxdWlyZWRBdHRycyIsInByZWRpY2F0ZSIsIm5vZGVzV2l0aFBvcyIsImRlc2NlbmRhbnRzIiwiZXh0ZW5zaW9uIiwiZmllbGQiLCJjb250ZXh0IiwiYWRkRXh0ZW5zaW9ucyIsImZsYXQiLCJmcmFnbWVudCIsImRvY3VtZW50RnJhZ21lbnQiLCJET01TZXJpYWxpemVyIiwic2VyaWFsaXplRnJhZ21lbnQiLCJ0ZW1wb3JhcnlEb2N1bWVudCIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJpbm5lckhUTUwiLCJiYXNlRXh0ZW5zaW9ucyIsIm5vZGVFeHRlbnNpb25zIiwibWFya0V4dGVuc2lvbnMiLCJleHRlbnNpb25BdHRyaWJ1dGVzIiwibm9kZUFuZE1hcmtFeHRlbnNpb25zIiwiZGVmYXVsdEF0dHJpYnV0ZSIsImRlZmF1bHQiLCJ2YWxpZGF0ZSIsInJlbmRlcmVkIiwicmVuZGVySFRNTCIsInBhcnNlSFRNTCIsImtlZXBPblNwbGl0IiwiaXNSZXF1aXJlZCIsImFkZEdsb2JhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGVzIiwiZ2xvYmFsQXR0cmlidXRlIiwidHlwZXMiLCJhdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGVzIiwibWVyZ2VkQXR0ciIsIm9iamVjdHMiLCJtZXJnZWRBdHRyaWJ1dGVzIiwiZXhpc3RzIiwidmFsdWVDbGFzc2VzIiwiU3RyaW5nIiwiZXhpc3RpbmdDbGFzc2VzIiwiaW5zZXJ0Q2xhc3NlcyIsInZhbHVlQ2xhc3MiLCJuZXdTdHlsZXMiLCJzdHlsZTIiLCJ0cmltIiwiQm9vbGVhbiIsImV4aXN0aW5nU3R5bGVzIiwic3R5bGVNYXAiLCJNYXAiLCJwcm9wZXJ0eSIsInZhbCIsInBhcnQiLCJzZXQiLCJub2RlT3JNYXJrIiwiTnVtYmVyIiwicGFyc2VSdWxlIiwib2xkQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGUiLCJjbGVhblVwU2NoZW1hSXRlbSIsImRhdGEiLCJidWlsZEF0dHJpYnV0ZVNwZWMiLCJleHRlbnNpb25BdHRyaWJ1dGUiLCJfYiIsImFsbEF0dHJpYnV0ZXMiLCJleHRyYU5vZGVGaWVsZHMiLCJmaWVsZHMiLCJleHRlbmROb2RlU2NoZW1hIiwiaW5saW5lIiwiYXRvbSIsInNlbGVjdGFibGUiLCJkcmFnZ2FibGUiLCJ3aGl0ZXNwYWNlIiwibGluZWJyZWFrUmVwbGFjZW1lbnQiLCJkZWZpbmluZyIsImlzb2xhdGluZyIsInRvRE9NIiwiSFRNTEF0dHJpYnV0ZXMiLCJyZW5kZXJUZXh0IiwidG9UZXh0IiwiZXh0cmFNYXJrRmllbGRzIiwiZXh0ZW5kTWFya1NjaGVtYSIsImluY2x1c2l2ZSIsImV4Y2x1ZGVzIiwic3Bhbm5pbmciLCJmaWx0ZXJlZCIsImVsIiwiaW5kZXhPZiIsIlNldCIsImRlZmF1bHRQcmlvcml0eSIsInNvcnQiLCJhIiwiYiIsInByaW9yaXR5QSIsInByaW9yaXR5QiIsInJlc29sdmVkRXh0ZW5zaW9ucyIsImR1cGxpY2F0ZWROYW1lcyIsImNvbnRlbnROb2RlIiwiZnJvbUpTT04iLCJzdGFydE5vZGUiLCJibG9ja1NlcGFyYXRvciIsInRleHRTZXJpYWxpemVycyIsInRleHRTZXJpYWxpemVyIiwibm9kZTIiLCJyZXZlcnNlIiwibm9kZUl0ZW0iLCJhcnJheSIsImJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlZW4iLCJoYXNPd25Qcm9wZXJ0eSIsInNpbXBsaWZ5Q2hhbmdlZFJhbmdlcyIsImNoYW5nZXMiLCJ1bmlxdWVDaGFuZ2VzIiwiY2hhbmdlIiwicmVzdCIsIl8iLCJvdGhlckNoYW5nZSIsIm9sZFJhbmdlIiwibmV3UmFuZ2UiLCJzdGVwTWFwIiwibmV3U3RhcnQiLCJuZXdFbmQiLCJvbGRTdGFydCIsImludmVydCIsIm9sZEVuZCIsInN0YXJ0T2Zmc2V0IiwiaXNUb3BOb2RlIiwidG9wTm9kZVR5cGUiLCJpbmNyZW1lbnQiLCJvdXRwdXQyIiwib3V0cHV0IiwibWF4RGVwdGgiLCJjdXJyZW50RGVwdGgiLCJ0eXBlTmFtZSIsIm1heE1hdGNoIiwidGV4dEJlZm9yZSIsInNsaWNlRW5kUG9zIiwiY2h1bmsiLCJ0ZXh0Q29udGVudCIsImlzQXRvbSIsIm1hcmtSYW5nZXMiLCJyYW5nZTIiLCJtYXRjaGVkUmFuZ2UiLCJtYXJrUmFuZ2UiLCJleGNsdWRlZFJhbmdlIiwicGFyZW50Tm9kZSIsIiRwYXJlbnRQb3MiLCJlbmFibGVkIiwiZW5hYmxlZEV4dGVuc2lvbiIsImNoZWNrQ2hpbGRyZW4iLCJpZ25vcmVXaGl0ZXNwYWNlIiwiaXNMZWFmIiwiaXNDb250ZW50RW1wdHkiLCJjaGlsZE5vZGUiLCJOb2RlU2VsZWN0aW9uIiwiX01hcHBhYmxlUG9zaXRpb24iLCJqc29uIiwibWFwUmVzdWx0IiwicmVzb2x2ZWRGcm9tIiwicmVzb2x2ZWRFbmQiLCJjb29yZHNBdFBvcyIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJyZXdyaXRlVW5rbm93bkNvbnRlbnRJbm5lciIsInZhbGlkTWFya3MiLCJ2YWxpZE5vZGVzIiwicmV3cml0dGVuQ29udGVudCIsImhhcyIsIm9yaWdpbmFsIiwidW5zdXBwb3J0ZWQiLCJmYWxsYmFja1RvUGFyYWdyYXBoIiwiY2FuU2V0TWFyayIsIm5ld01hcmtUeXBlIiwiY3Vyc29yIiwiJGN1cnNvciIsImN1cnJlbnRNYXJrcyIsInBhcmVudEFsbG93c01hcmtUeXBlIiwiYWxsb3dzTWFya1R5cGUiLCJpc0luU2V0Iiwic29tZU5vZGVTdXBwb3J0c01hcmsiLCJpbmxpbmVDb250ZW50IiwiX3BvcyIsImlzSW5saW5lIiwiY3VycmVudE1hcmtzQWxsb3dNYXJrVHlwZSIsIm90aGVyTWFyayIsImFkZFN0b3JlZE1hcmsiLCJ0cmltbWVkRnJvbSIsInRyaW1tZWRUbyIsInNvbWVIYXNNYXJrIiwiYXR0cmlidXRlc1RvQ29weSIsInNhbWVQYXJlbnQiLCJjYW5TZXRCbG9jayIsInNldEJsb2NrVHlwZSIsInVwZGF0ZWRTdGF0ZSIsImRpcmVjdGlvbiIsImRpciIsImVuc3VyZU1hcmtzIiwic3BsaXR0YWJsZU1hcmtzIiwiZmlsdGVyZWRNYXJrcyIsImtlZXBNYXJrcyIsImNhblNwbGl0IiwiZGVmbHQiLCJpbmRleEFmdGVyIiwiZmlyc3QyIiwiJGZpcnN0IiwiY2FuUmVwbGFjZVdpdGgiLCJvdmVycmlkZUF0dHJzIiwiZ3JhbmRQYXJlbnQiLCJ3cmFwIiwiZGVwdGhCZWZvcmUiLCJkIiwiY29weSIsImRlcHRoQWZ0ZXIiLCJuZXdOZXh0VHlwZUF0dHJpYnV0ZXMyIiwibmV4dFR5cGUyIiwiY29udGVudE1hdGNoIiwiY3JlYXRlQW5kRmlsbCIsInJlcGxhY2UiLCJTbGljZSIsInNlbCIsIm4iLCJuZXh0VHlwZSIsIm5ld1R5cGVBdHRyaWJ1dGVzIiwibmV3TmV4dFR5cGVBdHRyaWJ1dGVzIiwiam9pbkxpc3RCYWNrd2FyZHMiLCJsaXN0VHlwZSIsImxpc3QiLCJub2RlQmVmb3JlIiwibm9kZUF0IiwiY2FuSm9pbkJhY2t3YXJkcyIsImNhbkpvaW4iLCJqb2luTGlzdEZvcndhcmRzIiwibm9kZUFmdGVyIiwiY2FuSm9pbkZvcndhcmRzIiwibGlzdFR5cGVPck5hbWUiLCJpdGVtVHlwZU9yTmFtZSIsIml0ZW1UeXBlIiwicGFyZW50TGlzdCIsInZhbGlkQ29udGVudCIsImNhbldyYXBJbkxpc3QiLCJleHRlbmRFbXB0eU1hcmtSYW5nZSIsInRvZ2dsZVR5cGVPck5hbWUiLCJ0b2dnbGVUeXBlIiwicGx1Z2luIiwidW5kb2FibGUiLCJpc0lucHV0UnVsZXMiLCJnZXRTdGF0ZSIsInRvVW5kbyIsImoiLCJkb2NzIiwicmVtb3ZlTWFyayIsInJlbW92ZVN0b3JlZE1hcmsiLCJuZXdBdHRycyIsImNhblVwZGF0ZSIsImxhc3RQb3MiLCJsYXN0Tm9kZSIsInRyaW1tZWRGcm9tMiIsInRyaW1tZWRUbzIiLCJFdmVudEVtaXR0ZXIiLCJvbiIsIm9mZiIsIm9uY2UiLCJvbmNlRm4iLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJoYW5kbGVyIiwiaW5wdXRSdWxlTWF0Y2hlckhhbmRsZXIiLCJleGVjIiwiaW5wdXRSdWxlTWF0Y2giLCJpbnB1dCIsInJ1bGVzIiwiY29tcG9zaW5nIiwibWF0Y2hlZCIsInJ1bGUiLCJQbHVnaW4iLCJpbml0IiwicHJldiIsInN0b3JlZCIsInNpbXVsYXRlZElucHV0TWV0YSIsImlzU2ltdWxhdGVkSW5wdXQiLCJzZXRUaW1lb3V0Iiwic2VsZWN0aW9uU2V0IiwiZG9jQ2hhbmdlZCIsImhhbmRsZVRleHRJbnB1dCIsImhhbmRsZURPTUV2ZW50cyIsImNvbXBvc2l0aW9uZW5kIiwiaGFuZGxlS2V5RG93biIsImdldFR5cGUiLCJnZXRQcm90b3R5cGVPZiIsInRhcmdldCIsInNvdXJjZSIsImNvbmZpZ3VyZSIsImV4dGVuZCIsImFkZE9wdGlvbnMiLCJleHRlbmRlZENvbmZpZyIsIl9NYXJrIiwiYXJndW1lbnRzIiwicmVzb2x2ZWRDb25maWciLCJoYW5kbGVFeGl0IiwiY3VycmVudFBvcyIsImlzQXRFbmQiLCJpc0luTWFyayIsIm0iLCJwYXN0ZVJ1bGVNYXRjaGVySGFuZGxlciIsIm1hdGNoQWxsIiwibWF0Y2hlcyIsInBhc3RlUnVsZU1hdGNoIiwicnVuMiIsInBhc3RlRXZlbnQiLCJkcm9wRXZlbnQiLCJoYW5kbGVycyIsIl9jIiwiX2QiLCJfZSIsImNvbnRlbnRTaXplIiwicmVzb2x2ZWRUbyIsInRleHRUb01hdGNoIiwidGV4dEJldHdlZW4iLCJzdWNjZXNzIiwidGlwdGFwRHJhZ0Zyb21PdGhlckVkaXRvciIsImNyZWF0ZUNsaXBib2FyZFBhc3RlRXZlbnQiLCJDbGlwYm9hcmRFdmVudCIsImNsaXBib2FyZERhdGEiLCJEYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZHJhZ1NvdXJjZUVsZW1lbnQiLCJpc1Bhc3RlZEZyb21Qcm9zZU1pcnJvciIsImlzRHJvcHBlZEZyb21Qcm9zZU1pcnJvciIsIkRyYWdFdmVudCIsInByb2Nlc3NFdmVudCIsInBhc3RlRXZ0IiwiY2hhaW5hYmxlU3RhdGUiLCJoYW5kbGVEcmFnc3RhcnQiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJoYW5kbGVEcmFnZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJvcCIsImRyYWdGcm9tT3RoZXJFZGl0b3IiLCJpc0VkaXRhYmxlIiwicGFzdGUiLCJfdmlldyIsImdldERhdGEiLCJhcHBlbmRUcmFuc2FjdGlvbiIsIm9sZFN0YXRlIiwiaXNQYXN0ZSIsImlzRHJvcCIsInNpbXVsYXRlZFBhc3RlTWV0YSIsImlzU2ltdWxhdGVkUGFzdGUiLCJmcm9tMiIsInRvMiIsImZpbmREaWZmU3RhcnQiLCJmaW5kRGlmZkVuZCIsIkV4dGVuc2lvbk1hbmFnZXIiLCJzZXR1cEV4dGVuc2lvbnMiLCJleHRlbnNpb25TdG9yYWdlIiwiYWRkQ29tbWFuZHMiLCJhbGxQbHVnaW5zIiwiZmxhdE1hcCIsImFkZEtleWJvYXJkU2hvcnRjdXRzIiwiZGVmYXVsdEJpbmRpbmdzIiwiQXJyb3dSaWdodCIsImJpbmRpbmdzIiwic2hvcnRjdXQiLCJrZXlNYXBQbHVnaW4iLCJrZXltYXAiLCJhZGRJbnB1dFJ1bGVzIiwiZW5hYmxlSW5wdXRSdWxlcyIsImlucHV0UmVzdWx0IiwiaW5wdXRQbHVnaW5zIiwiYWRkUGFzdGVSdWxlcyIsImVuYWJsZVBhc3RlUnVsZXMiLCJwYXN0ZVJ1bGVzIiwiYWRkUHJvc2VNaXJyb3JQbHVnaW5zIiwicHJvc2VNaXJyb3JQbHVnaW5zIiwibm9kZVZpZXdzIiwiYWRkTm9kZVZpZXciLCJub2RlVmlld1Jlc3VsdCIsIm5vZGV2aWV3IiwiZ2V0UG9zIiwiZGVjb3JhdGlvbnMiLCJpbm5lckRlY29yYXRpb25zIiwibWFya1ZpZXdzIiwiYWRkTWFya1ZpZXciLCJtYXJrVmlldyIsIm9uQmVmb3JlQ3JlYXRlIiwib25DcmVhdGUiLCJvblVwZGF0ZSIsIm9uU2VsZWN0aW9uVXBkYXRlIiwib25UcmFuc2FjdGlvbiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkRlc3Ryb3kiLCJmbGF0dGVuIiwiQ2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIiLCJDb21tYW5kcyIsIkRlbGV0ZSIsIkRyb3AiLCJFZGl0YWJsZSIsIkZvY3VzRXZlbnRzIiwiS2V5bWFwIiwiUGFzdGUiLCJUYWJpbmRleCIsIlRleHREaXJlY3Rpb24iLCJmb2N1c0V2ZW50c1BsdWdpbktleSIsIl9FeHRlbnNpb24iLCJQbHVnaW5LZXkiLCJjbGlwYm9hcmRUZXh0U2VyaWFsaXplciIsImFwcGVuZGVkVHJhbnNhY3Rpb25zIiwiX2EyIiwiX2IyIiwiX2MyIiwiY29yZUV4dGVuc2lvbk9wdGlvbnMiLCJmaWx0ZXJUcmFuc2FjdGlvbiIsIm5leHRUcmFuc2FjdGlvbiIsImRlbGV0ZWRBZnRlciIsImRlbGV0ZWRCZWZvcmUiLCJpc0Z1bGx5V2l0aGluUmFuZ2UiLCJuZXdGcm9tIiwiZGVsZXRlZFJhbmdlIiwicGFydGlhbCIsImNvbWJpbmVkVHJhbnNmb3JtIiwiX2EzIiwiX2IzIiwiUmVtb3ZlTWFya1N0ZXAiLCJmb3VuZEJlZm9yZU1hcmsiLCJmb3VuZEFmdGVyTWFyayIsImFzeW5jIiwiaGFuZGxlRHJvcCIsIm1vdmVkIiwiZWRpdGFibGUiLCJpc0ZvY3VzZWQiLCJoYW5kbGVCYWNrc3BhY2UiLCJwYXJlbnRJc0lzb2xhdGluZyIsInBhcmVudFBvcyIsImlzQXRTdGFydCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUVudGVyIiwiYmFzZUtleW1hcCIsIkVudGVyIiwiTW9kLUVudGVyIiwiQmFja3NwYWNlIiwiTW9kLWEiLCJwY0tleW1hcCIsIm1hY0tleW1hcCIsIkN0cmwtYSIsIkN0cmwtZSIsIm5ld1N0YXRlIiwidHIyIiwiZG9jQ2hhbmdlcyIsImlnbm9yZVRyIiwiYWxsRnJvbSIsImFsbEVuZCIsImFsbFdhc1NlbGVjdGVkIiwiaXNFbXB0eSIsImhhbmRsZVBhc3RlIiwidGFiaW5kZXgiLCJlbGVtZW50IiwiX05vZGVQb3MiLCJhY3R1YWxEZXB0aCIsInJlc29sdmVkUG9zIiwiZG9tQXRQb3MiLCJpc05vblRleHRBdG9tIiwiY2hpbGROb2RlUG9zIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImNsb3Nlc3QiLCJzZWxlY3RvciIsIm5vZGVBdHRyaWJ1dGVzIiwiYXR0cktleXMiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZpcnN0SXRlbU9ubHkiLCJjaGlsZFBvcyIsImRvZXNBbGxBdHRyaWJ1dGVzTWF0Y2giLCJjb25jYXQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsIm5vbmNlIiwic3VmZml4IiwidGlwdGFwU3R5bGVUYWciLCJzdHlsZU5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNzcyIsImNsYXNzTmFtZSIsImVkaXRvclZpZXciLCJpc0luaXRpYWxpemVkIiwiaW5zdGFuY2VJZCIsInJhbmRvbSIsImluamVjdENTUyIsImluamVjdE5vbmNlIiwiYXV0b2ZvY3VzIiwidGV4dERpcmVjdGlvbiIsImVkaXRvclByb3BzIiwiZW5hYmxlQ29yZUV4dGVuc2lvbnMiLCJvbk1vdW50Iiwib25Vbm1vdW50Iiwib25Db250ZW50RXJyb3IiLCJvblBhc3RlIiwib25Ecm9wIiwib25EZWxldGUiLCJpc0NhcHR1cmluZ1RyYW5zYWN0aW9uIiwidXRpbHMiLCJzZXRPcHRpb25zIiwiY3JlYXRlRXh0ZW5zaW9uTWFuYWdlciIsImNyZWF0ZUNvbW1hbmRNYW5hZ2VyIiwiY3JlYXRlU2NoZW1hIiwiaW5pdGlhbERvYyIsImNyZWF0ZURvYyIsImVkaXRvclN0YXRlIiwiRWRpdG9yU3RhdGUiLCJtb3VudCIsImNyZWF0ZVZpZXciLCJoZWFkIiwidW5tb3VudCIsInJlbW92ZSIsImNvbW1hbmRNYW5hZ2VyIiwic2V0UHJvcHMiLCJ1cGRhdGVTdGF0ZSIsInNldEVkaXRhYmxlIiwiUHJveHkiLCJkaXNwYXRjaFRyYW5zYWN0aW9uIiwiZHJhZ2dpbmciLCJnZXQiLCJSZWZsZWN0IiwicmVnaXN0ZXJQbHVnaW4iLCJoYW5kbGVQbHVnaW5zIiwidW5yZWdpc3RlclBsdWdpbiIsIm5hbWVPclBsdWdpbktleVRvUmVtb3ZlIiwicHJldlBsdWdpbnMiLCJuYW1lT3JQbHVnaW5LZXkiLCJzdGFydHNXaXRoIiwiY29yZUV4dGVuc2lvbnMiLCJleHQiLCJhbGxFeHRlbnNpb25zIiwibWVzc2FnZSIsIkVkaXRvclZpZXciLCJyb2xlIiwicHJlcGVuZENsYXNzIiwiY3JlYXRlTm9kZVZpZXdzIiwic2VsZWN0aW9uSGFzQ2hhbmdlZCIsInJvb3RUcldhc0FwcGxpZWQiLCJwcmV2U3RhdGUiLCJuZXh0U3RhdGUiLCJtb3N0UmVjZW50Rm9jdXNUciIsImZpbmRMYXN0IiwiZm9jdXMyIiwiYmx1cjIiLCJuYW1lT3JBdHRyaWJ1dGVzIiwiYXR0cmlidXRlc09yVW5kZWZpbmVkIiwiZ2V0SlNPTiIsImdldEhUTUwiLCIkbm9kZSIsIiRkb2MiLCIkbm9kZXMiLCJjYXB0dXJlR3JvdXAiLCJmdWxsTWF0Y2giLCJzdGFydFNwYWNlcyIsInNlYXJjaCIsInRleHRTdGFydCIsInRleHRFbmQiLCJleGNsdWRlZE1hcmtzIiwiZXhjbHVkZWQiLCJtYXJrRW5kIiwibmV3Tm9kZSIsImxhc3RJbmRleE9mIiwibWF0Y2hTdGFydCIsImxhc3RDaGFyIiwiaW5zZXJ0aW9uU3RhcnQiLCIkc3RhcnQiLCJjdXRPZmYiLCJ3cmFwcGluZyIsImZpbmRXcmFwcGluZyIsImtlZXBBdHRyaWJ1dGVzIiwiam9pblByZWRpY2F0ZSIsIkZ1bmN0aW9uIiwiaXNUb3VjaEV2ZW50IiwiZGlyZWN0aW9ucyIsIm1pblNpemUiLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwiY2xhc3NOYW1lcyIsIndyYXBwZXIiLCJoYW5kbGUiLCJyZXNpemluZyIsImluaXRpYWxXaWR0aCIsImluaXRpYWxIZWlnaHQiLCJhc3BlY3RSYXRpbyIsImlzUmVzaXppbmciLCJhY3RpdmVIYW5kbGUiLCJzdGFydFgiLCJzdGFydFkiLCJzdGFydFdpZHRoIiwic3RhcnRIZWlnaHQiLCJpc1NoaWZ0S2V5UHJlc3NlZCIsImhhbmRsZU1vdXNlTW92ZSIsImRlbHRhWCIsImNsaWVudFgiLCJkZWx0YVkiLCJjbGllbnRZIiwiaGFuZGxlUmVzaXplIiwiaGFuZGxlVG91Y2hNb3ZlIiwidG91Y2giLCJ0b3VjaGVzIiwiaGFuZGxlTW91c2VVcCIsImZpbmFsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImZpbmFsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib25Db21taXQiLCJkYXRhc2V0IiwicmVzaXplU3RhdGUiLCJjbGFzc0xpc3QiLCJoYW5kbGVLZXlVcCIsImNvbnRlbnRFbGVtZW50Iiwib25SZXNpemUiLCJtYXhTaXplIiwiY3JlYXRlV3JhcHBlciIsImNyZWF0ZUNvbnRhaW5lciIsImFwcGx5SW5pdGlhbFNpemUiLCJhdHRhY2hIYW5kbGVzIiwiY29udGVudERPTSIsInVwZGF0ZSIsInJlc2l6ZUNvbnRhaW5lciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJyZXNpemVXcmFwcGVyIiwiY3JlYXRlSGFuZGxlIiwicmVzaXplSGFuZGxlIiwicG9zaXRpb25IYW5kbGUiLCJpc1RvcCIsImlzQm90dG9tIiwiaXNMZWZ0IiwiaXNSaWdodCIsImhhbmRsZVJlc2l6ZVN0YXJ0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJhZGQiLCJzaG91bGRQcmVzZXJ2ZUFzcGVjdFJhdGlvIiwiY2FsY3VsYXRlTmV3RGltZW5zaW9ucyIsImNvbnN0cmFpbmVkIiwiYXBwbHlDb25zdHJhaW50cyIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwiYXBwbHlBc3BlY3RSYXRpbyIsImNvbnN0cmFpbmVkV2lkdGgyIiwiY29uc3RyYWluZWRIZWlnaHQyIiwiY29uc3RyYWluZWRXaWR0aCIsImNvbnN0cmFpbmVkSGVpZ2h0IiwiaXNIb3Jpem9udGFsIiwiaXNWZXJ0aWNhbCIsIm1hdGNoVHlwZSIsInN0cmluZyIsImF0dHJTdHJpbmciLCJxdW90ZWRTdHJpbmdzIiwidGVtcFN0cmluZyIsImNsYXNzTWF0Y2hlcyIsImNsYXNzZXMiLCJjbGFzcyIsImlkTWF0Y2giLCJpZCIsImt2UmVnZXgiLCJrdk1hdGNoZXMiLCJxdW90ZWRSZWYiLCJxdW90ZWRJbmRleCIsInBhcnNlSW50IiwicXVvdGVkVmFsdWUiLCJjbGVhblN0cmluZyIsImJvb2xlYW5BdHRycyIsImF0dHIiLCJjbHMiLCJub2RlTmFtZSIsIm1hcmtkb3duTmFtZSIsInBhcnNlQXR0cmlidXRlczIiLCJzZXJpYWxpemVBdHRyaWJ1dGVzMiIsImRlZmF1bHRBdHRyaWJ1dGVzIiwicmVxdWlyZWRBdHRyaWJ1dGVzIiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJibG9ja05hbWUiLCJmaWx0ZXJBdHRyaWJ1dGVzIiwicGFyc2VNYXJrZG93biIsInRva2VuIiwiaDIiLCJjcmVhdGVOb2RlIiwibWFya2Rvd25Ub2tlbml6ZXIiLCJsZXZlbCIsInNyYyIsInJlZ2V4IiwiUmVnRXhwIiwidG9rZW5pemUiLCJfdG9rZW5zIiwiX2xleGVyIiwibWlzc2luZ1JlcXVpcmVkIiwicmVxdWlyZWQiLCJyYXciLCJyZW5kZXJNYXJrZG93biIsImZpbHRlcmVkQXR0cnMiLCJnZXRDb250ZW50Iiwibm9kZUNvbnRlbnQiLCJjb250ZW50UmVzdWx0IiwicGFyc2VDaGlsZHJlbiIsInRva2VucyIsInBhcnNlSW5saW5lIiwibGV4ZXIiLCJvcGVuaW5nUmVnZXgiLCJvcGVuaW5nTWF0Y2giLCJvcGVuaW5nVGFnIiwibWF0Y2hlZENvbnRlbnQiLCJibG9ja1BhdHRlcm4iLCJyZW1haW5pbmciLCJsYXN0SW5kZXgiLCJtYXRjaFBvcyIsImJsb2NrVHlwZSIsImVuZHNXaXRoIiwicmF3Q29udGVudCIsImNvbnRlbnRUb2tlbnMiLCJibG9ja1Rva2VucyIsImlubGluZVRva2VucyIsImxhc3RUb2tlbiIsInBvcCIsInJlbmRlcmVkQ29udGVudCIsInJlbmRlckNoaWxkcmVuIiwicGFyc2VTaG9ydGNvZGVBdHRyaWJ1dGVzIiwiZG91YmxlUXVvdGVkIiwic2luZ2xlUXVvdGVkIiwic2VyaWFsaXplU2hvcnRjb2RlQXR0cmlidXRlcyIsInNob3J0Y29kZU5hbWUiLCJzZWxmQ2xvc2luZyIsInNob3J0Y29kZSIsImVzY2FwZWRTaG9ydGNvZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInN0YXJ0UGF0dGVybiIsInRva2VuUGF0dGVybiIsImxpbmVzIiwidG90YWxSYXciLCJiYXNlSW5kZW50U2l6ZSIsImN1cnJlbnRMaW5lIiwiaXRlbU1hdGNoIiwiaXRlbVBhdHRlcm4iLCJpdGVtRGF0YSIsImV4dHJhY3RJdGVtRGF0YSIsImluZGVudExldmVsIiwibWFpbkNvbnRlbnQiLCJpdGVtQ29udGVudCIsIm5leHRMaW5lIiwibmV4dE5vbkVtcHR5SW5kZXgiLCJmaW5kSW5kZXgiLCJsIiwibmV4dE5vbkVtcHR5IiwibmV4dEluZGVudDIiLCJuZXh0SW5kZW50IiwibmVzdGVkVG9rZW5zIiwibmVzdGVkQ29udGVudCIsImRlZGVudGVkTmVzdGVkIiwibmVzdGVkTGluZSIsImN1c3RvbU5lc3RlZFBhcnNlciIsImNyZWF0ZVRva2VuIiwicHJlZml4T3JHZW5lcmF0b3IiLCJjdHgiLCJwcmVmaXgiLCJjaGlsZENvbnRlbnQiLCJpbmRlbnRlZENoaWxkIiwibGluZSIsImluZGVudCIsImNoZWNrTWFyayIsInRoaXNNYXJrIiwiZm91bmRNYXJrIiwibmVlZHNVcGRhdGUiLCJ1cGRhdGVkTWFyayIsImNvbXBvbmVudCIsImlnbm9yZU11dGF0aW9uIiwibXV0YXRpb24iLCJjaGFuZ2VkTm9kZXMiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiaXNDb250ZW50RWRpdGFibGUiLCJfTm9kZSIsImlzRHJhZ2dpbmciLCJzdG9wRXZlbnQiLCJvbkRyYWdTdGFydCIsIl9mIiwiX2ciLCJkcmFnSGFuZGxlIiwiZG9tQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFuZGxlQm94Iiwib2Zmc2V0WCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WSIsImNsb25lZE5vZGUiLCJjbG9uZU5vZGUiLCJyb3VuZCIsImJveFNpemluZyIsInBvaW50ZXJFdmVudHMiLCJkcmFnSW1hZ2VXcmFwcGVyIiwiZGF0YVRyYW5zZmVyIiwic2V0RHJhZ0ltYWdlIiwiaXNJbkVsZW1lbnQiLCJpc0RyYWdFdmVudCIsImlzRHJvcEV2ZW50IiwiaXNJbnB1dCIsInRhZ05hbWUiLCJpc0RyYWdnYWJsZSIsImlzU2VsZWN0YWJsZSIsImlzQ29weUV2ZW50IiwiaXNQYXN0ZUV2ZW50IiwiaXNDdXRFdmVudCIsImlzQ2xpY2tFdmVudCIsImlzVmFsaWREcmFnSGFuZGxlIiwiY3VycmVudFN0ZXAiLCJkZWxldGVkIiwibWFwcGVkUG9zaXRpb24iLCJuZXdQb3NpdGlvbiIsImdldE1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQywyQkFBQSxFQUFBQSxDQUFBLEtBQUFBLDJCQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUMsQ0FBQTtFQUFBQyx3QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHdCQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxrQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLDBCQUFBLEVBQUFBLENBQUEsS0FBQUEsMEJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQywyQkFBQSxFQUFBQSxDQUFBLEtBQUFBLDJCQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsNkJBQUEsRUFBQUEsQ0FBQSxLQUFBQSw2QkFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLDRCQUFBLEVBQUFBLENBQUEsS0FBQUEsNEJBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBNUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQTZDLG9DQUFBLEVBQUFBLENBQUEsS0FBQUEsb0NBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQywyQkFBQSxFQUFBQSxDQUFBLEtBQUFBLDJCQUFBO0VBQUFD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Q0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFB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QSxFQUFpQztJQUNuQyxJQUFJcTlCLE9BQUEsR0FBVTtJQUVkLE1BQU1DLGNBQUEsR0FBaUIsS0FBS2xxQyxXQUFBLENBQVk0USxLQUFBLENBQU03SCxLQUFBLENBQU0sS0FBS2loQyxXQUFXLEVBQUU3MEIsTUFBQSxDQUFPLENBQUNnMUIsV0FBQSxFQUFhdDVCLElBQUEsS0FBUztNQUNsRyxNQUFNZ1EsU0FBQSxHQUFZaFEsSUFBQSxDQUFLdTVCLE1BQUEsQ0FBTyxFQUFFdnBCLFNBQUEsQ0FBVXNwQixXQUFXO01BRXJELElBQUl0cEIsU0FBQSxDQUFVb3BCLE9BQUEsRUFBUztRQUNyQkEsT0FBQSxHQUFVO01BQ1o7TUFFQSxPQUFPcHBCLFNBQUEsQ0FBVXRaLEdBQUE7SUFDbkIsR0FBR3FGLFFBQVE7SUFFWCxPQUFPO01BQ0xBLFFBQUEsRUFBVXM5QixjQUFBO01BQ1ZEO0lBQ0Y7RUFDRjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==