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

// .beyond/uimport/@beyond-js/reactive/entities/collection.2.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2NvbGxlY3Rpb24uMi4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9jb2xsZWN0aW9uL2VudGl0aWVzL2NvbGxlY3Rpb24uYnJvd3Nlci5tanMiXSwibmFtZXMiOlsiY29sbGVjdGlvbl8yXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJDb2xsZWN0aW9uIiwiSUNvbGxlY3Rpb25Qcm92aWRlciIsIklMb2FkU3BlY3MiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZGVwZW5kZW5jeV8wIiwiX190b0VTTSIsInJlcXVpcmUiLCJkZXBlbmRlbmN5XzEiLCJkZXBlbmRlbmN5XzIiLCJpbXBvcnRfbWV0YSIsIkJ1bmRsZSIsIl9fQnVuZGxlIiwiX19wa2ciLCJ1cmwiLCJwYWNrYWdlIiwiZGVwZW5kZW5jaWVzIiwidXBkYXRlIiwiaW1zIiwiTWFwIiwic2V0IiwiaGFzaCIsImNyZWF0b3IiLCJyZXF1aXJlMiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9tb2RlbCIsIkNvbGxlY3Rpb24yIiwiUmVhY3RpdmVNb2RlbCIsInRvdGFsIiwibmV4dCIsIm5leHRQYXJhbU5hbWUiLCJkZWZhdWx0TGltaXQiLCJnZXRUb3RhbCIsImdldE5leHQiLCJlbnRpdHkiLCJwcm92aWRlciIsImlzQ29sbGVjdGlvbiIsIml0ZW0iLCJJdGVtIiwibWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJmaWx0ZXJzIiwicmVnaXN0cnkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIm9uTmV3UmVnaXN0cnkiLCJiaW5kIiwib25SZWdpc3RyeURlbGV0ZWQiLCJsb2FkIiwiYXJncyIsImxpbWl0Iiwid2hlcmUiLCJmZXRjaGluZyIsImxpc3QiLCJkYXRhIiwiZW50cmllcyIsInNob3VsZFVwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlciIsImVycm9yIiwiY29uc29sZSIsImNsZWFyIiwid2FybiIsImZvckVhY2giLCJoYXMiLCJpZCIsImdldCIsImluc3RhbmNlIiwicGFyZW50IiwiYWRkSXRlbXMiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJwdXNoIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZGVsZXRlIiwiaWRzIiwidG9EZWxldGUiLCJleGlzdGluZ0l0ZW1zIiwiZmlsdGVyIiwiQm9vbGVhbiIsImRlbGV0ZU1hbnkiLCJQcm9taXNlIiwiYWxsIiwic2tpcFByb3ZpZGVyIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsImV2ZXJ5Iiwib3BlcmF0b3IiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImV2YWx1YXRlQ29uZGl0aW9ucyIsImNvbmRpdGlvbnMiLCJsb2dpYyIsImNvbmRpdGlvbiIsIkFORCIsIk9SIiwia2V5IiwiZGVzY3JpcHRvciIsInByb2Nlc3MiLCJwcm9wIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImluaXRpYWxpc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FB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TyxDQUFDLENBQUNxQixHQUFHLE1BQU1BLEdBQUEsS0FBUSxTQUFTQSxHQUFBLEtBQVEsSUFBSSxFQUFFWCxLQUFBLENBQU0sQ0FBQyxDQUFDSCxRQUFBLEVBQVVDLFFBQVEsTUFBTUYsaUJBQUEsQ0FBa0JDLFFBQUEsRUFBVUMsUUFBUSxDQUFDO01BQ3ZKO0lBQ0Y7SUFDQTdGLE9BQUEsQ0FBUU4sVUFBQSxHQUFhZ0MsV0FBQTtFQUNyQjtBQUFDLENBQUM7QUFNRlgsR0FBQSxDQUFJRSxHQUFBLENBQUksV0FBVztFQUFDQyxJQUFBLEVBQU07RUFBWUMsT0FBQSxFQUFTLFNBQUFBLENBQVVDLFFBQUEsRUFBU3BCLE9BQUEsRUFBUztJQUMzRTs7SUFFQXFCLE1BQUEsQ0FBT0MsY0FBQSxDQUFldEIsT0FBQSxFQUFTLGNBQWM7TUFDM0N1QixLQUFBLEVBQU87SUFDVCxDQUFDO0VBQ0Q7QUFBQyxDQUFDO0FBRUZiLEtBQUEsQ0FBTVYsT0FBQSxDQUFRMkcsVUFBQSxHQUFhLENBQUM7RUFBQyxNQUFLO0VBQVUsUUFBTztFQUFhLFFBQU87QUFBWSxHQUFFO0VBQUMsTUFBSztFQUFVLFFBQU87RUFBc0IsUUFBTztBQUFxQixHQUFFO0VBQUMsTUFBSztFQUFVLFFBQU87RUFBYSxRQUFPO0FBQVksQ0FBQztBQUVqTixJQUFJakgsVUFBQSxFQUFZQyxtQkFBQSxFQUFxQkMsVUFBQTtBQUc1Q2MsS0FBQSxDQUFNVixPQUFBLENBQVE0RyxPQUFBLEdBQVUsVUFBUztFQUFDeEcsT0FBQSxFQUFBZ0IsUUFBQTtFQUFTeUYsSUFBQTtFQUFNdEY7QUFBSyxHQUFHO0VBQ3JELENBQUNILFFBQUEsSUFBV3lGLElBQUEsS0FBUyxrQkFBa0JuSCxVQUFBLEdBQWEwQixRQUFBLEdBQVVBLFFBQUEsQ0FBUSxTQUFTLEVBQUUxQixVQUFBLEdBQWE2QixLQUFBO0VBQzlGLENBQUNILFFBQUEsSUFBV3lGLElBQUEsS0FBUywyQkFBMkJsSCxtQkFBQSxHQUFzQnlCLFFBQUEsR0FBVUEsUUFBQSxDQUFRLFNBQVMsRUFBRXpCLG1CQUFBLEdBQXNCNEIsS0FBQTtFQUN6SCxDQUFDSCxRQUFBLElBQVd5RixJQUFBLEtBQVMsa0JBQWtCakgsVUFBQSxHQUFhd0IsUUFBQSxHQUFVQSxRQUFBLENBQVEsU0FBUyxFQUFFeEIsVUFBQSxHQUFhMkIsS0FBQTtBQUVsRztBQUNPLElBQU0xQixZQUFBLEdBQWVhLEtBQUE7QUFFckIsSUFBTVosR0FBQSxHQUFNLElBQUssWUFBWTtFQUNoQyxLQUFLa0QsRUFBQSxHQUFLLENBQUM4RCxLQUFBLEVBQU9DLFFBQUEsS0FBYTtFQUMvQixLQUFLQyxHQUFBLEdBQU0sQ0FBQ0YsS0FBQSxFQUFPQyxRQUFBLEtBQWE7QUFDcEM7QUFHQXJHLEtBQUEsQ0FBTXVHLFVBQUEsQ0FBV2xHLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9