System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/audio/packer", "@beyond-js/events@0.0.7/events", "@beyond-js/kernel@0.1.12/core", "@aimpact/agents-api@0.4.1/realtime/audio/recorder/worklet/bridge"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, IDevice, devices, IRecorderConfig, Recorder, __beyond_pkg, hmr;
  _export({
    IDevice: void 0,
    devices: void 0,
    IRecorderConfig: void 0,
    Recorder: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeAudioPacker) {
      dependency_1 = _aimpactAgentsApi041RealtimeAudioPacker;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorderWorkletBridge) {
      dependency_4 = _aimpactAgentsApi041RealtimeAudioRecorderWorkletBridge;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/recorder"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/audio/packer', dependency_1], ['@beyond-js/events/events', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@aimpact/agents-api/realtime/audio/recorder/worklet/bridge', dependency_4]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./chunks
      ************************/
      ims.set('./chunks', {
        hash: 2640714357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecorderChunks = void 0;
          var _packer = require("@aimpact/agents-api/realtime/audio/packer");
          class RecorderChunks {
            #buffer = {
              raw: new ArrayBuffer(0),
              mono: new ArrayBuffer(0)
            };
            #size;
            constructor(config) {
              this.#size = config?.size ?? 8192;
            }
            process({
              raw,
              mono
            }) {
              if (!this.#size) return {
                raw,
                mono
              };
              const buffer = this.#buffer;
              this.#buffer = {
                raw: _packer.WavPacker.mergeBuffers(buffer.raw, raw),
                mono: _packer.WavPacker.mergeBuffers(buffer.mono, mono)
              };
              if (this.#buffer.mono.byteLength >= this.#size) {
                const buffer = this.#buffer;
                this.#buffer = {
                  raw: new ArrayBuffer(0),
                  mono: new ArrayBuffer(0)
                };
                return buffer;
              }
            }
            pause() {
              this.#buffer.raw.byteLength && this.process(this.#buffer);
            }
          }
          exports.RecorderChunks = RecorderChunks;
        }
      });

      /************************
      INTERNAL MODULE: ./device
      ************************/

      ims.set('./device', {
        hash: 1032545960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Device = void 0;
          var _recorder = require("./recorder");
          class Device {
            #id;
            get id() {
              return this.#id;
            }
            #label;
            get label() {
              return this.#label;
            }
            #groupId;
            get groupId() {
              return this.#groupId;
            }
            #default;
            get default() {
              return this.#default;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            constructor(device) {
              this.#id = device.deviceId;
              this.#label = device.label;
              this.#default = !!device.default;
              this.#groupId = device.groupId;
            }
            async record(config) {
              !this.#recorder && (this.#recorder = new _recorder.Recorder(this, config));
              await this.#recorder.record();
            }
            async pause() {
              if (!this.#recorder) throw new Error('Recorder has not been initialized');
              await this.#recorder.pause();
            }
            async stop() {
              if (!this.#recorder) throw new Error('Recorder has not been initialized');
              await this.#recorder.stop();
            }
          }
          exports.Device = Device;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2424296560,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.devices = void 0;
          var _permission = require("./permission");
          var _device = require("./device");
          /*bundle*/
          const devices = exports.devices = new class Devices extends Map {
            #available = false;
            get available() {
              return this.#available;
            }
            get default() {
              const devices = [...this.values()];
              const def = devices.find(device => device.default);
              return def ? def : devices[0];
            }
            constructor() {
              super();
              if (!navigator.mediaDevices || !('getUserMedia' in navigator.mediaDevices)) {
                this.#available = false;
                return;
              }
              navigator.mediaDevices.addEventListener('devicechange', async () => await this.prepare());
            }
            async prepare() {
              await _permission.permissions.request();
              if (_permission.permissions.state !== 'granted') return false;
              const devices = await (async () => {
                const devices = await navigator.mediaDevices.enumerateDevices();
                // The default device comes duplicated with another device in the same group
                // "Default - Internal Microphone (Built-in)" / "Internal Microphone (Built-in)"
                const def = devices.find(device => device.deviceId === 'default');
                // Only take the audioinputs devices and not the default device,
                // as we need to take the other device in the same group that the default device is
                const audioinputs = devices.filter(device => device.kind === 'audioinput' && device !== def);
                // Search for the other device in the same group as the default device
                // (this is going to be the real default device)
                const other = audioinputs.find(device => device.groupId === def.groupId);
                const replacement = other ? other : def;
                replacement.default = true;
                audioinputs.unshift(replacement);
                return audioinputs;
              })();
              devices.forEach(item => {
                const device = new _device.Device(item);
                this.set(item.deviceId, device);
              });
            }
          }();
        }
      });

      /****************************
      INTERNAL MODULE: ./permission
      ****************************/

      ims.set('./permission', {
        hash: 3084074630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.permissions = void 0;
          var _events = require("@beyond-js/events/events");
          var _core = require("@beyond-js/kernel/core");
          const permissions = exports.permissions = new class MediaPermissions extends _events.Events {
            #ready;
            get ready() {
              if (this.#ready) return this.#ready;
              this.#ready = new _core.PendingPromise();
              // In some versions of TypeScript, the "microphone" permission is not
              // included by default in the allowed list of permission names.
              const name = 'microphone';
              const permission = navigator.permissions?.query({
                name
              });
              if (!(permission instanceof Promise)) {
                this.#ready.resolve();
                return;
              }
              permission.then(permission => {
                this.#permission = permission;
                permission.onchange = this.#onchange.bind(this);
                this.#ready.resolve();
              }).catch(error => {
                this.#ready.resolve();
              });
              return this.#ready;
            }
            #permission; // Actually not available in safari
            #state;
            get state() {
              return this.#state;
            }
            #error;
            get error() {
              return this.#error;
            }
            #set(state) {
              state !== this.#state && (this.#state = state) && this.trigger('change');
            }
            /**
             * Not available in Safari
             */
            #onchange(status) {
              this.#set(status.state);
            }
            async request() {
              await this.#ready;
              try {
                const stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                if (!stream) return this.#set('denied');
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                return this.#set('granted');
              } catch (error) {
                this.#error = error;
                return this.#set('denied');
              }
            }
            release() {
              if (this.#permission) this.#permission.onchange = void 0;
            }
          }();
        }
      });

      /**************************
      INTERNAL MODULE: ./recorder
      **************************/

      ims.set('./recorder', {
        hash: 1741352668,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _bridge = require("@aimpact/agents-api/realtime/audio/recorder/worklet/bridge");
          var _events = require("@beyond-js/events/events");
          var _core = require("@beyond-js/kernel/core");
          var _chunks = require("./chunks");
          /*bundle*/ /**
                      * Records live stream of user audio as PCM16 "audio/wav" data
                      */
          class Recorder extends _events.Events {
            #worklet;
            #chunks;
            #device;
            get device() {
              return this.#device;
            }
            #config;
            get config() {
              return this.#config;
            }
            #status = 'stopped';
            get status() {
              return this.#status;
            }
            #error;
            get error() {
              return this.#error;
            }
            #ready;
            get ready() {
              if (this.#ready) return this.#ready;
              this.#ready = new _core.PendingPromise();
              this.#setup().then(() => this.#ready.resolve()).catch(error => {
                this.#error = error;
                this.#ready.resolve();
              });
              return this.#ready;
            }
            #context;
            constructor(device, config) {
              super();
              this.#device = device;
              this.#config = config;
              this.#config.samplerate = this.#config.samplerate ?? 44100;
              this.#chunks = new _chunks.RecorderChunks(config.chunks);
            }
            /**
             * Do not call it directly, access the .ready property instead
             * @returns
             */
            async #setup() {
              const context = {};
              try {
                const config = {
                  audio: {
                    deviceId: {
                      exact: this.#device.id
                    }
                  }
                };
                context.stream = await navigator.mediaDevices.getUserMedia(config);
              } catch (error) {
                this.#error = error;
                return;
              }
              // Set up AudioContext and connect the audio stream source
              context.context = new AudioContext({
                sampleRate: this.#config.samplerate
              });
              context.media = context.context.createMediaStreamSource(context.stream);
              // Create an AudioWorkletNode for processing audio data
              const worklet = this.#worklet = new _bridge.RecorderWorkletBridge(context.context);
              await worklet.setup();
              if (worklet.error) {
                this.#error = worklet.error;
                return;
              }
              worklet.create();
              const node = context.media.connect(worklet.node);
              const analyser = context.context.createAnalyser();
              analyser.fftSize = 8192;
              analyser.smoothingTimeConstant = 0.1;
              node.connect(analyser);
              if (this.#config.debug) {
                console.warn(`Warning: Output to speakers may affect sound quality, ` + `especially due to system audio feedback preventative measures. Use only for debugging`);
                analyser.connect(context.context.destination);
              }
              // Store references for future use
              this.#context = context;
            }
            #onchunk = ({
              raw,
              mono
            }) => {
              const chunk = this.#chunks.process({
                raw,
                mono
              });
              this.trigger('chunk', chunk);
            };
            async record() {
              await this.ready;
              if (!this.#worklet.check()) return;
              if (!['stopped', 'paused'].includes(this.#status)) {
                throw new Error(`Cannot start recording as it is not stopped or paused`);
              }
              this.#status = 'starting';
              try {
                const config = this.#config;
                await this.#worklet.dispatch('record', {
                  config
                });
                this.#status = 'recording';
              } catch (exc) {
                this.#status = 'stopped';
                throw exc;
              }
              this.#worklet.on('chunk', this.#onchunk);
            }
            async pause() {
              if (!this.#context) throw new Error(`Recorder not initialized`);
              if (!this.#worklet.check()) return;
              this.#worklet.off('chunk', this.#onchunk);
              this.#status = 'pausing';
              await this.#worklet.dispatch('pause');
              this.#status = 'paused';
              this.#chunks.pause();
            }
            async stop() {
              if (!this.#context) throw new Error(`Recorder not initialized`);
              if (!this.#worklet.check()) return;
              this.#worklet.off('chunk', this.#onchunk);
              this.#status = 'stopping';
              await this.#worklet.dispatch('stop');
              this.#status = 'stopped';
              // Stop all audio tracks to release the microphone
              const tracks = this.#context.stream.getTracks();
              tracks.forEach(track => track.stop());
            }
          }
          exports.Recorder = Recorder;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./device",
        "from": "IDevice",
        "name": "IDevice"
      }, {
        "im": "./index",
        "from": "devices",
        "name": "devices"
      }, {
        "im": "./recorder",
        "from": "IRecorderConfig",
        "name": "IRecorderConfig"
      }, {
        "im": "./recorder",
        "from": "Recorder",
        "name": "Recorder"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IDevice') && _export("IDevice", IDevice = require ? require('./device').IDevice : value);
        (require || prop === 'devices') && _export("devices", devices = require ? require('./index').devices : value);
        (require || prop === 'IRecorderConfig') && _export("IRecorderConfig", IRecorderConfig = require ? require('./recorder').IRecorderConfig : value);
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./recorder').Recorder : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFja2VyIiwicmVxdWlyZSIsIlJlY29yZGVyQ2h1bmtzIiwiYnVmZmVyIiwicmF3IiwiQXJyYXlCdWZmZXIiLCJtb25vIiwic2l6ZSIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJvY2VzcyIsIldhdlBhY2tlciIsIm1lcmdlQnVmZmVycyIsImJ5dGVMZW5ndGgiLCJwYXVzZSIsImV4cG9ydHMiLCJfcmVjb3JkZXIiLCJEZXZpY2UiLCJpZCIsImxhYmVsIiwiZ3JvdXBJZCIsImRlZmF1bHQiLCJyZWNvcmRlciIsImRldmljZSIsImRldmljZUlkIiwicmVjb3JkIiwiUmVjb3JkZXIiLCJFcnJvciIsInN0b3AiLCJfcGVybWlzc2lvbiIsIl9kZXZpY2UiLCJkZXZpY2VzIiwiRGV2aWNlcyIsIk1hcCIsImF2YWlsYWJsZSIsInZhbHVlcyIsImRlZiIsImZpbmQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicHJlcGFyZSIsInBlcm1pc3Npb25zIiwicmVxdWVzdCIsInN0YXRlIiwiZW51bWVyYXRlRGV2aWNlcyIsImF1ZGlvaW5wdXRzIiwiZmlsdGVyIiwia2luZCIsIm90aGVyIiwicmVwbGFjZW1lbnQiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsIml0ZW0iLCJzZXQiLCJfZXZlbnRzIiwiX2NvcmUiLCJNZWRpYVBlcm1pc3Npb25zIiwiRXZlbnRzIiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsIm5hbWUiLCJwZXJtaXNzaW9uIiwicXVlcnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJvbmNoYW5nZSIsImJpbmQiLCJjYXRjaCIsImVycm9yIiwiI3NldCIsInRyaWdnZXIiLCIjb25jaGFuZ2UiLCJzdGF0dXMiLCJzdHJlYW0iLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRyYWNrcyIsImdldFRyYWNrcyIsInRyYWNrIiwicmVsZWFzZSIsIl9icmlkZ2UiLCJfY2h1bmtzIiwid29ya2xldCIsImNodW5rcyIsInNldHVwIiwiY29udGV4dCIsInNhbXBsZXJhdGUiLCIjc2V0dXAiLCJleGFjdCIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJtZWRpYSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiUmVjb3JkZXJXb3JrbGV0QnJpZGdlIiwiY3JlYXRlIiwibm9kZSIsImNvbm5lY3QiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiZmZ0U2l6ZSIsInNtb290aGluZ1RpbWVDb25zdGFudCIsImRlYnVnIiwiY29uc29sZSIsIndhcm4iLCJkZXN0aW5hdGlvbiIsIm9uY2h1bmsiLCIjb25jaHVuayIsImNodW5rIiwiY2hlY2siLCJpbmNsdWRlcyIsImRpc3BhdGNoIiwiZXhjIiwib24iLCJvZmYiXSwic291cmNlcyI6WyIvY2h1bmtzLnRzIiwiL2RldmljZS50cyIsIi9pbmRleC50cyIsIi9wZXJtaXNzaW9uLnRzIiwiL3JlY29yZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQU1NLE1BQU9DLGNBQWM7WUFDMUIsQ0FBQUMsTUFBTyxHQUE0QztjQUFFQyxHQUFHLEVBQUUsSUFBSUMsV0FBVyxDQUFDLENBQUMsQ0FBQztjQUFFQyxJQUFJLEVBQUUsSUFBSUQsV0FBVyxDQUFDLENBQUM7WUFBQyxDQUFFO1lBQ3hHLENBQUFFLElBQUs7WUFFTEMsWUFBWUMsTUFBc0I7Y0FDakMsSUFBSSxDQUFDLENBQUFGLElBQUssR0FBR0UsTUFBTSxFQUFFRixJQUFJLElBQUksSUFBSTtZQUNsQztZQUVBRyxPQUFPQSxDQUFDO2NBQUVOLEdBQUc7Y0FBRUU7WUFBSSxDQUEyQztjQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFDLElBQUssRUFBRSxPQUFPO2dCQUFFSCxHQUFHO2dCQUFFRTtjQUFJLENBQUU7Y0FFckMsTUFBTUgsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBQSxNQUFPO2NBQzNCLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUc7Z0JBQ2RDLEdBQUcsRUFBRUosT0FBQSxDQUFBVyxTQUFTLENBQUNDLFlBQVksQ0FBQ1QsTUFBTSxDQUFDQyxHQUFHLEVBQUVBLEdBQUcsQ0FBQztnQkFDNUNFLElBQUksRUFBRU4sT0FBQSxDQUFBVyxTQUFTLENBQUNDLFlBQVksQ0FBQ1QsTUFBTSxDQUFDRyxJQUFJLEVBQUVBLElBQUk7ZUFDOUM7Y0FFRCxJQUFJLElBQUksQ0FBQyxDQUFBSCxNQUFPLENBQUNHLElBQUksQ0FBQ08sVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFBTixJQUFLLEVBQUU7Z0JBQy9DLE1BQU1KLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQUEsTUFBTztnQkFDM0IsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBRztrQkFDZEMsR0FBRyxFQUFFLElBQUlDLFdBQVcsQ0FBQyxDQUFDLENBQUM7a0JBQ3ZCQyxJQUFJLEVBQUUsSUFBSUQsV0FBVyxDQUFDLENBQUM7aUJBQ3ZCO2dCQUVELE9BQU9GLE1BQU07O1lBRWY7WUFFQVcsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBWCxNQUFPLENBQUNDLEdBQUcsQ0FBQ1MsVUFBVSxJQUFJLElBQUksQ0FBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBUCxNQUFPLENBQUM7WUFDMUQ7O1VBQ0FZLE9BQUEsQ0FBQWIsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDRCxJQUFBYyxTQUFBLEdBQUFmLE9BQUE7VUFpQk0sTUFBT2dCLE1BQU07WUFDbEIsQ0FBQUMsRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBRUEsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUFkLFlBQVllLE1BQWtCO2NBQzdCLElBQUksQ0FBQyxDQUFBTCxFQUFHLEdBQUdLLE1BQU0sQ0FBQ0MsUUFBUTtjQUMxQixJQUFJLENBQUMsQ0FBQUwsS0FBTSxHQUFHSSxNQUFNLENBQUNKLEtBQUs7Y0FDMUIsSUFBSSxDQUFDLENBQUFFLE9BQVEsR0FBRyxDQUFDLENBQUNFLE1BQU0sQ0FBQ0YsT0FBTztjQUNoQyxJQUFJLENBQUMsQ0FBQUQsT0FBUSxHQUFHRyxNQUFNLENBQUNILE9BQU87WUFDL0I7WUFFQSxNQUFNSyxNQUFNQSxDQUFDaEIsTUFBdUI7Y0FDbkMsQ0FBQyxJQUFJLENBQUMsQ0FBQWEsUUFBUyxLQUFLLElBQUksQ0FBQyxDQUFBQSxRQUFTLEdBQUcsSUFBSU4sU0FBQSxDQUFBVSxRQUFRLENBQUMsSUFBSSxFQUFFakIsTUFBTSxDQUFDLENBQUM7Y0FDaEUsTUFBTSxJQUFJLENBQUMsQ0FBQWEsUUFBUyxDQUFDRyxNQUFNLEVBQUU7WUFDOUI7WUFFQSxNQUFNWCxLQUFLQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBUSxRQUFTLEVBQUUsTUFBTSxJQUFJSyxLQUFLLENBQUMsbUNBQW1DLENBQUM7Y0FDekUsTUFBTSxJQUFJLENBQUMsQ0FBQUwsUUFBUyxDQUFDUixLQUFLLEVBQUU7WUFDN0I7WUFFQSxNQUFNYyxJQUFJQSxDQUFBO2NBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBTixRQUFTLEVBQUUsTUFBTSxJQUFJSyxLQUFLLENBQUMsbUNBQW1DLENBQUM7Y0FDekUsTUFBTSxJQUFJLENBQUMsQ0FBQUwsUUFBUyxDQUFDTSxJQUFJLEVBQUU7WUFDNUI7O1VBQ0FiLE9BQUEsQ0FBQUUsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFRCxJQUFBWSxXQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLE9BQUEsR0FBQTdCLE9BQUE7VUFHTztVQUFXLE1BQU04QixPQUFPLEdBQUFoQixPQUFBLENBQUFnQixPQUFBLEdBQUcsSUFBSyxNQUFNQyxPQUFRLFNBQVFDLEdBQW1CO1lBQy9FLENBQUFDLFNBQVUsR0FBRyxLQUFLO1lBQ2xCLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsSUFBSWIsT0FBT0EsQ0FBQTtjQUNWLE1BQU1VLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDSSxNQUFNLEVBQUUsQ0FBQztjQUNsQyxNQUFNQyxHQUFHLEdBQUdMLE9BQU8sQ0FBQ00sSUFBSSxDQUFDZCxNQUFNLElBQUlBLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDO2NBQ2xELE9BQU9lLEdBQUcsR0FBR0EsR0FBRyxHQUFHTCxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlCO1lBRUF2QixZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDOEIsU0FBUyxDQUFDQyxZQUFZLElBQUksRUFBRSxjQUFjLElBQUlELFNBQVMsQ0FBQ0MsWUFBWSxDQUFDLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxDQUFBTCxTQUFVLEdBQUcsS0FBSztnQkFDdkI7O2NBR0RJLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBWSxNQUFNLElBQUksQ0FBQ0MsT0FBTyxFQUFFLENBQUM7WUFDMUY7WUFFQSxNQUFNQSxPQUFPQSxDQUFBO2NBQ1osTUFBTVosV0FBQSxDQUFBYSxXQUFXLENBQUNDLE9BQU8sRUFBRTtjQUMzQixJQUFJZCxXQUFBLENBQUFhLFdBQVcsQ0FBQ0UsS0FBSyxLQUFLLFNBQVMsRUFBRSxPQUFPLEtBQUs7Y0FFakQsTUFBTWIsT0FBTyxHQUFpQixNQUFNLENBQUMsWUFBVztnQkFDL0MsTUFBTUEsT0FBTyxHQUFHLE1BQU1PLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDTSxnQkFBZ0IsRUFBRTtnQkFFL0Q7Z0JBQ0E7Z0JBQ0EsTUFBTVQsR0FBRyxHQUFHTCxPQUFPLENBQUNNLElBQUksQ0FBQ2QsTUFBTSxJQUFJQSxNQUFNLENBQUNDLFFBQVEsS0FBSyxTQUFTLENBQUM7Z0JBRWpFO2dCQUNBO2dCQUNBLE1BQU1zQixXQUFXLEdBQWlCZixPQUFPLENBQUNnQixNQUFNLENBQUN4QixNQUFNLElBQUlBLE1BQU0sQ0FBQ3lCLElBQUksS0FBSyxZQUFZLElBQUl6QixNQUFNLEtBQUthLEdBQUcsQ0FBQztnQkFFMUc7Z0JBQ0E7Z0JBQ0EsTUFBTWEsS0FBSyxHQUFHSCxXQUFXLENBQUNULElBQUksQ0FBQ2QsTUFBTSxJQUFJQSxNQUFNLENBQUNILE9BQU8sS0FBS2dCLEdBQUcsQ0FBQ2hCLE9BQU8sQ0FBQztnQkFDeEUsTUFBTThCLFdBQVcsR0FBR0QsS0FBSyxHQUFHQSxLQUFLLEdBQUdiLEdBQUc7Z0JBQ3RDYyxXQUEwQixDQUFDN0IsT0FBTyxHQUFHLElBQUk7Z0JBQzFDeUIsV0FBVyxDQUFDSyxPQUFPLENBQUNELFdBQVcsQ0FBQztnQkFFaEMsT0FBT0osV0FBVztjQUNuQixDQUFDLEVBQUMsQ0FBRTtjQUVKZixPQUFPLENBQUNxQixPQUFPLENBQUNDLElBQUksSUFBRztnQkFDdEIsTUFBTTlCLE1BQU0sR0FBRyxJQUFJTyxPQUFBLENBQUFiLE1BQU0sQ0FBQ29DLElBQUksQ0FBQztnQkFDL0IsSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQzdCLFFBQVEsRUFBRUQsTUFBTSxDQUFDO2NBQ2hDLENBQUMsQ0FBQztZQUNIO1dBQ0EsQ0FBQyxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pESixJQUFBZ0MsT0FBQSxHQUFBdEQsT0FBQTtVQUNBLElBQUF1RCxLQUFBLEdBQUF2RCxPQUFBO1VBSU8sTUFBTXlDLFdBQVcsR0FBQTNCLE9BQUEsQ0FBQTJCLFdBQUEsR0FBRyxJQUFLLE1BQU1lLGdCQUFpQixTQUFRRixPQUFBLENBQUFHLE1BQU07WUFDcEUsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixJQUFJLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtjQUVuQyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHLElBQUlILEtBQUEsQ0FBQUksY0FBYyxFQUFFO2NBRWxDO2NBQ0E7Y0FDQSxNQUFNQyxJQUFJLEdBQUcsWUFBOEI7Y0FFM0MsTUFBTUMsVUFBVSxHQUFHeEIsU0FBUyxDQUFDSSxXQUFXLEVBQUVxQixLQUFLLENBQUM7Z0JBQUVGO2NBQUksQ0FBRSxDQUFDO2NBQ3pELElBQUksRUFBRUMsVUFBVSxZQUFZRSxPQUFPLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sT0FBTyxFQUFFO2dCQUNyQjs7Y0FHREgsVUFBVSxDQUNSSSxJQUFJLENBQUNKLFVBQVUsSUFBRztnQkFDbEIsSUFBSSxDQUFDLENBQUFBLFVBQVcsR0FBR0EsVUFBVTtnQkFDN0JBLFVBQVUsQ0FBQ0ssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNNLE9BQU8sRUFBRTtjQUN0QixDQUFDLENBQUMsQ0FDREksS0FBSyxDQUFDQyxLQUFLLElBQUc7Z0JBQ2QsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ00sT0FBTyxFQUFFO2NBQ3RCLENBQUMsQ0FBQztjQUVILE9BQU8sSUFBSSxDQUFDLENBQUFOLEtBQU07WUFDbkI7WUFFQSxDQUFBRyxVQUFXLENBQW9CLENBQUM7WUFFaEMsQ0FBQWxCLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUEwQixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBaEIsR0FBSWlCLENBQUMzQixLQUF1QjtjQUMzQkEsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBQSxLQUFNLEtBQUssSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR0EsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDNEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN6RTtZQUVBOzs7WUFHQSxDQUFBTCxRQUFTTSxDQUFDQyxNQUF3QjtjQUNqQyxJQUFJLENBQUMsQ0FBQXBCLEdBQUksQ0FBQ29CLE1BQU0sQ0FBQzlCLEtBQUssQ0FBQztZQUN4QjtZQUVBLE1BQU1ELE9BQU9BLENBQUE7Y0FDWixNQUFNLElBQUksQ0FBQyxDQUFBZ0IsS0FBTTtjQUVqQixJQUFJO2dCQUNILE1BQU1nQixNQUFNLEdBQUcsTUFBTXJDLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDcUMsWUFBWSxDQUFDO2tCQUFFQyxLQUFLLEVBQUU7Z0JBQUksQ0FBRSxDQUFDO2dCQUN6RSxJQUFJLENBQUNGLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBckIsR0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFFdkMsTUFBTXdCLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxTQUFTLEVBQUU7Z0JBQ2pDRCxNQUFNLENBQUMxQixPQUFPLENBQUM0QixLQUFLLElBQUlBLEtBQUssQ0FBQ3BELElBQUksRUFBRSxDQUFDO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxDQUFBMEIsR0FBSSxDQUFDLFNBQVMsQ0FBQztlQUMzQixDQUFDLE9BQU9nQixLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR0EsS0FBSztnQkFDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQWhCLEdBQUksQ0FBQyxRQUFRLENBQUM7O1lBRTVCO1lBRUEyQixPQUFPQSxDQUFBO2NBQ04sSUFBSSxJQUFJLENBQUMsQ0FBQW5CLFVBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQUEsVUFBVyxDQUFDSyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3pEO1dBQ0EsQ0FBQyxDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVFSixJQUFBZSxPQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQXNELE9BQUEsR0FBQXRELE9BQUE7VUFDQSxJQUFBdUQsS0FBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUFrRixPQUFBLEdBQUFsRixPQUFBO1VBdUJPLFdBSFA7OztVQUdpQixNQUFPeUIsUUFBUyxTQUFRNkIsT0FBQSxDQUFBRyxNQUFNO1lBQzlDLENBQUEwQixPQUFRO1lBQ1IsQ0FBQUMsTUFBTztZQUVQLENBQUE5RCxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBZCxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBaUUsTUFBTyxHQUFZLFNBQVM7WUFDNUIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBSixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBWCxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLElBQUksSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBRW5DLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUcsSUFBSUgsS0FBQSxDQUFBSSxjQUFjLEVBQUU7Y0FDbEMsSUFBSSxDQUFDLENBQUEwQixLQUFNLEVBQUUsQ0FDWHBCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNNLE9BQU8sRUFBRSxDQUFDLENBQ2pDSSxLQUFLLENBQUNDLEtBQUssSUFBRztnQkFDZCxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLO2dCQUNuQixJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDTSxPQUFPLEVBQUU7Y0FDdEIsQ0FBQyxDQUFDO2NBRUgsT0FBTyxJQUFJLENBQUMsQ0FBQU4sS0FBTTtZQUNuQjtZQUNBLENBQUE0QixPQUFRO1lBRVIvRSxZQUFZZSxNQUFjLEVBQUVkLE1BQXVCO2NBQ2xELEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBYyxNQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLENBQUFkLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQUEsTUFBTyxDQUFDK0UsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFBL0UsTUFBTyxDQUFDK0UsVUFBVSxJQUFJLEtBQUs7Y0FFMUQsSUFBSSxDQUFDLENBQUFILE1BQU8sR0FBRyxJQUFJRixPQUFBLENBQUFqRixjQUFjLENBQUNPLE1BQU0sQ0FBQzRFLE1BQU0sQ0FBQztZQUNqRDtZQUVBOzs7O1lBSUEsTUFBTSxDQUFBQyxLQUFNRyxDQUFBO2NBQ1gsTUFBTUYsT0FBTyxHQUE4QixFQUFFO2NBRTdDLElBQUk7Z0JBQ0gsTUFBTTlFLE1BQU0sR0FBMkI7a0JBQUVvRSxLQUFLLEVBQUU7b0JBQUVyRCxRQUFRLEVBQUU7c0JBQUVrRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUFuRSxNQUFPLENBQUNMO29CQUFFO2tCQUFFO2dCQUFFLENBQUU7Z0JBQzFGcUUsT0FBTyxDQUFDWixNQUFNLEdBQUcsTUFBTXJDLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDcUMsWUFBWSxDQUFDbkUsTUFBTSxDQUFDO2VBQ2xFLENBQUMsT0FBTzZELEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHQSxLQUFLO2dCQUNuQjs7Y0FHRDtjQUNBaUIsT0FBTyxDQUFDQSxPQUFPLEdBQUcsSUFBSUksWUFBWSxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUFuRixNQUFPLENBQUMrRTtjQUFVLENBQUUsQ0FBQztjQUMzRUQsT0FBTyxDQUFDTSxLQUFLLEdBQUdOLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDTyx1QkFBdUIsQ0FBQ1AsT0FBTyxDQUFDWixNQUFNLENBQUM7Y0FFdkU7Y0FDQSxNQUFNUyxPQUFPLEdBQUksSUFBSSxDQUFDLENBQUFBLE9BQVEsR0FBRyxJQUFJRixPQUFBLENBQUFhLHFCQUFxQixDQUFDUixPQUFPLENBQUNBLE9BQU8sQ0FBRTtjQUU1RSxNQUFNSCxPQUFPLENBQUNFLEtBQUssRUFBRTtjQUNyQixJQUFJRixPQUFPLENBQUNkLEtBQUssRUFBRTtnQkFDbEIsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR2MsT0FBTyxDQUFDZCxLQUFLO2dCQUMzQjs7Y0FHRGMsT0FBTyxDQUFDWSxNQUFNLEVBQUU7Y0FDaEIsTUFBTUMsSUFBSSxHQUFHVixPQUFPLENBQUNNLEtBQUssQ0FBQ0ssT0FBTyxDQUFDZCxPQUFPLENBQUNhLElBQUksQ0FBQztjQUVoRCxNQUFNRSxRQUFRLEdBQUdaLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDYSxjQUFjLEVBQUU7Y0FDakRELFFBQVEsQ0FBQ0UsT0FBTyxHQUFHLElBQUk7Y0FDdkJGLFFBQVEsQ0FBQ0cscUJBQXFCLEdBQUcsR0FBRztjQUNwQ0wsSUFBSSxDQUFDQyxPQUFPLENBQUNDLFFBQVEsQ0FBQztjQUN0QixJQUFJLElBQUksQ0FBQyxDQUFBMUYsTUFBTyxDQUFDOEYsS0FBSyxFQUFFO2dCQUN2QkMsT0FBTyxDQUFDQyxJQUFJLENBQ1gsd0RBQXdELEdBQ3ZELHVGQUF1RixDQUN4RjtnQkFDRE4sUUFBUSxDQUFDRCxPQUFPLENBQUNYLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDbUIsV0FBVyxDQUFDOztjQUc5QztjQUNBLElBQUksQ0FBQyxDQUFBbkIsT0FBUSxHQUFxQkEsT0FBTztZQUMxQztZQUVBLENBQUFvQixPQUFRLEdBQUdDLENBQUM7Y0FBRXhHLEdBQUc7Y0FBRUU7WUFBSSxDQUF5QyxLQUFJO2NBQ25FLE1BQU11RyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUF4QixNQUFPLENBQUMzRSxPQUFPLENBQUM7Z0JBQUVOLEdBQUc7Z0JBQUVFO2NBQUksQ0FBRSxDQUFDO2NBQ2pELElBQUksQ0FBQ2tFLE9BQU8sQ0FBQyxPQUFPLEVBQUVxQyxLQUFLLENBQUM7WUFDN0IsQ0FBQztZQUVELE1BQU1wRixNQUFNQSxDQUFBO2NBQ1gsTUFBTSxJQUFJLENBQUNrQyxLQUFLO2NBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXlCLE9BQVEsQ0FBQzBCLEtBQUssRUFBRSxFQUFFO2NBQzVCLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBckMsTUFBTyxDQUFDLEVBQUU7Z0JBQ2xELE1BQU0sSUFBSS9DLEtBQUssQ0FBQyx1REFBdUQsQ0FBQzs7Y0FFekUsSUFBSSxDQUFDLENBQUErQyxNQUFPLEdBQUcsVUFBVTtjQUV6QixJQUFJO2dCQUNILE1BQU1qRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFBLE1BQU87Z0JBQzNCLE1BQU0sSUFBSSxDQUFDLENBQUEyRSxPQUFRLENBQUM0QixRQUFRLENBQUMsUUFBUSxFQUFFO2tCQUFFdkc7Z0JBQU0sQ0FBRSxDQUFDO2dCQUNsRCxJQUFJLENBQUMsQ0FBQWlFLE1BQU8sR0FBRyxXQUFXO2VBQzFCLENBQUMsT0FBT3VDLEdBQUcsRUFBRTtnQkFDYixJQUFJLENBQUMsQ0FBQXZDLE1BQU8sR0FBRyxTQUFTO2dCQUN4QixNQUFNdUMsR0FBRzs7Y0FHVixJQUFJLENBQUMsQ0FBQTdCLE9BQVEsQ0FBQzhCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFQLE9BQVEsQ0FBQztZQUN6QztZQUVBLE1BQU03RixLQUFLQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBeUUsT0FBUSxFQUFFLE1BQU0sSUFBSTVELEtBQUssQ0FBQywwQkFBMEIsQ0FBQztjQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF5RCxPQUFRLENBQUMwQixLQUFLLEVBQUUsRUFBRTtjQUU1QixJQUFJLENBQUMsQ0FBQTFCLE9BQVEsQ0FBQytCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFSLE9BQVEsQ0FBQztjQUV6QyxJQUFJLENBQUMsQ0FBQWpDLE1BQU8sR0FBRyxTQUFTO2NBQ3hCLE1BQU0sSUFBSSxDQUFDLENBQUFVLE9BQVEsQ0FBQzRCLFFBQVEsQ0FBQyxPQUFPLENBQUM7Y0FDckMsSUFBSSxDQUFDLENBQUF0QyxNQUFPLEdBQUcsUUFBUTtjQUV2QixJQUFJLENBQUMsQ0FBQVcsTUFBTyxDQUFDdkUsS0FBSyxFQUFFO1lBQ3JCO1lBRUEsTUFBTWMsSUFBSUEsQ0FBQTtjQUNULElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTJELE9BQVEsRUFBRSxNQUFNLElBQUk1RCxLQUFLLENBQUMsMEJBQTBCLENBQUM7Y0FDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBeUQsT0FBUSxDQUFDMEIsS0FBSyxFQUFFLEVBQUU7Y0FFNUIsSUFBSSxDQUFDLENBQUExQixPQUFRLENBQUMrQixHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBUixPQUFRLENBQUM7Y0FFekMsSUFBSSxDQUFDLENBQUFqQyxNQUFPLEdBQUcsVUFBVTtjQUN6QixNQUFNLElBQUksQ0FBQyxDQUFBVSxPQUFRLENBQUM0QixRQUFRLENBQUMsTUFBTSxDQUFDO2NBQ3BDLElBQUksQ0FBQyxDQUFBdEMsTUFBTyxHQUFHLFNBQVM7Y0FFeEI7Y0FDQSxNQUFNSSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFTLE9BQVEsQ0FBQ1osTUFBTSxDQUFDSSxTQUFTLEVBQUU7Y0FDL0NELE1BQU0sQ0FBQzFCLE9BQU8sQ0FBQzRCLEtBQUssSUFBSUEsS0FBSyxDQUFDcEQsSUFBSSxFQUFFLENBQUM7WUFDdEM7O1VBQ0FiLE9BQUEsQ0FBQVcsUUFBQSxHQUFBQSxRQUFBIiwiaWdub3JlTGlzdCI6W119