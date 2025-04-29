System.register(["@beyond-js/kernel@0.1.12/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/widgets","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/application.1.1.2.js
var application_1_1_2_exports = {};
__export(application_1_1_2_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(application_1_1_2_exports);

// node_modules/@beyond-js/widgets/application/application.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9hcHBsaWNhdGlvbi4xLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvYXBwbGljYXRpb24vX19zb3VyY2VzL2FwcGxpY2F0aW9uL3N0YXJ0dXAudHMiXSwibmFtZXMiOlsiYXBwbGljYXRpb25fMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImNyZWF0ZUxheW91dCIsImNvbmZpZyIsImxheW91dCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kIiwic3RhcnR1cCIsInByb21pc2VzIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJwdXNoIiwiYmltcG9ydCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwiZGVmYXVsdCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwiX19zc3JfZmV0Y2giLCJ3aW5kb3ciLCJzc3IiLCJqc29uIiwiZXJyb3JzIiwibGVuZ3RoIiwiZXJyb3IiLCJyZW5kZXIiLCJzcGVjcyIsIk1hcCIsIndpZGdldHMiLCJyZWdpc3RlciIsInZhbHVlcyIsImluc3RhbmNlcyIsInByZXJlbmRlciIsImZvckVhY2giLCJpbnN0YW5jZSIsImxzc3IiLCJkYXRhIiwibWFpbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHlCQUFBO0FBQUFDLFFBQUEsQ0FBQUQseUJBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4seUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLQSxTQUFTTyxhQUFhQyxNQUFBLEVBQVc7TUFDaEMsTUFBTTtRQUFFQztNQUFNLElBQUtELE1BQUE7TUFDbkIsTUFBTUUsT0FBQSxHQUFVQyxRQUFBLENBQVNDLGFBQUEsQ0FBY0gsTUFBQSxHQUFTQSxNQUFBLEdBQVMsd0JBQXdCO01BQ2pGRSxRQUFBLENBQVNFLElBQUEsQ0FBS0MsTUFBQSxDQUFPSixPQUFPO0lBQzdCO0lBRUEsU0FBU0ssUUFBQSxFQUFPO01BQ2YsTUFBTUMsUUFBQSxHQUEyQjtNQUVqQyxNQUFNO1FBQUVDO01BQVMsSUFBV0MsVUFBQSxDQUFZQyxhQUFBO01BQ3hDSCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLEdBQUdKLFNBQUEsU0FBa0IsQ0FBQztNQUM1Q0QsUUFBQSxDQUFTSSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxHQUFHSixTQUFBLFFBQWlCLENBQUM7TUFFM0NELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsd0JBQXdCLENBQUM7TUFDL0NMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7TUFDbERMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsNEJBQTRCLENBQUM7TUFDbkRMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7TUFFbERDLE9BQUEsQ0FBUUMsR0FBQSxDQUFJUCxRQUFRLEVBQ2xCUSxJQUFBLENBQUssQ0FBQyxDQUFDO1FBQUVDLE9BQUEsRUFBU2pCO01BQU0sQ0FBRSxNQUFNRCxZQUFBLENBQWFDLE1BQU0sQ0FBQyxFQUNwRGtCLEtBQUEsQ0FBTUMsR0FBQSxJQUFPQyxPQUFBLENBQVFDLEdBQUEsQ0FBSUYsR0FBQSxDQUFJRyxLQUFLLENBQUM7SUFDdEM7SUFFQSxDQUFDLE1BQUs7TUFDTCxJQUFJLENBQU9aLFVBQUEsQ0FBWWEsV0FBQSxFQUFhO1FBQ25DaEIsT0FBQSxDQUFPO1FBQ1A7O01BTUtpQixNQUFBLENBQVFELFdBQUEsQ0FBWVAsSUFBQSxDQUFNUyxHQUFBLElBQVk7UUFDM0MsSUFBSSxDQUFDQSxHQUFBLENBQUlDLElBQUEsSUFBUUQsR0FBQSxDQUFJQyxJQUFBLENBQUtDLE1BQUEsRUFBUUMsTUFBQSxFQUFRO1VBQ3pDUixPQUFBLENBQVFTLEtBQUEsQ0FBTSwyQkFBMkJKLEdBQUEsQ0FBSUMsSUFBQSxDQUFLQyxNQUFNO1VBQ3hEcEIsT0FBQSxDQUFPO1VBQ1A7O1FBR0QsTUFBTUMsUUFBQSxHQUEyQjtRQUVqQyxNQUFNO1VBQUVDO1FBQVMsSUFBV0MsVUFBQSxDQUFZQyxhQUFBO1FBQ3hDSCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLEdBQUdKLFNBQUEsU0FBa0IsQ0FBQztRQUM1Q0QsUUFBQSxDQUFTSSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxHQUFHSixTQUFBLFFBQWlCLENBQUM7UUFFM0NELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7UUFDbERMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7UUFFbERDLE9BQUEsQ0FBUUMsR0FBQSxDQUFJUCxRQUFRLEVBQ2xCUSxJQUFBLENBQUssQ0FBQyxDQUFDO1VBQUVDLE9BQUEsRUFBU2pCO1FBQU0sSUFBTThCLE1BQUEsRUFBUTdCLE1BQU0sTUFBSztVQUVqRCxNQUFNOEIsS0FBQSxHQUFRLElBQUlDLEdBQUEsQ0FBSVAsR0FBQSxDQUFJQyxJQUFBLENBQUtPLE9BQUEsQ0FBUUYsS0FBSztVQUM1Q0QsTUFBQSxDQUFPRyxPQUFBLENBQVFDLFFBQUEsQ0FBUyxDQUFDLEdBQUdILEtBQUEsQ0FBTUksTUFBQSxDQUFNLENBQUUsQ0FBQztVQUczQyxNQUFNQyxTQUFBLEdBQVlYLEdBQUEsQ0FBSUMsSUFBQSxDQUFLTyxPQUFBLENBQVFHLFNBQUE7VUFDbkMsTUFBTUMsU0FBQSxHQUFzQlAsTUFBQSxDQUFPTyxTQUFBO1VBQ25DRCxTQUFBLENBQVVFLE9BQUEsQ0FBU0MsUUFBQSxJQUFrQkYsU0FBQSxDQUFVWixHQUFBLENBQUliLElBQUEsQ0FBSzJCLFFBQVEsQ0FBQztVQUdqRSxNQUFNQyxJQUFBLEdBQWlCdkMsTUFBQSxDQUFPd0IsR0FBQTtVQUM5QmUsSUFBQSxDQUFLQyxJQUFBLENBQUtoQixHQUFBLENBQUlDLElBQUEsQ0FBS2dCLElBQUEsRUFBTWpCLEdBQUEsQ0FBSUMsSUFBQSxDQUFLaUIsSUFBSTtVQUN0QzVDLFlBQUEsQ0FBYUMsTUFBTTtRQUNwQixDQUFDLEVBQ0FrQixLQUFBLENBQU1DLEdBQUEsSUFBT0MsT0FBQSxDQUFRQyxHQUFBLENBQUlGLEdBQUEsQ0FBSUcsS0FBSyxDQUFDO01BQ3RDLENBQUM7SUFDRixHQUFFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9