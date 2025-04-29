System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/ws-config", "@aimpact/agents-api@0.4.1/realtime/channel", "@beyond-js/events@0.0.7/events", "@aimpact/agents-api@0.4.1/realtime/client/base", "@aimpact/agents-api@0.4.1/realtime/utils"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ClientSession, __beyond_pkg, hmr;
  _export("ClientSession", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041WsConfig) {
      dependency_1 = _aimpactAgentsApi041WsConfig;
    }, function (_aimpactAgentsApi041RealtimeChannel) {
      dependency_2 = _aimpactAgentsApi041RealtimeChannel;
    }, function (_beyondJsEvents007Events) {
      dependency_3 = _beyondJsEvents007Events;
    }, function (_aimpactAgentsApi041RealtimeClientBase) {
      dependency_4 = _aimpactAgentsApi041RealtimeClientBase;
    }, function (_aimpactAgentsApi041RealtimeUtils) {
      dependency_5 = _aimpactAgentsApi041RealtimeUtils;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/client"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/ws-config', dependency_1], ['@aimpact/agents-api/realtime/channel', dependency_2], ['@beyond-js/events/events', dependency_3], ['@aimpact/agents-api/realtime/client/base', dependency_4], ['@aimpact/agents-api/realtime/utils', dependency_5]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./channel
      *************************/
      ims.set('./channel', {
        hash: 3590587164,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Channel = void 0;
          var _wsConfig = require("@aimpact/agents-api/ws-config");
          var _channel = require("@aimpact/agents-api/realtime/channel");
          var _events = require("@beyond-js/events/events");
          const SERVER_URL = _wsConfig.url;
          class Channel extends _events.Events {
            #channel;
            #created = false;
            get status() {
              const {
                status
              } = this.#channel;
              return status === 'open' && this.#created ? 'created' : status;
            }
            get error() {
              return this.#channel.error;
            }
            constructor() {
              super();
              this.#channel = new _channel.Channel({
                url: SERVER_URL
              });
              this.#channel.on('open', this.#onopen);
              this.#channel.on('close', this.#onclose);
              this.#channel.on('message', this.#onmessage);
            }
            #onopen = () => this.trigger('open');
            #onclose = () => this.trigger('close');
            #onmessage = message => {
              let event, data;
              try {
                const parsed = JSON.parse(message);
                ({
                  event,
                  data
                } = parsed);
                if (!event) {
                  console.warn(`Agent message seems to be invalid, event not defined:`, message);
                  return;
                }
              } catch (exc) {
                console.warn(`Unable to parse agent message:`, message, exc.message);
                return;
              }
              console.log(`Event "${event}" has been received:`, data);
              event === 'session.created' && (this.#created = true);
              this.trigger(event, data);
            };
            #cleanup() {
              this.#channel.off('open', this.#onopen);
              this.#channel.off('close', this.#onclose);
              this.#channel.off('message', this.#onmessage);
            }
            async connect() {
              return await this.#channel.connect();
            }
            async close() {
              this.#cleanup();
              return await this.#channel.close();
            }
            send(event, data) {
              this.#channel.send(JSON.stringify({
                event,
                data
              }));
            }
          }
          exports.Channel = Channel;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 314552738,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClientSession = void 0;
          var _base = require("@aimpact/agents-api/realtime/client/base");
          var _channel = require("./channel");
          var _utils = require("@aimpact/agents-api/realtime/utils");
          /*bundle*/
          class ClientSession extends _base.ClientSessionBase {
            #channel;
            get status() {
              return this.#channel.status;
            }
            get error() {
              return this.#channel.error;
            }
            constructor(settings) {
              const channel = new _channel.Channel();
              super(channel, channel, settings);
              this.#channel = channel;
            }
            async connect() {
              const ok = await this.#channel.connect();
              ok && (await super.connect());
              return ok;
            }
            async close() {
              this.#channel.close();
              return await super.close();
            }
            async update(settings) {
              this.#channel.send('connect', settings);
            }
            listen(data) {
              const audio = _utils.RealtimeUtils.arrayBufferToBase64(data.mono);
              this.#channel.send('listen', {
                audio
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfd3NDb25maWciLCJyZXF1aXJlIiwiX2NoYW5uZWwiLCJfZXZlbnRzIiwiU0VSVkVSX1VSTCIsInVybCIsIkNoYW5uZWwiLCJFdmVudHMiLCJjaGFubmVsIiwiY3JlYXRlZCIsInN0YXR1cyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJvbiIsIm9ub3BlbiIsIm9uY2xvc2UiLCJvbm1lc3NhZ2UiLCIjb25vcGVuIiwidHJpZ2dlciIsIiNvbmNsb3NlIiwibWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJ3YXJuIiwiZXhjIiwibG9nIiwiY2xlYW51cCIsIiNjbGVhbnVwIiwib2ZmIiwiY29ubmVjdCIsImNsb3NlIiwic2VuZCIsInN0cmluZ2lmeSIsImV4cG9ydHMiLCJfYmFzZSIsIl91dGlscyIsIkNsaWVudFNlc3Npb24iLCJDbGllbnRTZXNzaW9uQmFzZSIsInNldHRpbmdzIiwib2siLCJ1cGRhdGUiLCJsaXN0ZW4iLCJhdWRpbyIsIlJlYWx0aW1lVXRpbHMiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwibW9ubyJdLCJzb3VyY2VzIjpbIi9jaGFubmVsLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUVBLE1BQU1HLFVBQVUsR0FBR0osU0FBQSxDQUFBSyxHQUFLO1VBRWxCLE1BQU9DLE9BQVEsU0FBUUgsT0FBQSxDQUFBSSxNQUFNO1lBQ2xDLENBQUFDLE9BQVE7WUFDUixDQUFBQyxPQUFRLEdBQUcsS0FBSztZQUVoQixJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsTUFBTTtnQkFBRUE7Y0FBTSxDQUFFLEdBQUcsSUFB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O2NBQUksQ0FBRSxDQUFDLENBQUM7WUFDcEQ7O1VBQ0FlLE9BQUEsQ0FBQS9CLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUQsSUFBQWdDLEtBQUEsR0FBQXJDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBc0MsTUFBQSxHQUFBdEMsT0FBQTtVQUVPO1VBQVUsTUFBT3VDLGFBQWMsU0FBUUYsS0FBQSxDQUFBRyxpQkFBaUI7WUFDOUQsQ0FBQWpDLE9BQVE7WUFFUixJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxDQUFDRSxNQUFNO1lBQzVCO1lBRUEsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFILE9BQVEsQ0FBQ0csS0FBSztZQUMzQjtZQUVBQyxZQUFZOEIsUUFBdUM7Y0FDbEQsTUFBTWxDLE9BQU8sR0FBRyxJQUFJTixRQUFBLENBQUFJLE9BQU8sRUFBRTtjQUM3QixLQUFLLENBQUNFLE9BQU8sRUFBRUEsT0FBTyxFQUFFa0MsUUFBUSxDQUFDO2NBRWpDLElBQUksQ0FBQyxDQUFBbEMsT0FBUSxHQUFHQSxPQUFPO1lBQ3hCO1lBRUEsTUFBTXlCLE9BQU9BLENBQUE7Y0FDWixNQUFNVSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW5DLE9BQVEsQ0FBQ3lCLE9BQU8sRUFBRTtjQUN4Q1UsRUFBRSxLQUFLLE1BQU0sS0FBSyxDQUFDVixPQUFPLEVBQUUsQ0FBQztjQUU3QixPQUFPVSxFQUFFO1lBQ1Y7WUFFQSxNQUFNVCxLQUFLQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUExQixPQUFRLENBQUMwQixLQUFLLEVBQUU7Y0FDckIsT0FBTyxNQUFNLEtBQUssQ0FBQ0EsS0FBSyxFQUFFO1lBQzNCO1lBRUEsTUFBTVUsTUFBTUEsQ0FBQ0YsUUFBeUQ7Y0FDckUsSUFBSSxDQUFDLENBQUFsQyxPQUFRLENBQUMyQixJQUFJLENBQUMsU0FBUyxFQUFFTyxRQUFRLENBQUM7WUFDeEM7WUFFQUcsTUFBTUEsQ0FBQ3ZCLElBQTJDO2NBQ2pELE1BQU13QixLQUFLLEdBQUdQLE1BQUEsQ0FBQVEsYUFBYSxDQUFDQyxtQkFBbUIsQ0FBQzFCLElBQUksQ0FBQzJCLElBQUksQ0FBQztjQUMxRCxJQUFJLENBQUMsQ0FBQXpDLE9BQVEsQ0FBQzJCLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQUVXO2NBQUssQ0FBRSxDQUFDO1lBQ3hDOztVQUNBVCxPQUFBLENBQUFHLGFBQUEsR0FBQUEsYUFBQSIsImlnbm9yZUxpc3QiOltdfQ==