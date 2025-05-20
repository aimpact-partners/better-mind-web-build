System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.5/model", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@aimpact/ailearn-app@0.4.2/i18n.ts", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.2/components/ui", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/code-verification", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/ailearn-app@0.4.2/components/navbar-header.code", "@aimpact/ailearn-app@0.4.2/config", "@beyond-js/react-18-widgets@1.1.4/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, TokenForm, Header, View, Member, Ready, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsKernel0112Texts) {
      dependency_6 = _beyondJsKernel0112Texts;
    }, function (_aimpactChatSdk154Session) {
      dependency_7 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_8 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_aimpactAilearnApp042I18nTs) {
      dependency_9 = _aimpactAilearnApp042I18nTs;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_12 = _aimpactAilearnApp042ComponentsUi;
    }, function (_beyondJsKernel0112Routing) {
      dependency_13 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7CodeVerification) {
      dependency_14 = _pragmateUi100Beta7CodeVerification;
    }, function (_pragmateUi100Beta7Components) {
      dependency_15 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_16 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Image) {
      dependency_17 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_18 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_19 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactAilearnApp042ComponentsNavbarHeaderCode) {
      dependency_20 = _aimpactAilearnApp042ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp042Config) {
      dependency_21 = _aimpactAilearnApp042Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_22 = _beyondJsReact18Widgets114Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/classrooms/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/code-verification', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/toast', dependency_18], ['@aimpact/ailearn-app/model/wrapper', dependency_19], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/classrooms/join.widget');
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
        hash: 2229133108,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
              this.#texts.on('change', this.validate);
              this.#model = new _classrooms.Classroom({});
            }
            validate = () => {
              if (!this.ready) return;
              _mainLayout.LayoutBroker.set({
                overlay: true,
                breadcrumb: [[this.globalTexts.entities.classrooms, '/classrooms/list'], [this.texts.title]]
              });
            };
            load(code) {
              if (code) {
                this.#code = code;
              }
              super.ready = true;
              this.validate();
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
        hash: 3304648427,
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
          var _animatedDiv = require("./animated-div");
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
            return React.createElement(_animatedDiv.AnimatedDiv, {
              cls: "token-page__container"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfbWFpbkxheW91dCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NsYXNzcm9vbXMiLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsInZhbGlkQ29kZSIsImxlbmd0aCIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInZhbGlkYXRlIiwiQ2xhc3Nyb29tIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImxvYWRVc2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwicmVmcmVzaCIsImNvbnNvbGUiLCJ3YXJuIiwiUmVhY3QiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsIndpZHRoIiwieSIsImV4aXQiLCJfcmVhY3QiLCJKb2luQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlSm9pbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX3JvdXRpbmciLCJfY29kZVZlcmlmaWNhdGlvbiIsIl9jb21wb25lbnRzIiwiX2Zvcm0iLCJfdG9hc3QiLCJfY29udGV4dCIsIl9hbmltYXRlZERpdiIsIlRva2VuRm9ybSIsInNldFZpZXciLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJoYW5kbGVDaGFuZ2UiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJqb2luIiwiZGF0YSIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjbGFzc3Jvb20iLCJpZCIsImUiLCJtZXNzYWdlIiwic3R5bGUiLCJpbmNsdWRlcyIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIkZvcm0iLCJmb3JtIiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsIklucHV0Q29kZSIsIm5hbWUiLCJ0eXBlIiwib25Db2RlRnVsbCIsInJlcXVpcmVkIiwiQnV0dG9uIiwiYWN0aW9uIiwiaW5mbyIsImhlbHAiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiX2hvb2tzIiwiX3JlYWR5IiwiX21lbWJlciIsInNldFJlYWR5IiwidXNlQmluZGVyIiwidmlldyIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsIlJlYWR5IiwibWVtYmVyIiwiTWVtYmVyIiwib25DbGljayIsIlBhZ2VDb250YWluZXIiLCJkZXNjcmlwdGlvbiIsInNldEZldGNoaW5nIiwib25SZWZyZXNoIiwiYWN0aW9ucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tZW1iZXIudHN4IiwiL3RzL3ZpZXdzL3JlYWR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUgsTUFBQSxDQUFBSyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQztZQUNBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQWUsTUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixXQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLE1BQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsZUFBQSxHQUFBckIsT0FBQTtVQUNBLElBQUFzQixRQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsS0FBQSxHQUFBeEIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVcsTUFBQSxDQUFBTyxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxDQUFDO1lBQ1Q7WUFFQSxDQUFBQyxJQUFLO1lBQ0wsSUFBSUEsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENBQUFBLElBQUs7WUFDbEI7WUFFQSxJQUFJQSxJQUFJQSxDQUFDQyxLQUFLO2NBQ2IsSUFBSSxDQUFDLENBQUFELElBQUssR0FBR0MsS0FBSztZQUNuQjtZQUNBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxPQUFPTixLQUFBLENBQUFNLFdBQVcsQ0FBQ0MsS0FBSztZQUN6QjtZQUNBLElBQUlDLFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBSixJQUFLLElBQUksSUFBSSxDQUFDLENBQUFBLElBQUssQ0FBQ0ssTUFBTSxLQUFLLElBQUksQ0FBQ04sV0FBVztZQUM1RDtZQUVBLENBQUFJLEtBQU0sR0FBK0IsSUFBSVgsTUFBQSxDQUFBYyxZQUFZLENBQUNiLGVBQUEsQ0FBQWMsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsSUFBSUwsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUYsS0FBSztZQUMxQjtZQUVBLElBQUlRLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNNLEtBQUssSUFBSWIsS0FBQSxDQUFBTSxXQUFXLENBQUNPLEtBQUs7WUFDN0Q7WUFFQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNFLFFBQVEsQ0FBQztjQUN2QyxJQUFJLENBQUMsQ0FBQWYsS0FBTSxHQUFHLElBQUlILFdBQUEsQ0FBQW1CLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDaEM7WUFFQUQsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDZixJQUFJLENBQUMsSUFBSSxDQUFDSixLQUFLLEVBQUU7Y0FDakJsQixXQUFBLENBQUF3QixZQUFZLENBQUNDLEdBQUcsQ0FBQztnQkFDaEJDLE9BQU8sRUFBRSxJQUFJO2dCQUNiQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQ2lCLFFBQVEsQ0FBQ0MsVUFBVSxFQUFFLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUNqQixLQUFLLENBQUNrQixLQUFLLENBQUM7ZUFDM0YsQ0FBQztZQUNILENBQUM7WUFDRHRDLElBQUlBLENBQUNpQixJQUFJO2NBQ1IsSUFBSUEsSUFBSSxFQUFFO2dCQUNULElBQUksQ0FBQyxDQUFBQSxJQUFLLEdBQUdBLElBQUk7O2NBR2xCLEtBQUssQ0FBQ1MsS0FBSyxHQUFHLElBQUk7Y0FDbEIsSUFBSSxDQUFDSSxRQUFRLEVBQUU7WUFDaEI7WUFDQXpCLEtBQUtBLENBQUE7Y0FDSixLQUFLLENBQUNxQixLQUFLLEdBQUcsS0FBSztZQUNwQjtZQUVBLE1BQU1hLFFBQVFBLENBQUE7Y0FDYixNQUFNNUIsUUFBQSxDQUFBNkIsY0FBYyxDQUFDQyxJQUFJLENBQUN6QyxJQUFJLEVBQUU7WUFDakM7WUFFQSxNQUFNMEMsT0FBT0EsQ0FBQTtjQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXpCLElBQUssRUFBRTtnQkFDaEIwQixPQUFPLENBQUNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDakM7O2NBR0QsTUFBTSxJQUFJLENBQUMsQ0FBQTdCLEtBQU0sQ0FBQ2YsSUFBSSxDQUFDO2dCQUFFaUIsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBQTtjQUFLLENBQUUsQ0FBQztjQUM1QyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25COztVQUNBVCxPQUFBLENBQUFWLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRkQsSUFBQWlELEtBQUEsR0FBQXhELE9BQUE7VUFDQSxJQUFBeUQsYUFBQSxHQUFBekQsT0FBQTtVQUVNLFNBQVUwRCxXQUFXQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBRyxJQUF5QjtZQUFFRCxRQUFRLEVBQUUsSUFBSTtZQUFFQyxHQUFHLEVBQUU7VUFBRSxDQUFFO1lBQzlGLE9BQ0NKLEtBQUEsQ0FBQUssYUFBQSxDQUFDSixhQUFBLENBQUFLLE1BQU0sQ0FBQ0MsR0FBRztjQUNWQyxTQUFTLEVBQUVKLEdBQUc7Y0FDZEssT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRSxHQUFHO2tCQUNiQyxLQUFLLEVBQUUsR0FBRztrQkFDVkMsS0FBSyxFQUFFO2lCQUNQO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xMLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO2lCQUNWO2dCQUNESCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVAsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFlLE1BQUEsR0FBQTFFLE9BQUE7VUFPTyxNQUFNMkUsV0FBVyxHQUFBMUQsT0FBQSxDQUFBMEQsV0FBQSxHQUFHRCxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFlLEVBQWtCLENBQUM7VUFDekUsTUFBTUMsY0FBYyxHQUFHQSxDQUFBLEtBQU1KLE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUNKLFdBQVcsQ0FBQztVQUFDMUQsT0FBQSxDQUFBNkQsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JsRSxJQUFBRSxHQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlGLFFBQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBa0YsaUJBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBbUYsV0FBQSxHQUFBbkYsT0FBQTtVQUNBLElBQUFvRixLQUFBLEdBQUFwRixPQUFBO1VBRUEsSUFBQXFGLE1BQUEsR0FBQXJGLE9BQUE7VUFDQSxJQUFBd0QsS0FBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUFzRixRQUFBLEdBQUF0RixPQUFBO1VBRUEsSUFBQXVGLFlBQUEsR0FBQXZGLE9BQUE7VUFDTztVQUFVLFNBQ1J3RixTQUFTQSxDQUFBO1lBQ2pCLE1BQU07Y0FBRXpELEtBQUs7Y0FBRTFCLEtBQUs7Y0FBRW9GO1lBQU8sQ0FBRSxHQUFHLElBQUFILFFBQUEsQ0FBQVIsY0FBYyxHQUFFO1lBQ2xELE1BQU0sQ0FBQ1ksS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR25DLEtBQUssQ0FBQ29DLFFBQVEsQ0FBQ3ZGLEtBQUssQ0FBQ3VCLElBQUksSUFBSSxFQUFFLENBQUM7WUFDMUQsTUFBTSxDQUFDaUUsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3RDLEtBQUssQ0FBQ29DLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxDQUFDRyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHeEMsS0FBSyxDQUFDb0MsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUUzRCxNQUFNSyxZQUFZLEdBQUdyRSxJQUFJLElBQUc7Y0FDM0IrRCxRQUFRLENBQUMvRCxJQUFJLENBQUM7Y0FDZGtFLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDYixDQUFDO1lBRUQsTUFBTUksUUFBUSxHQUFHUixLQUFLLENBQUN6RCxNQUFNLEtBQUssQ0FBQztZQUNuQyxNQUFNa0UsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBMEI7Y0FDMUMsSUFBSTtnQkFDSDlGLEtBQUssQ0FBQ3VCLElBQUksR0FBRzhELEtBQUs7Z0JBQ2xCLE1BQU1VLFFBQVEsR0FBRyxNQUFNL0YsS0FBSyxDQUFDcUIsS0FBSyxDQUFDMkUsSUFBSSxDQUFDO2tCQUFFekUsSUFBSSxFQUFFOEQ7Z0JBQUssQ0FBRSxDQUFDO2dCQUV4RCxJQUFJVSxRQUFRLENBQUNFLElBQUksQ0FBQ0MsTUFBTSxLQUFLLFNBQVMsRUFBRTtrQkFDdkNsQixNQUFBLENBQUFtQixLQUFLLENBQUNDLE9BQU8sQ0FBQzFFLEtBQUssQ0FBQzJFLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO2tCQUNyQ2xCLE9BQU8sQ0FBQyxPQUFPLENBQUM7a0JBQ2hCOztnQkFHRCxNQUFNcEYsS0FBSyxDQUFDNkMsUUFBUSxFQUFFO2dCQUN0Qm1DLE1BQUEsQ0FBQW1CLEtBQUssQ0FBQ0MsT0FBTyxDQUFDMUUsS0FBSyxDQUFDMkUsUUFBUSxDQUFDRCxPQUFPLENBQUM7Z0JBQ3JDeEIsUUFBQSxDQUFBMkIsT0FBTyxDQUFDQyxTQUFTLENBQUMsb0JBQW9CVCxRQUFRLENBQUNFLElBQUksQ0FBQ1EsU0FBUyxDQUFDQyxFQUFFLEVBQUUsQ0FBQztlQUNuRSxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWCxJQUFJQSxDQUFDLENBQUNDLE9BQU8sS0FBSyxpQkFBaUIsRUFBRTtrQkFDcEN4QixPQUFPLENBQUMsT0FBTyxDQUFDO2tCQUNoQjs7Z0JBRUQsSUFBSXVCLENBQUMsQ0FBQ0MsT0FBTyxLQUFLLGdCQUFnQixFQUFFO2tCQUNuQ3hCLE9BQU8sQ0FBQyxRQUFRLENBQUM7a0JBQ2pCOztnQkFFRCxNQUFNeUIsS0FBSyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsUUFBUSxDQUFDSCxDQUFDLEVBQUVDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxRQUFRO2dCQUM3RWpCLGFBQWEsQ0FBQ2tCLEtBQUssQ0FBQztnQkFDcEJwQixRQUFRLENBQUMvRCxLQUFLLENBQUNxRixNQUFNLENBQUNKLENBQUMsRUFBRUMsT0FBTyxFQUFFSSxRQUFRLEVBQUUsQ0FBQyxJQUFJdEYsS0FBSyxDQUFDcUYsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQzs7WUFFakYsQ0FBQztZQUVELE9BQ0M5RCxLQUFBLENBQUFLLGFBQUEsQ0FBQzBCLFlBQUEsQ0FBQTdCLFdBQVc7Y0FBQ0UsR0FBRyxFQUFDO1lBQXVCLEdBQ3ZDSixLQUFBLENBQUFLLGFBQUEsQ0FBQ3VCLEtBQUEsQ0FBQW1DLElBQUk7Y0FBQ3BCLFFBQVEsRUFBRUEsUUFBUTtjQUFFbkMsU0FBUyxFQUFDO1lBQXVCLEdBQzFEUixLQUFBLENBQUFLLGFBQUEsaUJBQ0NMLEtBQUEsQ0FBQUssYUFBQTtjQUFJRyxTQUFTLEVBQUM7WUFBc0IsR0FBRWpDLEtBQUssQ0FBQ2tCLEtBQUssQ0FBTSxFQUN2RE8sS0FBQSxDQUFBSyxhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFJLEdBQUVqQyxLQUFLLENBQUN5RixJQUFJLENBQUNDLFFBQVEsQ0FBUSxDQUN6QyxFQUVUakUsS0FBQSxDQUFBSyxhQUFBLENBQUNtQixHQUFBLENBQUEwQyxhQUFhO2NBQUM3QixLQUFLLEVBQUVBLEtBQUs7Y0FBRThCLE9BQU8sRUFBQztZQUFPLEVBQUcsRUFDL0NuRSxLQUFBLENBQUFLLGFBQUEsQ0FBQ3FCLGlCQUFBLENBQUEwQyxTQUFTO2NBQ1QzRixNQUFNLEVBQUU1QixLQUFLLENBQUNzQixXQUFXO2NBQ3pCRSxLQUFLLEVBQUU2RCxLQUFLO2NBQ1ptQyxJQUFJLEVBQUMsTUFBTTtjQUNYQyxJQUFJLEVBQUMsTUFBTTtjQUNYQyxVQUFVLEVBQUU5QixZQUFZO2NBQ3hCK0IsUUFBUTtZQUFBLEVBQ1AsRUFDRnhFLEtBQUEsQ0FBQUssYUFBQSxDQUFDc0IsV0FBQSxDQUFBOEMsTUFBTTtjQUFDL0IsUUFBUSxFQUFFQSxRQUFRO2NBQUV5QixPQUFPLEVBQUMsU0FBUztjQUFDRyxJQUFJLEVBQUM7WUFBUSxHQUN6RC9GLEtBQUssQ0FBQ21HLE1BQU0sQ0FBQzdCLElBQUksQ0FDVixDQUNILEVBQ1A3QyxLQUFBLENBQUFLLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQThELEdBQzVFUixLQUFBLENBQUFLLGFBQUEsWUFBSTlCLEtBQUssQ0FBQ29HLElBQUksQ0FBQ0MsSUFBSSxDQUFLLENBQ25CLENBQ087VUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0VBLElBQUE1RSxLQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQXFJLGFBQUEsR0FBQXJJLE9BQUE7VUFFQSxJQUFBc0YsUUFBQSxHQUFBdEYsT0FBQTtVQUVPO1VBQVUsU0FBVXNJLE1BQU1BLENBQUE7WUFDaEMsTUFBTTtjQUFFdkc7WUFBSyxDQUFFLEdBQUcsSUFBQXVELFFBQUEsQ0FBQVIsY0FBYyxHQUFFO1lBQ2xDLE9BQ0N0QixLQUFBLENBQUFLLGFBQUEsa0JBQ0NMLEtBQUEsQ0FBQUssYUFBQSxDQUFDd0UsYUFBQSxDQUFBRSxZQUFZO2NBQ1p6RixVQUFVLEVBQUUsQ0FDWCxDQUFDZixLQUFLLENBQUNlLFVBQVUsQ0FBQ0UsVUFBVSxFQUFFLGtCQUFrQixDQUFDLEVBQ2pELENBQUNqQixLQUFLLENBQUNlLFVBQVUsQ0FBQ3VELElBQUksRUFBRSxFQUFFLENBQUM7WUFDM0IsRUFDYyxDQUNQO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUE3QyxLQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBZ0YsR0FBQSxHQUFBaEYsT0FBQTtVQUVBLElBQUF3SSxNQUFBLEdBQUF4SSxPQUFBO1VBQ0EsSUFBQW9GLEtBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBeUksTUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUEwSSxPQUFBLEdBQUExSSxPQUFBO1VBQ0EsSUFBQW1GLFdBQUEsR0FBQW5GLE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUEyQjtZQUMvQyxNQUFNLENBQUNnQyxLQUFLLEVBQUVzRyxRQUFRLENBQUMsR0FBR25GLEtBQUssQ0FBQ29DLFFBQVEsQ0FBQ3ZGLEtBQUssQ0FBQ2dDLEtBQUssQ0FBQztZQUNyRCxJQUFBbUcsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ3ZJLEtBQUssQ0FBQyxFQUFFLE1BQU1zSSxRQUFRLENBQUN0SSxLQUFLLENBQUNnQyxLQUFLLENBQUMsQ0FBQztZQUUvQyxNQUFNLENBQUN3RyxJQUFJLEVBQUVwRCxPQUFPLENBQUMsR0FBR2pDLEtBQUssQ0FBQ29DLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFOUMsSUFBSSxDQUFDdkQsS0FBSyxFQUFFLE9BQU9tQixLQUFBLENBQUFLLGFBQUEsQ0FBQ21CLEdBQUEsQ0FBQThELFVBQVU7Y0FBQ0MsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUVqRDtZQUNBLE1BQU1sSCxLQUFLLEdBQUc7Y0FDYkUsS0FBSyxFQUFFMUIsS0FBSyxDQUFDMEIsS0FBSztjQUNsQjhHLElBQUk7Y0FDSnBELE9BQU87Y0FDUHBGO2FBQ0E7WUFFRCxPQUNDbUQsS0FBQSxDQUFBSyxhQUFBLENBQUN5QixRQUFBLENBQUFYLFdBQVcsQ0FBQ3FFLFFBQVE7Y0FBQ25ILEtBQUssRUFBRUE7WUFBSyxHQUNqQzJCLEtBQUEsQ0FBQUssYUFBQSxDQUFDc0IsV0FBQSxDQUFBOEQsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVMLElBQUk7Y0FDZk0sT0FBTztjQUNQQyxPQUFPLEVBQUU7Z0JBQ1IvRyxLQUFLLEVBQUVtQixLQUFBLENBQUFLLGFBQUEsQ0FBQzRFLE1BQUEsQ0FBQVksS0FBSyxPQUFHO2dCQUNoQkMsTUFBTSxFQUFFOUYsS0FBQSxDQUFBSyxhQUFBLENBQUM2RSxPQUFBLENBQUFhLE1BQU0sT0FBRztnQkFDbEIvQixJQUFJLEVBQUVoRSxLQUFBLENBQUFLLGFBQUEsQ0FBQ3VCLEtBQUEsQ0FBQUksU0FBUzs7WUFDaEIsRUFDQSxDQUNvQjtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQWhDLEtBQUEsR0FBQXhELE9BQUE7VUFFQSxJQUFBZ0YsR0FBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBdUYsWUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFtRixXQUFBLEdBQUFuRixPQUFBO1VBRU87VUFBVSxTQUNSdUosTUFBTUEsQ0FBQyxFQUFFO1lBQ2pCLE1BQU07Y0FBRWxKLEtBQUs7Y0FBRTBCO1lBQUssQ0FBRSxHQUFHLElBQUF1RCxRQUFBLENBQUFSLGNBQWMsR0FBRTtZQUN6QyxNQUFNO2NBQUU3QixLQUFLO2NBQUVpRjtZQUFNLENBQUUsR0FBR25HLEtBQUssQ0FBQ3VILE1BQU07WUFFdEMsTUFBTUUsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQnZFLFFBQUEsQ0FBQTJCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLG9CQUFvQnhHLEtBQUssQ0FBQ3VCLElBQUksRUFBRSxDQUFDO1lBQ3BELENBQUM7WUFDRCxNQUFNZ0MsR0FBRyxHQUFHLGtCQUFrQjtZQUU5QixPQUNDSixLQUFBLENBQUFLLGFBQUEsQ0FBQ21CLEdBQUEsQ0FBQXlFLGFBQWE7Y0FBQ3pGLFNBQVMsRUFBRUo7WUFBRyxHQUM1QkosS0FBQSxDQUFBSyxhQUFBLENBQUMwQixZQUFBLENBQUE3QixXQUFXLFFBQ1hGLEtBQUEsQ0FBQUssYUFBQSxhQUFLWixLQUFLLENBQU0sRUFFaEJPLEtBQUEsQ0FBQUssYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBb0IsR0FDbENSLEtBQUEsQ0FBQUssYUFBQSxDQUFDc0IsV0FBQSxDQUFBOEMsTUFBTTtjQUFDdUIsT0FBTyxFQUFFQSxPQUFPO2NBQUU3QixPQUFPLEVBQUMsU0FBUztjQUFDM0QsU0FBUyxFQUFDO1lBQVksR0FDaEVrRSxNQUFNLENBQ0MsQ0FDSixDQUNPLENBQ0M7VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUExRSxLQUFBLEdBQUF4RCxPQUFBO1VBQ0EsSUFBQXNCLFFBQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBZ0YsR0FBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFpRixRQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBdUYsWUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFtRixXQUFBLEdBQUFuRixPQUFBO1VBRU87VUFBVSxTQUNScUosS0FBS0EsQ0FBQyxFQUFFO1lBQ2hCLE1BQU07Y0FBRWhKLEtBQUs7Y0FBRTBCLEtBQUs7Y0FBRThHO1lBQUksQ0FBRSxHQUFHLElBQUF2RCxRQUFBLENBQUFSLGNBQWMsR0FBRTtZQUMvQyxNQUFNO2NBQUU3QixLQUFLO2NBQUV5RztZQUFXLENBQUUsR0FBRzNILEtBQUssQ0FBQ00sS0FBSztZQUMxQyxNQUFNLENBQUMwRyxRQUFRLEVBQUVZLFdBQVcsQ0FBQyxHQUFHbkcsS0FBSyxDQUFDb0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUd0QyxLQUFLLENBQUNvQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU1nRSxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hELFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU03QyxTQUFTLEdBQUcsTUFBTXpHLEtBQUssQ0FBQ2dELE9BQU8sRUFBRTtnQkFDdkMsTUFBTS9CLFFBQUEsQ0FBQTZCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDekMsSUFBSSxFQUFFO2dCQUNoQ3NFLFFBQUEsQ0FBQTJCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLG9CQUFvQnhHLEtBQUssQ0FBQ3VCLElBQUksRUFBRSxDQUFDO2VBQ25ELENBQUMsT0FBT29GLENBQUMsRUFBRTtnQkFDWCxJQUFJQSxDQUFDLENBQUNwRixJQUFJLEtBQUssR0FBRyxJQUFJb0YsQ0FBQyxDQUFDcEYsSUFBSSxLQUFLLEdBQUcsRUFBRTtrQkFDckNrRSxRQUFRLENBQUMvRCxLQUFLLENBQUNxRixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztrQkFDekM7O2VBRUQsU0FBUztnQkFDVHVDLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNL0YsR0FBRyxHQUFHLG1CQUFtQm1GLFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRS9ELE9BQ0N2RixLQUFBLENBQUFLLGFBQUEsQ0FBQ21CLEdBQUEsQ0FBQXlFLGFBQWE7Y0FBQ3pGLFNBQVMsRUFBRUo7WUFBRyxHQUM1QkosS0FBQSxDQUFBSyxhQUFBLENBQUMwQixZQUFBLENBQUE3QixXQUFXLFFBQ1hGLEtBQUEsQ0FBQUssYUFBQSxhQUFLWixLQUFLLENBQU0sRUFDaEJPLEtBQUEsQ0FBQUssYUFBQSxlQUFPNkYsV0FBVyxDQUFRLEVBQzFCbEcsS0FBQSxDQUFBSyxhQUFBLENBQUNtQixHQUFBLENBQUEwQyxhQUFhO2NBQUM3QixLQUFLLEVBQUVBLEtBQUs7Y0FBRThCLE9BQU8sRUFBQztZQUFTLEVBQUcsRUFDakRuRSxLQUFBLENBQUFLLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9CLEdBQ2xDUixLQUFBLENBQUFLLGFBQUEsQ0FBQ3NCLFdBQUEsQ0FBQThDLE1BQU07Y0FBQy9CLFFBQVEsRUFBRTZDLFFBQVE7Y0FBRVMsT0FBTyxFQUFFSSxTQUFTO2NBQUVqQyxPQUFPLEVBQUMsU0FBUztjQUFDM0QsU0FBUyxFQUFDO1lBQVksR0FDdEYzRCxLQUFLLENBQUN5QixXQUFXLENBQUMrSCxPQUFPLENBQUN4RyxPQUFPLENBQzFCLENBQ0osQ0FDTyxDQUNDO1VBRWxCIiwiaWdub3JlTGlzdCI6W119