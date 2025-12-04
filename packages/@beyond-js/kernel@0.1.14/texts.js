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

// .beyond/uimport/@beyond-js/kernel/texts.0.1.14.js
var texts_0_1_14_exports = {};
__export(texts_0_1_14_exports, {
  CurrentTexts: () => CurrentTexts,
  Texts: () => Texts,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(texts_0_1_14_exports);

// node_modules/@beyond-js/kernel/texts/texts.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.14/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.13/texts"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./current", {
  hash: 1735458173,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrentTexts = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _texts = require2("./texts");
    class CurrentTexts2 extends _core.Events {
      #texts = /* @__PURE__ */new Map();
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #enabled = false;
      get enabled() {
        return this.#enabled;
      }
      set enabled(value) {
        this.#enabled = !!value;
        value && this.fetch().catch(exc => console.error(exc.stack));
      }
      #last;
      get #current() {
        const {
          current: language
        } = _core.languages;
        if (this.#texts.has(language)) return this.#texts.get(language);
        const texts = new _texts.Texts(this.#bundle, {
          language
        });
        this.#texts.set(language, texts);
        return texts;
      }
      get loading() {
        return this.#current.loading;
      }
      get loaded() {
        return this.#current.loaded;
      }
      /*
      @deprecated
      old versions
       */
      get ready() {
        !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
        return this.loaded;
      }
      get value() {
        return this.#current.value;
      }
      /**
       * Current texts constructor
       *
       * @param {string} bundle
       */
      constructor(bundle) {
        super();
        this.#bundle = bundle;
        if (!bundle) throw new Error(`Bundle parameter must be specified`);
        _core.languages.on("change", this.#change);
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
      }
      #triggerChange = () => {
        this.trigger("change");
      };
      #change = () => {
        this.#last.off("change", this.#triggerChange);
        this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
        this.#triggerChange();
      };
      async fetch() {
        await _core.languages.ready;
        await this.#current.fetch();
      }
      /**
       * @deprecated Deprecated method. Use .fetch instead
       * @return {Promise<void>}
       */
      async load() {
        await this.#current.fetch();
      }
      destroy() {
        this.#texts.forEach(texts => texts.destroy());
        _core.languages.off("change", this.#change);
      }
      toJSON() {
        return {};
      }
    }
    exports.CurrentTexts = CurrentTexts2;
  }
});
ims.set("./texts", {
  hash: 678111696,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Texts = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Texts2 extends _core.Events {
      /**
       * The module resource
       * @type {string}
       * @private
       */
      #module;
      get module() {
        return this.#module;
      }
      /**
       * The bundle name. Ex: 'txt'
       * @type {string}
       * @private
       */
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      /**
       * The transversal bundle name. Ex: 'txt-menu'
       * @type {string}
       * @private
       */
      #transversal;
      get transversal() {
        return this.#transversal;
      }
      #multilanguage;
      get multilanguage() {
        return this.#multilanguage;
      }
      #language;
      get language() {
        return this.#language;
      }
      // The loaded bundle
      #texts;
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #loading;
      get loading() {
        return this.#loading;
      }
      get value() {
        return this.#texts?.txt;
      }
      get ready() {
        if (this.#loading) return false;
        this.fetch().catch(exc => console.log(exc.stack));
        return !this.#loading && this.#loaded;
      }
      /**
       * Module texts constructor
       *
       * @param {string} module The module resource
       * @param {{transversal: string, language: string}} specs
       */
      constructor(module2, specs) {
        if (!module2) throw new Error("Invalid parameters");
        super();
        this.#module = module2;
        specs = specs ? specs : {};
        this.#language = specs.language;
        this.#multilanguage = !!specs.language;
        this.#bundle = !specs.transversal ? specs.bundle ? specs.bundle : "txt" : void 0;
        this.#transversal = specs.transversal;
      }
      // Used by HMR when packaged has been updated
      #update = () => this.trigger("change");
      async fetch() {
        if (this.#loading || this.#loaded) return;
        this.#loading = true;
        this.trigger("change");
        const language = this.#language ? `.${this.#language}` : "";
        const {
          specifier,
          resource
        } = (() => {
          if (this.#transversal) {
            const specifier2 = `${this.#module}.${this.#transversal}${language}`;
            const pkg = (() => {
              const split = this.#module.split("/");
              return split[0].startsWith("@") ? `${split[0]}/${split[1]}` : split[0];
            })();
            const resource2 = `${pkg}/${this.#transversal}${language}`;
            return {
              specifier: specifier2,
              resource: resource2
            };
          } else {
            const specifier2 = `${this.#module}.${this.#bundle}${language}`;
            return {
              specifier: specifier2,
              resource: specifier2
            };
          }
        })();
        const imported = await bimport(resource);
        this.#texts = (() => {
          if (!this.#transversal) return imported;
          const {
            __beyond_transversal: transversal
          } = imported;
          return transversal.bundles.get(specifier);
        })();
        this.#texts.hmr.on("change", this.#update);
        this.#loading = false;
        this.#loaded = true;
        this.trigger("change");
      }
      /**
       * @deprecated Deprecated method. Use .fetch instead
       * @return {Promise<void>}
       */
      async load() {
        await this.fetch();
      }
      destroy() {
        this.#texts?.hmr.off("change", this.#update);
      }
      toJSON() {
        return {};
      }
    }
    exports.Texts = Texts2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./current",
  "from": "CurrentTexts",
  "name": "CurrentTexts"
}, {
  "im": "./texts",
  "from": "Texts",
  "name": "Texts"
}];
var CurrentTexts, Texts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "CurrentTexts") && (CurrentTexts = require2 ? require2("./current").CurrentTexts : value);
  (require2 || prop === "Texts") && (Texts = require2 ? require2("./texts").Texts : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy4wLjEuMTQuanMiLCJmaWxlOi8vL19fc291cmNlcy90ZXh0cy9jdXJyZW50LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvdGV4dHMvdGV4dHMudHMiXSwibmFtZXMiOlsidGV4dHNfMF8xXzE0X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkN1cnJlbnRUZXh0cyIsIlRleHRzIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJfdGV4dHMiLCJDdXJyZW50VGV4dHMyIiwiRXZlbnRzIiwidGV4dHMiLCJNYXAiLCJidW5kbGUiLCJlbmFibGVkIiwidmFsdWUiLCJmZXRjaCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJsYXN0IiwiY3VycmVudCIsIiNjdXJyZW50IiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJoYXMiLCJnZXQiLCJzZXQiLCJsb2FkaW5nIiwibG9hZGVkIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwib24iLCJjaGFuZ2UiLCJ0cmlnZ2VyQ2hhbmdlIiwiI3RyaWdnZXJDaGFuZ2UiLCJ0cmlnZ2VyIiwiI2NoYW5nZSIsIm9mZiIsImxvZyIsImxvYWQiLCJkZXN0cm95IiwiZm9yRWFjaCIsInRvSlNPTiIsIlRleHRzMiIsInRyYW5zdmVyc2FsIiwibXVsdGlsYW5ndWFnZSIsInR4dCIsIm1vZHVsZTIiLCJzcGVjcyIsInVwZGF0ZSIsIiN1cGRhdGUiLCJzcGVjaWZpZXIiLCJyZXNvdXJjZSIsInNwZWNpZmllcjIiLCJwa2ciLCJzcGxpdCIsInN0YXJ0c1dpdGgiLCJyZXNvdXJjZTIiLCJpbXBvcnRlZCIsImJpbXBvcnQiLCJfX2JleW9uZF90cmFuc3ZlcnNhbCIsImJ1bmRsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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