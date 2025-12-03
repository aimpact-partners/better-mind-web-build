System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["w3c-keyname","2.2.8"]]);
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

// .beyond/uimport/temp/w3c-keyname.2.2.8.js
var w3c_keyname_2_2_8_exports = {};
__export(w3c_keyname_2_2_8_exports, {
  base: () => base,
  keyName: () => keyName,
  shift: () => shift
});
module.exports = __toCommonJS(w3c_keyname_2_2_8_exports);

// node_modules/w3c-keyname/index.js
var base = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
};
var shift = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
};
var mac = typeof navigator != "undefined" && /Mac/.test(navigator.platform);
var ie = typeof navigator != "undefined" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (i = 0; i < 10; i++) base[48 + i] = base[96 + i] = String(i);
for (i = 1; i <= 24; i++) base[i + 111] = "F" + i;
for (i = 65; i <= 90; i++) {
  base[i] = String.fromCharCode(i + 32);
  shift[i] = String.fromCharCode(i);
}
for (code in base) if (!shift.hasOwnProperty(code)) shift[code] = base[code];
function keyName(event) {
  var ignoreKey = mac && event.metaKey && event.shiftKey && !event.ctrlKey && !event.altKey || ie && event.shiftKey && event.key && event.key.length == 1 || event.key == "Unidentified";
  var name = !ignoreKey && event.key || (event.shiftKey ? shift : base)[event.keyCode] || event.key || "Unidentified";
  if (name == "Esc") name = "Escape";
  if (name == "Del") name = "Delete";
  if (name == "Left") name = "ArrowLeft";
  if (name == "Up") name = "ArrowUp";
  if (name == "Right") name = "ArrowRight";
  if (name == "Down") name = "ArrowDown";
  return name;
}
var i;
var code;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3czYy1rZXluYW1lLjIuMi44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3czYy1rZXluYW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbInczY19rZXluYW1lXzJfMl84X2V4cG9ydHMiLCJfX2V4cG9ydCIsImJhc2UiLCJrZXlOYW1lIiwic2hpZnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwibWFjIiwibmF2aWdhdG9yIiwidGVzdCIsInBsYXRmb3JtIiwiaWUiLCJleGVjIiwidXNlckFnZW50IiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNvZGUiLCJoYXNPd25Qcm9wZXJ0eSIsImV2ZW50IiwiaWdub3JlS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiY3RybEtleSIsImFsdEtleSIsImtleSIsImxlbmd0aCIsIm5hbWUiLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQTtBQUFBQyxRQUFBLENBQUFELHlCQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLHlCQUFBOzs7QUNBTyxJQUFJRSxJQUFBLEdBQU87RUFDaEIsR0FBRztFQUNILEdBQUc7RUFDSCxJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztBQUNQO0FBRU8sSUFBSUUsS0FBQSxHQUFRO0VBQ2pCLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLElBQUk7RUFDSixJQUFJO0VBQ0osSUFBSTtFQUNKLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztBQUNQO0FBRUEsSUFBSUksR0FBQSxHQUFNLE9BQU9DLFNBQUEsSUFBYSxlQUFlLE1BQU1DLElBQUEsQ0FBS0QsU0FBQSxDQUFVRSxRQUFRO0FBQzFFLElBQUlDLEVBQUEsR0FBSyxPQUFPSCxTQUFBLElBQWEsZUFBZSxnREFBZ0RJLElBQUEsQ0FBS0osU0FBQSxDQUFVSyxTQUFTO0FBR3BILEtBQVNDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksSUFBSUEsQ0FBQSxJQUFLYixJQUFBLENBQUssS0FBS2EsQ0FBQyxJQUFJYixJQUFBLENBQUssS0FBS2EsQ0FBQyxJQUFJQyxNQUFBLENBQU9ELENBQUM7QUFHbkUsS0FBU0EsQ0FBQSxHQUFJLEdBQUdBLENBQUEsSUFBSyxJQUFJQSxDQUFBLElBQUtiLElBQUEsQ0FBS2EsQ0FBQSxHQUFJLEdBQUcsSUFBSSxNQUFNQSxDQUFBO0FBR3BELEtBQVNBLENBQUEsR0FBSSxJQUFJQSxDQUFBLElBQUssSUFBSUEsQ0FBQSxJQUFLO0VBQzdCYixJQUFBLENBQUthLENBQUMsSUFBSUMsTUFBQSxDQUFPQyxZQUFBLENBQWFGLENBQUEsR0FBSSxFQUFFO0VBQ3BDWCxLQUFBLENBQU1XLENBQUMsSUFBSUMsTUFBQSxDQUFPQyxZQUFBLENBQWFGLENBQUM7QUFDbEM7QUFHQSxLQUFTRyxJQUFBLElBQVFoQixJQUFBLEVBQU0sSUFBSSxDQUFDRSxLQUFBLENBQU1lLGNBQUEsQ0FBZUQsSUFBSSxHQUFHZCxLQUFBLENBQU1jLElBQUksSUFBSWhCLElBQUEsQ0FBS2dCLElBQUk7QUFFeEUsU0FBU2YsUUFBUWlCLEtBQUEsRUFBTztFQUc3QixJQUFJQyxTQUFBLEdBQVliLEdBQUEsSUFBT1ksS0FBQSxDQUFNRSxPQUFBLElBQVdGLEtBQUEsQ0FBTUcsUUFBQSxJQUFZLENBQUNILEtBQUEsQ0FBTUksT0FBQSxJQUFXLENBQUNKLEtBQUEsQ0FBTUssTUFBQSxJQUMvRWIsRUFBQSxJQUFNUSxLQUFBLENBQU1HLFFBQUEsSUFBWUgsS0FBQSxDQUFNTSxHQUFBLElBQU9OLEtBQUEsQ0FBTU0sR0FBQSxDQUFJQyxNQUFBLElBQVUsS0FDekRQLEtBQUEsQ0FBTU0sR0FBQSxJQUFPO0VBQ2pCLElBQUlFLElBQUEsR0FBUSxDQUFDUCxTQUFBLElBQWFELEtBQUEsQ0FBTU0sR0FBQSxLQUM3Qk4sS0FBQSxDQUFNRyxRQUFBLEdBQVduQixLQUFBLEdBQVFGLElBQUEsRUFBTWtCLEtBQUEsQ0FBTVMsT0FBTyxLQUM3Q1QsS0FBQSxDQUFNTSxHQUFBLElBQU87RUFFZixJQUFJRSxJQUFBLElBQVEsT0FBT0EsSUFBQSxHQUFPO0VBQzFCLElBQUlBLElBQUEsSUFBUSxPQUFPQSxJQUFBLEdBQU87RUFFMUIsSUFBSUEsSUFBQSxJQUFRLFFBQVFBLElBQUEsR0FBTztFQUMzQixJQUFJQSxJQUFBLElBQVEsTUFBTUEsSUFBQSxHQUFPO0VBQ3pCLElBQUlBLElBQUEsSUFBUSxTQUFTQSxJQUFBLEdBQU87RUFDNUIsSUFBSUEsSUFBQSxJQUFRLFFBQVFBLElBQUEsR0FBTztFQUMzQixPQUFPQSxJQUFBO0FBQ1Q7QUFoQ1MsSUFBQWIsQ0FBQTtBQVlBLElBQUFHLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9