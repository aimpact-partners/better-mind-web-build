System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.1.0/data/interfaces", "@beyond-js/reactive@2.0.4/entities/item", "@aimpact/ailearn-app@0.3.32/config", "@beyond-js/http-suite@0.1.0/api", "@aimpact/chat-sdk@1.4.4/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ActivityClosing, __beyond_pkg, hmr;
  _export("ActivityClosing", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk110DataInterfaces) {
      dependency_1 = _aimpactAilearnSdk110DataInterfaces;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_2 = _beyondJsReactive204EntitiesItem;
    }, function (_aimpactAilearnApp0332Config) {
      dependency_3 = _aimpactAilearnApp0332Config;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
    }, function (_aimpactChatSdk144Session) {
      dependency_5 = _aimpactChatSdk144Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/data/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/data/interfaces', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@aimpact/ailearn-app/config', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/chat-sdk/session', dependency_5]]);
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
        hash: 2130539940,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityClosingProvider = void 0;
          var _config = require("@aimpact/ailearn-app/config");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          class ActivityClosingProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
            }
            async load({
              id,
              activityId
            }) {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eUNsb3NpbmciLCJJdGVtIiwiY29uc3RydWN0b3IiLCJpZCIsInNwZWNzIiwiZW50aXR5IiwicHJvcGVydGllcyIsInByb3ZpZGVyIiwiQWN0aXZpdHlDbG9zaW5nUHJvdmlkZXIiLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9hcGkiLCJfc2Vzc2lvbiIsImFwaSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwicHJvamVjdCIsImFpbGVhcm4iLCJsb2FkIiwiYWN0aXZpdHlJZCIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwic3RhdHVzIiwiZGF0YSIsImdldCIsIkVycm9yIl0sInNvdXJjZXMiOlsiL2FjdGl2aXR5LnRzIiwiL3Byb3ZpZGVycy9hY3Rpdml0eS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9FLGVBQWdCLFNBQVFILEtBQUEsQ0FBQUksSUFBcUQ7WUFHcEdDLFlBQVk7Y0FBRUMsRUFBRTtjQUFFLEdBQUdDO1lBQUssSUFBc0IsRUFBRTtjQUNqRCxLQUFLLENBQUM7Z0JBQ0xELEVBQUU7Z0JBQ0YsR0FBR0MsS0FBSztnQkFDUkMsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekJDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDNUJDLFFBQVEsRUFBRVIsU0FBQSxDQUFBUztlQUNWLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBVCxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJELElBQUFVLE9BQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLElBQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFFBQUEsR0FBQWQsT0FBQTtVQVNNLE1BQU9VLHVCQUF1QjtZQUNuQyxDQUFBSyxHQUFJO1lBRUpYLFlBQUE7Y0FDQyxJQUFJLENBQUMsQ0FBQVcsR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUcsR0FBRyxDQUFDSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNQLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNFLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLENBQUM7WUFDdkU7WUFFQSxNQUFNQyxJQUFJQSxDQUFDO2NBQUVqQixFQUFFO2NBQUVrQjtZQUFVLENBQXNDO2NBQ2hFLElBQUksQ0FBQyxDQUFBUixHQUFJLENBQUNTLE1BQU0sQ0FBQ1YsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU07Z0JBQUVDLE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFkLEdBQUksQ0FBQ2UsR0FBRyxDQUFDLGdCQUFnQnpCLEVBQUUsYUFBYWtCLFVBQVUsVUFBVSxDQUFDO2NBQ2pHLElBQUksQ0FBQ0ssTUFBTSxFQUFFLE1BQU0sSUFBSUcsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO2NBRTlELE9BQU9GLElBQUk7WUFDWjs7VUFDQWxCLE9BQUEsQ0FBQUQsdUJBQUEsR0FBQUEsdUJBQUEiLCJpZ25vcmVMaXN0IjpbXX0=