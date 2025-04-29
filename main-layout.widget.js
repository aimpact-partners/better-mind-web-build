System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-app@0.4.1/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.4.1/i18n.ts", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/wrapper", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/chips", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/components/navbar-header.code", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
  _export({
    LayoutBroker: void 0,
    Controller: void 0,
    Header: void 0,
    OverlayHeader: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_2 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnApp041WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp041WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp041I18nTs) {
      dependency_4 = _aimpactAilearnApp041I18nTs;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_5 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactChatSdk154Core) {
      dependency_6 = _aimpactChatSdk154Core;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_7 = _aimpactChatSdk154Wrapper;
    }, function (_beyondJsKernel0112Texts) {
      dependency_8 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_11 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_12 = _pragmateUi100Beta7Chips;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_14 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_aimpactAilearnApp041ComponentsNavbarHeaderCode) {
      dependency_17 = _aimpactAilearnApp041ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_18 = _pragmateUi100Beta7Toast;
    }, function (_beyondJsKernel0112Styles) {
      dependency_19 = _beyondJsKernel0112Styles;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/main-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-app/i18n.ts', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/modal', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/chips', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/icons', dependency_15], ['framer-motion', dependency_16], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_17], ['pragmate-ui/toast', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/main-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/main-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 622407111,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class Broker extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get hasCredits() {
              return this.#model?.credits?.total > 0;
            }
            #message;
            get message() {
              return this.#message;
            }
            get breadcrumb() {
              return _breadcrumb.breadcrumbStore;
            }
            #showCredits;
            get showCredits() {
              return this.#showCredits;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            /**
             * Let's check if the user can consume coins
             *
             * The coins are available in Drafts Models and Assignment Models
             */
            #canConsumeCredits;
            get canConsumeCredits() {
              return this.#model?.canConsumeCredits || this.#canConsumeCredits;
            }
            set canConsumeCredits(value) {
              if (this.#canConsumeCredits === value) return;
              this.#canConsumeCredits = value;
              this.trigger('change');
            }
            constructor() {
              super({
                properties: ['title', 'backLink', 'overlay', 'force', 'refresh']
              });
              this.ensureCredits = this.ensureCredits.bind(this);
              _i18n.globalTexts.on('change', this.triggerEvent.bind(this));
              globalThis.layout = this;
            }
            addModel(model, showCredits = true) {
              if (model.id !== undefined && model.id === this.#model?.id) return;
              this.#model = model;
              this.#showCredits = showCredits;
              this.#model.on('change', this.onListen.bind(this));
              this.trigger('change');
              // logic for activities;
            }
            clearModel() {
              this.#model = undefined;
              this.#showCredits = false;
            }
            async onListen() {
              if (this.#showCredits === this.#model?.saved) {
                return;
              }
              this.#showCredits = this.#model?.saved;
              this.triggerEvent();
            }
            async ensureCredits(callback, ...specs) {
              // validation
              if (!this.#model) console.error('No model found');
              if (!this.hasCredits) {
                this.trigger('no.credits');
                return;
              }
              return callback(...specs);
            }
            showMessage(type, message) {
              this.#message = {
                type,
                message
              };
              this.trigger('show.message');
              globalThis.setTimeout(() => {
                this.#message = undefined;
              }, 2000);
            }
            clear() {
              this.#model = undefined;
              this.overlay = false;
              this.triggerEvent();
            }
            setTitle(title) {
              this.title = title;
            }
            onRefresh() {
              this.refresh();
            }
            set({
              breadcrumb,
              force = false,
              ...props
            }) {
              super.set({
                force,
                ...props
              });
              this.breadcrumb.set({
                items: breadcrumb
              });
              return {
                updated: true
              };
            }
          }
          exports.Broker = Broker;
          /*bundle */
          const LayoutBroker = exports.LayoutBroker = new Broker();
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 514040884,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _view = require("./view");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            //@ts-ignore
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _view.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4212052100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _broker = require("./broker");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            #broker;
            get broker() {
              return this.#broker;
            }
            get showCredits() {
              return this.#broker.showCredits;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value ?? {};
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get model() {
              return this.#broker.model;
            }
            get saved() {
              return this.#broker?.model?.saved;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            constructor() {
              super();
              this.init();
            }
            init = async () => {
              await _wrapper.AppWrapper.isReady;
              super.ready = true;
              this.#broker = _broker.LayoutBroker;
              _wrapper.AppWrapper.on('change', this.triggerEvent);
              this.#broker.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              _i18n.globalTexts.on('change', this.triggerEvent);
            };
            listen = () => {
              this.#broker.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
            };
            close() {
              this.#broker.off('change', this.triggerEvent);
              this.#texts.off('change', this.triggerEvent);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./view/coins/alert
      **********************************/

      ims.set('./view/coins/alert', {
        hash: 3536504213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsAlert = CoinsAlert;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          function CoinsAlert({
            show,
            onClose,
            texts,
            globalTexts
          }) {
            if (!show) return null;
            texts = texts.coins.alert;
            return _react.default.createElement(_modal.AlertModal, {
              show: true,
              buttonLabel: texts.action,
              onConfirm: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("p", null, texts.description)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./view/coins/credits
      ************************************/

      ims.set('./view/coins/credits', {
        hash: 2491588174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsContainer = CreditsContainer;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chips = require("pragmate-ui/chips");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animatedLabel = require("../components/animated-label");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function CreditsContainer() {
            let {
              store,
              toggleCoinsModal,
              texts
            } = (0, _context.useLayoutContext)();
            const [message, setMessage] = _react.default.useState('');
            const [, setHasCredits] = _react.default.useState(store.hasCredits);
            const ref = (0, _react.useRef)(null);
            const cls = `credits__container ${!store.broker.canConsumeCredits ? ' is-disabled' : ''}`;
            const [credits, setCredits] = _react.default.useState(store.model?.credits.getProperties() ?? {
              total: 0,
              consumed: 0
            });
            const onCreditsChange = type => {
              ref.current.classList.add('success--container');
              setMessage(texts?.messages[type]);
              setCredits({
                ...store.broker.model?.credits.getProperties()
              });
              setHasCredits(store.broker.hasCredits);
            };
            (0, _hooks.useBinder)([store.broker.model], onCreditsChange, 'credits.change');
            if (!texts?.coins) return null;
            texts = texts.coins.header;
            // the control changes based on the user's credits
            // if the user has credits, the control is a chip and does not have an onClick event
            let Control;
            const attrs = {
              className: 'credits-action',
              onClick: undefined,
              variant: store.broker.hasCredits ? 'success' : 'primary',
              disabled: store.broker.hasCredits || !store.broker.canConsumeCredits
            };
            if (!store.broker.hasCredits) {
              Control = _components.Button;
              attrs.onClick = toggleCoinsModal;
            } else {
              Control = _chips.Chip;
              attrs.className = 'success--chip';
            }
            const total = credits ? credits.total - credits.consumed : 0;
            const percentageAvailable = total / credits.total * 100;
            const label = store.broker.hasCredits ? `${total} ${texts.actions.available}` : texts.actions.require;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement(_animatedLabel.AnimatedLabel, null, message), _react.default.createElement(Control, {
              ...attrs
            }, store.broker.hasCredits ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.Battery, {
              percent: percentageAvailable
            }), _react.default.createElement("span", {
              className: "interactions-data"
            }, label)) : _react.default.createElement(_react.default.Fragment, null, label)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./view/coins/notifications-bar
      **********************************************/

      ims.set('./view/coins/notifications-bar', {
        hash: 3153698943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotificationsBar = NotificationsBar;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _framerMotion = require("framer-motion");
          var _animated = require("../components/animated");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function NotificationsBar({}) {
            const {
              store: {
                broker
              }
            } = (0, _context.useLayoutContext)();
            const [show, setShow] = _react.default.useState(true);
            const [message, setMessage] = _react.default.useState(undefined);
            const onClose = () => {
              setMessage(undefined);
              setShow(false);
            };
            (0, _hooks.useBinder)([broker], () => {
              setMessage(broker.message);
            }, 'show.message');
            if (!message) return null;
            const cls = `notifications-bar center-items notifications--${message?.type}`;
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_animated.Animated, {
              as: "div",
              className: cls
            }, _react.default.createElement(_components.HtmlWrapper, null, message.message), _react.default.createElement(_icons.Icon, {
              className: "close-icon",
              icon: "close",
              onClick: onClose
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/animated-label
      ************************************************/

      ims.set('./view/components/animated-label', {
        hash: 2257335102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedLabel = AnimatedLabel;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedLabel({
            children
          }) {
            const [show, setShow] = _react.default.useState(true);
            _react.default.useEffect(() => {
              setShow(children);
              globalThis.setTimeout(() => {
                setShow(false);
              }, 2000);
            }, [children]);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_framerMotion.motion.span, {
              layout: true,
              className: "label-message",
              initial: {
                opacity: 0,
                width: '0'
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                },
                width: 'auto'
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./view/components/animated
      ******************************************/

      ims.set('./view/components/animated', {
        hash: 796986304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Animated = Animated;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function Animated({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./view/components/header
      ****************************************/

      ims.set('./view/components/header', {
        hash: 3210761013,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _credits = require("../coins/credits");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            const [hasModel, setHasModel] = _react.default.useState(!!store.broker.model);
            const [updated, setUpdated] = _react.default.useState();
            (0, _hooks.useBinder)([_navbarHeader.hmr], () => setUpdated(performance.now()));
            (0, _hooks.useBinder)([store.broker], () => setHasModel(!!store.broker.model));
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              force: store.broker.force,
              store: store,
              updated: updated
            }, hasModel && _react.default.createElement(_credits.CreditsContainer, null), store.broker.refresh && _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: () => store.broker.refresh()
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/overlay-header
      ************************************************/

      ims.set('./view/components/overlay-header', {
        hash: 2553687763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OverlayHeader = OverlayHeader;
          var React = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _credits = require("../coins/credits");
          /*bundle*/
          function OverlayHeader() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            return React.createElement(_navbarHeader.NavbarHeader, {
              force: store.broker.force,
              store: store,
              closable: true,
              backlink: store.broker.backLink
            }, !!store.broker.model && React.createElement(_credits.CreditsContainer, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 4272098812,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLayoutContext = exports.LayoutContext = void 0;
          var _react = require("react");
          const LayoutContext = exports.LayoutContext = _react.default.createContext({});
          const useLayoutContext = () => _react.default.useContext(LayoutContext);
          exports.useLayoutContext = useLayoutContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/global
      *****************************/

      ims.set('./view/global', {
        hash: 4223080399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 2926121710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _header = require("./components/header");
          var _alert = require("./coins/alert");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _notificationsBar = require("./coins/notifications-bar");
          var _overlayHeader = require("./components/overlay-header");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = _react.default.useState(false);
            const [, setUpdate] = (0, _react.useState)({});
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            const ref = _react.default.useRef();
            const {
              texts
            } = store;
            _react.default.useEffect(() => {
              globalThis.mainLayout = ref.current;
            }, []), (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store.broker], toggleCoinsAlert, 'no.credits');
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            const value = {
              store,
              texts,
              toggleCoinsModal,
              overlay: store.broker.overlay
            };
            const type = store.broker?.model?.modelType === 'tracking' ? 'interactive' : 'generative';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.LayoutContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "main-layout__container"
            }, store.broker.overlay ? _react.default.createElement(_overlayHeader.OverlayHeader, null) : _react.default.createElement(_header.Header, null), _react.default.createElement(_notificationsBar.NotificationsBar, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", {
              ref: ref
            }), _react.default.createElement(_toast.Toasts, null)))), ready && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.CoinsAlert, {
              texts: texts,
              globalTexts: store.globalTexts,
              show: showCoinsAlert,
              onClose: toggleCoinsAlert
            }), _react.default.createElement(_ui.CoinsModal, {
              owner: store.model?.owner,
              globalTexts: store.globalTexts,
              onConsume: store.model?.consumeCoins,
              type: type,
              show: showCoinsModal,
              onClose: toggleCoinsModal
            })));
          };
          exports.Layout = Layout;
        }
      });

      /******************************
      INTERNAL MODULE: ./view/preload
      ******************************/

      ims.set('./view/preload', {
        hash: 246890105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          function Preload() {
            return React.createElement(React.Fragment, null);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./broker",
        "from": "LayoutBroker",
        "name": "LayoutBroker"
      }, {
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view/components/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./view/components/overlay-header",
        "from": "OverlayHeader",
        "name": "OverlayHeader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'LayoutBroker') && _export("LayoutBroker", LayoutBroker = require ? require('./broker').LayoutBroker : value);
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./view/components/header').Header : value);
        (require || prop === 'OverlayHeader') && _export("OverlayHeader", OverlayHeader = require ? require('./view/components/overlay-header').OverlayHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfaTE4biIsIkJyb2tlciIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwiZ2xvYmFsVGV4dHMiLCJ0ZXh0cyIsImNhbkNvbnN1bWVDcmVkaXRzIiwidmFsdWUiLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZW5zdXJlQ3JlZGl0cyIsImJpbmQiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJsYXlvdXQiLCJhZGRNb2RlbCIsImlkIiwidW5kZWZpbmVkIiwib25MaXN0ZW4iLCJjbGVhck1vZGVsIiwic2F2ZWQiLCJjYWxsYmFjayIsInNwZWNzIiwiY29uc29sZSIsImVycm9yIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwic2V0VGltZW91dCIsImNsZWFyIiwib3ZlcmxheSIsInNldFRpdGxlIiwidGl0bGUiLCJvblJlZnJlc2giLCJyZWZyZXNoIiwic2V0IiwiZm9yY2UiLCJwcm9wcyIsIml0ZW1zIiwidXBkYXRlZCIsImV4cG9ydHMiLCJMYXlvdXRCcm9rZXIiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJMYXlvdXQiLCJfd3JhcHBlciIsIl9icm9rZXIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJpc1N0b3JlIiwiYnJva2VyIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJpbml0IiwiQXBwV3JhcHBlciIsImlzUmVhZHkiLCJsaXN0ZW4iLCJjbG9zZSIsIm9mZiIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvaW5zQWxlcnQiLCJzaG93Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsImRlc2NyaXB0aW9uIiwiX2hvb2tzIiwiX2NoaXBzIiwiX2NvbXBvbmVudHMiLCJfYW5pbWF0ZWRMYWJlbCIsIl9jb250ZXh0IiwiX3VpIiwiQ3JlZGl0c0NvbnRhaW5lciIsInRvZ2dsZUNvaW5zTW9kYWwiLCJ1c2VMYXlvdXRDb250ZXh0Iiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwic2V0SGFzQ3JlZGl0cyIsInJlZiIsInVzZVJlZiIsImNscyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwiY29uc3VtZWQiLCJvbkNyZWRpdHNDaGFuZ2UiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZXMiLCJ1c2VCaW5kZXIiLCJoZWFkZXIiLCJDb250cm9sIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidmFyaWFudCIsImRpc2FibGVkIiwiQnV0dG9uIiwiQ2hpcCIsInBlcmNlbnRhZ2VBdmFpbGFibGUiLCJsYWJlbCIsImFjdGlvbnMiLCJhdmFpbGFibGUiLCJBbmltYXRlZExhYmVsIiwiRnJhZ21lbnQiLCJCYXR0ZXJ5IiwicGVyY2VudCIsIl9pY29ucyIsIl9mcmFtZXJNb3Rpb24iLCJfYW5pbWF0ZWQiLCJOb3RpZmljYXRpb25zQmFyIiwic2V0U2hvdyIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVkIiwiYXMiLCJIdG1sV3JhcHBlciIsIkljb24iLCJpY29uIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJzcGFuIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jcmVkaXRzIiwiSGVhZGVyIiwiaGFzTW9kZWwiLCJzZXRIYXNNb2RlbCIsInNldFVwZGF0ZWQiLCJobXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIk5hdmJhckhlYWRlciIsIkljb25CdXR0b24iLCJSZWFjdCIsIk92ZXJsYXlIZWFkZXIiLCJjbG9zYWJsZSIsImJhY2tsaW5rIiwiYmFja0xpbmsiLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b2FzdCIsIl9oZWFkZXIiLCJfYWxlcnQiLCJfbm90aWZpY2F0aW9uc0JhciIsIl9vdmVybGF5SGVhZGVyIiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInNldFVwZGF0ZSIsInRvZ2dsZUNvaW5zQWxlcnQiLCJtYWluTGF5b3V0IiwibW9kZWxUeXBlIiwiUHJvdmlkZXIiLCJUb2FzdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJQcmVsb2FkIl0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXcvY29pbnMvY3JlZGl0cy50c3giLCIvdHMvdmlldy9jb2lucy9ub3RpZmljYXRpb25zLWJhci50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29tcG9uZW50cy9vdmVybGF5LWhlYWRlci50c3giLCIvdHMvdmlldy9jb250ZXh0LnRzIiwiL2dsb2JhbC50c3giLCIvdHMvdmlldy9pbmRleC50c3giLCIvdHMvdmlldy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGws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