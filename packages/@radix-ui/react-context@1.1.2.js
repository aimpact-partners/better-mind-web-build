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

// .beyond/uimport/@radix-ui/react-context.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtY29udGV4dC4xLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29udGV4dC9zcmMvY3JlYXRlLWNvbnRleHQudHN4Il0sIm5hbWVzIjpbInJlYWN0X2NvbnRleHRfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY3JlYXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQyIiwiY3JlYXRlQ29udGV4dFNjb3BlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJyb290Q29tcG9uZW50TmFtZSIsImRlZmF1bHRDb250ZXh0IiwiQ29udGV4dCIsIlByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNvbnRleHQiLCJ2YWx1ZSIsInVzZU1lbW8iLCJPYmplY3QiLCJ2YWx1ZXMiLCJqc3giLCJkaXNwbGF5TmFtZSIsInVzZUNvbnRleHQyIiwiY29uc3VtZXJOYW1lIiwidXNlQ29udGV4dCIsIkVycm9yIiwic2NvcGVOYW1lIiwiY3JlYXRlQ29udGV4dFNjb3BlRGVwcyIsImRlZmF1bHRDb250ZXh0cyIsImNyZWF0ZUNvbnRleHQzIiwiQmFzZUNvbnRleHQiLCJpbmRleCIsImxlbmd0aCIsInNjb3BlIiwiY3JlYXRlU2NvcGUiLCJzY29wZUNvbnRleHRzIiwibWFwIiwidXNlU2NvcGUiLCJjb250ZXh0cyIsImNvbXBvc2VDb250ZXh0U2NvcGVzIiwic2NvcGVzIiwiYmFzZVNjb3BlIiwic2NvcGVIb29rcyIsImNyZWF0ZVNjb3BlMiIsInVzZUNvbXBvc2VkU2NvcGVzIiwib3ZlcnJpZGVTY29wZXMiLCJuZXh0U2NvcGVzIiwicmVkdWNlIiwibmV4dFNjb3BlczIiLCJzY29wZVByb3BzIiwiY3VycmVudFNjb3BlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWdCO01BQ2hELE1BQU1DLFVBQUEsR0FBYUosVUFBQSxDQUFXSyxNQUFBLENBQU8sQ0FBQ0MsV0FBQSxFQUFZO1FBQUVYLFFBQUE7UUFBVVg7TUFBVSxNQUFNO1FBSTVFLE1BQU11QixVQUFBLEdBQWFaLFFBQUEsQ0FBU1EsY0FBYztRQUMxQyxNQUFNSyxZQUFBLEdBQWVELFVBQUEsQ0FBVyxVQUFVdkIsU0FBUyxFQUFFO1FBQ3JELE9BQU87VUFBRSxHQUFHc0IsV0FBQTtVQUFZLEdBQUdFO1FBQWE7TUFDMUMsR0FBRyxDQUFDLENBQUM7TUFFTCxPQUFhN0MsS0FBQSxDQUFBWSxPQUFBLENBQVEsT0FBTztRQUFFLENBQUMsVUFBVXdCLFNBQUEsQ0FBVWYsU0FBUyxFQUFFLEdBQUdvQjtNQUFXLElBQUksQ0FBQ0EsVUFBVSxDQUFDO0lBQzlGO0VBQ0Y7RUFFQVosV0FBQSxDQUFZUixTQUFBLEdBQVllLFNBQUEsQ0FBVWYsU0FBQTtFQUNsQyxPQUFPUSxXQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9