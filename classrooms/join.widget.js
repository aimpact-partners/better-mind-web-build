System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.4/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.4.4/session", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms", "@aimpact/ailearn-app@0.3.32/i18n.ts", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.32/components/ui", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/code-verification", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.32/components/navbar-header.code", "@aimpact/ailearn-app@0.3.32/config", "@beyond-js/react-18-widgets@1.1.4/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Member, Ready, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive204Model) {
      dependency_4 = _beyondJsReactive204Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_5 = _beyondJsKernel0112Texts;
    }, function (_aimpactChatSdk144Session) {
      dependency_6 = _aimpactChatSdk144Session;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_7 = _aimpactAilearnSdk110EntitiesClassrooms;
    }, function (_aimpactAilearnApp0332I18nTs) {
      dependency_8 = _aimpactAilearnApp0332I18nTs;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0332ComponentsUi;
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
    }, function (_aimpactAilearnApp0332ComponentsNavbarHeaderCode) {
      dependency_18 = _aimpactAilearnApp0332ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0332Config) {
      dependency_19 = _aimpactAilearnApp0332Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_20 = _beyondJsReact18Widgets114Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_7], ['@aimpact/ailearn-app/i18n.ts', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/code-verification', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/classrooms/join.widget');
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
        hash: 746371020,
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
          var _image = require("pragmate-ui/image");
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
            }, React.createElement("header", null, React.createElement(_image.Image, {
              className: "animate glow delay-1",
              src: "/assets/RVD.AI.Branding.png",
              alt: "RVD.AI"
            }), React.createElement("h1", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfc2Vzc2lvbiIsIl9jbGFzc3Jvb21zIiwiX2kxOG4iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJUT1RBTF9DT0RFUyIsImNvZGUiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJ2YWxpZENvZGUiLCJsZW5ndGgiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJDbGFzc3Jvb20iLCJsb2FkVXNlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInJlZnJlc2giLCJjb25zb2xlIiwid2FybiIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ3aWR0aCIsInkiLCJleGl0IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9yb3V0aW5nIiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX2ltYWdlIiwiX3RvYXN0IiwiX2NvbnRleHQiLCJUb2tlbkZvcm0iLCJzZXRWaWV3IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0eWxlQWxlcnQiLCJzZXRTdHlsZUFsZXJ0IiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwiam9pbiIsImRhdGEiLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsInBlbmRpbmciLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xhc3Nyb29tIiwiaWQiLCJlIiwibWVzc2FnZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJGb3JtIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImZvcm0iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiSW5wdXRDb2RlIiwibmFtZSIsInR5cGUiLCJvbkNvZGVGdWxsIiwicmVxdWlyZWQiLCJCdXR0b24iLCJhY3Rpb24iLCJpbmZvIiwiaGVscCIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tcyIsIl9ob29rcyIsIl9yZWFkeSIsIl9tZW1iZXIiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsInZpZXciLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJSZWFkeSIsIm1lbWJlciIsIk1lbWJlciIsIl9hbmltYXRlZERpdiIsIm9uQ2xpY2siLCJQYWdlQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJzZXRGZXRjaGluZyIsIm9uUmVmcmVzaCIsImFjdGlvbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbWVtYmVyLnRzeCIsIi90cy92aWV3cy9yZWFkeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQztZQUNBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQWUsTUFBQSxHQUFBbEIsT0FBQTtVQUVBLElBQUFtQixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLGVBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixXQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLEtBQUEsR0FBQXZCLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFXLE1BQUEsQ0FBQU0sYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sQ0FBQztZQUNUO1lBRUEsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsSUFBSUEsSUFBSUEsQ0FBQ0MsS0FBSztjQUNiLElBQUksQ0FBQyxDQUFBRCxJQUFLLEdBQUdDLEtBQUs7WUFDbkI7WUFDQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBT04sS0FBQSxDQUFBTSxXQUFXLENBQUNDLEtBQUs7WUFDekI7WUFDQSxJQUFJQyxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUosSUFBSyxJQUFJLElBQUksQ0FBQyxDQUFBQSxJQUFLLENBQUNLLE1BQU0sS0FBSyxJQUFJLENBQUNOLFdBQVc7WUFDNUQ7WUFFQSxDQUFBSSxLQUFNLEdBQStCLElBQUlYLE1BQUEsQ0FBQWMsWUFBWSxDQUFDYixlQUFBLENBQUFjLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlMLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVGLEtBQUs7WUFDMUI7WUFFQSxJQUFJUSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQU4sS0FBTSxDQUFDTSxLQUFLLElBQUliLEtBQUEsQ0FBQU0sV0FBVyxDQUFDTyxLQUFLO1lBQzdEO1lBRUFDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDLElBQUksQ0FBQyxDQUFBZCxLQUFNLEdBQUcsSUFBSUgsV0FBQSxDQUFBa0IsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNoQztZQUVBN0IsSUFBSUEsQ0FBQ2dCLElBQUk7Y0FDUixJQUFJQSxJQUFJLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLENBQUFBLElBQUssR0FBR0EsSUFBSTs7Y0FFbEIsS0FBSyxDQUFDUyxLQUFLLEdBQUcsSUFBSTtZQUNuQjtZQUNBcEIsS0FBS0EsQ0FBQTtjQUNKLEtBQUssQ0FBQ29CLEtBQUssR0FBRyxLQUFLO1lBQ3BCO1lBRUEsTUFBTUssUUFBUUEsQ0FBQTtjQUNiLE1BQU1wQixRQUFBLENBQUFxQixjQUFjLENBQUNDLElBQUksQ0FBQ2hDLElBQUksRUFBRTtZQUNqQztZQUVBLE1BQU1pQyxPQUFPQSxDQUFBO2NBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBakIsSUFBSyxFQUFFO2dCQUNoQmtCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUNqQzs7Y0FHRCxNQUFNLElBQUksQ0FBQyxDQUFBckIsS0FBTSxDQUFDZCxJQUFJLENBQUM7Z0JBQUVnQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUFBO2NBQUssQ0FBRSxDQUFDO2NBQzVDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7O1VBQ0FSLE9BQUEsQ0FBQVYsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZFRCxJQUFBd0MsS0FBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFnRCxhQUFBLEdBQUFoRCxPQUFBO1VBRU0sU0FBVWlELFdBQVdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQztVQUFHLElBQXlCO1lBQUVELFFBQVEsRUFBRSxJQUFJO1lBQUVDLEdBQUcsRUFBRTtVQUFFLENBQUU7WUFDOUYsT0FDQ0osS0FBQSxDQUFBSyxhQUFBLENBQUNKLGFBQUEsQ0FBQUssTUFBTSxDQUFDQyxHQUFHO2NBQ1ZDLFNBQVMsRUFBRUosR0FBRztjQUNkSyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JDLEtBQUssRUFBRSxHQUFHO2tCQUNWQyxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RDLENBQUMsRUFBRTtlQUNIO2NBQ0RDLElBQUksRUFBRTtnQkFDTEwsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RILE9BQU8sRUFBRTs7WUFDVCxHQUVBUCxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQWUsTUFBQSxHQUFBakUsT0FBQTtVQU9PLE1BQU1rRSxXQUFXLEdBQUFqRCxPQUFBLENBQUFpRCxXQUFBLEdBQUdELE1BQUEsQ0FBQUUsT0FBSyxDQUFDQyxhQUFhLENBQWUsRUFBa0IsQ0FBQztVQUN6RSxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osV0FBVyxDQUFDO1VBQUNqRCxPQUFBLENBQUFvRCxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUmxFLElBQUFFLEdBQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUF5RSxpQkFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLEtBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsTUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxNQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQStDLEtBQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBOEUsUUFBQSxHQUFBOUUsT0FBQTtVQUNPO1VBQVUsU0FDUitFLFNBQVNBLENBQUE7WUFDakIsTUFBTTtjQUFFakQsS0FBSztjQUFFekIsS0FBSztjQUFFMkU7WUFBTyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBVCxjQUFjLEdBQUU7WUFDbEQsTUFBTSxDQUFDWSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbkMsS0FBSyxDQUFDb0MsUUFBUSxDQUFDOUUsS0FBSyxDQUFDc0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMxRCxNQUFNLENBQUN5RCxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHdEMsS0FBSyxDQUFDb0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUNHLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd4QyxLQUFLLENBQUNvQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRTNELE1BQU1LLFlBQVksR0FBRzdELElBQUksSUFBRztjQUMzQnVELFFBQVEsQ0FBQ3ZELElBQUksQ0FBQztjQUNkMEQsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNSSxRQUFRLEdBQUdSLEtBQUssQ0FBQ2pELE1BQU0sS0FBSyxDQUFDO1lBQ25DLE1BQU0wRCxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUEwQjtjQUMxQyxJQUFJO2dCQUNIckYsS0FBSyxDQUFDc0IsSUFBSSxHQUFHc0QsS0FBSztnQkFDbEIsTUFBTVUsUUFBUSxHQUFHLE1BQU10RixLQUFLLENBQUNvQixLQUFLLENBQUNtRSxJQUFJLENBQUM7a0JBQUVqRSxJQUFJLEVBQUVzRDtnQkFBSyxDQUFFLENBQUM7Z0JBRXhELElBQUlVLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDQyxNQUFNLEtBQUssU0FBUyxFQUFFO2tCQUN2Q2pCLE1BQUEsQ0FBQWtCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDbEUsS0FBSyxDQUFDbUUsUUFBUSxDQUFDQyxPQUFPLENBQUM7a0JBQ3JDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQztrQkFDaEI7O2dCQUdELE1BQU0zRSxLQUFLLENBQUNvQyxRQUFRLEVBQUU7Z0JBQ3RCb0MsTUFBQSxDQUFBa0IsS0FBSyxDQUFDQyxPQUFPLENBQUNsRSxLQUFLLENBQUNtRSxRQUFRLENBQUNELE9BQU8sQ0FBQztnQkFDckN4QixRQUFBLENBQUEyQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxvQkFBb0JULFFBQVEsQ0FBQ0UsSUFBSSxDQUFDUSxTQUFTLENBQUNDLEVBQUUsRUFBRSxDQUFDO2VBQ25FLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYLElBQUlBLENBQUMsQ0FBQ0MsT0FBTyxLQUFLLGlCQUFpQixFQUFFO2tCQUNwQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUM7a0JBQ2hCOztnQkFFRCxJQUFJdUIsQ0FBQyxDQUFDQyxPQUFPLEtBQUssZ0JBQWdCLEVBQUU7a0JBQ25DeEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztrQkFDakI7O2dCQUVELE1BQU15QixLQUFLLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxRQUFRLENBQUNILENBQUMsRUFBRUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVE7Z0JBQzdFakIsYUFBYSxDQUFDa0IsS0FBSyxDQUFDO2dCQUNwQnBCLFFBQVEsQ0FBQ3ZELEtBQUssQ0FBQzZFLE1BQU0sQ0FBQ0osQ0FBQyxFQUFFQyxPQUFPLEVBQUVJLFFBQVEsRUFBRSxDQUFDLElBQUk5RSxLQUFLLENBQUM2RSxNQUFNLENBQUNFLGdCQUFnQixDQUFDOztZQUVqRixDQUFDO1lBRUQsT0FDQzlELEtBQUEsQ0FBQUssYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBdUIsR0FDckNSLEtBQUEsQ0FBQUssYUFBQSxDQUFDdUIsS0FBQSxDQUFBbUMsSUFBSTtjQUFDcEIsUUFBUSxFQUFFQSxRQUFRO2NBQUVuQyxTQUFTLEVBQUM7WUFBdUIsR0FDMURSLEtBQUEsQ0FBQUssYUFBQSxpQkFDQ0wsS0FBQSxDQUFBSyxhQUFBLENBQUN3QixNQUFBLENBQUFtQyxLQUFLO2NBQUN4RCxTQUFTLEVBQUMsc0JBQXNCO2NBQUN5RCxHQUFHLEVBQUMsNkJBQTZCO2NBQUNDLEdBQUcsRUFBQztZQUFRLEVBQUcsRUFDekZsRSxLQUFBLENBQUFLLGFBQUE7Y0FBSUcsU0FBUyxFQUFDO1lBQXNCLEdBQUV6QixLQUFLLENBQUNvRixLQUFLLENBQU0sRUFDdkRuRSxLQUFBLENBQUFLLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQUksR0FBRXpCLEtBQUssQ0FBQ3FGLElBQUksQ0FBQ0MsUUFBUSxDQUFRLENBQ3pDLEVBRVRyRSxLQUFBLENBQUFLLGFBQUEsQ0FBQ21CLEdBQUEsQ0FBQThDLGFBQWE7Y0FBQ2pDLEtBQUssRUFBRUEsS0FBSztjQUFFa0MsT0FBTyxFQUFDO1lBQU8sRUFBRyxFQUMvQ3ZFLEtBQUEsQ0FBQUssYUFBQSxDQUFDcUIsaUJBQUEsQ0FBQThDLFNBQVM7Y0FDVHZGLE1BQU0sRUFBRTNCLEtBQUssQ0FBQ3FCLFdBQVc7Y0FDekJFLEtBQUssRUFBRXFELEtBQUs7Y0FDWnVDLElBQUksRUFBQyxNQUFNO2NBQ1hDLElBQUksRUFBQyxNQUFNO2NBQ1hDLFVBQVUsRUFBRWxDLFlBQVk7Y0FDeEJtQyxRQUFRO1lBQUEsRUFDUCxFQUNGNUUsS0FBQSxDQUFBSyxhQUFBLENBQUNzQixXQUFBLENBQUFrRCxNQUFNO2NBQUNuQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRTZCLE9BQU8sRUFBQyxTQUFTO2NBQUNHLElBQUksRUFBQztZQUFRLEdBQ3pEM0YsS0FBSyxDQUFDK0YsTUFBTSxDQUFDakMsSUFBSSxDQUNWLENBQ0gsRUFDUDdDLEtBQUEsQ0FBQUssYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBOEQsR0FDNUVSLEtBQUEsQ0FBQUssYUFBQSxZQUFJdEIsS0FBSyxDQUFDZ0csSUFBSSxDQUFDQyxJQUFJLENBQUssQ0FDbkIsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlFQSxJQUFBaEYsS0FBQSxHQUFBL0MsT0FBQTtVQUNBLElBQUFnSSxhQUFBLEdBQUFoSSxPQUFBO1VBRUEsSUFBQThFLFFBQUEsR0FBQTlFLE9BQUE7VUFFTztVQUFVLFNBQVVpSSxNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRW5HO1lBQUssQ0FBRSxHQUFHLElBQUFnRCxRQUFBLENBQUFULGNBQWMsR0FBRTtZQUNsQyxPQUNDdEIsS0FBQSxDQUFBSyxhQUFBLGtCQUNDTCxLQUFBLENBQUFLLGFBQUEsQ0FBQzRFLGFBQUEsQ0FBQUUsWUFBWTtjQUNaQyxVQUFVLEVBQUUsQ0FDWCxDQUFDckcsS0FBSyxDQUFDcUcsVUFBVSxDQUFDQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsRUFDakQsQ0FBQ3RHLEtBQUssQ0FBQ3FHLFVBQVUsQ0FBQ3ZDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDM0IsRUFDYyxDQUNQO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUE3QyxLQUFBLEdBQUEvQyxPQUFBO1VBQ0EsSUFBQThFLFFBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBdUUsR0FBQSxHQUFBdkUsT0FBQTtVQUVBLElBQUFxSSxNQUFBLEdBQUFySSxPQUFBO1VBQ0EsSUFBQTJFLEtBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBc0ksTUFBQSxHQUFBdEksT0FBQTtVQUNBLElBQUF1SSxPQUFBLEdBQUF2SSxPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUMrQixLQUFLLEVBQUVvRyxRQUFRLENBQUMsR0FBR3pGLEtBQUssQ0FBQ29DLFFBQVEsQ0FBQzlFLEtBQUssQ0FBQytCLEtBQUssQ0FBQztZQUNyRCxJQUFBaUcsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ3BJLEtBQUssQ0FBQyxFQUFFLE1BQU1tSSxRQUFRLENBQUNuSSxLQUFLLENBQUMrQixLQUFLLENBQUMsQ0FBQztZQUUvQyxNQUFNLENBQUNzRyxJQUFJLEVBQUUxRCxPQUFPLENBQUMsR0FBR2pDLEtBQUssQ0FBQ29DLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFOUMsSUFBSSxDQUFDL0MsS0FBSyxFQUFFLE9BQU9XLEtBQUEsQ0FBQUssYUFBQSxDQUFDbUIsR0FBQSxDQUFBb0UsVUFBVTtjQUFDQyxRQUFRLEVBQUU7WUFBSSxFQUFJO1lBRWpEO1lBQ0EsTUFBTWhILEtBQUssR0FBRztjQUNiRSxLQUFLLEVBQUV6QixLQUFLLENBQUN5QixLQUFLO2NBQ2xCNEcsSUFBSTtjQUNKMUQsT0FBTztjQUNQM0U7YUFDQTtZQUVELE9BQ0MwQyxLQUFBLENBQUFLLGFBQUEsQ0FBQzBCLFFBQUEsQ0FBQVosV0FBVyxDQUFDMkUsUUFBUTtjQUFDakgsS0FBSyxFQUFFQTtZQUFLLEdBQ2pDbUIsS0FBQSxDQUFBSyxhQUFBLENBQUNzQixXQUFBLENBQUFvRSxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRUwsSUFBSTtjQUNmTSxPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUjdHLEtBQUssRUFBRVcsS0FBQSxDQUFBSyxhQUFBLENBQUNrRixNQUFBLENBQUFZLEtBQUssT0FBRztnQkFDaEJDLE1BQU0sRUFBRXBHLEtBQUEsQ0FBQUssYUFBQSxDQUFDbUYsT0FBQSxDQUFBYSxNQUFNLE9BQUc7Z0JBQ2xCakMsSUFBSSxFQUFFcEUsS0FBQSxDQUFBSyxhQUFBLENBQUN1QixLQUFBLENBQUFJLFNBQVM7O1lBQ2hCLEVBQ0EsQ0FDb0I7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUFoQyxLQUFBLEdBQUEvQyxPQUFBO1VBRUEsSUFBQXVFLEdBQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUE4RSxRQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQXFKLFlBQUEsR0FBQXJKLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUVPO1VBQVUsU0FDUm9KLE1BQU1BLENBQUMsRUFBRTtZQUNqQixNQUFNO2NBQUUvSSxLQUFLO2NBQUV5QjtZQUFLLENBQUUsR0FBRyxJQUFBZ0QsUUFBQSxDQUFBVCxjQUFjLEdBQUU7WUFDekMsTUFBTTtjQUFFNkMsS0FBSztjQUFFVztZQUFNLENBQUUsR0FBRy9GLEtBQUssQ0FBQ3FILE1BQU07WUFFdEMsTUFBTUcsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQjlFLFFBQUEsQ0FBQTJCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLG9CQUFvQi9GLEtBQUssQ0FBQ3NCLElBQUksRUFBRSxDQUFDO1lBQ3BELENBQUM7WUFDRCxNQUFNd0IsR0FBRyxHQUFHLGtCQUFrQjtZQUU5QixPQUNDSixLQUFBLENBQUFLLGFBQUEsQ0FBQ21CLEdBQUEsQ0FBQWdGLGFBQWE7Y0FBQ2hHLFNBQVMsRUFBRUo7WUFBRyxHQUM1QkosS0FBQSxDQUFBSyxhQUFBLENBQUNpRyxZQUFBLENBQUFwRyxXQUFXLFFBQ1hGLEtBQUEsQ0FBQUssYUFBQSxhQUFLOEQsS0FBSyxDQUFNLEVBRWhCbkUsS0FBQSxDQUFBSyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQixHQUNsQ1IsS0FBQSxDQUFBSyxhQUFBLENBQUNzQixXQUFBLENBQUFrRCxNQUFNO2NBQUMwQixPQUFPLEVBQUVBLE9BQU87Y0FBRWhDLE9BQU8sRUFBQyxTQUFTO2NBQUMvRCxTQUFTLEVBQUM7WUFBWSxHQUNoRXNFLE1BQU0sQ0FDQyxDQUNKLENBQ08sQ0FDQztVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQTlFLEtBQUEsR0FBQS9DLE9BQUE7VUFDQSxJQUFBcUIsUUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUF1RSxHQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBOEUsUUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUFxSixZQUFBLEdBQUFySixPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFFTztVQUFVLFNBQ1JrSixLQUFLQSxDQUFDLEVBQUU7WUFDaEIsTUFBTTtjQUFFN0ksS0FBSztjQUFFeUIsS0FBSztjQUFFNEc7WUFBSSxDQUFFLEdBQUcsSUFBQTVELFFBQUEsQ0FBQVQsY0FBYyxHQUFFO1lBQy9DLE1BQU07Y0FBRTZDLEtBQUs7Y0FBRXNDO1lBQVcsQ0FBRSxHQUFHMUgsS0FBSyxDQUFDTSxLQUFLO1lBQzFDLE1BQU0sQ0FBQ3dHLFFBQVEsRUFBRWEsV0FBVyxDQUFDLEdBQUcxRyxLQUFLLENBQUNvQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3RDLEtBQUssQ0FBQ29DLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTXVFLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSEQsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTXBELFNBQVMsR0FBRyxNQUFNaEcsS0FBSyxDQUFDdUMsT0FBTyxFQUFFO2dCQUN2QyxNQUFNdkIsUUFBQSxDQUFBcUIsY0FBYyxDQUFDQyxJQUFJLENBQUNoQyxJQUFJLEVBQUU7Z0JBQ2hDNkQsUUFBQSxDQUFBMkIsT0FBTyxDQUFDQyxTQUFTLENBQUMsb0JBQW9CL0YsS0FBSyxDQUFDc0IsSUFBSSxFQUFFLENBQUM7ZUFDbkQsQ0FBQyxPQUFPNEUsQ0FBQyxFQUFFO2dCQUNYLElBQUlBLENBQUMsQ0FBQzVFLElBQUksS0FBSyxHQUFHLElBQUk0RSxDQUFDLENBQUM1RSxJQUFJLEtBQUssR0FBRyxFQUFFO2tCQUNyQzBELFFBQVEsQ0FBQ3ZELEtBQUssQ0FBQzZFLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2tCQUN6Qzs7ZUFFRCxTQUFTO2dCQUNUOEMsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE1BQU10RyxHQUFHLEdBQUcsbUJBQW1CeUYsUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFFL0QsT0FDQzdGLEtBQUEsQ0FBQUssYUFBQSxDQUFDbUIsR0FBQSxDQUFBZ0YsYUFBYTtjQUFDaEcsU0FBUyxFQUFFSjtZQUFHLEdBQzVCSixLQUFBLENBQUFLLGFBQUEsQ0FBQ2lHLFlBQUEsQ0FBQXBHLFdBQVcsUUFDWEYsS0FBQSxDQUFBSyxhQUFBLGFBQUs4RCxLQUFLLENBQU0sRUFDaEJuRSxLQUFBLENBQUFLLGFBQUEsZUFBT29HLFdBQVcsQ0FBUSxFQUMxQnpHLEtBQUEsQ0FBQUssYUFBQSxDQUFDbUIsR0FBQSxDQUFBOEMsYUFBYTtjQUFDakMsS0FBSyxFQUFFQSxLQUFLO2NBQUVrQyxPQUFPLEVBQUM7WUFBUyxFQUFHLEVBQ2pEdkUsS0FBQSxDQUFBSyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQixHQUNsQ1IsS0FBQSxDQUFBSyxhQUFBLENBQUNzQixXQUFBLENBQUFrRCxNQUFNO2NBQUNuQyxRQUFRLEVBQUVtRCxRQUFRO2NBQUVVLE9BQU8sRUFBRUksU0FBUztjQUFFcEMsT0FBTyxFQUFDLFNBQVM7Y0FBQy9ELFNBQVMsRUFBQztZQUFZLEdBQ3RGbEQsS0FBSyxDQUFDd0IsV0FBVyxDQUFDOEgsT0FBTyxDQUFDL0csT0FBTyxDQUMxQixDQUNKLENBQ08sQ0FDQztVQUVsQiIsImlnbm9yZUxpc3QiOltdfQ==