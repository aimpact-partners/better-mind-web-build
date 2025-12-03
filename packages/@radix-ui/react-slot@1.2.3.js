System.register(["react@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-slot.1.2.3.js
var react_slot_1_2_3_exports = {};
__export(react_slot_1_2_3_exports, {
  Root: () => Slot,
  Slot: () => Slot,
  Slottable: () => Slottable,
  createSlot: () => createSlot,
  createSlottable: () => createSlottable
});
module.exports = __toCommonJS(react_slot_1_2_3_exports);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_compose_refs = require("@radix-ui/react-compose-refs@1.1.2");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */createSlotClone(ownerName);
  const Slot2 = React.forwardRef((props, forwardedRef) => {
    const {
      children,
      ...slotProps
    } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map(child => {
        if (child === slottable) {
          if (React.Children.count(newElement) > 1) return React.Children.only(null);
          return React.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children: React.isValidElement(newElement) ? React.cloneElement(newElement, void 0, newChildren) : null
      });
    }
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SlotClone, {
      ...slotProps,
      ref: forwardedRef,
      children
    });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React.forwardRef((props, forwardedRef) => {
    const {
      children,
      ...slotProps
    } = props;
    if (React.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React.Fragment) {
        props2.ref = forwardedRef ? (0, import_react_compose_refs.composeRefs)(forwardedRef, childrenRef) : childrenRef;
      }
      return React.cloneElement(children, props2);
    }
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
  const Slottable2 = ({
    children
  }) => {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children
    });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = /* @__PURE__ */createSlottable("Slottable");
function isSlottable(child) {
  return React.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1zbG90LjEuMi4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1zbG90L3NyYy9zbG90LnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9zbG90XzFfMl8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlJvb3QiLCJTbG90IiwiU2xvdHRhYmxlIiwiY3JlYXRlU2xvdCIsImNyZWF0ZVNsb3R0YWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X2NvbXBvc2VfcmVmcyIsImltcG9ydF9qc3hfcnVudGltZSIsIm93bmVyTmFtZSIsIlNsb3RDbG9uZSIsImNyZWF0ZVNsb3RDbG9uZSIsIlNsb3QyIiwiZm9yd2FyZFJlZiIsInByb3BzIiwiZm9yd2FyZGVkUmVmIiwiY2hpbGRyZW4iLCJzbG90UHJvcHMiLCJjaGlsZHJlbkFycmF5IiwiQ2hpbGRyZW4iLCJ0b0FycmF5Iiwic2xvdHRhYmxlIiwiZmluZCIsImlzU2xvdHRhYmxlIiwibmV3RWxlbWVudCIsIm5ld0NoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJjb3VudCIsIm9ubHkiLCJpc1ZhbGlkRWxlbWVudCIsImpzeCIsInJlZiIsImNsb25lRWxlbWVudCIsImRpc3BsYXlOYW1lIiwiY2hpbGRyZW5SZWYiLCJnZXRFbGVtZW50UmVmIiwicHJvcHMyIiwibWVyZ2VQcm9wcyIsInR5cGUiLCJGcmFnbWVudCIsImNvbXBvc2VSZWZzIiwiU0xPVFRBQkxFX0lERU5USUZJRVIiLCJTeW1ib2wiLCJTbG90dGFibGUyIiwiX19yYWRpeElkIiwiY2hpbGRQcm9wcyIsIm92ZXJyaWRlUHJvcHMiLCJwcm9wTmFtZSIsInNsb3RQcm9wVmFsdWUiLCJjaGlsZFByb3BWYWx1ZSIsImlzSGFuZGxlciIsInRlc3QiLCJhcmdzIiwicmVzdWx0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJlbGVtZW50IiwiZ2V0dGVyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0IiwibWF5V2FybiIsImlzUmVhY3RXYXJuaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLElBQUE7RUFBQUEsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsd0JBQUE7OztBQ0FBLElBQUFVLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyx5QkFBQSxHQUE0QkQsT0FBQTtBQW1DcEIsSUFBQUUsa0JBQUEsR0FBQUYsT0FBQTs7QUF6QjBCLFNBQVNQLFdBQVdVLFNBQUEsRUFBbUI7RUFDdkUsTUFBTUMsU0FBQSxHQUFZLGVBQUFDLGVBQUEsQ0FBZ0JGLFNBQVM7RUFDM0MsTUFBTUcsS0FBQSxHQUFhUixLQUFBLENBQUFTLFVBQUEsQ0FBbUMsQ0FBQ0MsS0FBQSxFQUFPQyxZQUFBLEtBQWlCO0lBQzdFLE1BQU07TUFBRUMsUUFBQTtNQUFVLEdBQUdDO0lBQVUsSUFBSUgsS0FBQTtJQUNuQyxNQUFNSSxhQUFBLEdBQXNCZCxLQUFBLENBQUFlLFFBQUEsQ0FBU0MsT0FBQSxDQUFRSixRQUFRO0lBQ3JELE1BQU1LLFNBQUEsR0FBWUgsYUFBQSxDQUFjSSxJQUFBLENBQUtDLFdBQVc7SUFFaEQsSUFBSUYsU0FBQSxFQUFXO01BRWIsTUFBTUcsVUFBQSxHQUFhSCxTQUFBLENBQVVQLEtBQUEsQ0FBTUUsUUFB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LEdBQUd4QyxTQUFBO0lBQVcsR0FBRzhCO0VBQWM7QUFDMUM7QUFPQSxTQUFTWCxjQUFjc0IsT0FBQSxFQUE2QjtFQUVsRCxJQUFJQyxNQUFBLEdBQVNDLE1BQUEsQ0FBT0Msd0JBQUEsQ0FBeUJILE9BQUEsQ0FBUTVDLEtBQUEsRUFBTyxLQUFLLEdBQUdnRCxHQUFBO0VBQ3BFLElBQUlDLE9BQUEsR0FBVUosTUFBQSxJQUFVLG9CQUFvQkEsTUFBQSxJQUFVQSxNQUFBLENBQU9LLGNBQUE7RUFDN0QsSUFBSUQsT0FBQSxFQUFTO0lBQ1gsT0FBUUwsT0FBQSxDQUFnQjFCLEdBQUE7RUFDMUI7RUFHQTJCLE1BQUEsR0FBU0MsTUFBQSxDQUFPQyx3QkFBQSxDQUF5QkgsT0FBQSxFQUFTLEtBQUssR0FBR0ksR0FBQTtFQUMxREMsT0FBQSxHQUFVSixNQUFBLElBQVUsb0JBQW9CQSxNQUFBLElBQVVBLE1BQUEsQ0FBT0ssY0FBQTtFQUN6RCxJQUFJRCxPQUFBLEVBQVM7SUFDWCxPQUFRTCxPQUFBLENBQVE1QyxLQUFBLENBQXVDa0IsR0FBQTtFQUN6RDtFQUdBLE9BQVEwQixPQUFBLENBQVE1QyxLQUFBLENBQXVDa0IsR0FBQSxJQUFRMEIsT0FBQSxDQUFnQjFCLEdBQUE7QUFDakYiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9