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

// .beyond/uimport/temp/@radix-ui/react-select.2.2.6.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1zZWxlY3QuMi4yLjYuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXNlbGVjdC9zcmMvc2VsZWN0LnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9zZWxlY3RfMl8yXzZfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQXJyb3ciLCJBcnJvdzIiLCJDb250ZW50IiwiQ29udGVudDIiLCJHcm91cCIsIkljb24iLCJJdGVtIiwiSXRlbUluZGljYXRvciIsIkl0ZW1UZXh0IiwiTGFiZWwiLCJQb3J0YWwiLCJSb290IiwiUm9vdDIiLCJTY3JvbGxEb3duQnV0dG9uIiwiU2Nyb2xsVXBCdXR0b24iLCJTZWxlY3QiLCJTZWxlY3RBcnJvdyIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RHcm91cCIsIlNlbGVjdEljb24iLCJTZWxlY3RJdGVtIiwiU2VsZWN0SXRlbUluZGljYXRvciIsIlNlbGVjdEl0ZW1UZXh0IiwiU2VsZWN0TGFiZWwiLCJTZWxlY3RQb3J0YWwiLCJTZWxlY3RTY3JvbGxEb3duQnV0dG9uIiwiU2VsZWN0U2Nyb2xsVXBCdXR0b24iLCJTZWxlY3RTZXBhcmF0b3IiLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJTZWxlY3RWaWV3cG9ydCIsIlNlcGFyYXRvciIsIlRyaWdnZXIiLCJWYWx1ZSIsIlZpZXdwb3J0IiwiY3JlYXRlU2VsZWN0U2NvcGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiaW1wb3J0X251bWJlciIsImltcG9ydF9wcmltaXRpdmUiLCJpbXBvcnRfcmVhY3RfY29sbGVjdGlvbiIsImltcG9ydF9yZWFjdF9jb21wb3NlX3JlZnMiLCJpbXBvcnRfcmVhY3RfY29udGV4dCIsImltcG9ydF9yZWFjdF9kaXJlY3Rpb24iLCJpbXBvcnRfcmVhY3RfZGlzbWlzc2FibGVfbGF5ZXIiLCJpbXBvcnRfcmVhY3RfZm9jdXNfZ3VhcmRzIiwiaW1wb3J0X3JlYWN0X2ZvY3VzX3Njb3BlIiwiaW1wb3J0X3JlYWN0X2lkIiwiUG9wcGVyUHJpbWl0aXZlIiwiaW1wb3J0X3JlYWN0X3BvcHBlciIsImltcG9ydF9yZWFjdF9wb3J0YWwiLCJpbXBvcnRfcmVhY3RfcHJpbWl0aXZlIiwiaW1wb3J0X3JlYWN0X3Nsb3QiLCJpbXBvcnRfcmVhY3RfdXNlX2NhbGxiYWNrX3JlZiIsImltcG9ydF9yZWFjdF91c2VfY29udHJvbGxhYmxlX3N0YXRlIiwiaW1wb3J0X3JlYWN0X3VzZV9sYXlvdXRfZWZmZWN0IiwiaW1wb3J0X3JlYWN0X3VzZV9wcmV2aW91cyIsImltcG9ydF9yZWFjdF92aXN1YWxseV9oaWRkZW4iLCJpbXBvcnRfYXJpYV9oaWRkZW4iLCJpbXBvcnRfcmVhY3RfcmVtb3ZlX3Njcm9sbCIsImltcG9ydF9qc3hfcnVudGltZSIsIk9QRU5fS0VZUyIsIlNFTEVDVElPTl9LRVlTIiwiU0VMRUNUX05BTUUiLCJDb2xsZWN0aW9uIiwidXNlQ29sbGVjdGlvbiIsImNyZWF0ZUNvbGxlY3Rpb25TY29wZSIsImNyZWF0ZUNvbGxlY3Rpb24iLCJjcmVhdGVTZWxlY3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dFNjb3BlIiwiY3JlYXRlUG9wcGVyU2NvcGUiLCJ1c2VQb3BwZXJTY29wZSIsIlNlbGVjdFByb3ZpZGVyIiwidXNlU2VsZWN0Q29udGV4dCIsIlNlbGVjdE5hdGl2ZU9wdGlvbnNQcm92aWRlciIsInVzZVNlbGVjdE5hdGl2ZU9wdGlvbnNDb250ZXh0IiwicHJvcHMiLCJfX3Njb3BlU2VsZWN0IiwiY2hpbGRyZW4iLCJvcGVuIiwib3BlblByb3AiLCJkZWZhdWx0T3BlbiIsIm9uT3BlbkNoYW5nZSIsInZhbHVlIiwidmFsdWVQcm9wIiwiZGVmYXVsdFZhbHVlIiwib25WYWx1ZUNoYW5nZSIsImRpciIsIm5hbWUiLCJhdXRvQ29tcGxldGUiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiZm9ybSIsInBvcHBlclNjb3BlIiwidHJpZ2dlciIsInNldFRyaWdnZXIiLCJ1c2VTdGF0ZSIsInZhbHVlTm9kZSIsInNldFZhbHVlTm9kZSIsInZhbHVlTm9kZUhhc0NoaWxkcmVuIiwic2V0VmFsdWVOb2RlSGFzQ2hpbGRyZW4iLCJkaXJlY3Rpb24iLCJ1c2VEaXJlY3Rpb24iLCJzZXRPcGVuIiwidXNlQ29udHJvbGxhYmxlU3RhdGUiLCJwcm9wIiwiZGVmYXVsdFByb3AiLCJvbkNoYW5nZSIsImNhbGxlciIsInNldFZhbHVlIiwidHJpZ2dlclBvaW50ZXJEb3duUG9zUmVmIiwidXNlUmVmIiwiaXNGb3JtQ29udHJvbCIsImNsb3Nlc3QiLCJuYXRpdmVPcHRpb25zU2V0Iiwic2V0TmF0aXZlT3B0aW9uc1NldCIsIlNldCIsIm5hdGl2ZVNlbGVjdEtleSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIm9wdGlvbiIsImpvaW4iLCJqc3giLCJqc3hzIiwic2NvcGUiLCJvblRyaWdnZXJDaGFuZ2UiLCJvblZhbHVlTm9kZUNoYW5nZSIsIm9uVmFsdWVOb2RlSGFzQ2hpbGRyZW5DaGFuZ2UiLCJjb250ZW50SWQiLCJ1c2VJZCIsIlByb3ZpZGVyIiwib25OYXRpdmVPcHRpb25BZGQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJhZGQiLCJvbk5hdGl2ZU9wdGlvblJlbW92ZSIsIm9wdGlvbnNTZXQiLCJkZWxldGUiLCJTZWxlY3RCdWJibGVJbnB1dCIsInRhYkluZGV4IiwiZXZlbnQiLCJ0YXJnZXQiLCJkaXNwbGF5TmFtZSIsIlRSSUdHRVJfTkFNRSIsImZvcndhcmRSZWYiLCJmb3J3YXJkZWRSZWYiLCJ0cmlnZ2VyUHJvcHMiLCJjb250ZXh0IiwiaXNEaXNhYmxlZCIsImNvbXBvc2VkUmVmcyIsInVzZUNvbXBvc2VkUmVmcyIsImdldEl0ZW1zIiwicG9pbnRlclR5cGVSZWYiLCJzZWFyY2hSZWYiLCJoYW5kbGVUeXBlYWhlYWRTZWFyY2giLCJyZXNldFR5cGVhaGVhZCIsInVzZVR5cGVhaGVhZFNlYXJjaCIsInNlYXJjaCIsImVuYWJsZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJjdXJyZW50SXRlbSIsImZpbmQiLCJuZXh0SXRlbSIsImZpbmROZXh0SXRlbSIsImhhbmRsZU9wZW4iLCJwb2ludGVyRXZlbnQiLCJjdXJyZW50IiwieCIsIk1hdGgiLCJyb3VuZCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiQW5jaG9yIiwiYXNDaGlsZCIsIlByaW1pdGl2ZSIsImJ1dHRvbiIsInR5cGUiLCJyb2xlIiwic2hvdWxkU2hvd1BsYWNlaG9sZGVyIiwicmVmIiwib25DbGljayIsImNvbXBvc2VFdmVudEhhbmRsZXJzIiwiY3VycmVudFRhcmdldCIsImZvY3VzIiwib25Qb2ludGVyRG93biIsInBvaW50ZXJUeXBlIiwiaGFzUG9pbnRlckNhcHR1cmUiLCJwb2ludGVySWQiLCJyZWxlYXNlUG9pbnRlckNhcHR1cmUiLCJjdHJsS2V5IiwicHJldmVudERlZmF1bHQiLCJvbktleURvd24iLCJpc1R5cGluZ0FoZWFkIiwiaXNNb2RpZmllcktleSIsImFsdEtleSIsIm1ldGFLZXkiLCJrZXkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIlZBTFVFX05BTUUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBsYWNlaG9sZGVyIiwidmFsdWVQcm9wcyIsImhhc0NoaWxkcmVuIiwidXNlTGF5b3V0RWZmZWN0Iiwic3BhbiIsInBvaW50ZXJFdmVudHMiLCJGcmFnbWVudCIsIklDT05fTkFNRSIsImljb25Qcm9wcyIsIlBPUlRBTF9OQU1FIiwiQ09OVEVOVF9OQU1FIiwiZnJhZ21lbnQiLCJzZXRGcmFnbWVudCIsIkRvY3VtZW50RnJhZ21lbnQiLCJmcmFnIiwiY3JlYXRlUG9ydGFsIiwiU2VsZWN0Q29udGVudFByb3ZpZGVyIiwiU2xvdCIsIlNlbGVjdENvbnRlbnRJbXBsIiwiQ09OVEVOVF9NQVJHSU4iLCJ1c2VTZWxlY3RDb250ZW50Q29udGV4dCIsIkNPTlRFTlRfSU1QTF9OQU1FIiwiY3JlYXRlU2xvdCIsInBvc2l0aW9uIiwib25DbG9zZUF1dG9Gb2N1cyIsIm9uRXNjYXBlS2V5RG93biIsIm9uUG9pbnRlckRvd25PdXRzaWRlIiwic2lkZSIsInNpZGVPZmZzZXQiLCJhbGlnbiIsImFsaWduT2Zmc2V0IiwiYXJyb3dQYWRkaW5nIiwiY29sbGlzaW9uQm91bmRhcnkiLCJjb2xsaXNpb25QYWRkaW5nIiwic3RpY2t5IiwiaGlkZVdoZW5EZXRhY2hlZCIsImF2b2lkQ29sbGlzaW9ucyIsImNvbnRlbnRQcm9wcyIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsIm5vZGUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UZXh0Iiwic2V0U2VsZWN0ZWRJdGVtVGV4dCIsImlzUG9zaXRpb25lZCIsInNldElzUG9zaXRpb25lZCIsImZpcnN0VmFsaWRJdGVtRm91bmRSZWYiLCJ1c2VFZmZlY3QiLCJoaWRlT3RoZXJzIiwidXNlRm9jdXNHdWFyZHMiLCJmb2N1c0ZpcnN0IiwiY2FuZGlkYXRlcyIsImZpcnN0SXRlbSIsInJlc3RJdGVtcyIsImxhc3RJdGVtIiwic2xpY2UiLCJQUkVWSU9VU0xZX0ZPQ1VTRURfRUxFTUVOVCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImNhbmRpZGF0ZSIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJmb2N1c1NlbGVjdGVkSXRlbSIsInBvaW50ZXJNb3ZlRGVsdGEiLCJoYW5kbGVQb2ludGVyTW92ZSIsImFicyIsImhhbmRsZVBvaW50ZXJVcCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXB0dXJlIiwib25jZSIsImNsb3NlIiwid2luZG93Iiwic2V0VGltZW91dCIsIml0ZW1SZWZDYWxsYmFjayIsImlzRmlyc3RWYWxpZEl0ZW0iLCJpc1NlbGVjdGVkSXRlbSIsImhhbmRsZUl0ZW1MZWF2ZSIsIml0ZW1UZXh0UmVmQ2FsbGJhY2siLCJTZWxlY3RQb3NpdGlvbiIsIlNlbGVjdFBvcHBlclBvc2l0aW9uIiwiU2VsZWN0SXRlbUFsaWduZWRQb3NpdGlvbiIsInBvcHBlckNvbnRlbnRQcm9wcyIsIm9uVmlld3BvcnRDaGFuZ2UiLCJvbkl0ZW1MZWF2ZSIsIlJlbW92ZVNjcm9sbCIsImFzIiwiYWxsb3dQaW5jaFpvb20iLCJGb2N1c1Njb3BlIiwidHJhcHBlZCIsIm9uTW91bnRBdXRvRm9jdXMiLCJvblVubW91bnRBdXRvRm9jdXMiLCJwcmV2ZW50U2Nyb2xsIiwiRGlzbWlzc2FibGVMYXllciIsImRpc2FibGVPdXRzaWRlUG9pbnRlckV2ZW50cyIsIm9uRm9jdXNPdXRzaWRlIiwib25EaXNtaXNzIiwiaWQiLCJvbkNvbnRleHRNZW51Iiwib25QbGFjZWQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm91dGxpbmUiLCJpdGVtcyIsImNhbmRpZGF0ZU5vZGVzIiwicmV2ZXJzZSIsImN1cnJlbnRFbGVtZW50IiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsIklURU1fQUxJR05FRF9QT1NJVElPTl9OQU1FIiwicG9wcGVyUHJvcHMiLCJjb250ZW50Q29udGV4dCIsImNvbnRlbnRXcmFwcGVyIiwic2V0Q29udGVudFdyYXBwZXIiLCJzaG91bGRFeHBhbmRPblNjcm9sbFJlZiIsInNob3VsZFJlcG9zaXRpb25SZWYiLCJ0cmlnZ2VyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRlbnRSZWN0IiwidmFsdWVOb2RlUmVjdCIsIml0ZW1UZXh0UmVjdCIsIml0ZW1UZXh0T2Zmc2V0IiwibGVmdCIsImxlZnREZWx0YSIsIm1pbkNvbnRlbnRXaWR0aCIsIndpZHRoIiwiY29udGVudFdpZHRoIiwibWF4IiwicmlnaHRFZGdlIiwiaW5uZXJXaWR0aCIsImNsYW1wZWRMZWZ0IiwiY2xhbXAiLCJtaW5XaWR0aCIsInJpZ2h0IiwicmlnaHREZWx0YSIsImxlZnRFZGdlIiwiY2xhbXBlZFJpZ2h0IiwiYXZhaWxhYmxlSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpdGVtc0hlaWdodCIsImNvbnRlbnRTdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwiY29udGVudEJvcmRlclRvcFdpZHRoIiwicGFyc2VJbnQiLCJib3JkZXJUb3BXaWR0aCIsImNvbnRlbnRQYWRkaW5nVG9wIiwicGFkZGluZ1RvcCIsImNvbnRlbnRCb3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiY29udGVudFBhZGRpbmdCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiZnVsbENvbnRlbnRIZWlnaHQiLCJtaW5Db250ZW50SGVpZ2h0IiwibWluIiwib2Zmc2V0SGVpZ2h0Iiwidmlld3BvcnRTdHlsZXMiLCJ2aWV3cG9ydFBhZGRpbmdUb3AiLCJ2aWV3cG9ydFBhZGRpbmdCb3R0b20iLCJ0b3BFZGdlVG9UcmlnZ2VyTWlkZGxlIiwidG9wIiwiaGVpZ2h0IiwidHJpZ2dlck1pZGRsZVRvQm90dG9tRWRnZSIsInNlbGVjdGVkSXRlbUhhbGZIZWlnaHQiLCJpdGVtT2Zmc2V0TWlkZGxlIiwib2Zmc2V0VG9wIiwiY29udGVudFRvcFRvSXRlbU1pZGRsZSIsIml0ZW1NaWRkbGVUb0NvbnRlbnRCb3R0b20iLCJ3aWxsQWxpZ25XaXRob3V0VG9wT3ZlcmZsb3ciLCJpc0xhc3RJdGVtIiwiYm90dG9tIiwidmlld3BvcnRPZmZzZXRCb3R0b20iLCJjbGllbnRIZWlnaHQiLCJjbGFtcGVkVHJpZ2dlck1pZGRsZVRvQm90dG9tRWRnZSIsImlzRmlyc3RJdGVtIiwiY2xhbXBlZFRvcEVkZ2VUb1RyaWdnZXJNaWRkbGUiLCJtYXJnaW4iLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250ZW50WkluZGV4Iiwic2V0Q29udGVudFpJbmRleCIsInpJbmRleCIsImhhbmRsZVNjcm9sbEJ1dHRvbkNoYW5nZSIsIlNlbGVjdFZpZXdwb3J0UHJvdmlkZXIiLCJvblNjcm9sbEJ1dHRvbkNoYW5nZSIsImRpdiIsImJveFNpemluZyIsIlBPUFBFUl9QT1NJVElPTl9OQU1FIiwidXNlU2VsZWN0Vmlld3BvcnRDb250ZXh0IiwiVklFV1BPUlRfTkFNRSIsIm5vbmNlIiwidmlld3BvcnRQcm9wcyIsInZpZXdwb3J0Q29udGV4dCIsInByZXZTY3JvbGxUb3BSZWYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImZsZXgiLCJvdmVyZmxvdyIsIm9uU2Nyb2xsIiwic2Nyb2xsZWRCeSIsImNzc01pbkhlaWdodCIsInBhcnNlRmxvYXQiLCJjc3NIZWlnaHQiLCJwcmV2SGVpZ2h0IiwibmV4dEhlaWdodCIsImNsYW1wZWROZXh0SGVpZ2h0IiwiaGVpZ2h0RGlmZiIsImp1c3RpZnlDb250ZW50IiwiR1JPVVBfTkFNRSIsIlNlbGVjdEdyb3VwQ29udGV4dFByb3ZpZGVyIiwidXNlU2VsZWN0R3JvdXBDb250ZXh0IiwiZ3JvdXBQcm9wcyIsImdyb3VwSWQiLCJMQUJFTF9OQU1FIiwibGFiZWxQcm9wcyIsImdyb3VwQ29udGV4dCIsIklURU1fTkFNRSIsIlNlbGVjdEl0ZW1Db250ZXh0UHJvdmlkZXIiLCJ1c2VTZWxlY3RJdGVtQ29udGV4dCIsInRleHRWYWx1ZSIsInRleHRWYWx1ZVByb3AiLCJpdGVtUHJvcHMiLCJpc1NlbGVjdGVkIiwic2V0VGV4dFZhbHVlIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwidGV4dElkIiwiaGFuZGxlU2VsZWN0IiwiRXJyb3IiLCJvbkl0ZW1UZXh0Q2hhbmdlIiwicHJldlRleHRWYWx1ZSIsInRleHRDb250ZW50IiwidHJpbSIsIkl0ZW1TbG90Iiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uUG9pbnRlclVwIiwib25Qb2ludGVyTW92ZSIsIm9uUG9pbnRlckxlYXZlIiwiSVRFTV9URVhUX05BTUUiLCJpdGVtVGV4dFByb3BzIiwiaXRlbUNvbnRleHQiLCJuYXRpdmVPcHRpb25zQ29udGV4dCIsIml0ZW1UZXh0Tm9kZSIsInNldEl0ZW1UZXh0Tm9kZSIsIm5hdGl2ZU9wdGlvbiIsInVzZU1lbW8iLCJJVEVNX0lORElDQVRPUl9OQU1FIiwiaXRlbUluZGljYXRvclByb3BzIiwiU0NST0xMX1VQX0JVVFRPTl9OQU1FIiwiY2FuU2Nyb2xsVXAiLCJzZXRDYW5TY3JvbGxVcCIsImhhbmRsZVNjcm9sbDIiLCJoYW5kbGVTY3JvbGwiLCJjYW5TY3JvbGxVcDIiLCJTZWxlY3RTY3JvbGxCdXR0b25JbXBsIiwib25BdXRvU2Nyb2xsIiwiU0NST0xMX0RPV05fQlVUVE9OX05BTUUiLCJjYW5TY3JvbGxEb3duIiwic2V0Q2FuU2Nyb2xsRG93biIsIm1heFNjcm9sbCIsImNhblNjcm9sbERvd24yIiwiY2VpbCIsInNjcm9sbEluZGljYXRvclByb3BzIiwiYXV0b1Njcm9sbFRpbWVyUmVmIiwiY2xlYXJBdXRvU2Nyb2xsVGltZXIiLCJjbGVhckludGVydmFsIiwiYWN0aXZlSXRlbSIsImZsZXhTaHJpbmsiLCJzZXRJbnRlcnZhbCIsIlNFUEFSQVRPUl9OQU1FIiwic2VwYXJhdG9yUHJvcHMiLCJBUlJPV19OQU1FIiwiYXJyb3dQcm9wcyIsIkJVQkJMRV9JTlBVVF9OQU1FIiwicHJldlZhbHVlIiwidXNlUHJldmlvdXMiLCJzZWxlY3QiLCJzZWxlY3RQcm90byIsIkhUTUxTZWxlY3RFbGVtZW50IiwicHJvdG90eXBlIiwiZGVzY3JpcHRvciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInNldCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbGwiLCJkaXNwYXRjaEV2ZW50IiwiVklTVUFMTFlfSElEREVOX1NUWUxFUyIsIm9uU2VhcmNoQ2hhbmdlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidXNlQ2FsbGJhY2tSZWYiLCJ0aW1lclJlZiIsInVwZGF0ZVNlYXJjaCIsImNsZWFyVGltZW91dCIsImlzUmVwZWF0ZWQiLCJldmVyeSIsImNoYXIiLCJub3JtYWxpemVkU2VhcmNoIiwiY3VycmVudEl0ZW1JbmRleCIsIndyYXBwZWRJdGVtcyIsIndyYXBBcnJheSIsImV4Y2x1ZGVDdXJyZW50SXRlbSIsInYiLCJ0b0xvd2VyQ2Fz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QUFBLElBQVNILEtBQUEsQ0FBTTlULE1BQU0sQ0FBRTtBQUMvRTtBQUVBLElBQU1qTSxLQUFBLEdBQU9HLE1BQUE7QUFDYixJQUFNaUIsT0FBQSxHQUFVSixhQUFBO0FBQ2hCLElBQU1LLEtBQUEsR0FBUUosV0FBQTtBQUNkLElBQU14QixJQUFBLEdBQU9jLFVBQUE7QUFDYixJQUFNVCxNQUFBLEdBQVNjLFlBQUE7QUFDZixJQUFNckIsUUFBQSxHQUFVYyxhQUFBO0FBQ2hCLElBQU1pQixRQUFBLEdBQVdKLGNBQUE7QUFDakIsSUFBTTFCLEtBQUEsR0FBUWMsV0FBQTtBQUNkLElBQU1ULEtBQUEsR0FBUWMsV0FBQTtBQUNkLElBQU1qQixJQUFBLEdBQU9jLFVBQUE7QUFDYixJQUFNWixRQUFBLEdBQVdjLGNBQUE7QUFDakIsSUFBTWYsYUFBQSxHQUFnQmMsbUJBQUE7QUFDdEIsSUFBTVAsY0FBQSxHQUFpQlksb0JBQUE7QUFDdkIsSUFBTWIsZ0JBQUEsR0FBbUJZLHNCQUFBO0FBQ3pCLElBQU1NLFNBQUEsR0FBWUosZUFBQTtBQUNsQixJQUFNMUIsTUFBQSxHQUFRZSxXQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==