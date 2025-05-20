System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model", "@beyond-js/http-suite@0.1.0/api", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/chat-sdk@1.5.4/startup", "@beyond-js/reactive@2.0.5/entities/collection", "@beyond-js/reactive@2.0.5/entities/item", "@beyond-js/kernel@0.1.12/core", "uuid@11.1.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Chats, IChatProperties, IChat, Chat, Messages, Message, __beyond_pkg, hmr;
  _export({
    Chats: void 0,
    IChatProperties: void 0,
    IChat: void 0,
    Chat: void 0,
    Messages: void 0,
    Message: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205Model) {
      dependency_1 = _beyondJsReactive205Model;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_2 = _beyondJsHttpSuite010Api;
    }, function (_aimpactChatSdk154Session) {
      dependency_3 = _aimpactChatSdk154Session;
    }, function (_aimpactChatSdk154Startup) {
      dependency_4 = _aimpactChatSdk154Startup;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_5 = _beyondJsReactive205EntitiesCollection;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_6 = _beyondJsReactive205EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.4/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@beyond-js/reactive/entities/collection', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8]]);
      ims = new Map();
      /****************************************
      INTERNAL MODULE: ./chats/collection/index
      ****************************************/
      ims.set('./chats/collection/index', {
        hash: 1436428000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/
          class Chats extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.api);
            }
            #items = [];
            get items() {
              return this.#items;
            }
            async load() {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/chats`);
              if (!status) {
                throw new Error('error loading chat');
              }
              this.#items = data.items;
              return {
                status,
                data
              };
            }
            async addItem(item) {
              this.#items.unshift(item);
              this.triggerEvent('change');
            }
          }
          exports.Chats = Chats;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./chats/collection/provider
      *******************************************/

      ims.set('./chats/collection/provider', {
        hash: 1443553202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatCollectionProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          class ChatCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#parent = parent;
            }
            async list() {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/chats`);
              if (!status) {
                throw new Error('error loading chat');
              }
              return {
                status,
                data
              };
            }
          }
          exports.ChatCollectionProvider = ChatCollectionProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./chats/interfaces/chat
      ***************************************/

      ims.set('./chats/interfaces/chat', {
        hash: 254662399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************
      INTERNAL MODULE: ./chats/interfaces/message
      ******************************************/

      ims.set('./chats/interfaces/message', {
        hash: 2579787146,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./chats/item/index
      **********************************/

      ims.set('./chats/item/index', {
        hash: 46795035,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _core = require("@beyond-js/kernel/core");
          var _api = require("@beyond-js/http-suite/api");
          var _item2 = require("../messages/item");
          var _messages = require("../messages");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _provider = require("./provider");
          var _uuid = require("uuid");
          /*bundle*/ // ChatItem

          class Chat extends _item.Item {
            #api;
            get api() {
              return this.#api;
            }
            #errors = [];
            get errors() {
              return this.#errors;
            }
            #currentMessage;
            #response;
            #messages;
            get messages() {
              return this.#messages;
            }
            constructor({
              id = undefined,
              ...specs
            } = {}) {
              super({
                id,
                entity: 'Chat',
                ...specs,
                properties: ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'user', 'children', 'knowledgeBoxId', 'metadata', 'transcribing'],
                provider: _provider.ChatProvider
              });
              this.#api = new _api.Api(_startup.sdkConfig.api);
              globalThis.chat = this;
              if (!id) this.id = (0, _uuid.v4)();
              this.#listen();
              this.#messages = new _messages.Messages({
                chatId: this.id
              });
              this.#messages.on('new.message', () => {
                this.trigger('new.message');
              });
              // console.log(`chat is being exposed in console as chat`, id);
            }
            #listen = () => {
              this.#api.on('stream.response', this.#onListen);
              this.#api.on('action.received', data => {
                if (data) {
                  try {
                    const parsed = JSON.parse(data);
                    this.trigger('action.received', parsed.metadata);
                  } catch (e) {
                    console.warn('the data coudnt be parsed', data);
                  }
                }
                try {
                  if (this.#api.actions) {
                    this.#api.actions.forEach(data => {
                      const action = JSON.parse(data);
                      if (action.type === 'transcription') {
                        this.#currentMessage.set({
                          content: action.data.transcription,
                          streaming: false
                        });
                        //once the transcription is received, we add the system message to the chat
                        if (this.#response && !this.#messages.has(this.#response.id)) this.messages.add(this.#response);
                      }
                    });
                  }
                  // const action = JSON.parse(this.#api.actions);
                } catch (e) {
                  console.error(e);
                }
              });
            };
            loadAll = async specs => {
              const response = await this.load(specs);
              const collection = this.#messages;
              collection.on('change', this.triggerEvent);
              if (response.messages?.length) {
                await collection.setEntries(response.messages);
              }
              this.ready = true;
              this.trigger('change');
              this.#messages = collection;
            };
            #onListen = () => {
              if (!this.#response) return;
              this.#response.content = this.#api.streamResponse;
              this.#response.set({
                content: this.#api.stringContent,
                actions: this.#api.actions
              });
              // this.#response.publish();
              this.trigger('content.updated');
            };
            getData() {
              const properties = this.getProperties();
              properties.messages = this.#messages.getData();
              return properties;
            }
            async sendMessage(content) {
              try {
                this.fetching = true;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const uri = `/chats/${this.id}/messages`;
                const promise = new _core.PendingPromise();
                const item = new _item2.Message({
                  chatId: this.id,
                  role: 'user',
                  content
                });
                this.#currentMessage = item;
                const onFinish = async response => {
                  this.trigger('response.finished');
                  await this.#response.set({
                    streaming: false
                  });
                  this.#response = undefined;
                  promise.resolve(item);
                  // this.#offEvents();
                };
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                this.messages.add(item);
                this.messages.add(this.#response);
                const onError = e => {
                  this.#errors.push(e);
                  this.#response.set({
                    error: e
                  });
                  console.error(`onError`, e);
                };
                await this.#api.bearer(token).stream(uri, {
                  ...item.getProperties()
                }).then(onFinish).catch(onError);
                return promise;
              } catch (e) {
                console.error(`capturamos error en el modelo`, e);
              } finally {
                this.fetching = false;
              }
            }
            async sendAudio(message) {
              try {
                this.fetching = true;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const uri = `/chats/${this.id}/messages/audio`;
                const promise = new _core.PendingPromise();
                const item = new _item2.Message({
                  chatId: this.id,
                  audio: message,
                  role: 'user',
                  streaming: true,
                  transcribing: true
                });
                this.#currentMessage = item;
                const onFinish = async response => {
                  await this.#response.set({
                    streaming: false,
                    transcribing: false
                  });
                  this.trigger('response.finished');
                  // this.#response = undefined;
                  promise.resolve(item);
                  // this.#offEvents();
                };
                const onError = e => {
                  console.error(e);
                };
                this.messages.add(item);
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                const specs = {
                  ...item.getProperties(),
                  audio: new File([item.audio], 'audio.mp4', {
                    type: 'audio/mp4'
                  }),
                  multipart: true
                };
                this.#api.bearer(token).stream(uri, specs).then(onFinish).catch(onError);
                globalThis.setTimeout(() => onFinish({}), 3000); // TODO: remove this
                return promise;
              } catch (e) {
                throw new Error(e);
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async transcribe(audio) {
              try {
                const uri = `/audios/transcribe`;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const response = await this.#api.bearer(token).post(uri, {
                  multipart: true,
                  audio: audio
                });
                return response;
              } catch (e) {
                //todo: how to handle other kind of errors
                throw e;
              }
            }
            getMessage(id) {
              return this.#messages.get(id);
            }
            response(data) {
              return {
                status: true,
                data
              };
            }
            async create() {
              const response = await this.#api.post('/chats', {
                id: this.id,
                name: 'My chat',
                projectId: '02d991dd-8d57-42f3-b155-8e7133482c19',
                uid: _session.sessionWrapper.user.id,
                metadata: {
                  prompt: 'topic-q&a'
                },
                language: {
                  default: 'es'
                }
              });
              this.set(response.data);
            }
          }
          exports.Chat = Chat;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/item/provider
      *************************************/

      ims.set('./chats/item/provider', {
        hash: 1034353935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
          class ChatProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#parent = parent;
            }
            async load(specs) {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/chats/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading chat');
              }
              return data;
            }
          }
          exports.ChatProvider = ChatProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./chats/messages/index
      **************************************/

      ims.set('./chats/messages/index', {
        hash: 1230943583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          /*bundle*/ // import { MessageProvider } from '@aimpact/chat-api/provider';

          class Messages extends _model.ReactiveModel {
            item = _item.Message;
            #items = [];
            #map = new Map();
            get items() {
              return this.#items;
            }
            #id;
            constructor({
              chatId
            }) {
              super();
              this.#id = chatId;
            }
            setEntries(data) {
              this.#items = data.map(item => {
                const message = new _item.Message(item);
                this.#map.set(message.id, message);
                return message;
              });
            }
            get(id) {
              return this.#map.get(id);
            }
            add(item) {
              this.#items.push(item);
              this.#map.set(item.id, item);
              this.trigger('new.message');
            }
            addTestMessage() {
              const message = new _item.Message({
                chatId: this.#id,
                role: 'system',
                streaming: true
              });
              this.add(message);
              const baseText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
              const repeatedText = baseText.repeat(5);
              const words = repeatedText.split(' ');
              let currentContent = '';
              let index = 0;
              const interval = setInterval(() => {
                if (index >= words.length) {
                  clearInterval(interval);
                  return;
                }
                currentContent += words[index] + ' ';
                message.set({
                  content: currentContent
                });
                index++;
              }, 100); // Add a new word every 100ms
            }
            getData() {
              return this.#items.map(item => item.getProperties());
            }
            has(id) {
              return this.#map.has(id);
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/messages/item
      *************************************/

      ims.set('./chats/messages/item', {
        hash: 3531003867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/ // ChatItem

          class Message extends _model.ReactiveModel {
            #api;
            #response = '';
            //#endregion
            #chat;
            localFields = ['audio'];
            #parsedContent;
            get response() {
              return this.#response;
            }
            #type;
            get type() {
              return this.#type;
            }
            #previous;
            get previous() {
              return this.#previous;
            }
            set previous(value) {
              if (value === this.#previous) return;
              this.#previous = value;
              this.trigger('previous.changed');
            }
            constructor({
              id = undefined,
              chat,
              ...specs
            }) {
              super({
                id,
                ...specs,
                properties: ['id', 'chatId', 'audio', 'userId', 'role', 'content', 'usage', 'timestamp', 'streaming', 'transcribing', 'actions', 'error']
              });
              this.#chat = chat;
              if (!id) this.id = (0, _uuid.v4)();
              const api = new _api.Api(_startup.sdkConfig.api);
              this.#api = api;
              this.#type = specs.type ?? 'message';
              this.reactiveProps(['autoplay']);
              super.ready = true;
            }
          }
          //
          exports.Message = Message;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chats/collection/index",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./chats/interfaces/chat",
        "from": "IChatProperties",
        "name": "IChatProperties"
      }, {
        "im": "./chats/interfaces/chat",
        "from": "IChat",
        "name": "IChat"
      }, {
        "im": "./chats/item/index",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chats/messages/index",
        "from": "Messages",
        "name": "Messages"
      }, {
        "im": "./chats/messages/item",
        "from": "Message",
        "name": "Message"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chats/collection/index').Chats : value);
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./chats/interfaces/chat').IChatProperties : value);
        (require || prop === 'IChat') && _export("IChat", IChat = require ? require('./chats/interfaces/chat').IChat : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chats/item/index').Chat : value);
        (require || prop === 'Messages') && _export("Messages", Messages = require ? require('./chats/messages/index').Messages : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./chats/messages/item').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImVycm9ycyIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiTWVzc2FnZXMiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXIiLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsInNldCIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwic3RyZWFtaW5nIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJsb2FkQWxsIiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCJyZWFkeSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIk1lc3NhZ2UiLCJyb2xlIiwib25GaW5pc2giLCJyZXNvbHZlIiwib25FcnJvciIsInB1c2giLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJzZW5kQXVkaW8iLCJtZXNzYWdlIiwiYXVkaW8iLCJ0cmFuc2NyaWJpbmciLCJGaWxlIiwibXVsdGlwYXJ0Iiwic2V0VGltZW91dCIsInRyYW5zY3JpYmUiLCJwb3N0IiwiZ2V0TWVzc2FnZSIsImNyZWF0ZSIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJwcm9tcHQiLCJsYW5ndWFnZSIsImRlZmF1bHQiLCJtYXAiLCJNYXAiLCJhZGRUZXN0TWVzc2FnZSIsImJhc2VUZXh0IiwicmVwZWF0ZWRUZXh0IiwicmVwZWF0Iiwid29yZHMiLCJzcGxpdCIsImN1cnJlbnRDb250ZW50IiwiaW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInByZXZpb3VzIiwicmVhY3RpdmVQcm9wcyJdLCJzb3VyY2VzIjpbIi9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi9jaGF0cy9tZXNzYWdlcy9pbmRleC50cyIsIi9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQU9JLEtBQU0sU0FBUUwsTUFBQSxDQUFBTSxhQUFvQjtZQUN6RCxDQUFBQyxHQUFJO1lBRUpDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQU8sR0FBRyxDQUFDTCxRQUFBLENBQUFNLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO1lBQ25DO1lBRUEsQ0FBQUksS0FBTSxHQUFVLEVBQUU7WUFDbEIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxNQUFNQyxJQUFJQSxDQUFBO2NBQ1QsTUFBTUMsS0FBSyxHQUFHLE1BQU1WLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Y0FDckQsSUFBSSxDQUFDLENBQUFULEdBQUksQ0FBQ1UsTUFBTSxDQUFDSixLQUFLLENBQUM7Y0FDdkIsTUFBTTtnQkFBRUssTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFDO2NBQ3RELElBQUksQ0FBQ0YsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztjQUV0QyxJQUFJLENBQUMsQ0FBQVYsS0FBTSxHQUFHUSxJQUFJLENBQUNSLEtBQUs7Y0FFeEIsT0FBTztnQkFBRU8sTUFBTTtnQkFBRUM7Y0FBSSxDQUFFO1lBQ3hCO1lBRUEsTUFBTUcsT0FBT0EsQ0FBQ0MsSUFBSTtjQUNqQixJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxPQUFPLENBQUNELElBQUksQ0FBQztjQUN6QixJQUFJLENBQUNFLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7O1VBQ0FDLE9BQUEsQ0FBQXJCLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0QsSUFBQUgsSUFBQSxHQUFBRCxPQUFBO1VBSUEsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ00sTUFBTzBCLHNCQUFzQjtZQUNsQyxDQUFBcEIsR0FBSTtZQUNKLENBQUFxQixNQUFPO1lBRVBwQixZQUFZb0IsTUFBYTtjQUN4QixJQUFJLENBQUMsQ0FBQXJCLEdBQUksR0FBRyxJQUFJTCxJQUFBLENBQUFPLEdBQUcsQ0FBQ0wsUUFBQSxDQUFBTSxTQUFTLENBQUNILEdBQUcsQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQXFCLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBLE1BQU1DLElBQUlBLENBQUE7Y0FDVCxNQUFNaEIsS0FBSyxHQUFHLE1BQU1WLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Y0FDckQsSUFBSSxDQUFDLENBQUFULEdBQUksQ0FBQ1UsTUFBTSxDQUFDSixLQUFLLENBQUM7Y0FDdkIsTUFBTTtnQkFBRUssTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFDO2NBQ3RELElBQUksQ0FBQ0YsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztjQUV0QyxPQUFPO2dCQUFFSCxNQUFNO2dCQUFFQztjQUFJLENBQUU7WUFDeEI7O1VBQ0FPLE9BQUEsQ0FBQUMsc0JBQUEsR0FBQUEsc0JBQUE7Ozs7Ozs7Ozs7O1VDeEJEOztVQUVBRyxNQUFBLENBQUFDLGNBQUEsQ0FBQUwsT0FBQTtZQUNBTSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFGLE1BQUEsQ0FBQUMsY0FBQSxDQUFBTCxPQUFBO1lBQ0FNLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxLQUFBLEdBQUFoQyxPQUFBO1VBQ0EsSUFBQWlDLEtBQUEsR0FBQWpDLE9BQUE7VUFHQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBa0MsTUFBQSxHQUFBbEMsT0FBQTtVQUNBLElBQUFtQyxTQUFBLEdBQUFuQyxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQW9DLFNBQUEsR0FBQXBDLE9BQUE7VUFDQSxJQUFBcUMsS0FBQSxHQUFBckMsT0FBQTtVQUVPLFdBWFA7O1VBV2lCLE1BQU9zQyxJQUFLLFNBQVFOLEtBQUEsQ0FBQU8sSUFBVztZQWdCL0MsQ0FBQWpDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUVBLENBQUFrQyxNQUFPLEdBQVUsRUFBRTtZQUNuQixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLGNBQWU7WUFDZixDQUFBQyxRQUFTO1lBQ1QsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUFwQyxZQUFZO2NBQUVxQyxFQUFFLEdBQUdDLFNBQVM7Y0FBRSxHQUFHQztZQUFLLENBQUUsR0FBRyxFQUFFO2NBQzVDLEtBQUssQ0FBQztnQkFDTEYsRUFBRTtnQkFDRkcsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBR0QsS0FBSztnQkFDUkUsVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEVBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLGNBQWMsQ0FDZDtnQkFFREMsUUFBUSxFQUFFYixTQUFBLENBQUFjO2VBQ1YsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBNUMsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQU8sR0FBRyxDQUFDTCxRQUFBLENBQUFNLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO2NBRWxDNkMsVUFBVSxDQUFDQyxJQUFJLEdBQUcsSUFBSTtjQUN0QixJQUFJLENBQUNSLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUUsR0FBRyxJQUFBUCxLQUFBLENBQUFnQixFQUFJLEdBQUU7Y0FDekIsSUFBSSxDQUFDLENBQUFDLE1BQU8sRUFBRTtjQUVkLElBQUksQ0FBQyxDQUFBWCxRQUFTLEdBQUcsSUFBSVIsU0FBQSxDQUFBb0IsUUFBUSxDQUFDO2dCQUFFQyxNQUFNLEVBQUUsSUFBSSxDQUFDWjtjQUFFLENBQUUsQ0FBQztjQUNsRCxJQUFJLENBQUMsQ0FBQUQsUUFBUyxDQUFDYyxFQUFFLENBQUMsYUFBYSxFQUFFLE1BQUs7Z0JBQ3JDLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsQ0FBQztjQUM1QixDQUFDLENBQUM7Y0FDRjtZQUNEO1lBRUEsQ0FBQUosTUFBTyxHQUFHSyxDQUFBLEtBQUs7Y0FDZCxJQUFJLENBQUMsQ0FBQXJELEdBQUksQ0FBQ21ELEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQUcsUUFBUyxDQUFDO2NBQy9DLElBQUksQ0FBQyxDQUFBdEQsR0FBSSxDQUFDbUQsRUFBRSxDQUFDLGlCQUFpQixFQUFFdkMsSUFBSSxJQUFHO2dCQUN0QyxJQUFJQSxJQUFJLEVBQUU7a0JBQ1QsSUFBSTtvQkFDSCxNQUFNMkMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQzdDLElBQUksQ0FBQztvQkFDL0IsSUFBSSxDQUFDd0MsT0FBTyxDQUFDLGlCQUFpQixFQUFFRyxNQUFNLENBQUNHLFFBQVEsQ0FBQzttQkFDaEQsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7b0JBQ1hDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLDJCQUEyQixFQUFFakQsSUFBSSxDQUFDOzs7Z0JBR2pELElBQUk7a0JBQ0gsSUFBSSxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDOEQsT0FBTyxFQUFFO29CQUN0QixJQUFJLENBQUMsQ0FBQTlELEdBQUksQ0FBQzhELE9BQU8sQ0FBQ0MsT0FBTyxDQUFDbkQsSUFBSSxJQUFHO3NCQUNoQyxNQUFNb0QsTUFBTSxHQUFHUixJQUFJLENBQUNDLEtBQUssQ0FBQzdDLElBQUksQ0FBQztzQkFDL0IsSUFBSW9ELE1BQU0sQ0FBQ0MsSUFBSSxLQUFLLGVBQWUsRUFBRTt3QkFDcEMsSUFBSSxDQUFDLENBQUE5QixjQUFlLENBQUMrQixHQUFHLENBQUM7MEJBQUVDLE9BQU8sRUFBRUgsTUFBTSxDQUFDcEQsSUFBSSxDQUFDd0QsYUFBYTswQkFBRUMsU0FBUyxFQUFFO3dCQUFLLENBQUUsQ0FBQzt3QkFDbEY7d0JBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQWpDLFFBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBQyxRQUFTLENBQUNpQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUFsQyxRQUFTLENBQUNFLEVBQUUsQ0FBQyxFQUMzRCxJQUFJLENBQUNELFFBQVEsQ0FBQ2tDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQW5DLFFBQVMsQ0FBQzs7b0JBRXBDLENBQUMsQ0FBQzs7a0JBRUg7aUJBQ0EsQ0FBQyxPQUFPdUIsQ0FBQyxFQUFFO2tCQUNYQyxPQUFPLENBQUNZLEtBQUssQ0FBQ2IsQ0FBQyxDQUFDOztjQUVsQixDQUFDLENBQUM7WUFDSCxDQUFDO1lBRURjLE9BQU8sR0FBRyxNQUFNakMsS0FBSyxJQUFHO2NBQ3ZCLE1BQU1KLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQy9CLElBQUksQ0FBQ21DLEtBQUssQ0FBQztjQUN2QyxNQUFNa0MsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFBckMsUUFBUztjQUNqQ3FDLFVBQVUsQ0FBQ3ZCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDakMsWUFBWSxDQUFDO2NBRTFDLElBQUlrQixRQUFRLENBQUNDLFFBQVEsRUFBRXNDLE1BQU0sRUFBRTtnQkFDOUIsTUFBTUQsVUFBVSxDQUFDRSxVQUFVLENBQUN4QyxRQUFRLENBQUNDLFFBQVEsQ0FBQzs7Y0FFL0MsSUFBSSxDQUFDd0MsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDekIsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0QixJQUFJLENBQUMsQ0FBQWYsUUFBUyxHQUFHcUMsVUFBVTtZQUM1QixDQUFDO1lBRUQsQ0FBQXBCLFFBQVMsR0FBR3dCLENBQUEsS0FBSztjQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUExQyxRQUFTLEVBQUU7Y0FDckIsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQytCLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQW5FLEdBQUksQ0FBQytFLGNBQWM7Y0FFakQsSUFBSSxDQUFDLENBQUEzQyxRQUFTLENBQUM4QixHQUFHLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQW5FLEdBQUksQ0FBQ2dGLGFBQWE7Z0JBQUVsQixPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE5RCxHQUFJLENBQUM4RDtjQUFPLENBQUUsQ0FBQztjQUVwRjtjQUNBLElBQUksQ0FBQ1YsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLENBQUM7WUFFRDZCLE9BQU9BLENBQUE7Y0FDTixNQUFNdkMsVUFBVSxHQUFHLElBQUksQ0FBQ3dDLGFBQWEsRUFBRTtjQUN2Q3hDLFVBQVUsQ0FBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUM0QyxPQUFPLEVBQUU7Y0FDOUMsT0FBT3ZDLFVBQVU7WUFDbEI7WUFDQSxNQUFNeUMsV0FBV0EsQ0FBQ2hCLE9BQWU7Y0FDaEMsSUFBSTtnQkFDSCxJQUFJLENBQUNpQixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTlFLEtBQUssR0FBRyxNQUFNVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhO2dCQUNyRCxNQUFNNEUsR0FBRyxHQUFHLFVBQVUsSUFBSSxDQUFDL0MsRUFBRSxXQUFXO2dCQUN4QyxNQUFNZ0QsT0FBTyxHQUFHLElBQUkzRCxLQUFBLENBQUE0RCxjQUFjLEVBQVc7Z0JBQzdDLE1BQU12RSxJQUFJLEdBQUcsSUFBSVksTUFBQSxDQUFBNEQsT0FBTyxDQUFDO2tCQUFFdEMsTUFBTSxFQUFFLElBQUksQ0FBQ1osRUFBRTtrQkFBRW1ELElBQUksRUFBRSxNQUFNO2tCQUFFdEI7Z0JBQU8sQ0FBRSxDQUFDO2dCQUNwRSxJQUFJLENBQUMsQ0FBQWhDLGNBQWUsR0FBR25CLElBQUk7Z0JBQzNCLE1BQU0wRSxRQUFRLEdBQUcsTUFBTXRELFFBQVEsSUFBRztrQkFDakMsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2tCQUNqQyxNQUFNLElBQUksQ0FBQyxDQUFBaEIsUUFBUyxDQUFDOEIsR0FBRyxDQUFDO29CQUFFRyxTQUFTLEVBQUU7a0JBQUssQ0FBRSxDQUFDO2tCQUU5QyxJQUFJLENBQUMsQ0FBQWpDLFFBQVMsR0FBR0csU0FBUztrQkFFMUIrQyxPQUFPLENBQUNLLE9BQU8sQ0FBQzNFLElBQUksQ0FBQztrQkFFckI7Z0JBQ0QsQ0FBQztnQkFFRCxJQUFJLENBQUMsQ0FBQW9CLFFBQVMsR0FBRyxJQUFJUixNQUFBLENBQUE0RCxPQUFPLENBQUM7a0JBQUV0QyxNQUFNLEVBQUUsSUFBSSxDQUFDWixFQUFFO2tCQUFFbUQsSUFBSSxFQUFFLFFBQVE7a0JBQUVwQixTQUFTLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2dCQUNsRixJQUFJLENBQUNoQyxRQUFRLENBQUNrQyxHQUFHLENBQUN2RCxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQ3FCLFFBQVEsQ0FBQ2tDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQW5DLFFBQVMsQ0FBQztnQkFDakMsTUFBTXdELE9BQU8sR0FBR2pDLENBQUMsSUFBRztrQkFDbkIsSUFBSSxDQUFDLENBQUF6QixNQUFPLENBQUMyRCxJQUFJLENBQUNsQyxDQUFDLENBQUM7a0JBQ3BCLElBQUksQ0FBQyxDQUFBdkIsUUFBUyxDQUFDOEIsR0FBRyxDQUFDO29CQUFFTSxLQUFLLEVBQUViO2tCQUFDLENBQUUsQ0FBQztrQkFDaENDLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDLFNBQVMsRUFBRWIsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUNELE1BQU0sSUFBSSxDQUFDLENBQUEzRCxHQUFJLENBQ2JVLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQ2J3RixNQUFNLENBQUNULEdBQUcsRUFBRTtrQkFBRSxHQUFHckUsSUFBSSxDQUFDa0UsYUFBYTtnQkFBRSxDQUFFLENBQUMsQ0FDeENhLElBQUksQ0FBQ0wsUUFBUSxDQUFDLENBQ2RNLEtBQUssQ0FBQ0osT0FBTyxDQUFDO2dCQUVoQixPQUFPTixPQUFPO2VBQ2QsQ0FBQyxPQUFPM0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNZLEtBQUssQ0FBQywrQkFBK0IsRUFBRWIsQ0FBQyxDQUFDO2VBQ2pELFNBQVM7Z0JBQ1QsSUFBSSxDQUFDeUIsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTWEsU0FBU0EsQ0FBQ0MsT0FBYTtjQUM1QixJQUFJO2dCQUNILElBQUksQ0FBQ2QsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU05RSxLQUFLLEdBQUcsTUFBTVYsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYTtnQkFDckQsTUFBTTRFLEdBQUcsR0FBRyxVQUFVLElBQUksQ0FBQy9DLEVBQUUsaUJBQWlCO2dCQUM5QyxNQUFNZ0QsT0FBTyxHQUFHLElBQUkzRCxLQUFBLENBQUE0RCxjQUFjLEVBQVc7Z0JBQzdDLE1BQU12RSxJQUFJLEdBQUcsSUFBSVksTUFBQSxDQUFBNEQsT0FBTyxDQUFDO2tCQUN4QnRDLE1BQU0sRUFBRSxJQUFJLENBQUNaLEVBQUU7a0JBQ2Y2RCxLQUFLLEVBQUVELE9BQU87a0JBQ2RULElBQUksRUFBRSxNQUFNO2tCQUNacEIsU0FBUyxFQUFFLElBQUk7a0JBQ2YrQixZQUFZLEVBQUU7aUJBQ2QsQ0FBQztnQkFDRixJQUFJLENBQUMsQ0FBQWpFLGNBQWUsR0FBR25CLElBQUk7Z0JBQzNCLE1BQU0wRSxRQUFRLEdBQUcsTUFBTXRELFFBQVEsSUFBRztrQkFDakMsTUFBTSxJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDOEIsR0FBRyxDQUFDO29CQUFFRyxTQUFTLEVBQUUsS0FBSztvQkFBRStCLFlBQVksRUFBRTtrQkFBSyxDQUFFLENBQUM7a0JBQ25FLElBQUksQ0FBQ2hELE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztrQkFDakM7a0JBQ0FrQyxPQUFPLENBQUNLLE9BQU8sQ0FBQzNFLElBQUksQ0FBQztrQkFFckI7Z0JBQ0QsQ0FBQztnQkFDRCxNQUFNNEUsT0FBTyxHQUFHakMsQ0FBQyxJQUFHO2tCQUNuQkMsT0FBTyxDQUFDWSxLQUFLLENBQUNiLENBQUMsQ0FBQztnQkFDakIsQ0FBQztnQkFDRCxJQUFJLENBQUN0QixRQUFRLENBQUNrQyxHQUFHLENBQUN2RCxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBb0IsUUFBUyxHQUFHLElBQUlSLE1BQUEsQ0FBQTRELE9BQU8sQ0FBQztrQkFBRXRDLE1BQU0sRUFBRSxJQUFJLENBQUNaLEVBQUU7a0JBQUVtRCxJQUFJLEVBQUUsUUFBUTtrQkFBRXBCLFNBQVMsRUFBRTtnQkFBSSxDQUFFLENBQUM7Z0JBQ2xGLE1BQU03QixLQUFLLEdBQUc7a0JBQ2IsR0FBR3hCLElBQUksQ0FBQ2tFLGFBQWEsRUFBRTtrQkFDdkJpQixLQUFLLEVBQUUsSUFBSUUsSUFBSSxDQUFDLENBQUNyRixJQUFJLENBQUNtRixLQUFLLENBQUMsRUFBRSxXQUFXLEVBQUU7b0JBQUVsQyxJQUFJLEVBQUU7a0JBQVcsQ0FBRSxDQUFDO2tCQUNqRXFDLFNBQVMsRUFBRTtpQkFDWDtnQkFFRCxJQUFJLENBQUMsQ0FBQXRHLEdBQUksQ0FBQ1UsTUFBTSxDQUFDSixLQUFLLENBQUMsQ0FBQ3dGLE1BQU0sQ0FBQ1QsR0FBRyxFQUFFN0MsS0FBSyxDQUFDLENBQUN1RCxJQUFJLENBQUNMLFFBQVEsQ0FBQyxDQUFDTSxLQUFLLENBQUNKLE9BQU8sQ0FBQztnQkFDeEUvQyxVQUFVLENBQUMwRCxVQUFVLENBQUMsTUFBTWIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELE9BQU9KLE9BQU87ZUFDZCxDQUFDLE9BQU8zQixDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJN0MsS0FBSyxDQUFDNkMsQ0FBQyxDQUFDO2dCQUNsQkMsT0FBTyxDQUFDWSxLQUFLLENBQUNiLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ3lCLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1vQixVQUFVQSxDQUFDTCxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsTUFBTWQsR0FBRyxHQUFHLG9CQUFvQjtnQkFDaEMsTUFBTS9FLEtBQUssR0FBRyxNQUFNVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhO2dCQUNyRCxNQUFNMkIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFwQyxHQUFJLENBQUNVLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUNtRyxJQUFJLENBQUNwQixHQUFHLEVBQUU7a0JBQUVpQixTQUFTLEVBQUUsSUFBSTtrQkFBRUgsS0FBSyxFQUFFQTtnQkFBSyxDQUFFLENBQUM7Z0JBRTNGLE9BQU8vRCxRQUFRO2VBQ2YsQ0FBQyxPQUFPdUIsQ0FBQyxFQUFFO2dCQUNYO2dCQUNBLE1BQU1BLENBQUM7O1lBRVQ7WUFFQStDLFVBQVVBLENBQUNwRSxFQUFVO2NBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUFELFFBQVMsQ0FBQ3hCLEdBQUcsQ0FBQ3lCLEVBQUUsQ0FBQztZQUM5QjtZQUVBRixRQUFRQSxDQUFDeEIsSUFBSTtjQUNaLE9BQU87Z0JBQ05ELE1BQU0sRUFBRSxJQUFJO2dCQUNaQztlQUNBO1lBQ0Y7WUFFQSxNQUFNK0YsTUFBTUEsQ0FBQTtjQUNYLE1BQU12RSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXBDLEdBQUksQ0FBQ3lHLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQy9DbkUsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtnQkFDWHNFLElBQUksRUFBRSxTQUFTO2dCQUNmQyxTQUFTLEVBQUUsc0NBQXNDO2dCQUNqREMsR0FBRyxFQUFFbEgsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQzhCLEVBQUU7Z0JBQzNCb0IsUUFBUSxFQUFFO2tCQUNUcUQsTUFBTSxFQUFFO2lCQUNSO2dCQUNEQyxRQUFRLEVBQUU7a0JBQ1RDLE9BQU8sRUFBRTs7ZUFFVixDQUFDO2NBQ0YsSUFBSSxDQUFDL0MsR0FBRyxDQUFDOUIsUUFBUSxDQUFDeEIsSUFBSSxDQUFDO1lBQ3hCOztVQUNBTyxPQUFBLENBQUFhLElBQUEsR0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzUUQsSUFBQXBDLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUdNLE1BQU9rRCxZQUFZO1lBQ3hCLENBQUE1QyxHQUFJO1lBQ0osQ0FBQXFCLE1BQU87WUFFUHBCLFlBQVlvQixNQUFZO2NBQ3ZCLElBQUksQ0FBQyxDQUFBckIsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQU8sR0FBRyxDQUFDTCxRQUFBLENBQUFNLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO2NBRWxDLElBQUksQ0FBQyxDQUFBcUIsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEsTUFBTWhCLElBQUlBLENBQUNtQyxLQUFLO2NBQ2YsTUFBTWxDLEtBQUssR0FBRyxNQUFNVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhO2NBRXJELElBQUksQ0FBQyxDQUFBVCxHQUFJLENBQUNVLE1BQU0sQ0FBQ0osS0FBSyxDQUFDO2NBRXZCLE1BQU07Z0JBQUVLLE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFaLEdBQUksQ0FBQ2EsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUFRLE1BQU8sQ0FBQ2lCLEVBQUUsRUFBRSxDQUFDO2NBRXpFLElBQUksQ0FBQzNCLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Y0FHdEMsT0FBT0YsSUFBSTtZQUNaOztVQUNBTyxPQUFBLENBQUF5QixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUFuRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0MsS0FBQSxHQUFBaEMsT0FBQTtVQUVPLFdBSlA7O1VBSWlCLE1BQU91RCxRQUFTLFNBQVF4RCxNQUFBLENBQUFNLGFBQXVCO1lBQy9EaUIsSUFBSSxHQUFHVSxLQUFBLENBQUE4RCxPQUFPO1lBRWQsQ0FBQXBGLEtBQU0sR0FBYyxFQUFFO1lBQ3RCLENBQUE4RyxHQUFJLEdBQXlCLElBQUlDLEdBQUcsRUFBRTtZQUN0QyxJQUFJL0csS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBa0MsRUFBRztZQUNIckMsWUFBWTtjQUFFaUQ7WUFBTSxDQUFFO2NBQ3JCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBWixFQUFHLEdBQUdZLE1BQU07WUFDbEI7WUFFQTBCLFVBQVVBLENBQUNoRSxJQUFJO2NBQ2QsSUFBSSxDQUFDLENBQUFSLEtBQU0sR0FBR1EsSUFBSSxDQUFDc0csR0FBRyxDQUFDbEcsSUFBSSxJQUFHO2dCQUM3QixNQUFNa0YsT0FBTyxHQUFHLElBQUl4RSxLQUFBLENBQUE4RCxPQUFPLENBQUN4RSxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxDQUFBa0csR0FBSSxDQUFDaEQsR0FBRyxDQUFDZ0MsT0FBTyxDQUFDNUQsRUFBRSxFQUFFNEQsT0FBTyxDQUFDO2dCQUNsQyxPQUFPQSxPQUFPO2NBQ2YsQ0FBQyxDQUFDO1lBQ0g7WUFFQXJGLEdBQUdBLENBQUN5QixFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQTRFLEdBQUksQ0FBQ3JHLEdBQUcsQ0FBQ3lCLEVBQUUsQ0FBQztZQUN6QjtZQUVBaUMsR0FBR0EsQ0FBQ3ZELElBQUk7Y0FDUCxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDeUYsSUFBSSxDQUFDN0UsSUFBSSxDQUFDO2NBQ3RCLElBQUksQ0FBQyxDQUFBa0csR0FBSSxDQUFDaEQsR0FBRyxDQUFDbEQsSUFBSSxDQUFDc0IsRUFBRSxFQUFFdEIsSUFBSSxDQUFDO2NBQzVCLElBQUksQ0FBQ29DLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDNUI7WUFFQWdFLGNBQWNBLENBQUE7Y0FDYixNQUFNbEIsT0FBTyxHQUFHLElBQUl4RSxLQUFBLENBQUE4RCxPQUFPLENBQUM7Z0JBQUV0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUFaLEVBQUc7Z0JBQUVtRCxJQUFJLEVBQUUsUUFBUTtnQkFBRXBCLFNBQVMsRUFBRTtjQUFJLENBQUUsQ0FBQztjQUNsRixJQUFJLENBQUNFLEdBQUcsQ0FBQzJCLE9BQU8sQ0FBQztjQUVqQixNQUFNbUIsUUFBUSxHQUFHLDJEQUEyRDtjQUM1RSxNQUFNQyxZQUFZLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQztjQUN2QyxNQUFNQyxLQUFLLEdBQUdGLFlBQVksQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQztjQUNyQyxJQUFJQyxjQUFjLEdBQUcsRUFBRTtjQUN2QixJQUFJQyxLQUFLLEdBQUcsQ0FBQztjQUViLE1BQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQUs7Z0JBQ2pDLElBQUlGLEtBQUssSUFBSUgsS0FBSyxDQUFDN0MsTUFBTSxFQUFFO2tCQUMxQm1ELGFBQWEsQ0FBQ0YsUUFBUSxDQUFDO2tCQUN2Qjs7Z0JBR0RGLGNBQWMsSUFBSUYsS0FBSyxDQUFDRyxLQUFLLENBQUMsR0FBRyxHQUFHO2dCQUVwQ3pCLE9BQU8sQ0FBQ2hDLEdBQUcsQ0FBQztrQkFBRUMsT0FBTyxFQUFFdUQ7Z0JBQWMsQ0FBRSxDQUFDO2dCQUN4Q0MsS0FBSyxFQUFFO2NBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVjtZQUVBMUMsT0FBT0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUE3RSxLQUFNLENBQUM4RyxHQUFHLENBQUNsRyxJQUFJLElBQUlBLElBQUksQ0FBQ2tFLGFBQWEsRUFBRSxDQUFDO1lBQ3JEO1lBRUFaLEdBQUdBLENBQUNoQyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQTRFLEdBQUksQ0FBQzVDLEdBQUcsQ0FBQ2hDLEVBQUUsQ0FBQztZQUN6Qjs7VUFDQW5CLE9BQUEsQ0FBQThCLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRUQsSUFBQXhELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQyxLQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO1VBR0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBR08sV0FUUDs7VUFTaUIsTUFBTzhGLE9BQVEsU0FBUS9GLE1BQUEsQ0FBQU0sYUFBdUI7WUFNOUQsQ0FBQUMsR0FBSTtZQUNKLENBQUFvQyxRQUFTLEdBQVcsRUFBRTtZQUN0QjtZQUNBLENBQUFVLElBQUs7WUFHTGlGLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUV2QixDQUFBQyxhQUFjO1lBRWQsSUFBSTVGLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQTZCLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBLENBQUFnRSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJQSxRQUFRQSxDQUFDeEcsS0FBSztjQUNqQixJQUFJQSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUF3RyxRQUFTLEVBQUU7Y0FDOUIsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBR3hHLEtBQUs7Y0FDdEIsSUFBSSxDQUFDMkIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ2pDO1lBRUFuRCxZQUFZO2NBQUVxQyxFQUFFLEdBQUdDLFNBQVM7Y0FBRU8sSUFBSTtjQUFFLEdBQUdOO1lBQUssQ0FBMEI7Y0FDckUsS0FBSyxDQUFDO2dCQUNMRixFQUFFO2dCQUNGLEdBQUdFLEtBQUs7Z0JBQ1JFLFVBQVUsRUFBRSxDQUNYLElBQUksRUFDSixRQUFRLEVBQ1IsT0FBTyxFQUNQLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULE9BQU8sRUFDUCxXQUFXLEVBQ1gsV0FBVyxFQUNYLGNBQWMsRUFDZCxTQUFTLEVBQ1QsT0FBTztlQUVSLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQUksSUFBSyxHQUFHQSxJQUFJO2NBQ2pCLElBQUksQ0FBQ1IsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRSxHQUFHLElBQUFQLEtBQUEsQ0FBQWdCLEVBQUksR0FBRTtjQUN6QixNQUFNL0MsR0FBRyxHQUFHLElBQUlMLElBQUEsQ0FBQU8sR0FBRyxDQUFDTCxRQUFBLENBQUFNLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBQSxHQUFJLEdBQUdBLEdBQUc7Y0FFZixJQUFJLENBQUMsQ0FBQWlFLElBQUssR0FBR3pCLEtBQUssQ0FBQ3lCLElBQUksSUFBSSxTQUFTO2NBRXBDLElBQUksQ0FBQ2lFLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2NBQ2hDLEtBQUssQ0FBQ3JELEtBQUssR0FBRyxJQUFJO1lBQ25COztVQUVEO1VBQUExRCxPQUFBLENBQUFxRSxPQUFBLEdBQUFBLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=