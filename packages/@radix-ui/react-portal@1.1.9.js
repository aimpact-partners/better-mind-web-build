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

// .beyond/uimport/@radix-ui/react-portal.1.1.9.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtcG9ydGFsLjEuMS45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wb3J0YWwvc3JjL3BvcnRhbC50c3giXSwibmFtZXMiOlsicmVhY3RfcG9ydGFsXzFfMV85X2V4cG9ydHMiLCJfX2V4cG9ydCIsIlBvcnRhbCIsIlJvb3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9yZWFjdF9kb20iLCJpbXBvcnRfcmVhY3RfcHJpbWl0aXZlIiwiaW1wb3J0X3JlYWN0X3VzZV9sYXlvdXRfZWZmZWN0IiwiaW1wb3J0X2pzeF9ydW50aW1lIiwiUE9SVEFMX05BTUUiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJmb3J3YXJkZWRSZWYiLCJjb250YWluZXIiLCJjb250YWluZXJQcm9wIiwicG9ydGFsUHJvcHMiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInVzZVN0YXRlIiwidXNlTGF5b3V0RWZmZWN0IiwiZ2xvYmFsVGhpcyIsImRvY3VtZW50IiwiYm9keSIsImRlZmF1bHQiLCJjcmVhdGVQb3J0YWwiLCJqc3giLCJQcmltaXRpdmUiLCJkaXYiLCJyZWYiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwwQkFBQTtBQUFBQyxRQUFBLENBQUFELDBCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDBCQUFBOzs7QUNBQSxJQUFBTyxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFDdkIsSUFBQUMsZ0JBQUEsR0FBcUJGLE9BQUEsQ0FBQUMsT0FBQTtBQUNyQixJQUFBRSxzQkFBQSxHQUEwQkYsT0FBQTtBQUMxQixJQUFBRyw4QkFBQSxHQUFnQ0gsT0FBQTtBQXVCSixJQUFBSSxrQkFBQSxHQUFBSixPQUFBO0FBakI1QixJQUFNSyxXQUFBLEdBQWM7QUFXcEIsSUFBTVosTUFBQSxHQUFlSyxLQUFBLENBQUFRLFVBQUEsQ0FBdUMsQ0FBQ0MsS0FBQSxFQUFPQyxZQUFBLEtBQWlCO0VBQ25GLE1BQU07SUFBRUMsU0FBQSxFQUFXQyxhQUFBO0lBQWUsR0FBR0M7RUFBWSxJQUFJSixLQUFBO0VBQ3JELE1BQU0sQ0FBQ0ssT0FBQSxFQUFTQyxVQUFVLElBQVVmLEtBQUEsQ0FBQWdCLFFBQUEsQ0FBUyxLQUFLO0VBQ2xELElBQUFYLDhCQUFBLENBQUFZLGVBQUEsRUFBZ0IsTUFBTUYsVUFBQSxDQUFXLElBQUksR0FBRyxFQUFFO0VBQzFDLE1BQU1KLFNBQUEsR0FBWUMsYUFBQSxJQUFrQkUsT0FBQSxJQUFXSSxVQUFBLEVBQVlDLFFBQUEsRUFBVUMsSUFBQTtFQUNyRSxPQUFPVCxTQUFBLEdBQ0hSLGdCQUFBLENBQUFrQixPQUFBLENBQVNDLFlBQUEsQ0FBYSxtQkFBQWhCLGtCQUFBLENBQUFpQixHQUFBLEVBQUNuQixzQkFBQSxDQUFBb0IsU0FBQSxDQUFVQyxHQUFBLEVBQVY7SUFBZSxHQUFHWixXQUFBO0lBQWFhLEdBQUEsRUFBS2hCO0VBQUEsQ0FBYyxHQUFJQyxTQUFTLElBQ3RGO0FBQ04sQ0FBQztBQUVEaEIsTUFBQSxDQUFPZ0MsV0FBQSxHQUFjcEIsV0FBQTtBQUlyQixJQUFNWCxJQUFBLEdBQU9ELE1BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9