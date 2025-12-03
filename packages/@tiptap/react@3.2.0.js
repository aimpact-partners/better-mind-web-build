System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","use-sync-external-store@1.5.0/shim","react@18.3.1/jsx-runtime","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0","use-sync-external-store@1.5.0/shim/with-selector"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["use-sync-external-store","1.5.0"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["fast-deep-equal","3.1.3"],["@tiptap/react","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('use-sync-external-store@1.5.0/shim', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep), dep => dependencies.set('@tiptap/core@3.12.0', dep), dep => dependencies.set('use-sync-external-store@1.5.0/shim/with-selector', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/fast-deep-equal/es6/react.js
var require_react = __commonJS({
  "node_modules/fast-deep-equal/es6/react.js"(exports, module2) {
    "use strict";

    var envHasBigInt64Array = typeof BigInt64Array !== "undefined";
    module2.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return false;
          for (i of a.entries()) if (!b.has(i[0])) return false;
          for (i of a.entries()) if (!equal(i[1], b.get(i[0]))) return false;
          return true;
        }
        if (a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return false;
          for (i of a.entries()) if (!b.has(i[0])) return false;
          return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0;) {
          var key = keys[i];
          if (key === "_owner" && a.$$typeof) {
            continue;
          }
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// .beyond/uimport/temp/@tiptap/react.3.2.0.js
var react_3_2_0_exports = {};
__export(react_3_2_0_exports, {
  EditorConsumer: () => EditorConsumer,
  EditorContent: () => EditorContent,
  EditorContext: () => EditorContext,
  EditorProvider: () => EditorProvider,
  MarkViewContent: () => MarkViewContent,
  NodeViewContent: () => NodeViewContent,
  NodeViewWrapper: () => NodeViewWrapper,
  PureEditorContent: () => PureEditorContent,
  ReactMarkView: () => ReactMarkView,
  ReactMarkViewContext: () => ReactMarkViewContext,
  ReactMarkViewRenderer: () => ReactMarkViewRenderer,
  ReactNodeView: () => ReactNodeView,
  ReactNodeViewContentProvider: () => ReactNodeViewContentProvider,
  ReactNodeViewContext: () => ReactNodeViewContext,
  ReactNodeViewRenderer: () => ReactNodeViewRenderer,
  ReactRenderer: () => ReactRenderer,
  useCurrentEditor: () => useCurrentEditor,
  useEditor: () => useEditor,
  useEditorState: () => useEditorState,
  useReactNodeView: () => useReactNodeView
});
module.exports = __toCommonJS(react_3_2_0_exports);

// node_modules/@tiptap/react/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  EditorConsumer: () => EditorConsumer,
  EditorContent: () => EditorContent,
  EditorContext: () => EditorContext,
  EditorProvider: () => EditorProvider,
  MarkViewContent: () => MarkViewContent,
  NodeViewContent: () => NodeViewContent,
  NodeViewWrapper: () => NodeViewWrapper,
  PureEditorContent: () => PureEditorContent,
  ReactMarkView: () => ReactMarkView,
  ReactMarkViewContext: () => ReactMarkViewContext,
  ReactMarkViewRenderer: () => ReactMarkViewRenderer,
  ReactNodeView: () => ReactNodeView,
  ReactNodeViewContentProvider: () => ReactNodeViewContentProvider,
  ReactNodeViewContext: () => ReactNodeViewContext,
  ReactNodeViewRenderer: () => ReactNodeViewRenderer,
  ReactRenderer: () => ReactRenderer,
  useCurrentEditor: () => useCurrentEditor,
  useEditor: () => useEditor,
  useEditorState: () => useEditorState,
  useReactNodeView: () => useReactNodeView
});
var import_react = require("react@18.3.1");
var import_react2 = __toESM(require("react@18.3.1"), 0);
var import_react_dom = __toESM(require("react-dom@18.3.1"), 0);
var import_shim = require("use-sync-external-store@1.5.0/shim");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var import_core = require("@tiptap/core@3.12.0");
var import_react3 = require("react@18.3.1");
var import_shim2 = require("use-sync-external-store@1.5.0/shim");
var import_react4 = __toESM(require_react(), 1);
var import_react5 = require("react@18.3.1");
var import_with_selector = require("use-sync-external-store@1.5.0/shim/with-selector");
var import_jsx_runtime2 = require("react@18.3.1/jsx-runtime");
var import_react6 = require("react@18.3.1");
var import_jsx_runtime3 = require("react@18.3.1/jsx-runtime");
var import_react7 = __toESM(require("react@18.3.1"), 0);
var import_jsx_runtime4 = require("react@18.3.1/jsx-runtime");
var import_core2 = require("@tiptap/core@3.12.0");
var import_react8 = __toESM(require("react@18.3.1"), 0);
var import_react9 = require("react@18.3.1");
var import_react_dom2 = require("react-dom@18.3.1");
var import_jsx_runtime5 = require("react@18.3.1/jsx-runtime");
var import_jsx_runtime6 = require("react@18.3.1/jsx-runtime");
var import_core3 = require("@tiptap/core@3.12.0");
var import_react10 = require("react@18.3.1");
var import_jsx_runtime7 = require("react@18.3.1/jsx-runtime");
__reExport(dist_exports, require("@tiptap/core@3.12.0"));
var mergeRefs = (...refs) => {
  return node => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ;
        ref.current = node;
      }
    });
  };
};
var Portals = ({
  contentComponent
}) => {
  const renderers = (0, import_shim.useSyncExternalStore)(contentComponent.subscribe, contentComponent.getSnapshot, contentComponent.getServerSnapshot);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: Object.values(renderers)
  });
};
function getInstance() {
  const subscribers = /* @__PURE__ */new Set();
  let renderers = {};
  return {
    /**
     * Subscribe to the editor instance's changes.
     */
    subscribe(callback) {
      subscribers.add(callback);
      return () => {
        subscribers.delete(callback);
      };
    },
    getSnapshot() {
      return renderers;
    },
    getServerSnapshot() {
      return renderers;
    },
    /**
     * Adds a new NodeView Renderer to the editor.
     */
    setRenderer(id, renderer) {
      renderers = {
        ...renderers,
        [id]: import_react_dom.default.createPortal(renderer.reactElement, renderer.element, id)
      };
      subscribers.forEach(subscriber => subscriber());
    },
    /**
     * Removes a NodeView Renderer from the editor.
     */
    removeRenderer(id) {
      const nextRenderers = {
        ...renderers
      };
      delete nextRenderers[id];
      renderers = nextRenderers;
      subscribers.forEach(subscriber => subscriber());
    }
  };
}
var PureEditorContent = class extends import_react2.default.Component {
  constructor(props) {
    var _a;
    super(props);
    this.editorContentRef = import_react2.default.createRef();
    this.initialized = false;
    this.state = {
      hasContentComponentInitialized: Boolean((_a = props.editor) == null ? void 0 : _a.contentComponent)
    };
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  init() {
    const editor = this.props.editor;
    if (editor && !editor.isDestroyed && editor.options.element) {
      if (editor.contentComponent) {
        return;
      }
      const element = this.editorContentRef.current;
      element.append(...editor.options.element.childNodes);
      editor.setOptions({
        element
      });
      editor.contentComponent = getInstance();
      if (!this.state.hasContentComponentInitialized) {
        this.unsubscribeToContentComponent = editor.contentComponent.subscribe(() => {
          this.setState(prevState => {
            if (!prevState.hasContentComponentInitialized) {
              return {
                hasContentComponentInitialized: true
              };
            }
            return prevState;
          });
          if (this.unsubscribeToContentComponent) {
            this.unsubscribeToContentComponent();
          }
        });
      }
      editor.createNodeViews();
      this.initialized = true;
    }
  }
  componentWillUnmount() {
    var _a;
    const editor = this.props.editor;
    if (!editor) {
      return;
    }
    this.initialized = false;
    if (!editor.isDestroyed) {
      editor.view.setProps({
        nodeViews: {}
      });
    }
    if (this.unsubscribeToContentComponent) {
      this.unsubscribeToContentComponent();
    }
    editor.contentComponent = null;
    if (!((_a = editor.options.element) == null ? void 0 : _a.firstChild)) {
      return;
    }
    const newElement = document.createElement("div");
    newElement.append(...editor.options.element.childNodes);
    editor.setOptions({
      element: newElement
    });
  }
  render() {
    const {
      editor,
      innerRef,
      ...rest
    } = this.props;
    return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
        ref: mergeRefs(innerRef, this.editorContentRef),
        ...rest
      }), (editor == null ? void 0 : editor.contentComponent) && /* @__PURE__ */(0, import_jsx_runtime.jsx)(Portals, {
        contentComponent: editor.contentComponent
      })]
    });
  }
};
var EditorContentWithKey = (0, import_react2.forwardRef)((props, ref) => {
  const key = import_react2.default.useMemo(() => {
    return Math.floor(Math.random() * 4294967295).toString();
  }, [props.editor]);
  return import_react2.default.createElement(PureEditorContent, {
    key,
    innerRef: ref,
    ...props
  });
});
var EditorContent = import_react2.default.memo(EditorContentWithKey);
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react5.useLayoutEffect : import_react5.useEffect;
var EditorStateManager = class {
  constructor(initialEditor) {
    this.transactionNumber = 0;
    this.lastTransactionNumber = 0;
    this.subscribers = /* @__PURE__ */new Set();
    this.editor = initialEditor;
    this.lastSnapshot = {
      editor: initialEditor,
      transactionNumber: 0
    };
    this.getSnapshot = this.getSnapshot.bind(this);
    this.getServerSnapshot = this.getServerSnapshot.bind(this);
    this.watch = this.watch.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }
  /**
   * Get the current editor instance.
   */
  getSnapshot() {
    if (this.transactionNumber === this.lastTransactionNumber) {
      return this.lastSnapshot;
    }
    this.lastTransactionNumber = this.transactionNumber;
    this.lastSnapshot = {
      editor: this.editor,
      transactionNumber: this.transactionNumber
    };
    return this.lastSnapshot;
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return {
      editor: null,
      transactionNumber: 0
    };
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(callback) {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }
  /**
   * Watch the editor instance for changes.
   */
  watch(nextEditor) {
    this.editor = nextEditor;
    if (this.editor) {
      const fn = () => {
        this.transactionNumber += 1;
        this.subscribers.forEach(callback => callback());
      };
      const currentEditor = this.editor;
      currentEditor.on("transaction", fn);
      return () => {
        currentEditor.off("transaction", fn);
      };
    }
    return void 0;
  }
};
function useEditorState(options) {
  var _a;
  const [editorStateManager] = (0, import_react5.useState)(() => new EditorStateManager(options.editor));
  const selectedState = (0, import_with_selector.useSyncExternalStoreWithSelector)(editorStateManager.subscribe, editorStateManager.getSnapshot, editorStateManager.getServerSnapshot, options.selector, (_a = options.equalityFn) != null ? _a : import_react4.default);
  useIsomorphicLayoutEffect(() => {
    return editorStateManager.watch(options.editor);
  }, [options.editor, editorStateManager]);
  (0, import_react5.useDebugValue)(selectedState);
  return selectedState;
}
var isDev = true;
var isSSR = typeof window === "undefined";
var isNext = isSSR || Boolean(typeof window !== "undefined" && window.next);
var EditorInstanceManager = class _EditorInstanceManager {
  constructor(options) {
    this.editor = null;
    this.subscriptions = /* @__PURE__ */new Set();
    this.isComponentMounted = false;
    this.previousDeps = null;
    this.instanceId = "";
    this.options = options;
    this.subscriptions = /* @__PURE__ */new Set();
    this.setEditor(this.getInitialEditor());
    this.scheduleDestroy();
    this.getEditor = this.getEditor.bind(this);
    this.getServerSnapshot = this.getServerSnapshot.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.refreshEditorInstance = this.refreshEditorInstance.bind(this);
    this.scheduleDestroy = this.scheduleDestroy.bind(this);
    this.onRender = this.onRender.bind(this);
    this.createEditor = this.createEditor.bind(this);
  }
  setEditor(editor) {
    this.editor = editor;
    this.instanceId = Math.random().toString(36).slice(2, 9);
    this.subscriptions.forEach(cb => cb());
  }
  getInitialEditor() {
    if (this.options.current.immediatelyRender === void 0) {
      if (isSSR || isNext) {
        if (isDev) {
          throw new Error("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches.");
        }
        return null;
      }
      return this.createEditor();
    }
    if (this.options.current.immediatelyRender && isSSR && isDev) {
      throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
    }
    if (this.options.current.immediatelyRender) {
      return this.createEditor();
    }
    return null;
  }
  /**
   * Create a new editor instance. And attach event listeners.
   */
  createEditor() {
    const optionsToApply = {
      ...this.options.current,
      // Always call the most recent version of the callback function by default
      onBeforeCreate: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onBeforeCreate) == null ? void 0 : _b.call(_a, ...args);
      },
      onBlur: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onBlur) == null ? void 0 : _b.call(_a, ...args);
      },
      onCreate: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onCreate) == null ? void 0 : _b.call(_a, ...args);
      },
      onDestroy: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onDestroy) == null ? void 0 : _b.call(_a, ...args);
      },
      onFocus: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onFocus) == null ? void 0 : _b.call(_a, ...args);
      },
      onSelectionUpdate: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onSelectionUpdate) == null ? void 0 : _b.call(_a, ...args);
      },
      onTransaction: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onTransaction) == null ? void 0 : _b.call(_a, ...args);
      },
      onUpdate: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onUpdate) == null ? void 0 : _b.call(_a, ...args);
      },
      onContentError: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onContentError) == null ? void 0 : _b.call(_a, ...args);
      },
      onDrop: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onDrop) == null ? void 0 : _b.call(_a, ...args);
      },
      onPaste: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onPaste) == null ? void 0 : _b.call(_a, ...args);
      },
      onDelete: (...args) => {
        var _a, _b;
        return (_b = (_a = this.options.current).onDelete) == null ? void 0 : _b.call(_a, ...args);
      }
    };
    const editor = new import_core.Editor(optionsToApply);
    return editor;
  }
  /**
   * Get the current editor instance.
   */
  getEditor() {
    return this.editor;
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return null;
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(onStoreChange) {
    this.subscriptions.add(onStoreChange);
    return () => {
      this.subscriptions.delete(onStoreChange);
    };
  }
  static compareOptions(a, b) {
    return Object.keys(a).every(key => {
      if (["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(key)) {
        return true;
      }
      if (key === "extensions" && a.extensions && b.extensions) {
        if (a.extensions.length !== b.extensions.length) {
          return false;
        }
        return a.extensions.every((extension, index) => {
          var _a;
          if (extension !== ((_a = b.extensions) == null ? void 0 : _a[index])) {
            return false;
          }
          return true;
        });
      }
      if (a[key] !== b[key]) {
        return false;
      }
      return true;
    });
  }
  /**
   * On each render, we will create, update, or destroy the editor instance.
   * @param deps The dependencies to watch for changes
   * @returns A cleanup function
   */
  onRender(deps) {
    return () => {
      this.isComponentMounted = true;
      clearTimeout(this.scheduledDestructionTimeout);
      if (this.editor && !this.editor.isDestroyed && deps.length === 0) {
        if (!_EditorInstanceManager.compareOptions(this.options.current, this.editor.options)) {
          this.editor.setOptions({
            ...this.options.current,
            editable: this.editor.isEditable
          });
        }
      } else {
        this.refreshEditorInstance(deps);
      }
      return () => {
        this.isComponentMounted = false;
        this.scheduleDestroy();
      };
    };
  }
  /**
   * Recreate the editor instance if the dependencies have changed.
   */
  refreshEditorInstance(deps) {
    if (this.editor && !this.editor.isDestroyed) {
      if (this.previousDeps === null) {
        this.previousDeps = deps;
        return;
      }
      const depsAreEqual = this.previousDeps.length === deps.length && this.previousDeps.every((dep, index) => dep === deps[index]);
      if (depsAreEqual) {
        return;
      }
    }
    if (this.editor && !this.editor.isDestroyed) {
      this.editor.destroy();
    }
    this.setEditor(this.createEditor());
    this.previousDeps = deps;
  }
  /**
   * Schedule the destruction of the editor instance.
   * This will only destroy the editor if it was not mounted on the next tick.
   * This is to avoid destroying the editor instance when it's actually still mounted.
   */
  scheduleDestroy() {
    const currentInstanceId = this.instanceId;
    const currentEditor = this.editor;
    this.scheduledDestructionTimeout = setTimeout(() => {
      if (this.isComponentMounted && this.instanceId === currentInstanceId) {
        if (currentEditor) {
          currentEditor.setOptions(this.options.current);
        }
        return;
      }
      if (currentEditor && !currentEditor.isDestroyed) {
        currentEditor.destroy();
        if (this.instanceId === currentInstanceId) {
          this.setEditor(null);
        }
      }
    }, 1);
  }
};
function useEditor(options = {}, deps = []) {
  const mostRecentOptions = (0, import_react3.useRef)(options);
  mostRecentOptions.current = options;
  const [instanceManager] = (0, import_react3.useState)(() => new EditorInstanceManager(mostRecentOptions));
  const editor = (0, import_shim2.useSyncExternalStore)(instanceManager.subscribe, instanceManager.getEditor, instanceManager.getServerSnapshot);
  (0, import_react3.useDebugValue)(editor);
  (0, import_react3.useEffect)(instanceManager.onRender(deps));
  useEditorState({
    editor,
    selector: ({
      transactionNumber
    }) => {
      if (options.shouldRerenderOnTransaction === false || options.shouldRerenderOnTransaction === void 0) {
        return null;
      }
      if (options.immediatelyRender && transactionNumber === 0) {
        return 0;
      }
      return transactionNumber + 1;
    }
  });
  return editor;
}
var EditorContext = (0, import_react.createContext)({
  editor: null
});
var EditorConsumer = EditorContext.Consumer;
var useCurrentEditor = () => (0, import_react.useContext)(EditorContext);
function EditorProvider({
  children,
  slotAfter,
  slotBefore,
  editorContainerProps = {},
  ...editorOptions
}) {
  const editor = useEditor(editorOptions);
  const contextValue = (0, import_react.useMemo)(() => ({
    editor
  }), [editor]);
  if (!editor) {
    return null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime2.jsxs)(EditorContext.Provider, {
    value: contextValue,
    children: [slotBefore, /* @__PURE__ */(0, import_jsx_runtime2.jsx)(EditorConsumer, {
      children: ({
        editor: currentEditor
      }) => /* @__PURE__ */(0, import_jsx_runtime2.jsx)(EditorContent, {
        editor: currentEditor,
        ...editorContainerProps
      })
    }), children, slotAfter]
  });
}
var ReactNodeViewContext = (0, import_react6.createContext)({
  onDragStart: () => {},
  nodeViewContentChildren: void 0,
  nodeViewContentRef: () => {}
});
var ReactNodeViewContentProvider = ({
  children,
  content
}) => {
  return (0, import_react6.createElement)(ReactNodeViewContext.Provider, {
    value: {
      nodeViewContentChildren: content
    }
  }, children);
};
var useReactNodeView = () => (0, import_react6.useContext)(ReactNodeViewContext);
function NodeViewContent({
  as: Tag = "div",
  ...props
}) {
  const {
    nodeViewContentRef,
    nodeViewContentChildren
  } = useReactNodeView();
  return (
    // @ts-ignore
    /* @__PURE__ */
    (0, import_jsx_runtime3.jsx)(Tag, {
      ...props,
      ref: nodeViewContentRef,
      "data-node-view-content": "",
      style: {
        whiteSpace: "pre-wrap",
        ...props.style
      },
      children: nodeViewContentChildren
    })
  );
}
var NodeViewWrapper = import_react7.default.forwardRef((props, ref) => {
  const {
    onDragStart
  } = useReactNodeView();
  const Tag = props.as || "div";
  return (
    // @ts-ignore
    /* @__PURE__ */
    (0, import_jsx_runtime4.jsx)(Tag, {
      ...props,
      ref,
      "data-node-view-wrapper": "",
      onDragStart,
      style: {
        whiteSpace: "normal",
        ...props.style
      }
    })
  );
});
function isClassComponent(Component) {
  return !!(typeof Component === "function" && Component.prototype && Component.prototype.isReactComponent);
}
function isForwardRefComponent(Component) {
  return !!(typeof Component === "object" && Component.$$typeof && (Component.$$typeof.toString() === "Symbol(react.forward_ref)" || Component.$$typeof.description === "react.forward_ref"));
}
function isMemoComponent(Component) {
  return !!(typeof Component === "object" && Component.$$typeof && (Component.$$typeof.toString() === "Symbol(react.memo)" || Component.$$typeof.description === "react.memo"));
}
function canReceiveRef(Component) {
  if (isClassComponent(Component)) {
    return true;
  }
  if (isForwardRefComponent(Component)) {
    return true;
  }
  if (isMemoComponent(Component)) {
    const wrappedComponent = Component.type;
    if (wrappedComponent) {
      return isClassComponent(wrappedComponent) || isForwardRefComponent(wrappedComponent);
    }
  }
  return false;
}
function isReact19Plus() {
  try {
    if (import_react9.version) {
      const majorVersion = parseInt(import_react9.version.split(".")[0], 10);
      return majorVersion >= 19;
    }
  } catch {}
  return false;
}
var ReactRenderer = class {
  /**
   * Immediately creates element and renders the provided React component.
   */
  constructor(component, {
    editor,
    props = {},
    as = "div",
    className = ""
  }) {
    this.ref = null;
    this.id = Math.floor(Math.random() * 4294967295).toString();
    this.component = component;
    this.editor = editor;
    this.props = props;
    this.element = document.createElement(as);
    this.element.classList.add("react-renderer");
    if (className) {
      this.element.classList.add(...className.split(" "));
    }
    if (this.editor.isInitialized) {
      (0, import_react_dom2.flushSync)(() => {
        this.render();
      });
    } else {
      queueMicrotask(() => {
        this.render();
      });
    }
  }
  /**
   * Render the React component.
   */
  render() {
    var _a;
    const Component = this.component;
    const props = this.props;
    const editor = this.editor;
    const isReact19 = isReact19Plus();
    const componentCanReceiveRef = canReceiveRef(Component);
    const elementProps = {
      ...props
    };
    if (elementProps.ref && !(isReact19 || componentCanReceiveRef)) {
      delete elementProps.ref;
    }
    if (!elementProps.ref && (isReact19 || componentCanReceiveRef)) {
      elementProps.ref = ref => {
        this.ref = ref;
      };
    }
    this.reactElement = /* @__PURE__ */(0, import_jsx_runtime5.jsx)(Component, {
      ...elementProps
    });
    (_a = editor == null ? void 0 : editor.contentComponent) == null ? void 0 : _a.setRenderer(this.id, this);
  }
  /**
   * Re-renders the React component with new props.
   */
  updateProps(props = {}) {
    this.props = {
      ...this.props,
      ...props
    };
    this.render();
  }
  /**
   * Destroy the React component.
   */
  destroy() {
    var _a;
    const editor = this.editor;
    (_a = editor == null ? void 0 : editor.contentComponent) == null ? void 0 : _a.removeRenderer(this.id);
  }
  /**
   * Update the attributes of the element that holds the React component.
   */
  updateAttributes(attributes) {
    Object.keys(attributes).forEach(key => {
      this.element.setAttribute(key, attributes[key]);
    });
  }
};
var ReactMarkViewContext = import_react8.default.createContext({
  markViewContentRef: () => {}
});
var MarkViewContent = props => {
  const {
    as: Tag = "span",
    ...rest
  } = props;
  const {
    markViewContentRef
  } = import_react8.default.useContext(ReactMarkViewContext);
  return (
    // @ts-ignore
    /* @__PURE__ */
    (0, import_jsx_runtime6.jsx)(Tag, {
      ...rest,
      ref: markViewContentRef,
      "data-mark-view-content": ""
    })
  );
};
var ReactMarkView = class extends import_core2.MarkView {
  constructor(component, props, options) {
    super(component, props, options);
    this.didMountContentDomElement = false;
    const {
      as = "span",
      attrs,
      className = ""
    } = options || {};
    const componentProps = {
      ...props,
      updateAttributes: this.updateAttributes.bind(this)
    };
    this.contentDOMElement = document.createElement("span");
    const markViewContentRef = el => {
      if (el && this.contentDOMElement && el.firstChild !== this.contentDOMElement) {
        el.appendChild(this.contentDOMElement);
        this.didMountContentDomElement = true;
      }
    };
    const context = {
      markViewContentRef
    };
    const ReactMarkViewProvider = import_react8.default.memo(componentProps2 => {
      return /* @__PURE__ */(0, import_jsx_runtime6.jsx)(ReactMarkViewContext.Provider, {
        value: context,
        children: import_react8.default.createElement(component, componentProps2)
      });
    });
    ReactMarkViewProvider.displayName = "ReactNodeView";
    this.renderer = new ReactRenderer(ReactMarkViewProvider, {
      editor: props.editor,
      props: componentProps,
      as,
      className: `mark-${props.mark.type.name} ${className}`.trim()
    });
    if (attrs) {
      this.renderer.updateAttributes(attrs);
    }
  }
  get dom() {
    return this.renderer.element;
  }
  get contentDOM() {
    if (!this.didMountContentDomElement) {
      return null;
    }
    return this.contentDOMElement;
  }
};
function ReactMarkViewRenderer(component, options = {}) {
  return props => new ReactMarkView(component, props, options);
}
var ReactNodeView = class extends import_core3.NodeView {
  constructor(component, props, options) {
    super(component, props, options);
    if (!this.node.isLeaf) {
      if (this.options.contentDOMElementTag) {
        this.contentDOMElement = document.createElement(this.options.contentDOMElementTag);
      } else {
        this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div");
      }
      this.contentDOMElement.dataset.nodeViewContentReact = "";
      this.contentDOMElement.dataset.nodeViewWrapper = "";
      this.contentDOMElement.style.whiteSpace = "inherit";
      const contentTarget = this.dom.querySelector("[data-node-view-content]");
      if (!contentTarget) {
        return;
      }
      contentTarget.appendChild(this.contentDOMElement);
    }
  }
  /**
   * Setup the React component.
   * Called on initialization.
   */
  mount() {
    const props = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: false,
      extension: this.extension,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (attributes = {}) => this.updateAttributes(attributes),
      deleteNode: () => this.deleteNode(),
      ref: (0, import_react10.createRef)()
    };
    if (!this.component.displayName) {
      const capitalizeFirstChar = string => {
        return string.charAt(0).toUpperCase() + string.substring(1);
      };
      this.component.displayName = capitalizeFirstChar(this.extension.name);
    }
    const onDragStart = this.onDragStart.bind(this);
    const nodeViewContentRef = element => {
      if (element && this.contentDOMElement && element.firstChild !== this.contentDOMElement) {
        if (element.hasAttribute("data-node-view-wrapper")) {
          element.removeAttribute("data-node-view-wrapper");
        }
        element.appendChild(this.contentDOMElement);
      }
    };
    const context = {
      onDragStart,
      nodeViewContentRef
    };
    const Component = this.component;
    const ReactNodeViewProvider = (0, import_react10.memo)(componentProps => {
      return /* @__PURE__ */(0, import_jsx_runtime7.jsx)(ReactNodeViewContext.Provider, {
        value: context,
        children: (0, import_react10.createElement)(Component, componentProps)
      });
    });
    ReactNodeViewProvider.displayName = "ReactNodeView";
    let as = this.node.isInline ? "span" : "div";
    if (this.options.as) {
      as = this.options.as;
    }
    const {
      className = ""
    } = this.options;
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
    this.renderer = new ReactRenderer(ReactNodeViewProvider, {
      editor: this.editor,
      props,
      as,
      className: `node-${this.node.type.name} ${className}`.trim()
    });
    this.editor.on("selectionUpdate", this.handleSelectionUpdate);
    this.updateElementAttributes();
  }
  /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */
  get dom() {
    var _a;
    if (this.renderer.element.firstElementChild && !((_a = this.renderer.element.firstElementChild) == null ? void 0 : _a.hasAttribute("data-node-view-wrapper"))) {
      throw Error("Please use the NodeViewWrapper component for your node view.");
    }
    return this.renderer.element;
  }
  /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */
  get contentDOM() {
    if (this.node.isLeaf) {
      return null;
    }
    return this.contentDOMElement;
  }
  /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */
  handleSelectionUpdate() {
    const {
      from,
      to
    } = this.editor.state.selection;
    const pos = this.getPos();
    if (typeof pos !== "number") {
      return;
    }
    if (from <= pos && to >= pos + this.node.nodeSize) {
      if (this.renderer.props.selected) {
        return;
      }
      this.selectNode();
    } else {
      if (!this.renderer.props.selected) {
        return;
      }
      this.deselectNode();
    }
  }
  /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */
  update(node, decorations, innerDecorations) {
    const rerenderComponent = props => {
      this.renderer.updateProps(props);
      if (typeof this.options.attrs === "function") {
        this.updateElementAttributes();
      }
    };
    if (node.type !== this.node.type) {
      return false;
    }
    if (typeof this.options.update === "function") {
      const oldNode = this.node;
      const oldDecorations = this.decorations;
      const oldInnerDecorations = this.innerDecorations;
      this.node = node;
      this.decorations = decorations;
      this.innerDecorations = innerDecorations;
      return this.options.update({
        oldNode,
        oldDecorations,
        newNode: node,
        newDecorations: decorations,
        oldInnerDecorations,
        innerDecorations,
        updateProps: () => rerenderComponent({
          node,
          decorations,
          innerDecorations
        })
      });
    }
    if (node === this.node && this.decorations === decorations && this.innerDecorations === innerDecorations) {
      return true;
    }
    this.node = node;
    this.decorations = decorations;
    this.innerDecorations = innerDecorations;
    rerenderComponent({
      node,
      decorations,
      innerDecorations
    });
    return true;
  }
  /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */
  selectNode() {
    this.renderer.updateProps({
      selected: true
    });
    this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */
  deselectNode() {
    this.renderer.updateProps({
      selected: false
    });
    this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  /**
   * Destroy the React component instance.
   */
  destroy() {
    this.renderer.destroy();
    this.editor.off("selectionUpdate", this.handleSelectionUpdate);
    this.contentDOMElement = null;
  }
  /**
   * Update the attributes of the top-level element that holds the React component.
   * Applying the attributes defined in the `attrs` option.
   */
  updateElementAttributes() {
    if (this.options.attrs) {
      let attrsObj = {};
      if (typeof this.options.attrs === "function") {
        const extensionAttributes = this.editor.extensionManager.attributes;
        const HTMLAttributes = (0, import_core3.getRenderedAttributes)(this.node, extensionAttributes);
        attrsObj = this.options.attrs({
          node: this.node,
          HTMLAttributes
        });
      } else {
        attrsObj = this.options.attrs;
      }
      this.renderer.updateAttributes(attrsObj);
    }
  }
};
function ReactNodeViewRenderer(component, options) {
  return props => {
    if (!props.editor.contentComponent) {
      return {};
    }
    return new ReactNodeView(component, props, options);
  };
}

// .beyond/uimport/temp/@tiptap/react.3.2.0.js
__reExport(react_3_2_0_exports, dist_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvZXM2L3JlYWN0LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvQHRpcHRhcC9yZWFjdC4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9Db250ZXh0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9FZGl0b3JDb250ZW50LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy91c2VFZGl0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvdXNlRWRpdG9yU3RhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvdXNlUmVhY3ROb2RlVmlldy50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9Ob2RlVmlld0NvbnRlbnQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL05vZGVWaWV3V3JhcHBlci50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvUmVhY3RNYXJrVmlld1JlbmRlcmVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9SZWFjdFJlbmRlcmVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9SZWFjdE5vZGVWaWV3UmVuZGVyZXIudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbInJlcXVpcmVfcmVhY3QiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9lczYvcmVhY3QuanMiLCJleHBvcnRzIiwibW9kdWxlMiIsImVudkhhc0JpZ0ludDY0QXJyYXkiLCJCaWdJbnQ2NEFycmF5IiwiZXF1YWwiLCJhIiwiYiIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwiaSIsImtleXMiLCJBcnJheSIsImlzQXJyYXkiLCJNYXAiLCJzaXplIiwiZW50cmllcyIsImhhcyIsImdldCIsIlNldCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJ2YWx1ZU9mIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJrZXkiLCIkJHR5cGVvZiIsInJlYWN0XzNfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkVkaXRvckNvbnN1bWVyIiwiRWRpdG9yQ29udGVudCIsIkVkaXRvckNvbnRleHQiLCJFZGl0b3JQcm92aWRlciIsIk1hcmtWaWV3Q29udGVudCIsIk5vZGVWaWV3Q29udGVudCIsIk5vZGVWaWV3V3JhcHBlciIsIlB1cmVFZGl0b3JDb250ZW50IiwiUmVhY3RNYXJrVmlldyIsIlJlYWN0TWFya1ZpZXdDb250ZXh0IiwiUmVhY3RNYXJrVmlld1JlbmRlcmVyIiwiUmVhY3ROb2RlVmlldyIsIlJlYWN0Tm9kZVZpZXdDb250ZW50UHJvdmlkZXIiLCJSZWFjdE5vZGVWaWV3Q29udGV4dCIsIlJlYWN0Tm9kZVZpZXdSZW5kZXJlciIsIlJlYWN0UmVuZGVyZXIiLCJ1c2VDdXJyZW50RWRpdG9yIiwidXNlRWRpdG9yIiwidXNlRWRpdG9yU3RhdGUiLCJ1c2VSZWFjdE5vZGVWaWV3IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3JlYWN0IiwicmVxdWlyZSIsImltcG9ydF9yZWFjdDIiLCJfX3RvRVNNIiwiaW1wb3J0X3JlYWN0X2RvbSIsImltcG9ydF9zaGltIiwiaW1wb3J0X2pzeF9ydW50aW1lIiwiaW1wb3J0X2NvcmUiLCJpbXBvcnRfcmVhY3QzIiwiaW1wb3J0X3NoaW0yIiwiaW1wb3J0X3JlYWN0NCIsImltcG9ydF9yZWFjdDUiLCJpbXBvcnRfd2l0aF9zZWxlY3RvciIsImltcG9ydF9qc3hfcnVudGltZTIiLCJpbXBvcnRfcmVhY3Q2IiwiaW1wb3J0X2pzeF9ydW50aW1lMyIsImltcG9ydF9yZWFjdDciLCJpbXBvcnRfanN4X3J1bnRpbWU0IiwiaW1wb3J0X2NvcmUyIiwiaW1wb3J0X3JlYWN0OCIsImltcG9ydF9yZWFjdDkiLCJpbXBvcnRfcmVhY3RfZG9tMiIsImltcG9ydF9qc3hfcnVudGltZTUiLCJpbXBvcnRfanN4X3J1bnRpbWU2IiwiaW1wb3J0X2NvcmUzIiwiaW1wb3J0X3JlYWN0MTAiLCJpbXBvcnRfanN4X3J1bnRpbWU3IiwiX19yZUV4cG9ydCIsImRpc3RfZXhwb3J0cyIsIm1lcmdlUmVmcyIsInJlZnMiLCJub2RlIiwiZm9yRWFjaCIsInJlZiIsImN1cnJlbnQiLCJQb3J0YWxzIiwiY29udGVudENvbXBvbmVudCIsInJlbmRlcmVycyIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwic3Vic2NyaWJlIiwiZ2V0U25hcHNob3QiLCJnZXRTZXJ2ZXJTbmFwc2hvdCIsImpzeCIsIkZyYWdtZW50IiwiY2hpbGRyZW4iLCJ2YWx1ZXMiLCJnZXRJbnN0YW5jZSIsInN1YnNjcmliZXJzIiwiY2FsbGJhY2siLCJhZGQiLCJkZWxldGUiLCJzZXRSZW5kZXJlciIsImlkIiwicmVuZGVyZXIiLCJkZWZhdWx0IiwiY3JlYXRlUG9ydGFsIiwicmVhY3RFbGVtZW50IiwiZWxlbWVudCIsInN1YnNjcmliZXIiLCJyZW1vdmVSZW5kZXJlciIsIm5leHRSZW5kZXJlcnMiLCJDb21wb25lbnQiLCJwcm9wcyIsIl9hIiwiZWRpdG9yQ29udGVudFJlZiIsImNyZWF0ZVJlZiIsImluaXRpYWxpemVkIiwic3RhdGUiLCJoYXNDb250ZW50Q29tcG9uZW50SW5pdGlhbGl6ZWQiLCJCb29sZWFuIiwiZWRpdG9yIiwiY29tcG9uZW50RGlkTW91bnQiLCJpbml0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiaXNEZXN0cm95ZWQiLCJvcHRpb25zIiwiYXBwZW5kIiwiY2hpbGROb2RlcyIsInNldE9wdGlvbnMiLCJ1bnN1YnNjcmliZVRvQ29udGVudENvbXBvbmVudCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiY3JlYXRlTm9kZVZpZXdzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJ2aWV3Iiwic2V0UHJvcHMiLCJub2RlVmlld3MiLCJmaXJzdENoaWxkIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciIsImlubmVyUmVmIiwicmVzdCIsImpzeHMiLCJFZGl0b3JDb250ZW50V2l0aEtleSIsImZvcndhcmRSZWYiLCJ1c2VNZW1vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWVtbyIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ3aW5kb3ciLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJFZGl0b3JTdGF0ZU1hbmFnZXIiLCJpbml0aWFsRWRpdG9yIiwidHJhbnNhY3Rpb25OdW1iZXIiLCJsYXN0VHJhbnNhY3Rpb25OdW1iZXIiLCJsYXN0U25hcHNob3QiLCJiaW5kIiwid2F0Y2giLCJuZXh0RWRpdG9yIiwiZm4iLCJjdXJyZW50RWRpdG9yIiwib24iLCJvZmYiLCJlZGl0b3JTdGF0ZU1hbmFnZXIiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciIsInNlbGVjdG9yIiwiZXF1YWxpdHlGbiIsInVzZURlYnVnVmFsdWUiLCJpc0RldiIsImlzU1NSIiwiaXNOZXh0IiwibmV4dCIsIkVkaXRvckluc3RhbmNlTWFuYWdlciIsIl9FZGl0b3JJbnN0YW5jZU1hbmFnZXIiLCJzdWJzY3JpcHRpb25zIiwiaXNDb21wb25lbnRNb3VudGVkIiwicHJldmlvdXNEZXBzIiwiaW5zdGFuY2VJZCIsInNldEVkaXRvciIsImdldEluaXRpYWxFZGl0b3IiLCJzY2hlZHVsZURlc3Ryb3kiLCJnZXRFZGl0b3IiLCJyZWZyZXNoRWRpdG9ySW5zdGFuY2UiLCJvblJlbmRlciIsImNyZWF0ZUVkaXRvciIsInNsaWNlIiwiY2IiLCJpbW1lZGlhdGVseVJlbmRlciIsIkVycm9yIiwib3B0aW9uc1RvQXBwbHkiLCJvbkJlZm9yZUNyZWF0ZSIsImFyZ3MiLCJfYiIsIm9uQmx1ciIsIm9uQ3JlYXRlIiwib25EZXN0cm95Iiwib25Gb2N1cyIsIm9uU2VsZWN0aW9uVXBkYXRlIiwib25UcmFuc2FjdGlvbiIsIm9uVXBkYXRlIiwib25Db250ZW50RXJyb3IiLCJvbkRyb3AiLCJvblBhc3RlIiwib25EZWxldGUiLCJFZGl0b3IiLCJvblN0b3JlQ2hhbmdlIiwiY29tcGFyZU9wdGlvbnMiLCJldmVyeSIsImluY2x1ZGVzIiwiZXh0ZW5zaW9ucyIsImV4dGVuc2lvbiIsImluZGV4IiwiZGVwcyIsImNsZWFyVGltZW91dCIsInNjaGVkdWxlZERlc3RydWN0aW9uVGltZW91dCIsImVkaXRhYmxlIiwiaXNFZGl0YWJsZSIsImRlcHNBcmVFcXVhbCIsImRlcCIsImRlc3Ryb3kiLCJjdXJyZW50SW5zdGFuY2VJZCIsInNldFRpbWVvdXQiLCJtb3N0UmVjZW50T3B0aW9ucyIsInVzZVJlZiIsImluc3RhbmNlTWFuYWdlciIsInNob3VsZFJlcmVuZGVyT25UcmFuc2FjdGlvbiIsImNyZWF0ZUNvbnRleHQiLCJDb25zdW1lciIsInVzZUNvbnRleHQiLCJzbG90QWZ0ZXIiLCJzbG90QmVmb3JlIiwiZWRpdG9yQ29udGFpbmVyUHJvcHMiLCJlZGl0b3JPcHRpb25zIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm9uRHJhZ1N0YXJ0Iiwibm9kZVZpZXdDb250ZW50Q2hpbGRyZW4iLCJub2RlVmlld0NvbnRlbnRSZWYiLCJjb250ZW50IiwiYXMiLCJUYWciLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJpc0NsYXNzQ29tcG9uZW50IiwiaXNSZWFjdENvbXBvbmVudCIsImlzRm9yd2FyZFJlZkNvbXBvbmVudCIsImRlc2NyaXB0aW9uIiwiaXNNZW1vQ29tcG9uZW50IiwiY2FuUmVjZWl2ZVJlZiIsIndyYXBwZWRDb21wb25lbnQiLCJ0eXBlIiwiaXNSZWFjdDE5UGx1cyIsInZlcnNpb24iLCJtYWpvclZlcnNpb24iLCJwYXJzZUludCIsInNwbGl0IiwiY29tcG9uZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiaXNJbml0aWFsaXplZCIsImZsdXNoU3luYyIsInF1ZXVlTWljcm90YXNrIiwiaXNSZWFjdDE5IiwiY29tcG9uZW50Q2FuUmVjZWl2ZVJlZiIsImVsZW1lbnRQcm9wcyIsInVwZGF0ZVByb3BzIiwidXBkYXRlQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJtYXJrVmlld0NvbnRlbnRSZWYiLCJNYXJrVmlldyIsImRpZE1vdW50Q29udGVudERvbUVsZW1lbnQiLCJhdHRycyIsImNvbXBvbmVudFByb3BzIiwiY29udGVudERPTUVsZW1lbnQiLCJlbCIsImFwcGVuZENoaWxkIiwiY29udGV4dCIsIlJlYWN0TWFya1ZpZXdQcm92aWRlciIsImNvbXBvbmVudFByb3BzMiIsImRpc3BsYXlOYW1lIiwibWFyayIsIm5hbWUiLCJ0cmltIiwiZG9tIiwiY29udGVudERPTSIsIk5vZGVWaWV3IiwiaXNMZWFmIiwiY29udGVudERPTUVsZW1lbnRUYWciLCJpc0lubGluZSIsImRhdGFzZXQiLCJub2RlVmlld0NvbnRlbnRSZWFjdCIsIm5vZGVWaWV3V3JhcHBlciIsImNvbnRlbnRUYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwibW91bnQiLCJkZWNvcmF0aW9ucyIsImlubmVyRGVjb3JhdGlvbnMiLCJzZWxlY3RlZCIsIkhUTUxBdHRyaWJ1dGVzIiwiZ2V0UG9zIiwiZGVsZXRlTm9kZSIsImNhcGl0YWxpemVGaXJzdENoYXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsImhhc0F0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlJlYWN0Tm9kZVZpZXdQcm92aWRlciIsImhhbmRsZVNlbGVjdGlvblVwZGF0ZSIsInVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGVzIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmcm9tIiwidG8iLCJzZWxlY3Rpb24iLCJwb3MiLCJub2RlU2l6ZSIsInNlbGVjdE5vZGUiLCJkZXNlbGVjdE5vZGUiLCJ1cGRhdGUiLCJyZXJlbmRlckNvbXBvbmVudCIsIm9sZE5vZGUiLCJvbGREZWNvcmF0aW9ucyIsIm9sZElubmVyRGVjb3JhdGlvbnMiLCJuZXdOb2RlIiwibmV3RGVjb3JhdGlvbnMiLCJyZW1vdmUiLCJhdHRyc09iaiIsImV4dGVuc2lvbkF0dHJpYnV0ZXMiLCJleHRlbnNpb25NYW5hZ2VyIiwiZ2V0UmVuZGVyZWRBdHRyaWJ1dGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGFBQUEsR0FBQUMsVUFBQTtFQUFBLDJDQUFBQyxDQUFBQyxPQUFBLEVBQUFDLE9BQUE7SUFBQTs7SUFLRSxJQUFJQyxtQkFBQSxHQUFzQixPQUFPQyxhQUFBLEtBQWtCO0lBR3JERixPQUFBLENBQU9ELE9BQUEsR0FBVSxTQUFTSSxNQUFNQyxDQUFBLEVBQUdDLENBQUEsRUFBRztNQUNwQyxJQUFJRCxDQUFBLEtBQU1DLENBQUEsRUFBRyxPQUFPO01BRXBCLElBQUlELENBQUEsSUFBS0MsQ0FBQSxJQUFLLE9BQU9ELENBQUEsSUFBSyxZQUFZLE9BQU9DLENBQUEsSUFBSyxVQUFVO1FBQzFELElBQUlELENBQUEsQ0FBRUUsV0FBQSxLQUFnQkQsQ0FBQSxDQUFFQyxXQUFBLEVBQWEsT0FBTztRQUU1QyxJQUFJQyxNQUFBLEVBQVFDLENBQUEsRUFBR0MsSUFBQTtRQUNmLElBQUlDLEtBQUEsQ0FBTUMsT0FBQSxDQUFRUCxDQUFDLEdBQUc7VUFDcEJHLE1BQUEsR0FBU0gsQ0FBQSxDQUFFRyxNQUFBO1VBQ1gsSUFBSUEsTUFBQSxJQUFVRixDQUFBLENBQUVFLE1BQUEsRUFBUSxPQUFPO1VBQy9CLEtBQUtDLENBQUEsR0FBSUQsTUFBQSxFQUFRQyxDQUFBLE9BQVEsSUFDdkIsSUFBSSxDQUFDTCxLQUFBLENBQU1DLENBQUEsQ0FBRUksQ0FBQyxHQUFHSCxDQUFBLENBQUVHLENB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UTJKLEtBQUEsS0FBVSxZQUFZO1FBQzVDLE1BQU15RCxtQkFBQSxHQUFzQixLQUFLek4sTUFBQSxDQUFPME4sZ0JBQUEsQ0FBaUIvRCxVQUFBO1FBQ3pELE1BQU1nQyxjQUFBLE9BQWlCek8sWUFBQSxDQUFBeVEscUJBQUEsRUFBc0IsS0FBS2xRLElBQUEsRUFBTWdRLG1CQUFtQjtRQUUzRUQsUUFBQSxHQUFXLEtBQUtuTixPQUFBLENBQVEySixLQUFBLENBQU07VUFBRXZNLElBQUEsRUFBTSxLQUFLQSxJQUFBO1VBQU1rTztRQUFlLENBQUM7TUFDbkUsT0FBTztRQUNMNkIsUUFBQSxHQUFXLEtBQUtuTixPQUFBLENBQVEySixLQUFBO01BQzFCO01BRUEsS0FBS2pMLFFBQUEsQ0FBUzJLLGdCQUFBLENBQWlCOEQsUUFBUTtJQUN6QztFQUNGO0FBQ0Y7QUFLTyxTQUFTdFMsc0JBQ2Q4TixTQUFBLEVBQ0EzSSxPQUFBLEVBQ2tCO0VBQ2xCLE9BQU9iLEtBQUEsSUFBUztJQUlkLElBQUksQ0FBRUEsS0FBQSxDQUFNUSxNQUFBLENBQXNDbEMsZ0JBQUEsRUFBa0I7TUFDbEUsT0FBTyxDQUFDO0lBQ1Y7SUFFQSxPQUFPLElBQUkvQyxhQUFBLENBQWlCaU8sU0FBQSxFQUFXeEosS0FBQSxFQUFPYSxPQUFPO0VBQ3ZEO0FBQ0Y7OztBVnZWQWhELFVBQUEsQ0FBQW5ELG1CQUFBLEVBQWNvRCxZQUFBLEVBQWQ5QixNQUFBLENBQUF0RCxPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==