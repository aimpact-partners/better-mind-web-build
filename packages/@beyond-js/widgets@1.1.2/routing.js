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

// .beyond/uimport/@beyond-js/widgets/routing.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy4xLjEuMi5qcyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvbGF5b3V0cy9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvbGF5b3V0cy9sYXlvdXQudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL21hbmFnZXIudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL3BhZ2VzL2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbnN0YW5jZS50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvcm91dGUudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL3BhZ2VzL3VyaS50cyJdLCJuYW1lcyI6WyJyb3V0aW5nXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkxheW91dEluc3RhbmNlIiwiUGFnZUluc3RhbmNlIiwiUGFnZVVSSSIsIlJvdXRlIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibWFuYWdlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZGVmYXVsdCIsIk1hcCIsInJlZ2lzdGVyIiwibGF5b3V0Iiwic2V0IiwiaWQiLCJkZWZhdWx0IiwiX2NvcmUiLCJyZXF1aXJlMiIsIkxheW91dEluc3RhbmNlMiIsIkV2ZW50cyIsImlzIiwibGF5b3V0cyIsImVsZW1lbnQiLCJhY3RpdmUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImNvbnN0cnVjdG9yIiwiYWN0aXZhdGUiLCJwYWdlIiwiY2hpbGQiLCJsZW5ndGgiLCJuYW1lIiwiZm91bmQiLCJ2YWx1ZXMiLCJmaW5kIiwiY2hpbGQyIiwiY2hhbmdlZCIsImRlYWN0aXZhdGUiLCJzaGlmdCIsInRyaWdnZXIiLCJjb25zb2xlIiwid2FybiIsIl9yb3V0aW5nIiwiX2xheW91dCIsIl9wYWdlcyIsIl9sYXlvdXRzIiwiX3JvdXRlIiwiTWFuYWdlciIsImluc3RhbmNlcyIsInBhZ2VzIiwiaW5pdGlhbGlzZWQiLCJyZXNvbHZlIiwicmVhZHkiLCJQcm9taXNlIiwicm91dGluZyIsInVyaSIsImNhdGNoIiwiZXhjIiwibG9nIiwic3RhY2siLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImFsbCIsImJpbXBvcnQiLCJ0aGVuIiwiY29uZmlnIiwibWFpbiIsIm9uIiwiY3QiLCJDYW5jZWxsYXRpb25Ub2tlbiIsImNpZCIsInJlc2V0Iiwicm91dGUiLCJwYXRobmFtZSIsInByb2Nlc3MiLCJjaGVjayIsImRvbmUiLCJlcnJvciIsInZhbHVlIiwicGFyZW50cyIsIm1hbmFnZXIyIiwiX2luc3RhbmNlIiwiaW5zdGFuY2UiLCJvYnRhaW4iLCJ3aWRnZXQiLCJnZXRBdHRyaWJ1dGUiLCJoYXMiLCJpbnN0YW5jZTIiLCJnZXQiLCJ1cGRhdGUiLCJfcmVuZGVyIiwiX3VyaSIsIlBhZ2VJbnN0YW5jZTIiLCJvdXRwdXQiLCJ3aWRnZXRzIiwiRXJyb3IiLCJ1bnNoaWZ0IiwiUm91dGUyIiwidmFycyIsInNwbGl0IiwicmVnaXN0ZXJlZCIsImZvckVhY2giLCJ0YXJnZXQiLCJmaWx0ZXIiLCJjbGVhciIsImkiLCJkaXIiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ2bmFtZSIsInNsaWNlIiwibWlzc2luZyIsIl9ldmVudHMiLCJQYWdlVVJJMiIsInNlYXJjaCIsInFzIiwiaGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxRQUFBLENBQUFELHFCQUFBO0VBQUFFLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFlB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