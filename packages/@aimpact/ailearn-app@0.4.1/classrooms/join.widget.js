System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@aimpact/ailearn-app@0.4.1/i18n.ts", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/code-verification", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@aimpact/ailearn-app@0.4.1/components/navbar-header.code", "@aimpact/ailearn-app@0.4.1/config", "@beyond-js/react-18-widgets@1.1.4/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Member, Ready, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    TokenForm: void 0,
    Header: void 0,
    View: void 0,
    Member: void 0,
    Ready: void 0
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
    }, function (_beyondJsReactive205Model) {
      dependency_4 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_5 = _beyondJsKernel0112Texts;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_7 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_aimpactAilearnApp041I18nTs) {
      dependency_8 = _aimpactAilearnApp041I18nTs;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_11 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsKernel0112Routing) {
      dependency_12 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7CodeVerification) {
      dependency_13 = _pragmateUi100Beta7CodeVerification;
    }, function (_pragmateUi100Beta7Components) {
      dependency_14 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_15 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_17 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_18 = _aimpactAilearnApp041ModelWrapper;
    }, function (_aimpactAilearnApp041ComponentsNavbarHeaderCode) {
      dependency_19 = _aimpactAilearnApp041ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp041Config) {
      dependency_20 = _aimpactAilearnApp041Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_21 = _beyondJsReact18Widgets114Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_7], ['@aimpact/ailearn-app/i18n.ts', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/code-verification', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/model/wrapper', dependency_18], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/classrooms/join.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 198384358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
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
              this.#store.load(this.uri.qs.get('code'));
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2170401399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get TOTAL_CODES() {
              return 7;
            }
            #code;
            get code() {
              return this.#code;
            }
            set code(value) {
              this.#code = value;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get validCode() {
              return this.#code && this.#code.length === this.TOTAL_CODES;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#model = new _classrooms.Classroom({});
            }
            load(code) {
              if (code) {
                this.#code = code;
              }
              super.ready = true;
            }
            clear() {
              super.ready = false;
            }
            async loadUser() {
              await _session.sessionWrapper.user.load();
            }
            async refresh() {
              if (!this.#code) {
                console.warn('No classroom code');
                return;
              }
              await this.#model.load({
                code: this.#code
              });
              return this.#model;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/animated-div
      ************************************/

      ims.set('./views/animated-div', {
        hash: 2258000075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            cls
          } = {
            children: null,
            cls: ''
          }) {
            return React.createElement(_framerMotion.motion.div, {
              className: cls,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3,
                  width: 'auto'
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4056540268,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useJoinContext = exports.JoinContext = void 0;
          var _react = require("react");
          const JoinContext = exports.JoinContext = _react.default.createContext({});
          const useJoinContext = () => _react.default.useContext(JoinContext);
          exports.useJoinContext = useJoinContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 3192112787,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenForm = TokenForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _codeVerification = require("pragmate-ui/code-verification");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function TokenForm() {
            const {
              texts,
              store,
              setView
            } = (0, _context.useJoinContext)();
            const [token, setToken] = React.useState(store.code ?? '');
            const [error, setError] = React.useState('');
            const [styleAlert, setStyleAlert] = React.useState('error');
            const handleChange = code => {
              setToken(code);
              setError('');
            };
            const disabled = token.length !== 7;
            const onSubmit = async () => {
              try {
                store.code = token;
                const response = await store.model.join({
                  code: token
                });
                if (response.data.status === 'PENDING') {
                  _toast.toast.success(texts.messages.pending);
                  setView('ready');
                  return;
                }
                await store.loadUser();
                _toast.toast.success(texts.messages.success);
                _routing.routing.pushState(`/classrooms/view/${response.data.classroom.id}`);
              } catch (e) {
                if (e.message === 'ALREADY_WAITING') {
                  setView('ready');
                  return;
                }
                if (e.message === 'ALREADY_MEMBER') {
                  setView('member');
                  return;
                }
                const style = ['ALREADY_WAITING'].includes(e?.message) ? 'warning' : 'danger';
                setStyleAlert(style);
                setError(texts.errors[e?.message?.toString()] ?? texts.errors.ERROR_PUBLISHING);
              }
            };
            return React.createElement("div", {
              className: "token-page__container"
            }, React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "token-form__container"
            }, React.createElement("header", null, React.createElement("h1", {
              className: "animate glow delay-2"
            }, texts.title), React.createElement("span", {
              className: "p1"
            }, texts.form.subtitle)), React.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "error"
            }), React.createElement(_codeVerification.InputCode, {
              length: store.TOTAL_CODES,
              value: token,
              name: "name",
              type: "text",
              onCodeFull: handleChange,
              required: true
            }), React.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, texts.action.join)), React.createElement("div", {
              className: "token-info__container flex-container flex-column text-center"
            }, React.createElement("p", null, texts.info.help)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1987354350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useJoinContext)();
            return React.createElement("section", null, React.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.classrooms, '/classrooms/list'], [texts.breadcrumb.join, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2838419858,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _ready = require("./ready");
          var _member = require("./member");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const [view, setView] = React.useState('form');
            if (!ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            // const Control = joined ? Ready : TokenForm;
            const value = {
              texts: store.texts,
              view,
              setView,
              store
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              condition: view,
              ternary: true,
              options: {
                ready: React.createElement(_ready.Ready, null),
                member: React.createElement(_member.Member, null),
                form: React.createElement(_form.TokenForm, null)
              }
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/member
      ******************************/

      ims.set('./views/member', {
        hash: 4023145744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Member = Member;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _animatedDiv = require("./animated-div");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Member({}) {
            const {
              store,
              texts
            } = (0, _context.useJoinContext)();
            const {
              title,
              action
            } = texts.member;
            const onClick = async () => {
              _routing.routing.pushState(`/classrooms/view/${store.code}`);
            };
            const cls = `ready-container `;
            return React.createElement(_ui.PageContainer, {
              className: cls
            }, React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("h3", null, title), React.createElement("div", {
              className: "actions__container"
            }, React.createElement(_components.Button, {
              onClick: onClick,
              variant: "primary",
              className: "btn-middle"
            }, action))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/ready
      *****************************/

      ims.set('./views/ready', {
        hash: 332653792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Ready = Ready;
          var React = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _animatedDiv = require("./animated-div");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Ready({}) {
            const {
              store,
              texts,
              view
            } = (0, _context.useJoinContext)();
            const {
              title,
              description
            } = texts.ready;
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState('');
            const onRefresh = async () => {
              try {
                setFetching(true);
                const classroom = await store.refresh();
                await _session.sessionWrapper.user.load();
                _routing.routing.pushState(`/classrooms/view/${store.code}`);
              } catch (e) {
                if (e.code === 105 || e.code === 247) {
                  setError(texts.errors['ALREADY_WAITING']);
                  return;
                }
              } finally {
                setFetching(false);
              }
            };
            const cls = `ready-container ${fetching ? ' is-fetching' : ''}`;
            return React.createElement(_ui.PageContainer, {
              className: cls
            }, React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("h3", null, title), React.createElement("span", null, description), React.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), React.createElement("div", {
              className: "actions__container"
            }, React.createElement(_components.Button, {
              disabled: fetching,
              onClick: onRefresh,
              variant: "primary",
              className: "btn-middle"
            }, store.globalTexts.actions.refresh))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/form",
        "from": "TokenForm",
        "name": "TokenForm"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/member",
        "from": "Member",
        "name": "Member"
      }, {
        "im": "./views/ready",
        "from": "Ready",
        "name": "Ready"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'TokenForm') && _export("TokenForm", TokenForm = require ? require('./views/form').TokenForm : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Member') && _export("Member", Member = require ? require('./views/member').Member : value);
        (require || prop === 'Ready') && _export("Ready", Ready = require ? require('./views/ready').Ready : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfc2Vzc2lvbiIsIl9jbGFzc3Jvb21zIiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJUT1RBTF9DT0RFUyIsImNvZGUiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJ2YWxpZENvZGUiLCJsZW5ndGgiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJDbGFzc3Jvb20iLCJsb2FkVXNlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInJlZnJlc2giLCJjb25zb2xlIiwid2FybiIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ3aWR0aCIsInkiLCJleGl0IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9yb3V0aW5nIiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX3RvYXN0IiwiX2NvbnRleHQiLCJUb2tlbkZvcm0iLCJzZXRWaWV3IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0eWxlQWxlcnQiLCJzZXRTdHlsZUFsZXJ0IiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwiam9pbiIsImRhdGEiLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsInBlbmRpbmciLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xhc3Nyb29tIiwiaWQiLCJlIiwibWVzc2FnZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJGb3JtIiwidGl0bGUiLCJmb3JtIiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsIklucHV0Q29kZSIsIm5hbWUiLCJ0eXBlIiwib25Db2RlRnVsbCIsInJlcXVpcmVkIiwiQnV0dG9uIiwiYWN0aW9uIiwiaW5mbyIsImhlbHAiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsImNsYXNzcm9vbXMiLCJfaG9va3MiLCJfcmVhZHkiLCJfbWVtYmVyIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJ2aWV3IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiUHJvdmlkZXIiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwiUmVhZHkiLCJtZW1iZXIiLCJNZW1iZXIiLCJfYW5pbWF0ZWREaXYiLCJvbkNsaWNrIiwiUGFnZUNvbnRhaW5lciIsImRlc2NyaXB0aW9uIiwic2V0RmV0Y2hpbmciLCJvblJlZnJlc2giLCJhY3Rpb25zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21lbWJlci50c3giLCIvdHMvdmlld3MvcmVhZHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQztZQUNBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQWUsTUFBQSxHQUFBbEIsT0FBQTtVQUVBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLGVBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FB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RCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNakQsU0FBUyxHQUFHLE1BQU0vRixLQUFLLENBQUN1QyxPQUFPLEVBQUU7Z0JBQ3ZDLE1BQU12QixRQUFBLENBQUFxQixjQUFjLENBQUNDLElBQUksQ0FBQ2hDLElBQUksRUFBRTtnQkFDaEM2RCxRQUFBLENBQUEwQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxvQkFBb0I5RixLQUFLLENBQUNzQixJQUFJLEVBQUUsQ0FBQztlQUNuRCxDQUFDLE9BQU8yRSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSUEsQ0FBQyxDQUFDM0UsSUFBSSxLQUFLLEdBQUcsSUFBSTJFLENBQUMsQ0FBQzNFLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQ3JDeUQsUUFBUSxDQUFDdEQsS0FBSyxDQUFDNEUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7a0JBQ3pDOztlQUVELFNBQVM7Z0JBQ1QyQyxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTWxHLEdBQUcsR0FBRyxtQkFBbUJxRixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUUvRCxPQUNDekYsS0FBQSxDQUFBSyxhQUFBLENBQUNtQixHQUFBLENBQUE0RSxhQUFhO2NBQUM1RixTQUFTLEVBQUVKO1lBQUcsR0FDNUJKLEtBQUEsQ0FBQUssYUFBQSxDQUFDNkYsWUFBQSxDQUFBaEcsV0FBVyxRQUNYRixLQUFBLENBQUFLLGFBQUEsYUFBSzBELEtBQUssQ0FBTSxFQUNoQi9ELEtBQUEsQ0FBQUssYUFBQSxlQUFPZ0csV0FBVyxDQUFRLEVBQzFCckcsS0FBQSxDQUFBSyxhQUFBLENBQUNtQixHQUFBLENBQUEwQyxhQUFhO2NBQUM5QixLQUFLLEVBQUVBLEtBQUs7Y0FBRStCLE9BQU8sRUFBQztZQUFTLEVBQUcsRUFDakRuRSxLQUFBLENBQUFLLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9CLEdBQ2xDUixLQUFBLENBQUFLLGFBQUEsQ0FBQ3NCLFdBQUEsQ0FBQThDLE1BQU07Y0FBQ2hDLFFBQVEsRUFBRWdELFFBQVE7Y0FBRVUsT0FBTyxFQUFFSSxTQUFTO2NBQUVwQyxPQUFPLEVBQUMsU0FBUztjQUFDM0QsU0FBUyxFQUFDO1lBQVksR0FDdEZsRCxLQUFLLENBQUN3QixXQUFXLENBQUMwSCxPQUFPLENBQUMzRyxPQUFPLENBQzFCLENBQ0osQ0FDTyxDQUNDO1VBRWxCIiwiaWdub3JlTGlzdCI6W119