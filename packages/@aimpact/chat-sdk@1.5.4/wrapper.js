System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Wrapper: void 0,
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactChatSdk154Core) {
      dependency_1 = _aimpactChatSdk154Core;
    }, function (_aimpactChatSdk154Session) {
      dependency_2 = _aimpactChatSdk154Session;
    }, function (_beyondJsReactive205Model) {
      dependency_3 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_4 = _beyondJsKernel0112Core;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.4/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/core', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@beyond-js/kernel/core', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3243228803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AppWrapper = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@beyond-js/reactive/model");
          var _core2 = require("@beyond-js/kernel/core");
          /*bundle*/
          class Wrapper extends _model.ReactiveModel {
            #chats;
            get chats() {
              return this.#chats;
            }
            #language = _core2.languages.current;
            get language() {
              return this.#language;
            }
            set language(value) {
              this.#language = value;
              this.triggerEvent('app.settings.change');
            }
            get languages() {
              return _core2.languages;
            }
            #audioSpeed = localStorage.getItem('aimpact.audio.speed') && !isNaN(parseInt(localStorage.getItem('aimpact.audio.speed'))) ? parseInt(localStorage.getItem('aimpact.audio.speed')) : 1;
            get audioSpeed() {
              return this.#audioSpeed;
            }
            set audioSpeed(value) {
              if (!value) return;
              this.#audioSpeed = value;
              localStorage.setItem('aimpact.audio.speed', value.toString());
              this.triggerEvent('app.settings.change');
            }
            #accessibility = localStorage.getItem('aimpact.chat.accessibility') ? localStorage.getItem('aimpact.chat.accessibility') : 'normal';
            get accesiibility() {
              return this.#accessibility;
            }
            set accesiibility(value) {
              this.#accessibility = value;
              localStorage.setItem('aimpact.chat.accessibility', value);
              this.triggerEvent('app.settings.change');
            }
            set accessibility(value) {
              this.#accessibility = value;
              localStorage.setItem('aimpact.chat.accessibility', value);
              this.triggerEvent();
            }
            #currentChat;
            get currentChat() {
              return this.#currentChat;
            }
            set currentChat(chat) {
              if (!chat?.id) {
                throw new Error('invalid chat');
              }
              if (this.#currentChat?.id === chat?.id) return;
              this.#currentChat = chat;
              this.triggerEvent();
            }
            #ready;
            get isReady() {
              return this.#ready;
            }
            constructor() {
              super();
              this.reactiveProps(['isUpdating', 'selectedKnowledgeBoxId']);
              _session.sessionWrapper.on('change', this.validateSession.bind(this));
              this.load();
            }
            validateSession() {
              if (!_session.sessionWrapper.logged) return;
              this.ready = false;
              this.#ready = undefined;
              this.load();
            }
            async load() {
              if (this.#ready) return this.#ready;
              this.#ready = new _core2.PendingPromise();
              await _session.sessionWrapper.isReady;
              if (!_session.sessionWrapper.logged) {
                this.ready = true;
                this.#ready.resolve(true);
                return;
              }
              // TODO: @jircdev - Move the loading of knowledge boxes to a separate module for on-demand loading.
              /**
               * TODO: @jircdev - Move the loading of chats to a separate module for on-demand loading.
               */
              const chats = new _core.Chats();
              this.#chats = chats;
              // this.#chats.on('change', this.triggerEvent);
              // await chats.load({ userId: sessionWrapper.user.id });
              this.ready = true;
              this.#ready.resolve(true);
            }
            setSettings(settings) {
              Object.keys(settings).forEach(key => this[key] = settings[key]);
              this.triggerEvent();
            }
          }
          exports.Wrapper = Wrapper;
          const _wrapper = new Wrapper();
          /*bundle*/
          const AppWrapper = exports.AppWrapper = _wrapper;
          globalThis.app = AppWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Wrapper",
        "name": "Wrapper"
      }, {
        "im": "./index",
        "from": "AppWrapper",
        "name": "AppWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Wrapper') && _export("Wrapper", Wrapper = require ? require('./index').Wrapper : value);
        (require || prop === 'AppWrapper') && _export("AppWrapper", AppWrapper = require ? require('./index').AppWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl9tb2RlbCIsIl9jb3JlMiIsIldyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiY2hhdHMiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsImF1ZGlvU3BlZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXNOYU4iLCJwYXJzZUludCIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImFjY2Vzc2liaWxpdHkiLCJhY2Nlc2lpYmlsaXR5IiwiY3VycmVudENoYXQiLCJjaGF0IiwiaWQiLCJFcnJvciIsInJlYWR5IiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInNlc3Npb25XcmFwcGVyIiwib24iLCJ2YWxpZGF0ZVNlc3Npb24iLCJiaW5kIiwibG9hZCIsImxvZ2dlZCIsInVuZGVmaW5lZCIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsIkNoYXRzIiwic2V0U2V0dGluZ3MiLCJzZXR0aW5ncyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZXhwb3J0cyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciIsImdsb2JhbFRoaXMiLCJhcHAiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFNTztVQUFVLE1BQU9JLE9BQVEsU0FBUUYsTUFBQSxDQUFBRyxhQUF1QjtZQUM5RCxDQUFBQyxLQUFNO1lBS04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtB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Y0FDNUQsSUFBSSxDQUFDQyxJQUFJLEVBQUU7WUFDWjtZQUVBRixlQUFlQSxDQUFBO2NBQ2QsSUFBSSxDQUFDOUIsUUFBQSxDQUFBNEIsY0FBYyxDQUFDSyxNQUFNLEVBQUU7Y0FFNUIsSUFBSSxDQUFDVCxLQUFLLEdBQUcsS0FBSztjQUNsQixJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHVSxTQUFTO2NBQ3ZCLElBQUksQ0FBQ0YsSUFBSSxFQUFFO1lBQ1o7WUFFQSxNQUFNQSxJQUFJQSxDQUFBO2NBQ1QsSUFBSSxJQUFJLENBQUMsQ0FBQVIsS0FBTSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07Y0FDbkMsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBRyxJQUFJdEIsTUFBQSxDQUFBaUMsY0FBYyxFQUFFO2NBQ2xDLE1BQU1uQyxRQUFBLENBQUE0QixjQUFjLENBQUNILE9BQU87Y0FFNUIsSUFBSSxDQUFDekIsUUFBQSxDQUFBNEIsY0FBYyxDQUFDSyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQ1QsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNZLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCOztjQUdEO2NBRUE7OztjQUdBLE1BQU0vQixLQUFLLEdBQUcsSUFBSVAsS0FBQSxDQUFBdUMsS0FBSyxFQUFFO2NBQ3pCLElBQUksQ0FBQyxDQUFBaEMsS0FBTSxHQUFHQSxLQUFLO2NBQ25CO2NBQ0E7Y0FFQSxJQUFJLENBQUNtQixLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDWSxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzFCO1lBRUFFLFdBQVdBLENBQUNDLFFBQVE7Y0FDbkJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLElBQUssSUFBSSxDQUFDQSxHQUFHLENBQUMsR0FBR0osUUFBUSxDQUFDSSxHQUFHLENBQUUsQ0FBQztjQUNqRSxJQUFJLENBQUNqQyxZQUFZLEVBQUU7WUFDcEI7O1VBQ0FrQyxPQUFBLENBQUF6QyxPQUFBLEdBQUFBLE9BQUE7VUFDRCxNQUFNMEMsUUFBUSxHQUFHLElBQUkxQyxPQUFPLEVBQUU7VUFDdkI7VUFBVyxNQUFNMkMsVUFBVSxHQUFBRixPQUFBLENBQUFFLFVBQUEsR0FBR0QsUUFBUTtVQUM3Q0UsVUFBVSxDQUFDQyxHQUFHLEdBQUdGLFVBQVUiLCJpZ25vcmVMaXN0IjpbXX0=