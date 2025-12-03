System.register(["@beyond-js/kernel@0.1.14/bundle","@beyond-js/kernel@0.1.14/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep)],
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

// .beyond/uimport/temp/@beyond-js/kernel/styles.0.1.14.js
var styles_0_1_14_exports = {};
__export(styles_0_1_14_exports, {
  DependenciesStyles: () => DependenciesStyles,
  V1Styles: () => V1Styles,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  styles: () => styles
});
module.exports = __toCommonJS(styles_0_1_14_exports);

// node_modules/@beyond-js/kernel/styles/styles.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.14/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.13/styles"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./dependencies-styles", {
  hash: 282408023,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DependenciesStyles = void 0;
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _core = require2("@beyond-js/kernel/core");
    var _registry = require2("./registry");
    class DependenciesStyles2 extends _core.Events {
      #vspecifier;
      #elements;
      get elements() {
        return this.#elements;
      }
      constructor(vspecifier) {
        super();
        this.#vspecifier = vspecifier;
        const change = () => this.trigger("change");
        this.#elements = /* @__PURE__ */new Set();
        const recursive = vspecifier2 => {
          if (!vspecifier2) {
            console.trace("Bundle vspecifier not defined");
            return;
          }
          if (!_bundle.instances.has(vspecifier2)) {
            console.error(`Bundle id "${vspecifier2}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
            return;
          }
          const bundle = _bundle.instances.get(vspecifier2);
          if (vspecifier2 !== this.#vspecifier && bundle.type === "widget") return;
          const styles2 = _registry.styles.get(vspecifier2);
          if (styles2 && styles2.engine !== "legacy") {
            this.#elements.add(styles2);
            styles2.on("change", change);
          }
          const {
            dependencies
          } = bundle.package();
          dependencies.forEach(dependency => {
            const pkg = dependency.__beyond_pkg;
            if (!pkg) return;
            recursive(pkg.vspecifier);
          });
        };
        recursive(this.#vspecifier);
      }
    }
    exports.DependenciesStyles = DependenciesStyles2;
  }
});
ims.set("./legacy", {
  hash: 859564821,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      get engine() {
        return "legacy";
      }
      #bundle;
      #value;
      get value() {
        return this.#value;
      }
      // Is the stylesheet appended to the DOM of the page (not a shadow dom of a widget)
      #appended = false;
      get appended() {
        return this.#appended;
      }
      constructor(bundle, value) {
        this.#bundle = bundle;
        const module2 = (() => {
          const module3 = bundle.split("/");
          module3.pop();
          return module3.join("/");
        })();
        const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
        this.#value = value.replace(regexp, (match, host, resource) => {
          if (host === "module" || host === "library") {
            return `${module2}/${resource}`;
          } else if (host === "application") {
            return resource;
          }
          console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
        });
      }
      /**
       * @deprecated Only required by legacy applications
       */
      appendToDOM(is) {
        if (this.#appended) {
          const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
          previous && document.removeChild(previous);
        }
        const css = document.createElement("style");
        css.appendChild(document.createTextNode(this.#value));
        is && css.setAttribute("is", is);
        document.getElementsByTagName("head")[0].appendChild(css);
        this.#appended = true;
      }
    }
    exports.default = _default;
  }
});
ims.set("./registry", {
  hash: 2402124624,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.styles = void 0;
    var _legacy = require2("./legacy");
    var _v = require2("./v1");
    class Registry {
      #registry = /* @__PURE__ */new Map();
      register(vspecifier, value) {
        if (this.#registry.has(vspecifier)) return;
        const styles3 = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);
        this.#registry.set(vspecifier, styles3);
        return styles3;
      }
      has(vspecifier) {
        return this.#registry.has(vspecifier);
      }
      get(vspecifier) {
        return this.#registry.get(vspecifier);
      }
    }
    const styles2 = exports.styles = new Registry();
    globalThis.beyondLegacyStyles = styles2;
  }
});
ims.set("./v1", {
  hash: 1440690127,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.V1Styles = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _bundle = require2("@beyond-js/kernel/bundle");
    class V1Styles2 extends _core.Events {
      get engine() {
        return "v1";
      }
      /**
       * The bundle object
       *
       * @type {Bundle}
       * @private
       */
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      /**
       * The autoincremental HMR version
       *
       * @type {number}
       * @private
       */
      #version = 0;
      get version() {
        return this.#version;
      }
      /**
       * The href without the version qs parameter
       *
       * @type {string}
       * @private
       */
      #resource;
      get resource() {
        return this.#resource;
      }
      /**
       * The url of the stylesheet including the HMR version qs parameter
       *
       * @return {string}
       */
      get href() {
        const version = this.#version ? `?version=${this.#version}` : "";
        return `${this.#resource}${version}`;
      }
      constructor(resource) {
        super();
        this.#bundle = _bundle.instances.get(resource);
        this.#resource = (() => {
          if (typeof process === "object") {
            const split = resource.split("/");
            const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
            const subpath = split.join("/");
            return `##_!${pkg}!_##${subpath}.css`;
          }
          let {
            uri
          } = this.#bundle;
          const regexp = new RegExp("^https?://cdn.beyondjs.com", "i");
          if (regexp.test(uri)) {
            const {
              origin,
              pathname,
              searchParams
            } = new URL(uri);
            const version = searchParams.has("version") ? `&version=${searchParams.get("version")}` : "";
            return origin + pathname + "?css" + version;
          }
          uri = uri.slice(0, uri.length - 3);
          return `${uri}.css`;
        })();
      }
      /**
       * Called by HMR in development environment
       */
      change() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.V1Styles = V1Styles2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./dependencies-styles",
  "from": "DependenciesStyles",
  "name": "DependenciesStyles"
}, {
  "im": "./registry",
  "from": "styles",
  "name": "styles"
}, {
  "im": "./v1",
  "from": "V1Styles",
  "name": "V1Styles"
}];
var DependenciesStyles, styles, V1Styles;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "DependenciesStyles") && (DependenciesStyles = require2 ? require2("./dependencies-styles").DependenciesStyles : value);
  (require2 || prop === "styles") && (styles = require2 ? require2("./registry").styles : value);
  (require2 || prop === "V1Styles") && (V1Styles = require2 ? require2("./v1").V1Styles : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3N0eWxlcy4wLjEuMTQuanMiLCJmaWxlOi8vL19fc291cmNlcy9zdHlsZXMvZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3N0eWxlcy9sZWdhY3kudHMiLCJmaWxlOi8vL19fc291cmNlcy9zdHlsZXMvcmVnaXN0cnkudHMiLCJmaWxlOi8vL19fc291cmNlcy9zdHlsZXMvdjEudHMiXSwibmFtZXMiOlsic3R5bGVzXzBfMV8xNF9leHBvcnRzIiwiX19leHBvcnQiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJWMVN0eWxlcyIsIl9fYmV5b25kX3BrZyIsImhtciIsInN0eWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfYnVuZGxlIiwicmVxdWlyZTIiLCJfY29yZSIsIl9yZWdpc3RyeSIsIkRlcGVuZGVuY2llc1N0eWxlczIiLCJFdmVudHMiLCJ2c3BlY2lmaWVyIiwiZWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsImNoYW5nZSIsInRyaWdnZXIiLCJTZXQiLCJyZWN1cnNpdmUiLCJ2c3BlY2lmaWVyMiIsImNvbnNvbGUiLCJ0cmFjZSIsImluc3RhbmNlcyIsImhhcyIsImVycm9yIiwiYnVuZGxlIiwiZ2V0IiwidHlwZSIsInN0eWxlczIiLCJlbmdpbmUiLCJhZGQiLCJvbiIsImRlcGVuZGVuY2llcyIsInBhY2thZ2UiLCJmb3JFYWNoIiwiZGVwZW5kZW5jeSIsInBrZyIsIl9kZWZhdWx0IiwidmFsdWUiLCJhcHBlbmRlZCIsIm1vZHVsZTIiLCJtb2R1bGUzIiwic3BsaXQiLCJwb3AiLCJqb2luIiwicmVnZXhwIiwicmVwbGFjZSIsIm1hdGNoIiwiaG9zdCIsInJlc291cmNlIiwid2FybiIsImFwcGVuZFRvRE9NIiwiaXMiLCJwcmV2aW91cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUNoaWxkIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHQiLCJfbGVnYWN5IiwiX3YiLCJSZWdpc3RyeSIsInJlZ2lzdHJ5IiwiTWFwIiwicmVnaXN0ZXIiLCJzdHlsZXMzIiwic2V0IiwiZ2xvYmFsVGhpcyIsImJleW9uZExlZ2FjeVN0eWxlcyIsIlYxU3R5bGVzMiIsInZlcnNpb24iLCJocmVmIiwicHJvY2VzcyIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJ1cmkiLCJSZWdFeHAiLCJ0ZXN0Iiwib3JpZ2luIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJzbGljZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxRQUFBLENBQUFELHFCQUFBO0VBQUFFLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFVLE9BQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLEtBQUEsR0FBQUQsUUFBQTtJQUNBLElBQUFFLFNBQUEsR0FBQUYsUUFBQTtJQUdpQixNQUNYRyxtQkFBQSxTQUEyQkYsS0FBQSxDQUFBRyxNQUFBLENBQU07TUFDMUIsQ0FBQUMsVUFBQTtNQUNBLENBQUFDLFFBQUE7TUFDVCxJQUFJQSxTQUFBLEVBQVE7UUFDUixPQUFPLEtBQUssQ0FBQUEsUUFBQTtN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