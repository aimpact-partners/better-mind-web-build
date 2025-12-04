System.register(["react@18.3.1","get-nonce@1.0.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["get-nonce","1.0.1"],["react-style-singleton","2.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('get-nonce@1.0.1', dep)],
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

// .beyond/uimport/react-style-singleton.2.2.3.js
var react_style_singleton_2_2_3_exports = {};
__export(react_style_singleton_2_2_3_exports, {
  styleHookSingleton: () => styleHookSingleton,
  styleSingleton: () => styleSingleton,
  stylesheetSingleton: () => stylesheetSingleton
});
module.exports = __toCommonJS(react_style_singleton_2_2_3_exports);

// node_modules/react-style-singleton/dist/es2015/singleton.js
var import_get_nonce = require("get-nonce@1.0.1");
function makeStyleTag() {
  if (!document) return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = (0, import_get_nonce.getNonce)();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function () {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function (style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function () {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var React = __toESM(require("react@18.3.1"));
var styleHookSingleton = function () {
  var sheet = stylesheetSingleton();
  return function (styles, isDynamic) {
    React.useEffect(function () {
      sheet.add(styles);
      return function () {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function () {
  var useStyle = styleHookSingleton();
  var Sheet = function (_a) {
    var styles = _a.styles,
      dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9yZWFjdC1zdHlsZS1zaW5nbGV0b24uMi4yLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L3NpbmdsZXRvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczIwMTUvaG9vay5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczIwMTUvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInJlYWN0X3N0eWxlX3NpbmdsZXRvbl8yXzJfM19leHBvcnRzIiwiX19leHBvcnQiLCJzdHlsZUhvb2tTaW5nbGV0b24iLCJzdHlsZVNpbmdsZXRvbiIsInN0eWxlc2hlZXRTaW5nbGV0b24iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2dldF9ub25jZSIsInJlcXVpcmUiLCJtYWtlU3R5bGVUYWciLCJkb2N1bWVudCIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwibm9uY2UiLCJnZXROb25jZSIsInNldEF0dHJpYnV0ZSIsImluamVjdFN0eWxlcyIsImNzcyIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydFN0eWxlVGFnIiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY291bnRlciIsInN0eWxlc2hlZXQiLCJhZGQiLCJzdHlsZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIlJlYWN0IiwiX190b0VTTSIsInNoZWV0Iiwic3R5bGVzIiwiaXNEeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3R5bGUiLCJTaGVldCIsIl9hIiwiZHluYW1pYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFB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