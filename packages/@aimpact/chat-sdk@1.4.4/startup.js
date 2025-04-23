System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, sdkConfig, __beyond_pkg, hmr;
  _export("sdkConfig", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.4/startup"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./endpoints
      ***************************/
      ims.set('./endpoints', {
        hash: 1036439593,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ENDPOINTS = void 0;
          const ENDPOINTS = exports.ENDPOINTS = {
            development: 'https://dev.agents.api.aimpact.partners',
            local: 'https://dev.agents.api.aimpact.partners',
            testing: 'https://test.agents.api.aimpact.partners',
            quality: 'https://beta.agents.api.aimpact.partners',
            production: 'https://agents.api.aimpact.partners'
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3015448303,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sdkConfig = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _endpoints = require("./endpoints");
          class SDKInitializer extends _model.ReactiveModel {
            #api;
            #environment;
            get environment() {
              return this.#environment;
            }
            #endpoints = _endpoints.ENDPOINTS;
            get api() {
              return this.#endpoints[this.#environment];
            }
            #userModel;
            get userModel() {
              return this.#userModel;
            }
            set userModel(value) {
              this.#userModel = value;
              this.triggerEvent();
            }
            async initialize({
              environment,
              userModel,
              localdb = true
            }) {
              this.#environment = environment;
              this.#userModel = userModel;
              // const model = new this.#userModel();
            }
          }
          /*bundle*/
          const sdkConfig = exports.sdkConfig = new SDKInitializer();
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 263068759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "sdkConfig",
        "name": "sdkConfig"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'sdkConfig') && _export("sdkConfig", sdkConfig = require ? require('./index').sdkConfig : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFTkRQT0lOVFMiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJsb2NhbCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsIl9tb2RlbCIsInJlcXVpcmUiLCJfZW5kcG9pbnRzIiwiU0RLSW5pdGlhbGl6ZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwiZW52aXJvbm1lbnQiLCJlbmRwb2ludHMiLCJ1c2VyTW9kZWwiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImluaXRpYWxpemUiLCJsb2NhbGRiIiwic2RrQ29uZmlnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvZW5kcG9pbnRzLnRzIiwiL2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLFNBQVMsR0FBQUMsT0FBQSxDQUFBRCxTQUFBLEdBQUc7WUFDeEJFLFdBQVcsRUFBRSx5Q0FBeUM7WUFDdERDLEtBQUssRUFBRSx5Q0FBeUM7WUFDaERDLE9BQU8sRUFBRSwwQ0FBMEM7WUFDbkRDLE9BQU8sRUFBRSwwQ0FBMEM7WUFDbkRDLFVBQVUsRUFBRTtXQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ05ELElBQUFDLE1BQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFDLFVBQUEsR0FBQUQsT0FBQTtVQUVBLE1BQU1FLGNBQWUsU0FBUUgsTUFBQSxDQUFBSSxhQUE2QjtZQUN6RCxDQUFBQyxHQUFJO1lBRUosQ0FBQUMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO1lBQ3pCO1lBRUEsQ0FBQUMsU0FBVSxHQUFHTCxVQUFBLENBQUFULFNBQVM7WUFDdEIsSUFBSVksR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFFLFNBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQUQsV0FBWSxDQUFDO1lBQzFDO1lBRUEsQ0FBQUUsU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsSUFBSUEsU0FBU0EsQ0FBQ0MsS0FBSztjQUNsQixJQUFJLENBQUMsQ0FBQUQsU0FBVSxHQUFHQyxLQUFLO2NBQ3ZCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTUMsVUFBVUEsQ0FBQztjQUFFTCxXQUFXO2NBQUVFLFNBQVM7Y0FBRUksT0FBTyxHQUFHO1lBQUksQ0FBZ0I7Y0FDeEUsSUFBSSxDQUFDLENBQUFOLFdBQVksR0FBR0EsV0FBVztjQUMvQixJQUFJLENBQUMsQ0FBQUUsU0FBVSxHQUFHQSxTQUFTO2NBQzNCO1lBQ0Q7O1VBR007VUFBVyxNQUFNSyxTQUFTLEdBQUFuQixPQUFBLENBQUFtQixTQUFBLEdBQUcsSUFBSVYsY0FBYyxFQUFFOzs7Ozs7Ozs7OztVQ25DeEQ7O1VBRUFXLE1BQUEsQ0FBQUMsY0FBQSxDQUFBckIsT0FBQTtZQUNBZSxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=