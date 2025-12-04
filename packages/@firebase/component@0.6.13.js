System.register(["@firebase/util@1.11.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.11.0"],["@firebase/component","0.6.13"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.11.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@firebase/component.0.6.13.js
var component_0_6_13_exports = {};
__export(component_0_6_13_exports, {
  Component: () => Component,
  ComponentContainer: () => ComponentContainer,
  Provider: () => Provider
});
module.exports = __toCommonJS(component_0_6_13_exports);

// node_modules/@firebase/component/dist/esm/index.esm2017.js
var import_util = require("@firebase/util@1.11.0");
var Component = class {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(name, instanceFactory, type) {
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  }
  setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  }
  setServiceProps(props) {
    this.serviceProps = props;
    return this;
  }
  setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  }
};
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var Provider = class {
  constructor(name, container) {
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = /* @__PURE__ */new Map();
    this.instancesDeferred = /* @__PURE__ */new Map();
    this.instancesOptions = /* @__PURE__ */new Map();
    this.onInitCallbacks = /* @__PURE__ */new Map();
  }
  /**
   * @param identifier A provider can provide multiple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(identifier) {
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      const deferred = new import_util.Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {}
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  }
  getImmediate(options) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error(`Service ${this.name} is not available`);
      }
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(component) {
    if (component.name !== this.name) {
      throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
    }
    if (this.component) {
      throw Error(`Component for ${this.name} has already been provided`);
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({
          instanceIdentifier: DEFAULT_ENTRY_NAME
        });
      } catch (e) {}
    }
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      try {
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
        instanceDeferred.resolve(instance);
      } catch (e) {}
    }
  }
  clearInstance(identifier = DEFAULT_ENTRY_NAME) {
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const services = Array.from(this.instances.values());
    await Promise.all([...services.filter(service => "INTERNAL" in service).map(service => service.INTERNAL.delete()), ...services.filter(service => "_delete" in service).map(service => service._delete())]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(identifier = DEFAULT_ENTRY_NAME) {
    return this.instances.has(identifier);
  }
  getOptions(identifier = DEFAULT_ENTRY_NAME) {
    return this.instancesOptions.get(identifier) || {};
  }
  initialize(opts = {}) {
    const {
      options = {}
    } = opts;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
    }
    if (!this.isComponentSet()) {
      throw Error(`Component ${this.name} has not been registered yet`);
    }
    const instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options
    });
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance);
      }
    }
    return instance;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(callback, identifier) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    const existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return () => {
      existingCallbacks.delete(callback);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(instance, identifier) {
    const callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      try {
        callback(instance, identifier);
      } catch (_a) {}
    }
  }
  getOrInitializeService({
    instanceIdentifier,
    options = {}
  }) {
    let instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_a) {}
      }
    }
    return instance || null;
  }
  normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier;
    }
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
};
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
var ComponentContainer = class {
  constructor(name) {
    this.name = name;
    this.providers = /* @__PURE__ */new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
    }
    provider.setComponent(component);
  }
  addOrOverwriteComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(name) {
    if (this.providers.has(name)) {
      return this.providers.get(name);
    }
    const provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
};
/*! Bundled license information:

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvY29tcG9uZW50LjAuNi4xMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvY29tcG9uZW50L3NyYy9jb21wb25lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9zcmMvY29uc3RhbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbXBvbmVudF9jb250YWluZXIudHMiXSwibmFtZXMiOlsiY29tcG9uZW50XzBfNl8xM19leHBvcnRzIiwiX19leHBvcnQiLCJDb21wb25lbnQiLCJDb21wb25lbnRDb250YWluZXIiLCJQcm92aWRlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJpbnN0YW5jZUZhY3RvcnkiLCJ0eXBlIiwibXVsdGlwbGVJbnN0YW5jZXMiLCJzZXJ2aWNlUHJvcHMiLCJpbnN0YW50aWF0aW9uTW9kZSIsIm9uSW5zdGFuY2VDcmVhdGVkIiwic2V0SW5zdGFudGlhdGlvbk1vZGUiLCJtb2RlIiwic2V0TXVsdGlwbGVJbnN0YW5jZXMiLCJzZXRTZXJ2aWNlUHJvcHMiLCJwcm9wcyIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiY2FsbGJhY2siLCJERUZBVUxUX0VOVFJZX05BTUUiLCJjb250YWluZXIiLCJjb21wb25lbnQiLCJpbnN0YW5jZXMiLCJNYXAiLCJpbnN0YW5jZXNEZWZlcnJlZCIsImluc3RhbmNlc09wdGlvbnMiLCJvbkluaXRDYWxsYmFja3MiLCJnZXQiLCJpZGVudGlmaWVyIiwibm9ybWFsaXplZElkZW50aWZpZXIiLCJub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIiLCJoYXMiLCJkZWZlcnJlZCIsImltcG9ydF91dGlsIiwiRGVmZXJyZWQiLCJzZXQiLCJpc0luaXRpYWxpemVkIiwic2hvdWxkQXV0b0luaXRpYWxpemUiLCJpbnN0YW5jZSIsImdldE9ySW5pdGlhbGl6ZVNlcnZpY2UiLCJpbnN0YW5jZUlkZW50aWZpZXIiLCJyZXNvbHZlIiwiZSIsInByb21pc2UiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25zIiwib3B0aW9uYWwiLCJfYSIsIkVycm9yIiwiZ2V0Q29tcG9uZW50Iiwic2V0Q29tcG9uZW50IiwiaXNDb21wb25lbnRFYWdlciIsImluc3RhbmNlRGVmZXJyZWQiLCJlbnRyaWVzIiwiY2xlYXJJbnN0YW5jZSIsImRlbGV0ZSIsInNlcnZpY2VzIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwiUHJvbWlzZSIsImFsbCIsImZpbHRlciIsInNlcnZpY2UiLCJtYXAiLCJJTlRFUk5BTCIsIl9kZWxldGUiLCJpc0NvbXBvbmVudFNldCIsImdldE9wdGlvbnMiLCJpbml0aWFsaXplIiwib3B0cyIsIm5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIiLCJvbkluaXQiLCJleGlzdGluZ0NhbGxiYWNrcyIsIlNldCIsImFkZCIsImV4aXN0aW5nSW5zdGFuY2UiLCJpbnZva2VPbkluaXRDYWxsYmFja3MiLCJjYWxsYmFja3MiLCJub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeSIsInByb3ZpZGVycyIsImFkZENvbXBvbmVudCIsInByb3ZpZGVyIiwiZ2V0UHJvdmlkZXIiLCJhZGRPck92ZXJ3cml0ZUNvbXBvbmVudCIsImdldFByb3ZpZGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxH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b0JvQixVQUFBLEdBQWFULGtCQUFBO1dBQ2xEO01BQ0wsT0FBT1MsVUFBQTs7O0VBSUhTLHFCQUFBLEVBQW9CO0lBQzFCLE9BQ0UsQ0FBQyxDQUFDLEtBQUtoQixTQUFBLElBQ1AsS0FBS0EsU0FBQSxDQUFVWCxpQkFBQSxLQUFpQjs7QUFHckM7QUFHRCxTQUFTcUUsOEJBQThCbkQsVUFBQSxFQUFrQjtFQUN2RCxPQUFPQSxVQUFBLEtBQWVULGtCQUFBLEdBQXFCLFNBQVlTLFVBQUE7QUFDekQ7QUFFQSxTQUFTdUIsaUJBQWlDOUIsU0FBQSxFQUF1QjtFQUMvRCxPQUFPQSxTQUFBLENBQVVYLGlCQUFBLEtBQWlCO0FBQ3BDO0lDaldhWCxrQkFBQSxTQUFrQjtFQUc3QkssWUFBNkJDLElBQUEsRUFBWTtJQUFaLEtBQUlBLElBQUEsR0FBSkEsSUFBQTtJQUZaLEtBQUEyRSxTQUFBLEdBQVksbUJBQUl6RCxHQUFBLENBQUc7Ozs7Ozs7Ozs7O0VBYXBDMEQsYUFBNkI1RCxTQUFBLEVBQXVCO0lBQ2xELE1BQU02RCxRQUFBLEdBQVcsS0FBS0MsV0FBQSxDQUFZOUQsU0FBQSxDQUFVaEIsSUFBSTtJQUNoRCxJQUFJNkUsUUFBQSxDQUFTZixjQUFBLENBQWMsR0FBSTtNQUM3QixNQUFNLElBQUluQixLQUFBLENBQ1IsYUFBYTNCLFNBQUEsQ0FBVWhCLElBQUkscUNBQXFDLEtBQUtBLElBQUksRUFBRTs7SUFJL0U2RSxRQUFBLENBQVNoQyxZQUFBLENBQWE3QixTQUFTOztFQUdqQytELHdCQUF3Qy9ELFNBQUEsRUFBdUI7SUFDN0QsTUFBTTZELFFBQUEsR0FBVyxLQUFLQyxXQUFBLENBQVk5RCxTQUFBLENBQVVoQixJQUFJO0lBQ2hELElBQUk2RSxRQUFBLENBQVNmLGNBQUEsQ0FBYyxHQUFJO01BRTdCLEtBQUthLFNBQUEsQ0FBVXpCLE1BQUEsQ0FBT2xDLFNBQUEsQ0FBVWhCLElBQUk7O0lBR3RDLEtBQUs0RSxZQUFBLENBQWE1RCxTQUFTOzs7Ozs7Ozs7RUFVN0I4RCxZQUE0QjlFLElBQUEsRUFBTztJQUNqQyxJQUFJLEtBQUsyRSxTQUFBLENBQVVqRCxHQUFBLENBQUkxQixJQUFJLEdBQUc7TUFDNUIsT0FBTyxLQUFLMkUsU0FBQSxDQUFVckQsR0FBQSxDQUFJdEIsSUFBSTs7SUFJaEMsTUFBTTZFLFFBQUEsR0FBVyxJQUFJbEYsUUFBQSxDQUFZSyxJQUFBLEVBQU0sSUFBSTtJQUMzQyxLQUFLMkUsU0FBQSxDQUFVN0MsR0FBQSxDQUFJOUIsSUFBQSxFQUFNNkUsUUFBcUM7SUFFOUQsT0FBT0EsUUFBQTs7RUFHVEcsYUFBQSxFQUFZO0lBQ1YsT0FBTzVCLEtBQUEsQ0FBTUMsSUFBQSxDQUFLLEtBQUtzQixTQUFBLENBQVVyQixNQUFBLENBQU0sQ0FBRTs7QUFFNUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9