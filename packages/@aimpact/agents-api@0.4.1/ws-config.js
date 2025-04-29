System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, url, setEnv, __beyond_pkg, hmr;
  _export({
    url: void 0,
    setEnv: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
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
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1459153539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.url = exports.setEnv = void 0;
          const environments = {
            local: 'wss://dev.agents.api.aimpact.partners',
            development: 'wss://dev.agents.api.aimpact.partners',
            testing: 'wss://test.agents.api.aimpact.partners',
            beta: 'wss://beta.agents.api.aimpact.partners',
            production: 'wss://agents.api.aimpact.partners'
          };
          /*bundle*/
          let url = exports.url = environments.production;
          /*bundle*/
          const setEnv = function ({
            port,
            environment
          }) {
            environment = !environment && !port ? 'production' : environment;
            exports.url = url = port ? `http://localhost:${port}` : environments[environment];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlbnZpcm9ubWVudHMiLCJsb2NhbCIsImRldmVsb3BtZW50IiwidGVzdGluZyIsImJldGEiLCJwcm9kdWN0aW9uIiwidXJsIiwiZXhwb3J0cyIsInNldEVudiIsInBvcnQiLCJlbnZpcm9ubWVudCJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFNQSxNQUFNQSxZQUFZLEdBQXNDO1lBQ3ZEQyxLQUFLLEVBQUUsdUNBQXVDO1lBQzlDQyxXQUFXLEVBQUUsdUNBQXVDO1lBQ3BEQyxPQUFPLEVBQUUsd0NBQXdDO1lBQ2pEQyxJQUFJLEVBQUUsd0NBQXdDO1lBQzlDQyxVQUFVLEVBQUU7V0FDWjtVQUVNO1VBQVcsSUFBSUMsR0FBRyxHQUFBQyxPQUFBLENBQUFELEdBQUEsR0FBR04sWUFBWSxDQUFDSyxVQUFVO1VBRTVDO1VBQVcsTUFBTUcsTUFBTSxHQUFHLFNBQUFBLENBQVU7WUFBRUMsSUFBSTtZQUFFQztVQUFXLENBQWE7WUFDMUVBLFdBQVcsR0FBRyxDQUFDQSxXQUFXLElBQUksQ0FBQ0QsSUFBSSxHQUFHLFlBQVksR0FBR0MsV0FBVztZQUNoRUgsT0FBQSxDQUFBRCxHQUFBLEdBQUFBLEdBQUcsR0FBR0csSUFBSSxHQUFHLG9CQUFvQkEsSUFBSSxFQUFFLEdBQUdULFlBQVksQ0FBQ1UsV0FBVyxDQUFDO1VBQ3BFLENBQUM7VUFBQ0gsT0FBQSxDQUFBQyxNQUFBLEdBQUFBLE1BQUEiLCJpZ25vcmVMaXN0IjpbXX0=