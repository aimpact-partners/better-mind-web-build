System.register(["@beyond-js/kernel@0.1.12/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/events","0.0.7"]]);
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

// .beyond/uimport/temp/@beyond-js/events/events.0.0.7.js
var events_0_0_7_exports = {};
__export(events_0_0_7_exports, {
  Events: () => Events,
  ListenerFunction: () => ListenerFunction,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(events_0_0_7_exports);

// node_modules/@beyond-js/events/events/events.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/events@0.0.7/events"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./events", {
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
    globalThis.Events = Events2;
  }
});
ims.set("./types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./events",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}];
var Events, ListenerFunction;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Events") && (Events = require2 ? require2("./events").Events : value);
  (require2 || prop === "ListenerFunction") && (ListenerFunction = require2 ? require2("./types").ListenerFunction : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvZXZlbnRzL2V2ZW50cy4wLjAuNy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2V2ZW50cy9ldmVudHMvX19zb3VyY2VzL2V2ZW50cy9ldmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9ldmVudHMvZXZlbnRzL19fc291cmNlcy9ldmVudHMvdHlwZXMudHMiXSwibmFtZXMiOlsiZXZlbnRzXzBfMF83X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkV2ZW50cyIsIkxpc3RlbmVyRnVuY3Rpb24iLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiRXZlbnRzMiIsInNwZWNzIiwibGlzdGVuZXJzIiwiTWFwIiwiZGVzdHJveWVkIiwiY29uc3RydWN0b3IiLCJzdXBwb3J0ZWQiLCJBcnJheSIsIkVycm9yIiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwiaGFzIiwiZ2V0Iiwic2V0IiwicHVzaCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInRyaWdnZXIiLCJyZXN0IiwibmFtZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJzaGlmdCIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiY2FsbCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJkZXN0cm95IiwiY2xlYXIiLCJnbG9iYWxUaGlzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtF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b0I7UUFFeEUsSUFBSSxLQUFLLENBQUFQLEtBQUEsQ0FBT0ssU0FBQSxJQUFhLENBQUMsS0FBSyxDQUFBTCxLQUFBLENBQU9LLFNBQUEsQ0FBVVUsUUFBQSxDQUFTTixLQUFBLENBQU1vQixJQUFJLEdBQUc7VUFDdEUsTUFBTSxJQUFJdEIsS0FBQSxDQUFNLFVBQVVFLEtBQUEsQ0FBTW9CLElBQUEsa0JBQXNCOztRQUcxRCxJQUFJQyxJQUFBLEdBQU8sQ0FBQyxHQUFHQyxTQUFTO1FBQ3hCRCxJQUFBLENBQUtFLEtBQUEsQ0FBSztRQUVWLElBQUksQ0FBQyxLQUFLLENBQUEvQixTQUFBLENBQVdnQixHQUFBLENBQUlSLEtBQUEsQ0FBTW9CLElBQUksR0FBRztRQUV0QyxJQUFJYixDQUFBLEdBQUksS0FBSyxDQUFBZixTQUFBLENBQVdpQixHQUFBLENBQUlULEtBQUEsQ0FBTW9CLElBQUk7UUFHdENiLENBQUEsQ0FBRWlCLElBQUEsQ0FBSyxDQUFDQyxDQUFBLEVBQUdDLENBQUEsS0FBTUEsQ0FBQSxDQUFFeEIsUUFBQSxHQUFXdUIsQ0FBQSxDQUFFdkIsUUFBUTtRQUV4QyxJQUFJRixLQUFBLENBQU0yQixLQUFBLEVBQU87VUFFYixNQUFNVCxPQUFBLEdBQVUsZUFBQUEsQ0FBQSxFQUFLO1lBRWpCLE1BQU1VLFFBQUEsR0FBVztZQUNqQixTQUFTM0IsUUFBQSxJQUFZTSxDQUFBLEVBQUc7Y0FDcEJxQixRQUFBLENBQVNqQixJQUFBLENBQUtWLFFBQUEsQ0FBU0EsUUFBQSxDQUFTLEdBQUdvQixJQUFJLENBQUM7O1lBRzVDLE1BQU1RLE9BQUEsQ0FBUUMsR0FBQSxDQUFJRixRQUFRO1VBRTlCO1VBRUEsT0FBT1YsT0FBQSxDQUFRYSxJQUFBLENBQUssTUFBTSxHQUFHVixJQUFJLEVBQUVXLEtBQUEsQ0FBT0MsR0FBQSxJQUFlQyxPQUFBLENBQVFDLEtBQUEsQ0FBTUYsR0FBQSxDQUFJRyxLQUFLLENBQUM7ZUFFOUU7VUFDSCxTQUFTbkMsUUFBQSxJQUFZTSxDQUFBLEVBQUc7WUFDcEJOLFFBQUEsQ0FBU0EsUUFBQSxDQUFTLEdBQUdvQixJQUFJOzs7TUFHckM7TUFFQWdCLFFBQUEsRUFBTztRQUNILEtBQUssQ0FBQTNDLFNBQUEsR0FBYTtRQUNsQixLQUFLLENBQUFGLFNBQUEsQ0FBVzhDLEtBQUEsQ0FBSztNQUN6Qjs7SUFDSGxELE9BQUEsQ0FBQUwsTUFBQSxHQUFBTyxPQUFBO0lBRUtpRCxVQUFBLENBQVl4RCxNQUFBLEdBQVNPLE9BQUE7Ozs7OztJQ3hKM0I7O0lBRUFrRCxNQUFBLENBQUFDLGNBQUEsQ0FBQXJELE9BQUE7TUFDQXNELEtBQUE7SUFDQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==