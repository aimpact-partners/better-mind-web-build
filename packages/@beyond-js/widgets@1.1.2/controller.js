System.register(["@beyond-js/kernel@0.1.14/bundle","@beyond-js/kernel@0.1.14/core","@beyond-js/widgets@1.1.2/render","@beyond-js/kernel@0.1.14/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["@beyond-js/widgets","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/styles', dep)],
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

// .beyond/uimport/@beyond-js/widgets/controller.1.1.2.js
var controller_1_1_2_exports = {};
__export(controller_1_1_2_exports, {
  IPageWidgetController: () => IPageWidgetController,
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(controller_1_1_2_exports);

// node_modules/@beyond-js/widgets/controller/controller.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.14/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@1.1.2/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.14/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@1.1.2/controller"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./attributes", {
  hash: 424385520,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetAttributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetAttributes2 extends Map {
      // The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
      #widget;
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      constructor(widget) {
        super();
        this.#widget = widget;
        let attrs = widget.specs.attrs;
        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
      }
      change(name, old, value) {
        this.set(name, value);
        this.#events.trigger("change");
        this.#events.trigger(`${name}:change`, value);
      }
    }
    exports.WidgetAttributes = WidgetAttributes2;
  }
});
ims.set("./client", {
  hash: 2266435544,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetClientController = void 0;
    var _controller = require2("./controller");
    var _attributes = require2("./attributes");
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetClientController2 extends _controller.WidgetControllerBase {
      /**
       * The beyond widget.
       * The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
       *
       * @type {HTMLElement} The beyond widget
       * @private
       */
      #widget;
      get widget() {
        return this.#widget;
      }
      #store;
      get store() {
        return this.#store;
      }
      #attributes;
      get attributes() {
        return this.#attributes;
      }
      attributeChanged(name, old, value) {
        this.#attributes.change(name, old, value);
      }
      get styles() {
        const styles = this.#widget.styles;
        return styles;
      }
      constructor(widget) {
        super({
          widget
        });
        this.#widget = widget;
        this.#attributes = new _attributes.WidgetAttributes(widget);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        const links = () => [...styles.elements].map(style => style.href);
        !this.styles.initialised && this.styles.initialise(links());
        styles.on("change", () => this.styles.update(links()));
      }
      render() {
        try {
          this.mount();
        } catch (exc) {
          console.log(`Error mounting widget controller "${this.#widget.localName}":`);
          console.log(exc.stack);
        }
      }
      refresh() {
        this.unmount();
        this.render();
      }
      #refresh = () => this.refresh();
      /**
       * Comes from the web component disconnectedCallback method call
       */
      disconnect() {
        this.unmount();
      }
      async initialise() {
        this.#store = this.createStore?.();
        const prerender = this.#widget.ssr.prerender;
        if (prerender) {
          const cached = prerender?.store;
          await this.#store?.hydrate(cached);
        }
        this.#store?.fetch?.();
        this.render();
        if (!_bundle.instances.has(this.specs.vspecifier)) {
          console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
          return;
        }
        const pkg = _bundle.instances.get(this.specs.vspecifier).package();
        pkg.hmr.on("change", this.#refresh);
      }
    }
    exports.WidgetClientController = WidgetClientController2;
  }
});
ims.set("./controller", {
  hash: 1553543307,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetControllerBase = void 0;
    var _render = require2("@beyond-js/widgets/render");
    class WidgetControllerBase2 {
      #specs;
      get specs() {
        return this.#specs;
      }
      get element() {
        return this.#specs.name;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      // The widget component to be mounted should be specified by the module
      // (can be a React, Svelte, Vue, ... component)
      get Widget() {
        return;
      }
      createStore(language) {
        return void language;
      }
      /**
       * Controller base constructor
       *
       * @param {} specs
       * @param {HTMLElement} widget
       * The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
       * @protected
       */
      constructor({
        specs,
        widget
      }) {
        if (!specs) {
          const {
            localName
          } = widget;
          if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
          specs = _render.widgets.get(localName);
        }
        this.#pkg = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          return scope ? `${scope}/${name}` : name;
        })();
        this.#specs = specs;
      }
    }
    exports.WidgetControllerBase = WidgetControllerBase2;
  }
});
ims.set("./ssr", {
  hash: 2493457565,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetServerController = void 0;
    var _controller = require2("./controller");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetServerController2 extends _controller.WidgetControllerBase {
      #styles = [];
      get styles() {
        return this.#styles;
      }
      constructor(params) {
        super(params);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        styles.elements.forEach(({
          href
        }) => this.#styles.push(href));
        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
      }
    }
    exports.WidgetServerController = WidgetServerController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "WidgetAttributes",
  "name": "WidgetAttributes"
}, {
  "im": "./client",
  "from": "WidgetClientController",
  "name": "WidgetClientController"
}, {
  "im": "./controller",
  "from": "IPageWidgetController",
  "name": "IPageWidgetController"
}, {
  "im": "./controller",
  "from": "IWidgetStore",
  "name": "IWidgetStore"
}, {
  "im": "./controller",
  "from": "WidgetControllerBase",
  "name": "WidgetControllerBase"
}, {
  "im": "./ssr",
  "from": "IWidgetRendered",
  "name": "IWidgetRendered"
}, {
  "im": "./ssr",
  "from": "WidgetServerController",
  "name": "WidgetServerController"
}];
var WidgetAttributes, WidgetClientController, IPageWidgetController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "WidgetAttributes") && (WidgetAttributes = require2 ? require2("./attributes").WidgetAttributes : value);
  (require2 || prop === "WidgetClientController") && (WidgetClientController = require2 ? require2("./client").WidgetClientController : value);
  (require2 || prop === "IPageWidgetController") && (IPageWidgetController = require2 ? require2("./controller").IPageWidgetController : value);
  (require2 || prop === "IWidgetStore") && (IWidgetStore = require2 ? require2("./controller").IWidgetStore : value);
  (require2 || prop === "WidgetControllerBase") && (WidgetControllerBase = require2 ? require2("./controller").WidgetControllerBase : value);
  (require2 || prop === "IWidgetRendered") && (IWidgetRendered = require2 ? require2("./ssr").IWidgetRendered : value);
  (require2 || prop === "WidgetServerController") && (WidgetServerController = require2 ? require2("./ssr").WidgetServerController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci4xLjEuMi5qcyIsImZpbGU6Ly8vX19zb3VyY2VzL2NvbnRyb2xsZXIvYXR0cmlidXRlcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2NvbnRyb2xsZXIvY2xpZW50LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvY29udHJvbGxlci9zc3IudHMiXSwibmFtZXMiOlsiY29udHJvbGxlcl8xXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJJUGFnZVdpZGdldENvbnRyb2xsZXIiLCJJV2lkZ2V0UmVuZGVyZWQiLCJJV2lkZ2V0U3RvcmUiLCJXaWRnZXRBdHRyaWJ1dGVzIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIldpZGdldENvbnRyb2xsZXJCYXNlIiwiV2lkZ2V0U2VydmVyQ29udHJvbGxlciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfY29yZSIsInJlcXVpcmUyIiwiV2lkZ2V0QXR0cmlidXRlczIiLCJNYXAiLCJ3aWRnZXQiLCJldmVudHMiLCJFdmVudHMiLCJvbiIsImV2ZW50IiwibGlzdGVuZXIiLCJvZmYiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwic3BlY3MiLCJmb3JFYWNoIiwiYXR0ciIsInNldCIsImdldEF0dHJpYnV0ZSIsImNoYW5nZSIsIm5hbWUiLCJvbGQiLCJ2YWx1ZSIsInRyaWdnZXIiLCJfY29udHJvbGxlciIsIl9hdHRyaWJ1dGVzIiwiX2J1bmRsZSIsIl9zdHlsZXMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyMiIsInN0b3JlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWQiLCJzdHlsZXMiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJ2c3BlY2lmaWVyIiwibGlua3MiLCJlbGVtZW50cyIsIm1hcCIsInN0eWxlIiwiaHJlZiIsImluaXRpYWxpc2VkIiwiaW5pdGlhbGlzZSIsInVwZGF0ZSIsInJlbmRlciIsIm1vdW50IiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwicmVmcmVzaCIsInVubW91bnQiLCIjcmVmcmVzaCIsImRpc2Nvbm5lY3QiLCJjcmVhdGVTdG9yZSIsInByZXJlbmRlciIsInNzciIsImNhY2hlZCIsImh5ZHJhdGUiLCJmZXRjaCIsImluc3RhbmNlcyIsImhhcyIsInBrZyIsImdldCIsInBhY2thZ2UiLCJfcmVuZGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UyIiwiZWxlbWVudCIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJXaWRnZXQiLCJsYW5ndWFnZSIsIndpZGdldHMiLCJFcnJvciIsInNwbGl0Iiwic2NvcGUiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyMiIsInBhcmFtcyIsInB1c2giLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFiLHdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFjLEtBQUEsR0FBQUMsUUFBQTtJQUVpQixNQUNYQyxpQkFBQSxTQUF5QkMsR0FBQSxDQUFHOztNQUVqQyxDQUFBQyxNQUFBO01BRUEsQ0FBQUMsTUFBQSxHQUFVLElBQUlMLEtBQUEsQ0FBQU0sTUFBQSxDQUFNO01BQ3BCQyxFQUFBLEdBQUtBLENBQUNDLEtBQUEsRUFBZUMsUUFBQSxLQUFrQixLQUFLLENBQUFKLE1BQUEsQ0FBUUUsRUFBQSxDQUFHQyxLQUFBLEVBQU9DLFFBQVE7TUFDdEVDLEdBQUEsR0FBTUEsQ0FBQ0YsS0FBQSxFQUFlQyxRQUFBLEtBQWtCLEtBQUssQ0FBQUosTUFBQSxDQUFRSyxHQUFBLENBQUlGLEtBQUEsRUFBT0MsUUFBUTtNQUV4RUUsWUFBWVAsTUFBQSxFQUFtQjtRQUM5QixNQUFLO1FBQ0wsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7UUFFZixJQUFJUSxLQUFBLEdBQXdCUixNQUFBLENBQVFTLEtBQUEsQ0FBTUQsS0FBQTtRQUMxQ0EsS0FBQSxFQUFPRSxPQUFBLENBQVFDLElBQUEsSUFBUSxLQUFLQyxHQUFBLENBQUlELElBQUEsRUFBTVgsTUFBQSxDQUFPYSxZQUFBLENBQWFGLElBQUksQ0FBQyxDQUFDO01BQ2pFO01BRUFHLE9BQU9DLElBQUEsRUFBY0MsR0FBQSxFQUFhQyxLQUFBLEVBQWE7UUFDOUMsS0FBS0wsR0FBQSxDQUFJRyxJQUFBLEVBQU1FLEtBQUs7UUFDcEIsS0FBSyxDQUFBaEIsTUFBQSxDQUFRaUIsT0FBQSxDQUFRLFFBQVE7UUFDN0IsS0FBSyxDQUFBakIsTUFBQSxDQUFRaUIsT0FBQSxDQUFRLEdBQUdILElBQUksV0FBV0UsS0FBSztNQUM3Qzs7SUFDQXZCLE9BQUEsQ0FBQVAsZ0JBQUEsR0FBQVcsaUJBQUE7Ozs7Ozs7Ozs7OztJQ3hCRCxJQUFBcUIsV0FBQSxHQUFBdEIsUUFBQTtJQUNBLElBQUF1QixXQUFBLEdBQUF2QixRQUFBO0lBQ0EsSUFBQXdCLE9BQUEsR0FBQXhCLFFBQUE7SUFFQSxJQUFBeUIsT0FBQSxHQUFBekIsUUFBQTtJQUtpQixNQUNGMEIsdUJBQUEsU0FBK0JKLFdBQUEsQ0FBQTlCLG9CQUFBLENBQW9COzs7Ozs7OztNQVF4RCxDQUFBVyxNQUFBO01BQ1QsSUFBSUEsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDYjtNQUVBLENBQUF3QixLQUFBO01BQ0EsSUFBSUEsTUFBQSxFQUFLO1FBQ1IsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDYjtNQUVTLENBQUFDLFVBQUE7TUFDVCxJQUFJQSxXQUFBLEVBQVU7UUFDYixPQUFPLEtBQUssQ0FBQUEsVUFBQTtNQUNiO01BRUFDLGlCQUFpQlgsSUFBQSxFQUFjQyxHQUFBLEVBQWFDLEtBQUEsRUFBYTtRQUN4RCxLQUFLLENBQUFRLFVBQUEsQ0FBWVgsTUFBQSxDQUFPQyxJQUFBLEVBQU1DLEdBQUEsRUFBS0MsS0FBSztNQUN6QztNQUVBLElBQUlVLE9BQUEsRUFBTTtRQUNULE1BQU1BLE1BQUEsR0FBOEIsS0FBSyxDQUFBM0IsTUFBQSxDQUFTMkIsTUFBQTtRQUNsRCxPQUFPQSxNQUFBO01BQ1I7TUFFQXBCLFlBQXNCUCxNQUFBLEVBQW1CO1FBQ3hDLE1BQU07VUFBRUE7UUFBTSxDQUFFO1FBQ2hCLEtBQUssQ0FBQUEsTUFBQSxHQUFVQSxNQUFBO1FBQ2YsS0FBSyxDQUFBeUIsVUFBQSxHQUFjLElBQUlMLFdBQUEsQ0FBQWpDLGdCQUFBLENBQWlCYSxNQUFNO1FBRTlDLE1BQU0yQixNQUFBLEdBQVMsSUFBSUwsT0FBQSxDQUFBTSxrQkFBQSxDQUFtQixLQUFLbkIsS0FBQSxDQUFNb0IsVUFBVTtRQUMzRCxNQUFNQyxLQUFBLEdBQVFBLENBQUEsS0FBTSxDQUFDLEdBQUdILE1BQUEsQ0FBT0ksUUFBUSxFQUFFQyxHQUFBLENBQUlDLEtBQUEsSUFBU0EsS0FBQSxDQUFNQyxJQUFJO1FBRWhFLENBQUMsS0FBS1AsTUFBQSxDQUFPUSxXQUFBLElBQWUsS0FBS1IsTUFBQSxDQUFPUyxVQUFBLENBQVdOLEtBQUEsQ0FBSyxDQUFFO1FBQzFESCxNQUFBLENBQU94QixFQUFBLENBQUcsVUFBVSxNQUFNLEtBQUt3QixNQUFBLENBQU9VLE1BQUEsQ0FBT1AsS0FBQSxDQUFLLENBQUUsQ0FBQztNQUN0RDtNQU1BUSxPQUFBLEVBQU07UUFDTCxJQUFJO1VBQ0gsS0FBS0MsS0FBQSxDQUFLO2lCQUNGQyxHQUFBLEVBQUs7VUFDYkMsT0FBQSxDQUFRQyxHQUFBLENBQUkscUNBQXFDLEtBQUssQ0FBQTFDLE1BQUEsQ0FBUTJDLFNBQVMsSUFBSTtVQUMzRUYsT0FBQSxDQUFRQyxHQUFBLENBQUlGLEdBQUEsQ0FBSUksS0FBSzs7TUFFdkI7TUFFQUMsUUFBQSxFQUFPO1FBQ04sS0FBS0MsT0FBQSxDQUFPO1FBQ1osS0FBS1IsTUFBQSxDQUFNO01BQ1o7TUFFQSxDQUFBTyxPQUFBLEdBQVdFLENBQUEsS0FBTSxLQUFLRixPQUFBLENBQU87Ozs7TUFLN0JHLFdBQUEsRUFBVTtRQUNULEtBQUtGLE9BQUEsQ0FBTztNQUNiO01BRUEsTUFBTVYsV0FBQSxFQUFVO1FBQ2YsS0FBSyxDQUFBWixLQUFBLEdBQVMsS0FBS3lCLFdBQUEsR0FBYTtRQUdoQyxNQUFNQyxTQUFBLEdBQXVCLEtBQUssQ0FBQWxELE1BQUEsQ0FBU21ELEdBQUEsQ0FBSUQsU0FBQTtRQUMvQyxJQUFJQSxTQUFBLEVBQVc7VUFDZCxNQUFNRSxNQUFBLEdBQVNGLFNBQUEsRUFBVzFCLEtBQUE7VUFDMUIsTUFBTSxLQUFLLENBQUFBLEtBQUEsRUFBUTZCLE9BQUEsQ0FBUUQsTUFBTTs7UUFHbEMsS0FBSyxDQUFBNUIsS0FBQSxFQUFROEIsS0FBQSxHQUFPO1FBRXBCLEtBQUtoQixNQUFBLENBQU07UUFHWCxJQUFJLENBQUNqQixPQUFBLENBQUFrQyxTQUFBLENBQVFDLEdBQUEsQ0FBSSxLQUFLL0MsS0FBQSxDQUFNb0IsVUFBVSxHQUFHO1VBQ3hDWSxPQUFBLENBQVFDLEdBQUEsQ0FDUCxjQUFjLEtBQUtqQyxLQUFBLENBQU1vQixVQUFVO3VFQUNzQztVQUUxRTs7UUFFRCxNQUFNNEIsR0FBQSxHQUFNcEMsT0FBQSxDQUFBa0MsU0FBQSxDQUFRRyxHQUFBLENBQUksS0FBS2pELEtBQUEsQ0FBTW9CLFVBQVUsRUFBRThCLE9BQUEsQ0FBTztRQUN0REYsR0FBQSxDQUFJakUsR0FBQSxDQUFJVyxFQUFBLENBQUcsVUFBVSxLQUFLLENBQUEwQyxPQUFRO01BQ25DOztJQUNBbkQsT0FBQSxDQUFBTixzQkFBQSxHQUFBbUMsdUJBQUE7Ozs7Ozs7Ozs7OztJQ3pHRCxJQUFBcUMsT0FBQSxHQUFBL0QsUUFBQTtJQXVCaUIsTUFDRmdFLHFCQUFBLENBQW9CO01BQ3pCLENBQUFwRCxLQUFBO01BQ1QsSUFBSUEsTUFBQSxFQUFLO1FBQ1IsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDYjtNQUVBLElBQUlxRCxRQUFBLEVBQU87UUFDVixPQUFPLEtBQUssQ0FBQXJELEtBQUEsQ0FBT00sSUFBQTtNQUNwQjtNQUVBLElBQUlnRCxHQUFBLEVBQUU7UUFDTCxPQUFPLEtBQUssQ0FBQXRELEtBQUEsQ0FBT3NELEVBQUE7TUFDcEI7TUFFQSxJQUFJQyxNQUFBLEVBQUs7UUFDUixPQUFPLEtBQUssQ0FBQXZELEtBQUEsQ0FBT3VELEtBQUE7TUFDcEI7TUFFQSxJQUFJQyxPQUFBLEVBQU07UUFDVCxPQUFPLEtBQUssQ0FBQXhELEtBQUEsQ0FBT3dELE1BQUE7TUFDcEI7TUFFUyxDQUFBUixHQUFBO01BQ1QsSUFBSUEsSUFBQSxFQUFHO1FBQ04sT0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDYjs7O01BSUEsSUFBSVMsT0FBQSxFQUFNO1FBQ1Q7TUFDRDtNQUVBakIsWUFBWWtCLFFBQUEsRUFBaUI7UUFDNUIsT0FBTyxLQUFLQSxRQUFBO01BQ2I7Ozs7Ozs7OztNQVVBNUQsWUFBc0I7UUFBRUUsS0FBQTtRQUFPVDtNQUFNLEdBQWtEO1FBQ3RGLElBQUksQ0FBQ1MsS0FBQSxFQUFPO1VBQ1gsTUFBTTtZQUFFa0M7VUFBUyxJQUFLM0MsTUFBQTtVQUN0QixJQUFJLENBQUM0RCxPQUFBLENBQUFRLE9BQUEsQ0FBUVosR0FBQSxDQUFJYixTQUFTLEdBQUcsTUFBTSxJQUFJMEIsS0FBQSxDQUFNLGdCQUFnQjFCLFNBQVMscUJBQXFCO1VBQzNGbEMsS0FBQSxHQUFRbUQsT0FBQSxDQUFBUSxPQUFBLENBQVFWLEdBQUEsQ0FBSWYsU0FBUzs7UUFHOUIsS0FBSyxDQUFBYyxHQUFBLElBQVEsTUFBSztVQUNqQixNQUFNYSxLQUFBLEdBQVE3RCxLQUFBLENBQU1vQixVQUFBLENBQVd5QyxLQUFBLENBQU0sR0FBRztVQUN4QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsQ0FBTSxDQUFDLEVBQUVFLFVBQUEsQ0FBVyxHQUFHLElBQUlGLEtBQUEsQ0FBTUcsS0FBQSxDQUFLLElBQUs7VUFDekQsTUFBTSxDQUFDMUQsSUFBSSxJQUFJdUQsS0FBQSxDQUFNRyxLQUFBLENBQUssRUFBR0gsS0FBQSxDQUFNLEdBQUc7VUFDdEMsT0FBT0MsS0FBQSxHQUFRLEdBQUdBLEtBQUssSUFBSXhELElBQUksS0FBS0EsSUFBQTtRQUNyQyxHQUFFO1FBRUYsS0FBSyxDQUFBTixLQUFBLEdBQVNBLEtBQUE7TUFDZjs7SUFDQWYsT0FBQSxDQUFBTCxvQkFBQSxHQUFBd0UscUJBQUE7Ozs7Ozs7Ozs7OztJQ3RGRCxJQUFBMUMsV0FBQSxHQUFBdEIsUUFBQTtJQUNBLElBQUF5QixPQUFBLEdBQUF6QixRQUFBO0lBZ0JpQixNQUNGNkUsdUJBQUEsU0FBK0J2RCxXQUFBLENBQUE5QixvQkFBQSxDQUFvQjtNQUN4RCxDQUFBc0MsTUFBQSxHQUFvQjtNQUM3QixJQUFJQSxPQUFBLEVBQU07UUFDVCxPQUFPLEtBQUssQ0FBQUEsTUFBQTtNQUNiO01BRUFwQixZQUFzQm9FLE1BQUEsRUFBc0Q7UUFDM0UsTUFBTUEsTUFBTTtRQUNaLE1BQU1oRCxNQUFBLEdBQVMsSUFBSUwsT0FBQSxDQUFBTSxrQkFBQSxDQUFtQixLQUFLbkIsS0FBQSxDQUFNb0IsVUFBVTtRQUMzREYsTUFBQSxDQUFPSSxRQUFBLENBQVNyQixPQUFBLENBQVEsQ0FBQztVQUFFd0I7UUFBSSxNQUF5QixLQUFLLENBQUFQLE1BQUEsQ0FBUWlELElBQUEsQ0FBSzFDLElBQUksQ0FBQztRQUUvRSxLQUFLLENBQUFQLE1BQUEsQ0FBUWtELE9BQUEsQ0FBUSxPQUFPLEtBQUtwQixHQUFHLGdCQUFnQjtNQUNyRDs7SUFHQS9ELE9BQUEsQ0FBQUosc0JBQUEsR0FBQW9GLHVCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==