System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","@radix-ui/number@1.1.1","@radix-ui/primitive@1.1.3","react@18.3.1/jsx-runtime","@radix-ui/react-context@1.1.2","@radix-ui/react-compose-refs@1.1.2","@radix-ui/react-slot@1.2.3","@radix-ui/react-collection@1.1.7","@radix-ui/react-direction@1.1.1","@radix-ui/react-primitive@2.1.3","@radix-ui/react-use-callback-ref@1.1.1","@radix-ui/react-use-escape-keydown@1.1.1","@radix-ui/react-dismissable-layer@1.1.11","@radix-ui/react-focus-guards@1.1.3","@radix-ui/react-focus-scope@1.1.7","@radix-ui/react-use-layout-effect@1.1.1","@radix-ui/react-id@1.1.1","@floating-ui/utils@0.2.10","@floating-ui/core@1.7.3","@floating-ui/utils@0.2.10/dom","@floating-ui/dom@1.7.3","@floating-ui/react-dom@2.1.5","@radix-ui/react-arrow@1.1.7","@radix-ui/react-use-size@1.1.1","@radix-ui/react-popper@1.2.8","@radix-ui/react-portal@1.1.9","@radix-ui/react-use-effect-event@0.0.2","@radix-ui/react-use-controllable-state@1.2.2","@radix-ui/react-use-previous@1.1.1","@radix-ui/react-visually-hidden@1.2.3","aria-hidden@1.2.6","tslib@2.8.1","use-callback-ref@1.3.3","detect-node-es@1.1.0","use-sidecar@1.1.3","get-nonce@1.0.1","react-style-singleton@2.2.3","react-remove-scroll-bar@2.3.8","react-remove-scroll@2.7.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@radix-ui/number","1.1.1"],["@radix-ui/primitive","1.1.3"],["@radix-ui/react-context","1.1.2"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.3"],["@radix-ui/react-collection","1.1.7"],["@radix-ui/react-direction","1.1.1"],["@radix-ui/react-primitive","2.1.3"],["@radix-ui/react-use-callback-ref","1.1.1"],["@radix-ui/react-use-escape-keydown","1.1.1"],["@radix-ui/react-dismissable-layer","1.1.11"],["@radix-ui/react-focus-guards","1.1.3"],["@radix-ui/react-focus-scope","1.1.7"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-id","1.1.1"],["@floating-ui/utils","0.2.10"],["@floating-ui/core","1.7.3"],["@floating-ui/dom","1.7.3"],["@floating-ui/react-dom","2.1.5"],["@radix-ui/react-arrow","1.1.7"],["@radix-ui/react-use-size","1.1.1"],["@radix-ui/react-popper","1.2.8"],["@radix-ui/react-portal","1.1.9"],["@radix-ui/react-use-effect-event","0.0.2"],["@radix-ui/react-use-controllable-state","1.2.2"],["@radix-ui/react-use-previous","1.1.1"],["@radix-ui/react-visually-hidden","1.2.3"],["aria-hidden","1.2.6"],["tslib","2.8.1"],["react-remove-scroll-bar","2.3.8"],["use-callback-ref","1.3.3"],["detect-node-es","1.1.0"],["use-sidecar","1.1.3"],["react-remove-scroll","2.7.1"],["get-nonce","1.0.1"],["react-style-singleton","2.2.3"],["@radix-ui/react-select","2.2.6"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('@radix-ui/number@1.1.1', dep), dep => dependencies.set('@radix-ui/primitive@1.1.3', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('@radix-ui/react-context@1.1.2', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('@radix-ui/react-slot@1.2.3', dep), dep => dependencies.set('@radix-ui/react-collection@1.1.7', dep), dep => dependencies.set('@radix-ui/react-direction@1.1.1', dep), dep => dependencies.set('@radix-ui/react-primitive@2.1.3', dep), dep => dependencies.set('@radix-ui/react-use-callback-ref@1.1.1', dep), dep => dependencies.set('@radix-ui/react-use-escape-keydown@1.1.1', dep), dep => dependencies.set('@radix-ui/react-dismissable-layer@1.1.11', dep), dep => dependencies.set('@radix-ui/react-focus-guards@1.1.3', dep), dep => dependencies.set('@radix-ui/react-focus-scope@1.1.7', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep), dep => dependencies.set('@radix-ui/react-id@1.1.1', dep), dep => dependencies.set('@floating-ui/utils@0.2.10', dep), dep => dependencies.set('@floating-ui/core@1.7.3', dep), dep => dependencies.set('@floating-ui/utils@0.2.10/dom', dep), dep => dependencies.set('@floating-ui/dom@1.7.3', dep), dep => dependencies.set('@floating-ui/react-dom@2.1.5', dep), dep => dependencies.set('@radix-ui/react-arrow@1.1.7', dep), dep => dependencies.set('@radix-ui/react-use-size@1.1.1', dep), dep => dependencies.set('@radix-ui/react-popper@1.2.8', dep), dep => dependencies.set('@radix-ui/react-portal@1.1.9', dep), dep => dependencies.set('@radix-ui/react-use-effect-event@0.0.2', dep), dep => dependencies.set('@radix-ui/react-use-controllable-state@1.2.2', dep), dep => dependencies.set('@radix-ui/react-use-previous@1.1.1', dep), dep => dependencies.set('@radix-ui/react-visually-hidden@1.2.3', dep), dep => dependencies.set('aria-hidden@1.2.6', dep), dep => dependencies.set('tslib@2.8.1', dep), dep => dependencies.set('use-callback-ref@1.3.3', dep), dep => dependencies.set('detect-node-es@1.1.0', dep), dep => dependencies.set('use-sidecar@1.1.3', dep), dep => dependencies.set('get-nonce@1.0.1', dep), dep => dependencies.set('react-style-singleton@2.2.3', dep), dep => dependencies.set('react-remove-scroll-bar@2.3.8', dep), dep => dependencies.set('react-remove-scroll@2.7.1', dep)],
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

// .beyond/uimport/@radix-ui/react-select.2.2.6.js
var react_select_2_2_6_exports = {};
__export(react_select_2_2_6_exports, {
  Arrow: () => Arrow2,
  Content: () => Content2,
  Group: () => Group,
  Icon: () => Icon,
  Item: () => Item,
  ItemIndicator: () => ItemIndicator,
  ItemText: () => ItemText,
  Label: () => Label,
  Portal: () => Portal,
  Root: () => Root2,
  ScrollDownButton: () => ScrollDownButton,
  ScrollUpButton: () => ScrollUpButton,
  Select: () => Select,
  SelectArrow: () => SelectArrow,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectIcon: () => SelectIcon,
  SelectItem: () => SelectItem,
  SelectItemIndicator: () => SelectItemIndicator,
  SelectItemText: () => SelectItemText,
  SelectLabel: () => SelectLabel,
  SelectPortal: () => SelectPortal,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  SelectViewport: () => SelectViewport,
  Separator: () => Separator,
  Trigger: () => Trigger,
  Value: () => Value,
  Viewport: () => Viewport,
  createSelectScope: () => createSelectScope
});
module.exports = __toCommonJS(react_select_2_2_6_exports);

// node_modules/@radix-ui/react-select/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var ReactDOM = __toESM(require("react-dom@18.3.1"), 0);
var import_number = require("@radix-ui/number@1.1.1");
var import_primitive = require("@radix-ui/primitive@1.1.3");
var import_react_collection = require("@radix-ui/react-collection@1.1.7");
var import_react_compose_refs = require("@radix-ui/react-compose-refs@1.1.2");
var import_react_context = require("@radix-ui/react-context@1.1.2");
var import_react_direction = require("@radix-ui/react-direction@1.1.1");
var import_react_dismissable_layer = require("@radix-ui/react-dismissable-layer@1.1.11");
var import_react_focus_guards = require("@radix-ui/react-focus-guards@1.1.3");
var import_react_focus_scope = require("@radix-ui/react-focus-scope@1.1.7");
var import_react_id = require("@radix-ui/react-id@1.1.1");
var PopperPrimitive = __toESM(require("@radix-ui/react-popper@1.2.8"), 0);
var import_react_popper = require("@radix-ui/react-popper@1.2.8");
var import_react_portal = require("@radix-ui/react-portal@1.1.9");
var import_react_primitive = require("@radix-ui/react-primitive@2.1.3");
var import_react_slot = require("@radix-ui/react-slot@1.2.3");
var import_react_use_callback_ref = require("@radix-ui/react-use-callback-ref@1.1.1");
var import_react_use_controllable_state = require("@radix-ui/react-use-controllable-state@1.2.2");
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var import_react_use_previous = require("@radix-ui/react-use-previous@1.1.1");
var import_react_visually_hidden = require("@radix-ui/react-visually-hidden@1.2.3");
var import_aria_hidden = require("aria-hidden@1.2.6");
var import_react_remove_scroll = require("react-remove-scroll@2.7.1");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = (0, import_react_collection.createCollection)(SELECT_NAME);
var [createSelectContext, createSelectScope] = (0, import_react_context.createContextScope)(SELECT_NAME, [createCollectionScope, import_react_popper.createPopperScope]);
var usePopperScope = (0, import_react_popper.createPopperScope)();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = props => {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = React.useState(null);
  const [valueNode, setValueNode] = React.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = React.useState(false);
  const direction = (0, import_react_direction.useDirection)(dir);
  const [open, setOpen] = (0, import_react_use_controllable_state.useControllableState)({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SELECT_NAME
  });
  const [value, setValue] = (0, import_react_use_controllable_state.useControllableState)({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
    caller: SELECT_NAME
  });
  const triggerPointerDownPosRef = React.useRef(null);
  const isFormControl = trigger ? form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = React.useState(/* @__PURE__ */new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map(option => option.props.value).join(";");
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperPrimitive.Root, {
    ...popperScope,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsxs)(SelectProvider, {
      required,
      scope: __scopeSelect,
      trigger,
      onTriggerChange: setTrigger,
      valueNode,
      onValueNodeChange: setValueNode,
      valueNodeHasChildren,
      onValueNodeHasChildrenChange: setValueNodeHasChildren,
      contentId: (0, import_react_id.useId)(),
      value,
      onValueChange: setValue,
      open,
      onOpenChange: setOpen,
      dir: direction,
      triggerPointerDownPosRef,
      disabled,
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(Collection.Provider, {
        scope: __scopeSelect,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectNativeOptionsProvider, {
          scope: props.__scopeSelect,
          onNativeOptionAdd: React.useCallback(option => {
            setNativeOptionsSet(prev => new Set(prev).add(option));
          }, []),
          onNativeOptionRemove: React.useCallback(option => {
            setNativeOptionsSet(prev => {
              const optionsSet = new Set(prev);
              optionsSet.delete(option);
              return optionsSet;
            });
          }, []),
          children
        })
      }), isFormControl ? /* @__PURE__ */(0, import_jsx_runtime.jsxs)(SelectBubbleInput, {
        "aria-hidden": true,
        required,
        tabIndex: -1,
        name,
        autoComplete,
        value,
        onChange: event => setValue(event.target.value),
        disabled,
        form,
        children: [value === void 0 ? /* @__PURE__ */(0, import_jsx_runtime.jsx)("option", {
          value: ""
        }) : null, Array.from(nativeOptionsSet)]
      }, nativeSelectKey) : null]
    })
  });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    disabled = false,
    ...triggerProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
  const isDisabled = context.disabled || disabled;
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, context.onTriggerChange);
  const getItems = useCollection(__scopeSelect);
  const pointerTypeRef = React.useRef("touch");
  const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch(search => {
    const enabledItems = getItems().filter(item => !item.disabled);
    const currentItem = enabledItems.find(item => item.value === context.value);
    const nextItem = findNextItem(enabledItems, search, currentItem);
    if (nextItem !== void 0) {
      context.onValueChange(nextItem.value);
    }
  });
  const handleOpen = pointerEvent => {
    if (!isDisabled) {
      context.onOpenChange(true);
      resetTypeahead();
    }
    if (pointerEvent) {
      context.triggerPointerDownPosRef.current = {
        x: Math.round(pointerEvent.pageX),
        y: Math.round(pointerEvent.pageY)
      };
    }
  };
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperPrimitive.Anchor, {
    asChild: true,
    ...popperScope,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.button, {
      type: "button",
      role: "combobox",
      "aria-controls": context.contentId,
      "aria-expanded": context.open,
      "aria-required": context.required,
      "aria-autocomplete": "none",
      dir: context.dir,
      "data-state": context.open ? "open" : "closed",
      disabled: isDisabled,
      "data-disabled": isDisabled ? "" : void 0,
      "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
      ...triggerProps,
      ref: composedRefs,
      onClick: (0, import_primitive.composeEventHandlers)(triggerProps.onClick, event => {
        event.currentTarget.focus();
        if (pointerTypeRef.current !== "mouse") {
          handleOpen(event);
        }
      }),
      onPointerDown: (0, import_primitive.composeEventHandlers)(triggerProps.onPointerDown, event => {
        pointerTypeRef.current = event.pointerType;
        const target = event.target;
        if (target.hasPointerCapture(event.pointerId)) {
          target.releasePointerCapture(event.pointerId);
        }
        if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
          handleOpen(event);
          event.preventDefault();
        }
      }),
      onKeyDown: (0, import_primitive.composeEventHandlers)(triggerProps.onKeyDown, event => {
        const isTypingAhead = searchRef.current !== "";
        const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
        if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
        if (isTypingAhead && event.key === " ") return;
        if (OPEN_KEYS.includes(event.key)) {
          handleOpen();
          event.preventDefault();
        }
      })
    })
  });
});
SelectTrigger.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    className,
    style,
    children,
    placeholder = "",
    ...valueProps
  } = props;
  const context = useSelectContext(VALUE_NAME, __scopeSelect);
  const {
    onValueNodeHasChildrenChange
  } = context;
  const hasChildren = children !== void 0;
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, context.onValueNodeChange);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    onValueNodeHasChildrenChange(hasChildren);
  }, [onValueNodeHasChildrenChange, hasChildren]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
    ...valueProps,
    ref: composedRefs,
    style: {
      pointerEvents: "none"
    },
    children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: placeholder
    }) : children
  });
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    children,
    ...iconProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
    "aria-hidden": true,
    ...iconProps,
    ref: forwardedRef,
    children: children || "\u25BC"
  });
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal";
var SelectPortal = props => {
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_portal.Portal, {
    asChild: true,
    ...props
  });
};
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent";
var SelectContent = React.forwardRef((props, forwardedRef) => {
  const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
  const [fragment, setFragment] = React.useState();
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    setFragment(new DocumentFragment());
  }, []);
  if (!context.open) {
    const frag = fragment;
    return frag ? ReactDOM.createPortal(/* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectContentProvider, {
      scope: props.__scopeSelect,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(Collection.Slot, {
        scope: props.__scopeSelect,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
          children: props.children
        })
      })
    }), frag) : null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectContentImpl, {
    ...props,
    ref: forwardedRef
  });
});
SelectContent.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var Slot = (0, import_react_slot.createSlot)("SelectContent.RemoveScroll");
var SelectContentImpl = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    position = "item-aligned",
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    //
    // PopperContent props
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions,
    //
    ...contentProps
  } = props;
  const context = useSelectContext(CONTENT_NAME, __scopeSelect);
  const [content, setContent] = React.useState(null);
  const [viewport, setViewport] = React.useState(null);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, node => setContent(node));
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedItemText, setSelectedItemText] = React.useState(null);
  const getItems = useCollection(__scopeSelect);
  const [isPositioned, setIsPositioned] = React.useState(false);
  const firstValidItemFoundRef = React.useRef(false);
  React.useEffect(() => {
    if (content) return (0, import_aria_hidden.hideOthers)(content);
  }, [content]);
  (0, import_react_focus_guards.useFocusGuards)();
  const focusFirst = React.useCallback(candidates => {
    const [firstItem, ...restItems] = getItems().map(item => item.ref.current);
    const [lastItem] = restItems.slice(-1);
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
      candidate?.scrollIntoView({
        block: "nearest"
      });
      if (candidate === firstItem && viewport) viewport.scrollTop = 0;
      if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
      candidate?.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
  }, [getItems, viewport]);
  const focusSelectedItem = React.useCallback(() => focusFirst([selectedItem, content]), [focusFirst, selectedItem, content]);
  React.useEffect(() => {
    if (isPositioned) {
      focusSelectedItem();
    }
  }, [isPositioned, focusSelectedItem]);
  const {
    onOpenChange,
    triggerPointerDownPosRef
  } = context;
  React.useEffect(() => {
    if (content) {
      let pointerMoveDelta = {
        x: 0,
        y: 0
      };
      const handlePointerMove = event => {
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
          y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
        };
      };
      const handlePointerUp = event => {
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
          event.preventDefault();
        } else {
          if (!content.contains(event.target)) {
            onOpenChange(false);
          }
        }
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };
      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, {
          capture: true,
          once: true
        });
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, {
          capture: true
        });
      };
    }
  }, [content, onOpenChange, triggerPointerDownPosRef]);
  React.useEffect(() => {
    const close = () => onOpenChange(false);
    window.addEventListener("blur", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("blur", close);
      window.removeEventListener("resize", close);
    };
  }, [onOpenChange]);
  const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch(search => {
    const enabledItems = getItems().filter(item => !item.disabled);
    const currentItem = enabledItems.find(item => item.ref.current === document.activeElement);
    const nextItem = findNextItem(enabledItems, search, currentItem);
    if (nextItem) {
      setTimeout(() => nextItem.ref.current.focus());
    }
  });
  const itemRefCallback = React.useCallback((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItem(node);
      if (isFirstValidItem) firstValidItemFoundRef.current = true;
    }
  }, [context.value]);
  const handleItemLeave = React.useCallback(() => content?.focus(), [content]);
  const itemTextRefCallback = React.useCallback((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItemText(node);
    }
  }, [context.value]);
  const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
  const popperContentProps = SelectPosition === SelectPopperPosition ? {
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions
  } : {};
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectContentProvider, {
    scope: __scopeSelect,
    content,
    viewport,
    onViewportChange: setViewport,
    itemRefCallback,
    selectedItem,
    onItemLeave: handleItemLeave,
    itemTextRefCallback,
    focusSelectedItem,
    selectedItemText,
    position,
    isPositioned,
    searchRef,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_remove_scroll.RemoveScroll, {
      as: Slot,
      allowPinchZoom: true,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_focus_scope.FocusScope, {
        asChild: true,
        trapped: context.open,
        onMountAutoFocus: event => {
          event.preventDefault();
        },
        onUnmountAutoFocus: (0, import_primitive.composeEventHandlers)(onCloseAutoFocus, event => {
          context.trigger?.focus({
            preventScroll: true
          });
          event.preventDefault();
        }),
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_dismissable_layer.DismissableLayer, {
          asChild: true,
          disableOutsidePointerEvents: true,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside: event => event.preventDefault(),
          onDismiss: () => context.onOpenChange(false),
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectPosition, {
            role: "listbox",
            id: context.contentId,
            "data-state": context.open ? "open" : "closed",
            dir: context.dir,
            onContextMenu: event => event.preventDefault(),
            ...contentProps,
            ...popperContentProps,
            onPlaced: () => setIsPositioned(true),
            ref: composedRefs,
            style: {
              // flex layout so we can place the scroll buttons properly
              display: "flex",
              flexDirection: "column",
              // reset the outline by default as the content MAY get focused
              outline: "none",
              ...contentProps.style
            },
            onKeyDown: (0, import_primitive.composeEventHandlers)(contentProps.onKeyDown, event => {
              const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
              if (event.key === "Tab") event.preventDefault();
              if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
              if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                const items = getItems().filter(item => !item.disabled);
                let candidateNodes = items.map(item => item.ref.current);
                if (["ArrowUp", "End"].includes(event.key)) {
                  candidateNodes = candidateNodes.slice().reverse();
                }
                if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                  const currentElement = event.target;
                  const currentIndex = candidateNodes.indexOf(currentElement);
                  candidateNodes = candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
                event.preventDefault();
              }
            })
          })
        })
      })
    })
  });
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    onPlaced,
    ...popperProps
  } = props;
  const context = useSelectContext(CONTENT_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = React.useState(null);
  const [content, setContent] = React.useState(null);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, node => setContent(node));
  const getItems = useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = React.useRef(false);
  const shouldRepositionRef = React.useRef(true);
  const {
    viewport,
    selectedItem,
    selectedItemText,
    focusSelectedItem
  } = contentContext;
  const position = React.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = (0, import_number.clamp)(left, [CONTENT_MARGIN,
        // Prevents the content from going off the starting edge of the
        // viewport. It may still go off the ending edge, but this can be
        // controlled by the user since they may want to manage overflow in a
        // specific way.
        // https://github.com/radix-ui/primitives/issues/2049
        Math.max(CONTENT_MARGIN, rightEdge - contentWidth)]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = (0, import_number.clamp)(right, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, leftEdge - contentWidth)]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (
        // viewport might have padding bottom, include it to avoid a scrollable viewport
        isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (
        // viewport might have padding top, include it to avoid a scrollable viewport
        isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced?.();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [getItems, context.trigger, context.valueNode, contentWrapper, content, viewport, selectedItem, selectedItemText, context.dir, onPlaced]);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = React.useState();
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = React.useCallback(node => {
    if (node && shouldRepositionRef.current === true) {
      position();
      focusSelectedItem?.();
      shouldRepositionRef.current = false;
    }
  }, [position, focusSelectedItem]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectViewportProvider, {
    scope: __scopeSelect,
    contentWrapper,
    shouldExpandOnScrollRef,
    onScrollButtonChange: handleScrollButtonChange,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
      ref: setContentWrapper,
      style: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: contentZIndex
      },
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
        ...popperProps,
        ref: composedRefs,
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%",
          ...popperProps.style
        }
      })
    })
  });
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperPrimitive.Content, {
    ...popperScope,
    ...popperProps,
    ref: forwardedRef,
    align,
    collisionPadding,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...popperProps.style,
      // re-namespace exposed content custom properties
      ...{
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    nonce,
    ...viewportProps
  } = props;
  const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
  const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, contentContext.onViewportChange);
  const prevScrollTopRef = React.useRef(0);
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("style", {
      dangerouslySetInnerHTML: {
        __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
      },
      nonce
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(Collection.Slot, {
      scope: __scopeSelect,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
        "data-radix-select-viewport": "",
        role: "presentation",
        ...viewportProps,
        ref: composedRefs,
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          // Viewport should only be scrollable in the vertical direction.
          // This won't work in vertical writing modes, so we'll need to
          // revisit this if/when that is supported
          // https://developer.chrome.com/blog/vertical-form-controls
          overflow: "hidden auto",
          ...viewportProps.style
        },
        onScroll: (0, import_primitive.composeEventHandlers)(viewportProps.onScroll, event => {
          const viewport = event.currentTarget;
          const {
            contentWrapper,
            shouldExpandOnScrollRef
          } = viewportContext;
          if (shouldExpandOnScrollRef?.current && contentWrapper) {
            const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
            if (scrolledBy > 0) {
              const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
              const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
              const cssHeight = parseFloat(contentWrapper.style.height);
              const prevHeight = Math.max(cssMinHeight, cssHeight);
              if (prevHeight < availableHeight) {
                const nextHeight = prevHeight + scrolledBy;
                const clampedNextHeight = Math.min(availableHeight, nextHeight);
                const heightDiff = nextHeight - clampedNextHeight;
                contentWrapper.style.height = clampedNextHeight + "px";
                if (contentWrapper.style.bottom === "0px") {
                  viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                  contentWrapper.style.justifyContent = "flex-end";
                }
              }
            }
          }
          prevScrollTopRef.current = viewport.scrollTop;
        })
      })
    })]
  });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...groupProps
  } = props;
  const groupId = (0, import_react_id.useId)();
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectGroupContextProvider, {
    scope: __scopeSelect,
    id: groupId,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
      role: "group",
      "aria-labelledby": groupId,
      ...groupProps,
      ref: forwardedRef
    })
  });
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...labelProps
  } = props;
  const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
    id: groupContext.id,
    ...labelProps,
    ref: forwardedRef
  });
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    value,
    disabled = false,
    textValue: textValueProp,
    ...itemProps
  } = props;
  const context = useSelectContext(ITEM_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
  const isSelected = context.value === value;
  const [textValue, setTextValue] = React.useState(textValueProp ?? "");
  const [isFocused, setIsFocused] = React.useState(false);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, node => contentContext.itemRefCallback?.(node, value, disabled));
  const textId = (0, import_react_id.useId)();
  const pointerTypeRef = React.useRef("touch");
  const handleSelect = () => {
    if (!disabled) {
      context.onValueChange(value);
      context.onOpenChange(false);
    }
  };
  if (value === "") {
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectItemContextProvider, {
    scope: __scopeSelect,
    value,
    disabled,
    textId,
    isSelected,
    onItemTextChange: React.useCallback(node => {
      setTextValue(prevTextValue => prevTextValue || (node?.textContent ?? "").trim());
    }, []),
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
      scope: __scopeSelect,
      value,
      disabled,
      textValue,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
        role: "option",
        "aria-labelledby": textId,
        "data-highlighted": isFocused ? "" : void 0,
        "aria-selected": isSelected && isFocused,
        "data-state": isSelected ? "checked" : "unchecked",
        "aria-disabled": disabled || void 0,
        "data-disabled": disabled ? "" : void 0,
        tabIndex: disabled ? void 0 : -1,
        ...itemProps,
        ref: composedRefs,
        onFocus: (0, import_primitive.composeEventHandlers)(itemProps.onFocus, () => setIsFocused(true)),
        onBlur: (0, import_primitive.composeEventHandlers)(itemProps.onBlur, () => setIsFocused(false)),
        onClick: (0, import_primitive.composeEventHandlers)(itemProps.onClick, () => {
          if (pointerTypeRef.current !== "mouse") handleSelect();
        }),
        onPointerUp: (0, import_primitive.composeEventHandlers)(itemProps.onPointerUp, () => {
          if (pointerTypeRef.current === "mouse") handleSelect();
        }),
        onPointerDown: (0, import_primitive.composeEventHandlers)(itemProps.onPointerDown, event => {
          pointerTypeRef.current = event.pointerType;
        }),
        onPointerMove: (0, import_primitive.composeEventHandlers)(itemProps.onPointerMove, event => {
          pointerTypeRef.current = event.pointerType;
          if (disabled) {
            contentContext.onItemLeave?.();
          } else if (pointerTypeRef.current === "mouse") {
            event.currentTarget.focus({
              preventScroll: true
            });
          }
        }),
        onPointerLeave: (0, import_primitive.composeEventHandlers)(itemProps.onPointerLeave, event => {
          if (event.currentTarget === document.activeElement) {
            contentContext.onItemLeave?.();
          }
        }),
        onKeyDown: (0, import_primitive.composeEventHandlers)(itemProps.onKeyDown, event => {
          const isTypingAhead = contentContext.searchRef?.current !== "";
          if (isTypingAhead && event.key === " ") return;
          if (SELECTION_KEYS.includes(event.key)) handleSelect();
          if (event.key === " ") event.preventDefault();
        })
      })
    })
  });
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    className,
    style,
    ...itemTextProps
  } = props;
  const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
  const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
  const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
  const [itemTextNode, setItemTextNode] = React.useState(null);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, node => setItemTextNode(node), itemContext.onItemTextChange, node => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
  const textContent = itemTextNode?.textContent;
  const nativeOption = React.useMemo(() => /* @__PURE__ */(0, import_jsx_runtime.jsx)("option", {
    value: itemContext.value,
    disabled: itemContext.disabled,
    children: textContent
  }, itemContext.value), [itemContext.disabled, itemContext.value, textContent]);
  const {
    onNativeOptionAdd,
    onNativeOptionRemove
  } = nativeOptionsContext;
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    onNativeOptionAdd(nativeOption);
    return () => onNativeOptionRemove(nativeOption);
  }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
      id: itemContext.textId,
      ...itemTextProps,
      ref: composedRefs
    }), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? ReactDOM.createPortal(itemTextProps.children, context.valueNode) : null]
  });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...itemIndicatorProps
  } = props;
  const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
  return itemContext.isSelected ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
    "aria-hidden": true,
    ...itemIndicatorProps,
    ref: forwardedRef
  }) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = React.useState(false);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, viewportContext.onScrollButtonChange);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function () {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      var handleScroll = handleScroll2;
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
    ...props,
    ref: composedRefs,
    onAutoScroll: () => {
      const {
        viewport,
        selectedItem
      } = contentContext;
      if (viewport && selectedItem) {
        viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
      }
    }
  }) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = React.useState(false);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, viewportContext.onScrollButtonChange);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function () {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      var handleScroll = handleScroll2;
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
    ...props,
    ref: composedRefs,
    onAutoScroll: () => {
      const {
        viewport,
        selectedItem
      } = contentContext;
      if (viewport && selectedItem) {
        viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
      }
    }
  }) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    onAutoScroll,
    ...scrollIndicatorProps
  } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = React.useRef(null);
  const getItems = useCollection(__scopeSelect);
  const clearAutoScrollTimer = React.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  React.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    const activeItem = getItems().find(item => item.ref.current === document.activeElement);
    activeItem?.ref.current?.scrollIntoView({
      block: "nearest"
    });
  }, [getItems]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
    "aria-hidden": true,
    ...scrollIndicatorProps,
    ref: forwardedRef,
    style: {
      flexShrink: 0,
      ...scrollIndicatorProps.style
    },
    onPointerDown: (0, import_primitive.composeEventHandlers)(scrollIndicatorProps.onPointerDown, () => {
      if (autoScrollTimerRef.current === null) {
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
      }
    }),
    onPointerMove: (0, import_primitive.composeEventHandlers)(scrollIndicatorProps.onPointerMove, () => {
      contentContext.onItemLeave?.();
      if (autoScrollTimerRef.current === null) {
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
      }
    }),
    onPointerLeave: (0, import_primitive.composeEventHandlers)(scrollIndicatorProps.onPointerLeave, () => {
      clearAutoScrollTimer();
    })
  });
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...separatorProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
    "aria-hidden": true,
    ...separatorProps,
    ref: forwardedRef
  });
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow";
var SelectArrow = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...arrowProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const context = useSelectContext(ARROW_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
  return context.open && contentContext.position === "popper" ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperPrimitive.Arrow, {
    ...popperScope,
    ...arrowProps,
    ref: forwardedRef
  }) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = React.forwardRef(({
  __scopeSelect,
  value,
  ...props
}, forwardedRef) => {
  const ref = React.useRef(null);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, ref);
  const prevValue = (0, import_react_use_previous.usePrevious)(value);
  React.useEffect(() => {
    const select = ref.current;
    if (!select) return;
    const selectProto = window.HTMLSelectElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", {
        bubbles: true
      });
      setValue.call(select, value);
      select.dispatchEvent(event);
    }
  }, [prevValue, value]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.select, {
    ...props,
    style: {
      ...import_react_visually_hidden.VISUALLY_HIDDEN_STYLES,
      ...props.style
    },
    ref: composedRefs,
    defaultValue: value
  });
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = (0, import_react_use_callback_ref.useCallbackRef)(onSearchChange);
  const searchRef = React.useRef("");
  const timerRef = React.useRef(0);
  const handleTypeaheadSearch = React.useCallback(key => {
    const search = searchRef.current + key;
    handleSearchChange(search);
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
    })(search);
  }, [handleSearchChange]);
  const resetTypeahead = React.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  React.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every(char => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem) wrappedItems = wrappedItems.filter(v => v !== currentItem);
  const nextItem = wrappedItems.find(item => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
  return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root2 = Select;
var Trigger = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal = SelectPortal;
var Content2 = SelectContent;
var Viewport = SelectViewport;
var Group = SelectGroup;
var Label = SelectLabel;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton;
var ScrollDownButton = SelectScrollDownButton;
var Separator = SelectSeparator;
var Arrow2 = SelectArrow;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3Qtc2VsZWN0LjIuMi42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1zZWxlY3Qvc3JjL3NlbGVjdC50c3giXSwibmFtZXMiOlsicmVhY3Rfc2VsZWN0XzJfMl82X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFycm93IiwiQXJyb3cyIiwiQ29udGVudCIsIkNvbnRlbnQyIiwiR3JvdXAiLCJJY29uIiwiSXRlbSIsIkl0ZW1JbmRpY2F0b3IiLCJJdGVtVGV4dCIsIkxhYmVsIiwiUG9ydGFsIiwiUm9vdCIsIlJvb3QyIiwiU2Nyb2xsRG93bkJ1dHRvbiIsIlNjcm9sbFVwQnV0dG9uIiwiU2VsZWN0IiwiU2VsZWN0QXJyb3ciLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0R3JvdXAiLCJTZWxlY3RJY29uIiwiU2VsZWN0SXRlbSIsIlNlbGVjdEl0ZW1JbmRpY2F0b3IiLCJTZWxlY3RJdGVtVGV4dCIsIlNlbGVjdExhYmVsIiwiU2VsZWN0UG9ydGFsIiwiU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbiIsIlNlbGVjdFNjcm9sbFVwQnV0dG9uIiwiU2VsZWN0U2VwYXJhdG9yIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiU2VsZWN0Vmlld3BvcnQiLCJTZXBhcmF0b3IiLCJUcmlnZ2VyIiwiVmFsdWUiLCJWaWV3cG9ydCIsImNyZWF0ZVNlbGVjdFNjb3BlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJSZWFjdERPTSIsImltcG9ydF9udW1iZXIiLCJpbXBvcnRfcHJpbWl0aXZlIiwiaW1wb3J0X3JlYWN0X2NvbGxlY3Rpb24iLCJpbXBvcnRfcmVhY3RfY29tcG9zZV9yZWZzIiwiaW1wb3J0X3JlYWN0X2NvbnRleHQiLCJpbXBvcnRfcmVhY3RfZGlyZWN0aW9uIiwiaW1wb3J0X3JlYWN0X2Rpc21pc3NhYmxlX2xheWVyIiwiaW1wb3J0X3JlYWN0X2ZvY3VzX2d1YXJkcyIsImltcG9ydF9yZWFjdF9mb2N1c19zY29wZSIsImltcG9ydF9yZWFjdF9pZCIsIlBvcHBlclByaW1pdGl2ZSIsImltcG9ydF9yZWFjdF9wb3BwZXIiLCJpbXBvcnRfcmVhY3RfcG9ydGFsIiwiaW1wb3J0X3JlYWN0X3ByaW1pdGl2ZSIsImltcG9ydF9yZWFjdF9zbG90IiwiaW1wb3J0X3JlYWN0X3VzZV9jYWxsYmFja19yZWYiLCJpbXBvcnRfcmVhY3RfdXNlX2NvbnRyb2xsYWJsZV9zdGF0ZSIsImltcG9ydF9yZWFjdF91c2VfbGF5b3V0X2VmZmVjdCIsImltcG9ydF9yZWFjdF91c2VfcHJldmlvdXMiLCJpbXBvcnRfcmVhY3RfdmlzdWFsbHlfaGlkZGVuIiwiaW1wb3J0X2FyaWFfaGlkZGVuIiwiaW1wb3J0X3JlYWN0X3JlbW92ZV9zY3JvbGwiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJPUEVOX0tFWVMiLCJTRUxFQ1RJT05fS0VZUyIsIlNFTEVDVF9OQU1FIiwiQ29sbGVjdGlvbiIsInVzZUNvbGxlY3Rpb24iLCJjcmVhdGVDb2xsZWN0aW9uU2NvcGUiLCJjcmVhdGVDb2xsZWN0aW9uIiwiY3JlYXRlU2VsZWN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHRTY29wZSIsImNyZWF0ZVBvcHBlclNjb3BlIiwidXNlUG9wcGVyU2NvcGUiLCJTZWxlY3RQcm92aWRlciIsInVzZVNlbGVjdENvbnRleHQiLCJTZWxlY3ROYXRpdmVPcHRpb25zUHJvdmlkZXIiLCJ1c2VTZWxlY3ROYXRpdmVPcHRpb25zQ29udGV4dCIsInByb3BzIiwiX19zY29wZVNlbGVjdCIsImNoaWxkcmVuIiwib3BlbiIsIm9wZW5Qcm9wIiwiZGVmYXVsdE9wZW4iLCJvbk9wZW5DaGFuZ2UiLCJ2YWx1ZSIsInZhbHVlUHJvcCIsImRlZmF1bHRWYWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJkaXIiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImZvcm0iLCJwb3BwZXJTY29wZSIsInRyaWdnZXIiLCJzZXRUcmlnZ2VyIiwidXNlU3RhdGUiLCJ2YWx1ZU5vZGUiLCJzZXRWYWx1ZU5vZGUiLCJ2YWx1ZU5vZGVIYXNDaGlsZHJlbiIsInNldFZhbHVlTm9kZUhhc0NoaWxkcmVuIiwiZGlyZWN0aW9uIiwidXNlRGlyZWN0aW9uIiwic2V0T3BlbiIsInVzZUNvbnRyb2xsYWJsZVN0YXRlIiwicHJvcCIsImRlZmF1bHRQcm9wIiwib25DaGFuZ2UiLCJjYWxsZXIiLCJzZXRWYWx1ZSIsInRyaWdnZXJQb2ludGVyRG93blBvc1JlZiIsInVzZVJlZiIsImlzRm9ybUNvbnRyb2wiLCJjbG9zZXN0IiwibmF0aXZlT3B0aW9uc1NldCIsInNldE5hdGl2ZU9wdGlvbnNTZXQiLCJTZXQiLCJuYXRpdmVTZWxlY3RLZXkiLCJBcnJheSIsImZyb20iLCJtYXAiLCJvcHRpb24iLCJqb2luIiwianN4IiwianN4cyIsInNjb3BlIiwib25UcmlnZ2VyQ2hhbmdlIiwib25WYWx1ZU5vZGVDaGFuZ2UiLCJvblZhbHVlTm9kZUhhc0NoaWxkcmVuQ2hhbmdlIiwiY29udGVudElkIiwidXNlSWQiLCJQcm92aWRlciIsIm9uTmF0aXZlT3B0aW9uQWRkIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwiYWRkIiwib25OYXRpdmVPcHRpb25SZW1vdmUiLCJvcHRpb25zU2V0IiwiZGVsZXRlIiwiU2VsZWN0QnViYmxlSW5wdXQiLCJ0YWJJbmRleCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzcGxheU5hbWUiLCJUUklHR0VSX05BTUUiLCJmb3J3YXJkUmVmIiwiZm9yd2FyZGVkUmVmIiwidHJpZ2dlclByb3BzIiwiY29udGV4dCIsImlzRGlzYWJsZWQiLCJjb21wb3NlZFJlZnMiLCJ1c2VDb21wb3NlZFJlZnMiLCJnZXRJdGVtcyIsInBvaW50ZXJUeXBlUmVmIiwic2VhcmNoUmVmIiwiaGFuZGxlVHlwZWFoZWFkU2VhcmNoIiwicmVzZXRUeXBlYWhlYWQiLCJ1c2VUeXBlYWhlYWRTZWFyY2giLCJzZWFyY2giLCJlbmFibGVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJmaW5kIiwibmV4dEl0ZW0iLCJmaW5kTmV4dEl0ZW0iLCJoYW5kbGVPcGVuIiwicG9pbnRlckV2ZW50IiwiY3VycmVudCIsIngiLCJNYXRoIiwicm91bmQiLCJwYWdlWCIsInkiLCJwYWdlWSIsIkFuY2hvciIsImFzQ2hpbGQiLCJQcmltaXRpdmUiLCJidXR0b24iLCJ0eXBlIiwicm9sZSIsInNob3VsZFNob3dQbGFjZWhvbGRlciIsInJlZiIsIm9uQ2xpY2siLCJjb21wb3NlRXZlbnRIYW5kbGVycyIsImN1cnJlbnRUYXJnZXQiLCJmb2N1cyIsIm9uUG9pbnRlckRvd24iLCJwb2ludGVyVHlwZSIsImhhc1BvaW50ZXJDYXB0dXJlIiwicG9pbnRlcklkIiwicmVsZWFzZVBvaW50ZXJDYXB0dXJlIiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0Iiwib25LZXlEb3duIiwiaXNUeXBpbmdBaGVhZCIsImlzTW9kaWZpZXJLZXkiLCJhbHRLZXkiLCJtZXRhS2V5Iiwia2V5IiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJWQUxVRV9OQU1FIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwbGFjZWhvbGRlciIsInZhbHVlUHJvcHMiLCJoYXNDaGlsZHJlbiIsInVzZUxheW91dEVmZmVjdCIsInNwYW4iLCJwb2ludGVyRXZlbnRzIiwiRnJhZ21lbnQiLCJJQ09OX05BTUUiLCJpY29uUHJvcHMiLCJQT1JUQUxfTkFNRSIsIkNPTlRFTlRfTkFNRSIsImZyYWdtZW50Iiwic2V0RnJhZ21lbnQiLCJEb2N1bWVudEZyYWdtZW50IiwiZnJhZyIsImNyZWF0ZVBvcnRhbCIsIlNlbGVjdENvbnRlbnRQcm92aWRlciIsIlNsb3QiLCJTZWxlY3RDb250ZW50SW1wbCIsIkNPTlRFTlRfTUFSR0lOIiwidXNlU2VsZWN0Q29udGVudENvbnRleHQiLCJDT05URU5UX0lNUExfTkFNRSIsImNyZWF0ZVNsb3QiLCJwb3NpdGlvbiIsIm9uQ2xvc2VBdXRvRm9jdXMiLCJvbkVzY2FwZUtleURvd24iLCJvblBvaW50ZXJEb3duT3V0c2lkZSIsInNpZGUiLCJzaWRlT2Zmc2V0IiwiYWxpZ24iLCJhbGlnbk9mZnNldCIsImFycm93UGFkZGluZyIsImNvbGxpc2lvbkJvdW5kYXJ5IiwiY29sbGlzaW9uUGFkZGluZyIsInN0aWNreSIsImhpZGVXaGVuRGV0YWNoZWQiLCJhdm9pZENvbGxpc2lvbnMiLCJjb250ZW50UHJvcHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJub2RlIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtVGV4dCIsInNldFNlbGVjdGVkSXRlbVRleHQiLCJpc1Bvc2l0aW9uZWQiLCJzZXRJc1Bvc2l0aW9uZWQiLCJmaXJzdFZhbGlkSXRlbUZvdW5kUmVmIiwidXNlRWZmZWN0IiwiaGlkZU90aGVycyIsInVzZUZvY3VzR3VhcmRzIiwiZm9jdXNGaXJzdCIsImNhbmRpZGF0ZXMiLCJmaXJzdEl0ZW0iLCJyZXN0SXRlbXMiLCJsYXN0SXRlbSIsInNsaWNlIiwiUFJFVklPVVNMWV9GT0NVU0VEX0VMRU1FTlQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjYW5kaWRhdGUiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXNTZWxlY3RlZEl0ZW0iLCJwb2ludGVyTW92ZURlbHRhIiwiaGFuZGxlUG9pbnRlck1vdmUiLCJhYnMiLCJoYW5kbGVQb2ludGVyVXAiLCJjb250YWlucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FwdHVyZSIsIm9uY2UiLCJjbG9zZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJpdGVtUmVmQ2FsbGJhY2siLCJpc0ZpcnN0VmFsaWRJdGVtIiwiaXNTZWxlY3RlZEl0ZW0iLCJoYW5kbGVJdGVtTGVhdmUiLCJpdGVtVGV4dFJlZkNhbGxiYWNrIiwiU2VsZWN0UG9zaXRpb24iLCJTZWxlY3RQb3BwZXJQb3NpdGlvbiIsIlNlbGVjdEl0ZW1BbGlnbmVkUG9zaXRpb24iLCJwb3BwZXJDb250ZW50UHJvcHMiLCJvblZpZXdwb3J0Q2hhbmdlIiwib25JdGVtTGVhdmUiLCJSZW1vdmVTY3JvbGwiLCJhcyIsImFsbG93UGluY2hab29tIiwiRm9jdXNTY29wZSIsInRyYXBwZWQiLCJvbk1vdW50QXV0b0ZvY3VzIiwib25Vbm1vdW50QXV0b0ZvY3VzIiwicHJldmVudFNjcm9sbCIsIkRpc21pc3NhYmxlTGF5ZXIiLCJkaXNhYmxlT3V0c2lkZVBvaW50ZXJFdmVudHMiLCJvbkZvY3VzT3V0c2lkZSIsIm9uRGlzbWlzcyIsImlkIiwib25Db250ZXh0TWVudSIsIm9uUGxhY2VkIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJvdXRsaW5lIiwiaXRlbXMiLCJjYW5kaWRhdGVOb2RlcyIsInJldmVyc2UiLCJjdXJyZW50RWxlbWVudCIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJJVEVNX0FMSUdORURfUE9TSVRJT05fTkFNRSIsInBvcHBlclByb3BzIiwiY29udGVudENvbnRleHQiLCJjb250ZW50V3JhcHBlciIsInNldENvbnRlbnRXcmFwcGVyIiwic2hvdWxkRXhwYW5kT25TY3JvbGxSZWYiLCJzaG91bGRSZXBvc2l0aW9uUmVmIiwidHJpZ2dlclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb250ZW50UmVjdCIsInZhbHVlTm9kZVJlY3QiLCJpdGVtVGV4dFJlY3QiLCJpdGVtVGV4dE9mZnNldCIsImxlZnQiLCJsZWZ0RGVsdGEiLCJtaW5Db250ZW50V2lkdGgiLCJ3aWR0aCIsImNvbnRlbnRXaWR0aCIsIm1heCIsInJpZ2h0RWRnZSIsImlubmVyV2lkdGgiLCJjbGFtcGVkTGVmdCIsImNsYW1wIiwibWluV2lkdGgiLCJyaWdodCIsInJpZ2h0RGVsdGEiLCJsZWZ0RWRnZSIsImNsYW1wZWRSaWdodCIsImF2YWlsYWJsZUhlaWdodCIsImlubmVySGVpZ2h0IiwiaXRlbXNIZWlnaHQiLCJjb250ZW50U3R5bGVzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbnRlbnRCb3JkZXJUb3BXaWR0aCIsInBhcnNlSW50IiwiYm9yZGVyVG9wV2lkdGgiLCJjb250ZW50UGFkZGluZ1RvcCIsInBhZGRpbmdUb3AiLCJjb250ZW50Qm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImNvbnRlbnRQYWRkaW5nQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsImZ1bGxDb250ZW50SGVpZ2h0IiwibWluQ29udGVudEhlaWdodCIsIm1pbiIsIm9mZnNldEhlaWdodCIsInZpZXdwb3J0U3R5bGVzIiwidmlld3BvcnRQYWRkaW5nVG9wIiwidmlld3BvcnRQYWRkaW5nQm90dG9tIiwidG9wRWRnZVRvVHJpZ2dlck1pZGRsZSIsInRvcCIsImhlaWdodCIsInRyaWdnZXJNaWRkbGVUb0JvdHRvbUVkZ2UiLCJzZWxlY3RlZEl0ZW1IYWxmSGVpZ2h0IiwiaXRlbU9mZnNldE1pZGRsZSIsIm9mZnNldFRvcCIsImNvbnRlbnRUb3BUb0l0ZW1NaWRkbGUiLCJpdGVtTWlkZGxlVG9Db250ZW50Qm90dG9tIiwid2lsbEFsaWduV2l0aG91dFRvcE92ZXJmbG93IiwiaXNMYXN0SXRlbSIsImJvdHRvbSIsInZpZXdwb3J0T2Zmc2V0Qm90dG9tIiwiY2xpZW50SGVpZ2h0IiwiY2xhbXBlZFRyaWdnZXJNaWRkbGVUb0JvdHRvbUVkZ2UiLCJpc0ZpcnN0SXRlbSIsImNsYW1wZWRUb3BFZGdlVG9UcmlnZ2VyTWlkZGxlIiwibWFyZ2luIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29udGVudFpJbmRleCIsInNldENvbnRlbnRaSW5kZXgiLCJ6SW5kZXgiLCJoYW5kbGVTY3JvbGxCdXR0b25DaGFuZ2UiLCJTZWxlY3RWaWV3cG9ydFByb3ZpZGVyIiwib25TY3JvbGxCdXR0b25DaGFuZ2UiLCJkaXYiLCJib3hTaXppbmciLCJQT1BQRVJfUE9TSVRJT05fTkFNRSIsInVzZVNlbGVjdFZpZXdwb3J0Q29udGV4dCIsIlZJRVdQT1JUX05BTUUiLCJub25jZSIsInZpZXdwb3J0UHJvcHMiLCJ2aWV3cG9ydENvbnRleHQiLCJwcmV2U2Nyb2xsVG9wUmVmIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJmbGV4Iiwib3ZlcmZsb3ciLCJvblNjcm9sbCIsInNjcm9sbGVkQnkiLCJjc3NNaW5IZWlnaHQiLCJwYXJzZUZsb2F0IiwiY3NzSGVpZ2h0IiwicHJldkhlaWdodCIsIm5leHRIZWlnaHQiLCJjbGFtcGVkTmV4dEhlaWdodCIsImhlaWdodERpZmYiLCJqdXN0aWZ5Q29udGVudCIsIkdST1VQX05BTUUiLCJTZWxlY3RHcm91cENvbnRleHRQcm92aWRlciIsInVzZVNlbGVjdEdyb3VwQ29udGV4dCIsImdyb3VwUHJvcHMiLCJncm91cElkIiwiTEFCRUxfTkFNRSIsImxhYmVsUHJvcHMiLCJncm91cENvbnRleHQiLCJJVEVNX05BTUUiLCJTZWxlY3RJdGVtQ29udGV4dFByb3ZpZGVyIiwidXNlU2VsZWN0SXRlbUNvbnRleHQiLCJ0ZXh0VmFsdWUiLCJ0ZXh0VmFsdWVQcm9wIiwiaXRlbVByb3BzIiwiaXNTZWxlY3RlZCIsInNldFRleHRWYWx1ZSIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsInRleHRJZCIsImhhbmRsZVNlbGVjdCIsIkVycm9yIiwib25JdGVtVGV4dENoYW5nZSIsInByZXZUZXh0VmFsdWUiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJJdGVtU2xvdCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvblBvaW50ZXJVcCIsIm9uUG9pbnRlck1vdmUiLCJvblBvaW50ZXJMZWF2ZSIsIklURU1fVEVYVF9OQU1FIiwiaXRlbVRleHRQcm9wcyIsIml0ZW1Db250ZXh0IiwibmF0aXZlT3B0aW9uc0NvbnRleHQiLCJpdGVtVGV4dE5vZGUiLCJzZXRJdGVtVGV4dE5vZGUiLCJuYXRpdmVPcHRpb24iLCJ1c2VNZW1vIiwiSVRFTV9JTkRJQ0FUT1JfTkFNRSIsIml0ZW1JbmRpY2F0b3JQcm9wcyIsIlNDUk9MTF9VUF9CVVRUT05fTkFNRSIsImNhblNjcm9sbFVwIiwic2V0Q2FuU2Nyb2xsVXAiLCJoYW5kbGVTY3JvbGwyIiwiaGFuZGxlU2Nyb2xsIiwiY2FuU2Nyb2xsVXAyIiwiU2VsZWN0U2Nyb2xsQnV0dG9uSW1wbCIsIm9uQXV0b1Njcm9sbCIsIlNDUk9MTF9ET1dOX0JVVFRPTl9OQU1FIiwiY2FuU2Nyb2xsRG93biIsInNldENhblNjcm9sbERvd24iLCJtYXhTY3JvbGwiLCJjYW5TY3JvbGxEb3duMiIsImNlaWwiLCJzY3JvbGxJbmRpY2F0b3JQcm9wcyIsImF1dG9TY3JvbGxUaW1lclJlZiIsImNsZWFyQXV0b1Njcm9sbFRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImFjdGl2ZUl0ZW0iLCJmbGV4U2hyaW5rIiwic2V0SW50ZXJ2YWwiLCJTRVBBUkFUT1JfTkFNRSIsInNlcGFyYXRvclByb3BzIiwiQVJST1dfTkFNRSIsImFycm93UHJvcHMiLCJCVUJCTEVfSU5QVVRfTkFNRSIsInByZXZWYWx1ZSIsInVzZVByZXZpb3VzIiwic2VsZWN0Iiwic2VsZWN0UHJvdG8iLCJIVE1MU2VsZWN0RWxlbWVudCIsInByb3RvdHlwZSIsImRlc2NyaXB0b3IiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJzZXQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYWxsIiwiZGlzcGF0Y2hFdmVudCIsIlZJU1VBTExZX0hJRERFTl9TVFlMRVMiLCJvblNlYXJjaENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsInVzZUNhbGxiYWNrUmVmIiwidGltZXJSZWYiLCJ1cGRhdGVTZWFyY2giLCJjbGVhclRpbWVvdXQiLCJpc1JlcGVhdGVkIiwiZXZlcnkiLCJjaGFyIiwibm9ybWFsaXplZFNlYXJjaCIsImN1cnJlbnRJdGVtSW5kZXgiLCJ3cmFwcGVkSXRlbXMiLCJ3cmFwQXJyYXkiLCJleGNsdWRlQ3VycmVudEl0ZW0iLCJ2IiwidG9Mb3dlckNhc2UiLCJz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QUFTSCxLQUFBLENBQU05VCxNQUFNLENBQUU7QUFDL0U7QUFFQSxJQUFNak0sS0FBQSxHQUFPRyxNQUFBO0FBQ2IsSUFBTWlCLE9BQUEsR0FBVUosYUFBQTtBQUNoQixJQUFNSyxLQUFBLEdBQVFKLFdBQUE7QUFDZCxJQUFNeEIsSUFBQSxHQUFPYyxVQUFBO0FBQ2IsSUFBTVQsTUFBQSxHQUFTYyxZQUFBO0FBQ2YsSUFBTXJCLFFBQUEsR0FBVWMsYUFBQTtBQUNoQixJQUFNaUIsUUFBQSxHQUFXSixjQUFBO0FBQ2pCLElBQU0xQixLQUFBLEdBQVFjLFdBQUE7QUFDZCxJQUFNVCxLQUFBLEdBQVFjLFdBQUE7QUFDZCxJQUFNakIsSUFBQSxHQUFPYyxVQUFBO0FBQ2IsSUFBTVosUUFBQSxHQUFXYyxjQUFBO0FBQ2pCLElBQU1mLGFBQUEsR0FBZ0JjLG1CQUFBO0FBQ3RCLElBQU1QLGNBQUEsR0FBaUJZLG9CQUFBO0FBQ3ZCLElBQU1iLGdCQUFBLEdBQW1CWSxzQkFBQTtBQUN6QixJQUFNTSxTQUFBLEdBQVlKLGVBQUE7QUFDbEIsSUFBTTFCLE1BQUEsR0FBUWUsV0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=