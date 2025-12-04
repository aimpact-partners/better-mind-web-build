System.register(["@beyond-js/kernel@0.1.14/bundle","@beyond-js/kernel@0.1.14/core","@beyond-js/widgets@1.1.2/render","@beyond-js/kernel@0.1.14/styles","@beyond-js/widgets@1.1.2/controller","react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","react-dom@18.3.1/client","@beyond-js/kernel@0.1.14/routing","@beyond-js/events@0.0.7/events","@beyond-js/widgets@1.1.2/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["@beyond-js/widgets","1.1.2"],["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@beyond-js/events","0.0.7"],["@beyond-js/react-18-widgets","1.1.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/styles', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/controller', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('react-dom@18.3.1/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/routing', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/routing', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/base.1.1.8.js
var base_1_1_8_exports = {};
__export(base_1_1_8_exports, {
  IPageWidgetProps: () => IPageWidgetProps,
  IWidgetProps: () => IWidgetProps,
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_1_1_8_exports);

// node_modules/@beyond-js/react-18-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@1.1.2/controller"), 0);
var dependency_2 = __toESM(require("react@18.3.1"), 0);
var dependency_3 = __toESM(require("react-dom@18.3.1/client"), 0);
var dependency_4 = __toESM(require("@beyond-js/widgets@1.1.2/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.1.7/base"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/controller", dependency_1], ["react", dependency_2], ["react-dom/client", dependency_3], ["@beyond-js/widgets/routing", dependency_4]]);
var ims = /* @__PURE__ */new Map();
ims.set("./controller", {
  hash: 2404965063,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactWidgetController = void 0;
    var React = require2("react");
    var _client = require2("react-dom/client");
    var _controller = require2("@beyond-js/widgets/controller");
    var _widget = require2("./widget");
    var _wrapper = require2("./wrapper");
    class ReactWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      #root;
      #mounted = false;
      get mounted() {
        return this.#mounted;
      }
      // This property must be overwritten
      get Widget() {
        return null;
      }
      mount(props) {
        if (this.#mounted) return;
        this.#mounted = true;
        if (!this.Widget) {
          return {
            errors: [`Widget "${this.element}" does not export a Widget class`]
          };
        }
        props = Object.assign({
          widget: this.widget,
          attributes: this.attributes,
          component: this.widget,
          store: this.store
        }, props ? props : {});
        const holder = this.widget.holder;
        const hydrate = !!holder.children.length;
        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const {
            styles,
            widget
          } = this;
          const {
            holder: holder2
          } = widget;
          const p = {
            wrapper,
            props,
            styles,
            holder: holder2,
            hydrate
          };
          const element = React.createElement(_widget.default, p);
          if (hydrate) {
            this.#root = (0, _client.hydrateRoot)(holder2, element);
          } else {
            const root = this.#root = (0, _client.createRoot)(holder2);
            root.render(element);
          }
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {
        if (!this.#mounted) return;
        this.#mounted = false;
        globalThis.setTimeout(() => this.#root.unmount(), 0);
      }
      refresh() {
        this.#wrapper.changed();
      }
    }
    exports.ReactWidgetController = ReactWidgetController2;
  }
});
ims.set("./styles", {
  hash: 3367909987,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    function _default({
      styles
    }) {
      const rs = React.useState(0);
      React.useEffect(() => {
        const refresh = () => rs[1](prev => prev + 1);
        styles.on("change", refresh);
        return () => styles.off("change", refresh) && void 0;
      }, []);
      const head = [...styles.resources].map(url => {
        const loaded = () => styles.onloaded(url);
        return React.createElement("link", {
          key: url,
          href: url,
          rel: "stylesheet",
          onLoad: loaded,
          onError: loaded
        });
      });
      return React.createElement(React.Fragment, null, head);
    }
  }
});
ims.set("./widget", {
  hash: 2641106731,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    var _styles = require2("./styles");
    function _default({
      wrapper,
      props,
      styles,
      holder,
      hydrate
    }) {
      const elements = [];
      elements.push(React.createElement(_styles.default, {
        key: "styles",
        styles,
        widget: props.widget
      }));
      const rs = React.useState(0);
      const refresh = () => rs[1](rs[0] + 1);
      wrapper.changed = refresh;
      const loaded = (() => {
        !styles.loaded && styles.ready.then(refresh);
        holder.style.display = "";
        return styles.loaded;
      })();
      const {
        Widget
      } = wrapper;
      const widget = React.createElement(Widget, {
        key: "widget",
        ...props
      });
      (hydrate || loaded) && elements.push(widget);
      return React.createElement(React.Fragment, null, elements);
    }
  }
});
ims.set("./wrapper", {
  hash: 4085792261,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Wrapper = void 0;
    class Wrapper {
      #Widget;
      get Widget() {
        return this.#Widget.Widget;
      }
      // Property changed should be overwritten to get notified about HMR changes
      changed = () => void 0;
      constructor(Widget) {
        this.#Widget = Widget;
      }
    }
    exports.Wrapper = Wrapper;
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "IWidgetProps",
  "name": "IWidgetProps"
}, {
  "im": "./controller",
  "from": "IPageWidgetProps",
  "name": "IPageWidgetProps"
}, {
  "im": "./controller",
  "from": "ReactWidgetController",
  "name": "ReactWidgetController"
}];
var IWidgetProps, IPageWidgetProps, ReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "IWidgetProps") && (IWidgetProps = require2 ? require2("./controller").IWidgetProps : value);
  (require2 || prop === "IPageWidgetProps") && (IPageWidgetProps = require2 ? require2("./controller").IPageWidgetProps : value);
  (require2 || prop === "ReactWidgetController") && (ReactWidgetController = require2 ? require2("./controller").ReactWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS4xLjEuOC5qcyIsImZpbGU6Ly8vX19zb3VyY2VzL2Jhc2UvY29udHJvbGxlci50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2Jhc2Uvc3R5bGVzLnRzeCIsImZpbGU6Ly8vX19zb3VyY2VzL2Jhc2Uvd2lkZ2V0LnRzeCIsImZpbGU6Ly8vX19zb3VyY2VzL2Jhc2Uvd3JhcHBlci50cyJdLCJuYW1lcyI6WyJiYXNlXzFfMV84X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklQYWdlV2lkZ2V0UHJvcHMiLCJJV2lkZ2V0UHJvcHMiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJyZXF1aXJlMiIsIl9jbGllbnQiLCJfY29udHJvbGxlciIsIl93aWRnZXQiLCJfd3JhcHBlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlcjIiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwid3JhcHBlciIsInJvb3QiLCJtb3VudGVkIiwiV2lkZ2V0IiwibW91bnQiLCJwcm9wcyIsImVycm9ycyIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic3RvcmUiLCJob2xkZXIiLCJoeWRyYXRlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJXcmFwcGVyIiwic3R5bGVzIiwiaG9sZGVyMiIsInAiLCJjcmVhdGVFbGVtZW50IiwiZGVmYXVsdCIsImh5ZHJhdGVSb290IiwiY3JlYXRlUm9vdCIsInJlbmRlciIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInVubW91bnQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlZnJlc2giLCJjaGFuZ2VkIiwiX2RlZmF1bHQiLCJycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJldiIsIm9uIiwib2ZmIiwiaGVhZCIsInJlc291cmNlcyIsIm1hcCIsInVybCIsImxvYWRlZCIsIm9ubG9hZGVkIiwia2V5IiwiaHJlZiIsInJlbCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9zdHlsZXMiLCJlbGVtZW50cyIsInB1c2giLCJyZWFkeSIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRUEsSUFBQVUsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsT0FBQSxHQUFBRCxRQUFBO0lBQ0EsSUFBQUUsV0FBQSxHQUFBRixRQUFBO0lBQ0EsSUFBQUcsT0FBQSxHQUFBSCxRQUFBO0lBQ0EsSUFBQUksUUFBQSxHQUFBSixRQUFBO0lBY2lCLE1BQ0ZLLHNCQUFBLFNBQThCSCxXQUFBLENBQUFJLHNCQUFBLENBQXNCO01BQ2xFLENBQUFDLE9BQUE7TUFDQSxDQUFBQyxJQUFBO01BRUEsQ0FBQUMsT0FBQSxHQUFXO01BQ1gsSUFBSUEsUUFBQSxFQUFPO1FBQ1YsT0FBTyxLQUFLLENBQUFBLE9BQUE7TUFDYjs7TUFHQSxJQUFJQyxPQUFBLEVBQU07UUFDVCxPQUFPO01BQ1I7TUFFQUMsTUFBTUMsS0FBQSxFQUEyQjtRQUNo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T0FBQSxHQUFVO1FBQ3ZCLE9BQU8zQyxNQUFBLENBQU82QixNQUFBO01BQ2YsR0FBRTtNQUVGLE1BQU07UUFBRTdDO01BQU0sSUFBS0gsT0FBQTtNQUNuQixNQUFNVSxNQUFBLEdBQVNsQixLQUFBLENBQUE4QixhQUFBLENBQUNuQixNQUFBLEVBQU07UUFBQytDLEdBQUEsRUFBSTtRQUFRLEdBQUs3QztNQUFLO01BQzdDLENBQUNVLE9BQUEsSUFBV2lDLE1BQUEsS0FBV1MsUUFBQSxDQUFTQyxJQUFBLENBQUtoRCxNQUFNO01BRTNDLE9BQU9sQixLQUFBLENBQUE4QixhQUFBLENBQUE5QixLQUFBLENBQUErRCxRQUFBLFFBQUdFLFFBQVE7SUFDbkI7Ozs7Ozs7Ozs7OztJQ3RCTSxNQUFPdkMsT0FBQSxDQUFPO01BQ25CLENBQUFmLE1BQUE7TUFDQSxJQUFJQSxPQUFBLEVBQU07UUFDVCxPQUFPLEtBQUssQ0FBQUEsTUFBQSxDQUFRQSxNQUFBO01BQ3JCOztNQUdBaUMsT0FBQSxHQUFVQSxDQUFBLEtBQVk7TUFFdEIyQixZQUFZNUQsTUFBQSxFQUE2QjtRQUN4QyxLQUFLLENBQUFBLE1BQUEsR0FBVUEsTUFBQTtNQUNoQjs7SUFDQWIsT0FBQSxDQUFBNEIsT0FBQSxHQUFBQSxPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==