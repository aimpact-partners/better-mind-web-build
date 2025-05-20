System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.5/model", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/i18n.ts", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.2/components/ui", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/code-verification", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/ailearn-app@0.4.2/components/navbar-header.code", "@beyond-js/react-18-widgets@1.1.4/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReactive205Model) {
      dependency_4 = _beyondJsReactive205Model;
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_5 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_aimpactChatSdk154Session) {
      dependency_8 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp042I18nTs) {
      dependency_9 = _aimpactAilearnApp042I18nTs;
    }, function (_react) {
      dependency_10 = _react;
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
    }, function (_pragmateUi100Beta7Toast) {
      dependency_17 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_18 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactAilearnApp042ComponentsNavbarHeaderCode) {
      dependency_19 = _aimpactAilearnApp042ComponentsNavbarHeaderCode;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_20 = _beyondJsReact18Widgets114Hooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.2/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/entities/organizations', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/code-verification', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['@aimpact/ailearn-app/model/wrapper', dependency_18], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/organizations/join.widget');
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
        hash: 1256043981,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get TOTAL_CODES() {
              return 7;
            }
            get model() {
              return this.#model;
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
              this.reactiveProps(['view']);
              this.view = 'form';
              this.#model = new _organizations.Organization({});
              this.#texts.on('change', this.triggerEvent);
              this.#texts.on('change', this.validate);
            }
            validate = () => {
              if (!this.ready) return;
              _mainLayout.LayoutBroker.set({
                overlay: true,
                breadcrumb: [[this.globalTexts.entities.organizations, '/organizations/list'], [this.texts.title]]
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
              this.#code = undefined;
              super.ready = false;
              this.view = 'form';
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
        hash: 178911584,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useJoinContext = exports.JoinContext = void 0;
          var React = require("react");
          const JoinContext = exports.JoinContext = React.createContext({});
          const useJoinContext = () => React.useContext(JoinContext);
          exports.useJoinContext = useJoinContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 751538940,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
                const response = await store.model.provider.join({
                  code: token
                });
                if (response.data.status === 'PENDING') {
                  _toast.toast.success(texts.messages.pending);
                  setView('ready');
                  return;
                }
                await store.loadUser();
                _toast.toast.success(texts.messages.success);
                _wrapper.settings.Router.cleanPreviousUrl();
                _routing.routing.pushState(`/organizations/view/${response.data.organization.id}`);
              } catch (e) {
                if (e.message === 'ALREADY_WAITING') {
                  setView('ready');
                  return;
                }
                if (e.message === 'ALREADY_MEMBER') {
                  setView('member');
                  return;
                }
                const style = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? 'warning' : 'danger';
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
              variant: styleAlert
            }), React.createElement(_codeVerification.InputCode, {
              length: store.TOTAL_CODES,
              value: token,
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
        hash: 299592024,
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
              breadcrumb: [[texts.breadcrumb.organizations, '/organizations/list'], [texts.breadcrumb.join, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3850688708,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("./form");
          var _ready = require("./ready");
          var _member = require("./member");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function View({
            store
          }) {
            const [update, setUpdate] = React.useState({});
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            if (!store.ready) return null;
            const value = {
              texts: store.texts,
              view: store.view,
              setView: value => store.view = value,
              store
            };
            return React.createElement(_context.JoinContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              condition: store.view,
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
        hash: 2760658346,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Member = Member;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _animatedDiv = require("./animated-div");
          var _context = require("./context");
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
              _routing.routing.pushState(`/organizations/view/${store.code}`);
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
        hash: 4008242976,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Ready = Ready;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _animatedDiv = require("./animated-div");
          var _components = require("pragmate-ui/components");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          function Ready({}) {
            const {
              texts,
              store
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
                await store.refresh();
                await _session.sessionWrapper.user.load();
                _routing.routing.pushState(`/organizations/view/${store.code}`);
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
            }, React.createElement(_animatedDiv.AnimatedDiv, {
              cls: "center__container"
            }, React.createElement("h3", null, title), React.createElement("span", null, description), React.createElement(_ui.ErrorRenderer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfb3JnYW5pemF0aW9ucyIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsInZhbGlkQ29kZSIsImxlbmd0aCIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidmlldyIsIk9yZ2FuaXphdGlvbiIsIm9uIiwidHJpZ2dlckV2ZW50IiwidmFsaWRhdGUiLCJMYXlvdXRCcm9rZXIiLCJzZXQiLCJvdmVybGF5IiwiYnJlYWRjcnVtYiIsImVudGl0aWVzIiwib3JnYW5pemF0aW9ucyIsInRpdGxlIiwidW5kZWZpbmVkIiwibG9hZFVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJyZWZyZXNoIiwiY29uc29sZSIsIndhcm4iLCJSZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIm1vdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5Iiwid2lkdGgiLCJ5IiwiZXhpdCIsIkpvaW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9yb3V0aW5nIiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX3RvYXN0IiwiX2NvbnRleHQiLCJfd3JhcHBlciIsIl9hbmltYXRlZERpdiIsIlRva2VuRm9ybSIsInNldFZpZXciLCJ0b2tlbiIsInNldFRva2VuIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJoYW5kbGVDaGFuZ2UiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwicmVzcG9uc2UiLCJwcm92aWRlciIsImpvaW4iLCJkYXRhIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJwZW5kaW5nIiwic2V0dGluZ3MiLCJSb3V0ZXIiLCJjbGVhblByZXZpb3VzVXJsIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm9yZ2FuaXphdGlvbiIsImlkIiwiZSIsIm1lc3NhZ2UiLCJzdHlsZSIsImluY2x1ZGVzIiwiZXJyb3JzIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwiRm9ybSIsImZvcm0iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiSW5wdXRDb2RlIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsImFjdGlvbiIsImluZm8iLCJoZWxwIiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsIl9ob29rcyIsIl9yZWFkeSIsIl9tZW1iZXIiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJQcm92aWRlciIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwidGVybmFyeSIsIm9wdGlvbnMiLCJSZWFkeSIsIm1lbWJlciIsIk1lbWJlciIsIm9uQ2xpY2siLCJQYWdlQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwib25SZWZyZXNoIiwiYWN0aW9ucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tZW1iZXIudHN4IiwiL3RzL3ZpZXdzL3JlYWR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDO1lBQ0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFB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