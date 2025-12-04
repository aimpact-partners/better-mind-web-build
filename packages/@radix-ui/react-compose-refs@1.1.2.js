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

// .beyond/uimport/@radix-ui/react-compose-refs.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzLjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMvc3JjL2NvbXBvc2UtcmVmcy50c3giXSwibmFtZXMiOlsicmVhY3RfY29tcG9zZV9yZWZzXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsImNvbXBvc2VSZWZzIiwidXNlQ29tcG9zZWRSZWZzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJzZXRSZWYiLCJyZWYiLCJ2YWx1ZSIsImN1cnJlbnQiLCJyZWZzIiwibm9kZSIsImhhc0NsZWFudXAiLCJjbGVhbnVwcyIsIm1hcCIsImNsZWFudXAiLCJpIiwibGVuZ3RoIiwidXNlQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxnQ0FBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixnQ0FBQTs7O0FDQUEsSUFBQU8sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBUXZCLFNBQVNDLE9BQVVDLEdBQUEsRUFBcUJDLEtBQUEsRUFBVTtFQUNoRCxJQUFJLE9BQU9ELEdBQUEsS0FBUSxZQUFZO0lBQzdCLE9BQU9BLEdBQUEsQ0FBSUMsS0FBSztFQUNsQixXQUFXRCxHQUFBLEtBQVEsUUFBUUEsR0FBQSxLQUFRLFFBQVc7SUFDNUNBLEdBQUEsQ0FBSUUsT0FBQSxHQUFVRCxLQUFBO0VBQ2hCO0FBQ0Y7QUFNQSxTQUFTVixZQUFBLEdBQWtCWSxJQUFBLEVBQThDO0VBQ3ZFLE9BQVFDLElBQUEsSUFBUztJQUNmLElBQUlDLFVBQUEsR0FBYTtJQUNqQixNQUFNQyxRQUFBLEdBQVdILElBQUEsQ0FBS0ksR0FBQSxDQUFLUCxHQUFBLElBQVE7TUFDakMsTUFBTVEsT0FBQSxHQUFVVCxNQUFBLENBQU9DLEdBQUEsRUFBS0ksSUFBSTtNQUNoQyxJQUFJLENBQUNDLFVBQUEsSUFBYyxPQUFPRyxPQUFBLElBQVcsWUFBWTtRQUMvQ0gsVUFBQSxHQUFhO01BQ2Y7TUFDQSxPQUFPRyxPQUFBO0lBQ1QsQ0FBQztJQU1ELElBQUlILFVBQUEsRUFBWTtNQUNkLE9BQU8sTUFBTTtRQUNYLFNBQVNJLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlILFFBQUEsQ0FBU0ksTUFBQSxFQUFRRCxDQUFBLElBQUs7VUFDeEMsTUFBTUQsT0FBQSxHQUFVRixRQUFBLENBQVNHLENBQUM7VUFDMUIsSUFBSSxPQUFPRCxPQUFBLElBQVcsWUFBWTtZQUNoQ0EsT0FBQSxDQUFRO1VBQ1YsT0FBTztZQUNMVCxNQUFBLENBQU9JLElBQUEsQ0FBS00sQ0FBQyxHQUFHLElBQUk7VUFDdEI7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtBQUNGO0FBTUEsU0FBU2pCLGdCQUFBLEdBQXNCVyxJQUFBLEVBQThDO0VBRTNFLE9BQWFQLEtBQUEsQ0FBQWUsV0FBQSxDQUFZcEIsV0FBQSxDQUFZLEdBQUdZLElBQUksR0FBR0EsSUFBSTtBQUNyRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=