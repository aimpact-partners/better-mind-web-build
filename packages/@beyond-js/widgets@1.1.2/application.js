System.register(["@beyond-js/kernel@0.1.14/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["@beyond-js/widgets","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/application.1.1.2.js
var application_1_1_2_exports = {};
__export(application_1_1_2_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(application_1_1_2_exports);

// node_modules/@beyond-js/widgets/application/application.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@1.1.2/application"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./startup", {
  hash: 547742268,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function createLayout(config) {
      const {
        layout
      } = config;
      const element = document.createElement(layout ? layout : "beyond-layout-children");
      document.body.append(element);
    }
    function startup() {
      const promises = [];
      const {
        specifier
      } = globalThis.__app_package;
      promises.push(bimport(`${specifier}/config`));
      promises.push(bimport(`${specifier}/start`));
      promises.push(bimport("@beyond-js/kernel/core"));
      promises.push(bimport("@beyond-js/kernel/routing"));
      promises.push(bimport("@beyond-js/widgets/routing"));
      promises.push(bimport("@beyond-js/widgets/layout"));
      Promise.all(promises).then(([{
        default: config
      }]) => createLayout(config)).catch(exc => console.log(exc.stack));
    }
    (() => {
      if (!globalThis.__ssr_fetch) {
        startup();
        return;
      }
      window.__ssr_fetch.then(ssr => {
        if (!ssr.json || ssr.json.errors?.length) {
          console.error("Error getting ssr data:", ssr.json.errors);
          startup();
          return;
        }
        const promises = [];
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/config`));
        promises.push(bimport(`${specifier}/start`));
        promises.push(bimport("@beyond-js/widgets/render"));
        promises.push(bimport("@beyond-js/widgets/layout"));
        Promise.all(promises).then(([{
          default: config
        },, render, layout]) => {
          const specs = new Map(ssr.json.widgets.specs);
          render.widgets.register([...specs.values()]);
          const instances = ssr.json.widgets.instances;
          const prerender = render.prerender;
          instances.forEach(instance => prerender.ssr.push(instance));
          const lssr = layout.ssr;
          lssr.data(ssr.json.main, ssr.json.page);
          createLayout(config);
        }).catch(exc => console.log(exc.stack));
      });
    })();
  }
});
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9hcHBsaWNhdGlvbi4xLjEuMi5qcyIsImZpbGU6Ly8vX19zb3VyY2VzL2FwcGxpY2F0aW9uL3N0YXJ0dXAudHMiXSwibmFtZXMiOlsiYXBwbGljYXRpb25fMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImNyZWF0ZUxheW91dCIsImNvbmZpZyIsImxheW91dCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kIiwic3RhcnR1cCIsInByb21pc2VzIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJwdXNoIiwiYmltcG9ydCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiZGVmYXVsdCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwiX19zc3JfZmV0Y2giLCJ3aW5kb3ciLCJzc3IiLCJqc29uIiwiZXJyb3JzIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW5kZXIiLCJzcGVjcyIsIk1hcCIsIndpZGdldHMiLCJyZWdpc3RlciIsInZhbHVlcyIsImluc3RhbmNlcyIsInByZXJlbmRlciIsImZvckVhY2giLCJpbnN0YW5jZSIsImxzc3IiLCJkYXRhIiwibWFpbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEseUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx5QkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTix5QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tBLFNBQVNPLGFBQWFDLE1BQUEsRUFBVztNQUNoQyxNQUFNO1FBQUVDO01BQU0sSUFBS0QsTUFBQTtNQUNuQixNQUFNRSxPQUFBLEdBQVVDLFFBQUEsQ0FBU0MsYUFBQSxDQUFjSCxNQUFBLEdBQVNBLE1BQUEsR0FBUyx3QkFBd0I7TUFDakZFLFFBQUEsQ0FBU0UsSUFBQSxDQUFLQyxNQUFBLENBQU9KLE9BQU87SUFDN0I7SUFFQSxTQUFTSyxRQUFBLEVBQU87TUFDZixNQUFNQyxRQUFBLEdBQTJCO01BRWpDLE1BQU07UUFBRUM7TUFBUyxJQUFXQyxVQUFBLENBQVlDLGFBQUE7TUFDeENILFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsR0FBR0osU0FBUyxTQUFTLENBQUM7TUFDNUNELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsR0FBR0osU0FBUyxRQUFRLENBQUM7TUFFM0NELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsd0JBQXdCLENBQUM7TUFDL0NMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7TUFDbERMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsNEJBQTRCLENBQUM7TUFDbkRMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7TUFFbERDLE9BQUEsQ0FBUUMsR0FBQSxDQUFJUCxRQUFRLEVBQ2xCUSxJQUFBLENBQUssQ0FBQyxDQUFDO1FBQUVDLE9BQUEsRUFBU2pCO01BQU0sQ0FBRSxNQUFNRCxZQUFBLENBQWFDLE1BQU0sQ0FBQyxFQUNwRGtCLEtBQUEsQ0FBTUMsR0FBQSxJQUFPQyxPQUFBLENBQVFDLEdBQUEsQ0FBSUYsR0FBQSxDQUFJRyxLQUFLLENBQUM7SUFDdEM7SUFFQSxDQUFDLE1BQUs7TUFDTCxJQUFJLENBQU9aLFVBQUEsQ0FBWWEsV0FBQSxFQUFhO1FBQ25DaEIsT0FBQSxDQUFPO1FBQ1A7O01BTUtpQixNQUFBLENBQVFELFdBQUEsQ0FBWVAsSUFBQSxDQUFNUyxHQUFBLElBQVk7UUFDM0MsSUFBSSxDQUFDQSxHQUFBLENBQUlDLElBQUEsSUFBUUQsR0FBQSxDQUFJQyxJQUFBLENBQUtDLE1BQUEsRUFBUUMsTUFBQSxFQUFRO1VBQ3pDUixPQUFBLENBQVFTLEtBQUEsQ0FBTSwyQkFBMkJKLEdBQUEsQ0FBSUMsSUFBQSxDQUFLQyxNQUFNO1VBQ3hEcEIsT0FBQSxDQUFPO1VBQ1A7O1FBR0QsTUFBTUMsUUFBQSxHQUEyQjtRQUVqQyxNQUFNO1VBQUVDO1FBQVMsSUFBV0MsVUFBQSxDQUFZQyxhQUFBO1FBQ3hDSCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLEdBQUdKLFNBQVMsU0FBUyxDQUFDO1FBQzVDRCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLEdBQUdKLFNBQVMsUUFBUSxDQUFDO1FBRTNDRCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO1FBQ2xETCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO1FBRWxEQyxPQUFBLENBQVFDLEdBQUEsQ0FBSVAsUUFBUSxFQUNsQlEsSUFBQSxDQUFLLENBQUMsQ0FBQztVQUFFQyxPQUFBLEVBQVNqQjtRQUFNLElBQU04QixNQUFBLEVBQVE3QixNQUFNLE1BQUs7VUFFakQsTUFBTThCLEtBQUEsR0FBUSxJQUFJQyxHQUFBLENBQUlQLEdBQUEsQ0FBSUMsSUFBQSxDQUFLTyxPQUFBLENBQVFGLEtBQUs7VUFDNUNELE1BQUEsQ0FBT0csT0FBQSxDQUFRQyxRQUFBLENBQVMsQ0FBQyxHQUFHSCxLQUFBLENBQU1JLE1BQUEsQ0FBTSxDQUFFLENBQUM7VUFHM0MsTUFBTUMsU0FBQSxHQUFZWCxHQUFBLENBQUlDLElBQUEsQ0FBS08sT0FBQSxDQUFRRyxTQUFBO1VBQ25DLE1BQU1DLFNBQUEsR0FBc0JQLE1BQUEsQ0FBT08sU0FBQTtVQUNuQ0QsU0FBQSxDQUFVRSxPQUFBLENBQVNDLFFBQUEsSUFBa0JGLFNBQUEsQ0FBVVosR0FBQSxDQUFJYixJQUFBLENBQUsyQixRQUFRLENBQUM7VUFHakUsTUFBTUMsSUFBQSxHQUFpQnZDLE1BQUEsQ0FBT3dCLEdBQUE7VUFDOUJlLElBQUEsQ0FBS0MsSUFBQSxDQUFLaEIsR0FBQSxDQUFJQyxJQUFBLENBQUtnQixJQUFBLEVBQU1qQixHQUFBLENBQUlDLElBQUEsQ0FBS2lCLElBQUk7VUFDdEM1QyxZQUFBLENBQWFDLE1BQU07UUFDcEIsQ0FBQyxFQUNBa0IsS0FBQSxDQUFNQyxHQUFBLElBQU9DLE9BQUEsQ0FBUUMsR0FBQSxDQUFJRixHQUFBLENBQUlHLEtBQUssQ0FBQztNQUN0QyxDQUFDO0lBQ0YsR0FBRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=