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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy4xLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvbGF5b3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5zdGFuY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvcm91dGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvdXJpLnRzIl0sIm5hbWVzIjpbInJvdXRpbmdfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTGF5b3V0SW5zdGFuY2UiLCJQYWdlSW5zdGFuY2UiLCJQYWdlVVJJIiwiUm91dGUiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtYW5hZ2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9kZWZhdWx0IiwiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJzZXQiLCJpZCIsImRlZmF1bHQiLCJfY29yZSIsInJlcXVpcmUyIiwiTGF5b3V0SW5zdGFuY2UyIiwiRXZlbnRzIiwiaXMiLCJsYXlvdXRzIiwiZWxlbWVudCIsImFjdGl2ZSIsInBhcmVudCIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJhY3RpdmF0ZSIsInBhZ2UiLCJjaGlsZCIsImxlbmd0aCIsIm5hbWUiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGlsZDIiLCJjaGFuZ2VkIiwiZGVhY3RpdmF0ZSIsInNoaWZ0IiwidHJpZ2dlciIsImNvbnNvbGUiLCJ3YXJuIiwiX3JvdXRpbmciLCJfbGF5b3V0IiwiX3BhZ2VzIiwiX2xheW91dHMiLCJfcm91dGUiLCJNYW5hZ2VyIiwiaW5zdGFuY2VzIiwicGFnZXMiLCJpbml0aWFsaXNlZCIsInJlc29sdmUiLCJyZWFkeSIsIlByb21pc2UiLCJyb3V0aW5nIiwidXJpIiwiY2F0Y2giLCJleGMiLCJsb2ciLCJzdGFjayIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYWxsIiwiYmltcG9ydCIsInRoZW4iLCJjb25maWciLCJtYWluIiwib24iLCJjdCIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsInBhdGhuYW1lIiwicHJvY2VzcyIsImNoZWNrIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJwYXJlbnRzIiwibWFuYWdlcjIiLCJfaW5zdGFuY2UiLCJpbnN0YW5jZSIsIm9idGFpbiIsIndpZGdldCIsImdldEF0dHJpYnV0ZSIsImhhcyIsImluc3RhbmNlMiIsImdldCIsInVwZGF0ZSIsIl9yZW5kZXIiLCJfdXJpIiwiUGFnZUluc3RhbmNlMiIsIm91dHB1dCIsIndpZGdldHMiLCJFcnJvciIsInVuc2hpZnQiLCJSb3V0ZTIiLCJ2YXJzIiwic3BsaXQiLCJyZWdpc3RlcmVkIiwiZm9yRWFjaCIsInRhcmdldCIsImZpbHRlciIsImNsZWFyIiwiaSIsImRpciIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInZuYW1lIiwic2xpY2UiLCJtaXNzaW5nIiwiX2V2ZW50cyIsIlBhZ2VVUkkyIiwic2VhcmNoIiwicXMiLCJoYXNoIl0s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QyxRQUFBLENBQVNnQyxDQUFBLENBQUU7Y0FDakM7O1lBR0QsSUFBSUMsR0FBQSxLQUFRakMsUUFBQSxDQUFTZ0MsQ0FBQSxHQUFJLE9BQU87O1VBRWpDLE9BQU87UUFDUixDQUFDO1FBRUQsS0FBSyxDQUFBOUUsSUFBQSxHQUFRSSxLQUFBLEdBQVFBLEtBQUEsQ0FBTSxLQUFLLE1BQU1VLFFBQUEsQ0FBQVksT0FBQSxDQUFRMEQsT0FBQSxHQUFVLEtBQUssQ0FBQXRDLFFBQVM7TUFDdkU7O0lBQ0FuRSxPQUFBLENBQUFMLEtBQUEsR0FBQWdHLE1BQUE7Ozs7Ozs7Ozs7OztJQ3RERCxJQUFBZSxPQUFBLEdBQUFoRyxRQUFBO0lBV2lCLE1BQ1hpRyxRQUFBLFNBQWdCRCxPQUFBLENBQUE5RixNQUFBLENBQU07TUFDbEIsQ0FBQXNELEtBQUE7TUFDVCxJQUFJQSxNQUFBLEVBQUs7UUFDUixPQUFPLEtBQUssQ0FBQUEsS0FBQTtNQUNiO01BRUEsQ0FBQWxCLEdBQUE7TUFDQSxJQUFJQSxJQUFBLEVBQUc7UUFDTixPQUFPLEtBQUssQ0FBQUEsR0FBQTtNQUNiO01BRUEsSUFBSW1CLFNBQUEsRUFBUTtRQUNYLE9BQU8sS0FBSyxDQUFBbkIsR0FBQSxDQUFLbUIsUUFBQTtNQUNsQjtNQUVBLElBQUl5QyxPQUFBLEVBQU07UUFDVCxPQUFPLEtBQUssQ0FBQTVELEdBQUEsQ0FBSzRELE1BQUE7TUFDbEI7TUFFQSxJQUFJQyxHQUFBLEVBQUU7UUFDTCxPQUFPLEtBQUssQ0FBQTdELEdBQUEsQ0FBSzZELEVBQUE7TUFDbEI7TUFFQSxJQUFJQyxLQUFBLEVBQUk7UUFDUCxPQUFPLEtBQUssQ0FBQTlELEdBQUEsQ0FBSzhELElBQUE7TUFDbEI7TUFFQSxJQUFJbEIsS0FBQSxFQUFJO1FBQ1AsT0FBTyxLQUFLLENBQUExQixLQUFBLENBQU8wQixJQUFBO01BQ3BCO01BRUF6RSxZQUFZO1FBQUU2QixHQUFBO1FBQUtrQjtNQUFLLEdBQWdDO1FBQ3ZELE1BQUs7UUFFTCxLQUFLLENBQUFBLEtBQUEsR0FBU0EsS0FBQTtRQUNkLEtBQUssQ0FBQWxCLEdBQUEsR0FBT0EsR0FBQTtNQUNiO01BRUFtQyxPQUFPbkMsR0FBQSxFQUFRO1FBQ2QsSUFBSSxLQUFLLENBQUFBLEdBQUEsS0FBU0EsR0FBQSxFQUFLO1FBRXZCLEtBQUssQ0FBQUEsR0FBQSxHQUFPQSxHQUFBO1FBR1osTUFBTTtVQUFFNkQ7UUFBRSxJQUFLO1FBQ2YsS0FBSzdFLE9BQUEsQ0FBUSxVQUFVO1VBQUU2RTtRQUFFLENBQUU7TUFDOUI7O0lBQ0E3RyxPQUFBLENBQUFOLE9BQUEsR0FBQWlILFFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=