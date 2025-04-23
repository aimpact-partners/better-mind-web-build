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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2V2ZW50cy9ldmVudHMuMC4wLjcuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9ldmVudHMvZXZlbnRzL19fc291cmNlcy9ldmVudHMvZXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvZXZlbnRzL2V2ZW50cy9fX3NvdXJjZXMvZXZlbnRzL3R5cGVzLnRzIl0sIm5hbWVzIjpbImV2ZW50c18wXzBfN19leHBvcnRzIiwiX19leHBvcnQiLCJFdmVudHMiLCJMaXN0ZW5lckZ1bmN0aW9uIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIkV2ZW50czIiLCJzcGVjcyIsImxpc3RlbmVycyIsIk1hcCIsImRlc3Ryb3llZCIsImNvbnN0cnVjdG9yIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJFcnJvciIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsImhhcyIsImdldCIsInNldCIsInB1c2giLCJmb3JjZSIsImRlbGV0ZSIsImUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIml0ZW0iLCJ0cmlnZ2VyIiwicmVzdCIsIm5hbWUiLCJhcmdzIiwiYXJndW1lbnRzIiwic2hpZnQiLCJzb3J0IiwiYSIsImIiLCJhc3luYyIsInByb21pc2VzIiwiUHJvbWlzZSIsImFsbCIsImNhbGwiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiZGVzdHJveSIsImNsZWFyIiwiZ2xvYmFsVGhpcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUs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RXhFLElBQUksS0FBSyxDQUFBUCxLQUFBLENBQU9LLFNBQUEsSUFBYSxDQUFDLEtBQUssQ0FBQUwsS0FBQSxDQUFPSyxTQUFBLENBQVVVLFFBQUEsQ0FBU04sS0FBQSxDQUFNb0IsSUFBSSxHQUFHO1VBQ3RFLE1BQU0sSUFBSXRCLEtBQUEsQ0FBTSxVQUFVRSxLQUFBLENBQU1vQixJQUFBLGtCQUFzQjs7UUFHMUQsSUFBSUMsSUFBQSxHQUFPLENBQUMsR0FBR0MsU0FBUztRQUN4QkQsSUFBQSxDQUFLRSxLQUFBLENBQUs7UUFFVixJQUFJLENBQUMsS0FBSyxDQUFBL0IsU0FBQSxDQUFXZ0IsR0FBQSxDQUFJUixLQUFBLENBQU1vQixJQUFJLEdBQUc7UUFFdEMsSUFBSWIsQ0FBQSxHQUFJLEtBQUssQ0FBQWYsU0FBQSxDQUFXaUIsR0FBQSxDQUFJVCxLQUFBLENBQU1vQixJQUFJO1FBR3RDYixDQUFBLENBQUVpQixJQUFBLENBQUssQ0FBQ0MsQ0FBQSxFQUFHQyxDQUFBLEtBQU1BLENBQUEsQ0FBRXhCLFFBQUEsR0FBV3VCLENBQUEsQ0FBRXZCLFFBQVE7UUFFeEMsSUFBSUYsS0FBQSxDQUFNMkIsS0FBQSxFQUFPO1VBRWIsTUFBTVQsT0FBQSxHQUFVLGVBQUFBLENBQUEsRUFBSztZQUVqQixNQUFNVSxRQUFBLEdBQVc7WUFDakIsU0FBUzNCLFFBQUEsSUFBWU0sQ0FBQSxFQUFHO2NBQ3BCcUIsUUFBQSxDQUFTakIsSUFBQSxDQUFLVixRQUFBLENBQVNBLFFBQUEsQ0FBUyxHQUFHb0IsSUFBSSxDQUFDOztZQUc1QyxNQUFNUSxPQUFBLENBQVFDLEdBQUEsQ0FBSUYsUUFBUTtVQUU5QjtVQUVBLE9BQU9WLE9BQUEsQ0FBUWEsSUFBQSxDQUFLLE1BQU0sR0FBR1YsSUFBSSxFQUFFVyxLQUFBLENBQU9DLEdBQUEsSUFBZUMsT0FBQSxDQUFRQyxLQUFBLENBQU1GLEdBQUEsQ0FBSUcsS0FBSyxDQUFDO2VBRTlFO1VBQ0gsU0FBU25DLFFBQUEsSUFBWU0sQ0FBQSxFQUFHO1lBQ3BCTixRQUFBLENBQVNBLFFBQUEsQ0FBUyxHQUFHb0IsSUFBSTs7O01BR3JDO01BRUFnQixRQUFBLEVBQU87UUFDSCxLQUFLLENBQUEzQyxTQUFBLEdBQWE7UUFDbEIsS0FBSyxDQUFBRixTQUFBLENBQVc4QyxLQUFBLENBQUs7TUFDekI7O0lBQ0hsRCxPQUFBLENBQUFMLE1BQUEsR0FBQU8sT0FBQTtJQUVLaUQsVUFBQSxDQUFZeEQsTUFBQSxHQUFTTyxPQUFBOzs7Ozs7SUN4SjNCOztJQUVBa0QsTUFBQSxDQUFBQyxjQUFBLENBQUFyRCxPQUFBO01BQ0FzRCxLQUFBO0lBQ0EiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=