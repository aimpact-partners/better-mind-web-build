System.register(["@beyond-js/kernel@0.1.14/bundle","zod@3.24.4","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.1.1/model","uuid@11.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["zod","3.24.4"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.1.1"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('zod@3.24.4', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.1.1/model', dep), dep => dependencies.set('uuid@11.1.0', dep)],
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

// .beyond/uimport/temp/@beyond-js/reactive/entities/item.2.1.1.js
var item_2_1_1_exports = {};
__export(item_2_1_1_exports, {
  IEntityProvider: () => IEntityProvider,
  IItem: () => IItem,
  IItemProps: () => IItemProps,
  IRecordProps: () => IRecordProps,
  Item: () => Item,
  ItemId: () => ItemId,
  RegistryFactory: () => RegistryFactory,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(item_2_1_1_exports);

// node_modules/@beyond-js/reactive/entities/item/entities/item.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.1.1/model"), 0);
var dependency_2 = __toESM(require("uuid@11.1.0"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.1.0/entities/item"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/model", dependency_1], ["uuid", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 1175604535,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Item = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _factory = require2("./registry/factory");
    class Item2 extends _model.ReactiveModel {
      #factory;
      #entity;
      get entity() {
        return this.#entity;
      }
      #registry;
      get __registryState() {
        return this.#registry.state;
      }
      #fetched;
      get fetched() {
        return this.#fetched;
      }
      #found = false;
      get found() {
        return this.#found;
      }
      _provider;
      get provider() {
        return this._provider;
      }
      get registry() {
        return this.#registry;
      }
      get __instanceId() {
        return this.#registry.instanceId;
      }
      #draft;
      get draft() {
        return this.#draft;
      }
      constructor({
        entity,
        provider,
        properties,
        ...args
      } = {}) {
        super({
          ...args,
          properties
        });
        if (!entity) throw new Error("Entity is required");
        if (provider && typeof provider !== "function") {
          throw new Error(`Provider must be a class/constructor in object ${entity}`);
        }
        this.reactiveProps(["deleted"]);
        this.#entity = entity;
        this.onSet = this.onSet.bind(this);
        this.on("set.executed", this.onSet);
        if (provider) {
          this._provider = new provider(this);
        }
        this.#factory = _factory.RegistryFactory.getInstance(entity);
        this.initialize(args);
      }
      /**
       *
       * @param param0
       */
      initialize({
        ...args
      }) {
        const registry = this.#factory.getItem(this.getProperty("id"), args);
        this.#registry = registry;
        const propertyValues = this.#registry.getValues();
        this.setInitialValues(propertyValues);
        this.properties.forEach(property => {
          if (typeof property === "string") {
            this.on(`${property}.changed`, () => {
              this.#registry.setValues({
                [property]: this.getProperty(property)
              });
            });
          }
        });
      }
      set(values) {
        const response = super.set(values);
        return response;
      }
      onSet() {
        this.#registry?.setValues(this.getProperties());
      }
      _load(args) {}
      // Define optional methods with a default implementation that gives a warning message
      async load(args) {
        if (!this.provider || typeof this.provider.load !== "function") {
          throw new Error(`DataProvider is not defined or does not implement the load() method in object ${this.constructor.name}`);
        }
        try {
          const response = await this.provider.load(args);
          const data = response;
          if (!data) {
            this.#found = false;
            throw new Error("Provider.load() did not return an item.");
          }
          this.#found = true;
          this.#fetched = true;
          this.set(data);
          this.trigger("load", {
            ...this.getProperties()
          });
          this.trigger("change");
          return response;
        } catch (e) {
          this.#found = false;
          throw e;
        }
      }
      async publish(data) {
        data = data ? data : this.getProperties();
        this.set({
          ...this.getProperties(),
          ...data
        });
        this.#registry.setValues(this.getProperties, true);
        super.saveChanges();
        if (this.provider && typeof this.provider.publish === "function") {
          const updated = await this.provider.publish(data);
          if (!updated.status) {
            throw new Error("Error saving item");
          }
          this.set(updated.data);
          return updated.data;
        }
        return this.getProperties();
      }
      async delete(options) {
        try {
          const id = this.getProperty("id");
          this.#registry.deleted = true;
          this.trigger("change");
          if (!options?.skipProvider && this.provider && typeof this.provider.delete === "function") {
            this.processing = true;
            await this.provider.delete(id);
          }
          return true;
        } catch (e) {
          console.error(e);
          return false;
        } finally {
          this.processing = false;
        }
      }
    }
    exports.Item = Item2;
  }
});
ims.set("./registry/factory", {
  hash: 1412870569,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RegistryFactory = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _ = require2("./");
    class RegistryFactory2 extends _model.ReactiveModel {
      static #instances = /* @__PURE__ */new Map();
      items = /* @__PURE__ */new Map();
      #name;
      constructor(name, properties) {
        super({
          properties
        });
        this.#name = name;
        this.ready = true;
      }
      getItem(id, data) {
        if (!id || !this.items.has(id)) {
          const specs = data ? {
            id,
            ...data
          } : {
            id,
            properties: this.properties,
            ...data
          };
          const registry = new _.Registry(this.#name, specs);
          registry.on("record.published", registry2 => {
            this.trigger("record.published", registry2);
          });
          if (data.register) this.trigger("record.published", registry.getValues());
          registry.on("record.updated", registry2 => this.trigger("update.registry", registry2));
          registry.on("record.deleted", registry2 => this.trigger("record.deleted", registry2));
          id = registry.id;
          this.items.set(id, registry);
        }
        const item = this.items.get(id);
        return item;
      }
      static getInstance(entity, data) {
        if (!this.#instances.has(entity)) {
          this.#instances.set(entity, new RegistryFactory2(entity, data));
        }
        return this.#instances.get(entity);
      }
    }
    exports.RegistryFactory = RegistryFactory2;
  }
});
ims.set("./registry/index", {
  hash: 1251785185,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Registry = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _uuid = require2("uuid");
    class Registry extends _model.ReactiveModel {
      #id;
      #instanceId;
      #isDeleted = false;
      #draft = false;
      #state = "draft";
      get state() {
        return this.#state;
      }
      get draft() {
        return this.#draft;
      }
      set draft(value) {
        if (value === this.#draft) return;
        this.#draft = value;
        this.trigger("change");
      }
      get id() {
        return this.#id || this.#values.id;
      }
      get instanceId() {
        return this.#instanceId;
      }
      #values;
      get values() {
        return this.#values;
      }
      get deleted() {
        return this.#isDeleted;
      }
      set deleted(value) {
        if (value === this.#isDeleted) return;
        this.#isDeleted = value;
        this.trigger("record.deleted", this.#values);
        this.trigger("change");
      }
      #entity;
      constructor(entity, {
        properties,
        parent,
        register,
        ...data
      } = {}) {
        super({
          properties: properties || []
        });
        this.#entity = entity;
        const {
          id
        } = data;
        this.#instanceId = data?.instanceId ? data.instanceId : (0, _uuid.v4)();
        this.#id = id;
        this.#draft = !id;
        this.#values = Object.entries(data).reduce((acc, [key, value]) => {
          if (typeof value === "object" && value?.isReactive) {
            return acc;
          }
          acc[key] = value;
          return acc;
        }, {
          id: this.#id
        });
        this.#state = this.#id ? "published" : "draft";
        this.setValues(this.#values);
      }
      setValues(data, publish = false) {
        if (!data || Object.keys(data).length === 0) return false;
        const baseState = this.#state;
        let updated = false;
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key];
            if (value === this.#values[key]) continue;
            this.#values[key] = value;
            updated = true;
          }
        }
        if (!updated) return false;
        this.trigger("change", {
          values: this.#values
        });
        this.trigger("record.updated", {
          ...this.#values
        });
        if (publish && baseState === "draft") {
          this.#state = "published";
          this.trigger("record.published", {
            ...this.#values
          });
        }
        return true;
      }
      getValues() {
        return {
          ...this.#values
        };
      }
    }
    exports.Registry = Registry;
  }
});
ims.set("./registry/types/index", {
  hash: 1952711566,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./types", {
  hash: 3056830740,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Item",
  "name": "Item"
}, {
  "im": "./registry/factory",
  "from": "RegistryFactory",
  "name": "RegistryFactory"
}, {
  "im": "./types",
  "from": "IItem",
  "name": "IItem"
}, {
  "im": "./types",
  "from": "ItemId",
  "name": "ItemId"
}, {
  "im": "./types",
  "from": "IItemProps",
  "name": "IItemProps"
}, {
  "im": "./types",
  "from": "IEntityProvider",
  "name": "IEntityProvider"
}, {
  "im": "./types",
  "from": "IRecordProps",
  "name": "IRecordProps"
}];
var Item, RegistryFactory, IItem, ItemId, IItemProps, IEntityProvider, IRecordProps;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Item") && (Item = require2 ? require2("./index").Item : value);
  (require2 || prop === "RegistryFactory") && (RegistryFactory = require2 ? require2("./registry/factory").RegistryFactory : value);
  (require2 || prop === "IItem") && (IItem = require2 ? require2("./types").IItem : value);
  (require2 || prop === "ItemId") && (ItemId = require2 ? require2("./types").ItemId : value);
  (require2 || prop === "IItemProps") && (IItemProps = require2 ? require2("./types").IItemProps : value);
  (require2 || prop === "IEntityProvider") && (IEntityProvider = require2 ? require2("./types").IEntityProvider : value);
  (require2 || prop === "IRecordProps") && (IRecordProps = require2 ? require2("./types").IRecordProps : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvaXRlbS4yLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2l0ZW0vZW50aXRpZXMvaXRlbS5icm93c2VyLm1qcyJdLCJuYW1lcyI6WyJpdGVtXzJfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIklFbnRpdHlQcm92aWRlciIsIklJdGVtIiwiSUl0ZW1Qcm9wcyIsIklSZWNvcmRQcm9wcyIsIkl0ZW0iLCJJdGVtSWQiLCJSZWdpc3RyeUZhY3RvcnkiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZGVwZW5kZW5jeV8wIiwiX190b0VTTSIsInJlcXVpcmUiLCJkZXBlbmRlbmN5XzEiLCJkZXBlbmRlbmN5XzIiLCJpbXBvcnRfbWV0YSIsIkJ1bmRsZSIsIl9fQnVuZGxlIiwiX19wa2ciLCJ1cmwiLCJwYWNrYWdlIiwiZGVwZW5kZW5jaWVzIiwidXBkYXRlIiwiaW1zIiwiTWFwIiwic2V0IiwiaGFzaCIsImNyZWF0b3IiLCJyZXF1aXJlMiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwiLCJfZmFjdG9yeSIsIkl0ZW0yIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwib25TZXQiLCJiaW5kIiwib24iLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXRJdGVtIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZGF0YSIsInRyaWdnZXIiLCJlIiwicHVibGlzaCIsInNhdmVDaGFuZ2VzIiwidXBkYXRlZCIsInN0YXR1cyIsImRlbGV0ZSIsIm9wdGlvbnMiLCJpZCIsImRlbGV0ZWQiLCJza2lwUHJvdmlkZXIiLCJwcm9jZXNzaW5nIiwiY29uc29sZSIsImVycm9yIiwiXyIsIlJlZ2lzdHJ5RmFjdG9yeTIiLCJpbnN0YW5jZXMiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsInJlZ2lzdHJ5MiIsInJlZ2lzdGVyIiwiaXRlbSIsImdldCIsIl91dWlkIiwiaXNEZWxldGVkIiwicGFyZW50IiwidjQiLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwiaXNSZWFjdGl2ZSIsImtleXMiLCJsZW5ndGgiLCJiYXNlU3RhdGUiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjcmlwdG9yIiwicHJvY2VzcyIsInByb3AiLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VB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