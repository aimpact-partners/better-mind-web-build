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

// .beyond/uimport/temp/@beyond-js/reactive/model.2.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwuMi4xLjEuanMiLCJmaWxlOi8vL19fc291cmNlcy9tb2RlbC9pbmRleC50cyJdLCJuYW1lcyI6WyJtb2RlbF8yXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJJUmVhY3RpdmVNb2RlbE9wdGlvbnMiLCJNb2RlbFByb3BlcnRpZXMiLCJSZWFjdGl2ZU1vZGVsIiwiU2V0UHJvcGVydGllc1Jlc3VsdCIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfem9kIiwicmVxdWlyZTIiLCJfZXZlbnRzIiwiUmVhY3RpdmVNb2RlbDIiLCJFdmVudHMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcm9jZXNzaW5nIiwicHJvY2Vzc2VkIiwibG9hZGVkIiwicmVhZHkiLCJfcmVhY3RpdmVQcm9wcyIsImlzUmVhY3RpdmUiLCJwcm9wZXJ0aWVzIiwiaXNEcmFmdCIsInByb3BlcnR5TmFtZXMiLCJTZXQiLCJ2YWx1ZSIsInRyaWdnZXIiLCJzY2hlbWEiLCJpbml0aWFsVmFsdWVzIiwidW5wdWJsaXNoZWQiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJwcm9wIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsImlzVW5wdWJsaXNoZWQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsInNldEluaXRpYWxWYWx1ZXMiLCJzcGVjcyIsInZhbHVlcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFByb3BlcnR5Iiwia2V5IiwiZGVmaW5lUmVhY3RpdmVQcm9wIiwicHJvcEtleSIsImluaXRpYWxWYWx1ZSIsIm1vZGVsIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJuZXdWYWwiLCJpbnN0YW5jZSIsInByZXZpb3VzIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhZGQiLCJpbml0aWFsVmFsdWUyIiwiZGF0YSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyYW1ldGVycyIsImlzQ29sbGVjdGlvbiIsInBhcmVudCIsInNldEl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJnZXRJdGVtUHJvcGVydGllcyIsInJldmVydCIsInNhdmVDaGFuZ2VzIiwidHJpZ2dlckV2ZW50IiwiZXZlbnQiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVYs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QyxLQUFLeEIsSUFBSSxFQUFFd0QsaUJBQUEsQ0FBaUIsSUFDNUIsS0FBS3hELElBQUksR0FBR3BCLGFBQUEsQ0FBYTtZQUM3Qjs7VUFHRlksS0FBQSxDQUFNK0QsTUFBQSxDQUFPdkQsSUFBSSxDQUFDLElBQUksS0FBS0EsSUFBSTtRQUNqQztRQUNBLEtBQUs3QixVQUFBLENBQVcyQixPQUFBLENBQVF3RCxJQUFJO1FBQzVCLE9BQU85RCxLQUFBO01BQ1Q7Ozs7O01BTUFpRSxPQUFBLEVBQU07UUFDSixLQUFLL0MsR0FBQSxDQUFJLEtBQUtoQyxhQUFhO01BQzdCOzs7Ozs7TUFPQWdGLFlBQUEsRUFBVztRQUNULEtBQUssQ0FBQWhGLGFBQUEsR0FBaUIsS0FBS0UsYUFBQSxDQUFhO1FBQ3hDLEtBQUssQ0FBQVIsT0FBQSxHQUFXO01BQ2xCOzs7Ozs7O01BUUF1RixZQUFBLEdBQWVBLENBQ2JDLEtBQUEsR0FBZ0IsVUFDaEJDLE1BQUEsR0FBOEIsT0FDdEI7UUFDUixLQUFLckYsT0FBQSxDQUFRb0YsS0FBSztNQUNwQjs7SUFDRHZHLE9BQUEsQ0FBQUwsYUFBQSxHQUFBVSxjQUFBOzs7Ozs7SUF4YUQ7O0lBRUFtQixNQUFBLENBQUEyQixjQUFBLENBQUFuRCxPQUFBO01BQ0FrQixLQUFBO0lBQ0EiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9