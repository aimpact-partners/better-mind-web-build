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
        hash: 4074218929,
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
            get baseUrl() {
              return _config.default.params.apps[this.project].baseUrl;
            }
            get apis() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBR0VOVFNfRU5EUE9JTlRTIiwiZXhwb3J0cyIsInJ2ZCIsImRldmVsb3BtZW50IiwibG9jYWwiLCJ0ZXN0aW5nIiwicXVhbGl0eSIsInByb2R1Y3Rpb24iLCJfbW9kZWwiLCJyZXF1aXJlIiwiX2NvbmZpZyIsIl9hZ2VudHNTZGsiLCJDb25maWciLCJSZWFjdGl2ZU1vZGVsIiwiQVBQX0xPR08iLCJkZWZhdWx0IiwicGFyYW1zIiwicHJvamVjdCIsImJhc2VVcmwiLCJhcHBzIiwiYXBpcyIsImFpbGVhcm4iLCJhZ2VudHMiLCJlbnZpcm9ubWVudCIsInNldHRpbmdzIiwiV3JhcHBlciIsImRldmljZSIsImNvbnN0cnVjdG9yIiwiYXJncyIsInJlYWN0aXZlUHJvcHMiLCJjYWxjdWxhdGVTaXplIiwiZ2xvYmFsVGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRDbGFzc3Jvb20iLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50Q2xhc3Nyb29tIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyIsIkFpTGVhcm5XcmFwcGVyIl0sInNvdXJjZXMiOlsiL2FnZW50cy1zZGsudHN4IiwiL2NvbmZpZy50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLGdCQUFnQixHQUFBQyxPQUFBLENBQUFELGdCQUFBLEdBQUc7WUFDL0JFLEdBQUcsRUFBRTtjQUNKQyxXQUFXLEVBQUUseUNBQXlDO2NBQ3REQyxLQUFLLEVBQUUseUNBQXlDO2NBQ2hEQyxPQUFPLEVBQUUsMENBQTBDO2NBQ25EQyxPQUFPLEVBQUUsMENBQTBDO2NBQ25EQyxVQUFVLEVBQUU7YUFDWjtZQUNELGFBQWEsRUFBRTtjQUNkSixXQUFXLEVBQUUsdURBQXVEO2NBQ3BFQyxLQUFLLEVBQUUsdURBQXVEO2NBQzlEQyxPQUFPLEVBQUUsdURBQXVEO2NBQ2hFQyxPQUFPLEVBQUUsdURBQXVEO2NBQ2hFQyxVQUFVLEVBQUU7O1dBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkQsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsVUFBQSxHQUFBRixPQUFBO1VBRU0sTUFBT0csTUFBTyxTQUFRSixNQUFBLENBQUFLLGFBQXFCO1lBQ2hELElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLFdBQVdKLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNDLE9BQU8sSUFBSVAsT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0YsUUFBUSxFQUFFO1lBQ3BFO1lBQ0EsSUFBSUcsT0FBT0EsQ0FBQTtjQUNWLE9BQU9QLE9BQUEsQ0FBQUssT0FBTSxDQUFDQyxNQUFNLENBQUNDLE9BQU87WUFDN0I7WUFFQSxJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBT1IsT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQ0YsT0FBTyxDQUFDLENBQUNDLE9BQU87WUFDaEQ7WUFFQSxJQUFJRSxJQUFJQSxDQUFBO2NBQ1AsT0FBTztnQkFDTkMsT0FBTyxFQUFFWCxPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDSCxPQUFPLENBQUM7Z0JBQ3pDSyxNQUFNLEVBQUVYLFVBQUEsQ0FBQVgsZ0JBQWdCLENBQUMsSUFBSSxDQUFDaUIsT0FBTyxDQUFDLENBQUNQLE9BQUEsQ0FBQUssT0FBTSxDQUFDUSxXQUFXO2VBQ3pEO1lBQ0Y7O1VBQ0F0QixPQUFBLENBQUFXLE1BQUEsR0FBQUEsTUFBQTtVQUVNO1VBQVcsTUFBTVksUUFBUSxHQUFBdkIsT0FBQSxDQUFBdUIsUUFBQSxHQUFHLElBQUlaLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Qi9DLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUdNLE1BQU9nQixPQUFRLFNBQVFqQixNQUFBLENBQUFLLGFBQXVCO1lBSW5ELENBQUFhLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBQyxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDQSxJQUFJLENBQUM7Y0FDWDtjQUNBLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2NBRS9HLElBQUksQ0FBQyxDQUFBSCxNQUFPLEdBQUcsSUFBSSxDQUFDSSxhQUFhLEVBQUU7Y0FDbkNDLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQUs7Z0JBQzFDLElBQUksQ0FBQyxDQUFBTixNQUFPLEdBQUcsSUFBSSxDQUFDSSxhQUFhLEVBQUU7Y0FDcEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQUcsWUFBWSxHQUFHLE1BQU1DLElBQUksSUFBRztjQUMzQkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQUM7Y0FDdkQsSUFBSSxDQUFDSyxnQkFBZ0IsR0FBR0wsSUFBSTtZQUM3QixDQUFDO1lBRURKLGFBQWFBLENBQUE7Y0FDWixNQUFNVSxLQUFLLEdBQUdULFVBQVUsQ0FBQ1UsVUFBVTtjQUNuQyxJQUFJLENBQUNELEtBQUssRUFBRTtnQkFDWEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUNBQXVDLENBQUM7Z0JBQ3BEOztjQUVELElBQUlILEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSTtlQUNYLE1BQU0sSUFBSUEsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDdkMsT0FBTyxJQUFJO2VBQ1gsTUFBTSxJQUFJQSxLQUFLLElBQUksR0FBRyxJQUFJQSxLQUFLLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxPQUFPLElBQUk7ZUFDWCxNQUFNO2dCQUNOLE9BQU8sSUFBSTs7WUFFYjs7VUFDQXZDLE9BQUEsQ0FBQXdCLE9BQUEsR0FBQUEsT0FBQTtVQUNNO1VBQVcsTUFBTW1CLGNBQWMsR0FBQTNDLE9BQUEsQ0FBQTJDLGNBQUEsR0FBRyxJQUFJbkIsT0FBTyxDQUFDLEVBQUUsQ0FBQztVQUN4RE0sVUFBVSxDQUFDVixPQUFPLEdBQUd1QixjQUFjIiwiaWdub3JlTGlzdCI6W119