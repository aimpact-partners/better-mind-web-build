System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ChannelStatusType, IChannelSettings, Channel, __beyond_pkg, hmr;
  _export({
    ChannelStatusType: void 0,
    IChannelSettings: void 0,
    Channel: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsEvents007Events) {
      dependency_1 = _beyondJsEvents007Events;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/channel"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/events/events', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2939146147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Channel = void 0;
          var _events = require("@beyond-js/events/events");
          /*bundle*/
          class Channel extends _events.Events {
            #settings;
            #ws;
            get ws() {
              return this.#ws;
            }
            // Determine if running in the browser or Node.js
            static get browser() {
              return !globalThis.process?.versions?.node;
            }
            get status() {
              if (!this.#ws) return 'closed';
              const {
                readyState: state
              } = this.#ws;
              if (this.#error) {
                return 'error';
              } else if (state === this.#ws.CONNECTING) {
                return 'connecting';
              } else if (state === this.#ws.OPEN) {
                return 'open';
              } else if (state === this.#ws.CLOSING) {
                return 'closing';
              } else if (state === this.#ws.CLOSED) {
                return 'closed';
              }
            }
            #error;
            get error() {
              return this.#error;
            }
            #listeners = {};
            constructor(settings) {
              super();
              if (!settings?.url) throw new Error(`Invalid settings. Attribute 'url' must be specified`);
              this.#settings = settings;
            }
            async #create() {
              if (Channel.browser) {
                // Browser WebSocket setup
                const WebSocket = globalThis.WebSocket;
                const {
                  url,
                  headers
                } = this.#settings;
                if (headers && !(headers instanceof Array)) {
                  throw new Error('Invalid headers specification. An array was expected when client is a browser');
                }
                this.#ws = new WebSocket(url, headers);
                // Define event handlers for the browser
                this.#listeners = {
                  open: () => this.trigger('open'),
                  message: event => this.trigger('message', event.data),
                  close: event => this.trigger('close', event.code, event.reason),
                  error: event => this.trigger('error', event)
                };
                // Attach listeners using addEventListener
                for (const [event, listener] of Object.entries(this.#listeners)) {
                  this.#ws.addEventListener(event, listener);
                }
              } else {
                // Node.js WebSocket setup
                const {
                  WebSocket
                } = await bimport('ws');
                const {
                  url,
                  headers
                } = this.#settings;
                if (headers && headers instanceof Array) {
                  throw new Error('Invalid headers specification. An object was expected when running on node.js');
                }
                this.#ws = new WebSocket(url, {
                  headers
                });
                // Define event handlers for node.js
                this.#listeners = {
                  open: () => this.trigger('open'),
                  message: data => this.trigger('message', data),
                  close: (code, reason) => this.trigger('close', code, reason),
                  error: error => this.trigger('error', error)
                };
                // Attach listeners using .on
                for (const [event, listener] of Object.entries(this.#listeners)) {
                  this.#ws.on(event, listener);
                }
              }
              // Attach to the close event to cleanup and remove the web socket instance
              // Socket can be reconnected by calling the `connect` method
              this.on('close', this.#onclose);
            }
            /**
             * Sends data through the WebSocket
             */
            send(data) {
              const {
                status
              } = this;
              if (status !== 'open') throw new Error(`Channel is not in an 'open' state. Actual state is '${status}'`);
              this.#ws.send(data);
            }
            /**
             * Removes all event listeners and closes the WebSocket.
             */
            #cleanup() {
              // Remove all listeners based on the environment
              if (Channel.browser) {
                // Browser: Remove listeners with removeEventListener
                for (const [event, listener] of Object.entries(this.#listeners)) {
                  this.#ws.removeEventListener(event, listener);
                }
              } else {
                // Node.js: Remove listeners with off (for ws library in Node.js)
                for (const [event, listener] of Object.entries(this.#listeners)) {
                  this.#ws.off(event, listener);
                }
              }
            }
            #onclose = () => {
              this.#cleanup();
              this.#ws = void 0;
              this.off('close', this.#onclose);
            };
            async connect() {
              if (this.#ws) throw new Error(`Socket status must be 'closed' before attempting to connect`);
              await this.#create();
              const promise = new Promise(resolve => {
                const off = () => {
                  this.off('open', onopen);
                  this.off('error', onerror);
                  this.off('close', onclose);
                };
                const onopen = () => {
                  off();
                  resolve(true);
                };
                const onerror = (ws, error) => {
                  off();
                  this.#error = error;
                  resolve(false);
                };
                const onclose = (ws, code, reason) => {
                  off();
                  this.#ws = void 0;
                  if (this.#error) return;
                  this.#error = new Error(`WebSocket closed unexpectedly. Code: ${code}. Reason: ${reason}`);
                  resolve(false);
                };
                this.on('open', onopen);
                this.on('error', onerror);
                this.on('close', onclose);
              });
              return await promise;
            }
            /**
             * Closes the WebSocket connection and waits for the close event.
             */
            async close() {
              const ws = this.#ws;
              if (ws.readyState === WebSocket.CLOSED) {
                return; // Already closed
              }
              return new Promise(resolve => {
                // Listen for the close event
                const onclose = () => setTimeout(resolve, 0);
                // Attach the close listener
                this.on('close', onclose);
                // Initiate the closing handshake
                ws.close();
              });
            }
          }
          exports.Channel = Channel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ChannelStatusType",
        "name": "ChannelStatusType"
      }, {
        "im": "./index",
        "from": "IChannelSettings",
        "name": "IChannelSettings"
      }, {
        "im": "./index",
        "from": "Channel",
        "name": "Channel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ChannelStatusType') && _export("ChannelStatusType", ChannelStatusType = require ? require('./index').ChannelStatusType : value);
        (require || prop === 'IChannelSettings') && _export("IChannelSettings", IChannelSettings = require ? require('./index').IChannelSettings : value);
        (require || prop === 'Channel') && _export("Channel", Channel = require ? require('./index').Channel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIkNoYW5uZWwiLCJFdmVudHMiLCJzZXR0aW5ncyIsIndzIiwiYnJvd3NlciIsImdsb2JhbFRoaXMiLCJwcm9jZXNzIiwidmVyc2lvbnMiLCJub2RlIiwic3RhdHVzIiwicmVhZHlTdGF0ZSIsInN0YXRlIiwiZXJyb3IiLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NJTkciLCJDTE9TRUQiLCJsaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsInVybCIsIkVycm9yIiwiY3JlYXRlIiwiI2NyZWF0ZSIsIldlYlNvY2tldCIsImhlYWRlcnMiLCJBcnJheSIsIm9wZW4iLCJ0cmlnZ2VyIiwibWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsImNsb3NlIiwiY29kZSIsInJlYXNvbiIsImxpc3RlbmVyIiwiT2JqZWN0IiwiZW50cmllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW1wb3J0Iiwib24iLCJvbmNsb3NlIiwic2VuZCIsImNsZWFudXAiLCIjY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvZmYiLCIjb25jbG9zZSIsImNvbm5lY3QiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbm9wZW4iLCJvbmVycm9yIiwic2V0VGltZW91dCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBY087VUFBVSxNQUFPQyxPQUFRLFNBQVFGLE9BQUEsQ0FBQUcsTUFBTTtZQUM3QyxDQUFBQyxRQUFTO1lBRVQsQ0FBQUMsRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBRUE7WUFDQSxXQUFXQyxPQUFPQSxDQUFBO2NBQ2pCLE9BQU8sQ0FBRUMsVUFBa0Is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