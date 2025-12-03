System.register(["@beyond-js/kernel@0.1.14/bundle","zod@3.24.4","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.1.1/model","uuid@11.1.0","@beyond-js/reactive@2.1.1/entities/item"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["zod","3.24.4"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.1.1"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('zod@3.24.4', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.1.1/model', dep), dep => dependencies.set('uuid@11.1.0', dep), dep => dependencies.set('@beyond-js/reactive@2.1.1/entities/item', dep)],
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

// .beyond/uimport/temp/@beyond-js/reactive/entities/collection.2.1.1.js
var collection_2_1_1_exports = {};
__export(collection_2_1_1_exports, {
  Collection: () => Collection,
  ICollectionProvider: () => ICollectionProvider,
  ILoadSpecs: () => ILoadSpecs,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(collection_2_1_1_exports);

// node_modules/@beyond-js/reactive/entities/collection/entities/collection.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.1.1/entities/item"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@2.1.1/model"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.1.1/entities/collection"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/entities/item", dependency_1], ["@beyond-js/reactive/model", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 50024398,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Collection = void 0;
    var _item = require2("@beyond-js/reactive/entities/item");
    var _model = require2("@beyond-js/reactive/model");
    class Collection2 extends _model.ReactiveModel {
      total = 0;
      next = null;
      /**
       * Name of the parameter used for pagination cursor (default: "next").
       * Can be configured via the constructor using `nextParamName`.
       */
      #nextParamName = "next";
      #defaultLimit;
      /**
       * Get the total number of items available (if provided by the provider).
       */
      getTotal() {
        return this.total;
      }
      /**
       * Get the value of next page (if provided by the provider).
       */
      getNext() {
        return this.next;
      }
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
        item,
        defaultLimit = 15,
        nextParamName = "next"
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
        this.#defaultLimit = defaultLimit;
        if (nextParamName) this.#nextParamName = nextParamName;
      }
      /**
       * Loads and processes data from an external source via the `DataProvider`.
       * This method uses the configured `provider` to fetch data and apply the specified filters.
       * Filtering parameters are defined in the `args` argument, and the specific filtering logic
       * is implemented by the `DataProvider`.
       *
       * ### Parameters:
       * - `args.where` (optional): Object defining search filters with the following structure:
       *   - `{ property: { operator: value } }`
       *   - Supported operators include:
       *     - `equals`: Exact match with the property value.
       *     - `not`: Value different from the specified value.
       *     - `in`: The property value matches one of the values in the array.
       *     - `notIn`: The property value does not match any of the values in the array.
       *     - `contains`: The property value contains the specified substring.
       *     - `startsWith`: The property value starts with the specified substring.
       *     - `endsWith`: The property value ends with the specified substring.
       *     - `gt` (greater than): The property value is greater than the specified value.
       *     - `gte` (greater than or equal): The property value is greater than or equal to the specified value.
       *     - `lt` (less than): The property value is less than the specified value.
       *     - `lte` (less than or equal): The property value is less than or equal to the specified value.
       *
       * - `args.orderBy` (optional): Object to define the sorting of results. Example:
       *   - `{ property: "asc" | "desc" }` where `"asc"` is ascending order and `"desc"` is descending order.
       *
       * - `args.skip` and `args.take` (optional): Parameters for in-memory pagination.
       *   - `skip`: Number of items to skip from the beginning.
       *   - `take`: Number of items to load after skipping the defined number in `skip`.
       *
       * ### Exceptions:
       * - Throws an error if the `DataProvider` is not defined or does not implement the `load` method.
       * - Throws an error if `DataProvider.load()` does not return an array.
       *
       * @param {Object} args - Object containing filtering and configuration parameters.
       * @returns {Promise<void>} - A promise that resolves when data loading and processing are complete.
       * @throws {Error} - If data cannot be loaded or processed.
       */
      /**
       * Load items from the configured provider.
       * If {@link ILoadSpecs.limit} is omitted, the collection's `defaultLimit`
       * (configured in the constructor) is used.
       *
       * Pagination is handled internally: if the collection has a pagination cursor ("next"),
       * it will be added to the request using the parameter name defined by `nextParamName`.
       * You do not need to pass the `next` parameter manually.
       */
      async load(args = {}) {
        if (typeof args.limit !== "number") args.limit = this.#defaultLimit;
        if (this.next) args[this.#nextParamName] = this.next;
        this.#filters = args.where ?? {};
        this.fetching = true;
        if (!this.#provider || typeof this.#provider.list !== "function") {
          throw new Error("DataProvider is not defined or does not implement the list() method.");
        }
        try {
          const data = await this.#provider.list(args);
          let entries;
          const shouldUpdate = !!args.update;
          if (Array.isArray(data)) {
            entries = data;
            this.total = 0;
            this.next = null;
            this.setItems(entries, true);
          } else if (data && Array.isArray(data.items)) {
            entries = data.items;
            if (typeof data.total === "number") this.total = data.total;
            if ("next" in data) this.next = data.next;
            this.setItems(entries, !shouldUpdate);
          } else {
            throw new Error('DataProvider.list() must return an array or an object with an "entries" array.');
          }
          this.trigger("load", {
            items: entries,
            total: this.total,
            next: this.next
          });
          return entries;
        } catch (error) {
          console.error("Error loading data:", error);
          throw error;
        } finally {
          this.fetching = false;
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
      addItems(data) {
        this.setItems(data);
        this.trigger("items.changed", {
          items: this.#map
        });
        this.trigger("change");
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
      /**
       * Validates a new registry against the collection's filters and, if it matches,
       * creates a new item with the registry data and adds it to the data map.
       *
       * @param {object} registry - The new registry data to be checked and potentially added.
       */
      onNewRegistry(registry) {
        if (this.matchesFilters(registry)) {
          const newItem = new this.#item(registry);
          this.#map.set(registry.id, newItem);
          this.trigger("items.changed", {
            item: newItem
          });
          this.trigger("change");
        }
      }
      async delete(ids) {
        const toDelete = Array.isArray(ids) ? ids : [ids];
        const existingItems = toDelete.map(id => this.#map.get(id)).filter(Boolean);
        if (this.#provider && typeof this.#provider.deleteMany === "function") {
          await this.#provider.deleteMany(toDelete);
        }
        return await Promise.all(existingItems.map(item => item.delete({
          skipProvider: true
        })));
      }
      onRegistryDeleted(registry) {
        if (!this.#map.has(registry.id)) return;
        this.#map.delete(registry.id);
        this.trigger("change");
        this.trigger("items.changed");
      }
      /**
       * Validates if a registry matches the stored filters, including support for AND and OR logical operators.
       * The #filters object contains filtering criteria that are evaluated here.
       *
       * @param {object} registry - The data of the registry to be checked.
       * @returns {boolean} - Returns true if the registry matches all filter criteria; otherwise, false.
       */
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
  hash: 3018774832,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvY29sbGVjdGlvbi4yLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2NvbGxlY3Rpb24vZW50aXRpZXMvY29sbGVjdGlvbi5icm93c2VyLm1qcyJdLCJuYW1lcyI6WyJjb2xsZWN0aW9uXzJfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNvbGxlY3Rpb24iLCJJQ29sbGVjdGlvblByb3ZpZGVyIiwiSUxvYWRTcGVjcyIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJkZXBlbmRlbmN5XzAiLCJfX3RvRVNNIiwicmVxdWlyZSIsImRlcGVuZGVuY3lfMSIsImRlcGVuZGVuY3lfMiIsImltcG9ydF9tZXRhIiwiQnVuZGxlIiwiX19CdW5kbGUiLCJfX3BrZyIsInVybCIsInBhY2thZ2UiLCJkZXBlbmRlbmNpZXMiLCJ1cGRhdGUiLCJpbXMiLCJNYXAiLCJzZXQiLCJoYXNoIiwiY3JlYXRvciIsInJlcXVpcmUyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9pdGVtIiwiX21vZGVsIiwiQ29sbGVjdGlvbjIiLCJSZWFjdGl2ZU1vZGVsIiwidG90YWwiLCJuZXh0IiwibmV4dFBhcmFtTmFtZSIsImRlZmF1bHRMaW1pdCIsImdldFRvdGFsIiwiZ2V0TmV4dCIsImVudGl0eSIsInByb3ZpZGVyIiwiaXNDb2xsZWN0aW9uIiwiaXRlbSIsIkl0ZW0iLCJtYXAiLCJpdGVtcyIsInZhbHVlcyIsImZpbHRlcnMiLCJyZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsIm9uIiwib25OZXdSZWdpc3RyeSIsImJpbmQiLCJvblJlZ2lzdHJ5RGVsZXRlZCIsImxvYWQiLCJhcmdzIiwibGltaXQiLCJ3aGVyZSIsImZldGNoaW5nIiwibGlzdCIsImRhdGEiLCJlbnRyaWVzIiwic2hvdWxkVXBkYXRlIiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0SXRlbXMiLCJ0cmlnZ2VyIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xlYXIiLCJ3YXJuIiwiZm9yRWFjaCIsImhhcyIsImlkIiwiZ2V0IiwiaW5zdGFuY2UiLCJwYXJlbnQiLCJhZGRJdGVtcyIsImdldFByb3BlcnRpZXMiLCJnZXRJdGVtUHJvcGVydGllcyIsInB1c2giLCJtYXRjaGVzRmlsdGVycyIsIm5ld0l0ZW0iLCJkZWxldGUiLCJpZHMiLCJ0b0RlbGV0ZSIsImV4aXN0aW5nSXRlbXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiZGVsZXRlTWFueSIsIlByb21pc2UiLCJhbGwiLCJza2lwUHJvdmlkZXIiLCJldmFsdWF0ZUNvbmRpdGlvbiIsInByb3BlcnR5IiwiY3JpdGVyaWEiLCJyZWdpc3RyeVZhbHVlIiwiZXZlcnkiLCJvcGVyYXRvciIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiZXZhbHVhdGVDb25kaXRpb25zIiwiY29uZGl0aW9ucyIsImxvZ2ljIiwiY29uZGl0aW9uIiwiQU5EIiwiT1IiLCJrZXkiLCJkZXNjcmlwdG9yIiwicHJvY2VzcyIsInByb3AiLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQTtBQUFBQyxRQUFBLENBQUFELHdCQUFBO0VBQUFFLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFB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QSxDQUFPLENBQUMsQ0FBQ3FCLEdBQUcsTUFBTUEsR0FBQSxLQUFRLFNBQVNBLEdBQUEsS0FBUSxJQUFJLEVBQUVYLEtBQUEsQ0FBTSxDQUFDLENBQUNILFFBQUEsRUFBVUMsUUFBUSxNQUFNRixpQkFBQSxDQUFrQkMsUUFBQSxFQUFVQyxRQUFRLENBQUM7TUFDdko7SUFDRjtJQUNBN0YsT0FBQSxDQUFRTixVQUFBLEdBQWFnQyxXQUFBO0VBQ3JCO0FBQUMsQ0FBQztBQU1GWCxHQUFBLENBQUlFLEdBQUEsQ0FBSSxXQUFXO0VBQUNDLElBQUEsRUFBTTtFQUFZQyxPQUFBLEVBQVMsU0FBQUEsQ0FBVUMsUUFBQSxFQUFTcEIsT0FBQSxFQUFTO0lBQzNFOztJQUVBcUIsTUFBQSxDQUFPQyxjQUFBLENBQWV0QixPQUFBLEVBQVMsY0FBYztNQUMzQ3VCLEtBQUEsRUFBTztJQUNULENBQUM7RUFDRDtBQUFDLENBQUM7QUFFRmIsS0FBQSxDQUFNVixPQUFBLENBQVEyRyxVQUFBLEdBQWEsQ0FBQztFQUFDLE1BQUs7RUFBVSxRQUFPO0VBQWEsUUFBTztBQUFZLEdBQUU7RUFBQyxNQUFLO0VBQVUsUUFBTztFQUFzQixRQUFPO0FBQXFCLEdBQUU7RUFBQyxNQUFLO0VBQVUsUUFBTztFQUFhLFFBQU87QUFBWSxDQUFDO0FBRWpOLElBQUlqSCxVQUFBLEVBQVlDLG1CQUFBLEVBQXFCQyxVQUFBO0FBRzVDYyxLQUFBLENBQU1WLE9BQUEsQ0FBUTRHLE9BQUEsR0FBVSxVQUFTO0VBQUN4RyxPQUFBLEVBQUFnQixRQUFBO0VBQVN5RixJQUFBO0VBQU10RjtBQUFLLEdBQUc7RUFDckQsQ0FBQ0gsUUFBQSxJQUFXeUYsSUFBQSxLQUFTLGtCQUFrQm5ILFVBQUEsR0FBYTBCLFFBQUEsR0FBVUEsUUFBQSxDQUFRLFNBQVMsRUFBRTFCLFVBQUEsR0FBYTZCLEtBQUE7RUFDOUYsQ0FBQ0gsUUFBQSxJQUFXeUYsSUFBQSxLQUFTLDJCQUEyQmxILG1CQUFBLEdBQXNCeUIsUUFBQSxHQUFVQSxRQUFBLENBQVEsU0FBUyxFQUFFekIsbUJBQUEsR0FBc0I0QixLQUFBO0VBQ3pILENBQUNILFFBQUEsSUFBV3lGLElBQUEsS0FBUyxrQkFBa0JqSCxVQUFBLEdBQWF3QixRQUFBLEdBQVVBLFFBQUEsQ0FBUSxTQUFTLEVBQUV4QixVQUFBLEdBQWEyQixLQUFBO0FBRWxHO0FBQ08sSUFBTTFCLFlBQUEsR0FBZWEsS0FBQTtBQUVyQixJQUFNWixHQUFBLEdBQU0sSUFBSyxZQUFZO0VBQ2hDLEtBQUtrRCxFQUFBLEdBQUssQ0FBQzhELEtBQUEsRUFBT0MsUUFBQSxLQUFhO0VBQy9CLEtBQUtDLEdBQUEsR0FBTSxDQUFDRixLQUFBLEVBQU9DLFFBQUEsS0FBYTtBQUNwQztBQUdBckcsS0FBQSxDQUFNdUcsVUFBQSxDQUFXbEcsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=