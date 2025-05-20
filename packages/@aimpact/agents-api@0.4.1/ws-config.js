System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, url, setEnv, __beyond_pkg, hmr;
  _export({
    url: void 0,
    setEnv: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041Config) {
      dependency_1 = _aimpactAgentsApi041Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "7.15.2"], ["express", "4.21.2"], ["express-rate-limit", "7.2.0"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["multer", "1.4.5-lts.1"], ["form-data", "4.0.2"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.1"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.7"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.83.0"], ["uuid", "10.0.0"], ["find-up", "7.0.0"], ["postmark", "4.0.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/jsonwebtoken", "9.0.9"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.14"], ["@types/react", "18.3.18"], ["@types/audioworklet", "0.0.71"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.7.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/ws-config"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/config', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3592239530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.url = exports.setEnv = void 0;
          var _config = require("@aimpact/agents-api/config");
          const project = _config.default.params.project;
          const environments = {
            local: {
              rvd: 'wss://dev.agents.api.aimpact.partners',
              'better-mind': 'ws://agents-api-883367315651.europe-west10.run.app'
            },
            development: {
              rvd: 'wss://dev.agents.api.aimpact.partners',
              'better-mind': 'ws://agents-api-883367315651.europe-west10.run.app'
            },
            testing: {
              rvd: 'wss://test.agents.api.aimpact.partners',
              'better-mind': 'ws://agents-api-883367315651.europe-west10.run.app'
            },
            quality: {
              rvd: 'wss://beta.agents.api.aimpact.partners',
              'better-mind': 'ws://agents-api-883367315651.europe-west10.run.app'
            },
            production: {
              rvd: 'wss://agents.api.aimpact.partners',
              'better-mind': 'ws://agents-api-883367315651.europe-west10.run.app'
            }
          };
          /*bundle*/
          let url = exports.url = environments.production[project];
          /*bundle*/
          const setEnv = function ({
            port,
            environment
          }) {
            environment = !environment && !port ? 'production' : environment;
            exports.url = url = port ? `http://localhost:${port}` : environments[environment][project];
          };
          exports.setEnv = setEnv;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "url",
        "name": "url"
      }, {
        "im": "./index",
        "from": "setEnv",
        "name": "setEnv"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'url') && _export("url", url = require ? require('./index').url : value);
        (require || prop === 'setEnv') && _export("setEnv", setEnv = require ? require('./index').setEnv : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29uZmlnIiwicmVxdWlyZSIsInByb2plY3QiLCJkZWZhdWx0IiwicGFyYW1zIiwiZW52aXJvbm1lbnRzIiwibG9jYWwiLCJydmQiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsInVybCIsImV4cG9ydHMiLCJzZXRFbnYiLCJwb3J0IiwiZW52aXJvbm1lbnQiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFFQSxNQUFNQyxPQUFPLEdBQTBCRixPQUFBLENBQUFHLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDRixPQUFPO1VBTzVELE1BQU1HLFlBQVksR0FBc0U7WUFDdkZDLEtBQUssRUFBRTtjQUNOQyxHQUFHLEVBQUUsdUNBQXVDO2NBQzVDLGFBQWEsRUFBRTthQUNmO1lBQ0RDLFdBQVcsRUFBRTtjQUNaRCxHQUFHLEVBQUUsdUNBQXVDO2NBQzVDLGFBQWEsRUFBRTthQUNmO1lBQ0RFLE9BQU8sRUFBRTtjQUNSRixHQUFHLEVBQUUsd0NBQXdDO2NBQzdDLGFBQWEsRUFBRTthQUNmO1lBQ0RHLE9BQU8sRUFBRTtjQUNSSCxHQUFHLEVBQUUsd0NBQXdDO2NBQzdDLGFBQWEsRUFBRTthQUNmO1lBQ0RJLFVBQVUsRUFBRTtjQUNYSixHQUFHLEVBQUUsbUNBQW1DO2NBQ3hDLGFBQWEsRUFBRTs7V0FFaEI7VUFFTTtVQUFXLElBQUlLLEdBQUcsR0FBQUMsT0FBQSxDQUFBRCxHQUFBLEdBQUdQLFlBQVksQ0FBQ00sVUFBVSxDQUFDVCxPQUFPLENBQUM7VUFFckQ7VUFBVyxNQUFNWSxNQUFNLEdBQUcsU0FBQUEsQ0FBVTtZQUFFQyxJQUFJO1lBQUVDO1VBQVcsQ0FBYTtZQUMxRUEsV0FBVyxHQUFHLENBQUNBLFdBQVcsSUFBSSxDQUFDRCxJQUFJLEdBQUcsWUFBWSxHQUFHQyxXQUFXO1lBQ2hFSCxPQUFBLENBQUFELEdBQUEsR0FBQUEsR0FBRyxHQUFHRyxJQUFJLEdBQUcsb0JBQW9CQSxJQUFJLEVBQUUsR0FBR1YsWUFBWSxDQUFDVyxXQUFXLENBQUMsQ0FBQ2QsT0FBTyxDQUFDO1VBQzdFLENBQUM7VUFBQ1csT0FBQSxDQUFBQyxNQUFBLEdBQUFBLE1BQUEiLCJpZ25vcmVMaXN0IjpbXX0=