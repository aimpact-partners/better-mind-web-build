System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, key, __beyond_pkg, hmr;
  _export("key", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/business/models/open-ai/key"
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
        hash: 3406071007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.key = void 0;
          /*bundle*/
          const key = exports.key = new class OpenAIKey {
            #key;
            async get() {
              if (this.#key) return this.#key;
              const dotenv = await bimport('dotenv');
              dotenv.config();
              this.#key = process.env.OPEN_AI_KEY;
              return this.#key;
            }
            set(value) {
              if (!value) {
                console.error('value must be specified');
              }
              this.#key = value;
              return this.#key;
            }
          }();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "key",
        "name": "key"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'key') && _export("key", key = require ? require('./index').key : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJrZXkiLCJleHBvcnRzIiwiT3BlbkFJS2V5IiwiZ2V0IiwiZG90ZW52IiwiYmltcG9ydCIsImNvbmZpZyIsInByb2Nlc3MiLCJlbnYiLCJPUEVOX0FJX0tFWSIsInNldCIsInZhbHVlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVPO1VBQVcsTUFBTUEsR0FBRyxHQUFBQyxPQUFBLENBQUFELEdBQUEsR0FBRyxJQUFLLE1BQU1FLFNBQVM7WUFDakQsQ0FBQUYsR0FBSTtZQUVKLE1BQU1HLEdBQUdBLENBQUE7Y0FDUixJQUFJLElBQUksQ0FBQyxDQUFBSCxHQUFJLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtjQUUvQixNQUFNSSxNQUFNLEdBQUcsTUFBTUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0Q0QsTUFBTSxDQUFDRSxNQUFNLEVBQUU7Y0FFZixJQUFJLENBQUMsQ0FBQU4sR0FBSSxHQUFHTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztjQUVuQyxPQUFPLElBQUksQ0FBQyxDQUFBVCxHQUFJO1lBQ2pCO1lBRUFVLEdBQUdBLENBQUNDLEtBQWE7Y0FDaEIsSUFBSSxDQUFDQSxLQUFLLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHlCQUF5QixDQUFDOztjQUd6QyxJQUFJLENBQUMsQ0FBQWIsR0FBSSxHQUFHVyxLQUFLO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFYLEdBQUk7WUFDakI7V0FDQSxDQUFDLENBQUUiLCJpZ25vcmVMaXN0IjpbXX0=