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

// .beyond/uimport/@beyond-js/kernel/texts.0.1.12.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy4wLjEuMTIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvdGV4dHMvX19zb3VyY2VzL3RleHRzL2N1cnJlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvdGV4dHMvX19zb3VyY2VzL3RleHRzL3RleHRzLnRzIl0sIm5hbWVzIjpbInRleHRzXzBfMV8xMl9leHBvcnRzIiwiX19leHBvcnQiLCJDdXJyZW50VGV4dHMiLCJUZXh0cyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfY29yZSIsInJlcXVpcmUyIiwiX3RleHRzIiwiQ3VycmVudFRleHRzMiIsIkV2ZW50cyIsInRleHRzIiwiTWFwIiwiYnVuZGxlIiwiZW5hYmxlZCIsInZhbHVlIiwiZmV0Y2giLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwibGFzdCIsImN1cnJlbnQiLCIjY3VycmVudCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiaGFzIiwiZ2V0Iiwic2V0IiwibG9hZGluZyIsImxvYWRlZCIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJFcnJvciIsIm9uIiwiY2hhbmdlIiwidHJpZ2dlckNoYW5nZSIsIiN0cmlnZ2VyQ2hhbmdlIiwidHJpZ2dlciIsIiNjaGFuZ2UiLCJvZmYiLCJsb2ciLCJsb2FkIiwiZGVzdHJveSIsImZvckVhY2giLCJ0b0pTT04iLCJUZXh0czIiLCJ0cmFuc3ZlcnNhbCIsIm11bHRpbGFuZ3VhZ2UiLCJ0eHQiLCJtb2R1bGUyIiwic3BlY3MiLCJ1cGRhdGUiLCIjdXBkYXRlIiwic3BlY2lmaWVyIiwicmVzb3VyY2UiLCJzcGVjaWZpZXIyIiwicGtnIiwic3BsaXQiLCJzdGFydHNXaXRoIiwicmVzb3VyY2UyIiwiaW1wb3J0ZWQiLCJiaW1wb3J0IiwiX19iZXlvbmRf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