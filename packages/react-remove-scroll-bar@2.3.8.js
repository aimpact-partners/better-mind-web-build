System.register(["react@18.3.1","get-nonce@1.0.1","react-style-singleton@2.2.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["get-nonce","1.0.1"],["react-style-singleton","2.2.3"],["react-remove-scroll-bar","2.3.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('get-nonce@1.0.1', dep), dep => dependencies.set('react-style-singleton@2.2.3', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/react-remove-scroll-bar.2.3.8.js
var react_remove_scroll_bar_2_3_8_exports = {};
__export(react_remove_scroll_bar_2_3_8_exports, {
  RemoveScrollBar: () => RemoveScrollBar,
  fullWidthClassName: () => fullWidthClassName,
  getGapWidth: () => getGapWidth,
  noScrollbarsClassName: () => noScrollbarsClassName,
  removedBarSizeVariable: () => removedBarSizeVariable,
  zeroRightClassName: () => zeroRightClassName
});
module.exports = __toCommonJS(react_remove_scroll_bar_2_3_8_exports);

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function (x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function (gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React = __toESM(require("react@18.3.1"));
var import_react_style_singleton = require("react-style-singleton@2.2.3");
var Style = (0, import_react_style_singleton.styleSingleton)();
var lockAttribute = "data-scroll-locked";
var getStyles = function (_a, allowRelative, gapMode, important) {
  var left = _a.left,
    top = _a.top,
    right = _a.right,
    gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([allowRelative && "position: relative ".concat(important, ";"), gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "), gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function () {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function () {
  React.useEffect(function () {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function () {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function (_a) {
  var noRelative = _a.noRelative,
    noImportant = _a.noImportant,
    _b = _a.gapMode,
    gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React.useMemo(function () {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React.createElement(Style, {
    styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "")
  });
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci4yLjMuOC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb25zdGFudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvdXRpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInJlYWN0X3JlbW92ZV9zY3JvbGxfYmFyXzJfM184X2V4cG9ydHMiLCJfX2V4cG9ydCIsIlJlbW92ZVNjcm9sbEJhciIsImZ1bGxXaWR0aENsYXNzTmFtZSIsImdldEdhcFdpZHRoIiwibm9TY3JvbGxiYXJzQ2xhc3NOYW1lIiwicmVtb3ZlZEJhclNpemVWYXJpYWJsZSIsInplcm9SaWdodENsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ6ZXJvR2FwIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiZ2FwIiwicGFyc2UiLCJ4IiwicGFyc2VJbnQiLCJnZXRPZmZzZXQiLCJnYXBNb2RlIiwiY3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwib2Zmc2V0cyIsImRvY3VtZW50V2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsIk1hdGgiLCJtYXgiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X3N0eWxlX3NpbmdsZXRvbiIsIlN0eWxlIiwic3R5bGVTaW5nbGV0b24iLCJsb2NrQXR0cmlidXRlIiwiZ2V0U3R5bGVzIiwiX2EiLCJhbGxvd1JlbGF0aXZlIiwiaW1wb3J0YW50IiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJnZXRDdXJyZW50VXNlQ291bnRlciIsImNvdW50ZXIiLCJnZXRBdHRyaWJ1dGUiLCJpc0Zpbml0ZSIsInVzZUxvY2tBdHRyaWJ1dGUiLCJ1c2VFZmZlY3QiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsIm5ld0NvdW50ZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJub1JlbGF0aXZlIiwibm9JbXBvcnRhbnQiLCJfYiIsInVzZU1lbW8iLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFDQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUNBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFWLHFDQUFBOzs7QUNBTyxJQUFJTyxrQkFBQSxHQUFxQjtBQUN6QixJQUFJSixrQkFBQSxHQUFxQjtBQUN6QixJQUFJRSxxQkFBQSxHQUF3QjtBQUs1QixJQUFJQyxzQkFBQSxHQUF5Qjs7O0FDUDdCLElBQUlLLE9BQUEsR0FBVTtFQUNqQkMsSUFBQSxFQUFNO0VBQ05DLEdBQUEsRUFBSztFQUNMQyxLQUFBLEVBQU87RUFDUEMsR0FBQSxFQUFLO0FBQ1Q7QUFDQSxJQUFJQyxLQUFBLEdBQVEsU0FBQUEsQ0FBVUMsQ0FBQSxFQUFHO0VBQUUsT0FBT0MsUUFBQSxDQUFTRCxDQUFBLElBQUssSUFBSSxFQUFFLEtBQUs7QUFBRztBQUM5RCxJQUFJRSxTQUFBLEdBQVksU0FBQUEsQ0FBVUMsT0FBQSxF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