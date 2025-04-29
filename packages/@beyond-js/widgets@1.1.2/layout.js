System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core","@beyond-js/widgets@1.1.2/render"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/widgets","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep)],
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

// .beyond/uimport/@beyond-js/widgets/layout.1.1.2.js
var layout_1_1_2_exports = {};
__export(layout_1_1_2_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
});
module.exports = __toCommonJS(layout_1_1_2_exports);

// node_modules/@beyond-js/widgets/layout/layout.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@1.1.2/render"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@1.1.2/layout"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/render", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./children", {
  hash: 3435386799,
  creator: function (require2, exports) {
    "use strict";

    var _render = require2("@beyond-js/widgets/render");
    var _ssr = require2("./ssr");
    let manager;
    customElements.define("beyond-layout-children", class extends HTMLElement {
      #layout;
      #active;
      connectedCallback() {
        this.attachShadow({
          mode: "open"
        });
        const managed = () => {
          const start = () => this.#start().catch(exc => console.error(exc.stack));
          manager.initialised ? start() : manager.ready.then(start);
        };
        if (manager) return managed();
        _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener("received", this.#onssr);
        const promises = [];
        promises.push(bimport("@beyond-js/widgets/routing"));
        promises.push(bimport("@beyond-js/kernel/core"));
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/start`));
        Promise.all(promises).then(([routing]) => {
          ({
            manager
          } = routing);
          managed();
        }).catch(exc => console.log(exc.stack));
      }
      #container;
      get container() {
        if (this.#container !== void 0) return this.#container;
        const container = (() => {
          let parent = this;
          while (true) {
            const root = parent.getRootNode();
            if (root === document) return root;
            parent = root.host;
            if (_render.widgets.instances.has(parent)) return parent;
          }
        })();
        if (!container) {
          console.error(`Widget container of beyond-layout-children not found`);
          return this.#container = null;
        }
        return this.#container = container;
      }
      #onssr = () => {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        const {
          container
        } = this;
        if (container === null) return;
        const {
          element,
          error
        } = (() => {
          const {
            hierarchy
          } = _ssr.ssr;
          if (container === document) return {
            element: hierarchy[0]
          };
          const {
            localName
          } = container;
          const index = hierarchy.indexOf(localName);
          if (index === -1) return {
            error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
          };
          if (index === hierarchy.length - 1) return {
            error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
          };
          return {
            element: hierarchy[index + 1]
          };
        })();
        if (error) {
          console.error(error, this);
          return;
        }
        this.shadowRoot.appendChild(document.createElement(element));
      };
      #render = () => {
        let activeElement;
        this.#layout.children.forEach(child => {
          const {
            children
          } = this.shadowRoot;
          let element = [...children].find(element2 => element2.getAttribute("data-child-id") === child.id);
          if (!element) {
            element = document.createElement(child.element);
            element.setAttribute("data-child-id", child.id);
            this.shadowRoot.append(element);
          }
          const active = this.#layout.active === child;
          const controller = element.controller;
          active && (activeElement = element);
          if (active && element !== this.#active) {
            const show = () => {
              element.removeEventListener("controller.initialised", show);
              if (element !== this.#active) return;
              const controller2 = element.controller;
              if (!controller2) {
                throw new Error(`Controller of element widget "${child.element}" is undefined`);
              }
              this.#active === element && controller2.show?.();
            };
            controller ? controller.show?.() : element.addEventListener("controller.initialised", show);
          } else if (!element.hidden && !active) {
            controller?.hide?.();
          }
          element.hidden = !active;
        });
        this.#active = activeElement;
      };
      #hydrate() {
        const {
          children
        } = this.shadowRoot;
        const layout = this.#layout;
        if (!children.length) return;
        if (children.length > 1) {
          console.error("Only one child was expected on beyond-layout-children start", this);
          return;
        }
        children[0].setAttribute("data-child-id", [...layout.children.keys()][0]);
      }
      async #start() {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        if (this.container === null) return;
        const done = layout => {
          this.#layout = layout;
          this.#hydrate();
          this.#layout.on("change", this.#render);
          this.#render();
        };
        if (this.container === document) return done(manager.main);
        const {
          localName
        } = this.container;
        if (localName === manager.main.element) return done(manager.main);
        if (!manager.layouts.has(localName)) {
          console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
          return;
        }
        done(manager.layouts.get(localName));
      }
    });
  }
});
ims.set("./ssr", {
  hash: 3616680628,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ssr = void 0;
    const ssr2 = exports.ssr = new class extends EventTarget {
      #main;
      get main() {
        return this.#main;
      }
      #page;
      get page() {
        return this.#page;
      }
      #layouts;
      get layouts() {
        return this.#layouts;
      }
      #hierarchy = [];
      get hierarchy() {
        return this.#hierarchy;
      }
      data(main, page) {
        this.#main = main;
        this.#page = page.element;
        this.#layouts = page.parents;
        main && this.#hierarchy.push(main);
        page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
        this.#hierarchy.push(page.element);
        const event = new Event("received");
        this.dispatchEvent(event);
      }
    }();
  }
});
__pkg.exports.descriptor = [{
  "im": "./ssr",
  "from": "ssr",
  "name": "ssr"
}];
var ssr;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ssr") && (ssr = require2 ? require2("./ssr").ssr : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0LjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9jaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L19fc291cmNlcy9sYXlvdXQvc3NyLnRzIl0sIm5hbWVzIjpbImxheW91dF8xXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJzc3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlbmRlciIsInJlcXVpcmUyIiwiX3NzciIsIm1hbmFnZXIiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50IiwibGF5b3V0IiwiYWN0aXZlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwibWFuYWdlZCIsInN0YXJ0IiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImluaXRpYWxpc2VkIiwicmVhZHkiLCJ0aGVuIiwicGFnZSIsIm9uc3NyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsIlByb21pc2UiLCJhbGwiLCJyb3V0aW5nIiwibG9nIiwiY29udGFpbmVyIiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0Iiwid2lkZ2V0cyIsImluc3RhbmNlcyIsImhhcyIsIiNvbnNzciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiaGllcmFyY2h5IiwibG9jYWxOYW1lIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciIsIiNyZW5kZXIiLCJhY3RpdmVFbGVtZW50IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJmaW5kIiwiZWxlbWVudDIiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZCIsImNvbnRyb2xsZXIiLCJzaG93IiwiY29udHJvbGxlcjIiLCJFcnJvciIsImhpZGRlbiIsImhpZGUiLCJoeWRyYXRlIiwiI2h5ZHJhdGUiLCJrZXlzIiwiI3N0YXJ0IiwiZG9uZSIsIm9uIiwibWFpbiIsImxheW91dHMiLCJnZXQiLCJzc3IyIiwiRXZlbnRUYXJnZXQiLCJkYXRhIiwicGFyZW50cyIsImNvbmNhdCIsImV2ZW50IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0NBLElBQUFRLE9BQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLElBQUEsR0FBQUQsUUFBQTtJQUlBLElBQUlFLE9BQUE7SUFFSkMsY0FBQSxDQUFlQyxNQUFBLENBQ2QsMEJBQ0EsY0FBY0MsV0FBQSxDQUFXO01BQ3hCLENBQUFDLE1BQUE7TUFDQSxDQUFBQyxNQUFBO01BRUFDLGtCQUFBLEVBQWlCO1FBQ2hCLEtBQUtDLFlBQUEsQ0FBYTtVQUFFQyxJQUFBLEVBQU07UUFBTSxDQUFFO1FBRWxDLE1BQU1DLE9BQUEsR0FBVUEsQ0FBQSxLQUFLO1VBQ3BCLE1BQU1DLEtBQUEsR0FBUUEsQ0FBQSxLQUFNLEtBQUss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