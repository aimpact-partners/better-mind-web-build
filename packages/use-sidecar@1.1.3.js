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

// .beyond/uimport/use-sidecar.1.1.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC91c2Utc2lkZWNhci4xLjEuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9lbnYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvaG9vay5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9ob2MuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvY29uZmlnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L21lZGl1bS5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9yZW5kZXJQcm9wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L2V4cG9ydHMuanMiXSwibmFtZXMiOlsidXNlX3NpZGVjYXJfMV8xXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY3JlYXRlTWVkaXVtIiwiY3JlYXRlU2lkZWNhck1lZGl1bSIsImV4cG9ydFNpZGVjYXIiLCJyZW5kZXJDYXIiLCJzZXRDb25maWciLCJzaWRlY2FyIiwidXNlU2lkZWNhciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZGV0ZWN0X25vZGVfZXMiLCJyZXF1aXJlIiwiZW52IiwiaXNOb2RlIiwiZm9yY2VDYWNoZSIsImltcG9ydF9yZWFjdCIsImNhY2hlIiwiV2Vha01hcCIsIk5PX09QVElPTlMiLCJpbXBvcnRlciIsImVmZmVjdCIsIm9wdGlvbnMiLCJzc3IiLCJ1c2VSZWFsU2lkZWNhciIsImNvdWxkVXNlQ2FjaGUiLCJhc3luYyIsIl9hIiwidXNlU3RhdGUiLCJnZXQiLCJDYXIiLCJzZXRDYXIiLCJfYiIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwiY2FyIiwicmVzb2x2ZWQiLCJyZWFkIiwiZGVmYXVsdCIsImNvbnNvbGUiLCJlcnJvcl8xIiwiRXJyb3IiLCJzZXQiLCJlIiwiaW1wb3J0X3RzbGliIiwiUmVhY3QiLCJfX3RvRVNNIiwiZXJyb3JDb21wb25lbnQiLCJFcnJvckNhc2UiLCJTaWRlY2FyIiwicHJvcHMiLCJzaWRlQ2FyIiwiY3JlYXRlRWxlbWVudCIsIl9fYXNzaWduIiwiY29uZmlnIiwib25FcnJvciIsImNvbmYiLCJPYmplY3QiLCJhc3NpZ24iLCJpbXBvcnRfdHNsaWIyIiwiSXRvSSIsImEiLCJpbm5lckNyZWF0ZU1lZGl1bSIsImRlZmF1bHRzIiwibWlkZGxld2FyZSIsImJ1ZmZlciIsImFzc2lnbmVkIiwibWVkaXVtIiwibGVuZ3RoIiwidXNlTWVkaXVtIiwiZGF0YSIsIml0ZW0iLCJwdXNoIiwiZmlsdGVyIiwieCIsImFzc2lnblN5bmNNZWRpdW0iLCJjYiIsImNicyIsImZvckVhY2giLCJhc3NpZ25NZWRpdW0iLCJwZW5kaW5nUXVldWUiLCJleGVjdXRlUXVldWUiLCJjYnMyIiwiY3ljbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImltcG9ydF90c2xpYjMiLCJSZWFjdDIiLCJpbXBvcnRfcmVhY3QyIiwiV3JhcHBlZENvbXBvbmVudCIsIlN0YXRlIiwic3RhdGVSZWYiLCJyZW5kZXJUYXJnZXQiLCJ1c2VDYWxsYmFjayIsIlNpZGVUYXJnZXQiLCJhcmdzIiwiX2kiLCJhcmd1bWVudHMiLCJ1c2VMYXlvdXRFZmZlY3QiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsIm1lbW8iLCJkZWZhdWx0U3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiYXBwbHkiLCJDb21iaW5lciIsInVzZVJlZiIsInJlZiIsIkZyYWdtZW50IiwiaW1wb3J0X3RzbGliNCIsIlJlYWN0MyIsIlNpZGVDYXIiLCJyZXN0IiwiX19yZXN0IiwiVGFyZ2V0IiwiaXNTaWRlQ2FyRXhwb3J0IiwiZXhwb3J0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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