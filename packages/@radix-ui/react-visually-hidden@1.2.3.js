System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime","@radix-ui/react-slot@1.2.3","@radix-ui/react-primitive@2.1.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.3"],["@radix-ui/react-primitive","2.1.3"],["@radix-ui/react-visually-hidden","1.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('@radix-ui/react-slot@1.2.3', dep), dep => dependencies.set('@radix-ui/react-primitive@2.1.3', dep)],
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

// .beyond/uimport/@radix-ui/react-visually-hidden.1.2.3.js
var react_visually_hidden_1_2_3_exports = {};
__export(react_visually_hidden_1_2_3_exports, {
  Root: () => Root,
  VISUALLY_HIDDEN_STYLES: () => VISUALLY_HIDDEN_STYLES,
  VisuallyHidden: () => VisuallyHidden
});
module.exports = __toCommonJS(react_visually_hidden_1_2_3_exports);

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_primitive = require("@radix-ui/react-primitive@2.1.3");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var VISUALLY_HIDDEN_STYLES = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
});
var NAME = "VisuallyHidden";
var VisuallyHidden = React.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
    ...props,
    ref: forwardedRef,
    style: {
      ...VISUALLY_HIDDEN_STYLES,
      ...props.style
    }
  });
});
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtdmlzdWFsbHktaGlkZGVuLjEuMi4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC12aXN1YWxseS1oaWRkZW4vc3JjL3Zpc3VhbGx5LWhpZGRlbi50c3giXSwibmFtZXMiOlsicmVhY3RfdmlzdWFsbHlfaGlkZGVuXzFfMl8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlJvb3QiLCJWSVNVQUxMWV9ISURERU5fU1RZTEVTIiwiVmlzdWFsbHlIaWRkZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9yZWFjdF9wcmltaXRpdmUiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJPYmplY3QiLCJmcmVlemUiLCJwb3NpdGlvbiIsImJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpbiIsIm92ZXJmbG93IiwiY2xpcCIsIndoaXRlU3BhY2UiLCJ3b3JkV3JhcCIsIk5BTUUiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJmb3J3YXJkZWRSZWYiLCJqc3giLCJQcmltaXRpdmUiLCJzcGFuIiwicmVmIiwic3R5bGUiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQ0FBQTtBQUFBQyxRQUFBLENBQUFELG1DQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsbUNBQUE7OztBQ0FBLElBQUFRLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyxzQkFBQSxHQUEwQkQsT0FBQTtBQTZCcEIsSUFBQUUsa0JBQUEsR0FBQUYsT0FBQTtBQXZCTixJQUFNUCxzQkFBQSxHQUF5QlUsTUFBQSxDQUFPQyxNQUFBLENBQU87O0VBRTNDQyxRQUFBLEVBQVU7RUFDVkMsTUFBQSxFQUFRO0VBQ1JDLEtBQUEsRUFBTztFQUNQQyxNQUFBLEVBQVE7RUFDUkMsT0FBQSxFQUFTO0VBQ1RDLE1BQUEsRUFBUTtFQUNSQyxRQUFBLEVBQVU7RUFDVkMsSUFBQSxFQUFNO0VBQ05DLFVBQUEsRUFBWTtFQUNaQyxRQUFBLEVBQVU7QUFDWixDQUFDO0FBRUQsSUFBTUMsSUFBQSxHQUFPO0FBTWIsSUFBTXJCLGNBQUEsR0FBdUJJLEtBQUEsQ0FBQWtCLFVBQUEsQ0FDM0IsQ0FBQ0MsS0FBQSxFQUFPQyxZQUFBLEtBQWlCO0VBQ3ZCLE9BQ0UsbUJBQUFoQixrQkFBQSxDQUFBaUIsR0FBQSxFQUFDbEIsc0JBQUEsQ0FBQW1CLFNBQUEsQ0FBVUMsSUFBQSxFQUFWO0lBQ0UsR0FBR0osS0FBQTtJQUNKSyxHQUFBLEVBQUtKLFlBQUE7SUFDTEssS0FBQSxFQUFPO01BQUUsR0FBRzlCLHNCQUFBO01BQXdCLEdBQUd3QixLQUFBLENBQU1NO0lBQU07RUFBQSxDQUNyRDtBQUVKLENBQ0Y7QUFFQTdCLGNBQUEsQ0FBZThCLFdBQUEsR0FBY1QsSUFBQTtBQUk3QixJQUFNdkIsSUFBQSxHQUFPRSxjQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==