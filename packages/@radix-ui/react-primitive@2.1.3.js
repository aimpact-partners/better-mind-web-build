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

// .beyond/uimport/temp/@radix-ui/react-primitive.2.1.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1wcmltaXRpdmUuMi4xLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByaW1pdGl2ZS9zcmMvcHJpbWl0aXZlLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9wcmltaXRpdmVfMl8xXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUHJpbWl0aXZlIiwiUm9vdCIsImRpc3BhdGNoRGlzY3JldGVDdXN0b21FdmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiUmVhY3RET00iLCJpbXBvcnRfcmVhY3Rfc2xvdCIsImltcG9ydF9qc3hfcnVudGltZSIsIk5PREVTIiwicmVkdWNlIiwicHJpbWl0aXZlIiwibm9kZSIsIlNsb3QiLCJjcmVhdGVTbG90IiwiTm9kZSIsImZvcndhcmRSZWYiLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsImFzQ2hpbGQiLCJwcmltaXRpdmVQcm9wcyIsIkNvbXAiLCJ3aW5kb3ciLCJTeW1ib2wiLCJmb3IiLCJqc3giLCJyZWYiLCJkaXNwbGF5TmFtZSIsInRhcmdldCIsImV2ZW50IiwiZmx1c2hTeW5jIiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw2QkFBQTtBQUFBQyxRQUFBLENBQUFELDZCQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLDJCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCw2QkFBQTs7O0FDQUEsSUFBQVEsS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLFFBQUEsR0FBMEJGLE9BQUEsQ0FBQUMsT0FBQTtBQUMxQixJQUFBRSxpQkFBQSxHQUEyQkYsT0FBQTtBQTRDaEIsSUFBQUcsa0JBQUEsR0FBQUgsT0FBQTtBQTFDWCxJQUFNSSxLQUFBLEdBQVEsQ0FDWixLQUNBLFVBQ0EsT0FDQSxRQUNBLE1BQ0EsTUFDQSxPQUNBLFNBQ0EsU0FDQSxNQUNBLE9BQ0EsTUFDQSxLQUNBLFVBQ0EsUUFDQSxPQUNBLEtBQ0Y7QUFjQSxJQUFNWixTQUFBLEdBQVlZLEtBQUEsQ0FBTUMsTUFBQSxDQUFPLENBQUNDLFNBQUEsRUFBV0MsSUFBQSxLQUFTO0VBQ2xELE1BQU1DLElBQUEsT0FBT04saUJBQUEsQ0FBQU8sVUFBQSxFQUFXLGFBQWFGLElBQUksRUFBRTtFQUMzQyxNQUFNRyxJQUFBLEdBQWFaLEtBQUEsQ0FBQWEsVUFBQSxDQUFXLENBQUNDLEtBQUEsRUFBMkNDLFlBQUEsS0FBc0I7SUFDOUYsTUFBTTtNQUFFQyxPQUFBO01BQVMsR0FBR0M7SUFBZSxJQUFJSCxLQUFBO0lBQ3ZDLE1BQU1JLElBQUEsR0FBWUYsT0FBQSxHQUFVTixJQUFBLEdBQU9ELElBQUE7SUFFbkMsSUFBSSxPQUFPVSxNQUFBLEtBQVcsYUFBYTtNQUNoQ0EsTUFBQSxDQUFlQyxNQUFBLENBQU9DLEdBQUEsQ0FBSSxVQUFVLENBQUMsSUFBSTtJQUM1QztJQUVBLE9BQU8sbUJBQUFoQixrQkFBQSxDQUFBaUIsR0FBQSxFQUFDSixJQUFBO01BQU0sR0FBR0QsY0FBQTtNQUFnQk0sR0FBQSxFQUFLUjtJQUFBLENBQWM7RUFDdEQsQ0FBQztFQUVESCxJQUFBLENBQUtZLFdBQUEsR0FBYyxhQUFhZixJQUFJO0VBRXBDLE9BQU87SUFBRSxHQUFHRCxTQUFBO0lBQVcsQ0FBQ0MsSUFBSSxHQUFHRztFQUFLO0FBQ3RDLEdBQUcsQ0FBQyxDQUFlO0FBMkNuQixTQUFTaEIsNEJBQW1ENkIsTUFBQSxFQUFxQkMsS0FBQSxFQUFVO0VBQ3pGLElBQUlELE1BQUEsRUFBaUJ0QixRQUFBLENBQUF3QixTQUFBLENBQVUsTUFBTUYsTUFBQSxDQUFPRyxhQUFBLENBQWNGLEtBQUssQ0FBQztBQUNsRTtBQUlBLElBQU0vQixJQUFBLEdBQU9ELFNBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9