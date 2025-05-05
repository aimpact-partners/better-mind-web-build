System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@aimpact/ailearn-app@0.4.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/components/module-card", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_aimpactAilearnApp041StoresBase) {
      dependency_5 = _aimpactAilearnApp041StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_8 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Components) {
      dependency_9 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_10 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_11 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_14 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_15 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp041ComponentsModuleCard;
    }, function (_pragmateUi100Beta7List) {
      dependency_17 = _pragmateUi100Beta7List;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/components/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classrooms-list",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/classrooms/list.widget');
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
        hash: 4037546233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.ListStoreManager {
            constructor() {
              super(_beyond_context.module.specifier, _classrooms.Classrooms);
            }
            async load() {
              await super.load();
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.classrooms]]
              });
            }
            async delete(item) {
              await item.delete();
            }
            async deleteItem(item) {
              await item.delete();
              await this.model?.load();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3362648760,
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

      /******************************
      INTERNAL MODULE: ./views/delete
      ******************************/

      ims.set('./views/delete', {
        hash: 3437555610,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteItemModal = DeleteItemModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function DeleteItemModal({
            onClose,
            item,
            store
          }) {
            const [, setOpenConfirm] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            const texts = store.texts;
            const onConfirm = async () => {
              try {
                setFetching(true);
                await store.deleteItem(item);
                onClose();
              } catch (e) {
                setError(texts.delete.errors[e.code?.toString()] ?? texts.delete.errors.default);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("header", {
              className: "modal__header"
            }, _react.default.createElement("h2", null, texts.delete.title)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement("div", {
              className: "modal__content"
            }, _react.default.createElement("p", null, texts.delete.description)), _react.default.createElement("footer", {
              className: "modal__actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onClose,
              variant: "primary",
              bordered: true
            }, texts.actions.cancel), _react.default.createElement(_components.Button, {
              onClick: onConfirm,
              variant: "primary"
            }, texts.actions.confirm)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1218374095,
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
              href: "/classrooms/management",
              className: "grow btn btn-primary"
            }, texts.actions.register)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/header-menu/index
      *****************************************/

      ims.set('./views/header-menu/index', {
        hash: 2587190906,
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
            store
          }) {
            const {
              texts,
              isTeacher
            } = store;
            const size = (0, _hooks.useMediaQuery)();
            if (size === 'md' || size === 'sm' || size === 'lg') {
              return _react.default.createElement("div", {
                className: "page-title__actions"
              }, _react.default.createElement(_components.Link, {
                href: `/classrooms/join`
              }, texts.actions.join), isTeacher && _react.default.createElement(_components.Link, {
                href: "/classrooms/management"
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
              href: `/classrooms/join`
            }, _react.default.createElement(_icons2.AppIcon, {
              icon: "community"
            }), texts.actions.join), isTeacher && _react.default.createElement(_dropdown.DropdownItem, {
              href: "/classrooms/management"
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
        hash: 325597947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _delete = require("./delete");
          var _headerMenu = require("./header-menu");
          var _list = require("./list");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [selectedItem, setSelectedItem] = (0, _react.useState)(null);
            const [open, setOpen] = _react.default.useState(false);
            const {
              texts
            } = store;
            (0, _hooks.useStore)(store);
            const toggleOpen = () => {
              if (open) setSelectedItem(null);
              setOpen(!open);
              setSelectedItem(null);
            };
            const value = _react.default.useMemo(() => ({
              texts,
              store,
              selectedItem,
              setSelectedItem,
              ...store.state
            }), [texts, store.state, selectedItem]);
            if (!store.state.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.PageTitle, {
              title: `${texts.title}`
            }, _react.default.createElement(_headerMenu.HeaderMenu, {
              store: store
            })), _react.default.createElement(_list.ClassroomList, null))), selectedItem && _react.default.createElement(_delete.DeleteItemModal, {
              item: selectedItem,
              store: store,
              texts: texts,
              onClose: toggleOpen
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 2415622617,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomList = ClassroomList;
          var _react = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _context = require("./context");
          var _empty = require("./empty");
          function ClassroomList() {
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const [update, setUpdate] = _react.default.useState({});
            const {
              store,
              setSelectedItem
            } = (0, _context.useModuleContext)();
            (0, _hooks.useBinder)([store.model], () => {
              setUpdate({});
            }, 'items.changed');
            if (store.items.length < 1) return _react.default.createElement(_empty.EmptyList, null);
            const Item = ({
              item,
              ...props
            }) => {
              const actions = {
                delete: event => {
                  event.stopPropagation();
                  setSelectedItem(item);
                }
              };
              return _react.default.createElement(_moduleCard.ClassroomCard, {
                key: item.id,
                item: item,
                actions: actions,
                texts: store.globalTexts
              });
            };
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("article", {
              className: "organization-list__container"
            }, _react.default.createElement(_list.List, {
              className: "list__items",
              items: store.items,
              control: Item
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tYWluTGF5b3V0IiwiX2Jhc2UiLCJfY2xhc3Nyb29tcyIsIl9iZXlvbmRfY29udGV4dCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIkNsYXNzcm9vbXMiLCJMYXlvdXRCcm9rZXIiLCJzZXQiLCJvdmVybGF5IiwiYnJlYWRjcnVtYiIsImdsb2JhbFRleHRzIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwiZGVsZXRlIiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJtb2RlbCIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJEZWxldGVJdGVtTW9kYWwiLCJvbkNsb3NlIiwic2V0T3BlbkNvbmZpcm0iLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlcnJvciIsInNldEVycm9yIiwidGV4dHMiLCJvbkNvbmZpcm0iLCJlIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwidmFyaWFudCIsImJvcmRlcmVkIiwiYWN0aW9ucyIsImNhbmNlbCIsImNvbmZpcm0iLCJQcm9jZXNzQ29udGFpbmVyIiwiX2NvbnRleHQiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiTGluayIsImhyZWYiLCJyZWdpc3RlciIsIl9ob29rcyIsIl9pY29ucyIsIl9pY29uczIiLCJfZHJvcGRvd24iLCJIZWFkZXJNZW51IiwiaXNUZWFjaGVyIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJqb2luIiwiSWNvbiIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJJY29uQnV0dG9uIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiQXBwSWNvbiIsIl9kZWxldGUiLCJfaGVhZGVyTWVudSIsIl9saXN0Iiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdG9yZSIsInRvZ2dsZU9wZW4iLCJ2YWx1ZSIsInVzZU1lbW8iLCJzdGF0ZSIsInJlYWR5IiwiUGFnZUxvYWRlciIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiQ2xhc3Nyb29tTGlzdCIsIl9tb2R1bGVDYXJkIiwiX2VtcHR5Iiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlQmluZGVyIiwiaXRlbXMiLCJsZW5ndGgiLCJJdGVtIiwicHJvcHMiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIkNsYXNzcm9vbUNhcmQiLCJrZXkiLCJpZCIsInRvZ2dsZU1vZGFsIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RlbGV0ZS50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci1tZW51L2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBw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