System.register(["@beyond-js/kernel@0.1.14/bundle","react@18.3.1","@beyond-js/kernel@0.1.14/core","@beyond-js/kernel@0.1.14/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["react","18.3.1"],["@beyond-js/react-18-widgets","1.1.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/texts', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.1.1.8.js
var hooks_1_1_8_exports = {};
__export(hooks_1_1_8_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useStore: () => useStore,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_1_8_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("react@18.3.1"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.14/texts"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.1.7/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./types", {
  hash: 3826108378,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./use-binder", {
  hash: 2555438798,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var React = require2("react");
    function useBinder2(objects, onBinder, events = "change") {
      const bindEvents = typeof events === "string" ? [events] : events;
      React.useEffect(() => {
        const callback = (object, method) => {
          if (!object[method]) return;
          bindEvents.forEach(event => {
            object[method](event, onBinder);
          });
        };
        objects.forEach(object => callback(object, "on"));
        return () => objects.forEach(object => callback(object, "off"));
      }, []);
    }
  }
});
ims.set("./use-screen", {
  hash: 3220525410,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useScreen = useScreen;
    var _react = require2("react");
    const baseBreaks = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    };
    function useScreen(breaks) {
      const vals = {
        ...baseBreaks,
        ...breaks
      };
      const getKey = w => {
        const list = Object.entries(vals);
        const sorted = list.sort(([, a], [, b]) => b - a);
        for (const [k, min] of sorted) {
          if (w >= min) return k;
        }
        return "xs";
      };
      const hasWin = typeof globalThis !== "undefined" && !!globalThis.window;
      const [state, setState] = (0, _react.useState)(() => {
        const w = hasWin ? globalThis.innerWidth : 0;
        const h = hasWin ? globalThis.innerHeight : 0;
        const k = getKey(w);
        const flags = makeFlags(k, vals, w);
        return {
          width: w,
          height: h,
          key: k,
          ...flags
        };
      });
      (0, _react.useEffect)(() => {
        if (!hasWin) return;
        const update = () => {
          const w = globalThis.innerWidth;
          const h = globalThis.innerHeight;
          const k = getKey(w);
          const flags = makeFlags(k, vals, w);
          setState(prev => {
            if (prev.width !== w || prev.height !== h || prev.key !== k) {
              return {
                width: w,
                height: h,
                key: k,
                ...flags
              };
            }
            return prev;
          });
        };
        update();
        globalThis.addEventListener("resize", update);
        return () => {
          globalThis.removeEventListener("resize", update);
        };
      }, [hasWin, vals]);
      return state;
    }
    function makeFlags(k, vals, w) {
      const xs = k === "xs";
      const sm = k === "sm";
      const md = k === "md";
      const lg = k === "lg";
      const xl = k === "xl";
      const xxl = k === "xxl";
      const isMobile = w < vals.md;
      const isTablet = w >= vals.md && w < vals.lg;
      const isDesktop = w >= vals.lg;
      return {
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        isMobile,
        isTablet,
        isDesktop
      };
    }
  }
});
ims.set("./use-store", {
  hash: 4003274347,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useStore = useStore2;
    var _react = require2("react");
    function useStore2(store, events = ["change"], onListen) {
      if (!Array.isArray(events)) {
        throw new Error("The events parameter must be an array of strings");
      }
      const [, setVersion] = (0, _react.useState)(0);
      (0, _react.useEffect)(() => {
        const handler = (...args) => {
          setVersion(v => v + 1);
          onListen?.(...args);
        };
        events.forEach(event => store.on(event, handler));
        return () => {
          events.forEach(event => store.off(event, handler));
        };
      }, [store, events]);
      return store;
    }
  }
});
ims.set("./use-texts", {
  hash: 2200528805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useTexts = useTexts2;
    var React = require2("react");
    var _texts = require2("@beyond-js/kernel/texts");
    function useTexts2(specifier, key) {
      const [ready, setReady] = React.useState(false);
      const [texts, setTexts] = React.useState({});
      React.useEffect(() => {
        const modelTexts = new _texts.CurrentTexts(specifier);
        const triggerEvent = () => {
          let value = modelTexts.value;
          if (modelTexts.ready && key) {
            if (!value.hasOwnProperty(key)) {
              console.warn(`the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`);
            }
            value = modelTexts.value[key];
          }
          setTexts(value);
          setReady(modelTexts.ready);
        };
        modelTexts.on("change", triggerEvent);
        triggerEvent();
        return () => {
          modelTexts.on("change", triggerEvent);
        };
      }, []);
      const isReady = ready && !!texts;
      return [isReady, texts];
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./use-binder",
  "from": "useBinder",
  "name": "useBinder"
}, {
  "im": "./use-store",
  "from": "useStore",
  "name": "useStore"
}, {
  "im": "./use-texts",
  "from": "useTexts",
  "name": "useTexts"
}];
var useBinder, useStore, useTexts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./use-binder").useBinder : value);
  (require2 || prop === "useStore") && (useStore = require2 ? require2("./use-store").useStore : value);
  (require2 || prop === "useTexts") && (useTexts = require2 ? require2("./use-texts").useTexts : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMS4xLjguanMiLCJmaWxlOi8vL19fc291cmNlcy9ob29rcy90eXBlcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL2hvb2tzL3VzZS1iaW5kZXIudHMiLCJmaWxlOi8vL19fc291cmNlcy9ob29rcy91c2Utc2NyZWVuLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvaG9va3MvdXNlLXN0b3JlLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvaG9va3MvdXNlLXRleHRzLnRzIl0sIm5hbWVzIjpbImhvb2tzXzFfMV84X2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInVzZUJpbmRlciIsInVzZVN0b3JlIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlJlYWN0IiwicmVxdWlyZTIiLCJ1c2VCaW5kZXIyIiwib2JqZWN0cyIsIm9uQmluZGVyIiwiZXZlbnRzIiwiYmluZEV2ZW50cyIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwib2JqZWN0IiwibWV0aG9kIiwiZm9yRWFjaCIsImV2ZW50IiwiX3JlYWN0IiwiYmFzZUJyZWFrcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ4eGwiLCJ1c2VTY3JlZW4iLCJicmVha3MiLCJ2YWxzIiwiZ2V0S2V5IiwidyIsImxpc3QiLCJlbnRyaWVzIiwic29ydGVkIiwic29ydCIsImEiLCJiIiwiayIsIm1pbiIsImhhc1dpbiIsImdsb2JhbFRoaXMiLCJ3aW5kb3ciLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJpbm5lcldpZHRoIiwiaCIsImlubmVySGVpZ2h0IiwiZmxhZ3MiLCJtYWtlRmxhZ3MiLCJ3aWR0aCIsImhlaWdodCIsImtleSIsInVwZGF0ZSIsInByZXYiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJ1c2VTdG9yZTIiLCJzdG9yZSIsIm9uTGlzdGVuIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJzZXRWZXJzaW9uIiwiaGFuZGxlciIsImFyZ3MiLCJ2Iiwib24iLCJvZmYiLCJfdGV4dHMiLCJ1c2VUZXh0czIiLCJzcGVjaWZpZXIiLCJyZWFkeSIsInNldFJlYWR5IiwidGV4dHMiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnNvbGUiLCJ3YXJuIiwiaXNSZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7O0lBRUFVLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSCxPQUFBO01BQ0FJLEtBQUE7SUFDQTs7Ozs7Ozs7Ozs7O0lDSkEsSUFBQUMsS0FBQSxHQUFBQyxRQUFBO0lBU2lCLFNBQ1JDLFdBQVVDLE9BQUEsRUFBMkJDLFFBQUEsRUFBNkJDLE1BQUEsR0FBd0IsVUFBUTtNQUMxRyxNQUFNQyxVQUFBLEdBQXVCLE9BQU9ELE1BQUEsS0FBVyxXQUFXLENBQUNBLE1BQU0sSUFBSUEsTUFBQTtNQUVyRUwsS0FBQSxDQUFNTyxTQUFBLENBQVUsTUFBSztRQUNwQixNQUFNQyxRQUFBLEdBQVdBLENBQUNDLE1BQUEsRUFBd0JDLE1BQUEsS0FBd0I7VUFDakUsSUFBSSxDQUFDRCxNQUFBLENBQU9DLE1BQU0sR0FBRztVQUNyQkosVUFBQSxDQUFXSyxPQUFBLENBQVFDLEtBQUEsSUFBUTtZQUMxQkgsTUFBQSxDQUFPQyxNQUFNLEVBQUVFLEtBQUEsRUFBT1IsUUFBUTtVQUMvQixDQUFDO1FBQ0Y7UUFDQUQsT0FBQSxDQUFRUSxPQUFBLENBQVFGLE1BQUEsSUFBVUQsUUFBQSxDQUFTQyxNQUFBLEVBQVEsSUFBSSxDQUFDO1FBQ2hELE9BQU8sTUFBTU4sT0FBQSxDQUFRUSxPQUFBLENBQVFGLE1BQUEsSUFBVUQsUUFBQSxDQUFTQyxNQUFBLEVBQVEsS0FBSyxDQUFDO01BQy9ELEdBQUcsRUFBRTtJQUNOOzs7Ozs7Ozs7Ozs7SUN2QkEsSUFBQUksTUFBQSxHQUFBWixRQUFBO0lBR0EsTUFBTWEsVUFBQSxHQUFzQjtNQUMzQkMsRUFBQSxFQUFJO01BQ0pDLEVBQUEsRUFBSTtNQUNKQyxFQUFBLEVBQUk7TUFDSkMsRUFBQSxFQUFJO01BQ0pDLEVBQUEsRUFBSTtNQUNKQyxHQUFBLEVBQUs7O0lBcUJBLFNBQVVDLFVBQVVDLE1BQUEsRUFBeUI7TUFDbEQsTUFBTUMsSUFBQSxHQUFPO1FBQUUsR0FBR1QsVUFBQTtRQUFZLEdBQUdRO01BQU07TUFFdkMsTUFBTUUsTUFBQSxHQUFVQyxDQUFBLElBQW1CO1FBQ2xDLE1BQU1DLElBQUEsR0FBTzdCLE1BQUEsQ0FBTzhCLE9BQUEsQ0FBUUosSUFBSTtRQUNoQyxNQUFNSyxNQUFBLEdBQVNGLElBQUEsQ0FBS0csSUFBQSxDQUFLLENBQUMsR0FBR0MsQ0FBQyxHQUFHLEdBQUdDLENBQUMsTUFBTUEsQ0FBQSxHQUFJRCxDQUFDO1FBQ2hELFdBQVcsQ0FBQ0UsQ0FBQSxFQUFHQyxHQUFHLEtBQUtMLE1BQUEsRUFBUTtVQUM5QixJQUFJSCxDQUFBLElBQUtRLEdBQUEsRUFBSyxPQUFPRCxDQUFBOztRQUV0QixPQUFPO01BQ1I7TUFFQSxNQUFNRSxNQUFBLEdBQVMsT0FBT0MsVUFBQSxLQUFlLGVBQWUsQ0FBQyxDQUFDQSxVQUFBLENBQVdDLE1BQUE7TUFFakUsTUFBTSxDQUFDQyxLQUFBLEVBQU9DLFFBQVEsS0FBSSxHQUFBekIsTUFBQSxDQUFBMEIsUUFBQSxFQUF1QixNQUFLO1FBQ3JELE1BQU1kLENBQUEsR0FBSVMsTUFBQSxHQUFTQyxVQUFBLENBQVdLLFVBQUEsR0FBYTtRQUMzQyxNQUFNQyxDQUFBLEdBQUlQLE1BQUEsR0FBU0MsVUFBQSxDQUFXTyxXQUFBLEdBQWM7UUFDNUMsTUFBTVYsQ0FBQSxHQUFJUixNQUFBLENBQU9DLENBQUM7UUFDbEIsTUFBTWtCLEtBQUEsR0FBUUMsU0FBQSxDQUFVWixDQUFBLEVBQUdULElBQUEsRUFBTUUsQ0FBQztRQUNsQyxPQUFPO1VBQUVvQixLQUFBLEVBQU9wQixDQUFBO1VBQUdxQixNQUFBLEVBQVFMLENBQUE7VUFBR00sR0FBQSxFQUFLZixDQUFBO1VBQUcsR0FBR1c7UUFBSztNQUMvQyxDQUFDO01BRUQsSUFBQTlCLE1BQUEsQ0FBQU4sU0FBQSxFQUFVLE1BQUs7UUFDZCxJQUFJLENBQUMyQixNQUFBLEVBQVE7UUFFYixNQUFNYyxNQUFBLEdBQVNBLENBQUEsS0FBSztVQUNuQixNQUFNdkIsQ0FBQSxHQUFJVSxVQUFBLENBQVdLLFVBQUE7VUFDckIsTUFBTUMsQ0FBQSxHQUFJTixVQUFBLENBQVdPLFdBQUE7VUFDckIsTUFBTVYsQ0FBQSxHQUFJUixNQUFBLENBQU9DLENBQUM7VUFDbEIsTUFBTWtCLEtBQUEsR0FBUUMsU0FBQSxDQUFVWixDQUFBLEVBQUdULElBQUEsRUFBTUUsQ0FBQztVQUVsQ2EsUUFBQSxDQUFTVyxJQUFBLElBQU87WUFDZixJQUFJQSxJQUFBLENBQUtKLEtBQUEsS0FBVXBCLENBQUEsSUFBS3dCLElBQUEsQ0FBS0gsTUFBQSxLQUFXTCxDQUFBLElBQUtRLElBQUEsQ0FBS0YsR0FBQSxLQUFRZixDQUFBLEVBQUc7Y0FDNUQsT0FBTztnQkFBRWEsS0FBQSxFQUFPcEIsQ0FBQTtnQkFBR3FCLE1BQUEsRUFBUUwsQ0FBQTtnQkFBR00sR0FBQSxFQUFLZixDQUFBO2dCQUFHLEdBQUdXO2NBQUs7O1lBRS9DLE9BQU9NLElBQUE7VUFDUixDQUFDO1FBQ0Y7UUFFQUQsTUFBQSxDQUFNO1FBQ05iLFVBQUEsQ0FBV2UsZ0JBQUEsQ0FBaUIsVUFBVUYsTUFBTTtRQUU1QyxPQUFPLE1BQUs7VUFDWGIsVUFBQSxDQUFXZ0IsbUJBQUEsQ0FBb0IsVUFBVUgsTUFBTTtRQUNoRDtNQUNELEdBQUcsQ0FBQ2QsTUFBQSxFQUFRWCxJQUFJLENBQUM7TUFFakIsT0FBT2MsS0FBQTtJQUNSO0lBRUEsU0FBU08sVUFBVVosQ0FBQSxFQUFTVCxJQUFBLEVBQWVFLENBQUEsRUFBUztNQUNuRCxNQUFNVixFQUFBLEdBQUtpQixDQUFBLEtBQU07TUFDakIsTUFBTWhCLEVBQUEsR0FBS2dCLENBQUEsS0FBTTtNQUNqQixNQUFNZixFQUFBLEdBQUtlLENBQUEsS0FBTTtNQUNqQixNQUFNZCxFQUFBLEdBQUtjLENBQUEsS0FBTTtNQUNqQixNQUFNYixFQUFBLEdBQUthLENBQUEsS0FBTTtNQUNqQixNQUFNWixHQUFBLEdBQU1ZLENBQUEsS0FBTTtNQUVsQixNQUFNb0IsUUFBQSxHQUFXM0IsQ0FBQSxHQUFJRixJQUFBLENBQUtOLEVBQUE7TUFDMUIsTUFBTW9DLFFBQUEsR0FBVzVCLENBQUEsSUFBS0YsSUFBQSxDQUFLTixFQUFBLElBQU1RLENBQUEsR0FBSUYsSUFBQSxDQUFLTCxFQUFBO01BQzFDLE1BQU1vQyxTQUFBLEdBQVk3QixDQUFBLElBQUtGLElBQUEsQ0FBS0wsRUFBQTtNQUU1QixPQUFPO1FBQUVILEVBQUE7UUFBSUMsRUFBQTtRQUFJQyxFQUFBO1FBQUlDLEVBQUE7UUFBSUMsRUFBQTtRQUFJQyxHQUFBO1FBQUtnQyxRQUFBO1FBQVVDLFFBQUE7UUFBVUM7TUFBUztJQUNoRTs7Ozs7Ozs7Ozs7O0lDN0ZBLElBQUF6QyxNQUFBLEdBQUFaLFFBQUE7SUFXaUIsU0FBVXNELFVBQzFCQyxLQUFBLEVBQ0FuRCxNQUFBLEdBQW1CLENBQUMsUUFBUSxHQUM1Qm9ELFFBQUEsRUFBbUM7TUFFbkMsSUFBSSxDQUFDQyxLQUFBLENBQU1DLE9BQUEsQ0FBUXRELE1BQU0sR0FBRztRQUMzQixNQUFNLElBQUl1RCxLQUFBLENBQU0sa0RBQWtEOztNQUduRSxNQUFNLEdBQUdDLFVBQVUsS0FBSSxHQUFBaEQsTUFBQSxDQUFBMEIsUUFBQSxFQUFTLENBQUM7TUFFakMsSUFBQTFCLE1BQUEsQ0FBQU4sU0FBQSxFQUFVLE1BQUs7UUFDZCxNQUFNdUQsT0FBQSxHQUFVQSxDQUFBLEdBQUlDLElBQUEsS0FBZTtVQUNsQ0YsVUFBQSxDQUFXRyxDQUFBLElBQUtBLENBQUEsR0FBSSxDQUFDO1VBQ3JCUCxRQUFBLEdBQVcsR0FBR00sSUFBSTtRQUNuQjtRQUVBMUQsTUFBQSxDQUFPTSxPQUFBLENBQVFDLEtBQUEsSUFBUzRDLEtBQUEsQ0FBTVMsRUFBQSxDQUFHckQsS0FBQSxFQUFPa0QsT0FBTyxDQUFDO1FBRWhELE9BQU8sTUFBSztVQUNYekQsTUFBQSxDQUFPTSxPQUFBLENBQVFDLEtBQUEsSUFBUzRDLEtBQUEsQ0FBTVUsR0FBQSxDQUFJdEQsS0FBQSxFQUFPa0QsT0FBTyxDQUFDO1FBQ2xEO01BQ0QsR0FBRyxDQUFDTixLQUFBLEVBQU9uRCxNQUFNLENBQUM7TUFHbEIsT0FBT21ELEtBQUE7SUFDUjs7Ozs7Ozs7Ozs7O0lDckNBLElBQUF4RCxLQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBa0UsTUFBQSxHQUFBbEUsUUFBQTtJQUVpQixTQUNSbUUsVUFBU0MsU0FBQSxFQUFtQnRCLEdBQUEsRUFBWTtNQUNoRCxNQUFNLENBQUN1QixLQUFBLEVBQU9DLFFBQVEsSUFBSXZFLEtBQUEsQ0FBTXVDLFFBQUEsQ0FBUyxLQUFLO01BQzlDLE1BQU0sQ0FBQ2lDLEtBQUEsRUFBT0MsUUFBUSxJQUFJekUsS0FBQSxDQUFNdUMsUUFBQSxDQUFTLEVBQUU7TUFFM0N2QyxLQUFBLENBQU1PLFNBQUEsQ0FBVSxNQUFLO1FBQ3BCLE1BQU1tRSxVQUFBLEdBQWEsSUFBSVAsTUFBQSxDQUFBUSxZQUFBLENBQWFOLFNBQVM7UUFDN0MsTUFBTU8sWUFBQSxHQUFlQSxDQUFBLEtBQUs7VUFDekIsSUFBSTdFLEtBQUEsR0FBUTJFLFVBQUEsQ0FBVzNFLEtBQUE7VUFDdkIsSUFBSTJFLFVBQUEsQ0FBV0osS0FBQSxJQUFTdkIsR0FBQSxFQUFLO1lBQzVCLElBQUksQ0FBQ2hELEtBQUEsQ0FBTThFLGNBQUEsQ0FBZTlCLEdBQUcsR0FBRztjQUMvQitCLE9BQUEsQ0FBUUMsSUFBQSxDQUNQLDBEQUEwRGhDLEdBQUcsdUJBQXVCc0IsU0FBUyxFQUFFOztZQUlqR3RFLEtBQUEsR0FBUTJFLFVBQUEsQ0FBVzNFLEtBQUEsQ0FBTWdELEdBQUc7O1VBRTdCMEIsUUFBQSxDQUFTMUUsS0FBSztVQUNkd0UsUUFBQSxDQUFTRyxVQUFBLENBQVdKLEtBQUs7UUFDMUI7UUFDQUksVUFBQSxDQUFXVCxFQUFBLENBQUcsVUFBVVcsWUFBWTtRQUNwQ0EsWUFBQSxDQUFZO1FBQ1osT0FBTyxNQUFLO1VBQ1hGLFVBQUEsQ0FBV1QsRUFBQSxDQUFHLFVBQVVXLFlBQVk7UUFDckM7TUFDRCxHQUFHLEVBQUU7TUFDTCxNQUFNSSxPQUFBLEdBQVVWLEtBQUEsSUFBUyxDQUFDLENBQUNFLEtBQUE7TUFDM0IsT0FBTyxDQUFDUSxPQUFBLEVBQVNSLEtBQUs7SUFDdkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9