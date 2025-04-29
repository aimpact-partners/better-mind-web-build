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

// .beyond/uimport/temp/@beyond-js/widgets/layout.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQuMS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2xheW91dC9fX3NvdXJjZXMvbGF5b3V0L2NoaWxkcmVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9zc3IudHMiXSwibmFtZXMiOlsibGF5b3V0XzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInNzciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVuZGVyIiwicmVxdWlyZTIiLCJfc3NyIiwibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJsYXlvdXQiLCJhY3RpdmUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJwYWdlIiwib25zc3IiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvbWlzZXMiLCJwdXNoIiwiYmltcG9ydCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiUHJvbWlzZSIsImFsbCIsInJvdXRpbmciLCJsb2ciLCJjb250YWluZXIiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJ3aWRnZXRzIiwiaW5zdGFuY2VzIiwiaGFzIiwiI29uc3NyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJoaWVyYXJjaHkiLCJsb2NhbE5hbWUiLCJpbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwicmVuZGVyIiwiI3JlbmRlciIsImFjdGl2ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImZpbmQiLCJlbGVtZW50MiIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiY29udHJvbGxlciIsInNob3ciLCJjb250cm9sbGVyMiIsIkVycm9yIiwiaGlkZGVuIiwiaGlkZSIsImh5ZHJhdGUiLCIjaHlkcmF0ZSIsImtleXMiLCIjc3RhcnQiLCJkb25lIiwib24iLCJtYWluIiwibGF5b3V0cyIsImdldCIsInNzcjIiLCJFdmVudFRhcmdldCIsImRhdGEiLCJwYXJlbnRzIiwiY29uY2F0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQ0EsSUFBQVEsT0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsSUFBQSxHQUFBRCxRQUFBO0lBSUEsSUFBSUUsT0FBQTtJQUVKQyxjQUFBLENBQWVDLE1BQUEsQ0FDZCwwQkFDQSxjQUFjQyxXQUFBLENBQVc7TUFDeEIsQ0FBQUMsTUFBQTtNQUNBLENBQUFDLE1BQUE7TUFFQUMsa0JBQUEsRUFBaUI7UUFDaEIsS0FBS0MsWUFBQSxDQUFhO1VBQUVDLElBQUEsRUFBTTtRQUFNLENBQUU7UUFFbEMsTUFBTUMsT0FBQSxHQUFVQSxDQUFBLEtBQUs7VUFDcEIsTUFBTUMsS0FBQSxHQUFRQSxDQUFBLEtBQU0s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