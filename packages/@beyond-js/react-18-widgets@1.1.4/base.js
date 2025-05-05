System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core","@beyond-js/widgets@1.1.2/render","@beyond-js/kernel@0.1.12/styles","@beyond-js/widgets@1.1.2/controller","react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","react-dom@18.3.1/client","@beyond-js/kernel@0.1.12/routing","@beyond-js/events@0.0.7/events","@beyond-js/widgets@1.1.2/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/widgets","1.1.2"],["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@beyond-js/events","0.0.7"],["@beyond-js/react-18-widgets","1.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/styles', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/controller', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('react-dom@18.3.1/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/routing', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/routing', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/base.1.1.4.js
var base_1_1_4_exports = {};
__export(base_1_1_4_exports, {
  IPageWidgetProps: () => IPageWidgetProps,
  IWidgetProps: () => IWidgetProps,
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_1_1_4_exports);

// node_modules/@beyond-js/react-18-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
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
    "vspecifier": "@beyond-js/react-18-widgets@1.1.4/base"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS4xLjEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3N0eWxlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvd2lkZ2V0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93cmFwcGVyLnRzIl0sIm5hbWVzIjpbImJhc2VfMV8xXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVBhZ2VXaWRnZXRQcm9wcyIsIklXaWRnZXRQcm9wcyIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsInJlcXVpcmUyIiwiX2NsaWVudCIsIl9jb250cm9sbGVyIiwiX3dpZGdldCIsIl93cmFwcGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyMiIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJ3cmFwcGVyIiwicm9vdCIsIm1vdW50ZWQiLCJXaWRnZXQiLCJtb3VudCIsInByb3BzIiwiZXJyb3JzIiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIndpZGdldCIsImF0dHJpYnV0ZXMiLCJjb21wb25lbnQiLCJzdG9yZSIsImhvbGRlciIsImh5ZHJhdGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsIldyYXBwZXIiLCJzdHlsZXMiLCJob2xkZXIyIiwicCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZhdWx0IiwiaHlkcmF0ZVJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwidW5tb3VudCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImNoYW5nZWQiLCJfZGVmYXVsdCIsInJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcmV2Iiwib24iLCJvZmYiLCJoZWFkIiwicmVzb3VyY2VzIiwibWFwIiwidXJsIiwibG9hZGVkIiwib25sb2FkZWQiLCJrZXkiLCJocmVmIiwicmVsIiwib25Mb2FkIiwib25FcnJvciIsIkZyYWdtZW50IiwiX3N0eWxlcyIsImVsZW1lbnRzIiwicHVzaCIsInJlYWR5IiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRUEsSUFBQVUsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsT0FBQSxHQUFBRCxRQUFBO0lBQ0EsSUFBQUUsV0FBQSxHQUFBRixRQUFBO0lBQ0EsSUFBQUcsT0FBQSxHQUFBSCxRQUFBO0lBQ0EsSUFBQUksUUFBQSxHQUFBSixRQUFBO0lBY2lCLE1BQ0ZLLHNCQUFBLFNBQThCSCxXQUFBLENBQUFJLHNCQUFBLENBQXNCO01BQ2xFLENBQUFD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RCxPQUFBO01BR2xCLE1BQU1hLE1BQUEsSUFBbUIsTUFBSztRQUM3QixDQUFDN0IsTUFBQSxDQUFPNkIsTUFBQSxJQUFVN0IsTUFBQSxDQUFPd0MsS0FBQSxDQUFNQyxJQUFBLENBQUt6QixPQUFPO1FBQzNDckIsTUFBQSxDQUFPK0MsS0FBQSxDQUFNQyxPQUFBLEdBQVU7UUFDdkIsT0FBTzNDLE1BQUEsQ0FBTzZCLE1BQUE7TUFDZixHQUFFO01BRUYsTUFBTTtRQUFFN0M7TUFBTSxJQUFLSCxPQUFBO01BQ25CLE1BQU1VLE1BQUEsR0FBU2xCLEtBQUEsQ0FBQThCLGFBQUEsQ0FBQ25CLE1BQUEsRUFBTTtRQUFDK0MsR0FBQSxFQUFJO1FBQVEsR0FBSzdDO01BQUs7TUFDN0MsQ0FBQ1UsT0FBQSxJQUFXaUMsTUFBQSxLQUFXUyxRQUFBLENBQVNDLElBQUEsQ0FBS2hELE1BQU07TUFFM0MsT0FBT2xCLEtBQUEsQ0FBQThCLGFBQUEsQ0FBQTlCLEtBQUEsQ0FBQStELFFBQUEsUUFBR0UsUUFBUTtJQUNuQjs7Ozs7Ozs7Ozs7O0lDdEJNLE1BQU92QyxPQUFBLENBQU87TUFDbkIsQ0FBQWYsTUFBQTtNQUNBLElBQUlBLE9BQUEsRUFBTTtRQUNULE9BQU8sS0FBSyxDQUFBQSxNQUFBLENBQVFBLE1BQUE7TUFDckI7TUFHQWlDLE9BQUEsR0FBVUEsQ0FBQSxLQUFZO01BRXRCMkIsWUFBWTVELE1BQUEsRUFBNkI7UUFDeEMsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7TUFDaEI7O0lBQ0FiLE9BQUEsQ0FBQTRCLE9BQUEsR0FBQUEsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=