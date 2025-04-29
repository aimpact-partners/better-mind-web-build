System.register(["@beyond-js/kernel@0.1.12/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep)],
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

// .beyond/uimport/temp/@beyond-js/kernel/transversals.0.1.12.js
var transversals_0_1_12_exports = {};
__export(transversals_0_1_12_exports, {
  Transversal: () => Transversal,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(transversals_0_1_12_exports);

// node_modules/@beyond-js/kernel/transversals/transversals.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.11/transversals"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./dependencies", {
  hash: 916907578,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => this.set(specifier, dependency));
      }
    }
    exports.default = _default;
  }
});
ims.set("./transversal", {
  hash: 2292377186,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Transversal = void 0;
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _dependencies = require2("./dependencies");
    class Transversal2 {
      #name;
      get name() {
        return this.#name;
      }
      #language;
      get language() {
        return this.#language;
      }
      #bundles = /* @__PURE__ */new Map();
      get bundles() {
        return this.#bundles;
      }
      #dependencies = new _dependencies.default();
      get dependencies() {
        return this.#dependencies;
      }
      constructor(name, language) {
        this.#name = name;
        this.#language = language;
      }
      #initialised = false;
      initialise(bundles) {
        if (this.#initialised) throw new Error(`Transversal "${this.#name}" already initialised`);
        this.#initialised = true;
        const packages = /* @__PURE__ */new Map();
        bundles.forEach(([specs, creator]) => {
          const pkg = new _bundle.Bundle(specs).package(this.#language);
          const ims2 = /* @__PURE__ */new Map();
          const exports2 = {};
          const response = creator(ims2, exports2);
          const {
            dependencies
          } = response ? response : {
            dependencies: void 0
          };
          pkg.exports.descriptor = exports2.descriptor;
          packages.set(pkg.specifier, {
            pkg,
            dependencies,
            ims: ims2
          });
        });
        packages.forEach(({
          pkg,
          dependencies,
          ims: ims2
        }) => {
          const register = (() => {
            const register2 = [];
            dependencies?.forEach(specifier => {
              if (this.#dependencies.has(specifier)) {
                register2.push([specifier, this.#dependencies.get(specifier)]);
                return;
              }
              if (!packages.has(specifier)) {
                const data = `
	Dependencies: ${JSON.stringify([...this.#dependencies.keys()])}. 
	Bundles: ${JSON.stringify([...packages.keys()])}`;
                throw new Error(`Dependency "${specifier}" not found on "${this.#name}" transversal. ${data}`);
              }
              const {
                pkg: pkg2
              } = packages.get(specifier);
              register2.push([specifier, pkg2.exports.values]);
            });
            return register2;
          })();
          packages.forEach(({
            pkg: pkg2
          }) => this.#bundles.set(pkg2.specifier, pkg2.exports.values));
          register && pkg.dependencies.update(register);
          pkg.ims.register(ims2);
        });
        packages.forEach(({
          pkg
        }) => !pkg.initialised && pkg.initialise());
      }
    }
    exports.Transversal = Transversal2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./transversal",
  "from": "Transversal",
  "name": "Transversal"
}];
var Transversal;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Transversal") && (Transversal = require2 ? require2("./transversal").Transversal : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3RyYW5zdmVyc2Fscy4wLjEuMTIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvdHJhbnN2ZXJzYWxzL19fc291cmNlcy90cmFuc3ZlcnNhbHMvZGVwZW5kZW5jaWVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3RyYW5zdmVyc2Fscy9fX3NvdXJjZXMvdHJhbnN2ZXJzYWxzL3RyYW5zdmVyc2FsLnRzIl0sIm5hbWVzIjpbInRyYW5zdmVyc2Fsc18wXzFfMTJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiVHJhbnN2ZXJzYWwiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2RlZmF1bHQiLCJNYXAiLCJ1cGRhdGUiLCJkZXBzIiwiY2xlYXIiLCJmb3JFYWNoIiwic3BlY2lmaWVyIiwiZGVwZW5kZW5jeSIsInNldCIsImRlZmF1bHQiLCJfYnVuZGxlIiwicmVxdWlyZTIiLCJfZGVwZW5kZW5jaWVzIiwiVHJhbnN2ZXJzYWwyIiwibmFtZSIsImxhbmd1YWdlIiwiYnVuZGxlcyIsImRlcGVuZGVuY2llcyIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJwYWNrYWdlcyIsInNwZWNzIiwiY3JlYXRvciIsInBrZyIsIkJ1bmRsZSIsInBhY2thZ2UiLCJpbXMyIiwiZXhwb3J0czIiLCJyZXNwb25zZSIsImRlc2NyaXB0b3IiLCJpbXMiLCJyZWdpc3RlciIsInJlZ2lzdGVyMiIsImhhcyIsInB1c2giLCJnZXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImtleXMiLCJwa2cyIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwyQkFBQTtBQUFBQyxR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QjtjQUN4QyxJQUFJLEtBQUssQ0FBQVcsWUFBQSxDQUFja0IsR0FBQSxDQUFJN0IsU0FBUyxHQUFHO2dCQUNuQzRCLFNBQUEsQ0FBU0UsSUFBQSxDQUFLLENBQUM5QixTQUFBLEVBQVcsS0FBSyxDQUFBVyxZQUFBLENBQWNvQixHQUFBLENBQUkvQixTQUFTLENBQUMsQ0FBQztnQkFDNUQ7O2NBSUosSUFBSSxDQUFDZ0IsUUFBQSxDQUFTYSxHQUFBLENBQUk3QixTQUFTLEdBQUc7Z0JBQzFCLE1BQU1nQyxJQUFBLEdBQU87aUJBQXFCQyxJQUFBLENBQUtDLFNBQUEsQ0FBVSxDQUFDLEdBQUcsS0FBSyxDQUFBdkIsWUFBQSxDQUFjd0IsSUFBQSxDQUFJLENBQUUsQ0FBQztZQUMzREYsSUFBQSxDQUFLQyxTQUFBLENBQVUsQ0FBQyxHQUFHbEIsUUFBQSxDQUFTbUIsSUFBQSxDQUFJLENBQUUsQ0FBQztnQkFDdkQsTUFBTSxJQUFJcEIsS0FBQSxDQUFNLGVBQWVmLFNBQUEsbUJBQTRCLEtBQUssQ0FBQVEsSUFBQSxrQkFBdUJ3QixJQUFBLEVBQU07O2NBR2pHLE1BQU07Z0JBQUNiLEdBQUEsRUFBQWlCO2NBQUcsSUFBSXBCLFFBQUEsQ0FBU2UsR0FBQSxDQUFJL0IsU0FBUztjQUNwQzRCLFNBQUEsQ0FBU0UsSUFBQSxDQUFLLENBQUM5QixTQUFBLEVBQVdvQyxJQUFBLENBQUk1QyxPQUFBLENBQVE2QyxNQUFNLENBQUM7WUFDakQsQ0FBQztZQUNELE9BQU9ULFNBQUE7VUFDWCxHQUFFO1VBRUZaLFFBQUEsQ0FBU2pCLE9BQUEsQ0FBUSxDQUFDO1lBQUNvQixHQUFBLEVBQUFpQjtVQUFHLE1BQU0sS0FBSyxDQUFBMUIsT0FBQSxDQUFTUixHQUFBLENBQUlrQyxJQUFBLENBQUlwQyxTQUFBLEVBQVdvQyxJQUFBLENBQUk1QyxPQUFBLENBQVE2QyxNQUFNLENBQUM7VUFFaEZWLFFBQUEsSUFBWVIsR0FBQSxDQUFJUixZQUFBLENBQWFmLE1BQUEsQ0FBTytCLFFBQVE7VUFJNUNSLEdBQUEsQ0FBSU8sR0FBQSxDQUFJQyxRQUFBLENBQVNMLElBQUc7UUFDeEIsQ0FBQztRQUVETixRQUFBLENBQVNqQixPQUFBLENBQVEsQ0FBQztVQUFDb0I7UUFBRyxNQUFNLENBQUNBLEdBQUEsQ0FBSU4sV0FBQSxJQUFlTSxHQUFBLENBQUlMLFVBQUEsQ0FBVSxDQUFFO01BQ3BFOztJQUNIdEIsT0FBQSxDQUFBSixXQUFBLEdBQUFtQixZQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9