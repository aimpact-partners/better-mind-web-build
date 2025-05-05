System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, WavPacker, __beyond_pkg, hmr;
  _export("WavPacker", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/packer"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2927522518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WavPacker = void 0;
          /*bundle*/ /**
                      * Utility class for assembling PCM16 "audio/wav" data
                      */
          class WavPacker {
            /**
             * Converts Float32Array of amplitude data to ArrayBuffer in Int16Array format
             * @param float32Array - Array of float audio values
             * @returns ArrayBuffer with Int16 values
             */
            static floatTo16BitPCM(float32Array) {
              const buffer = new ArrayBuffer(float32Array.length * 2);
              const view = new DataView(buffer);
              let offset = 0;
              for (let i = 0; i < float32Array.length; i++, offset += 2) {
                let s = Math.max(-1, Math.min(1, float32Array[i]));
                view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
              }
              return buffer;
            }
            /**
             * Concatenates two ArrayBuffers
             * @param leftBuffer - First buffer to concatenate
             * @param rightBuffer - Second buffer to concatenate
             * @returns Merged ArrayBuffer
             */
            static mergeBuffers(leftBuffer, rightBuffer) {
              const tmpArray = new Uint8Array(leftBuffer.byteLength + rightBuffer.byteLength);
              tmpArray.set(new Uint8Array(leftBuffer), 0);
              tmpArray.set(new Uint8Array(rightBuffer), leftBuffer.byteLength);
              return tmpArray.buffer;
            }
            /**
             * Packs data into an Int16 format
             * @private
             * @param size - 0 = 1x Int16, 1 = 2x Int16
             * @param arg - Value to pack
             * @returns Uint8Array representing packed data
             */
            _packData(size, arg) {
              return [new Uint8Array([arg & 0xff, arg >> 8 & 0xff]), new Uint8Array([arg & 0xff, arg >> 8 & 0xff, arg >> 16 & 0xff, arg >> 24 & 0xff])][size];
            }
            /**
             * Packs audio into "audio/wav" Blob
             * @param sampleRate - Sample rate of the audio
             * @param audio - Audio object containing bitsPerSample, channels, and data
             * @returns WavPackerAudioType containing blob, url, channelCount, sampleRate, and duration
             */
            pack(sampleRate, audio) {
              if (!audio?.bitsPerSample) {
                throw new Error(`Missing "bitsPerSample"`);
              } else if (!audio?.channels) {
                throw new Error(`Missing "channels"`);
              } else if (!audio?.data) {
                throw new Error(`Missing "data"`);
              }
              const {
                bitsPerSample,
                channels,
                data
              } = audio;
              const output = [
              // Header
              'RIFF', this._packData(1, 4 + (8 + 24) /* chunk 1 length */ + (8 + 8) /* chunk 2 length */), 'WAVE',
              // chunk 1
              'fmt ', this._packData(1, 16), this._packData(0, 1), this._packData(0, channels.length), this._packData(1, sampleRate), this._packData(1, sampleRate * channels.length * bitsPerSample / 8), this._packData(0, channels.length * bitsPerSample / 8), this._packData(0, bitsPerSample),
              // chunk 2
              'data', this._packData(1, channels[0].length * channels.length * bitsPerSample / 8), data];
              const blob = new Blob(output, {
                type: 'audio/mpeg'
              });
              const url = URL.createObjectURL(blob);
              return {
                blob,
                url,
                channelCount: channels.length,
                sampleRate,
                duration: data.byteLength / (channels.length * sampleRate * 2)
              };
            }
          }
          exports.WavPacker = WavPacker;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "WavPacker",
        "name": "WavPacker"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WavPacker') && _export("WavPacker", WavPacker = require ? require('./index').WavPacker : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJXYXZQYWNrZXIiLCJmbG9hdFRvMTZCaXRQQ00iLCJmbG9hdDMyQXJyYXkiLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsImxlbmd0aCIsInZpZXciLCJEYXRhVmlldyIsIm9mZnNldCIsImkiLCJzIiwiTWF0aCIsIm1heCIsIm1pbiIsInNldEludDE2IiwibWVyZ2VCdWZmZXJzIiwibGVmdEJ1ZmZlciIsInJpZ2h0QnVmZmVyIiwidG1wQXJyYXkiLCJVaW50OEFycmF5IiwiYnl0ZUxlbmd0aCIsInNldCIsIl9wYWNrRGF0YSIsInNpemUiLCJhcmciLCJwYWNrIiwic2FtcGxlUmF0ZSIsImF1ZGlvIiwiYml0c1BlclNhbXBsZSIsIkVycm9yIiwiY2hhbm5lbHMiLCJkYXRhIiwib3V0cHV0IiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2hhbm5lbENvdW50IiwiZHVyYXRpb24iLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWNPLFdBSFA7OztVQUdpQixNQUFPQSxTQUFTO1lBQ2hDOzs7OztZQUtBLE9BQU9DLGVBQWVBLENBQUNDLFlBQTBCO2NBQ2hELE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxXQUFXLENBQUNGLFlBQVksQ0FBQ0csTUFBTSxHQUFHLENBQUMsQ0FBQztjQUN2RCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBUSxDQUFDSixNQUFNLENBQUM7Y0FDakMsSUFBSUssTUFBTSxHQUFHLENBQUM7Y0FDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1AsWUFBWSxDQUFDRyxNQUFNLEVBQUVJLENBQUMsRUFBRSxFQUFFRCxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMxRCxJQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxD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