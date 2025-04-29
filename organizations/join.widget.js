System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.1/i18n.ts", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/code-verification", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app/start", "@aimpact/ailearn-app@0.4.1/components/navbar-header.code", "@aimpact/ailearn-app@0.4.1/config", "@beyond-js/react-18-widgets@1.1.4/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReactive204Model) {
      dependency_4 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_5 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_aimpactChatSdk154Session) {
      dependency_8 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp041I18nTs) {
      dependency_9 = _aimpactAilearnApp041I18nTs;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_12 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Image) {
      dependency_13 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_15 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7CodeVerification) {
      dependency_16 = _pragmateUi100Beta7CodeVerification;
    }, function (_pragmateUi100Beta7Components) {
      dependency_17 = _pragmateUi100Beta7Components;
    }, function (_beyondJsKernel0112Routing) {
      dependency_18 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnAppStart) {
      dependency_19 = _aimpactAilearnAppStart;
    }, function (_aimpactAilearnApp041ComponentsNavbarHeaderCode) {
      dependency_20 = _aimpactAilearnApp041ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp041Config) {
      dependency_21 = _aimpactAilearnApp041Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_22 = _beyondJsReact18Widgets114Hooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/organizations/join",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/entities/organizations', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/image', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/toast', dependency_15], ['pragmate-ui/code-verification', dependency_16], ['pragmate-ui/components', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/ailearn-app/routing', dependency_19], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/organizations/join.widget');
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
        hash: 2634682217,
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
              this.#texts.on('change', this.triggerEvent);
              this.#model = new _organizations.Organization({});
            }
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.overlay = false;
            }
            load(code) {
              this.setBreadcrumb();
              if (code) {
                this.#code = code;
              }
              super.ready = true;
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
        hash: 1181222785,
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
        hash: 2716547480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenForm = TokenForm;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _codeVerification = require("pragmate-ui/code-verification");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _routing = require("@beyond-js/kernel/routing");
          var _routing2 = require("@aimpact/ailearn-app/routing");
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
                _routing2.Router.cleanPreviousUrl();
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
        hash: 2045850208,
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
        hash: 795646988,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfb3JnYW5pemF0aW9ucyIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIlRPVEFMX0NPREVTIiwiY29kZSIsInZhbHVlIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsInZhbGlkQ29kZSIsImxlbmd0aCIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidmlldyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiT3JnYW5pemF0aW9uIiwic2V0QnJlYWRjcnVtYiIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJ1bmRlZmluZWQiLCJsb2FkVXNlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInJlZnJlc2giLCJjb25zb2xlIiwid2FybiIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ3aWR0aCIsInkiLCJleGl0IiwiX3JlYWN0IiwiSm9pbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUpvaW5Db250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pbWFnZSIsIl9mb3JtIiwiX3RvYXN0IiwiX2NvZGVWZXJpZmljYXRpb24iLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX3JvdXRpbmciLCJfcm91dGluZzIiLCJUb2tlbkZvcm0iLCJzZXRWaWV3IiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0eWxlQWxlcnQiLCJzZXRTdHlsZUFsZXJ0IiwiaGFuZGxlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJlc3BvbnNlIiwicHJvdmlkZXIiLCJqb2luIiwiZGF0YSIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwicGVuZGluZyIsIlJvdXRlciIsImNsZWFuUHJldmlvdXNVcmwiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwib3JnYW5pemF0aW9uIiwiaWQiLCJlIiwibWVzc2FnZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJGb3JtIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImZvcm0iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJ2YXJpYW50IiwiSW5wdXRDb2RlIiwidHlwZSIsIm9uQ29kZUZ1bGwiLCJyZXF1aXJlZCIsIkJ1dHRvbiIsImFjdGlvbiIsImluZm8iLCJoZWxwIiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJvcmdhbml6YXRpb25zIiwiX2hvb2tzIiwiX3JlYWR5IiwiX21lbWJlciIsInVwZGF0ZSIsInNldFVwZGF0ZSIsInVzZUJpbmRlciIsIlByb3ZpZGVyIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsIlJlYWR5IiwibWVtYmVyIiwiTWVtYmVyIiwiX2FuaW1hdGVkRGl2Iiwib25DbGljayIsIlBhZ2VDb250YWluZXIiLCJkZXNjcmlwdGlvbiIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJvblJlZnJlc2giLCJhY3Rpb25zIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21lbWJlci50c3giLCIvdHMvdmlld3MvcmVhZHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSCxNQUFBLENBQUFLLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDO1lBQ0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYs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