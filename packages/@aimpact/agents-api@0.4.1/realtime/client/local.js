System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/agents/base", "@aimpact/agents-api@0.4.1/realtime/client/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ClientSession, __beyond_pkg, hmr;
  _export("ClientSession", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeAgentsBase) {
      dependency_1 = _aimpactAgentsApi041RealtimeAgentsBase;
    }, function (_aimpactAgentsApi041RealtimeClientBase) {
      dependency_2 = _aimpactAgentsApi041RealtimeClientBase;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/client/local"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/agents/base', dependency_1], ['@aimpact/agents-api/realtime/client/base', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1493256946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClientSession = void 0;
          var _base = require("@aimpact/agents-api/realtime/client/base");
          var _base2 = require("@aimpact/agents-api/realtime/agents/base");
          /*bundle*/
          class ClientSession extends _base.ClientSessionBase {
            #agent;
            get agent() {
              return this.#agent;
            }
            get status() {
              return this.#agent.status;
            }
            constructor(settings) {
              const key = localStorage.getItem('openai-key');
              if (!key) throw new Error('Open AI API key must be set as a localstorage item: `openai-key`');
              const agent = new _base2.BaseRealtimeAgent({
                key
              });
              super(agent, agent.session, settings);
              this.#agent = agent;
            }
            async connect() {
              super.connect();
              return await this.#agent.connect();
            }
            async close() {
              const output = await this.#agent.close();
              super.close();
              return output;
            }
            listen(data) {
              this.#agent.manager.listen(data.mono);
            }
          }
          exports.ClientSession = ClientSession;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ClientSession",
        "name": "ClientSession"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ClientSession') && _export("ClientSession", ClientSession = require ? require('./index').ClientSession : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfYmFzZTIiLCJDbGllbnRTZXNzaW9uIiwiQ2xpZW50U2Vzc2lvbkJhc2UiLCJhZ2VudCIsInN0YXR1cyIsImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJrZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiRXJyb3IiLCJCYXNlUmVhbHRpbWVBZ2VudCIsInNlc3Npb24iLCJjb25uZWN0IiwiY2xvc2UiLCJvdXRwdXQiLCJsaXN0ZW4iLCJkYXRhIiwibWFuYWdlciIsIm1vbm8iLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9FLGFBQWMsU0FBUUgsS0FBQSxDQUFBSSxpQkFBaUI7WUFDOUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0MsTUFBTTtZQUMxQjtZQUVBQyxZQUFZQyxRQUF1QztjQUNsRCxNQUFNQyxHQUFHLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQztjQUM5QyxJQUFJLENBQUNGLEdBQUcsRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQztjQUU3RixNQUFNUCxLQUFLLEdBQUcsSUFBSUgsTUFBQSxDQUFBVyxpQkFBaUIsQ0FBQztnQkFBRUo7Y0FBRyxDQUFFLENBQUM7Y0FDNUMsS0FBSyxDQUFDSixLQUFLLEVBQUVBLEtBQUssQ0FBQ1MsT0FBTyxFQUFFTixRQUFRLENBQUM7Y0FDckMsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBR0EsS0FBSztZQUNwQjtZQUVBLE1BQU1VLE9BQU9BLENBQUE7Y0FDWixLQUFLLENBQUNBLE9BQU8sRUFBRTtjQUNmLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxPQUFPLEVBQUU7WUFDbkM7WUFFQSxNQUFNQyxLQUFLQSxDQUFBO2NBQ1YsTUFBTUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO2NBQ3hDLEtBQUssQ0FBQ0EsS0FBSyxFQUFFO2NBQ2IsT0FBT0MsTUFBTTtZQUNkO1lBRUFDLE1BQU1BLENBQUNDLElBQTJDO2NBQ2pELElBQUksQ0FBQyxDQUFBZCxLQUFNLENBQUNlLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDQyxJQUFJLENBQUNFLElBQUksQ0FBQztZQUN0Qzs7VUFDQUMsT0FBQSxDQUFBbkIsYUFBQSxHQUFBQSxhQUFBIiwiaWdub3JlTGlzdCI6W119