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

// .beyond/uimport/temp/prosemirror-keymap.1.2.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWtleW1hcC4xLjIuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1rZXltYXAvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9rZXltYXBfMV8yXzNfZXhwb3J0cyIsIl9fZXhwb3J0Iiwia2V5ZG93bkhhbmRsZXIiLCJrZXltYXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3czY19rZXluYW1lIiwicmVxdWlyZSIsImltcG9ydF9wcm9zZW1pcnJvcl9zdGF0ZSIsIm1hYyIsIm5hdmlnYXRvciIsInRlc3QiLCJwbGF0Zm9ybSIsIndpbmRvd3MiLCJub3JtYWxpemVLZXlOYW1lIiwibmFtZSIsInBhcnRzIiwic3BsaXQiLCJyZXN1bHQiLCJsZW5ndGgiLCJhbHQiLCJjdHJsIiwic2hpZnQiLCJtZXRhIiwiaSIsIm1vZCIsIkVycm9yIiwibm9ybWFsaXplIiwibWFwIiwiY29weSIsIk9iamVjdCIsImNyZWF0ZSIsInByb3AiLCJtb2RpZmllcnMiLCJldmVudCIsImFsdEtleSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJiaW5kaW5ncyIsIlBsdWdpbiIsInByb3BzIiwiaGFuZGxlS2V5RG93biIsInZpZXciLCJrZXlOYW1lIiwiYmFzZU5hbWUiLCJkaXJlY3QiLCJzdGF0ZSIsImRpc3BhdGNoIiwibm9TaGlmdCIsImJhc2UiLCJrZXlDb2RlIiwiZnJvbUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsZ0NBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FB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