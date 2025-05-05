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

// .beyond/uimport/@beyond-js/widgets/application.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvYXBwbGljYXRpb24uMS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2FwcGxpY2F0aW9uL19fc291cmNlcy9hcHBsaWNhdGlvbi9zdGFydHVwLnRzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJjcmVhdGVMYXlvdXQiLCJjb25maWciLCJsYXlvdXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsInN0YXJ0dXAiLCJwcm9taXNlcyIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwicHVzaCIsImJpbXBvcnQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImRlZmF1bHQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIl9fc3NyX2ZldGNoIiwid2luZG93Iiwic3NyIiwianNvbiIsImVycm9ycyIsImxlbmd0aCIsImVycm9yIiwicmVuZGVyIiwic3BlY3MiLCJNYXAiLCJ3aWRnZXRzIiwicmVnaXN0ZXIiLCJ2YWx1ZXMiLCJpbnN0YW5jZXMiLCJwcmVyZW5kZXIiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJsc3NyIiwiZGF0YSIsIm1haW4iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQTtBQUFBQyxRQUFBLENBQUFELHlCQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS0EsU0FBU08sYUFBYUMsTUFBQSxFQUFXO01BQ2hDLE1BQU07UUFBRUM7TUFBTSxJQUFLRCxNQUFBO01BQ25CLE1BQU1FLE9BQUEsR0FBVUMsUUFBQSxDQUFTQyxhQUFBLENBQWNILE1BQUEsR0FBU0EsTUFBQSxHQUFTLHdCQUF3QjtNQUNqRkUsUUFBQSxDQUFTRSxJQUFBLENBQUtDLE1BQUEsQ0FBT0osT0FBTztJQUM3QjtJQUVBLFNBQVNLLFFBQUEsRUFBTztNQUNmLE1BQU1DLFFBQUEsR0FBMkI7TUFFakMsTUFBTTtRQUFFQztNQUFTLElBQVdDLFVBQUEsQ0FBWUMsYUFBQTtNQUN4Q0gsUUFBQSxDQUFTSSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxHQUFHSixTQUFBLFNBQWtCLENBQUM7TUFDNUNELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsR0FBR0osU0FBQSxRQUFpQixDQUFDO01BRTNDRCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLHdCQUF3QixDQUFDO01BQy9DTCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO01BQ2xETCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDRCQUE0QixDQUFDO01BQ25ETCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO01BRWxEQyxPQUFBLENBQVFDLEdBQUEsQ0FBSVAsUUFBUSxFQUNsQlEsSUFBQSxDQUFLLENBQUMsQ0FBQztRQUFFQyxPQUFBLEVBQVNqQjtNQUFNLENBQUUsTUFBTUQsWUFBQSxDQUFhQyxNQUFNLENBQUMsRUFDcERrQixLQUFBLENBQU1DLEdBQUEsSUFBT0MsT0FBQSxDQUFRQyxHQUFBLENBQUlGLEdBQUEsQ0FBSUcsS0FBSyxDQUFDO0lBQ3RDO0lBRUEsQ0FBQyxNQUFLO01BQ0wsSUFBSSxDQUFPWixVQUFBLENBQVlhLFdBQUEsRUFBYTtRQUNuQ2hCLE9BQUEsQ0FBTztRQUNQOztNQU1LaUIsTUFBQSxDQUFRRCxXQUFBLENBQVlQLElBQUEsQ0FBTVMsR0FBQSxJQUFZO1FBQzNDLElBQUksQ0FBQ0EsR0FBQSxDQUFJQyxJQUFBLElBQVFELEdBQUEsQ0FBSUMsSUFBQSxDQUFLQyxNQUFBLEVBQVFDLE1BQUEsRUFBUTtVQUN6Q1IsT0FBQSxDQUFRUyxLQUFBLENBQU0sMkJBQTJCSixHQUFBLENBQUlDLElBQUEsQ0FBS0MsTUFBTTtVQUN4RHBCLE9BQUEsQ0FBTztVQUNQOztRQUdELE1BQU1DLFFBQUEsR0FBMkI7UUFFakMsTUFBTTtVQUFFQztRQUFTLElBQVdDLFVBQUEsQ0FBWUMsYUFBQTtRQUN4Q0gsUUFBQSxDQUFTSSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxHQUFHSixTQUFBLFNBQWtCLENBQUM7UUFDNUNELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsR0FBR0osU0FBQSxRQUFpQixDQUFDO1FBRTNDRCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO1FBQ2xETCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO1FBRWxEQyxPQUFBLENBQVFDLEdBQUEsQ0FBSVAsUUFBUSxFQUNsQlEsSUFBQSxDQUFLLENBQUMsQ0FBQztVQUFFQyxPQUFBLEVBQVNqQjtRQUFNLElBQU04QixNQUFBLEVBQVE3QixNQUFNLE1BQUs7VUFFakQsTUFBTThCLEtBQUEsR0FBUSxJQUFJQyxHQUFBLENBQUlQLEdBQUEsQ0FBSUMsSUFBQSxDQUFLTyxPQUFBLENBQVFGLEtBQUs7VUFDNUNELE1BQUEsQ0FBT0csT0FBQSxDQUFRQyxRQUFBLENBQVMsQ0FBQyxHQUFHSCxLQUFBLENBQU1JLE1BQUEsQ0FBTSxDQUFFLENBQUM7VUFHM0MsTUFBTUMsU0FBQSxHQUFZWCxHQUFBLENBQUlDLElBQUEsQ0FBS08sT0FBQSxDQUFRRyxTQUFBO1VBQ25DLE1BQU1DLFNBQUEsR0FBc0JQLE1BQUEsQ0FBT08sU0FBQTtVQUNuQ0QsU0FBQSxDQUFVRSxPQUFBLENBQVNDLFFBQUEsSUFBa0JGLFNBQUEsQ0FBVVosR0FBQSxDQUFJYixJQUFBLENBQUsyQixRQUFRLENBQUM7VUFHakUsTUFBTUMsSUFBQSxHQUFpQnZDLE1BQUEsQ0FBT3dCLEdBQUE7VUFDOUJlLElBQUEsQ0FBS0MsSUFBQSxDQUFLaEIsR0FBQSxDQUFJQyxJQUFBLENBQUtnQixJQUFBLEVBQU1qQixHQUFBLENBQUlDLElBQUEsQ0FBS2lCLElBQUk7VUFDdEM1QyxZQUFBLENBQWFDLE1BQU07UUFDcEIsQ0FBQyxFQUNBa0IsS0FBQSxDQUFNQyxHQUFBLElBQU9DLE9BQUEsQ0FBUUMsR0FBQSxDQUFJRixHQUFBLENBQUlHLEtBQUssQ0FBQztNQUN0QyxDQUFDO0lBQ0YsR0FBRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=