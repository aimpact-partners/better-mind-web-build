System.register(["@beyond-js/kernel@0.1.14/bundle","@beyond-js/kernel@0.1.14/core","@beyond-js/widgets@1.1.2/render","@beyond-js/kernel@0.1.14/routing","@beyond-js/events@0.0.7/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["@beyond-js/widgets","1.1.2"],["@beyond-js/events","0.0.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/routing', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/routing.1.1.2.js
var routing_1_1_2_exports = {};
__export(routing_1_1_2_exports, {
  LayoutInstance: () => LayoutInstance,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
});
module.exports = __toCommonJS(routing_1_1_2_exports);

// node_modules/@beyond-js/widgets/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.14/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@1.1.2/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.14/routing"), 0);
var dependency_4 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@1.1.2/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3], ["@beyond-js/events/events", dependency_4]]);
var ims = /* @__PURE__ */new Map();
ims.set("./layouts/index", {
  hash: 2720616762,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      register(layout) {
        this.set(layout.id, layout);
      }
    }
    exports.default = _default;
  }
});
ims.set("./layouts/layout", {
  hash: 3657772330,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LayoutInstance = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class LayoutInstance2 extends _core.Events {
      get is() {
        return "layout";
      }
      #layouts;
      #element;
      get element() {
        return this.#element;
      }
      get id() {
        return this.#element;
      }
      // The active child in the layout
      #active;
      get active() {
        return this.#active;
      }
      // Property #parent is undefined only if it is the main layout
      #parent;
      // The layouts and pages that are contained in the current layout
      #children = /* @__PURE__ */new Map();
      get children() {
        return this.#children;
      }
      /**
       * Layout constructor
       *
       * @param {Layouts} layouts The layouts registry
       * @param {string} element The element name of the widget. Undefined if the project does not set a layout
       * and the index.html has a <beyond-layout-children/> as its main layout container
       * @param {Layout} parent The parent layout. Undefined if it is the main layout
       */
      constructor(layouts, element, parent) {
        super();
        this.#layouts = layouts;
        this.#element = element ? element : "main";
        this.#parent = parent;
      }
      /**
       * Activates the current page being navigated
       * Create the layout instance if not previously created
       *
       * @param {PageInstance} page The page being navigated
       */
      activate(page, layouts) {
        const child = (() => {
          if (!layouts.length) return page;
          const {
            name: element
          } = layouts[0];
          const found = [...this.#children.values()].find(child2 => child2.element === element);
          if (found) return found;
          const layout = new LayoutInstance2(this.#layouts, element, this);
          this.#layouts.register(layout);
          return layout;
        })();
        this.#children.set(child.id, child);
        const changed = this.#active !== child;
        changed && this.#active?.is === "layout" && this.#active.deactivate();
        this.#active = child;
        layouts.shift();
        child.is === "layout" && child.activate(page, layouts);
        changed && this.trigger("change");
      }
      deactivate() {
        const active = this.#active;
        if (!active) {
          console.warn(`Layout "${this.#element}" doesn't have any active child`);
          return;
        }
        this.#active = void 0;
        active.is === "layout" && active.deactivate();
        this.trigger("change");
      }
    }
    exports.LayoutInstance = LayoutInstance2;
  }
});
ims.set("./manager", {
  hash: 772391908,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.manager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _routing = require2("@beyond-js/kernel/routing");
    var _layout = require2("./layouts/layout");
    var _pages = require2("./pages");
    var _layouts = require2("./layouts");
    var _route = require2("./pages/route");
    class Manager {
      // The registry of all layouts (except the main layout) and pages instances registered in the session
      #instances = {
        layouts: new _layouts.default(),
        pages: new _pages.default()
      };
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      constructor() {
        const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));
        const {
          specifier
        } = globalThis.__app_package;
        Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
          default: config
        }]) => {
          this.#main = new _layout.LayoutInstance(this.#instances.layouts, config.layout);
          _routing.routing.on("change", set);
          _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
        });
      }
      get layouts() {
        return this.#instances.layouts;
      }
      get pages() {
        return this.#instances.pages;
      }
      // The main layout can be a custom element specified in the package.json
      // Otherwise, if it is not specified, the beyond-layout-children
      // will be set as default
      #main;
      get main() {
        return this.#main;
      }
      #ct = new _core.CancellationToken();
      async set(uri) {
        const cid = this.#ct.reset();
        const route = new _route.Route(uri.pathname);
        await route.process();
        if (!this.#ct.check(cid)) return;
        const done = () => {
          !this.#initialised && this.#resolve();
          this.#initialised = true;
        };
        const {
          page: element
        } = route;
        if (!element) {
          console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
          return done();
        }
        const page = this.#instances.pages.register(uri, route);
        const {
          error,
          value: layouts
        } = page.parents;
        if (error) {
          console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
          return done();
        }
        layouts.length && layouts[0].name === this.main.element && layouts.shift();
        this.#main.activate(page, layouts);
        return done();
      }
    }
    const manager2 = exports.manager = typeof process === "object" ? void 0 : new Manager();
  }
});
ims.set("./pages/index", {
  hash: 618566399,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _instance = require2("./instance");
    class _default extends Map {
      // @deprecated: Use .obtain instead of this method
      instance(id) {
        return [...this.values()].find(instance => instance.id === id);
      }
      obtain({
        widget,
        id
      }) {
        if (id) return this.instance(id);
        const child = widget.getAttribute("data-child-id");
        return this.instance(child);
      }
      register(uri, route) {
        const {
          pathname
        } = uri;
        const instance = (() => {
          if (!this.has(pathname)) return new _instance.PageInstance(uri, route);
          const instance2 = this.get(pathname);
          instance2.uri.update(uri);
          return instance2;
        })();
        this.set(pathname, instance);
        return instance;
      }
    }
    exports.default = _default;
  }
});
ims.set("./pages/instance", {
  hash: 3034563768,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageInstance = void 0;
    var _render = require2("@beyond-js/widgets/render");
    var _uri = require2("./uri");
    let id = 0;
    class PageInstance2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      get route() {
        return this.#uri.route;
      }
      get element() {
        return this.#uri.route.page;
      }
      get is() {
        return "page";
      }
      #id;
      get id() {
        return `${this.element}:${this.#id}`;
      }
      constructor(uri, route) {
        this.#uri = new _uri.PageURI({
          uri,
          route
        });
        this.#id = ++id;
      }
      /**
       * Returns the ascending layouts for the current page
       *
       * @return {{error?: string, parents?: IWidgetSpecs[]}}
       */
      get parents() {
        const output = [];
        const widget = _render.widgets.get(this.element);
        if (!widget) throw new Error(`Widget "${this.element}" not found`);
        let {
          layout
        } = widget;
        while (layout) {
          const found = [..._render.widgets.values()].find(({
            name
          }) => name === layout);
          if (!found) {
            const error = `Layout "${layout}" not found`;
            return {
              error
            };
          }
          output.unshift(found);
          layout = found.layout;
        }
        return {
          value: output
        };
      }
    }
    exports.PageInstance = PageInstance2;
  }
});
ims.set("./pages/route", {
  hash: 228538911,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Route = void 0;
    var _render = require2("@beyond-js/widgets/render");
    var _routing = require2("@beyond-js/kernel/routing");
    class Route2 {
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #page;
      get page() {
        return this.#page;
      }
      #vars;
      get vars() {
        return this.#vars;
      }
      constructor(pathname) {
        this.#pathname = pathname;
      }
      async process() {
        const pathname = this.#pathname.split("/");
        const registered = /* @__PURE__ */new Map();
        _render.widgets.forEach(({
          is,
          name,
          route
        }) => is === "page" && registered.set(name, route.split("/")));
        const target = [...registered].filter(([, route]) => route.length === pathname.length);
        this.#vars = /* @__PURE__ */new Map();
        const found = target.find(([, route]) => {
          this.#vars.clear();
          for (let i = 0; i < pathname.length; i++) {
            const dir = route[i];
            if (dir.startsWith("${") && dir.endsWith("}")) {
              const vname = dir.slice(2, dir.length - 1);
              this.#vars.set(vname, pathname[i]);
              continue;
            }
            if (dir !== pathname[i]) return false;
          }
          return true;
        });
        this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
      }
    }
    exports.Route = Route2;
  }
});
ims.set("./pages/uri", {
  hash: 3243525408,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageURI = void 0;
    var _events = require2("@beyond-js/events/events");
    class PageURI2 extends _events.Events {
      #route;
      get route() {
        return this.#route;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      get pathname() {
        return this.#uri.pathname;
      }
      get search() {
        return this.#uri.search;
      }
      get qs() {
        return this.#uri.qs;
      }
      get hash() {
        return this.#uri.hash;
      }
      get vars() {
        return this.#route.vars;
      }
      constructor({
        uri,
        route
      }) {
        super();
        this.#route = route;
        this.#uri = uri;
      }
      update(uri) {
        if (this.#uri === uri) return;
        this.#uri = uri;
        const {
          qs
        } = this;
        this.trigger("change", {
          qs
        });
      }
    }
    exports.PageURI = PageURI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./layouts/layout",
  "from": "LayoutInstance",
  "name": "LayoutInstance"
}, {
  "im": "./manager",
  "from": "manager",
  "name": "manager"
}, {
  "im": "./pages/instance",
  "from": "PageInstance",
  "name": "PageInstance"
}, {
  "im": "./pages/route",
  "from": "Route",
  "name": "Route"
}, {
  "im": "./pages/uri",
  "from": "PageURI",
  "name": "PageURI"
}];
var LayoutInstance, manager, PageInstance, Route, PageURI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "LayoutInstance") && (LayoutInstance = require2 ? require2("./layouts/layout").LayoutInstance : value);
  (require2 || prop === "manager") && (manager = require2 ? require2("./manager").manager : value);
  (require2 || prop === "PageInstance") && (PageInstance = require2 ? require2("./pages/instance").PageInstance : value);
  (require2 || prop === "Route") && (Route = require2 ? require2("./pages/route").Route : value);
  (require2 || prop === "PageURI") && (PageURI = require2 ? require2("./pages/uri").PageURI : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nLjEuMS4yLmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2xheW91dC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvbWFuYWdlci50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5kZXgudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL3BhZ2VzL2luc3RhbmNlLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9yb3V0ZS50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvdXJpLnRzIl0sIm5hbWVzIjpbInJvdXRpbmdfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTGF5b3V0SW5zdGFuY2UiLCJQYWdlSW5zdGFuY2UiLCJQYWdlVVJJIiwiUm91dGUiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtYW5hZ2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9kZWZhdWx0IiwiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJzZXQiLCJpZCIsImRlZmF1bHQiLCJfY29yZSIsInJlcXVpcmUyIiwiTGF5b3V0SW5zdGFuY2UyIiwiRXZlbnRzIiwiaXMiLCJsYXlvdXRzIiwiZWxlbWVudCIsImFjdGl2ZSIsInBhcmVudCIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJhY3RpdmF0ZSIsInBhZ2UiLCJjaGlsZCIsImxlbmd0aCIsIm5hbWUiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGlsZDIiLCJjaGFuZ2VkIiwiZGVhY3RpdmF0ZSIsInNoaWZ0IiwidHJpZ2dlciIsImNvbnNvbGUiLCJ3YXJuIiwiX3JvdXRpbmciLCJfbGF5b3V0IiwiX3BhZ2VzIiwiX2xheW91dHMiLCJfcm91dGUiLCJNYW5hZ2VyIiwiaW5zdGFuY2VzIiwicGFnZXMiLCJpbml0aWFsaXNlZCIsInJlc29sdmUiLCJyZWFkeSIsIlByb21pc2UiLCJyb3V0aW5nIiwidXJpIiwiY2F0Y2giLCJleGMiLCJsb2ciLCJzdGFjayIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYWxsIiwiYmltcG9ydCIsInRoZW4iLCJjb25maWciLCJtYWluIiwib24iLCJjdCIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsInBhdGhuYW1lIiwicHJvY2VzcyIsImNoZWNrIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJwYXJlbnRzIiwibWFuYWdlcjIiLCJfaW5zdGFuY2UiLCJpbnN0YW5jZSIsIm9idGFpbiIsIndpZGdldCIsImdldEF0dHJpYnV0ZSIsImhhcyIsImluc3RhbmNlMiIsImdldCIsInVwZGF0ZSIsIl9yZW5kZXIiLCJfdXJpIiwiUGFnZUluc3RhbmNlMiIsIm91dHB1dCIsIndpZGdldHMiLCJFcnJvciIsInVuc2hpZnQiLCJSb3V0ZTIiLCJ2YXJzIiwic3BsaXQiLCJyZWdpc3RlcmVkIiwiZm9yRWFjaCIsInRhcmdldCIsImZpbHRlciIsImNsZWFyIiwiaSIsImRpciIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInZuYW1lIiwic2xpY2UiLCJtaXNzaW5nIiwiX2V2ZW50cyIsIlBhZ2VVUkkyIiwic2VhcmNoIiwicXMiLCJoYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFB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