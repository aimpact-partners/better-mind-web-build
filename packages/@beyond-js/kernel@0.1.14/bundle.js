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

// .beyond/uimport/@beyond-js/kernel/bundle.0.1.14.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUuMC4xLjE0LmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL2Jhc2UvaW5kZXgudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvYmltcG9ydC9iaW1wb3J0LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL2JpbXBvcnQvYnJlcXVpcmUudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvYmltcG9ydC9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9yZXF1aXJlanMudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvYnVuZGxlLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL2V2ZW50cy9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS90eXBlcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9pbnN0YW5jZXMudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvbW9kdWxlL2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvZGVwZW5kZW5jaWVzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvZXhwb3J0cy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9leHBvcnRzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL2ltLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL3JlcXVpcmUvaW5kZXgudHMiLCJmaWxlOi8vL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvcmVxdWlyZS90cmFjZS50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbImJ1bmRsZV8wXzFfMTRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQnVuZGxlIiwiRXZlbnRzIiwiSUJ1bmRsZVNwZWNzIiwiSUV4cG9ydHNEZXNjcmlwdG9yIiwiSU1DcmVhdG9ycyIsIklNU3BlY3MiLCJMaXN0ZW5lckZ1bmN0aW9uIiwiTW9kdWxlIiwiUGFja2FnZSIsImJpbXBvcnQiLCJicmVxdWlyZSIsImluc3RhbmNlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJyZXNvbHZlIiwic291cmNlIiwiaWQiLCJzdGFydHNXaXRoIiwiRXJyb3IiLCJzcGxpdCIsInBvcCIsInRhcmdldCIsInNsaWNlIiwibGVuZ3RoIiwic2hpZnQiLCJqb2luIiwiQmV5b25kUGFja2FnZSIsImltcyIsImNhY2hlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZXhwb3J0czIiLCJpbml0aWFsaXNlIiwiaW1zMiIsInByb2Nlc3MiLCJyZXF1aXJlIiwibW9kdWxlMiIsImhhcyIsImVuZHNXaXRoIiwiZ2V0IiwiZm4iLCJjcmVhdG9yIiwicmVxdWlyZTMiLCJyZXF1aXJlZCIsInNldCIsInJlcXVpcmUyIiwiYmltcG9ydDIiLCJyZXNvdXJjZSIsInZlcnNpb24iLCJtb2RlIiwiUHJvbWlzZSIsInJlamVjdCIsImVycm9yIiwiYW1kX3JlcXVpcmUiLCJyZXR1cm5lZCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsImdsb2JhbFRoaXMiLCJTeXN0ZW0iLCJpbXBvcnQiLCJhcHBEZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmNpZXMiLCJfX2FwcF9wYWNrYWdlIiwic3BlY2lmaWVyIiwidGVzdCIsInBrZyIsInN1YnBhdGgiLCJfaW5zdGFuY2VzIiwiYnJlcXVpcmUyIiwiZm91bmQiLCJkZWZhdWx0IiwiZmluZCIsInZzcGVjaWZpZXIiLCJzcGxpdDIiLCJpbml0aWFsaXNlZCIsInZhbHVlcyIsIl9iaW1wb3J0IiwiX2JyZXF1aXJlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9wYWNrYWdlIiwiX21vZHVsZSIsIkJ1bmRsZTIiLCJ0eXBlIiwibmFtZSIsInVyaSIsInNwZWNzIiwibXVsdGlidW5kbGUiLCJyZWdpc3RlciIsInBhY2thZ2UiLCJsYW5ndWFnZSIsIkV2ZW50czIiLCJsaXN0ZW5lcnMiLCJkZXN0cm95ZWQiLCJzdXBwb3J0ZWQiLCJBcnJheSIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsInB1c2giLCJmb3JjZSIsImRlbGV0ZSIsImUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJ0cmlnZ2VyIiwicmVzdCIsImFyZ3MiLCJhcmd1bWVudHMiLCJzb3J0IiwiYSIsImIiLCJhc3luYyIsInByb21pc2VzIiwiYWxsIiwiY2FsbCIsImNhdGNoIiwiZGVzdHJveSIsImNsZWFyIiwiaW5zdGFuY2VzMiIsImJ1bmRsZSIsIk1vZHVsZTIiLCJzY29wZSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJwYXJhbXMiLCJiYWNrZW5kcyIsImJleW9uZCIsIl9kZWZhdWx0IiwidXBkYXRlIiwiZGVwcyIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwiX19iZXlvbmRfdHJhbnN2ZXJzYWwiLCJ0cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJfdHJhY2UiLCJkZXNjcmlwdG9yIiwiaG1yIiwiX19iZXlvbmRfcGtnIiwia2V5IiwidHJhY2UiLCJUcmFjZSIsInNvbHZlIiwicmVzZXJ2ZWQiLCJrZXlzIiwicCIsImltIiwiZnJvbSIsIklNRXhwb3J0cyIsImJleHBvcnRzIiwiUHJveHkiLCJzZWxmIiwicHJvcCIsIl9leHBvcnRzIiwiSW50ZXJuYWxNb2R1bGUiLCJoYXNoIiwiY3JlYXRpbmciLCJjcmVhdGVkIiwiY3JlYXRlIiwiX2ltIiwiSW50ZXJuYWxNb2R1bGVzIiwiX3JlcXVpcmUiLCIjcmVnaXN0ZXIiLCJfYmFzZSIsIlJlcXVpcmUiLCJKU09OIiwic3RyaW5naWZ5IiwicnQiLCJ0cmFjZWQiLCJpZDIiLCJzb3VyY2UyIiwicyIsIl9pbXMiLCJfZGVwZW5kZW5jaWVzIiwiX2V2ZW50cyIsIlBhY2thZ2UyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxRQUFBLENBQUFELHFCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBaEIscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDU00sU0FBVWlCLFFBQVFDLE1BQUEsRUFBZ0JDLEVBQUEsRUFBVTtNQUM5QyxJQUFJLENBQUNBLEVBQUEsQ0FBR0MsVUFBQSxDQUFXLEdBQUcsR0FBRyxNQUFNLElBQUlDLEtBQUEsQ0FBTSwwQ0FBMENGLEVBQUUsR0FBRztNQU94RixNQUFNRyxLQUFBLEdBQWU7TUFDckJBLEtBQUEsQ0FBTUosTUFBQSxHQUFTQSxNQUFBLENBQU9JLEtBQUEsQ0FBTSxHQUFHO01BQy9CQSxLQUFBLENBQU1KLE1BQUEsQ0FBT0ssR0FBQSxD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S0FBS3FDLE1BQUEsQ0FBT2pFLFNBQUE7UUFFeEUsS0FBSyxDQUFBdEMsR0FBQSxHQUFPLElBQUk0SixJQUFBLENBQUFaLGVBQUEsQ0FBZ0IsSUFBSTtRQUNwQyxLQUFLLENBQUF4SSxPQUFBLEdBQVcsSUFBSXlJLFFBQUEsQ0FBQUcsT0FBQSxDQUFRLElBQUk7UUFDaEMsS0FBSyxDQUFBcEosR0FBQSxDQUFLaUosUUFBQSxHQUFXLEtBQUssQ0FBQXpJLE9BQUE7UUFDMUIsS0FBSyxDQUFBdkIsT0FBQSxHQUFXLElBQUl3SixRQUFBLENBQUE1RixPQUFBLENBQVEsS0FBSyxDQUFBckMsT0FBUTtRQUV6Q2tDLFVBQUEsQ0FBQUcsT0FBQSxDQUFVbUIsUUFBQSxDQUFTLElBQUk7TUFDM0I7TUFFQSxDQUFBZixXQUFBLEdBQWU7TUFDZixJQUFJQSxZQUFBLEVBQVc7UUFDWCxPQUFPLEtBQUssQ0FBQUEsV0FBQTtNQUNoQjtNQUVBNUMsV0FBV0MsSUFBQSxFQUFnQjtRQUN2QixJQUFJLEtBQUssQ0FBQTJDLFdBQUEsRUFBYyxNQUFNLElBQUkxRCxLQUFBLENBQU0sNkJBQTZCO1FBQ3BFLEtBQUssQ0FBQTBELFdBQUEsR0FBZTtRQUNwQjNDLElBQUEsSUFBTyxLQUFLLENBQUFOLEdBQUEsQ0FBS2dFLFFBQUEsQ0FBUzFELElBQUc7UUFDN0IsS0FBS3JCLE9BQUEsQ0FBUStILE1BQUEsQ0FBTTtRQUNuQixLQUFLLENBQUFoSCxHQUFBLENBQUtLLFVBQUEsQ0FBVTtNQUN4QjtNQUVBMkcsT0FBTzFHLElBQUEsRUFBZTtRQUNsQixLQUFLLENBQUFOLEdBQUEsQ0FBS2dILE1BQUEsQ0FBTzFHLElBQUc7UUFDcEIsS0FBS3JCLE9BQUEsQ0FBUStILE1BQUEsQ0FBTTtRQUNuQixLQUFLLENBQUFoSCxHQUFBLENBQUtLLFVBQUEsQ0FBVTtRQUNwQixLQUFLLENBQUFvSCxHQUFBLENBQUtqQyxPQUFBLENBQVEsUUFBUTtNQUM5Qjs7SUFDSHZHLE9BQUEsQ0FBQUwsT0FBQSxHQUFBbUwsUUFBQTs7Ozs7Ozs7Ozs7O3FDQ3JGYyxJQUFJLGNBQWM3SixHQUFBLENBQUc7TUFDaEM4RCxTQUFTeEIsR0FBQSxFQUFZO1FBQ2pCLEtBQUt2QixHQUFBLENBQUl1QixHQUFBLENBQUlPLFVBQUEsRUFBWVAsR0FBRztNQUNoQztNQUNIIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==