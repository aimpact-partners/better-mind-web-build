System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.1.0/groups", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/http-suite@0.1.0/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Organizations, Organization, __beyond_pkg, hmr;
  _export({
    Organizations: void 0,
    Organization: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk110Groups) {
      dependency_1 = _aimpactAilearnSdk110Groups;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_2 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk144Session) {
      dependency_3 = _aimpactChatSdk144Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
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
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/entities/organizations"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/groups', dependency_1], ['@aimpact/ailearn-sdk/config', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/http-suite/api', dependency_4]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 1470987630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _item = require("./item");
          /*bundle */ //your code here
          class Organizations extends _groups.Groups {
            constructor(args) {
              super('organizations', _item.Organization);
            }
          }
          exports.Organizations = Organizations;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1679238175,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          /*bundle */ //your code here
          class Organization extends _groups.GroupItem {
            #api;
            constructor(args) {
              super('organizations', {
                ...args,
                properties: ['address', 'type', 'educationalLevel', 'coins', 'code']
              });
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
            }
            async freeTrial(data = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/organizations/${this.id}/free-trial`, data);
            }
            async join(specs) {
              return await this.provider.join(specs);
            }
          }
          exports.Organization = Organization;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Organizations",
        "name": "Organizations"
      }, {
        "im": "./item",
        "from": "Organization",
        "name": "Organization"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Organizations') && _export("Organizations", Organizations = require ? require('./collection').Organizations : value);
        (require || prop === 'Organization') && _export("Organization", Organization = require ? require('./item').Organization : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiT3JnYW5pemF0aW9ucyIsIkdyb3VwcyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIk9yZ2FuaXphdGlvbiIsImV4cG9ydHMiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfYXBpIiwiR3JvdXBJdGVtIiwiYXBpIiwicHJvcGVydGllcyIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwicHJvamVjdCIsImFpbGVhcm4iLCJmcmVlVHJpYWwiLCJkYXRhIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJwb3N0IiwiaWQiLCJqb2luIiwic3BlY3MiLCJwcm92aWRlciJdLCJzb3VyY2VzIjpbIi9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUdPLFlBRFA7VUFDa0IsTUFBT0UsYUFBYyxTQUFRSCxPQUFBLENBQUFJLE1BQU07WUFDcERDLFlBQVlDLElBQUk7Y0FDZixLQUFLLENBQUMsZUFBZSxFQUFFSixLQUFBLENBQUFLLFlBQVksQ0FBQztZQUNyQzs7VUFDQUMsT0FBQSxDQUFBTCxhQUFBLEdBQUFBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQU0sT0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQUQsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVMsUUFBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsSUFBQSxHQUFBVixPQUFBO1VBRU8sWUFEUDtVQUNrQixNQUFPTSxZQUFhLFNBQVFQLE9BQUEsQ0FBQVksU0FBUztZQUN0RCxDQUFBQyxHQUFJO1lBRUpSLFlBQVlDLElBQUs7Y0FDaEIsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQkFDdEIsR0FBR0EsSUFBSTtnQkFDUFEsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsTUFBTTtlQUNuRSxDQUFDO2NBQ0YsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJRixJQUFBLENBQUFJLEdBQUcsQ0FBQ04sT0FBQSxDQUFBTyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDVCxPQUFBLENBQUFPLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO1lBQ3ZFO1lBRUEsTUFBTUMsU0FBU0EsQ0FBQ0MsSUFBSSxHQUFHLEVBQUU7Y0FDeEIsSUFBSSxDQUFDLENBQUFULEdBQUksQ0FBQ1UsTUFBTSxDQUFDYixRQUFBLENBQUFjLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsT0FBTyxJQUFJLENBQUMsQ0FBQWIsR0FBSSxDQUFDYyxJQUFJLENBQUMsa0JBQWtCLElBQUksQ0FBQ0MsRUFBRSxhQUFhLEVBQUVOLElBQUksQ0FBQztZQUNwRTtZQUVBLE1BQU1PLElBQUlBLENBQUNDLEtBQUs7Y0FDZixPQUFPLE1BQU0sSUFBSSxDQUFDQyxRQUFRLENBQUNGLElBQUksQ0FBQ0MsS0FBSyxDQUFDO1lBQ3ZDOztVQUNBdEIsT0FBQSxDQUFBRCxZQUFBLEdBQUFBLFlBQUEiLCJpZ25vcmVMaXN0IjpbXX0=