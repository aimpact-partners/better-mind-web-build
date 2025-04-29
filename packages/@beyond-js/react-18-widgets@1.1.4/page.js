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

// .beyond/uimport/temp/@beyond-js/react-18-widgets/page.1.1.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9wYWdlLjEuMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9wYWdlL19fc291cmNlcy9wYWdlL3BhZ2UudHMiXSwibmFtZXMiOlsicGFnZV8xXzFfNF9leHBvcnRzIiwiX19leHBvcnQiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9iYXNlIiwicmVxdWlyZTIiLCJfcm91dGluZyIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwidXJpIiwibW91bnQiLCJvblF1ZXJ5U3RyaW5nQ2hhbmdlIiwicXMiLCJpbml0aWFsaXNlIiwid2lkZ2V0IiwibWFuYWdlciIsInBhZ2VzIiwib2J0YWluIiwib24iLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNJQSxJQUFBUSxLQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxRQUFBLEdBQUFELFFBQUE7SUFFaUIsTUFDRkUsMEJBQUEsU0FBa0NILEtBQUEsQ0FBQUkscUJBQUEsQ0FBcUI7TUFDckUsQ0FBQUMsR0FBQTtNQUNBLElBQUlBLElBQUEsRUFBRztRQUNOLE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2I7TUFFQUMsTUFBQSxFQUFLO1FBQ0osT0FBTyxNQUFNQSxLQUFBLENBQU07VUFBRUQsR0FBQSxFQUFLLEtBQUssQ0FBQUE7UUFBSSxDQUFFO01BQ3RDO01BRUFFLG9CQUFvQjtRQUFFQztNQUFFLEdBQXFCLENBRTdDO01BRUEsTUFBTUMsV0FBQSxFQUFVO1FBQ2YsTUFBTTtVQUFFQztRQUFNLElBQUs7UUFDbkIsTUFBTTtVQUFFTDtRQUFHLElBQUtILFFBQUEsQ0FBQVMsT0FBQSxDQUFRQyxLQUFBLENBQU1DLE1BQUEsQ0FBTztVQUFFSDtRQUE0QixDQUFFO1FBQ3JFTCxHQUFBLENBQUlTLEVBQUEsQ0FBRyxVQUFVLEtBQUtQLG1CQUFBLENBQW9CUSxJQUFBLENBQUssSUFBSSxDQUFDO1FBQ3BELEtBQUssQ0FBQVYsR0FBQSxHQUFPQSxHQUFBO1FBRVosTUFBTSxNQUFNSSxVQUFBLENBQVU7TUFDdkI7O0lBQ0FYLE9BQUEsQ0FBQUoseUJBQUEsR0FBQVMsMEJBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=