System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-previous","1.1.1"]]);
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

// .beyond/uimport/temp/@radix-ui/react-use-previous.1.1.1.js
var react_use_previous_1_1_1_exports = {};
__export(react_use_previous_1_1_1_exports, {
  usePrevious: () => usePrevious
});
module.exports = __toCommonJS(react_use_previous_1_1_1_exports);

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
function usePrevious(value) {
  const ref = React.useRef({
    value,
    previous: value
  });
  return React.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2UtcHJldmlvdXMuMS4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1wcmV2aW91cy9zcmMvdXNlLXByZXZpb3VzLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2VfcHJldmlvdXNfMV8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwidXNlUHJldmlvdXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwicHJldmlvdXMiLCJ1c2VNZW1vIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQ0FBQTtBQUFBQyxRQUFBLENBQUFELGdDQUFBO0VBQUFFLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLGdDQUFBOzs7QUNBQSxJQUFBTSxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFFdkIsU0FBU04sWUFBZU8sS0FBQSxFQUFVO0VBQ2hDLE1BQU1DLEdBQUEsR0FBWUosS0FBQSxDQUFBSyxNQUFBLENBQU87SUFBRUYsS0FBQTtJQUFPRyxRQUFBLEVBQVVIO0VBQU0sQ0FBQztFQUtuRCxPQUFhSCxLQUFBLENBQUFPLE9BQUEsQ0FBUSxNQUFNO0lBQ3pCLElBQUlILEdBQUEsQ0FBSUksT0FBQSxDQUFRTCxLQUFBLEtBQVVBLEtBQUEsRUFBTztNQUMvQkMsR0FBQSxDQUFJSSxPQUFBLENBQVFGLFFBQUEsR0FBV0YsR0FBQSxDQUFJSSxPQUFBLENBQVFMLEtBQUE7TUFDbkNDLEdBQUEsQ0FBSUksT0FBQSxDQUFRTCxLQUFBLEdBQVFBLEtBQUE7SUFDdEI7SUFDQSxPQUFPQyxHQUFBLENBQUlJLE9BQUEsQ0FBUUYsUUFBQTtFQUNyQixHQUFHLENBQUNILEtBQUssQ0FBQztBQUNaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==