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

// .beyond/uimport/temp/@beyond-js/kernel/texts.0.1.14.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3RleHRzLjAuMS4xNC5qcyIsImZpbGU6Ly8vX19zb3VyY2VzL3RleHRzL2N1cnJlbnQudHMiLCJmaWxlOi8vL19fc291cmNlcy90ZXh0cy90ZXh0cy50cyJdLCJuYW1lcyI6WyJ0ZXh0c18wXzFfMTRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ3VycmVudFRleHRzIiwiVGV4dHMiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2NvcmUiLCJyZXF1aXJlMiIsIl90ZXh0cyIsIkN1cnJlbnRUZXh0czIiLCJFdmVudHMiLCJ0ZXh0cyIsIk1hcCIsImJ1bmRsZSIsImVuYWJsZWQiLCJ2YWx1ZSIsImZldGNoIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImxhc3QiLCJjdXJyZW50IiwiI2N1cnJlbnQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImhhcyIsImdldCIsInNldCIsImxvYWRpbmciLCJsb2FkZWQiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJvbiIsImNoYW5nZSIsInRyaWdnZXJDaGFuZ2UiLCIjdHJpZ2dlckNoYW5nZSIsInRyaWdnZXIiLCIjY2hhbmdlIiwib2ZmIiwibG9nIiwibG9hZCIsImRlc3Ryb3kiLCJmb3JFYWNoIiwidG9KU09OIiwiVGV4dHMyIiwidHJhbnN2ZXJzYWwiLCJtdWx0aWxhbmd1YWdlIiwidHh0IiwibW9kdWxlMiIsInNwZWNzIiwidXBkYXRlIiwiI3VwZGF0ZSIsInNwZWNpZmllciIsInJlc291cmNlIiwic3BlY2lmaWVyMiIsInBrZyIsInNwbGl0Iiwic3RhcnRzV2l0aCIsInJlc291cmNlMiIsImltcG9ydGVkIiwiYmltcG9ydCIsIl9fYmV5b25kX3RyYW5zdmVyc2FsIiwiYnVuZGxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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