System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core","@beyond-js/widgets@1.1.2/render","@beyond-js/kernel@0.1.12/routing","@beyond-js/events@0.0.7/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/widgets","1.1.2"],["@beyond-js/events","0.0.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/routing', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep)],
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
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.12/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@1.1.2/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.12/routing"), 0);
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
      #active;
      get active() {
        return this.#active;
      }
      #parent;
      #children = /* @__PURE__ */new Map();
      get children() {
        return this.#children;
      }
      constructor(layouts, element, parent) {
        super();
        this.#layouts = layouts;
        this.#element = element ? element : "main";
        this.#parent = parent;
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nLjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbGF5b3V0cy9sYXlvdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbnN0YW5jZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9yb3V0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy91cmkudHMiXSwibmFtZXMiOlsicm91dGluZ18xXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJMYXlvdXRJbnN0YW5jZSIsIlBhZ2VJbnN0YW5jZSIsIlBhZ2VVUkkiLCJSb3V0ZSIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1hbmFnZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2RlZmF1bHQiLCJNYXAiLCJyZWdpc3RlciIsImxheW91dCIsInNldCIsImlkIiwiZGVmYXVsdCIsIl9jb3JlIiwicmVxdWlyZTIiLCJMYXlvdXRJbnN0YW5jZTIiLCJFdmVudHMiLCJpcyIsImxheW91dHMiLCJlbGVtZW50IiwiYWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsImFjdGl2YXRlIiwicGFnZSIsImNoaWxkIiwibGVuZ3RoIiwibmFtZSIsImZvdW5kIiwidmFsdWVzIiwiZmluZCIsImNoaWxkMiIsImNoYW5nZWQiLCJkZWFjdGl2YXRlIiwic2hpZnQiLCJ0cmlnZ2VyIiwiY29uc29sZSIsIndhcm4iLCJfcm91dGluZyIsIl9sYXlvdXQiLCJfcGFnZXMiLCJfbGF5b3V0cyIsIl9yb3V0ZSIsIk1hbmFnZXIiLCJpbnN0YW5jZXMiLCJwYWdlcyIsImluaXRpYWxpc2VkIiwicmVzb2x2ZSIsInJlYWR5IiwiUHJvbWlzZSIsInJvdXRpbmciLCJ1cmkiLCJjYXRjaCIsImV4YyIsImxvZyIsInN0YWNrIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJhbGwiLCJiaW1wb3J0IiwidGhlbiIsImNvbmZpZyIsIm1haW4iLCJvbiIsImN0IiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJjaWQiLCJyZXNldCIsInJvdXRlIiwicGF0aG5hbWUiLCJwcm9jZXNzIiwiY2hlY2siLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsInBhcmVudHMiLCJtYW5hZ2VyMiIsIl9pbnN0YW5jZSIsImluc3RhbmNlIiwib2J0YWluIiwid2lkZ2V0IiwiZ2V0QXR0cmlidXRlIiwiaGFzIiwiaW5zdGFuY2UyIiwiZ2V0IiwidXBkYXRlIiwiX3JlbmRlciIsIl91cmkiLCJQYWdlSW5zdGFuY2UyIiwib3V0cHV0Iiwid2lkZ2V0cyIsIkVycm9yIiwidW5zaGlmdCIsIlJvdXRlMiIsInZhcnMiLCJzcGxpdCIsInJlZ2lzdGVyZWQiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZmlsdGVyIiwiY2xlYXIiLCJpIiwiZGlyIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidm5hbWUiLCJzbGljZSIsIm1pc3NpbmciLCJfZXZlbnRzIiwiUGFnZVVSSTIiLCJzZWFyY2giLCJxcyIsImhh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RUFBT3BDLFFBQUEsQ0FBU2dDLENBQUEsQ0FBRTtjQUNqQzs7WUFHRCxJQUFJQyxHQUFBLEtBQVFqQyxRQUFBLENBQVNnQyxDQUFBLEdBQUksT0FBTzs7VUFFakMsT0FBTztRQUNSLENBQUM7UUFFRCxLQUFLLENBQUE5RSxJQUFBLEdBQVFJLEtBQUEsR0FBUUEsS0FBQSxDQUFNLEtBQUssTUFBTVUsUUFBQSxDQUFBWSxPQUFBLENBQVEwRCxPQUFBLEdBQVUsS0FBSyxDQUFBdEMsUUFBUztNQUN2RTs7SUFDQW5FLE9BQUEsQ0FBQUwsS0FBQSxHQUFBZ0csTUFBQTs7Ozs7Ozs7Ozs7O0lDdERELElBQUFlLE9BQUEsR0FBQWhHLFFBQUE7SUFXaUIsTUFDWGlHLFFBQUEsU0FBZ0JELE9BQUEsQ0FBQTlGLE1BQUEsQ0FBTTtNQUNsQixDQUFBc0QsS0FBQTtNQUNULElBQUlBLE1BQUEsRUFBSztRQUNSLE9BQU8sS0FBSyxDQUFBQSxLQUFBO01BQ2I7TUFFQSxDQUFBbEIsR0FBQTtNQUNBLElBQUlBLElBQUEsRUFBRztRQUNOLE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2I7TUFFQSxJQUFJbUIsU0FBQSxFQUFRO1FBQ1gsT0FBTyxLQUFLLENBQUFuQixHQUFBLENBQUttQixRQUFBO01BQ2xCO01BRUEsSUFBSXlDLE9BQUEsRUFBTTtRQUNULE9BQU8sS0FBSyxDQUFBNUQsR0FBQSxDQUFLNEQsTUFBQTtNQUNsQjtNQUVBLElBQUlDLEdBQUEsRUFBRTtRQUNMLE9BQU8sS0FBSyxDQUFBN0QsR0FBQSxDQUFLNkQsRUFBQTtNQUNsQjtNQUVBLElBQUlDLEtBQUEsRUFBSTtRQUNQLE9BQU8sS0FBSyxDQUFBOUQsR0FBQSxDQUFLOEQsSUFBQTtNQUNsQjtNQUVBLElBQUlsQixLQUFBLEVBQUk7UUFDUCxPQUFPLEtBQUssQ0FBQTFCLEtBQUEsQ0FBTzBCLElBQUE7TUFDcEI7TUFFQXpFLFlBQVk7UUFBRTZCLEdBQUE7UUFBS2tCO01BQUssR0FBZ0M7UUFDdkQsTUFBSztRQUVMLEtBQUssQ0FBQUEsS0FBQSxHQUFTQSxLQUFBO1FBQ2QsS0FBSyxDQUFBbEIsR0FBQSxHQUFPQSxHQUFBO01BQ2I7TUFFQW1DLE9BQU9uQyxHQUFBLEVBQVE7UUFDZCxJQUFJLEtBQUssQ0FBQUEsR0FBQSxLQUFTQSxHQUFBLEVBQUs7UUFFdkIsS0FBSyxDQUFBQSxHQUFBLEdBQU9BLEdBQUE7UUFHWixNQUFNO1VBQUU2RDtRQUFFLElBQUs7UUFDZixLQUFLN0UsT0FBQSxDQUFRLFVBQVU7VUFBRTZFO1FBQUUsQ0FBRTtNQUM5Qjs7SUFDQTdHLE9BQUEsQ0FBQU4sT0FBQSxHQUFBaUgsUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==