System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.3.32/main-layout.widget", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.4.4/session", "@aimpact/ailearn-app@0.3.32/i18n.ts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.32/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.3.32/components/module-card", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.32/components/icons", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0332MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0332MainLayoutWidget;
    }, function (_beyondJsReactive204Model) {
      dependency_5 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_aimpactChatSdk144Session) {
      dependency_8 = _aimpactChatSdk144Session;
    }, function (_aimpactAilearnApp0332I18nTs) {
      dependency_9 = _aimpactAilearnApp0332I18nTs;
    }, function (_react) {
      dependency_10 = _react;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp0332ComponentsModuleCard) {
      dependency_14 = _aimpactAilearnApp0332ComponentsModuleCard;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0332ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0332ComponentsIcons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_17 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsKernel0112Routing) {
      dependency_18 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_19 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7List) {
      dependency_20 = _pragmateUi100Beta7List;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/archive",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn-app/components/module-card', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/modal', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/empty', dependency_19], ['pragmate-ui/list', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-archive-app",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/archive.widget",
        "is": "page",
        "route": "/archive",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/archive.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2233299519,
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
              const tab = this.uri.qs.get('tab');
              this.#store.init();
              this.#store.load(tab);
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
        hash: 3122996310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #modules;
            get modules() {
              return this.#modules;
            }
            get published() {
              return this.#modules;
            }
            get assignments() {
              return _session.sessionWrapper.user.archive;
            }
            #tab;
            get tab() {
              return this.#tab;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            constructor() {
              super();
              //@ts-ignore
              this.#modules = new _learningModules.LearningModules({
                archived: true
              });
              this.#modules.on('change', this.triggerEvent);
              this.#modules.on('items.changed', () => this.trigger('items.changed'));
              globalThis.store = this;
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.setBreadcrumb();
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.#texts.off('change', this.listenTexts);
            }
            setBreadcrumb() {
              _mainLayout.LayoutBroker.overlay = false;
            }
            load(type = 'modules') {
              const types = {
                assignments: this.loadAssignments.bind(this),
                modules: this.loadModules.bind(this)
              };
              const titles = {
                modules: this.globalTexts.entities.modules,
                assignments: this.globalTexts.entities.assignments
              };
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[titles[type]]]
              });
              if (!types[type]) {
                throw new Error(`Invalid type: ${type}`);
              }
              return types[type]();
            }
            async loadModules() {
              this.#tab = 'modules';
              if (this.#modules.loaded) return;
              //@ts-ignore
              const response = await this.#modules.load();
              super.ready = true;
              this.trigger('items.changed');
              return response;
            }
            async loadAssignments() {
              this.#tab = 'assignments';
              //@ts-ignore
              const response = await _session.sessionWrapper.user.archive.load();
              super.ready = true;
              this.trigger('items.changed');
            }
            async restoreModule(item) {
              await item.restore();
              await this.#modules.load();
              this.trigger('items.changed');
              return;
            }
            async restoreAssignment(item) {
              await item.restore();
              //@ts-ignore
              await _session.sessionWrapper.user.archive.load();
              this.trigger('items.changed');
              return;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2708434875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var React = require("react");
          const ListContext = exports.ListContext = React.createContext({});
          const useListContext = () => React.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 3311512184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.general.title,
              description: texts.empty.general.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/modules/management",
              className: "grow btn btn-primary"
            }, store.globalTexts.actions.create)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2390277244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [fetching] = React.useState(store.fetching);
            const [updated, setUpdated] = React.useState({});
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
            }, ['items.changed']);
            if (!store.ready) return React.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts,
              store,
              fetching
            };
            return React.createElement(_context.ListContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: texts.title
            }), React.createElement(_list.List, null)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/item/assignments
      ****************************************/

      ims.set('./views/item/assignments', {
        hash: 2724520061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = Assignment;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../context");
          var _restore = require("./restore");
          function Assignment({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [updated, setUpdated] = React.useState(item.getProperties());
            const [openRestore, setOpenRestore] = React.useState(false);
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            const toggleRestore = event => {
              event?.stopPropagation();
              setOpenRestore(!openRestore);
            };
            const onRestore = event => {
              event.stopPropagation();
              setOpenRestore(!openRestore);
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.AssignmentCard, {
              href: `/dashboard/${item.id}`,
              type: item.type,
              item: item.module,
              texts: {
                texts,
                actions: store.globalTexts.actions
              },
              actions: {
                restore: onRestore
              },
              classroom: item.classroom,
              audience: false,
              archived: true,
              entity: "assignment"
            }), openRestore && React.createElement(_restore.RestoreItemModal, {
              type: "assignments",
              onClose: toggleRestore,
              item: item,
              texts: texts,
              store: store
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/module
      ***********************************/

      ims.set('./views/item/module', {
        hash: 923022629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var React = require("react");
          var _context = require("../context");
          var _restore = require("./restore");
          function ModuleItem({
            item
          }) {
            const {
              texts,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useListContext)();
            const [updated, setUpdated] = React.useState(item.getProperties());
            const [openClone, setOpenClone] = React.useState(false);
            const [openModal, setOpenModal] = React.useState(false);
            const [actionSelected, setActionSelected] = React.useState(undefined);
            const [openRestore, setOpenRestore] = React.useState(false);
            (0, _hooks.useBinder)([item], () => {
              globalThis.item = item;
              setUpdated(item.getProperties());
            });
            const onAction = event => {
              event.stopPropagation();
              setOpenModal(true);
              setActionSelected(event.currentTarget.dataset.action);
            };
            const toggleRestore = event => {
              event?.stopPropagation();
              setOpenRestore(!openRestore);
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              texts: texts,
              entity: "module",
              onClick: onAction,
              archived: true
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "restore",
              title: globalTexts.actions.restore,
              onClick: toggleRestore
            })))), openRestore && React.createElement(_restore.RestoreItemModal, {
              onClose: toggleRestore,
              item: item,
              texts: texts,
              store: store
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/item/restore
      ************************************/

      ims.set('./views/item/restore', {
        hash: 3844841898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RestoreItemModal = RestoreItemModal;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function RestoreItemModal({
            type = 'modules',
            onClose,
            item,
            texts
          }) {
            const [, setOpenConfirm] = React.useState(false);
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState(null);
            const {
              store
            } = (0, _context.useListContext)();
            const globalTexts = store.globalTexts;
            const onConfirm = async () => {
              try {
                setFetching(true);
                if (type === 'modules') {
                  await store.restoreModule(item);
                } else {
                  await store.restoreAssignment(item);
                }
                onClose();
              } catch (e) {
                console.log(e);
                setError(texts.delete.errors[e.code.toString()] ?? texts.delete.errors.default);
              } finally {
                setFetching(false);
              }
            };
            return React.createElement(_modal.Modal, {
              show: true,
              onClose: onClose,
              className: "pui-modal-delete"
            }, React.createElement("header", {
              className: "modal__header"
            }, React.createElement("h2", null, texts.restore[type].title)), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement("div", {
              className: "modal__content"
            }, React.createElement("p", null, texts.restore[type].description)), React.createElement("footer", {
              className: "modal__actions"
            }, React.createElement(_components.Button, {
              onClick: onClose,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.cancel), React.createElement(_components.Button, {
              onClick: onConfirm,
              variant: "primary"
            }, globalTexts.actions.confirm)), React.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 2191235383,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _empty = require("pragmate-ui/empty");
          var React = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _assignments = require("../item/assignments");
          var _module = require("../item/module");
          function List({}) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const tabs = ['modules', 'assignments'];
            const tabIndex = tabs.indexOf(store.tab);
            const [collection, setCollection] = React.useState(store[store.tab]);
            const [tabSelect, useTabSelect] = React.useState(tabIndex);
            const [fetching, setFetching] = React.useState(store.fetching);
            const emptyTexts = texts.empty[tabs[tabIndex]];
            const [updated, setUpdated] = React.useState({});
            const itemControls = {
              assignments: _assignments.Assignment,
              modules: _module.ModuleItem
            };
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
            }, 'items.changed');
            const onChange = async event => {
              let urlParams = new URLSearchParams(globalThis.location.search);
              const tab = tabs[parseInt(event.currentTarget.dataset.index)];
              urlParams.set('tab', tab);
              const target = event.currentTarget;
              target.closest('.pui-tabs-menu').querySelectorAll('.pui-tab').forEach(tab => tab.classList.remove('active'));
              target.classList.add('active');
              _routing.routing.replaceState({}, document.title, `/archive?${urlParams.toString()}`);
              useTabSelect(parseInt(event.currentTarget.dataset.index));
              setFetching(true);
              await store.load(tab);
              setCollection(store[tab]);
              setFetching(false);
            };
            if (fetching && !collection.items.length) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_ui.AppLoader, null));
            }
            const ListTab = ({
              items
            }) => {
              if (!items.length) {
                return React.createElement(_ui.EmptyCard, {
                  text: emptyTexts.title,
                  description: emptyTexts.description,
                  icon: "info"
                });
              }
              return React.createElement(_list.List, {
                empty: _ui.EmptyCard,
                className: "entity__list mt-15",
                items: items,
                control: itemControls[store.tab]
              });
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "pui-tabs-container pui-page-tabs-container"
            }, React.createElement("header", {
              className: "pui-tabs-menu tabs page__tabs"
            }, React.createElement("div", {
              "data-index": "0",
              className: `pui-tab tab${tabSelect === 0 ? ' active' : ''}`,
              onClick: onChange
            }, texts.tabs.modules), React.createElement("div", {
              "data-index": "1",
              className: `pui-tab tab${tabSelect === 1 ? ' active' : ''}`,
              onClick: onChange
            }, texts.tabs.assignments))), fetching ? React.createElement(_empty.Empty, {
              className: "loading-list-page"
            }, React.createElement(_ui.AppLoader, null)) : React.createElement("div", {
              className: "pui-tab-panes"
            }, React.createElement(ListTab, {
              items: collection.items
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/types
      *****************************/

      ims.set('./views/types', {
        hash: 12017522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Nlc3Npb24iLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2R1bGVzIiwicHVibGlzaGVkIiwiYXNzaWdubWVudHMiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhcmNoaXZlIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsImdsb2JhbFRleHRzIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIkxlYXJuaW5nTW9kdWxlcyIsImFyY2hpdmVkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyIiwiZ2xvYmFsVGhpcyIsImxpc3RlblRleHRzIiwic2V0QnJlYWRjcnVtYiIsIm9mZiIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJ0eXBlIiwidHlwZXMiLCJsb2FkQXNzaWdubWVudHMiLCJiaW5kIiwibG9hZE1vZHVsZXMiLCJ0aXRsZXMiLCJlbnRpdGllcyIsInNldCIsImJyZWFkY3J1bWIiLCJFcnJvciIsImxvYWRlZCIsInJlc3BvbnNlIiwicmVzdG9yZU1vZHVsZSIsIml0ZW0iLCJyZXN0b3JlIiwicmVzdG9yZUFzc2lnbm1lbnQiLCJSZWFjdCIsIkxpc3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUxpc3QiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiZ2VuZXJhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiY3JlYXRlIiwiX2hvb2tzIiwiX2xpc3QiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJMaXN0IiwiX21vZHVsZUNhcmQiLCJfcmVzdG9yZSIsIkFzc2lnbm1lbnQiLCJnZXRQcm9wZXJ0aWVzIiwib3BlblJlc3RvcmUiLCJzZXRPcGVuUmVzdG9yZSIsInRvZ2dsZVJlc3RvcmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVzdG9yZSIsIkZyYWdtZW50IiwiQXNzaWdubWVudENhcmQiLCJpZCIsImNsYXNzcm9vbSIsImF1ZGllbmNlIiwiZW50aXR5IiwiUmVzdG9yZUl0ZW1Nb2RhbCIsIm9uQ2xvc2UiLCJfaWNvbnMiLCJNb2R1bGVJdGVtIiwib3BlbkNsb25lIiwic2V0T3BlbkNsb25lIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiYWN0aW9uU2VsZWN0ZWQiLCJzZXRBY3Rpb25TZWxlY3RlZCIsInVuZGVmaW5lZCIsIm9uQWN0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhY3Rpb24iLCJNb2R1bGVDYXJkIiwib25DbGljayIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJfbW9kYWwiLCJzZXRPcGVuQ29uZmlybSIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uQ29uZmlybSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiZGVmYXVsdCIsIk1vZGFsIiwiRXJyb3JSZW5kZXJlciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbmZpcm0iLCJQcm9jZXNzQ29udGFpbmVyIiwiX3JvdXRpbmciLCJfZW1wdHkiLCJfYXNzaWdubWVudHMiLCJfbW9kdWxlIiwidGFicyIsInRhYkluZGV4IiwiaW5kZXhPZiIsImNvbGxlY3Rpb24iLCJzZXRDb2xsZWN0aW9uIiwidGFiU2VsZWN0IiwidXNlVGFiU2VsZWN0IiwiZW1wdHlUZXh0cyIsIml0ZW1Db250cm9scyIsIm9uQ2hhbmdlIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJzZUludCIsImluZGV4IiwidGFyZ2V0IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwiaXRlbXMiLCJsZW5ndGgiLCJFbXB0eSIsIkFwcExvYWRlciIsIkxpc3RUYWIiLCJjb250cm9sIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hc3NpZ25tZW50cy50c3giLCIvdHMvdmlld3MvaXRlbS9tb2R1bGUudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vcmVzdG9yZS50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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