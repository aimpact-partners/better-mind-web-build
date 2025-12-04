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

// .beyond/uimport/@tiptap/core/jsx-runtime.3.12.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2NvcmUvanN4LXJ1bnRpbWUuMy4xMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvY29yZS9zcmMvanN4LXJ1bnRpbWUudHMiXSwibmFtZXMiOlsianN4X3J1bnRpbWVfM18xMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZyYWdtZW50IiwiY3JlYXRlRWxlbWVudCIsImgiLCJqc3giLCJqc3hERVYiLCJqc3hzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInByb3BzIiwiY2hpbGRyZW4iLCJ0YWciLCJhdHRyaWJ1dGVzIiwiRnVuY3Rpb24iLCJyZXN0IiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDBCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMEJBQUE7RUFBQUUsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFDLENBQUE7RUFBQUEsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFELENBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFGLENBQUE7RUFBQUcsSUFBQSxFQUFBQSxDQUFBLEtBQUFIO0FBQUE7QUFBQUksTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVYsMEJBQUE7OztBQ21DTyxTQUFTRSxTQUFTUyxLQUFBLEVBQW9DO0VBQzNELE9BQU9BLEtBQUEsQ0FBTUMsUUFBQTtBQUNmO0FBRU8sSUFBTVIsQ0FBQSxHQUFpQkEsQ0FBQ1MsR0FBQSxFQUFLQyxVQUFBLEtBQWU7RUFFakQsSUFBSUQsR0FBQSxLQUFRLFFBQVE7SUFDbEIsT0FBTztFQUNUO0VBR0EsSUFBSUEsR0FBQSxZQUFlRSxRQUFBLEVBQVU7SUFDM0IsT0FBT0YsR0FBQSxDQUFJQyxVQUFVO0VBQ3ZCO0VBRUEsTUFBTTtJQUFFRixRQUFBO0lBQVUsR0FBR0k7RUFBSyxJQUFJRixVQUFBLFdBQUFBLFVBQUEsR0FBYyxDQUFDO0VBRTdDLElBQUlELEdBQUEsS0FBUSxPQUFPO0lBQ2pCLE1BQU0sSUFBSUksS0FBQSxDQUFNLGdGQUFnRjtFQUNsRztFQUdBLE9BQU8sQ0FBQ0osR0FBQSxFQUFLRyxJQUFBLEVBQU1KLFFBQVE7QUFDN0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9