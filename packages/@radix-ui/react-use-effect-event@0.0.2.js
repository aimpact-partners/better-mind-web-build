System.register(["react@18.3.1","@radix-ui/react-use-layout-effect@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-use-effect-event","0.0.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-use-effect-event.0.0.2.js
var react_use_effect_event_0_0_2_exports = {};
__export(react_use_effect_event_0_0_2_exports, {
  useEffectEvent: () => useEffectEvent
});
module.exports = __toCommonJS(react_use_effect_event_0_0_2_exports);

// node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var React = __toESM(require("react@18.3.1"), 0);
var useReactEffectEvent = React[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = React[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
  if (typeof useReactEffectEvent === "function") {
    return useReactEffectEvent(callback);
  }
  const ref = React.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  if (typeof useReactInsertionEffect === "function") {
    useReactInsertionEffect(() => {
      ref.current = callback;
    });
  } else {
    (0, import_react_use_layout_effect.useLayoutEffect)(() => {
      ref.current = callback;
    });
  }
  return React.useMemo(() => (...args) => ref.current?.(...args), []);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2UtZWZmZWN0LWV2ZW50LjAuMC4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtZWZmZWN0LWV2ZW50L3NyYy91c2UtZWZmZWN0LWV2ZW50LnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2VfZWZmZWN0X2V2ZW50XzBfMF8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsInVzZUVmZmVjdEV2ZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yZWFjdF91c2VfbGF5b3V0X2VmZmVjdCIsInJlcXVpcmUiLCJSZWFjdCIsIl9fdG9FU00iLCJ1c2VSZWFjdEVmZmVjdEV2ZW50IiwidHJpbSIsInRvU3RyaW5nIiwidXNlUmVhY3RJbnNlcnRpb25FZmZlY3QiLCJjYWxsYmFjayIsInJlZiIsInVzZVJlZiIsIkVycm9yIiwiY3VycmVudCIsInVzZUxheW91dEVmZmVjdCIsInVzZU1lbW8iLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9DQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0NBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsb0NBQUE7OztBQ0NBLElBQUFNLDhCQUFBLEdBQWdDQyxPQUFBO0FBQ2hDLElBQUFDLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUYsT0FBQTtBQUt2QixJQUFNRyxtQkFBQSxHQUF1QkYsS0FBQSxDQUFjLG1CQUFtQkcsSUFBQSxDQUFLLEVBQUVDLFFBQUEsQ0FBUyxDQUFDO0FBQy9FLElBQU1DLHVCQUFBLEdBQTJCTCxLQUFBLENBQWMsdUJBQXVCRyxJQUFBLENBQUssRUFBRUMsUUFBQSxDQUFTLENBQUM7QUFNaEYsU0FBU1YsZUFBc0NZLFFBQUEsRUFBaUI7RUFDckUsSUFBSSxPQUFPSixtQkFBQSxLQUF3QixZQUFZO0lBQzdDLE9BQU9BLG1CQUFBLENBQW9CSSxRQUFRO0VBQ3JDO0VBRUEsTUFBTUMsR0FBQSxHQUFZUCxLQUFBLENBQUFRLE1BQUEsQ0FBZ0MsTUFBTTtJQUN0RCxNQUFNLElBQUlDLEtBQUEsQ0FBTSwrQ0FBK0M7RUFDakUsQ0FBQztFQUVELElBQUksT0FBT0osdUJBQUEsS0FBNEIsWUFBWTtJQUNqREEsdUJBQUEsQ0FBd0IsTUFBTTtNQUM1QkUsR0FBQSxDQUFJRyxPQUFBLEdBQVVKLFFBQUE7SUFDaEIsQ0FBQztFQUNILE9BQU87SUFDTCxJQUFBUiw4QkFBQSxDQUFBYSxlQUFBLEVBQWdCLE1BQU07TUFDcEJKLEdBQUEsQ0FBSUcsT0FBQSxHQUFVSixRQUFBO0lBQ2hCLENBQUM7RUFDSDtFQUdBLE9BQWFOLEtBQUEsQ0FBQVksT0FBQSxDQUFRLE1BQU8sSUFBSUMsSUFBQSxLQUFTTixHQUFBLENBQUlHLE9BQUEsR0FBVSxHQUFHRyxJQUFJLEdBQVMsRUFBRTtBQUMzRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=