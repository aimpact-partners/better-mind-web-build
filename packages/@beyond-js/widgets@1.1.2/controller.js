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

// .beyond/uimport/temp/@beyond-js/widgets/controller.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyLjEuMS4yLmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvY29udHJvbGxlci9hdHRyaWJ1dGVzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvY29udHJvbGxlci9jbGllbnQudHMiLCJmaWxlOi8vL19fc291cmNlcy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCJmaWxlOi8vL19fc291cmNlcy9jb250cm9sbGVyL3Nzci50cyJdLCJuYW1lcyI6WyJjb250cm9sbGVyXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIklQYWdlV2lkZ2V0Q29udHJvbGxlciIsIklXaWRnZXRSZW5kZXJlZCIsIklXaWRnZXRTdG9yZSIsIldpZGdldEF0dHJpYnV0ZXMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJXaWRnZXRBdHRyaWJ1dGVzMiIsIk1hcCIsIndpZGdldCIsImV2ZW50cyIsIkV2ZW50cyIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzcGVjcyIsImZvckVhY2giLCJhdHRyIiwic2V0IiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlIiwibmFtZSIsIm9sZCIsInZhbHVlIiwidHJpZ2dlciIsIl9jb250cm9sbGVyIiwiX2F0dHJpYnV0ZXMiLCJfYnVuZGxlIiwiX3N0eWxlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIyIiwic3RvcmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZCIsInN0eWxlcyIsIkRlcGVuZGVuY2llc1N0eWxlcyIsInZzcGVjaWZpZXIiLCJsaW5rcyIsImVsZW1lbnRzIiwibWFwIiwic3R5bGUiLCJocmVmIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwidXBkYXRlIiwicmVuZGVyIiwibW91bnQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJyZWZyZXNoIiwidW5tb3VudCIsIiNyZWZyZXNoIiwiZGlzY29ubmVjdCIsImNyZWF0ZVN0b3JlIiwicHJlcmVuZGVyIiwic3NyIiwiY2FjaGVkIiwiaHlkcmF0ZSIsImZldGNoIiwiaW5zdGFuY2VzIiwiaGFzIiwicGtnIiwiZ2V0IiwicGFja2FnZSIsIl9yZW5kZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZTIiLCJlbGVtZW50IiwiaXMiLCJyb3V0ZSIsImxheW91dCIsIldpZGdldCIsImxhbmd1YWdlIiwid2lkZ2V0cyIsIkVycm9yIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIyIiwicGFyYW1zIiwicHVzaCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWIs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QUEsQ0FBQVEsT0FBQSxDQUFRWixHQUFBLENBQUliLFNBQVMsR0FBRyxNQUFNLElBQUkwQixLQUFBLENBQU0sZ0JBQWdCMUIsU0FBUyxxQkFBcUI7VUFDM0ZsQyxLQUFBLEdBQVFtRCxPQUFBLENBQUFRLE9BQUEsQ0FBUVYsR0FBQSxDQUFJZixTQUFTOztRQUc5QixLQUFLLENBQUFjLEdBQUEsSUFBUSxNQUFLO1VBQ2pCLE1BQU1hLEtBQUEsR0FBUTdELEtBQUEsQ0FBTW9CLFVBQUEsQ0FBV3lDLEtBQUEsQ0FBTSxHQUFHO1VBQ3hDLE1BQU1DLEtBQUEsR0FBUUQsS0FBQSxDQUFNLENBQUMsRUFBRUUsVUFBQSxDQUFXLEdBQUcsSUFBSUYsS0FBQSxDQUFNRyxLQUFBLENBQUssSUFBSztVQUN6RCxNQUFNLENBQUMxRCxJQUFJLElBQUl1RCxLQUFBLENBQU1HLEtBQUEsQ0FBSyxFQUFHSCxLQUFBLENBQU0sR0FBRztVQUN0QyxPQUFPQyxLQUFBLEdBQVEsR0FBR0EsS0FBSyxJQUFJeEQsSUFBSSxLQUFLQSxJQUFBO1FBQ3JDLEdBQUU7UUFFRixLQUFLLENBQUFOLEtBQUEsR0FBU0EsS0FBQTtNQUNmOztJQUNBZixPQUFBLENBQUFMLG9CQUFBLEdBQUF3RSxxQkFBQTs7Ozs7Ozs7Ozs7O0lDdEZELElBQUExQyxXQUFBLEdBQUF0QixRQUFBO0lBQ0EsSUFBQXlCLE9BQUEsR0FBQXpCLFFBQUE7SUFnQmlCLE1BQ0Y2RSx1QkFBQSxTQUErQnZELFdBQUEsQ0FBQTlCLG9CQUFBLENBQW9CO01BQ3hELENBQUFzQyxNQUFBLEdBQW9CO01BQzdCLElBQUlBLE9BQUEsRUFBTTtRQUNULE9BQU8sS0FBSyxDQUFBQSxNQUFBO01BQ2I7TUFFQXBCLFlBQXNCb0UsTUFBQSxFQUFzRDtRQUMzRSxNQUFNQSxNQUFNO1FBQ1osTUFBTWhELE1BQUEsR0FBUyxJQUFJTCxPQUFBLENBQUFNLGtCQUFBLENBQW1CLEtBQUtuQixLQUFBLENBQU1vQixVQUFVO1FBQzNERixNQUFBLENBQU9JLFFBQUEsQ0FBU3JCLE9BQUEsQ0FBUSxDQUFDO1VBQUV3QjtRQUFJLE1BQXlCLEtBQUssQ0FBQVAsTUFBQSxDQUFRaUQsSUFBQSxDQUFLMUMsSUFBSSxDQUFDO1FBRS9FLEtBQUssQ0FBQVAsTUFBQSxDQUFRa0QsT0FBQSxDQUFRLE9BQU8sS0FBS3BCLEdBQUcsZ0JBQWdCO01BQ3JEOztJQUdBL0QsT0FBQSxDQUFBSixzQkFBQSxHQUFBb0YsdUJBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9