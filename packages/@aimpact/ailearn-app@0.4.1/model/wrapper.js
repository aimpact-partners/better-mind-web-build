System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, settings, Config, AiLearnWrapper, __beyond_pkg, hmr;
  _export({
    settings: void 0,
    Config: void 0,
    AiLearnWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205Model) {
      dependency_1 = _beyondJsReactive205Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/model/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./config
      ************************/
      ims.set('./config', {
        hash: 1005906686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.settings = exports.Config = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          let settings = exports.settings = undefined;
          /*bundle*/
          class Config extends _model.ReactiveModel {
            constructor(args = {}) {
              super({
                properties: ['apis', 'project', 'baseUrl', 'version', 'Router', 'APP_LOGO', 'APP_NAME'],
                ...args
              });
            }
            static initialize({
              apis,
              project,
              baseUrl,
              version,
              Router,
              APP_LOGO,
              APP_NAME
            }) {
              exports.settings = settings = new Config({
                apis,
                project,
                baseUrl,
                version,
                Router,
                APP_LOGO,
                APP_NAME
              });
            }
          }
          exports.Config = Config;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2502847480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AiLearnWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Wrapper extends _model.ReactiveModel {
            #device;
            get device() {
              return this.#device;
            }
            constructor(args) {
              super(args);
              // todo: @jircdev view which props are needed and why.
              this.reactiveProps(['sessionModel', 'currentClassroom', 'sessionAssessment', 'currentAssignment', 'isTeacher']);
              this.#device = this.calculateSize();
              globalThis.addEventListener('resize', () => {
                this.#device = this.calculateSize();
              });
            }
            setClassroom = async data => {
              localStorage.setItem('classroom', JSON.stringify(data));
              this.currentClassroom = data;
            };
            calculateSize() {
              const width = globalThis.innerWidth;
              if (!width) {
                console.log('the app is running out of the browser');
                return;
              }
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            }
          }
          exports.Wrapper = Wrapper;
          /*bundle*/
          const AiLearnWrapper = exports.AiLearnWrapper = new Wrapper('');
          globalThis.ailearn = AiLearnWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./config",
        "from": "settings",
        "name": "settings"
      }, {
        "im": "./config",
        "from": "Config",
        "name": "Config"
      }, {
        "im": "./index",
        "from": "AiLearnWrapper",
        "name": "AiLearnWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'settings') && _export("settings", settings = require ? require('./config').settings : value);
        (require || prop === 'Config') && _export("Config", Config = require ? require('./config').Config : value);
        (require || prop === 'AiLearnWrapper') && _export("AiLearnWrapper", AiLearnWrapper = require ? require('./index').AiLearnWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwic2V0dGluZ3MiLCJleHBvcnRzIiwidW5kZWZpbmVkIiwiQ29uZmlnIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwiYXJncyIsInByb3BlcnRpZXMiLCJpbml0aWFsaXplIiwiYXBpcyIsInByb2plY3QiLCJiYXNlVXJsIiwidmVyc2lvbiIsIlJvdXRlciIsIkFQUF9MT0dPIiwiQVBQX05BTUUiLCJXcmFwcGVyIiwiZGV2aWNlIiwicmVhY3RpdmVQcm9wcyIsImNhbGN1bGF0ZVNpemUiLCJnbG9iYWxUaGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldENsYXNzcm9vbSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRDbGFzc3Jvb20iLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJjb25zb2xlIiwibG9nIiwiQWlMZWFybldyYXBwZXIiLCJhaWxlYXJuIl0sInNvdXJjZXMiOlsiL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVlPO1VBQVcsSUFBSUMsUUFBUSxHQUFBQyxPQUFBLENBQUFELFFBQUEsR0FBV0UsU0FBUztVQUMzQztVQUFVLE1BQU9DLE1BQU8sU0FBUUwsTUFBQSxDQUFBTSxhQUFzQjtZQVM1REMsWUFBWUMsSUFBQSxHQUF5QixFQUFFO2NBQ3RDLEtBQUssQ0FBQztnQkFDTEMsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO2dCQUN2RixHQUFHRDtlQUNILENBQUM7WUFDSDtZQUVBLE9BQU9FLFVBQVVBLENBQUM7Y0FBRUMsSUFBSTtjQUFFQyxPQUFPO2NBQUVDLE9BQU87Y0FBRUMsT0FBTztjQUFFQyxNQUFNO2NBQUVDLFFBQVE7Y0FBRUM7WUFBUSxDQUFXO2NBQ3pGZCxPQUFBLENBQUFELFFBQUEsR0FBQUEsUUFBUSxHQUFHLElBQUlHLE1BQU0sQ0FBQztnQkFBRU0sSUFBSTtnQkFBRUMsT0FBTztnQkFBRUMsT0FBTztnQkFBRUMsT0FBTztnQkFBRUMsTUFBTTtnQkFBRUMsUUFBUTtnQkFBRUM7Y0FBUSxDQUFFLENBQUM7WUFDdkY7O1VBQ0FkLE9BQUEsQ0FBQUUsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDRCxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFHTSxNQUFPaUIsT0FBUSxTQUFRbEIsTUFBQSxDQUFBTSxhQUF1QjtZQUluRCxDQUFBYSxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQVosWUFBWUMsSUFBSTtjQUNmLEtBQUssQ0FBQ0EsSUFBSSxDQUFDO2NBQ1g7Y0FDQSxJQUFJLENBQUNZLGFBQWEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLENBQUMsQ0FBQztjQUUvRyxJQUFJLENBQUMsQ0FBQUQsTUFBTyxHQUFHLElBQUksQ0FBQ0UsYUFBYSxFQUFFO2NBQ25DQyxVQUFVLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFLO2dCQUMxQyxJQUFJLENBQUMsQ0FBQUosTUFBTyxHQUFHLElBQUksQ0FBQ0UsYUFBYSxFQUFFO2NBQ3BDLENBQUMsQ0FBQztZQUNIO1lBRUFHLFlBQVksR0FBRyxNQUFNQyxJQUFJLElBQUc7Y0FDM0JDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFdBQVcsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLElBQUksQ0FBQyxDQUFDO2NBQ3ZELElBQUksQ0FBQ0ssZ0JBQWdCLEdBQUdMLElBQUk7WUFDN0IsQ0FBQztZQUVESixhQUFhQSxDQUFBO2NBQ1osTUFBTVUsS0FBSyxHQUFHVCxVQUFVLENBQUNVLFVBQVU7Y0FDbkMsSUFBSSxDQUFDRCxLQUFLLEVBQUU7Z0JBQ1hFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVDQUF1QyxDQUFDO2dCQUNwRDs7Y0FFRCxJQUFJSCxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUNoQixPQUFPLElBQUk7ZUFDWCxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSTtlQUNYLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDdkMsT0FBTyxJQUFJO2VBQ1gsTUFBTTtnQkFDTixPQUFPLElBQUk7O1lBRWI7O1VBQ0E1QixPQUFBLENBQUFlLE9BQUEsR0FBQUEsT0FBQTtVQUNNO1VBQVcsTUFBTWlCLGNBQWMsR0FBQWhDLE9BQUEsQ0FBQWdDLGNBQUEsR0FBRyxJQUFJakIsT0FBTyxDQUFDLEVBQUUsQ0FBQztVQUN4REksVUFBVSxDQUFDYyxPQUFPLEdBQUdELGNBQWMiLCJpZ25vcmVMaXN0IjpbXX0=