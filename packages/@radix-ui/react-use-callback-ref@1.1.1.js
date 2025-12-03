System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-callback-ref","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-use-callback-ref.1.1.1.js
var react_use_callback_ref_1_1_1_exports = {};
__export(react_use_callback_ref_1_1_1_exports, {
  useCallbackRef: () => useCallbackRef
});
module.exports = __toCommonJS(react_use_callback_ref_1_1_1_exports);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
function useCallbackRef(callback) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmLjEuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmL3NyYy91c2UtY2FsbGJhY2stcmVmLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2VfY2FsbGJhY2tfcmVmXzFfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsInVzZUNhbGxiYWNrUmVmIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJjYWxsYmFjayIsImNhbGxiYWNrUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInVzZU1lbW8iLCJhcmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9DQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0NBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsb0NBQUE7OztBQ0FBLElBQUFNLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQU12QixTQUFTTixlQUFrRE8sUUFBQSxFQUE0QjtFQUNyRixNQUFNQyxXQUFBLEdBQW9CSixLQUFBLENBQUFLLE1BQUEsQ0FBT0YsUUFBUTtFQUVuQ0gsS0FBQSxDQUFBTSxTQUFBLENBQVUsTUFBTTtJQUNwQkYsV0FBQSxDQUFZRyxPQUFBLEdBQVVKLFFBQUE7RUFDeEIsQ0FBQztFQUdELE9BQWFILEtBQUEsQ0FBQVEsT0FBQSxDQUFRLE1BQU8sSUFBSUMsSUFBQSxLQUFTTCxXQUFBLENBQVlHLE9BQUEsR0FBVSxHQUFHRSxJQUFJLEdBQVMsRUFBRTtBQUNuRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=