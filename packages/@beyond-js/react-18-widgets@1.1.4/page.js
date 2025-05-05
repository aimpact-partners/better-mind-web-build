System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core","@beyond-js/widgets@1.1.2/render","@beyond-js/kernel@0.1.12/routing","@beyond-js/events@0.0.7/events","@beyond-js/widgets@1.1.2/routing","@beyond-js/kernel@0.1.12/styles","@beyond-js/widgets@1.1.2/controller","react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","react-dom@18.3.1/client","@beyond-js/react-18-widgets@1.1.4/base"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/widgets","1.1.2"],["@beyond-js/events","0.0.7"],["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@beyond-js/react-18-widgets","1.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/routing', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/styles', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/controller', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('react-dom@18.3.1/client', dep), dep => dependencies.set('@beyond-js/react-18-widgets@1.1.4/base', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/react-18-widgets/page.1.1.4.js
var page_1_1_4_exports = {};
__export(page_1_1_4_exports, {
  PageReactWidgetController: () => PageReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(page_1_1_4_exports);

// node_modules/@beyond-js/react-18-widgets/page/page.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@1.1.2/routing"), 0);
var dependency_2 = __toESM(require("@beyond-js/react-18-widgets@1.1.4/base"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.1.4/page"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/routing", dependency_1], ["@beyond-js/react-18-widgets/base", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./page", {
  hash: 953195477,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageReactWidgetController = void 0;
    var _base = require2("@beyond-js/react-18-widgets/base");
    var _routing = require2("@beyond-js/widgets/routing");
    class PageReactWidgetController2 extends _base.ReactWidgetController {
      #uri;
      get uri() {
        return this.#uri;
      }
      mount() {
        return super.mount({
          uri: this.#uri
        });
      }
      onQueryStringChange({
        qs
      }) {}
      async initialise() {
        const {
          widget
        } = this;
        const {
          uri
        } = _routing.manager.pages.obtain({
          widget
        });
        uri.on("change", this.onQueryStringChange.bind(this));
        this.#uri = uri;
        await super.initialise();
      }
    }
    exports.PageReactWidgetController = PageReactWidgetController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./page",
  "from": "PageReactWidgetController",
  "name": "PageReactWidgetController"
}];
var PageReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "PageReactWidgetController") && (PageReactWidgetController = require2 ? require2("./page").PageReactWidgetController : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvcGFnZS4xLjEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvcGFnZS9fX3NvdXJjZXMvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbInBhZ2VfMV8xXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfYmFzZSIsInJlcXVpcmUyIiwiX3JvdXRpbmciLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyMiIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInVyaSIsIm1vdW50Iiwib25RdWVyeVN0cmluZ0NoYW5nZSIsInFzIiwiaW5pdGlhbGlzZSIsIndpZGdldCIsIm1hbmFnZXIiLCJwYWdlcyIsIm9idGFpbiIsIm9uIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSUEsSUFBQVEsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsUUFBQSxHQUFBRCxRQUFBO0lBRWlCLE1BQ0ZFLDBCQUFBLFNBQWtDSCxLQUFBLENBQUFJLHFCQUFBLENBQXFCO01BQ3JFLENBQUFDLEdBQUE7TUFDQSxJQUFJQSxJQUFBLEVBQUc7UUFDTixPQUFPLEtBQUssQ0FBQUEsR0FBQTtNQUNiO01BRUFDLE1BQUEsRUFBSztRQUNKLE9BQU8sTUFBTUEsS0FBQSxDQUFNO1VBQUVELEdBQUEsRUFBSyxLQUFLLENBQUFBO1FBQUksQ0FBRTtNQUN0QztNQUVBRSxvQkFBb0I7UUFBRUM7TUFBRSxHQUFxQixDQUU3QztNQUVBLE1BQU1DLFdBQUEsRUFBVTtRQUNmLE1BQU07VUFBRUM7UUFBTSxJQUFLO1FBQ25CLE1BQU07VUFBRUw7UUFBRyxJQUFLSCxRQUFBLENBQUFTLE9BQUEsQ0FBUUMsS0FBQSxDQUFNQyxNQUFBLENBQU87VUFBRUg7UUFBNEIsQ0FBRTtRQUNyRUwsR0FBQSxDQUFJUyxFQUFBLENBQUcsVUFBVSxLQUFLUCxtQkFBQSxDQUFvQlEsSUFBQSxDQUFLLElBQUksQ0FBQztRQUNwRCxLQUFLLENBQUFWLEdBQUEsR0FBT0EsR0FBQTtRQUVaLE1BQU0sTUFBTUksVUFBQSxDQUFVO01BQ3ZCOztJQUNBWCxPQUFBLENBQUFKLHlCQUFBLEdBQUFTLDBCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==