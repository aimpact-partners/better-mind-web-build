System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"]]);
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

// .beyond/uimport/temp/@radix-ui/react-compose-refs.1.1.2.js
var react_compose_refs_1_1_2_exports = {};
__export(react_compose_refs_1_1_2_exports, {
  composeRefs: () => composeRefs,
  useComposedRefs: () => useComposedRefs
});
module.exports = __toCommonJS(react_compose_refs_1_1_2_exports);

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return node => {
    let hasCleanup = false;
    const cleanups = refs.map(ref => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMuMS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcy9zcmMvY29tcG9zZS1yZWZzLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9jb21wb3NlX3JlZnNfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY29tcG9zZVJlZnMiLCJ1c2VDb21wb3NlZFJlZnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsInNldFJlZiIsInJlZiIsInZhbHVlIiwiY3VycmVudCIsInJlZnMiLCJub2RlIiwiaGFzQ2xlYW51cCIsImNsZWFudXBzIiwibWFwIiwiY2xlYW51cCIsImkiLCJsZW5ndGgiLCJ1c2VDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQ0FBQTtBQUFBQyxRQUFBLENBQUFELGdDQUFBO0VBQUFFLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLGdDQUFBOzs7QUNBQSxJQUFBTyxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFRdkIsU0FBU0MsT0FBVUMsR0FBQSxFQUFxQkMsS0FBQSxFQUFVO0VBQ2hELElBQUksT0FBT0QsR0FBQSxLQUFRLFlBQVk7SUFDN0IsT0FBT0EsR0FBQSxDQUFJQyxLQUFLO0VBQ2xCLFdBQVdELEdBQUEsS0FBUSxRQUFRQSxHQUFBLEtBQVEsUUFBVztJQUM1Q0EsR0FBQSxDQUFJRSxPQUFBLEdBQVVELEtBQUE7RUFDaEI7QUFDRjtBQU1BLFNBQVNWLFlBQUEsR0FBa0JZLElBQUEsRUFBOEM7RUFDdkUsT0FBUUMsSUFBQSxJQUFTO0lBQ2YsSUFBSUMsVUFBQSxHQUFhO0lBQ2pCLE1BQU1DLFFBQUEsR0FBV0gsSUFBQSxDQUFLSSxHQUFBLENBQUtQLEdBQUEsSUFBUTtNQUNqQyxNQUFNUSxPQUFBLEdBQVVULE1BQUEsQ0FBT0MsR0FBQSxFQUFLSSxJQUFJO01BQ2hDLElBQUksQ0FBQ0MsVUFBQSxJQUFjLE9BQU9HLE9BQUEsSUFBVyxZQUFZO1FBQy9DSCxVQUFBLEdBQWE7TUFDZjtNQUNBLE9BQU9HLE9BQUE7SUFDVCxDQUFDO0lBTUQsSUFBSUgsVUFBQSxFQUFZO01BQ2QsT0FBTyxNQUFNO1FBQ1gsU0FBU0ksQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUgsUUFBQSxDQUFTSSxNQUFBLEVBQVFELENBQUEsSUFBSztVQUN4QyxNQUFNRCxPQUFBLEdBQVVGLFFBQUEsQ0FBU0csQ0FBQztVQUMxQixJQUFJLE9BQU9ELE9BQUEsSUFBVyxZQUFZO1lBQ2hDQSxPQUFBLENBQVE7VUFDVixPQUFPO1lBQ0xULE1BQUEsQ0FBT0ksSUFBQSxDQUFLTSxDQUFDLEdBQUcsSUFBSTtVQUN0QjtRQUNGO01BQ0Y7SUFDRjtFQUNGO0FBQ0Y7QUFNQSxTQUFTakIsZ0JBQUEsR0FBc0JXLElBQUEsRUFBOEM7RUFFM0UsT0FBYVAsS0FBQSxDQUFBZSxXQUFBLENBQVlwQixXQUFBLENBQVksR0FBR1ksSUFBSSxHQUFHQSxJQUFJO0FBQ3JEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==