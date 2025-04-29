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

// .beyond/uimport/temp/@beyond-js/kernel/texts.0.1.12.js
var texts_0_1_12_exports = {};
__export(texts_0_1_12_exports, {
  CurrentTexts: () => CurrentTexts,
  Texts: () => Texts,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(texts_0_1_12_exports);

// node_modules/@beyond-js/kernel/texts/texts.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.12/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.11/texts"
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
      get ready() {
        !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
        return this.loaded;
      }
      get value() {
        return this.#current.value;
      }
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
      #module;
      get module() {
        return this.#module;
      }
      #bundle;
      get bundle() {
        return this.#bundle;
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3RleHRzLjAuMS4xMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy9fX3NvdXJjZXMvdGV4dHMvY3VycmVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy9fX3NvdXJjZXMvdGV4dHMvdGV4dHMudHMiXSwibmFtZXMiOlsidGV4dHNfMF8xXzEyX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkN1cnJlbnRUZXh0cyIsIlRleHRzIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJfdGV4dHMiLCJDdXJyZW50VGV4dHMyIiwiRXZlbnRzIiwidGV4dHMiLCJNYXAiLCJidW5kbGUiLCJlbmFibGVkIiwidmFsdWUiLCJmZXRjaCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJsYXN0IiwiY3VycmVudCIsIiNjdXJyZW50IiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJoYXMiLCJnZXQiLCJzZXQiLCJsb2FkaW5nIiwibG9hZGVkIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwib24iLCJjaGFuZ2UiLCJ0cmlnZ2VyQ2hhbmdlIiwiI3RyaWdnZXJDaGFuZ2UiLCJ0cmlnZ2VyIiwiI2NoYW5nZSIsIm9mZiIsImxvZyIsImxvYWQiLCJkZXN0cm95IiwiZm9yRWFjaCIsInRvSlNPTiIsIlRleHRzMiIsInRyYW5zdmVyc2FsIiwibXVsdGlsYW5ndWFnZSIsInR4dCIsIm1vZHVsZTIiLCJzcGVjcyIsInVwZGF0ZSIsIiN1cGRhdGUiLCJzcGVjaWZpZXIiLCJyZXNvdXJjZSIsInNwZWNpZmllcjIiLCJwa2ciLCJzcGxpdCIsInN0YXJ0c1dpdGgiLCJyZXNvdXJjZTIiLCJpbXBvcnRlZCIsImJpbXBvcnQiLCJfX2Jl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