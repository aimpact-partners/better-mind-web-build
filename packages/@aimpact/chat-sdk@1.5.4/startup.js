System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, sdkConfig, __beyond_pkg, hmr;
  _export("sdkConfig", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205Model) {
      dependency_1 = _beyondJsReactive205Model;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.4/startup"
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
        hash: 4115800631,
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
            #project;
            get project() {
              return this.#project;
            }
            #environment;
            get environment() {
              return this.#environment;
            }
            #endpoints = _endpoints.ENDPOINTS;
            get api() {
              return this.#api;
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
              api,
              project,
              localdb = true
            }) {
              this.#environment = environment;
              this.#userModel = userModel;
              this.#api = api;
              this.#project = project;
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
        hash: 1708046244,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFTkRQT0lOVFMiLCJleHBvcnRzIiwiZGV2ZWxvcG1lbnQiLCJsb2NhbCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsIl9tb2RlbCIsInJlcXVpcmUiLCJfZW5kcG9pbnRzIiwiU0RLSW5pdGlhbGl6ZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwicHJvamVjdCIsImVudmlyb25tZW50IiwiZW5kcG9pbnRzIiwidXNlck1vZGVsIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJpbml0aWFsaXplIiwibG9jYWxkYiIsInNka0NvbmZpZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2VuZHBvaW50cy50cyIsIi9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTyxNQUFNQSxTQUFTLEdBQUFDLE9BQUEsQ0FBQUQsU0FBQSxHQUFHO1lBQ3hCRSxXQUFXLEVBQUUseUNBQXlDO1lBQ3REQyxLQUFLLEVBQUUseUNBQXlDO1lBQ2hEQyxPQUFPLEVBQUUsMENBQTBDO1lBQ25EQyxPQUFPLEVBQUUsMENBQTBDO1lBQ25EQyxVQUFVLEVBQUU7V0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNORCxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBQyxVQUFBLEdBQUFELE9BQUE7VUFFQSxNQUFNRSxjQUFlLFNBQVFILE1BQUEsQ0FBQUksYUFBNkI7WUFDekQsQ0FBQUMsR0FBSTtZQUVKLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUFDLFNBQVUsR0FBR04sVUFBQSxDQUFBVCxTQUFTO1lBRXRCLElBQUlZLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBRUEsQ0FBQUksU0FBVTtZQUNWLElBQUlBLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBRUEsSUFBSUEsU0FBU0EsQ0FBQ0MsS0FBSztjQUNsQixJQUFJLENBQUMsQ0FBQUQsU0FBVSxHQUFHQyxLQUFLO2NBQ3ZCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTUMsVUFBVUEsQ0FBQztjQUFFTCxXQUFXO2NBQUVFLFNBQVM7Y0FBRUosR0FBRztjQUFFQyxPQUFPO2NBQUVPLE9BQU8sR0FBRztZQUFJLENBQWdCO2NBQ3RGLElBQUksQ0FBQyxDQUFBTixXQUFZLEdBQUdBLFdBQVc7Y0FDL0IsSUFBSSxDQUFDLENBQUFFLFNBQVUsR0FBR0EsU0FBUztjQUMzQixJQUFJLENBQUMsQ0FBQUosR0FBSSxHQUFHQSxHQUFHO2NBQ2YsSUFBSSxDQUFDLENBQUFDLE9BQVEsR0FBR0EsT0FBTztjQUN2QjtZQUNEOztVQUdNO1VBQVcsTUFBTVEsU0FBUyxHQUFBcEIsT0FBQSxDQUFBb0IsU0FBQSxHQUFHLElBQUlYLGNBQWMsRUFBRTs7Ozs7Ozs7Ozs7VUMzQ3hEOztVQUVBWSxNQUFBLENBQUFDLGNBQUEsQ0FBQXRCLE9BQUE7WUFDQWdCLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==