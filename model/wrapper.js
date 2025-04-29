System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-app@0.4.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, settings, AiLearnWrapper, __beyond_pkg, hmr;
  _export({
    settings: void 0,
    AiLearnWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnApp041Config) {
      dependency_2 = _aimpactAilearnApp041Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-app/config', dependency_2]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./agents-sdk
      ****************************/
      ims.set('./agents-sdk', {
        hash: 716615347,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AGENTS_ENDPOINTS = void 0;
          const AGENTS_ENDPOINTS = exports.AGENTS_ENDPOINTS = {
            rvd: {
              development: 'https://dev.agents.api.aimpact.partners',
              local: 'https://dev.agents.api.aimpact.partners',
              testing: 'https://test.agents.api.aimpact.partners',
              quality: 'https://beta.agents.api.aimpact.partners',
              production: 'https://agents.api.aimpact.partners'
            },
            'better-mind': {
              development: 'https://agents-api-883367315651.europe-west10.run.app',
              local: 'https://agents-api-883367315651.europe-west10.run.app',
              testing: 'https://agents-api-883367315651.europe-west10.run.app',
              quality: 'https://agents-api-883367315651.europe-west10.run.app',
              production: 'https://agents-api-883367315651.europe-west10.run.app/'
            }
          };
        }
      });

      /************************
      INTERNAL MODULE: ./config
      ************************/

      ims.set('./config', {
        hash: 814884102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.settings = exports.Config = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-app/config");
          var _agentsSdk = require("./agents-sdk");
          class Config extends _model.ReactiveModel {
            get APP_LOGO() {
              return `/assets/${_config.default.params.project}/${_config.default.params.APP_LOGO}`;
            }
            get project() {
              return _config.default.params.project;
            }
            get apis() {
              console.log(_config.default.params.apis[this.project], this.project);
              return {
                ailearn: _config.default.params.apis[this.project],
                agents: _agentsSdk.AGENTS_ENDPOINTS[this.project][_config.default.environment]
              };
            }
          }
          exports.Config = Config;
          /*bundle*/
          const settings = exports.settings = new Config();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBR0VOVFNfRU5EUE9JTlRTIiwiZXhwb3J0cyIsInJ2ZCIsImRldmVsb3BtZW50IiwibG9jYWwiLCJ0ZXN0aW5nIiwicXVhbGl0eSIsInByb2R1Y3Rpb24iLCJfbW9kZWwiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl9hZ2VudHNTZGsiLCJDb25maWciLCJSZWFjdGl2ZU1vZGVsIiwiQVBQX0xPR08iLCJkZWZhdWx0IiwicGFyYW1zIiwicHJvamVjdCIsImFwaXMiLCJjb25zb2xlIiwibG9nIiwiYWlsZWFybiIsImFnZW50cyIsImVudmlyb25tZW50Iiwic2V0dGluZ3MiLCJXcmFwcGVyIiwiZGV2aWNlIiwiY29uc3RydWN0b3IiLCJhcmdzIiwicmVhY3RpdmVQcm9wcyIsImNhbGN1bGF0ZVNpemUiLCJnbG9iYWxUaGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldENsYXNzcm9vbSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRDbGFzc3Jvb20iLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJBaUxlYXJuV3JhcHBlciJdLCJzb3VyY2VzIjpbIi9hZ2VudHMtc2RrLnRzeCIsIi9jb25maWcudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTyxNQUFNQSxnQkFBZ0IsR0FBQUMsT0FBQSxDQUFBRCxnQkFBQSxHQUFHO1lBQy9CRSxHQUFHLEVBQUU7Y0FDSkMsV0FBVyxFQUFFLHlDQUF5QztjQUN0REMsS0FBSyxFQUFFLHlDQUF5QztjQUNoREMsT0FBTyxFQUFFLDBDQUEwQztjQUNuREMsT0FBTyxFQUFFLDBDQUEwQztjQUNuREMsVUFBVSxFQUFFO2FBQ1o7WUFDRCxhQUFhLEVBQUU7Y0FDZEosV0FBVyxFQUFFLHVEQUF1RDtjQUNwRUMsS0FBSyxFQUFFLHVEQUF1RDtjQUM5REMsT0FBTyxFQUFFLHVEQUF1RDtjQUNoRUMsT0FBTyxFQUFFLHVEQUF1RDtjQUNoRUMsVUFBVSxFQUFFOztXQUViOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZELElBQUFDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFVBQUEsR0FBQUYsT0FBQTtVQUVNLE1BQU9HLE1BQU8sU0FBUUosTUFBQSxDQUFBSyxhQUFxQjtZQUNoRCxJQUFJQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxXQUFXSixPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLElBQUlQLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNGLFFBQVEsRUFBRTtZQUNwRTtZQUNBLElBQUlHLE9BQU9BLENBQUE7Y0FDVixPQUFPUCxPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPO1lBQzdCO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQ0QsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxPQUFPLENBQUM7Y0FDM0QsT0FBTztnQkFDTkksT0FBTyxFQUFFWCxPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDRCxPQUFPLENBQUM7Z0JBQ3pDSyxNQUFNLEVBQUVYLFVBQUEsQ0FBQVgsZ0JBQWdCLENBQUMsSUFBSSxDQUFDaUIsT0FBTyxDQUFDLENBQUNQLE9BQUEsQ0FBQUssT0FBTSxDQUFDUSxXQUFXO2VBQ3pEO1lBQ0Y7O1VBQ0F0QixPQUFBLENBQUFXLE1BQUEsR0FBQUEsTUFBQTtVQUVNO1VBQVcsTUFBTVksUUFBUSxHQUFBdkIsT0FBQSxDQUFBdUIsUUFBQSxHQUFHLElBQUlaLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQi9DLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUdNLE1BQU9nQixPQUFRLFNBQVFqQixNQUFBLENBQUFLLGFBQXVCO1lBSW5ELENBQUFhLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBQyxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDQSxJQUFJLENBQUM7Y0FDWDtjQUNBLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2NBRS9HLElBQUksQ0FBQyxDQUFBSCxNQUFPLEdBQUcsSUFBSSxDQUFDSSxhQUFhLEVBQUU7Y0FDbkNDLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQUs7Z0JBQzFDLElBQUksQ0FBQyxDQUFBTixNQUFPLEdBQUcsSUFBSSxDQUFDSSxhQUFhLEVBQUU7Y0FDcEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQUcsWUFBWSxHQUFHLE1BQU1DLElBQUksSUFBRztjQUMzQkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQUM7Y0FDdkQsSUFBSSxDQUFDSyxnQkFBZ0IsR0FBR0wsSUFBSTtZQUM3QixDQUFDO1lBRURKLGFBQWFBLENBQUE7Y0FDWixNQUFNVSxLQUFLLEdBQUdULFVBQVUsQ0FBQ1UsVUFBVTtjQUNuQyxJQUFJLENBQUNELEtBQUssRUFBRTtnQkFDWHJCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVDQUF1QyxDQUFDO2dCQUNwRDs7Y0FFRCxJQUFJb0IsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDaEIsT0FBTyxJQUFJO2VBQ1gsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxPQUFPLElBQUk7ZUFDWCxNQUFNLElBQUlBLEtBQUssSUFBSSxHQUFHLElBQUlBLEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSTtlQUNYLE1BQU07Z0JBQ04sT0FBTyxJQUFJOztZQUViOztVQUNBdkMsT0FBQSxDQUFBd0IsT0FBQSxHQUFBQSxPQUFBO1VBQ007VUFBVyxNQUFNaUIsY0FBYyxHQUFBekMsT0FBQSxDQUFBeUMsY0FBQSxHQUFHLElBQUlqQixPQUFPLENBQUMsRUFBRSxDQUFDO1VBQ3hETSxVQUFVLENBQUNWLE9BQU8sR0FBR3FCLGNBQWMiLCJpZ25vcmVMaXN0IjpbXX0=