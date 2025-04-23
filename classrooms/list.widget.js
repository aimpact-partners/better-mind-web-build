System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.3.32/main-layout.widget", "@aimpact/ailearn-app@0.3.32/stores/base", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.32/components/ui", "@aimpact/ailearn-app@0.3.32/components/hooks", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.32/components/icons", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.3.32/components/module-card", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0332MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0332MainLayoutWidget;
    }, function (_aimpactAilearnApp0332StoresBase) {
      dependency_5 = _aimpactAilearnApp0332StoresBase;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk110EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_8 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Components) {
      dependency_9 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_aimpactAilearnApp0332ComponentsHooks) {
      dependency_11 = _aimpactAilearnApp0332ComponentsHooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp0332ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp0332ComponentsIcons;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_14 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_15 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp0332ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp0332ComponentsModuleCard;
    }, function (_pragmateUi100Beta7List) {
      dependency_17 = _pragmateUi100Beta7List;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/components/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16], ['pragmate-ui/list', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classrooms-list",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/classrooms/list.widget');
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
        hash: 1549482065,
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
              console.log(20, this.isTeacher);
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.classrooms]]
              });
              this.model;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsIldpZGdldCIsIlZpZXciLCJoaWRlIiwiZXhwb3J0cyIsIl9tYWluTGF5b3V0IiwiX2Jhc2UiLCJfY2xhc3Nyb29tcyIsIl9iZXlvbmRfY29udGV4dCIsIkxpc3RTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIkNsYXNzcm9vbXMiLCJjb25zb2xlIiwibG9nIiwiaXNUZWFjaGVyIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwiY2xhc3Nyb29tcyIsIm1vZGVsIiwiZGVsZXRlIiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJfcmVhY3QiLCJNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9jb21wb25lbnRzIiwiX3VpIiwiRGVsZXRlSXRlbU1vZGFsIiwib25DbG9zZSIsInNldE9wZW5Db25maXJtIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInRleHRzIiwib25Db25maXJtIiwiZSIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJNb2RhbCIsImNsYXNzTmFtZSIsInRpdGxlIiwiRXJyb3JSZW5kZXJlciIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJib3JkZXJlZCIsImFjdGlvbnMiLCJjYW5jZWwiLCJjb25maXJtIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9jb250ZXh0IiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIkxpbmsiLCJocmVmIiwicmVnaXN0ZXIiLCJfaG9va3MiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2Ryb3Bkb3duIiwiSGVhZGVyTWVudSIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwiam9pbiIsIkljb24iLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiSWNvbkJ1dHRvbiIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsIkFwcEljb24iLCJfZGVsZXRlIiwiX2hlYWRlck1lbnUiLCJfbGlzdCIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RvcmUiLCJ0b2dnbGVPcGVuIiwidmFsdWUiLCJ1c2VNZW1vIiwic3RhdGUiLCJyZWFkeSIsIlBhZ2VMb2FkZXIiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsIkNsYXNzcm9vbUxpc3QiLCJfbW9kdWxlQ2FyZCIsIl9lbXB0eSIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInVwZGF0ZSIsInNldFVwZGF0ZSIsInVzZUJpbmRlciIsIml0ZW1zIiwibGVuZ3RoIiwiSXRlbSIsInByb3BzIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJDbGFzc3Jvb21DYXJkIiwia2V5IiwiaWQiLCJ0b2dnbGVNb2RhbCIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kZWxldGUudHN4IiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXItbWVudS9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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