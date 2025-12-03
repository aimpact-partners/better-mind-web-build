System.register(["tslib@2.8.1","react@18.3.1","detect-node-es@1.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["tslib","2.8.1"],["react","18.3.1"],["detect-node-es","1.1.0"],["use-sidecar","1.1.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('tslib@2.8.1', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('detect-node-es@1.1.0', dep)],
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

// .beyond/uimport/temp/use-sidecar.1.1.3.js
var use_sidecar_1_1_3_exports = {};
__export(use_sidecar_1_1_3_exports, {
  createMedium: () => createMedium,
  createSidecarMedium: () => createSidecarMedium,
  exportSidecar: () => exportSidecar,
  renderCar: () => renderCar,
  setConfig: () => setConfig,
  sidecar: () => sidecar,
  useSidecar: () => useSidecar
});
module.exports = __toCommonJS(use_sidecar_1_1_3_exports);

// node_modules/use-sidecar/dist/es2015/env.js
var import_detect_node_es = require("detect-node-es@1.1.0");
var env = {
  isNode: import_detect_node_es.isNode,
  forceCache: false
};

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react = require("react@18.3.1");
var cache = /* @__PURE__ */new WeakMap();
var NO_OPTIONS = {};
function useSidecar(importer, effect) {
  var options = effect && effect.options || NO_OPTIONS;
  if (env.isNode && !options.ssr) {
    return [null, null];
  }
  return useRealSidecar(importer, effect);
}
function useRealSidecar(importer, effect) {
  var options = effect && effect.options || NO_OPTIONS;
  var couldUseCache = env.forceCache || env.isNode && !!options.ssr || !options.async;
  var _a = (0, import_react.useState)(couldUseCache ? function () {
      return cache.get(importer);
    } : void 0),
    Car = _a[0],
    setCar = _a[1];
  var _b = (0, import_react.useState)(null),
    error = _b[0],
    setError = _b[1];
  (0, import_react.useEffect)(function () {
    if (!Car) {
      importer().then(function (car) {
        var resolved = effect ? effect.read() : car.default || car;
        if (!resolved) {
          console.error("Sidecar error: with importer", importer);
          var error_1;
          if (effect) {
            console.error("Sidecar error: with medium", effect);
            error_1 = new Error("Sidecar medium was not found");
          } else {
            error_1 = new Error("Sidecar was not found in exports");
          }
          setError(function () {
            return error_1;
          });
          throw error_1;
        }
        cache.set(importer, resolved);
        setCar(function () {
          return resolved;
        });
      }, function (e) {
        return setError(function () {
          return e;
        });
      });
    }
  }, []);
  return [Car, error];
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var import_tslib = require("tslib@2.8.1");
var React = __toESM(require("react@18.3.1"));
function sidecar(importer, errorComponent) {
  var ErrorCase = function () {
    return errorComponent;
  };
  return function Sidecar(props) {
    var _a = useSidecar(importer, props.sideCar),
      Car = _a[0],
      error = _a[1];
    if (error && errorComponent) {
      return ErrorCase;
    }
    return Car ? React.createElement(Car, (0, import_tslib.__assign)({}, props)) : null;
  };
}

// node_modules/use-sidecar/dist/es2015/config.js
var config = {
  onError: function (e) {
    return console.error(e);
  }
};
var setConfig = function (conf) {
  Object.assign(config, conf);
};

// node_modules/use-sidecar/dist/es2015/medium.js
var import_tslib2 = require("tslib@2.8.1");
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function () {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function (data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function () {
        buffer = buffer.filter(function (x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function (cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function (x) {
          return cb(x);
        },
        filter: function () {
          return buffer;
        }
      };
    },
    assignMedium: function (cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function () {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function () {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function (x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function (filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = (0, import_tslib2.__assign)({
    async: true,
    ssr: false
  }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var import_tslib3 = require("tslib@2.8.1");
var React2 = __toESM(require("react@18.3.1"));
var import_react2 = require("react@18.3.1");
function renderCar(WrappedComponent, defaults) {
  function State(_a) {
    var stateRef = _a.stateRef,
      props = _a.props;
    var renderTarget = (0, import_react2.useCallback)(function SideTarget() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      (0, import_react2.useLayoutEffect)(function () {
        stateRef.current(args);
      });
      return null;
    }, []);
    return React2.createElement(WrappedComponent, (0, import_tslib3.__assign)({}, props, {
      children: renderTarget
    }));
  }
  var Children = React2.memo(function (_a) {
    var stateRef = _a.stateRef,
      defaultState = _a.defaultState,
      children = _a.children;
    var _b = (0, import_react2.useState)(defaultState.current),
      state = _b[0],
      setState = _b[1];
    (0, import_react2.useEffect)(function () {
      stateRef.current = setState;
    }, []);
    return children.apply(void 0, state);
  }, function () {
    return true;
  });
  return function Combiner(props) {
    var defaultState = React2.useRef(defaults(props));
    var ref = React2.useRef(function (state) {
      return defaultState.current = state;
    });
    return React2.createElement(React2.Fragment, null, React2.createElement(State, {
      stateRef: ref,
      props
    }), React2.createElement(Children, {
      stateRef: ref,
      defaultState,
      children: props.children
    }));
  };
}

// node_modules/use-sidecar/dist/es2015/exports.js
var import_tslib4 = require("tslib@2.8.1");
var React3 = __toESM(require("react@18.3.1"));
var SideCar = function (_a) {
  var sideCar = _a.sideCar,
    rest = (0, import_tslib4.__rest)(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React3.createElement(Target, (0, import_tslib4.__assign)({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3VzZS1zaWRlY2FyLjEuMS4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L2Vudi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9ob29rLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L2hvYy5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9jb25maWcuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvbWVkaXVtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L3JlbmRlclByb3AuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvZXhwb3J0cy5qcyJdLCJuYW1lcyI6WyJ1c2Vfc2lkZWNhcl8xXzFfM19leHBvcnRzIiwiX19leHBvcnQiLCJjcmVhdGVNZWRpdW0iLCJjcmVhdGVTaWRlY2FyTWVkaXVtIiwiZXhwb3J0U2lkZWNhciIsInJlbmRlckNhciIsInNldENvbmZpZyIsInNpZGVjYXIiLCJ1c2VTaWRlY2FyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9kZXRlY3Rfbm9kZV9lcyIsInJlcXVpcmUiLCJlbnYiLCJpc05vZGUiLCJmb3JjZUNhY2hlIiwiaW1wb3J0X3JlYWN0IiwiY2FjaGUiLCJXZWFrTWFwIiwiTk9fT1BUSU9OUyIsImltcG9ydGVyIiwiZWZmZWN0Iiwib3B0aW9ucyIsInNzciIsInVzZVJlYWxTaWRlY2FyIiwiY291bGRVc2VDYWNoZSIsImFzeW5jIiwiX2EiLCJ1c2VTdGF0ZSIsImdldCIsIkNhciIsInNldENhciIsIl9iIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInRoZW4iLCJjYXIiLCJyZXNvbHZlZCIsInJlYWQiLCJkZWZhdWx0IiwiY29uc29sZSIsImVycm9yXzEiLCJFcnJvciIsInNldCIsImUiLCJpbXBvcnRfdHNsaWIiLCJSZWFjdCIsIl9fdG9FU00iLCJlcnJvckNvbXBvbmVudCIsIkVycm9yQ2FzZSIsIlNpZGVjYXIiLCJwcm9wcyIsInNpZGVDYXIiLCJjcmVhdGVFbGVtZW50IiwiX19hc3NpZ24iLCJjb25maWciLCJvbkVycm9yIiwiY29uZiIsIk9iamVjdCIsImFzc2lnbiIsImltcG9ydF90c2xpYjIiLCJJdG9JIiwiYSIsImlubmVyQ3JlYXRlTWVkaXVtIiwiZGVmYXVsdHMiLCJtaWRkbGV3YXJlIiwiYnVmZmVyIiwiYXNzaWduZWQiLCJtZWRpdW0iLCJsZW5ndGgiLCJ1c2VNZWRpdW0iLCJkYXRhIiwiaXRlbSIsInB1c2giLCJmaWx0ZXIiLCJ4IiwiYXNzaWduU3luY01lZGl1bSIsImNiIiwiY2JzIiwiZm9yRWFjaCIsImFzc2lnbk1lZGl1bSIsInBlbmRpbmdRdWV1ZSIsImV4ZWN1dGVRdWV1ZSIsImNiczIiLCJjeWNsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1wb3J0X3RzbGliMyIsIlJlYWN0MiIsImltcG9ydF9yZWFjdDIiLCJXcmFwcGVkQ29tcG9uZW50IiwiU3RhdGUiLCJzdGF0ZVJlZiIsInJlbmRlclRhcmdldCIsInVzZUNhbGxiYWNrIiwiU2lkZVRhcmdldCIsImFyZ3MiLCJfaSIsImFyZ3VtZW50cyIsInVzZUxheW91dEVmZmVjdCIsImN1cnJlbnQiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwibWVtbyIsImRlZmF1bHRTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJhcHBseSIsIkNvbWJpbmVyIiwidXNlUmVmIiwicmVmIiwiRnJhZ21lbnQiLCJpbXBvcnRfdHNsaWI0IiwiUmVhY3QzIiwiU2lkZUNhciIsInJlc3QiLCJfX3Jlc3QiLCJUYXJnZXQiLCJpc1NpZGVDYXJFeHBvcnQiLCJleHBvcnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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