System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.4.1/components/module-card"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, AccessDenied, View, EmptyList, List, Item, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AccessDenied: void 0,
    View: void 0,
    EmptyList: void 0,
    List: void 0,
    Item: void 0
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
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_5 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive205Model) {
      dependency_6 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_8 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_11 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp041ComponentsModuleCard) {
      dependency_16 = _aimpactAilearnApp041ComponentsModuleCard;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/ailearn-app/components/module-card', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/assignment/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 663962876,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              globalThis.store = this.#store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.testing = this.uri.qs.get('type') === 'draft';
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3393476629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            #model;
            get model() {
              return this.#model;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get found() {
              return this.#model?.found;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #id;
            get id() {
              return this.#id;
            }
            get accessDenied() {
              return this.model.found && ['not_member', 'pending', 'invited'].includes(this.#model.access.toLowerCase());
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
            }
            async load(id) {
              try {
                this.#id = id;
                _mainLayout.LayoutBroker.clear();
                this.#assignmentId = id;
                this.#model = _tracking.Tracking.get({
                  id
                });
                this.#model.on('change', this.triggerEvent);
                await this.#model.load({
                  id
                });
                // pending
                if (['not_member', 'pending', 'invited'].includes(this.#model.access.toLowerCase())) {
                  super.ready = true;
                  return;
                }
                const isCommunity = this.model.community || this.model.classroom.id === '8843c24a-e594-47ef-bed5-b6fd742c5758';
                const classroomLink = [this.#model.classroom.name, `/classrooms/view/${this.#model.classroom.id}`];
                const communityLink = [this.globalTexts.entities.community, `/community`];
                const parent = isCommunity ? communityLink : classroomLink;
                const breadcrumb = [parent, [this.#model.module.title]];
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  breadcrumb,
                  backLink: isCommunity ? '/' : `/classrooms/view/${this.#model.classroom.id}`
                });
              } catch (e) {
                if (e.message === '404' || e.code === 404) {
                  return;
                }
                if (e.message === '403') {
                  return;
                }
              } finally {
                super.ready = true;
                this.triggerEvent();
              }
            }
            async access() {
              try {
                const promise = new _core.PendingPromise();
                await this.#model.accessToAssignment();
                /**
                 * TODO: Analyze if the setTimeout it's necessary
                 * The original idea is show a loading screen to show
                 * the processing action of the access method.
                 */
                globalThis.setTimeout(() => {
                  this.triggerEvent();
                  promise.resolve(true);
                }, 1500);
                return promise;
              } catch (e) {
                console.error(e);
              }
            }
            async requestAccess() {
              const response = await this.model.requestClassroomAccess();
              return response;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/access-denied
      *************************************/

      ims.set('./views/access-denied', {
        hash: 662181399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AccessDenied = AccessDenied;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          /*bundle*/
          function AccessDenied({
            store
          }) {
            const {
              texts
            } = store;
            const status = store.model?.access?.toLowerCase();
            const {
              title,
              action,
              description,
              subtitle
            } = texts[status] ?? 'not_allowed';
            const [error, setError] = _react.default.useState();
            const [message, setMessage] = _react.default.useState();
            const [processing, setProcessing] = _react.default.useState(false);
            const onRequest = async () => {
              try {
                setProcessing(true);
                if (status === 'pending') {
                  await store.load(store.id);
                  return;
                }
                const response = await store.requestAccess();
                if (!response.status) {
                  setError(response.error);
                  return;
                }
                setMessage(response.data.message);
              } catch (e) {
                console.error(e);
              } finally {
                setProcessing(false);
              }
            };
            const disabled = {
              disabled: processing
            };
            const {
              classroom,
              module
            } = store.model.assignment;
            return _react.default.createElement(_ui.PageContainer, {
              className: "container__error place-center"
            }, error && _react.default.createElement(_alert.Alert, {
              type: "danger"
            }, error), message && _react.default.createElement(_alert.Alert, {
              type: "success"
            }, message), _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, title), _react.default.createElement("h5", null, subtitle)), classroom && module && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("article", {
              className: "access-classroom__container"
            }, _react.default.createElement("section", null, _react.default.createElement(_image.Image, {
              src: module.picture,
              alt: module.name
            })), _react.default.createElement("section", null, _react.default.createElement("h3", null, classroom?.name), _react.default.createElement("h6", null, module?.title)))), _react.default.createElement("p", null, description), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onRequest,
              fetching: processing,
              ...disabled
            }, action))), _react.default.createElement("div", null, _react.default.createElement(_image.Image, {
              src: "/assets/images/students/not-allowed.webp",
              alt: "Student does not have access",
              className: "img-100 img-move-animation"
            })));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 254260041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAssignmentContext = exports.AssignmentContext = void 0;
          var _react = require("react");
          const AssignmentContext = exports.AssignmentContext = _react.default.createContext({});
          const useAssignmentContext = () => _react.default.useContext(AssignmentContext);
          exports.useAssignmentContext = useAssignmentContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 31807288,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1657991703,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          function Header() {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [showMessage, setShowMessage] = _react.default.useState(false);
            const {
              title,
              description,
              picture,
              owner
            } = store.model.module;
            const onClick = async () => {
              setFetching(true);
              await store.access();
              setFetching(false);
              setShowMessage(true);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title,
              size: "xs"
            }), _react.default.createElement("h1", null, title), _react.default.createElement("div", null, _react.default.createElement("p", {
              className: "p1"
            }, description), _react.default.createElement(_ui.UserData, {
              data: owner
            }))), _react.default.createElement(_ui.PageTitle, {
              as: "h3",
              title: texts.activities.title
            }, !access && !showMessage && _react.default.createElement(_components.Button, {
              variant: "primary",
              fetching: fetching,
              onClick: onClick
            }, texts.access)), showMessage && _react.default.createElement(_alert.Alert, {
              type: "success",
              className: "mt-10"
            }, texts.accessed));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 850839619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          var _preload = require("./preload");
          var _accessDenied = require("./access-denied");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            /**
             * access property defines if the student had access to the assignment
             * accessPermission property defines if the student has permission to access the assignment
             */
            const [access, setAccess] = _react.default.useState(store.model?.accessed);
            const [accessPermission, setAccessPermission] = _react.default.useState(store.model?.access);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setAccessPermission(store.model?.access);
              setAccess(store?.model.accessed);
            });
            if (ready && store.accessDenied) return _react.default.createElement(_accessDenied.AccessDenied, {
              store: store
            });
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
            if (!ready) return _react.default.createElement(_preload.Preload, null);
            const {
              activities
            } = store.model;
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              activities,
              access
            };
            const cls = `assignment-view `;
            return _react.default.createElement(_context.AssignmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement("div", {
              className: "general-container"
            }, _react.default.createElement(_header.Header, null), activities.items ? _react.default.createElement(_list.List, null) : _react.default.createElement(_empty.EmptyList, null))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 2641747395,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          /*bundle*/
          function EmptyList() {
            const {
              texts
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.empty,
              icon: "info"
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 3643910632,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _item = require("./item");
          var _react = require("react");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          function List() {
            const {
              activities
            } = (0, _context.useAssignmentContext)();
            return _react.default.createElement(_list.List, {
              className: "entity__list",
              items: activities.items,
              control: _item.Item
            });
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/list/item
      *********************************/

      ims.set('./views/list/item', {
        hash: 404527828,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function Item({
            data: item,
            index
          }) {
            const {
              store,
              texts,
              access
            } = (0, _context.useAssignmentContext)();
            const type = item.type === 'multiple-choice' ? 'assessment' : item.type;
            let url = `/assignments/${store.assignmentId}/${type}/${item.id}`;
            if (!!access && ['conversation', 'content-theory', 'debate', 'character-talk'].includes(item.type)) {
              url += `/chat/${item.chat?.id}`;
            }
            return _react.default.createElement("li", null, _react.default.createElement(_moduleCard.ActivityCard, {
              type: item.type,
              href: url,
              disabled: !access,
              item: item,
              texts: {
                ...texts,
                types: store.globalTexts.activities.types
              },
              audience: false,
              entity: "activity"
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/preload
      *******************************/

      ims.set('./views/preload', {
        hash: 4164586609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          function Preload() {
            return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_image.Image, {
              className: "entity-image image--preload"
            }), _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "100px"
            }), _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "200px"
            })), _react.default.createElement(_ui.PageTitle, {
              preload: true
            }, _react.default.createElement(_components.Button, {
              className: "preload-btn",
              variant: "primary"
            }, "\u00A0")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/access-denied",
        "from": "AccessDenied",
        "name": "AccessDenied"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/list/empty",
        "from": "EmptyList",
        "name": "EmptyList"
      }, {
        "im": "./views/list/index",
        "from": "List",
        "name": "List"
      }, {
        "im": "./views/list/item",
        "from": "Item",
        "name": "Item"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AccessDenied') && _export("AccessDenied", AccessDenied = require ? require('./views/access-denied').AccessDenied : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'EmptyList') && _export("EmptyList", EmptyList = require ? require('./views/list/empty').EmptyList : value);
        (require || prop === 'List') && _export("List", List = require ? require('./views/list/index').List : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./views/list/item').Item : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJhc3NpZ25tZW50SWQiLCJnbG9iYWxUZXh0cyIsImZvdW5kIiwicmVhZHkiLCJpZCIsImFjY2Vzc0RlbmllZCIsImluY2x1ZGVzIiwiYWNjZXNzIiwidG9Mb3dlckNhc2UiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2giLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsIlRyYWNraW5nIiwiaXNDb21tdW5pdHkiLCJjb21tdW5pdHkiLCJjbGFzc3Jvb20iLCJjbGFzc3Jvb21MaW5rIiwibmFtZSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJtZXNzYWdlIiwiY29kZSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImFjY2Vzc1RvQXNzaWdubWVudCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiY29uc29sZSIsImVycm9yIiwicmVxdWVzdEFjY2VzcyIsInJlc3BvbnNlIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsIl9yZWFjdCIsIl9pbWFnZSIsIl91aSIsIl9jb21wb25lbnRzIiwiX2FsZXJ0IiwiQWNjZXNzRGVuaWVkIiwic3RhdHVzIiwiYWN0aW9uIiwiZGVzY3JpcHRpb24iLCJzdWJ0aXRsZSIsInNldEVycm9yIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0TWVzc2FnZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25SZXF1ZXN0IiwiZGF0YSIsImRpc2FibGVkIiwiYXNzaWdubWVudCIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImZldGNoaW5nIiwiQXNzaWdubWVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29udGV4dCIsIkhlYWRlciIsInNldEZldGNoaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm93bmVyIiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJzaXplIiwiVXNlckRhdGEiLCJQYWdlVGl0bGUiLCJhcyIsImFjdGl2aXRpZXMiLCJhY2Nlc3NlZCIsIl9ob29rcyIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9wcmVsb2FkIiwiX2FjY2Vzc0RlbmllZCIsInNldFJlYWR5Iiwic2V0QWNjZXNzIiwiYWNjZXNzUGVybWlzc2lvbiIsInNldEFjY2Vzc1Blcm1pc3Npb24iLCJ1c2VCaW5kZXIiLCJQcmVsb2FkIiwiY29udGV4dFZhbHVlIiwiY2xzIiwiUHJvdmlkZXIiLCJpdGVtcyIsIkxpc3QiLCJFbXB0eUxpc3QiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2l0ZW0iLCJjb250cm9sIiwiSXRlbSIsIl9tb2R1bGVDYXJkIiwiaXRlbSIsImluZGV4IiwidXJsIiwiY2hhdCIsIkFjdGl2aXR5Q2FyZCIsImhyZWYiLCJ0eXBlcyIsImF1ZGllbmNlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwcmVsb2FkIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWNjZXNzLWRlbmllZC50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQ0MsVUFBVSxDQUFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Y0FDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFO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