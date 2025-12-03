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

// .beyond/uimport/temp/@radix-ui/react-visually-hidden.1.2.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC12aXN1YWxseS1oaWRkZW4uMS4yLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXZpc3VhbGx5LWhpZGRlbi9zcmMvdmlzdWFsbHktaGlkZGVuLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF92aXN1YWxseV9oaWRkZW5fMV8yXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUm9vdCIsIlZJU1VBTExZX0hJRERFTl9TVFlMRVMiLCJWaXN1YWxseUhpZGRlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X3ByaW1pdGl2ZSIsImltcG9ydF9qc3hfcnVudGltZSIsIk9iamVjdCIsImZyZWV6ZSIsInBvc2l0aW9uIiwiYm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJjbGlwIiwid2hpdGVTcGFjZSIsIndvcmRXcmFwIiwiTkFNRSIsImZvcndhcmRSZWYiLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsImpzeCIsIlByaW1pdGl2ZSIsInNwYW4iLCJyZWYiLCJzdHlsZSIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1DQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUNBQUE7RUFBQUUsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxtQ0FBQTs7O0FDQUEsSUFBQVEsS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLHNCQUFBLEdBQTBCRCxPQUFBO0FBNkJwQixJQUFBRSxrQkFBQSxHQUFBRixPQUFBO0FBdkJOLElBQU1QLHNCQUFBLEdBQXlCVSxNQUFBLENBQU9DLE1BQUEsQ0FBTzs7RUFFM0NDLFFBQUEsRUFBVTtFQUNWQyxNQUFBLEVBQVE7RUFDUkMsS0FBQSxFQUFPO0VBQ1BDLE1BQUEsRUFBUTtFQUNSQyxPQUFBLEVBQVM7RUFDVEMsTUFBQSxFQUFRO0VBQ1JDLFFBQUEsRUFBVTtFQUNWQyxJQUFBLEVBQU07RUFDTkMsVUFBQSxFQUFZO0VBQ1pDLFFBQUEsRUFBVTtBQUNaLENBQUM7QUFFRCxJQUFNQyxJQUFBLEdBQU87QUFNYixJQUFNckIsY0FBQSxHQUF1QkksS0FBQSxDQUFBa0IsVUFBQSxDQUMzQixDQUFDQyxLQUFBLEVBQU9DLFlBQUEsS0FBaUI7RUFDdkIsT0FDRSxtQkFBQWhCLGtCQUFBLENBQUFpQixHQUFBLEVBQUNsQixzQkFBQSxDQUFBbUIsU0FBQSxDQUFVQyxJQUFBLEVBQVY7SUFDRSxHQUFHSixLQUFBO0lBQ0pLLEdBQUEsRUFBS0osWUFBQTtJQUNMSyxLQUFBLEVBQU87TUFBRSxHQUFHOUIsc0JBQUE7TUFBd0IsR0FBR3dCLEtBQUEsQ0FBTU07SUFBTTtFQUFBLENBQ3JEO0FBRUosQ0FDRjtBQUVBN0IsY0FBQSxDQUFlOEIsV0FBQSxHQUFjVCxJQUFBO0FBSTdCLElBQU12QixJQUFBLEdBQU9FLGNBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9