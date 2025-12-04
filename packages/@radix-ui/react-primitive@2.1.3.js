System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime","@radix-ui/react-slot@1.2.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.3"],["@radix-ui/react-primitive","2.1.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('@radix-ui/react-slot@1.2.3', dep)],
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

// .beyond/uimport/@radix-ui/react-primitive.2.1.3.js
var react_primitive_2_1_3_exports = {};
__export(react_primitive_2_1_3_exports, {
  Primitive: () => Primitive,
  Root: () => Root,
  dispatchDiscreteCustomEvent: () => dispatchDiscreteCustomEvent
});
module.exports = __toCommonJS(react_primitive_2_1_3_exports);

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var ReactDOM = __toESM(require("react-dom@18.3.1"), 0);
var import_react_slot = require("@radix-ui/react-slot@1.2.3");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var NODES = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = (0, import_react_slot.createSlot)(`Primitive.${node}`);
  const Node = React.forwardRef((props, forwardedRef) => {
    const {
      asChild,
      ...primitiveProps
    } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Comp, {
      ...primitiveProps,
      ref: forwardedRef
    });
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
var Root = Primitive;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtcHJpbWl0aXZlLjIuMS4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wcmltaXRpdmUvc3JjL3ByaW1pdGl2ZS50c3giXSwibmFtZXMiOlsicmVhY3RfcHJpbWl0aXZlXzJfMV8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlByaW1pdGl2ZSIsIlJvb3QiLCJkaXNwYXRjaERpc2NyZXRlQ3VzdG9tRXZlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiaW1wb3J0X3JlYWN0X3Nsb3QiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJOT0RFUyIsInJlZHVjZSIsInByaW1pdGl2ZSIsIm5vZGUiLCJTbG90IiwiY3JlYXRlU2xvdCIsIk5vZGUiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJmb3J3YXJkZWRSZWYiLCJhc0NoaWxkIiwicHJpbWl0aXZlUHJvcHMiLCJDb21wIiwid2luZG93IiwiU3ltYm9sIiwiZm9yIiwianN4IiwicmVmIiwiZGlzcGxheU5hbWUiLCJ0YXJnZXQiLCJldmVudCIsImZsdXNoU3luYyIsImRpc3BhdGNoRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNkJBQUE7QUFBQUMsUUFBQSxDQUFBRCw2QkFBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQywyQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsNkJBQUE7OztBQ0FBLElBQUFRLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyxRQUFBLEdBQTBCRixPQUFBLENBQUFDLE9BQUE7QUFDMUIsSUFBQUUsaUJBQUEsR0FBMkJGLE9BQUE7QUE0Q2hCLElBQUFHLGtCQUFBLEdBQUFILE9BQUE7QUExQ1gsSUFBTUksS0FBQSxHQUFRLENBQ1osS0FDQSxVQUNBLE9BQ0EsUUFDQSxNQUNBLE1BQ0EsT0FDQSxTQUNBLFNBQ0EsTUFDQSxPQUNBLE1BQ0EsS0FDQSxVQUNBLFFBQ0EsT0FDQSxLQUNGO0FBY0EsSUFBTVosU0FBQSxHQUFZWSxLQUFBLENBQU1DLE1BQUEsQ0FBTyxDQUFDQyxTQUFBLEVBQVdDLElBQUEsS0FBUztFQUNsRCxNQUFNQyxJQUFBLE9BQU9OLGlCQUFBLENBQUFPLFVBQUEsRUFBVyxhQUFhRixJQUFJLEVBQUU7RUFDM0MsTUFBTUcsSUFBQSxHQUFhWixLQUFBLENBQUFhLFVBQUEsQ0FBVyxDQUFDQyxLQUFBLEVBQTJDQyxZQUFBLEtBQXNCO0lBQzlGLE1BQU07TUFBRUMsT0FBQTtNQUFTLEdBQUdDO0lBQWUsSUFBSUgsS0FBQTtJQUN2QyxNQUFNSSxJQUFBLEdBQVlGLE9BQUEsR0FBVU4sSUFBQSxHQUFPRCxJQUFBO0lBRW5DLElBQUksT0FBT1UsTUFBQSxLQUFXLGFBQWE7TUFDaENBLE1BQUEsQ0FBZUMsTUFBQSxDQUFPQyxHQUFBLENBQUksVUFBVSxDQUFDLElBQUk7SUFDNUM7SUFFQSxPQUFPLG1CQUFBaEIsa0JBQUEsQ0FBQWlCLEdBQUEsRUFBQ0osSUFBQTtNQUFNLEdBQUdELGNBQUE7TUFBZ0JNLEdBQUEsRUFBS1I7SUFBQSxDQUFjO0VBQ3RELENBQUM7RUFFREgsSUFBQSxDQUFLWSxXQUFBLEdBQWMsYUFBYWYsSUFBSTtFQUVwQyxPQUFPO0lBQUUsR0FBR0QsU0FBQTtJQUFXLENBQUNDLElBQUksR0FBR0c7RUFBSztBQUN0QyxHQUFHLENBQUMsQ0FBZTtBQTJDbkIsU0FBU2hCLDRCQUFtRDZCLE1BQUEsRUFBcUJDLEtBQUEsRUFBVTtFQUN6RixJQUFJRCxNQUFBLEVBQWlCdEIsUUFBQSxDQUFBd0IsU0FBQSxDQUFVLE1BQU1GLE1BQUEsQ0FBT0csYUFBQSxDQUFjRixLQUFLLENBQUM7QUFDbEU7QUFJQSxJQUFNL0IsSUFBQSxHQUFPRCxTQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==