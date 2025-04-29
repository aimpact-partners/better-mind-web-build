System.register(["@beyond-js/kernel@0.1.12/bundle","zod@3.24.2","@beyond-js/events@0.0.7/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.24.2"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.0.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('zod@3.24.2', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep)],
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

// .beyond/uimport/temp/@beyond-js/reactive/model.2.0.4.js
var model_2_0_4_exports = {};
__export(model_2_0_4_exports, {
  IReactiveModelOptions: () => IReactiveModelOptions,
  ModelProperties: () => ModelProperties,
  ReactiveModel: () => ReactiveModel,
  SetPropertiesResult: () => SetPropertiesResult,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(model_2_0_4_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("zod@3.24.2"), 0);
var dependency_2 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@2.0.4/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["zod", dependency_1], ["@beyond-js/events/events", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2618136282,
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
      properties = [];
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
      revert() {
        this.set(this.initialValues);
      }
      saveChanges() {
        this.#initialValues = this.getProperties();
        this.#isDraft = false;
      }
      triggerEvent = (event = "change", params = {}) => {
        this.trigger(event);
      };
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./types/index", {
  hash: 2949560397,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwuMi4wLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvaW5kZXgudHMiXSwibmFtZXMiOlsibW9kZWxfMl8wXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVJlYWN0aXZlTW9kZWxPcHRpb25zIiwiTW9kZWxQcm9wZXJ0aWVzIiwiUmVhY3RpdmVNb2RlbCIsIlNldFByb3BlcnRpZXNSZXN1bHQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3pvZCIsInJlcXVpcmUyIiwiX2V2ZW50cyIsIlJlYWN0aXZlTW9kZWwyIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwicHJvcGVydGllcyIsImlzRHJhZnQiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyIiwic2NoZW1hIiwiaW5pdGlhbFZhbHVlcyIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYWRkIiwiaW5pdGlhbFZhbHVlMiIsImRhdGEiLCJjb25zb2xlIiwid2FybiIsInBhcmFtZXRlcnMiLCJpc0NvbGxlY3Rpb24iLCJwYXJlbnQiLCJzZXRJdGVtcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRQcm9wZXJ0eSIsInZhbGlkYXRlUHJvcGVydHkiLCJ2YWxpZCIsImVycm9yIiwic2hhcGUiLCJab2RFcnJvciIsInBhdGgiLCJtZXNzYWdlIiwiY29kZSIsInByb3BTY2hlbWEiLCJyZXN1bHQiLCJzYWZlUGFyc2UiLCJzdWNjZXNzIiwiaXNTYW1lT2JqZWN0IiwiYSIsImIiLCJ2YWxpZGF0ZSIsImVycm9ycyIsIm9uVmFsaWRhdGUiLCJpbmNsdWRlcyIsInRyYWNlIiwidmFsaWRhdGVkIiwidXBkYXRlZCIsIm9uU2V0IiwiaGFzIiwiaXNPYmplY3QiLCJsb29wIiwiU3RyaW5nIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJyZXZlcnQiLCJzYXZlQ2hhbmdlcyIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFB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LENBQWlCLElBQzVCLEtBQUt4RCxJQUFBLEdBQU9wQixhQUFBLENBQWE7WUFDNUI7O1VBR0RZLEtBQUEsQ0FBTStELE1BQUEsQ0FBT3ZELElBQUksS0FBSyxLQUFLQSxJQUFBO1FBQzVCO1FBQ0EsS0FBSzdCLFVBQUEsQ0FBVzJCLE9BQUEsQ0FBUXdELElBQUk7UUFDNUIsT0FBTzlELEtBQUE7TUFDUjtNQU1BaUUsT0FBQSxFQUFNO1FBQ0wsS0FBSy9DLEdBQUEsQ0FBSSxLQUFLaEMsYUFBYTtNQUM1QjtNQU9BZ0YsWUFBQSxFQUFXO1FBQ1YsS0FBSyxDQUFBaEYsYUFBQSxHQUFpQixLQUFLRSxhQUFBLENBQWE7UUFDeEMsS0FBSyxDQUFBUixPQUFBLEdBQVc7TUFDakI7TUFRQXVGLFlBQUEsR0FBZUEsQ0FBQ0MsS0FBQSxHQUFnQixVQUFVQyxNQUFBLEdBQThCLE9BQVk7UUFDbkYsS0FBS3JGLE9BQUEsQ0FBUW9GLEtBQUs7TUFDbkI7O0lBQ0F2RyxPQUFBLENBQUFMLGFBQUEsR0FBQVUsY0FBQTs7Ozs7O0lBeFhEOztJQUVBbUIsTUFBQSxDQUFBMkIsY0FBQSxDQUFBbkQsT0FBQTtNQUNBa0IsS0FBQTtJQUNBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9