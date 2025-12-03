System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["react-simple-wysiwyg","3.4.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep)],
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

// .beyond/uimport/temp/react-simple-wysiwyg.3.4.1.js
var react_simple_wysiwyg_3_4_1_exports = {};
__export(react_simple_wysiwyg_3_4_1_exports, {
  BtnBold: () => BtnBold,
  BtnBulletList: () => BtnBulletList,
  BtnClearFormatting: () => BtnClearFormatting,
  BtnItalic: () => BtnItalic,
  BtnLink: () => BtnLink,
  BtnNumberedList: () => BtnNumberedList,
  BtnRedo: () => BtnRedo,
  BtnStrikeThrough: () => BtnStrikeThrough,
  BtnStyles: () => BtnStyles,
  BtnUnderline: () => BtnUnderline,
  BtnUndo: () => BtnUndo,
  ContentEditable: () => ContentEditable,
  DefaultEditor: () => DefaultEditor,
  Dropdown: () => Dropdown,
  Editor: () => Editor,
  EditorContext: () => EditorContext,
  EditorProvider: () => EditorProvider,
  HtmlButton: () => HtmlButton,
  Separator: () => Separator,
  Toolbar: () => Toolbar,
  createButton: () => createButton,
  createDropdown: () => createDropdown,
  default: () => react_simple_wysiwyg_3_4_1_default,
  useEditorState: () => useEditorState
});
module.exports = __toCommonJS(react_simple_wysiwyg_3_4_1_exports);

// node_modules/react-simple-wysiwyg/lib/index.es.mjs
var import_react = __toESM(require("react@18.3.1"), 0);
var __assign = function () {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e2) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0) t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t2[p[i]] = s[p[i]];
  }
  return t2;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
function autoconfigureTextDirection(el) {
  if (el) {
    var text = el.textContent;
    var rtlPattern = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
    el.style.direction = text && rtlPattern.test(text[0]) ? "rtl" : "ltr";
  }
}
function cls() {
  var classNames = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    classNames[_i] = arguments[_i];
  }
  return classNames.filter(Boolean).join(" ");
}
function getSelectedNode() {
  if (document.selection) {
    return document.selection.createRange().parentElement();
  }
  var selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    return selection.getRangeAt(0).startContainer.parentNode || void 0;
  }
  return void 0;
}
function normalizeHtml(str) {
  return typeof str === "string" ? str.replace(/&nbsp;|\u202F|\u00A0/g, " ").replace(/<br \/>/g, "<br>") : String(str);
}
function replaceCaret(el) {
  var target = document.createTextNode("");
  el.appendChild(target);
  var isTargetFocused = document.activeElement === el;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    var sel = window.getSelection();
    if (sel !== null) {
      var range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (el instanceof HTMLElement) el.focus();
  }
}
function setForwardRef(el, ref) {
  if (typeof ref === "function") {
    ref(el);
  } else if (typeof ref === "object" && ref) {
    ref.current = el;
  }
}
var ContentEditable = import_react.default.memo(import_react.default.forwardRef(function ContentEditable2(_a, ref) {
  var className = _a.className,
    disabled = _a.disabled,
    tagName = _a.tagName,
    _b = _a.value,
    value = _b === void 0 ? "" : _b,
    placeholder = _a.placeholder,
    rest = __rest(_a, ["className", "disabled", "tagName", "value", "placeholder"]);
  var elRef = import_react.default.useRef(null);
  var htmlRef = import_react.default.useRef(value);
  var restRef = import_react.default.useRef(rest);
  import_react.default.useEffect(function () {
    restRef.current = rest;
    var el = elRef.current;
    if (el && normalizeHtml(htmlRef.current) !== normalizeHtml(value)) {
      htmlRef.current = value;
      el.innerHTML = value;
      replaceCaret(el);
    }
  });
  return import_react.default.useMemo(function () {
    function onSetRef($el) {
      elRef.current = $el;
      autoconfigureTextDirection($el);
      setForwardRef($el, ref);
    }
    function onChange(event) {
      var _a2, _b2;
      var el = elRef.current;
      if (!el) {
        return;
      }
      var elementHtml = el.innerHTML;
      if (elementHtml !== htmlRef.current) {
        (_b2 = (_a2 = restRef.current).onChange) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, __assign(__assign({}, event), {
          target: {
            value: elementHtml,
            name: rest.name
          }
        }));
      }
      autoconfigureTextDirection(el);
      htmlRef.current = elementHtml;
    }
    var cssClass = cls("rsw-ce", className);
    return import_react.default.createElement(tagName || "div", __assign(__assign({}, rest), {
      className: cssClass,
      contentEditable: !disabled,
      dangerouslySetInnerHTML: {
        __html: value
      },
      onBlur: function (e2) {
        return (restRef.current.onBlur || onChange)(e2);
      },
      onInput: onChange,
      onKeyDown: function (e2) {
        return (restRef.current.onKeyDown || onChange)(e2);
      },
      onKeyUp: function (e2) {
        return (restRef.current.onKeyUp || onChange)(e2);
      },
      placeholder,
      ref: onSetRef
    }));
  }, [className, disabled, placeholder, tagName]);
}));
var EditorContext = import_react.default.createContext(void 0);
function EditorProvider(_a) {
  var children = _a.children;
  var _b = import_react.default.useState({
      htmlMode: false,
      update
    }),
    state = _b[0],
    setState = _b[1];
  function update(attrs) {
    setState(function (prevState) {
      return __assign(__assign({}, prevState), attrs);
    });
  }
  return import_react.default.createElement(EditorContext.Provider, {
    value: state
  }, children);
}
function useEditorState() {
  var context = import_react.default.useContext(EditorContext);
  if (!context) {
    throw new Error("You should wrap your component by EditorProvider");
  }
  return context;
}
var e = [],
  t = [];
function n(n2, r) {
  if (n2 && "undefined" != typeof document) {
    var a,
      s = true === r.prepend ? "prepend" : "append",
      d = true === r.singleTag,
      i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];
    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();
    65279 === n2.charCodeAt(0) && (n2 = n2.substring(1)), a.styleSheet ? a.styleSheet.cssText += n2 : a.appendChild(document.createTextNode(n2));
  }
  function c() {
    var e2 = document.createElement("style");
    if (e2.setAttribute("type", "text/css"), r.attributes) for (var t2 = Object.keys(r.attributes), n3 = 0; n3 < t2.length; n3++) e2.setAttribute(t2[n3], r.attributes[t2[n3]]);
    var a2 = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a2, e2), e2;
  }
}
var css = ".rsw-editor{border:1px solid #ddd;border-radius:.375rem;display:flex;flex-direction:column;min-height:100px;overflow:hidden}.rsw-ce{flex:1 1 auto;overflow:auto;padding:.5rem}.rsw-ce:focus{outline:1px solid #668}.rsw-ce[contentEditable=true]:empty:not(:focus):before{color:grey;content:attr(placeholder);pointer-events:none}.rsw-html{background:transparent;border:none;font-family:monospace,Courier New}.rsw-separator{align-self:stretch;border-right:1px solid #ddd;display:flex;margin:0 3px}.rsw-dd{box-sizing:border-box;outline:none}.rsw-btn{background:transparent;border:0;color:#222;cursor:pointer;font-size:1em;height:2em;outline:none;padding:0;width:2em}.rsw-btn:hover{background:#eaeaea}.rsw-btn[data-active=true]{background:#e0e0e0}.rsw-toolbar{align-items:center;background-color:#f5f5f5;border-bottom:1px solid #ddd;display:flex}";
n(css, {});
var Editor = import_react.default.forwardRef(function Editor2(_a, ref) {
  var autoFocus = _a.autoFocus,
    children = _a.children,
    containerProps = _a.containerProps,
    onSelect = _a.onSelect,
    rest = __rest(_a, ["autoFocus", "children", "containerProps", "onSelect"]);
  var editorState = useEditorState();
  import_react.default.useEffect(function () {
    document.addEventListener("click", onClickOutside);
    return function () {
      return document.removeEventListener("click", onClickOutside);
    };
  });
  function onClickOutside(event) {
    var _a2;
    if (event.target === editorState.$el) {
      return;
    }
    if ((_a2 = editorState.$el) === null || _a2 === void 0 ? void 0 : _a2.contains(event.target)) {
      return;
    }
    editorState.update({
      $selection: void 0
    });
  }
  function onTextSelect(event) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(event);
    editorState.update({
      $selection: getSelectedNode()
    });
  }
  function setContentEditableRef($el) {
    editorState.update({
      $el
    });
    setForwardRef($el, ref);
    if (autoFocus && $el && editorState.$el === void 0) {
      $el.focus();
    }
  }
  var cssClass = cls("rsw-editor", containerProps === null || containerProps === void 0 ? void 0 : containerProps.className);
  if (editorState.htmlMode) {
    return import_react.default.createElement("div", __assign({}, containerProps, {
      className: cssClass
    }), children, import_react.default.createElement("textarea", __assign({}, rest, {
      className: "rsw-ce rsw-html"
    })));
  }
  return import_react.default.createElement("div", __assign({}, containerProps, {
    className: cssClass
  }), children, import_react.default.createElement(ContentEditable, __assign({}, rest, {
    ref: setContentEditableRef,
    onSelect: onTextSelect
  })));
});
function OrderedListIcon() {
  return import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    style: {
      verticalAlign: "text-top"
    }
  }, import_react.default.createElement("path", {
    fill: "currentColor",
    d: "M6.99938 12.998v-2H20.9994v2H6.99938zm0 6.0001v-2H20.9994v2H6.99938zm0-12.00001v-2H20.9994v2H6.99938zm-4 1v-3h-1v-1h2v4h-1zm-1 9.00001v-1h3v4h-3v-1h2v-.5h-1v-1h1v-.5h-2zM4.25 10c.41421 0 .75.3358.75.75 0 .2024-.08017.3861-.2105.521L3.11983 13H5v1H2v-.9218L4 11H2v-1h2.25z"
  }));
}
function UnorderedListIcon() {
  return import_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    style: {
      verticalAlign: "text-top"
    }
  }, import_react.default.createElement("path", {
    fill: "currentColor",
    d: "M7 5h14v2H7V5zm0 8v-2h14v2H7zM4 4.50001c.83 0 1.5.66992 1.5 1.5 0 .83007-.67 1.5-1.5 1.5s-1.5-.66993-1.5-1.5c0-.83008.67-1.5 1.5-1.5zM4 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM7 19v-2h14v2H7zm-3-2.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
  }));
}
var BtnBold = createButton("Bold", "\u{1D401}", "bold");
var BtnBulletList = createButton("Bullet list", import_react.default.createElement(UnorderedListIcon, null), "insertUnorderedList");
var BtnClearFormatting = createButton("Clear formatting", "T\u0332\u2093", "removeFormat");
var BtnItalic = createButton("Italic", "\u{1D470}", "italic");
var BtnStrikeThrough = createButton("Strike through", import_react.default.createElement("s", null, "ab"), "strikeThrough");
var BtnLink = createButton("Link", "\u{1F517}", function (_a) {
  var $selection = _a.$selection;
  if (($selection === null || $selection === void 0 ? void 0 : $selection.nodeName) === "A") {
    document.execCommand("unlink");
  } else {
    document.execCommand("createLink", false, prompt("URL", "") || void 0);
  }
});
var BtnNumberedList = createButton("Numbered list", import_react.default.createElement(OrderedListIcon, null), "insertOrderedList");
var BtnRedo = createButton("Redo", "\u21B7", "redo");
var BtnUnderline = createButton("Underline", import_react.default.createElement("span", {
  style: {
    textDecoration: "underline"
  }
}, "\u{1D414}"), "underline");
var BtnUndo = createButton("Undo", "\u21B6", "undo");
function createButton(title, content, command) {
  ButtonFactory.displayName = title.replace(/\s/g, "");
  return ButtonFactory;
  function ButtonFactory(props) {
    var editorState = useEditorState();
    var $el = editorState.$el;
    var isElFocused = function () {
      return Boolean($el === null || $el === void 0 ? void 0 : $el.contains(document.activeElement));
    };
    var active = false;
    if (typeof command === "string") {
      active = isElFocused() && document.queryCommandState(command);
    }
    function onAction(e2) {
      e2.preventDefault();
      if (!isElFocused()) {
        $el === null || $el === void 0 ? void 0 : $el.focus();
      }
      if (typeof command === "function") {
        command(editorState);
      } else {
        document.execCommand(command);
      }
    }
    if (editorState.htmlMode) {
      return null;
    }
    return import_react.default.createElement("button", __assign({
      className: "rsw-btn",
      "data-active": active,
      onMouseDown: onAction,
      tabIndex: -1,
      title,
      type: "button"
    }, props), content);
  }
}
var BtnStyles = createDropdown("Styles", [["Normal", "formatBlock", "DIV"], ["\u{1D5DB}\u{1D5F2}\u{1D5EE}\u{1D5F1}\u{1D5F2}\u{1D5FF} \u{1D7ED}", "formatBlock", "H1"], ["Header 2", "formatBlock", "H2"], ["\u{1D672}\u{1D698}\u{1D68D}\u{1D68E}", "formatBlock", "PRE"]]);
function createDropdown(title, items) {
  DropdownFactory.displayName = title;
  return DropdownFactory;
  function DropdownFactory(props) {
    var editorState = useEditorState();
    var $el = editorState.$el,
      $selection = editorState.$selection,
      htmlMode = editorState.htmlMode;
    if (htmlMode) {
      return null;
    }
    var activeIndex = items.findIndex(function (item) {
      return item[1] === "formatBlock" && ($selection === null || $selection === void 0 ? void 0 : $selection.nodeName) === item[2];
    });
    return import_react.default.createElement(Dropdown, __assign({}, props, {
      items,
      onChange,
      selected: activeIndex,
      tabIndex: -1,
      title
    }));
    function onChange(e2) {
      var target = e2.target;
      var selectedValue = target.value;
      var selectedIndex = parseInt(selectedValue, 10);
      var _a = items[selectedIndex] || [],
        command = _a[1],
        commandArgument = _a[2];
      e2.preventDefault();
      if (document.activeElement !== $el) {
        $el === null || $el === void 0 ? void 0 : $el.focus();
      }
      if (typeof command === "function") {
        command(editorState);
      } else if (command) {
        document.execCommand(command, false, commandArgument);
      }
      setTimeout(function () {
        return target.value = selectedValue;
      }, 10);
    }
  }
}
function Dropdown(_a) {
  var items = _a.items,
    selected = _a.selected,
    inputProps = __rest(_a, ["items", "selected"]);
  return import_react.default.createElement("select", __assign({
    className: "rsw-dd"
  }, inputProps, {
    value: selected
  }), import_react.default.createElement("option", {
    hidden: true
  }, inputProps.title), items.map(function (item, index) {
    return import_react.default.createElement("option", {
      key: item[2],
      value: index
    }, item[0]);
  }));
}
function HtmlButton(_a) {
  var rest = __rest(_a, []);
  var editorState = useEditorState();
  function onClick() {
    editorState.update({
      htmlMode: !editorState.htmlMode
    });
  }
  return import_react.default.createElement("button", __assign({
    className: "rsw-btn",
    "data-active": editorState.htmlMode,
    onClick,
    tabIndex: -1,
    title: "HTML mode",
    type: "button"
  }, rest), "</>");
}
function Separator(props) {
  var editorState = useEditorState();
  if (editorState.htmlMode) {
    return null;
  }
  return import_react.default.createElement("div", __assign({
    className: "rsw-separator"
  }, props));
}
function Toolbar(props) {
  return import_react.default.createElement("div", __assign({
    className: "rsw-toolbar"
  }, props));
}
var DefaultEditor = import_react.default.forwardRef(function DefaultEditor2(props, ref) {
  return import_react.default.createElement(EditorProvider, null, import_react.default.createElement(Editor, __assign({}, props, {
    ref
  }), props.children || import_react.default.createElement(Toolbar, null, import_react.default.createElement(BtnUndo, null), import_react.default.createElement(BtnRedo, null), import_react.default.createElement(Separator, null), import_react.default.createElement(BtnBold, null), import_react.default.createElement(BtnItalic, null), import_react.default.createElement(BtnUnderline, null), import_react.default.createElement(BtnStrikeThrough, null), import_react.default.createElement(Separator, null), import_react.default.createElement(BtnNumberedList, null), import_react.default.createElement(BtnBulletList, null), import_react.default.createElement(Separator, null), import_react.default.createElement(BtnLink, null), import_react.default.createElement(BtnClearFormatting, null), import_react.default.createElement(HtmlButton, null), import_react.default.createElement(Separator, null), import_react.default.createElement(BtnStyles, null))));
});

// .beyond/uimport/temp/react-simple-wysiwyg.3.4.1.js
var react_simple_wysiwyg_3_4_1_default = DefaultEditor;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3JlYWN0LXNpbXBsZS13eXNpd3lnLjMuNC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbXBsZS13eXNpd3lnL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlLXd5c2l3eWcvc3JjL3V0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbXBsZS13eXNpd3lnL3NyYy9lZGl0b3IvQ29udGVudEVkaXRhYmxlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zaW1wbGUtd3lzaXd5Zy9zcmMvZWRpdG9yL0VkaXRvckNvbnRleHQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbXBsZS13eXNpd3lnL25vZGVfbW9kdWxlcy9yb2xsdXAtcGx1Z2luLXN0eWxlci9kaXN0L3J1bnRpbWUvaW5qZWN0LWNzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zaW1wbGUtd3lzaXd5Zy9zcmMvZWRpdG9yL0VkaXRvci50c3giLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlLXd5c2l3eWcvc3JjL3Rvb2xiYXIvaWNvbnMvT3JkZXJlZExpc3RJY29uLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zaW1wbGUtd3lzaXd5Zy9zcmMvdG9vbGJhci9pY29ucy9Vbm9yZGVyZWRMaXN0SWNvbi50c3giLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlLXd5c2l3eWcvc3JjL3Rvb2xiYXIvYnV0dG9ucy50c3giLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2ltcGxlLXd5c2l3eWcvc3JjL3Rvb2xiYXIvZHJvcGRvd25zLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zaW1wbGUtd3lzaXd5Zy9zcmMvdG9vbGJhci9IdG1sQnV0dG9uLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zaW1wbGUtd3lzaXd5Zy9zcmMvdG9vbGJhci9TZXBhcmF0b3IudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbXBsZS13eXNpd3lnL3NyYy90b29sYmFyL1Rvb2xiYXIudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNpbXBsZS13eXNpd3lnL3NyYy9lZGl0b3IvRGVmYXVsdEVkaXRvci50c3giXSwibmFtZXMiOlsicmVhY3Rfc2ltcGxlX3d5c2l3eWdfM180XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQnRuQm9sZCIsIkJ0bkJ1bGxldExpc3QiLCJCdG5DbGVhckZvcm1hdHRpbmciLCJCdG5JdGFsaWMiLCJCdG5MaW5rIiwiQnRuTnVtYmVyZWRMaXN0IiwiQnRuUmVkbyIsIkJ0blN0cmlrZVRocm91Z2giLCJCdG5TdHlsZXMiLCJCdG5VbmRlcmxpbmUiLCJCdG5VbmRvIiwiQ29udGVudEVkaXRhYmxlIiwiRGVmYXVsdEVkaXRvciIsIkRyb3Bkb3duIiwiRWRpdG9yIiwiRWRpdG9yQ29udGV4dCIsIkVkaXRvclByb3ZpZGVyIiwiSHRtbEJ1dHRvbiIsIlNlcGFyYXRvciIsIlRvb2xiYXIiLCJjcmVhdGVCdXR0b24iLCJjcmVhdGVEcm9wZG93biIsImRlZmF1bHQiLCJyZWFjdF9zaW1wbGVfd3lzaXd5Z18zXzRfMV9kZWZhdWx0IiwidXNlRWRpdG9yU3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJfX2Fzc2lnbjIiLCJ0MiIsInMiLCJpIiwibjIiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJfX3Jlc3QiLCJlMiIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIlN1cHByZXNzZWRFcnJvciIsImVycm9yIiwic3VwcHJlc3NlZCIsIm1lc3NhZ2UiLCJFcnJvciIsIm5hbWUiLCJhdXRvY29uZmlndXJlVGV4dERpcmVjdGlvbiIsImVsIiwidGV4dCIsInRleHRDb250ZW50IiwicnRsUGF0dGVybiIsInN0eWxlIiwiZGlyZWN0aW9uIiwidGVzdCIsImNscyIsImNsYXNzTmFtZXMiLCJfaSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZ2V0U2VsZWN0ZWROb2RlIiwiZG9jdW1lbnQiLCJzZWxlY3Rpb24iLCJjcmVhdGVSYW5nZSIsInBhcmVudEVsZW1lbnQiLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsInN0YXJ0Q29udGFpbmVyIiwicGFyZW50Tm9kZSIsIm5vcm1hbGl6ZUh0bWwiLCJzdHIiLCJyZXBsYWNlIiwiU3RyaW5nIiwicmVwbGFjZUNhcmV0IiwidGFyZ2V0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImlzVGFyZ2V0Rm9jdXNlZCIsImFjdGl2ZUVsZW1lbnQiLCJub2RlVmFsdWUiLCJzZWwiLCJyYW5nZSIsInNldFN0YXJ0IiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsIkhUTUxFbGVtZW50IiwiZm9jdXMiLCJzZXRGb3J3YXJkUmVmIiwicmVmIiwiY3VycmVudCIsImltcG9ydF9yZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiQ29udGVudEVkaXRhYmxlMiIsIl9hIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJ0YWdOYW1lIiwiX2IiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwicmVzdCIsImVsUmVmIiwidXNlUmVmIiwiaHRtbFJlZiIsInJlc3RSZWYiLCJ1c2VFZmZlY3QiLCJpbm5lckhUTUwiLCJ1c2VNZW1vIiwib25TZXRSZWYiLCIkZWwiLCJvbkNoYW5nZSIsImV2ZW50IiwiX2EyIiwiX2IyIiwiZWxlbWVudEh0bWwiLCJjc3NDbGFzcyIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZW50RWRpdGFibGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm9uQmx1ciIsIm9uSW5wdXQiLCJvbktleURvd24iLCJvbktleVVwIiwiY3JlYXRlQ29udGV4dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJodG1sTW9kZSIsInVwZGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJhdHRycyIsInByZXZTdGF0ZSIsIlByb3ZpZGVyIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJlIiwidCIsIm4iLCJyIiwiYSIsInByZXBlbmQiLCJkIiwic2luZ2xlVGFnIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidSIsInB1c2giLCJjIiwiY2hhckNvZGVBdCIsInN1YnN0cmluZyIsInN0eWxlU2hlZXQiLCJjc3NUZXh0Iiwic2V0QXR0cmlidXRlIiwiYXR0cmlidXRlcyIsImtleXMiLCJuMyIsImEyIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiRWRpdG9yMiIsImF1dG9Gb2N1cyIsImNvbnRhaW5lclByb3BzIiwib25TZWxlY3QiLCJlZGl0b3JTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrT3V0c2lkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsIiRzZWxlY3Rpb24iLCJvblRleHRTZWxlY3QiLCJzZXRDb250ZW50RWRpdGFibGVSZWYiLCJPcmRlcmVkTGlzdEljb24iLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInZlcnRpY2FsQWxpZ24iLCJmaWxsIiwiVW5vcmRlcmVkTGlzdEljb24iLCJub2RlTmFtZSIsImV4ZWNDb21tYW5kIiwicHJvbXB0IiwidGV4dERlY29yYXRpb24iLCJ0aXRsZSIsImNvbnRlbnQiLCJjb21tYW5kIiwiQnV0dG9uRmFjdG9yeSIsImRpc3BsYXlOYW1lIiwicHJvcHMiLCJpc0VsRm9jdXNlZCIsImFjdGl2ZSIsInF1ZXJ5Q29tbWFuZFN0YXRlIiwib25BY3Rpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VEb3duIiwidGFiSW5kZXgiLCJ0eXBlIiwiaXRlbXMiLCJEcm9wZG93bkZhY3RvcnkiLCJhY3RpdmVJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJzZWxlY3RlZCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZEluZGV4IiwicGFyc2VJbnQiLCJjb21tYW5kQXJndW1lbnQiLCJzZXRUaW1lb3V0IiwiaW5wdXRQcm9wcyIsImhpZGRlbiIsIm1hcCIsImluZGV4Iiwia2V5Iiwib25DbGljayIsIkRlZmF1bHRFZGl0b3IyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0NBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFNBQUEs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TTBHLGFBQUEsQ0FBY2hILGNBQUEsRUFBZ0IsTUFDeENxRixZQUFBLENBQUEvRSxPQUFBLENBQU0wRyxhQUFBLENBQWNsSCxNQUFBLEVBQVFjLFFBQUEsQ0FBUyxJQUFJNkssS0FBQSxFQUFPO0lBQUV0RztFQUFRLENBQUUsR0FBR3NHLEtBQUEsQ0FBTWhFLFFBQUEsSUFBYXBDLFlBQUEsQ0FBQS9FLE9BQUEsQ0FBTTBHLGFBQUEsQ0FBYzdHLE9BQUEsRUFBUyxNQUMzR2tGLFlBQUEsQ0FBQS9FLE9BQUEsQ0FBTTBHLGFBQUEsQ0FBY3RILE9BQUEsRUFBUyxJQUFJLEdBQ2pDMkYsWUFBQSxDQUFBL0UsT0FBQSxDQUFNMEcsYUFBQSxDQUFjMUgsT0FBQSxFQUFTLElBQUksR0FDakMrRixZQUFBLENBQUEvRSxPQUFBLENBQU0wRyxhQUFBLENBQWM5RyxTQUFBLEVBQVcsSUFBSSxHQUNuQ21GLFlBQUEsQ0FBQS9FLE9BQUEsQ0FBTTBHLGFBQUEsQ0FBY2hJLE9BQUEsRUFBUyxJQUFJLEdBQ2pDcUcsWUFBQSxDQUFBL0UsT0FBQSxDQUFNMEcsYUFBQSxDQUFjN0gsU0FBQSxFQUFXLElBQUksR0FDbkNrRyxZQUFBLENBQUEvRSxPQUFBLENBQU0wRyxhQUFBLENBQWN2SCxZQUFBLEVBQWMsSUFBSSxHQUN0QzRGLFlBQUEsQ0FBQS9FLE9BQUEsQ0FBTTBHLGFBQUEsQ0FBY3pILGdCQUFBLEVBQWtCLElBQUksR0FDMUM4RixZQUFBLENBQUEvRSxPQUFBLENBQU0wRyxhQUFBLENBQWM5RyxTQUFBLEVBQVcsSUFBSSxHQUNuQ21GLFlBQUEsQ0FBQS9FLE9BQUEsQ0FBTTBHLGFBQUEsQ0FBYzNILGVBQUEsRUFBaUIsSUFBSSxHQUN6Q2dHLFlBQUEsQ0FBQS9FLE9BQUEsQ0FBTTBHLGFBQUEsQ0FBYy9ILGFBQUEsRUFBZSxJQUFJLEdBQ3ZDb0csWUFBQSxDQUFBL0UsT0FBQSxDQUFNMEcsYUFBQSxDQUFjOUcsU0FBQSxFQUFXLElBQUksR0FDbkNtRixZQUFBLENBQUEvRSxPQUFBLENBQU0wRyxhQUFBLENBQWM1SCxPQUFBLEVBQVMsSUFBSSxHQUNqQ2lHLFlBQUEsQ0FBQS9FLE9BQUEsQ0FBTTBHLGFBQUEsQ0FBYzlILGtCQUFBLEVBQW9CLElBQUksR0FDNUNtRyxZQUFBLENBQUEvRSxPQUFBLENBQU0wRyxhQUFBLENBQWMvRyxVQUFBLEVBQVksSUFBSSxHQUNwQ29GLFlBQUEsQ0FBQS9FLE9BQUEsQ0FBTTBHLGFBQUEsQ0FBYzlHLFNBQUEsRUFBVyxJQUFJLEdBQ25DbUYsWUFBQSxDQUFBL0UsT0FBQSxDQUFNMEcsYUFBQSxDQUFjeEgsU0FBQSxFQUFXLElBQUksQ0FBQyxDQUFFLENBQUM7QUFDbkQsQ0FBQzs7O0FkckJELElBQU9lLGtDQUFBLEdBQVFYLGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9