System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/audio/player/worklet/bridge", "@aimpact/agents-api@0.4.1/realtime/audio/player/analyzer"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, StreamPlayer, __beyond_pkg, hmr;
  _export("StreamPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeAudioPlayerWorkletBridge) {
      dependency_1 = _aimpactAgentsApi041RealtimeAudioPlayerWorkletBridge;
    }, function (_aimpactAgentsApi041RealtimeAudioPlayerAnalyzer) {
      dependency_2 = _aimpactAgentsApi041RealtimeAudioPlayerAnalyzer;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/player"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/audio/player/worklet/bridge', dependency_1], ['@aimpact/agents-api/realtime/audio/player/analyzer', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1932622764,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StreamPlayer = void 0;
          var _bridge = require("@aimpact/agents-api/realtime/audio/player/worklet/bridge");
          var _analyzer = require("@aimpact/agents-api/realtime/audio/player/analyzer");
          /*bundle*/ /**
                      * Plays audio streams received in raw PCM16 chunks from the browser
                      */
          class StreamPlayer {
            #context;
            #stream;
            #analyzer;
            #samplerate;
            #trackSampleOffsets = {};
            #interruptedTrackIds = {};
            #error;
            get error() {
              return this.#error;
            }
            constructor({
              samplerate = 44100
            } = {}) {
              this.#samplerate = samplerate;
            }
            /**
             * Connects the audio context and enables output to speakers
             * @returns
             */
            async connect() {
              const context = this.#context = new AudioContext({
                sampleRate: this.#samplerate
              });
              context.state === 'suspended' && (await context.resume());
              // Create an AudioWorkletNode for processing audio data
              const worklet = this.#stream = new _bridge.StreamWorkletBridge(context);
              await worklet.setup();
              if (worklet.error) {
                this.#error = worklet.error;
                return;
              }
              const analyzer = context.createAnalyser();
              analyzer.fftSize = 8192;
              analyzer.smoothingTimeConstant = 0.1;
              this.#analyzer = analyzer;
            }
            /**
             * @TODO: Disconnect player
             */
            disconnect() {}
            /**
             * Gets the current frequency domain data from the playing track
             */
            getFrequencies(analysisType = 'frequency', minDecibels = -100, maxDecibels = -30) {
              if (!this.#analyzer) throw new Error('Not connected, please call .connect() first');
              return _analyzer.AudioAnalyzer.getFrequencies(this.#analyzer, this.#samplerate, null, analysisType, minDecibels, maxDecibels);
            }
            #start() {
              this.#stream.create();
              this.#stream.connect(this.#context.destination);
              this.#stream.on('stop', this.#onstop);
              this.#stream.on('offset', this.#onoffset);
              this.#analyzer.disconnect();
              this.#stream.connect(this.#analyzer);
            }
            #onstop = () => {
              this.#stream.off('stop', this.#onstop);
              this.#stream.off('offset', this.#onoffset);
              this.#stream.disconnect();
            };
            #onoffset = data => {
              const {
                requestId,
                trackId,
                offset
              } = data;
              const currentTime = offset / this.#samplerate;
              this.#trackSampleOffsets[requestId] = {
                trackId,
                offset,
                currentTime
              };
            };
            /**
             * Adds 16BitPCM data to the currently playing audio stream
             * You can add chunks beyond the current play point and they will be queued for play
             */
            add16BitPCM(arrayBuffer, trackId = 'default') {
              if (this.#error) {
                throw new Error(`Cannot play audio as player is in an invalid state. Check the 'error' property.`);
              }
              if (!this.#stream) throw new Error(`Stream player not connected`);
              if (typeof trackId !== 'string') throw new Error(`trackId must be a string`);
              if (this.#interruptedTrackIds[trackId]) return;
              !this.#stream.node && this.#start();
              const buffer = (() => {
                if (arrayBuffer instanceof Int16Array) return arrayBuffer;
                if (arrayBuffer instanceof ArrayBuffer) return new Int16Array(arrayBuffer);
                throw new Error(`argument must be Int16Array or ArrayBuffer`);
              })();
              this.#stream.dispatch('write', {
                buffer,
                trackId
              });
              return buffer;
            }
            /**
             * Gets the offset (sample count) of the currently playing stream
             */
            async getTrackSampleOffset(interrupt = false) {
              if (!this.#stream.node) return null;
              const requestId = crypto.randomUUID();
              this.#stream.dispatch(interrupt ? 'interrupt' : 'offset', {
                requestId
              });
              let trackSampleOffset;
              while (!trackSampleOffset) {
                trackSampleOffset = this.#trackSampleOffsets[requestId];
                await new Promise(resolve => setTimeout(() => resolve(), 1));
              }
              const {
                trackId
              } = trackSampleOffset;
              interrupt && trackId && (this.#interruptedTrackIds[trackId] = true);
              return trackSampleOffset;
            }
            /**
             * Strips the current stream and returns the sample offset of the audio
             */
            async interrupt() {
              return this.getTrackSampleOffset(true);
            }
          }
          exports.StreamPlayer = StreamPlayer;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "StreamPlayer",
        "name": "StreamPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'StreamPlayer') && _export("StreamPlayer", StreamPlayer = require ? require('./index').StreamPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnJpZGdlIiwicmVxdWlyZSIsIl9hbmFseXplciIsIlN0cmVhbVBsYXllciIsImNvbnRleHQiLCJzdHJlYW0iLCJhbmFseXplciIsInNhbXBsZXJhdGUiLCJ0cmFja1NhbXBsZU9mZnNldHMiLCJpbnRlcnJ1cHRlZFRyYWNrSWRzIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsImNvbm5lY3QiLCJBdWRpb0NvbnRleHQiLCJzYW1wbGVSYXRlIiwic3RhdGUiLCJyZXN1bWUiLCJ3b3JrbGV0IiwiU3RyZWFtV29ya2xldEJyaWRnZSIsInNldHVwIiwiY3JlYXRlQW5hbHlzZXIiLCJmZnRTaXplIiwic21vb3RoaW5nVGltZUNvbnN0YW50IiwiZGlzY29ubmVjdCIsImdldEZyZXF1ZW5jaWVzIiwiYW5hbHlzaXNUeXBlIiwibWluRGVjaWJlbHMiLCJtYXhEZWNpYmVscyIsIkVycm9yIiwiQXVkaW9BbmFseXplciIsInN0YXJ0IiwiI3N0YXJ0IiwiY3JlYXRlIiwiZGVzdGluYXRpb24iLCJvbiIsIm9uc3RvcCIsIm9ub2Zmc2V0IiwiI29uc3RvcCIsIm9mZiIsImRhdGEiLCJyZXF1ZXN0SWQiLCJ0cmFja0lkIiwib2Zmc2V0IiwiY3VycmVudFRpbWUiLCJhZGQxNkJpdFBDTSIsImFycmF5QnVmZmVyIiwibm9kZSIsImJ1ZmZlciIsIkludDE2QXJyYXkiLCJBcnJheUJ1ZmZlciIsImRpc3BhdGNoIiwiZ2V0VHJhY2tTYW1wbGVPZmZzZXQiLCJpbnRlcnJ1cHQiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwidHJhY2tTYW1wbGVPZmZzZXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFB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