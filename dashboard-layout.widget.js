System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-app@0.4.1/widgets/breadcrumb.widget", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/chat-sdk@1.5.4/wrapper", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/components/navbar-header.code", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, LayoutBroker, Controller, Header, OverlayHeader, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_4 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactChatSdk154Core) {
      dependency_5 = _aimpactChatSdk154Core;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_6 = _aimpactChatSdk154Wrapper;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_aimpactAilearnApp041ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp041ComponentsNavbarHeaderCode;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_10 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_11 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_12 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_13 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsKernel0112Styles) {
      dependency_14 = _beyondJsKernel0112Styles;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/dashboard-layout",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@aimpact/chat-sdk/core', dependency_5], ['@aimpact/chat-sdk/wrapper', dependency_6], ['react', dependency_7], ['framer-motion', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "dashboard-layout",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/dashboard-layout.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/dashboard-layout.widget');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./broker
      ************************/
      ims.set('./broker', {
        hash: 2222944174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutBroker = exports.Broker = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          class Broker extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
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
            constructor() {
              super({
                properties: ['title', 'backLink', 'overlay', 'refresh']
              });
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
            setBackLink(backLink) {
              this.backLink = backLink;
              this.overlay = true;
              this.triggerEvent();
            }
            setModel(model) {
              this.#model = model;
              this.triggerEvent();
            }
            set({
              breadcrumb,
              ...props
            }) {
              super.set(props);
              this.breadcrumb.set({
                items: breadcrumb
              });
              return {
                updated: true
              };
            }
            onRefresh() {
              this.refresh();
            }
          }
          exports.Broker = Broker;
          /*bundle */
          const LayoutBroker = exports.LayoutBroker = new Broker();
          globalThis.broker = LayoutBroker;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 2803709794,
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
        hash: 3624231854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _broker = require("./broker");
          class StoreManager extends _model.ReactiveModel {
            #broker;
            get broker() {
              return this.#broker;
            }
            get model() {
              return this.#broker.model;
            }
            constructor() {
              super();
              _wrapper.AppWrapper.on('change', this.listener);
              this.#broker = _broker.LayoutBroker;
              this.#broker.on('change', this.triggerEvent);
              globalThis.lc = this;
              console.log('layout controller is being exposed as lc in the global scope');
              this.init();
            }
            init = async () => {
              await _wrapper.AppWrapper.isReady;
              this.ready = true;
            };
            listener = () => {};
            refresh = () => {
              if (!this.#broker?.model?.refresh) return;
              this.#broker.model.refresh();
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/animated-label
      ************************************************/

      ims.set('./view/components/animated-label', {
        hash: 2096490113,
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
            const [show, setShow] = _react.default.useState(!!children);
            _react.default.useEffect(() => {
              setShow(children);
              globalThis.setTimeout(() => {
                setShow(false);
              }, 2000);
            }, [children]);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_framerMotion.motion.span, {
              layout: true,
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
        hash: 1803603690,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            const [hasModel, setHasModel] = _react.default.useState(!!store.broker.model);
            (0, _hooks.useBinder)([store.broker], () => {
              setHasModel(!!store.broker.model);
            });
            console.log(40);
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              store: store
            });
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./view/components/overlay-header
      ************************************************/

      ims.set('./view/components/overlay-header', {
        hash: 3702588059,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OverlayHeader = OverlayHeader;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function OverlayHeader() {
            const {
              store
            } = (0, _context.useLayoutContext)();
            const [update, setUpdate] = _react.default.useState(0);
            (0, _hooks.useBinder)([store.broker], () => {
              setUpdate(update + 1);
            });
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
              store: store,
              closable: true,
              backlink: store.broker.backLink,
              detail: store.broker.overlayLabel
            }, store.broker.refresh && _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle",
              onClick: () => store.broker.onRefresh()
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./view/context
      ******************************/

      ims.set('./view/context', {
        hash: 772258609,
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

      /****************************
      INTERNAL MODULE: ./view/index
      ****************************/

      ims.set('./view/index', {
        hash: 1605668245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = void 0;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _beyond_context = require("beyond_context");
          var _overlayHeader = require("./components/overlay-header");
          const Layout = ({
            store
          }) => {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [showCoinsAlert, setShowCoinsAlert] = _react.default.useState(false);
            const [, setUpdate] = (0, _react.useState)({});
            const toggleCoinsAlert = () => setShowCoinsAlert(!showCoinsAlert);
            const toggleCoinsModal = () => setShowCoinsModal(!showCoinsModal);
            (0, _hooks.useBinder)([store.broker], toggleCoinsAlert, 'no.credits');
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            if (!textsReady || !ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              store,
              texts,
              toggleCoinsModal,
              overlay: store.broker.overlay
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.LayoutContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "main-layout__container"
            }, _react.default.createElement(_overlayHeader.OverlayHeader, null), _react.default.createElement("main", null, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null)))));
          };
          exports.Layout = Layout;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJCcm9rZXIiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJtZXNzYWdlIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsInNob3dDcmVkaXRzIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwic2hvd01lc3NhZ2UiLCJ0eXBlIiwidHJpZ2dlciIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJvdmVybGF5IiwidHJpZ2dlckV2ZW50Iiwic2V0QmFja0xpbmsiLCJiYWNrTGluayIsInNldE1vZGVsIiwic2V0IiwicHJvcHMiLCJpdGVtcyIsInVwZGF0ZWQiLCJvblJlZnJlc2giLCJyZWZyZXNoIiwiZXhwb3J0cyIsIkxheW91dEJyb2tlciIsImJyb2tlciIsIl9iYXNlIiwiX3N0b3JlIiwiX3ZpZXciLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkxheW91dCIsIl93cmFwcGVyIiwiX2Jyb2tlciIsIkFwcFdyYXBwZXIiLCJvbiIsImxpc3RlbmVyIiwibGMiLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsImlzUmVhZHkiLCJyZWFkeSIsIl9yZWFjdCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZExhYmVsIiwiY2hpbGRyZW4iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUVsZW1lbnQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJzcGFuIiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aWR0aCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiQW5pbWF0ZWQiLCJjbGFzc05hbWUiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY29udGV4dCIsIl9ob29rcyIsIkhlYWRlciIsInVzZUxheW91dENvbnRleHQiLCJoYXNNb2RlbCIsInNldEhhc01vZGVsIiwidXNlQmluZGVyIiwiTmF2YmFySGVhZGVyIiwiX2ljb25zIiwiT3ZlcmxheUhlYWRlciIsInVwZGF0ZSIsInNldFVwZGF0ZSIsImNsb3NhYmxlIiwiYmFja2xpbmsiLCJkZXRhaWwiLCJvdmVybGF5TGFiZWwiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJMYXlvdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfdWkiLCJfYmV5b25kX2NvbnRleHQiLCJfb3ZlcmxheUhlYWRlciIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93Q29pbnNNb2RhbCIsInNldFNob3dDb2luc01vZGFsIiwic2hvd0NvaW5zQWxlcnQiLCJzZXRTaG93Q29pbnNBbGVydCIsInRvZ2dsZUNvaW5zQWxlcnQiLCJ0b2dnbGVDb2luc01vZGFsIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwidmFsdWUiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiVG9hc3RzIl0sInNvdXJjZXMiOlsiL3RzL2Jyb2tlci50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvY29tcG9uZW50cy9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlldy9jb21wb25lbnRzL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3L2NvbXBvbmVudHMvb3ZlcmxheS1oZWFkZXIudHN4IiwiL3RzL3ZpZXcvY29udGV4dC50cyIsIi90cy92aWV3L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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