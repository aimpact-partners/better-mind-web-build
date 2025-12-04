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

// .beyond/uimport/@tiptap/react.3.2.0.js
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

// .beyond/uimport/@tiptap/react.3.2.0.js
__reExport(react_3_2_0_exports, dist_exports, module.exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvZXM2L3JlYWN0LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L0B0aXB0YXAvcmVhY3QuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvQ29udGV4dC50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvRWRpdG9yQ29udGVudC50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvdXNlRWRpdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL3VzZUVkaXRvclN0YXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL3VzZVJlYWN0Tm9kZVZpZXcudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvTm9kZVZpZXdDb250ZW50LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9Ob2RlVmlld1dyYXBwZXIudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvcmVhY3Qvc3JjL1JlYWN0TWFya1ZpZXdSZW5kZXJlci50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvUmVhY3RSZW5kZXJlci50c3giLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9yZWFjdC9zcmMvUmVhY3ROb2RlVmlld1JlbmRlcmVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL3JlYWN0L3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJyZXF1aXJlX3JlYWN0IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9mYXN0LWRlZXAtZXF1YWwvZXM2L3JlYWN0LmpzIiwiZXhwb3J0cyIsIm1vZHVsZTIiLCJlbnZIYXNCaWdJbnQ2NEFycmF5IiwiQmlnSW50NjRBcnJheSIsImVxdWFsIiwiYSIsImIiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsImkiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwiTWFwIiwic2l6ZSIsImVudHJpZXMiLCJoYXMiLCJnZXQiLCJTZXQiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIlJlZ0V4cCIsInNvdXJjZSIsImZsYWdzIiwidmFsdWVPZiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwia2V5IiwiJCR0eXBlb2YiLCJyZWFjdF8zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJFZGl0b3JDb25zdW1lciIsIkVkaXRvckNvbnRlbnQiLCJFZGl0b3JDb250ZXh0IiwiRWRpdG9yUHJvdmlkZXIiLCJNYXJrVmlld0NvbnRlbnQiLCJOb2RlVmlld0NvbnRlbnQiLCJOb2RlVmlld1dyYXBwZXIiLCJQdXJlRWRpdG9yQ29udGVudCIsIlJlYWN0TWFya1ZpZXciLCJSZWFjdE1hcmtWaWV3Q29udGV4dCIsIlJlYWN0TWFya1ZpZXdSZW5kZXJlciIsIlJlYWN0Tm9kZVZpZXciLCJSZWFjdE5vZGVWaWV3Q29udGVudFByb3ZpZGVyIiwiUmVhY3ROb2RlVmlld0NvbnRleHQiLCJSZWFjdE5vZGVWaWV3UmVuZGVyZXIiLCJSZWFjdFJlbmRlcmVyIiwidXNlQ3VycmVudEVkaXRvciIsInVzZUVkaXRvciIsInVzZUVkaXRvclN0YXRlIiwidXNlUmVhY3ROb2RlVmlldyIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yZWFjdCIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3QyIiwiX190b0VTTSIsImltcG9ydF9yZWFjdF9kb20iLCJpbXBvcnRfc2hpbSIsImltcG9ydF9qc3hfcnVudGltZSIsImltcG9ydF9jb3JlIiwiaW1wb3J0X3JlYWN0MyIsImltcG9ydF9zaGltMiIsImltcG9ydF9yZWFjdDQiLCJpbXBvcnRfcmVhY3Q1IiwiaW1wb3J0X3dpdGhfc2VsZWN0b3IiLCJpbXBvcnRfanN4X3J1bnRpbWUyIiwiaW1wb3J0X3JlYWN0NiIsImltcG9ydF9qc3hfcnVudGltZTMiLCJpbXBvcnRfcmVhY3Q3IiwiaW1wb3J0X2pzeF9ydW50aW1lNCIsImltcG9ydF9jb3JlMiIsImltcG9ydF9yZWFjdDgiLCJpbXBvcnRfcmVhY3Q5IiwiaW1wb3J0X3JlYWN0X2RvbTIiLCJpbXBvcnRfanN4X3J1bnRpbWU1IiwiaW1wb3J0X2pzeF9ydW50aW1lNiIsImltcG9ydF9jb3JlMyIsImltcG9ydF9yZWFjdDEwIiwiaW1wb3J0X2pzeF9ydW50aW1lNyIsIl9fcmVFeHBvcnQiLCJkaXN0X2V4cG9ydHMiLCJtZXJnZVJlZnMiLCJyZWZzIiwibm9kZSIsImZvckVhY2giLCJyZWYiLCJjdXJyZW50IiwiUG9ydGFscyIsImNvbnRlbnRDb21wb25lbnQiLCJyZW5kZXJlcnMiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsInN1YnNjcmliZSIsImdldFNuYXBzaG90IiwiZ2V0U2VydmVyU25hcHNob3QiLCJqc3giLCJGcmFnbWVudCIsImNoaWxkcmVuIiwidmFsdWVzIiwiZ2V0SW5zdGFuY2UiLCJzdWJzY3JpYmVycyIsImNhbGxiYWNrIiwiYWRkIiwiZGVsZXRlIiwic2V0UmVuZGVyZXIiLCJpZCIsInJlbmRlcmVyIiwiZGVmYXVsdCIsImNyZWF0ZVBvcnRhbCIsInJlYWN0RWxlbWVudCIsImVsZW1lbnQiLCJzdWJzY3JpYmVyIiwicmVtb3ZlUmVuZGVyZXIiLCJuZXh0UmVuZGVyZXJzIiwiQ29tcG9uZW50IiwicHJvcHMiLCJfYSIsImVkaXRvckNvbnRlbnRSZWYiLCJjcmVhdGVSZWYiLCJpbml0aWFsaXplZCIsInN0YXRlIiwiaGFzQ29udGVudENvbXBvbmVudEluaXRpYWxpemVkIiwiQm9vbGVhbiIsImVkaXRvciIsImNvbXBvbmVudERpZE1vdW50IiwiaW5pdCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImlzRGVzdHJveWVkIiwib3B0aW9ucyIsImFwcGVuZCIsImNoaWxkTm9kZXMiLCJzZXRPcHRpb25zIiwidW5zdWJzY3JpYmVUb0NvbnRlbnRDb21wb25lbnQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImNyZWF0ZU5vZGVWaWV3cyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwidmlldyIsInNldFByb3BzIiwibm9kZVZpZXdzIiwiZmlyc3RDaGlsZCIsIm5ld0VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCJpbm5lclJlZiIsInJlc3QiLCJqc3hzIiwiRWRpdG9yQ29udGVudFdpdGhLZXkiLCJmb3J3YXJkUmVmIiwidXNlTWVtbyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1lbW8iLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0Iiwid2luZG93IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiRWRpdG9yU3RhdGVNYW5hZ2VyIiwiaW5pdGlhbEVkaXRvciIsInRyYW5zYWN0aW9uTnVtYmVyIiwibGFzdFRyYW5zYWN0aW9uTnVtYmVyIiwibGFzdFNuYXBzaG90IiwiYmluZCIsIndhdGNoIiwibmV4dEVkaXRvciIsImZuIiwiY3VycmVudEVkaXRvciIsIm9uIiwib2ZmIiwiZWRpdG9yU3RhdGVNYW5hZ2VyIiwidXNlU3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwidXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IiLCJzZWxlY3RvciIsImVxdWFsaXR5Rm4iLCJ1c2VEZWJ1Z1ZhbHVlIiwiaXNEZXYiLCJpc1NTUiIsImlzTmV4dCIsIm5leHQiLCJFZGl0b3JJbnN0YW5jZU1hbmFnZXIiLCJfRWRpdG9ySW5zdGFuY2VNYW5hZ2VyIiwic3Vic2NyaXB0aW9ucyIsImlzQ29tcG9uZW50TW91bnRlZCIsInByZXZpb3VzRGVwcyIsImluc3RhbmNlSWQiLCJzZXRFZGl0b3IiLCJnZXRJbml0aWFsRWRpdG9yIiwic2NoZWR1bGVEZXN0cm95IiwiZ2V0RWRpdG9yIiwicmVmcmVzaEVkaXRvckluc3RhbmNlIiwib25SZW5kZXIiLCJjcmVhdGVFZGl0b3IiLCJzbGljZSIsImNiIiwiaW1tZWRpYXRlbHlSZW5kZXIiLCJFcnJvciIsIm9wdGlvbnNUb0FwcGx5Iiwib25CZWZvcmVDcmVhdGUiLCJhcmdzIiwiX2IiLCJvbkJsdXIiLCJvbkNyZWF0ZSIsIm9uRGVzdHJveSIsIm9uRm9jdXMiLCJvblNlbGVjdGlvblVwZGF0ZSIsIm9uVHJhbnNhY3Rpb24iLCJvblVwZGF0ZSIsIm9uQ29udGVudEVycm9yIiwib25Ecm9wIiwib25QYXN0ZSIsIm9uRGVsZXRlIiwiRWRpdG9yIiwib25TdG9yZUNoYW5nZSIsImNvbXBhcmVPcHRpb25zIiwiZXZlcnkiLCJpbmNsdWRlcyIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJpbmRleCIsImRlcHMiLCJjbGVhclRpbWVvdXQiLCJzY2hlZHVsZWREZXN0cnVjdGlvblRpbWVvdXQiLCJlZGl0YWJsZSIsImlzRWRpdGFibGUiLCJkZXBzQXJlRXF1YWwiLCJkZXAiLCJkZXN0cm95IiwiY3VycmVudEluc3RhbmNlSWQiLCJzZXRUaW1lb3V0IiwibW9zdFJlY2VudE9wdGlvbnMiLCJ1c2VSZWYiLCJpbnN0YW5jZU1hbmFnZXIiLCJzaG91bGRSZXJlbmRlck9uVHJhbnNhY3Rpb24iLCJjcmVhdGVDb250ZXh0IiwiQ29uc3VtZXIiLCJ1c2VDb250ZXh0Iiwic2xvdEFmdGVyIiwic2xvdEJlZm9yZSIsImVkaXRvckNvbnRhaW5lclByb3BzIiwiZWRpdG9yT3B0aW9ucyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJvbkRyYWdTdGFydCIsIm5vZGVWaWV3Q29udGVudENoaWxkcmVuIiwibm9kZVZpZXdDb250ZW50UmVmIiwiY29udGVudCIsImFzIiwiVGFnIiwic3R5bGUiLCJ3aGl0ZVNwYWNlIiwiaXNDbGFzc0NvbXBvbmVudCIsImlzUmVhY3RDb21wb25lbnQiLCJpc0ZvcndhcmRSZWZDb21wb25lbnQiLCJkZXNjcmlwdGlvbiIsImlzTWVtb0NvbXBvbmVudCIsImNhblJlY2VpdmVSZWYiLCJ3cmFwcGVkQ29tcG9uZW50IiwidHlwZSIsImlzUmVhY3QxOVBsdXMiLCJ2ZXJzaW9uIiwibWFqb3JWZXJzaW9uIiwicGFyc2VJbnQiLCJzcGxpdCIsImNvbXBvbmVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImlzSW5pdGlhbGl6ZWQiLCJmbHVzaFN5bmMiLCJxdWV1ZU1pY3JvdGFzayIsImlzUmVhY3QxOSIsImNvbXBvbmVudENhblJlY2VpdmVSZWYiLCJlbGVtZW50UHJvcHMiLCJ1cGRhdGVQcm9wcyIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwibWFya1ZpZXdDb250ZW50UmVmIiwiTWFya1ZpZXciLCJkaWRNb3VudENvbnRlbnREb21FbGVtZW50IiwiYXR0cnMiLCJjb21wb25lbnRQcm9wcyIsImNvbnRlbnRET01FbGVtZW50IiwiZWwiLCJhcHBlbmRDaGlsZCIsImNvbnRleHQiLCJSZWFjdE1hcmtWaWV3UHJvdmlkZXIiLCJjb21wb25lbnRQcm9wczIiLCJkaXNwbGF5TmFtZSIsIm1hcmsiLCJuYW1lIiwidHJpbSIsImRvbSIsImNvbnRlbnRET00iLCJOb2RlVmlldyIsImlzTGVhZiIsImNvbnRlbnRET01FbGVtZW50VGFnIiwiaXNJbmxpbmUiLCJkYXRhc2V0Iiwibm9kZVZpZXdDb250ZW50UmVhY3QiLCJub2RlVmlld1dyYXBwZXIiLCJjb250ZW50VGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsIm1vdW50IiwiZGVjb3JhdGlvbnMiLCJpbm5lckRlY29yYXRpb25zIiwic2VsZWN0ZWQiLCJIVE1MQXR0cmlidXRlcyIsImdldFBvcyIsImRlbGV0ZU5vZGUiLCJjYXBpdGFsaXplRmlyc3RDaGFyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJoYXNBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJSZWFjdE5vZGVWaWV3UHJvdmlkZXIiLCJoYW5kbGVTZWxlY3Rpb25VcGRhdGUiLCJ1cGRhdGVFbGVtZW50QXR0cmlidXRlcyIsImZpcnN0RWxlbWVudENoaWxkIiwiZnJvbSIsInRvIiwic2VsZWN0aW9uIiwicG9zIiwibm9kZVNpemUiLCJzZWxlY3ROb2RlIiwiZGVzZWxlY3ROb2RlIiwidXBkYXRlIiwicmVyZW5kZXJDb21wb25lbnQiLCJvbGROb2RlIiwib2xkRGVjb3JhdGlvbnMiLCJvbGRJbm5lckRlY29yYXRpb25zIiwibmV3Tm9kZSIsIm5ld0RlY29yYXRpb25zIiwicmVtb3ZlIiwiYXR0cnNPYmoiLCJleHRlbnNpb25BdHRyaWJ1dGVzIiwiZXh0ZW5zaW9uTWFuYWdlciIsImdldFJlbmRlcmVkQXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBLEdBQUFDLFVBQUE7RUFBQSwyQ0FBQUMsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBO0lBQUE7O0lBS0UsSUFBSUMsbUJBQUEsR0FBc0IsT0FBT0MsYUFBQSxLQUFrQjtJQUdyREYsT0FBQSxDQUFPRCxPQUFBLEdBQVUsU0FBU0ksTUFBTUMsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7TUFDcEMsSUFBSUQsQ0FBQSxLQUFNQyxDQUFBLEVBQUcsT0FBTztNQUVwQixJQUFJRCxDQUFBLElBQUtDLENBQUEsSUFBSyxPQUFPRCxDQUFBLElBQUssWUFBWSxPQUFPQyxDQUFBLElBQUssVUFBVTtRQUMxRCxJQUFJRCxDQUFBLENBQUVFLFdBQUEsS0FBZ0JELENBQUEsQ0FBRUMsV0FBQSxFQUFhLE9BQU87UUFFNUMsSUFBSUMsTUFBQSxFQUFRQyxDQUFBLEVBQUdDLElBQUE7UUFDZixJQUFJQyxLQUFBLENBQU1DLE9BQUEsQ0FBUVAsQ0FBQyxHQUFHO1VBQ3BCRyxNQUFBLEdBQVNILENBQUEsQ0FBRUcsTUFBQTtVQUNYLElBQUlBLE1BQUEsSUFBVUYsQ0FBQSxDQUFFRSxNQUFBLEVBQVEsT0FBTztVQUMvQixLQUFLQyxDQUFBLEdBQUlELE1BQUEsRUFBUUMsQ0FBQSxPQUFRLElBQ3ZCLElBQUksQ0FBQ0wsS0FBQSxDQUFNQyxDQUFBLENBQUVJLENBQUMsR0FBR0gsQ0FBQSxDQUFFRyxDQUFDLENB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QUFBLEtBQVUsWUFBWTtRQUM1QyxNQUFNeUQsbUJBQUEsR0FBc0IsS0FBS3pOLE1BQUEsQ0FBTzBOLGdCQUFBLENBQWlCL0QsVUFBQTtRQUN6RCxNQUFNZ0MsY0FBQSxPQUFpQnpPLFlBQUEsQ0FBQXlRLHFCQUFBLEVBQXNCLEtBQUtsUSxJQUFBLEVBQU1nUSxtQkFBbUI7UUFFM0VELFFBQUEsR0FBVyxLQUFLbk4sT0FBQSxDQUFRMkosS0FBQSxDQUFNO1VBQUV2TSxJQUFBLEVBQU0sS0FBS0EsSUFBQTtVQUFNa087UUFBZSxDQUFDO01BQ25FLE9BQU87UUFDTDZCLFFBQUEsR0FBVyxLQUFLbk4sT0FBQSxDQUFRMkosS0FBQTtNQUMxQjtNQUVBLEtBQUtqTCxRQUFBLENBQVMySyxnQkFBQSxDQUFpQjhELFFBQVE7SUFDekM7RUFDRjtBQUNGO0FBS08sU0FBU3RTLHNCQUNkOE4sU0FBQSxFQUNBM0ksT0FBQSxFQUNrQjtFQUNsQixPQUFPYixLQUFBLElBQVM7SUFJZCxJQUFJLENBQUVBLEtBQUEsQ0FBTVEsTUFBQSxDQUFzQ2xDLGdCQUFBLEVBQWtCO01BQ2xFLE9BQU8sQ0FBQztJQUNWO0lBRUEsT0FBTyxJQUFJL0MsYUFBQSxDQUFpQmlPLFNBQUEsRUFBV3hKLEtBQUEsRUFBT2EsT0FBTztFQUN2RDtBQUNGOzs7QVZ2VkFoRCxVQUFBLENBQUFuRCxtQkFBQSxFQUFjb0QsWUFBQSxFQUFkOUIsTUFBQSxDQUFBdEQsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=