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

// .beyond/uimport/@beyond-js/reactive/model.2.0.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0aXZlL21vZGVsLjIuMC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwvX19zb3VyY2VzL21vZGVsL2luZGV4LnRzIl0sIm5hbWVzIjpbIm1vZGVsXzJfMF80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklSZWFjdGl2ZU1vZGVsT3B0aW9ucyIsIk1vZGVsUHJvcGVydGllcyIsIlJlYWN0aXZlTW9kZWwiLCJTZXRQcm9wZXJ0aWVzUmVzdWx0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl96b2QiLCJyZXF1aXJlMiIsIl9ldmVudHMiLCJSZWFjdGl2ZU1vZGVsMiIsIkV2ZW50cyIsImRlYm91bmNlVGltZW91dCIsInByb2Nlc3NpbmciLCJwcm9jZXNzZWQiLCJsb2FkZWQiLCJyZWFkeSIsIl9yZWFjdGl2ZVByb3BzIiwiaXNSZWFjdGl2ZSIsInByb3BlcnRpZXMiLCJpc0RyYWZ0IiwicHJvcGVydHlOYW1lcyIsIlNldCIsInZhbHVlIiwidHJpZ2dlciIsInNjaGVtYSIsImluaXRpYWxWYWx1ZXMiLCJ1bnB1Ymxpc2hlZCIsImdldFByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsInByb3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiaXNVbnB1Ymxpc2hlZCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJkZWZpbmVSZWFjdGl2ZVByb3BzIiwic2V0SW5pdGlhbFZhbHVlcyIsInNwZWNzIiwidmFsdWVzIiwiZm9yRWFjaCIsInByb3BlcnR5IiwibmFtZSIsImhhc093blByb3BlcnR5IiwiZ2V0UHJvcGVydHkiLCJrZXkiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcm9wS2V5IiwiaW5pdGlhbFZhbHVlIiwibW9kZWwiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsIm5ld1ZhbCIsImluc3RhbmNlIiwicHJldmlvdXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFkZCIsImluaXRpYWxWYWx1ZTIiLCJkYXRhIiwiY29uc29sZSIsIndhcm4iLCJwYXJhbWV0ZXJzIiwiaXNDb2xsZWN0aW9uIiwicGFyZW50Iiwic2V0SXRlbXMiLCJyZWFjdGl2ZVByb3BzIiwic2V0UHJvcGVydHkiLCJ2YWxpZGF0ZVByb3BlcnR5IiwidmFsaWQiLCJlcnJvciIsInNoYXBlIiwiWm9kRXJyb3IiLCJwYXRoIiwibWVzc2FnZSIsImNvZGUiLCJwcm9wU2NoZW1hIiwicmVzdWx0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsImlzU2FtZU9iamVjdCIsImEiLCJiIiwidmFsaWRhdGUiLCJlcnJvcnMiLCJvblZhbGlkYXRlIiwiaW5jbHVkZXMiLCJ0cmFjZSIsInZhbGlkYXRlZCIsInVwZGF0ZWQiLCJvblNldCIsImhhcyIsImlzT2JqZWN0IiwibG9vcCIsIlN0cmluZyIsImdldEl0ZW1Qcm9wZXJ0aWVzIiwicmV2ZXJ0Iiwic2F2ZUNoYW5nZXMiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFB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QixJQUM1QixLQUFLeEQsSUFBQSxHQUFPcEIsYUFBQSxDQUFhO1lBQzVCOztVQUdEWSxLQUFBLENBQU0rRCxNQUFBLENBQU92RCxJQUFJLEtBQUssS0FBS0EsSUFBQTtRQUM1QjtRQUNBLEtBQUs3QixVQUFBLENBQVcyQixPQUFBLENBQVF3RCxJQUFJO1FBQzVCLE9BQU85RCxLQUFBO01BQ1I7TUFNQWlFLE9BQUEsRUFBTTtRQUNMLEtBQUsvQyxHQUFBLENBQUksS0FBS2hDLGFBQWE7TUFDNUI7TUFPQWdGLFlBQUEsRUFBVztRQUNWLEtBQUssQ0FBQWhGLGFBQUEsR0FBaUIsS0FBS0UsYUFBQSxDQUFhO1FBQ3hDLEtBQUssQ0FBQVIsT0FBQSxHQUFXO01BQ2pCO01BUUF1RixZQUFBLEdBQWVBLENBQUNDLEtBQUEsR0FBZ0IsVUFBVUMsTUFBQSxHQUE4QixPQUFZO1FBQ25GLEtBQUtyRixPQUFBLENBQVFvRixLQUFLO01BQ25COztJQUNBdkcsT0FBQSxDQUFBTCxhQUFBLEdBQUFVLGNBQUE7Ozs7OztJQXhYRDs7SUFFQW1CLE1BQUEsQ0FBQTJCLGNBQUEsQ0FBQW5ELE9BQUE7TUFDQWtCLEtBQUE7SUFDQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==