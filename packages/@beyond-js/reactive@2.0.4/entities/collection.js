System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.24.2","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.0.4/model","uuid@11.1.0","@beyond-js/reactive@2.0.4/entities/item"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.24.2"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.0.4"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.24.2', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.0.4/model', dep), dep => dependencies.set('uuid@11.1.0', dep), dep => dependencies.set('@beyond-js/reactive@2.0.4/entities/item', dep)],
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

// .beyond/uimport/@beyond-js/reactive/entities/collection.2.0.4.js
var collection_2_0_4_exports = {};
__export(collection_2_0_4_exports, {
  Collection: () => Collection,
  ICollectionProvider: () => ICollectionProvider,
  ILoadSpecs: () => ILoadSpecs,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(collection_2_0_4_exports);

// node_modules/@beyond-js/reactive/entities/collection/entities/collection.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.0.4/entities/item"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@2.0.4/model"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.0.4/entities/collection"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/entities/item", dependency_1], ["@beyond-js/reactive/model", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2720964352,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Collection = void 0;
    var _item = require2("@beyond-js/reactive/entities/item");
    var _model = require2("@beyond-js/reactive/model");
    class Collection2 extends _model.ReactiveModel {
      #entity;
      get entity() {
        return this.#entity;
      }
      #provider;
      get provider() {
        return this.#provider;
      }
      static isCollection = true;
      #item;
      get Item() {
        return this.#item;
      }
      #map = /* @__PURE__ */new Map();
      get map() {
        return this.#map;
      }
      get items() {
        return [...this.#map.values()];
      }
      #filters;
      #registry;
      constructor({
        entity,
        provider,
        item
      }) {
        super();
        this.#entity = entity;
        if (provider && typeof provider !== "function") {
          throw new Error("Provider must be a class/constructor");
        }
        if (provider) {
          this.#provider = new provider(this);
        }
        this.#registry = _item.RegistryFactory.getInstance(entity);
        this.#registry.on("record.published", this.onNewRegistry.bind(this));
        this.#registry.on("record.deleted", this.onRegistryDeleted.bind(this));
        this.#item = item;
      }
      async load(args) {
        this.#filters = args?.where ? args.where : {};
        if (!this.#provider || typeof this.#provider.list !== "function") {
          throw new Error("DataProvider is not defined or does not implement the list() method.");
        }
        try {
          const data = await this.#provider.list(args);
          if (Array.isArray(data)) {
            this.setItems(data, true);
          } else {
            throw new Error("DataProvider.load() did not return an array of items.");
          }
          this.triggerEvent("load", {
            items: this.#map
          });
          return data;
        } catch (error) {
          console.error("Error loading data:", error);
          throw error;
        }
      }
      setItems(data, clear = false) {
        if (clear) this.#map.clear();
        if (!data) return;
        if (!Array.isArray(data)) {
          console.warn("Data must be an array");
          return;
        }
        data.forEach(item => {
          if (this.map.has(item.id)) {
            this.map.get(item.id).set(item);
            return;
          }
          const instance = new this.#item({
            parent: this,
            ...item
          });
          this.#map.set(item.id, instance);
        });
      }
      set(data) {
        super.set(data);
        this.trigger("change");
        return data;
      }
      getProperties() {
        return {
          items: this.items
        };
      }
      getItemProperties() {
        const items = [];
        for (let item of this.items) {
          items.push(item.getProperties());
        }
        return items;
      }
      onNewRegistry(registry) {
        if (this.matchesFilters(registry)) {
          const newItem = new this.#item(registry);
          this.#map.set(registry.id, newItem);
          this.triggerEvent("items.changed", {
            item: newItem
          });
          this.triggerEvent("change");
        }
      }
      onRegistryDeleted(registry) {
        if (!this.#map.has(registry.id)) return;
        this.#map.delete(registry.id);
        this.trigger("change");
        this.trigger("items.changed");
      }
      matchesFilters(registry) {
        const filters = this.#filters?.where;
        if (!filters) return true;
        const evaluateCondition = (property, criteria) => {
          const registryValue = registry[property];
          return Object.entries(criteria).every(([operator, value]) => {
            switch (operator) {
              case "equals":
                return registryValue === value;
              case "not":
                return registryValue !== value;
              case "in":
                return Array.isArray(value) && value.includes(registryValue);
              case "notIn":
                return !Array.isArray(value) || !value.includes(registryValue);
              case "contains":
                return typeof registryValue === "string" && registryValue.includes(value);
              case "startsWith":
                return typeof registryValue === "string" && registryValue.startsWith(value);
              case "endsWith":
                return typeof registryValue === "string" && registryValue.endsWith(value);
              case "gt":
                return registryValue > value;
              case "gte":
                return registryValue >= value;
              case "lt":
                return registryValue < value;
              case "lte":
                return registryValue <= value;
              default:
                console.warn(`Unknown filter operator: ${operator}`);
                return false;
            }
          });
        };
        const evaluateConditions = (conditions, logic) => conditions[logic](condition => Object.entries(condition).every(([property, criteria]) => evaluateCondition(property, criteria)));
        if (filters.AND && !evaluateConditions(filters.AND, "every")) return false;
        if (filters.OR && !evaluateConditions(filters.OR, "some")) return false;
        return Object.entries(filters).filter(([key]) => key !== "AND" && key !== "OR").every(([property, criteria]) => evaluateCondition(property, criteria));
      }
    }
    exports.Collection = Collection2;
  }
});
ims.set("./types", {
  hash: 513718365,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Collection",
  "name": "Collection"
}, {
  "im": "./types",
  "from": "ICollectionProvider",
  "name": "ICollectionProvider"
}, {
  "im": "./types",
  "from": "ILoadSpecs",
  "name": "ILoadSpecs"
}];
var Collection, ICollectionProvider, ILoadSpecs;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Collection") && (Collection = require2 ? require2("./index").Collection : value);
  (require2 || prop === "ICollectionProvider") && (ICollectionProvider = require2 ? require2("./types").ICollectionProvider : value);
  (require2 || prop === "ILoadSpecs") && (ILoadSpecs = require2 ? require2("./types").ILoadSpecs : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2NvbGxlY3Rpb24uMi4wLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9jb2xsZWN0aW9uL2VudGl0aWVzL2NvbGxlY3Rpb24uYnJvd3Nlci5tanMiXSwibmFtZXMiOlsiY29sbGVjdGlvbl8yXzBfNF9leHBvcnRzIiwiX19leHBvcnQiLCJDb2xsZWN0aW9uIiwiSUNvbGxlY3Rpb25Qcm92aWRlciIsIklMb2FkU3BlY3MiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZGVwZW5kZW5jeV8wIiwiX190b0VTTSIsInJlcXVpcmUiLCJkZXBlbmRlbmN5XzEiLCJkZXBlbmRlbmN5XzIiLCJpbXBvcnRfbWV0YSIsIkJ1bmRsZSIsIl9fQnVuZGxlIiwiX19wa2ciLCJ1cmwiLCJwYWNrYWdlIiwiZGVwZW5kZW5jaWVzIiwidXBkYXRlIiwiaW1zIiwiTWFwIiwic2V0IiwiaGFzaCIsImNyZWF0b3IiLCJyZXF1aXJlMiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9tb2RlbCIsIkNvbGxlY3Rpb24yIiwiUmVhY3RpdmVNb2RlbCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXNDb2xsZWN0aW9uIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJvblJlZ2lzdHJ5RGVsZXRlZCIsImxvYWQiLCJhcmdzIiwid2hlcmUiLCJsaXN0IiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlckV2ZW50IiwiZXJyb3IiLCJjb25zb2xlIiwiY2xlYXIiLCJ3YXJuIiwiZm9yRWFjaCIsImhhcyIsImlkIiwiZ2V0IiwiaW5zdGFuY2UiLCJwYXJlbnQiLCJ0cmlnZ2VyIiwiZ2V0UHJvcGVydGllcyIsImdldEl0ZW1Qcm9wZXJ0aWVzIiwicHVzaCIsIm1hdGNoZXNGaWx0ZXJzIiwibmV3SXRlbSIsImRlbGV0ZSIsImV2YWx1YXRlQ29uZGl0aW9uIiwicHJvcGVydHkiLCJjcml0ZXJpYSIsInJlZ2lzdHJ5VmFsdWUiLCJlbnRyaWVzIiwiZXZlcnkiLCJvcGVyYXRvciIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiZXZhbHVhdGVDb25kaXRpb25zIiwiY29uZGl0aW9ucyIsImxvZ2ljIiwiY29uZGl0aW9uIiwiQU5EIiwiT1IiLCJmaWx0ZXIiLCJrZXkiLCJkZXNjcmlwdG9yIiwicHJvY2VzcyIsInByb3AiLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULHdCQUFBOzs7QUNBQSxJQUFBVSxZQUFBLEdBQThCQyxPQUFBLENBQUFDLE9BQUE7QUFDOUIsSUFBQUMsWUFBQSxHQUE4QkYsT0FBQSxDQUFBQyxPQUFBO0FBQzlCLElBQUFFLFlBQUEsR0FBOEJILE9BQUEsQ0FBQUMsT0FBQTtBQUY5QixJQUFBRyxXQUFBO0FBSUEsSUFBTTtFQUFDQyxNQUFBLEVBQVFD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