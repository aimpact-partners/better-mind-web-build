System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-sdk@1.2.0/startup"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Application, __beyond_pkg, hmr;
  _export("Application", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_2 = _beyondJsHttpSuite010Api;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_3 = _aimpactAilearnSdk120Config;
    }, function (_aimpactChatSdk154Session) {
      dependency_4 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_5 = _aimpactAilearnSdk120Startup;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/application"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/ailearn-sdk/config', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-sdk/startup', dependency_5]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4117182810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Application = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle */
          class Application extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async policies() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.get('/application/metadata/policy');
                if (!response.status) throw new Error('Error fetching policies');
                return response.data;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Application = Application;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Application",
        "name": "Application"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Application') && _export("Application", Application = require ? require('./index').Application : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJBcHBsaWNhdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwicG9saWNpZXMiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVcsTUFBT0ksV0FBWSxTQUFRTCxNQUFBLENBQUFNLGFBQTJCO1lBQ3ZFLENBQUFDLEdBQUk7WUFFSkMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUwsSUFBQSxDQUFBTyxHQUFHLENBQUNMLFFBQUEsQ0FBQU0sU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUM1QztZQUVBLE1BQU1DLFFBQVFBLENBQUE7Y0FDYixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBTixHQUFJLENBQUNPLE1BQU0sQ0FBQ1gsUUFBQSxDQUFBWSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUMzQyxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVgsR0FBSSxDQUFDWSxHQUFHLENBQUMsOEJBQThCLENBQUM7Z0JBQ3BFLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxNQUFNLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMseUJBQXlCLENBQUM7Z0JBQ2hFLE9BQU9ILFFBQVEsQ0FBQ0ksSUFBSTtlQUNwQixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0FHLE9BQUEsQ0FBQXJCLFdBQUEsR0FBQUEsV0FBQSIsImlnbm9yZUxpc3QiOltdfQ==