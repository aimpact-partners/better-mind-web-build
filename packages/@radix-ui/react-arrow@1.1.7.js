System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime","@radix-ui/react-slot@1.2.3","@radix-ui/react-primitive@2.1.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.3"],["@radix-ui/react-primitive","2.1.3"],["@radix-ui/react-arrow","1.1.7"]]);
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

// .beyond/uimport/temp/@radix-ui/react-arrow.1.1.7.js
var react_arrow_1_1_7_exports = {};
__export(react_arrow_1_1_7_exports, {
  Arrow: () => Arrow,
  Root: () => Root
});
module.exports = __toCommonJS(react_arrow_1_1_7_exports);

// node_modules/@radix-ui/react-arrow/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_primitive = require("@radix-ui/react-primitive@2.1.3");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var NAME = "Arrow";
var Arrow = React.forwardRef((props, forwardedRef) => {
  const {
    children,
    width = 10,
    height = 5,
    ...arrowProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.svg, {
    ...arrowProps,
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: props.asChild ? children : /* @__PURE__ */(0, import_jsx_runtime.jsx)("polygon", {
      points: "0,0 30,0 15,10"
    })
  });
});
Arrow.displayName = NAME;
var Root = Arrow;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1hcnJvdy4xLjEuNy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtYXJyb3cvc3JjL2Fycm93LnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9hcnJvd18xXzFfN19leHBvcnRzIiwiX19leHBvcnQiLCJBcnJvdyIsIlJvb3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9yZWFjdF9wcmltaXRpdmUiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJOQU1FIiwiZm9yd2FyZFJlZiIsInByb3BzIiwiZm9yd2FyZGVkUmVmIiwiY2hpbGRyZW4iLCJ3aWR0aCIsImhlaWdodCIsImFycm93UHJvcHMiLCJqc3giLCJQcmltaXRpdmUiLCJzdmciLCJyZWYiLCJ2aWV3Qm94IiwicHJlc2VydmVBc3BlY3RSYXRpbyIsImFzQ2hpbGQiLCJwb2ludHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQTtBQUFBQyxRQUFBLENBQUFELHlCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHlCQUFBOzs7QUNBQSxJQUFBTyxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFDdkIsSUFBQUMsc0JBQUEsR0FBMEJELE9BQUE7QUF3QlEsSUFBQUUsa0JBQUEsR0FBQUYsT0FBQTtBQWxCbEMsSUFBTUcsSUFBQSxHQUFPO0FBTWIsSUFBTVYsS0FBQSxHQUFjSyxLQUFBLENBQUFNLFVBQUEsQ0FBcUMsQ0FBQ0MsS0FBQSxFQUFPQyxZQUFBLEtBQWlCO0VBQ2hGLE1BQU07SUFBRUMsUUFBQTtJQUFVQyxLQUFBLEdBQVE7SUFBSUMsTUFBQSxHQUFTO0lBQUcsR0FBR0M7RUFBVyxJQUFJTCxLQUFBO0VBQzVELE9BQ0UsbUJBQUFILGtCQUFBLENBQUFTLEdBQUEsRUFBQ1Ysc0JBQUEsQ0FBQVcsU0FBQSxDQUFVQyxHQUFBLEVBQVY7SUFDRSxHQUFHSCxVQUFBO0lBQ0pJLEdBQUEsRUFBS1IsWUFBQTtJQUNMRSxLQUFBO0lBQ0FDLE1BQUE7SUFDQU0sT0FBQSxFQUFRO0lBQ1JDLG1CQUFBLEVBQW9CO0lBR25CVCxRQUFBLEVBQUFGLEtBQUEsQ0FBTVksT0FBQSxHQUFVVixRQUFBLEdBQVcsbUJBQUFMLGtCQUFBLENBQUFTLEdBQUEsRUFBQztNQUFRTyxNQUFBLEVBQU87SUFBQSxDQUFpQjtFQUFBLENBQy9EO0FBRUosQ0FBQztBQUVEekIsS0FBQSxDQUFNMEIsV0FBQSxHQUFjaEIsSUFBQTtBQUlwQixJQUFNVCxJQUFBLEdBQU9ELEtBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9