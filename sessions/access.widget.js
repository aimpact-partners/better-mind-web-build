System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/core", "@beyond-js/reactive@2.0.4/model", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.1/model/gclassroom", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_4 = _aimpactAilearnSdk120Core;
    }, function (_beyondJsReactive204Model) {
      dependency_5 = _beyondJsReactive204Model;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp041ModelGclassroom) {
      dependency_7 = _aimpactAilearnApp041ModelGclassroom;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_9 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_10 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_beyondJsKernel0112Routing) {
      dependency_12 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/sessions/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/model/gclassroom', dependency_7], ['react', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/kernel/routing', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/sessions/access.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2823156176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 407706767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #found;
            get found() {
              return this.#found;
            }
            #access;
            get access() {
              return this.#access;
            }
            load = async id => {
              if (this.#model && this.#model.id !== id) {
                this.#model = undefined;
              }
              this.#model = new _core.Session();
              this.#model.on('change', this.triggerEvent);
              const response = await this.#model.load({
                id
              });
              this.#access = !!response.users?.includes(_session.sessionWrapper.userId);
              this.#found = !!response.lesson && response.classRoomId;
              this.ready = true;
            };
            createChats = async () => {
              return await this.#model.access(_session.sessionWrapper.user.token);
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 774891343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
            }
            get error() {
              return _gclassroom.gclassroom.error;
            }
            get gclassroom() {
              return _gclassroom.gclassroom;
            }
            async validate(state, code) {
              try {
                this.fetching = true;
                await _gclassroom.gclassroom.callback(state, code);
                this.fetching = false;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/_context
      ********************************/

      ims.set('./views/_context', {
        hash: 688727710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useShareContext = exports.ShareContext = void 0;
          var _react = require("react");
          const ShareContext = exports.ShareContext = _react.default.createContext({});
          const useShareContext = () => _react.default.useContext(ShareContext);
          exports.useShareContext = useShareContext;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/empty-view
      **********************************/

      ims.set('./views/empty-view', {
        hash: 2796975375,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyView = void 0;
          var _react = require("react");
          var _context = require("./_context");
          const EmptyView = () => {
            const {
              texts
            } = (0, _context.useShareContext)();
            return _react.default.createElement("div", {
              className: "access__class"
            }, _react.default.createElement("img", {
              alt: "Shared class",
              src: "/assets/shared-class.png"
            }), _react.default.createElement("span", {
              className: "access-details"
            }, _react.default.createElement("h1", null, texts.empty.welcome), _react.default.createElement("p", null, _react.default.createElement("strong", null, texts.empty.info), _react.default.createElement("br", null), texts.empty.action)));
          };
          exports.EmptyView = EmptyView;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1510800734,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./_context");
          var _landing = require("./landing");
          var _emptyView = require("./empty-view");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const Control = !store.found ? _emptyView.EmptyView : _landing.default;
            return _react.default.createElement(_context.ShareContext.Provider, {
              value: {
                texts,
                store
              }
            }, _react.default.createElement(Control, null));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/landing
      *******************************/

      ims.set('./views/landing', {
        hash: 371531143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ShareLanding;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _context = require("./_context");
          function ShareLanding() {
            const {
              texts,
              store
            } = (0, _context.useShareContext)();
            const {
              model
            } = store;
            const [isFetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const googleLogin = async () => {
              try {
                setFetching(true);
                const response = await _session.sessionWrapper.signInWithGoogle();
                if (!response.status) {
                  const {
                    error
                  } = response;
                  if (error === 'POPUP_CLOSED_BY_USER') {
                    setFetching(false);
                  } else {
                    setError('Error trying to login with Google');
                  }
                  return;
                }
                handleClick();
              } catch (e) {
                console.error(e.message);
              }
            };
            const handleClick = async () => {
              try {
                if (store.access) return;
                setFetching(true);
                const response = await store.createChats();
                setFetching(false);
                if (!response.status) {
                  console.error(response.message);
                  return;
                }
                _routing.routing.pushState(`/chat/${response.data.chatId}`);
              } catch (e) {
                console.error(e.message);
              }
            };
            const title = store.access ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, model.lesson.name.toUpperCase()), _react.default.createElement("strong", null, texts.accessed)) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, texts.welcome), _react.default.createElement("p", null, _react.default.createElement("strong", null, model.lesson.name.toUpperCase(), " "), texts.shared, _react.default.createElement("br", null), texts.save));
            let buttons = undefined;
            if (!store.access) {
              buttons = !_session.sessionWrapper.logged ? _react.default.createElement(_components.Button, {
                icon: "google",
                onClick: googleLogin,
                loading: isFetching,
                label: "Google Sign In"
              }) : _react.default.createElement(_components.Button, {
                variant: "primary",
                onClick: handleClick,
                icon: "save",
                loading: isFetching,
                label: texts.action
              });
            }
            return _react.default.createElement("div", {
              className: "access__class"
            }, _react.default.createElement("img", {
              alt: "Shared class",
              src: "/assets/shared-class.png"
            }), _react.default.createElement("span", {
              className: "access-details"
            }, title, buttons));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJmb3VuZCIsImFjY2VzcyIsImlkIiwidW5kZWZpbmVkIiwiU2Vzc2lvbiIsIm9uIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJ1c2VycyIsImluY2x1ZGVzIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VySWQiLCJsZXNzb24iLCJjbGFzc1Jvb21JZCIsInJlYWR5IiwiY3JlYXRlQ2hhdHMiLCJ1c2VyIiwidG9rZW4iLCJfZ2NsYXNzcm9vbSIsImNvbnN0cnVjdG9yIiwiZ2NsYXNzcm9vbSIsImVycm9yIiwidmFsaWRhdGUiLCJzdGF0ZSIsImNvZGUiLCJmZXRjaGluZyIsImNhbGxiYWNrIiwiZSIsImNvbnNvbGUiLCJfcmVhY3QiLCJTaGFyZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNoYXJlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIkVtcHR5VmlldyIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImVtcHR5Iiwid2VsY29tZSIsImluZm8iLCJhY3Rpb24iLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfdWkiLCJfbGFuZGluZyIsIl9lbXB0eVZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIkNvbnRyb2wiLCJQcm92aWRlciIsInZhbHVlIiwiX2NvbXBvbmVudHMiLCJfcm91dGluZyIsIlNoYXJlTGFuZGluZyIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwiZ29vZ2xlTG9naW4iLCJzaWduSW5XaXRoR29vZ2xlIiwic3RhdHVzIiwiaGFuZGxlQ2xpY2siLCJtZXNzYWdlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJjaGF0SWQiLCJ0aXRsZSIsIkZyYWdtZW50IiwibmFtZSIsInRvVXBwZXJDYXNlIiwiYWNjZXNzZWQiLCJzaGFyZWQiLCJzYXZlIiwiYnV0dG9ucyIsImxvZ2dlZCIsIkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwibG9hZGluZyIsImxhYmVsIiwidmFyaWFudCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL19jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LXZpZXcudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5kaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDOztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkQsSUFBQWEsS0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLFFBQUEsR0FBQWxCLE9BQUE7VUFHTSxNQUFPTyxZQUFhLFNBQVFVLE1BQUEsQ0FBQUUsYUFBcUI7WUFDdEQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUFYLElBQUksR0FBRyxNQUFPWSxFQUFVLElBQUk7Y0FDM0IsSUFBSSxJQUFJLENBQUMsQ0FBQUgsS0FBTSxJQUFJLElBQUksQ0FBQyxDQUFBQSxLQUFNLENBQUNHLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHSSxTQUFTOztjQUd4QixJQUFJLENBQUMsQ0FBQUosS0FBTSxHQUFHLElBQUlKLEtBQUEsQ0FBQVMsT0FBTyxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1QsSUFBSSxDQUFDO2dCQUFFWTtjQUFFLENBQUUsQ0FBQztjQUUvQyxJQUFJLENBQUMsQ0FBQUQsTUFBTyxHQUFHLENBQUMsQ0FBQ00sUUFBUSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQ1osUUFBQSxDQUFBYSxjQUFjLENBQUNDLE1BQU0sQ0FBQztjQUVoRSxJQUFJLENBQUMsQ0FBQVgsS0FBTSxHQUFHLENBQUMsQ0FBQ08sUUFBUSxDQUFDSyxNQUFNLElBQUlMLFFBQVEsQ0FBQ00sV0FBVztjQUN2RCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ2xCLENBQUM7WUFFREMsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUNFLE1BQU0sQ0FBQ0osUUFBQSxDQUFBYSxjQUFjLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxDQUFDO1lBQzNELENBQUM7O1VBQ0R2QixPQUFBLENBQUFSLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0QsSUFBQVUsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUF1QyxXQUFBLEdBQUF2QyxPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRVSxNQUFBLENBQUFFLGFBQTJCO1lBQzVEcUIsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUVQRCxXQUFBLENBQUFFLFVBQVUsQ0FBQ2YsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUMzQztZQUVBLElBQUllLEtBQUtBLENBQUE7Y0FDUixPQUFPSCxXQUFBLENBQUFFLFVBQVUsQ0FBQ0MsS0FBSztZQUN4QjtZQUVBLElBQUlELFVBQVVBLENBQUE7Y0FDYixPQUFPRixXQUFBLENBQUFFLFVBQVU7WUFDbEI7WUFDQSxNQUFNRSxRQUFRQSxDQUFDQyxLQUFLLEVBQUVDLElBQUk7Y0FDekIsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNUCxXQUFBLENBQUFFLFVBQVUsQ0FBQ00sUUFBUSxDQUFDSCxLQUFLLEVBQUVDLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDQyxRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDWCxLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU9hLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0FqQyxPQUFBLENBQUFSLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkQsSUFBQTJDLE1BQUEsR0FBQWxELE9BQUE7VUFPTyxNQUFNbUQsWUFBWSxHQUFBcEMsT0FBQSxDQUFBb0MsWUFBQSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQW1CLENBQUM7VUFDN0QsTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQU1KLE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUNKLFlBQVksQ0FBQztVQUFDcEMsT0FBQSxDQUFBdUMsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JwRSxJQUFBSixNQUFBLEdBQUFsRCxPQUFBO1VBQ0EsSUFBQXdELFFBQUEsR0FBQXhELE9BQUE7VUFFTyxNQUFNeUQsU0FBUyxHQUFHQSxDQUFBLEtBQUs7WUFDN0IsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFGLGVBQWUsR0FBRTtZQUNuQyxPQUNDSixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QlYsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBS0UsR0FBRyxFQUFDLGNBQWM7Y0FBQ0MsR0FBRyxFQUFDO1lBQTBCLEVBQUcsRUFDekRaLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFnQixHQUMvQlYsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsYUFBS0QsS0FBSyxDQUFDSyxLQUFLLENBQUNDLE9BQU8sQ0FBTSxFQUM5QmQsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsWUFDQ1QsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsaUJBQVNELEtBQUssQ0FBQ0ssS0FBSyxDQUFDRSxJQUFJLENBQVUsRUFDbkNmLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLFlBQU0sRUFDTEQsS0FBSyxDQUFDSyxLQUFLLENBQUNHLE1BQU0sQ0FDaEIsQ0FDRSxDQUNGO1VBRVIsQ0FBQztVQUFDbkQsT0FBQSxDQUFBMEMsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRixJQUFBUCxNQUFBLEdBQUFsRCxPQUFBO1VBQ0EsSUFBQW1FLE1BQUEsR0FBQW5FLE9BQUE7VUFDQSxJQUFBb0UsZUFBQSxHQUFBcEUsT0FBQTtVQUdBLElBQUFxRSxHQUFBLEdBQUFyRSxPQUFBO1VBQ0EsSUFBQXdELFFBQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBc0UsUUFBQSxHQUFBdEUsT0FBQTtVQUNBLElBQUF1RSxVQUFBLEdBQUF2RSxPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUN0QixNQUFNLENBQUM4QixLQUFLLEVBQUVxQyxRQUFRLENBQUMsR0FBR3RCLE1BQUEsQ0FBQUUsT0FBSyxDQUFDcUIsUUFBUSxDQUFDcEUsS0FBSyxDQUFDOEIsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3VDLFVBQVUsRUFBRWhCLEtBQUssQ0FBQyxHQUFHLElBQUFTLE1BQUEsQ0FBQVEsUUFBUSxFQUFDUCxlQUFBLENBQUFRLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELElBQUFWLE1BQUEsQ0FBQVcsU0FBUyxFQUFDLENBQUN6RSxLQUFLLENBQUMsRUFBRSxNQUFNbUUsUUFBUSxDQUFDbkUsS0FBSyxDQUFDOEIsS0FBSyxDQUFDLENBQUM7WUFFL0MsSUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBQ3VDLFVBQVUsRUFBRSxPQUFPeEIsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsQ0FBQ1UsR0FBQSxDQUFBVSxVQUFVO2NBQUNqQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWhFLE1BQU1rQyxPQUFPLEdBQUcsQ0FBQzNFLEtBQUssQ0FBQ2dCLEtBQUssR0FBR2tELFVBQUEsQ0FBQWQsU0FBUyxHQUFHYSxRQUFBLENBQUFsQixPQUFZO1lBQ3ZELE9BQ0NGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLENBQUNILFFBQUEsQ0FBQUwsWUFBWSxDQUFDOEIsUUFBUTtjQUFDQyxLQUFLLEVBQUU7Z0JBQUV4QixLQUFLO2dCQUFFckQ7Y0FBSztZQUFFLEdBQzdDNkMsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsQ0FBQ3FCLE9BQU8sT0FBRyxDQUNZO1VBRTFCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQSxJQUFBOUIsTUFBQSxHQUFBbEQsT0FBQTtVQUNBLElBQUFtRixXQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQW9GLFFBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBa0IsUUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUF3RCxRQUFBLEdBQUF4RCxPQUFBO1VBRWMsU0FBVXFGLFlBQVlBLENBQUE7WUFDbkMsTUFBTTtjQUFFM0IsS0FBSztjQUFFckQ7WUFBSyxDQUFFLEdBQUcsSUFBQW1ELFFBQUEsQ0FBQUYsZUFBZSxHQUFFO1lBQzFDLE1BQU07Y0FBRWxDO1lBQUssQ0FBRSxHQUFHZixLQUFLO1lBQ3ZCLE1BQU0sQ0FBQ2lGLFVBQVUsRUFBRUMsV0FBVyxDQUFDLEdBQUdyQyxNQUFBLENBQUFFLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDL0IsS0FBSyxFQUFFOEMsUUFBUSxDQUFDLEdBQUd0QyxNQUFBLENBQUFFLE9BQUssQ0FBQ3FCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTWdCLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUIsSUFBSTtnQkFDSEYsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTNELFFBQVEsR0FBRyxNQUFNVixRQUFBLENBQUFhLGNBQWMsQ0FBQzJELGdCQUFnQixFQUFFO2dCQUN4RCxJQUFJLENBQUM5RCxRQUFRLENBQUMrRCxNQUFNLEVBQUU7a0JBQ3JCLE1BQU07b0JBQUVqRDtrQkFBSyxDQUFFLEdBQUdkLFFBQVE7a0JBQzFCLElBQUljLEtBQUssS0FBSyxzQkFBc0IsRUFBRTtvQkFDckM2QyxXQUFXLENBQUMsS0FBSyxDQUFDO21CQUNsQixNQUFNO29CQUNOQyxRQUFRLENBQUMsbUNBQW1DLENBQUM7O2tCQUU5Qzs7Z0JBRURJLFdBQVcsRUFBRTtlQUNiLENBQUMsT0FBTzVDLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQzZDLE9BQU8sQ0FBQzs7WUFFMUIsQ0FBQztZQUNELE1BQU1ELFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUIsSUFBSTtnQkFDSCxJQUFJdkYsS0FBSyxDQUFDaUIsTUFBTSxFQUFFO2dCQUVsQmlFLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0zRCxRQUFRLEdBQUcsTUFBTXZCLEtBQUssQ0FBQytCLFdBQVcsRUFBRTtnQkFDMUNtRCxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNsQixJQUFJLENBQUMzRCxRQUFRLENBQUMrRCxNQUFNLEVBQUU7a0JBQ3JCMUMsT0FBTyxDQUFDUCxLQUFLLENBQUNkLFFBQVEsQ0FBQ2lFLE9BQU8sQ0FBQztrQkFDL0I7O2dCQUdEVCxRQUFBLENBQUFVLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLFNBQVNuRSxRQUFRLENBQUNvRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDO2VBQ2xELENBQUMsT0FBT2pELENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDUCxLQUFLLENBQUNNLENBQUMsQ0FBQzZDLE9BQU8sQ0FBQzs7WUFFMUIsQ0FBQztZQUVELE1BQU1LLEtBQUssR0FBRzdGLEtBQUssQ0FBQ2lCLE1BQU0sR0FDekI0QixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFBVCxNQUFBLENBQUFFLE9BQUEsQ0FBQStDLFFBQUEsUUFDQ2pELE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLGFBQUt2QyxLQUFLLENBQUNhLE1BQU0sQ0FBQ21FLElBQUksQ0FBQ0MsV0FBVyxFQUFFLENBQU0sRUFDMUNuRCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxpQkFBU0QsS0FBSyxDQUFDNEMsUUFBUSxDQUFVLENBQy9CLEdBRUhwRCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFBVCxNQUFBLENBQUFFLE9BQUEsQ0FBQStDLFFBQUEsUUFDQ2pELE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBLGFBQUtELEtBQUssQ0FBQ00sT0FBTyxDQUFNLEVBQ3hCZCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxZQUNDVCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxpQkFBU3ZDLEtBQUssQ0FBQ2EsTUFBTSxDQUFDbUUsSUFBSSxDQUFDQyxXQUFXLEVBQUUsRSxJQUFXLEVBQ2xEM0MsS0FBSyxDQUFDNkMsTUFBTSxFQUNickQsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUEsWUFBTSxFQUNMRCxLQUFLLENBQUM4QyxJQUFJLENBQ1IsQ0FFTDtZQUVELElBQUlDLE9BQU8sR0FBR2pGLFNBQVM7WUFDdkIsSUFBSSxDQUFDbkIsS0FBSyxDQUFDaUIsTUFBTSxFQUFFO2NBQ2xCbUYsT0FBTyxHQUFHLENBQUN2RixRQUFBLENBQUFhLGNBQWMsQ0FBQzJFLE1BQU0sR0FDL0J4RCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFDd0IsV0FBQSxDQUFBd0IsTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Z0JBQUNDLE9BQU8sRUFBRXBCLFdBQVc7Z0JBQUVxQixPQUFPLEVBQUV4QixVQUFVO2dCQUFFeUIsS0FBSyxFQUFDO2NBQWdCLEVBQUcsR0FFMUY3RCxNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQSxDQUFDd0IsV0FBQSxDQUFBd0IsTUFBTTtnQkFBQ0ssT0FBTyxFQUFDLFNBQVM7Z0JBQUNILE9BQU8sRUFBRWpCLFdBQVc7Z0JBQUVnQixJQUFJLEVBQUMsTUFBTTtnQkFBQ0UsT0FBTyxFQUFFeEIsVUFBVTtnQkFBRXlCLEtBQUssRUFBRXJELEtBQUssQ0FBQ1E7Y0FBTSxFQUNwRzs7WUFHRixPQUNDaEIsTUFBQSxDQUFBRSxPQUFBLENBQUFPLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JWLE1BQUEsQ0FBQUUsT0FBQSxDQUFBTyxhQUFBO2NBQUtFLEdBQUcsRUFBQyxjQUFjO2NBQUNDLEdBQUcsRUFBQztZQUEwQixFQUFHLEVBQ3pEWixNQUFBLENBQUFFLE9BQUEsQ0FBQU8sYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJzQyxLQUFLLEVBQ0xPLE9BQU8sQ0FDRixDQUNGO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=