System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/widgets@1.1.2/controller", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.4.1/components/module-card", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, View, OrganizationCard, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    OrganizationCard: void 0
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
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_5 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_beyondJsReactive205Model) {
      dependency_6 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_beyondJsWidgets112Controller) {
      dependency_8 = _beyondJsWidgets112Controller;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_11 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_15 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_16 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_17 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Base) {
      dependency_18 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp041ComponentsModuleCard) {
      dependency_19 = _aimpactAilearnApp041ComponentsModuleCard;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_20 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7List) {
      dependency_21 = _pragmateUi100Beta7List;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/organizations/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/entities/organizations', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/widgets/controller', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/components/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['pragmate-ui/dropdown', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/base', dependency_18], ['@aimpact/ailearn-app/components/module-card', dependency_19], ['pragmate-ui/toast', dependency_20], ['pragmate-ui/list', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/organizations/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1968607220,
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
            show() {
              this.#store.load();
            }
            get Widget() {
              return _views.View;
            }
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2217180158,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            #items;
            get items() {
              return this.model.items;
            }
            #model;
            get model() {
              return this.#model;
            }
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts.value;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#model = new _organizations.Organizations();
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.model.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
            }
            async load() {
              try {
                this.fetching = true;
                await this.model.load();
                _mainLayout.LayoutBroker.set({
                  overlay: false,
                  breadcrumb: [[this.globalTexts.entities.organizations]]
                });
                globalThis.store = this;
                super.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async delete(item) {
              await item.delete();
            }
            toggleItem(item) {
              if (this.itemsSelected.has(item.id)) {
                this.#itemsSelected.delete(item.id);
                this.triggerEvent();
                return;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3256945616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1399087446,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description,
              icon: "edit"
            }, _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/organizations/management",
              className: "grow btn btn-primary"
            }, texts.actions.register)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/header-menu/index
      *****************************************/

      ims.set('./views/header-menu/index', {
        hash: 3268937514,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderMenu = HeaderMenu;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _dropdown = require("pragmate-ui/dropdown");
          function HeaderMenu({
            store: {
              texts
            }
          }) {
            const size = (0, _hooks.useMediaQuery)();
            if (size === 'md' || size === 'sm' || size === 'lg') {
              return _react.default.createElement("div", {
                className: "page-title__actions"
              }, _react.default.createElement(_components.Link, {
                href: `/organizations/join`
              }, texts.actions.join), _react.default.createElement(_components.Link, {
                href: "/organizations/management"
              }, _react.default.createElement(_icons.Icon, {
                icon: "add-circle"
              }), texts.actions.register));
            }
            return _react.default.createElement(_dropdown.Dropdown, {
              className: "mobile-header-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, {
              className: "mobile-header-menu__toggle"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "moreVert"
            })), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement(_dropdown.DropdownItem, {
              href: `/organizations/join`
            }, _react.default.createElement(_icons2.AppIcon, {
              icon: "community"
            }), texts.actions.join), _react.default.createElement(_dropdown.DropdownItem, {
              href: "/organizations/management"
            }, _react.default.createElement(_icons.Icon, {
              icon: "add-circle"
            }), texts.actions.register)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1109157603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("./list");
          var _headerMenu = require("./header-menu");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const value = _react.default.useMemo(() => ({
              texts,
              store,
              fetching
            }), [texts, store, fetching]);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_headerMenu.HeaderMenu, {
              store: store
            })), _react.default.createElement(_list.OrganizationsList, {
              store: store
            }))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/item/confirm-action
      *******************************************/

      ims.set('./views/item/confirm-action', {
        hash: 152144149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ConfirmAction({
            icon,
            callback,
            title,
            description
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/l18n');
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              icon: icon,
              onClick: onClickButton
            }), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 3908107744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationCard = OrganizationCard;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          /*bundle*/
          function OrganizationCard(props) {
            const {
              className,
              item
            } = props;
            const {
              texts
            } = (0, _context.useModuleContext)();
            const cls = className ? `organization-card ${className}` : 'organization-card';
            const copy = event => {
              event.stopPropagation();
              event.preventDefault();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_moduleCard.BaseCard, {
              className: cls,
              prefix: "organization",
              href: `/organizations/view/${item.id}`
            }, React.createElement(_moduleCard.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_moduleCard.BaseFooterCard, null, React.createElement(_moduleCard.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_moduleCard.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIcon, {
              name: "copy"
            }), React.createElement("div", null, React.createElement("span", null, texts.code), React.createElement("div", null, item.code))) : React.createElement("div", null))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 2192592222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationsList = OrganizationsList;
          var _react = require("react");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _empty = require("./empty");
          function OrganizationsList({
            store
          }) {
            if (store.items.length < 1) return _react.default.createElement(_empty.EmptyList, null);
            return _react.default.createElement("article", {
              className: "organization-list__container"
            }, _react.default.createElement(_list.List, {
              className: "list__items",
              items: store.items,
              texts: store.texts,
              control: _item.OrganizationCard
            }));
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
      }, {
        "im": "./views/item/index",
        "from": "OrganizationCard",
        "name": "OrganizationCard"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'OrganizationCard') && _export("OrganizationCard", OrganizationCard = require ? require('./views/item/index').OrganizationCard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tYWluTGF5b3V0IiwiX29yZ2FuaXphdGlvbnMiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwibW9kZWwiLCJpdGVtc1NlbGVjdGVkIiwiTWFwIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIk9yZ2FuaXphdGlvbnMiLCJmZXRjaCIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2hpbmciLCJMYXlvdXRCcm9rZXIiLCJzZXQiLCJvdmVybGF5IiwiYnJlYWRjcnVtYiIsImVudGl0aWVzIiwib3JnYW5pemF0aW9ucyIsImdsb2JhbFRoaXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiaXRlbSIsInRvZ2dsZUl0ZW0iLCJoYXMiLCJpZCIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsInJlZ2lzdGVyIiwiX2hvb2tzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9kcm9wZG93biIsIkhlYWRlck1lbnUiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImpvaW4iLCJJY29uIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkljb25CdXR0b24iLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJBcHBJY29uIiwiX2xpc3QiLCJfaGVhZGVyTWVudSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsInVzZUJpbmRlciIsInVzZU1lbW8iLCJQYWdlTG9hZGVyIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJPcmdhbml6YXRpb25zTGlzdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsIm9wZW4iLCJzZXRPcGVuIiwidXNlVGV4dHMiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQXBwSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsIlJlYWN0IiwiX21vZHVsZUNhcmQiLCJfdG9hc3QiLCJPcmdhbml6YXRpb25DYXJkIiwicHJvcHMiLCJjbHMiLCJjb3B5IiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcGllZCIsIkJhc2VDYXJkIiwicHJlZml4IiwiQmFzZUNhcmRIZWFkZXIiLCJuYW1lIiwiQmFzZUZvb3RlckNhcmQiLCJDYXJkT3duZXJTZWN0aW9uIiwiZGF0YSIsIm93bmVyIiwiQmFzZUhvdmVyRm9vdGVyQ2FyZCIsImNvZGUiLCJfaXRlbSIsIl9lbXB0eSIsImxlbmd0aCIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLW1lbnUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlILE1BQUEsQ0FBQUssWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFFQUcsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBSCxLQUFNLENBQUNJLElBQUksRUFBRTtZQUNuQjtZQUNBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPVCxNQUFBLENBQUFVLElBQUk7WUFDWjtZQUNBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CRCxJQUFBVyxXQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxjQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBRUEsSUFB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