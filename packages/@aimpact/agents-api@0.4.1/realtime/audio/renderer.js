System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, AudioRenderer, __beyond_pkg, hmr;
  _export("AudioRenderer", void 0);
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/renderer"
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
        hash: 1072960798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioRenderer = void 0;
          var _normalizeArray = require("./normalize-array");
          /*bundle*/
          const AudioRenderer = exports.AudioRenderer = {
            /**
             * Renders a point-in-time snapshot of an audio sample, usually frequency values
             * @param canvas
             * @param ctx
             * @param data
             * @param color
             * @param pointCount number of bars to render
             * @param barWidth width of bars in px
             * @param barSpacing spacing between bars in px
             * @param center vertically center the bars
             */
            drawBars: (canvas, ctx, data, color, pointCount = 0, barWidth = 0, barSpacing = 0, center = false) => {
              pointCount = Math.floor(Math.min(pointCount, (canvas.width - barSpacing) / (Math.max(barWidth, 1) + barSpacing)));
              if (!pointCount) {
                pointCount = Math.floor((canvas.width - barSpacing) / (Math.max(barWidth, 1) + barSpacing));
              }
              if (!barWidth) {
                barWidth = (canvas.width - barSpacing) / pointCount - barSpacing;
              }
              const points = (0, _normalizeArray.default)(data, pointCount, true);
              for (let i = 0; i < pointCount; i++) {
                const amplitude = Math.abs(points[i]);
                const height = Math.max(1, amplitude * canvas.height);
                const x = barSpacing + i * (barWidth + barSpacing);
                const y = center ? (canvas.height - height) / 2 : canvas.height - height;
                ctx.fillStyle = color;
                ctx.fillRect(x, y, barWidth, height);
              }
            }
          };
        }
      });

      /*********************************
      INTERNAL MODULE: ./normalize-array
      *********************************/

      ims.set('./normalize-array', {
        hash: 1576470418,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          const dataMap = new WeakMap();
          /**
           * Normalizes a Float32Array to Array(m): We use this to draw amplitudes on a graph
           * If we're rendering the same audio data, then we'll often be using
           * the same (data, m, downsamplePeaks) triplets so we give option to memoize
           */
          var _default = (data, m, downsamplePeaks = false, memoize = false) => {
            let cache, mKey, dKey;
            if (memoize) {
              mKey = m.toString();
              dKey = downsamplePeaks.toString();
              cache = dataMap.has(data) ? dataMap.get(data) : {};
              dataMap.set(data, cache);
              cache[mKey] = cache[mKey] || {};
              if (cache[mKey][dKey]) {
                return cache[mKey][dKey];
              }
            }
            const n = data.length;
            const result = new Array(m);
            if (m <= n) {
              // Downsampling
              result.fill(0);
              const count = new Array(m).fill(0);
              for (let i = 0; i < n; i++) {
                const index = Math.floor(i * (m / n));
                if (downsamplePeaks) {
                  // take highest result in the set
                  result[index] = Math.max(result[index], Math.abs(data[i]));
                } else {
                  result[index] += Math.abs(data[i]);
                }
                count[index]++;
              }
              if (!downsamplePeaks) {
                for (let i = 0; i < result.length; i++) {
                  result[i] = result[i] / count[i];
                }
              }
            } else {
              for (let i = 0; i < m; i++) {
                const index = i * (n - 1) / (m - 1);
                const low = Math.floor(index);
                const high = Math.ceil(index);
                const t = index - low;
                if (high >= n) {
                  result[i] = data[n - 1];
                } else {
                  result[i] = data[low] * (1 - t) + data[high] * t;
                }
              }
            }
            if (memoize) {
              cache[mKey][dKey] = result;
            }
            return result;
          };
          exports.default = _default;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AudioRenderer",
        "name": "AudioRenderer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioRenderer') && _export("AudioRenderer", AudioRenderer = require ? require('./index').AudioRenderer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbm9ybWFsaXplQXJyYXkiLCJyZXF1aXJlIiwiQXVkaW9SZW5kZXJlciIsImV4cG9ydHMiLCJkcmF3QmFycyIsImNhbnZhcyIsImN0eCIsImRhdGEiLCJjb2xvciIsInBvaW50Q291bnQiLCJiYXJXaWR0aCIsImJhclNwYWNpbmciLCJjZW50ZXIiLCJNYXRoIiwiZmxvb3IiLCJtaW4iLCJ3aWR0aCIsIm1heCIsInBvaW50cyIsImRlZmF1bHQiLCJpIiwiYW1wbGl0dWRlIiwiYWJzIiwiaGVpZ2h0IiwieCIsInkiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRhdGFNYXAiLCJXZWFrTWFwIiwiX2RlZmF1bHQiLCJtIiwiZG93bnNhbXBsZVBlYWtzIiwibWVtb2l6ZSIsImNhY2hlIiwibUtleSIsImRLZXkiLCJ0b1N0cmluZyIsImhhcyIsImdldCIsInNldCIsIm4iLCJsZW5ndGgiLCJyZXN1bHQiLCJBcnJheSIsImZpbGwiLCJjb3VudCIsImluZGV4IiwibG93IiwiaGlnaCIsImNlaWwiLCJ0Il0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL25vcm1hbGl6ZS1hcnJheS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLGVBQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVcsTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBRztZQUN2Qzs7Ozs7Ozs7Ozs7WUFXQUUsUUFBUSxFQUFFQSxDQUNUQyxNQUF5QixFQUN6QkMsR0FBNkIsRUFDN0JDLElBQWtCLEVBQ2xCQyxLQUFhLEVBQ2JDLFVBQUEsR0FBcUIsQ0FBQyxFQUN0QkMsUUFBQSxHQUFtQixDQUFDLEVBQ3BCQyxVQUFBLEdBQXFCLENBQUMsRUFDdEJDLE1BQUEsR0FBa0IsS0FBSyxLQUNwQjtjQUNISCxVQUFVLEdBQUdJLElBQUksQ0FBQ0MsS0FBSyxDQUN0QkQsSUFBSSxDQUFD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