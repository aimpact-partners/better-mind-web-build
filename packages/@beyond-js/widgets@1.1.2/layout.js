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

// .beyond/uimport/temp/@beyond-js/widgets/layout.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQuMS4xLjIuanMiLCJmaWxlOi8vL19fc291cmNlcy9sYXlvdXQvY2hpbGRyZW4udHMiLCJmaWxlOi8vL19fc291cmNlcy9sYXlvdXQvc3NyLnRzIl0sIm5hbWVzIjpbImxheW91dF8xXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJzc3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlbmRlciIsInJlcXVpcmUyIiwiX3NzciIsIm1hbmFnZXIiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50IiwibGF5b3V0IiwiYWN0aXZlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwibWFuYWdlZCIsInN0YXJ0IiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImluaXRpYWxpc2VkIiwicmVhZHkiLCJ0aGVuIiwicGFnZSIsIm9uc3NyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsIlByb21pc2UiLCJhbGwiLCJyb3V0aW5nIiwibG9nIiwiY29udGFpbmVyIiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0Iiwid2lkZ2V0cyIsImluc3RhbmNlcyIsImhhcyIsIiNvbnNzciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiaGllcmFyY2h5IiwibG9jYWxOYW1lIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciIsIiNyZW5kZXIiLCJhY3RpdmVFbGVtZW50IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJmaW5kIiwiZWxlbWVudDIiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZCIsImNvbnRyb2xsZXIiLCJzaG93IiwiY29udHJvbGxlcjIiLCJFcnJvciIsImhpZGRlbiIsImhpZGUiLCJoeWRyYXRlIiwiI2h5ZHJhdGUiLCJrZXlzIiwiI3N0YXJ0IiwiZG9uZSIsIm9uIiwibWFpbiIsImxheW91dHMiLCJnZXQiLCJzc3IyIiwiRXZlbnRUYXJnZXQiLCJkYXRhIiwicGFyZW50cyIsImNvbmNhdCIsImV2ZW50IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQ0EsSUFBQVEsT0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsSUFBQSxHQUFBRCxRQUFBO0lBSUEsSUFBSUUsT0FBQTtJQUVKQyxjQUFBLENBQWVDLE1BQUEsQ0FDZCwwQkFDQSxjQUFjQyxXQUFBLENBQVc7TUFDeEIsQ0FBQUMsTUFBQTtNQUNBLENBQUFDLE1BQUE7TUFFQUMsa0JBQUEsRUFBaUI7UUFDaEIsS0FBS0MsWUFBQSxDQUFhO1VBQUVDLElBQUEsRUFBTTtRQUFNLENBQUU7UUFFbEMsTUFBTUMsT0FBQSxHQUFVQSxDQUFBLEtBQUs7VUFDcEIsTUFBTUMsS0FBQSxHQUFRQSxDQUFBLEtBQU0sS0FBSyxDQUFBQSxLQUFBLENBQU0sRUFBR0MsS0FBQSxDQUFNQyxHQUFBLElBQU9DLE9BQUEsQ0FBUUMsS0FB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RCxJQUFBO01BQ0EsSUFBSUEsS0FBQSxFQUFJO1FBQ1AsT0FBTyxLQUFLLENBQUFBLElBQUE7TUFDYjs7TUFHQSxDQUFBMEQsT0FBQTtNQUNBLElBQUlBLFFBQUEsRUFBTztRQUNWLE9BQU8sS0FBSyxDQUFBQSxPQUFBO01BQ2I7OztNQUlBLENBQUFqQyxTQUFBLEdBQXVCO01BQ3ZCLElBQUlBLFVBQUEsRUFBUztRQUNaLE9BQU8sS0FBSyxDQUFBQSxTQUFBO01BQ2I7TUFFQXFDLEtBQUtMLElBQUEsRUFBY3pELElBQUEsRUFBYTtRQUMvQixLQUFLLENBQUF5RCxJQUFBLEdBQVFBLElBQUE7UUFDYixLQUFLLENBQUF6RCxJQUFBLEdBQVFBLElBQUEsQ0FBS3dCLE9BQUE7UUFDbEIsS0FBSyxDQUFBa0MsT0FBQSxHQUFXMUQsSUFBQSxDQUFLK0QsT0FBQTtRQUVyQk4sSUFBQSxJQUFRLEtBQUssQ0FBQWhDLFNBQUEsQ0FBV3JCLElBQUEsQ0FBS3FELElBQUk7UUFDakN6RCxJQUFBLENBQUsrRCxPQUFBLEtBQVksS0FBSyxDQUFBdEMsU0FBQSxHQUFhLEtBQUssQ0FBQUEsU0FBQSxDQUFXdUMsTUFBQSxDQUFPaEUsSUFBQSxDQUFLK0QsT0FBTztRQUN0RSxLQUFLLENBQUF0QyxTQUFBLENBQVdyQixJQUFBLENBQUtKLElBQUEsQ0FBS3dCLE9BQU87UUFFakMsTUFBTXlDLEtBQUEsR0FBUSxJQUFJQyxLQUFBLENBQU0sVUFBVTtRQUNsQyxLQUFLQyxhQUFBLENBQWNGLEtBQUs7TUFDekI7TUFDQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=