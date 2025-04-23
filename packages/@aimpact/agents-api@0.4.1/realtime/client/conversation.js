System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/utils", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Conversation, __beyond_pkg, hmr;
  _export("Conversation", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeUtils) {
      dependency_1 = _aimpactAgentsApi041RealtimeUtils;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/client/conversation"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/utils', dependency_1], ['@beyond-js/events/events', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4241077199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _items = require("./items");
          /*bundle*/
          class Conversation {
            #id;
            get id() {
              return this.#id;
            }
            #items = new _items.ConversationItems();
            get items() {
              return this.#items;
            }
            constructor(id) {
              this.#id = id;
            }
            async fetch() {}
            #onSpeechStarted(data) {}
            _process(event, data, delta) {
              switch (event) {
                case 'conversation.item.created':
                  this.#items.process(event, data);
                  break;
                case 'conversation.item.audio.delta':
                  this.#items.process(event, data, delta);
                  break;
                case 'user.speech.started':
                  this.#onSpeechStarted(data);
                  break;
              }
            }
          }
          exports.Conversation = Conversation;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 255566702,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _utils = require("@aimpact/agents-api/realtime/utils");
          class Item {
            #id;
            get id() {
              return this.#id;
            }
            #type;
            get type() {
              return this.#type;
            }
            #role;
            get role() {
              return this.#role;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            constructor(data) {
              this.#id = data.id;
              this.#type = data.type;
              this.#role = data.role;
            }
            onAudioDelta(data, delta) {
              this.#audio = this.#audio ? _utils.RealtimeUtils.mergeInt16Arrays(this.#audio, delta) : delta;
            }
            /**
             * This method can be useful in the future to store in memory in the client the audio of the item sent
             * by the user when speaking
             * @param data
             */
            onSpeechStarted(data) {}
          }
          exports.Item = Item;
        }
      });

      /***********************
      INTERNAL MODULE: ./items
      ***********************/

      ims.set('./items', {
        hash: 2951873544,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItems = void 0;
          var _events = require("@beyond-js/events/events");
          var _item = require("./item");
          class ConversationItems extends _events.Events {
            #values = [];
            get values() {
              return this.#values;
            }
            #lookup = new Map();
            #onItemCreated(data) {
              const item = new _item.Item(data.item);
              this.#values.push(item);
              this.#lookup.set(item.id, item);
              this.trigger('change');
            }
            #onItemAudioDelta(data, delta) {
              if (!this.#lookup.has(data.item.id)) {
                console.warn(`Item "${data.item.id}" not found on onItemAudioDelta event`);
                return;
              }
              const item = this.#lookup.get(data.item.id);
              item.onAudioDelta(data, delta);
            }
            #onSpeechStarted(data) {
              if (!this.#lookup.has(data.item.id)) {
                console.warn(`Item "${data.item.id}" not found on onItemAudioDelta event`);
                return;
              }
              const item = this.#lookup.get(data.item.id);
              item.onSpeechStarted(data);
            }
            process(event, data, delta) {
              switch (event) {
                case 'conversation.item.created':
                  this.#onItemCreated(data);
                  break;
                case 'conversation.item.audio.delta':
                  this.#onItemAudioDelta(data, delta);
                  break;
                case 'user.speech.started':
                  this.#onSpeechStarted(data);
                  break;
              }
            }
          }
          exports.ConversationItems = ConversationItems;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Conversation",
        "name": "Conversation"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Conversation') && _export("Conversation", Conversation = require ? require('./index').Conversation : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbXMiLCJyZXF1aXJlIiwiQ29udmVyc2F0aW9uIiwiaWQiLCJpdGVtcyIsIkNvbnZlcnNhdGlvbkl0ZW1zIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsIm9uU3BlZWNoU3RhcnRlZCIsIiNvblNwZWVjaFN0YXJ0ZWQiLCJkYXRhIiwiX3Byb2Nlc3MiLCJldmVudCIsImRlbHRhIiwicHJvY2VzcyIsImV4cG9ydHMiLCJfdXRpbHMiLCJJdGVtIiwidHlwZSIsInJvbGUiLCJhdWRpbyIsIm9uQXVkaW9EZWx0YSIsIlJlYWx0aW1lVXRpbHMiLCJtZXJnZUludDE2QXJyYXlzIiwiX2V2ZW50cyIsIl9pdGVtIiwiRXZlbnRzIiwidmFsdWVzIiwibG9va3VwIiwiTWFwIiwib25JdGVtQ3JlYXRlZCIsIiNvbkl0ZW1DcmVhdGVkIiwiaXRlbSIsInB1c2giLCJzZXQiLCJ0cmlnZ2VyIiwib25JdGVtQXVkaW9EZWx0YSIsIiNvbkl0ZW1BdWRpb0RlbHRhIiwiaGFzIiwiY29uc29sZSIsIndhcm4iLCJnZXQiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvaXRlbS50cyIsIi9pdGVtcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUtBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsTUFBT0MsWUFBWTtZQUNuQyxDQUFBQyxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFFQSxDQUFBQyxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBSyxpQkFBaUIsRUFBRTtZQUNoQyxJQUFJRCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBRSxZQUFZSCxFQUFVO2NBQ3JCLElBQUksQ0FBQyxDQUFBQSxFQUFHLEdBQUdBLEVBQUU7WUFD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