System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/core", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, WorkletBridge, WorkletNode, __beyond_pkg, hmr;
  _export({
    WorkletBridge: void 0,
    WorkletNode: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Core) {
      dependency_1 = _beyondJsKernel0112Core;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/worklet-bridge"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/events/events', dependency_2]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./dispatcher
      ****************************/
      ims.set('./dispatcher', {
        hash: 63950517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WorkletDispatcher = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _events = require("@beyond-js/events/events");
          class WorkletDispatcher extends _events.Events {
            #node;
            #autoincrement = 0;
            #timeout;
            #responses = new Map();
            constructor(node, timeout = 5000) {
              super();
              this.#node = node;
              this.#timeout = timeout;
              node.port.onmessage = this.#onmessage.bind(this);
            }
            dispatch(method, data) {
              const id = this.#autoincrement++;
              this.#node.port.postMessage({
                method,
                id,
                data
              });
              const promise = new _core.PendingPromise();
              this.#responses.set(id, promise);
              const timedout = () => {
                this.#responses.delete(id);
                promise.reject({
                  code: 0,
                  text: `Request method "${method}" has timed out`
                });
              };
              this.#responses.set(id, promise);
              setTimeout(timedout, this.#timeout);
              return promise;
            }
            #onmessage(e) {
              const {
                method,
                id,
                data
              } = e.data;
              if (method !== 'response') {
                this.#node.bridge._onmessage(e);
                return;
              }
              if (id === void 0) throw new Error(`Response id is undefined on method "${method}"`);
              if (!this.#responses.has(id)) return; // Request could have reached its time out limit
              const promise = this.#responses.get(id);
              this.#responses.delete(id);
              promise.resolve({
                data
              });
            }
          }
          exports.WorkletDispatcher = WorkletDispatcher;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1617341036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WorkletBridge = void 0;
          var _events = require("@beyond-js/events/events");
          var _node = require("./node");
          /*bundle*/
          class WorkletBridge {
            #context;
            get context() {
              return this.#context;
            }
            #node;
            get node() {
              return this.#node;
            }
            #name;
            get name() {
              return this.#name;
            }
            #src;
            get src() {
              return this.#src;
            }
            #timeout;
            get timeout() {
              return this.#timeout;
            }
            #prepared = false;
            get prepared() {
              return this.#prepared;
            }
            #preparing = false;
            get preparing() {
              return this.#preparing;
            }
            #error;
            get error() {
              return this.#error;
            }
            #events;
            get _events() {
              return this.#events;
            }
            on(event, callback) {
              return this.#events.on(event, callback);
            }
            off(event, callback) {
              return this.#events.off(event, callback);
            }
            constructor(context, name, src, timeout = 1000) {
              this.#context = context;
              this.#name = name;
              this.#src = src;
              this.#timeout = timeout;
              this.#events = new _events.Events();
            }
            check() {
              if (!this.#prepared) throw new Error('Worklet not prepared. Call `setup` method before calling this method.');
              if (this.#error) throw new Error('Worklet is in an error state');
              if (!this.#node) throw new Error('Worklet node not created. Call the `create` method first');
              return true;
            }
            async setup() {
              if (this.#prepared || this.#preparing) throw new Error('Setup method already executed');
              if (this.#error) throw new Error('Setup method has already been executed with errors found');
              this.#preparing = true;
              try {
                // Load and register the AudioWorklet module
                !this.#prepared && (await this.#context.audioWorklet.addModule(this.#src));
                console.log('node registered', this.#name);
                this.#prepared = true;
              } catch (exc) {
                console.log(`Error loading "${this.#name}" worklet:\n• ${exc.message}`);
                this.#error = exc;
                return exc;
              } finally {
                this.#preparing = false;
              }
            }
            create() {
              if (this.#node) throw new Error('Worklet node already created');
              console.log('creting node', this.#name);
              this.#node = new _node.WorkletNode(this, this.#context, this.#name, this.#timeout);
              console.log('node created', this.#name);
            }
            connect(destination, output, input) {
              if (!this.check()) return;
              return this.#node.connect(destination, output, input);
            }
            disconnect() {
              if (!this.check()) return;
              const node = this.#node;
              this.#node = void 0;
              return node.disconnect();
            }
            _onmessage(e) {
              const {
                method,
                data
              } = e.data;
              if (!method || typeof method !== 'string') {
                const error = `Audio worklet "${this.#name}" ` + `has triggered an invalid event with an invalid or undefined method name. ` + `If for some reason in the future it would be required to receive events without ` + `the structure currently implemented, just make a change in this validation` + `Check the event data:`;
                console.error(error, e);
                return;
              }
              this.#events.trigger(method, data);
            }
            async dispatch(method, data) {
              if (!this.check()) return;
              return this.#node.dispatcher.dispatch(method, data);
            }
          }
          exports.WorkletBridge = WorkletBridge;
        }
      });

      /**********************
      INTERNAL MODULE: ./node
      **********************/

      ims.set('./node', {
        hash: 3643956726,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WorkletNode = void 0;
          var _dispatcher = require("./dispatcher");
          /*bundle*/
          class WorkletNode extends AudioWorkletNode {
            #bridge;
            get bridge() {
              return this.#bridge;
            }
            #dispatcher;
            get dispatcher() {
              return this.#dispatcher;
            }
            constructor(bridge, context, name, timeout = 1000) {
              super(context, name);
              this.#bridge = bridge;
              this.#dispatcher = new _dispatcher.WorkletDispatcher(this, timeout);
            }
          }
          exports.WorkletNode = WorkletNode;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "WorkletBridge",
        "name": "WorkletBridge"
      }, {
        "im": "./node",
        "from": "WorkletNode",
        "name": "WorkletNode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WorkletBridge') && _export("WorkletBridge", WorkletBridge = require ? require('./index').WorkletBridge : value);
        (require || prop === 'WorkletNode') && _export("WorkletNode", WorkletNode = require ? require('./node').WorkletNode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfZXZlbnRzIiwiV29ya2xldERpc3BhdGNoZXIiLCJFdmVudHMiLCJub2RlIiwiYXV0b2luY3JlbWVudCIsInRpbWVvdXQiLCJyZXNwb25zZXMiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInBvcnQiLCJvbm1lc3NhZ2UiLCJiaW5kIiwiZGlzcGF0Y2giLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJwb3N0TWVzc2FnZSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldCIsInRpbWVkb3V0IiwiZGVsZXRlIiwicmVqZWN0IiwiY29kZSIsInRleHQiLCJzZXRUaW1lb3V0IiwiI29ubWVzc2FnZSIsImUiLCJicmlkZ2UiLCJfb25tZXNzYWdlIiwiRXJyb3IiLCJoYXMiLCJnZXQiLCJyZXNvbHZlIiwiZXhwb3J0cyIsIl9ub2RlIiwiV29ya2xldEJyaWRnZSIsImNvbnRleHQiLCJuYW1lIiwic3JjIiwicHJlcGFyZWQiLCJwcmVwYXJpbmciLCJlcnJvciIsImV2ZW50cyIsIm9uIiwiZXZlbnQiLCJjYWxsYmFjayIsIm9mZiIsImNoZWNrIiwic2V0dXAiLCJhdWRpb1dvcmtsZXQiLCJhZGRNb2R1bGUiLCJjb25zb2xlIiwibG9nIiwiZXhjIiwibWVzc2FnZSIsImNyZWF0ZSIsIldvcmtsZXROb2RlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwib3V0cHV0IiwiaW5wdXQiLCJkaXNjb25uZWN0IiwidHJpZ2dlciIsImRpc3BhdGNoZXIiLCJfZGlzcGF0Y2hlciIsIkF1ZGlvV29ya2xldE5vZGUiXSwic291cmNlcyI6WyIvZGlzcGF0Y2hlci50cyIsIi9pbmRleC50cyIsIi9ub2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFB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