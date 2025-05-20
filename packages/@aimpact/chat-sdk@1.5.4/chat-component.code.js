System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/chat-sdk@1.5.4/wrapper", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.12/core", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/messages", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.5.4/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, AudioManager, Chat, AgentsChatContainer, ChatContext, useChatContext, useStore, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
  _export({
    AudioManager: void 0,
    Chat: void 0,
    AgentsChatContainer: void 0,
    ChatContext: void 0,
    useChatContext: void 0,
    useStore: void 0,
    AgentsChatPanel: void 0,
    AgentsChatInput: void 0,
    PermissionsErrorModal: void 0,
    RecordingButton: void 0,
    PermissionsModal: void 0,
    IAgentsContainerProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
    }, function (_aimpactChatSdk154Voice) {
      dependency_3 = _aimpactChatSdk154Voice;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_4 = _aimpactChatSdk154Wrapper;
    }, function (_aimpactChatSdk154Core) {
      dependency_5 = _aimpactChatSdk154Core;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_aimpactAgentsApi041RealtimeClient) {
      dependency_8 = _aimpactAgentsApi041RealtimeClient;
    }, function (_aimpactAgentsApi041RealtimeClientConversation) {
      dependency_9 = _aimpactAgentsApi041RealtimeClientConversation;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorder) {
      dependency_10 = _aimpactAgentsApi041RealtimeAudioRecorder;
    }, function (_beyondJsKernel0112Core) {
      dependency_11 = _beyondJsKernel0112Core;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactChatSdk154Messages) {
      dependency_15 = _aimpactChatSdk154Messages;
    }, function (_pragmateUi100Beta7Components) {
      dependency_16 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_17 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk154ComponentsIcons) {
      dependency_18 = _aimpactChatSdk154ComponentsIcons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_19 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_20 = _pragmateUi100Beta7Modal;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_22 = _pragmateUi100Beta7Image;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_23 = _aimpactAgentsApi041RealtimeWidgetsState;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.4/chat-component",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/alert', dependency_17], ['@aimpact/chat-sdk/components/icons', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/modal', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/image', dependency_22], ['@aimpact/agents-api/realtime/widgets/state', dependency_23]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.4/chat-component.code');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./interfaces/messages
      *************************************/
      ims.set('./interfaces/messages', {
        hash: 775952468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/audio
      *****************************/

      ims.set('./store/audio', {
        hash: 1834023687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _recorder = require("./recorder");
          /* bundle */
          class AudioManager extends _model.ReactiveModel {
            #parent;
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #players = {
              web: _voice.Voice,
              lab: _voice.VoiceLab // brings support to manage voice lab audios
            };
            #player = 'web';
            get player() {
              return this.#currentPlayer;
            }
            #currentPlayer;
            constructor(parent, language) {
              super({});
              this.#recorder = new _recorder.Recorder();
              this.#parent = parent;
              this.reactiveProps(['autoplay']);
              language = language ?? _wrapper.AppWrapper.language;
              this.#currentPlayer = new this.#players.web({
                language,
                rate: _wrapper.AppWrapper.audioSpeed
              });
              _wrapper.AppWrapper.on('app.settings.change', this.listenAppChanges);
            }
            listenAppChanges = () => {
              const {
                rate,
                language
              } = _wrapper.AppWrapper;
              this.#currentPlayer.set({
                rate,
                language
              });
            };
            selectPlayer(name) {
              if (!this.#players[name]) throw new Error(`Player ${name} not found`);
              this.#player = name;
              this.trigger('change');
            }
          }
          exports.AudioManager = AudioManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 3056130403,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/chat-sdk/core");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _audio = require("./audio");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _realtime = require("./realtime");
          class StoreManager extends _model.ReactiveModel {
            #messages;
            get messages() {
              return this.#messages?.items?.length ? this.#messages?.items : [];
            }
            #name;
            get name() {
              return this.#name;
            }
            #category;
            get category() {
              return this.#category;
            }
            #chat;
            get chat() {
              return this.#chat;
            }
            get model() {
              return this.#chat;
            }
            #chats = _wrapper.AppWrapper.chats;
            get chats() {
              return this.#chats.items ?? [];
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get textsModel() {
              return this.#texts;
            }
            get texts() {
              return this.#texts?.value;
            }
            #audio;
            get audioManager() {
              return this.#audio;
            }
            #processTranscription = false;
            get proccessTranscription() {
              return this.#processTranscription;
            }
            #notFound;
            get notFound() {
              return this.#notFound;
            }
            set notFound(notFound) {
              this.#notFound = notFound;
            }
            #currentMessage;
            get currentMessage() {
              return this.#currentMessage;
            }
            set currentMessage(message) {
              if (message?.id === this.#currentMessage?.id) return;
              this.#currentMessage = message;
            }
            #disabled;
            get disabled() {
              return this.#disabled;
            }
            set disabled(disabled) {
              if (this.#disabled === disabled) return;
              this.#disabled = disabled;
              this.triggerEvent('change');
            }
            #extensions = new Map();
            get extensions() {
              return this.#extensions;
            }
            #id;
            get ready() {
              return super.ready && this.#texts.ready && this.#realtime?.ready;
            }
            #realtime;
            get realtime() {
              return this.#realtime;
            }
            #onListenChat;
            #model;
            constructor({
              id,
              language,
              realtime = false,
              model,
              onListenChat
            }) {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#id = id;
              this.reactiveProps(['waitingResponse', 'autoplay', 'language']);
              this.autoplay = true;
              this.language = language;
              this.#audio = new _audio.AudioManager(this, language);
              this.#realtime = new _realtime.RealtimeStore(realtime);
              this.#realtime.on('change', this.triggerEvent);
              this.#onListenChat = onListenChat;
              this.#model = model;
              globalThis.chatStore = this;
              if (!model) {
                this.load(this.#id);
              } else {
                this.processModel();
              }
            }
            processModel() {
              this.#chat = this.#model;
              this.#chat.on('change', this.triggerEvent);
              this.#chat.on('new.message', () => {
                console.log(20, 'me disparo new.message');
                this.triggerEvent('new.message');
              });
              this.#chat.on('new.answer', () => {
                console.log(20, 'me disparo new.answer');
                this.triggerEvent('new.answer');
              });
              this.#messages = this.#chat.messages;
              this.#realtime.chatId = this.#model.id;
              _wrapper.AppWrapper.currentChat = this.#model;
              const language = this.language ?? _wrapper.AppWrapper.language;
              const languages = {
                en: 'en-US',
                es: 'es-MX',
                de: 'de-DE'
              };
              this.audioManager.player.set({
                language: languages[language]
              });
              /* usar propiedad role para identificar owner del mensaje*/
              // chat.on('change', () => this.triggerEvent('new.message'));
              this.fetching = false;
              super.ready = true;
              this.notFound = false;
              this.trigger('change');
            }
            load = async id => {
              if (!id) {
                console.warn(`you're tring to load a chat without an id`);
                super.ready = true;
                this.notFound = true;
                return;
              }
              if (!_session.sessionWrapper.user?.logged) {
                _session.sessionWrapper.on('login', this.load);
                return;
              }
              this.fetching = true;
              const chat = new _core.Chat({
                id
              });
              if (this.#onListenChat) {
                chat.on('action.received', this.#onListenChat);
              }
              chat.on('change', this.triggerEvent);
              chat.on('new.message', () => {
                console.log(20, 'me disparo new.message');
                this.triggerEvent('new.message');
              });
              chat.on('new.answer', () => {
                console.log(20, 'me disparo new.answer');
                this.triggerEvent('new.answer');
              });
              this.#realtime;
              this.#chat = chat;
              globalThis.chat = chat;
              this.#messages = chat.messages;
              await chat.loadAll({
                id
              });
              this.#realtime.chatId = id;
              globalThis.chat = chat;
              _wrapper.AppWrapper.currentChat = chat;
              if (!chat.found) {
                this.fetching = false;
                super.ready = true;
                this.notFound = true;
                return;
              }
              const language = this.language ?? _wrapper.AppWrapper.language;
              const languages = {
                en: 'en-US',
                es: 'es-MX',
                de: 'de-DE'
              };
              this.audioManager.player.set({
                language: languages[language]
              });
              /* usar propiedad role para identificar owner del mensaje*/
              // chat.on('change', () => this.triggerEvent('new.message'));
              this.fetching = false;
              super.ready = true;
              this.notFound = false;
              this.trigger('change');
            };
            async sendMessage(content) {
              try {
                performance.mark('start');
                this.#currentMessage = undefined;
                if (typeof content === 'string' && [undefined, '', null].includes(content)) return;
                this.fetching = true;
                // return http.response(data);
                return this.#chat.sendMessage(content);
              } catch (e) {
                // return http.error(400, message);
                console.error('capturamos error aca', e);
              }
            }
            async sendAudio(content) {
              try {
                performance.mark('start');
                this.#currentMessage = undefined;
                this.fetching = true;
                return this.#chat.sendAudio(content);
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            transcribe(audio) {
              return this.#chat.transcribe(audio);
            }
            unmount() {
              this.#audio.player?.stop();
            }
            clean() {
              this.fetching = false;
              super.ready = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./store/realtime
      ********************************/

      ims.set('./store/realtime', {
        hash: 293800207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimeStore = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _client = require("@aimpact/agents-api/realtime/client");
          var _conversation = require("@aimpact/agents-api/realtime/client/conversation");
          var _recorder = require("@aimpact/agents-api/realtime/audio/recorder");
          var _session = require("@aimpact/chat-sdk/session");
          class RealtimeStore extends _model.ReactiveModel {
            isStore = false;
            #conversation;
            get conversation() {
              return this.#conversation;
            }
            #client;
            get client() {
              return this.#client;
            }
            #validate = 0;
            #interval;
            #audioDevices = [];
            get audioDevices() {
              return this.#audioDevices;
            }
            constructor(available) {
              super({
                properties: ['muted', 'deviceSelected', 'available', 'duration']
              });
              this.duration = 0;
              if (!available) {
                this.ready = true;
                this.available = false;
                return;
              }
              this.#conversation = new _conversation.Conversation('123');
              this.#client = new _client.ClientSession({
                vad: null
              });
              this.#client.conversation.set(this.#conversation);
              this.muted = true;
              this.available = true;
              this.init();
            }
            async init() {
              this.#client.on('session.open', this.invalidate);
              this.#client.on('session.created', this.invalidate);
              this.#client.on('session.ready', this.invalidate);
              this.#client.on('session.close', this.invalidate);
              this.#client.on('session.created', this.initiate);
              this.#client.on('session.ready', this.isReady);
              this.#client.on('session.close', this.end);
              await _recorder.devices.prepare();
              this.#audioDevices = [..._recorder.devices.values()];
              this.ready = true;
              this.selectDevice(_recorder.devices.default?.id || '');
              // const token = `eyJhbGciOiJSUzI1NiIsImtpZCI6IjgxYjUyMjFlN2E1ZGUwZTVhZjQ5N2UzNzVhNzRiMDZkODJiYTc4OGIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRsOpbGl4IFRvdmFyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGV3WkFlSC0yOXAzUUotcndFdVV1TVRBampTNEZna09zZkMwdjFtPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2FpbXBhY3QtcGFydG5lcnMtZGV2IiwiYXVkIjoiYWltcGFjdC1wYXJ0bmVycy1kZXYiLCJhdXRoX3RpbWUiOjE3MzY1NDgzNDUsInVzZXJfaWQiOiI4Y0dmMmpPbERMWlJDWTZyUVdXc0xuaGpNQjYyIiwic3ViIjoiOGNHZjJqT2xETFpSQ1k2clFXV3NMbmhqTUI2MiIsImlhdCI6MTczODA5OTE1OSwiZXhwIjoxNzM4MTAyNzU5LCJlbWFpbCI6ImZlbGl4QGJleW9uZGpzLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEwNDcxNTE1MzE1OTYzOTg4NjA5Il0sImVtYWlsIjpbImZlbGl4QGJleW9uZGpzLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.CHkrLTBQSvaPtgcqKdrksI2hi4nah3gJe_Kz7MIoVSICEXO1BLJXMDzENTbCY9N_d2Cmiw5Pz1SnejQXSsxIbBGnsEDclGS2Jpm55-IkMVfjqxOucYjfDfs1xiSHbtOkLf2D9lGTPfPHaEc07c4nQwRabcRsiNkLjFqoitGCPvR0Ej6FtzV2EbAgQITdsyXYplK8RC6ZCGPQWofzXCMoBc-i_xDBWLG9qTrpnnAvc9_SDCwPEQMqTJgmvDZT6NxItAZOq3fIb83-MZ2m4o-9HKwmk-oYDhVUlyA1l4p-lOaBGGXF2ePqunldXhoVWwg24o5PH_a_fZ0E63S09G7whA`;
            }
            selectDevice(id) {
              this.deviceSelected = id;
              const device = this.#audioDevices.find(device => device.id === id);
              this.#client.recorder.device = device;
            }
            initiate = async () => {
              const token = await _session.sessionWrapper.user.firebaseToken;
              if (!this.chatId) {
                console.error('Chat id is not set');
                return;
              }
              this.#client.update({
                conversation: {
                  id: this.chatId
                },
                token
              });
              this.onmic();
              this.#interval = setInterval(() => this.duration++, 1000);
            };
            isReady = () => {
              console.warn('ready');
              this.#interval = setInterval(() => this.duration++, 1000);
            };
            end = () => {
              clearInterval(this.#interval);
              this.duration = 0;
            };
            clean() {
              this.#client.off('session.open', this.invalidate);
              this.#client.off('session.created', this.invalidate);
              this.#client.off('session.ready', this.invalidate);
              this.#client.off('session.close', this.invalidate);
            }
            invalidate = () => {
              this.#validate++;
              this.trigger('invalidated');
              this.trigger('change');
            };
            call = () => {
              if (this.#client.status === 'closed') {
                this.#client.connect();
                this.invalidate(); // To update calling state to 'connecting'
              }
              if (['open', 'created'].includes(this.#client.status)) {
                this.#client.close();
                this.invalidate(); // To update calling state to 'closing'
              }
            };
            onmic = () => {
              this.muted = !this.muted;
              // values.muted = muted;
              // console.log(2, this.muted, this.#client.recorder);
              this.muted ? this.#client.recorder.stop() : this.#client.recorder.record();
            };
          }
          exports.RealtimeStore = RealtimeStore;
        }
      });

      /********************************
      INTERNAL MODULE: ./store/recorder
      ********************************/

      ims.set('./store/recorder', {
        hash: 1330295646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class Recorder extends _model.ReactiveModel {
            #initialised = false;
            #stream;
            #mediaRecorder;
            #chunks = [];
            get chunks() {
              return this.#chunks;
            }
            #error;
            #audio;
            get audio() {
              return this.#audio;
            }
            #recording = false;
            #initPromise;
            #stopPromise;
            #recordingPromise;
            get isSafari() {
              return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            }
            constructor() {
              super();
              this.init();
              globalThis.recorder = this;
            }
            async hasPermissions() {
              try {
                const stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                stream.getTracks().forEach(track => track.stop());
                return true;
              } catch (e) {
                this.#error = e.message;
                return false;
              }
            }
            async init() {
              if (this.#initialised && this.#stream?.active) return;
              try {
                // Check permissions first
                const hasPermission = await this.hasPermissions();
                if (!hasPermission) {
                  throw new Error('Microphone permission denied');
                }
                // this.#stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.#initialised = true;
              } catch (error) {
                this.#error = error.message;
                throw error;
              }
            }
            async record() {
              if (this.#recording) {
                throw new Error('Wait for recorder to stop before starting again.');
              }
              // Always get a fresh stream for recording
              try {
                this.#stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
              } catch (error) {
                this.#error = error.message;
                throw error;
              }
              const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
              this.#mediaRecorder = new MediaRecorder(this.#stream, {
                mimeType
              });
              this.#chunks = [];
              this.#mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) this.#chunks.push(event.data);
              };
              this.#stopPromise = new _core.PendingPromise();
              this.#mediaRecorder.onstop = () => {
                this.#audio = new Blob(this.#chunks, {
                  type: mimeType
                });
                this.#stopPromise.resolve(this.#audio);
                this.#recording = false;
                this.trigger('change');
              };
              this.#mediaRecorder.start(this.isSafari ? 1000 : undefined);
              this.#recording = true;
              this.trigger('change');
            }
            async stop() {
              if (!this.#recording) {
                throw new Error('Recorder is not currently recording.');
              }
              this.#mediaRecorder.stop();
              // Limpieza segura del stream después de detener la grabación
              this.#stream.getTracks().forEach(track => track.stop());
              this.#initialised = false; // Forzar re-obtención del stream en la próxima grabación
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/types
      *****************************/

      ims.set('./store/types', {
        hash: 610265513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/chat/back-arrow
      ***************************************/

      ims.set('./views/chat/back-arrow', {
        hash: 3094757389,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BackArrow = BackArrow;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          function BackArrow({
            store,
            separator
          }) {
            const icon = _react.default.useRef(null);
            const {
              attributes,
              scrollPosition
            } = (0, _context.useChatContext)();
            const ref = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => globalThis.setTimeout(() => {
              const container = ref.current?.closest('.chat-control__container')?.querySelector('.chat__content');
              if (!container) return;
              const distanceFromBottom = container.scrollHeight - container.clientHeight - container.scrollTop;
              if (distanceFromBottom <= 100) {
                ref.current.classList.remove('show');
                goToBottom();
              } else {
                ref.current.classList.add('show');
              }
            }, 100), 'new.message');
            const goToBottom = () => {
              separator.current?.scrollIntoView({
                block: 'end',
                behavior: 'smooth'
              });
            };
            _react.default.useEffect(() => {
              const container = ref.current.closest('.chat-control__container').querySelector('.chat__content');
              const handleScroll = () => {
                // Calculate the distance from the bottom
                if (!container) return;
                const distanceFromBottom = container.scrollHeight - container.clientHeight - container.scrollTop;
                // C
                if (distanceFromBottom <= 100) {
                  ref.current.classList.remove('show');
                } else {
                  ref.current.classList.add('show');
                }
              };
              container.addEventListener('scroll', handleScroll);
              return () => {
                container?.removeEventListener('scroll', handleScroll);
              };
            }, []);
            let cls = `scroll-bottom show circle`;
            if (attributes.has('container')) cls += `scroll-bottom--${attributes.get('container')}`;
            const clsContainer = `container__icon ${attributes.has('container') ? ` container--${attributes.get('container')}` : ''}`;
            return _react.default.createElement("div", {
              className: clsContainer,
              ref: ref
            }, _react.default.createElement(_icons.IconButton, {
              ref: icon,
              icon: 'backArrow',
              variant: 'tertiary',
              className: cls,
              onClick: goToBottom
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/chat/global
      ***********************************/

      ims.set('./views/chat/global', {
        hash: 553480393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/chat/index
      **********************************/

      ims.set('./views/chat/index', {
        hash: 2593579724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _context = require("../context");
          var _messages = require("@aimpact/chat-sdk/messages");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _getChatContainerClass = require("../utils/get-chat-container-class");
          var _emptyState = require("../components/empty-state");
          /*bundle*/
          function Chat() {
            const [isReader] = (0, _react.useState)(false);
            const separatorRef = (0, _react.useRef)(null);
            const {
              store,
              texts,
              systemIcon,
              empty,
              showAvatar
            } = (0, _context.useChatContext)();
            const {
              messages
            } = store;
            const [, setMessagesCount] = (0, _react.useState)(messages?.length ?? 0);
            const [updateScroll, setUpdateScroll] = (0, _react.useState)(performance.now());
            const containerClass = (0, _getChatContainerClass.getChatContainerClass)(isReader);
            // Helper to scroll to the separator
            const scrollToSeparator = (0, _react.useCallback)(() => {
              setTimeout(() => separatorRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
              }), 100);
            }, []);
            // Handler for new messages
            const handleNewMessage = (0, _react.useCallback)(() => {
              setMessagesCount(store.messages.length);
              scrollToSeparator();
            }, [store.messages.length, scrollToSeparator]);
            // Scroll to bottom on updateScroll change
            (0, _react.useEffect)(() => scrollToSeparator(), [updateScroll, scrollToSeparator]);
            // Bind to store events
            (0, _hooks.useBinder)([store.chat], handleNewMessage, ['new.message', 'response.finished']);
            // Early return for empty state
            if (!store.messages.length) {
              return _react.default.createElement("div", {
                className: containerClass
              }, _react.default.createElement(_emptyState.EmptyState, {
                empty: empty
              }));
            }
            return _react.default.createElement("div", {
              className: containerClass
            }, _react.default.createElement("section", {
              className: "chat__content"
            }, _react.default.createElement(_messages.Messages, {
              chat: store.chat,
              showAvatar: showAvatar,
              setUpdateScroll: setUpdateScroll,
              player: store.audioManager.player,
              current: store.currentMessage,
              systemIcon: systemIcon,
              messages: store?.messages ?? [],
              texts: texts
            }), _react.default.createElement("div", {
              ref: separatorRef,
              className: "separator"
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/chat/skeleton
      *************************************/

      ims.set('./views/chat/skeleton', {
        hash: 286511885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = ChatSkeleton;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          function ChatSkeleton() {
            const {
              store
            } = (0, _context.useChatContext)();
            return _react.default.createElement("div", {
              className: "chat-container"
            }, _react.default.createElement(_components.Spinner, {
              active: true
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/chat/use-extension
      ******************************************/

      ims.set('./views/chat/use-extension', {
        hash: 2889823330,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useExtension = useExtension;
          var _react = require("react");
          var _context = require("../context");
          function useExtension(name) {
            const [ready, setReady] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const {
              store: {
                extensions
              }
            } = (0, _context.useChatContext)();
            const webComponentName = extensions.get(name)?.control;
            _react.default.useEffect(() => {
              const onReady = event => setReady(true);
              if (!ref?.current) return;
              ref.current.addEventListener('ready', onReady);
              return () => ref.current?.removeEventListener('ready', onReady);
            }, [ref?.current]);
            return [ref, ready || !webComponentName, webComponentName];
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/empty-state
      **********************************************/

      ims.set('./views/components/empty-state', {
        hash: 77586615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyState = void 0;
          var _react = require("react");
          const EmptyState = ({
            empty
          }) => {
            if (!empty) return _react.default.createElement(_react.default.Fragment, null, "No hay contenido");
            if (_react.default.isValidElement(empty)) return _react.default.createElement(_react.default.Fragment, null, empty);
            if (typeof empty === 'function') {
              const Comp = empty;
              return _react.default.createElement(Comp, null);
            }
            return _react.default.createElement(_react.default.Fragment, null, empty);
          };
          exports.EmptyState = EmptyState;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/components/errors-renderer
      **************************************************/

      ims.set('./views/components/errors-renderer', {
        hash: 2362822785,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorsRenderer = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _useStore = require("../hooks/use-store");
          var _context = require("../context");
          const ErrorsRenderer = ({
            errors
          }) => {
            const {
              store
            } = (0, _context.useChatContext)();
            (0, _useStore.useStore)(store.chat, ['error']);
            if (!store.chat.errors?.length) return null;
            return _react.default.createElement(_react.default.Fragment, null, store.chat.errors.map((error, idx) => _react.default.createElement(_alert.Alert, {
              key: idx,
              type: "error"
            }, typeof error === 'string' ? error : JSON.stringify(error))));
          };
          exports.ErrorsRenderer = ErrorsRenderer;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 3320303670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatContainer = AgentsChatContainer;
          var _react = require("react");
          var _useManager = require("./use-manager");
          var _context = require("./context");
          var _container = require("./realtime/container");
          /*bundle */
          function AgentsChatContainer({
            children,
            icon: systemIcon,
            autoplay,
            skeleton: SkeletonControl,
            language,
            empty,
            model,
            player,
            showAvatar = false,
            onListenChat,
            attributes,
            realtime,
            id,
            ...rest
          }) {
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const [showRealtime, setShowRealtime] = _react.default.useState(false);
            const {
              ready,
              store
            } = (0, _useManager.useManager)({
              id,
              language,
              onListenChat,
              realtime,
              model
            });
            if (!ready) return SkeletonControl ? _react.default.createElement(SkeletonControl, null) : null;
            const {
              messages,
              ready: storeReady,
              texts,
              audioManager
            } = store || {};
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              ready: storeReady,
              texts,
              recorder: audioManager?.recorder,
              autoplay,
              systemIcon,
              empty,
              realtime,
              setShowRealtime,
              showAvatar,
              skeleton: SkeletonControl,
              messages,
              player,
              attributes,
              ...rest
            };
            return _react.default.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, children, _react.default.createElement(_container.RealtimePanel, {
              isVisible: showRealtime
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2952734302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatContext = exports.ChatContext = void 0;
          var _react = require("react");
          /*bundle */
          const ChatContext = exports.ChatContext = _react.default.createContext({});
          /*bundle */
          const useChatContext = () => _react.default.useContext(ChatContext);
          exports.useChatContext = useChatContext;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/hooks/use-store
      ***************************************/

      ims.set('./views/hooks/use-store', {
        hash: 1365951797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          /*bundle*/ /**
                      * A generic React hook that subscribes to a reactive store.
                      * The store must implement `.on(event, handler)` and `.off(event, handler)`
                      * to manage subscriptions, and emit events to trigger re-renders.
                      * @param store The reactive store to subscribe to
                      * @param events Array of event names to subscribe to. Defaults to ['change']
                      */
          function useStore(store, events = ['change']) {
            if (!Array.isArray(events)) {
              throw new Error('The events parameter must be an array of strings');
            }
            // We use a local counter to force re-render whenever the store emits any of the subscribed events.
            const [, setVersion] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const handler = () => setVersion(v => v + 1);
              // Subscribe to all specified events
              events.forEach(event => {
                store.on(event, handler);
              });
              // Cleanup: unsubscribe from all events
              return () => {
                events.forEach(event => {
                  store.off(event, handler);
                });
              };
            }, [store, events]);
            // Return the store directly so components can read from it.
            return store;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2366537853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatPanel = AgentsChatPanel;
          var _react = require("react");
          var _chat = require("./chat");
          var _context = require("./context");
          var _skeleton = require("./chat/skeleton");
          var _notFound = require("./not-found");
          /*bundle*/ /**
                      * Main component of the chat web component
                      * @param param0 =
                      * @returns
                      */
          function AgentsChatPanel() {
            const {
              ready,
              store
            } = (0, _context.useChatContext)();
            if (store.notFound && ready) return _react.default.createElement(_notFound.ChatNotFound, null);
            if (!ready) return _react.default.createElement(_skeleton.ChatSkeleton, null);
            return _react.default.createElement(_chat.Chat, null);
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/input/action-button
      *******************************************/

      ims.set('./views/input/action-button', {
        hash: 3507527438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputActionButton = InputActionButton;
          var _react = require("react");
          var _recording = require("./recording");
          var _icons = require("@aimpact/chat-sdk/components/icons");
          var _context = require("./context");
          function InputActionButton({
            buttonIsDisabled
          }) {
            const {
              onSubmit,
              text
            } = (0, _context.useInputContext)();
            if (!!text.length) {
              return _react.default.createElement("span", {
                className: "input__icon  input__icon--right"
              }, _react.default.createElement(_icons.AppIconButton, {
                icon: "arrowUpward",
                className: "circle",
                variant: "primary",
                onClick: onSubmit,
                disabled: buttonIsDisabled
              }));
            }
            return _react.default.createElement("span", {
              className: "input__icon  input__icon--right"
            }, _react.default.createElement(_recording.RecordingButton, null));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/input/context
      *************************************/

      ims.set('./views/input/context', {
        hash: 4109674778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var _react = require("react");
          const InputContext = exports.InputContext = _react.default.createContext(null);
          const useInputContext = () => _react.default.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/input/hooks/use-input-form
      **************************************************/

      ims.set('./views/input/hooks/use-input-form', {
        hash: 4062426374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputForm = useInputForm;
          var _react = require("react");
          var _context = require("../../context");
          function useInputForm() {
            const {
              store,
              recorder
            } = (0, _context.useChatContext)();
            const [recording, setRecording] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [text, setText] = _react.default.useState('');
            const sendAudio = async event => {
              setFetching(true);
              event.preventDefault();
              event.stopPropagation();
              const audio = await recorder.stop();
              store.sendAudio(audio);
              setRecording(!recording);
              setFetching(false);
            };
            const handleSend = async event => {
              try {
                event?.stopPropagation();
                setText('');
                setFetching(true);
                await store.sendMessage(text);
                setFetching(false);
              } catch (e) {
                console.error('error', e);
              } finally {
                setFetching(false);
              }
            };
            const onSubmit = !!text.length ? handleSend : sendAudio;
            return {
              recording,
              text,
              setText,
              setFetching,
              setRecording,
              fetching,
              onSubmit
            };
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/input/index
      ***********************************/

      ims.set('./views/input/index', {
        hash: 2194338695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsChatInput = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("./context");
          var _textInput = require("./text-input");
          var _actionButton = require("./action-button");
          var _context2 = require("../context");
          var _useInputForm = require("./hooks/use-input-form");
          var _icons = require("pragmate-ui/icons");
          var _useStore = require("../hooks/use-store");
          /*bundle*/
          const AgentsChatInput = ({
            isWaiting = false,
            autoTranscribe = false,
            disabled = false,
            onClick
          }) => {
            const {
              store,
              recorder,
              setShowRealtime,
              realtime
            } = (0, _context2.useChatContext)();
            const {
              text,
              setText,
              onSubmit,
              fetching,
              recording,
              setRecording,
              setFetching
            } = (0, _useInputForm.useInputForm)();
            const isFetching = fetching || store.waitingResponse || isWaiting;
            const isDisabled = store.disabled || disabled;
            const contextValue = {
              store,
              onSubmit,
              recorder,
              autoTranscribe,
              fetching,
              setText,
              setRecording,
              recording,
              text,
              setFetching,
              disabled: isDisabled
            };
            (0, _useStore.useStore)(store);
            const attrs = {
              disabled: disabled || store.disabled
            };
            const buttonIsDisabled = attrs.disabled || store.waitingResponse || recording;
            let cls = `chat-input-container ${isFetching ? 'is-fetching' : ''} ${isDisabled ? 'is-disabled' : ''}`;
            const containerAttrs = {
              className: cls
            };
            const controlAttrs = {
              onClick,
              className: `chat-input-form ${isDisabled ? 'is-disabled' : ''}`
            };
            if (['', undefined, null].includes(text.replaceAll('\n', '')) || !text.trim().length) attrs.disabled = true;
            const onClickSpeech = () => {
              setShowRealtime(true);
              store.realtime.call();
            };
            return _react.default.createElement(_context.InputContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              ...controlAttrs
            }, _react.default.createElement("div", {
              ...containerAttrs
            }, _react.default.createElement(_textInput.TextInput, {
              text: text,
              setFetching: setFetching,
              fetching: isFetching,
              setText: setText,
              handleSend: onSubmit,
              disabled: isDisabled
            }), _react.default.createElement("div", {
              className: "input-chat__actions"
            }, realtime && _react.default.createElement(_icons.IconButton, {
              icon: "speech",
              onClick: onClickSpeech
            }), _react.default.createElement(_actionButton.InputActionButton, {
              buttonIsDisabled: buttonIsDisabled
            })))));
          };
          exports.AgentsChatInput = AgentsChatInput;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/input/recording/error-modal
      ***************************************************/

      ims.set('./views/input/recording/error-modal', {
        hash: 1828955527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useChatContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/index
      *********************************************/

      ims.set('./views/input/recording/index', {
        hash: 1575559207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _player = require("./player");
          var _context = require("../context");
          var _modal = require("./modal");
          var _errorModal = require("./error-modal");
          /*bundle*/
          const RecordingButton = ({
            disabled = false
          }) => {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useInputContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
            const [, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const onRecord = async () => {
              try {
                await recorder.record();
                setRecording(!recording);
              } catch (e) {
                setError(true);
              }
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                console.log('permisos no concedidos');
                setError(true);
              });
            };
            const playAction = async event => {
              try {
                event.preventDefault();
                setFetching(true);
                const permissions = await recorder.hasPermissions();
                if (!permissions) {
                  setShowModal(true);
                  return;
                }
                onRecord();
              } catch (e) {
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            const onCloseError = () => setError(false);
            const isDisabled = disabled || fetching;
            if (recording) return _react.default.createElement(_player.Player, null);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              icon: "mic",
              onClick: playAction,
              disabled: isDisabled
            }), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: onCloseError
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/recording/modal
      *********************************************/

      ims.set('./views/input/recording/modal', {
        hash: 1743184360,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useChatContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("header", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, subtitle), _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/input/recording/player
      **********************************************/

      ims.set('./views/input/recording/player', {
        hash: 3257244478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Player = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _timer = require("../timer");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("@aimpact/chat-sdk/components/icons");
          const Player = () => {
            const {
              recorder,
              setRecording,
              autoTranscribe,
              store,
              setText,
              setFetching
            } = (0, _context.useInputContext)();
            const [processing, setProcessing] = _react.default.useState(false);
            const [disabled, setDisabled] = _react.default.useState(true);
            const cancel = async event => {
              event.preventDefault();
              await recorder.stop();
              setRecording(false);
            };
            _react.default.useEffect(() => {
              setTimeout(() => {
                setDisabled(false);
              }, 1000);
            }, []);
            const transcribe = async () => {
              setProcessing(true);
              const audio = await recorder.stop();
              const transcription = await store.transcribe(audio);
              if (transcription.error) {
                console.error(transcription.error);
                return;
              }
              setText(transcription.data.text);
              setRecording(false);
            };
            const onSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                setFetching(true);
                if (autoTranscribe) return transcribe();
                const audio = await recorder.stop();
                store.sendAudio(audio);
                setRecording(false);
                setFetching(false);
              } catch (e) {
                console.error(e);
              }
            };
            return _react.default.createElement("div", {
              className: "recording-player__container"
            }, _react.default.createElement(_icons.IconButton, {
              className: "circle",
              icon: "delete",
              onClick: cancel
            }), _react.default.createElement(_timer.Timer, {
              action: "start"
            }), _react.default.createElement("div", {
              className: "recording-button__container"
            }, processing ? _react.default.createElement(_components.Button, null, _react.default.createElement(_components.Spinner, {
              active: true
            })) : _react.default.createElement(_icons2.AppIconButton, {
              icon: "arrowUpward",
              className: "circle",
              variant: "primary",
              onClick: onSubmit,
              disabled: disabled
            })));
          };
          exports.Player = Player;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/input/text-input
      ****************************************/

      ims.set('./views/input/text-input', {
        hash: 3741333897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextInput = TextInput;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          function TextInput({
            setFetching,
            setText,
            handleSend,
            fetching,
            text,
            disabled
          }) {
            const {
              store
            } = (0, _context.useInputContext)();
            const textAreaRef = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = textAreaRef.current;
              target.style.height = 'auto';
              target.style.height = text.length == 1 ? 'auto' : (target.scrollHeight === 0 ? '16' : target.scrollHeight) + 'px';
              if (['undefined', undefined].includes(text.replaceAll('\n', ''))) return;
            }, [text]);
            (0, _hooks.useBinder)([store.chat], () => {
              globalThis.setTimeout(() => textAreaRef.current.focus(), 200);
            }, 'response.finished');
            const disabledTextarea = {
              disabled: fetching || disabled
            };
            const handleInputChange = e => {
              const {
                value
              } = e.target;
              if (['undefined', undefined].includes(value.replaceAll('\n'))) return;
              setText(value);
            };
            const handleKeyDown = e => {
              if (e.key !== 'Enter') return;
              const cb = prevValue => prevValue + '\n';
              const value = e.target.value.replaceAll('\n');
              if (['', undefined, null].includes(value)) return;
              e.shiftKey ? setText(cb) : handleSend();
            };
            return _react.default.createElement("div", {
              className: "input__wrapper"
            }, _react.default.createElement("textarea", {
              ...disabledTextarea,
              rows: 1,
              value: text,
              onChange: handleInputChange,
              onKeyDown: handleKeyDown,
              autoFocus: true,
              className: "input__textarea",
              ref: textAreaRef
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/input/timer/index
      *****************************************/

      ims.set('./views/input/timer/index', {
        hash: 1478628646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _useTimer = require("./use-timer");
          // Timer.tsx

          function Timer({
            action
          }) {
            const isRunning = ['restart', 'start'].includes(action);
            const restart = action === 'restart';
            const [hours, minutes, seconds, milliseconds] = (0, _useTimer.useTimer)(isRunning, restart);
            const secRendered = seconds.toString().padStart(2, '0');
            const minutesRendered = minutes.toString().padStart(2, '0');
            return _react.default.createElement("div", {
              className: 'timer-message__container'
            }, _react.default.createElement("span", null, `${minutesRendered}`, ":"), _react.default.createElement("span", null, `${secRendered}`));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/input/timer/use-timer
      *********************************************/

      ims.set('./views/input/timer/use-timer', {
        hash: 1623060353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTimer = useTimer;
          var _react = require("react");
          // useTimer.ts

          const {
            useState,
            useEffect
          } = _react.default;
          function useTimer(isRunning, restart) {
            const [time, setTime] = useState(0);
            useEffect(() => {
              let intervalId;
              if (isRunning) {
                intervalId = setInterval(() => {
                  setTime(prevTime => prevTime + 1);
                }, 10); // 10 ms interval for tracking milliseconds
              }
              return () => {
                clearInterval(intervalId);
              };
            }, [isRunning]);
            useEffect(() => {
              if (restart) {
                setTime(0);
              }
            }, [restart]);
            const milliseconds = time % 100; // 1000 ms in a second, but we're updating every 10 ms
            const seconds = Math.floor(time / 100 % 60); // Converted to seconds
            const minutes = Math.floor(time / 6000 % 60); // Converted to minutes
            const hours = Math.floor(time / 360000); // Converted to hours
            return [hours, minutes, seconds, milliseconds];
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/input/types/agents-input
      ************************************************/

      ims.set('./views/input/types/agents-input', {
        hash: 2366847878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/not-found
      *********************************/

      ims.set('./views/not-found', {
        hash: 4269748456,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatNotFound = ChatNotFound;
          var _react = require("react");
          function ChatNotFound() {
            return _react.default.createElement("div", null, "404");
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/realtime/container
      ******************************************/

      ims.set('./views/realtime/container', {
        hash: 3553173397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimePanel = RealtimePanel;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _status = require("./status");
          function RealtimePanel({
            isVisible
          }) {
            const {
              store,
              setShowRealtime
            } = (0, _context.useChatContext)();
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.realtime], () => {
              setUpdated({});
            });
            if (!store.realtime.available) return null;
            const {
              valid
            } = store.realtime?.client;
            const callStatus = store.realtime.client.status;
            const speakerIcon = true ? 'call' : 'callEnd';
            if (!valid) {
              const {
                recorder,
                player
              } = store.realtime.client;
              const errors = [];
              if (recorder?.error) {
                errors.push(_react.default.createElement("div", {
                  key: "recorder-error"
                }, "\u2022 Recorder is invalid: ", recorder.error.message));
              }
              if (player?.error) {
                errors.push(_react.default.createElement("div", {
                  key: "player-error"
                }, "\u2022 Audio player is invalid: ", player.error.message));
              }
              return _react.default.createElement("div", {
                className: "phone flex items-center justify-center min-h-screen bg-gray-100"
              }, _react.default.createElement("div", null, "Errors found:"), errors);
            }
            const onMicClick = () => {
              store.realtime.onmic();
            };
            const hangup = () => {
              store.realtime.call();
              setShowRealtime(false);
            };
            const micIcon = store.realtime.muted ? 'micOff' : 'mic';
            return _react.default.createElement(_framerMotion.AnimatePresence, null, isVisible && _react.default.createElement(_framerMotion.motion.div, {
              className: "realtime-panel",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              exit: {
                opacity: 0,
                y: 20
              },
              transition: {
                duration: 0.5,
                ease: 'easeOut'
              }
            }, _react.default.createElement(_image.Image, {
              className: "app-logo",
              src: "/assets/rvd/logo.png"
            }), _react.default.createElement(_status.RealtimeStatus, null), _react.default.createElement("div", {
              className: "realtime-actions__container"
            }, _react.default.createElement(_icons.IconButton, {
              disabled: callStatus !== 'created',
              icon: micIcon,
              onClick: onMicClick
            }), _react.default.createElement(_icons.IconButton, {
              className: "call-icon",
              icon: speakerIcon,
              onClick: hangup
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/realtime/devices
      ****************************************/

      ims.set('./views/realtime/devices', {
        hash: 112979781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectDevice = void 0;
          var _recorder = require("@aimpact/agents-api/realtime/audio/recorder");
          var _react = require("react");
          var _state = require("@aimpact/agents-api/realtime/widgets/state");
          const SelectDevice = ({
            client
          }) => {
            const state = new _state.State();
            state.define({
              available: [],
              selected: '',
              fetched: false,
              error: void 0
            });
            const {
              values
            } = state;
            (0, _react.useEffect)(() => {
              _recorder.devices.prepare().then(() => {
                values.available = [..._recorder.devices.values()];
                values.fetched = true;
                select(_recorder.devices.default?.id || '');
              }).catch(exc => {
                console.error(exc);
                values.error = `Error caught looking for devices`;
              });
            }, []);
            const select = id => {
              values.selected = id;
              const device = values.available.find(device => device.id === id);
              client.recorder.device = device;
            };
            const onchange = event => {
              select(event.target.value);
            };
            if (!values.fetched) return null;
            return _react.default.createElement("div", {
              className: "device-selection"
            }, _react.default.createElement("label", {
              htmlFor: "device-select"
            }, "Select Device:"), _react.default.createElement("select", {
              id: "device-select",
              value: values.selected,
              onChange: onchange
            }, values.available.map(device => _react.default.createElement("option", {
              key: device.id,
              value: device.id
            }, device.label))));
          };
          exports.SelectDevice = SelectDevice;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/realtime/icons
      **************************************/

      ims.set('./views/realtime/icons', {
        hash: 3363004562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpeakerIcon = exports.PhoneIcon = exports.MicIcon = void 0;
          var _react = require("react");
          const PhoneIcon = ({
            isOff
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("path", {
            d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
          }), isOff && _react.default.createElement("line", {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
            stroke: "currentColor",
            strokeWidth: "2"
          }));
          exports.PhoneIcon = PhoneIcon;
          const MicIcon = ({
            isMuted
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("path", {
            d: "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"
          }), _react.default.createElement("path", {
            d: "M19 10v2a7 7 0 01-14 0v-2"
          }), _react.default.createElement("line", {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "23"
          }), _react.default.createElement("line", {
            x1: "8",
            y1: "23",
            x2: "16",
            y2: "23"
          }), isMuted && _react.default.createElement("line", {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            strokeLinecap: "round"
          }));
          exports.MicIcon = MicIcon;
          const SpeakerIcon = ({
            isOff
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
          }), _react.default.createElement("path", {
            d: isOff ? '' : 'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'
          }), isOff && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("line", {
            x1: "23",
            y1: "9",
            x2: "17",
            y2: "15",
            strokeLinecap: "round"
          }), _react.default.createElement("line", {
            x1: "17",
            y1: "9",
            x2: "23",
            y2: "15",
            strokeLinecap: "round"
          })));
          exports.SpeakerIcon = SpeakerIcon;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/realtime/status
      ***************************************/

      ims.set('./views/realtime/status', {
        hash: 3690609522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimeStatus = RealtimeStatus;
          var _react = require("react");
          var _context = require("../context");
          function RealtimeStatus() {
            const {
              store
            } = (0, _context.useChatContext)();
            const {
              status
            } = store.realtime.client;
            const getStatusMessage = () => {
              const messages = {
                closed: 'Ready to call',
                connecting: 'Calling.',
                open: 'Calling...',
                closing: 'Hanging up',
                created: `${Math.floor(store.realtime.duration / 60)}:${(store.realtime.duration % 60).toString().padStart(2, '0')}`
              };
              return messages[status] || '';
            };
            return _react.default.createElement("div", {
              className: "realtime__status"
            }, _react.default.createElement("span", null, getStatusMessage()));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 1866695987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/use-manager
      ***********************************/

      ims.set('./views/use-manager', {
        hash: 2447596581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useManager = useManager;
          var _react = require("react");
          var _store = require("../store");
          function useManager({
            id,
            language = 'en',
            realtime = true,
            model,
            onListenChat
          }) {
            const [store, setStore] = _react.default.useState({});
            const [changeCount, setChangeCount] = _react.default.useState(0);
            const callback = () => {
              const manager = new _store.StoreManager({
                id,
                language,
                realtime,
                model,
                onListenChat
              });
              const onChange = () => {
                setChangeCount(prevCount => prevCount + 1);
              };
              const cleanUp = () => {
                manager.off('change', onChange);
              };
              manager.on('change', onChange);
              setStore(manager);
              return cleanUp;
            };
            _react.default.useEffect(callback, [id]);
            return {
              ready: store.ready,
              store,
              changeCount
            };
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/utils/get-chat-container-class
      ******************************************************/

      ims.set('./views/utils/get-chat-container-class', {
        hash: 1812136555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getChatContainerClass = getChatContainerClass;
          function getChatContainerClass(isReader) {
            return `chat-control__container${isReader ? ' chat-control__container--reader' : ''}`;
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/utils/getChatContainerClass
      ***************************************************/

      ims.set('./views/utils/getChatContainerClass', {
        hash: 1812136555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getChatContainerClass = getChatContainerClass;
          function getChatContainerClass(isReader) {
            return `chat-control__container${isReader ? ' chat-control__container--reader' : ''}`;
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/widget/index
      ************************************/

      ims.set('./views/widget/index', {
        hash: 3204793680,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chat = require("../chat");
          var _context = require("../context");
          var _skeleton = require("../chat/skeleton");
          var _notFound = require("../not-found");
          /**
           * Main component of the chat web component
           * @param param0 =
           * @returns
           */
          function View({
            store,
            ...props
          }) {
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            const icon = props.attributes.get('icon');
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const {
              autoplay,
              messages,
              texts,
              audioManager: {
                player
              }
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              texts: store.texts,
              autoplay,
              systemIcon: icon,
              messages,
              player,
              ready: store.ready,
              attributes: props.attributes
            };
            const Control = !store.notFound ? _chat.Chat : _notFound.ChatNotFound;
            const View = ready ? Control : _skeleton.ChatSkeleton;
            return _react.default.createElement(_context.ChatContext.Provider, {
              value: contextValue
            }, _react.default.createElement(View, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./store/audio",
        "from": "AudioManager",
        "name": "AudioManager"
      }, {
        "im": "./views/chat/index",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./views/container",
        "from": "AgentsChatContainer",
        "name": "AgentsChatContainer"
      }, {
        "im": "./views/context",
        "from": "ChatContext",
        "name": "ChatContext"
      }, {
        "im": "./views/context",
        "from": "useChatContext",
        "name": "useChatContext"
      }, {
        "im": "./views/hooks/use-store",
        "from": "useStore",
        "name": "useStore"
      }, {
        "im": "./views/index",
        "from": "AgentsChatPanel",
        "name": "AgentsChatPanel"
      }, {
        "im": "./views/input/index",
        "from": "AgentsChatInput",
        "name": "AgentsChatInput"
      }, {
        "im": "./views/input/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
      }, {
        "im": "./views/input/recording/index",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/input/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
      }, {
        "im": "./views/types",
        "from": "IAgentsContainerProps",
        "name": "IAgentsContainerProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioManager') && _export("AudioManager", AudioManager = require ? require('./store/audio').AudioManager : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./views/chat/index').Chat : value);
        (require || prop === 'AgentsChatContainer') && _export("AgentsChatContainer", AgentsChatContainer = require ? require('./views/container').AgentsChatContainer : value);
        (require || prop === 'ChatContext') && _export("ChatContext", ChatContext = require ? require('./views/context').ChatContext : value);
        (require || prop === 'useChatContext') && _export("useChatContext", useChatContext = require ? require('./views/context').useChatContext : value);
        (require || prop === 'useStore') && _export("useStore", useStore = require ? require('./views/hooks/use-store').useStore : value);
        (require || prop === 'AgentsChatPanel') && _export("AgentsChatPanel", AgentsChatPanel = require ? require('./views/index').AgentsChatPanel : value);
        (require || prop === 'AgentsChatInput') && _export("AgentsChatInput", AgentsChatInput = require ? require('./views/input/index').AgentsChatInput : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/input/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/input/recording/index').RecordingButton : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/input/recording/modal').PermissionsModal : value);
        (require || prop === 'IAgentsContainerProps') && _export("IAgentsContainerProps", IAgentsContainerProps = require ? require('./views/types').IAgentsContainerProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJjYXRlZ29yeSIsImNoYXQiLCJtb2RlbCIsImNoYXRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0c01vZGVsIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJwcm9jZXNzVHJhbnNjcmlwdGlvbiIsInByb2NjZXNzVHJhbnNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwib25MaXN0ZW5DaGF0IiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwiZ2xvYmFsVGhpcyIsImNoYXRTdG9yZSIsImxvYWQiLCJwcm9jZXNzTW9kZWwiLCJjb25zb2xlIiwibG9nIiwiY2hhdElkIiwiY3VycmVudENoYXQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwiZGUiLCJmZXRjaGluZyIsIndhcm4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJsb2dnZWQiLCJDaGF0IiwibG9hZEFsbCIsImZvdW5kIiwic2VuZE1lc3NhZ2UiLCJjb250ZW50IiwicGVyZm9ybWFuY2UiLCJtYXJrIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJlIiwiZXJyb3IiLCJzZW5kQXVkaW8iLCJ0cmFuc2NyaWJlIiwidW5tb3VudCIsInN0b3AiLCJjbGVhbiIsIl9jbGllbnQiLCJfY29udmVyc2F0aW9uIiwiaXNTdG9yZSIsImNvbnZlcnNhdGlvbiIsImNsaWVudCIsInZhbGlkYXRlIiwiaW50ZXJ2YWwiLCJhdWRpb0RldmljZXMiLCJhdmFpbGFibGUiLCJwcm9wZXJ0aWVzIiwiZHVyYXRpb24iLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJpbml0IiwiaW52YWxpZGF0ZSIsImluaXRpYXRlIiwiaXNSZWFkeSIsImVuZCIsImRldmljZXMiLCJwcmVwYXJlIiwidmFsdWVzIiwic2VsZWN0RGV2aWNlIiwiZGVmYXVsdCIsImRldmljZVNlbGVjdGVkIiwiZGV2aWNlIiwiZmluZCIsInRva2VuIiwiZmlyZWJhc2VUb2tlbiIsInVwZGF0ZSIsIm9ubWljIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwib2ZmIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJjbG9zZSIsInJlY29yZCIsImluaXRpYWxpc2VkIiwic3RyZWFtIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInJlY29yZGluZyIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJyZWNvcmRpbmdQcm9taXNlIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzUGVybWlzc2lvbnMiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJhY3RpdmUiLCJoYXNQZXJtaXNzaW9uIiwibWltZVR5cGUiLCJNZWRpYVJlY29yZGVyIiwiaXNUeXBlU3VwcG9ydGVkIiwib25kYXRhYXZhaWxhYmxlIiwiZXZlbnQiLCJkYXRhIiwic2l6ZSIsInB1c2giLCJQZW5kaW5nUHJvbWlzZSIsIm9uc3RvcCIsIkJsb2IiLCJ0eXBlIiwicmVzb2x2ZSIsInN0YXJ0IiwiX3JlYWN0IiwiX2ljb25zIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJCYWNrQXJyb3ciLCJzdG9yZSIsInNlcGFyYXRvciIsImljb24iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwic2Nyb2xsUG9zaXRpb24iLCJ1c2VDaGF0Q29udGV4dCIsInJlZiIsInVzZUJpbmRlciIsInNldFRpbWVvdXQiLCJjb250YWluZXIiLCJjdXJyZW50IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXN0YW5jZUZyb21Cb3R0b20iLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1RvQm90dG9tIiwiYWRkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJoYXMiLCJnZXQiLCJjbHNDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiX21lc3NhZ2VzIiwiX2dldENoYXRDb250YWluZXJDbGFzcyIsIl9lbXB0eVN0YXRlIiwiaXNSZWFkZXIiLCJ1c2VTdGF0ZSIsInNlcGFyYXRvclJlZiIsInN5c3RlbUljb24iLCJlbXB0eSIsInNob3dBdmF0YXIiLCJzZXRNZXNzYWdlc0NvdW50IiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93IiwiY29udGFpbmVyQ2xhc3MiLCJnZXRDaGF0Q29udGFpbmVyQ2xhc3MiLCJzY3JvbGxUb1NlcGFyYXRvciIsInVzZUNhbGxiYWNrIiwiaGFuZGxlTmV3TWVzc2FnZSIsIkVtcHR5U3RhdGUiLCJNZXNzYWdlcyIsIl9jb21wb25lbnRzIiwiQ2hhdFNrZWxldG9uIiwiU3Bpbm5lciIsInVzZUV4dGVuc2lvbiIsInNldFJlYWR5Iiwid2ViQ29tcG9uZW50TmFtZSIsImNvbnRyb2wiLCJvblJlYWR5IiwiRnJhZ21lbnQiLCJpc1ZhbGlkRWxlbWVudCIsIkNvbXAiLCJfYWxlcnQiLCJfdXNlU3RvcmUiLCJFcnJvcnNSZW5kZXJlciIsImVycm9ycyIsInVzZVN0b3JlIiwibWFwIiwiaWR4IiwiQWxlcnQiLCJrZXkiLCJKU09OIiwic3RyaW5naWZ5IiwiX3VzZU1hbmFnZXIiLCJfY29udGFpbmVyIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImNoaWxkcmVuIiwic2tlbGV0b24iLCJTa2VsZXRvbkNvbnRyb2wiLCJyZXN0Iiwic2V0U2Nyb2xsUG9zaXRpb24iLCJzaG93UmVhbHRpbWUiLCJzZXRTaG93UmVhbHRpbWUiLCJ1c2VNYW5hZ2VyIiwic3RvcmVSZWFkeSIsImNvbnRleHRWYWx1ZSIsInRyYWNlIiwiQ2hhdENvbnRleHQiLCJQcm92aWRlciIsIlJlYWx0aW1lUGFuZWwiLCJpc1Zpc2libGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImV2ZW50cyIsIkFycmF5IiwiaXNBcnJheSIsInNldFZlcnNpb24iLCJoYW5kbGVyIiwidiIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQ2hhdE5vdEZvdW5kIiwiX3JlY29yZGluZyIsIklucHV0QWN0aW9uQnV0dG9uIiwiYnV0dG9uSXNEaXNhYmxlZCIsIm9uU3VibWl0IiwidGV4dCIsInVzZUlucHV0Q29udGV4dCIsIkFwcEljb25CdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dEZvcm0iLCJzZXRSZWNvcmRpbmciLCJzZXRGZXRjaGluZyIsInNldFRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJfZm9ybSIsIl90ZXh0SW5wdXQiLCJfYWN0aW9uQnV0dG9uIiwiX2NvbnRleHQyIiwiX3VzZUlucHV0Rm9ybSIsIkFnZW50c0NoYXRJbnB1dCIsImlzV2FpdGluZyIsImF1dG9UcmFuc2NyaWJlIiwiaXNGZXRjaGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJvbkNsaWNrU3BlZWNoIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsInRyYW5zY3JpcHRpb24iLCJUaW1lciIsImFjdGlvbiIsIkJ1dHRvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiTWF0aCIsImZsb29yIiwiX2ZyYW1lck1vdGlvbiIsIl9pbWFnZSIsIl9zdGF0dXMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInZhbGlkIiwiY2FsbFN0YXR1cyIsInNwZWFrZXJJY29uIiwib25NaWNDbGljayIsImhhbmd1cCIsIm1pY0ljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJSZWFsdGltZVN0YXR1cyIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJvbmNoYW5nZSIsImh0bWxGb3IiLCJsYWJlbCIsIlBob25lSWNvbiIsImlzT2ZmIiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZCIsIngxIiwieTEiLCJ4MiIsInkyIiwiTWljSWNvbiIsImlzTXV0ZWQiLCJzdHJva2VMaW5lY2FwIiwiU3BlYWtlckljb24iLCJwb2ludHMiLCJnZXRTdGF0dXNNZXNzYWdlIiwiY2xvc2VkIiwiY29ubmVjdGluZyIsIm9wZW4iLCJjbG9zaW5nIiwiY3JlYXRlZCIsIl9zdG9yZSIsInNldFN0b3JlIiwiY2hhbmdlQ291bnQiLCJzZXRDaGFuZ2VDb3VudCIsImNhbGxiYWNrIiwibWFuYWdlciIsInByZXZDb3VudCIsImNsZWFuVXAiLCJWaWV3IiwicHJvcHMiLCJDb250cm9sIl0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHktc3RhdGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hvb2tzL3VzZS1zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvYWN0aW9uLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvaW5wdXQvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5wdXQvaG9va3MvdXNlLWlucHV0LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2lucHV0L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvZXJyb3ItbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL21vZGFsLnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvcGxheWVyLnRzeCIsIi90cy92aWV3cy9pbnB1dC90ZXh0LWlucHV0LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5wdXQvdGltZXIvdXNlLXRpbWVyLnRzeCIsIi9hZ2VudHMtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL25vdC1mb3VuZC50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9kZXZpY2VzLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9pY29ucy50c3giLCIvdHMvdmlld3MvcmVhbHRpbWUvc3RhdHVzLnRzeCIsIi90cy92aWV3cy91c2UtbWFuYWdlci50c3giLCIvdHMvdmlld3MvdXRpbHMvZ2V0LWNoYXQtY29udGFpbmVyLWNsYXNzLnRzIiwiL3RzL3ZpZXdzL3V0aWxzL2dldENoYXRDb250YWluZXJDbGFzcy50cyIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR0EsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBS087VUFBWSxNQUFPSSxZQUFhLFNBQVFMLE1BQUEsQ0FBQU0sYUFBcUI7WUFHbkUsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxD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SSxHQUFHNFIsS0FBSyxDQUFDMVIsVUFBVSxDQUFDMkIsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN6QyxNQUFNLENBQUMxQixjQUFjLEVBQUVrRixpQkFBaUIsQ0FBQyxHQUFHNUYsTUFBQSxDQUFBbEQsT0FBSyxDQUFDaUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqRSxNQUFNO2NBQ0w1SixRQUFRO2NBQ1IzQixRQUFRO2NBQ1JPLEtBQUs7Y0FDTE0sWUFBWSxFQUFFO2dCQUFFcEM7Y0FBTTtZQUFFLENBQ3hCLEdBQUdvSyxLQUFLO1lBRVQsSUFBQUgsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQ1IsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjhELFFBQVEsQ0FBQzlELEtBQUssQ0FBQ3JILEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixNQUFNaU4sWUFBWSxHQUFHO2NBQ3BCTCxpQkFBaUIsRUFBRTFRLEtBQUssSUFBRztnQkFDMUIsSUFBSSxDQUFDQSxLQUFLLEVBQUV1RSxPQUFPLENBQUN5TSxLQUFLLENBQUMsd0NBQXdDLENBQUM7Z0JBQ25FTixpQkFBaUIsQ0FBQzFRLEtBQUssQ0FBQztjQUN6QixDQUFDO2NBQ0R3TCxjQUFjO2NBQ2RMLEtBQUs7Y0FDTHRJLEtBQUssRUFBRXNJLEtBQUssQ0FBQ3RJLEtBQUs7Y0FDbEJvQixRQUFRO2NBQ1I4SixVQUFVLEVBQUUxQyxJQUFJO2NBQ2hCL0ksUUFBUTtjQUNSdkIsTUFBTTtjQUNOK0MsS0FBSyxFQUFFcUgsS0FBSyxDQUFDckgsS0FBSztjQUNsQnlILFVBQVUsRUFBRTBSLEtBQUssQ0FBQzFSO2FBQ2xCO1lBRUQsTUFBTTJSLE9BQU8sR0FBRyxDQUFDL1IsS0FBSyxDQUFDN0gsUUFBUSxHQUFHdU8sS0FBQSxDQUFBek0sSUFBSSxHQUFHMk0sU0FBQSxDQUFBRSxZQUFZO1lBQ3JELE1BQU0rSyxJQUFJLEdBQUdsWixLQUFLLEdBQUdvWixPQUFPLEdBQUdwTCxTQUFBLENBQUFoRCxZQUFZO1lBRTNDLE9BQ0NoRSxNQUFBLENBQUFsRCxPQUFBLENBQUF3RixhQUFBLENBQUNuQyxRQUFBLENBQUFnRyxXQUFXLENBQUNDLFFBQVE7Y0FBQ2xSLEtBQUssRUFBRStRO1lBQVksR0FDeENqRyxNQUFBLENBQUFsRCxPQUFBLENBQUF3RixhQUFBLENBQUM0UCxJQUFJLE9BQUcsQ0FDYztVQUV6QiIsImlnbm9yZUxpc3QiOltdfQ==