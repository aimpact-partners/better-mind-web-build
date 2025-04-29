System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@beyond-js/kernel/bundle.0.1.12.js
var bundle_0_1_12_exports = {};
__export(bundle_0_1_12_exports, {
  Bundle: () => Bundle,
  Events: () => Events,
  IBundleSpecs: () => IBundleSpecs,
  IExportsDescriptor: () => IExportsDescriptor,
  IMCreators: () => IMCreators,
  IMSpecs: () => IMSpecs,
  ListenerFunction: () => ListenerFunction,
  Module: () => Module,
  Package: () => Package,
  bimport: () => bimport,
  brequire: () => brequire,
  instances: () => instances
});
module.exports = __toCommonJS(bundle_0_1_12_exports);

// node_modules/@beyond-js/kernel/bundle/bundle.browser.mjs
var __pkg = {
  exports: {}
};
var ims = /* @__PURE__ */new Map();
ims.set("./base/index", {
  hash: 1936310117,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondPackage = void 0;
    exports.resolve = resolve;
    function resolve(source, id) {
      if (!id.startsWith(".")) throw new Error(`Module id must be a relative resource "${id}"`);
      const split = {};
      split.source = source.split("/");
      split.source.pop();
      split.target = (id.startsWith("./") ? id.slice(2) : id).split("../");
      while (split.target[0] === "" && split.target.length > 1) {
        split.target.shift();
        split.source.pop();
      }
      return split.source.join("/") + "/" + split.target.join("/");
    }
    class BeyondPackage {
      #ims;
      #cached = /* @__PURE__ */new Map();
      #exports;
      constructor(exports2) {
        this.#exports = exports2;
      }
      initialise(ims2) {
        this.#ims = ims2;
        this.#exports.process((id, source) => this.require(id, source), {});
      }
      require(id, source) {
        id = source ? resolve(source, id) : id;
        const module2 = (() => {
          if (this.#ims.has(id)) return id;
          return id.endsWith("/") ? `${id}index` : `${id}/index`;
        })();
        if (this.#cached.has(module2)) return this.#cached.get(module2);
        if (!this.#ims.has(module2)) throw new Error(`Internal module "${id}" not found`);
        const fn = this.#ims.get(module2).creator;
        const require3 = required => this.require(required, module2);
        const exports2 = {};
        fn(require3, exports2);
        this.#cached.set(module2, exports2);
        return exports2;
      }
    }
    exports.BeyondPackage = BeyondPackage;
  }
});
ims.set("./bimport/bimport", {
  hash: 1563705995,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bimport = bimport2;
    require2("./brequire");
    function bimport2(resource, version) {
      if (bimport2.mode === "amd") {
        return new Promise((resolve, reject) => {
          if (typeof resource !== "string") throw "Invalid module parameter";
          resource = resource.endsWith(".js") ? resource.slice(0, resource.length - 3) : resource;
          const error = new Error(`Error loading or processing module "${resource}"`);
          amd_require([resource], returned => resolve(returned), exc => {
            console.error(`Error loading resource "${resource}".`);
            console.log(exc.stack);
            reject(error);
          });
        });
      } else if (bimport2.mode === "sjs") {
        return globalThis.System.import(resource + (version ? `?version=${version}` : ""));
      } else {
        return import(resource + (version ? `?version=${version}` : ""));
      }
    }
    bimport2.mode = (() => {
      if (typeof amd_require === "function") return "amd";
      const {
        System
      } = globalThis;
      if (typeof System === "object" && typeof System.import === "function") return "sjs";
      return "esm";
    })();
    const appDependencies = (() => {
      const dependencies = globalThis.__app_package?.dependencies;
      return new Map(dependencies);
    })();
    bimport2.resolve = (specifier, dependencies) => {
      if (/^https?:\/\//.test(specifier)) return specifier;
      const split = specifier.split("/");
      const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
      const version = (() => {
        if (dependencies.has(pkg)) return dependencies.get(pkg);
        if (appDependencies.has(pkg)) return appDependencies.get(pkg);
      })();
      if (!version) return specifier;
      const subpath = split.join("/");
      return `${pkg}@${version}` + (subpath ? `/${subpath}` : "");
    };
  }
});
ims.set("./bimport/brequire", {
  hash: 596501557,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.brequire = brequire2;
    var _instances = require2("../package/instances");
    function brequire2(specifier) {
      const split = specifier.split("/");
      const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
      const subpath = split.join("/");
      const found = [..._instances.default].find(([vspecifier]) => {
        if (!vspecifier.startsWith(`${pkg}@`)) return;
        const split2 = vspecifier.slice(pkg.length).split("/");
        split2.shift();
        return subpath === split2.join("/");
      });
      if (!found) return;
      !found[1].initialised && found[1].initialise();
      return found[1].exports.values;
    }
  }
});
ims.set("./bimport/index", {
  hash: 478135557,
  creator: function (require2, exports) {
    "use strict";

    var _bimport = require2("./bimport");
    var _brequire = require2("./brequire");
    globalThis.bimport === void 0 && (globalThis.bimport = _bimport.bimport);
    globalThis.brequire === void 0 && (globalThis.brequire = _brequire.brequire);
  }
});
ims.set("./bimport/requirejs", {
  hash: 2243979856,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./bundle", {
  hash: 2786310194,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Bundle = void 0;
    var _package = require2("./package");
    var _instances = require2("./instances");
    var _module = require2("./module");
    require2("./bimport");
    class Bundle2 extends Map {
      #type;
      get type() {
        return this.#type;
      }
      #name;
      get name() {
        return this.#name;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #module;
      get module() {
        return this.#module;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      constructor(specs, uri) {
        super();
        if (typeof specs !== "object") throw new Error("Bundle creation specification is not defined");
        const name = this.#name = specs.name ? specs.name : specs.type;
        if (!name) throw new Error("Invalid bundle creation specification");
        this.#module = new _module.Module(specs.module);
        this.#uri = uri;
        this.#type = specs.type;
        const {
          multibundle,
          vspecifier,
          specifier
        } = this.#module;
        this.#vspecifier = multibundle ? `${vspecifier}.${name}` : vspecifier;
        this.#specifier = multibundle ? `${specifier}.${name}` : specifier;
        _instances.instances.register(this);
      }
      package(language) {
        if (language && language.length !== 2) throw new Error(`Language "${language}" is invalid`);
        language = !language ? "" : language;
        if (this.has(language)) return this.get(language);
        const pkg = new _package.Package(this, language);
        this.set(language, pkg);
        return pkg;
      }
    }
    exports.Bundle = Bundle2;
  }
});
ims.set("./events/index", {
  hash: 1779469688,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Events = void 0;
    class Events2 {
      #specs;
      #listeners = /* @__PURE__ */new Map();
      #destroyed = false;
      get destroyed() {
        return this.#destroyed;
      }
      constructor(specs) {
        specs = specs ? specs : {};
        if (specs.supported && !(specs.supported instanceof Array)) throw new Error("Invalid parameters");
        this.#specs = specs;
        if (specs.bind) {
          specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);
          specs.bind.unbind = (event, listener) => this.off(event, listener);
        }
      }
      on(event, listener, priority) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (typeof listener !== "function") {
          throw new Error("Listener is not a function");
        }
        this.off(event, listener);
        const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
        this.#listeners.set(event, l);
        l.push({
          listener,
          priority: priority ? priority : 0
        });
        return this;
      }
      bind = (event, listener, priority) => this.on(event, listener, priority);
      off(event, listener, force) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (!event) {
          throw new Error(`Event name not specified`);
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (!listener) {
          if (!force) throw new Error("Listener function not set");
          this.#listeners.delete(event);
          return this;
        }
        if (!this.#listeners.has(event)) {
          return this;
        }
        const e = this.#listeners.get(event);
        const filtered = e.filter(item => item.listener !== listener);
        this.#listeners.set(event, filtered);
        return this;
      }
      unbind = (event, listener, force) => this.off(event, listener, force);
      trigger(event, ...rest) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        event = typeof event === "string" ? {
          "name": event
        } : event;
        if (typeof event !== "object") throw new Error("Invalid parameters");
        if (typeof event.name !== "string") throw new Error("Invalid event name");
        if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
          throw new Error(`Event "${event.name}" is not defined`);
        }
        let args = [...arguments];
        args.shift();
        if (!this.#listeners.has(event.name)) return;
        let l = this.#listeners.get(event.name);
        l.sort((a, b) => b.priority - a.priority);
        if (event.async) {
          const trigger = async function () {
            const promises = [];
            for (let listener of l) {
              promises.push(listener.listener(...args));
            }
            await Promise.all(promises);
          };
          return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
        } else {
          for (let listener of l) {
            listener.listener(...args);
          }
        }
      }
      destroy() {
        this.#destroyed = true;
        this.#listeners.clear();
      }
    }
    exports.Events = Events2;
  }
});
ims.set("./events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./instances", {
  hash: 1214802090,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    const instances2 = exports.instances = new class extends Map {
      register(bundle) {
        this.set(bundle.vspecifier, bundle);
      }
    }();
  }
});
ims.set("./module/index", {
  hash: 3514722542,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Module = void 0;
    class Module2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #version;
      get version() {
        return this.#version;
      }
      #subpath;
      get subpath() {
        return this.#subpath;
      }
      #multibundle;
      get multibundle() {
        return this.#multibundle;
      }
      constructor(specs) {
        this.#vspecifier = specs.vspecifier;
        this.#multibundle = specs.multibundle;
        const split = specs.vspecifier.split("/");
        const scope = split[0].startsWith("@") ? split.shift() : void 0;
        const [name, version] = split.shift().split("@");
        this.#subpath = split.join("/");
        this.#pkg = scope ? `${scope}/${name}` : name;
        this.#version = version;
        this.#specifier = this.#pkg + (this.#subpath ? `/${this.#subpath}` : "");
      }
      async execute(action, params) {
        const {
          backends
        } = await beyond.import("@beyond-js/backend/client");
        return await backends.execute(this.#pkg, "legacy", this.#subpath, action, params);
      }
    }
    exports.Module = Module2;
  }
});
ims.set("./package/dependencies", {
  hash: 3724344928,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      #pkg;
      constructor(pkg) {
        super();
        this.#pkg = pkg;
      }
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => {
          if (!dependency) {
            throw new Error(`Dependency "${specifier}" not found on package "${this.#pkg.vspecifier}"`);
          }
          const {
            __beyond_transversal: transversal
          } = dependency;
          dependency = transversal ? transversal.bundles.get(specifier) : dependency;
          this.set(specifier, dependency);
        });
      }
    }
    exports.default = _default;
  }
});
ims.set("./package/exports", {
  hash: 3682924180,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _trace = require2("./ims/require/trace");
    class _default {
      #require;
      #values = {};
      get values() {
        return this.#values;
      }
      descriptor;
      process;
      constructor(require3) {
        this.#require = require3;
        this.#values.hmr = {
          on: (event, listener) => require3.pkg.hmr.on(event, listener),
          off: (event, listener) => require3.pkg.hmr.off(event, listener)
        };
        this.#values.__beyond_pkg = this.#require.pkg;
      }
      set(key, value) {
        this.#values[key] = value;
      }
      update() {
        const require3 = id => {
          const trace = new _trace.Trace();
          trace.register("exports.update", id);
          return this.#require.solve(id, trace);
        };
        this.process?.({
          require: require3
        });
        const reserved = ["__beyond_pkg", "hmr"];
        Object.keys(this.#values).forEach(p => !reserved.includes(p) && delete this.#values[p]);
        this.descriptor?.forEach(({
          im,
          from,
          name
        }) => {
          const trace = new _trace.Trace();
          this.#values[name] = this.#require.solve(im, trace)[from];
        });
      }
    }
    exports.default = _default;
  }
});
ims.set("./package/ims/exports", {
  hash: 3697874831,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IMExports = void 0;
    class IMExports {
      constructor(im, bexports) {
        return new Proxy(this, {
          set: (self, name, value) => {
            self[name] = value;
            const prop = bexports.descriptor?.find(({
              im: id,
              from
            }) => {
              return im.id === id && name === from;
            });
            prop && bexports.set(prop.name, value);
            prop && bexports.process?.({
              prop: prop.name,
              value
            });
            return true;
          }
        });
      }
    }
    exports.IMExports = IMExports;
  }
});
ims.set("./package/ims/im", {
  hash: 2241059934,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InternalModule = void 0;
    var _trace = require2("./require/trace");
    var _exports = require2("./exports");
    class InternalModule {
      #pkg;
      get package() {
        return this.#pkg;
      }
      #id;
      get id() {
        return this.#id;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      #require;
      #exports;
      #creator;
      #creating = false;
      #created = false;
      get created() {
        return this.#created;
      }
      #create = trace => {
        if (this.#created) throw new Error(`Internal module "${this.#id}" already created`);
        if (this.#creating) throw new Error(`Cyclical import found on internal module "${this.#id}"`);
        this.#creating = true;
        const require3 = id => this.#require.solve(id, trace, this);
        Object.keys(this.#exports).forEach(key => delete this.#exports[key]);
        this.#creator(require3, this.#exports);
        this.#created = true;
        this.#creating = false;
      };
      require(trace, source) {
        if (!this.#created) {
          source && trace.register(source.id, this.#id);
          this.#create(trace);
          trace.pop();
        }
        return this.#exports;
      }
      initialise() {
        if (this.#created) return;
        const trace = new _trace.Trace();
        trace.register("initialisation", this.#id);
        this.#create(trace);
      }
      update(creator, hash) {
        this.#created = false;
        this.#creator = creator;
        this.#hash = hash;
      }
      constructor(pkg, id, hash, creator, require3) {
        this.#pkg = pkg;
        this.#id = id;
        this.#hash = hash;
        this.#creator = creator;
        this.#require = require3;
        this.#exports = new _exports.IMExports(this, pkg.exports);
      }
    }
    exports.InternalModule = InternalModule;
  }
});
ims.set("./package/ims/index", {
  hash: 993201032,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InternalModules = void 0;
    var _im = require2("./im");
    class InternalModules {
      #pkg;
      #ims = /* @__PURE__ */new Map();
      #require;
      constructor(pkg) {
        this.#pkg = pkg;
      }
      set _require(value) {
        this.#require = value;
      }
      #register = (id, hash, creator) => {
        if (this.#ims.has(id)) throw new Error(`IM "${id}" already registered`);
        const im = new _im.InternalModule(this.#pkg, id, hash, creator, this.#require);
        this.#ims.set(im.id, im);
      };
      register(ims2) {
        ims2.forEach(({
          creator,
          hash
        }, id) => this.#register(id, hash, creator));
      }
      require(id, trace, source) {
        const module2 = (() => {
          if (this.#ims.has(id)) return id;
          return id.endsWith("/") ? `${id}index` : `${id}/index`;
        })();
        if (!this.#ims.has(module2)) {
          throw new Error(`Internal module "${id}" not found`);
        }
        const im = this.#ims.get(module2);
        return im.require(trace, source);
      }
      initialise() {
        this.#ims.forEach(im => im.initialise());
      }
      update(ims2) {
        ims2.forEach(({
          creator,
          hash
        }, id) => {
          if (!this.#ims.has(id)) {
            this.#register(id, hash, creator);
            return;
          }
          const im = this.#ims.get(id);
          if (im.hash === hash) return;
          im.update(creator, hash);
          this.#pkg.hmr.trigger(`${id}:change`);
        });
      }
    }
    exports.InternalModules = InternalModules;
  }
});
ims.set("./package/ims/require/index", {
  hash: 435859969,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Require = void 0;
    var _base = require2("../../../base");
    class Require {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      constructor(pkg) {
        this.#pkg = pkg;
      }
      solve(specifier, trace, im) {
        if (specifier.startsWith(".")) {
          specifier = im ? (0, _base.resolve)(im.id, specifier) : specifier;
          return this.#pkg.ims.require(specifier, trace, im);
        }
        if (specifier === "beyond_context") {
          const {
            bundle
          } = this.#pkg;
          return {
            module: bundle.module,
            bundle,
            pkg: this.#pkg
          };
        }
        if (specifier === "@beyond-js/kernel/bundle") {
          const {
            Bundle: Bundle2
          } = require2("../../../bundle");
          const {
            instances: instances2
          } = require2("../../../instances");
          return {
            Bundle: Bundle2,
            instances: instances2
          };
        }
        const {
          dependencies
        } = this.#pkg;
        if (dependencies.has(specifier)) {
          const {
            __beyond_pkg: pkg
          } = dependencies.get(specifier);
          typeof pkg === "object" && !pkg.initialised && pkg.initialise();
          return dependencies.get(specifier);
        }
        const keys = JSON.stringify([...dependencies.keys()]);
        throw new Error(`Bundle "${specifier}" is not registered as a dependency: ${keys}`);
      }
    }
    exports.Require = Require;
  }
});
ims.set("./package/ims/require/trace", {
  hash: 1932027471,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Trace = void 0;
    class Trace extends Array {
      has = id => this.find(rt => rt.id === id);
      register(source, id) {
        if (this.has(id)) {
          let traced = "";
          this.forEach(({
            id: id2,
            source: source2
          }) => {
            const s = ["initialisation", "exports.update"].includes(source2) ? "Cycle initiates with source" : `then "${source2}" requires`;
            traced += `	${s} "${id2}"
`;
          });
          traced += `	that finally requires "${id}" again.
`;
          throw new Error(`Recursive module load found.
Internal module "${source}" is requiring another internal module that was previously required: "${id}"
Trace of required modules:
${traced}`);
        }
        this.push({
          id,
          source
        });
      }
    }
    exports.Trace = Trace;
  }
});
ims.set("./package/index", {
  hash: 458850112,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Package = void 0;
    var _ims = require2("./ims");
    var _require = require2("./ims/require");
    var _exports = require2("./exports");
    var _dependencies = require2("./dependencies");
    var _instances = require2("./instances");
    var _events = require2("../events");
    class Package2 {
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #language;
      get language() {
        return this.#language;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #require;
      #ims;
      get ims() {
        return this.#ims;
      }
      #exports;
      get exports() {
        return this.#exports;
      }
      #dependencies = new _dependencies.default(this);
      get dependencies() {
        return this.#dependencies;
      }
      #hmr = new _events.Events();
      get hmr() {
        return this.#hmr;
      }
      constructor(bundle, language) {
        this.#bundle = bundle;
        this.#language = language ? language : "";
        this.#vspecifier = language ? `${bundle.vspecifier}.${language}` : bundle.vspecifier;
        this.#specifier = language ? `${bundle.specifier}.${language}` : bundle.specifier;
        this.#ims = new _ims.InternalModules(this);
        this.#require = new _require.Require(this);
        this.#ims._require = this.#require;
        this.#exports = new _exports.default(this.#require);
        _instances.default.register(this);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      initialise(ims2) {
        if (this.#initialised) throw new Error("Package already initialised");
        this.#initialised = true;
        ims2 && this.#ims.register(ims2);
        this.exports.update();
        this.#ims.initialise();
      }
      update(ims2) {
        this.#ims.update(ims2);
        this.exports.update();
        this.#ims.initialise();
        this.#hmr.trigger("change");
      }
    }
    exports.Package = Package2;
  }
});
ims.set("./package/instances", {
  hash: 2745122839,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = exports.default = new class extends Map {
      register(pkg) {
        this.set(pkg.vspecifier, pkg);
      }
    }();
  }
});
__pkg.exports.descriptor = [{
  "im": "./bimport/bimport",
  "from": "bimport",
  "name": "bimport"
}, {
  "im": "./bimport/brequire",
  "from": "brequire",
  "name": "brequire"
}, {
  "im": "./bundle",
  "from": "IBundleSpecs",
  "name": "IBundleSpecs"
}, {
  "im": "./bundle",
  "from": "Bundle",
  "name": "Bundle"
}, {
  "im": "./events/index",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./instances",
  "from": "instances",
  "name": "instances"
}, {
  "im": "./module/index",
  "from": "Module",
  "name": "Module"
}, {
  "im": "./package/exports",
  "from": "IExportsDescriptor",
  "name": "IExportsDescriptor"
}, {
  "im": "./package/ims/im",
  "from": "IMSpecs",
  "name": "IMSpecs"
}, {
  "im": "./package/ims/index",
  "from": "IMCreators",
  "name": "IMCreators"
}, {
  "im": "./package/index",
  "from": "Package",
  "name": "Package"
}];
var bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package;
__pkg.exports.process = function (require2) {
  bimport = require2("./bimport/bimport").bimport;
  brequire = require2("./bimport/brequire").brequire;
  IBundleSpecs = require2("./bundle").IBundleSpecs;
  Bundle = require2("./bundle").Bundle;
  Events = require2("./events/index").Events;
  ListenerFunction = require2("./events/types").ListenerFunction;
  instances = require2("./instances").instances;
  Module = require2("./module/index").Module;
  IExportsDescriptor = require2("./package/exports").IExportsDescriptor;
  IMSpecs = require2("./package/ims/im").IMSpecs;
  IMCreators = require2("./package/ims/index").IMCreators;
  Package = require2("./package/index").Package;
};
var __bp = {};
ims.get("./base/index").creator(() => 0, __bp);
__pkg = new __bp.BeyondPackage(__pkg.exports);
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS4wLjEuMTIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmFzZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2JpbXBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmltcG9ydC9icmVxdWlyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3JlcXVpcmVqcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9idW5kbGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvZXZlbnRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3R5cGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2luc3RhbmNlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9tb2R1bGUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9kZXBlbmRlbmNpZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9leHBvcnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL2V4cG9ydHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvcmVxdWlyZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9yZXF1aXJlL3RyYWNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbnN0YW5jZXMudHMiXSwibmFtZXMiOlsiYnVuZGxlXzBfMV8xMl9leHBvcnRzIiwiX19leHBvcnQiLCJCdW5kbGUiLCJFdmVudHMiLCJJQnVuZGxlU3BlY3MiLCJJRXhwb3J0c0Rlc2NyaXB0b3IiLCJJTUNyZWF0b3JzIiwiSU1TcGVjcyIsIkxpc3RlbmVyRnVuY3Rpb24iLCJNb2R1bGUiLCJQYWNrYWdlIiwiYmltcG9ydCIsImJyZXF1aXJlIiwiaW5zdGFuY2VzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInJlc29sdmUiLCJzb3VyY2UiLCJpZCIsInN0YXJ0c1dpdGgiLCJFcnJvciIsInNwbGl0IiwicG9wIiwidGFyZ2V0Iiwic2xpY2UiLCJsZW5ndGgiLCJzaGlmdCIsImpvaW4iLCJCZXlvbmRQYWNrYWdlIiwiaW1zIiwiY2FjaGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJleHBvcnRzMiIsImluaXRpYWxpc2UiLCJpbXMyIiwicHJvY2VzcyIsInJlcXVpcmUiLCJtb2R1bGUyIiwiaGFzIiwiZW5kc1dpdGgiLCJnZXQiLCJmbiIsImNyZWF0b3IiLCJyZXF1aXJlMyIsInJlcXVpcmVkIiwic2V0IiwicmVxdWlyZTIiLCJiaW1wb3J0MiIsInJlc291cmNlIiwidmVyc2lvbiIsIm1vZGUiLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJhbWRfcmVxdWlyZSIsInJldHVybmVkIiwiZXhjIiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwiZ2xvYmFsVGhpcyIsIlN5c3RlbSIsImltcG9ydCIsImFwcERlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsIl9fYXBwX3BhY2thZ2UiLCJzcGVjaWZpZXIiLCJ0ZXN0IiwicGtnIiwic3VicGF0aCIsIl9pbnN0YW5jZXMiLCJicmVxdWlyZTIiLCJmb3VuZCIsImRlZmF1bHQiLCJmaW5kIiwidnNwZWNpZmllciIsInNwbGl0MiIsImluaXRpYWxpc2VkIiwidmFsdWVzIiwiX2JpbXBvcnQiLCJfYnJlcXVpcmUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3BhY2thZ2UiLCJfbW9kdWxlIiwiQnVuZGxlMiIsInR5cGUiLCJuYW1lIiwidXJpIiwic3BlY3MiLCJtdWx0aWJ1bmRsZSIsInJlZ2lzdGVyIiwicGFja2FnZSIsImxhbmd1YWdlIiwiRXZlbnRzMiIsImxpc3RlbmVycyIsImRlc3Ryb3llZCIsInN1cHBvcnRlZCIsIkFycmF5IiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwicHVzaCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInRyaWdnZXIiLCJyZXN0IiwiYXJncyIsImFyZ3VtZW50cyIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJkZXN0cm95IiwiY2xlYXIiLCJpbnN0YW5jZXMyIiwiYnVuZGxlIiwiTW9kdWxlMiIsInNjb3BlIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImJhY2tlbmRzIiwiYmV5b25kIiwiX2RlZmF1bHQiLCJ1cGRhdGUiLCJkZXBzIiwiZm9yRWFjaCIsImRlcGVuZGVuY3kiLCJfX2JleW9uZF90cmFuc3ZlcnNhbCIsInRyYW5zdmVyc2FsIiwiYnVuZGxlcyIsIl90cmFjZSIsImRlc2NyaXB0b3IiLCJobXIiLCJfX2JleW9uZF9wa2ciLCJrZXkiLCJ0cmFjZSIsIlRyYWNlIiwic29sdmUiLCJyZXNlcnZlZCIsImtleXMiLCJwIiwiaW0iLCJmcm9tIiwiSU1FeHBvcnRzIiwiYmV4cG9ydHMiLCJQcm94eSIsInNlbGYiLCJwcm9wIiwiX2V4cG9ydHMiLCJJbnRlcm5hbE1vZHVsZSIsImhhc2giLCJjcmVhdGluZyIsImNyZWF0ZWQiLCJjcmVhdGUiLCJfaW0iLCJJbnRlcm5hbE1vZHVsZXMiLCJfcmVxdWlyZSIsIiNyZWdpc3RlciIsIl9iYXNlIiwiUmVxdWlyZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJydCIsInRyYWNlZCIsImlkMiIsInNvdXJjZTIiLCJzIiwiX2ltcyIsIl9kZXBlbmRlbmNpZXMiLCJfZXZlbnRzIiwiUGFja2FnZTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFB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