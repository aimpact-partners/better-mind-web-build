System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["get-nonce","1.0.1"]]);
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

// .beyond/uimport/temp/get-nonce.1.0.1.js
var get_nonce_1_0_1_exports = {};
__export(get_nonce_1_0_1_exports, {
  getNonce: () => getNonce,
  setNonce: () => setNonce
});
module.exports = __toCommonJS(get_nonce_1_0_1_exports);

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var setNonce = function (nonce) {
  currentNonce = nonce;
};
var getNonce = function () {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2dldC1ub25jZS4xLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9nZXQtbm9uY2UvZGlzdC9lczIwMTUvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0X25vbmNlXzFfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImdldE5vbmNlIiwic2V0Tm9uY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiY3VycmVudE5vbmNlIiwibm9uY2UiLCJfX3dlYnBhY2tfbm9uY2VfXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx1QkFBQTtFQUFBRSxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTix1QkFBQTs7O0FDQUEsSUFBSU8sWUFBQTtBQUNHLElBQUlKLFFBQUEsR0FBVyxTQUFBQSxDQUFVSyxLQUFBLEVBQU87RUFDbkNELFlBQUEsR0FBZUMsS0FBQTtBQUNuQjtBQUNPLElBQUlOLFFBQUEsR0FBVyxTQUFBQSxDQUFBLEVBQVk7RUFDOUIsSUFBSUssWUFBQSxFQUFjO0lBQ2QsT0FBT0EsWUFBQTtFQUNYO0VBQ0EsSUFBSSxPQUFPRSxpQkFBQSxLQUFzQixhQUFhO0lBQzFDLE9BQU9BLGlCQUFBO0VBQ1g7RUFDQSxPQUFPO0FBQ1giLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9