System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.24.2","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.0.4/model","uuid@11.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.24.2"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.0.4"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.24.2', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.0.4/model', dep), dep => dependencies.set('uuid@11.1.0', dep)],
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

// .beyond/uimport/@beyond-js/reactive/entities/item.2.0.4.js
var item_2_0_4_exports = {};
__export(item_2_0_4_exports, {
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
module.exports = __toCommonJS(item_2_0_4_exports);

// node_modules/@beyond-js/reactive/entities/item/entities/item.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.0.4/model"), 0);
var dependency_2 = __toESM(require("uuid@11.1.0"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.0.4/entities/item"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/reactive/model", dependency_1], ["uuid", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2615931641,
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
          this.triggerEvent("load", {
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
      async delete(id) {
        try {
          id = id ?? this.getProperty("id");
          if (!this.provider || typeof this.provider.delete !== "function") {
            throw new Error("DataProvider is not defined or does not implement the delete() method.");
          }
          this.processing = true;
          this.#registry.deleted = true;
          return this.provider.delete(id);
          return true;
        } catch (e) {
          console.error(e);
        }
      }
    }
    exports.Item = Item2;
  }
});
ims.set("./registry/factory", {
  hash: 1543626631,
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
          registry.on("record.updated", registry2 => this.trigger("update.registry", registry2));
          registry.on("record.deleted", registry2 => this.trigger("record.deleted", registry2));
          id = registry.id;
          this.items.set(id, registry);
        }
        const item = this.items.get(id);
        if (data) {
          let specs = data;
          if (!data.id) {
            delete specs.id;
          }
          item.setValues(data);
        }
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
  hash: 1627436126,
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
        this.triggerEvent();
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
        this.triggerEvent();
      }
      #entity;
      constructor(entity, {
        properties,
        ...data
      } = {
        id: void 0,
        properties: [],
        instanceId: void 0
      }) {
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
        this.#values = {
          ...data,
          id: this.#id
        };
        this.#state = this.#id ? "published" : "draft";
        this.setValues(this.#values);
      }
      updateValue(key, value) {
        this.#values[key] = value;
      }
      setValues(data, published = false) {
        if (!data) return false;
        const baseState = this.#state;
        if (published) this.#state = "published";
        let updated = false;
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const property = key;
            const value = data[property];
            if (value === this.#values[property]) continue;
            this.updateValue(property, value);
            updated = true;
          }
        }
        if (baseState !== this.#state && this.#state === "published") {
          this.trigger("record.published", {
            ...this.#values
          });
          return updated;
        }
        if (!updated) return updated;
        this.trigger("change", {
          values: this.#values
        });
        this.trigger("record.updated", {
          ...this.#values
        });
        return updated;
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
  hash: 1290040696,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./types", {
  hash: 1054247030,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2l0ZW0uMi4wLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9pdGVtL2VudGl0aWVzL2l0ZW0uYnJvd3Nlci5tanMiXSwibmFtZXMiOlsiaXRlbV8yXzBfNF9leHBvcnRzIiwiX19leHBvcnQiLCJJRW50aXR5UHJvdmlkZXIiLCJJSXRlbSIsIklJdGVtUHJvcHMiLCJJUmVjb3JkUHJvcHMiLCJJdGVtIiwiSXRlbUlkIiwiUmVnaXN0cnlGYWN0b3J5IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImRlcGVuZGVuY3lfMCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiZGVwZW5kZW5jeV8xIiwiZGVwZW5kZW5jeV8yIiwiaW1wb3J0X21ldGEiLCJCdW5kbGUiLCJfX0J1bmRsZSIsIl9fcGtnIiwidXJsIiwicGFja2FnZSIsImRlcGVuZGVuY2llcyIsInVwZGF0ZSIsImltcyIsIk1hcCIsInNldCIsImhhc2giLCJjcmVhdG9yIiwicmVxdWlyZTIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX2ZhY3RvcnkiLCJJdGVtMiIsIlJlYWN0aXZlTW9kZWwiLCJmYWN0b3J5IiwiZW50aXR5IiwicmVnaXN0cnkiLCJfX3JlZ2lzdHJ5U3RhdGUiLCJzdGF0ZSIsImZldGNoZWQiLCJmb3VuZCIsIl9wcm92aWRlciIsInByb3ZpZGVyIiwiX19pbnN0YW5jZUlkIiwiaW5zdGFuY2VJZCIsImRyYWZ0IiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiYXJncyIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsIm9uU2V0IiwiYmluZCIsIm9uIiwiZ2V0SW5zdGFuY2UiLCJpbml0aWFsaXplIiwiZ2V0SXRlbSIsImdldFByb3BlcnR5IiwicHJvcGVydHlWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJzZXRJbml0aWFsVmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic2V0VmFsdWVzIiwidmFsdWVzIiwicmVzcG9uc2UiLCJnZXRQcm9wZXJ0aWVzIiwiX2xvYWQiLCJsb2FkIiwibmFtZSIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZSIsInB1Ymxpc2giLCJzYXZlQ2hhbmdlcyIsInVwZGF0ZWQiLCJzdGF0dXMiLCJkZWxldGUiLCJpZCIsInByb2Nlc3NpbmciLCJkZWxldGVkIiwiY29uc29sZSIsImVycm9yIiwiXyIsIlJlZ2lzdHJ5RmFjdG9yeTIiLCJpbnN0YW5jZXMiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsInJlZ2lzdHJ5MiIsIml0ZW0iLCJnZXQiLCJfdXVpZCIsImlzRGVsZXRlZCIsInY0IiwidXBkYXRlVmFsdWUiLCJrZXkiLCJwdWJsaXNoZWQiLCJiYXNlU3RhdGUiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjcmlwdG9yIiwicHJvY2VzcyIsInByb3AiLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFB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