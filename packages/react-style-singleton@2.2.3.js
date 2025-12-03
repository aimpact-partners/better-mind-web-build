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

// .beyond/uimport/temp/react-style-singleton.2.2.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi4yLjIuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczIwMTUvc2luZ2xldG9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9ob29rLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9jb21wb25lbnQuanMiXSwibmFtZXMiOlsicmVhY3Rfc3R5bGVfc2luZ2xldG9uXzJfMl8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsInN0eWxlSG9va1NpbmdsZXRvbiIsInN0eWxlU2luZ2xldG9uIiwic3R5bGVzaGVldFNpbmdsZXRvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZ2V0X25vbmNlIiwicmVxdWlyZSIsIm1ha2VTdHlsZVRhZyIsImRvY3VtZW50IiwidGFnIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJub25jZSIsImdldE5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5qZWN0U3R5bGVzIiwiY3NzIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0U3R5bGVUYWciLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb3VudGVyIiwic3R5bGVzaGVldCIsImFkZCIsInN0eWxlIiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiUmVhY3QiLCJfX3RvRVNNIiwic2hlZXQiLCJzdHlsZXMiLCJpc0R5bmFtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdHlsZSIsIlNoZWV0IiwiX2EiLCJkeW5hbWljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1DQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUNBQUE7RUFBQUUsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsbUNBQUE7OztBQ0FBLElBQUFRLGdCQUFBLEdBQXlCQyxPQUFBO0FBQ3pCLFNBQVNDLGFBQUEsRUFBZTtFQUNwQixJQUFJLENBQUNDLFFBQUEsRUFDRCxPQUFPO0VBQ1gsSUFBSUMsR0FBQSxHQUFNRCxRQUFBLENBQVNFLGFBQUEsQ0FBYyxPQUFPO0VBQ3hDRCxHQUFBLENBQUlFLElBQUEsR0FBTztFQUNYLElBQUlDLEtBQUEsT0FBUVAsZ0JBQUEsQ0FBQVEsUUFBQSxFQUFTO0VBQ3JCLElBQUlELEtBQUEsRUFBTztJQUNQSCxHQUFBLENBQUlLLFlBQUEsQ0FBYSxTQUFTRixLQUFLO0VBQ25DO0VBQ0EsT0FBT0gsR0FBQTtBQUNYO0FBQ0EsU0FBU00sYUFBYU4sR0FBQSxFQUFLTyxHQUFBLEVBQUs7RUFFNUIsSUFBSVAsR0FBQSxDQUFJUSxVQUFBLEVBQVk7SUFFaEJSLEdBQUEsQ0FBSVEsVUFBQSxDQUFXQyxPQUFBLEdBQVVGLEdBQUE7RUFDN0IsT0FDSztJQUNEUCxHQUFBLENBQUlVLFdBQUEsQ0FBWVgsUUFBQSxDQUFTWSxjQUFBLENBQWVKLEdBQUcsQ0FBQztFQUNoRDtBQUNKO0FBQ0EsU0FBU0ssZUFBZVosR0FBQSxFQUFLO0VBQ3pCLElBQUlhLElBQUEsR0FBT2QsUUFBQSxDQUFTYyxJQUFBLElBQVFkLFFBQUEsQ0FBU2Usb0JBQUEsQ0FBcUIsTUFBTSxFQUFFLENBQUM7RUFDbkVELElBQUEsQ0FBS0gsV0FBQSxDQUFZVixHQUFHO0FBQ3hCO0FBQ08sSUFBSVIsbUJBQUEsR0FBc0IsU0FBQUEsQ0FBQSxFQUFZO0VBQ3pDLElBQUl1QixPQUFBLEdBQVU7RUFDZCxJQUFJQyxVQUFBLEdBQWE7RUFDakIsT0FBTztJQUNIQyxHQUFBLEVBQUssU0FBQUEsQ0FBVUMsS0FBQSxFQUFPO01BQ2xCLElBQUlILE9BQUEsSUFBVyxHQUFHO1FBQ2QsSUFBS0MsVUFBQSxHQUFhbEIsWUFBQSxDQUFhLEdBQUk7VUFDL0JRLFlBQUEsQ0FBYVUsVUFBQSxFQUFZRSxLQUFLO1VBQzlCTixjQUFBLENBQWVJLFVBQVU7UUFDN0I7TUFDSjtNQUNBRCxPQUFBO0lBQ0o7SUFDQUksTUFBQSxFQUFRLFNBQUFBLENBQUEsRUFBWTtNQUNoQkosT0FBQTtNQUNBLElBQUksQ0FBQ0EsT0FBQSxJQUFXQyxVQUFBLEVBQVk7UUFDeEJBLFVBQUEsQ0FBV0ksVUFBQSxJQUFjSixVQUFBLENBQVdJLFVBQUEsQ0FBV0MsV0FBQSxDQUFZTCxVQUFVO1FBQ3JFQSxVQUFBLEdBQWE7TUFDakI7SUFDSjtFQUNKO0FBQ0o7OztBQy9DQSxJQUFBTSxLQUFBLEdBQXVCQyxPQUFBLENBQUExQixPQUFBO0FBV2hCLElBQUlQLGtCQUFBLEdBQXFCLFNBQUFBLENBQUEsRUFBWTtFQUN4QyxJQUFJa0MsS0FBQSxHQUFRaEMsbUJBQUEsQ0FBb0I7RUFDaEMsT0FBTyxVQUFVaUMsTUFBQSxFQUFRQyxTQUFBLEVBQVc7SUFDMUJKLEtBQUEsQ0FBQUssU0FBQSxDQUFVLFlBQVk7TUFDeEJILEtBQUEsQ0FBTVAsR0FBQSxDQUFJUSxNQUFNO01BQ2hCLE9BQU8sWUFBWTtRQUNmRCxLQUFBLENBQU1MLE1BQUEsQ0FBTztNQUNqQjtJQUNKLEdBQUcsQ0FBQ00sTUFBQSxJQUFVQyxTQUFTLENBQUM7RUFDNUI7QUFDSjs7O0FDZE8sSUFBSW5DLGNBQUEsR0FBaUIsU0FBQUEsQ0FBQSxFQUFZO0VBQ3BDLElBQUlxQyxRQUFBLEdBQVd0QyxrQkFBQSxDQUFtQjtFQUNsQyxJQUFJdUMsS0FBQSxHQUFRLFNBQUFBLENBQVVDLEVBQUEsRUFBSTtJQUN0QixJQUFJTCxNQUFBLEdBQVNLLEVBQUEsQ0FBR0wsTUFBQTtNQUFRTSxPQUFBLEdBQVVELEVBQUEsQ0FBR0MsT0FBQTtJQUNyQ0gsUUFBQSxDQUFTSCxNQUFBLEVBQVFNLE9BQU87SUFDeEIsT0FBTztFQUNYO0VBQ0EsT0FBT0YsS0FBQTtBQUNYIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==