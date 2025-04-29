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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyLjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvY2xpZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvc3NyLnRzIl0sIm5hbWVzIjpbImNvbnRyb2xsZXJfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVBhZ2VXaWRnZXRDb250cm9sbGVyIiwiSVdpZGdldFJlbmRlcmVkIiwiSVdpZGdldFN0b3JlIiwiV2lkZ2V0QXR0cmlidXRlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZSIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2NvcmUiLCJyZXF1aXJlMiIsIldpZGdldEF0dHJpYnV0ZXMyIiwiTWFwIiwid2lkZ2V0IiwiZXZlbnRzIiwiRXZlbnRzIiwib24iLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNwZWNzIiwiZm9yRWFjaCIsImF0dHIiLCJzZXQiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2UiLCJuYW1lIiwib2xkIiwidmFsdWUiLCJ0cmlnZ2VyIiwiX2NvbnRyb2xsZXIiLCJfYXR0cmlidXRlcyIsIl9idW5kbGUiLCJfc3R5bGVzIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlcjIiLCJzdG9yZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwic3R5bGVzIiwiRGVwZW5kZW5jaWVzU3R5bGVzIiwidnNwZWNpZmllciIsImxpbmtzIiwiZWxlbWVudHMiLCJtYXAiLCJzdHlsZSIsImhyZWYiLCJpbml0aWFsaXNlZCIsImluaXRpYWxpc2UiLCJ1cGRhdGUiLCJyZW5kZXIiLCJtb3VudCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInJlZnJlc2giLCJ1bm1vdW50IiwiI3JlZnJlc2giLCJkaXNjb25uZWN0IiwiY3JlYXRlU3RvcmUiLCJwcmVyZW5kZXIiLCJzc3IiLCJjYWNoZWQiLCJoeWRyYXRlIiwiZmV0Y2giLCJpbnN0YW5jZXMiLCJoYXMiLCJwa2ciLCJnZXQiLCJwYWNrYWdlIiwiX3JlbmRlciIsIldpZGdldENvbnRyb2xsZXJCYXNlMiIsImVsZW1lbnQiLCJpcyIsInJvdXRlIiwibGF5b3V0IiwiV2lkZ2V0IiwibGFuZ3VhZ2UiLCJ3aWRnZXRzIiwiRXJyb3IiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0IiwiV2lkZ2V0U2VydmVyQ29udHJvbGxlcjIiLCJwYXJhbXMiLCJwdXNoIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFB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WUFBc0I7UUFBRUUsS0FBQTtRQUFPVDtNQUFNLEdBQWtEO1FBQ3RGLElBQUksQ0FBQ1MsS0FBQSxFQUFPO1VBQ1gsTUFBTTtZQUFFa0M7VUFBUyxJQUFLM0MsTUFBQTtVQUN0QixJQUFJLENBQUM0RCxPQUFBLENBQUFRLE9BQUEsQ0FBUVosR0FBQSxDQUFJYixTQUFTLEdBQUcsTUFBTSxJQUFJMEIsS0FBQSxDQUFNLGdCQUFnQjFCLFNBQUEscUJBQThCO1VBQzNGbEMsS0FBQSxHQUFRbUQsT0FBQSxDQUFBUSxPQUFBLENBQVFWLEdBQUEsQ0FBSWYsU0FBUzs7UUFHOUIsS0FBSyxDQUFBYyxHQUFBLElBQVEsTUFBSztVQUNqQixNQUFNYSxLQUFBLEdBQVE3RCxLQUFBLENBQU1vQixVQUFBLENBQVd5QyxLQUFBLENBQU0sR0FBRztVQUN4QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsQ0FBTSxHQUFHRSxVQUFBLENBQVcsR0FBRyxJQUFJRixLQUFBLENBQU1HLEtBQUEsQ0FBSyxJQUFLO1VBQ3pELE1BQU0sQ0FBQzFELElBQUksSUFBSXVELEtBQUEsQ0FBTUcsS0FBQSxDQUFLLEVBQUdILEtBQUEsQ0FBTSxHQUFHO1VBQ3RDLE9BQU9DLEtBQUEsR0FBUSxHQUFHQSxLQUFBLElBQVN4RCxJQUFBLEtBQVNBLElBQUE7UUFDckMsR0FBRTtRQUVGLEtBQUssQ0FBQU4sS0FBQSxHQUFTQSxLQUFBO01BQ2Y7O0lBQ0FmLE9BQUEsQ0FBQUwsb0JBQUEsR0FBQXdFLHFCQUFBOzs7Ozs7Ozs7Ozs7SUN0RkQsSUFBQTFDLFdBQUEsR0FBQXRCLFFBQUE7SUFDQSxJQUFBeUIsT0FBQSxHQUFBekIsUUFBQTtJQWdCaUIsTUFDRjZFLHVCQUFBLFNBQStCdkQsV0FBQSxDQUFBOUIsb0JBQUEsQ0FBb0I7TUFDeEQsQ0FBQXNDLE1BQUEsR0FBb0I7TUFDN0IsSUFBSUEsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDYjtNQUVBcEIsWUFBc0JvRSxNQUFBLEVBQXNEO1FBQzNFLE1BQU1BLE1BQU07UUFDWixNQUFNaEQsTUFBQSxHQUFTLElBQUlMLE9BQUEsQ0FBQU0sa0JBQUEsQ0FBbUIsS0FBS25CLEtBQUEsQ0FBTW9CLFVBQVU7UUFDM0RGLE1BQUEsQ0FBT0ksUUFBQSxDQUFTckIsT0FBQSxDQUFRLENBQUM7VUFBRXdCO1FBQUksTUFBeUIsS0FBSyxDQUFBUCxNQUFBLENBQVFpRCxJQUFBLENBQUsxQyxJQUFJLENBQUM7UUFFL0UsS0FBSyxDQUFBUCxNQUFBLENBQVFrRCxPQUFBLENBQVEsT0FBTyxLQUFLcEIsR0FBQSxnQkFBbUI7TUFDckQ7O0lBR0EvRCxPQUFBLENBQUFKLHNCQUFBLEdBQUFvRix1QkFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==