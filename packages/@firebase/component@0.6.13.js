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

// .beyond/uimport/temp/@firebase/component.0.6.13.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9jb21wb25lbnQuMC42LjEzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbXBvbmVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvY29tcG9uZW50L3NyYy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9zcmMvcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9zcmMvY29tcG9uZW50X2NvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJjb21wb25lbnRfMF82XzEzX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudENvbnRhaW5lciIsIlByb3ZpZGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImNvbnN0cnVjdG9yIiwibmFtZSIsImluc3RhbmNlRmFjdG9yeSIsInR5cGUiLCJtdWx0aXBsZUluc3RhbmNlcyIsInNlcnZpY2VQcm9wcyIsImluc3RhbnRpYXRpb25Nb2RlIiwib25JbnN0YW5jZUNyZWF0ZWQiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsIm1vZGUiLCJzZXRNdWx0aXBsZUluc3RhbmNlcyIsInNldFNlcnZpY2VQcm9wcyIsInByb3BzIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJjYWxsYmFjayIsIkRFRkFVTFRfRU5UUllfTkFNRSIsImNvbnRhaW5lciIsImNvbXBvbmVudCIsImluc3RhbmNlcyIsIk1hcCIsImluc3RhbmNlc0RlZmVycmVkIiwiaW5zdGFuY2VzT3B0aW9ucyIsIm9uSW5pdENhbGxiYWNrcyIsImdldCIsImlkZW50aWZpZXIiLCJub3JtYWxpemVkSWRlbnRpZmllciIsIm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllciIsImhhcyIsImRlZmVycmVkIiwiaW1wb3J0X3V0aWwiLCJEZWZlcnJlZCIsInNldCIsImlzSW5pdGlhbGl6ZWQiLCJzaG91bGRBdXRvSW5pdGlhbGl6ZSIsImluc3RhbmNlIiwiZ2V0T3JJbml0aWFsaXplU2VydmljZSIsImluc3RhbmNlSWRlbnRpZmllciIsInJlc29sdmUiLCJlIiwicHJvbWlzZSIsImdldEltbWVkaWF0ZSIsIm9wdGlvbnMiLCJvcHRpb25hbCIsIl9hIiwiRXJyb3IiLCJnZXRDb21wb25lbnQiLCJzZXRDb21wb25lbnQiLCJpc0NvbXBvbmVudEVhZ2VyIiwiaW5zdGFuY2VEZWZlcnJlZCIsImVudHJpZXMiLCJjbGVhckluc3RhbmNlIiwiZGVsZXRlIiwic2VydmljZXMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJQcm9taXNlIiwiYWxsIiwiZmlsdGVyIiwic2VydmljZSIsIm1hcCIsIklOVEVSTkFMIiwiX2RlbGV0ZSIsImlzQ29tcG9uZW50U2V0IiwiZ2V0T3B0aW9ucyIsImluaXRpYWxpemUiLCJvcHRzIiwibm9ybWFsaXplZERlZmVycmVkSWRlbnRpZmllciIsIm9uSW5pdCIsImV4aXN0aW5nQ2FsbGJhY2tzIiwiU2V0IiwiYWRkIiwiZXhpc3RpbmdJbnN0YW5jZSIsImludm9rZU9uSW5pdENhbGxiYWNrcyIsImNhbGxiYWNrcyIsIm5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5IiwicHJvdmlkZXJzIiwiYWRkQ29tcG9uZW50IiwicHJvdmlkZXIiLCJnZXRQcm92aWRlciIsImFkZE9yT3ZlcndyaXRlQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQTtBQUFBQyxRQUFBLENBQUFELHdCQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxP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QSxHQUFvQm9CLFVBQUEsR0FBYVQsa0JBQUE7V0FDbEQ7TUFDTCxPQUFPUyxVQUFBOzs7RUFJSFMscUJBQUEsRUFBb0I7SUFDMUIsT0FDRSxDQUFDLENBQUMsS0FBS2hCLFNBQUEsSUFDUCxLQUFLQSxTQUFBLENBQVVYLGlCQUFBLEtBQWlCOztBQUdyQztBQUdELFNBQVNxRSw4QkFBOEJuRCxVQUFBLEVBQWtCO0VBQ3ZELE9BQU9BLFVBQUEsS0FBZVQsa0JBQUEsR0FBcUIsU0FBWVMsVUFBQTtBQUN6RDtBQUVBLFNBQVN1QixpQkFBaUM5QixTQUFBLEVBQXVCO0VBQy9ELE9BQU9BLFNBQUEsQ0FBVVgsaUJBQUEsS0FBaUI7QUFDcEM7SUNqV2FYLGtCQUFBLFNBQWtCO0VBRzdCSyxZQUE2QkMsSUFBQSxFQUFZO0lBQVosS0FBSUEsSUFBQSxHQUFKQSxJQUFBO0lBRlosS0FBQTJFLFNBQUEsR0FBWSxtQkFBSXpELEdBQUEsQ0FBRzs7Ozs7Ozs7Ozs7RUFhcEMwRCxhQUE2QjVELFNBQUEsRUFBdUI7SUFDbEQsTUFBTTZELFFBQUEsR0FBVyxLQUFLQyxXQUFBLENBQVk5RCxTQUFBLENBQVVoQixJQUFJO0lBQ2hELElBQUk2RSxRQUFBLENBQVNmLGNBQUEsQ0FBYyxHQUFJO01BQzdCLE1BQU0sSUFBSW5CLEtBQUEsQ0FDUixhQUFhM0IsU0FBQSxDQUFVaEIsSUFBSSxxQ0FBcUMsS0FBS0EsSUFBSSxFQUFFOztJQUkvRTZFLFFBQUEsQ0FBU2hDLFlBQUEsQ0FBYTdCLFNBQVM7O0VBR2pDK0Qsd0JBQXdDL0QsU0FBQSxFQUF1QjtJQUM3RCxNQUFNNkQsUUFBQSxHQUFXLEtBQUtDLFdBQUEsQ0FBWTlELFNBQUEsQ0FBVWhCLElBQUk7SUFDaEQsSUFBSTZFLFFBQUEsQ0FBU2YsY0FBQSxDQUFjLEdBQUk7TUFFN0IsS0FBS2EsU0FBQSxDQUFVekIsTUFBQSxDQUFPbEMsU0FBQSxDQUFVaEIsSUFBSTs7SUFHdEMsS0FBSzRFLFlBQUEsQ0FBYTVELFNBQVM7Ozs7Ozs7OztFQVU3QjhELFlBQTRCOUUsSUFBQSxFQUFPO0lBQ2pDLElBQUksS0FBSzJFLFNBQUEsQ0FBVWpELEdBQUEsQ0FBSTFCLElBQUksR0FBRztNQUM1QixPQUFPLEtBQUsyRSxTQUFBLENBQVVyRCxHQUFBLENBQUl0QixJQUFJOztJQUloQyxNQUFNNkUsUUFBQSxHQUFXLElBQUlsRixRQUFBLENBQVlLLElBQUEsRUFBTSxJQUFJO0lBQzNDLEtBQUsyRSxTQUFBLENBQVU3QyxHQUFBLENBQUk5QixJQUFBLEVBQU02RSxRQUFxQztJQUU5RCxPQUFPQSxRQUFBOztFQUdURyxhQUFBLEVBQVk7SUFDVixPQUFPNUIsS0FBQSxDQUFNQyxJQUFBLENBQUssS0FBS3NCLFNBQUEsQ0FBVXJCLE1BQUEsQ0FBTSxDQUFFOztBQUU1QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=