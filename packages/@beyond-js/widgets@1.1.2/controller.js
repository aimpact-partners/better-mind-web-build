System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core","@beyond-js/widgets@1.1.2/render","@beyond-js/kernel@0.1.12/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/widgets","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/styles', dep)],
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
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.12/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@1.1.2/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.12/styles"), 0);
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
      get Widget() {
        return;
      }
      createStore(language) {
        return void 0;
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci4xLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NsaWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL3Nzci50cyJdLCJuYW1lcyI6WyJjb250cm9sbGVyXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIklQYWdlV2lkZ2V0Q29udHJvbGxlciIsIklXaWRnZXRSZW5kZXJlZCIsIklXaWRnZXRTdG9yZSIsIldpZGdldEF0dHJpYnV0ZXMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJXaWRnZXRBdHRyaWJ1dGVzMiIsIk1hcCIsIndpZGdldCIsImV2ZW50cyIsIkV2ZW50cyIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzcGVjcyIsImZvckVhY2giLCJhdHRyIiwic2V0IiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlIiwibmFtZSIsIm9sZCIsInZhbHVlIiwidHJpZ2dlciIsIl9jb250cm9sbGVyIiwiX2F0dHJpYnV0ZXMiLCJfYnVuZGxlIiwiX3N0eWxlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIyIiwic3RvcmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZCIsInN0eWxlcyIsIkRlcGVuZGVuY2llc1N0eWxlcyIsInZzcGVjaWZpZXIiLCJsaW5rcyIsImVsZW1lbnRzIiwibWFwIiwic3R5bGUiLCJocmVmIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwidXBkYXRlIiwicmVuZGVyIiwibW91bnQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJyZWZyZXNoIiwidW5tb3VudCIsIiNyZWZyZXNoIiwiZGlzY29ubmVjdCIsImNyZWF0ZVN0b3JlIiwicHJlcmVuZGVyIiwic3NyIiwiY2FjaGVkIiwiaHlkcmF0ZSIsImZldGNoIiwiaW5zdGFuY2VzIiwiaGFzIiwicGtnIiwiZ2V0IiwicGFja2FnZSIsIl9yZW5kZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZTIiLCJlbGVtZW50IiwiaXMiLCJyb3V0ZSIsImxheW91dCIsIldpZGdldCIsImxhbmd1YWdlIiwid2lkZ2V0cyIsIkVycm9yIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIyIiwicGFyYW1zIiwicHVzaCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFB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O1FBQUVFLEtBQUE7UUFBT1Q7TUFBTSxHQUFrRDtRQUN0RixJQUFJLENBQUNTLEtBQUEsRUFBTztVQUNYLE1BQU07WUFBRWtDO1VBQVMsSUFBSzNDLE1BQUE7VUFDdEIsSUFBSSxDQUFDNEQsT0FBQSxDQUFBUSxPQUFBLENBQVFaLEdBQUEsQ0FBSWIsU0FBUyxHQUFHLE1BQU0sSUFBSTBCLEtBQUEsQ0FBTSxnQkFBZ0IxQixTQUFBLHFCQUE4QjtVQUMzRmxDLEtBQUEsR0FBUW1ELE9BQUEsQ0FBQVEsT0FBQSxDQUFRVixHQUFBLENBQUlmLFNBQVM7O1FBRzlCLEtBQUssQ0FBQWMsR0FBQSxJQUFRLE1BQUs7VUFDakIsTUFBTWEsS0FBQSxHQUFRN0QsS0FBQSxDQUFNb0IsVUFBQSxDQUFXeUMsS0FBQSxDQUFNLEdBQUc7VUFDeEMsTUFBTUMsS0FBQSxHQUFRRCxLQUFBLENBQU0sR0FBR0UsVUFBQSxDQUFXLEdBQUcsSUFBSUYsS0FBQSxDQUFNRyxLQUFBLENBQUssSUFBSztVQUN6RCxNQUFNLENBQUMxRCxJQUFJLElBQUl1RCxLQUFBLENBQU1HLEtBQUEsQ0FBSyxFQUFHSCxLQUFBLENBQU0sR0FBRztVQUN0QyxPQUFPQyxLQUFBLEdBQVEsR0FBR0EsS0FBQSxJQUFTeEQsSUFBQSxLQUFTQSxJQUFBO1FBQ3JDLEdBQUU7UUFFRixLQUFLLENBQUFOLEtBQUEsR0FBU0EsS0FBQTtNQUNmOztJQUNBZixPQUFBLENBQUFMLG9CQUFBLEdBQUF3RSxxQkFBQTs7Ozs7Ozs7Ozs7O0lDdEZELElBQUExQyxXQUFBLEdBQUF0QixRQUFBO0lBQ0EsSUFBQXlCLE9BQUEsR0FBQXpCLFFBQUE7SUFnQmlCLE1BQ0Y2RSx1QkFBQSxTQUErQnZELFdBQUEsQ0FBQTlCLG9CQUFBLENBQW9CO01BQ3hELENBQUFzQyxNQUFBLEdBQW9CO01BQzdCLElBQUlBLE9BQUEsRUFBTTtRQUNULE9BQU8sS0FBSyxDQUFBQSxNQUFBO01BQ2I7TUFFQXBCLFlBQXNCb0UsTUFBQSxFQUFzRDtRQUMzRSxNQUFNQSxNQUFNO1FBQ1osTUFBTWhELE1BQUEsR0FBUyxJQUFJTCxPQUFBLENBQUFNLGtCQUFBLENBQW1CLEtBQUtuQixLQUFBLENBQU1vQixVQUFVO1FBQzNERixNQUFBLENBQU9JLFFBQUEsQ0FBU3JCLE9BQUEsQ0FBUSxDQUFDO1VBQUV3QjtRQUFJLE1BQXlCLEtBQUssQ0FBQVAsTUFBQSxDQUFRaUQsSUFBQSxDQUFLMUMsSUFBSSxDQUFDO1FBRS9FLEtBQUssQ0FBQVAsTUFBQSxDQUFRa0QsT0FBQSxDQUFRLE9BQU8sS0FBS3BCLEdBQUEsZ0JBQW1CO01BQ3JEOztJQUdBL0QsT0FBQSxDQUFBSixzQkFBQSxHQUFBb0YsdUJBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=