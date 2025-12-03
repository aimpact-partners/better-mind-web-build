System.register(["react@18.3.1","@radix-ui/react-use-layout-effect@1.1.1","@radix-ui/react-use-effect-event@0.0.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-use-effect-event","0.0.2"],["@radix-ui/react-use-controllable-state","1.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep), dep => dependencies.set('@radix-ui/react-use-effect-event@0.0.2', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-use-controllable-state.1.2.2.js
var react_use_controllable_state_1_2_2_exports = {};
__export(react_use_controllable_state_1_2_2_exports, {
  useControllableState: () => useControllableState,
  useControllableStateReducer: () => useControllableStateReducer
});
module.exports = __toCommonJS(react_use_controllable_state_1_2_2_exports);

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var React2 = __toESM(require("react@18.3.1"), 0);
var import_react_use_effect_event = require("@radix-ui/react-use-effect-event@0.0.2");
var useInsertionEffect = React[" useInsertionEffect ".trim().toString()] || import_react_use_layout_effect.useLayoutEffect;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {},
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React.useRef(prop !== void 0);
    React.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React.useCallback(nextValue => {
    if (isControlled) {
      const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
      if (value2 !== prop) {
        onChangeRef.current?.(value2);
      }
    } else {
      setUncontrolledProp(nextValue);
    }
  }, [isControlled, prop, setUncontrolledProp, onChangeRef]);
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React.useState(defaultProp);
  const prevValueRef = React.useRef(value);
  const onChangeRef = React.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
  const {
    prop: controlledState,
    defaultProp,
    onChange: onChangeProp,
    caller
  } = userArgs;
  const isControlled = controlledState !== void 0;
  const onChange = (0, import_react_use_effect_event.useEffectEvent)(onChangeProp);
  if (true) {
    const isControlledRef = React2.useRef(controlledState !== void 0);
    React2.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const args = [{
    ...initialArg,
    state: defaultProp
  }];
  if (init) {
    args.push(init);
  }
  const [internalState, dispatch] = React2.useReducer((state2, action) => {
    if (action.type === SYNC_STATE) {
      return {
        ...state2,
        state: action.state
      };
    }
    const next = reducer(state2, action);
    if (isControlled && !Object.is(next.state, state2.state)) {
      onChange(next.state);
    }
    return next;
  }, ...args);
  const uncontrolledState = internalState.state;
  const prevValueRef = React2.useRef(uncontrolledState);
  React2.useEffect(() => {
    if (prevValueRef.current !== uncontrolledState) {
      prevValueRef.current = uncontrolledState;
      if (!isControlled) {
        onChange(uncontrolledState);
      }
    }
  }, [onChange, uncontrolledState, prevValueRef, isControlled]);
  const state = React2.useMemo(() => {
    const isControlled2 = controlledState !== void 0;
    if (isControlled2) {
      return {
        ...internalState,
        state: controlledState
      };
    }
    return internalState;
  }, [internalState, controlledState]);
  React2.useEffect(() => {
    if (isControlled && !Object.is(controlledState, internalState.state)) {
      dispatch({
        type: SYNC_STATE,
        state: controlledState
      });
    }
  }, [controlledState, internalState.state, isControlled]);
  return [state, dispatch];
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2UtY29udHJvbGxhYmxlLXN0YXRlLjEuMi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtY29udHJvbGxhYmxlLXN0YXRlL3NyYy91c2UtY29udHJvbGxhYmxlLXN0YXRlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9zcmMvdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS1yZWR1Y2VyLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2VfY29udHJvbGxhYmxlX3N0YXRlXzFfMl8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsInVzZUNvbnRyb2xsYWJsZVN0YXRlIiwidXNlQ29udHJvbGxhYmxlU3RhdGVSZWR1Y2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3RfdXNlX2xheW91dF9lZmZlY3QiLCJSZWFjdDIiLCJpbXBvcnRfcmVhY3RfdXNlX2VmZmVjdF9ldmVudCIsInVzZUluc2VydGlvbkVmZmVjdCIsInRyaW0iLCJ0b1N0cmluZyIsInVzZUxheW91dEVmZmVjdCIsInByb3AiLCJkZWZhdWx0UHJvcCIsIm9uQ2hhbmdlIiwiY2FsbGVyIiwidW5jb250cm9sbGVkUHJvcCIsInNldFVuY29udHJvbGxlZFByb3AiLCJvbkNoYW5nZVJlZiIsInVzZVVuY29udHJvbGxlZFN0YXRlIiwiaXNDb250cm9sbGVkIiwidmFsdWUiLCJpc0NvbnRyb2xsZWRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3YXNDb250cm9sbGVkIiwiY3VycmVudCIsImZyb20iLCJ0byIsImNvbnNvbGUiLCJ3YXJuIiwic2V0VmFsdWUiLCJ1c2VDYWxsYmFjayIsIm5leHRWYWx1ZSIsInZhbHVlMiIsImlzRnVuY3Rpb24iLCJ1c2VTdGF0ZSIsInByZXZWYWx1ZVJlZiIsIlNZTkNfU1RBVEUiLCJTeW1ib2wiLCJyZWR1Y2VyIiwidXNlckFyZ3MiLCJpbml0aWFsQXJnIiwiaW5pdCIsImNvbnRyb2xsZWRTdGF0ZSIsIm9uQ2hhbmdlUHJvcCIsInVzZUVmZmVjdEV2ZW50IiwiYXJncyIsInN0YXRlIiwicHVzaCIsImludGVybmFsU3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJzdGF0ZTIiLCJhY3Rpb24iLCJ0eXBlIiwibmV4dCIsIk9iamVjdCIsImlzIiwidW5jb250cm9sbGVkU3RhdGUiLCJ1c2VNZW1vIiwiaXNDb250cm9sbGVkMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwwQ0FBQTtBQUFBQyxRQUFBLENBQUFELDBDQUFBO0VBQUFFLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsMkJBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDBDQUFBOzs7QUNBQSxJQUFBTyxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFDdkIsSUFBQUMsOEJBQUEsR0FBZ0NELE9BQUE7QUNEaEMsSUFBQUUsTUFBQSxHQUF1QkgsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFHLDZCQUFBLEdBQStCSCxPQUFBO0FERy9CLElBQU1JLGtCQUFBLEdBQ0hOLEtBQUEsQ0FBYyx1QkFBdUJPLElBQUEsQ0FBSyxFQUFFQyxRQUFBLENBQVMsQ0FBQyxLQUFLTCw4QkFBQSxDQUFBTSxlQUFBO0FBWXZELFNBQVNkLHFCQUF3QjtFQUN0Q2UsSUFBQTtFQUNBQyxXQUFBO0VBQ0FDLFFBQUEsR0FBV0EsQ0FBQSxLQUFNLENBQUM7RUFDbEJDO0FBQ0YsR0FBc0Q7RUFDcEQsTUFBTSxDQUFDQyxnQkFBQSxFQUFrQkMsbUJBQUEsRUFBcUJDLFdBQVcsSUFBSUMsb0JBQUEsQ0FBcUI7SUFD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