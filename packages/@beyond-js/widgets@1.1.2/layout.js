System.register(["@beyond-js/kernel@0.1.14/bundle","@beyond-js/kernel@0.1.14/core","@beyond-js/widgets@1.1.2/render"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["@beyond-js/widgets","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.2/render', dep)],
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

// .beyond/uimport/@beyond-js/widgets/layout.1.1.2.js
var layout_1_1_2_exports = {};
__export(layout_1_1_2_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
});
module.exports = __toCommonJS(layout_1_1_2_exports);

// node_modules/@beyond-js/widgets/layout/layout.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
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
      /**
       * The widget container of the current beyond-layout-children container is null if an error is detected,
       * and the DOM document when there is no project layout configured in the project.json
       *
       * @return {{container?: string, error?: string}}
       * @private
       */
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
      // Check if there are ssr elements that must be hydrated (set the child id)
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
      // The main layout
      #main;
      get main() {
        return this.#main;
      }
      // The widget name of the page
      #page;
      get page() {
        return this.#page;
      }
      // The parent widgets of the page
      #layouts;
      get layouts() {
        return this.#layouts;
      }
      // The hierarchy of layouts and page considering the main layout, the parent widgets of the page
      // and the page itself
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0LjEuMS4yLmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvbGF5b3V0L2NoaWxkcmVuLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvbGF5b3V0L3Nzci50cyJdLCJuYW1lcyI6WyJsYXlvdXRfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwic3NyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZW5kZXIiLCJyZXF1aXJlMiIsIl9zc3IiLCJtYW5hZ2VyIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsImxheW91dCIsImFjdGl2ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsIm1hbmFnZWQiLCJzdGFydCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJpbml0aWFsaXNlZCIsInJlYWR5IiwidGhlbiIsInBhZ2UiLCJvbnNzciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9taXNlcyIsInB1c2giLCJiaW1wb3J0Iiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJQcm9taXNlIiwiYWxsIiwicm91dGluZyIsImxvZyIsImNvbnRhaW5lciIsInBhcmVudCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsIndpZGdldHMiLCJpbnN0YW5jZXMiLCJoYXMiLCIjb25zc3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWxlbWVudCIsImhpZXJhcmNoeSIsImxvY2FsTmFtZSIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCIjcmVuZGVyIiwiYWN0aXZlRWxlbWVudCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiZmluZCIsImVsZW1lbnQyIiwiZ2V0QXR0cmlidXRlIiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJjb250cm9sbGVyIiwic2hvdyIsImNvbnRyb2xsZXIyIiwiRXJyb3IiLCJoaWRkZW4iLCJoaWRlIiwiaHlkcmF0ZSIsIiNoeWRyYXRlIiwia2V5cyIsIiNzdGFydCIsImRvbmUiLCJvbiIsIm1haW4iLCJsYXlvdXRzIiwiZ2V0Iiwic3NyMiIsIkV2ZW50VGFyZ2V0IiwiZGF0YSIsInBhcmVudHMiLCJjb25jYXQiLCJldmVudCIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0NBLElBQUFRLE9BQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLElBQUEsR0FBQUQsUUFBQTtJQUlBLElBQUlFLE9BQUE7SUFFSkMsY0FBQSxDQUFlQyxNQUFBLENBQ2QsMEJBQ0EsY0FBY0MsV0FBQSxDQUFXO01BQ3hCLENBQUFDLE1BQUE7TUFDQSxDQUFBQyxNQUFBO01BRUFDLGtCQUFBLEVBQWlCO1FBQ2hCLEtBQUtDLFlBQUEsQ0FBYTtVQUFFQyxJQUFBLEVBQU07UUFBTSxDQUFFO1FBRWxDLE1BQU1DLE9BQUEsR0FBVUEsQ0FBQSxLQUFLO1VBQ3BCLE1BQU1DLEtBQUEsR0FBUUEsQ0FBQSxLQUFNLEtBQUssQ0FBQUEsS0FBQSxDQUFNLEVBQUdDLEtBQUEsQ0FBTUMsR0FBQSxJQUFPQyxPQUFBLENBQVFDLEtBQUEsQ0FB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QTtNQUNBLElBQUlBLEtBQUEsRUFBSTtRQUNQLE9BQU8sS0FBSyxDQUFBQSxJQUFBO01BQ2I7O01BR0EsQ0FBQTBELE9BQUE7TUFDQSxJQUFJQSxRQUFBLEVBQU87UUFDVixPQUFPLEtBQUssQ0FBQUEsT0FBQTtNQUNiOzs7TUFJQSxDQUFBakMsU0FBQSxHQUF1QjtNQUN2QixJQUFJQSxVQUFBLEVBQVM7UUFDWixPQUFPLEtBQUssQ0FBQUEsU0FBQTtNQUNiO01BRUFxQyxLQUFLTCxJQUFBLEVBQWN6RCxJQUFBLEVBQWE7UUFDL0IsS0FBSyxDQUFBeUQsSUFBQSxHQUFRQSxJQUFBO1FBQ2IsS0FBSyxDQUFBekQsSUFBQSxHQUFRQSxJQUFBLENBQUt3QixPQUFBO1FBQ2xCLEtBQUssQ0FBQWtDLE9BQUEsR0FBVzFELElBQUEsQ0FBSytELE9BQUE7UUFFckJOLElBQUEsSUFBUSxLQUFLLENBQUFoQyxTQUFBLENBQVdyQixJQUFBLENBQUtxRCxJQUFJO1FBQ2pDekQsSUFBQSxDQUFLK0QsT0FBQSxLQUFZLEtBQUssQ0FBQXRDLFNBQUEsR0FBYSxLQUFLLENBQUFBLFNBQUEsQ0FBV3VDLE1BQUEsQ0FBT2hFLElBQUEsQ0FBSytELE9BQU87UUFDdEUsS0FBSyxDQUFBdEMsU0FBQSxDQUFXckIsSUFBQSxDQUFLSixJQUFBLENBQUt3QixPQUFPO1FBRWpDLE1BQU15QyxLQUFBLEdBQVEsSUFBSUMsS0FBQSxDQUFNLFVBQVU7UUFDbEMsS0FBS0MsYUFBQSxDQUFjRixLQUFLO01BQ3pCO01BQ0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9