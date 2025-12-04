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

// .beyond/uimport/@beyond-js/kernel/styles.0.1.14.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMuMC4xLjE0LmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvc3R5bGVzL2RlcGVuZGVuY2llcy1zdHlsZXMudHMiLCJmaWxlOi8vL19fc291cmNlcy9zdHlsZXMvbGVnYWN5LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvc3R5bGVzL3JlZ2lzdHJ5LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvc3R5bGVzL3YxLnRzIl0sIm5hbWVzIjpbInN0eWxlc18wXzFfMTRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRGVwZW5kZW5jaWVzU3R5bGVzIiwiVjFTdHlsZXMiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJzdHlsZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2J1bmRsZSIsInJlcXVpcmUyIiwiX2NvcmUiLCJfcmVnaXN0cnkiLCJEZXBlbmRlbmNpZXNTdHlsZXMyIiwiRXZlbnRzIiwidnNwZWNpZmllciIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJjaGFuZ2UiLCJ0cmlnZ2VyIiwiU2V0IiwicmVjdXJzaXZlIiwidnNwZWNpZmllcjIiLCJjb25zb2xlIiwidHJhY2UiLCJpbnN0YW5jZXMiLCJoYXMiLCJlcnJvciIsImJ1bmRsZSIsImdldCIsInR5cGUiLCJzdHlsZXMyIiwiZW5naW5lIiwiYWRkIiwib24iLCJkZXBlbmRlbmNpZXMiLCJwYWNrYWdlIiwiZm9yRWFjaCIsImRlcGVuZGVuY3kiLCJwa2ciLCJfZGVmYXVsdCIsInZhbHVlIiwiYXBwZW5kZWQiLCJtb2R1bGUyIiwibW9kdWxlMyIsInNwbGl0IiwicG9wIiwiam9pbiIsInJlZ2V4cCIsInJlcGxhY2UiLCJtYXRjaCIsImhvc3QiLCJyZXNvdXJjZSIsIndhcm4iLCJhcHBlbmRUb0RPTSIsImlzIiwicHJldmlvdXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVDaGlsZCIsImNzcyIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkZWZhdWx0IiwiX2xlZ2FjeSIsIl92IiwiUmVnaXN0cnkiLCJyZWdpc3RyeSIsIk1hcCIsInJlZ2lzdGVyIiwic3R5bGVzMyIsInNldCIsImdsb2JhbFRoaXMiLCJiZXlvbmRMZWdhY3lTdHlsZXMiLCJWMVN0eWxlczIiLCJ2ZXJzaW9uIiwiaHJlZiIsInByb2Nlc3MiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJzdWJwYXRoIiwidXJpIiwiUmVnRXhwIiwidGVzdCIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwic2xpY2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQkFBQTtFQUFBRSxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBVSxPQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxLQUFBLEdBQUFELFFBQUE7SUFDQSxJQUFBRSxTQUFBLEdBQUFGLFFBQUE7SUFHaUIsTUFDWEcsbUJBQUEsU0FBMkJGLEtBQUEsQ0FBQUcsTUFBQSxDQUFNO01BQzFCLENBQUFDLFVBQUE7TUFDQSxDQUFBQyxRQUFBO01BQ1QsSUFBSUEsU0FBQSxFQUFRO1FBQ1IsT0FBTyxLQUFLLENBQUFBLFFBQUE7TUFDaEI7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