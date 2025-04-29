System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/http-suite@0.1.0/api", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-app@0.4.1/config", "dayjs@1.11.13", "@aimpact/chat-sdk@1.5.4/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, gclassroom, __beyond_pkg, hmr;
  _export("gclassroom", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_2 = _aimpactAilearnApp041ModelWrapper;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_3 = _beyondJsHttpSuite010Api;
    }, function (_beyondJsKernel0112Core) {
      dependency_4 = _beyondJsKernel0112Core;
    }, function (_aimpactAilearnApp041Config) {
      dependency_5 = _aimpactAilearnApp041Config;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactChatSdk154Session) {
      dependency_7 = _aimpactChatSdk154Session;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/model/gclassroom"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/ailearn-app/model/wrapper', dependency_2], ['@beyond-js/http-suite/api', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@aimpact/ailearn-app/config', dependency_5], ['dayjs', dependency_6], ['@aimpact/chat-sdk/session', dependency_7]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./class
      ***********************/
      ims.set('./class', {
        hash: 956808558,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _model = require("@beyond-js/reactive/model");
          class GClass extends _model.ReactiveModel {
            #course;
            #name;
            get name() {
              return this.#name;
            }
            #code;
            get code() {
              return this.#code;
            }
            #section;
            get section() {
              return this.#section;
            }
            get id() {
              return this.#course.id;
            }
            constructor(gclass) {
              super();
              this.#course = gclass;
              this.#init();
            }
            #init() {
              this.#name = this.#course.name;
              this.#section = this.#course.section;
            }
          }
          exports.GClass = GClass;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2021678877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.gclassroom = exports.GClassRoom = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _class = require("./class");
          var _model = require("@beyond-js/reactive/model");
          var _dayjs = require("dayjs");
          var _session = require("@aimpact/chat-sdk/session");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          class GClassRoom extends _model.ReactiveModel {
            #promise;
            #url;
            #MAX_TIME = 300000;
            #state;
            get state() {
              return this.#state;
            }
            #code;
            get code() {
              return this.#code;
            }
            get isReady() {
              return this.#promise;
            }
            #api;
            #lastClassesQueryTime;
            get lastClassesQueryTime() {
              return this.#lastClassesQueryTime;
            }
            #error;
            get error() {
              return this.#error;
            }
            #authorized;
            #processedCallback;
            get processedCallback() {
              return this.#processedCallback;
            }
            get authorized() {
              return this.#authorized;
            }
            #classes = new Map();
            get classes() {
              return this.#classes;
            }
            constructor() {
              super();
              const api = new _api.Api(_wrapper.settings.apis.ailearn);
              this.#api = api;
              _session.sessionWrapper.on('login', this.onLogin.bind(this));
              // this.#init();
            }
            onLogin() {}
            async checkPermissions() {
              try {
                const token = await _session.sessionWrapper.user.token;
                if (!token) throw new Error('No token');
                const response = await this.#api.bearer(token).get('/gclassroom/me');
                if (response.status === 'error') {
                  this.#error = response.error;
                  return;
                }
                return response.data.verifiedTeacher;
              } catch (e) {
                console.error(e);
              }
            }
            async getUrl() {
              try {
                const token = await _session.sessionWrapper.user.token;
                if (!token) throw new Error('No token');
                const response = await this.#api.bearer(token).get('/gclassroom/oauth/url');
                if (!response.status) {
                  throw new Error(response.error);
                }
                return response.data.url;
              } catch (e) {
                throw new Error('ERROR_GETTING_URL');
              }
            }
            async callback(state, code) {
              try {
                this.#state = state;
                this.#code = code;
                this.fetching = true;
                const response = await this.#api.get('/gclassroom/oauth/callback', {
                  bearer: _session.sessionWrapper.user.token,
                  state,
                  code
                });
                if (response.status === 'error') {
                  this.#error = response.error;
                  return;
                }
                this.#authorized = true;
                this.#processedCallback = true;
                this.triggerEvent();
              } catch (e) {
                console.trace(e);
              } finally {
                this.fetching = false;
              }
            }
            async courses() {
              try {
                this.fetching = true;
                const response = await this.#api.get('/gclassroom/courses', {
                  bearer: _session.sessionWrapper.user.token,
                  id: _session.sessionWrapper.user.id
                });
                if (response.status === 'error') {
                  this.#error = response.error;
                  return [];
                }
                response.courses.forEach(course => {
                  const gclass = new _class.GClass(course);
                  this.#classes.set(course.id, gclass);
                });
                this.#lastClassesQueryTime = (0, _dayjs.default)();
                return this.#classes;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.GClassRoom = GClassRoom;
          /*bundle */
          const gclassroom = exports.gclassroom = new GClassRoom();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "gclassroom",
        "name": "gclassroom"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'gclassroom') && _export("gclassroom", gclassroom = require ? require('./index').gclassroom : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiR0NsYXNzIiwiUmVhY3RpdmVNb2RlbCIsImNvdXJzZSIsIm5hbWUiLCJjb2RlIiwic2VjdGlvbiIsImlkIiwiY29uc3RydWN0b3IiLCJnY2xhc3MiLCJpbml0IiwiI2luaXQiLCJleHBvcnRzIiwiX2FwaSIsIl9jbGFzcyIsIl9kYXlqcyIsIl9zZXNzaW9uIiwiX3dyYXBwZXIiLCJHQ2xhc3NSb29tIiwicHJvbWlzZSIsInVybCIsIk1BWF9USU1FIiwic3RhdGUiLCJpc1JlYWR5IiwiYXBpIiwibGFzdENsYXNzZXNRdWVyeVRpbWUiLCJlcnJvciIsImF1dGhvcml6ZWQiLCJwcm9jZXNzZWRDYWxsYmFjayIsImNsYXNzZXMiLCJNYXAiLCJBcGkiLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9naW4iLCJiaW5kIiwiY2hlY2tQZXJtaXNzaW9ucyIsInRva2VuIiwidXNlciIsIkVycm9yIiwicmVzcG9uc2UiLCJiZWFyZXIiLCJnZXQiLCJzdGF0dXMiLCJkYXRhIiwidmVyaWZpZWRUZWFjaGVyIiwiZSIsImNvbnNvbGUiLCJnZXRVcmwiLCJjYWxsYmFjayIsImZldGNoaW5nIiwidHJpZ2dlckV2ZW50IiwidHJhY2UiLCJjb3Vyc2VzIiwiZm9yRWFjaCIsInNldCIsImRlZmF1bHQiLCJnY2xhc3Nyb29tIl0sInNvdXJjZXMiOlsiL2NsYXNzLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTSxNQUFPQyxNQUFPLFNBQVFGLE1BQUEsQ0FBQUcsYUFBcUI7WUFDaEQsQ0FBQUMsTUFBTztZQUVQLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUNBLElBQUlDLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBSixNQUFPLENBQUNJLEVBQUU7WUFDdkI7WUFDQUMsWUFBWUMsTUFBTTtjQUNqQixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQU4sTUFBTyxHQUFHTSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxDQUFBQyxJQUFLLEVBQUU7WUFDYjtZQUVBLENBQUFBLElBQUtDLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQVAsSUFBSyxHQUFHLElBQUksQ0FBQyxDQUFBRCxNQUFPLENBQUNDLElBQUk7Y0FDOUIsSUFBSSxDQUFDLENBQUFFLE9BQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUgsTUFBTyxDQUFDRyxPQUFPO1lBQ3JDOztVQUNBTSxPQUFBLENBQUFYLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkQsSUFBQVksSUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsTUFBQSxHQUFBZCxPQUFBO1VBRUEsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQWUsTUFBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLFFBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUNNLE1BQU9rQixVQUFXLFNBQVFuQixNQUFBLENBQUFHLGFBQXlCO1lBQ3hELENBQUFpQixPQUFRO1lBQ1IsQ0FBQUMsR0FBSTtZQUNKLENBQUFDLFFBQVMsR0FBRyxNQUFNO1lBQ2xCLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFqQixJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxJQUFJa0IsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFKLE9BQVE7WUFDckI7WUFDQSxDQUFBSyxHQUFJO1lBQ0osQ0FBQUMsb0JBQXFCO1lBQ3JCLElBQUlBLG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxvQkFBcUI7WUFDbEM7WUFDQSxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxVQUFXO1lBQ1gsQ0FBQUMsaUJBQWtCO1lBRWxCLElBQUlBLGlCQUFpQkEsQ0FBQTtjQUNwQixPQUFPLElBQUksQ0FBQyxDQUFBQSxpQkFBa0I7WUFDL0I7WUFDQSxJQUFJRCxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLENBQUFFLE9BQVEsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDcEIsSUFBSUQsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFDQXJCLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FFUCxNQUFNZ0IsR0FBRyxHQUFHLElBQUlYLElBQUEsQ0FBQWtCLEdBQUcsQ0FBQ2QsUUFBQSxDQUFBZSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQzFDLElBQUksQ0FBQyxDQUFBVixHQUFJLEdBQUdBLEdBQUc7Y0FDZlIsUUFBQSxDQUFBbUIsY0FBYyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDbkQ7WUFDRDtZQUVBRCxPQUFPQSxDQUFBLEdBQUk7WUFFWCxNQUFNRSxnQkFBZ0JBLENBQUE7Y0FDckIsSUFBSTtnQkFDSCxNQUFNQyxLQUFLLEdBQUcsTUFBTXhCLFFBQUEsQ0FBQW1CLGNBQWMsQ0FBQ00sSUFBSSxDQUFDRCxLQUFLO2dCQUM3QyxJQUFJLENBQUNBLEtBQUssRUFBRSxNQUFNLElBQUlFLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZDLE1BQU1DLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbkIsR0FBSSxDQUFDb0IsTUFBTSxDQUFDSixLQUFLLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLGdCQUFnQixDQUFDO2dCQUVwRSxJQUFJRixRQUFRLENBQUNHLE1BQU0sS0FBSyxPQUFPLEVBQUU7a0JBQ2hDLElBQUksQ0FBQyxDQUFBcEIsS0FBTSxHQUFHaUIsUUFBUSxDQUFDakIsS0FBSztrQkFDNUI7O2dCQUdELE9BQU9pQixRQUFRLENBQUNJLElBQUksQ0FBQ0MsZUFBZTtlQUNwQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDeEIsS0FBSyxDQUFDdUIsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1FLE1BQU1BLENBQUE7Y0FDWCxJQUFJO2dCQUNILE1BQU1YLEtBQUssR0FBRyxNQUFNeEIsUUFBQSxDQUFBbUIsY0FBYyxDQUFDTSxJQUFJLENBQUNELEtBQUs7Z0JBQzdDLElBQUksQ0FBQ0EsS0FBSyxFQUFFLE1BQU0sSUFBSUUsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFuQixHQUFJLENBQUNvQixNQUFNLENBQUNKLEtBQUssQ0FBQyxDQUFDSyxHQUFHLENBQUMsdUJBQXVCLENBQUM7Z0JBRTNFLElBQUksQ0FBQ0YsUUFBUSxDQUFDRyxNQUFNLEVBQUU7a0JBQ3JCLE1BQU0sSUFBSUosS0FBSyxDQUFDQyxRQUFRLENBQUNqQixLQUFLLENBQUM7O2dCQUdoQyxPQUFPaUIsUUFBUSxDQUFDSSxJQUFJLENBQUMzQixHQUFHO2VBQ3hCLENBQUMsT0FBTzZCLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlQLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7WUFFdEM7WUFFQSxNQUFNVSxRQUFRQSxDQUFDOUIsS0FBSyxFQUFFakIsSUFBSTtjQUN6QixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBaUIsS0FBTSxHQUFHQSxLQUFLO2dCQUNuQixJQUFJLENBQUMsQ0FBQWpCLElBQUssR0FBR0EsSUFBSTtnQkFDakIsSUFBSSxDQUFDZ0QsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU1WLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbkIsR0FBSSxDQUFDcUIsR0FBRyxDQUFDLDRCQUE0QixFQUFFO2tCQUNsRUQsTUFBTSxFQUFFNUIsUUFBQSxDQUFBbUIsY0FBYyxDQUFDTSxJQUFJLENBQUNELEtBQUs7a0JBQ2pDbEIsS0FBSztrQkFDTGpCO2lCQUNBLENBQUM7Z0JBRUYsSUFBSXNDLFFBQVEsQ0FBQ0csTUFBTSxLQUFLLE9BQU8sRUFBRTtrQkFDaEMsSUFBSSxDQUFDLENBQUFwQixLQUFNLEdBQUdpQixRQUFRLENBQUNqQixLQUFLO2tCQUM1Qjs7Z0JBR0QsSUFBSSxDQUFDLENBQUFDLFVBQVcsR0FBRyxJQUFJO2dCQUN2QixJQUFJLENBQUMsQ0FBQUMsaUJBQWtCLEdBQUcsSUFBSTtnQkFDOUIsSUFBSSxDQUFDMEIsWUFBWSxFQUFFO2VBQ25CLENBQUMsT0FBT0wsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNLLEtBQUssQ0FBQ04sQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDSSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNRyxPQUFPQSxDQUFBO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUNILFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNVixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQW5CLEdBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtrQkFDM0RELE1BQU0sRUFBRTVCLFFBQUEsQ0FBQW1CLGNBQWMsQ0FBQ00sSUFBSSxDQUFDRCxLQUFLO2tCQUNqQ2pDLEVBQUUsRUFBRVMsUUFBQSxDQUFBbUIsY0FBYyxDQUFDTSxJQUFJLENBQUNsQztpQkFDeEIsQ0FBQztnQkFDRixJQUFJb0MsUUFBUSxDQUFDRyxNQUFNLEtBQUssT0FBTyxFQUFFO2tCQUNoQyxJQUFJLENBQUMsQ0FBQXBCLEtBQU0sR0FBR2lCLFFBQVEsQ0FBQ2pCLEtBQUs7a0JBQzVCLE9BQU8sRUFBRTs7Z0JBR1ZpQixRQUFRLENBQUNhLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDdEQsTUFBTSxJQUFHO2tCQUNqQyxNQUFNTSxNQUFNLEdBQUcsSUFBSUssTUFBQSxDQUFBYixNQUFNLENBQUNFLE1BQU0sQ0FBQztrQkFDakMsSUFBSSxDQUFDLENBQUEwQixPQUFRLENBQUM2QixHQUFHLENBQUN2RCxNQUFNLENBQUNJLEVBQUUsRUFBRUUsTUFBTSxDQUFDO2dCQUNyQyxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLENBQUFnQixvQkFBcUIsR0FBRyxJQUFBVixNQUFBLENBQUE0QyxPQUFLLEdBQUU7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDLENBQUE5QixPQUFRO2VBQ3BCLENBQUMsT0FBT29CLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDeEIsS0FBSyxDQUFDdUIsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDSSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0F6QyxPQUFBLENBQUFNLFVBQUEsR0FBQUEsVUFBQTtVQUVNO1VBQVksTUFBTTBDLFVBQVUsR0FBQWhELE9BQUEsQ0FBQWdELFVBQUEsR0FBRyxJQUFJMUMsVUFBVSxFQUFFIiwiaWdub3JlTGlzdCI6W119