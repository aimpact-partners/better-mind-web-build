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

// .beyond/uimport/temp/@beyond-js/reactive/entities/collection.2.0.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvY29sbGVjdGlvbi4yLjAuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2NvbGxlY3Rpb24vZW50aXRpZXMvY29sbGVjdGlvbi5icm93c2VyLm1qcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uXzJfMF80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNvbGxlY3Rpb24iLCJJQ29sbGVjdGlvblByb3ZpZGVyIiwiSUxvYWRTcGVjcyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJkZXBlbmRlbmN5XzAiLCJfX3RvRVNNIiwicmVxdWlyZSIsImRlcGVuZGVuY3lfMSIsImRlcGVuZGVuY3lfMiIsImltcG9ydF9tZXRhIiwiQnVuZGxlIiwiX19CdW5kbGUiLCJfX3BrZyIsInVybCIsInBhY2thZ2UiLCJkZXBlbmRlbmNpZXMiLCJ1cGRhdGUiLCJpbXMiLCJNYXAiLCJzZXQiLCJoYXNoIiwiY3JlYXRvciIsInJlcXVpcmUyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9pdGVtIiwiX21vZGVsIiwiQ29sbGVjdGlvbjIiLCJSZWFjdGl2ZU1vZGVsIiwiZW50aXR5IiwicHJvdmlkZXIiLCJpc0NvbGxlY3Rpb24iLCJpdGVtIiwiSXRlbSIsIm1hcCIsIml0ZW1zIiwidmFsdWVzIiwiZmlsdGVycyIsInJlZ2lzdHJ5IiwiY29uc3RydWN0b3IiLCJFcnJvciIsIlJlZ2lzdHJ5RmFjdG9yeSIsImdldEluc3RhbmNlIiwib24iLCJvbk5ld1JlZ2lzdHJ5IiwiYmluZCIsIm9uUmVnaXN0cnlEZWxldGVkIiwibG9hZCIsImFyZ3MiLCJ3aGVyZSIsImxpc3QiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0SXRlbXMiLCJ0cmlnZ2VyRXZlbnQiLCJlcnJvciIsImNvbnNvbGUiLCJjbGVhciIsIndhcm4iLCJmb3JFYWNoIiwiaGFzIiwiaWQiLCJnZXQiLCJpbnN0YW5jZSIsInBhcmVudCIsInRyaWdnZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJwdXNoIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZGVsZXRlIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsImVudHJpZXMiLCJldmVyeSIsIm9wZXJhdG9yIiwiaW5jbHVkZXMiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJldmFsdWF0ZUNvbmRpdGlvbnMiLCJjb25kaXRpb25zIiwibG9naWMiLCJjb25kaXRpb24iLCJBTkQiLCJPUiIsImZpbHRlciIsImtleSIsImRlc2NyaXB0b3IiLCJwcm9jZXNzIiwicHJvcCIsImV2ZW50IiwibGlzdGVuZXIiLCJvZmYiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQTtBQUFBQyxRQUFBLENBQUFELHdCQUFBO0VBQUFFLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsd0JBQUE7OztBQ0FBLElBQUFVLFlBQUEsR0FBOEJDLE9BQUEsQ0FBQUMsT0FBQTtBQUM5QixJQUFBQyxZQUFBLEdBQThCRixPQUFBLENBQUFDLE9BQUE7QUFDOUIsSUFBQUUsWUFBQSxHQUE4QkgsT0FBQSxDQUFBQyxPQUFBO0FBRjlCLElBQUFHLFdBQUE7QUFJQSxJQUFNO0VBQUNDLE1BQUEs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