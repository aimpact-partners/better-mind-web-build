System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-mangle","1.1.10"]]);
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

// .beyond/uimport/marked-mangle.1.1.10.js
var marked_mangle_1_1_10_exports = {};
__export(marked_mangle_1_1_10_exports, {
  mangle: () => mangle
});
module.exports = __toCommonJS(marked_mangle_1_1_10_exports);

// node_modules/marked-mangle/src/index.js
function mangle() {
  return {
    mangle: false,
    walkTokens(token) {
      if (token.type !== "link") {
        return;
      }
      if (!token.href.startsWith("mailto:")) {
        return;
      }
      const email = token.href.substring(7);
      const mangledEmail = mangleEmail(email);
      token.href = `mailto:${mangledEmail}`;
      if (token.tokens.length !== 1 || token.tokens[0].type !== "text" || token.tokens[0].text !== email) {
        return;
      }
      token.text = mangledEmail;
      token.tokens[0].text = mangledEmail;
    }
  };
}
function mangleEmail(text) {
  let out = "",
    i,
    ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtbWFuZ2xlLjEuMS4xMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQtbWFuZ2xlL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYXJrZWRfbWFuZ2xlXzFfMV8xMF9leHBvcnRzIiwiX19leHBvcnQiLCJtYW5nbGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImhyZWYiLCJzdGFydHNXaXRoIiwiZW1haWwiLCJzdWJzdHJpbmciLCJtYW5nbGVkRW1haWwiLCJtYW5nbGVFbWFpbCIsInRva2VucyIsImxlbmd0aCIsInRleHQiLCJvdXQiLCJpIiwiY2giLCJsIiwiY2hhckNvZGVBdCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw0QkFBQTs7O0FDQU8sU0FBU0UsT0FBQSxFQUFTO0VBQ3ZCLE9BQU87SUFDTEEsTUFBQSxFQUFRO0lBQ1JJLFdBQVdDLEtBQUEsRUFBTztNQUNoQixJQUFJQSxLQUFBLENBQU1DLElBQUEsS0FBUyxRQUFRO1FBQ3pCO01BQ0Y7TUFFQSxJQUFJLENBQUNELEtBQUEsQ0FBTUUsSUFBQSxDQUFLQyxVQUFBLENBQVcsU0FBUyxHQUFHO1FBQ3JDO01BQ0Y7TUFFQSxNQUFNQyxLQUFBLEdBQVFKLEtBQUEsQ0FBTUUsSUFBQSxDQUFLRyxTQUFBLENBQVUsQ0FBQztNQUNwQyxNQUFNQyxZQUFBLEdBQWVDLFdBQUEsQ0FBWUgsS0FBSztNQUV0Q0osS0FBQSxDQUFNRSxJQUFBLEdBQU8sVUFBVUksWUFBQTtNQUV2QixJQUFJTixLQUFBLENBQU1RLE1BQUEsQ0FBT0MsTUFBQSxLQUFXLEtBQUtULEtBQUEsQ0FBTVEsTUFBQSxDQUFPLEdBQUdQLElBQUEsS0FBUyxVQUFVRCxLQUFBLENBQU1RLE1BQUEsQ0FBTyxHQUFHRSxJQUFBLEtBQVNOLEtBQUEsRUFBTztRQUNsRztNQUNGO01BRUFKLEtBQUEsQ0FBTVUsSUFBQSxHQUFPSixZQUFBO01BQ2JOLEtBQUEsQ0FBTVEsTUFBQSxDQUFPLEdBQUdFLElBQUEsR0FBT0osWUFBQTtJQUN6QjtFQUNGO0FBQ0Y7QUFFQSxTQUFTQyxZQUFZRyxJQUFBLEVBQU07RUFDekIsSUFBSUMsR0FBQSxHQUFNO0lBQ1JDLENBQUE7SUFDQUMsRUFBQTtFQUVGLE1BQU1DLENBQUEsR0FBSUosSUFBQSxDQUFLRCxNQUFBO0VBQ2YsS0FBS0csQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUUsQ0FBQSxFQUFHRixDQUFBLElBQUs7SUFDdEJDLEVBQUEsR0FBS0gsSUFBQSxDQUFLSyxVQUFBLENBQVdILENBQUM7SUFDdEIsSUFBSUksSUFBQSxDQUFLQyxNQUFBLENBQU8sSUFBSSxLQUFLO01BQ3ZCSixFQUFBLEdBQUssTUFBTUEsRUFBQSxDQUFHSyxRQUFBLENBQVMsRUFBRTtJQUMzQjtJQUNBUCxHQUFBLElBQU8sT0FBT0UsRUFBQSxHQUFLO0VBQ3JCO0VBRUEsT0FBT0YsR0FBQTtBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9