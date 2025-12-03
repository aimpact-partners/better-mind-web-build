System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-focus-guards","1.1.3"]]);
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

// .beyond/uimport/temp/@radix-ui/react-focus-guards.1.1.3.js
var react_focus_guards_1_1_3_exports = {};
__export(react_focus_guards_1_1_3_exports, {
  FocusGuards: () => FocusGuards,
  Root: () => FocusGuards,
  useFocusGuards: () => useFocusGuards
});
module.exports = __toCommonJS(react_focus_guards_1_1_3_exports);

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var count = 0;
function FocusGuards(props) {
  useFocusGuards();
  return props.children;
}
function useFocusGuards() {
  React.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach(node => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1mb2N1cy1ndWFyZHMuMS4xLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWZvY3VzLWd1YXJkcy9zcmMvZm9jdXMtZ3VhcmRzLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9mb2N1c19ndWFyZHNfMV8xXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRm9jdXNHdWFyZHMiLCJSb290IiwidXNlRm9jdXNHdWFyZHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImNvdW50IiwicHJvcHMiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsImVkZ2VHdWFyZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5IiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiY3JlYXRlRm9jdXNHdWFyZCIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0YWJJbmRleCIsInN0eWxlIiwib3V0bGluZSIsIm9wYWNpdHkiLCJwb3NpdGlvbiIsInBvaW50ZXJFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxnQ0FBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUQsV0FBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxnQ0FBQTs7O0FDQUEsSUFBQVEsS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBR3ZCLElBQUlDLEtBQUEsR0FBUTtBQU1aLFNBQVNULFlBQVlVLEtBQUEsRUFBeUI7RUFDNUNSLGNBQUEsQ0FBZTtFQUNmLE9BQU9RLEtBQUEsQ0FBTUMsUUFBQTtBQUNmO0FBTUEsU0FBU1QsZUFBQSxFQUFpQjtFQUVsQkksS0FBQSxDQUFBTSxTQUFBLENBQVUsTUFBTTtJQUNwQixNQUFNQyxVQUFBLEdBQWFDLFFBQUEsQ0FBU0MsZ0JBQUEsQ0FBaUIsMEJBQTBCO0lBQ3ZFRCxRQUFBLENBQVNFLElBQUEsQ0FBS0MscUJBQUEsQ0FBc0IsY0FBY0osVUFBQSxDQUFXLENBQUMsS0FBS0ssZ0JBQUEsQ0FBaUIsQ0FBQztJQUNyRkosUUFBQSxDQUFTRSxJQUFBLENBQUtDLHFCQUFBLENBQXNCLGFBQWFKLFVBQUEsQ0FBVyxDQUFDLEtBQUtLLGdCQUFBLENBQWlCLENBQUM7SUFDcEZULEtBQUE7SUFFQSxPQUFPLE1BQU07TUFDWCxJQUFJQSxLQUFBLEtBQVUsR0FBRztRQUNmSyxRQUFBLENBQVNDLGdCQUFBLENBQWlCLDBCQUEwQixFQUFFSSxPQUFBLENBQVNDLElBQUEsSUFBU0EsSUFBQSxDQUFLQyxNQUFBLENBQU8sQ0FBQztNQUN2RjtNQUNBWixLQUFBO0lBQ0Y7RUFDRixHQUFHLEVBQUU7QUFFUDtBQUVBLFNBQVNTLGlCQUFBLEVBQW1CO0VBRTFCLE1BQU1JLE9BQUEsR0FBVVIsUUFBQSxDQUFTUyxhQUFBLENBQWMsTUFBTTtFQUM3Q0QsT0FBQSxDQUFRRSxZQUFBLENBQWEsMEJBQTBCLEVBQUU7RUFDakRGLE9BQUEsQ0FBUUcsUUFBQSxHQUFXO0VBQ25CSCxPQUFBLENBQVFJLEtBQUEsQ0FBTUMsT0FBQSxHQUFVO0VBQ3hCTCxPQUFBLENBQVFJLEtBQUEsQ0FBTUUsT0FBQSxHQUFVO0VBQ3hCTixPQUFBLENBQVFJLEtBQUEsQ0FBTUcsUUFBQSxHQUFXO0VBQ3pCUCxPQUFBLENBQVFJLEtBQUEsQ0FBTUksYUFBQSxHQUFnQjtFQUM5QixPQUFPUixPQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9