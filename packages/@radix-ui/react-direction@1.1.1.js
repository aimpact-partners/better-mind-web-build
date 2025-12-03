System.register(["react@18.3.1","react@18.3.1/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-direction","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-direction.1.1.1.js
var react_direction_1_1_1_exports = {};
__export(react_direction_1_1_1_exports, {
  DirectionProvider: () => DirectionProvider,
  Provider: () => Provider,
  useDirection: () => useDirection
});
module.exports = __toCommonJS(react_direction_1_1_1_exports);

// node_modules/@radix-ui/react-direction/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var DirectionContext = React.createContext(void 0);
var DirectionProvider = props => {
  const {
    dir,
    children
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(DirectionContext.Provider, {
    value: dir,
    children
  });
};
function useDirection(localDir) {
  const globalDir = React.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1kaXJlY3Rpb24uMS4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWRpcmVjdGlvbi9zcmMvZGlyZWN0aW9uLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9kaXJlY3Rpb25fMV8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRGlyZWN0aW9uUHJvdmlkZXIiLCJQcm92aWRlciIsInVzZURpcmVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X2pzeF9ydW50aW1lIiwiRGlyZWN0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJwcm9wcyIsImRpciIsImNoaWxkcmVuIiwianN4IiwidmFsdWUiLCJsb2NhbERpciIsImdsb2JhbERpciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNkJBQUE7QUFBQUMsUUFBQSxDQUFBRCw2QkFBQTtFQUFBRSxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLDZCQUFBOzs7QUNBQSxJQUFBUSxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFlZCxJQUFBQyxrQkFBQSxHQUFBRCxPQUFBO0FBWlQsSUFBTUUsZ0JBQUEsR0FBeUJKLEtBQUEsQ0FBQUssYUFBQSxDQUFxQyxNQUFTO0FBVTdFLElBQU1YLGlCQUFBLEdBQXVEWSxLQUFBLElBQVU7RUFDckUsTUFBTTtJQUFFQyxHQUFBO0lBQUtDO0VBQVMsSUFBSUYsS0FBQTtFQUMxQixPQUFPLG1CQUFBSCxrQkFBQSxDQUFBTSxHQUFBLEVBQUNMLGdCQUFBLENBQWlCVCxRQUFBLEVBQWpCO0lBQTBCZSxLQUFBLEVBQU9ILEdBQUE7SUFBTUM7RUFBQSxDQUFTO0FBQzFEO0FBSUEsU0FBU1osYUFBYWUsUUFBQSxFQUFzQjtFQUMxQyxNQUFNQyxTQUFBLEdBQWtCWixLQUFBLENBQUFhLFVBQUEsQ0FBV1QsZ0JBQWdCO0VBQ25ELE9BQU9PLFFBQUEsSUFBWUMsU0FBQSxJQUFhO0FBQ2xDO0FBRUEsSUFBTWpCLFFBQUEsR0FBV0QsaUJBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9