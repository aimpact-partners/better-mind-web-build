System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep)],
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

// .beyond/uimport/temp/@beyond-js/kernel/styles.0.1.12.js
var styles_0_1_12_exports = {};
__export(styles_0_1_12_exports, {
  DependenciesStyles: () => DependenciesStyles,
  V1Styles: () => V1Styles,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  styles: () => styles
});
module.exports = __toCommonJS(styles_0_1_12_exports);

// node_modules/@beyond-js/kernel/styles/styles.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.12/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.11/styles"
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
  hash: 1891964101,
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
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #version = 0;
      get version() {
        return this.#version;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3N0eWxlcy4wLjEuMTIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy9sZWdhY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvcmVnaXN0cnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvdjEudHMiXSwibmFtZXMiOlsic3R5bGVzXzBfMV8xMl9leHBvcnRzIiwiX19leHBvcnQiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJWMVN0eWxlcyIsIl9fYmV5b25kX3BrZyIsImhtciIsInN0eWxlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfYnVuZGxlIiwicmVxdWlyZTIiLCJfY29yZSIsIl9yZWdpc3RyeSIsIkRlcGVuZGVuY2llc1N0eWxlczIiLCJFdmVudHMiLCJ2c3BlY2lmaWVyIiwiZWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsImNoYW5nZSIsInRyaWdnZXIiLCJTZXQiLCJyZWN1cnNpdmUiLCJ2c3BlY2lmaWVyMiIsImNvbnNvbGUiLCJ0cmFjZSIsImluc3RhbmNlcyIsImhhcyIsImVycm9yIiwiYnVuZGxlIiwiZ2V0IiwidHlwZSIsInN0eWxlczIiLCJlbmdpbmUiLCJhZGQiLCJvbiIsImRlcGVuZGVuY2llcyIsInBhY2thZ2UiLCJmb3JFYWNoIiwiZGVwZW5kZW5jeSIsInBrZyIsIl9kZWZhdWx0IiwidmFsdWUiLCJhcHBlbmRlZCIsIm1vZHVsZTIiLCJtb2R1bGUzIiwic3BsaXQiLCJwb3AiLCJqb2luIiwicmVnZXhwIiwicmVwbGFjZSIsIm1hdGNoIiwiaG9zdCIsInJlc291cmNlIiwid2FybiIsImFwcGVuZFRvRE9NIiwiaXMiLCJwcmV2aW91cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUNoaWxkIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHQiLCJfbGVnYWN5IiwiX3YiLCJSZWdpc3RyeSIsInJlZ2lzdHJ5IiwiTWFwIiwicmVnaXN0ZXIiLCJzdHlsZXMzIiwic2V0IiwiZ2xvYmFsVGhpcyIsImJleW9uZExlZ2FjeVN0eWxlcyIsIlYxU3R5bGVzMiIsInZlcnNpb24iLCJocmVmIiwicHJvY2VzcyIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJ1cmkiLCJSZWdFeHAiLCJ0ZXN0Iiwib3JpZ2luIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJzbGljZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQkFBQTtFQUFBRSxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBVSxPQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxLQUFBLEdBQUFELFFBQUE7SUFDQSxJQUFBRSxTQUFBLEdBQUFGLFFBQUE7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