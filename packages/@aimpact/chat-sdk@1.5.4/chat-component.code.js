System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/chat-sdk@1.5.4/wrapper", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "@beyond-js/kernel@0.1.12/core", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/messages", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.5.4/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/agents-api@0.4.1/realtime/widgets/state"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, AudioManager, Chat, AgentsChatContainer, ChatContext, useChatContext, useStore, AgentsChatPanel, AgentsChatInput, PermissionsErrorModal, RecordingButton, PermissionsModal, IAgentsContainerProps, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk154ComponentsIcons) {
      dependency_17 = _aimpactChatSdk154ComponentsIcons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_18 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_19 = _pragmateUi100Beta7Modal;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_21 = _pragmateUi100Beta7Image;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_22 = _aimpactAgentsApi041RealtimeWidgetsState;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/voice', dependency_3], ['@aimpact/chat-sdk/wrapper', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/agents-api/realtime/client', dependency_8], ['@aimpact/agents-api/realtime/client/conversation', dependency_9], ['@aimpact/agents-api/realtime/audio/recorder', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['pragmate-ui/icons', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat-sdk/messages', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat-sdk/components/icons', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/modal', dependency_19], ['framer-motion', dependency_20], ['pragmate-ui/image', dependency_21], ['@aimpact/agents-api/realtime/widgets/state', dependency_22]]);
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
        hash: 1647926629,
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
        hash: 2028658711,
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
              this.#messages = this.#chat.messages;
              this.#realtime.chatId = this.#model.id;
              _wrapper.AppWrapper.currentChat = this.#model;
              const language = this.language ?? _wrapper.AppWrapper.language;
              const languages = {
                en: 'en-US',
                es: 'es-MX'
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
                es: 'es-MX'
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
                console.error(e);
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
        hash: 3403006025,
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
          function getChatContainerClass(reader) {
            return `chat-control__container${reader ? ' chat-control__container--reader' : ''}`;
          }
          /*bundle*/
          function Chat() {
            const [reader] = _react.default.useState(false);
            const separator = _react.default.useRef(null);
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
            const [, setMessages] = _react.default.useState(messages?.length ?? [].length);
            const [updateScroll, setUpdateScroll] = _react.default.useState(performance.now());
            const cls = getChatContainerClass(reader);
            const onNewMessage = () => {
              setMessages(store.messages.length);
              globalThis.setTimeout(() => {
                separator.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end'
                });
              }, 100);
              // globalThis.scrollTo(0, document.body.scrollHeight);
            };
            _react.default.useEffect(() => {
              globalThis.setTimeout(() => {
                separator.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end'
                });
              }, 100);
            }, [updateScroll]);
            (0, _hooks.useBinder)([store.chat], onNewMessage, ['new.message', 'response.finished']);
            let clsContent = `chat__content`;
            if (!store.messages.length) {
              const Control = empty ? empty : () => _react.default.createElement(_react.default.Fragment, null, "No hay contenido");
              return _react.default.createElement("div", {
                className: cls
              }, _react.default.isValidElement(Control) ? Control : _react.default.createElement(Control, null));
            }
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: clsContent
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
              ref: separator,
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

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 2585545531,
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
            icon,
            autoplay,
            skeleton,
            language,
            empty,
            model,
            player,
            showAvatar = false,
            onListenChat,
            ...props
          }) {
            const [scrollPosition, setScrollPosition] = _react.default.useState('top');
            const [showRealtime, setShowRealtime] = _react.default.useState(false);
            const {
              ready,
              store
            } = (0, _useManager.useManager)({
              id: props.id,
              language,
              onListenChat,
              realtime: props.realtime,
              model
            });
            const obj = store ? store : {};
            const SkeletonControl = skeleton;
            if (!ready && skeleton) return _react.default.createElement(SkeletonControl, null);
            if (!ready) return null;
            const {
              messages
            } = obj;
            const contextValue = {
              setScrollPosition: value => {
                if (!value) console.trace('setScrollPosition called with no value');
                setScrollPosition(value);
              },
              scrollPosition,
              store,
              ready: store.ready,
              texts: store.texts,
              recorder: store?.audioManager?.recorder,
              autoplay,
              systemIcon: icon,
              empty,
              realtime: props.realtime,
              setShowRealtime,
              showAvatar,
              skeleton,
              messages,
              player,
              attributes: props.attributes
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
        hash: 610095468,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJfdm9pY2UiLCJfd3JhcHBlciIsIl9yZWNvcmRlciIsIkF1ZGlvTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJyZWNvcmRlciIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJSZWNvcmRlciIsInJlYWN0aXZlUHJvcHMiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsImxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJzZWxlY3RQbGF5ZXIiLCJuYW1lIiwiRXJyb3IiLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfYXVkaW8iLCJfc2Vzc2lvbiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9yZWFsdGltZSIsIlN0b3JlTWFuYWdlciIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJjYXRlZ29yeSIsImNoYXQiLCJtb2RlbCIsImNoYXRzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0ZXh0c01vZGVsIiwiYXVkaW8iLCJhdWRpb01hbmFnZXIiLCJwcm9jZXNzVHJhbnNjcmlwdGlvbiIsInByb2NjZXNzVHJhbnNjcmlwdGlvbiIsIm5vdEZvdW5kIiwiY3VycmVudE1lc3NhZ2UiLCJtZXNzYWdlIiwiaWQiLCJkaXNhYmxlZCIsInRyaWdnZXJFdmVudCIsImV4dGVuc2lvbnMiLCJNYXAiLCJyZWFkeSIsInJlYWx0aW1lIiwib25MaXN0ZW5DaGF0IiwiYXV0b3BsYXkiLCJSZWFsdGltZVN0b3JlIiwiZ2xvYmFsVGhpcyIsImNoYXRTdG9yZSIsImxvYWQiLCJwcm9jZXNzTW9kZWwiLCJjaGF0SWQiLCJjdXJyZW50Q2hhdCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJmZXRjaGluZyIsImNvbnNvbGUiLCJ3YXJuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibG9nZ2VkIiwiQ2hhdCIsImxvYWRBbGwiLCJmb3VuZCIsInNlbmRNZXNzYWdlIiwiY29udGVudCIsInBlcmZvcm1hbmNlIiwibWFyayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiZSIsImVycm9yIiwic2VuZEF1ZGlvIiwidHJhbnNjcmliZSIsInVubW91bnQiLCJzdG9wIiwiY2xlYW4iLCJfY2xpZW50IiwiX2NvbnZlcnNhdGlvbiIsImlzU3RvcmUiLCJjb252ZXJzYXRpb24iLCJjbGllbnQiLCJ2YWxpZGF0ZSIsImludGVydmFsIiwiYXVkaW9EZXZpY2VzIiwiYXZhaWxhYmxlIiwicHJvcGVydGllcyIsImR1cmF0aW9uIiwiQ29udmVyc2F0aW9uIiwiQ2xpZW50U2Vzc2lvbiIsInZhZCIsIm11dGVkIiwiaW5pdCIsImludmFsaWRhdGUiLCJpbml0aWF0ZSIsImlzUmVhZHkiLCJlbmQiLCJkZXZpY2VzIiwicHJlcGFyZSIsInZhbHVlcyIsInNlbGVjdERldmljZSIsImRlZmF1bHQiLCJkZXZpY2VTZWxlY3RlZCIsImRldmljZSIsImZpbmQiLCJ0b2tlbiIsImZpcmViYXNlVG9rZW4iLCJ1cGRhdGUiLCJvbm1pYyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9mZiIsImNhbGwiLCJzdGF0dXMiLCJjb25uZWN0IiwiY2xvc2UiLCJyZWNvcmQiLCJpbml0aWFsaXNlZCIsInN0cmVhbSIsIm1lZGlhUmVjb3JkZXIiLCJjaHVua3MiLCJyZWNvcmRpbmciLCJpbml0UHJvbWlzZSIsInN0b3BQcm9taXNlIiwicmVjb3JkaW5nUHJvbWlzZSIsImlzU2FmYXJpIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhhc1Blcm1pc3Npb25zIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwiYWN0aXZlIiwiaGFzUGVybWlzc2lvbiIsIm1pbWVUeXBlIiwiTWVkaWFSZWNvcmRlciIsImlzVHlwZVN1cHBvcnRlZCIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50IiwiZGF0YSIsInNpemUiLCJwdXNoIiwiUGVuZGluZ1Byb21pc2UiLCJvbnN0b3AiLCJCbG9iIiwidHlwZSIsInJlc29sdmUiLCJzdGFydCIsIl9yZWFjdCIsIl9pY29ucyIsIl9ob29rcyIsIl9jb250ZXh0IiwiQmFja0Fycm93Iiwic3RvcmUiLCJzZXBhcmF0b3IiLCJpY29uIiwidXNlUmVmIiwiYXR0cmlidXRlcyIsInNjcm9sbFBvc2l0aW9uIiwidXNlQ2hhdENvbnRleHQiLCJyZWYiLCJ1c2VCaW5kZXIiLCJzZXRUaW1lb3V0IiwiY29udGFpbmVyIiwiY3VycmVudCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiZGlzdGFuY2VGcm9tQm90dG9tIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ29Ub0JvdHRvbSIsImFkZCIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJiZWhhdmlvciIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiaGFzIiwiZ2V0IiwiY2xzQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIl9tZXNzYWdlcyIsImdldENoYXRDb250YWluZXJDbGFzcyIsInJlYWRlciIsInVzZVN0YXRlIiwic3lzdGVtSWNvbiIsImVtcHR5Iiwic2hvd0F2YXRhciIsInNldE1lc3NhZ2VzIiwidXBkYXRlU2Nyb2xsIiwic2V0VXBkYXRlU2Nyb2xsIiwibm93Iiwib25OZXdNZXNzYWdlIiwiY2xzQ29udGVudCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsImlzVmFsaWRFbGVtZW50IiwiTWVzc2FnZXMiLCJfY29tcG9uZW50cyIsIkNoYXRTa2VsZXRvbiIsIlNwaW5uZXIiLCJ1c2VFeHRlbnNpb24iLCJzZXRSZWFkeSIsIndlYkNvbXBvbmVudE5hbWUiLCJjb250cm9sIiwib25SZWFkeSIsIl91c2VNYW5hZ2VyIiwiX2NvbnRhaW5lciIsIkFnZW50c0NoYXRDb250YWluZXIiLCJjaGlsZHJlbiIsInNrZWxldG9uIiwicHJvcHMiLCJzZXRTY3JvbGxQb3NpdGlvbiIsInNob3dSZWFsdGltZSIsInNldFNob3dSZWFsdGltZSIsInVzZU1hbmFnZXIiLCJvYmoiLCJTa2VsZXRvbkNvbnRyb2wiLCJjb250ZXh0VmFsdWUiLCJ0cmFjZSIsIkNoYXRDb250ZXh0IiwiUHJvdmlkZXIiLCJSZWFsdGltZVBhbmVsIiwiaXNWaXNpYmxlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdG9yZSIsImV2ZW50cyIsIkFycmF5IiwiaXNBcnJheSIsInNldFZlcnNpb24iLCJoYW5kbGVyIiwidiIsIl9jaGF0IiwiX3NrZWxldG9uIiwiX25vdEZvdW5kIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQ2hhdE5vdEZvdW5kIiwiX3JlY29yZGluZyIsIklucHV0QWN0aW9uQnV0dG9uIiwiYnV0dG9uSXNEaXNhYmxlZCIsIm9uU3VibWl0IiwidGV4dCIsInVzZUlucHV0Q29udGV4dCIsIkFwcEljb25CdXR0b24iLCJSZWNvcmRpbmdCdXR0b24iLCJJbnB1dENvbnRleHQiLCJ1c2VJbnB1dEZvcm0iLCJzZXRSZWNvcmRpbmciLCJzZXRGZXRjaGluZyIsInNldFRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZVNlbmQiLCJfZm9ybSIsIl90ZXh0SW5wdXQiLCJfYWN0aW9uQnV0dG9uIiwiX2NvbnRleHQyIiwiX3VzZUlucHV0Rm9ybSIsIl91c2VTdG9yZSIsIkFnZW50c0NoYXRJbnB1dCIsImlzV2FpdGluZyIsImF1dG9UcmFuc2NyaWJlIiwiaXNGZXRjaGluZyIsIndhaXRpbmdSZXNwb25zZSIsImlzRGlzYWJsZWQiLCJhdHRycyIsImNvbnRhaW5lckF0dHJzIiwiY29udHJvbEF0dHJzIiwicmVwbGFjZUFsbCIsInRyaW0iLCJvbkNsaWNrU3BlZWNoIiwiRm9ybSIsIlRleHRJbnB1dCIsIl9tb2RhbCIsIlBlcm1pc3Npb25zRXJyb3JNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBlcm1pc3Npb25zIiwiQWxlcnRNb2RhbCIsImNlbnRlcmVkIiwiSWNvbiIsIl9wbGF5ZXIiLCJfZXJyb3JNb2RhbCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNldEVycm9yIiwic2V0SGFzUGVybWlzc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJsb2ciLCJwbGF5QWN0aW9uIiwib25DbG9zZUVycm9yIiwiUGxheWVyIiwiUGVybWlzc2lvbnNNb2RhbCIsIm9uQ29uZmlybSIsInN1YnRpdGxlIiwiaW50cm8iLCJfdGltZXIiLCJfaWNvbnMyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzZXREaXNhYmxlZCIsImNhbmNlbCIsInRyYW5zY3JpcHRpb24iLCJUaW1lciIsImFjdGlvbiIsIkJ1dHRvbiIsInRleHRBcmVhUmVmIiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJmb2N1cyIsImRpc2FibGVkVGV4dGFyZWEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJjYiIsInByZXZWYWx1ZSIsInNoaWZ0S2V5Iiwicm93cyIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiYXV0b0ZvY3VzIiwiX3VzZVRpbWVyIiwiaXNSdW5uaW5nIiwicmVzdGFydCIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiLCJ1c2VUaW1lciIsInNlY1JlbmRlcmVkIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXNSZW5kZXJlZCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInByZXZUaW1lIiwiTWF0aCIsImZsb29yIiwiX2ZyYW1lck1vdGlvbiIsIl9pbWFnZSIsIl9zdGF0dXMiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInZhbGlkIiwiY2FsbFN0YXR1cyIsInNwZWFrZXJJY29uIiwiZXJyb3JzIiwib25NaWNDbGljayIsImhhbmd1cCIsIm1pY0ljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiSW1hZ2UiLCJzcmMiLCJSZWFsdGltZVN0YXR1cyIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJzZWxlY3QiLCJleGMiLCJvbmNoYW5nZSIsImh0bWxGb3IiLCJtYXAiLCJsYWJlbCIsIlBob25lSWNvbiIsImlzT2ZmIiwidmlld0JveCIsIndpZHRoIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZCIsIngxIiwieTEiLCJ4MiIsInkyIiwiTWljSWNvbiIsImlzTXV0ZWQiLCJzdHJva2VMaW5lY2FwIiwiU3BlYWtlckljb24iLCJwb2ludHMiLCJnZXRTdGF0dXNNZXNzYWdlIiwiY2xvc2VkIiwiY29ubmVjdGluZyIsIm9wZW4iLCJjbG9zaW5nIiwiY3JlYXRlZCIsIl9zdG9yZSIsInNldFN0b3JlIiwiY2hhbmdlQ291bnQiLCJzZXRDaGFuZ2VDb3VudCIsImNhbGxiYWNrIiwibWFuYWdlciIsInByZXZDb3VudCIsImNsZWFuVXAiLCJWaWV3Il0sInNvdXJjZXMiOlsiL21lc3NhZ2VzLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3JlYWx0aW1lLnRzIiwiL3RzL3N0b3JlL3JlY29yZGVyLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NoYXQvYmFjay1hcnJvdy50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy92aWV3cy9jaGF0L3VzZS1leHRlbnNpb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaG9va3MvdXNlLXN0b3JlLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9hY3Rpb24tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9pbnB1dC9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbnB1dC9ob29rcy91c2UtaW5wdXQtZm9ybS50c3giLCIvdHMvdmlld3MvaW5wdXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9lcnJvci1tb2RhbC50c3giLCIvdHMvdmlld3MvaW5wdXQvcmVjb3JkaW5nL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC9yZWNvcmRpbmcvbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3JlY29yZGluZy9wbGF5ZXIudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RleHQtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2lucHV0L3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbnB1dC90aW1lci91c2UtdGltZXIudHN4IiwiL2FnZW50cy1pbnB1dC50c3giLCIvdHMvdmlld3Mvbm90LWZvdW5kLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2RldmljZXMudHN4IiwiL3RzL3ZpZXdzL3JlYWx0aW1lL2ljb25zLnRzeCIsIi90cy92aWV3cy9yZWFsdGltZS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL3VzZS1tYW5hZ2VyLnRzeCIsIi90cy92aWV3cy93aWRnZXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFHQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFLTztVQUFZLE1BQU9JLFlBQWEsU0FBUUwsTUFBQSxDQUFBTSxhQUFxQjtZQUduRSxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQUMsT0FBUSxHQUFHO2NBQ1ZDLEdBQUcsRUFBRVIsTUFBQSxDQUFBUyxLQUFLO2NBQ1ZDLEdBQUcsRUFBRVYsTUFBQSxDQUFBVyxRQUFRLENBQUM7YUFDZDtZQUVELENBQUFDLE1BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFDLGFBQWM7WUFDM0I7WUFFQSxDQUFBQSxhQUFjO1lBQ2RDLFlBQVlULE1BQU0sRUFBRVUsUUFBUTtjQUMzQixLQUFLLENBQUMsRUFBRSxDQUFDO2NBQ1QsSUFBSSxDQUFDLENBQUFULFFBQVMsR0FBRyxJQUFJSixTQUFBLENBQUFjLFFBQVEsRUFBRTtjQUMvQixJQUFJLENBQUMsQ0FBQVgsTUFBTyxHQUFHQSxNQUFNO2NBQ3JC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