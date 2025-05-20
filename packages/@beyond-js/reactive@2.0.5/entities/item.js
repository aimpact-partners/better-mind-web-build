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

// .beyond/uimport/temp/@beyond-js/reactive/entities/item.2.0.5.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvZW50aXRpZXMvaXRlbS4yLjAuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0aXZlL2VudGl0aWVzL2l0ZW0vZW50aXRpZXMvaXRlbS5icm93c2VyLm1qcyJdLCJuYW1lcyI6WyJpdGVtXzJfMF81X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklFbnRpdHlQcm92aWRlciIsIklJdGVtIiwiSUl0ZW1Qcm9wcyIsIklSZWNvcmRQcm9wcyIsIkl0ZW0iLCJJdGVtSWQiLCJSZWdpc3RyeUZhY3RvcnkiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZGVwZW5kZW5jeV8wIiwiX190b0VTTSIsInJlcXVpcmUiLCJkZXBlbmRlbmN5XzEiLCJkZXBlbmRlbmN5XzIiLCJpbXBvcnRfbWV0YSIsIkJ1bmRsZSIsIl9fQnVuZGxlIiwiX19wa2ciLCJ1cmwiLCJwYWNrYWdlIiwiZGVwZW5kZW5jaWVzIiwidXBkYXRlIiwiaW1zIiwiTWFwIiwic2V0IiwiaGFzaCIsImNyZWF0b3IiLCJyZXF1aXJlMiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwiLCJfZmFjdG9yeSIsIkl0ZW0yIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwib25TZXQiLCJiaW5kIiwib24iLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXRJdGVtIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZGF0YSIsInRyaWdnZXJFdmVudCIsInRyaWdnZXIiLCJlIiwicHVibGlzaCIsInNhdmVDaGFuZ2VzIiwidXBkYXRlZCIsInN0YXR1cyIsImRlbGV0ZSIsImlkIiwicHJvY2Vzc2luZyIsImRlbGV0ZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJfIiwiUmVnaXN0cnlGYWN0b3J5MiIsImluc3RhbmNlcyIsIml0ZW1zIiwicmVhZHkiLCJoYXMiLCJzcGVjcyIsIlJlZ2lzdHJ5IiwicmVnaXN0cnkyIiwicmVnaXN0ZXIiLCJpdGVtIiwiZ2V0IiwiX3V1aWQiLCJpc0RlbGV0ZWQiLCJwYXJlbnQiLCJ2NCIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJpc1JlYWN0aXZlIiwia2V5cyIsImxlbmd0aCIsImJhc2VTdGF0ZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2NyaXB0b3IiLCJwcm9jZXNzIiwicHJvcCIsImV2ZW50IiwibGlzdGVuZXIiLCJvZmYiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGVBQUEsRUFBQUEs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