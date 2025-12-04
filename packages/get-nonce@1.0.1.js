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

// .beyond/uimport/get-nonce.1.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9nZXQtbm9uY2UuMS4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvZ2V0LW5vbmNlL2Rpc3QvZXMyMDE1L2luZGV4LmpzIl0sIm5hbWVzIjpbImdldF9ub25jZV8xXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJnZXROb25jZSIsInNldE5vbmNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImN1cnJlbnROb25jZSIsIm5vbmNlIiwiX193ZWJwYWNrX25vbmNlX18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHVCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsdUJBQUE7RUFBQUUsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sdUJBQUE7OztBQ0FBLElBQUlPLFlBQUE7QUFDRyxJQUFJSixRQUFBLEdBQVcsU0FBQUEsQ0FBVUssS0FBQSxFQUFPO0VBQ25DRCxZQUFBLEdBQWVDLEtBQUE7QUFDbkI7QUFDTyxJQUFJTixRQUFBLEdBQVcsU0FBQUEsQ0FBQSxFQUFZO0VBQzlCLElBQUlLLFlBQUEsRUFBYztJQUNkLE9BQU9BLFlBQUE7RUFDWDtFQUNBLElBQUksT0FBT0UsaUJBQUEsS0FBc0IsYUFBYTtJQUMxQyxPQUFPQSxpQkFBQTtFQUNYO0VBQ0EsT0FBTztBQUNYIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==