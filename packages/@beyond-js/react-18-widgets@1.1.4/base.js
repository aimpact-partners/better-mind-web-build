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

// .beyond/uimport/temp/@beyond-js/react-18-widgets/base.1.1.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlLjEuMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93aWRnZXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3dyYXBwZXIudHMiXSwibmFtZXMiOlsiYmFzZV8xXzFfNF9leHBvcnRzIiwiX19leHBvcnQiLCJJUGFnZVdpZGdldFByb3BzIiwiSVdpZGdldFByb3BzIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwicmVxdWlyZTIiLCJfY2xpZW50IiwiX2NvbnRyb2xsZXIiLCJfd2lkZ2V0IiwiX3dyYXBwZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIndyYXBwZXIiLCJyb290IiwibW91bnRlZCIsIldpZGdldCIsIm1vdW50IiwicHJvcHMiLCJlcnJvcnMiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInN0b3JlIiwiaG9sZGVyIiwiaHlkcmF0ZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiV3JhcHBlciIsInN0eWxlcyIsImhvbGRlcjIiLCJwIiwiY3JlYXRlRWxlbWVudCIsImRlZmF1bHQiLCJoeWRyYXRlUm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZWZyZXNoIiwiY2hhbmdlZCIsIl9kZWZhdWx0IiwicnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZXYiLCJvbiIsIm9mZiIsImhlYWQiLCJyZXNvdXJjZXMiLCJtYXAiLCJ1cmwiLCJsb2FkZWQiLCJvbmxvYWRlZCIsImtleSIsImhyZWYiLCJyZWwiLCJvbkxvYWQiLCJvbkVycm9yIiwiRnJhZ21lbnQiLCJfc3R5bGVzIiwiZWxlbWVudHMiLCJwdXNoIiwicmVhZHkiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNFQSxJQUFBVSxLQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxPQUFBLEdBQUFELFFBQUE7SUFDQSxJQUFBRSxXQUFBLEdBQUFGLFFBQUE7SUFDQSxJQUFBRyxPQUFBLEdBQUFILFFBQUE7SUFDQSxJQUFBSSxRQUFBLEdBQUFKLFFBQUE7SUFjaUIsTUFDRkssc0JBQUEsU0FBOEJILFdBQUEsQ0FBQUksc0JBQUEsQ0FBc0I7TUFDbEUs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