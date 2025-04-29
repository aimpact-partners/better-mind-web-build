System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/groups", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.2.0/startup"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Organizations, Organization, __beyond_pkg, hmr;
  _export({
    Organizations: void 0,
    Organization: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnSdk120Groups) {
      dependency_1 = _aimpactAilearnSdk120Groups;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_2 = _aimpactAilearnSdk120Config;
    }, function (_aimpactChatSdk154Session) {
      dependency_3 = _aimpactChatSdk154Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
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
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/entities/organizations"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/groups', dependency_1], ['@aimpact/ailearn-sdk/config', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/startup', dependency_5]]);
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
        hash: 3551367746,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _groups = require("@aimpact/ailearn-sdk/groups");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle */ //your code here
          class Organization extends _groups.GroupItem {
            #api;
            constructor(args) {
              super('organizations', {
                ...args,
                properties: ['address', 'type', 'educationalLevel', 'coins', 'code']
              });
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZ3JvdXBzIiwicmVxdWlyZSIsIl9pdGVtIiwiT3JnYW5pemF0aW9ucyIsIkdyb3VwcyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIk9yZ2FuaXphdGlvbiIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9hcGkiLCJfc3RhcnR1cCIsIkdyb3VwSXRlbSIsImFwaSIsInByb3BlcnRpZXMiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsImZyZWVUcmlhbCIsImRhdGEiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInBvc3QiLCJpZCIsImpvaW4iLCJzcGVjcyIsInByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFHTyxZQURQO1VBQ2tCLE1BQU9FLGFBQWMsU0FBUUgsT0FBQSxDQUFBSSxNQUFNO1lBQ3BEQyxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDLGVBQWUsRUFBRUosS0FBQSxDQUFBSyxZQUFZLENBQUM7WUFDckM7O1VBQ0FDLE9BQUEsQ0FBQUwsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BELElBQUFILE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFRLFFBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLElBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFFBQUEsR0FBQVYsT0FBQTtVQUVPLFlBRFA7VUFDa0IsTUFBT00sWUFBYSxTQUFRUCxPQUFBLENBQUFZLFNBQVM7WUFDdEQsQ0FBQUMsR0FBSTtZQUVKUixZQUFZQyxJQUFLO2NBQ2hCLEtBQUssQ0FBQyxlQUFlLEVBQUU7Z0JBQ3RCLEdBQUdBLElBQUk7Z0JBQ1BRLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLE1BQU07ZUFDbkUsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNKLFFBQUEsQ0FBQUssU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztZQUM1QztZQUVBLE1BQU1DLFNBQVNBLENBQUNDLElBQUksR0FBRyxFQUFFO2NBQ3hCLElBQUksQ0FBQyxDQUFBUCxHQUFJLENBQUNRLE1BQU0sQ0FBQ1osUUFBQSxDQUFBYSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE9BQU8sSUFBSSxDQUFDLENBQUFYLEdBQUksQ0FBQ1ksSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUNDLEVBQUUsYUFBYSxFQUFFTixJQUFJLENBQUM7WUFDcEU7WUFFQSxNQUFNTyxJQUFJQSxDQUFDQyxLQUFLO2NBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQ0MsUUFBUSxDQUFDRixJQUFJLENBQUNDLEtBQUssQ0FBQztZQUN2Qzs7VUFDQXBCLE9BQUEsQ0FBQUQsWUFBQSxHQUFBQSxZQUFBIiwiaWdub3JlTGlzdCI6W119