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

// .beyond/uimport/@radix-ui/react-use-effect-event.0.0.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtdXNlLWVmZmVjdC1ldmVudC4wLjAuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWVmZmVjdC1ldmVudC9zcmMvdXNlLWVmZmVjdC1ldmVudC50c3giXSwibmFtZXMiOlsicmVhY3RfdXNlX2VmZmVjdF9ldmVudF8wXzBfMl9leHBvcnRzIiwiX19leHBvcnQiLCJ1c2VFZmZlY3RFdmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcmVhY3RfdXNlX2xheW91dF9lZmZlY3QiLCJyZXF1aXJlIiwiUmVhY3QiLCJfX3RvRVNNIiwidXNlUmVhY3RFZmZlY3RFdmVudCIsInRyaW0iLCJ0b1N0cmluZyIsInVzZVJlYWN0SW5zZXJ0aW9uRWZmZWN0IiwiY2FsbGJhY2siLCJyZWYiLCJ1c2VSZWYiLCJFcnJvciIsImN1cnJlbnQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VNZW1vIiwiYXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQ0FBQTtBQUFBQyxRQUFBLENBQUFELG9DQUFBO0VBQUFFLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLG9DQUFBOzs7QUNDQSxJQUFBTSw4QkFBQSxHQUFnQ0MsT0FBQTtBQUNoQyxJQUFBQyxLQUFBLEdBQXVCQyxPQUFBLENBQUFGLE9BQUE7QUFLdkIsSUFBTUcsbUJBQUEsR0FBdUJGLEtBQUEsQ0FBYyxtQkFBbUJHLElBQUEsQ0FBSyxFQUFFQyxRQUFBLENBQVMsQ0FBQztBQUMvRSxJQUFNQyx1QkFBQSxHQUEyQkwsS0FBQSxDQUFjLHVCQUF1QkcsSUFBQSxDQUFLLEVBQUVDLFFBQUEsQ0FBUyxDQUFDO0FBTWhGLFNBQVNWLGVBQXNDWSxRQUFBLEVBQWlCO0VBQ3JFLElBQUksT0FBT0osbUJBQUEsS0FBd0IsWUFBWTtJQUM3QyxPQUFPQSxtQkFBQSxDQUFvQkksUUFBUTtFQUNyQztFQUVBLE1BQU1DLEdBQUEsR0FBWVAsS0FBQSxDQUFBUSxNQUFBLENBQWdDLE1BQU07SUFDdEQsTUFBTSxJQUFJQyxLQUFBLENBQU0sK0NBQStDO0VBQ2pFLENBQUM7RUFFRCxJQUFJLE9BQU9KLHVCQUFBLEtBQTRCLFlBQVk7SUFDakRBLHVCQUFBLENBQXdCLE1BQU07TUFDNUJFLEdBQUEsQ0FBSUcsT0FBQSxHQUFVSixRQUFBO0lBQ2hCLENBQUM7RUFDSCxPQUFPO0lBQ0wsSUFBQVIsOEJBQUEsQ0FBQWEsZUFBQSxFQUFnQixNQUFNO01BQ3BCSixHQUFBLENBQUlHLE9BQUEsR0FBVUosUUFBQTtJQUNoQixDQUFDO0VBQ0g7RUFHQSxPQUFhTixLQUFBLENBQUFZLE9BQUEsQ0FBUSxNQUFPLElBQUlDLElBQUEsS0FBU04sR0FBQSxDQUFJRyxPQUFBLEdBQVUsR0FBR0csSUFBSSxHQUFTLEVBQUU7QUFDM0UiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9