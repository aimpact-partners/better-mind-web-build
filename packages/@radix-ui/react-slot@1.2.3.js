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

// .beyond/uimport/@radix-ui/react-slot.1.2.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3Qtc2xvdC4xLjIuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3Qtc2xvdC9zcmMvc2xvdC50c3giXSwibmFtZXMiOlsicmVhY3Rfc2xvdF8xXzJfM19leHBvcnRzIiwiX19leHBvcnQiLCJSb290IiwiU2xvdCIsIlNsb3R0YWJsZSIsImNyZWF0ZVNsb3QiLCJjcmVhdGVTbG90dGFibGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9yZWFjdF9jb21wb3NlX3JlZnMiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJvd25lck5hbWUiLCJTbG90Q2xvbmUiLCJjcmVhdGVTbG90Q2xvbmUiLCJTbG90MiIsImZvcndhcmRSZWYiLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsImNoaWxkcmVuIiwic2xvdFByb3BzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsInNsb3R0YWJsZSIsImZpbmQiLCJpc1Nsb3R0YWJsZSIsIm5ld0VsZW1lbnQiLCJuZXdDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiY291bnQiLCJvbmx5IiwiaXNWYWxpZEVsZW1lbnQiLCJqc3giLCJyZWYiLCJjbG9uZUVsZW1lbnQiLCJkaXNwbGF5TmFtZSIsImNoaWxkcmVuUmVmIiwiZ2V0RWxlbWVudFJlZiIsInByb3BzMiIsIm1lcmdlUHJvcHMiLCJ0eXBlIiwiRnJhZ21lbnQiLCJjb21wb3NlUmVmcyIsIlNMT1RUQUJMRV9JREVOVElGSUVSIiwiU3ltYm9sIiwiU2xvdHRhYmxlMiIsIl9fcmFkaXhJZCIsImNoaWxkUHJvcHMiLCJvdmVycmlkZVByb3BzIiwicHJvcE5hbWUiLCJzbG90UHJvcFZhbHVlIiwiY2hpbGRQcm9wVmFsdWUiLCJpc0hhbmRsZXIiLCJ0ZXN0IiwiYXJncyIsInJlc3VsdCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZWxlbWVudCIsImdldHRlciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsIm1heVdhcm4iLCJpc1JlYWN0V2FybmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQTtBQUFBQyxRQUFBLENBQUFELHdCQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxJQUFBO0VBQUFBLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULHdCQUFBOzs7QUNBQSxJQUFBVSxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFDdkIsSUFBQUMseUJBQUEsR0FBNEJELE9BQUE7QUFtQ3BCLElBQUFFLGtCQUFBLEdBQUFGLE9BQUE7O0FBekIwQixTQUFTUCxXQUFXVSxTQUFBLEVBQW1CO0VBQ3ZFLE1BQU1DLFNBQUEsR0FBWSxlQUFBQyxlQUFBLENBQWdCRixTQUFTO0VBQzNDLE1BQU1HLEtBQUEsR0FBYVIsS0FBQSxDQUFBUyxVQUFBLENBQW1DLENBQUNDLEtBQUEsRUFBT0MsWUFBQSxLQUFpQjtJQUM3RSxNQUFNO01BQUVDLFFBQUE7TUFBVSxHQUFHQztJQUFVLElBQUlILEtBQUE7SUFDbkMsTUFBTUksYUFBQSxHQUFzQmQsS0FBQSxDQUFBZSxRQUFBLENBQVNDLE9BQUEsQ0FBUUosUUFBUTtJQUNyRCxNQUFNSyxTQUFBLEdBQVlILGFBQUEsQ0FBY0ksSUFBQSxDQUFLQyxXQUFXO0lBRWhELElBQUlGLFNBQUEsRUFBVztNQUViLE1BQU1HLFVBQUEsR0FBYUgsU0FBQSxDQUFVUCxLQUFBLENBQU1FLFFBQUE7TUFFbkMsTUFBTVMsV0FBQSxHQUFjUCxhQUFBLENBQWNRLEdBQUEsQ0FBS0MsS0FBQSxJQUFVO1FBQy9DLElBQUlBLEtBQUEsS0FBVU4sU0FBQSxFQUFXO1VBR3ZCLElBQVVqQixLQUFBLENBQUFlLFFBQUEsQ0FBU1MsS0FBQSxDQUFNSixVQUFVLElBQUksR0FBRyxPQUFhcEIsS0FBQSxDQUFBZSxRQUFBLENBQVNVLElBQUEsQ0FBSyxJQUFJO1VBQ3pFLE9BQWF6QixLQUFBLENBQUEwQixjQUFBLENBQWVOLFVBQVUsSUFDakNBLFVBQUEsQ0FBV1YsS0FBQSxDQUF3Q0UsUUFBQSxHQUNwRDtRQUNOLE9BQU87VUFDTCxPQUFPVyxLQUFBO1FBQ1Q7TUFDRixDQUFDO01BRUQsT0FDRSxtQkFBQW5CLGtCQUFBLENBQUF1QixHQUFBLEVBQUNyQixTQUFBO1FBQVcsR0FBR08sU0FBQTtRQUFXZSxHQUFBLEVBQUtqQixZQUFBO1FBQzVCQyxRQUFBLEVBQU1aLEtBQUEsQ0FBQTBCLGNBQUEsQ0FBZU4sVUFBVSxJQUN0QnBCLEtBQUEsQ0FBQTZCLFlBQUEsQ0FBYVQsVUFBQSxFQUFZLFFBQVdDLFdBQVcsSUFDckQ7TUFBQSxDQUNOO0lBRUo7SUFFQSxPQUNFLG1CQUFBakIsa0JBQUEsQ0FBQXVCLEdBQUEsRUFBQ3JCLFNBQUE7TUFBVyxHQUFHTyxTQUFBO01BQVdlLEdBQUEsRUFBS2pCLFlBQUE7TUFDNUJDO0lBQUEsQ0FDSDtFQUVKLENBQUM7RUFFREosS0FBQSxDQUFLc0IsV0FBQSxHQUFjLEdBQUd6QixTQUFTO0VBQy9CLE9BQU9HLEtBQUE7QUFDVDtBQUVBLElBQU1mLElBQUEsR0FBTyxlQUFBRSxVQUFBLENBQVcsTUFBTTs7QUFVSCxTQUFTWSxnQkFBZ0JGLFNBQUEsRUFBbUI7RUFDckUsTUFBTUMsU0FBQSxHQUFrQk4sS0FBQSxDQUFBUyxVQUFBLENBQWdDLENBQUNDLEtBQUEsRUFBT0MsWUFBQSxLQUFpQjtJQUMvRSxNQUFNO01BQUVDLFFBQUE7TUFBVSxHQUFHQztJQUFVLElBQUlILEtBQUE7SUFFbkMsSUFBVVYsS0FBQSxDQUFBMEIsY0FBQSxDQUFlZCxRQUFRLEdBQUc7TUFDbEMsTUFBTW1CLFdBQUEsR0FBY0MsYUFBQSxDQUFjcEIsUUFBUTtNQUMxQyxNQUFNcUIsTUFBQSxHQUFRQyxVQUFBLENBQVdyQixTQUFBLEVBQVdELFFBQUEsQ0FBU0YsS0FBaUI7TUFFOUQsSUFBSUUsUUFBQSxDQUFTdUIsSUFBQSxLQUFlbkMsS0FBQSxDQUFBb0MsUUFBQSxFQUFVO1FBQ3BDSCxNQUFBLENBQU1MLEdBQUEsR0FBTWpCLFlBQUEsT0FBZVIseUJBQUEsQ0FBQWtDLFdBQUEsRUFBWTFCLFlBQUEsRUFBY29CLFdBQVcsSUFBSUEsV0FBQTtNQUN0RTtNQUNBLE9BQWEvQixLQUFBLENBQUE2QixZQUFBLENBQWFqQixRQUFBLEVBQVVxQixNQUFLO0lBQzNDO0lBRUEsT0FBYWpDLEtBQUEsQ0FBQWUsUUFBQSxDQUFTUyxLQUFBLENBQU1aLFFBQVEsSUFBSSxJQUFVWixLQUFBLENBQUFlLFFBQUEsQ0FBU1UsSUFBQSxDQUFLLElBQUksSUFBSTtFQUMxRSxDQUFDO0VBRURuQixTQUFBLENBQVV3QixXQUFBLEdBQWMsR0FBR3pCLFNBQVM7RUFDcEMsT0FBT0MsU0FBQTtBQUNUO0FBTUEsSUFBTWdDLG9CQUFBLEdBQXVCQyxNQUFBLENBQU8saUJBQWlCOztBQVVuQixTQUFTM0MsZ0JBQWdCUyxTQUFBLEVBQW1CO0VBQzVFLE1BQU1tQyxVQUFBLEdBQWdDOUMsQ0FBQztJQUFFa0I7RUFBUyxNQUFNO0lBQ3RELE9BQU8sbUJBQUFSLGtCQUFBLENBQUF1QixHQUFBLEVBQUF2QixrQkFBQSxDQUFBZ0MsUUFBQTtNQUFHeEI7SUFBQSxDQUFTO0VBQ3JCO0VBQ0E0QixVQUFBLENBQVVWLFdBQUEsR0FBYyxHQUFHekIsU0FBUztFQUNwQ21DLFVBQUEsQ0FBVUMsU0FBQSxHQUFZSCxvQkFBQTtFQUN0QixPQUFPRSxVQUFBO0FBQ1Q7QUFFQSxJQUFNOUMsU0FBQSxHQUFZLGVBQUFFLGVBQUEsQ0FBZ0IsV0FBVztBQU03QyxTQUFTdUIsWUFDUEksS0FBQSxFQUMrRDtFQUMvRCxPQUNRdkIsS0FBQSxDQUFBMEIsY0FBQSxDQUFlSCxLQUFLLEtBQzFCLE9BQU9BLEtBQUEsQ0FBTVksSUFBQSxLQUFTLGNBQ3RCLGVBQWVaLEtBQUEsQ0FBTVksSUFBQSxJQUNyQlosS0FBQSxDQUFNWSxJQUFBLENBQUtNLFNBQUEsS0FBY0gsb0JBQUE7QUFFN0I7QUFFQSxTQUFTSixXQUFXckIsU0FBQSxFQUFxQjZCLFVBQUEsRUFBc0I7RUFFN0QsTUFBTUMsYUFBQSxHQUFnQjtJQUFFLEdBQUdEO0VBQVc7RUFFdEMsV0FBV0UsUUFBQSxJQUFZRixVQUFBLEVBQVk7SUFDakMsTUFBTUcsYUFBQSxHQUFnQmhDLFNBQUEsQ0FBVStCLFFBQVE7SUFDeEMsTUFBTUUsY0FBQSxHQUFpQkosVUFBQSxDQUFXRSxRQUFRO0lBRTFDLE1BQU1HLFNBQUEsR0FBWSxXQUFXQyxJQUFBLENBQUtKLFFBQVE7SUFDMUMsSUFBSUcsU0FBQSxFQUFXO01BRWIsSUFBSUYsYUFBQSxJQUFpQkMsY0FBQSxFQUFnQjtRQUNuQ0gsYUFBQSxDQUFjQyxRQUFRLElBQUksSUFBSUssSUFBQSxLQUFvQjtVQUNoRCxNQUFNQyxNQUFBLEdBQVNKLGNBQUEsQ0FBZSxHQUFHRyxJQUFJO1VBQ3JDSixhQUFBLENBQWMsR0FBR0ksSUFBSTtVQUNyQixPQUFPQyxNQUFBO1FBQ1Q7TUFDRixXQUVTTCxhQUFBLEVBQWU7UUFDdEJGLGFBQUEsQ0FBY0MsUUFBUSxJQUFJQyxhQUFBO01BQzVCO0lBQ0YsV0FFU0QsUUFBQSxLQUFhLFNBQVM7TUFDN0JELGFBQUEsQ0FBY0MsUUFBUSxJQUFJO1FBQUUsR0FBR0MsYUFBQTtRQUFlLEdBQUdDO01BQWU7SUFDbEUsV0FBV0YsUUFBQSxLQUFhLGFBQWE7TUFDbkNELGFBQUEsQ0FBY0MsUUFBUSxJQUFJLENBQUNDLGFBQUEsRUFBZUMsY0FBYyxFQUFFSyxNQUFBLENBQU9DLE9BQU8sRUFBRUMsSUFBQSxDQUFLLEdBQUc7SUFDcEY7RUFDRjtFQUVBLE9BQU87SUFBRSxHQUFHeEMsU0FBQTtJQUFXLEdBQUc4QjtFQUFjO0FBQzFDO0FBT0EsU0FBU1gsY0FBY3NCLE9BQUEsRUFBNkI7RUFFbEQsSUFBSUMsTUFBQSxHQUFTQyxNQUFBLENBQU9DLHdCQUFBLENBQXlCSCxPQUFBLENBQVE1QyxLQUFBLEVBQU8sS0FBSyxHQUFHZ0QsR0FBQTtFQUNwRSxJQUFJQyxPQUFBLEdBQVVKLE1BQUEsSUFBVSxvQkFBb0JBLE1BQUEsSUFBVUEsTUFBQSxDQUFPSyxjQUFBO0VBQzdELElBQUlELE9BQUEsRUFBUztJQUNYLE9BQVFMLE9BQUEsQ0FBZ0IxQixHQUFBO0VBQzFCO0VBR0EyQixNQUFBLEdBQVNDLE1BQUEsQ0FBT0Msd0JBQUEsQ0FBeUJILE9BQUEsRUFBUyxLQUFLLEdBQUdJLEdBQUE7RUFDMURDLE9BQUEsR0FBVUosTUFBQSxJQUFVLG9CQUFvQkEsTUFBQSxJQUFVQSxNQUFBLENBQU9LLGNBQUE7RUFDekQsSUFBSUQsT0FBQSxFQUFTO0lBQ1gsT0FBUUwsT0FBQSxDQUFRNUMsS0FBQSxDQUF1Q2tCLEdBQUE7RUFDekQ7RUFHQSxPQUFRMEIsT0FBQSxDQUFRNUMsS0FBQSxDQUF1Q2tCLEdBQUEsSUFBUTBCLE9BQUEsQ0FBZ0IxQixHQUFBO0FBQ2pGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==