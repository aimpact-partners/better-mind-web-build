System.register(["@beyond-js/kernel@0.1.14/bundle","zod@3.24.4","@beyond-js/events@0.0.7/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["zod","3.24.4"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('zod@3.24.4', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep)],
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

// .beyond/uimport/@beyond-js/reactive/model.2.1.1.js
var model_2_1_1_exports = {};
__export(model_2_1_1_exports, {
  IReactiveModelOptions: () => IReactiveModelOptions,
  ModelProperties: () => ModelProperties,
  ReactiveModel: () => ReactiveModel,
  SetPropertiesResult: () => SetPropertiesResult,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(model_2_1_1_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("zod@3.24.4"), 0);
var dependency_2 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.1.0/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["zod", dependency_1], ["@beyond-js/events/events", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 125977383,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveModel = void 0;
    var _zod = require2("zod");
    var _events = require2("@beyond-js/events/events");
    class ReactiveModel2 extends _events.Events {
      debounceTimeout;
      processing = false;
      processed = false;
      loaded = false;
      #ready = false;
      _reactiveProps = {};
      static isReactive() {
        return true;
      }
      get isReactive() {
        return true;
      }
      //TODO: Validate how to handle the properties
      properties = [];
      // properties of the object
      #isDraft = false;
      get isDraft() {
        return this.#isDraft;
      }
      #propertyNames = /* @__PURE__ */new Set();
      get ready() {
        return this.#ready;
      }
      set ready(value) {
        this.#ready = value;
        this.trigger("ready");
        this.trigger("change");
      }
      schema;
      #initialValues = {};
      get initialValues() {
        return this.#initialValues;
      }
      /**
       * Defines if the model has been modified since it was loaded.
       */
      get unpublished() {
        const properties = this.getProperties() ?? {};
        return Object.keys(properties).some(prop => {
          if (prop === "id") return false;
          if (Array.isArray(properties[prop])) {
            if (properties[prop].length !== this.#initialValues[prop]?.length) return true;
            return JSON.stringify(properties[prop]) !== JSON.stringify(this.#initialValues[prop]);
          }
          if (typeof properties[prop] === "object") {
            if (this[prop] instanceof ReactiveModel2) {
              return this[prop].unpublished;
            }
            return JSON.stringify(properties[prop]) !== JSON.stringify(this.#initialValues[prop]);
          }
          return properties[prop] !== this.#initialValues[prop];
        });
      }
      /**
       * @deprecated Use `unpublished` instead.
       */
      get isUnpublished() {
        return this.unpublished;
      }
      constructor({
        properties,
        ...props
      } = {
        properties: []
      }) {
        super();
        const defaultProps = ["fetching", "fetched", "processing", "processed", "loaded"];
        if (properties) {
          this.properties = properties;
          this.defineReactiveProps(properties, props);
          if (Object.keys(props).length > 0) {
            this.setInitialValues(props);
          }
        }
        this.defineReactiveProps(defaultProps, this.initialValues);
      }
      setInitialValues(specs) {
        if (!specs) return this.#initialValues;
        const values = {};
        this.properties.forEach(property => {
          if (typeof property !== "string") {
            property = property;
            values[property.name] = specs[property.name];
            return;
          }
          if (specs.hasOwnProperty(property)) {
            values[property] = specs[property];
          } else {
            values[property] = void 0;
          }
        });
        this.#isDraft = Object.keys(specs).length === 0;
        this.#initialValues = values;
        return this.#initialValues;
      }
      getProperty(key) {
        return this._reactiveProps[key];
      }
      property = this.getProperty;
      defineReactiveProp(propKey, initialValue, model = false) {
        this._reactiveProps[propKey] = initialValue;
        Object.defineProperty(this, propKey, {
          get: () => {
            return this._reactiveProps[propKey];
          },
          set: newVal => {
            if (model) {
              const instance = this._reactiveProps[propKey];
              this.trigger(`${propKey}.changed`, {
                value: newVal,
                previous: instance.getProperties()
              });
              this.trigger("change");
              this._reactiveProps[propKey].set(newVal);
              return;
            }
            if (newVal !== void 0 && newVal === this._reactiveProps[propKey]) return;
            const previous = this._reactiveProps[propKey];
            this._reactiveProps[propKey] = newVal;
            this.trigger(`${propKey}.changed`, {
              value: newVal,
              previous
            });
            this.trigger("change");
          },
          enumerable: true,
          configurable: true
        });
      }
      /**
       *  Defines the reactive properties of the object.
       * The properties are defined as an array of strings or objects.
       * The objects must have a `name` property with the name of the property and a `value` property with the class of the object.
       * The `value` property can be a class or an object.
       * If the `value` property is a class, the class must extend the `ReactiveModel` class.
       *
       * @param props
       * @param values
       */
      defineReactiveProps(props, values) {
        for (let propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
          if (propKey === void 0) continue;
          if (typeof propKey !== "object") {
            this.#propertyNames.add(propKey);
            let initialValue2 = values?.[propKey] ?? descriptor?.value;
            this.defineReactiveProp(propKey, initialValue2);
            continue;
          }
          const data = propKey;
          const name = data.name;
          let initialValue = values?.[name] ?? descriptor?.value;
          const specs = data.properties ?? {};
          if (typeof data.value !== "function" && typeof data.value !== "object") {
            console.warn(`Invalid value type for  ${name}`);
            continue;
          }
          const parameters = data.value.isCollection ? {
            parent: this
          } : {
            parent: this,
            ...initialValue,
            ...specs
          };
          const instance = new data.value(parameters);
          if (data.value.isCollection) {
            instance.setItems(initialValue);
          }
          this.#propertyNames.add(name);
          this.defineReactiveProp(name, instance, true);
          continue;
        }
      }
      reactiveProps(props) {
        this.defineReactiveProps(props);
      }
      setProperty(propKey, value) {
        this._reactiveProps[propKey] = value;
      }
      validateProperty(propKey, value) {
        if (!this.schema) {
          return {
            valid: true,
            error: null
          };
        }
        if (!this.schema.shape[propKey]) {
          return {
            valid: false,
            error: new _zod.ZodError([{
              path: [propKey],
              message: `Property ${propKey} is not defined in the schema`,
              code: "custom"
            }])
          };
        }
        const propSchema = this.schema.shape[propKey];
        const result = propSchema.safeParse(value);
        if (!result.success) {
          return {
            valid: false,
            error: result.error
          };
        }
        return {
          valid: true,
          error: null
        };
      }
      isSameObject = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      /**
       * Validates the provided properties against the model's Zod schema.
       * Only validates properties that are defined in the model's properties array.
       *
       * @param {Partial<T>} properties - The properties to validate
       * @returns {{ valid: boolean; errors: PropertyValidationErrors<T> }} An object containing:
       *   - `valid`: boolean indicating if all properties are valid
       *   - `errors`: object containing validation errors for each invalid property
       */
      validate(properties) {
        const keys = Object.keys(properties);
        const errors = {};
        const onValidate = prop => {
          if (!this.properties || !this.properties.includes(prop)) {
            console.trace(`is not a property`, prop);
            return;
          }
          const validated = this.validateProperty(prop, properties[prop]);
          if (!validated.valid) {
            errors[prop] = validated.error;
          }
        };
        keys.forEach(onValidate);
        return {
          valid: !!Object.keys(errors).length,
          errors
        };
      }
      set(properties) {
        if (!properties) {
          console.warn("you are trying to set an empty object", this.constructor.name, properties);
          return {
            updated: false
          };
        }
        const keys = Object.keys(properties);
        let updated = false;
        const errors = {};
        const onSet = prop => {
          if (!this.#propertyNames.has(prop)) {
            return;
          }
          const validated = this.validateProperty(prop, properties[prop]);
          if (!validated.valid) {
            errors[prop] = validated;
            return;
          }
          if (this.getProperty(prop)?.isReactive) {
            const instance = this.getProperty(prop);
            instance.set(properties[prop]);
            if (instance.unpublished) updated = true;
            return;
          }
          const isObject = typeof properties[prop] === "object";
          const isSameObject = isObject && this.isSameObject([prop], this[prop]);
          if (this[prop] === properties[prop] || isSameObject) return;
          this[prop] = properties[prop];
          updated = true;
        };
        keys.forEach(onSet);
        if (updated) {
          this.trigger("change");
          this.trigger("set.executed");
        }
        return {
          updated,
          errors
        };
      }
      /**
       * Gets all properties of the model, including nested reactive objects and collections.
       * For collections, it returns the item properties instead of the collection instance.
       *
       * @returns {Partial<T>} An object containing all properties of the model
       */
      getProperties() {
        const props = {};
        const loop = property => {
          let name = property;
          if (typeof property === "object" && property.value.isReactive) {
            name = property.name;
            props[String(name)] = property.value.isCollection ? this[name].getItemProperties() : this[name]?.getProperties();
            return;
          }
          props[String(name)] = this[name];
        };
        this.properties.forEach(loop);
        return props;
      }
      /**
       * Reverts all properties of the model back to their initial values.
       * This is useful for discarding changes and restoring the model to its original state.
       */
      revert() {
        this.set(this.initialValues);
      }
      /**
       * Saves the current state of the model as the new initial state.
       * This marks the model as no longer being a draft and updates the initial values
       * to match the current state. Useful after successfully persisting changes.
       */
      saveChanges() {
        this.#initialValues = this.getProperties();
        this.#isDraft = false;
      }
      /**
       * Triggers an event after a specified delay.
       * @deprecated use trigger method instead.
       * @param {string} event - The name of the event to trigger.
       * @param {Record<string, any>} params - Additional parameters for the event, including an optional `delay` property.
       */
      triggerEvent = (event = "change", params = {}) => {
        this.trigger(event);
      };
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./types/index", {
  hash: 2677658917,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "ReactiveModel",
  "name": "ReactiveModel"
}, {
  "im": "./types/index",
  "from": "ModelProperties",
  "name": "ModelProperties"
}, {
  "im": "./types/index",
  "from": "IReactiveModelOptions",
  "name": "IReactiveModelOptions"
}, {
  "im": "./types/index",
  "from": "SetPropertiesResult",
  "name": "SetPropertiesResult"
}];
var ReactiveModel, ModelProperties, IReactiveModelOptions, SetPropertiesResult;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "ModelProperties") && (ModelProperties = require2 ? require2("./types/index").ModelProperties : value);
  (require2 || prop === "IReactiveModelOptions") && (IReactiveModelOptions = require2 ? require2("./types/index").IReactiveModelOptions : value);
  (require2 || prop === "SetPropertiesResult") && (SetPropertiesResult = require2 ? require2("./types/index").SetPropertiesResult : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsLjIuMS4xLmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvbW9kZWwvaW5kZXgudHMiXSwibmFtZXMiOlsibW9kZWxfMl8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVJlYWN0aXZlTW9kZWxPcHRpb25zIiwiTW9kZWxQcm9wZXJ0aWVzIiwiUmVhY3RpdmVNb2RlbCIsIlNldFByb3BlcnRpZXNSZXN1bHQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3pvZCIsInJlcXVpcmUyIiwiX2V2ZW50cyIsIlJlYWN0aXZlTW9kZWwyIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwicHJvcGVydGllcyIsImlzRHJhZnQiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyIiwic2NoZW1hIiwiaW5pdGlhbFZhbHVlcyIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYWRkIiwiaW5pdGlhbFZhbHVlMiIsImRhdGEiLCJjb25zb2xlIiwid2FybiIsInBhcmFtZXRlcnMiLCJpc0NvbGxlY3Rpb24iLCJwYXJlbnQiLCJzZXRJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRQcm9wZXJ0eSIsInZhbGlkYXRlUHJvcGVydHkiLCJ2YWxpZCIsImVycm9yIiwic2hhcGUiLCJab2RFcnJvciIsInBhdGgiLCJtZXNzYWdlIiwiY29kZSIsInByb3BTY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiaXNTYW1lT2JqZWN0IiwiYSIsImIiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwidXBkYXRlZCIsIm9uU2V0IiwiaGFzIiwiaXNPYmplY3QiLCJsb29wIiwiU3RyaW5nIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJyZXZlcnQiLCJzYXZlQ2hhbmdlcyIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFWLG1CQUFB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S3hCLElBQUksRUFBRXdELGlCQUFBLENBQWlCLElBQzVCLEtBQUt4RCxJQUFJLEdBQUdwQixhQUFBLENBQWE7WUFDN0I7O1VBR0ZZLEtBQUEsQ0FBTStELE1BQUEsQ0FBT3ZELElBQUksQ0FBQyxJQUFJLEtBQUtBLElBQUk7UUFDakM7UUFDQSxLQUFLN0IsVUFBQSxDQUFXMkIsT0FBQSxDQUFRd0QsSUFBSTtRQUM1QixPQUFPOUQsS0FBQTtNQUNUOzs7OztNQU1BaUUsT0FBQSxFQUFNO1FBQ0osS0FBSy9DLEdBQUEsQ0FBSSxLQUFLaEMsYUFBYTtNQUM3Qjs7Ozs7O01BT0FnRixZQUFBLEVBQVc7UUFDVCxLQUFLLENBQUFoRixhQUFBLEdBQWlCLEtBQUtFLGFBQUEsQ0FBYTtRQUN4QyxLQUFLLENBQUFSLE9BQUEsR0FBVztNQUNsQjs7Ozs7OztNQVFBdUYsWUFBQSxHQUFlQSxDQUNiQyxLQUFBLEdBQWdCLFVBQ2hCQyxNQUFBLEdBQThCLE9BQ3RCO1FBQ1IsS0FBS3JGLE9BQUEsQ0FBUW9GLEtBQUs7TUFDcEI7O0lBQ0R2RyxPQUFBLENBQUFMLGFBQUEsR0FBQVUsY0FBQTs7Ozs7O0lBeGFEOztJQUVBbUIsTUFBQSxDQUFBMkIsY0FBQSxDQUFBbkQsT0FBQTtNQUNBa0IsS0FBQTtJQUNBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==