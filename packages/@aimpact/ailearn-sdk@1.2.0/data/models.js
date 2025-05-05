System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/data/interfaces", "@beyond-js/reactive@2.0.5/entities/item", "@aimpact/ailearn-app@0.4.1/config", "@beyond-js/http-suite@0.1.0/api", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-sdk@1.2.0/startup"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, ActivityClosing, __beyond_pkg, hmr;
  _export("ActivityClosing", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk120DataInterfaces) {
      dependency_1 = _aimpactAilearnSdk120DataInterfaces;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_2 = _beyondJsReactive205EntitiesItem;
    }, function (_aimpactAilearnApp041Config) {
      dependency_3 = _aimpactAilearnApp041Config;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_6 = _aimpactAilearnSdk120Startup;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/data/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/data/interfaces', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@aimpact/ailearn-app/config', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/startup', dependency_6]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 1997506834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityClosing = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _activity = require("./providers/activity");
          /*bundle*/
          class ActivityClosing extends _item.Item {
            constructor({
              id,
              ...specs
            } = {}) {
              super({
                id,
                ...specs,
                entity: 'ActivityClosing',
                properties: ['participants'],
                provider: _activity.ActivityClosingProvider
              });
            }
          }
          exports.ActivityClosing = ActivityClosing;
        }
      });

      /************************************
      INTERNAL MODULE: ./providers/activity
      ************************************/

      ims.set('./providers/activity', {
        hash: 2028672775,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityClosingProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          // const TOKEN = config.params.apis.token;

          class ActivityClosingProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async load({
              id,
              activityId
            }) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${id}/activity/${activityId}/closing`);
              if (!status) throw new Error('error loading activity closing');
              return data;
            }
          }
          exports.ActivityClosingProvider = ActivityClosingProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity",
        "from": "ActivityClosing",
        "name": "ActivityClosing"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityClosing') && _export("ActivityClosing", ActivityClosing = require ? require('./activity').ActivityClosing : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eUNsb3NpbmciLCJJdGVtIiwiY29uc3RydWN0b3IiLCJpZCIsInNwZWNzIiwiZW50aXR5IiwicHJvcGVydGllcyIsInByb3ZpZGVyIiwiQWN0aXZpdHlDbG9zaW5nUHJvdmlkZXIiLCJleHBvcnRzIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJhcGkiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImxvYWQiLCJhY3Rpdml0eUlkIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJiZWFyZXIiLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiRXJyb3IiXSwic291cmNlcyI6WyIvYWN0aXZpdHkudHMiLCIvcHJvdmlkZXJzL2FjdGl2aXR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxlQUFnQixTQUFRSCxLQUFBLENBQUFJLElBQXFEO1lBR3BHQyxZQUFZO2NBQUVDLEVBQUU7Y0FBRSxHQUFHQztZQUFLLElBQXNCLEVBQUU7Y0FDakQsS0FBSyxDQUFDO2dCQUNMRCxFQUFFO2dCQUNGLEdBQUdDLEtBQUs7Z0JBQ1JDLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCQyxVQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzVCQyxRQUFRLEVBQUVSLFNBQUEsQ0FBQVM7ZUFDVixDQUFDO1lBQ0g7O1VBQ0FDLE9BQUEsQ0FBQVQsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZELElBQUFVLElBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLFFBQUEsR0FBQWIsT0FBQTtVQUVBLElBQUFjLFFBQUEsR0FBQWQsT0FBQTtVQURBOztVQVFNLE1BQU9VLHVCQUF1QjtZQUNuQyxDQUFBSyxHQUFJO1lBRUpYLFlBQUE7Y0FDQyxJQUFJLENBQUMsQ0FBQVcsR0FBSSxHQUFHLElBQUlILElBQUEsQ0FBQUksR0FBRyxDQUFDRixRQUFBLENBQUFHLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7WUFDNUM7WUFFQSxNQUFNQyxJQUFJQSxDQUFDO2NBQUVmLEVBQUU7Y0FBRWdCO1lBQVUsQ0FBc0M7Y0FDaEUsTUFBTUMsS0FBSyxHQUFHLE1BQU1ULFFBQUEsQ0FBQVUsY0FBYyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7Y0FDN0MsSUFBSSxDQUFDLENBQUFQLEdBQUksQ0FBQ1UsTUFBTSxDQUFDSCxLQUFLLENBQUM7Y0FDdkIsTUFBTTtnQkFBRUksTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDYSxHQUFHLENBQUMsZ0JBQWdCdkIsRUFBRSxhQUFhZ0IsVUFBVSxVQUFVLENBQUM7Y0FDakcsSUFBSSxDQUFDSyxNQUFNLEVBQUUsTUFBTSxJQUFJRyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7Y0FFOUQsT0FBT0YsSUFBSTtZQUNaOztVQUNBaEIsT0FBQSxDQUFBRCx1QkFBQSxHQUFBQSx1QkFBQSIsImlnbm9yZUxpc3QiOltdfQ==