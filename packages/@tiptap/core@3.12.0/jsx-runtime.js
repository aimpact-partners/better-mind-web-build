System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@tiptap/core","3.12.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@tiptap/core/jsx-runtime.3.12.0.js
var jsx_runtime_3_12_0_exports = {};
__export(jsx_runtime_3_12_0_exports, {
  Fragment: () => Fragment,
  createElement: () => h,
  h: () => h,
  jsx: () => h,
  jsxDEV: () => h,
  jsxs: () => h
});
module.exports = __toCommonJS(jsx_runtime_3_12_0_exports);

// node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js
function Fragment(props) {
  return props.children;
}
var h = (tag, attributes) => {
  if (tag === "slot") {
    return 0;
  }
  if (tag instanceof Function) {
    return tag(attributes);
  }
  const {
    children,
    ...rest
  } = attributes != null ? attributes : {};
  if (tag === "svg") {
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  }
  return [tag, rest, children];
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvY29yZS9qc3gtcnVudGltZS4zLjEyLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9jb3JlL3NyYy9qc3gtcnVudGltZS50cyJdLCJuYW1lcyI6WyJqc3hfcnVudGltZV8zXzEyXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50IiwiaCIsImpzeCIsImpzeERFViIsImpzeHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwicHJvcHMiLCJjaGlsZHJlbiIsInRhZyIsImF0dHJpYnV0ZXMiLCJGdW5jdGlvbiIsInJlc3QiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMEJBQUE7QUFBQUMsUUFBQSxDQUFBRCwwQkFBQTtFQUFBRSxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUMsQ0FBQTtFQUFBQSxDQUFBLEVBQUFBLENBQUEsS0FBQUEsQ0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUQsQ0FBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUYsQ0FBQTtFQUFBRyxJQUFBLEVBQUFBLENBQUEsS0FBQUg7QUFBQTtBQUFBSSxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBViwwQkFBQTs7O0FDbUNPLFNBQVNFLFNBQVNTLEtBQUEsRUFBb0M7RUFDM0QsT0FBT0EsS0FBQSxDQUFNQyxRQUFBO0FBQ2Y7QUFFTyxJQUFNUixDQUFBLEdBQWlCQSxDQUFDUyxHQUFBLEVBQUtDLFVBQUEsS0FBZTtFQUVqRCxJQUFJRCxHQUFBLEtBQVEsUUFBUTtJQUNsQixPQUFPO0VBQ1Q7RUFHQSxJQUFJQSxHQUFBLFlBQWVFLFFBQUEsRUFBVTtJQUMzQixPQUFPRixHQUFBLENBQUlDLFVBQVU7RUFDdkI7RUFFQSxNQUFNO0lBQUVGLFFBQUE7SUFBVSxHQUFHSTtFQUFLLElBQUlGLFVBQUEsV0FBQUEsVUFBQSxHQUFjLENBQUM7RUFFN0MsSUFBSUQsR0FBQSxLQUFRLE9BQU87SUFDakIsTUFBTSxJQUFJSSxLQUFBLENBQU0sZ0ZBQWdGO0VBQ2xHO0VBR0EsT0FBTyxDQUFDSixHQUFBLEVBQUtHLElBQUEsRUFBTUosUUFBUTtBQUM3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=