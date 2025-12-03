System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep)],
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

// .beyond/uimport/temp/@tiptap/core.3.2.0.js
var core_3_2_0_exports = {};
__export(core_3_2_0_exports, {
  CommandManager: () => CommandManager,
  Editor: () => Editor,
  Extension: () => Extension,
  Fragment: () => Fragment6,
  InputRule: () => InputRule,
  Mark: () => Mark,
  MarkView: () => MarkView,
  Node: () => Node3,
  NodePos: () => NodePos,
  NodeView: () => NodeView,
  PasteRule: () => PasteRule,
  Tracker: () => Tracker,
  callOrReturn: () => callOrReturn,
  canInsertNode: () => canInsertNode,
  combineTransactionSteps: () => combineTransactionSteps,
  createChainableState: () => createChainableState,
  createDocument: () => createDocument,
  createElement: () => h,
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
  mergeAttributes: () => mergeAttributes,
  mergeDeep: () => mergeDeep,
  minMax: () => minMax,
  nodeInputRule: () => nodeInputRule,
  nodePasteRule: () => nodePasteRule,
  objectIncludes: () => objectIncludes,
  pasteRulesPlugin: () => pasteRulesPlugin,
  posToDOMRect: () => posToDOMRect,
  removeDuplicates: () => removeDuplicates,
  resolveExtensions: () => resolveExtensions,
  resolveFocusPosition: () => resolveFocusPosition,
  rewriteUnknownContent: () => rewriteUnknownContent,
  selectionToInsertionEnd: () => selectionToInsertionEnd,
  sortExtensions: () => sortExtensions,
  splitExtensions: () => splitExtensions,
  textInputRule: () => textInputRule,
  textPasteRule: () => textPasteRule,
  textblockTypeInputRule: () => textblockTypeInputRule,
  updateMarkViewAttributes: () => updateMarkViewAttributes,
  wrappingInputRule: () => wrappingInputRule
});
module.exports = __toCommonJS(core_3_2_0_exports);

// node_modules/@tiptap/core/dist/index.js
var import_state = require("@tiptap/pm@3.2.0/state");
var import_view = require("@tiptap/pm@3.2.0/view");
var import_keymap = require("@tiptap/pm@3.2.0/keymap");
var import_transform = require("@tiptap/pm@3.2.0/transform");
var import_model = require("@tiptap/pm@3.2.0/model");
var import_model2 = require("@tiptap/pm@3.2.0/model");
var import_model3 = require("@tiptap/pm@3.2.0/model");
var import_model4 = require("@tiptap/pm@3.2.0/model");
var import_model5 = require("@tiptap/pm@3.2.0/model");
var import_model6 = require("@tiptap/pm@3.2.0/model");
var import_state2 = require("@tiptap/pm@3.2.0/state");
var import_state3 = require("@tiptap/pm@3.2.0/state");
var import_state4 = require("@tiptap/pm@3.2.0/state");
var import_state5 = require("@tiptap/pm@3.2.0/state");
var import_transform2 = require("@tiptap/pm@3.2.0/transform");
var import_model7 = require("@tiptap/pm@3.2.0/model");
var import_state6 = require("@tiptap/pm@3.2.0/state");
var import_model8 = require("@tiptap/pm@3.2.0/model");
var import_state7 = require("@tiptap/pm@3.2.0/state");
var import_state8 = require("@tiptap/pm@3.2.0/state");
var import_transform3 = require("@tiptap/pm@3.2.0/transform");
var import_commands = require("@tiptap/pm@3.2.0/commands");
var import_state9 = require("@tiptap/pm@3.2.0/state");
var import_commands2 = require("@tiptap/pm@3.2.0/commands");
var import_commands3 = require("@tiptap/pm@3.2.0/commands");
var import_state10 = require("@tiptap/pm@3.2.0/state");
var import_model9 = require("@tiptap/pm@3.2.0/model");
var import_commands4 = require("@tiptap/pm@3.2.0/commands");
var import_transform4 = require("@tiptap/pm@3.2.0/transform");
var import_transform5 = require("@tiptap/pm@3.2.0/transform");
var import_commands5 = require("@tiptap/pm@3.2.0/commands");
var import_commands6 = require("@tiptap/pm@3.2.0/commands");
var import_commands7 = require("@tiptap/pm@3.2.0/commands");
var import_commands8 = require("@tiptap/pm@3.2.0/commands");
var import_schema_list = require("@tiptap/pm@3.2.0/schema-list");
var import_commands9 = require("@tiptap/pm@3.2.0/commands");
var import_state11 = require("@tiptap/pm@3.2.0/state");
var import_commands10 = require("@tiptap/pm@3.2.0/commands");
var import_commands11 = require("@tiptap/pm@3.2.0/commands");
var import_commands12 = require("@tiptap/pm@3.2.0/commands");
var import_commands13 = require("@tiptap/pm@3.2.0/commands");
var import_commands14 = require("@tiptap/pm@3.2.0/commands");
var import_commands15 = require("@tiptap/pm@3.2.0/commands");
var import_state12 = require("@tiptap/pm@3.2.0/state");
var import_state13 = require("@tiptap/pm@3.2.0/state");
var import_schema_list2 = require("@tiptap/pm@3.2.0/schema-list");
var import_state14 = require("@tiptap/pm@3.2.0/state");
var import_transform6 = require("@tiptap/pm@3.2.0/transform");
var import_model10 = require("@tiptap/pm@3.2.0/model");
var import_state15 = require("@tiptap/pm@3.2.0/state");
var import_transform7 = require("@tiptap/pm@3.2.0/transform");
var import_transform8 = require("@tiptap/pm@3.2.0/transform");
var import_commands16 = require("@tiptap/pm@3.2.0/commands");
var import_schema_list3 = require("@tiptap/pm@3.2.0/schema-list");
var import_transform9 = require("@tiptap/pm@3.2.0/transform");
var import_state16 = require("@tiptap/pm@3.2.0/state");
var import_state17 = require("@tiptap/pm@3.2.0/state");
var import_state18 = require("@tiptap/pm@3.2.0/state");
var import_state19 = require("@tiptap/pm@3.2.0/state");
var import_state20 = require("@tiptap/pm@3.2.0/state");
var import_state21 = require("@tiptap/pm@3.2.0/state");
var import_transform10 = require("@tiptap/pm@3.2.0/transform");
var import_state22 = require("@tiptap/pm@3.2.0/state");
var import_state23 = require("@tiptap/pm@3.2.0/state");
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
function combineTransactionSteps(oldDoc, transactions) {
  const transform = new import_transform.Transform(oldDoc);
  transactions.forEach(transaction => {
    transaction.steps.forEach(step => {
      transform.step(step);
    });
  });
  return transform;
}
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
  if (content instanceof import_model.Node || content instanceof import_model.Fragment) {
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
        return import_model.Fragment.fromArray(content.map(item => schema.nodeFromJSON(item)));
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
      const contentCheckSchema = new import_model.Schema({
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
        import_model.DOMParser.fromSchema(contentCheckSchema).parseSlice(elementFromString(content), options.parseOptions);
      } else {
        import_model.DOMParser.fromSchema(contentCheckSchema).parse(elementFromString(content), options.parseOptions);
      }
      if (options.errorOnInvalidContent && hasInvalidContent) {
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${invalidContent}`)
        });
      }
    }
    const parser = import_model.DOMParser.fromSchema(schema);
    if (options.slice) {
      return parser.parseSlice(elementFromString(content), options.parseOptions).content;
    }
    return parser.parse(elementFromString(content), options.parseOptions);
  }
  return createNodeFromContent("", schema, options);
}
function createDocument(content, schema, parseOptions = {}, options = {}) {
  return createNodeFromContent(content, schema, {
    slice: false,
    parseOptions,
    errorOnInvalidContent: options.errorOnInvalidContent
  });
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
  const documentFragment = import_model3.DOMSerializer.fromSchema(schema).serializeFragment(fragment);
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
      attrs: Object.fromEntries(extensionAttributes.map(extensionAttribute => {
        var _a2, _b;
        return [extensionAttribute.name, {
          default: (_a2 = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _a2.default,
          validate: (_b = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _b.validate
        }];
      }))
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
      attrs: Object.fromEntries(extensionAttributes.map(extensionAttribute => {
        var _a2, _b;
        return [extensionAttribute.name, {
          default: (_a2 = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _a2.default,
          validate: (_b = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _b.validate
        }];
      }))
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
  return new import_model4.Schema({
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
  const contentNode = import_model2.Node.fromJSON(schema, doc);
  return getHTMLFromFragment(contentNode.content, schema);
}
function generateJSON(html, extensions) {
  const schema = getSchema(extensions);
  const dom = elementFromString(html);
  return import_model5.DOMParser.fromSchema(schema).parse(dom).toJSON();
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
  const contentNode = import_model6.Node.fromJSON(schema, doc);
  return getText(contentNode, {
    blockSeparator,
    textSerializers: {
      ...getTextSerializersFromSchema(schema),
      ...textSerializers
    }
  });
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
function getNodeType(nameOrType, schema) {
  if (typeof nameOrType === "string") {
    if (!schema.nodes[nameOrType]) {
      throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
    }
    return schema.nodes[nameOrType];
  }
  return nameOrType;
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
function getSchemaTypeNameByName(name, schema) {
  if (schema.nodes[name]) {
    return "node";
  }
  if (schema.marks[name]) {
    return "mark";
  }
  return null;
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
  return value instanceof import_state2.NodeSelection;
}
function isTextSelection(value) {
  return value instanceof import_state3.TextSelection;
}
function minMax(value = 0, min = 0, max = 0) {
  return Math.min(Math.max(value, min), max);
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
var InputRule = class {
  constructor(config) {
    this.find = config.find;
    this.handler = config.handler;
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
    tr.setMeta(plugin, {
      transform: tr,
      from,
      to,
      text
    });
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
  const plugin = new import_state6.Plugin({
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
              text = getHTMLFromFragment(import_model7.Fragment.from(text), state.schema);
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
    if (!node.isTextblock || node.type.spec.code) {
      return;
    }
    const resolvedFrom = Math.max(from, pos);
    const resolvedTo = Math.min(to, pos + node.content.size);
    const textToMatch = node.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "\uFFFC");
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
    return new import_state7.Plugin({
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
            text = getHTMLFromFragment(import_model8.Fragment.from(text), state.schema);
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
    const inputRules = [];
    const pasteRules = [];
    const allPlugins = extensions.map(extension => {
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
        inputRules.push(...addInputRules());
      }
      const addPasteRules = getExtensionField(extension, "addPasteRules", context);
      if (isExtensionRulesEnabled(extension, editor.options.enablePasteRules) && addPasteRules) {
        pasteRules.push(...addPasteRules());
      }
      const addProseMirrorPlugins = getExtensionField(extension, "addProseMirrorPlugins", context);
      if (addProseMirrorPlugins) {
        const proseMirrorPlugins = addProseMirrorPlugins();
        plugins.push(...proseMirrorPlugins);
      }
      return plugins;
    }).flat();
    return [inputRulesPlugin({
      editor,
      rules: inputRules
    }), ...pasteRulesPlugin({
      editor,
      rules: pasteRules
    }), ...allPlugins];
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
      const nodeview = (node, view, getPos, decorations, innerDecorations) => {
        const HTMLAttributes = getRenderedAttributes(node, extensionAttributes);
        return addNodeView()({
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
    return [new import_state8.Plugin({
      key: new import_state8.PluginKey("clipboardTextSerializer"),
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
      const targetLiftDepth = (0, import_transform3.liftTarget)(nodeRange);
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
  tr.setSelection(new import_state9.TextSelection(tr.doc.resolve(Math.max(newPos - 1, 0))));
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
      const newSelection = import_state10.TextSelection.create(doc, range.from, range.to);
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
    const {
      selection
    } = editor.state;
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
      } else if (value instanceof import_model9.Fragment) {
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
      const fromSelectionAtStart = selection.$from.parentOffset === 0;
      const isTextSelection2 = selection.$from.node().isText || selection.$from.node().isTextblock;
      const hasContent = selection.$from.node().content.size > 0;
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
    const point = (0, import_transform4.joinPoint)(state.doc, state.selection.$from.pos, -1);
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
    const point = (0, import_transform5.joinPoint)(state.doc, state.selection.$from.pos, 1);
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
  if (dispatch) {
    tr.selection.ranges.forEach(range => {
      state.doc.nodesBetween(range.$from.pos, range.$to.pos, (node, pos) => {
        if (nodeType && nodeType === node.type) {
          tr.setNodeMarkup(pos, void 0, deleteProps(node.attrs, attributes));
        }
        if (markType && node.marks.length) {
          node.marks.forEach(mark => {
            if (markType === mark.type) {
              tr.addMark(pos, pos + node.nodeSize, markType.create(deleteProps(mark.attrs, attributes)));
            }
          });
        }
      });
    });
  }
  return true;
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
    const selection = new import_state11.AllSelection(tr.doc);
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
    return !!newMarkType.isInSet(currentMarks) || !currentMarks.some(mark => mark.type.excludes(newMarkType));
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
    const selection = import_state12.NodeSelection.create(doc, from);
    tr.setSelection(selection);
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
    const minPos = import_state13.TextSelection.atStart(doc).from;
    const maxPos = import_state13.TextSelection.atEnd(doc).to;
    const resolvedFrom = minMax(from, minPos, maxPos);
    const resolvedEnd = minMax(to, minPos, maxPos);
    const selection = import_state13.TextSelection.create(doc, resolvedFrom, resolvedEnd);
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
  if (selection instanceof import_state14.NodeSelection && selection.node.isBlock) {
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
      if (selection instanceof import_state14.TextSelection) {
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
      let wrap = import_model10.Fragment.empty;
      const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
      for (let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1) {
        wrap = import_model10.Fragment.from($from.node(d).copy(wrap));
      }
      const depthAfter =
      // eslint-disable-next-line no-nested-ternary
      $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
      const newNextTypeAttributes2 = {
        ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
        ...overrideAttrs
      };
      const nextType2 = ((_a = type.contentMatch.defaultType) == null ? void 0 : _a.createAndFill(newNextTypeAttributes2)) || void 0;
      wrap = wrap.append(import_model10.Fragment.from(type.createAndFill(null, nextType2) || void 0));
      const start = $from.before($from.depth - (depthBefore - 1));
      tr.replace(start, $from.after(-depthAfter), new import_model10.Slice(wrap, 4 - depthBefore, 0));
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
        tr.setSelection(import_state15.TextSelection.near(tr.doc.resolve(sel)));
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
  if (dispatch) {
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
            trimmedFrom = Math.max(pos, from);
            trimmedTo = Math.min(pos + node.nodeSize, to);
            lastPos = pos;
            lastNode = node;
          }
        });
      } else {
        state.doc.nodesBetween(from, to, (node, pos) => {
          if (pos < from && nodeType && nodeType === node.type) {
            trimmedFrom = Math.max(pos, from);
            trimmedTo = Math.min(pos + node.nodeSize, to);
            lastPos = pos;
            lastNode = node;
          }
          if (pos >= from && pos <= to) {
            if (nodeType && nodeType === node.type) {
              tr.setNodeMarkup(pos, void 0, {
                ...node.attrs,
                ...attributes
              });
            }
            if (markType && node.marks.length) {
              node.marks.forEach(mark => {
                if (markType === mark.type) {
                  const trimmedFrom2 = Math.max(pos, from);
                  const trimmedTo2 = Math.min(pos + node.nodeSize, to);
                  tr.addMark(trimmedFrom2, trimmedTo2, markType.create({
                    ...mark.attrs,
                    ...attributes
                  }));
                }
              });
            }
          }
        });
      }
      if (lastNode) {
        if (lastPos !== void 0) {
          tr.setNodeMarkup(lastPos, void 0, {
            ...lastNode.attrs,
            ...attributes
          });
        }
        if (markType && lastNode.marks.length) {
          lastNode.marks.forEach(mark => {
            if (markType === mark.type) {
              tr.addMark(trimmedFrom, trimmedTo, markType.create({
                ...mark.attrs,
                ...attributes
              }));
            }
          });
        }
      }
    });
  }
  return true;
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
    this.setOptions(options);
    this.createExtensionManager();
    this.createCommandManager();
    this.createSchema();
    this.on("beforeCreate", this.options.onBeforeCreate);
    this.emit("beforeCreate", {
      editor: this
    });
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
    this.editorState = import_state.EditorState.create({
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
    window.setTimeout(() => {
      if (this.isDestroyed) {
        return;
      }
      this.commands.focus(this.options.autofocus);
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
    if (this.css) {
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
        this.editorState = this.state.apply(tr);
      },
      // Stub some commonly accessed properties to prevent errors
      composing: false,
      dragging: null,
      editable: true,
      isDestroyed: false
    }, {
      get: (obj, key) => {
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
    }), Commands, FocusEvents, Keymap, Tabindex, Drop, Paste, Delete].filter(ext => {
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
      state: this.editorState
    });
    const newState = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(newState);
    this.createNodeViews();
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
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
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
    }
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
    }
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
    }
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
    }
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
    }
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
function canInsertNode(state, nodeType) {
  const {
    selection
  } = state;
  const {
    $from
  } = selection;
  if (selection instanceof import_state22.NodeSelection) {
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
    (_g = event.dataTransfer) == null ? void 0 : _g.setDragImage(clonedNode, x, y);
    const pos = this.getPos();
    if (typeof pos !== "number") {
      return;
    }
    const selection = import_state23.NodeSelection.create(view.state.doc, pos);
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
    const isSelectable = import_state23.NodeSelection.isSelectable(this.node);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvY29yZS4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0VkaXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuc2lvbk1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NvbWJpbmVUcmFuc2FjdGlvblN0ZXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9jcmVhdGVOb2RlRnJvbUNvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlSFRNTC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0SFRNTEZyb21GcmFnbWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hQnlSZXNvbHZlZEV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dlbmVyYXRlSlNPTi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2VuZXJhdGVUZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc05vZGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzVGV4dFNlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvcmVzb2x2ZUZvY3VzUG9zaXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3NlbGVjdGlvblRvSW5zZXJ0aW9uRW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvSW5wdXRSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9jbGlwYm9hcmRUZXh0U2VyaWFsaXplci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NsZWFyTm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9jcmVhdGVQYXJhZ3JhcGhOZWFyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvY3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZGVsZXRlU2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZXhpdENvZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9leHRlbmRNYXJrUmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9pbnNlcnRDb250ZW50QXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9qb2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvam9pbkl0ZW1CYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5JdGVtRm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5UZXh0YmxvY2tCYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2pvaW5UZXh0YmxvY2tGb3J3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbGlmdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2xpZnRFbXB0eUJsb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbGlmdExpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvbmV3bGluZUluQ29kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdEFsbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdE5vZGVCYWNrd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdE5vZGVGb3J3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2VsZWN0UGFyZW50Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFRleHRibG9ja0VuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NlbGVjdFRleHRibG9ja1N0YXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE5vZGVTZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRUZXh0U2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2lua0xpc3RJdGVtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc3BsaXRCbG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NwbGl0TGlzdEl0ZW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVMaXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvd3JhcEluLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvd3JhcEluTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZGVsZXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9kcm9wLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9lZGl0YWJsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvZm9jdXNFdmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL2tleW1hcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2V4dGVuc2lvbnMvcGFzdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9leHRlbnNpb25zL3RhYmluZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaW5wdXRSdWxlcy93cmFwcGluZ0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jYW5JbnNlcnROb2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTm9kZVZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NyZWF0ZUNoYWluYWJsZVN0YXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvQ29tbWFuZE1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9FdmVudEVtaXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZWxlbWVudEZyb21TdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2NyZWF0ZURvY3VtZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9kZWZhdWx0QmxvY2tBdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZENoaWxkcmVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9maW5kQ2hpbGRyZW5JblJhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9maW5kUGFyZW50Tm9kZUNsb3Nlc3RUb1Bvcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZmluZFBhcmVudE5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEV4dGVuc2lvbkZpZWxkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9mbGF0dGVuRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc0Z1bmN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2NhbGxPclJldHVybi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc0VtcHR5T2JqZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9zcGxpdEV4dGVuc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldEF0dHJpYnV0ZXNGcm9tRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9tZXJnZUF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFJlbmRlcmVkQXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9mcm9tU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pbmplY3RFeHRlbnNpb25BdHRyaWJ1dGVzVG9QYXJzZVJ1bGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvZmluZER1cGxpY2F0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3NvcnRFeHRlbnNpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9yZXNvbHZlRXh0ZW5zaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0U2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRUZXh0QmV0d2Vlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0VGV4dFNlcmlhbGl6ZXJzRnJvbVNjaGVtYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya1R5cGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE1hcmtBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXROb2RlVHlwZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0Tm9kZUF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFNjaGVtYVR5cGVOYW1lQnlOYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL3JlbW92ZUR1cGxpY2F0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldENoYW5nZWRSYW5nZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldERlYnVnSlNPTi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1JlZ0V4cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9vYmplY3RJbmNsdWRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvZ2V0TWFya1JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRNYXJrc0JldHdlZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldE5vZGVBdFBvc2l0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTY2hlbWFUeXBlQnlOYW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9nZXRTcGxpdHRlZEF0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2dldFRleHRDb250ZW50RnJvbU5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9pc01hcmtBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTm9kZUFjdGl2ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNBY3RpdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQXRFbmRPZk5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzQXRTdGFydE9mTm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNFeHRlbnNpb25SdWxlc0VuYWJsZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL2lzTGlzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2hlbHBlcnMvaXNOb2RlRW1wdHkudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvbWluTWF4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvaGVscGVycy9wb3NUb0RPTVJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9oZWxwZXJzL3Jld3JpdGVVbmtub3duQ29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc1BsYWluT2JqZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL21lcmdlRGVlcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuZGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9NYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzTnVtYmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL0V4dGVuc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvYmx1ci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NsZWFyQ29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2NvbW1hbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVDdXJyZW50Tm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2RlbGV0ZU5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9kZWxldGVSYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL2VudGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZmlyc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy91dGlsaXRpZXMvaXNBbmRyb2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzaU9TLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvZm9jdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9mb3JFYWNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvaW5zZXJ0Q29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9pc01hY09TLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMva2V5Ym9hcmRTaG9ydGN1dC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9kZWxldGVQcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Jlc2V0QXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Njcm9sbEludG9WaWV3LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvc2V0Q29udGVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3NldE1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy9zZXRNZXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdG9nZ2xlTWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3RvZ2dsZU5vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy90b2dnbGVXcmFwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvY29tbWFuZHMvdW5kb0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2NvbW1hbmRzL3Vuc2V0QWxsTWFya3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91bnNldE1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9jb21tYW5kcy91cGRhdGVBdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvZXh0ZW5zaW9ucy9jb21tYW5kcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL05vZGVQb3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9zdHlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL3V0aWxpdGllcy9jcmVhdGVTdHlsZVRhZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvbWFya0lucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvbm9kZUlucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvdGV4dGJsb2NrVHlwZUlucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2lucHV0UnVsZXMvdGV4dElucHV0UnVsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2NvcmUvc3JjL2pzeC1ydW50aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2VzY2FwZUZvclJlZ0V4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvdXRpbGl0aWVzL2lzU3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvTWFya1ZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9Ob2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy9tYXJrUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy9ub2RlUGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvcGFzdGVSdWxlcy90ZXh0UGFzdGVSdWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvVHJhY2tlci50cyJdLCJuYW1lcyI6WyJjb3JlXzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNvbW1hbmRNYW5hZ2VyIiwiRWRpdG9yIiwiRXh0ZW5zaW9uIiwiRnJhZ21lbnQiLCJGcmFnbWVudDYiLCJJbnB1dFJ1bGUiLCJNYXJrIiwiTWFya1ZpZXciLCJOb2RlIiwiTm9kZTMiLCJOb2RlUG9zIiwiTm9kZVZpZXciLCJQYXN0ZVJ1bGUiLCJUcmFja2VyIiwiY2FsbE9yUmV0dXJuIiwiY2FuSW5zZXJ0Tm9kZSIsImNvbWJpbmVUcmFuc2FjdGlvblN0ZXBzIiwiY3JlYXRlQ2hhaW5hYmxlU3RhdGUiLCJjcmVhdGVEb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoIiwiY3JlYXRlTm9kZUZyb21Db250ZW50IiwiY3JlYXRlU3R5bGVUYWciLCJkZWZhdWx0QmxvY2tBdCIsImRlbGV0ZVByb3BzIiwiZWxlbWVudEZyb21TdHJpbmciLCJlc2NhcGVGb3JSZWdFeCIsImV4dGVuc2lvbnMiLCJleHRlbnNpb25zX2V4cG9ydHMiLCJmaW5kQ2hpbGRyZW4iLCJmaW5kQ2hpbGRyZW5JblJhbmdlIiwiZmluZER1cGxpY2F0ZXMiLCJmaW5kUGFyZW50Tm9kZSIsImZpbmRQYXJlbnROb2RlQ2xvc2VzdFRvUG9zIiwiZmxhdHRlbkV4dGVuc2lvbnMiLCJmcm9tU3RyaW5nIiwiZ2VuZXJhdGVIVE1MIiwiZ2VuZXJhdGVKU09OIiwiZ2VuZXJhdGVUZXh0IiwiZ2V0QXR0cmlidXRlcyIsImdldEF0dHJpYnV0ZXNGcm9tRXh0ZW5zaW9ucyIsImdldENoYW5nZWRSYW5nZXMiLCJnZXREZWJ1Z0pTT04iLCJnZXRFeHRlbnNpb25GaWVsZCIsImdldEhUTUxGcm9tRnJhZ21lbnQiLCJnZXRNYXJrQXR0cmlidXRlcyIsImdldE1hcmtSYW5nZSIsImdldE1hcmtUeXBlIiwiZ2V0TWFya3NCZXR3ZWVuIiwiZ2V0Tm9kZUF0UG9zaXRpb24iLCJnZXROb2RlQXR0cmlidXRlcyIsImdldE5vZGVUeXBlIiwiZ2V0UmVuZGVyZWRBdHRyaWJ1dGVzIiwiZ2V0U2NoZW1hIiwiZ2V0U2NoZW1hQnlSZXNvbHZlZEV4dGVuc2lvbnMiLCJnZXRTY2hlbWFUeXBlQnlOYW1lIiwiZ2V0U2NoZW1hVHlwZU5hbWVCeU5hbWUiLCJnZXRTcGxpdHRlZEF0dHJpYnV0ZXMiLCJnZXRUZXh0IiwiZ2V0VGV4dEJldHdlZW4iLCJnZXRUZXh0Q29udGVudEZyb21Ob2RlcyIsImdldFRleHRTZXJpYWxpemVyc0Zyb21TY2hlbWEiLCJpbmplY3RFeHRlbnNpb25BdHRyaWJ1dGVzVG9QYXJzZVJ1bGUiLCJpbnB1dFJ1bGVzUGx1Z2luIiwiaXNBY3RpdmUiLCJpc0FuZHJvaWQiLCJpc0F0RW5kT2ZOb2RlIiwiaXNBdFN0YXJ0T2ZOb2RlIiwiaXNFbXB0eU9iamVjdCIsImlzRXh0ZW5zaW9uUnVsZXNFbmFibGVkIiwiaXNGdW5jdGlvbiIsImlzTGlzdCIsImlzTWFjT1MiLCJpc01hcmtBY3RpdmUiLCJpc05vZGVBY3RpdmUiLCJpc05vZGVFbXB0eSIsImlzTm9kZVNlbGVjdGlvbiIsImlzTnVtYmVyIiwiaXNQbGFpbk9iamVjdCIsImlzUmVnRXhwIiwiaXNTdHJpbmciLCJpc1RleHRTZWxlY3Rpb24iLCJpc2lPUyIsIm1hcmtJbnB1dFJ1bGUiLCJtYXJrUGFzdGVSdWxlIiwibWVyZ2VBdHRyaWJ1dGVzIiwibWVyZ2VEZWVwIiwibWluTWF4Iiwibm9kZUlucHV0UnVsZSIsIm5vZGVQYXN0ZVJ1bGUiLCJvYmplY3RJbmNsdWRlcyIsInBhc3RlUnVsZXNQbHVnaW4iLCJwb3NUb0RPTVJlY3QiLCJyZW1vdmVEdXBsaWNhdGVzIiwicmVzb2x2ZUV4dGVuc2lvbnMiLCJyZXNvbHZlRm9jdXNQb3NpdGlvbiIsInJld3JpdGVVbmtub3duQ29udGVudCIsInNlbGVjdGlvblRvSW5zZXJ0aW9uRW5kIiwic29ydEV4dGVuc2lvbnMiLCJzcGxpdEV4dGVuc2lvbnMiLCJ0ZXh0SW5wdXRSdWxlIiwidGV4dFBhc3RlUnVsZSIsInRleHRibG9ja1R5cGVJbnB1dFJ1bGUiLCJ1cGRhdGVNYXJrVmlld0F0dHJpYnV0ZXMiLCJ3cmFwcGluZ0lucHV0UnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfc3RhdGUiLCJyZXF1aXJlIiwiaW1wb3J0X3ZpZXciLCJpbXBvcnRfa2V5bWFwIiwiaW1wb3J0X3RyYW5zZm9ybSIsImltcG9ydF9tb2RlbCIsImltcG9ydF9tb2RlbDIiLCJpbXBvcnRfbW9kZWwzIiwiaW1wb3J0X21vZGVsNCIsImltcG9ydF9tb2RlbDUiLCJpbXBvcnRfbW9kZWw2IiwiaW1wb3J0X3N0YXRlMiIsImltcG9ydF9zdGF0ZTMiLCJpbXBvcnRfc3RhdGU0IiwiaW1wb3J0X3N0YXRlNSIsImltcG9ydF90cmFuc2Zvcm0yIiwiaW1wb3J0X21vZGVsNyIsImltcG9ydF9zdGF0ZTYiLCJpbXBvcnRfbW9kZWw4IiwiaW1wb3J0X3N0YXRlNyIsImltcG9ydF9zdGF0ZTgiLCJpbXBvcnRfdHJhbnNmb3JtMyIsImltcG9ydF9jb21tYW5kcyIsImltcG9ydF9zdGF0ZTkiLCJpbXBvcnRfY29tbWFuZHMyIiwiaW1wb3J0X2NvbW1hbmRzMyIsImltcG9ydF9zdGF0ZTEwIiwiaW1wb3J0X21vZGVsOSIsImltcG9ydF9jb21tYW5kczQiLCJpbXBvcnRfdHJhbnNmb3JtNCIsImltcG9ydF90cmFuc2Zvcm01IiwiaW1wb3J0X2NvbW1hbmRzNSIsImltcG9ydF9jb21tYW5kczYiLCJpbXBvcnRfY29tbWFuZHM3IiwiaW1wb3J0X2NvbW1hbmRzOCIsImltcG9ydF9zY2hlbWFfbGlzdCIsImltcG9ydF9jb21tYW5kczkiLCJpbXBvcnRfc3RhdGUxMSIsImltcG9ydF9jb21tYW5kczEwIiwiaW1wb3J0X2NvbW1hbmRzMTEiLCJpbXBvcnRfY29tbWFuZHMxMiIsImltcG9ydF9jb21tYW5kczEzIiwiaW1wb3J0X2NvbW1hbmRzMTQiLCJpbXBvcnRfY29tbWFuZHMxNSIsImltcG9ydF9zdGF0ZTEyIiwiaW1wb3J0X3N0YXRlMTMiLCJpbXBvcnRfc2NoZW1hX2xpc3QyIiwiaW1wb3J0X3N0YXRlMTQiLCJpbXBvcnRfdHJhbnNmb3JtNiIsImltcG9ydF9tb2RlbDEwIiwiaW1wb3J0X3N0YXRlMTUiLCJpbXBvcnRfdHJhbnNmb3JtNyIsImltcG9ydF90cmFuc2Zvcm04IiwiaW1wb3J0X2NvbW1hbmRzMTYiLCJpbXBvcnRfc2NoZW1hX2xpc3QzIiwiaW1wb3J0X3RyYW5zZm9ybTkiLCJpbXBvcnRfc3RhdGUxNiIsImltcG9ydF9zdGF0ZTE3IiwiaW1wb3J0X3N0YXRlMTgiLCJpbXBvcnRfc3RhdGUxOSIsImltcG9ydF9zdGF0ZTIwIiwiaW1wb3J0X3N0YXRlMjEiLCJpbXBvcnRfdHJhbnNmb3JtMTAiLCJpbXBvcnRfc3RhdGUyMiIsImltcG9ydF9zdGF0ZTIzIiwiY29uZmlnIiwic3RhdGUiLCJ0cmFuc2FjdGlvbiIsInNlbGVjdGlvbiIsImRvYyIsInN0b3JlZE1hcmtzIiwiYXBwbHkiLCJiaW5kIiwiYXBwbHlUcmFuc2FjdGlvbiIsInBsdWdpbnMiLCJzY2hlbWEiLCJyZWNvbmZpZ3VyZSIsInRvSlNPTiIsInRyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImVkaXRvciIsInJhd0NvbW1hbmRzIiwiZXh0ZW5zaW9uTWFuYWdlciIsImNvbW1hbmRzIiwiY3VzdG9tU3RhdGUiLCJoYXNDdXN0b21TdGF0ZSIsInZpZXciLCJidWlsZFByb3BzIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwibmFtZSIsImNvbW1hbmQyIiwibWV0aG9kIiwiYXJncyIsImNhbGxiYWNrIiwiZ2V0TWV0YSIsImRpc3BhdGNoIiwiY2hhaW4iLCJjcmVhdGVDaGFpbiIsImNhbiIsImNyZWF0ZUNhbiIsInN0YXJ0VHIiLCJzaG91bGREaXNwYXRjaCIsImNhbGxiYWNrcyIsImhhc1N0YXJ0VHJhbnNhY3Rpb24iLCJydW4zIiwicnVuIiwiZXZlcnkiLCJjaGFpbmVkQ29tbWFuZCIsInB1c2giLCJmb3JtYXR0ZWRDb21tYW5kcyIsIkV2ZW50RW1pdHRlciIsIm9uIiwiZXZlbnQiLCJmbiIsImVtaXQiLCJmb3JFYWNoIiwib2ZmIiwiZmlsdGVyIiwib25jZSIsIm9uY2VGbiIsInJlbW92ZUFsbExpc3RlbmVycyIsIm9sZERvYyIsInRyYW5zYWN0aW9ucyIsInRyYW5zZm9ybSIsIlRyYW5zZm9ybSIsInN0ZXBzIiwic3RlcCIsInJlbW92ZVdoaXRlc3BhY2VzIiwibm9kZSIsImNoaWxkcmVuIiwiY2hpbGROb2RlcyIsImkiLCJsZW5ndGgiLCJjaGlsZCIsIm5vZGVUeXBlIiwibm9kZVZhbHVlIiwidGVzdCIsInJlbW92ZUNoaWxkIiwidmFsdWUiLCJ3aW5kb3ciLCJFcnJvciIsIndyYXBwZWRWYWx1ZSIsImh0bWwiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwiY29udGVudCIsIm9wdGlvbnMiLCJzbGljZSIsInBhcnNlT3B0aW9ucyIsImlzSlNPTkNvbnRlbnQiLCJpc1RleHRDb250ZW50IiwiaXNBcnJheUNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJmcm9tQXJyYXkiLCJpdGVtIiwibm9kZUZyb21KU09OIiwiZXJyb3JPbkludmFsaWRDb250ZW50IiwiY2hlY2siLCJlcnJvciIsImNhdXNlIiwiY29uc29sZSIsIndhcm4iLCJoYXNJbnZhbGlkQ29udGVudCIsImludmFsaWRDb250ZW50IiwiY29udGVudENoZWNrU2NoZW1hIiwiU2NoZW1hIiwidG9wTm9kZSIsInNwZWMiLCJtYXJrcyIsIm5vZGVzIiwiYXBwZW5kIiwiX190aXB0YXBfX3ByaXZhdGVfX3Vua25vd25fX2NhdGNoX19hbGxfX25vZGUiLCJncm91cCIsInBhcnNlRE9NIiwidGFnIiwiZ2V0QXR0cnMiLCJlIiwib3V0ZXJIVE1MIiwiZnJvbVNjaGVtYSIsInBhcnNlU2xpY2UiLCJwYXJzZSIsInBhcnNlciIsIm1hdGNoIiwiZWRnZUNvdW50IiwidHlwZSIsImVkZ2UiLCJpc1RleHRibG9jayIsImhhc1JlcXVpcmVkQXR0cnMiLCJwcmVkaWNhdGUiLCJub2Rlc1dpdGhQb3MiLCJkZXNjZW5kYW50cyIsInBvcyIsInJhbmdlIiwibm9kZXNCZXR3ZWVuIiwiZnJvbSIsInRvIiwiJHBvcyIsImRlcHRoIiwiYmVmb3JlIiwic3RhcnQiLCIkZnJvbSIsImV4dGVuc2lvbiIsImZpZWxkIiwiY29udGV4dCIsInBhcmVudCIsInN0b3JhZ2UiLCJhZGRFeHRlbnNpb25zIiwiZmxhdCIsImZyYWdtZW50IiwiZG9jdW1lbnRGcmFnbWVudCIsIkRPTVNlcmlhbGl6ZXIiLCJzZXJpYWxpemVGcmFnbWVudCIsInRlbXBvcmFyeURvY3VtZW50IiwiZG9jdW1lbnQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwia2V5cyIsImJhc2VFeHRlbnNpb25zIiwibm9kZUV4dGVuc2lvbnMiLCJtYXJrRXh0ZW5zaW9ucyIsImV4dGVuc2lvbkF0dHJpYnV0ZXMiLCJub2RlQW5kTWFya0V4dGVuc2lvbnMiLCJkZWZhdWx0QXR0cmlidXRlIiwiZGVmYXVsdCIsInZhbGlkYXRlIiwicmVuZGVyZWQiLCJyZW5kZXJIVE1MIiwicGFyc2VIVE1MIiwia2VlcE9uU3BsaXQiLCJpc1JlcXVpcmVkIiwiYWRkR2xvYmFsQXR0cmlidXRlcyIsImdsb2JhbEF0dHJpYnV0ZXMiLCJnbG9iYWxBdHRyaWJ1dGUiLCJ0eXBlcyIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGVzIiwibWVyZ2VkQXR0ciIsIm9iamVjdHMiLCJyZWR1Y2UiLCJpdGVtcyIsIm1lcmdlZEF0dHJpYnV0ZXMiLCJrZXkiLCJleGlzdHMiLCJ2YWx1ZUNsYXNzZXMiLCJTdHJpbmciLCJzcGxpdCIsImV4aXN0aW5nQ2xhc3NlcyIsImluc2VydENsYXNzZXMiLCJ2YWx1ZUNsYXNzIiwiaW5jbHVkZXMiLCJqb2luIiwibmV3U3R5bGVzIiwic3R5bGUyIiwidHJpbSIsIkJvb2xlYW4iLCJleGlzdGluZ1N0eWxlcyIsInN0eWxlTWFwIiwiTWFwIiwicHJvcGVydHkiLCJ2YWwiLCJwYXJ0Iiwic2V0Iiwibm9kZU9yTWFyayIsImF0dHJzIiwiTnVtYmVyIiwicGFyc2VSdWxlIiwib2xkQXR0cmlidXRlcyIsIm5ld0F0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGUiLCJjbGVhblVwU2NoZW1hSXRlbSIsImRhdGEiLCJfYSIsImFsbEF0dHJpYnV0ZXMiLCJmaW5kIiwiZXh0cmFOb2RlRmllbGRzIiwiZmllbGRzIiwiZXh0ZW5kTm9kZVNjaGVtYSIsImlubGluZSIsImF0b20iLCJzZWxlY3RhYmxlIiwiZHJhZ2dhYmxlIiwiY29kZSIsIndoaXRlc3BhY2UiLCJsaW5lYnJlYWtSZXBsYWNlbWVudCIsImRlZmluaW5nIiwiaXNvbGF0aW5nIiwiZXh0ZW5zaW9uQXR0cmlidXRlIiwiX2EyIiwiX2IiLCJ0b0RPTSIsIkhUTUxBdHRyaWJ1dGVzIiwicmVuZGVyVGV4dCIsInRvVGV4dCIsImV4dHJhTWFya0ZpZWxkcyIsImV4dGVuZE1hcmtTY2hlbWEiLCJpbmNsdXNpdmUiLCJleGNsdWRlcyIsInNwYW5uaW5nIiwibWFyayIsImZpbHRlcmVkIiwiZWwiLCJpbmRleCIsImluZGV4T2YiLCJTZXQiLCJkZWZhdWx0UHJpb3JpdHkiLCJzb3J0IiwiYSIsImIiLCJwcmlvcml0eUEiLCJwcmlvcml0eUIiLCJyZXNvbHZlZEV4dGVuc2lvbnMiLCJkdXBsaWNhdGVkTmFtZXMiLCJjb250ZW50Tm9kZSIsImZyb21KU09OIiwiZG9tIiwic3RhcnROb2RlIiwiYmxvY2tTZXBhcmF0b3IiLCJ0ZXh0U2VyaWFsaXplcnMiLCJ0ZXh0IiwiaXNCbG9jayIsInRleHRTZXJpYWxpemVyIiwiaXNUZXh0IiwiTWF0aCIsIm1heCIsInNpemUiLCJuYW1lT3JUeXBlIiwidHlwZU9yTmFtZSIsImVtcHR5IiwiJGhlYWQiLCJtYXJrSXRlbSIsIm5vZGUyIiwicmV2ZXJzZSIsIm5vZGVJdGVtIiwic2NoZW1hVHlwZSIsImFycmF5IiwiYnkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VlbiIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNpbXBsaWZ5Q2hhbmdlZFJhbmdlcyIsImNoYW5nZXMiLCJ1bmlxdWVDaGFuZ2VzIiwiY2hhbmdlIiwicmVzdCIsIl8iLCJzb21lIiwib3RoZXJDaGFuZ2UiLCJvbGRSYW5nZSIsIm5ld1JhbmdlIiwibWFwcGluZyIsIm1hcHMiLCJzdGVwTWFwIiwicmFuZ2VzIiwibmV3U3RhcnQiLCJuZXdFbmQiLCJvbGRTdGFydCIsImludmVydCIsIm9sZEVuZCIsInN0YXJ0T2Zmc2V0IiwiaXNUb3BOb2RlIiwidG9wTm9kZVR5cGUiLCJpbmNyZW1lbnQiLCJub2RlU2l6ZSIsIm91dHB1dDIiLCJvdXRwdXQiLCJjaGlsZENvdW50Iiwib2Zmc2V0IiwidG9TdHJpbmciLCJvYmplY3QxIiwib2JqZWN0MiIsInN0cmljdCIsImZpbmRNYXJrSW5TZXQiLCJrIiwiaXNNYXJrSW5TZXQiLCJjaGlsZEFmdGVyIiwicGFyZW50T2Zmc2V0IiwibWFyazIiLCJjaGlsZEJlZm9yZSIsInN0YXJ0SW5kZXgiLCJzdGFydFBvcyIsImVuZEluZGV4IiwiZW5kUG9zIiwicmVzb2x2ZSIsIm1heERlcHRoIiwiY3VycmVudERlcHRoIiwiY3VycmVudE5vZGUiLCJ0eXBlTmFtZSIsIm1heE1hdGNoIiwidGV4dEJlZm9yZSIsInNsaWNlRW5kUG9zIiwiY2h1bmsiLCJ0ZXh0Q29udGVudCIsImlzQXRvbSIsInNlbGVjdGlvblJhbmdlIiwibWFya1JhbmdlcyIsIiR0byIsInJlbGF0aXZlRnJvbSIsInJlbGF0aXZlVG8iLCJtaW4iLCJyYW5nZTIiLCJtYXRjaGVkUmFuZ2UiLCJtYXJrUmFuZ2UiLCJzdW0iLCJleGNsdWRlZFJhbmdlIiwibm9kZVJhbmdlcyIsIm1hdGNoZWROb2RlUmFuZ2VzIiwibm9kZVJhbmdlIiwiJGFuY2hvciIsInBhcmVudE5vZGUiLCIkcGFyZW50UG9zIiwiZW5kIiwiZW5hYmxlZCIsImVuYWJsZWRFeHRlbnNpb24iLCJjaGVja0NoaWxkcmVuIiwiaWdub3JlV2hpdGVzcGFjZSIsImlzTGVhZiIsImlzQ29udGVudEVtcHR5IiwiY2hpbGROb2RlIiwiTm9kZVNlbGVjdGlvbiIsIlRleHRTZWxlY3Rpb24iLCJtaW5Qb3MiLCJtYXhQb3MiLCJyZXNvbHZlZEZyb20iLCJyZXNvbHZlZEVuZCIsImNvb3Jkc0F0UG9zIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBvc2l0aW9uIiwic2VsZWN0aW9uQXRTdGFydCIsIlNlbGVjdGlvbiIsImF0U3RhcnQiLCJzZWxlY3Rpb25BdEVuZCIsImF0RW5kIiwiY3JlYXRlIiwicmV3cml0ZVVua25vd25Db250ZW50SW5uZXIiLCJqc29uIiwidmFsaWRNYXJrcyIsInZhbGlkTm9kZXMiLCJyZXdyaXR0ZW5Db250ZW50IiwiaGFzIiwib3JpZ2luYWwiLCJ1bnN1cHBvcnRlZCIsImZhbGxiYWNrVG9QYXJhZ3JhcGgiLCJzdGFydExlbiIsImJpYXMiLCJsYXN0IiwiUmVwbGFjZVN0ZXAiLCJSZXBsYWNlQXJvdW5kU3RlcCIsIl9mcm9tIiwiX3RvIiwiX25ld0Zyb20iLCJuZXdUbyIsInNldFNlbGVjdGlvbiIsIm5lYXIiLCJoYW5kbGVyIiwiaW5wdXRSdWxlTWF0Y2hlckhhbmRsZXIiLCJleGVjIiwiaW5wdXRSdWxlTWF0Y2giLCJyZXN1bHQiLCJpbnB1dCIsInJlcGxhY2VXaXRoIiwicnVsZXMiLCJwbHVnaW4iLCJjb21wb3NpbmciLCJub2RlQmVmb3JlIiwibm9kZUFmdGVyIiwibWF0Y2hlZCIsInJ1bGUiLCJzZXRNZXRhIiwiUGx1Z2luIiwiaW5pdCIsInByZXYiLCJzdG9yZWQiLCJzaW11bGF0ZWRJbnB1dE1ldGEiLCJpc1NpbXVsYXRlZElucHV0Iiwic2V0VGltZW91dCIsInNlbGVjdGlvblNldCIsImRvY0NoYW5nZWQiLCJoYW5kbGVUZXh0SW5wdXQiLCJoYW5kbGVET01FdmVudHMiLCJjb21wb3NpdGlvbmVuZCIsIiRjdXJzb3IiLCJoYW5kbGVLZXlEb3duIiwiaXNJbnB1dFJ1bGVzIiwiZ2V0VHlwZSIsImdldFByb3RvdHlwZU9mIiwidGFyZ2V0Iiwic291cmNlIiwiRXh0ZW5kYWJsZSIsImNvbmZpZ3VyZSIsImV4dGVuZCIsImFkZE9wdGlvbnMiLCJleHRlbmRlZENvbmZpZyIsIl9NYXJrIiwiYXJndW1lbnRzIiwicmVzb2x2ZWRDb25maWciLCJoYW5kbGVFeGl0IiwiY3VycmVudFBvcyIsImlzQXRFbmQiLCJjdXJyZW50TWFya3MiLCJpc0luTWFyayIsIm0iLCJyZW1vdmVNYXJrIiwicmVtb3ZlU3RvcmVkTWFyayIsImluc2VydFRleHQiLCJwYXN0ZVJ1bGVNYXRjaGVySGFuZGxlciIsIm1hdGNoQWxsIiwibWF0Y2hlcyIsInBhc3RlUnVsZU1hdGNoIiwicnVuMiIsInBhc3RlRXZlbnQiLCJkcm9wRXZlbnQiLCJoYW5kbGVycyIsInJlc29sdmVkVG8iLCJ0ZXh0VG9NYXRjaCIsInRleHRCZXR3ZWVuIiwic3VjY2VzcyIsInRpcHRhcERyYWdGcm9tT3RoZXJFZGl0b3IiLCJjcmVhdGVDbGlwYm9hcmRQYXN0ZUV2ZW50IiwiQ2xpcGJvYXJkRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiRGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImRyYWdTb3VyY2VFbGVtZW50IiwiaXNQYXN0ZWRGcm9tUHJvc2VNaXJyb3IiLCJpc0Ryb3BwZWRGcm9tUHJvc2VNaXJyb3IiLCJEcmFnRXZlbnQiLCJwcm9jZXNzRXZlbnQiLCJwYXN0ZUV2dCIsImNoYWluYWJsZVN0YXRlIiwiaGFuZGxlRHJhZ3N0YXJ0IiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiaGFuZGxlRHJhZ2VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRyb3AiLCJkcmFnRnJvbU90aGVyRWRpdG9yIiwiaXNFZGl0YWJsZSIsImRlbGV0ZVJhbmdlIiwicGFzdGUiLCJfdmlldyIsImdldERhdGEiLCJhcHBlbmRUcmFuc2FjdGlvbiIsIm9sZFN0YXRlIiwiaXNQYXN0ZSIsImlzRHJvcCIsInNpbXVsYXRlZFBhc3RlTWV0YSIsImlzU2ltdWxhdGVkUGFzdGUiLCJmcm9tMiIsInRvMiIsImZpbmREaWZmU3RhcnQiLCJmaW5kRGlmZkVuZCIsIkV4dGVuc2lvbk1hbmFnZXIiLCJzcGxpdHRhYmxlTWFya3MiLCJzZXR1cEV4dGVuc2lvbnMiLCJleHRlbnNpb25TdG9yYWdlIiwiYWRkQ29tbWFuZHMiLCJpbnB1dFJ1bGVzIiwicGFzdGVSdWxlcyIsImFsbFBsdWdpbnMiLCJhZGRLZXlib2FyZFNob3J0Y3V0cyIsImRlZmF1bHRCaW5kaW5ncyIsIkFycm93UmlnaHQiLCJiaW5kaW5ncyIsInNob3J0Y3V0Iiwia2V5TWFwUGx1Z2luIiwia2V5bWFwIiwiYWRkSW5wdXRSdWxlcyIsImVuYWJsZUlucHV0UnVsZXMiLCJhZGRQYXN0ZVJ1bGVzIiwiZW5hYmxlUGFzdGVSdWxlcyIsImFkZFByb3NlTWlycm9yUGx1Z2lucyIsInByb3NlTWlycm9yUGx1Z2lucyIsIm5vZGVWaWV3cyIsImFkZE5vZGVWaWV3Iiwibm9kZXZpZXciLCJnZXRQb3MiLCJkZWNvcmF0aW9ucyIsImlubmVyRGVjb3JhdGlvbnMiLCJtYXJrVmlld3MiLCJhZGRNYXJrVmlldyIsIm1hcmtWaWV3IiwidXBkYXRlQXR0cmlidXRlcyIsIm9uQmVmb3JlQ3JlYXRlIiwib25DcmVhdGUiLCJvblVwZGF0ZSIsIm9uU2VsZWN0aW9uVXBkYXRlIiwib25UcmFuc2FjdGlvbiIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkRlc3Ryb3kiLCJmbGF0dGVuIiwiX19leHBvcnQyIiwiQ2xpcGJvYXJkVGV4dFNlcmlhbGl6ZXIiLCJDb21tYW5kcyIsIkRlbGV0ZSIsIkRyb3AiLCJFZGl0YWJsZSIsIkZvY3VzRXZlbnRzIiwiS2V5bWFwIiwiUGFzdGUiLCJUYWJpbmRleCIsImZvY3VzRXZlbnRzUGx1Z2luS2V5IiwiX0V4dGVuc2lvbiIsIlBsdWdpbktleSIsImNsaXBib2FyZFRleHRTZXJpYWxpemVyIiwiY29tbWFuZHNfZXhwb3J0cyIsImJsdXIiLCJjbGVhckNvbnRlbnQiLCJjbGVhck5vZGVzIiwiY29tbWFuZCIsImNyZWF0ZVBhcmFncmFwaE5lYXIiLCJjdXQiLCJkZWxldGVDdXJyZW50Tm9kZSIsImRlbGV0ZU5vZGUiLCJkZWxldGVTZWxlY3Rpb24iLCJlbnRlciIsImV4aXRDb2RlIiwiZXh0ZW5kTWFya1JhbmdlIiwiZmlyc3QiLCJmb2N1cyIsImluc2VydENvbnRlbnQiLCJpbnNlcnRDb250ZW50QXQiLCJqb2luQmFja3dhcmQiLCJqb2luRG93biIsImpvaW5Gb3J3YXJkIiwiam9pbkl0ZW1CYWNrd2FyZCIsImpvaW5JdGVtRm9yd2FyZCIsImpvaW5UZXh0YmxvY2tCYWNrd2FyZCIsImpvaW5UZXh0YmxvY2tGb3J3YXJkIiwiam9pblVwIiwia2V5Ym9hcmRTaG9ydGN1dCIsImxpZnQiLCJsaWZ0RW1wdHlCbG9jayIsImxpZnRMaXN0SXRlbSIsIm5ld2xpbmVJbkNvZGUiLCJyZXNldEF0dHJpYnV0ZXMiLCJzY3JvbGxJbnRvVmlldyIsInNlbGVjdEFsbCIsInNlbGVjdE5vZGVCYWNrd2FyZCIsInNlbGVjdE5vZGVGb3J3YXJkIiwic2VsZWN0UGFyZW50Tm9kZSIsInNlbGVjdFRleHRibG9ja0VuZCIsInNlbGVjdFRleHRibG9ja1N0YXJ0Iiwic2V0Q29udGVudCIsInNldE1hcmsiLCJzZXROb2RlIiwic2V0Tm9kZVNlbGVjdGlvbiIsInNldFRleHRTZWxlY3Rpb24iLCJzaW5rTGlzdEl0ZW0iLCJzcGxpdEJsb2NrIiwic3BsaXRMaXN0SXRlbSIsInRvZ2dsZUxpc3QiLCJ0b2dnbGVNYXJrIiwidG9nZ2xlTm9kZSIsInRvZ2dsZVdyYXAiLCJ1bmRvSW5wdXRSdWxlIiwidW5zZXRBbGxNYXJrcyIsInVuc2V0TWFyayIsIndyYXBJbiIsIndyYXBJbkxpc3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpc0Rlc3Ryb3llZCIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImVtaXRVcGRhdGUiLCIkbWFwcGVkRnJvbSIsIiRtYXBwZWRUbyIsImJsb2NrUmFuZ2UiLCJ0YXJnZXRMaWZ0RGVwdGgiLCJsaWZ0VGFyZ2V0IiwiZGVmYXVsdFR5cGUiLCJjb250ZW50TWF0Y2hBdCIsInNldE5vZGVNYXJrdXAiLCJvcmlnaW5SYW5nZSIsInRhcmdldFBvcyIsImNvbnRlbnRTbGljZSIsIm5ld1BvcyIsImluc2VydCIsImFmdGVyIiwiZGVsZXRlIiwibmV3U2VsZWN0aW9uIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJ1c2VyQWdlbnQiLCJkZWxheWVkRm9jdXMiLCJoYXNGb2N1cyIsImlzU2FtZVNlbGVjdGlvbiIsImVxIiwic2V0U3RvcmVkTWFya3MiLCJpc0ZyYWdtZW50Iiwibm9kZU9yRnJhZ21lbnQiLCJ1cGRhdGVTZWxlY3Rpb24iLCJhcHBseUlucHV0UnVsZXMiLCJhcHBseVBhc3RlUnVsZXMiLCJlbWl0Q29udGVudEVycm9yIiwiZGlzYWJsZUNvbGxhYm9yYXRpb24iLCJjb2xsYWJvcmF0aW9uIiwiaXNEaXNhYmxlZCIsInByZXNlcnZlV2hpdGVzcGFjZSIsImVuYWJsZUNvbnRlbnRDaGVjayIsImlzT25seVRleHRDb250ZW50IiwiaXNPbmx5QmxvY2tDb250ZW50IiwiaXNFbXB0eVRleHRCbG9jayIsIm5ld0NvbnRlbnQiLCJ2IiwiZnJvbVNlbGVjdGlvbkF0U3RhcnQiLCJpc1RleHRTZWxlY3Rpb24yIiwiaGFzQ29udGVudCIsInBvaW50Iiwiam9pblBvaW50Iiwibm9ybWFsaXplS2V5TmFtZSIsInBhcnRzIiwiYWx0IiwiY3RybCIsInNoaWZ0IiwibWV0YSIsIm1vZCIsIktleWJvYXJkRXZlbnQiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjYXB0dXJlZFRyYW5zYWN0aW9uIiwiY2FwdHVyZVRyYW5zYWN0aW9uIiwic29tZVByb3AiLCJmIiwibmV3U3RlcCIsIm1heWJlU3RlcCIsImlzQWN0aXZlMiIsIm9iaiIsInByb3BPclByb3BzIiwibmV3T2JqIiwicHJvcCIsIm1hcmtUeXBlIiwiYWRkTWFyayIsIkFsbFNlbGVjdGlvbiIsImRvY3VtZW50MiIsImNhblNldE1hcmsiLCJuZXdNYXJrVHlwZSIsImN1cnNvciIsImlzSW5TZXQiLCJzb21lTm9kZVN1cHBvcnRzTWFyayIsImlubGluZUNvbnRlbnQiLCJhbGxvd3NNYXJrVHlwZSIsIl9wb3MiLCJpc0lubGluZSIsInBhcmVudEFsbG93c01hcmtUeXBlIiwiY3VycmVudE1hcmtzQWxsb3dNYXJrVHlwZSIsIm90aGVyTWFyayIsImFkZFN0b3JlZE1hcmsiLCJ0cmltbWVkRnJvbSIsInRyaW1tZWRUbyIsInNvbWVIYXNNYXJrIiwiYXR0cmlidXRlc1RvQ29weSIsInNhbWVQYXJlbnQiLCJjYW5TZXRCbG9jayIsInNldEJsb2NrVHlwZSIsInVwZGF0ZWRTdGF0ZSIsImVuc3VyZU1hcmtzIiwiZmlsdGVyZWRNYXJrcyIsImtlZXBNYXJrcyIsImNhblNwbGl0IiwiZGVmbHQiLCJpbmRleEFmdGVyIiwiZmlyc3QyIiwiJGZpcnN0IiwiY2FuUmVwbGFjZVdpdGgiLCJvdmVycmlkZUF0dHJzIiwiZ3JhbmRQYXJlbnQiLCJ3cmFwIiwiZGVwdGhCZWZvcmUiLCJkIiwiY29weSIsImRlcHRoQWZ0ZXIiLCJuZXdOZXh0VHlwZUF0dHJpYnV0ZXMyIiwibmV4dFR5cGUyIiwiY29udGVudE1hdGNoIiwiY3JlYXRlQW5kRmlsbCIsInJlcGxhY2UiLCJTbGljZSIsInNlbCIsIm4iLCJuZXh0VHlwZSIsIm5ld1R5cGVBdHRyaWJ1dGVzIiwibmV3TmV4dFR5cGVBdHRyaWJ1dGVzIiwiam9pbkxpc3RCYWNrd2FyZHMiLCJsaXN0VHlwZSIsImxpc3QiLCJub2RlQXQiLCJjYW5Kb2luQmFja3dhcmRzIiwiY2FuSm9pbiIsImpvaW5MaXN0Rm9yd2FyZHMiLCJjYW5Kb2luRm9yd2FyZHMiLCJsaXN0VHlwZU9yTmFtZSIsIml0ZW1UeXBlT3JOYW1lIiwiaXRlbVR5cGUiLCJwYXJlbnRMaXN0IiwidmFsaWRDb250ZW50IiwiY2FuV3JhcEluTGlzdCIsImV4dGVuZEVtcHR5TWFya1JhbmdlIiwidG9nZ2xlVHlwZU9yTmFtZSIsInRvZ2dsZVR5cGUiLCJ1bmRvYWJsZSIsImdldFN0YXRlIiwidG9VbmRvIiwiaiIsImRvY3MiLCJsYXN0UG9zIiwibGFzdE5vZGUiLCJ0cmltbWVkRnJvbTIiLCJ0cmltbWVkVG8yIiwiYXBwZW5kZWRUcmFuc2FjdGlvbnMiLCJfYyIsIl9iMiIsIl9jMiIsIl9kIiwiY29yZUV4dGVuc2lvbk9wdGlvbnMiLCJmaWx0ZXJUcmFuc2FjdGlvbiIsIm5leHRUcmFuc2FjdGlvbiIsIm1hcFJlc3VsdCIsImRlbGV0ZWRBZnRlciIsImRlbGV0ZWRCZWZvcmUiLCJpc0Z1bGx5V2l0aGluUmFuZ2UiLCJuZXdGcm9tIiwiZGVsZXRlZFJhbmdlIiwicGFydGlhbCIsImNvbWJpbmVkVHJhbnNmb3JtIiwiX2EzIiwiX2IzIiwiUmVtb3ZlTWFya1N0ZXAiLCJmb3VuZEJlZm9yZU1hcmsiLCJmb3VuZEFmdGVyTWFyayIsImFzeW5jIiwiaGFuZGxlRHJvcCIsIm1vdmVkIiwiZWRpdGFibGUiLCJpc0ZvY3VzZWQiLCJoYW5kbGVCYWNrc3BhY2UiLCJwYXJlbnRJc0lzb2xhdGluZyIsInBhcmVudFBvcyIsImlzQXRTdGFydCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZUVudGVyIiwiYmFzZUtleW1hcCIsIkVudGVyIiwiTW9kLUVudGVyIiwiQmFja3NwYWNlIiwiTW9kLWEiLCJwY0tleW1hcCIsIm1hY0tleW1hcCIsIkN0cmwtYSIsIkN0cmwtZSIsIm5ld1N0YXRlIiwidHIyIiwiZG9jQ2hhbmdlcyIsImlnbm9yZVRyIiwiYWxsRnJvbSIsImFsbEVuZCIsImFsbFdhc1NlbGVjdGVkIiwiaXNFbXB0eSIsImhhbmRsZVBhc3RlIiwidGFiaW5kZXgiLCJfTm9kZVBvcyIsImFjdHVhbERlcHRoIiwicmVzb2x2ZWRQb3MiLCJlbGVtZW50IiwiZG9tQXRQb3MiLCJpc05vblRleHRBdG9tIiwiY2hpbGROb2RlUG9zIiwiZmlyc3RDaGlsZCIsImxhc3RDaGlsZCIsImNsb3Nlc3QiLCJzZWxlY3RvciIsIm5vZGVBdHRyaWJ1dGVzIiwiYXR0cktleXMiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZpcnN0SXRlbU9ubHkiLCJjaGlsZFBvcyIsImRvZXNBbGxBdHRyaWJ1dGVzTWF0Y2giLCJjb25jYXQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsIm5vbmNlIiwic3VmZml4IiwidGlwdGFwU3R5bGVUYWciLCJzdHlsZU5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNzcyIsImVkaXRvclZpZXciLCJpc0luaXRpYWxpemVkIiwiaW5zdGFuY2VJZCIsInJhbmRvbSIsImluamVjdENTUyIsImluamVjdE5vbmNlIiwiYXV0b2ZvY3VzIiwiZWRpdG9yUHJvcHMiLCJlbmFibGVDb3JlRXh0ZW5zaW9ucyIsIm9uQ29udGVudEVycm9yIiwib25QYXN0ZSIsIm9uRHJvcCIsIm9uRGVsZXRlIiwiaXNDYXB0dXJpbmdUcmFuc2FjdGlvbiIsInNldE9wdGlvbnMiLCJjcmVhdGVFeHRlbnNpb25NYW5hZ2VyIiwiY3JlYXRlQ29tbWFuZE1hbmFnZXIiLCJjcmVhdGVTY2hlbWEiLCJpbml0aWFsRG9jIiwiY3JlYXRlRG9jIiwiZWRpdG9yU3RhdGUiLCJFZGl0b3JTdGF0ZSIsIm1vdW50IiwiY3JlYXRlVmlldyIsInVubW91bnQiLCJyZW1vdmUiLCJjb21tYW5kTWFuYWdlciIsInNldFByb3BzIiwidXBkYXRlU3RhdGUiLCJzZXRFZGl0YWJsZSIsIlByb3h5IiwiZHJhZ2dpbmciLCJnZXQiLCJSZWZsZWN0IiwicmVnaXN0ZXJQbHVnaW4iLCJoYW5kbGVQbHVnaW5zIiwidW5yZWdpc3RlclBsdWdpbiIsIm5hbWVPclBsdWdpbktleVRvUmVtb3ZlIiwicHJldlBsdWdpbnMiLCJuYW1lT3JQbHVnaW5LZXkiLCJzdGFydHNXaXRoIiwiY29yZUV4dGVuc2lvbnMiLCJleHQiLCJhbGxFeHRlbnNpb25zIiwibWVzc2FnZSIsIkVkaXRvclZpZXciLCJyb2xlIiwiZGlzcGF0Y2hUcmFuc2FjdGlvbiIsImNyZWF0ZU5vZGVWaWV3cyIsInByZXBlbmRDbGFzcyIsImNsYXNzTmFtZSIsInNlbGVjdGlvbkhhc0NoYW5nZWQiLCJyb290VHJXYXNBcHBsaWVkIiwicHJldlN0YXRlIiwibmV4dFN0YXRlIiwibW9zdFJlY2VudEZvY3VzVHIiLCJmaW5kTGFzdCIsImZvY3VzMiIsImJsdXIyIiwibmFtZU9yQXR0cmlidXRlcyIsImF0dHJpYnV0ZXNPclVuZGVmaW5lZCIsImdldEpTT04iLCJnZXRIVE1MIiwiJG5vZGUiLCIkZG9jIiwiJG5vZGVzIiwiY2FwdHVyZUdyb3VwIiwiZnVsbE1hdGNoIiwic3RhcnRTcGFjZXMiLCJzZWFyY2giLCJ0ZXh0U3RhcnQiLCJ0ZXh0RW5kIiwiZXhjbHVkZWRNYXJrcyIsImV4Y2x1ZGVkIiwibWFya0VuZCIsIm5ld05vZGUiLCJsYXN0SW5kZXhPZiIsIm1hdGNoU3RhcnQiLCJsYXN0Q2hhciIsImluc2VydGlvblN0YXJ0IiwiJHN0YXJ0IiwiY3V0T2ZmIiwid3JhcHBpbmciLCJmaW5kV3JhcHBpbmciLCJrZWVwQXR0cmlidXRlcyIsImpvaW5QcmVkaWNhdGUiLCJGdW5jdGlvbiIsIm1hdGNoVHlwZSIsInN0cmluZyIsImNoZWNrTWFyayIsInRoaXNNYXJrIiwiZm91bmRNYXJrIiwibmVlZHNVcGRhdGUiLCJ1cGRhdGVkTWFyayIsImNvbXBvbmVudCIsImNvbnRlbnRET00iLCJpZ25vcmVNdXRhdGlvbiIsIm11dGF0aW9uIiwiY2hhbmdlZE5vZGVzIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImlzQ29udGVudEVkaXRhYmxlIiwiX05vZGUiLCJpc0RyYWdnaW5nIiwic3RvcEV2ZW50Iiwib25EcmFnU3RhcnQiLCJfZSIsIl9mIiwiX2ciLCJkcmFnSGFuZGxlIiwiZG9tQm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFuZGxlQm94Iiwib2Zmc2V0WCIsIm5hdGl2ZUV2ZW50Iiwib2Zmc2V0WSIsImNsb25lZE5vZGUiLCJjbG9uZU5vZGUiLCJkYXRhVHJhbnNmZXIiLCJzZXREcmFnSW1hZ2UiLCJpc0luRWxlbWVudCIsImlzRHJhZ0V2ZW50IiwiaXNEcm9wRXZlbnQiLCJpc0lucHV0IiwidGFnTmFtZSIsImlzRHJhZ2dhYmxlIiwiaXNTZWxlY3RhYmxlIiwiaXNDb3B5RXZlbnQiLCJpc1Bhc3RlRXZlbnQiLCJpc0N1dEV2ZW50IiwiaXNDbGlja0V2ZW50IiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkRHJhZ0hhbmRsZSIsImdldENvbnRlbnQiLCJjdXJyZW50U3RlcCIsImRlbGV0ZWQiLCJtYXBwZWRQb3NpdGlvbiIsIm5ld1Bvc2l0aW9uIiwiZ2V0TWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUMsQ0FBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGtCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsMEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwwQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLDJCQUFBLEVBQUFBLENBQUEsS0FBQUEsMkJBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyw2QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDZCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsNEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSw0QkFBQTtFQUFBekMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQTBDLG9DQUFBLEVBQUFBLENBQUEsS0FBQUEsb0NBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFB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Q25EOWUsS0FBQSxHQUFRME4sR0FBQTtRQUNWO01BQ0Y7TUFFQXJXLEtBQUEsQ0FBTVksRUFBQSxDQUFHNmIsVUFBQSxDQUFXZ0wsTUFBQSxFQUFROWUsS0FBQSxFQUFPME4sR0FBRztJQUN4QztFQUNGLENBQUM7QUFDSDtBQzFCTyxJQUFNdGdCLE9BQUEsR0FBTixNQUFjO0VBS25COEssWUFBWVosV0FBQSxFQUEwQjtJQUNwQyxLQUFLQSxXQUFBLEdBQWNBLFdBQUE7SUFDbkIsS0FBS285QixXQUFBLEdBQWMsS0FBS3A5QixXQUFBLENBQVk4RCxLQUFBLENBQU1PLE1BQUE7RUFDNUM7RUFFQTVDLElBQUlrVyxRQUFBLEVBQWlDO0lBQ25DLElBQUkwbEIsT0FBQSxHQUFVO0lBRWQsTUFBTUMsY0FBQSxHQUFpQixLQUFLdDlCLFdBQUEsQ0FBWThELEtBQUEsQ0FBTXVCLEtBQUEsQ0FBTSxLQUFLKzNCLFdBQVcsRUFBRS94QixNQUFBLENBQU8sQ0FBQ2t5QixXQUFBLEVBQWF4NUIsSUFBQSxLQUFTO01BQ2xHLE1BQU15c0IsU0FBQSxHQUFZenNCLElBQUEsQ0FBS3k1QixNQUFBLENBQU8sRUFBRWhOLFNBQUEsQ0FBVStNLFdBQVc7TUFFckQsSUFBSS9NLFNBQUEsQ0FBVTZNLE9BQUEsRUFBUztRQUNyQkEsT0FBQSxHQUFVO01BQ1o7TUFFQSxPQUFPN00sU0FBQSxDQUFVdG9CLEdBQUE7SUFDbkIsR0FBR3lQLFFBQVE7SUFFWCxPQUFPO01BQ0xBLFFBQUEsRUFBVTJsQixjQUFBO01BQ1ZEO0lBQ0Y7RUFDRjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==