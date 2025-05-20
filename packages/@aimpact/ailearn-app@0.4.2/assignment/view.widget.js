System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.2/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.4.2/components/module-card"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, AccessDenied, View, EmptyList, List, Item, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp042MainLayoutWidget;
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
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_11 = _aimpactAilearnApp042ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_16 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp042ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp042ComponentsModuleCard;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.2/assignment/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/assignment/view.widget');
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
        hash: 757583212,
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
            name = 'assignment-view';
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
                const isCommunity = this.model.community;
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
                console.error(e);
              } finally {
                globalThis.setTimeout(() => {
                  super.ready = true;
                  this.trigger('change');
                }, 100);
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
        hash: 1569462442,
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
            } = store.model;
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
        hash: 3510865615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _empty = require("./list/empty");
          var _header = require("./header");
          var _list = require("./list");
          var _preload = require("./preload");
          var _accessDenied = require("./access-denied");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /*bundle*/
          function View({
            store
          }) {
            (0, _hooks.useStore)(store);
            const {
              texts,
              ready
            } = store;
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
              access: store.model?.accessed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJnbG9iYWxUaGlzIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl90cmFja2luZyIsIl9tb2RlbCIsIl9jb3JlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJuYW1lIiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiYXNzaWdubWVudElkIiwiZ2xvYmFsVGV4dHMiLCJmb3VuZCIsInJlYWR5IiwiaWQiLCJhY2Nlc3NEZW5pZWQiLCJpbmNsdWRlcyIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsImZldGNoIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJUcmFja2luZyIsImlzQ29tbXVuaXR5IiwiY29tbXVuaXR5IiwiY2xhc3Nyb29tTGluayIsImNsYXNzcm9vbSIsImNvbW11bml0eUxpbmsiLCJlbnRpdGllcyIsInBhcmVudCIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJtZXNzYWdlIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiYWNjZXNzVG9Bc3NpZ25tZW50IiwicmVzb2x2ZSIsInJlcXVlc3RBY2Nlc3MiLCJyZXNwb25zZSIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJfcmVhY3QiLCJfaW1hZ2UiLCJfdWkiLCJfY29tcG9uZW50cyIsIl9hbGVydCIsIkFjY2Vzc0RlbmllZCIsInN0YXR1cyIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwic3VidGl0bGUiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUmVxdWVzdCIsImRhdGEiLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiQWxlcnQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImZldGNoaW5nIiwiQXNzaWdubWVudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzaWdubWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY29udGV4dCIsIkhlYWRlciIsInNldEZldGNoaW5nIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsIm93bmVyIiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJzaXplIiwiVXNlckRhdGEiLCJQYWdlVGl0bGUiLCJhcyIsImFjdGl2aXRpZXMiLCJhY2Nlc3NlZCIsIl9lbXB0eSIsIl9oZWFkZXIiLCJfbGlzdCIsIl9wcmVsb2FkIiwiX2FjY2Vzc0RlbmllZCIsIl9ob29rcyIsInVzZVN0b3JlIiwiUHJlbG9hZCIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwiaXRlbXMiLCJMaXN0IiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwiY29udHJvbCIsIkl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJpbmRleCIsInVybCIsImNoYXQiLCJBY3Rpdml0eUNhcmQiLCJocmVmIiwidHlwZXMiLCJhdWRpZW5jZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjY2Vzcy1kZW5pZWQudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQ0MsVUFBVSxDQUFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Y0FDOUIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFOLEtBQU0sQ0FBQ08sT0FBTyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxN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