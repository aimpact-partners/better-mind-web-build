System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.24.4","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.0.5/model","uuid@11.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.24.4"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.0.5"],["uuid","11.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.24.4', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.0.5/model', dep), dep => dependencies.set('uuid@11.1.0', dep)],
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

// .beyond/uimport/@beyond-js/reactive/entities/item.2.0.5.js
var item_2_0_5_exports = {};
__export(item_2_0_5_exports, {
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
module.exports = __toCommonJS(item_2_0_5_exports);

// node_modules/@beyond-js/reactive/entities/item/entities/item.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/reactive@2.0.5/model"), 0);
var dependency_2 = __toESM(require("uuid@11.1.0"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.0.5/entities/item"
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
  hash: 3046058107,
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
  hash: 543546687,
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
  hash: 1290040696,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./types", {
  hash: 1646392876,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2l0ZW0uMi4wLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9lbnRpdGllcy9pdGVtL2VudGl0aWVzL2l0ZW0uYnJvd3Nlci5tanMiXSwibmFtZXMiOlsiaXRlbV8yXzBfNV9leHBvcnRzIiwiX19leHBvcnQiLCJJRW50aXR5UHJvdmlkZXIiLCJJSXRlbSIsIklJdGVtUHJvcHMiLCJJUmVjb3JkUHJvcHMiLCJJdGVtIiwiSXRlbUlkIiwiUmVnaXN0cnlGYWN0b3J5IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImRlcGVuZGVuY3lfMCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiZGVwZW5kZW5jeV8xIiwiZGVwZW5kZW5jeV8yIiwiaW1wb3J0X21ldGEiLCJCdW5kbGUiLCJfX0J1bmRsZSIsIl9fcGtnIiwidXJsIiwicGFja2FnZSIsImRlcGVuZGVuY2llcyIsInVwZGF0ZSIsImltcyIsIk1hcCIsInNldCIsImhhc2giLCJjcmVhdG9yIiwicmVxdWlyZTIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsIiwiX2ZhY3RvcnkiLCJJdGVtMiIsIlJlYWN0aXZlTW9kZWwiLCJmYWN0b3J5IiwiZW50aXR5IiwicmVnaXN0cnkiLCJfX3JlZ2lzdHJ5U3RhdGUiLCJzdGF0ZSIsImZldGNoZWQiLCJmb3VuZCIsIl9wcm92aWRlciIsInByb3ZpZGVyIiwiX19pbnN0YW5jZUlkIiwiaW5zdGFuY2VJZCIsImRyYWZ0IiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiYXJncyIsIkVycm9yIiwicmVhY3RpdmVQcm9wcyIsIm9uU2V0IiwiYmluZCIsIm9uIiwiZ2V0SW5zdGFuY2UiLCJpbml0aWFsaXplIiwiZ2V0SXRlbSIsImdldFByb3BlcnR5IiwicHJvcGVydHlWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJzZXRJbml0aWFsVmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5Iiwic2V0VmFsdWVzIiwidmFsdWVzIiwicmVzcG9uc2UiLCJnZXRQcm9wZXJ0aWVzIiwiX2xvYWQiLCJsb2FkIiwibmFtZSIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZSIsInB1Ymxpc2giLCJzYXZlQ2hhbmdlcyIsInVwZGF0ZWQiLCJzdGF0dXMiLCJkZWxldGUiLCJpZCIsInByb2Nlc3NpbmciLCJkZWxldGVkIiwiY29uc29sZSIsImVycm9yIiwiXyIsIlJlZ2lzdHJ5RmFjdG9yeTIiLCJpbnN0YW5jZXMiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsInJlZ2lzdHJ5MiIsInJlZ2lzdGVyIiwiaXRlbSIsImdldCIsIl91dWlkIiwiaXNEZWxldGVkIiwicGFyZW50IiwidjQiLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwiaXNSZWFjdGl2ZSIsImtleXMiLCJsZW5ndGgiLCJiYXNlU3RhdGUiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjcmlwdG9yIiwicHJvY2VzcyIsInByb3AiLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiaW5pdGlhbGlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEs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a0J3QixRQUFBLEdBQVVBLFFBQUEsQ0FBUSxvQkFBb0IsRUFBRXhCLGVBQUEsR0FBa0IyQixLQUFBO0VBQ3hILENBQUNILFFBQUEsSUFBV3VGLElBQUEsS0FBUyxhQUFhcEgsS0FBQSxHQUFRNkIsUUFBQSxHQUFVQSxRQUFBLENBQVEsU0FBUyxFQUFFN0IsS0FBQSxHQUFRZ0MsS0FBQTtFQUMvRSxDQUFDSCxRQUFBLElBQVd1RixJQUFBLEtBQVMsY0FBY2hILE1BQUEsR0FBU3lCLFFBQUEsR0FBVUEsUUFBQSxDQUFRLFNBQVMsRUFBRXpCLE1BQUEsR0FBUzRCLEtBQUE7RUFDbEYsQ0FBQ0gsUUFBQSxJQUFXdUYsSUFBQSxLQUFTLGtCQUFrQm5ILFVBQUEsR0FBYTRCLFFBQUEsR0FBVUEsUUFBQSxDQUFRLFNBQVMsRUFBRTVCLFVBQUEsR0FBYStCLEtBQUE7RUFDOUYsQ0FBQ0gsUUFBQSxJQUFXdUYsSUFBQSxLQUFTLHVCQUF1QnJILGVBQUEsR0FBa0I4QixRQUFBLEdBQVVBLFFBQUEsQ0FBUSxTQUFTLEVBQUU5QixlQUFBLEdBQWtCaUMsS0FBQTtFQUM3RyxDQUFDSCxRQUFBLElBQVd1RixJQUFBLEtBQVMsb0JBQW9CbEgsWUFBQSxHQUFlMkIsUUFBQSxHQUFVQSxRQUFBLENBQVEsU0FBUyxFQUFFM0IsWUFBQSxHQUFlOEIsS0FBQTtBQUV4RztBQUNPLElBQU0xQixZQUFBLEdBQWVhLEtBQUE7QUFFckIsSUFBTVosR0FBQSxHQUFNLElBQUssWUFBWTtFQUNoQyxLQUFLaUQsRUFBQSxHQUFLLENBQUM2RCxLQUFBLEVBQU9DLFFBQUEsS0FBYTtFQUMvQixLQUFLQyxHQUFBLEdBQU0sQ0FBQ0YsS0FBQSxFQUFPQyxRQUFBLEtBQWE7QUFDcEM7QUFHQW5HLEtBQUEsQ0FBTXFHLFVBQUEsQ0FBV2hHLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9