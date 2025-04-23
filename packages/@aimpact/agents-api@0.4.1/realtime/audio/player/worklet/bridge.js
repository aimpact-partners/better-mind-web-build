System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/audio/worklet-bridge"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, IPlayerWorkletConfig, StreamWorkletBridge, __beyond_pkg, hmr;
  _export({
    IPlayerWorkletConfig: void 0,
    StreamWorkletBridge: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeAudioWorkletBridge) {
      dependency_1 = _aimpactAgentsApi041RealtimeAudioWorkletBridge;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/player/worklet/bridge"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/audio/worklet-bridge', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3555101245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StreamWorkletBridge = void 0;
          var _workletBridge = require("@aimpact/agents-api/realtime/audio/worklet-bridge");
          /*bundle*/
          class StreamWorkletBridge extends _workletBridge.WorkletBridge {
            constructor(context, timeout) {
              // super(context, 'stream_processor', './realtime/audio/player/worklet/processor/index.js', timeout);
              super(context, 'stream_processor', '/packages/@aimpact/agents-api@0.4.1/realtime/audio/player/worklet/processor/index.js', timeout);
            }
          }
          exports.StreamWorkletBridge = StreamWorkletBridge;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IPlayerWorkletConfig",
        "name": "IPlayerWorkletConfig"
      }, {
        "im": "./index",
        "from": "StreamWorkletBridge",
        "name": "StreamWorkletBridge"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IPlayerWorkletConfig') && _export("IPlayerWorkletConfig", IPlayerWorkletConfig = require ? require('./index').IPlayerWorkletConfig : value);
        (require || prop === 'StreamWorkletBridge') && _export("StreamWorkletBridge", StreamWorkletBridge = require ? require('./index').StreamWorkletBridge : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfd29ya2xldEJyaWRnZSIsInJlcXVpcmUiLCJTdHJlYW1Xb3JrbGV0QnJpZGdlIiwiV29ya2xldEJyaWRnZSIsImNvbnN0cnVjdG9yIiwiY29udGV4dCIsInRpbWVvdXQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsY0FBQSxHQUFBQyxPQUFBO1VBSU87VUFBVSxNQUFPQyxtQkFBb0IsU0FBUUYsY0FBQSxDQUFBRyxhQUFhO1lBQ2hFQyxZQUFZQyxPQUFxQixFQUFFQyxPQUFnQjtjQUNsRDtjQUNBLEtBQUssQ0FDSkQsT0FBTyxFQUNQLGtCQUFrQixFQUNsQixzRkFBc0YsRUFDdEZDLE9BQU8sQ0FDUDtZQUNGOztVQUNBQyxPQUFBLENBQUFMLG1CQUFBLEdBQUFBLG1CQUFBIiwiaWdub3JlTGlzdCI6W119