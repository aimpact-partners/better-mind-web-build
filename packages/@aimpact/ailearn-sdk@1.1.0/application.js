System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.4/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Application, __beyond_pkg, hmr;
  _export("Application", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_2 = _beyondJsHttpSuite010Api;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_3 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk144Session) {
      dependency_4 = _aimpactChatSdk144Session;
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
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/application"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/ailearn-sdk/config', dependency_3], ['@aimpact/chat-sdk/session', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3995213067,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Application = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle */
          class Application extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkFwcGxpY2F0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImNvbnN0cnVjdG9yIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJwcm9qZWN0IiwiYWlsZWFybiIsInBvbGljaWVzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBR087VUFBVyxNQUFPSSxXQUFZLFNBQVFMLE1BQUEsQ0FBQU0sYUFBMkI7WUFDdkUsQ0FBQUMsR0FBSTtZQUVKQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJTCxJQUFBLENBQUFPLEdBQUcsQ0FBQ04sT0FBQSxDQUFBTyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVCxPQUFBLENBQUFPLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO1lBQ3ZFO1lBRUEsTUFBTUMsUUFBUUEsQ0FBQTtjQUNiLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFSLEdBQUksQ0FBQ1MsTUFBTSxDQUFDWixRQUFBLENBQUFhLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBQzNDLE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBYixHQUFJLENBQUNjLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDcEUsSUFBSSxDQUFDRCxRQUFRLENBQUNFLE1BQU0sRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztnQkFDaEUsT0FBT0gsUUFBUSxDQUFDSSxJQUFJO2VBQ3BCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjs7VUFDQUcsT0FBQSxDQUFBdkIsV0FBQSxHQUFBQSxXQUFBIiwiaWdub3JlTGlzdCI6W119