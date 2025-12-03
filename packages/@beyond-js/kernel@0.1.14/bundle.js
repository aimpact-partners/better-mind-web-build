System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"]]);
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

// .beyond/uimport/temp/@beyond-js/kernel/bundle.0.1.14.js
var bundle_0_1_14_exports = {};
__export(bundle_0_1_14_exports, {
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
module.exports = __toCommonJS(bundle_0_1_14_exports);

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
      /**
       * Solve the require function
       *
       * @param source {string} The module from where the require is being triggered
       * @param id {string} The module id being requested
       * @returns {*}
       */
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
      /**
       * Binds an event handler to an event name
       *
       * @param {string} event
       * @param {ListenerFunction} listener
       * @param {number} priority
       * @returns {this}
       */
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
      /**
       * Unbind an event listener
       *
       * @param {string} event
       * @param {ListenerFunction} listener
       * @param {number} force
       * @returns {this}
       */
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
      /**
       * Triggers an event
       *
       * @param {Trigger} event
       * @param {*} rest
       * @returns {Promise<*>}
       */
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
      /**
       * @deprecated
       *
       * @param {string} action
       * @param {Record<string, *>} params
       * @return {Promise<*>}
       */
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
      /**
       * Property is set by the bundle file, or by the transversal
       * @type {{im: string, from: string, name: string}[]}
       */
      descriptor;
      /**
       * Property is set by the bundle file to process the module exports (es6, cjs, amd)
       * @type {(require: (id: string) => any) => {void(require)}}
       */
      process;
      constructor(require3) {
        this.#require = require3;
        this.#values.hmr = {
          on: (event, listener) => require3.pkg.hmr.on(event, listener),
          off: (event, listener) => require3.pkg.hmr.off(event, listener)
        };
        this.#values.__beyond_pkg = this.#require.pkg;
      }
      // Used by the IM exports proxy to update the value of the bundle exported property when
      // the property is changed in the IM
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
      /**
       * Solve a cjs require function
       *
       * @param {string} specifier The id of the internal module being required
       * @param {Trace} trace {object} The internal trace to find cyclical dependencies of internal modules
       * @param {InternalModule=} im The internal module that is making the call
       * @return {*}
       */
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
      // The beyond dependencies that are required by the bundle
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS4wLjEuMTQuanMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvYmFzZS9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2JpbXBvcnQudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvYmltcG9ydC9icmVxdWlyZS50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3JlcXVpcmVqcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9idW5kbGUudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvZXZlbnRzL2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3R5cGVzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL2luc3RhbmNlcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9tb2R1bGUvaW5kZXgudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9kZXBlbmRlbmNpZXMudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9leHBvcnRzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL2V4cG9ydHMudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW0udHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW5kZXgudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvcmVxdWlyZS9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9yZXF1aXJlL3RyYWNlLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW5kZXgudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbnN0YW5jZXMudHMiXSwibmFtZXMiOlsiYnVuZGxlXzBfMV8xNF9leHBvcnRzIiwiX19leHBvcnQiLCJCdW5kbGUiLCJFdmVudHMiLCJJQnVuZGxlU3BlY3MiLCJJRXhwb3J0c0Rlc2NyaXB0b3IiLCJJTUNyZWF0b3JzIiwiSU1TcGVjcyIsIkxpc3RlbmVyRnVuY3Rpb24iLCJNb2R1bGUiLCJQYWNrYWdlIiwiYmltcG9ydCIsImJyZXF1aXJlIiwiaW5zdGFuY2VzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInJlc29sdmUiLCJzb3VyY2UiLCJpZCIsInN0YXJ0c1dpdGgiLCJFcnJvciIsInNwbGl0IiwicG9wIiwidGFyZ2V0Iiwic2xpY2UiLCJsZW5ndGgiLCJzaGlmdCIsImpvaW4iLCJCZXlvbmRQYWNrYWdlIiwiaW1zIiwiY2FjaGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJleHBvcnRzMiIsImluaXRpYWxpc2UiLCJpbXMyIiwicHJvY2VzcyIsInJlcXVpcmUiLCJtb2R1bGUyIiwiaGFzIiwiZW5kc1dpdGgiLCJnZXQiLCJmbiIsImNyZWF0b3IiLCJyZXF1aXJlMyIsInJlcXVpcmVkIiwic2V0IiwicmVxdWlyZTIiLCJiaW1wb3J0MiIsInJlc291cmNlIiwidmVyc2lvbiIsIm1vZGUiLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJhbWRfcmVxdWlyZSIsInJldHVybmVkIiwiZXhjIiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwiZ2xvYmFsVGhpcyIsIlN5c3RlbSIsImltcG9ydCIsImFwcERlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsIl9fYXBwX3BhY2thZ2UiLCJzcGVjaWZpZXIiLCJ0ZXN0IiwicGtnIiwic3VicGF0aCIsIl9pbnN0YW5jZXMiLCJicmVxdWlyZTIiLCJmb3VuZCIsImRlZmF1bHQiLCJmaW5kIiwidnNwZWNpZmllciIsInNwbGl0MiIsImluaXRpYWxpc2VkIiwidmFsdWVzIiwiX2JpbXBvcnQiLCJfYnJlcXVpcmUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3BhY2thZ2UiLCJfbW9kdWxlIiwiQnVuZGxlMiIsInR5cGUiLCJuYW1lIiwidXJpIiwic3BlY3MiLCJtdWx0aWJ1bmRsZSIsInJlZ2lzdGVyIiwicGFja2FnZSIsImxhbmd1YWdlIiwiRXZlbnRzMiIsImxpc3RlbmVycyIsImRlc3Ryb3llZCIsInN1cHBvcnRlZCIsIkFycmF5IiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwicHVzaCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInRyaWdnZXIiLCJyZXN0IiwiYXJncyIsImFyZ3VtZW50cyIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJkZXN0cm95IiwiY2xlYXIiLCJpbnN0YW5jZXMyIiwiYnVuZGxlIiwiTW9kdWxlMiIsInNjb3BlIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImJhY2tlbmRzIiwiYmV5b25kIiwiX2RlZmF1bHQiLCJ1cGRhdGUiLCJkZXBzIiwiZm9yRWFjaCIsImRlcGVuZGVuY3kiLCJfX2JleW9uZF90cmFuc3ZlcnNhbCIsInRyYW5zdmVyc2FsIiwiYnVuZGxlcyIsIl90cmFjZSIsImRlc2NyaXB0b3IiLCJobXIiLCJfX2JleW9uZF9wa2ciLCJrZXkiLCJ0cmFjZSIsIlRyYWNlIiwic29sdmUiLCJyZXNlcnZlZCIsImtleXMiLCJwIiwiaW0iLCJmcm9tIiwiSU1FeHBvcnRzIiwiYmV4cG9ydHMiLCJQcm94eSIsInNlbGYiLCJwcm9wIiwiX2V4cG9ydHMiLCJJbnRlcm5hbE1vZHVsZSIsImhhc2giLCJjcmVhdGluZyIsImNyZWF0ZWQiLCJjcmVhdGUiLCJfaW0iLCJJbnRlcm5hbE1vZHVsZXMiLCJfcmVxdWlyZSIsIiNyZWdpc3RlciIsIl9iYXNlIiwiUmVxdWlyZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJydCIsInRyYWNlZCIsImlkMiIsInNvdXJjZTIiLCJzIiwiX2ltcyIsIl9kZXBlbmRlbmNpZXMiLCJfZXZlbnRzIiwiUGFja2FnZTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFoQixxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNTTSxTQUFVaUIsUUFBUUMsTUFBQSxFQUFnQkMsRUFBQSxFQUFVO01BQzlDLElBQUksQ0FBQ0EsRUFBQSxDQUFHQyxVQUFBLENBQVcsR0FBRyxHQUFHLE1BQU0sSUFBSUMsS0FBQSxDQUFNLDBDQUEwQ0YsRUFBRSxHQUFHO01BT3hGLE1BQU1HLEtBQUEsR0FBZTtNQUNyQkEsS0FBQSxDQUFNSixNQUFBLEdBQVNBLE1BQUEsQ0FBT0ksS0FBQSxDQUFNLEdBQUc7TUFDL0JBLEtBQUEsQ0FBTUosTUFBQSxDQUFPSyxHQUFBLENBQUc7TUFDaEJELEtBQUEsQ0FBTUUsTUFBQSxJQUFVTCxFQUFBLENBQUdDLFVBQUEsQ0FBVyxJQUFJLElBQUlELEVBQUEsQ0FBR00sS0FBQSxDQUFNLENBQUMsSUFBSU4sRUFBQSxFQUFJRyxLQUFBLENBQU0sS0FBSztNQUNuRSxPQUFPQSxLQUFBLENBQU1FLE1BQUEsQ0FBTyxDQUFDLE1BQU0sTUFBTUYsS0FBQSxDQUFNRSxNQUFBLENBQU9FLE1BQUEsR0FBUyxHQUFHO1FBQ3RESixLQUFBLENBQU1FLE1BQUEsQ0FBT0csS0FBQSxDQUFLO1FBQ2xCTCxLQUFBLENBQU1KLE1BQUEsQ0FBT0ssR0FBQSxDQUFHOztNQUdwQixPQUFPRCxLQUFBLENBQU1KLE1BQUEsQ0FBT1UsSUFBQSxDQUFLLEdBQUcsSUFBSSxNQUFNTixLQUFBLENBQU1FLE1BQUEsQ0FBT0ksSUFBQSxDQUFLLEdBQUc7SUFDL0Q7SUFLTSxNQUFPQyxhQUFBLENBQWE7TUFDdEIsQ0FBQUMsR0FBQTtNQUNTLENBQUFDLE1BQUEsR0FBNEMsbUJBQUlDLEdBQUEsQ0FBRztNQUU1RCxDQUFBakIsT0FBQTtNQUVBa0IsWUFBWUMsUUFBQSxFQUFZO1FBQ3BCLEtBQUssQ0FBQW5CLE9BQUEsR0FBV21CLFFBQUE7TUFDcEI7TUFFQUMsV0FBV0MsSUFBQSxFQUEwQjtRQUNqQyxLQUFLLENBQUFOLEdBQUEsR0FBT00sSUFBQTtRQUNaLEtBQUssQ0FBQXJCLE9BQUEsQ0FBU3NCLE9BQUEsQ0FBUSxDQUFDbEIsRUFBQSxFQUFZRCxNQUFBLEtBQXlCLEtBQUtvQixPQUFBLENBQVFuQixFQUFBLEVBQUlELE1BQU0sR0FBRyxFQUFFO01BQzVGOzs7Ozs7OztNQVNBb0IsUUFBUW5CLEVBQUEsRUFBWUQsTUFBQSxFQUFlO1FBQy9CQyxFQUFBLEdBQUtELE1BQUEsR0FBU0QsT0FBQSxDQUFRQyxNQUFBLEVBQVFDLEVBQUUsSUFBSUEsRUFBQTtRQUVwQyxNQUFNb0IsT0FBQSxJQUFVLE1BQUs7VUFDakIsSUFBSSxLQUFLLENBQUFULEdBQUEsQ0FBS1UsR0FBQSxDQUFJckIsRUFBRSxHQUFHLE9BQU9BLEVBQUE7VUFDOUIsT0FBT0EsRUFBQSxDQUFHc0IsUUFBQSxDQUFTLEdBQUcsSUFBSSxHQUFHdEIsRUFBRSxVQUFVLEdBQUdBLEVBQUU7UUFDbEQsR0FBRTtRQUVGLElBQUksS0FBSyxDQUFBWSxNQUFBLENBQVFTLEdBQUEsQ0FBSUQsT0FBTSxHQUFHLE9BQU8sS0FBSyxDQUFBUixNQUFBLENBQVFXLEdBQUEsQ0FBSUgsT0FBTTtRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFBVCxHQUFBLENBQUtVLEdBQUEsQ0FBSUQsT0FBTSxHQUFHLE1BQU0sSUFBSWxCLEtBQUEsQ0FBTSxvQkFBb0JGLEVBQUUsYUFBYTtRQUUvRSxNQUFNd0IsRUFBQSxHQUFLLEtBQUssQ0FBQWIsR0FBQSxDQUFLWSxHQUFBLENBQUlILE9BQU0sRUFBRUssT0FBQTtRQUNqQyxNQUFNQyxRQUFBLEdBQVdDLFFBQUEsSUFBcUIsS0FBS1IsT0FBQSxDQUFRUSxRQUFBLEVBQVVQLE9BQU07UUFDbkUsTUFBTUwsUUFBQSxHQUFVO1FBQ2hCUyxFQUFBLENBQUdFLFFBQUEsRUFBU1gsUUFBTztRQUVuQixLQUFLLENBQUFILE1BQUEsQ0FBUWdCLEdBQUEsQ0FBSVIsT0FBQSxFQUFRTCxRQUFPO1FBQ2hDLE9BQU9BLFFBQUE7TUFDWDs7SUFDSG5CLE9BQUEsQ0FBQWMsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7SUN6RURtQixRQUFBO0lBY2lCLFNBQVVDLFNBQVFDLFFBQUEsRUFBa0JDLE9BQUEsRUFBZ0I7TUFDakUsSUFBSUYsUUFBQSxDQUFRRyxJQUFBLEtBQVMsT0FBTztRQUN4QixPQUFPLElBQUlDLE9BQUEsQ0FBYSxDQUFDcEMsT0FBQSxFQUFTcUMsTUFBQSxLQUFVO1VBQ3hDLElBQUksT0FBT0osUUFBQSxLQUFhLFVBQVUsTUFBTTtVQUN4Q0EsUUFBQSxHQUFXQSxRQUFBLENBQVNULFFBQUEsQ0FBUyxLQUFLLElBQUlTLFFBQUEsQ0FBU3pCLEtBQUEsQ0FBTSxHQUFHeUIsUUFBQSxDQUFTeEIsTUFBQSxHQUFTLENBQUMsSUFBSXdCLFFBQUE7VUFFL0UsTUFBTUssS0FBQSxHQUFRLElBQUlsQyxLQUFBLENBQU0sdUNBQXVDNkIsUUFBUSxHQUFHO1VBQzFFTSxXQUFBLENBQVksQ0FBQ04sUUFBUSxHQUNoQk8sUUFBQSxJQUFrQnhDLE9BQUEsQ0FBUXdDLFFBQVEsR0FDbENDLEdBQUEsSUFBYztZQUNYQyxPQUFBLENBQVFKLEtBQUEsQ0FBTSwyQkFBMkJMLFFBQVEsSUFBSTtZQUNyRFMsT0FBQSxDQUFRQyxHQUFBLENBQUlGLEdBQUEsQ0FBSUcsS0FBSztZQUNyQlAsTUFBQSxDQUFPQyxLQUFLO1VBQ2hCLENBQUM7UUFFVCxDQUFDO2lCQUNNTixRQUFBLENBQVFHLElBQUEsS0FBUyxPQUFPO1FBQy9CLE9BQWFVLFVBQUEsQ0FBWUMsTUFBQSxDQUFPQyxNQUFBLENBQU9kLFFBQUEsSUFBWUMsT0FBQSxHQUFVLFlBQVlBLE9BQU8sS0FBSyxHQUFHO2FBQ3JGO1FBQ0gsT0FBTyxPQUFPRCxRQUFBLElBQVlDLE9BQUEsR0FBVSxZQUFZQSxPQUFPLEtBQUs7O0lBRXBFO0lBRUFGLFFBQUEsQ0FBUUcsSUFBQSxJQUFRLE1BQUs7TUFDakIsSUFBSSxPQUFPSSxXQUFBLEtBQWdCLFlBQVksT0FBTztNQUM5QyxNQUFNO1FBQUNPO01BQU0sSUFBVUQsVUFBQTtNQUN2QixJQUFJLE9BQU9DLE1BQUEsS0FBVyxZQUFZLE9BQU9BLE1BQUEsQ0FBT0MsTUFBQSxLQUFXLFlBQVksT0FBTztNQUM5RSxPQUFPO0lBQ1gsR0FBRTtJQUVGLE1BQU1DLGVBQUEsSUFBbUIsTUFBSztNQUMxQixNQUFNQyxZQUFBLEdBQXFCSixVQUFBLENBQVlLLGFBQUEsRUFBZUQsWUFBQTtNQUN0RCxPQUFPLElBQUlsQyxHQUFBLENBQUlrQyxZQUFZO0lBQy9CLEdBQUU7SUFFRmpCLFFBQUEsQ0FBUWhDLE9BQUEsR0FBVyxDQUFDbUQsU0FBQSxFQUFtQkYsWUFBQSxLQUE2QjtNQUNoRSxJQUFJLGVBQWVHLElBQUEsQ0FBS0QsU0FBUyxHQUFHLE9BQU9BLFNBQUE7TUFFM0MsTUFBTTlDLEtBQUEsR0FBUThDLFNBQUEsQ0FBVTlDLEtBQUEsQ0FBTSxHQUFHO01BQ2pDLE1BQU1nRCxHQUFBLEdBQU1oRCxLQUFBLENBQU0sQ0FBQyxFQUFFRixVQUFBLENBQVcsR0FBRyxJQUFJLEdBQUdFLEtBQUEsQ0FBTUssS0FBQSxDQUFLLENBQUUsSUFBSUwsS0FBQSxDQUFNSyxLQUFBLENBQUssQ0FBRSxLQUFLTCxLQUFBLENBQU1LLEtBQUEsQ0FBSztNQUV4RixNQUFNd0IsT0FBQSxJQUFXLE1BQUs7UUFDbEIsSUFBSWUsWUFBQSxDQUFhMUIsR0FBQSxDQUFJOEIsR0FBRyxHQUFHLE9BQU9KLFlBQUEsQ0FBYXhCLEdBQUEsQ0FBSTRCLEdBQUc7UUFDdEQsSUFBSUwsZUFBQSxDQUFnQnpCLEdBQUEsQ0FBSThCLEdBQUcsR0FBRyxPQUFPTCxlQUFBLENBQWdCdkIsR0FBQSxDQUFJNEIsR0FBRztNQUNoRSxHQUFFO01BQ0YsSUFBSSxDQUFDbkIsT0FBQSxFQUFTLE9BQU9pQixTQUFBO01BRXJCLE1BQU1HLE9BQUEsR0FBVWpELEtBQUEsQ0FBTU0sSUFBQSxDQUFLLEdBQUc7TUFDOUIsT0FBTyxHQUFHMEMsR0FBRyxJQUFJbkIsT0FBTyxNQUFNb0IsT0FBQSxHQUFVLElBQUlBLE9BQU8sS0FBSztJQUM1RDs7Ozs7Ozs7Ozs7O0lDL0RBLElBQUFDLFVBQUEsR0FBQXhCLFFBQUE7SUFlaUIsU0FBVXlCLFVBQVNMLFNBQUEsRUFBaUI7TUFDakQsTUFBTTlDLEtBQUEsR0FBUThDLFNBQUEsQ0FBVTlDLEtBQUEsQ0FBTSxHQUFHO01BQ2pDLE1BQU1nRCxHQUFBLEdBQU1oRCxLQUFBLENBQU0sQ0FBQyxFQUFFRixVQUFBLENBQVcsR0FBRyxJQUFJLEdBQUdFLEtBQUEsQ0FBTUssS0FBQSxDQUFLLENBQUUsSUFBSUwsS0FBQSxDQUFNSyxLQUFBLENBQUssQ0FBRSxLQUFLTCxLQUFBLENBQU1LLEtBQUEsQ0FBSztNQUN4RixNQUFNNEMsT0FBQSxHQUFVakQsS0FBQSxDQUFNTSxJQUFBLENBQUssR0FBRztNQUU5QixNQUFNOEMsS0FBQSxHQUFRLENBQUMsR0FBR0YsVUFBQSxDQUFBRyxPQUFTLEVBQUVDLElBQUEsQ0FBSyxDQUFDLENBQUNDLFVBQVUsTUFBSztRQUMvQyxJQUFJLENBQUNBLFVBQUEsQ0FBV3pELFVBQUEsQ0FBVyxHQUFHa0QsR0FBRyxHQUFHLEdBQUc7UUFDdkMsTUFBTVEsTUFBQSxHQUFRRCxVQUFBLENBQVdwRCxLQUFBLENBQU02QyxHQUFBLENBQUk1QyxNQUFNLEVBQUVKLEtBQUEsQ0FBTSxHQUFHO1FBQ3BEd0QsTUFBQSxDQUFNbkQsS0FBQSxDQUFLO1FBQ1gsT0FBTzRDLE9BQUEsS0FBWU8sTUFBQSxDQUFNbEQsSUFBQSxDQUFLLEdBQUc7TUFDckMsQ0FBQztNQUNELElBQUksQ0FBQzhDLEtBQUEsRUFBTztNQUVaLENBQUNBLEtBQUEsQ0FBTSxDQUFDLEVBQUVLLFdBQUEsSUFBZUwsS0FBQSxDQUFNLENBQUMsRUFBRXZDLFVBQUEsQ0FBVTtNQUM1QyxPQUFPdUMsS0FBQSxDQUFNLENBQUMsRUFBRTNELE9BQUEsQ0FBUWlFLE1BQUE7SUFDNUI7Ozs7Ozs7O0lDOUJBLElBQUFDLFFBQUEsR0FBQWpDLFFBQUE7SUFDQSxJQUFBa0MsU0FBQSxHQUFBbEMsUUFBQTtJQUtNYyxVQUFBLENBQVluRCxPQUFBLEtBQVksV0FBaUJtRCxVQUFBLENBQVluRCxPQUFBLEdBQVVzRSxRQUFBLENBQUF0RSxPQUFBO0lBQy9EbUQsVUFBQSxDQUFZbEQsUUFBQSxLQUFhLFdBQWlCa0QsVUFBQSxDQUFZbEQsUUFBQSxHQUFXc0UsU0FBQSxDQUFBdEUsUUFBQTs7Ozs7O0lDUHZFOztJQUVBdUUsTUFBQSxDQUFBQyxjQUFBLENBQUFyRSxPQUFBO01BQ0FzRSxLQUFBO0lBQ0E7Ozs7Ozs7Ozs7OztJQ0pBLElBQUFDLFFBQUEsR0FBQXRDLFFBQUE7SUFDQSxJQUFBd0IsVUFBQSxHQUFBeEIsUUFBQTtJQUNBLElBQUF1QyxPQUFBLEdBQUF2QyxRQUFBO0lBQ0FBLFFBQUE7SUFTaUIsTUFDWHdDLE9BQUEsU0FBZXhELEdBQUEsQ0FBb0I7TUFDNUIsQ0FBQXlELElBQUE7TUFDVCxJQUFJQSxLQUFBLEVBQUk7UUFDSixPQUFPLEtBQUssQ0FBQUEsSUFBQTtNQUNoQjtNQUVTLENBQUFDLElBQUE7TUFDVCxJQUFJQSxLQUFBLEVBQUk7UUFDSixPQUFPLEtBQUssQ0FBQUEsSUFBQTtNQUNoQjtNQUVTLENBQUFiLFVBQUE7TUFDVCxJQUFJQSxXQUFBLEVBQVU7UUFDVixPQUFPLEtBQUssQ0FBQUEsVUFBQTtNQUNoQjtNQUVTLENBQUFULFNBQUE7TUFDVCxJQUFJQSxVQUFBLEVBQVM7UUFDVCxPQUFPLEtBQUssQ0FBQUEsU0FBQTtNQUNoQjtNQUVTLENBQUF0RCxNQUFBO01BQ1QsSUFBSUEsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDaEI7TUFFUyxDQUFBNkUsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNILE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2hCO01BRUExRCxZQUFZMkQsS0FBQSxFQUFxQkQsR0FBQSxFQUFZO1FBQ3pDLE1BQUs7UUFFTCxJQUFJLE9BQU9DLEtBQUEsS0FBVSxVQUFVLE1BQU0sSUFBSXZFLEtBQUEsQ0FBTSw4Q0FBOEM7UUFFN0YsTUFBTXFFLElBQUEsR0FBTyxLQUFLLENBQUFBLElBQUEsR0FBUUUsS0FBQSxDQUFNRixJQUFBLEdBQU9FLEtBQUEsQ0FBTUYsSUFBQSxHQUFPRSxLQUFBLENBQU1ILElBQUE7UUFDMUQsSUFBSSxDQUFDQyxJQUFBLEVBQU0sTUFBTSxJQUFJckUsS0FBQSxDQUFNLHVDQUF1QztRQUVsRSxLQUFLLENBQUFQLE1BQUEsR0FBVSxJQUFJeUUsT0FBQSxDQUFBOUUsTUFBQSxDQUFPbUYsS0FBQSxDQUFNOUUsTUFBTTtRQUN0QyxLQUFLLENBQUE2RSxHQUFBLEdBQU9BLEdBQUE7UUFDWixLQUFLLENBQUFGLElBQUEsR0FBUUcsS0FBQSxDQUFNSCxJQUFBO1FBRW5CLE1BQU07VUFBQ0ksV0FBQTtVQUFhaEIsVUFBQTtVQUFZVDtRQUFTLElBQUksS0FBSyxDQUFBdEQsTUFBQTtRQUNsRCxLQUFLLENBQUErRCxVQUFBLEdBQWNnQixXQUFBLEdBQWMsR0FBR2hCLFVBQVUsSUFBSWEsSUFBSSxLQUFLYixVQUFBO1FBQzNELEtBQUssQ0FBQVQsU0FBQSxHQUFheUIsV0FBQSxHQUFjLEdBQUd6QixTQUFTLElBQUlzQixJQUFJLEtBQUt0QixTQUFBO1FBRXpESSxVQUFBLENBQUEzRCxTQUFBLENBQVVpRixRQUFBLENBQVMsSUFBSTtNQUMzQjtNQUVBQyxRQUFRQyxRQUFBLEVBQWlCO1FBQ3JCLElBQUlBLFFBQUEsSUFBWUEsUUFBQSxDQUFTdEUsTUFBQSxLQUFXLEdBQUcsTUFBTSxJQUFJTCxLQUFBLENBQU0sYUFBYTJFLFFBQVEsY0FBYztRQUMxRkEsUUFBQSxHQUFXLENBQUNBLFFBQUEsR0FBVyxLQUFLQSxRQUFBO1FBRTVCLElBQUksS0FBS3hELEdBQUEsQ0FBSXdELFFBQVEsR0FBRyxPQUFPLEtBQUt0RCxHQUFBLENBQUlzRCxRQUFRO1FBRWhELE1BQU0xQixHQUFBLEdBQU0sSUFBSWdCLFFBQUEsQ0FBQTVFLE9BQUEsQ0FBUSxNQUFNc0YsUUFBUTtRQUN0QyxLQUFLakQsR0FBQSxDQUFJaUQsUUFBQSxFQUFVMUIsR0FBRztRQUN0QixPQUFPQSxHQUFBO01BQ1g7O0lBQ0h2RCxPQUFBLENBQUFiLE1BQUEsR0FBQXNGLE9BQUE7Ozs7Ozs7Ozs7OztJQ3ZFZ0IsTUFDWFMsT0FBQSxDQUFNO01BQ1IsQ0FBQUwsS0FBQTtNQUNBLENBQUFNLFNBQUEsR0FBMkMsbUJBQUlsRSxHQUFBO01BQy9DLENBQUFtRSxTQUFBLEdBQWE7TUFDYixJQUFJQSxVQUFBLEVBQVM7UUFDVCxPQUFPLEtBQUssQ0FBQUEsU0FBQTtNQUNoQjtNQUVBbEUsWUFBWTJELEtBQUEsRUFBbUI7UUFDM0JBLEtBQUEsR0FBUUEsS0FBQSxHQUFRQSxLQUFBLEdBQVE7UUFFeEIsSUFBSUEsS0FBQSxDQUFNUSxTQUFBLElBQWEsRUFBRVIsS0FBQSxDQUFNUSxTQUFBLFlBQXFCQyxLQUFBLEdBQVEsTUFBTSxJQUFJaEYsS0FBQSxDQUFNLG9CQUFvQjtRQUNoRyxLQUFLLENBQUF1RSxLQUFBLEdBQVNBLEtBQUE7UUFFZCxJQUFJQSxLQUFBLENBQU1VLElBQUEsRUFBTTtVQUNaVixLQUFBLENBQU1VLElBQUEsQ0FBS0EsSUFBQSxHQUFPLENBQUNDLEtBQUEsRUFBZUMsUUFBQSxFQUE0QkMsUUFBQSxLQUNsRCxLQUFLQyxFQUFBLENBQUdILEtBQUEsRUFBT0MsUUFBQSxFQUFVQyxRQUFRO1VBQzdDYixLQUFBLENBQU1VLElBQUEsQ0FBS0ssTUFBQSxHQUFTLENBQUNKLEtBQUEsRUFBT0MsUUFBQSxLQUFhLEtBQUtJLEdBQUEsQ0FBSUwsS0FBQSxFQUFPQyxRQUFROztNQUV6RTs7Ozs7Ozs7O01BVUFFLEdBQUdILEtBQUEsRUFBZUMsUUFBQSxFQUE0QkMsUUFBQSxFQUFpQjtRQUMzRCxJQUFJLEtBQUssQ0FBQU4sU0FBQSxFQUFZO1VBQ2pCLE1BQU0sSUFBSTlFLEtBQUEsQ0FBTSw0QkFBNEI7O1FBRWhELElBQUksS0FBSyxDQUFBdUUsS0FBQSxDQUFPUSxTQUFBLElBQWEsQ0FBQyxLQUFLLENBQUFSLEtBQUEsQ0FBT1EsU0FBQSxDQUFVUyxRQUFBLENBQVNOLEtBQUssR0FBRztVQUNqRSxNQUFNLElBQUlsRixLQUFBLENBQU0sVUFBVWtGLEtBQUssa0JBQWtCOztRQUVyRCxJQUFJLE9BQU9DLFFBQUEsS0FBYSxZQUFZO1VBQ2hDLE1BQU0sSUFBSW5GLEtBQUEsQ0FBTSw0QkFBNEI7O1FBR2hELEtBQUt1RixHQUFBLENBQUlMLEtBQUEsRUFBT0MsUUFBUTtRQUV4QixNQUFNTSxDQUFBLEdBQXFCLEtBQUssQ0FBQVosU0FBQSxDQUFXMUQsR0FBQSxDQUFJK0QsS0FBSyxJQUFJLEtBQUssQ0FBQUwsU0FBQSxDQUFXeEQsR0FBQSxDQUFJNkQsS0FBSyxJQUFJO1FBQ3JGLEtBQUssQ0FBQUwsU0FBQSxDQUFXbkQsR0FBQSxDQUFJd0QsS0FBQSxFQUFPTyxDQUFDO1FBQzVCQSxDQUFBLENBQUVDLElBQUEsQ0FBSztVQUFDUCxRQUFBO1VBQW9CQyxRQUFBLEVBQVVBLFFBQUEsR0FBV0EsUUFBQSxHQUFXO1FBQUMsQ0FBQztRQUU5RCxPQUFPO01BQ1g7TUFFQUgsSUFBQSxHQUFPQSxDQUFDQyxLQUFBLEVBQWVDLFFBQUEsRUFBNEJDLFFBQUEsS0FDL0MsS0FBS0MsRUFBQSxDQUFHSCxLQUFBLEVBQU9DLFFBQUEsRUFBVUMsUUFBUTs7Ozs7Ozs7O01BVXJDRyxJQUFJTCxLQUFBLEVBQWVDLFFBQUEsRUFBNEJRLEtBQUEsRUFBYztRQUN6RCxJQUFJLEtBQUssQ0FBQWIsU0FBQSxFQUFZO1VBQ2pCLE1BQU0sSUFBSTlFLEtBQUEsQ0FBTSw0QkFBNEI7O1FBRWhELElBQUksQ0FBQ2tGLEtBQUEsRUFBTztVQUNSLE1BQU0sSUFBSWxGLEtBQUEsQ0FBTSwwQkFBMEI7O1FBRTlDLElBQUksS0FBSyxDQUFBdUUsS0FBQSxDQUFPUSxTQUFBLElBQWEsQ0FBQyxLQUFLLENBQUFSLEtBQUEsQ0FBT1EsU0FBQSxDQUFVUyxRQUFBLENBQVNOLEtBQUssR0FBRztVQUNqRSxNQUFNLElBQUlsRixLQUFBLENBQU0sVUFBVWtGLEtBQUssa0JBQWtCOztRQUdyRCxJQUFJLENBQUNDLFFBQUEsRUFBVTtVQUNYLElBQUksQ0FBQ1EsS0FBQSxFQUFPLE1BQU0sSUFBSTNGLEtBQUEsQ0FBTSwyQkFBMkI7VUFDdkQsS0FBSyxDQUFBNkUsU0FBQSxDQUFXZSxNQUFBLENBQU9WLEtBQUs7VUFDNUIsT0FBTzs7UUFHWCxJQUFJLENBQUMsS0FBSyxDQUFBTCxTQUFBLENBQVcxRCxHQUFBLENBQUkrRCxLQUFLLEdBQUc7VUFDN0IsT0FBTzs7UUFHWCxNQUFNVyxDQUFBLEdBQUksS0FBSyxDQUFBaEIsU0FBQSxDQUFXeEQsR0FBQSxDQUFJNkQsS0FBSztRQUNuQyxNQUFNWSxRQUFBLEdBQTRCRCxDQUFBLENBQUVFLE1BQUEsQ0FBT0MsSUFBQSxJQUFRQSxJQUFBLENBQUtiLFFBQUEsS0FBYUEsUUFBUTtRQUM3RSxLQUFLLENBQUFOLFNBQUEsQ0FBV25ELEdBQUEsQ0FBSXdELEtBQUEsRUFBT1ksUUFBUTtRQUVuQyxPQUFPO01BQ1g7TUFFQVIsTUFBQSxHQUFTQSxDQUFDSixLQUFBLEVBQWVDLFFBQUEsRUFBNEJRLEtBQUEsS0FDakQsS0FBS0osR0FBQSxDQUFJTCxLQUFBLEVBQU9DLFFBQUEsRUFBVVEsS0FBSzs7Ozs7Ozs7TUFTbkNNLFFBQVFmLEtBQUEsS0FBbUJnQixJQUFBLEVBQVM7UUFDaEMsSUFBSSxLQUFLLENBQUFwQixTQUFBLEVBQVk7VUFDakIsTUFBTSxJQUFJOUUsS0FBQSxDQUFNLDRCQUE0Qjs7UUFHaERrRixLQUFBLEdBQVEsT0FBT0EsS0FBQSxLQUFVLFdBQVc7VUFBQyxRQUFRQTtRQUFLLElBQUlBLEtBQUE7UUFDdEQsSUFBSSxPQUFPQSxLQUFBLEtBQVUsVUFBVSxNQUFNLElBQUlsRixLQUFBLENBQU0sb0JBQW9CO1FBQ25FLElBQUksT0FBT2tGLEtBQUEsQ0FBTWIsSUFBQSxLQUFTLFVBQVUsTUFBTSxJQUFJckUsS0FBQSxDQUFNLG9CQUFvQjtRQUV4RSxJQUFJLEtBQUssQ0FBQXVFLEtBQUEsQ0FBT1EsU0FBQSxJQUFhLENBQUMsS0FBSyxDQUFBUixLQUFBLENBQU9RLFNBQUEsQ0FBVVMsUUFBQSxDQUFTTixLQUFBLENBQU1iLElBQUksR0FBRztVQUN0RSxNQUFNLElBQUlyRSxLQUFBLENBQU0sVUFBVWtGLEtBQUEsQ0FBTWIsSUFBSSxrQkFBa0I7O1FBRzFELElBQUk4QixJQUFBLEdBQU8sQ0FBQyxHQUFHQyxTQUFTO1FBQ3hCRCxJQUFBLENBQUs3RixLQUFBLENBQUs7UUFFVixJQUFJLENBQUMsS0FBSyxDQUFBdUUsU0FBQSxDQUFXMUQsR0FBQSxDQUFJK0QsS0FBQSxDQUFNYixJQUFJLEdBQUc7UUFFdEMsSUFBSW9CLENBQUEsR0FBSSxLQUFLLENBQUFaLFNBQUEsQ0FBV3hELEdBQUEsQ0FBSTZELEtBQUEsQ0FBTWIsSUFBSTtRQUd0Q29CLENBQUEsQ0FBRVksSUFBQSxDQUFLLENBQUNDLENBQUEsRUFBR0MsQ0FBQSxLQUFNQSxDQUFBLENBQUVuQixRQUFBLEdBQVdrQixDQUFBLENBQUVsQixRQUFRO1FBRXhDLElBQUlGLEtBQUEsQ0FBTXNCLEtBQUEsRUFBTztVQUViLE1BQU1QLE9BQUEsR0FBVSxlQUFBQSxDQUFBLEVBQUs7WUFFakIsTUFBTVEsUUFBQSxHQUFXO1lBQ2pCLFNBQVN0QixRQUFBLElBQVlNLENBQUEsRUFBRztjQUNwQmdCLFFBQUEsQ0FBU2YsSUFBQSxDQUFLUCxRQUFBLENBQVNBLFFBQUEsQ0FBUyxHQUFHZ0IsSUFBSSxDQUFDOztZQUc1QyxNQUFNbkUsT0FBQSxDQUFRMEUsR0FBQSxDQUFJRCxRQUFRO1VBRTlCO1VBRUEsT0FBT1IsT0FBQSxDQUFRVSxJQUFBLENBQUssTUFBTSxHQUFHUixJQUFJLEVBQUVTLEtBQUEsQ0FBT3ZFLEdBQUEsSUFBZUMsT0FBQSxDQUFRSixLQUFBLENBQU1HLEdBQUEsQ0FBSUcsS0FBSyxDQUFDO2VBRTlFO1VBQ0gsU0FBUzJDLFFBQUEsSUFBWU0sQ0FBQSxFQUFHO1lBQ3BCTixRQUFBLENBQVNBLFFBQUEsQ0FBUyxHQUFHZ0IsSUFBSTs7O01BR3JDO01BRUFVLFFBQUEsRUFBTztRQUNILEtBQUssQ0FBQS9CLFNBQUEsR0FBYTtRQUNsQixLQUFLLENBQUFELFNBQUEsQ0FBV2lDLEtBQUEsQ0FBSztNQUN6Qjs7SUFDSHBILE9BQUEsQ0FBQVosTUFBQSxHQUFBOEYsT0FBQTs7Ozs7O0lDdEpEOztJQUVBZCxNQUFBLENBQUFDLGNBQUEsQ0FBQXJFLE9BQUE7TUFDQXNFLEtBQUE7SUFDQTs7Ozs7Ozs7Ozs7O0lDRmtCLE1BQU0rQyxVQUFBLEdBQVNySCxPQUFBLENBQUFGLFNBQUEsR0FBRyxJQUFJLGNBQWNtQixHQUFBLENBQUc7TUFDckQ4RCxTQUFTdUMsTUFBQSxFQUFjO1FBQ25CLEtBQUt0RixHQUFBLENBQUlzRixNQUFBLENBQU94RCxVQUFBLEVBQVl3RCxNQUFNO01BQ3RDO01BQ0g7Ozs7Ozs7Ozs7OztJQ0VnQixNQUNYQyxPQUFBLENBQU07TUFDRixDQUFBaEUsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNOLE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2I7TUFFUyxDQUFBTyxVQUFBO01BQ1QsSUFBSUEsV0FBQSxFQUFVO1FBQ2IsT0FBTyxLQUFLLENBQUFBLFVBQUE7TUFDYjtNQUVTLENBQUFULFNBQUE7TUFDVCxJQUFJQSxVQUFBLEVBQVM7UUFDWixPQUFPLEtBQUssQ0FBQUEsU0FBQTtNQUNiO01BRVMsQ0FBQWpCLE9BQUE7TUFDVCxJQUFJQSxRQUFBLEVBQU87UUFDVixPQUFPLEtBQUssQ0FBQUEsT0FBQTtNQUNiO01BRVMsQ0FBQW9CLE9BQUE7TUFDVCxJQUFJQSxRQUFBLEVBQU87UUFDVixPQUFPLEtBQUssQ0FBQUEsT0FBQTtNQUNiO01BRVMsQ0FBQXNCLFdBQUE7TUFDVCxJQUFJQSxZQUFBLEVBQVc7UUFDZCxPQUFPLEtBQUssQ0FBQUEsV0FBQTtNQUNiO01BRUE1RCxZQUFZMkQsS0FBQSxFQUFtQjtRQUM5QixLQUFLLENBQUFmLFVBQUEsR0FBY2UsS0FBQSxDQUFNZixVQUFBO1FBQ3pCLEtBQUssQ0FBQWdCLFdBQUEsR0FBZUQsS0FBQSxDQUFNQyxXQUFBO1FBRTFCLE1BQU12RSxLQUFBLEdBQVFzRSxLQUFBLENBQU1mLFVBQUEsQ0FBV3ZELEtBQUEsQ0FBTSxHQUFHO1FBQ3hDLE1BQU1pSCxLQUFBLEdBQVFqSCxLQUFBLENBQU0sQ0FBQyxFQUFFRixVQUFBLENBQVcsR0FBRyxJQUFJRSxLQUFBLENBQU1LLEtBQUEsQ0FBSyxJQUFLO1FBQ3pELE1BQU0sQ0FBQytELElBQUEsRUFBTXZDLE9BQU8sSUFBSTdCLEtBQUEsQ0FBTUssS0FBQSxDQUFLLEVBQUdMLEtBQUEsQ0FBTSxHQUFHO1FBRS9DLEtBQUssQ0FBQWlELE9BQUEsR0FBV2pELEtBQUEsQ0FBTU0sSUFBQSxDQUFLLEdBQUc7UUFDOUIsS0FBSyxDQUFBMEMsR0FBQSxHQUFPaUUsS0FBQSxHQUFRLEdBQUdBLEtBQUssSUFBSTdDLElBQUksS0FBS0EsSUFBQTtRQUN6QyxLQUFLLENBQUF2QyxPQUFBLEdBQVdBLE9BQUE7UUFDaEIsS0FBSyxDQUFBaUIsU0FBQSxHQUFhLEtBQUssQ0FBQUUsR0FBQSxJQUFRLEtBQUssQ0FBQUMsT0FBQSxHQUFXLElBQUksS0FBSyxDQUFBQSxPQUFRLEtBQUs7TUFDdEU7Ozs7Ozs7O01BU0EsTUFBTWlFLFFBQVFDLE1BQUEsRUFBZ0JDLE1BQUEsRUFBMkI7UUFDeEQsTUFBTTtVQUFFQztRQUFRLElBQUssTUFBTUMsTUFBQSxDQUFPNUUsTUFBQSxDQUFPLDJCQUEyQjtRQUNwRSxPQUFPLE1BQU0yRSxRQUFBLENBQVNILE9BQUEsQ0FBUSxLQUFLLENBQUFsRSxHQUFBLEVBQU0sVUFBVSxLQUFLLENBQUFDLE9BQUEsRUFBVWtFLE1BQUEsRUFBUUMsTUFBTTtNQUNqRjs7SUFDQTNILE9BQUEsQ0FBQU4sTUFBQSxHQUFBNkgsT0FBQTs7Ozs7Ozs7Ozs7O0lDL0RhLE1BQUFPLFFBQUEsU0FBZTdHLEdBQUEsQ0FBZ0I7TUFDekMsQ0FBQXNDLEdBQUE7TUFFQXJDLFlBQVlxQyxHQUFBLEVBQVk7UUFDcEIsTUFBSztRQUNMLEtBQUssQ0FBQUEsR0FBQSxHQUFPQSxHQUFBO01BQ2hCO01BRUF3RSxPQUFPQyxJQUFBLEVBQXNCO1FBQ3pCLEtBQUtaLEtBQUEsQ0FBSztRQUVWWSxJQUFBLEVBQU1DLE9BQUEsQ0FBUSxDQUFDLENBQUM1RSxTQUFBLEVBQVc2RSxVQUFVLE1BQUs7VUFDdEMsSUFBSSxDQUFDQSxVQUFBLEVBQVk7WUFDYixNQUFNLElBQUk1SCxLQUFBLENBQU0sZUFBZStDLFNBQVMsMkJBQTJCLEtBQUssQ0FBQUUsR0FBQSxDQUFLTyxVQUFVLEdBQUc7O1VBRzlGLE1BQU07WUFBQ3FFLG9CQUFBLEVBQXNCQztVQUFXLElBQUlGLFVBQUE7VUFDNUNBLFVBQUEsR0FBYUUsV0FBQSxHQUFjQSxXQUFBLENBQVlDLE9BQUEsQ0FBUTFHLEdBQUEsQ0FBSTBCLFNBQVMsSUFBSTZFLFVBQUE7VUFDaEUsS0FBS2xHLEdBQUEsQ0FBSXFCLFNBQUEsRUFBVzZFLFVBQVU7UUFDbEMsQ0FBQztNQUNMOztJQUNIbEksT0FBQSxDQUFBNEQsT0FBQSxHQUFBa0UsUUFBQTs7Ozs7Ozs7Ozs7O0lDdEJELElBQUFRLE1BQUEsR0FBQXJHLFFBQUE7SUFZYyxNQUFBNkYsUUFBQTtNQUNWLENBQUF2RyxPQUFBO01BQ0EsQ0FBQTBDLE1BQUEsR0FBK0I7TUFDL0IsSUFBSUEsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDaEI7Ozs7O01BTUFzRSxVQUFBOzs7OztNQU1BakgsT0FBQTtNQUVBSixZQUFZWSxRQUFBLEVBQWdCO1FBQ3hCLEtBQUssQ0FBQVAsT0FBQSxHQUFXTyxRQUFBO1FBQ2hCLEtBQUssQ0FBQW1DLE1BQUEsQ0FBUXVFLEdBQUEsR0FBTTtVQUNmN0MsRUFBQSxFQUFJQSxDQUFDSCxLQUFBLEVBQWVDLFFBQUEsS0FBa0IzRCxRQUFBLENBQVF5QixHQUFBLENBQUlpRixHQUFBLENBQUk3QyxFQUFBLENBQUdILEtBQUEsRUFBT0MsUUFBUTtVQUN4RUksR0FBQSxFQUFLQSxDQUFDTCxLQUFBLEVBQWVDLFFBQUEsS0FBa0IzRCxRQUFBLENBQVF5QixHQUFBLENBQUlpRixHQUFBLENBQUkzQyxHQUFBLENBQUlMLEtBQUEsRUFBT0MsUUFBUTs7UUFHOUUsS0FBSyxDQUFBeEIsTUFBQSxDQUFRd0UsWUFBQSxHQUFlLEtBQUssQ0FBQWxILE9BQUEsQ0FBU2dDLEdBQUE7TUFDOUM7OztNQUlBdkIsSUFBSTBHLEdBQUEsRUFBYXBFLEtBQUEsRUFBYTtRQUMxQixLQUFLLENBQUFMLE1BQUEsQ0FBUXlFLEdBQUcsSUFBSXBFLEtBQUE7TUFDeEI7TUFFQXlELE9BQUEsRUFBTTtRQUNGLE1BQU1qRyxRQUFBLEdBQVcxQixFQUFBLElBQWM7VUFDM0IsTUFBTXVJLEtBQUEsR0FBUSxJQUFJTCxNQUFBLENBQUFNLEtBQUEsQ0FBSztVQUN2QkQsS0FBQSxDQUFNNUQsUUFBQSxDQUFTLGtCQUFrQjNFLEVBQUU7VUFDbkMsT0FBTyxLQUFLLENBQUFtQixPQUFBLENBQVNzSCxLQUFBLENBQU16SSxFQUFBLEVBQUl1SSxLQUFLO1FBQ3hDO1FBRUEsS0FBS3JILE9BQUEsR0FBVTtVQUFDQyxPQUFBLEVBQUFPO1FBQU8sQ0FBQztRQUd4QixNQUFNZ0gsUUFBQSxHQUFXLENBQUMsZ0JBQWdCLEtBQUs7UUFDdkMxRSxNQUFBLENBQU8yRSxJQUFBLENBQUssS0FBSyxDQUFBOUUsTUFBTyxFQUFFZ0UsT0FBQSxDQUFRZSxDQUFBLElBQUssQ0FBQ0YsUUFBQSxDQUFTaEQsUUFBQSxDQUFTa0QsQ0FBQyxLQUFLLE9BQU8sS0FBSyxDQUFBL0UsTUFBQSxDQUFRK0UsQ0FBQyxDQUFDO1FBRXRGLEtBQUtULFVBQUEsRUFBWU4sT0FBQSxDQUFRLENBQUM7VUFBQ2dCLEVBQUE7VUFBSUMsSUFBQTtVQUFNdkU7UUFBSSxNQUFLO1VBQzFDLE1BQU1nRSxLQUFBLEdBQVEsSUFBSUwsTUFBQSxDQUFBTSxLQUFBLENBQUs7VUFDdkIsS0FBSyxDQUFBM0UsTUFBQSxDQUFRVSxJQUFJLElBQUksS0FBSyxDQUFBcEQsT0FBQSxDQUFTc0gsS0FBQSxDQUFNSSxFQUFBLEVBQUlOLEtBQUssRUFBRU8sSUFBSTtRQUM1RCxDQUFDO01BQ0w7O0lBQ0hsSixPQUFBLENBQUE0RCxPQUFBLEdBQUFrRSxRQUFBOzs7Ozs7Ozs7Ozs7SUMvREssTUFBT3FCLFNBQUEsQ0FBUztNQUNsQmpJLFlBQVkrSCxFQUFBLEVBQW9CRyxRQUFBLEVBQXdCO1FBQ3BELE9BQU8sSUFBSUMsS0FBQSxDQUFNLE1BQU07VUFDbkJySCxHQUFBLEVBQUtBLENBQUNzSCxJQUFBLEVBQVkzRSxJQUFBLEVBQWNMLEtBQUEsS0FBYztZQUVwQ2dGLElBQUEsQ0FBTTNFLElBQUksSUFBSUwsS0FBQTtZQUdwQixNQUFNaUYsSUFBQSxHQUFPSCxRQUFBLENBQVNiLFVBQUEsRUFBWTFFLElBQUEsQ0FBSyxDQUFDO2NBQUNvRixFQUFBLEVBQUk3SSxFQUFBO2NBQUk4STtZQUFJLE1BQUs7Y0FDdEQsT0FBT0QsRUFBQSxDQUFHN0ksRUFBQSxLQUFPQSxFQUFBLElBQU11RSxJQUFBLEtBQVN1RSxJQUFBO1lBQ3BDLENBQUM7WUFDREssSUFBQSxJQUFRSCxRQUFBLENBQVNwSCxHQUFBLENBQUl1SCxJQUFBLENBQUs1RSxJQUFBLEVBQU1MLEtBQUs7WUFDckNpRixJQUFBLElBQVFILFFBQUEsQ0FBUzlILE9BQUEsR0FBVTtjQUFDaUksSUFBQSxFQUFNQSxJQUFBLENBQUs1RSxJQUFBO2NBQU1MO1lBQUssQ0FBQztZQUVuRCxPQUFPO1VBQ1g7U0FDSDtNQUNMOztJQUNIdEUsT0FBQSxDQUFBbUosU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7SUNuQkQsSUFBQWIsTUFBQSxHQUFBckcsUUFBQTtJQUNBLElBQUF1SCxRQUFBLEdBQUF2SCxRQUFBO0lBU00sTUFBT3dILGNBQUEsQ0FBYztNQUNkLENBQUFsRyxHQUFBO01BRVQsSUFBSXlCLFFBQUEsRUFBTztRQUNQLE9BQU8sS0FBSyxDQUFBekIsR0FBQTtNQUNoQjtNQUVTLENBQUFuRCxFQUFBO01BQ1QsSUFBSUEsR0FBQSxFQUFFO1FBQ0YsT0FBTyxLQUFLLENBQUFBLEVBQUE7TUFDaEI7TUFFQSxDQUFBc0osSUFBQTtNQUNBLElBQUlBLEtBQUEsRUFBSTtRQUNKLE9BQU8sS0FBSyxDQUFBQSxJQUFBO01BQ2hCO01BRVMsQ0FBQW5JLE9BQUE7TUFFQSxDQUFBdkIsT0FBQTtNQUVULENBQUE2QixPQUFBO01BQ0EsQ0FBQThILFFBQUEsR0FBWTtNQUNaLENBQUFDLE9BQUEsR0FBVztNQUNYLElBQUlBLFFBQUEsRUFBTztRQUNQLE9BQU8sS0FBSyxDQUFBQSxPQUFBO01BQ2hCO01BRUEsQ0FBQUMsTUFBQSxHQUFXbEIsS0FBQSxJQUFnQjtRQUN2QixJQUFJLEtBQUssQ0FBQWlCLE9BQUEsRUFBVSxNQUFNLElBQUl0SixLQUFBLENBQU0sb0JBQW9CLEtBQUssQ0FBQUYsRUFBRyxtQkFBbUI7UUFDbEYsSUFBSSxLQUFLLENBQUF1SixRQUFBLEVBQVcsTUFBTSxJQUFJckosS0FBQSxDQUFNLDZDQUE2QyxLQUFLLENBQUFGLEVBQUcsR0FBRztRQUM1RixLQUFLLENBQUF1SixRQUFBLEdBQVk7UUFFakIsTUFBTTdILFFBQUEsR0FBVzFCLEVBQUEsSUFBZSxLQUFLLENBQUFtQixPQUFBLENBQVNzSCxLQUFBLENBQU16SSxFQUFBLEVBQUl1SSxLQUFBLEVBQU8sSUFBSTtRQUVuRXZFLE1BQUEsQ0FBTzJFLElBQUEsQ0FBSyxLQUFLLENBQUEvSSxPQUFRLEVBQUVpSSxPQUFBLENBQVFTLEdBQUEsSUFBTyxPQUFhLEtBQUssQ0FBQTFJLE9BQUEsQ0FBVTBJLEdBQUcsQ0FBQztRQUMxRSxLQUFLLENBQUE3RyxPQUFBLENBQVNDLFFBQUEsRUFBUyxLQUFLLENBQUE5QixPQUFRO1FBQ3BDLEtBQUssQ0FBQTRKLE9BQUEsR0FBVztRQUNoQixLQUFLLENBQUFELFFBQUEsR0FBWTtNQUNyQjtNQUVBcEksUUFBUW9ILEtBQUEsRUFBY3hJLE1BQUEsRUFBc0I7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQXlKLE9BQUEsRUFBVTtVQUNoQnpKLE1BQUEsSUFBVXdJLEtBQUEsQ0FBTTVELFFBQUEsQ0FBUzVFLE1BQUEsQ0FBT0MsRUFBQSxFQUFJLEtBQUssQ0FBQUEsRUFBRztVQUM1QyxLQUFLLENBQUF5SixNQUFBLENBQVFsQixLQUFLO1VBQ2xCQSxLQUFBLENBQU1uSSxHQUFBLENBQUc7O1FBRWIsT0FBTyxLQUFLLENBQUFSLE9BQUE7TUFDaEI7TUFFQW9CLFdBQUEsRUFBVTtRQUNOLElBQUksS0FBSyxDQUFBd0ksT0FBQSxFQUFVO1FBRW5CLE1BQU1qQixLQUFBLEdBQVEsSUFBSUwsTUFBQSxDQUFBTSxLQUFBLENBQUs7UUFDdkJELEtBQUEsQ0FBTTVELFFBQUEsQ0FBUyxrQkFBa0IsS0FBSyxDQUFBM0UsRUFBRztRQUN6QyxLQUFLLENBQUF5SixNQUFBLENBQVFsQixLQUFLO01BQ3RCO01BRUFaLE9BQU9sRyxPQUFBLEVBQTRCNkgsSUFBQSxFQUFZO1FBQzNDLEtBQUssQ0FBQUUsT0FBQSxHQUFXO1FBQ2hCLEtBQUssQ0FBQS9ILE9BQUEsR0FBV0EsT0FBQTtRQUNoQixLQUFLLENBQUE2SCxJQUFBLEdBQVFBLElBQUE7TUFDakI7TUFFQXhJLFlBQVlxQyxHQUFBLEVBQWNuRCxFQUFBLEVBQVlzSixJQUFBLEVBQWM3SCxPQUFBLEVBQTRCQyxRQUFBLEVBQWdCO1FBQzVGLEtBQUssQ0FBQXlCLEdBQUEsR0FBT0EsR0FBQTtRQUNaLEtBQUssQ0FBQW5ELEVBQUEsR0FBTUEsRUFBQTtRQUNYLEtBQUssQ0FBQXNKLElBQUEsR0FBUUEsSUFBQTtRQUNiLEtBQUssQ0FBQTdILE9BQUEsR0FBV0EsT0FBQTtRQUNoQixLQUFLLENBQUFOLE9BQUEsR0FBV08sUUFBQTtRQUNoQixLQUFLLENBQUE5QixPQUFBLEdBQVcsSUFBSXdKLFFBQUEsQ0FBQUwsU0FBQSxDQUFVLE1BQU01RixHQUFBLENBQUl2RCxPQUFPO01BQ25EOztJQUNIQSxPQUFBLENBQUF5SixjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7OztJQ2hGRCxJQUFBSyxHQUFBLEdBQUE3SCxRQUFBO0lBS00sTUFBTzhILGVBQUEsQ0FBZTtNQUNmLENBQUF4RyxHQUFBO01BQ0EsQ0FBQXhDLEdBQUEsR0FBb0MsbUJBQUlFLEdBQUEsQ0FBRztNQUNwRCxDQUFBTSxPQUFBO01BRUFMLFlBQVlxQyxHQUFBLEVBQVk7UUFDcEIsS0FBSyxDQUFBQSxHQUFBLEdBQU9BLEdBQUE7TUFDaEI7TUFFQSxJQUFJeUcsU0FBUzFGLEtBQUEsRUFBYztRQUN2QixLQUFLLENBQUEvQyxPQUFBLEdBQVcrQyxLQUFBO01BQ3BCO01BRUEsQ0FBQVMsUUFBQSxHQUFZa0YsQ0FBQzdKLEVBQUEsRUFBWXNKLElBQUEsRUFBYzdILE9BQUEsS0FBOEI7UUFDakUsSUFBSSxLQUFLLENBQUFkLEdBQUEsQ0FBS1UsR0FBQSxDQUFJckIsRUFBRSxHQUFHLE1BQU0sSUFBSUUsS0FBQSxDQUFNLE9BQU9GLEVBQUUsc0JBQXNCO1FBRXRFLE1BQU02SSxFQUFBLEdBQUssSUFBSWEsR0FBQSxDQUFBTCxjQUFBLENBQWUsS0FBSyxDQUFBbEcsR0FBQSxFQUFNbkQsRUFBQSxFQUFJc0osSUFBQSxFQUFNN0gsT0FBQSxFQUFTLEtBQUssQ0FBQU4sT0FBUTtRQUN6RSxLQUFLLENBQUFSLEdBQUEsQ0FBS2lCLEdBQUEsQ0FBSWlILEVBQUEsQ0FBRzdJLEVBQUEsRUFBSTZJLEVBQUU7TUFDM0I7TUFFQWxFLFNBQVMxRCxJQUFBLEVBQWU7UUFDcEJBLElBQUEsQ0FBSTRHLE9BQUEsQ0FBUSxDQUFDO1VBQUNwRyxPQUFBO1VBQVM2SDtRQUFJLEdBQUd0SixFQUFBLEtBQU8sS0FBSyxDQUFBMkUsUUFBQSxDQUFVM0UsRUFBQSxFQUFJc0osSUFBQSxFQUFNN0gsT0FBTyxDQUFDO01BQzFFO01BRUFOLFFBQVFuQixFQUFBLEVBQVl1SSxLQUFBLEVBQWN4SSxNQUFBLEVBQXNCO1FBQ3BELE1BQU1xQixPQUFBLElBQVUsTUFBSztVQUNqQixJQUFJLEtBQUssQ0FBQVQsR0FBQSxDQUFLVSxHQUFBLENBQUlyQixFQUFFLEdBQUcsT0FBT0EsRUFBQTtVQUM5QixPQUFPQSxFQUFBLENBQUdzQixRQUFBLENBQVMsR0FBRyxJQUFJLEdBQUd0QixFQUFFLFVBQVUsR0FBR0EsRUFBRTtRQUNsRCxHQUFFO1FBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQVcsR0FBQSxDQUFLVSxHQUFBLENBQUlELE9BQU0sR0FBRztVQUN4QixNQUFNLElBQUlsQixLQUFBLENBQU0sb0JBQW9CRixFQUFFLGFBQWE7O1FBR3ZELE1BQU02SSxFQUFBLEdBQUssS0FBSyxDQUFBbEksR0FBQSxDQUFLWSxHQUFBLENBQUlILE9BQU07UUFDL0IsT0FBT3lILEVBQUEsQ0FBRzFILE9BQUEsQ0FBUW9ILEtBQUEsRUFBT3hJLE1BQU07TUFDbkM7TUFFQWlCLFdBQUEsRUFBVTtRQUNOLEtBQUssQ0FBQUwsR0FBQSxDQUFLa0gsT0FBQSxDQUFRZ0IsRUFBQSxJQUFNQSxFQUFBLENBQUc3SCxVQUFBLENBQVUsQ0FBRTtNQUMzQztNQUVBMkcsT0FBTzFHLElBQUEsRUFBZTtRQUNsQkEsSUFBQSxDQUFJNEcsT0FBQSxDQUFRLENBQUM7VUFBQ3BHLE9BQUE7VUFBUzZIO1FBQUksR0FBR3RKLEVBQUEsS0FBTTtVQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFBVyxHQUFBLENBQUtVLEdBQUEsQ0FBSXJCLEVBQUUsR0FBRztZQUNwQixLQUFLLENBQUEyRSxRQUFBLENBQVUzRSxFQUFBLEVBQUlzSixJQUFBLEVBQU03SCxPQUFPO1lBQ2hDOztVQUdKLE1BQU1vSCxFQUFBLEdBQUssS0FBSyxDQUFBbEksR0FBQSxDQUFLWSxHQUFBLENBQUl2QixFQUFFO1VBQzNCLElBQUk2SSxFQUFBLENBQUdTLElBQUEsS0FBU0EsSUFBQSxFQUFNO1VBQ3RCVCxFQUFBLENBQUdsQixNQUFBLENBQU9sRyxPQUFBLEVBQVM2SCxJQUFJO1VBQ3ZCLEtBQUssQ0FBQW5HLEdBQUEsQ0FBS2lGLEdBQUEsQ0FBSWpDLE9BQUEsQ0FBUSxHQUFHbkcsRUFBRSxTQUFTO1FBQ3hDLENBQUM7TUFDTDs7SUFDSEosT0FBQSxDQUFBK0osZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7SUM3REQsSUFBQUcsS0FBQSxHQUFBakksUUFBQTtJQUlNLE1BQU9rSSxPQUFBLENBQU87TUFDVixDQUFBNUcsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNOLE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2I7TUFFQXJDLFlBQVlxQyxHQUFBLEVBQVk7UUFDdkIsS0FBSyxDQUFBQSxHQUFBLEdBQU9BLEdBQUE7TUFDYjs7Ozs7Ozs7O01BVUFzRixNQUFNeEYsU0FBQSxFQUFtQnNGLEtBQUEsRUFBY00sRUFBQSxFQUFtQjtRQUN6RCxJQUFJNUYsU0FBQSxDQUFVaEQsVUFBQSxDQUFXLEdBQUcsR0FBRztVQUU5QmdELFNBQUEsR0FBWTRGLEVBQUEsSUFBSyxHQUFBaUIsS0FBQSxDQUFBaEssT0FBQSxFQUFRK0ksRUFBQSxDQUFHN0ksRUFBQSxFQUFJaUQsU0FBUyxJQUFJQSxTQUFBO1VBQzdDLE9BQU8sS0FBSyxDQUFBRSxHQUFBLENBQUt4QyxHQUFBLENBQUlRLE9BQUEsQ0FBUThCLFNBQUEsRUFBV3NGLEtBQUEsRUFBT00sRUFBRTs7UUFPbEQsSUFBSTVGLFNBQUEsS0FBYyxrQkFBa0I7VUFDbkMsTUFBTTtZQUFFaUU7VUFBTSxJQUFLLEtBQUssQ0FBQS9ELEdBQUE7VUFDeEIsT0FBTztZQUFFeEQsTUFBQSxFQUFRdUgsTUFBQSxDQUFPdkgsTUFBQTtZQUFRdUgsTUFBQTtZQUFRL0QsR0FBQSxFQUFLLEtBQUssQ0FBQUE7VUFBSTs7UUFJdkQsSUFBSUYsU0FBQSxLQUFjLDRCQUE0QjtVQUM3QyxNQUFNO1lBQUVsRSxNQUFBLEVBQUFzRjtVQUFNLElBQUt4QyxRQUFBLENBQVEsaUJBQWlCO1VBQzVDLE1BQU07WUFBRW5DLFNBQUEsRUFBQXVIO1VBQVMsSUFBS3BGLFFBQUEsQ0FBUSxvQkFBb0I7VUFDbEQsT0FBTztZQUFFOUMsTUFBQSxFQUFBc0YsT0FBQTtZQUFRM0UsU0FBQSxFQUFBdUg7VUFBUzs7UUFHM0IsTUFBTTtVQUFFbEU7UUFBWSxJQUFLLEtBQUssQ0FBQUksR0FBQTtRQUM5QixJQUFJSixZQUFBLENBQWExQixHQUFBLENBQUk0QixTQUFTLEdBQUc7VUFLaEMsTUFBTTtZQUFFb0YsWUFBQSxFQUFjbEY7VUFBRyxJQUFLSixZQUFBLENBQWF4QixHQUFBLENBQUkwQixTQUFTO1VBQ3hELE9BQU9FLEdBQUEsS0FBUSxZQUFZLENBQUNBLEdBQUEsQ0FBSVMsV0FBQSxJQUFlVCxHQUFBLENBQUluQyxVQUFBLENBQVU7VUFDN0QsT0FBTytCLFlBQUEsQ0FBYXhCLEdBQUEsQ0FBSTBCLFNBQVM7O1FBR2xDLE1BQU0wRixJQUFBLEdBQU9xQixJQUFBLENBQUtDLFNBQUEsQ0FBVSxDQUFDLEdBQUdsSCxZQUFBLENBQWE0RixJQUFBLENBQUksQ0FBRSxDQUFDO1FBQ3BELE1BQU0sSUFBSXpJLEtBQUEsQ0FBTSxXQUFXK0MsU0FBUyx3Q0FBd0MwRixJQUFJLEVBQUU7TUFDbkY7O0lBQ0EvSSxPQUFBLENBQUFtSyxPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7OztJQ3ZESyxNQUFPdkIsS0FBQSxTQUFjdEQsS0FBQSxDQUFtQjtNQUMxQzdELEdBQUEsR0FBT3JCLEVBQUEsSUFBZSxLQUFLeUQsSUFBQSxDQUFLeUcsRUFBQSxJQUFNQSxFQUFBLENBQUdsSyxFQUFBLEtBQU9BLEVBQUU7TUFFbEQyRSxTQUFTNUUsTUFBQSxFQUFnQkMsRUFBQSxFQUFVO1FBRS9CLElBQUksS0FBS3FCLEdBQUEsQ0FBSXJCLEVBQUUsR0FBRztVQUNkLElBQUltSyxNQUFBLEdBQVM7VUFDYixLQUFLdEMsT0FBQSxDQUFRLENBQUM7WUFBQzdILEVBQUEsRUFBQW9LLEdBQUE7WUFBSXJLLE1BQUEsRUFBQXNLO1VBQU0sTUFBSztZQUMxQixNQUFNQyxDQUFBLEdBQUksQ0FBQyxrQkFBa0IsZ0JBQWdCLEVBQUU1RSxRQUFBLENBQVMyRSxPQUFNLElBQzFELGdDQUNFLFNBQVNBLE9BQU07WUFDckJGLE1BQUEsSUFBVSxJQUFLRyxDQUFDLEtBQUtGLEdBQUU7O1VBQzNCLENBQUM7VUFDREQsTUFBQSxJQUFVLDJCQUE0Qm5LLEVBQUU7O1VBRXhDLE1BQU0sSUFBSUUsS0FBQSxDQUFNO21CQUNRSCxNQUFNLHlFQUF5RUMsRUFBRTs7RUFDdEVtSyxNQUFNLEVBQUU7O1FBRy9DLEtBQUt2RSxJQUFBLENBQUs7VUFBQzVGLEVBQUE7VUFBSUQ7UUFBTSxDQUFDO01BQzFCOztJQUNISCxPQUFBLENBQUE0SSxLQUFBLEdBQUFBLEtBQUE7Ozs7Ozs7Ozs7OztJQzVCRCxJQUFBK0IsSUFBQSxHQUFBMUksUUFBQTtJQUNBLElBQUErSCxRQUFBLEdBQUEvSCxRQUFBO0lBQ0EsSUFBQXVILFFBQUEsR0FBQXZILFFBQUE7SUFDQSxJQUFBMkksYUFBQSxHQUFBM0ksUUFBQTtJQUNBLElBQUF3QixVQUFBLEdBQUF4QixRQUFBO0lBQ0EsSUFBQTRJLE9BQUEsR0FBQTVJLFFBQUE7SUFFaUIsTUFDWDZJLFFBQUEsQ0FBTztNQUNBLENBQUF4RCxNQUFBO01BQ1QsSUFBSUEsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDaEI7TUFFUyxDQUFBckMsUUFBQTtNQUNULElBQUlBLFNBQUEsRUFBUTtRQUNSLE9BQU8sS0FBSyxDQUFBQSxRQUFBO01BQ2hCO01BRVMsQ0FBQW5CLFVBQUE7TUFDVCxJQUFJQSxXQUFBLEVBQVU7UUFDVixPQUFPLEtBQUssQ0FBQUEsVUFBQTtNQUNoQjtNQUVTLENBQUFULFNBQUE7TUFDVCxJQUFJQSxVQUFBLEVBQVM7UUFDVCxPQUFPLEtBQUssQ0FBQUEsU0FBQTtNQUNoQjtNQUVTLENBQUE5QixPQUFBO01BRUEsQ0FBQVIsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNILE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2hCO01BRVMsQ0FBQWYsT0FBQTtNQUNULElBQUlBLFFBQUEsRUFBTztRQUNQLE9BQU8sS0FBSyxDQUFBQSxPQUFBO01BQ2hCOztNQUdTLENBQUFtRCxZQUFBLEdBQWdCLElBQUl5SCxhQUFBLENBQUFoSCxPQUFBLENBQWEsSUFBSTtNQUM5QyxJQUFJVCxhQUFBLEVBQVk7UUFDWixPQUFPLEtBQUssQ0FBQUEsWUFBQTtNQUNoQjtNQUVTLENBQUFxRixHQUFBLEdBQU8sSUFBSXFDLE9BQUEsQ0FBQXpMLE1BQUEsQ0FBTTtNQUMxQixJQUFJb0osSUFBQSxFQUFHO1FBQ0gsT0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDaEI7TUFFQXRILFlBQVlvRyxNQUFBLEVBQWdCckMsUUFBQSxFQUFnQjtRQUN4QyxLQUFLLENBQUFxQyxNQUFBLEdBQVVBLE1BQUE7UUFDZixLQUFLLENBQUFyQyxRQUFBLEdBQVlBLFFBQUEsR0FBV0EsUUFBQSxHQUFXO1FBRXZDLEtBQUssQ0FBQW5CLFVBQUEsR0FBY21CLFFBQUEsR0FBVyxHQUFHcUMsTUFBQSxDQUFPeEQsVUFBVSxJQUFJbUIsUUFBUSxLQUFLcUMsTUFBQSxDQUFPeEQsVUFBQTtRQUMxRSxLQUFLLENBQUFULFNBQUEsR0FBYTRCLFFBQUEsR0FBVyxHQUFHcUMsTUFBQSxDQUFPakUsU0FBUyxJQUFJNEIsUUFBUSxLQUFLcUMsTUFBQSxDQUFPakUsU0FBQTtRQUV4RSxLQUFLLENBQUF0QyxHQUFBLEdBQU8sSUFBSTRKLElBQUEsQ0FBQVosZUFBQSxDQUFnQixJQUFJO1FBQ3BDLEtBQUssQ0FBQXhJLE9BQUEsR0FBVyxJQUFJeUksUUFBQSxDQUFBRyxPQUFBLENBQVEsSUFBSTtRQUNoQyxLQUFLLENBQUFwSixHQUFBLENBQUtpSixRQUFBLEdBQVcsS0FBSyxDQUFBekksT0FBQTtRQUMxQixLQUFLLENBQUF2QixPQUFBLEdBQVcsSUFBSXdKLFFBQUEsQ0FBQTVGLE9BQUEsQ0FBUSxLQUFLLENBQUFyQyxPQUFRO1FBRXpDa0MsVUFBQSxDQUFBRyxPQUFBLENBQVVtQixRQUFBLENBQVMsSUFBSTtNQUMzQjtNQUVBLENBQUFmLFdBQUEsR0FBZTtNQUNmLElBQUlBLFlBQUEsRUFBVztRQUNYLE9BQU8sS0FBSyxDQUFBQSxXQUFBO01BQ2hCO01BRUE1QyxXQUFXQyxJQUFBLEVBQWdCO1FBQ3ZCLElBQUksS0FBSyxDQUFBMkMsV0FBQSxFQUFjLE1BQU0sSUFBSTFELEtBQUEsQ0FBTSw2QkFBNkI7UUFDcEUsS0FBSyxDQUFBMEQsV0FBQSxHQUFlO1FBQ3BCM0MsSUFBQSxJQUFPLEtBQUssQ0FBQU4sR0FBQSxDQUFLZ0UsUUFBQSxDQUFTMUQsSUFBRztRQUM3QixLQUFLckIsT0FBQSxDQUFRK0gsTUFBQSxDQUFNO1FBQ25CLEtBQUssQ0FBQWhILEdBQUEsQ0FBS0ssVUFBQSxDQUFVO01BQ3hCO01BRUEyRyxPQUFPMUcsSUFBQSxFQUFlO1FBQ2xCLEtBQUssQ0FBQU4sR0FBQSxDQUFLZ0gsTUFBQSxDQUFPMUcsSUFBRztRQUNwQixLQUFLckIsT0FBQSxDQUFRK0gsTUFBQSxDQUFNO1FBQ25CLEtBQUssQ0FBQWhILEdBQUEsQ0FBS0ssVUFBQSxDQUFVO1FBQ3BCLEtBQUssQ0FBQW9ILEdBQUEsQ0FBS2pDLE9BQUEsQ0FBUSxRQUFRO01BQzlCOztJQUNIdkcsT0FBQSxDQUFBTCxPQUFBLEdBQUFtTCxRQUFBOzs7Ozs7Ozs7Ozs7cUNDckZjLElBQUksY0FBYzdKLEdBQUEsQ0FBRztNQUNoQzhELFNBQVN4QixHQUFBLEVBQVk7UUFDakIsS0FBS3ZCLEdBQUEsQ0FBSXVCLEdBQUEsQ0FBSU8sVUFBQSxFQUFZUCxHQUFHO01BQ2hDO01BQ0giLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9