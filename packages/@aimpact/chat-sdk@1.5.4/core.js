System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@beyond-js/http-suite@0.1.0/api", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/chat-sdk@1.5.4/startup", "@beyond-js/reactive@2.0.4/entities/collection", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/kernel@0.1.12/core", "uuid@11.1.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_2 = _beyondJsHttpSuite010Api;
    }, function (_aimpactChatSdk154Session) {
      dependency_3 = _aimpactChatSdk154Session;
    }, function (_aimpactChatSdk154Startup) {
      dependency_4 = _aimpactChatSdk154Startup;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_5 = _beyondJsReactive204EntitiesCollection;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_6 = _beyondJsReactive204EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/ailearn-app", "0.4.1"]]);
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
        hash: 3654742856,
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
        hash: 161161288,
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
                properties: ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'user', 'children', 'knowledgeBoxId', 'metadata'],
                provider: _provider.ChatProvider
              });
              this.#api = new _api.Api(_startup.sdkConfig.api);
              globalThis.chat = this;
              if (!id) this.id = (0, _uuid.v4)();
              this.#listen();
              globalThis.chat = this;
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
                const onError = e => {
                  console.error(e);
                };
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                this.messages.add(item);
                this.messages.add(this.#response);
                this.#api.bearer(token).stream(uri, {
                  ...item.getProperties()
                }).then(onFinish).catch(onError);
                return promise;
              } catch (e) {
                console.error(e);
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
                  streaming: true
                });
                this.#currentMessage = item;
                const onFinish = async response => {
                  await this.#response.set({
                    streaming: false
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
        hash: 2706225091,
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
                properties: ['id', 'chatId', 'audio', 'userId', 'role', 'content', 'usage', 'timestamp', 'streaming', 'actions']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiTWVzc2FnZXMiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXIiLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsInNldCIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwic3RyZWFtaW5nIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJsb2FkQWxsIiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCJyZWFkeSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIk1lc3NhZ2UiLCJyb2xlIiwib25GaW5pc2giLCJyZXNvbHZlIiwib25FcnJvciIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsInNlbmRBdWRpbyIsIm1lc3NhZ2UiLCJhdWRpbyIsIkZpbGUiLCJtdWx0aXBhcnQiLCJzZXRUaW1lb3V0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiY3JlYXRlIiwibmFtZSIsInByb2plY3RJZCIsInVpZCIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm1hcCIsIk1hcCIsInB1c2giLCJhZGRUZXN0TWVzc2FnZSIsImJhc2VUZXh0IiwicmVwZWF0ZWRUZXh0IiwicmVwZWF0Iiwid29yZHMiLCJzcGxpdCIsImN1cnJlbnRDb250ZW50IiwiaW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvY2FsRmllbGRzIiwicGFyc2VkQ29udGVudCIsInByZXZpb3VzIiwicmVhY3RpdmVQcm9wcyJdLCJzb3VyY2VzIjpbIi9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvY2hhdC50cyIsIi9tZXNzYWdlLnRzIiwiL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi9jaGF0cy9tZXNzYWdlcy9pbmRleC50cyIsIi9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQU9JLEtBQU0sU0FBUUwsTUFBQSxDQUFBTSxhQUFvQjtZQUN6RCxDQUFBQyxHQUFJO1lBRUpDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQU8sR0FBRyxDQUFDTCxRQUFBLENBQUFNLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO1lBQ25DO1lBRUEsQ0FBQUksS0FBTSxHQUFVLEVBQUU7WUFDbEIsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxNQUFNQyxJQUFJQSxDQUFBO2NBQ1QsTUFBTUMsS0FBSyxHQUFHLE1BQU1WLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Y0FDckQsSUFBSSxDQUFDLENBQUFULEdBQUksQ0FBQ1UsTUFBTSxDQUFDSixLQUFLLENBQUM7Y0FDdkIsTUFBTTtnQkFBRUssTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFDO2NBQ3RELElBQUksQ0FBQ0YsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztjQUV0QyxJQUFJLENBQUMsQ0FBQVYsS0FBTSxHQUFHUSxJQUFJLENBQUNSLEtBQUs7Y0FFeEIsT0FBTztnQkFBRU8sTUFBTTtnQkFBRUM7Y0FBSSxDQUFFO1lBQ3hCO1lBRUEsTUFBTUcsT0FBT0EsQ0FBQ0MsSUFBSTtjQUNqQixJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxPQUFPLENBQUNELElBQUksQ0FBQztjQUN6QixJQUFJLENBQUNFLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7O1VBQ0FDLE9BQUEsQ0FBQXJCLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0QsSUFBQUgsSUFBQSxHQUFBRCxPQUFBO1VBSUEsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ00sTUFBTzBCLHNCQUFzQjtZQUNsQyxDQUFBcEIsR0FBSTtZQUNKLENBQUFxQixNQUFPO1lBRVBwQixZQUFZb0IsTUFBYTtjQUN4QixJQUFJLENBQUMsQ0FBQXJCLEdBQUksR0FBRyxJQUFJTCxJQUFBLENBQUFPLEdBQUcsQ0FBQ0wsUUFBQSxDQUFBTSxTQUFTLENBQUNILEdBQUcsQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQXFCLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBLE1BQU1DLElBQUlBLENBQUE7Y0FDVCxNQUFNaEIsS0FBSyxHQUFHLE1BQU1WLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Y0FDckQsSUFBSSxDQUFDLENBQUFULEdBQUksQ0FBQ1UsTUFBTSxDQUFDSixLQUFLLENBQUM7Y0FDdkIsTUFBTTtnQkFBRUssTUFBTTtnQkFBRUM7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFDO2NBQ3RELElBQUksQ0FBQ0YsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztjQUV0QyxPQUFPO2dCQUFFSCxNQUFNO2dCQUFFQztjQUFJLENBQUU7WUFDeEI7O1VBQ0FPLE9BQUEsQ0FBQUMsc0JBQUEsR0FBQUEsc0JBQUE7Ozs7Ozs7Ozs7O1VDeEJEOztVQUVBRyxNQUFBLENBQUFDLGNBQUEsQ0FBQUwsT0FBQTtZQUNBTSxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFGLE1BQUEsQ0FBQUMsY0FBQSxDQUFBTCxPQUFBO1lBQ0FNLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxLQUFBLEdBQUFoQyxPQUFBO1VBQ0EsSUFBQWlDLEtBQUEsR0FBQWpDLE9BQUE7VUFHQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBa0MsTUFBQSxHQUFBbEMsT0FBQTtVQUNBLElBQUFtQyxTQUFBLEdBQUFuQyxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQW9DLFNBQUEsR0FBQXBDLE9BQUE7VUFDQSxJQUFBcUMsS0FBQSxHQUFBckMsT0FBQTtVQUVPLFdBWFA7O1VBV2lCLE1BQU9zQyxJQUFLLFNBQVFOLEtBQUEsQ0FBQU8sSUFBVztZQWUvQyxDQUFBakMsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBRUEsQ0FBQWtDLGNBQWU7WUFDZixDQUFBQyxRQUFTO1lBQ1QsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUFuQyxZQUFZO2NBQUVvQyxFQUFFLEdBQUdDLFNBQVM7Y0FBRSxHQUFHQztZQUFLLENBQUUsR0FBRyxFQUFFO2NBQzVDLEtBQUssQ0FBQztnQkFDTEYsRUFBRTtnQkFDRkcsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBR0QsS0FBSztnQkFDUkUsVUFBVSxFQUFFLENBQ1gsSUFBSSxFQUNKLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEVBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixPQUFPLEVBQ1AsTUFBTSxFQUNOLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsVUFBVSxDQUNWO2dCQUVEQyxRQUFRLEVBQUVaLFNBQUEsQ0FBQWE7ZUFDVixDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUEzQyxHQUFJLEdBQUcsSUFBSUwsSUFBQSxDQUFBTyxHQUFHLENBQUNMLFFBQUEsQ0FBQU0sU0FBUyxDQUFDSCxHQUFHLENBQUM7Y0FFbEM0QyxVQUFVLENBQUNDLElBQUksR0FBRyxJQUFJO2NBQ3RCLElBQUksQ0FBQ1IsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRSxHQUFHLElBQUFOLEtBQUEsQ0FBQWUsRUFBSSxHQUFFO2NBQ3pCLElBQUksQ0FBQyxDQUFBQyxNQUFPLEVBQUU7Y0FDZEgsVUFBVSxDQUFDQyxJQUFJLEdBQUcsSUFBSTtjQUN0QixJQUFJLENBQUMsQ0FBQVQsUUFBUyxHQUFHLElBQUlQLFNBQUEsQ0FBQW1CLFFBQVEsQ0FBQztnQkFBRUMsTUFBTSxFQUFFLElBQUksQ0FBQ1o7Y0FBRSxDQUFFLENBQUM7Y0FDbEQsSUFBSSxDQUFDLENBQUFELFFBQVMsQ0FBQ2MsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFLO2dCQUNyQyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxhQUFhLENBQUM7Y0FDNUIsQ0FBQyxDQUFDO2NBQ0Y7WUFDRDtZQUVBLENBQUFKLE1BQU8sR0FBR0ssQ0FBQSxLQUFLO2NBQ2QsSUFBSSxDQUFDLENBQUFwRCxHQUFJLENBQUNrRCxFQUFFLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUFHLFFBQVMsQ0FBQztjQUMvQyxJQUFJLENBQUMsQ0FBQXJELEdBQUksQ0FBQ2tELEVBQUUsQ0FBQyxpQkFBaUIsRUFBRXRDLElBQUksSUFBRztnQkFDdEMsSUFBSUEsSUFBSSxFQUFFO2tCQUNULElBQUk7b0JBQ0gsTUFBTTBDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUM1QyxJQUFJLENBQUM7b0JBRS9CLElBQUksQ0FBQ3VDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRUcsTUFBTSxDQUFDRyxRQUFRLENBQUM7bUJBQ2hELENBQUMsT0FBT0MsQ0FBQyxFQUFFO29CQUNYQyxPQUFPLENBQUNDLElBQUksQ0FBQywyQkFBMkIsRUFBRWhELElBQUksQ0FBQzs7O2dCQUdqRCxJQUFJO2tCQUNILElBQUksSUFBSSxDQUFDLENBQUFaLEdBQUksQ0FBQzZELE9BQU8sRUFBRTtvQkFDdEIsSUFBSSxDQUFDLENBQUE3RCxHQUFJLENBQUM2RCxPQUFPLENBQUNDLE9BQU8sQ0FBQ2xELElBQUksSUFBRztzQkFDaEMsTUFBTW1ELE1BQU0sR0FBR1IsSUFBSSxDQUFDQyxLQUFLLENBQUM1QyxJQUFJLENBQUM7c0JBQy9CLElBQUltRCxNQUFNLENBQUNDLElBQUksS0FBSyxlQUFlLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxDQUFBOUIsY0FBZSxDQUFDK0IsR0FBRyxDQUFDOzBCQUFFQyxPQUFPLEVBQUVILE1BQU0sQ0FBQ25ELElBQUksQ0FBQ3VELGFBQWE7MEJBQUVDLFNBQVMsRUFBRTt3QkFBSyxDQUFFLENBQUM7d0JBQ2xGO3dCQUNBLElBQUksSUFBSSxDQUFDLENBQUFqQyxRQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUMsUUFBUyxDQUFDaUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBbEMsUUFBUyxDQUFDRSxFQUFFLENBQUMsRUFDM0QsSUFBSSxDQUFDRCxRQUFRLENBQUNrQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUFuQyxRQUFTLENBQUM7O29CQUVwQyxDQUFDLENBQUM7O2tCQUVIO2lCQUNBLENBQUMsT0FBT3VCLENBQUMsRUFBRTtrQkFDWEMsT0FBTyxDQUFDWSxLQUFLLENBQUNiLENBQUMsQ0FBQzs7Y0FFbEIsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVEYyxPQUFPLEdBQUcsTUFBTWpDLEtBQUssSUFBRztjQUN2QixNQUFNSixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUM5QixJQUFJLENBQUNrQyxLQUFLLENBQUM7Y0FDdkMsTUFBTWtDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQXJDLFFBQVM7Y0FDakNxQyxVQUFVLENBQUN2QixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ2hDLFlBQVksQ0FBQztjQUUxQyxJQUFJaUIsUUFBUSxDQUFDQyxRQUFRLEVBQUVzQyxNQUFNLEVBQUU7Z0JBQzlCLE1BQU1ELFVBQVUsQ0FBQ0UsVUFBVSxDQUFDeEMsUUFBUSxDQUFDQyxRQUFRLENBQUM7O2NBRS9DLElBQUksQ0FBQ3dDLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQ3pCLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdEIsSUFBSSxDQUFDLENBQUFmLFFBQVMsR0FBR3FDLFVBQVU7WUFDNUIsQ0FBQztZQUVELENBQUFwQixRQUFTLEdBQUd3QixDQUFBLEtBQUs7Y0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBMUMsUUFBUyxFQUFFO2NBQ3JCLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUMrQixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUFsRSxHQUFJLENBQUM4RSxjQUFjO2NBRWpELElBQUksQ0FBQyxDQUFBM0MsUUFBUyxDQUFDOEIsR0FBRyxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFsRSxHQUFJLENBQUMrRSxhQUFhO2dCQUFFbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBN0QsR0FBSSxDQUFDNkQ7Y0FBTyxDQUFFLENBQUM7Y0FFcEY7Y0FDQSxJQUFJLENBQUNWLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUNoQyxDQUFDO1lBRUQ2QixPQUFPQSxDQUFBO2NBQ04sTUFBTXZDLFVBQVUsR0FBRyxJQUFJLENBQUN3QyxhQUFhLEVBQUU7Y0FDdkN4QyxVQUFVLENBQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDNEMsT0FBTyxFQUFFO2NBQzlDLE9BQU92QyxVQUFVO1lBQ2xCO1lBQ0EsTUFBTXlDLFdBQVdBLENBQUNoQixPQUFlO2NBQ2hDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDaUIsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU03RSxLQUFLLEdBQUcsTUFBTVYsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYTtnQkFDckQsTUFBTTJFLEdBQUcsR0FBRyxVQUFVLElBQUksQ0FBQy9DLEVBQUUsV0FBVztnQkFDeEMsTUFBTWdELE9BQU8sR0FBRyxJQUFJMUQsS0FBQSxDQUFBMkQsY0FBYyxFQUFXO2dCQUM3QyxNQUFNdEUsSUFBSSxHQUFHLElBQUlZLE1BQUEsQ0FBQTJELE9BQU8sQ0FBQztrQkFBRXRDLE1BQU0sRUFBRSxJQUFJLENBQUNaLEVBQUU7a0JBQUVtRCxJQUFJLEVBQUUsTUFBTTtrQkFBRXRCO2dCQUFPLENBQUUsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLENBQUFoQyxjQUFlLEdBQUdsQixJQUFJO2dCQUMzQixNQUFNeUUsUUFBUSxHQUFHLE1BQU10RCxRQUFRLElBQUc7a0JBQ2pDLElBQUksQ0FBQ2dCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztrQkFDakMsTUFBTSxJQUFJLENBQUMsQ0FBQWhCLFFBQVMsQ0FBQzhCLEdBQUcsQ0FBQztvQkFBRUcsU0FBUyxFQUFFO2tCQUFLLENBQUUsQ0FBQztrQkFFOUMsSUFBSSxDQUFDLENBQUFqQyxRQUFTLEdBQUdHLFNBQVM7a0JBRTFCK0MsT0FBTyxDQUFDSyxPQUFPLENBQUMxRSxJQUFJLENBQUM7a0JBRXJCO2dCQUNELENBQUM7Z0JBQ0QsTUFBTTJFLE9BQU8sR0FBR2pDLENBQUMsSUFBRztrQkFDbkJDLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDYixDQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsSUFBSSxDQUFDLENBQUF2QixRQUFTLEdBQUcsSUFBSVAsTUFBQSxDQUFBMkQsT0FBTyxDQUFDO2tCQUFFdEMsTUFBTSxFQUFFLElBQUksQ0FBQ1osRUFBRTtrQkFBRW1ELElBQUksRUFBRSxRQUFRO2tCQUFFcEIsU0FBUyxFQUFFO2dCQUFJLENBQUUsQ0FBQztnQkFDbEYsSUFBSSxDQUFDaEMsUUFBUSxDQUFDa0MsR0FBRyxDQUFDdEQsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUNvQixRQUFRLENBQUNrQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUFuQyxRQUFTLENBQUM7Z0JBRWpDLElBQUksQ0FBQyxDQUFBbkMsR0FBSSxDQUNQVSxNQUFNLENBQUNKLEtBQUssQ0FBQyxDQUNic0YsTUFBTSxDQUFDUixHQUFHLEVBQUU7a0JBQUUsR0FBR3BFLElBQUksQ0FBQ2lFLGFBQWE7Z0JBQUUsQ0FBRSxDQUFDLENBQ3hDWSxJQUFJLENBQUNKLFFBQVEsQ0FBQyxDQUNkSyxLQUFLLENBQUNILE9BQU8sQ0FBQztnQkFFaEIsT0FBT04sT0FBTztlQUNkLENBQUMsT0FBTzNCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDWSxLQUFLLENBQUNiLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ3lCLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1ZLFNBQVNBLENBQUNDLE9BQWE7Y0FDNUIsSUFBSTtnQkFDSCxJQUFJLENBQUNiLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNN0UsS0FBSyxHQUFHLE1BQU1WLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Z0JBQ3JELE1BQU0yRSxHQUFHLEdBQUcsVUFBVSxJQUFJLENBQUMvQyxFQUFFLGlCQUFpQjtnQkFDOUMsTUFBTWdELE9BQU8sR0FBRyxJQUFJMUQsS0FBQSxDQUFBMkQsY0FBYyxFQUFXO2dCQUM3QyxNQUFNdEUsSUFBSSxHQUFHLElBQUlZLE1BQUEsQ0FBQTJELE9BQU8sQ0FBQztrQkFBRXRDLE1BQU0sRUFBRSxJQUFJLENBQUNaLEVBQUU7a0JBQUU0RCxLQUFLLEVBQUVELE9BQU87a0JBQUVSLElBQUksRUFBRSxNQUFNO2tCQUFFcEIsU0FBUyxFQUFFO2dCQUFJLENBQUUsQ0FBQztnQkFDNUYsSUFBSSxDQUFDLENBQUFsQyxjQUFlLEdBQUdsQixJQUFJO2dCQUMzQixNQUFNeUUsUUFBUSxHQUFHLE1BQU10RCxRQUFRLElBQUc7a0JBQ2pDLE1BQU0sSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQzhCLEdBQUcsQ0FBQztvQkFBRUcsU0FBUyxFQUFFO2tCQUFLLENBQUUsQ0FBQztrQkFDOUMsSUFBSSxDQUFDakIsT0FBTyxDQUFDLG1CQUFtQixDQUFDO2tCQUNqQztrQkFDQWtDLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDMUUsSUFBSSxDQUFDO2tCQUVyQjtnQkFDRCxDQUFDO2dCQUNELE1BQU0yRSxPQUFPLEdBQUdqQyxDQUFDLElBQUc7a0JBQ25CQyxPQUFPLENBQUNZLEtBQUssQ0FBQ2IsQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQUNELElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ2tDLEdBQUcsQ0FBQ3RELElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLENBQUFtQixRQUFTLEdBQUcsSUFBSVAsTUFBQSxDQUFBMkQsT0FBTyxDQUFDO2tCQUFFdEMsTUFBTSxFQUFFLElBQUksQ0FBQ1osRUFBRTtrQkFBRW1ELElBQUksRUFBRSxRQUFRO2tCQUFFcEIsU0FBUyxFQUFFO2dCQUFJLENBQUUsQ0FBQztnQkFDbEYsTUFBTTdCLEtBQUssR0FBRztrQkFDYixHQUFHdkIsSUFBSSxDQUFDaUUsYUFBYSxFQUFFO2tCQUN2QmdCLEtBQUssRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQ2xGLElBQUksQ0FBQ2lGLEtBQUssQ0FBQyxFQUFFLFdBQVcsRUFBRTtvQkFBRWpDLElBQUksRUFBRTtrQkFBVyxDQUFFLENBQUM7a0JBQ2pFbUMsU0FBUyxFQUFFO2lCQUNYO2dCQUVELElBQUksQ0FBQyxDQUFBbkcsR0FBSSxDQUFDVSxNQUFNLENBQUNKLEtBQUssQ0FBQyxDQUFDc0YsTUFBTSxDQUFDUixHQUFHLEVBQUU3QyxLQUFLLENBQUMsQ0FBQ3NELElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUNLLEtBQUssQ0FBQ0gsT0FBTyxDQUFDO2dCQUN4RS9DLFVBQVUsQ0FBQ3dELFVBQVUsQ0FBQyxNQUFNWCxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakQsT0FBT0osT0FBTztlQUNkLENBQUMsT0FBTzNCLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUk1QyxLQUFLLENBQUM0QyxDQUFDLENBQUM7Z0JBQ2xCQyxPQUFPLENBQUNZLEtBQUssQ0FBQ2IsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDeUIsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTWtCLFVBQVVBLENBQUNKLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxNQUFNYixHQUFHLEdBQUcsb0JBQW9CO2dCQUNoQyxNQUFNOUUsS0FBSyxHQUFHLE1BQU1WLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Z0JBQ3JELE1BQU0wQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW5DLEdBQUksQ0FBQ1UsTUFBTSxDQUFDSixLQUFLLENBQUMsQ0FBQ2dHLElBQUksQ0FBQ2xCLEdBQUcsRUFBRTtrQkFBRWUsU0FBUyxFQUFFLElBQUk7a0JBQUVGLEtBQUssRUFBRUE7Z0JBQUssQ0FBRSxDQUFDO2dCQUUzRixPQUFPOUQsUUFBUTtlQUNmLENBQUMsT0FBT3VCLENBQUMsRUFBRTtnQkFDWDtnQkFDQSxNQUFNQSxDQUFDOztZQUVUO1lBRUE2QyxVQUFVQSxDQUFDbEUsRUFBVTtjQUNwQixPQUFPLElBQUksQ0FBQyxDQUFBRCxRQUFTLENBQUN2QixHQUFHLENBQUN3QixFQUFFLENBQUM7WUFDOUI7WUFFQUYsUUFBUUEsQ0FBQ3ZCLElBQUk7Y0FDWixPQUFPO2dCQUNORCxNQUFNLEVBQUUsSUFBSTtnQkFDWkM7ZUFDQTtZQUNGO1lBRUEsTUFBTTRGLE1BQU1BLENBQUE7Y0FDWCxNQUFNckUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFuQyxHQUFJLENBQUNzRyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMvQ2pFLEVBQUUsRUFBRSxJQUFJLENBQUNBLEVBQUU7Z0JBQ1hvRSxJQUFJLEVBQUUsU0FBUztnQkFDZkMsU0FBUyxFQUFFLHNDQUFzQztnQkFDakRDLEdBQUcsRUFBRS9HLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUM2QixFQUFFO2dCQUMzQm9CLFFBQVEsRUFBRTtrQkFDVG1ELE1BQU0sRUFBRTtpQkFDUjtnQkFDREMsUUFBUSxFQUFFO2tCQUNUQyxPQUFPLEVBQUU7O2VBRVYsQ0FBQztjQUNGLElBQUksQ0FBQzdDLEdBQUcsQ0FBQzlCLFFBQVEsQ0FBQ3ZCLElBQUksQ0FBQztZQUN4Qjs7VUFDQU8sT0FBQSxDQUFBYSxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOVBELElBQUFwQyxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBQyxJQUFBLEdBQUFELE9BQUE7VUFHTSxNQUFPaUQsWUFBWTtZQUN4QixDQUFBM0MsR0FBSTtZQUNKLENBQUFxQixNQUFPO1lBRVBwQixZQUFZb0IsTUFBWTtjQUN2QixJQUFJLENBQUMsQ0FBQXJCLEdBQUksR0FBRyxJQUFJTCxJQUFBLENBQUFPLEdBQUcsQ0FBQ0wsUUFBQSxDQUFBTSxTQUFTLENBQUNILEdBQUcsQ0FBQztjQUVsQyxJQUFJLENBQUMsQ0FBQXFCLE1BQU8sR0FBR0EsTUFBTTtZQUN0QjtZQUVBLE1BQU1oQixJQUFJQSxDQUFDa0MsS0FBSztjQUNmLE1BQU1qQyxLQUFLLEdBQUcsTUFBTVYsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYTtjQUVyRCxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDVSxNQUFNLENBQUNKLEtBQUssQ0FBQztjQUV2QixNQUFNO2dCQUFFSyxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBWixHQUFJLENBQUNhLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFBUSxNQUFPLENBQUNnQixFQUFFLEVBQUUsQ0FBQztjQUV6RSxJQUFJLENBQUMxQixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7O2NBR3RDLE9BQU9GLElBQUk7WUFDWjs7VUFDQU8sT0FBQSxDQUFBd0IsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCRCxJQUFBbEQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdDLEtBQUEsR0FBQWhDLE9BQUE7VUFFTyxXQUpQOztVQUlpQixNQUFPc0QsUUFBUyxTQUFRdkQsTUFBQSxDQUFBTSxhQUF1QjtZQUMvRGlCLElBQUksR0FBR1UsS0FBQSxDQUFBNkQsT0FBTztZQUVkLENBQUFuRixLQUFNLEdBQWMsRUFBRTtZQUN0QixDQUFBMkcsR0FBSSxHQUF5QixJQUFJQyxHQUFHLEVBQUU7WUFDdEMsSUFBSTVHLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQWlDLEVBQUc7WUFDSHBDLFlBQVk7Y0FBRWdEO1lBQU0sQ0FBRTtjQUNyQixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQVosRUFBRyxHQUFHWSxNQUFNO1lBQ2xCO1lBRUEwQixVQUFVQSxDQUFDL0QsSUFBSTtjQUNkLElBQUksQ0FBQyxDQUFBUixLQUFNLEdBQUdRLElBQUksQ0FBQ21HLEdBQUcsQ0FBQy9GLElBQUksSUFBRztnQkFDN0IsTUFBTWdGLE9BQU8sR0FBRyxJQUFJdEUsS0FBQSxDQUFBNkQsT0FBTyxDQUFDdkUsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsQ0FBQStGLEdBQUksQ0FBQzlDLEdBQUcsQ0FBQytCLE9BQU8sQ0FBQzNELEVBQUUsRUFBRTJELE9BQU8sQ0FBQztnQkFDbEMsT0FBT0EsT0FBTztjQUNmLENBQUMsQ0FBQztZQUNIO1lBRUFuRixHQUFHQSxDQUFDd0IsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUEwRSxHQUFJLENBQUNsRyxHQUFHLENBQUN3QixFQUFFLENBQUM7WUFDekI7WUFFQWlDLEdBQUdBLENBQUN0RCxJQUFJO2NBQ1AsSUFBSSxDQUFDLENBQUFaLEtBQU0sQ0FBQzZHLElBQUksQ0FBQ2pHLElBQUksQ0FBQztjQUN0QixJQUFJLENBQUMsQ0FBQStGLEdBQUksQ0FBQzlDLEdBQUcsQ0FBQ2pELElBQUksQ0FBQ3FCLEVBQUUsRUFBRXJCLElBQUksQ0FBQztjQUM1QixJQUFJLENBQUNtQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVCO1lBRUErRCxjQUFjQSxDQUFBO2NBQ2IsTUFBTWxCLE9BQU8sR0FBRyxJQUFJdEUsS0FBQSxDQUFBNkQsT0FBTyxDQUFDO2dCQUFFdEMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBWixFQUFHO2dCQUFFbUQsSUFBSSxFQUFFLFFBQVE7Z0JBQUVwQixTQUFTLEVBQUU7Y0FBSSxDQUFFLENBQUM7Y0FDbEYsSUFBSSxDQUFDRSxHQUFHLENBQUMwQixPQUFPLENBQUM7Y0FFakIsTUFBTW1CLFFBQVEsR0FBRywyREFBMkQ7Y0FDNUUsTUFBTUMsWUFBWSxHQUFHRCxRQUFRLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Y0FDdkMsTUFBTUMsS0FBSyxHQUFHRixZQUFZLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUM7Y0FDckMsSUFBSUMsY0FBYyxHQUFHLEVBQUU7Y0FDdkIsSUFBSUMsS0FBSyxHQUFHLENBQUM7Y0FFYixNQUFNQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxNQUFLO2dCQUNqQyxJQUFJRixLQUFLLElBQUlILEtBQUssQ0FBQzVDLE1BQU0sRUFBRTtrQkFDMUJrRCxhQUFhLENBQUNGLFFBQVEsQ0FBQztrQkFDdkI7O2dCQUdERixjQUFjLElBQUlGLEtBQUssQ0FBQ0csS0FBSyxDQUFDLEdBQUcsR0FBRztnQkFFcEN6QixPQUFPLENBQUMvQixHQUFHLENBQUM7a0JBQUVDLE9BQU8sRUFBRXNEO2dCQUFjLENBQUUsQ0FBQztnQkFDeENDLEtBQUssRUFBRTtjQUNSLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1Y7WUFFQXpDLE9BQU9BLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBNUUsS0FBTSxDQUFDMkcsR0FBRyxDQUFDL0YsSUFBSSxJQUFJQSxJQUFJLENBQUNpRSxhQUFhLEVBQUUsQ0FBQztZQUNyRDtZQUVBWixHQUFHQSxDQUFDaEMsRUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUEwRSxHQUFJLENBQUMxQyxHQUFHLENBQUNoQyxFQUFFLENBQUM7WUFDekI7O1VBQ0FsQixPQUFBLENBQUE2QixRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEVELElBQUF2RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUMsS0FBQSxHQUFBckMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUdBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUdPLFdBVFA7O1VBU2lCLE1BQU82RixPQUFRLFNBQVE5RixNQUFBLENBQUFNLGFBQXVCO1lBSzlELENBQUFDLEdBQUk7WUFDSixDQUFBbUMsUUFBUyxHQUFXLEVBQUU7WUFDdEI7WUFDQSxDQUFBVSxJQUFLO1lBR0xnRixXQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFFdkIsQ0FBQUMsYUFBYztZQUVkLElBQUkzRixRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUE2QixJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxDQUFBK0QsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUEsUUFBUUEsQ0FBQ3RHLEtBQUs7Y0FDakIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBc0csUUFBUyxFQUFFO2NBQzlCLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUd0RyxLQUFLO2NBQ3RCLElBQUksQ0FBQzBCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNqQztZQUVBbEQsWUFBWTtjQUFFb0MsRUFBRSxHQUFHQyxTQUFTO2NBQUVPLElBQUk7Y0FBRSxHQUFHTjtZQUFLLENBQTBCO2NBQ3JFLEtBQUssQ0FBQztnQkFDTEYsRUFBRTtnQkFDRixHQUFHRSxLQUFLO2dCQUNSRSxVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0osUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxPQUFPLEVBQ1AsV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTO2VBRVYsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBSSxJQUFLLEdBQUdBLElBQUk7Y0FDakIsSUFBSSxDQUFDUixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFLEdBQUcsSUFBQU4sS0FBQSxDQUFBZSxFQUFJLEdBQUU7Y0FDekIsTUFBTTlDLEdBQUcsR0FBRyxJQUFJTCxJQUFBLENBQUFPLEdBQUcsQ0FBQ0wsUUFBQSxDQUFBTSxTQUFTLENBQUNILEdBQUcsQ0FBQztjQUNsQyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxHQUFHQSxHQUFHO2NBRWYsSUFBSSxDQUFDLENBQUFnRSxJQUFLLEdBQUd6QixLQUFLLENBQUN5QixJQUFJLElBQUksU0FBUztjQUVwQyxJQUFJLENBQUNnRSxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztjQUNoQyxLQUFLLENBQUNwRCxLQUFLLEdBQUcsSUFBSTtZQUNuQjs7VUFFRDtVQUFBekQsT0FBQSxDQUFBb0UsT0FBQSxHQUFBQSxPQUFBIiwiaWdub3JlTGlzdCI6W119