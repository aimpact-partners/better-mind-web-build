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

// .beyond/uimport/temp/clsx.2.1.1.js
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

// .beyond/uimport/temp/clsx.2.1.1.js
var clsx_2_1_1_default = clsx_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2Nsc3guMi4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubWpzIl0sIm5hbWVzIjpbImNsc3hfMl8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY2xzeCIsImRlZmF1bHQiLCJjbHN4XzJfMV8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiciIsImUiLCJ0IiwiZiIsIm4iLCJBcnJheSIsImlzQXJyYXkiLCJvIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwiY2xzeF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGtCQUFBOzs7QUNBQSxTQUFTUSxFQUFFQyxDQUFBLEVBQUU7RUFBQyxJQUFJQyxDQUFBO0lBQUVDLENBQUE7SUFBRUMsQ0FBQSxHQUFFO0VBQUcsSUFBRyxZQUFVLE9BQU9ILENBQUEsSUFBRyxZQUFVLE9BQU9BLENBQUEsRUFBRUcsQ0FBQSxJQUFHSCxDQUFBLFVBQVUsWUFBVSxPQUFPQSxDQUFBLEVBQUUsSUFBR0ksS0FBQSxDQUFNQyxPQUFBLENBQVFMLENBQUMsR0FBRTtJQUFDLElBQUlNLENBQUEsR0FBRU4sQ0FBQSxDQUFFTyxNQUFBO0lBQU8sS0FBSU4sQ0FBQSxHQUFFLEdBQUVBLENBQUEsR0FBRUssQ0FBQSxFQUFFTCxDQUFBLElBQUlELENBQUEsQ0FBRUMsQ0FBQSxNQUFLQyxDQUFBLEdBQUVILENBQUEsQ0FBRUMsQ0FBQSxDQUFFQyxDQUFBLENBQUUsT0FBS0UsQ0FBQSxLQUFJQSxDQUFBLElBQUcsTUFBS0EsQ0FBQSxJQUFHRCxDQUFBO0VBQUUsT0FBTSxLQUFJQSxDQUFBLElBQUtGLENBQUEsRUFBRUEsQ0FBQSxDQUFFRSxDQUFBLE1BQUtDLENBQUEsS0FBSUEsQ0FBQSxJQUFHLE1BQUtBLENBQUEsSUFBR0QsQ0FBQTtFQUFHLE9BQU9DLENBQUE7QUFBQztBQUFRLFNBQVNWLEtBQUEsRUFBTTtFQUFDLFNBQVFPLENBQUEsRUFBRUMsQ0FBQSxFQUFFQyxDQUFBLEdBQUUsR0FBRUMsQ0FBQSxHQUFFLElBQUdHLENBQUEsR0FBRUUsU0FBQSxDQUFVRCxNQUFBLEVBQU9MLENBQUEsR0FBRUksQ0FBQSxFQUFFSixDQUFBLElBQUksQ0FBQ0YsQ0FBQSxHQUFFUSxTQUFBLENBQVVOLENBQUEsT0FBTUQsQ0FBQSxHQUFFRixDQUFBLENBQUVDLENBQUMsT0FBS0csQ0FBQSxLQUFJQSxDQUFBLElBQUcsTUFBS0EsQ0FBQSxJQUFHRixDQUFBO0VBQUcsT0FBT0UsQ0FBQTtBQUFDO0FBQUMsSUFBT00sWUFBQSxHQUFRaEIsSUFBQTs7O0FERy9YLElBQU9FLGtCQUFBLEdBQVFjLFlBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=