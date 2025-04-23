System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, RealtimeUtils, __beyond_pkg, hmr;
  _export("RealtimeUtils", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/utils"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./utils
      ***********************/
      ims.set('./utils', {
        hash: 3651463802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimeUtils = void 0;
          /*bundle*/
          class RealtimeUtils {
            /**
             * Converts Float32Array of amplitude data to ArrayBuffer in Int16Array format
             *
             * @param {Float32Array} float32Array
             * @returns {ArrayBuffer}
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
             * Converts a base64 string to an ArrayBuffer
             *
             * @param {string} base64
             * @returns {ArrayBuffer}
             */
            static base64ToArrayBuffer(base64) {
              const binaryString = globalThis.atob(base64);
              const len = binaryString.length;
              const bytes = new Uint8Array(len);
              for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
              }
              return bytes.buffer;
            }
            /**
             * Converts an ArrayBuffer, Int16Array or Float32Array to a base64 string
             *
             * @param {ArrayBuffer | Int16Array | Float32Array} arrayBuffer
             * @returns {string}
             */
            static arrayBufferToBase64(arrayBuffer) {
              if (arrayBuffer instanceof Float32Array) {
                arrayBuffer = this.floatTo16BitPCM(arrayBuffer);
              } else if (arrayBuffer instanceof Int16Array) {
                arrayBuffer = arrayBuffer.buffer;
              }
              let binary = '';
              let bytes = new Uint8Array(arrayBuffer);
              const chunkSize = 0x8000; // 32KB chunk size
              for (let i = 0; i < bytes.length; i += chunkSize) {
                let chunk = bytes.subarray(i, i + chunkSize);
                binary += String.fromCharCode.apply(null, chunk);
              }
              return globalThis.btoa(binary);
            }
            /**
             * Merge two Int16Arrays from Int16Arrays or ArrayBuffers
             *
             * @param {ArrayBuffer | Int16Array} left
             * @param {ArrayBuffer | Int16Array} right
             * @returns {Int16Array}
             */
            static mergeInt16Arrays(left, right) {
              if (left instanceof ArrayBuffer) {
                left = new Int16Array(left);
              }
              if (right instanceof ArrayBuffer) {
                right = new Int16Array(right);
              }
              if (!(left instanceof Int16Array) || !(right instanceof Int16Array)) {
                throw new Error(`Both items must be Int16Array`);
              }
              const newValues = new Int16Array(left.length + right.length);
              for (let i = 0; i < left.length; i++) {
                newValues[i] = left[i];
              }
              for (let j = 0; j < right.length; j++) {
                newValues[left.length + j] = right[j];
              }
              return newValues;
            }
            /**
             * Generates an id to send with events and messages
             *
             * @param {string} prefix
             * @param {number} [length]
             * @returns {string}
             */
            static generateId(prefix, length = 21) {
              // base58; non-repeating chars
              const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
              const str = Array(length - prefix.length).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
              return `${prefix}${str}`;
            }
          }
          exports.RealtimeUtils = RealtimeUtils;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./utils",
        "from": "RealtimeUtils",
        "name": "RealtimeUtils"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RealtimeUtils') && _export("RealtimeUtils", RealtimeUtils = require ? require('./utils').RealtimeUtils : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFsdGltZVV0aWxzIiwiZmxvYXRUbzE2Qml0UENNIiwiZmxvYXQzMkFycmF5IiwiYnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJsZW5ndGgiLCJ2aWV3IiwiRGF0YVZpZXciLCJvZmZzZXQiLCJpIiwicyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzZXRJbnQxNiIsImJhc2U2NFRvQXJyYXlCdWZmZXIiLCJiYXNlNjQiLCJiaW5hcnlTdHJpbmciLCJnbG9iYWxUaGlzIiwiYXRvYiIsImxlbiIsImJ5dGVzIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwiYXJyYXlCdWZmZXIiLCJGbG9hdDMyQXJyYXkiLCJJbnQxNkFycmF5IiwiYmluYXJ5IiwiY2h1bmtTaXplIiwiY2h1bmsiLCJzdWJhcnJheSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiYnRvYSIsIm1lcmdlSW50MTZBcnJheXMiLCJsZWZ0IiwicmlnaHQiLCJFcnJvciIsIm5ld1ZhbHVlcyIsImoiLCJnZW5lcmF0ZUlkIiwicHJlZml4IiwiY2hhcnMiLCJzdHIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJmbG9vciIsInJhbmRvbSIsImpvaW4iLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVPO1VBQVUsTUFBT0EsYUFBYTtZQUNwQzs7Ozs7O1lBTUEsT0FBT0MsZUFBZUEsQ0FBQ0MsWUFBMEI7Y0FDaEQsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFdBQVcsQ0FBQ0YsWUFBWSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2NBQ3ZELE1BQU1DLElBQUksR0FBRyxJQUFJQyxRQUFRLENBQUNKLE1BQU0sQ0FBQztjQUNqQyxJQUFJSyxNQUFNLEdBQUcsQ0FBQztjQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENB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