System.register(["w3c-keyname@2.2.8","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["w3c-keyname","2.2.8"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-keymap","1.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep)],
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

// .beyond/uimport/prosemirror-keymap.1.2.3.js
var prosemirror_keymap_1_2_3_exports = {};
__export(prosemirror_keymap_1_2_3_exports, {
  keydownHandler: () => keydownHandler,
  keymap: () => keymap
});
module.exports = __toCommonJS(prosemirror_keymap_1_2_3_exports);

// node_modules/prosemirror-keymap/dist/index.js
var import_w3c_keyname = require("w3c-keyname@2.2.8");
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var mac = typeof navigator != "undefined" && /Mac|iP(hone|[oa]d)/.test(navigator.platform);
var windows = typeof navigator != "undefined" && /Win/.test(navigator.platform);
function normalizeKeyName(name) {
  let parts = name.split(/-(?!$)/),
    result = parts[parts.length - 1];
  if (result == "Space") result = " ";
  let alt, ctrl, shift, meta;
  for (let i = 0; i < parts.length - 1; i++) {
    let mod = parts[i];
    if (/^(cmd|meta|m)$/i.test(mod)) meta = true;else if (/^a(lt)?$/i.test(mod)) alt = true;else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true;else if (/^s(hift)?$/i.test(mod)) shift = true;else if (/^mod$/i.test(mod)) {
      if (mac) meta = true;else ctrl = true;
    } else throw new Error("Unrecognized modifier name: " + mod);
  }
  if (alt) result = "Alt-" + result;
  if (ctrl) result = "Ctrl-" + result;
  if (meta) result = "Meta-" + result;
  if (shift) result = "Shift-" + result;
  return result;
}
function normalize(map) {
  let copy = /* @__PURE__ */Object.create(null);
  for (let prop in map) copy[normalizeKeyName(prop)] = map[prop];
  return copy;
}
function modifiers(name, event, shift = true) {
  if (event.altKey) name = "Alt-" + name;
  if (event.ctrlKey) name = "Ctrl-" + name;
  if (event.metaKey) name = "Meta-" + name;
  if (shift && event.shiftKey) name = "Shift-" + name;
  return name;
}
function keymap(bindings) {
  return new import_prosemirror_state.Plugin({
    props: {
      handleKeyDown: keydownHandler(bindings)
    }
  });
}
function keydownHandler(bindings) {
  let map = normalize(bindings);
  return function (view, event) {
    let name = (0, import_w3c_keyname.keyName)(event),
      baseName,
      direct = map[modifiers(name, event)];
    if (direct && direct(view.state, view.dispatch, view)) return true;
    if (name.length == 1 && name != " ") {
      if (event.shiftKey) {
        let noShift = map[modifiers(name, event, false)];
        if (noShift && noShift(view.state, view.dispatch, view)) return true;
      }
      if ((event.altKey || event.metaKey || event.ctrlKey) &&
      // Ctrl-Alt may be used for AltGr on Windows
      !(windows && event.ctrlKey && event.altKey) && (baseName = import_w3c_keyname.base[event.keyCode]) && baseName != name) {
        let fromCode = map[modifiers(baseName, event)];
        if (fromCode && fromCode(view.state, view.dispatch, view)) return true;
      }
    }
    return false;
  };
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1rZXltYXAuMS4yLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3Ita2V5bWFwL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3Jfa2V5bWFwXzFfMl8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsImtleWRvd25IYW5kbGVyIiwia2V5bWFwIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF93M2Nfa2V5bmFtZSIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3Jfc3RhdGUiLCJtYWMiLCJuYXZpZ2F0b3IiLCJ0ZXN0IiwicGxhdGZvcm0iLCJ3aW5kb3dzIiwibm9ybWFsaXplS2V5TmFtZSIsIm5hbWUiLCJwYXJ0cyIsInNwbGl0IiwicmVzdWx0IiwibGVuZ3RoIiwiYWx0IiwiY3RybCIsInNoaWZ0IiwibWV0YSIsImkiLCJtb2QiLCJFcnJvciIsIm5vcm1hbGl6ZSIsIm1hcCIsImNvcHkiLCJPYmplY3QiLCJjcmVhdGUiLCJwcm9wIiwibW9kaWZpZXJzIiwiZXZlbnQiLCJhbHRLZXkiLCJjdHJsS2V5IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiYmluZGluZ3MiLCJQbHVnaW4iLCJwcm9wcyIsImhhbmRsZUtleURvd24iLCJ2aWV3Iiwia2V5TmFtZSIsImJhc2VOYW1lIiwiZGlyZWN0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIm5vU2hpZnQiLCJiYXNlIiwia2V5Q29kZSIsImZyb21Db2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQ0FBQTtBQUFBQyxRQUFBLENBQUFELGdDQUFBO0VBQUFFLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLGdD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