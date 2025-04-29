System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/utils", "@beyond-js/events@0.0.7/events", "@aimpact/agents-api@0.4.1/realtime/audio/player", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ActiveConversation, ClientSessionBase, __beyond_pkg, hmr;
  _export({
    ActiveConversation: void 0,
    ClientSessionBase: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeUtils) {
      dependency_1 = _aimpactAgentsApi041RealtimeUtils;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }, function (_aimpactAgentsApi041RealtimeAudioPlayer) {
      dependency_3 = _aimpactAgentsApi041RealtimeAudioPlayer;
    }, function (_beyondJsKernel0112Core) {
      dependency_4 = _beyondJsKernel0112Core;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/client/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/utils', dependency_1], ['@beyond-js/events/events', dependency_2], ['@aimpact/agents-api/realtime/audio/player', dependency_3], ['@beyond-js/kernel/core', dependency_4]]);
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./active-conversation
      *************************************/
      ims.set('./active-conversation', {
        hash: 3633841940,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActiveConversation = void 0;
          var _utils = require("@aimpact/agents-api/realtime/utils");
          /*bundle*/
          class ActiveConversation {
            #session;
            #conversation;
            constructor(session) {
              this.#session = session;
            }
            async set(conversation) {
              this.#conversation = conversation;
            }
            #onItemAudioDelta(event, data) {
              const buffer = _utils.RealtimeUtils.base64ToArrayBuffer(data.delta);
              const delta = new Int16Array(buffer);
              delta && this.#conversation._process(event, data, delta);
              delta && this.#session.player.add16BitPCM(delta, data.item.id);
            }
            #onSpeechStarted(event, data) {
              this.#session.player.interrupt();
              this.#conversation._process(event, data);
            }
            process(event, data) {
              switch (event) {
                case 'conversation.item.created':
                  this.#conversation._process(event, data);
                  break;
                case 'conversation.item.audio.delta':
                  this.#onItemAudioDelta(event, data);
                  break;
                case 'user.speech.started':
                  this.#onSpeechStarted(event, data);
                  break;
              }
            }
          }
          exports.ActiveConversation = ActiveConversation;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4147255333,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClientSessionBase = void 0;
          var _events = require("@beyond-js/events/events");
          var _vad = require("./vad");
          var _activeConversation = require("./active-conversation");
          var _recorder = require("./recorder");
          var _player = require("@aimpact/agents-api/realtime/audio/player");
          var _router = require("./router");
          /*bundle*/
          class ClientSessionBase extends _events.Events {
            #conversation;
            get conversation() {
              return this.#conversation;
            }
            #router;
            get router() {
              return this.#router;
            }
            /**
             * Voice Audio Detection
             */
            #vad;
            get vad() {
              return this.#vad;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #player;
            get player() {
              return this.#player;
            }
            get valid() {
              return !this.#recorder.error && !this.#player.error;
            }
            #listeners = {
              listen: this.listen.bind(this)
            };
            constructor(agent, session, settings) {
              super();
              this.#vad = new _vad.VoiceAudioDetection(this, settings.vad);
              this.#conversation = new _activeConversation.ActiveConversation(this);
              this.#player = new _player.StreamPlayer({
                samplerate: 24000
              });
              this.#recorder = new _recorder.Recorder();
              this.#router = new _router.Router(this, agent, session);
            }
            async connect() {
              this.#router.initialise();
              await this.#player.connect();
              this.#recorder.on('chunk', this.#listeners.listen);
              return true;
            }
            async close() {
              this.#router.release();
              this.#recorder.stop();
              this.#recorder.off('chunk', this.#listeners.listen);
              this.#player.disconnect();
            }
          }
          exports.ClientSessionBase = ClientSessionBase;
        }
      });

      /**************************
      INTERNAL MODULE: ./recorder
      **************************/

      ims.set('./recorder', {
        hash: 1714002639,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          class Recorder extends _core.Events {
            #device;
            get device() {
              return this.#device;
            }
            set device(device) {
              if (this.#device === device) return;
              if (this.#device && this.status !== 'stopped') {
                throw `Recorder is actually in "${this.status}" state. Stop it before changing the device`;
              }
              this.#device = device;
            }
            get status() {
              return this.#device?.recorder?.status;
            }
            get error() {
              return this.#device?.recorder?.error;
            }
            #onchunk = data => {
              if (!data) return;
              this.trigger('chunk', data);
            };
            async record() {
              const device = this.#device;
              if (!device) throw new Error(`Device hasn't been selected`);
              const config = {
                samplerate: 24000,
                chunks: {
                  size: 8192
                },
                debug: false
              };
              await device.record(config);
              if (device.recorder.error) {
                console.log('Recorder Error:', device.recorder.error);
                return;
              }
              device.recorder.on('chunk', this.#onchunk);
            }
            async pause() {
              const device = this.#device;
              if (!device) throw new Error(`Device hasn't been selected`);
              device.recorder.off('chunk', this.#onchunk);
              await device.recorder.pause();
            }
            async stop() {
              const device = this.#device;
              if (!device) return;
              device.recorder.off('chunk', this.#onchunk);
              if (['stopped', 'stopping', 'error'].includes(device.recorder?.status)) return;
              await device.recorder.stop();
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /************************
      INTERNAL MODULE: ./router
      ************************/

      ims.set('./router', {
        hash: 4197830608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Router = void 0;
          var EventSource;
          (function (EventSource) {
            EventSource[EventSource["AGENT"] = 0] = "AGENT";
            EventSource[EventSource["SESSION"] = 1] = "SESSION";
          })(EventSource || (EventSource = {}));
          var EventDestination;
          (function (EventDestination) {
            EventDestination[EventDestination["CONVERSATION"] = 0] = "CONVERSATION";
            EventDestination[EventDestination["CLIENT"] = 1] = "CLIENT";
          })(EventDestination || (EventDestination = {}));
          /**
           * The router routes the events from the agent (or the session of the agent), to
           * the client, or the conversation of the client.
           */
          class Router {
            #client;
            #agent;
            #session;
            /**
             * By default:
             * - The events received from the session (EventSource.SESSION) are routed to
             * the client, and the events.
             * - The events received from the agent are routed to active conversation.
             */
            #events = new Map([['open', {
              source: EventSource.SESSION,
              name: 'session.open'
            }], ['close', {
              source: EventSource.SESSION,
              name: 'session.close'
            }], ['session.ready', {
              source: EventSource.AGENT,
              destination: EventDestination.CLIENT
            }], ['session.created', {
              source: EventSource.AGENT,
              destination: EventDestination.CLIENT
            }], ['conversation.item.created', {
              source: EventSource.AGENT
            }], ['conversation.item.audio.delta', {
              source: EventSource.AGENT
            }], ['user.speech.started', {
              source: EventSource.AGENT
            }]]);
            #listeners = new Map();
            #initialised = false;
            get initialised() {
              return this.#initialised;
            }
            constructor(client, agent, session) {
              this.#client = client;
              this.#agent = agent;
              this.#session = session;
            }
            initialise() {
              if (this.#initialised) return;
              this.#initialised = true;
              this.#events.forEach((specs, event) => {
                const listener = data => {
                  const destination = (() => {
                    if (specs.destination !== void 0) return specs.destination;
                    // As specs.destination is not set, set the default
                    return specs.source === EventSource.SESSION ? EventDestination.CLIENT : EventDestination.CONVERSATION;
                  })();
                  // The event name can be renamed when triggered
                  const renamed = specs.name ? specs.name : event;
                  if (destination === EventDestination.CLIENT) {
                    this.#client.trigger(renamed, data);
                  } else if (destination === EventDestination.CONVERSATION) {
                    this.#client.conversation.process(renamed, data);
                  }
                };
                this.#listeners.set(event, listener);
                specs.source === EventSource.SESSION && this.#session.on(event, listener);
                specs.source === EventSource.AGENT && this.#agent.on(event, listener);
              });
            }
            release() {
              if (!this.#initialised) throw new Error(`Router hasn't been initialised`);
              this.#initialised = false;
              this.#events.forEach((specs, event) => {
                const listener = this.#listeners.get(event);
                specs.source === EventSource.SESSION && this.#session.off(event, listener);
                specs.source === EventSource.AGENT && this.#agent.off(event, listener);
              });
            }
          }
          exports.Router = Router;
        }
      });

      /*********************
      INTERNAL MODULE: ./vad
      *********************/

      ims.set('./vad', {
        hash: 963292677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VoiceAudioDetection = void 0;
          class VoiceAudioDetection {
            #session;
            #value;
            get activated() {
              return !!this.#value;
            }
            constructor(session, value) {
              this.#session = session;
              this.#value = value;
            }
            async fetch() {}
            /**
             * Switch between Manual <> VAD mode for communication
             */
            async active(value) {
              const {
                recorder
              } = this.#session;
              !value && recorder.status === 'recording' && (await recorder.pause());
              // agent.updateSession({
              // 	turn_detection: value === 'none' ? null : { type: 'server_vad' }
              // });
              // if (value === 'server_vad' && agent.connected) {
              // 	await recorder.record(data => client.appendInputAudio(data.mono));
              // }
            }
          }
          exports.VoiceAudioDetection = VoiceAudioDetection;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./active-conversation",
        "from": "ActiveConversation",
        "name": "ActiveConversation"
      }, {
        "im": "./index",
        "from": "ClientSessionBase",
        "name": "ClientSessionBase"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActiveConversation') && _export("ActiveConversation", ActiveConversation = require ? require('./active-conversation').ActiveConversation : value);
        (require || prop === 'ClientSessionBase') && _export("ClientSessionBase", ClientSessionBase = require ? require('./index').ClientSessionBase : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXRpbHMiLCJyZXF1aXJlIiwiQWN0aXZlQ29udmVyc2F0aW9uIiwic2Vzc2lvbiIsImNvbnZlcnNhdGlvbiIsImNvbnN0cnVjdG9yIiwic2V0Iiwib25JdGVtQXVkaW9EZWx0YSIsIiNvbkl0ZW1BdWRpb0RlbHRhIiwiZXZlbnQiLCJkYXRhIiwiYnVmZmVyIiwiUmVhbHRpbWVVdGlscyIsImJhc2U2NFRvQXJyYXlCdWZmZXIiLCJkZWx0YSIsIkludDE2QXJyYXkiLCJfcHJvY2VzcyIsInBsYXllciIsImFkZDE2Qml0UENNIiwiaXRlbSIsImlkIiwib25TcGVlY2hTdGFydGVkIiwiI29uU3BlZWNoU3RhcnRlZCIsImludGVycnVwdCIsInByb2Nlc3MiLCJleHBvcnRzIiwiX2V2ZW50cyIsIl92YWQiLCJfYWN0aXZlQ29udmVyc2F0aW9uIiwiX3JlY29yZGVyIiwiX3BsYXllciIsIl9yb3V0ZXIiLCJDbGllbnRTZXNzaW9uQmFzZSIsIkV2ZW50cyIsInJvdXRlciIsInZhZCIsInJlY29yZGVyIiwidmFsaWQiLCJlcnJvciIsImxpc3RlbmVycyIsImxpc3RlbiIsImJpbmQiLCJhZ2VudCIsInNldHRpbmdzIiwiVm9pY2VBdWRpb0RldGVjdGlvbiIsIlN0cmVhbVBsYXllciIsInNhbXBsZXJhdGUiLCJSZWNvcmRlciIsIlJvdXRlciIsImNvbm5lY3QiLCJpbml0aWFsaXNlIiwib24iLCJjbG9zZSIsInJlbGVhc2UiLCJzdG9wIiwib2ZmIiwiZGlzY29ubmVjdCIsIl9jb3JlIiwiZGV2aWNlIiwic3RhdHVzIiwib25jaHVuayIsInRyaWdnZXIiLCJyZWNvcmQiLCJFcnJvciIsImNvbmZpZyIsImNodW5rcyIsInNpemUiLCJkZWJ1ZyIsImNvbnNvbGUiLCJsb2ciLCJwYXVzZSIsImluY2x1ZGVzIiwiRXZlbnRTb3VyY2UiLCJFdmVudERlc3RpbmF0aW9uIiwiY2xpZW50IiwiZXZlbnRzIiwiTWFwIiwic291cmNlIiwiU0VTU0lPTiIsIm5hbWUiLCJBR0VOVCIsImRlc3RpbmF0aW9uIiwiQ0xJRU5UIiwiaW5pdGlhbGlzZWQiLCJmb3JFYWNoIiwic3BlY3MiLCJsaXN0ZW5lciIsIkNPTlZFUlNBVElPTiIsInJlbmFtZWQiLCJnZXQiLCJ2YWx1ZSIsImFjdGl2YXRlZCIsImZldGNoIiwiYWN0aXZlIl0sInNvdXJjZXMiOlsiL2FjdGl2ZS1jb252ZXJzYXRpb24udHMiLCIvaW5kZXgudHMiLCIvcmVjb3JkZXIudHMiLCIvcm91dGVyLnRzIiwiL3ZhZC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBT0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxNQUFPQyxrQkFBa0I7WUFDekMsQ0FBQUMsT0FBUTtZQUNSLENBQUFDLFlBQWE7WUFFYkMsWUFBWUYsT0FBMEI7Y0FDckMsSUFBSSxDQUFDLENBQUFBLE9BQVEsR0FBR0EsT0FBTztZQUN4QjtZQUVBLE1BQU1HLEdBQUdBLENBQUNGLFlBQTBCO2NBQ25DLElBQUksQ0FBQyxDQUFBQSxZQUFhLEdBQUdBLFlBQVk7WUFDbEM7WUFFQSxDQUFBRyxnQkFBaUJDLENBQUNDLEtBQXNDLEVBQUVDLElBQStCO2NBQ3hGLE1BQU1DLE1BQU0sR0FBR1gsTUFBQSxDQUFBWSxhQUFhLENBQUNDLG1CQUFtQixDQUFDSCxJQUFJLENBQUNJLEtBQUssQ0FBQztjQUM1RCxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsVUFBVSxDQUFDSixNQUFNLENBQUM7Y0FFcENHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQVYsWUFBYSxDQUFDWSxRQUFRLENBQUNQLEtBQUssRUFBRUMsSUFBSSxFQUFFSSxLQUFLLENBQUM7Y0FDeERBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQVgsT0FBUSxDQUFDYyxNQUFNLENBQUNDLFdBQVcsQ0FBQ0osS0FBSyxFQUFFSixJQUFJLENBQUNTLElBQUksQ0FBQ0Ms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