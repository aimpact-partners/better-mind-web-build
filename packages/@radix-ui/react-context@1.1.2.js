System.register(["react@18.3.1","react@18.3.1/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-context","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-context.1.1.2.js
var react_context_1_1_2_exports = {};
__export(react_context_1_1_2_exports, {
  createContext: () => createContext2,
  createContextScope: () => createContextScope
});
module.exports = __toCommonJS(react_context_1_1_2_exports);

// node_modules/@radix-ui/react-context/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
function createContext2(rootComponentName, defaultContext) {
  const Context = React.createContext(defaultContext);
  const Provider = props => {
    const {
      children,
      ...context
    } = props;
    const value = React.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Context.Provider, {
      value,
      children
    });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = React.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = React.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = props => {
      const {
        scope,
        children,
        ...context
      } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Context.Provider, {
        value,
        children
      });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map(defaultContext => {
      return React.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React.useMemo(() => ({
        [`__scope${scopeName}`]: {
          ...scope,
          [scopeName]: contexts
        }
      }), [scope, contexts]);
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map(createScope2 => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, {
        useScope,
        scopeName
      }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes2,
          ...currentScope
        };
      }, {});
      return React.useMemo(() => ({
        [`__scope${baseScope.scopeName}`]: nextScopes
      }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1jb250ZXh0LjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb250ZXh0L3NyYy9jcmVhdGUtY29udGV4dC50c3giXSwibmFtZXMiOlsicmVhY3RfY29udGV4dF8xXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJjcmVhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dDIiLCJjcmVhdGVDb250ZXh0U2NvcGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9qc3hfcnVudGltZSIsInJvb3RDb21wb25lbnROYW1lIiwiZGVmYXVsdENvbnRleHQiLCJDb250ZXh0IiwiUHJvdmlkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiY29udGV4dCIsInZhbHVlIiwidXNlTWVtbyIsIk9iamVjdCIsInZhbHVlcyIsImpzeCIsImRpc3BsYXlOYW1lIiwidXNlQ29udGV4dDIiLCJjb25zdW1lck5hbWUiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJzY29wZU5hbWUiLCJjcmVhdGVDb250ZXh0U2NvcGVEZXBzIiwiZGVmYXVsdENvbnRleHRzIiwiY3JlYXRlQ29udGV4dDMiLCJCYXNlQ29udGV4dCIsImluZGV4IiwibGVuZ3RoIiwic2NvcGUiLCJjcmVhdGVTY29wZSIsInNjb3BlQ29udGV4dHMiLCJtYXAiLCJ1c2VTY29wZSIsImNvbnRleHRzIiwiY29tcG9zZUNvbnRleHRTY29wZXMiLCJzY29wZXMiLCJiYXNlU2NvcGUiLCJzY29wZUhvb2tzIiwiY3JlYXRlU2NvcGUyIiwidXNlQ29tcG9zZWRTY29wZXMiLCJvdmVycmlkZVNjb3BlcyIsIm5leHRTY29wZXMiLCJyZWR1Y2UiLCJuZXh0U2NvcGVzMiIsInNjb3BlUHJvcHMiLCJjdXJyZW50U2NvcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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QUEsRUFBZ0I7TUFDaEQsTUFBTUMsVUFBQSxHQUFhSixVQUFBLENBQVdLLE1BQUEsQ0FBTyxDQUFDQyxXQUFBLEVBQVk7UUFBRVgsUUFBQTtRQUFVWDtNQUFVLE1BQU07UUFJNUUsTUFBTXVCLFVBQUEsR0FBYVosUUFBQSxDQUFTUSxjQUFjO1FBQzFDLE1BQU1LLFlBQUEsR0FBZUQsVUFBQSxDQUFXLFVBQVV2QixTQUFTLEVBQUU7UUFDckQsT0FBTztVQUFFLEdBQUdzQixXQUFBO1VBQVksR0FBR0U7UUFBYTtNQUMxQyxHQUFHLENBQUMsQ0FBQztNQUVMLE9BQWE3QyxLQUFBLENBQUFZLE9BQUEsQ0FBUSxPQUFPO1FBQUUsQ0FBQyxVQUFVd0IsU0FBQSxDQUFVZixTQUFTLEVBQUUsR0FBR29CO01BQVcsSUFBSSxDQUFDQSxVQUFVLENBQUM7SUFDOUY7RUFDRjtFQUVBWixXQUFBLENBQVlSLFNBQUEsR0FBWWUsU0FBQSxDQUFVZixTQUFBO0VBQ2xDLE9BQU9RLFdBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=