System.register(["@beyond-js/kernel@0.1.14/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["@beyond-js/events","0.0.7"]]);
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

// .beyond/uimport/@beyond-js/events/events.0.0.7.js
var events_0_0_7_exports = {};
__export(events_0_0_7_exports, {
  Events: () => Events,
  ListenerFunction: () => ListenerFunction,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(events_0_0_7_exports);

// node_modules/@beyond-js/events/events/events.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2V2ZW50cy9ldmVudHMuMC4wLjcuanMiLCJmaWxlOi8vL19fc291cmNlcy9ldmVudHMvZXZlbnRzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvZXZlbnRzL3R5cGVzLnRzIl0sIm5hbWVzIjpbImV2ZW50c18wXzBfN19leHBvcnRzIiwiX19leHBvcnQiLCJFdmVudHMiLCJMaXN0ZW5lckZ1bmN0aW9uIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIkV2ZW50czIiLCJzcGVjcyIsImxpc3RlbmVycyIsIk1hcCIsImRlc3Ryb3llZCIsImNvbnN0cnVjdG9yIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJFcnJvciIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsImhhcyIsImdldCIsInNldCIsInB1c2giLCJmb3JjZSIsImRlbGV0ZSIsImUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJ0cmlnZ2VyIiwicmVzdCIsIm5hbWUiLCJhcmdzIiwiYXJndW1lbnRzIiwic2hpZnQiLCJzb3J0IiwiYSIsImIiLCJhc3luYyIsInByb21pc2VzIiwiUHJvbWlzZSIsImFsbCIsImNhbGwiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiZGVzdHJveSIsImNsZWFyIiwiZ2xvYmFsVGhpcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFB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QWEsQ0FBQyxLQUFLLENBQUFMLEtBQUEsQ0FBT0ssU0FBQSxDQUFVVSxRQUFBLENBQVNOLEtBQUEsQ0FBTW9CLElBQUksR0FBRztVQUN0RSxNQUFNLElBQUl0QixLQUFBLENBQU0sVUFBVUUsS0FBQSxDQUFNb0IsSUFBSSxrQkFBa0I7O1FBRzFELElBQUlDLElBQUEsR0FBTyxDQUFDLEdBQUdDLFNBQVM7UUFDeEJELElBQUEsQ0FBS0UsS0FBQSxDQUFLO1FBRVYsSUFBSSxDQUFDLEtBQUssQ0FBQS9CLFNBQUEsQ0FBV2dCLEdBQUEsQ0FBSVIsS0FBQSxDQUFNb0IsSUFBSSxHQUFHO1FBRXRDLElBQUliLENBQUEsR0FBSSxLQUFLLENBQUFmLFNBQUEsQ0FBV2lCLEdBQUEsQ0FBSVQsS0FBQSxDQUFNb0IsSUFBSTtRQUd0Q2IsQ0FBQSxDQUFFaUIsSUFBQSxDQUFLLENBQUNDLENBQUEsRUFBR0MsQ0FBQSxLQUFNQSxDQUFBLENBQUV4QixRQUFBLEdBQVd1QixDQUFBLENBQUV2QixRQUFRO1FBRXhDLElBQUlGLEtBQUEsQ0FBTTJCLEtBQUEsRUFBTztVQUViLE1BQU1ULE9BQUEsR0FBVSxlQUFBQSxDQUFBLEVBQUs7WUFFakIsTUFBTVUsUUFBQSxHQUFXO1lBQ2pCLFNBQVMzQixRQUFBLElBQVlNLENBQUEsRUFBRztjQUNwQnFCLFFBQUEsQ0FBU2pCLElBQUEsQ0FBS1YsUUFBQSxDQUFTQSxRQUFBLENBQVMsR0FBR29CLElBQUksQ0FBQzs7WUFHNUMsTUFBTVEsT0FBQSxDQUFRQyxHQUFBLENBQUlGLFFBQVE7VUFFOUI7VUFFQSxPQUFPVixPQUFBLENBQVFhLElBQUEsQ0FBSyxNQUFNLEdBQUdWLElBQUksRUFBRVcsS0FBQSxDQUFPQyxHQUFBLElBQWVDLE9BQUEsQ0FBUUMsS0FBQSxDQUFNRixHQUFBLENBQUlHLEtBQUssQ0FBQztlQUU5RTtVQUNILFNBQVNuQyxRQUFBLElBQVlNLENBQUEsRUFBRztZQUNwQk4sUUFBQSxDQUFTQSxRQUFBLENBQVMsR0FBR29CLElBQUk7OztNQUdyQztNQUVBZ0IsUUFBQSxFQUFPO1FBQ0gsS0FBSyxDQUFBM0MsU0FBQSxHQUFhO1FBQ2xCLEtBQUssQ0FBQUYsU0FBQSxDQUFXOEMsS0FBQSxDQUFLO01BQ3pCOztJQUNIbEQsT0FBQSxDQUFBTCxNQUFBLEdBQUFPLE9BQUE7SUFFS2lELFVBQUEsQ0FBWXhELE1BQUEsR0FBU08sT0FBQTs7Ozs7O0lDeEozQjs7SUFFQWtELE1BQUEsQ0FBQUMsY0FBQSxDQUFBckQsT0FBQTtNQUNBc0QsS0FBQTtJQUNBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==