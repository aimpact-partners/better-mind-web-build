System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/components/module-card", "@aimpact/ailearn-app@0.4.1/modules/owner-assign.code", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/modules/assign", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, AssignmentItem, CommunityItem, View, ModuleItem, UserCard, ProfileSection, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AssignmentItem: void 0,
    CommunityItem: void 0,
    View: void 0,
    ModuleItem: void 0,
    UserCard: void 0,
    ProfileSection: void 0
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
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_7 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsReactive205Model) {
      dependency_8 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_9 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_16 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnApp041ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp041ComponentsModuleCard;
    }, function (_aimpactAilearnApp041ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp041ModulesOwnerAssignCode;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_19 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ModulesAssign) {
      dependency_20 = _aimpactAilearnApp041ModulesAssign;
    }, function (_pragmateUi100Beta7Image) {
      dependency_21 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_22 = _pragmateUi100Beta7Swiper;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/home",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/list', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/ailearn-app/modules/assign', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/swiper', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/home.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1066500691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            hideTimeout = null;
            get Widget() {
              return _views.View;
            }
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            constructor(args) {
              super(args);
              _session.sessionWrapper.on('logout', this.onLogout);
              _session.sessionWrapper.on('login', this.onLogin);
            }
            onLogout = () => {
              this.#store.clear();
              this.hideTimeout = undefined;
              _session.sessionWrapper.off('logout', this.onLogout);
            };
            onLogin = () => {
              _session.sessionWrapper.on('logout', this.onLogout);
            };
            /**
             * this method is executed when the widget is showd
             *
             */
            show() {
              if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
              }
              _mainLayout.LayoutBroker.overlay = false;
              this.#store.load();
            }
            /**
             * this method is executed when the widget is hidden
             */
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
        hash: 1948430001,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #model;
            isStore;
            get model() {
              return this.#model;
            }
            get items() {
              return this.#model.assignments;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #assignments;
            get assignments() {
              return this.#assignments;
            }
            #drafts;
            get drafts() {
              return this.#drafts;
            }
            #classrooms;
            get classrooms() {
              return this.#classrooms;
            }
            #modules;
            get modules() {
              return this.#modules;
            }
            #community;
            get community() {
              return this.#community;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get isTeacher() {
              return this.user?.roles.includes('teacher');
            }
            get ready() {
              // console.log(1, super.ready, this.#texts.ready, this.#globalTexts.ready);
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
              this.#texts.fetch();
            }
            async load() {
              try {
                this.#model = _session.sessionWrapper;
                _mainLayout.LayoutBroker.set({
                  overlay: false,
                  breadcrumb: []
                });
                const response = await this.#model.user.getHome();
                if (!response.status) {
                  throw new Error('Error fetching home data');
                }
                const data = response.data;
                this.#drafts = data.drafts;
                this.#assignments = data.assignments;
                this.#classrooms = data.classrooms;
                const modules = data.modules ?? [];
                this.#modules = modules.map(item => {
                  const instance = new _learningModules.LearningModule(item);
                  return instance;
                });
                modules.map((item, index) => {
                  //@ts-ignore
                  this.#modules[index].set(item);
                });
                this.#community = data.community;
                super.ready = true;
                globalThis.store = this;
              } catch (e) {
                console.error(e);
              }
            }
            clear() {
              this.#drafts = [];
              this.#assignments = [];
              this.#classrooms = [];
              this.#modules = [];
              super.ready = false;
              this.triggerEvent();
              this.#model = undefined;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/aside/classrooms/empty
      **********************************************/

      ims.set('./views/aside/classrooms/empty', {
        hash: 788103794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyAsideClassrooms = EmptyAsideClassrooms;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          function EmptyAsideClassrooms() {
            const {
              texts: {
                classrooms: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "aside-list__empty-container"
            }, _react.default.createElement("figure", {
              className: "aside-list__empty-icon"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            })), _react.default.createElement("h6", null, texts.empty.title), _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty.description), _react.default.createElement("footer", {
              className: "aside-list__empty-footer"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/management",
              className: "btn btn-secondary"
            }, texts.empty.action)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/aside/classrooms/index
      **********************************************/

      ims.set('./views/aside/classrooms/index', {
        hash: 3741634214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideClassrooms = AsideClassrooms;
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../context");
          var _empty = require("./empty");
          var _item = require("./item");
          var _framerMotion = require("framer-motion");
          function AsideClassrooms() {
            const {
              store,
              texts: {
                classrooms: texts,
                tour: textsTour
              }
            } = (0, _context.useModuleContext)();
            const contentAnimation = {
              initial: {
                opacity: 0,
                y: 15
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.3,
                easy: 'linear'
              }
            };
            const classrooms = Array.isArray(store.classrooms) ? store.classrooms : [];
            const total = classrooms.length;
            const cls = `classrooms-container aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            const link = store.user.roles.includes('teacher') ? '/classrooms/management' : '/classrooms/join';
            const actionLabel = store.user.roles.includes('teacher') ? texts.actions.create : texts.actions.join;
            const tour = store.isTeacher ? textsTour.teacher : textsTour.student;
            return _react.default.createElement(_framerMotion.motion.div, {
              ...contentAnimation,
              "data-tour": "5",
              "data-description": tour.classrooms.description,
              "data-title": tour.classrooms.title,
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/list"
            }, _react.default.createElement("h5", null, texts.title)), _react.default.createElement(_icons.IconButton, {
              icon: "plus",
              title: actionLabel,
              href: link
            })), _react.default.createElement(_list.List, {
              className: "aside-list__body",
              items: classrooms,
              control: _item.AsideClassroom,
              empty: _empty.EmptyAsideClassrooms
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/aside/classrooms/item
      *********************************************/

      ims.set('./views/aside/classrooms/item', {
        hash: 2334343149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideClassroom = AsideClassroom;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function AsideClassroom({
            item
          }) {
            const {
              texts: {
                classrooms: texts
              }
            } = (0, _context.useModuleContext)();
            const content = !item.description || item.description === '' ? texts.items.description : item.description;
            const title = !item.name || item.name === '' ? texts.items.name : item.name;
            return _react.default.createElement(_components.Link, {
              href: `/classrooms/view/${item.id}`,
              className: "aside-list__item-container",
              key: item.id
            }, _react.default.createElement("article", {
              className: "aside-list__item",
              key: item.id
            }, _react.default.createElement(_ui.EntityImage, {
              ratio: "square",
              src: item.picture,
              entity: "module"
            }), _react.default.createElement("section", {
              className: "item__content"
            }, _react.default.createElement("h6", null, title), _react.default.createElement("p", {
              className: "description"
            }, content))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/aside/drafts/empty
      ******************************************/

      ims.set('./views/aside/drafts/empty', {
        hash: 3977961536,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyAsideDraft = EmptyAsideDraft;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function EmptyAsideDraft() {
            const {
              texts: {
                drafts: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "aside-list__empty-container drafts-container"
            }, _react.default.createElement("figure", {
              className: "aside-list__empty-icon"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "module"
            })), _react.default.createElement("h6", null, texts.empty.title), _react.default.createElement("span", {
              className: "empty__list"
            }, texts.empty.description), _react.default.createElement("footer", null, _react.default.createElement(_components.Link, {
              href: "/modules/management",
              className: "btn btn-primary"
            }, texts.empty.action)));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/aside/drafts/index
      ******************************************/

      ims.set('./views/aside/drafts/index', {
        hash: 4224464770,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrafts = AsideDrafts;
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../context");
          var _empty = require("./empty");
          var _item = require("./item");
          var _framerMotion = require("framer-motion");
          function AsideDrafts() {
            const {
              store,
              texts: {
                drafts: texts,
                tour: textsTour
              }
            } = (0, _context.useModuleContext)();
            if (!store.isTeacher) return null;
            const drafts = Array.isArray(store.drafts) ? store.drafts : [];
            const total = drafts.length;
            const cls = `drafts-container aside-list${total === 0 ? ' aside-list--empty' : ''}`;
            const tour = store.isTeacher ? textsTour.teacher : textsTour.student;
            const contentAnimation = {
              initial: {
                opacity: 0,
                y: 15
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.3,
                easy: 'linear'
              }
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              "data-tour": "4",
              ...contentAnimation,
              "data-description": tour.drafts.description,
              "data-title": tour.drafts.title,
              className: cls
            }, _react.default.createElement("header", {
              className: "aside-list__header"
            }, _react.default.createElement(_components.Link, {
              href: "/modules/list?tab=drafts"
            }, _react.default.createElement("h5", null, texts.title)), _react.default.createElement(_icons.IconButton, {
              icon: "plus",
              title: texts.action,
              href: "/modules/management"
            })), _react.default.createElement(_list.List, {
              className: "aside-list__body",
              items: drafts,
              control: _item.AsideDraftItem,
              empty: _empty.EmptyAsideDraft
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/aside/drafts/item
      *****************************************/

      ims.set('./views/aside/drafts/item', {
        hash: 3290853220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDraftItem = AsideDraftItem;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function AsideDraftItem({
            item
          }) {
            const {
              texts: {
                drafts: texts
              }
            } = (0, _context.useModuleContext)();
            const content = !item.description || item.description === '' ? texts.items.description : item.description;
            const title = !item.title || item.title === '' ? texts.items.title : item.title;
            return _react.default.createElement(_components.Link, {
              href: `/modules/management?id=${item.id}`,
              className: "aside-list__item-container",
              key: item.id
            }, _react.default.createElement("article", {
              className: "aside-list__item",
              key: item.id
            }, _react.default.createElement(_ui.EntityImage, {
              ratio: "square",
              src: item.picture,
              entity: "module"
            }), _react.default.createElement("section", {
              className: "item__content"
            }, _react.default.createElement("h6", null, title), _react.default.createElement("p", {
              className: "description"
            }, content))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/aside/index
      ***********************************/

      ims.set('./views/aside/index', {
        hash: 488478691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _drafts = require("./drafts");
          var _classrooms = require("./classrooms");
          function Aside() {
            return _react.default.createElement("aside", {
              className: "home__aside"
            }, _react.default.createElement("div", {
              className: "sticky-container"
            }, _react.default.createElement(_drafts.AsideDrafts, null), _react.default.createElement(_classrooms.AsideClassrooms, null)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/assigments/index
      ****************************************/

      ims.set('./views/assigments/index', {
        hash: 1408889939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = Assignments;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _slider = require("../slider");
          function Assignments() {
            const {
              store,
              store: {
                assignments,
                texts
              }
            } = (0, _context.useModuleContext)();
            if (!assignments || !Array.isArray(assignments) || !assignments.length) return null;
            const output = [...assignments].map(item => _react.default.createElement(_item.AssignmentItem, {
              item: item,
              key: `assignment-${item.id}`
            }));
            const tour = store.isTeacher ? texts.tour.teacher : texts.tour.student;
            return _react.default.createElement("article", {
              "data-tour": "1",
              "data-description": tour.assignments.description,
              "data-title": tour.assignments.title,
              className: "assigments-list"
            }, _react.default.createElement(_ui.PageTitle, {
              title: texts.assignments.title,
              as: "h3"
            }), _react.default.createElement(_slider.Slider, null, output));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/assigments/item
      ***************************************/

      ims.set('./views/assigments/item', {
        hash: 2089448788,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function AssignmentItem({
            item
          }) {
            const {
              store: {
                globalTexts,
                texts: {
                  assignments: texts
                }
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_moduleCard.AssignmentCard, {
              entity: "assignment",
              id: item.id,
              classroom: item.classroom,
              item: item.module,
              texts: {
                ...texts,
                activities: globalTexts.activities
              },
              href: `/assignments/${item.id}`
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/community/index
      ***************************************/

      ims.set('./views/community/index', {
        hash: 16544003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityModules = CommunityModules;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _slider = require("../slider");
          var _sectionTitle = require("../section-title");
          var _ownerAssign = require("@aimpact/ailearn-app/modules/owner-assign.code");
          function CommunityModules() {
            const {
              store: {
                community: modules,
                texts,
                user
              }
            } = (0, _context.useModuleContext)();
            const [openModal, setOpenModal] = _react.default.useState({
              open: false,
              item: null
            });
            const cantAccess = !user.roles?.length || user.roles.length === 1 && user.roles[0] === 'student';
            if (cantAccess || !modules || !Array.isArray(modules) || !modules.length) return null;
            const toggleModal = item => setOpenModal(item);
            const output = [...modules].map(item => _react.default.createElement(_item.CommunityItem, {
              openModal: toggleModal,
              item: item,
              key: `module-${item.id}`
            }));
            const tour = store.isTeacher ? texts.tour.teacher : texts.tour.student;
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": tour.community.description,
              "data-title": tour.community.title,
              className: "assigments-list"
            }, _react.default.createElement(_sectionTitle.SectionTitle, {
              title: texts.community.title,
              href: "/community",
              actionText: texts.community.actions.link
            }), _react.default.createElement(_slider.Slider, null, output), openModal.open && _react.default.createElement(_ownerAssign.OwnerAssignForm, {
              item: openModal?.item,
              onClose: toggleModal,
              texts: texts,
              type: "community"
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/community/item
      **************************************/

      ims.set('./views/community/item', {
        hash: 1393301102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function CommunityItem({
            item,
            openModal
          }) {
            const {
              store: {
                globalTexts
              },
              texts: {
                community: texts
              }
            } = (0, _context.useModuleContext)();
            const onUse = event => {
              event.stopPropagation();
              openModal({
                open: true,
                item
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_moduleCard.ModuleCard, {
              className: "community-card",
              item: item,
              texts: {
                ...texts,
                activities: globalTexts.activities
              },
              entity: "assignment",
              href: item.playground.assignment
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, _react.default.createElement(_moduleCard.ModuleCardActionsFooter, null, item?.playground?.assignment && _react.default.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              href: item.playground.assignment
            }), _react.default.createElement(_icons.AppIconButton, {
              onClick: onUse,
              icon: "clone",
              title: texts.actions.use
            })))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3313986028,
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
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4056564868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _profileSection = require("./sections/profile-section");
          var _assigments = require("./assigments");
          var _aside = require("./aside");
          var _modules = require("./modules");
          var _community = require("./community");
          /*bundle*/
          function View({
            store
          }) {
            const [, setUpdated] = _react.default.useState(performance.now());
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setUpdated(performance.now()));
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const {
              assignments
            } = store;
            const contextValue = {
              store,
              fetching: store.fetching,
              texts,
              items: assignments
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.PageContainer, {
              className: "top-header"
            }, _react.default.createElement(_ui.DriverTourContainer, {
              name: "home",
              ready: store.ready,
              texts: texts?.tour?.buttons,
              className: "grid-container columns-8-4"
            }, _react.default.createElement("main", {
              className: "main-panel"
            }, _react.default.createElement(_profileSection.ProfileSection, null), _react.default.createElement(_modules.Modules, null), _react.default.createElement(_community.CommunityModules, null), _react.default.createElement(_assigments.Assignments, null)), _react.default.createElement(_aside.Aside, null))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/modules/index
      *************************************/

      ims.set('./views/modules/index', {
        hash: 368811445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modules = Modules;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _assign = require("@aimpact/ailearn-app/modules/assign");
          var _slider = require("../slider");
          var _sectionTitle = require("../section-title");
          function Modules() {
            const {
              store: {
                modules,
                texts
              }
            } = (0, _context.useModuleContext)();
            if (!modules || !Array.isArray(modules) || !modules.length) return null;
            const [openModal, setOpenModal] = _react.default.useState({
              open: false,
              item: null,
              action: null
            });
            const toggleModal = data => setOpenModal(data);
            const output = [...modules].map(item => _react.default.createElement(_item.ModuleItem, {
              toggleModal: toggleModal,
              item: item,
              key: `module-${item.id}`
            }));
            const tour = store.isTeacher ? texts.tour.teacher : texts.tour.student;
            return _react.default.createElement("article", {
              "data-tour": "2",
              "data-description": tour.modules.description,
              "data-title": tour.modules.title,
              className: "assigments-list"
            }, _react.default.createElement(_sectionTitle.SectionTitle, {
              title: texts.modules.title,
              href: "/modules/list",
              actionHref: "/modules/management"
            }), _react.default.createElement(_slider.Slider, null, output), openModal.open && _react.default.createElement(_assign.ModuleAssignments, {
              action: openModal.action,
              item: openModal.item,
              onClose: toggleModal,
              texts: texts.assign
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/modules/item
      ************************************/

      ims.set('./views/modules/item', {
        hash: 4073235609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleItem = ModuleItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function ModuleItem({
            item,
            toggleModal
          }) {
            const {
              store: {
                texts,
                globalTexts
              }
            } = (0, _context.useModuleContext)();
            const onAction = event => {
              event.stopPropagation();
              toggleModal({
                open: true,
                item,
                action: event.currentTarget.dataset.action
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_moduleCard.ModuleCard, {
              className: "module-card",
              item: item,
              texts: {
                ...texts,
                activities: globalTexts.activities
              }
            }, _react.default.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, _react.default.createElement(_moduleCard.ModuleCardActionsFooter, {
              item: item
            }, _react.default.createElement(_icons.AppIconButton, {
              "data-action": "share",
              onClick: onAction,
              icon: "assign",
              title: globalTexts.actions.assignToClassroom
            }), _react.default.createElement(_icons.AppIconButton, {
              "data-action": "dashboard",
              onClick: onAction,
              icon: "statistic",
              title: globalTexts.actions.dashboard
            })))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/section-title
      *************************************/

      ims.set('./views/section-title', {
        hash: 769531017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SectionTitle = SectionTitle;
          var _react = require("react");
          var _context = require("./context");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function SectionTitle({
            title,
            actionText,
            href,
            actionHref,
            validate = true
          }) {
            const {
              store: {
                globalTexts
              }
            } = (0, _context.useModuleContext)();
            const isAdmin = _session.sessionWrapper?.user?.roles?.includes('teacher');
            const showAction = isAdmin && validate;
            const action = actionText ?? globalTexts.actions.create;
            const hrefAction = actionHref ?? href;
            return _react.default.createElement(_ui.PageTitle, {
              title: title,
              as: "h3",
              href: href
            }, showAction && _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_components.Link, {
              href: hrefAction
            }, action)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/sections/drafts
      ***************************************/

      ims.set('./views/sections/drafts', {
        hash: 148903941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_framerMotion.motion.section, {
              className: "user-profile"
            }, _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                rotate: 0
              },
              animate: {
                rotate: 360
              },
              transition: {
                duration: 0.5,
                ease: 'linear'
              }
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            })), _react.default.createElement(_framerMotion.motion.div, {
              className: "user-profile__content",
              initial: {
                width: 0,
                opacity: 0
              },
              animate: {
                width: 'auto',
                opacity: 1
              },
              transition: {
                duration: 0.4,
                ease: 'easeOut',
                delay: 0.5
              }
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h6", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement("a", {
              href: "/me"
            }, texts.profile.edit))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/sections/modules
      ****************************************/

      ims.set('./views/sections/modules', {
        hash: 2211973510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCard = UserCard;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function UserCard() {
            const {
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", {
              className: "user-profile"
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            }), _react.default.createElement("div", {
              className: "user-profile__content"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement("div", {
              className: "card__actions"
            }, _react.default.createElement("link", {
              href: "/me"
            }, texts.profile.edit))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/sections/profile-section
      ************************************************/

      ims.set('./views/sections/profile-section', {
        hash: 2814746144,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileSection = ProfileSection;
          var _react = require("react");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function ProfileSection() {
            const {
              store,
              store: {
                user,
                texts
              }
            } = (0, _context.useModuleContext)();
            const contentAnimation = {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                duration: 0.3,
                delay: 0.4,
                easy: 'linear'
              }
            };
            const tour = store.isTeacher ? texts.tour.teacher : texts.tour.student;
            return _react.default.createElement("div", {
              "data-tour": "0",
              "data-description": tour.step0.description,
              "data-title": tour.step0.title,
              className: "user-profile__container"
            }, _react.default.createElement(_framerMotion.motion.section, {
              className: "user-profile",
              initial: {
                width: '50px',
                opacity: 0
              },
              animate: {
                width: '100%',
                opacity: 1
              },
              transition: {
                duration: 0.3,
                delay: 0.2,
                ease: 'easeOut'
              }
            }, _react.default.createElement(_framerMotion.motion.div, {
              className: "user-profile__img-container",
              initial: {
                rotate: -180
              },
              animate: {
                rotate: 0
              },
              transition: {
                duration: 0.4,
                ease: 'linear'
              }
            }, _react.default.createElement(_image.Image, {
              className: "user-profile__img",
              src: user.photoURL,
              alt: "Profile Picture"
            })), _react.default.createElement("div", {
              className: "user-profile__content"
            }, _react.default.createElement(_framerMotion.motion.div, {
              ...contentAnimation,
              className: "content"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "p2"
            }, user.email)), _react.default.createElement(_framerMotion.motion.div, {
              className: "card__actions",
              ...contentAnimation
            }, _react.default.createElement(_components.Link, {
              href: "/users/me"
            }, texts.profile.edit)))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/slider
      ******************************/

      ims.set('./views/slider', {
        hash: 255151109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slider = Slider;
          var _react = require("react");
          var _swiper = require("pragmate-ui/swiper");
          function Slider({
            children
          }) {
            const breakpoints = {
              0: {
                slidesPerView: 1.2
              },
              600: {
                slidesPerView: 2.1
              },
              1024: {
                slidesPerView: 3.1
              }
            };
            const specs = {
              // loop: true,
              // slidesPerView: 'auto',
              breakpoints,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
            };
            return _react.default.createElement(_swiper.SwiperSlider, {
              ...specs,
              className: "entity__list two-columns",
              spaceBetween: 20
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/assigments/item",
        "from": "AssignmentItem",
        "name": "AssignmentItem"
      }, {
        "im": "./views/community/item",
        "from": "CommunityItem",
        "name": "CommunityItem"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/modules/item",
        "from": "ModuleItem",
        "name": "ModuleItem"
      }, {
        "im": "./views/sections/drafts",
        "from": "UserCard",
        "name": "UserCard"
      }, {
        "im": "./views/sections/modules",
        "from": "UserCard",
        "name": "UserCard"
      }, {
        "im": "./views/sections/profile-section",
        "from": "ProfileSection",
        "name": "ProfileSection"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AssignmentItem') && _export("AssignmentItem", AssignmentItem = require ? require('./views/assigments/item').AssignmentItem : value);
        (require || prop === 'CommunityItem') && _export("CommunityItem", CommunityItem = require ? require('./views/community/item').CommunityItem : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'ModuleItem') && _export("ModuleItem", ModuleItem = require ? require('./views/modules/item').ModuleItem : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/drafts').UserCard : value);
        (require || prop === 'UserCard') && _export("UserCard", UserCard = require ? require('./views/sections/modules').UserCard : value);
        (require || prop === 'ProfileSection') && _export("ProfileSection", ProfileSection = require ? require('./views/sections/profile-section').ProfileSection : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIl9zZXNzaW9uIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImhpZGVUaW1lb3V0IiwiV2lkZ2V0IiwiVmlldyIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwic2Vzc2lvbldyYXBwZXIiLCJvbiIsIm9uTG9nb3V0Iiwib25Mb2dpbiIsImNsZWFyIiwidW5kZWZpbmVkIiwib2ZmIiwic2hvdyIsImNsZWFyVGltZW91dCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNTdG9yZSIsIml0ZW1zIiwiYXNzaWdubWVudHMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZHJhZnRzIiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJjb21tdW5pdHkiLCJ1c2VyIiwiaXNUZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsInNldCIsImJyZWFkY3J1bWIiLCJyZXNwb25zZSIsImdldEhvbWUiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5zdGFuY2UiLCJMZWFybmluZ01vZHVsZSIsImluZGV4IiwiZ2xvYmFsVGhpcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiRW1wdHlBc2lkZUNsYXNzcm9vbXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIiwiaWNvbiIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9uIiwiX2xpc3QiLCJfZW1wdHkiLCJfaXRlbSIsIl9mcmFtZXJNb3Rpb24iLCJBc2lkZUNsYXNzcm9vbXMiLCJ0b3VyIiwidGV4dHNUb3VyIiwiY29udGVudEFuaW1hdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXN5IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJsZW5ndGgiLCJjbHMiLCJsaW5rIiwiYWN0aW9uTGFiZWwiLCJhY3Rpb25zIiwiY3JlYXRlIiwiam9pbiIsInRlYWNoZXIiLCJzdHVkZW50IiwibW90aW9uIiwiZGl2IiwiSWNvbkJ1dHRvbiIsIkxpc3QiLCJjb250cm9sIiwiQXNpZGVDbGFzc3Jvb20iLCJfdWkiLCJjb250ZW50IiwibmFtZSIsImlkIiwia2V5IiwiRW50aXR5SW1hZ2UiLCJyYXRpbyIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJFbXB0eUFzaWRlRHJhZnQiLCJBc2lkZURyYWZ0cyIsIkFzaWRlRHJhZnRJdGVtIiwiX2RyYWZ0cyIsIl9jbGFzc3Jvb21zIiwiQXNpZGUiLCJfc2xpZGVyIiwiQXNzaWdubWVudHMiLCJvdXRwdXQiLCJBc3NpZ25tZW50SXRlbSIsIlBhZ2VUaXRsZSIsImFzIiwiU2xpZGVyIiwiX21vZHVsZUNhcmQiLCJGcmFnbWVudCIsIkFzc2lnbm1lbnRDYXJkIiwiY2xhc3Nyb29tIiwiYWN0aXZpdGllcyIsIl9zZWN0aW9uVGl0bGUiLCJfb3duZXJBc3NpZ24iLCJDb21tdW5pdHlNb2R1bGVzIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwidXNlU3RhdGUiLCJvcGVuIiwiY2FudEFjY2VzcyIsInRvZ2dsZU1vZGFsIiwiQ29tbXVuaXR5SXRlbSIsIlNlY3Rpb25UaXRsZSIsImFjdGlvblRleHQiLCJPd25lckFzc2lnbkZvcm0iLCJvbkNsb3NlIiwidHlwZSIsIm9uVXNlIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJNb2R1bGVDYXJkIiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJBcHBJY29uQnV0dG9uIiwidGVzdCIsIm9uQ2xpY2siLCJ1c2UiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfcHJvZmlsZVNlY3Rpb24iLCJfYXNzaWdtZW50cyIsIl9hc2lkZSIsIl9tb2R1bGVzIiwiX2NvbW11bml0eSIsInNldFVwZGF0ZWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkRyaXZlclRvdXJDb250YWluZXIiLCJidXR0b25zIiwiUHJvZmlsZVNlY3Rpb24iLCJNb2R1bGVzIiwiX2Fzc2lnbiIsIk1vZHVsZUl0ZW0iLCJhY3Rpb25IcmVmIiwiTW9kdWxlQXNzaWdubWVudHMiLCJhc3NpZ24iLCJvbkFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYXNzaWduVG9DbGFzc3Jvb20iLCJkYXNoYm9hcmQiLCJ2YWxpZGF0ZSIsImlzQWRtaW4iLCJzaG93QWN0aW9uIiwiaHJlZkFjdGlvbiIsIl9pbWFnZSIsIlVzZXJDYXJkIiwic2VjdGlvbiIsInJvdGF0ZSIsImVhc2UiLCJJbWFnZSIsInBob3RvVVJMIiwiYWx0Iiwid2lkdGgiLCJkZWxheSIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJwcm9maWxlIiwiZWRpdCIsInN0ZXAwIiwiX3N3aXBlciIsImNoaWxkcmVuIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BlY3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvY2xhc3Nyb29tcy9pdGVtLnRzeCIsIi90cy92aWV3cy9hc2lkZS9kcmFmdHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2RyYWZ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvZHJhZnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ21lbnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbW11bml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tbXVuaXR5L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZXMvaXRlbS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbi10aXRsZS50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvZHJhZnRzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9tb2R1bGVzLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9wcm9maWxlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFFBQUEsR0FBQUosT0FBQTtVQUNPO1VBQVUsTUFDWEssVUFBVyxTQUFRTixLQUFBLENBQUFPLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ0VDLFdBQVcsR0FBeUMsSUFBSTtZQUNoRSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBSixLQUFNLEdBQUcsSUFBSU4sTUFBQSxDQUFBVyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUwsS0FBTTtZQUNuQjtZQUVBTSxZQUFZQyxJQUFJO2NBQ2YsS0FBSyxDQUFDQSxJQUFJLENBQUM7Y0FFWFYsUUFBQSxDQUFBVyxjQUFjLENBQUNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUM7Y0FDMUNiLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0UsT0FBTyxDQUFDO1lBQ3pDO1lBRUFELFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2NBQ2YsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1ksS0FBSyxFQUFFO2NBQ25CLElBQUksQ0FBQ1gsV0FBVyxHQUFHWSxTQUFTO2NBQzVCaEIsUUFBQSxDQUFBVyxjQUFjLENBQUNNLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDSixRQUFRLENBQUM7WUFDNUMsQ0FBQztZQUVEQyxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNkZCxRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFFBQVEsQ0FBQztZQUMzQyxDQUFDO1lBRUQ7Ozs7WUFJQUssSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDZCxXQUFXLEVBQUU7Z0JBQ3JCZSxZQUFZLENBQUMsSUFBSSxDQUFDZixXQUFXLENBQUM7Z0JBQzlCLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUk7O2NBRXhCTCxXQUFBLENBQUFxQixZQUFZLENBQUNDLE9BQU8sR0FBRyxLQUFLO2NBQzVCLElBQUksQ0FBQyxDQUFBbEIsS0FBTSxDQUFDbUIsSUFBSSxFQUFFO1lBQ25CO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFwQixLQUFNLENBQUNZLEtBQUssRUFBRTtZQUNwQjs7VUFDQVMsT0FBQSxDQUFBdkIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RERCxJQUFBRixXQUFBLEdBQUFILE9BQUE7VUFFQSxJQUFBNkIsZ0JBQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBOEIsTUFBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUErQixNQUFBLEdBQUEvQixPQUFBO1VBRUEsSUFBQWdDLGVBQUEsR0FBQWhDLE9BQUE7VUFFTSxNQUFPWSxZQUFhLFNBQVFrQixNQUFBLENBQUFHLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTkMsT0FBTztZQUNQLElBQUlELEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ0csV0FBVztZQUMvQjtZQUNBLENBQUFDLEtBQU0sR0FBc0IsSUFBSVAsTUFBQSxDQUFBUSxZQUFZLENBQUNQLGVBQUEsQ0FBQVEsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDOUQsSUFBSUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sRUFBRUksS0FBSztZQUMxQjtZQUNBLENBQUFMLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUFNLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPM0MsUUFBQSxDQUFBVyxjQUFjLENBQUNnQyxJQUFJO1lBQzNCO1lBRUEsSUFBSUMsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDRCxJQUFJLEVBQUVFLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUM1QztZQUNBLElBQUlDLEtBQUtBLENBQUE7Y0FDUjtjQUNBLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFiLEtBQU0sQ0FBQ2EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBQyxXQUFZLENBQUNELEtBQUs7WUFDbkU7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ1YsS0FBSztZQUMvQjtZQUNBN0IsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBeUIsS0FBTSxDQUFDdEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNxQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFELFdBQVksR0FBRyxJQUFJckIsTUFBQSxDQUFBUSxZQUFZLENBQUMsMkJBQTJCLENBQUM7Y0FDakUsSUFBSSxDQUFDLENBQUFhLFdBQVksQ0FBQ3BDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDcUMsWUFBWSxDQUFDO2NBQ2pELElBQUksQ0FBQyxDQUFBRCxXQUFZLENBQUNFLEtBQUssRUFBRTtjQUN6QixJQUFJLENBQUMsQ0FBQWhCLEtBQU0sQ0FBQ2dCLEtBQUssRUFBRTtZQUNwQjtZQUVBLE1BQU01QixJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVEsS0FBTSxHQUFHOUIsUUFBQSxDQUFBVyxjQUFjO2dCQUU1QlosV0FBQSxDQUFBcUIsWUFBWSxDQUFDK0IsR0FBRyxDQUFDO2tCQUNoQjlCLE9BQU8sRUFBRSxLQUFLO2tCQUNkK0IsVUFBVSxFQUFFO2lCQUNaLENBQUM7Z0JBRUYsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF2QixLQUFNLENBQUNhLElBQUksQ0FBQ1csT0FBTyxFQUFFO2dCQUNqRCxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQzs7Z0JBRTVDLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDSSxJQUFJO2dCQUUxQixJQUFJLENBQUMsQ0FBQWxCLE1BQU8sR0FBR2tCLElBQUksQ0FBQ2xCLE1BQU07Z0JBQzFCLElBQUksQ0FBQyxDQUFBTixXQUFZLEdBQUd3QixJQUFJLENBQUN4QixXQUFXO2dCQUNwQyxJQUFJLENBQUMsQ0FBQU8sVUFBVyxHQUFHaUIsSUFBSSxDQUFDakIsVUFBVTtnQkFFbEMsTUFBTUMsT0FBTyxHQUFHZ0IsSUFBSSxDQUFDaEIsT0FBTyxJQUFJLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUdBLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQ0MsSUFBSSxJQUFHO2tCQUNsQyxNQUFNQyxRQUFRLEdBQUcsSUFBSW5DLGdCQUFBLENBQUFvQyxjQUFjLENBQUNGLElBQUksQ0FBQztrQkFDekMsT0FBT0MsUUFBUTtnQkFDaEIsQ0FBQyxDQUFDO2dCQUVGbkIsT0FBTyxDQUFDaUIsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUcsS0FBSyxLQUFJO2tCQUMzQjtrQkFDQSxJQUFJLENBQUMsQ0FBQXJCLE9BQVEsQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDWCxHQUFHLENBQUNRLElBQUksQ0FBQztnQkFDL0IsQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxDQUFBakIsU0FBVSxHQUFHZSxJQUFJLENBQUNmLFNBQVM7Z0JBRWhDLEtBQUssQ0FBQ0ssS0FBSyxHQUFHLElBQUk7Z0JBRWxCZ0IsVUFBVSxDQUFDNUQsS0FBSyxHQUFHLElBQUk7ZUFDdkIsQ0FBQyxPQUFPNkQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjtZQUNBakQsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBd0IsTUFBTyxHQUFHLEVBQUU7Y0FDakIsSUFBSSxDQUFDLENBQUFOLFdBQVksR0FBRyxFQUFFO2NBQ3RCLElBQUksQ0FBQyxDQUFBTyxVQUFXLEdBQUcsRUFBRTtjQUNyQixJQUFJLENBQUMsQ0FBQUMsT0FBUSxHQUFHLEVBQUU7Y0FDbEIsS0FBSyxDQUFDTSxLQUFLLEdBQUcsS0FBSztjQUNuQixJQUFJLENBQUNFLFlBQVksRUFBRTtjQUNuQixJQUFJLENBQUMsQ0FBQW5CLEtBQU0sR0FBR2QsU0FBUztZQUN4Qjs7VUFDQVEsT0FBQSxDQUFBaEIsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZIRCxJQUFBMkQsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUVNLFNBQVUyRSxvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUNMckMsS0FBSyxFQUFFO2dCQUFFTSxVQUFVLEVBQUVOO2NBQUs7WUFBRSxDQUM1QixHQUFHLElBQUFrQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLE9BQ0NMLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE2QixHQUMzQ1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQXdCLEdBQ3pDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTCxNQUFBLENBQUFPLE9BQU87Y0FBQ0MsSUFBSSxFQUFDO1lBQVcsRUFBRyxDQUNwQixFQUNUVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeEMsS0FBSyxDQUFDNEMsS0FBSyxDQUFDQyxLQUFLLENBQU0sRUFDNUJaLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFhLEdBQUV6QyxLQUFLLENBQUM0QyxLQUFLLENBQUNFLFdBQVcsQ0FBUSxFQUM5RGIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQTBCLEdBQzNDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFXLElBQUk7Y0FBQ0MsSUFBSSxFQUFDLHdCQUF3QjtjQUFDUCxTQUFTLEVBQUM7WUFBbUIsR0FDL0R6QyxLQUFLLENBQUM0QyxLQUFLLENBQUNLLE1BQU0sQ0FDYixDQUNDLENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQWIsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQXdGLEtBQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQXlGLE1BQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMEYsS0FBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUEyRixhQUFBLEdBQUEzRixPQUFBO1VBRU0sU0FBVTRGLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUNMckYsS0FBSztjQUNMK0IsS0FBSyxFQUFFO2dCQUFFTSxVQUFVLEVBQUVOLEtBQUs7Z0JBQUV1RCxJQUFJLEVBQUVDO2NBQVM7WUFBRSxDQUM3QyxHQUFHLElBQUF0QixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLE1BQU1tQixnQkFBZ0IsR0FBRztjQUN4QkMsT0FBTyxFQUFFO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFO2NBQUUsQ0FBRTtjQUM5QkMsT0FBTyxFQUFFO2dCQUFFRixPQUFPLEVBQUUsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFO2NBQUMsQ0FBRTtjQUM3QkUsVUFBVSxFQUFFO2dCQUFFQyxRQUFRLEVBQUUsR0FBRztnQkFBRUMsSUFBSSxFQUFFO2NBQVE7YUFDM0M7WUFFRCxNQUFNMUQsVUFBVSxHQUFHMkQsS0FBSyxDQUFDQyxPQUFPLENBQUNqRyxLQUFLLENBQUNxQyxVQUFVLENBQUMsR0FBR3JDLEtBQUssQ0FBQ3FDLFVBQVUsR0FBRyxFQUFFO1lBQzFFLE1BQU02RCxLQUFLLEdBQUc3RCxVQUFVLENBQUM4RCxNQUFNO1lBQy9CLE1BQU1DLEdBQUcsR0FBRyxrQ0FBa0NGLEtBQUssS0FBSyxDQUFDLEdBQUcsb0JBQW9CLEdBQUcsRUFBRSxFQUFFO1lBQ3ZGLE1BQU1HLElBQUksR0FBR3JHLEtBQUssQ0FBQ3dDLElBQUksQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsd0JBQXdCLEdBQUcsa0JBQWtCO1lBQ2pHLE1BQU0yRCxXQUFXLEdBQUd0RyxLQUFLLENBQUN3QyxJQUFJLENBQUNFLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHWixLQUFLLENBQUN3RSxPQUFPLENBQUNDLE1BQU0sR0FBR3pFLEtBQUssQ0FBQ3dFLE9BQU8sQ0FBQ0UsSUFBSTtZQUNwRyxNQUFNbkIsSUFBSSxHQUFHdEYsS0FBSyxDQUFDeUMsU0FBUyxHQUFHOEMsU0FBUyxDQUFDbUIsT0FBTyxHQUFHbkIsU0FBUyxDQUFDb0IsT0FBTztZQUVwRSxPQUNDM0MsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsYUFBQSxDQUFBd0IsTUFBTSxDQUFDQyxHQUFHO2NBQUEsR0FDTnJCLGdCQUFnQjtjQUFBLGFBQ1YsR0FBRztjQUFBLG9CQUNLRixJQUFJLENBQUNqRCxVQUFVLENBQUN3QyxXQUFXO2NBQUEsY0FDakNTLElBQUksQ0FBQ2pELFVBQVUsQ0FBQ3VDLEtBQUs7Y0FDakNKLFNBQVMsRUFBRTRCO1lBQUcsR0FFZHBDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFvQixHQUNyQ1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osV0FBQSxDQUFBVyxJQUFJO2NBQUNDLElBQUksRUFBQztZQUFrQixHQUM1QmYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBS3hDLEtBQUssQ0FBQzZDLEtBQUssQ0FBTSxDQUNoQixFQUNQWixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTCxNQUFBLENBQUE0QyxVQUFVO2NBQUNwQyxJQUFJLEVBQUMsTUFBTTtjQUFDRSxLQUFLLEVBQUUwQixXQUFXO2NBQUV2QixJQUFJLEVBQUVzQjtZQUFJLEVBQUksQ0FDbEQsRUFFVHJDLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNVLEtBQUEsQ0FBQThCLElBQUk7Y0FDSnZDLFNBQVMsRUFBQyxrQkFBa0I7Y0FDNUIzQyxLQUFLLEVBQUVRLFVBQVU7Y0FDakIyRSxPQUFPLEVBQUU3QixLQUFBLENBQUE4QixjQUFjO2NBQ3ZCdEMsS0FBSyxFQUFFTyxNQUFBLENBQUFkO1lBQW9CLEVBQzFCLENBQ1U7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuREEsSUFBQUosTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQXlILEdBQUEsR0FBQXpILE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUVNLFNBQVV3SCxjQUFjQSxDQUFDO1lBQUV6RDtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUNMekIsS0FBSyxFQUFFO2dCQUFFTSxVQUFVLEVBQUVOO2NBQUs7WUFBRSxDQUM1QixHQUFHLElBQUFrQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLE1BQU04QyxPQUFPLEdBQUcsQ0FBQzNELElBQUksQ0FBQ3FCLFdBQVcsSUFBSXJCLElBQUksQ0FBQ3FCLFdBQVcsS0FBSyxFQUFFLEdBQUc5QyxLQUFLLENBQUNGLEtBQUssQ0FBQ2dELFdBQVcsR0FBR3JCLElBQUksQ0FBQ3FCLFdBQVc7WUFDekcsTUFBTUQsS0FBSyxHQUFHLENBQUNwQixJQUFJLENBQUM0RCxJQUFJLElBQUk1RCxJQUFJLENBQUM0RCxJQUFJLEtBQUssRUFBRSxHQUFHckYsS0FBSyxDQUFDRixLQUFLLENBQUN1RixJQUFJLEdBQUc1RCxJQUFJLENBQUM0RCxJQUFJO1lBRTNFLE9BQ0NwRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixXQUFBLENBQUFXLElBQUk7Y0FBQ0MsSUFBSSxFQUFFLG9CQUFvQnZCLElBQUksQ0FBQzZELEVBQUUsRUFBRTtjQUFFN0MsU0FBUyxFQUFDLDRCQUE0QjtjQUFDOEMsR0FBRyxFQUFFOUQsSUFBSSxDQUFDNkQ7WUFBRSxHQUM3RnJELE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQyxrQkFBa0I7Y0FBQzhDLEdBQUcsRUFBRTlELElBQUksQ0FBQzZEO1lBQUUsR0FDakRyRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkMsR0FBQSxDQUFBSyxXQUFXO2NBQUNDLEtBQUssRUFBQyxRQUFRO2NBQUNDLEdBQUcsRUFBRWpFLElBQUksQ0FBQ2tFLE9BQU87Y0FBRUMsTUFBTSxFQUFDO1lBQVEsRUFBRyxFQUNqRTNELE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFlLEdBQ2pDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSyxLQUFLLENBQU0sRUFDaEJaLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFhLEdBQUUyQyxPQUFPLENBQUssQ0FDL0IsQ0FDRCxDQUNKO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFuRCxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBMEUsV0FBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUF5RSxNQUFBLEdBQUF6RSxPQUFBO1VBRU0sU0FBVW1JLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUNMN0YsS0FBSyxFQUFFO2dCQUFFSyxNQUFNLEVBQUVMO2NBQUs7WUFBRSxDQUN4QixHQUFHLElBQUFrQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLE9BQ0NMLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE4QyxHQUM1RFIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQXdCLEdBQ3pDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTCxNQUFBLENBQUFPLE9BQU87Y0FBQ0MsSUFBSSxFQUFDO1lBQVEsRUFBRyxDQUNqQixFQUNUVixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeEMsS0FBSyxDQUFDNEMsS0FBSyxDQUFDQyxLQUFLLENBQU0sRUFDNUJaLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFhLEdBQUV6QyxLQUFLLENBQUM0QyxLQUFLLENBQUNFLFdBQVcsQ0FBUSxFQUM5RGIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NQLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNKLFdBQUEsQ0FBQVcsSUFBSTtjQUFDQyxJQUFJLEVBQUMscUJBQXFCO2NBQUNQLFNBQVMsRUFBQztZQUFpQixHQUMxRHpDLEtBQUssQ0FBQzRDLEtBQUssQ0FBQ0ssTUFBTSxDQUNiLENBQ0MsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBYixXQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQXlFLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBd0YsS0FBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBeUYsTUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQTJGLGFBQUEsR0FBQTNGLE9BQUE7VUFFTSxTQUFVb0ksV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQ0w3SCxLQUFLO2NBQ0wrQixLQUFLLEVBQUU7Z0JBQUVLLE1BQU0sRUFBRUwsS0FBSztnQkFBRXVELElBQUksRUFBRUM7Y0FBUztZQUFFLENBQ3pDLEdBQUcsSUFBQXRCLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsSUFBSSxDQUFDckUsS0FBSyxDQUFDeUMsU0FBUyxFQUFFLE9BQU8sSUFBSTtZQUVqQyxNQUFNTCxNQUFNLEdBQUc0RCxLQUFLLENBQUNDLE9BQU8sQ0FBQ2pHLEtBQUssQ0FBQ29DLE1BQU0sQ0FBQyxHQUFHcEMsS0FBSyxDQUFDb0MsTUFBTSxHQUFHLEVBQUU7WUFDOUQsTUFBTThELEtBQUssR0FBRzlELE1BQU0sQ0FBQytELE1BQU07WUFDM0IsTUFBTUMsR0FBRyxHQUFHLDhCQUE4QkYsS0FBSyxLQUFLLENBQUMsR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFDbkYsTUFBTVosSUFBSSxHQUFHdEYsS0FBSyxDQUFDeUMsU0FBUyxHQUFHOEMsU0FBUyxDQUFDbUIsT0FBTyxHQUFHbkIsU0FBUyxDQUFDb0IsT0FBTztZQUNwRSxNQUFNbkIsZ0JBQWdCLEdBQUc7Y0FDeEJDLE9BQU8sRUFBRTtnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVDLENBQUMsRUFBRTtjQUFFLENBQUU7Y0FDOUJDLE9BQU8sRUFBRTtnQkFBRUYsT0FBTyxFQUFFLENBQUM7Z0JBQUVDLENBQUMsRUFBRTtjQUFDLENBQUU7Y0FDN0JFLFVBQVUsRUFBRTtnQkFBRUMsUUFBUSxFQUFFLEdBQUc7Z0JBQUVDLElBQUksRUFBRTtjQUFRO2FBQzNDO1lBRUQsT0FDQy9CLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNhLGFBQUEsQ0FBQXdCLE1BQU0sQ0FBQ0MsR0FBRztjQUFBLGFBQ0EsR0FBRztjQUFBLEdBQ1RyQixnQkFBZ0I7Y0FBQSxvQkFDRkYsSUFBSSxDQUFDbEQsTUFBTSxDQUFDeUMsV0FBVztjQUFBLGNBQzdCUyxJQUFJLENBQUNsRCxNQUFNLENBQUN3QyxLQUFLO2NBQzdCSixTQUFTLEVBQUU0QjtZQUFHLEdBRWRwQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBb0IsR0FDckNSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNKLFdBQUEsQ0FBQVcsSUFBSTtjQUFDQyxJQUFJLEVBQUM7WUFBMEIsR0FDcENmLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUt4QyxLQUFLLENBQUM2QyxLQUFLLENBQU0sQ0FDaEIsRUFDUFosTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBNEMsVUFBVTtjQUFDcEMsSUFBSSxFQUFDLE1BQU07Y0FBQ0UsS0FBSyxFQUFFN0MsS0FBSyxDQUFDaUQsTUFBTTtjQUFFRCxJQUFJLEVBQUM7WUFBcUIsRUFBRyxDQUNsRSxFQUNUZixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVSxLQUFBLENBQUE4QixJQUFJO2NBQUN2QyxTQUFTLEVBQUMsa0JBQWtCO2NBQUMzQyxLQUFLLEVBQUVPLE1BQU07Y0FBRTRFLE9BQU8sRUFBRTdCLEtBQUEsQ0FBQTJDLGNBQWM7Y0FBRW5ELEtBQUssRUFBRU8sTUFBQSxDQUFBMEM7WUFBZSxFQUFJLENBQ3pGO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUE1RCxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBeUgsR0FBQSxHQUFBekgsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBRU0sU0FBVXFJLGNBQWNBLENBQUM7WUFBRXRFO1VBQUksQ0FBRTtZQUN0QyxNQUFNO2NBQ0x6QixLQUFLLEVBQUU7Z0JBQUVLLE1BQU0sRUFBRUw7Y0FBSztZQUFFLENBQ3hCLEdBQUcsSUFBQWtDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTThDLE9BQU8sR0FBRyxDQUFDM0QsSUFBSSxDQUFDcUIsV0FBVyxJQUFJckIsSUFBSSxDQUFDcUIsV0FBVyxLQUFLLEVBQUUsR0FBRzlDLEtBQUssQ0FBQ0YsS0FBSyxDQUFDZ0QsV0FBVyxHQUFHckIsSUFBSSxDQUFDcUIsV0FBVztZQUN6RyxNQUFNRCxLQUFLLEdBQUcsQ0FBQ3BCLElBQUksQ0FBQ29CLEtBQUssSUFBSXBCLElBQUksQ0FBQ29CLEtBQUssS0FBSyxFQUFFLEdBQUc3QyxLQUFLLENBQUNGLEtBQUssQ0FBQytDLEtBQUssR0FBR3BCLElBQUksQ0FBQ29CLEtBQUs7WUFFL0UsT0FDQ1osTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osV0FBQSxDQUFBVyxJQUFJO2NBQUNDLElBQUksRUFBRSwwQkFBMEJ2QixJQUFJLENBQUM2RCxFQUFFLEVBQUU7Y0FBRTdDLFNBQVMsRUFBQyw0QkFBNEI7Y0FBQzhDLEdBQUcsRUFBRTlELElBQUksQ0FBQzZEO1lBQUUsR0FDbkdyRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUMsa0JBQWtCO2NBQUM4QyxHQUFHLEVBQUU5RCxJQUFJLENBQUM2RDtZQUFFLEdBQ2pEckQsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJDLEdBQUEsQ0FBQUssV0FBVztjQUFDQyxLQUFLLEVBQUMsUUFBUTtjQUFDQyxHQUFHLEVBQUVqRSxJQUFJLENBQUNrRSxPQUFPO2NBQUVDLE1BQU0sRUFBQztZQUFRLEVBQUcsRUFDakUzRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBZSxHQUNqQ1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBS0ssS0FBSyxDQUFNLEVBQ2hCWixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBYSxHQUFFMkMsT0FBTyxDQUFLLENBQy9CLENBQ0QsQ0FDSjtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBbkQsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFzSSxPQUFBLEdBQUF0SSxPQUFBO1VBQ0EsSUFBQXVJLFdBQUEsR0FBQXZJLE9BQUE7VUFDTSxTQUFVd0ksS0FBS0EsQ0FBQTtZQUNwQixPQUNDakUsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBT0MsU0FBUyxFQUFDO1lBQWEsR0FDN0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dELE9BQUEsQ0FBQUYsV0FBVyxPQUFHLEVBQ2Y3RCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUQsV0FBQSxDQUFBM0MsZUFBZSxPQUFHLENBQ2QsQ0FDQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFyQixNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBMEYsS0FBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUF5SCxHQUFBLEdBQUF6SCxPQUFBO1VBQ0EsSUFBQXlJLE9BQUEsR0FBQXpJLE9BQUE7VUFFTSxTQUFVMEksV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQ0xuSSxLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRThCLFdBQVc7Z0JBQUVDO2NBQUs7WUFBRSxDQUM3QixHQUFHLElBQUFrQyxRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBRXRCLElBQUksQ0FBQ3ZDLFdBQVcsSUFBSSxDQUFDa0UsS0FBSyxDQUFDQyxPQUFPLENBQUNuRSxXQUFXLENBQUMsSUFBSSxDQUFDQSxXQUFXLENBQUNxRSxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBQ25GLE1BQU1pQyxNQUFNLEdBQUcsQ0FBQyxHQUFHdEcsV0FBVyxDQUFDLENBQUN5QixHQUFHLENBQUNDLElBQUksSUFBSVEsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBa0QsY0FBYztjQUFDN0UsSUFBSSxFQUFFQSxJQUFJO2NBQUU4RCxHQUFHLEVBQUUsY0FBYzlELElBQUksQ0FBQzZELEVBQUU7WUFBRSxFQUFJLENBQUM7WUFDekcsTUFBTS9CLElBQUksR0FBR3RGLEtBQUssQ0FBQ3lDLFNBQVMsR0FBR1YsS0FBSyxDQUFDdUQsSUFBSSxDQUFDb0IsT0FBTyxHQUFHM0UsS0FBSyxDQUFDdUQsSUFBSSxDQUFDcUIsT0FBTztZQUN0RSxPQUNDM0MsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBQSxhQUNXLEdBQUc7Y0FBQSxvQkFDS2UsSUFBSSxDQUFDeEQsV0FBVyxDQUFDK0MsV0FBVztjQUFBLGNBQ2xDUyxJQUFJLENBQUN4RCxXQUFXLENBQUM4QyxLQUFLO2NBQ2xDSixTQUFTLEVBQUM7WUFBaUIsR0FFM0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMyQyxHQUFBLENBQUFvQixTQUFTO2NBQUMxRCxLQUFLLEVBQUU3QyxLQUFLLENBQUNELFdBQVcsQ0FBQzhDLEtBQUs7Y0FBRTJELEVBQUUsRUFBQztZQUFJLEVBQUcsRUFDckR2RSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkQsT0FBQSxDQUFBTSxNQUFNLFFBQUVKLE1BQU0sQ0FBVSxDQUNoQjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBSyxXQUFBLEdBQUFoSixPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUVPO1VBQVUsU0FDUjRJLGNBQWNBLENBQUM7WUFBRTdFO1VBQUksQ0FBRTtZQUMvQixNQUFNO2NBQ0x4RCxLQUFLLEVBQUU7Z0JBQ042QyxXQUFXO2dCQUNYZCxLQUFLLEVBQUU7a0JBQUVELFdBQVcsRUFBRUM7Z0JBQUs7Y0FBRTtZQUM3QixDQUNELEdBQUcsSUFBQWtDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ0wsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQVAsTUFBQSxDQUFBTSxPQUFBLENBQUFvRSxRQUFBLFFBQ0MxRSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0UsV0FBQSxDQUFBRSxjQUFjO2NBQ2RoQixNQUFNLEVBQUMsWUFBWTtjQUNuQk4sRUFBRSxFQUFFN0QsSUFBSSxDQUFDNkQsRUFBRTtjQUNYdUIsU0FBUyxFQUFFcEYsSUFBSSxDQUFDb0YsU0FBUztjQUN6QnBGLElBQUksRUFBRUEsSUFBSSxDQUFDdkIsTUFBTTtjQUNqQkYsS0FBSyxFQUFFO2dCQUFFLEdBQUdBLEtBQUs7Z0JBQUU4RyxVQUFVLEVBQUVoRyxXQUFXLENBQUNnRztjQUFVLENBQUU7Y0FDdkQ5RCxJQUFJLEVBQUUsZ0JBQWdCdkIsSUFBSSxDQUFDNkQsRUFBRTtZQUFFLEVBQzlCLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQXJELE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQXlJLE9BQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBcUosYUFBQSxHQUFBckosT0FBQTtVQUNBLElBQUFzSixZQUFBLEdBQUF0SixPQUFBO1VBRU0sU0FBVXVKLGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQ0xoSixLQUFLLEVBQUU7Z0JBQUV1QyxTQUFTLEVBQUVELE9BQU87Z0JBQUVQLEtBQUs7Z0JBQUVTO2NBQUk7WUFBRSxDQUMxQyxHQUFHLElBQUF5QixRQUFBLENBQUFJLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU0sQ0FBQzRFLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdsRixNQUFBLENBQUFNLE9BQUssQ0FBQzZFLFFBQVEsQ0FBQztjQUFFQyxJQUFJLEVBQUUsS0FBSztjQUFFNUYsSUFBSSxFQUFFO1lBQUksQ0FBRSxDQUFDO1lBRTdFLE1BQU02RixVQUFVLEdBQUcsQ0FBQzdHLElBQUksQ0FBQ0UsS0FBSyxFQUFFeUQsTUFBTSxJQUFLM0QsSUFBSSxDQUFDRSxLQUFLLENBQUN5RCxNQUFNLEtBQUssQ0FBQyxJQUFJM0QsSUFBSSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBVTtZQUNsRyxJQUFJMkcsVUFBVSxJQUFJLENBQUMvRyxPQUFPLElBQUksQ0FBQzBELEtBQUssQ0FBQ0MsT0FBTyxDQUFDM0QsT0FBTyxDQUFDLElBQUksQ0FBQ0EsT0FBTyxDQUFDNkQsTUFBTSxFQUFFLE9BQU8sSUFBSTtZQUVyRixNQUFNbUQsV0FBVyxHQUFHOUYsSUFBSSxJQUFJMEYsWUFBWSxDQUFDMUYsSUFBSSxDQUFDO1lBQzlDLE1BQU00RSxNQUFNLEdBQUcsQ0FBQyxHQUFHOUYsT0FBTyxDQUFDLENBQUNpQixHQUFHLENBQUNDLElBQUksSUFDbkNRLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNZLEtBQUEsQ0FBQW9FLGFBQWE7Y0FBQ04sU0FBUyxFQUFFSyxXQUFXO2NBQUU5RixJQUFJLEVBQUVBLElBQUk7Y0FBRThELEdBQUcsRUFBRSxVQUFVOUQsSUFBSSxDQUFDNkQsRUFBRTtZQUFFLEVBQzNFLENBQUM7WUFFRixNQUFNL0IsSUFBSSxHQUFHdEYsS0FBSyxDQUFDeUMsU0FBUyxHQUFHVixLQUFLLENBQUN1RCxJQUFJLENBQUNvQixPQUFPLEdBQUczRSxLQUFLLENBQUN1RCxJQUFJLENBQUNxQixPQUFPO1lBQ3RFLE9BQ0MzQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLGFBQ1csR0FBRztjQUFBLG9CQUNLZSxJQUFJLENBQUMvQyxTQUFTLENBQUNzQyxXQUFXO2NBQUEsY0FDaENTLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ3FDLEtBQUs7Y0FDaENKLFNBQVMsRUFBQztZQUFpQixHQUUzQlIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VFLGFBQUEsQ0FBQVUsWUFBWTtjQUFDNUUsS0FBSyxFQUFFN0MsS0FBSyxDQUFDUSxTQUFTLENBQUNxQyxLQUFLO2NBQUVHLElBQUksRUFBQyxZQUFZO2NBQUMwRSxVQUFVLEVBQUUxSCxLQUFLLENBQUNRLFNBQVMsQ0FBQ2dFLE9BQU8sQ0FBQ0Y7WUFBSSxFQUFJLEVBQzFHckMsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJELE9BQUEsQ0FBQU0sTUFBTSxRQUFFSixNQUFNLENBQVUsRUFFeEJhLFNBQVMsQ0FBQ0csSUFBSSxJQUNkcEYsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dFLFlBQUEsQ0FBQVcsZUFBZTtjQUFDbEcsSUFBSSxFQUFFeUYsU0FBUyxFQUFFekYsSUFBSTtjQUFFbUcsT0FBTyxFQUFFTCxXQUFXO2NBQUV2SCxLQUFLLEVBQUVBLEtBQUs7Y0FBRTZILElBQUksRUFBQztZQUFXLEVBQzVGLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQTFGLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBZ0osV0FBQSxHQUFBaEosT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFFTztVQUFVLFNBQ1I4SixhQUFhQSxDQUFDO1lBQUUvRixJQUFJO1lBQUV5RjtVQUFTLENBQUU7WUFDekMsTUFBTTtjQUNMakosS0FBSyxFQUFFO2dCQUFFNkM7Y0FBVyxDQUFFO2NBQ3RCZCxLQUFLLEVBQUU7Z0JBQUVRLFNBQVMsRUFBRVI7Y0FBSztZQUFFLENBQzNCLEdBQUcsSUFBQWtDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTXdGLEtBQUssR0FBR0MsS0FBSyxJQUFHO2NBQ3JCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QmQsU0FBUyxDQUFDO2dCQUFFRyxJQUFJLEVBQUUsSUFBSTtnQkFBRTVGO2NBQUksQ0FBRSxDQUFDO1lBQ2hDLENBQUM7WUFFRCxPQUNDUSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFBUCxNQUFBLENBQUFNLE9BQUEsQ0FBQW9FLFFBQUEsUUFDQzFFLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNrRSxXQUFBLENBQUF1QixVQUFVO2NBQ1Z4RixTQUFTLEVBQUMsZ0JBQWdCO2NBQzFCaEIsSUFBSSxFQUFFQSxJQUFJO2NBQ1Z6QixLQUFLLEVBQUU7Z0JBQUUsR0FBR0EsS0FBSztnQkFBRThHLFVBQVUsRUFBRWhHLFdBQVcsQ0FBQ2dHO2NBQVUsQ0FBRTtjQUN2RGxCLE1BQU0sRUFBQyxZQUFZO2NBQ25CNUMsSUFBSSxFQUFFdkIsSUFBSSxDQUFDeUcsVUFBVSxDQUFDQztZQUFVLEdBRWhDbEcsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tFLFdBQUEsQ0FBQTBCLGdCQUFnQjtjQUFDM0csSUFBSSxFQUFFQTtZQUFJLEdBQzNCUSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0UsV0FBQSxDQUFBMkIsdUJBQXVCLFFBQ3RCNUcsSUFBSSxFQUFFeUcsVUFBVSxFQUFFQyxVQUFVLElBQzVCbEcsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBbUcsYUFBYTtjQUFDM0YsSUFBSSxFQUFDLE9BQU87Y0FBQ0UsS0FBSyxFQUFFN0MsS0FBSyxDQUFDd0UsT0FBTyxDQUFDK0QsSUFBSTtjQUFFdkYsSUFBSSxFQUFFdkIsSUFBSSxDQUFDeUcsVUFBVSxDQUFDQztZQUFVLEVBQ3ZGLEVBRURsRyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTCxNQUFBLENBQUFtRyxhQUFhO2NBQUNFLE9BQU8sRUFBRVYsS0FBSztjQUFFbkYsSUFBSSxFQUFDLE9BQU87Y0FBQ0UsS0FBSyxFQUFFN0MsS0FBSyxDQUFDd0UsT0FBTyxDQUFDaUU7WUFBRyxFQUFJLENBQy9DLENBQ1IsQ0FDUCxDQUNYO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUF4RyxNQUFBLEdBQUF2RSxPQUFBO1VBU08sTUFBTWdMLGFBQWEsR0FBQXBKLE9BQUEsQ0FBQW9KLGFBQUEsR0FBR3pHLE1BQUEsQ0FBQU0sT0FBSyxDQUFDb0csYUFBYSxDQUFpQixFQUFvQixDQUFDO1VBQy9FLE1BQU1yRyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTCxNQUFBLENBQUFNLE9BQUssQ0FBQ3FHLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUNwSixPQUFBLENBQUFnRCxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWdEUsSUFBQTZDLEdBQUEsR0FBQXpILE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFtTCxNQUFBLEdBQUFuTCxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFFQSxJQUFBb0wsZUFBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUFxTCxXQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQXNMLE1BQUEsR0FBQXRMLE9BQUE7VUFDQSxJQUFBdUwsUUFBQSxHQUFBdkwsT0FBQTtVQUNBLElBQUF3TCxVQUFBLEdBQUF4TCxPQUFBO1VBRU87VUFBVSxTQUNSVSxJQUFJQSxDQUFDO1lBQUVIO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxHQUFHa0wsVUFBVSxDQUFDLEdBQUdsSCxNQUFBLENBQUFNLE9BQUssQ0FBQzZFLFFBQVEsQ0FBQ2dDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7WUFDeEQsTUFBTTtjQUFFcko7WUFBSyxDQUFFLEdBQUcvQixLQUFLO1lBQ3ZCLElBQUE0SyxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDckwsS0FBSyxDQUFDLEVBQUUsTUFBTWtMLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRXZELElBQUksQ0FBQ3BMLEtBQUssQ0FBQzRDLEtBQUssRUFBRSxPQUFPb0IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJDLEdBQUEsQ0FBQW9FLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUV2RCxNQUFNO2NBQUV6SjtZQUFXLENBQUUsR0FBRzlCLEtBQUs7WUFDN0IsTUFBTXdMLFlBQVksR0FBRztjQUNwQnhMLEtBQUs7Y0FDTHVMLFFBQVEsRUFBRXZMLEtBQUssQ0FBQ3VMLFFBQVE7Y0FDeEJ4SixLQUFLO2NBQ0xGLEtBQUssRUFBRUM7YUFDUDtZQUVELE9BQ0NrQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixRQUFBLENBQUF3RyxhQUFhLENBQUNnQixRQUFRO2NBQUN0SixLQUFLLEVBQUVxSjtZQUFZLEdBQzFDeEgsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJDLEdBQUEsQ0FBQXdFLGFBQWE7Y0FBQ2xILFNBQVMsRUFBQztZQUFZLEdBQ3BDUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkMsR0FBQSxDQUFBeUUsbUJBQW1CO2NBQ25CdkUsSUFBSSxFQUFDLE1BQU07Y0FDWHhFLEtBQUssRUFBRTVDLEtBQUssQ0FBQzRDLEtBQUs7Y0FDbEJiLEtBQUssRUFBRUEsS0FBSyxFQUFFdUQsSUFBSSxFQUFFc0csT0FBTztjQUMzQnBILFNBQVMsRUFBQztZQUE0QixHQUV0Q1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQVksR0FDM0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzRyxlQUFBLENBQUFnQixjQUFjLE9BQUcsRUFDbEI3SCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsUUFBQSxDQUFBYyxPQUFPLE9BQUcsRUFDWDlILE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMwRyxVQUFBLENBQUFqQyxnQkFBZ0IsT0FBRyxFQUNwQmhGLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUN1RyxXQUFBLENBQUEzQyxXQUFXLE9BQUcsQ0FDVCxFQUNQbkUsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dHLE1BQUEsQ0FBQTlDLEtBQUssT0FBRyxDQUNZLENBQ1AsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQWpFLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQXNNLE9BQUEsR0FBQXRNLE9BQUE7VUFDQSxJQUFBeUksT0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUFxSixhQUFBLEdBQUFySixPQUFBO1VBRU0sU0FBVXFNLE9BQU9BLENBQUE7WUFDdEIsTUFBTTtjQUNMOUwsS0FBSyxFQUFFO2dCQUFFc0MsT0FBTztnQkFBRVA7Y0FBSztZQUFFLENBQ3pCLEdBQUcsSUFBQWtDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsSUFBSSxDQUFDL0IsT0FBTyxJQUFJLENBQUMwRCxLQUFLLENBQUNDLE9BQU8sQ0FBQzNELE9BQU8sQ0FBQyxJQUFJLENBQUNBLE9BQU8sQ0FBQzZELE1BQU0sRUFBRSxPQUFPLElBQUk7WUFDdkUsTUFBTSxDQUFDOEMsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2xGLE1BQUEsQ0FBQU0sT0FBSyxDQUFDNkUsUUFBUSxDQUFDO2NBQUVDLElBQUksRUFBRSxLQUFLO2NBQUU1RixJQUFJLEVBQUUsSUFBSTtjQUFFd0IsTUFBTSxFQUFFO1lBQUksQ0FBRSxDQUFDO1lBQzNGLE1BQU1zRSxXQUFXLEdBQUdoRyxJQUFJLElBQUk0RixZQUFZLENBQUM1RixJQUFJLENBQUM7WUFFOUMsTUFBTThFLE1BQU0sR0FBRyxDQUFDLEdBQUc5RixPQUFPLENBQUMsQ0FBQ2lCLEdBQUcsQ0FBQ0MsSUFBSSxJQUNuQ1EsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksS0FBQSxDQUFBNkcsVUFBVTtjQUFDMUMsV0FBVyxFQUFFQSxXQUFXO2NBQUU5RixJQUFJLEVBQUVBLElBQUk7Y0FBRThELEdBQUcsRUFBRSxVQUFVOUQsSUFBSSxDQUFDNkQsRUFBRTtZQUFFLEVBQzFFLENBQUM7WUFDRixNQUFNL0IsSUFBSSxHQUFHdEYsS0FBSyxDQUFDeUMsU0FBUyxHQUFHVixLQUFLLENBQUN1RCxJQUFJLENBQUNvQixPQUFPLEdBQUczRSxLQUFLLENBQUN1RCxJQUFJLENBQUNxQixPQUFPO1lBQ3RFLE9BQ0MzQyxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLGFBQ1csR0FBRztjQUFBLG9CQUNLZSxJQUFJLENBQUNoRCxPQUFPLENBQUN1QyxXQUFXO2NBQUEsY0FDOUJTLElBQUksQ0FBQ2hELE9BQU8sQ0FBQ3NDLEtBQUs7Y0FDOUJKLFNBQVMsRUFBQztZQUFpQixHQUUzQlIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VFLGFBQUEsQ0FBQVUsWUFBWTtjQUFDNUUsS0FBSyxFQUFFN0MsS0FBSyxDQUFDTyxPQUFPLENBQUNzQyxLQUFLO2NBQUVHLElBQUksRUFBQyxlQUFlO2NBQUNrSCxVQUFVLEVBQUM7WUFBcUIsRUFBRyxFQUNsR2pJLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMyRCxPQUFBLENBQUFNLE1BQU0sUUFBRUosTUFBTSxDQUFVLEVBRXhCYSxTQUFTLENBQUNHLElBQUksSUFDZHBGLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUN3SCxPQUFBLENBQUFHLGlCQUFpQjtjQUNqQmxILE1BQU0sRUFBRWlFLFNBQVMsQ0FBQ2pFLE1BQU07Y0FDeEJ4QixJQUFJLEVBQUV5RixTQUFTLENBQUN6RixJQUFJO2NBQ3BCbUcsT0FBTyxFQUFFTCxXQUFXO2NBQ3BCdkgsS0FBSyxFQUFFQSxLQUFLLENBQUNvSztZQUFNLEVBRXBCLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQWpJLE1BQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBZ0osV0FBQSxHQUFBaEosT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFFTztVQUFVLFNBQ1J1TSxVQUFVQSxDQUFDO1lBQUV4SSxJQUFJO1lBQUU4RjtVQUFXLENBQUU7WUFDeEMsTUFBTTtjQUNMdEosS0FBSyxFQUFFO2dCQUFFK0IsS0FBSztnQkFBRWM7Y0FBVztZQUFFLENBQzdCLEdBQUcsSUFBQW9CLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTStILFFBQVEsR0FBR3RDLEtBQUssSUFBRztjQUN4QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJULFdBQVcsQ0FBQztnQkFBRUYsSUFBSSxFQUFFLElBQUk7Z0JBQUU1RixJQUFJO2dCQUFFd0IsTUFBTSxFQUFFOEUsS0FBSyxDQUFDdUMsYUFBYSxDQUFDQyxPQUFPLENBQUN0SDtjQUFNLENBQUUsQ0FBQztZQUM5RSxDQUFDO1lBRUQsT0FDQ2hCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUFQLE1BQUEsQ0FBQU0sT0FBQSxDQUFBb0UsUUFBQSxRQUNDMUUsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tFLFdBQUEsQ0FBQXVCLFVBQVU7Y0FBQ3hGLFNBQVMsRUFBQyxhQUFhO2NBQUNoQixJQUFJLEVBQUVBLElBQUk7Y0FBRXpCLEtBQUssRUFBRTtnQkFBRSxHQUFHQSxLQUFLO2dCQUFFOEcsVUFBVSxFQUFFaEcsV0FBVyxDQUFDZ0c7Y0FBVTtZQUFFLEdBQ3RHN0UsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tFLFdBQUEsQ0FBQTBCLGdCQUFnQjtjQUFDM0csSUFBSSxFQUFFQTtZQUFJLEdBQzNCUSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0UsV0FBQSxDQUFBMkIsdUJBQXVCO2NBQUM1RyxJQUFJLEVBQUVBO1lBQUksR0FDbENRLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNMLE1BQUEsQ0FBQW1HLGFBQWE7Y0FBQSxlQUNELE9BQU87Y0FDbkJFLE9BQU8sRUFBRTZCLFFBQVE7Y0FDakIxSCxJQUFJLEVBQUMsUUFBUTtjQUNiRSxLQUFLLEVBQUUvQixXQUFXLENBQUMwRCxPQUFPLENBQUNnRztZQUFpQixFQUMzQyxFQUNGdkksTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBbUcsYUFBYTtjQUFBLGVBQ0QsV0FBVztjQUN2QkUsT0FBTyxFQUFFNkIsUUFBUTtjQUNqQjFILElBQUksRUFBQyxXQUFXO2NBQ2hCRSxLQUFLLEVBQUUvQixXQUFXLENBQUMwRCxPQUFPLENBQUNpRztZQUFTLEVBQ25DLENBQ3VCLENBQ1IsQ0FDUCxDQUNYO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBLElBQUF4SSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBeUgsR0FBQSxHQUFBekgsT0FBQTtVQUNBLElBQUEwRSxXQUFBLEdBQUExRSxPQUFBO1VBRU0sU0FBVStKLFlBQVlBLENBQUM7WUFDNUI1RSxLQUFLO1lBQ0w2RSxVQUFVO1lBQ1YxRSxJQUFJO1lBQ0prSCxVQUFVO1lBQ1ZRLFFBQVEsR0FBRztVQUFJLENBT2Y7WUFDQSxNQUFNO2NBQ0x6TSxLQUFLLEVBQUU7Z0JBQUU2QztjQUFXO1lBQUUsQ0FDdEIsR0FBRyxJQUFBb0IsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNcUksT0FBTyxHQUFHN00sUUFBQSxDQUFBVyxjQUFjLEVBQUVnQyxJQUFJLEVBQUVFLEtBQUssRUFBRUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUNoRSxNQUFNZ0ssVUFBVSxHQUFHRCxPQUFPLElBQUlELFFBQVE7WUFDdEMsTUFBTXpILE1BQU0sR0FBR3lFLFVBQVUsSUFBSTVHLFdBQVcsQ0FBQzBELE9BQU8sQ0FBQ0MsTUFBTTtZQUN2RCxNQUFNb0csVUFBVSxHQUFHWCxVQUFVLElBQUlsSCxJQUFJO1lBQ3JDLE9BQ0NmLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUMyQyxHQUFBLENBQUFvQixTQUFTO2NBQUMxRCxLQUFLLEVBQUVBLEtBQUs7Y0FBRTJELEVBQUUsRUFBQyxJQUFJO2NBQUN4RCxJQUFJLEVBQUVBO1lBQUksR0FDekM0SCxVQUFVLElBQ1YzSSxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNKLFdBQUEsQ0FBQVcsSUFBSTtjQUFDQyxJQUFJLEVBQUU2SDtZQUFVLEdBQUc1SCxNQUFNLENBQVEsQ0FFeEMsQ0FDVTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBaEIsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFvTixNQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBMkYsYUFBQSxHQUFBM0YsT0FBQTtVQUVPO1VBQVUsU0FBVXFOLFFBQVFBLENBQUE7WUFDbEMsTUFBTTtjQUNMOU0sS0FBSyxFQUFFO2dCQUFFd0MsSUFBSTtnQkFBRVQ7Y0FBSztZQUFFLENBQ3RCLEdBQUcsSUFBQWtDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ0wsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsYUFBQSxDQUFBd0IsTUFBTSxDQUFDbUcsT0FBTztjQUFDdkksU0FBUyxFQUFDO1lBQWMsR0FFdkNSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNhLGFBQUEsQ0FBQXdCLE1BQU0sQ0FBQ0MsR0FBRztjQUNWcEIsT0FBTyxFQUFFO2dCQUFFdUgsTUFBTSxFQUFFO2NBQUMsQ0FBRTtjQUN0QnBILE9BQU8sRUFBRTtnQkFBRW9ILE1BQU0sRUFBRTtjQUFHLENBQUU7Y0FDeEJuSCxVQUFVLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRSxHQUFHO2dCQUFFbUgsSUFBSSxFQUFFO2NBQVE7WUFBRSxHQUU3Q2pKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxNQUFBLENBQUFLLEtBQUs7Y0FBQzFJLFNBQVMsRUFBQyxtQkFBbUI7Y0FBQ2lELEdBQUcsRUFBRWpGLElBQUksQ0FBQzJLLFFBQVE7Y0FBRUMsR0FBRyxFQUFDO1lBQWlCLEVBQUcsQ0FDckUsRUFHYnBKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNhLGFBQUEsQ0FBQXdCLE1BQU0sQ0FBQ0MsR0FBRztjQUNWckMsU0FBUyxFQUFDLHVCQUF1QjtjQUNqQ2lCLE9BQU8sRUFBRTtnQkFBRTRILEtBQUssRUFBRSxDQUFDO2dCQUFFM0gsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNqQ0UsT0FBTyxFQUFFO2dCQUFFeUgsS0FBSyxFQUFFLE1BQU07Z0JBQUUzSCxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3RDRyxVQUFVLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRSxHQUFHO2dCQUFFbUgsSUFBSSxFQUFFLFNBQVM7Z0JBQUVLLEtBQUssRUFBRTtjQUFHO1lBQUUsR0FFMUR0SixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBUyxHQUN2QlIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsYUFBSy9CLElBQUksQ0FBQytLLFdBQVcsQ0FBTSxFQUMzQnZKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFJLEdBQUVoQyxJQUFJLENBQUNnTCxLQUFLLENBQVEsQ0FDbkMsRUFDTnhKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFlLEdBQzdCUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFHUSxJQUFJLEVBQUM7WUFBSyxHQUFFaEQsS0FBSyxDQUFDMEwsT0FBTyxDQUFDQyxJQUFJLENBQUssQ0FDakMsQ0FDTSxDQUNHO1VBRW5COzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDQSxJQUFBYixNQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUVPO1VBQVUsU0FDUnFOLFFBQVFBLENBQUE7WUFDaEIsTUFBTTtjQUNMOU0sS0FBSyxFQUFFO2dCQUFFd0MsSUFBSTtnQkFBRVQ7Y0FBSztZQUFFLENBQ3RCLEdBQUcsSUFBQWtDLFFBQUEsQ0FBQUksZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ0wsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWMsR0FDaENSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxNQUFBLENBQUFLLEtBQUs7Y0FBQzFJLFNBQVMsRUFBQyxtQkFBbUI7Y0FBQ2lELEdBQUcsRUFBRWpGLElBQUksQ0FBQzJLLFFBQVE7Y0FBRUMsR0FBRyxFQUFDO1lBQWlCLEVBQUcsRUFDakZwSixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FDckNSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFTLEdBQ3ZCUixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxhQUFLL0IsSUFBSSxDQUFDK0ssV0FBVyxDQUFNLEVBQzNCdkosTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUksR0FBRWhDLElBQUksQ0FBQ2dMLEtBQUssQ0FBUSxDQUNuQyxFQUNOeEosTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWUsR0FDN0JSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1RLElBQUksRUFBQztZQUFLLEdBQUVoRCxLQUFLLENBQUMwTCxPQUFPLENBQUNDLElBQUksQ0FBUSxDQUN2QyxDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQTFKLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFvTixNQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQTBFLFdBQUEsR0FBQTFFLE9BQUE7VUFDQSxJQUFBMkYsYUFBQSxHQUFBM0YsT0FBQTtVQUVPO1VBQVUsU0FBVW9NLGNBQWNBLENBQUE7WUFDeEMsTUFBTTtjQUNMN0wsS0FBSztjQUNMQSxLQUFLLEVBQUU7Z0JBQUV3QyxJQUFJO2dCQUFFVDtjQUFLO1lBQUUsQ0FDdEIsR0FBRyxJQUFBa0MsUUFBQSxDQUFBSSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNbUIsZ0JBQWdCLEdBQUc7Y0FDeEJDLE9BQU8sRUFBRTtnQkFBRUMsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUN2QkUsT0FBTyxFQUFFO2dCQUFFRixPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3ZCRyxVQUFVLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRSxHQUFHO2dCQUFFd0gsS0FBSyxFQUFFLEdBQUc7Z0JBQUV2SCxJQUFJLEVBQUU7Y0FBUTthQUN2RDtZQUNELE1BQU1ULElBQUksR0FBR3RGLEtBQUssQ0FBQ3lDLFNBQVMsR0FBR1YsS0FBSyxDQUFDdUQsSUFBSSxDQUFDb0IsT0FBTyxHQUFHM0UsS0FBSyxDQUFDdUQsSUFBSSxDQUFDcUIsT0FBTztZQUN0RSxPQUNDM0MsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBQSxhQUNXLEdBQUc7Y0FBQSxvQkFDS2UsSUFBSSxDQUFDcUksS0FBSyxDQUFDOUksV0FBVztjQUFBLGNBQzVCUyxJQUFJLENBQUNxSSxLQUFLLENBQUMvSSxLQUFLO2NBQzVCSixTQUFTLEVBQUM7WUFBeUIsR0FFbkNSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNhLGFBQUEsQ0FBQXdCLE1BQU0sQ0FBQ21HLE9BQU87Y0FDZHZJLFNBQVMsRUFBQyxjQUFjO2NBQ3hCaUIsT0FBTyxFQUFFO2dCQUFFNEgsS0FBSyxFQUFFLE1BQU07Z0JBQUUzSCxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3RDRSxPQUFPLEVBQUU7Z0JBQUV5SCxLQUFLLEVBQUUsTUFBTTtnQkFBRTNILE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDdENHLFVBQVUsRUFBRTtnQkFBRUMsUUFBUSxFQUFFLEdBQUc7Z0JBQUV3SCxLQUFLLEVBQUUsR0FBRztnQkFBRUwsSUFBSSxFQUFFO2NBQVM7WUFBRSxHQUUxRGpKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNhLGFBQUEsQ0FBQXdCLE1BQU0sQ0FBQ0MsR0FBRztjQUNWckMsU0FBUyxFQUFDLDZCQUE2QjtjQUN2Q2lCLE9BQU8sRUFBRTtnQkFBRXVILE1BQU0sRUFBRSxDQUFDO2NBQUcsQ0FBRTtjQUN6QnBILE9BQU8sRUFBRTtnQkFBRW9ILE1BQU0sRUFBRTtjQUFDLENBQUU7Y0FDdEJuSCxVQUFVLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRSxHQUFHO2dCQUFFbUgsSUFBSSxFQUFFO2NBQVE7WUFBRSxHQUU3Q2pKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNzSSxNQUFBLENBQUFLLEtBQUs7Y0FBQzFJLFNBQVMsRUFBQyxtQkFBbUI7Y0FBQ2lELEdBQUcsRUFBRWpGLElBQUksQ0FBQzJLLFFBQVE7Y0FBRUMsR0FBRyxFQUFDO1lBQWlCLEVBQUcsQ0FDckUsRUFFYnBKLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ1IsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsYUFBQSxDQUFBd0IsTUFBTSxDQUFDQyxHQUFHO2NBQUEsR0FBS3JCLGdCQUFnQjtjQUFFaEIsU0FBUyxFQUFDO1lBQVMsR0FDcERSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLGFBQUsvQixJQUFJLENBQUMrSyxXQUFXLENBQU0sRUFDM0J2SixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBSSxHQUFFaEMsSUFBSSxDQUFDZ0wsS0FBSyxDQUFRLENBQzVCLEVBQ2J4SixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxhQUFBLENBQUF3QixNQUFNLENBQUNDLEdBQUc7Y0FBQ3JDLFNBQVMsRUFBQyxlQUFlO2NBQUEsR0FBS2dCO1lBQWdCLEdBQ3pEeEIsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osV0FBQSxDQUFBVyxJQUFJO2NBQUNDLElBQUksRUFBQztZQUFXLEdBQUVoRCxLQUFLLENBQUMwTCxPQUFPLENBQUNDLElBQUksQ0FBUSxDQUN0QyxDQUNSLENBQ1UsQ0FDWjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BEQSxJQUFBMUosTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUFtTyxPQUFBLEdBQUFuTyxPQUFBO1VBQ00sU0FBVStJLE1BQU1BLENBQUM7WUFBRXFGO1VBQVEsQ0FBRTtZQUNsQyxNQUFNQyxXQUFXLEdBQUc7Y0FDbkIsQ0FBQyxFQUFFO2dCQUNGQyxhQUFhLEVBQUU7ZUFDZjtjQUNELEdBQUcsRUFBRTtnQkFDSkEsYUFBYSxFQUFFO2VBQ2Y7Y0FDRCxJQUFJLEVBQUU7Z0JBQ0xBLGFBQWEsRUFBRTs7YUFFaEI7WUFDRCxNQUFNQyxLQUFLLEdBQUc7Y0FDYjtjQUNBO2NBQ0FGLFdBQVc7Y0FDWEcsVUFBVSxFQUFFO2dCQUNYQyxNQUFNLEVBQUUscUJBQXFCO2dCQUM3QkMsTUFBTSxFQUFFOzthQUVUO1lBQ0QsT0FDQ25LLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBLENBQUNxSixPQUFBLENBQUFRLFlBQVk7Y0FBQSxHQUFLSixLQUFLO2NBQUV4SixTQUFTLEVBQUMsMEJBQTBCO2NBQUM2SixZQUFZLEVBQUU7WUFBRSxHQUM1RVIsUUFBUSxDQUNLO1VBRWpCIiwiaWdub3JlTGlzdCI6W119