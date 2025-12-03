System.register(["@beyond-js/kernel@0.1.14/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep)],
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

// .beyond/uimport/temp/@beyond-js/kernel/core.0.1.14.js
var core_0_1_14_exports = {};
__export(core_0_1_14_exports, {
  CancellationToken: () => CancellationToken,
  Events: () => Events,
  Languages: () => Languages,
  ListenerFunction: () => ListenerFunction,
  PendingPromise: () => PendingPromise,
  SingleCall: () => SingleCall,
  __beyond_pkg: () => __beyond_pkg,
  beyond: () => beyond,
  hmr: () => hmr,
  languages: () => languages
});
module.exports = __toCommonJS(core_0_1_14_exports);

// node_modules/@beyond-js/kernel/core/core.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.13/core"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./beyond", {
  hash: 959081709,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.beyond = exports.Beyond = void 0;
    var _languages = require2("./languages");
    class Beyond {
      /**
       * @deprecated
       * Use import {languages} from '@beyond-js/kernel/core';
       */
      get languages() {
        return _languages.languages;
      }
      /**
       * @deprecated
       * Use bimport instead of beyond.import
       *
       * @param {string} resource
       * @param {number} version
       * @return {Promise<*>}
       */
      async import(resource, version) {
        return await bimport(resource, version);
      }
    }
    exports.Beyond = Beyond;
    const beyond2 = exports.beyond = new Beyond();
    globalThis.beyond = beyond2;
  }
});
ims.set("./languages/index", {
  hash: 2966511149,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.languages = exports.Languages = void 0;
    var _events = require2("../utils/events/events");
    class Languages2 extends _events.Events {
      #project;
      #specs;
      #storage = typeof localStorage === "object" ? localStorage : void 0;
      #supported;
      get supported() {
        return this.#supported;
      }
      get default() {
        return this.#specs?.default;
      }
      #current;
      get current() {
        return this.#current;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #fetched = false;
      get fetched() {
        return this.#fetched;
      }
      constructor(project) {
        super();
        this.#project = project;
        bimport(`${project}/config`).then(({
          default: config
        }) => {
          this.#setup(config.languages);
          this.#fetched = true;
          this.#resolve();
        });
      }
      #configure(value) {
        if (this.#current === value) return true;
        if (typeof value !== "string" || value.length !== 2) {
          console.warn(`Configured language "${value}" is invalid`);
          return false;
        }
        if (value && !this.#supported.has(value)) {
          console.log(`Language "${value}" is not supported`);
          return false;
        }
        const previous = this.#current;
        this.#current = value;
        previous && this.trigger("change");
        return true;
      }
      set current(value) {
        if (!this.#configure(value)) return;
        this.#storage?.setItem("__beyond_language", value);
      }
      #setup(specs) {
        if (specs.default && typeof specs.default !== "string" || specs.default.length !== 2) {
          console.log(`Default language "${specs.default}" is invalid`);
          specs.default = void 0;
        }
        const def = specs.default ? specs.default : "en";
        specs.supported = specs.supported instanceof Array ? specs.supported : [def];
        !specs.supported.length && specs.supported.push(def);
        this.#supported = new Set(specs.supported);
        specs.default = specs.default ? specs.default : [...this.#supported][0];
        if (!this.#supported.has(specs.default)) {
          console.warn(`Default language "${specs.default}" is not supported by current application`);
          specs.default = [...this.#supported][0];
        }
        this.#specs = specs;
        const configured = this.#storage?.getItem("__beyond_language");
        if (configured && this.#configure(configured)) return;
        const device = typeof location === "object" ? navigator.language.split("-")[0] : void 0;
        if (device && this.#configure(device)) return;
        this.#configure(specs.default);
      }
    }
    exports.Languages = Languages2;
    const languages2 = exports.languages = new Languages2(globalThis.__app_package.specifier);
  }
});
ims.set("./utils/events/events", {
  hash: 3993267980,
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
    globalThis.Events = Events2;
  }
});
ims.set("./utils/events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./utils/execution-control/cancellation-token/cancellation-token", {
  hash: 4200323006,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CancellationToken = void 0;
    class CancellationToken2 {
      #id = 0;
      get current() {
        return this.#id;
      }
      reset = () => ++this.#id;
      check = id => id === this.#id;
    }
    exports.CancellationToken = CancellationToken2;
  }
});
ims.set("./utils/execution-control/single-call/single-call", {
  hash: 783668127,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SingleCall = SingleCall2;
    function SingleCall2(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      let promises = /* @__PURE__ */new WeakMap();
      descriptor.value = function (...args) {
        if (promises.has(this)) return promises.get(this);
        const promise = originalMethod.apply(this, args);
        promises.set(this, promise);
        const clean = () => promises.delete(this);
        promise.then(clean).catch(clean);
        return promise;
      };
      return descriptor;
    }
  }
});
ims.set("./utils/pending-promise/pending-promise", {
  hash: 3255928960,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PendingPromise = void 0;
    class PendingPromise2 extends Promise {
      resolve;
      reject;
      constructor(executor) {
        if (executor instanceof Function) {
          super(executor);
          return;
        }
        let resolve = void 0;
        let reject = void 0;
        super((a, b) => {
          resolve = a;
          reject = b;
        });
        this.resolve = resolve;
        this.reject = reject;
      }
    }
    exports.PendingPromise = PendingPromise2;
    typeof globalThis.process !== "object" && (window.PendingPromise = PendingPromise2);
  }
});
__pkg.exports.descriptor = [{
  "im": "./beyond",
  "from": "beyond",
  "name": "beyond"
}, {
  "im": "./languages/index",
  "from": "Languages",
  "name": "Languages"
}, {
  "im": "./languages/index",
  "from": "languages",
  "name": "languages"
}, {
  "im": "./utils/events/events",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./utils/events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./utils/execution-control/cancellation-token/cancellation-token",
  "from": "CancellationToken",
  "name": "CancellationToken"
}, {
  "im": "./utils/execution-control/single-call/single-call",
  "from": "SingleCall",
  "name": "SingleCall"
}, {
  "im": "./utils/pending-promise/pending-promise",
  "from": "PendingPromise",
  "name": "PendingPromise"
}];
var beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "beyond") && (beyond = require2 ? require2("./beyond").beyond : value);
  (require2 || prop === "Languages") && (Languages = require2 ? require2("./languages/index").Languages : value);
  (require2 || prop === "languages") && (languages = require2 ? require2("./languages/index").languages : value);
  (require2 || prop === "Events") && (Events = require2 ? require2("./utils/events/events").Events : value);
  (require2 || prop === "ListenerFunction") && (ListenerFunction = require2 ? require2("./utils/events/types").ListenerFunction : value);
  (require2 || prop === "CancellationToken") && (CancellationToken = require2 ? require2("./utils/execution-control/cancellation-token/cancellation-token").CancellationToken : value);
  (require2 || prop === "SingleCall") && (SingleCall = require2 ? require2("./utils/execution-control/single-call/single-call").SingleCall : value);
  (require2 || prop === "PendingPromise") && (PendingPromise = require2 ? require2("./utils/pending-promise/pending-promise").PendingPromise : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL2NvcmUuMC4xLjE0LmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvY29yZS9iZXlvbmQudHMiLCJmaWxlOi8vL19fc291cmNlcy9jb3JlL2xhbmd1YWdlcy9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2NvcmUvdXRpbHMvZXZlbnRzL2V2ZW50cy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2NvcmUvdHlwZXMudHMiLCJmaWxlOi8vL19fc291cmNlcy9jb3JlL3V0aWxzL2V4ZWN1dGlvbi1jb250cm9sL2NhbmNlbGxhdGlvbi10b2tlbi9jYW5jZWxsYXRpb24tdG9rZW4udHMiLCJmaWxlOi8vL19fc291cmNlcy9jb3JlL3V0aWxzL2V4ZWN1dGlvbi1jb250cm9sL3NpbmdsZS1jYWxsL3NpbmdsZS1jYWxsLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvY29yZS91dGlscy9wZW5kaW5nLXByb21pc2UvcGVuZGluZy1wcm9taXNlLnRzIl0sIm5hbWVzIjpbImNvcmVfMF8xXzE0X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNhbmNlbGxhdGlvblRva2VuIiwiRXZlbnRzIiwiTGFuZ3VhZ2VzIiwiTGlzdGVuZXJGdW5jdGlvbiIsIlBlbmRpbmdQcm9taXNlIiwiU2luZ2xlQ2FsbCIsIl9fYmV5b25kX3BrZyIsImJleW9uZCIsImhtciIsImxhbmd1YWdlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfbGFuZ3VhZ2VzIiwicmVxdWlyZTIiLCJCZXlvbmQiLCJpbXBvcnQiLCJyZXNvdXJjZSIsInZlcnNpb24iLCJiaW1wb3J0IiwiYmV5b25kMiIsImdsb2JhbFRoaXMiLCJfZXZlbnRzIiwiTGFuZ3VhZ2VzMiIsInByb2plY3QiLCJzcGVjcyIsInN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzdXBwb3J0ZWQiLCJkZWZhdWx0IiwiY3VycmVudCIsInJlc29sdmUiLCJyZWFkeSIsIlByb21pc2UiLCJmZXRjaGVkIiwiY29uc3RydWN0b3IiLCJ0aGVuIiwiY29uZmlnIiwic2V0dXAiLCJjb25maWd1cmUiLCIjY29uZmlndXJlIiwidmFsdWUiLCJsZW5ndGgiLCJjb25zb2xlIiwid2FybiIsImhhcyIsImxvZyIsInByZXZpb3VzIiwidHJpZ2dlciIsInNldEl0ZW0iLCIjc2V0dXAiLCJkZWYiLCJBcnJheSIsInB1c2giLCJTZXQiLCJjb25maWd1cmVkIiwiZ2V0SXRlbSIsImRldmljZSIsImxvY2F0aW9uIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJzcGxpdCIsImxhbmd1YWdlczIiLCJfX2FwcF9wYWNrYWdlIiwic3BlY2lmaWVyIiwiRXZlbnRzMiIsImxpc3RlbmVycyIsIk1hcCIsImRlc3Ryb3llZCIsIkVycm9yIiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwiZ2V0Iiwic2V0IiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwicmVzdCIsIm5hbWUiLCJhcmdzIiwiYXJndW1lbnRzIiwic2hpZnQiLCJzb3J0IiwiYSIsImIiLCJhc3luYyIsInByb21pc2VzIiwiYWxsIiwiY2FsbCIsImNhdGNoIiwiZXhjIiwiZXJyb3IiLCJzdGFjayIsImRlc3Ryb3kiLCJjbGVhciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiQ2FuY2VsbGF0aW9uVG9rZW4yIiwiaWQiLCJyZXNldCIsImNoZWNrIiwiU2luZ2xlQ2FsbDIiLCJ0YXJnZXQiLCJwcm9wZXJ0eUtleSIsImRlc2NyaXB0b3IiLCJvcmlnaW5hbE1ldGhvZCIsIldlYWtNYXAiLCJwcm9taXNlIiwiYXBwbHkiLCJjbGVhbiIsIlBlbmRpbmdQcm9taXNlMiIsInJlamVjdCIsImV4ZWN1dG9yIiwiRnVuY3Rpb24iLCJwcm9jZXNzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dkYsT0FBQSxDQUFVO01BQ3RDRixPQUFBO01BQ0EwRixNQUFBO01BRUF0RixZQUFZdUYsUUFBQSxFQUFrRztRQUUxRyxJQUFJQSxRQUFBLFlBQW9CQyxRQUFBLEVBQVU7VUFDOUIsTUFBTUQsUUFBUTtVQUNkOztRQUdKLElBQUkzRixPQUFBLEdBQVU7UUFDZCxJQUFJMEYsTUFBQSxHQUFTO1FBQ2IsTUFBTSxDQUFDNUIsQ0FBQSxFQUFHQyxDQUFBLEtBQUs7VUFDWC9ELE9BQUEsR0FBVThELENBQUE7VUFDVjRCLE1BQUEsR0FBUzNCLENBQUE7UUFDYixDQUFDO1FBQ0QsS0FBSy9ELE9BQUEsR0FBVUEsT0FBQTtRQUNmLEtBQUswRixNQUFBLEdBQVNBLE1BQUE7TUFDbEI7O0lBR0o5RyxPQUFBLENBQUFQLGNBQUEsR0FBQW9ILGVBQUE7SUFDQSxPQUFhbkcsVUFBQSxDQUFZdUcsT0FBQSxLQUFZLGFBQW1CQyxNQUFBLENBQVF6SCxjQUFBLEdBQWlCb0gsZUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=