System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime","@radix-ui/react-slot@1.2.3","@radix-ui/react-primitive@2.1.3","@radix-ui/react-use-layout-effect@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.3"],["@radix-ui/react-primitive","2.1.3"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-portal","1.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('@radix-ui/react-slot@1.2.3', dep), dep => dependencies.set('@radix-ui/react-primitive@2.1.3', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-portal.1.1.9.js
var react_portal_1_1_9_exports = {};
__export(react_portal_1_1_9_exports, {
  Portal: () => Portal,
  Root: () => Root
});
module.exports = __toCommonJS(react_portal_1_1_9_exports);

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_dom = __toESM(require("react-dom@18.3.1"), 0);
var import_react_primitive = require("@radix-ui/react-primitive@2.1.3");
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var PORTAL_NAME = "Portal";
var Portal = React.forwardRef((props, forwardedRef) => {
  const {
    container: containerProp,
    ...portalProps
  } = props;
  const [mounted, setMounted] = React.useState(false);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => setMounted(true), []);
  const container = containerProp || mounted && globalThis?.document?.body;
  return container ? import_react_dom.default.createPortal(/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
    ...portalProps,
    ref: forwardedRef
  }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1wb3J0YWwuMS4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXBvcnRhbC9zcmMvcG9ydGFsLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9wb3J0YWxfMV8xXzlfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUG9ydGFsIiwiUm9vdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X2RvbSIsImltcG9ydF9yZWFjdF9wcmltaXRpdmUiLCJpbXBvcnRfcmVhY3RfdXNlX2xheW91dF9lZmZlY3QiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJQT1JUQUxfTkFNRSIsImZvcndhcmRSZWYiLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsImNvbnRhaW5lciIsImNvbnRhaW5lclByb3AiLCJwb3J0YWxQcm9wcyIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJib2R5IiwiZGVmYXVsdCIsImNyZWF0ZVBvcnRhbCIsImpzeCIsIlByaW1pdGl2ZSIsImRpdiIsInJlZiIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDBCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMEJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sMEJBQUE7OztBQ0FBLElBQUFPLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyxnQkFBQSxHQUFxQkYsT0FBQSxDQUFBQyxPQUFBO0FBQ3JCLElBQUFFLHNCQUFBLEdBQTBCRixPQUFBO0FBQzFCLElBQUFHLDhCQUFBLEdBQWdDSCxPQUFBO0FBdUJKLElBQUFJLGtCQUFBLEdBQUFKLE9BQUE7QUFqQjVCLElBQU1LLFdBQUEsR0FBYztBQVdwQixJQUFNWixNQUFBLEdBQWVLLEtBQUEsQ0FBQVEsVUFBQSxDQUF1QyxDQUFDQyxLQUFBLEVBQU9DLFlBQUEsS0FBaUI7RUFDbkYsTUFBTTtJQUFFQyxTQUFBLEVBQVdDLGFBQUE7SUFBZSxHQUFHQztFQUFZLElBQUlKLEtBQUE7RUFDckQsTUFBTSxDQUFDSyxPQUFBLEVBQVNDLFVBQVUsSUFBVWYsS0FBQSxDQUFBZ0IsUUFBQSxDQUFTLEtBQUs7RUFDbEQsSUFBQVgsOEJBQUEsQ0FBQVksZUFBQSxFQUFnQixNQUFNRixVQUFBLENBQVcsSUFBSSxHQUFHLEVBQUU7RUFDMUMsTUFBTUosU0FBQSxHQUFZQyxhQUFBLElBQWtCRSxPQUFBLElBQVdJLFVBQUEsRUFBWUMsUUFBQSxFQUFVQyxJQUFBO0VBQ3JFLE9BQU9ULFNBQUEsR0FDSFIsZ0JBQUEsQ0FBQWtCLE9BQUEsQ0FBU0MsWUFBQSxDQUFhLG1CQUFBaEIsa0JBQUEsQ0FBQWlCLEdBQUEsRUFBQ25CLHNCQUFBLENBQUFvQixTQUFBLENBQVVDLEdBQUEsRUFBVjtJQUFlLEdBQUdaLFdBQUE7SUFBYWEsR0FBQSxFQUFLaEI7RUFBQSxDQUFjLEdBQUlDLFNBQVMsSUFDdEY7QUFDTixDQUFDO0FBRURoQixNQUFBLENBQU9nQyxXQUFBLEdBQWNwQixXQUFBO0FBSXJCLElBQU1YLElBQUEsR0FBT0QsTUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=