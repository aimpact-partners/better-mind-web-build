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

// .beyond/uimport/temp/marked-mangle.1.1.10.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1tYW5nbGUuMS4xLjEwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC1tYW5nbGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9tYW5nbGVfMV8xXzEwX2V4cG9ydHMiLCJfX2V4cG9ydCIsIm1hbmdsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ3YWxrVG9rZW5zIiwidG9rZW4iLCJ0eXBlIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJlbWFpbCIsInN1YnN0cmluZyIsIm1hbmdsZWRFbWFpbCIsIm1hbmdsZUVtYWlsIiwidG9rZW5zIiwibGVuZ3RoIiwidGV4dCIsIm91dCIsImkiLCJjaCIsImwiLCJjaGFyQ29kZUF0IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw0QkFBQTtBQUFBQyxRQUFBLENBQUFELDRCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLDRCQUFBOzs7QUNBTyxTQUFTRSxPQUFBLEVBQVM7RUFDdkIsT0FBTztJQUNMQSxNQUFBLEVBQVE7SUFDUkksV0FBV0MsS0FBQSxFQUFPO01BQ2hCLElBQUlBLEtBQUEsQ0FBTUMsSUFBQSxLQUFTLFFBQVE7UUFDekI7TUFDRjtNQUVBLElBQUksQ0FBQ0QsS0FBQSxDQUFNRSxJQUFBLENBQUtDLFVBQUEsQ0FBVyxTQUFTLEdBQUc7UUFDckM7TUFDRjtNQUVBLE1BQU1DLEtBQUEsR0FBUUosS0FBQSxDQUFNRSxJQUFBLENBQUtHLFNBQUEsQ0FBVSxDQUFDO01BQ3BDLE1BQU1DLFlBQUEsR0FBZUMsV0FBQSxDQUFZSCxLQUFLO01BRXRDSixLQUFBLENBQU1FLElBQUEsR0FBTyxVQUFVSSxZQUFBO01BRXZCLElBQUlOLEtBQUEsQ0FBTVEsTUFBQSxDQUFPQyxNQUFBLEtBQVcsS0FBS1QsS0FBQSxDQUFNUSxNQUFBLENBQU8sR0FBR1AsSUFBQSxLQUFTLFVBQVVELEtBQUEsQ0FBTVEsTUFBQSxDQUFPLEdBQUdFLElBQUEsS0FBU04sS0FBQSxFQUFPO1FBQ2xHO01BQ0Y7TUFFQUosS0FBQSxDQUFNVSxJQUFBLEdBQU9KLFlBQUE7TUFDYk4sS0FBQSxDQUFNUSxNQUFBLENBQU8sR0FBR0UsSUFBQSxHQUFPSixZQUFBO0lBQ3pCO0VBQ0Y7QUFDRjtBQUVBLFNBQVNDLFlBQVlHLElBQUEsRUFBTTtFQUN6QixJQUFJQyxHQUFBLEdBQU07SUFDUkMsQ0FBQTtJQUNBQyxFQUFBO0VBRUYsTUFBTUMsQ0FBQSxHQUFJSixJQUFBLENBQUtELE1BQUE7RUFDZixLQUFLRyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJRSxDQUFBLEVBQUdGLENBQUEsSUFBSztJQUN0QkMsRUFBQSxHQUFLSCxJQUFBLENBQUtLLFVBQUEsQ0FBV0gsQ0FBQztJQUN0QixJQUFJSSxJQUFBLENBQUtDLE1BQUEsQ0FBTyxJQUFJLEtBQUs7TUFDdkJKLEVBQUEsR0FBSyxNQUFNQSxFQUFBLENBQUdLLFFBQUEsQ0FBUyxFQUFFO0lBQzNCO0lBQ0FQLEdBQUEsSUFBTyxPQUFPRSxFQUFBLEdBQUs7RUFDckI7RUFFQSxPQUFPRixHQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=