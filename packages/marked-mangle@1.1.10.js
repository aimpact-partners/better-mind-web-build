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
    // remove this once mangle option is removed
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtbWFuZ2xlLjEuMS4xMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQtbWFuZ2xlL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYXJrZWRfbWFuZ2xlXzFfMV8xMF9leHBvcnRzIiwiX19leHBvcnQiLCJtYW5nbGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImhyZWYiLCJzdGFydHNXaXRoIiwiZW1haWwiLCJzdWJzdHJpbmciLCJtYW5nbGVkRW1haWwiLCJtYW5nbGVFbWFpbCIsInRva2VucyIsImxlbmd0aCIsInRleHQiLCJvdXQiLCJpIiwiY2giLCJsIiwiY2hhckNvZGVBdCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw0QkFBQTs7O0FDQU8sU0FBU0UsT0FBQSxFQUFTO0VBQ3ZCLE9BQU87SUFDTEEsTUFBQSxFQUFRO0lBQUE7SUFDUkksV0FBV0MsS0FBQSxFQUFPO01BQ2hCLElBQUlBLEtBQUEsQ0FBTUMsSUFBQSxLQUFTLFFBQVE7UUFDekI7TUFDRjtNQUVBLElBQUksQ0FBQ0QsS0FBQSxDQUFNRSxJQUFBLENBQUtDLFVBQUEsQ0FBVyxTQUFTLEdBQUc7UUFDckM7TUFDRjtNQUVBLE1BQU1DLEtBQUEsR0FBUUosS0FBQSxDQUFNRSxJQUFBLENBQUtHLFNBQUEsQ0FBVSxDQUFDO01BQ3BDLE1BQU1DLFlBQUEsR0FBZUMsV0FBQSxDQUFZSCxLQUFLO01BRXRDSixLQUFBLENBQU1FLElBQUEsR0FBTyxVQUFVSSxZQUFZO01BRW5DLElBQUlOLEtBQUEsQ0FBTVEsTUFBQSxDQUFPQyxNQUFBLEtBQVcsS0FBS1QsS0FBQSxDQUFNUSxNQUFBLENBQU8sQ0FBQyxFQUFFUCxJQUFBLEtBQVMsVUFBVUQsS0FBQSxDQUFNUSxNQUFBLENBQU8sQ0FBQyxFQUFFRSxJQUFBLEtBQVNOLEtBQUEsRUFBTztRQUNsRztNQUNGO01BRUFKLEtBQUEsQ0FBTVUsSUFBQSxHQUFPSixZQUFBO01BQ2JOLEtBQUEsQ0FBTVEsTUFBQSxDQUFPLENBQUMsRUFBRUUsSUFBQSxHQUFPSixZQUFBO0lBQ3pCO0VBQ0Y7QUFDRjtBQUVBLFNBQVNDLFlBQVlHLElBQUEsRUFBTTtFQUN6QixJQUFJQyxHQUFBLEdBQU07SUFDUkMsQ0FBQTtJQUNBQyxFQUFBO0VBRUYsTUFBTUMsQ0FBQSxHQUFJSixJQUFBLENBQUtELE1BQUE7RUFDZixLQUFLRyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJRSxDQUFBLEVBQUdGLENBQUEsSUFBSztJQUN0QkMsRUFBQSxHQUFLSCxJQUFBLENBQUtLLFVBQUEsQ0FBV0gsQ0FBQztJQUN0QixJQUFJSSxJQUFBLENBQUtDLE1BQUEsQ0FBTyxJQUFJLEtBQUs7TUFDdkJKLEVBQUEsR0FBSyxNQUFNQSxFQUFBLENBQUdLLFFBQUEsQ0FBUyxFQUFFO0lBQzNCO0lBQ0FQLEdBQUEsSUFBTyxPQUFPRSxFQUFBLEdBQUs7RUFDckI7RUFFQSxPQUFPRixHQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9