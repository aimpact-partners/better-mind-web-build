System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["clsx","2.1.1"]]);
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

// .beyond/uimport/clsx.2.1.1.js
var clsx_2_1_1_exports = {};
__export(clsx_2_1_1_exports, {
  clsx: () => clsx,
  default: () => clsx_2_1_1_default
});
module.exports = __toCommonJS(clsx_2_1_1_exports);

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// .beyond/uimport/clsx.2.1.1.js
var clsx_2_1_1_default = clsx_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9jbHN4LjIuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm1qcyJdLCJuYW1lcyI6WyJjbHN4XzJfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImNsc3giLCJkZWZhdWx0IiwiY2xzeF8yXzFfMV9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInIiLCJlIiwidCIsImYiLCJuIiwiQXJyYXkiLCJpc0FycmF5IiwibyIsImxlbmd0aCIsImFyZ3VtZW50cyIsImNsc3hfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxrQkFBQTs7O0FDQUEsU0FBU1EsRUFBRUMsQ0FBQSxFQUFFO0VBQUMsSUFBSUMsQ0FBQTtJQUFFQyxDQUFBO0lBQUVDLENBQUEsR0FBRTtFQUFHLElBQUcsWUFBVSxPQUFPSCxDQUFBLElBQUcsWUFBVSxPQUFPQSxDQUFBLEVBQUVHLENBQUEsSUFBR0gsQ0FBQSxVQUFVLFlBQVUsT0FBT0EsQ0FBQSxFQUFFLElBQUdJLEtBQUEsQ0FBTUMsT0FBQSxDQUFRTCxDQUFDLEdBQUU7SUFBQyxJQUFJTSxDQUFBLEdBQUVOLENBQUEsQ0FBRU8sTUFBQTtJQUFPLEtBQUlOLENBQUEsR0FBRSxHQUFFQSxDQUFBLEdBQUVLLENBQUEsRUFBRUwsQ0FBQSxJQUFJRCxDQUFBLENBQUVDLENBQUEsTUFBS0MsQ0FBQSxHQUFFSCxDQUFBLENBQUVDLENBQUEsQ0FBRUMsQ0FBQSxDQUFFLE9BQUtFLENBQUEsS0FBSUEsQ0FBQSxJQUFHLE1BQUtBLENBQUEsSUFBR0QsQ0FBQTtFQUFFLE9BQU0sS0FBSUEsQ0FBQSxJQUFLRixDQUFBLEVBQUVBLENBQUEsQ0FBRUUsQ0FBQSxNQUFLQyxDQUFBLEtBQUlBLENBQUEsSUFBRyxNQUFLQSxDQUFBLElBQUdELENBQUE7RUFBRyxPQUFPQyxDQUFBO0FBQUM7QUFBUSxTQUFTVixLQUFBLEVBQU07RUFBQyxTQUFRTyxDQUFBLEVBQUVDLENBQUEsRUFBRUMsQ0FBQSxHQUFFLEdBQUVDLENBQUEsR0FBRSxJQUFHRyxDQUFBLEdBQUVFLFNBQUEsQ0FBVUQsTUFBQSxFQUFPTCxDQUFBLEdBQUVJLENBQUEsRUFBRUosQ0FBQSxJQUFJLENBQUNGLENBQUEsR0FBRVEsU0FBQSxDQUFVTixDQUFBLE9BQU1ELENBQUEsR0FBRUYsQ0FBQSxDQUFFQyxDQUFDLE9BQUtHLENBQUEsS0FBSUEsQ0FBQSxJQUFHLE1BQUtBLENBQUEsSUFBR0YsQ0FBQTtFQUFHLE9BQU9FLENBQUE7QUFBQztBQUFDLElBQU9NLFlBQUEsR0FBUWhCLElBQUE7OztBREcvWCxJQUFPRSxrQkFBQSxHQUFRYyxZQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9